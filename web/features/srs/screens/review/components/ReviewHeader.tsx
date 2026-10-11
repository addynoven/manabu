'use client';

import React from 'react';
import { RefreshCw, Zap } from 'lucide-react';

interface ReviewHeaderProps {
  dueCount: number;
  loading?: boolean;
  onAddMoreVocab: () => void;
  onStartSession: () => void;
}

export function ReviewHeader({
  dueCount,
  loading = false,
  onAddMoreVocab,
  onStartSession,
}: ReviewHeaderProps) {
  return (
    <div className="bg-surface-base border border-border-hairline rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-subtle border border-primary-container/30 text-primary text-xs font-bold uppercase tracking-wider mb-2">
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> FSRS-6 Spaced Repetition Engine
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
          SRS Cloze Study Workstation • <span className="font-serif text-accent-gold font-normal">復習道場</span>
        </h1>
        <p className="text-xs text-text-secondary mt-1 max-w-2xl">
          Scientifically calibrated memory decay scheduling using FSRS-6 algorithm. Retain kanji readings and vocabulary definitions permanently.
        </p>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        {/* Dojo Belt SVG Donut Ring */}
        <div className="flex items-center gap-3 bg-[#051b22] px-4 py-2.5 rounded-2xl border border-[#17424f] shadow-inner">
          <div className="relative w-11 h-11 flex items-center justify-center">
            <svg className="w-11 h-11 -rotate-90 transform" viewBox="0 0 36 36">
              <path
                className="text-[#17424f]"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-amber-400"
                strokeDasharray="65, 100"
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-[10px] font-black font-mono text-amber-400">65%</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-mono font-bold text-[#8fa2aa] block">Dojo Belt Rank</span>
            <span className="text-xs font-bold text-white flex items-center gap-1">
              🥋 White Belt <span className="text-amber-400 text-[10px] font-mono">→ Yellow</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onAddMoreVocab}
            className="bg-surface-muted hover:bg-surface-elevated border border-border-hairline text-text-primary font-semibold px-4 py-2.5 rounded-lg text-xs transition"
          >
            + Add 10 Words
          </button>
          <button
            onClick={onStartSession}
            disabled={loading || dueCount === 0}
            className="bg-primary-container hover:bg-primary-hover disabled:opacity-40 text-white font-bold px-5 py-2.5 rounded-lg text-xs transition shadow-[0_4px_14px_rgba(199,74,74,0.35)] flex items-center gap-2"
          >
            <Zap size={14} fill="white" />
            <span>{loading ? 'Syncing Queue...' : `Launch Reviews (${dueCount} Due)`}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
