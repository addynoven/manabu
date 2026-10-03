import type { RainItem } from './arcade.model';

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
  { glyph: 'か', answer: 'ka', category: 'hiragana' },
  { glyph: 'き', answer: 'ki', category: 'hiragana' },
  { glyph: 'く', answer: 'ku', category: 'hiragana' },
  { glyph: 'け', answer: 'ke', category: 'hiragana' },
  { glyph: 'こ', answer: 'ko', category: 'hiragana' },
  { glyph: 'さ', answer: 'sa', category: 'hiragana' },
  { glyph: 'し', answer: 'shi', category: 'hiragana' },
  { glyph: 'す', answer: 'su', category: 'hiragana' },
  { glyph: 'せ', answer: 'se', category: 'hiragana' },
  { glyph: 'そ', answer: 'so', category: 'hiragana' },
  { glyph: 'た', answer: 'ta', category: 'hiragana' },
  { glyph: 'ち', answer: 'chi', category: 'hiragana' },
  { glyph: 'つ', answer: 'tsu', category: 'hiragana' },
  { glyph: 'て', answer: 'te', category: 'hiragana' },
  { glyph: 'と', answer: 'to', category: 'hiragana' },
  { glyph: 'な', answer: 'na', category: 'hiragana' },
  { glyph: 'に', answer: 'ni', category: 'hiragana' },
  { glyph: 'ぬ', answer: 'nu', category: 'hiragana' },
  { glyph: 'ね', answer: 'ne', category: 'hiragana' },
  { glyph: 'の', answer: 'no', category: 'hiragana' },
  { glyph: 'は', answer: 'ha', category: 'hiragana' },
  { glyph: 'ひ', answer: 'hi', category: 'hiragana' },
  { glyph: 'ふ', answer: 'fu', category: 'hiragana' },
  { glyph: 'へ', answer: 'he', category: 'hiragana' },
  { glyph: 'ほ', answer: 'ho', category: 'hiragana' },
  { glyph: 'ま', answer: 'ma', category: 'hiragana' },
  { glyph: 'み', answer: 'mi', category: 'hiragana' },
  { glyph: 'む', answer: 'mu', category: 'hiragana' },
  { glyph: 'め', answer: 'me', category: 'hiragana' },
  { glyph: 'も', answer: 'mo', category: 'hiragana' },
  { glyph: 'や', answer: 'ya', category: 'hiragana' },
  { glyph: 'ゆ', answer: 'yu', category: 'hiragana' },
  { glyph: 'よ', answer: 'yo', category: 'hiragana' },
  { glyph: 'ら', answer: 'ra', category: 'hiragana' },
  { glyph: 'り', answer: 'ri', category: 'hiragana' },
  { glyph: 'る', answer: 'ru', category: 'hiragana' },
  { glyph: 'れ', answer: 're', category: 'hiragana' },
  { glyph: 'ろ', answer: 'ro', category: 'hiragana' },
  { glyph: 'わ', answer: 'wa', category: 'hiragana' },
  { glyph: 'を', answer: 'wo', category: 'hiragana' },
  { glyph: 'ん', answer: 'n', category: 'hiragana' },
  // Dakuten & Handakuten
  { glyph: 'が', answer: 'ga', category: 'hiragana' },
  { glyph: 'ざ', answer: 'za', category: 'hiragana' },
  { glyph: 'だ', answer: 'da', category: 'hiragana' },
  { glyph: 'ば', answer: 'ba', category: 'hiragana' },
  { glyph: 'ぱ', answer: 'pa', category: 'hiragana' },
];

export const KATAKANA_RAIN_CANDIDATES: RainCandidate[] = [
  { glyph: 'ア', answer: 'a', category: 'katakana' },
  { glyph: 'イ', answer: 'i', category: 'katakana' },
  { glyph: 'ウ', answer: 'u', category: 'katakana' },
  { glyph: 'エ', answer: 'e', category: 'katakana' },
  { glyph: 'オ', answer: 'o', category: 'katakana' },
  { glyph: 'カ', answer: 'ka', category: 'katakana' },
  { glyph: 'キ', answer: 'ki', category: 'katakana' },
  { glyph: 'ク', answer: 'ku', category: 'katakana' },
  { glyph: 'ケ', answer: 'ke', category: 'katakana' },
  { glyph: 'コ', answer: 'ko', category: 'katakana' },
  { glyph: 'サ', answer: 'sa', category: 'katakana' },
  { glyph: 'シ', answer: 'shi', category: 'katakana' },
  { glyph: 'ス', answer: 'su', category: 'katakana' },
  { glyph: 'セ', answer: 'se', category: 'katakana' },
  { glyph: 'ソ', answer: 'so', category: 'katakana' },
  { glyph: 'タ', answer: 'ta', category: 'katakana' },
  { glyph: 'チ', answer: 'chi', category: 'katakana' },
  { glyph: 'ツ', answer: 'tsu', category: 'katakana' },
  { glyph: 'テ', answer: 'te', category: 'katakana' },
  { glyph: 'ト', answer: 'to', category: 'katakana' },
  { glyph: 'ナ', answer: 'na', category: 'katakana' },
  { glyph: 'ニ', answer: 'ni', category: 'katakana' },
  { glyph: 'ヌ', answer: 'nu', category: 'katakana' },
  { glyph: 'ネ', answer: 'ne', category: 'katakana' },
  { glyph: 'ノ', answer: 'no', category: 'katakana' },
  { glyph: 'ハ', answer: 'ha', category: 'katakana' },
  { glyph: 'ヒ', answer: 'hi', category: 'katakana' },
  { glyph: 'フ', answer: 'fu', category: 'katakana' },
  { glyph: 'ヘ', answer: 'he', category: 'katakana' },
  { glyph: 'ホ', answer: 'ho', category: 'katakana' },
  { glyph: 'マ', answer: 'ma', category: 'katakana' },
  { glyph: 'ミ', answer: 'mi', category: 'katakana' },
  { glyph: 'ム', answer: 'mu', category: 'katakana' },
  { glyph: 'メ', answer: 'me', category: 'katakana' },
  { glyph: 'モ', answer: 'mo', category: 'katakana' },
  { glyph: 'ヤ', answer: 'ya', category: 'katakana' },
  { glyph: 'ユ', answer: 'yu', category: 'katakana' },
  { glyph: 'ヨ', answer: 'yo', category: 'katakana' },
  { glyph: 'ラ', answer: 'ra', category: 'katakana' },
  { glyph: 'リ', answer: 'ri', category: 'katakana' },
  { glyph: 'ル', answer: 'ru', category: 'katakana' },
  { glyph: 'レ', answer: 're', category: 'katakana' },
  { glyph: 'ロ', answer: 'ro', category: 'katakana' },
  { glyph: 'ワ', answer: 'wa', category: 'katakana' },
  { glyph: 'ヲ', answer: 'wo', category: 'katakana' },
  { glyph: 'ン', answer: 'n', category: 'katakana' },
  // Dakuten
  { glyph: 'ガ', answer: 'ga', category: 'katakana' },
  { glyph: 'ザ', answer: 'za', category: 'katakana' },
  { glyph: 'ダ', answer: 'da', category: 'katakana' },
  { glyph: 'バ', answer: 'ba', category: 'katakana' },
  { glyph: 'パ', answer: 'pa', category: 'katakana' },
];

export const KANJI_RAIN_CANDIDATES: RainCandidate[] = [
  { glyph: '日', answer: 'hi', hint: 'Sun / Day', category: 'kanji' },
  { glyph: '月', answer: 'tsuki', hint: 'Moon / Month', category: 'kanji' },
  { glyph: '火', answer: 'hi', hint: 'Fire', category: 'kanji' },
  { glyph: '水', answer: 'mizu', hint: 'Water', category: 'kanji' },
  { glyph: '木', answer: 'ki', hint: 'Tree / Wood', category: 'kanji' },
  { glyph: '金', answer: 'kane', hint: 'Gold / Money', category: 'kanji' },
  { glyph: '土', answer: 'tsuchi', hint: 'Soil / Earth', category: 'kanji' },
  { glyph: '山', answer: 'yama', hint: 'Mountain', category: 'kanji' },
  { glyph: '川', answer: 'kawa', hint: 'River', category: 'kanji' },
  { glyph: '人', answer: 'hito', hint: 'Person', category: 'kanji' },
  { glyph: '花', answer: 'hana', hint: 'Flower', category: 'kanji' },
  { glyph: '雨', answer: 'ame', hint: 'Rain', category: 'kanji' },
  { glyph: '空', answer: 'sora', hint: 'Sky', category: 'kanji' },
  { glyph: '海', answer: 'umi', hint: 'Sea / Ocean', category: 'kanji' },
  { glyph: '道', answer: 'michi', hint: 'Road / Way', category: 'kanji' },
  { glyph: '手', answer: 'te', hint: 'Hand', category: 'kanji' },
  { glyph: '目', answer: 'me', hint: 'Eye', category: 'kanji' },
  { glyph: '口', answer: 'kuchi', hint: 'Mouth', category: 'kanji' },
  { glyph: '耳', answer: 'mimi', hint: 'Ear', category: 'kanji' },
  { glyph: '心', answer: 'kokoro', hint: 'Heart / Mind', category: 'kanji' },
];

// Backward-compatible default list
export const RAIN_CANDIDATES: { glyph: string; answer: string }[] = [
  ...HIRAGANA_RAIN_CANDIDATES.map(c => ({ glyph: c.glyph, answer: c.answer })),
  ...KATAKANA_RAIN_CANDIDATES.map(c => ({ glyph: c.glyph, answer: c.answer })),
];

export const DIFFICULTY_SPEED_MAP: Record<RainDifficulty, number> = {
  easy: 0.65,
  medium: 1.0,
  hard: 1.45,
};

/**
 * Returns candidate list based on selected RainMode.
 */
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

/**
 * Spawns a new Rain item with 4 option choices (1 correct + 3 random distractors).
 */
export function spawnRainItem(
  idSuffix: number,
  speedMultiplier: number = 1.0,
  mode: RainMode = 'hiragana'
): RainItem {
  const pool = getCandidatesForMode(mode);
  const chosen = pool[Math.floor(Math.random() * pool.length)];

  // Gather 3 distractors from the same pool (or general list)
  const distractors: string[] = [];
  let attempts = 0;
  while (distractors.length < 3 && attempts < 50) {
    attempts++;
    const candidate = pool[Math.floor(Math.random() * pool.length)];
    if (candidate.answer !== chosen.answer && !distractors.includes(candidate.answer)) {
      distractors.push(candidate.answer);
    }
  }

  // Fallback in case pool has few unique answers
  if (distractors.length < 3) {
    const fallbackList = ['a', 'i', 'u', 'e', 'o', 'ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa'];
    for (const f of fallbackList) {
      if (f !== chosen.answer && !distractors.includes(f)) {
        distractors.push(f);
        if (distractors.length === 3) break;
      }
    }
  }

  const options = [chosen.answer, ...distractors].sort(() => Math.random() - 0.5);
  const column = Math.floor(Math.random() * 4); // 4 columns (0, 1, 2, 3)

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

/**
 * Calculates score multiplier based on streak.
 */
export function getComboMultiplier(streak: number): number {
  if (streak >= 15) return 4;
  if (streak >= 10) return 3;
  if (streak >= 5) return 2;
  return 1;
}

/**
 * Computes points scored for a catch.
 */
export function calculateDropScore(streak: number, speedMultiplier: number): number {
  const base = 10;
  const combo = getComboMultiplier(streak);
  const speedBonus = Math.round((speedMultiplier - 1.0) * 10);
  return base * combo + Math.max(0, speedBonus);
}
