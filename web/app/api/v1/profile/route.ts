import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { query } from '@/core/db/postgres';
import { generateFriendCode } from '@/core/utils/helpers';
import { checkRateLimit } from '@/core/network/rateLimit';

export const dynamic = 'force-dynamic';

export function calculateLevelAndBelt(totalXp: number): {
  level: number;
  beltRank: 'white' | 'yellow' | 'green' | 'blue' | 'purple' | 'brown' | 'black';
} {
  const safeXp = Math.max(0, Math.floor(totalXp));
  const level = Math.floor(Math.sqrt(safeXp / 100)) + 1;
  const belts: Array<'white' | 'yellow' | 'green' | 'blue' | 'purple' | 'brown' | 'black'> = [
    'white',
    'yellow',
    'green',
    'blue',
    'purple',
    'brown',
    'black',
  ];
  const beltRank = belts[Math.min(Math.max(0, level - 1), belts.length - 1)];
  return { level, beltRank };
}

function getYesterdayDateStr(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}

const ProfilePutSchema = z.object({
  displayName: z.string().trim().min(1).max(24),
  avatarEmoji: z.string().max(16).default('🥋'),
  beltRank: z.enum(['white', 'yellow', 'green', 'blue', 'purple', 'brown', 'black']).default('white'),
  level: z.number().int().min(1).default(1),
  totalXp: z.number().int().min(0).default(0),
  weeklyXp: z.number().int().min(0).default(0),
  weekId: z.string().regex(/^\d{4}-W\d{2}$/),
  currentStreak: z.number().int().min(0).default(0),
  lastActiveDate: z.string().nullable().optional(),
  desiredRetention: z.number().min(0.70).max(0.97).optional(),
  daily: z.object({
    date: z.string(),
    score: z.number().int(),
    timeSeconds: z.number(),
    accuracy: z.number(),
  }).nullable().optional(),
});

export async function GET(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json({ error: { code: 'unauthorized', message: 'Missing or invalid token' } }, { status: 401 });
  }

  try {
    const res = await query('SELECT * FROM manabu.profiles WHERE uid = $1', [user.uid]);
    if (res.rows.length === 0) {
      return NextResponse.json({ error: { code: 'not_found', message: 'Profile not found' } }, { status: 404 });
    }

    const row = res.rows[0];
    return NextResponse.json({
      profile: {
        uid: row.uid,
        email: row.email || null,
        displayName: row.display_name,
        avatarEmoji: row.avatar_emoji,
        beltRank: row.belt_rank,
        level: row.level,
        totalXp: row.total_xp,
        weeklyXp: row.weekly_xp,
        weekId: row.week_id,
        currentStreak: row.current_streak,
        lastActiveDate: row.last_active_date,
        friendCode: row.friend_code,
        banned: row.banned,
        desiredRetention: row.desired_retention != null ? Number(row.desired_retention) : 0.90,
        daily: row.daily_date ? {
          date: row.daily_date,
          score: row.daily_score,
          timeSeconds: row.daily_time_sec ? Number(row.daily_time_sec) : 0,
          accuracy: row.daily_accuracy ? Number(row.daily_accuracy) : 0,
        } : null,
      },
    });
  } catch (error) {
    console.error('[API Profile GET] Error:', error);
    return NextResponse.json({ error: { code: 'server_error', message: 'Internal error' } }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json({ error: { code: 'unauthorized', message: 'Missing or invalid token' } }, { status: 401 });
  }

  // Rate limit: 60 per hour to be forgiving during sync testing (sensitive: failClosed = true)
  const rl = await checkRateLimit(user.uid, 'profile.put', {
    limit: 60,
    windowSeconds: 3600,
    failClosed: true,
  });
  if (!rl.allowed) {
    return NextResponse.json({ error: { code: 'rate_limited', message: 'Too many profile updates' } }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: { code: 'validation_failed', message: 'Invalid JSON' } }, { status: 422 });
  }

  const parsed = ProfilePutSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: { code: 'validation_failed', message: parsed.error.issues?.[0]?.message || 'Validation failed' } }, { status: 422 });
  }

  const p = parsed.data;

  try {
    // 1. Fetch existing profile to enforce authoritative server state
    const existingRes = await query('SELECT * FROM manabu.profiles WHERE uid = $1', [user.uid]);
    const existing = existingRes.rows[0];

    if (existing?.banned) {
      return NextResponse.json({ error: { code: 'banned', message: 'User account is restricted' } }, { status: 403 });
    }

    // 2. Reconcile daily challenge data
    let dailyDate: string | null = null;
    let dailyScore: number | null = null;
    let dailyTimeSec: number | null = null;
    let dailyAccuracy: number | null = null;
    let dailyXpAwarded = 0;

    if (p.daily) {
      const clampedScore = Math.min(Math.max(0, p.daily.score), 1000);
      const clampedAccuracy = Math.min(Math.max(0, p.daily.accuracy), 100);
      const clampedTime = Math.max(0, p.daily.timeSeconds);

      dailyDate = p.daily.date;
      dailyScore = clampedScore;
      dailyTimeSec = clampedTime;
      dailyAccuracy = clampedAccuracy;

      if (existing && existing.daily_date === p.daily.date) {
        const existingScore = existing.daily_score ? Number(existing.daily_score) : 0;
        if (clampedScore > existingScore) {
          dailyXpAwarded = clampedScore - existingScore;
        } else {
          dailyScore = existingScore;
          dailyTimeSec = existing.daily_time_sec ? Number(existing.daily_time_sec) : clampedTime;
          dailyAccuracy = existing.daily_accuracy ? Number(existing.daily_accuracy) : clampedAccuracy;
          dailyXpAwarded = 0;
        }
      } else {
        dailyXpAwarded = clampedScore;
      }
    }

    // 3. Reconcile Total XP & Weekly XP
    let reconciledTotalXp = 0;
    let reconciledWeeklyXp = 0;

    if (existing) {
      const serverTotalXp = Number(existing.total_xp || 0);
      const isNewWeek = existing.week_id !== p.weekId;
      const serverWeeklyXp = isNewWeek ? 0 : Number(existing.weekly_xp || 0);

      const rawGain = Math.max(0, p.totalXp - serverTotalXp);
      const maxAllowedGain = Math.max(dailyXpAwarded, 500);
      const xpGain = Math.min(rawGain, maxAllowedGain);

      reconciledTotalXp = serverTotalXp + xpGain;
      reconciledWeeklyXp = serverWeeklyXp + xpGain;
    } else {
      reconciledTotalXp = Math.min(Math.max(0, p.totalXp), 100);
      reconciledWeeklyXp = reconciledTotalXp;
    }

    // 4. Derive Level & Belt Rank on server from authoritative XP
    const { level: reconciledLevel, beltRank: reconciledBeltRank } = calculateLevelAndBelt(reconciledTotalXp);

    // 5. Reconcile streak & last active date
    const todayStr = new Date().toISOString().split('T')[0];
    let reconciledStreak = 0;
    let reconciledLastActive: string | null = null;

    if (existing) {
      const serverStreak = Number(existing.current_streak || 0);
      const serverLastActive = existing.last_active_date || null;

      if (serverLastActive === todayStr) {
        reconciledStreak = serverStreak;
      } else if (serverLastActive === getYesterdayDateStr()) {
        reconciledStreak = p.lastActiveDate ? serverStreak + 1 : serverStreak;
      } else {
        reconciledStreak = p.lastActiveDate ? 1 : 0;
      }

      reconciledStreak = Math.min(reconciledStreak, serverStreak + 1);
      reconciledLastActive = p.lastActiveDate || serverLastActive || todayStr;
    } else {
      reconciledStreak = Math.min(Math.max(0, p.currentStreak), 1);
      reconciledLastActive = p.lastActiveDate || todayStr;
    }

    const desiredRetention = p.desiredRetention ?? (existing?.desired_retention != null ? Number(existing.desired_retention) : 0.90);

    // Upsert with friend_code generation loop
    let friendCode = '';
    let savedRow: any = null;

    for (let attempt = 0; attempt < 5; attempt++) {
      friendCode = generateFriendCode();
      try {
        const res = await query(`
          INSERT INTO manabu.profiles (
            uid, email, display_name, avatar_emoji, belt_rank, level,
            total_xp, weekly_xp, week_id, current_streak, last_active_date,
            daily_date, daily_score, daily_time_sec, daily_accuracy,
            friend_code, desired_retention, updated_at
          ) VALUES (
            $1, $2, $3, $4, $5, $6,
            $7, $8, $9, $10, $11,
            $12, $13, $14, $15,
            $16, $17, now()
          )
          ON CONFLICT (uid) DO UPDATE SET
            email = COALESCE(EXCLUDED.email, manabu.profiles.email),
            display_name = EXCLUDED.display_name,
            avatar_emoji = EXCLUDED.avatar_emoji,
            belt_rank = EXCLUDED.belt_rank,
            level = EXCLUDED.level,
            total_xp = EXCLUDED.total_xp,
            weekly_xp = EXCLUDED.weekly_xp,
            week_id = EXCLUDED.week_id,
            current_streak = EXCLUDED.current_streak,
            last_active_date = EXCLUDED.last_active_date,
            daily_date = COALESCE(EXCLUDED.daily_date, manabu.profiles.daily_date),
            daily_score = COALESCE(EXCLUDED.daily_score, manabu.profiles.daily_score),
            daily_time_sec = COALESCE(EXCLUDED.daily_time_sec, manabu.profiles.daily_time_sec),
            daily_accuracy = COALESCE(EXCLUDED.daily_accuracy, manabu.profiles.daily_accuracy),
            desired_retention = COALESCE(EXCLUDED.desired_retention, manabu.profiles.desired_retention),
            updated_at = now()
          RETURNING *;
        `, [
          user.uid,
          user.email || null,
          p.displayName,
          p.avatarEmoji,
          reconciledBeltRank,
          reconciledLevel,
          reconciledTotalXp,
          reconciledWeeklyXp,
          p.weekId,
          reconciledStreak,
          reconciledLastActive,
          dailyDate,
          dailyScore,
          dailyTimeSec,
          dailyAccuracy,
          friendCode,
          desiredRetention,
        ]);

        savedRow = res.rows[0];
        break;
      } catch (err: any) {
        if (err.code === '23505' && err.constraint === 'profiles_friend_code_key') {
          // Collision on friend code, retry
          continue;
        }
        throw err;
      }
    }

    if (!savedRow) {
      return NextResponse.json({ error: { code: 'server_error', message: 'Failed to generate unique friend code' } }, { status: 500 });
    }

    return NextResponse.json({
      profile: {
        uid: savedRow.uid,
        email: savedRow.email || null,
        displayName: savedRow.display_name,
        avatarEmoji: savedRow.avatar_emoji,
        beltRank: savedRow.belt_rank,
        level: savedRow.level,
        totalXp: savedRow.total_xp,
        weeklyXp: savedRow.weekly_xp,
        weekId: savedRow.week_id,
        currentStreak: savedRow.current_streak,
        lastActiveDate: savedRow.last_active_date,
        friendCode: savedRow.friend_code,
        desiredRetention: savedRow.desired_retention != null ? Number(savedRow.desired_retention) : 0.90,
        daily: savedRow.daily_date ? {
          date: savedRow.daily_date,
          score: savedRow.daily_score,
          timeSeconds: savedRow.daily_time_sec ? Number(savedRow.daily_time_sec) : 0,
          accuracy: savedRow.daily_accuracy ? Number(savedRow.daily_accuracy) : 0,
        } : null,
      },
    });
  } catch (error) {
    console.error('[API Profile PUT] Error:', error);
    return NextResponse.json({ error: { code: 'server_error', message: 'Internal error' } }, { status: 500 });
  }
}

