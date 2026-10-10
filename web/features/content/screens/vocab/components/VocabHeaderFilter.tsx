'use client';

import React from 'react';

interface VocabHeaderFilterProps {
  search: string;
  filterType: 'all' | 'verbs' | 'nouns' | 'i_adj' | 'na_adj' | 'adverbs' | 'counters';
  showPitchCurves: boolean;
  totalWords: number;
  filteredCount: number;
  onSearchChange: (val: string) => void;
  onFilterChange: (type: 'all' | 'verbs' | 'nouns' | 'i_adj' | 'na_adj' | 'adverbs' | 'counters') => void;
  onTogglePitchCurves: () => void;
}

export function VocabHeaderFilter({
  search,
  filterType,
  showPitchCurves,
  totalWords,
  filteredCount,
  onSearchChange,
  onFilterChange,
  onTogglePitchCurves,
}: VocabHeaderFilterProps) {
  return (
    <section className="w-full bg-background-deep border-b border-border-hairline px-4 sm:px-6 py-4 shadow-sm">
      <div className="max-w-[1536px] mx-auto space-y-3.5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <span className="hover:text-text-primary cursor-pointer transition-colors">Vocabulary</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-secondary font-medium">JLPT N5 Core Vocabulary</span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-surface-muted text-text-secondary border border-border-hairline">
              {totalWords} Words
            </span>
          </div>

          <div className="flex-1 max-w-xl relative flex items-center">
            <span className="absolute left-3.5 text-text-muted pointer-events-none flex items-center">
              <span className="material-symbols-outlined text-[20px]">manage_search</span>
            </span>
            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by Kanji, Hiragana, Romaji, or English..."
              className="w-full bg-background-canvas text-text-primary placeholder:text-text-muted text-sm pl-11 pr-24 py-2.5 h-11 rounded-lg border border-border-hairline focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all shadow-inner"
              type="text"
            />
            <div className="absolute right-2 flex items-center gap-1.5">
              <button
                type="button"
                className="px-2 py-1 rounded bg-surface-muted border border-border-hairline text-[11px] font-mono text-text-secondary hover:text-text-primary flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                <span>かな IME</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'All Words', count: totalWords },
            { id: 'verbs', label: 'Verbs (動詞)', count: 142 },
            { id: 'nouns', label: 'Nouns (名詞)', count: 298 },
            { id: 'i_adj', label: 'i-Adjectives (い形)', count: 48 },
            { id: 'na_adj', label: 'na-Adjectives (な形)', count: 32 },
            { id: 'adverbs', label: 'Adverbs (副詞)', count: 54 },
            { id: 'counters', label: 'Counters (助数詞)', count: 28 },
          ].map((tab) => {
            const isActive = filterType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onFilterChange(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 flex-shrink-0 font-medium ${
                  isActive
                    ? 'bg-surface-muted text-white border border-primary-container shadow-[0_0_10px_rgba(199,74,74,0.25)] font-semibold'
                    : 'bg-surface-base text-text-secondary border border-border-hairline hover:border-surface-highlight hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-primary-container/40 text-white' : 'text-text-muted'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs border-t border-border-subtle">
          <div className="flex items-center gap-2">
            <button
              onClick={onTogglePitchCurves}
              className={`px-2.5 py-1 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
                showPitchCurves
                  ? 'bg-surface-muted border-border-hairline text-accent-gold'
                  : 'bg-surface-base border-border-hairline text-text-secondary hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">
                {showPitchCurves ? 'check_box' : 'check_box_outline_blank'}
              </span>
              <span>Show Pitch Accent Curves</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-surface-base border border-border-hairline px-3 py-1 rounded-lg text-xs text-text-secondary">
              <span className="text-text-muted">Sort:</span>
              <span className="text-white font-medium">JLPT Frequency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
