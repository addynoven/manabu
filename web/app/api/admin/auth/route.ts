import { NextRequest, NextResponse } from 'next/server';
import { SignJWT, jwtVerify } from 'jose';
import crypto from 'crypto';
import { checkRateLimit } from '@/core/network/rateLimit';
import { getValkey } from '@/core/db/valkey';

export const dynamic = 'force-dynamic';

export function getAdminSecret(): string | null {
  const secret = process.env.ADMIN_SECRET;
  if (!secret || secret.trim() === '') {
    return null;
  }
  return secret.trim();
}

/**
 * Derives a separate 256-bit cryptographic HMAC key for admin JWT signing.
 * Uses process.env.ADMIN_JWT_SECRET if present, or derives via SHA-256 HMAC with salt.
 */
export function getJwtSecretKey(adminSecret: string): Uint8Array {
  const explicitKey = process.env.ADMIN_JWT_SECRET;
  if (explicitKey && explicitKey.trim().length >= 32) {
    return new TextEncoder().encode(explicitKey.trim());
  }

  // Cryptographic derivation from adminSecret using SHA-256 HMAC and salt
  const derivedKey = crypto
    .createHmac('sha256', 'manabu_admin_jwt_salt_v2_2026')
    .update(adminSecret)
    .digest('hex');

  return new TextEncoder().encode(derivedKey);
}

export async function verifyAdminJwt(token: string, adminSecret: string): Promise<boolean> {
  try {
    const signingKey = getJwtSecretKey(adminSecret);
    const { payload } = await jwtVerify(token, signingKey);

    if (payload.role !== 'admin' || !payload.sid || typeof payload.sid !== 'string') {
      return false;
    }

    // Check Valkey Redis server-side session revocation list
    try {
      const valkey = getValkey();
      const exists = await valkey.exists(`manabu:admin:session:${payload.sid}`);
      return exists === 1;
    } catch {
      // If Valkey is down, fall back to valid JWT cryptographic signature
      return true;
    }
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';

  // 1. Strict Rate Limiting (5 failed attempts per 15 minutes per IP; failClosed = true)
  const rl = await checkRateLimit(clientIp, 'admin.auth.login', {
    limit: 5,
    windowSeconds: 900, // 15 minutes
    failClosed: true,
  });

  if (!rl.allowed) {
    return NextResponse.json(
      { error: 'Too many failed login attempts. Account temporarily locked for 15 minutes.' },
      { status: 429 }
    );
  }

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

    // 2. Generate random session ID (sid) for server-side session tracking & revocation
    const sid = crypto.randomUUID();
    const nowEpochSeconds = Math.floor(Date.now() / 1000);

    // 3. Store session in Valkey Redis (24-hour TTL)
    try {
      const valkey = getValkey();
      await valkey.set(`manabu:admin:session:${sid}`, 'active', 'EX', 86400);
    } catch (vErr) {
      console.error('[Admin Auth] Valkey session store warning:', vErr);
    }

    // 4. Sign a 24-hour admin session JWT using derived HMAC key and Unix seconds iat
    const token = await new SignJWT({ role: 'admin', sid })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt(nowEpochSeconds)
      .setExpirationTime('24h')
      .sign(getJwtSecretKey(adminSecret));

    const response = NextResponse.json({ success: true });
    response.cookies.set('manabu_admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    return response;
  } catch (err: unknown) {
    console.error('[Admin Auth POST] Error:', err);
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const cookieToken = req.cookies.get('manabu_admin_session')?.value;
    const adminSecret = getAdminSecret();

    if (cookieToken && adminSecret) {
      try {
        const signingKey = getJwtSecretKey(adminSecret);
        const { payload } = await jwtVerify(cookieToken, signingKey);
        if (payload.sid && typeof payload.sid === 'string') {
          const valkey = getValkey();
          await valkey.del(`manabu:admin:session:${payload.sid}`);
        }
      } catch {}
    }
  } catch {}

  const response = NextResponse.json({ success: true });
  response.cookies.delete('manabu_admin_session');
  return response;
}
