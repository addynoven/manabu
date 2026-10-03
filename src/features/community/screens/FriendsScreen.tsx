import React, { useEffect, useState, useMemo } from 'react';
import {
  Alert,
  Pressable,
  RefreshControl,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  ArrowLeft,
  Copy,
  Check,
  Share2,
  UserPlus,
  Users,
  Trophy,
  Flame,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Sparkles,
  Target,
  Swords,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { copyToClipboard } from '../../../core/clipboard/clipboardHelper';
import { radii, spacing, useAppTheme } from '../../../core/theme';
import { useCommunityStore } from '../store/useCommunityStore';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { useAuthStore } from '../../auth/store/useAuthStore';
import { useArcadeStore } from '../../arcade/store/useArcadeStore';
import { useAchievementStore } from '../../achievements/store/useAchievementStore';
import { calculatePlayerLevel } from '../../achievements/models/achievement.model';
import { KanjiDuelView } from '../../arcade/components/KanjiDuelView';
import { KarutaBattleView } from '../../arcade/components/KarutaBattleView';
import { ShiritoriArenaView } from '../../arcade/components/ShiritoriArenaView';
import { duelService } from '../../arcade/services/duel.service';
import { scoreChallengeService } from '../../arcade/services/scoreChallenge.service';
import { generateDuelMatch } from '../../arcade/lib/kanjiDuelEngine';
import { generateKarutaMatch } from '../../arcade/lib/karutaEngine';
import type { FriendUser, FriendRequestItem } from '../models/community.model';

export function FriendsScreen() {
  const insets = useSafeAreaInsets();
  const theme = useAppTheme();
  const router = useRouter();

  const {
    data,
    myFriendCode,
    isRefreshing,
    fetchFriends,
    fetchMyProfile,
    sendFriendRequest,
    respondToRequest,
    cancelRequest,
    removeFriend,
  } = useCommunityStore();

  const {
    displayName,
    avatarEmoji,
    weeklyXp,
    currentStreak,
    lastActiveDate,
  } = useProgressStore();
  const { currentUser } = useAuthStore();
  const { dailyChallengeLastResult, dailyChallengeDate } = useArcadeStore();
  const totalPoints = useAchievementStore(state => state.getTotalPoints());
  const levelInfo = calculatePlayerLevel(totalPoints);
  const myLevel = levelInfo.level || 1;
  const myBeltRank = ['white', 'yellow', 'green', 'blue', 'purple', 'brown', 'black'][
    Math.min(Math.max(0, myLevel - 1), 6)
  ];

  const todayStr = useMemo(() => new Date().toISOString().split('T')[0], []);

  const [activeTab, setActiveTab] = useState<'board' | 'friends' | 'requests'>('board');
  const [inputCode, setInputCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeDuelMatchId, setActiveDuelMatchId] = useState<string | null>(null);
  const [activeDuelGame, setActiveDuelGame] = useState<'kanjiDuel' | 'karuta' | 'shiritori'>('kanjiDuel');
  const [isCreatingDuel, setIsCreatingDuel] = useState(false);

  useEffect(() => {
    fetchFriends();
    fetchMyProfile();
  }, [fetchFriends, fetchMyProfile]);

  const formattedMyCode = useMemo(() => {
    if (!myFriendCode) return '••••-••••';
    const clean = myFriendCode.replace(/[\s-]/g, '').toUpperCase();
    if (clean.length === 8) {
      return `${clean.slice(0, 4)}-${clean.slice(4)}`;
    }
    return myFriendCode;
  }, [myFriendCode]);

  const handleCopyCode = async () => {
    if (!myFriendCode) return;
    copyToClipboard(myFriendCode);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareCode = async () => {
    if (!myFriendCode) return;
    try {
      await Share.share({
        message: `Add me on Manabu to compare Japanese study streaks and challenge each other! My Friend Code is: ${formattedMyCode}`,
      });
    } catch (err) {
      console.warn('Share error:', err);
    }
  };

  const handleAddFriend = async () => {
    const clean = inputCode.replace(/[\s-]/g, '').toUpperCase();
    if (clean.length !== 8) {
      Alert.alert('Invalid Code', 'Friend code must be 8 characters (e.g. K7MQ-2XRD).');
      return;
    }

    setIsSubmitting(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    const res = await sendFriendRequest(clean);
    setIsSubmitting(false);

    if (res.ok) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setInputCode('');
      Alert.alert('Success', 'Friend request sent!');
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('Could Not Add Friend', res.error.message);
    }
  };

  const handleRespond = async (request: FriendRequestItem, accept: boolean) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const res = await respondToRequest(request.id, accept);
    if (!res.ok) {
      Alert.alert('Error', res.error.message);
    }
  };

  const handleCancelRequest = async (request: FriendRequestItem) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const res = await cancelRequest(request.id);
    if (!res.ok) {
      Alert.alert('Error', res.error.message);
    }
  };

  const handleRemoveFriend = (friend: FriendUser) => {
    Alert.alert(
      'Remove Friend',
      `Are you sure you want to remove ${friend.displayName} from your friends?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
            const res = await removeFriend(friend.uid);
            if (!res.ok) {
              Alert.alert('Error', res.error.message);
            }
          },
        },
      ]
    );
  };

  const handleChallengeToDuel = (friend: FriendUser) => {
    Alert.alert(
      'Challenge Friend',
      `Choose challenge mode against ${friend.displayName}:`,
      [
        {
          text: '⚔️ Kanji Duel',
          onPress: () => initiateDuel(friend, 'kanjiDuel'),
        },
        {
          text: '🎴 Karuta Battle',
          onPress: () => initiateDuel(friend, 'karuta'),
        },
        {
          text: '🗣️ Shiritori Duel',
          onPress: () => initiateDuel(friend, 'shiritori'),
        },
        {
          text: '⚡ Beat My Score',
          onPress: () => handleScoreChallengePick(friend),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]
    );
  };

  const handleScoreChallengePick = (friend: FriendUser) => {
    const arcadeState = useArcadeStore.getState();
    const rain = arcadeState.rainHighScore || 0;
    const snake = arcadeState.snakeHighScore || 0;
    const catchScore = arcadeState.catchHighScore || 0;
    const survival = Math.max(
      arcadeState.survivalHighScores?.kana || 0,
      arcadeState.survivalHighScores?.kanji || 0,
      arcadeState.survivalHighScores?.vocab || 0,
      arcadeState.survivalHighScores?.hell || 0
    );

    Alert.alert(
      '⚡ Beat My Score Challenge',
      `Pick a game to challenge ${friend.displayName}:`,
      [
        {
          text: `🌧️ Kana Rain (${rain} pts)`,
          onPress: () => sendScoreChallenge(friend, 'rain', rain),
        },
        {
          text: `🐍 Kana Snake (${snake} pts)`,
          onPress: () => sendScoreChallenge(friend, 'snake', snake),
        },
        {
          text: `🧺 Kana Catch (${catchScore} pts)`,
          onPress: () => sendScoreChallenge(friend, 'catch', catchScore),
        },
        {
          text: `⚡ Survival (${survival} pts)`,
          onPress: () => sendScoreChallenge(friend, 'survival', survival),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]
    );
  };

  const sendScoreChallenge = async (
    friend: FriendUser,
    game: 'rain' | 'snake' | 'catch' | 'survival',
    score: number
  ) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    try {
      const res = await scoreChallengeService.createChallenge(friend.uid, game, score);
      if (res.ok) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
        Alert.alert(
          'Challenge Sent! 🎯',
          `${friend.displayName} has 48 hours to beat your score of ${score} pts in ${game.toUpperCase()}!`
        );
      } else {
        Alert.alert('Challenge Error', res.error.message);
      }
    } catch (err: any) {
      Alert.alert('Error', err?.message || 'Failed to send challenge');
    }
  };

  const initiateDuel = async (friend: FriendUser, game: 'kanjiDuel' | 'karuta' | 'shiritori') => {
    if (isCreatingDuel) return;
    setIsCreatingDuel(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    try {
      const deck =
        game === 'karuta'
          ? generateKarutaMatch(8, 'poem')
          : game === 'shiritori'
          ? []
          : generateDuelMatch(true);
      const res = await duelService.createDuel(friend.uid, game, deck as any);
      if (!res.ok) {
        Alert.alert('Duel Error', res.error.message);
        return;
      }
      setActiveDuelGame(game);
      setActiveDuelMatchId(res.data.id);
    } catch (err: any) {
      Alert.alert('Duel Error', err?.message || 'Failed to challenge friend');
    } finally {
      setIsCreatingDuel(false);
    }
  };

  // Local user representation for leaderboard
  const currentUserBoardItem: FriendUser = useMemo(
    () => ({
      uid: currentUser?.uid || 'me',
      displayName: displayName || 'You',
      avatarEmoji: avatarEmoji || '🥋',
      beltRank: myBeltRank,
      level: myLevel,
      currentStreak: currentStreak || 0,
      weeklyXp: weeklyXp || 0,
      lastActiveDate: lastActiveDate,
      daily:
        dailyChallengeLastResult && dailyChallengeDate === todayStr
          ? {
              date: dailyChallengeDate,
              score: dailyChallengeLastResult.score,
              timeSeconds: dailyChallengeLastResult.timeSeconds,
              accuracy: dailyChallengeLastResult.accuracy,
            }
          : null,
    }),
    [
      currentUser?.uid,
      displayName,
      avatarEmoji,
      myBeltRank,
      myLevel,
      currentStreak,
      weeklyXp,
      lastActiveDate,
      dailyChallengeLastResult,
      dailyChallengeDate,
      todayStr,
    ]
  );

  // Combine user with friends and sort by weeklyXp descending
  const sortedBoard = useMemo(() => {
    const list = [...(data?.friends || [])];
    // Add current user if not already present
    if (!list.some(f => f.uid === currentUserBoardItem.uid)) {
      list.push(currentUserBoardItem);
    }
    return list.sort((a, b) => b.weeklyXp - a.weeklyXp);
  }, [data?.friends, currentUserBoardItem]);

  // Daily Challenge leaderboard for today
  const dailyGauntletBoard = useMemo(() => {
    const list: {
      uid: string;
      displayName: string;
      avatarEmoji: string;
      score: number;
      timeSeconds: number;
      accuracy: number;
      isMe: boolean;
    }[] = [];

    // Current user if completed today
    if (currentUserBoardItem.daily) {
      list.push({
        uid: currentUserBoardItem.uid,
        displayName: currentUserBoardItem.displayName,
        avatarEmoji: currentUserBoardItem.avatarEmoji,
        score: currentUserBoardItem.daily.score,
        timeSeconds: currentUserBoardItem.daily.timeSeconds,
        accuracy: currentUserBoardItem.daily.accuracy,
        isMe: true,
      });
    }

    // Friends who completed today
    (data?.friends || []).forEach(f => {
      if (f.daily && f.daily.date === todayStr) {
        list.push({
          uid: f.uid,
          displayName: f.displayName,
          avatarEmoji: f.avatarEmoji,
          score: f.daily.score,
          timeSeconds: f.daily.timeSeconds,
          accuracy: f.daily.accuracy,
          isMe: false,
        });
      }
    });

    return list.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.timeSeconds - b.timeSeconds;
    });
  }, [data?.friends, currentUserBoardItem, todayStr]);

  const incomingCount = data?.incoming?.length || 0;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background, paddingTop: insets.top }]}>
      {/* Top Header */}
      <View style={[styles.header, { borderBottomColor: theme.colors.border }]}>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [styles.backBtn, { opacity: pressed ? 0.7 : 1 }]}
          hitSlop={12}
        >
          <ArrowLeft size={22} color={theme.colors.textPrimary} />
        </Pressable>
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>Clan & Friends</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 32 }]}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              fetchFriends(true);
              fetchMyProfile();
            }}
            tintColor={theme.colors.accent}
          />
        }
      >
        {/* My Friend Code Banner */}
        <View style={[styles.codeCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
          <View style={styles.codeHeader}>
            <Sparkles size={16} color={theme.colors.accent} />
            <Text style={[styles.codeLabel, { color: theme.colors.textSecondary }]}>YOUR FRIEND CODE</Text>
          </View>
          <Text style={[styles.codeText, { color: theme.colors.textPrimary }]}>{formattedMyCode}</Text>
          <Text style={[styles.codeSubtext, { color: theme.colors.textMuted }]}>
            Share this code with friends so they can add you
          </Text>

          <View style={styles.codeActions}>
            <Pressable
              onPress={handleCopyCode}
              style={[styles.codeBtn, { backgroundColor: theme.colors.surfaceSubtle, borderColor: theme.colors.border }]}
            >
              {copied ? (
                <>
                  <Check size={14} color={theme.colors.success || '#10b981'} />
                  <Text style={[styles.codeBtnText, { color: theme.colors.success || '#10b981' }]}>Copied</Text>
                </>
              ) : (
                <>
                  <Copy size={14} color={theme.colors.textPrimary} />
                  <Text style={[styles.codeBtnText, { color: theme.colors.textPrimary }]}>Copy Code</Text>
                </>
              )}
            </Pressable>

            <Pressable
              onPress={handleShareCode}
              style={[styles.codeBtn, { backgroundColor: theme.colors.accent, borderColor: theme.colors.accent }]}
            >
              <Share2 size={14} color="#ffffff" />
              <Text style={[styles.codeBtnText, { color: '#ffffff' }]}>Share</Text>
            </Pressable>
          </View>
        </View>

        {/* Add Friend Input */}
        <View style={[styles.addCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>Add Friend by Code</Text>
          <View style={styles.inputRow}>
            <TextInput
              value={inputCode}
              onChangeText={setInputCode}
              placeholder="e.g. K7MQ-2XRD"
              placeholderTextColor={theme.colors.textMuted}
              autoCapitalize="characters"
              autoCorrect={false}
              maxLength={9}
              style={[
                styles.input,
                {
                  backgroundColor: theme.colors.surfaceSubtle,
                  borderColor: theme.colors.border,
                  color: theme.colors.textPrimary,
                },
              ]}
            />
            <Pressable
              onPress={handleAddFriend}
              disabled={isSubmitting || !inputCode.trim()}
              style={[
                styles.addBtn,
                {
                  backgroundColor: theme.colors.accent,
                  opacity: isSubmitting || !inputCode.trim() ? 0.5 : 1,
                },
              ]}
            >
              {isSubmitting ? (
                <ActivityIndicator size="small" color="#ffffff" />
              ) : (
                <>
                  <UserPlus size={16} color="#ffffff" />
                  <Text style={styles.addBtnText}>Add</Text>
                </>
              )}
            </Pressable>
          </View>
        </View>

        {/* Tabs Bar */}
        <View style={[styles.tabsBar, { backgroundColor: theme.colors.surfaceSubtle }]}>
          <Pressable
            onPress={() => setActiveTab('board')}
            style={[styles.tab, activeTab === 'board' && [styles.activeTab, { backgroundColor: theme.colors.card }]]}
          >
            <Trophy size={14} color={activeTab === 'board' ? theme.colors.accent : theme.colors.textSecondary} />
            <Text style={[styles.tabText, { color: activeTab === 'board' ? theme.colors.textPrimary : theme.colors.textSecondary }]}>
              Weekly Board
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setActiveTab('friends')}
            style={[styles.tab, activeTab === 'friends' && [styles.activeTab, { backgroundColor: theme.colors.card }]]}
          >
            <Users size={14} color={activeTab === 'friends' ? theme.colors.accent : theme.colors.textSecondary} />
            <Text style={[styles.tabText, { color: activeTab === 'friends' ? theme.colors.textPrimary : theme.colors.textSecondary }]}>
              Friends ({data?.friends?.length || 0})
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setActiveTab('requests')}
            style={[styles.tab, activeTab === 'requests' && [styles.activeTab, { backgroundColor: theme.colors.card }]]}
          >
            <Clock size={14} color={activeTab === 'requests' ? theme.colors.accent : theme.colors.textSecondary} />
            <Text style={[styles.tabText, { color: activeTab === 'requests' ? theme.colors.textPrimary : theme.colors.textSecondary }]}>
              Requests
            </Text>
            {incomingCount > 0 && (
              <View style={[styles.badge, { backgroundColor: theme.colors.accent }]}>
                <Text style={styles.badgeText}>{incomingCount}</Text>
              </View>
            )}
          </Pressable>
        </View>

        {/* TAB 1: WEEKLY LEADERBOARD */}
        {activeTab === 'board' && (
          <View style={styles.tabContent}>
            {/* Daily Gauntlet Today Clan Card */}
            <View style={[styles.dailyGauntletCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
              <View style={styles.dailyGauntletHeader}>
                <View style={styles.dailyGauntletTitleRow}>
                  <Flame size={18} color="#f97316" />
                  <Text style={[styles.dailyGauntletTitle, { color: theme.colors.textPrimary }]}>
                    {"Today's Daily Gauntlet"}
                  </Text>
                </View>
                <View style={[styles.dailyGauntletBadge, { backgroundColor: dailyGauntletBoard.length > 0 ? (theme.colors.successLight || '#d1fae5') : theme.colors.surfaceSubtle }]}>
                  <Text style={[styles.dailyGauntletBadgeText, { color: dailyGauntletBoard.length > 0 ? (theme.colors.success || '#10b981') : theme.colors.textSecondary }]}>
                    {dailyGauntletBoard.length} Completed
                  </Text>
                </View>
              </View>

              {dailyGauntletBoard.length > 0 ? (
                <View style={styles.dailyGauntletList}>
                  {dailyGauntletBoard.map((entry, idx) => (
                    <View
                      key={entry.uid}
                      style={[
                        styles.dailyGauntletRow,
                        { borderColor: theme.colors.border },
                        entry.isMe && [styles.dailyGauntletRowMe, { backgroundColor: theme.colors.surfaceSubtle, borderColor: theme.colors.accent }],
                      ]}
                    >
                      <View style={styles.dailyGauntletLeft}>
                        <Text style={[
                          styles.dailyGauntletRank,
                          { color: idx === 0 ? '#f59e0b' : idx === 1 ? '#94a3b8' : idx === 2 ? '#d97706' : theme.colors.textMuted }
                        ]}>
                          #{idx + 1}
                        </Text>
                        <Text style={styles.dailyGauntletEmoji}>{entry.avatarEmoji}</Text>
                        <View>
                          <Text style={[styles.dailyGauntletName, { color: theme.colors.textPrimary }]}>
                            {entry.displayName} {entry.isMe ? '(You)' : ''}
                          </Text>
                          <Text style={[styles.dailyGauntletMeta, { color: theme.colors.textMuted }]}>
                            {entry.timeSeconds}s • {entry.accuracy}% acc
                          </Text>
                        </View>
                      </View>
                      <View style={styles.dailyGauntletRight}>
                        <Text style={[styles.dailyGauntletScore, { color: theme.colors.accent }]}>
                          {entry.score}
                        </Text>
                        <Text style={[styles.dailyGauntletScoreLbl, { color: theme.colors.textMuted }]}>pts</Text>
                      </View>
                    </View>
                  ))}
                </View>
              ) : (
                <View style={styles.dailyGauntletEmpty}>
                  <Text style={[styles.dailyGauntletEmptyText, { color: theme.colors.textMuted }]}>
                    {"No clan members have finished today's Daily Gauntlet yet."}
                  </Text>
                </View>
              )}

              {!currentUserBoardItem.daily && (
                <Pressable
                  onPress={() => router.push('/arcade' as any)}
                  style={[styles.playDailyBtn, { backgroundColor: theme.colors.accent }]}
                >
                  <Target size={14} color="#ffffff" />
                  <Text style={styles.playDailyBtnText}>{"Play Today's Challenge"}</Text>
                </Pressable>
              )}
            </View>

            <View style={styles.boardHeader}>
              <Text style={[styles.boardTitle, { color: theme.colors.textPrimary }]}>
                Weekly XP Standings
              </Text>
              <Text style={[styles.boardSubtitle, { color: theme.colors.textMuted }]}>
                Resets Monday 00:00 UTC (05:30 IST)
              </Text>
            </View>

            {sortedBoard.map((member, index) => {
              const isMe = member.uid === currentUserBoardItem.uid;
              const hasStudiedToday = member.lastActiveDate === todayStr;

              return (
                <View
                  key={member.uid}
                  style={[
                    styles.memberRow,
                    {
                      backgroundColor: theme.colors.card,
                      borderColor: isMe ? theme.colors.accent : theme.colors.border,
                      borderWidth: isMe ? 1.5 : 1,
                    },
                  ]}
                >
                  <View style={styles.memberLeft}>
                    <Text
                      style={[
                        styles.rankNumber,
                        {
                          color:
                            index === 0
                              ? '#f59e0b'
                              : index === 1
                              ? '#94a3b8'
                              : index === 2
                              ? '#d97706'
                              : theme.colors.textMuted,
                        },
                      ]}
                    >
                      #{index + 1}
                    </Text>
                    <Text style={styles.avatarEmoji}>{member.avatarEmoji}</Text>
                    <View>
                      <View style={styles.nameRow}>
                        <Text style={[styles.memberName, { color: theme.colors.textPrimary }]}>
                          {member.displayName}
                        </Text>
                        {isMe && (
                          <View style={[styles.youTag, { backgroundColor: theme.colors.accent }]}>
                            <Text style={styles.youTagText}>YOU</Text>
                          </View>
                        )}
                      </View>
                      <View style={styles.statusRow}>
                        <Text style={[styles.memberRank, { color: theme.colors.textMuted }]}>
                          {member.beltRank.toUpperCase()}
                        </Text>
                        {hasStudiedToday && (
                          <View style={styles.studiedTag}>
                            <Text style={styles.studiedText}>Studied Today 🥋</Text>
                          </View>
                        )}
                        {member.daily?.date === todayStr && (
                          <View style={[styles.dailyTag, { backgroundColor: theme.colors.surfaceSubtle }]}>
                            <Text style={[styles.dailyTagText, { color: theme.colors.accent }]}>
                              🎯 {member.daily.score} pts
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
                  </View>

                  <View style={styles.memberRight}>
                    <Text style={[styles.xpText, { color: theme.colors.textPrimary }]}>
                      {member.weeklyXp} <Text style={{ fontSize: 11, color: theme.colors.textMuted }}>XP</Text>
                    </Text>
                    <View style={styles.streakRow}>
                      <Flame size={12} color="#f59e0b" />
                      <Text style={[styles.streakText, { color: '#f59e0b' }]}>{member.currentStreak}d</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        )}

        {/* TAB 2: MY FRIENDS LIST */}
        {activeTab === 'friends' && (
          <View style={styles.tabContent}>
            {data?.friends && data.friends.length > 0 ? (
              data.friends.map(friend => {
                const hasStudiedToday = friend.lastActiveDate === todayStr;

                return (
                  <View
                    key={friend.uid}
                    style={[styles.friendCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
                  >
                    <View style={styles.memberLeft}>
                      <Text style={styles.avatarEmoji}>{friend.avatarEmoji}</Text>
                      <View>
                        <Text style={[styles.memberName, { color: theme.colors.textPrimary }]}>
                          {friend.displayName}
                        </Text>
                        <Text style={[styles.memberRank, { color: theme.colors.textMuted }]}>
                          Level {friend.level} • {friend.beltRank} belt
                        </Text>
                        {hasStudiedToday ? (
                          <Text style={styles.studiedInline}>Studied today ✓</Text>
                        ) : (
                          <Text style={[styles.notStudiedInline, { color: theme.colors.textMuted }]}>
                            Not yet studied today
                          </Text>
                        )}
                        {friend.daily?.date === todayStr && (
                          <Text style={[styles.dailyInline, { color: theme.colors.accent }]}>
                            🎯 Daily: {friend.daily.score} pts ({friend.daily.accuracy}%)
                          </Text>
                        )}
                      </View>
                    </View>

                    <View style={styles.friendActions}>
                      <Pressable
                        onPress={() => handleChallengeToDuel(friend)}
                        style={[styles.duelBtn, { backgroundColor: '#8B0000' }]}
                        hitSlop={8}
                        disabled={isCreatingDuel}
                      >
                        <Swords size={13} color="#FFF" />
                        <Text style={styles.duelBtnText}>Duel</Text>
                      </Pressable>
                      <Pressable
                        onPress={() => handleRemoveFriend(friend)}
                        style={styles.iconBtn}
                        hitSlop={8}
                      >
                        <Trash2 size={16} color={theme.colors.error || '#ef4444'} />
                      </Pressable>
                    </View>
                  </View>
                );
              })
            ) : (
              <View style={styles.emptyBox}>
                <Users size={36} color={theme.colors.textMuted} />
                <Text style={[styles.emptyTitle, { color: theme.colors.textPrimary }]}>No friends added yet</Text>
                <Text style={[styles.emptySubtitle, { color: theme.colors.textMuted }]}>
                  {"Share your friend code above or enter a friend's code to connect!"}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* TAB 3: REQUESTS (INCOMING & OUTGOING) */}
        {activeTab === 'requests' && (
          <View style={styles.tabContent}>
            {/* Incoming Requests */}
            <Text style={[styles.requestsHeader, { color: theme.colors.textSecondary }]}>
              INCOMING REQUESTS ({incomingCount})
            </Text>
            {incomingCount > 0 ? (
              data?.incoming.map(req => (
                <View
                  key={req.id}
                  style={[styles.requestCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
                >
                  <View style={styles.memberLeft}>
                    <Text style={styles.avatarEmoji}>{req.user.avatarEmoji}</Text>
                    <View>
                      <Text style={[styles.memberName, { color: theme.colors.textPrimary }]}>
                        {req.user.displayName}
                      </Text>
                      <Text style={[styles.memberRank, { color: theme.colors.textMuted }]}>
                        Level {req.user.level} • {req.user.beltRank} belt
                      </Text>
                    </View>
                  </View>

                  <View style={styles.reqBtnRow}>
                    <Pressable
                      onPress={() => handleRespond(req, true)}
                      style={[styles.reqActionBtn, { backgroundColor: theme.colors.accent }]}
                    >
                      <CheckCircle size={14} color="#ffffff" />
                      <Text style={styles.reqBtnText}>Accept</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleRespond(req, false)}
                      style={[styles.reqActionBtn, { backgroundColor: theme.colors.surfaceSubtle }]}
                    >
                      <XCircle size={14} color={theme.colors.textSecondary} />
                      <Text style={[styles.reqBtnText, { color: theme.colors.textSecondary }]}>Decline</Text>
                    </Pressable>
                  </View>
                </View>
              ))
            ) : (
              <Text style={[styles.noneText, { color: theme.colors.textMuted }]}>No incoming friend requests</Text>
            )}

            {/* Outgoing Requests */}
            <Text style={[styles.requestsHeader, { color: theme.colors.textSecondary, marginTop: 24 }]}>
              PENDING SENT REQUESTS ({data?.outgoing?.length || 0})
            </Text>
            {data?.outgoing && data.outgoing.length > 0 ? (
              data.outgoing.map(req => (
                <View
                  key={req.id}
                  style={[styles.requestCard, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
                >
                  <View style={styles.memberLeft}>
                    <Text style={styles.avatarEmoji}>{req.user.avatarEmoji}</Text>
                    <View>
                      <Text style={[styles.memberName, { color: theme.colors.textPrimary }]}>
                        {req.user.displayName}
                      </Text>
                      <Text style={[styles.memberRank, { color: theme.colors.textMuted }]}>
                        Awaiting response...
                      </Text>
                    </View>
                  </View>

                  <Pressable
                    onPress={() => handleCancelRequest(req)}
                    style={[styles.reqActionBtn, { backgroundColor: theme.colors.surfaceSubtle }]}
                  >
                    <Text style={[styles.reqBtnText, { color: theme.colors.textMuted }]}>Cancel</Text>
                  </Pressable>
                </View>
              ))
            ) : (
              <Text style={[styles.noneText, { color: theme.colors.textMuted }]}>No pending sent requests</Text>
            )}
          </View>
        )}
      </ScrollView>

      <Modal
        visible={activeDuelMatchId !== null}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={() => setActiveDuelMatchId(null)}
      >
        {activeDuelMatchId && (
          activeDuelGame === 'karuta' ? (
            <KarutaBattleView
              duelMatchId={activeDuelMatchId}
              onClose={() => setActiveDuelMatchId(null)}
            />
          ) : activeDuelGame === 'shiritori' ? (
            <ShiritoriArenaView
              duelMatchId={activeDuelMatchId}
              onClose={() => setActiveDuelMatchId(null)}
            />
          ) : (
            <KanjiDuelView
              duelMatchId={activeDuelMatchId}
              onClose={() => setActiveDuelMatchId(null)}
            />
          )
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
  },
  backBtn: {
    padding: spacing.xs,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  scrollContent: {
    padding: spacing.md,
  },
  codeCard: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: spacing.lg,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  codeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  codeLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  codeText: {
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 3,
    fontFamily: 'monospace',
    marginVertical: spacing.xs,
  },
  codeSubtext: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  codeActions: {
    flexDirection: 'row',
    gap: spacing.sm,
    width: '100%',
  },
  codeBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    borderRadius: radii.lg,
    borderWidth: 1,
  },
  codeBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },
  addCard: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  inputRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    borderRadius: radii.lg,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
    fontSize: 14,
    fontFamily: 'monospace',
    fontWeight: '700',
    letterSpacing: 1,
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.lg,
  },
  addBtnText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
  tabsBar: {
    flexDirection: 'row',
    borderRadius: radii.xl,
    padding: 4,
    marginBottom: spacing.md,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 8,
    borderRadius: radii.lg,
  },
  activeTab: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '700',
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    marginLeft: 2,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '800',
  },
  tabContent: {
    gap: spacing.sm,
  },
  boardHeader: {
    marginBottom: 4,
  },
  boardSubtitle: {
    fontSize: 11,
    fontWeight: '600',
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
    borderRadius: radii.lg,
  },
  memberLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flex: 1,
  },
  rankNumber: {
    fontSize: 14,
    fontWeight: '900',
    width: 28,
  },
  avatarEmoji: {
    fontSize: 24,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  memberName: {
    fontSize: 14,
    fontWeight: '700',
  },
  youTag: {
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 4,
  },
  youTagText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '900',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  memberRank: {
    fontSize: 11,
    fontWeight: '600',
  },
  studiedTag: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
  },
  studiedText: {
    color: '#10b981',
    fontSize: 10,
    fontWeight: '700',
  },
  memberRight: {
    alignItems: 'flex-end',
  },
  xpText: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'monospace',
  },
  streakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginTop: 2,
  },
  streakText: {
    fontSize: 11,
    fontWeight: '700',
  },
  friendCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
    borderRadius: radii.lg,
    borderWidth: 1,
  },
  friendActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  duelBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: radii.md,
    gap: 4,
  },
  duelBtnText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '800',
  },
  iconBtn: {
    padding: spacing.xs,
  },
  studiedInline: {
    fontSize: 11,
    fontWeight: '700',
    color: '#10b981',
    marginTop: 2,
  },
  notStudiedInline: {
    fontSize: 11,
    marginTop: 2,
  },
  emptyBox: {
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: spacing.sm,
  },
  emptySubtitle: {
    fontSize: 12,
    textAlign: 'center',
    maxWidth: 240,
    marginTop: 4,
  },
  requestsHeader: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: spacing.xs,
  },
  requestCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
    borderRadius: radii.lg,
    borderWidth: 1,
  },
  reqBtnRow: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  reqActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.md,
  },
  reqBtnText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  noneText: {
    fontSize: 12,
    fontStyle: 'italic',
    paddingVertical: 8,
  },
  boardTitle: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  dailyGauntletCard: {
    borderRadius: radii.xl,
    borderWidth: 1,
    padding: spacing.md,
    marginBottom: spacing.sm,
    gap: spacing.sm,
  },
  dailyGauntletHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dailyGauntletTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dailyGauntletTitle: {
    fontSize: 14,
    fontWeight: '800',
  },
  dailyGauntletBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radii.full,
  },
  dailyGauntletBadgeText: {
    fontSize: 10,
    fontWeight: '800',
  },
  dailyGauntletList: {
    gap: 6,
  },
  dailyGauntletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: radii.md,
    borderWidth: 1,
  },
  dailyGauntletRowMe: {
    borderWidth: 1.5,
  },
  dailyGauntletLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flex: 1,
  },
  dailyGauntletRank: {
    fontSize: 12,
    fontWeight: '900',
    width: 20,
    textAlign: 'center',
  },
  dailyGauntletEmoji: {
    fontSize: 18,
  },
  dailyGauntletName: {
    fontSize: 12,
    fontWeight: '700',
  },
  dailyGauntletMeta: {
    fontSize: 10,
    marginTop: 1,
  },
  dailyGauntletRight: {
    alignItems: 'flex-end',
    marginLeft: spacing.sm,
  },
  dailyGauntletScore: {
    fontSize: 13,
    fontWeight: '800',
  },
  dailyGauntletScoreLbl: {
    fontSize: 9,
  },
  dailyGauntletEmpty: {
    paddingVertical: 6,
  },
  dailyGauntletEmptyText: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  playDailyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 8,
    borderRadius: radii.md,
    marginTop: 2,
  },
  playDailyBtnText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  dailyTag: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: radii.full,
  },
  dailyTagText: {
    fontSize: 10,
    fontWeight: '700',
  },
  dailyInline: {
    fontSize: 11,
    fontWeight: '700',
    marginTop: 2,
  },
});
