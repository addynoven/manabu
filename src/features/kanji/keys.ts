import type { KanjiLevel } from './models/kanji.model';

export const kanjiKeys = {
  all: ['kanji'] as const,
  byLevel: (level: KanjiLevel) => [...kanjiKeys.all, 'level', level] as const,
};
