import { describe, it, expect, beforeEach } from 'vitest';
import { useProgressStore } from '../store/useProgressStore';

describe('useProgressStore - Character Mastery & Backup', () => {
  beforeEach(() => {
    useProgressStore.getState().resetAllStats();
  });

  it('records correct answers and advances to mastered after 10 correct attempts (100%)', () => {
    // 10 correct answers for あ
    for (let i = 0; i < 10; i++) {
      useProgressStore.getState().recordAnswer('あ', true, 'kana');
    }

    const mastery = useProgressStore.getState().getCharacterMastery('あ');
    expect(mastery).toBeDefined();
    expect(mastery?.correct).toBe(10);
    expect(mastery?.incorrect).toBe(0);
    expect(mastery?.total).toBe(10);
    expect(mastery?.accuracy).toBe(100);
    expect(mastery?.masteryLevel).toBe('mastered');

    const masteredList = useProgressStore.getState().getMasteredCharacters('kana');
    expect(masteredList.map(m => m.character)).toContain('あ');
  });

  it('records wrong answers and classifies as needs-practice after low accuracy', () => {
    // 5 wrong answers for か
    for (let i = 0; i < 5; i++) {
      useProgressStore.getState().recordAnswer('か', false, 'kana');
    }

    const mastery = useProgressStore.getState().getCharacterMastery('か');
    expect(mastery?.correct).toBe(0);
    expect(mastery?.incorrect).toBe(5);
    expect(mastery?.accuracy).toBe(0);
    expect(mastery?.masteryLevel).toBe('needs-practice');

    const weakest = useProgressStore.getState().getWeakestCharacters('kana');
    expect(weakest.length).toBeGreaterThan(0);
    expect(weakest[0]?.character).toBe('か');
  });

  it('exports and imports backup data faithfully', () => {
    // Set some stats and mastery
    useProgressStore.getState().recordAnswer('日', true, 'kanji');
    useProgressStore.getState().recordAnswer('日', true, 'kanji');
    useProgressStore.getState().recordAnswer('本', false, 'kanji');

    const exported = useProgressStore.getState().exportBackup();
    expect(exported).toContain('"version": 1');
    expect(exported).toContain('"日"');
    expect(exported).toContain('"本"');

    // Reset store
    useProgressStore.getState().resetAllStats();
    expect(useProgressStore.getState().totalQuestionsAnswered).toBe(0);
    expect(useProgressStore.getState().getCharacterMastery('日')).toBeNull();

    // Import backup
    const result = useProgressStore.getState().importBackup(exported);
    expect(result.success).toBe(true);

    const restoredNichi = useProgressStore.getState().getCharacterMastery('日');
    expect(restoredNichi?.correct).toBe(2);
    expect(useProgressStore.getState().totalQuestionsAnswered).toBe(3);
  });

  it('rejects corrupted or invalid backup JSON', () => {
    const invalidResult = useProgressStore.getState().importBackup('{"invalid": true}');
    expect(invalidResult.success).toBe(false);
    expect(invalidResult.error).toBeDefined();

    const notJsonResult = useProgressStore.getState().importBackup('NOT_JSON');
    expect(notJsonResult.success).toBe(false);
  });
});
