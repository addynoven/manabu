import { clientStorage } from '../../../core/storage/mmkv';
import { type UserProfile, UserProfileSchema } from '../models/auth.model';

const STORAGE_KEY_USER = 'manabu_auth_user';

export const authStorage = {
  getCurrentUser(): UserProfile | null {
    const raw = clientStorage.getItem(STORAGE_KEY_USER);
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      const validated = UserProfileSchema.safeParse(parsed);
      return validated.success ? validated.data : null;
    } catch {
      return null;
    }
  },

  saveUser(user: UserProfile): void {
    clientStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
  },

  clearSession(): void {
    clientStorage.removeItem(STORAGE_KEY_USER);
  },
};
