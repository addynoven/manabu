import type { StateStorage } from 'zustand/middleware';

let mmkvInstance: any = null;
try {
  // Dynamically require so tests and web don't crash when native binaries are absent
  const { createMMKV } = require('react-native-mmkv');
  mmkvInstance = createMMKV({ id: 'manabu-storage' });
} catch {
  mmkvInstance = null;
}

class ClientStorageManager implements StateStorage {
  private memoryCache = new Map<string, string>();

  getItem(name: string): string | null {
    if (mmkvInstance) {
      const val = mmkvInstance.getString(name);
      return val !== undefined ? val : null;
    }
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        return window.localStorage.getItem(name);
      } catch {
        return this.memoryCache.get(name) ?? null;
      }
    }
    return this.memoryCache.get(name) ?? null;
  }

  setItem(name: string, value: string): void {
    if (mmkvInstance) {
      mmkvInstance.set(name, value);
      return;
    }
    this.memoryCache.set(name, value);
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        window.localStorage.setItem(name, value);
      } catch {}
    }
  }

  removeItem(name: string): void {
    if (mmkvInstance) {
      mmkvInstance.delete(name);
      return;
    }
    this.memoryCache.delete(name);
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        window.localStorage.removeItem(name);
      } catch {}
    }
  }

  clear(): void {
    if (mmkvInstance) {
      mmkvInstance.clearAll();
      return;
    }
    this.memoryCache.clear();
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        window.localStorage.clear();
      } catch {}
    }
  }
}

export const clientStorage = new ClientStorageManager();
