import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const res = await query('SELECT value FROM manabu.app_config WHERE key = $1', ['flags']);
    const config = res.rows[0]?.value || { social: true, duels: true, minAppVersion: 1 };

    return NextResponse.json(config, {
      headers: {
        'Cache-Control': 's-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('[API Config] Error:', error);
    // Return safe default fallback
    return NextResponse.json({ social: true, duels: true, minAppVersion: 1 });
  }
}
