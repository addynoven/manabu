import { apiClient } from '../../../core/api/httpClient';
import { ok, err, Result } from '../../../core/errors/result';
import { AppError } from '../../../core/errors/error-handler';
import {
  ScoreChallengeGame,
  ScoreChallengeItem,
  ScoreChallengeItemSchema,
  ScoreChallengeResponseResult,
} from '../models/scoreChallenge.model';

export class ScoreChallengeService {
  /**
   * Retrieves list of active and recent challenges involving the current user.
   */
  async getChallenges(): Promise<Result<ScoreChallengeItem[], AppError>> {
    const res = await apiClient.get<{ challenges: unknown[] }>('/api/v1/challenges');
    if (!res.ok) return res;

    const validated: ScoreChallengeItem[] = [];
    for (const item of res.data.challenges || []) {
      const parsed = ScoreChallengeItemSchema.safeParse(item);
      if (parsed.success) {
        validated.push(parsed.data as ScoreChallengeItem);
      }
    }

    return ok(validated);
  }

  /**
   * Challenges a confirmed friend to beat a recorded arcade score.
   */
  async createChallenge(
    targetUid: string,
    game: ScoreChallengeGame,
    creatorScore: number,
    mode = 'default'
  ): Promise<Result<{ id: string; expiresAt: string }, AppError>> {
    const res = await apiClient.post<{
      challenge: { id: string; expiresAt: string };
    }>('/api/v1/challenges', {
      targetUid,
      game,
      creatorScore,
      mode,
    });

    if (!res.ok) return res;
    return ok(res.data.challenge);
  }

  /**
   * Responds to an incoming challenge with the player's final score.
   */
  async respondToChallenge(
    challengeId: string,
    score: number
  ): Promise<Result<ScoreChallengeResponseResult, AppError>> {
    const res = await apiClient.post<ScoreChallengeResponseResult>(
      `/api/v1/challenges/${challengeId}/respond`,
      { score }
    );

    if (!res.ok) return res;
    return ok(res.data);
  }
}

export const scoreChallengeService = new ScoreChallengeService();
