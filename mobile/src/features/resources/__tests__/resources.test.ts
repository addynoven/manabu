import { describe, it, expect } from 'vitest';
import { LEARNING_RESOURCES } from '../data/resources';

describe('Resource Directory Catalog', () => {
  it('has at least 15 curated high-impact resources', () => {
    expect(LEARNING_RESOURCES.length).toBeGreaterThanOrEqual(15);
  });

  it('each resource has valid URL, category, and priceType', () => {
    const validCategories = [
      'apps',
      'textbooks',
      'youtube',
      'podcasts',
      'immersion',
      'grammar',
    ];
    const validPrices = ['free', 'freemium', 'paid'];

    for (const res of LEARNING_RESOURCES) {
      expect(res.id).toBeDefined();
      expect(res.name.length).toBeGreaterThan(0);
      expect(res.description.length).toBeGreaterThan(0);
      expect(res.url).toMatch(/^https?:\/\//);
      expect(validCategories).toContain(res.category);
      expect(validPrices).toContain(res.priceType);
      expect(res.rating).toBeGreaterThanOrEqual(4.0);
      expect(res.tags.length).toBeGreaterThan(0);
    }
  });

  it('includes staple resources like Anki, Genki, and Satori Reader', () => {
    const ids = LEARNING_RESOURCES.map(r => r.id);
    expect(ids).toContain('anki');
    expect(ids).toContain('genki');
    expect(ids).toContain('satori-reader');
  });
});
