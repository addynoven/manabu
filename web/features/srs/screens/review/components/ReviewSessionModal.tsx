'use client';

import React from 'react';
import { speakJapanese } from '@/features/content/models/kana';
import { Volume2, CheckCircle2, XCircle } from 'lucide-react';

export interface SrsItem {
  id: string;
  kanji: string;
  kana: string;
  meaning: string;
  stage: number;
  dueAt: number;
  stability?: number;
  difficulty?: number;
  reps?: number;
}

const STAGE_NAMES = [
  'Locked',
  'Apprentice I',
  'Apprentice II',
  'Apprentice III',
  'Apprentice IV',
  'Guru I',
  'Guru II',
  'Master',
  'Enlightened',
  'Burned 🏆',
];

interface ReviewSessionModalProps {
  isReviewing: boolean;
  dueItems: SrsItem[];
  currentIndex: number;
  showAnswer: boolean;
  sessionResults: { correct: number; incorrect: number };
  onClose: () => void;
  onShowAnswer: () => void;
  onRate: (promoted: boolean) => void;
}

export function ReviewSessionModal({
  isReviewing,
  dueItems,
  currentIndex,
  showAnswer,
  sessionResults,
  onClose,
  onShowAnswer,
  onRate,
}: ReviewSessionModalProps) {
  if (!isReviewing) return null;

  const currentItem = dueItems[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-[#051b22]/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0a3240] border border-[#17424f] rounded-xl p-6 md:p-8 max-w-lg w-full shadow-2xl space-y-6">
        {currentIndex < dueItems.length && currentItem ? (
          <>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-[#8fa2aa]">
                  Review {currentIndex + 1} of {dueItems.length}
                </span>
                <div className="text-xs font-bold text-[#ffb4ab] mt-0.5">
                  Current: {STAGE_NAMES[currentItem.stage]}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#8fa2aa] hover:text-white rounded-xl hover:bg-[#0f3947]"
              >
                ✕
              </button>
            </div>

            <div className="bg-[#051b22] border border-[#17424f] rounded-2xl p-8 text-center min-h-[220px] flex flex-col items-center justify-center shadow-inner">
              <span className="text-xs text-[#627780] font-bold uppercase tracking-wider mb-2">
                Prompt: What is the meaning?
              </span>
              <h2 className="text-5xl font-black text-white font-serif mb-4">
                {currentItem.kanji || currentItem.kana}
              </h2>
              <button
                onClick={() => speakJapanese(currentItem.kanji || currentItem.kana)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f3947] hover:bg-[#0f3947] text-xs text-[#c1d0d6]"
              >
                <Volume2 size={13} /> Listen
              </button>

              {showAnswer && (
                <div className="mt-6 pt-6 border-t border-[#17424f] w-full animate-in fade-in duration-200">
                  <p className="text-sm font-mono text-[#ffb4ab] mb-1">Kana: {currentItem.kana}</p>
                  <h3 className="text-xl font-bold text-white">{currentItem.meaning}</h3>
                </div>
              )}
            </div>

            {!showAnswer ? (
              <button
                onClick={onShowAnswer}
                className="w-full py-3.5 rounded-xl bg-[#c74a4a] hover:bg-[#d95a5a] text-white font-bold text-sm transition shadow-lg shadow-red-950/50"
              >
                Show Answer (Spacebar / Tap)
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => onRate(false)}
                  className="py-3.5 rounded-xl bg-red-950/40 hover:bg-red-950/70 border border-red-500/40 text-red-300 font-bold text-xs transition flex items-center justify-center gap-2"
                >
                  <XCircle size={16} /> Incorrect (Drop Stage)
                </button>
                <button
                  onClick={() => onRate(true)}
                  className="py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-bold text-xs transition flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={16} /> Correct (+10 XP)
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto text-3xl">
              🥋
            </div>
            <h3 className="text-2xl font-black text-white">SRS Review Complete!</h3>
            <p className="text-xs text-[#c1d0d6] max-w-sm mx-auto">
              You reviewed all due items with{' '}
              <span className="font-bold text-emerald-400">{sessionResults.correct} correct</span> and{' '}
              <span className="font-bold text-[#ffb4ab]">{sessionResults.incorrect} to review again later</span>.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-[#c74a4a] hover:bg-[#d95a5a] text-white font-bold text-xs transition"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
