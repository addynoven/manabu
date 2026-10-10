export type BreathPhase = 'inhale' | 'hold' | 'exhale' | 'rest';

export interface ZenQuote {
  kanji: string;
  reading: string;
  romaji: string;
  meaning: string;
  reflection: string;
}

export type WordleLetterStatus = 'correct' | 'present' | 'absent' | 'empty';

export interface WordleGuessFeedback {
  kana: string;
  status: WordleLetterStatus;
}

export interface WordleWord {
  word: string;
  kanji?: string;
  reading: string;
  meaning: string;
}

export type MemoryDeckMode = 'kana-romaji' | 'hira-kata' | 'kanji-meaning';

export interface MemoryCard {
  id: string;
  pairId: string;
  content: string;
  subContent?: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface RainItem {
  id: string;
  glyph: string;
  answer: string;
  options: string[];
  column: number;
  yPosition: number;
  speed: number;
}

export interface DailyChallengeResult {
  score: number;
  timeSeconds: number;
  accuracy: number;
  date: string;
}

export type CatchMode = 'kanji' | 'kana' | 'vocab' | 'mixed';
export type CatchDifficulty = 'chill' | 'normal' | 'turbo';

export interface CatchTarget {
  id: string;
  glyph: string;
  promptPrimary: string;
  promptSecondary?: string;
  category: 'kanji' | 'kana' | 'vocab';
  hint?: string;
}

export interface CatchItemCandidate {
  id: string;
  glyph: string;
  romaji: string;
  meaning: string;
  category: 'kanji' | 'kana' | 'vocab';
}

export interface CatchFallingItem {
  id: string;
  glyph: string;
  romaji: string;
  meaning?: string;
  column: number;
  yPosition: number;
  speed: number;
  isTarget: boolean;
  isBonus?: boolean;
}

export interface ArcadeStats {
  wordlePlayed: number;
  wordleWins: number;
  wordleCurrentStreak: number;
  wordleMaxStreak: number;
  memoryBestMoves: Record<MemoryDeckMode, number>;
  rainHighScore: number;
  snakeHighScore: number;
  catchHighScore: number;
  survivalHighScores: Record<string, number>;
  zenMinutesTotal: number;
  zenCyclesTotal: number;
  dailyChallengeDate: string;
  dailyChallengeStreak: number;
  dailyChallengeCompleted: boolean;
  dailyChallengeLastResult: DailyChallengeResult | null;
  lastFinishedGameScore?: {
    game: 'rain' | 'snake' | 'catch' | 'survival';
    score: number;
    timestamp: number;
  } | null;
}
