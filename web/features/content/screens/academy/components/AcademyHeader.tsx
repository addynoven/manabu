'use client';

import React from 'react';

interface AcademyHeaderProps {
  selectedTrack: 'jlpt' | 'genki' | 'minna' | 'tobira';
  selectedTier: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  searchQuery: string;
  activeCategory: 'all' | 'particles' | 'conjugations' | 'keigo' | 'expressions';
  onSelectTrack: (track: 'jlpt' | 'genki' | 'minna' | 'tobira') => void;
  onSelectTier: (tier: 'N5' | 'N4' | 'N3' | 'N2' | 'N1') => void;
  onSearchChange: (q: string) => void;
  onCategoryChange: (cat: 'all' | 'particles' | 'conjugations' | 'keigo' | 'expressions') => void;
}

export function AcademyHeader({
  selectedTrack,
  selectedTier,
  searchQuery,
  activeCategory,
  onSelectTrack,
  onSelectTier,
  onSearchChange,
  onCategoryChange,
}: AcademyHeaderProps) {
  return (
    <section className="bg-background-deep border-b border-border-hairline px-4 sm:px-6 py-4">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-3.5">
        <div className="flex flex-wrap items-center justify-between border-b border-border-subtle pb-3 gap-3">
          <div className="flex flex-wrap items-center space-x-2">
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider mr-2">Curriculum Track:</span>
            <button
              onClick={() => onSelectTrack('jlpt')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm transition-all ${
                selectedTrack === 'jlpt'
                  ? 'bg-surface-muted border border-border-hairline text-text-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted border border-transparent'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-accent-gold"></span>
              JLPT Standard: N5 → N1
              <span className="px-1.5 py-0.2 rounded bg-surface-base text-[10px] text-text-secondary border border-border-hairline">Active</span>
            </button>
            <button
              onClick={() => onSelectTrack('genki')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedTrack === 'genki'
                  ? 'bg-surface-muted border border-border-hairline text-text-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted border border-transparent'
              }`}
            >
              Genki I &amp; II (3rd Ed)
            </button>
            <button
              onClick={() => onSelectTrack('minna')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedTrack === 'minna'
                  ? 'bg-surface-muted border border-border-hairline text-text-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted border border-transparent'
              }`}
            >
              Minna no Nihongo
            </button>
            <button
              onClick={() => onSelectTrack('tobira')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedTrack === 'tobira'
                  ? 'bg-surface-muted border border-border-hairline text-text-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-muted border border-transparent'
              }`}
            >
              Tobira Gateway
            </button>
          </div>

          <div className="flex items-center space-x-1 bg-surface-container p-1 rounded-lg border border-border-hairline text-xs font-mono">
            {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => onSelectTier(tier)}
                className={`px-2.5 py-0.5 rounded font-semibold transition-all ${
                  selectedTier === tier
                    ? 'bg-primary-container text-white shadow-sm'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-text-primary tracking-tight">
                JLPT {selectedTier} Grammar Encyclopedia
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-accent-gold-subtle border border-accent-gold/40 text-accent-gold text-xs font-semibold">
                Beginner Core
              </span>
            </div>
            <p className="text-xs text-text-secondary mt-1 flex flex-wrap items-center gap-2">
              <span>130 Essential Structures</span>
              <span className="inline-block w-1 h-1 rounded-full bg-border-hairline"></span>
              <span className="text-success font-medium">84 Mastered</span>
              <span className="inline-block w-1 h-1 rounded-full bg-border-hairline"></span>
              <span className="text-info font-medium">65% Retention Rate</span>
              <span className="inline-block w-1 h-1 rounded-full bg-border-hairline"></span>
              <span>Next SRS Batch: 14 hrs</span>
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-2.5">
            <div className="relative min-w-[280px] xl:min-w-[360px]">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-muted text-[18px]">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search grammar point (e.g. 〜てから, は vs が)..."
                className="w-full bg-surface-container border border-border-hairline rounded-lg pl-9 pr-16 py-2 text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
              />
              <div className="absolute right-2 top-1.5 flex items-center gap-1">
                <span className="px-1.5 py-0.5 rounded bg-surface-muted text-[10px] font-mono border border-border-hairline text-accent-gold">
                  あ IME
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              {(['all', 'particles', 'conjugations', 'keigo', 'expressions'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs capitalize transition-all ${
                    activeCategory === cat
                      ? 'bg-surface-container border border-primary-container text-white font-medium shadow-sm'
                      : 'hover:bg-surface-muted border border-transparent text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {cat === 'all' ? 'All 130' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
