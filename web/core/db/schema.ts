import {
  pgSchema,
  varchar,
  integer,
  numeric,
  boolean,
  timestamp,
  jsonb,
  primaryKey,
  bigserial,
  serial,
  uuid,
} from 'drizzle-orm/pg-core';

// PostgreSQL Schema Namespace: manabu
export const manabuSchema = pgSchema('manabu');

// 1. User Profiles Table
export const profiles = manabuSchema.table('profiles', {
  uid: varchar('uid', { length: 128 }).primaryKey(),
  email: varchar('email', { length: 255 }),
  displayName: varchar('display_name', { length: 255 }).notNull(),
  avatarEmoji: varchar('avatar_emoji', { length: 32 }).default('居'),
  beltRank: varchar('belt_rank', { length: 32 }).default('white'),
  level: integer('level').default(1),
  totalXp: integer('total_xp').default(0),
  weeklyXp: integer('weekly_xp').default(0),
  weekId: varchar('week_id', { length: 16 }),
  currentStreak: integer('current_streak').default(0),
  lastActiveDate: varchar('last_active_date', { length: 32 }),
  dailyDate: varchar('daily_date', { length: 32 }),
  dailyScore: integer('daily_score'),
  dailyTimeSec: integer('daily_time_sec'),
  dailyAccuracy: numeric('daily_accuracy'),
  friendCode: varchar('friend_code', { length: 32 }).unique(),
  desiredRetention: numeric('desired_retention').default('0.90'),
  banned: boolean('banned').default(false),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});

// 2. SRS Card States Table
export const cardStates = manabuSchema.table(
  'card_states',
  {
    uid: varchar('uid', { length: 128 }).notNull(),
    cardId: varchar('card_id', { length: 128 }).notNull(),
    cardType: varchar('card_type', { length: 32 }).notNull().default('vocab'),
    state: varchar('state', { length: 32 }).notNull().default('new'),
    stability: numeric('stability').notNull().default('0.4'),
    difficulty: numeric('difficulty').notNull().default('5.0'),
    reps: integer('reps').notNull().default(0),
    lapses: integer('lapses').notNull().default(0),
    lastReview: timestamp('last_review', { mode: 'date' }),
    dueAt: timestamp('due_at', { mode: 'date' }).notNull().defaultNow(),
  },
  (table) => [
    primaryKey({ columns: [table.uid, table.cardId] }),
  ]
);

// 3. SRS Review Logs Table
export const reviewLogs = manabuSchema.table('review_logs', {
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  uid: varchar('uid', { length: 128 }).notNull(),
  cardId: varchar('card_id', { length: 128 }).notNull(),
  rating: integer('rating').notNull(),
  state: varchar('state', { length: 32 }).notNull(),
  elapsedDays: numeric('elapsed_days').notNull(),
  scheduledDays: numeric('scheduled_days').notNull(),
  reviewedAt: timestamp('reviewed_at', { mode: 'date' }).notNull().defaultNow(),
});

// 4. Friendships Table
export const friendships = manabuSchema.table(
  'friendships',
  {
    userA: varchar('user_a', { length: 128 }).notNull(),
    userB: varchar('user_b', { length: 128 }).notNull(),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
  },
  (table) => [
    primaryKey({ columns: [table.userA, table.userB] }),
  ]
);

// 5. Friend Requests Table
export const friendRequests = manabuSchema.table('friend_requests', {
  id: serial('id').primaryKey(),
  fromUid: varchar('from_uid', { length: 128 }).notNull(),
  toUid: varchar('to_uid', { length: 128 }).notNull(),
  status: varchar('status', { length: 32 }).notNull().default('pending'),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
  respondedAt: timestamp('responded_at', { mode: 'date' }),
});

// 6. Score Challenges Table
export const scoreChallenges = manabuSchema.table('score_challenges', {
  id: uuid('id').primaryKey().defaultRandom(),
  game: varchar('game', { length: 32 }).notNull(),
  mode: varchar('mode', { length: 32 }).default('default'),
  creatorUid: varchar('creator_uid', { length: 128 }).notNull(),
  targetUid: varchar('target_uid', { length: 128 }).notNull(),
  creatorScore: integer('creator_score').notNull(),
  targetScore: integer('target_score'),
  status: varchar('status', { length: 32 }).default('pending'),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
  expiresAt: timestamp('expires_at', { mode: 'date' }),
  completedAt: timestamp('completed_at', { mode: 'date' }),
});

// 7. Match Results Table
export const matchResults = manabuSchema.table('match_results', {
  id: uuid('id').primaryKey().defaultRandom(),
  game: varchar('game', { length: 32 }).notNull(),
  playerA: varchar('player_a', { length: 128 }).notNull(),
  playerB: varchar('player_b', { length: 128 }).notNull(),
  winsA: integer('wins_a').notNull().default(0),
  winsB: integer('wins_b').notNull().default(0),
  winner: varchar('winner', { length: 128 }),
  reason: varchar('reason', { length: 32 }),
  rounds: integer('rounds').default(1),
  startedAt: timestamp('started_at', { mode: 'date' }),
  endedAt: timestamp('ended_at', { mode: 'date' }).defaultNow(),
});

// 8. Application Config Table
export const appConfig = manabuSchema.table('app_config', {
  key: varchar('key', { length: 128 }).primaryKey(),
  value: jsonb('value'),
});

// 9. User Backups Table
export const userBackups = manabuSchema.table('user_backups', {
  uid: varchar('uid', { length: 128 }).primaryKey(),
  backupData: jsonb('backup_data').notNull(),
  version: integer('version').default(1),
  syncedAt: timestamp('synced_at', { mode: 'date' }).defaultNow(),
});
