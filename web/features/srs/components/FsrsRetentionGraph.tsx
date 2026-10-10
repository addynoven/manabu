'use client';

import React from 'react';
import { generateDecayCurvePoints, FSRS_FACTORS } from '../engine/fsrsEngine';
import { Activity, Clock, ShieldCheck, Zap } from 'lucide-react';

interface FsrsRetentionGraphProps {
  stability: number;
  difficulty: number;
  efficiencyAdvantage?: number;
}

export function FsrsRetentionGraph({
  stability = 14.8,
  difficulty = 4.2,
  efficiencyAdvantage = 14.2,
}: FsrsRetentionGraphProps) {
  const points = generateDecayCurvePoints(stability, 30, 24);

  const width = 600;
  const height = 220;
  const padLeft = 45;
  const padRight = 20;
  const padTop = 25;
  const padBottom = 35;

  const graphWidth = width - padLeft - padRight;
  const graphHeight = height - padTop - padBottom;

  const getX = (day: number) => padLeft + (day / 30) * graphWidth;
  const getY = (r: number) => padTop + (1.0 - r) * graphHeight;

  const pathD = points.reduce((acc, pt, idx) => {
    const x = getX(pt.day);
    const y = getY(pt.retrievability);
    return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
  }, '');

  const fillD = `${pathD} L ${getX(30)} ${getY(0)} L ${getX(0)} ${getY(0)} Z`;

  const y90 = getY(0.90);

  return (
    <div className="bg-[#0a3240] border border-[#17424f] rounded-2xl p-5 shadow-xl text-[#c1d0d6]">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#17424f]/80 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
              FSRS-6 Algorithm
            </span>
            <span className="text-xs text-[#8fa2aa] font-mono">v6.0-Prod</span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">Memory Decay & Retention Curve</h3>
        </div>

        <div className="flex items-center gap-4 text-sm font-mono">
          <div className="flex items-center gap-1.5 bg-[#051b22] px-3 py-1.5 rounded-lg border border-[#17424f]">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-[#8fa2aa]">Stability (S):</span>
            <span className="text-white font-bold">{stability.toFixed(1)}d</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#051b22] px-3 py-1.5 rounded-lg border border-[#17424f]">
            <Activity className="w-4 h-4 text-purple-400" />
            <span className="text-[#8fa2aa]">Mean Diff (D):</span>
            <span className="text-white font-bold">{difficulty.toFixed(1)}/10</span>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 text-emerald-400 font-bold">
            <Zap className="w-4 h-4" />
            <span>+{efficiencyAdvantage}% vs SM-2</span>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto overflow-visible select-none"
        >
          <defs>
            <linearGradient id="decayGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>

          {[1.0, 0.9, 0.75, 0.5, 0.25].map(r => (
            <g key={r}>
              <line
                x1={padLeft}
                y1={getY(r)}
                x2={width - padRight}
                y2={getY(r)}
                stroke={r === 0.9 ? '#10B981' : '#27272A'}
                strokeDasharray={r === 0.9 ? '4 3' : undefined}
                strokeWidth={r === 0.9 ? 1.5 : 1}
              />
              <text
                x={padLeft - 8}
                y={getY(r) + 4}
                textAnchor="end"
                className={`text-[10px] font-mono font-medium ${
                  r === 0.9 ? 'fill-emerald-400' : 'fill-neutral-500'
                }`}
              >
                {Math.round(r * 100)}%
              </text>
            </g>
          ))}

          <text
            x={width - padRight - 5}
            y={y90 - 6}
            textAnchor="end"
            className="text-[10px] font-mono fill-emerald-400 font-bold"
          >
            Optimal Review Threshold (90% Recall)
          </text>

          {[0, 5, 10, 15, 20, 25, 30].map(d => (
            <text
              key={d}
              x={getX(d)}
              y={height - padBottom + 18}
              textAnchor="middle"
              className="text-[10px] font-mono fill-neutral-500"
            >
              +{d}d
            </text>
          ))}

          <path d={fillD} fill="url(#decayGradient)" />

          <path
            d={pathD}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {stability <= 30 && (
            <g>
              <circle
                cx={getX(stability)}
                cy={getY(0.90)}
                r="5"
                className="fill-emerald-400 stroke-white stroke-2"
              />
              <line
                x1={getX(stability)}
                y1={getY(0.90)}
                x2={getX(stability)}
                y2={height - padBottom}
                stroke="#10B981"
                strokeDasharray="2 2"
                strokeWidth="1.2"
              />
            </g>
          )}
        </svg>
      </div>

      <div className="mt-4 pt-3 border-t border-[#17424f]/80 flex items-center justify-between text-xs text-[#8fa2aa]">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>FSRS-6 optimizes reviews precisely before forgetting drops below 90%</span>
        </div>
        <div className="font-mono text-[#627780]">
          Target Retrievability: {Math.round(FSRS_FACTORS.targetRetention * 100)}%
        </div>
      </div>
    </div>
  );
}
