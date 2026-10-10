import type { DojoUnit } from '../models/dojo.model';
import unitsData from '../../../../../data/units/units.json';
import { contentSyncService } from '../../../core/content/contentSync.service';

export const ALL_DOJO_UNITS = unitsData as unknown as DojoUnit[];

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
