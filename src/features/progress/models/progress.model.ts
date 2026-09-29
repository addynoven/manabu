import { z } from 'zod';

export const MasteryLevelSchema = z.enum(['mastered', 'learning', 'needs-practice']);
export type MasteryLevel = z.infer<typeof MasteryLevelSchema>;

export const CharacterMasterySchema = z.object({
  character: z.string(),
  category: z.enum(['kana', 'kanji', 'vocab']),
  correct: z.number().default(0),
  incorrect: z.number().default(0),
  total: z.number().default(0),
  accuracy: z.number().default(0),
  masteryLevel: MasteryLevelSchema.default('learning'),
  lastPracticedAt: z.string().nullable().default(null),
});
export type CharacterMastery = z.infer<typeof CharacterMasterySchema>;

export const UserStatsSchema = z.object({
  currentStreak: z.number().default(0),
  bestStreak: z.number().default(0),
  lastActiveDate: z.string().nullable().default(null),
  totalQuestionsAnswered: z.number().default(0),
  totalCorrect: z.number().default(0),
  totalXp: z.number().default(0),
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
