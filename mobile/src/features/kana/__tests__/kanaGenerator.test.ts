import { describe, it, expect } from 'vitest';
import { generateKanaQuestion, flattenGroups } from '../lib/kanaGenerator';
import { KANA_GROUPS } from '../data/kana.data';

describe('generateKanaQuestion', () => {
  const characters = flattenGroups(KANA_GROUPS.slice(0, 2));

  it('generates a Pick mode question with 4 unique options including the correct answer', () => {
    const question = generateKanaQuestion(characters, 'pick');
    expect(question.mode).toBe('pick');
    expect(question.options).toBeDefined();
    expect(question.options!.length).toBe(4);
    expect(question.options!).toContain(question.correctAnswer);
    const uniqueOptions = new Set(question.options);
    expect(uniqueOptions.size).toBe(4);
  });

  it('generates a Reverse-Pick mode question with kana choices', () => {
    const question = generateKanaQuestion(characters, 'reverse-pick');
    expect(question.mode).toBe('reverse-pick');
    expect(question.options).toBeDefined();
    expect(question.options!.length).toBe(4);
    expect(question.options!).toContain(question.correctAnswer);
  });

  it('generates an Input mode question without options', () => {
    const question = generateKanaQuestion(characters, 'input');
    expect(question.mode).toBe('input');
    expect(question.options).toBeUndefined();
    expect(question.correctAnswer).toBe(question.target.romaji);
  });
});
