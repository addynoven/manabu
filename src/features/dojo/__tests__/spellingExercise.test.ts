import { describe, it, expect, vi } from 'vitest';
import { getKanaRomaji, breakIntoKanaTokens } from '../lib/kanaRomajiMap';

// Mock expo-speech and expo-haptics
vi.mock('expo-speech', () => ({
  speak: vi.fn(),
  stop: vi.fn().mockResolvedValue(undefined),
  isSpeakingAsync: vi.fn().mockResolvedValue(false),
}));

vi.mock('expo-haptics', () => ({
  impactAsync: vi.fn().mockResolvedValue(undefined),
  notificationAsync: vi.fn().mockResolvedValue(undefined),
  ImpactFeedbackStyle: { Light: 'light' },
  NotificationFeedbackType: { Success: 'success', Error: 'error' },
}));

describe('kanaRomajiMap', () => {
  it('correctly maps single hiragana to romaji', () => {
    expect(getKanaRomaji('こ')).toBe('ko');
    expect(getKanaRomaji('ん')).toBe('n');
    expect(getKanaRomaji('に')).toBe('ni');
    expect(getKanaRomaji('ち')).toBe('chi');
    expect(getKanaRomaji('は')).toBe('ha');
  });

  it('correctly maps katakana to romaji', () => {
    expect(getKanaRomaji('ノ')).toBe('no');
    expect(getKanaRomaji('ー')).toBe('—');
    expect(getKanaRomaji('ト')).toBe('to');
  });

  it('breaks words into tokens with romaji readings', () => {
    const tokens = breakIntoKanaTokens('こんにちは');
    expect(tokens).toEqual([
      { char: 'こ', romaji: 'ko' },
      { char: 'ん', romaji: 'n' },
      { char: 'に', romaji: 'ni' },
      { char: 'ち', romaji: 'chi' },
      { char: 'は', romaji: 'ha' },
    ]);
  });

  it('handles combination kana like きゃ, しゅ, ちょ', () => {
    const tokens = breakIntoKanaTokens('きょう');
    expect(tokens).toEqual([
      { char: 'きょ', romaji: 'kyo' },
      { char: 'う', romaji: 'u' },
    ]);
  });
});
