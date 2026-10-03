/**
 * Manabu V3 social data model (DRAFT).
 * Mirrors firestore.rules.v3-draft. Keep the two in sync.
 * Suggested location: src/features/community/models/social.model.ts
 */
import { z } from 'zod';
import { BeltRankSchema } from '../../sync/models/sync.model';

// Firestore Timestamp (read side). Writes use serverTimestamp().
const TimestampSchema = z.custom<{ toDate(): Date }>(
  v =>
    typeof v === 'object' &&
    v !== null &&
    typeof (v as { toDate?: unknown }).toDate === 'function',
);

const DateStringSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

/* ---------- ids, codes, weeks ---------- */

// 32 unambiguous characters (no I, O, 0, 1). Matches /^[A-HJ-NP-Z2-9]{8}$/ in the rules.
export const FRIEND_CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export function generateFriendCode(random: () => number = Math.random): string {
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += FRIEND_CODE_ALPHABET[Math.floor(random() * FRIEND_CODE_ALPHABET.length)];
  }
  return code;
}

export const friendRequestId = (fromUid: string, toUid: string) => `${fromUid}_${toUid}`;
export const challengeId = (creatorUid: string, targetUid: string, gameId: ChallengeGameId) =>
  `${creatorUid}_${targetUid}_${gameId}`;

/** ISO-8601 week id like "2026-W40". Weeks roll over Monday 00:00 UTC. */
export function getWeekId(date: Date = new Date()): string {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum); // Thursday of this ISO week
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

/* ---------- /profiles/{uid}: what friends can see ---------- */

export const DailyResultSchema = z.object({
  date: DateStringSchema,
  score: z.number().min(0),
  timeSeconds: z.number().min(0),
  accuracy: z.number().min(0).max(100),
});

export const ProfileSchema = z.object({
  uid: z.string(),
  displayName: z.string().min(1).max(24), // chosen by the user, NOT copied from Google
  avatarEmoji: z.string().max(16),
  beltRank: BeltRankSchema,
  level: z.number().int().min(1),
  totalXp: z.number().int().min(0),
  weeklyXp: z.number().int().min(0),
  weekId: z.string().regex(/^\d{4}-W\d{2}$/),
  currentStreak: z.number().int().min(0),
  friendCode: z.string().regex(/^[A-HJ-NP-Z2-9]{8}$/),
  lastActiveDate: DateStringSchema.nullable(), // null until first practice; lets friends see "studied today?"
  daily: DailyResultSchema.optional(), // latest Daily Challenge result
  updatedAt: TimestampSchema,
});
export type Profile = z.infer<typeof ProfileSchema>;

/* ---------- /friend_requests/{from_to} and /friendships/{from_to} ---------- */

export const FriendRequestSchema = z.object({
  fromUid: z.string(),
  toUid: z.string(),
  status: z.enum(['pending', 'accepted', 'declined']),
  createdAt: TimestampSchema,
});
export type FriendRequest = z.infer<typeof FriendRequestSchema>;

export const FriendshipSchema = z.object({
  members: z.tuple([z.string(), z.string()]), // [requester, recipient]
  createdAt: TimestampSchema,
});
export type Friendship = z.infer<typeof FriendshipSchema>;

/* ---------- /arcade_challenges/{creator_target_game} ---------- */

export const CHALLENGE_GAME_IDS = ['rain', 'snake', 'catch', 'survival'] as const;
export type ChallengeGameId = (typeof CHALLENGE_GAME_IDS)[number];

// Must match maxScore() in the rules. Pure sanity bound: these games run until lives/timer
// run out, so they have no real maximum and a tight cap would reject legitimate long runs.
export const CHALLENGE_MAX_SCORE: Record<ChallengeGameId, number> = {
  rain: 1_000_000,
  snake: 1_000_000,
  catch: 1_000_000,
  survival: 1_000_000,
};
export const CHALLENGE_TTL_HOURS = 48;

export const ArcadeChallengeSchema = z.object({
  gameId: z.enum(CHALLENGE_GAME_IDS),
  mode: z.string().max(24), // e.g. 'kana' | 'kanji' | 'hell'
  creatorUid: z.string(),
  targetUid: z.string(),
  members: z.tuple([z.string(), z.string()]), // [creatorUid, targetUid]
  creatorScore: z.number().int().min(0),
  targetScore: z.number().int().min(0).nullable(),
  winnerUid: z.string().nullable(), // uid | 'tie' | null while pending
  status: z.enum(['pending', 'completed', 'declined']),
  createdAt: TimestampSchema,
  expiresAt: TimestampSchema, // createdAt + 48h, enforced by the rules
});
export type ArcadeChallenge = z.infer<typeof ArcadeChallengeSchema>;

/** Same winner logic as the rules (higher score wins; all four games are higher-is-better). */
export function deriveWinner(
  creatorUid: string,
  targetUid: string,
  creatorScore: number,
  targetScore: number,
): string {
  if (targetScore > creatorScore) return targetUid;
  if (targetScore < creatorScore) return creatorUid;
  return 'tie';
}

export function isChallengeOpen(c: Pick<ArcadeChallenge, 'status' | 'expiresAt'>, now = new Date()) {
  return c.status === 'pending' && c.expiresAt.toDate().getTime() > now.getTime();
}
