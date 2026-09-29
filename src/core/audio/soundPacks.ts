import * as Haptics from 'expo-haptics';

export type SoundPackType = 'wooden' | 'mechanical' | 'digital' | 'bubble';

export function playClickSound(pack: SoundPackType = 'wooden') {
  try {
    switch (pack) {
      case 'wooden':
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
        break;
      case 'mechanical':
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
        break;
      case 'digital':
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
        break;
      case 'bubble':
        Haptics.selectionAsync().catch(() => {});
        break;
    }
  } catch {
    // Ignore audio errors on unsupported environments
  }
}
