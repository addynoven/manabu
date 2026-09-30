import type { DojoUnit } from "../../models/dojo.model";

export const unit13: DojoUnit = {
  "id": "unit_13",
  "unitNumber": 13,
  "title": "Apartment Hunting in Japan",
  "titleJp": "日本の部屋探しと不動産",
  "description": "Understand real estate terms, leasing conditions (reikin, shikikin), layout types, and signing rental contracts.",
  "icon": "🏢",
  "themeColor": "#F97316",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u13_l1",
      "unitId": "unit_13",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Monthly rent & Security deposit",
      "titleJp": "家賃・敷金",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "家賃",
        "敷金",
        "礼金"
      ],
      "kanjiKeywords": [
        "家",
        "賃",
        "敷",
        "金",
        "礼",
        "金"
      ],
      "items": [
        {
          "id": "u13_l1_1",
          "type": "listen",
          "prompt": "家賃",
          "furigana": "やちん",
          "romaji": "yachin",
          "english": "Monthly rent",
          "audioText": "やちん",
          "options": [
            "Confirming Security deposit",
            "Monthly rent",
            "Confirming Sunlight exposure",
            "Moving residence"
          ],
          "correctAnswer": "Monthly rent"
        },
        {
          "id": "u13_l1_2",
          "type": "spell",
          "prompt": "家賃",
          "furigana": "やちん",
          "romaji": "yachin",
          "english": "Build 'Monthly rent'",
          "audioText": "やちん",
          "tileBank": [
            "て",
            "む",
            "ち",
            "わ",
            "こ",
            "ん",
            "や",
            "に"
          ],
          "correctAnswer": "やちん"
        },
        {
          "id": "u13_l1_3",
          "type": "cloze",
          "prompt": "私は敷金がすきです",
          "furigana": "わたしはしききんがすきです",
          "romaji": "Watashi wa shikikin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Security deposit.",
          "audioText": "敷金",
          "clozeSentence": "これは敷金 {{BLANK}} す。",
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
          "id": "u13_l1_4",
          "type": "scramble",
          "prompt": "これは敷金です",
          "furigana": "これはしききんです",
          "romaji": "Kore wa shikikin desu.",
          "english": "This is Security deposit.",
          "audioText": "これは敷金です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "敷金",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "敷金",
            "です"
          ],
          "correctAnswer": "これは敷金です"
        },
        {
          "id": "u13_l1_5",
          "type": "speak",
          "prompt": "礼金",
          "furigana": "れいきん",
          "romaji": "reikin",
          "english": "Pronounce: Key money (gratuity)",
          "audioText": "れいきん",
          "targetSpeech": "礼金",
          "options": [
            "Key money (gratuity)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "礼金"
        },
        {
          "id": "u13_l1_6",
          "type": "dictate",
          "prompt": "礼金をお願いします",
          "furigana": "れいきんをおねがいします",
          "romaji": "reikin o onegaishimasu.",
          "english": "Key money (gratuity), please.",
          "audioText": "礼金をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "ありがとう",
            "です",
            "礼金"
          ],
          "dictateSolution": [
            "礼金",
            "を",
            "お願いします"
          ],
          "correctAnswer": "礼金をお願いします"
        },
        {
          "id": "u13_l1_7",
          "type": "match",
          "prompt": "家賃・敷金・礼金・間取り",
          "furigana": "やちん・しききん・れいきん・まどり",
          "romaji": "yachin, shikikin, reikin, madori",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "やちん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "家賃",
              "right": "Monthly rent",
              "furigana": "やちん",
              "romaji": "yachin"
            },
            {
              "id": "p_1",
              "left": "敷金",
              "right": "Security deposit",
              "furigana": "しききん",
              "romaji": "shikikin"
            },
            {
              "id": "p_2",
              "left": "礼金",
              "right": "Key money (gratuity)",
              "furigana": "れいきん",
              "romaji": "reikin"
            },
            {
              "id": "p_3",
              "left": "間取り",
              "right": "Floor plan layout",
              "furigana": "まどり",
              "romaji": "madori"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l1_8",
          "type": "dialogue",
          "prompt": "家賃について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "家賃について教えていただけますか？",
          "furigana": "家賃について教えていただけますか？",
          "romaji": "yachin ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Monthly rent?",
          "audioText": "家賃について教えていただけますか？",
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
      "id": "u13_l2",
      "unitId": "unit_13",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Floor plan layout & Real estate agency",
      "titleJp": "間取り・不動産",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "間取り",
        "不動産",
        "契約"
      ],
      "kanjiKeywords": [
        "間",
        "取",
        "不",
        "動",
        "産",
        "契",
        "約"
      ],
      "items": [
        {
          "id": "u13_l2_1",
          "type": "listen",
          "prompt": "間取り",
          "furigana": "まどり",
          "romaji": "madori",
          "english": "Floor plan layout",
          "audioText": "まどり",
          "options": [
            "Floor plan layout",
            "Confirming Landlord",
            "Confirming Real estate agency",
            "Confirming Contract / lease agreement"
          ],
          "correctAnswer": "Floor plan layout"
        },
        {
          "id": "u13_l2_2",
          "type": "spell",
          "prompt": "間取り",
          "furigana": "まどり",
          "romaji": "madori",
          "english": "Build 'Floor plan layout'",
          "audioText": "まどり",
          "tileBank": [
            "と",
            "ま",
            "ふ",
            "く",
            "ど",
            "り",
            "や",
            "よ"
          ],
          "correctAnswer": "まどり"
        },
        {
          "id": "u13_l2_3",
          "type": "cloze",
          "prompt": "私は不動産がすきです",
          "furigana": "わたしはふどうさんがすきです",
          "romaji": "Watashi wa fudousan ga suki desu.",
          "english": "Fill in the blank with the correct particle for Real estate agency.",
          "audioText": "不動産",
          "clozeSentence": "これは不動産 {{BLANK}} す。",
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
          "id": "u13_l2_4",
          "type": "scramble",
          "prompt": "これは不動産です",
          "furigana": "これはふどうさんです",
          "romaji": "Kore wa fudousan desu.",
          "english": "This is Real estate agency.",
          "audioText": "これは不動産です",
          "scrambleTokens": [
            "不動産",
            "ではありません",
            "それ",
            "です",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "不動産",
            "です"
          ],
          "correctAnswer": "これは不動産です"
        },
        {
          "id": "u13_l2_5",
          "type": "speak",
          "prompt": "契約",
          "furigana": "けいやく",
          "romaji": "keiyaku",
          "english": "Pronounce: Contract / lease agreement",
          "audioText": "けいやく",
          "targetSpeech": "契約",
          "options": [
            "Contract / lease agreement",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "契約"
        },
        {
          "id": "u13_l2_6",
          "type": "dictate",
          "prompt": "契約をお願いします",
          "furigana": "けいやくをおねがいします",
          "romaji": "keiyaku o onegaishimasu.",
          "english": "Contract / lease agreement, please.",
          "audioText": "契約をお願いします",
          "dictateTokens": [
            "契約",
            "お願いします",
            "です",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "契約",
            "を",
            "お願いします"
          ],
          "correctAnswer": "契約をお願いします"
        },
        {
          "id": "u13_l2_7",
          "type": "match",
          "prompt": "間取り・不動産・契約・保証人",
          "furigana": "まどり・ふどうさん・けいやく・ほしょうにん",
          "romaji": "madori, fudousan, keiyaku, hoshounin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "まどり",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "間取り",
              "right": "Floor plan layout",
              "furigana": "まどり",
              "romaji": "madori"
            },
            {
              "id": "p_1",
              "left": "不動産",
              "right": "Real estate agency",
              "furigana": "ふどうさん",
              "romaji": "fudousan"
            },
            {
              "id": "p_2",
              "left": "契約",
              "right": "Contract / lease agreement",
              "furigana": "けいやく",
              "romaji": "keiyaku"
            },
            {
              "id": "p_3",
              "left": "保証人",
              "right": "Guarantor",
              "furigana": "ほしょうにん",
              "romaji": "hoshounin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l2_8",
          "type": "dialogue",
          "prompt": "敷金の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "敷金の準備はできていますか？",
          "furigana": "敷金の準備はできていますか？",
          "romaji": "shikikin no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Security deposit ready?",
          "audioText": "敷金の準備はできていますか？",
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
      "id": "u13_l3",
      "unitId": "unit_13",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Guarantor & Sunlight exposure",
      "titleJp": "保証人・日当たり",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "保証人",
        "日当たり",
        "駅近"
      ],
      "kanjiKeywords": [
        "保",
        "証",
        "人",
        "日",
        "当",
        "駅",
        "近"
      ],
      "items": [
        {
          "id": "u13_l3_1",
          "type": "listen",
          "prompt": "保証人",
          "furigana": "ほしょうにん",
          "romaji": "hoshounin",
          "english": "Guarantor",
          "audioText": "ほしょうにん",
          "options": [
            "Sunlight exposure",
            "Initial upfront costs",
            "Guarantor",
            "Confirming Key money (gratuity)"
          ],
          "correctAnswer": "Guarantor"
        },
        {
          "id": "u13_l3_2",
          "type": "spell",
          "prompt": "保証人",
          "furigana": "ほしょうにん",
          "romaji": "hoshounin",
          "english": "Build 'Guarantor'",
          "audioText": "ほしょうにん",
          "tileBank": [
            "ん",
            "ほ",
            "し",
            "う",
            "に",
            "り",
            "さ",
            "ょ"
          ],
          "correctAnswer": "ほしょうにん"
        },
        {
          "id": "u13_l3_3",
          "type": "cloze",
          "prompt": "私は日当たりがすきです",
          "furigana": "わたしはひあたりがすきです",
          "romaji": "Watashi wa hiatari ga suki desu.",
          "english": "Fill in the blank with the correct particle for Sunlight exposure.",
          "audioText": "日当たり",
          "clozeSentence": "これは日当たり {{BLANK}} す。",
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
          "id": "u13_l3_4",
          "type": "scramble",
          "prompt": "これは日当たりです",
          "furigana": "これはひあたりです",
          "romaji": "Kore wa hiatari desu.",
          "english": "This is Sunlight exposure.",
          "audioText": "これは日当たりです",
          "scrambleTokens": [
            "これは",
            "それ",
            "です",
            "日当たり",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "日当たり",
            "です"
          ],
          "correctAnswer": "これは日当たりです"
        },
        {
          "id": "u13_l3_5",
          "type": "speak",
          "prompt": "駅近",
          "furigana": "えきちか",
          "romaji": "ekichika",
          "english": "Pronounce: Close to train station",
          "audioText": "えきちか",
          "targetSpeech": "駅近",
          "options": [
            "Close to train station",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "駅近"
        },
        {
          "id": "u13_l3_6",
          "type": "dictate",
          "prompt": "駅近をお願いします",
          "furigana": "えきちかをおねがいします",
          "romaji": "ekichika o onegaishimasu.",
          "english": "Close to train station, please.",
          "audioText": "駅近をお願いします",
          "dictateTokens": [
            "駅近",
            "お願いします",
            "です",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "駅近",
            "を",
            "お願いします"
          ],
          "correctAnswer": "駅近をお願いします"
        },
        {
          "id": "u13_l3_7",
          "type": "match",
          "prompt": "保証人・日当たり・駅近・防音",
          "furigana": "ほしょうにん・ひあたり・えきちか・ぼうおん",
          "romaji": "hoshounin, hiatari, ekichika, bouon",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ほしょうにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "保証人",
              "right": "Guarantor",
              "furigana": "ほしょうにん",
              "romaji": "hoshounin"
            },
            {
              "id": "p_1",
              "left": "日当たり",
              "right": "Sunlight exposure",
              "furigana": "ひあたり",
              "romaji": "hiatari"
            },
            {
              "id": "p_2",
              "left": "駅近",
              "right": "Close to train station",
              "furigana": "えきちか",
              "romaji": "ekichika"
            },
            {
              "id": "p_3",
              "left": "防音",
              "right": "Soundproof",
              "furigana": "ぼうおん",
              "romaji": "bouon"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l3_8",
          "type": "dialogue",
          "prompt": "礼金についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "礼金についてどう思われますか？",
          "furigana": "礼金についてどう思われますか？",
          "romaji": "reikin ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Key money (gratuity)?",
          "audioText": "礼金についてどう思われますか？",
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
      "id": "u13_l4",
      "unitId": "unit_13",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Soundproof & Lease renewal fee",
      "titleJp": "防音・更新料",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "防音",
        "更新料",
        "引越し"
      ],
      "kanjiKeywords": [
        "防",
        "音",
        "更",
        "新",
        "料",
        "引",
        "越"
      ],
      "items": [
        {
          "id": "u13_l4_1",
          "type": "listen",
          "prompt": "防音",
          "furigana": "ぼうおん",
          "romaji": "bouon",
          "english": "Soundproof",
          "audioText": "ぼうおん",
          "options": [
            "Soundproof",
            "Confirming Key money (gratuity)",
            "Close to train station",
            "Confirming Real estate agency"
          ],
          "correctAnswer": "Soundproof"
        },
        {
          "id": "u13_l4_2",
          "type": "spell",
          "prompt": "防音",
          "furigana": "ぼうおん",
          "romaji": "bouon",
          "english": "Build 'Soundproof'",
          "audioText": "ぼうおん",
          "tileBank": [
            "お",
            "へ",
            "つ",
            "う",
            "ぼ",
            "ん",
            "ゆ",
            "め"
          ],
          "correctAnswer": "ぼうおん"
        },
        {
          "id": "u13_l4_3",
          "type": "cloze",
          "prompt": "私は更新料がすきです",
          "furigana": "わたしはこうしんりょうがすきです",
          "romaji": "Watashi wa koushinryou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Lease renewal fee.",
          "audioText": "更新料",
          "clozeSentence": "これは更新料 {{BLANK}} す。",
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
          "id": "u13_l4_4",
          "type": "scramble",
          "prompt": "これは更新料です",
          "furigana": "これはこうしんりょうです",
          "romaji": "Kore wa koushinryou desu.",
          "english": "This is Lease renewal fee.",
          "audioText": "これは更新料です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "です",
            "それ",
            "更新料"
          ],
          "scrambleSolution": [
            "これは",
            "更新料",
            "です"
          ],
          "correctAnswer": "これは更新料です"
        },
        {
          "id": "u13_l4_5",
          "type": "speak",
          "prompt": "引越し",
          "furigana": "ひっこし",
          "romaji": "hikkoshi",
          "english": "Pronounce: Moving residence",
          "audioText": "ひっこし",
          "targetSpeech": "引越し",
          "options": [
            "Moving residence",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "引越し"
        },
        {
          "id": "u13_l4_6",
          "type": "dictate",
          "prompt": "引越しをお願いします",
          "furigana": "ひっこしをおねがいします",
          "romaji": "hikkoshi o onegaishimasu.",
          "english": "Moving residence, please.",
          "audioText": "引越しをお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "です",
            "引越し",
            "ありがとう"
          ],
          "dictateSolution": [
            "引越し",
            "を",
            "お願いします"
          ],
          "correctAnswer": "引越しをお願いします"
        },
        {
          "id": "u13_l4_7",
          "type": "match",
          "prompt": "防音・更新料・引越し・大家",
          "furigana": "ぼうおん・こうしんりょう・ひっこし・おおや",
          "romaji": "bouon, koushinryou, hikkoshi, ooya",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ぼうおん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "防音",
              "right": "Soundproof",
              "furigana": "ぼうおん",
              "romaji": "bouon"
            },
            {
              "id": "p_1",
              "left": "更新料",
              "right": "Lease renewal fee",
              "furigana": "こうしんりょう",
              "romaji": "koushinryou"
            },
            {
              "id": "p_2",
              "left": "引越し",
              "right": "Moving residence",
              "furigana": "ひっこし",
              "romaji": "hikkoshi"
            },
            {
              "id": "p_3",
              "left": "大家",
              "right": "Landlord",
              "furigana": "おおや",
              "romaji": "ooya"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l4_8",
          "type": "dialogue",
          "prompt": "次は間取りに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は間取りに進みましょう。",
          "furigana": "次は間取りに進みましょう。",
          "romaji": "Tsugi wa madori ni susumimashou.",
          "english": "Speaker: Let's proceed to Floor plan layout next.",
          "audioText": "次は間取りに進みましょう。",
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
      "id": "u13_l5",
      "unitId": "unit_13",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Landlord & Walking distance",
      "titleJp": "大家・徒歩",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "大家",
        "徒歩",
        "初期費用"
      ],
      "kanjiKeywords": [
        "大",
        "家",
        "徒",
        "歩",
        "初",
        "期",
        "費",
        "用"
      ],
      "items": [
        {
          "id": "u13_l5_1",
          "type": "listen",
          "prompt": "大家",
          "furigana": "おおや",
          "romaji": "ooya",
          "english": "Landlord",
          "audioText": "おおや",
          "options": [
            "Monthly rent",
            "Confirming Initial upfront costs",
            "Landlord",
            "Confirming Floor plan layout"
          ],
          "correctAnswer": "Landlord"
        },
        {
          "id": "u13_l5_2",
          "type": "spell",
          "prompt": "大家",
          "furigana": "おおや",
          "romaji": "ooya",
          "english": "Build 'Landlord'",
          "audioText": "おおや",
          "tileBank": [
            "や",
            "れ",
            "そ",
            "ふ",
            "お",
            "と",
            "か",
            "お"
          ],
          "correctAnswer": "おおや"
        },
        {
          "id": "u13_l5_3",
          "type": "cloze",
          "prompt": "私は徒歩がすきです",
          "furigana": "わたしはとほがすきです",
          "romaji": "Watashi wa toho ga suki desu.",
          "english": "Fill in the blank with the correct particle for Walking distance.",
          "audioText": "徒歩",
          "clozeSentence": "これは徒歩 {{BLANK}} す。",
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
          "id": "u13_l5_4",
          "type": "scramble",
          "prompt": "これは徒歩です",
          "furigana": "これはとほです",
          "romaji": "Kore wa toho desu.",
          "english": "This is Walking distance.",
          "audioText": "これは徒歩です",
          "scrambleTokens": [
            "ではありません",
            "徒歩",
            "これは",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "徒歩",
            "です"
          ],
          "correctAnswer": "これは徒歩です"
        },
        {
          "id": "u13_l5_5",
          "type": "speak",
          "prompt": "初期費用",
          "furigana": "しょきひよう",
          "romaji": "shoki hiyou",
          "english": "Pronounce: Initial upfront costs",
          "audioText": "しょきひよう",
          "targetSpeech": "初期費用",
          "options": [
            "Initial upfront costs",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "初期費用"
        },
        {
          "id": "u13_l5_6",
          "type": "dictate",
          "prompt": "初期費用をお願いします",
          "furigana": "しょきひようをおねがいします",
          "romaji": "shoki hiyou o onegaishimasu.",
          "english": "Initial upfront costs, please.",
          "audioText": "初期費用をお願いします",
          "dictateTokens": [
            "を",
            "初期費用",
            "ありがとう",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "初期費用",
            "を",
            "お願いします"
          ],
          "correctAnswer": "初期費用をお願いします"
        },
        {
          "id": "u13_l5_7",
          "type": "match",
          "prompt": "大家・徒歩・初期費用・家賃の確認",
          "furigana": "おおや・とほ・しょきひよう・やちんのかくにん",
          "romaji": "ooya, toho, shoki hiyou, yachin no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おおや",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "大家",
              "right": "Landlord",
              "furigana": "おおや",
              "romaji": "ooya"
            },
            {
              "id": "p_1",
              "left": "徒歩",
              "right": "Walking distance",
              "furigana": "とほ",
              "romaji": "toho"
            },
            {
              "id": "p_2",
              "left": "初期費用",
              "right": "Initial upfront costs",
              "furigana": "しょきひよう",
              "romaji": "shoki hiyou"
            },
            {
              "id": "p_3",
              "left": "家賃の確認",
              "right": "Confirming Monthly rent",
              "furigana": "やちんのかくにん",
              "romaji": "yachin no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l5_8",
          "type": "dialogue",
          "prompt": "家賃について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "家賃について教えていただけますか？",
          "furigana": "家賃について教えていただけますか？",
          "romaji": "yachin ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Monthly rent?",
          "audioText": "家賃について教えていただけますか？",
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
      "id": "u13_l6",
      "unitId": "unit_13",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Monthly rent & Confirming Security deposit",
      "titleJp": "家賃の確認・敷金の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "家賃の確認",
        "敷金の確認",
        "礼金の確認"
      ],
      "kanjiKeywords": [
        "家",
        "賃",
        "確",
        "認",
        "敷",
        "金",
        "確",
        "認",
        "礼",
        "金",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u13_l6_1",
          "type": "listen",
          "prompt": "家賃の確認",
          "furigana": "やちんのかくにん",
          "romaji": "yachin no kakunin",
          "english": "Confirming Monthly rent",
          "audioText": "やちんのかくにん",
          "options": [
            "Confirming Monthly rent",
            "Confirming Security deposit",
            "Soundproof",
            "Confirming Guarantor"
          ],
          "correctAnswer": "Confirming Monthly rent"
        },
        {
          "id": "u13_l6_2",
          "type": "spell",
          "prompt": "家賃の確認",
          "furigana": "やちんのかくにん",
          "romaji": "yachin no kakunin",
          "english": "Build 'Confirming Monthly rent'",
          "audioText": "やちんのかくにん",
          "tileBank": [
            "に",
            "ん",
            "や",
            "の",
            "ん",
            "か",
            "く",
            "ち"
          ],
          "correctAnswer": "やちんのかくにん"
        },
        {
          "id": "u13_l6_3",
          "type": "cloze",
          "prompt": "私は敷金の確認がすきです",
          "furigana": "わたしはしききんのかくにんがすきです",
          "romaji": "Watashi wa shikikin no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Security deposit.",
          "audioText": "敷金の確認",
          "clozeSentence": "これは敷金の確認 {{BLANK}} す。",
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
          "id": "u13_l6_4",
          "type": "scramble",
          "prompt": "これは敷金の確認です",
          "furigana": "これはしききんのかくにんです",
          "romaji": "Kore wa shikikin no kakunin desu.",
          "english": "This is Confirming Security deposit.",
          "audioText": "これは敷金の確認です",
          "scrambleTokens": [
            "それ",
            "です",
            "敷金の確認",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "敷金の確認",
            "です"
          ],
          "correctAnswer": "これは敷金の確認です"
        },
        {
          "id": "u13_l6_5",
          "type": "speak",
          "prompt": "礼金の確認",
          "furigana": "れいきんのかくにん",
          "romaji": "reikin no kakunin",
          "english": "Pronounce: Confirming Key money (gratuity)",
          "audioText": "れいきんのかくにん",
          "targetSpeech": "礼金の確認",
          "options": [
            "Confirming Key money (gratuity)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "礼金の確認"
        },
        {
          "id": "u13_l6_6",
          "type": "dictate",
          "prompt": "礼金の確認をお願いします",
          "furigana": "れいきんのかくにんをおねがいします",
          "romaji": "reikin no kakunin o onegaishimasu.",
          "english": "Confirming Key money (gratuity), please.",
          "audioText": "礼金の確認をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "を",
            "お願いします",
            "礼金の確認"
          ],
          "dictateSolution": [
            "礼金の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "礼金の確認をお願いします"
        },
        {
          "id": "u13_l6_7",
          "type": "match",
          "prompt": "家賃の確認・敷金の確認・礼金の確認・間取りの確認",
          "furigana": "やちんのかくにん・しききんのかくにん・れいきんのかくにん・まどりのかくにん",
          "romaji": "yachin no kakunin, shikikin no kakunin, reikin no kakunin, madori no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "やちんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "家賃の確認",
              "right": "Confirming Monthly rent",
              "furigana": "やちんのかくにん",
              "romaji": "yachin no kakunin"
            },
            {
              "id": "p_1",
              "left": "敷金の確認",
              "right": "Confirming Security deposit",
              "furigana": "しききんのかくにん",
              "romaji": "shikikin no kakunin"
            },
            {
              "id": "p_2",
              "left": "礼金の確認",
              "right": "Confirming Key money (gratuity)",
              "furigana": "れいきんのかくにん",
              "romaji": "reikin no kakunin"
            },
            {
              "id": "p_3",
              "left": "間取りの確認",
              "right": "Confirming Floor plan layout",
              "furigana": "まどりのかくにん",
              "romaji": "madori no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l6_8",
          "type": "dialogue",
          "prompt": "敷金の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "敷金の準備はできていますか？",
          "furigana": "敷金の準備はできていますか？",
          "romaji": "shikikin no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Security deposit ready?",
          "audioText": "敷金の準備はできていますか？",
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
      "id": "u13_l7",
      "unitId": "unit_13",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Floor plan layout & Confirming Real estate agency",
      "titleJp": "間取りの確認・不動産の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "間取りの確認",
        "不動産の確認",
        "契約の確認"
      ],
      "kanjiKeywords": [
        "間",
        "取",
        "確",
        "認",
        "不",
        "動",
        "産",
        "確",
        "認",
        "契",
        "約",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u13_l7_1",
          "type": "listen",
          "prompt": "間取りの確認",
          "furigana": "まどりのかくにん",
          "romaji": "madori no kakunin",
          "english": "Confirming Floor plan layout",
          "audioText": "まどりのかくにん",
          "options": [
            "Confirming Contract / lease agreement",
            "Confirming Soundproof",
            "Walking distance",
            "Confirming Floor plan layout"
          ],
          "correctAnswer": "Confirming Floor plan layout"
        },
        {
          "id": "u13_l7_2",
          "type": "spell",
          "prompt": "間取りの確認",
          "furigana": "まどりのかくにん",
          "romaji": "madori no kakunin",
          "english": "Build 'Confirming Floor plan layout'",
          "audioText": "まどりのかくにん",
          "tileBank": [
            "ど",
            "か",
            "の",
            "に",
            "り",
            "ん",
            "ま",
            "く"
          ],
          "correctAnswer": "まどりのかくにん"
        },
        {
          "id": "u13_l7_3",
          "type": "cloze",
          "prompt": "私は不動産の確認がすきです",
          "furigana": "わたしはふどうさんのかくにんがすきです",
          "romaji": "Watashi wa fudousan no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Real estate agency.",
          "audioText": "不動産の確認",
          "clozeSentence": "これは不動産の確認 {{BLANK}} す。",
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
          "id": "u13_l7_4",
          "type": "scramble",
          "prompt": "これは不動産の確認です",
          "furigana": "これはふどうさんのかくにんです",
          "romaji": "Kore wa fudousan no kakunin desu.",
          "english": "This is Confirming Real estate agency.",
          "audioText": "これは不動産の確認です",
          "scrambleTokens": [
            "不動産の確認",
            "です",
            "それ",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "不動産の確認",
            "です"
          ],
          "correctAnswer": "これは不動産の確認です"
        },
        {
          "id": "u13_l7_5",
          "type": "speak",
          "prompt": "契約の確認",
          "furigana": "けいやくのかくにん",
          "romaji": "keiyaku no kakunin",
          "english": "Pronounce: Confirming Contract / lease agreement",
          "audioText": "けいやくのかくにん",
          "targetSpeech": "契約の確認",
          "options": [
            "Confirming Contract / lease agreement",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "契約の確認"
        },
        {
          "id": "u13_l7_6",
          "type": "dictate",
          "prompt": "契約の確認をお願いします",
          "furigana": "けいやくのかくにんをおねがいします",
          "romaji": "keiyaku no kakunin o onegaishimasu.",
          "english": "Confirming Contract / lease agreement, please.",
          "audioText": "契約の確認をお願いします",
          "dictateTokens": [
            "契約の確認",
            "お願いします",
            "です",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "契約の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "契約の確認をお願いします"
        },
        {
          "id": "u13_l7_7",
          "type": "match",
          "prompt": "間取りの確認・不動産の確認・契約の確認・保証人の確認",
          "furigana": "まどりのかくにん・ふどうさんのかくにん・けいやくのかくにん・ほしょうにんのかくにん",
          "romaji": "madori no kakunin, fudousan no kakunin, keiyaku no kakunin, hoshounin no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "まどりのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "間取りの確認",
              "right": "Confirming Floor plan layout",
              "furigana": "まどりのかくにん",
              "romaji": "madori no kakunin"
            },
            {
              "id": "p_1",
              "left": "不動産の確認",
              "right": "Confirming Real estate agency",
              "furigana": "ふどうさんのかくにん",
              "romaji": "fudousan no kakunin"
            },
            {
              "id": "p_2",
              "left": "契約の確認",
              "right": "Confirming Contract / lease agreement",
              "furigana": "けいやくのかくにん",
              "romaji": "keiyaku no kakunin"
            },
            {
              "id": "p_3",
              "left": "保証人の確認",
              "right": "Confirming Guarantor",
              "furigana": "ほしょうにんのかくにん",
              "romaji": "hoshounin no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l7_8",
          "type": "dialogue",
          "prompt": "礼金についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "礼金についてどう思われますか？",
          "furigana": "礼金についてどう思われますか？",
          "romaji": "reikin ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Key money (gratuity)?",
          "audioText": "礼金についてどう思われますか？",
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
      "id": "u13_l8",
      "unitId": "unit_13",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Guarantor & Confirming Sunlight exposure",
      "titleJp": "保証人の確認・日当たりの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "保証人の確認",
        "日当たりの確認",
        "駅近の確認"
      ],
      "kanjiKeywords": [
        "保",
        "証",
        "人",
        "確",
        "認",
        "日",
        "当",
        "確",
        "認",
        "駅",
        "近",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u13_l8_1",
          "type": "listen",
          "prompt": "保証人の確認",
          "furigana": "ほしょうにんのかくにん",
          "romaji": "hoshounin no kakunin",
          "english": "Confirming Guarantor",
          "audioText": "ほしょうにんのかくにん",
          "options": [
            "Guarantor",
            "Soundproof",
            "Confirming Guarantor",
            "Floor plan layout"
          ],
          "correctAnswer": "Confirming Guarantor"
        },
        {
          "id": "u13_l8_2",
          "type": "spell",
          "prompt": "保証人の確認",
          "furigana": "ほしょうにんのかくにん",
          "romaji": "hoshounin no kakunin",
          "english": "Build 'Confirming Guarantor'",
          "audioText": "ほしょうにんのかくにん",
          "tileBank": [
            "の",
            "に",
            "し",
            "ん",
            "う",
            "ほ",
            "ょ",
            "か"
          ],
          "correctAnswer": "ほしょうにんのかくにん"
        },
        {
          "id": "u13_l8_3",
          "type": "cloze",
          "prompt": "私は日当たりの確認がすきです",
          "furigana": "わたしはひあたりのかくにんがすきです",
          "romaji": "Watashi wa hiatari no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Sunlight exposure.",
          "audioText": "日当たりの確認",
          "clozeSentence": "これは日当たりの確認 {{BLANK}} す。",
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
          "id": "u13_l8_4",
          "type": "scramble",
          "prompt": "これは日当たりの確認です",
          "furigana": "これはひあたりのかくにんです",
          "romaji": "Kore wa hiatari no kakunin desu.",
          "english": "This is Confirming Sunlight exposure.",
          "audioText": "これは日当たりの確認です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "日当たりの確認",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "日当たりの確認",
            "です"
          ],
          "correctAnswer": "これは日当たりの確認です"
        },
        {
          "id": "u13_l8_5",
          "type": "speak",
          "prompt": "駅近の確認",
          "furigana": "えきちかのかくにん",
          "romaji": "ekichika no kakunin",
          "english": "Pronounce: Confirming Close to train station",
          "audioText": "えきちかのかくにん",
          "targetSpeech": "駅近の確認",
          "options": [
            "Confirming Close to train station",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "駅近の確認"
        },
        {
          "id": "u13_l8_6",
          "type": "dictate",
          "prompt": "駅近の確認をお願いします",
          "furigana": "えきちかのかくにんをおねがいします",
          "romaji": "ekichika no kakunin o onegaishimasu.",
          "english": "Confirming Close to train station, please.",
          "audioText": "駅近の確認をお願いします",
          "dictateTokens": [
            "です",
            "駅近の確認",
            "お願いします",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "駅近の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "駅近の確認をお願いします"
        },
        {
          "id": "u13_l8_7",
          "type": "match",
          "prompt": "保証人の確認・日当たりの確認・駅近の確認・防音の確認",
          "furigana": "ほしょうにんのかくにん・ひあたりのかくにん・えきちかのかくにん・ぼうおんのかくにん",
          "romaji": "hoshounin no kakunin, hiatari no kakunin, ekichika no kakunin, bouon no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ほしょうにんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "保証人の確認",
              "right": "Confirming Guarantor",
              "furigana": "ほしょうにんのかくにん",
              "romaji": "hoshounin no kakunin"
            },
            {
              "id": "p_1",
              "left": "日当たりの確認",
              "right": "Confirming Sunlight exposure",
              "furigana": "ひあたりのかくにん",
              "romaji": "hiatari no kakunin"
            },
            {
              "id": "p_2",
              "left": "駅近の確認",
              "right": "Confirming Close to train station",
              "furigana": "えきちかのかくにん",
              "romaji": "ekichika no kakunin"
            },
            {
              "id": "p_3",
              "left": "防音の確認",
              "right": "Confirming Soundproof",
              "furigana": "ぼうおんのかくにん",
              "romaji": "bouon no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l8_8",
          "type": "dialogue",
          "prompt": "次は間取りに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は間取りに進みましょう。",
          "furigana": "次は間取りに進みましょう。",
          "romaji": "Tsugi wa madori ni susumimashou.",
          "english": "Speaker: Let's proceed to Floor plan layout next.",
          "audioText": "次は間取りに進みましょう。",
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
      "id": "u13_l9",
      "unitId": "unit_13",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Soundproof & Confirming Lease renewal fee",
      "titleJp": "防音の確認・更新料の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "防音の確認",
        "更新料の確認",
        "引越しの確認"
      ],
      "kanjiKeywords": [
        "防",
        "音",
        "確",
        "認",
        "更",
        "新",
        "料",
        "確",
        "認",
        "引",
        "越",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u13_l9_1",
          "type": "listen",
          "prompt": "防音の確認",
          "furigana": "ぼうおんのかくにん",
          "romaji": "bouon no kakunin",
          "english": "Confirming Soundproof",
          "audioText": "ぼうおんのかくにん",
          "options": [
            "Confirming Lease renewal fee",
            "Confirming Monthly rent",
            "Floor plan layout",
            "Confirming Soundproof"
          ],
          "correctAnswer": "Confirming Soundproof"
        },
        {
          "id": "u13_l9_2",
          "type": "spell",
          "prompt": "防音の確認",
          "furigana": "ぼうおんのかくにん",
          "romaji": "bouon no kakunin",
          "english": "Build 'Confirming Soundproof'",
          "audioText": "ぼうおんのかくにん",
          "tileBank": [
            "お",
            "う",
            "の",
            "か",
            "に",
            "く",
            "ぼ",
            "ん"
          ],
          "correctAnswer": "ぼうおんのかくにん"
        },
        {
          "id": "u13_l9_3",
          "type": "cloze",
          "prompt": "私は更新料の確認がすきです",
          "furigana": "わたしはこうしんりょうのかくにんがすきです",
          "romaji": "Watashi wa koushinryou no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Lease renewal fee.",
          "audioText": "更新料の確認",
          "clozeSentence": "これは更新料の確認 {{BLANK}} す。",
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
          "id": "u13_l9_4",
          "type": "scramble",
          "prompt": "これは更新料の確認です",
          "furigana": "これはこうしんりょうのかくにんです",
          "romaji": "Kore wa koushinryou no kakunin desu.",
          "english": "This is Confirming Lease renewal fee.",
          "audioText": "これは更新料の確認です",
          "scrambleTokens": [
            "それ",
            "更新料の確認",
            "ではありません",
            "です",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "更新料の確認",
            "です"
          ],
          "correctAnswer": "これは更新料の確認です"
        },
        {
          "id": "u13_l9_5",
          "type": "speak",
          "prompt": "引越しの確認",
          "furigana": "ひっこしのかくにん",
          "romaji": "hikkoshi no kakunin",
          "english": "Pronounce: Confirming Moving residence",
          "audioText": "ひっこしのかくにん",
          "targetSpeech": "引越しの確認",
          "options": [
            "Confirming Moving residence",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "引越しの確認"
        },
        {
          "id": "u13_l9_6",
          "type": "dictate",
          "prompt": "引越しの確認をお願いします",
          "furigana": "ひっこしのかくにんをおねがいします",
          "romaji": "hikkoshi no kakunin o onegaishimasu.",
          "english": "Confirming Moving residence, please.",
          "audioText": "引越しの確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "を",
            "引越しの確認",
            "お願いします"
          ],
          "dictateSolution": [
            "引越しの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "引越しの確認をお願いします"
        },
        {
          "id": "u13_l9_7",
          "type": "match",
          "prompt": "防音の確認・更新料の確認・引越しの確認・大家の確認",
          "furigana": "ぼうおんのかくにん・こうしんりょうのかくにん・ひっこしのかくにん・おおやのかくにん",
          "romaji": "bouon no kakunin, koushinryou no kakunin, hikkoshi no kakunin, ooya no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ぼうおんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "防音の確認",
              "right": "Confirming Soundproof",
              "furigana": "ぼうおんのかくにん",
              "romaji": "bouon no kakunin"
            },
            {
              "id": "p_1",
              "left": "更新料の確認",
              "right": "Confirming Lease renewal fee",
              "furigana": "こうしんりょうのかくにん",
              "romaji": "koushinryou no kakunin"
            },
            {
              "id": "p_2",
              "left": "引越しの確認",
              "right": "Confirming Moving residence",
              "furigana": "ひっこしのかくにん",
              "romaji": "hikkoshi no kakunin"
            },
            {
              "id": "p_3",
              "left": "大家の確認",
              "right": "Confirming Landlord",
              "furigana": "おおやのかくにん",
              "romaji": "ooya no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l9_8",
          "type": "dialogue",
          "prompt": "家賃について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "家賃について教えていただけますか？",
          "furigana": "家賃について教えていただけますか？",
          "romaji": "yachin ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Monthly rent?",
          "audioText": "家賃について教えていただけますか？",
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
      "id": "u13_l10",
      "unitId": "unit_13",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Landlord & Confirming Walking distance",
      "titleJp": "大家の確認・徒歩の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "大家の確認",
        "徒歩の確認",
        "初期費用の確認"
      ],
      "kanjiKeywords": [
        "大",
        "家",
        "確",
        "認",
        "徒",
        "歩",
        "確",
        "認",
        "初",
        "期",
        "費",
        "用",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u13_l10_1",
          "type": "listen",
          "prompt": "大家の確認",
          "furigana": "おおやのかくにん",
          "romaji": "ooya no kakunin",
          "english": "Confirming Landlord",
          "audioText": "おおやのかくにん",
          "options": [
            "Initial upfront costs",
            "Confirming Security deposit",
            "Confirming Landlord",
            "Confirming Real estate agency"
          ],
          "correctAnswer": "Confirming Landlord"
        },
        {
          "id": "u13_l10_2",
          "type": "spell",
          "prompt": "大家の確認",
          "furigana": "おおやのかくにん",
          "romaji": "ooya no kakunin",
          "english": "Build 'Confirming Landlord'",
          "audioText": "おおやのかくにん",
          "tileBank": [
            "か",
            "く",
            "に",
            "の",
            "ん",
            "お",
            "や",
            "お"
          ],
          "correctAnswer": "おおやのかくにん"
        },
        {
          "id": "u13_l10_3",
          "type": "cloze",
          "prompt": "私は徒歩の確認がすきです",
          "furigana": "わたしはとほのかくにんがすきです",
          "romaji": "Watashi wa toho no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Walking distance.",
          "audioText": "徒歩の確認",
          "clozeSentence": "これは徒歩の確認 {{BLANK}} す。",
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
          "id": "u13_l10_4",
          "type": "scramble",
          "prompt": "これは徒歩の確認です",
          "furigana": "これはとほのかくにんです",
          "romaji": "Kore wa toho no kakunin desu.",
          "english": "This is Confirming Walking distance.",
          "audioText": "これは徒歩の確認です",
          "scrambleTokens": [
            "それ",
            "です",
            "徒歩の確認",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "徒歩の確認",
            "です"
          ],
          "correctAnswer": "これは徒歩の確認です"
        },
        {
          "id": "u13_l10_5",
          "type": "speak",
          "prompt": "初期費用の確認",
          "furigana": "しょきひようのかくにん",
          "romaji": "shoki hiyou no kakunin",
          "english": "Pronounce: Confirming Initial upfront costs",
          "audioText": "しょきひようのかくにん",
          "targetSpeech": "初期費用の確認",
          "options": [
            "Confirming Initial upfront costs",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "初期費用の確認"
        },
        {
          "id": "u13_l10_6",
          "type": "dictate",
          "prompt": "初期費用の確認をお願いします",
          "furigana": "しょきひようのかくにんをおねがいします",
          "romaji": "shoki hiyou no kakunin o onegaishimasu.",
          "english": "Confirming Initial upfront costs, please.",
          "audioText": "初期費用の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "です",
            "初期費用の確認",
            "お願いします"
          ],
          "dictateSolution": [
            "初期費用の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "初期費用の確認をお願いします"
        },
        {
          "id": "u13_l10_7",
          "type": "match",
          "prompt": "大家の確認・徒歩の確認・初期費用の確認・家賃の確認",
          "furigana": "おおやのかくにん・とほのかくにん・しょきひようのかくにん・やちんのかくにん",
          "romaji": "ooya no kakunin, toho no kakunin, shoki hiyou no kakunin, yachin no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おおやのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "大家の確認",
              "right": "Confirming Landlord",
              "furigana": "おおやのかくにん",
              "romaji": "ooya no kakunin"
            },
            {
              "id": "p_1",
              "left": "徒歩の確認",
              "right": "Confirming Walking distance",
              "furigana": "とほのかくにん",
              "romaji": "toho no kakunin"
            },
            {
              "id": "p_2",
              "left": "初期費用の確認",
              "right": "Confirming Initial upfront costs",
              "furigana": "しょきひようのかくにん",
              "romaji": "shoki hiyou no kakunin"
            },
            {
              "id": "p_3",
              "left": "家賃の確認",
              "right": "Confirming Monthly rent",
              "furigana": "やちんのかくにん",
              "romaji": "yachin no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l10_8",
          "type": "dialogue",
          "prompt": "敷金の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "敷金の準備はできていますか？",
          "furigana": "敷金の準備はできていますか？",
          "romaji": "shikikin no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Security deposit ready?",
          "audioText": "敷金の準備はできていますか？",
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
      "id": "u13_l11",
      "unitId": "unit_13",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Monthly rent & Confirming Security deposit",
      "titleJp": "家賃の確認・敷金の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "家賃の確認",
        "敷金の確認",
        "礼金の確認"
      ],
      "kanjiKeywords": [
        "家",
        "賃",
        "確",
        "認",
        "敷",
        "金",
        "確",
        "認",
        "礼",
        "金",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u13_l11_1",
          "type": "listen",
          "prompt": "家賃の確認",
          "furigana": "やちんのかくにん",
          "romaji": "yachin no kakunin",
          "english": "Confirming Monthly rent",
          "audioText": "やちんのかくにん",
          "options": [
            "Confirming Security deposit",
            "Monthly rent",
            "Confirming Monthly rent",
            "Soundproof"
          ],
          "correctAnswer": "Confirming Monthly rent"
        },
        {
          "id": "u13_l11_2",
          "type": "spell",
          "prompt": "家賃の確認",
          "furigana": "やちんのかくにん",
          "romaji": "yachin no kakunin",
          "english": "Build 'Confirming Monthly rent'",
          "audioText": "やちんのかくにん",
          "tileBank": [
            "に",
            "ん",
            "の",
            "く",
            "ん",
            "か",
            "ち",
            "や"
          ],
          "correctAnswer": "やちんのかくにん"
        },
        {
          "id": "u13_l11_3",
          "type": "cloze",
          "prompt": "私は敷金の確認がすきです",
          "furigana": "わたしはしききんのかくにんがすきです",
          "romaji": "Watashi wa shikikin no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Security deposit.",
          "audioText": "敷金の確認",
          "clozeSentence": "これは敷金の確認 {{BLANK}} す。",
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
          "id": "u13_l11_4",
          "type": "scramble",
          "prompt": "これは敷金の確認です",
          "furigana": "これはしききんのかくにんです",
          "romaji": "Kore wa shikikin no kakunin desu.",
          "english": "This is Confirming Security deposit.",
          "audioText": "これは敷金の確認です",
          "scrambleTokens": [
            "それ",
            "です",
            "敷金の確認",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "敷金の確認",
            "です"
          ],
          "correctAnswer": "これは敷金の確認です"
        },
        {
          "id": "u13_l11_5",
          "type": "speak",
          "prompt": "礼金の確認",
          "furigana": "れいきんのかくにん",
          "romaji": "reikin no kakunin",
          "english": "Pronounce: Confirming Key money (gratuity)",
          "audioText": "れいきんのかくにん",
          "targetSpeech": "礼金の確認",
          "options": [
            "Confirming Key money (gratuity)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "礼金の確認"
        },
        {
          "id": "u13_l11_6",
          "type": "dictate",
          "prompt": "礼金の確認をお願いします",
          "furigana": "れいきんのかくにんをおねがいします",
          "romaji": "reikin no kakunin o onegaishimasu.",
          "english": "Confirming Key money (gratuity), please.",
          "audioText": "礼金の確認をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "を",
            "お願いします",
            "礼金の確認"
          ],
          "dictateSolution": [
            "礼金の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "礼金の確認をお願いします"
        },
        {
          "id": "u13_l11_7",
          "type": "match",
          "prompt": "家賃の確認・敷金の確認・礼金の確認・間取りの確認",
          "furigana": "やちんのかくにん・しききんのかくにん・れいきんのかくにん・まどりのかくにん",
          "romaji": "yachin no kakunin, shikikin no kakunin, reikin no kakunin, madori no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "やちんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "家賃の確認",
              "right": "Confirming Monthly rent",
              "furigana": "やちんのかくにん",
              "romaji": "yachin no kakunin"
            },
            {
              "id": "p_1",
              "left": "敷金の確認",
              "right": "Confirming Security deposit",
              "furigana": "しききんのかくにん",
              "romaji": "shikikin no kakunin"
            },
            {
              "id": "p_2",
              "left": "礼金の確認",
              "right": "Confirming Key money (gratuity)",
              "furigana": "れいきんのかくにん",
              "romaji": "reikin no kakunin"
            },
            {
              "id": "p_3",
              "left": "間取りの確認",
              "right": "Confirming Floor plan layout",
              "furigana": "まどりのかくにん",
              "romaji": "madori no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l11_8",
          "type": "dialogue",
          "prompt": "礼金についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "礼金についてどう思われますか？",
          "furigana": "礼金についてどう思われますか？",
          "romaji": "reikin ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Key money (gratuity)?",
          "audioText": "礼金についてどう思われますか？",
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
      "id": "u13_l12",
      "unitId": "unit_13",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Floor plan layout & Confirming Real estate agency",
      "titleJp": "間取りの確認・不動産の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "間取りの確認",
        "不動産の確認",
        "契約の確認"
      ],
      "kanjiKeywords": [
        "間",
        "取",
        "確",
        "認",
        "不",
        "動",
        "産",
        "確",
        "認",
        "契",
        "約",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u13_l12_1",
          "type": "listen",
          "prompt": "間取りの確認",
          "furigana": "まどりのかくにん",
          "romaji": "madori no kakunin",
          "english": "Confirming Floor plan layout",
          "audioText": "まどりのかくにん",
          "options": [
            "Confirming Floor plan layout",
            "Confirming Sunlight exposure",
            "Confirming Security deposit",
            "Confirming Moving residence"
          ],
          "correctAnswer": "Confirming Floor plan layout"
        },
        {
          "id": "u13_l12_2",
          "type": "spell",
          "prompt": "間取りの確認",
          "furigana": "まどりのかくにん",
          "romaji": "madori no kakunin",
          "english": "Build 'Confirming Floor plan layout'",
          "audioText": "まどりのかくにん",
          "tileBank": [
            "か",
            "の",
            "く",
            "ま",
            "ん",
            "に",
            "ど",
            "り"
          ],
          "correctAnswer": "まどりのかくにん"
        },
        {
          "id": "u13_l12_3",
          "type": "cloze",
          "prompt": "私は不動産の確認がすきです",
          "furigana": "わたしはふどうさんのかくにんがすきです",
          "romaji": "Watashi wa fudousan no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Real estate agency.",
          "audioText": "不動産の確認",
          "clozeSentence": "これは不動産の確認 {{BLANK}} す。",
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
          "id": "u13_l12_4",
          "type": "scramble",
          "prompt": "これは不動産の確認です",
          "furigana": "これはふどうさんのかくにんです",
          "romaji": "Kore wa fudousan no kakunin desu.",
          "english": "This is Confirming Real estate agency.",
          "audioText": "これは不動産の確認です",
          "scrambleTokens": [
            "です",
            "不動産の確認",
            "これは",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "不動産の確認",
            "です"
          ],
          "correctAnswer": "これは不動産の確認です"
        },
        {
          "id": "u13_l12_5",
          "type": "speak",
          "prompt": "契約の確認",
          "furigana": "けいやくのかくにん",
          "romaji": "keiyaku no kakunin",
          "english": "Pronounce: Confirming Contract / lease agreement",
          "audioText": "けいやくのかくにん",
          "targetSpeech": "契約の確認",
          "options": [
            "Confirming Contract / lease agreement",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "契約の確認"
        },
        {
          "id": "u13_l12_6",
          "type": "dictate",
          "prompt": "契約の確認をお願いします",
          "furigana": "けいやくのかくにんをおねがいします",
          "romaji": "keiyaku no kakunin o onegaishimasu.",
          "english": "Confirming Contract / lease agreement, please.",
          "audioText": "契約の確認をお願いします",
          "dictateTokens": [
            "を",
            "契約の確認",
            "です",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "契約の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "契約の確認をお願いします"
        },
        {
          "id": "u13_l12_7",
          "type": "match",
          "prompt": "間取りの確認・不動産の確認・契約の確認・家賃",
          "furigana": "まどりのかくにん・ふどうさんのかくにん・けいやくのかくにん・やちん",
          "romaji": "madori no kakunin, fudousan no kakunin, keiyaku no kakunin, yachin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "まどりのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "間取りの確認",
              "right": "Confirming Floor plan layout",
              "furigana": "まどりのかくにん",
              "romaji": "madori no kakunin"
            },
            {
              "id": "p_1",
              "left": "不動産の確認",
              "right": "Confirming Real estate agency",
              "furigana": "ふどうさんのかくにん",
              "romaji": "fudousan no kakunin"
            },
            {
              "id": "p_2",
              "left": "契約の確認",
              "right": "Confirming Contract / lease agreement",
              "furigana": "けいやくのかくにん",
              "romaji": "keiyaku no kakunin"
            },
            {
              "id": "p_3",
              "left": "家賃",
              "right": "Monthly rent",
              "furigana": "やちん",
              "romaji": "yachin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l12_8",
          "type": "dialogue",
          "prompt": "次は間取りに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は間取りに進みましょう。",
          "furigana": "次は間取りに進みましょう。",
          "romaji": "Tsugi wa madori ni susumimashou.",
          "english": "Speaker: Let's proceed to Floor plan layout next.",
          "audioText": "次は間取りに進みましょう。",
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
      "id": "u13_l13",
      "unitId": "unit_13",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Monthly rent & Security deposit",
      "titleJp": "家賃・敷金",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "家賃",
        "敷金",
        "礼金"
      ],
      "kanjiKeywords": [
        "家",
        "賃",
        "敷",
        "金",
        "礼",
        "金"
      ],
      "items": [
        {
          "id": "u13_l13_1",
          "type": "listen",
          "prompt": "家賃",
          "furigana": "やちん",
          "romaji": "yachin",
          "english": "Monthly rent",
          "audioText": "やちん",
          "options": [
            "Monthly rent",
            "Moving residence",
            "Security deposit",
            "Landlord"
          ],
          "correctAnswer": "Monthly rent"
        },
        {
          "id": "u13_l13_2",
          "type": "spell",
          "prompt": "家賃",
          "furigana": "やちん",
          "romaji": "yachin",
          "english": "Build 'Monthly rent'",
          "audioText": "やちん",
          "tileBank": [
            "と",
            "ん",
            "や",
            "き",
            "そ",
            "せ",
            "の",
            "ち"
          ],
          "correctAnswer": "やちん"
        },
        {
          "id": "u13_l13_3",
          "type": "cloze",
          "prompt": "私は敷金がすきです",
          "furigana": "わたしはしききんがすきです",
          "romaji": "Watashi wa shikikin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Security deposit.",
          "audioText": "敷金",
          "clozeSentence": "これは敷金 {{BLANK}} す。",
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
          "id": "u13_l13_4",
          "type": "scramble",
          "prompt": "これは敷金です",
          "furigana": "これはしききんです",
          "romaji": "Kore wa shikikin desu.",
          "english": "This is Security deposit.",
          "audioText": "これは敷金です",
          "scrambleTokens": [
            "これは",
            "敷金",
            "ではありません",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "敷金",
            "です"
          ],
          "correctAnswer": "これは敷金です"
        },
        {
          "id": "u13_l13_5",
          "type": "speak",
          "prompt": "礼金",
          "furigana": "れいきん",
          "romaji": "reikin",
          "english": "Pronounce: Key money (gratuity)",
          "audioText": "れいきん",
          "targetSpeech": "礼金",
          "options": [
            "Key money (gratuity)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "礼金"
        },
        {
          "id": "u13_l13_6",
          "type": "dictate",
          "prompt": "礼金をお願いします",
          "furigana": "れいきんをおねがいします",
          "romaji": "reikin o onegaishimasu.",
          "english": "Key money (gratuity), please.",
          "audioText": "礼金をお願いします",
          "dictateTokens": [
            "礼金",
            "を",
            "お願いします",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "礼金",
            "を",
            "お願いします"
          ],
          "correctAnswer": "礼金をお願いします"
        },
        {
          "id": "u13_l13_7",
          "type": "match",
          "prompt": "家賃・敷金・礼金・間取り",
          "furigana": "やちん・しききん・れいきん・まどり",
          "romaji": "yachin, shikikin, reikin, madori",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "やちん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "家賃",
              "right": "Monthly rent",
              "furigana": "やちん",
              "romaji": "yachin"
            },
            {
              "id": "p_1",
              "left": "敷金",
              "right": "Security deposit",
              "furigana": "しききん",
              "romaji": "shikikin"
            },
            {
              "id": "p_2",
              "left": "礼金",
              "right": "Key money (gratuity)",
              "furigana": "れいきん",
              "romaji": "reikin"
            },
            {
              "id": "p_3",
              "left": "間取り",
              "right": "Floor plan layout",
              "furigana": "まどり",
              "romaji": "madori"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l13_8",
          "type": "dialogue",
          "prompt": "家賃について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "家賃について教えていただけますか？",
          "furigana": "家賃について教えていただけますか？",
          "romaji": "yachin ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Monthly rent?",
          "audioText": "家賃について教えていただけますか？",
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
      "id": "u13_l14",
      "unitId": "unit_13",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Floor plan layout & Real estate agency",
      "titleJp": "間取り・不動産",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "間取り",
        "不動産",
        "契約"
      ],
      "kanjiKeywords": [
        "間",
        "取",
        "不",
        "動",
        "産",
        "契",
        "約"
      ],
      "items": [
        {
          "id": "u13_l14_1",
          "type": "listen",
          "prompt": "間取り",
          "furigana": "まどり",
          "romaji": "madori",
          "english": "Floor plan layout",
          "audioText": "まどり",
          "options": [
            "Confirming Monthly rent",
            "Confirming Sunlight exposure",
            "Floor plan layout",
            "Initial upfront costs"
          ],
          "correctAnswer": "Floor plan layout"
        },
        {
          "id": "u13_l14_2",
          "type": "spell",
          "prompt": "間取り",
          "furigana": "まどり",
          "romaji": "madori",
          "english": "Build 'Floor plan layout'",
          "audioText": "まどり",
          "tileBank": [
            "ど",
            "け",
            "ま",
            "こ",
            "り",
            "す",
            "さ",
            "み"
          ],
          "correctAnswer": "まどり"
        },
        {
          "id": "u13_l14_3",
          "type": "cloze",
          "prompt": "私は不動産がすきです",
          "furigana": "わたしはふどうさんがすきです",
          "romaji": "Watashi wa fudousan ga suki desu.",
          "english": "Fill in the blank with the correct particle for Real estate agency.",
          "audioText": "不動産",
          "clozeSentence": "これは不動産 {{BLANK}} す。",
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
          "id": "u13_l14_4",
          "type": "scramble",
          "prompt": "これは不動産です",
          "furigana": "これはふどうさんです",
          "romaji": "Kore wa fudousan desu.",
          "english": "This is Real estate agency.",
          "audioText": "これは不動産です",
          "scrambleTokens": [
            "不動産",
            "です",
            "それ",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "不動産",
            "です"
          ],
          "correctAnswer": "これは不動産です"
        },
        {
          "id": "u13_l14_5",
          "type": "speak",
          "prompt": "契約",
          "furigana": "けいやく",
          "romaji": "keiyaku",
          "english": "Pronounce: Contract / lease agreement",
          "audioText": "けいやく",
          "targetSpeech": "契約",
          "options": [
            "Contract / lease agreement",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "契約"
        },
        {
          "id": "u13_l14_6",
          "type": "dictate",
          "prompt": "契約をお願いします",
          "furigana": "けいやくをおねがいします",
          "romaji": "keiyaku o onegaishimasu.",
          "english": "Contract / lease agreement, please.",
          "audioText": "契約をお願いします",
          "dictateTokens": [
            "契約",
            "を",
            "ありがとう",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "契約",
            "を",
            "お願いします"
          ],
          "correctAnswer": "契約をお願いします"
        },
        {
          "id": "u13_l14_7",
          "type": "match",
          "prompt": "間取り・不動産・契約・保証人",
          "furigana": "まどり・ふどうさん・けいやく・ほしょうにん",
          "romaji": "madori, fudousan, keiyaku, hoshounin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "まどり",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "間取り",
              "right": "Floor plan layout",
              "furigana": "まどり",
              "romaji": "madori"
            },
            {
              "id": "p_1",
              "left": "不動産",
              "right": "Real estate agency",
              "furigana": "ふどうさん",
              "romaji": "fudousan"
            },
            {
              "id": "p_2",
              "left": "契約",
              "right": "Contract / lease agreement",
              "furigana": "けいやく",
              "romaji": "keiyaku"
            },
            {
              "id": "p_3",
              "left": "保証人",
              "right": "Guarantor",
              "furigana": "ほしょうにん",
              "romaji": "hoshounin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l14_8",
          "type": "dialogue",
          "prompt": "敷金の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "敷金の準備はできていますか？",
          "furigana": "敷金の準備はできていますか？",
          "romaji": "shikikin no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Security deposit ready?",
          "audioText": "敷金の準備はできていますか？",
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
      "id": "u13_l15",
      "unitId": "unit_13",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 13 Master Exam",
      "iconType": "test",
      "title": "Unit 13 Master Exam",
      "titleJp": "第13週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "保証人",
        "日当たり",
        "駅近"
      ],
      "kanjiKeywords": [
        "保",
        "証",
        "人",
        "日",
        "当",
        "駅",
        "近"
      ],
      "items": [
        {
          "id": "u13_l15_1",
          "type": "listen",
          "prompt": "保証人",
          "furigana": "ほしょうにん",
          "romaji": "hoshounin",
          "english": "Guarantor",
          "audioText": "ほしょうにん",
          "options": [
            "Confirming Contract / lease agreement",
            "Initial upfront costs",
            "Confirming Monthly rent",
            "Guarantor"
          ],
          "correctAnswer": "Guarantor"
        },
        {
          "id": "u13_l15_2",
          "type": "spell",
          "prompt": "保証人",
          "furigana": "ほしょうにん",
          "romaji": "hoshounin",
          "english": "Build 'Guarantor'",
          "audioText": "ほしょうにん",
          "tileBank": [
            "し",
            "ほ",
            "ん",
            "ょ",
            "に",
            "ひ",
            "う",
            "ろ"
          ],
          "correctAnswer": "ほしょうにん"
        },
        {
          "id": "u13_l15_3",
          "type": "cloze",
          "prompt": "私は日当たりがすきです",
          "furigana": "わたしはひあたりがすきです",
          "romaji": "Watashi wa hiatari ga suki desu.",
          "english": "Fill in the blank with the correct particle for Sunlight exposure.",
          "audioText": "日当たり",
          "clozeSentence": "これは日当たり {{BLANK}} す。",
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
          "id": "u13_l15_4",
          "type": "scramble",
          "prompt": "これは日当たりです",
          "furigana": "これはひあたりです",
          "romaji": "Kore wa hiatari desu.",
          "english": "This is Sunlight exposure.",
          "audioText": "これは日当たりです",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "です",
            "それ",
            "日当たり"
          ],
          "scrambleSolution": [
            "これは",
            "日当たり",
            "です"
          ],
          "correctAnswer": "これは日当たりです"
        },
        {
          "id": "u13_l15_5",
          "type": "speak",
          "prompt": "駅近",
          "furigana": "えきちか",
          "romaji": "ekichika",
          "english": "Pronounce: Close to train station",
          "audioText": "えきちか",
          "targetSpeech": "駅近",
          "options": [
            "Close to train station",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "駅近"
        },
        {
          "id": "u13_l15_6",
          "type": "dictate",
          "prompt": "駅近をお願いします",
          "furigana": "えきちかをおねがいします",
          "romaji": "ekichika o onegaishimasu.",
          "english": "Close to train station, please.",
          "audioText": "駅近をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "です",
            "駅近",
            "ありがとう"
          ],
          "dictateSolution": [
            "駅近",
            "を",
            "お願いします"
          ],
          "correctAnswer": "駅近をお願いします"
        },
        {
          "id": "u13_l15_7",
          "type": "match",
          "prompt": "保証人・日当たり・駅近・防音",
          "furigana": "ほしょうにん・ひあたり・えきちか・ぼうおん",
          "romaji": "hoshounin, hiatari, ekichika, bouon",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ほしょうにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "保証人",
              "right": "Guarantor",
              "furigana": "ほしょうにん",
              "romaji": "hoshounin"
            },
            {
              "id": "p_1",
              "left": "日当たり",
              "right": "Sunlight exposure",
              "furigana": "ひあたり",
              "romaji": "hiatari"
            },
            {
              "id": "p_2",
              "left": "駅近",
              "right": "Close to train station",
              "furigana": "えきちか",
              "romaji": "ekichika"
            },
            {
              "id": "p_3",
              "left": "防音",
              "right": "Soundproof",
              "furigana": "ぼうおん",
              "romaji": "bouon"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u13_l15_8",
          "type": "dialogue",
          "prompt": "礼金についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "礼金についてどう思われますか？",
          "furigana": "礼金についてどう思われますか？",
          "romaji": "reikin ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Key money (gratuity)?",
          "audioText": "礼金についてどう思われますか？",
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
    "id": "gate_unit_13",
    "unitId": "unit_13",
    "title": "Unit 13 Mastery Checkpoint",
    "titleJp": "第13週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u13_l1_1",
        "type": "listen",
        "prompt": "家賃",
        "furigana": "やちん",
        "romaji": "yachin",
        "english": "Monthly rent",
        "audioText": "やちん",
        "options": [
          "Confirming Security deposit",
          "Monthly rent",
          "Confirming Sunlight exposure",
          "Moving residence"
        ],
        "correctAnswer": "Monthly rent"
      },
      {
        "id": "u13_l1_2",
        "type": "spell",
        "prompt": "家賃",
        "furigana": "やちん",
        "romaji": "yachin",
        "english": "Build 'Monthly rent'",
        "audioText": "やちん",
        "tileBank": [
          "て",
          "む",
          "ち",
          "わ",
          "こ",
          "ん",
          "や",
          "に"
        ],
        "correctAnswer": "やちん"
      },
      {
        "id": "u13_l3_1",
        "type": "listen",
        "prompt": "保証人",
        "furigana": "ほしょうにん",
        "romaji": "hoshounin",
        "english": "Guarantor",
        "audioText": "ほしょうにん",
        "options": [
          "Sunlight exposure",
          "Initial upfront costs",
          "Guarantor",
          "Confirming Key money (gratuity)"
        ],
        "correctAnswer": "Guarantor"
      },
      {
        "id": "u13_l3_2",
        "type": "spell",
        "prompt": "保証人",
        "furigana": "ほしょうにん",
        "romaji": "hoshounin",
        "english": "Build 'Guarantor'",
        "audioText": "ほしょうにん",
        "tileBank": [
          "ん",
          "ほ",
          "し",
          "う",
          "に",
          "り",
          "さ",
          "ょ"
        ],
        "correctAnswer": "ほしょうにん"
      },
      {
        "id": "u13_l5_1",
        "type": "listen",
        "prompt": "大家",
        "furigana": "おおや",
        "romaji": "ooya",
        "english": "Landlord",
        "audioText": "おおや",
        "options": [
          "Monthly rent",
          "Confirming Initial upfront costs",
          "Landlord",
          "Confirming Floor plan layout"
        ],
        "correctAnswer": "Landlord"
      },
      {
        "id": "u13_l5_2",
        "type": "spell",
        "prompt": "大家",
        "furigana": "おおや",
        "romaji": "ooya",
        "english": "Build 'Landlord'",
        "audioText": "おおや",
        "tileBank": [
          "や",
          "れ",
          "そ",
          "ふ",
          "お",
          "と",
          "か",
          "お"
        ],
        "correctAnswer": "おおや"
      },
      {
        "id": "u13_l7_1",
        "type": "listen",
        "prompt": "間取りの確認",
        "furigana": "まどりのかくにん",
        "romaji": "madori no kakunin",
        "english": "Confirming Floor plan layout",
        "audioText": "まどりのかくにん",
        "options": [
          "Confirming Contract / lease agreement",
          "Confirming Soundproof",
          "Walking distance",
          "Confirming Floor plan layout"
        ],
        "correctAnswer": "Confirming Floor plan layout"
      },
      {
        "id": "u13_l7_2",
        "type": "spell",
        "prompt": "間取りの確認",
        "furigana": "まどりのかくにん",
        "romaji": "madori no kakunin",
        "english": "Build 'Confirming Floor plan layout'",
        "audioText": "まどりのかくにん",
        "tileBank": [
          "ど",
          "か",
          "の",
          "に",
          "り",
          "ん",
          "ま",
          "く"
        ],
        "correctAnswer": "まどりのかくにん"
      },
      {
        "id": "u13_l9_1",
        "type": "listen",
        "prompt": "防音の確認",
        "furigana": "ぼうおんのかくにん",
        "romaji": "bouon no kakunin",
        "english": "Confirming Soundproof",
        "audioText": "ぼうおんのかくにん",
        "options": [
          "Confirming Lease renewal fee",
          "Confirming Monthly rent",
          "Floor plan layout",
          "Confirming Soundproof"
        ],
        "correctAnswer": "Confirming Soundproof"
      },
      {
        "id": "u13_l9_2",
        "type": "spell",
        "prompt": "防音の確認",
        "furigana": "ぼうおんのかくにん",
        "romaji": "bouon no kakunin",
        "english": "Build 'Confirming Soundproof'",
        "audioText": "ぼうおんのかくにん",
        "tileBank": [
          "お",
          "う",
          "の",
          "か",
          "に",
          "く",
          "ぼ",
          "ん"
        ],
        "correctAnswer": "ぼうおんのかくにん"
      },
      {
        "id": "u13_l11_1",
        "type": "listen",
        "prompt": "家賃の確認",
        "furigana": "やちんのかくにん",
        "romaji": "yachin no kakunin",
        "english": "Confirming Monthly rent",
        "audioText": "やちんのかくにん",
        "options": [
          "Confirming Security deposit",
          "Monthly rent",
          "Confirming Monthly rent",
          "Soundproof"
        ],
        "correctAnswer": "Confirming Monthly rent"
      },
      {
        "id": "u13_l11_2",
        "type": "spell",
        "prompt": "家賃の確認",
        "furigana": "やちんのかくにん",
        "romaji": "yachin no kakunin",
        "english": "Build 'Confirming Monthly rent'",
        "audioText": "やちんのかくにん",
        "tileBank": [
          "に",
          "ん",
          "の",
          "く",
          "ん",
          "か",
          "ち",
          "や"
        ],
        "correctAnswer": "やちんのかくにん"
      }
    ]
  }
};
