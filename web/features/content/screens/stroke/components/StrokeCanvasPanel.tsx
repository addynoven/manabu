'use client';

import React from 'react';
import { CharacterStrokeData } from '../../../models/strokeData';
import { speakJapanese } from '../../../models/kana';
import { Volume2, Sparkles, PenTool, Eraser, Play } from 'lucide-react';

interface StrokeCanvasPanelProps {
  currentChar: CharacterStrokeData;
  mode: 'guide' | 'test' | 'demo';
  activeStrokeIndex: number;
  demoStep: number;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  onPointerDown: (e: React.PointerEvent<HTMLCanvasElement>) => void;
  onPointerMove: (e: React.PointerEvent<HTMLCanvasElement>) => void;
  onPointerUp: () => void;
  onClearCanvas: () => void;
  onStartDemo: () => void;
}

export function StrokeCanvasPanel({
  currentChar,
  mode,
  activeStrokeIndex,
  demoStep,
  canvasRef,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onClearCanvas,
  onStartDemo,
}: StrokeCanvasPanelProps) {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-5 sticky top-20">
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

      <div className="bg-[#0a3240] rounded-xl border border-[#17424f] p-5 shadow-sm flex flex-col items-center">
        <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#17424f]">
          <div className="flex items-center gap-1.5">
            <PenTool size={16} className="text-[#c74a4a]" />
            <h3 className="text-sm font-bold text-[#f0f0f0]">Tatami Quadrant Canvas</h3>
          </div>
          <span className="text-[10px] text-[#8fa2aa] font-mono">KanjiVG v2.1</span>
        </div>

        <div className="relative w-[280px] h-[280px] bg-[#071f27] rounded-lg border-2 border-[#17424f] overflow-hidden select-none flex items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-[#133e4c] pointer-events-none"></div>
          <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-[#133e4c] pointer-events-none"></div>

          <span className="absolute top-2 left-2 text-[10px] font-mono text-[#5c727d]/40 pointer-events-none">I</span>
          <span className="absolute top-2 right-2 text-[10px] font-mono text-[#5c727d]/40 pointer-events-none">II</span>
          <span className="absolute bottom-2 left-2 text-[10px] font-mono text-[#5c727d]/40 pointer-events-none">III</span>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono text-[#5c727d]/40 pointer-events-none">IV</span>

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

          <canvas
            ref={canvasRef}
            width={280}
            height={280}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
          />

          <div className="absolute bottom-2 inset-x-0 flex justify-center items-center gap-1.5 pointer-events-none">
            <span className="text-[10px] font-mono text-[#8fa2aa]">
              Step {activeStrokeIndex + 1} of {currentChar.strokeCount}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 w-full mt-4">
          <button
            onClick={onClearCanvas}
            className="px-3 py-2 rounded-lg bg-[#0f3947] hover:bg-[#134454] border border-[#17424f] text-xs font-medium text-[#f0f0f0] flex items-center justify-center gap-1.5 transition"
          >
            <Eraser size={14} /> <span>Erase</span>
          </button>
          <button
            onClick={onStartDemo}
            className="px-3 py-2 rounded-lg bg-[#0f3947] hover:bg-[#134454] border border-[#17424f] text-xs font-medium text-[#fbbf24] flex items-center justify-center gap-1.5 transition"
          >
            <Play size={14} /> <span>Animate (1x)</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
