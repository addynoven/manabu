'use client';

import React from 'react';
import { speakJapanese } from '../../../models/kana';

export interface KanjiEntry {
  id: number;
  kanjiChar: string;
  onyomi: string[];
  kunyomi: string[];
  meanings: string[];
  level?: string;
  strokes?: number;
  strokeCount?: number;
  radical?: string;
}

interface KanjiGridListProps {
  kanjiList: KanjiEntry[];
  totalFilteredCount: number;
  activeKanji: KanjiEntry;
  viewMode: 'grid' | 'table';
  selectedLevel: string;
  currentPage: number;
  totalPages: number;
  onSelectKanji: (kanji: KanjiEntry) => void;
  onSetViewMode: (mode: 'grid' | 'table') => void;
  onSetPage: (page: number) => void;
}

export function KanjiGridList({
  kanjiList,
  totalFilteredCount,
  activeKanji,
  viewMode,
  selectedLevel,
  currentPage,
  totalPages,
  onSelectKanji,
  onSetViewMode,
  onSetPage,
}: KanjiGridListProps) {
  return (
    <section className="flex-1 min-w-0 flex flex-col gap-4">
      <div className="bg-surface-base border border-border-hairline rounded-xl p-4 flex flex-col gap-3 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-text-primary">
                JLPT {selectedLevel} Kanji Directory
              </h1>
            </div>
            <p className="text-xs text-text-secondary mt-0.5">
              Showing Page {currentPage} of {totalPages} ({totalFilteredCount.toLocaleString()} Total Matches)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-text-muted bg-background-deep px-2 py-1 rounded border border-border-subtle">
              {totalFilteredCount.toLocaleString()} Glyphs Total
            </span>
            <div className="flex bg-background-deep border border-border-hairline rounded-lg p-0.5">
              <button
                onClick={() => onSetViewMode('grid')}
                className={`px-2 py-1 rounded text-xs flex items-center transition ${
                  viewMode === 'grid' ? 'bg-surface-muted text-white shadow-sm' : 'text-text-muted hover:text-white'
                }`}
                title="Grid View"
              >
                <span className="material-symbols-outlined text-[16px]">grid_view</span>
              </button>
              <button
                onClick={() => onSetViewMode('table')}
                className={`px-2 py-1 rounded text-xs flex items-center transition ${
                  viewMode === 'table' ? 'bg-surface-muted text-white shadow-sm' : 'text-text-muted hover:text-white'
                }`}
                title="List View"
              >
                <span className="material-symbols-outlined text-[16px]">table_rows</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full bg-background-deep h-2 rounded-full overflow-hidden border border-border-hairline">
          <div
            className="bg-primary-container h-full rounded-full shadow-[0_0_8px_rgba(199,74,74,0.5)] transition-all"
            style={{ width: `${Math.min(100, Math.round((currentPage / totalPages) * 100))}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2.5">
        {kanjiList.map((k) => {
          const isSelected = activeKanji.kanjiChar === k.kanjiChar;

          return (
            <div
              key={k.id || k.kanjiChar}
              onClick={() => {
                onSelectKanji(k);
                speakJapanese(k.kanjiChar);
              }}
              className={`relative rounded-xl p-2.5 flex flex-col justify-between cursor-pointer transition-all group ${
                isSelected
                  ? 'bg-surface-muted border-2 border-primary-container shadow-[0_0_16px_rgba(199,74,74,0.35)] ring-1 ring-primary-container'
                  : 'bg-surface-base border border-border-hairline hover:border-text-secondary hover:bg-surface-muted'
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="px-1.5 py-0.2 rounded bg-surface-muted text-[9px] font-mono text-[#38bdf8] border border-[#17424f]">
                  {k.level || 'JLPT'}
                </span>
                <span className="text-[10px] font-mono text-accent-gold font-semibold">
                  {k.strokes ? `${k.strokes} st.` : 'Glyph'}
                </span>
              </div>
              <div className="py-2.5 text-center">
                <span className="text-3xl font-serif font-bold text-text-primary group-hover:scale-105 transition-transform inline-block">
                  {k.kanjiChar}
                </span>
              </div>
              <div className="border-t border-border-hairline pt-1.5 flex flex-col">
                <span className="text-[11px] font-bold text-text-primary truncate">
                  {k.meanings[0] || 'Meaning'}
                </span>
                <span className="text-[10px] text-text-secondary truncate font-mono">
                  {k.onyomi[0]?.split(' ')[0] || k.kunyomi[0]?.split(' ')[0] || '—'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Working Pagination Controls */}
      <div className="bg-surface-base border border-border-hairline rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <span className="text-text-muted font-mono">
          Page {currentPage} of {totalPages} ({totalFilteredCount.toLocaleString()} Entries)
        </span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onSetPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 rounded-lg bg-surface-muted border border-border-hairline text-xs text-text-primary disabled:opacity-40 hover:bg-surface-elevated transition"
          >
            Previous
          </button>
          <span className="px-3 py-1.5 rounded-lg bg-primary-container text-white text-xs font-mono font-bold shadow-sm">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => onSetPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 rounded-lg bg-surface-muted border border-border-hairline text-xs text-text-primary disabled:opacity-40 hover:bg-surface-elevated transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
