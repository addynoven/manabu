import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import path from 'path';
import fs from 'fs';

// Pre-load web/.env.local environment variables for tests
try {
  if (typeof process !== 'undefined' && typeof __dirname !== 'undefined') {
    const envPath = path.resolve(__dirname, '../../../.env.local');
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

import { SrsRepository } from '../repositories/srsRepository';
import { query } from '../../../core/db/postgres';

describe('FSRS-6 End-to-End Core Backend Integration Test', () => {
  const testUid = 'e2e_learner_test_uid';
  const testCardId = 'kanji_木';

  beforeAll(async () => {
    // 1. Ensure test student profile exists in PostgreSQL
    await query(`
      INSERT INTO manabu.profiles (uid, display_name, email, avatar_emoji, belt_rank, level, total_xp, weekly_xp, week_id, current_streak, friend_code, desired_retention)
      VALUES ($1, 'E2E Test Student', 'e2e@manabu.app', '🥋', 'white', 1, 0, 0, '2026-W40', 1, 'E2E99988', 0.90)
      ON CONFLICT (uid) DO NOTHING;
    `, [testUid]);

    // 2. Clean previous test card states and review logs
    await query(`DELETE FROM manabu.card_states WHERE uid = $1`, [testUid]);
  });

  afterAll(async () => {
    // Cleanup test user and associated records
    await query(`DELETE FROM manabu.profiles WHERE uid = $1`, [testUid]);
  });

  it('Step 1: New card defaults to due_at NOW() and appears in the review queue', async () => {
    // Create new card state
    await query(`
      INSERT INTO manabu.card_states (uid, card_id, card_type, state, stability, difficulty, due_at)
      VALUES ($1, $2, 'kanji', 'new', 0.0, 5.0, NOW() - INTERVAL '1 minute');
    `, [testUid, testCardId]);

    const queue = await SrsRepository.getDueReviewQueue(testUid, 10);
    expect(queue.length).toBeGreaterThan(0);
    expect(queue.some(c => c.cardId === testCardId)).toBe(true);
  });

  it('Step 2: Executes FSRS-6 review transaction, commits to DB, and pushes due_at into the future', async () => {
    const reviewNow = new Date();

    // Submit "Good (3)" rating for "kanji_木"
    const result = await SrsRepository.executeReviewTransaction(
      testUid,
      testCardId,
      'kanji',
      3,
      reviewNow
    );

    expect(result.nextInterval).toBeGreaterThanOrEqual(1);
    expect(result.xpEarned).toBe(15);
    expect(result.cardState.state).toBe('review');
    expect(result.cardState.reps).toBe(1);
    expect(result.cardState.stability).toBeGreaterThan(0);

    // Verify card_states table in database
    const dbCard = await SrsRepository.getCardState(testUid, testCardId);
    expect(dbCard).not.toBeNull();
    expect(dbCard!.state).toBe('review');
    expect(dbCard!.reps).toBe(1);
    expect(dbCard!.dueAt.getTime()).toBeGreaterThan(reviewNow.getTime());

    // Verify review_logs table in database
    const logsRes = await query(
      `SELECT * FROM manabu.review_logs WHERE uid = $1 AND card_id = $2`,
      [testUid, testCardId]
    );
    expect(logsRes.rows.length).toBe(1);
    expect(logsRes.rows[0].rating).toBe(3);
  });

  it('Step 3: Verified card is no longer due immediately in active review queue', async () => {
    const queue = await SrsRepository.getDueReviewQueue(testUid, 10);
    expect(queue.some(c => c.cardId === testCardId)).toBe(false);
  });
});
