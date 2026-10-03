import { httpClient } from '../api/httpClient';

/**
 * Feature flags configuration with compile-time defaults
 * and remote kill switch telemetry support.
 * Blueprint §5.6 / v3_plan §6.4
 */
export const flags = {
  enableKanjiDojo: true,
  enableVocabDojo: true,
  enableKanaCharts: true,
  enableHapticFeedback: true,
  enableAudioEffects: true,
  enableStreaks: true,
  enableSocial: true,
  enableDuels: true,
};

export type FeatureFlagKey = keyof typeof flags;

export interface RemoteConfig {
  social: boolean;
  duels: boolean;
  minAppVersion: number;
}

let remoteConfigCache: RemoteConfig = {
  social: true,
  duels: true,
  minAppVersion: 1,
};

export function isSocialEnabled(): boolean {
  return flags.enableSocial && remoteConfigCache.social;
}

export function isDuelsEnabled(): boolean {
  return flags.enableDuels && remoteConfigCache.duels;
}

export async function fetchRemoteConfig(): Promise<RemoteConfig> {
  const result = await httpClient<RemoteConfig>('https://manabu-admin.vercel.app/api/v1/config', {
    timeoutMs: 5000,
  });

  if (result.ok) {
    remoteConfigCache = result.data;
  }
  return remoteConfigCache;
}
