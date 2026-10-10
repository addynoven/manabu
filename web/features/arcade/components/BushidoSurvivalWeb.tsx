'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  SurvivalMode,
  SurvivalQuestion,
  generateSurvivalQuestion,
} from '../engine/survivalEngine';
import { speakJapanese } from '@/data/kana';
import { Flame, Heart, RotateCcw, Trophy, Zap, AlertTriangle } from 'lucide-react';

interface BushidoSurvivalWebProps {
  onExit: () => void;
}

export function BushidoSurvivalWeb({ onExit }: BushidoSurvivalWebProps) {
  const [mode, setMode] = useState<SurvivalMode>('kana');
  const [question, setQuestion] = useState<SurvivalQuestion | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3.0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    try {
      const saved = localStorage.getItem('manabu_arcade_survival_high');
      if (saved) setHighScore(Number(saved));
    } catch {}
  }, []);

  const startGame = () => {
    setScore(0);
    setStreak(0);
    setLives(3);
    setGameOver(false);
    setIsPlaying(true);
    nextQuestion(0);
  };

  const nextQuestion = (currentStreakVal: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const q = generateSurvivalQuestion(mode);
    setQuestion(q);
    setSelectedOption(null);

    const initialTime = Math.max(1.5, Number((3.5 - currentStreakVal * 0.1).toFixed(1)));
    setTimeLeft(initialTime);
    startTimeRef.current = Date.now();
    speakJapanese(q.prompt);

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0.1) {
          handleTimeout();
          return 0;
        }
        return Math.max(0, Number((prev - 0.1).toFixed(1)));
      });
    }, 100);
  };

  const handleTimeout = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    handleMistake();
  };

  const handleSelectOption = (opt: string) => {
    if (!question || selectedOption || gameOver) return;
    if (timerRef.current) clearInterval(timerRef.current);

    setSelectedOption(opt);
    const isCorrect = opt === question.correctAnswer;

    if (isCorrect) {
      const newStreak = streak + 1;
      const points = 10 + newStreak * 5;
      const newScore = score + points;

      setStreak(newStreak);
      setScore(newScore);

      if (newScore > highScore) {
        setHighScore(newScore);
        try {
          localStorage.setItem('manabu_arcade_survival_high', String(newScore));
        } catch {}
      }

      setTimeout(() => {
        nextQuestion(newStreak);
      }, 400);
    } else {
      handleMistake();
    }
  };

  const handleMistake = () => {
    setStreak(0);
    setLives(prev => {
      const nextL = prev - 1;
      if (nextL <= 0) {
        setIsPlaying(false);
        setGameOver(true);
      } else {
        setTimeout(() => {
          nextQuestion(0);
        }, 600);
      }
      return Math.max(0, nextL);
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between bg-[#0a3240] border border-[#17424f] p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-500/20 text-[#ffb4ab] flex items-center justify-center font-bold text-lg">
            ⚡
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">武士道サバイバル • Bushido Survival</h1>
            <p className="text-[11px] text-[#8fa2aa]">High-speed time-attack flash gauntlet.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={mode}
            onChange={e => setMode(e.target.value as SurvivalMode)}
            disabled={isPlaying}
            className="bg-[#051b22] border border-[#17424f] rounded-xl px-3 py-1.5 text-xs text-[#c1d0d6] font-bold focus:outline-none"
          >
            <option value="kana">あ Kana Speed</option>
            <option value="kanji">漢 Kanji Strike</option>
            <option value="vocab">語 Vocab Flash</option>
            <option value="hell">🔥 Hell Gauntlet</option>
          </select>

          <button
            onClick={onExit}
            className="px-3 py-1.5 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-[#c1d0d6] transition"
          >
            Exit Game
          </button>
        </div>
      </div>

      {/* Lives, Streak & Timer Bar */}
      <div className="bg-[#0a3240] border border-[#17424f] p-4 rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              size={18}
              fill={i < lives ? '#ef4444' : 'none'}
              className={i < lives ? 'text-red-500' : 'text-[#455a64]'}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          {streak > 2 && (
            <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-black flex items-center gap-1 animate-pulse">
              <Flame size={12} /> {streak}x Streak
            </span>
          )}
          <span className="text-xs text-[#8fa2aa] font-bold uppercase">Score:</span>
          <span className="text-2xl font-black text-amber-400 font-mono">{score}</span>
        </div>

        <div className="flex items-center gap-2">
          <Trophy size={14} className="text-amber-400" />
          <span className="text-xs font-bold text-white font-mono">{highScore} pts</span>
        </div>
      </div>

      {/* Time Progress Bar */}
      {isPlaying && (
        <div className="w-full bg-[#051b22] h-2 rounded-full overflow-hidden border border-[#17424f]">
          <div
            className={`h-full transition-all duration-100 ease-linear ${
              timeLeft <= 1.0 ? 'bg-red-500 animate-pulse' : 'bg-amber-400'
            }`}
            style={{ width: `${Math.min(100, (timeLeft / 3.0) * 100)}%` }}
          />
        </div>
      )}

      {/* Question Arena */}
      <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-[#17424f] rounded-xl p-6 md:p-10 space-y-8 min-h-[360px] flex flex-col items-center justify-center text-center">
        {!isPlaying && !gameOver && (
          <div className="space-y-4 max-w-sm mx-auto">
            <div className="text-5xl">⚡</div>
            <h2 className="text-xl font-black text-white">Bushido Time-Attack</h2>
            <p className="text-xs text-[#8fa2aa]">
              Answer each flash question before the 3-second fuse burns out! Build your combo streak for massive point multipliers.
            </p>
            <button
              onClick={startGame}
              className="px-6 py-3 rounded-xl bg-[#c74a4a] hover:bg-[#d95a5a] text-xs font-black text-white transition shadow-lg shadow-red-950/40"
            >
              Start Survival Run
            </button>
          </div>
        )}

        {gameOver && (
          <div className="space-y-4 max-w-sm mx-auto">
            <div className="text-5xl">💀</div>
            <h2 className="text-xl font-black text-white">Gauntlet Over!</h2>
            <p className="text-xs text-[#8fa2aa]">Final Bushido Score: {score} pts</p>
            <button
              onClick={startGame}
              className="px-6 py-3 rounded-xl bg-[#c74a4a] hover:bg-[#d95a5a] text-xs font-black text-white transition flex items-center gap-2 mx-auto"
            >
              <RotateCcw size={15} /> Try Again
            </button>
          </div>
        )}

        {isPlaying && question && (
          <div className="w-full space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] text-[#627780] uppercase tracking-widest font-bold">
                {question.promptSub || 'Rapid Recognition'}
              </span>
              <div className="text-6xl md:text-7xl font-serif font-black text-white tracking-tight drop-shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                {question.prompt}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
              {question.options.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const isCorrect = opt === question.correctAnswer;

                let btnStyle = 'bg-[#0a3240] hover:bg-[#0f3947] border-[#17424f] text-white';
                if (selectedOption) {
                  if (isCorrect) btnStyle = 'bg-emerald-600 border-emerald-500 text-white';
                  else if (isSelected) btnStyle = 'bg-[#c74a4a] border-red-500 text-white';
                  else btnStyle = 'bg-[#051b22] border-[#17424f] text-[#455a64]';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt)}
                    disabled={!!selectedOption}
                    className={`p-4 rounded-2xl border text-sm font-bold transition ${btnStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
