import { describe, it, expect, vi, beforeEach } from 'vitest';
import { contentSyncService } from '../contentSync.service';
import { appStorage } from '../../storage/mmkv';
import { apiClient } from '../../api/httpClient';

vi.mock('../../api/httpClient', () => ({
  apiClient: {
    get: vi.fn(),
  },
}));

describe('ContentSyncService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    contentSyncService.clearLocalContent();
  });

  it('returns version 0 and fallback data when cache is empty', () => {
    expect(contentSyncService.getContentVersion()).toBe(0);

    const fallback = [{ id: 1, name: 'Default' }];
    const result = contentSyncService.getContentBundle('kanji-n5', fallback);
    expect(result).toEqual(fallback);
  });

  it('updates local cache and version when backend has newer version', async () => {
    const mockManifest = {
      version: 2,
      updatedAt: '2026-10-03T00:00:00Z',
      bundles: {
        'kanji-n5': {
          id: 'kanji-n5',
          version: 2,
          etag: 'v2',
          url: '/api/v1/content/kanji-n5',
          itemCount: 1,
        },
      },
    };

    const mockBundleData = [{ id: 101, kanjiChar: '水' }];
    const mockCurriculumData = [{ id: 'unit_1', unitNumber: 1, title: 'Synced Week 1' }];

    vi.mocked(apiClient.get).mockImplementation(async (endpoint: string) => {
      if (endpoint === '/api/v1/content/manifest') {
        return {
          ok: true,
          data: {
            ...mockManifest,
            bundles: {
              ...mockManifest.bundles,
              curriculum: {
                id: 'curriculum',
                version: 2,
                etag: 'v2',
                url: '/api/v1/content/curriculum',
                itemCount: 1,
              },
            },
          },
        } as any;
      }
      if (endpoint === '/api/v1/content/kanji-n5') {
        return { ok: true, data: { bundle: 'kanji-n5', version: 2, data: mockBundleData } } as any;
      }
      if (endpoint === '/api/v1/content/curriculum') {
        return { ok: true, data: { bundle: 'curriculum', version: 2, data: mockCurriculumData } } as any;
      }
      return { ok: false, error: { message: 'Not found' } } as any;
    });

    const syncRes = await contentSyncService.checkForUpdates();
    expect(syncRes.updated).toBe(true);
    expect(syncRes.version).toBe(2);
    expect(contentSyncService.getContentVersion()).toBe(2);

    // Verify cache returns updated backend data
    const cachedKanji = contentSyncService.getContentBundle('kanji-n5', []);
    expect(cachedKanji).toEqual(mockBundleData);

    const cachedCurriculum = contentSyncService.getContentBundle('curriculum', []);
    expect(cachedCurriculum).toEqual(mockCurriculumData);
  });

  it('skips downloading when local version is up to date', async () => {
    // Pretend local version is already 2
    appStorage.setItem('content_version', '2');

    const mockManifest = {
      version: 2,
      updatedAt: '2026-10-03T00:00:00Z',
      bundles: {},
    };

    vi.mocked(apiClient.get).mockResolvedValue({
      ok: true,
      data: mockManifest,
    } as any);

    const syncRes = await contentSyncService.checkForUpdates();
    expect(syncRes.updated).toBe(false);
    expect(syncRes.version).toBe(2);
    // Should NOT fetch bundles
    expect(apiClient.get).toHaveBeenCalledTimes(1);
  });

  it('clears all local bundles and resets version on clearLocalContent', () => {
    appStorage.setItem('content_version', '3');
    appStorage.setItem('content_bundle_kanji-n5', JSON.stringify([{ id: 1 }]));

    expect(contentSyncService.getContentVersion()).toBe(3);

    contentSyncService.clearLocalContent();

    expect(contentSyncService.getContentVersion()).toBe(0);
    const fallback = [{ fallback: true }];
    expect(contentSyncService.getContentBundle('kanji-n5', fallback)).toEqual(fallback);
  });
});
