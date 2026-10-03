export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
export type SnakeDifficulty = 'chill' | 'normal' | 'turbo';
export type SnakeMode = 'hiragana' | 'katakana' | 'kanji' | 'words';
export type WallMode = 'classic' | 'zen';

export interface Coordinate {
  x: number;
  y: number;
}

export interface GridBounds {
  cols: number;
  rows: number;
}

export interface SnakeFoodItem {
  kana: string;
  romaji: string;
  meaning?: string;
  isBonus?: boolean;
}

export interface WordQuestItem {
  word: string;
  romaji: string;
  meaning: string;
  syllables: { kana: string; romaji: string }[];
}

export const DIFFICULTY_SPEED_MS: Record<SnakeDifficulty, number> = {
  chill: 180,
  normal: 125,
  turbo: 80,
};

export const OPPOSITE_DIRECTIONS: Record<Direction, Direction> = {
  UP: 'DOWN',
  DOWN: 'UP',
  LEFT: 'RIGHT',
  RIGHT: 'LEFT',
};

export const HIRAGANA_FOODS: SnakeFoodItem[] = [
  { kana: 'あ', romaji: 'a' },
  { kana: 'い', romaji: 'i' },
  { kana: 'う', romaji: 'u' },
  { kana: 'え', romaji: 'e' },
  { kana: 'お', romaji: 'o' },
  { kana: 'か', romaji: 'ka' },
  { kana: 'き', romaji: 'ki' },
  { kana: 'く', romaji: 'ku' },
  { kana: 'け', romaji: 'ke' },
  { kana: 'こ', romaji: 'ko' },
  { kana: 'さ', romaji: 'sa' },
  { kana: 'し', romaji: 'shi' },
  { kana: 'す', romaji: 'su' },
  { kana: 'せ', romaji: 'se' },
  { kana: 'そ', romaji: 'so' },
  { kana: 'た', romaji: 'ta' },
  { kana: 'ち', romaji: 'chi' },
  { kana: 'つ', romaji: 'tsu' },
  { kana: 'て', romaji: 'te' },
  { kana: 'と', romaji: 'to' },
  { kana: 'な', romaji: 'na' },
  { kana: 'に', romaji: 'ni' },
  { kana: 'ぬ', romaji: 'nu' },
  { kana: 'ね', romaji: 'ne' },
  { kana: 'の', romaji: 'no' },
  { kana: 'は', romaji: 'ha' },
  { kana: 'ひ', romaji: 'hi' },
  { kana: 'ふ', romaji: 'fu' },
  { kana: 'へ', romaji: 'he' },
  { kana: 'ほ', romaji: 'ho' },
  { kana: 'ま', romaji: 'ma' },
  { kana: 'み', romaji: 'mi' },
  { kana: 'む', romaji: 'mu' },
  { kana: 'め', romaji: 'me' },
  { kana: 'も', romaji: 'mo' },
  { kana: 'や', romaji: 'ya' },
  { kana: 'ゆ', romaji: 'yu' },
  { kana: 'よ', romaji: 'yo' },
  { kana: 'ら', romaji: 'ra' },
  { kana: 'り', romaji: 'ri' },
  { kana: 'る', romaji: 'ru' },
  { kana: 'れ', romaji: 're' },
  { kana: 'ろ', romaji: 'ro' },
  { kana: 'わ', romaji: 'wa' },
  { kana: 'を', romaji: 'wo' },
  { kana: 'ん', romaji: 'n' },
];

export const KATAKANA_FOODS: SnakeFoodItem[] = [
  { kana: 'ア', romaji: 'a' },
  { kana: 'イ', romaji: 'i' },
  { kana: 'ウ', romaji: 'u' },
  { kana: 'エ', romaji: 'e' },
  { kana: 'オ', romaji: 'o' },
  { kana: 'カ', romaji: 'ka' },
  { kana: 'キ', romaji: 'ki' },
  { kana: 'ク', romaji: 'ku' },
  { kana: 'ケ', romaji: 'ke' },
  { kana: 'コ', romaji: 'ko' },
  { kana: 'サ', romaji: 'sa' },
  { kana: 'シ', romaji: 'shi' },
  { kana: 'ス', romaji: 'su' },
  { kana: 'セ', romaji: 'se' },
  { kana: 'ソ', romaji: 'so' },
  { kana: 'タ', romaji: 'ta' },
  { kana: 'チ', romaji: 'chi' },
  { kana: 'ツ', romaji: 'tsu' },
  { kana: 'テ', romaji: 'te' },
  { kana: 'ト', romaji: 'to' },
  { kana: 'ナ', romaji: 'na' },
  { kana: 'ニ', romaji: 'ni' },
  { kana: 'ヌ', romaji: 'nu' },
  { kana: 'ネ', romaji: 'ne' },
  { kana: 'ノ', romaji: 'no' },
  { kana: 'ハ', romaji: 'ha' },
  { kana: 'ヒ', romaji: 'hi' },
  { kana: 'フ', romaji: 'fu' },
  { kana: 'ヘ', romaji: 'he' },
  { kana: 'ホ', romaji: 'ho' },
  { kana: 'マ', romaji: 'ma' },
  { kana: 'ミ', romaji: 'mi' },
  { kana: 'ム', romaji: 'mu' },
  { kana: 'メ', romaji: 'me' },
  { kana: 'モ', romaji: 'mo' },
  { kana: 'ヤ', romaji: 'ya' },
  { kana: 'ユ', romaji: 'yu' },
  { kana: 'ヨ', romaji: 'yo' },
  { kana: 'ラ', romaji: 'ra' },
  { kana: 'リ', romaji: 'ri' },
  { kana: 'ル', romaji: 'ru' },
  { kana: 'レ', romaji: 're' },
  { kana: 'ロ', romaji: 'ro' },
  { kana: 'ワ', romaji: 'wa' },
  { kana: 'ヲ', romaji: 'wo' },
  { kana: 'ン', romaji: 'n' },
];

export const KANJI_FOODS: SnakeFoodItem[] = [
  { kana: '一', romaji: 'ichi', meaning: 'One' },
  { kana: '二', romaji: 'ni', meaning: 'Two' },
  { kana: '三', romaji: 'san', meaning: 'Three' },
  { kana: '四', romaji: 'yon', meaning: 'Four' },
  { kana: '五', romaji: 'go', meaning: 'Five' },
  { kana: '六', romaji: 'roku', meaning: 'Six' },
  { kana: '七', romaji: 'nana', meaning: 'Seven' },
  { kana: '八', romaji: 'hachi', meaning: 'Eight' },
  { kana: '九', romaji: 'kyuu', meaning: 'Nine' },
  { kana: '十', romaji: 'juu', meaning: 'Ten' },
  { kana: '日', romaji: 'hi / nichi', meaning: 'Sun / Day' },
  { kana: '月', romaji: 'tsuki / getsu', meaning: 'Moon / Month' },
  { kana: '火', romaji: 'hi / ka', meaning: 'Fire' },
  { kana: '水', romaji: 'mizu / sui', meaning: 'Water' },
  { kana: '木', romaji: 'ki / moku', meaning: 'Tree / Wood' },
  { kana: '金', romaji: 'kane / kin', meaning: 'Gold / Money' },
  { kana: '土', romaji: 'tsuchi / do', meaning: 'Earth / Soil' },
  { kana: '山', romaji: 'yama', meaning: 'Mountain' },
  { kana: '川', romaji: 'kawa', meaning: 'River' },
  { kana: '人', romaji: 'hito / jin', meaning: 'Person' },
];

export const WORD_QUEST_ITEMS: WordQuestItem[] = [
  {
    word: 'ねこ',
    romaji: 'neko',
    meaning: 'Cat',
    syllables: [
      { kana: 'ね', romaji: 'ne' },
      { kana: 'こ', romaji: 'ko' },
    ],
  },
  {
    word: 'いぬ',
    romaji: 'inu',
    meaning: 'Dog',
    syllables: [
      { kana: 'い', romaji: 'i' },
      { kana: 'ぬ', romaji: 'nu' },
    ],
  },
  {
    word: 'すし',
    romaji: 'sushi',
    meaning: 'Sushi',
    syllables: [
      { kana: 'す', romaji: 'su' },
      { kana: 'し', romaji: 'shi' },
    ],
  },
  {
    word: 'やま',
    romaji: 'yama',
    meaning: 'Mountain',
    syllables: [
      { kana: 'や', romaji: 'ya' },
      { kana: 'ま', romaji: 'ma' },
    ],
  },
  {
    word: 'かわ',
    romaji: 'kawa',
    meaning: 'River',
    syllables: [
      { kana: 'か', romaji: 'ka' },
      { kana: 'わ', romaji: 'wa' },
    ],
  },
  {
    word: 'はな',
    romaji: 'hana',
    meaning: 'Flower',
    syllables: [
      { kana: 'は', romaji: 'ha' },
      { kana: 'な', romaji: 'na' },
    ],
  },
  {
    word: 'ほし',
    romaji: 'hoshi',
    meaning: 'Star',
    syllables: [
      { kana: 'ほ', romaji: 'ho' },
      { kana: 'し', romaji: 'shi' },
    ],
  },
  {
    word: 'ゆき',
    romaji: 'yuki',
    meaning: 'Snow',
    syllables: [
      { kana: 'ゆ', romaji: 'yu' },
      { kana: 'き', romaji: 'ki' },
    ],
  },
  {
    word: 'みず',
    romaji: 'mizu',
    meaning: 'Water',
    syllables: [
      { kana: 'み', romaji: 'mi' },
      { kana: 'ず', romaji: 'zu' },
    ],
  },
  {
    word: 'つき',
    romaji: 'tsuki',
    meaning: 'Moon',
    syllables: [
      { kana: 'つ', romaji: 'tsu' },
      { kana: 'き', romaji: 'ki' },
    ],
  },
];

/**
 * Checks if a requested direction change is valid (not an immediate 180 reversal).
 */
export function isValidDirectionChange(current: Direction, next: Direction): boolean {
  return OPPOSITE_DIRECTIONS[current] !== next && current !== next;
}

/**
 * Calculates the next head position based on movement direction and wall collision mode.
 * Returns null if the snake hits a wall in 'classic' mode.
 */
export function getNextHeadPosition(
  head: Coordinate,
  direction: Direction,
  bounds: GridBounds,
  wallMode: WallMode
): Coordinate | null {
  const next = { ...head };

  switch (direction) {
    case 'UP':
      next.y -= 1;
      break;
    case 'DOWN':
      next.y += 1;
      break;
    case 'LEFT':
      next.x -= 1;
      break;
    case 'RIGHT':
      next.x += 1;
      break;
  }

  if (wallMode === 'classic') {
    if (next.x < 0 || next.x >= bounds.cols || next.y < 0 || next.y >= bounds.rows) {
      return null; // Fatal wall collision
    }
    return next;
  }

  // Zen Mode (wrap-around)
  const wrappedX = (next.x + bounds.cols) % bounds.cols;
  const wrappedY = (next.y + bounds.rows) % bounds.rows;
  return { x: wrappedX, y: wrappedY };
}

/**
 * Checks if a coordinate collides with any segment of the snake body.
 */
export function checkSelfCollision(head: Coordinate, body: Coordinate[]): boolean {
  return body.some(segment => segment.x === head.x && segment.y === head.y);
}

/**
 * Spawns a food position guaranteed to NOT overlap with the snake.
 */
export function spawnFoodPosition(bounds: GridBounds, snake: Coordinate[]): Coordinate {
  const occupiedSet = new Set(snake.map(s => `${s.x},${s.y}`));
  const availableCoords: Coordinate[] = [];

  for (let r = 0; r < bounds.rows; r++) {
    for (let c = 0; c < bounds.cols; c++) {
      if (!occupiedSet.has(`${c},${r}`)) {
        availableCoords.push({ x: c, y: r });
      }
    }
  }

  if (availableCoords.length === 0) {
    // Board is completely filled!
    return { x: 0, y: 0 };
  }

  const randomIndex = Math.floor(Math.random() * availableCoords.length);
  return availableCoords[randomIndex];
}

/**
 * Returns a food item for the selected game mode.
 */
export function getFoodForMode(
  mode: SnakeMode,
  wordQuestState?: { wordIndex: number; syllableIndex: number }
): {
  food: SnakeFoodItem;
  nextWordState?: { wordIndex: number; syllableIndex: number; wordCompleted?: boolean; completedWord?: string };
} {
  if (mode === 'words') {
    const wIndex = wordQuestState?.wordIndex ?? Math.floor(Math.random() * WORD_QUEST_ITEMS.length);
    const sIndex = wordQuestState?.syllableIndex ?? 0;
    const currentWord = WORD_QUEST_ITEMS[wIndex % WORD_QUEST_ITEMS.length];
    const targetSyllable = currentWord.syllables[sIndex];

    const isLastSyllable = sIndex === currentWord.syllables.length - 1;
    const nextState = isLastSyllable
      ? {
          wordIndex: (wIndex + 1) % WORD_QUEST_ITEMS.length,
          syllableIndex: 0,
          wordCompleted: true,
          completedWord: `${currentWord.word} (${currentWord.meaning})`,
        }
      : {
          wordIndex: wIndex,
          syllableIndex: sIndex + 1,
          wordCompleted: false,
        };

    return {
      food: {
        kana: targetSyllable.kana,
        romaji: targetSyllable.romaji,
        meaning: `Spell: ${currentWord.word} (${sIndex + 1}/${currentWord.syllables.length})`,
        isBonus: isLastSyllable,
      },
      nextWordState: nextState,
    };
  }

  let pool: SnakeFoodItem[];
  switch (mode) {
    case 'katakana':
      pool = KATAKANA_FOODS;
      break;
    case 'kanji':
      pool = KANJI_FOODS;
      break;
    case 'hiragana':
    default:
      pool = HIRAGANA_FOODS;
      break;
  }

  const chosen = pool[Math.floor(Math.random() * pool.length)];
  return { food: chosen };
}

/**
 * Calculates score for eating a food item with combo multiplier and word completion bonus.
 */
export function calculateSnakeScore(
  streak: number,
  difficulty: SnakeDifficulty,
  isWordComplete = false
): number {
  const diffMultiplier = difficulty === 'turbo' ? 2 : difficulty === 'normal' ? 1.5 : 1;
  const comboMultiplier = streak >= 15 ? 3 : streak >= 8 ? 2 : streak >= 4 ? 1.5 : 1;
  const basePoints = 10;
  const wordBonus = isWordComplete ? 50 : 0;

  return Math.round(basePoints * diffMultiplier * comboMultiplier) + wordBonus;
}
