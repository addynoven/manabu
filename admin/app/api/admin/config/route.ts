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
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
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
