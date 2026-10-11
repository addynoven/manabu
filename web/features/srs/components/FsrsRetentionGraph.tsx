'use client';

import React, { useState, useMemo } from 'react';
import { Clock, ShieldCheck, BarChart2, Layers } from 'lucide-react';

export interface SrsCardProp {
  id: string;
  stage: number; // 1-4 Apprentice, 5-6 Guru, 7 Master, 8 Enlightened, 9 Burned
  dueAt: number; // timestamp
}

interface FsrsRetentionGraphProps {
  cards?: SrsCardProp[];
  stability?: number;
  difficulty?: number;
  efficiencyAdvantage?: number;
}

export function FsrsRetentionGraph({
  cards = [],
  stability = 14.8,
  difficulty = 4.2,
  efficiencyAdvantage = 14.2,
}: FsrsRetentionGraphProps) {
  const now = Date.now();
  const [hoveredBucket, setHoveredBucket] = useState<string | null>(null);

  // 1. Calculate 24-Hour & 7-Day Review Forecast Buckets
  const forecast = useMemo(() => {
    const buckets = [
      { id: 'now', label: 'Now', maxOffsetMs: 0 },
      { id: '3h', label: '+3h', maxOffsetMs: 3 * 3600 * 1000 },
      { id: '6h', label: '+6h', maxOffsetMs: 6 * 3600 * 1000 },
      { id: '12h', label: '+12h', maxOffsetMs: 12 * 3600 * 1000 },
      { id: '24h', label: '+24h', maxOffsetMs: 24 * 3600 * 1000 },
      { id: '3d', label: '+3d', maxOffsetMs: 3 * 86400 * 1000 },
      { id: '7d', label: '+7d', maxOffsetMs: 7 * 86400 * 1000 },
    ];

    let prevOffset = -Infinity;

    return buckets.map((b) => {
      let apprentice = 0;
      let guru = 0;
      let master = 0;
      let enlightened = 0;

      cards.forEach((c) => {
        if (c.stage >= 9) return; // Burned items don't recur
        const offset = c.dueAt - now;

        let inBucket = false;
        if (b.id === 'now') {
          inBucket = offset <= 0;
        } else {
          inBucket = offset > prevOffset && offset <= b.maxOffsetMs;
        }

        if (inBucket) {
          if (c.stage >= 1 && c.stage <= 4) apprentice++;
          else if (c.stage >= 5 && c.stage <= 6) guru++;
          else if (c.stage === 7) master++;
          else if (c.stage === 8) enlightened++;
        }
      });

      prevOffset = b.maxOffsetMs;
      const total = apprentice + guru + master + enlightened;

      return {
        ...b,
        apprentice,
        guru,
        master,
        enlightened,
        total,
      };
    });
  }, [cards, now]);

  // Max count for scaling bars
  const maxForecastCount = useMemo(() => {
    const maxVal = Math.max(...forecast.map((b) => b.total), 1);
    return Math.max(10, Math.ceil(maxVal / 5) * 5);
  }, [forecast]);

  // 2. 5-Tier SRS Stage Counts
  const counts = useMemo(() => {
    let apprentice = 0;
    let guru = 0;
    let master = 0;
    let enlightened = 0;
    let burned = 0;

    cards.forEach((c) => {
      if (c.stage >= 1 && c.stage <= 4) apprentice++;
      else if (c.stage >= 5 && c.stage <= 6) guru++;
      else if (c.stage === 7) master++;
      else if (c.stage === 8) enlightened++;
      else if (c.stage >= 9) burned++;
    });

    return { apprentice, guru, master, enlightened, burned, total: cards.length };
  }, [cards]);

  return (
    <div className="bg-[#0a3240] border border-[#17424f] rounded-2xl p-6 shadow-xl space-y-6 text-[#c1d0d6]">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#17424f]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-pink-500/10 text-pink-400 border border-pink-500/30">
              Manabu SRS Forecast Model
            </span>
            <span className="text-xs text-[#8fa2aa] font-mono">FSRS-6 Engine</span>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <BarChart2 size={20} className="text-amber-400" />
            <span>Dojo Review Workload &amp; Progression Dashboard</span>
          </h2>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono flex-wrap">
          <div className="bg-[#051b22] px-3.5 py-2 rounded-xl border border-[#17424f]">
            <span className="text-[#8fa2aa] block text-[10px] uppercase font-bold">Active Items</span>
            <span className="text-white font-bold text-sm">{counts.total}</span>
          </div>
          <div className="bg-[#051b22] px-3.5 py-2 rounded-xl border border-[#17424f]">
            <span className="text-[#8fa2aa] block text-[10px] uppercase font-bold">Memory Half-Life</span>
            <span className="text-amber-400 font-bold text-sm">{stability.toFixed(1)}d</span>
          </div>
        </div>
      </div>

      {/* 1. Interactive Stacked Review Forecast Bar Chart */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <span className="font-bold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
            <Clock size={14} className="text-pink-400" />
            Upcoming Review Workload Forecast (Next 24h &amp; 7 Days)
          </span>
          <div className="flex items-center gap-3 text-[11px] font-mono flex-wrap">
            <span className="flex items-center gap-1 text-pink-400">
              <span className="w-2.5 h-2.5 rounded-sm bg-pink-500" /> Apprentice (Tiers 1-4)
            </span>
            <span className="flex items-center gap-1 text-purple-400">
              <span className="w-2.5 h-2.5 rounded-sm bg-purple-500" /> Guru (Tiers 5-6)
            </span>
            <span className="flex items-center gap-1 text-blue-400">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-500" /> Master (Tier 7)
            </span>
            <span className="flex items-center gap-1 text-cyan-400">
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" /> Enlightened (Tier 8)
            </span>
          </div>
        </div>

        <div className="bg-[#051b22] border border-[#17424f] rounded-2xl p-5 relative overflow-visible">
          <div className="h-48 flex items-end justify-between gap-3 pt-6 pb-2 px-2 border-b border-[#17424f]/80 relative">
            {forecast.map((b) => {
              const hApprentice = (b.apprentice / maxForecastCount) * 100;
              const hGuru = (b.guru / maxForecastCount) * 100;
              const hMaster = (b.master / maxForecastCount) * 100;
              const hEnlightened = (b.enlightened / maxForecastCount) * 100;
              const isHovered = hoveredBucket === b.id;

              return (
                <div
                  key={b.id}
                  onMouseEnter={() => setHoveredBucket(b.id)}
                  onMouseLeave={() => setHoveredBucket(null)}
                  className="flex-1 flex flex-col items-center gap-1.5 group h-full justify-end relative cursor-pointer"
                >
                  {/* Interactive Tooltip Card */}
                  {isHovered && b.total > 0 && (
                    <div className="absolute -top-24 z-30 bg-[#001017] border border-[#38bdf8]/50 rounded-xl p-3 shadow-2xl text-[11px] font-mono space-y-1 whitespace-nowrap animate-in fade-in zoom-in-95 pointer-events-none">
                      <div className="font-bold text-white border-b border-[#17424f] pb-1 flex justify-between gap-4">
                        <span>{b.label} Slot</span>
                        <span className="text-amber-400">{b.total} Total Due</span>
                      </div>
                      {b.apprentice > 0 && <div className="text-pink-400 flex justify-between gap-3"><span>Apprentice:</span><span>{b.apprentice}</span></div>}
                      {b.guru > 0 && <div className="text-purple-400 flex justify-between gap-3"><span>Guru:</span><span>{b.guru}</span></div>}
                      {b.master > 0 && <div className="text-blue-400 flex justify-between gap-3"><span>Master:</span><span>{b.master}</span></div>}
                      {b.enlightened > 0 && <div className="text-cyan-400 flex justify-between gap-3"><span>Enlightened:</span><span>{b.enlightened}</span></div>}
                    </div>
                  )}

                  {/* Top total label */}
                  <span className={`text-[10px] font-mono font-bold transition-colors ${isHovered ? 'text-amber-400 scale-110' : 'text-white/80'}`}>
                    {b.total > 0 ? b.total : '0'}
                  </span>

                  {/* Stacked Bar Container */}
                  <div className={`w-full max-w-[42px] bg-[#0a3240] rounded-t-lg overflow-hidden flex flex-col justify-end transition-all h-full ${isHovered ? 'ring-2 ring-[#38bdf8] scale-105' : ''}`}>
                    {b.total === 0 ? (
                      <div className="h-1 bg-[#17424f]/50 w-full" />
                    ) : (
                      <>
                        {b.enlightened > 0 && (
                          <div
                            style={{ height: `${hEnlightened}%` }}
                            className="bg-cyan-400 w-full transition-all duration-500"
                            title={`Enlightened: ${b.enlightened}`}
                          />
                        )}
                        {b.master > 0 && (
                          <div
                            style={{ height: `${hMaster}%` }}
                            className="bg-blue-500 w-full transition-all duration-500"
                            title={`Master: ${b.master}`}
                          />
                        )}
                        {b.guru > 0 && (
                          <div
                            style={{ height: `${hGuru}%` }}
                            className="bg-purple-500 w-full transition-all duration-500"
                            title={`Guru: ${b.guru}`}
                          />
                        )}
                        {b.apprentice > 0 && (
                          <div
                            style={{ height: `${hApprentice}%` }}
                            className="bg-pink-500 w-full transition-all duration-500"
                            title={`Apprentice: ${b.apprentice}`}
                          />
                        )}
                      </>
                    )}
                  </div>

                  {/* X-axis Label */}
                  <span
                    className={`text-[10px] font-mono font-bold ${
                      b.id === 'now' ? 'text-red-400 font-black' : 'text-[#8fa2aa]'
                    }`}
                  >
                    {b.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. 5-Tier SRS Stage Progression Pyramid */}
      <div className="space-y-3 pt-2 border-t border-[#17424f]">
        <span className="font-bold text-white uppercase tracking-wider text-xs font-mono flex items-center gap-1.5">
          <Layers size={14} className="text-amber-400" />
          SRS Level Progression Pyramid
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {/* Apprentice */}
          <div className="bg-[#051b22] border border-pink-500/30 rounded-xl p-3.5 space-y-1.5 hover:border-pink-500 transition">
            <div className="flex items-center justify-between text-xs font-bold text-pink-400 uppercase">
              <span>Apprentice</span>
              <span className="font-mono text-sm text-white">{counts.apprentice}</span>
            </div>
            <p className="text-[10px] text-[#8fa2aa] leading-snug">
              Tiers 1–4 (4h → 8h → 24h → 48h)
            </p>
            <div className="w-full bg-[#0a3240] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-pink-500 h-full transition-all duration-500"
                style={{
                  width: `${counts.total > 0 ? (counts.apprentice / counts.total) * 100 : 0}%`,
                }}
              />
            </div>
          </div>

          {/* Guru */}
          <div className="bg-[#051b22] border border-purple-500/30 rounded-xl p-3.5 space-y-1.5 hover:border-purple-500 transition">
            <div className="flex items-center justify-between text-xs font-bold text-purple-400 uppercase">
              <span>Guru</span>
              <span className="font-mono text-sm text-white">{counts.guru}</span>
            </div>
            <p className="text-[10px] text-[#8fa2aa] leading-snug">
              Tiers 5–6 (7d → 14d)
            </p>
            <div className="w-full bg-[#0a3240] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-purple-500 h-full transition-all duration-500"
                style={{
                  width: `${counts.total > 0 ? (counts.guru / counts.total) * 100 : 0}%`,
                }}
              />
            </div>
          </div>

          {/* Master */}
          <div className="bg-[#051b22] border border-blue-500/30 rounded-xl p-3.5 space-y-1.5 hover:border-blue-500 transition">
            <div className="flex items-center justify-between text-xs font-bold text-blue-400 uppercase">
              <span>Master</span>
              <span className="font-mono text-sm text-white">{counts.master}</span>
            </div>
            <p className="text-[10px] text-[#8fa2aa] leading-snug">
              Tier 7 (30-Day Interval)
            </p>
            <div className="w-full bg-[#0a3240] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-full transition-all duration-500"
                style={{
                  width: `${counts.total > 0 ? (counts.master / counts.total) * 100 : 0}%`,
                }}
              />
            </div>
          </div>

          {/* Enlightened */}
          <div className="bg-[#051b22] border border-cyan-500/30 rounded-xl p-3.5 space-y-1.5 hover:border-cyan-400 transition">
            <div className="flex items-center justify-between text-xs font-bold text-cyan-400 uppercase">
              <span>Enlightened</span>
              <span className="font-mono text-sm text-white">{counts.enlightened}</span>
            </div>
            <p className="text-[10px] text-[#8fa2aa] leading-snug">
              Tier 8 (120-Day Interval)
            </p>
            <div className="w-full bg-[#0a3240] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-cyan-400 h-full transition-all duration-500"
                style={{
                  width: `${counts.total > 0 ? (counts.enlightened / counts.total) * 100 : 0}%`,
                }}
              />
            </div>
          </div>

          {/* Burned */}
          <div className="bg-[#051b22] border border-amber-500/30 rounded-xl p-3.5 space-y-1.5 hover:border-amber-400 transition">
            <div className="flex items-center justify-between text-xs font-bold text-amber-400 uppercase">
              <span>Burned 🏆</span>
              <span className="font-mono text-sm text-white">{counts.burned}</span>
            </div>
            <p className="text-[10px] text-[#8fa2aa] leading-snug">
              Tier 9 (Permanent Retention)
            </p>
            <div className="w-full bg-[#0a3240] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-400 h-full transition-all duration-500"
                style={{
                  width: `${counts.total > 0 ? (counts.burned / counts.total) * 100 : 0}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="pt-3 border-t border-[#17424f] flex items-center justify-between text-xs text-[#8fa2aa]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>FSRS-6 automatically schedules reviews before retention drops below 90%</span>
        </div>
        <div className="font-mono text-[#627780]">
          Efficiency Advantage: <strong className="text-emerald-400">+{efficiencyAdvantage}% vs SM-2</strong>
        </div>
      </div>
    </div>
  );
}
