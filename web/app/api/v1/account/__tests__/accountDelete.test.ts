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

describe('Atomic Account Deletion Integration Test', () => {
  const testUid = 'e2e_account_delete_test_uid';
  const partnerUid = 'e2e_account_delete_partner_uid';

  beforeAll(async () => {
    // 1. Seed test profiles
    await query(`
      INSERT INTO manabu.profiles (uid, display_name, email, avatar_emoji, belt_rank, level, total_xp, weekly_xp, week_id, current_streak, friend_code)
      VALUES ($1, 'Account Delete Test', 'del@manabu.app', '🥋', 'white', 1, 0, 0, '2026-W40', 1, 'DELAABBC')
      ON CONFLICT (uid) DO NOTHING;
    `, [testUid]);

    await query(`
      INSERT INTO manabu.profiles (uid, display_name, email, avatar_emoji, belt_rank, level, total_xp, weekly_xp, week_id, current_streak, friend_code)
      VALUES ($1, 'Partner Test', 'partner@manabu.app', '🥋', 'white', 1, 0, 0, '2026-W40', 1, 'DELCCDDE')
      ON CONFLICT (uid) DO NOTHING;
    `, [partnerUid]);

    // 2. Seed SRS card states and review logs
    await query(`
      INSERT INTO manabu.card_states (uid, card_id, card_type, state, stability, difficulty, due_at)
      VALUES ($1, 'kanji_木', 'kanji', 'new', 1.0, 5.0, NOW());
    `, [testUid]);

    await query(`
      INSERT INTO manabu.review_logs (uid, card_id, rating, state, elapsed_days, scheduled_days, reviewed_at)
      VALUES ($1, 'kanji_木', 3, 'new', 0, 1, NOW());
    `, [testUid]);

    // 3. Seed match result
    await query(`
      INSERT INTO manabu.match_results (id, game, player_a, player_b, wins_a, wins_b, winner, reason, rounds, started_at, ended_at)
      VALUES (gen_random_uuid(), 'kanjiDuel', $1, $2, 2, 1, $1, 'normal', 3, NOW(), NOW());
    `, [testUid, partnerUid]);
  });

  afterAll(async () => {
    // Cleanup remaining test partner
    await query(`DELETE FROM manabu.profiles WHERE uid = $1`, [partnerUid]);
  });

  it('Executes atomic account deletion and verifies rollback on transaction failure', async () => {
    // Simulate transaction failure inside callback to verify rollback
    try {
      await withTransaction(async (client) => {
        await client.query('DELETE FROM manabu.card_states WHERE uid = $1', [testUid]);
        await client.query('DELETE FROM manabu.profiles WHERE uid = $1', [testUid]);
        throw new Error('Simulated atomic failure');
      });
    } catch (err: any) {
      expect(err.message).toBe('Simulated atomic failure');
    }

    // Verify profile and card states still exist after rollback
    const profileRes = await query(`SELECT * FROM manabu.profiles WHERE uid = $1`, [testUid]);
    expect(profileRes.rows.length).toBe(1);

    const cardRes = await query(`SELECT * FROM manabu.card_states WHERE uid = $1`, [testUid]);
    expect(cardRes.rows.length).toBe(1);
  });

  it('Executes full atomic account deletion successfully and verifies complete cleanup', async () => {
    await withTransaction(async (client) => {
      await client.query('DELETE FROM manabu.card_states WHERE uid = $1', [testUid]);
      await client.query('DELETE FROM manabu.review_logs WHERE uid = $1', [testUid]);
      await client.query(
        `
        UPDATE manabu.match_results
        SET player_a = CASE WHEN player_a = $1 THEN 'deleted' ELSE player_a END,
            player_b = CASE WHEN player_b = $1 THEN 'deleted' ELSE player_b END,
            winner   = CASE WHEN winner = $1 THEN 'deleted' ELSE winner END
        WHERE player_a = $1 OR player_b = $1;
      `,
        [testUid]
      );
      await client.query('DELETE FROM manabu.profiles WHERE uid = $1', [testUid]);
    });

    // 1. Verify profile deleted
    const profileRes = await query(`SELECT * FROM manabu.profiles WHERE uid = $1`, [testUid]);
    expect(profileRes.rows.length).toBe(0);

    // 2. Verify card_states and review_logs deleted
    const cardRes = await query(`SELECT * FROM manabu.card_states WHERE uid = $1`, [testUid]);
    expect(cardRes.rows.length).toBe(0);

    const logRes = await query(`SELECT * FROM manabu.review_logs WHERE uid = $1`, [testUid]);
    expect(logRes.rows.length).toBe(0);

    // 3. Verify match_results anonymized
    const matchRes = await query(
      `SELECT * FROM manabu.match_results WHERE player_a = 'deleted' AND player_b = $1`,
      [partnerUid]
    );
    expect(matchRes.rows.length).toBeGreaterThan(0);
  });
});
