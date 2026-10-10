'use client';

import React from 'react';
import { Compass } from 'lucide-react';

interface HomeHeroBannerProps {
  completedCount: number;
  totalCount?: number;
}

export function HomeHeroBanner({ completedCount, totalCount = 450 }: HomeHeroBannerProps) {
  return (
    <div className="bg-[#0a3240] border border-[#17424f] rounded-xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#2d1b22] text-[#ffb3af] border border-[#c74a4a]/40 flex items-center gap-1.5">
              <Compass size={12} />
              Curriculum Tree
            </span>
            <span className="text-xs text-[#8fa2aa] font-mono">Dojo Learning Path</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[#f0f0f0] tracking-tight flex items-center gap-3 font-serif">
            <span>学習ロードマップ</span>
            <span className="text-[#8fa2aa] font-sans font-medium text-2xl">Dojo Curriculum</span>
          </h1>
          <p className="text-sm text-[#8fa2aa] max-w-xl">
            Master Japanese across 30 comprehensive study units with 450 structured interactive lessons, authentic pronunciation, vocabulary, and checkpoint revision gates.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="bg-[#051b22] border border-[#17424f] rounded-xl px-5 py-3 text-center shadow-lg">
            <span className="text-[10px] text-[#8fa2aa] uppercase font-mono block">Lessons Cleared</span>
            <span className="text-2xl font-bold font-mono text-[#34d399]">
              {completedCount} <span className="text-[#5c727d] text-sm">/ {totalCount}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
