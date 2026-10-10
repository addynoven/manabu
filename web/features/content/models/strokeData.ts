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

export function getCharacterStrokeData(
  char: string,
): CharacterStrokeData | undefined {
  if (characterLookup.has(char)) {
    return characterLookup.get(char);
  }

  const level = kanjiLevelLookup.get(char);
  if (level && level !== 'N5') {
    loadLevelEntries(level);
    return characterLookup.get(char);
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
