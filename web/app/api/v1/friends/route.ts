import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { query } from '@/core/db/postgres';
import { getWeekId } from '@/core/utils/helpers';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json({ error: { code: 'unauthorized', message: 'Missing or invalid token' } }, { status: 401 });
  }

  const currentWeekId = getWeekId();

  try {
    // 1. Fetch friends (up to 50)
    const friendsRes = await query(`
      SELECT 
        p.uid, p.display_name, p.avatar_emoji, p.belt_rank, p.level,
        p.current_streak, p.weekly_xp, p.week_id, p.last_active_date,
        p.daily_date, p.daily_score, p.daily_time_sec, p.daily_accuracy
      FROM manabu.friendships f
      JOIN manabu.profiles p ON p.uid = CASE WHEN f.user_a = $1 THEN f.user_b ELSE f.user_a END
      WHERE f.user_a = $1 OR f.user_b = $1
      LIMIT 50;
    `, [user.uid]);

    const friends = friendsRes.rows.map(row => ({
      uid: row.uid,
      displayName: row.display_name,
      avatarEmoji: row.avatar_emoji,
      beltRank: row.belt_rank,
      level: row.level,
      currentStreak: row.current_streak,
      weeklyXp: row.week_id === currentWeekId ? row.weekly_xp : 0,
      lastActiveDate: row.last_active_date,
      daily: row.daily_date ? {
        date: row.daily_date,
        score: row.daily_score,
        timeSeconds: row.daily_time_sec ? Number(row.daily_time_sec) : 0,
        accuracy: row.daily_accuracy ? Number(row.daily_accuracy) : 0,
      } : null,
    }));

    // 2. Fetch incoming pending requests
    const incomingRes = await query(`
      SELECT 
        r.id, r.created_at,
        p.uid, p.display_name, p.avatar_emoji, p.belt_rank, p.level
      FROM manabu.friend_requests r
      JOIN manabu.profiles p ON p.uid = r.from_uid
      WHERE r.to_uid = $1 AND r.status = 'pending'
      ORDER BY r.created_at DESC;
    `, [user.uid]);

    const incoming = incomingRes.rows.map(row => ({
      id: Number(row.id),
      createdAt: row.created_at,
      user: {
        uid: row.uid,
        displayName: row.display_name,
        avatarEmoji: row.avatar_emoji,
        beltRank: row.belt_rank,
        level: row.level,
      },
    }));

    // 3. Fetch outgoing pending requests
    const outgoingRes = await query(`
      SELECT 
        r.id, r.created_at,
        p.uid, p.display_name, p.avatar_emoji, p.belt_rank, p.level
      FROM manabu.friend_requests r
      JOIN manabu.profiles p ON p.uid = r.to_uid
      WHERE r.from_uid = $1 AND r.status = 'pending'
      ORDER BY r.created_at DESC;
    `, [user.uid]);

    const outgoing = outgoingRes.rows.map(row => ({
      id: Number(row.id),
      createdAt: row.created_at,
      user: {
        uid: row.uid,
        displayName: row.display_name,
        avatarEmoji: row.avatar_emoji,
        beltRank: row.belt_rank,
        level: row.level,
      },
    }));

    return NextResponse.json({
      currentWeekId,
      friends,
      incoming,
      outgoing,
    });
  } catch (error) {
    console.error('[API Friends GET] Error:', error);
    return NextResponse.json({ error: { code: 'server_error', message: 'Internal error' } }, { status: 500 });
  }
}
