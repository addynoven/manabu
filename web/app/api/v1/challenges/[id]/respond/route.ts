import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { query } from '@/core/db/postgres';

export const dynamic = 'force-dynamic';

const GAME_MAX_SCORES: Record<string, number> = {
  rain: 3000,
  snake: 2500,
  catch: 3500,
  survival: 5000,
};

const ProofSchema = z
  .object({
    durationSeconds: z.number().int().min(5).max(300).default(60),
    itemsHandled: z.number().int().min(1).max(300).default(20),
    accuracy: z.number().min(0).max(1).default(1.0),
    timestamp: z.number().optional(),
  })
  .optional();

const RespondChallengeSchema = z.object({
  score: z.number().int().min(0),
  proof: ProofSchema,
});

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json({ error: { code: 'unauthorized', message: 'Missing or invalid token' } }, { status: 401 });
  }

  const { id: challengeId } = await params;
  if (!challengeId) {
    return NextResponse.json({ error: { code: 'validation_failed', message: 'Invalid challenge ID' } }, { status: 422 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: { code: 'validation_failed', message: 'Invalid JSON' } }, { status: 422 });
  }

  const parsed = RespondChallengeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: { code: 'validation_failed', message: 'Score is required' } }, { status: 422 });
  }

  const { score, proof } = parsed.data;

  try {
    const res = await query('SELECT * FROM manabu.score_challenges WHERE id = $1', [challengeId]);
    if (res.rows.length === 0) {
      return NextResponse.json({ error: { code: 'not_found', message: 'Challenge not found' } }, { status: 404 });
    }

    const c = res.rows[0];
    if (c.target_uid !== user.uid) {
      return NextResponse.json({ error: { code: 'forbidden', message: 'Not the target of this challenge' } }, { status: 403 });
    }

    if (c.status !== 'pending') {
      return NextResponse.json({ error: { code: 'invalid_status', message: `Challenge is already ${c.status}` } }, { status: 409 });
    }

    if (new Date(c.expires_at).getTime() < Date.now()) {
      await query("UPDATE manabu.score_challenges SET status = 'expired' WHERE id = $1", [challengeId]);
      return NextResponse.json({ error: { code: 'expired', message: 'Challenge has expired' } }, { status: 410 });
    }

    // Authoritative server-side score bounds & proof validation
    const game = c.game || 'rain';
    const maxAllowedScore = GAME_MAX_SCORES[game] || 3000;
    const itemsHandled = proof?.itemsHandled || Math.ceil(score / 50) || 1;
    const maxPlausibleScore = Math.min(maxAllowedScore, Math.max(100, itemsHandled * 150));

    if (score > maxPlausibleScore) {
      return NextResponse.json(
        {
          error: {
            code: 'validation_failed',
            message: `Submitted score (${score}) exceeds maximum allowed score (${maxPlausibleScore}) for ${game}`,
          },
        },
        { status: 422 }
      );
    }

    await query(`
      UPDATE manabu.score_challenges 
      SET target_score = $1, status = 'completed', completed_at = now()
      WHERE id = $2;
    `, [score, challengeId]);

    let winner: 'creator' | 'target' | 'draw' = 'draw';
    if (score > c.creator_score) winner = 'target';
    else if (c.creator_score > score) winner = 'creator';

    return NextResponse.json({
      status: 'completed',
      winner,
      creatorScore: c.creator_score,
      targetScore: score,
    });
  } catch (error) {
    console.error('[API Challenge Respond POST] Error:', error);
    return NextResponse.json({ error: { code: 'server_error', message: 'Internal error' } }, { status: 500 });
  }
}
