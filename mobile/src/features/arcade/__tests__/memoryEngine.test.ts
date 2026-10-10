import { describe, it, expect } from 'vitest';
import { generateMemoryDeck } from '../lib/memoryEngine';

describe('memoryEngine', () => {
  it('generates 12 cards (6 pairs) for kana-romaji mode', () => {
    const deck = generateMemoryDeck('kana-romaji', 6);
    expect(deck.length).toBe(12);

    // Each pairId should appear exactly twice
    const pairCounts: Record<string, number> = {};
    for (const card of deck) {
      pairCounts[card.pairId] = (pairCounts[card.pairId] || 0) + 1;
      expect(card.isFlipped).toBe(false);
      expect(card.isMatched).toBe(false);
      expect(card.content).toBeTruthy();
    }

    expect(Object.keys(pairCounts).length).toBe(6);
    for (const count of Object.values(pairCounts)) {
      expect(count).toBe(2);
    }
  });

  it('generates valid pairs for hira-kata mode', () => {
    const deck = generateMemoryDeck('hira-kata', 6);
    expect(deck.length).toBe(12);

    const subContents = deck.map(c => c.subContent);
    expect(subContents).toContain('Hiragana');
    expect(subContents).toContain('Katakana');
  });

  it('generates valid pairs for kanji-meaning mode', () => {
    const deck = generateMemoryDeck('kanji-meaning', 6);
    expect(deck.length).toBe(12);

    const meanings = deck.filter(c => c.subContent === 'Meaning');
    expect(meanings.length).toBe(6);
  });
});
