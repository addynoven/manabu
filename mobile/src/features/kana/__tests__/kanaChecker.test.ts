import { describe, it, expect } from 'vitest';
import { isKanaAnswerCorrect } from '../lib/kanaChecker';

describe('isKanaAnswerCorrect', () => {
  const shiTarget = {
    kana: 'し',
    romaji: 'shi',
    altRomaji: ['si'],
  };

  const tsuTarget = {
    kana: 'つ',
    romaji: 'tsu',
    altRomaji: ['tu'],
  };

  it('matches primary romaji correctly (case-insensitive and trimmed)', () => {
    expect(isKanaAnswerCorrect(shiTarget, 'shi')).toBe(true);
    expect(isKanaAnswerCorrect(shiTarget, ' SHI ')).toBe(true);
    expect(isKanaAnswerCorrect(shiTarget, 'Shi')).toBe(true);
    expect(isKanaAnswerCorrect(shiTarget, 'sa')).toBe(false);
  });

  it('accepts alternate romaji variations (e.g. si for shi, tu for tsu)', () => {
    expect(isKanaAnswerCorrect(shiTarget, 'si')).toBe(true);
    expect(isKanaAnswerCorrect(shiTarget, 'SI')).toBe(true);
    expect(isKanaAnswerCorrect(tsuTarget, 'tu')).toBe(true);
    expect(isKanaAnswerCorrect(tsuTarget, 'tsu')).toBe(true);
  });

  it('evaluates reverse mode by checking exact kana character', () => {
    expect(isKanaAnswerCorrect(shiTarget, 'し', true)).toBe(true);
    expect(isKanaAnswerCorrect(shiTarget, 'さ', true)).toBe(false);
  });

  it('accepts exact kana answer in normal mode when live transliterated', () => {
    expect(isKanaAnswerCorrect(shiTarget, 'し', false)).toBe(true);
    expect(isKanaAnswerCorrect(tsuTarget, 'つ', false)).toBe(true);
  });
});
