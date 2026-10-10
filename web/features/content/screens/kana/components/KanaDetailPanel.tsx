'use client';

import React from 'react';
import { KanaItem, speakJapanese } from '../../../models/kana';

interface KanaDetailPanelProps {
  selectedKana: KanaItem;
}

export function KanaDetailPanel({ selectedKana }: KanaDetailPanelProps) {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-5 lg:sticky lg:top-24">
      <div className="bg-surface-base rounded-xl border border-border-hairline p-5 shadow-xl">
        <div className="flex items-center justify-between border-b border-border-hairline pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-surface-muted text-secondary text-[10px] font-mono border border-border-hairline">
              JLPT N5 / Beginner
            </span>
            <span className="text-[10px] font-bold uppercase text-text-muted">{selectedKana.romaji}</span>
          </div>
          <span className="text-[10px] font-mono text-accent-gold font-bold px-2 py-0.5 bg-accent-gold-subtle rounded border border-accent-gold/40">
            {selectedKana.romaji.length + 1} Strokes
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="text-6xl font-serif font-bold text-text-primary leading-none">
              {selectedKana.kana}
            </span>
            <div>
              <div className="text-xl font-bold text-text-primary leading-tight">[ {selectedKana.romaji} ]</div>
              <div className="text-xs text-text-secondary">phonetic phoneme</div>
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

        <div className="mt-4 p-3.5 rounded-lg bg-surface-muted border border-border-hairline">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-accent-gold mb-1">
            <span className="material-symbols-outlined text-[16px]">lightbulb</span>
            <span>Visual Mnemonic</span>
          </div>
          <p className="text-xs text-text-primary leading-relaxed">
            Memorize phonetic symbol &apos;{selectedKana.kana}&apos; representing the vocal sound &apos;
            {selectedKana.romaji}&apos;.
          </p>
        </div>
      </div>

      <div className="bg-surface-base rounded-xl border border-border-hairline p-5 shadow-xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-hairline">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-primary">draw</span>
            <h3 className="text-sm font-bold text-text-primary">Stroke Tracing Pad</h3>
          </div>
          <span className="text-[10px] font-mono text-text-muted">KanjiVG Vector v2.1</span>
        </div>

        <div className="relative w-full max-w-[280px] h-[260px] mx-auto bg-tatami-canvas rounded-xl border-2 border-border-hairline overflow-hidden flex items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-tatami-grid" />
          <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-tatami-grid" />

          <svg className="w-52 h-52 select-none" viewBox="0 0 109 109">
            <path
              d="M 28,32 Q 55,27 82,24"
              fill="none"
              stroke="#f0f0f0"
              strokeLinecap="round"
              strokeWidth="6"
            />
            <circle cx="28" cy="32" fill="#38bdf8" r="5" />
            <text fill="#00161e" fontSize="6" fontWeight="bold" textAnchor="middle" x="28" y="34.5">
              1
            </text>
            <path
              d="M 53,15 Q 52,50 49,85"
              fill="none"
              stroke="#c74a4a"
              strokeLinecap="round"
              strokeWidth="6"
            />
            <circle cx="53" cy="15" fill="#c74a4a" r="5" />
            <text fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle" x="53" y="17.5">
              2
            </text>
          </svg>
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
            onClick={() => window.open('/stroke', '_blank')}
            className="py-2 rounded-lg bg-surface-muted border border-border-hairline text-xs font-semibold text-white hover:bg-surface-elevated flex items-center justify-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px] text-info">draw</span>
            <span>Free Sandbox</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
