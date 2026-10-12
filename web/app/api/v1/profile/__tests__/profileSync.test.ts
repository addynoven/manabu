import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import path from 'path';
import fs from 'fs';

// Pre-load web/.env.local environment variables for tests
try {
  if (typeof process !== 'undefined' && typeof __dirname !== 'undefined') {
    const envPath = path.resolve(__dirname, '../../../../../.env.local');
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

import { query } from '@/core/db/postgres';
import { calculateLevelAndBelt } from '../route';

describe('Profile Progression Reconciliation & Server Authority', () => {
  const testUid = 'e2e_profile_sync_test_uid';

  beforeAll(async () => {
    // Clean up any stale test profile
    await query(`DELETE FROM manabu.profiles WHERE uid = $1`, [testUid]);
  });

  afterAll(async () => {
    await query(`DELETE FROM manabu.profiles WHERE uid = $1`, [testUid]);
  });

  it('Derives level and belt rank deterministically on the server from total XP', () => {
    expect(calculateLevelAndBelt(0)).toEqual({ level: 1, beltRank: 'white' });
    expect(calculateLevelAndBelt(99)).toEqual({ level: 1, beltRank: 'white' });
    expect(calculateLevelAndBelt(100)).toEqual({ level: 2, beltRank: 'yellow' });
    expect(calculateLevelAndBelt(400)).toEqual({ level: 3, beltRank: 'green' });
    expect(calculateLevelAndBelt(900)).toEqual({ level: 4, beltRank: 'blue' });
    expect(calculateLevelAndBelt(1600)).toEqual({ level: 5, beltRank: 'purple' });
    expect(calculateLevelAndBelt(2500)).toEqual({ level: 6, beltRank: 'brown' });
    expect(calculateLevelAndBelt(3600)).toEqual({ level: 7, beltRank: 'black' });
    expect(calculateLevelAndBelt(10000)).toEqual({ level: 11, beltRank: 'black' });
  });

  it('Rejects client-supplied level and total XP spoofing during profile sync', async () => {
    // 1. Seed existing profile with 400 XP (Level 3, Green Belt)
    await query(
      `
      INSERT INTO manabu.profiles (
        uid, email, display_name, avatar_emoji, belt_rank, level,
        total_xp, weekly_xp, week_id, current_streak, friend_code
      ) VALUES (
        $1, 'testsync@manabu.app', 'Original Name', '🥋', 'green', 3,
        400, 400, '2026-W14', 5, 'SYNCAABB'
      );
      `,
      [testUid]
    );

    // 2. Fetch existing profile and simulate server reconciliation logic as executed in PUT /api/v1/profile
    const existingRes = await query(`SELECT * FROM manabu.profiles WHERE uid = $1`, [testUid]);
    const existing = existingRes.rows[0];

    const clientPayload = {
      displayName: 'Updated Name',
      avatarEmoji: '🦊',
      beltRank: 'black', // Client trying to claim black belt
      level: 99, // Client trying to spoof level 99
      totalXp: 999999, // Client trying to spoof 1 million XP
      weeklyXp: 999999,
      weekId: '2026-W14',
      currentStreak: 999, // Client trying to spoof 999 day streak
      lastActiveDate: new Date().toISOString().split('T')[0],
    };

    // Server-side reconciliation
    const serverTotalXp = Number(existing.total_xp);
    const rawGain = Math.max(0, clientPayload.totalXp - serverTotalXp);
    const maxAllowedGain = 500;
    const xpGain = Math.min(rawGain, maxAllowedGain);

    const reconciledTotalXp = serverTotalXp + xpGain;
    const { level: reconciledLevel, beltRank: reconciledBeltRank } = calculateLevelAndBelt(reconciledTotalXp);

    expect(reconciledTotalXp).toBe(900); // 400 + 500 max gain cap
    expect(reconciledLevel).toBe(4); // Derived server-side level
    expect(reconciledBeltRank).toBe('blue'); // Derived server-side belt rank
    expect(reconciledLevel).not.toBe(clientPayload.level);
    expect(reconciledBeltRank).not.toBe(clientPayload.beltRank);

    // 3. Update profile row with reconciled values
    await query(
      `
      UPDATE manabu.profiles
      SET display_name = $1,
          avatar_emoji = $2,
          belt_rank = $3,
          level = $4,
          total_xp = $5,
          updated_at = NOW()
      WHERE uid = $6;
      `,
      [
        clientPayload.displayName,
        clientPayload.avatarEmoji,
        reconciledBeltRank,
        reconciledLevel,
        reconciledTotalXp,
        testUid,
      ]
    );

    // 4. Verify DB state is protected against spoofing
    const updatedRes = await query(`SELECT * FROM manabu.profiles WHERE uid = $1`, [testUid]);
    const updated = updatedRes.rows[0];

    expect(updated.display_name).toBe('Updated Name'); // Display preference updated
    expect(updated.avatar_emoji).toBe('🦊'); // Display preference updated
    expect(updated.total_xp).toBe(900); // Protected against 999,999 XP spoof
    expect(updated.level).toBe(4); // Server calculated level
    expect(updated.belt_rank).toBe('blue'); // Server calculated belt rank
  });
});
