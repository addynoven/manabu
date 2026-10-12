'use client';

import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { KanjiEntry } from './KanjiGridList';
import { speakJapanese } from '../../../models/kana';
import { getCharacterStrokeData, fetchKanjiVgStrokeData, CharacterStrokeData } from '../../../models/strokeData';

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

interface KanjiDetailInspectorProps {
  activeKanji: KanjiEntry;
  activeStroke?: number;
  svgPaths?: string[];
  onAnimateStroke?: () => void;
}

export function KanjiDetailInspector({ activeKanji }: KanjiDetailInspectorProps) {
  const [strokeData, setStrokeData] = useState<CharacterStrokeData | undefined>(() =>
    getCharacterStrokeData(activeKanji.kanjiChar)
  );

  useEffect(() => {
    let isMounted = true;
    const local = getCharacterStrokeData(activeKanji.kanjiChar);
    if (local) {
      setStrokeData(local);
    } else {
      fetchKanjiVgStrokeData(activeKanji.kanjiChar).then((fetched) => {
        if (isMounted && fetched) {
          setStrokeData(fetched);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [activeKanji.kanjiChar]);

  const totalStrokes = strokeData?.strokeCount || 1;

  const [isAnimating, setIsAnimating] = useState(false);
  const [animStep, setAnimStep] = useState(totalStrokes);

  // Reset to full character view when activeKanji or strokeData changes
  useEffect(() => {
    setIsAnimating(false);
    setAnimStep(totalStrokes);
  }, [activeKanji.kanjiChar, totalStrokes]);

  // Automated stroke-by-stroke drawing animation loop
  useEffect(() => {
    if (!isAnimating || !strokeData) return;

    let timer: NodeJS.Timeout;
    if (animStep === 0) {
      timer = setTimeout(() => setAnimStep(1), 350);
    } else if (animStep >= 1 && animStep <= totalStrokes) {
      timer = setTimeout(() => {
        setAnimStep((s) => s + 1);
      }, 950);
    } else if (animStep > totalStrokes) {
      timer = setTimeout(() => {
        setIsAnimating(false);
      }, 1600);
    }

    return () => clearTimeout(timer);
  }, [isAnimating, animStep, totalStrokes, strokeData]);

  const handleStartAnimation = () => {
    setAnimStep(0);
    setIsAnimating(true);
    speakJapanese(activeKanji.kanjiChar);
  };

  const currentDisplayStep = Math.min(animStep, totalStrokes);

  return (
    <aside className="w-full lg:w-[480px] flex-shrink-0 bg-surface-base border border-border-hairline rounded-xl flex flex-col lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar shadow-2xl">
      <div className="p-4 sm:p-5 flex flex-col gap-5">
        {/* Overview Header */}
        <div className="relative overflow-hidden bg-tatami-canvas border border-border-hairline rounded-xl p-5 flex flex-col gap-3">
          <div className="absolute -right-4 -bottom-6 select-none pointer-events-none opacity-[0.06] font-bold text-[180px] text-text-primary leading-none font-serif">
            {activeKanji.kanjiChar}
          </div>
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-baseline gap-3">
              <span className="text-6xl font-serif font-bold text-text-primary leading-none tracking-tight">
                {activeKanji.kanjiChar}
              </span>
              <button
                onClick={() => speakJapanese(activeKanji.kanjiChar)}
                className="w-10 h-10 rounded-full bg-surface-muted border border-border-hairline flex items-center justify-center text-primary-hover hover:bg-surface-elevated hover:text-primary transition-colors shadow-sm"
                title="Play native pronunciation"
              >
                <span className="material-symbols-outlined text-[20px]">volume_up</span>
              </button>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="px-2 py-0.5 rounded bg-primary-container/20 border border-primary-container text-primary text-[10px] font-bold uppercase">
                JLPT {activeKanji.level || 'N5'} Core
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-muted border border-border-hairline text-text-secondary text-[10px] font-mono">
                Jōyō Grade
              </span>
            </div>
          </div>
          <div className="relative z-10">
            <span className="text-base font-bold text-text-primary">{activeKanji.meanings.join(', ')}</span>
            <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
              Foundational semantic building block for JLPT {activeKanji.level || 'N5'} vocabulary.
            </p>
          </div>
        </div>

        {/* Vector Stroke Order Animation Box */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">STROKE MATRIX</span>
              <span className="text-[11px] font-bold text-accent-gold font-mono">
                • {isAnimating ? `Animating Stroke ${Math.max(1, currentDisplayStep)} of ${totalStrokes}` : `${totalStrokes} Strokes Total`}
              </span>
            </div>
          </div>

          <div className="relative w-full h-[220px] bg-background-deep border border-border-hairline rounded-xl overflow-hidden flex items-center justify-center">
            {/* Tatami Grid Lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-[1px] border-b border-dashed border-tatami-grid" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-full w-[1px] border-r border-dashed border-tatami-grid" />
            </div>
            <div className="absolute inset-2 border border-tatami-grid/40 rounded pointer-events-none" />

            {strokeData ? (
              <svg className="w-[180px] h-[180px] relative z-10" viewBox="0 0 109 109">
                {/* Background Faint Path Guide */}
                {strokeData.strokes.map((stroke) => (
                  <path
                    key={`bg-${stroke.strokeNumber}`}
                    d={stroke.path}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4.5"
                  />
                ))}

                {/* Progressive Point A-to-B Vector Strokes */}
                {strokeData.strokes.map((stroke, idx) => {
                  const strokeNum = idx + 1;
                  const isDrawn = currentDisplayStep >= strokeNum;
                  const isCurrent = isAnimating && currentDisplayStep === strokeNum;

                  const strokeColor = isCurrent
                    ? '#fbbf24' // Active drawing stroke in gold
                    : isDrawn
                    ? '#c74a4a' // Completed stroke in red
                    : 'transparent';

                  return (
                    <g key={stroke.strokeNumber}>
                      <AnimatedSVGPath
                        d={stroke.path}
                        strokeColor={strokeColor}
                        strokeWidth={isCurrent ? '6.5' : '5'}
                        isDrawn={isDrawn}
                        durationMs={850}
                      />

                      {/* Numbered Badge */}
                      <text
                        x={stroke.numberPos.x}
                        y={stroke.numberPos.y}
                        fill={isCurrent ? '#fbbf24' : 'rgba(255, 255, 255, 0.4)'}
                        fontSize="8"
                        fontWeight="bold"
                      >
                        {stroke.strokeNumber}
                      </text>

                      {/* Pulsing Beacon at Point A */}
                      {isCurrent && (
                        <g>
                          <circle
                            cx={stroke.startPoint.x}
                            cy={stroke.startPoint.y}
                            r="5"
                            fill="#fbbf24"
                            className="animate-pulse"
                          />
                          <circle
                            cx={stroke.startPoint.x}
                            cy={stroke.startPoint.y}
                            r="2.5"
                            fill="#ffffff"
                          />
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <span className="text-[140px] font-serif text-text-muted/15 font-bold leading-none">
                  {activeKanji.kanjiChar}
                </span>
              </div>
            )}

            <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-surface-muted/90 border border-border-hairline backdrop-blur flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${isAnimating ? 'bg-accent-gold animate-ping' : 'bg-primary-container'}`} />
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-primary">
                {isAnimating ? `Drawing Stroke ${Math.max(1, currentDisplayStep)} of ${totalStrokes}` : `${totalStrokes} Strokes Ready`}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-1">
            <button
              onClick={handleStartAnimation}
              className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary-container hover:bg-primary-hover text-white text-xs font-semibold transition-colors shadow"
            >
              <span className="material-symbols-outlined text-[16px]">play_arrow</span>
              <span>{isAnimating ? 'Replay Order' : 'Animate Stroke Order'}</span>
            </button>
            <button
              onClick={() => {
                setIsAnimating(false);
                setAnimStep(totalStrokes);
              }}
              className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-surface-muted border border-border-hairline text-xs font-semibold text-text-primary hover:bg-surface-elevated transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">refresh</span>
              <span>Reset View</span>
            </button>
          </div>
        </div>

        {/* Readings Matrix */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">READINGS MATRIX</span>
          <div className="bg-surface-muted border border-border-hairline rounded-xl p-3.5 flex flex-col gap-2.5">
            <div className="flex items-baseline justify-between border-b border-border-subtle pb-2">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-background-deep border border-border-hairline text-accent-gold text-[10px] font-bold font-mono">
                  ON
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-bold text-text-primary font-mono">
                    {activeKanji.onyomi[0] || '—'}
                  </span>
                  {activeKanji.onyomi[1] && (
                    <span className="text-sm font-bold text-text-secondary font-mono">
                      {activeKanji.onyomi[1]}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-baseline justify-between pt-0.5">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-background-deep border border-border-hairline text-info text-[10px] font-bold font-mono">
                  KUN
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-bold text-text-primary font-mono">
                    {activeKanji.kunyomi[0] || '—'}
                  </span>
                  {activeKanji.kunyomi[1] && (
                    <span className="text-sm font-bold text-text-secondary font-mono">
                      {activeKanji.kunyomi[1]}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
