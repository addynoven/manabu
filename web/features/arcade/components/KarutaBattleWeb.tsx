'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  KarutaCard,
  KarutaGameMode,
  KARUTA_BOT_PROFILES,
  generateKarutaMatch,
} from '../engine/karutaEngine';
import { speakJapanese } from '@/data/kana';
import { Volume2, RotateCcw, AlertCircle, Sparkles, Trophy, Bot, Flame } from 'lucide-react';

interface KarutaBattleWebProps {
  onExit: () => void;
}

export function KarutaBattleWeb({ onExit }: KarutaBattleWebProps) {
  const [mode, setMode] = useState<KarutaGameMode>('poem');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const botProfile = KARUTA_BOT_PROFILES[difficulty];

  const [cards, setCards] = useState<KarutaCard[]>([]);
  const [currentTarget, setCurrentTarget] = useState<KarutaCard | null>(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [otetsukiFrozen, setOtetsukiFrozen] = useState(false);
  const [lastEvent, setLastEvent] = useState<string>('');
  const [gameOver, setGameOver] = useState(false);

  const botTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startNewGame();
    return () => {
      if (botTimerRef.current) clearTimeout(botTimerRef.current);
    };
  }, [mode, difficulty]);

  const startNewGame = () => {
    if (botTimerRef.current) clearTimeout(botTimerRef.current);
    const match = generateKarutaMatch(12, mode);
    setCards(match.matCards);
    setPlayerScore(0);
    setBotScore(0);
    setGameOver(false);
    setOtetsukiFrozen(false);
    setLastEvent('🌸 Karuta match started! Listen carefully to the Yomite reader.');
    nextRound(match.matCards);
  };

  const nextRound = (currentCards: KarutaCard[]) => {
    if (currentCards.length === 0) {
      setGameOver(true);
      return;
    }

    const target = currentCards[Math.floor(Math.random() * currentCards.length)];
    setCurrentTarget(target);

    speakJapanese(target.audioText);

    const delay =
      Math.floor(
        Math.random() * (botProfile.maxReactionMs - botProfile.minReactionMs)
      ) + botProfile.minReactionMs;

    botTimerRef.current = setTimeout(() => {
      handleBotSlap(target, currentCards);
    }, delay);
  };

  const handleBotSlap = (target: KarutaCard, currentCards: KarutaCard[]) => {
    if (Math.random() < botProfile.foulChance) {
      setLastEvent(`👺 ${botProfile.name} committed Otetsuki (fault penalty)!`);
      return;
    }

    setBotScore(s => s + 1);
    setLastEvent(`⚡ ${botProfile.name} snatched 「${target.japanese}」!`);

    const remaining = currentCards.filter(c => c.id !== target.id);
    setCards(remaining);
    nextRound(remaining);
  };

  const handleCardClick = (card: KarutaCard) => {
    if (otetsukiFrozen || gameOver || !currentTarget) return;

    if (card.id === currentTarget.id) {
      if (botTimerRef.current) clearTimeout(botTimerRef.current);
      setPlayerScore(s => s + 1);
      setLastEvent(`🎯 YOU slapped 「${card.japanese}」! +1 Pt`);

      const remaining = cards.filter(c => c.id !== card.id);
      setCards(remaining);
      nextRound(remaining);
    } else {
      setOtetsukiFrozen(true);
      setPlayerScore(s => Math.max(0, s - 1));
      setLastEvent('❌ OTETSUKI! You touched the wrong card! Frozen for 1.5s.');
      setTimeout(() => {
        setOtetsukiFrozen(false);
      }, 1500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Bar */}
      <div className="flex items-center justify-between bg-[#0a3240] border border-[#17424f] p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
            🎴
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">競技かるた • Competitive Karuta</h1>
            <p className="text-[11px] text-[#8fa2aa]">
              {mode === 'poem' ? '百人一首 (100 Poems Mode)' : '日本語単語 (Vocabulary Mode)'} • vs {botProfile.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={mode}
            onChange={e => setMode(e.target.value as KarutaGameMode)}
            className="bg-[#051b22] border border-[#17424f] rounded-xl px-3 py-1.5 text-xs text-[#c1d0d6] font-bold focus:outline-none"
          >
            <option value="poem">🌸 100 Classical Poems</option>
            <option value="vocab">📖 Core Vocabulary</option>
          </select>

          <select
            value={difficulty}
            onChange={e => setDifficulty(e.target.value as any)}
            className="bg-[#051b22] border border-[#17424f] rounded-xl px-3 py-1.5 text-xs text-[#c1d0d6] font-bold focus:outline-none"
          >
            <option value="easy">🦝 Tanuki (Beginner)</option>
            <option value="medium">🦊 Kitsune (Class B)</option>
            <option value="hard">👺 Tengu (Meijin Master)</option>
          </select>

          <button
            onClick={onExit}
            className="px-3 py-1.5 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-[#c1d0d6] transition"
          >
            Exit Game
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-950/40 via-neutral-900 to-neutral-950 border border-amber-500/30 p-5 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => currentTarget && speakJapanese(currentTarget.audioText)}
            className="w-14 h-14 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center shadow-lg shadow-amber-950/40 transition"
            title="Hear poem recited again"
          >
            <Volume2 size={24} />
          </button>
          <div>
            <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
              Yomite Reader Recitation
            </div>
            <div className="text-base md:text-lg font-serif font-black text-white">
              {currentTarget?.kamiNoKu || currentTarget?.english || 'Listening for next card...'}
            </div>
            {currentTarget?.poet && (
              <div className="text-xs text-[#8fa2aa] italic">Poet: {currentTarget.poet}</div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-[#17424f] pt-3 md:pt-0 md:pl-6">
          <div className="text-center">
            <div className="text-[10px] text-[#8fa2aa] font-bold uppercase">You</div>
            <div className="text-2xl font-black text-emerald-400 font-mono">{playerScore}</div>
          </div>
          <div className="text-sm font-bold text-[#455a64]">VS</div>
          <div className="text-center">
            <div className="text-[10px] text-[#8fa2aa] font-bold uppercase">{botProfile.name}</div>
            <div className="text-2xl font-black text-[#ffb4ab] font-mono">{botScore}</div>
          </div>
        </div>
      </div>

      {lastEvent && (
        <div
          className={`p-3 rounded-2xl border text-xs font-bold text-center ${
            otetsukiFrozen
              ? 'bg-red-500/10 border-red-500/30 text-[#ffb4ab] animate-pulse'
              : 'bg-[#0a3240] border-[#17424f] text-[#c1d0d6]'
          }`}
        >
          {lastEvent}
        </div>
      )}

      <div className="bg-[#2a3026] border-4 border-[#3c4636] rounded-xl p-6 md:p-8 min-h-[400px] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {gameOver ? (
          <div className="bg-[#051b22]/90 border border-[#17424f] p-8 rounded-xl text-center space-y-4 max-w-md mx-auto my-12 relative z-10">
            <Trophy size={42} className="mx-auto text-amber-400" />
            <h2 className="text-xl font-black text-white">
              {playerScore > botScore ? 'Tatami Master Victory!' : 'Defeated on the Tatami!'}
            </h2>
            <p className="text-xs text-[#8fa2aa]">
              Final Score: You {playerScore} - {botScore} {botProfile.name}
            </p>
            <button
              onClick={startNewGame}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black transition flex items-center gap-2 mx-auto"
            >
              <RotateCcw size={14} /> Play Next Match
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {cards.map(card => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card)}
                disabled={otetsukiFrozen}
                className="bg-[#f7f2e7] hover:bg-[#fffdf7] text-[#1f1e1d] border-2 border-[#d9cca8] rounded-xl p-4 min-h-[120px] flex flex-col justify-between text-left shadow-lg hover:shadow-2xl transition hover:-translate-y-1 active:translate-y-0 active:scale-95 disabled:opacity-75 disabled:pointer-events-none group"
              >
                <div className="flex items-center justify-between text-[10px] text-[#627780] font-mono">
                  <span>#{card.poemNumber || card.id}</span>
                  {card.kimariji && <span className="text-red-700 font-bold">{card.kimariji}</span>}
                </div>

                <div className="text-lg md:text-xl font-serif font-black text-[#1f1e1d] py-2 leading-tight">
                  {card.japanese}
                </div>

                <div className="text-[11px] text-[#455a64] font-medium">
                  {card.reading}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
