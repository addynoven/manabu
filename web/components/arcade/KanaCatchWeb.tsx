'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  CatchTarget,
  CatchFallingItem,
  getRandomCatchTarget,
  spawnFallingWave,
  getCandidatePool,
} from '@/lib/arcade/catchEngine';
import { speakJapanese } from '@/data/kana';
import { RotateCcw, Trophy, Heart, ArrowLeft, ArrowRight } from 'lucide-react';

interface KanaCatchWebProps {
  onExit: () => void;
}

export function KanaCatchWeb({ onExit }: KanaCatchWebProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [highScore, setHighScore] = useState(0);

  const [currentTarget, setCurrentTarget] = useState<CatchTarget | null>(null);
  const [fallingItems, setFallingItems] = useState<CatchFallingItem[]>([]);
  const [basketX, setBasketX] = useState(50); // 0 to 100 percentage

  const basketXRef = useRef(50);
  basketXRef.current = basketX;

  const animationFrameRef = useRef<number | null>(null);
  const lastSpawnTimeRef = useRef<number>(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('manabu_arcade_catch_high');
      if (saved) setHighScore(Number(saved));
    } catch {}
  }, []);

  const startGame = () => {
    const target = getRandomCatchTarget('kana');
    setCurrentTarget(target);
    setScore(0);
    setLives(3);
    setFallingItems([]);
    setBasketX(50);
    setGameOver(false);
    setIsPlaying(true);
    lastSpawnTimeRef.current = Date.now();
    speakJapanese(target.glyph);
  };

  // Keyboard navigation for basket
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setBasketX(x => Math.max(8, x - 6));
      }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setBasketX(x => Math.min(92, x + 6));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  // Main Physics / Falling loop
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    let active = true;

    const gameTick = () => {
      if (!active) return;
      const now = Date.now();

      // Spawn falling items every 2.2s
      if (now - lastSpawnTimeRef.current > 2200 && currentTarget) {
        const pool = getCandidatePool('kana');
        const newItems = spawnFallingWave(currentTarget, 4, pool, 'normal');
        setFallingItems(prev => [...prev, ...newItems]);
        lastSpawnTimeRef.current = now;
      }

      setFallingItems(prev => {
        const next: CatchFallingItem[] = [];

        for (const item of prev) {
          const updatedY = item.yPosition + 0.65;

          // Check Catch Collision near bottom (y between 85% and 95%)
          if (updatedY >= 85 && updatedY <= 95) {
            const itemX = item.column * 25 + 12.5; // 4 columns: 12.5%, 37.5%, 62.5%, 87.5%
            const distance = Math.abs(itemX - basketXRef.current);

            if (distance < 14) {
              // Caught in basket!
              if (item.isTarget) {
                setScore(s => {
                  const newScore = s + 25;
                  if (newScore > highScore) {
                    setHighScore(newScore);
                    try {
                      localStorage.setItem('manabu_arcade_catch_high', String(newScore));
                    } catch {}
                  }
                  return newScore;
                });
                // Switch target on correct catch
                const nextT = getRandomCatchTarget('kana');
                setCurrentTarget(nextT);
                speakJapanese(nextT.glyph);
              } else {
                // Caught wrong item
                setLives(l => {
                  const nextL = l - 1;
                  if (nextL <= 0) {
                    setIsPlaying(false);
                    setGameOver(true);
                  }
                  return Math.max(0, nextL);
                });
              }
              continue; // remove caught item
            }
          }

          // Off bottom of screen
          if (updatedY >= 100) {
            if (item.isTarget) {
              setLives(l => {
                const nextL = l - 1;
                if (nextL <= 0) {
                  setIsPlaying(false);
                  setGameOver(true);
                }
                return Math.max(0, nextL);
              });
            }
            continue; // remove fallen item
          }

          next.push({ ...item, yPosition: updatedY });
        }

        return next;
      });

      animationFrameRef.current = requestAnimationFrame(gameTick);
    };

    animationFrameRef.current = requestAnimationFrame(gameTick);

    return () => {
      active = false;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying, gameOver, currentTarget, highScore]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPlaying) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width;
    setBasketX(Math.max(8, Math.min(92, xRatio * 100)));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
            🧺
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">収穫籠 • Kana Catch</h1>
            <p className="text-[11px] text-neutral-400">Slide the basket to catch the requested Japanese character.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs">
            <Trophy size={14} className="text-amber-400" />
            <span className="text-neutral-400">Best:</span>
            <span className="font-bold text-white">{highScore} pts</span>
          </div>

          <button
            onClick={onExit}
            className="px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-300 transition"
          >
            Exit Game
          </button>
        </div>
      </div>

      {/* Target & Lives Bar */}
      <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-400 font-bold uppercase">Catch Target:</span>
          <span className="text-2xl font-black text-amber-400 font-serif">
            {currentTarget?.promptPrimary || 'Start'}
          </span>
          <span className="text-xs text-neutral-400 font-mono">
            {currentTarget?.promptSecondary ? `(${currentTarget.promptSecondary})` : ''}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <Heart
                key={i}
                size={18}
                fill={i < lives ? '#ef4444' : 'none'}
                className={i < lives ? 'text-red-500' : 'text-neutral-700'}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400 font-bold uppercase">Score:</span>
            <span className="text-2xl font-black text-white font-mono">{score}</span>
          </div>
        </div>
      </div>

      {/* Catch Arena Canvas */}
      <div
        onMouseMove={handleMouseMove}
        className="bg-neutral-950 border-2 border-neutral-800 rounded-3xl min-h-[380px] h-[380px] relative overflow-hidden shadow-2xl cursor-none select-none"
      >
        {!isPlaying && !gameOver && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 p-8">
            <div className="text-5xl">🧺</div>
            <h2 className="text-xl font-black text-white">Kana Harvest Basket</h2>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              Move your mouse or use Left/Right arrow keys to steer the basket. Catch the matching kana and dodge the rest!
            </p>
            <button
              onClick={startGame}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black transition shadow-lg shadow-amber-950/40"
            >
              Start Game
            </button>
          </div>
        )}

        {gameOver && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 p-8">
            <div className="text-5xl">💔</div>
            <h2 className="text-xl font-black text-white">Game Over!</h2>
            <p className="text-xs text-neutral-400">Final Harvest: {score} pts</p>
            <button
              onClick={startGame}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black transition flex items-center gap-2 mx-auto"
            >
              <RotateCcw size={15} /> Play Again
            </button>
          </div>
        )}

        {/* Falling Glyphs */}
        {isPlaying &&
          fallingItems.map(item => {
            const leftPercent = item.column * 25 + 12.5;
            return (
              <div
                key={item.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-lg font-serif font-black text-white shadow-md pointer-events-none"
                style={{
                  left: `${leftPercent}%`,
                  top: `${item.yPosition}%`,
                }}
              >
                {item.glyph}
              </div>
            );
          })}

        {/* Sliding Basket Paddle */}
        {isPlaying && (
          <div
            className="absolute bottom-4 -translate-x-1/2 w-24 h-8 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 border-2 border-amber-300 flex items-center justify-center text-xs font-black text-black shadow-lg shadow-amber-500/40 transition-all duration-75 pointer-events-none"
            style={{ left: `${basketX}%` }}
          >
            🧺 BASKET
          </div>
        )}
      </div>

      {/* Touch/Arrow Helpers */}
      <div className="flex justify-center gap-4 pt-2">
        <button
          onClick={() => setBasketX(x => Math.max(8, x - 10))}
          className="px-6 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-bold text-white flex items-center gap-2"
        >
          <ArrowLeft size={16} /> Left
        </button>
        <button
          onClick={() => setBasketX(x => Math.min(92, x + 10))}
          className="px-6 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-bold text-white flex items-center gap-2"
        >
          Right <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
