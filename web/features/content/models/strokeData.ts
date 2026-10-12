import rawKanjiVgData from '@/data/kanjivgData.json';
import n5Data from '@/data/kanji_n5.json';
import n4Data from '@/data/kanji_n4.json';
import n3Data from '@/data/kanji_n3.json';
import n2Data from '@/data/kanji_n2.json';
import n1Data from '@/data/kanji_n1.json';

export interface StrokePoint {
  x: number;
  y: number;
}

export interface StrokeStep {
  strokeNumber: number;
  path: string;
  points: StrokePoint[];
  startPoint: StrokePoint;
  endPoint: StrokePoint;
  numberPos: StrokePoint;
  directionHint: string;
  tip?: string;
  transform?: string;
}

export type StrokeCategory =
  | 'all'
  | 'hiragana'
  | 'katakana'
  | 'N5'
  | 'N4'
  | 'N3'
  | 'N2'
  | 'N1';

export interface CharacterStrokeData {
  char: string;
  type: 'hiragana' | 'katakana' | 'kanji';
  level?: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  romaji: string;
  meaning?: string;
  onyomi?: string;
  kunyomi?: string;
  strokeCount: number;
  strokes: StrokeStep[];
  overallTip?: string;
}

const KANA_ROMAJI: Record<string, string> = {
  あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o',
  か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko',
  さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so',
  た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to',
  な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no',
  は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho',
  ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo',
  や: 'ya', ゆ: 'yu', よ: 'yo',
  ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro',
  わ: 'wa', を: 'wo', ん: 'n',
  ア: 'a', イ: 'i', ウ: 'u', エ: 'e', オ: 'o',
  カ: 'ka', キ: 'ki', ク: 'ku', ケ: 'ke', コ: 'ko',
  サ: 'sa', シ: 'shi', ス: 'su', セ: 'se', ソ: 'so',
  タ: 'ta', チ: 'chi', ツ: 'tsu', テ: 'te', ト: 'to',
  ナ: 'na', ニ: 'ni', ヌ: 'nu', ネ: 'ne', ノ: 'no',
  ハ: 'ha', ヒ: 'hi', フ: 'fu', ヘ: 'he', ホ: 'ho',
  マ: 'ma', ミ: 'mi', ム: 'mu', メ: 'me', モ: 'mo',
  ヤ: 'ya', ユ: 'yu', ヨ: 'yo',
  ラ: 'ra', リ: 'ri', ル: 'ru', レ: 're', ロ: 'ro',
  ワ: 'wa', ヲ: 'wo', ン: 'n',
};

interface KanjiMeta {
  meaning: string;
  onyomi: string;
  kunyomi: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
}

const kanjiMetaMap: Record<string, KanjiMeta> = {};
const kanjiLevelLookup = new Map<string, 'N5' | 'N4' | 'N3' | 'N2' | 'N1'>();

function registerKanjiMeta(
  list: any[],
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1',
) {
  list.forEach(k => {
    kanjiMetaMap[k.kanjiChar] = {
      meaning: k.meanings ? k.meanings.slice(0, 2).join(', ') : '',
      onyomi: k.onyomi ? k.onyomi.slice(0, 2).join(', ') : '',
      kunyomi: k.kunyomi ? k.kunyomi.slice(0, 2).join(', ') : '',
      level,
    };
    kanjiLevelLookup.set(k.kanjiChar, level);
  });
}

registerKanjiMeta(n5Data as any[], 'N5');
registerKanjiMeta(n4Data as any[], 'N4');
registerKanjiMeta(n3Data as any[], 'N3');
registerKanjiMeta(n2Data as any[], 'N2');
registerKanjiMeta(n1Data as any[], 'N1');

function inferDirectionHint(start: StrokePoint, end: StrokePoint): string {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

  if (angle >= -25 && angle <= 25) return 'Left to right';
  if (angle > 25 && angle < 65) return 'Down-right diagonal';
  if (angle >= 65 && angle <= 115) return 'Top to bottom';
  if (angle > 115 && angle < 155) return 'Down-left curve';
  if (angle >= 155 || angle <= -155) return 'Right to left';
  if (angle < -25 && angle > -65) return 'Up-right slant';
  if (angle <= -65 && angle >= -115) return 'Bottom to top';
  return 'Follow curve trajectory';
}

interface RawStrokeEntry {
  step: number;
  path: string;
  points: StrokePoint[];
  start: StrokePoint;
  end: StrokePoint;
  numberPos: StrokePoint;
}

interface RawCharEntry {
  char: string;
  type: 'hiragana' | 'katakana' | 'kanji';
  level?: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  strokeCount: number;
  strokes: RawStrokeEntry[];
}

function convertRawEntry(entry: RawCharEntry): CharacterStrokeData {
  const meta = kanjiMetaMap[entry.char];
  const romaji =
    KANA_ROMAJI[entry.char] || meta?.onyomi || meta?.kunyomi || '';
  const level = entry.level || meta?.level;

  let overallTip = '';
  if (entry.type === 'kanji' && meta) {
    overallTip = `JLPT ${level} • Meaning: ${meta.meaning} • Onyomi: ${meta.onyomi} • Kunyomi: ${meta.kunyomi}`;
  } else if (entry.type === 'hiragana') {
    overallTip = `Hiragana "${entry.char}" (${romaji}) • Complete all ${entry.strokeCount} strokes in numerical order.`;
  } else {
    overallTip = `Katakana "${entry.char}" (${romaji}) • Crisp angular strokes. Follow the stroke numbers.`;
  }

  const strokes: StrokeStep[] = entry.strokes.map(s => {
    const hint = inferDirectionHint(s.start, s.end);
    return {
      strokeNumber: s.step,
      path: s.path,
      points: s.points,
      startPoint: s.start,
      endPoint: s.end,
      numberPos: s.numberPos,
      directionHint: hint,
      tip: `Stroke ${s.step}: ${hint}. Start at the glowing badge.`,
    };
  });

  return {
    char: entry.char,
    type: entry.type,
    level,
    romaji,
    meaning: meta?.meaning,
    onyomi: meta?.onyomi,
    kunyomi: meta?.kunyomi,
    strokeCount: entry.strokeCount,
    strokes,
    overallTip,
  };
}

const characterLookup = new Map<string, CharacterStrokeData>();

const rawCoreMap = rawKanjiVgData as unknown as Record<string, RawCharEntry>;
export const STROKE_CHARACTERS: CharacterStrokeData[] = Object.values(
  rawCoreMap,
).map(entry => {
  const converted = convertRawEntry(entry);
  characterLookup.set(converted.char, converted);
  return converted;
});

const levelCache: Partial<
  Record<'N4' | 'N3' | 'N2' | 'N1', CharacterStrokeData[]>
> = {};

function loadLevelEntries(
  level: 'N4' | 'N3' | 'N2' | 'N1',
): CharacterStrokeData[] {
  if (levelCache[level]) {
    return levelCache[level]!;
  }
  return [];
}

const DAKUTEN_BASE_MAP: Record<string, { base: string; type: 'dakuten' | 'handakuten' }> = {
  // Hiragana Dakuten (25)
  が: { base: 'か', type: 'dakuten' },
  ぎ: { base: 'き', type: 'dakuten' },
  ぐ: { base: 'く', type: 'dakuten' },
  げ: { base: 'け', type: 'dakuten' },
  ご: { base: 'こ', type: 'dakuten' },
  ざ: { base: 'さ', type: 'dakuten' },
  じ: { base: 'し', type: 'dakuten' },
  ず: { base: 'す', type: 'dakuten' },
  ぜ: { base: 'せ', type: 'dakuten' },
  ぞ: { base: 'そ', type: 'dakuten' },
  だ: { base: 'た', type: 'dakuten' },
  ぢ: { base: 'ち', type: 'dakuten' },
  づ: { base: 'つ', type: 'dakuten' },
  で: { base: 'て', type: 'dakuten' },
  ど: { base: 'と', type: 'dakuten' },
  ば: { base: 'は', type: 'dakuten' },
  び: { base: 'ひ', type: 'dakuten' },
  ぶ: { base: 'ふ', type: 'dakuten' },
  べ: { base: 'へ', type: 'dakuten' },
  ぼ: { base: 'ほ', type: 'dakuten' },
  ぱ: { base: 'は', type: 'handakuten' },
  ぴ: { base: 'ひ', type: 'handakuten' },
  ぷ: { base: 'ふ', type: 'handakuten' },
  ぺ: { base: 'へ', type: 'handakuten' },
  ぽ: { base: 'ほ', type: 'handakuten' },

  // Katakana Dakuten (25)
  ガ: { base: 'カ', type: 'dakuten' },
  ギ: { base: 'キ', type: 'dakuten' },
  グ: { base: 'ク', type: 'dakuten' },
  ゲ: { base: 'ケ', type: 'dakuten' },
  ゴ: { base: 'コ', type: 'dakuten' },
  ザ: { base: 'サ', type: 'dakuten' },
  ジ: { base: 'シ', type: 'dakuten' },
  ズ: { base: 'ス', type: 'dakuten' },
  ゼ: { base: 'セ', type: 'dakuten' },
  ゾ: { base: 'ソ', type: 'dakuten' },
  ダ: { base: 'タ', type: 'dakuten' },
  ヂ: { base: 'チ', type: 'dakuten' },
  ヅ: { base: 'ツ', type: 'dakuten' },
  デ: { base: 'テ', type: 'dakuten' },
  ド: { base: 'ト', type: 'dakuten' },
  バ: { base: 'ハ', type: 'dakuten' },
  ビ: { base: 'ヒ', type: 'dakuten' },
  ブ: { base: 'フ', type: 'dakuten' },
  ベ: { base: 'ヘ', type: 'dakuten' },
  ボ: { base: 'ホ', type: 'dakuten' },
  パ: { base: 'ハ', type: 'handakuten' },
  ピ: { base: 'ヒ', type: 'handakuten' },
  プ: { base: 'フ', type: 'handakuten' },
  ペ: { base: 'ヘ', type: 'handakuten' },
  ポ: { base: 'ホ', type: 'handakuten' },
};

const SMALL_KANA_TO_BASE: Record<string, string> = {
  ゃ: 'や',
  ゅ: 'ゆ',
  ょ: 'よ',
  ャ: 'ヤ',
  ュ: 'ユ',
  ョ: 'ヨ',
  っ: 'つ',
  ッ: 'ツ',
};

export function getCharacterStrokeData(
  char: string,
): CharacterStrokeData | undefined {
  if (characterLookup.has(char)) {
    return characterLookup.get(char);
  }

  // Handle Dakuten / Handakuten single characters (e.g. が, ざ, ぱ, ガ, パ)
  if (DAKUTEN_BASE_MAP[char]) {
    const info = DAKUTEN_BASE_MAP[char];
    const baseData = getCharacterStrokeData(info.base);
    if (baseData) {
      const baseStrokes = baseData.strokes;
      const baseLen = baseStrokes.length;

      const markStrokes: StrokeStep[] =
        info.type === 'dakuten'
          ? [
              {
                strokeNumber: baseLen + 1,
                path: 'M 78,14 Q 85,20 90,26',
                points: [{ x: 78, y: 14 }, { x: 90, y: 26 }],
                startPoint: { x: 78, y: 14 },
                endPoint: { x: 90, y: 26 },
                numberPos: { x: 74, y: 12 },
                directionHint: 'Dakuten mark: top-right stroke 1',
              },
              {
                strokeNumber: baseLen + 2,
                path: 'M 86,11 Q 93,17 98,23',
                points: [{ x: 86, y: 11 }, { x: 98, y: 23 }],
                startPoint: { x: 86, y: 11 },
                endPoint: { x: 98, y: 23 },
                numberPos: { x: 82, y: 9 },
                directionHint: 'Dakuten mark: top-right stroke 2',
              },
            ]
          : [
              {
                strokeNumber: baseLen + 1,
                path: 'M 88,14 A 7,7 0 1,1 87.9,14',
                points: [{ x: 88, y: 14 }],
                startPoint: { x: 88, y: 14 },
                endPoint: { x: 88, y: 14 },
                numberPos: { x: 80, y: 12 },
                directionHint: 'Handakuten mark: top-right circle',
              },
            ];

      return {
        char,
        type: baseData.type,
        romaji: KANA_ROMAJI[char] || char,
        strokeCount: baseLen + markStrokes.length,
        strokes: [...baseStrokes, ...markStrokes],
      };
    }
  }

  // Handle 2-character Yōon combos (e.g. シャ, きゃ, キョ, ぎゃ, ぴゃ)
  if (char.length === 2) {
    const char1 = char[0];
    const char2Base = SMALL_KANA_TO_BASE[char[1]] || char[1];
    const data1 = getCharacterStrokeData(char1);
    const data2 = getCharacterStrokeData(char2Base);

    if (data1) {
      const strokes1 = data1.strokes.map((s) => ({
        ...s,
        transform: 'translate(-2, 4) scale(0.58, 0.88)',
        startPoint: { x: Math.round(s.startPoint.x * 0.58 - 2), y: Math.round(s.startPoint.y * 0.88 + 4) },
        numberPos: { x: Math.round(s.numberPos.x * 0.58 - 2), y: Math.round(s.numberPos.y * 0.88 + 4) },
      }));

      const strokes2 = data2
        ? data2.strokes.map((s, idx) => ({
            ...s,
            strokeNumber: data1.strokes.length + idx + 1,
            transform: 'translate(48, 28) scale(0.48, 0.48)',
            startPoint: { x: Math.round(s.startPoint.x * 0.48 + 48), y: Math.round(s.startPoint.y * 0.48 + 28) },
            numberPos: { x: Math.round(s.numberPos.x * 0.48 + 48), y: Math.round(s.numberPos.y * 0.48 + 28) },
          }))
        : [];

      const combinedStrokes = [...strokes1, ...strokes2];
      return {
        char,
        type: data1.type,
        romaji: KANA_ROMAJI[char] || char,
        strokeCount: combinedStrokes.length,
        strokes: combinedStrokes,
      };
    }
  }

  const level = kanjiLevelLookup.get(char);
  if (level && level !== 'N5') {
    loadLevelEntries(level);
    return characterLookup.get(char);
  }

  return undefined;
}

export function parseKanjiVgXml(char: string, svgText: string): CharacterStrokeData | undefined {
  const meta = kanjiMetaMap[char];
  const level = meta?.level || 'N5';
  const romaji = KANA_ROMAJI[char] || meta?.onyomi || meta?.kunyomi || '';

  const pathMatches = [...svgText.matchAll(/<path[^>]*d="([^"]+)"/g)];
  if (pathMatches.length === 0) return undefined;

  const textMatches = [...svgText.matchAll(/transform="matrix\(1 0 0 1 ([0-9.-]+) ([0-9.-]+)\)">([0-9]+)</g)];
  const numberPosMap = new Map<number, { x: number; y: number }>();
  for (const m of textMatches) {
    const x = Math.round(parseFloat(m[1]) * 10) / 10;
    const y = Math.round(parseFloat(m[2]) * 10) / 10;
    const num = parseInt(m[3], 10);
    numberPosMap.set(num, { x, y });
  }

  const strokes: StrokeStep[] = pathMatches.map((m, idx) => {
    const strokeNumber = idx + 1;
    const pathD = m[1];

    const startMatch = pathD.match(/M\s*([0-9.-]+)[,\s]+([0-9.-]+)/i);
    const startX = startMatch ? Math.round(parseFloat(startMatch[1]) * 10) / 10 : 20;
    const startY = startMatch ? Math.round(parseFloat(startMatch[2]) * 10) / 10 : 20;

    const numPos = numberPosMap.get(strokeNumber) || { x: startX - 6, y: startY - 2 };

    return {
      strokeNumber,
      path: pathD,
      points: [{ x: startX, y: startY }],
      startPoint: { x: startX, y: startY },
      endPoint: { x: startX + 10, y: startY + 10 },
      numberPos: numPos,
      directionHint: 'Follow vector stroke path',
      tip: `Stroke ${strokeNumber}: Start at glowing beacon.`,
    };
  });

  const charData: CharacterStrokeData = {
    char,
    type: 'kanji',
    level,
    romaji,
    meaning: meta?.meaning,
    onyomi: meta?.onyomi,
    kunyomi: meta?.kunyomi,
    strokeCount: strokes.length,
    strokes,
    overallTip: meta ? `JLPT ${level} • ${meta.meaning}` : undefined,
  };

  characterLookup.set(char, charData);
  return charData;
}

export async function fetchKanjiVgStrokeData(char: string): Promise<CharacterStrokeData | undefined> {
  if (characterLookup.has(char)) {
    return characterLookup.get(char);
  }

  try {
    const hex = char.charCodeAt(0).toString(16).padStart(5, '0');
    const url = `https://cdn.jsdelivr.net/gh/kanjivg/kanjivg/kanji/${hex}.svg`;
    const res = await fetch(url);
    if (res.ok) {
      const svgText = await res.text();
      return parseKanjiVgXml(char, svgText);
    }
  } catch (err) {
    console.warn(`[strokeData] Failed to fetch KanjiVG SVG for '${char}':`, err);
  }

  return undefined;
}

export function getCharactersByLevel(
  category: StrokeCategory,
): CharacterStrokeData[] {
  if (category === 'all') {
    return STROKE_CHARACTERS;
  }
  if (category === 'hiragana' || category === 'katakana') {
    return STROKE_CHARACTERS.filter(c => c.type === category);
  }
  if (category === 'N5') {
    return STROKE_CHARACTERS.filter(c => c.type === 'kanji' && c.level === 'N5');
  }
  if (
    category === 'N4' ||
    category === 'N3' ||
    category === 'N2' ||
    category === 'N1'
  ) {
    return loadLevelEntries(category);
  }
  return STROKE_CHARACTERS;
}

export function getCharactersByType(
  type: 'all' | 'hiragana' | 'katakana' | 'kanji',
): CharacterStrokeData[] {
  if (type === 'all') return STROKE_CHARACTERS;
  if (type === 'kanji') {
    return STROKE_CHARACTERS.filter(c => c.type === 'kanji');
  }
  return STROKE_CHARACTERS.filter(c => c.type === type);
}

export const getAllStrokeCharacters = getCharactersByLevel;

export const KANJI_LEVEL_COUNTS = {
  hiragana: 46,
  katakana: 46,
  N5: 80,
  N4: 167,
  N3: 370,
  N2: 374,
  N1: 1504,
  totalKana: 92,
  totalKanji: 2495,
  totalAll: 2587,
};
