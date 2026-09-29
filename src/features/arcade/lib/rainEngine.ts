import type { RainItem } from '../models/arcade.model';

export const RAIN_CANDIDATES: { glyph: string; answer: string }[] = [
  // Hiragana
  { glyph: 'あ', answer: 'a' },
  { glyph: 'い', answer: 'i' },
  { glyph: 'う', answer: 'u' },
  { glyph: 'え', answer: 'e' },
  { glyph: 'お', answer: 'o' },
  { glyph: 'か', answer: 'ka' },
  { glyph: 'き', answer: 'ki' },
  { glyph: 'く', answer: 'ku' },
  { glyph: 'け', answer: 'ke' },
  { glyph: 'こ', answer: 'ko' },
  { glyph: 'さ', answer: 'sa' },
  { glyph: 'し', answer: 'shi' },
  { glyph: 'す', answer: 'su' },
  { glyph: 'せ', answer: 'se' },
  { glyph: 'そ', answer: 'so' },
  { glyph: 'た', answer: 'ta' },
  { glyph: 'ち', answer: 'chi' },
  { glyph: 'つ', answer: 'tsu' },
  { glyph: 'て', answer: 'te' },
  { glyph: 'と', answer: 'to' },
  { glyph: 'な', answer: 'na' },
  { glyph: 'に', answer: 'ni' },
  { glyph: 'ぬ', answer: 'nu' },
  { glyph: 'ね', answer: 'ne' },
  { glyph: 'の', answer: 'no' },
  { glyph: 'は', answer: 'ha' },
  { glyph: 'ひ', answer: 'hi' },
  { glyph: 'ふ', answer: 'fu' },
  { glyph: 'へ', answer: 'he' },
  { glyph: 'ほ', answer: 'ho' },
  { glyph: 'ま', answer: 'ma' },
  { glyph: 'み', answer: 'mi' },
  { glyph: 'む', answer: 'mu' },
  { glyph: 'め', answer: 'me' },
  { glyph: 'も', answer: 'mo' },
  { glyph: 'や', answer: 'ya' },
  { glyph: 'ゆ', answer: 'yu' },
  { glyph: 'よ', answer: 'yo' },
  { glyph: 'ら', answer: 'ra' },
  { glyph: 'り', answer: 'ri' },
  { glyph: 'る', answer: 'ru' },
  { glyph: 'れ', answer: 're' },
  { glyph: 'ろ', answer: 'ro' },
  { glyph: 'わ', answer: 'wa' },
  { glyph: 'を', answer: 'wo' },
  { glyph: 'ん', answer: 'n' },
  // Katakana
  { glyph: 'ア', answer: 'a' },
  { glyph: 'カ', answer: 'ka' },
  { glyph: 'サ', answer: 'sa' },
  { glyph: 'タ', answer: 'ta' },
  { glyph: 'ナ', answer: 'na' },
  { glyph: 'ハ', answer: 'ha' },
  { glyph: 'マ', answer: 'ma' },
  { glyph: 'ヤ', answer: 'ya' },
  { glyph: 'ラ', answer: 'ra' },
  { glyph: 'ワ', answer: 'wa' },
];

/**
 * Spawns a new Rain item with 4 option choices (1 correct + 3 random distractors).
 */
export function spawnRainItem(idSuffix: number, speedMultiplier: number = 1.0): RainItem {
  const chosen = RAIN_CANDIDATES[Math.floor(Math.random() * RAIN_CANDIDATES.length)];

  // Gather 3 distractors
  const distractors: string[] = [];
  while (distractors.length < 3) {
    const candidate = RAIN_CANDIDATES[Math.floor(Math.random() * RAIN_CANDIDATES.length)];
    if (candidate.answer !== chosen.answer && !distractors.includes(candidate.answer)) {
      distractors.push(candidate.answer);
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
    speed: 0.8 * speedMultiplier,
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
