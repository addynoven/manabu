import { z } from 'zod';

export const MasteryLevelSchema = z.enum(['mastered', 'learning', 'needs-practice']);
export type MasteryLevel = z.infer<typeof MasteryLevelSchema>;

export const SrsStageSchema = z.enum([
  'apprentice-1',
  'apprentice-2',
  'apprentice-3',
  'apprentice-4',
  'guru-1',
  'guru-2',
  'master',
  'enlightened',
  'burned',
]);
export type SrsStage = z.infer<typeof SrsStageSchema>;

export const CharacterMasterySchema = z.object({
  character: z.string(),
  category: z.enum(['kana', 'kanji', 'vocab']),
  correct: z.number().default(0),
  incorrect: z.number().default(0),
  total: z.number().default(0),
  accuracy: z.number().default(0),
  masteryLevel: MasteryLevelSchema.default('learning'),
  lastPracticedAt: z.string().nullable().default(null),
  srsStage: SrsStageSchema.default('apprentice-1'),
  nextReviewAt: z.string().nullable().default(null),
  intervalDays: z.number().default(0.16),
  streak: z.number().default(0),
});
export type CharacterMastery = z.infer<typeof CharacterMasterySchema>;

export const UserStatsSchema = z.object({
  currentStreak: z.number().default(0),
  bestStreak: z.number().default(0),
  lastActiveDate: z.string().nullable().default(null),
  totalQuestionsAnswered: z.number().default(0),
  totalCorrect: z.number().default(0),
  totalXp: z.number().default(0),
  todayXp: z.number().default(0),
  todayDate: z.string().nullable().default(null),
  dailyGoalXp: z.number().default(50),
  displayName: z.string().default('Manabu Student'),
  avatarEmoji: z.string().default('🥋'),
  joinedDate: z.string().default('2026-09-28'),
  kanaPracticedCount: z.number().default(0),
  kanjiPracticedCount: z.number().default(0),
  vocabPracticedCount: z.number().default(0),
  mastery: z.record(z.string(), CharacterMasterySchema).default({}),
});

export type UserStats = z.infer<typeof UserStatsSchema>;

export const BackupDataSchema = z.object({
  version: z.number(),
  exportedAt: z.string(),
  stats: UserStatsSchema,
});
export type BackupData = z.infer<typeof BackupDataSchema>;
