import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: {
    configure: vi.fn(),
    hasPlayServices: vi.fn().mockResolvedValue(true),
    signIn: vi.fn(),
    signOut: vi.fn().mockResolvedValue(null),
  },
  statusCodes: {},
}));

import { useAuthStore } from '../store/useAuthStore';
import { authStorage } from '../storage/auth.storage';
import { authService } from '../services/auth.service';

describe('AuthStore', () => {
  beforeEach(() => {
    authStorage.clearSession();
    useAuthStore.setState({
      currentUser: null,
      isLoading: false,
      errorMessage: null,
      authMode: 'login',
      resetPasswordSent: false,
    });
    vi.restoreAllMocks();
  });

  it('initializes with null user and login mode', () => {
    const state = useAuthStore.getState();
    expect(state.currentUser).toBeNull();
    expect(state.authMode).toBe('login');
    expect(state.isLoading).toBe(false);
  });

  it('switches auth modes cleanly', () => {
    const store = useAuthStore.getState();
    store.setAuthMode('signup');
    expect(useAuthStore.getState().authMode).toBe('signup');
    expect(useAuthStore.getState().errorMessage).toBeNull();
  });

  it('validates empty inputs on email login', async () => {
    const store = useAuthStore.getState();
    const success = await store.signInWithEmail('', '');
    expect(success).toBe(false);
    expect(useAuthStore.getState().errorMessage).toContain('Please enter both email and password');
  });

  it('validates password length on signup', async () => {
    const store = useAuthStore.getState();
    const success = await store.signUpWithEmail('test@example.com', '123');
    expect(success).toBe(false);
    expect(useAuthStore.getState().errorMessage).toContain('at least 6 characters');
  });

  it('handles sign out correctly', async () => {
    const mockUser = {
      uid: 'user-123',
      email: 'student@manabu.app',
      displayName: 'Kenji',
      avatarEmoji: '🥋',
      authProvider: 'email' as const,
      isEmailVerified: true,
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
    };
    useAuthStore.setState({ currentUser: mockUser });
    authStorage.saveUser(mockUser);

    vi.spyOn(authService, 'signOut').mockResolvedValue();

    await useAuthStore.getState().signOut();

    expect(useAuthStore.getState().currentUser).toBeNull();
    expect(authStorage.getCurrentUser()).toBeNull();
  });
});
