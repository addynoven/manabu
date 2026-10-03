import { z } from 'zod';

export type ScoreChallengeGame = 'rain' | 'snake' | 'catch' | 'survival';
export type ScoreChallengeStatus = 'pending' | 'completed' | 'declined' | 'expired';

export interface ScoreChallengeParticipant {
  uid: string;
  displayName: string;
  avatarEmoji: string;
  score: number | null;
}

export interface ScoreChallengeItem {
  id: string;
  game: ScoreChallengeGame;
  mode: string;
  creator: ScoreChallengeParticipant;
  target: ScoreChallengeParticipant;
  status: ScoreChallengeStatus;
  winner: 'creator' | 'target' | 'draw' | null;
  isIncoming: boolean;
  createdAt: string;
  expiresAt: string;
  completedAt?: string | null;
}

export interface ScoreChallengeResponseResult {
  status: string;
  winner: 'creator' | 'target' | 'draw';
  creatorScore: number;
  targetScore: number;
}

export const ScoreChallengeParticipantSchema = z.object({
  uid: z.string(),
  displayName: z.string(),
  avatarEmoji: z.string(),
  score: z.number().nullable(),
});

export const ScoreChallengeItemSchema = z.object({
  id: z.string(),
  game: z.enum(['rain', 'snake', 'catch', 'survival']),
  mode: z.string(),
  creator: ScoreChallengeParticipantSchema,
  target: ScoreChallengeParticipantSchema,
  status: z.enum(['pending', 'completed', 'declined', 'expired']),
  winner: z.enum(['creator', 'target', 'draw']).nullable(),
  isIncoming: z.boolean(),
  createdAt: z.string(),
  expiresAt: z.string(),
  completedAt: z.string().nullable().optional(),
});
