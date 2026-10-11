'use client';

import React from 'react';

interface VocabHeaderFilterProps {
  search: string;
  selectedLevel: string;
  filterType: 'all' | 'verbs' | 'nouns' | 'i_adj' | 'na_adj' | 'adverbs' | 'counters';
  showPitchCurves: boolean;
  totalWords: number;
  filteredCount: number;
  levelCounts: Record<string, number>;
  onSearchChange: (val: string) => void;
  onSelectLevel: (lvl: string) => void;
  onFilterChange: (type: 'all' | 'verbs' | 'nouns' | 'i_adj' | 'na_adj' | 'adverbs' | 'counters') => void;
  onTogglePitchCurves: () => void;
}

export function VocabHeaderFilter({
  search,
  selectedLevel,
  filterType,
  showPitchCurves,
  totalWords,
  filteredCount,
  levelCounts,
  onSearchChange,
  onSelectLevel,
  onFilterChange,
  onTogglePitchCurves,
}: VocabHeaderFilterProps) {
  return (
    <section className="w-full bg-surface-base border-b border-border-hairline px-4 sm:px-6 py-6 shadow-sm">
      <div className="max-w-[1536px] mx-auto space-y-4">
        {/* Workstation Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-border-subtle">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              JLPT Master Vocabulary &amp; Pitch Accent Explorer
            </h1>
            <p className="text-xs sm:text-sm text-text-secondary mt-1 max-w-3xl">
              Browse 3,500+ vocabulary entries across all JLPT levels. Inspect Tokyo standard pitch accent downsteps (平板, 頭高, 中高, 尾高), listen to native pronunciation, and test your speech pronunciation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-background-deep border border-border-hairline px-4 py-2 rounded-xl text-center">
              <span className="text-[10px] text-text-muted uppercase font-mono block">Filtered Entries</span>
              <span className="text-lg font-bold font-mono text-accent-gold">{filteredCount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Search Bar & JLPT Level Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* JLPT Level Selector Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {['All', 'N5', 'N4', 'N3', 'N2', 'N1'].map((lvl) => {
              const isActive = selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => onSelectLevel(lvl)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 ${
                    isActive
                      ? 'bg-primary-container text-white shadow-md shadow-red-950/40'
                      : 'bg-background-deep text-text-secondary hover:text-white border border-border-hairline'
                  }`}
                >
                  <span>{lvl}</span>
                  <span className="text-[10px] font-mono opacity-80">
                    ({levelCounts[lvl]?.toLocaleString() || 0})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar Input */}
          <div className="flex-1 max-w-xl relative flex items-center">
            <span className="absolute left-3.5 text-text-muted pointer-events-none flex items-center">
              <span className="material-symbols-outlined text-[20px]">manage_search</span>
            </span>
            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by Kanji, Hiragana, Romaji, or English..."
              className="w-full bg-background-deep text-text-primary placeholder:text-text-muted text-sm pl-11 pr-24 py-2.5 h-11 rounded-lg border border-border-hairline focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all shadow-inner"
              type="text"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'All Senses' },
            { id: 'verbs', label: 'Verbs (動詞)' },
            { id: 'nouns', label: 'Nouns (名詞)' },
            { id: 'i_adj', label: 'i-Adjectives (い形)' },
            { id: 'na_adj', label: 'na-Adjectives (な形)' },
            { id: 'adverbs', label: 'Adverbs (副詞)' },
          ].map((tab) => {
            const isActive = filterType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onFilterChange(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 flex-shrink-0 font-medium ${
                  isActive
                    ? 'bg-surface-muted text-white border border-primary-container shadow-[0_0_10px_rgba(199,74,74,0.25)] font-semibold'
                    : 'bg-background-deep text-text-secondary border border-border-hairline hover:border-surface-highlight hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs border-t border-border-subtle">
          <button
            onClick={onTogglePitchCurves}
            className={`px-2.5 py-1 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
              showPitchCurves
                ? 'bg-surface-muted border-border-hairline text-accent-gold'
                : 'bg-background-deep border-border-hairline text-text-secondary hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">
              {showPitchCurves ? 'check_box' : 'check_box_outline_blank'}
            </span>
            <span>Show Pitch Accent Downstep Profiles</span>
          </button>
        </div>
      </div>
    </section>
  );
}
