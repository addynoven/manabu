import { describe, it, expect, vi, beforeEach } from 'vitest';
import { communityService } from '../services/community.service';
import { useCommunityStore } from '../store/useCommunityStore';
import { apiClient } from '../../../core/api/httpClient';

vi.mock('../../../core/api/httpClient', () => ({
  apiClient: {
    get: vi.fn(),
    post: vi.fn(),
    delete: vi.fn(),
  },
}));

describe('CommunityService & Store (V3.1 Friends)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    useCommunityStore.setState({
      data: null,
      myFriendCode: null,
      fetchedAt: 0,
      isLoading: false,
      isRefreshing: false,
      error: null,
    });
  });

  describe('communityService', () => {
    it('fetches and validates friends response', async () => {
      const mockData = {
        currentWeekId: '2026-W40',
        friends: [
          {
            uid: 'f1',
            displayName: 'Kenji',
            avatarEmoji: '🥋',
            beltRank: 'white',
            level: 3,
            currentStreak: 5,
            weeklyXp: 180,
            lastActiveDate: '2026-10-02',
            daily: null,
          },
        ],
        incoming: [],
        outgoing: [],
      };

      vi.mocked(apiClient.get).mockResolvedValue({ ok: true, data: mockData } as any);

      const res = await communityService.getFriends();
      expect(res.ok).toBe(true);
      if (res.ok) {
        expect(res.data.currentWeekId).toBe('2026-W40');
        expect(res.data.friends.length).toBe(1);
        expect(res.data.friends[0].displayName).toBe('Kenji');
      }
    });

    it('normalizes code and validates length before sending request', async () => {
      vi.mocked(apiClient.post).mockResolvedValue({
        ok: true,
        data: { request: { id: 10, status: 'pending' }, user: { uid: 'u2' } },
      } as any);

      // Accepts hyphens and lowercase: "k7mq-2xrd" -> "K7MQ2XRD"
      const res = await communityService.sendFriendRequest('k7mq-2xrd');
      expect(res.ok).toBe(true);
      expect(apiClient.post).toHaveBeenCalledWith('/api/v1/friends/requests', {
        code: 'K7MQ2XRD',
      });

      // Rejects invalid length
      const invalidRes = await communityService.sendFriendRequest('SHORT');
      expect(invalidRes.ok).toBe(false);
      if (!invalidRes.ok) {
        expect(invalidRes.error.message).toContain('8 characters');
      }
    });

    it('responds to incoming friend request with accept or decline', async () => {
      vi.mocked(apiClient.post).mockResolvedValue({
        ok: true,
        data: { success: true },
      } as any);

      const acceptRes = await communityService.respondToFriendRequest(42, true);
      expect(acceptRes.ok).toBe(true);
      expect(apiClient.post).toHaveBeenCalledWith('/api/v1/friends/requests/42/respond', {
        accept: true,
      });

      const declineRes = await communityService.respondToFriendRequest(42, false);
      expect(declineRes.ok).toBe(true);
      expect(apiClient.post).toHaveBeenCalledWith('/api/v1/friends/requests/42/respond', {
        accept: false,
      });
    });

    it('cancels pending outgoing request and removes friend', async () => {
      vi.mocked(apiClient.delete).mockResolvedValue({
        ok: true,
        data: { success: true },
      } as any);

      const cancelRes = await communityService.cancelFriendRequest(99);
      expect(cancelRes.ok).toBe(true);
      expect(apiClient.delete).toHaveBeenCalledWith('/api/v1/friends/requests/99');

      const removeRes = await communityService.removeFriend('bad_friend_uid');
      expect(removeRes.ok).toBe(true);
      expect(apiClient.delete).toHaveBeenCalledWith('/api/v1/friends/bad_friend_uid');
    });
  });

  describe('useCommunityStore', () => {
    it('uses cached data if less than 2 minutes old', async () => {
      const mockCachedData = {
        currentWeekId: '2026-W40',
        friends: [],
        incoming: [],
        outgoing: [],
      };

      // Set fresh cache (30 seconds ago)
      useCommunityStore.setState({
        data: mockCachedData,
        fetchedAt: Date.now() - 30_000,
      });

      await useCommunityStore.getState().fetchFriends(false);
      // Network call should NOT be made
      expect(apiClient.get).not.toHaveBeenCalled();

      // Forced fetch should bypass cache
      vi.mocked(apiClient.get).mockResolvedValue({ ok: true, data: mockCachedData } as any);
      await useCommunityStore.getState().fetchFriends(true);
      expect(apiClient.get).toHaveBeenCalledWith('/api/v1/friends');
    });

    it('fetches profile and updates myFriendCode', async () => {
      vi.mocked(apiClient.get).mockResolvedValue({
        ok: true,
        data: { friendCode: 'K7MQ2XRD', displayName: 'Manabu Student' },
      } as any);

      await useCommunityStore.getState().fetchMyProfile();
      expect(useCommunityStore.getState().myFriendCode).toBe('K7MQ2XRD');
    });
  });
});
