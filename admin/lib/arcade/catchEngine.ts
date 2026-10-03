import type { CatchDifficulty, CatchMode, CatchTarget, CatchFallingItem, CatchItemCandidate } from './arcade.model';
export type { CatchDifficulty, CatchMode, CatchTarget, CatchFallingItem, CatchItemCandidate } from './arcade.model';
import n5Kanji from '@/data/kanji_n5.json';
import n4Kanji from '@/data/kanji_n4.json';
import n3Kanji from '@/data/kanji_n3.json';
import n2Kanji from '@/data/kanji_n2.json';
import n1Kanji from '@/data/kanji_n1.json';

// --- DATASETS ---

const ALL_KANJI_DATA = [
  ...(n5Kanji as any[]),
  ...(n4Kanji as any[]),
  ...(n3Kanji as any[]),
  ...(n2Kanji as any[]),
  ...(n1Kanji as any[]),
];

export const KANJI_CATCH_ITEMS: CatchItemCandidate[] = ALL_KANJI_DATA.map((k, idx) => ({
  id: `k-${k.id || k.kanjiChar || idx}`,
  glyph: k.kanjiChar,
  romaji: (k.onyomi && k.onyomi[0]) || (k.kunyomi && k.kunyomi[0]) || '',
  meaning: (k.meanings && k.meanings.slice(0, 2).join(', ')) || '',
  category: 'kanji',
}));


export const KANA_CATCH_ITEMS: CatchItemCandidate[] = [
  { id: 'h-a', glyph: 'あ', romaji: 'a', meaning: 'sound "a"', category: 'kana' },
  { id: 'h-i', glyph: 'い', romaji: 'i', meaning: 'sound "i"', category: 'kana' },
  { id: 'h-u', glyph: 'う', romaji: 'u', meaning: 'sound "u"', category: 'kana' },
  { id: 'h-e', glyph: 'え', romaji: 'e', meaning: 'sound "e"', category: 'kana' },
  { id: 'h-o', glyph: 'お', romaji: 'o', meaning: 'sound "o"', category: 'kana' },
  { id: 'h-ka', glyph: 'か', romaji: 'ka', meaning: 'sound "ka"', category: 'kana' },
  { id: 'h-ki', glyph: 'き', romaji: 'ki', meaning: 'sound "ki"', category: 'kana' },
  { id: 'h-ku', glyph: 'く', romaji: 'ku', meaning: 'sound "ku"', category: 'kana' },
  { id: 'h-ke', glyph: 'け', romaji: 'ke', meaning: 'sound "ke"', category: 'kana' },
  { id: 'h-ko', glyph: 'こ', romaji: 'ko', meaning: 'sound "ko"', category: 'kana' },
  { id: 'h-sa', glyph: 'さ', romaji: 'sa', meaning: 'sound "sa"', category: 'kana' },
  { id: 'h-shi', glyph: 'し', romaji: 'shi', meaning: 'sound "shi"', category: 'kana' },
  { id: 'h-su', glyph: 'す', romaji: 'su', meaning: 'sound "su"', category: 'kana' },
  { id: 'h-se', glyph: 'せ', romaji: 'se', meaning: 'sound "se"', category: 'kana' },
  { id: 'h-so', glyph: 'そ', romaji: 'so', meaning: 'sound "so"', category: 'kana' },
  { id: 'h-ta', glyph: 'た', romaji: 'ta', meaning: 'sound "ta"', category: 'kana' },
  { id: 'h-chi', glyph: 'ち', romaji: 'chi', meaning: 'sound "chi"', category: 'kana' },
  { id: 'h-tsu', glyph: 'つ', romaji: 'tsu', meaning: 'sound "tsu"', category: 'kana' },
  { id: 'h-te', glyph: 'て', romaji: 'te', meaning: 'sound "te"', category: 'kana' },
  { id: 'h-to', glyph: 'と', romaji: 'to', meaning: 'sound "to"', category: 'kana' },
  { id: 'h-na', glyph: 'な', romaji: 'na', meaning: 'sound "na"', category: 'kana' },
  { id: 'h-ni', glyph: 'に', romaji: 'ni', meaning: 'sound "ni"', category: 'kana' },
  { id: 'h-nu', glyph: 'ぬ', romaji: 'nu', meaning: 'sound "nu"', category: 'kana' },
  { id: 'h-ne', glyph: 'ね', romaji: 'ne', meaning: 'sound "ne"', category: 'kana' },
  { id: 'h-no', glyph: 'の', romaji: 'no', meaning: 'sound "no"', category: 'kana' },
  { id: 'h-ha', glyph: 'は', romaji: 'ha', meaning: 'sound "ha"', category: 'kana' },
  { id: 'h-hi', glyph: 'ひ', romaji: 'hi', meaning: 'sound "hi"', category: 'kana' },
  { id: 'h-fu', glyph: 'ふ', romaji: 'fu', meaning: 'sound "fu"', category: 'kana' },
  { id: 'h-he', glyph: 'へ', romaji: 'he', meaning: 'sound "he"', category: 'kana' },
  { id: 'h-ho', glyph: 'ほ', romaji: 'ho', meaning: 'sound "ho"', category: 'kana' },
  { id: 'h-ma', glyph: 'ま', romaji: 'ma', meaning: 'sound "ma"', category: 'kana' },
  { id: 'h-mi', glyph: 'み', romaji: 'mi', meaning: 'sound "mi"', category: 'kana' },
  { id: 'h-mu', glyph: 'む', romaji: 'mu', meaning: 'sound "mu"', category: 'kana' },
  { id: 'h-me', glyph: 'め', romaji: 'me', meaning: 'sound "me"', category: 'kana' },
  { id: 'h-mo', glyph: 'も', romaji: 'mo', meaning: 'sound "mo"', category: 'kana' },
  { id: 'h-ya', glyph: 'や', romaji: 'ya', meaning: 'sound "ya"', category: 'kana' },
  { id: 'h-yu', glyph: 'ゆ', romaji: 'yu', meaning: 'sound "yu"', category: 'kana' },
  { id: 'h-yo', glyph: 'よ', romaji: 'yo', meaning: 'sound "yo"', category: 'kana' },
  { id: 'h-ra', glyph: 'ら', romaji: 'ra', meaning: 'sound "ra"', category: 'kana' },
  { id: 'h-ri', glyph: 'り', romaji: 'ri', meaning: 'sound "ri"', category: 'kana' },
  { id: 'h-ru', glyph: 'る', romaji: 'ru', meaning: 'sound "ru"', category: 'kana' },
  { id: 'h-re', glyph: 'れ', romaji: 're', meaning: 'sound "re"', category: 'kana' },
  { id: 'h-ro', glyph: 'ろ', romaji: 'ro', meaning: 'sound "ro"', category: 'kana' },
  { id: 'h-wa', glyph: 'わ', romaji: 'wa', meaning: 'sound "wa"', category: 'kana' },
  { id: 'h-wo', glyph: 'を', romaji: 'wo', meaning: 'sound "wo"', category: 'kana' },
  { id: 'h-n', glyph: 'ん', romaji: 'n', meaning: 'sound "n"', category: 'kana' },
  // Katakana Highlights
  { id: 'k-a', glyph: 'ア', romaji: 'a', meaning: 'sound "a"', category: 'kana' },
  { id: 'k-ka', glyph: 'カ', romaji: 'ka', meaning: 'sound "ka"', category: 'kana' },
  { id: 'k-sa', glyph: 'サ', romaji: 'sa', meaning: 'sound "sa"', category: 'kana' },
  { id: 'k-ta', glyph: 'タ', romaji: 'ta', meaning: 'sound "ta"', category: 'kana' },
  { id: 'k-na', glyph: 'ナ', romaji: 'na', meaning: 'sound "na"', category: 'kana' },
];

export const VOCAB_CATCH_ITEMS: CatchItemCandidate[] = [
  { id: 'v-nihon', glyph: '日', romaji: 'nihon', meaning: 'Japan (日本)', category: 'vocab' },
  { id: 'v-sensei', glyph: '先', romaji: 'sensei', meaning: 'Teacher (先生)', category: 'vocab' },
  { id: 'v-gakusei', glyph: '学', romaji: 'gakusei', meaning: 'Student (学生)', category: 'vocab' },
  { id: 'v-gakkou', glyph: '校', romaji: 'gakkou', meaning: 'School (学校)', category: 'vocab' },
  { id: 'v-tomodachi', glyph: '友', romaji: 'tomodachi', meaning: 'Friend (友達)', category: 'vocab' },
  { id: 'v-tenki', glyph: '天', romaji: 'tenki', meaning: 'Weather (天気)', category: 'vocab' },
  { id: 'v-densha', glyph: '電', romaji: 'densha', meaning: 'Train (電車)', category: 'vocab' },
  { id: 'v-kazoku', glyph: '家', romaji: 'kazoku', meaning: 'Family (家族)', category: 'vocab' },
  { id: 'v-jikan', glyph: '時', romaji: 'jikan', meaning: 'Time (時間)', category: 'vocab' },
  { id: 'v-ongaku', glyph: '音', romaji: 'ongaku', meaning: 'Music (音楽)', category: 'vocab' },
  { id: 'v-sakana', glyph: '魚', romaji: 'sakana', meaning: 'Fish (魚)', category: 'vocab' },
  { id: 'v-hon', glyph: '本', romaji: 'hon', meaning: 'Book (本)', category: 'vocab' },
  { id: 'v-ame', glyph: '雨', romaji: 'ame', meaning: 'Rain (雨)', category: 'vocab' },
  { id: 'v-sora', glyph: '空', romaji: 'sora', meaning: 'Sky (空)', category: 'vocab' },
  { id: 'v-kuruma', glyph: '車', romaji: 'kuruma', meaning: 'Car (車)', category: 'vocab' },
];

// --- ENGINE LOGIC ---

/**
 * Returns the pool of candidate items matching the mode
 */
export function getCandidatePool(mode: CatchMode): CatchItemCandidate[] {
  switch (mode) {
    case 'kanji':
      return KANJI_CATCH_ITEMS;
    case 'kana':
      return KANA_CATCH_ITEMS;
    case 'vocab':
      return VOCAB_CATCH_ITEMS;
    case 'mixed':
    default:
      return [...KANJI_CATCH_ITEMS, ...VOCAB_CATCH_ITEMS];
  }
}

/**
 * Generates a random target question for the player to catch
 */
export function getRandomCatchTarget(mode: CatchMode, excludeIds: Set<string> = new Set()): CatchTarget {
  const pool = getCandidatePool(mode);
  const eligible = pool.filter(item => !excludeIds.has(item.id));
  const candidate = eligible.length > 0
    ? eligible[Math.floor(Math.random() * eligible.length)]
    : pool[Math.floor(Math.random() * pool.length)];

  if (candidate.category === 'kana') {
    return {
      id: candidate.id,
      glyph: candidate.glyph,
      promptPrimary: `SOUND: ${candidate.romaji.toUpperCase()}`,
      promptSecondary: `${candidate.glyph} • /${candidate.romaji}/`,
      category: 'kana',
    };
  }

  if (candidate.category === 'vocab') {
    return {
      id: candidate.id,
      glyph: candidate.glyph,
      promptPrimary: candidate.meaning.toUpperCase(),
      promptSecondary: `${candidate.glyph} (${candidate.romaji})`,
      category: 'vocab',
    };
  }

  // Kanji
  return {
    id: candidate.id,
    glyph: candidate.glyph,
    promptPrimary: candidate.meaning.toUpperCase(),
    promptSecondary: `${candidate.romaji} • ${candidate.glyph}`,
    category: 'kanji',
  };
}

/**
 * Configuration options based on difficulty
 */
export interface DifficultyConfig {
  fallSpeed: number; // percentage units per physics tick
  spawnIntervalMs: number;
  columns: number;
  lives: number;
  itemsPerWave: number;
}

export function getDifficultyConfig(difficulty: CatchDifficulty): DifficultyConfig {
  switch (difficulty) {
    case 'chill':
      return {
        fallSpeed: 0.9,
        spawnIntervalMs: 2400,
        columns: 4,
        lives: 4,
        itemsPerWave: 2,
      };
    case 'turbo':
      return {
        fallSpeed: 1.8,
        spawnIntervalMs: 1400,
        columns: 4,
        lives: 3,
        itemsPerWave: 3,
      };
    case 'normal':
    default:
      return {
        fallSpeed: 1.3,
        spawnIntervalMs: 1800,
        columns: 4,
        lives: 3,
        itemsPerWave: 2,
      };
  }
}

/**
 * Spawns a new wave of falling items across the available columns.
 * Guaranteed to place either the target or plausible distractors.
 */
export function spawnFallingWave(
  target: CatchTarget,
  columns: number,
  candidatePool: CatchItemCandidate[],
  difficulty: CatchDifficulty,
  includeTarget = true
): CatchFallingItem[] {
  const config = getDifficultyConfig(difficulty);
  const items: CatchFallingItem[] = [];

  // Pick random unique columns
  const availableColumns = Array.from({ length: columns }, (_, i) => i);
  // Shuffle columns
  for (let i = availableColumns.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [availableColumns[i], availableColumns[j]] = [availableColumns[j], availableColumns[i]];
  }

  const waveSize = Math.min(config.itemsPerWave, columns);
  const selectedColumns = availableColumns.slice(0, waveSize);

  let targetPlaced = false;

  // 1. If includeTarget is true, place target in one of the selected columns
  if (includeTarget && selectedColumns.length > 0) {
    const targetCol = selectedColumns[0];
    items.push({
      id: `${target.id}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      glyph: target.glyph,
      romaji: target.promptSecondary || '',
      meaning: target.promptPrimary,
      column: targetCol,
      yPosition: 0,
      speed: config.fallSpeed,
      isTarget: true,
      isBonus: false,
    });
    targetPlaced = true;
  }

  // 2. Pick distractors for the remaining columns
  const distractorPool = candidatePool.filter(c => c.glyph !== target.glyph);
  const remainingColumns = targetPlaced ? selectedColumns.slice(1) : selectedColumns;

  // 5% chance of bonus star item on chill/normal
  const spawnBonus = Math.random() < 0.08 && remainingColumns.length > 1;

  remainingColumns.forEach((col, idx) => {
    if (spawnBonus && idx === 0) {
      items.push({
        id: `bonus-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        glyph: '⭐',
        romaji: 'bonus',
        meaning: 'Bonus Star (+250)',
        column: col,
        yPosition: 0,
        speed: config.fallSpeed * 1.15,
        isTarget: false,
        isBonus: true,
      });
      return;
    }

    const distractor = distractorPool[Math.floor(Math.random() * distractorPool.length)];
    if (distractor) {
      items.push({
        id: `${distractor.id}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        glyph: distractor.glyph,
        romaji: distractor.romaji,
        meaning: distractor.meaning,
        column: col,
        yPosition: 0,
        speed: config.fallSpeed * (0.95 + Math.random() * 0.1),
        isTarget: false,
        isBonus: false,
      });
    }
  });

  return items;
}

/**
 * Checks if the basket is colliding with a falling item.
 * basketPosPercent: 0% (left) to 100% (right)
 * columns: total columns (e.g. 4)
 * itemY: current Y position of item in percentage (0 to 100)
 */
export function isBasketColliding(
  itemColumn: number,
  itemY: number,
  basketPosPercent: number,
  totalColumns = 4,
  basketWidthPercent = 25
): boolean {
  // Vertical collision check: basket sits at y = 80% to 92%
  if (itemY < 80 || itemY > 93) {
    return false;
  }

  // Column centers in percentage (e.g. for 4 cols: col 0 = 12.5%, col 1 = 37.5%, col 2 = 62.5%, col 3 = 87.5%)
  const colWidth = 100 / totalColumns;
  const colCenter = itemColumn * colWidth + colWidth / 2;

  // The basket overlaps if the distance between basket center and column center is <= (basketWidth / 2 + colWidth / 2)
  const maxCatchDistance = (basketWidthPercent / 2) + (colWidth / 2) * 0.75;
  const dist = Math.abs(basketPosPercent - colCenter);

  return dist <= maxCatchDistance;
}

/**
 * Calculates score earned for catching an item
 */
export function calculateCatchScore(
  streak: number,
  difficulty: CatchDifficulty,
  isBonus = false
): number {
  if (isBonus) {
    return 250;
  }

  let base = 100;
  if (difficulty === 'chill') base = 80;
  if (difficulty === 'turbo') base = 150;

  let multiplier = 1.0;
  if (streak >= 10) multiplier = 3.0;
  else if (streak >= 6) multiplier = 2.0;
  else if (streak >= 3) multiplier = 1.5;

  return Math.round(base * multiplier);
}

/**
 * Clamps basket position within valid percentage bounds [minPercent, maxPercent]
 */
export function clampBasketPosition(posPercent: number, basketWidthPercent = 25): number {
  const half = basketWidthPercent / 2;
  return Math.max(half, Math.min(100 - half, posPercent));
}

/**
 * Converts a discrete column index to center percentage
 */
export function columnToPercent(col: number, totalColumns = 4): number {
  const colWidth = 100 / totalColumns;
  return col * colWidth + colWidth / 2;
}

/**
 * Converts a continuous percentage to closest discrete column index
 */
export function percentToColumn(posPercent: number, totalColumns = 4): number {
  const colWidth = 100 / totalColumns;
  const col = Math.floor(posPercent / colWidth);
  return Math.max(0, Math.min(totalColumns - 1, col));
}
