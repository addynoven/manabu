'use client';

import React from 'react';
import { CharacterStrokeData, StrokeCategory } from '../../../models/strokeData';
import { ChevronLeft, ChevronRight, Eye, PenTool, Play, Eraser } from 'lucide-react';

interface StrokeRosterGridProps {
  category: StrokeCategory;
  characterList: CharacterStrokeData[];
  currentIndex: number;
  mode: 'guide' | 'test' | 'demo';
  onSelectIndex: (idx: number) => void;
  onPrevChar: () => void;
  onNextChar: () => void;
  onSetMode: (mode: 'guide' | 'test' | 'demo') => void;
  onStartDemo: () => void;
  onClearCanvas: () => void;
}

export function StrokeRosterGrid({
  category,
  characterList,
  currentIndex,
  mode,
  onSelectIndex,
  onPrevChar,
  onNextChar,
  onSetMode,
  onStartDemo,
  onClearCanvas,
}: StrokeRosterGridProps) {
  return (
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
              onClick={onPrevChar}
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
              onClick={onNextChar}
              disabled={currentIndex === characterList.length - 1}
              className="p-1.5 rounded-lg bg-[#0f3947] hover:bg-[#134454] disabled:opacity-30 text-[#f0f0f0] border border-[#17424f]"
              title="Next Character"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 max-h-[460px] overflow-y-auto pr-1">
          {characterList.map((item, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={item.char + idx}
                onClick={() => onSelectIndex(idx)}
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

      <div className="bg-[#0a3240] rounded-xl border border-[#17424f] p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              onSetMode('guide');
              onClearCanvas();
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
              onSetMode('test');
              onClearCanvas();
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
            onClick={onStartDemo}
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
            onClick={onClearCanvas}
            className="px-3 py-1.5 rounded-lg bg-[#0f3947] hover:bg-[#134454] border border-[#17424f] text-xs font-medium text-[#f0f0f0] flex items-center gap-1.5 transition"
          >
            <Eraser size={13} /> <span>Clear Canvas</span>
          </button>
        </div>
      </div>
    </section>
  );
}
