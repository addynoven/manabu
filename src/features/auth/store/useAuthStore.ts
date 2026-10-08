import { create } from 'zustand';
import { authStorage } from '../storage/auth.storage';
import { authService } from '../services/auth.service';
import { type AuthMode, type UserProfile } from '../models/auth.model';
import { useProgressStore } from '../../progress/store/useProgressStore';
import { cloudSyncService } from '../../sync/services/cloudSync.service';
import { purgeLocalUserData } from '../services/purgeUserData';

export interface AuthState {
  currentUser: UserProfile | null;
  isLoading: boolean;
  errorMessage: string | null;
  authMode: AuthMode;
  resetPasswordSent: boolean;

  setAuthMode: (mode: AuthMode) => void;
  clearError: () => void;
  signInWithGoogle: () => Promise<boolean>;
  signInWithEmail: (email: string, pass: string) => Promise<boolean>;
  signUpWithEmail: (email: string, pass: string, name?: string) => Promise<boolean>;
  sendPasswordReset: (email: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  initAuthListener: () => () => void;
}

export const useAuthStore = create<AuthState>((set, get) => {
  const initialUser = authStorage.getCurrentUser();

  return {
    currentUser: initialUser,
    isLoading: false,
    errorMessage: null,
    authMode: 'login',
    resetPasswordSent: false,

    setAuthMode: mode => set({ authMode: mode, errorMessage: null }),
    clearError: () => set({ errorMessage: null }),

    signInWithGoogle: async () => {
      set({ isLoading: true, errorMessage: null });
      try {
        const user = await authService.signInWithGoogle();
        set({ currentUser: user, isLoading: false });

        // Update progress store identity if user had default name
        const progress = useProgressStore.getState();
        if (user.displayName && (!progress.displayName || progress.displayName === 'Manabu Student')) {
          progress.setDisplayName(user.displayName);
        }

        // Sync with Firestore Cloud
        cloudSyncService.syncOnAuthChange(user.uid).catch(() => {});

        return true;
      } catch (err: any) {
        const message = err?.message || 'Google Sign-In failed. Please try again.';
        set({ errorMessage: message, isLoading: false });
        return false;
      }
    },

    signInWithEmail: async (email, pass) => {
      if (!email.trim() || !pass) {
        set({ errorMessage: 'Please enter both email and password.' });
        return false;
      }
      set({ isLoading: true, errorMessage: null });
      try {
        const user = await authService.loginWithEmail(email, pass);
        set({ currentUser: user, isLoading: false });

        const progress = useProgressStore.getState();
        if (user.displayName && (!progress.displayName || progress.displayName === 'Manabu Student')) {
          progress.setDisplayName(user.displayName);
        }

        // Sync with Firestore Cloud
        cloudSyncService.syncOnAuthChange(user.uid).catch(() => {});

        return true;
      } catch (err: any) {
        let msg = err?.message || 'Failed to sign in.';
        if (err?.code === 'auth/invalid-credential' || err?.code === 'auth/wrong-password') {
          msg = 'Incorrect email or password.';
        } else if (err?.code === 'auth/user-not-found') {
          msg = 'No account found with this email.';
        } else if (err?.code === 'auth/invalid-email') {
          msg = 'Please enter a valid email address.';
        }
        set({ errorMessage: msg, isLoading: false });
        return false;
      }
    },

    signUpWithEmail: async (email, pass, name) => {
      if (!email.trim() || !pass) {
        set({ errorMessage: 'Please enter an email and password.' });
        return false;
      }
      if (pass.length < 6) {
        set({ errorMessage: 'Password must be at least 6 characters.' });
        return false;
      }
      set({ isLoading: true, errorMessage: null });
      try {
        const user = await authService.signUpWithEmail(email, pass, name);
        set({ currentUser: user, isLoading: false });

        if (name?.trim()) {
          useProgressStore.getState().setDisplayName(name.trim());
        }

        // Sync with Firestore Cloud
        cloudSyncService.syncOnAuthChange(user.uid).catch(() => {});

        return true;
      } catch (err: any) {
        let msg = err?.message || 'Failed to create account.';
        if (err?.code === 'auth/email-already-in-use') {
          msg = 'An account with this email already exists.';
        } else if (err?.code === 'auth/weak-password') {
          msg = 'Password is too weak. Please use at least 6 characters.';
        } else if (err?.code === 'auth/invalid-email') {
          msg = 'Please enter a valid email address.';
        }
        set({ errorMessage: msg, isLoading: false });
        return false;
      }
    },

    sendPasswordReset: async email => {
      if (!email.trim()) {
        set({ errorMessage: 'Please enter your email to reset password.' });
        return false;
      }
      set({ isLoading: true, errorMessage: null });
      try {
        await authService.sendPasswordReset(email);
        set({ isLoading: false, resetPasswordSent: true });
        return true;
      } catch (err: any) {
        let msg = err?.message || 'Could not send reset email.';
        if (err?.code === 'auth/user-not-found') {
          msg = 'No account found with this email.';
        }
        set({ errorMessage: msg, isLoading: false });
        return false;
      }
    },

    signOut: async () => {
      set({ isLoading: true });
      try {
        await authService.signOut();
      } finally {
        authStorage.clearSession();
        purgeLocalUserData();
        set({ currentUser: null, isLoading: false, errorMessage: null });
      }
    },

    initAuthListener: () => {
      authService.configure();
      return authService.onAuthStateChanged(user => {
        set({ currentUser: user });
        if (user?.uid) {
          cloudSyncService.syncOnAuthChange(user.uid).catch(() => {});
        }
      });
    },
  };
});
