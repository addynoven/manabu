import type { DojoUnit } from "../../models/dojo.model";

export const unit14: DojoUnit = {
  "id": "unit_14",
  "unitNumber": 14,
  "title": "Office Culture & Keigo Foundations",
  "titleJp": "職場のマナーと敬語の基礎",
  "description": "Navigate Japanese office hierarchy, honorifics (Sonkeigo/Kenjougo), and professional phone and email etiquette.",
  "icon": "💼",
  "themeColor": "#4F46E5",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u14_l1",
      "unitId": "unit_14",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Thank you for your hard work & Excuse me (entering/leaving)",
      "titleJp": "お疲れ様・失礼します",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "お疲れ様",
        "失礼します",
        "承知"
      ],
      "kanjiKeywords": [
        "疲",
        "様",
        "失",
        "礼",
        "承",
        "知"
      ],
      "items": [
        {
          "id": "u14_l1_1",
          "type": "listen",
          "prompt": "お疲れ様",
          "furigana": "おつかれさま",
          "romaji": "otsukaresama",
          "english": "Thank you for your hard work",
          "audioText": "おつかれさま",
          "options": [
            "Acknowledged / understood",
            "Confirming Business card",
            "Thank you for your hard work",
            "Confirming Excuse me (entering/leaving)"
          ],
          "correctAnswer": "Thank you for your hard work"
        },
        {
          "id": "u14_l1_2",
          "type": "spell",
          "prompt": "お疲れ様",
          "furigana": "おつかれさま",
          "romaji": "otsukaresama",
          "english": "Build 'Thank you for your hard work'",
          "audioText": "おつかれさま",
          "tileBank": [
            "ろ",
            "さ",
            "ま",
            "つ",
            "お",
            "れ",
            "か",
            "ね"
          ],
          "correctAnswer": "おつかれさま"
        },
        {
          "id": "u14_l1_3",
          "type": "cloze",
          "prompt": "私は失礼しますがすきです",
          "furigana": "わたしはしつれいしますがすきです",
          "romaji": "Watashi wa shitsureishimasu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Excuse me (entering/leaving).",
          "audioText": "失礼します",
          "clozeSentence": "これは失礼します {{BLANK}} す。",
          "clozeTarget": "が",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "が"
        },
        {
          "id": "u14_l1_4",
          "type": "scramble",
          "prompt": "これは失礼しますです",
          "furigana": "これはしつれいしますです",
          "romaji": "Kore wa shitsureishimasu desu.",
          "english": "This is Excuse me (entering/leaving).",
          "audioText": "これは失礼しますです",
          "scrambleTokens": [
            "これは",
            "です",
            "失礼します",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "失礼します",
            "です"
          ],
          "correctAnswer": "これは失礼しますです"
        },
        {
          "id": "u14_l1_5",
          "type": "speak",
          "prompt": "承知",
          "furigana": "しょうち",
          "romaji": "shouchi",
          "english": "Pronounce: Acknowledged / understood",
          "audioText": "しょうち",
          "targetSpeech": "承知",
          "options": [
            "Acknowledged / understood",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "承知"
        },
        {
          "id": "u14_l1_6",
          "type": "dictate",
          "prompt": "承知をお願いします",
          "furigana": "しょうちをおねがいします",
          "romaji": "shouchi o onegaishimasu.",
          "english": "Acknowledged / understood, please.",
          "audioText": "承知をお願いします",
          "dictateTokens": [
            "です",
            "承知",
            "ありがとう",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "承知",
            "を",
            "お願いします"
          ],
          "correctAnswer": "承知をお願いします"
        },
        {
          "id": "u14_l1_7",
          "type": "match",
          "prompt": "お疲れ様・失礼します・承知・申し上げる",
          "furigana": "おつかれさま・しつれいします・しょうち・もうしあげる",
          "romaji": "otsukaresama, shitsureishimasu, shouchi, moushiageru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おつかれさま",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "お疲れ様",
              "right": "Thank you for your hard work",
              "furigana": "おつかれさま",
              "romaji": "otsukaresama"
            },
            {
              "id": "p_1",
              "left": "失礼します",
              "right": "Excuse me (entering/leaving)",
              "furigana": "しつれいします",
              "romaji": "shitsureishimasu"
            },
            {
              "id": "p_2",
              "left": "承知",
              "right": "Acknowledged / understood",
              "furigana": "しょうち",
              "romaji": "shouchi"
            },
            {
              "id": "p_3",
              "left": "申し上げる",
              "right": "To say (humble Kenjougo)",
              "furigana": "もうしあげる",
              "romaji": "moushiageru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l1_8",
          "type": "dialogue",
          "prompt": "お疲れ様について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "お疲れ様について教えていただけますか？",
          "furigana": "お疲れ様について教えていただけますか？",
          "romaji": "otsukaresama ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Thank you for your hard work?",
          "audioText": "お疲れ様について教えていただけますか？",
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
      "id": "u14_l2",
      "unitId": "unit_14",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "To say (humble Kenjougo) & To be / go / come (honorific)",
      "titleJp": "申し上げる・いらっしゃる",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "申し上げる",
        "いらっしゃる",
        "ご覧になる"
      ],
      "kanjiKeywords": [
        "申",
        "上",
        "覧"
      ],
      "items": [
        {
          "id": "u14_l2_1",
          "type": "listen",
          "prompt": "申し上げる",
          "furigana": "もうしあげる",
          "romaji": "moushiageru",
          "english": "To say (humble Kenjougo)",
          "audioText": "もうしあげる",
          "options": [
            "Confirming To be / go / come (honorific)",
            "Confirming To say (humble Kenjougo)",
            "To look at / read (humble)",
            "To say (humble Kenjougo)"
          ],
          "correctAnswer": "To say (humble Kenjougo)"
        },
        {
          "id": "u14_l2_2",
          "type": "spell",
          "prompt": "申し上げる",
          "furigana": "もうしあげる",
          "romaji": "moushiageru",
          "english": "Build 'To say (humble Kenjougo)'",
          "audioText": "もうしあげる",
          "tileBank": [
            "あ",
            "し",
            "る",
            "も",
            "げ",
            "う",
            "か",
            "ろ"
          ],
          "correctAnswer": "もうしあげる"
        },
        {
          "id": "u14_l2_3",
          "type": "cloze",
          "prompt": "私はいらっしゃるがすきです",
          "furigana": "わたしはいらっしゃるがすきです",
          "romaji": "Watashi wa irassharu ga suki desu.",
          "english": "Fill in the blank with the correct particle for To be / go / come (honorific).",
          "audioText": "いらっしゃる",
          "clozeSentence": "これはいらっしゃる {{BLANK}} す。",
          "clozeTarget": "を",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "を"
        },
        {
          "id": "u14_l2_4",
          "type": "scramble",
          "prompt": "これはいらっしゃるです",
          "furigana": "これはいらっしゃるです",
          "romaji": "Kore wa irassharu desu.",
          "english": "This is To be / go / come (honorific).",
          "audioText": "これはいらっしゃるです",
          "scrambleTokens": [
            "それ",
            "です",
            "いらっしゃる",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "いらっしゃる",
            "です"
          ],
          "correctAnswer": "これはいらっしゃるです"
        },
        {
          "id": "u14_l2_5",
          "type": "speak",
          "prompt": "ご覧になる",
          "furigana": "ごらんになる",
          "romaji": "goran ni naru",
          "english": "Pronounce: To see / inspect (honorific)",
          "audioText": "ごらんになる",
          "targetSpeech": "ご覧になる",
          "options": [
            "To see / inspect (honorific)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ご覧になる"
        },
        {
          "id": "u14_l2_6",
          "type": "dictate",
          "prompt": "ご覧になるをお願いします",
          "furigana": "ごらんになるをおねがいします",
          "romaji": "goran ni naru o onegaishimasu.",
          "english": "To see / inspect (honorific), please.",
          "audioText": "ご覧になるをお願いします",
          "dictateTokens": [
            "ありがとう",
            "ご覧になる",
            "です",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "ご覧になる",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ご覧になるをお願いします"
        },
        {
          "id": "u14_l2_7",
          "type": "match",
          "prompt": "申し上げる・いらっしゃる・ご覧になる・拝見する",
          "furigana": "もうしあげる・いらっしゃる・ごらんになる・はいけんする",
          "romaji": "moushiageru, irassharu, goran ni naru, haiken suru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "もうしあげる",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "申し上げる",
              "right": "To say (humble Kenjougo)",
              "furigana": "もうしあげる",
              "romaji": "moushiageru"
            },
            {
              "id": "p_1",
              "left": "いらっしゃる",
              "right": "To be / go / come (honorific)",
              "furigana": "いらっしゃる",
              "romaji": "irassharu"
            },
            {
              "id": "p_2",
              "left": "ご覧になる",
              "right": "To see / inspect (honorific)",
              "furigana": "ごらんになる",
              "romaji": "goran ni naru"
            },
            {
              "id": "p_3",
              "left": "拝見する",
              "right": "To look at / read (humble)",
              "furigana": "はいけんする",
              "romaji": "haiken suru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l2_8",
          "type": "dialogue",
          "prompt": "失礼しますの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "失礼しますの準備はできていますか？",
          "furigana": "失礼しますの準備はできていますか？",
          "romaji": "shitsureishimasu no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Excuse me (entering/leaving) ready?",
          "audioText": "失礼しますの準備はできていますか？",
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
      "id": "u14_l3",
      "unitId": "unit_14",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "To look at / read (humble) & Business card",
      "titleJp": "拝見する・名刺",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "拝見する",
        "名刺",
        "上司"
      ],
      "kanjiKeywords": [
        "拝",
        "見",
        "名",
        "刺",
        "上",
        "司"
      ],
      "items": [
        {
          "id": "u14_l3_1",
          "type": "listen",
          "prompt": "拝見する",
          "furigana": "はいけんする",
          "romaji": "haiken suru",
          "english": "To look at / read (humble)",
          "audioText": "はいけんする",
          "options": [
            "Confirming To look at / read (humble)",
            "To look at / read (humble)",
            "To see / inspect (honorific)",
            "Excuse me (entering/leaving)"
          ],
          "correctAnswer": "To look at / read (humble)"
        },
        {
          "id": "u14_l3_2",
          "type": "spell",
          "prompt": "拝見する",
          "furigana": "はいけんする",
          "romaji": "haiken suru",
          "english": "Build 'To look at / read (humble)'",
          "audioText": "はいけんする",
          "tileBank": [
            "か",
            "せ",
            "け",
            "す",
            "る",
            "ん",
            "は",
            "い"
          ],
          "correctAnswer": "はいけんする"
        },
        {
          "id": "u14_l3_3",
          "type": "cloze",
          "prompt": "私は名刺がすきです",
          "furigana": "わたしはめいしがすきです",
          "romaji": "Watashi wa meishi ga suki desu.",
          "english": "Fill in the blank with the correct particle for Business card.",
          "audioText": "名刺",
          "clozeSentence": "これは名刺 {{BLANK}} す。",
          "clozeTarget": "に",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "に"
        },
        {
          "id": "u14_l3_4",
          "type": "scramble",
          "prompt": "これは名刺です",
          "furigana": "これはめいしです",
          "romaji": "Kore wa meishi desu.",
          "english": "This is Business card.",
          "audioText": "これは名刺です",
          "scrambleTokens": [
            "それ",
            "これは",
            "名刺",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "名刺",
            "です"
          ],
          "correctAnswer": "これは名刺です"
        },
        {
          "id": "u14_l3_5",
          "type": "speak",
          "prompt": "上司",
          "furigana": "じょうし",
          "romaji": "joushi",
          "english": "Pronounce: Supervisor / boss",
          "audioText": "じょうし",
          "targetSpeech": "上司",
          "options": [
            "Supervisor / boss",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "上司"
        },
        {
          "id": "u14_l3_6",
          "type": "dictate",
          "prompt": "上司をお願いします",
          "furigana": "じょうしをおねがいします",
          "romaji": "joushi o onegaishimasu.",
          "english": "Supervisor / boss, please.",
          "audioText": "上司をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "ありがとう",
            "上司",
            "お願いします"
          ],
          "dictateSolution": [
            "上司",
            "を",
            "お願いします"
          ],
          "correctAnswer": "上司をお願いします"
        },
        {
          "id": "u14_l3_7",
          "type": "match",
          "prompt": "拝見する・名刺・上司・同僚",
          "furigana": "はいけんする・めいし・じょうし・どうりょう",
          "romaji": "haiken suru, meishi, joushi, douryou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "はいけんする",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "拝見する",
              "right": "To look at / read (humble)",
              "furigana": "はいけんする",
              "romaji": "haiken suru"
            },
            {
              "id": "p_1",
              "left": "名刺",
              "right": "Business card",
              "furigana": "めいし",
              "romaji": "meishi"
            },
            {
              "id": "p_2",
              "left": "上司",
              "right": "Supervisor / boss",
              "furigana": "じょうし",
              "romaji": "joushi"
            },
            {
              "id": "p_3",
              "left": "同僚",
              "right": "Colleague / coworker",
              "furigana": "どうりょう",
              "romaji": "douryou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l3_8",
          "type": "dialogue",
          "prompt": "承知についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "承知についてどう思われますか？",
          "furigana": "承知についてどう思われますか？",
          "romaji": "shouchi ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Acknowledged / understood?",
          "audioText": "承知についてどう思われますか？",
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
      "id": "u14_l4",
      "unitId": "unit_14",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Colleague / coworker & Business meeting",
      "titleJp": "同僚・会議",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "同僚",
        "会議",
        "資料"
      ],
      "kanjiKeywords": [
        "同",
        "僚",
        "会",
        "議",
        "資",
        "料"
      ],
      "items": [
        {
          "id": "u14_l4_1",
          "type": "listen",
          "prompt": "同僚",
          "furigana": "どうりょう",
          "romaji": "douryou",
          "english": "Colleague / coworker",
          "audioText": "どうりょう",
          "options": [
            "Colleague / coworker",
            "Confirming To look at / read (humble)",
            "Confirming Acknowledged / understood",
            "Acknowledged / understood"
          ],
          "correctAnswer": "Colleague / coworker"
        },
        {
          "id": "u14_l4_2",
          "type": "spell",
          "prompt": "同僚",
          "furigana": "どうりょう",
          "romaji": "douryou",
          "english": "Build 'Colleague / coworker'",
          "audioText": "どうりょう",
          "tileBank": [
            "う",
            "ゆ",
            "ど",
            "ょ",
            "え",
            "う",
            "り",
            "め"
          ],
          "correctAnswer": "どうりょう"
        },
        {
          "id": "u14_l4_3",
          "type": "cloze",
          "prompt": "私は会議がすきです",
          "furigana": "わたしはかいぎがすきです",
          "romaji": "Watashi wa kaigi ga suki desu.",
          "english": "Fill in the blank with the correct particle for Business meeting.",
          "audioText": "会議",
          "clozeSentence": "これは会議 {{BLANK}} す。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は"
        },
        {
          "id": "u14_l4_4",
          "type": "scramble",
          "prompt": "これは会議です",
          "furigana": "これはかいぎです",
          "romaji": "Kore wa kaigi desu.",
          "english": "This is Business meeting.",
          "audioText": "これは会議です",
          "scrambleTokens": [
            "です",
            "会議",
            "これは",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "会議",
            "です"
          ],
          "correctAnswer": "これは会議です"
        },
        {
          "id": "u14_l4_5",
          "type": "speak",
          "prompt": "資料",
          "furigana": "しりょう",
          "romaji": "shiryou",
          "english": "Pronounce: Documents / handout materials",
          "audioText": "しりょう",
          "targetSpeech": "資料",
          "options": [
            "Documents / handout materials",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "資料"
        },
        {
          "id": "u14_l4_6",
          "type": "dictate",
          "prompt": "資料をお願いします",
          "furigana": "しりょうをおねがいします",
          "romaji": "shiryou o onegaishimasu.",
          "english": "Documents / handout materials, please.",
          "audioText": "資料をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "ありがとう",
            "を",
            "資料"
          ],
          "dictateSolution": [
            "資料",
            "を",
            "お願いします"
          ],
          "correctAnswer": "資料をお願いします"
        },
        {
          "id": "u14_l4_7",
          "type": "match",
          "prompt": "同僚・会議・資料・報告",
          "furigana": "どうりょう・かいぎ・しりょう・ほうこく",
          "romaji": "douryou, kaigi, shiryou, houkoku",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "どうりょう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "同僚",
              "right": "Colleague / coworker",
              "furigana": "どうりょう",
              "romaji": "douryou"
            },
            {
              "id": "p_1",
              "left": "会議",
              "right": "Business meeting",
              "furigana": "かいぎ",
              "romaji": "kaigi"
            },
            {
              "id": "p_2",
              "left": "資料",
              "right": "Documents / handout materials",
              "furigana": "しりょう",
              "romaji": "shiryou"
            },
            {
              "id": "p_3",
              "left": "報告",
              "right": "Report (part of Horenso)",
              "furigana": "ほうこく",
              "romaji": "houkoku"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l4_8",
          "type": "dialogue",
          "prompt": "次は申し上げるに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は申し上げるに進みましょう。",
          "furigana": "次は申し上げるに進みましょう。",
          "romaji": "Tsugi wa moushiageru ni susumimashou.",
          "english": "Speaker: Let's proceed to To say (humble Kenjougo) next.",
          "audioText": "次は申し上げるに進みましょう。",
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
      "id": "u14_l5",
      "unitId": "unit_14",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Report (part of Horenso) & Communication / liaison",
      "titleJp": "報告・連絡",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "報告",
        "連絡",
        "相談"
      ],
      "kanjiKeywords": [
        "報",
        "告",
        "連",
        "絡",
        "相",
        "談"
      ],
      "items": [
        {
          "id": "u14_l5_1",
          "type": "listen",
          "prompt": "報告",
          "furigana": "ほうこく",
          "romaji": "houkoku",
          "english": "Report (part of Horenso)",
          "audioText": "ほうこく",
          "options": [
            "Report (part of Horenso)",
            "Confirming Acknowledged / understood",
            "Colleague / coworker",
            "To be / go / come (honorific)"
          ],
          "correctAnswer": "Report (part of Horenso)"
        },
        {
          "id": "u14_l5_2",
          "type": "spell",
          "prompt": "報告",
          "furigana": "ほうこく",
          "romaji": "houkoku",
          "english": "Build 'Report (part of Horenso)'",
          "audioText": "ほうこく",
          "tileBank": [
            "ほ",
            "そ",
            "い",
            "こ",
            "く",
            "う",
            "れ",
            "す"
          ],
          "correctAnswer": "ほうこく"
        },
        {
          "id": "u14_l5_3",
          "type": "cloze",
          "prompt": "私は連絡がすきです",
          "furigana": "わたしはれんらくがすきです",
          "romaji": "Watashi wa renraku ga suki desu.",
          "english": "Fill in the blank with the correct particle for Communication / liaison.",
          "audioText": "連絡",
          "clozeSentence": "これは連絡 {{BLANK}} す。",
          "clozeTarget": "が",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "が"
        },
        {
          "id": "u14_l5_4",
          "type": "scramble",
          "prompt": "これは連絡です",
          "furigana": "これはれんらくです",
          "romaji": "Kore wa renraku desu.",
          "english": "This is Communication / liaison.",
          "audioText": "これは連絡です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "それ",
            "です",
            "連絡"
          ],
          "scrambleSolution": [
            "これは",
            "連絡",
            "です"
          ],
          "correctAnswer": "これは連絡です"
        },
        {
          "id": "u14_l5_5",
          "type": "speak",
          "prompt": "相談",
          "furigana": "そうだん",
          "romaji": "soudan",
          "english": "Pronounce: Consultation / advice",
          "audioText": "そうだん",
          "targetSpeech": "相談",
          "options": [
            "Consultation / advice",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "相談"
        },
        {
          "id": "u14_l5_6",
          "type": "dictate",
          "prompt": "相談をお願いします",
          "furigana": "そうだんをおねがいします",
          "romaji": "soudan o onegaishimasu.",
          "english": "Consultation / advice, please.",
          "audioText": "相談をお願いします",
          "dictateTokens": [
            "お願いします",
            "相談",
            "を",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "相談",
            "を",
            "お願いします"
          ],
          "correctAnswer": "相談をお願いします"
        },
        {
          "id": "u14_l5_7",
          "type": "match",
          "prompt": "報告・連絡・相談・お疲れ様の確認",
          "furigana": "ほうこく・れんらく・そうだん・おつかれさまのかくにん",
          "romaji": "houkoku, renraku, soudan, otsukaresama no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ほうこく",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "報告",
              "right": "Report (part of Horenso)",
              "furigana": "ほうこく",
              "romaji": "houkoku"
            },
            {
              "id": "p_1",
              "left": "連絡",
              "right": "Communication / liaison",
              "furigana": "れんらく",
              "romaji": "renraku"
            },
            {
              "id": "p_2",
              "left": "相談",
              "right": "Consultation / advice",
              "furigana": "そうだん",
              "romaji": "soudan"
            },
            {
              "id": "p_3",
              "left": "お疲れ様の確認",
              "right": "Confirming Thank you for your hard work",
              "furigana": "おつかれさまのかくにん",
              "romaji": "otsukaresama no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l5_8",
          "type": "dialogue",
          "prompt": "お疲れ様について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "お疲れ様について教えていただけますか？",
          "furigana": "お疲れ様について教えていただけますか？",
          "romaji": "otsukaresama ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Thank you for your hard work?",
          "audioText": "お疲れ様について教えていただけますか？",
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
      "id": "u14_l6",
      "unitId": "unit_14",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Thank you for your hard work & Confirming Excuse me (entering/leaving)",
      "titleJp": "お疲れ様の確認・失礼しますの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "お疲れ様の確認",
        "失礼しますの確認",
        "承知の確認"
      ],
      "kanjiKeywords": [
        "疲",
        "様",
        "確",
        "認",
        "失",
        "礼",
        "確",
        "認",
        "承",
        "知",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u14_l6_1",
          "type": "listen",
          "prompt": "お疲れ様の確認",
          "furigana": "おつかれさまのかくにん",
          "romaji": "otsukaresama no kakunin",
          "english": "Confirming Thank you for your hard work",
          "audioText": "おつかれさまのかくにん",
          "options": [
            "Consultation / advice",
            "Confirming To look at / read (humble)",
            "Confirming Thank you for your hard work",
            "Confirming Excuse me (entering/leaving)"
          ],
          "correctAnswer": "Confirming Thank you for your hard work"
        },
        {
          "id": "u14_l6_2",
          "type": "spell",
          "prompt": "お疲れ様の確認",
          "furigana": "おつかれさまのかくにん",
          "romaji": "otsukaresama no kakunin",
          "english": "Build 'Confirming Thank you for your hard work'",
          "audioText": "おつかれさまのかくにん",
          "tileBank": [
            "か",
            "ま",
            "れ",
            "か",
            "つ",
            "さ",
            "お",
            "の"
          ],
          "correctAnswer": "おつかれさまのかくにん"
        },
        {
          "id": "u14_l6_3",
          "type": "cloze",
          "prompt": "私は失礼しますの確認がすきです",
          "furigana": "わたしはしつれいしますのかくにんがすきです",
          "romaji": "Watashi wa shitsureishimasu no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Excuse me (entering/leaving).",
          "audioText": "失礼しますの確認",
          "clozeSentence": "これは失礼しますの確認 {{BLANK}} す。",
          "clozeTarget": "を",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "を"
        },
        {
          "id": "u14_l6_4",
          "type": "scramble",
          "prompt": "これは失礼しますの確認です",
          "furigana": "これはしつれいしますのかくにんです",
          "romaji": "Kore wa shitsureishimasu no kakunin desu.",
          "english": "This is Confirming Excuse me (entering/leaving).",
          "audioText": "これは失礼しますの確認です",
          "scrambleTokens": [
            "これは",
            "それ",
            "ではありません",
            "失礼しますの確認",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "失礼しますの確認",
            "です"
          ],
          "correctAnswer": "これは失礼しますの確認です"
        },
        {
          "id": "u14_l6_5",
          "type": "speak",
          "prompt": "承知の確認",
          "furigana": "しょうちのかくにん",
          "romaji": "shouchi no kakunin",
          "english": "Pronounce: Confirming Acknowledged / understood",
          "audioText": "しょうちのかくにん",
          "targetSpeech": "承知の確認",
          "options": [
            "Confirming Acknowledged / understood",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "承知の確認"
        },
        {
          "id": "u14_l6_6",
          "type": "dictate",
          "prompt": "承知の確認をお願いします",
          "furigana": "しょうちのかくにんをおねがいします",
          "romaji": "shouchi no kakunin o onegaishimasu.",
          "english": "Confirming Acknowledged / understood, please.",
          "audioText": "承知の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "承知の確認",
            "を",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "承知の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "承知の確認をお願いします"
        },
        {
          "id": "u14_l6_7",
          "type": "match",
          "prompt": "お疲れ様の確認・失礼しますの確認・承知の確認・申し上げるの確認",
          "furigana": "おつかれさまのかくにん・しつれいしますのかくにん・しょうちのかくにん・もうしあげるのかくにん",
          "romaji": "otsukaresama no kakunin, shitsureishimasu no kakunin, shouchi no kakunin, moushiageru no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おつかれさまのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "お疲れ様の確認",
              "right": "Confirming Thank you for your hard work",
              "furigana": "おつかれさまのかくにん",
              "romaji": "otsukaresama no kakunin"
            },
            {
              "id": "p_1",
              "left": "失礼しますの確認",
              "right": "Confirming Excuse me (entering/leaving)",
              "furigana": "しつれいしますのかくにん",
              "romaji": "shitsureishimasu no kakunin"
            },
            {
              "id": "p_2",
              "left": "承知の確認",
              "right": "Confirming Acknowledged / understood",
              "furigana": "しょうちのかくにん",
              "romaji": "shouchi no kakunin"
            },
            {
              "id": "p_3",
              "left": "申し上げるの確認",
              "right": "Confirming To say (humble Kenjougo)",
              "furigana": "もうしあげるのかくにん",
              "romaji": "moushiageru no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l6_8",
          "type": "dialogue",
          "prompt": "失礼しますの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "失礼しますの準備はできていますか？",
          "furigana": "失礼しますの準備はできていますか？",
          "romaji": "shitsureishimasu no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Excuse me (entering/leaving) ready?",
          "audioText": "失礼しますの準備はできていますか？",
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
      "id": "u14_l7",
      "unitId": "unit_14",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming To say (humble Kenjougo) & Confirming To be / go / come (honorific)",
      "titleJp": "申し上げるの確認・いらっしゃるの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "申し上げるの確認",
        "いらっしゃるの確認",
        "ご覧になるの確認"
      ],
      "kanjiKeywords": [
        "申",
        "上",
        "確",
        "認",
        "確",
        "認",
        "覧",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u14_l7_1",
          "type": "listen",
          "prompt": "申し上げるの確認",
          "furigana": "もうしあげるのかくにん",
          "romaji": "moushiageru no kakunin",
          "english": "Confirming To say (humble Kenjougo)",
          "audioText": "もうしあげるのかくにん",
          "options": [
            "Confirming To say (humble Kenjougo)",
            "Confirming Excuse me (entering/leaving)",
            "Confirming Business meeting",
            "Acknowledged / understood"
          ],
          "correctAnswer": "Confirming To say (humble Kenjougo)"
        },
        {
          "id": "u14_l7_2",
          "type": "spell",
          "prompt": "申し上げるの確認",
          "furigana": "もうしあげるのかくにん",
          "romaji": "moushiageru no kakunin",
          "english": "Build 'Confirming To say (humble Kenjougo)'",
          "audioText": "もうしあげるのかくにん",
          "tileBank": [
            "か",
            "る",
            "あ",
            "も",
            "う",
            "げ",
            "し",
            "の"
          ],
          "correctAnswer": "もうしあげるのかくにん"
        },
        {
          "id": "u14_l7_3",
          "type": "cloze",
          "prompt": "私はいらっしゃるの確認がすきです",
          "furigana": "わたしはいらっしゃるのかくにんがすきです",
          "romaji": "Watashi wa irassharu no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming To be / go / come (honorific).",
          "audioText": "いらっしゃるの確認",
          "clozeSentence": "これはいらっしゃるの確認 {{BLANK}} す。",
          "clozeTarget": "に",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "に"
        },
        {
          "id": "u14_l7_4",
          "type": "scramble",
          "prompt": "これはいらっしゃるの確認です",
          "furigana": "これはいらっしゃるのかくにんです",
          "romaji": "Kore wa irassharu no kakunin desu.",
          "english": "This is Confirming To be / go / come (honorific).",
          "audioText": "これはいらっしゃるの確認です",
          "scrambleTokens": [
            "いらっしゃるの確認",
            "これは",
            "それ",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "いらっしゃるの確認",
            "です"
          ],
          "correctAnswer": "これはいらっしゃるの確認です"
        },
        {
          "id": "u14_l7_5",
          "type": "speak",
          "prompt": "ご覧になるの確認",
          "furigana": "ごらんになるのかくにん",
          "romaji": "goran ni naru no kakunin",
          "english": "Pronounce: Confirming To see / inspect (honorific)",
          "audioText": "ごらんになるのかくにん",
          "targetSpeech": "ご覧になるの確認",
          "options": [
            "Confirming To see / inspect (honorific)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ご覧になるの確認"
        },
        {
          "id": "u14_l7_6",
          "type": "dictate",
          "prompt": "ご覧になるの確認をお願いします",
          "furigana": "ごらんになるのかくにんをおねがいします",
          "romaji": "goran ni naru no kakunin o onegaishimasu.",
          "english": "Confirming To see / inspect (honorific), please.",
          "audioText": "ご覧になるの確認をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "を",
            "ご覧になるの確認",
            "ありがとう"
          ],
          "dictateSolution": [
            "ご覧になるの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ご覧になるの確認をお願いします"
        },
        {
          "id": "u14_l7_7",
          "type": "match",
          "prompt": "申し上げるの確認・いらっしゃるの確認・ご覧になるの確認・拝見するの確認",
          "furigana": "もうしあげるのかくにん・いらっしゃるのかくにん・ごらんになるのかくにん・はいけんするのかくにん",
          "romaji": "moushiageru no kakunin, irassharu no kakunin, goran ni naru no kakunin, haiken suru no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "もうしあげるのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "申し上げるの確認",
              "right": "Confirming To say (humble Kenjougo)",
              "furigana": "もうしあげるのかくにん",
              "romaji": "moushiageru no kakunin"
            },
            {
              "id": "p_1",
              "left": "いらっしゃるの確認",
              "right": "Confirming To be / go / come (honorific)",
              "furigana": "いらっしゃるのかくにん",
              "romaji": "irassharu no kakunin"
            },
            {
              "id": "p_2",
              "left": "ご覧になるの確認",
              "right": "Confirming To see / inspect (honorific)",
              "furigana": "ごらんになるのかくにん",
              "romaji": "goran ni naru no kakunin"
            },
            {
              "id": "p_3",
              "left": "拝見するの確認",
              "right": "Confirming To look at / read (humble)",
              "furigana": "はいけんするのかくにん",
              "romaji": "haiken suru no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l7_8",
          "type": "dialogue",
          "prompt": "承知についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "承知についてどう思われますか？",
          "furigana": "承知についてどう思われますか？",
          "romaji": "shouchi ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Acknowledged / understood?",
          "audioText": "承知についてどう思われますか？",
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
      "id": "u14_l8",
      "unitId": "unit_14",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming To look at / read (humble) & Confirming Business card",
      "titleJp": "拝見するの確認・名刺の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "拝見するの確認",
        "名刺の確認",
        "上司の確認"
      ],
      "kanjiKeywords": [
        "拝",
        "見",
        "確",
        "認",
        "名",
        "刺",
        "確",
        "認",
        "上",
        "司",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u14_l8_1",
          "type": "listen",
          "prompt": "拝見するの確認",
          "furigana": "はいけんするのかくにん",
          "romaji": "haiken suru no kakunin",
          "english": "Confirming To look at / read (humble)",
          "audioText": "はいけんするのかくにん",
          "options": [
            "Confirming To look at / read (humble)",
            "Report (part of Horenso)",
            "To be / go / come (honorific)",
            "Confirming Business meeting"
          ],
          "correctAnswer": "Confirming To look at / read (humble)"
        },
        {
          "id": "u14_l8_2",
          "type": "spell",
          "prompt": "拝見するの確認",
          "furigana": "はいけんするのかくにん",
          "romaji": "haiken suru no kakunin",
          "english": "Build 'Confirming To look at / read (humble)'",
          "audioText": "はいけんするのかくにん",
          "tileBank": [
            "い",
            "の",
            "る",
            "す",
            "は",
            "け",
            "ん",
            "か"
          ],
          "correctAnswer": "はいけんするのかくにん"
        },
        {
          "id": "u14_l8_3",
          "type": "cloze",
          "prompt": "私は名刺の確認がすきです",
          "furigana": "わたしはめいしのかくにんがすきです",
          "romaji": "Watashi wa meishi no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Business card.",
          "audioText": "名刺の確認",
          "clozeSentence": "これは名刺の確認 {{BLANK}} す。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は"
        },
        {
          "id": "u14_l8_4",
          "type": "scramble",
          "prompt": "これは名刺の確認です",
          "furigana": "これはめいしのかくにんです",
          "romaji": "Kore wa meishi no kakunin desu.",
          "english": "This is Confirming Business card.",
          "audioText": "これは名刺の確認です",
          "scrambleTokens": [
            "です",
            "名刺の確認",
            "これは",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "名刺の確認",
            "です"
          ],
          "correctAnswer": "これは名刺の確認です"
        },
        {
          "id": "u14_l8_5",
          "type": "speak",
          "prompt": "上司の確認",
          "furigana": "じょうしのかくにん",
          "romaji": "joushi no kakunin",
          "english": "Pronounce: Confirming Supervisor / boss",
          "audioText": "じょうしのかくにん",
          "targetSpeech": "上司の確認",
          "options": [
            "Confirming Supervisor / boss",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "上司の確認"
        },
        {
          "id": "u14_l8_6",
          "type": "dictate",
          "prompt": "上司の確認をお願いします",
          "furigana": "じょうしのかくにんをおねがいします",
          "romaji": "joushi no kakunin o onegaishimasu.",
          "english": "Confirming Supervisor / boss, please.",
          "audioText": "上司の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "です",
            "上司の確認",
            "を"
          ],
          "dictateSolution": [
            "上司の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "上司の確認をお願いします"
        },
        {
          "id": "u14_l8_7",
          "type": "match",
          "prompt": "拝見するの確認・名刺の確認・上司の確認・同僚の確認",
          "furigana": "はいけんするのかくにん・めいしのかくにん・じょうしのかくにん・どうりょうのかくにん",
          "romaji": "haiken suru no kakunin, meishi no kakunin, joushi no kakunin, douryou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "はいけんするのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "拝見するの確認",
              "right": "Confirming To look at / read (humble)",
              "furigana": "はいけんするのかくにん",
              "romaji": "haiken suru no kakunin"
            },
            {
              "id": "p_1",
              "left": "名刺の確認",
              "right": "Confirming Business card",
              "furigana": "めいしのかくにん",
              "romaji": "meishi no kakunin"
            },
            {
              "id": "p_2",
              "left": "上司の確認",
              "right": "Confirming Supervisor / boss",
              "furigana": "じょうしのかくにん",
              "romaji": "joushi no kakunin"
            },
            {
              "id": "p_3",
              "left": "同僚の確認",
              "right": "Confirming Colleague / coworker",
              "furigana": "どうりょうのかくにん",
              "romaji": "douryou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l8_8",
          "type": "dialogue",
          "prompt": "次は申し上げるに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は申し上げるに進みましょう。",
          "furigana": "次は申し上げるに進みましょう。",
          "romaji": "Tsugi wa moushiageru ni susumimashou.",
          "english": "Speaker: Let's proceed to To say (humble Kenjougo) next.",
          "audioText": "次は申し上げるに進みましょう。",
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
      "id": "u14_l9",
      "unitId": "unit_14",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Colleague / coworker & Confirming Business meeting",
      "titleJp": "同僚の確認・会議の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "同僚の確認",
        "会議の確認",
        "資料の確認"
      ],
      "kanjiKeywords": [
        "同",
        "僚",
        "確",
        "認",
        "会",
        "議",
        "確",
        "認",
        "資",
        "料",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u14_l9_1",
          "type": "listen",
          "prompt": "同僚の確認",
          "furigana": "どうりょうのかくにん",
          "romaji": "douryou no kakunin",
          "english": "Confirming Colleague / coworker",
          "audioText": "どうりょうのかくにん",
          "options": [
            "Confirming Acknowledged / understood",
            "Business meeting",
            "Confirming Colleague / coworker",
            "Acknowledged / understood"
          ],
          "correctAnswer": "Confirming Colleague / coworker"
        },
        {
          "id": "u14_l9_2",
          "type": "spell",
          "prompt": "同僚の確認",
          "furigana": "どうりょうのかくにん",
          "romaji": "douryou no kakunin",
          "english": "Build 'Confirming Colleague / coworker'",
          "audioText": "どうりょうのかくにん",
          "tileBank": [
            "う",
            "ど",
            "ょ",
            "り",
            "う",
            "か",
            "の",
            "く"
          ],
          "correctAnswer": "どうりょうのかくにん"
        },
        {
          "id": "u14_l9_3",
          "type": "cloze",
          "prompt": "私は会議の確認がすきです",
          "furigana": "わたしはかいぎのかくにんがすきです",
          "romaji": "Watashi wa kaigi no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Business meeting.",
          "audioText": "会議の確認",
          "clozeSentence": "これは会議の確認 {{BLANK}} す。",
          "clozeTarget": "が",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "が"
        },
        {
          "id": "u14_l9_4",
          "type": "scramble",
          "prompt": "これは会議の確認です",
          "furigana": "これはかいぎのかくにんです",
          "romaji": "Kore wa kaigi no kakunin desu.",
          "english": "This is Confirming Business meeting.",
          "audioText": "これは会議の確認です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "これは",
            "それ",
            "会議の確認"
          ],
          "scrambleSolution": [
            "これは",
            "会議の確認",
            "です"
          ],
          "correctAnswer": "これは会議の確認です"
        },
        {
          "id": "u14_l9_5",
          "type": "speak",
          "prompt": "資料の確認",
          "furigana": "しりょうのかくにん",
          "romaji": "shiryou no kakunin",
          "english": "Pronounce: Confirming Documents / handout materials",
          "audioText": "しりょうのかくにん",
          "targetSpeech": "資料の確認",
          "options": [
            "Confirming Documents / handout materials",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "資料の確認"
        },
        {
          "id": "u14_l9_6",
          "type": "dictate",
          "prompt": "資料の確認をお願いします",
          "furigana": "しりょうのかくにんをおねがいします",
          "romaji": "shiryou no kakunin o onegaishimasu.",
          "english": "Confirming Documents / handout materials, please.",
          "audioText": "資料の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "資料の確認",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "資料の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "資料の確認をお願いします"
        },
        {
          "id": "u14_l9_7",
          "type": "match",
          "prompt": "同僚の確認・会議の確認・資料の確認・報告の確認",
          "furigana": "どうりょうのかくにん・かいぎのかくにん・しりょうのかくにん・ほうこくのかくにん",
          "romaji": "douryou no kakunin, kaigi no kakunin, shiryou no kakunin, houkoku no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "どうりょうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "同僚の確認",
              "right": "Confirming Colleague / coworker",
              "furigana": "どうりょうのかくにん",
              "romaji": "douryou no kakunin"
            },
            {
              "id": "p_1",
              "left": "会議の確認",
              "right": "Confirming Business meeting",
              "furigana": "かいぎのかくにん",
              "romaji": "kaigi no kakunin"
            },
            {
              "id": "p_2",
              "left": "資料の確認",
              "right": "Confirming Documents / handout materials",
              "furigana": "しりょうのかくにん",
              "romaji": "shiryou no kakunin"
            },
            {
              "id": "p_3",
              "left": "報告の確認",
              "right": "Confirming Report (part of Horenso)",
              "furigana": "ほうこくのかくにん",
              "romaji": "houkoku no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l9_8",
          "type": "dialogue",
          "prompt": "お疲れ様について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "お疲れ様について教えていただけますか？",
          "furigana": "お疲れ様について教えていただけますか？",
          "romaji": "otsukaresama ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Thank you for your hard work?",
          "audioText": "お疲れ様について教えていただけますか？",
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
      "id": "u14_l10",
      "unitId": "unit_14",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Report (part of Horenso) & Confirming Communication / liaison",
      "titleJp": "報告の確認・連絡の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "報告の確認",
        "連絡の確認",
        "相談の確認"
      ],
      "kanjiKeywords": [
        "報",
        "告",
        "確",
        "認",
        "連",
        "絡",
        "確",
        "認",
        "相",
        "談",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u14_l10_1",
          "type": "listen",
          "prompt": "報告の確認",
          "furigana": "ほうこくのかくにん",
          "romaji": "houkoku no kakunin",
          "english": "Confirming Report (part of Horenso)",
          "audioText": "ほうこくのかくにん",
          "options": [
            "Confirming Report (part of Horenso)",
            "Confirming Excuse me (entering/leaving)",
            "Thank you for your hard work",
            "Confirming Acknowledged / understood"
          ],
          "correctAnswer": "Confirming Report (part of Horenso)"
        },
        {
          "id": "u14_l10_2",
          "type": "spell",
          "prompt": "報告の確認",
          "furigana": "ほうこくのかくにん",
          "romaji": "houkoku no kakunin",
          "english": "Build 'Confirming Report (part of Horenso)'",
          "audioText": "ほうこくのかくにん",
          "tileBank": [
            "こ",
            "う",
            "の",
            "く",
            "か",
            "く",
            "に",
            "ほ"
          ],
          "correctAnswer": "ほうこくのかくにん"
        },
        {
          "id": "u14_l10_3",
          "type": "cloze",
          "prompt": "私は連絡の確認がすきです",
          "furigana": "わたしはれんらくのかくにんがすきです",
          "romaji": "Watashi wa renraku no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Communication / liaison.",
          "audioText": "連絡の確認",
          "clozeSentence": "これは連絡の確認 {{BLANK}} す。",
          "clozeTarget": "を",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "を"
        },
        {
          "id": "u14_l10_4",
          "type": "scramble",
          "prompt": "これは連絡の確認です",
          "furigana": "これはれんらくのかくにんです",
          "romaji": "Kore wa renraku no kakunin desu.",
          "english": "This is Confirming Communication / liaison.",
          "audioText": "これは連絡の確認です",
          "scrambleTokens": [
            "それ",
            "これは",
            "連絡の確認",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "連絡の確認",
            "です"
          ],
          "correctAnswer": "これは連絡の確認です"
        },
        {
          "id": "u14_l10_5",
          "type": "speak",
          "prompt": "相談の確認",
          "furigana": "そうだんのかくにん",
          "romaji": "soudan no kakunin",
          "english": "Pronounce: Confirming Consultation / advice",
          "audioText": "そうだんのかくにん",
          "targetSpeech": "相談の確認",
          "options": [
            "Confirming Consultation / advice",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "相談の確認"
        },
        {
          "id": "u14_l10_6",
          "type": "dictate",
          "prompt": "相談の確認をお願いします",
          "furigana": "そうだんのかくにんをおねがいします",
          "romaji": "soudan no kakunin o onegaishimasu.",
          "english": "Confirming Consultation / advice, please.",
          "audioText": "相談の確認をお願いします",
          "dictateTokens": [
            "相談の確認",
            "を",
            "お願いします",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "相談の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "相談の確認をお願いします"
        },
        {
          "id": "u14_l10_7",
          "type": "match",
          "prompt": "報告の確認・連絡の確認・相談の確認・お疲れ様の確認",
          "furigana": "ほうこくのかくにん・れんらくのかくにん・そうだんのかくにん・おつかれさまのかくにん",
          "romaji": "houkoku no kakunin, renraku no kakunin, soudan no kakunin, otsukaresama no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ほうこくのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "報告の確認",
              "right": "Confirming Report (part of Horenso)",
              "furigana": "ほうこくのかくにん",
              "romaji": "houkoku no kakunin"
            },
            {
              "id": "p_1",
              "left": "連絡の確認",
              "right": "Confirming Communication / liaison",
              "furigana": "れんらくのかくにん",
              "romaji": "renraku no kakunin"
            },
            {
              "id": "p_2",
              "left": "相談の確認",
              "right": "Confirming Consultation / advice",
              "furigana": "そうだんのかくにん",
              "romaji": "soudan no kakunin"
            },
            {
              "id": "p_3",
              "left": "お疲れ様の確認",
              "right": "Confirming Thank you for your hard work",
              "furigana": "おつかれさまのかくにん",
              "romaji": "otsukaresama no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l10_8",
          "type": "dialogue",
          "prompt": "失礼しますの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "失礼しますの準備はできていますか？",
          "furigana": "失礼しますの準備はできていますか？",
          "romaji": "shitsureishimasu no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Excuse me (entering/leaving) ready?",
          "audioText": "失礼しますの準備はできていますか？",
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
      "id": "u14_l11",
      "unitId": "unit_14",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Thank you for your hard work & Confirming Excuse me (entering/leaving)",
      "titleJp": "お疲れ様の確認・失礼しますの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "お疲れ様の確認",
        "失礼しますの確認",
        "承知の確認"
      ],
      "kanjiKeywords": [
        "疲",
        "様",
        "確",
        "認",
        "失",
        "礼",
        "確",
        "認",
        "承",
        "知",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u14_l11_1",
          "type": "listen",
          "prompt": "お疲れ様の確認",
          "furigana": "おつかれさまのかくにん",
          "romaji": "otsukaresama no kakunin",
          "english": "Confirming Thank you for your hard work",
          "audioText": "おつかれさまのかくにん",
          "options": [
            "Confirming To look at / read (humble)",
            "Confirming Thank you for your hard work",
            "Confirming Acknowledged / understood",
            "Confirming To say (humble Kenjougo)"
          ],
          "correctAnswer": "Confirming Thank you for your hard work"
        },
        {
          "id": "u14_l11_2",
          "type": "spell",
          "prompt": "お疲れ様の確認",
          "furigana": "おつかれさまのかくにん",
          "romaji": "otsukaresama no kakunin",
          "english": "Build 'Confirming Thank you for your hard work'",
          "audioText": "おつかれさまのかくにん",
          "tileBank": [
            "の",
            "れ",
            "お",
            "つ",
            "か",
            "ま",
            "さ",
            "か"
          ],
          "correctAnswer": "おつかれさまのかくにん"
        },
        {
          "id": "u14_l11_3",
          "type": "cloze",
          "prompt": "私は失礼しますの確認がすきです",
          "furigana": "わたしはしつれいしますのかくにんがすきです",
          "romaji": "Watashi wa shitsureishimasu no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Excuse me (entering/leaving).",
          "audioText": "失礼しますの確認",
          "clozeSentence": "これは失礼しますの確認 {{BLANK}} す。",
          "clozeTarget": "に",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "に"
        },
        {
          "id": "u14_l11_4",
          "type": "scramble",
          "prompt": "これは失礼しますの確認です",
          "furigana": "これはしつれいしますのかくにんです",
          "romaji": "Kore wa shitsureishimasu no kakunin desu.",
          "english": "This is Confirming Excuse me (entering/leaving).",
          "audioText": "これは失礼しますの確認です",
          "scrambleTokens": [
            "失礼しますの確認",
            "ではありません",
            "です",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "失礼しますの確認",
            "です"
          ],
          "correctAnswer": "これは失礼しますの確認です"
        },
        {
          "id": "u14_l11_5",
          "type": "speak",
          "prompt": "承知の確認",
          "furigana": "しょうちのかくにん",
          "romaji": "shouchi no kakunin",
          "english": "Pronounce: Confirming Acknowledged / understood",
          "audioText": "しょうちのかくにん",
          "targetSpeech": "承知の確認",
          "options": [
            "Confirming Acknowledged / understood",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "承知の確認"
        },
        {
          "id": "u14_l11_6",
          "type": "dictate",
          "prompt": "承知の確認をお願いします",
          "furigana": "しょうちのかくにんをおねがいします",
          "romaji": "shouchi no kakunin o onegaishimasu.",
          "english": "Confirming Acknowledged / understood, please.",
          "audioText": "承知の確認をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "承知の確認",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "承知の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "承知の確認をお願いします"
        },
        {
          "id": "u14_l11_7",
          "type": "match",
          "prompt": "お疲れ様の確認・失礼しますの確認・承知の確認・申し上げるの確認",
          "furigana": "おつかれさまのかくにん・しつれいしますのかくにん・しょうちのかくにん・もうしあげるのかくにん",
          "romaji": "otsukaresama no kakunin, shitsureishimasu no kakunin, shouchi no kakunin, moushiageru no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おつかれさまのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "お疲れ様の確認",
              "right": "Confirming Thank you for your hard work",
              "furigana": "おつかれさまのかくにん",
              "romaji": "otsukaresama no kakunin"
            },
            {
              "id": "p_1",
              "left": "失礼しますの確認",
              "right": "Confirming Excuse me (entering/leaving)",
              "furigana": "しつれいしますのかくにん",
              "romaji": "shitsureishimasu no kakunin"
            },
            {
              "id": "p_2",
              "left": "承知の確認",
              "right": "Confirming Acknowledged / understood",
              "furigana": "しょうちのかくにん",
              "romaji": "shouchi no kakunin"
            },
            {
              "id": "p_3",
              "left": "申し上げるの確認",
              "right": "Confirming To say (humble Kenjougo)",
              "furigana": "もうしあげるのかくにん",
              "romaji": "moushiageru no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l11_8",
          "type": "dialogue",
          "prompt": "承知についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "承知についてどう思われますか？",
          "furigana": "承知についてどう思われますか？",
          "romaji": "shouchi ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Acknowledged / understood?",
          "audioText": "承知についてどう思われますか？",
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
      "id": "u14_l12",
      "unitId": "unit_14",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming To say (humble Kenjougo) & Confirming To be / go / come (honorific)",
      "titleJp": "申し上げるの確認・いらっしゃるの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "申し上げるの確認",
        "いらっしゃるの確認",
        "ご覧になるの確認"
      ],
      "kanjiKeywords": [
        "申",
        "上",
        "確",
        "認",
        "確",
        "認",
        "覧",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u14_l12_1",
          "type": "listen",
          "prompt": "申し上げるの確認",
          "furigana": "もうしあげるのかくにん",
          "romaji": "moushiageru no kakunin",
          "english": "Confirming To say (humble Kenjougo)",
          "audioText": "もうしあげるのかくにん",
          "options": [
            "To look at / read (humble)",
            "Confirming To see / inspect (honorific)",
            "Colleague / coworker",
            "Confirming To say (humble Kenjougo)"
          ],
          "correctAnswer": "Confirming To say (humble Kenjougo)"
        },
        {
          "id": "u14_l12_2",
          "type": "spell",
          "prompt": "申し上げるの確認",
          "furigana": "もうしあげるのかくにん",
          "romaji": "moushiageru no kakunin",
          "english": "Build 'Confirming To say (humble Kenjougo)'",
          "audioText": "もうしあげるのかくにん",
          "tileBank": [
            "げ",
            "の",
            "か",
            "し",
            "も",
            "る",
            "う",
            "あ"
          ],
          "correctAnswer": "もうしあげるのかくにん"
        },
        {
          "id": "u14_l12_3",
          "type": "cloze",
          "prompt": "私はいらっしゃるの確認がすきです",
          "furigana": "わたしはいらっしゃるのかくにんがすきです",
          "romaji": "Watashi wa irassharu no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming To be / go / come (honorific).",
          "audioText": "いらっしゃるの確認",
          "clozeSentence": "これはいらっしゃるの確認 {{BLANK}} す。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は"
        },
        {
          "id": "u14_l12_4",
          "type": "scramble",
          "prompt": "これはいらっしゃるの確認です",
          "furigana": "これはいらっしゃるのかくにんです",
          "romaji": "Kore wa irassharu no kakunin desu.",
          "english": "This is Confirming To be / go / come (honorific).",
          "audioText": "これはいらっしゃるの確認です",
          "scrambleTokens": [
            "いらっしゃるの確認",
            "それ",
            "です",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "いらっしゃるの確認",
            "です"
          ],
          "correctAnswer": "これはいらっしゃるの確認です"
        },
        {
          "id": "u14_l12_5",
          "type": "speak",
          "prompt": "ご覧になるの確認",
          "furigana": "ごらんになるのかくにん",
          "romaji": "goran ni naru no kakunin",
          "english": "Pronounce: Confirming To see / inspect (honorific)",
          "audioText": "ごらんになるのかくにん",
          "targetSpeech": "ご覧になるの確認",
          "options": [
            "Confirming To see / inspect (honorific)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ご覧になるの確認"
        },
        {
          "id": "u14_l12_6",
          "type": "dictate",
          "prompt": "ご覧になるの確認をお願いします",
          "furigana": "ごらんになるのかくにんをおねがいします",
          "romaji": "goran ni naru no kakunin o onegaishimasu.",
          "english": "Confirming To see / inspect (honorific), please.",
          "audioText": "ご覧になるの確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "ご覧になるの確認",
            "ありがとう",
            "です",
            "を"
          ],
          "dictateSolution": [
            "ご覧になるの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ご覧になるの確認をお願いします"
        },
        {
          "id": "u14_l12_7",
          "type": "match",
          "prompt": "申し上げるの確認・いらっしゃるの確認・ご覧になるの確認・お疲れ様",
          "furigana": "もうしあげるのかくにん・いらっしゃるのかくにん・ごらんになるのかくにん・おつかれさま",
          "romaji": "moushiageru no kakunin, irassharu no kakunin, goran ni naru no kakunin, otsukaresama",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "もうしあげるのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "申し上げるの確認",
              "right": "Confirming To say (humble Kenjougo)",
              "furigana": "もうしあげるのかくにん",
              "romaji": "moushiageru no kakunin"
            },
            {
              "id": "p_1",
              "left": "いらっしゃるの確認",
              "right": "Confirming To be / go / come (honorific)",
              "furigana": "いらっしゃるのかくにん",
              "romaji": "irassharu no kakunin"
            },
            {
              "id": "p_2",
              "left": "ご覧になるの確認",
              "right": "Confirming To see / inspect (honorific)",
              "furigana": "ごらんになるのかくにん",
              "romaji": "goran ni naru no kakunin"
            },
            {
              "id": "p_3",
              "left": "お疲れ様",
              "right": "Thank you for your hard work",
              "furigana": "おつかれさま",
              "romaji": "otsukaresama"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l12_8",
          "type": "dialogue",
          "prompt": "次は申し上げるに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は申し上げるに進みましょう。",
          "furigana": "次は申し上げるに進みましょう。",
          "romaji": "Tsugi wa moushiageru ni susumimashou.",
          "english": "Speaker: Let's proceed to To say (humble Kenjougo) next.",
          "audioText": "次は申し上げるに進みましょう。",
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
      "id": "u14_l13",
      "unitId": "unit_14",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Thank you for your hard work & Excuse me (entering/leaving)",
      "titleJp": "お疲れ様・失礼します",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "お疲れ様",
        "失礼します",
        "承知"
      ],
      "kanjiKeywords": [
        "疲",
        "様",
        "失",
        "礼",
        "承",
        "知"
      ],
      "items": [
        {
          "id": "u14_l13_1",
          "type": "listen",
          "prompt": "お疲れ様",
          "furigana": "おつかれさま",
          "romaji": "otsukaresama",
          "english": "Thank you for your hard work",
          "audioText": "おつかれさま",
          "options": [
            "Confirming Communication / liaison",
            "Thank you for your hard work",
            "To see / inspect (honorific)",
            "Business meeting"
          ],
          "correctAnswer": "Thank you for your hard work"
        },
        {
          "id": "u14_l13_2",
          "type": "spell",
          "prompt": "お疲れ様",
          "furigana": "おつかれさま",
          "romaji": "otsukaresama",
          "english": "Build 'Thank you for your hard work'",
          "audioText": "おつかれさま",
          "tileBank": [
            "つ",
            "お",
            "ま",
            "か",
            "よ",
            "や",
            "さ",
            "れ"
          ],
          "correctAnswer": "おつかれさま"
        },
        {
          "id": "u14_l13_3",
          "type": "cloze",
          "prompt": "私は失礼しますがすきです",
          "furigana": "わたしはしつれいしますがすきです",
          "romaji": "Watashi wa shitsureishimasu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Excuse me (entering/leaving).",
          "audioText": "失礼します",
          "clozeSentence": "これは失礼します {{BLANK}} す。",
          "clozeTarget": "が",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "が"
        },
        {
          "id": "u14_l13_4",
          "type": "scramble",
          "prompt": "これは失礼しますです",
          "furigana": "これはしつれいしますです",
          "romaji": "Kore wa shitsureishimasu desu.",
          "english": "This is Excuse me (entering/leaving).",
          "audioText": "これは失礼しますです",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "です",
            "失礼します",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "失礼します",
            "です"
          ],
          "correctAnswer": "これは失礼しますです"
        },
        {
          "id": "u14_l13_5",
          "type": "speak",
          "prompt": "承知",
          "furigana": "しょうち",
          "romaji": "shouchi",
          "english": "Pronounce: Acknowledged / understood",
          "audioText": "しょうち",
          "targetSpeech": "承知",
          "options": [
            "Acknowledged / understood",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "承知"
        },
        {
          "id": "u14_l13_6",
          "type": "dictate",
          "prompt": "承知をお願いします",
          "furigana": "しょうちをおねがいします",
          "romaji": "shouchi o onegaishimasu.",
          "english": "Acknowledged / understood, please.",
          "audioText": "承知をお願いします",
          "dictateTokens": [
            "を",
            "承知",
            "お願いします",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "承知",
            "を",
            "お願いします"
          ],
          "correctAnswer": "承知をお願いします"
        },
        {
          "id": "u14_l13_7",
          "type": "match",
          "prompt": "お疲れ様・失礼します・承知・申し上げる",
          "furigana": "おつかれさま・しつれいします・しょうち・もうしあげる",
          "romaji": "otsukaresama, shitsureishimasu, shouchi, moushiageru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おつかれさま",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "お疲れ様",
              "right": "Thank you for your hard work",
              "furigana": "おつかれさま",
              "romaji": "otsukaresama"
            },
            {
              "id": "p_1",
              "left": "失礼します",
              "right": "Excuse me (entering/leaving)",
              "furigana": "しつれいします",
              "romaji": "shitsureishimasu"
            },
            {
              "id": "p_2",
              "left": "承知",
              "right": "Acknowledged / understood",
              "furigana": "しょうち",
              "romaji": "shouchi"
            },
            {
              "id": "p_3",
              "left": "申し上げる",
              "right": "To say (humble Kenjougo)",
              "furigana": "もうしあげる",
              "romaji": "moushiageru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l13_8",
          "type": "dialogue",
          "prompt": "お疲れ様について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "お疲れ様について教えていただけますか？",
          "furigana": "お疲れ様について教えていただけますか？",
          "romaji": "otsukaresama ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Thank you for your hard work?",
          "audioText": "お疲れ様について教えていただけますか？",
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
      "id": "u14_l14",
      "unitId": "unit_14",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "To say (humble Kenjougo) & To be / go / come (honorific)",
      "titleJp": "申し上げる・いらっしゃる",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "申し上げる",
        "いらっしゃる",
        "ご覧になる"
      ],
      "kanjiKeywords": [
        "申",
        "上",
        "覧"
      ],
      "items": [
        {
          "id": "u14_l14_1",
          "type": "listen",
          "prompt": "申し上げる",
          "furigana": "もうしあげる",
          "romaji": "moushiageru",
          "english": "To say (humble Kenjougo)",
          "audioText": "もうしあげる",
          "options": [
            "Confirming Consultation / advice",
            "To say (humble Kenjougo)",
            "Confirming To be / go / come (honorific)",
            "Acknowledged / understood"
          ],
          "correctAnswer": "To say (humble Kenjougo)"
        },
        {
          "id": "u14_l14_2",
          "type": "spell",
          "prompt": "申し上げる",
          "furigana": "もうしあげる",
          "romaji": "moushiageru",
          "english": "Build 'To say (humble Kenjougo)'",
          "audioText": "もうしあげる",
          "tileBank": [
            "よ",
            "つ",
            "げ",
            "る",
            "う",
            "も",
            "し",
            "あ"
          ],
          "correctAnswer": "もうしあげる"
        },
        {
          "id": "u14_l14_3",
          "type": "cloze",
          "prompt": "私はいらっしゃるがすきです",
          "furigana": "わたしはいらっしゃるがすきです",
          "romaji": "Watashi wa irassharu ga suki desu.",
          "english": "Fill in the blank with the correct particle for To be / go / come (honorific).",
          "audioText": "いらっしゃる",
          "clozeSentence": "これはいらっしゃる {{BLANK}} す。",
          "clozeTarget": "を",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "を"
        },
        {
          "id": "u14_l14_4",
          "type": "scramble",
          "prompt": "これはいらっしゃるです",
          "furigana": "これはいらっしゃるです",
          "romaji": "Kore wa irassharu desu.",
          "english": "This is To be / go / come (honorific).",
          "audioText": "これはいらっしゃるです",
          "scrambleTokens": [
            "ではありません",
            "です",
            "いらっしゃる",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "いらっしゃる",
            "です"
          ],
          "correctAnswer": "これはいらっしゃるです"
        },
        {
          "id": "u14_l14_5",
          "type": "speak",
          "prompt": "ご覧になる",
          "furigana": "ごらんになる",
          "romaji": "goran ni naru",
          "english": "Pronounce: To see / inspect (honorific)",
          "audioText": "ごらんになる",
          "targetSpeech": "ご覧になる",
          "options": [
            "To see / inspect (honorific)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ご覧になる"
        },
        {
          "id": "u14_l14_6",
          "type": "dictate",
          "prompt": "ご覧になるをお願いします",
          "furigana": "ごらんになるをおねがいします",
          "romaji": "goran ni naru o onegaishimasu.",
          "english": "To see / inspect (honorific), please.",
          "audioText": "ご覧になるをお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "です",
            "ありがとう",
            "ご覧になる"
          ],
          "dictateSolution": [
            "ご覧になる",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ご覧になるをお願いします"
        },
        {
          "id": "u14_l14_7",
          "type": "match",
          "prompt": "申し上げる・いらっしゃる・ご覧になる・拝見する",
          "furigana": "もうしあげる・いらっしゃる・ごらんになる・はいけんする",
          "romaji": "moushiageru, irassharu, goran ni naru, haiken suru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "もうしあげる",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "申し上げる",
              "right": "To say (humble Kenjougo)",
              "furigana": "もうしあげる",
              "romaji": "moushiageru"
            },
            {
              "id": "p_1",
              "left": "いらっしゃる",
              "right": "To be / go / come (honorific)",
              "furigana": "いらっしゃる",
              "romaji": "irassharu"
            },
            {
              "id": "p_2",
              "left": "ご覧になる",
              "right": "To see / inspect (honorific)",
              "furigana": "ごらんになる",
              "romaji": "goran ni naru"
            },
            {
              "id": "p_3",
              "left": "拝見する",
              "right": "To look at / read (humble)",
              "furigana": "はいけんする",
              "romaji": "haiken suru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l14_8",
          "type": "dialogue",
          "prompt": "失礼しますの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "失礼しますの準備はできていますか？",
          "furigana": "失礼しますの準備はできていますか？",
          "romaji": "shitsureishimasu no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Excuse me (entering/leaving) ready?",
          "audioText": "失礼しますの準備はできていますか？",
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
      "id": "u14_l15",
      "unitId": "unit_14",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 14 Master Exam",
      "iconType": "test",
      "title": "Unit 14 Master Exam",
      "titleJp": "第14週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "拝見する",
        "名刺",
        "上司"
      ],
      "kanjiKeywords": [
        "拝",
        "見",
        "名",
        "刺",
        "上",
        "司"
      ],
      "items": [
        {
          "id": "u14_l15_1",
          "type": "listen",
          "prompt": "拝見する",
          "furigana": "はいけんする",
          "romaji": "haiken suru",
          "english": "To look at / read (humble)",
          "audioText": "はいけんする",
          "options": [
            "Confirming Supervisor / boss",
            "Report (part of Horenso)",
            "To look at / read (humble)",
            "Confirming Thank you for your hard work"
          ],
          "correctAnswer": "To look at / read (humble)"
        },
        {
          "id": "u14_l15_2",
          "type": "spell",
          "prompt": "拝見する",
          "furigana": "はいけんする",
          "romaji": "haiken suru",
          "english": "Build 'To look at / read (humble)'",
          "audioText": "はいけんする",
          "tileBank": [
            "い",
            "ん",
            "う",
            "は",
            "け",
            "る",
            "す",
            "し"
          ],
          "correctAnswer": "はいけんする"
        },
        {
          "id": "u14_l15_3",
          "type": "cloze",
          "prompt": "私は名刺がすきです",
          "furigana": "わたしはめいしがすきです",
          "romaji": "Watashi wa meishi ga suki desu.",
          "english": "Fill in the blank with the correct particle for Business card.",
          "audioText": "名刺",
          "clozeSentence": "これは名刺 {{BLANK}} す。",
          "clozeTarget": "に",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "に"
        },
        {
          "id": "u14_l15_4",
          "type": "scramble",
          "prompt": "これは名刺です",
          "furigana": "これはめいしです",
          "romaji": "Kore wa meishi desu.",
          "english": "This is Business card.",
          "audioText": "これは名刺です",
          "scrambleTokens": [
            "名刺",
            "これは",
            "ではありません",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "名刺",
            "です"
          ],
          "correctAnswer": "これは名刺です"
        },
        {
          "id": "u14_l15_5",
          "type": "speak",
          "prompt": "上司",
          "furigana": "じょうし",
          "romaji": "joushi",
          "english": "Pronounce: Supervisor / boss",
          "audioText": "じょうし",
          "targetSpeech": "上司",
          "options": [
            "Supervisor / boss",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "上司"
        },
        {
          "id": "u14_l15_6",
          "type": "dictate",
          "prompt": "上司をお願いします",
          "furigana": "じょうしをおねがいします",
          "romaji": "joushi o onegaishimasu.",
          "english": "Supervisor / boss, please.",
          "audioText": "上司をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "を",
            "お願いします",
            "上司"
          ],
          "dictateSolution": [
            "上司",
            "を",
            "お願いします"
          ],
          "correctAnswer": "上司をお願いします"
        },
        {
          "id": "u14_l15_7",
          "type": "match",
          "prompt": "拝見する・名刺・上司・同僚",
          "furigana": "はいけんする・めいし・じょうし・どうりょう",
          "romaji": "haiken suru, meishi, joushi, douryou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "はいけんする",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "拝見する",
              "right": "To look at / read (humble)",
              "furigana": "はいけんする",
              "romaji": "haiken suru"
            },
            {
              "id": "p_1",
              "left": "名刺",
              "right": "Business card",
              "furigana": "めいし",
              "romaji": "meishi"
            },
            {
              "id": "p_2",
              "left": "上司",
              "right": "Supervisor / boss",
              "furigana": "じょうし",
              "romaji": "joushi"
            },
            {
              "id": "p_3",
              "left": "同僚",
              "right": "Colleague / coworker",
              "furigana": "どうりょう",
              "romaji": "douryou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u14_l15_8",
          "type": "dialogue",
          "prompt": "承知についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "承知についてどう思われますか？",
          "furigana": "承知についてどう思われますか？",
          "romaji": "shouchi ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Acknowledged / understood?",
          "audioText": "承知についてどう思われますか？",
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
    "id": "gate_unit_14",
    "unitId": "unit_14",
    "title": "Unit 14 Mastery Checkpoint",
    "titleJp": "第14週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u14_l1_1",
        "type": "listen",
        "prompt": "お疲れ様",
        "furigana": "おつかれさま",
        "romaji": "otsukaresama",
        "english": "Thank you for your hard work",
        "audioText": "おつかれさま",
        "options": [
          "Acknowledged / understood",
          "Confirming Business card",
          "Thank you for your hard work",
          "Confirming Excuse me (entering/leaving)"
        ],
        "correctAnswer": "Thank you for your hard work"
      },
      {
        "id": "u14_l1_2",
        "type": "spell",
        "prompt": "お疲れ様",
        "furigana": "おつかれさま",
        "romaji": "otsukaresama",
        "english": "Build 'Thank you for your hard work'",
        "audioText": "おつかれさま",
        "tileBank": [
          "ろ",
          "さ",
          "ま",
          "つ",
          "お",
          "れ",
          "か",
          "ね"
        ],
        "correctAnswer": "おつかれさま"
      },
      {
        "id": "u14_l3_1",
        "type": "listen",
        "prompt": "拝見する",
        "furigana": "はいけんする",
        "romaji": "haiken suru",
        "english": "To look at / read (humble)",
        "audioText": "はいけんする",
        "options": [
          "Confirming To look at / read (humble)",
          "To look at / read (humble)",
          "To see / inspect (honorific)",
          "Excuse me (entering/leaving)"
        ],
        "correctAnswer": "To look at / read (humble)"
      },
      {
        "id": "u14_l3_2",
        "type": "spell",
        "prompt": "拝見する",
        "furigana": "はいけんする",
        "romaji": "haiken suru",
        "english": "Build 'To look at / read (humble)'",
        "audioText": "はいけんする",
        "tileBank": [
          "か",
          "せ",
          "け",
          "す",
          "る",
          "ん",
          "は",
          "い"
        ],
        "correctAnswer": "はいけんする"
      },
      {
        "id": "u14_l5_1",
        "type": "listen",
        "prompt": "報告",
        "furigana": "ほうこく",
        "romaji": "houkoku",
        "english": "Report (part of Horenso)",
        "audioText": "ほうこく",
        "options": [
          "Report (part of Horenso)",
          "Confirming Acknowledged / understood",
          "Colleague / coworker",
          "To be / go / come (honorific)"
        ],
        "correctAnswer": "Report (part of Horenso)"
      },
      {
        "id": "u14_l5_2",
        "type": "spell",
        "prompt": "報告",
        "furigana": "ほうこく",
        "romaji": "houkoku",
        "english": "Build 'Report (part of Horenso)'",
        "audioText": "ほうこく",
        "tileBank": [
          "ほ",
          "そ",
          "い",
          "こ",
          "く",
          "う",
          "れ",
          "す"
        ],
        "correctAnswer": "ほうこく"
      },
      {
        "id": "u14_l7_1",
        "type": "listen",
        "prompt": "申し上げるの確認",
        "furigana": "もうしあげるのかくにん",
        "romaji": "moushiageru no kakunin",
        "english": "Confirming To say (humble Kenjougo)",
        "audioText": "もうしあげるのかくにん",
        "options": [
          "Confirming To say (humble Kenjougo)",
          "Confirming Excuse me (entering/leaving)",
          "Confirming Business meeting",
          "Acknowledged / understood"
        ],
        "correctAnswer": "Confirming To say (humble Kenjougo)"
      },
      {
        "id": "u14_l7_2",
        "type": "spell",
        "prompt": "申し上げるの確認",
        "furigana": "もうしあげるのかくにん",
        "romaji": "moushiageru no kakunin",
        "english": "Build 'Confirming To say (humble Kenjougo)'",
        "audioText": "もうしあげるのかくにん",
        "tileBank": [
          "か",
          "る",
          "あ",
          "も",
          "う",
          "げ",
          "し",
          "の"
        ],
        "correctAnswer": "もうしあげるのかくにん"
      },
      {
        "id": "u14_l9_1",
        "type": "listen",
        "prompt": "同僚の確認",
        "furigana": "どうりょうのかくにん",
        "romaji": "douryou no kakunin",
        "english": "Confirming Colleague / coworker",
        "audioText": "どうりょうのかくにん",
        "options": [
          "Confirming Acknowledged / understood",
          "Business meeting",
          "Confirming Colleague / coworker",
          "Acknowledged / understood"
        ],
        "correctAnswer": "Confirming Colleague / coworker"
      },
      {
        "id": "u14_l9_2",
        "type": "spell",
        "prompt": "同僚の確認",
        "furigana": "どうりょうのかくにん",
        "romaji": "douryou no kakunin",
        "english": "Build 'Confirming Colleague / coworker'",
        "audioText": "どうりょうのかくにん",
        "tileBank": [
          "う",
          "ど",
          "ょ",
          "り",
          "う",
          "か",
          "の",
          "く"
        ],
        "correctAnswer": "どうりょうのかくにん"
      },
      {
        "id": "u14_l11_1",
        "type": "listen",
        "prompt": "お疲れ様の確認",
        "furigana": "おつかれさまのかくにん",
        "romaji": "otsukaresama no kakunin",
        "english": "Confirming Thank you for your hard work",
        "audioText": "おつかれさまのかくにん",
        "options": [
          "Confirming To look at / read (humble)",
          "Confirming Thank you for your hard work",
          "Confirming Acknowledged / understood",
          "Confirming To say (humble Kenjougo)"
        ],
        "correctAnswer": "Confirming Thank you for your hard work"
      },
      {
        "id": "u14_l11_2",
        "type": "spell",
        "prompt": "お疲れ様の確認",
        "furigana": "おつかれさまのかくにん",
        "romaji": "otsukaresama no kakunin",
        "english": "Build 'Confirming Thank you for your hard work'",
        "audioText": "おつかれさまのかくにん",
        "tileBank": [
          "の",
          "れ",
          "お",
          "つ",
          "か",
          "ま",
          "さ",
          "か"
        ],
        "correctAnswer": "おつかれさまのかくにん"
      }
    ]
  }
};
