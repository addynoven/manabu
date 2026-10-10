'use client';

import React from 'react';
import { UnitLesson, CurriculumUnit } from '../../../models/curriculum';
import {
  X,
  RotateCcw,
  ChevronRight,
  Headphones,
  Mic,
  PenTool,
  Rocket,
  Clock,
  Zap,
  ArrowRight,
} from 'lucide-react';

interface LessonDrawerModalProps {
  drawerLesson: { lesson: UnitLesson; unit: CurriculumUnit } | null;
  completedLessonIds: string[];
  cooldownEndTime: number | null;
  cooldownClock: string;
  onClose: () => void;
  onStartLesson: (
    lesson: UnitLesson,
    unit: CurriculumUnit,
    mode: 'comprehensive' | 'listen' | 'speak' | 'spell'
  ) => void;
  onLaunchEarlyUnlock: (lesson: UnitLesson, unit: CurriculumUnit) => void;
  onInstantBypassCooldown: () => void;
}

export function LessonDrawerModal({
  drawerLesson,
  completedLessonIds,
  cooldownEndTime,
  cooldownClock,
  onClose,
  onStartLesson,
  onLaunchEarlyUnlock,
  onInstantBypassCooldown,
}: LessonDrawerModalProps) {
  if (!drawerLesson) return null;

  const isCompleted = completedLessonIds.includes(drawerLesson.lesson.id);

  return (
    <div className="fixed inset-0 z-50 bg-[#001017]/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0a3240] border border-[#17424f] rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 relative overflow-hidden">
        {/* Top Header Row */}
        <div className="flex items-start justify-between border-b border-[#17424f] pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#8fa2aa] font-mono uppercase font-bold">
                Unit {drawerLesson.unit.number} • Lesson {drawerLesson.lesson.lessonNumber || 1}
              </span>
            </div>
            <h2 className="text-xl font-bold text-[#f0f0f0] mt-1">{drawerLesson.lesson.title}</h2>
            <p className="text-xs text-[#8fa2aa]">{drawerLesson.lesson.subtitle}</p>

            {/* Dynamic Vocab Keywords Chips */}
            {drawerLesson.lesson.vocabKeywords && drawerLesson.lesson.vocabKeywords.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {drawerLesson.lesson.vocabKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-2 py-0.5 rounded bg-[#051b22] border border-[#17424f] text-[10px] text-[#a8ccde] font-serif"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8fa2aa] hover:text-[#f0f0f0] rounded-lg bg-[#0f3947] hover:bg-[#134454] border border-[#17424f] transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Cooldown Alert Banner */}
        {cooldownEndTime && (
          <div className="bg-[#2a2415] border border-[#fbbf24]/50 rounded-xl p-4 space-y-2 text-xs">
            <div className="flex items-center justify-between text-[#fbbf24] font-bold">
              <span className="flex items-center gap-1.5">
                <Clock size={16} /> Teuida Pacing Cooldown Active
              </span>
              <span className="font-mono text-sm">{cooldownClock}</span>
            </div>
            <p className="text-[#c1d0d6] text-[11px] leading-relaxed">
              Pacing cooldown active. Wait for timer or bypass immediately by passing a 3-question revision re-test!
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => onLaunchEarlyUnlock(drawerLesson.lesson, drawerLesson.unit)}
                className="px-3 py-1.5 rounded-lg bg-[#fbbf24] text-[#051b22] font-bold text-xs flex items-center gap-1 shadow-sm"
              >
                <Zap size={13} /> ⚡ UNLOCK EARLY (RE-TEST)
              </button>
              <button
                onClick={onInstantBypassCooldown}
                className="text-xs text-[#8fa2aa] hover:text-white underline ml-auto"
              >
                Instant Bypass
              </button>
            </div>
          </div>
        )}

        {/* Primary Main CTA Option: START LESSON / REDO LESSON (Option 1) */}
        <button
          onClick={() => onStartLesson(drawerLesson.lesson, drawerLesson.unit, 'comprehensive')}
          className="w-full p-4 rounded-xl bg-[#fbbf24] hover:bg-[#f59e0b] text-[#051b22] text-left transition flex items-center justify-between group shadow-lg font-bold"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#051b22]/20 flex items-center justify-center text-[#051b22]">
              <RotateCcw size={22} />
            </div>
            <div>
              <h3 className="text-base font-black tracking-wide text-[#051b22]">
                {isCompleted ? 'REDO LESSON' : 'START LESSON'}
              </h3>
              <p className="text-xs text-[#051b22]/80 font-medium">
                Balanced Duolingo-style stream mixing grammar, speaking, listening &amp; spelling
              </p>
            </div>
          </div>
          <ChevronRight size={22} className="text-[#051b22] group-hover:translate-x-1 transition" />
        </button>

        {/* Review Sub-Modes Section (4 Options) */}
        <div className="space-y-2 pt-1">
          <span className="text-[10px] font-mono text-[#8fa2aa] uppercase tracking-wider block font-bold">
            PRACTICE INSTRUMENT MODES
          </span>

          {/* Mode 1: Comprehensive */}
          <button
            onClick={() => onStartLesson(drawerLesson.lesson, drawerLesson.unit, 'comprehensive')}
            className="w-full p-3 rounded-xl bg-[#0f3947] border border-[#c74a4a] hover:bg-[#134454] text-left transition flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#c74a4a] flex items-center justify-center text-white shadow-md">
                <Rocket size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-bold text-[#f0f0f0]">Practice - Comprehensive</h3>
                  <span className="bg-[#c74a4a] text-white text-[8px] font-bold px-1.5 py-0.2 rounded-full uppercase">
                    Recommended
                  </span>
                </div>
                <p className="text-[11px] text-[#8fa2aa]">Balanced grammar cloze, spelling &amp; SRS math</p>
              </div>
            </div>
            <ArrowRight size={15} className="text-[#ffb3af] group-hover:translate-x-1 transition" />
          </button>

          {/* Mode 2: Listening */}
          <button
            onClick={() => onStartLesson(drawerLesson.lesson, drawerLesson.unit, 'listen')}
            className="w-full p-3 rounded-xl bg-[#00161e] border border-[#17424f] hover:border-[#38bdf8]/60 hover:bg-[#071f27] text-left transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#082f49] border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8]">
                <Headphones size={18} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#f0f0f0]">Practice - Listening</h3>
                <p className="text-[11px] text-[#8fa2aa]">Audio-first comprehension with Tokyo pitch</p>
              </div>
            </div>
            <ChevronRight size={15} className="text-[#8fa2aa] group-hover:text-white transition" />
          </button>

          {/* Mode 3: Speaking */}
          <button
            onClick={() => onStartLesson(drawerLesson.lesson, drawerLesson.unit, 'speak')}
            className="w-full p-3 rounded-xl bg-[#00161e] border border-[#17424f] hover:border-[#38bdf8]/60 hover:bg-[#071f27] text-left transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1e1b4b] border border-[#818cf8]/30 flex items-center justify-center text-[#818cf8]">
                <Mic size={18} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#f0f0f0]">Practice - Speaking</h3>
                <p className="text-[11px] text-[#8fa2aa]">Oral speech recognition &amp; native output drill</p>
              </div>
            </div>
            <ChevronRight size={15} className="text-[#8fa2aa] group-hover:text-white transition" />
          </button>

          {/* Mode 4: Spelling */}
          <button
            onClick={() => onStartLesson(drawerLesson.lesson, drawerLesson.unit, 'spell')}
            className="w-full p-3 rounded-xl bg-[#00161e] border border-[#17424f] hover:border-[#38bdf8]/60 hover:bg-[#071f27] text-left transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0f3947] border border-[#17424f] flex items-center justify-center text-[#34d399]">
                <PenTool size={18} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#f0f0f0]">Practice - Spelling</h3>
                <p className="text-[11px] text-[#8fa2aa]">Writing and active reproduction focus</p>
              </div>
            </div>
            <ChevronRight size={15} className="text-[#8fa2aa] group-hover:text-white transition" />
          </button>
        </div>
      </div>
    </div>
  );
}
