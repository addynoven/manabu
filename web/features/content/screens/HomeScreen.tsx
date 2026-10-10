'use client';

import React, { useState, useMemo, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { AuthGate } from '@/features/auth/components/AuthGate';
import { StitchHeader } from '@/core/components/StitchHeader';
import { MANABU_CURRICULUM, CurriculumUnit, UnitLesson, LessonExercise } from '../models/curriculum';
import { speakJapanese } from '../models/kana';
import { syncContentWithBackend, getCachedBundle } from '../store/contentStore';
import {
  Compass,
  Play,
  CheckCircle2,
  Sparkles,
  Volume2,
  Lock,
  ArrowRight,
  Flame,
  Award,
  BookOpen,
  X,
  RotateCcw,
  Flag,
  ChevronRight,
  Headphones,
  PenTool,
  Mic,
  Zap,
} from 'lucide-react';

const PHASE_TABS = [
  { id: 'all', label: 'All 30 Units', count: 30 },
  { id: 'n5', label: '🌸 Foundations (Units 1-10)', count: 10, range: [1, 10] },
  { id: 'n4', label: '🗾 Elementary (Units 11-18)', count: 8, range: [11, 18] },
  { id: 'n3', label: '🏯 Intermediate (Units 19-24)', count: 6, range: [19, 24] },
  { id: 'n2_n1', label: '🥋 Advanced (Units 25-30)', count: 6, range: [25, 30] },
];

export function HomeScreen() {
  const [curriculum, setCurriculum] = useState<CurriculumUnit[]>(MANABU_CURRICULUM);
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(['u1_l1']);
  const [passedGates, setPassedGates] = useState<string[]>([]);

  // Interactive Lesson Session State
  const [activeLesson, setActiveLesson] = useState<UnitLesson | null>(null);
  const [activeUnit, setActiveUnit] = useState<CurriculumUnit | null>(null);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [studyMode, setStudyMode] = useState<'comprehensive' | 'listen' | 'spell'>('comprehensive');

  // Modals matching Stitch Screens #17, #19, #20
  const [drawerLesson, setDrawerLesson] = useState<{ lesson: UnitLesson; unit: CurriculumUnit } | null>(null);
  const [gateUnit, setGateUnit] = useState<CurriculumUnit | null>(null);
  const [celebrationUnit, setCelebrationUnit] = useState<CurriculumUnit | null>(null);

  // Load completion state from local storage on mount
  useEffect(() => {
    try {
      const savedLessons = localStorage.getItem('manabu_completed_lessons');
      if (savedLessons) {
        const parsed = JSON.parse(savedLessons);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCompletedLessonIds(parsed);
        }
      }
      const savedGates = localStorage.getItem('manabu_passed_gates');
      if (savedGates) {
        const parsed = JSON.parse(savedGates);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPassedGates(parsed);
        }
      }
    } catch {}

    // Check IndexedDB cache and sync with backend SSOT
    getCachedBundle<CurriculumUnit[]>('curriculum').then((cached) => {
      if (cached && Array.isArray(cached) && cached.length > 0) {
        setCurriculum(cached);
      }
    });

    syncContentWithBackend().then((res) => {
      if (res.updated) {
        getCachedBundle<CurriculumUnit[]>('curriculum').then((fresh) => {
          if (fresh && Array.isArray(fresh) && fresh.length > 0) {
            setCurriculum(fresh);
          }
        });
      }
    });

    // Pull cloud backup from PostgreSQL (/api/v1/backup) if authenticated
    const syncFromCloud = () => {
      import('@/features/auth/repositories/syncClient').then(({ pullCloudBackup }) => {
        pullCloudBackup().then((cloudData) => {
          if (cloudData) {
            if (cloudData.completedLessons?.length) {
              setCompletedLessonIds((prev) => Array.from(new Set([...prev, ...cloudData.completedLessons])));
            }
            if (cloudData.passedGates?.length) {
              setPassedGates((prev) => Array.from(new Set([...prev, ...cloudData.passedGates])));
            }
          }
        });
      });
    };

    syncFromCloud();

    const pollInterval = setInterval(() => {
      syncFromCloud();
    }, 30000);

    const onFocus = () => syncFromCloud();
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        syncFromCloud();
      }
    });

    return () => {
      clearInterval(pollInterval);
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  const saveCompletedLesson = (id: string, unitId: string) => {
    setCompletedLessonIds((prev) => {
      const next = prev.includes(id) ? prev : [...prev, id];
      try {
        localStorage.setItem('manabu_completed_lessons', JSON.stringify(next));
      } catch {}

      import('@/features/auth/repositories/syncClient').then(({ pushCloudBackup }) => {
        pushCloudBackup(next, passedGates).catch(() => {});
      });

      return next;
    });

    const unit = curriculum.find((u) => u.id === unitId);
    if (unit) {
      const allDone = unit.lessons.every((l) => l.id === id || completedLessonIds.includes(l.id));
      if (allDone && !passedGates.includes(unit.id)) {
        setCelebrationUnit(unit);
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      }
    }
  };

  const passRevisionGate = (unitId: string) => {
    setPassedGates((prev) => {
      const next = prev.includes(unitId) ? prev : [...prev, unitId];
      try {
        localStorage.setItem('manabu_passed_gates', JSON.stringify(next));
      } catch {}
      return next;
    });
    setGateUnit(null);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  const filteredUnits = useMemo(() => {
    if (selectedPhase === 'all') return curriculum;
    const tab = PHASE_TABS.find((t) => t.id === selectedPhase);
    if (!tab || !tab.range) return curriculum;
    return curriculum.filter(
      (unit) => unit.number >= tab.range[0] && unit.number <= tab.range[1]
    );
  }, [curriculum, selectedPhase]);

  const startLesson = (lesson: UnitLesson, unit: CurriculumUnit, mode: 'comprehensive' | 'listen' | 'spell' = 'comprehensive') => {
    setActiveUnit(unit);
    setActiveLesson(lesson);
    setStudyMode(mode);
    setExerciseIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setLessonCompleted(false);
    setDrawerLesson(null);
  };

  const checkAnswer = () => {
    if (!activeLesson || !selectedOption || isAnswerChecked) return;
    const currentEx = activeLesson.exercises[exerciseIndex];
    if (!currentEx) return;

    const correct = selectedOption === currentEx.correctAnswer;
    setIsCorrect(correct);
    setIsAnswerChecked(true);

    if (correct && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      speakJapanese(currentEx.correctAnswer);
    }
  };

  const nextExercise = () => {
    if (!activeLesson) return;
    if (exerciseIndex + 1 < activeLesson.exercises.length) {
      setExerciseIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setIsCorrect(false);
    } else {
      setLessonCompleted(true);
      if (activeUnit) {
        saveCompletedLesson(activeLesson.id, activeUnit.id);
      }
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    }
  };

  const currentExercise: LessonExercise | undefined = activeLesson?.exercises[exerciseIndex];

  return (
    <AuthGate>
      <div className="bg-[#082630] text-[#f0f0f0] min-h-screen flex flex-col font-sans antialiased selection:bg-[#c74a4a] selection:text-[#f0f0f0]">
        <StitchHeader />

        <div className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
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
                    {completedLessonIds.length} <span className="text-[#5c727d] text-sm">/ 450</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#051b22] p-1.5 rounded-xl border border-[#17424f] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {PHASE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedPhase(tab.id)}
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

          <div className="space-y-6">
            {filteredUnits.map((unit) => {
              const unitLessons = unit.lessons || [];
              const unitDone = unitLessons.length > 0 && unitLessons.every((l) => completedLessonIds.includes(l.id));
              const gatePassed = passedGates.includes(unit.id);

              return (
                <div
                  key={unit.id}
                  className="bg-[#0a3240] border border-[#17424f] rounded-xl overflow-hidden shadow-sm"
                >
                  <div
                    className="px-6 py-4 border-b border-[#17424f] flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#071f27]/60"
                    style={{ borderLeftColor: unit.color || '#c74a4a', borderLeftWidth: 4 }}
                  >
                    <div className="flex items-center gap-3">
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

                    <button
                      onClick={() => setGateUnit(unit)}
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

                  <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {unitLessons.map((lesson, idx) => {
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
                              setDrawerLesson({ lesson, unit });
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
                </div>
              );
            })}
          </div>
        </div>

        {drawerLesson && (
          <div className="fixed inset-0 z-50 bg-[#001017]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#0a3240] border border-[#17424f] rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 relative overflow-hidden">
              <div className="flex items-start justify-between border-b border-[#17424f] pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-[#2d1b22] border border-[#c74a4a]/40 text-[#ffb3af] text-[10px] font-bold uppercase tracking-wider">
                      Core Pattern
                    </span>
                    <span className="text-[10px] text-[#8fa2aa] font-mono uppercase">
                      Unit {drawerLesson.unit.number} • Lesson Focus
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#f0f0f0] mt-1">{drawerLesson.lesson.title}</h2>
                  <p className="text-xs text-[#8fa2aa]">{drawerLesson.lesson.subtitle}</p>
                </div>
                <button
                  onClick={() => setDrawerLesson(null)}
                  className="p-1.5 text-[#8fa2aa] hover:text-[#f0f0f0] rounded-lg bg-[#0f3947] hover:bg-[#134454] border border-[#17424f] transition"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="bg-[#051b22] border border-[#17424f] rounded-lg p-3 space-y-1.5">
                <span className="text-[10px] font-mono text-[#fbbf24] uppercase tracking-wider block font-bold">
                  CANONICAL LESSON OBJECTIVE
                </span>
                <p className="text-xs text-[#8fa2aa] leading-relaxed">
                  Complete all structured exercises to master inflection, contextual nuance, and listening synthesis.
                </p>
              </div>

              <div className="space-y-2.5">
                <span className="text-[10px] font-mono text-[#8fa2aa] uppercase tracking-wider block">
                  Choose Practice Instrument
                </span>

                <button
                  onClick={() => startLesson(drawerLesson.lesson, drawerLesson.unit, 'comprehensive')}
                  className="w-full p-3.5 rounded-xl bg-[#0f3947] border-2 border-[#c74a4a] hover:bg-[#134454] text-left transition flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#c74a4a] flex items-center justify-center text-white shadow-md">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-[#f0f0f0]">Comprehensive Study</h3>
                        <span className="bg-[#c74a4a] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase">
                          Recommended
                        </span>
                      </div>
                      <p className="text-xs text-[#8fa2aa]">Balanced grammar cloze, spelling &amp; SRS math</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-[#ffb3af] group-hover:translate-x-1 transition" />
                </button>

                <button
                  onClick={() => startLesson(drawerLesson.lesson, drawerLesson.unit, 'listen')}
                  className="w-full p-3.5 rounded-xl bg-[#00161e] border border-[#17424f] hover:border-[#38bdf8]/60 hover:bg-[#071f27] text-left transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#082f49] border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8]">
                      <Headphones size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#f0f0f0]">Listening Drill</h3>
                      <p className="text-xs text-[#8fa2aa]">Audio-first comprehension with Tokyo pitch</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-[#8fa2aa] group-hover:text-white transition" />
                </button>

                <button
                  onClick={() => startLesson(drawerLesson.lesson, drawerLesson.unit, 'spell')}
                  className="w-full p-3.5 rounded-xl bg-[#00161e] border border-[#17424f] hover:border-[#38bdf8]/60 hover:bg-[#071f27] text-left transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0f3947] border border-[#17424f] flex items-center justify-center text-[#a8ccde]">
                      <PenTool size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#f0f0f0]">Spelling &amp; Recall Drill</h3>
                      <p className="text-xs text-[#8fa2aa]">Writing and active reproduction focus</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-[#8fa2aa] group-hover:text-white transition" />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeLesson && (
          <div className="fixed inset-0 z-50 bg-[#001017]/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#0a3240] border border-[#17424f] rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl space-y-6 relative">
              <button
                onClick={() => setActiveLesson(null)}
                className="absolute top-5 right-5 p-2 text-[#8fa2aa] hover:text-[#f0f0f0] bg-[#0f3947] border border-[#17424f] rounded-lg transition"
              >
                <X size={18} />
              </button>

              {!lessonCompleted ? (
                <>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#8fa2aa]">
                      <span>
                        Question {exerciseIndex + 1} of {activeLesson.exercises.length}
                      </span>
                      <span className="capitalize text-[#ffb3af] font-semibold">{studyMode} Mode</span>
                    </div>
                    <div className="w-full bg-[#051b22] border border-[#17424f] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#c74a4a] h-full transition-all duration-300"
                        style={{
                          width: `${((exerciseIndex + 1) / activeLesson.exercises.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {currentExercise && (
                    <div className="space-y-6 py-4">
                      <div className="text-center space-y-2">
                        {currentExercise.character && (
                          <div className="text-6xl font-black font-serif text-[#f0f0f0] tracking-widest my-2">
                            {currentExercise.character}
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-[#f0f0f0]">{currentExercise.prompt}</h3>
                        {currentExercise.subPrompt && (
                          <p className="text-sm text-[#8fa2aa]">{currentExercise.subPrompt}</p>
                        )}
                        <button
                          onClick={() => speakJapanese(currentExercise.correctAnswer)}
                          className="inline-flex items-center gap-1.5 text-xs text-[#ffb3af] hover:text-white font-semibold px-3 py-1 bg-[#2d1b22] rounded-lg border border-[#c74a4a]/40 mt-1 transition"
                        >
                          <Volume2 size={14} /> Listen Pronunciation
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {currentExercise.options.map((opt) => {
                          const isSelected = selectedOption === opt;
                          let btnStyle = 'bg-[#00161e] border-[#17424f] text-[#f0f0f0] hover:bg-[#134454]';
                          if (isAnswerChecked) {
                            if (opt === currentExercise.correctAnswer) {
                              btnStyle = 'bg-[#063b28] border-[#34d399] text-[#34d399] font-bold';
                            } else if (isSelected) {
                              btnStyle = 'bg-[#93000a]/50 border-[#ffb4ab] text-[#ffb4ab] font-bold';
                            }
                          } else if (isSelected) {
                            btnStyle = 'bg-[#2d1b22] border-[#c74a4a] text-white font-bold shadow-sm';
                          }

                          return (
                            <button
                              key={opt}
                              disabled={isAnswerChecked}
                              onClick={() => setSelectedOption(opt)}
                              className={`p-4 rounded-xl border text-center text-base font-semibold transition ${btnStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      <div className="pt-4 border-t border-[#17424f] flex items-center justify-between">
                        {isAnswerChecked ? (
                          <div className="text-sm font-semibold flex items-center gap-2">
                            {isCorrect ? (
                              <span className="text-[#34d399] flex items-center gap-1.5">
                                <CheckCircle2 size={18} /> Correct! Excellent work.
                              </span>
                            ) : (
                              <span className="text-[#ffb4ab]">
                                Answer: <strong className="text-white">{currentExercise.correctAnswer}</strong>
                              </span>
                            )}
                          </div>
                        ) : (
                          <div />
                        )}

                        {!isAnswerChecked ? (
                          <button
                            disabled={!selectedOption}
                            onClick={checkAnswer}
                            className="px-6 py-2.5 bg-[#c74a4a] hover:bg-[#d95a5a] disabled:opacity-40 text-white rounded-lg text-xs font-bold shadow-md transition"
                          >
                            Check Answer
                          </button>
                        ) : (
                          <button
                            onClick={nextExercise}
                            className="px-6 py-2.5 bg-[#c74a4a] hover:bg-[#d95a5a] text-white rounded-lg text-xs font-bold shadow-md transition flex items-center gap-2"
                          >
                            <span>Continue</span>
                            <ArrowRight size={15} />
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-[#063b28] border border-[#34d399] text-[#34d399] mx-auto flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-white">Lesson Completed!</h3>
                  <p className="text-sm text-[#8fa2aa] max-w-sm mx-auto">
                    You earned <strong className="text-[#fbbf24]">+{activeLesson.xpReward} XP</strong> and unlocked the next study node in your journey.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setActiveLesson(null)}
                      className="px-8 py-2.5 bg-[#c74a4a] hover:bg-[#d95a5a] text-white rounded-lg text-xs font-bold shadow-lg transition"
                    >
                      Return to Curriculum
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {gateUnit && (
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
                  onClick={() => setGateUnit(null)}
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
                  onClick={() => setGateUnit(null)}
                  className="flex-1 py-2.5 rounded-lg border border-[#17424f] hover:bg-[#0f3947] text-xs font-semibold text-[#8fa2aa] transition"
                >
                  Close
                </button>
                <button
                  onClick={() => passRevisionGate(gateUnit.id)}
                  className="flex-1 py-2.5 rounded-lg bg-[#c74a4a] hover:bg-[#d95a5a] text-white text-xs font-bold transition shadow-md"
                >
                  Pass Revision Checkpoint
                </button>
              </div>
            </div>
          </div>
        )}

        {celebrationUnit && (
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
                onClick={() => setCelebrationUnit(null)}
                className="w-full py-2.5 rounded-lg bg-[#c74a4a] hover:bg-[#d95a5a] text-white text-xs font-bold shadow-lg transition"
              >
                Continue Dojo Journey
              </button>
            </div>
          </div>
        )}
      </div>
    </AuthGate>
  );
}
