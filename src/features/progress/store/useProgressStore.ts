import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { clientStorage } from '../../../core/storage/mmkv';
import {
  type BackupData,
  BackupDataSchema,
  type CharacterMastery,
  type MasteryLevel,
  type UserStats,
} from '../models/progress.model';
import { useAchievementStore } from '../../achievements/store/useAchievementStore';

interface ProgressState extends UserStats {
  recordAnswer: (
    characterKey: string,
    isCorrect: boolean,
    category: 'kana' | 'kanji' | 'vocab',
  ) => void;
  getCharacterMastery: (characterKey: string) => CharacterMastery | null;
  getWeakestCharacters: (
    category?: 'kana' | 'kanji' | 'vocab',
    limit?: number,
  ) => CharacterMastery[];
  getStrongestCharacters: (
    category?: 'kana' | 'kanji' | 'vocab',
    limit?: number,
  ) => CharacterMastery[];
  getMasteredCharacters: (
    category?: 'kana' | 'kanji' | 'vocab',
  ) => CharacterMastery[];
  getMasteryDistribution: (category?: 'kana' | 'kanji' | 'vocab') => {
    mastered: number;
    learning: number;
    needsPractice: number;
    total: number;
  };
  exportBackup: () => string;
  importBackup: (jsonString: string) => { success: boolean; error?: string };
  resetAllStats: () => void;
}

function calculateMasteryLevel(correct: number, total: number): MasteryLevel {
  const accuracy = Math.round((correct / total) * 100);
  // Match vision/kana-dojo: 10+ attempts with >=90% accuracy for mastered
  if (total >= 10 && accuracy >= 90) {
    return 'mastered';
  }
  // Match vision/kana-dojo: 5+ attempts with <70% accuracy for needs-practice
  if (total >= 5 && accuracy < 70) {
    return 'needs-practice';
  }
  return 'learning';
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      currentStreak: 0,
      bestStreak: 0,
      lastActiveDate: null,
      totalQuestionsAnswered: 0,
      totalCorrect: 0,
      totalXp: 0,
      kanaPracticedCount: 0,
      kanjiPracticedCount: 0,
      vocabPracticedCount: 0,
      mastery: {},

      recordAnswer: (characterKey, isCorrect, category) => {
        const today = new Date().toISOString().slice(0, 10);
        const { lastActiveDate, currentStreak, bestStreak, mastery } = get();

        let nextStreak = currentStreak;
        if (!lastActiveDate) {
          nextStreak = 1;
        } else if (lastActiveDate !== today) {
          const lastDate = new Date(lastActiveDate);
          const currentDate = new Date(today);
          const diffDays = Math.round(
            (currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24),
          );

          if (diffDays === 1) {
            nextStreak = currentStreak + 1;
          } else if (diffDays > 1) {
            nextStreak = 1;
          }
        }

        const xpGained = isCorrect ? 10 : 2;

        // Update character mastery
        const prevRecord = mastery[characterKey] || {
          character: characterKey,
          category,
          correct: 0,
          incorrect: 0,
          total: 0,
          accuracy: 0,
          masteryLevel: 'learning' as MasteryLevel,
          lastPracticedAt: null,
        };

        const newCorrect = isCorrect ? prevRecord.correct + 1 : prevRecord.correct;
        const newIncorrect = !isCorrect
          ? prevRecord.incorrect + 1
          : prevRecord.incorrect;
        const newTotal = newCorrect + newIncorrect;
        const newAccuracy = Math.round((newCorrect / newTotal) * 100);
        const newMasteryLevel = calculateMasteryLevel(newCorrect, newTotal);

        const updatedMastery: Record<string, CharacterMastery> = {
          ...mastery,
          [characterKey]: {
            character: characterKey,
            category,
            correct: newCorrect,
            incorrect: newIncorrect,
            total: newTotal,
            accuracy: newAccuracy,
            masteryLevel: newMasteryLevel,
            lastPracticedAt: new Date().toISOString(),
          },
        };

        set(state => ({
          currentStreak: nextStreak,
          bestStreak: Math.max(nextStreak, bestStreak),
          lastActiveDate: today,
          totalQuestionsAnswered: state.totalQuestionsAnswered + 1,
          totalCorrect: isCorrect ? state.totalCorrect + 1 : state.totalCorrect,
          totalXp: state.totalXp + xpGained,
          kanaPracticedCount:
            category === 'kana'
              ? state.kanaPracticedCount + 1
              : state.kanaPracticedCount,
          kanjiPracticedCount:
            category === 'kanji'
              ? state.kanjiPracticedCount + 1
              : state.kanjiPracticedCount,
          vocabPracticedCount:
            category === 'vocab'
              ? state.vocabPracticedCount + 1
              : state.vocabPracticedCount,
          mastery: updatedMastery,
        }));

        // Check and unlock achievements
        const updated = get();
        const masteredCount = Object.values(updatedMastery).filter(
          m => m.masteryLevel === 'mastered',
        ).length;

        useAchievementStore.getState().checkAchievements({
          streak: nextStreak,
          totalCorrect: updated.totalCorrect,
          masteredCount,
          kanaCount: updated.kanaPracticedCount,
          kanjiCount: updated.kanjiPracticedCount,
          vocabCount: updated.vocabPracticedCount,
        });
      },

      getCharacterMastery: characterKey => {
        return get().mastery[characterKey] || null;
      },

      getWeakestCharacters: (category, limit = 5) => {
        const records = Object.values(get().mastery);
        const filtered = category
          ? records.filter(r => r.category === category)
          : records;

        // Weakest: status === 'needs-practice' or lowest accuracy with at least 1 attempt
        return filtered
          .filter(r => r.total > 0 && r.masteryLevel !== 'mastered')
          .sort((a, b) => {
            // Priority to 'needs-practice'
            if (a.masteryLevel === 'needs-practice' && b.masteryLevel !== 'needs-practice') {
              return -1;
            }
            if (b.masteryLevel === 'needs-practice' && a.masteryLevel !== 'needs-practice') {
              return 1;
            }
            // Then lowest accuracy
            if (a.accuracy !== b.accuracy) {
              return a.accuracy - b.accuracy;
            }
            // Then most incorrect
            return b.incorrect - a.incorrect;
          })
          .slice(0, limit);
      },

      getStrongestCharacters: (category, limit = 5) => {
        const records = Object.values(get().mastery);
        const filtered = category
          ? records.filter(r => r.category === category)
          : records;

        // Strongest: highest accuracy, priority to mastered, then most correct
        return filtered
          .filter(r => r.total > 0)
          .sort((a, b) => {
            if (a.masteryLevel === 'mastered' && b.masteryLevel !== 'mastered') {
              return -1;
            }
            if (b.masteryLevel === 'mastered' && a.masteryLevel !== 'mastered') {
              return 1;
            }
            if (b.accuracy !== a.accuracy) {
              return b.accuracy - a.accuracy;
            }
            return b.correct - a.correct;
          })
          .slice(0, limit);
      },

      getMasteredCharacters: category => {
        const records = Object.values(get().mastery);
        const filtered = category
          ? records.filter(r => r.category === category)
          : records;
        return filtered.filter(r => r.masteryLevel === 'mastered');
      },

      getMasteryDistribution: category => {
        const records = Object.values(get().mastery);
        const filtered = category
          ? records.filter(r => r.category === category)
          : records;

        let mastered = 0;
        let learning = 0;
        let needsPractice = 0;

        for (const item of filtered) {
          if (item.masteryLevel === 'mastered') mastered++;
          else if (item.masteryLevel === 'needs-practice') needsPractice++;
          else learning++;
        }

        return {
          mastered,
          learning,
          needsPractice,
          total: filtered.length,
        };
      },

      exportBackup: () => {
        const state = get();
        const data: BackupData = {
          version: 1,
          exportedAt: new Date().toISOString(),
          stats: {
            currentStreak: state.currentStreak,
            bestStreak: state.bestStreak,
            lastActiveDate: state.lastActiveDate,
            totalQuestionsAnswered: state.totalQuestionsAnswered,
            totalCorrect: state.totalCorrect,
            totalXp: state.totalXp,
            kanaPracticedCount: state.kanaPracticedCount,
            kanjiPracticedCount: state.kanjiPracticedCount,
            vocabPracticedCount: state.vocabPracticedCount,
            mastery: state.mastery,
          },
        };
        return JSON.stringify(data, null, 2);
      },

      importBackup: jsonString => {
        try {
          const parsed = JSON.parse(jsonString);
          const validation = BackupDataSchema.safeParse(parsed);
          if (!validation.success) {
            return {
              success: false,
              error: `Invalid backup schema: ${validation.error.issues[0]?.message || 'Validation failed'}`,
            };
          }

          const { stats } = validation.data;
          set({
            currentStreak: stats.currentStreak,
            bestStreak: stats.bestStreak,
            lastActiveDate: stats.lastActiveDate,
            totalQuestionsAnswered: stats.totalQuestionsAnswered,
            totalCorrect: stats.totalCorrect,
            totalXp: stats.totalXp,
            kanaPracticedCount: stats.kanaPracticedCount,
            kanjiPracticedCount: stats.kanjiPracticedCount,
            vocabPracticedCount: stats.vocabPracticedCount,
            mastery: stats.mastery,
          });

          return { success: true };
        } catch (e: unknown) {
          return {
            success: false,
            error: e instanceof Error ? e.message : 'Invalid JSON file',
          };
        }
      },

      resetAllStats: () =>
        set({
          currentStreak: 0,
          bestStreak: 0,
          lastActiveDate: null,
          totalQuestionsAnswered: 0,
          totalCorrect: 0,
          totalXp: 0,
          kanaPracticedCount: 0,
          kanjiPracticedCount: 0,
          vocabPracticedCount: 0,
          mastery: {},
        }),
    }),
    {
      name: 'manabu_progress_store',
      storage: createJSONStorage(() => clientStorage),
    },
  ),
);
