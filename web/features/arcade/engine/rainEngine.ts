import type { RainItem } from '../models/arcade.model';

export type RainMode = 'hiragana' | 'katakana' | 'kanji' | 'mixed';
export type RainDifficulty = 'easy' | 'medium' | 'hard';

export interface RainCandidate {
  glyph: string;
  answer: string;
  hint?: string;
  category: 'hiragana' | 'katakana' | 'kanji';
}

export const HIRAGANA_RAIN_CANDIDATES: RainCandidate[] = [
  { glyph: 'あ', answer: 'a', category: 'hiragana' },
  { glyph: 'い', answer: 'i', category: 'hiragana' },
  { glyph: 'う', answer: 'u', category: 'hiragana' },
  { glyph: 'え', answer: 'e', category: 'hiragana' },
  { glyph: 'お', answer: 'o', category: 'hiragana' },
];

export const KATAKANA_RAIN_CANDIDATES: RainCandidate[] = [
  { glyph: 'ア', answer: 'a', category: 'katakana' },
  { glyph: 'イ', answer: 'i', category: 'katakana' },
  { glyph: 'ウ', answer: 'u', category: 'katakana' },
  { glyph: 'エ', answer: 'e', category: 'katakana' },
  { glyph: 'オ', answer: 'o', category: 'katakana' },
];

export const KANJI_RAIN_CANDIDATES: RainCandidate[] = [
  { glyph: '日', answer: 'hi', hint: 'Sun / Day', category: 'kanji' },
  { glyph: '月', answer: 'tsuki', hint: 'Moon / Month', category: 'kanji' },
];

export function getCandidatesForMode(mode: RainMode): RainCandidate[] {
  switch (mode) {
    case 'hiragana':
      return HIRAGANA_RAIN_CANDIDATES;
    case 'katakana':
      return KATAKANA_RAIN_CANDIDATES;
    case 'kanji':
      return KANJI_RAIN_CANDIDATES;
    case 'mixed':
    default:
      return [
        ...HIRAGANA_RAIN_CANDIDATES,
        ...KATAKANA_RAIN_CANDIDATES,
        ...KANJI_RAIN_CANDIDATES,
      ];
  }
}

export function spawnRainItem(
  idSuffix: number,
  speedMultiplier: number = 1.0,
  mode: RainMode = 'hiragana'
): RainItem {
  const pool = getCandidatesForMode(mode);
  const chosen = pool[Math.floor(Math.random() * pool.length)];

  const distractors: string[] = [];
  let attempts = 0;
  while (distractors.length < 3 && attempts < 50) {
    attempts++;
    const candidate = pool[Math.floor(Math.random() * pool.length)];
    if (candidate.answer !== chosen.answer && !distractors.includes(candidate.answer)) {
      distractors.push(candidate.answer);
    }
  }

  const options = [chosen.answer, ...distractors].sort(() => Math.random() - 0.5);
  const column = Math.floor(Math.random() * 4);

  return {
    id: `rain-${Date.now()}-${idSuffix}`,
    glyph: chosen.glyph,
    answer: chosen.answer,
    options,
    column,
    yPosition: 0,
    speed: 0.85 * speedMultiplier,
  };
}

export function getComboMultiplier(streak: number): number {
  if (streak >= 15) return 4;
  if (streak >= 10) return 3;
  if (streak >= 5) return 2;
  return 1;
}

export function calculateDropScore(streak: number, speedMultiplier: number): number {
  const base = 10;
  const combo = getComboMultiplier(streak);
  const speedBonus = Math.round((speedMultiplier - 1.0) * 10);
  return base * combo + Math.max(0, speedBonus);
}
