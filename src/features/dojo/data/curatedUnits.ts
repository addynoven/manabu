import type { DojoUnit } from '../models/dojo.model';
import { ALL_DOJO_UNITS } from './units';
import { contentSyncService } from '../../../core/content/contentSync.service';

/**
 * Resolves curriculum units:
 * First checks local cache for bundles synced from the backend Single Source of Truth;
 * falls back to bundled units for 100% offline support.
 */
export function getCuratedUnits(): DojoUnit[] {
  try {
    const cached = contentSyncService.getContentBundle<DojoUnit[]>('curriculum', ALL_DOJO_UNITS);
    if (
      Array.isArray(cached) &&
      cached.length > 0 &&
      Array.isArray(cached[0]?.lessons) &&
      cached[0].lessons.length > 0 &&
      Array.isArray(cached[0].lessons[0]?.items) &&
      cached[0].lessons[0].items.length > 0
    ) {
      return cached;
    }
  } catch {
    // Fallback to static units
  }
  return ALL_DOJO_UNITS;
}

export const CURATED_DOJO_UNITS: DojoUnit[] = getCuratedUnits();
export { ALL_DOJO_UNITS };

