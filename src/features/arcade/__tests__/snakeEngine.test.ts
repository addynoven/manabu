import { describe, it, expect } from 'vitest';
import {
  isValidDirectionChange,
  getNextHeadPosition,
  checkSelfCollision,
  spawnFoodPosition,
  getFoodForMode,
  calculateSnakeScore,
  type GridBounds,
  type Coordinate,
} from '../lib/snakeEngine';

describe('snakeEngine', () => {
  const bounds: GridBounds = { cols: 15, rows: 20 };

  describe('Direction Changes', () => {
    it('blocks 180-degree immediate reversals', () => {
      expect(isValidDirectionChange('UP', 'DOWN')).toBe(false);
      expect(isValidDirectionChange('DOWN', 'UP')).toBe(false);
      expect(isValidDirectionChange('LEFT', 'RIGHT')).toBe(false);
      expect(isValidDirectionChange('RIGHT', 'LEFT')).toBe(false);
    });

    it('blocks same-direction redundancy', () => {
      expect(isValidDirectionChange('UP', 'UP')).toBe(false);
      expect(isValidDirectionChange('RIGHT', 'RIGHT')).toBe(false);
    });

    it('allows perpendicular turns', () => {
      expect(isValidDirectionChange('UP', 'LEFT')).toBe(true);
      expect(isValidDirectionChange('UP', 'RIGHT')).toBe(true);
      expect(isValidDirectionChange('LEFT', 'UP')).toBe(true);
      expect(isValidDirectionChange('LEFT', 'DOWN')).toBe(true);
    });
  });

  describe('Movement & Bounds', () => {
    const startHead: Coordinate = { x: 5, y: 5 };

    it('moves correctly in all 4 cardinal directions', () => {
      expect(getNextHeadPosition(startHead, 'UP', bounds, 'classic')).toEqual({ x: 5, y: 4 });
      expect(getNextHeadPosition(startHead, 'DOWN', bounds, 'classic')).toEqual({ x: 5, y: 6 });
      expect(getNextHeadPosition(startHead, 'LEFT', bounds, 'classic')).toEqual({ x: 4, y: 5 });
      expect(getNextHeadPosition(startHead, 'RIGHT', bounds, 'classic')).toEqual({ x: 6, y: 5 });
    });

    it('detects wall collision in classic mode', () => {
      expect(getNextHeadPosition({ x: 0, y: 5 }, 'LEFT', bounds, 'classic')).toBeNull();
      expect(getNextHeadPosition({ x: 14, y: 5 }, 'RIGHT', bounds, 'classic')).toBeNull();
      expect(getNextHeadPosition({ x: 5, y: 0 }, 'UP', bounds, 'classic')).toBeNull();
      expect(getNextHeadPosition({ x: 5, y: 19 }, 'DOWN', bounds, 'classic')).toBeNull();
    });

    it('wraps around walls seamlessly in zen mode', () => {
      expect(getNextHeadPosition({ x: 0, y: 5 }, 'LEFT', bounds, 'zen')).toEqual({ x: 14, y: 5 });
      expect(getNextHeadPosition({ x: 14, y: 5 }, 'RIGHT', bounds, 'zen')).toEqual({ x: 0, y: 5 });
      expect(getNextHeadPosition({ x: 5, y: 0 }, 'UP', bounds, 'zen')).toEqual({ x: 5, y: 19 });
      expect(getNextHeadPosition({ x: 5, y: 19 }, 'DOWN', bounds, 'zen')).toEqual({ x: 5, y: 0 });
    });
  });

  describe('Self Collision', () => {
    const body: Coordinate[] = [
      { x: 5, y: 6 },
      { x: 5, y: 7 },
      { x: 6, y: 7 },
      { x: 6, y: 6 },
    ];

    it('returns true if head hits any body segment', () => {
      expect(checkSelfCollision({ x: 5, y: 6 }, body)).toBe(true);
      expect(checkSelfCollision({ x: 6, y: 7 }, body)).toBe(true);
    });

    it('returns false if head moves into unoccupied space', () => {
      expect(checkSelfCollision({ x: 5, y: 5 }, body)).toBe(false);
      expect(checkSelfCollision({ x: 4, y: 6 }, body)).toBe(false);
    });
  });

  describe('Food Spawning', () => {
    it('spawns food within bounds and not on snake body', () => {
      const smallBounds: GridBounds = { cols: 3, rows: 3 };
      const snake: Coordinate[] = [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: 2 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 0 },
        { x: 2, y: 1 },
      ];
      // Only {x: 2, y: 2} is free
      const pos = spawnFoodPosition(smallBounds, snake);
      expect(pos).toEqual({ x: 2, y: 2 });
    });
  });

  describe('Modes & Word Quest', () => {
    it('returns valid foods for hiragana, katakana, and kanji', () => {
      const hira = getFoodForMode('hiragana');
      expect(hira.food.kana).toBeDefined();
      expect(hira.food.romaji).toBeDefined();

      const kata = getFoodForMode('katakana');
      expect(kata.food.kana).toBeDefined();

      const kanji = getFoodForMode('kanji');
      expect(kanji.food.kana).toBeDefined();
      expect(kanji.food.meaning).toBeDefined();
    });

    it('progresses syllables sequentially in Word Quest mode', () => {
      const first = getFoodForMode('words', { wordIndex: 0, syllableIndex: 0 });
      expect(first.food.kana).toBe('ね');
      expect(first.nextWordState?.syllableIndex).toBe(1);
      expect(first.nextWordState?.wordCompleted).toBe(false);

      const second = getFoodForMode('words', { wordIndex: 0, syllableIndex: 1 });
      expect(second.food.kana).toBe('こ');
      expect(second.nextWordState?.wordCompleted).toBe(true);
      expect(second.nextWordState?.syllableIndex).toBe(0);
      expect(second.food.isBonus).toBe(true);
    });
  });

  describe('Score Calculation', () => {
    it('computes correct score based on difficulty and streak', () => {
      const chillScore = calculateSnakeScore(1, 'chill');
      const turboScore = calculateSnakeScore(1, 'turbo');
      expect(turboScore).toBeGreaterThan(chillScore);

      const streakScore = calculateSnakeScore(10, 'normal');
      const baseScore = calculateSnakeScore(1, 'normal');
      expect(streakScore).toBeGreaterThan(baseScore);
    });

    it('adds bonus for word completion', () => {
      const normalScore = calculateSnakeScore(1, 'normal', false);
      const bonusScore = calculateSnakeScore(1, 'normal', true);
      expect(bonusScore - normalScore).toBe(50);
    });
  });
});
