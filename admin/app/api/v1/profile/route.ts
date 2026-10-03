import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAuthToken } from '@/lib/auth';
import { query } from '@/lib/db';
import { generateFriendCode } from '@/lib/helpers';
import { checkRateLimit } from '@/lib/rateLimit';

export const dynamic = 'force-dynamic';

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

  // Rate limit: 60 per hour to be forgiving during sync testing (plan defaults to 6/hr in prod)
  const rl = await checkRateLimit(user.uid, 'profile.put', { limit: 60, windowSeconds: 3600 });
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
    return NextResponse.json({ error: { code: 'validation_failed', message: parsed.error.message } }, { status: 422 });
  }

  const p = parsed.data;

  try {
    // Check if user is banned
    const checkBan = await query('SELECT banned FROM manabu.profiles WHERE uid = $1', [user.uid]);
    if (checkBan.rows[0]?.banned) {
      return NextResponse.json({ error: { code: 'banned', message: 'User account is restricted' } }, { status: 403 });
    }

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
            friend_code, updated_at
          ) VALUES (
            $1, $2, $3, $4, $5, $6,
            $7, $8, $9, $10, $11,
            $12, $13, $14, $15,
            $16, now()
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
            updated_at = now()
          RETURNING *;
        `, [
          user.uid,
          user.email || null,
          p.displayName,
          p.avatarEmoji,
          p.beltRank,
          p.level,
          p.totalXp,
          p.weeklyXp,
          p.weekId,
          p.currentStreak,
          p.lastActiveDate || null,
          p.daily?.date || null,
          p.daily?.score ?? null,
          p.daily?.timeSeconds ?? null,
          p.daily?.accuracy ?? null,
          friendCode,
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
