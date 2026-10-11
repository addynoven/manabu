import { createRemoteJWKSet, jwtVerify } from 'jose';
import { NextRequest } from 'next/server';

const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID || 'manabu-japanese-9007';

const JWKS = createRemoteJWKSet(
  new URL('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com')
);

export interface AuthenticatedUser {
  uid: string;
  email?: string;
}

export async function verifyAuthToken(req: NextRequest): Promise<AuthenticatedUser | null> {
  // 1. Try Authorization Header
  let token: string | undefined;
  const authHeader = req.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.slice(7).trim();
  }

  // 2. Fallback to HTTP-Only Cookie
  if (!token) {
    const cookieSession = req.cookies.get('manabu_session')?.value;
    if (cookieSession) {
      token = cookieSession;
    }
  }

  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, JWKS, {
      issuer: `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`,
      audience: FIREBASE_PROJECT_ID,
    });

    if (!payload.sub) {
      return null;
    }

    return {
      uid: payload.sub,
      email: payload.email as string | undefined,
    };
  } catch (error) {
    console.error('[Auth] Token verification failed:', error);
    return null;
  }
}
