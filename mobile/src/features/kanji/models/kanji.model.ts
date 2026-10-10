import { z } from 'zod';

export const KanjiLevelSchema = z.enum(['N5', 'N4', 'N3', 'N2', 'N1']);
export type KanjiLevel = z.infer<typeof KanjiLevelSchema>;

export const KanjiEntrySchema = z.object({
  id: z.number(),
  kanjiChar: z.string(),
  onyomi: z.array(z.string()).default([]),
  kunyomi: z.array(z.string()).default([]),
  meanings: z.array(z.string()).default([]),
  level: KanjiLevelSchema.optional(),
});
export type KanjiEntry = z.infer<typeof KanjiEntrySchema>;

export const KanjiQuestionSchema = z.object({
  id: z.string(),
  kanji: KanjiEntrySchema,
  prompt: z.string(),
  promptSub: z.string(),
  ttsText: z.string(), // kana reading to speak — NOT the raw kanji char
  options: z.array(z.string()),
  correctAnswer: z.string(),
});
export type KanjiQuestion = z.infer<typeof KanjiQuestionSchema>;
