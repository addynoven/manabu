import { query, getDbPool } from '@/core/db/postgres';
import { transitionFsrs6, CardState, FsrsRating, DEFAULT_FSRS6_WEIGHTS } from '../engine/fsrs6Engine';
import { CardType, CardLifecycleState } from '../models/srs.types';

export interface DbCardState {
  uid: string;
  cardId: string;
  cardType: CardType;
  state: CardLifecycleState;
  stability: number;
  difficulty: number;
  reps: number;
  lapses: number;
  lastReview: Date | null;
  dueAt: Date;
}

interface RawCardStateRow {
  uid: string;
  card_id: string;
  card_type: CardType;
  state: CardLifecycleState;
  stability: number | string;
  difficulty: number | string;
  reps: number | string;
  lapses: number | string;
  last_review: Date | string | null;
  due_at: Date | string;
}

export interface ReviewExecutionOutput {
  cardState: DbCardState;
  nextInterval: number;
  logId: string;
  xpEarned: number;
}

/**
 * Server-Side Data Access Layer (Repository) for FSRS-6 Learning Engine
 */
export class SrsRepository {
  /**
   * Fetches active due review queue for a student (WHERE due_at <= NOW())
   */
  static async getDueReviewQueue(uid: string, limit = 20): Promise<DbCardState[]> {
    const res = await query<RawCardStateRow>(
      `SELECT uid, card_id, card_type, state, stability, difficulty, reps, lapses, last_review, due_at
       FROM manabu.card_states
       WHERE uid = $1 AND due_at <= NOW()
       ORDER BY due_at ASC
       LIMIT $2`,
      [uid, limit]
    );

    return res.rows.map(row => ({
      uid: row.uid,
      cardId: row.card_id,
      cardType: row.card_type,
      state: row.state,
      stability: Number(row.stability),
      difficulty: Number(row.difficulty),
      reps: Number(row.reps),
      lapses: Number(row.lapses),
      lastReview: row.last_review ? new Date(row.last_review) : null,
      dueAt: new Date(row.due_at),
    }));
  }

  /**
   * Fetches single card state for (uid, card_id)
   */
  static async getCardState(uid: string, cardId: string): Promise<DbCardState | null> {
    const res = await query<RawCardStateRow>(
      `SELECT uid, card_id, card_type, state, stability, difficulty, reps, lapses, last_review, due_at
       FROM manabu.card_states
       WHERE uid = $1 AND card_id = $2`,
      [uid, cardId]
    );

    if (res.rows.length === 0) return null;
    const row = res.rows[0];

    return {
      uid: row.uid,
      cardId: row.card_id,
      cardType: row.card_type,
      state: row.state,
      stability: Number(row.stability),
      difficulty: Number(row.difficulty),
      reps: Number(row.reps),
      lapses: Number(row.lapses),
      lastReview: row.last_review ? new Date(row.last_review) : null,
      dueAt: new Date(row.due_at),
    };
  }

  /**
   * Executes an Atomic Review Transaction (BEGIN ... COMMIT)
   * 1. Fetches current card_state & profile desired_retention
   * 2. Calculates FSRS-6 state transition
   * 3. Upserts manabu.card_states
   * 4. Appends to manabu.review_logs
   * 5. Updates manabu.profiles (XP + Streak)
   */
  static async executeReviewTransaction(
    uid: string,
    cardId: string,
    cardType: CardType,
    rating: FsrsRating,
    now: Date = new Date()
  ): Promise<ReviewExecutionOutput> {
    const pool = getDbPool();
    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      // 1. Fetch user's desired_retention from profile
      const profileRes = await client.query(
        `SELECT desired_retention FROM manabu.profiles WHERE uid = $1`,
        [uid]
      );
      const desiredRetention = profileRes.rows[0]?.desired_retention ?? 0.90;

      // 2. Fetch global FSRS-6 weights from app_config
      const configRes = await client.query(
        `SELECT value FROM manabu.app_config WHERE key = 'fsrs6_weights'`
      );
      const weights = configRes.rows[0]?.value ?? DEFAULT_FSRS6_WEIGHTS;

      // 3. Fetch existing card_state or create initial default
      const cardRes = await client.query(
        `SELECT state, stability, difficulty, reps, lapses, last_review, due_at
         FROM manabu.card_states
         WHERE uid = $1 AND card_id = $2
         FOR UPDATE`,
        [uid, cardId]
      );

      const existing = cardRes.rows[0];
      const currentCardState: CardState = existing
        ? {
            stability: Number(existing.stability),
            difficulty: Number(existing.difficulty),
            state: existing.state,
            reps: Number(existing.reps),
            lapses: Number(existing.lapses),
            lastReview: existing.last_review ? new Date(existing.last_review) : null,
            dueAt: new Date(existing.due_at),
          }
        : {
            stability: 0,
            difficulty: 5.0,
            state: 'new',
            reps: 0,
            lapses: 0,
            lastReview: null,
            dueAt: now,
          };

      // 4. Calculate FSRS-6 State Transition
      const transition = transitionFsrs6(currentCardState, rating, now, desiredRetention, weights);
      const { nextState, nextInterval, log } = transition;

      // 5. Upsert into manabu.card_states
      await client.query(
        `INSERT INTO manabu.card_states
           (uid, card_id, card_type, state, stability, difficulty, reps, lapses, last_review, due_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
         ON CONFLICT (uid, card_id) DO UPDATE SET
           card_type = EXCLUDED.card_type,
           state = EXCLUDED.state,
           stability = EXCLUDED.stability,
           difficulty = EXCLUDED.difficulty,
           reps = EXCLUDED.reps,
           lapses = EXCLUDED.lapses,
           last_review = EXCLUDED.last_review,
           due_at = EXCLUDED.due_at`,
        [
          uid,
          cardId,
          cardType,
          nextState.state,
          nextState.stability,
          nextState.difficulty,
          nextState.reps,
          nextState.lapses,
          nextState.lastReview,
          nextState.dueAt,
        ]
      );

      // 6. Append into manabu.review_logs
      const logRes = await client.query(
        `INSERT INTO manabu.review_logs (uid, card_id, rating, state, elapsed_days, scheduled_days, reviewed_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING id`,
        [uid, cardId, log.rating, log.state, log.elapsedDays, log.scheduledDays, log.reviewedAt]
      );
      const logId = String(logRes.rows[0].id);

      // 7. Calculate XP and update manabu.profiles
      const xpEarned = rating === 1 ? 5 : rating === 2 ? 10 : rating === 3 ? 15 : 20;
      await client.query(
        `UPDATE manabu.profiles
         SET total_xp = total_xp + $1,
             weekly_xp = weekly_xp + $1,
             updated_at = NOW()
         WHERE uid = $2`,
        [xpEarned, uid]
      );

      await client.query('COMMIT');

      const updatedDbCardState: DbCardState = {
        uid,
        cardId,
        cardType,
        state: nextState.state,
        stability: nextState.stability,
        difficulty: nextState.difficulty,
        reps: nextState.reps,
        lapses: nextState.lapses,
        lastReview: nextState.lastReview,
        dueAt: nextState.dueAt,
      };

      return {
        cardState: updatedDbCardState,
        nextInterval,
        logId,
        xpEarned,
      };
    } catch (err: unknown) {
      await client.query('ROLLBACK');
      console.error('[SrsRepository] Review transaction rolled back:', err);
      throw err;
    } finally {
      client.release();
    }
  }
}
