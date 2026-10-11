'use client';

import React from 'react';

const COMMON_RADICALS = ['人', '水', '木', '食', '日', '手', '言', '糸'];

interface KanjiSidebarFilterProps {
  search: string;
  selectedLevel: string;
  selectedRadical: string | null;
  sortOption: string;
  levelCounts: Record<string, number>;
  onSearchChange: (val: string) => void;
  onSelectLevel: (lvl: string) => void;
  onSelectRadical: (rad: string | null) => void;
  onSortChange: (sort: string) => void;
}

export function KanjiSidebarFilter({
  search,
  selectedLevel,
  selectedRadical,
  sortOption,
  levelCounts,
  onSearchChange,
  onSelectLevel,
  onSelectRadical,
  onSortChange,
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
            <span className="text-[10px] text-text-muted">{levelCounts.All?.toLocaleString() || '2,495'}</span>
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
            <span className="text-[10px] font-bold text-primary">{levelCounts.N5 || 80}</span>
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
              <span className="text-[10px] text-text-muted">{levelCounts[lvl]?.toLocaleString() || 0}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">CURRICULUM SORT</span>
        <div className="relative">
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full bg-background-deep border border-border-hairline rounded-lg px-2.5 py-1.5 text-xs text-text-primary appearance-none cursor-pointer focus:outline-none focus:border-primary-container font-medium"
          >
            <option>JLPT Curriculum (Ascending)</option>
            <option>Stroke Count (Fewest first)</option>
            <option>Stroke Count (Most first)</option>
            <option>Alphabetical (English Meaning)</option>
          </select>
          <span className="material-symbols-outlined absolute right-2 top-2 text-text-muted text-[16px] pointer-events-none">
            expand_more
          </span>
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
          <span className="text-xs text-text-primary font-bold">JLPT {selectedLevel} Directory</span>
        </div>
        <p className="text-[11px] text-text-muted leading-tight">
          Browse and practice stroke order across {levelCounts[selectedLevel]?.toLocaleString() || levelCounts.All?.toLocaleString()} authenticated kanji entries.
        </p>
      </div>
    </aside>
  );
}
