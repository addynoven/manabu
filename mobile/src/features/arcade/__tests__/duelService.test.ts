import { describe, it, expect, vi, beforeEach } from 'vitest';
import { duelService } from '../services/duel.service';
import { apiClient } from '../../../core/api/httpClient';
import { ok, err } from '../../../core/errors/result';
import { AppError } from '../../../core/errors/error-handler';
import type { DuelState, DuelInvite } from '../models/duel.model';
import type { KanjiDuelQuestion } from '../lib/kanjiDuelEngine';

vi.mock('../../../core/api/httpClient', () => ({
  apiClient: {
    get: vi.fn(),
    post: vi.fn(),
    delete: vi.fn(),
  },
}));

describe('V3.3 Live Kanji Duel Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  const mockState: DuelState = {
    id: 'match-123',
    game: 'kanjiDuel',
    status: 'live',
    opponent: {
      uid: 'user-b',
      displayName: 'Kenji',
      avatarEmoji: '🥷',
      beltRank: 'green',
      level: 12,
    },
    round: 0,
    totalRounds: 10,
    roundDeadlineMs: Date.now() + 10000,
    mySubmitted: false,
    opponentSubmitted: false,
    history: [],
    winsMe: 0,
    winsThem: 0,
    opponentGone: false,
    serverTime: Date.now(),
  };

  it('createDuel sends correct endpoint and payload', async () => {
    vi.mocked(apiClient.post).mockResolvedValueOnce(ok({ id: 'match-123' }));

    const dummyDeck: KanjiDuelQuestion[] = [
      {
        id: 'q1',
        type: 'meaning',
        kanjiChar: '水',
        questionTitle: 'Meaning of 水?',
        questionSubtitle: 'Water',
        ttsAudio: 'みず',
        options: ['Water', 'Fire', 'Tree', 'Gold'],
        correctIndex: 0,
        explanation: 'Water',
      },
    ];

    const res = await duelService.createDuel('friend-uid-99', 'kanjiDuel', dummyDeck);

    expect(apiClient.post).toHaveBeenCalledWith('/api/v1/duels', {
      toUid: 'friend-uid-99',
      game: 'kanjiDuel',
      deck: dummyDeck,
    });
    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.data.id).toBe('match-123');
    }
  });

  it('getInbox filters and parses valid duel invites', async () => {
    const rawInvites: DuelInvite[] = [
      {
        id: 'inv-1',
        game: 'kanjiDuel',
        status: 'waiting',
        createdAt: 1727800000,
        sender: {
          uid: 'uid-sender',
          displayName: 'Sakura',
          avatarEmoji: '🌸',
          beltRank: 'brown',
          level: 25,
        },
      },
    ];

    vi.mocked(apiClient.get).mockResolvedValueOnce(ok({ inbox: rawInvites }));

    const res = await duelService.getInbox();
    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.data).toHaveLength(1);
      expect(res.data[0].id).toBe('inv-1');
      expect(res.data[0].sender.displayName).toBe('Sakura');
    }
  });

  it('getDuelState requests match with optional deck query parameter', async () => {
    vi.mocked(apiClient.get).mockResolvedValueOnce(ok({ state: mockState }));

    const resWithDeck = await duelService.getDuelState('match-123', true);
    expect(apiClient.get).toHaveBeenCalledWith('/api/v1/duels/match-123?deck=1');
    expect(resWithDeck.ok).toBe(true);

    vi.mocked(apiClient.get).mockResolvedValueOnce(ok({ state: mockState }));
    const resWithoutDeck = await duelService.getDuelState('match-123', false);
    expect(apiClient.get).toHaveBeenCalledWith('/api/v1/duels/match-123');
    expect(resWithoutDeck.ok).toBe(true);
  });

  it('acceptDuel calls accept endpoint and parses state', async () => {
    vi.mocked(apiClient.post).mockResolvedValueOnce(ok({ state: { ...mockState, status: 'live' } }));

    const res = await duelService.acceptDuel('match-123');
    expect(apiClient.post).toHaveBeenCalledWith('/api/v1/duels/match-123/accept');
    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.data.status).toBe('live');
    }
  });

  it('submitAnswer posts round answer and reaction time', async () => {
    const updatedState = {
      ...mockState,
      mySubmitted: true,
    };
    vi.mocked(apiClient.post).mockResolvedValueOnce(ok({ state: updatedState }));

    const res = await duelService.submitAnswer('match-123', 0, true, 850);
    expect(apiClient.post).toHaveBeenCalledWith('/api/v1/duels/match-123/answer', {
      round: 0,
      correct: true,
      reactionMs: 850,
    });
    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.data.mySubmitted).toBe(true);
    }
  });

  it('pollDuel invokes update callback and stops on match finished', async () => {
    const liveState: DuelState = { ...mockState, status: 'live' };
    const finishedState: DuelState = {
      ...mockState,
      status: 'finished',
      result: { winner: 'me', reason: 'rounds' },
    };

    vi.mocked(apiClient.get)
      .mockResolvedValueOnce(ok({ state: liveState }))
      .mockResolvedValueOnce(ok({ state: finishedState }));

    const onUpdate = vi.fn();
    const stop = duelService.pollDuel('match-123', onUpdate, undefined, 500);

    // Initial poll
    await vi.advanceTimersByTimeAsync(0);
    expect(onUpdate).toHaveBeenCalledWith(liveState);

    // Second poll returns finished -> polling terminates
    await vi.advanceTimersByTimeAsync(500);
    expect(onUpdate).toHaveBeenCalledWith(finishedState);

    // Advance more time -> no further calls
    await vi.advanceTimersByTimeAsync(1000);
    expect(onUpdate).toHaveBeenCalledTimes(2);

    stop();
  });

  it('submitMove posts shiritori word move and receives updated state', async () => {
    const updatedState: DuelState = {
      ...mockState,
      game: 'shiritori',
      words: [
        { word: 'ねこ', by: 'them', timestamp: 1727800010 },
        { word: 'こおり', by: 'me', timestamp: 1727800020 },
      ],
      turn: 'them',
    };
    vi.mocked(apiClient.post).mockResolvedValueOnce(ok({ state: updatedState }));

    const res = await duelService.submitMove('match-123', 'こおり');
    expect(apiClient.post).toHaveBeenCalledWith('/api/v1/duels/match-123/move', {
      word: 'こおり',
    });
    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.data.words).toHaveLength(2);
      expect(res.data.words?.[1].word).toBe('こおり');
      expect(res.data.turn).toBe('them');
    }
  });

  it('forfeitDuel calls forfeit endpoint', async () => {
    vi.mocked(apiClient.post).mockResolvedValueOnce(ok({ state: { ...mockState, status: 'finished' } }));

    const res = await duelService.forfeitDuel('match-123');
    expect(apiClient.post).toHaveBeenCalledWith('/api/v1/duels/match-123/forfeit');
    expect(res.ok).toBe(true);
  });
});
