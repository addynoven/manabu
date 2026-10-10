import { z } from 'zod';
import { UserStatsSchema } from '../../progress/models/progress.model';

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

/**
 * Public User Profile Schema.
 * Stored in `users/{userId}` and strictly matches `firestore.rules` whitelist.
 */
export const PublicUserProfileSchema = z.object({
  uid: z.string(),
  displayName: z.string().min(1).max(100),
  totalXp: z.number().nonnegative(),
  avatarEmoji: z.string().max(20).optional(),
  photoURL: z.string().max(500).nullable().optional(),
  bio: z.string().max(500).optional(),
  beltRank: BeltRankSchema.optional(),
  level: z.number().nonnegative().optional(),
  currentStreak: z.number().nonnegative().optional(),
  bestStreak: z.number().nonnegative().optional(),
  dailyGoalXp: z.number().nonnegative().optional(),
  todayXp: z.number().nonnegative().optional(),
  todayDate: z.string().max(50).nullable().optional(),
  joinedDate: z.string().max(50).optional(),
  lastActiveDate: z.string().max(50).nullable().optional(),
  kanaPracticedCount: z.number().nonnegative().optional(),
  kanjiPracticedCount: z.number().nonnegative().optional(),
  vocabPracticedCount: z.number().nonnegative().optional(),
  totalQuestionsAnswered: z.number().nonnegative().optional(),
  totalCorrect: z.number().nonnegative().optional(),
});

export type PublicUserProfile = z.infer<typeof PublicUserProfileSchema>;

/**
 * Private Dojo progress backup schema.
 */
export const PrivateDojoBackupSchema = z.object({
  completedLessons: z.record(
    z.string(),
    z.object({
      score: z.number(),
      completedAt: z.string(),
    }),
  ),
  cooldownUntil: z.string().nullable(),
  passedRevisionGates: z.record(z.string(), z.boolean()),
  passedDailyRevisions: z.record(z.string(), z.boolean()),
  activeLessonId: z.string(),
});
export type PrivateDojoBackup = z.infer<typeof PrivateDojoBackupSchema>;

/**
 * Private Achievement backup schema.
 */
export const PrivateAchievementBackupSchema = z.object({
  unlocked: z.record(z.string(), z.object({ unlockedAt: z.string() })),
  totalPoints: z.number().nonnegative(),
});
export type PrivateAchievementBackup = z.infer<typeof PrivateAchievementBackupSchema>;

/**
 * Private Arcade backup schema.
 */
export const PrivateArcadeBackupSchema = z.object({
  highScores: z.record(z.string(), z.number()),
  totalGamesPlayed: z.number().nonnegative(),
  gamesWon: z.number().nonnegative(),
});
export type PrivateArcadeBackup = z.infer<typeof PrivateArcadeBackupSchema>;

/**
 * Private Challenges & Gauntlets backup schema.
 */
export const PrivateChallengeBackupSchema = z.object({
  dailyChallengesCompleted: z.record(z.string(), z.boolean()),
  blitzHighScores: z.record(z.string(), z.number()),
  gauntletClears: z.record(z.string(), z.boolean()),
});
export type PrivateChallengeBackup = z.infer<typeof PrivateChallengeBackupSchema>;

/**
 * Private User Settings & Theme backup schema.
 */
export const PrivateSettingsBackupSchema = z.object({
  hapticsEnabled: z.boolean(),
  ttsEnabled: z.boolean(),
  ttsRate: z.number(),
  showFuriganaInDrills: z.boolean(),
  showRomajiInCharts: z.boolean(),
  activeThemeId: z.string(),
});
export type PrivateSettingsBackup = z.infer<typeof PrivateSettingsBackupSchema>;

/**
 * Complete Private User Sync Payload ("The Lost Phone Guarantee").
 * Stored under `users/{userId}/private/sync`.
 */
export const CompleteCloudSyncSnapshotSchema = z.object({
  version: z.number(),
  syncedAt: z.string(),
  stats: UserStatsSchema,
  dojo: PrivateDojoBackupSchema,
  achievements: PrivateAchievementBackupSchema,
  arcade: PrivateArcadeBackupSchema.optional(),
  challenges: PrivateChallengeBackupSchema.optional(),
  settings: PrivateSettingsBackupSchema.optional(),
});
export type CompleteCloudSyncSnapshot = z.infer<typeof CompleteCloudSyncSnapshotSchema>;

// Alias for backward-compatibility with tests and services
export const PrivateSyncDataSchema = CompleteCloudSyncSnapshotSchema;
export type PrivateSyncData = CompleteCloudSyncSnapshot;

/**
 * Community Social Models
 */

// Friend record in users/{uid}/friends/{friendUid}
export const FriendRecordSchema = z.object({
  friendUid: z.string(),
  displayName: z.string(),
  photoURL: z.string().nullable().optional(),
  avatarEmoji: z.string().default('🥋'),
  beltRank: BeltRankSchema.default('white'),
  level: z.number().default(1),
  totalXp: z.number().default(0),
  currentStreak: z.number().default(0),
  status: z.enum(['active']),
  friendedAt: z.string(),
  lastInteractionAt: z.string(),
});
export type FriendRecord = z.infer<typeof FriendRecordSchema>;

// Friend request in friend_requests/{requestId}
export const FriendRequestSchema = z.object({
  id: z.string(),
  fromUid: z.string(),
  fromName: z.string(),
  fromPhoto: z.string().nullable().optional(),
  toUid: z.string(),
  toName: z.string(),
  toPhoto: z.string().nullable().optional(),
  status: z.enum(['pending', 'accepted', 'declined']),
  createdAt: z.string(),
});
export type FriendRequest = z.infer<typeof FriendRequestSchema>;

// Community Feed item in community_feed/{feedId}
export const CommunityFeedItemSchema = z.object({
  id: z.string(),
  actorUid: z.string(),
  actorName: z.string(),
  actorPhoto: z.string().nullable().optional(),
  actorBelt: BeltRankSchema.default('white'),
  eventType: z.enum([
    'streak_milestone',
    'belt_promotion',
    'unit_completed',
    'achievement_unlocked',
  ]),
  eventTitle: z.string(),
  eventDetails: z.string().optional(),
  timestamp: z.string(),
  likesCount: z.number().nonnegative().default(0),
});
export type CommunityFeedItem = z.infer<typeof CommunityFeedItemSchema>;

export interface SyncStatusState {
  isSyncing: boolean;
  lastSyncedAt: string | null;
  lastError: string | null;
}
