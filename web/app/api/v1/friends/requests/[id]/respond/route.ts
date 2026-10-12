import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { withTransaction } from '@/core/db/postgres';

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
    const result = await withTransaction(async (client) => {
      // 1. Fetch request and lock row
      const reqRes = await client.query(
        'SELECT * FROM manabu.friend_requests WHERE id = $1 FOR UPDATE;',
        [requestId]
      );
      if (reqRes.rows.length === 0) {
        return { error: { code: 'not_found', message: 'Friend request not found' }, status: 404 };
      }

      const r = reqRes.rows[0];
      if (r.to_uid !== user.uid) {
        return { error: { code: 'forbidden', message: 'You are not the recipient of this request' }, status: 403 };
      }

      if (r.status !== 'pending') {
        return { error: { code: 'already_responded', message: `Request is already ${r.status}` }, status: 409 };
      }

      // Lock both profile rows in deterministic sorted order
      const uids = [r.from_uid, r.to_uid].sort();
      await client.query(
        'SELECT uid FROM manabu.profiles WHERE uid IN ($1, $2) ORDER BY uid FOR UPDATE;',
        [uids[0], uids[1]]
      );

      if (accept) {
        // Check 50-friend limit for both recipient and sender
        const myCountRes = await client.query(
          'SELECT count(*) as count FROM manabu.friendships WHERE user_a = $1 OR user_b = $1;',
          [user.uid]
        );
        if (Number(myCountRes.rows[0]?.count || 0) >= 50) {
          return { error: { code: 'friend_limit', message: 'You have reached the maximum of 50 friends' }, status: 409 };
        }

        const senderCountRes = await client.query(
          'SELECT count(*) as count FROM manabu.friendships WHERE user_a = $1 OR user_b = $1;',
          [r.from_uid]
        );
        if (Number(senderCountRes.rows[0]?.count || 0) >= 50) {
          return { error: { code: 'friend_limit', message: 'The sender has reached the maximum of 50 friends' }, status: 409 };
        }

        // Insert friendship and update request
        await client.query(`
          INSERT INTO manabu.friendships (user_a, user_b)
          VALUES (LEAST($1, $2), GREATEST($1, $2))
          ON CONFLICT DO NOTHING;
        `, [r.from_uid, r.to_uid]);

        await client.query(`
          UPDATE manabu.friend_requests
          SET status = 'accepted', responded_at = now()
          WHERE id = $1;
        `, [requestId]);

        return { response: { status: 'accepted' }, status: 200 };
      } else {
        await client.query(`
          UPDATE manabu.friend_requests
          SET status = 'declined', responded_at = now()
          WHERE id = $1;
        `, [requestId]);

        return { response: { status: 'declined' }, status: 200 };
      }
    });

    if ('error' in result) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }

    return NextResponse.json(result.response, { status: result.status });
  } catch (error) {
    console.error('[API Friend Respond POST] Error:', error);
    return NextResponse.json({ error: { code: 'server_error', message: 'Internal error' } }, { status: 500 });
  }
}
