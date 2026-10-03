import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAuthToken } from '@/lib/auth';
import { submitAnswer } from '@/lib/duels';

export const dynamic = 'force-dynamic';

const AnswerSchema = z.object({
  round: z.number().int().min(0),
  correct: z.boolean(),
  reactionMs: z.number().min(0).max(60000).nullable().optional(),
});

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json(
      { error: { code: 'unauthorized', message: 'Missing or invalid token' } },
      { status: 401 }
    );
  }

  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { error: { code: 'validation_failed', message: 'Missing match ID' } },
      { status: 422 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: { code: 'validation_failed', message: 'Invalid JSON body' } },
      { status: 422 }
    );
  }

  const parsed = AnswerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: { code: 'validation_failed', message: parsed.error.message } },
      { status: 422 }
    );
  }

  const { round, correct, reactionMs } = parsed.data;

  try {
    const state = await submitAnswer(id, user.uid, round, correct, reactionMs ?? null);
    return NextResponse.json({ state });
  } catch (error: any) {
    const msg = error?.message || '';
    if (msg.includes('not found')) {
      return NextResponse.json(
        { error: { code: 'not_found', message: msg } },
        { status: 404 }
      );
    }
    if (msg.includes('Unauthorized')) {
      return NextResponse.json(
        { error: { code: 'forbidden', message: msg } },
        { status: 403 }
      );
    }

    console.error('[API Duel Answer] Error:', error);
    return NextResponse.json(
      { error: { code: 'server_error', message: 'Failed to record answer' } },
      { status: 500 }
    );
  }
}
