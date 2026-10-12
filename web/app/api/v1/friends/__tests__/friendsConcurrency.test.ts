import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import path from 'path';
import fs from 'fs';

// Pre-load web/.env.local environment variables for tests
try {
  if (typeof process !== 'undefined' && typeof __dirname !== 'undefined') {
    const envPath = path.resolve(__dirname, '../../../../.env.local');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      for (const line of envContent.split('\n')) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const [key, ...vals] = trimmed.split('=');
          process.env[key.trim()] = vals.join('=').trim();
        }
      }
    }
  }
} catch {}

import { query, withTransaction } from '@/core/db/postgres';

describe('Friends Concurrency & Invariant Safety Tests', () => {
  const userA = 'e2e_friend_race_user_a';
  const userB = 'e2e_friend_race_user_b';
  const userC = 'e2e_friend_race_user_c';
  const codeA = 'FR2A3B4C';
  const codeB = 'FR2B3C4D';
  const codeC = 'FR2C4D5E';

  beforeAll(async () => {
    // Apply migration for index if needed
    await query(`
      CREATE UNIQUE INDEX IF NOT EXISTS friend_requests_pending_pair_idx
      ON manabu.friend_requests (LEAST(from_uid, to_uid), GREATEST(from_uid, to_uid))
      WHERE status = 'pending';
    `);

    // Clean existing test data
    await query(`DELETE FROM manabu.profiles WHERE uid IN ($1, $2, $3)`, [userA, userB, userC]);

    // Seed test profiles
    await query(`
      INSERT INTO manabu.profiles (uid, display_name, friend_code, week_id)
      VALUES
        ($1, 'User A', $2, '2026-W40'),
        ($3, 'User B', $4, '2026-W40'),
        ($5, 'User C', $6, '2026-W40');
    `, [userA, codeA, userB, codeB, userC, codeC]);
  });

  afterAll(async () => {
    await query(`DELETE FROM manabu.profiles WHERE uid IN ($1, $2, $3)`, [userA, userB, userC]);
  });

  it('Handles simultaneous mutual friend requests atomically without duplicate requests or race condition', async () => {
    // Helper simulating atomic request sending logic
    const sendRequest = async (fromUid: string, targetCode: string) => {
      const targetRes = await query('SELECT * FROM manabu.profiles WHERE friend_code = $1', [targetCode]);
      const target = targetRes.rows[0];

      return withTransaction(async (client) => {
        const uids = [fromUid, target.uid].sort();
        await client.query(
          'SELECT uid FROM manabu.profiles WHERE uid IN ($1, $2) ORDER BY uid FOR UPDATE;',
          [uids[0], uids[1]]
        );

        const reverseReq = await client.query(`
          SELECT * FROM manabu.friend_requests
          WHERE from_uid = $1 AND to_uid = $2 AND status = 'pending'
          FOR UPDATE;
        `, [target.uid, fromUid]);

        if (reverseReq.rows.length > 0) {
          await client.query(`
            INSERT INTO manabu.friendships (user_a, user_b)
            VALUES (LEAST($1, $2), GREATEST($1, $2))
            ON CONFLICT DO NOTHING;
          `, [fromUid, target.uid]);

          await client.query(`
            UPDATE manabu.friend_requests
            SET status = 'accepted', responded_at = now()
            WHERE id = $1;
          `, [reverseReq.rows[0].id]);

          return { status: 'accepted' };
        }

        const insertRes = await client.query(`
          INSERT INTO manabu.friend_requests (from_uid, to_uid, status)
          VALUES ($1, $2, 'pending')
          RETURNING id, status;
        `, [fromUid, target.uid]);

        return { status: 'pending', id: insertRes.rows[0].id };
      });
    };

    // Trigger two requests concurrently in parallel
    const [resA, resB] = await Promise.all([
      sendRequest(userA, codeB),
      sendRequest(userB, codeA),
    ]);

    // One must be pending, and the other must auto-accept into a friendship
    const statuses = [resA.status, resB.status].sort();
    expect(statuses).toEqual(['accepted', 'pending']);

    // Verify exactly one friendship created
    const friendRes = await query(
      `SELECT * FROM manabu.friendships WHERE user_a = LEAST($1, $2) AND user_b = GREATEST($1, $2);`,
      [userA, userB]
    );
    expect(friendRes.rows.length).toBe(1);

    // Clean up friendships and requests between A and B
    await query(`DELETE FROM manabu.friendships WHERE user_a = LEAST($1, $2) AND user_b = GREATEST($1, $2);`, [userA, userB]);
    await query(`DELETE FROM manabu.friend_requests WHERE (from_uid = $1 AND to_uid = $2) OR (from_uid = $2 AND to_uid = $1);`, [userA, userB]);
  });

  it('Enforces 50-friend limit under concurrent accepts', async () => {
    // Seed 49 dummy friends for User A
    const dummyUids: string[] = [];
    for (let i = 1; i <= 49; i++) {
      const dUid = `e2e_dummy_friend_${i}`;
      dummyUids.push(dUid);
    }

    await query(`DELETE FROM manabu.profiles WHERE uid LIKE 'e2e_dummy_friend_%'`);

    const validChars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    for (let i = 0; i < dummyUids.length; i++) {
      const dUid = dummyUids[i];
      // Generate unique 8-char code with valid characters
      const c1 = validChars[i % validChars.length];
      const c2 = validChars[Math.floor(i / validChars.length) % validChars.length];
      const code = `DM2222${c2}${c1}`;
      await query(`
        INSERT INTO manabu.profiles (uid, display_name, friend_code, week_id)
        VALUES ($1, 'Dummy', $2, '2026-W40')
        ON CONFLICT DO NOTHING;
      `, [dUid, code]);

      await query(`
        INSERT INTO manabu.friendships (user_a, user_b)
        VALUES (LEAST($1, $2), GREATEST($1, $2))
        ON CONFLICT DO NOTHING;
      `, [userA, dUid]);
    }

    // Verify User A has 49 friends
    const countBefore = await query(
      `SELECT count(*) as count FROM manabu.friendships WHERE user_a = $1 OR user_b = $1;`,
      [userA]
    );
    expect(Number(countBefore.rows[0].count)).toBe(49);

    // Create 2 pending requests to User A from User B and User C
    const reqB = await query(`
      INSERT INTO manabu.friend_requests (from_uid, to_uid, status)
      VALUES ($1, $2, 'pending')
      RETURNING id;
    `, [userB, userA]);

    const reqC = await query(`
      INSERT INTO manabu.friend_requests (from_uid, to_uid, status)
      VALUES ($1, $2, 'pending')
      RETURNING id;
    `, [userC, userA]);

    // Function simulating accept logic with profile locks
    const respondRequest = async (requestId: number) => {
      return withTransaction(async (client) => {
        const reqRes = await client.query('SELECT * FROM manabu.friend_requests WHERE id = $1 FOR UPDATE;', [requestId]);
        const r = reqRes.rows[0];

        const uids = [r.from_uid, r.to_uid].sort();
        await client.query('SELECT uid FROM manabu.profiles WHERE uid IN ($1, $2) ORDER BY uid FOR UPDATE;', [uids[0], uids[1]]);

        const myCountRes = await client.query('SELECT count(*) as count FROM manabu.friendships WHERE user_a = $1 OR user_b = $1;', [userA]);
        if (Number(myCountRes.rows[0]?.count || 0) >= 50) {
          return { error: 'friend_limit', status: 409 };
        }

        await client.query(`
          INSERT INTO manabu.friendships (user_a, user_b)
          VALUES (LEAST($1, $2), GREATEST($1, $2))
          ON CONFLICT DO NOTHING;
        `, [r.from_uid, r.to_uid]);

        await client.query(`UPDATE manabu.friend_requests SET status = 'accepted' WHERE id = $1;`, [requestId]);
        return { status: 'accepted', httpStatus: 200 };
      });
    };

    // Accept both simultaneously
    const [resB, resC] = await Promise.all([
      respondRequest(Number(reqB.rows[0].id)),
      respondRequest(Number(reqC.rows[0].id)),
    ]);

    const results = [resB, resC];
    const acceptedCount = results.filter((r) => r.status === 'accepted').length;
    const limitedCount = results.filter((r) => r.error === 'friend_limit').length;

    expect(acceptedCount).toBe(1);
    expect(limitedCount).toBe(1);

    // Verify User A has EXACTLY 50 friends and NOT 51
    const countAfter = await query(
      `SELECT count(*) as count FROM manabu.friendships WHERE user_a = $1 OR user_b = $1;`,
      [userA]
    );
    expect(Number(countAfter.rows[0].count)).toBe(50);

    // Cleanup dummy data
    await query(`DELETE FROM manabu.profiles WHERE uid LIKE 'e2e_dummy_friend_%'`);
  });
});
