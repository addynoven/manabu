'use client';

import React from 'react';

interface CramHeaderProps {
  totalItems: number;
}

export function CramHeader({ totalItems }: CramHeaderProps) {
  return (
    <div className="bg-surface-base border border-border-hairline rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight flex items-center gap-3">
          <span>集中特訓 • Custom Cram Studio</span>
        </h1>
        <p className="text-text-secondary text-xs sm:text-sm mt-1 max-w-xl">
          Study any dataset on demand without affecting your SRS intervals or forgetting schedules. Ideal for pre-exam blitzes.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-background-deep border border-border-hairline px-4 py-2 rounded-xl text-center">
          <span className="text-[10px] text-text-muted uppercase font-mono block">Available Items</span>
          <span className="text-lg font-bold font-mono text-accent-gold">{totalItems}</span>
        </div>
      </div>
    </div>
  );
}
