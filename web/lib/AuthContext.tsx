'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import {
  User,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut as fbSignOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { firebaseAuth, googleAuthProvider } from './firebaseClient';
import { getWeekId } from './helpers';

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string;
  avatarEmoji: string;
  beltRank: string;
  level: number;
  totalXp: number;
  weeklyXp: number;
  weekId: string;
  currentStreak: number;
  lastActiveDate: string | null;
  friendCode: string;
  daily?: {
    date: string;
    score: number;
    timeSeconds: number;
    accuracy: number;
  } | null;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string, displayName: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<UserProfile | null>;
  clearError: () => void;
}

const CACHE_PROFILE_KEY = 'manabu_auth_profile';

function getInitialProfile(): UserProfile | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CACHE_PROFILE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfileState] = useState<UserProfile | null>(getInitialProfile);
  const [user, setUser] = useState<User | null>(() => {
    // If cached profile exists, user is considered locally authenticated while Firebase connects
    return null;
  });
  const [loading, setLoading] = useState<boolean>(() => !getInitialProfile());
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => setError(null), []);

  const setProfile = useCallback((newProfile: UserProfile | null) => {
    setProfileState(newProfile);
    if (typeof window !== 'undefined') {
      try {
        if (newProfile) {
          localStorage.setItem(CACHE_PROFILE_KEY, JSON.stringify(newProfile));
        } else {
          localStorage.removeItem(CACHE_PROFILE_KEY);
        }
      } catch {}
    }
  }, []);

  const syncProfileToPostgres = useCallback(async (firebaseUser: User, customDisplayName?: string) => {
    try {
      const token = await firebaseUser.getIdToken();
      // First try to GET profile
      const getRes = await fetch('/api/v1/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (getRes.ok) {
        const data = await getRes.json();
        if (data.profile) {
          setProfile(data.profile);
          return data.profile;
        }
      }

      // If not found or fresh user, PUT /api/v1/profile into PostgreSQL
      const name = (customDisplayName || firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Learner').trim().slice(0, 24);
      const putRes = await fetch('/api/v1/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          displayName: name,
          avatarEmoji: '🥋',
          beltRank: 'white',
          level: 1,
          totalXp: 0,
          weeklyXp: 0,
          weekId: getWeekId(),
          currentStreak: 1,
        }),
      });

      if (putRes.ok) {
        const putData = await putRes.json();
        if (putData.profile) {
          setProfile(putData.profile);
          return putData.profile;
        }
      }
      return null;
    } catch (err: unknown) {
      console.error('[AuthContext] Error syncing profile with PostgreSQL:', err);
      return null;
    }
  }, [setProfile]);

  const refreshProfile = useCallback(async (): Promise<UserProfile | null> => {
    if (!firebaseAuth.currentUser) {
      setProfile(null);
      return null;
    }
    return syncProfileToPostgres(firebaseAuth.currentUser);
  }, [syncProfileToPostgres, setProfile]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (fbUser) => {
      setUser(fbUser);
      if (fbUser) {
        await syncProfileToPostgres(fbUser);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [syncProfileToPostgres, setProfile]);

  const signInWithGoogle = async () => {
    setError(null);
    try {
      const result = await signInWithPopup(firebaseAuth, googleAuthProvider);
      await syncProfileToPostgres(result.user);
    } catch (err: any) {
      console.error('[AuthContext] Google Sign In error:', err);
      setError(err?.message || 'Google Sign-In failed. Please try again.');
      throw err;
    }
  };

  const signInWithEmail = async (email: string, pass: string) => {
    setError(null);
    try {
      const result = await signInWithEmailAndPassword(firebaseAuth, email.trim(), pass);
      await syncProfileToPostgres(result.user);
    } catch (err: any) {
      console.error('[AuthContext] Email Sign In error:', err);
      let msg = 'Failed to sign in. Please check your credentials.';
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        msg = 'Invalid email or password.';
      } else if (err.code === 'auth/too-many-requests') {
        msg = 'Too many attempts. Please wait a few moments and try again.';
      }
      setError(msg);
      throw new Error(msg);
    }
  };

  const signUpWithEmail = async (email: string, pass: string, displayName: string) => {
    setError(null);
    try {
      const trimmedName = displayName.trim().slice(0, 24) || email.split('@')[0];
      const result = await createUserWithEmailAndPassword(firebaseAuth, email.trim(), pass);
      await updateProfile(result.user, { displayName: trimmedName });
      await syncProfileToPostgres(result.user, trimmedName);
    } catch (err: any) {
      console.error('[AuthContext] Email Sign Up error:', err);
      let msg = 'Failed to create account. Please try again.';
      if (err.code === 'auth/email-already-in-use') {
        msg = 'An account with this email address already exists.';
      } else if (err.code === 'auth/weak-password') {
        msg = 'Password should be at least 6 characters.';
      } else if (err.code === 'auth/invalid-email') {
        msg = 'Please enter a valid email address.';
      }
      setError(msg);
      throw new Error(msg);
    }
  };

  const signOut = async () => {
    setError(null);
    try {
      await fbSignOut(firebaseAuth);
      setUser(null);
      setProfile(null);
    } catch (err: any) {
      console.error('[AuthContext] Sign Out error:', err);
      setError('Failed to sign out.');
      throw err;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        error,
        signInWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        signOut,
        refreshProfile,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
