import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { secret } = await req.json();
    const adminSecret = process.env.ADMIN_SECRET || 'manabu_admin_2026_secure';

    if (!secret || secret !== adminSecret) {
      return NextResponse.json({ error: 'Invalid admin secret' }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set('manabu_admin_session', secret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('manabu_admin_session');
  return response;
}
