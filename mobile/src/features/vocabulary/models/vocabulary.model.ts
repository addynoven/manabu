import { z } from 'zod';

export const VocabLevelSchema = z.enum(['n5', 'n4', 'n3', 'n2', 'n1']);
export type VocabLevel = z.infer<typeof VocabLevelSchema>;

export const VocabEntrySchema = z.object({
  jmdict_seq: z.string(),
  kana: z.string(),
  kanji: z.string(),
  waller_definition: z.string(),
  level: VocabLevelSchema.optional(),
});
export type VocabEntry = z.infer<typeof VocabEntrySchema>;

export const VocabQuestionSchema = z.object({
  id: z.string(),
  entry: VocabEntrySchema,
  prompt: z.string(),
  promptReading: z.string(),
  options: z.array(z.string()),
  correctAnswer: z.string(),
});
export type VocabQuestion = z.infer<typeof VocabQuestionSchema>;
