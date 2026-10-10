import type { ArcadeStats } from '../models/arcade.model';

let cachedStats: ArcadeStats | null = null;

export const arcadeStore = {
  get(): ArcadeStats | null {
    return cachedStats;
  },
  set(stats: ArcadeStats): void {
    cachedStats = stats;
  },
};
