import type { WordleGuessFeedback, WordleLetterStatus, WordleWord } from '../models/arcade.model';
export type { WordleGuessFeedback, WordleLetterStatus, WordleWord } from '../models/arcade.model';

export const WORDLE_WORD_BANK: WordleWord[] = [
  { word: 'さくら', kanji: '桜', reading: 'sakura', meaning: 'cherry blossom' },
  { word: 'くるま', kanji: '車', reading: 'kuruma', meaning: 'car / vehicle' },
  { word: 'てがみ', kanji: '手紙', reading: 'tegami', meaning: 'letter' },
  { word: 'たまご', kanji: '卵', reading: 'tamago', meaning: 'egg' },
  { word: 'めがね', kanji: '眼鏡', reading: 'megane', meaning: 'glasses' },
];

export const THREE_KANA_WORDS: WordleWord[] = WORDLE_WORD_BANK.filter(
  w => Array.from(w.word).length === 3,
);

export function getRandomWordleWord(): WordleWord {
  const index = Math.floor(Math.random() * THREE_KANA_WORDS.length);
  return THREE_KANA_WORDS[index];
}

export function evaluateWordleGuess(
  target: string,
  guess: string,
): WordleGuessFeedback[] {
  const targetChars = Array.from(target);
  const guessChars = Array.from(guess);
  const length = targetChars.length;

  const result: WordleGuessFeedback[] = guessChars.map(char => ({
    kana: char,
    status: 'absent',
  }));

  const remainingCounts: Record<string, number> = {};
  for (const char of targetChars) {
    remainingCounts[char] = (remainingCounts[char] || 0) + 1;
  }

  for (let i = 0; i < length; i++) {
    if (guessChars[i] === targetChars[i]) {
      result[i].status = 'correct';
      remainingCounts[guessChars[i]]--;
    }
  }

  for (let i = 0; i < length; i++) {
    if (result[i].status !== 'correct') {
      const char = guessChars[i];
      if (remainingCounts[char] && remainingCounts[char] > 0) {
        result[i].status = 'present';
        remainingCounts[char]--;
      } else {
        result[i].status = 'absent';
      }
    }
  }

  return result;
}

export function updateKeyboardStatus(
  prev: Record<string, WordleLetterStatus>,
  feedback: WordleGuessFeedback[],
): Record<string, WordleLetterStatus> {
  const updated = { ...prev };

  for (const item of feedback) {
    const current = updated[item.kana];
    if (item.status === 'correct') {
      updated[item.kana] = 'correct';
    } else if (item.status === 'present' && current !== 'correct') {
      updated[item.kana] = 'present';
    } else if (item.status === 'absent' && !current) {
      updated[item.kana] = 'absent';
    }
  }

  return updated;
}
