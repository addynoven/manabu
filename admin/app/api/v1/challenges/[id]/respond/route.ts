import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAuthToken } from '@/lib/auth';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

const RespondChallengeSchema = z.object({
  score: z.number().int().min(0),
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

  const { score } = parsed.data;

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
