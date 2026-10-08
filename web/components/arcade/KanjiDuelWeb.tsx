'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  KanjiDuelQuestion,
  generateDuelMatch,
  KANJI_DUEL_BOTS,
} from '@/lib/arcade/kanjiDuelEngine';
import { speakJapanese } from '@/data/kana';
import { Zap, Heart, Shield, RotateCcw, Swords, Volume2, Trophy, Bot, Flame } from 'lucide-react';

interface KanjiDuelWebProps {
  onExit: () => void;
}

export function KanjiDuelWeb({ onExit }: KanjiDuelWebProps) {
  const [questions, setQuestions] = useState<KanjiDuelQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [playerHp, setPlayerHp] = useState(1000);
  const [botHp, setBotHp] = useState(1000);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const botProfile = KANJI_DUEL_BOTS[difficulty];

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [combo, setCombo] = useState(0);
  const [combatLog, setCombatLog] = useState<string>('⚡ Battle commences! 1000 HP Speed Strike Combat!');
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<'player' | 'bot' | null>(null);

  const startTimeRef = useRef<number>(Date.now());
  const botAttackTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startNewGame();
    return () => {
      if (botAttackTimerRef.current) clearTimeout(botAttackTimerRef.current);
    };
  }, [difficulty]);

  const startNewGame = () => {
    if (botAttackTimerRef.current) clearTimeout(botAttackTimerRef.current);
    const matchQuestions = generateDuelMatch(true);
    setQuestions(matchQuestions);
    setCurrentIndex(0);
    setPlayerHp(1000);
    setBotHp(1000);
    setCombo(0);
    setGameOver(false);
    setWinner(null);
    setSelectedOption(null);
    setAnswered(false);
    setCombatLog(`⚡ Battle commences against ${botProfile.name}!`);
    startTimeRef.current = Date.now();
    scheduleBotAttack();

    if (matchQuestions[0]) {
      speakJapanese(matchQuestions[0].ttsAudio);
    }
  };

  const scheduleBotAttack = () => {
    if (botAttackTimerRef.current) clearTimeout(botAttackTimerRef.current);

    const delay = Math.floor(botProfile.attackTimerMs * (0.8 + Math.random() * 0.4));

    botAttackTimerRef.current = setTimeout(() => {
      handleBotAttack();
    }, delay);
  };

  const handleBotAttack = () => {
    if (gameOver) return;

    // Bot strikes!
    const isBotCorrect = Math.random() < botProfile.accuracy;
    if (isBotCorrect) {
      const dmg = Math.floor(Math.random() * 80) + 120; // 120 - 200 dmg
      setPlayerHp(prev => {
        const next = Math.max(0, prev - dmg);
        if (next === 0) {
          setGameOver(true);
          setWinner('bot');
          setCombatLog(`💀 ${botProfile.name} delivered the finishing strike!`);
        } else {
          setCombatLog(`💥 ${botProfile.name} struck you for ${dmg} DMG!`);
        }
        return next;
      });
    } else {
      setCombatLog(`🛡️ ${botProfile.name} missed their strike!`);
    }

    if (!gameOver) {
      scheduleBotAttack();
    }
  };

  const currentQ = questions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (answered || gameOver || !currentQ) return;

    setSelectedOption(idx);
    setAnswered(true);

    const elapsedMs = Date.now() - startTimeRef.current;
    const isCorrect = idx === currentQ.correctIndex;

    if (isCorrect) {
      // Speed multiplier
      const speedMultiplier = elapsedMs < 1500 ? 1.5 : elapsedMs < 3000 ? 1.2 : 1.0;
      const baseDmg = 160 + combo * 25;
      const totalDmg = Math.round(baseDmg * speedMultiplier);

      const newCombo = combo + 1;
      setCombo(newCombo);

      setBotHp(prev => {
        const next = Math.max(0, prev - totalDmg);
        if (next === 0) {
          setGameOver(true);
          setWinner('player');
          setCombatLog(`🏆 CRITICAL STRIKE! You dealt ${totalDmg} DMG and defeated ${botProfile.name}!`);
        } else {
          setCombatLog(`⚡ STRIKE! Dealt ${totalDmg} DMG! (${newCombo}x Combo)`);
        }
        return next;
      });
    } else {
      setCombo(0);
      setCombatLog(`❌ Blocked! Incorrect answer.`);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1 && !gameOver) {
        const nextIdx = currentIndex + 1;
        setCurrentIndex(nextIdx);
        setSelectedOption(null);
        setAnswered(false);
        startTimeRef.current = Date.now();
        if (questions[nextIdx]) {
          speakJapanese(questions[nextIdx].ttsAudio);
        }
      } else if (!gameOver) {
        // Loop back questions if match still ongoing
        setCurrentIndex(0);
        setSelectedOption(null);
        setAnswered(false);
        startTimeRef.current = Date.now();
      }
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg">
            ⚡
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">漢字決闘 • Kanji Duel</h1>
            <p className="text-[11px] text-neutral-400">
              1000 HP Speed Strike Combat • vs {botProfile.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={difficulty}
            onChange={e => setDifficulty(e.target.value as any)}
            className="bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-1.5 text-xs text-neutral-300 font-bold focus:outline-none"
          >
            <option value="easy">🦝 Tanuki (Easy)</option>
            <option value="medium">🦊 Kitsune (Medium)</option>
            <option value="hard">👺 Tengu Master (Hard)</option>
          </select>

          <button
            onClick={onExit}
            className="px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-300 transition"
          >
            Exit Game
          </button>
        </div>
      </div>

      {/* Health Bars: Player vs Bot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Player Bar */}
        <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-3xl space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-white flex items-center gap-1.5">
              🥋 You (Learner)
              {combo > 1 && (
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-black animate-bounce">
                  {combo}x Combo
                </span>
              )}
            </span>
            <span className="font-mono font-bold text-emerald-400">{playerHp} / 1000 HP</span>
          </div>
          <div className="w-full bg-neutral-950 h-3 rounded-full overflow-hidden border border-neutral-800">
            <div
              className="bg-emerald-500 h-full transition-all duration-300 ease-out"
              style={{ width: `${(playerHp / 1000) * 100}%` }}
            />
          </div>
        </div>

        {/* Bot Bar */}
        <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-3xl space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-white flex items-center gap-1.5">
              {botProfile.avatarEmoji} {botProfile.name}
            </span>
            <span className="font-mono font-bold text-red-400">{botHp} / 1000 HP</span>
          </div>
          <div className="w-full bg-neutral-950 h-3 rounded-full overflow-hidden border border-neutral-800">
            <div
              className="bg-red-500 h-full transition-all duration-300 ease-out"
              style={{ width: `${(botHp / 1000) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Combat Log */}
      <div className="p-3 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center text-xs font-bold text-neutral-300">
        {combatLog}
      </div>

      {/* Question Arena */}
      {gameOver ? (
        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl text-center space-y-4 shadow-2xl">
          <div className="text-4xl">{winner === 'player' ? '🏆' : '💀'}</div>
          <h2 className="text-xl font-black text-white">
            {winner === 'player' ? 'Victory in Kanji Duel!' : 'Defeated in the Arena'}
          </h2>
          <p className="text-xs text-neutral-400">
            {winner === 'player'
              ? `You struck down ${botProfile.name} with master kanji knowledge!`
              : `${botProfile.name} overwhelmed your defense.`}
          </p>
          <button
            onClick={startNewGame}
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-black text-white transition flex items-center gap-2 mx-auto"
          >
            <RotateCcw size={15} /> Play Again
          </button>
        </div>
      ) : (
        currentQ && (
          <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-6 md:p-8 space-y-6">
            {/* Target Kanji Centerpiece */}
            <div className="text-center space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-400">
                {currentQ.questionTitle}
              </div>
              <div className="text-7xl md:text-8xl font-serif font-black text-white py-2 tracking-tight drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]">
                {currentQ.kanjiChar}
              </div>
              <div className="text-xs text-neutral-400">{currentQ.questionSubtitle}</div>
            </div>

            {/* 4 Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-lg mx-auto">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let btnStyle = 'bg-neutral-900 hover:bg-neutral-800 border-neutral-800 text-white';
                if (answered) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-950/40';
                  } else if (isSelected) {
                    btnStyle = 'bg-red-600 border-red-500 text-white';
                  } else {
                    btnStyle = 'bg-neutral-950 border-neutral-900 text-neutral-600';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={answered}
                    className={`p-4 rounded-2xl border text-sm font-bold transition flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    <span className="w-6 h-6 rounded-lg bg-black/20 flex items-center justify-center text-xs font-mono">
                      {idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )
      )}
    </div>
  );
}
