import { describe, it, expect } from 'vitest';
import {
  STROKE_CHARACTERS,
  getCharacterStrokeData,
  getCharactersByType,
  getCharactersByLevel,
  KANJI_LEVEL_COUNTS,
} from '../lib/strokeData';

describe('strokeData with authentic KanjiVG integration', () => {
  it('loads core dataset of 172 characters across Hiragana, Katakana, and N5 Kanji', () => {
    expect(STROKE_CHARACTERS.length).toBe(172);

    const hiragana = getCharactersByType('hiragana');
    const katakana = getCharactersByType('katakana');
    const kanji = getCharactersByType('kanji');

    expect(hiragana.length).toBe(46);
    expect(katakana.length).toBe(46);
    expect(kanji.length).toBe(80);
  });

  it('ensures each character has valid strokes matching strokeCount', () => {
    for (const charData of STROKE_CHARACTERS) {
      expect(charData.strokes.length).toBe(charData.strokeCount);
      expect(charData.strokes.length).toBeGreaterThan(0);
      for (const stroke of charData.strokes) {
        expect(stroke.path.startsWith('M') || stroke.path.startsWith('m')).toBe(true);
        expect(stroke.points.length).toBeGreaterThanOrEqual(2);
        expect(stroke.startPoint.x).toBeGreaterThanOrEqual(0);
        expect(stroke.startPoint.x).toBeLessThanOrEqual(109);
        expect(stroke.startPoint.y).toBeGreaterThanOrEqual(0);
        expect(stroke.startPoint.y).toBeLessThanOrEqual(109);
        expect(stroke.directionHint.length).toBeGreaterThan(0);
      }
    }
  });

  it('correctly retrieves character data by symbol for Kana and N5', () => {
    const a = getCharacterStrokeData('あ');
    expect(a).toBeDefined();
    expect(a?.strokeCount).toBe(3);
    expect(a?.romaji).toBe('a');

    const sun = getCharacterStrokeData('日');
    expect(sun).toBeDefined();
    expect(sun?.strokeCount).toBe(4);
    expect(sun?.meaning).toContain('day');
  });

  it('retrieves Kanji across all JLPT levels N4 to N1 with full stroke data and metadata', () => {
    // JLPT N4
    const n4Char = getCharacterStrokeData('会');
    expect(n4Char).toBeDefined();
    expect(n4Char?.level).toBe('N4');
    expect(n4Char?.strokeCount).toBe(6);
    expect(n4Char?.meaning).toContain('meet');
    expect(n4Char?.strokes.length).toBe(6);

    // JLPT N3
    const n3Char = getCharacterStrokeData('政');
    expect(n3Char).toBeDefined();
    expect(n3Char?.level).toBe('N3');
    expect(n3Char?.strokeCount).toBe(9);
    expect(n3Char?.meaning).toContain('politics');
    expect(n3Char?.strokes.length).toBe(9);

    // JLPT N2
    const n2Char = getCharacterStrokeData('党');
    expect(n2Char).toBeDefined();
    expect(n2Char?.level).toBe('N2');
    expect(n2Char?.strokeCount).toBe(10);
    expect(n2Char?.meaning).toContain('party');
    expect(n2Char?.strokes.length).toBe(10);

    // JLPT N1
    const n1Char = getCharacterStrokeData('氏');
    expect(n1Char).toBeDefined();
    expect(n1Char?.level).toBe('N1');
    expect(n1Char?.strokeCount).toBe(4);
    expect(n1Char?.meaning).toContain('family');
    expect(n1Char?.strokes.length).toBe(4);
  });

  it('loads full category lists for N4, N3, N2, and N1 matching total counts', () => {
    const n4List = getCharactersByLevel('N4');
    expect(n4List.length).toBe(167);

    const n3List = getCharactersByLevel('N3');
    expect(n3List.length).toBe(370);

    const n2List = getCharactersByLevel('N2');
    expect(n2List.length).toBe(374);

    const n1List = getCharactersByLevel('N1');
    expect(n1List.length).toBe(1504);

    expect(KANJI_LEVEL_COUNTS.totalKanji).toBe(2495);
    expect(KANJI_LEVEL_COUNTS.totalAll).toBe(2587);
  });
});
