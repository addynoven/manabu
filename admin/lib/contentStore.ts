/**
 * Browser-side IndexedDB content storage and synchronization service.
 * Keeps an offline copy of all learning content (curriculum, kana, kanji, vocab).
 * When backend bumps version, drops/replaces outdated bundles in IndexedDB.
 */

const DB_NAME = 'manabu_content_db';
const DB_VERSION = 1;
const STORE_BUNDLES = 'bundles';
const STORE_META = 'meta';

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB not supported in this environment'));
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = event => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_BUNDLES)) {
        db.createObjectStore(STORE_BUNDLES, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_META)) {
        db.createObjectStore(STORE_META, { keyPath: 'key' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getCachedBundle<T>(bundleId: string): Promise<T | null> {
  try {
    const db = await openDatabase();
    return new Promise(resolve => {
      const tx = db.transaction(STORE_BUNDLES, 'readonly');
      const store = tx.objectStore(STORE_BUNDLES);
      const req = store.get(bundleId);
      req.onsuccess = () => {
        if (req.result && req.result.data) {
          resolve(req.result.data as T);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function setCachedBundle(bundleId: string, version: number, data: unknown): Promise<void> {
  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_BUNDLES, 'readwrite');
      const store = tx.objectStore(STORE_BUNDLES);
      const req = store.put({
        id: bundleId,
        version,
        data,
        cachedAt: Date.now(),
      });
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn(`[ContentStore] Failed to cache bundle ${bundleId}:`, err);
  }
}

export async function getCachedVersion(): Promise<number> {
  try {
    const db = await openDatabase();
    return new Promise(resolve => {
      const tx = db.transaction(STORE_META, 'readonly');
      const store = tx.objectStore(STORE_META);
      const req = store.get('content_version');
      req.onsuccess = () => {
        if (req.result && typeof req.result.value === 'number') {
          resolve(req.result.value);
        } else {
          resolve(0);
        }
      };
      req.onerror = () => resolve(0);
    });
  } catch {
    return 0;
  }
}

export async function setCachedVersion(version: number): Promise<void> {
  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_META, 'readwrite');
      const store = tx.objectStore(STORE_META);
      const req = store.put({ key: 'content_version', value: version, updatedAt: Date.now() });
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('[ContentStore] Failed to save content version:', err);
  }
}

let isSyncInProgress = false;

/**
 * Checks backend manifest. If version is newer, downloads bundles and updates IndexedDB.
 * Bundles are fetched in prioritized batches to avoid locking the network thread or freezing tabs.
 */
export async function syncContentWithBackend(): Promise<{ updated: boolean; version: number }> {
  if (typeof window === 'undefined') return { updated: false, version: 0 };
  if (isSyncInProgress) return { updated: false, version: 0 };

  isSyncInProgress = true;
  try {
    const localVersion = await getCachedVersion();
    const manifestRes = await fetch('/api/v1/content/manifest', {
      headers: { 'Cache-Control': 'no-cache' },
    });

    if (!manifestRes.ok) {
      return { updated: false, version: localVersion };
    }

    const manifest = await manifestRes.json();
    const remoteVersion: number = manifest.version || 1;

    if (remoteVersion <= localVersion && localVersion > 0) {
      return { updated: false, version: localVersion };
    }

    // Version bumped or first run: prioritize critical bundles
    const allKeys = Object.keys(manifest.bundles || {});
    const priority = ['curriculum', 'kana'];
    const remaining = allKeys.filter(k => !priority.includes(k));
    const sortedKeys = [...priority.filter(k => allKeys.includes(k)), ...remaining];

    // Download in sequential batches of 2 with small pauses to avoid network pileup
    const BATCH_SIZE = 2;
    for (let i = 0; i < sortedKeys.length; i += BATCH_SIZE) {
      const batch = sortedKeys.slice(i, i + BATCH_SIZE);
      await Promise.all(
        batch.map(async key => {
          try {
            const bundleRes = await fetch(`/api/v1/content/${key}`);
            if (bundleRes.ok) {
              const body = await bundleRes.json();
              await setCachedBundle(key, remoteVersion, body.data);
            }
          } catch (fetchErr) {
            console.warn(`[ContentStore] Failed downloading bundle ${key}:`, fetchErr);
          }
        })
      );
      // Yield to main thread
      await new Promise(r => setTimeout(r, 60));
    }

    await setCachedVersion(remoteVersion);
    return { updated: true, version: remoteVersion };
  } catch (err) {
    console.warn('[ContentStore] Sync failed:', err);
    return { updated: false, version: 0 };
  } finally {
    isSyncInProgress = false;
  }
}
