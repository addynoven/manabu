import type { CardStateRecord } from '../models/srs.types';

export interface SrsSessionState {
  currentQueue: CardStateRecord[];
  currentIndex: number;
  reviewedCount: number;
}

let sessionState: SrsSessionState = {
  currentQueue: [],
  currentIndex: 0,
  reviewedCount: 0,
};

export const srsStore = {
  get(): SrsSessionState {
    return sessionState;
  },
  set(newState: Partial<SrsSessionState>): void {
    sessionState = { ...sessionState, ...newState };
  },
  reset(): void {
    sessionState = { currentQueue: [], currentIndex: 0, reviewedCount: 0 };
  },
};
