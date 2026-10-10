import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { query } from '@/core/db/postgres';

export const dynamic = 'force-dynamic';

const RespondSchema = z.object({
  accept: z.boolean(),
});

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json({ error: { code: 'unauthorized', message: 'Missing or invalid token' } }, { status: 401 });
  }

  const { id } = await params;
  const requestId = Number(id);
  if (!requestId || isNaN(requestId)) {
    return NextResponse.json({ error: { code: 'validation_failed', message: 'Invalid request ID' } }, { status: 422 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: { code: 'validation_failed', message: 'Invalid JSON' } }, { status: 422 });
  }

  const parsed = RespondSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: { code: 'validation_failed', message: 'accept boolean is required' } }, { status: 422 });
  }

  const { accept } = parsed.data;

  try {
    // 1. Fetch request and check ownership
    const reqRes = await query('SELECT * FROM manabu.friend_requests WHERE id = $1', [requestId]);
    if (reqRes.rows.length === 0) {
      return NextResponse.json({ error: { code: 'not_found', message: 'Friend request not found' } }, { status: 404 });
    }

    const r = reqRes.rows[0];
    if (r.to_uid !== user.uid) {
      return NextResponse.json({ error: { code: 'forbidden', message: 'You are not the recipient of this request' } }, { status: 403 });
    }

    if (r.status !== 'pending') {
      return NextResponse.json({ error: { code: 'already_responded', message: `Request is already ${r.status}` } }, { status: 409 });
    }

    if (accept) {
      // Check 50-friend limit
      const countRes = await query('SELECT count(*) as count FROM manabu.friendships WHERE user_a = $1 OR user_b = $1', [user.uid]);
      if (Number(countRes.rows[0]?.count || 0) >= 50) {
        return NextResponse.json({ error: { code: 'friend_limit', message: 'You have reached the maximum of 50 friends' } }, { status: 409 });
      }

      // Insert friendship and update request
      await query(`
        INSERT INTO manabu.friendships (user_a, user_b)
        VALUES (LEAST($1, $2), GREATEST($1, $2))
        ON CONFLICT DO NOTHING;
      `, [r.from_uid, r.to_uid]);

      await query(`
        UPDATE manabu.friend_requests 
        SET status = 'accepted', responded_at = now() 
        WHERE id = $1;
      `, [requestId]);

      return NextResponse.json({ status: 'accepted' });
    } else {
      await query(`
        UPDATE manabu.friend_requests 
        SET status = 'declined', responded_at = now() 
        WHERE id = $1;
      `, [requestId]);

      return NextResponse.json({ status: 'declined' });
    }
  } catch (error) {
    console.error('[API Friend Respond POST] Error:', error);
    return NextResponse.json({ error: { code: 'server_error', message: 'Internal error' } }, { status: 500 });
  }
}
