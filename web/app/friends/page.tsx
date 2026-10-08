'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { StitchHeader } from '@/components/StitchHeader';
import { AuthGate } from '@/components/AuthGate';
import { useAuth } from '@/lib/AuthContext';
import { fetchWithAuth } from '@/lib/api';
import { duelClient, DuelGameType } from '@/lib/duelClient';
import { scoreChallengeClient, ChallengeGameType } from '@/lib/scoreChallengeClient';
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

export default function FriendsPage() {
  const { user, profile } = useAuth();

  const [activeTab, setActiveTab] = useState<'board' | 'friends' | 'requests'>('board');
  const [friends, setFriends] = useState<FriendUser[]>([]);
  const [incoming, setIncoming] = useState<FriendRequestItem[]>([]);
  const [outgoing, setOutgoing] = useState<FriendRequestItem[]>([]);
  const [currentWeekId, setCurrentWeekId] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Friend Code
  const [copied, setCopied] = useState(false);
  const friendCode = profile?.friendCode || 'R4B6-53B4';

  // Add friend state
  const [inputCode, setInputCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Challenge modal state
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

  // Build Leaderboard combining self and friends
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
    // Deduplicate and sort by weeklyXp desc
    const unique = Array.from(new Map(list.map(u => [u.uid, u])).values());
    return unique.sort((a, b) => (b.weeklyXp || 0) - (a.weeklyXp || 0));
  }, [friends, profile]);

  return (
    <AuthGate>
      <div className="bg-background-canvas text-text-primary min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-white">
        <StitchHeader />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          {/* COMMAND & TOPIC FILTER RIBBON (Stitch Screen 12) */}
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

        {/* Action Message */}
        {actionMessage && (
          <div
            className={`p-4 rounded-2xl border text-xs font-bold flex items-center justify-between ${
              actionMessage.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-red-500/10 border-red-500/30 text-red-400'
            }`}
          >
            <span>{actionMessage.text}</span>
            <button onClick={() => setActionMessage(null)} className="opacity-70 hover:opacity-100">
              ✕
            </button>
          </div>
        )}

        {/* Top Cards: Friend Code & Add Friend */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: My Friend Code */}
          <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Sparkles size={14} /> Your Unique Friend Code
              </div>
              <div className="text-3xl md:text-4xl font-mono font-black text-white tracking-widest py-2">
                {friendCode.length === 8 ? `${friendCode.slice(0, 4)}-${friendCode.slice(4)}` : friendCode}
              </div>
              <p className="text-xs text-neutral-400">
                Share this code with fellow learners to connect and duel in live lockstep matches.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={handleCopyCode}
                className="flex-1 py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-xs font-bold text-white transition flex items-center justify-center gap-2"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                {copied ? 'Copied to Clipboard' : 'Copy Friend Code'}
              </button>
            </div>
          </div>

          {/* Card 2: Add Friend by Code */}
          <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
                <UserPlus size={14} /> Add Friend by Code
              </div>
              <p className="text-xs text-neutral-400">
                Enter an 8-character friend code from a friend&apos;s mobile app or web profile.
              </p>

              <form onSubmit={handleAddFriend} className="flex gap-2 pt-2">
                <input
                  type="text"
                  value={inputCode}
                  onChange={e => setInputCode(e.target.value)}
                  placeholder="e.g. R4B6-53B4"
                  maxLength={10}
                  className="flex-1 bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder-neutral-600 uppercase focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !inputCode.trim()}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-50 text-xs font-bold text-white transition flex items-center gap-2 shadow-md shadow-red-950/40"
                >
                  <Send size={14} />
                  {isSubmitting ? 'Sending...' : 'Add'}
                </button>
              </form>
            </div>

            <div className="text-[11px] text-neutral-500 mt-4 flex items-center gap-2">
              <Shield size={12} className="text-neutral-400" />
              Direct cross-platform connections between Android, iOS, and Web.
            </div>
          </div>
        </div>

        {/* Tabs: Weekly Board / Friends / Requests */}
        <div className="flex gap-2 border-b border-neutral-800 pb-3">
          <button
            onClick={() => setActiveTab('board')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'board'
                ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
            }`}
          >
            <Trophy size={14} /> Weekly Board ({weeklyBoard.length})
          </button>
          <button
            onClick={() => setActiveTab('friends')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeTab === 'friends'
                ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
            }`}
          >
            <Users size={14} /> Clan Friends ({friends.length})
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 relative ${
              activeTab === 'requests'
                ? 'bg-red-600 text-white shadow-md shadow-red-950/40'
                : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
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

        {/* TAB 1: SAPPHIRE LEAGUE & WEEKLY STANDINGS (Stitch Screen #11) */}
        {activeTab === 'board' && (
          <div className="space-y-4">
            {/* Sapphire League Cohort Banner */}
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
                      <span className="text-xs font-mono text-neutral-400">Cohort #42</span>
                    </div>
                    <h3 className="text-lg font-black text-white mt-1">Study Circle Weekly Standings</h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <div className="bg-neutral-900/80 px-3 py-1.5 rounded-xl border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
                    <span className="text-emerald-400 font-bold">Top 3:</span>
                    <span>Promote to Diamond 👑</span>
                  </div>
                  <div className="bg-neutral-900/80 px-3 py-1.5 rounded-xl border border-neutral-800 text-neutral-400 flex items-center gap-1.5">
                    <span className="text-rose-400 font-bold">Bottom 3:</span>
                    <span>Relegate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-400 px-2">
              <span>Weekly Standings • Resets Sunday 23:59 UTC</span>
              <span className="font-mono text-neutral-500">{currentWeekId}</span>
            </div>

            {loading ? (
              <div className="p-12 text-center text-xs text-neutral-500">Loading cohort standings...</div>
            ) : weeklyBoard.length === 0 ? (
              <div className="p-12 text-center bg-neutral-900/40 border border-neutral-800 rounded-3xl space-y-2">
                <Users size={28} className="mx-auto text-neutral-600" />
                <p className="text-xs text-neutral-400 font-bold">No cohort activity yet this week.</p>
                <p className="text-xs text-neutral-500">Practice vocabulary or duels to earn XP for your study circle!</p>
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
                          : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`w-7 text-center font-black text-sm font-mono ${
                            idx === 0
                              ? 'text-amber-400'
                              : idx === 1
                              ? 'text-neutral-300'
                              : idx === 2
                              ? 'text-amber-600'
                              : 'text-neutral-500'
                          }`}
                        >
                          #{idx + 1}
                        </span>

                        <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-xl shadow-inner">
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
                          <div className="flex items-center gap-3 text-[11px] text-neutral-400 mt-0.5">
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
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
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

        {/* TAB 2: CLAN FRIENDS LIST */}
        {activeTab === 'friends' && (
          <div className="space-y-4">
            {loading ? (
              <div className="p-12 text-center text-xs text-neutral-500">Loading friends...</div>
            ) : friends.length === 0 ? (
              <div className="p-12 text-center bg-neutral-900/40 border border-neutral-800 rounded-3xl space-y-2">
                <Users size={28} className="mx-auto text-neutral-600" />
                <p className="text-xs text-neutral-400 font-bold">No clan friends added yet.</p>
                <p className="text-xs text-neutral-500">Enter a friend code above to challenge your classmates!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {friends.map(friend => (
                  <div
                    key={friend.uid}
                    className="p-5 rounded-3xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between gap-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center text-2xl">
                          {friend.avatarEmoji || '🥋'}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{friend.displayName}</div>
                          <div className="text-xs text-neutral-400 capitalize">
                            {friend.beltRank} Belt • LV {friend.level}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRemoveFriend(friend.uid)}
                        title="Remove friend"
                        className="text-neutral-500 hover:text-red-400 transition p-2"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 bg-neutral-950/60 p-3 rounded-2xl border border-neutral-800/80 text-xs">
                      <div>
                        <div className="text-neutral-500 text-[10px] uppercase font-bold">Weekly XP</div>
                        <div className="font-mono font-bold text-amber-400">{friend.weeklyXp} XP</div>
                      </div>
                      <div>
                        <div className="text-neutral-500 text-[10px] uppercase font-bold">Streak</div>
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
                        className="flex-1 py-2 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-xs font-bold text-neutral-200 transition flex items-center justify-center gap-1.5"
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

        {/* TAB 3: REQUESTS */}
        {activeTab === 'requests' && (
          <div className="space-y-6">
            {/* Incoming */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Incoming Requests ({incoming.length})
              </h2>
              {incoming.length === 0 ? (
                <div className="p-8 text-center bg-neutral-900/30 border border-neutral-800 rounded-2xl text-xs text-neutral-500">
                  No pending friend requests.
                </div>
              ) : (
                <div className="space-y-2">
                  {incoming.map(req => (
                    <div
                      key={req.id}
                      className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-xl">
                          {req.user.avatarEmoji || '🥋'}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{req.user.displayName}</div>
                          <div className="text-[11px] text-neutral-400 capitalize">
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
                          className="px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-300 transition flex items-center gap-1"
                        >
                          <XCircle size={13} /> Decline
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Outgoing */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Outgoing Requests Sent ({outgoing.length})
              </h2>
              {outgoing.length === 0 ? (
                <div className="p-8 text-center bg-neutral-900/30 border border-neutral-800 rounded-2xl text-xs text-neutral-500">
                  No outgoing requests awaiting approval.
                </div>
              ) : (
                <div className="space-y-2">
                  {outgoing.map(req => (
                    <div
                      key={req.id}
                      className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-xl">
                          {req.user.avatarEmoji || '🥋'}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{req.user.displayName}</div>
                          <div className="text-[11px] text-neutral-400">Request Sent • Awaiting Response</div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCancelRequest(req.id)}
                        className="px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-400 hover:text-white transition"
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

        {/* Modal: Challenge / Duel Picker */}
        {selectedFriend && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 max-w-md w-full space-y-6 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-xl">
                    {selectedFriend.avatarEmoji || '🥋'}
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Challenge {selectedFriend.displayName}</h2>
                    <p className="text-xs text-neutral-400">
                      {challengeMode === 'duel' ? '⚔️ Pick a Live Lockstep Duel' : '🎯 Pick a High-Score Challenge'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedFriend(null);
                    setChallengeSentMsg('');
                  }}
                  className="text-neutral-500 hover:text-white p-1"
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
                    className="w-full p-4 rounded-2xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">🎌 しりとり • Shiritori Arena</div>
                      <div className="text-[11px] text-neutral-400">Word-chain turn duel with 15s timer</div>
                    </div>
                    <span className="text-xs font-bold text-red-400">Duel →</span>
                  </button>

                  <button
                    onClick={() => handleSendDuel('karuta')}
                    className="w-full p-4 rounded-2xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">🎴 競技かるた • Competitive Karuta</div>
                      <div className="text-[11px] text-neutral-400">Tatami slap battle with poem reader</div>
                    </div>
                    <span className="text-xs font-bold text-amber-400">Duel →</span>
                  </button>

                  <button
                    onClick={() => handleSendDuel('kanjiDuel')}
                    className="w-full p-4 rounded-2xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">⚡ 漢字決闘 • Kanji Duel</div>
                      <div className="text-[11px] text-neutral-400">1000 HP Speed Strike Combat</div>
                    </div>
                    <span className="text-xs font-bold text-purple-400">Duel →</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <button
                    onClick={() => handleSendScoreChallenge('rain')}
                    className="w-full p-4 rounded-2xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">🌧️ Kana Rain Challenge</div>
                      <div className="text-[11px] text-neutral-400">Challenge them to beat your rain record</div>
                    </div>
                    <span className="text-xs font-bold text-blue-400">Send →</span>
                  </button>

                  <button
                    onClick={() => handleSendScoreChallenge('snake')}
                    className="w-full p-4 rounded-2xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">🐍 Kana Snake Challenge</div>
                      <div className="text-[11px] text-neutral-400">Challenge them on the directional grid</div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400">Send →</span>
                  </button>

                  <button
                    onClick={() => handleSendScoreChallenge('catch')}
                    className="w-full p-4 rounded-2xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">🧺 Kana Catch Challenge</div>
                      <div className="text-[11px] text-neutral-400">Challenge them to catch the target glyphs</div>
                    </div>
                    <span className="text-xs font-bold text-amber-400">Send →</span>
                  </button>

                  <button
                    onClick={() => handleSendScoreChallenge('survival')}
                    className="w-full p-4 rounded-2xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-left transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">⚡ Bushido Survival Challenge</div>
                      <div className="text-[11px] text-neutral-400">Time-attack endurance gauntlet</div>
                    </div>
                    <span className="text-xs font-bold text-red-400">Send →</span>
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
