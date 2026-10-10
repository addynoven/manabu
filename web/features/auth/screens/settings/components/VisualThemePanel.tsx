'use client';

import React from 'react';

interface VisualThemePanelProps {
  theme: 'bunpro' | 'obsidian' | 'alabaster';
  furiganaMode: 'hover' | 'always' | 'hidden';
  onSetTheme: (theme: 'bunpro' | 'obsidian' | 'alabaster') => void;
  onSetFuriganaMode: (mode: 'hover' | 'always' | 'hidden') => void;
}

export function VisualThemePanel({
  theme,
  furiganaMode,
  onSetTheme,
  onSetFuriganaMode,
}: VisualThemePanelProps) {
  return (
    <div className="bg-surface-base border border-border-hairline rounded-xl p-6 shadow-sm flex flex-col gap-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border-hairline">
        <div className="w-9 h-9 rounded-lg bg-surface-muted flex items-center justify-center text-primary-container border border-border-hairline">
          <span className="material-symbols-outlined text-[20px]">draw</span>
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-text-primary">Visual Atmosphere &amp; Interface Theme</h2>
          <p className="text-xs text-text-secondary">Calibrate ocular contrast and Japanese typographic rendering styles.</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-text-primary mb-3 uppercase tracking-wider">
          Interface Color Palette Theme
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div
            onClick={() => onSetTheme('bunpro')}
            className={`relative rounded-xl p-3 bg-surface-muted border-2 cursor-pointer transition-all ${
              theme === 'bunpro' ? 'border-primary-container ring-1 ring-primary-container' : 'border-border-hairline hover:border-secondary'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-text-primary">Bunpro Dark Learning</span>
              {theme === 'bunpro' && (
                <span className="w-4 h-4 rounded-full bg-primary-container flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[12px] font-bold">check</span>
                </span>
              )}
            </div>
            <div className="h-16 rounded bg-background-canvas border border-border-hairline p-2 flex flex-col justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                <span className="w-8 h-1.5 rounded bg-border-hairline" />
              </div>
              <div className="flex items-end justify-between">
                <span className="text-[14px] text-text-primary font-bold">学び</span>
                <span className="text-[10px] text-accent-gold font-mono">#082630</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => onSetTheme('obsidian')}
            className={`relative rounded-xl p-3 bg-surface-muted border-2 cursor-pointer transition-all ${
              theme === 'obsidian' ? 'border-primary-container ring-1 ring-primary-container' : 'border-border-hairline hover:border-secondary'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-text-primary">Nocturnal Obsidian</span>
              {theme === 'obsidian' && (
                <span className="w-4 h-4 rounded-full bg-primary-container flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[12px] font-bold">check</span>
                </span>
              )}
            </div>
            <div className="h-16 rounded bg-black border border-border-hairline p-2 flex flex-col justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                <span className="w-8 h-1.5 rounded bg-zinc-800" />
              </div>
              <div className="flex items-end justify-between">
                <span className="text-[14px] text-zinc-100 font-bold">学び</span>
                <span className="text-[10px] text-zinc-500 font-mono">#000000</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => onSetTheme('alabaster')}
            className={`relative rounded-xl p-3 bg-surface-muted border-2 cursor-pointer transition-all ${
              theme === 'alabaster' ? 'border-primary-container ring-1 ring-primary-container' : 'border-border-hairline hover:border-secondary'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-text-primary">Alabaster Paper</span>
              {theme === 'alabaster' && (
                <span className="w-4 h-4 rounded-full bg-primary-container flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[12px] font-bold">check</span>
                </span>
              )}
            </div>
            <div className="h-16 rounded bg-[#fcfcfc] border border-border-hairline p-2 flex flex-col justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                <span className="w-8 h-1.5 rounded bg-zinc-300" />
              </div>
              <div className="flex items-end justify-between">
                <span className="text-[14px] text-neutral-900 font-bold">学び</span>
                <span className="text-[10px] text-neutral-600 font-mono">#FCFCFC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-border-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
          <div>
            <label className="text-xs font-bold text-text-primary block uppercase tracking-wider">
              Furigana Ruby Annotations
            </label>
            <span className="text-xs text-text-secondary">Controls phonetic kana guides above kanji compounds.</span>
          </div>
          <div className="px-3 py-1 bg-background-deep rounded border border-border-hairline text-center">
            <ruby className="text-base font-bold text-text-primary">
              漢字<rt className="text-xs text-secondary">かんじ</rt>
            </ruby>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 bg-background-deep p-1.5 rounded-lg border border-border-hairline text-xs">
          <button
            onClick={() => onSetFuriganaMode('always')}
            className={`py-2 px-3 rounded font-medium transition ${
              furiganaMode === 'always' ? 'bg-surface-muted text-text-primary border border-border-hairline font-bold' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Always Show
          </button>
          <button
            onClick={() => onSetFuriganaMode('hover')}
            className={`py-2 px-3 rounded font-medium transition ${
              furiganaMode === 'hover' ? 'bg-surface-muted text-text-primary border border-border-hairline font-bold' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Hover Only
          </button>
          <button
            onClick={() => onSetFuriganaMode('hidden')}
            className={`py-2 px-3 rounded font-medium transition ${
              furiganaMode === 'hidden' ? 'bg-surface-muted text-text-primary border border-border-hairline font-bold' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Hidden by Default
          </button>
        </div>
      </div>
    </div>
  );
}
