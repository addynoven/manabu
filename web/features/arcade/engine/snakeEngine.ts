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
];

export function isValidDirectionChange(current: Direction, next: Direction): boolean {
  return OPPOSITE_DIRECTIONS[current] !== next && current !== next;
}

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
      return null;
    }
    return next;
  }

  const wrappedX = (next.x + bounds.cols) % bounds.cols;
  const wrappedY = (next.y + bounds.rows) % bounds.rows;
  return { x: wrappedX, y: wrappedY };
}

export function checkSelfCollision(head: Coordinate, body: Coordinate[]): boolean {
  return body.some(segment => segment.x === head.x && segment.y === head.y);
}

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
    return { x: 0, y: 0 };
  }

  const randomIndex = Math.floor(Math.random() * availableCoords.length);
  return availableCoords[randomIndex];
}

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
