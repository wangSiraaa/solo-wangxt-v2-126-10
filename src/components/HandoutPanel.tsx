// 讲义编排面板：选择已保存视场、一个目标与若干现有批注，组合成讲义版式
// （存 IndexedDB），并可从当前重算视图生成打印页 / 导出 HTML。
//
// 版式只保存引用（视场 uuid / 目标 id / 批注 uuid），不复制内容：
// 原批注或视场被删除后，对应版式项如实提示"缺失"，用户可一键移除失效
// 引用或重新选择——不会凭空复原已删内容。

import { useState } from 'react';
import type { Annotation, HandoutLayout, SavedFov } from '../types';
import type { SkyTarget } from '../lib/computeSky';
import { PROJECTION_INFO } from '../lib/handout';
import type { ProjectionKind } from '../lib/projections';

interface HandoutPanelProps {
  layouts: HandoutLayout[];
  savedFovs: SavedFov[];
  annotations: Annotation[];
  /** 当前重算视图中的目标列表（供选择；时间无效时为 null） */
  targets: SkyTarget[] | null;
  onSave: (layout: HandoutLayout) => void;
  onDelete: (uuid: string) => void;
  onGenerate: (layout: HandoutLayout, mode: 'print' | 'html') => void;
}

const KIND_SHORT: Record<SkyTarget['kind'], string> = { star: '恒星', sun: '太阳', moon: '月球', planet: '行星' };

function uuid(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2);
}

export default function HandoutPanel(p: HandoutPanelProps) {
  const [editingUuid, setEditingUuid] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [fovUuid, setFovUuid] = useState('');
  const [targetId, setTargetId] = useState('');
  const [annoSel, setAnnoSel] = useState<string[]>([]);
  const [projection, setProjection] = useState<ProjectionKind>('stereographic');

  const reset = () => {
    setEditingUuid(null);
    setName('');
    setFovUuid('');
    setTargetId('');
    setAnnoSel([]);
    setProjection('stereographic');
  };

  const loadIntoEditor = (l: HandoutLayout) => {
    setEditingUuid(l.uuid);
    setName(l.name);
    setFovUuid(l.fovUuid);
    setTargetId(l.targetId);
    // 只回填当前仍存在的批注引用；缺失引用留在版式里，由列表中的提示处理
    setAnnoSel(l.annotationUuids.filter((id) => p.annotations.some((a) => a.uuid === id)));
    setProjection(l.projection);
  };

  const save = () => {
    if (!name.trim() || !fovUuid || !targetId) return;
    const now = Date.now();
    const existing = p.layouts.find((l) => l.uuid === editingUuid);
    // 更新已有版式时，保留编辑器之外仍缺失的批注引用？——不：编辑器勾选集即
    // 为最终选择（缺失引用本就无法勾选，保存即视为清理），这符合"允许移除"。
    p.onSave({
      uuid: existing?.uuid ?? uuid(),
      name: name.trim(),
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
      fovUuid,
      targetId,
      annotationUuids: annoSel,
      projection
    });
    reset();
  };

  const toggleAnno = (id: string) => {
    setAnnoSel((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  // 目标选项：太阳系天体在前，恒星按星等升序
  const targetOptions = (p.targets ?? [])
    .slice()
    .sort((a, b) => (a.kind === 'star' ? 1 : 0) - (b.kind === 'star' ? 1 : 0) || a.mag - b.mag);

  return (
    <section className="ctl-block">
      <h3>讲义编排（版式存本地 IndexedDB）</h3>

      <label>
        讲义名称
        <input placeholder="例如：大角星西沉一页讲义" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        已保存视场
        <select value={fovUuid} onChange={(e) => setFovUuid(e.target.value)}>
          <option value="">— 选择视场 —</option>
          {p.savedFovs.map((f) => (
            <option key={f.uuid} value={f.uuid}>
              {f.name}（r={f.fov.radiusDeg}°）
            </option>
          ))}
        </select>
      </label>
      <label>
        目标（来自当前可重算视图）
        <select value={targetId} onChange={(e) => setTargetId(e.target.value)} disabled={!p.targets}>
          <option value="">— 选择目标 —</option>
          {targetOptions.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}（{KIND_SHORT[t.kind]}，{t.mag.toFixed(1)} 等）
            </option>
          ))}
        </select>
      </label>
      <label>
        星图投影
        <select value={projection} onChange={(e) => setProjection(e.target.value as ProjectionKind)}>
          <option value="stereographic">{PROJECTION_INFO.stereographic.name}</option>
          <option value="equidistant">{PROJECTION_INFO.equidistant.name}</option>
        </select>
      </label>

      <label>批注（勾选纳入讲义；仅存引用）</label>
      {p.annotations.length === 0 ? (
        <p className="hint">暂无批注。先在上方"批注"区块为选中目标添加。</p>
      ) : (
        <div className="anno-check-list">
          {p.annotations.map((a) => (
            <label className="check" key={a.uuid}>
              <input type="checkbox" checked={annoSel.includes(a.uuid)} onChange={() => toggleAnno(a.uuid)} />
              <span className="dot" style={{ background: a.color }} />
              <span className="anno-check-text">{a.text}</span>
            </label>
          ))}
        </div>
      )}

      <div className="btn-row" style={{ marginTop: 8 }}>
        <button className="btn" disabled={!name.trim() || !fovUuid || !targetId} onClick={save}>
          {editingUuid ? '更新版式' : '保存版式'}
        </button>
        {editingUuid && (
          <button className="btn" onClick={reset}>
            取消编辑
          </button>
        )}
      </div>
      <p className="hint">
        生成讲义时使用当前台站/UTC 现场重算坐标与星图，不拉取网络图层；切换投影后重新生成即标注新投影。
      </p>

      {p.layouts.length > 0 && (
        <div className="handout-list">
          {p.layouts.map((l) => {
            const fov = p.savedFovs.find((f) => f.uuid === l.fovUuid);
            const missingAnnoIds = l.annotationUuids.filter((id) => !p.annotations.some((a) => a.uuid === id));
            const targetMissing = p.targets ? !p.targets.some((t) => t.id === l.targetId) : false;
            const hasMissing = !fov || missingAnnoIds.length > 0 || targetMissing;
            const canGenerate = !!fov && !targetMissing && !!p.targets;
            const prune = () =>
              p.onSave({
                ...l,
                fovUuid: fov ? l.fovUuid : '',
                targetId: targetMissing ? '' : l.targetId,
                annotationUuids: l.annotationUuids.filter((id) => !missingAnnoIds.includes(id)),
                updatedAt: Date.now()
              });
            return (
              <div className="handout-item" key={l.uuid}>
                <div className="handout-item-head">
                  <button className="link-btn" title="载入到上方编辑器" onClick={() => loadIntoEditor(l)}>
                    {l.name}
                  </button>
                  <button className="x-btn" title="删除此版式" onClick={() => p.onDelete(l.uuid)}>
                    ×
                  </button>
                </div>
                <div className="handout-item-meta">
                  {PROJECTION_INFO[l.projection].name} · 视场：{fov ? fov.name : '（已缺失）'} · 批注{' '}
                  {l.annotationUuids.length - missingAnnoIds.length}/{l.annotationUuids.length}
                </div>
                {hasMissing && (
                  <div className="handout-missing">
                    ⚠ 缺失：{[!fov && '视场', targetMissing && '目标', missingAnnoIds.length > 0 && `${missingAnnoIds.length} 条批注`]
                      .filter(Boolean)
                      .join('、')}
                    <button className="link-btn prune-btn" onClick={prune}>
                      移除缺失引用
                    </button>
                  </div>
                )}
                <div className="btn-row">
                  <button className="btn" disabled={!canGenerate} title={canGenerate ? '' : '存在缺失引用，无法生成'} onClick={() => p.onGenerate(l, 'print')}>
                    打印讲义
                  </button>
                  <button className="btn" disabled={!canGenerate} title={canGenerate ? '' : '存在缺失引用，无法生成'} onClick={() => p.onGenerate(l, 'html')}>
                    导出 HTML
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
