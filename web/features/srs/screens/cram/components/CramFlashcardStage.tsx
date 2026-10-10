'use client';

import React from 'react';
import { speakJapanese } from '@/features/content/models/kana';
import { Volume2, XCircle, CheckCircle2 } from 'lucide-react';

export interface CramItem {
  id: string;
  kanji: string;
  kana: string;
  meaning: string;
  level: string;
  category: string;
}

interface CramFlashcardStageProps {
  activeDeck: CramItem[];
  currentIndex: number;
  showAnswer: boolean;
  onExit: () => void;
  onShowAnswer: () => void;
  onScore: (isCorrect: boolean) => void;
}

export function CramFlashcardStage({
  activeDeck,
  currentIndex,
  showAnswer,
  onExit,
  onShowAnswer,
  onScore,
}: CramFlashcardStageProps) {
  const currentItem = activeDeck[currentIndex];
  if (!currentItem) return null;

  return (
    <div className="max-w-2xl mx-auto w-full bg-[#0a3240] border border-[#17424f] rounded-xl p-6 md:p-10 shadow-2xl space-y-8">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-amber-400">
          Card {currentIndex + 1} of {activeDeck.length}
        </span>
        <button onClick={onExit} className="text-xs text-[#8fa2aa] hover:text-white">
          Exit Session
        </button>
      </div>

      <div className="w-full bg-[#0f3947] h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-amber-500 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / activeDeck.length) * 100}%` }}
        />
      </div>

      <div className="text-center space-y-6 py-4">
        <div className="text-5xl md:text-6xl font-black font-serif text-white tracking-widest">
          {currentItem.kanji || currentItem.kana}
        </div>
        <div className="text-xl font-mono text-[#8fa2aa]">{currentItem.kana}</div>

        <button
          onClick={() => speakJapanese(currentItem.kanji || currentItem.kana)}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0f3947] hover:bg-[#17424f] rounded-xl text-xs text-[#c1d0d6] transition"
        >
          <Volume2 size={15} /> Listen
        </button>

        {showAnswer ? (
          <div className="p-6 bg-[#051b22] border border-[#17424f] rounded-2xl space-y-2 animate-in fade-in">
            <span className="text-xs uppercase font-mono text-[#627780] block">Definition</span>
            <p className="text-xl font-bold text-emerald-400">{currentItem.meaning}</p>
          </div>
        ) : (
          <button
            onClick={onShowAnswer}
            className="px-8 py-3 bg-[#0f3947] hover:bg-[#17424f] text-white rounded-xl text-sm font-bold transition"
          >
            Show Answer
          </button>
        )}

        {showAnswer && (
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onScore(false)}
              className="px-6 py-2.5 bg-red-950/60 border border-red-800 hover:bg-red-900/80 text-red-300 font-bold rounded-xl text-sm transition flex items-center gap-2"
            >
              <XCircle size={16} /> Needs Work
            </button>
            <button
              onClick={() => onScore(true)}
              className="px-6 py-2.5 bg-emerald-950/60 border border-emerald-800 hover:bg-emerald-900/80 text-emerald-300 font-bold rounded-xl text-sm transition flex items-center gap-2"
            >
              <CheckCircle2 size={16} /> Got It!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
