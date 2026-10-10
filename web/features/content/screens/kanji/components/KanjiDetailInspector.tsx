'use client';

import React from 'react';
import { KanjiEntry } from './KanjiGridList';
import { speakJapanese } from '../../../models/kana';

interface KanjiDetailInspectorProps {
  activeKanji: KanjiEntry;
  activeStroke: number;
  onAnimateStroke: () => void;
}

export function KanjiDetailInspector({
  activeKanji,
  activeStroke,
  onAnimateStroke,
}: KanjiDetailInspectorProps) {
  return (
    <aside className="w-full lg:w-[480px] flex-shrink-0 bg-surface-base border border-border-hairline rounded-xl flex flex-col lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar shadow-2xl">
      <div className="p-4 sm:p-5 flex flex-col gap-5">
        <div className="relative overflow-hidden bg-tatami-canvas border border-border-hairline rounded-xl p-5 flex flex-col gap-3">
          <div className="absolute -right-4 -bottom-6 select-none pointer-events-none opacity-[0.06] font-bold text-[180px] text-text-primary leading-none font-serif">
            {activeKanji.kanjiChar}
          </div>
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-baseline gap-3">
              <span className="text-6xl font-serif font-bold text-text-primary leading-none tracking-tight">
                {activeKanji.kanjiChar}
              </span>
              <button
                onClick={() => speakJapanese(activeKanji.kanjiChar)}
                className="w-10 h-10 rounded-full bg-surface-muted border border-border-hairline flex items-center justify-center text-primary-hover hover:bg-surface-elevated hover:text-primary transition-colors shadow-sm"
                title="Play native pronunciation"
              >
                <span className="material-symbols-outlined text-[20px]">volume_up</span>
              </button>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="px-2 py-0.5 rounded bg-primary-container/20 border border-primary-container text-primary text-[10px] font-bold uppercase">
                JLPT N5 Core
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-muted border border-border-hairline text-text-secondary text-[10px] font-mono">
                Grade 2 Jōyō
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-muted border border-border-hairline text-accent-gold text-[10px] font-mono">
                Radical: {activeKanji.kanjiChar}
              </span>
            </div>
          </div>
          <div className="relative z-10">
            <span className="text-base font-bold text-text-primary">{activeKanji.meanings.join(', ')}</span>
            <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
              Primary semantic building block for foundational vocabulary in JLPT N5 curriculum.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">STROKE MATRIX</span>
              <span className="text-[11px] font-bold text-accent-gold font-mono">• Stroke {activeStroke} of 9</span>
            </div>
          </div>

          <div className="relative w-full h-[220px] bg-background-deep border border-border-hairline rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-[1px] border-b border-dashed border-tatami-grid" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-full w-[1px] border-r border-dashed border-tatami-grid" />
            </div>
            <div className="absolute inset-2 border border-tatami-grid/40 rounded pointer-events-none" />

            <svg className="w-[180px] h-[180px] relative z-10" viewBox="0 0 109 109">
              <path
                d="M51.5,12.25c0.12,1.14-0.19,2.69-0.81,4.24C46.88,26.04,33.9,42.5,15.75,54.75"
                fill="none"
                stroke="#f0f0f0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4.5"
              />
              <path
                d="M53.25,18.75c5.38,4.75,23.38,19.25,31.75,25.25c2.61,1.87,5.55,3.61,8.75,4.75"
                fill="none"
                stroke="#f0f0f0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4.5"
              />
              <path
                d="M47.75,32.25c0.94,0.48,2.44,0.59,3.5,0.48c3.5,-0.38,8.25,-1.25,11.25,-1.75c1.19,-0.2,2.5,-0.22,3.75,0.02"
                fill="none"
                stroke="#f0f0f0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4.5"
              />
              <path
                d="M38.5,43.25c1.12,0.62,2.71,0.61,4.0,0.48c6.62,-0.62,21.5,-2.25,27.25,-2.75c1.69,-0.15,3.34,-0.28,5.0,0.12"
                fill="none"
                stroke="#f0f0f0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4.5"
              />
              <path
                className="animate-pulse"
                d="M41.75,52.5c0.75,0.75,1.25,1.75,1.25,2.75c0,4.25-0.12,12.75-0.12,18.75c0,1.25,0.75,2.0,2.0,1.75c4.75,-0.88,14.5,-2.75,18.75,-3.25"
                fill="none"
                stroke="#c74a4a"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
              />
              <circle cx="41.75" cy="52.5" fill="#c74a4a" r="4.5" stroke="#051b22" strokeWidth="1.5" />
              <text fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" x="41.75" y="55.5">
                {activeStroke}
              </text>
            </svg>

            <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-surface-muted/90 border border-border-hairline backdrop-blur flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-primary">
                Trace Downward &amp; Right Hook
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-1">
            <button
              onClick={onAnimateStroke}
              className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-surface-muted border border-border-hairline text-xs font-semibold text-text-primary hover:bg-surface-elevated transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-accent-gold">play_arrow</span>
              <span>Play Animation</span>
            </button>
            <button
              onClick={() => window.open('/stroke', '_blank')}
              className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-surface-muted border border-border-hairline text-xs font-semibold text-text-primary hover:bg-surface-elevated transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-info">draw</span>
              <span>Practice Sandbox</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">READINGS MATRIX</span>
          <div className="bg-surface-muted border border-border-hairline rounded-xl p-3.5 flex flex-col gap-2.5">
            <div className="flex items-baseline justify-between border-b border-border-subtle pb-2">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-background-deep border border-border-hairline text-accent-gold text-[10px] font-bold font-mono">
                  ON
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-bold text-text-primary font-mono">
                    {activeKanji.onyomi[0] || '—'}
                  </span>
                  {activeKanji.onyomi[1] && (
                    <span className="text-sm font-bold text-text-secondary font-mono">
                      {activeKanji.onyomi[1]}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-baseline justify-between pt-0.5">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-background-deep border border-border-hairline text-info text-[10px] font-bold font-mono">
                  KUN
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-bold text-text-primary font-mono">
                    {activeKanji.kunyomi[0] || '—'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
