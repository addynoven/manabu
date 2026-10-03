import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyAuthToken } from '@/lib/auth';
import { query } from '@/lib/db';
import { createMatch, getInboxMatches } from '@/lib/duels';
import { checkRateLimit } from '@/lib/rateLimit';

export const dynamic = 'force-dynamic';

const CreateDuelSchema = z.object({
  game: z.enum(['kanjiDuel', 'karuta', 'shiritori']).default('kanjiDuel'),
  toUid: z.string().min(1),
  deck: z.unknown(),
});

export async function GET(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json(
      { error: { code: 'unauthorized', message: 'Missing or invalid token' } },
      { status: 401 }
    );
  }

  try {
    const inbox = await getInboxMatches(user.uid);
    return NextResponse.json({ inbox });
  } catch (error) {
    console.error('[API Duels GET] Error:', error);
    return NextResponse.json(
      { error: { code: 'server_error', message: 'Failed to fetch duel inbox' } },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json(
      { error: { code: 'unauthorized', message: 'Missing or invalid token' } },
      { status: 401 }
    );
  }

  // Rate limit: 20 per hour
  const rl = await checkRateLimit(user.uid, 'duel.create', { limit: 20, windowSeconds: 3600 });
  if (!rl.allowed) {
    return NextResponse.json(
      { error: { code: 'rate_limited', message: 'Too many duel invitations created' } },
      { status: 429 }
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

  const parsed = CreateDuelSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: { code: 'validation_failed', message: parsed.error.message } },
      { status: 422 }
    );
  }

  const { game, toUid, deck } = parsed.data;

  if (toUid === user.uid) {
    return NextResponse.json(
      { error: { code: 'self', message: 'Cannot challenge yourself to a duel' } },
      { status: 409 }
    );
  }

  try {
    let targetUid = toUid.trim();

    // Check if target is an 8-character friend code (with or without dash)
    const cleanCode = targetUid.replace(/[^A-HJ-NP-Z2-9]/gi, '').toUpperCase();
    if (cleanCode.length === 8) {
      const codeRes = await query(
        `SELECT uid FROM manabu.profiles WHERE friend_code = $1`,
        [cleanCode]
      );
      if (codeRes.rows.length > 0) {
        targetUid = codeRes.rows[0].uid;
      }
    }

    if (targetUid === user.uid) {
      return NextResponse.json(
        { error: { code: 'self', message: 'Cannot challenge yourself to a duel' } },
        { status: 409 }
      );
    }

    // Verify target exists and is not banned
    const profileCheck = await query(
      `SELECT uid, banned FROM manabu.profiles WHERE uid = $1`,
      [targetUid]
    );

    if (profileCheck.rows.length === 0) {
      return NextResponse.json(
        { error: { code: 'not_found', message: 'Opponent profile not found' } },
        { status: 404 }
      );
    }

    if (profileCheck.rows[0].banned) {
      return NextResponse.json(
        { error: { code: 'forbidden', message: 'This user is suspended' } },
        { status: 403 }
      );
    }

    // 2. Create match in Valkey
    const { id } = await createMatch(game, user.uid, targetUid, deck);
    return NextResponse.json({ id }, { status: 201 });
  } catch (error: any) {
    console.error('[API Duels POST] Error:', error);
    return NextResponse.json(
      { error: { code: 'server_error', message: error.message || 'Failed to create match' } },
      { status: 500 }
    );
  }
}
