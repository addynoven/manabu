import type { KanaCharacter } from '../models/kana.model';

/**
 * Validates user answer against a Kana target.
 * Supports alternate romaji (e.g., 'si' for 'shi', 'ti' for 'chi', 'hu' for 'fu').
 */
export function isKanaAnswerCorrect(
  target: Pick<KanaCharacter, 'kana' | 'romaji' | 'altRomaji'>,
  answer: string,
  isReverse: boolean = false,
): boolean {
  const cleanAnswer = answer.trim();

  // If input matches the target kana directly (e.g., reverse mode or live transliteration)
  if (cleanAnswer === target.kana) {
    return true;
  }

  if (isReverse) {
    // User typed or picked Kana
    return false;
  }

  // User typed or picked Romaji
  const normalized = cleanAnswer.toLowerCase();
  if (normalized === target.romaji.toLowerCase()) {
    return true;
  }

  return target.altRomaji.some(alt => normalized === alt.toLowerCase());
}
