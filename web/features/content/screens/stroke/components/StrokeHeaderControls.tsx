'use client';

import React from 'react';
import { StrokeCategory } from '../../../models/strokeData';
import { CheckCircle2 } from 'lucide-react';

interface StrokeHeaderControlsProps {
  category: StrokeCategory;
  totalGlyphs: number;
  onSelectCategory: (cat: StrokeCategory) => void;
}

export function StrokeHeaderControls({
  category,
  totalGlyphs,
  onSelectCategory,
}: StrokeHeaderControlsProps) {
  return (
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

        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-[#051b22] p-1 rounded-lg border border-[#17424f] flex items-center gap-1">
            {(['hiragana', 'katakana', 'N5'] as StrokeCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
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
              {totalGlyphs} Glyphs Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
