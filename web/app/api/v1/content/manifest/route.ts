import { NextRequest, NextResponse } from 'next/server';
import { MANABU_CURRICULUM } from '@/data/curriculum';
import { HIRAGANA_DATA, KATAKANA_DATA } from '@/data/kana';
import kanjiN5 from '@/data/kanji_n5.json';
import kanjiN4 from '@/data/kanji_n4.json';
import kanjiN3 from '@/data/kanji_n3.json';
import kanjiN2 from '@/data/kanji_n2.json';
import kanjiN1 from '@/data/kanji_n1.json';
import vocabN5 from '@/data/vocab_n5.json';
import vocabN4 from '@/data/vocab_n4.json';
import vocabN3 from '@/data/vocab_n3.json';
import vocabN2 from '@/data/vocab_n2.json';
import vocabN1 from '@/data/vocab_n1.json';

import { getValkey } from '@/lib/valkey';

export const runtime = 'nodejs';

// Content schema version — increment when content is updated to trigger client drops & resync
export const CURRENT_CONTENT_VERSION = 2;
export const CONTENT_UPDATED_AT = '2026-10-03T07:20:00.000Z';

export async function GET(req: NextRequest) {
  const ifNoneMatch = req.headers.get('if-none-match');
  const manifestEtag = `"manabu-content-manifest-v${CURRENT_CONTENT_VERSION}"`;

  if (ifNoneMatch === manifestEtag) {
    return new NextResponse(null, { status: 304 });
  }

  const cacheKey = `content:manifest:v${CURRENT_CONTENT_VERSION}`;

  // 1. Check Valkey cache
  try {
    const valkey = getValkey();
    const cached = await valkey.get(cacheKey);
    if (cached) {
      return new NextResponse(cached, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ETag: manifestEtag,
          'Cache-Control': 'public, max-age=1800, stale-while-revalidate=86400',
          'X-Cache': 'HIT-VALKEY',
        },
      });
    }
  } catch {}

  const manifest = {
    version: CURRENT_CONTENT_VERSION,
    updatedAt: CONTENT_UPDATED_AT,
    bundles: {
      curriculum: {
        id: 'curriculum',
        version: CURRENT_CONTENT_VERSION,
        etag: `"bundle-curriculum-v${CURRENT_CONTENT_VERSION}"`,
        url: '/api/v1/content/curriculum',
        itemCount: MANABU_CURRICULUM.length,
      },
      kana: {
        id: 'kana',
        version: CURRENT_CONTENT_VERSION,
        etag: `"bundle-kana-v${CURRENT_CONTENT_VERSION}"`,
        url: '/api/v1/content/kana',
        itemCount: HIRAGANA_DATA.length + KATAKANA_DATA.length,
      },
      'kanji-n5': {
        id: 'kanji-n5',
        version: CURRENT_CONTENT_VERSION,
        etag: `"bundle-kanji-n5-v${CURRENT_CONTENT_VERSION}"`,
        url: '/api/v1/content/kanji-n5',
        itemCount: (kanjiN5 as unknown[]).length,
      },
      'kanji-n4': {
        id: 'kanji-n4',
        version: CURRENT_CONTENT_VERSION,
        etag: `"bundle-kanji-n4-v${CURRENT_CONTENT_VERSION}"`,
        url: '/api/v1/content/kanji-n4',
        itemCount: (kanjiN4 as unknown[]).length,
      },
      'kanji-n3': {
        id: 'kanji-n3',
        version: CURRENT_CONTENT_VERSION,
        etag: `"bundle-kanji-n3-v${CURRENT_CONTENT_VERSION}"`,
        url: '/api/v1/content/kanji-n3',
        itemCount: (kanjiN3 as unknown[]).length,
      },
      'kanji-n2': {
        id: 'kanji-n2',
        version: CURRENT_CONTENT_VERSION,
        etag: `"bundle-kanji-n2-v${CURRENT_CONTENT_VERSION}"`,
        url: '/api/v1/content/kanji-n2',
        itemCount: (kanjiN2 as unknown[]).length,
      },
      'kanji-n1': {
        id: 'kanji-n1',
        version: CURRENT_CONTENT_VERSION,
        etag: `"bundle-kanji-n1-v${CURRENT_CONTENT_VERSION}"`,
        url: '/api/v1/content/kanji-n1',
        itemCount: (kanjiN1 as unknown[]).length,
      },
      'vocab-n5': {
        id: 'vocab-n5',
        version: CURRENT_CONTENT_VERSION,
        etag: `"bundle-vocab-n5-v${CURRENT_CONTENT_VERSION}"`,
        url: '/api/v1/content/vocab-n5',
        itemCount: (vocabN5 as unknown[]).length,
      },
      'vocab-n4': {
        id: 'vocab-n4',
        version: CURRENT_CONTENT_VERSION,
        etag: `"bundle-vocab-n4-v${CURRENT_CONTENT_VERSION}"`,
        url: '/api/v1/content/vocab-n4',
        itemCount: (vocabN4 as unknown[]).length,
      },
      'vocab-n3': {
        id: 'vocab-n3',
        version: CURRENT_CONTENT_VERSION,
        etag: `"bundle-vocab-n3-v${CURRENT_CONTENT_VERSION}"`,
        url: '/api/v1/content/vocab-n3',
        itemCount: (vocabN3 as unknown[]).length,
      },
      'vocab-n2': {
        id: 'vocab-n2',
        version: CURRENT_CONTENT_VERSION,
        etag: `"bundle-vocab-n2-v${CURRENT_CONTENT_VERSION}"`,
        url: '/api/v1/content/vocab-n2',
        itemCount: (vocabN2 as unknown[]).length,
      },
      'vocab-n1': {
        id: 'vocab-n1',
        version: CURRENT_CONTENT_VERSION,
        etag: `"bundle-vocab-n1-v${CURRENT_CONTENT_VERSION}"`,
        url: '/api/v1/content/vocab-n1',
        itemCount: (vocabN1 as unknown[]).length,
      },
    },
  };

  const payload = JSON.stringify(manifest);

  try {
    const valkey = getValkey();
    valkey.set(cacheKey, payload, 'EX', 60 * 60 * 24 * 7).catch(() => {});
  } catch {}

  return new NextResponse(payload, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ETag: manifestEtag,
      'Cache-Control': 'public, max-age=1800, stale-while-revalidate=86400',
      'X-Cache': 'MISS-VALKEY',
    },
  });
}
