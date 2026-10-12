import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { withTransaction } from '@/core/db/postgres';

export const dynamic = 'force-dynamic';

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ uid: string }> }
) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json({ error: { code: 'unauthorized', message: 'Missing or invalid token' } }, { status: 401 });
  }

  const { uid: targetUid } = await params;
  if (!targetUid) {
    return NextResponse.json({ error: { code: 'validation_failed', message: 'Target UID is required' } }, { status: 422 });
  }

  try {
    await withTransaction(async (client) => {
      // Lock profile rows in deterministic order
      const uids = [user.uid, targetUid].sort();
      await client.query(
        'SELECT uid FROM manabu.profiles WHERE uid IN ($1, $2) ORDER BY uid FOR UPDATE;',
        [uids[0], uids[1]]
      );

      // 1. Delete friendship
      await client.query(`
        DELETE FROM manabu.friendships
        WHERE user_a = LEAST($1, $2) AND user_b = GREATEST($1, $2);
      `, [user.uid, targetUid]);

      // 2. Delete any friend requests between them so they can re-add later
      await client.query(`
        DELETE FROM manabu.friend_requests
        WHERE (from_uid = $1 AND to_uid = $2) OR (from_uid = $2 AND to_uid = $1);
      `, [user.uid, targetUid]);
    });

    return NextResponse.json({ success: true, message: 'Friend removed' });
  } catch (error) {
    console.error('[API Remove Friend DELETE] Error:', error);
    return NextResponse.json({ error: { code: 'server_error', message: 'Internal error' } }, { status: 500 });
  }
}
