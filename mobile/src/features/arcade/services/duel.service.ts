import { apiClient } from '../../../core/api/httpClient';
import { ok, err, type Result } from '../../../core/errors/result';
import { AppError } from '../../../core/errors/error-handler';
import {
  type DuelGameType,
  type DuelInvite,
  type DuelState,
  DuelInviteSchema,
  DuelStateSchema,
} from '../models/duel.model';
import type { KanjiDuelQuestion } from '../lib/kanjiDuelEngine';

export class DuelService {
  /**
   * Challenges a clan friend to a duel with a generated question deck.
   */
  async createDuel(
    toUid: string,
    game: DuelGameType = 'kanjiDuel',
    deck: unknown
  ): Promise<Result<{ id: string }, AppError>> {
    const res = await apiClient.post<{ id: string }>('/api/v1/duels', {
      toUid,
      game,
      deck,
    });
    return res;
  }

  /**
   * Enters matchmaking queue to find an online player or immediately pairs with a waiting opponent.
   */
  async quickMatch(
    game: DuelGameType = 'kanjiDuel',
    deck?: unknown
  ): Promise<Result<{ id: string; matched: boolean }, AppError>> {
    const res = await apiClient.post<{ id: string; matched: boolean }>('/api/v1/duels/matchmaking', {
      game,
      deck,
    });
    return res;
  }

  /**
   * Cancels matchmaking queue.
   */
  async cancelQuickMatch(game: DuelGameType = 'kanjiDuel'): Promise<Result<{ ok: boolean }, AppError>> {
    const res = await apiClient.delete<{ ok: boolean }>(`/api/v1/duels/matchmaking?game=${game}`);
    return res;
  }


  /**
   * Retrieves active incoming duel challenges.
   */
  async getInbox(): Promise<Result<DuelInvite[], AppError>> {
    const res = await apiClient.get<{ inbox: DuelInvite[] }>('/api/v1/duels');
    if (!res.ok) return res;

    const items: DuelInvite[] = [];
    for (const raw of res.data.inbox || []) {
      const parsed = DuelInviteSchema.safeParse(raw);
      if (parsed.success) {
        items.push(parsed.data);
      }
    }
    return ok(items);
  }

  /**
   * Retrieves current lockstep match state.
   */
  async getDuelState(
    id: string,
    includeDeck = false
  ): Promise<Result<DuelState, AppError>> {
    const query = includeDeck ? '?deck=1' : '';
    const res = await apiClient.get<{ state: DuelState }>(`/api/v1/duels/${id}${query}`);
    if (!res.ok) return res;

    const parsed = DuelStateSchema.safeParse(res.data.state);
    if (!parsed.success) {
      return err(new AppError('Invalid duel state payload from server', 'VALIDATION'));
    }
    return ok(parsed.data as DuelState);
  }

  /**
   * Accepts a pending duel invitation and transitions to live game.
   */
  async acceptDuel(id: string): Promise<Result<DuelState, AppError>> {
    const res = await apiClient.post<{ state: DuelState }>(`/api/v1/duels/${id}/accept`);
    if (!res.ok) return res;

    const parsed = DuelStateSchema.safeParse(res.data.state);
    if (!parsed.success) {
      return err(new AppError('Invalid duel state payload on accept', 'VALIDATION'));
    }
    return ok(parsed.data as DuelState);
  }

  /**
   * Declines a pending duel invitation.
   */
  async declineDuel(id: string): Promise<Result<{ ok: boolean }, AppError>> {
    return await apiClient.post<{ ok: boolean }>(`/api/v1/duels/${id}/decline`);
  }

  /**
   * Submits an answer for the current lockstep round.
   */
  async submitAnswer(
    id: string,
    round: number,
    correct: boolean,
    reactionMs: number | null
  ): Promise<Result<DuelState, AppError>> {
    const res = await apiClient.post<{ state: DuelState }>(`/api/v1/duels/${id}/answer`, {
      round,
      correct,
      reactionMs,
    });
    if (!res.ok) return res;

    const parsed = DuelStateSchema.safeParse(res.data.state);
    if (!parsed.success) {
      return err(new AppError('Invalid duel state on answer', 'VALIDATION'));
    }
    return ok(parsed.data as DuelState);
  }

  /**
   * Plays a word in a live Shiritori duel.
   */
  async submitMove(id: string, word: string): Promise<Result<DuelState, AppError>> {
    const res = await apiClient.post<{ state: DuelState }>(`/api/v1/duels/${id}/move`, {
      word,
    });
    if (!res.ok) return res;

    const parsed = DuelStateSchema.safeParse(res.data.state);
    if (!parsed.success) {
      return err(new AppError('Invalid duel state on move', 'VALIDATION'));
    }
    return ok(parsed.data as DuelState);
  }

  /**
   * Forfeits the duel.
   */
  async forfeitDuel(id: string): Promise<Result<DuelState, AppError>> {
    const res = await apiClient.post<{ state: DuelState }>(`/api/v1/duels/${id}/forfeit`);
    if (!res.ok) return res;

    const parsed = DuelStateSchema.safeParse(res.data.state);
    if (!parsed.success) {
      return err(new AppError('Invalid duel state on forfeit', 'VALIDATION'));
    }
    return ok(parsed.data as DuelState);
  }

  /**
   * Active polling utility for live match synchronization.
   * Polls every 700ms while match is live or waiting.
   * Returns a cleanup function to stop polling.
   */
  pollDuel(
    matchId: string,
    onUpdate: (state: DuelState) => void,
    onError?: (err: AppError) => void,
    intervalMs = 700
  ): () => void {
    let cancelled = false;
    let timer: NodeJS.Timeout | null = null;

    const poll = async () => {
      if (cancelled) return;
      const res = await this.getDuelState(matchId);
      if (cancelled) return;

      if (res.ok) {
        onUpdate(res.data);
        if (res.data.status === 'finished' || res.data.status === 'forfeit') {
          return; // Stop polling on termination
        }
      } else if (onError) {
        onError(res.error);
      }

      if (!cancelled) {
        timer = setTimeout(poll, intervalMs);
      }
    };

    poll();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }
}

export const duelService = new DuelService();
