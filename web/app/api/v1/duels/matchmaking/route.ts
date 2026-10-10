import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { matchOrQueue, cancelMatchmaking, type DuelGameType } from '@/features/duels/repositories/duels';
import { checkRateLimit } from '@/core/network/rateLimit';

export const dynamic = 'force-dynamic';

const MatchmakingSchema = z.object({
  game: z.enum(['kanjiDuel', 'karuta', 'shiritori']).default('kanjiDuel'),
  deck: z.unknown().optional(),
});

export async function POST(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json(
      { error: { code: 'unauthorized', message: 'Missing or invalid token' } },
      { status: 401 }
    );
  }

  // Rate limit: 60 per minute for matchmaking polling
  const rl = await checkRateLimit(user.uid, 'duel.matchmaking', { limit: 60, windowSeconds: 60 });
  if (!rl.allowed) {
    return NextResponse.json(
      { error: { code: 'rate_limited', message: 'Matchmaking rate limit exceeded' } },
      { status: 429 }
    );
  }

  let body: unknown = {};
  try {
    body = await req.json();
  } catch {}

  const parsed = MatchmakingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: { code: 'validation_failed', message: parsed.error.message } },
      { status: 422 }
    );
  }

  const { game, deck } = parsed.data;

  try {
    const result = await matchOrQueue(game, user.uid, deck);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('[API Duels Matchmaking POST] Error:', error);
    return NextResponse.json(
      { error: { code: 'server_error', message: error.message || 'Matchmaking error' } },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json(
      { error: { code: 'unauthorized', message: 'Missing or invalid token' } },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(req.url);
  const game = (searchParams.get('game') || 'kanjiDuel') as DuelGameType;

  try {
    await cancelMatchmaking(game, user.uid);
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: { code: 'server_error', message: error.message || 'Failed to cancel matchmaking' } },
      { status: 500 }
    );
  }
}
