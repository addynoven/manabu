import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithCredential,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import { Platform } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { firebaseAuth, GOOGLE_WEB_CLIENT_ID } from '../../../core/api/firebase';
import { authStorage } from '../storage/auth.storage';
import { type UserProfile } from '../models/auth.model';

export function configureGoogleSignIn(): void {
  if (Platform.OS !== 'web' && GoogleSignin && typeof GoogleSignin.configure === 'function') {
    try {
      GoogleSignin.configure({
        webClientId: GOOGLE_WEB_CLIENT_ID,
      });
    } catch (err) {
      console.warn('[AuthService] GoogleSignin.configure failed:', err);
    }
  }
}

export function mapFirebaseUserToProfile(user: User, providerOverride?: 'google' | 'email'): UserProfile {
  let provider: 'google' | 'email' | 'anonymous' = 'anonymous';
  if (providerOverride) {
    provider = providerOverride;
  } else if (user.isAnonymous) {
    provider = 'anonymous';
  } else if (user.providerData.some(p => p.providerId === 'google.com')) {
    provider = 'google';
  } else if (user.providerData.some(p => p.providerId === 'password')) {
    provider = 'email';
  }

  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || user.email?.split('@')[0] || 'Manabu Student',
    avatarUrl: user.photoURL,
    avatarEmoji: '🥋',
    authProvider: provider,
    isEmailVerified: user.emailVerified,
    createdAt: user.metadata.creationTime || new Date().toISOString(),
    lastLoginAt: user.metadata.lastSignInTime || new Date().toISOString(),
  };
}

export const authService = {
  configure: configureGoogleSignIn,

  async signInWithGoogle(): Promise<UserProfile> {
    if (!GoogleSignin) {
      throw new Error('Google Play Services are not available in this environment.');
    }

    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    try {
      await GoogleSignin.signOut();
    } catch {}

    const response = await GoogleSignin.signIn();
    // Support newer GoogleSignin v16+ ({ data: { idToken } }) and previous format
    const idToken = (response as any)?.data?.idToken || (response as any)?.idToken;
    if (!idToken) {
      throw new Error('Google Sign-In did not return a valid authentication token.');
    }

    const credential = GoogleAuthProvider.credential(idToken);
    const userCredential = await signInWithCredential(firebaseAuth, credential);
    const profile = mapFirebaseUserToProfile(userCredential.user, 'google');
    authStorage.saveUser(profile);
    return profile;
  },

  async loginWithEmail(email: string, pass: string): Promise<UserProfile> {
    const userCredential = await signInWithEmailAndPassword(firebaseAuth, email.trim(), pass);
    const profile = mapFirebaseUserToProfile(userCredential.user, 'email');
    authStorage.saveUser(profile);
    return profile;
  },

  async signUpWithEmail(email: string, pass: string, name?: string): Promise<UserProfile> {
    const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email.trim(), pass);
    if (name?.trim()) {
      await updateProfile(userCredential.user, { displayName: name.trim() });
    }
    const profile = mapFirebaseUserToProfile(userCredential.user, 'email');
    authStorage.saveUser(profile);
    return profile;
  },

  async sendPasswordReset(email: string): Promise<void> {
    await sendPasswordResetEmail(firebaseAuth, email.trim());
  },

  async signOut(): Promise<void> {
    try {
      try {
        await GoogleSignin.signOut();
      } catch (gErr) {
        console.warn('[AuthService] GoogleSignin.signOut error:', gErr);
      }
      try {
        await firebaseSignOut(firebaseAuth);
      } catch (fErr) {
        console.warn('[AuthService] firebaseSignOut error:', fErr);
      }
    } finally {
      authStorage.clearSession();
    }
  },

  onAuthStateChanged(callback: (profile: UserProfile | null) => void): () => void {
    try {
      return onAuthStateChanged(firebaseAuth, user => {
        if (user) {
          const profile = mapFirebaseUserToProfile(user);
          authStorage.saveUser(profile);
          callback(profile);
        } else {
          authStorage.clearSession();
          callback(null);
        }
      });
    } catch (e) {
      console.warn('[AuthService] onAuthStateChanged listener error:', e);
      return () => {};
    }
  },
};
