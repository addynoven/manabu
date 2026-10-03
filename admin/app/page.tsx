'use client';

import React, { useState, useMemo, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { AppShell } from '@/components/AppShell';
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
} from 'lucide-react';

const PHASE_TABS = [
  { id: 'all', label: 'All 30 Weeks', count: 30 },
  { id: 'n5', label: '🌸 Foundations & N5', count: 10, range: [1, 10] },
  { id: 'n4', label: '🗾 Elementary N4', count: 8, range: [11, 18] },
  { id: 'n3', label: '🏯 Intermediate N3', count: 6, range: [19, 24] },
  { id: 'n2_n1', label: '🥋 Advanced N2/N1', count: 6, range: [25, 30] },
];

export default function LearnPathPage() {
  const [curriculum, setCurriculum] = useState<CurriculumUnit[]>(MANABU_CURRICULUM);
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [activeLesson, setActiveLesson] = useState<UnitLesson | null>(null);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(['u1_l1']);

  // Load completion state from local storage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('manabu_completed_lessons');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCompletedLessonIds(parsed);
        }
      }
    } catch {}

    // Check IndexedDB cache and sync with backend SSOT
    getCachedBundle<CurriculumUnit[]>('curriculum').then(cached => {
      if (cached && Array.isArray(cached) && cached.length > 0) {
        setCurriculum(cached);
      }
    });

    syncContentWithBackend().then(res => {
      if (res.updated) {
        getCachedBundle<CurriculumUnit[]>('curriculum').then(fresh => {
          if (fresh && Array.isArray(fresh) && fresh.length > 0) {
            setCurriculum(fresh);
          }
        });
      }
    });
  }, []);

  const saveCompletedLesson = (id: string) => {
    setCompletedLessonIds(prev => {
      const next = prev.includes(id) ? prev : [...prev, id];
      try {
        localStorage.setItem('manabu_completed_lessons', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const filteredUnits = useMemo(() => {
    if (selectedPhase === 'all') return curriculum;
    const tab = PHASE_TABS.find(t => t.id === selectedPhase);
    if (!tab || !tab.range) return curriculum;
    return curriculum.filter(u => u.number >= tab.range[0] && u.number <= tab.range[1]);
  }, [selectedPhase, curriculum]);

  const currentExercise: LessonExercise | undefined = activeLesson?.exercises[exerciseIndex];

  const handleStartLesson = (lesson: UnitLesson) => {
    setActiveLesson(lesson);
    setExerciseIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setLessonCompleted(false);

    // Pronounce character if present
    if (lesson.exercises[0]?.character) {
      speakJapanese(lesson.exercises[0].character);
    }
  };

  const handleSelectOption = (option: string) => {
    if (isAnswerChecked) return;
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (!currentExercise || !selectedOption) return;
    const correct = selectedOption === currentExercise.correctAnswer;
    setIsCorrect(correct);
    setIsAnswerChecked(true);

    if (correct && currentExercise.character) {
      speakJapanese(currentExercise.character);
    }
  };

  const handleNextExercise = () => {
    if (!activeLesson) return;

    if (exerciseIndex + 1 < activeLesson.exercises.length) {
      const nextIdx = exerciseIndex + 1;
      setExerciseIndex(nextIdx);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setIsCorrect(false);

      if (activeLesson.exercises[nextIdx]?.character) {
        speakJapanese(activeLesson.exercises[nextIdx].character);
      }
    } else {
      // Completed lesson!
      setLessonCompleted(true);
      saveCompletedLesson(activeLesson.id);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {}
    }
  };

  const handleCloseModal = () => {
    setActiveLesson(null);
  };

  return (
    <AppShell>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Hero */}
        <div className="relative overflow-hidden bg-gradient-to-r from-neutral-900 via-neutral-900 to-red-950/40 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} /> Full 30-Week Japanese Dojo Curriculum
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Curriculum Journey • <span className="font-serif text-red-500 font-normal">学習ロードマップ</span>
              </h1>
              <p className="text-sm text-neutral-400 max-w-xl">
                Master Japanese across 30 comprehensive study units with 210 structured daily lessons, authentic pronunciation, vocabulary, kanji, and progressive review drills.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="bg-neutral-950/80 border border-neutral-800 rounded-2xl px-4 py-3 text-center">
                <span className="text-[10px] text-neutral-500 uppercase font-mono block">Lessons Done</span>
                <span className="text-xl font-bold font-mono text-emerald-400">
                  {completedLessonIds.length} / 210
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {PHASE_TABS.map(tab => (
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
        <div className="space-y-6">
          {filteredUnits.map((unit) => {
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
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm text-white shadow-md"
                      style={{ backgroundColor: unit.color }}
                    >
                      {unit.icon || `#${unit.number}`}
                    </span>
                    <div>
                      <h2 className="text-base font-bold text-white flex items-center gap-2">
                        Week {unit.number}: {unit.title}
                        <span className="text-xs font-serif text-neutral-400 font-normal">({unit.japaneseTitle})</span>
                      </h2>
                      <p className="text-xs text-neutral-400">{unit.description}</p>
                    </div>
                  </div>
                </div>

                {/* Lessons List in Unit */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {unit.lessons.map((lesson, idx) => {
                    const isCompleted = completedLessonIds.includes(lesson.id);
                    const isUnlocked =
                      unit.number === 1 ||
                      isCompleted ||
                      idx === 0 ||
                      completedLessonIds.includes(unit.lessons[idx - 1]?.id);

                    return (
                      <div
                        key={lesson.id}
                        className={`p-5 rounded-2xl border transition-all ${
                          isCompleted
                            ? 'bg-neutral-900 border-emerald-900/40 shadow-sm'
                            : isUnlocked
                            ? 'bg-neutral-950 border-neutral-800 hover:border-neutral-700 shadow-md'
                            : 'bg-neutral-950/40 border-neutral-900 opacity-60'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                              Week {unit.number} • Day {idx + 1}
                            </span>
                            <h3 className="text-sm font-bold text-white mt-0.5">{lesson.title}</h3>
                            <p className="text-xs text-neutral-400">{lesson.subtitle}</p>
                          </div>

                          {isCompleted ? (
                            <CheckCircle2 size={22} className="text-emerald-500 shrink-0" />
                          ) : isUnlocked ? (
                            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded-full">
                              +{lesson.xpReward} XP
                            </span>
                          ) : (
                            <Lock size={18} className="text-neutral-600 shrink-0" />
                          )}
                        </div>

                        <div className="pt-2 flex items-center justify-between">
                          <span className="text-[11px] text-neutral-500">
                            {lesson.exercises.length} Interactive Drills
                          </span>
                          {isUnlocked ? (
                            <button
                              onClick={() => handleStartLesson(lesson)}
                              className="bg-neutral-800 hover:bg-red-600 text-white font-medium text-xs px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5"
                            >
                              <span>{isCompleted ? 'Review' : 'Start'}</span>
                              <ArrowRight size={13} />
                            </button>
                          ) : (
                            <span className="text-[11px] text-neutral-600 font-medium">Locked</span>
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

      {/* Interactive Lesson Modal */}
      {activeLesson && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-2xl relative">
            {!lessonCompleted ? (
              <div className="space-y-6">
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div>
                    <span className="text-xs font-mono text-neutral-500">
                      Exercise {exerciseIndex + 1} of {activeLesson.exercises.length}
                    </span>
                    <h2 className="text-base font-bold text-white">{activeLesson.title}</h2>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="text-neutral-500 hover:text-white text-xs px-2 py-1 rounded-lg transition"
                  >
                    ✕ Close
                  </button>
                </div>

                {/* Question Prompt */}
                {currentExercise && (
                  <div className="space-y-6">
                    <div className="text-center space-y-3">
                      <p className="text-sm font-medium text-neutral-300">{currentExercise.prompt}</p>
                      {currentExercise.subPrompt && (
                        <p className="text-xs font-mono text-neutral-400 bg-neutral-950/60 inline-block px-3 py-1 rounded-lg border border-neutral-800">
                          {currentExercise.subPrompt}
                        </p>
                      )}
                      {currentExercise.character && (
                        <div className="flex items-center justify-center gap-3">
                          <div className="text-4xl md:text-5xl font-bold font-serif text-white py-3 px-6 bg-neutral-950 rounded-2xl border border-neutral-800 shadow-inner">
                            {currentExercise.character}
                          </div>
                          <button
                            onClick={() => speakJapanese(currentExercise.character!)}
                            className="p-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition"
                            title="Listen"
                          >
                            <Volume2 size={20} />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentExercise.options.map((opt) => {
                        const isSelected = selectedOption === opt;
                        let optionStyle = 'bg-neutral-950 border-neutral-800 hover:border-neutral-700 text-white';

                        if (isAnswerChecked) {
                          if (opt === currentExercise.correctAnswer) {
                            optionStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                          } else if (isSelected) {
                            optionStyle = 'bg-red-950/80 border-red-500 text-red-300 line-through';
                          }
                        } else if (isSelected) {
                          optionStyle = 'bg-neutral-800 border-red-500 text-white shadow-md';
                        }

                        return (
                          <button
                            key={opt}
                            disabled={isAnswerChecked}
                            onClick={() => handleSelectOption(opt)}
                            className={`p-4 rounded-2xl border text-sm font-medium text-center transition-all ${optionStyle}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback & Actions */}
                    <div className="pt-2">
                      {!isAnswerChecked ? (
                        <button
                          disabled={!selectedOption}
                          onClick={handleCheckAnswer}
                          className={`w-full py-3.5 rounded-2xl font-bold text-sm transition ${
                            selectedOption
                              ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-950/50'
                              : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                          }`}
                        >
                          Check Answer
                        </button>
                      ) : (
                        <div className="space-y-4">
                          <div
                            className={`p-4 rounded-2xl border text-xs ${
                              isCorrect
                                ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-300'
                                : 'bg-red-950/40 border-red-800/80 text-red-300'
                            }`}
                          >
                            <p className="font-bold text-sm mb-1">{isCorrect ? '✓ Correct!' : '✗ Not quite'}</p>
                            <p>{currentExercise.explanation}</p>
                          </div>

                          <button
                            onClick={handleNextExercise}
                            className="w-full py-3.5 rounded-2xl font-bold text-sm bg-neutral-100 hover:bg-white text-black transition"
                          >
                            Continue →
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Lesson Completion Card */
              <div className="text-center space-y-6 py-6">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-4xl shadow-xl shadow-emerald-950/50">
                  🎉
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl font-black text-white">Lesson Complete!</h2>
                  <p className="text-xs text-neutral-400">
                    You mastered &quot;{activeLesson.title}&quot; and earned martial study progress.
                  </p>
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4 flex items-center justify-around">
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase font-mono">XP Earned</span>
                    <p className="text-lg font-bold text-amber-400 font-mono">+{activeLesson.xpReward} XP</p>
                  </div>
                  <div className="w-px h-8 bg-neutral-800" />
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase font-mono">Accuracy</span>
                    <p className="text-lg font-bold text-emerald-400 font-mono">100%</p>
                  </div>
                  <div className="w-px h-8 bg-neutral-800" />
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase font-mono">Status</span>
                    <p className="text-lg font-bold text-white font-mono">Mastered</p>
                  </div>
                </div>

                <button
                  onClick={handleCloseModal}
                  className="w-full py-3.5 rounded-2xl font-bold text-sm bg-red-600 hover:bg-red-500 text-white transition shadow-lg shadow-red-950/50"
                >
                  Back to Learning Path
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </AppShell>
  );
}
