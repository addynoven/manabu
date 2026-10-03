import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAuthToken } from '@/lib/auth';
import { submitShiritoriMove } from '@/lib/duels';

export const dynamic = 'force-dynamic';

const MoveSchema = z.object({
  word: z.string().min(1).max(50),
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

  const parsed = MoveSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: { code: 'validation_failed', message: parsed.error.message } },
      { status: 422 }
    );
  }

  const { word } = parsed.data;

  try {
    const state = await submitShiritoriMove(id, user.uid, word);
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
    if (msg.includes('Not your turn')) {
      return NextResponse.json(
        { error: { code: 'invalid_turn', message: msg } },
        { status: 409 }
      );
    }
    if (msg.includes('already been used')) {
      return NextResponse.json(
        { error: { code: 'duplicate_word', message: msg } },
        { status: 409 }
      );
    }

    console.error('[API Duel Move] Error:', error);
    return NextResponse.json(
      { error: { code: 'server_error', message: 'Failed to record move' } },
      { status: 500 }
    );
  }
}
