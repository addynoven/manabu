'use client';

import React from 'react';
import { CurriculumUnit } from '../../../models/curriculum';
import { Flag, X } from 'lucide-react';

interface GateCheckpointModalProps {
  gateUnit: CurriculumUnit | null;
  passedGates: string[];
  onClose: () => void;
  onPassGate: (unitId: string) => void;
}

export function GateCheckpointModal({
  gateUnit,
  passedGates,
  onClose,
  onPassGate,
}: GateCheckpointModalProps) {
  if (!gateUnit) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#001017]/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0a3240] border border-[#17424f] rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5">
        <div className="flex items-start justify-between border-b border-[#17424f] pb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#2a2415] border border-[#fbbf24]/50 flex items-center justify-center text-[#fbbf24]">
              <Flag size={22} />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#f0f0f0]">Unit {gateUnit.number} Checkpoint</h3>
              <p className="text-xs text-[#8fa2aa]">Cumulative Synthesis Gate Exam</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8fa2aa] hover:text-[#f0f0f0] rounded-lg bg-[#0f3947] border border-[#17424f]"
          >
            <X size={16} />
          </button>
        </div>

        <p className="text-xs text-[#8fa2aa] leading-relaxed">
          Verify your synthesis of vocabulary, kanji, and grammar patterns introduced across Unit {gateUnit.number}. Passing with an 80% score clears the checkpoint and unlocks future content.
        </p>

        <div className="p-3.5 rounded-lg bg-[#051b22] border border-[#17424f] flex items-center justify-between text-xs">
          <span className="text-[#8fa2aa]">Status</span>
          <span className="font-bold text-[#fbbf24]">
            {passedGates.includes(gateUnit.id) ? 'Checkpoint Cleared' : 'Pending Verification'}
          </span>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-lg border border-[#17424f] hover:bg-[#0f3947] text-xs font-semibold text-[#8fa2aa] transition"
          >
            Close
          </button>
          <button
            onClick={() => onPassGate(gateUnit.id)}
            className="flex-1 py-2.5 rounded-lg bg-[#c74a4a] hover:bg-[#d95a5a] text-white text-xs font-bold transition shadow-md"
          >
            Pass Revision Checkpoint
          </button>
        </div>
      </div>
    </div>
  );
}
