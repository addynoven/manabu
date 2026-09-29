import { z } from 'zod';

export const KanaGameModeSchema = z.enum([
  'pick',
  'reverse-pick',
  'input',
  'reverse-input',
]);
export type KanaGameMode = z.infer<typeof KanaGameModeSchema>;

export const KanaCharacterSchema = z.object({
  kana: z.string(),
  romaji: z.string(),
  altRomaji: z.array(z.string()).default([]),
  group: z.string(),
  isKatakana: z.boolean().default(false),
});
export type KanaCharacter = z.infer<typeof KanaCharacterSchema>;

export const KanaGroupSchema = z.object({
  id: z.number(),
  groupName: z.string(),
  category: z.enum(['main', 'dakuten', 'combos', 'challenge']),
  script: z.enum(['hiragana', 'katakana', 'mixed']),
  kana: z.array(z.string()),
  romaji: z.array(z.string()),
  altRomaji: z.array(z.array(z.string())).optional(),
});
export type KanaGroup = z.infer<typeof KanaGroupSchema>;

export const KanaQuestionSchema = z.object({
  id: z.string(),
  target: KanaCharacterSchema,
  prompt: z.string(),
  promptSub: z.string().optional(),
  options: z.array(z.string()).optional(),
  correctAnswer: z.string(),
  mode: KanaGameModeSchema,
});
export type KanaQuestion = z.infer<typeof KanaQuestionSchema>;
