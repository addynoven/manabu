import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken } from '@/lib/auth';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function DELETE(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json({ error: { code: 'unauthorized', message: 'Missing or invalid token' } }, { status: 401 });
  }

  try {
    // 1. Delete profile (cascades to friend_requests, friendships, score_challenges)
    await query('DELETE FROM manabu.profiles WHERE uid = $1', [user.uid]);

    // 2. Anonymize match results
    await query(`
      UPDATE manabu.match_results 
      SET player_a = CASE WHEN player_a = $1 THEN 'deleted' ELSE player_a END,
          player_b = CASE WHEN player_b = $1 THEN 'deleted' ELSE player_b END,
          winner   = CASE WHEN winner = $1 THEN 'deleted' ELSE winner END
      WHERE player_a = $1 OR player_b = $1;
    `, [user.uid]);

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('[API Account DELETE] Error:', error);
    return NextResponse.json({ error: { code: 'server_error', message: 'Internal error' } }, { status: 500 });
  }
}
