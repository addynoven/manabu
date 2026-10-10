'use client';

import React from 'react';
import { Filter, Layers, Zap, Clock } from 'lucide-react';

interface CramConfigPanelProps {
  selectedLevel: 'all' | 'n5' | 'n4' | 'n3';
  sessionSize: number;
  onSelectLevel: (lvl: 'all' | 'n5' | 'n4' | 'n3') => void;
  onSelectSessionSize: (size: number) => void;
  onStartSession: () => void;
}

export function CramConfigPanel({
  selectedLevel,
  sessionSize,
  onSelectLevel,
  onSelectSessionSize,
  onStartSession,
}: CramConfigPanelProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 bg-[#0a3240]/90 border border-[#17424f] rounded-xl p-6 md:p-8 shadow-xl space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Filter size={18} className="text-amber-400" />
            Select Target Proficiency
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { id: 'all', label: 'All Levels', desc: 'Mixed curriculum' },
              { id: 'n5', label: 'JLPT N5', desc: 'Foundations' },
              { id: 'n4', label: 'JLPT N4', desc: 'Elementary' },
              { id: 'n3', label: 'JLPT N3', desc: 'Intermediate' },
            ].map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => onSelectLevel(lvl.id as any)}
                className={`p-4 rounded-2xl border text-left transition ${
                  selectedLevel === lvl.id
                    ? 'bg-amber-950/40 border-amber-500 text-white shadow-md'
                    : 'bg-[#051b22] border-[#17424f] text-[#8fa2aa] hover:border-[#17424f]'
                }`}
              >
                <span className="font-bold text-sm block text-white">{lvl.label}</span>
                <span className="text-xs text-[#627780]">{lvl.desc}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers size={18} className="text-amber-400" />
            Session Drill Size
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            {[5, 10, 20, 30].map((size) => (
              <button
                key={size}
                onClick={() => onSelectSessionSize(size)}
                className={`px-6 py-3 rounded-xl border text-sm font-bold transition ${
                  sessionSize === size
                    ? 'bg-amber-500 text-[#051b22] border-amber-400 shadow-md'
                    : 'bg-[#051b22] border-[#17424f] text-[#c1d0d6] hover:border-[#17424f]'
                }`}
              >
                {size} Cards
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#17424f] flex items-center justify-between">
          <p className="text-xs text-[#8fa2aa]">
            Reviews completed in Cram Studio do not affect regular SRS intervals.
          </p>
          <button
            onClick={onStartSession}
            className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#051b22] font-bold rounded-2xl shadow-lg transition flex items-center gap-2"
          >
            <Zap size={18} />
            <span>Launch Cram Session</span>
          </button>
        </div>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <div className="bg-[#0a3240]/60 border border-[#17424f] rounded-xl p-6 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Clock size={16} className="text-amber-400" />
            Study Session Breakdown
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-2 border-b border-[#17424f]">
              <span className="text-[#8fa2aa]">Filter</span>
              <span className="text-white font-mono uppercase">{selectedLevel}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#17424f]">
              <span className="text-[#8fa2aa]">Batch Size</span>
              <span className="text-white font-mono">{sessionSize} items</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#17424f]">
              <span className="text-[#8fa2aa]">SRS Impact</span>
              <span className="text-emerald-400 font-bold">Zero (Isolated)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
