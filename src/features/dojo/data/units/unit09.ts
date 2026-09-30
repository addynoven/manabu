import type { DojoUnit } from "../../models/dojo.model";

export const unit09: DojoUnit = {
  "id": "unit_9",
  "unitNumber": 9,
  "title": "Visiting the Clinic & Pharmacy",
  "titleJp": "病院と薬局",
  "description": "Explain physical symptoms to doctors, fill prescriptions at pharmacies, and understand dosing instructions.",
  "icon": "🏥",
  "themeColor": "#EF4444",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u9_l1",
      "unitId": "unit_9",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Hospital / clinic & Pharmacy",
      "titleJp": "病院・薬局",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "病院",
        "薬局",
        "熱"
      ],
      "kanjiKeywords": [
        "病",
        "院",
        "薬",
        "局",
        "熱"
      ],
      "items": [
        {
          "id": "u9_l1_1",
          "type": "listen",
          "prompt": "病院",
          "furigana": "びょういん",
          "romaji": "byouin",
          "english": "Hospital / clinic",
          "audioText": "びょういん",
          "options": [
            "Pharmacy",
            "Confirming Health insurance card",
            "Medicine",
            "Hospital / clinic"
          ],
          "correctAnswer": "Hospital / clinic"
        },
        {
          "id": "u9_l1_2",
          "type": "spell",
          "prompt": "病院",
          "furigana": "びょういん",
          "romaji": "byouin",
          "english": "Build 'Hospital / clinic'",
          "audioText": "びょういん",
          "tileBank": [
            "び",
            "わ",
            "い",
            "け",
            "ん",
            "う",
            "ょ",
            "さ"
          ],
          "correctAnswer": "びょういん"
        },
        {
          "id": "u9_l1_3",
          "type": "cloze",
          "prompt": "私は薬局がすきです",
          "furigana": "わたしはやっきょくがすきです",
          "romaji": "Watashi wa yakkyoku ga suki desu.",
          "english": "Fill in the blank with the correct particle for Pharmacy.",
          "audioText": "薬局",
          "clozeSentence": "これは薬局 {{BLANK}} す。",
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
          "id": "u9_l1_4",
          "type": "scramble",
          "prompt": "これは薬局です",
          "furigana": "これはやっきょくです",
          "romaji": "Kore wa yakkyoku desu.",
          "english": "This is Pharmacy.",
          "audioText": "これは薬局です",
          "scrambleTokens": [
            "です",
            "それ",
            "これは",
            "薬局",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "薬局",
            "です"
          ],
          "correctAnswer": "これは薬局です"
        },
        {
          "id": "u9_l1_5",
          "type": "speak",
          "prompt": "熱",
          "furigana": "ねつ",
          "romaji": "netsu",
          "english": "Pronounce: Fever",
          "audioText": "ねつ",
          "targetSpeech": "熱",
          "options": [
            "Fever",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "熱"
        },
        {
          "id": "u9_l1_6",
          "type": "dictate",
          "prompt": "熱をお願いします",
          "furigana": "ねつをおねがいします",
          "romaji": "netsu o onegaishimasu.",
          "english": "Fever, please.",
          "audioText": "熱をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "ありがとう",
            "を",
            "熱"
          ],
          "dictateSolution": [
            "熱",
            "を",
            "お願いします"
          ],
          "correctAnswer": "熱をお願いします"
        },
        {
          "id": "u9_l1_7",
          "type": "match",
          "prompt": "病院・薬局・熱・頭痛",
          "furigana": "びょういん・やっきょく・ねつ・ずつう",
          "romaji": "byouin, yakkyoku, netsu, zutsuu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "びょういん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "病院",
              "right": "Hospital / clinic",
              "furigana": "びょういん",
              "romaji": "byouin"
            },
            {
              "id": "p_1",
              "left": "薬局",
              "right": "Pharmacy",
              "furigana": "やっきょく",
              "romaji": "yakkyoku"
            },
            {
              "id": "p_2",
              "left": "熱",
              "right": "Fever",
              "furigana": "ねつ",
              "romaji": "netsu"
            },
            {
              "id": "p_3",
              "left": "頭痛",
              "right": "Headache",
              "furigana": "ずつう",
              "romaji": "zutsuu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l1_8",
          "type": "dialogue",
          "prompt": "病院について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "病院について教えていただけますか？",
          "furigana": "病院について教えていただけますか？",
          "romaji": "byouin ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hospital / clinic?",
          "audioText": "病院について教えていただけますか？",
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
      "id": "u9_l2",
      "unitId": "unit_9",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Headache & Throat",
      "titleJp": "頭痛・喉",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "頭痛",
        "喉",
        "お腹"
      ],
      "kanjiKeywords": [
        "頭",
        "痛",
        "喉",
        "腹"
      ],
      "items": [
        {
          "id": "u9_l2_1",
          "type": "listen",
          "prompt": "頭痛",
          "furigana": "ずつう",
          "romaji": "zutsuu",
          "english": "Headache",
          "audioText": "ずつう",
          "options": [
            "Health insurance card",
            "Cough",
            "Headache",
            "Confirming Pharmacy"
          ],
          "correctAnswer": "Headache"
        },
        {
          "id": "u9_l2_2",
          "type": "spell",
          "prompt": "頭痛",
          "furigana": "ずつう",
          "romaji": "zutsuu",
          "english": "Build 'Headache'",
          "audioText": "ずつう",
          "tileBank": [
            "い",
            "つ",
            "む",
            "の",
            "き",
            "う",
            "て",
            "ず"
          ],
          "correctAnswer": "ずつう"
        },
        {
          "id": "u9_l2_3",
          "type": "cloze",
          "prompt": "私は喉がすきです",
          "furigana": "わたしはのどがすきです",
          "romaji": "Watashi wa nodo ga suki desu.",
          "english": "Fill in the blank with the correct particle for Throat.",
          "audioText": "喉",
          "clozeSentence": "これは喉 {{BLANK}} す。",
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
          "id": "u9_l2_4",
          "type": "scramble",
          "prompt": "これは喉です",
          "furigana": "これはのどです",
          "romaji": "Kore wa nodo desu.",
          "english": "This is Throat.",
          "audioText": "これは喉です",
          "scrambleTokens": [
            "それ",
            "これは",
            "ではありません",
            "です",
            "喉"
          ],
          "scrambleSolution": [
            "これは",
            "喉",
            "です"
          ],
          "correctAnswer": "これは喉です"
        },
        {
          "id": "u9_l2_5",
          "type": "speak",
          "prompt": "お腹",
          "furigana": "おなか",
          "romaji": "onaka",
          "english": "Pronounce: Stomach / belly",
          "audioText": "おなか",
          "targetSpeech": "お腹",
          "options": [
            "Stomach / belly",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "お腹"
        },
        {
          "id": "u9_l2_6",
          "type": "dictate",
          "prompt": "お腹をお願いします",
          "furigana": "おなかをおねがいします",
          "romaji": "onaka o onegaishimasu.",
          "english": "Stomach / belly, please.",
          "audioText": "お腹をお願いします",
          "dictateTokens": [
            "を",
            "お腹",
            "です",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "お腹",
            "を",
            "お願いします"
          ],
          "correctAnswer": "お腹をお願いします"
        },
        {
          "id": "u9_l2_7",
          "type": "match",
          "prompt": "頭痛・喉・お腹・痛い",
          "furigana": "ずつう・のど・おなか・いたい",
          "romaji": "zutsuu, nodo, onaka, itai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ずつう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "頭痛",
              "right": "Headache",
              "furigana": "ずつう",
              "romaji": "zutsuu"
            },
            {
              "id": "p_1",
              "left": "喉",
              "right": "Throat",
              "furigana": "のど",
              "romaji": "nodo"
            },
            {
              "id": "p_2",
              "left": "お腹",
              "right": "Stomach / belly",
              "furigana": "おなか",
              "romaji": "onaka"
            },
            {
              "id": "p_3",
              "left": "痛い",
              "right": "Painful / hurts",
              "furigana": "いたい",
              "romaji": "itai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l2_8",
          "type": "dialogue",
          "prompt": "薬局の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "薬局の準備はできていますか？",
          "furigana": "薬局の準備はできていますか？",
          "romaji": "yakkyoku no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Pharmacy ready?",
          "audioText": "薬局の準備はできていますか？",
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
      "id": "u9_l3",
      "unitId": "unit_9",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Painful / hurts & Common cold",
      "titleJp": "痛い・風邪",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "痛い",
        "風邪",
        "咳"
      ],
      "kanjiKeywords": [
        "痛",
        "風",
        "邪",
        "咳"
      ],
      "items": [
        {
          "id": "u9_l3_1",
          "type": "listen",
          "prompt": "痛い",
          "furigana": "いたい",
          "romaji": "itai",
          "english": "Painful / hurts",
          "audioText": "いたい",
          "options": [
            "Painful / hurts",
            "Confirming Headache",
            "Confirming Medicine",
            "Confirming Headache"
          ],
          "correctAnswer": "Painful / hurts"
        },
        {
          "id": "u9_l3_2",
          "type": "spell",
          "prompt": "痛い",
          "furigana": "いたい",
          "romaji": "itai",
          "english": "Build 'Painful / hurts'",
          "audioText": "いたい",
          "tileBank": [
            "よ",
            "に",
            "ね",
            "い",
            "せ",
            "ら",
            "た",
            "い"
          ],
          "correctAnswer": "いたい"
        },
        {
          "id": "u9_l3_3",
          "type": "cloze",
          "prompt": "私は風邪がすきです",
          "furigana": "わたしはかぜがすきです",
          "romaji": "Watashi wa kaze ga suki desu.",
          "english": "Fill in the blank with the correct particle for Common cold.",
          "audioText": "風邪",
          "clozeSentence": "これは風邪 {{BLANK}} す。",
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
          "id": "u9_l3_4",
          "type": "scramble",
          "prompt": "これは風邪です",
          "furigana": "これはかぜです",
          "romaji": "Kore wa kaze desu.",
          "english": "This is Common cold.",
          "audioText": "これは風邪です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "風邪",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "風邪",
            "です"
          ],
          "correctAnswer": "これは風邪です"
        },
        {
          "id": "u9_l3_5",
          "type": "speak",
          "prompt": "咳",
          "furigana": "せき",
          "romaji": "seki",
          "english": "Pronounce: Cough",
          "audioText": "せき",
          "targetSpeech": "咳",
          "options": [
            "Cough",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "咳"
        },
        {
          "id": "u9_l3_6",
          "type": "dictate",
          "prompt": "咳をお願いします",
          "furigana": "せきをおねがいします",
          "romaji": "seki o onegaishimasu.",
          "english": "Cough, please.",
          "audioText": "咳をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "咳",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "咳",
            "を",
            "お願いします"
          ],
          "correctAnswer": "咳をお願いします"
        },
        {
          "id": "u9_l3_7",
          "type": "match",
          "prompt": "痛い・風邪・咳・薬",
          "furigana": "いたい・かぜ・せき・くすり",
          "romaji": "itai, kaze, seki, kusuri",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いたい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "痛い",
              "right": "Painful / hurts",
              "furigana": "いたい",
              "romaji": "itai"
            },
            {
              "id": "p_1",
              "left": "風邪",
              "right": "Common cold",
              "furigana": "かぜ",
              "romaji": "kaze"
            },
            {
              "id": "p_2",
              "left": "咳",
              "right": "Cough",
              "furigana": "せき",
              "romaji": "seki"
            },
            {
              "id": "p_3",
              "left": "薬",
              "right": "Medicine",
              "furigana": "くすり",
              "romaji": "kusuri"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l3_8",
          "type": "dialogue",
          "prompt": "熱についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "熱についてどう思われますか？",
          "furigana": "熱についてどう思われますか？",
          "romaji": "netsu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Fever?",
          "audioText": "熱についてどう思われますか？",
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
      "id": "u9_l4",
      "unitId": "unit_9",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Medicine & Health insurance card",
      "titleJp": "薬・保険証",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "薬",
        "保険証",
        "処方箋"
      ],
      "kanjiKeywords": [
        "薬",
        "保",
        "険",
        "証",
        "処",
        "方",
        "箋"
      ],
      "items": [
        {
          "id": "u9_l4_1",
          "type": "listen",
          "prompt": "薬",
          "furigana": "くすり",
          "romaji": "kusuri",
          "english": "Medicine",
          "audioText": "くすり",
          "options": [
            "Confirming Headache",
            "Confirming After meal",
            "Medicine",
            "Confirming Doctor's prescription"
          ],
          "correctAnswer": "Medicine"
        },
        {
          "id": "u9_l4_2",
          "type": "spell",
          "prompt": "薬",
          "furigana": "くすり",
          "romaji": "kusuri",
          "english": "Build 'Medicine'",
          "audioText": "くすり",
          "tileBank": [
            "る",
            "く",
            "め",
            "り",
            "す",
            "ひ",
            "か",
            "に"
          ],
          "correctAnswer": "くすり"
        },
        {
          "id": "u9_l4_3",
          "type": "cloze",
          "prompt": "私は保険証がすきです",
          "furigana": "わたしはほけんしょうがすきです",
          "romaji": "Watashi wa hokenshou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Health insurance card.",
          "audioText": "保険証",
          "clozeSentence": "これは保険証 {{BLANK}} す。",
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
          "id": "u9_l4_4",
          "type": "scramble",
          "prompt": "これは保険証です",
          "furigana": "これはほけんしょうです",
          "romaji": "Kore wa hokenshou desu.",
          "english": "This is Health insurance card.",
          "audioText": "これは保険証です",
          "scrambleTokens": [
            "です",
            "これは",
            "ではありません",
            "保険証",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "保険証",
            "です"
          ],
          "correctAnswer": "これは保険証です"
        },
        {
          "id": "u9_l4_5",
          "type": "speak",
          "prompt": "処方箋",
          "furigana": "しょほうせん",
          "romaji": "shohousen",
          "english": "Pronounce: Doctor's prescription",
          "audioText": "しょほうせん",
          "targetSpeech": "処方箋",
          "options": [
            "Doctor's prescription",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "処方箋"
        },
        {
          "id": "u9_l4_6",
          "type": "dictate",
          "prompt": "処方箋をお願いします",
          "furigana": "しょほうせんをおねがいします",
          "romaji": "shohousen o onegaishimasu.",
          "english": "Doctor's prescription, please.",
          "audioText": "処方箋をお願いします",
          "dictateTokens": [
            "を",
            "処方箋",
            "ありがとう",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "処方箋",
            "を",
            "お願いします"
          ],
          "correctAnswer": "処方箋をお願いします"
        },
        {
          "id": "u9_l4_7",
          "type": "match",
          "prompt": "薬・保険証・処方箋・食後",
          "furigana": "くすり・ほけんしょう・しょほうせん・しょくご",
          "romaji": "kusuri, hokenshou, shohousen, shokugo",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "くすり",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "薬",
              "right": "Medicine",
              "furigana": "くすり",
              "romaji": "kusuri"
            },
            {
              "id": "p_1",
              "left": "保険証",
              "right": "Health insurance card",
              "furigana": "ほけんしょう",
              "romaji": "hokenshou"
            },
            {
              "id": "p_2",
              "left": "処方箋",
              "right": "Doctor's prescription",
              "furigana": "しょほうせん",
              "romaji": "shohousen"
            },
            {
              "id": "p_3",
              "left": "食後",
              "right": "After meal",
              "furigana": "しょくご",
              "romaji": "shokugo"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l4_8",
          "type": "dialogue",
          "prompt": "次は頭痛に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は頭痛に進みましょう。",
          "furigana": "次は頭痛に進みましょう。",
          "romaji": "Tsugi wa zutsuu ni susumimashou.",
          "english": "Speaker: Let's proceed to Headache next.",
          "audioText": "次は頭痛に進みましょう。",
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
      "id": "u9_l5",
      "unitId": "unit_9",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "After meal & Allergy",
      "titleJp": "食後・アレルギー",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "食後",
        "アレルギー",
        "お大事に"
      ],
      "kanjiKeywords": [
        "食",
        "後",
        "大",
        "事"
      ],
      "items": [
        {
          "id": "u9_l5_1",
          "type": "listen",
          "prompt": "食後",
          "furigana": "しょくご",
          "romaji": "shokugo",
          "english": "After meal",
          "audioText": "しょくご",
          "options": [
            "After meal",
            "Confirming Fever",
            "Confirming Painful / hurts",
            "Confirming Pharmacy"
          ],
          "correctAnswer": "After meal"
        },
        {
          "id": "u9_l5_2",
          "type": "spell",
          "prompt": "食後",
          "furigana": "しょくご",
          "romaji": "shokugo",
          "english": "Build 'After meal'",
          "audioText": "しょくご",
          "tileBank": [
            "ょ",
            "り",
            "し",
            "く",
            "ご",
            "み",
            "き",
            "ん"
          ],
          "correctAnswer": "しょくご"
        },
        {
          "id": "u9_l5_3",
          "type": "cloze",
          "prompt": "私はアレルギーがすきです",
          "furigana": "わたしはアレルギーがすきです",
          "romaji": "Watashi wa arerugii ga suki desu.",
          "english": "Fill in the blank with the correct particle for Allergy.",
          "audioText": "アレルギー",
          "clozeSentence": "これはアレルギー {{BLANK}} す。",
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
          "id": "u9_l5_4",
          "type": "scramble",
          "prompt": "これはアレルギーです",
          "furigana": "これはアレルギーです",
          "romaji": "Kore wa arerugii desu.",
          "english": "This is Allergy.",
          "audioText": "これはアレルギーです",
          "scrambleTokens": [
            "です",
            "それ",
            "ではありません",
            "これは",
            "アレルギー"
          ],
          "scrambleSolution": [
            "これは",
            "アレルギー",
            "です"
          ],
          "correctAnswer": "これはアレルギーです"
        },
        {
          "id": "u9_l5_5",
          "type": "speak",
          "prompt": "お大事に",
          "furigana": "おだいじに",
          "romaji": "odaiji ni",
          "english": "Pronounce: Take care / get well soon",
          "audioText": "おだいじに",
          "targetSpeech": "お大事に",
          "options": [
            "Take care / get well soon",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "お大事に"
        },
        {
          "id": "u9_l5_6",
          "type": "dictate",
          "prompt": "お大事にをお願いします",
          "furigana": "おだいじにをおねがいします",
          "romaji": "odaiji ni o onegaishimasu.",
          "english": "Take care / get well soon, please.",
          "audioText": "お大事にをお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "お大事に",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "お大事に",
            "を",
            "お願いします"
          ],
          "correctAnswer": "お大事にをお願いします"
        },
        {
          "id": "u9_l5_7",
          "type": "match",
          "prompt": "食後・アレルギー・お大事に・病院の確認",
          "furigana": "しょくご・アレルギー・おだいじに・びょういんのかくにん",
          "romaji": "shokugo, arerugii, odaiji ni, byouin no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しょくご",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "食後",
              "right": "After meal",
              "furigana": "しょくご",
              "romaji": "shokugo"
            },
            {
              "id": "p_1",
              "left": "アレルギー",
              "right": "Allergy",
              "furigana": "アレルギー",
              "romaji": "arerugii"
            },
            {
              "id": "p_2",
              "left": "お大事に",
              "right": "Take care / get well soon",
              "furigana": "おだいじに",
              "romaji": "odaiji ni"
            },
            {
              "id": "p_3",
              "left": "病院の確認",
              "right": "Confirming Hospital / clinic",
              "furigana": "びょういんのかくにん",
              "romaji": "byouin no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l5_8",
          "type": "dialogue",
          "prompt": "病院について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "病院について教えていただけますか？",
          "furigana": "病院について教えていただけますか？",
          "romaji": "byouin ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hospital / clinic?",
          "audioText": "病院について教えていただけますか？",
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
      "id": "u9_l6",
      "unitId": "unit_9",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Hospital / clinic & Confirming Pharmacy",
      "titleJp": "病院の確認・薬局の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "病院の確認",
        "薬局の確認",
        "熱の確認"
      ],
      "kanjiKeywords": [
        "病",
        "院",
        "確",
        "認",
        "薬",
        "局",
        "確",
        "認",
        "熱",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u9_l6_1",
          "type": "listen",
          "prompt": "病院の確認",
          "furigana": "びょういんのかくにん",
          "romaji": "byouin no kakunin",
          "english": "Confirming Hospital / clinic",
          "audioText": "びょういんのかくにん",
          "options": [
            "Confirming Throat",
            "Confirming Hospital / clinic",
            "Throat",
            "Confirming Common cold"
          ],
          "correctAnswer": "Confirming Hospital / clinic"
        },
        {
          "id": "u9_l6_2",
          "type": "spell",
          "prompt": "病院の確認",
          "furigana": "びょういんのかくにん",
          "romaji": "byouin no kakunin",
          "english": "Build 'Confirming Hospital / clinic'",
          "audioText": "びょういんのかくにん",
          "tileBank": [
            "び",
            "か",
            "い",
            "ん",
            "の",
            "う",
            "ょ",
            "く"
          ],
          "correctAnswer": "びょういんのかくにん"
        },
        {
          "id": "u9_l6_3",
          "type": "cloze",
          "prompt": "私は薬局の確認がすきです",
          "furigana": "わたしはやっきょくのかくにんがすきです",
          "romaji": "Watashi wa yakkyoku no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Pharmacy.",
          "audioText": "薬局の確認",
          "clozeSentence": "これは薬局の確認 {{BLANK}} す。",
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
          "id": "u9_l6_4",
          "type": "scramble",
          "prompt": "これは薬局の確認です",
          "furigana": "これはやっきょくのかくにんです",
          "romaji": "Kore wa yakkyoku no kakunin desu.",
          "english": "This is Confirming Pharmacy.",
          "audioText": "これは薬局の確認です",
          "scrambleTokens": [
            "薬局の確認",
            "それ",
            "ではありません",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "薬局の確認",
            "です"
          ],
          "correctAnswer": "これは薬局の確認です"
        },
        {
          "id": "u9_l6_5",
          "type": "speak",
          "prompt": "熱の確認",
          "furigana": "ねつのかくにん",
          "romaji": "netsu no kakunin",
          "english": "Pronounce: Confirming Fever",
          "audioText": "ねつのかくにん",
          "targetSpeech": "熱の確認",
          "options": [
            "Confirming Fever",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "熱の確認"
        },
        {
          "id": "u9_l6_6",
          "type": "dictate",
          "prompt": "熱の確認をお願いします",
          "furigana": "ねつのかくにんをおねがいします",
          "romaji": "netsu no kakunin o onegaishimasu.",
          "english": "Confirming Fever, please.",
          "audioText": "熱の確認をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "ありがとう",
            "熱の確認",
            "お願いします"
          ],
          "dictateSolution": [
            "熱の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "熱の確認をお願いします"
        },
        {
          "id": "u9_l6_7",
          "type": "match",
          "prompt": "病院の確認・薬局の確認・熱の確認・頭痛の確認",
          "furigana": "びょういんのかくにん・やっきょくのかくにん・ねつのかくにん・ずつうのかくにん",
          "romaji": "byouin no kakunin, yakkyoku no kakunin, netsu no kakunin, zutsuu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "びょういんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "病院の確認",
              "right": "Confirming Hospital / clinic",
              "furigana": "びょういんのかくにん",
              "romaji": "byouin no kakunin"
            },
            {
              "id": "p_1",
              "left": "薬局の確認",
              "right": "Confirming Pharmacy",
              "furigana": "やっきょくのかくにん",
              "romaji": "yakkyoku no kakunin"
            },
            {
              "id": "p_2",
              "left": "熱の確認",
              "right": "Confirming Fever",
              "furigana": "ねつのかくにん",
              "romaji": "netsu no kakunin"
            },
            {
              "id": "p_3",
              "left": "頭痛の確認",
              "right": "Confirming Headache",
              "furigana": "ずつうのかくにん",
              "romaji": "zutsuu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l6_8",
          "type": "dialogue",
          "prompt": "薬局の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "薬局の準備はできていますか？",
          "furigana": "薬局の準備はできていますか？",
          "romaji": "yakkyoku no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Pharmacy ready?",
          "audioText": "薬局の準備はできていますか？",
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
      "id": "u9_l7",
      "unitId": "unit_9",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Headache & Confirming Throat",
      "titleJp": "頭痛の確認・喉の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "頭痛の確認",
        "喉の確認",
        "お腹の確認"
      ],
      "kanjiKeywords": [
        "頭",
        "痛",
        "確",
        "認",
        "喉",
        "確",
        "認",
        "腹",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u9_l7_1",
          "type": "listen",
          "prompt": "頭痛の確認",
          "furigana": "ずつうのかくにん",
          "romaji": "zutsuu no kakunin",
          "english": "Confirming Headache",
          "audioText": "ずつうのかくにん",
          "options": [
            "Fever",
            "Confirming Painful / hurts",
            "Confirming Headache",
            "Stomach / belly"
          ],
          "correctAnswer": "Confirming Headache"
        },
        {
          "id": "u9_l7_2",
          "type": "spell",
          "prompt": "頭痛の確認",
          "furigana": "ずつうのかくにん",
          "romaji": "zutsuu no kakunin",
          "english": "Build 'Confirming Headache'",
          "audioText": "ずつうのかくにん",
          "tileBank": [
            "つ",
            "く",
            "の",
            "か",
            "ん",
            "ず",
            "に",
            "う"
          ],
          "correctAnswer": "ずつうのかくにん"
        },
        {
          "id": "u9_l7_3",
          "type": "cloze",
          "prompt": "私は喉の確認がすきです",
          "furigana": "わたしはのどのかくにんがすきです",
          "romaji": "Watashi wa nodo no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Throat.",
          "audioText": "喉の確認",
          "clozeSentence": "これは喉の確認 {{BLANK}} す。",
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
          "id": "u9_l7_4",
          "type": "scramble",
          "prompt": "これは喉の確認です",
          "furigana": "これはのどのかくにんです",
          "romaji": "Kore wa nodo no kakunin desu.",
          "english": "This is Confirming Throat.",
          "audioText": "これは喉の確認です",
          "scrambleTokens": [
            "です",
            "これは",
            "喉の確認",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "喉の確認",
            "です"
          ],
          "correctAnswer": "これは喉の確認です"
        },
        {
          "id": "u9_l7_5",
          "type": "speak",
          "prompt": "お腹の確認",
          "furigana": "おなかのかくにん",
          "romaji": "onaka no kakunin",
          "english": "Pronounce: Confirming Stomach / belly",
          "audioText": "おなかのかくにん",
          "targetSpeech": "お腹の確認",
          "options": [
            "Confirming Stomach / belly",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "お腹の確認"
        },
        {
          "id": "u9_l7_6",
          "type": "dictate",
          "prompt": "お腹の確認をお願いします",
          "furigana": "おなかのかくにんをおねがいします",
          "romaji": "onaka no kakunin o onegaishimasu.",
          "english": "Confirming Stomach / belly, please.",
          "audioText": "お腹の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "お腹の確認",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "お腹の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "お腹の確認をお願いします"
        },
        {
          "id": "u9_l7_7",
          "type": "match",
          "prompt": "頭痛の確認・喉の確認・お腹の確認・痛いの確認",
          "furigana": "ずつうのかくにん・のどのかくにん・おなかのかくにん・いたいのかくにん",
          "romaji": "zutsuu no kakunin, nodo no kakunin, onaka no kakunin, itai no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ずつうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "頭痛の確認",
              "right": "Confirming Headache",
              "furigana": "ずつうのかくにん",
              "romaji": "zutsuu no kakunin"
            },
            {
              "id": "p_1",
              "left": "喉の確認",
              "right": "Confirming Throat",
              "furigana": "のどのかくにん",
              "romaji": "nodo no kakunin"
            },
            {
              "id": "p_2",
              "left": "お腹の確認",
              "right": "Confirming Stomach / belly",
              "furigana": "おなかのかくにん",
              "romaji": "onaka no kakunin"
            },
            {
              "id": "p_3",
              "left": "痛いの確認",
              "right": "Confirming Painful / hurts",
              "furigana": "いたいのかくにん",
              "romaji": "itai no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l7_8",
          "type": "dialogue",
          "prompt": "熱についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "熱についてどう思われますか？",
          "furigana": "熱についてどう思われますか？",
          "romaji": "netsu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Fever?",
          "audioText": "熱についてどう思われますか？",
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
      "id": "u9_l8",
      "unitId": "unit_9",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Painful / hurts & Confirming Common cold",
      "titleJp": "痛いの確認・風邪の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "痛いの確認",
        "風邪の確認",
        "咳の確認"
      ],
      "kanjiKeywords": [
        "痛",
        "確",
        "認",
        "風",
        "邪",
        "確",
        "認",
        "咳",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u9_l8_1",
          "type": "listen",
          "prompt": "痛いの確認",
          "furigana": "いたいのかくにん",
          "romaji": "itai no kakunin",
          "english": "Confirming Painful / hurts",
          "audioText": "いたいのかくにん",
          "options": [
            "After meal",
            "Confirming Painful / hurts",
            "Confirming Medicine",
            "Throat"
          ],
          "correctAnswer": "Confirming Painful / hurts"
        },
        {
          "id": "u9_l8_2",
          "type": "spell",
          "prompt": "痛いの確認",
          "furigana": "いたいのかくにん",
          "romaji": "itai no kakunin",
          "english": "Build 'Confirming Painful / hurts'",
          "audioText": "いたいのかくにん",
          "tileBank": [
            "く",
            "に",
            "か",
            "ん",
            "の",
            "い",
            "い",
            "た"
          ],
          "correctAnswer": "いたいのかくにん"
        },
        {
          "id": "u9_l8_3",
          "type": "cloze",
          "prompt": "私は風邪の確認がすきです",
          "furigana": "わたしはかぜのかくにんがすきです",
          "romaji": "Watashi wa kaze no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Common cold.",
          "audioText": "風邪の確認",
          "clozeSentence": "これは風邪の確認 {{BLANK}} す。",
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
          "id": "u9_l8_4",
          "type": "scramble",
          "prompt": "これは風邪の確認です",
          "furigana": "これはかぜのかくにんです",
          "romaji": "Kore wa kaze no kakunin desu.",
          "english": "This is Confirming Common cold.",
          "audioText": "これは風邪の確認です",
          "scrambleTokens": [
            "風邪の確認",
            "これは",
            "ではありません",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "風邪の確認",
            "です"
          ],
          "correctAnswer": "これは風邪の確認です"
        },
        {
          "id": "u9_l8_5",
          "type": "speak",
          "prompt": "咳の確認",
          "furigana": "せきのかくにん",
          "romaji": "seki no kakunin",
          "english": "Pronounce: Confirming Cough",
          "audioText": "せきのかくにん",
          "targetSpeech": "咳の確認",
          "options": [
            "Confirming Cough",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "咳の確認"
        },
        {
          "id": "u9_l8_6",
          "type": "dictate",
          "prompt": "咳の確認をお願いします",
          "furigana": "せきのかくにんをおねがいします",
          "romaji": "seki no kakunin o onegaishimasu.",
          "english": "Confirming Cough, please.",
          "audioText": "咳の確認をお願いします",
          "dictateTokens": [
            "咳の確認",
            "です",
            "を",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "咳の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "咳の確認をお願いします"
        },
        {
          "id": "u9_l8_7",
          "type": "match",
          "prompt": "痛いの確認・風邪の確認・咳の確認・薬の確認",
          "furigana": "いたいのかくにん・かぜのかくにん・せきのかくにん・くすりのかくにん",
          "romaji": "itai no kakunin, kaze no kakunin, seki no kakunin, kusuri no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いたいのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "痛いの確認",
              "right": "Confirming Painful / hurts",
              "furigana": "いたいのかくにん",
              "romaji": "itai no kakunin"
            },
            {
              "id": "p_1",
              "left": "風邪の確認",
              "right": "Confirming Common cold",
              "furigana": "かぜのかくにん",
              "romaji": "kaze no kakunin"
            },
            {
              "id": "p_2",
              "left": "咳の確認",
              "right": "Confirming Cough",
              "furigana": "せきのかくにん",
              "romaji": "seki no kakunin"
            },
            {
              "id": "p_3",
              "left": "薬の確認",
              "right": "Confirming Medicine",
              "furigana": "くすりのかくにん",
              "romaji": "kusuri no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l8_8",
          "type": "dialogue",
          "prompt": "次は頭痛に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は頭痛に進みましょう。",
          "furigana": "次は頭痛に進みましょう。",
          "romaji": "Tsugi wa zutsuu ni susumimashou.",
          "english": "Speaker: Let's proceed to Headache next.",
          "audioText": "次は頭痛に進みましょう。",
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
      "id": "u9_l9",
      "unitId": "unit_9",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Medicine & Confirming Health insurance card",
      "titleJp": "薬の確認・保険証の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "薬の確認",
        "保険証の確認",
        "処方箋の確認"
      ],
      "kanjiKeywords": [
        "薬",
        "確",
        "認",
        "保",
        "険",
        "証",
        "確",
        "認",
        "処",
        "方",
        "箋",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u9_l9_1",
          "type": "listen",
          "prompt": "薬の確認",
          "furigana": "くすりのかくにん",
          "romaji": "kusuri no kakunin",
          "english": "Confirming Medicine",
          "audioText": "くすりのかくにん",
          "options": [
            "Confirming Medicine",
            "Painful / hurts",
            "Fever",
            "Confirming Allergy"
          ],
          "correctAnswer": "Confirming Medicine"
        },
        {
          "id": "u9_l9_2",
          "type": "spell",
          "prompt": "薬の確認",
          "furigana": "くすりのかくにん",
          "romaji": "kusuri no kakunin",
          "english": "Build 'Confirming Medicine'",
          "audioText": "くすりのかくにん",
          "tileBank": [
            "り",
            "す",
            "の",
            "か",
            "に",
            "く",
            "く",
            "ん"
          ],
          "correctAnswer": "くすりのかくにん"
        },
        {
          "id": "u9_l9_3",
          "type": "cloze",
          "prompt": "私は保険証の確認がすきです",
          "furigana": "わたしはほけんしょうのかくにんがすきです",
          "romaji": "Watashi wa hokenshou no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Health insurance card.",
          "audioText": "保険証の確認",
          "clozeSentence": "これは保険証の確認 {{BLANK}} す。",
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
          "id": "u9_l9_4",
          "type": "scramble",
          "prompt": "これは保険証の確認です",
          "furigana": "これはほけんしょうのかくにんです",
          "romaji": "Kore wa hokenshou no kakunin desu.",
          "english": "This is Confirming Health insurance card.",
          "audioText": "これは保険証の確認です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "それ",
            "保険証の確認",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "保険証の確認",
            "です"
          ],
          "correctAnswer": "これは保険証の確認です"
        },
        {
          "id": "u9_l9_5",
          "type": "speak",
          "prompt": "処方箋の確認",
          "furigana": "しょほうせんのかくにん",
          "romaji": "shohousen no kakunin",
          "english": "Pronounce: Confirming Doctor's prescription",
          "audioText": "しょほうせんのかくにん",
          "targetSpeech": "処方箋の確認",
          "options": [
            "Confirming Doctor's prescription",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "処方箋の確認"
        },
        {
          "id": "u9_l9_6",
          "type": "dictate",
          "prompt": "処方箋の確認をお願いします",
          "furigana": "しょほうせんのかくにんをおねがいします",
          "romaji": "shohousen no kakunin o onegaishimasu.",
          "english": "Confirming Doctor's prescription, please.",
          "audioText": "処方箋の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "お願いします",
            "処方箋の確認",
            "を"
          ],
          "dictateSolution": [
            "処方箋の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "処方箋の確認をお願いします"
        },
        {
          "id": "u9_l9_7",
          "type": "match",
          "prompt": "薬の確認・保険証の確認・処方箋の確認・食後の確認",
          "furigana": "くすりのかくにん・ほけんしょうのかくにん・しょほうせんのかくにん・しょくごのかくにん",
          "romaji": "kusuri no kakunin, hokenshou no kakunin, shohousen no kakunin, shokugo no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "くすりのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "薬の確認",
              "right": "Confirming Medicine",
              "furigana": "くすりのかくにん",
              "romaji": "kusuri no kakunin"
            },
            {
              "id": "p_1",
              "left": "保険証の確認",
              "right": "Confirming Health insurance card",
              "furigana": "ほけんしょうのかくにん",
              "romaji": "hokenshou no kakunin"
            },
            {
              "id": "p_2",
              "left": "処方箋の確認",
              "right": "Confirming Doctor's prescription",
              "furigana": "しょほうせんのかくにん",
              "romaji": "shohousen no kakunin"
            },
            {
              "id": "p_3",
              "left": "食後の確認",
              "right": "Confirming After meal",
              "furigana": "しょくごのかくにん",
              "romaji": "shokugo no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l9_8",
          "type": "dialogue",
          "prompt": "病院について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "病院について教えていただけますか？",
          "furigana": "病院について教えていただけますか？",
          "romaji": "byouin ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hospital / clinic?",
          "audioText": "病院について教えていただけますか？",
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
      "id": "u9_l10",
      "unitId": "unit_9",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming After meal & Confirming Allergy",
      "titleJp": "食後の確認・アレルギーの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "食後の確認",
        "アレルギーの確認",
        "お大事にの確認"
      ],
      "kanjiKeywords": [
        "食",
        "後",
        "確",
        "認",
        "確",
        "認",
        "大",
        "事",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u9_l10_1",
          "type": "listen",
          "prompt": "食後の確認",
          "furigana": "しょくごのかくにん",
          "romaji": "shokugo no kakunin",
          "english": "Confirming After meal",
          "audioText": "しょくごのかくにん",
          "options": [
            "Headache",
            "Throat",
            "Confirming After meal",
            "Confirming Throat"
          ],
          "correctAnswer": "Confirming After meal"
        },
        {
          "id": "u9_l10_2",
          "type": "spell",
          "prompt": "食後の確認",
          "furigana": "しょくごのかくにん",
          "romaji": "shokugo no kakunin",
          "english": "Build 'Confirming After meal'",
          "audioText": "しょくごのかくにん",
          "tileBank": [
            "く",
            "か",
            "し",
            "ご",
            "く",
            "に",
            "ょ",
            "の"
          ],
          "correctAnswer": "しょくごのかくにん"
        },
        {
          "id": "u9_l10_3",
          "type": "cloze",
          "prompt": "私はアレルギーの確認がすきです",
          "furigana": "わたしはアレルギーのかくにんがすきです",
          "romaji": "Watashi wa arerugii no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Allergy.",
          "audioText": "アレルギーの確認",
          "clozeSentence": "これはアレルギーの確認 {{BLANK}} す。",
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
          "id": "u9_l10_4",
          "type": "scramble",
          "prompt": "これはアレルギーの確認です",
          "furigana": "これはアレルギーのかくにんです",
          "romaji": "Kore wa arerugii no kakunin desu.",
          "english": "This is Confirming Allergy.",
          "audioText": "これはアレルギーの確認です",
          "scrambleTokens": [
            "アレルギーの確認",
            "これは",
            "です",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "アレルギーの確認",
            "です"
          ],
          "correctAnswer": "これはアレルギーの確認です"
        },
        {
          "id": "u9_l10_5",
          "type": "speak",
          "prompt": "お大事にの確認",
          "furigana": "おだいじにのかくにん",
          "romaji": "odaiji ni no kakunin",
          "english": "Pronounce: Confirming Take care / get well soon",
          "audioText": "おだいじにのかくにん",
          "targetSpeech": "お大事にの確認",
          "options": [
            "Confirming Take care / get well soon",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "お大事にの確認"
        },
        {
          "id": "u9_l10_6",
          "type": "dictate",
          "prompt": "お大事にの確認をお願いします",
          "furigana": "おだいじにのかくにんをおねがいします",
          "romaji": "odaiji ni no kakunin o onegaishimasu.",
          "english": "Confirming Take care / get well soon, please.",
          "audioText": "お大事にの確認をお願いします",
          "dictateTokens": [
            "お大事にの確認",
            "お願いします",
            "を",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "お大事にの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "お大事にの確認をお願いします"
        },
        {
          "id": "u9_l10_7",
          "type": "match",
          "prompt": "食後の確認・アレルギーの確認・お大事にの確認・病院の確認",
          "furigana": "しょくごのかくにん・アレルギーのかくにん・おだいじにのかくにん・びょういんのかくにん",
          "romaji": "shokugo no kakunin, arerugii no kakunin, odaiji ni no kakunin, byouin no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しょくごのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "食後の確認",
              "right": "Confirming After meal",
              "furigana": "しょくごのかくにん",
              "romaji": "shokugo no kakunin"
            },
            {
              "id": "p_1",
              "left": "アレルギーの確認",
              "right": "Confirming Allergy",
              "furigana": "アレルギーのかくにん",
              "romaji": "arerugii no kakunin"
            },
            {
              "id": "p_2",
              "left": "お大事にの確認",
              "right": "Confirming Take care / get well soon",
              "furigana": "おだいじにのかくにん",
              "romaji": "odaiji ni no kakunin"
            },
            {
              "id": "p_3",
              "left": "病院の確認",
              "right": "Confirming Hospital / clinic",
              "furigana": "びょういんのかくにん",
              "romaji": "byouin no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l10_8",
          "type": "dialogue",
          "prompt": "薬局の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "薬局の準備はできていますか？",
          "furigana": "薬局の準備はできていますか？",
          "romaji": "yakkyoku no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Pharmacy ready?",
          "audioText": "薬局の準備はできていますか？",
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
      "id": "u9_l11",
      "unitId": "unit_9",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Hospital / clinic & Confirming Pharmacy",
      "titleJp": "病院の確認・薬局の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "病院の確認",
        "薬局の確認",
        "熱の確認"
      ],
      "kanjiKeywords": [
        "病",
        "院",
        "確",
        "認",
        "薬",
        "局",
        "確",
        "認",
        "熱",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u9_l11_1",
          "type": "listen",
          "prompt": "病院の確認",
          "furigana": "びょういんのかくにん",
          "romaji": "byouin no kakunin",
          "english": "Confirming Hospital / clinic",
          "audioText": "びょういんのかくにん",
          "options": [
            "Confirming Hospital / clinic",
            "Confirming Stomach / belly",
            "Confirming Pharmacy",
            "Medicine"
          ],
          "correctAnswer": "Confirming Hospital / clinic"
        },
        {
          "id": "u9_l11_2",
          "type": "spell",
          "prompt": "病院の確認",
          "furigana": "びょういんのかくにん",
          "romaji": "byouin no kakunin",
          "english": "Build 'Confirming Hospital / clinic'",
          "audioText": "びょういんのかくにん",
          "tileBank": [
            "い",
            "か",
            "ん",
            "く",
            "う",
            "の",
            "び",
            "ょ"
          ],
          "correctAnswer": "びょういんのかくにん"
        },
        {
          "id": "u9_l11_3",
          "type": "cloze",
          "prompt": "私は薬局の確認がすきです",
          "furigana": "わたしはやっきょくのかくにんがすきです",
          "romaji": "Watashi wa yakkyoku no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Pharmacy.",
          "audioText": "薬局の確認",
          "clozeSentence": "これは薬局の確認 {{BLANK}} す。",
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
          "id": "u9_l11_4",
          "type": "scramble",
          "prompt": "これは薬局の確認です",
          "furigana": "これはやっきょくのかくにんです",
          "romaji": "Kore wa yakkyoku no kakunin desu.",
          "english": "This is Confirming Pharmacy.",
          "audioText": "これは薬局の確認です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "これは",
            "薬局の確認"
          ],
          "scrambleSolution": [
            "これは",
            "薬局の確認",
            "です"
          ],
          "correctAnswer": "これは薬局の確認です"
        },
        {
          "id": "u9_l11_5",
          "type": "speak",
          "prompt": "熱の確認",
          "furigana": "ねつのかくにん",
          "romaji": "netsu no kakunin",
          "english": "Pronounce: Confirming Fever",
          "audioText": "ねつのかくにん",
          "targetSpeech": "熱の確認",
          "options": [
            "Confirming Fever",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "熱の確認"
        },
        {
          "id": "u9_l11_6",
          "type": "dictate",
          "prompt": "熱の確認をお願いします",
          "furigana": "ねつのかくにんをおねがいします",
          "romaji": "netsu no kakunin o onegaishimasu.",
          "english": "Confirming Fever, please.",
          "audioText": "熱の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "熱の確認",
            "を",
            "です"
          ],
          "dictateSolution": [
            "熱の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "熱の確認をお願いします"
        },
        {
          "id": "u9_l11_7",
          "type": "match",
          "prompt": "病院の確認・薬局の確認・熱の確認・頭痛の確認",
          "furigana": "びょういんのかくにん・やっきょくのかくにん・ねつのかくにん・ずつうのかくにん",
          "romaji": "byouin no kakunin, yakkyoku no kakunin, netsu no kakunin, zutsuu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "びょういんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "病院の確認",
              "right": "Confirming Hospital / clinic",
              "furigana": "びょういんのかくにん",
              "romaji": "byouin no kakunin"
            },
            {
              "id": "p_1",
              "left": "薬局の確認",
              "right": "Confirming Pharmacy",
              "furigana": "やっきょくのかくにん",
              "romaji": "yakkyoku no kakunin"
            },
            {
              "id": "p_2",
              "left": "熱の確認",
              "right": "Confirming Fever",
              "furigana": "ねつのかくにん",
              "romaji": "netsu no kakunin"
            },
            {
              "id": "p_3",
              "left": "頭痛の確認",
              "right": "Confirming Headache",
              "furigana": "ずつうのかくにん",
              "romaji": "zutsuu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l11_8",
          "type": "dialogue",
          "prompt": "熱についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "熱についてどう思われますか？",
          "furigana": "熱についてどう思われますか？",
          "romaji": "netsu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Fever?",
          "audioText": "熱についてどう思われますか？",
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
      "id": "u9_l12",
      "unitId": "unit_9",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Headache & Confirming Throat",
      "titleJp": "頭痛の確認・喉の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "頭痛の確認",
        "喉の確認",
        "お腹の確認"
      ],
      "kanjiKeywords": [
        "頭",
        "痛",
        "確",
        "認",
        "喉",
        "確",
        "認",
        "腹",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u9_l12_1",
          "type": "listen",
          "prompt": "頭痛の確認",
          "furigana": "ずつうのかくにん",
          "romaji": "zutsuu no kakunin",
          "english": "Confirming Headache",
          "audioText": "ずつうのかくにん",
          "options": [
            "Confirming Fever",
            "Confirming Headache",
            "Headache",
            "Confirming Painful / hurts"
          ],
          "correctAnswer": "Confirming Headache"
        },
        {
          "id": "u9_l12_2",
          "type": "spell",
          "prompt": "頭痛の確認",
          "furigana": "ずつうのかくにん",
          "romaji": "zutsuu no kakunin",
          "english": "Build 'Confirming Headache'",
          "audioText": "ずつうのかくにん",
          "tileBank": [
            "う",
            "か",
            "の",
            "に",
            "つ",
            "ず",
            "ん",
            "く"
          ],
          "correctAnswer": "ずつうのかくにん"
        },
        {
          "id": "u9_l12_3",
          "type": "cloze",
          "prompt": "私は喉の確認がすきです",
          "furigana": "わたしはのどのかくにんがすきです",
          "romaji": "Watashi wa nodo no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Throat.",
          "audioText": "喉の確認",
          "clozeSentence": "これは喉の確認 {{BLANK}} す。",
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
          "id": "u9_l12_4",
          "type": "scramble",
          "prompt": "これは喉の確認です",
          "furigana": "これはのどのかくにんです",
          "romaji": "Kore wa nodo no kakunin desu.",
          "english": "This is Confirming Throat.",
          "audioText": "これは喉の確認です",
          "scrambleTokens": [
            "これは",
            "それ",
            "喉の確認",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "喉の確認",
            "です"
          ],
          "correctAnswer": "これは喉の確認です"
        },
        {
          "id": "u9_l12_5",
          "type": "speak",
          "prompt": "お腹の確認",
          "furigana": "おなかのかくにん",
          "romaji": "onaka no kakunin",
          "english": "Pronounce: Confirming Stomach / belly",
          "audioText": "おなかのかくにん",
          "targetSpeech": "お腹の確認",
          "options": [
            "Confirming Stomach / belly",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "お腹の確認"
        },
        {
          "id": "u9_l12_6",
          "type": "dictate",
          "prompt": "お腹の確認をお願いします",
          "furigana": "おなかのかくにんをおねがいします",
          "romaji": "onaka no kakunin o onegaishimasu.",
          "english": "Confirming Stomach / belly, please.",
          "audioText": "お腹の確認をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "お願いします",
            "を",
            "お腹の確認"
          ],
          "dictateSolution": [
            "お腹の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "お腹の確認をお願いします"
        },
        {
          "id": "u9_l12_7",
          "type": "match",
          "prompt": "頭痛の確認・喉の確認・お腹の確認・病院",
          "furigana": "ずつうのかくにん・のどのかくにん・おなかのかくにん・びょういん",
          "romaji": "zutsuu no kakunin, nodo no kakunin, onaka no kakunin, byouin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ずつうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "頭痛の確認",
              "right": "Confirming Headache",
              "furigana": "ずつうのかくにん",
              "romaji": "zutsuu no kakunin"
            },
            {
              "id": "p_1",
              "left": "喉の確認",
              "right": "Confirming Throat",
              "furigana": "のどのかくにん",
              "romaji": "nodo no kakunin"
            },
            {
              "id": "p_2",
              "left": "お腹の確認",
              "right": "Confirming Stomach / belly",
              "furigana": "おなかのかくにん",
              "romaji": "onaka no kakunin"
            },
            {
              "id": "p_3",
              "left": "病院",
              "right": "Hospital / clinic",
              "furigana": "びょういん",
              "romaji": "byouin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l12_8",
          "type": "dialogue",
          "prompt": "次は頭痛に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は頭痛に進みましょう。",
          "furigana": "次は頭痛に進みましょう。",
          "romaji": "Tsugi wa zutsuu ni susumimashou.",
          "english": "Speaker: Let's proceed to Headache next.",
          "audioText": "次は頭痛に進みましょう。",
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
      "id": "u9_l13",
      "unitId": "unit_9",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Hospital / clinic & Pharmacy",
      "titleJp": "病院・薬局",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "病院",
        "薬局",
        "熱"
      ],
      "kanjiKeywords": [
        "病",
        "院",
        "薬",
        "局",
        "熱"
      ],
      "items": [
        {
          "id": "u9_l13_1",
          "type": "listen",
          "prompt": "病院",
          "furigana": "びょういん",
          "romaji": "byouin",
          "english": "Hospital / clinic",
          "audioText": "びょういん",
          "options": [
            "Confirming Medicine",
            "Hospital / clinic",
            "Stomach / belly",
            "Painful / hurts"
          ],
          "correctAnswer": "Hospital / clinic"
        },
        {
          "id": "u9_l13_2",
          "type": "spell",
          "prompt": "病院",
          "furigana": "びょういん",
          "romaji": "byouin",
          "english": "Build 'Hospital / clinic'",
          "audioText": "びょういん",
          "tileBank": [
            "ひ",
            "う",
            "ょ",
            "い",
            "に",
            "ま",
            "ん",
            "び"
          ],
          "correctAnswer": "びょういん"
        },
        {
          "id": "u9_l13_3",
          "type": "cloze",
          "prompt": "私は薬局がすきです",
          "furigana": "わたしはやっきょくがすきです",
          "romaji": "Watashi wa yakkyoku ga suki desu.",
          "english": "Fill in the blank with the correct particle for Pharmacy.",
          "audioText": "薬局",
          "clozeSentence": "これは薬局 {{BLANK}} す。",
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
          "id": "u9_l13_4",
          "type": "scramble",
          "prompt": "これは薬局です",
          "furigana": "これはやっきょくです",
          "romaji": "Kore wa yakkyoku desu.",
          "english": "This is Pharmacy.",
          "audioText": "これは薬局です",
          "scrambleTokens": [
            "それ",
            "薬局",
            "です",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "薬局",
            "です"
          ],
          "correctAnswer": "これは薬局です"
        },
        {
          "id": "u9_l13_5",
          "type": "speak",
          "prompt": "熱",
          "furigana": "ねつ",
          "romaji": "netsu",
          "english": "Pronounce: Fever",
          "audioText": "ねつ",
          "targetSpeech": "熱",
          "options": [
            "Fever",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "熱"
        },
        {
          "id": "u9_l13_6",
          "type": "dictate",
          "prompt": "熱をお願いします",
          "furigana": "ねつをおねがいします",
          "romaji": "netsu o onegaishimasu.",
          "english": "Fever, please.",
          "audioText": "熱をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "熱",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "熱",
            "を",
            "お願いします"
          ],
          "correctAnswer": "熱をお願いします"
        },
        {
          "id": "u9_l13_7",
          "type": "match",
          "prompt": "病院・薬局・熱・頭痛",
          "furigana": "びょういん・やっきょく・ねつ・ずつう",
          "romaji": "byouin, yakkyoku, netsu, zutsuu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "びょういん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "病院",
              "right": "Hospital / clinic",
              "furigana": "びょういん",
              "romaji": "byouin"
            },
            {
              "id": "p_1",
              "left": "薬局",
              "right": "Pharmacy",
              "furigana": "やっきょく",
              "romaji": "yakkyoku"
            },
            {
              "id": "p_2",
              "left": "熱",
              "right": "Fever",
              "furigana": "ねつ",
              "romaji": "netsu"
            },
            {
              "id": "p_3",
              "left": "頭痛",
              "right": "Headache",
              "furigana": "ずつう",
              "romaji": "zutsuu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l13_8",
          "type": "dialogue",
          "prompt": "病院について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "病院について教えていただけますか？",
          "furigana": "病院について教えていただけますか？",
          "romaji": "byouin ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hospital / clinic?",
          "audioText": "病院について教えていただけますか？",
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
      "id": "u9_l14",
      "unitId": "unit_9",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Headache & Throat",
      "titleJp": "頭痛・喉",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "頭痛",
        "喉",
        "お腹"
      ],
      "kanjiKeywords": [
        "頭",
        "痛",
        "喉",
        "腹"
      ],
      "items": [
        {
          "id": "u9_l14_1",
          "type": "listen",
          "prompt": "頭痛",
          "furigana": "ずつう",
          "romaji": "zutsuu",
          "english": "Headache",
          "audioText": "ずつう",
          "options": [
            "Confirming Allergy",
            "Medicine",
            "Confirming Take care / get well soon",
            "Headache"
          ],
          "correctAnswer": "Headache"
        },
        {
          "id": "u9_l14_2",
          "type": "spell",
          "prompt": "頭痛",
          "furigana": "ずつう",
          "romaji": "zutsuu",
          "english": "Build 'Headache'",
          "audioText": "ずつう",
          "tileBank": [
            "へ",
            "う",
            "り",
            "つ",
            "ず",
            "と",
            "く",
            "を"
          ],
          "correctAnswer": "ずつう"
        },
        {
          "id": "u9_l14_3",
          "type": "cloze",
          "prompt": "私は喉がすきです",
          "furigana": "わたしはのどがすきです",
          "romaji": "Watashi wa nodo ga suki desu.",
          "english": "Fill in the blank with the correct particle for Throat.",
          "audioText": "喉",
          "clozeSentence": "これは喉 {{BLANK}} す。",
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
          "id": "u9_l14_4",
          "type": "scramble",
          "prompt": "これは喉です",
          "furigana": "これはのどです",
          "romaji": "Kore wa nodo desu.",
          "english": "This is Throat.",
          "audioText": "これは喉です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "喉",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "喉",
            "です"
          ],
          "correctAnswer": "これは喉です"
        },
        {
          "id": "u9_l14_5",
          "type": "speak",
          "prompt": "お腹",
          "furigana": "おなか",
          "romaji": "onaka",
          "english": "Pronounce: Stomach / belly",
          "audioText": "おなか",
          "targetSpeech": "お腹",
          "options": [
            "Stomach / belly",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "お腹"
        },
        {
          "id": "u9_l14_6",
          "type": "dictate",
          "prompt": "お腹をお願いします",
          "furigana": "おなかをおねがいします",
          "romaji": "onaka o onegaishimasu.",
          "english": "Stomach / belly, please.",
          "audioText": "お腹をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "です",
            "ありがとう",
            "お腹"
          ],
          "dictateSolution": [
            "お腹",
            "を",
            "お願いします"
          ],
          "correctAnswer": "お腹をお願いします"
        },
        {
          "id": "u9_l14_7",
          "type": "match",
          "prompt": "頭痛・喉・お腹・痛い",
          "furigana": "ずつう・のど・おなか・いたい",
          "romaji": "zutsuu, nodo, onaka, itai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ずつう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "頭痛",
              "right": "Headache",
              "furigana": "ずつう",
              "romaji": "zutsuu"
            },
            {
              "id": "p_1",
              "left": "喉",
              "right": "Throat",
              "furigana": "のど",
              "romaji": "nodo"
            },
            {
              "id": "p_2",
              "left": "お腹",
              "right": "Stomach / belly",
              "furigana": "おなか",
              "romaji": "onaka"
            },
            {
              "id": "p_3",
              "left": "痛い",
              "right": "Painful / hurts",
              "furigana": "いたい",
              "romaji": "itai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l14_8",
          "type": "dialogue",
          "prompt": "薬局の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "薬局の準備はできていますか？",
          "furigana": "薬局の準備はできていますか？",
          "romaji": "yakkyoku no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Pharmacy ready?",
          "audioText": "薬局の準備はできていますか？",
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
      "id": "u9_l15",
      "unitId": "unit_9",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 9 Master Exam",
      "iconType": "test",
      "title": "Unit 9 Master Exam",
      "titleJp": "第9週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "痛い",
        "風邪",
        "咳"
      ],
      "kanjiKeywords": [
        "痛",
        "風",
        "邪",
        "咳"
      ],
      "items": [
        {
          "id": "u9_l15_1",
          "type": "listen",
          "prompt": "痛い",
          "furigana": "いたい",
          "romaji": "itai",
          "english": "Painful / hurts",
          "audioText": "いたい",
          "options": [
            "Health insurance card",
            "Confirming Stomach / belly",
            "Painful / hurts",
            "Fever"
          ],
          "correctAnswer": "Painful / hurts"
        },
        {
          "id": "u9_l15_2",
          "type": "spell",
          "prompt": "痛い",
          "furigana": "いたい",
          "romaji": "itai",
          "english": "Build 'Painful / hurts'",
          "audioText": "いたい",
          "tileBank": [
            "い",
            "を",
            "ほ",
            "み",
            "た",
            "な",
            "い",
            "は"
          ],
          "correctAnswer": "いたい"
        },
        {
          "id": "u9_l15_3",
          "type": "cloze",
          "prompt": "私は風邪がすきです",
          "furigana": "わたしはかぜがすきです",
          "romaji": "Watashi wa kaze ga suki desu.",
          "english": "Fill in the blank with the correct particle for Common cold.",
          "audioText": "風邪",
          "clozeSentence": "これは風邪 {{BLANK}} す。",
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
          "id": "u9_l15_4",
          "type": "scramble",
          "prompt": "これは風邪です",
          "furigana": "これはかぜです",
          "romaji": "Kore wa kaze desu.",
          "english": "This is Common cold.",
          "audioText": "これは風邪です",
          "scrambleTokens": [
            "です",
            "それ",
            "風邪",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "風邪",
            "です"
          ],
          "correctAnswer": "これは風邪です"
        },
        {
          "id": "u9_l15_5",
          "type": "speak",
          "prompt": "咳",
          "furigana": "せき",
          "romaji": "seki",
          "english": "Pronounce: Cough",
          "audioText": "せき",
          "targetSpeech": "咳",
          "options": [
            "Cough",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "咳"
        },
        {
          "id": "u9_l15_6",
          "type": "dictate",
          "prompt": "咳をお願いします",
          "furigana": "せきをおねがいします",
          "romaji": "seki o onegaishimasu.",
          "english": "Cough, please.",
          "audioText": "咳をお願いします",
          "dictateTokens": [
            "ありがとう",
            "咳",
            "です",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "咳",
            "を",
            "お願いします"
          ],
          "correctAnswer": "咳をお願いします"
        },
        {
          "id": "u9_l15_7",
          "type": "match",
          "prompt": "痛い・風邪・咳・薬",
          "furigana": "いたい・かぜ・せき・くすり",
          "romaji": "itai, kaze, seki, kusuri",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いたい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "痛い",
              "right": "Painful / hurts",
              "furigana": "いたい",
              "romaji": "itai"
            },
            {
              "id": "p_1",
              "left": "風邪",
              "right": "Common cold",
              "furigana": "かぜ",
              "romaji": "kaze"
            },
            {
              "id": "p_2",
              "left": "咳",
              "right": "Cough",
              "furigana": "せき",
              "romaji": "seki"
            },
            {
              "id": "p_3",
              "left": "薬",
              "right": "Medicine",
              "furigana": "くすり",
              "romaji": "kusuri"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u9_l15_8",
          "type": "dialogue",
          "prompt": "熱についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "熱についてどう思われますか？",
          "furigana": "熱についてどう思われますか？",
          "romaji": "netsu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Fever?",
          "audioText": "熱についてどう思われますか？",
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
    "id": "gate_unit_9",
    "unitId": "unit_9",
    "title": "Unit 9 Mastery Checkpoint",
    "titleJp": "第9週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u9_l1_1",
        "type": "listen",
        "prompt": "病院",
        "furigana": "びょういん",
        "romaji": "byouin",
        "english": "Hospital / clinic",
        "audioText": "びょういん",
        "options": [
          "Pharmacy",
          "Confirming Health insurance card",
          "Medicine",
          "Hospital / clinic"
        ],
        "correctAnswer": "Hospital / clinic"
      },
      {
        "id": "u9_l1_2",
        "type": "spell",
        "prompt": "病院",
        "furigana": "びょういん",
        "romaji": "byouin",
        "english": "Build 'Hospital / clinic'",
        "audioText": "びょういん",
        "tileBank": [
          "び",
          "わ",
          "い",
          "け",
          "ん",
          "う",
          "ょ",
          "さ"
        ],
        "correctAnswer": "びょういん"
      },
      {
        "id": "u9_l3_1",
        "type": "listen",
        "prompt": "痛い",
        "furigana": "いたい",
        "romaji": "itai",
        "english": "Painful / hurts",
        "audioText": "いたい",
        "options": [
          "Painful / hurts",
          "Confirming Headache",
          "Confirming Medicine",
          "Confirming Headache"
        ],
        "correctAnswer": "Painful / hurts"
      },
      {
        "id": "u9_l3_2",
        "type": "spell",
        "prompt": "痛い",
        "furigana": "いたい",
        "romaji": "itai",
        "english": "Build 'Painful / hurts'",
        "audioText": "いたい",
        "tileBank": [
          "よ",
          "に",
          "ね",
          "い",
          "せ",
          "ら",
          "た",
          "い"
        ],
        "correctAnswer": "いたい"
      },
      {
        "id": "u9_l5_1",
        "type": "listen",
        "prompt": "食後",
        "furigana": "しょくご",
        "romaji": "shokugo",
        "english": "After meal",
        "audioText": "しょくご",
        "options": [
          "After meal",
          "Confirming Fever",
          "Confirming Painful / hurts",
          "Confirming Pharmacy"
        ],
        "correctAnswer": "After meal"
      },
      {
        "id": "u9_l5_2",
        "type": "spell",
        "prompt": "食後",
        "furigana": "しょくご",
        "romaji": "shokugo",
        "english": "Build 'After meal'",
        "audioText": "しょくご",
        "tileBank": [
          "ょ",
          "り",
          "し",
          "く",
          "ご",
          "み",
          "き",
          "ん"
        ],
        "correctAnswer": "しょくご"
      },
      {
        "id": "u9_l7_1",
        "type": "listen",
        "prompt": "頭痛の確認",
        "furigana": "ずつうのかくにん",
        "romaji": "zutsuu no kakunin",
        "english": "Confirming Headache",
        "audioText": "ずつうのかくにん",
        "options": [
          "Fever",
          "Confirming Painful / hurts",
          "Confirming Headache",
          "Stomach / belly"
        ],
        "correctAnswer": "Confirming Headache"
      },
      {
        "id": "u9_l7_2",
        "type": "spell",
        "prompt": "頭痛の確認",
        "furigana": "ずつうのかくにん",
        "romaji": "zutsuu no kakunin",
        "english": "Build 'Confirming Headache'",
        "audioText": "ずつうのかくにん",
        "tileBank": [
          "つ",
          "く",
          "の",
          "か",
          "ん",
          "ず",
          "に",
          "う"
        ],
        "correctAnswer": "ずつうのかくにん"
      },
      {
        "id": "u9_l9_1",
        "type": "listen",
        "prompt": "薬の確認",
        "furigana": "くすりのかくにん",
        "romaji": "kusuri no kakunin",
        "english": "Confirming Medicine",
        "audioText": "くすりのかくにん",
        "options": [
          "Confirming Medicine",
          "Painful / hurts",
          "Fever",
          "Confirming Allergy"
        ],
        "correctAnswer": "Confirming Medicine"
      },
      {
        "id": "u9_l9_2",
        "type": "spell",
        "prompt": "薬の確認",
        "furigana": "くすりのかくにん",
        "romaji": "kusuri no kakunin",
        "english": "Build 'Confirming Medicine'",
        "audioText": "くすりのかくにん",
        "tileBank": [
          "り",
          "す",
          "の",
          "か",
          "に",
          "く",
          "く",
          "ん"
        ],
        "correctAnswer": "くすりのかくにん"
      },
      {
        "id": "u9_l11_1",
        "type": "listen",
        "prompt": "病院の確認",
        "furigana": "びょういんのかくにん",
        "romaji": "byouin no kakunin",
        "english": "Confirming Hospital / clinic",
        "audioText": "びょういんのかくにん",
        "options": [
          "Confirming Hospital / clinic",
          "Confirming Stomach / belly",
          "Confirming Pharmacy",
          "Medicine"
        ],
        "correctAnswer": "Confirming Hospital / clinic"
      },
      {
        "id": "u9_l11_2",
        "type": "spell",
        "prompt": "病院の確認",
        "furigana": "びょういんのかくにん",
        "romaji": "byouin no kakunin",
        "english": "Build 'Confirming Hospital / clinic'",
        "audioText": "びょういんのかくにん",
        "tileBank": [
          "い",
          "か",
          "ん",
          "く",
          "う",
          "の",
          "び",
          "ょ"
        ],
        "correctAnswer": "びょういんのかくにん"
      }
    ]
  }
};
