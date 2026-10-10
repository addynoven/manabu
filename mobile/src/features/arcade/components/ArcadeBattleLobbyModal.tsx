import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  X,
  Swords,
  Layers,
  Zap,
  Bot,
  Users,
  Search,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Clock,
  Send,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, spacing, typography, useAppTheme } from '../../../core/theme';
import { duelService } from '../services/duel.service';
import { generateDuelMatch } from '../lib/kanjiDuelEngine';
import { generateKarutaMatch } from '../lib/karutaEngine';
import { useCommunityStore } from '../../community/store/useCommunityStore';
import { useAuthStore } from '../../auth/store/useAuthStore';
import type { FriendUser } from '../../community/models/community.model';

export type BattleGameType = 'kanjiDuel' | 'karuta' | 'shiritori';

interface ArcadeBattleLobbyModalProps {
  visible: boolean;
  game: BattleGameType | null;
  onClose: () => void;
  onStartSolo: (game: BattleGameType) => void;
  onStartMultiplayer: (game: BattleGameType, matchId: string) => void;
}

const EMPTY_FRIENDS: FriendUser[] = [];

export function ArcadeBattleLobbyModal({
  visible,
  game,
  onClose,
  onStartSolo,
  onStartMultiplayer,
}: ArcadeBattleLobbyModalProps) {
  const insets = useSafeAreaInsets();
  const { colors: theme } = useAppTheme();
  const { currentUser } = useAuthStore();
  const friends = useCommunityStore(state => state.data?.friends) ?? EMPTY_FRIENDS;
  const fetchFriends = useCommunityStore(state => state.fetchFriends);

  const [tab, setTab] = useState<'solo' | 'pvp'>('pvp');
  const [directCode, setDirectCode] = useState('');
  const [isSubmittingCode, setIsSubmittingCode] = useState(false);
  const [isSearchingQuickMatch, setIsSearchingQuickMatch] = useState(false);
  const [searchElapsed, setSearchElapsed] = useState(0);
  const [challengingUid, setChallengingUid] = useState<string | null>(null);

  const searchTimerRef = useRef<NodeJS.Timeout | null>(null);
  const searchPollRef = useRef<NodeJS.Timeout | null>(null);
  const isSearchingRef = useRef<boolean>(false);

  useEffect(() => {
    if (visible) {
      fetchFriends(false).catch(() => {});
      setTab('pvp');
      setDirectCode('');
      isSearchingRef.current = false;
      setIsSearchingQuickMatch(false);
      setSearchElapsed(0);
    } else {
      stopQuickMatch();
    }
  }, [visible]);

  const stopQuickMatch = () => {
    isSearchingRef.current = false;
    if (searchTimerRef.current) {
      clearInterval(searchTimerRef.current);
      searchTimerRef.current = null;
    }
    if (searchPollRef.current) {
      clearTimeout(searchPollRef.current);
      searchPollRef.current = null;
    }
    if (game) {
      duelService.cancelQuickMatch(game).catch(() => {});
    }
    setIsSearchingQuickMatch(false);
    setSearchElapsed(0);
  };

  const getDeckForGame = (targetGame: BattleGameType) => {
    if (targetGame === 'kanjiDuel') {
      return generateDuelMatch(true);
    }
    if (targetGame === 'karuta') {
      return generateKarutaMatch(8, 'poem');
    }
    return [{ word: 'りんご', by: 'seed', timestamp: Date.now() }];
  };

  const handleStartSolo = () => {
    if (!game) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    onClose();
    onStartSolo(game);
  };

  const handleChallengeFriend = async (friend: FriendUser) => {
    if (!game || challengingUid) return;
    setChallengingUid(friend.uid);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});

    try {
      const deck = getDeckForGame(game);
      const res = await duelService.createDuel(friend.uid, game, deck);
      if (res.ok) {
        onClose();
        onStartMultiplayer(game, res.data.id);
      } else {
        Alert.alert('Duel Request Failed', res.error.message);
      }
    } catch (err: any) {
      Alert.alert('Duel Error', err?.message || 'Failed to challenge friend');
    } finally {
      setChallengingUid(null);
    }
  };

  const handleChallengeByCode = async () => {
    if (!game || isSubmittingCode) return;
    const cleanCode = directCode.trim().replace(/[^A-HJ-NP-Z2-9]/gi, '').toUpperCase();
    if (cleanCode.length !== 8) {
      Alert.alert('Invalid Code', 'Please enter a valid 8-character friend code.');
      return;
    }

    setIsSubmittingCode(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});

    try {
      const deck = getDeckForGame(game);
      const res = await duelService.createDuel(cleanCode, game, deck);
      if (res.ok) {
        onClose();
        onStartMultiplayer(game, res.data.id);
      } else {
        Alert.alert('Duel Request Failed', res.error.message);
      }
    } catch (err: any) {
      Alert.alert('Duel Error', err?.message || 'Failed to challenge code');
    } finally {
      setIsSubmittingCode(false);
    }
  };

  const handleStartQuickMatch = async () => {
    if (!game || isSearchingRef.current) return;
    isSearchingRef.current = true;
    setIsSearchingQuickMatch(true);
    setSearchElapsed(0);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});

    const deck = getDeckForGame(game);

    // Initial check/queue
    try {
      const initRes = await duelService.quickMatch(game, deck);
      if (initRes.ok && initRes.data.matched && initRes.data.id) {
        stopQuickMatch();
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
        onClose();
        onStartMultiplayer(game, initRes.data.id);
        return;
      }
      if (!initRes.ok) {
        console.warn('[QuickMatch] Initial queue error:', initRes.error);
      }
    } catch (err) {
      console.error('[QuickMatch] Network exception:', err);
    }

    // Start timer counter
    searchTimerRef.current = setInterval(() => {
      setSearchElapsed(prev => prev + 1);
    }, 1000);

    // Polling loop every 1.5s
    const pollMatchmaking = async () => {
      if (!isSearchingRef.current) return;
      try {
        const res = await duelService.quickMatch(game, deck);
        if (res.ok && res.data.matched && res.data.id) {
          stopQuickMatch();
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
          onClose();
          onStartMultiplayer(game, res.data.id);
          return;
        }
        if (!res.ok) {
          console.warn('[QuickMatch] Polling response error:', res.error);
        }
      } catch (pollErr) {
        console.error('[QuickMatch] Polling exception:', pollErr);
      }

      if (isSearchingRef.current) {
        searchPollRef.current = setTimeout(pollMatchmaking, 1500);
      }
    };

    searchPollRef.current = setTimeout(pollMatchmaking, 1500);
  };

  if (!visible || !game) return null;

  const gameInfo = {
    kanjiDuel: {
      title: '漢字決闘 • Kanji Duel',
      subtitle: '1000 HP Speed Strike Combat',
      icon: <Zap size={24} color="#8B5CF6" />,
      themeColor: '#8B5CF6',
      desc: 'Real-time kanji stroke count battle! Fast answers deal heavy damage to your opponent.',
    },
    karuta: {
      title: '競技かるた • Competitive Karuta',
      subtitle: 'Tatami Mat Reaction Slap Battle',
      icon: <Layers size={24} color="#F59E0B" />,
      themeColor: '#F59E0B',
      desc: 'Listen to classical poems or vocabulary and slap the matching card before your opponent.',
    },
    shiritori: {
      title: 'しりとり • Shiritori Arena',
      subtitle: 'Authentic Word-Chain Duel',
      icon: <Swords size={24} color="#EF4444" />,
      themeColor: '#EF4444',
      desc: 'Turn-based Japanese word chaining. Last kana becomes first kana. Avoid words ending in ん!',
    },
  }[game];

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      presentationStyle="fullScreen"
      onRequestClose={() => {
        stopQuickMatch();
        onClose();
      }}
    >
      <View style={[styles.container, { backgroundColor: theme.background, paddingTop: insets.top }]}>
        {/* Top Header */}
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <Pressable
            onPress={() => {
              stopQuickMatch();
              onClose();
            }}
            style={[styles.closeBtn, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            hitSlop={8}
            accessibilityLabel="Close battle lobby"
          >
            <X size={20} color={theme.textPrimary} />
          </Pressable>

          <View style={styles.headerTitleWrap}>
            <Text style={[styles.headerTitle, { color: theme.textPrimary }]}>
              {gameInfo.title}
            </Text>
            <Text style={[styles.headerSubtitle, { color: theme.textSecondary }]}>
              {gameInfo.subtitle}
            </Text>
          </View>
        </View>

        {/* Tab Switcher: Solo vs AI vs Live PvP */}
        <View style={[styles.tabBar, { backgroundColor: theme.surfaceSubtle }]}>
          <Pressable
            onPress={() => {
              stopQuickMatch();
              setTab('pvp');
            }}
            style={[
              styles.tabBtn,
              tab === 'pvp' && [styles.activeTabBtn, { backgroundColor: theme.surface }],
            ]}
          >
            <Swords size={16} color={tab === 'pvp' ? gameInfo.themeColor : theme.textMuted} />
            <Text
              style={[
                styles.tabBtnText,
                { color: tab === 'pvp' ? theme.textPrimary : theme.textMuted },
                tab === 'pvp' && styles.tabBtnTextActive,
              ]}
            >
              ⚔️ Live PvP Duel
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              stopQuickMatch();
              setTab('solo');
            }}
            style={[
              styles.tabBtn,
              tab === 'solo' && [styles.activeTabBtn, { backgroundColor: theme.surface }],
            ]}
          >
            <Bot size={16} color={tab === 'solo' ? '#10B981' : theme.textMuted} />
            <Text
              style={[
                styles.tabBtnText,
                { color: tab === 'solo' ? theme.textPrimary : theme.textMuted },
                tab === 'solo' && styles.tabBtnTextActive,
              ]}
            >
              🤖 Solo vs Bot
            </Text>
          </Pressable>
        </View>

        <ScrollView
          style={styles.contentScroll}
          contentContainerStyle={[styles.contentContainer, { paddingBottom: insets.bottom + 32 }]}
          keyboardShouldPersistTaps="handled"
        >
          {tab === 'solo' ? (
            /* Solo Mode Card */
            <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <View style={[styles.badgePill, { backgroundColor: '#10B98118' }]}>
                <Text style={[styles.badgePillText, { color: '#10B981' }]}>OFFLINE PRACTICE</Text>
              </View>

              <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>
                Practice vs AI Champion
              </Text>
              <Text style={[styles.cardDesc, { color: theme.textSecondary }]}>
                Sharpen your skills offline against Tanuki, Kitsune, and Tengu bots before entering the live PvP arena.
              </Text>

              <Pressable
                onPress={handleStartSolo}
                style={[styles.launchBtn, { backgroundColor: '#10B981' }]}
              >
                <Text style={styles.launchBtnText}>Play Solo vs Bot</Text>
                <ArrowRight size={18} color="#FFFFFF" />
              </Pressable>
            </View>
          ) : (
            /* Live PvP Content */
            <>
              {/* Quick Match Card */}
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: theme.surface,
                    borderColor: isSearchingQuickMatch ? gameInfo.themeColor : theme.border,
                  },
                ]}
              >
                <View style={styles.cardHeaderRow}>
                  <View style={[styles.badgePill, { backgroundColor: `${gameInfo.themeColor}20` }]}>
                    <Text style={[styles.badgePillText, { color: gameInfo.themeColor }]}>
                      ⚡ INSTANT MATCHMAKING
                    </Text>
                  </View>
                  {isSearchingQuickMatch && (
                    <Text style={[styles.elapsedText, { color: theme.textSecondary }]}>
                      {searchElapsed}s elapsed
                    </Text>
                  )}
                </View>

                <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>
                  Random Online Quick Match
                </Text>
                <Text style={[styles.cardDesc, { color: theme.textSecondary }]}>
                  Automatically finds an online learner in the global queue for an immediate live lockstep duel.
                </Text>

                {isSearchingQuickMatch ? (
                  <View style={styles.searchingWrap}>
                    <ActivityIndicator size="small" color={gameInfo.themeColor} style={{ marginRight: 10 }} />
                    <Text style={[styles.searchingText, { color: theme.textPrimary }]}>
                      Searching for opponent...
                    </Text>
                    <Pressable
                      onPress={stopQuickMatch}
                      style={[styles.cancelBtn, { borderColor: theme.border }]}
                    >
                      <Text style={[styles.cancelBtnText, { color: theme.textSecondary }]}>Cancel</Text>
                    </Pressable>
                  </View>
                ) : (
                  <Pressable
                    onPress={handleStartQuickMatch}
                    style={[styles.launchBtn, { backgroundColor: gameInfo.themeColor }]}
                  >
                    <Zap size={18} color="#FFFFFF" />
                    <Text style={styles.launchBtnText}>Find Match</Text>
                  </Pressable>
                )}
              </View>

              {/* Direct Friend Code Challenge */}
              <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                <View style={[styles.badgePill, { backgroundColor: '#3B82F620' }]}>
                  <Text style={[styles.badgePillText, { color: '#3B82F6' }]}>DIRECT CODE</Text>
                </View>
                <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>
                  Challenge by Friend Code
                </Text>
                <Text style={[styles.cardDesc, { color: theme.textSecondary }]}>
                  Duel anyone instantly by entering their 8-character Manabu code.
                </Text>

                <View style={styles.inputRow}>
                  <TextInput
                    value={directCode}
                    onChangeText={setDirectCode}
                    placeholder="e.g. K7MQ-2XRD"
                    placeholderTextColor={theme.textMuted}
                    autoCapitalize="characters"
                    autoCorrect={false}
                    maxLength={10}
                    style={[
                      styles.codeInput,
                      {
                        backgroundColor: theme.surfaceSubtle,
                        borderColor: theme.border,
                        color: theme.textPrimary,
                      },
                    ]}
                  />
                  <Pressable
                    onPress={handleChallengeByCode}
                    disabled={isSubmittingCode || directCode.trim().length < 8}
                    style={[
                      styles.codeBtn,
                      {
                        backgroundColor:
                          directCode.trim().length >= 8 ? '#3B82F6' : theme.surfaceSubtle,
                      },
                    ]}
                  >
                    {isSubmittingCode ? (
                      <ActivityIndicator size="small" color="#FFFFFF" />
                    ) : (
                      <>
                        <Send size={16} color={directCode.trim().length >= 8 ? '#FFFFFF' : theme.textMuted} />
                        <Text
                          style={[
                            styles.codeBtnText,
                            {
                              color:
                                directCode.trim().length >= 8 ? '#FFFFFF' : theme.textMuted,
                            },
                          ]}
                        >
                          Send
                        </Text>
                      </>
                    )}
                  </Pressable>
                </View>
              </View>

              {/* Clan Friends List */}
              <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                <View style={[styles.badgePill, { backgroundColor: '#F59E0B20' }]}>
                  <Text style={[styles.badgePillText, { color: '#F59E0B' }]}>CLAN MEMBERS</Text>
                </View>
                <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>
                  Challenge a Clan Friend
                </Text>

                {friends.length === 0 ? (
                  <View style={styles.emptyFriends}>
                    <Text style={[styles.emptyFriendsText, { color: theme.textSecondary }]}>
                      No clan friends yet. Share your code from the Profile tab or challenge any player above!
                    </Text>
                  </View>
                ) : (
                  <View style={styles.friendsList}>
                    {friends.map(friend => {
                      const isChallengingThis = challengingUid === friend.uid;
                      return (
                        <View
                          key={friend.uid}
                          style={[
                            styles.friendItem,
                            { backgroundColor: theme.surfaceSubtle, borderColor: theme.border },
                          ]}
                        >
                          <View style={styles.friendInfo}>
                            <Text style={styles.friendAvatar}>{friend.avatarEmoji || '🥋'}</Text>
                            <View style={styles.friendMeta}>
                              <Text style={[styles.friendName, { color: theme.textPrimary }]}>
                                {friend.displayName}
                              </Text>
                              <Text style={[styles.friendSub, { color: theme.textSecondary }]}>
                                {friend.beltRank.toUpperCase()} • LV {friend.level} • {friend.weeklyXp} XP
                              </Text>
                            </View>
                          </View>

                          <Pressable
                            onPress={() => handleChallengeFriend(friend)}
                            disabled={isChallengingThis}
                            style={[styles.friendDuelBtn, { backgroundColor: gameInfo.themeColor }]}
                          >
                            {isChallengingThis ? (
                              <ActivityIndicator size="small" color="#FFFFFF" />
                            ) : (
                              <>
                                <Swords size={14} color="#FFFFFF" />
                                <Text style={styles.friendDuelBtnText}>Duel</Text>
                              </>
                            )}
                          </Pressable>
                        </View>
                      );
                    })}
                  </View>
                )}
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
  },
  closeBtn: {
    width: 38,
    height: 38,
    borderRadius: radii.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  headerTitleWrap: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '500',
  },
  tabBar: {
    flexDirection: 'row',
    marginHorizontal: spacing.md,
    marginTop: spacing.md,
    padding: 4,
    borderRadius: radii.lg,
  },
  tabBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: radii.md,
    gap: 6,
  },
  activeTabBtn: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabBtnText: {
    fontSize: 13,
    fontWeight: '600',
  },
  tabBtnTextActive: {
    fontWeight: '800',
  },
  contentScroll: {
    flex: 1,
  },
  contentContainer: {
    padding: spacing.md,
    gap: spacing.md,
  },
  card: {
    borderRadius: radii.lg,
    borderWidth: 1,
    padding: spacing.md,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  badgePill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.full,
    marginBottom: spacing.xs,
  },
  badgePillText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  elapsedText: {
    fontSize: 12,
    fontWeight: '600',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: spacing.md,
  },
  launchBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: radii.md,
    gap: 8,
  },
  launchBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  searchingWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  searchingText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '600',
  },
  cancelBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.sm,
    borderWidth: 1,
  },
  cancelBtnText: {
    fontSize: 12,
    fontWeight: '600',
  },
  inputRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  codeInput: {
    flex: 1,
    height: 44,
    borderRadius: radii.md,
    borderWidth: 1,
    paddingHorizontal: spacing.sm,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },
  codeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: radii.md,
    gap: 6,
  },
  codeBtnText: {
    fontSize: 13,
    fontWeight: '700',
  },
  emptyFriends: {
    paddingVertical: spacing.sm,
  },
  emptyFriendsText: {
    fontSize: 13,
    lineHeight: 18,
  },
  friendsList: {
    gap: spacing.xs,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.sm,
    borderRadius: radii.md,
    borderWidth: 1,
  },
  friendInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: spacing.sm,
  },
  friendAvatar: {
    fontSize: 24,
    marginRight: 10,
  },
  friendMeta: {
    flex: 1,
  },
  friendName: {
    fontSize: 14,
    fontWeight: '700',
  },
  friendSub: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 2,
  },
  friendDuelBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radii.sm,
    gap: 4,
  },
  friendDuelBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
