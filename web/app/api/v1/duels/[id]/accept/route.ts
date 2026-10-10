import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { acceptMatch } from '@/features/duels/repositories/duels';

export const dynamic = 'force-dynamic';

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

  try {
    const state = await acceptMatch(id, user.uid);
    return NextResponse.json({ state });
  } catch (error: any) {
    const msg = error?.message || '';
    if (msg.includes('not found')) {
      return NextResponse.json(
        { error: { code: 'not_found', message: msg } },
        { status: 404 }
      );
    }
    if (msg.includes('Only the invited player')) {
      return NextResponse.json(
        { error: { code: 'forbidden', message: msg } },
        { status: 403 }
      );
    }
    if (msg.includes('Cannot accept match')) {
      return NextResponse.json(
        { error: { code: 'invalid_state', message: msg } },
        { status: 409 }
      );
    }

    console.error('[API Duel Accept] Error:', error);
    return NextResponse.json(
      { error: { code: 'server_error', message: 'Failed to accept duel' } },
      { status: 500 }
    );
  }
}
