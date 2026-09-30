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
            "Thank you for your hard work",
            "Confirming To be / go / come (honorific)",
            "Confirming To be / go / come (honorific)",
            "Confirming Consultation / advice"
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
            "ふ",
            "さ",
            "つ",
            "お",
            "ち",
            "ま",
            "れ",
            "か"
          ],
          "correctAnswer": "おつかれさま"
        },
        {
          "id": "u14_l1_3",
          "type": "cloze",
          "prompt": "部屋を出るとき: 「お先に失礼します。」",
          "furigana": "へやをでるとき: 「おさきにしつれいします。」",
          "romaji": "Heya o deru toki: 'Osaki ni shitsureishimasu.'",
          "english": "Leaving a room: 'Pardon me for leaving first.'",
          "audioText": "失礼します",
          "clozeSentence": "部屋を出るとき: 「お先に{{BLANK}}。」",
          "clozeTarget": "失礼します",
          "clozeOptions": [
            "失礼します",
            "こんにちは",
            "いただきます",
            "おやすみなさい"
          ],
          "correctAnswer": "失礼します",
          "explanation": "Polite expression when leaving or entering a room."
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
            "ではありません",
            "です",
            "これは",
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
          "prompt": "承知です",
          "furigana": "しょうちです",
          "romaji": "shouchi desu.",
          "english": "It is Acknowledged / understood.",
          "audioText": "承知です",
          "dictateTokens": [
            "これ",
            "です",
            "ではありません",
            "承知"
          ],
          "dictateSolution": [
            "承知",
            "です"
          ],
          "correctAnswer": "承知です"
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
            "Confirming To see / inspect (honorific)",
            "Documents / handout materials",
            "To say (humble Kenjougo)",
            "Confirming Supervisor / boss"
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
            "ほ",
            "も",
            "あ",
            "し",
            "ま",
            "げ",
            "る",
            "う"
          ],
          "correctAnswer": "もうしあげる"
        },
        {
          "id": "u14_l2_3",
          "type": "cloze",
          "prompt": "これはいちばん大切ないらっしゃるです。",
          "furigana": "これはいちばんたいせつないらっしゃるです。",
          "romaji": "Kore wa ichiban taisetsu na irassharu desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important To be / go / come (honorific).",
          "audioText": "これはいらっしゃるです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切ないらっしゃるです。",
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
          "id": "u14_l2_4",
          "type": "scramble",
          "prompt": "これはいらっしゃるです",
          "furigana": "これはいらっしゃるです",
          "romaji": "Kore wa irassharu desu.",
          "english": "This is To be / go / come (honorific).",
          "audioText": "これはいらっしゃるです",
          "scrambleTokens": [
            "それ",
            "これは",
            "です",
            "いらっしゃる",
            "ではありません"
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
          "prompt": "ご覧になるです",
          "furigana": "ごらんになるです",
          "romaji": "goran ni naru desu.",
          "english": "It is To see / inspect (honorific).",
          "audioText": "ご覧になるです",
          "dictateTokens": [
            "ではありません",
            "これ",
            "ご覧になる",
            "です"
          ],
          "dictateSolution": [
            "ご覧になる",
            "です"
          ],
          "correctAnswer": "ご覧になるです"
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
            "Confirming Colleague / coworker",
            "Report (part of Horenso)",
            "Excuse me (entering/leaving)",
            "To look at / read (humble)"
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
            "け",
            "ん",
            "る",
            "か",
            "す",
            "な",
            "い",
            "は"
          ],
          "correctAnswer": "はいけんする"
        },
        {
          "id": "u14_l3_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な名刺です。",
          "furigana": "これはいちばんたいせつなめいしです。",
          "romaji": "Kore wa ichiban taisetsu na meishi desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Business card.",
          "audioText": "これは名刺です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な名刺です。",
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
          "id": "u14_l3_4",
          "type": "scramble",
          "prompt": "これは名刺です",
          "furigana": "これはめいしです",
          "romaji": "Kore wa meishi desu.",
          "english": "This is Business card.",
          "audioText": "これは名刺です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "これは",
            "です",
            "名刺"
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
          "prompt": "上司です",
          "furigana": "じょうしです",
          "romaji": "joushi desu.",
          "english": "It is Supervisor / boss.",
          "audioText": "上司です",
          "dictateTokens": [
            "です",
            "これ",
            "上司",
            "ではありません"
          ],
          "dictateSolution": [
            "上司",
            "です"
          ],
          "correctAnswer": "上司です"
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
            "Excuse me (entering/leaving)",
            "Communication / liaison",
            "Confirming To look at / read (humble)",
            "Colleague / coworker"
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
            "ん",
            "う",
            "う",
            "ど",
            "ょ",
            "ま",
            "り",
            "あ"
          ],
          "correctAnswer": "どうりょう"
        },
        {
          "id": "u14_l4_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な会議です。",
          "furigana": "これはいちばんたいせつなかいぎです。",
          "romaji": "Kore wa ichiban taisetsu na kaigi desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Business meeting.",
          "audioText": "これは会議です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な会議です。",
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
          "id": "u14_l4_4",
          "type": "scramble",
          "prompt": "これは会議です",
          "furigana": "これはかいぎです",
          "romaji": "Kore wa kaigi desu.",
          "english": "This is Business meeting.",
          "audioText": "これは会議です",
          "scrambleTokens": [
            "これは",
            "です",
            "会議",
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
          "prompt": "資料です",
          "furigana": "しりょうです",
          "romaji": "shiryou desu.",
          "english": "It is Documents / handout materials.",
          "audioText": "資料です",
          "dictateTokens": [
            "資料",
            "ではありません",
            "これ",
            "です"
          ],
          "dictateSolution": [
            "資料",
            "です"
          ],
          "correctAnswer": "資料です"
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
            "Confirming Acknowledged / understood",
            "To look at / read (humble)",
            "Thank you for your hard work",
            "Report (part of Horenso)"
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
            "と",
            "ふ",
            "く",
            "ら",
            "う",
            "こ",
            "ゆ"
          ],
          "correctAnswer": "ほうこく"
        },
        {
          "id": "u14_l5_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な連絡です。",
          "furigana": "これはいちばんたいせつなれんらくです。",
          "romaji": "Kore wa ichiban taisetsu na renraku desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Communication / liaison.",
          "audioText": "これは連絡です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な連絡です。",
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
          "id": "u14_l5_4",
          "type": "scramble",
          "prompt": "これは連絡です",
          "furigana": "これはれんらくです",
          "romaji": "Kore wa renraku desu.",
          "english": "This is Communication / liaison.",
          "audioText": "これは連絡です",
          "scrambleTokens": [
            "連絡",
            "これは",
            "ではありません",
            "です",
            "それ"
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
          "prompt": "相談です",
          "furigana": "そうだんです",
          "romaji": "soudan desu.",
          "english": "It is Consultation / advice.",
          "audioText": "相談です",
          "dictateTokens": [
            "です",
            "ではありません",
            "これ",
            "相談"
          ],
          "dictateSolution": [
            "相談",
            "です"
          ],
          "correctAnswer": "相談です"
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
            "Confirming Consultation / advice",
            "Confirming Communication / liaison",
            "Confirming Colleague / coworker",
            "Confirming Thank you for your hard work"
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
            "さ",
            "れ",
            "の",
            "お",
            "ま",
            "つ",
            "か"
          ],
          "correctAnswer": "おつかれさまのかくにん"
        },
        {
          "id": "u14_l6_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な失礼しますの確認です。",
          "furigana": "これはいちばんたいせつなしつれいしますのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na shitsureishimasu no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Excuse me (entering/leaving).",
          "audioText": "これは失礼しますの確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な失礼しますの確認です。",
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
          "id": "u14_l6_4",
          "type": "scramble",
          "prompt": "これは失礼しますの確認です",
          "furigana": "これはしつれいしますのかくにんです",
          "romaji": "Kore wa shitsureishimasu no kakunin desu.",
          "english": "This is Confirming Excuse me (entering/leaving).",
          "audioText": "これは失礼しますの確認です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "それ",
            "です",
            "失礼しますの確認"
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
          "prompt": "承知の確認です",
          "furigana": "しょうちのかくにんです",
          "romaji": "shouchi no kakunin desu.",
          "english": "It is Confirming Acknowledged / understood.",
          "audioText": "承知の確認です",
          "dictateTokens": [
            "です",
            "ではありません",
            "これ",
            "承知の確認"
          ],
          "dictateSolution": [
            "承知の確認",
            "です"
          ],
          "correctAnswer": "承知の確認です"
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
            "To look at / read (humble)",
            "Business meeting",
            "Confirming To say (humble Kenjougo)",
            "Confirming Report (part of Horenso)"
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
            "る",
            "も",
            "し",
            "あ",
            "う",
            "げ",
            "か",
            "の"
          ],
          "correctAnswer": "もうしあげるのかくにん"
        },
        {
          "id": "u14_l7_3",
          "type": "cloze",
          "prompt": "これはいちばん大切ないらっしゃるの確認です。",
          "furigana": "これはいちばんたいせつないらっしゃるのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na irassharu no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming To be / go / come (honorific).",
          "audioText": "これはいらっしゃるの確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切ないらっしゃるの確認です。",
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
            "です",
            "それ",
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
          "prompt": "ご覧になるの確認です",
          "furigana": "ごらんになるのかくにんです",
          "romaji": "goran ni naru no kakunin desu.",
          "english": "It is Confirming To see / inspect (honorific).",
          "audioText": "ご覧になるの確認です",
          "dictateTokens": [
            "ご覧になるの確認",
            "これ",
            "です",
            "ではありません"
          ],
          "dictateSolution": [
            "ご覧になるの確認",
            "です"
          ],
          "correctAnswer": "ご覧になるの確認です"
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
            "Communication / liaison",
            "To be / go / come (honorific)",
            "Confirming Communication / liaison"
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
            "ん",
            "け",
            "か",
            "は",
            "す",
            "い",
            "る",
            "の"
          ],
          "correctAnswer": "はいけんするのかくにん"
        },
        {
          "id": "u14_l8_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な名刺の確認です。",
          "furigana": "これはいちばんたいせつなめいしのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na meishi no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Business card.",
          "audioText": "これは名刺の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な名刺の確認です。",
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
          "id": "u14_l8_4",
          "type": "scramble",
          "prompt": "これは名刺の確認です",
          "furigana": "これはめいしのかくにんです",
          "romaji": "Kore wa meishi no kakunin desu.",
          "english": "This is Confirming Business card.",
          "audioText": "これは名刺の確認です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "これは",
            "それ",
            "名刺の確認"
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
          "prompt": "上司の確認です",
          "furigana": "じょうしのかくにんです",
          "romaji": "joushi no kakunin desu.",
          "english": "It is Confirming Supervisor / boss.",
          "audioText": "上司の確認です",
          "dictateTokens": [
            "です",
            "ではありません",
            "これ",
            "上司の確認"
          ],
          "dictateSolution": [
            "上司の確認",
            "です"
          ],
          "correctAnswer": "上司の確認です"
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
            "Confirming Colleague / coworker",
            "Supervisor / boss",
            "Consultation / advice",
            "Confirming To say (humble Kenjougo)"
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
            "く",
            "う",
            "り",
            "う",
            "の",
            "か",
            "ょ",
            "ど"
          ],
          "correctAnswer": "どうりょうのかくにん"
        },
        {
          "id": "u14_l9_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な会議の確認です。",
          "furigana": "これはいちばんたいせつなかいぎのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na kaigi no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Business meeting.",
          "audioText": "これは会議の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な会議の確認です。",
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
          "id": "u14_l9_4",
          "type": "scramble",
          "prompt": "これは会議の確認です",
          "furigana": "これはかいぎのかくにんです",
          "romaji": "Kore wa kaigi no kakunin desu.",
          "english": "This is Confirming Business meeting.",
          "audioText": "これは会議の確認です",
          "scrambleTokens": [
            "会議の確認",
            "です",
            "それ",
            "これは",
            "ではありません"
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
          "prompt": "資料の確認です",
          "furigana": "しりょうのかくにんです",
          "romaji": "shiryou no kakunin desu.",
          "english": "It is Confirming Documents / handout materials.",
          "audioText": "資料の確認です",
          "dictateTokens": [
            "資料の確認",
            "です",
            "これ",
            "ではありません"
          ],
          "dictateSolution": [
            "資料の確認",
            "です"
          ],
          "correctAnswer": "資料の確認です"
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
            "Confirming To say (humble Kenjougo)",
            "Confirming Report (part of Horenso)",
            "Confirming Excuse me (entering/leaving)",
            "To say (humble Kenjougo)"
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
            "に",
            "ほ",
            "く",
            "の",
            "う",
            "く",
            "こ",
            "か"
          ],
          "correctAnswer": "ほうこくのかくにん"
        },
        {
          "id": "u14_l10_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な連絡の確認です。",
          "furigana": "これはいちばんたいせつなれんらくのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na renraku no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Communication / liaison.",
          "audioText": "これは連絡の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な連絡の確認です。",
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
          "id": "u14_l10_4",
          "type": "scramble",
          "prompt": "これは連絡の確認です",
          "furigana": "これはれんらくのかくにんです",
          "romaji": "Kore wa renraku no kakunin desu.",
          "english": "This is Confirming Communication / liaison.",
          "audioText": "これは連絡の確認です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "連絡の確認",
            "です",
            "これは"
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
          "prompt": "相談の確認です",
          "furigana": "そうだんのかくにんです",
          "romaji": "soudan no kakunin desu.",
          "english": "It is Confirming Consultation / advice.",
          "audioText": "相談の確認です",
          "dictateTokens": [
            "です",
            "これ",
            "ではありません",
            "相談の確認"
          ],
          "dictateSolution": [
            "相談の確認",
            "です"
          ],
          "correctAnswer": "相談の確認です"
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
            "Confirming Thank you for your hard work",
            "Documents / handout materials",
            "To look at / read (humble)",
            "Confirming Communication / liaison"
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
            "つ",
            "か",
            "の",
            "れ",
            "さ",
            "お",
            "ま",
            "か"
          ],
          "correctAnswer": "おつかれさまのかくにん"
        },
        {
          "id": "u14_l11_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な失礼しますの確認です。",
          "furigana": "これはいちばんたいせつなしつれいしますのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na shitsureishimasu no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Excuse me (entering/leaving).",
          "audioText": "これは失礼しますの確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な失礼しますの確認です。",
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
          "id": "u14_l11_4",
          "type": "scramble",
          "prompt": "これは失礼しますの確認です",
          "furigana": "これはしつれいしますのかくにんです",
          "romaji": "Kore wa shitsureishimasu no kakunin desu.",
          "english": "This is Confirming Excuse me (entering/leaving).",
          "audioText": "これは失礼しますの確認です",
          "scrambleTokens": [
            "です",
            "それ",
            "ではありません",
            "これは",
            "失礼しますの確認"
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
          "prompt": "承知の確認です",
          "furigana": "しょうちのかくにんです",
          "romaji": "shouchi no kakunin desu.",
          "english": "It is Confirming Acknowledged / understood.",
          "audioText": "承知の確認です",
          "dictateTokens": [
            "これ",
            "ではありません",
            "です",
            "承知の確認"
          ],
          "dictateSolution": [
            "承知の確認",
            "です"
          ],
          "correctAnswer": "承知の確認です"
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
            "Confirming Excuse me (entering/leaving)",
            "Confirming To see / inspect (honorific)",
            "Confirming Supervisor / boss",
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
            "の",
            "げ",
            "う",
            "も",
            "し",
            "か",
            "あ",
            "る"
          ],
          "correctAnswer": "もうしあげるのかくにん"
        },
        {
          "id": "u14_l12_3",
          "type": "cloze",
          "prompt": "これはいちばん大切ないらっしゃるの確認です。",
          "furigana": "これはいちばんたいせつないらっしゃるのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na irassharu no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming To be / go / come (honorific).",
          "audioText": "これはいらっしゃるの確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切ないらっしゃるの確認です。",
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
          "id": "u14_l12_4",
          "type": "scramble",
          "prompt": "これはいらっしゃるの確認です",
          "furigana": "これはいらっしゃるのかくにんです",
          "romaji": "Kore wa irassharu no kakunin desu.",
          "english": "This is Confirming To be / go / come (honorific).",
          "audioText": "これはいらっしゃるの確認です",
          "scrambleTokens": [
            "それ",
            "いらっしゃるの確認",
            "です",
            "ではありません",
            "これは"
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
          "prompt": "ご覧になるの確認です",
          "furigana": "ごらんになるのかくにんです",
          "romaji": "goran ni naru no kakunin desu.",
          "english": "It is Confirming To see / inspect (honorific).",
          "audioText": "ご覧になるの確認です",
          "dictateTokens": [
            "ではありません",
            "これ",
            "ご覧になるの確認",
            "です"
          ],
          "dictateSolution": [
            "ご覧になるの確認",
            "です"
          ],
          "correctAnswer": "ご覧になるの確認です"
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
            "Confirming Business card",
            "Thank you for your hard work",
            "Confirming To be / go / come (honorific)",
            "Consultation / advice"
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
            "ひ",
            "ま",
            "さ",
            "か",
            "お",
            "れ",
            "つ",
            "り"
          ],
          "correctAnswer": "おつかれさま"
        },
        {
          "id": "u14_l13_3",
          "type": "cloze",
          "prompt": "部屋を出るとき: 「お先に失礼します。」",
          "furigana": "へやをでるとき: 「おさきにしつれいします。」",
          "romaji": "Heya o deru toki: 'Osaki ni shitsureishimasu.'",
          "english": "Leaving a room: 'Pardon me for leaving first.'",
          "audioText": "失礼します",
          "clozeSentence": "部屋を出るとき: 「お先に{{BLANK}}。」",
          "clozeTarget": "失礼します",
          "clozeOptions": [
            "失礼します",
            "こんにちは",
            "いただきます",
            "おやすみなさい"
          ],
          "correctAnswer": "失礼します",
          "explanation": "Polite expression when leaving or entering a room."
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
            "これは",
            "です",
            "ではありません",
            "それ",
            "失礼します"
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
          "prompt": "承知です",
          "furigana": "しょうちです",
          "romaji": "shouchi desu.",
          "english": "It is Acknowledged / understood.",
          "audioText": "承知です",
          "dictateTokens": [
            "承知",
            "これ",
            "ではありません",
            "です"
          ],
          "dictateSolution": [
            "承知",
            "です"
          ],
          "correctAnswer": "承知です"
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
            "Consultation / advice",
            "To say (humble Kenjougo)",
            "Confirming To see / inspect (honorific)",
            "Communication / liaison"
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
            "る",
            "つ",
            "あ",
            "む",
            "も",
            "う",
            "げ",
            "し"
          ],
          "correctAnswer": "もうしあげる"
        },
        {
          "id": "u14_l14_3",
          "type": "cloze",
          "prompt": "これはいちばん大切ないらっしゃるです。",
          "furigana": "これはいちばんたいせつないらっしゃるです。",
          "romaji": "Kore wa ichiban taisetsu na irassharu desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important To be / go / come (honorific).",
          "audioText": "これはいらっしゃるです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切ないらっしゃるです。",
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
          "id": "u14_l14_4",
          "type": "scramble",
          "prompt": "これはいらっしゃるです",
          "furigana": "これはいらっしゃるです",
          "romaji": "Kore wa irassharu desu.",
          "english": "This is To be / go / come (honorific).",
          "audioText": "これはいらっしゃるです",
          "scrambleTokens": [
            "いらっしゃる",
            "これは",
            "です",
            "それ",
            "ではありません"
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
          "prompt": "ご覧になるです",
          "furigana": "ごらんになるです",
          "romaji": "goran ni naru desu.",
          "english": "It is To see / inspect (honorific).",
          "audioText": "ご覧になるです",
          "dictateTokens": [
            "ではありません",
            "これ",
            "ご覧になる",
            "です"
          ],
          "dictateSolution": [
            "ご覧になる",
            "です"
          ],
          "correctAnswer": "ご覧になるです"
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
            "To look at / read (humble)",
            "Confirming To see / inspect (honorific)",
            "Business meeting",
            "Acknowledged / understood"
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
            "ん",
            "け",
            "い",
            "す",
            "は",
            "ひ",
            "る",
            "て"
          ],
          "correctAnswer": "はいけんする"
        },
        {
          "id": "u14_l15_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な名刺です。",
          "furigana": "これはいちばんたいせつなめいしです。",
          "romaji": "Kore wa ichiban taisetsu na meishi desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Business card.",
          "audioText": "これは名刺です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な名刺です。",
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
          "id": "u14_l15_4",
          "type": "scramble",
          "prompt": "これは名刺です",
          "furigana": "これはめいしです",
          "romaji": "Kore wa meishi desu.",
          "english": "This is Business card.",
          "audioText": "これは名刺です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "これは",
            "名刺"
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
          "prompt": "上司です",
          "furigana": "じょうしです",
          "romaji": "joushi desu.",
          "english": "It is Supervisor / boss.",
          "audioText": "上司です",
          "dictateTokens": [
            "ではありません",
            "上司",
            "です",
            "これ"
          ],
          "dictateSolution": [
            "上司",
            "です"
          ],
          "correctAnswer": "上司です"
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
          "Thank you for your hard work",
          "Confirming To be / go / come (honorific)",
          "Confirming To be / go / come (honorific)",
          "Confirming Consultation / advice"
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
          "ふ",
          "さ",
          "つ",
          "お",
          "ち",
          "ま",
          "れ",
          "か"
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
          "Confirming Colleague / coworker",
          "Report (part of Horenso)",
          "Excuse me (entering/leaving)",
          "To look at / read (humble)"
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
          "け",
          "ん",
          "る",
          "か",
          "す",
          "な",
          "い",
          "は"
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
          "Confirming Acknowledged / understood",
          "To look at / read (humble)",
          "Thank you for your hard work",
          "Report (part of Horenso)"
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
          "と",
          "ふ",
          "く",
          "ら",
          "う",
          "こ",
          "ゆ"
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
          "To look at / read (humble)",
          "Business meeting",
          "Confirming To say (humble Kenjougo)",
          "Confirming Report (part of Horenso)"
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
          "る",
          "も",
          "し",
          "あ",
          "う",
          "げ",
          "か",
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
          "Confirming Colleague / coworker",
          "Supervisor / boss",
          "Consultation / advice",
          "Confirming To say (humble Kenjougo)"
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
          "く",
          "う",
          "り",
          "う",
          "の",
          "か",
          "ょ",
          "ど"
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
          "Confirming Thank you for your hard work",
          "Documents / handout materials",
          "To look at / read (humble)",
          "Confirming Communication / liaison"
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
          "つ",
          "か",
          "の",
          "れ",
          "さ",
          "お",
          "ま",
          "か"
        ],
        "correctAnswer": "おつかれさまのかくにん"
      }
    ]
  }
};
