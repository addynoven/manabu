import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/core/db/postgres';
import { getAdminSecret, verifyAdminJwt } from '../auth/route';

export const dynamic = 'force-dynamic';

async function checkAdminAuth(req: NextRequest): Promise<boolean> {
  const adminSecret = getAdminSecret();
  if (!adminSecret) {
    return false; // Fail closed if ADMIN_SECRET is not configured
  }

  // 1. Check signed JWT session cookie
  const cookieToken = req.cookies.get('manabu_admin_session')?.value;
  if (cookieToken) {
    const isValidJwt = await verifyAdminJwt(cookieToken, adminSecret);
    if (isValidJwt) return true;
  }

  // 2. Check x-admin-secret header against validated ADMIN_SECRET
  const headerSecret = req.headers.get('x-admin-secret');
  if (headerSecret && headerSecret.trim() === adminSecret) {
    return true;
  }

  return false;
}

export async function GET(req: NextRequest) {
  if (!(await checkAdminAuth(req))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q')?.trim() || '';

  try {
    let sql = 'SELECT * FROM manabu.profiles ORDER BY updated_at DESC LIMIT 50';
    let params: unknown[] = [];

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
  if (!(await checkAdminAuth(req))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const { uid, banned } = body;
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
  if (!(await checkAdminAuth(req))) {
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
