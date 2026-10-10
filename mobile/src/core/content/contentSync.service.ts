import { appStorage } from '../storage/mmkv';
import { apiClient } from '../api/httpClient';

export interface ContentManifestBundle {
  id: string;
  version: number;
  etag: string;
  url: string;
  itemCount: number;
}

export interface ContentManifest {
  version: number;
  updatedAt: string;
  bundles: Record<string, ContentManifestBundle>;
}

export interface ContentSyncResult {
  updated: boolean;
  version: number;
  error?: string;
}

const STORAGE_KEY_VERSION = 'content_version';
const STORAGE_KEY_BUNDLE_PREFIX = 'content_bundle_';

export class ContentSyncService {
  /**
   * Retrieves the currently active content version cached locally
   */
  getContentVersion(): number {
    const raw = appStorage.getItem(STORAGE_KEY_VERSION);
    return raw ? parseInt(raw, 10) : 0;
  }

  /**
   * Retrieves a content bundle from local cache, or returns fallback bundled data
   */
  getContentBundle<T>(bundleId: string, fallbackData: T): T {
    try {
      const raw = appStorage.getItem(`${STORAGE_KEY_BUNDLE_PREFIX}${bundleId}`);
      if (raw) {
        return JSON.parse(raw) as T;
      }
    } catch (err) {
      console.warn(`[ContentSync] Error parsing cached bundle '${bundleId}':`, err);
    }
    return fallbackData;
  }

  /**
   * Checks backend manifest. If backend has a newer content version,
   * downloads changed bundles and caches them in local storage.
   */
  async checkForUpdates(): Promise<ContentSyncResult> {
    try {
      const localVersion = this.getContentVersion();
      const res = await apiClient.get<ContentManifest>('/api/v1/content/manifest');

      if (!res.ok) {
        return { updated: false, version: localVersion, error: res.error.message };
      }

      const manifest = res.data;
      const remoteVersion = manifest.version || 1;

      if (remoteVersion <= localVersion && localVersion > 0) {
        return { updated: false, version: localVersion };
      }

      // Download each bundle defined in the manifest
      const bundleEntries = Object.entries(manifest.bundles || {}) as [string, ContentManifestBundle][];
      for (const [key, meta] of bundleEntries) {
        const bundleRes = await apiClient.get<{ bundle: string; version: number; data: unknown }>(
          meta.url || `/api/v1/content/${key}`
        );

        if (bundleRes.ok && bundleRes.data?.data) {
          appStorage.setItem(
            `${STORAGE_KEY_BUNDLE_PREFIX}${key}`,
            JSON.stringify(bundleRes.data.data)
          );
        }
      }

      // Update local version counter
      appStorage.setItem(STORAGE_KEY_VERSION, String(remoteVersion));

      return { updated: true, version: remoteVersion };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      return { updated: false, version: this.getContentVersion(), error: message };
    }
  }

  /**
   * Drops all cached bundles and resets content version (forces full resync)
   */
  clearLocalContent(): void {
    appStorage.removeItem(STORAGE_KEY_VERSION);
    // Common bundles to drop
    const bundles = ['curriculum', 'kana', 'kanji-n5', 'kanji-n4', 'kanji-n3', 'kanji-n2', 'kanji-n1', 'vocab-n5'];
    for (const b of bundles) {
      appStorage.removeItem(`${STORAGE_KEY_BUNDLE_PREFIX}${b}`);
    }
  }
}

export const contentSyncService = new ContentSyncService();
