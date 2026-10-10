import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { query } from '@/core/db/postgres';

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
    // 1. Delete friendship
    await query(`
      DELETE FROM manabu.friendships 
      WHERE user_a = LEAST($1, $2) AND user_b = GREATEST($1, $2);
    `, [user.uid, targetUid]);

    // 2. Delete any friend requests between them so they can re-add later
    await query(`
      DELETE FROM manabu.friend_requests 
      WHERE (from_uid = $1 AND to_uid = $2) OR (from_uid = $2 AND to_uid = $1);
    `, [user.uid, targetUid]);

    return NextResponse.json({ success: true, message: 'Friend removed' });
  } catch (error) {
    console.error('[API Remove Friend DELETE] Error:', error);
    return NextResponse.json({ error: { code: 'server_error', message: 'Internal error' } }, { status: 500 });
  }
}
