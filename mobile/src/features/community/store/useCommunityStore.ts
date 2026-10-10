import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { clientStorage } from '../../../core/storage/mmkv';
import { communityService } from '../services/community.service';
import { type FriendsResponse } from '../models/community.model';
import { type Result } from '../../../core/errors/result';
import { AppError } from '../../../core/errors/error-handler';

interface CommunityState {
  data: FriendsResponse | null;
  myFriendCode: string | null;
  fetchedAt: number;
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;

  fetchFriends: (force?: boolean) => Promise<void>;
  fetchMyProfile: () => Promise<void>;
  sendFriendRequest: (code: string) => Promise<Result<unknown, AppError>>;
  respondToRequest: (id: number, accept: boolean) => Promise<Result<unknown, AppError>>;
  cancelRequest: (id: number) => Promise<Result<unknown, AppError>>;
  removeFriend: (uid: string) => Promise<Result<unknown, AppError>>;
  clearError: () => void;
}

export const useCommunityStore = create<CommunityState>()(
  persist(
    (set, get) => ({
      data: null,
      myFriendCode: null,
      fetchedAt: 0,
      isLoading: false,
      isRefreshing: false,
      error: null,

      clearError: () => set({ error: null }),

      fetchFriends: async (force = false) => {
        const { data, fetchedAt, isLoading, isRefreshing } = get();
        if (isLoading || isRefreshing) return;

        // Cache hit: If data exists and is less than 2 minutes old (120,000 ms), skip network
        const isFresh = data && Date.now() - fetchedAt < 120_000;
        if (!force && isFresh) {
          return;
        }

        if (force) {
          set({ isRefreshing: true, error: null });
        } else {
          set({ isLoading: !data, error: null });
        }

        const res = await communityService.getFriends();

        if (res.ok) {
          set({
            data: res.data,
            fetchedAt: Date.now(),
            isLoading: false,
            isRefreshing: false,
            error: null,
          });
          if (!get().myFriendCode) {
            get().fetchMyProfile();
          }
        } else {
          set({
            error: res.error.message,
            isLoading: false,
            isRefreshing: false,
          });
        }
      },

      fetchMyProfile: async () => {
        const res = await communityService.getMyProfile();
        if (res.ok) {
          const raw = res.data as any;
          const code = raw?.profile?.friendCode || raw?.friendCode;
          if (code) {
            set({ myFriendCode: code });
          }
        }
      },

      sendFriendRequest: async (code: string) => {
        const res = await communityService.sendFriendRequest(code);
        if (res.ok) {
          // Refresh list to pull updated outgoing requests or new friendship
          await get().fetchFriends(true);
        }
        return res;
      },

      respondToRequest: async (id: number, accept: boolean) => {
        const res = await communityService.respondToFriendRequest(id, accept);
        if (res.ok) {
          await get().fetchFriends(true);
        }
        return res;
      },

      cancelRequest: async (id: number) => {
        const res = await communityService.cancelFriendRequest(id);
        if (res.ok) {
          await get().fetchFriends(true);
        }
        return res;
      },

      removeFriend: async (uid: string) => {
        const res = await communityService.removeFriend(uid);
        if (res.ok) {
          await get().fetchFriends(true);
        }
        return res;
      },
    }),
    {
      name: 'manabu-community-store',
      storage: createJSONStorage(() => clientStorage),
      partialize: state => ({
        data: state.data,
        myFriendCode: state.myFriendCode,
        fetchedAt: state.fetchedAt,
      }),
    }
  )
);
