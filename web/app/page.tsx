'use client';

import React, { useState, useMemo, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { AuthGate } from '@/components/AuthGate';
import { StitchHeader } from '@/components/StitchHeader';
import { MANABU_CURRICULUM, CurriculumUnit, UnitLesson, LessonExercise } from '@/data/curriculum';
import { speakJapanese } from '@/data/kana';
import { syncContentWithBackend, getCachedBundle } from '@/lib/contentStore';
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

export default function LearnPathPage() {
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
      import('@/lib/syncClient').then(({ pullCloudBackup }) => {
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

    // Background periodic poll every 30 seconds (Discord / WhatsApp pattern)
    const pollInterval = setInterval(() => {
      syncFromCloud();
    }, 30000);

    // Sync immediately whenever the tab or window comes into focus
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

      // Fire and forget cloud backup sync
      import('@/lib/syncClient').then(({ pushCloudBackup }) => {
        pushCloudBackup(next, passedGates).catch(() => {});
      });

      return next;
    });

    // Check if all lessons in unit are finished to trigger Unit Celebration
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
          {/* Top Header matching Stitch Screen #1 & #11 */}
          <div className="bg-[#0a3240] border border-[#17424f] rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
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
              <div className="bg-neutral-950/80 border border-neutral-800 rounded-2xl px-5 py-3 text-center shadow-lg">
                <span className="text-[10px] text-neutral-400 uppercase font-mono block">Lessons Cleared</span>
                <span className="text-2xl font-bold font-mono text-emerald-400">
                  {completedLessonIds.length} <span className="text-neutral-500 text-sm">/ 450</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {PHASE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedPhase(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap border ${
                selectedPhase === tab.id
                  ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-950/50'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Units Roadmap */}
        <div className="space-y-8">
          {filteredUnits.map((unit) => {
            const unitLessons = unit.lessons || [];
            const unitDone = unitLessons.length > 0 && unitLessons.every((l) => completedLessonIds.includes(l.id));
            const gatePassed = passedGates.includes(unit.id);

            return (
              <div
                key={unit.id}
                className="bg-neutral-900/80 border border-neutral-800 rounded-3xl overflow-hidden shadow-xl"
              >
                {/* Unit Header Bar */}
                <div
                  className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between"
                  style={{ borderLeftColor: unit.color, borderLeftWidth: 4 }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm text-white shadow-md font-serif"
                      style={{ backgroundColor: unit.color }}
                    >
                      {unit.icon || `#${unit.number}`}
                    </span>
                    <div>
                      <h2 className="text-base font-bold text-white flex items-center gap-2">
                        Unit {unit.number}: {unit.title}
                        <span className="text-xs font-serif text-neutral-400 font-normal">
                          ({unit.japaneseTitle})
                        </span>
                      </h2>
                      <p className="text-xs text-neutral-400">{unit.description}</p>
                    </div>
                  </div>

                  {/* Revision Gate Trigger Badge */}
                  <button
                    onClick={() => setGateUnit(unit)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition ${
                      gatePassed
                        ? 'bg-emerald-950/60 border-emerald-800 text-emerald-400'
                        : unitDone
                        ? 'bg-amber-950/80 border-amber-600 text-amber-300 animate-pulse'
                        : 'bg-neutral-800/80 border-neutral-700 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Flag size={13} />
                    <span>{gatePassed ? 'Gate Passed' : 'Revision Gate'}</span>
                  </button>
                </div>

                {/* Lessons Grid in Unit */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                        className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                          isCompleted
                            ? 'bg-neutral-900 border-emerald-900/40 shadow-sm hover:border-emerald-700'
                            : isUnlocked
                            ? 'bg-neutral-950 border-neutral-800 hover:border-neutral-600 shadow-md hover:scale-[1.01]'
                            : 'bg-neutral-950/40 border-neutral-900 opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                              Lesson {idx + 1}
                            </span>
                            <h3 className="text-sm font-bold text-white mt-0.5">{lesson.title}</h3>
                            <p className="text-xs text-neutral-400">{lesson.subtitle}</p>
                          </div>

                          {isCompleted ? (
                            <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                          ) : isUnlocked ? (
                            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded-full">
                              +{lesson.xpReward} XP
                            </span>
                          ) : (
                            <Lock size={16} className="text-neutral-600 shrink-0" />
                          )}
                        </div>

                        <div className="flex items-center justify-between text-xs pt-3 border-t border-neutral-800/80">
                          <span className="text-neutral-500 font-mono">
                            {lesson.exercises?.length || 8} Drills
                          </span>
                          {isUnlocked && (
                            <span className="text-red-400 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition">
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

      {/* 1. Lesson Drawer Modal (Stitch Screen #17) */}
      {drawerLesson && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 font-mono">
                  Unit {drawerLesson.unit.number} • Lesson Modes
                </span>
                <h2 className="text-xl font-bold text-white mt-1">{drawerLesson.lesson.title}</h2>
                <p className="text-xs text-neutral-400">{drawerLesson.lesson.subtitle}</p>
              </div>
              <button
                onClick={() => setDrawerLesson(null)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* 3 Study Modes */}
            <div className="space-y-3">
              <button
                onClick={() => startLesson(drawerLesson.lesson, drawerLesson.unit, 'comprehensive')}
                className="w-full p-4 rounded-2xl bg-red-950/40 border border-red-800/70 hover:bg-red-900/50 text-left transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Comprehensive Drill</h3>
                    <p className="text-xs text-neutral-400">Standard balanced study session</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-neutral-500 group-hover:text-white transition" />
              </button>

              <button
                onClick={() => startLesson(drawerLesson.lesson, drawerLesson.unit, 'listen')}
                className="w-full p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-left transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-300">
                    <Headphones size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Listening Drill</h3>
                    <p className="text-xs text-neutral-400">Audio-first comprehension focus</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-neutral-500 group-hover:text-white transition" />
              </button>

              <button
                onClick={() => startLesson(drawerLesson.lesson, drawerLesson.unit, 'spell')}
                className="w-full p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-left transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-300">
                    <PenTool size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Spelling & Recall Drill</h3>
                    <p className="text-xs text-neutral-400">Writing and active reproduction focus</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-neutral-500 group-hover:text-white transition" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Interactive Lesson Stage Modal (Stitch Screen #18) */}
      {activeLesson && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl space-y-6 relative">
            <button
              onClick={() => setActiveLesson(null)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white bg-neutral-800/80 rounded-xl transition"
            >
              <X size={20} />
            </button>

            {!lessonCompleted ? (
              <>
                {/* Progress Bar & Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span>
                      Question {exerciseIndex + 1} of {activeLesson.exercises.length}
                    </span>
                    <span className="capitalize">{studyMode} Mode</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-red-600 h-full transition-all duration-300"
                      style={{
                        width: `${((exerciseIndex + 1) / activeLesson.exercises.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Exercise Stage */}
                {currentExercise && (
                  <div className="space-y-6 py-4">
                    <div className="text-center space-y-2">
                      {currentExercise.character && (
                        <div className="text-6xl font-black font-serif text-white tracking-widest my-2">
                          {currentExercise.character}
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-white">{currentExercise.prompt}</h3>
                      {currentExercise.subPrompt && (
                        <p className="text-sm text-neutral-400">{currentExercise.subPrompt}</p>
                      )}
                      <button
                        onClick={() => speakJapanese(currentExercise.correctAnswer)}
                        className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-semibold px-3 py-1 bg-red-950/40 rounded-lg border border-red-800/40 mt-1"
                      >
                        <Volume2 size={14} /> Listen Pronunciation
                      </button>
                    </div>

                    {/* Multiple Choice Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentExercise.options.map((opt) => {
                        const isSelected = selectedOption === opt;
                        let btnStyle = 'bg-neutral-950 border-neutral-800 text-neutral-200 hover:border-neutral-600';
                        if (isAnswerChecked) {
                          if (opt === currentExercise.correctAnswer) {
                            btnStyle = 'bg-emerald-950/60 border-emerald-600 text-emerald-300 font-bold';
                          } else if (isSelected) {
                            btnStyle = 'bg-red-950/60 border-red-600 text-red-300 font-bold';
                          }
                        } else if (isSelected) {
                          btnStyle = 'bg-red-950/40 border-red-600 text-white font-bold shadow-md';
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

                    {/* Feedback & Action Bar */}
                    <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                      {isAnswerChecked ? (
                        <div className="text-sm font-semibold flex items-center gap-2">
                          {isCorrect ? (
                            <span className="text-emerald-400 flex items-center gap-1.5">
                              <CheckCircle2 size={18} /> Correct! Excellent work.
                            </span>
                          ) : (
                            <span className="text-red-400">
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
                          className="px-6 py-2.5 bg-red-600 hover:bg-red-500 disabled:opacity-40 text-white rounded-xl text-sm font-bold shadow transition"
                        >
                          Check Answer
                        </button>
                      ) : (
                        <button
                          onClick={nextExercise}
                          className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl text-sm font-bold shadow transition flex items-center gap-2"
                        >
                          <span>Continue</span>
                          <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Lesson Finished Card */
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-600 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black text-white">Lesson Completed!</h3>
                <p className="text-sm text-neutral-400 max-w-sm mx-auto">
                  You earned <strong className="text-amber-400">+{activeLesson.xpReward} XP</strong> and unlocked the next study node in your journey.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setActiveLesson(null)}
                    className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl text-sm font-bold shadow-lg transition"
                  >
                    Return to Curriculum
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. Revision Gate Modal (Stitch Screen #19) */}
      {gateUnit && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5 animate-in fade-in">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-800/60 flex items-center justify-center text-amber-400">
                  <Flag size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Unit {gateUnit.number} Checkpoint</h3>
                  <p className="text-xs text-neutral-400">Cumulative Revision Gate</p>
                </div>
              </div>
              <button
                onClick={() => setGateUnit(null)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg bg-neutral-800"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Verify your mastery of all vocabulary, kanji, and grammar patterns introduced in Unit {gateUnit.number}. Passing with an 80% score clears the checkpoint and unlocks future content.
            </p>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs">
              <span className="text-neutral-400">Status</span>
              <span className="font-bold text-amber-400">
                {passedGates.includes(gateUnit.id) ? 'Cleared' : 'Pending Verification'}
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setGateUnit(null)}
                className="flex-1 py-2.5 rounded-xl border border-neutral-800 hover:bg-neutral-800 text-xs font-semibold text-neutral-400 transition"
              >
                Close
              </button>
              <button
                onClick={() => passRevisionGate(gateUnit.id)}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition shadow-md"
              >
                Pass Revision Checkpoint
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Unit Celebration Modal (Stitch Screen #20) */}
      {celebrationUnit && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-md w-full p-8 text-center space-y-6 shadow-2xl animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center text-3xl">
              🏆
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                Unit {celebrationUnit.number} Complete
              </span>
              <h2 className="text-2xl font-black text-white font-serif">{celebrationUnit.title}</h2>
              <p className="text-xs text-neutral-400 font-serif">{celebrationUnit.japaneseTitle}</p>
            </div>
            <p className="text-sm text-neutral-300">
              Outstanding work! You have finished every lesson in this unit. Checkpoint rewards have been credited to your dojo belt.
            </p>
            <button
              onClick={() => setCelebrationUnit(null)}
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-bold shadow-lg transition"
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
