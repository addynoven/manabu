/**
 * Core Query Fetcher & Cache Manager Config
 */

export interface QueryConfig {
  staleTimeMs?: number;
}

export const queryConfig: QueryConfig = {
  staleTimeMs: 5 * 60 * 1000, // 5 minutes default
};
