import type { ArcadeStats } from '../models/arcade.model';

export const arcadeRepository = {
  async getStats(uid: string): Promise<ArcadeStats | null> {
    try {
      const res = await fetch(`/api/v1/profile?uid=${encodeURIComponent(uid)}`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.arcadeStats || null;
    } catch {
      return null;
    }
  },
};
