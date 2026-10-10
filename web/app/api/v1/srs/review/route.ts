import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { SrsRepository } from '@/features/srs/repositories/srsRepository';
import { ReviewSubmissionPayloadSchema } from '@/features/srs/models/srs.types';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const authUser = await verifyAuthToken(req);
    if (!authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const parseResult = ReviewSubmissionPayloadSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: 'Invalid review submission payload', details: parseResult.error.format() },
        { status: 400 }
      );
    }

    const { cardId, cardType, rating } = parseResult.data;

    const result = await SrsRepository.executeReviewTransaction(
      authUser.uid,
      cardId,
      cardType,
      rating
    );

    return NextResponse.json({ success: true, result });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
    console.error('[API /api/v1/srs/review] Error:', err);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
