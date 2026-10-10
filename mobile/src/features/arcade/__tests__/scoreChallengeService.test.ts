import { describe, it, expect, vi, beforeEach } from 'vitest';
import { scoreChallengeService } from '../services/scoreChallenge.service';
import { apiClient } from '../../../core/api/httpClient';
import { ok, err } from '../../../core/errors/result';
import { AppError } from '../../../core/errors/error-handler';

vi.mock('../../../core/api/httpClient', () => ({
  apiClient: {
    get: vi.fn(),
    post: vi.fn(),
  },
}));

describe('V3.6 Score Challenge Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockChallenge = {
    id: 'ch-123',
    game: 'rain',
    mode: 'default',
    creator: {
      uid: 'user-a',
      displayName: 'Kenji',
      avatarEmoji: '🥷',
      score: 450,
    },
    target: {
      uid: 'user-b',
      displayName: 'Sakura',
      avatarEmoji: '🌸',
      score: null,
    },
    status: 'pending',
    winner: null,
    isIncoming: true,
    createdAt: '2026-10-02T10:00:00Z',
    expiresAt: '2026-10-04T10:00:00Z',
  };

  it('getChallenges fetches and validates challenge items', async () => {
    vi.mocked(apiClient.get).mockResolvedValueOnce(ok({ challenges: [mockChallenge] }));

    const res = await scoreChallengeService.getChallenges();
    expect(apiClient.get).toHaveBeenCalledWith('/api/v1/challenges');
    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.data).toHaveLength(1);
      expect(res.data[0].id).toBe('ch-123');
      expect(res.data[0].game).toBe('rain');
      expect(res.data[0].creator.score).toBe(450);
    }
  });

  it('createChallenge sends targetUid, game, score, and mode', async () => {
    vi.mocked(apiClient.post).mockResolvedValueOnce(
      ok({
        challenge: {
          id: 'ch-456',
          expiresAt: '2026-10-04T12:00:00Z',
        },
      })
    );

    const res = await scoreChallengeService.createChallenge('friend-99', 'snake', 320, 'fast');
    expect(apiClient.post).toHaveBeenCalledWith('/api/v1/challenges', {
      targetUid: 'friend-99',
      game: 'snake',
      creatorScore: 320,
      mode: 'fast',
    });
    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.data.id).toBe('ch-456');
    }
  });

  it('respondToChallenge posts score and receives head-to-head outcome', async () => {
    vi.mocked(apiClient.post).mockResolvedValueOnce(
      ok({
        status: 'completed',
        winner: 'target',
        creatorScore: 450,
        targetScore: 500,
      })
    );

    const res = await scoreChallengeService.respondToChallenge('ch-123', 500);
    expect(apiClient.post).toHaveBeenCalledWith('/api/v1/challenges/ch-123/respond', {
      score: 500,
    });
    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.data.winner).toBe('target');
      expect(res.data.targetScore).toBe(500);
    }
  });

  it('handles API errors gracefully', async () => {
    vi.mocked(apiClient.get).mockResolvedValueOnce(
      err(new AppError('Server error', 'NETWORK'))
    );

    const res = await scoreChallengeService.getChallenges();
    expect(res.ok).toBe(false);
  });
});
