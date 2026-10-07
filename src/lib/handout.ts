// 离线讲义编排：从【当前可重算视图】把一份讲义版式解析成单页可打印页面。
//
// 数据纪律（对应验收）：
//  - 版式（HandoutLayout）只保存引用（视场 uuid / 目标 id / 批注 uuid）与投影选择，
//    不缓存任何坐标、星点或图层快照；本文件的所有数字都来自传入的当前 SkyModel；
//  - 被引用的视场/批注已被删除时，只在缺失清单中如实提示，绝不用旧数据复原；
//  - 目标在地平线以下时，页面明确标注「地平以下 · 不可见」，绝不标为可见；
//  - 不发起任何网络请求，不引用任何在线图层。

import {
  belowHorizonObject,
  buildProjection,
  FOV_DISC_PX,
  graticuleObject,
  horizonLineObject,
  sphericalCircle,
  type ProjectionKind
} from './projections';
import type { SkyModel, SkyTarget } from './computeSky';
import { angularSeparation, azCompass, formatDec, formatRA } from './geoMath';
import type { Annotation, FovConfig, HandoutLayout, SavedFov, SiteState } from '../types';

export interface MissingRef {
  kind: 'fov' | 'annotation' | 'target';
  uuid: string;
}

export interface ResolvedAnnotation {
  annotation: Annotation;
  /** 锚点落在当前视场圆内才会画进星图 */
  inFov: boolean;
}

export interface HandoutMeta {
  site: SiteState;
  timeUtcIso: string;
  julianDay: number;
  gmstHours: number;
  magLimit: number;
  horizonClip: boolean;
}

export interface HandoutData {
  layout: HandoutLayout;
  kind: ProjectionKind;
  projectionLabel: string;
  /** 讲义星图与全部数字的唯一数据源：当前可重算视图 */
  sky: SkyModel;
  fov: FovConfig;
  meta: HandoutMeta;
  /** 引用视场已删除 */
  fovMissing: boolean;
  /** 引用视场存在，但其参数与当前视图不一致（星图按当前视图绘制） */
  fovMismatch: boolean;
  savedFov: SavedFov | null;
  target: SkyTarget | null;
  targetMissing: boolean;
  annotations: ResolvedAnnotation[];
  missing: MissingRef[];
  /** 主目标是否在当前视场圆内 */
  targetInFov: boolean;
  hasMissingRefs: boolean;
}

export interface HandoutContext {
  sky: SkyModel;
  fov: FovConfig;
  meta: HandoutMeta;
  savedFovs: SavedFov[];
  annotations: Annotation[];
}

const KIND_LABEL: Record<SkyTarget['kind'], string> = {
  star: '恒星（星表 J2000.0）',
  sun: '太阳（动态视位置）',
  moon: '月球（动态视位置）',
  planet: '行星（动态视位置）'
};

function sameFov(a: FovConfig, b: FovConfig): boolean {
  return (
    Math.abs(a.centerRa - b.centerRa) < 1e-9 &&
    Math.abs(a.centerDec - b.centerDec) < 1e-9 &&
    Math.abs(a.radiusDeg - b.radiusDeg) < 1e-9
  );
}

/**
 * 按当前可重算视图解析版式。只做引用解析与实时标记，不修改、不复活任何数据。
 */
export function resolveHandout(layout: HandoutLayout, ctx: HandoutContext): HandoutData {
  const kind: ProjectionKind = layout.projection;
  const projectionLabel =
    kind === 'stereographic' ? '立体投影（Stereographic）' : '等距方位投影（Azimuthal Equidistant）';

  const missing: MissingRef[] = [];

  // —— 视场引用 ——
  let savedFov: SavedFov | null = null;
  let fovMissing = false;
  let fovMismatch = false;
  if (layout.fovUuid) {
    savedFov = ctx.savedFovs.find((f) => f.uuid === layout.fovUuid) ?? null;
    if (!savedFov) {
      fovMissing = true;
      missing.push({ kind: 'fov', uuid: layout.fovUuid });
    } else if (!sameFov(savedFov.fov, ctx.fov)) {
      fovMismatch = true;
    }
  }

  // —— 目标：始终取当前 SkyModel 的实时位置，绝不使用缓存坐标 ——
  let target: SkyTarget | null = null;
  let targetMissing = false;
  if (layout.targetId) {
    target = ctx.sky.targets.find((t) => t.id === layout.targetId) ?? null;
    if (!target) {
      targetMissing = true;
      missing.push({ kind: 'target', uuid: layout.targetId });
    }
  }
  const targetInFov = !!target && target.inFov;

  // —— 批注：只解析仍存在的；已删除的进缺失清单，不复活 ——
  const resolvedAnnos: ResolvedAnnotation[] = [];
  for (const uuid of layout.annotationUuids) {
    const a = ctx.annotations.find((x) => x.uuid === uuid);
    if (!a) {
      missing.push({ kind: 'annotation', uuid });
      continue;
    }
    const sep = angularSeparation(ctx.fov.centerRa, ctx.fov.centerDec, a.ra, a.dec);
    resolvedAnnos.push({ annotation: a, inFov: sep <= ctx.fov.radiusDeg });
  }

  return {
    layout,
    kind,
    projectionLabel,
    sky: ctx.sky,
    fov: ctx.fov,
    meta: ctx.meta,
    fovMissing,
    fovMismatch,
    savedFov,
    target,
    targetMissing,
    annotations: resolvedAnnos,
    missing,
    targetInFov,
    hasMissingRefs: missing.length > 0
  };
}

// ---------------------------------------------------------------------------
// 单页可打印 SVG（A4 纵向 794×1123 @96dpi；打印时由 CSS 适配纸面）
// ---------------------------------------------------------------------------

const PAGE_W = 794;
const PAGE_H = 1123;
const MARGIN = 40;
const CHART_TOP = 114;
const CHART_SIZE = 470;
const CHART_X = (PAGE_W - CHART_SIZE) / 2;
const CHART_CAPTION_GAP = 22;
const VIEW_N = 560; // 与 projections.VIEW_SIZE 一致（投影标定空间）

const INK = '#16233d';
const MUTED = '#5a6b88';
const LINE = '#9db2d4';
const PAPER = '#ffffff';
const PANEL_BG = '#f4f7fc';
const RED = '#c0392b';
const GREEN = '#1e8449';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function fmtTime(iso: string): string {
  return iso.replace('.000Z', 'Z').replace('T', ' ');
}

function beijingTime(iso: string): string {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return '—';
  // 同时给出北京时间（UTC+8），避免编辑把 UTC 当本地时间
  return `${new Date(t + 8 * 3600 * 1000).toISOString().replace('.000Z', 'Z').replace('T', ' ')}（UTC+8）`;
}

/** 按显示宽度折行（中文全角 / ASCII 半角估算） */
function wrapLines(text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  let line = '';
  let width = 0;
  for (const ch of text) {
    const w = /[　-鿿＀-￯]/.test(ch) ? 12 : 6.4;
    if (width + w > maxWidth && line) {
      lines.push(line);
      line = ch;
      width = w;
    } else {
      line += ch;
      width += w;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function distortionText(kind: ProjectionKind): string {
  return kind === 'stereographic'
    ? '本图为立体投影（Stereographic，等角方位投影）：自球面一点透视投影到切平面，保持局部角度（小范围形状）不变；面积与径向比例尺随离中心距离迅速放大，视场边缘被外放。图上像素距离不代表真实角距，蓝色等角距参考环在图上的间距向外递增。'
    : '本图为等距方位投影（Azimuthal Equidistant）：自投影中心起算的径向距离与真实球面角距成正比（r ∝ θ），蓝色等角距参考环在图上等间距；但垂直径向的方向存在拉伸、面积随离中心距离增大而变形，只有沿半径方向可用图上距离量角距。';
}

/** 生成讲义单页 SVG。星图与全部数字均取自 data（当前 SkyModel 解析结果）。 */
export function buildHandoutSvg(data: HandoutData): string {
  const chart = chartSvg(data);

  const boxY = CHART_TOP + CHART_SIZE + CHART_CAPTION_GAP;
  const colGap = 14;
  const colW = (PAGE_W - MARGIN * 2 - colGap) / 2;
  const leftX = MARGIN;
  const rightX = MARGIN + colW + colGap;

  const targetBox = targetBoxSvg(data, leftX, boxY, colW);
  const stationBox = stationBoxSvg(data, rightX, boxY, colW);
  const boxH = Math.max(targetBox.height, stationBox.height);

  const projY = boxY + boxH + 10;
  const projBox = projectionBoxSvg(data, leftX, projY, PAGE_W - MARGIN * 2);
  const annoY = projY + projBox.height + 10;
  const annoBox = annotationBoxSvg(data, leftX, annoY, PAGE_W - MARGIN * 2);
  const missingY = annoY + annoBox.height + 10;
  // 视场参数不一致（非缺失）也要如实提示，因此条件包含 fovMismatch
  const showNotice = data.hasMissingRefs || data.fovMismatch;
  const missingBox = showNotice ? missingBoxSvg(data, leftX, missingY, PAGE_W - MARGIN * 2) : null;

  const title = `星图讲义 · ${data.projectionLabel}`;
  const fovLine = `视场中心 ${formatRA(data.fov.centerRa)} / ${formatDec(data.fov.centerDec)}（J2000.0），球面角半径 ${data.fov.radiusDeg.toFixed(1)}°`;
  const footerY = PAGE_H - 30;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${PAGE_W}" height="${PAGE_H}" viewBox="0 0 ${PAGE_W} ${PAGE_H}" font-family="'PingFang SC','Microsoft YaHei','Noto Sans CJK SC',sans-serif">
<rect width="${PAGE_W}" height="${PAGE_H}" fill="${PAPER}"/>
<rect x="14" y="14" width="${PAGE_W - 28}" height="${PAGE_H - 28}" fill="none" stroke="${LINE}" stroke-width="1"/>

<text x="${MARGIN}" y="44" font-size="21" font-weight="bold" fill="${INK}">${esc(title)}</text>
<text x="${MARGIN}" y="68" font-size="11.5" fill="${MUTED}">${esc(fovLine)}；角距一律按球面（haversine）计算，图上像素距离不充当实际角距。</text>
<text x="${MARGIN}" y="86" font-size="11" fill="${MUTED}">本页由本地星图工具离线生成，无任何网络图层；星表为 J2000 近似值（约 0.01°），太阳系天体为含光行差的 J2000 视位置，仅供科普制图。</text>
<line x1="${MARGIN}" y1="98" x2="${PAGE_W - MARGIN}" y2="98" stroke="${LINE}" stroke-width="0.8"/>

${chart}

${targetBox.svg}
${stationBox.svg}
${projBox.svg}
${annoBox.svg}
${missingBox ? missingBox.svg : ''}

<text x="${MARGIN}" y="${footerY}" font-size="10" fill="${MUTED}">本地星图工具离线讲义 · 数据随当前视图实时重算（无快照、无网络）· 地平坐标由 astronomy-engine Rotation_EQJ_HOR 转换，无大气折射改正</text>
</svg>`;
}

// ------------------------------- 星图 -------------------------------

function chartSvg(data: HandoutData): string {
  // 与屏幕视图、SVG 导出共用同一投影构建与标定：
  // 切换投影后重新生成时，图与「投影名称」必然一致。
  const built = buildProjection(data.kind, data.fov.centerRa, data.fov.centerDec, data.fov.radiusDeg);
  const C = VIEW_N / 2;
  const s = CHART_SIZE / VIEW_N;

  const grat = built.path(graticuleObject());
  const step = data.fov.radiusDeg <= 20 ? 5 : data.fov.radiusDeg <= 45 ? 10 : 20;
  const rings: string[] = [];
  for (let r = step; r < data.fov.radiusDeg; r += step) {
    rings.push(built.path(sphericalCircle(data.fov.centerRa, data.fov.centerDec, r)));
  }
  const horizonD = built.path(horizonLineObject(data.sky.horizon.nadirRa, data.sky.horizon.nadirDec));
  const belowD = built.path(belowHorizonObject(data.sky.horizon.nadirRa, data.sky.horizon.nadirDec));
  const fovD = built.path(sphericalCircle(data.fov.centerRa, data.fov.centerDec, data.fov.radiusDeg));

  // 讲义星图始终画地平圈与地平以下区域：可见性必须一眼可辨
  const starEls: string[] = [];
  for (const t of data.sky.targets) {
    if (!t.inFov || !t.passesMag) continue;
    if (data.meta.horizonClip && !t.aboveHorizon) continue;
    const p = built.projection([t.ra, t.dec]);
    if (!p) continue;
    const rad = Math.max(1.8, Math.min(7, 6.2 - t.mag * 0.9));
    const isMain = data.target?.id === t.id;
    const below = !t.aboveHorizon;
    const opacity = below && !data.meta.horizonClip ? 0.32 : 1;
    let shape: string;
    if (t.kind === 'star') {
      shape = `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${rad.toFixed(1)}" fill="#ffffff" opacity="${opacity}"/>`;
    } else if (t.kind === 'planet') {
      shape = `<rect x="${(p[0] - rad).toFixed(1)}" y="${(p[1] - rad).toFixed(1)}" width="${(rad * 2).toFixed(1)}" height="${(rad * 2).toFixed(
        1
      )}" fill="#9ecbff" opacity="${opacity}"/>`;
    } else {
      shape = `<polygon points="${p[0].toFixed(1)},${(p[1] - rad).toFixed(1)} ${(p[0] + rad).toFixed(1)},${p[1].toFixed(1)} ${p[0].toFixed(
        1
      )},${(p[1] + rad).toFixed(1)} ${(p[0] - rad).toFixed(1)},${p[1].toFixed(1)}" fill="${t.kind === 'sun' ? '#ffd27d' : '#dfe6f2'}" opacity="${opacity}"/>`;
    }
    let label = '';
    if (isMain || t.kind !== 'star' || t.mag <= 1.6) {
      label = `<text x="${(p[0] + 7).toFixed(1)}" y="${(p[1] + 3).toFixed(1)}" font-size="10.5" fill="#cfe0ff" paint-order="stroke" stroke="#0b1020" stroke-width="3">${esc(
        t.name
      )}${below ? '（地平下）' : ''}</text>`;
    }
    // 主目标：地平以上金色环；地平以下红色虚线环 + 不可见，绝不冒充可见
    const ring = isMain
      ? below
        ? `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${(rad + 6).toFixed(1)}" fill="none" stroke="#e74c3c" stroke-width="2.2" stroke-dasharray="4 3"/>`
        : `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${(rad + 6).toFixed(1)}" fill="none" stroke="#d4a017" stroke-width="2.2"/>`
      : '';
    starEls.push(ring + shape + label);
  }

  const annoEls = data.annotations
    .filter((x) => x.inFov)
    .map(({ annotation: a }) => {
      const p = built.projection([a.ra, a.dec]);
      if (!p) return '';
      return `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="5" fill="none" stroke="${a.color}" stroke-width="1.6"/><text x="${(p[0] + 8).toFixed(
        1
      )}" y="${(p[1] + 4).toFixed(1)}" font-size="11" fill="${a.color}" paint-order="stroke" stroke="#0b1020" stroke-width="3">${esc(a.text)}</text>`;
    })
    .join('\n');

  const edgeRatio = built.scaleRatioAt(data.fov.radiusDeg);
  const captionY = CHART_TOP + CHART_SIZE + 14;
  const caption =
    data.kind === 'stereographic'
      ? `星图（${esc(data.projectionLabel)}）· 中心比例尺 ≈ ${built.pxPerDegreeAtCenter.toFixed(
          1
        )} px/°，边缘径向外放 ×${edgeRatio.toFixed(2)}；绿圆＝视场边界，蓝虚线环＝等角距参考环，红线＝地平圈，红色半透明区＝地平以下。`
      : `星图（${esc(data.projectionLabel)}）· 中心比例尺 ≈ ${built.pxPerDegreeAtCenter.toFixed(
          1
        )} px/°，径向 r 与球面角距成正比；绿圆＝视场边界，蓝虚线环＝等角距参考环（图上等间距），红线＝地平圈，红色半透明区＝地平以下。`;

  return `<rect x="${CHART_X}" y="${CHART_TOP}" width="${CHART_SIZE}" height="${CHART_SIZE}" fill="#0b1020" stroke="${LINE}" stroke-width="1" rx="4"/>
<g transform="translate(${CHART_X},${CHART_TOP}) scale(${s})">
<circle cx="${C}" cy="${C}" r="${FOV_DISC_PX}" fill="#0b1020"/>
<clipPath id="hd-disc"><circle cx="${C}" cy="${C}" r="${FOV_DISC_PX}"/></clipPath>
<g clip-path="url(#hd-disc)">
<path d="${grat}" fill="none" stroke="#27406a" stroke-width="0.6"/>
${rings.map((d) => `<path d="${d}" fill="none" stroke="#3d6ea5" stroke-width="0.7" stroke-dasharray="2 3"/>`).join('\n')}
<path d="${belowD}" fill="#c0392b" opacity="0.22"/>
<path d="${horizonD}" fill="none" stroke="#e74c3c" stroke-width="1.6"/>
<path d="${fovD}" fill="none" stroke="#27ae60" stroke-width="1.4"/>
${starEls.join('\n')}
${annoEls}
<g stroke="#8aa0c8" stroke-width="1"><line x1="${C - 7}" y1="${C}" x2="${C + 7}" y2="${C}"/><line x1="${C}" y1="${C - 7}" x2="${C}" y2="${C + 7}"/></g>
</g>
</g>
<text x="${CHART_X}" y="${captionY}" font-size="10.5" fill="${MUTED}">${caption}</text>${
    data.meta.horizonClip
      ? `\n<text x="${CHART_X}" y="${captionY + 14}" font-size="10" fill="${GREEN}">当前视图开启地平线裁切：地平以下目标不绘入星图；主目标若在地平以下，信息区仍明确标注「不可见」。</text>`
      : `\n<text x="${CHART_X}" y="${captionY + 14}" font-size="10" fill="${MUTED}">当前视图关闭地平线裁切：地平以下目标半透明显示并在名称后注「地平下」，不得作为可见目标使用。</text>`
  }`;
}

// ------------------------------- 信息区块 -------------------------------

interface BoxSvg {
  svg: string;
  height: number;
}

function box(x: number, y: number, w: number, h: number, title: string, body: string): string {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${PANEL_BG}" stroke="${LINE}" stroke-width="0.8"/>
<text x="${x + 12}" y="${y + 22}" font-size="12.5" font-weight="bold" fill="${INK}">${esc(title)}</text>
<line x1="${x + 10}" y1="${y + 30}" x2="${x + w - 10}" y2="${y + 30}" stroke="${LINE}" stroke-width="0.6"/>
${body}`;
}

function kv(x: number, y: number, label: string, value: string, valueColor = INK, valueSize = 12): string {
  return `<text x="${x}" y="${y}" font-size="10.5" fill="${MUTED}">${esc(label)}</text><text x="${x}" y="${y + 16}" font-size="${valueSize}" font-weight="bold" fill="${valueColor}">${esc(
    value
  )}</text>`;
}

function targetBoxSvg(data: HandoutData, x: number, y: number, w: number): BoxSvg {
  const h = 172;
  let body: string;
  if (!data.layout.targetId) {
    body = `<text x="${x + 12}" y="${y + 60}" font-size="12" fill="${MUTED}">本讲义未指定主目标。</text><text x="${x + 12}" y="${y + 82}" font-size="11" fill="${MUTED}">可在编排区从当前视场目标中选择一个；坐标将随当前视图实时重算。</text>`;
  } else if (data.targetMissing || !data.target) {
    body = `<text x="${x + 12}" y="${y + 56}" font-size="12" fill="${RED}">指定目标当前无法在视图中解析。</text>
<text x="${x + 12}" y="${y + 78}" font-size="11" fill="${MUTED}">目标 id：${esc(data.layout.targetId)}</text>
<text x="${x + 12}" y="${y + 98}" font-size="11" fill="${MUTED}">可能因星等/地平线筛选或不在任何数据源中而缺失；讲义不凭空复原其坐标。</text>
<text x="${x + 12}" y="${y + 118}" font-size="11" fill="${MUTED}">请改选目标，或在编排区移除该引用。</text>`;
  } else {
    const t = data.target;
    const visible = t.aboveHorizon;
    const visText = visible
      ? `可见 · 高度 ${t.alt.toFixed(2)}°，方位 ${t.az.toFixed(2)}°（${azCompass(t.az)}方）`
      : `地平以下 · 不可见 · 高度 ${t.alt.toFixed(2)}°，方位 ${t.az.toFixed(2)}°（${azCompass(t.az)}方）`;
    body = `${kv(x + 12, y + 46, '目标', `${t.name}（${t.designation}）`)}
${kv(x + w / 2, y + 46, '类型', KIND_LABEL[t.kind], MUTED, 10.5)}
${kv(x + 12, y + 90, '赤经 RA（J2000.0）', `${formatRA(t.ra)} ＝ ${t.ra.toFixed(4)}°`)}
${kv(x + w / 2, y + 90, '赤纬 Dec（J2000.0）', `${formatDec(t.dec)} ＝ ${t.dec.toFixed(4)}°`)}
<text x="${x + 12}" y="${y + 138}" font-size="12.5" font-weight="bold" fill="${visible ? GREEN : RED}">${esc(visText)}</text>
<text x="${x + 12}" y="${y + 158}" font-size="10.5" fill="${MUTED}">视星等 ${t.mag.toFixed(2)} · 距视场中心球面角距 ${t.sepFromCenter.toFixed(2)}°${
      data.targetInFov ? '' : '（目标在当前视场圆外，星图中不绘出）'
    }</text>`;
  }
  return { svg: box(x, y, w, h, '① 主目标 · J2000 坐标与可见性', body), height: h };
}

function stationBoxSvg(data: HandoutData, x: number, y: number, w: number): BoxSvg {
  const meta = data.meta;
  const h = 172;
  const body = `${kv(x + 12, y + 46, '观测台站', meta.site.name)}
${kv(x + w / 2, y + 46, '海拔', `${meta.site.height} m`, MUTED, 11)}
${kv(x + 12, y + 90, '纬度（北纬为正）', `${meta.site.latitude.toFixed(4)}°`)}
${kv(x + w / 2, y + 90, '经度（东经为正）', `${meta.site.longitude.toFixed(4)}°`)}
${kv(x + 12, y + 134, '观测时间（UTC）', fmtTime(meta.timeUtcIso))}
<text x="${x + 12}" y="${y + 158}" font-size="10.5" fill="${MUTED}">北京时间 ${esc(beijingTime(meta.timeUtcIso))}；JD(TT) ${meta.julianDay.toFixed(
    5
  )}；GMST ${meta.gmstHours.toFixed(4)} h</text>`;
  return { svg: box(x, y, w, h, '② 台站与观测时间（UTC）', body), height: h };
}

function projectionBoxSvg(data: HandoutData, x: number, y: number, w: number): BoxSvg {
  const built = buildProjection(data.kind, data.fov.centerRa, data.fov.centerDec, data.fov.radiusDeg);
  const edge = built.scaleRatioAt(data.fov.radiusDeg);
  const head = `投影：${data.projectionLabel}｜中心比例尺 ≈ ${built.pxPerDegreeAtCenter.toFixed(1)} px/°，视场边缘相对比例尺 ×${edge.toFixed(2)}`;
  const lines = wrapLines(distortionText(data.kind), w - 28);
  const h = 50 + lines.length * 15 + 8;
  const body =
    `<text x="${x + 12}" y="${y + 48}" font-size="11" font-weight="bold" fill="${INK}">${esc(head)}</text>` +
    lines.map((ln, i) => `<text x="${x + 12}" y="${y + 68 + i * 15}" font-size="10.8" fill="${INK}">${esc(ln)}</text>`).join('');
  return { svg: box(x, y, w, h, '③ 投影名称及变形说明', body), height: h };
}

function annotationBoxSvg(data: HandoutData, x: number, y: number, w: number): BoxSvg {
  const h = 96;
  let body: string;
  if (data.annotations.length === 0) {
    body = `<text x="${x + 12}" y="${y + 52}" font-size="11" fill="${MUTED}">未选用批注。批注锚定 J2000 天球坐标；锚点在视场圆外时只列文字、不画进星图。</text>`;
  } else {
    const shown = data.annotations.slice(0, 3);
    body = shown
      .map(({ annotation: a, inFov }, i) => {
        const yy = y + 50 + i * 16;
        return `<circle cx="${x + 16}" cy="${yy - 4}" r="4" fill="${a.color}"/>
<text x="${x + 26}" y="${yy}" font-size="10.8" fill="${INK}">${esc(a.text)} 〈锚点 ${formatRA(a.ra)} / ${formatDec(a.dec)} J2000〉${
          inFov ? '' : '（锚点在当前视场外，未画入星图）'
        }</text>`;
      })
      .join('');
    if (data.annotations.length > 3) {
      body += `<text x="${x + 12}" y="${y + 50 + 3 * 16}" font-size="10.5" fill="${MUTED}">另有 ${data.annotations.length - 3} 条批注未在本页列出。</text>`;
    }
  }
  return { svg: box(x, y, w, h, '④ 选用批注（引用现有批注）', body), height: h };
}

function missingBoxSvg(data: HandoutData, x: number, y: number, w: number): BoxSvg {
  const lines: string[] = [];
  if (data.fovMissing) lines.push('版式引用的已保存视场已被删除：星图已按当前视图参数绘制，请改引其他视场或在编排区移除该引用。');
  if (data.fovMismatch && !data.fovMissing)
    lines.push(`引用视场「${data.savedFov?.name ?? ''}」的参数与当前视图不一致：本页星图按当前可重算视图绘制，不是引用视场的旧快照。`);
  for (const m of data.missing) {
    if (m.kind === 'annotation') lines.push('引用的一条批注已被删除：未复原任何文字或位置，可在编排区将其从版式移除。');
  }
  for (const m of data.missing) {
    if (m.kind === 'target') lines.push('指定目标当前无法解析：未复原坐标，可改选目标或在编排区移除引用。');
  }
  const h = 40 + lines.length * 15 + 8;
  const title = data.hasMissingRefs ? '⑤ 引用缺失提示（内容未被复原）' : '⑤ 版式与当前视图不一致提示';
  const body = lines.map((ln, i) => `<text x="${x + 12}" y="${y + 50 + i * 15}" font-size="10.8" fill="${RED}">• ${esc(ln)}</text>`).join('');
  return { svg: box(x, y, w, h, title, body), height: h };
}
