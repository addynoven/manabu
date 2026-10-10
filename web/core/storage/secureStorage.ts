/**
 * Secure / Session Storage Helper for Auth Tokens in Web Workstation
 */

export const secureStore = {
  getAuthToken(): string | null {
    if (typeof window === 'undefined') return null;
    try {
      return window.sessionStorage.getItem('manabu_auth_token') || window.localStorage.getItem('manabu_auth_token');
    } catch {
      return null;
    }
  },

  setAuthToken(token: string): void {
    if (typeof window === 'undefined') return;
    try {
      window.sessionStorage.setItem('manabu_auth_token', token);
      window.localStorage.setItem('manabu_auth_token', token);
    } catch (err) {
      console.warn('[secureStore] Failed to store auth token:', err);
    }
  },

  clearAuthToken(): void {
    if (typeof window === 'undefined') return;
    try {
      window.sessionStorage.removeItem('manabu_auth_token');
      window.localStorage.removeItem('manabu_auth_token');
    } catch (err) {
      console.warn('[secureStore] Failed to clear auth token:', err);
    }
  },
};
