// 讲义生成：把版式选择（已保存视场 + 一个目标 + 若干现有批注 + 投影）
// 与当前重算的天区数据合成一页离线可打印 HTML。
//
// 防错设计：
//  - 所有坐标、地平量、星图均在调用时由当前 SkyModel 现场给出，
//    不读缓存快照、不引用任何网络资源（页面可完全离线打开/打印）；
//  - 投影名称与变形说明随版式当前投影选择逐次写入，切换投影后
//    重新生成的讲义标注的永远是新投影；
//  - 目标可见性严格按 aboveHorizon 判定：地平以下只写"不可见"，
//    绝不标为可见；
//  - 版式只存批注引用，本模块只渲染"当前仍存在"的批注，
//    缺失数量如实标注，不凭空复原内容。

import {
  belowHorizonObject,
  buildProjection,
  FOV_DISC_PX,
  graticuleObject,
  horizonLineObject,
  sphericalCircle,
  VIEW_SIZE,
  type ProjectionKind
} from './projections';
import { isTargetVisible, type SkyModel, type SkyTarget } from './computeSky';
import { azCompass, formatDec, formatRA } from './geoMath';
import type { Annotation, FovConfig, HandoutLayout, SiteState } from '../types';

/** 投影名称与变形说明（讲义上必须如实标注，随投影选择逐次写入） */
export const PROJECTION_INFO: Record<ProjectionKind, { name: string; distortion: string }> = {
  stereographic: {
    name: '立体投影（Stereographic）',
    distortion:
      '保角投影：视场中心附近局部形状保真，但比例尺随距中心的角距增大而放大，边缘目标被径向外放；图上像素距离不代表真实角距，等角距参考环的间距向外逐渐拉大。'
  },
  equidistant: {
    name: '等距方位投影（Azimuthal Equidistant）',
    distortion:
      '仅径向等距：图上任一点到视场中心的像素距离与球面角距成正比（同心参考环等间距）；垂直于径向的方向比例随半径失真，形状与面积均不守恒。'
  }
};

export interface HandoutContext {
  layout: HandoutLayout;
  /** 版式引用视场的几何参数（中心/半径） */
  fov: FovConfig;
  /** 用当前台站/UTC 与版式视场现场重算的天区模型 */
  sky: SkyModel;
  target: SkyTarget;
  /** 版式引用且当前仍存在的批注（已按 uuid 解析） */
  annotations: Annotation[];
  /** 版式引用但已被删除的批注数量 */
  missingAnnotations: number;
  site: SiteState;
  timeUtcIso: string;
  magLimit: number;
  horizonClip: boolean;
}

const KIND_LABEL: Record<SkyTarget['kind'], string> = {
  star: '恒星（星表 J2000.0 近似坐标）',
  sun: '太阳（astronomy-engine 动态视位置）',
  moon: '月球（astronomy-engine 动态视位置）',
  planet: '行星（astronomy-engine 动态视位置）'
};

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function fmtTime(iso: string): string {
  return iso.replace('.000Z', 'Z').replace('T', ' ');
}

/**
 * 目标可见性描述。地平以下只写"不可见"，绝不标为可见；
 * 目标不在版式视场内时如实说明（坐标表仍然有效）。
 */
function visibilityText(ctx: HandoutContext): string {
  const { target, fov } = ctx;
  const parts: string[] = [];
  if (target.aboveHorizon) {
    parts.push(`当前位于地平以上（高度 ${target.alt.toFixed(1)}°），可见`);
  } else {
    parts.push(`当前位于地平以下（高度 ${target.alt.toFixed(1)}°），不可见`);
  }
  if (!target.inFov) {
    parts.push(
      `不在本讲义视场范围内（距视场中心 ${target.sepFromCenter.toFixed(1)}°，视场角半径 ${fov.radiusDeg.toFixed(1)}°），星图上未标出`
    );
  }
  return parts.join('；');
}

/** 讲义内嵌星图（白底、打印友好）；数据全部来自传入的当前重算结果 */
function chartSvg(ctx: HandoutContext): string {
  const { fov, sky, target, annotations } = ctx;
  const built = buildProjection(ctx.layout.projection, fov.centerRa, fov.centerDec, fov.radiusDeg);
  const C = VIEW_SIZE / 2;

  const grat = built.path(graticuleObject());
  const step = fov.radiusDeg <= 20 ? 5 : fov.radiusDeg <= 45 ? 10 : 20;
  const rings: string[] = [];
  for (let r = step; r < fov.radiusDeg; r += step) {
    rings.push(built.path(sphericalCircle(fov.centerRa, fov.centerDec, r)));
  }
  const fovPath = built.path(sphericalCircle(fov.centerRa, fov.centerDec, fov.radiusDeg));
  const horizon = built.path(horizonLineObject(sky.horizon.nadirRa, sky.horizon.nadirDec));
  const below = built.path(belowHorizonObject(sky.horizon.nadirRa, sky.horizon.nadirDec));

  // 星点：与主视图/导出相同的三条独立筛选；地平以下未裁切时淡灰显示
  const starEls = sky.targets
    .filter((t) => isTargetVisible(t, ctx.horizonClip))
    .map((t) => {
      const p = built.projection([t.ra, t.dec]);
      if (!p) return '';
      const rad = Math.max(1.5, Math.min(6.5, 6.0 - t.mag * 0.9));
      const faint = !t.aboveHorizon ? ' opacity="0.4"' : '';
      if (t.kind === 'star') {
        return `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${rad.toFixed(1)}" fill="#1b2432"${faint}/>`;
      }
      if (t.kind === 'planet') {
        return `<rect x="${(p[0] - rad).toFixed(1)}" y="${(p[1] - rad).toFixed(1)}" width="${(rad * 2).toFixed(1)}" height="${(
          rad * 2
        ).toFixed(1)}" fill="#1c5fa8"${faint}/>`;
      }
      const fill = t.kind === 'sun' ? '#b07d10' : '#4d5a70';
      return `<polygon points="${p[0].toFixed(1)},${(p[1] - rad).toFixed(1)} ${(p[0] + rad).toFixed(1)},${p[1].toFixed(
        1
      )} ${p[0].toFixed(1)},${(p[1] + rad).toFixed(1)} ${(p[0] - rad).toFixed(1)},${p[1].toFixed(1)}" fill="${fill}"${faint}/>`;
    })
    .join('');

  // 批注：只画当前仍存在的；星图上用编号指代，文字集中在正文列表（避免白底上彩色小字难读）
  const annoEls = annotations
    .map((a, i) => {
      const p = built.projection([a.ra, a.dec]);
      if (!p) return '';
      return `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="6" fill="#ffffff" fill-opacity="0.55" stroke="${a.color}" stroke-width="2"/>` +
        `<text x="${(p[0] + 9).toFixed(1)}" y="${(p[1] + 4).toFixed(1)}" font-size="11" font-weight="bold" fill="#222">[${i + 1}]</text>`;
    })
    .join('');

  // 目标标记：讲义主角，只要在投影范围内就醒目标出；可见性由正文说明
  const tp = built.projection([target.ra, target.dec]);
  const targetEl = tp
    ? `<circle cx="${tp[0].toFixed(1)}" cy="${tp[1].toFixed(1)}" r="12" fill="none" stroke="#c0392b" stroke-width="2.2"/>` +
      `<circle cx="${tp[0].toFixed(1)}" cy="${tp[1].toFixed(1)}" r="3" fill="#c0392b"/>` +
      `<text x="${(tp[0] + 15).toFixed(1)}" y="${(tp[1] + 5).toFixed(1)}" font-size="13" font-weight="bold" fill="#c0392b">${esc(
        target.name
      )}</text>`
    : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${VIEW_SIZE}" height="${VIEW_SIZE}" viewBox="0 0 ${VIEW_SIZE} ${VIEW_SIZE}" font-family="sans-serif" class="chart">
<circle cx="${C}" cy="${C}" r="${FOV_DISC_PX}" fill="#ffffff" stroke="#333" stroke-width="1.5"/>
<clipPath id="hdisc"><circle cx="${C}" cy="${C}" r="${FOV_DISC_PX}"/></clipPath>
<g clip-path="url(#hdisc)">
<path d="${grat}" fill="none" stroke="#c7d0dd" stroke-width="0.6"/>
${rings.map((d) => `<path d="${d}" fill="none" stroke="#7a8db0" stroke-width="0.7" stroke-dasharray="2 3"/>`).join('\n')}
<path d="${below}" fill="#c0392b" opacity="0.08"/>
<path d="${horizon}" fill="none" stroke="#c0392b" stroke-width="1.6"/>
<path d="${fovPath}" fill="none" stroke="#1e8449" stroke-width="1.4"/>
${starEls}
${annoEls}
${targetEl}
</g>
</svg>`;
}

/** 生成完整的一页讲义 HTML（离线、可打印；无任何外部资源引用） */
export function buildHandoutHtml(ctx: HandoutContext): string {
  const proj = PROJECTION_INFO[ctx.layout.projection];
  const built = buildProjection(ctx.layout.projection, ctx.fov.centerRa, ctx.fov.centerDec, ctx.fov.radiusDeg);
  const edgeRatio = built.scaleRatioAt(ctx.fov.radiusDeg);
  const { target } = ctx;

  const annoItems =
    ctx.annotations.length > 0
      ? `<ol>${ctx.annotations
          .map(
            (a) =>
              `<li><span class="swatch" style="background:${esc(a.color)}"></span>${esc(a.text)}<span class="sub">（锚点 J2000：${formatRA(
                a.ra
              )} / ${formatDec(a.dec)}）</span></li>`
          )
          .join('')}</ol>`
      : '<p class="sub">本版式未选择批注。</p>';

  const missingNote =
    ctx.missingAnnotations > 0
      ? `<p class="warn">⚠ 版式中另有 ${ctx.missingAnnotations} 条批注引用已缺失（原批注已被删除），本讲义未包含其内容。</p>`
      : '';

  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8"/>
<title>观测讲义 · ${esc(ctx.layout.name)}</title>
<style>
  body { font-family: 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif; color: #111; background: #fff; margin: 0; }
  .page { max-width: 820px; margin: 0 auto; padding: 20px 24px 32px; }
  h1 { font-size: 20px; margin: 0 0 4px; }
  h2 { font-size: 14px; margin: 18px 0 8px; padding-bottom: 3px; border-bottom: 1px solid #999; }
  .meta { color: #444; font-size: 12px; line-height: 1.7; margin: 4px 0; }
  .toolbar { display: flex; gap: 10px; align-items: center; padding: 8px 0; border-bottom: 2px solid #111; margin-bottom: 10px; }
  .toolbar button { font-size: 13px; padding: 6px 14px; cursor: pointer; }
  .toolbar span { color: #666; font-size: 11px; }
  .chart { display: block; max-width: 100%; height: auto; margin: 6px auto; }
  table { border-collapse: collapse; font-size: 12.5px; }
  td, th { border: 1px solid #bbb; padding: 4px 10px; text-align: left; }
  th { background: #eee; }
  .sub { color: #555; font-size: 11px; }
  .warn { color: #a33; font-size: 12px; }
  .ok { color: #1e7a34; font-weight: bold; }
  .no { color: #a33; font-weight: bold; }
  .swatch { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 6px; border: 1px solid #999; }
  ol { margin: 6px 0; padding-left: 22px; font-size: 12.5px; }
  li { margin: 3px 0; }
  footer { margin-top: 20px; padding-top: 8px; border-top: 1px solid #999; color: #555; font-size: 11px; line-height: 1.7; }
  @media print { .toolbar { display: none; } .page { padding: 0; } }
</style>
</head>
<body>
<div class="page">
  <div class="toolbar">
    <button onclick="window.print()">打印本页</button>
    <span>本讲义为纯本地离线生成，未请求任何网络资源；数据在生成时刻现场重算。</span>
  </div>

  <h1>观测讲义：${esc(ctx.layout.name)}</h1>
  <p class="meta">
    台站：${esc(ctx.site.name)}（纬度 ${ctx.site.latitude.toFixed(4)}°，经度 ${ctx.site.longitude.toFixed(4)}°，海拔 ${ctx.site.height} m）<br/>
    时间：${fmtTime(ctx.timeUtcIso)}（UTC）· 儒略日 JD(TT) = ${ctx.sky.julianDay.toFixed(5)} · 格林威治视恒星时 ${ctx.sky.gmstHours.toFixed(4)} h
  </p>

  <h2>星图 · ${esc(proj.name)}</h2>
  ${chartSvg(ctx)}
  <p class="meta">
    视场：中心 ${formatRA(ctx.fov.centerRa)} / ${formatDec(ctx.fov.centerDec)}（J2000.0），球面角半径 ${ctx.fov.radiusDeg.toFixed(1)}°；
    绿色圆＝视场边界，红色线＝地平圈，浅红区＝地平以下半球，蓝色虚线环＝等角距参考环。
  </p>
  <p class="meta">
    投影变形说明：${esc(proj.distortion)}
    中心比例尺 ≈ ${built.pxPerDegreeAtCenter.toFixed(1)} px/°，视场边缘相对中心 ×${edgeRatio.toFixed(2)}；图上像素距离不代表实际角距（角距均按球面 haversine 计算）。
  </p>

  <h2>目标</h2>
  <table>
    <tr><th>名称</th><td>${esc(target.name)}（${esc(target.designation)}）</td></tr>
    <tr><th>类型</th><td>${KIND_LABEL[target.kind]}</td></tr>
    <tr><th>赤经 RA（J2000.0）</th><td>${formatRA(target.ra)}　<span class="sub">${target.ra.toFixed(4)}°</span></td></tr>
    <tr><th>赤纬 Dec（J2000.0）</th><td>${formatDec(target.dec)}　<span class="sub">${target.dec.toFixed(4)}°</span></td></tr>
    <tr><th>视星等</th><td>${target.mag.toFixed(2)}${
      target.kind === 'moon' && target.phaseFraction !== undefined
        ? `　<span class="sub">月相照亮 ${(target.phaseFraction * 100).toFixed(0)}%</span>`
        : ''
    }</td></tr>
    <tr><th>当前地平坐标（上述台站/时刻）</th><td>方位 ${target.az.toFixed(2)}°（${azCompass(target.az)}方）· 高度 <span class="${
      target.aboveHorizon ? 'ok' : 'no'
    }">${target.alt.toFixed(2)}°</span></td></tr>
    <tr><th>状态</th><td>${esc(visibilityText(ctx))}</td></tr>
  </table>

  <h2>批注（${ctx.annotations.length}）</h2>
  ${annoItems}
  ${missingNote}

  <footer>
    坐标系：J2000.0 平赤道/平春分点；时间基准 UTC。地平坐标由 astronomy-engine Rotation_EQJ_HOR 转换，无大气折射改正；
    太阳系天体为含光行差的 J2000 视位置。筛选设置：星等 ≤ ${ctx.magLimit.toFixed(1)}（仅恒星）· 地平线裁切：${
      ctx.horizonClip ? '开启（仅画地平以上）' : '关闭（地平以下目标淡显）'
    }。<br/>
    本页面由本地星图工具离线生成：无后端、无网络请求、无外部图层；星表为 J2000 近似坐标，仅供科普制图。
  </footer>
</div>
</body>
</html>`;
}

/** 打开打印窗口（由用户点击触发）；被拦截时提示改用导出 HTML */
export function openPrintWindow(html: string): void {
  const w = window.open('', '_blank');
  if (!w) {
    alert('浏览器拦截了弹出窗口。请允许本站弹出窗口后重试，或改用"导出讲义 HTML"离线打印。');
    return;
  }
  w.document.open();
  w.document.write(html);
  w.document.close();
}
