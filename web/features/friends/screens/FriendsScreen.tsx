'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { StitchHeader } from '@/core/components/StitchHeader';
import { AuthGate } from '@/features/auth/components/AuthGate';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { fetchWithAuth } from '@/core/api/httpClient';
import { duelClient, DuelGameType } from '@/features/duels/repositories/duelClient';
import { scoreChallengeClient, ChallengeGameType } from '@/features/auth/repositories/scoreChallengeClient';
import {
  Users,
  UserPlus,
  Trophy,
  Swords,
  Copy,
  Check,
  Sparkles,
  Flame,
  Award,
  Send,
  Gamepad2,
  Trash2,
  CheckCircle,
  XCircle,
  RefreshCw,
  ExternalLink,
  Shield,
  Zap,
} from 'lucide-react';

interface FriendUser {
  uid: string;
  displayName: string;
  avatarEmoji: string;
  beltRank: string;
  level: number;
  currentStreak: number;
  weeklyXp: number;
  lastActiveDate: string | null;
  daily?: {
    date: string;
    score: number;
    timeSeconds: number;
    accuracy: number;
  } | null;
}

interface FriendRequestItem {
  id: number;
  createdAt: string;
  user: {
    uid: string;
    displayName: string;
    avatarEmoji: string;
    beltRank: string;
    level: number;
  };
}

export function FriendsScreen() {
  const { user, profile } = useAuth();

  const [activeTab, setActiveTab] = useState<'board' | 'friends' | 'requests'>('board');
  const [friends, setFriends] = useState<FriendUser[]>([]);
  const [incoming, setIncoming] = useState<FriendRequestItem[]>([]);
  const [outgoing, setOutgoing] = useState<FriendRequestItem[]>([]);
  const [currentWeekId, setCurrentWeekId] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [copied, setCopied] = useState(false);
  const friendCode = profile?.friendCode || 'R4B6-53B4';

  const [inputCode, setInputCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [selectedFriend, setSelectedFriend] = useState<FriendUser | null>(null);
  const [challengeMode, setChallengeMode] = useState<'score' | 'duel' | null>(null);
  const [challengeSentMsg, setChallengeSentMsg] = useState('');

  const fetchCommunityData = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const res = await fetchWithAuth<{
        currentWeekId: string;
        friends: FriendUser[];
        incoming: FriendRequestItem[];
        outgoing: FriendRequestItem[];
      }>('/api/v1/friends');

      if (res.ok && res.data) {
        setFriends(res.data.friends || []);
        setIncoming(res.data.incoming || []);
        setOutgoing(res.data.outgoing || []);
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

  const handleCopyCode = () => {
    if (!friendCode) return;
    navigator.clipboard.writeText(friendCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddFriend = async (e: React.FormEvent) => {
    e.preventDefault();
    const clean = inputCode.trim().replace(/[\s-]/g, '').toUpperCase();
    if (clean.length !== 8) {
      setActionMessage({ type: 'error', text: 'Friend code must be 8 characters (e.g. K7MQ-2XRD).' });
      return;
    }

    setIsSubmitting(true);
    setActionMessage(null);

    const res = await fetchWithAuth('/api/v1/friends/requests', {
      method: 'POST',
      body: JSON.stringify({ code: clean }),
    });

    setIsSubmitting(false);

    if (res.ok) {
      setInputCode('');
      setActionMessage({ type: 'success', text: 'Friend request sent successfully!' });
      fetchCommunityData(true);
    } else {
      setActionMessage({
        type: 'error',
        text: res.error?.message || 'Failed to send friend request. Check code.',
      });
    }
  };

  const handleRespondRequest = async (id: number, accept: boolean) => {
    const res = await fetchWithAuth(`/api/v1/friends/requests/${id}/respond`, {
      method: 'POST',
      body: JSON.stringify({ accept }),
    });

    if (res.ok) {
      setActionMessage({
        type: 'success',
        text: accept ? 'Friend request accepted!' : 'Request declined.',
      });
      fetchCommunityData(true);
    }
  };

  const handleCancelRequest = async (id: number) => {
    const res = await fetchWithAuth(`/api/v1/friends/requests/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      fetchCommunityData(true);
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

  const handleSendScoreChallenge = async (game: ChallengeGameType) => {
    if (!selectedFriend) return;
    const savedScores: Record<ChallengeGameType, number> = {
      rain: Number(localStorage.getItem('manabu_arcade_rain_high') || 100),
      snake: Number(localStorage.getItem('manabu_arcade_snake_high') || 120),
      catch: Number(localStorage.getItem('manabu_arcade_catch_high') || 150),
      survival: Number(localStorage.getItem('manabu_arcade_survival_high') || 200),
    };

    const myScore = savedScores[game];
    const res = await scoreChallengeClient.createChallenge(selectedFriend.uid, game, myScore);
    if (res.ok) {
      setChallengeSentMsg(`🎯 Challenge sent to ${selectedFriend.displayName}! They have 48h to beat ${myScore} pts.`);
      setTimeout(() => {
        setChallengeSentMsg('');
        setSelectedFriend(null);
      }, 2500);
    } else {
      alert(res.error?.message || 'Failed to send challenge');
    }
  };

  const handleSendDuel = async (game: DuelGameType) => {
    if (!selectedFriend) return;
    const res = await duelClient.createDuel(selectedFriend.uid, game);
    if (res.ok) {
      setChallengeSentMsg(`⚔️ Duel match created! Redirecting to live match...`);
      setTimeout(() => {
        window.location.href = `/arcade?duelId=${res.data?.id}&game=${game}`;
      }, 1000);
    } else {
      alert(res.error?.message || 'Failed to create duel');
    }
  };

  const weeklyBoard = React.useMemo(() => {
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
        daily: profile.daily,
      });
    }
    const unique = Array.from(new Map(list.map(u => [u.uid, u])).values());
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

        <div className="bg-[#0a3240] border border-[#17424f] rounded-xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 rounded-lg bg-[#051b22] border border-[#17424f] flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8fa2aa]">Your Scholar Code</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.2 rounded font-mono font-semibold">Active</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl font-mono font-bold text-white tracking-widest">
                  {friendCode.length === 8 ? `${friendCode.slice(0, 4)}-${friendCode.slice(4)}` : friendCode}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1 rounded bg-[#0f3947] hover:bg-[#17424f] border border-[#17424f] text-[11px] font-semibold text-white transition flex items-center gap-1.5"
                >
                  {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={handleAddFriend} className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="text"
              value={inputCode}
              onChange={e => setInputCode(e.target.value)}
              placeholder="Enter friend code (e.g. K7MQ-2XRD)"
              maxLength={10}
              className="bg-[#051b22] border border-[#17424f] rounded-lg px-3 py-2 text-xs font-mono text-white placeholder-[#627780] uppercase focus:outline-none focus:border-[#c74a4a] w-full md:w-64"
            />
            <button
              type="submit"
              disabled={isSubmitting || !inputCode.trim()}
              className="px-4 py-2 rounded-lg bg-[#c74a4a] hover:bg-[#d95a5a] disabled:opacity-50 text-xs font-bold text-white transition flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              <UserPlus size={13} />
              <span>{isSubmitting ? '...' : 'Connect'}</span>
            </button>
          </form>
        </div>

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
          <button
            onClick={() => setActiveTab('requests')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 relative ${
              activeTab === 'requests'
                ? 'bg-[#c74a4a] text-white shadow-md shadow-red-950/40'
                : 'text-[#8fa2aa] hover:text-white bg-[#0a3240] border border-[#17424f]'
            }`}
          >
            <UserPlus size={14} /> Requests
            {incoming.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-amber-500 text-black text-[10px] font-black flex items-center justify-center">
                {incoming.length}
              </span>
            )}
          </button>
        </div>

        {activeTab === 'board' && (
          <div className="space-y-4">
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-950/60 via-indigo-950/40 to-neutral-900 border border-blue-500/30 rounded-2xl p-5 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 text-white font-black text-xl">
                    💎
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                        Tier V • Sapphire League
                      </span>
                      <span className="text-xs font-mono text-[#8fa2aa]">Cohort #42</span>
                    </div>
                    <h3 className="text-lg font-black text-white mt-1">Study Circle Weekly Standings</h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <div className="bg-[#0a3240]/80 px-3 py-1.5 rounded-xl border border-[#17424f] text-[#c1d0d6] flex items-center gap-1.5">
                    <span className="text-emerald-400 font-bold">Top 3:</span>
                    <span>Promote to Diamond 👑</span>
                  </div>
                  <div className="bg-[#0a3240]/80 px-3 py-1.5 rounded-xl border border-[#17424f] text-[#8fa2aa] flex items-center gap-1.5">
                    <span className="text-rose-400 font-bold">Bottom 3:</span>
                    <span>Relegate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#8fa2aa] px-2">
              <span>Weekly Standings • Resets Sunday 23:59 UTC</span>
              <span className="font-mono text-[#627780]">{currentWeekId}</span>
            </div>

            {loading ? (
              <div className="p-12 text-center text-xs text-[#627780]">Loading cohort standings...</div>
            ) : weeklyBoard.length === 0 ? (
              <div className="p-12 text-center bg-[#0a3240]/40 border border-[#17424f] rounded-xl space-y-2">
                <Users size={28} className="mx-auto text-[#455a64]" />
                <p className="text-xs text-[#8fa2aa] font-bold">No cohort activity yet this week.</p>
                <p className="text-xs text-[#627780]">Practice vocabulary or duels to earn XP for your study circle!</p>
              </div>
            ) : (
              <div className="space-y-2">
                {weeklyBoard.map((item, idx) => {
                  const isMe = item.uid === profile?.uid;
                  const isPromotion = idx < 3;
                  const isRelegation = weeklyBoard.length >= 6 && idx >= weeklyBoard.length - 3;

                  return (
                    <div
                      key={item.uid}
                      className={`flex items-center justify-between p-4 rounded-2xl border transition ${
                        isMe
                          ? 'bg-gradient-to-r from-blue-950/40 to-neutral-900 border-blue-500/50 shadow-md shadow-blue-950/30 ring-1 ring-blue-500/30'
                          : isPromotion
                          ? 'bg-emerald-950/15 border-emerald-500/30 hover:border-emerald-500/50'
                          : isRelegation
                          ? 'bg-rose-950/10 border-rose-500/20 hover:border-rose-500/40'
                          : 'bg-[#0a3240]/60 border-[#17424f] hover:border-[#17424f]'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`w-7 text-center font-black text-sm font-mono ${
                            idx === 0
                              ? 'text-amber-400'
                              : idx === 1
                              ? 'text-[#c1d0d6]'
                              : idx === 2
                              ? 'text-amber-600'
                              : 'text-[#627780]'
                          }`}
                        >
                          #{idx + 1}
                        </span>

                        <div className="w-10 h-10 rounded-xl bg-[#0f3947] flex items-center justify-center text-xl shadow-inner">
                          {item.avatarEmoji || '🥋'}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">{item.displayName}</span>
                            {isMe && (
                              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold">
                                YOU
                              </span>
                            )}
                            {isPromotion && (
                              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-extrabold uppercase border border-emerald-500/20">
                                Promotion Zone
                              </span>
                            )}
                            {isRelegation && (
                              <span className="px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 text-[9px] font-extrabold uppercase border border-rose-500/20">
                                Relegation Zone
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-[11px] text-[#8fa2aa] mt-0.5">
                            <span className="capitalize">{item.beltRank} Belt</span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-orange-400">
                              <Flame size={11} /> {item.currentStreak}d streak
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-base font-black text-amber-400 font-mono">
                          {item.weeklyXp.toLocaleString()} XP
                        </div>
                        <div className="text-[10px] text-[#627780] uppercase tracking-widest font-semibold">
                          Weekly Effort
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {activeTab === 'friends' && (
          <div className="space-y-4">
            {loading ? (
              <div className="p-12 text-center text-xs text-[#627780]">Loading friends...</div>
            ) : friends.length === 0 ? (
              <div className="p-12 text-center bg-[#0a3240]/40 border border-[#17424f] rounded-xl space-y-2">
                <Users size={28} className="mx-auto text-[#455a64]" />
                <p className="text-xs text-[#8fa2aa] font-bold">No clan friends added yet.</p>
                <p className="text-xs text-[#627780]">Enter a friend code above to challenge your classmates!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {friends.map(friend => (
                  <div
                    key={friend.uid}
                    className="p-5 rounded-xl bg-[#0a3240]/60 border border-[#17424f] flex flex-col justify-between gap-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#0f3947] flex items-center justify-center text-2xl">
                          {friend.avatarEmoji || '🥋'}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{friend.displayName}</div>
                          <div className="text-xs text-[#8fa2aa] capitalize">
                            {friend.beltRank} Belt • LV {friend.level}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRemoveFriend(friend.uid)}
                        title="Remove friend"
                        className="text-[#627780] hover:text-[#ffb4ab] transition p-2"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 bg-[#051b22]/60 p-3 rounded-2xl border border-[#17424f]/80 text-xs">
                      <div>
                        <div className="text-[#627780] text-[10px] uppercase font-bold">Weekly XP</div>
                        <div className="font-mono font-bold text-amber-400">{friend.weeklyXp} XP</div>
                      </div>
                      <div>
                        <div className="text-[#627780] text-[10px] uppercase font-bold">Streak</div>
                        <div className="font-mono font-bold text-orange-400 flex items-center gap-1">
                          <Flame size={12} /> {friend.currentStreak} Days
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedFriend(friend);
                          setChallengeMode('duel');
                        }}
                        className="flex-1 py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white transition flex items-center justify-center gap-1.5 shadow-md shadow-purple-950/40"
                      >
                        <Swords size={13} /> Live Duel
                      </button>
                      <button
                        onClick={() => {
                          setSelectedFriend(friend);
                          setChallengeMode('score');
                        }}
                        className="flex-1 py-2 px-3 rounded-xl bg-[#0f3947] hover:bg-[#17424f] border border-[#17424f] text-xs font-bold text-neutral-200 transition flex items-center justify-center gap-1.5"
                      >
                        <Trophy size={13} className="text-amber-400" /> Challenge
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#8fa2aa]">
                Incoming Requests ({incoming.length})
              </h2>
              {incoming.length === 0 ? (
                <div className="p-8 text-center bg-[#0a3240]/30 border border-[#17424f] rounded-2xl text-xs text-[#627780]">
                  No pending friend requests.
                </div>
              ) : (
                <div className="space-y-2">
                  {incoming.map(req => (
                    <div
                      key={req.id}
                      className="p-4 rounded-2xl bg-[#0a3240] border border-[#17424f] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0f3947] flex items-center justify-center text-xl">
                          {req.user.avatarEmoji || '🥋'}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{req.user.displayName}</div>
                          <div className="text-[11px] text-[#8fa2aa] capitalize">
                            {req.user.beltRank} Belt • LV {req.user.level}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleRespondRequest(req.id, true)}
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition flex items-center gap-1"
                        >
                          <CheckCircle size={13} /> Accept
                        </button>
                        <button
                          onClick={() => handleRespondRequest(req.id, false)}
                          className="px-3 py-1.5 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-[#c1d0d6] transition flex items-center gap-1"
                        >
                          <XCircle size={13} /> Decline
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#8fa2aa]">
                Outgoing Requests Sent ({outgoing.length})
              </h2>
              {outgoing.length === 0 ? (
                <div className="p-8 text-center bg-[#0a3240]/30 border border-[#17424f] rounded-2xl text-xs text-[#627780]">
                  No outgoing requests awaiting approval.
                </div>
              ) : (
                <div className="space-y-2">
                  {outgoing.map(req => (
                    <div
                      key={req.id}
                      className="p-4 rounded-2xl bg-[#0a3240] border border-[#17424f] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0f3947] flex items-center justify-center text-xl">
                          {req.user.avatarEmoji || '🥋'}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{req.user.displayName}</div>
                          <div className="text-[11px] text-[#8fa2aa]">Request Sent • Awaiting Response</div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCancelRequest(req.id)}
                        className="px-3 py-1.5 rounded-xl bg-[#0f3947] hover:bg-[#17424f] text-xs font-bold text-[#8fa2aa] hover:text-white transition"
                      >
                        Cancel
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {selectedFriend && (
          <div className="fixed inset-0 bg-[#051b22]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#0a3240] border border-[#17424f] rounded-xl p-6 max-w-md w-full space-y-6 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0f3947] flex items-center justify-center text-xl">
                    {selectedFriend.avatarEmoji || '🥋'}
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Challenge {selectedFriend.displayName}</h2>
                    <p className="text-xs text-[#8fa2aa]">
                      {challengeMode === 'duel' ? '⚔️ Pick a Live Lockstep Duel' : '🎯 Pick a High-Score Challenge'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedFriend(null);
                    setChallengeSentMsg('');
                  }}
                  className="text-[#627780] hover:text-white p-1"
                >
                  ✕
                </button>
              </div>

              {challengeSentMsg ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold text-center">
                  {challengeSentMsg}
                </div>
              ) : challengeMode === 'duel' ? (
                <div className="space-y-3">
                  <button
                    onClick={() => handleSendDuel('shiritori')}
                    className="w-full p-4 rounded-2xl bg-[#051b22] hover:bg-[#0f3947] border border-[#17424f] text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">🎌 しりとり • Shiritori Arena</div>
                      <div className="text-[11px] text-[#8fa2aa]">Word-chain turn duel with 15s timer</div>
                    </div>
                    <span className="text-xs font-bold text-[#ffb4ab]">Duel →</span>
                  </button>

                  <button
                    onClick={() => handleSendDuel('karuta')}
                    className="w-full p-4 rounded-2xl bg-[#051b22] hover:bg-[#0f3947] border border-[#17424f] text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">🎴 競技かるた • Competitive Karuta</div>
                      <div className="text-[11px] text-[#8fa2aa]">Tatami slap battle with poem reader</div>
                    </div>
                    <span className="text-xs font-bold text-amber-400">Duel →</span>
                  </button>

                  <button
                    onClick={() => handleSendDuel('kanjiDuel')}
                    className="w-full p-4 rounded-2xl bg-[#051b22] hover:bg-[#0f3947] border border-[#17424f] text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">⚡ 漢字決闘 • Kanji Duel</div>
                      <div className="text-[11px] text-[#8fa2aa]">1000 HP Speed Strike Combat</div>
                    </div>
                    <span className="text-xs font-bold text-purple-400">Duel →</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <button
                    onClick={() => handleSendScoreChallenge('rain')}
                    className="w-full p-4 rounded-2xl bg-[#051b22] hover:bg-[#0f3947] border border-[#17424f] text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">🌧️ Kana Rain Challenge</div>
                      <div className="text-[11px] text-[#8fa2aa]">Challenge them to beat your rain record</div>
                    </div>
                    <span className="text-xs font-bold text-blue-400">Send →</span>
                  </button>

                  <button
                    onClick={() => handleSendScoreChallenge('snake')}
                    className="w-full p-4 rounded-2xl bg-[#051b22] hover:bg-[#0f3947] border border-[#17424f] text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">🐍 Kana Snake Challenge</div>
                      <div className="text-[11px] text-[#8fa2aa]">Challenge them on the directional grid</div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400">Send →</span>
                  </button>

                  <button
                    onClick={() => handleSendScoreChallenge('catch')}
                    className="w-full p-4 rounded-2xl bg-[#051b22] hover:bg-[#0f3947] border border-[#17424f] text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">🧺 Kana Catch Challenge</div>
                      <div className="text-[11px] text-[#8fa2aa]">Challenge them to catch the target glyphs</div>
                    </div>
                    <span className="text-xs font-bold text-amber-400">Send →</span>
                  </button>

                  <button
                    onClick={() => handleSendScoreChallenge('survival')}
                    className="w-full p-4 rounded-2xl bg-[#051b22] hover:bg-[#0f3947] border border-[#17424f] text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">⚡ Bushido Survival Challenge</div>
                      <div className="text-[11px] text-[#8fa2aa]">Time-attack endurance gauntlet</div>
                    </div>
                    <span className="text-xs font-bold text-[#ffb4ab]">Send →</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  </AuthGate>
  );
}
