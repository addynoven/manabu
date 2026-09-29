import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

export const secureStorage = {
  async setItem(key: string, value: string): Promise<void> {
    if (Platform.OS === 'web') {
      try {
        localStorage.setItem(`secure_${key}`, value);
      } catch {}
      return;
    }
    await SecureStore.setItemAsync(key, value);
  },

  async getItem(key: string): Promise<string | null> {
    if (Platform.OS === 'web') {
      try {
        return localStorage.getItem(`secure_${key}`);
      } catch {
        return null;
      }
    }
    return await SecureStore.getItemAsync(key);
  },

  async removeItem(key: string): Promise<void> {
    if (Platform.OS === 'web') {
      try {
        localStorage.removeItem(`secure_${key}`);
      } catch {}
      return;
    }
    await SecureStore.deleteItemAsync(key);
  },
};
