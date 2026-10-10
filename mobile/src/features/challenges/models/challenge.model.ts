import { z } from 'zod';

export const BlitzDurationSchema = z.union([
  z.literal(30),
  z.literal(60),
  z.literal(120),
]);
export type BlitzDuration = z.infer<typeof BlitzDurationSchema>;

export const BlitzStatsSchema = z.object({
  bestScore: z.number().default(0),
  bestStreak: z.number().default(0),
  sessionsCompleted: z.number().default(0),
});
export type BlitzStats = z.infer<typeof BlitzStatsSchema>;

export const GauntletDifficultySchema = z.enum([
  'normal',
  'hard',
  'instant-death',
]);
export type GauntletDifficulty = z.infer<typeof GauntletDifficultySchema>;

export const GauntletStatsSchema = z.object({
  clears: z.number().default(0),
  attempts: z.number().default(0),
  bestStreak: z.number().default(0),
});
export type GauntletStats = z.infer<typeof GauntletStatsSchema>;

export interface ChallengeQuestion {
  id: string;
  prompt: string;
  promptSub?: string;
  options: string[];
  correctAnswer: string;
  characterKey: string;
  category: 'kana' | 'kanji' | 'vocab';
}

export const GAUNTLET_DIFFICULTY_INFO: Record<
  GauntletDifficulty,
  { label: string; icon: string; lives: number; regenerates: boolean; desc: string }
> = {
  normal: {
    label: 'Normal',
    icon: '🛡️',
    lives: 3,
    regenerates: true,
    desc: '3 Lives. 1 heart restored every 5-streak.',
  },
  hard: {
    label: 'Hard',
    icon: '⚔️',
    lives: 3,
    regenerates: false,
    desc: '3 Lives. No health regeneration.',
  },
  'instant-death': {
    label: 'YOLO',
    icon: '💀',
    lives: 1,
    regenerates: false,
    desc: '1 Life. One mistake and game over.',
  },
};
