'use client';

import React, { useRef, useState, useEffect } from 'react';
import { KanaItem, speakJapanese, getKanaStrokeCount } from '../../../models/kana';
import { getKanaMnemonic } from '../../../data/kanaMnemonics';

interface KanaDetailPanelProps {
  selectedKana: KanaItem;
}

export function KanaDetailPanel({ selectedKana }: KanaDetailPanelProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  // Clear canvas whenever selectedKana changes or clear button clicked
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  useEffect(() => {
    clearCanvas();
  }, [selectedKana.kana]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = '#c74a4a'; // Primary red stroke
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const strokeCount = getKanaStrokeCount(selectedKana.kana);
  const mnemonicText = getKanaMnemonic(selectedKana.kana, selectedKana.romaji);
  const unicodeHex = `U+${selectedKana.kana.charCodeAt(0).toString(16).toUpperCase()}`;

  return (
    <aside className="lg:col-span-4 flex flex-col gap-5 lg:sticky lg:top-24">
      {/* Overview Card */}
      <div className="bg-surface-base rounded-xl border border-border-hairline p-5 shadow-xl">
        <div className="flex items-center justify-between border-b border-border-hairline pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase text-text-muted">{selectedKana.script}</span>
          </div>
          <span className="text-[10px] font-mono text-accent-gold font-bold px-2 py-0.5 bg-accent-gold-subtle rounded border border-accent-gold/40">
            {strokeCount} {strokeCount === 1 ? 'Stroke' : 'Strokes'}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="text-6xl font-serif font-bold text-text-primary leading-none">
              {selectedKana.kana}
            </span>
            <div>
              <div className="text-xl font-bold text-text-primary leading-tight">[ {selectedKana.romaji} ]</div>
              <div className="text-xs text-text-secondary font-mono">{unicodeHex}</div>
            </div>
          </div>
          <button
            onClick={() => speakJapanese(selectedKana.kana)}
            className="w-12 h-12 rounded-full bg-primary-container hover:bg-primary-hover text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
            title="Listen Pronunciation"
          >
            <span className="material-symbols-outlined text-[24px]">volume_up</span>
          </button>
        </div>

        {/* Visual Mnemonic */}
        <div className="mt-4 p-3.5 rounded-lg bg-surface-muted border border-border-hairline">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-accent-gold mb-1">
            <span className="material-symbols-outlined text-[16px]">lightbulb</span>
            <span>Visual Mnemonic</span>
          </div>
          <p className="text-xs text-text-primary leading-relaxed">{mnemonicText}</p>
        </div>
      </div>

      {/* Interactive Stroke Tracing Canvas */}
      <div className="bg-surface-base rounded-xl border border-border-hairline p-5 shadow-xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-hairline">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-primary-container">draw</span>
            <h3 className="text-sm font-bold text-text-primary">Interactive Stroke Pad</h3>
          </div>
          <span className="text-[10px] font-mono text-text-muted">{unicodeHex} Vector Guide</span>
        </div>

        <div className="relative w-full max-w-[280px] h-[260px] mx-auto bg-tatami-canvas rounded-xl border-2 border-border-hairline overflow-hidden flex items-center justify-center select-none">
          {/* Tatami Grid Lines */}
          <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-tatami-grid pointer-events-none" />
          <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-tatami-grid pointer-events-none" />

          {/* Faint Character Tracing Guide */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="text-[160px] font-serif text-text-muted/15 font-bold leading-none">
              {selectedKana.kana}
            </span>
          </div>

          {/* User Touch / Mouse Canvas */}
          <canvas
            ref={canvasRef}
            width={280}
            height={260}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="absolute inset-0 w-full h-full cursor-crosshair touch-none z-10"
          />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            onClick={() => speakJapanese(selectedKana.kana)}
            className="py-2 rounded-lg bg-surface-muted border border-border-hairline text-xs font-semibold text-white hover:bg-surface-elevated flex items-center justify-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px] text-accent-gold">play_arrow</span>
            <span>Play Sound</span>
          </button>
          <button
            onClick={clearCanvas}
            className={`py-2 rounded-lg border text-xs font-semibold transition flex items-center justify-center gap-1 ${
              hasDrawn
                ? 'bg-primary-container text-white border-primary-container shadow-md'
                : 'bg-surface-muted border-border-hairline text-text-secondary hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">refresh</span>
            <span>Clear Pad</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
