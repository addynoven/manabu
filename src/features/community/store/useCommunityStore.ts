import { create } from 'zustand';
import {
  type LeaderboardEntry,
  type FriendRecord,
  type FriendRequest,
  type CommunityFeedItem,
  type LeaderboardTimeframe,
} from '../models/community.model';
import { communityService } from '../services/community.service';

interface CommunityState {
  leaderboard: LeaderboardEntry[];
  timeframe: LeaderboardTimeframe;
  friends: FriendRecord[];
  pendingRequests: FriendRequest[];
  feed: CommunityFeedItem[];
  isLoading: boolean;
  error: string | null;

  setTimeframe: (tf: LeaderboardTimeframe) => void;
  fetchLeaderboard: () => Promise<void>;
  fetchFriends: (userId: string) => Promise<void>;
  fetchFeed: () => Promise<void>;
}

export const useCommunityStore = create<CommunityState>((set, get) => ({
  leaderboard: [],
  timeframe: 'all_time',
  friends: [],
  pendingRequests: [],
  feed: [],
  isLoading: false,
  error: null,

  setTimeframe: tf => set({ timeframe: tf }),

  fetchLeaderboard: async () => {
    set({ isLoading: true, error: null });
    const res = await communityService.getGlobalLeaderboard();
    if (res.ok) {
      set({ leaderboard: res.data, isLoading: false });
    } else {
      set({ error: res.error.message, isLoading: false });
    }
  },

  fetchFriends: async (userId: string) => {
    if (!userId) return;
    const res = await communityService.getFriends(userId);
    if (res.ok) {
      set({ friends: res.data });
    }
  },

  fetchFeed: async () => {
    const res = await communityService.getCommunityFeed();
    if (res.ok) {
      set({ feed: res.data });
    }
  },
}));
