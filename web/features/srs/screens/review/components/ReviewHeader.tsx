'use client';

import React from 'react';
import { RefreshCw, Zap } from 'lucide-react';

interface ReviewHeaderProps {
  dueCount: number;
  onAddMoreVocab: () => void;
  onStartSession: () => void;
}

export function ReviewHeader({
  dueCount,
  onAddMoreVocab,
  onStartSession,
}: ReviewHeaderProps) {
  return (
    <div className="bg-surface-base border border-border-hairline rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle border border-primary-container/30 text-primary text-xs font-bold uppercase tracking-wider mb-2">
          <RefreshCw size={14} /> FSRS-5 Spaced Repetition Engine
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
          SRS Cloze Study Workstation • <span className="font-serif text-accent-gold font-normal">復習道場</span>
        </h1>
        <p className="text-xs text-text-secondary mt-1 max-w-2xl">
          Scientifically calibrated memory decay scheduling using FSRS-5 algorithm. Retain kanji readings and vocabulary definitions permanently.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onAddMoreVocab}
          className="bg-surface-muted hover:bg-surface-elevated border border-border-hairline text-text-primary font-semibold px-4 py-2.5 rounded-lg text-xs transition"
        >
          + Add 10 Words
        </button>
        <button
          onClick={onStartSession}
          disabled={dueCount === 0}
          className="bg-primary-container hover:bg-primary-hover disabled:opacity-40 text-white font-bold px-5 py-2.5 rounded-lg text-xs transition shadow-[0_4px_14px_rgba(199,74,74,0.35)] flex items-center gap-2"
        >
          <Zap size={14} fill="white" />
          <span>Launch Reviews ({dueCount} Due)</span>
        </button>
      </div>
    </div>
  );
}
