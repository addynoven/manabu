'use client';

import React from 'react';

export const PHASE_TABS = [
  { id: 'all', label: 'All 30 Units', count: 30 },
  { id: 'n5', label: '🌸 Foundations (Units 1-10)', count: 10, range: [1, 10] },
  { id: 'n4', label: '🗾 Elementary (Units 11-18)', count: 8, range: [11, 18] },
  { id: 'n3', label: '🏯 Intermediate (Units 19-24)', count: 6, range: [19, 24] },
  { id: 'n2_n1', label: '🥋 Advanced (Units 25-30)', count: 6, range: [25, 30] },
];

interface PhaseTabSelectorProps {
  selectedPhase: string;
  onSelectPhase: (phaseId: string) => void;
}

export function PhaseTabSelector({ selectedPhase, onSelectPhase }: PhaseTabSelectorProps) {
  return (
    <div className="bg-[#051b22] p-1.5 rounded-xl border border-[#17424f] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
      {PHASE_TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSelectPhase(tab.id)}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition whitespace-nowrap flex items-center gap-2 ${
            selectedPhase === tab.id
              ? 'bg-[#c74a4a] text-white shadow-sm'
              : 'text-[#8fa2aa] hover:text-[#f0f0f0] hover:bg-[#0a3240]'
          }`}
        >
          <span>{tab.label}</span>
          {selectedPhase === tab.id && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
        </button>
      ))}
    </div>
  );
}
