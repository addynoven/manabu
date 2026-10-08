import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

function checkAdminAuth(req: NextRequest): boolean {
  const secret = process.env.ADMIN_SECRET || 'manabu_admin_2026_secure';
  const cookie = req.cookies.get('manabu_admin_session')?.value;
  const header = req.headers.get('x-admin-secret');
  return cookie === secret || header === secret;
}

export async function GET(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q')?.trim() || '';

  try {
    let sql = 'SELECT * FROM manabu.profiles ORDER BY updated_at DESC LIMIT 50';
    let params: any[] = [];

    if (q) {
      sql = `
        SELECT * FROM manabu.profiles 
        WHERE uid ILIKE $1 OR display_name ILIKE $1 OR friend_code ILIKE $1
        ORDER BY updated_at DESC 
        LIMIT 50
      `;
      params = [`%${q}%`];
    }

    const res = await query(sql, params);
    return NextResponse.json({ users: res.rows });
  } catch (error) {
    console.error('[Admin Users GET] Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { uid, banned } = await req.json();
    if (!uid || typeof banned !== 'boolean') {
      return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    await query('UPDATE manabu.profiles SET banned = $1, updated_at = now() WHERE uid = $2', [banned, uid]);
    return NextResponse.json({ success: true, uid, banned });
  } catch (error) {
    console.error('[Admin Users PATCH] Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const uid = searchParams.get('uid');
  if (!uid) {
    return NextResponse.json({ error: 'UID required' }, { status: 400 });
  }

  try {
    await query('DELETE FROM manabu.profiles WHERE uid = $1', [uid]);
    return NextResponse.json({ success: true, deletedUid: uid });
  } catch (error) {
    console.error('[Admin Users DELETE] Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
