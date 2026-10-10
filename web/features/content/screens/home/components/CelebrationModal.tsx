'use client';

import React from 'react';
import { CurriculumUnit } from '../../../models/curriculum';

interface CelebrationModalProps {
  celebrationUnit: CurriculumUnit | null;
  onClose: () => void;
}

export function CelebrationModal({ celebrationUnit, onClose }: CelebrationModalProps) {
  if (!celebrationUnit) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#001017]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0a3240] border border-[#17424f] rounded-2xl max-w-md w-full p-8 text-center space-y-5 shadow-2xl">
        <div className="w-16 h-16 rounded-xl bg-[#2a2415] border border-[#fbbf24]/50 text-[#fbbf24] mx-auto flex items-center justify-center text-3xl">
          🏆
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#fbbf24]">
            Unit {celebrationUnit.number} Complete
          </span>
          <h2 className="text-xl font-bold text-white font-serif">{celebrationUnit.title}</h2>
          <p className="text-xs text-[#8fa2aa] font-serif">{celebrationUnit.japaneseTitle}</p>
        </div>
        <p className="text-xs text-[#8fa2aa] leading-relaxed">
          Outstanding work! You have finished every lesson in this unit. Checkpoint rewards have been credited to your dojo belt.
        </p>
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-lg bg-[#c74a4a] hover:bg-[#d95a5a] text-white text-xs font-bold shadow-lg transition"
        >
          Continue Dojo Journey
        </button>
      </div>
    </div>
  );
}
