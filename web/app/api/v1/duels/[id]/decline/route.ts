import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken } from '@/lib/auth';
import { declineMatch } from '@/lib/duels';

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
    await declineMatch(id, user.uid);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[API Duel Decline] Error:', error);
    return NextResponse.json(
      { error: { code: 'server_error', message: 'Failed to decline duel' } },
      { status: 500 }
    );
  }
}
