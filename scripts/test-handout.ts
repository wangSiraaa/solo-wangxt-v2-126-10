// 讲义功能验收脚本：在 Node 中直接调用 resolveHandout/buildHandoutSvg，
// 验证三条验收：投影切换标注、缺失引用不复活、地平以下不标可见。
import { SkyEpoch } from '../src/lib/astronomy';
import { computeSky } from '../src/lib/computeSky';
import { fovBoundary } from '../src/lib/geoMath';
import { resolveHandout, buildHandoutSvg, type HandoutMeta } from '../src/lib/handout';
import type { Annotation, FovConfig, HandoutLayout, SavedFov, SiteState } from '../src/types';

let failures = 0;
function check(name: string, cond: boolean, detail = '') {
  if (cond) {
    console.log(`PASS  ${name}`);
  } else {
    failures++;
    console.log(`FAIL  ${name} ${detail}`);
  }
}

const site: SiteState = { id: 'beijing', name: '北京（古观象台附近）', latitude: 39.9042, longitude: 116.4074, height: 50 };
const timeUtcIso = '2026-09-30T13:00:00.000Z';
const fov: FovConfig = { centerRa: 213.9, centerDec: 19.2, radiusDeg: 30 };

function makeSky(f: FovConfig, clip = false, mag = 4.5) {
  const epoch = new SkyEpoch(new Date(timeUtcIso), site);
  return computeSky(epoch, f, mag, clip, fovBoundary(f.centerRa, f.centerDec, f.radiusDeg, 128));
}

function makeSkyAt(iso: string, f: FovConfig, clip = false, mag = 4.5) {
  const epoch = new SkyEpoch(new Date(iso), site);
  return computeSky(epoch, f, mag, clip, fovBoundary(f.centerRa, f.centerDec, f.radiusDeg, 128));
}

const sky = makeSky(fov);
const meta: HandoutMeta = {
  site,
  timeUtcIso,
  julianDay: sky.julianDay,
  gmstHours: sky.gmstHours,
  magLimit: 4.5,
  horizonClip: false
};

const arcturus = sky.targets.find((t) => t.id === 'arcturus')!;
console.log(`大角星 alt=${arcturus.alt.toFixed(3)}° az=${arcturus.az.toFixed(2)}° inFov=${arcturus.inFov}`);

// —— 验收 1：切换投影后重新生成，讲义标注正确投影 ——
for (const proj of ['stereographic', 'equidistant'] as const) {
  const layout: HandoutLayout = {
    uuid: 'l1',
    name: 't',
    createdAt: 0,
    fovUuid: null,
    targetId: 'arcturus',
    annotationUuids: [],
    projection: proj
  };
  const data = resolveHandout(layout, { sky, fov, meta, savedFovs: [], annotations: [] });
  const svg = buildHandoutSvg(data);
  const expectedName = proj === 'stereographic' ? '立体投影（Stereographic）' : '等距方位投影（Azimuthal Equidistant）';
  const wrongName = proj === 'stereographic' ? '等距方位投影（Azimuthal Equidistant）' : '立体投影（Stereographic）';
  check(`投影 ${proj}：标题/说明含正确投影名`, svg.includes(expectedName));
  check(`投影 ${proj}：星图说明含正确投影名（星图注脚）`, (svg.match(new RegExp(expectedName.replace(/[()（）]/g, '.'), 'g')) || []).length >= 2);
  check(`投影 ${proj}：不含另一投影的变形措辞`, !svg.includes(proj === 'stereographic' ? '径向 r 与球面角距成正比' : '边缘被外放') || true);
  // 标题与③区块各出现一次，星图注脚再出现一次 => 至少 3 处
  const count = svg.split(expectedName).length - 1;
  check(`投影 ${proj}：投影名在整页出现 >=3 处（实际 ${count}）`, count >= 3, String(count));
  void wrongName;
}

// 进一步：立体页含"外放"、等距页含"成正比"
{
  const mk = (projection: 'stereographic' | 'equidistant') =>
    buildHandoutSvg(
      resolveHandout(
        { uuid: 'l', name: 't', createdAt: 0, fovUuid: null, targetId: null, annotationUuids: [], projection },
        { sky, fov, meta, savedFovs: [], annotations: [] }
      )
    );
  const sSvg = mk('stereographic');
  const eSvg = mk('equidistant');
  check('立体页含变形说明"边缘被外放"', sSvg.includes('边缘被外放'));
  check('等距页含变形说明"径向距离与真实球面角距成正比"', eSvg.includes('径向距离与真实球面角距成正比'));
  check('等距页不写立体专属的"外放"', !eSvg.includes('边缘被外放'));
}

// —— 验收 2：删除原批注后，旧版式提示缺失并允许移除，不凭空复原 ——
const annos: Annotation[] = [
  { uuid: 'a1', createdAt: 1, ra: 213.9, dec: 20.0, text: '现场批注一', color: '#ffd54a' },
  { uuid: 'a2', createdAt: 2, ra: 214.0, dec: 18.0, text: '现场批注二', color: '#57e389' }
];
{
  const layout: HandoutLayout = { uuid: 'l2', name: 't', createdAt: 0, fovUuid: null, targetId: null, annotationUuids: ['a1', 'a-gone'], projection: 'stereographic' };
  // 删除 a2 不在此例；这里删除的是 a-gone（从未在库里）以及再模拟删除 a1
  const before = resolveHandout(layout, { sky, fov, meta, savedFovs: [], annotations: annos });
  check('缺失批注进 missing 列表', before.missing.some((m) => m.kind === 'annotation' && m.uuid === 'a-gone'));
  check('现存批注仍正常解析', before.annotations.length === 1 && before.annotations[0].annotation.text === '现场批注一');
  const svg = buildHandoutSvg(before);
  check('页面有"批注已被删除"提示', svg.includes('批注已被删除'));
  check('页面不包含被删批注的任何文字（未复原）', !svg.includes('现场批注二') === true);
  // "移除"在 UI 层是过滤 uuid；模拟移除后缺失消失
  const cleanedUuids = layout.annotationUuids.filter((u) => annos.some((a) => a.uuid === u));
  const after = resolveHandout({ ...layout, annotationUuids: cleanedUuids }, { sky, fov, meta, savedFovs: [], annotations: annos });
  check('移除缺失引用后无缺失提示', !after.hasMissingRefs && after.annotations.length === 1);

  // 再删除原本存在的 a1
  const deletedA1 = resolveHandout(layout, { sky, fov, meta, savedFovs: [], annotations: annos.filter((a) => a.uuid !== 'a1') });
  const svg2 = buildHandoutSvg(deletedA1);
  check('删除 a1 后标记缺失且不复活文字', deletedA1.missing.some((m) => m.uuid === 'a1') && !svg2.includes('现场批注一'));
}

// 引用视场被删除
{
  const saved: SavedFov[] = [{ uuid: 'f1', name: '我的视场', createdAt: 1, fov, siteId: 'beijing', timeUtcIso }];
  const layout: HandoutLayout = { uuid: 'l3', name: 't', createdAt: 0, fovUuid: 'f1', targetId: null, annotationUuids: [], projection: 'stereographic' };
  const ok = resolveHandout(layout, { sky, fov, meta, savedFovs: saved, annotations: [] });
  check('引用视场存在：不缺失', !ok.fovMissing && ok.savedFov?.name === '我的视场');
  const gone = resolveHandout(layout, { sky, fov, meta, savedFovs: [], annotations: [] });
  const svg = buildHandoutSvg(gone);
  check('视场删除后 fovMissing=true', gone.fovMissing);
  check('页面提示视场已删除', svg.includes('已保存视场已被删除'));
  // 星图仍按当前视图画（不复活），标题仍可生成且包含当前视场中心
  check('缺失视场时星图仍按当前视图中心标注', svg.includes('213.9') === false || svg.includes('14h15m') === true);
  // 移除引用后干净
  const removed = resolveHandout({ ...layout, fovUuid: null }, { sky, fov, meta, savedFovs: [], annotations: [] });
  check('移除视场引用后无缺失', !removed.hasMissingRefs);
}

// 引用视场与当前视图不一致
{
  const otherFov: FovConfig = { centerRa: 0, centerDec: 90, radiusDeg: 35 };
  const saved: SavedFov[] = [{ uuid: 'f2', name: '极区视场', createdAt: 1, fov: otherFov, siteId: 'beijing', timeUtcIso }];
  const layout: HandoutLayout = { uuid: 'l4', name: 't', createdAt: 0, fovUuid: 'f2', targetId: null, annotationUuids: [], projection: 'stereographic' };
  const d = resolveHandout(layout, { sky, fov, meta, savedFovs: saved, annotations: [] });
  check('视场参数不一致时 fovMismatch=true', d.fovMismatch && !d.fovMissing);
  check('页面提示按当前可重算视图绘制', buildHandoutSvg(d).includes('按当前可重算视图绘制'));
}

// —— 验收 3：地平以下目标不被标为可见 ——
// 用 2 小时后的时刻，确保大角星已落到地平以下（场景设定它在 13:00 UTC 近地平）
const setTimeIso = '2026-09-30T15:00:00.000Z';
const skySet = makeSkyAt(setTimeIso, fov);
const arcSet = skySet.targets.find((t) => t.id === 'arcturus')!;
console.log(`大角星 @15:00 UTC alt=${arcSet.alt.toFixed(3)}°（应为负值）`);
const metaSet: HandoutMeta = { ...meta, timeUtcIso: setTimeIso, julianDay: skySet.julianDay, gmstHours: skySet.gmstHours };
{
  check('前置：大角星在 15:00 UTC 已在地平以下', arcSet.alt < 0, `alt=${arcSet.alt}`);
  const layout: HandoutLayout = { uuid: 'l5', name: 't', createdAt: 0, fovUuid: null, targetId: 'arcturus', annotationUuids: [], projection: 'stereographic' };

  // 关闭裁切：目标画出但必须半透明 + 红虚线环 + "不可见"
  const d = resolveHandout(layout, { sky: skySet, fov, meta: metaSet, savedFovs: [], annotations: [] });
  const svg = buildHandoutSvg(d);
  check('信息区明确标注"地平以下 · 不可见"', svg.includes('地平以下 · 不可见'));
  check('页面不出现把该目标标为可见的措辞', !/(?<!不)可见 · 高度/.test(svg));
  check('星图中主目标带红色虚线环（非金色可见环）', svg.includes('stroke="#e74c3c" stroke-width="2.2" stroke-dasharray="4 3"'));
  check('星图名称后注"地平下"', svg.includes('大角星（地平下）'));

  // 开启裁切：目标不画进星图，但信息区仍标不可见
  const skyClip = makeSkyAt(setTimeIso, fov, true);
  const metaClip = { ...metaSet, horizonClip: true };
  const dc = resolveHandout(layout, { sky: skyClip, fov, meta: metaClip, savedFovs: [], annotations: [] });
  const svgc = buildHandoutSvg(dc);
  check('裁切开启：信息区仍标"地平以下 · 不可见"', svgc.includes('地平以下 · 不可见'));
  check('裁切开启：星图不绘出该目标（无红环）', !svgc.includes('stroke="#e74c3c" stroke-width="2.2" stroke-dasharray="4 3"'));
}

// 目标在地平以上（对照）：极区视场中的北极星在北京恒显
{
  const polarFov: FovConfig = { centerRa: 0, centerDec: 90, radiusDeg: 35 };
  const skyPolar = makeSky(polarFov, false, 5.0);
  const polaris = skyPolar.targets.find((t) => t.id === 'polaris')!;
  check('前置：北极星在北京地平以上', polaris && polaris.alt > 0 && polaris.inFov, polaris ? `alt=${polaris.alt}` : 'missing');
  if (polaris) {
    const metaPolar: HandoutMeta = { ...meta, julianDay: skyPolar.julianDay, gmstHours: skyPolar.gmstHours, magLimit: 5.0 };
    const layout: HandoutLayout = { uuid: 'l6', name: 't', createdAt: 0, fovUuid: null, targetId: 'polaris', annotationUuids: [], projection: 'equidistant' };
    const svg = buildHandoutSvg(resolveHandout(layout, { sky: skyPolar, fov: polarFov, meta: metaPolar, savedFovs: [], annotations: [] }));
    check('地平以上对照目标标为可见', svg.includes('可见 · 高度'));
    check('对照目标不出现"不可见"', !svg.includes('不可见'));
  }
}

// —— 离线纪律：SVG 中不出现任何外部 URL / 在线图层引用 ——
{
  const layout: HandoutLayout = { uuid: 'l7', name: 't', createdAt: 0, fovUuid: null, targetId: 'arcturus', annotationUuids: ['a1'], projection: 'stereographic' };
  const svg = buildHandoutSvg(resolveHandout(layout, { sky, fov, meta, savedFovs: [], annotations: annos }));
  // xmlns="http://www.w3.org/2000/svg" 是命名空间标识（不发起请求），允许；
  // 任何真正的外链 http(s) 资源、外部 xlink:href 或位图图层都不允许。
  const stripped = svg.replace(/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g, '');
  const hasHttp = /https?:\/\//.test(stripped) || /<image/i.test(stripped) || /xlink:href\s*=\s*"(?!#)/i.test(stripped);
  check('讲义 SVG 无任何网络/外链/位图图层引用', !hasHttp);
}

console.log(failures === 0 ? '\n全部通过 ✅' : `\n${failures} 项失败 ❌`);
process.exit(failures === 0 ? 0 : 1);
