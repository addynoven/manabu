import * as Speech from 'expo-speech';

export interface SpeakOptions {
  rate?: number;
  pitch?: number;
  onStart?: () => void;
  onDone?: () => void;
  onError?: (error: Error) => void;
}

let cachedVoiceIdentifier: string | null = null;
let isResolvingVoice = false;

/**
 * Discovers and caches the best available Japanese voice on the device.
 */
async function getBestJapaneseVoice(): Promise<string | undefined> {
  if (cachedVoiceIdentifier) return cachedVoiceIdentifier;
  if (isResolvingVoice) return undefined;

  try {
    isResolvingVoice = true;
    if (typeof Speech.getAvailableVoicesAsync === 'function') {
      const voices = await Speech.getAvailableVoicesAsync();
      const jaVoice = voices.find(
        (v) =>
          v.language?.toLowerCase().startsWith('ja') ||
          v.identifier?.toLowerCase().includes('ja-jp')
      );
      if (jaVoice?.identifier) {
        cachedVoiceIdentifier = jaVoice.identifier;
        return jaVoice.identifier;
      }
    }
  } catch {
    // If voice resolution is unavailable, fallback to default language code
  } finally {
    isResolvingVoice = false;
  }
  return undefined;
}

/**
 * Cleans text for Japanese TTS pronunciation.
 * Strips romaji hints or brackets if any exist in the input string.
 */
export function cleanJapaneseText(text: string): string {
  if (!text) return '';
  // Remove romaji annotations in parentheses (e.g. "食べる (taberu)" -> "食べる")
  return text
    .replace(/\s*\([a-zA-Z\s\-~]+\)/g, '')
    .replace(/\s*（[a-zA-Z\s\-~]+）/g, '')
    .trim();
}

/**
 * Speaks text using the device's native Japanese voice.
 */
export async function speakJapanese(
  text: string,
  options: SpeakOptions = {}
): Promise<void> {
  const cleaned = cleanJapaneseText(text);
  if (!cleaned) return;

  try {
    const isSpeaking = await Speech.isSpeakingAsync();
    if (isSpeaking) {
      await Speech.stop();
      // Allow Android TextToSpeech engine time to flush audio buffers cleanly
      await new Promise((resolve) => setTimeout(resolve, 120));
    }

    const voiceIdentifier = await getBestJapaneseVoice();
    const { rate = 1.0, pitch = 1.0, onStart, onDone, onError } = options;

    onStart?.();

    Speech.speak(cleaned, {
      language: 'ja-JP',
      voice: voiceIdentifier,
      rate: Math.max(0.5, Math.min(rate, 1.5)),
      pitch: Math.max(0.5, Math.min(pitch, 1.5)),
      onDone,
      onStopped: onDone,
      onError: (err) => {
        const errorObj = err instanceof Error ? err : new Error(String(err));
        console.warn('[TTS] Speech playback error:', errorObj.message);
        onError?.(errorObj);
      },
    });
  } catch (error) {
    const errorObj = error instanceof Error ? error : new Error(String(error));
    console.warn('[TTS] Failed to initialize speech:', errorObj.message);
    options.onError?.(errorObj);
  }
}

/**
 * Stops any ongoing Japanese speech playback.
 */
export async function stopJapaneseSpeech(): Promise<void> {
  try {
    await Speech.stop();
  } catch {
    // Ignore error when stopping already idle speech
  }
}

/**
 * Checks if speech is currently playing.
 */
export async function isSpeakingJapanese(): Promise<boolean> {
  try {
    return await Speech.isSpeakingAsync();
  } catch {
    return false;
  }
}
