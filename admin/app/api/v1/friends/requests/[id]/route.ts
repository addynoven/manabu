import { NextRequest, NextResponse } from 'next/server';
import { verifyAuthToken } from '@/lib/auth';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await verifyAuthToken(req);
  if (!user) {
    return NextResponse.json({ error: { code: 'unauthorized', message: 'Missing or invalid token' } }, { status: 401 });
  }

  const { id } = await params;
  const requestId = Number(id);
  if (!requestId || isNaN(requestId)) {
    return NextResponse.json({ error: { code: 'validation_failed', message: 'Invalid request ID' } }, { status: 422 });
  }

  try {
    const res = await query(`
      DELETE FROM manabu.friend_requests 
      WHERE id = $1 AND from_uid = $2 AND status = 'pending'
      RETURNING id;
    `, [requestId, user.uid]);

    if (res.rows.length === 0) {
      return NextResponse.json({ error: { code: 'not_found', message: 'Pending request not found or not owned' } }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Request cancelled' });
  } catch (error) {
    console.error('[API Cancel Request DELETE] Error:', error);
    return NextResponse.json({ error: { code: 'server_error', message: 'Internal error' } }, { status: 500 });
  }
}
