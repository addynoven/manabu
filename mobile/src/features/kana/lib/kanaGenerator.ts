import type {
  KanaCharacter,
  KanaGameMode,
  KanaGroup,
  KanaQuestion,
} from '../models/kana.model';

export function flattenGroups(groups: KanaGroup[]): KanaCharacter[] {
  return groups.flatMap(group => {
    return group.kana.map((char, idx) => ({
      kana: char,
      romaji: group.romaji[idx],
      altRomaji: group.altRomaji?.[idx] ?? [],
      group: group.groupName,
      isKatakana: group.script === 'katakana',
    }));
  });
}

/**
 * Shuffles an array in-place using Fisher-Yates.
 */
export function shuffleArray<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
}

/**
 * Generates a single KanaQuestion for a given game mode from a pool of characters.
 */
export function generateKanaQuestion(
  pool: KanaCharacter[],
  mode: KanaGameMode,
): KanaQuestion {
  if (pool.length === 0) {
    throw new Error('Kana pool is empty');
  }

  const targetIndex = Math.floor(Math.random() * pool.length);
  const target = pool[targetIndex];
  const questionId = `q_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

  if (mode === 'pick') {
    // Prompt shows Kana, user picks Romaji
    const correctAnswer = target.romaji;
    const distractors = shuffleArray(
      pool.filter(c => c.romaji !== correctAnswer),
    )
      .slice(0, 3)
      .map(c => c.romaji);

    // If pool has fewer than 4 unique, fill with synthetic fallbacks
    const fallbackOptions = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'sa', 'ta'];
    while (distractors.length < 3) {
      const fallback = fallbackOptions[Math.floor(Math.random() * fallbackOptions.length)];
      if (fallback !== correctAnswer && !distractors.includes(fallback)) {
        distractors.push(fallback);
      }
    }

    const options = shuffleArray([correctAnswer, ...distractors]);

    return {
      id: questionId,
      target,
      prompt: target.kana,
      promptSub: target.isKatakana ? 'Katakana' : 'Hiragana',
      options,
      correctAnswer,
      mode,
    };
  }

  if (mode === 'reverse-pick') {
    // Prompt shows Romaji, user picks Kana
    const correctAnswer = target.kana;
    const distractors = shuffleArray(
      pool.filter(c => c.kana !== correctAnswer),
    )
      .slice(0, 3)
      .map(c => c.kana);

    const fallbackOptions = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く'];
    while (distractors.length < 3) {
      const fallback = fallbackOptions[Math.floor(Math.random() * fallbackOptions.length)];
      if (fallback !== correctAnswer && !distractors.includes(fallback)) {
        distractors.push(fallback);
      }
    }

    const options = shuffleArray([correctAnswer, ...distractors]);

    return {
      id: questionId,
      target,
      prompt: target.romaji,
      promptSub: target.isKatakana ? 'Pick Katakana' : 'Pick Hiragana',
      options,
      correctAnswer,
      mode,
    };
  }

  if (mode === 'input') {
    // Prompt shows Kana, user types Romaji
    return {
      id: questionId,
      target,
      prompt: target.kana,
      promptSub: target.isKatakana ? 'Type Romaji (Katakana)' : 'Type Romaji (Hiragana)',
      correctAnswer: target.romaji,
      mode,
    };
  }

  // mode === 'reverse-input'
  return {
    id: questionId,
    target,
    prompt: target.romaji,
    promptSub: target.isKatakana ? 'Type Katakana' : 'Type Hiragana',
    correctAnswer: target.kana,
    mode,
  };
}
