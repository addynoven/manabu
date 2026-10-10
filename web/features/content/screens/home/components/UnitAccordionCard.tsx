'use client';

import React from 'react';
import { CurriculumUnit, UnitLesson } from '../../../models/curriculum';
import { ChevronRight, ChevronDown, Flag, CheckCircle2, Lock } from 'lucide-react';

interface UnitAccordionCardProps {
  unit: CurriculumUnit;
  isExpanded: boolean;
  completedLessonIds: string[];
  passedGates: string[];
  onToggleExpand: (unitId: string) => void;
  onOpenGateModal: (unit: CurriculumUnit) => void;
  onSelectLessonNode: (lesson: UnitLesson, unit: CurriculumUnit) => void;
}

export function UnitAccordionCard({
  unit,
  isExpanded,
  completedLessonIds,
  passedGates,
  onToggleExpand,
  onOpenGateModal,
  onSelectLessonNode,
}: UnitAccordionCardProps) {
  const unitLessons = unit.lessons || [];
  const unitDone = unitLessons.length > 0 && unitLessons.every((l: UnitLesson) => completedLessonIds.includes(l.id));
  const gatePassed = passedGates.includes(unit.id);

  return (
    <div className="bg-[#0a3240] border border-[#17424f] rounded-xl overflow-hidden shadow-sm">
      <div
        onClick={() => onToggleExpand(unit.id)}
        className="px-6 py-4 border-b border-[#17424f] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#071f27]/60 cursor-pointer select-none"
        style={{ borderLeftColor: unit.color || '#c74a4a', borderLeftWidth: 4 }}
      >
        <div className="flex items-center gap-3">
          <button className="text-[#8fa2aa] hover:text-white transition">
            {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>
          <span
            className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-base text-white shadow-sm font-serif"
            style={{ backgroundColor: unit.color || '#c74a4a' }}
          >
            {unit.icon || `#${unit.number}`}
          </span>
          <div>
            <h2 className="text-base font-bold text-[#f0f0f0] flex items-center gap-2">
              Unit {unit.number}: {unit.title}
              <span className="text-xs font-serif text-[#8fa2aa] font-normal">
                ({unit.japaneseTitle})
              </span>
            </h2>
            <p className="text-xs text-[#8fa2aa] mt-0.5">{unit.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenGateModal(unit);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition ${
              gatePassed
                ? 'bg-[#063b28] border-[#34d399]/40 text-[#34d399]'
                : unitDone
                ? 'bg-[#2a2415] border-[#fbbf24]/50 text-[#fbbf24] animate-pulse'
                : 'bg-[#0f3947] border-[#17424f] text-[#8fa2aa] hover:text-[#f0f0f0] hover:bg-[#134454]'
            }`}
          >
            <Flag size={13} />
            <span>{gatePassed ? 'Gate Cleared' : 'Revision Gate'}</span>
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {unitLessons.map((lesson: UnitLesson, idx: number) => {
            const isCompleted = completedLessonIds.includes(lesson.id);
            const isUnlocked =
              unit.number === 1 ||
              isCompleted ||
              idx === 0 ||
              completedLessonIds.includes(unitLessons[idx - 1]?.id);

            return (
              <div
                key={lesson.id}
                onClick={() => {
                  if (isUnlocked) {
                    onSelectLessonNode(lesson, unit);
                  }
                }}
                className={`p-4 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                  isCompleted
                    ? 'bg-[#051b22] border-[#34d399]/40 hover:border-[#34d399]'
                    : isUnlocked
                    ? 'bg-[#00161e] border-[#17424f] hover:border-[#38bdf8]/60 hover:bg-[#071f27]'
                    : 'bg-[#001017]/50 border-[#12333e] opacity-40 cursor-not-allowed'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#5c727d] uppercase tracking-wider">
                      Lesson {idx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-[#f0f0f0] mt-0.5">{lesson.title}</h3>
                    <p className="text-xs text-[#8fa2aa] mt-0.5">{lesson.subtitle}</p>
                  </div>

                  {isCompleted ? (
                    <div className="w-5 h-5 rounded-full bg-[#063b28] border border-[#34d399]/40 flex items-center justify-center text-[#34d399] shrink-0">
                      <CheckCircle2 size={13} />
                    </div>
                  ) : isUnlocked ? (
                    <span className="text-[11px] font-mono font-bold text-[#fbbf24] bg-[#2a2415] border border-[#fbbf24]/40 px-2 py-0.5 rounded">
                      +{lesson.xpReward} XP
                    </span>
                  ) : (
                    <Lock size={15} className="text-[#5c727d] shrink-0" />
                  )}
                </div>

                <div className="flex items-center justify-between text-xs pt-2.5 border-t border-[#17424f]/60">
                  <span className="text-[#5c727d] font-mono text-[11px]">
                    {lesson.exercises?.length || 8} Drills
                  </span>
                  {isUnlocked && (
                    <span className="text-[#ffb3af] font-semibold text-xs flex items-center gap-1 group-hover:translate-x-0.5 transition">
                      Open Modes <ChevronRight size={13} />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
