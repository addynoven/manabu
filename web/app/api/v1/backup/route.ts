import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken } from '@/features/auth/repositories/auth';
import { query } from '@/core/db/postgres';
import { SrsRepository } from '@/features/srs/repositories/srsRepository';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json(
      { error: { code: 'unauthorized', message: 'Missing or invalid token' } },
      { status: 401 }
    );
  }

  try {
    const res = await query(
      `SELECT backup_data, version, synced_at FROM manabu.user_backups WHERE uid = $1`,
      [user.uid]
    );

    if (res.rows.length === 0) {
      return NextResponse.json({ backup: null, syncedAt: null });
    }

    const row = res.rows[0];
    return NextResponse.json({
      backup: row.backup_data,
      version: row.version,
      syncedAt: row.synced_at,
    });
  } catch (error) {
    console.error('[API Backup GET] Error:', error);
    return NextResponse.json(
      { error: { code: 'server_error', message: 'Internal error' } },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json(
      { error: { code: 'unauthorized', message: 'Missing or invalid token' } },
      { status: 401 }
    );
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: { code: 'validation_failed', message: 'Invalid JSON body' } },
      { status: 422 }
    );
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json(
      { error: { code: 'validation_failed', message: 'Expected JSON snapshot object' } },
      { status: 422 }
    );
  }

  const version = typeof body.version === 'number' ? body.version : 1;

  try {
    // 1. Ensure profile exists in case this is a fresh user
    await query(
      `
      INSERT INTO manabu.profiles (uid, display_name, week_id, friend_code)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (uid) DO NOTHING;
      `,
      [
        user.uid,
        user.email ? user.email.split('@')[0].slice(0, 24) : 'Manabu Student',
        '2026-W40',
        user.uid.replace(/[^A-HJ-NP-Z2-9]/gi, '').slice(0, 8).padEnd(8, '7').toUpperCase(),
      ]
    );

    // 2. Extract completed lesson exercise IDs and seed card states into manabu.card_states
    const completedLessons = body.dojo?.completedLessons;
    if (completedLessons && typeof completedLessons === 'object') {
      const lessonIds = Array.isArray(completedLessons)
        ? completedLessons
        : Object.keys(completedLessons);

      const cardsToSeed: Array<{ cardId: string; cardType: 'vocab' | 'kanji' | 'grammar' }> = [];
      for (const lId of lessonIds) {
        cardsToSeed.push({ cardId: `${lId}_1`, cardType: 'vocab' });
        cardsToSeed.push({ cardId: `${lId}_2`, cardType: 'vocab' });
        cardsToSeed.push({ cardId: `${lId}_3`, cardType: 'vocab' });
        cardsToSeed.push({ cardId: `${lId}_4`, cardType: 'grammar' });
      }

      await SrsRepository.seedUserCards(user.uid, cardsToSeed);
    }

    // 3. Insert or update backup data
    const res = await query(
      `
      INSERT INTO manabu.user_backups (uid, backup_data, version, synced_at)
      VALUES ($1, $2, $3, now())
      ON CONFLICT (uid) DO UPDATE SET
        backup_data = EXCLUDED.backup_data,
        version = EXCLUDED.version,
        synced_at = now()
      RETURNING synced_at;
      `,
      [user.uid, JSON.stringify(body), version]
    );

    return NextResponse.json({
      ok: true,
      syncedAt: res.rows[0].synced_at,
    });
  } catch (error) {
    console.error('[API Backup PUT] Error:', error);
    return NextResponse.json(
      { error: { code: 'server_error', message: 'Failed to save cloud backup' } },
      { status: 500 }
    );
  }
}
