import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { SrsRepository } from '@/features/srs/repositories/srsRepository';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const authUser = await verifyAuthToken(req);
    if (!authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const limitParam = req.nextUrl.searchParams.get('limit');
    const limit = limitParam ? Math.min(100, Math.max(1, Number(limitParam))) : 20;

    const queue = await SrsRepository.getDueReviewQueue(authUser.uid, limit);

    return NextResponse.json({ success: true, queue, count: queue.length });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
    console.error('[API /api/v1/srs/queue] Error:', err);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
