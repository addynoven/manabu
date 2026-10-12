import { NextRequest, NextResponse } from 'next/server';
import { SignJWT, jwtVerify } from 'jose';

export const dynamic = 'force-dynamic';

export function getAdminSecret(): string | null {
  const secret = process.env.ADMIN_SECRET;
  if (!secret || secret.trim() === '') {
    return null;
  }
  return secret.trim();
}

export function getJwtSecretKey(secret: string): Uint8Array {
  return new TextEncoder().encode(`admin_jwt_key_${secret}`);
}

export async function verifyAdminJwt(token: string, secret: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey(secret));
    return payload.role === 'admin';
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const adminSecret = getAdminSecret();
    if (!adminSecret) {
      console.error('[Admin Auth] FATAL: ADMIN_SECRET environment variable is missing.');
      return NextResponse.json(
        { error: 'Server configuration error: ADMIN_SECRET is not configured' },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { secret } = body;

    if (!secret || typeof secret !== 'string' || secret.trim() !== adminSecret) {
      return NextResponse.json({ error: 'Invalid admin secret' }, { status: 401 });
    }

    // Sign a 24-hour admin session JWT
    const token = await new SignJWT({ role: 'admin', issuedAt: Date.now() })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(getJwtSecretKey(adminSecret));

    const response = NextResponse.json({ success: true });
    response.cookies.set('manabu_admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    return response;
  } catch (err: unknown) {
    console.error('[Admin Auth POST] Error:', err);
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('manabu_admin_session');
  return response;
}
