import type { DojoUnit } from "../../models/dojo.model";

export const unit10: DojoUnit = {
  "id": "unit_10",
  "unitNumber": 10,
  "title": "Weather & Travel Planning",
  "titleJp": "天気予報と旅行の計画",
  "description": "Check forecasts, plan weekend trips, buy Shinkansen bullet train tickets, and prepare for seasonal weather.",
  "icon": "🚅",
  "themeColor": "#06B6D4",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u10_l1",
      "unitId": "unit_10",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Weather & Sunny / clear",
      "titleJp": "天気・晴れ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "天気",
        "晴れ",
        "雨"
      ],
      "kanjiKeywords": [
        "天",
        "気",
        "晴",
        "雨"
      ],
      "items": [
        {
          "id": "u10_l1_1",
          "type": "listen",
          "prompt": "天気",
          "furigana": "てんき",
          "romaji": "tenki",
          "english": "Weather",
          "audioText": "てんき",
          "options": [
            "Temperature",
            "Confirming Reserved seat",
            "Confirming Luggage / baggage",
            "Weather"
          ],
          "correctAnswer": "Weather"
        },
        {
          "id": "u10_l1_2",
          "type": "spell",
          "prompt": "天気",
          "furigana": "てんき",
          "romaji": "tenki",
          "english": "Build 'Weather'",
          "audioText": "てんき",
          "tileBank": [
            "ん",
            "く",
            "や",
            "し",
            "さ",
            "う",
            "き",
            "て"
          ],
          "correctAnswer": "てんき"
        },
        {
          "id": "u10_l1_3",
          "type": "cloze",
          "prompt": "私は晴れがすきです",
          "furigana": "わたしははれがすきです",
          "romaji": "Watashi wa hare ga suki desu.",
          "english": "Fill in the blank with the correct particle for Sunny / clear.",
          "audioText": "晴れ",
          "clozeSentence": "これは晴れ {{BLANK}} す。",
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
          "id": "u10_l1_4",
          "type": "scramble",
          "prompt": "これは晴れです",
          "furigana": "これははれです",
          "romaji": "Kore wa hare desu.",
          "english": "This is Sunny / clear.",
          "audioText": "これは晴れです",
          "scrambleTokens": [
            "これは",
            "です",
            "それ",
            "ではありません",
            "晴れ"
          ],
          "scrambleSolution": [
            "これは",
            "晴れ",
            "です"
          ],
          "correctAnswer": "これは晴れです"
        },
        {
          "id": "u10_l1_5",
          "type": "speak",
          "prompt": "雨",
          "furigana": "あめ",
          "romaji": "ame",
          "english": "Pronounce: Rain",
          "audioText": "あめ",
          "targetSpeech": "雨",
          "options": [
            "Rain",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "雨"
        },
        {
          "id": "u10_l1_6",
          "type": "dictate",
          "prompt": "雨をお願いします",
          "furigana": "あめをおねがいします",
          "romaji": "ame o onegaishimasu.",
          "english": "Rain, please.",
          "audioText": "雨をお願いします",
          "dictateTokens": [
            "を",
            "雨",
            "お願いします",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "雨",
            "を",
            "お願いします"
          ],
          "correctAnswer": "雨をお願いします"
        },
        {
          "id": "u10_l1_7",
          "type": "match",
          "prompt": "天気・晴れ・雨・台風",
          "furigana": "てんき・はれ・あめ・たいふう",
          "romaji": "tenki, hare, ame, taifuu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "てんき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "天気",
              "right": "Weather",
              "furigana": "てんき",
              "romaji": "tenki"
            },
            {
              "id": "p_1",
              "left": "晴れ",
              "right": "Sunny / clear",
              "furigana": "はれ",
              "romaji": "hare"
            },
            {
              "id": "p_2",
              "left": "雨",
              "right": "Rain",
              "furigana": "あめ",
              "romaji": "ame"
            },
            {
              "id": "p_3",
              "left": "台風",
              "right": "Typhoon",
              "furigana": "たいふう",
              "romaji": "taifuu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l1_8",
          "type": "dialogue",
          "prompt": "天気について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "天気について教えていただけますか？",
          "furigana": "天気について教えていただけますか？",
          "romaji": "tenki ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Weather?",
          "audioText": "天気について教えていただけますか？",
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
      "id": "u10_l2",
      "unitId": "unit_10",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Typhoon & Bullet train",
      "titleJp": "台風・新幹線",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "台風",
        "新幹線",
        "切符"
      ],
      "kanjiKeywords": [
        "台",
        "風",
        "新",
        "幹",
        "線",
        "切",
        "符"
      ],
      "items": [
        {
          "id": "u10_l2_1",
          "type": "listen",
          "prompt": "台風",
          "furigana": "たいふう",
          "romaji": "taifuu",
          "english": "Typhoon",
          "audioText": "たいふう",
          "options": [
            "Confirming Umbrella",
            "Non-reserved seat",
            "Typhoon",
            "Confirming Ticket"
          ],
          "correctAnswer": "Typhoon"
        },
        {
          "id": "u10_l2_2",
          "type": "spell",
          "prompt": "台風",
          "furigana": "たいふう",
          "romaji": "taifuu",
          "english": "Build 'Typhoon'",
          "audioText": "たいふう",
          "tileBank": [
            "さ",
            "い",
            "た",
            "れ",
            "に",
            "え",
            "ふ",
            "う"
          ],
          "correctAnswer": "たいふう"
        },
        {
          "id": "u10_l2_3",
          "type": "cloze",
          "prompt": "私は新幹線がすきです",
          "furigana": "わたしはしんかんせんがすきです",
          "romaji": "Watashi wa shinkansen ga suki desu.",
          "english": "Fill in the blank with the correct particle for Bullet train.",
          "audioText": "新幹線",
          "clozeSentence": "これは新幹線 {{BLANK}} す。",
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
          "id": "u10_l2_4",
          "type": "scramble",
          "prompt": "これは新幹線です",
          "furigana": "これはしんかんせんです",
          "romaji": "Kore wa shinkansen desu.",
          "english": "This is Bullet train.",
          "audioText": "これは新幹線です",
          "scrambleTokens": [
            "それ",
            "新幹線",
            "ではありません",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "新幹線",
            "です"
          ],
          "correctAnswer": "これは新幹線です"
        },
        {
          "id": "u10_l2_5",
          "type": "speak",
          "prompt": "切符",
          "furigana": "きっぷ",
          "romaji": "kippu",
          "english": "Pronounce: Ticket",
          "audioText": "きっぷ",
          "targetSpeech": "切符",
          "options": [
            "Ticket",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "切符"
        },
        {
          "id": "u10_l2_6",
          "type": "dictate",
          "prompt": "切符をお願いします",
          "furigana": "きっぷをおねがいします",
          "romaji": "kippu o onegaishimasu.",
          "english": "Ticket, please.",
          "audioText": "切符をお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "を",
            "切符",
            "です"
          ],
          "dictateSolution": [
            "切符",
            "を",
            "お願いします"
          ],
          "correctAnswer": "切符をお願いします"
        },
        {
          "id": "u10_l2_7",
          "type": "match",
          "prompt": "台風・新幹線・切符・指定席",
          "furigana": "たいふう・しんかんせん・きっぷ・していせき",
          "romaji": "taifuu, shinkansen, kippu, shiteiseki",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "たいふう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "台風",
              "right": "Typhoon",
              "furigana": "たいふう",
              "romaji": "taifuu"
            },
            {
              "id": "p_1",
              "left": "新幹線",
              "right": "Bullet train",
              "furigana": "しんかんせん",
              "romaji": "shinkansen"
            },
            {
              "id": "p_2",
              "left": "切符",
              "right": "Ticket",
              "furigana": "きっぷ",
              "romaji": "kippu"
            },
            {
              "id": "p_3",
              "left": "指定席",
              "right": "Reserved seat",
              "furigana": "していせき",
              "romaji": "shiteiseki"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l2_8",
          "type": "dialogue",
          "prompt": "晴れの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "晴れの準備はできていますか？",
          "furigana": "晴れの準備はできていますか？",
          "romaji": "hare no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Sunny / clear ready?",
          "audioText": "晴れの準備はできていますか？",
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
      "id": "u10_l3",
      "unitId": "unit_10",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Reserved seat & Non-reserved seat",
      "titleJp": "指定席・自由席",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "指定席",
        "自由席",
        "旅行"
      ],
      "kanjiKeywords": [
        "指",
        "定",
        "席",
        "自",
        "由",
        "席",
        "旅",
        "行"
      ],
      "items": [
        {
          "id": "u10_l3_1",
          "type": "listen",
          "prompt": "指定席",
          "furigana": "していせき",
          "romaji": "shiteiseki",
          "english": "Reserved seat",
          "audioText": "していせき",
          "options": [
            "Confirming Luggage / baggage",
            "Reserved seat",
            "Confirming Umbrella",
            "Confirming Rain"
          ],
          "correctAnswer": "Reserved seat"
        },
        {
          "id": "u10_l3_2",
          "type": "spell",
          "prompt": "指定席",
          "furigana": "していせき",
          "romaji": "shiteiseki",
          "english": "Build 'Reserved seat'",
          "audioText": "していせき",
          "tileBank": [
            "こ",
            "に",
            "な",
            "き",
            "い",
            "せ",
            "て",
            "し"
          ],
          "correctAnswer": "していせき"
        },
        {
          "id": "u10_l3_3",
          "type": "cloze",
          "prompt": "私は自由席がすきです",
          "furigana": "わたしはじゆうせきがすきです",
          "romaji": "Watashi wa jiyuuseki ga suki desu.",
          "english": "Fill in the blank with the correct particle for Non-reserved seat.",
          "audioText": "自由席",
          "clozeSentence": "これは自由席 {{BLANK}} す。",
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
          "id": "u10_l3_4",
          "type": "scramble",
          "prompt": "これは自由席です",
          "furigana": "これはじゆうせきです",
          "romaji": "Kore wa jiyuuseki desu.",
          "english": "This is Non-reserved seat.",
          "audioText": "これは自由席です",
          "scrambleTokens": [
            "ではありません",
            "自由席",
            "です",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "自由席",
            "です"
          ],
          "correctAnswer": "これは自由席です"
        },
        {
          "id": "u10_l3_5",
          "type": "speak",
          "prompt": "旅行",
          "furigana": "りょこう",
          "romaji": "ryokou",
          "english": "Pronounce: Travel / trip",
          "audioText": "りょこう",
          "targetSpeech": "旅行",
          "options": [
            "Travel / trip",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "旅行"
        },
        {
          "id": "u10_l3_6",
          "type": "dictate",
          "prompt": "旅行をお願いします",
          "furigana": "りょこうをおねがいします",
          "romaji": "ryokou o onegaishimasu.",
          "english": "Travel / trip, please.",
          "audioText": "旅行をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "旅行",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "旅行",
            "を",
            "お願いします"
          ],
          "correctAnswer": "旅行をお願いします"
        },
        {
          "id": "u10_l3_7",
          "type": "match",
          "prompt": "指定席・自由席・旅行・桜",
          "furigana": "していせき・じゆうせき・りょこう・さくら",
          "romaji": "shiteiseki, jiyuuseki, ryokou, sakura",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "していせき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "指定席",
              "right": "Reserved seat",
              "furigana": "していせき",
              "romaji": "shiteiseki"
            },
            {
              "id": "p_1",
              "left": "自由席",
              "right": "Non-reserved seat",
              "furigana": "じゆうせき",
              "romaji": "jiyuuseki"
            },
            {
              "id": "p_2",
              "left": "旅行",
              "right": "Travel / trip",
              "furigana": "りょこう",
              "romaji": "ryokou"
            },
            {
              "id": "p_3",
              "left": "桜",
              "right": "Cherry blossom",
              "furigana": "さくら",
              "romaji": "sakura"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l3_8",
          "type": "dialogue",
          "prompt": "雨についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "雨についてどう思われますか？",
          "furigana": "雨についてどう思われますか？",
          "romaji": "ame ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Rain?",
          "audioText": "雨についてどう思われますか？",
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
      "id": "u10_l4",
      "unitId": "unit_10",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Cherry blossom & Autumn foliage",
      "titleJp": "桜・紅葉",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "桜",
        "紅葉",
        "気温"
      ],
      "kanjiKeywords": [
        "桜",
        "紅",
        "葉",
        "気",
        "温"
      ],
      "items": [
        {
          "id": "u10_l4_1",
          "type": "listen",
          "prompt": "桜",
          "furigana": "さくら",
          "romaji": "sakura",
          "english": "Cherry blossom",
          "audioText": "さくら",
          "options": [
            "Cherry blossom",
            "Confirming Luggage / baggage",
            "Confirming Autumn foliage",
            "Ticket"
          ],
          "correctAnswer": "Cherry blossom"
        },
        {
          "id": "u10_l4_2",
          "type": "spell",
          "prompt": "桜",
          "furigana": "さくら",
          "romaji": "sakura",
          "english": "Build 'Cherry blossom'",
          "audioText": "さくら",
          "tileBank": [
            "ら",
            "ま",
            "の",
            "く",
            "さ",
            "し",
            "あ",
            "ほ"
          ],
          "correctAnswer": "さくら"
        },
        {
          "id": "u10_l4_3",
          "type": "cloze",
          "prompt": "私は紅葉がすきです",
          "furigana": "わたしはこうようがすきです",
          "romaji": "Watashi wa kouyou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Autumn foliage.",
          "audioText": "紅葉",
          "clozeSentence": "これは紅葉 {{BLANK}} す。",
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
          "id": "u10_l4_4",
          "type": "scramble",
          "prompt": "これは紅葉です",
          "furigana": "これはこうようです",
          "romaji": "Kore wa kouyou desu.",
          "english": "This is Autumn foliage.",
          "audioText": "これは紅葉です",
          "scrambleTokens": [
            "これは",
            "です",
            "それ",
            "ではありません",
            "紅葉"
          ],
          "scrambleSolution": [
            "これは",
            "紅葉",
            "です"
          ],
          "correctAnswer": "これは紅葉です"
        },
        {
          "id": "u10_l4_5",
          "type": "speak",
          "prompt": "気温",
          "furigana": "きおん",
          "romaji": "kion",
          "english": "Pronounce: Temperature",
          "audioText": "きおん",
          "targetSpeech": "気温",
          "options": [
            "Temperature",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "気温"
        },
        {
          "id": "u10_l4_6",
          "type": "dictate",
          "prompt": "気温をお願いします",
          "furigana": "きおんをおねがいします",
          "romaji": "kion o onegaishimasu.",
          "english": "Temperature, please.",
          "audioText": "気温をお願いします",
          "dictateTokens": [
            "気温",
            "お願いします",
            "です",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "気温",
            "を",
            "お願いします"
          ],
          "correctAnswer": "気温をお願いします"
        },
        {
          "id": "u10_l4_7",
          "type": "match",
          "prompt": "桜・紅葉・気温・傘",
          "furigana": "さくら・こうよう・きおん・かさ",
          "romaji": "sakura, kouyou, kion, kasa",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さくら",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "桜",
              "right": "Cherry blossom",
              "furigana": "さくら",
              "romaji": "sakura"
            },
            {
              "id": "p_1",
              "left": "紅葉",
              "right": "Autumn foliage",
              "furigana": "こうよう",
              "romaji": "kouyou"
            },
            {
              "id": "p_2",
              "left": "気温",
              "right": "Temperature",
              "furigana": "きおん",
              "romaji": "kion"
            },
            {
              "id": "p_3",
              "left": "傘",
              "right": "Umbrella",
              "furigana": "かさ",
              "romaji": "kasa"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l4_8",
          "type": "dialogue",
          "prompt": "次は台風に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は台風に進みましょう。",
          "furigana": "次は台風に進みましょう。",
          "romaji": "Tsugi wa taifuu ni susumimashou.",
          "english": "Speaker: Let's proceed to Typhoon next.",
          "audioText": "次は台風に進みましょう。",
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
      "id": "u10_l5",
      "unitId": "unit_10",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Umbrella & Cool / refreshing",
      "titleJp": "傘・涼しい",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "傘",
        "涼しい",
        "荷物"
      ],
      "kanjiKeywords": [
        "傘",
        "涼",
        "荷",
        "物"
      ],
      "items": [
        {
          "id": "u10_l5_1",
          "type": "listen",
          "prompt": "傘",
          "furigana": "かさ",
          "romaji": "kasa",
          "english": "Umbrella",
          "audioText": "かさ",
          "options": [
            "Umbrella",
            "Confirming Typhoon",
            "Confirming Typhoon",
            "Confirming Cool / refreshing"
          ],
          "correctAnswer": "Umbrella"
        },
        {
          "id": "u10_l5_2",
          "type": "spell",
          "prompt": "傘",
          "furigana": "かさ",
          "romaji": "kasa",
          "english": "Build 'Umbrella'",
          "audioText": "かさ",
          "tileBank": [
            "さ",
            "け",
            "れ",
            "か",
            "ち",
            "ね",
            "を",
            "あ"
          ],
          "correctAnswer": "かさ"
        },
        {
          "id": "u10_l5_3",
          "type": "cloze",
          "prompt": "私は涼しいがすきです",
          "furigana": "わたしはすずしいがすきです",
          "romaji": "Watashi wa suzushii ga suki desu.",
          "english": "Fill in the blank with the correct particle for Cool / refreshing.",
          "audioText": "涼しい",
          "clozeSentence": "これは涼しい {{BLANK}} す。",
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
          "id": "u10_l5_4",
          "type": "scramble",
          "prompt": "これは涼しいです",
          "furigana": "これはすずしいです",
          "romaji": "Kore wa suzushii desu.",
          "english": "This is Cool / refreshing.",
          "audioText": "これは涼しいです",
          "scrambleTokens": [
            "それ",
            "これは",
            "ではありません",
            "です",
            "涼しい"
          ],
          "scrambleSolution": [
            "これは",
            "涼しい",
            "です"
          ],
          "correctAnswer": "これは涼しいです"
        },
        {
          "id": "u10_l5_5",
          "type": "speak",
          "prompt": "荷物",
          "furigana": "にもつ",
          "romaji": "nimotsu",
          "english": "Pronounce: Luggage / baggage",
          "audioText": "にもつ",
          "targetSpeech": "荷物",
          "options": [
            "Luggage / baggage",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "荷物"
        },
        {
          "id": "u10_l5_6",
          "type": "dictate",
          "prompt": "荷物をお願いします",
          "furigana": "にもつをおねがいします",
          "romaji": "nimotsu o onegaishimasu.",
          "english": "Luggage / baggage, please.",
          "audioText": "荷物をお願いします",
          "dictateTokens": [
            "お願いします",
            "荷物",
            "です",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "荷物",
            "を",
            "お願いします"
          ],
          "correctAnswer": "荷物をお願いします"
        },
        {
          "id": "u10_l5_7",
          "type": "match",
          "prompt": "傘・涼しい・荷物・天気の確認",
          "furigana": "かさ・すずしい・にもつ・てんきのかくにん",
          "romaji": "kasa, suzushii, nimotsu, tenki no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かさ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "傘",
              "right": "Umbrella",
              "furigana": "かさ",
              "romaji": "kasa"
            },
            {
              "id": "p_1",
              "left": "涼しい",
              "right": "Cool / refreshing",
              "furigana": "すずしい",
              "romaji": "suzushii"
            },
            {
              "id": "p_2",
              "left": "荷物",
              "right": "Luggage / baggage",
              "furigana": "にもつ",
              "romaji": "nimotsu"
            },
            {
              "id": "p_3",
              "left": "天気の確認",
              "right": "Confirming Weather",
              "furigana": "てんきのかくにん",
              "romaji": "tenki no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l5_8",
          "type": "dialogue",
          "prompt": "天気について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "天気について教えていただけますか？",
          "furigana": "天気について教えていただけますか？",
          "romaji": "tenki ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Weather?",
          "audioText": "天気について教えていただけますか？",
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
      "id": "u10_l6",
      "unitId": "unit_10",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Weather & Confirming Sunny / clear",
      "titleJp": "天気の確認・晴れの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "天気の確認",
        "晴れの確認",
        "雨の確認"
      ],
      "kanjiKeywords": [
        "天",
        "気",
        "確",
        "認",
        "晴",
        "確",
        "認",
        "雨",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u10_l6_1",
          "type": "listen",
          "prompt": "天気の確認",
          "furigana": "てんきのかくにん",
          "romaji": "tenki no kakunin",
          "english": "Confirming Weather",
          "audioText": "てんきのかくにん",
          "options": [
            "Reserved seat",
            "Cherry blossom",
            "Confirming Typhoon",
            "Confirming Weather"
          ],
          "correctAnswer": "Confirming Weather"
        },
        {
          "id": "u10_l6_2",
          "type": "spell",
          "prompt": "天気の確認",
          "furigana": "てんきのかくにん",
          "romaji": "tenki no kakunin",
          "english": "Build 'Confirming Weather'",
          "audioText": "てんきのかくにん",
          "tileBank": [
            "ん",
            "く",
            "き",
            "に",
            "か",
            "ん",
            "て",
            "の"
          ],
          "correctAnswer": "てんきのかくにん"
        },
        {
          "id": "u10_l6_3",
          "type": "cloze",
          "prompt": "私は晴れの確認がすきです",
          "furigana": "わたしははれのかくにんがすきです",
          "romaji": "Watashi wa hare no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Sunny / clear.",
          "audioText": "晴れの確認",
          "clozeSentence": "これは晴れの確認 {{BLANK}} す。",
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
          "id": "u10_l6_4",
          "type": "scramble",
          "prompt": "これは晴れの確認です",
          "furigana": "これははれのかくにんです",
          "romaji": "Kore wa hare no kakunin desu.",
          "english": "This is Confirming Sunny / clear.",
          "audioText": "これは晴れの確認です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "晴れの確認",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "晴れの確認",
            "です"
          ],
          "correctAnswer": "これは晴れの確認です"
        },
        {
          "id": "u10_l6_5",
          "type": "speak",
          "prompt": "雨の確認",
          "furigana": "あめのかくにん",
          "romaji": "ame no kakunin",
          "english": "Pronounce: Confirming Rain",
          "audioText": "あめのかくにん",
          "targetSpeech": "雨の確認",
          "options": [
            "Confirming Rain",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "雨の確認"
        },
        {
          "id": "u10_l6_6",
          "type": "dictate",
          "prompt": "雨の確認をお願いします",
          "furigana": "あめのかくにんをおねがいします",
          "romaji": "ame no kakunin o onegaishimasu.",
          "english": "Confirming Rain, please.",
          "audioText": "雨の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "雨の確認",
            "お願いします",
            "を",
            "です"
          ],
          "dictateSolution": [
            "雨の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "雨の確認をお願いします"
        },
        {
          "id": "u10_l6_7",
          "type": "match",
          "prompt": "天気の確認・晴れの確認・雨の確認・台風の確認",
          "furigana": "てんきのかくにん・はれのかくにん・あめのかくにん・たいふうのかくにん",
          "romaji": "tenki no kakunin, hare no kakunin, ame no kakunin, taifuu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "てんきのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "天気の確認",
              "right": "Confirming Weather",
              "furigana": "てんきのかくにん",
              "romaji": "tenki no kakunin"
            },
            {
              "id": "p_1",
              "left": "晴れの確認",
              "right": "Confirming Sunny / clear",
              "furigana": "はれのかくにん",
              "romaji": "hare no kakunin"
            },
            {
              "id": "p_2",
              "left": "雨の確認",
              "right": "Confirming Rain",
              "furigana": "あめのかくにん",
              "romaji": "ame no kakunin"
            },
            {
              "id": "p_3",
              "left": "台風の確認",
              "right": "Confirming Typhoon",
              "furigana": "たいふうのかくにん",
              "romaji": "taifuu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l6_8",
          "type": "dialogue",
          "prompt": "晴れの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "晴れの準備はできていますか？",
          "furigana": "晴れの準備はできていますか？",
          "romaji": "hare no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Sunny / clear ready?",
          "audioText": "晴れの準備はできていますか？",
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
      "id": "u10_l7",
      "unitId": "unit_10",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Typhoon & Confirming Bullet train",
      "titleJp": "台風の確認・新幹線の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "台風の確認",
        "新幹線の確認",
        "切符の確認"
      ],
      "kanjiKeywords": [
        "台",
        "風",
        "確",
        "認",
        "新",
        "幹",
        "線",
        "確",
        "認",
        "切",
        "符",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u10_l7_1",
          "type": "listen",
          "prompt": "台風の確認",
          "furigana": "たいふうのかくにん",
          "romaji": "taifuu no kakunin",
          "english": "Confirming Typhoon",
          "audioText": "たいふうのかくにん",
          "options": [
            "Confirming Non-reserved seat",
            "Confirming Rain",
            "Confirming Typhoon",
            "Confirming Sunny / clear"
          ],
          "correctAnswer": "Confirming Typhoon"
        },
        {
          "id": "u10_l7_2",
          "type": "spell",
          "prompt": "台風の確認",
          "furigana": "たいふうのかくにん",
          "romaji": "taifuu no kakunin",
          "english": "Build 'Confirming Typhoon'",
          "audioText": "たいふうのかくにん",
          "tileBank": [
            "う",
            "く",
            "か",
            "た",
            "い",
            "ふ",
            "の",
            "に"
          ],
          "correctAnswer": "たいふうのかくにん"
        },
        {
          "id": "u10_l7_3",
          "type": "cloze",
          "prompt": "私は新幹線の確認がすきです",
          "furigana": "わたしはしんかんせんのかくにんがすきです",
          "romaji": "Watashi wa shinkansen no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Bullet train.",
          "audioText": "新幹線の確認",
          "clozeSentence": "これは新幹線の確認 {{BLANK}} す。",
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
          "id": "u10_l7_4",
          "type": "scramble",
          "prompt": "これは新幹線の確認です",
          "furigana": "これはしんかんせんのかくにんです",
          "romaji": "Kore wa shinkansen no kakunin desu.",
          "english": "This is Confirming Bullet train.",
          "audioText": "これは新幹線の確認です",
          "scrambleTokens": [
            "新幹線の確認",
            "それ",
            "ではありません",
            "です",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "新幹線の確認",
            "です"
          ],
          "correctAnswer": "これは新幹線の確認です"
        },
        {
          "id": "u10_l7_5",
          "type": "speak",
          "prompt": "切符の確認",
          "furigana": "きっぷのかくにん",
          "romaji": "kippu no kakunin",
          "english": "Pronounce: Confirming Ticket",
          "audioText": "きっぷのかくにん",
          "targetSpeech": "切符の確認",
          "options": [
            "Confirming Ticket",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "切符の確認"
        },
        {
          "id": "u10_l7_6",
          "type": "dictate",
          "prompt": "切符の確認をお願いします",
          "furigana": "きっぷのかくにんをおねがいします",
          "romaji": "kippu no kakunin o onegaishimasu.",
          "english": "Confirming Ticket, please.",
          "audioText": "切符の確認をお願いします",
          "dictateTokens": [
            "です",
            "切符の確認",
            "お願いします",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "切符の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "切符の確認をお願いします"
        },
        {
          "id": "u10_l7_7",
          "type": "match",
          "prompt": "台風の確認・新幹線の確認・切符の確認・指定席の確認",
          "furigana": "たいふうのかくにん・しんかんせんのかくにん・きっぷのかくにん・していせきのかくにん",
          "romaji": "taifuu no kakunin, shinkansen no kakunin, kippu no kakunin, shiteiseki no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "たいふうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "台風の確認",
              "right": "Confirming Typhoon",
              "furigana": "たいふうのかくにん",
              "romaji": "taifuu no kakunin"
            },
            {
              "id": "p_1",
              "left": "新幹線の確認",
              "right": "Confirming Bullet train",
              "furigana": "しんかんせんのかくにん",
              "romaji": "shinkansen no kakunin"
            },
            {
              "id": "p_2",
              "left": "切符の確認",
              "right": "Confirming Ticket",
              "furigana": "きっぷのかくにん",
              "romaji": "kippu no kakunin"
            },
            {
              "id": "p_3",
              "left": "指定席の確認",
              "right": "Confirming Reserved seat",
              "furigana": "していせきのかくにん",
              "romaji": "shiteiseki no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l7_8",
          "type": "dialogue",
          "prompt": "雨についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "雨についてどう思われますか？",
          "furigana": "雨についてどう思われますか？",
          "romaji": "ame ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Rain?",
          "audioText": "雨についてどう思われますか？",
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
      "id": "u10_l8",
      "unitId": "unit_10",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Reserved seat & Confirming Non-reserved seat",
      "titleJp": "指定席の確認・自由席の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "指定席の確認",
        "自由席の確認",
        "旅行の確認"
      ],
      "kanjiKeywords": [
        "指",
        "定",
        "席",
        "確",
        "認",
        "自",
        "由",
        "席",
        "確",
        "認",
        "旅",
        "行",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u10_l8_1",
          "type": "listen",
          "prompt": "指定席の確認",
          "furigana": "していせきのかくにん",
          "romaji": "shiteiseki no kakunin",
          "english": "Confirming Reserved seat",
          "audioText": "していせきのかくにん",
          "options": [
            "Confirming Reserved seat",
            "Confirming Rain",
            "Luggage / baggage",
            "Confirming Autumn foliage"
          ],
          "correctAnswer": "Confirming Reserved seat"
        },
        {
          "id": "u10_l8_2",
          "type": "spell",
          "prompt": "指定席の確認",
          "furigana": "していせきのかくにん",
          "romaji": "shiteiseki no kakunin",
          "english": "Build 'Confirming Reserved seat'",
          "audioText": "していせきのかくにん",
          "tileBank": [
            "の",
            "せ",
            "か",
            "き",
            "い",
            "く",
            "し",
            "て"
          ],
          "correctAnswer": "していせきのかくにん"
        },
        {
          "id": "u10_l8_3",
          "type": "cloze",
          "prompt": "私は自由席の確認がすきです",
          "furigana": "わたしはじゆうせきのかくにんがすきです",
          "romaji": "Watashi wa jiyuuseki no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Non-reserved seat.",
          "audioText": "自由席の確認",
          "clozeSentence": "これは自由席の確認 {{BLANK}} す。",
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
          "id": "u10_l8_4",
          "type": "scramble",
          "prompt": "これは自由席の確認です",
          "furigana": "これはじゆうせきのかくにんです",
          "romaji": "Kore wa jiyuuseki no kakunin desu.",
          "english": "This is Confirming Non-reserved seat.",
          "audioText": "これは自由席の確認です",
          "scrambleTokens": [
            "これは",
            "です",
            "それ",
            "ではありません",
            "自由席の確認"
          ],
          "scrambleSolution": [
            "これは",
            "自由席の確認",
            "です"
          ],
          "correctAnswer": "これは自由席の確認です"
        },
        {
          "id": "u10_l8_5",
          "type": "speak",
          "prompt": "旅行の確認",
          "furigana": "りょこうのかくにん",
          "romaji": "ryokou no kakunin",
          "english": "Pronounce: Confirming Travel / trip",
          "audioText": "りょこうのかくにん",
          "targetSpeech": "旅行の確認",
          "options": [
            "Confirming Travel / trip",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "旅行の確認"
        },
        {
          "id": "u10_l8_6",
          "type": "dictate",
          "prompt": "旅行の確認をお願いします",
          "furigana": "りょこうのかくにんをおねがいします",
          "romaji": "ryokou no kakunin o onegaishimasu.",
          "english": "Confirming Travel / trip, please.",
          "audioText": "旅行の確認をお願いします",
          "dictateTokens": [
            "旅行の確認",
            "を",
            "です",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "旅行の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "旅行の確認をお願いします"
        },
        {
          "id": "u10_l8_7",
          "type": "match",
          "prompt": "指定席の確認・自由席の確認・旅行の確認・桜の確認",
          "furigana": "していせきのかくにん・じゆうせきのかくにん・りょこうのかくにん・さくらのかくにん",
          "romaji": "shiteiseki no kakunin, jiyuuseki no kakunin, ryokou no kakunin, sakura no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "していせきのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "指定席の確認",
              "right": "Confirming Reserved seat",
              "furigana": "していせきのかくにん",
              "romaji": "shiteiseki no kakunin"
            },
            {
              "id": "p_1",
              "left": "自由席の確認",
              "right": "Confirming Non-reserved seat",
              "furigana": "じゆうせきのかくにん",
              "romaji": "jiyuuseki no kakunin"
            },
            {
              "id": "p_2",
              "left": "旅行の確認",
              "right": "Confirming Travel / trip",
              "furigana": "りょこうのかくにん",
              "romaji": "ryokou no kakunin"
            },
            {
              "id": "p_3",
              "left": "桜の確認",
              "right": "Confirming Cherry blossom",
              "furigana": "さくらのかくにん",
              "romaji": "sakura no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l8_8",
          "type": "dialogue",
          "prompt": "次は台風に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は台風に進みましょう。",
          "furigana": "次は台風に進みましょう。",
          "romaji": "Tsugi wa taifuu ni susumimashou.",
          "english": "Speaker: Let's proceed to Typhoon next.",
          "audioText": "次は台風に進みましょう。",
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
      "id": "u10_l9",
      "unitId": "unit_10",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Cherry blossom & Confirming Autumn foliage",
      "titleJp": "桜の確認・紅葉の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "桜の確認",
        "紅葉の確認",
        "気温の確認"
      ],
      "kanjiKeywords": [
        "桜",
        "確",
        "認",
        "紅",
        "葉",
        "確",
        "認",
        "気",
        "温",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u10_l9_1",
          "type": "listen",
          "prompt": "桜の確認",
          "furigana": "さくらのかくにん",
          "romaji": "sakura no kakunin",
          "english": "Confirming Cherry blossom",
          "audioText": "さくらのかくにん",
          "options": [
            "Confirming Non-reserved seat",
            "Confirming Rain",
            "Confirming Cherry blossom",
            "Cherry blossom"
          ],
          "correctAnswer": "Confirming Cherry blossom"
        },
        {
          "id": "u10_l9_2",
          "type": "spell",
          "prompt": "桜の確認",
          "furigana": "さくらのかくにん",
          "romaji": "sakura no kakunin",
          "english": "Build 'Confirming Cherry blossom'",
          "audioText": "さくらのかくにん",
          "tileBank": [
            "に",
            "く",
            "ら",
            "さ",
            "く",
            "の",
            "か",
            "ん"
          ],
          "correctAnswer": "さくらのかくにん"
        },
        {
          "id": "u10_l9_3",
          "type": "cloze",
          "prompt": "私は紅葉の確認がすきです",
          "furigana": "わたしはこうようのかくにんがすきです",
          "romaji": "Watashi wa kouyou no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Autumn foliage.",
          "audioText": "紅葉の確認",
          "clozeSentence": "これは紅葉の確認 {{BLANK}} す。",
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
          "id": "u10_l9_4",
          "type": "scramble",
          "prompt": "これは紅葉の確認です",
          "furigana": "これはこうようのかくにんです",
          "romaji": "Kore wa kouyou no kakunin desu.",
          "english": "This is Confirming Autumn foliage.",
          "audioText": "これは紅葉の確認です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "これは",
            "紅葉の確認",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "紅葉の確認",
            "です"
          ],
          "correctAnswer": "これは紅葉の確認です"
        },
        {
          "id": "u10_l9_5",
          "type": "speak",
          "prompt": "気温の確認",
          "furigana": "きおんのかくにん",
          "romaji": "kion no kakunin",
          "english": "Pronounce: Confirming Temperature",
          "audioText": "きおんのかくにん",
          "targetSpeech": "気温の確認",
          "options": [
            "Confirming Temperature",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "気温の確認"
        },
        {
          "id": "u10_l9_6",
          "type": "dictate",
          "prompt": "気温の確認をお願いします",
          "furigana": "きおんのかくにんをおねがいします",
          "romaji": "kion no kakunin o onegaishimasu.",
          "english": "Confirming Temperature, please.",
          "audioText": "気温の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "です",
            "気温の確認",
            "を"
          ],
          "dictateSolution": [
            "気温の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "気温の確認をお願いします"
        },
        {
          "id": "u10_l9_7",
          "type": "match",
          "prompt": "桜の確認・紅葉の確認・気温の確認・傘の確認",
          "furigana": "さくらのかくにん・こうようのかくにん・きおんのかくにん・かさのかくにん",
          "romaji": "sakura no kakunin, kouyou no kakunin, kion no kakunin, kasa no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さくらのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "桜の確認",
              "right": "Confirming Cherry blossom",
              "furigana": "さくらのかくにん",
              "romaji": "sakura no kakunin"
            },
            {
              "id": "p_1",
              "left": "紅葉の確認",
              "right": "Confirming Autumn foliage",
              "furigana": "こうようのかくにん",
              "romaji": "kouyou no kakunin"
            },
            {
              "id": "p_2",
              "left": "気温の確認",
              "right": "Confirming Temperature",
              "furigana": "きおんのかくにん",
              "romaji": "kion no kakunin"
            },
            {
              "id": "p_3",
              "left": "傘の確認",
              "right": "Confirming Umbrella",
              "furigana": "かさのかくにん",
              "romaji": "kasa no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l9_8",
          "type": "dialogue",
          "prompt": "天気について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "天気について教えていただけますか？",
          "furigana": "天気について教えていただけますか？",
          "romaji": "tenki ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Weather?",
          "audioText": "天気について教えていただけますか？",
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
      "id": "u10_l10",
      "unitId": "unit_10",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Umbrella & Confirming Cool / refreshing",
      "titleJp": "傘の確認・涼しいの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "傘の確認",
        "涼しいの確認",
        "荷物の確認"
      ],
      "kanjiKeywords": [
        "傘",
        "確",
        "認",
        "涼",
        "確",
        "認",
        "荷",
        "物",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u10_l10_1",
          "type": "listen",
          "prompt": "傘の確認",
          "furigana": "かさのかくにん",
          "romaji": "kasa no kakunin",
          "english": "Confirming Umbrella",
          "audioText": "かさのかくにん",
          "options": [
            "Bullet train",
            "Confirming Umbrella",
            "Confirming Cool / refreshing",
            "Ticket"
          ],
          "correctAnswer": "Confirming Umbrella"
        },
        {
          "id": "u10_l10_2",
          "type": "spell",
          "prompt": "傘の確認",
          "furigana": "かさのかくにん",
          "romaji": "kasa no kakunin",
          "english": "Build 'Confirming Umbrella'",
          "audioText": "かさのかくにん",
          "tileBank": [
            "の",
            "く",
            "ん",
            "に",
            "か",
            "れ",
            "さ",
            "か"
          ],
          "correctAnswer": "かさのかくにん"
        },
        {
          "id": "u10_l10_3",
          "type": "cloze",
          "prompt": "私は涼しいの確認がすきです",
          "furigana": "わたしはすずしいのかくにんがすきです",
          "romaji": "Watashi wa suzushii no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Cool / refreshing.",
          "audioText": "涼しいの確認",
          "clozeSentence": "これは涼しいの確認 {{BLANK}} す。",
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
          "id": "u10_l10_4",
          "type": "scramble",
          "prompt": "これは涼しいの確認です",
          "furigana": "これはすずしいのかくにんです",
          "romaji": "Kore wa suzushii no kakunin desu.",
          "english": "This is Confirming Cool / refreshing.",
          "audioText": "これは涼しいの確認です",
          "scrambleTokens": [
            "です",
            "それ",
            "涼しいの確認",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "涼しいの確認",
            "です"
          ],
          "correctAnswer": "これは涼しいの確認です"
        },
        {
          "id": "u10_l10_5",
          "type": "speak",
          "prompt": "荷物の確認",
          "furigana": "にもつのかくにん",
          "romaji": "nimotsu no kakunin",
          "english": "Pronounce: Confirming Luggage / baggage",
          "audioText": "にもつのかくにん",
          "targetSpeech": "荷物の確認",
          "options": [
            "Confirming Luggage / baggage",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "荷物の確認"
        },
        {
          "id": "u10_l10_6",
          "type": "dictate",
          "prompt": "荷物の確認をお願いします",
          "furigana": "にもつのかくにんをおねがいします",
          "romaji": "nimotsu no kakunin o onegaishimasu.",
          "english": "Confirming Luggage / baggage, please.",
          "audioText": "荷物の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "お願いします",
            "を",
            "荷物の確認"
          ],
          "dictateSolution": [
            "荷物の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "荷物の確認をお願いします"
        },
        {
          "id": "u10_l10_7",
          "type": "match",
          "prompt": "傘の確認・涼しいの確認・荷物の確認・天気の確認",
          "furigana": "かさのかくにん・すずしいのかくにん・にもつのかくにん・てんきのかくにん",
          "romaji": "kasa no kakunin, suzushii no kakunin, nimotsu no kakunin, tenki no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かさのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "傘の確認",
              "right": "Confirming Umbrella",
              "furigana": "かさのかくにん",
              "romaji": "kasa no kakunin"
            },
            {
              "id": "p_1",
              "left": "涼しいの確認",
              "right": "Confirming Cool / refreshing",
              "furigana": "すずしいのかくにん",
              "romaji": "suzushii no kakunin"
            },
            {
              "id": "p_2",
              "left": "荷物の確認",
              "right": "Confirming Luggage / baggage",
              "furigana": "にもつのかくにん",
              "romaji": "nimotsu no kakunin"
            },
            {
              "id": "p_3",
              "left": "天気の確認",
              "right": "Confirming Weather",
              "furigana": "てんきのかくにん",
              "romaji": "tenki no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l10_8",
          "type": "dialogue",
          "prompt": "晴れの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "晴れの準備はできていますか？",
          "furigana": "晴れの準備はできていますか？",
          "romaji": "hare no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Sunny / clear ready?",
          "audioText": "晴れの準備はできていますか？",
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
      "id": "u10_l11",
      "unitId": "unit_10",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Weather & Confirming Sunny / clear",
      "titleJp": "天気の確認・晴れの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "天気の確認",
        "晴れの確認",
        "雨の確認"
      ],
      "kanjiKeywords": [
        "天",
        "気",
        "確",
        "認",
        "晴",
        "確",
        "認",
        "雨",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u10_l11_1",
          "type": "listen",
          "prompt": "天気の確認",
          "furigana": "てんきのかくにん",
          "romaji": "tenki no kakunin",
          "english": "Confirming Weather",
          "audioText": "てんきのかくにん",
          "options": [
            "Ticket",
            "Autumn foliage",
            "Confirming Bullet train",
            "Confirming Weather"
          ],
          "correctAnswer": "Confirming Weather"
        },
        {
          "id": "u10_l11_2",
          "type": "spell",
          "prompt": "天気の確認",
          "furigana": "てんきのかくにん",
          "romaji": "tenki no kakunin",
          "english": "Build 'Confirming Weather'",
          "audioText": "てんきのかくにん",
          "tileBank": [
            "く",
            "ん",
            "の",
            "ん",
            "か",
            "き",
            "て",
            "に"
          ],
          "correctAnswer": "てんきのかくにん"
        },
        {
          "id": "u10_l11_3",
          "type": "cloze",
          "prompt": "私は晴れの確認がすきです",
          "furigana": "わたしははれのかくにんがすきです",
          "romaji": "Watashi wa hare no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Sunny / clear.",
          "audioText": "晴れの確認",
          "clozeSentence": "これは晴れの確認 {{BLANK}} す。",
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
          "id": "u10_l11_4",
          "type": "scramble",
          "prompt": "これは晴れの確認です",
          "furigana": "これははれのかくにんです",
          "romaji": "Kore wa hare no kakunin desu.",
          "english": "This is Confirming Sunny / clear.",
          "audioText": "これは晴れの確認です",
          "scrambleTokens": [
            "ではありません",
            "晴れの確認",
            "です",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "晴れの確認",
            "です"
          ],
          "correctAnswer": "これは晴れの確認です"
        },
        {
          "id": "u10_l11_5",
          "type": "speak",
          "prompt": "雨の確認",
          "furigana": "あめのかくにん",
          "romaji": "ame no kakunin",
          "english": "Pronounce: Confirming Rain",
          "audioText": "あめのかくにん",
          "targetSpeech": "雨の確認",
          "options": [
            "Confirming Rain",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "雨の確認"
        },
        {
          "id": "u10_l11_6",
          "type": "dictate",
          "prompt": "雨の確認をお願いします",
          "furigana": "あめのかくにんをおねがいします",
          "romaji": "ame no kakunin o onegaishimasu.",
          "english": "Confirming Rain, please.",
          "audioText": "雨の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "雨の確認",
            "を",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "雨の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "雨の確認をお願いします"
        },
        {
          "id": "u10_l11_7",
          "type": "match",
          "prompt": "天気の確認・晴れの確認・雨の確認・台風の確認",
          "furigana": "てんきのかくにん・はれのかくにん・あめのかくにん・たいふうのかくにん",
          "romaji": "tenki no kakunin, hare no kakunin, ame no kakunin, taifuu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "てんきのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "天気の確認",
              "right": "Confirming Weather",
              "furigana": "てんきのかくにん",
              "romaji": "tenki no kakunin"
            },
            {
              "id": "p_1",
              "left": "晴れの確認",
              "right": "Confirming Sunny / clear",
              "furigana": "はれのかくにん",
              "romaji": "hare no kakunin"
            },
            {
              "id": "p_2",
              "left": "雨の確認",
              "right": "Confirming Rain",
              "furigana": "あめのかくにん",
              "romaji": "ame no kakunin"
            },
            {
              "id": "p_3",
              "left": "台風の確認",
              "right": "Confirming Typhoon",
              "furigana": "たいふうのかくにん",
              "romaji": "taifuu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l11_8",
          "type": "dialogue",
          "prompt": "雨についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "雨についてどう思われますか？",
          "furigana": "雨についてどう思われますか？",
          "romaji": "ame ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Rain?",
          "audioText": "雨についてどう思われますか？",
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
      "id": "u10_l12",
      "unitId": "unit_10",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Typhoon & Confirming Bullet train",
      "titleJp": "台風の確認・新幹線の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "台風の確認",
        "新幹線の確認",
        "切符の確認"
      ],
      "kanjiKeywords": [
        "台",
        "風",
        "確",
        "認",
        "新",
        "幹",
        "線",
        "確",
        "認",
        "切",
        "符",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u10_l12_1",
          "type": "listen",
          "prompt": "台風の確認",
          "furigana": "たいふうのかくにん",
          "romaji": "taifuu no kakunin",
          "english": "Confirming Typhoon",
          "audioText": "たいふうのかくにん",
          "options": [
            "Confirming Autumn foliage",
            "Confirming Typhoon",
            "Cool / refreshing",
            "Confirming Rain"
          ],
          "correctAnswer": "Confirming Typhoon"
        },
        {
          "id": "u10_l12_2",
          "type": "spell",
          "prompt": "台風の確認",
          "furigana": "たいふうのかくにん",
          "romaji": "taifuu no kakunin",
          "english": "Build 'Confirming Typhoon'",
          "audioText": "たいふうのかくにん",
          "tileBank": [
            "い",
            "ふ",
            "か",
            "の",
            "に",
            "う",
            "く",
            "た"
          ],
          "correctAnswer": "たいふうのかくにん"
        },
        {
          "id": "u10_l12_3",
          "type": "cloze",
          "prompt": "私は新幹線の確認がすきです",
          "furigana": "わたしはしんかんせんのかくにんがすきです",
          "romaji": "Watashi wa shinkansen no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Bullet train.",
          "audioText": "新幹線の確認",
          "clozeSentence": "これは新幹線の確認 {{BLANK}} す。",
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
          "id": "u10_l12_4",
          "type": "scramble",
          "prompt": "これは新幹線の確認です",
          "furigana": "これはしんかんせんのかくにんです",
          "romaji": "Kore wa shinkansen no kakunin desu.",
          "english": "This is Confirming Bullet train.",
          "audioText": "これは新幹線の確認です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "新幹線の確認",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "新幹線の確認",
            "です"
          ],
          "correctAnswer": "これは新幹線の確認です"
        },
        {
          "id": "u10_l12_5",
          "type": "speak",
          "prompt": "切符の確認",
          "furigana": "きっぷのかくにん",
          "romaji": "kippu no kakunin",
          "english": "Pronounce: Confirming Ticket",
          "audioText": "きっぷのかくにん",
          "targetSpeech": "切符の確認",
          "options": [
            "Confirming Ticket",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "切符の確認"
        },
        {
          "id": "u10_l12_6",
          "type": "dictate",
          "prompt": "切符の確認をお願いします",
          "furigana": "きっぷのかくにんをおねがいします",
          "romaji": "kippu no kakunin o onegaishimasu.",
          "english": "Confirming Ticket, please.",
          "audioText": "切符の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "切符の確認",
            "を",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "切符の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "切符の確認をお願いします"
        },
        {
          "id": "u10_l12_7",
          "type": "match",
          "prompt": "台風の確認・新幹線の確認・切符の確認・天気",
          "furigana": "たいふうのかくにん・しんかんせんのかくにん・きっぷのかくにん・てんき",
          "romaji": "taifuu no kakunin, shinkansen no kakunin, kippu no kakunin, tenki",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "たいふうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "台風の確認",
              "right": "Confirming Typhoon",
              "furigana": "たいふうのかくにん",
              "romaji": "taifuu no kakunin"
            },
            {
              "id": "p_1",
              "left": "新幹線の確認",
              "right": "Confirming Bullet train",
              "furigana": "しんかんせんのかくにん",
              "romaji": "shinkansen no kakunin"
            },
            {
              "id": "p_2",
              "left": "切符の確認",
              "right": "Confirming Ticket",
              "furigana": "きっぷのかくにん",
              "romaji": "kippu no kakunin"
            },
            {
              "id": "p_3",
              "left": "天気",
              "right": "Weather",
              "furigana": "てんき",
              "romaji": "tenki"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l12_8",
          "type": "dialogue",
          "prompt": "次は台風に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は台風に進みましょう。",
          "furigana": "次は台風に進みましょう。",
          "romaji": "Tsugi wa taifuu ni susumimashou.",
          "english": "Speaker: Let's proceed to Typhoon next.",
          "audioText": "次は台風に進みましょう。",
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
      "id": "u10_l13",
      "unitId": "unit_10",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Weather & Sunny / clear",
      "titleJp": "天気・晴れ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "天気",
        "晴れ",
        "雨"
      ],
      "kanjiKeywords": [
        "天",
        "気",
        "晴",
        "雨"
      ],
      "items": [
        {
          "id": "u10_l13_1",
          "type": "listen",
          "prompt": "天気",
          "furigana": "てんき",
          "romaji": "tenki",
          "english": "Weather",
          "audioText": "てんき",
          "options": [
            "Rain",
            "Cherry blossom",
            "Weather",
            "Confirming Sunny / clear"
          ],
          "correctAnswer": "Weather"
        },
        {
          "id": "u10_l13_2",
          "type": "spell",
          "prompt": "天気",
          "furigana": "てんき",
          "romaji": "tenki",
          "english": "Build 'Weather'",
          "audioText": "てんき",
          "tileBank": [
            "に",
            "さ",
            "て",
            "け",
            "ん",
            "き",
            "く",
            "も"
          ],
          "correctAnswer": "てんき"
        },
        {
          "id": "u10_l13_3",
          "type": "cloze",
          "prompt": "私は晴れがすきです",
          "furigana": "わたしははれがすきです",
          "romaji": "Watashi wa hare ga suki desu.",
          "english": "Fill in the blank with the correct particle for Sunny / clear.",
          "audioText": "晴れ",
          "clozeSentence": "これは晴れ {{BLANK}} す。",
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
          "id": "u10_l13_4",
          "type": "scramble",
          "prompt": "これは晴れです",
          "furigana": "これははれです",
          "romaji": "Kore wa hare desu.",
          "english": "This is Sunny / clear.",
          "audioText": "これは晴れです",
          "scrambleTokens": [
            "それ",
            "これは",
            "です",
            "晴れ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "晴れ",
            "です"
          ],
          "correctAnswer": "これは晴れです"
        },
        {
          "id": "u10_l13_5",
          "type": "speak",
          "prompt": "雨",
          "furigana": "あめ",
          "romaji": "ame",
          "english": "Pronounce: Rain",
          "audioText": "あめ",
          "targetSpeech": "雨",
          "options": [
            "Rain",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "雨"
        },
        {
          "id": "u10_l13_6",
          "type": "dictate",
          "prompt": "雨をお願いします",
          "furigana": "あめをおねがいします",
          "romaji": "ame o onegaishimasu.",
          "english": "Rain, please.",
          "audioText": "雨をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "雨",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "雨",
            "を",
            "お願いします"
          ],
          "correctAnswer": "雨をお願いします"
        },
        {
          "id": "u10_l13_7",
          "type": "match",
          "prompt": "天気・晴れ・雨・台風",
          "furigana": "てんき・はれ・あめ・たいふう",
          "romaji": "tenki, hare, ame, taifuu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "てんき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "天気",
              "right": "Weather",
              "furigana": "てんき",
              "romaji": "tenki"
            },
            {
              "id": "p_1",
              "left": "晴れ",
              "right": "Sunny / clear",
              "furigana": "はれ",
              "romaji": "hare"
            },
            {
              "id": "p_2",
              "left": "雨",
              "right": "Rain",
              "furigana": "あめ",
              "romaji": "ame"
            },
            {
              "id": "p_3",
              "left": "台風",
              "right": "Typhoon",
              "furigana": "たいふう",
              "romaji": "taifuu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l13_8",
          "type": "dialogue",
          "prompt": "天気について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "天気について教えていただけますか？",
          "furigana": "天気について教えていただけますか？",
          "romaji": "tenki ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Weather?",
          "audioText": "天気について教えていただけますか？",
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
      "id": "u10_l14",
      "unitId": "unit_10",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Typhoon & Bullet train",
      "titleJp": "台風・新幹線",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "台風",
        "新幹線",
        "切符"
      ],
      "kanjiKeywords": [
        "台",
        "風",
        "新",
        "幹",
        "線",
        "切",
        "符"
      ],
      "items": [
        {
          "id": "u10_l14_1",
          "type": "listen",
          "prompt": "台風",
          "furigana": "たいふう",
          "romaji": "taifuu",
          "english": "Typhoon",
          "audioText": "たいふう",
          "options": [
            "Non-reserved seat",
            "Confirming Sunny / clear",
            "Typhoon",
            "Confirming Typhoon"
          ],
          "correctAnswer": "Typhoon"
        },
        {
          "id": "u10_l14_2",
          "type": "spell",
          "prompt": "台風",
          "furigana": "たいふう",
          "romaji": "taifuu",
          "english": "Build 'Typhoon'",
          "audioText": "たいふう",
          "tileBank": [
            "う",
            "え",
            "い",
            "な",
            "て",
            "た",
            "し",
            "ふ"
          ],
          "correctAnswer": "たいふう"
        },
        {
          "id": "u10_l14_3",
          "type": "cloze",
          "prompt": "私は新幹線がすきです",
          "furigana": "わたしはしんかんせんがすきです",
          "romaji": "Watashi wa shinkansen ga suki desu.",
          "english": "Fill in the blank with the correct particle for Bullet train.",
          "audioText": "新幹線",
          "clozeSentence": "これは新幹線 {{BLANK}} す。",
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
          "id": "u10_l14_4",
          "type": "scramble",
          "prompt": "これは新幹線です",
          "furigana": "これはしんかんせんです",
          "romaji": "Kore wa shinkansen desu.",
          "english": "This is Bullet train.",
          "audioText": "これは新幹線です",
          "scrambleTokens": [
            "それ",
            "です",
            "新幹線",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "新幹線",
            "です"
          ],
          "correctAnswer": "これは新幹線です"
        },
        {
          "id": "u10_l14_5",
          "type": "speak",
          "prompt": "切符",
          "furigana": "きっぷ",
          "romaji": "kippu",
          "english": "Pronounce: Ticket",
          "audioText": "きっぷ",
          "targetSpeech": "切符",
          "options": [
            "Ticket",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "切符"
        },
        {
          "id": "u10_l14_6",
          "type": "dictate",
          "prompt": "切符をお願いします",
          "furigana": "きっぷをおねがいします",
          "romaji": "kippu o onegaishimasu.",
          "english": "Ticket, please.",
          "audioText": "切符をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "お願いします",
            "切符",
            "を"
          ],
          "dictateSolution": [
            "切符",
            "を",
            "お願いします"
          ],
          "correctAnswer": "切符をお願いします"
        },
        {
          "id": "u10_l14_7",
          "type": "match",
          "prompt": "台風・新幹線・切符・指定席",
          "furigana": "たいふう・しんかんせん・きっぷ・していせき",
          "romaji": "taifuu, shinkansen, kippu, shiteiseki",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "たいふう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "台風",
              "right": "Typhoon",
              "furigana": "たいふう",
              "romaji": "taifuu"
            },
            {
              "id": "p_1",
              "left": "新幹線",
              "right": "Bullet train",
              "furigana": "しんかんせん",
              "romaji": "shinkansen"
            },
            {
              "id": "p_2",
              "left": "切符",
              "right": "Ticket",
              "furigana": "きっぷ",
              "romaji": "kippu"
            },
            {
              "id": "p_3",
              "left": "指定席",
              "right": "Reserved seat",
              "furigana": "していせき",
              "romaji": "shiteiseki"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l14_8",
          "type": "dialogue",
          "prompt": "晴れの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "晴れの準備はできていますか？",
          "furigana": "晴れの準備はできていますか？",
          "romaji": "hare no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Sunny / clear ready?",
          "audioText": "晴れの準備はできていますか？",
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
      "id": "u10_l15",
      "unitId": "unit_10",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 10 Master Exam",
      "iconType": "test",
      "title": "Unit 10 Master Exam",
      "titleJp": "第10週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "指定席",
        "自由席",
        "旅行"
      ],
      "kanjiKeywords": [
        "指",
        "定",
        "席",
        "自",
        "由",
        "席",
        "旅",
        "行"
      ],
      "items": [
        {
          "id": "u10_l15_1",
          "type": "listen",
          "prompt": "指定席",
          "furigana": "していせき",
          "romaji": "shiteiseki",
          "english": "Reserved seat",
          "audioText": "していせき",
          "options": [
            "Confirming Bullet train",
            "Reserved seat",
            "Confirming Typhoon",
            "Typhoon"
          ],
          "correctAnswer": "Reserved seat"
        },
        {
          "id": "u10_l15_2",
          "type": "spell",
          "prompt": "指定席",
          "furigana": "していせき",
          "romaji": "shiteiseki",
          "english": "Build 'Reserved seat'",
          "audioText": "していせき",
          "tileBank": [
            "と",
            "き",
            "せ",
            "て",
            "い",
            "ら",
            "し",
            "た"
          ],
          "correctAnswer": "していせき"
        },
        {
          "id": "u10_l15_3",
          "type": "cloze",
          "prompt": "私は自由席がすきです",
          "furigana": "わたしはじゆうせきがすきです",
          "romaji": "Watashi wa jiyuuseki ga suki desu.",
          "english": "Fill in the blank with the correct particle for Non-reserved seat.",
          "audioText": "自由席",
          "clozeSentence": "これは自由席 {{BLANK}} す。",
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
          "id": "u10_l15_4",
          "type": "scramble",
          "prompt": "これは自由席です",
          "furigana": "これはじゆうせきです",
          "romaji": "Kore wa jiyuuseki desu.",
          "english": "This is Non-reserved seat.",
          "audioText": "これは自由席です",
          "scrambleTokens": [
            "自由席",
            "ではありません",
            "です",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "自由席",
            "です"
          ],
          "correctAnswer": "これは自由席です"
        },
        {
          "id": "u10_l15_5",
          "type": "speak",
          "prompt": "旅行",
          "furigana": "りょこう",
          "romaji": "ryokou",
          "english": "Pronounce: Travel / trip",
          "audioText": "りょこう",
          "targetSpeech": "旅行",
          "options": [
            "Travel / trip",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "旅行"
        },
        {
          "id": "u10_l15_6",
          "type": "dictate",
          "prompt": "旅行をお願いします",
          "furigana": "りょこうをおねがいします",
          "romaji": "ryokou o onegaishimasu.",
          "english": "Travel / trip, please.",
          "audioText": "旅行をお願いします",
          "dictateTokens": [
            "です",
            "旅行",
            "を",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "旅行",
            "を",
            "お願いします"
          ],
          "correctAnswer": "旅行をお願いします"
        },
        {
          "id": "u10_l15_7",
          "type": "match",
          "prompt": "指定席・自由席・旅行・桜",
          "furigana": "していせき・じゆうせき・りょこう・さくら",
          "romaji": "shiteiseki, jiyuuseki, ryokou, sakura",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "していせき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "指定席",
              "right": "Reserved seat",
              "furigana": "していせき",
              "romaji": "shiteiseki"
            },
            {
              "id": "p_1",
              "left": "自由席",
              "right": "Non-reserved seat",
              "furigana": "じゆうせき",
              "romaji": "jiyuuseki"
            },
            {
              "id": "p_2",
              "left": "旅行",
              "right": "Travel / trip",
              "furigana": "りょこう",
              "romaji": "ryokou"
            },
            {
              "id": "p_3",
              "left": "桜",
              "right": "Cherry blossom",
              "furigana": "さくら",
              "romaji": "sakura"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u10_l15_8",
          "type": "dialogue",
          "prompt": "雨についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "雨についてどう思われますか？",
          "furigana": "雨についてどう思われますか？",
          "romaji": "ame ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Rain?",
          "audioText": "雨についてどう思われますか？",
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
    "id": "gate_unit_10",
    "unitId": "unit_10",
    "title": "Unit 10 Mastery Checkpoint",
    "titleJp": "第10週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u10_l1_1",
        "type": "listen",
        "prompt": "天気",
        "furigana": "てんき",
        "romaji": "tenki",
        "english": "Weather",
        "audioText": "てんき",
        "options": [
          "Temperature",
          "Confirming Reserved seat",
          "Confirming Luggage / baggage",
          "Weather"
        ],
        "correctAnswer": "Weather"
      },
      {
        "id": "u10_l1_2",
        "type": "spell",
        "prompt": "天気",
        "furigana": "てんき",
        "romaji": "tenki",
        "english": "Build 'Weather'",
        "audioText": "てんき",
        "tileBank": [
          "ん",
          "く",
          "や",
          "し",
          "さ",
          "う",
          "き",
          "て"
        ],
        "correctAnswer": "てんき"
      },
      {
        "id": "u10_l3_1",
        "type": "listen",
        "prompt": "指定席",
        "furigana": "していせき",
        "romaji": "shiteiseki",
        "english": "Reserved seat",
        "audioText": "していせき",
        "options": [
          "Confirming Luggage / baggage",
          "Reserved seat",
          "Confirming Umbrella",
          "Confirming Rain"
        ],
        "correctAnswer": "Reserved seat"
      },
      {
        "id": "u10_l3_2",
        "type": "spell",
        "prompt": "指定席",
        "furigana": "していせき",
        "romaji": "shiteiseki",
        "english": "Build 'Reserved seat'",
        "audioText": "していせき",
        "tileBank": [
          "こ",
          "に",
          "な",
          "き",
          "い",
          "せ",
          "て",
          "し"
        ],
        "correctAnswer": "していせき"
      },
      {
        "id": "u10_l5_1",
        "type": "listen",
        "prompt": "傘",
        "furigana": "かさ",
        "romaji": "kasa",
        "english": "Umbrella",
        "audioText": "かさ",
        "options": [
          "Umbrella",
          "Confirming Typhoon",
          "Confirming Typhoon",
          "Confirming Cool / refreshing"
        ],
        "correctAnswer": "Umbrella"
      },
      {
        "id": "u10_l5_2",
        "type": "spell",
        "prompt": "傘",
        "furigana": "かさ",
        "romaji": "kasa",
        "english": "Build 'Umbrella'",
        "audioText": "かさ",
        "tileBank": [
          "さ",
          "け",
          "れ",
          "か",
          "ち",
          "ね",
          "を",
          "あ"
        ],
        "correctAnswer": "かさ"
      },
      {
        "id": "u10_l7_1",
        "type": "listen",
        "prompt": "台風の確認",
        "furigana": "たいふうのかくにん",
        "romaji": "taifuu no kakunin",
        "english": "Confirming Typhoon",
        "audioText": "たいふうのかくにん",
        "options": [
          "Confirming Non-reserved seat",
          "Confirming Rain",
          "Confirming Typhoon",
          "Confirming Sunny / clear"
        ],
        "correctAnswer": "Confirming Typhoon"
      },
      {
        "id": "u10_l7_2",
        "type": "spell",
        "prompt": "台風の確認",
        "furigana": "たいふうのかくにん",
        "romaji": "taifuu no kakunin",
        "english": "Build 'Confirming Typhoon'",
        "audioText": "たいふうのかくにん",
        "tileBank": [
          "う",
          "く",
          "か",
          "た",
          "い",
          "ふ",
          "の",
          "に"
        ],
        "correctAnswer": "たいふうのかくにん"
      },
      {
        "id": "u10_l9_1",
        "type": "listen",
        "prompt": "桜の確認",
        "furigana": "さくらのかくにん",
        "romaji": "sakura no kakunin",
        "english": "Confirming Cherry blossom",
        "audioText": "さくらのかくにん",
        "options": [
          "Confirming Non-reserved seat",
          "Confirming Rain",
          "Confirming Cherry blossom",
          "Cherry blossom"
        ],
        "correctAnswer": "Confirming Cherry blossom"
      },
      {
        "id": "u10_l9_2",
        "type": "spell",
        "prompt": "桜の確認",
        "furigana": "さくらのかくにん",
        "romaji": "sakura no kakunin",
        "english": "Build 'Confirming Cherry blossom'",
        "audioText": "さくらのかくにん",
        "tileBank": [
          "に",
          "く",
          "ら",
          "さ",
          "く",
          "の",
          "か",
          "ん"
        ],
        "correctAnswer": "さくらのかくにん"
      },
      {
        "id": "u10_l11_1",
        "type": "listen",
        "prompt": "天気の確認",
        "furigana": "てんきのかくにん",
        "romaji": "tenki no kakunin",
        "english": "Confirming Weather",
        "audioText": "てんきのかくにん",
        "options": [
          "Ticket",
          "Autumn foliage",
          "Confirming Bullet train",
          "Confirming Weather"
        ],
        "correctAnswer": "Confirming Weather"
      },
      {
        "id": "u10_l11_2",
        "type": "spell",
        "prompt": "天気の確認",
        "furigana": "てんきのかくにん",
        "romaji": "tenki no kakunin",
        "english": "Build 'Confirming Weather'",
        "audioText": "てんきのかくにん",
        "tileBank": [
          "く",
          "ん",
          "の",
          "ん",
          "か",
          "き",
          "て",
          "に"
        ],
        "correctAnswer": "てんきのかくにん"
      }
    ]
  }
};
