import { describe, it, expect } from 'vitest';
import { ACADEMY_GUIDES } from '../data/guides';

describe('Kana Academy Guides', () => {
  it('has at least 5 curated learning guides', () => {
    expect(ACADEMY_GUIDES.length).toBeGreaterThanOrEqual(5);
  });

  it('each guide contains valid metadata and sections', () => {
    for (const guide of ACADEMY_GUIDES) {
      expect(guide.id).toBeDefined();
      expect(guide.title.length).toBeGreaterThan(0);
      expect(guide.japaneseTitle.length).toBeGreaterThan(0);
      expect(guide.readTime).toMatch(/min/);
      expect(guide.sections.length).toBeGreaterThan(0);

      for (const section of guide.sections) {
        expect(section.title.length).toBeGreaterThan(0);
        expect(section.content.length).toBeGreaterThan(0);
      }
    }
  });

  it('includes foundational guides for Hiragana, Katakana, and Kanji', () => {
    const ids = ACADEMY_GUIDES.map(g => g.id);
    expect(ids).toContain('hiragana-101');
    expect(ids).toContain('katakana-demystified');
    expect(ids).toContain('kanji-anatomy');
  });
});
