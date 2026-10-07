// 讲义预览/打印/导出：内容全部来自当前可重算视图生成的 SVG 字符串，
// 打印与导出共用同一份 SVG，不存在两条数据路径。

import { useEffect, useMemo, useState } from 'react';
import type { HandoutData } from '../lib/handout';
import { buildHandoutSvg } from '../lib/handout';
import { downloadPngFromSvg, downloadText } from '../lib/exporter';

interface HandoutModalProps {
  data: HandoutData;
  onClose: () => void;
}

export default function HandoutModal({ data, onClose }: HandoutModalProps) {
  // 只在打开/视图变化（外部重新解析传入新 data）时生成一次；打印与导出都用它
  const svg = useMemo(() => buildHandoutSvg(data), [data]);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // 打印：把讲义 SVG 放进独立打印窗口，不依赖任何外部资源，
  // 应用页面本身不进入打印（无网络图层可偷拉）。
  const doPrint = () => {
    const win = window.open('', '_blank', 'width=860,height=1100');
    if (!win) {
      alert('浏览器拦截了打印窗口，请允许弹出窗口后重试。');
      return;
    }
    win.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>星图讲义</title>
<style>
  @page { size: A4 portrait; margin: 10mm; }
  html,body{margin:0;padding:0;background:#fff;}
  svg{display:block;width:100%;height:auto;}
</style></head><body>${svg}</body></html>`);
    win.document.close();
    win.focus();
    // 等图像/布局完成后唤起打印
    win.onload = () => {
      setTimeout(() => {
        win.print();
      }, 150);
    };
    setTimeout(() => {
      try {
        win.print();
      } catch {
        /* 某些浏览器 onload 已触发，忽略 */
      }
    }, 300);
  };

  const doExportSvg = () => {
    downloadText(`星图讲义_${data.kind}_${data.meta.timeUtcIso.slice(0, 10)}.svg`, svg, 'image/svg+xml;charset=utf-8');
  };

  const doExportPng = async () => {
    setBusy(true);
    try {
      await downloadPngFromSvg(svg, `星图讲义_${data.kind}_${data.meta.timeUtcIso.slice(0, 10)}.png`, 2);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="handout-overlay" onClick={onClose}>
      <div className="handout-modal" onClick={(e) => e.stopPropagation()}>
        <div className="handout-modal-bar">
          <strong>
            讲义预览 · {data.projectionLabel}
            {data.hasMissingRefs && <span className="handout-warn-badge">有引用缺失</span>}
          </strong>
          <div className="export-bar">
            <button className="btn" onClick={doPrint}>
              打印（A4）
            </button>
            <button className="btn" onClick={doExportSvg}>
              导出 SVG
            </button>
            <button className="btn" disabled={busy} onClick={doExportPng}>
              {busy ? '栅格化中…' : '导出 PNG'}
            </button>
            <button className="btn" onClick={onClose}>
              关闭
            </button>
          </div>
        </div>
        <div className="handout-modal-scroll" dangerouslySetInnerHTML={{ __html: svg }} />
      </div>
    </div>
  );
}
