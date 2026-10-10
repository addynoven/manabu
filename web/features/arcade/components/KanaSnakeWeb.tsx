'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Direction,
  Coordinate,
  HIRAGANA_FOODS,
  SnakeFoodItem,
  DIFFICULTY_SPEED_MS,
  OPPOSITE_DIRECTIONS,
} from '../engine/snakeEngine';
import { speakJapanese } from '@/data/kana';
import { RotateCcw, Trophy, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

interface KanaSnakeWebProps {
  onExit: () => void;
}

const GRID_SIZE = 16;

export function KanaSnakeWeb({ onExit }: KanaSnakeWebProps) {
  const [snake, setSnake] = useState<Coordinate[]>([
    { x: 8, y: 8 },
    { x: 7, y: 8 },
    { x: 6, y: 8 },
  ]);
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [food, setFood] = useState<SnakeFoodItem & Coordinate>({
    x: 12,
    y: 8,
    ...HIRAGANA_FOODS[0],
  });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const directionRef = useRef<Direction>('RIGHT');
  directionRef.current = direction;

  useEffect(() => {
    try {
      const saved = localStorage.getItem('manabu_arcade_snake_high');
      if (saved) setHighScore(Number(saved));
    } catch {}
  }, []);

  const spawnFood = (currentSnake: Coordinate[]): SnakeFoodItem & Coordinate => {
    const randomFood = HIRAGANA_FOODS[Math.floor(Math.random() * HIRAGANA_FOODS.length)];
    let newPos: Coordinate;
    while (true) {
      newPos = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      if (!currentSnake.some(seg => seg.x === newPos.x && seg.y === newPos.y)) {
        break;
      }
    }
    speakJapanese(randomFood.kana);
    return { ...newPos, ...randomFood };
  };

  const startGame = () => {
    const initialSnake = [
      { x: 8, y: 8 },
      { x: 7, y: 8 },
      { x: 6, y: 8 },
    ];
    setSnake(initialSnake);
    setDirection('RIGHT');
    directionRef.current = 'RIGHT';
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    setFood(spawnFood(initialSnake));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      let newDir: Direction | null = null;
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') newDir = 'UP';
      if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') newDir = 'DOWN';
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') newDir = 'LEFT';
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') newDir = 'RIGHT';

      if (newDir && OPPOSITE_DIRECTIONS[directionRef.current] !== newDir) {
        setDirection(newDir);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const interval = setInterval(() => {
      setSnake(prevSnake => {
        const head = { ...prevSnake[0] };
        const dir = directionRef.current;

        if (dir === 'UP') head.y -= 1;
        if (dir === 'DOWN') head.y += 1;
        if (dir === 'LEFT') head.x -= 1;
        if (dir === 'RIGHT') head.x += 1;

        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
          endGame();
          return prevSnake;
        }

        if (prevSnake.some(seg => seg.x === head.x && seg.y === head.y)) {
          endGame();
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        if (head.x === food.x && head.y === food.y) {
          const newScore = score + 10;
          setScore(newScore);
          if (newScore > highScore) {
            setHighScore(newScore);
            try {
              localStorage.setItem('manabu_arcade_snake_high', String(newScore));
            } catch {}
          }
          setFood(spawnFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, DIFFICULTY_SPEED_MS.normal);

    return () => clearInterval(interval);
  }, [isPlaying, gameOver, food, score, highScore]);

  const endGame = () => {
    setIsPlaying(false);
    setGameOver(true);
  };

  const changeDirection = (newDir: Direction) => {
    if (OPPOSITE_DIRECTIONS[directionRef.current] !== newDir) {
      setDirection(newDir);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between bg-[#0a3240] border border-[#17424f] p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
            🐍
          </div>
          <div>
            <h1 className="text-sm font-bold text-white">蛇行道 • Kana Snake</h1>
            <p className="text-[11px] text-[#8fa2aa]">Eat the target kana character to grow your snake.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs">
            <Trophy size={14} className="text-amber-400" />
            <span className="text-[#8fa2aa]">Best:</span>
            <span className="font-bold text-white">{highScore} pts</span>
          </div>

          <button
            onClick={onExit}
            className="px-3 py-1.5 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-[#c1d0d6] transition"
          >
            Exit Game
          </button>
        </div>
      </div>

      {/* Target & Score Bar */}
      <div className="bg-[#0a3240] border border-[#17424f] p-4 rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#8fa2aa] font-bold uppercase">Target:</span>
          <span className="text-2xl font-black text-amber-400 font-serif">{food.kana}</span>
          <span className="text-xs text-[#8fa2aa] font-mono">({food.romaji})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-[#8fa2aa] font-bold uppercase">Score:</span>
          <span className="text-2xl font-black text-white font-mono">{score}</span>
        </div>
      </div>

      {/* Grid Canvas */}
      <div className="bg-[#051b22] border-2 border-[#17424f] rounded-xl p-3 md:p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
        {!isPlaying && !gameOver && (
          <div className="text-center space-y-4 py-16">
            <div className="text-5xl">🐍</div>
            <h2 className="text-xl font-black text-white">Kana Snake Dojo</h2>
            <p className="text-xs text-[#8fa2aa] max-w-sm mx-auto">
              Use Arrow Keys, WASD, or the on-screen D-pad to steer. Slither to the target kana without hitting the borders!
            </p>
            <button
              onClick={startGame}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-black text-white transition shadow-lg shadow-emerald-950/40"
            >
              Start Game
            </button>
          </div>
        )}

        {gameOver && (
          <div className="text-center space-y-4 py-16">
            <div className="text-5xl">💥</div>
            <h2 className="text-xl font-black text-white">Game Over!</h2>
            <p className="text-xs text-[#8fa2aa]">Final Score: {score} pts</p>
            <button
              onClick={startGame}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-black text-white transition flex items-center gap-2 mx-auto shadow-lg shadow-emerald-950/40"
            >
              <RotateCcw size={15} /> Play Again
            </button>
          </div>
        )}

        {isPlaying && (
          <div
            className="grid gap-[2px] bg-[#0a3240] border border-[#17424f] p-2 rounded-2xl w-full max-w-[400px] aspect-square"
            style={{
              gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
            }}
          >
            {[...Array(GRID_SIZE * GRID_SIZE)].map((_, idx) => {
              const x = idx % GRID_SIZE;
              const y = Math.floor(idx / GRID_SIZE);

              const isHead = snake[0].x === x && snake[0].y === y;
              const isBody = snake.slice(1).some(seg => seg.x === x && seg.y === y);
              const isFood = food.x === x && food.y === y;

              let cellStyle = 'bg-[#051b22]';
              if (isHead) cellStyle = 'bg-emerald-500 rounded-sm shadow-sm shadow-emerald-500/50';
              else if (isBody) cellStyle = 'bg-emerald-700/80 rounded-sm';
              else if (isFood) cellStyle = 'bg-amber-500/20 border border-amber-500/60 animate-pulse';

              return (
                <div
                  key={idx}
                  className={`aspect-square flex items-center justify-center text-[10px] font-bold ${cellStyle}`}
                >
                  {isFood && <span className="text-amber-400 font-serif">{food.kana}</span>}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-2 pt-2">
        <button
          onClick={() => changeDirection('UP')}
          className="w-12 h-12 rounded-2xl bg-[#0a3240] hover:bg-[#0f3947] active:bg-[#17424f] border border-[#17424f] flex items-center justify-center text-white"
        >
          <ArrowUp size={18} />
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => changeDirection('LEFT')}
            className="w-12 h-12 rounded-2xl bg-[#0a3240] hover:bg-[#0f3947] active:bg-[#17424f] border border-[#17424f] flex items-center justify-center text-white"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => changeDirection('DOWN')}
            className="w-12 h-12 rounded-2xl bg-[#0a3240] hover:bg-[#0f3947] active:bg-[#17424f] border border-[#17424f] flex items-center justify-center text-white"
          >
            <ArrowDown size={18} />
          </button>
          <button
            onClick={() => changeDirection('RIGHT')}
            className="w-12 h-12 rounded-2xl bg-[#0a3240] hover:bg-[#0f3947] active:bg-[#17424f] border border-[#17424f] flex items-center justify-center text-white"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
