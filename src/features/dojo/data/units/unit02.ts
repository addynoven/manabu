import type { DojoUnit } from "../../models/dojo.model";

export const unit02: DojoUnit = {
  "id": "unit_2",
  "unitNumber": 2,
  "title": "Talking About What You Like",
  "titleJp": "好きなものについて話す",
  "description": "Express personal preferences, talk about favorite foods and drinks, describe pastimes, and ask others what they enjoy.",
  "icon": "❤️",
  "themeColor": "#F43F5E",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u2_l1",
      "unitId": "unit_2",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Liked / fond of & Loved / favorite",
      "titleJp": "好き・大好き",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "好き",
        "大好き",
        "嫌い"
      ],
      "kanjiKeywords": [
        "好",
        "大",
        "好",
        "嫌"
      ],
      "items": [
        {
          "id": "u2_l1_1",
          "type": "listen",
          "prompt": "好き",
          "furigana": "すき",
          "romaji": "suki",
          "english": "Liked / fond of",
          "audioText": "すき",
          "options": [
            "Anime / Japanese animation",
            "Pizza",
            "Liked / fond of",
            "To see / watch"
          ],
          "correctAnswer": "Liked / fond of"
        },
        {
          "id": "u2_l1_2",
          "type": "spell",
          "prompt": "好き",
          "furigana": "すき",
          "romaji": "suki",
          "english": "Build 'Liked / fond of'",
          "audioText": "すき",
          "tileBank": [
            "う",
            "む",
            "き",
            "す",
            "ん",
            "か",
            "の",
            "ひ"
          ],
          "correctAnswer": "すき"
        },
        {
          "id": "u2_l1_3",
          "type": "cloze",
          "prompt": "私は大好きがすきです",
          "furigana": "わたしはだいすきがすきです",
          "romaji": "Watashi wa daisuki ga suki desu.",
          "english": "Fill in the blank with the correct particle for Loved / favorite.",
          "audioText": "大好き",
          "clozeSentence": "これは大好き {{BLANK}} す。",
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
          "id": "u2_l1_4",
          "type": "scramble",
          "prompt": "これは大好きです",
          "furigana": "これはだいすきです",
          "romaji": "Kore wa daisuki desu.",
          "english": "This is Loved / favorite.",
          "audioText": "これは大好きです",
          "scrambleTokens": [
            "これは",
            "大好き",
            "です",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "大好き",
            "です"
          ],
          "correctAnswer": "これは大好きです"
        },
        {
          "id": "u2_l1_5",
          "type": "speak",
          "prompt": "嫌い",
          "furigana": "きらい",
          "romaji": "kirai",
          "english": "Pronounce: Disliked / hated",
          "audioText": "きらい",
          "targetSpeech": "嫌い",
          "options": [
            "Disliked / hated",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "嫌い"
        },
        {
          "id": "u2_l1_6",
          "type": "dictate",
          "prompt": "嫌いをお願いします",
          "furigana": "きらいをおねがいします",
          "romaji": "kirai o onegaishimasu.",
          "english": "Disliked / hated, please.",
          "audioText": "嫌いをお願いします",
          "dictateTokens": [
            "お願いします",
            "嫌い",
            "ありがとう",
            "を",
            "です"
          ],
          "dictateSolution": [
            "嫌い",
            "を",
            "お願いします"
          ],
          "correctAnswer": "嫌いをお願いします"
        },
        {
          "id": "u2_l1_7",
          "type": "match",
          "prompt": "好き・大好き・嫌い・寿司",
          "furigana": "すき・だいすき・きらい・すし",
          "romaji": "suki, daisuki, kirai, sushi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "すき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "好き",
              "right": "Liked / fond of",
              "furigana": "すき",
              "romaji": "suki"
            },
            {
              "id": "p_1",
              "left": "大好き",
              "right": "Loved / favorite",
              "furigana": "だいすき",
              "romaji": "daisuki"
            },
            {
              "id": "p_2",
              "left": "嫌い",
              "right": "Disliked / hated",
              "furigana": "きらい",
              "romaji": "kirai"
            },
            {
              "id": "p_3",
              "left": "寿司",
              "right": "Sushi",
              "furigana": "すし",
              "romaji": "sushi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l1_8",
          "type": "dialogue",
          "prompt": "日本の食べ物で、何が一番好きですか？",
          "dialogueSpeaker": "Ken",
          "dialoguePrompt": "日本の食べ物で、何が一番好きですか？",
          "furigana": "日本の食べ物で、何が一番好きですか？",
          "romaji": "Nihon no tabemono de, nani ga ichiban suki desu ka?",
          "english": "Ken: Among Japanese foods, what do you like best?",
          "audioText": "日本の食べ物で、何が一番好きですか？",
          "dialogueOptions": [
            "ラーメンが一番好きです！",
            "さようなら",
            "私は学生です",
            "駅はどこですか"
          ],
          "options": [
            "ラーメンが一番好きです！",
            "さようなら",
            "私は学生です",
            "駅はどこですか"
          ],
          "correctAnswer": "ラーメンが一番好きです！"
        }
      ]
    },
    {
      "id": "u2_l2",
      "unitId": "unit_2",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Sushi & Ramen noodles",
      "titleJp": "寿司・ラーメン",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "寿司",
        "ラーメン",
        "天ぷら"
      ],
      "kanjiKeywords": [
        "寿",
        "司",
        "天"
      ],
      "items": [
        {
          "id": "u2_l2_1",
          "type": "listen",
          "prompt": "寿司",
          "furigana": "すし",
          "romaji": "sushi",
          "english": "Sushi",
          "audioText": "すし",
          "options": [
            "Manga / comics",
            "Sushi",
            "Pizza",
            "Soccer / football"
          ],
          "correctAnswer": "Sushi"
        },
        {
          "id": "u2_l2_2",
          "type": "spell",
          "prompt": "寿司",
          "furigana": "すし",
          "romaji": "sushi",
          "english": "Build 'Sushi'",
          "audioText": "すし",
          "tileBank": [
            "も",
            "を",
            "す",
            "か",
            "し",
            "ろ",
            "や",
            "り"
          ],
          "correctAnswer": "すし"
        },
        {
          "id": "u2_l2_3",
          "type": "cloze",
          "prompt": "私はラーメンがすきです",
          "furigana": "わたしはラーメンがすきです",
          "romaji": "Watashi wa raamen ga suki desu.",
          "english": "Fill in the blank with the correct particle for Ramen noodles.",
          "audioText": "ラーメン",
          "clozeSentence": "私はラーメン {{BLANK}} 好きです。",
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
          "id": "u2_l2_4",
          "type": "scramble",
          "prompt": "これはラーメンです",
          "furigana": "これはラーメンです",
          "romaji": "Kore wa raamen desu.",
          "english": "This is Ramen noodles.",
          "audioText": "これはラーメンです",
          "scrambleTokens": [
            "ラーメン",
            "これは",
            "です",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "ラーメン",
            "です"
          ],
          "correctAnswer": "これはラーメンです"
        },
        {
          "id": "u2_l2_5",
          "type": "speak",
          "prompt": "天ぷら",
          "furigana": "てんぷら",
          "romaji": "tenpura",
          "english": "Pronounce: Tempura",
          "audioText": "てんぷら",
          "targetSpeech": "天ぷら",
          "options": [
            "Tempura",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "天ぷら"
        },
        {
          "id": "u2_l2_6",
          "type": "dictate",
          "prompt": "天ぷらをお願いします",
          "furigana": "てんぷらをおねがいします",
          "romaji": "tenpura o onegaishimasu.",
          "english": "Tempura, please.",
          "audioText": "天ぷらをお願いします",
          "dictateTokens": [
            "天ぷら",
            "ありがとう",
            "です",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "天ぷら",
            "を",
            "お願いします"
          ],
          "correctAnswer": "天ぷらをお願いします"
        },
        {
          "id": "u2_l2_7",
          "type": "match",
          "prompt": "寿司・ラーメン・天ぷら・カレー",
          "furigana": "すし・ラーメン・てんぷら・カレー",
          "romaji": "sushi, raamen, tenpura, karee",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "すし",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "寿司",
              "right": "Sushi",
              "furigana": "すし",
              "romaji": "sushi"
            },
            {
              "id": "p_1",
              "left": "ラーメン",
              "right": "Ramen noodles",
              "furigana": "ラーメン",
              "romaji": "raamen"
            },
            {
              "id": "p_2",
              "left": "天ぷら",
              "right": "Tempura",
              "furigana": "てんぷら",
              "romaji": "tenpura"
            },
            {
              "id": "p_3",
              "left": "カレー",
              "right": "Japanese curry",
              "furigana": "カレー",
              "romaji": "karee"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l2_8",
          "type": "dialogue",
          "prompt": "アニメを見るのは好き？",
          "dialogueSpeaker": "Sara",
          "dialoguePrompt": "アニメを見るのは好き？",
          "furigana": "アニメを見るのは好き？",
          "romaji": "Anime o miru no wa suki?",
          "english": "Sara: Do you like watching anime?",
          "audioText": "アニメを見るのは好き？",
          "dialogueOptions": [
            "うん、大好き！毎週見ているよ。",
            "いいえ、日本人です",
            "お腹が空きました",
            "ごちそうさまでした"
          ],
          "options": [
            "うん、大好き！毎週見ているよ。",
            "いいえ、日本人です",
            "お腹が空きました",
            "ごちそうさまでした"
          ],
          "correctAnswer": "うん、大好き！毎週見ているよ。"
        }
      ]
    },
    {
      "id": "u2_l3",
      "unitId": "unit_2",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Japanese curry & Pizza",
      "titleJp": "カレー・ピザ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "カレー",
        "ピザ",
        "美味しい"
      ],
      "kanjiKeywords": [
        "美",
        "味"
      ],
      "items": [
        {
          "id": "u2_l3_1",
          "type": "listen",
          "prompt": "カレー",
          "furigana": "カレー",
          "romaji": "karee",
          "english": "Japanese curry",
          "audioText": "カレー",
          "options": [
            "Music",
            "Japanese curry",
            "Loved / favorite",
            "Tempura"
          ],
          "correctAnswer": "Japanese curry"
        },
        {
          "id": "u2_l3_2",
          "type": "spell",
          "prompt": "カレー",
          "furigana": "カレー",
          "romaji": "karee",
          "english": "Build 'Japanese curry'",
          "audioText": "カレー",
          "tileBank": [
            "カ",
            "つ",
            "い",
            "ろ",
            "あ",
            "レ",
            "ん",
            "ー"
          ],
          "correctAnswer": "カレー"
        },
        {
          "id": "u2_l3_3",
          "type": "cloze",
          "prompt": "私はピザがすきです",
          "furigana": "わたしはピザがすきです",
          "romaji": "Watashi wa piza ga suki desu.",
          "english": "Fill in the blank with the correct particle for Pizza.",
          "audioText": "ピザ",
          "clozeSentence": "私はピザ {{BLANK}} 好きです。",
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
          "id": "u2_l3_4",
          "type": "scramble",
          "prompt": "これはピザです",
          "furigana": "これはピザです",
          "romaji": "Kore wa piza desu.",
          "english": "This is Pizza.",
          "audioText": "これはピザです",
          "scrambleTokens": [
            "ではありません",
            "です",
            "ピザ",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "ピザ",
            "です"
          ],
          "correctAnswer": "これはピザです"
        },
        {
          "id": "u2_l3_5",
          "type": "speak",
          "prompt": "美味しい",
          "furigana": "おいしい",
          "romaji": "oishii",
          "english": "Pronounce: Delicious / tasty",
          "audioText": "おいしい",
          "targetSpeech": "美味しい",
          "options": [
            "Delicious / tasty",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "美味しい"
        },
        {
          "id": "u2_l3_6",
          "type": "dictate",
          "prompt": "美味しいをお願いします",
          "furigana": "おいしいをおねがいします",
          "romaji": "oishii o onegaishimasu.",
          "english": "Delicious / tasty, please.",
          "audioText": "美味しいをお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "を",
            "美味しい",
            "です"
          ],
          "dictateSolution": [
            "美味しい",
            "を",
            "お願いします"
          ],
          "correctAnswer": "美味しいをお願いします"
        },
        {
          "id": "u2_l3_7",
          "type": "match",
          "prompt": "カレー・ピザ・美味しい・まずい",
          "furigana": "カレー・ピザ・おいしい・まずい",
          "romaji": "karee, piza, oishii, mazui",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "カレー",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "カレー",
              "right": "Japanese curry",
              "furigana": "カレー",
              "romaji": "karee"
            },
            {
              "id": "p_1",
              "left": "ピザ",
              "right": "Pizza",
              "furigana": "ピザ",
              "romaji": "piza"
            },
            {
              "id": "p_2",
              "left": "美味しい",
              "right": "Delicious / tasty",
              "furigana": "おいしい",
              "romaji": "oishii"
            },
            {
              "id": "p_3",
              "left": "まずい",
              "right": "Unpalatable / bad taste",
              "furigana": "まずい",
              "romaji": "mazui"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l3_8",
          "type": "dialogue",
          "prompt": "辛い食べ物は大丈夫ですか？",
          "dialogueSpeaker": "Ken",
          "dialoguePrompt": "辛い食べ物は大丈夫ですか？",
          "furigana": "辛い食べ物は大丈夫ですか？",
          "romaji": "Karai tabemono wa daijoubu desu ka?",
          "english": "Ken: Are you okay with spicy food?",
          "audioText": "辛い食べ物は大丈夫ですか？",
          "dialogueOptions": [
            "あまり好きじゃないですが、少しなら食べられます。",
            "はい、元気です",
            "はじめまして",
            "おやすみなさい"
          ],
          "options": [
            "あまり好きじゃないですが、少しなら食べられます。",
            "はい、元気です",
            "はじめまして",
            "おやすみなさい"
          ],
          "correctAnswer": "あまり好きじゃないですが、少しなら食べられます。"
        }
      ]
    },
    {
      "id": "u2_l4",
      "unitId": "unit_2",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Unpalatable / bad taste & Sweet",
      "titleJp": "まずい・甘い",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "まずい",
        "甘い",
        "辛い"
      ],
      "kanjiKeywords": [
        "甘",
        "辛"
      ],
      "items": [
        {
          "id": "u2_l4_1",
          "type": "listen",
          "prompt": "まずい",
          "furigana": "まずい",
          "romaji": "mazui",
          "english": "Unpalatable / bad taste",
          "audioText": "まずい",
          "options": [
            "Pizza",
            "Unpalatable / bad taste",
            "Music",
            "Reading books"
          ],
          "correctAnswer": "Unpalatable / bad taste"
        },
        {
          "id": "u2_l4_2",
          "type": "spell",
          "prompt": "まずい",
          "furigana": "まずい",
          "romaji": "mazui",
          "english": "Build 'Unpalatable / bad taste'",
          "audioText": "まずい",
          "tileBank": [
            "ず",
            "め",
            "そ",
            "ま",
            "い",
            "き",
            "か",
            "り"
          ],
          "correctAnswer": "まずい"
        },
        {
          "id": "u2_l4_3",
          "type": "cloze",
          "prompt": "私は甘いがすきです",
          "furigana": "わたしはあまいがすきです",
          "romaji": "Watashi wa amai ga suki desu.",
          "english": "Fill in the blank with the correct particle for Sweet.",
          "audioText": "甘い",
          "clozeSentence": "これは甘い {{BLANK}} す。",
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
          "id": "u2_l4_4",
          "type": "scramble",
          "prompt": "これは甘いです",
          "furigana": "これはあまいです",
          "romaji": "Kore wa amai desu.",
          "english": "This is Sweet.",
          "audioText": "これは甘いです",
          "scrambleTokens": [
            "これは",
            "それ",
            "ではありません",
            "です",
            "甘い"
          ],
          "scrambleSolution": [
            "これは",
            "甘い",
            "です"
          ],
          "correctAnswer": "これは甘いです"
        },
        {
          "id": "u2_l4_5",
          "type": "speak",
          "prompt": "辛い",
          "furigana": "からい",
          "romaji": "karai",
          "english": "Pronounce: Spicy / hot",
          "audioText": "からい",
          "targetSpeech": "辛い",
          "options": [
            "Spicy / hot",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "辛い"
        },
        {
          "id": "u2_l4_6",
          "type": "dictate",
          "prompt": "辛いをお願いします",
          "furigana": "からいをおねがいします",
          "romaji": "karai o onegaishimasu.",
          "english": "Spicy / hot, please.",
          "audioText": "辛いをお願いします",
          "dictateTokens": [
            "辛い",
            "お願いします",
            "を",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "辛い",
            "を",
            "お願いします"
          ],
          "correctAnswer": "辛いをお願いします"
        },
        {
          "id": "u2_l4_7",
          "type": "match",
          "prompt": "まずい・甘い・辛い・お茶",
          "furigana": "まずい・あまい・からい・おちゃ",
          "romaji": "mazui, amai, karai, ocha",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "まずい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "まずい",
              "right": "Unpalatable / bad taste",
              "furigana": "まずい",
              "romaji": "mazui"
            },
            {
              "id": "p_1",
              "left": "甘い",
              "right": "Sweet",
              "furigana": "あまい",
              "romaji": "amai"
            },
            {
              "id": "p_2",
              "left": "辛い",
              "right": "Spicy / hot",
              "furigana": "からい",
              "romaji": "karai"
            },
            {
              "id": "p_3",
              "left": "お茶",
              "right": "Green tea",
              "furigana": "おちゃ",
              "romaji": "ocha"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l4_8",
          "type": "dialogue",
          "prompt": "休みの日は何をして楽しんでいる？",
          "dialogueSpeaker": "Friend",
          "dialoguePrompt": "休みの日は何をして楽しんでいる？",
          "furigana": "休みの日は何をして楽しんでいる？",
          "romaji": "Yasumi no hi wa nani o shite tanoshinde iru?",
          "english": "Friend: What do you do for fun on days off?",
          "audioText": "休みの日は何をして楽しんでいる？",
          "dialogueOptions": [
            "音楽を聞いたりゲームをしたりします。",
            "こんにちは",
            "美味しいです",
            "ここは渋谷です"
          ],
          "options": [
            "音楽を聞いたりゲームをしたりします。",
            "こんにちは",
            "美味しいです",
            "ここは渋谷です"
          ],
          "correctAnswer": "音楽を聞いたりゲームをしたりします。"
        }
      ]
    },
    {
      "id": "u2_l5",
      "unitId": "unit_2",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Green tea & Water",
      "titleJp": "お茶・水",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "お茶",
        "水",
        "ビール"
      ],
      "kanjiKeywords": [
        "茶",
        "水"
      ],
      "items": [
        {
          "id": "u2_l5_1",
          "type": "listen",
          "prompt": "お茶",
          "furigana": "おちゃ",
          "romaji": "ocha",
          "english": "Green tea",
          "audioText": "おちゃ",
          "options": [
            "Green tea",
            "Spicy food",
            "Very / extremely",
            "Sports"
          ],
          "correctAnswer": "Green tea"
        },
        {
          "id": "u2_l5_2",
          "type": "spell",
          "prompt": "お茶",
          "furigana": "おちゃ",
          "romaji": "ocha",
          "english": "Build 'Green tea'",
          "audioText": "おちゃ",
          "tileBank": [
            "ぬ",
            "さ",
            "ま",
            "お",
            "き",
            "ゃ",
            "ふ",
            "ち"
          ],
          "correctAnswer": "おちゃ"
        },
        {
          "id": "u2_l5_3",
          "type": "cloze",
          "prompt": "私は水がすきです",
          "furigana": "わたしはみずがすきです",
          "romaji": "Watashi wa mizu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Water.",
          "audioText": "水",
          "clozeSentence": "これは水 {{BLANK}} す。",
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
          "id": "u2_l5_4",
          "type": "scramble",
          "prompt": "これは水です",
          "furigana": "これはみずです",
          "romaji": "Kore wa mizu desu.",
          "english": "This is Water.",
          "audioText": "これは水です",
          "scrambleTokens": [
            "それ",
            "水",
            "これは",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "水",
            "です"
          ],
          "correctAnswer": "これは水です"
        },
        {
          "id": "u2_l5_5",
          "type": "speak",
          "prompt": "ビール",
          "furigana": "ビール",
          "romaji": "biiru",
          "english": "Pronounce: Beer",
          "audioText": "ビール",
          "targetSpeech": "ビール",
          "options": [
            "Beer",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ビール"
        },
        {
          "id": "u2_l5_6",
          "type": "dictate",
          "prompt": "ビールをお願いします",
          "furigana": "ビールをおねがいします",
          "romaji": "biiru o onegaishimasu.",
          "english": "Beer, please.",
          "audioText": "ビールをお願いします",
          "dictateTokens": [
            "ビール",
            "を",
            "です",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "ビール",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ビールをお願いします"
        },
        {
          "id": "u2_l5_7",
          "type": "match",
          "prompt": "お茶・水・ビール・ジュース",
          "furigana": "おちゃ・みず・ビール・ジュース",
          "romaji": "ocha, mizu, biiru, juusu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おちゃ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "お茶",
              "right": "Green tea",
              "furigana": "おちゃ",
              "romaji": "ocha"
            },
            {
              "id": "p_1",
              "left": "水",
              "right": "Water",
              "furigana": "みず",
              "romaji": "mizu"
            },
            {
              "id": "p_2",
              "left": "ビール",
              "right": "Beer",
              "furigana": "ビール",
              "romaji": "biiru"
            },
            {
              "id": "p_3",
              "left": "ジュース",
              "right": "Juice",
              "furigana": "ジュース",
              "romaji": "juusu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l5_8",
          "type": "dialogue",
          "prompt": "日本の食べ物で、何が一番好きですか？",
          "dialogueSpeaker": "Ken",
          "dialoguePrompt": "日本の食べ物で、何が一番好きですか？",
          "furigana": "日本の食べ物で、何が一番好きですか？",
          "romaji": "Nihon no tabemono de, nani ga ichiban suki desu ka?",
          "english": "Ken: Among Japanese foods, what do you like best?",
          "audioText": "日本の食べ物で、何が一番好きですか？",
          "dialogueOptions": [
            "ラーメンが一番好きです！",
            "さようなら",
            "私は学生です",
            "駅はどこですか"
          ],
          "options": [
            "ラーメンが一番好きです！",
            "さようなら",
            "私は学生です",
            "駅はどこですか"
          ],
          "correctAnswer": "ラーメンが一番好きです！"
        }
      ]
    },
    {
      "id": "u2_l6",
      "unitId": "unit_2",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Juice & Anime / Japanese animation",
      "titleJp": "ジュース・アニメ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "ジュース",
        "アニメ",
        "漫画"
      ],
      "kanjiKeywords": [
        "漫",
        "画"
      ],
      "items": [
        {
          "id": "u2_l6_1",
          "type": "listen",
          "prompt": "ジュース",
          "furigana": "ジュース",
          "romaji": "juusu",
          "english": "Juice",
          "audioText": "ジュース",
          "options": [
            "What",
            "Loved / favorite",
            "Sushi",
            "Juice"
          ],
          "correctAnswer": "Juice"
        },
        {
          "id": "u2_l6_2",
          "type": "spell",
          "prompt": "ジュース",
          "furigana": "ジュース",
          "romaji": "juusu",
          "english": "Build 'Juice'",
          "audioText": "ジュース",
          "tileBank": [
            "は",
            "ス",
            "た",
            "ろ",
            "し",
            "ー",
            "ジ",
            "ュ"
          ],
          "correctAnswer": "ジュース"
        },
        {
          "id": "u2_l6_3",
          "type": "cloze",
          "prompt": "私はアニメがすきです",
          "furigana": "わたしはアニメがすきです",
          "romaji": "Watashi wa anime ga suki desu.",
          "english": "Fill in the blank with the correct particle for Anime / Japanese animation.",
          "audioText": "アニメ",
          "clozeSentence": "これはアニメ {{BLANK}} す。",
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
          "id": "u2_l6_4",
          "type": "scramble",
          "prompt": "これはアニメです",
          "furigana": "これはアニメです",
          "romaji": "Kore wa anime desu.",
          "english": "This is Anime / Japanese animation.",
          "audioText": "これはアニメです",
          "scrambleTokens": [
            "です",
            "アニメ",
            "ではありません",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "アニメ",
            "です"
          ],
          "correctAnswer": "これはアニメです"
        },
        {
          "id": "u2_l6_5",
          "type": "speak",
          "prompt": "漫画",
          "furigana": "まんが",
          "romaji": "manga",
          "english": "Pronounce: Manga / comics",
          "audioText": "まんが",
          "targetSpeech": "漫画",
          "options": [
            "Manga / comics",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "漫画"
        },
        {
          "id": "u2_l6_6",
          "type": "dictate",
          "prompt": "漫画をお願いします",
          "furigana": "まんがをおねがいします",
          "romaji": "manga o onegaishimasu.",
          "english": "Manga / comics, please.",
          "audioText": "漫画をお願いします",
          "dictateTokens": [
            "です",
            "漫画",
            "お願いします",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "漫画",
            "を",
            "お願いします"
          ],
          "correctAnswer": "漫画をお願いします"
        },
        {
          "id": "u2_l6_7",
          "type": "match",
          "prompt": "ジュース・アニメ・漫画・映画",
          "furigana": "ジュース・アニメ・まんが・えいが",
          "romaji": "juusu, anime, manga, eiga",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ジュース",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "ジュース",
              "right": "Juice",
              "furigana": "ジュース",
              "romaji": "juusu"
            },
            {
              "id": "p_1",
              "left": "アニメ",
              "right": "Anime / Japanese animation",
              "furigana": "アニメ",
              "romaji": "anime"
            },
            {
              "id": "p_2",
              "left": "漫画",
              "right": "Manga / comics",
              "furigana": "まんが",
              "romaji": "manga"
            },
            {
              "id": "p_3",
              "left": "映画",
              "right": "Movie / cinema",
              "furigana": "えいが",
              "romaji": "eiga"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l6_8",
          "type": "dialogue",
          "prompt": "アニメを見るのは好き？",
          "dialogueSpeaker": "Sara",
          "dialoguePrompt": "アニメを見るのは好き？",
          "furigana": "アニメを見るのは好き？",
          "romaji": "Anime o miru no wa suki?",
          "english": "Sara: Do you like watching anime?",
          "audioText": "アニメを見るのは好き？",
          "dialogueOptions": [
            "うん、大好き！毎週見ているよ。",
            "いいえ、日本人です",
            "お腹が空きました",
            "ごちそうさまでした"
          ],
          "options": [
            "うん、大好き！毎週見ているよ。",
            "いいえ、日本人です",
            "お腹が空きました",
            "ごちそうさまでした"
          ],
          "correctAnswer": "うん、大好き！毎週見ているよ。"
        }
      ]
    },
    {
      "id": "u2_l7",
      "unitId": "unit_2",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Movie / cinema & Music",
      "titleJp": "映画・音楽",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "映画",
        "音楽",
        "ゲーム"
      ],
      "kanjiKeywords": [
        "映",
        "画",
        "音",
        "楽"
      ],
      "items": [
        {
          "id": "u2_l7_1",
          "type": "listen",
          "prompt": "映画",
          "furigana": "えいが",
          "romaji": "eiga",
          "english": "Movie / cinema",
          "audioText": "えいが",
          "options": [
            "Tempura",
            "Number one / most",
            "Movie / cinema",
            "Spicy food"
          ],
          "correctAnswer": "Movie / cinema"
        },
        {
          "id": "u2_l7_2",
          "type": "spell",
          "prompt": "映画",
          "furigana": "えいが",
          "romaji": "eiga",
          "english": "Build 'Movie / cinema'",
          "audioText": "えいが",
          "tileBank": [
            "ひ",
            "い",
            "こ",
            "え",
            "し",
            "を",
            "さ",
            "が"
          ],
          "correctAnswer": "えいが"
        },
        {
          "id": "u2_l7_3",
          "type": "cloze",
          "prompt": "私は音楽がすきです",
          "furigana": "わたしはおんがくがすきです",
          "romaji": "Watashi wa ongaku ga suki desu.",
          "english": "Fill in the blank with the correct particle for Music.",
          "audioText": "音楽",
          "clozeSentence": "これは音楽 {{BLANK}} す。",
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
          "id": "u2_l7_4",
          "type": "scramble",
          "prompt": "これは音楽です",
          "furigana": "これはおんがくです",
          "romaji": "Kore wa ongaku desu.",
          "english": "This is Music.",
          "audioText": "これは音楽です",
          "scrambleTokens": [
            "です",
            "音楽",
            "ではありません",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "音楽",
            "です"
          ],
          "correctAnswer": "これは音楽です"
        },
        {
          "id": "u2_l7_5",
          "type": "speak",
          "prompt": "ゲーム",
          "furigana": "ゲーム",
          "romaji": "geemu",
          "english": "Pronounce: Video games",
          "audioText": "ゲーム",
          "targetSpeech": "ゲーム",
          "options": [
            "Video games",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ゲーム"
        },
        {
          "id": "u2_l7_6",
          "type": "dictate",
          "prompt": "ゲームをお願いします",
          "furigana": "ゲームをおねがいします",
          "romaji": "geemu o onegaishimasu.",
          "english": "Video games, please.",
          "audioText": "ゲームをお願いします",
          "dictateTokens": [
            "お願いします",
            "ゲーム",
            "を",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "ゲーム",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ゲームをお願いします"
        },
        {
          "id": "u2_l7_7",
          "type": "match",
          "prompt": "映画・音楽・ゲーム・スポーツ",
          "furigana": "えいが・おんがく・ゲーム・スポーツ",
          "romaji": "eiga, ongaku, geemu, supootsu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えいが",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "映画",
              "right": "Movie / cinema",
              "furigana": "えいが",
              "romaji": "eiga"
            },
            {
              "id": "p_1",
              "left": "音楽",
              "right": "Music",
              "furigana": "おんがく",
              "romaji": "ongaku"
            },
            {
              "id": "p_2",
              "left": "ゲーム",
              "right": "Video games",
              "furigana": "ゲーム",
              "romaji": "geemu"
            },
            {
              "id": "p_3",
              "left": "スポーツ",
              "right": "Sports",
              "furigana": "スポーツ",
              "romaji": "supootsu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l7_8",
          "type": "dialogue",
          "prompt": "辛い食べ物は大丈夫ですか？",
          "dialogueSpeaker": "Ken",
          "dialoguePrompt": "辛い食べ物は大丈夫ですか？",
          "furigana": "辛い食べ物は大丈夫ですか？",
          "romaji": "Karai tabemono wa daijoubu desu ka?",
          "english": "Ken: Are you okay with spicy food?",
          "audioText": "辛い食べ物は大丈夫ですか？",
          "dialogueOptions": [
            "あまり好きじゃないですが、少しなら食べられます。",
            "はい、元気です",
            "はじめまして",
            "おやすみなさい"
          ],
          "options": [
            "あまり好きじゃないですが、少しなら食べられます。",
            "はい、元気です",
            "はじめまして",
            "おやすみなさい"
          ],
          "correctAnswer": "あまり好きじゃないですが、少しなら食べられます。"
        }
      ]
    },
    {
      "id": "u2_l8",
      "unitId": "unit_2",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Sports & Soccer / football",
      "titleJp": "スポーツ・サッカー",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "スポーツ",
        "サッカー",
        "野球"
      ],
      "kanjiKeywords": [
        "野",
        "球"
      ],
      "items": [
        {
          "id": "u2_l8_1",
          "type": "listen",
          "prompt": "スポーツ",
          "furigana": "スポーツ",
          "romaji": "supootsu",
          "english": "Sports",
          "audioText": "スポーツ",
          "options": [
            "Beer",
            "Interesting / amusing",
            "Movie / cinema",
            "Sports"
          ],
          "correctAnswer": "Sports"
        },
        {
          "id": "u2_l8_2",
          "type": "spell",
          "prompt": "スポーツ",
          "furigana": "スポーツ",
          "romaji": "supootsu",
          "english": "Build 'Sports'",
          "audioText": "スポーツ",
          "tileBank": [
            "も",
            "み",
            "ス",
            "ん",
            "ー",
            "と",
            "ツ",
            "ポ"
          ],
          "correctAnswer": "スポーツ"
        },
        {
          "id": "u2_l8_3",
          "type": "cloze",
          "prompt": "私はサッカーがすきです",
          "furigana": "わたしはサッカーがすきです",
          "romaji": "Watashi wa sakkaa ga suki desu.",
          "english": "Fill in the blank with the correct particle for Soccer / football.",
          "audioText": "サッカー",
          "clozeSentence": "これはサッカー {{BLANK}} す。",
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
          "id": "u2_l8_4",
          "type": "scramble",
          "prompt": "これはサッカーです",
          "furigana": "これはサッカーです",
          "romaji": "Kore wa sakkaa desu.",
          "english": "This is Soccer / football.",
          "audioText": "これはサッカーです",
          "scrambleTokens": [
            "です",
            "これは",
            "サッカー",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "サッカー",
            "です"
          ],
          "correctAnswer": "これはサッカーです"
        },
        {
          "id": "u2_l8_5",
          "type": "speak",
          "prompt": "野球",
          "furigana": "やきゅう",
          "romaji": "yakyuu",
          "english": "Pronounce: Baseball",
          "audioText": "やきゅう",
          "targetSpeech": "野球",
          "options": [
            "Baseball",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "野球"
        },
        {
          "id": "u2_l8_6",
          "type": "dictate",
          "prompt": "野球をお願いします",
          "furigana": "やきゅうをおねがいします",
          "romaji": "yakyuu o onegaishimasu.",
          "english": "Baseball, please.",
          "audioText": "野球をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "です",
            "野球",
            "を"
          ],
          "dictateSolution": [
            "野球",
            "を",
            "お願いします"
          ],
          "correctAnswer": "野球をお願いします"
        },
        {
          "id": "u2_l8_7",
          "type": "match",
          "prompt": "スポーツ・サッカー・野球・楽しい",
          "furigana": "スポーツ・サッカー・やきゅう・たのしい",
          "romaji": "supootsu, sakkaa, yakyuu, tanoshii",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "スポーツ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "スポーツ",
              "right": "Sports",
              "furigana": "スポーツ",
              "romaji": "supootsu"
            },
            {
              "id": "p_1",
              "left": "サッカー",
              "right": "Soccer / football",
              "furigana": "サッカー",
              "romaji": "sakkaa"
            },
            {
              "id": "p_2",
              "left": "野球",
              "right": "Baseball",
              "furigana": "やきゅう",
              "romaji": "yakyuu"
            },
            {
              "id": "p_3",
              "left": "楽しい",
              "right": "Fun / enjoyable",
              "furigana": "たのしい",
              "romaji": "tanoshii"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l8_8",
          "type": "dialogue",
          "prompt": "休みの日は何をして楽しんでいる？",
          "dialogueSpeaker": "Friend",
          "dialoguePrompt": "休みの日は何をして楽しんでいる？",
          "furigana": "休みの日は何をして楽しんでいる？",
          "romaji": "Yasumi no hi wa nani o shite tanoshinde iru?",
          "english": "Friend: What do you do for fun on days off?",
          "audioText": "休みの日は何をして楽しんでいる？",
          "dialogueOptions": [
            "音楽を聞いたりゲームをしたりします。",
            "こんにちは",
            "美味しいです",
            "ここは渋谷です"
          ],
          "options": [
            "音楽を聞いたりゲームをしたりします。",
            "こんにちは",
            "美味しいです",
            "ここは渋谷です"
          ],
          "correctAnswer": "音楽を聞いたりゲームをしたりします。"
        }
      ]
    },
    {
      "id": "u2_l9",
      "unitId": "unit_2",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Fun / enjoyable & Interesting / amusing",
      "titleJp": "楽しい・面白い",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "楽しい",
        "面白い",
        "つまらない"
      ],
      "kanjiKeywords": [
        "楽",
        "面",
        "白"
      ],
      "items": [
        {
          "id": "u2_l9_1",
          "type": "listen",
          "prompt": "楽しい",
          "furigana": "たのしい",
          "romaji": "tanoshii",
          "english": "Fun / enjoyable",
          "audioText": "たのしい",
          "options": [
            "Fun / enjoyable",
            "Sweet",
            "Disliked / hated",
            "Boring / dull"
          ],
          "correctAnswer": "Fun / enjoyable"
        },
        {
          "id": "u2_l9_2",
          "type": "spell",
          "prompt": "楽しい",
          "furigana": "たのしい",
          "romaji": "tanoshii",
          "english": "Build 'Fun / enjoyable'",
          "audioText": "たのしい",
          "tileBank": [
            "た",
            "と",
            "ち",
            "に",
            "り",
            "い",
            "し",
            "の"
          ],
          "correctAnswer": "たのしい"
        },
        {
          "id": "u2_l9_3",
          "type": "cloze",
          "prompt": "私は面白いがすきです",
          "furigana": "わたしはおもしろいがすきです",
          "romaji": "Watashi wa omoshiroi ga suki desu.",
          "english": "Fill in the blank with the correct particle for Interesting / amusing.",
          "audioText": "面白い",
          "clozeSentence": "これは面白い {{BLANK}} す。",
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
          "id": "u2_l9_4",
          "type": "scramble",
          "prompt": "これは面白いです",
          "furigana": "これはおもしろいです",
          "romaji": "Kore wa omoshiroi desu.",
          "english": "This is Interesting / amusing.",
          "audioText": "これは面白いです",
          "scrambleTokens": [
            "です",
            "ではありません",
            "これは",
            "面白い",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "面白い",
            "です"
          ],
          "correctAnswer": "これは面白いです"
        },
        {
          "id": "u2_l9_5",
          "type": "speak",
          "prompt": "つまらない",
          "furigana": "つまらない",
          "romaji": "tsumaranai",
          "english": "Pronounce: Boring / dull",
          "audioText": "つまらない",
          "targetSpeech": "つまらない",
          "options": [
            "Boring / dull",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "つまらない"
        },
        {
          "id": "u2_l9_6",
          "type": "dictate",
          "prompt": "つまらないをお願いします",
          "furigana": "つまらないをおねがいします",
          "romaji": "tsumaranai o onegaishimasu.",
          "english": "Boring / dull, please.",
          "audioText": "つまらないをお願いします",
          "dictateTokens": [
            "お願いします",
            "を",
            "ありがとう",
            "です",
            "つまらない"
          ],
          "dictateSolution": [
            "つまらない",
            "を",
            "お願いします"
          ],
          "correctAnswer": "つまらないをお願いします"
        },
        {
          "id": "u2_l9_7",
          "type": "match",
          "prompt": "楽しい・面白い・つまらない・見る",
          "furigana": "たのしい・おもしろい・つまらない・みる",
          "romaji": "tanoshii, omoshiroi, tsumaranai, miru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "たのしい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "楽しい",
              "right": "Fun / enjoyable",
              "furigana": "たのしい",
              "romaji": "tanoshii"
            },
            {
              "id": "p_1",
              "left": "面白い",
              "right": "Interesting / amusing",
              "furigana": "おもしろい",
              "romaji": "omoshiroi"
            },
            {
              "id": "p_2",
              "left": "つまらない",
              "right": "Boring / dull",
              "furigana": "つまらない",
              "romaji": "tsumaranai"
            },
            {
              "id": "p_3",
              "left": "見る",
              "right": "To see / watch",
              "furigana": "みる",
              "romaji": "miru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l9_8",
          "type": "dialogue",
          "prompt": "日本の食べ物で、何が一番好きですか？",
          "dialogueSpeaker": "Ken",
          "dialoguePrompt": "日本の食べ物で、何が一番好きですか？",
          "furigana": "日本の食べ物で、何が一番好きですか？",
          "romaji": "Nihon no tabemono de, nani ga ichiban suki desu ka?",
          "english": "Ken: Among Japanese foods, what do you like best?",
          "audioText": "日本の食べ物で、何が一番好きですか？",
          "dialogueOptions": [
            "ラーメンが一番好きです！",
            "さようなら",
            "私は学生です",
            "駅はどこですか"
          ],
          "options": [
            "ラーメンが一番好きです！",
            "さようなら",
            "私は学生です",
            "駅はどこですか"
          ],
          "correctAnswer": "ラーメンが一番好きです！"
        }
      ]
    },
    {
      "id": "u2_l10",
      "unitId": "unit_2",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "To see / watch & To listen / hear",
      "titleJp": "見る・聞く",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "見る",
        "聞く",
        "する"
      ],
      "kanjiKeywords": [
        "見",
        "聞"
      ],
      "items": [
        {
          "id": "u2_l10_1",
          "type": "listen",
          "prompt": "見る",
          "furigana": "みる",
          "romaji": "miru",
          "english": "To see / watch",
          "audioText": "みる",
          "options": [
            "To see / watch",
            "Anime / Japanese animation",
            "Not at all (with neg)",
            "Interesting / amusing"
          ],
          "correctAnswer": "To see / watch"
        },
        {
          "id": "u2_l10_2",
          "type": "spell",
          "prompt": "見る",
          "furigana": "みる",
          "romaji": "miru",
          "english": "Build 'To see / watch'",
          "audioText": "みる",
          "tileBank": [
            "ぬ",
            "ひ",
            "ね",
            "み",
            "る",
            "に",
            "や",
            "り"
          ],
          "correctAnswer": "みる"
        },
        {
          "id": "u2_l10_3",
          "type": "cloze",
          "prompt": "私は聞くがすきです",
          "furigana": "わたしはきくがすきです",
          "romaji": "Watashi wa kiku ga suki desu.",
          "english": "Fill in the blank with the correct particle for To listen / hear.",
          "audioText": "聞く",
          "clozeSentence": "これは聞く {{BLANK}} す。",
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
          "id": "u2_l10_4",
          "type": "scramble",
          "prompt": "これは聞くです",
          "furigana": "これはきくです",
          "romaji": "Kore wa kiku desu.",
          "english": "This is To listen / hear.",
          "audioText": "これは聞くです",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "これは",
            "です",
            "聞く"
          ],
          "scrambleSolution": [
            "これは",
            "聞く",
            "です"
          ],
          "correctAnswer": "これは聞くです"
        },
        {
          "id": "u2_l10_5",
          "type": "speak",
          "prompt": "する",
          "furigana": "する",
          "romaji": "suru",
          "english": "Pronounce: To do / play",
          "audioText": "する",
          "targetSpeech": "する",
          "options": [
            "To do / play",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "する"
        },
        {
          "id": "u2_l10_6",
          "type": "dictate",
          "prompt": "するをお願いします",
          "furigana": "するをおねがいします",
          "romaji": "suru o onegaishimasu.",
          "english": "To do / play, please.",
          "audioText": "するをお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "を",
            "ありがとう",
            "する"
          ],
          "dictateSolution": [
            "する",
            "を",
            "お願いします"
          ],
          "correctAnswer": "するをお願いします"
        },
        {
          "id": "u2_l10_7",
          "type": "match",
          "prompt": "見る・聞く・する・読書",
          "furigana": "みる・きく・する・どくしょ",
          "romaji": "miru, kiku, suru, dokusho",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "みる",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "見る",
              "right": "To see / watch",
              "furigana": "みる",
              "romaji": "miru"
            },
            {
              "id": "p_1",
              "left": "聞く",
              "right": "To listen / hear",
              "furigana": "きく",
              "romaji": "kiku"
            },
            {
              "id": "p_2",
              "left": "する",
              "right": "To do / play",
              "furigana": "する",
              "romaji": "suru"
            },
            {
              "id": "p_3",
              "left": "読書",
              "right": "Reading books",
              "furigana": "どくしょ",
              "romaji": "dokusho"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l10_8",
          "type": "dialogue",
          "prompt": "アニメを見るのは好き？",
          "dialogueSpeaker": "Sara",
          "dialoguePrompt": "アニメを見るのは好き？",
          "furigana": "アニメを見るのは好き？",
          "romaji": "Anime o miru no wa suki?",
          "english": "Sara: Do you like watching anime?",
          "audioText": "アニメを見るのは好き？",
          "dialogueOptions": [
            "うん、大好き！毎週見ているよ。",
            "いいえ、日本人です",
            "お腹が空きました",
            "ごちそうさまでした"
          ],
          "options": [
            "うん、大好き！毎週見ているよ。",
            "いいえ、日本人です",
            "お腹が空きました",
            "ごちそうさまでした"
          ],
          "correctAnswer": "うん、大好き！毎週見ているよ。"
        }
      ]
    },
    {
      "id": "u2_l11",
      "unitId": "unit_2",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Reading books & Travel / trips",
      "titleJp": "読書・旅行",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "読書",
        "旅行",
        "一番"
      ],
      "kanjiKeywords": [
        "読",
        "書",
        "旅",
        "行",
        "一",
        "番"
      ],
      "items": [
        {
          "id": "u2_l11_1",
          "type": "listen",
          "prompt": "読書",
          "furigana": "どくしょ",
          "romaji": "dokusho",
          "english": "Reading books",
          "audioText": "どくしょ",
          "options": [
            "Reading books",
            "Baseball",
            "Spicy / hot",
            "What kind of..."
          ],
          "correctAnswer": "Reading books"
        },
        {
          "id": "u2_l11_2",
          "type": "spell",
          "prompt": "読書",
          "furigana": "どくしょ",
          "romaji": "dokusho",
          "english": "Build 'Reading books'",
          "audioText": "どくしょ",
          "tileBank": [
            "そ",
            "く",
            "ど",
            "し",
            "も",
            "ょ",
            "め",
            "ゆ"
          ],
          "correctAnswer": "どくしょ"
        },
        {
          "id": "u2_l11_3",
          "type": "cloze",
          "prompt": "私は旅行がすきです",
          "furigana": "わたしはりょこうがすきです",
          "romaji": "Watashi wa ryokou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Travel / trips.",
          "audioText": "旅行",
          "clozeSentence": "これは旅行 {{BLANK}} す。",
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
          "id": "u2_l11_4",
          "type": "scramble",
          "prompt": "これは旅行です",
          "furigana": "これはりょこうです",
          "romaji": "Kore wa ryokou desu.",
          "english": "This is Travel / trips.",
          "audioText": "これは旅行です",
          "scrambleTokens": [
            "旅行",
            "これは",
            "ではありません",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "旅行",
            "です"
          ],
          "correctAnswer": "これは旅行です"
        },
        {
          "id": "u2_l11_5",
          "type": "speak",
          "prompt": "一番",
          "furigana": "いちばん",
          "romaji": "ichiban",
          "english": "Pronounce: Number one / most",
          "audioText": "いちばん",
          "targetSpeech": "一番",
          "options": [
            "Number one / most",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "一番"
        },
        {
          "id": "u2_l11_6",
          "type": "dictate",
          "prompt": "一番をお願いします",
          "furigana": "いちばんをおねがいします",
          "romaji": "ichiban o onegaishimasu.",
          "english": "Number one / most, please.",
          "audioText": "一番をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "です",
            "一番",
            "を"
          ],
          "dictateSolution": [
            "一番",
            "を",
            "お願いします"
          ],
          "correctAnswer": "一番をお願いします"
        },
        {
          "id": "u2_l11_7",
          "type": "match",
          "prompt": "読書・旅行・一番・とても",
          "furigana": "どくしょ・りょこう・いちばん・とても",
          "romaji": "dokusho, ryokou, ichiban, totemo",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "どくしょ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "読書",
              "right": "Reading books",
              "furigana": "どくしょ",
              "romaji": "dokusho"
            },
            {
              "id": "p_1",
              "left": "旅行",
              "right": "Travel / trips",
              "furigana": "りょこう",
              "romaji": "ryokou"
            },
            {
              "id": "p_2",
              "left": "一番",
              "right": "Number one / most",
              "furigana": "いちばん",
              "romaji": "ichiban"
            },
            {
              "id": "p_3",
              "left": "とても",
              "right": "Very / extremely",
              "furigana": "とても",
              "romaji": "totemo"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l11_8",
          "type": "dialogue",
          "prompt": "辛い食べ物は大丈夫ですか？",
          "dialogueSpeaker": "Ken",
          "dialoguePrompt": "辛い食べ物は大丈夫ですか？",
          "furigana": "辛い食べ物は大丈夫ですか？",
          "romaji": "Karai tabemono wa daijoubu desu ka?",
          "english": "Ken: Are you okay with spicy food?",
          "audioText": "辛い食べ物は大丈夫ですか？",
          "dialogueOptions": [
            "あまり好きじゃないですが、少しなら食べられます。",
            "はい、元気です",
            "はじめまして",
            "おやすみなさい"
          ],
          "options": [
            "あまり好きじゃないですが、少しなら食べられます。",
            "はい、元気です",
            "はじめまして",
            "おやすみなさい"
          ],
          "correctAnswer": "あまり好きじゃないですが、少しなら食べられます。"
        }
      ]
    },
    {
      "id": "u2_l12",
      "unitId": "unit_2",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Very / extremely & Not very / rarely (with neg)",
      "titleJp": "とても・あまり",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "とても",
        "あまり",
        "全然"
      ],
      "kanjiKeywords": [
        "全",
        "然"
      ],
      "items": [
        {
          "id": "u2_l12_1",
          "type": "listen",
          "prompt": "とても",
          "furigana": "とても",
          "romaji": "totemo",
          "english": "Very / extremely",
          "audioText": "とても",
          "options": [
            "Unpalatable / bad taste",
            "Very / extremely",
            "What",
            "Tempura"
          ],
          "correctAnswer": "Very / extremely"
        },
        {
          "id": "u2_l12_2",
          "type": "spell",
          "prompt": "とても",
          "furigana": "とても",
          "romaji": "totemo",
          "english": "Build 'Very / extremely'",
          "audioText": "とても",
          "tileBank": [
            "と",
            "わ",
            "ん",
            "こ",
            "さ",
            "も",
            "て",
            "よ"
          ],
          "correctAnswer": "とても"
        },
        {
          "id": "u2_l12_3",
          "type": "cloze",
          "prompt": "私はあまりがすきです",
          "furigana": "わたしはあまりがすきです",
          "romaji": "Watashi wa amari ga suki desu.",
          "english": "Fill in the blank with the correct particle for Not very / rarely (with neg).",
          "audioText": "あまり",
          "clozeSentence": "これはあまり {{BLANK}} す。",
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
          "id": "u2_l12_4",
          "type": "scramble",
          "prompt": "これはあまりです",
          "furigana": "これはあまりです",
          "romaji": "Kore wa amari desu.",
          "english": "This is Not very / rarely (with neg).",
          "audioText": "これはあまりです",
          "scrambleTokens": [
            "ではありません",
            "です",
            "それ",
            "これは",
            "あまり"
          ],
          "scrambleSolution": [
            "これは",
            "あまり",
            "です"
          ],
          "correctAnswer": "これはあまりです"
        },
        {
          "id": "u2_l12_5",
          "type": "speak",
          "prompt": "全然",
          "furigana": "ぜんぜん",
          "romaji": "zenzen",
          "english": "Pronounce: Not at all (with neg)",
          "audioText": "ぜんぜん",
          "targetSpeech": "全然",
          "options": [
            "Not at all (with neg)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "全然"
        },
        {
          "id": "u2_l12_6",
          "type": "dictate",
          "prompt": "全然をお願いします",
          "furigana": "ぜんぜんをおねがいします",
          "romaji": "zenzen o onegaishimasu.",
          "english": "Not at all (with neg), please.",
          "audioText": "全然をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "全然",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "全然",
            "を",
            "お願いします"
          ],
          "correctAnswer": "全然をお願いします"
        },
        {
          "id": "u2_l12_7",
          "type": "match",
          "prompt": "とても・あまり・全然・どんな",
          "furigana": "とても・あまり・ぜんぜん・どんな",
          "romaji": "totemo, amari, zenzen, donna",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "とても",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "とても",
              "right": "Very / extremely",
              "furigana": "とても",
              "romaji": "totemo"
            },
            {
              "id": "p_1",
              "left": "あまり",
              "right": "Not very / rarely (with neg)",
              "furigana": "あまり",
              "romaji": "amari"
            },
            {
              "id": "p_2",
              "left": "全然",
              "right": "Not at all (with neg)",
              "furigana": "ぜんぜん",
              "romaji": "zenzen"
            },
            {
              "id": "p_3",
              "left": "どんな",
              "right": "What kind of...",
              "furigana": "どんな",
              "romaji": "donna"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l12_8",
          "type": "dialogue",
          "prompt": "休みの日は何をして楽しんでいる？",
          "dialogueSpeaker": "Friend",
          "dialoguePrompt": "休みの日は何をして楽しんでいる？",
          "furigana": "休みの日は何をして楽しんでいる？",
          "romaji": "Yasumi no hi wa nani o shite tanoshinde iru?",
          "english": "Friend: What do you do for fun on days off?",
          "audioText": "休みの日は何をして楽しんでいる？",
          "dialogueOptions": [
            "音楽を聞いたりゲームをしたりします。",
            "こんにちは",
            "美味しいです",
            "ここは渋谷です"
          ],
          "options": [
            "音楽を聞いたりゲームをしたりします。",
            "こんにちは",
            "美味しいです",
            "ここは渋谷です"
          ],
          "correctAnswer": "音楽を聞いたりゲームをしたりします。"
        }
      ]
    },
    {
      "id": "u2_l13",
      "unitId": "unit_2",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "What kind of... & What",
      "titleJp": "どんな・何",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "どんな",
        "何",
        "料理"
      ],
      "kanjiKeywords": [
        "何",
        "料",
        "理"
      ],
      "items": [
        {
          "id": "u2_l13_1",
          "type": "listen",
          "prompt": "どんな",
          "furigana": "どんな",
          "romaji": "donna",
          "english": "What kind of...",
          "audioText": "どんな",
          "options": [
            "Japanese curry",
            "What kind of...",
            "Movie / cinema",
            "To listen / hear"
          ],
          "correctAnswer": "What kind of..."
        },
        {
          "id": "u2_l13_2",
          "type": "spell",
          "prompt": "どんな",
          "furigana": "どんな",
          "romaji": "donna",
          "english": "Build 'What kind of...'",
          "audioText": "どんな",
          "tileBank": [
            "り",
            "な",
            "ど",
            "ん",
            "ぬ",
            "ゆ",
            "も",
            "ち"
          ],
          "correctAnswer": "どんな"
        },
        {
          "id": "u2_l13_3",
          "type": "cloze",
          "prompt": "私は何がすきです",
          "furigana": "わたしはなにがすきです",
          "romaji": "Watashi wa nani ga suki desu.",
          "english": "Fill in the blank with the correct particle for What.",
          "audioText": "何",
          "clozeSentence": "これは何 {{BLANK}} す。",
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
          "id": "u2_l13_4",
          "type": "scramble",
          "prompt": "これは何です",
          "furigana": "これはなにです",
          "romaji": "Kore wa nani desu.",
          "english": "This is What.",
          "audioText": "これは何です",
          "scrambleTokens": [
            "それ",
            "これは",
            "ではありません",
            "です",
            "何"
          ],
          "scrambleSolution": [
            "これは",
            "何",
            "です"
          ],
          "correctAnswer": "これは何です"
        },
        {
          "id": "u2_l13_5",
          "type": "speak",
          "prompt": "料理",
          "furigana": "りょうり",
          "romaji": "ryouri",
          "english": "Pronounce: Cooking / cuisine",
          "audioText": "りょうり",
          "targetSpeech": "料理",
          "options": [
            "Cooking / cuisine",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "料理"
        },
        {
          "id": "u2_l13_6",
          "type": "dictate",
          "prompt": "料理をお願いします",
          "furigana": "りょうりをおねがいします",
          "romaji": "ryouri o onegaishimasu.",
          "english": "Cooking / cuisine, please.",
          "audioText": "料理をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "です",
            "料理",
            "お願いします"
          ],
          "dictateSolution": [
            "料理",
            "を",
            "お願いします"
          ],
          "correctAnswer": "料理をお願いします"
        },
        {
          "id": "u2_l13_7",
          "type": "match",
          "prompt": "どんな・何・料理・辛い料理",
          "furigana": "どんな・なに・りょうり・からいりょうり",
          "romaji": "donna, nani, ryouri, karai ryouri",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "どんな",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "どんな",
              "right": "What kind of...",
              "furigana": "どんな",
              "romaji": "donna"
            },
            {
              "id": "p_1",
              "left": "何",
              "right": "What",
              "furigana": "なに",
              "romaji": "nani"
            },
            {
              "id": "p_2",
              "left": "料理",
              "right": "Cooking / cuisine",
              "furigana": "りょうり",
              "romaji": "ryouri"
            },
            {
              "id": "p_3",
              "left": "辛い料理",
              "right": "Spicy food",
              "furigana": "からいりょうり",
              "romaji": "karai ryouri"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l13_8",
          "type": "dialogue",
          "prompt": "日本の食べ物で、何が一番好きですか？",
          "dialogueSpeaker": "Ken",
          "dialoguePrompt": "日本の食べ物で、何が一番好きですか？",
          "furigana": "日本の食べ物で、何が一番好きですか？",
          "romaji": "Nihon no tabemono de, nani ga ichiban suki desu ka?",
          "english": "Ken: Among Japanese foods, what do you like best?",
          "audioText": "日本の食べ物で、何が一番好きですか？",
          "dialogueOptions": [
            "ラーメンが一番好きです！",
            "さようなら",
            "私は学生です",
            "駅はどこですか"
          ],
          "options": [
            "ラーメンが一番好きです！",
            "さようなら",
            "私は学生です",
            "駅はどこですか"
          ],
          "correctAnswer": "ラーメンが一番好きです！"
        }
      ]
    },
    {
      "id": "u2_l14",
      "unitId": "unit_2",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Spicy food & Liked / fond of",
      "titleJp": "辛い料理・好き",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "辛い料理",
        "好き",
        "大好き"
      ],
      "kanjiKeywords": [
        "辛",
        "料",
        "理",
        "好",
        "大",
        "好"
      ],
      "items": [
        {
          "id": "u2_l14_1",
          "type": "listen",
          "prompt": "辛い料理",
          "furigana": "からいりょうり",
          "romaji": "karai ryouri",
          "english": "Spicy food",
          "audioText": "からいりょうり",
          "options": [
            "Sushi",
            "Soccer / football",
            "Spicy food",
            "What"
          ],
          "correctAnswer": "Spicy food"
        },
        {
          "id": "u2_l14_2",
          "type": "spell",
          "prompt": "好き",
          "furigana": "すき",
          "romaji": "suki",
          "english": "Build 'Liked / fond of'",
          "audioText": "すき",
          "tileBank": [
            "あ",
            "す",
            "ゆ",
            "き",
            "ろ",
            "の",
            "よ",
            "け"
          ],
          "correctAnswer": "すき"
        },
        {
          "id": "u2_l14_3",
          "type": "cloze",
          "prompt": "私は好きがすきです",
          "furigana": "わたしはすきがすきです",
          "romaji": "Watashi wa suki ga suki desu.",
          "english": "Fill in the blank with the correct particle for Liked / fond of.",
          "audioText": "好き",
          "clozeSentence": "これは好き {{BLANK}} す。",
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
          "id": "u2_l14_4",
          "type": "scramble",
          "prompt": "これは好きです",
          "furigana": "これはすきです",
          "romaji": "Kore wa suki desu.",
          "english": "This is Liked / fond of.",
          "audioText": "これは好きです",
          "scrambleTokens": [
            "です",
            "好き",
            "ではありません",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "好き",
            "です"
          ],
          "correctAnswer": "これは好きです"
        },
        {
          "id": "u2_l14_5",
          "type": "speak",
          "prompt": "大好き",
          "furigana": "だいすき",
          "romaji": "daisuki",
          "english": "Pronounce: Loved / favorite",
          "audioText": "だいすき",
          "targetSpeech": "大好き",
          "options": [
            "Loved / favorite",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "大好き"
        },
        {
          "id": "u2_l14_6",
          "type": "dictate",
          "prompt": "大好きをお願いします",
          "furigana": "だいすきをおねがいします",
          "romaji": "daisuki o onegaishimasu.",
          "english": "Loved / favorite, please.",
          "audioText": "大好きをお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "大好き",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "大好き",
            "を",
            "お願いします"
          ],
          "correctAnswer": "大好きをお願いします"
        },
        {
          "id": "u2_l14_7",
          "type": "match",
          "prompt": "辛い料理・好き・大好き・嫌い",
          "furigana": "からいりょうり・すき・だいすき・きらい",
          "romaji": "karai ryouri, suki, daisuki, kirai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "からいりょうり",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "辛い料理",
              "right": "Spicy food",
              "furigana": "からいりょうり",
              "romaji": "karai ryouri"
            },
            {
              "id": "p_1",
              "left": "好き",
              "right": "Liked / fond of",
              "furigana": "すき",
              "romaji": "suki"
            },
            {
              "id": "p_2",
              "left": "大好き",
              "right": "Loved / favorite",
              "furigana": "だいすき",
              "romaji": "daisuki"
            },
            {
              "id": "p_3",
              "left": "嫌い",
              "right": "Disliked / hated",
              "furigana": "きらい",
              "romaji": "kirai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l14_8",
          "type": "dialogue",
          "prompt": "アニメを見るのは好き？",
          "dialogueSpeaker": "Sara",
          "dialoguePrompt": "アニメを見るのは好き？",
          "furigana": "アニメを見るのは好き？",
          "romaji": "Anime o miru no wa suki?",
          "english": "Sara: Do you like watching anime?",
          "audioText": "アニメを見るのは好き？",
          "dialogueOptions": [
            "うん、大好き！毎週見ているよ。",
            "いいえ、日本人です",
            "お腹が空きました",
            "ごちそうさまでした"
          ],
          "options": [
            "うん、大好き！毎週見ているよ。",
            "いいえ、日本人です",
            "お腹が空きました",
            "ごちそうさまでした"
          ],
          "correctAnswer": "うん、大好き！毎週見ているよ。"
        }
      ]
    },
    {
      "id": "u2_l15",
      "unitId": "unit_2",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 2 Master Exam",
      "iconType": "test",
      "title": "Unit 2 Master Exam",
      "titleJp": "第2週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "嫌い",
        "寿司",
        "ラーメン"
      ],
      "kanjiKeywords": [
        "嫌",
        "寿",
        "司"
      ],
      "items": [
        {
          "id": "u2_l15_1",
          "type": "listen",
          "prompt": "嫌い",
          "furigana": "きらい",
          "romaji": "kirai",
          "english": "Disliked / hated",
          "audioText": "きらい",
          "options": [
            "Disliked / hated",
            "Boring / dull",
            "To do / play",
            "Movie / cinema"
          ],
          "correctAnswer": "Disliked / hated"
        },
        {
          "id": "u2_l15_2",
          "type": "spell",
          "prompt": "嫌い",
          "furigana": "きらい",
          "romaji": "kirai",
          "english": "Build 'Disliked / hated'",
          "audioText": "きらい",
          "tileBank": [
            "き",
            "わ",
            "よ",
            "ち",
            "い",
            "ん",
            "な",
            "ら"
          ],
          "correctAnswer": "きらい"
        },
        {
          "id": "u2_l15_3",
          "type": "cloze",
          "prompt": "私は寿司がすきです",
          "furigana": "わたしはすしがすきです",
          "romaji": "Watashi wa sushi ga suki desu.",
          "english": "Fill in the blank with the correct particle for Sushi.",
          "audioText": "寿司",
          "clozeSentence": "私は寿司 {{BLANK}} 好きです。",
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
          "id": "u2_l15_4",
          "type": "scramble",
          "prompt": "これは寿司です",
          "furigana": "これはすしです",
          "romaji": "Kore wa sushi desu.",
          "english": "This is Sushi.",
          "audioText": "これは寿司です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "です",
            "それ",
            "寿司"
          ],
          "scrambleSolution": [
            "これは",
            "寿司",
            "です"
          ],
          "correctAnswer": "これは寿司です"
        },
        {
          "id": "u2_l15_5",
          "type": "speak",
          "prompt": "ラーメン",
          "furigana": "ラーメン",
          "romaji": "raamen",
          "english": "Pronounce: Ramen noodles",
          "audioText": "ラーメン",
          "targetSpeech": "ラーメン",
          "options": [
            "Ramen noodles",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ラーメン"
        },
        {
          "id": "u2_l15_6",
          "type": "dictate",
          "prompt": "ラーメンをお願いします",
          "furigana": "ラーメンをおねがいします",
          "romaji": "raamen o onegaishimasu.",
          "english": "Ramen noodles, please.",
          "audioText": "ラーメンをお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "を",
            "ラーメン",
            "です"
          ],
          "dictateSolution": [
            "ラーメン",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ラーメンをお願いします"
        },
        {
          "id": "u2_l15_7",
          "type": "match",
          "prompt": "嫌い・寿司・ラーメン・天ぷら",
          "furigana": "きらい・すし・ラーメン・てんぷら",
          "romaji": "kirai, sushi, raamen, tenpura",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "きらい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "嫌い",
              "right": "Disliked / hated",
              "furigana": "きらい",
              "romaji": "kirai"
            },
            {
              "id": "p_1",
              "left": "寿司",
              "right": "Sushi",
              "furigana": "すし",
              "romaji": "sushi"
            },
            {
              "id": "p_2",
              "left": "ラーメン",
              "right": "Ramen noodles",
              "furigana": "ラーメン",
              "romaji": "raamen"
            },
            {
              "id": "p_3",
              "left": "天ぷら",
              "right": "Tempura",
              "furigana": "てんぷら",
              "romaji": "tenpura"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u2_l15_8",
          "type": "dialogue",
          "prompt": "辛い食べ物は大丈夫ですか？",
          "dialogueSpeaker": "Ken",
          "dialoguePrompt": "辛い食べ物は大丈夫ですか？",
          "furigana": "辛い食べ物は大丈夫ですか？",
          "romaji": "Karai tabemono wa daijoubu desu ka?",
          "english": "Ken: Are you okay with spicy food?",
          "audioText": "辛い食べ物は大丈夫ですか？",
          "dialogueOptions": [
            "あまり好きじゃないですが、少しなら食べられます。",
            "はい、元気です",
            "はじめまして",
            "おやすみなさい"
          ],
          "options": [
            "あまり好きじゃないですが、少しなら食べられます。",
            "はい、元気です",
            "はじめまして",
            "おやすみなさい"
          ],
          "correctAnswer": "あまり好きじゃないですが、少しなら食べられます。"
        }
      ]
    }
  ],
  "revisionGate": {
    "id": "gate_unit_2",
    "unitId": "unit_2",
    "title": "Unit 2 Mastery Checkpoint",
    "titleJp": "第2週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u2_l1_1",
        "type": "listen",
        "prompt": "好き",
        "furigana": "すき",
        "romaji": "suki",
        "english": "Liked / fond of",
        "audioText": "すき",
        "options": [
          "Anime / Japanese animation",
          "Pizza",
          "Liked / fond of",
          "To see / watch"
        ],
        "correctAnswer": "Liked / fond of"
      },
      {
        "id": "u2_l1_2",
        "type": "spell",
        "prompt": "好き",
        "furigana": "すき",
        "romaji": "suki",
        "english": "Build 'Liked / fond of'",
        "audioText": "すき",
        "tileBank": [
          "う",
          "む",
          "き",
          "す",
          "ん",
          "か",
          "の",
          "ひ"
        ],
        "correctAnswer": "すき"
      },
      {
        "id": "u2_l3_1",
        "type": "listen",
        "prompt": "カレー",
        "furigana": "カレー",
        "romaji": "karee",
        "english": "Japanese curry",
        "audioText": "カレー",
        "options": [
          "Music",
          "Japanese curry",
          "Loved / favorite",
          "Tempura"
        ],
        "correctAnswer": "Japanese curry"
      },
      {
        "id": "u2_l3_2",
        "type": "spell",
        "prompt": "カレー",
        "furigana": "カレー",
        "romaji": "karee",
        "english": "Build 'Japanese curry'",
        "audioText": "カレー",
        "tileBank": [
          "カ",
          "つ",
          "い",
          "ろ",
          "あ",
          "レ",
          "ん",
          "ー"
        ],
        "correctAnswer": "カレー"
      },
      {
        "id": "u2_l5_1",
        "type": "listen",
        "prompt": "お茶",
        "furigana": "おちゃ",
        "romaji": "ocha",
        "english": "Green tea",
        "audioText": "おちゃ",
        "options": [
          "Green tea",
          "Spicy food",
          "Very / extremely",
          "Sports"
        ],
        "correctAnswer": "Green tea"
      },
      {
        "id": "u2_l5_2",
        "type": "spell",
        "prompt": "お茶",
        "furigana": "おちゃ",
        "romaji": "ocha",
        "english": "Build 'Green tea'",
        "audioText": "おちゃ",
        "tileBank": [
          "ぬ",
          "さ",
          "ま",
          "お",
          "き",
          "ゃ",
          "ふ",
          "ち"
        ],
        "correctAnswer": "おちゃ"
      },
      {
        "id": "u2_l7_1",
        "type": "listen",
        "prompt": "映画",
        "furigana": "えいが",
        "romaji": "eiga",
        "english": "Movie / cinema",
        "audioText": "えいが",
        "options": [
          "Tempura",
          "Number one / most",
          "Movie / cinema",
          "Spicy food"
        ],
        "correctAnswer": "Movie / cinema"
      },
      {
        "id": "u2_l7_2",
        "type": "spell",
        "prompt": "映画",
        "furigana": "えいが",
        "romaji": "eiga",
        "english": "Build 'Movie / cinema'",
        "audioText": "えいが",
        "tileBank": [
          "ひ",
          "い",
          "こ",
          "え",
          "し",
          "を",
          "さ",
          "が"
        ],
        "correctAnswer": "えいが"
      },
      {
        "id": "u2_l9_1",
        "type": "listen",
        "prompt": "楽しい",
        "furigana": "たのしい",
        "romaji": "tanoshii",
        "english": "Fun / enjoyable",
        "audioText": "たのしい",
        "options": [
          "Fun / enjoyable",
          "Sweet",
          "Disliked / hated",
          "Boring / dull"
        ],
        "correctAnswer": "Fun / enjoyable"
      },
      {
        "id": "u2_l9_2",
        "type": "spell",
        "prompt": "楽しい",
        "furigana": "たのしい",
        "romaji": "tanoshii",
        "english": "Build 'Fun / enjoyable'",
        "audioText": "たのしい",
        "tileBank": [
          "た",
          "と",
          "ち",
          "に",
          "り",
          "い",
          "し",
          "の"
        ],
        "correctAnswer": "たのしい"
      },
      {
        "id": "u2_l11_1",
        "type": "listen",
        "prompt": "読書",
        "furigana": "どくしょ",
        "romaji": "dokusho",
        "english": "Reading books",
        "audioText": "どくしょ",
        "options": [
          "Reading books",
          "Baseball",
          "Spicy / hot",
          "What kind of..."
        ],
        "correctAnswer": "Reading books"
      },
      {
        "id": "u2_l11_2",
        "type": "spell",
        "prompt": "読書",
        "furigana": "どくしょ",
        "romaji": "dokusho",
        "english": "Build 'Reading books'",
        "audioText": "どくしょ",
        "tileBank": [
          "そ",
          "く",
          "ど",
          "し",
          "も",
          "ょ",
          "め",
          "ゆ"
        ],
        "correctAnswer": "どくしょ"
      }
    ]
  }
};
