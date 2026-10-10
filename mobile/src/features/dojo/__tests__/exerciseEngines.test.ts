import { describe, it, expect } from 'vitest';
import type { LessonItem, MatchPairItem } from '../models/dojo.model';

describe('Dojo Exercise Engines Specification', () => {
  it('validates Cloze (Fill-in-the-Blank) item data structure', () => {
    const clozeItem: LessonItem = {
      id: 'cloze_test_1',
      type: 'cloze',
      prompt: '田中さんは先生です。',
      romaji: 'Tanaka-san wa sensei desu.',
      english: 'Mr. Tanaka is a teacher.',
      audioText: '田中さんは先生です。',
      correctAnswer: 'は',
      clozeSentence: '田中さん {{BLANK}} 先生です。',
      clozeTarget: 'は',
      clozeOptions: ['は', 'が', 'を', 'に'],
    };

    expect(clozeItem.type).toBe('cloze');
    expect(clozeItem.clozeSentence).toContain('{{BLANK}}');
    expect(clozeItem.clozeOptions).toContain(clozeItem.correctAnswer);
    expect(clozeItem.clozeOptions?.length).toBe(4);
  });

  it('validates Sentence Scramble (Word Order) token ordering and assembly', () => {
    const scrambleItem: LessonItem = {
      id: 'scramble_test_1',
      type: 'scramble',
      prompt: '私はお茶を飲みます。',
      romaji: 'Watashi wa ocha o nomimasu.',
      english: 'I drink tea.',
      audioText: '私はお茶を飲みます。',
      correctAnswer: '私はお茶を飲みます',
      scrambleTokens: ['お茶を', '飲みます', '私は', 'コーヒーを'],
      scrambleSolution: ['私は', 'お茶を', '飲みます'],
    };

    const assembled = ['私は', 'お茶を', '飲みます'];
    expect(assembled.join('')).toBe(scrambleItem.correctAnswer);
    expect(scrambleItem.scrambleTokens?.length).toBeGreaterThan(scrambleItem.scrambleSolution?.length || 0);
  });

  it('validates Matching Pairs 2-column elimination data', () => {
    const pairs: MatchPairItem[] = [
      { id: 'p1', left: '寿司', right: 'Sushi' },
      { id: 'p2', left: 'お茶', right: 'Green tea' },
      { id: 'p3', left: '水', right: 'Water' },
      { id: 'p4', left: 'ご飯', right: 'Rice / meal' },
    ];

    const matchItem: LessonItem = {
      id: 'match_test_1',
      type: 'match',
      prompt: '寿司・お茶・水・ご飯',
      romaji: 'sushi, ocha, mizu, gohan',
      english: 'Food and drink matching',
      audioText: '寿司、お茶、水、ご飯',
      correctAnswer: 'all',
      matchPairs: pairs,
    };

    expect(matchItem.matchPairs?.length).toBe(4);
    const matchedSet = new Set<string>();
    pairs.forEach(p => matchedSet.add(p.id));
    expect(matchedSet.size).toBe(4);
  });

  it('validates Dialogue Turn-Taking conversational thread items', () => {
    const dialogueItem: LessonItem = {
      id: 'dialogue_test_1',
      type: 'dialogue',
      prompt: 'はじめまして、田中です。よろしくお願いします。',
      romaji: 'Hajimemashite, Tanaka desu.',
      english: 'Tanaka: Nice to meet you, I am Tanaka.',
      audioText: 'はじめまして、田中です。よろしくお願いします。',
      correctAnswer: 'はじめまして、スミスです。こちらこそ！',
      dialogueSpeaker: 'Tanaka',
      dialoguePrompt: 'はじめまして、田中です。よろしくお願いします。',
      dialogueOptions: [
        'はじめまして、スミスです。こちらこそ！',
        'さようなら',
        'いいえ、結構です',
        'ごちそうさまでした',
      ],
    };

    expect(dialogueItem.dialogueSpeaker).toBe('Tanaka');
    expect(dialogueItem.dialogueOptions).toContain(dialogueItem.correctAnswer);
  });

  it('validates Speech Drill prompt and bypass capability', () => {
    const speechItem: LessonItem = {
      id: 'speech_test_1',
      type: 'speak',
      prompt: 'こんにちは',
      romaji: 'konnichiwa',
      english: 'Hello / Good afternoon',
      audioText: 'こんにちは',
      correctAnswer: 'こんにちは',
      targetSpeech: 'こんにちは',
      phoneticHint: 'kon-ni-chi-wa',
    };

    expect(speechItem.type).toBe('speak');
    expect(speechItem.targetSpeech).toBe('こんにちは');
  });

  it('validates Listening Dictation audio-first assembly', () => {
    const dictateItem: LessonItem = {
      id: 'dictate_test_1',
      type: 'dictate',
      prompt: '駅はどこですか？',
      romaji: 'Eki wa doko desu ka?',
      english: 'Where is the train station?',
      audioText: '駅はどこですか？',
      correctAnswer: '駅はどこですか',
      dictateTokens: ['どこですか', '駅は', '交番は', '右です'],
      dictateSolution: ['駅は', 'どこですか'],
    };

    const userAssembled = ['駅は', 'どこですか'];
    expect(userAssembled.join('')).toBe(dictateItem.dictateSolution?.join(''));
  });
});
