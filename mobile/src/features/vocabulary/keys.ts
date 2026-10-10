import type { VocabLevel } from './models/vocabulary.model';

export const vocabKeys = {
  all: ['vocabulary'] as const,
  byLevel: (level: VocabLevel) => [...vocabKeys.all, 'level', level] as const,
};
