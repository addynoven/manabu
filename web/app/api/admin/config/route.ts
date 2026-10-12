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

  try {
    const res = await query('SELECT value FROM manabu.app_config WHERE key = $1', ['flags']);
    const config = res.rows[0]?.value || { social: true, duels: true, minAppVersion: 1 };
    return NextResponse.json({ config });
  } catch (error) {
    console.error('[Admin Config GET] Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!(await checkAdminAuth(req))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    await query(`
      INSERT INTO manabu.app_config (key, value)
      VALUES ('flags', $1::jsonb)
      ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
    `, [JSON.stringify(body)]);

    return NextResponse.json({ success: true, config: body });
  } catch (error) {
    console.error('[Admin Config POST] Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
