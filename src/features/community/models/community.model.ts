import { z } from 'zod';

export const BeltRankSchema = z.enum([
  'white',
  'yellow',
  'green',
  'blue',
  'purple',
  'brown',
  'black',
]);
export type BeltRank = z.infer<typeof BeltRankSchema>;

export const UserLiteSchema = z.object({
  uid: z.string(),
  displayName: z.string(),
  avatarEmoji: z.string().default('🥋'),
  beltRank: z.string().default('white'),
  level: z.number().default(1),
});
export type UserLite = z.infer<typeof UserLiteSchema>;

export const FriendDailyResultSchema = z.object({
  date: z.string(),
  score: z.number(),
  timeSeconds: z.number(),
  accuracy: z.number(),
});
export type FriendDailyResult = z.infer<typeof FriendDailyResultSchema>;

export const FriendUserSchema = z.object({
  uid: z.string(),
  displayName: z.string(),
  avatarEmoji: z.string().default('🥋'),
  beltRank: z.string().default('white'),
  level: z.number().default(1),
  currentStreak: z.number().default(0),
  weeklyXp: z.number().default(0),
  lastActiveDate: z.string().nullable().optional(),
  daily: FriendDailyResultSchema.nullable().optional(),
});
export type FriendUser = z.infer<typeof FriendUserSchema>;

export const FriendRequestItemSchema = z.object({
  id: z.number(),
  createdAt: z.string(),
  user: UserLiteSchema,
});
export type FriendRequestItem = z.infer<typeof FriendRequestItemSchema>;

export const FriendsResponseSchema = z.object({
  currentWeekId: z.string(),
  friends: z.array(FriendUserSchema),
  incoming: z.array(FriendRequestItemSchema),
  outgoing: z.array(FriendRequestItemSchema),
});
export type FriendsResponse = z.infer<typeof FriendsResponseSchema>;

// Kept for backward compatibility if imported elsewhere
export interface LeaderboardEntry {
  uid: string;
  displayName: string;
  avatarEmoji: string;
  beltRank: string;
  level: number;
  totalXp: number;
  currentStreak: number;
  rank: number;
}
