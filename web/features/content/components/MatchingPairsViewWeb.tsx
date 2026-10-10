'use client';

import React, { useState, useEffect } from 'react';
import { speakJapanese } from '../models/kana';
import { CheckCircle2, RotateCcw } from 'lucide-react';

interface PairCard {
  id: number;
  text: string;
  pairId: number;
  isMatched: boolean;
}

interface MatchingPairsViewWebProps {
  prompt: string;
  pairs: Array<{ id: number; kana: string; romaji: string }>;
  onSuccess: () => void;
}

export function MatchingPairsViewWeb({
  prompt,
  pairs,
  onSuccess,
}: MatchingPairsViewWebProps) {
  const [cards, setCards] = useState<PairCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchesCount, setMatchesCount] = useState(0);

  useEffect(() => {
    const deck: PairCard[] = [];
    pairs.forEach((p, idx) => {
      deck.push({ id: idx * 2, text: p.kana, pairId: p.id, isMatched: false });
      deck.push({ id: idx * 2 + 1, text: p.romaji, pairId: p.id, isMatched: false });
    });
    setCards(deck.sort(() => 0.5 - Math.random()));
    setMatchesCount(0);
    setSelectedCards([]);
  }, [pairs]);

  const handleCardClick = (card: PairCard) => {
    if (card.isMatched || selectedCards.length === 2 || selectedCards.includes(card.id)) return;

    if (card.text.match(/[\u3040-\u30ff]/)) {
      speakJapanese(card.text);
    }

    const nextSelected = [...selectedCards, card.id];
    setSelectedCards(nextSelected);

    if (nextSelected.length === 2) {
      const first = cards.find(c => c.id === nextSelected[0])!;
      const second = card;

      if (first.pairId === second.pairId) {
        setTimeout(() => {
          setCards(prev =>
            prev.map(c => (c.pairId === first.pairId ? { ...c, isMatched: true } : c))
          );
          setSelectedCards([]);
          const newCount = matchesCount + 1;
          setMatchesCount(newCount);
          if (newCount === pairs.length) {
            onSuccess();
          }
        }, 300);
      } else {
        setTimeout(() => {
          setSelectedCards([]);
        }, 600);
      }
    }
  };

  return (
    <div className="bg-[#051b22] border border-[#17424f] rounded-2xl p-6 md:p-8 space-y-6 max-w-xl mx-auto shadow-2xl">
      <div className="space-y-1 text-center">
        <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider block font-bold">
          Flip &amp; Match Pairs
        </span>
        <h3 className="text-lg font-bold text-white">{prompt}</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {cards.map(c => (
          <button
            key={c.id}
            disabled={c.isMatched}
            onClick={() => handleCardClick(c)}
            className={`h-24 rounded-2xl border-2 text-xl font-serif font-black transition flex items-center justify-center ${
              c.isMatched
                ? 'bg-[#063b28] border-[#34d399] text-[#34d399] opacity-60'
                : selectedCards.includes(c.id)
                ? 'bg-[#0f3947] border-[#c74a4a] text-white scale-105 shadow-md'
                : 'bg-[#0a3240] border-[#17424f] text-[#c1d0d6] hover:border-[#17424f]'
            }`}
          >
            {c.isMatched || selectedCards.includes(c.id) ? c.text : '🎴'}
          </button>
        ))}
      </div>

      {matchesCount === pairs.length && (
        <div className="p-4 rounded-xl bg-[#063b28] border border-[#34d399] text-[#34d399] text-sm font-bold text-center flex items-center justify-center gap-2">
          <CheckCircle2 size={18} /> All Pairs Matched!
        </div>
      )}
    </div>
  );
}
