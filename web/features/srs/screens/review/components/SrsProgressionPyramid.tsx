'use client';

import React from 'react';

interface SrsProgressionPyramidProps {
  apprenticeCount: number;
  guruCount: number;
  masterCount: number;
  enlightenedCount: number;
  burnedCount: number;
}

export function SrsProgressionPyramid({
  apprenticeCount,
  guruCount,
  masterCount,
  enlightenedCount,
  burnedCount,
}: SrsProgressionPyramidProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
      {[
        { name: 'Apprentice', count: apprenticeCount, color: 'text-info', bg: 'bg-info-subtle', border: 'border-info/30' },
        { name: 'Guru', count: guruCount, color: 'text-accent-gold', bg: 'bg-accent-gold-subtle', border: 'border-accent-gold/30' },
        { name: 'Master', count: masterCount, color: 'text-purple-300', bg: 'bg-purple-950/40', border: 'border-purple-500/30' },
        { name: 'Enlightened', count: enlightenedCount, color: 'text-cyan-300', bg: 'bg-cyan-950/40', border: 'border-cyan-400/30' },
        { name: 'Burned 🏆', count: burnedCount, color: 'text-orange-400', bg: 'bg-orange-950/40', border: 'border-orange-500/30' },
      ].map((tier) => (
        <div
          key={tier.name}
          className={`p-4 rounded-xl border ${tier.border} ${tier.bg} flex flex-col justify-between`}
        >
          <span className={`text-[11px] font-bold uppercase tracking-wider ${tier.color}`}>
            {tier.name}
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-2xl font-bold font-mono text-text-primary">{tier.count}</span>
            <span className="text-[11px] text-text-muted">items</span>
          </div>
        </div>
      ))}
    </div>
  );
}
