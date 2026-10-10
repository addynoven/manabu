'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { StitchHeader } from '@/core/components/StitchHeader';
import { AuthGate } from '@/features/auth/components/AuthGate';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { fetchWithAuth } from '@/core/api/httpClient';
import { RefreshCw, Trophy, Users, UserPlus } from 'lucide-react';
import {
  ScholarCodeBanner,
  SapphireLeagueBoard,
  ClanFriendsGrid,
  FriendUser,
} from './components';

export function FriendsScreen() {
  const { profile } = useAuth();

  const [activeTab, setActiveTab] = useState<'board' | 'friends' | 'requests'>('board');
  const [friends, setFriends] = useState<FriendUser[]>([]);
  const [currentWeekId, setCurrentWeekId] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const friendCode = profile?.friendCode || 'R4B6-53B4';

  const fetchCommunityData = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const res = await fetchWithAuth<{
        currentWeekId: string;
        friends: FriendUser[];
      }>('/api/v1/friends');

      if (res.ok && res.data) {
        setFriends(res.data.friends || []);
        setCurrentWeekId(res.data.currentWeekId || '');
      }
    } catch {
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchCommunityData();
  }, [fetchCommunityData]);

  const handleAddFriend = async (code: string) => {
    const clean = code.trim().replace(/[\s-]/g, '').toUpperCase();
    if (clean.length !== 8) {
      setActionMessage({ type: 'error', text: 'Friend code must be 8 characters (e.g. K7MQ-2XRD).' });
      return;
    }

    setActionMessage(null);
    const res = await fetchWithAuth('/api/v1/friends/requests', {
      method: 'POST',
      body: JSON.stringify({ code: clean }),
    });

    if (res.ok) {
      setActionMessage({ type: 'success', text: 'Friend request sent successfully!' });
      fetchCommunityData(true);
    } else {
      setActionMessage({
        type: 'error',
        text: res.error?.message || 'Failed to send friend request. Check code.',
      });
    }
  };

  const handleRemoveFriend = async (friendUid: string) => {
    if (!confirm('Are you sure you want to remove this friend?')) return;
    const res = await fetchWithAuth(`/api/v1/friends/${friendUid}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      setActionMessage({ type: 'success', text: 'Friend removed.' });
      fetchCommunityData(true);
    }
  };

  const weeklyBoard = useMemo(() => {
    const list = [...friends];
    if (profile) {
      list.push({
        uid: profile.uid,
        displayName: `${profile.displayName} (YOU)`,
        avatarEmoji: profile.avatarEmoji || '🥋',
        beltRank: profile.beltRank || 'white',
        level: profile.level || 1,
        currentStreak: profile.currentStreak || 0,
        weeklyXp: profile.weeklyXp || 0,
        lastActiveDate: profile.lastActiveDate,
      });
    }
    const unique = Array.from(new Map(list.map((u) => [u.uid, u])).values());
    return unique.sort((a, b) => (b.weeklyXp || 0) - (a.weeklyXp || 0));
  }, [friends, profile]);

  return (
    <AuthGate>
      <div className="bg-background-canvas text-text-primary min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-white">
        <StitchHeader />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          <section className="bg-surface-base border border-border-hairline rounded-xl p-5 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border-subtle">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs text-accent-gold bg-accent-gold-subtle border border-accent-gold/30 px-2.5 py-0.5 rounded-full font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
                    Manabu Community • Deliberate Language Discussions
                  </span>
                  <span className="text-text-muted text-xs">• {friends.length + 42} Scholars in Dojo</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                  Exchange mnemonics, challenge rivals, and compete in weekly cohorts.
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => fetchCommunityData(true)}
                  disabled={refreshing}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-muted border border-border-hairline text-xs font-semibold text-text-primary hover:bg-surface-elevated transition"
                >
                  <RefreshCw size={13} className={refreshing ? 'animate-spin' : ''} />
                  <span>{refreshing ? 'Syncing...' : 'Sync'}</span>
                </button>
              </div>
            </div>
          </section>

          {actionMessage && (
            <div
              className={`p-4 rounded-2xl border text-xs font-bold flex items-center justify-between ${
                actionMessage.type === 'success'
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                  : 'bg-red-500/10 border-red-500/30 text-[#ffb4ab]'
              }`}
            >
              <span>{actionMessage.text}</span>
              <button onClick={() => setActionMessage(null)} className="opacity-70 hover:opacity-100">
                ✕
              </button>
            </div>
          )}

          <ScholarCodeBanner
            friendCode={friendCode}
            isSubmitting={loading}
            onAddFriend={handleAddFriend}
          />

          <div className="flex gap-2 border-b border-[#17424f] pb-3">
            <button
              onClick={() => setActiveTab('board')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'board'
                  ? 'bg-[#c74a4a] text-white shadow-md shadow-red-950/40'
                  : 'text-[#8fa2aa] hover:text-white bg-[#0a3240] border border-[#17424f]'
              }`}
            >
              <Trophy size={14} /> Weekly Board ({weeklyBoard.length})
            </button>
            <button
              onClick={() => setActiveTab('friends')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'friends'
                  ? 'bg-[#c74a4a] text-white shadow-md shadow-red-950/40'
                  : 'text-[#8fa2aa] hover:text-white bg-[#0a3240] border border-[#17424f]'
              }`}
            >
              <Users size={14} /> Clan Friends ({friends.length})
            </button>
          </div>

          {activeTab === 'board' && (
            <SapphireLeagueBoard
              loading={loading}
              weeklyBoard={weeklyBoard}
              currentWeekId={currentWeekId}
              profileUid={profile?.uid}
            />
          )}

          {activeTab === 'friends' && (
            <ClanFriendsGrid
              loading={loading}
              friends={friends}
              onRemoveFriend={handleRemoveFriend}
              onOpenChallengeModal={() => {}}
            />
          )}
        </main>
      </div>
    </AuthGate>
  );
}
