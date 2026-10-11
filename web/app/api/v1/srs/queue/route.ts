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
    const limit = limitParam ? Math.min(100, Math.max(1, Number(limitParam))) : 50;

    const [queue, allCards] = await Promise.all([
      SrsRepository.getDueReviewQueue(authUser.uid, limit),
      SrsRepository.getAllUserCards(authUser.uid),
    ]);

    // Calculate stage counts from reps & stability
    let apprenticeCount = 0;
    let guruCount = 0;
    let masterCount = 0;
    let enlightenedCount = 0;
    let burnedCount = 0;

    for (const card of allCards) {
      if (card.reps <= 4) apprenticeCount++;
      else if (card.reps <= 6) guruCount++;
      else if (card.reps === 7) masterCount++;
      else if (card.reps === 8) enlightenedCount++;
      else burnedCount++;
    }

    return NextResponse.json({
      success: true,
      queue,
      allCards,
      count: queue.length,
      stageSummary: {
        apprenticeCount,
        guruCount,
        masterCount,
        enlightenedCount,
        burnedCount,
        totalCards: allCards.length,
      },
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
    console.error('[API /api/v1/srs/queue] Error:', err);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
