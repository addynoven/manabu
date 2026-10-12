import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { withTransaction } from '@/core/db/postgres';
import { invalidateSrsCache } from '@/features/srs/repositories/srsCache';
import { checkRateLimit } from '@/core/network/rateLimit';

export const dynamic = 'force-dynamic';

export async function DELETE(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json(
      { error: { code: 'unauthorized', message: 'Missing or invalid token' } },
      { status: 401 }
    );
  }

  // Rate-limit account deletion (sensitive operation: failClosed = true)
  const rl = await checkRateLimit(user.uid, 'account.delete', {
    limit: 5,
    windowSeconds: 3600,
    failClosed: true,
  });
  if (!rl.allowed) {
    return NextResponse.json(
      { error: { code: 'rate_limited', message: 'Account deletion rate limit exceeded' } },
      { status: 429 }
    );
  }

  try {
    // Perform all database modifications in a single atomic transaction
    await withTransaction(async (client) => {
      // 1. Delete SRS card states and review history logs
      await client.query('DELETE FROM manabu.card_states WHERE uid = $1', [user.uid]);
      await client.query('DELETE FROM manabu.review_logs WHERE uid = $1', [user.uid]);

      // 2. Anonymize historical match results
      await client.query(
        `
        UPDATE manabu.match_results
        SET player_a = CASE WHEN player_a = $1 THEN 'deleted' ELSE player_a END,
            player_b = CASE WHEN player_b = $1 THEN 'deleted' ELSE player_b END,
            winner   = CASE WHEN winner = $1 THEN 'deleted' ELSE winner END
        WHERE player_a = $1 OR player_b = $1;
      `,
        [user.uid]
      );

      // 3. Delete user profile (cascades to friend_requests, friendships, score_challenges, user_backups)
      await client.query('DELETE FROM manabu.profiles WHERE uid = $1', [user.uid]);
    });

    // 4. Invalidate Redis/Valkey cache for the user
    await invalidateSrsCache(user.uid);

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('[API Account DELETE] Error during atomic account deletion:', error);
    return NextResponse.json(
      { error: { code: 'server_error', message: 'Internal error during account deletion' } },
      { status: 500 }
    );
  }
}
