// 控制面板：观测位置/时间、视场中心与角半径、星等与地平线独立筛选、
// 演示场景、视场与批注的 IndexedDB 存取，以及离线讲义编排。

import { useState } from 'react';
import { OBSERVING_SITES } from '../data/sites';
import { DEMO_SCENARIOS } from '../data/scenarios';
import type { SkyTarget } from '../lib/computeSky';
import type { HandoutData } from '../lib/handout';
import type { FovConfig, HandoutLayout, SavedFov, Annotation, SiteState } from '../types';

/** 讲义编排草稿（= 未保存的版式内容） */
export interface HandoutDraft {
  name: string;
  fovUuid: string | null;
  targetId: string | null;
  annotationUuids: string[];
  projection: 'stereographic' | 'equidistant';
}

interface ControlsProps {
  site: SiteState;
  timeUtcIso: string;
  fov: FovConfig;
  magLimit: number;
  horizonClip: boolean;
  showHorizon: boolean;
  showGraticule: boolean;
  savedFovs: SavedFov[];
  annotations: Annotation[];
  handoutDraft: HandoutDraft;
  savedHandouts: HandoutLayout[];
  /** 当前视图中进入视场并通过星等筛选的目标（含地平以下，供选择并标注不可见） */
  handoutTargets: SkyTarget[];
  /** 草稿按当前视图实时解析的结果；sky 无效时为 null */
  handoutResolved: HandoutData | null;
  onChangeSite: (site: SiteState) => void;
  onChangeTime: (iso: string) => void;
  onChangeFov: (fov: FovConfig) => void;
  onChangeMag: (m: number) => void;
  onToggleHorizonClip: (v: boolean) => void;
  onToggleShowHorizon: (v: boolean) => void;
  onToggleGraticule: (v: boolean) => void;
  onApplyScenario: (id: string) => void;
  onSaveFov: (name: string) => void;
  onLoadFov: (f: SavedFov) => void;
  onDeleteFov: (uuid: string) => void;
  onAddAnnotation: (text: string, color: string) => void;
  onDeleteAnnotation: (uuid: string) => void;
  onChangeHandoutDraft: (patch: Partial<HandoutDraft>) => void;
  onSaveHandout: () => void;
  onLoadHandout: (h: HandoutLayout) => void;
  onDeleteHandout: (uuid: string) => void;
  onOpenHandout: () => void;
}

export default function Controls(p: ControlsProps) {
  const [fovName, setFovName] = useState('');
  const [noteText, setNoteText] = useState('');
  const [noteColor, setNoteColor] = useState('#ffd54a');

  const setRa = (v: number) => p.onChangeFov({ ...p.fov, centerRa: ((v % 360) + 360) % 360 });
  const setDec = (v: number) => p.onChangeFov({ ...p.fov, centerDec: Math.max(-90, Math.min(90, v)) });
  const setRadius = (v: number) => p.onChangeFov({ ...p.fov, radiusDeg: Math.max(1, Math.min(90, v)) });

  return (
    <div className="controls">
      <section className="ctl-block">
        <h3>演示场景</h3>
        <div className="btn-row">
          {DEMO_SCENARIOS.map((s) => (
            <button key={s.id} className="btn scenario" onClick={() => p.onApplyScenario(s.id)} title={s.description}>
              {s.label}
            </button>
          ))}
        </div>
        <p className="hint" title={DEMO_SCENARIOS.find((s) => s.id === 'horizon')?.description}>
          {DEMO_SCENARIOS.find((s) => s.id === 'horizon')?.description}
        </p>
      </section>

      <section className="ctl-block">
        <h3>观测位置与时间</h3>
        <label>
          位置
          <select
            value={p.site.id}
            onChange={(e) => {
              const found = OBSERVING_SITES.find((s) => s.id === e.target.value)!;
              p.onChangeSite({ ...found });
            }}
          >
            {OBSERVING_SITES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        {p.site.id === 'custom' && (
          <div className="num-row">
            <label>
              纬度°
              <input type="number" value={p.site.latitude} step={0.0001} onChange={(e) => p.onChangeSite({ ...p.site, latitude: Number(e.target.value) })} />
            </label>
            <label>
              经度°
              <input type="number" value={p.site.longitude} step={0.0001} onChange={(e) => p.onChangeSite({ ...p.site, longitude: Number(e.target.value) })} />
            </label>
          </div>
        )}
        <label>
          时间（UTC，非本地时区）
          <input type="datetime-local" step={1} value={p.timeUtcIso.slice(0, 19)} onChange={(e) => p.onChangeTime(e.target.value + 'Z')} />
        </label>
        <p className="hint">北京时间 = UTC + 8 小时。默认 2026-09-30 13:00 UTC（北京 21:00，大角星近地平）。</p>
      </section>

      <section className="ctl-block">
        <h3>视场（J2000 赤道坐标）</h3>
        <div className="num-row">
          <label>
            中心赤经°
            <input type="number" value={round3(p.fov.centerRa)} min={0} max={360} step={0.1} onChange={(e) => setRa(Number(e.target.value))} />
          </label>
          <label>
            中心赤纬°
            <input type="number" value={round3(p.fov.centerDec)} min={-90} max={90} step={0.1} onChange={(e) => setDec(Number(e.target.value))} />
          </label>
          <label>
            角半径°
            <input type="number" value={round3(p.fov.radiusDeg)} min={1} max={90} step={0.5} onChange={(e) => setRadius(Number(e.target.value))} />
          </label>
        </div>
        <p className="hint">视场边界是围绕中心的球面小圆；中心在极点时赤经自动失效。</p>
        <div className="save-row">
          <input placeholder="命名当前视场…" value={fovName} onChange={(e) => setFovName(e.target.value)} />
          <button className="btn" disabled={!fovName.trim()} onClick={() => { p.onSaveFov(fovName.trim()); setFovName(''); }}>
            存视场
          </button>
        </div>
        {p.savedFovs.length > 0 && (
          <ul className="store-list">
            {p.savedFovs.slice(0, 6).map((f) => (
              <li key={f.uuid}>
                <button className="link-btn" title={`RA ${f.fov.centerRa.toFixed(1)}° Dec ${f.fov.centerDec.toFixed(1)}° r ${f.fov.radiusDeg}°`} onClick={() => p.onLoadFov(f)}>
                  {f.name}
                </button>
                <button className="x-btn" onClick={() => p.onDeleteFov(f.uuid)}>×</button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="ctl-block">
        <h3>筛选（两条相互独立）</h3>
        <label className="range-label">
          星等上限（仅恒星）：≤ {p.magLimit.toFixed(1)}
          <input type="range" min={-2} max={6} step={0.1} value={p.magLimit} onChange={(e) => p.onChangeMag(Number(e.target.value))} />
        </label>
        <label className="check">
          <input type="checkbox" checked={p.horizonClip} onChange={(e) => p.onToggleHorizonClip(e.target.checked)} />
          地平线裁切：仅显示地平以上目标
        </label>
        <label className="check">
          <input type="checkbox" checked={p.showHorizon} onChange={(e) => p.onToggleShowHorizon(e.target.checked)} />
          显示地平圈与地平以下区域
        </label>
        <label className="check">
          <input type="checkbox" checked={p.showGraticule} onChange={(e) => p.onToggleGraticule(e.target.checked)} />
          显示 J2000 经纬网
        </label>
      </section>

      <section className="ctl-block">
        <h3>批注（绑定天球坐标，存 IndexedDB）</h3>
        <div className="save-row">
          <input type="color" value={noteColor} onChange={(e) => setNoteColor(e.target.value)} />
          <input placeholder="批注文字（锚定当前选中目标）" value={noteText} onChange={(e) => setNoteText(e.target.value)} />
          <button className="btn" disabled={!noteText.trim()} onClick={() => { p.onAddAnnotation(noteText.trim(), noteColor); setNoteText(''); }}>
            添加
          </button>
        </div>
        {p.annotations.length > 0 && (
          <ul className="store-list">
            {p.annotations.map((a) => (
              <li key={a.uuid}>
                <span className="dot" style={{ background: a.color }} />
                <button
                  className="link-btn"
                  onClick={() => p.onChangeFov({ centerRa: a.ra, centerDec: a.dec, radiusDeg: Math.max(10, p.fov.radiusDeg) })}
                  title="把视场中心移到批注位置"
                >
                  {a.text}
                </button>
                <button className="x-btn" onClick={() => p.onDeleteAnnotation(a.uuid)}>×</button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="ctl-block handout-block">
        <h3>离线讲义编排（打印 / 导出）</h3>
        <p className="hint">版式只把选择保存在本地（引用 + 投影）；星图与坐标一律按<b>当前可重算视图</b>生成，不缓存快照、不拉取网络图层。</p>

        <label>
          引用已保存视场
          <select value={p.handoutDraft.fovUuid ?? ''} onChange={(e) => p.onChangeHandoutDraft({ fovUuid: e.target.value || null })}>
            <option value="">不引用（使用当前视场）</option>
            {p.savedFovs.map((f) => (
              <option key={f.uuid} value={f.uuid}>
                {f.name}
              </option>
            ))}
          </select>
        </label>
        {p.handoutDraft.fovUuid &&
          (() => {
            const ref = p.savedFovs.find((f) => f.uuid === p.handoutDraft.fovUuid);
            if (!ref)
              return (
                <p className="hint handout-missing">
                  原视场已删除（未复原内容）。
                  <button className="link-btn-inline" onClick={() => p.onChangeHandoutDraft({ fovUuid: null })}>
                    移除引用
                  </button>
                </p>
              );
            return (
              <p className="hint">
                <button className="link-btn-inline" onClick={() => p.onLoadFov(ref)}>
                  载入该视场
                </button>
                后再生成，星图即与引用一致；否则星图按当前视图绘制。
              </p>
            );
          })()}

        <label>
          主目标（取自当前视场，含地平以下）
          <select value={p.handoutDraft.targetId ?? ''} onChange={(e) => p.onChangeHandoutDraft({ targetId: e.target.value || null })}>
            <option value="">不指定主目标</option>
            {p.handoutTargets.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
                {!t.aboveHorizon ? '（地平以下·不可见）' : ''}
                {t.kind === 'star' ? ` · ${t.mag.toFixed(1)}等` : ''}
              </option>
            ))}
          </select>
        </label>
        {p.handoutDraft.targetId && !p.handoutTargets.some((t) => t.id === p.handoutDraft.targetId) && (
          <p className="hint handout-missing">
            目标不在当前视图（视场/星等/地平筛选外），讲义不复原其坐标。
            <button className="link-btn-inline" onClick={() => p.onChangeHandoutDraft({ targetId: null })}>
              移除引用
            </button>
          </p>
        )}

        <div className="handout-anno-head">选用现有批注：</div>
        {p.annotations.length === 0 ? (
          <p className="hint">还没有批注。</p>
        ) : (
          <ul className="handout-anno-list">
            {p.annotations.map((a) => {
              const checked = p.handoutDraft.annotationUuids.includes(a.uuid);
              return (
                <li key={a.uuid}>
                  <label className="check">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) =>
                        p.onChangeHandoutDraft({
                          annotationUuids: e.target.checked
                            ? [...p.handoutDraft.annotationUuids, a.uuid]
                            : p.handoutDraft.annotationUuids.filter((x) => x !== a.uuid)
                        })
                      }
                    />
                    <span className="dot" style={{ background: a.color }} />
                    <span className="handout-anno-text">{a.text}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        )}
        {(() => {
          const gone = p.handoutDraft.annotationUuids.filter((u) => !p.annotations.some((a) => a.uuid === u));
          if (gone.length === 0) return null;
          return (
            <p className="hint handout-missing">
              {gone.length} 条原批注已删除，未凭空复原。
              <button
                className="link-btn-inline"
                onClick={() =>
                  p.onChangeHandoutDraft({
                    annotationUuids: p.handoutDraft.annotationUuids.filter((u) => !gone.includes(u))
                  })
                }
              >
                从版式移除
              </button>
            </p>
          );
        })()}

        <label className="check">
          <input
            type="radio"
            name="handout-proj"
            checked={p.handoutDraft.projection === 'stereographic'}
            onChange={() => p.onChangeHandoutDraft({ projection: 'stereographic' })}
          />
          立体投影 Stereographic
        </label>
        <label className="check">
          <input
            type="radio"
            name="handout-proj"
            checked={p.handoutDraft.projection === 'equidistant'}
            onChange={() => p.onChangeHandoutDraft({ projection: 'equidistant' })}
          />
          等距方位投影 Azimuthal Equidistant
        </label>

        <div className="save-row">
          <input placeholder="版式名称（如：科普活动讲义A）" value={p.handoutDraft.name} onChange={(e) => p.onChangeHandoutDraft({ name: e.target.value })} />
          <button className="btn" disabled={!p.handoutDraft.name.trim()} onClick={p.onSaveHandout}>
            存版式
          </button>
        </div>

        {p.savedHandouts.length > 0 && (
          <ul className="store-list">
            {p.savedHandouts.map((h) => (
              <li key={h.uuid}>
                <button className="link-btn" onClick={() => p.onLoadHandout(h)} title={`${h.annotationUuids.length} 条批注 · ${h.projection}`}>
                  {h.name}
                  <span className="handout-layout-tag">{h.projection === 'stereographic' ? '立体' : '等距'}</span>
                </button>
                <button className="x-btn" onClick={() => p.onDeleteHandout(h.uuid)}>×</button>
              </li>
            ))}
          </ul>
        )}

        <button className="btn handout-generate" onClick={p.onOpenHandout}>
          生成可打印讲义（当前视图）
        </button>
        {p.handoutResolved?.hasMissingRefs && <p className="hint handout-missing">当前版式存在引用缺失，讲义页会如实列出且不复原内容。</p>}
      </section>
    </div>
  );
}

function round3(v: number): number {
  return Math.round(v * 1000) / 1000;
}
