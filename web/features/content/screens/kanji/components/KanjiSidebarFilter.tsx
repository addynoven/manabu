'use client';

import React from 'react';

const COMMON_RADICALS = ['人', '水', '木', '食', '日', '手', '言', '糸'];

interface KanjiSidebarFilterProps {
  search: string;
  selectedLevel: string;
  selectedRadical: string | null;
  onSearchChange: (val: string) => void;
  onSelectLevel: (lvl: string) => void;
  onSelectRadical: (rad: string | null) => void;
}

export function KanjiSidebarFilter({
  search,
  selectedLevel,
  selectedRadical,
  onSearchChange,
  onSelectLevel,
  onSelectRadical,
}: KanjiSidebarFilterProps) {
  return (
    <aside className="w-full lg:w-[260px] flex-shrink-0 bg-surface-base border border-border-hairline rounded-xl p-4 flex flex-col gap-4 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar shadow-lg">
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">INDEX SEARCH</span>
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-2.5 text-text-muted text-[17px]">search</span>
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Keyword, stroke, kana..."
            className="w-full bg-background-deep border border-border-hairline rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
            type="text"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">JLPT TIER</span>
          <span className="text-[11px] font-bold text-accent-gold uppercase">{selectedLevel} SELECTED</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <button
            onClick={() => onSelectLevel('All')}
            className={`px-2.5 py-1.5 rounded-lg text-left text-xs transition-colors flex items-center justify-between ${
              selectedLevel === 'All'
                ? 'bg-surface-elevated border border-primary-container text-white font-semibold shadow-[0_0_12px_rgba(199,74,74,0.25)]'
                : 'bg-surface-muted border border-border-subtle text-text-secondary hover:text-text-primary'
            }`}
          >
            <span>All</span>
            <span className="text-[10px] text-text-muted">2,136</span>
          </button>
          <button
            onClick={() => onSelectLevel('N5')}
            className={`px-2.5 py-1.5 rounded-lg text-left text-xs transition-colors flex items-center justify-between ${
              selectedLevel === 'N5'
                ? 'bg-surface-elevated border border-primary-container text-white font-semibold shadow-[0_0_12px_rgba(199,74,74,0.25)]'
                : 'bg-surface-muted border border-border-subtle text-text-secondary hover:text-text-primary'
            }`}
          >
            <span>N5</span>
            <span className="text-[10px] font-bold text-primary">103</span>
          </button>
          {['N4', 'N3', 'N2', 'N1'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => onSelectLevel(lvl)}
              className={`px-2.5 py-1.5 rounded-lg text-left text-xs transition-colors flex items-center justify-between ${
                selectedLevel === lvl
                  ? 'bg-surface-elevated border border-primary-container text-white font-semibold'
                  : 'bg-surface-muted border border-border-subtle text-text-secondary hover:text-text-primary'
              }`}
            >
              <span>{lvl}</span>
              <span className="text-[10px] text-text-muted">
                {lvl === 'N4' ? '181' : lvl === 'N3' ? '361' : lvl === 'N2' ? '415' : '1,076'}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">CURRICULUM SORT</span>
        <div className="relative">
          <select className="w-full bg-background-deep border border-border-hairline rounded-lg px-2.5 py-1.5 text-xs text-text-primary appearance-none cursor-pointer focus:outline-none focus:border-primary-container">
            <option>JLPT Curriculum (Ascending)</option>
            <option>Stroke Count (Fewest first)</option>
            <option>Stroke Count (Most first)</option>
            <option>Mastery SRS (Low to High)</option>
            <option>Frequency in Media</option>
          </select>
          <span className="material-symbols-outlined absolute right-2 top-2 text-text-muted text-[16px] pointer-events-none">
            expand_more
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">SRS RETENTION STATUS</span>
        <div className="flex flex-col gap-2 bg-background-deep border border-border-hairline rounded-lg p-2.5">
          <label className="flex items-center justify-between cursor-pointer group">
            <div className="flex items-center gap-2">
              <input
                defaultChecked
                className="w-4 h-4 rounded bg-tatami-canvas border-border-hairline text-primary-container cursor-pointer"
                type="checkbox"
              />
              <span className="w-2 h-2 rounded-full bg-success" />
              <span className="text-xs text-text-primary group-hover:text-white">Mastered</span>
            </div>
            <span className="text-[10px] text-text-muted font-mono">84 items</span>
          </label>
          <label className="flex items-center justify-between cursor-pointer group">
            <div className="flex items-center gap-2">
              <input
                defaultChecked
                className="w-4 h-4 rounded bg-tatami-canvas border-border-hairline text-primary-container cursor-pointer"
                type="checkbox"
              />
              <span className="w-2 h-2 rounded-full bg-accent-gold" />
              <span className="text-xs text-text-primary group-hover:text-white">Learning</span>
            </div>
            <span className="text-[10px] text-text-muted font-mono">12 items</span>
          </label>
          <label className="flex items-center justify-between cursor-pointer group">
            <div className="flex items-center gap-2">
              <input
                defaultChecked
                className="w-4 h-4 rounded bg-tatami-canvas border-border-hairline text-primary-container cursor-pointer"
                type="checkbox"
              />
              <span className="w-2 h-2 rounded-full bg-text-muted" />
              <span className="text-xs text-text-secondary group-hover:text-text-primary">New / Unseen</span>
            </div>
            <span className="text-[10px] text-text-muted font-mono">7 items</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">COMMON RADICALS</span>
          <button
            onClick={() => onSelectRadical(null)}
            className="text-[10px] font-bold text-info hover:underline"
          >
            Clear
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {COMMON_RADICALS.map((rad) => {
            const isSelected = selectedRadical === rad;
            return (
              <button
                key={rad}
                onClick={() => onSelectRadical(isSelected ? null : rad)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-surface-elevated border border-primary-container text-primary shadow-[0_0_8px_rgba(199,74,74,0.3)]'
                    : 'bg-surface-muted border border-border-hairline text-text-primary hover:border-info hover:text-info'
                }`}
                title={`Radical: ${rad}`}
              >
                {rad}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-auto p-3 bg-tatami-canvas border border-border-hairline rounded-lg flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-accent-gold text-[18px]">verified</span>
          <span className="text-xs text-text-primary font-bold">N5 Milestone Track</span>
        </div>
        <p className="text-[11px] text-text-muted leading-tight">
          Master 19 more glyphs to unlock the JLPT N4 Workstation tier.
        </p>
      </div>
    </aside>
  );
}
