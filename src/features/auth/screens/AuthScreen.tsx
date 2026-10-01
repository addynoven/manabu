import React, { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  X,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { radii, shadows, spacing, useAppTheme } from '../../../core/theme';
import { useAuthStore } from '../store/useAuthStore';
import { GoogleSignInButton } from '../components/GoogleSignInButton';

export function AuthScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { colors: theme } = useAppTheme();

  const {
    authMode,
    setAuthMode,
    isLoading,
    errorMessage,
    clearError,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    sendPasswordReset,
  } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Forgot password modal state
  const [forgotModalVisible, setForgotModalVisible] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState(false);

  const handleGoogleSignIn = async () => {
    const success = await signInWithGoogle();
    if (success) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      router.back();
    }
  };

  const handleSubmit = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    if (authMode === 'login') {
      const ok = await signInWithEmail(email, password);
      if (ok) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
        router.back();
      }
    } else {
      const ok = await signUpWithEmail(email, password, displayName);
      if (ok) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
        router.back();
      }
    }
  };

  const handleSendReset = async () => {
    if (!forgotEmail.trim()) return;
    const ok = await sendPasswordReset(forgotEmail);
    if (ok) {
      setForgotSuccess(true);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background, paddingTop: insets.top },
      ]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Top Navigation */}
        <View style={styles.topNav}>
          <Pressable
            onPress={() => router.back()}
            style={[styles.backButton, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}
            hitSlop={8}
            accessibilityLabel="Go back"
          >
            <ArrowLeft size={20} color={theme.textPrimary} />
          </Pressable>
        </View>

        <ScrollView
          contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 30 }]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header Brand */}
          <View style={styles.header}>
            <View style={[styles.logoBadge, { backgroundColor: 'rgba(249, 115, 22, 0.15)', borderColor: 'rgba(249, 115, 22, 0.3)' }]}>
              <Text style={styles.logoEmoji}>⛩️</Text>
            </View>
            <Text style={[styles.title, { color: theme.textPrimary }]}>学ぶ Manabu Account</Text>
            <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
              Sync your JLPT progress, SRS review intervals & Dojo belt ranks to the cloud.
            </Text>
          </View>

          {/* Prominent Google Sign In */}
          <View style={styles.googleContainer}>
            <GoogleSignInButton
              onPress={handleGoogleSignIn}
              isLoading={isLoading}
            />
          </View>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={[styles.dividerLine, { backgroundColor: theme.border }]} />
            <Text style={[styles.dividerText, { color: theme.textMuted }]}>or with email</Text>
            <View style={[styles.dividerLine, { backgroundColor: theme.border }]} />
          </View>

          {/* Auth Mode Toggle Tabs */}
          <View style={[styles.tabBar, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border }]}>
            <Pressable
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
                setAuthMode('login');
              }}
              style={[
                styles.tabItem,
                authMode === 'login' && { backgroundColor: theme.primary },
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: authMode === 'login' ? theme.textOnPrimary : theme.textSecondary },
                  authMode === 'login' && styles.tabTextActive,
                ]}
              >
                Sign In
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
                setAuthMode('signup');
              }}
              style={[
                styles.tabItem,
                authMode === 'signup' && { backgroundColor: theme.primary },
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: authMode === 'signup' ? theme.textOnPrimary : theme.textSecondary },
                  authMode === 'signup' && styles.tabTextActive,
                ]}
              >
                Create Account
              </Text>
            </Pressable>
          </View>

          {/* Error Banner */}
          {errorMessage && (
            <View style={[styles.errorBox, { backgroundColor: 'rgba(239, 68, 68, 0.15)', borderColor: 'rgba(239, 68, 68, 0.3)' }]}>
              <AlertCircle size={18} color={theme.error} style={{ marginRight: 8 }} />
              <Text style={[styles.errorText, { color: theme.error }]}>{errorMessage}</Text>
            </View>
          )}

          {/* Form Fields */}
          <View style={styles.form}>
            {authMode === 'signup' && (
              <View style={styles.inputGroup}>
                <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>Your Name</Text>
                <View style={[styles.inputWrapper, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                  <User size={18} color={theme.textMuted} style={styles.inputIcon} />
                  <TextInput
                    style={[styles.textInput, { color: theme.textPrimary }]}
                    placeholder="Kenji Sato"
                    placeholderTextColor={theme.textMuted}
                    value={displayName}
                    onChangeText={t => {
                      clearError();
                      setDisplayName(t);
                    }}
                    autoCapitalize="words"
                  />
                </View>
              </View>
            )}

            <View style={styles.inputGroup}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>Email Address</Text>
              <View style={[styles.inputWrapper, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                <Mail size={18} color={theme.textMuted} style={styles.inputIcon} />
                <TextInput
                  style={[styles.textInput, { color: theme.textPrimary }]}
                  placeholder="student@example.com"
                  placeholderTextColor={theme.textMuted}
                  value={email}
                  onChangeText={t => {
                    clearError();
                    setEmail(t);
                  }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.passwordLabelRow}>
                <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>Password</Text>
                {authMode === 'login' && (
                  <Pressable
                    onPress={() => {
                      setForgotEmail(email);
                      setForgotSuccess(false);
                      setForgotModalVisible(true);
                    }}
                  >
                    <Text style={[styles.forgotText, { color: theme.primary }]}>Forgot?</Text>
                  </Pressable>
                )}
              </View>
              <View style={[styles.inputWrapper, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                <Lock size={18} color={theme.textMuted} style={styles.inputIcon} />
                <TextInput
                  style={[styles.textInput, { color: theme.textPrimary }]}
                  placeholder={authMode === 'signup' ? 'At least 6 characters' : '••••••••'}
                  placeholderTextColor={theme.textMuted}
                  value={password}
                  onChangeText={t => {
                    clearError();
                    setPassword(t);
                  }}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <Pressable
                  onPress={() => setShowPassword(p => !p)}
                  hitSlop={8}
                  style={styles.eyeIcon}
                >
                  {showPassword ? (
                    <EyeOff size={18} color={theme.textMuted} />
                  ) : (
                    <Eye size={18} color={theme.textMuted} />
                  )}
                </Pressable>
              </View>
            </View>

            {/* Submit Button */}
            <Pressable
              onPress={handleSubmit}
              disabled={isLoading}
              style={({ pressed }) => [
                styles.submitButton,
                {
                  backgroundColor: theme.primary,
                  transform: [{ scale: pressed && !isLoading ? 0.98 : 1 }],
                  opacity: isLoading ? 0.7 : 1,
                },
              ]}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color={theme.textOnPrimary} />
              ) : (
                <Text style={[styles.submitButtonText, { color: theme.textOnPrimary }]}>
                  {authMode === 'login' ? 'Sign In to Account' : 'Create Free Account'}
                </Text>
              )}
            </Pressable>
          </View>

          <Text style={[styles.termsText, { color: theme.textMuted }]}>
            By signing in, your study statistics and SRS review cards are encrypted and saved to your personal cloud backup.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Forgot Password Modal */}
      <Modal
        visible={forgotModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setForgotModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setForgotModalVisible(false)}
        >
          <Pressable
            style={[styles.modalCard, { backgroundColor: theme.surface, borderColor: theme.border }]}
            onPress={e => e.stopPropagation()}
          >
            <View style={styles.modalHeaderRow}>
              <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>Reset Password</Text>
              <Pressable onPress={() => setForgotModalVisible(false)} hitSlop={8}>
                <X size={20} color={theme.textMuted} />
              </Pressable>
            </View>

            {forgotSuccess ? (
              <View style={styles.resetSuccessBox}>
                <CheckCircle2 size={32} color={theme.success} />
                <Text style={[styles.resetSuccessTitle, { color: theme.textPrimary }]}>
                  Reset Link Sent!
                </Text>
                <Text style={[styles.resetSuccessDesc, { color: theme.textSecondary }]}>
                  Please check your inbox at {forgotEmail} to reset your password.
                </Text>
                <Pressable
                  onPress={() => setForgotModalVisible(false)}
                  style={[styles.modalCloseBtn, { backgroundColor: theme.primary }]}
                >
                  <Text style={[styles.modalCloseBtnText, { color: theme.textOnPrimary }]}>Done</Text>
                </Pressable>
              </View>
            ) : (
              <View>
                <Text style={[styles.modalSub, { color: theme.textSecondary }]}>
                  Enter your email address and we will send you a link to reset your password.
                </Text>
                <View style={[styles.inputWrapper, { backgroundColor: theme.surfaceSubtle, borderColor: theme.border, marginTop: 12 }]}>
                  <Mail size={18} color={theme.textMuted} style={styles.inputIcon} />
                  <TextInput
                    style={[styles.textInput, { color: theme.textPrimary }]}
                    placeholder="student@example.com"
                    placeholderTextColor={theme.textMuted}
                    value={forgotEmail}
                    onChangeText={setForgotEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoFocus
                  />
                </View>
                <Pressable
                  onPress={handleSendReset}
                  disabled={isLoading}
                  style={[styles.modalActionBtn, { backgroundColor: theme.primary, marginTop: 16 }]}
                >
                  {isLoading ? (
                    <ActivityIndicator size="small" color={theme.textOnPrimary} />
                  ) : (
                    <Text style={[styles.modalActionBtnText, { color: theme.textOnPrimary }]}>
                      Send Reset Email
                    </Text>
                  )}
                </Pressable>
              </View>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNav: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: radii.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  logoBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  logoEmoji: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: -0.4,
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 6,
    paddingHorizontal: 12,
  },
  googleContainer: {
    marginBottom: spacing.md,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.md,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  tabBar: {
    flexDirection: 'row',
    borderRadius: radii.xl,
    padding: 4,
    borderWidth: 1,
    marginBottom: spacing.base,
  },
  tabItem: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
  },
  tabTextActive: {
    fontWeight: '800',
  },
  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: radii.lg,
    borderWidth: 1,
    marginBottom: spacing.base,
  },
  errorText: {
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  form: {
    gap: spacing.base,
  },
  inputGroup: {
    gap: 6,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  passwordLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotText: {
    fontSize: 12,
    fontWeight: '700',
  },
  inputWrapper: {
    height: 48,
    borderRadius: radii.lg,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
  },
  eyeIcon: {
    padding: 4,
  },
  submitButton: {
    height: 50,
    borderRadius: radii.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    ...shadows.sm,
  },
  submitButtonText: {
    fontSize: 15,
    fontWeight: '800',
  },
  termsText: {
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
    marginTop: spacing.xl,
    paddingHorizontal: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.base,
  },
  modalCard: {
    width: '100%',
    borderRadius: radii.xl,
    padding: spacing.base,
    borderWidth: 1,
    ...shadows.md,
  },
  modalHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  modalSub: {
    fontSize: 13,
    lineHeight: 18,
  },
  modalActionBtn: {
    height: 46,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalActionBtnText: {
    fontSize: 14,
    fontWeight: '800',
  },
  resetSuccessBox: {
    alignItems: 'center',
    paddingVertical: spacing.md,
    gap: 8,
  },
  resetSuccessTitle: {
    fontSize: 16,
    fontWeight: '800',
    marginTop: 4,
  },
  resetSuccessDesc: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  modalCloseBtn: {
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: radii.lg,
    marginTop: 6,
  },
  modalCloseBtnText: {
    fontSize: 14,
    fontWeight: '800',
  },
});
