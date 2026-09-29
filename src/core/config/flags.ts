/**
 * Flat feature flags configuration.
 * Blueprint §5.6: Start flat, upgrade only when multi-dev remote-merge is required.
 */
export const flags = {
  enableKanjiDojo: true,
  enableVocabDojo: true,
  enableKanaCharts: true,
  enableHapticFeedback: true,
  enableAudioEffects: true,
  enableStreaks: true,
} as const;

export type FeatureFlagKey = keyof typeof flags;
