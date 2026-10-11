import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protected route paths
  const protectedPaths = ['/review', '/arcade', '/friends', '/settings', '/admin'];
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  if (isProtected) {
    const sessionCookie = request.cookies.get('manabu_session')?.value;
    const authHeader = request.headers.get('authorization');

    // If both cookie and auth header are missing, allow request but inject header for client hydration
    const response = NextResponse.next();
    if (sessionCookie) {
      response.headers.set('x-manabu-session', 'active');
    }
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/review/:path*',
    '/arcade/:path*',
    '/friends/:path*',
    '/settings/:path*',
    '/admin/:path*',
  ],
};
