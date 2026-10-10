import { describe, it, expect } from 'vitest';
import {
  evaluateWordleGuess,
  getRandomWordleWord,
  updateKeyboardStatus,
  THREE_KANA_WORDS,
} from '../lib/wordleEngine';
import type { WordleLetterStatus } from '../models/arcade.model';

describe('wordleEngine', () => {
  it('selects valid 3-character Japanese words', () => {
    const word = getRandomWordleWord();
    expect(THREE_KANA_WORDS).toContainEqual(word);
    expect(Array.from(word.word).length).toBe(3);
    expect(word.reading).toBeDefined();
    expect(word.meaning).toBeDefined();
  });

  it('correctly marks all characters correct for identical guess', () => {
    const feedback = evaluateWordleGuess('さくら', 'さくら');
    expect(feedback).toEqual([
      { kana: 'さ', status: 'correct' },
      { kana: 'く', status: 'correct' },
      { kana: 'ら', status: 'correct' },
    ]);
  });

  it('correctly marks absent characters', () => {
    const feedback = evaluateWordleGuess('さくら', 'ねこみ');
    expect(feedback).toEqual([
      { kana: 'ね', status: 'absent' },
      { kana: 'こ', status: 'absent' },
      { kana: 'み', status: 'absent' },
    ]);
  });

  it('correctly marks yellow present characters in wrong positions', () => {
    // target: 'さくら', guess: 'らくさ'
    const feedback = evaluateWordleGuess('さくら', 'らくさ');
    expect(feedback).toEqual([
      { kana: 'ら', status: 'present' },
      { kana: 'く', status: 'correct' },
      { kana: 'さ', status: 'present' },
    ]);
  });

  it('handles duplicate characters in guess without over-marking', () => {
    // target: 'さくら' (one 'さ'), guess: 'さささ'
    const feedback = evaluateWordleGuess('さくら', 'さささ');
    expect(feedback).toEqual([
      { kana: 'さ', status: 'correct' },
      { kana: 'さ', status: 'absent' },
      { kana: 'さ', status: 'absent' },
    ]);
  });

  it('updates keyboard statuses with correct precedence (correct > present > absent)', () => {
    let keyboard: Record<string, WordleLetterStatus> = {};
    const feedback = [
      { kana: 'さ', status: 'present' as const },
      { kana: 'く', status: 'absent' as const },
    ];
    keyboard = updateKeyboardStatus(keyboard, feedback);
    expect(keyboard).toEqual({
      'さ': 'present',
      'く': 'absent',
    });

    // Upgrading 'present' to 'correct'
    const feedback2 = [{ kana: 'さ', status: 'correct' as const }];
    keyboard = updateKeyboardStatus(keyboard, feedback2);
    expect(keyboard['さ']).toBe('correct');

    // Attempting to downgrade 'correct' with 'present' or 'absent' should keep 'correct'
    const feedback3 = [{ kana: 'さ', status: 'absent' as const }];
    keyboard = updateKeyboardStatus(keyboard, feedback3);
    expect(keyboard['さ']).toBe('correct');
  });
});
