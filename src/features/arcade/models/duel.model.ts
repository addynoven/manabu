import { z } from 'zod';
import type { KanjiDuelQuestion } from '../lib/kanjiDuelEngine';

export type DuelGameType = 'kanjiDuel' | 'karuta' | 'shiritori';
export type DuelStatus = 'waiting' | 'live' | 'finished' | 'declined' | 'expired' | 'forfeit';

export interface DuelOpponent {
  uid: string;
  displayName: string;
  avatarEmoji: string;
  beltRank: string;
  level: number;
}

export interface DuelRoundHistory {
  round: number;
  mine: { correct: boolean; reactionMs: number | null };
  theirs: { correct: boolean; reactionMs: number | null };
  winner: 'me' | 'them' | 'none';
}

export interface DuelResult {
  winner: 'me' | 'them' | 'draw';
  reason: 'rounds' | 'forfeit' | 'timeout' | 'ended_with_n';
}

export interface DuelState {
  id: string;
  game: DuelGameType;
  status: DuelStatus;
  opponent: DuelOpponent;
  deck?: KanjiDuelQuestion[];
  round: number;
  totalRounds: number;
  roundDeadlineMs: number | null;
  mySubmitted: boolean;
  opponentSubmitted: boolean;
  history: DuelRoundHistory[];
  winsMe: number;
  winsThem: number;
  opponentGone: boolean;
  result?: DuelResult;
  turn?: 'me' | 'them';
  turnDeadlineMs?: number | null;
  words?: Array<{ word: string; by: 'me' | 'them'; timestamp: number }>;
  serverTime: number;
}

export interface DuelInvite {
  id: string;
  game: DuelGameType;
  status: DuelStatus;
  createdAt: number;
  sender: DuelOpponent;
}

export const DuelInviteSchema = z.object({
  id: z.string(),
  game: z.enum(['kanjiDuel', 'karuta', 'shiritori']),
  status: z.enum(['waiting', 'live', 'finished', 'declined', 'expired', 'forfeit']),
  createdAt: z.number(),
  sender: z.object({
    uid: z.string(),
    displayName: z.string(),
    avatarEmoji: z.string(),
    beltRank: z.string(),
    level: z.number(),
  }),
});

export const DuelStateSchema = z.object({
  id: z.string(),
  game: z.enum(['kanjiDuel', 'karuta', 'shiritori']),
  status: z.enum(['waiting', 'live', 'finished', 'declined', 'expired', 'forfeit']),
  opponent: z.object({
    uid: z.string(),
    displayName: z.string(),
    avatarEmoji: z.string(),
    beltRank: z.string(),
    level: z.number(),
  }),
  deck: z.array(z.any()).optional(),
  round: z.number(),
  totalRounds: z.number(),
  roundDeadlineMs: z.number().nullable(),
  mySubmitted: z.boolean(),
  opponentSubmitted: z.boolean(),
  history: z.array(
    z.object({
      round: z.number(),
      mine: z.object({ correct: z.boolean(), reactionMs: z.number().nullable() }),
      theirs: z.object({ correct: z.boolean(), reactionMs: z.number().nullable() }),
      winner: z.enum(['me', 'them', 'none']),
    })
  ),
  winsMe: z.number(),
  winsThem: z.number(),
  opponentGone: z.boolean(),
  result: z
    .object({
      winner: z.enum(['me', 'them', 'draw']),
      reason: z.enum(['rounds', 'forfeit', 'timeout', 'ended_with_n']),
    })
    .optional(),
  turn: z.enum(['me', 'them']).optional(),
  turnDeadlineMs: z.number().nullable().optional(),
  words: z
    .array(
      z.object({
        word: z.string(),
        by: z.enum(['me', 'them']),
        timestamp: z.number(),
      })
    )
    .optional(),
  serverTime: z.number(),
});
