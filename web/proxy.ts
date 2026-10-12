import { NextResponse, NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Strict Admin Route Interception
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    const adminSession = request.cookies.get('manabu_admin_session')?.value;
    const adminSecretHeader = request.headers.get('x-admin-secret');

    if (!adminSession && !adminSecretHeader) {
      if (pathname.startsWith('/api/admin')) {
        return NextResponse.json(
          { error: 'Unauthorized admin access' },
          { status: 401 }
        );
      }
      // Redirect unauthorized page access to home
      return NextResponse.redirect(new URL('/?auth=admin_required', request.url));
    }
  }

  // 2. Protected User Page Routes Interception
  const protectedPaths = ['/review', '/arcade', '/friends', '/settings', '/cram'];
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  if (isProtected) {
    const response = NextResponse.next();
    const sessionCookie = request.cookies.get('manabu_session')?.value;
    const userCookie = request.cookies.get('manabu_user')?.value;

    if (sessionCookie || userCookie) {
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
    '/cram/:path*',
    '/admin/:path*',
    '/api/admin/:path*',
  ],
};
