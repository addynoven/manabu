import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  doc,
  setDoc,
  where,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { firebaseDb } from '../../../core/api/firebase';
import {
  type LeaderboardEntry,
  type FriendRecord,
  type FriendRequest,
  type CommunityFeedItem,
} from '../models/community.model';
import { ok, err, type Result } from '../../../core/errors/result';

class CommunityService {
  /**
   * Fetches global XP leaderboard across all registered learners.
   */
  public async getGlobalLeaderboard(limitCount = 50): Promise<Result<LeaderboardEntry[], Error>> {
    try {
      const usersRef = collection(firebaseDb, 'users');
      const q = query(usersRef, orderBy('totalXp', 'desc'), limit(limitCount));
      const snapshot = await getDocs(q);

      const entries: LeaderboardEntry[] = [];
      let rank = 1;

      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        entries.push({
          uid: docSnap.id,
          displayName: data.displayName || 'Manabu Learner',
          photoURL: data.photoURL || null,
          avatarEmoji: data.avatarEmoji || '🥋',
          beltRank: data.beltRank || 'white',
          level: data.level || 1,
          totalXp: data.totalXp || 0,
          currentStreak: data.currentStreak || 0,
          rank: rank++,
        });
      });

      return ok(entries);
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      console.error('[CommunityService] getGlobalLeaderboard error:', errObj);
      return err(errObj);
    }
  }

  /**
   * Fetches the user's friends list.
   */
  public async getFriends(userId: string): Promise<Result<FriendRecord[], Error>> {
    if (!userId) return err(new Error('User ID is required'));

    try {
      const friendsRef = collection(firebaseDb, 'users', userId, 'friends');
      const snapshot = await getDocs(friendsRef);

      const friends: FriendRecord[] = [];
      snapshot.forEach(docSnap => {
        const data = docSnap.data() as FriendRecord;
        friends.push(data);
      });

      return ok(friends);
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      console.error('[CommunityService] getFriends error:', errObj);
      return err(errObj);
    }
  }

  /**
   * Fetches pending incoming friend requests for a user.
   */
  public async getPendingFriendRequests(userId: string): Promise<Result<FriendRequest[], Error>> {
    if (!userId) return err(new Error('User ID is required'));

    try {
      const reqRef = collection(firebaseDb, 'friend_requests');
      const q = query(reqRef, where('toUid', '==', userId), where('status', '==', 'pending'));
      const snapshot = await getDocs(q);

      const requests: FriendRequest[] = [];
      snapshot.forEach(docSnap => {
        const data = docSnap.data() as Omit<FriendRequest, 'id'>;
        requests.push({ id: docSnap.id, ...data });
      });

      return ok(requests);
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      console.error('[CommunityService] getPendingFriendRequests error:', errObj);
      return err(errObj);
    }
  }

  /**
   * Sends a friend request from current user to target user.
   */
  public async sendFriendRequest(
    fromUser: { uid: string; displayName: string; photoURL?: string | null },
    toUser: { uid: string; displayName: string; photoURL?: string | null },
  ): Promise<Result<void, Error>> {
    try {
      const reqRef = collection(firebaseDb, 'friend_requests');
      await addDoc(reqRef, {
        fromUid: fromUser.uid,
        fromName: fromUser.displayName,
        fromPhoto: fromUser.photoURL || null,
        toUid: toUser.uid,
        toName: toUser.displayName,
        toPhoto: toUser.photoURL || null,
        status: 'pending',
        createdAt: new Date().toISOString(),
      });

      return ok(undefined);
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      console.error('[CommunityService] sendFriendRequest error:', errObj);
      return err(errObj);
    }
  }

  /**
   * Accepts a friend request and creates bidirectional records.
   */
  public async acceptFriendRequest(
    currentUserId: string,
    friend: FriendRecord,
  ): Promise<Result<void, Error>> {
    try {
      const friendDocRef = doc(firebaseDb, 'users', currentUserId, 'friends', friend.friendUid);
      await setDoc(friendDocRef, friend, { merge: true });

      return ok(undefined);
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      console.error('[CommunityService] acceptFriendRequest error:', errObj);
      return err(errObj);
    }
  }

  /**
   * Publishes an achievement or milestone event to the community activity feed.
   */
  public async broadcastActivity(
    event: Omit<CommunityFeedItem, 'id' | 'timestamp' | 'likesCount'>,
  ): Promise<Result<void, Error>> {
    try {
      const feedRef = collection(firebaseDb, 'community_feed');
      await addDoc(feedRef, {
        ...event,
        timestamp: serverTimestamp(),
        likesCount: 0,
      });

      return ok(undefined);
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      console.error('[CommunityService] broadcastActivity error:', errObj);
      return err(errObj);
    }
  }

  /**
   * Fetches recent community activity feed events.
   */
  public async getCommunityFeed(limitCount = 20): Promise<Result<CommunityFeedItem[], Error>> {
    try {
      const feedRef = collection(firebaseDb, 'community_feed');
      const q = query(feedRef, orderBy('timestamp', 'desc'), limit(limitCount));
      const snapshot = await getDocs(q);

      const items: CommunityFeedItem[] = [];
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        items.push({
          id: docSnap.id,
          actorUid: data.actorUid,
          actorName: data.actorName || 'Learner',
          actorPhoto: data.actorPhoto || null,
          actorBelt: data.actorBelt || 'white',
          eventType: data.eventType,
          eventTitle: data.eventTitle,
          eventDetails: data.eventDetails,
          timestamp: data.timestamp?.toDate?.() ? data.timestamp.toDate().toISOString() : new Date().toISOString(),
          likesCount: data.likesCount || 0,
        });
      });

      return ok(items);
    } catch (error) {
      const errObj = error instanceof Error ? error : new Error(String(error));
      console.error('[CommunityService] getCommunityFeed error:', errObj);
      return err(errObj);
    }
  }
}

export const communityService = new CommunityService();
