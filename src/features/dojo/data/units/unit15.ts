import type { DojoUnit } from "../../models/dojo.model";

export const unit15: DojoUnit = {
  "id": "unit_15",
  "unitNumber": 15,
  "title": "Giving Explanations & Reasons",
  "titleJp": "理由と状況の説明",
  "description": "Master nuanced conjunctions and sentence endings: ~wake da, ~sei de (blame), ~okage de (gratitude), and ~no da.",
  "icon": "💡",
  "themeColor": "#0284C7",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u15_l1",
      "unitId": "unit_15",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Naturally it means that... & Thanks to (positive cause)",
      "titleJp": "わけだ・おかげで",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "わけだ",
        "おかげで",
        "せいで"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u15_l1_1",
          "type": "listen",
          "prompt": "わけだ",
          "furigana": "わけだ",
          "romaji": "wake da",
          "english": "Naturally it means that...",
          "audioText": "わけだ",
          "options": [
            "Circumstances / background situation",
            "Naturally it means that...",
            "Therefore / accordingly",
            "Confirming Misunderstanding"
          ],
          "correctAnswer": "Naturally it means that..."
        },
        {
          "id": "u15_l1_2",
          "type": "spell",
          "prompt": "わけだ",
          "furigana": "わけだ",
          "romaji": "wake da",
          "english": "Build 'Naturally it means that...'",
          "audioText": "わけだ",
          "tileBank": [
            "け",
            "わ",
            "う",
            "ぬ",
            "だ",
            "り",
            "お",
            "ひ"
          ],
          "correctAnswer": "わけだ"
        },
        {
          "id": "u15_l1_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なおかげでです。",
          "furigana": "これはいちばんたいせつなおかげでです。",
          "romaji": "Kore wa ichiban taisetsu na okage de desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Thanks to (positive cause).",
          "audioText": "これはおかげでです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なおかげでです。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l1_4",
          "type": "scramble",
          "prompt": "これはおかげでです",
          "furigana": "これはおかげでです",
          "romaji": "Kore wa okage de desu.",
          "english": "This is Thanks to (positive cause).",
          "audioText": "これはおかげでです",
          "scrambleTokens": [
            "それ",
            "これは",
            "ではありません",
            "おかげで",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "おかげで",
            "です"
          ],
          "correctAnswer": "これはおかげでです"
        },
        {
          "id": "u15_l1_5",
          "type": "speak",
          "prompt": "せいで",
          "furigana": "せいで",
          "romaji": "sei de",
          "english": "Pronounce: Due to / because of (blame)",
          "audioText": "せいで",
          "targetSpeech": "せいで",
          "options": [
            "Due to / because of (blame)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "せいで"
        },
        {
          "id": "u15_l1_6",
          "type": "dictate",
          "prompt": "せいでです",
          "furigana": "せいでです",
          "romaji": "sei de desu.",
          "english": "It is Due to / because of (blame).",
          "audioText": "せいでです",
          "dictateTokens": [
            "ではありません",
            "これ",
            "です",
            "せいで"
          ],
          "dictateSolution": [
            "せいで",
            "です"
          ],
          "correctAnswer": "せいでです"
        },
        {
          "id": "u15_l1_7",
          "type": "match",
          "prompt": "わけだ・おかげで・せいで・原因",
          "furigana": "わけだ・おかげで・せいで・げんいん",
          "romaji": "wake da, okage de, sei de, gen-in",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "わけだ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "わけだ",
              "right": "Naturally it means that...",
              "furigana": "わけだ",
              "romaji": "wake da"
            },
            {
              "id": "p_1",
              "left": "おかげで",
              "right": "Thanks to (positive cause)",
              "furigana": "おかげで",
              "romaji": "okage de"
            },
            {
              "id": "p_2",
              "left": "せいで",
              "right": "Due to / because of (blame)",
              "furigana": "せいで",
              "romaji": "sei de"
            },
            {
              "id": "p_3",
              "left": "原因",
              "right": "Cause / origin of problem",
              "furigana": "げんいん",
              "romaji": "gen-in"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l1_8",
          "type": "dialogue",
          "prompt": "わけだについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "わけだについて教えていただけますか？",
          "furigana": "わけだについて教えていただけますか？",
          "romaji": "wake da ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Naturally it means that...?",
          "audioText": "わけだについて教えていただけますか？",
          "dialogueOptions": [
            "はい、詳しくご説明いたします。",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "options": [
            "はい、詳しくご説明いたします。",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "correctAnswer": "はい、詳しくご説明いたします。"
        }
      ]
    },
    {
      "id": "u15_l2",
      "unitId": "unit_15",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Cause / origin of problem & Reason / motive",
      "titleJp": "原因・理由",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "原因",
        "理由",
        "誤解"
      ],
      "kanjiKeywords": [
        "原",
        "因",
        "理",
        "由",
        "誤",
        "解"
      ],
      "items": [
        {
          "id": "u15_l2_1",
          "type": "listen",
          "prompt": "原因",
          "furigana": "げんいん",
          "romaji": "gen-in",
          "english": "Cause / origin of problem",
          "audioText": "げんいん",
          "options": [
            "Cause / origin of problem",
            "Confirming Reason / motive",
            "Explanation",
            "Confirming As a matter of fact / actually"
          ],
          "correctAnswer": "Cause / origin of problem"
        },
        {
          "id": "u15_l2_2",
          "type": "spell",
          "prompt": "原因",
          "furigana": "げんいん",
          "romaji": "gen-in",
          "english": "Build 'Cause / origin of problem'",
          "audioText": "げんいん",
          "tileBank": [
            "げ",
            "し",
            "ん",
            "や",
            "わ",
            "い",
            "ほ",
            "ん"
          ],
          "correctAnswer": "げんいん"
        },
        {
          "id": "u15_l2_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な理由です。",
          "furigana": "これはいちばんたいせつなりゆうです。",
          "romaji": "Kore wa ichiban taisetsu na riyuu desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Reason / motive.",
          "audioText": "これは理由です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な理由です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l2_4",
          "type": "scramble",
          "prompt": "これは理由です",
          "furigana": "これはりゆうです",
          "romaji": "Kore wa riyuu desu.",
          "english": "This is Reason / motive.",
          "audioText": "これは理由です",
          "scrambleTokens": [
            "これは",
            "それ",
            "ではありません",
            "理由",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "理由",
            "です"
          ],
          "correctAnswer": "これは理由です"
        },
        {
          "id": "u15_l2_5",
          "type": "speak",
          "prompt": "誤解",
          "furigana": "ごかい",
          "romaji": "gokai",
          "english": "Pronounce: Misunderstanding",
          "audioText": "ごかい",
          "targetSpeech": "誤解",
          "options": [
            "Misunderstanding",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "誤解"
        },
        {
          "id": "u15_l2_6",
          "type": "dictate",
          "prompt": "誤解です",
          "furigana": "ごかいです",
          "romaji": "gokai desu.",
          "english": "It is Misunderstanding.",
          "audioText": "誤解です",
          "dictateTokens": [
            "これ",
            "です",
            "ではありません",
            "誤解"
          ],
          "dictateSolution": [
            "誤解",
            "です"
          ],
          "correctAnswer": "誤解です"
        },
        {
          "id": "u15_l2_7",
          "type": "match",
          "prompt": "原因・理由・誤解・実は",
          "furigana": "げんいん・りゆう・ごかい・じつは",
          "romaji": "gen-in, riyuu, gokai, jitsu wa",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "げんいん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "原因",
              "right": "Cause / origin of problem",
              "furigana": "げんいん",
              "romaji": "gen-in"
            },
            {
              "id": "p_1",
              "left": "理由",
              "right": "Reason / motive",
              "furigana": "りゆう",
              "romaji": "riyuu"
            },
            {
              "id": "p_2",
              "left": "誤解",
              "right": "Misunderstanding",
              "furigana": "ごかい",
              "romaji": "gokai"
            },
            {
              "id": "p_3",
              "left": "実は",
              "right": "As a matter of fact / actually",
              "furigana": "じつは",
              "romaji": "jitsu wa"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l2_8",
          "type": "dialogue",
          "prompt": "おかげでの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "おかげでの準備はできていますか？",
          "furigana": "おかげでの準備はできていますか？",
          "romaji": "okage de no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Thanks to (positive cause) ready?",
          "audioText": "おかげでの準備はできていますか？",
          "dialogueOptions": [
            "はい、万全です！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "options": [
            "はい、万全です！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "correctAnswer": "はい、万全です！"
        }
      ]
    },
    {
      "id": "u15_l3",
      "unitId": "unit_15",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "As a matter of fact / actually & Circumstances / background situation",
      "titleJp": "実は・事情",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "実は",
        "事情",
        "説明"
      ],
      "kanjiKeywords": [
        "実",
        "事",
        "情",
        "説",
        "明"
      ],
      "items": [
        {
          "id": "u15_l3_1",
          "type": "listen",
          "prompt": "実は",
          "furigana": "じつは",
          "romaji": "jitsu wa",
          "english": "As a matter of fact / actually",
          "audioText": "じつは",
          "options": [
            "Confirming Interpretation",
            "Confirming Reason / motive",
            "As a matter of fact / actually",
            "Thanks to (positive cause)"
          ],
          "correctAnswer": "As a matter of fact / actually"
        },
        {
          "id": "u15_l3_2",
          "type": "spell",
          "prompt": "実は",
          "furigana": "じつは",
          "romaji": "jitsu wa",
          "english": "Build 'As a matter of fact / actually'",
          "audioText": "じつは",
          "tileBank": [
            "せ",
            "は",
            "に",
            "そ",
            "ゆ",
            "ら",
            "じ",
            "つ"
          ],
          "correctAnswer": "じつは"
        },
        {
          "id": "u15_l3_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な事情です。",
          "furigana": "これはいちばんたいせつなじじょうです。",
          "romaji": "Kore wa ichiban taisetsu na jijou desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Circumstances / background situation.",
          "audioText": "これは事情です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な事情です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l3_4",
          "type": "scramble",
          "prompt": "これは事情です",
          "furigana": "これはじじょうです",
          "romaji": "Kore wa jijou desu.",
          "english": "This is Circumstances / background situation.",
          "audioText": "これは事情です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "それ",
            "です",
            "事情"
          ],
          "scrambleSolution": [
            "これは",
            "事情",
            "です"
          ],
          "correctAnswer": "これは事情です"
        },
        {
          "id": "u15_l3_5",
          "type": "speak",
          "prompt": "説明",
          "furigana": "せつめい",
          "romaji": "setsumei",
          "english": "Pronounce: Explanation",
          "audioText": "せつめい",
          "targetSpeech": "説明",
          "options": [
            "Explanation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "説明"
        },
        {
          "id": "u15_l3_6",
          "type": "dictate",
          "prompt": "説明です",
          "furigana": "せつめいです",
          "romaji": "setsumei desu.",
          "english": "It is Explanation.",
          "audioText": "説明です",
          "dictateTokens": [
            "説明",
            "これ",
            "ではありません",
            "です"
          ],
          "dictateSolution": [
            "説明",
            "です"
          ],
          "correctAnswer": "説明です"
        },
        {
          "id": "u15_l3_7",
          "type": "match",
          "prompt": "実は・事情・説明・結果",
          "furigana": "じつは・じじょう・せつめい・けっか",
          "romaji": "jitsu wa, jijou, setsumei, kekka",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じつは",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "実は",
              "right": "As a matter of fact / actually",
              "furigana": "じつは",
              "romaji": "jitsu wa"
            },
            {
              "id": "p_1",
              "left": "事情",
              "right": "Circumstances / background situation",
              "furigana": "じじょう",
              "romaji": "jijou"
            },
            {
              "id": "p_2",
              "left": "説明",
              "right": "Explanation",
              "furigana": "せつめい",
              "romaji": "setsumei"
            },
            {
              "id": "p_3",
              "left": "結果",
              "right": "Result / outcome",
              "furigana": "けっか",
              "romaji": "kekka"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l3_8",
          "type": "dialogue",
          "prompt": "せいでについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "せいでについてどう思われますか？",
          "furigana": "せいでについてどう思われますか？",
          "romaji": "sei de ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Due to / because of (blame)?",
          "audioText": "せいでについてどう思われますか？",
          "dialogueOptions": [
            "大変重要だと思います。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "options": [
            "大変重要だと思います。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "correctAnswer": "大変重要だと思います。"
        }
      ]
    },
    {
      "id": "u15_l4",
      "unitId": "unit_15",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Result / outcome & Consent / understanding / conviction",
      "titleJp": "結果・納得",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "結果",
        "納得",
        "したがって"
      ],
      "kanjiKeywords": [
        "結",
        "果",
        "納",
        "得"
      ],
      "items": [
        {
          "id": "u15_l4_1",
          "type": "listen",
          "prompt": "結果",
          "furigana": "けっか",
          "romaji": "kekka",
          "english": "Result / outcome",
          "audioText": "けっか",
          "options": [
            "Consent / understanding / conviction",
            "Confirming Reason / motive",
            "Circumstances / background situation",
            "Result / outcome"
          ],
          "correctAnswer": "Result / outcome"
        },
        {
          "id": "u15_l4_2",
          "type": "spell",
          "prompt": "結果",
          "furigana": "けっか",
          "romaji": "kekka",
          "english": "Build 'Result / outcome'",
          "audioText": "けっか",
          "tileBank": [
            "か",
            "っ",
            "け",
            "す",
            "せ",
            "ほ",
            "さ",
            "も"
          ],
          "correctAnswer": "けっか"
        },
        {
          "id": "u15_l4_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な納得です。",
          "furigana": "これはいちばんたいせつななっとくです。",
          "romaji": "Kore wa ichiban taisetsu na nattoku desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Consent / understanding / conviction.",
          "audioText": "これは納得です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な納得です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l4_4",
          "type": "scramble",
          "prompt": "これは納得です",
          "furigana": "これはなっとくです",
          "romaji": "Kore wa nattoku desu.",
          "english": "This is Consent / understanding / conviction.",
          "audioText": "これは納得です",
          "scrambleTokens": [
            "これは",
            "です",
            "ではありません",
            "納得",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "納得",
            "です"
          ],
          "correctAnswer": "これは納得です"
        },
        {
          "id": "u15_l4_5",
          "type": "speak",
          "prompt": "したがって",
          "furigana": "したがって",
          "romaji": "shitagatte",
          "english": "Pronounce: Therefore / accordingly",
          "audioText": "したがって",
          "targetSpeech": "したがって",
          "options": [
            "Therefore / accordingly",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "したがって"
        },
        {
          "id": "u15_l4_6",
          "type": "dictate",
          "prompt": "したがってです",
          "furigana": "したがってです",
          "romaji": "shitagatte desu.",
          "english": "It is Therefore / accordingly.",
          "audioText": "したがってです",
          "dictateTokens": [
            "これ",
            "ではありません",
            "です",
            "したがって"
          ],
          "dictateSolution": [
            "したがって",
            "です"
          ],
          "correctAnswer": "したがってです"
        },
        {
          "id": "u15_l4_7",
          "type": "match",
          "prompt": "結果・納得・したがって・つまり",
          "furigana": "けっか・なっとく・したがって・つまり",
          "romaji": "kekka, nattoku, shitagatte, tsumari",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "けっか",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "結果",
              "right": "Result / outcome",
              "furigana": "けっか",
              "romaji": "kekka"
            },
            {
              "id": "p_1",
              "left": "納得",
              "right": "Consent / understanding / conviction",
              "furigana": "なっとく",
              "romaji": "nattoku"
            },
            {
              "id": "p_2",
              "left": "したがって",
              "right": "Therefore / accordingly",
              "furigana": "したがって",
              "romaji": "shitagatte"
            },
            {
              "id": "p_3",
              "left": "つまり",
              "right": "In short / that is to say",
              "furigana": "つまり",
              "romaji": "tsumari"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l4_8",
          "type": "dialogue",
          "prompt": "次は原因に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は原因に進みましょう。",
          "furigana": "次は原因に進みましょう。",
          "romaji": "Tsugi wa gen-in ni susumimashou.",
          "english": "Speaker: Let's proceed to Cause / origin of problem next.",
          "audioText": "次は原因に進みましょう。",
          "dialogueOptions": [
            "了解いたしました！",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "options": [
            "了解いたしました！",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "correctAnswer": "了解いたしました！"
        }
      ]
    },
    {
      "id": "u15_l5",
      "unitId": "unit_15",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "In short / that is to say & The reason being...",
      "titleJp": "つまり・なぜなら",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "つまり",
        "なぜなら",
        "解釈"
      ],
      "kanjiKeywords": [
        "解",
        "釈"
      ],
      "items": [
        {
          "id": "u15_l5_1",
          "type": "listen",
          "prompt": "つまり",
          "furigana": "つまり",
          "romaji": "tsumari",
          "english": "In short / that is to say",
          "audioText": "つまり",
          "options": [
            "In short / that is to say",
            "Thanks to (positive cause)",
            "Confirming Naturally it means that...",
            "Cause / origin of problem"
          ],
          "correctAnswer": "In short / that is to say"
        },
        {
          "id": "u15_l5_2",
          "type": "spell",
          "prompt": "つまり",
          "furigana": "つまり",
          "romaji": "tsumari",
          "english": "Build 'In short / that is to say'",
          "audioText": "つまり",
          "tileBank": [
            "め",
            "な",
            "り",
            "い",
            "え",
            "つ",
            "ま",
            "そ"
          ],
          "correctAnswer": "つまり"
        },
        {
          "id": "u15_l5_3",
          "type": "cloze",
          "prompt": "これはいちばん大切ななぜならです。",
          "furigana": "これはいちばんたいせつななぜならです。",
          "romaji": "Kore wa ichiban taisetsu na nazenara desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important The reason being....",
          "audioText": "これはなぜならです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切ななぜならです。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l5_4",
          "type": "scramble",
          "prompt": "これはなぜならです",
          "furigana": "これはなぜならです",
          "romaji": "Kore wa nazenara desu.",
          "english": "This is The reason being....",
          "audioText": "これはなぜならです",
          "scrambleTokens": [
            "ではありません",
            "なぜなら",
            "これは",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "なぜなら",
            "です"
          ],
          "correctAnswer": "これはなぜならです"
        },
        {
          "id": "u15_l5_5",
          "type": "speak",
          "prompt": "解釈",
          "furigana": "かいしゃく",
          "romaji": "kaishaku",
          "english": "Pronounce: Interpretation",
          "audioText": "かいしゃく",
          "targetSpeech": "解釈",
          "options": [
            "Interpretation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "解釈"
        },
        {
          "id": "u15_l5_6",
          "type": "dictate",
          "prompt": "解釈です",
          "furigana": "かいしゃくです",
          "romaji": "kaishaku desu.",
          "english": "It is Interpretation.",
          "audioText": "解釈です",
          "dictateTokens": [
            "解釈",
            "ではありません",
            "です",
            "これ"
          ],
          "dictateSolution": [
            "解釈",
            "です"
          ],
          "correctAnswer": "解釈です"
        },
        {
          "id": "u15_l5_7",
          "type": "match",
          "prompt": "つまり・なぜなら・解釈・わけだの確認",
          "furigana": "つまり・なぜなら・かいしゃく・わけだのかくにん",
          "romaji": "tsumari, nazenara, kaishaku, wake da no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "つまり",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "つまり",
              "right": "In short / that is to say",
              "furigana": "つまり",
              "romaji": "tsumari"
            },
            {
              "id": "p_1",
              "left": "なぜなら",
              "right": "The reason being...",
              "furigana": "なぜなら",
              "romaji": "nazenara"
            },
            {
              "id": "p_2",
              "left": "解釈",
              "right": "Interpretation",
              "furigana": "かいしゃく",
              "romaji": "kaishaku"
            },
            {
              "id": "p_3",
              "left": "わけだの確認",
              "right": "Confirming Naturally it means that...",
              "furigana": "わけだのかくにん",
              "romaji": "wake da no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l5_8",
          "type": "dialogue",
          "prompt": "わけだについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "わけだについて教えていただけますか？",
          "furigana": "わけだについて教えていただけますか？",
          "romaji": "wake da ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Naturally it means that...?",
          "audioText": "わけだについて教えていただけますか？",
          "dialogueOptions": [
            "はい、詳しくご説明いたします。",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "options": [
            "はい、詳しくご説明いたします。",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "correctAnswer": "はい、詳しくご説明いたします。"
        }
      ]
    },
    {
      "id": "u15_l6",
      "unitId": "unit_15",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Naturally it means that... & Confirming Thanks to (positive cause)",
      "titleJp": "わけだの確認・おかげでの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "わけだの確認",
        "おかげでの確認",
        "せいでの確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "確",
        "認",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u15_l6_1",
          "type": "listen",
          "prompt": "わけだの確認",
          "furigana": "わけだのかくにん",
          "romaji": "wake da no kakunin",
          "english": "Confirming Naturally it means that...",
          "audioText": "わけだのかくにん",
          "options": [
            "Confirming Naturally it means that...",
            "The reason being...",
            "Confirming In short / that is to say",
            "Confirming Misunderstanding"
          ],
          "correctAnswer": "Confirming Naturally it means that..."
        },
        {
          "id": "u15_l6_2",
          "type": "spell",
          "prompt": "わけだの確認",
          "furigana": "わけだのかくにん",
          "romaji": "wake da no kakunin",
          "english": "Build 'Confirming Naturally it means that...'",
          "audioText": "わけだのかくにん",
          "tileBank": [
            "か",
            "わ",
            "に",
            "く",
            "だ",
            "け",
            "ん",
            "の"
          ],
          "correctAnswer": "わけだのかくにん"
        },
        {
          "id": "u15_l6_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なおかげでの確認です。",
          "furigana": "これはいちばんたいせつなおかげでのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na okage de no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Thanks to (positive cause).",
          "audioText": "これはおかげでの確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なおかげでの確認です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l6_4",
          "type": "scramble",
          "prompt": "これはおかげでの確認です",
          "furigana": "これはおかげでのかくにんです",
          "romaji": "Kore wa okage de no kakunin desu.",
          "english": "This is Confirming Thanks to (positive cause).",
          "audioText": "これはおかげでの確認です",
          "scrambleTokens": [
            "これは",
            "です",
            "ではありません",
            "おかげでの確認",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "おかげでの確認",
            "です"
          ],
          "correctAnswer": "これはおかげでの確認です"
        },
        {
          "id": "u15_l6_5",
          "type": "speak",
          "prompt": "せいでの確認",
          "furigana": "せいでのかくにん",
          "romaji": "sei de no kakunin",
          "english": "Pronounce: Confirming Due to / because of (blame)",
          "audioText": "せいでのかくにん",
          "targetSpeech": "せいでの確認",
          "options": [
            "Confirming Due to / because of (blame)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "せいでの確認"
        },
        {
          "id": "u15_l6_6",
          "type": "dictate",
          "prompt": "せいでの確認です",
          "furigana": "せいでのかくにんです",
          "romaji": "sei de no kakunin desu.",
          "english": "It is Confirming Due to / because of (blame).",
          "audioText": "せいでの確認です",
          "dictateTokens": [
            "ではありません",
            "せいでの確認",
            "これ",
            "です"
          ],
          "dictateSolution": [
            "せいでの確認",
            "です"
          ],
          "correctAnswer": "せいでの確認です"
        },
        {
          "id": "u15_l6_7",
          "type": "match",
          "prompt": "わけだの確認・おかげでの確認・せいでの確認・原因の確認",
          "furigana": "わけだのかくにん・おかげでのかくにん・せいでのかくにん・げんいんのかくにん",
          "romaji": "wake da no kakunin, okage de no kakunin, sei de no kakunin, gen-in no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "わけだのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "わけだの確認",
              "right": "Confirming Naturally it means that...",
              "furigana": "わけだのかくにん",
              "romaji": "wake da no kakunin"
            },
            {
              "id": "p_1",
              "left": "おかげでの確認",
              "right": "Confirming Thanks to (positive cause)",
              "furigana": "おかげでのかくにん",
              "romaji": "okage de no kakunin"
            },
            {
              "id": "p_2",
              "left": "せいでの確認",
              "right": "Confirming Due to / because of (blame)",
              "furigana": "せいでのかくにん",
              "romaji": "sei de no kakunin"
            },
            {
              "id": "p_3",
              "left": "原因の確認",
              "right": "Confirming Cause / origin of problem",
              "furigana": "げんいんのかくにん",
              "romaji": "gen-in no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l6_8",
          "type": "dialogue",
          "prompt": "おかげでの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "おかげでの準備はできていますか？",
          "furigana": "おかげでの準備はできていますか？",
          "romaji": "okage de no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Thanks to (positive cause) ready?",
          "audioText": "おかげでの準備はできていますか？",
          "dialogueOptions": [
            "はい、万全です！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "options": [
            "はい、万全です！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "correctAnswer": "はい、万全です！"
        }
      ]
    },
    {
      "id": "u15_l7",
      "unitId": "unit_15",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Cause / origin of problem & Confirming Reason / motive",
      "titleJp": "原因の確認・理由の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "原因の確認",
        "理由の確認",
        "誤解の確認"
      ],
      "kanjiKeywords": [
        "原",
        "因",
        "確",
        "認",
        "理",
        "由",
        "確",
        "認",
        "誤",
        "解",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u15_l7_1",
          "type": "listen",
          "prompt": "原因の確認",
          "furigana": "げんいんのかくにん",
          "romaji": "gen-in no kakunin",
          "english": "Confirming Cause / origin of problem",
          "audioText": "げんいんのかくにん",
          "options": [
            "Confirming Cause / origin of problem",
            "Confirming Reason / motive",
            "Naturally it means that...",
            "As a matter of fact / actually"
          ],
          "correctAnswer": "Confirming Cause / origin of problem"
        },
        {
          "id": "u15_l7_2",
          "type": "spell",
          "prompt": "原因の確認",
          "furigana": "げんいんのかくにん",
          "romaji": "gen-in no kakunin",
          "english": "Build 'Confirming Cause / origin of problem'",
          "audioText": "げんいんのかくにん",
          "tileBank": [
            "の",
            "に",
            "ん",
            "ん",
            "げ",
            "い",
            "か",
            "く"
          ],
          "correctAnswer": "げんいんのかくにん"
        },
        {
          "id": "u15_l7_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な理由の確認です。",
          "furigana": "これはいちばんたいせつなりゆうのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na riyuu no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Reason / motive.",
          "audioText": "これは理由の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な理由の確認です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l7_4",
          "type": "scramble",
          "prompt": "これは理由の確認です",
          "furigana": "これはりゆうのかくにんです",
          "romaji": "Kore wa riyuu no kakunin desu.",
          "english": "This is Confirming Reason / motive.",
          "audioText": "これは理由の確認です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "です",
            "理由の確認",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "理由の確認",
            "です"
          ],
          "correctAnswer": "これは理由の確認です"
        },
        {
          "id": "u15_l7_5",
          "type": "speak",
          "prompt": "誤解の確認",
          "furigana": "ごかいのかくにん",
          "romaji": "gokai no kakunin",
          "english": "Pronounce: Confirming Misunderstanding",
          "audioText": "ごかいのかくにん",
          "targetSpeech": "誤解の確認",
          "options": [
            "Confirming Misunderstanding",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "誤解の確認"
        },
        {
          "id": "u15_l7_6",
          "type": "dictate",
          "prompt": "誤解の確認です",
          "furigana": "ごかいのかくにんです",
          "romaji": "gokai no kakunin desu.",
          "english": "It is Confirming Misunderstanding.",
          "audioText": "誤解の確認です",
          "dictateTokens": [
            "です",
            "誤解の確認",
            "これ",
            "ではありません"
          ],
          "dictateSolution": [
            "誤解の確認",
            "です"
          ],
          "correctAnswer": "誤解の確認です"
        },
        {
          "id": "u15_l7_7",
          "type": "match",
          "prompt": "原因の確認・理由の確認・誤解の確認・実はの確認",
          "furigana": "げんいんのかくにん・りゆうのかくにん・ごかいのかくにん・じつはのかくにん",
          "romaji": "gen-in no kakunin, riyuu no kakunin, gokai no kakunin, jitsu wa no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "げんいんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "原因の確認",
              "right": "Confirming Cause / origin of problem",
              "furigana": "げんいんのかくにん",
              "romaji": "gen-in no kakunin"
            },
            {
              "id": "p_1",
              "left": "理由の確認",
              "right": "Confirming Reason / motive",
              "furigana": "りゆうのかくにん",
              "romaji": "riyuu no kakunin"
            },
            {
              "id": "p_2",
              "left": "誤解の確認",
              "right": "Confirming Misunderstanding",
              "furigana": "ごかいのかくにん",
              "romaji": "gokai no kakunin"
            },
            {
              "id": "p_3",
              "left": "実はの確認",
              "right": "Confirming As a matter of fact / actually",
              "furigana": "じつはのかくにん",
              "romaji": "jitsu wa no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l7_8",
          "type": "dialogue",
          "prompt": "せいでについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "せいでについてどう思われますか？",
          "furigana": "せいでについてどう思われますか？",
          "romaji": "sei de ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Due to / because of (blame)?",
          "audioText": "せいでについてどう思われますか？",
          "dialogueOptions": [
            "大変重要だと思います。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "options": [
            "大変重要だと思います。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "correctAnswer": "大変重要だと思います。"
        }
      ]
    },
    {
      "id": "u15_l8",
      "unitId": "unit_15",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming As a matter of fact / actually & Confirming Circumstances / background situation",
      "titleJp": "実はの確認・事情の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "実はの確認",
        "事情の確認",
        "説明の確認"
      ],
      "kanjiKeywords": [
        "実",
        "確",
        "認",
        "事",
        "情",
        "確",
        "認",
        "説",
        "明",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u15_l8_1",
          "type": "listen",
          "prompt": "実はの確認",
          "furigana": "じつはのかくにん",
          "romaji": "jitsu wa no kakunin",
          "english": "Confirming As a matter of fact / actually",
          "audioText": "じつはのかくにん",
          "options": [
            "Confirming Due to / because of (blame)",
            "Therefore / accordingly",
            "Confirming Cause / origin of problem",
            "Confirming As a matter of fact / actually"
          ],
          "correctAnswer": "Confirming As a matter of fact / actually"
        },
        {
          "id": "u15_l8_2",
          "type": "spell",
          "prompt": "実はの確認",
          "furigana": "じつはのかくにん",
          "romaji": "jitsu wa no kakunin",
          "english": "Build 'Confirming As a matter of fact / actually'",
          "audioText": "じつはのかくにん",
          "tileBank": [
            "に",
            "は",
            "の",
            "つ",
            "じ",
            "ん",
            "く",
            "か"
          ],
          "correctAnswer": "じつはのかくにん"
        },
        {
          "id": "u15_l8_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な事情の確認です。",
          "furigana": "これはいちばんたいせつなじじょうのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na jijou no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Circumstances / background situation.",
          "audioText": "これは事情の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な事情の確認です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l8_4",
          "type": "scramble",
          "prompt": "これは事情の確認です",
          "furigana": "これはじじょうのかくにんです",
          "romaji": "Kore wa jijou no kakunin desu.",
          "english": "This is Confirming Circumstances / background situation.",
          "audioText": "これは事情の確認です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "事情の確認",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "事情の確認",
            "です"
          ],
          "correctAnswer": "これは事情の確認です"
        },
        {
          "id": "u15_l8_5",
          "type": "speak",
          "prompt": "説明の確認",
          "furigana": "せつめいのかくにん",
          "romaji": "setsumei no kakunin",
          "english": "Pronounce: Confirming Explanation",
          "audioText": "せつめいのかくにん",
          "targetSpeech": "説明の確認",
          "options": [
            "Confirming Explanation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "説明の確認"
        },
        {
          "id": "u15_l8_6",
          "type": "dictate",
          "prompt": "説明の確認です",
          "furigana": "せつめいのかくにんです",
          "romaji": "setsumei no kakunin desu.",
          "english": "It is Confirming Explanation.",
          "audioText": "説明の確認です",
          "dictateTokens": [
            "ではありません",
            "です",
            "これ",
            "説明の確認"
          ],
          "dictateSolution": [
            "説明の確認",
            "です"
          ],
          "correctAnswer": "説明の確認です"
        },
        {
          "id": "u15_l8_7",
          "type": "match",
          "prompt": "実はの確認・事情の確認・説明の確認・結果の確認",
          "furigana": "じつはのかくにん・じじょうのかくにん・せつめいのかくにん・けっかのかくにん",
          "romaji": "jitsu wa no kakunin, jijou no kakunin, setsumei no kakunin, kekka no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じつはのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "実はの確認",
              "right": "Confirming As a matter of fact / actually",
              "furigana": "じつはのかくにん",
              "romaji": "jitsu wa no kakunin"
            },
            {
              "id": "p_1",
              "left": "事情の確認",
              "right": "Confirming Circumstances / background situation",
              "furigana": "じじょうのかくにん",
              "romaji": "jijou no kakunin"
            },
            {
              "id": "p_2",
              "left": "説明の確認",
              "right": "Confirming Explanation",
              "furigana": "せつめいのかくにん",
              "romaji": "setsumei no kakunin"
            },
            {
              "id": "p_3",
              "left": "結果の確認",
              "right": "Confirming Result / outcome",
              "furigana": "けっかのかくにん",
              "romaji": "kekka no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l8_8",
          "type": "dialogue",
          "prompt": "次は原因に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は原因に進みましょう。",
          "furigana": "次は原因に進みましょう。",
          "romaji": "Tsugi wa gen-in ni susumimashou.",
          "english": "Speaker: Let's proceed to Cause / origin of problem next.",
          "audioText": "次は原因に進みましょう。",
          "dialogueOptions": [
            "了解いたしました！",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "options": [
            "了解いたしました！",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "correctAnswer": "了解いたしました！"
        }
      ]
    },
    {
      "id": "u15_l9",
      "unitId": "unit_15",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Result / outcome & Confirming Consent / understanding / conviction",
      "titleJp": "結果の確認・納得の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "結果の確認",
        "納得の確認",
        "したがっての確認"
      ],
      "kanjiKeywords": [
        "結",
        "果",
        "確",
        "認",
        "納",
        "得",
        "確",
        "認",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u15_l9_1",
          "type": "listen",
          "prompt": "結果の確認",
          "furigana": "けっかのかくにん",
          "romaji": "kekka no kakunin",
          "english": "Confirming Result / outcome",
          "audioText": "けっかのかくにん",
          "options": [
            "Confirming Interpretation",
            "Circumstances / background situation",
            "Confirming Result / outcome",
            "Consent / understanding / conviction"
          ],
          "correctAnswer": "Confirming Result / outcome"
        },
        {
          "id": "u15_l9_2",
          "type": "spell",
          "prompt": "結果の確認",
          "furigana": "けっかのかくにん",
          "romaji": "kekka no kakunin",
          "english": "Build 'Confirming Result / outcome'",
          "audioText": "けっかのかくにん",
          "tileBank": [
            "の",
            "け",
            "に",
            "く",
            "ん",
            "っ",
            "か",
            "か"
          ],
          "correctAnswer": "けっかのかくにん"
        },
        {
          "id": "u15_l9_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な納得の確認です。",
          "furigana": "これはいちばんたいせつななっとくのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na nattoku no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Consent / understanding / conviction.",
          "audioText": "これは納得の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な納得の確認です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l9_4",
          "type": "scramble",
          "prompt": "これは納得の確認です",
          "furigana": "これはなっとくのかくにんです",
          "romaji": "Kore wa nattoku no kakunin desu.",
          "english": "This is Confirming Consent / understanding / conviction.",
          "audioText": "これは納得の確認です",
          "scrambleTokens": [
            "これは",
            "納得の確認",
            "です",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "納得の確認",
            "です"
          ],
          "correctAnswer": "これは納得の確認です"
        },
        {
          "id": "u15_l9_5",
          "type": "speak",
          "prompt": "したがっての確認",
          "furigana": "したがってのかくにん",
          "romaji": "shitagatte no kakunin",
          "english": "Pronounce: Confirming Therefore / accordingly",
          "audioText": "したがってのかくにん",
          "targetSpeech": "したがっての確認",
          "options": [
            "Confirming Therefore / accordingly",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "したがっての確認"
        },
        {
          "id": "u15_l9_6",
          "type": "dictate",
          "prompt": "したがっての確認です",
          "furigana": "したがってのかくにんです",
          "romaji": "shitagatte no kakunin desu.",
          "english": "It is Confirming Therefore / accordingly.",
          "audioText": "したがっての確認です",
          "dictateTokens": [
            "ではありません",
            "したがっての確認",
            "これ",
            "です"
          ],
          "dictateSolution": [
            "したがっての確認",
            "です"
          ],
          "correctAnswer": "したがっての確認です"
        },
        {
          "id": "u15_l9_7",
          "type": "match",
          "prompt": "結果の確認・納得の確認・したがっての確認・つまりの確認",
          "furigana": "けっかのかくにん・なっとくのかくにん・したがってのかくにん・つまりのかくにん",
          "romaji": "kekka no kakunin, nattoku no kakunin, shitagatte no kakunin, tsumari no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "けっかのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "結果の確認",
              "right": "Confirming Result / outcome",
              "furigana": "けっかのかくにん",
              "romaji": "kekka no kakunin"
            },
            {
              "id": "p_1",
              "left": "納得の確認",
              "right": "Confirming Consent / understanding / conviction",
              "furigana": "なっとくのかくにん",
              "romaji": "nattoku no kakunin"
            },
            {
              "id": "p_2",
              "left": "したがっての確認",
              "right": "Confirming Therefore / accordingly",
              "furigana": "したがってのかくにん",
              "romaji": "shitagatte no kakunin"
            },
            {
              "id": "p_3",
              "left": "つまりの確認",
              "right": "Confirming In short / that is to say",
              "furigana": "つまりのかくにん",
              "romaji": "tsumari no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l9_8",
          "type": "dialogue",
          "prompt": "わけだについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "わけだについて教えていただけますか？",
          "furigana": "わけだについて教えていただけますか？",
          "romaji": "wake da ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Naturally it means that...?",
          "audioText": "わけだについて教えていただけますか？",
          "dialogueOptions": [
            "はい、詳しくご説明いたします。",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "options": [
            "はい、詳しくご説明いたします。",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "correctAnswer": "はい、詳しくご説明いたします。"
        }
      ]
    },
    {
      "id": "u15_l10",
      "unitId": "unit_15",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming In short / that is to say & Confirming The reason being...",
      "titleJp": "つまりの確認・なぜならの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "つまりの確認",
        "なぜならの確認",
        "解釈の確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "確",
        "認",
        "解",
        "釈",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u15_l10_1",
          "type": "listen",
          "prompt": "つまりの確認",
          "furigana": "つまりのかくにん",
          "romaji": "tsumari no kakunin",
          "english": "Confirming In short / that is to say",
          "audioText": "つまりのかくにん",
          "options": [
            "Interpretation",
            "Confirming In short / that is to say",
            "Naturally it means that...",
            "Confirming Reason / motive"
          ],
          "correctAnswer": "Confirming In short / that is to say"
        },
        {
          "id": "u15_l10_2",
          "type": "spell",
          "prompt": "つまりの確認",
          "furigana": "つまりのかくにん",
          "romaji": "tsumari no kakunin",
          "english": "Build 'Confirming In short / that is to say'",
          "audioText": "つまりのかくにん",
          "tileBank": [
            "つ",
            "に",
            "か",
            "り",
            "の",
            "ま",
            "ん",
            "く"
          ],
          "correctAnswer": "つまりのかくにん"
        },
        {
          "id": "u15_l10_3",
          "type": "cloze",
          "prompt": "これはいちばん大切ななぜならの確認です。",
          "furigana": "これはいちばんたいせつななぜならのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na nazenara no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming The reason being....",
          "audioText": "これはなぜならの確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切ななぜならの確認です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l10_4",
          "type": "scramble",
          "prompt": "これはなぜならの確認です",
          "furigana": "これはなぜならのかくにんです",
          "romaji": "Kore wa nazenara no kakunin desu.",
          "english": "This is Confirming The reason being....",
          "audioText": "これはなぜならの確認です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "です",
            "なぜならの確認",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "なぜならの確認",
            "です"
          ],
          "correctAnswer": "これはなぜならの確認です"
        },
        {
          "id": "u15_l10_5",
          "type": "speak",
          "prompt": "解釈の確認",
          "furigana": "かいしゃくのかくにん",
          "romaji": "kaishaku no kakunin",
          "english": "Pronounce: Confirming Interpretation",
          "audioText": "かいしゃくのかくにん",
          "targetSpeech": "解釈の確認",
          "options": [
            "Confirming Interpretation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "解釈の確認"
        },
        {
          "id": "u15_l10_6",
          "type": "dictate",
          "prompt": "解釈の確認です",
          "furigana": "かいしゃくのかくにんです",
          "romaji": "kaishaku no kakunin desu.",
          "english": "It is Confirming Interpretation.",
          "audioText": "解釈の確認です",
          "dictateTokens": [
            "です",
            "解釈の確認",
            "ではありません",
            "これ"
          ],
          "dictateSolution": [
            "解釈の確認",
            "です"
          ],
          "correctAnswer": "解釈の確認です"
        },
        {
          "id": "u15_l10_7",
          "type": "match",
          "prompt": "つまりの確認・なぜならの確認・解釈の確認・わけだの確認",
          "furigana": "つまりのかくにん・なぜならのかくにん・かいしゃくのかくにん・わけだのかくにん",
          "romaji": "tsumari no kakunin, nazenara no kakunin, kaishaku no kakunin, wake da no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "つまりのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "つまりの確認",
              "right": "Confirming In short / that is to say",
              "furigana": "つまりのかくにん",
              "romaji": "tsumari no kakunin"
            },
            {
              "id": "p_1",
              "left": "なぜならの確認",
              "right": "Confirming The reason being...",
              "furigana": "なぜならのかくにん",
              "romaji": "nazenara no kakunin"
            },
            {
              "id": "p_2",
              "left": "解釈の確認",
              "right": "Confirming Interpretation",
              "furigana": "かいしゃくのかくにん",
              "romaji": "kaishaku no kakunin"
            },
            {
              "id": "p_3",
              "left": "わけだの確認",
              "right": "Confirming Naturally it means that...",
              "furigana": "わけだのかくにん",
              "romaji": "wake da no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l10_8",
          "type": "dialogue",
          "prompt": "おかげでの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "おかげでの準備はできていますか？",
          "furigana": "おかげでの準備はできていますか？",
          "romaji": "okage de no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Thanks to (positive cause) ready?",
          "audioText": "おかげでの準備はできていますか？",
          "dialogueOptions": [
            "はい、万全です！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "options": [
            "はい、万全です！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "correctAnswer": "はい、万全です！"
        }
      ]
    },
    {
      "id": "u15_l11",
      "unitId": "unit_15",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Naturally it means that... & Confirming Thanks to (positive cause)",
      "titleJp": "わけだの確認・おかげでの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "わけだの確認",
        "おかげでの確認",
        "せいでの確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "確",
        "認",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u15_l11_1",
          "type": "listen",
          "prompt": "わけだの確認",
          "furigana": "わけだのかくにん",
          "romaji": "wake da no kakunin",
          "english": "Confirming Naturally it means that...",
          "audioText": "わけだのかくにん",
          "options": [
            "In short / that is to say",
            "Confirming Reason / motive",
            "Reason / motive",
            "Confirming Naturally it means that..."
          ],
          "correctAnswer": "Confirming Naturally it means that..."
        },
        {
          "id": "u15_l11_2",
          "type": "spell",
          "prompt": "わけだの確認",
          "furigana": "わけだのかくにん",
          "romaji": "wake da no kakunin",
          "english": "Build 'Confirming Naturally it means that...'",
          "audioText": "わけだのかくにん",
          "tileBank": [
            "く",
            "だ",
            "ん",
            "わ",
            "け",
            "の",
            "か",
            "に"
          ],
          "correctAnswer": "わけだのかくにん"
        },
        {
          "id": "u15_l11_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なおかげでの確認です。",
          "furigana": "これはいちばんたいせつなおかげでのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na okage de no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Thanks to (positive cause).",
          "audioText": "これはおかげでの確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なおかげでの確認です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l11_4",
          "type": "scramble",
          "prompt": "これはおかげでの確認です",
          "furigana": "これはおかげでのかくにんです",
          "romaji": "Kore wa okage de no kakunin desu.",
          "english": "This is Confirming Thanks to (positive cause).",
          "audioText": "これはおかげでの確認です",
          "scrambleTokens": [
            "それ",
            "おかげでの確認",
            "ではありません",
            "です",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "おかげでの確認",
            "です"
          ],
          "correctAnswer": "これはおかげでの確認です"
        },
        {
          "id": "u15_l11_5",
          "type": "speak",
          "prompt": "せいでの確認",
          "furigana": "せいでのかくにん",
          "romaji": "sei de no kakunin",
          "english": "Pronounce: Confirming Due to / because of (blame)",
          "audioText": "せいでのかくにん",
          "targetSpeech": "せいでの確認",
          "options": [
            "Confirming Due to / because of (blame)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "せいでの確認"
        },
        {
          "id": "u15_l11_6",
          "type": "dictate",
          "prompt": "せいでの確認です",
          "furigana": "せいでのかくにんです",
          "romaji": "sei de no kakunin desu.",
          "english": "It is Confirming Due to / because of (blame).",
          "audioText": "せいでの確認です",
          "dictateTokens": [
            "です",
            "これ",
            "ではありません",
            "せいでの確認"
          ],
          "dictateSolution": [
            "せいでの確認",
            "です"
          ],
          "correctAnswer": "せいでの確認です"
        },
        {
          "id": "u15_l11_7",
          "type": "match",
          "prompt": "わけだの確認・おかげでの確認・せいでの確認・原因の確認",
          "furigana": "わけだのかくにん・おかげでのかくにん・せいでのかくにん・げんいんのかくにん",
          "romaji": "wake da no kakunin, okage de no kakunin, sei de no kakunin, gen-in no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "わけだのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "わけだの確認",
              "right": "Confirming Naturally it means that...",
              "furigana": "わけだのかくにん",
              "romaji": "wake da no kakunin"
            },
            {
              "id": "p_1",
              "left": "おかげでの確認",
              "right": "Confirming Thanks to (positive cause)",
              "furigana": "おかげでのかくにん",
              "romaji": "okage de no kakunin"
            },
            {
              "id": "p_2",
              "left": "せいでの確認",
              "right": "Confirming Due to / because of (blame)",
              "furigana": "せいでのかくにん",
              "romaji": "sei de no kakunin"
            },
            {
              "id": "p_3",
              "left": "原因の確認",
              "right": "Confirming Cause / origin of problem",
              "furigana": "げんいんのかくにん",
              "romaji": "gen-in no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l11_8",
          "type": "dialogue",
          "prompt": "せいでについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "せいでについてどう思われますか？",
          "furigana": "せいでについてどう思われますか？",
          "romaji": "sei de ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Due to / because of (blame)?",
          "audioText": "せいでについてどう思われますか？",
          "dialogueOptions": [
            "大変重要だと思います。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "options": [
            "大変重要だと思います。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "correctAnswer": "大変重要だと思います。"
        }
      ]
    },
    {
      "id": "u15_l12",
      "unitId": "unit_15",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Cause / origin of problem & Confirming Reason / motive",
      "titleJp": "原因の確認・理由の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "原因の確認",
        "理由の確認",
        "誤解の確認"
      ],
      "kanjiKeywords": [
        "原",
        "因",
        "確",
        "認",
        "理",
        "由",
        "確",
        "認",
        "誤",
        "解",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u15_l12_1",
          "type": "listen",
          "prompt": "原因の確認",
          "furigana": "げんいんのかくにん",
          "romaji": "gen-in no kakunin",
          "english": "Confirming Cause / origin of problem",
          "audioText": "げんいんのかくにん",
          "options": [
            "Circumstances / background situation",
            "Confirming Explanation",
            "Confirming Cause / origin of problem",
            "The reason being..."
          ],
          "correctAnswer": "Confirming Cause / origin of problem"
        },
        {
          "id": "u15_l12_2",
          "type": "spell",
          "prompt": "原因の確認",
          "furigana": "げんいんのかくにん",
          "romaji": "gen-in no kakunin",
          "english": "Build 'Confirming Cause / origin of problem'",
          "audioText": "げんいんのかくにん",
          "tileBank": [
            "か",
            "の",
            "ん",
            "く",
            "ん",
            "げ",
            "に",
            "い"
          ],
          "correctAnswer": "げんいんのかくにん"
        },
        {
          "id": "u15_l12_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な理由の確認です。",
          "furigana": "これはいちばんたいせつなりゆうのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na riyuu no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Reason / motive.",
          "audioText": "これは理由の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な理由の確認です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l12_4",
          "type": "scramble",
          "prompt": "これは理由の確認です",
          "furigana": "これはりゆうのかくにんです",
          "romaji": "Kore wa riyuu no kakunin desu.",
          "english": "This is Confirming Reason / motive.",
          "audioText": "これは理由の確認です",
          "scrambleTokens": [
            "これは",
            "です",
            "理由の確認",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "理由の確認",
            "です"
          ],
          "correctAnswer": "これは理由の確認です"
        },
        {
          "id": "u15_l12_5",
          "type": "speak",
          "prompt": "誤解の確認",
          "furigana": "ごかいのかくにん",
          "romaji": "gokai no kakunin",
          "english": "Pronounce: Confirming Misunderstanding",
          "audioText": "ごかいのかくにん",
          "targetSpeech": "誤解の確認",
          "options": [
            "Confirming Misunderstanding",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "誤解の確認"
        },
        {
          "id": "u15_l12_6",
          "type": "dictate",
          "prompt": "誤解の確認です",
          "furigana": "ごかいのかくにんです",
          "romaji": "gokai no kakunin desu.",
          "english": "It is Confirming Misunderstanding.",
          "audioText": "誤解の確認です",
          "dictateTokens": [
            "誤解の確認",
            "です",
            "ではありません",
            "これ"
          ],
          "dictateSolution": [
            "誤解の確認",
            "です"
          ],
          "correctAnswer": "誤解の確認です"
        },
        {
          "id": "u15_l12_7",
          "type": "match",
          "prompt": "原因の確認・理由の確認・誤解の確認・わけだ",
          "furigana": "げんいんのかくにん・りゆうのかくにん・ごかいのかくにん・わけだ",
          "romaji": "gen-in no kakunin, riyuu no kakunin, gokai no kakunin, wake da",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "げんいんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "原因の確認",
              "right": "Confirming Cause / origin of problem",
              "furigana": "げんいんのかくにん",
              "romaji": "gen-in no kakunin"
            },
            {
              "id": "p_1",
              "left": "理由の確認",
              "right": "Confirming Reason / motive",
              "furigana": "りゆうのかくにん",
              "romaji": "riyuu no kakunin"
            },
            {
              "id": "p_2",
              "left": "誤解の確認",
              "right": "Confirming Misunderstanding",
              "furigana": "ごかいのかくにん",
              "romaji": "gokai no kakunin"
            },
            {
              "id": "p_3",
              "left": "わけだ",
              "right": "Naturally it means that...",
              "furigana": "わけだ",
              "romaji": "wake da"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l12_8",
          "type": "dialogue",
          "prompt": "次は原因に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は原因に進みましょう。",
          "furigana": "次は原因に進みましょう。",
          "romaji": "Tsugi wa gen-in ni susumimashou.",
          "english": "Speaker: Let's proceed to Cause / origin of problem next.",
          "audioText": "次は原因に進みましょう。",
          "dialogueOptions": [
            "了解いたしました！",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "options": [
            "了解いたしました！",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "correctAnswer": "了解いたしました！"
        }
      ]
    },
    {
      "id": "u15_l13",
      "unitId": "unit_15",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Naturally it means that... & Thanks to (positive cause)",
      "titleJp": "わけだ・おかげで",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "わけだ",
        "おかげで",
        "せいで"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u15_l13_1",
          "type": "listen",
          "prompt": "わけだ",
          "furigana": "わけだ",
          "romaji": "wake da",
          "english": "Naturally it means that...",
          "audioText": "わけだ",
          "options": [
            "Naturally it means that...",
            "Confirming Reason / motive",
            "Therefore / accordingly",
            "Confirming Naturally it means that..."
          ],
          "correctAnswer": "Naturally it means that..."
        },
        {
          "id": "u15_l13_2",
          "type": "spell",
          "prompt": "わけだ",
          "furigana": "わけだ",
          "romaji": "wake da",
          "english": "Build 'Naturally it means that...'",
          "audioText": "わけだ",
          "tileBank": [
            "わ",
            "け",
            "ち",
            "み",
            "へ",
            "だ",
            "た",
            "り"
          ],
          "correctAnswer": "わけだ"
        },
        {
          "id": "u15_l13_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なおかげでです。",
          "furigana": "これはいちばんたいせつなおかげでです。",
          "romaji": "Kore wa ichiban taisetsu na okage de desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Thanks to (positive cause).",
          "audioText": "これはおかげでです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なおかげでです。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l13_4",
          "type": "scramble",
          "prompt": "これはおかげでです",
          "furigana": "これはおかげでです",
          "romaji": "Kore wa okage de desu.",
          "english": "This is Thanks to (positive cause).",
          "audioText": "これはおかげでです",
          "scrambleTokens": [
            "です",
            "これは",
            "ではありません",
            "おかげで",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "おかげで",
            "です"
          ],
          "correctAnswer": "これはおかげでです"
        },
        {
          "id": "u15_l13_5",
          "type": "speak",
          "prompt": "せいで",
          "furigana": "せいで",
          "romaji": "sei de",
          "english": "Pronounce: Due to / because of (blame)",
          "audioText": "せいで",
          "targetSpeech": "せいで",
          "options": [
            "Due to / because of (blame)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "せいで"
        },
        {
          "id": "u15_l13_6",
          "type": "dictate",
          "prompt": "せいでです",
          "furigana": "せいでです",
          "romaji": "sei de desu.",
          "english": "It is Due to / because of (blame).",
          "audioText": "せいでです",
          "dictateTokens": [
            "ではありません",
            "です",
            "せいで",
            "これ"
          ],
          "dictateSolution": [
            "せいで",
            "です"
          ],
          "correctAnswer": "せいでです"
        },
        {
          "id": "u15_l13_7",
          "type": "match",
          "prompt": "わけだ・おかげで・せいで・原因",
          "furigana": "わけだ・おかげで・せいで・げんいん",
          "romaji": "wake da, okage de, sei de, gen-in",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "わけだ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "わけだ",
              "right": "Naturally it means that...",
              "furigana": "わけだ",
              "romaji": "wake da"
            },
            {
              "id": "p_1",
              "left": "おかげで",
              "right": "Thanks to (positive cause)",
              "furigana": "おかげで",
              "romaji": "okage de"
            },
            {
              "id": "p_2",
              "left": "せいで",
              "right": "Due to / because of (blame)",
              "furigana": "せいで",
              "romaji": "sei de"
            },
            {
              "id": "p_3",
              "left": "原因",
              "right": "Cause / origin of problem",
              "furigana": "げんいん",
              "romaji": "gen-in"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l13_8",
          "type": "dialogue",
          "prompt": "わけだについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "わけだについて教えていただけますか？",
          "furigana": "わけだについて教えていただけますか？",
          "romaji": "wake da ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Naturally it means that...?",
          "audioText": "わけだについて教えていただけますか？",
          "dialogueOptions": [
            "はい、詳しくご説明いたします。",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "options": [
            "はい、詳しくご説明いたします。",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "correctAnswer": "はい、詳しくご説明いたします。"
        }
      ]
    },
    {
      "id": "u15_l14",
      "unitId": "unit_15",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Cause / origin of problem & Reason / motive",
      "titleJp": "原因・理由",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "原因",
        "理由",
        "誤解"
      ],
      "kanjiKeywords": [
        "原",
        "因",
        "理",
        "由",
        "誤",
        "解"
      ],
      "items": [
        {
          "id": "u15_l14_1",
          "type": "listen",
          "prompt": "原因",
          "furigana": "げんいん",
          "romaji": "gen-in",
          "english": "Cause / origin of problem",
          "audioText": "げんいん",
          "options": [
            "Confirming Explanation",
            "Confirming Cause / origin of problem",
            "Confirming Misunderstanding",
            "Cause / origin of problem"
          ],
          "correctAnswer": "Cause / origin of problem"
        },
        {
          "id": "u15_l14_2",
          "type": "spell",
          "prompt": "原因",
          "furigana": "げんいん",
          "romaji": "gen-in",
          "english": "Build 'Cause / origin of problem'",
          "audioText": "げんいん",
          "tileBank": [
            "ん",
            "げ",
            "ら",
            "ん",
            "そ",
            "い",
            "て",
            "を"
          ],
          "correctAnswer": "げんいん"
        },
        {
          "id": "u15_l14_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な理由です。",
          "furigana": "これはいちばんたいせつなりゆうです。",
          "romaji": "Kore wa ichiban taisetsu na riyuu desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Reason / motive.",
          "audioText": "これは理由です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な理由です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l14_4",
          "type": "scramble",
          "prompt": "これは理由です",
          "furigana": "これはりゆうです",
          "romaji": "Kore wa riyuu desu.",
          "english": "This is Reason / motive.",
          "audioText": "これは理由です",
          "scrambleTokens": [
            "理由",
            "これは",
            "ではありません",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "理由",
            "です"
          ],
          "correctAnswer": "これは理由です"
        },
        {
          "id": "u15_l14_5",
          "type": "speak",
          "prompt": "誤解",
          "furigana": "ごかい",
          "romaji": "gokai",
          "english": "Pronounce: Misunderstanding",
          "audioText": "ごかい",
          "targetSpeech": "誤解",
          "options": [
            "Misunderstanding",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "誤解"
        },
        {
          "id": "u15_l14_6",
          "type": "dictate",
          "prompt": "誤解です",
          "furigana": "ごかいです",
          "romaji": "gokai desu.",
          "english": "It is Misunderstanding.",
          "audioText": "誤解です",
          "dictateTokens": [
            "これ",
            "誤解",
            "です",
            "ではありません"
          ],
          "dictateSolution": [
            "誤解",
            "です"
          ],
          "correctAnswer": "誤解です"
        },
        {
          "id": "u15_l14_7",
          "type": "match",
          "prompt": "原因・理由・誤解・実は",
          "furigana": "げんいん・りゆう・ごかい・じつは",
          "romaji": "gen-in, riyuu, gokai, jitsu wa",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "げんいん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "原因",
              "right": "Cause / origin of problem",
              "furigana": "げんいん",
              "romaji": "gen-in"
            },
            {
              "id": "p_1",
              "left": "理由",
              "right": "Reason / motive",
              "furigana": "りゆう",
              "romaji": "riyuu"
            },
            {
              "id": "p_2",
              "left": "誤解",
              "right": "Misunderstanding",
              "furigana": "ごかい",
              "romaji": "gokai"
            },
            {
              "id": "p_3",
              "left": "実は",
              "right": "As a matter of fact / actually",
              "furigana": "じつは",
              "romaji": "jitsu wa"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l14_8",
          "type": "dialogue",
          "prompt": "おかげでの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "おかげでの準備はできていますか？",
          "furigana": "おかげでの準備はできていますか？",
          "romaji": "okage de no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Thanks to (positive cause) ready?",
          "audioText": "おかげでの準備はできていますか？",
          "dialogueOptions": [
            "はい、万全です！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "options": [
            "はい、万全です！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "correctAnswer": "はい、万全です！"
        }
      ]
    },
    {
      "id": "u15_l15",
      "unitId": "unit_15",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 15 Master Exam",
      "iconType": "test",
      "title": "Unit 15 Master Exam",
      "titleJp": "第15週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "実は",
        "事情",
        "説明"
      ],
      "kanjiKeywords": [
        "実",
        "事",
        "情",
        "説",
        "明"
      ],
      "items": [
        {
          "id": "u15_l15_1",
          "type": "listen",
          "prompt": "実は",
          "furigana": "じつは",
          "romaji": "jitsu wa",
          "english": "As a matter of fact / actually",
          "audioText": "じつは",
          "options": [
            "Confirming Cause / origin of problem",
            "Therefore / accordingly",
            "As a matter of fact / actually",
            "Confirming Circumstances / background situation"
          ],
          "correctAnswer": "As a matter of fact / actually"
        },
        {
          "id": "u15_l15_2",
          "type": "spell",
          "prompt": "実は",
          "furigana": "じつは",
          "romaji": "jitsu wa",
          "english": "Build 'As a matter of fact / actually'",
          "audioText": "じつは",
          "tileBank": [
            "て",
            "し",
            "あ",
            "め",
            "は",
            "や",
            "つ",
            "じ"
          ],
          "correctAnswer": "じつは"
        },
        {
          "id": "u15_l15_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な事情です。",
          "furigana": "これはいちばんたいせつなじじょうです。",
          "romaji": "Kore wa ichiban taisetsu na jijou desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Circumstances / background situation.",
          "audioText": "これは事情です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な事情です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
        },
        {
          "id": "u15_l15_4",
          "type": "scramble",
          "prompt": "これは事情です",
          "furigana": "これはじじょうです",
          "romaji": "Kore wa jijou desu.",
          "english": "This is Circumstances / background situation.",
          "audioText": "これは事情です",
          "scrambleTokens": [
            "事情",
            "ではありません",
            "これは",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "事情",
            "です"
          ],
          "correctAnswer": "これは事情です"
        },
        {
          "id": "u15_l15_5",
          "type": "speak",
          "prompt": "説明",
          "furigana": "せつめい",
          "romaji": "setsumei",
          "english": "Pronounce: Explanation",
          "audioText": "せつめい",
          "targetSpeech": "説明",
          "options": [
            "Explanation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "説明"
        },
        {
          "id": "u15_l15_6",
          "type": "dictate",
          "prompt": "説明です",
          "furigana": "せつめいです",
          "romaji": "setsumei desu.",
          "english": "It is Explanation.",
          "audioText": "説明です",
          "dictateTokens": [
            "ではありません",
            "です",
            "説明",
            "これ"
          ],
          "dictateSolution": [
            "説明",
            "です"
          ],
          "correctAnswer": "説明です"
        },
        {
          "id": "u15_l15_7",
          "type": "match",
          "prompt": "実は・事情・説明・結果",
          "furigana": "じつは・じじょう・せつめい・けっか",
          "romaji": "jitsu wa, jijou, setsumei, kekka",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じつは",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "実は",
              "right": "As a matter of fact / actually",
              "furigana": "じつは",
              "romaji": "jitsu wa"
            },
            {
              "id": "p_1",
              "left": "事情",
              "right": "Circumstances / background situation",
              "furigana": "じじょう",
              "romaji": "jijou"
            },
            {
              "id": "p_2",
              "left": "説明",
              "right": "Explanation",
              "furigana": "せつめい",
              "romaji": "setsumei"
            },
            {
              "id": "p_3",
              "left": "結果",
              "right": "Result / outcome",
              "furigana": "けっか",
              "romaji": "kekka"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u15_l15_8",
          "type": "dialogue",
          "prompt": "せいでについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "せいでについてどう思われますか？",
          "furigana": "せいでについてどう思われますか？",
          "romaji": "sei de ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Due to / because of (blame)?",
          "audioText": "せいでについてどう思われますか？",
          "dialogueOptions": [
            "大変重要だと思います。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "options": [
            "大変重要だと思います。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "correctAnswer": "大変重要だと思います。"
        }
      ]
    }
  ],
  "revisionGate": {
    "id": "gate_unit_15",
    "unitId": "unit_15",
    "title": "Unit 15 Mastery Checkpoint",
    "titleJp": "第15週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u15_l1_1",
        "type": "listen",
        "prompt": "わけだ",
        "furigana": "わけだ",
        "romaji": "wake da",
        "english": "Naturally it means that...",
        "audioText": "わけだ",
        "options": [
          "Circumstances / background situation",
          "Naturally it means that...",
          "Therefore / accordingly",
          "Confirming Misunderstanding"
        ],
        "correctAnswer": "Naturally it means that..."
      },
      {
        "id": "u15_l1_2",
        "type": "spell",
        "prompt": "わけだ",
        "furigana": "わけだ",
        "romaji": "wake da",
        "english": "Build 'Naturally it means that...'",
        "audioText": "わけだ",
        "tileBank": [
          "け",
          "わ",
          "う",
          "ぬ",
          "だ",
          "り",
          "お",
          "ひ"
        ],
        "correctAnswer": "わけだ"
      },
      {
        "id": "u15_l3_1",
        "type": "listen",
        "prompt": "実は",
        "furigana": "じつは",
        "romaji": "jitsu wa",
        "english": "As a matter of fact / actually",
        "audioText": "じつは",
        "options": [
          "Confirming Interpretation",
          "Confirming Reason / motive",
          "As a matter of fact / actually",
          "Thanks to (positive cause)"
        ],
        "correctAnswer": "As a matter of fact / actually"
      },
      {
        "id": "u15_l3_2",
        "type": "spell",
        "prompt": "実は",
        "furigana": "じつは",
        "romaji": "jitsu wa",
        "english": "Build 'As a matter of fact / actually'",
        "audioText": "じつは",
        "tileBank": [
          "せ",
          "は",
          "に",
          "そ",
          "ゆ",
          "ら",
          "じ",
          "つ"
        ],
        "correctAnswer": "じつは"
      },
      {
        "id": "u15_l5_1",
        "type": "listen",
        "prompt": "つまり",
        "furigana": "つまり",
        "romaji": "tsumari",
        "english": "In short / that is to say",
        "audioText": "つまり",
        "options": [
          "In short / that is to say",
          "Thanks to (positive cause)",
          "Confirming Naturally it means that...",
          "Cause / origin of problem"
        ],
        "correctAnswer": "In short / that is to say"
      },
      {
        "id": "u15_l5_2",
        "type": "spell",
        "prompt": "つまり",
        "furigana": "つまり",
        "romaji": "tsumari",
        "english": "Build 'In short / that is to say'",
        "audioText": "つまり",
        "tileBank": [
          "め",
          "な",
          "り",
          "い",
          "え",
          "つ",
          "ま",
          "そ"
        ],
        "correctAnswer": "つまり"
      },
      {
        "id": "u15_l7_1",
        "type": "listen",
        "prompt": "原因の確認",
        "furigana": "げんいんのかくにん",
        "romaji": "gen-in no kakunin",
        "english": "Confirming Cause / origin of problem",
        "audioText": "げんいんのかくにん",
        "options": [
          "Confirming Cause / origin of problem",
          "Confirming Reason / motive",
          "Naturally it means that...",
          "As a matter of fact / actually"
        ],
        "correctAnswer": "Confirming Cause / origin of problem"
      },
      {
        "id": "u15_l7_2",
        "type": "spell",
        "prompt": "原因の確認",
        "furigana": "げんいんのかくにん",
        "romaji": "gen-in no kakunin",
        "english": "Build 'Confirming Cause / origin of problem'",
        "audioText": "げんいんのかくにん",
        "tileBank": [
          "の",
          "に",
          "ん",
          "ん",
          "げ",
          "い",
          "か",
          "く"
        ],
        "correctAnswer": "げんいんのかくにん"
      },
      {
        "id": "u15_l9_1",
        "type": "listen",
        "prompt": "結果の確認",
        "furigana": "けっかのかくにん",
        "romaji": "kekka no kakunin",
        "english": "Confirming Result / outcome",
        "audioText": "けっかのかくにん",
        "options": [
          "Confirming Interpretation",
          "Circumstances / background situation",
          "Confirming Result / outcome",
          "Consent / understanding / conviction"
        ],
        "correctAnswer": "Confirming Result / outcome"
      },
      {
        "id": "u15_l9_2",
        "type": "spell",
        "prompt": "結果の確認",
        "furigana": "けっかのかくにん",
        "romaji": "kekka no kakunin",
        "english": "Build 'Confirming Result / outcome'",
        "audioText": "けっかのかくにん",
        "tileBank": [
          "の",
          "け",
          "に",
          "く",
          "ん",
          "っ",
          "か",
          "か"
        ],
        "correctAnswer": "けっかのかくにん"
      },
      {
        "id": "u15_l11_1",
        "type": "listen",
        "prompt": "わけだの確認",
        "furigana": "わけだのかくにん",
        "romaji": "wake da no kakunin",
        "english": "Confirming Naturally it means that...",
        "audioText": "わけだのかくにん",
        "options": [
          "In short / that is to say",
          "Confirming Reason / motive",
          "Reason / motive",
          "Confirming Naturally it means that..."
        ],
        "correctAnswer": "Confirming Naturally it means that..."
      },
      {
        "id": "u15_l11_2",
        "type": "spell",
        "prompt": "わけだの確認",
        "furigana": "わけだのかくにん",
        "romaji": "wake da no kakunin",
        "english": "Build 'Confirming Naturally it means that...'",
        "audioText": "わけだのかくにん",
        "tileBank": [
          "く",
          "だ",
          "ん",
          "わ",
          "け",
          "の",
          "か",
          "に"
        ],
        "correctAnswer": "わけだのかくにん"
      }
    ]
  }
};
