'use client';

import React, { useState, useMemo, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { AuthGate } from '@/features/auth/components/AuthGate';
import { StitchHeader } from '@/core/components/StitchHeader';
import { MANABU_CURRICULUM, CurriculumUnit, UnitLesson, LessonExercise } from '../../models/curriculum';
import { speakJapanese } from '../../models/kana';
import { syncContentWithBackend, getCachedBundle } from '../../store/contentStore';
import {
  HomeHeroBanner,
  PhaseTabSelector,
  UnitAccordionCard,
  LessonDrawerModal,
  ExerciseRunnerModal,
  GateCheckpointModal,
  CelebrationModal,
  PHASE_TABS,
} from './components';

export function HomeScreen() {
  const [curriculum, setCurriculum] = useState<CurriculumUnit[]>(MANABU_CURRICULUM);
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(['u1_l1']);
  const [passedGates, setPassedGates] = useState<string[]>([]);

  // Accordion Units state
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({ u1: true });

  // Teuida Pacing Cooldown state
  const [cooldownEndTime, setCooldownEndTime] = useState<number | null>(null);
  const [cooldownClock, setCooldownClock] = useState<string>('04:59');

  // Interactive Lesson Session State
  const [activeLesson, setActiveLesson] = useState<UnitLesson | null>(null);
  const [activeUnit, setActiveUnit] = useState<CurriculumUnit | null>(null);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [studyMode, setStudyMode] = useState<'comprehensive' | 'listen' | 'speak' | 'spell'>('comprehensive');

  // Modals
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
      const savedCooldown = localStorage.getItem('manabu_pacing_cooldown');
      if (savedCooldown) {
        const end = Number(savedCooldown);
        if (end > Date.now()) {
          setCooldownEndTime(end);
        }
      }
    } catch {}

    getCachedBundle<CurriculumUnit[]>('curriculum').then((cached) => {
      if (cached && Array.isArray(cached) && cached.length > 0) {
        const jsonStr = JSON.stringify(cached);
        if (jsonStr.includes('Antonym phrase') || jsonStr.includes('Incorrect pronunciation')) {
          setCurriculum(MANABU_CURRICULUM);
        } else {
          setCurriculum(cached);
        }
      } else {
        setCurriculum(MANABU_CURRICULUM);
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

    const pollInterval = setInterval(() => syncFromCloud(), 30000);
    const onFocus = () => syncFromCloud();
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') syncFromCloud();
    });

    return () => {
      clearInterval(pollInterval);
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  // Cooldown timer interval
  useEffect(() => {
    if (!cooldownEndTime) return;

    const interval = setInterval(() => {
      const remaining = Math.max(0, cooldownEndTime - Date.now());
      if (remaining <= 0) {
        setCooldownEndTime(null);
        try {
          localStorage.removeItem('manabu_pacing_cooldown');
        } catch {}
      } else {
        const mins = Math.floor(remaining / 60000);
        const secs = Math.floor((remaining % 60000) / 1000);
        setCooldownClock(`${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [cooldownEndTime]);

  const toggleUnitExpand = (unitId: string) => {
    setExpandedUnits((prev) => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  const addLessonItemsToSrsDeck = (lesson: UnitLesson) => {
    try {
      const existingDeckJson = localStorage.getItem('manabu_web_srs_deck');
      const existingDeck: Array<{
        id: string;
        kanji: string;
        kana: string;
        meaning: string;
        stage: number;
        dueAt: number;
        stability?: number;
        difficulty?: number;
        reps?: number;
      }> = existingDeckJson ? JSON.parse(existingDeckJson) : [];

      const existingIds = new Set(existingDeck.map((d) => d.id));
      const newItems: typeof existingDeck = [];

      for (const ex of lesson.exercises) {
        if (!existingIds.has(ex.id)) {
          const kanji =
            ex.character ||
            (ex.correctAnswer && /[\u3040-\u30ff\u4e00-\u9faf]/.test(ex.correctAnswer) ? ex.correctAnswer : null) ||
            (ex.options?.find((opt) => /[\u3040-\u30ff\u4e00-\u9faf]/.test(opt))) ||
            '';

          if (kanji) {
            const kana = ex.subPrompt ? ex.subPrompt.split('•')[0].trim() : kanji;
            const meaning = (ex.prompt || '').replace(/^(pronounce|choose|select|type|write|translate):\s*/i, '').trim();

            newItems.push({
              id: ex.id,
              kanji,
              kana,
              meaning: meaning || ex.correctAnswer,
              stage: 1,
              dueAt: Date.now(),
              stability: 0.4,
              difficulty: 5.0,
              reps: 0,
            });
            existingIds.add(ex.id);
          }
        }
      }

      if (newItems.length > 0) {
        localStorage.setItem('manabu_web_srs_deck', JSON.stringify([...newItems, ...existingDeck]));
      }
    } catch (err) {
      console.error('[HomeScreen] Failed to add lesson items to SRS deck:', err);
    }
  };

  const saveCompletedLesson = (lesson: UnitLesson, unitId: string) => {
    const id = lesson.id;
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

    addLessonItemsToSrsDeck(lesson);

    const nextEnd = Date.now() + 5 * 60 * 1000;
    setCooldownEndTime(nextEnd);
    try {
      localStorage.setItem('manabu_pacing_cooldown', String(nextEnd));
    } catch {}

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

  const handleInstantBypassCooldown = () => {
    setCooldownEndTime(null);
    try {
      localStorage.removeItem('manabu_pacing_cooldown');
    } catch {}
  };

  const launchEarlyUnlockReTest = (targetLesson: UnitLesson, unit: CurriculumUnit) => {
    const syntheticExercises: LessonExercise[] = [
      {
        id: 'retest_ex1',
        type: 'select',
        prompt: `Re-Test: Select definition for ${targetLesson.title}`,
        options: [targetLesson.subtitle, 'Incorrect Answer A', 'Incorrect Answer B', 'Incorrect Answer C'],
        correctAnswer: targetLesson.subtitle,
        explanation: 'Re-test verification',
      },
      {
        id: 'retest_ex2',
        type: 'select',
        prompt: `Re-Test: Pronunciation recall test`,
        options: ['はい', 'いいえ', 'すみません', 'ありがとう'],
        correctAnswer: 'はい',
        explanation: 'Re-test verification',
      },
      {
        id: 'retest_ex3',
        type: 'select',
        prompt: `Re-Test: Final synthesis verification`,
        options: ['Correct Option', 'Distractor A', 'Distractor B', 'Distractor C'],
        correctAnswer: 'Correct Option',
        explanation: 'Re-test verification',
      },
    ];

    const retestLesson: UnitLesson = {
      id: `retest_${targetLesson.id}`,
      lessonNumber: targetLesson.lessonNumber || 1,
      title: `⚡ Re-Test: Unlock ${targetLesson.title}`,
      subtitle: `Bypass cooldown by scoring 100% on this 3-question revision re-test`,
      xpReward: 15,
      exercises: syntheticExercises,
    };

    setDrawerLesson(null);
    handleInstantBypassCooldown();
    startLesson(retestLesson, unit, 'comprehensive');
  };

  const filteredUnits = useMemo(() => {
    if (selectedPhase === 'all') return curriculum;
    const tab = PHASE_TABS.find((t) => t.id === selectedPhase);
    if (!tab || !tab.range) return curriculum;
    return curriculum.filter((unit) => unit.number >= tab.range[0] && unit.number <= tab.range[1]);
  }, [curriculum, selectedPhase]);

  const startLesson = (
    lesson: UnitLesson,
    unit: CurriculumUnit,
    mode: 'comprehensive' | 'listen' | 'speak' | 'spell' = 'comprehensive'
  ) => {
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
        saveCompletedLesson(activeLesson, activeUnit.id);
      }
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    }
  };

  return (
    <AuthGate>
      <div className="bg-[#082630] text-[#f0f0f0] min-h-screen flex flex-col font-sans antialiased selection:bg-[#c74a4a] selection:text-[#f0f0f0]">
        <StitchHeader />

        <div className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
          <HomeHeroBanner completedCount={completedLessonIds.length} />

          <PhaseTabSelector selectedPhase={selectedPhase} onSelectPhase={setSelectedPhase} />

          <div className="space-y-6">
            {filteredUnits.map((unit) => (
              <UnitAccordionCard
                key={unit.id}
                unit={unit}
                isExpanded={!!expandedUnits[unit.id]}
                completedLessonIds={completedLessonIds}
                passedGates={passedGates}
                onToggleExpand={toggleUnitExpand}
                onOpenGateModal={setGateUnit}
                onSelectLessonNode={(lesson, u) => setDrawerLesson({ lesson, unit: u })}
              />
            ))}
          </div>
        </div>

        <LessonDrawerModal
          drawerLesson={drawerLesson}
          completedLessonIds={completedLessonIds}
          cooldownEndTime={cooldownEndTime}
          cooldownClock={cooldownClock}
          onClose={() => setDrawerLesson(null)}
          onStartLesson={startLesson}
          onLaunchEarlyUnlock={launchEarlyUnlockReTest}
          onInstantBypassCooldown={handleInstantBypassCooldown}
        />

        <ExerciseRunnerModal
          activeLesson={activeLesson}
          studyMode={studyMode}
          exerciseIndex={exerciseIndex}
          selectedOption={selectedOption}
          isAnswerChecked={isAnswerChecked}
          isCorrect={isCorrect}
          lessonCompleted={lessonCompleted}
          onClose={() => setActiveLesson(null)}
          onSelectOption={setSelectedOption}
          onCheckAnswer={checkAnswer}
          onNextExercise={nextExercise}
        />

        <GateCheckpointModal
          gateUnit={gateUnit}
          passedGates={passedGates}
          onClose={() => setGateUnit(null)}
          onPassGate={passRevisionGate}
        />

        <CelebrationModal
          celebrationUnit={celebrationUnit}
          onClose={() => setCelebrationUnit(null)}
        />
      </div>
    </AuthGate>
  );
}
