import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { getDuelState } from '@/features/duels/repositories/duels';

export const dynamic = 'force-dynamic';

export async function GET(
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

  const includeDeck = req.nextUrl.searchParams.get('deck') === '1';

  try {
    const state = await getDuelState(id, user.uid, includeDeck);
    return NextResponse.json({ state });
  } catch (error: any) {
    if (error?.message === 'Match not found') {
      return NextResponse.json(
        { error: { code: 'not_found', message: 'Match not found or expired' } },
        { status: 404 }
      );
    }
    if (error?.message === 'Unauthorized') {
      return NextResponse.json(
        { error: { code: 'forbidden', message: 'You are not a participant in this match' } },
        { status: 403 }
      );
    }

    console.error('[API Duel GET] Error:', error);
    return NextResponse.json(
      { error: { code: 'server_error', message: 'Failed to retrieve match state' } },
      { status: 500 }
    );
  }
}
