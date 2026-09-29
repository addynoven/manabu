export const MAX_STARS_PER_SET = 3;

// Kanji
export const KANJI_SET_PROGRESS_TARGET = 5;
export const KANJI_SET_PROGRESS_CAP =
  KANJI_SET_PROGRESS_TARGET * MAX_STARS_PER_SET;

// Vocabulary
export const VOCAB_SET_PROGRESS_TARGET = 5;
export const VOCAB_SET_PROGRESS_CAP =
  VOCAB_SET_PROGRESS_TARGET * MAX_STARS_PER_SET;

export interface KanjiSetProgressEntry {
  correct: number;
}

export interface VocabularySetProgressEntry {
  correct: number;
}

export interface SetProgressResult {
  progress: number; // 0.0 to 1.0
  stars: number; // 0, 1, 2, or 3
  isMaxed: boolean;
  earned: number;
  totalNeeded: number;
}

export function calculateKanjiSetProgressAndStars(
  entries: KanjiSetProgressEntry[],
  targetPerChar: number = KANJI_SET_PROGRESS_TARGET,
): SetProgressResult {
  if (entries.length === 0) {
    return { progress: 0, stars: 0, isMaxed: false, earned: 0, totalNeeded: 0 };
  }

  const cap = targetPerChar * MAX_STARS_PER_SET;
  const earned = entries.reduce(
    (sum, entry) => sum + Math.min(Math.max(0, entry.correct), cap),
    0,
  );

  const cycleTarget = entries.length * targetPerChar;
  const maxEarned = cycleTarget * MAX_STARS_PER_SET;
  const cappedEarned = Math.min(earned, maxEarned);
  const stars = Math.min(
    Math.floor(cappedEarned / cycleTarget),
    MAX_STARS_PER_SET,
  );
  const isMaxed = stars >= MAX_STARS_PER_SET;
  const progress = isMaxed
    ? 1
    : (cappedEarned - stars * cycleTarget) / cycleTarget;

  return {
    progress: Math.max(0, Math.min(1, progress)),
    stars,
    isMaxed,
    earned: cappedEarned,
    totalNeeded: maxEarned,
  };
}

export function calculateVocabularySetProgressAndStars(
  entries: VocabularySetProgressEntry[],
  targetPerWord: number = VOCAB_SET_PROGRESS_TARGET,
): SetProgressResult {
  if (entries.length === 0) {
    return { progress: 0, stars: 0, isMaxed: false, earned: 0, totalNeeded: 0 };
  }

  const cap = targetPerWord * MAX_STARS_PER_SET;
  const earned = entries.reduce(
    (sum, entry) => sum + Math.min(Math.max(0, entry.correct), cap),
    0,
  );

  const cycleTarget = entries.length * targetPerWord;
  const maxEarned = cycleTarget * MAX_STARS_PER_SET;
  const cappedEarned = Math.min(earned, maxEarned);
  const stars = Math.min(
    Math.floor(cappedEarned / cycleTarget),
    MAX_STARS_PER_SET,
  );
  const isMaxed = stars >= MAX_STARS_PER_SET;
  const progress = isMaxed
    ? 1
    : (cappedEarned - stars * cycleTarget) / cycleTarget;

  return {
    progress: Math.max(0, Math.min(1, progress)),
    stars,
    isMaxed,
    earned: cappedEarned,
    totalNeeded: maxEarned,
  };
}
