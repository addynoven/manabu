import { describe, it, expect } from 'vitest';
import {
  getShiritoriLastKana,
  validateShiritoriMove,
  getBotShiritoriMove,
  getPlayerSuggestions,
  normalizeToHiragana,
} from '../lib/shiritoriEngine';

describe('shiritoriEngine', () => {
  it('correctly extracts last kana including small kana and prolonged sound', () => {
    expect(getShiritoriLastKana('ねこ')).toBe('こ');
    expect(getShiritoriLastKana('さくら')).toBe('ら');
    expect(getShiritoriLastKana('おちゃ')).toBe('や'); // small ya -> ya
    expect(getShiritoriLastKana('コーヒー')).toBe('い'); // kōhī -> ends in i sound
  });

  it('normalizes inputs to pure hiragana', () => {
    expect(normalizeToHiragana('neko')).toBe('ねこ');
    expect(normalizeToHiragana(' さくら ')).toBe('さくら');
    expect(normalizeToHiragana('ネコ')).toBe('ねこ');
  });

  it('validates starting kana match', () => {
    const used = new Set<string>();
    const resCorrect = validateShiritoriMove('こども', 'こ', used);
    expect(resCorrect.isValid).toBe(true);
    expect(resCorrect.kana).toBe('こども');

    // Kanji input: 子供 (kodomo) should match starting kana こ
    const resKanji = validateShiritoriMove('子供', 'こ', used);
    expect(resKanji.isValid).toBe(true);
    expect(resKanji.kana).toBe('こども');

    // Romaji input: kodomo should match starting kana こ
    const resRomaji = validateShiritoriMove('kodomo', 'こ', used);
    expect(resRomaji.isValid).toBe(true);
    expect(resRomaji.kana).toBe('こども');

    const resWrong = validateShiritoriMove('いぬ', 'こ', used);
    expect(resWrong.isValid).toBe(false);
    expect(resWrong.error).toBe('wrong_start');
  });

  it('prevents duplicate word replay', () => {
    const used = new Set<string>(['ねこ']);
    const res = validateShiritoriMove('ねこ', 'ね', used);
    expect(res.isValid).toBe(false);
    expect(res.error).toBe('already_used');
  });

  it('detects loss when word ends in ん', () => {
    const used = new Set<string>();
    const res = validateShiritoriMove('きりん', 'き', used);
    expect(res.error).toBe('ends_in_n');
    expect(res.message).toContain('Game Over');
  });

  it('bot generates valid next word', () => {
    const used = new Set<string>();
    const botWord = getBotShiritoriMove('こ', used, 'hard');
    expect(botWord).toBeDefined();
    expect(botWord?.kana.startsWith('こ')).toBe(true);
    expect(botWord?.kana.endsWith('ん')).toBe(false);
  });

  it('returns safe suggestions for player without ending in ん', () => {
    const used = new Set<string>();
    const suggestions = getPlayerSuggestions('あ', used, 3);
    expect(suggestions.length).toBeGreaterThan(0);
    expect(suggestions.every(w => w.kana.startsWith('あ'))).toBe(true);
    expect(suggestions.every(w => !w.kana.endsWith('ん'))).toBe(true);
  });
});
