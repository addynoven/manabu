'use client';

import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { KanaItem, speakJapanese, getKanaStrokeCount } from '../../../models/kana';
import { getKanaMnemonic } from '../../../data/kanaMnemonics';
import { getCharacterStrokeData } from '../../../models/strokeData';

interface AnimatedSVGPathProps {
  d: string;
  strokeColor: string;
  strokeWidth: string;
  isDrawn: boolean;
  durationMs?: number;
}

function AnimatedSVGPath({
  d,
  strokeColor,
  strokeWidth,
  isDrawn,
  durationMs = 850,
}: AnimatedSVGPathProps) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathLength, setPathLength] = useState<number>(0);

  useLayoutEffect(() => {
    if (pathRef.current) {
      try {
        const len = pathRef.current.getTotalLength();
        if (len > 0) {
          setPathLength(Math.ceil(len));
        }
      } catch (err) {
        // Fallback default length
      }
    }
  }, [d]);

  const dashArray = pathLength > 0 ? pathLength : undefined;
  const dashOffset = isDrawn ? 0 : pathLength;

  return (
    <path
      ref={pathRef}
      d={d}
      fill="none"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        strokeDasharray: dashArray,
        strokeDashoffset: dashOffset,
        transition: `stroke-dashoffset ${durationMs}ms cubic-bezier(0.4, 0, 0.2, 1), stroke 0.3s ease`,
      }}
    />
  );
}

interface KanaDetailPanelProps {
  selectedKana: KanaItem;
}

export function KanaDetailPanel({ selectedKana }: KanaDetailPanelProps) {
  const [padMode, setPadMode] = useState<'anim' | 'teacher'>('anim');
  const [activeStrokeIndex, setActiveStrokeIndex] = useState(0);

  // 0 = clean canvas, 1..N = drawing stroke, N+1 = full completion hold
  const [animStep, setAnimStep] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  // Fetch vector stroke data for active Kana character
  const strokeData = getCharacterStrokeData(selectedKana.kana);
  const strokeCount = strokeData?.strokeCount || getKanaStrokeCount(selectedKana.kana);
  const mnemonicText = getKanaMnemonic(selectedKana.kana, selectedKana.romaji);
  const unicodeHex = `U+${selectedKana.kana.charCodeAt(0).toString(16).toUpperCase()}`;

  // Smooth step-by-step looping animation timer in 'anim' mode
  useEffect(() => {
    if (padMode !== 'anim' || !strokeData) return;

    const totalStrokes = strokeData.strokes.length;
    let timer: NodeJS.Timeout;

    if (animStep === 0) {
      // Pause on clean canvas before starting stroke 1
      timer = setTimeout(() => setAnimStep(1), 350);
    } else if (animStep >= 1 && animStep <= totalStrokes) {
      // Allow 900ms per stroke for Point A -> Point B drawing animation
      timer = setTimeout(() => {
        setAnimStep((s) => s + 1);
      }, 950);
    } else if (animStep > totalStrokes) {
      // Hold completed character on screen for 1.6s before resetting
      timer = setTimeout(() => {
        setAnimStep(0);
      }, 1600);
    }

    return () => clearTimeout(timer);
  }, [padMode, animStep, strokeData, selectedKana.kana]);

  // Reset state when selectedKana or padMode changes
  useEffect(() => {
    clearCanvas();
    setActiveStrokeIndex(0);
    setAnimStep(0);
  }, [selectedKana.kana, padMode]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  const handleResetTeacherMode = () => {
    setActiveStrokeIndex(0);
    clearCanvas();
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = '#c74a4a';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    if (strokeData && activeStrokeIndex < strokeData.strokes.length) {
      const nextIndex = activeStrokeIndex + 1;
      setActiveStrokeIndex(nextIndex);
      if (nextIndex === strokeData.strokes.length) {
        // Final stroke completed! Play pronunciation audio
        speakJapanese(selectedKana.kana);
      }
    }
  };

  const isAllStrokesCompleted = strokeData && activeStrokeIndex >= strokeData.strokes.length;
  const currentStroke = strokeData?.strokes[activeStrokeIndex];

  return (
    <aside className="lg:col-span-4 flex flex-col gap-5 lg:sticky lg:top-24">
      {/* Overview Card */}
      <div className="bg-surface-base rounded-xl border border-border-hairline p-5 shadow-xl">
        <div className="flex items-center justify-between border-b border-border-hairline pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase text-text-muted">{selectedKana.script}</span>
          </div>
          <span className="text-[10px] font-mono text-accent-gold font-bold px-2 py-0.5 bg-accent-gold-subtle rounded border border-accent-gold/40">
            {strokeCount} {strokeCount === 1 ? 'Stroke' : 'Strokes'}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="text-6xl font-serif font-bold text-text-primary leading-none">
              {selectedKana.kana}
            </span>
            <div>
              <div className="text-xl font-bold text-text-primary leading-tight">[ {selectedKana.romaji} ]</div>
              <div className="text-xs text-text-secondary font-mono">{unicodeHex}</div>
            </div>
          </div>
          <button
            onClick={() => speakJapanese(selectedKana.kana)}
            className="w-12 h-12 rounded-full bg-primary-container hover:bg-primary-hover text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
            title="Listen Pronunciation"
          >
            <span className="material-symbols-outlined text-[24px]">volume_up</span>
          </button>
        </div>

        {/* Visual Mnemonic */}
        <div className="mt-4 p-3.5 rounded-lg bg-surface-muted border border-border-hairline">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-accent-gold mb-1">
            <span className="material-symbols-outlined text-[16px]">lightbulb</span>
            <span>Visual Mnemonic</span>
          </div>
          <p className="text-xs text-text-primary leading-relaxed">{mnemonicText}</p>
        </div>
      </div>

      {/* Interactive Stroke Pad Card */}
      <div className="bg-surface-base rounded-xl border border-border-hairline p-5 shadow-xl">
        {/* Header & Mode Switcher */}
        <div className="flex flex-col gap-2 pb-3 mb-3 border-b border-border-hairline">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-primary-container">draw</span>
              <h3 className="text-sm font-bold text-text-primary">Stroke Order Teacher</h3>
            </div>
            <span className="text-[10px] font-mono text-text-muted">{unicodeHex} KanjiVG</span>
          </div>

          <div className="bg-background-deep p-1 rounded-lg border border-border-hairline grid grid-cols-2 gap-1 text-xs">
            <button
              onClick={() => setPadMode('anim')}
              className={`py-1 rounded font-bold transition flex items-center justify-center gap-1 ${
                padMode === 'anim'
                  ? 'bg-primary-container text-white shadow'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">play_circle</span>
              <span>Watch &amp; Learn</span>
            </button>
            <button
              onClick={() => setPadMode('teacher')}
              className={`py-1 rounded font-bold transition flex items-center justify-center gap-1 ${
                padMode === 'teacher'
                  ? 'bg-primary-container text-white shadow'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">gesture</span>
              <span>Teacher Mode</span>
            </button>
          </div>
        </div>

        {/* Teacher Mode Hint / Completion Banner */}
        {padMode === 'teacher' && (
          <>
            {isAllStrokesCompleted ? (
              <div className="mb-3 px-3 py-1.5 rounded-lg bg-success/20 border border-success/40 text-[11px] font-bold text-success flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Character Mastered! Excellent!</span>
                </div>
                <button
                  onClick={handleResetTeacherMode}
                  className="text-[10px] underline hover:text-white font-bold ml-2"
                >
                  Repeat
                </button>
              </div>
            ) : currentStroke ? (
              <div className="mb-3 px-3 py-1.5 rounded-lg bg-accent-gold-subtle border border-accent-gold/30 text-[11px] font-medium text-accent-gold flex items-center justify-between">
                <span>
                  Stroke {activeStrokeIndex + 1} / {strokeCount}: {currentStroke.directionHint || 'Sweep smoothly'}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent-gold animate-ping" />
              </div>
            ) : null}
          </>
        )}

        {/* Tatami Canvas & Progressive SVG Vector Guide */}
        <div className="relative w-full max-w-[280px] h-[260px] mx-auto bg-tatami-canvas rounded-xl border-2 border-border-hairline overflow-hidden flex items-center justify-center select-none">
          {/* Tatami Grid Lines */}
          <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-tatami-grid pointer-events-none" />
          <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-tatami-grid pointer-events-none" />

          {/* SVG Vector Layer */}
          {strokeData ? (
            <svg viewBox="0 0 109 109" className="absolute inset-0 w-full h-full p-2 pointer-events-none select-none z-0">
              {/* Background faint guide for unreached strokes */}
              {strokeData.strokes.map((stroke) => (
                <g key={`bg-g-${stroke.strokeNumber}`} transform={stroke.transform}>
                  <path
                    key={`bg-${stroke.strokeNumber}`}
                    d={stroke.path}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              ))}

              {/* Progressive Point A-to-B Animated Strokes */}
              {strokeData.strokes.map((stroke, idx) => {
                const strokeStepNum = idx + 1;
                const isDrawn =
                  padMode === 'teacher'
                    ? idx < activeStrokeIndex
                    : animStep >= strokeStepNum;

                const isCurrent =
                  padMode === 'teacher'
                    ? idx === activeStrokeIndex
                    : animStep === strokeStepNum;

                const strokeColor =
                  padMode === 'anim'
                    ? isCurrent
                      ? '#fbbf24' // Active drawing stroke in gold
                      : isDrawn
                      ? '#c74a4a' // Completed stroke in red
                      : 'transparent'
                    : isCurrent
                    ? '#c74a4a' // Active target stroke in bright red
                    : isDrawn
                    ? '#38bdf8' // Completed stroke in blue
                    : 'transparent';

                return (
                  <g key={stroke.strokeNumber}>
                    <g transform={stroke.transform}>
                      <AnimatedSVGPath
                        d={stroke.path}
                        strokeColor={strokeColor}
                        strokeWidth={isCurrent ? '7' : '5'}
                        isDrawn={isDrawn}
                        durationMs={850}
                      />
                    </g>

                    {/* Numbered Badge */}
                    <text
                      x={stroke.numberPos.x}
                      y={stroke.numberPos.y}
                      fill={isCurrent ? '#fbbf24' : '#8fa2aa'}
                      fontSize="9"
                      fontWeight="bold"
                    >
                      {stroke.strokeNumber}
                    </text>

                    {/* Pulsing Starting Point Beacon (Point A) */}
                    {((padMode === 'teacher' && isCurrent) || (padMode === 'anim' && isCurrent)) && (
                      <g>
                        <circle
                          cx={stroke.startPoint.x}
                          cy={stroke.startPoint.y}
                          r="6"
                          fill="#fbbf24"
                          className="animate-pulse"
                        />
                        <circle
                          cx={stroke.startPoint.x}
                          cy={stroke.startPoint.y}
                          r="3"
                          fill="#ffffff"
                        />
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none px-2">
              <span
                className={`${
                  selectedKana.kana.length > 1 ? 'text-[85px] tracking-tighter' : 'text-[160px]'
                } font-serif text-text-muted/15 font-bold leading-none whitespace-nowrap`}
              >
                {selectedKana.kana}
              </span>
            </div>
          )}

          {/* User Touch / Mouse Canvas (Active in Teacher Mode) */}
          {padMode === 'teacher' && (
            <canvas
              ref={canvasRef}
              width={280}
              height={260}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="absolute inset-0 w-full h-full cursor-crosshair touch-none z-10"
            />
          )}
        </div>

        {/* Footer Action Buttons */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
          <button
            onClick={() => speakJapanese(selectedKana.kana)}
            className="py-2 rounded-lg bg-surface-muted border border-border-hairline font-semibold text-white hover:bg-surface-elevated flex items-center justify-center gap-1 transition"
            title="Play Audio"
          >
            <span className="material-symbols-outlined text-[16px] text-accent-gold">play_arrow</span>
            <span>Play Sound</span>
          </button>

          <button
            onClick={handleResetTeacherMode}
            className={`py-2 rounded-lg border font-semibold transition flex items-center justify-center gap-1 ${
              hasDrawn || isAllStrokesCompleted
                ? 'bg-primary-container text-white border-primary-container shadow'
                : 'bg-surface-muted border-border-hairline text-text-secondary hover:text-white'
            }`}
            title="Clear canvas and reset strokes"
          >
            <span className="material-symbols-outlined text-[16px]">refresh</span>
            <span>Reset Strokes</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
