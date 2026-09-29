import { describe, it, expect } from 'vitest';
import { kanjiRepository } from '../repositories/kanji.repository';

describe('KanjiRepository', () => {
  it('loads and validates JLPT N5 kanji correctly via Zod models', async () => {
    const result = await kanjiRepository.getKanjiByLevel('N5');
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.length).toBeGreaterThan(50);
      const first = result.data[0];
      expect(first).toBeDefined();
      expect(first.kanjiChar).toBeDefined();
      expect(first.meanings.length).toBeGreaterThan(0);
      expect(first.level).toBe('N5');
    }
  });

  it('serves cached kanji on subsequent calls', async () => {
    const res1 = await kanjiRepository.getKanjiByLevel('N5');
    const res2 = await kanjiRepository.getKanjiByLevel('N5');
    expect(res1.ok).toBe(true);
    expect(res2.ok).toBe(true);
    if (res1.ok && res2.ok) {
      expect(res1.data).toBe(res2.data); // Reference equality from cache
    }
  });
});
