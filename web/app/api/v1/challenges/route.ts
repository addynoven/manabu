import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { query } from '@/core/db/postgres';

export const dynamic = 'force-dynamic';

const CreateChallengeSchema = z.object({
  game: z.enum(['rain', 'snake', 'catch', 'survival']),
  mode: z.string().default('default'),
  targetUid: z.string().min(1),
  creatorScore: z.number().int().min(0),
});

export async function GET(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json({ error: { code: 'unauthorized', message: 'Missing or invalid token' } }, { status: 401 });
  }

  try {
    const res = await query(`
      SELECT 
        c.id, c.game, c.mode, c.creator_uid, c.target_uid,
        c.creator_score, c.target_score, c.status,
        c.created_at, c.expires_at, c.completed_at,
        cp.display_name as creator_name, cp.avatar_emoji as creator_emoji,
        tp.display_name as target_name, tp.avatar_emoji as target_emoji
      FROM manabu.score_challenges c
      JOIN manabu.profiles cp ON cp.uid = c.creator_uid
      JOIN manabu.profiles tp ON tp.uid = c.target_uid
      WHERE (c.creator_uid = $1 OR c.target_uid = $1)
      ORDER BY c.created_at DESC
      LIMIT 20;
    `, [user.uid]);

    const challenges = res.rows.map((row: any) => {
      let status = row.status;
      if (status === 'pending' && new Date(row.expires_at).getTime() < Date.now()) {
        status = 'expired';
      }

      let winner: 'creator' | 'target' | 'draw' | null = null;
      if (status === 'completed' && row.target_score !== null) {
        if (row.creator_score > row.target_score) winner = 'creator';
        else if (row.target_score > row.creator_score) winner = 'target';
        else winner = 'draw';
      }

      return {
        id: row.id,
        game: row.game,
        mode: row.mode,
        creator: {
          uid: row.creator_uid,
          displayName: row.creator_name,
          avatarEmoji: row.creator_emoji,
          score: row.creator_score,
        },
        target: {
          uid: row.target_uid,
          displayName: row.target_name,
          avatarEmoji: row.target_emoji,
          score: row.target_score,
        },
        status,
        winner,
        isIncoming: row.target_uid === user.uid && status === 'pending',
        createdAt: row.created_at,
        expiresAt: row.expires_at,
        completedAt: row.completed_at,
      };
    });

    return NextResponse.json({ challenges });
  } catch (error) {
    console.error('[API Challenges GET] Error:', error);
    return NextResponse.json({ error: { code: 'server_error', message: 'Internal error' } }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json({ error: { code: 'unauthorized', message: 'Missing or invalid token' } }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: { code: 'validation_failed', message: 'Invalid JSON' } }, { status: 422 });
  }

  const parsed = CreateChallengeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: { code: 'validation_failed', message: parsed.error.issues?.[0]?.message || 'Validation failed' } }, { status: 422 });
  }

  const { game, mode, targetUid, creatorScore } = parsed.data;

  if (targetUid === user.uid) {
    return NextResponse.json({ error: { code: 'self', message: 'Cannot challenge yourself' } }, { status: 409 });
  }

  try {
    // Verify friendship
    const friendCheck = await query(`
      SELECT 1 FROM manabu.friendships 
      WHERE user_a = LEAST($1, $2) AND user_b = GREATEST($1, $2);
    `, [user.uid, targetUid]);

    if (friendCheck.rows.length === 0) {
      return NextResponse.json({ error: { code: 'not_friends', message: 'Can only challenge friends' } }, { status: 403 });
    }

    const expiresAt = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString();

    const insertRes = await query(`
      INSERT INTO manabu.score_challenges (
        game, mode, creator_uid, target_uid, creator_score, status, expires_at
      ) VALUES ($1, $2, $3, $4, $5, 'pending', $6)
      RETURNING id, created_at;
    `, [game, mode, user.uid, targetUid, creatorScore, expiresAt]);

    return NextResponse.json({
      challenge: {
        id: insertRes.rows[0].id,
        game,
        mode,
        creatorScore,
        status: 'pending',
        expiresAt,
        createdAt: insertRes.rows[0].created_at,
      },
    });
  } catch (error) {
    console.error('[API Create Challenge POST] Error:', error);
    return NextResponse.json({ error: { code: 'server_error', message: 'Internal error' } }, { status: 500 });
  }
}
