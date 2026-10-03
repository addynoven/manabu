'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AppShell } from '@/components/AppShell';
import {
  CharacterStrokeData,
  StrokeCategory,
  getAllStrokeCharacters,
  getCharacterStrokeData,
} from '@/lib/strokeData';
import { speakJapanese } from '@/data/kana';
import {
  PenTool,
  RotateCcw,
  Play,
  Volume2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Eye,
  CheckCircle2,
  Undo2,
  Eraser,
  HelpCircle,
} from 'lucide-react';

export default function StrokeMasterPage() {
  const [category, setCategory] = useState<StrokeCategory>('hiragana');
  const [characterList, setCharacterList] = useState<CharacterStrokeData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState<'guide' | 'test' | 'demo'>('guide');

  // Stroke step tracking
  const [activeStrokeIndex, setActiveStrokeIndex] = useState(0);
  const [drawnStrokes, setDrawnStrokes] = useState<{ path: string }[]>([]);
  const [demoStep, setDemoStep] = useState(0);
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);

  // Canvas drawing state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const currentPathRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const list = getAllStrokeCharacters(category);
    setCharacterList(list);
    setCurrentIndex(0);
    setActiveStrokeIndex(0);
    setDrawnStrokes([]);
  }, [category]);

  const currentChar: CharacterStrokeData | undefined = characterList[currentIndex];

  useEffect(() => {
    setActiveStrokeIndex(0);
    setDrawnStrokes([]);
    clearCanvas();
    if (currentChar) {
      speakJapanese(currentChar.char);
    }
  }, [currentChar]);

  // Demo auto-play loop
  useEffect(() => {
    if (!isDemoPlaying || !currentChar) return;

    if (demoStep < currentChar.strokes.length) {
      const timer = setTimeout(() => {
        setDemoStep(s => s + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setIsDemoPlaying(false);
        setDemoStep(0);
      }, 1500);
      return () => clearTimeout(resetTimer);
    }
  }, [isDemoPlaying, demoStep, currentChar]);

  const handleStartDemo = () => {
    setMode('demo');
    setDemoStep(0);
    setIsDemoPlaying(true);
    clearCanvas();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Canvas Drawing Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (mode === 'demo') return;
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    currentPathRef.current = [{ x, y }];

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    currentPathRef.current.push({ x, y });

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handlePointerUp = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    if (currentChar && activeStrokeIndex < currentChar.strokes.length) {
      // Step advance
      setActiveStrokeIndex(prev => Math.min(currentChar.strokes.length - 1, prev + 1));
    }
  };

  const handleNextChar = () => {
    if (currentIndex < characterList.length - 1) {
      setCurrentIndex(i => i + 1);
    }
  };

  const handlePrevChar = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
    }
  };

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto space-y-6 pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <PenTool size={14} /> KanjiVG Stroke Engine
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white">
              書き順 • Stroke Master
            </h1>
            <p className="text-xs text-neutral-400 mt-1">
              Master authentic Japanese calligraphy stroke order with animated guides and interactive tracing.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-1.5 bg-neutral-900 p-1.5 rounded-2xl border border-neutral-800">
            {(['hiragana', 'katakana', 'N5'] as StrokeCategory[]).map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition ${
                  category === cat
                    ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {currentChar && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Panel: Character Details & Step Info */}
            <div className="space-y-4">
              <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-serif font-black text-white flex items-center gap-2">
                    <span>{currentChar.char}</span>
                    <button
                      onClick={() => speakJapanese(currentChar.char)}
                      className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white"
                      title="Speak character"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-neutral-800 text-neutral-300">
                    {currentChar.strokeCount} STROKES
                  </span>
                </div>

                <div className="space-y-1 text-xs text-neutral-400">
                  <div>
                    <span className="text-neutral-500 font-bold uppercase">Reading:</span> {currentChar.romaji}
                  </div>
                  {currentChar.meaning && (
                    <div>
                      <span className="text-neutral-500 font-bold uppercase">Meaning:</span> {currentChar.meaning}
                    </div>
                  )}
                  {currentChar.onyomi && (
                    <div>
                      <span className="text-neutral-500 font-bold uppercase">On&apos;yomi:</span> {currentChar.onyomi}
                    </div>
                  )}
                  {currentChar.kunyomi && (
                    <div>
                      <span className="text-neutral-500 font-bold uppercase">Kun&apos;yomi:</span> {currentChar.kunyomi}
                    </div>
                  )}
                </div>

                {/* Step Direction Tip */}
                <div className="p-3 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-amber-400">
                    Stroke {activeStrokeIndex + 1} of {currentChar.strokeCount}
                  </div>
                  <div className="text-xs font-bold text-white">
                    {currentChar.strokes[activeStrokeIndex]?.directionHint || 'Follow the stroke path'}
                  </div>
                  {currentChar.strokes[activeStrokeIndex]?.tip && (
                    <div className="text-[11px] text-neutral-400 italic">
                      {currentChar.strokes[activeStrokeIndex]?.tip}
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between bg-neutral-900 border border-neutral-800 p-3 rounded-2xl">
                <button
                  onClick={handlePrevChar}
                  disabled={currentIndex === 0}
                  className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 text-white"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-xs font-mono text-neutral-400">
                  {currentIndex + 1} / {characterList.length}
                </span>
                <button
                  onClick={handleNextChar}
                  disabled={currentIndex === characterList.length - 1}
                  className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 text-white"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Middle Panel: Interactive Tatami Canvas */}
            <div className="md:col-span-2 space-y-4">
              <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col items-center space-y-4">
                {/* Mode Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setMode('guide');
                      clearCanvas();
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      mode === 'guide'
                        ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                        : 'text-neutral-400 hover:text-white bg-neutral-950 border border-neutral-800'
                    }`}
                  >
                    <Eye size={13} /> ✍️ Guide Mode
                  </button>
                  <button
                    onClick={() => {
                      setMode('test');
                      clearCanvas();
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      mode === 'test'
                        ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                        : 'text-neutral-400 hover:text-white bg-neutral-950 border border-neutral-800'
                    }`}
                  >
                    <PenTool size={13} /> 🧠 Test Mode
                  </button>
                  <button
                    onClick={handleStartDemo}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      mode === 'demo'
                        ? 'bg-amber-500 text-black shadow-md shadow-amber-950/40'
                        : 'text-neutral-400 hover:text-white bg-neutral-950 border border-neutral-800'
                    }`}
                  >
                    <Play size={13} /> ▶️ Demo
                  </button>
                </div>

                {/* Canvas Area with SVG Reference Overlay */}
                <div className="relative w-[340px] h-[340px] bg-neutral-950 border-4 border-neutral-800 rounded-3xl shadow-inner overflow-hidden select-none">
                  {/* Grid Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#ffffff" strokeDasharray="4 4" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#ffffff" strokeDasharray="4 4" />
                  </svg>

                  {/* SVG Ghost Reference Paths */}
                  <svg
                    viewBox="0 0 109 109"
                    className="absolute inset-0 w-full h-full pointer-events-none p-4"
                  >
                    {currentChar.strokes.map((stroke, idx) => {
                      const isPast = idx < activeStrokeIndex;
                      const isCurrent = idx === activeStrokeIndex;
                      const isVisible =
                        mode === 'demo'
                          ? idx < demoStep
                          : mode === 'guide'
                          ? true
                          : false; // test mode hides ghost strokes

                      if (!isVisible) return null;

                      return (
                        <g key={stroke.strokeNumber}>
                          <path
                            d={stroke.path}
                            fill="none"
                            stroke={
                              mode === 'demo'
                                ? '#f59e0b'
                                : isCurrent
                                ? '#ef4444'
                                : isPast
                                ? '#38bdf8'
                                : '#374151'
                            }
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity={isCurrent || mode === 'demo' ? 1 : 0.4}
                          />

                          {/* Glowing Number Badge on Current Stroke Start */}
                          {isCurrent && mode === 'guide' && (
                            <circle
                              cx={stroke.startPoint.x}
                              cy={stroke.startPoint.y}
                              r="4"
                              fill="#ef4444"
                              className="animate-ping"
                            />
                          )}

                          {mode === 'guide' && (
                            <text
                              x={stroke.numberPos.x}
                              y={stroke.numberPos.y}
                              fill="#9ca3af"
                              fontSize="9"
                              fontWeight="bold"
                            >
                              {stroke.strokeNumber}
                            </text>
                          )}
                        </g>
                      );
                    })}
                  </svg>

                  {/* Freehand HTML5 Canvas */}
                  <canvas
                    ref={canvasRef}
                    width={340}
                    height={340}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
                  />
                </div>

                {/* Canvas Control Bar */}
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      clearCanvas();
                      setActiveStrokeIndex(0);
                    }}
                    className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-300 transition flex items-center gap-1.5"
                  >
                    <Eraser size={14} /> Clear Canvas
                  </button>
                  <button
                    onClick={handleStartDemo}
                    className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-amber-400 transition flex items-center gap-1.5"
                  >
                    <Play size={14} /> Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
