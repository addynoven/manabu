import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { clientStorage } from '../../../core/storage/mmkv';
import { CURATED_DOJO_UNITS } from '../data/curatedUnits';
import type { LessonProgress } from '../models/dojo.model';

export const COOLDOWN_DURATION_MS = 2 * 60 * 60 * 1000; // 2 hours strict Teuida cooldown

interface DojoState {
  completedLessons: Record<string, LessonProgress>;
  cooldownUntil: string | null; // ISO string
  passedRevisionGates: Record<string, boolean>;
  activeLessonId: string;

  completeLesson: (lessonId: string, score: number) => void;
  passRevisionGate: (unitId: string) => void;
  isLessonLocked: (lessonId: string) => {
    locked: boolean;
    reason?: 'cooldown' | 'prerequisite' | 'revision_gate';
    remainingSeconds?: number;
  };
  getCooldownRemaining: () => number; // in seconds
  resetDojoProgress: () => void;
}

export const useDojoStore = create<DojoState>()(
  persist(
    (set, get) => ({
      completedLessons: {},
      cooldownUntil: null,
      passedRevisionGates: {},
      activeLessonId: 'u1_l1',

      completeLesson: (lessonId: string, score: number) => {
        const now = Date.now();
        const cooldownTimestamp = new Date(now + COOLDOWN_DURATION_MS).toISOString();

        set(state => ({
          completedLessons: {
            ...state.completedLessons,
            [lessonId]: {
              completedAt: new Date(now).toISOString(),
              score,
            },
          },
          cooldownUntil: cooldownTimestamp,
        }));
      },

      passRevisionGate: (unitId: string) => {
        set(state => ({
          passedRevisionGates: {
            ...state.passedRevisionGates,
            [unitId]: true,
          },
        }));
      },

      getCooldownRemaining: () => {
        const { cooldownUntil } = get();
        if (!cooldownUntil) return 0;
        const remainingMs = new Date(cooldownUntil).getTime() - Date.now();
        return remainingMs > 0 ? Math.ceil(remainingMs / 1000) : 0;
      },

      isLessonLocked: (lessonId: string) => {
        // Find lesson and unit
        let targetUnitIndex = -1;
        let targetLessonIndex = -1;

        for (let u = 0; u < CURATED_DOJO_UNITS.length; u++) {
          const unit = CURATED_DOJO_UNITS[u];
          const lIdx = unit.lessons.findIndex(l => l.id === lessonId);
          if (lIdx !== -1) {
            targetUnitIndex = u;
            targetLessonIndex = lIdx;
            break;
          }
        }

        // If not found or first lesson, not locked by prerequisite
        if (targetUnitIndex === -1) return { locked: false };
        if (targetUnitIndex === 0 && targetLessonIndex === 0) return { locked: false };

        const { completedLessons, passedRevisionGates, getCooldownRemaining } = get();

        // 1. Check if previous lesson in same unit was completed
        if (targetLessonIndex > 0) {
          const prevLesson = CURATED_DOJO_UNITS[targetUnitIndex].lessons[targetLessonIndex - 1];
          if (!completedLessons[prevLesson.id]) {
            return { locked: true, reason: 'prerequisite' };
          }

          // 2. Check if cooldown is active after completing previous lesson
          const cooldownSecs = getCooldownRemaining();
          if (cooldownSecs > 0 && !completedLessons[lessonId]) {
            return { locked: true, reason: 'cooldown', remainingSeconds: cooldownSecs };
          }

          return { locked: false };
        }

        // 3. First lesson of a new unit: requires previous unit's revision gate to be passed
        if (targetUnitIndex > 0 && targetLessonIndex === 0) {
          const prevUnit = CURATED_DOJO_UNITS[targetUnitIndex - 1];
          if (!passedRevisionGates[prevUnit.id]) {
            return { locked: true, reason: 'revision_gate' };
          }

          const cooldownSecs = getCooldownRemaining();
          if (cooldownSecs > 0 && !completedLessons[lessonId]) {
            return { locked: true, reason: 'cooldown', remainingSeconds: cooldownSecs };
          }

          return { locked: false };
        }

        return { locked: false };
      },

      resetDojoProgress: () => {
        set({
          completedLessons: {},
          cooldownUntil: null,
          passedRevisionGates: {},
          activeLessonId: 'u1_l1',
        });
      },
    }),
    {
      name: 'manabu-dojo-storage',
      storage: createJSONStorage(() => clientStorage),
    },
  ),
);
