import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { clientStorage } from '../../../core/storage/mmkv';
import {
  ACHIEVEMENTS,
  calculatePlayerLevel,
  type Achievement,
} from '../models/achievement.model';
import type { BlitzDuration, GauntletDifficulty } from '../../challenges/models/challenge.model';

export interface AchievementContext {
  streak?: number;
  totalCorrect?: number;
  masteredCount?: number;
  kanaCount?: number;
  kanjiCount?: number;
  vocabCount?: number;
  blitzSession?: { duration: BlitzDuration; score: number };
  gauntletResult?: { difficulty: GauntletDifficulty; cleared: boolean };
}

interface AchievementState {
  unlocked: Record<string, { unlockedAt: string }>;
  queue: Achievement[];

  unlock: (id: string) => void;
  popToast: () => void;
  checkAchievements: (context: AchievementContext) => void;
  getTotalPoints: () => number;
  getPlayerLevelInfo: () => ReturnType<typeof calculatePlayerLevel>;
  resetAchievements: () => void;
}

export const useAchievementStore = create<AchievementState>()(
  persist(
    (set, get) => ({
      unlocked: {},
      queue: [],

      resetAchievements: () => {
        set({ unlocked: {}, queue: [] });
      },

      unlock: (id: string) => {
        const { unlocked } = get();
        if (unlocked[id]) return;

        const achievement = ACHIEVEMENTS.find(a => a.id === id);
        if (!achievement) return;

        set(state => ({
          unlocked: {
            ...state.unlocked,
            [id]: { unlockedAt: new Date().toISOString() },
          },
          queue: [...state.queue, achievement],
        }));
      },

      popToast: () => {
        set(state => ({
          queue: state.queue.slice(1),
        }));
      },

      checkAchievements: (ctx: AchievementContext) => {
        const { unlock, getTotalPoints } = get();

        // 1. Streak milestones
        if (ctx.streak !== undefined) {
          if (ctx.streak >= 5) unlock('streak_5');
          if (ctx.streak >= 10) unlock('streak_10');
          if (ctx.streak >= 25) unlock('streak_25');
          if (ctx.streak >= 50) unlock('streak_50');
          if (ctx.streak >= 100) unlock('streak_100');
        }

        // 2. Correct answers milestones
        if (ctx.totalCorrect !== undefined) {
          if (ctx.totalCorrect >= 1) unlock('first_steps');
          if (ctx.totalCorrect >= 50) unlock('correct_50');
          if (ctx.totalCorrect >= 100) unlock('correct_100');
          if (ctx.totalCorrect >= 500) unlock('correct_500');
          if (ctx.totalCorrect >= 1000) unlock('correct_1000');
        }

        // 3. Character Mastery milestones
        if (ctx.masteredCount !== undefined) {
          if (ctx.masteredCount >= 1) unlock('mastery_1');
          if (ctx.masteredCount >= 10) unlock('mastery_10');
          if (ctx.masteredCount >= 25) unlock('mastery_25');
          if (ctx.masteredCount >= 50) unlock('mastery_50');
        }

        // 4. Dojo counts
        if (ctx.kanaCount !== undefined && ctx.kanaCount >= 25) {
          unlock('kana_25');
        }
        if (ctx.kanjiCount !== undefined && ctx.kanjiCount >= 25) {
          unlock('kanji_25');
        }
        if (ctx.vocabCount !== undefined && ctx.vocabCount >= 25) {
          unlock('vocab_25');
        }
        if (
          ctx.kanaCount !== undefined &&
          ctx.kanjiCount !== undefined &&
          ctx.vocabCount !== undefined &&
          ctx.kanaCount >= 1 &&
          ctx.kanjiCount >= 1 &&
          ctx.vocabCount >= 1
        ) {
          unlock('dojo_triad');
        }

        // 5. Blitz challenges
        if (ctx.blitzSession) {
          if (ctx.blitzSession.duration === 30) unlock('blitz_30s');
          if (ctx.blitzSession.duration === 60) unlock('blitz_60s');
          if (ctx.blitzSession.score >= 20) unlock('blitz_score_20');
        }

        // 6. Gauntlet challenges
        if (ctx.gauntletResult && ctx.gauntletResult.cleared) {
          if (ctx.gauntletResult.difficulty === 'normal') unlock('gauntlet_normal');
          if (ctx.gauntletResult.difficulty === 'hard') unlock('gauntlet_hard');
          if (ctx.gauntletResult.difficulty === 'instant-death') unlock('gauntlet_yolo');
        }

        // 7. Points collector
        if (getTotalPoints() >= 500) {
          unlock('points_500');
        }
      },

      getTotalPoints: () => {
        const { unlocked } = get();
        return ACHIEVEMENTS.reduce((sum, item) => {
          if (unlocked[item.id]) {
            return sum + item.points;
          }
          return sum;
        }, 0);
      },

      getPlayerLevelInfo: () => {
        const totalPoints = get().getTotalPoints();
        return calculatePlayerLevel(totalPoints);
      },
    }),
    {
      name: 'manabu-achievement-storage',
      storage: createJSONStorage(() => clientStorage),
      partialize: state => ({ unlocked: state.unlocked }),
    },
  ),
);
