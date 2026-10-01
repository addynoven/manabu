import { z } from 'zod';
import {
  BeltRankSchema,
  type BeltRank,
  FriendRecordSchema,
  type FriendRecord,
  FriendRequestSchema,
  type FriendRequest,
  CommunityFeedItemSchema,
  type CommunityFeedItem,
} from '../../sync/models/sync.model';

export {
  BeltRankSchema,
  type BeltRank,
  FriendRecordSchema,
  type FriendRecord,
  FriendRequestSchema,
  type FriendRequest,
  CommunityFeedItemSchema,
  type CommunityFeedItem,
};

export const LeaderboardEntrySchema = z.object({
  uid: z.string(),
  displayName: z.string(),
  photoURL: z.string().nullable().optional(),
  avatarEmoji: z.string().default('🥋'),
  beltRank: BeltRankSchema.default('white'),
  level: z.number().default(1),
  totalXp: z.number().default(0),
  currentStreak: z.number().default(0),
  rank: z.number(),
});
export type LeaderboardEntry = z.infer<typeof LeaderboardEntrySchema>;

export type LeaderboardTimeframe = 'all_time' | 'weekly';
