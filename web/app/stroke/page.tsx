'use client';
import React, { useState, useEffect, useRef } from 'react';
import { AuthGate } from '@/components/AuthGate';
import { StitchHeader } from '@/components/StitchHeader';
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
    <AuthGate>
      <div className="bg-[#082630] text-[#f0f0f0] min-h-screen flex flex-col font-sans antialiased selection:bg-[#c74a4a] selection:text-[#f0f0f0]">
        <StitchHeader />

        {/* Subheader & Script Selector Hub */}
        <section className="border-b border-[#17424f] bg-[#011f29]/70 backdrop-blur-sm px-6 py-4">
          <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl md:text-2xl font-bold text-[#f0f0f0] tracking-tight">
                  五十音 Kana Matrix &amp; Stroke Sandbox
                </h1>
                <span className="bg-[#0f3947] text-[#38bdf8] border border-[#17424f] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  v3.4 Nocturnal
                </span>
              </div>
              <p className="text-xs text-[#8fa2aa] mt-0.5">
                Deliberate phonetic acquisition and stroke muscle memory with KanjiVG vectors
              </p>
            </div>

            {/* Controls Suite */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-[#051b22] p-1 rounded-lg border border-[#17424f] flex items-center gap-1">
                {(['hiragana', 'katakana', 'N5'] as StrokeCategory[]).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase transition flex items-center gap-1.5 ${
                      category === cat
                        ? 'bg-[#c74a4a] text-[#f0f0f0] shadow-sm'
                        : 'text-[#8fa2aa] hover:text-[#f0f0f0] hover:bg-[#0a3240]'
                    }`}
                  >
                    <span>{cat}</span>
                    {category === cat && <span className="w-1.5 h-1.5 rounded-full bg-[#f0f0f0]"></span>}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a3240] rounded-lg border border-[#17424f]">
                <div className="w-5 h-5 rounded-full bg-[#063b28] border border-[#34d399]/40 flex items-center justify-center text-[#34d399]">
                  <CheckCircle2 size={12} />
                </div>
                <div className="text-left text-xs font-bold text-[#f0f0f0]">
                  {characterList.length} Glyphs Available
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Workstation Canvas */}
        <main className="flex-1 max-w-[1440px] w-full mx-auto px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Pane: Character Quick Selector & Index */}
            <section className="lg:col-span-8 flex flex-col gap-4">
              <div className="bg-[#0a3240] rounded-xl border border-[#17424f] p-5 shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#17424f]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#f0f0f0] uppercase tracking-wider">
                      {category.toUpperCase()} ROSTER ({characterList.length})
                    </span>
                    <span className="text-[11px] text-[#8fa2aa]">Select any glyph to practice stroke order</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevChar}
                      disabled={currentIndex === 0}
                      className="p-1.5 rounded-lg bg-[#0f3947] hover:bg-[#134454] disabled:opacity-30 text-[#f0f0f0] border border-[#17424f]"
                      title="Previous Character"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="text-xs font-mono text-[#8fa2aa]">
                      {currentIndex + 1} / {characterList.length}
                    </span>
                    <button
                      onClick={handleNextChar}
                      disabled={currentIndex === characterList.length - 1}
                      className="p-1.5 rounded-lg bg-[#0f3947] hover:bg-[#134454] disabled:opacity-30 text-[#f0f0f0] border border-[#17424f]"
                      title="Next Character"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Character Matrix Grid */}
                <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 max-h-[460px] overflow-y-auto pr-1">
                  {characterList.map((item, idx) => {
                    const isSelected = idx === currentIndex;
                    return (
                      <button
                        key={item.char + idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`relative p-2 rounded-lg border text-center transition flex flex-col items-center justify-center ${
                          isSelected
                            ? 'bg-[#c74a4a] border-[#c74a4a] text-white shadow-md'
                            : 'bg-[#00161e] border-[#17424f] text-[#f0f0f0] hover:bg-[#134454] hover:border-[#1a5163]'
                        }`}
                      >
                        <span className="text-xl font-bold font-serif leading-none my-0.5">{item.char}</span>
                        <span className={`text-[10px] font-mono leading-none ${isSelected ? 'text-white/80' : 'text-[#8fa2aa]'}`}>
                          {item.romaji}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mode Toggle Controls */}
              <div className="bg-[#0a3240] rounded-xl border border-[#17424f] p-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setMode('guide');
                      clearCanvas();
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                      mode === 'guide'
                        ? 'bg-[#c74a4a] text-white shadow-sm'
                        : 'bg-[#00161e] text-[#8fa2aa] hover:text-[#f0f0f0] border border-[#17424f]'
                    }`}
                  >
                    <Eye size={13} /> <span>Guide Mode</span>
                  </button>
                  <button
                    onClick={() => {
                      setMode('test');
                      clearCanvas();
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                      mode === 'test'
                        ? 'bg-[#c74a4a] text-white shadow-sm'
                        : 'bg-[#00161e] text-[#8fa2aa] hover:text-[#f0f0f0] border border-[#17424f]'
                    }`}
                  >
                    <PenTool size={13} /> <span>Test Mode (Blind)</span>
                  </button>
                  <button
                    onClick={handleStartDemo}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                      mode === 'demo'
                        ? 'bg-[#fbbf24] text-[#00161e] shadow-sm'
                        : 'bg-[#00161e] text-[#8fa2aa] hover:text-[#f0f0f0] border border-[#17424f]'
                    }`}
                  >
                    <Play size={13} /> <span>Watch Demo</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      clearCanvas();
                      setActiveStrokeIndex(0);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#0f3947] hover:bg-[#134454] border border-[#17424f] text-xs font-medium text-[#f0f0f0] flex items-center gap-1.5 transition"
                  >
                    <Eraser size={13} /> <span>Clear Canvas</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Right Pane: Stitch 09 Character Spotlight & Tatami Quadrant Canvas */}
            {currentChar && (
              <aside className="lg:col-span-4 flex flex-col gap-5 sticky top-20">
                {/* CARD 1: Selected Character Spotlight */}
                <div className="bg-[#0a3240] rounded-xl border border-[#17424f] p-5 shadow-sm">
                  <div className="flex items-center justify-between border-b border-[#17424f] pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-[#0f3947] text-[#a8ccde] text-[10px] font-bold uppercase tracking-wider border border-[#17424f]">
                        JLPT N5
                      </span>
                      <span className="text-[10px] text-[#8fa2aa] font-mono uppercase">
                        {currentChar.romaji}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#fbbf24] px-2 py-0.5 bg-[#2a2415] rounded border border-[#fbbf24]/40">
                      {currentChar.strokeCount} Strokes
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className="text-5xl font-black font-serif text-[#f0f0f0] leading-none">
                        {currentChar.char}
                      </span>
                      <div>
                        <div className="text-lg font-bold text-[#f0f0f0] leading-tight">
                          [ {currentChar.romaji} ]
                        </div>
                        {currentChar.meaning && (
                          <div className="text-xs text-[#8fa2aa]">
                            &ldquo;{currentChar.meaning}&rdquo;
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => speakJapanese(currentChar.char)}
                      className="w-11 h-11 rounded-full bg-[#c74a4a] hover:bg-[#d95a5a] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition"
                      title="Pronunciation Audio"
                    >
                      <Volume2 size={20} />
                    </button>
                  </div>

                  {/* Readings metadata */}
                  {(currentChar.onyomi || currentChar.kunyomi) && (
                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-[#8fa2aa] bg-[#00161e] p-2.5 rounded-lg border border-[#17424f]">
                      {currentChar.onyomi && (
                        <div>
                          <span className="text-[#5c727d] block text-[10px] uppercase font-bold">On&apos;yomi</span>
                          <span className="text-[#f0f0f0]">{currentChar.onyomi}</span>
                        </div>
                      )}
                      {currentChar.kunyomi && (
                        <div>
                          <span className="text-[#5c727d] block text-[10px] uppercase font-bold">Kun&apos;yomi</span>
                          <span className="text-[#f0f0f0]">{currentChar.kunyomi}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Stroke Direction Hint */}
                  <div className="mt-4 p-3 rounded-lg bg-[#0f3947] border border-[#17424f]">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#fbbf24] uppercase tracking-wider mb-1">
                      <Sparkles size={12} />
                      <span>Stroke {activeStrokeIndex + 1} of {currentChar.strokeCount}</span>
                    </div>
                    <p className="text-xs text-[#f0f0f0] leading-relaxed">
                      {currentChar.strokes[activeStrokeIndex]?.directionHint || 'Follow the stroke path smoothly.'}
                    </p>
                    {currentChar.strokes[activeStrokeIndex]?.tip && (
                      <p className="text-[11px] text-[#8fa2aa] italic mt-1">
                        {currentChar.strokes[activeStrokeIndex]?.tip}
                      </p>
                    )}
                  </div>
                </div>

                {/* CARD 2: Traditional Tatami Quadrant Canvas (Square 280x280px) */}
                <div className="bg-[#0a3240] rounded-xl border border-[#17424f] p-5 shadow-sm flex flex-col items-center">
                  <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#17424f]">
                    <div className="flex items-center gap-1.5">
                      <PenTool size={16} className="text-[#c74a4a]" />
                      <h3 className="text-sm font-bold text-[#f0f0f0]">Tatami Quadrant Canvas</h3>
                    </div>
                    <span className="text-[10px] text-[#8fa2aa] font-mono">KanjiVG v2.1</span>
                  </div>

                  <div className="relative w-[280px] h-[280px] bg-[#071f27] rounded-lg border-2 border-[#17424f] overflow-hidden select-none flex items-center justify-center">
                    {/* Crosshair guidelines */}
                    <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-[#133e4c] pointer-events-none"></div>
                    <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-[#133e4c] pointer-events-none"></div>

                    {/* Quadrant Roman Labels */}
                    <span className="absolute top-2 left-2 text-[10px] font-mono text-[#5c727d]/40 pointer-events-none">I</span>
                    <span className="absolute top-2 right-2 text-[10px] font-mono text-[#5c727d]/40 pointer-events-none">II</span>
                    <span className="absolute bottom-2 left-2 text-[10px] font-mono text-[#5c727d]/40 pointer-events-none">III</span>
                    <span className="absolute bottom-2 right-2 text-[10px] font-mono text-[#5c727d]/40 pointer-events-none">IV</span>

                    {/* SVG Vector Paths */}
                    <svg viewBox="0 0 109 109" className="absolute inset-0 w-full h-full pointer-events-none p-3 select-none">
                      {currentChar.strokes.map((stroke, idx) => {
                        const isPast = idx < activeStrokeIndex;
                        const isCurrent = idx === activeStrokeIndex;
                        const isVisible =
                          mode === 'demo'
                            ? idx < demoStep
                            : mode === 'guide'
                            ? true
                            : false;

                        if (!isVisible) return null;

                        return (
                          <g key={stroke.strokeNumber}>
                            <path
                              d={stroke.path}
                              fill="none"
                              stroke={
                                mode === 'demo'
                                  ? '#fbbf24'
                                  : isCurrent
                                  ? '#c74a4a'
                                  : isPast
                                  ? '#38bdf8'
                                  : '#17424f'
                              }
                              strokeWidth="5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              opacity={isCurrent || mode === 'demo' ? 1 : 0.4}
                            />
                            {isCurrent && mode === 'guide' && (
                              <circle
                                cx={stroke.startPoint.x}
                                cy={stroke.startPoint.y}
                                r="4"
                                fill="#c74a4a"
                              />
                            )}
                            {mode === 'guide' && (
                              <text
                                x={stroke.numberPos.x}
                                y={stroke.numberPos.y}
                                fill="#8fa2aa"
                                fontSize="8"
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
                      width={280}
                      height={280}
                      onPointerDown={handlePointerDown}
                      onPointerMove={handlePointerMove}
                      onPointerUp={handlePointerUp}
                      className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
                    />

                    {/* Subtle Current Step Pip */}
                    <div className="absolute bottom-2 inset-x-0 flex justify-center items-center gap-1.5 pointer-events-none">
                      <span className="text-[10px] font-mono text-[#8fa2aa]">
                        Step {activeStrokeIndex + 1} of {currentChar.strokeCount}
                      </span>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 w-full mt-4">
                    <button
                      onClick={() => {
                        clearCanvas();
                        setActiveStrokeIndex(0);
                      }}
                      className="px-3 py-2 rounded-lg bg-[#0f3947] hover:bg-[#134454] border border-[#17424f] text-xs font-medium text-[#f0f0f0] flex items-center justify-center gap-1.5 transition"
                    >
                      <Eraser size={14} /> <span>Erase</span>
                    </button>
                    <button
                      onClick={handleStartDemo}
                      className="px-3 py-2 rounded-lg bg-[#0f3947] hover:bg-[#134454] border border-[#17424f] text-xs font-medium text-[#fbbf24] flex items-center justify-center gap-1.5 transition"
                    >
                      <Play size={14} /> <span>Animate (1x)</span>
                    </button>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </main>
      </div>
    </AuthGate>
  );
}
