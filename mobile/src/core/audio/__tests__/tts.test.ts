import { describe, it, expect, beforeEach, vi } from 'vitest';

const mockSpeak = vi.fn();
const mockStop = vi.fn().mockResolvedValue(undefined);
const mockIsSpeakingAsync = vi.fn().mockResolvedValue(false);

vi.mock('expo-speech', () => ({
  speak: mockSpeak,
  stop: mockStop,
  isSpeakingAsync: mockIsSpeakingAsync,
}));
vi.mock('react-native', () => ({
  Platform: { OS: 'android' },
}));

const { cleanJapaneseText, speakJapanese, stopJapaneseSpeech } = await import('../tts');


describe('Japanese TTS Engine', () => {
  beforeEach(() => {
    mockSpeak.mockClear();
    mockStop.mockClear();
    mockIsSpeakingAsync.mockClear();
    mockIsSpeakingAsync.mockImplementation(() => Promise.resolve(false));
  });

  describe('cleanJapaneseText', () => {
    it('returns empty string for falsy input', () => {
      expect(cleanJapaneseText('')).toBe('');
    });

    it('strips romaji in parentheses', () => {
      expect(cleanJapaneseText('食べる (taberu)')).toBe('食べる');
      expect(cleanJapaneseText('飲む （nomu）')).toBe('飲む');
    });

    it('preserves pure Japanese text intact', () => {
      expect(cleanJapaneseText('こんにちは')).toBe('こんにちは');
      expect(cleanJapaneseText('猫')).toBe('猫');
    });
  });

  describe('speakJapanese', () => {
    it('calls Speech.speak with ja-JP language and options', async () => {
      await speakJapanese('日本語', { rate: 1.0 });

      expect(mockSpeak).toHaveBeenCalled();
      const call = mockSpeak.mock.calls[0] as [string, any];
      expect(call[0]).toBe('日本語');
      expect(call[1].language).toBe('ja-JP');
      expect(call[1].rate).toBe(1.0);
    });

    it('clamps extreme rate values between 0.5 and 1.5', async () => {
      await speakJapanese('日本語', { rate: 3.0 });
      let call = mockSpeak.mock.calls[0] as [string, any];
      expect(call[1].rate).toBe(1.5);

      mockSpeak.mockClear();
      await speakJapanese('日本語', { rate: 0.1 });
      call = mockSpeak.mock.calls[0] as [string, any];
      expect(call[1].rate).toBe(0.5);
    });

    it('calls Speech.stop if currently speaking', async () => {
      mockIsSpeakingAsync.mockImplementation(() => Promise.resolve(true));

      await speakJapanese('はい');
      expect(mockStop).toHaveBeenCalled();
      expect(mockSpeak).toHaveBeenCalled();
    });
  });

  describe('stopJapaneseSpeech', () => {
    it('invokes Speech.stop safely', async () => {
      await stopJapaneseSpeech();
      expect(mockStop).toHaveBeenCalled();
    });
  });
});
