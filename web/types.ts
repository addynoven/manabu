/**
 * Global Application-Level Type Declarations (Web Workstation)
 */

export type Result<T, E = Error> =
  | { ok: true; data: T }
  | { ok: false; error: E };

export interface UserDomainEntity {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  xp: number;
  streak: number;
  desiredRetention: number;
  createdAt: string;
}

export interface SRSCardEntity {
  cardId: string;
  uid: string;
  itemType: 'KANJI' | 'VOCAB' | 'KANA' | 'GRAMMAR';
  itemId: string;
  state: 'NEW' | 'LEARNING' | 'REVIEW' | 'RELEARNING';
  step: number;
  stability: number;
  difficulty: number;
  repetitionCount: number;
  lapses: number;
  lastReviewedAt: string | null;
  dueAt: string;
}

export type ArcadeGameType =
  | 'wordle'
  | 'snake'
  | 'catch'
  | 'kanji_duel'
  | 'karuta'
  | 'shiritori'
  | 'survival'
  | 'gauntlet';

export interface AppConfig {
  adminSecret: string;
  postgresUrl: string;
  valkeyUrl: string;
  firebaseApiKey?: string;
  firebaseAuthDomain?: string;
  firebaseProjectId?: string;
}

export class AppError extends Error {
  constructor(
    message: string,
    public code: string = 'INTERNAL_ERROR',
    public statusCode: number = 500,
    public details?: unknown
  ) {
    super(message);
    this.name = 'AppError';
  }
}
