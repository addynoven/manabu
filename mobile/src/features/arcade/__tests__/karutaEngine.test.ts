import { describe, it, expect } from 'vitest';
import {
  generateKarutaMatch,
  calculateSlapScore,
  KARUTA_BOT_PROFILES,
  KARUTA_CARDS_BANK,
  HYAKUNIN_ISSHU_POEMS_BANK,
} from '../lib/karutaEngine';

describe('karutaEngine', () => {
  describe('KARUTA_CARDS_BANK (Vocab)', () => {
    it('has at least 15 valid authentic cards', () => {
      expect(KARUTA_CARDS_BANK.length).toBeGreaterThanOrEqual(15);
      KARUTA_CARDS_BANK.forEach((card) => {
        expect(card.id).toBeDefined();
        expect(card.japanese).toBeTruthy();
        expect(card.reading).toBeTruthy();
        expect(card.romaji).toBeTruthy();
        expect(card.english).toBeTruthy();
      });
    });
  });

  describe('HYAKUNIN_ISSHU_POEMS_BANK (Authentic Classic Poems)', () => {
    it('has authentic waka poems with kami-no-ku and shimo-no-ku', () => {
      expect(HYAKUNIN_ISSHU_POEMS_BANK.length).toBeGreaterThanOrEqual(10);
      HYAKUNIN_ISSHU_POEMS_BANK.forEach((poem) => {
        expect(poem.mode).toBe('poem');
        expect(poem.poemNumber).toBeGreaterThan(0);
        expect(poem.poet).toBeTruthy();
        expect(poem.poetJapanese).toBeTruthy();
        expect(poem.kamiNoKu).toBeTruthy();
        expect(poem.shimoNoKu).toBeTruthy();
        expect(poem.kimariji).toBeTruthy();
        expect(poem.audioText).toBeTruthy();
        // The card text should match the shimo-no-ku
        expect(poem.japanese).toContain(poem.shimoNoKu?.split(' ')[0] || '');
      });
    });
  });

  describe('generateKarutaMatch', () => {
    it('generates specified number of vocab cards for tatami mat', () => {
      const match = generateKarutaMatch(6, 'vocab');
      expect(match.matCards).toHaveLength(6);
      expect(match.readingQueue).toHaveLength(6);

      const uniqueIds = new Set(match.matCards.map((c) => c.id));
      expect(uniqueIds.size).toBe(6);
    });

    it('generates poem match with Hyakunin Isshu cards', () => {
      const match = generateKarutaMatch(8, 'poem');
      expect(match.matCards).toHaveLength(8);
      expect(match.readingQueue).toHaveLength(8);
      expect(match.matCards[0].mode).toBe('poem');
      expect(match.matCards[0].kamiNoKu).toBeDefined();
      expect(match.matCards[0].kimariji).toBeDefined();
    });

    it('reading queue contains exact same cards as mat cards', () => {
      const match = generateKarutaMatch(8, 'poem');
      const matIds = new Set(match.matCards.map((c) => c.id));
      const queueIds = new Set(match.readingQueue.map((c) => c.id));

      expect(matIds).toEqual(queueIds);
    });
  });

  describe('calculateSlapScore', () => {
    it('awards S rank for sub-second slaps (<1000ms)', () => {
      const res = calculateSlapScore(750);
      expect(res.rank).toBe('S');
      expect(res.speedBonus).toBe(100);
      expect(res.points).toBe(200);
    });

    it('awards A rank for fast slaps (1000-1599ms)', () => {
      const res = calculateSlapScore(1200);
      expect(res.rank).toBe('A');
      expect(res.speedBonus).toBe(60);
      expect(res.points).toBe(160);
    });

    it('awards B rank for standard slaps (1600-2399ms)', () => {
      const res = calculateSlapScore(1800);
      expect(res.rank).toBe('B');
      expect(res.speedBonus).toBe(30);
      expect(res.points).toBe(130);
    });

    it('awards C rank for slower slaps (>=2400ms)', () => {
      const res = calculateSlapScore(2500);
      expect(res.rank).toBe('C');
      expect(res.speedBonus).toBe(10);
      expect(res.points).toBe(110);
    });
  });

  describe('KARUTA_BOT_PROFILES', () => {
    it('has easy, medium, and hard difficulty settings with valid ranges', () => {
      const easy = KARUTA_BOT_PROFILES.easy;
      const medium = KARUTA_BOT_PROFILES.medium;
      const hard = KARUTA_BOT_PROFILES.hard;

      expect(easy.minReactionMs).toBeGreaterThan(medium.minReactionMs);
      expect(medium.minReactionMs).toBeGreaterThan(hard.minReactionMs);
      expect(easy.foulChance).toBeGreaterThan(hard.foulChance);
    });
  });
});
