import { apiClient } from '../../../core/api/httpClient';
import { ok, err, type Result } from '../../../core/errors/result';
import { AppError } from '../../../core/errors/error-handler';
import {
  type FriendsResponse,
  type UserLite,
  FriendsResponseSchema,
} from '../models/community.model';

export class CommunityService {
  /**
   * Fetches the full friends list, incoming/outgoing requests, and weekly board data
   */
  async getFriends(): Promise<Result<FriendsResponse, AppError>> {
    const res = await apiClient.get<FriendsResponse>('/api/v1/friends');
    if (!res.ok) {
      return res;
    }

    const parsed = FriendsResponseSchema.safeParse(res.data);
    if (!parsed.success) {
      return err(new AppError('Invalid friends response format from server', 'VALIDATION'));
    }

    return ok(parsed.data);
  }

  /**
   * Sends a friend request using an 8-character friend code (e.g. "K7MQ-2XRD")
   */
  async sendFriendRequest(
    rawCode: string
  ): Promise<Result<{ request: { id: number; status: string }; user: UserLite }, AppError>> {
    const normalizedCode = rawCode.replace(/[\s-]/g, '').toUpperCase();
    if (normalizedCode.length !== 8) {
      return err(new AppError('Friend code must be 8 characters long', 'VALIDATION'));
    }

    return await apiClient.post('/api/v1/friends/requests', { code: normalizedCode });
  }

  /**
   * Accepts or declines an incoming friend request
   */
  async respondToFriendRequest(
    requestId: number,
    accept: boolean
  ): Promise<Result<{ success: boolean; friendship?: unknown }, AppError>> {
    return await apiClient.post(`/api/v1/friends/requests/${requestId}/respond`, { accept });
  }

  /**
   * Cancels a pending outgoing friend request
   */
  async cancelFriendRequest(requestId: number): Promise<Result<{ success: boolean }, AppError>> {
    return await apiClient.delete(`/api/v1/friends/requests/${requestId}`);
  }

  /**
   * Removes a friend from the friends list
   */
  async removeFriend(friendUid: string): Promise<Result<{ success: boolean }, AppError>> {
    return await apiClient.delete(`/api/v1/friends/${friendUid}`);
  }

  /**
   * Fetches the user's public profile from backend, including their unique friendCode
   */
  async getMyProfile(): Promise<Result<{ friendCode: string; displayName: string }, AppError>> {
    return await apiClient.get('/api/v1/profile');
  }
}

export const communityService = new CommunityService();
