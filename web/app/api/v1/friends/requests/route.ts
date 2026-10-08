import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAuthToken } from '@/lib/auth';
import { query } from '@/lib/db';
import { normalizeFriendCode } from '@/lib/helpers';
import { checkRateLimit } from '@/lib/rateLimit';

export const dynamic = 'force-dynamic';

const RequestSchema = z.object({
  code: z.string().min(1).max(32),
});

export async function POST(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json({ error: { code: 'unauthorized', message: 'Missing or invalid token' } }, { status: 401 });
  }

  // Rate limit: 10 per min, 50 per day
  const rl = await checkRateLimit(user.uid, 'friends.request', { limit: 10, windowSeconds: 60 });
  if (!rl.allowed) {
    return NextResponse.json({ error: { code: 'rate_limited', message: 'Too many friend requests' } }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: { code: 'validation_failed', message: 'Invalid JSON' } }, { status: 422 });
  }

  const parsed = RequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: { code: 'validation_failed', message: 'Code is required' } }, { status: 422 });
  }

  const code = normalizeFriendCode(parsed.data.code);

  try {
    // 1. Look up target profile
    const targetRes = await query('SELECT * FROM manabu.profiles WHERE friend_code = $1', [code]);
    if (targetRes.rows.length === 0) {
      return NextResponse.json({ error: { code: 'not_found', message: 'No student found with that friend code' } }, { status: 404 });
    }

    const target = targetRes.rows[0];
    if (target.uid === user.uid) {
      return NextResponse.json({ error: { code: 'self', message: 'You cannot friend yourself' } }, { status: 409 });
    }

    // 2. Check if already friends
    const friendCheck = await query(`
      SELECT 1 FROM manabu.friendships 
      WHERE (user_a = LEAST($1, $2) AND user_b = GREATEST($1, $2));
    `, [user.uid, target.uid]);
    if (friendCheck.rows.length > 0) {
      return NextResponse.json({ error: { code: 'already_friends', message: 'Already friends with this student' } }, { status: 409 });
    }

    // 3. Check friend caps (max 50)
    const myCountRes = await query('SELECT count(*) as count FROM manabu.friendships WHERE user_a = $1 OR user_b = $1', [user.uid]);
    if (Number(myCountRes.rows[0]?.count || 0) >= 50) {
      return NextResponse.json({ error: { code: 'friend_limit', message: 'You have reached the maximum of 50 friends' } }, { status: 409 });
    }

    const targetCountRes = await query('SELECT count(*) as count FROM manabu.friendships WHERE user_a = $1 OR user_b = $1', [target.uid]);
    if (Number(targetCountRes.rows[0]?.count || 0) >= 50) {
      return NextResponse.json({ error: { code: 'friend_limit', message: 'This student has reached the maximum of 50 friends' } }, { status: 409 });
    }

    // 4. Check if they already sent me a pending request -> Auto-accept!
    const reverseReq = await query(`
      SELECT * FROM manabu.friend_requests 
      WHERE from_uid = $1 AND to_uid = $2 AND status = 'pending'
    `, [target.uid, user.uid]);

    if (reverseReq.rows.length > 0) {
      const existingReqId = reverseReq.rows[0].id;
      // Accept in transaction
      await query(`
        INSERT INTO manabu.friendships (user_a, user_b)
        VALUES (LEAST($1, $2), GREATEST($1, $2))
        ON CONFLICT DO NOTHING;
      `, [user.uid, target.uid]);

      await query(`
        UPDATE manabu.friend_requests 
        SET status = 'accepted', responded_at = now() 
        WHERE id = $1;
      `, [existingReqId]);

      return NextResponse.json({
        status: 'accepted',
        message: 'Mutual friend request! Friendship created.',
        user: {
          uid: target.uid,
          displayName: target.display_name,
          avatarEmoji: target.avatar_emoji,
          beltRank: target.belt_rank,
          level: target.level,
        },
      });
    }

    // 5. Check if I already sent them a request
    const existingOutgoing = await query(`
      SELECT * FROM manabu.friend_requests 
      WHERE from_uid = $1 AND to_uid = $2;
    `, [user.uid, target.uid]);

    if (existingOutgoing.rows.length > 0) {
      const row = existingOutgoing.rows[0];
      if (row.status === 'pending') {
        return NextResponse.json({ error: { code: 'already_pending', message: 'Friend request is already pending' } }, { status: 409 });
      }
      if (row.status === 'declined') {
        const declinedAt = new Date(row.responded_at || row.created_at).getTime();
        const daysDiff = (Date.now() - declinedAt) / (1000 * 60 * 60 * 24);
        if (daysDiff < 7) {
          return NextResponse.json({ error: { code: 'cooldown', message: 'Please wait a week before sending another request' } }, { status: 409 });
        }
        // Older than 7 days, reset to pending
        await query(`
          UPDATE manabu.friend_requests 
          SET status = 'pending', created_at = now(), responded_at = null 
          WHERE id = $1;
        `, [row.id]);

        return NextResponse.json({
          request: { id: Number(row.id), status: 'pending' },
          user: {
            uid: target.uid,
            displayName: target.display_name,
            avatarEmoji: target.avatar_emoji,
            beltRank: target.belt_rank,
            level: target.level,
          },
        });
      }
    }

    // 6. Insert new pending request
    const insertRes = await query(`
      INSERT INTO manabu.friend_requests (from_uid, to_uid, status)
      VALUES ($1, $2, 'pending')
      RETURNING id, status;
    `, [user.uid, target.uid]);

    return NextResponse.json({
      request: { id: Number(insertRes.rows[0].id), status: 'pending' },
      user: {
        uid: target.uid,
        displayName: target.display_name,
        avatarEmoji: target.avatar_emoji,
        beltRank: target.belt_rank,
        level: target.level,
      },
    });
  } catch (error) {
    console.error('[API Friend Request POST] Error:', error);
    return NextResponse.json({ error: { code: 'server_error', message: 'Internal error' } }, { status: 500 });
  }
}
