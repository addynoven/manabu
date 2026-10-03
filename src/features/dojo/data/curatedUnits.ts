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
    return contentSyncService.getContentBundle<DojoUnit[]>('curriculum', ALL_DOJO_UNITS);
  } catch {
    return ALL_DOJO_UNITS;
  }
}

export const CURATED_DOJO_UNITS: DojoUnit[] = getCuratedUnits();
export { ALL_DOJO_UNITS };

