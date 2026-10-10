import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Svg, { Path, Rect, Text as SvgText } from 'react-native-svg';
import {
  Map,
  BrainCircuit,
  Swords,
  Mail,
  ShieldCheck,
  Sparkles,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAuthStore } from '../features/auth/store/useAuthStore';
import { GoogleSignInButton } from '../features/auth/components/GoogleSignInButton';

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const {
    signInWithGoogle,
    isLoading,
    errorMessage,
    setAuthMode,
  } = useAuthStore();

  const handleGoogleSignIn = async () => {
    const success = await signInWithGoogle();
    if (success) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      router.replace('/(tabs)');
    }
  };

  const handleEmailSignIn = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setAuthMode('login');
    router.push('/auth');
  };

  const handleCreateAccount = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    setAuthMode('signup');
    router.push('/auth');
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {/* Top Header Badge */}
      <View style={styles.topBar}>
        <View style={styles.badgePill}>
          <View style={styles.pulseDot} />
          <Text style={styles.badgeText}>JLPT N5 – N1 STUDIO</Text>
        </View>
        <View style={styles.regionBadge}>
          <Text style={styles.regionText}>日本語 • DOJO</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Emblem & Branding Section */}
        <View style={styles.heroSection}>
          <View style={styles.toriiEmblemWrapper}>
            <View style={styles.toriiCard}>
              <Svg width={54} height={54} viewBox="0 0 64 64">
                {/* Torii Top Curved Kasagi Beam */}
                <Path d="M6 14C18 10 46 10 58 14" stroke="#c74a4a" strokeWidth={4.5} strokeLinecap="round" />
                <Path d="M4 11C20 7 44 7 60 11" stroke="#e06363" strokeWidth={2} strokeLinecap="round" />
                {/* Secondary Straight Shimaki Beam */}
                <Path d="M10 23H54" stroke="#c74a4a" strokeWidth={3.5} strokeLinecap="round" />
                {/* Central Gakuzuka Plate with Kanji '学' inside */}
                <Rect x="28" y="14" width="8" height="9" rx="1.5" fill="#082630" stroke="#c74a4a" strokeWidth={1.5} />
                <SvgText x="32" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="6.5" fill="#f0f4f6" textAnchor="middle">
                  学
                </SvgText>
                {/* Pillars */}
                <Path d="M18 15L15 54" stroke="#c74a4a" strokeWidth={4} strokeLinecap="round" />
                <Path d="M46 15L49 54" stroke="#c74a4a" strokeWidth={4} strokeLinecap="round" />
                {/* Foundation Stones */}
                <Path d="M11 54H19" stroke="#8fa2aa" strokeWidth={3} strokeLinecap="round" />
                <Path d="M45 54H53" stroke="#8fa2aa" strokeWidth={3} strokeLinecap="round" />
              </Svg>
            </View>
            <View style={styles.dojoStamp}>
              <Text style={styles.dojoStampText}>道場</Text>
            </View>
          </View>

          <View style={styles.titleRow}>
            <Text style={styles.brandKanji}>学ぶ</Text>
            <Text style={styles.brandEnglish}>Manabu</Text>
          </View>
          <Text style={styles.heroTagline}>
            Deliberate Japanese mastery platform engineered for high-retention fluency.
          </Text>
        </View>

        {/* 3 Core Benefit Feature Cards */}
        <View style={styles.featuresSection}>
          {/* Card 1: 30-Week Master Curriculum */}
          <View style={styles.featureCard}>
            <View style={[styles.featureIconBox, { borderColor: 'rgba(199, 74, 74, 0.3)' }]}>
              <Map size={20} color="#c74a4a" />
            </View>
            <View style={styles.featureContent}>
              <View style={styles.featureHeaderRow}>
                <Text style={styles.featureTitle}>30-Week Master Curriculum</Text>
                <View style={styles.levelTag}>
                  <Text style={styles.levelTagText}>N5 → N1</Text>
                </View>
              </View>
              <Text style={styles.featureDescription}>
                Step-by-step grammatical path covering 130 essential structures with authentic native dialogues.
              </Text>
              <View style={styles.featurePillsRow}>
                <Text style={styles.featurePill}>🌸 2,136 Joyo Kanji</Text>
                <Text style={styles.featurePill}>🎧 Native Audio</Text>
              </View>
            </View>
          </View>

          {/* Card 2: Smart SRS Memory Engine */}
          <View style={styles.featureCard}>
            <View style={[styles.featureIconBox, { borderColor: 'rgba(34, 197, 94, 0.3)' }]}>
              <BrainCircuit size={20} color="#22C55E" />
            </View>
            <View style={styles.featureContent}>
              <View style={styles.featureHeaderRow}>
                <Text style={styles.featureTitle}>Smart SRS Memory Engine</Text>
                <View style={[styles.levelTag, { backgroundColor: 'rgba(34, 197, 94, 0.15)', borderColor: 'rgba(34, 197, 94, 0.3)' }]}>
                  <Text style={[styles.levelTagText, { color: '#22C55E' }]}>FSRS-5</Text>
                </View>
              </View>
              <Text style={styles.featureDescription}>
                Predictive cloze & pitch-accent recall intervals that eliminate forgetting curves and dissolve ghost traps.
              </Text>
              <View style={styles.featurePillsRow}>
                <Text style={styles.featurePill}>⚡ 94.8% Retention</Text>
                <Text style={styles.featurePill}>👻 Ghost Buster</Text>
              </View>
            </View>
          </View>

          {/* Card 3: Multiplayer Dojo Battles */}
          <View style={styles.featureCard}>
            <View style={[styles.featureIconBox, { borderColor: 'rgba(234, 179, 8, 0.3)' }]}>
              <Swords size={20} color="#EAB308" />
            </View>
            <View style={styles.featureContent}>
              <View style={styles.featureHeaderRow}>
                <Text style={styles.featureTitle}>Multiplayer Dojo Battles</Text>
                <View style={[styles.levelTag, { backgroundColor: 'rgba(234, 179, 8, 0.15)', borderColor: 'rgba(234, 179, 8, 0.3)' }]}>
                  <Text style={[styles.levelTagText, { color: '#EAB308' }]}>PvP Live</Text>
                </View>
              </View>
              <Text style={styles.featureDescription}>
                Real-time rapid Kanji Clash, Shiritori chains, and Karuta slap duels to turn drills into instinctive reflex.
              </Text>
              <View style={styles.featurePillsRow}>
                <Text style={styles.featurePill}>⏱️ 15s Reflex Timer</Text>
                <Text style={styles.featurePill}>🏆 Clan Leagues</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Social Proof Indicator */}
        <View style={styles.socialProof}>
          <Sparkles size={14} color="#EAB308" />
          <Text style={styles.socialProofText}>
            Joined by <Text style={styles.socialProofBold}>12,400+</Text> dedicated Japanese learners
          </Text>
        </View>

        {errorMessage && (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        )}
      </ScrollView>

      {/* Sticky Bottom Actions */}
      <View style={styles.bottomBar}>
        {/* Continue with Google */}
        <GoogleSignInButton
          onPress={handleGoogleSignIn}
          isLoading={isLoading}
        />

        {/* Sign In with Email */}
        <Pressable
          onPress={handleEmailSignIn}
          disabled={isLoading}
          style={({ pressed }) => [
            styles.emailButton,
            { opacity: pressed ? 0.85 : 1 },
          ]}
        >
          <Mail size={17} color="#cae7f4" style={{ marginRight: 8 }} />
          <Text style={styles.emailButtonText}>Sign in with Email</Text>
        </Pressable>

        {/* Create Free Account Link */}
        <View style={styles.createAccountRow}>
          <Text style={styles.createAccountPrompt}>New to Manabu?</Text>
          <Pressable onPress={handleCreateAccount} hitSlop={8}>
            <Text style={styles.createAccountLink}>Create free account</Text>
          </Pressable>
        </View>

        {/* Privacy & Terms */}
        <Text style={styles.termsNotice}>
          By continuing, you agree to Manabu's Terms of Service and Privacy Policy. All progress is encrypted and protected in cloud storage.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04131a',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  badgePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(10, 50, 64, 0.75)',
    borderWidth: 1,
    borderColor: '#17424f',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#34D399',
  },
  badgeText: {
    color: '#8fa2aa',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  regionBadge: {
    backgroundColor: 'rgba(10, 50, 64, 0.75)',
    borderWidth: 1,
    borderColor: '#17424f',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  regionText: {
    color: '#8fa2aa',
    fontSize: 10,
    fontWeight: '600',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  toriiEmblemWrapper: {
    position: 'relative',
    marginBottom: 12,
  },
  toriiCard: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#082630',
    borderWidth: 1.5,
    borderColor: '#1c4e5e',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#c74a4a',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  dojoStamp: {
    position: 'absolute',
    bottom: -6,
    right: -6,
    backgroundColor: '#c74a4a',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 2,
    borderColor: '#04131a',
  },
  dojoStampText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
    marginBottom: 6,
  },
  brandKanji: {
    fontSize: 34,
    fontWeight: '900',
    color: '#f0f4f6',
    letterSpacing: -0.5,
  },
  brandEnglish: {
    fontSize: 22,
    fontWeight: '800',
    color: '#c74a4a',
    letterSpacing: 0.5,
  },
  heroTagline: {
    fontSize: 12,
    color: '#8fa2aa',
    textAlign: 'center',
    maxWidth: 290,
    lineHeight: 18,
  },
  featuresSection: {
    gap: 10,
    marginBottom: 16,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#0a3240',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#17424f',
    padding: 14,
    gap: 12,
  },
  featureIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#082630',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureContent: {
    flex: 1,
  },
  featureHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  featureTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#f0f4f6',
    letterSpacing: -0.2,
  },
  levelTag: {
    backgroundColor: 'rgba(199, 74, 74, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(199, 74, 74, 0.3)',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 1.5,
  },
  levelTagText: {
    color: '#c74a4a',
    fontSize: 9,
    fontWeight: '700',
  },
  featureDescription: {
    fontSize: 11,
    color: '#8fa2aa',
    lineHeight: 16,
    marginBottom: 6,
  },
  featurePillsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featurePill: {
    fontSize: 10,
    color: '#a8ccde',
    fontWeight: '600',
  },
  socialProof: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 6,
  },
  socialProofText: {
    color: '#8fa2aa',
    fontSize: 11,
  },
  socialProofBold: {
    color: '#f0f4f6',
    fontWeight: '700',
  },
  errorBanner: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    borderColor: 'rgba(239, 68, 68, 0.3)',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginTop: 8,
  },
  errorText: {
    color: '#F87171',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  bottomBar: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: '#04131a',
    borderTopWidth: 1,
    borderTopColor: 'rgba(23, 66, 79, 0.5)',
    gap: 10,
  },
  emailButton: {
    height: 48,
    borderRadius: 16,
    backgroundColor: '#0a3240',
    borderWidth: 1,
    borderColor: '#17424f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailButtonText: {
    color: '#f0f4f6',
    fontSize: 14,
    fontWeight: '700',
  },
  createAccountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 2,
  },
  createAccountPrompt: {
    color: '#8fa2aa',
    fontSize: 12,
  },
  createAccountLink: {
    color: '#c74a4a',
    fontSize: 12,
    fontWeight: '800',
    textDecorationLine: 'underline',
  },
  termsNotice: {
    color: 'rgba(143, 162, 170, 0.65)',
    fontSize: 9.5,
    textAlign: 'center',
    lineHeight: 14,
    paddingHorizontal: 8,
  },
});
