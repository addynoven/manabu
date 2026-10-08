import { NextRequest, NextResponse } from 'next/server';
import { getValkey } from '@/lib/valkey';
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

export const runtime = 'nodejs';

const BUNDLE_MAP: Record<string, () => unknown> = {
  curriculum: () => MANABU_CURRICULUM,
  kana: () => ({ hiragana: HIRAGANA_DATA, katakana: KATAKANA_DATA }),
  'kanji-n5': () => kanjiN5,
  'kanji-n4': () => kanjiN4,
  'kanji-n3': () => kanjiN3,
  'kanji-n2': () => kanjiN2,
  'kanji-n1': () => kanjiN1,
  'vocab-n5': () => vocabN5,
  'vocab-n4': () => vocabN4,
  'vocab-n3': () => vocabN3,
  'vocab-n2': () => vocabN2,
  'vocab-n1': () => vocabN1,
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ bundle: string }> }
) {
  const { bundle } = await params;
  const loader = BUNDLE_MAP[bundle];

  if (!loader) {
    return NextResponse.json(
      { error: `Content bundle '${bundle}' not found` },
      { status: 404 }
    );
  }

  const bundleEtag = `"bundle-${bundle}-v2"`;
  const ifNoneMatch = req.headers.get('if-none-match');

  if (ifNoneMatch === bundleEtag) {
    return new NextResponse(null, { status: 304 });
  }

  const cacheKey = `content:bundle:${bundle}:v2`;

  // 1. Try Valkey in-memory Redis cache first
  try {
    const valkey = getValkey();
    const cached = await valkey.get(cacheKey);
    if (cached) {
      return new NextResponse(cached, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ETag: bundleEtag,
          'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
          'X-Cache': 'HIT-VALKEY',
        },
      });
    }
  } catch (valkeyErr) {
    console.warn(`[Content API] Valkey read error for ${cacheKey}:`, valkeyErr);
  }

  // 2. Cache miss / fallback: load data and serialize
  const data = loader();
  const payload = JSON.stringify({
    bundle,
    version: 2,
    data,
  });

  // Populate Valkey cache asynchronously for subsequent requests
  try {
    const valkey = getValkey();
    valkey.set(cacheKey, payload, 'EX', 60 * 60 * 24 * 30).catch(() => {});
  } catch {}

  return new NextResponse(payload, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      ETag: bundleEtag,
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      'X-Cache': 'MISS-VALKEY',
    },
  });
}
