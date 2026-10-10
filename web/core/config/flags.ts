/**
 * Application Feature Flags configuration object
 */

export const FEATURE_FLAGS = {
  enableFSRS6: true,
  enableDuels: true,
  enableArcade: true,
  enableAdminPanel: true,
  enableSyncService: true,
  enableOfflineMode: true,
  enableVoicePacks: true,
} as const;

export type FeatureFlag = keyof typeof FEATURE_FLAGS;

export function isFeatureEnabled(flag: FeatureFlag): boolean {
  return FEATURE_FLAGS[flag] ?? false;
}
