import type { DojoUnit } from "../../models/dojo.model";

export const unit17: DojoUnit = {
  "id": "unit_17",
  "unitNumber": 17,
  "title": "Japanese Traditions & Festivals",
  "titleJp": "伝統行事と祭り",
  "description": "Appreciate cultural rituals, shrine visits (Sanpai), tea ceremony, seasonal festivals, and passive descriptions.",
  "icon": "⛩️",
  "themeColor": "#D97706",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u17_l1",
      "unitId": "unit_17",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Festival & Shinto shrine",
      "titleJp": "祭り・神社",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "祭り",
        "神社",
        "寺"
      ],
      "kanjiKeywords": [
        "祭",
        "神",
        "社",
        "寺"
      ],
      "items": [
        {
          "id": "u17_l1_1",
          "type": "listen",
          "prompt": "祭り",
          "furigana": "まつり",
          "romaji": "matsuri",
          "english": "Festival",
          "audioText": "まつり",
          "options": [
            "Confirming Worship / paying respects at shrine",
            "Confirming Obon ancestral holiday",
            "Confirming Festival",
            "Festival"
          ],
          "correctAnswer": "Festival"
        },
        {
          "id": "u17_l1_2",
          "type": "spell",
          "prompt": "祭り",
          "furigana": "まつり",
          "romaji": "matsuri",
          "english": "Build 'Festival'",
          "audioText": "まつり",
          "tileBank": [
            "の",
            "み",
            "な",
            "つ",
            "わ",
            "り",
            "も",
            "ま"
          ],
          "correctAnswer": "まつり"
        },
        {
          "id": "u17_l1_3",
          "type": "cloze",
          "prompt": "私は神社がすきです",
          "furigana": "わたしはじんじゃがすきです",
          "romaji": "Watashi wa jinja ga suki desu.",
          "english": "Fill in the blank with the correct particle for Shinto shrine.",
          "audioText": "神社",
          "clozeSentence": "これは神社 {{BLANK}} す。",
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
          "id": "u17_l1_4",
          "type": "scramble",
          "prompt": "これは神社です",
          "furigana": "これはじんじゃです",
          "romaji": "Kore wa jinja desu.",
          "english": "This is Shinto shrine.",
          "audioText": "これは神社です",
          "scrambleTokens": [
            "これは",
            "神社",
            "それ",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "神社",
            "です"
          ],
          "correctAnswer": "これは神社です"
        },
        {
          "id": "u17_l1_5",
          "type": "speak",
          "prompt": "寺",
          "furigana": "てら",
          "romaji": "tera",
          "english": "Pronounce: Buddhist temple",
          "audioText": "てら",
          "targetSpeech": "寺",
          "options": [
            "Buddhist temple",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "寺"
        },
        {
          "id": "u17_l1_6",
          "type": "dictate",
          "prompt": "寺をお願いします",
          "furigana": "てらをおねがいします",
          "romaji": "tera o onegaishimasu.",
          "english": "Buddhist temple, please.",
          "audioText": "寺をお願いします",
          "dictateTokens": [
            "お願いします",
            "寺",
            "を",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "寺",
            "を",
            "お願いします"
          ],
          "correctAnswer": "寺をお願いします"
        },
        {
          "id": "u17_l1_7",
          "type": "match",
          "prompt": "祭り・神社・寺・参拝",
          "furigana": "まつり・じんじゃ・てら・さんぱい",
          "romaji": "matsuri, jinja, tera, sanpai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "まつり",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "祭り",
              "right": "Festival",
              "furigana": "まつり",
              "romaji": "matsuri"
            },
            {
              "id": "p_1",
              "left": "神社",
              "right": "Shinto shrine",
              "furigana": "じんじゃ",
              "romaji": "jinja"
            },
            {
              "id": "p_2",
              "left": "寺",
              "right": "Buddhist temple",
              "furigana": "てら",
              "romaji": "tera"
            },
            {
              "id": "p_3",
              "left": "参拝",
              "right": "Worship / paying respects at shrine",
              "furigana": "さんぱい",
              "romaji": "sanpai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l1_8",
          "type": "dialogue",
          "prompt": "祭りについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "祭りについて教えていただけますか？",
          "furigana": "祭りについて教えていただけますか？",
          "romaji": "matsuri ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Festival?",
          "audioText": "祭りについて教えていただけますか？",
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
      "id": "u17_l2",
      "unitId": "unit_17",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Worship / paying respects at shrine & Tradition / heritage",
      "titleJp": "参拝・伝統",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "参拝",
        "伝統",
        "文化"
      ],
      "kanjiKeywords": [
        "参",
        "拝",
        "伝",
        "統",
        "文",
        "化"
      ],
      "items": [
        {
          "id": "u17_l2_1",
          "type": "listen",
          "prompt": "参拝",
          "furigana": "さんぱい",
          "romaji": "sanpai",
          "english": "Worship / paying respects at shrine",
          "audioText": "さんぱい",
          "options": [
            "Worship / paying respects at shrine",
            "Shinto shrine",
            "Confirming Tradition / heritage",
            "Festival"
          ],
          "correctAnswer": "Worship / paying respects at shrine"
        },
        {
          "id": "u17_l2_2",
          "type": "spell",
          "prompt": "参拝",
          "furigana": "さんぱい",
          "romaji": "sanpai",
          "english": "Build 'Worship / paying respects at shrine'",
          "audioText": "さんぱい",
          "tileBank": [
            "き",
            "ち",
            "い",
            "ん",
            "ぱ",
            "つ",
            "さ",
            "ほ"
          ],
          "correctAnswer": "さんぱい"
        },
        {
          "id": "u17_l2_3",
          "type": "cloze",
          "prompt": "私は伝統がすきです",
          "furigana": "わたしはでんとうがすきです",
          "romaji": "Watashi wa dentou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Tradition / heritage.",
          "audioText": "伝統",
          "clozeSentence": "これは伝統 {{BLANK}} す。",
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
          "id": "u17_l2_4",
          "type": "scramble",
          "prompt": "これは伝統です",
          "furigana": "これはでんとうです",
          "romaji": "Kore wa dentou desu.",
          "english": "This is Tradition / heritage.",
          "audioText": "これは伝統です",
          "scrambleTokens": [
            "それ",
            "伝統",
            "ではありません",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "伝統",
            "です"
          ],
          "correctAnswer": "これは伝統です"
        },
        {
          "id": "u17_l2_5",
          "type": "speak",
          "prompt": "文化",
          "furigana": "ぶんか",
          "romaji": "bunka",
          "english": "Pronounce: Culture",
          "audioText": "ぶんか",
          "targetSpeech": "文化",
          "options": [
            "Culture",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "文化"
        },
        {
          "id": "u17_l2_6",
          "type": "dictate",
          "prompt": "文化をお願いします",
          "furigana": "ぶんかをおねがいします",
          "romaji": "bunka o onegaishimasu.",
          "english": "Culture, please.",
          "audioText": "文化をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "お願いします",
            "文化",
            "です"
          ],
          "dictateSolution": [
            "文化",
            "を",
            "お願いします"
          ],
          "correctAnswer": "文化をお願いします"
        },
        {
          "id": "u17_l2_7",
          "type": "match",
          "prompt": "参拝・伝統・文化・茶道",
          "furigana": "さんぱい・でんとう・ぶんか・さどう",
          "romaji": "sanpai, dentou, bunka, sadou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さんぱい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "参拝",
              "right": "Worship / paying respects at shrine",
              "furigana": "さんぱい",
              "romaji": "sanpai"
            },
            {
              "id": "p_1",
              "left": "伝統",
              "right": "Tradition / heritage",
              "furigana": "でんとう",
              "romaji": "dentou"
            },
            {
              "id": "p_2",
              "left": "文化",
              "right": "Culture",
              "furigana": "ぶんか",
              "romaji": "bunka"
            },
            {
              "id": "p_3",
              "left": "茶道",
              "right": "Tea ceremony",
              "furigana": "さどう",
              "romaji": "sadou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l2_8",
          "type": "dialogue",
          "prompt": "神社の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "神社の準備はできていますか？",
          "furigana": "神社の準備はできていますか？",
          "romaji": "jinja no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Shinto shrine ready?",
          "audioText": "神社の準備はできていますか？",
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
      "id": "u17_l3",
      "unitId": "unit_17",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Tea ceremony & Traditional kimono",
      "titleJp": "茶道・着物",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "茶道",
        "着物",
        "神輿"
      ],
      "kanjiKeywords": [
        "茶",
        "道",
        "着",
        "物",
        "神",
        "輿"
      ],
      "items": [
        {
          "id": "u17_l3_1",
          "type": "listen",
          "prompt": "茶道",
          "furigana": "さどう",
          "romaji": "sadou",
          "english": "Tea ceremony",
          "audioText": "さどう",
          "options": [
            "Shinto shrine",
            "Confirming Worship / paying respects at shrine",
            "Festival",
            "Tea ceremony"
          ],
          "correctAnswer": "Tea ceremony"
        },
        {
          "id": "u17_l3_2",
          "type": "spell",
          "prompt": "茶道",
          "furigana": "さどう",
          "romaji": "sadou",
          "english": "Build 'Tea ceremony'",
          "audioText": "さどう",
          "tileBank": [
            "ど",
            "ひ",
            "に",
            "さ",
            "れ",
            "め",
            "ま",
            "う"
          ],
          "correctAnswer": "さどう"
        },
        {
          "id": "u17_l3_3",
          "type": "cloze",
          "prompt": "私は着物がすきです",
          "furigana": "わたしはきものがすきです",
          "romaji": "Watashi wa kimono ga suki desu.",
          "english": "Fill in the blank with the correct particle for Traditional kimono.",
          "audioText": "着物",
          "clozeSentence": "これは着物 {{BLANK}} す。",
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
          "id": "u17_l3_4",
          "type": "scramble",
          "prompt": "これは着物です",
          "furigana": "これはきものです",
          "romaji": "Kore wa kimono desu.",
          "english": "This is Traditional kimono.",
          "audioText": "これは着物です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "それ",
            "着物",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "着物",
            "です"
          ],
          "correctAnswer": "これは着物です"
        },
        {
          "id": "u17_l3_5",
          "type": "speak",
          "prompt": "神輿",
          "furigana": "みこし",
          "romaji": "mikoshi",
          "english": "Pronounce: Portable shrine carried in festivals",
          "audioText": "みこし",
          "targetSpeech": "神輿",
          "options": [
            "Portable shrine carried in festivals",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "神輿"
        },
        {
          "id": "u17_l3_6",
          "type": "dictate",
          "prompt": "神輿をお願いします",
          "furigana": "みこしをおねがいします",
          "romaji": "mikoshi o onegaishimasu.",
          "english": "Portable shrine carried in festivals, please.",
          "audioText": "神輿をお願いします",
          "dictateTokens": [
            "神輿",
            "お願いします",
            "を",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "神輿",
            "を",
            "お願いします"
          ],
          "correctAnswer": "神輿をお願いします"
        },
        {
          "id": "u17_l3_7",
          "type": "match",
          "prompt": "茶道・着物・神輿・お盆",
          "furigana": "さどう・きもの・みこし・おぼん",
          "romaji": "sadou, kimono, mikoshi, obon",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さどう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "茶道",
              "right": "Tea ceremony",
              "furigana": "さどう",
              "romaji": "sadou"
            },
            {
              "id": "p_1",
              "left": "着物",
              "right": "Traditional kimono",
              "furigana": "きもの",
              "romaji": "kimono"
            },
            {
              "id": "p_2",
              "left": "神輿",
              "right": "Portable shrine carried in festivals",
              "furigana": "みこし",
              "romaji": "mikoshi"
            },
            {
              "id": "p_3",
              "left": "お盆",
              "right": "Obon ancestral holiday",
              "furigana": "おぼん",
              "romaji": "obon"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l3_8",
          "type": "dialogue",
          "prompt": "寺についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "寺についてどう思われますか？",
          "furigana": "寺についてどう思われますか？",
          "romaji": "tera ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Buddhist temple?",
          "audioText": "寺についてどう思われますか？",
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
      "id": "u17_l4",
      "unitId": "unit_17",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Obon ancestral holiday & First shrine visit of New Year",
      "titleJp": "お盆・初詣",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "お盆",
        "初詣",
        "縁起"
      ],
      "kanjiKeywords": [
        "盆",
        "初",
        "詣",
        "縁",
        "起"
      ],
      "items": [
        {
          "id": "u17_l4_1",
          "type": "listen",
          "prompt": "お盆",
          "furigana": "おぼん",
          "romaji": "obon",
          "english": "Obon ancestral holiday",
          "audioText": "おぼん",
          "options": [
            "Obon ancestral holiday",
            "Confirming Tea ceremony",
            "Confirming Shinto shrine",
            "Omen / good fortune"
          ],
          "correctAnswer": "Obon ancestral holiday"
        },
        {
          "id": "u17_l4_2",
          "type": "spell",
          "prompt": "お盆",
          "furigana": "おぼん",
          "romaji": "obon",
          "english": "Build 'Obon ancestral holiday'",
          "audioText": "おぼん",
          "tileBank": [
            "み",
            "て",
            "ぼ",
            "さ",
            "の",
            "お",
            "ん",
            "も"
          ],
          "correctAnswer": "おぼん"
        },
        {
          "id": "u17_l4_3",
          "type": "cloze",
          "prompt": "私は初詣がすきです",
          "furigana": "わたしははつもうでがすきです",
          "romaji": "Watashi wa hatsumoude ga suki desu.",
          "english": "Fill in the blank with the correct particle for First shrine visit of New Year.",
          "audioText": "初詣",
          "clozeSentence": "これは初詣 {{BLANK}} す。",
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
          "id": "u17_l4_4",
          "type": "scramble",
          "prompt": "これは初詣です",
          "furigana": "これははつもうでです",
          "romaji": "Kore wa hatsumoude desu.",
          "english": "This is First shrine visit of New Year.",
          "audioText": "これは初詣です",
          "scrambleTokens": [
            "初詣",
            "それ",
            "これは",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "初詣",
            "です"
          ],
          "correctAnswer": "これは初詣です"
        },
        {
          "id": "u17_l4_5",
          "type": "speak",
          "prompt": "縁起",
          "furigana": "えんぎ",
          "romaji": "engi",
          "english": "Pronounce: Omen / good fortune",
          "audioText": "えんぎ",
          "targetSpeech": "縁起",
          "options": [
            "Omen / good fortune",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "縁起"
        },
        {
          "id": "u17_l4_6",
          "type": "dictate",
          "prompt": "縁起をお願いします",
          "furigana": "えんぎをおねがいします",
          "romaji": "engi o onegaishimasu.",
          "english": "Omen / good fortune, please.",
          "audioText": "縁起をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "縁起",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "縁起",
            "を",
            "お願いします"
          ],
          "correctAnswer": "縁起をお願いします"
        },
        {
          "id": "u17_l4_7",
          "type": "match",
          "prompt": "お盆・初詣・縁起・歴史",
          "furigana": "おぼん・はつもうで・えんぎ・れきし",
          "romaji": "obon, hatsumoude, engi, rekishi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おぼん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "お盆",
              "right": "Obon ancestral holiday",
              "furigana": "おぼん",
              "romaji": "obon"
            },
            {
              "id": "p_1",
              "left": "初詣",
              "right": "First shrine visit of New Year",
              "furigana": "はつもうで",
              "romaji": "hatsumoude"
            },
            {
              "id": "p_2",
              "left": "縁起",
              "right": "Omen / good fortune",
              "furigana": "えんぎ",
              "romaji": "engi"
            },
            {
              "id": "p_3",
              "left": "歴史",
              "right": "History",
              "furigana": "れきし",
              "romaji": "rekishi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l4_8",
          "type": "dialogue",
          "prompt": "次は参拝に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は参拝に進みましょう。",
          "furigana": "次は参拝に進みましょう。",
          "romaji": "Tsugi wa sanpai ni susumimashou.",
          "english": "Speaker: Let's proceed to Worship / paying respects at shrine next.",
          "audioText": "次は参拝に進みましょう。",
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
      "id": "u17_l5",
      "unitId": "unit_17",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "History & To inherit / pass down",
      "titleJp": "歴史・受け継ぐ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "歴史",
        "受け継ぐ",
        "儀式"
      ],
      "kanjiKeywords": [
        "歴",
        "史",
        "受",
        "継",
        "儀",
        "式"
      ],
      "items": [
        {
          "id": "u17_l5_1",
          "type": "listen",
          "prompt": "歴史",
          "furigana": "れきし",
          "romaji": "rekishi",
          "english": "History",
          "audioText": "れきし",
          "options": [
            "Omen / good fortune",
            "Confirming Festival",
            "History",
            "Ceremony / rite"
          ],
          "correctAnswer": "History"
        },
        {
          "id": "u17_l5_2",
          "type": "spell",
          "prompt": "歴史",
          "furigana": "れきし",
          "romaji": "rekishi",
          "english": "Build 'History'",
          "audioText": "れきし",
          "tileBank": [
            "の",
            "き",
            "も",
            "を",
            "れ",
            "こ",
            "ら",
            "し"
          ],
          "correctAnswer": "れきし"
        },
        {
          "id": "u17_l5_3",
          "type": "cloze",
          "prompt": "私は受け継ぐがすきです",
          "furigana": "わたしはうけつぐがすきです",
          "romaji": "Watashi wa uketsugu ga suki desu.",
          "english": "Fill in the blank with the correct particle for To inherit / pass down.",
          "audioText": "受け継ぐ",
          "clozeSentence": "これは受け継ぐ {{BLANK}} す。",
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
          "id": "u17_l5_4",
          "type": "scramble",
          "prompt": "これは受け継ぐです",
          "furigana": "これはうけつぐです",
          "romaji": "Kore wa uketsugu desu.",
          "english": "This is To inherit / pass down.",
          "audioText": "これは受け継ぐです",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "これは",
            "受け継ぐ"
          ],
          "scrambleSolution": [
            "これは",
            "受け継ぐ",
            "です"
          ],
          "correctAnswer": "これは受け継ぐです"
        },
        {
          "id": "u17_l5_5",
          "type": "speak",
          "prompt": "儀式",
          "furigana": "ぎしき",
          "romaji": "gishiki",
          "english": "Pronounce: Ceremony / rite",
          "audioText": "ぎしき",
          "targetSpeech": "儀式",
          "options": [
            "Ceremony / rite",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "儀式"
        },
        {
          "id": "u17_l5_6",
          "type": "dictate",
          "prompt": "儀式をお願いします",
          "furigana": "ぎしきをおねがいします",
          "romaji": "gishiki o onegaishimasu.",
          "english": "Ceremony / rite, please.",
          "audioText": "儀式をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "です",
            "を",
            "儀式"
          ],
          "dictateSolution": [
            "儀式",
            "を",
            "お願いします"
          ],
          "correctAnswer": "儀式をお願いします"
        },
        {
          "id": "u17_l5_7",
          "type": "match",
          "prompt": "歴史・受け継ぐ・儀式・祭りの確認",
          "furigana": "れきし・うけつぐ・ぎしき・まつりのかくにん",
          "romaji": "rekishi, uketsugu, gishiki, matsuri no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "れきし",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "歴史",
              "right": "History",
              "furigana": "れきし",
              "romaji": "rekishi"
            },
            {
              "id": "p_1",
              "left": "受け継ぐ",
              "right": "To inherit / pass down",
              "furigana": "うけつぐ",
              "romaji": "uketsugu"
            },
            {
              "id": "p_2",
              "left": "儀式",
              "right": "Ceremony / rite",
              "furigana": "ぎしき",
              "romaji": "gishiki"
            },
            {
              "id": "p_3",
              "left": "祭りの確認",
              "right": "Confirming Festival",
              "furigana": "まつりのかくにん",
              "romaji": "matsuri no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l5_8",
          "type": "dialogue",
          "prompt": "祭りについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "祭りについて教えていただけますか？",
          "furigana": "祭りについて教えていただけますか？",
          "romaji": "matsuri ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Festival?",
          "audioText": "祭りについて教えていただけますか？",
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
      "id": "u17_l6",
      "unitId": "unit_17",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Festival & Confirming Shinto shrine",
      "titleJp": "祭りの確認・神社の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "祭りの確認",
        "神社の確認",
        "寺の確認"
      ],
      "kanjiKeywords": [
        "祭",
        "確",
        "認",
        "神",
        "社",
        "確",
        "認",
        "寺",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u17_l6_1",
          "type": "listen",
          "prompt": "祭りの確認",
          "furigana": "まつりのかくにん",
          "romaji": "matsuri no kakunin",
          "english": "Confirming Festival",
          "audioText": "まつりのかくにん",
          "options": [
            "Confirming Festival",
            "Confirming Buddhist temple",
            "Confirming Omen / good fortune",
            "Culture"
          ],
          "correctAnswer": "Confirming Festival"
        },
        {
          "id": "u17_l6_2",
          "type": "spell",
          "prompt": "祭りの確認",
          "furigana": "まつりのかくにん",
          "romaji": "matsuri no kakunin",
          "english": "Build 'Confirming Festival'",
          "audioText": "まつりのかくにん",
          "tileBank": [
            "に",
            "ま",
            "り",
            "つ",
            "か",
            "ん",
            "く",
            "の"
          ],
          "correctAnswer": "まつりのかくにん"
        },
        {
          "id": "u17_l6_3",
          "type": "cloze",
          "prompt": "私は神社の確認がすきです",
          "furigana": "わたしはじんじゃのかくにんがすきです",
          "romaji": "Watashi wa jinja no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Shinto shrine.",
          "audioText": "神社の確認",
          "clozeSentence": "これは神社の確認 {{BLANK}} す。",
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
          "id": "u17_l6_4",
          "type": "scramble",
          "prompt": "これは神社の確認です",
          "furigana": "これはじんじゃのかくにんです",
          "romaji": "Kore wa jinja no kakunin desu.",
          "english": "This is Confirming Shinto shrine.",
          "audioText": "これは神社の確認です",
          "scrambleTokens": [
            "それ",
            "神社の確認",
            "これは",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "神社の確認",
            "です"
          ],
          "correctAnswer": "これは神社の確認です"
        },
        {
          "id": "u17_l6_5",
          "type": "speak",
          "prompt": "寺の確認",
          "furigana": "てらのかくにん",
          "romaji": "tera no kakunin",
          "english": "Pronounce: Confirming Buddhist temple",
          "audioText": "てらのかくにん",
          "targetSpeech": "寺の確認",
          "options": [
            "Confirming Buddhist temple",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "寺の確認"
        },
        {
          "id": "u17_l6_6",
          "type": "dictate",
          "prompt": "寺の確認をお願いします",
          "furigana": "てらのかくにんをおねがいします",
          "romaji": "tera no kakunin o onegaishimasu.",
          "english": "Confirming Buddhist temple, please.",
          "audioText": "寺の確認をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "寺の確認",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "寺の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "寺の確認をお願いします"
        },
        {
          "id": "u17_l6_7",
          "type": "match",
          "prompt": "祭りの確認・神社の確認・寺の確認・参拝の確認",
          "furigana": "まつりのかくにん・じんじゃのかくにん・てらのかくにん・さんぱいのかくにん",
          "romaji": "matsuri no kakunin, jinja no kakunin, tera no kakunin, sanpai no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "まつりのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "祭りの確認",
              "right": "Confirming Festival",
              "furigana": "まつりのかくにん",
              "romaji": "matsuri no kakunin"
            },
            {
              "id": "p_1",
              "left": "神社の確認",
              "right": "Confirming Shinto shrine",
              "furigana": "じんじゃのかくにん",
              "romaji": "jinja no kakunin"
            },
            {
              "id": "p_2",
              "left": "寺の確認",
              "right": "Confirming Buddhist temple",
              "furigana": "てらのかくにん",
              "romaji": "tera no kakunin"
            },
            {
              "id": "p_3",
              "left": "参拝の確認",
              "right": "Confirming Worship / paying respects at shrine",
              "furigana": "さんぱいのかくにん",
              "romaji": "sanpai no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l6_8",
          "type": "dialogue",
          "prompt": "神社の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "神社の準備はできていますか？",
          "furigana": "神社の準備はできていますか？",
          "romaji": "jinja no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Shinto shrine ready?",
          "audioText": "神社の準備はできていますか？",
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
      "id": "u17_l7",
      "unitId": "unit_17",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Worship / paying respects at shrine & Confirming Tradition / heritage",
      "titleJp": "参拝の確認・伝統の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "参拝の確認",
        "伝統の確認",
        "文化の確認"
      ],
      "kanjiKeywords": [
        "参",
        "拝",
        "確",
        "認",
        "伝",
        "統",
        "確",
        "認",
        "文",
        "化",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u17_l7_1",
          "type": "listen",
          "prompt": "参拝の確認",
          "furigana": "さんぱいのかくにん",
          "romaji": "sanpai no kakunin",
          "english": "Confirming Worship / paying respects at shrine",
          "audioText": "さんぱいのかくにん",
          "options": [
            "To inherit / pass down",
            "Confirming History",
            "Shinto shrine",
            "Confirming Worship / paying respects at shrine"
          ],
          "correctAnswer": "Confirming Worship / paying respects at shrine"
        },
        {
          "id": "u17_l7_2",
          "type": "spell",
          "prompt": "参拝の確認",
          "furigana": "さんぱいのかくにん",
          "romaji": "sanpai no kakunin",
          "english": "Build 'Confirming Worship / paying respects at shrine'",
          "audioText": "さんぱいのかくにん",
          "tileBank": [
            "く",
            "か",
            "い",
            "ん",
            "さ",
            "に",
            "ぱ",
            "の"
          ],
          "correctAnswer": "さんぱいのかくにん"
        },
        {
          "id": "u17_l7_3",
          "type": "cloze",
          "prompt": "私は伝統の確認がすきです",
          "furigana": "わたしはでんとうのかくにんがすきです",
          "romaji": "Watashi wa dentou no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Tradition / heritage.",
          "audioText": "伝統の確認",
          "clozeSentence": "これは伝統の確認 {{BLANK}} す。",
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
          "id": "u17_l7_4",
          "type": "scramble",
          "prompt": "これは伝統の確認です",
          "furigana": "これはでんとうのかくにんです",
          "romaji": "Kore wa dentou no kakunin desu.",
          "english": "This is Confirming Tradition / heritage.",
          "audioText": "これは伝統の確認です",
          "scrambleTokens": [
            "です",
            "これは",
            "伝統の確認",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "伝統の確認",
            "です"
          ],
          "correctAnswer": "これは伝統の確認です"
        },
        {
          "id": "u17_l7_5",
          "type": "speak",
          "prompt": "文化の確認",
          "furigana": "ぶんかのかくにん",
          "romaji": "bunka no kakunin",
          "english": "Pronounce: Confirming Culture",
          "audioText": "ぶんかのかくにん",
          "targetSpeech": "文化の確認",
          "options": [
            "Confirming Culture",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "文化の確認"
        },
        {
          "id": "u17_l7_6",
          "type": "dictate",
          "prompt": "文化の確認をお願いします",
          "furigana": "ぶんかのかくにんをおねがいします",
          "romaji": "bunka no kakunin o onegaishimasu.",
          "english": "Confirming Culture, please.",
          "audioText": "文化の確認をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "です",
            "ありがとう",
            "文化の確認"
          ],
          "dictateSolution": [
            "文化の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "文化の確認をお願いします"
        },
        {
          "id": "u17_l7_7",
          "type": "match",
          "prompt": "参拝の確認・伝統の確認・文化の確認・茶道の確認",
          "furigana": "さんぱいのかくにん・でんとうのかくにん・ぶんかのかくにん・さどうのかくにん",
          "romaji": "sanpai no kakunin, dentou no kakunin, bunka no kakunin, sadou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さんぱいのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "参拝の確認",
              "right": "Confirming Worship / paying respects at shrine",
              "furigana": "さんぱいのかくにん",
              "romaji": "sanpai no kakunin"
            },
            {
              "id": "p_1",
              "left": "伝統の確認",
              "right": "Confirming Tradition / heritage",
              "furigana": "でんとうのかくにん",
              "romaji": "dentou no kakunin"
            },
            {
              "id": "p_2",
              "left": "文化の確認",
              "right": "Confirming Culture",
              "furigana": "ぶんかのかくにん",
              "romaji": "bunka no kakunin"
            },
            {
              "id": "p_3",
              "left": "茶道の確認",
              "right": "Confirming Tea ceremony",
              "furigana": "さどうのかくにん",
              "romaji": "sadou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l7_8",
          "type": "dialogue",
          "prompt": "寺についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "寺についてどう思われますか？",
          "furigana": "寺についてどう思われますか？",
          "romaji": "tera ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Buddhist temple?",
          "audioText": "寺についてどう思われますか？",
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
      "id": "u17_l8",
      "unitId": "unit_17",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Tea ceremony & Confirming Traditional kimono",
      "titleJp": "茶道の確認・着物の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "茶道の確認",
        "着物の確認",
        "神輿の確認"
      ],
      "kanjiKeywords": [
        "茶",
        "道",
        "確",
        "認",
        "着",
        "物",
        "確",
        "認",
        "神",
        "輿",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u17_l8_1",
          "type": "listen",
          "prompt": "茶道の確認",
          "furigana": "さどうのかくにん",
          "romaji": "sadou no kakunin",
          "english": "Confirming Tea ceremony",
          "audioText": "さどうのかくにん",
          "options": [
            "Confirming Traditional kimono",
            "Confirming Tea ceremony",
            "Confirming First shrine visit of New Year",
            "Confirming Omen / good fortune"
          ],
          "correctAnswer": "Confirming Tea ceremony"
        },
        {
          "id": "u17_l8_2",
          "type": "spell",
          "prompt": "茶道の確認",
          "furigana": "さどうのかくにん",
          "romaji": "sadou no kakunin",
          "english": "Build 'Confirming Tea ceremony'",
          "audioText": "さどうのかくにん",
          "tileBank": [
            "ん",
            "ど",
            "に",
            "か",
            "う",
            "の",
            "く",
            "さ"
          ],
          "correctAnswer": "さどうのかくにん"
        },
        {
          "id": "u17_l8_3",
          "type": "cloze",
          "prompt": "私は着物の確認がすきです",
          "furigana": "わたしはきもののかくにんがすきです",
          "romaji": "Watashi wa kimono no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Traditional kimono.",
          "audioText": "着物の確認",
          "clozeSentence": "これは着物の確認 {{BLANK}} す。",
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
          "id": "u17_l8_4",
          "type": "scramble",
          "prompt": "これは着物の確認です",
          "furigana": "これはきもののかくにんです",
          "romaji": "Kore wa kimono no kakunin desu.",
          "english": "This is Confirming Traditional kimono.",
          "audioText": "これは着物の確認です",
          "scrambleTokens": [
            "です",
            "これは",
            "着物の確認",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "着物の確認",
            "です"
          ],
          "correctAnswer": "これは着物の確認です"
        },
        {
          "id": "u17_l8_5",
          "type": "speak",
          "prompt": "神輿の確認",
          "furigana": "みこしのかくにん",
          "romaji": "mikoshi no kakunin",
          "english": "Pronounce: Confirming Portable shrine carried in festivals",
          "audioText": "みこしのかくにん",
          "targetSpeech": "神輿の確認",
          "options": [
            "Confirming Portable shrine carried in festivals",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "神輿の確認"
        },
        {
          "id": "u17_l8_6",
          "type": "dictate",
          "prompt": "神輿の確認をお願いします",
          "furigana": "みこしのかくにんをおねがいします",
          "romaji": "mikoshi no kakunin o onegaishimasu.",
          "english": "Confirming Portable shrine carried in festivals, please.",
          "audioText": "神輿の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "を",
            "です",
            "ありがとう",
            "神輿の確認"
          ],
          "dictateSolution": [
            "神輿の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "神輿の確認をお願いします"
        },
        {
          "id": "u17_l8_7",
          "type": "match",
          "prompt": "茶道の確認・着物の確認・神輿の確認・お盆の確認",
          "furigana": "さどうのかくにん・きもののかくにん・みこしのかくにん・おぼんのかくにん",
          "romaji": "sadou no kakunin, kimono no kakunin, mikoshi no kakunin, obon no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さどうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "茶道の確認",
              "right": "Confirming Tea ceremony",
              "furigana": "さどうのかくにん",
              "romaji": "sadou no kakunin"
            },
            {
              "id": "p_1",
              "left": "着物の確認",
              "right": "Confirming Traditional kimono",
              "furigana": "きもののかくにん",
              "romaji": "kimono no kakunin"
            },
            {
              "id": "p_2",
              "left": "神輿の確認",
              "right": "Confirming Portable shrine carried in festivals",
              "furigana": "みこしのかくにん",
              "romaji": "mikoshi no kakunin"
            },
            {
              "id": "p_3",
              "left": "お盆の確認",
              "right": "Confirming Obon ancestral holiday",
              "furigana": "おぼんのかくにん",
              "romaji": "obon no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l8_8",
          "type": "dialogue",
          "prompt": "次は参拝に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は参拝に進みましょう。",
          "furigana": "次は参拝に進みましょう。",
          "romaji": "Tsugi wa sanpai ni susumimashou.",
          "english": "Speaker: Let's proceed to Worship / paying respects at shrine next.",
          "audioText": "次は参拝に進みましょう。",
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
      "id": "u17_l9",
      "unitId": "unit_17",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Obon ancestral holiday & Confirming First shrine visit of New Year",
      "titleJp": "お盆の確認・初詣の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "お盆の確認",
        "初詣の確認",
        "縁起の確認"
      ],
      "kanjiKeywords": [
        "盆",
        "確",
        "認",
        "初",
        "詣",
        "確",
        "認",
        "縁",
        "起",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u17_l9_1",
          "type": "listen",
          "prompt": "お盆の確認",
          "furigana": "おぼんのかくにん",
          "romaji": "obon no kakunin",
          "english": "Confirming Obon ancestral holiday",
          "audioText": "おぼんのかくにん",
          "options": [
            "Confirming First shrine visit of New Year",
            "Confirming Obon ancestral holiday",
            "Confirming Tradition / heritage",
            "Omen / good fortune"
          ],
          "correctAnswer": "Confirming Obon ancestral holiday"
        },
        {
          "id": "u17_l9_2",
          "type": "spell",
          "prompt": "お盆の確認",
          "furigana": "おぼんのかくにん",
          "romaji": "obon no kakunin",
          "english": "Build 'Confirming Obon ancestral holiday'",
          "audioText": "おぼんのかくにん",
          "tileBank": [
            "ぼ",
            "く",
            "に",
            "か",
            "ん",
            "の",
            "お",
            "ん"
          ],
          "correctAnswer": "おぼんのかくにん"
        },
        {
          "id": "u17_l9_3",
          "type": "cloze",
          "prompt": "私は初詣の確認がすきです",
          "furigana": "わたしははつもうでのかくにんがすきです",
          "romaji": "Watashi wa hatsumoude no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming First shrine visit of New Year.",
          "audioText": "初詣の確認",
          "clozeSentence": "これは初詣の確認 {{BLANK}} す。",
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
          "id": "u17_l9_4",
          "type": "scramble",
          "prompt": "これは初詣の確認です",
          "furigana": "これははつもうでのかくにんです",
          "romaji": "Kore wa hatsumoude no kakunin desu.",
          "english": "This is Confirming First shrine visit of New Year.",
          "audioText": "これは初詣の確認です",
          "scrambleTokens": [
            "初詣の確認",
            "ではありません",
            "これは",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "初詣の確認",
            "です"
          ],
          "correctAnswer": "これは初詣の確認です"
        },
        {
          "id": "u17_l9_5",
          "type": "speak",
          "prompt": "縁起の確認",
          "furigana": "えんぎのかくにん",
          "romaji": "engi no kakunin",
          "english": "Pronounce: Confirming Omen / good fortune",
          "audioText": "えんぎのかくにん",
          "targetSpeech": "縁起の確認",
          "options": [
            "Confirming Omen / good fortune",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "縁起の確認"
        },
        {
          "id": "u17_l9_6",
          "type": "dictate",
          "prompt": "縁起の確認をお願いします",
          "furigana": "えんぎのかくにんをおねがいします",
          "romaji": "engi no kakunin o onegaishimasu.",
          "english": "Confirming Omen / good fortune, please.",
          "audioText": "縁起の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "縁起の確認",
            "です",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "縁起の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "縁起の確認をお願いします"
        },
        {
          "id": "u17_l9_7",
          "type": "match",
          "prompt": "お盆の確認・初詣の確認・縁起の確認・歴史の確認",
          "furigana": "おぼんのかくにん・はつもうでのかくにん・えんぎのかくにん・れきしのかくにん",
          "romaji": "obon no kakunin, hatsumoude no kakunin, engi no kakunin, rekishi no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おぼんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "お盆の確認",
              "right": "Confirming Obon ancestral holiday",
              "furigana": "おぼんのかくにん",
              "romaji": "obon no kakunin"
            },
            {
              "id": "p_1",
              "left": "初詣の確認",
              "right": "Confirming First shrine visit of New Year",
              "furigana": "はつもうでのかくにん",
              "romaji": "hatsumoude no kakunin"
            },
            {
              "id": "p_2",
              "left": "縁起の確認",
              "right": "Confirming Omen / good fortune",
              "furigana": "えんぎのかくにん",
              "romaji": "engi no kakunin"
            },
            {
              "id": "p_3",
              "left": "歴史の確認",
              "right": "Confirming History",
              "furigana": "れきしのかくにん",
              "romaji": "rekishi no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l9_8",
          "type": "dialogue",
          "prompt": "祭りについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "祭りについて教えていただけますか？",
          "furigana": "祭りについて教えていただけますか？",
          "romaji": "matsuri ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Festival?",
          "audioText": "祭りについて教えていただけますか？",
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
      "id": "u17_l10",
      "unitId": "unit_17",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming History & Confirming To inherit / pass down",
      "titleJp": "歴史の確認・受け継ぐの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "歴史の確認",
        "受け継ぐの確認",
        "儀式の確認"
      ],
      "kanjiKeywords": [
        "歴",
        "史",
        "確",
        "認",
        "受",
        "継",
        "確",
        "認",
        "儀",
        "式",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u17_l10_1",
          "type": "listen",
          "prompt": "歴史の確認",
          "furigana": "れきしのかくにん",
          "romaji": "rekishi no kakunin",
          "english": "Confirming History",
          "audioText": "れきしのかくにん",
          "options": [
            "Ceremony / rite",
            "Confirming History",
            "Confirming Festival",
            "Confirming Buddhist temple"
          ],
          "correctAnswer": "Confirming History"
        },
        {
          "id": "u17_l10_2",
          "type": "spell",
          "prompt": "歴史の確認",
          "furigana": "れきしのかくにん",
          "romaji": "rekishi no kakunin",
          "english": "Build 'Confirming History'",
          "audioText": "れきしのかくにん",
          "tileBank": [
            "し",
            "か",
            "く",
            "れ",
            "き",
            "の",
            "に",
            "ん"
          ],
          "correctAnswer": "れきしのかくにん"
        },
        {
          "id": "u17_l10_3",
          "type": "cloze",
          "prompt": "私は受け継ぐの確認がすきです",
          "furigana": "わたしはうけつぐのかくにんがすきです",
          "romaji": "Watashi wa uketsugu no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming To inherit / pass down.",
          "audioText": "受け継ぐの確認",
          "clozeSentence": "これは受け継ぐの確認 {{BLANK}} す。",
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
          "id": "u17_l10_4",
          "type": "scramble",
          "prompt": "これは受け継ぐの確認です",
          "furigana": "これはうけつぐのかくにんです",
          "romaji": "Kore wa uketsugu no kakunin desu.",
          "english": "This is Confirming To inherit / pass down.",
          "audioText": "これは受け継ぐの確認です",
          "scrambleTokens": [
            "受け継ぐの確認",
            "です",
            "ではありません",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "受け継ぐの確認",
            "です"
          ],
          "correctAnswer": "これは受け継ぐの確認です"
        },
        {
          "id": "u17_l10_5",
          "type": "speak",
          "prompt": "儀式の確認",
          "furigana": "ぎしきのかくにん",
          "romaji": "gishiki no kakunin",
          "english": "Pronounce: Confirming Ceremony / rite",
          "audioText": "ぎしきのかくにん",
          "targetSpeech": "儀式の確認",
          "options": [
            "Confirming Ceremony / rite",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "儀式の確認"
        },
        {
          "id": "u17_l10_6",
          "type": "dictate",
          "prompt": "儀式の確認をお願いします",
          "furigana": "ぎしきのかくにんをおねがいします",
          "romaji": "gishiki no kakunin o onegaishimasu.",
          "english": "Confirming Ceremony / rite, please.",
          "audioText": "儀式の確認をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "儀式の確認",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "儀式の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "儀式の確認をお願いします"
        },
        {
          "id": "u17_l10_7",
          "type": "match",
          "prompt": "歴史の確認・受け継ぐの確認・儀式の確認・祭りの確認",
          "furigana": "れきしのかくにん・うけつぐのかくにん・ぎしきのかくにん・まつりのかくにん",
          "romaji": "rekishi no kakunin, uketsugu no kakunin, gishiki no kakunin, matsuri no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "れきしのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "歴史の確認",
              "right": "Confirming History",
              "furigana": "れきしのかくにん",
              "romaji": "rekishi no kakunin"
            },
            {
              "id": "p_1",
              "left": "受け継ぐの確認",
              "right": "Confirming To inherit / pass down",
              "furigana": "うけつぐのかくにん",
              "romaji": "uketsugu no kakunin"
            },
            {
              "id": "p_2",
              "left": "儀式の確認",
              "right": "Confirming Ceremony / rite",
              "furigana": "ぎしきのかくにん",
              "romaji": "gishiki no kakunin"
            },
            {
              "id": "p_3",
              "left": "祭りの確認",
              "right": "Confirming Festival",
              "furigana": "まつりのかくにん",
              "romaji": "matsuri no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l10_8",
          "type": "dialogue",
          "prompt": "神社の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "神社の準備はできていますか？",
          "furigana": "神社の準備はできていますか？",
          "romaji": "jinja no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Shinto shrine ready?",
          "audioText": "神社の準備はできていますか？",
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
      "id": "u17_l11",
      "unitId": "unit_17",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Festival & Confirming Shinto shrine",
      "titleJp": "祭りの確認・神社の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "祭りの確認",
        "神社の確認",
        "寺の確認"
      ],
      "kanjiKeywords": [
        "祭",
        "確",
        "認",
        "神",
        "社",
        "確",
        "認",
        "寺",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u17_l11_1",
          "type": "listen",
          "prompt": "祭りの確認",
          "furigana": "まつりのかくにん",
          "romaji": "matsuri no kakunin",
          "english": "Confirming Festival",
          "audioText": "まつりのかくにん",
          "options": [
            "Confirming Tea ceremony",
            "Confirming Portable shrine carried in festivals",
            "First shrine visit of New Year",
            "Confirming Festival"
          ],
          "correctAnswer": "Confirming Festival"
        },
        {
          "id": "u17_l11_2",
          "type": "spell",
          "prompt": "祭りの確認",
          "furigana": "まつりのかくにん",
          "romaji": "matsuri no kakunin",
          "english": "Build 'Confirming Festival'",
          "audioText": "まつりのかくにん",
          "tileBank": [
            "か",
            "に",
            "く",
            "つ",
            "の",
            "り",
            "ま",
            "ん"
          ],
          "correctAnswer": "まつりのかくにん"
        },
        {
          "id": "u17_l11_3",
          "type": "cloze",
          "prompt": "私は神社の確認がすきです",
          "furigana": "わたしはじんじゃのかくにんがすきです",
          "romaji": "Watashi wa jinja no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Shinto shrine.",
          "audioText": "神社の確認",
          "clozeSentence": "これは神社の確認 {{BLANK}} す。",
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
          "id": "u17_l11_4",
          "type": "scramble",
          "prompt": "これは神社の確認です",
          "furigana": "これはじんじゃのかくにんです",
          "romaji": "Kore wa jinja no kakunin desu.",
          "english": "This is Confirming Shinto shrine.",
          "audioText": "これは神社の確認です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "神社の確認",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "神社の確認",
            "です"
          ],
          "correctAnswer": "これは神社の確認です"
        },
        {
          "id": "u17_l11_5",
          "type": "speak",
          "prompt": "寺の確認",
          "furigana": "てらのかくにん",
          "romaji": "tera no kakunin",
          "english": "Pronounce: Confirming Buddhist temple",
          "audioText": "てらのかくにん",
          "targetSpeech": "寺の確認",
          "options": [
            "Confirming Buddhist temple",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "寺の確認"
        },
        {
          "id": "u17_l11_6",
          "type": "dictate",
          "prompt": "寺の確認をお願いします",
          "furigana": "てらのかくにんをおねがいします",
          "romaji": "tera no kakunin o onegaishimasu.",
          "english": "Confirming Buddhist temple, please.",
          "audioText": "寺の確認をお願いします",
          "dictateTokens": [
            "寺の確認",
            "ありがとう",
            "お願いします",
            "を",
            "です"
          ],
          "dictateSolution": [
            "寺の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "寺の確認をお願いします"
        },
        {
          "id": "u17_l11_7",
          "type": "match",
          "prompt": "祭りの確認・神社の確認・寺の確認・参拝の確認",
          "furigana": "まつりのかくにん・じんじゃのかくにん・てらのかくにん・さんぱいのかくにん",
          "romaji": "matsuri no kakunin, jinja no kakunin, tera no kakunin, sanpai no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "まつりのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "祭りの確認",
              "right": "Confirming Festival",
              "furigana": "まつりのかくにん",
              "romaji": "matsuri no kakunin"
            },
            {
              "id": "p_1",
              "left": "神社の確認",
              "right": "Confirming Shinto shrine",
              "furigana": "じんじゃのかくにん",
              "romaji": "jinja no kakunin"
            },
            {
              "id": "p_2",
              "left": "寺の確認",
              "right": "Confirming Buddhist temple",
              "furigana": "てらのかくにん",
              "romaji": "tera no kakunin"
            },
            {
              "id": "p_3",
              "left": "参拝の確認",
              "right": "Confirming Worship / paying respects at shrine",
              "furigana": "さんぱいのかくにん",
              "romaji": "sanpai no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l11_8",
          "type": "dialogue",
          "prompt": "寺についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "寺についてどう思われますか？",
          "furigana": "寺についてどう思われますか？",
          "romaji": "tera ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Buddhist temple?",
          "audioText": "寺についてどう思われますか？",
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
      "id": "u17_l12",
      "unitId": "unit_17",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Worship / paying respects at shrine & Confirming Tradition / heritage",
      "titleJp": "参拝の確認・伝統の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "参拝の確認",
        "伝統の確認",
        "文化の確認"
      ],
      "kanjiKeywords": [
        "参",
        "拝",
        "確",
        "認",
        "伝",
        "統",
        "確",
        "認",
        "文",
        "化",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u17_l12_1",
          "type": "listen",
          "prompt": "参拝の確認",
          "furigana": "さんぱいのかくにん",
          "romaji": "sanpai no kakunin",
          "english": "Confirming Worship / paying respects at shrine",
          "audioText": "さんぱいのかくにん",
          "options": [
            "Confirming Worship / paying respects at shrine",
            "Tradition / heritage",
            "Festival",
            "Confirming Traditional kimono"
          ],
          "correctAnswer": "Confirming Worship / paying respects at shrine"
        },
        {
          "id": "u17_l12_2",
          "type": "spell",
          "prompt": "参拝の確認",
          "furigana": "さんぱいのかくにん",
          "romaji": "sanpai no kakunin",
          "english": "Build 'Confirming Worship / paying respects at shrine'",
          "audioText": "さんぱいのかくにん",
          "tileBank": [
            "ぱ",
            "に",
            "か",
            "さ",
            "く",
            "の",
            "ん",
            "い"
          ],
          "correctAnswer": "さんぱいのかくにん"
        },
        {
          "id": "u17_l12_3",
          "type": "cloze",
          "prompt": "私は伝統の確認がすきです",
          "furigana": "わたしはでんとうのかくにんがすきです",
          "romaji": "Watashi wa dentou no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Tradition / heritage.",
          "audioText": "伝統の確認",
          "clozeSentence": "これは伝統の確認 {{BLANK}} す。",
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
          "id": "u17_l12_4",
          "type": "scramble",
          "prompt": "これは伝統の確認です",
          "furigana": "これはでんとうのかくにんです",
          "romaji": "Kore wa dentou no kakunin desu.",
          "english": "This is Confirming Tradition / heritage.",
          "audioText": "これは伝統の確認です",
          "scrambleTokens": [
            "です",
            "それ",
            "これは",
            "伝統の確認",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "伝統の確認",
            "です"
          ],
          "correctAnswer": "これは伝統の確認です"
        },
        {
          "id": "u17_l12_5",
          "type": "speak",
          "prompt": "文化の確認",
          "furigana": "ぶんかのかくにん",
          "romaji": "bunka no kakunin",
          "english": "Pronounce: Confirming Culture",
          "audioText": "ぶんかのかくにん",
          "targetSpeech": "文化の確認",
          "options": [
            "Confirming Culture",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "文化の確認"
        },
        {
          "id": "u17_l12_6",
          "type": "dictate",
          "prompt": "文化の確認をお願いします",
          "furigana": "ぶんかのかくにんをおねがいします",
          "romaji": "bunka no kakunin o onegaishimasu.",
          "english": "Confirming Culture, please.",
          "audioText": "文化の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "文化の確認",
            "です",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "文化の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "文化の確認をお願いします"
        },
        {
          "id": "u17_l12_7",
          "type": "match",
          "prompt": "参拝の確認・伝統の確認・文化の確認・祭り",
          "furigana": "さんぱいのかくにん・でんとうのかくにん・ぶんかのかくにん・まつり",
          "romaji": "sanpai no kakunin, dentou no kakunin, bunka no kakunin, matsuri",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さんぱいのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "参拝の確認",
              "right": "Confirming Worship / paying respects at shrine",
              "furigana": "さんぱいのかくにん",
              "romaji": "sanpai no kakunin"
            },
            {
              "id": "p_1",
              "left": "伝統の確認",
              "right": "Confirming Tradition / heritage",
              "furigana": "でんとうのかくにん",
              "romaji": "dentou no kakunin"
            },
            {
              "id": "p_2",
              "left": "文化の確認",
              "right": "Confirming Culture",
              "furigana": "ぶんかのかくにん",
              "romaji": "bunka no kakunin"
            },
            {
              "id": "p_3",
              "left": "祭り",
              "right": "Festival",
              "furigana": "まつり",
              "romaji": "matsuri"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l12_8",
          "type": "dialogue",
          "prompt": "次は参拝に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は参拝に進みましょう。",
          "furigana": "次は参拝に進みましょう。",
          "romaji": "Tsugi wa sanpai ni susumimashou.",
          "english": "Speaker: Let's proceed to Worship / paying respects at shrine next.",
          "audioText": "次は参拝に進みましょう。",
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
      "id": "u17_l13",
      "unitId": "unit_17",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Festival & Shinto shrine",
      "titleJp": "祭り・神社",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "祭り",
        "神社",
        "寺"
      ],
      "kanjiKeywords": [
        "祭",
        "神",
        "社",
        "寺"
      ],
      "items": [
        {
          "id": "u17_l13_1",
          "type": "listen",
          "prompt": "祭り",
          "furigana": "まつり",
          "romaji": "matsuri",
          "english": "Festival",
          "audioText": "まつり",
          "options": [
            "Confirming Ceremony / rite",
            "Confirming Traditional kimono",
            "Festival",
            "Traditional kimono"
          ],
          "correctAnswer": "Festival"
        },
        {
          "id": "u17_l13_2",
          "type": "spell",
          "prompt": "祭り",
          "furigana": "まつり",
          "romaji": "matsuri",
          "english": "Build 'Festival'",
          "audioText": "まつり",
          "tileBank": [
            "う",
            "つ",
            "ま",
            "そ",
            "お",
            "ら",
            "り",
            "に"
          ],
          "correctAnswer": "まつり"
        },
        {
          "id": "u17_l13_3",
          "type": "cloze",
          "prompt": "私は神社がすきです",
          "furigana": "わたしはじんじゃがすきです",
          "romaji": "Watashi wa jinja ga suki desu.",
          "english": "Fill in the blank with the correct particle for Shinto shrine.",
          "audioText": "神社",
          "clozeSentence": "これは神社 {{BLANK}} す。",
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
          "id": "u17_l13_4",
          "type": "scramble",
          "prompt": "これは神社です",
          "furigana": "これはじんじゃです",
          "romaji": "Kore wa jinja desu.",
          "english": "This is Shinto shrine.",
          "audioText": "これは神社です",
          "scrambleTokens": [
            "です",
            "それ",
            "ではありません",
            "神社",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "神社",
            "です"
          ],
          "correctAnswer": "これは神社です"
        },
        {
          "id": "u17_l13_5",
          "type": "speak",
          "prompt": "寺",
          "furigana": "てら",
          "romaji": "tera",
          "english": "Pronounce: Buddhist temple",
          "audioText": "てら",
          "targetSpeech": "寺",
          "options": [
            "Buddhist temple",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "寺"
        },
        {
          "id": "u17_l13_6",
          "type": "dictate",
          "prompt": "寺をお願いします",
          "furigana": "てらをおねがいします",
          "romaji": "tera o onegaishimasu.",
          "english": "Buddhist temple, please.",
          "audioText": "寺をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "お願いします",
            "ありがとう",
            "寺"
          ],
          "dictateSolution": [
            "寺",
            "を",
            "お願いします"
          ],
          "correctAnswer": "寺をお願いします"
        },
        {
          "id": "u17_l13_7",
          "type": "match",
          "prompt": "祭り・神社・寺・参拝",
          "furigana": "まつり・じんじゃ・てら・さんぱい",
          "romaji": "matsuri, jinja, tera, sanpai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "まつり",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "祭り",
              "right": "Festival",
              "furigana": "まつり",
              "romaji": "matsuri"
            },
            {
              "id": "p_1",
              "left": "神社",
              "right": "Shinto shrine",
              "furigana": "じんじゃ",
              "romaji": "jinja"
            },
            {
              "id": "p_2",
              "left": "寺",
              "right": "Buddhist temple",
              "furigana": "てら",
              "romaji": "tera"
            },
            {
              "id": "p_3",
              "left": "参拝",
              "right": "Worship / paying respects at shrine",
              "furigana": "さんぱい",
              "romaji": "sanpai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l13_8",
          "type": "dialogue",
          "prompt": "祭りについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "祭りについて教えていただけますか？",
          "furigana": "祭りについて教えていただけますか？",
          "romaji": "matsuri ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Festival?",
          "audioText": "祭りについて教えていただけますか？",
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
      "id": "u17_l14",
      "unitId": "unit_17",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Worship / paying respects at shrine & Tradition / heritage",
      "titleJp": "参拝・伝統",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "参拝",
        "伝統",
        "文化"
      ],
      "kanjiKeywords": [
        "参",
        "拝",
        "伝",
        "統",
        "文",
        "化"
      ],
      "items": [
        {
          "id": "u17_l14_1",
          "type": "listen",
          "prompt": "参拝",
          "furigana": "さんぱい",
          "romaji": "sanpai",
          "english": "Worship / paying respects at shrine",
          "audioText": "さんぱい",
          "options": [
            "Worship / paying respects at shrine",
            "Confirming Worship / paying respects at shrine",
            "Confirming Buddhist temple",
            "Confirming Festival"
          ],
          "correctAnswer": "Worship / paying respects at shrine"
        },
        {
          "id": "u17_l14_2",
          "type": "spell",
          "prompt": "参拝",
          "furigana": "さんぱい",
          "romaji": "sanpai",
          "english": "Build 'Worship / paying respects at shrine'",
          "audioText": "さんぱい",
          "tileBank": [
            "ぱ",
            "は",
            "ん",
            "す",
            "う",
            "よ",
            "い",
            "さ"
          ],
          "correctAnswer": "さんぱい"
        },
        {
          "id": "u17_l14_3",
          "type": "cloze",
          "prompt": "私は伝統がすきです",
          "furigana": "わたしはでんとうがすきです",
          "romaji": "Watashi wa dentou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Tradition / heritage.",
          "audioText": "伝統",
          "clozeSentence": "これは伝統 {{BLANK}} す。",
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
          "id": "u17_l14_4",
          "type": "scramble",
          "prompt": "これは伝統です",
          "furigana": "これはでんとうです",
          "romaji": "Kore wa dentou desu.",
          "english": "This is Tradition / heritage.",
          "audioText": "これは伝統です",
          "scrambleTokens": [
            "伝統",
            "これは",
            "それ",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "伝統",
            "です"
          ],
          "correctAnswer": "これは伝統です"
        },
        {
          "id": "u17_l14_5",
          "type": "speak",
          "prompt": "文化",
          "furigana": "ぶんか",
          "romaji": "bunka",
          "english": "Pronounce: Culture",
          "audioText": "ぶんか",
          "targetSpeech": "文化",
          "options": [
            "Culture",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "文化"
        },
        {
          "id": "u17_l14_6",
          "type": "dictate",
          "prompt": "文化をお願いします",
          "furigana": "ぶんかをおねがいします",
          "romaji": "bunka o onegaishimasu.",
          "english": "Culture, please.",
          "audioText": "文化をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "文化",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "文化",
            "を",
            "お願いします"
          ],
          "correctAnswer": "文化をお願いします"
        },
        {
          "id": "u17_l14_7",
          "type": "match",
          "prompt": "参拝・伝統・文化・茶道",
          "furigana": "さんぱい・でんとう・ぶんか・さどう",
          "romaji": "sanpai, dentou, bunka, sadou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さんぱい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "参拝",
              "right": "Worship / paying respects at shrine",
              "furigana": "さんぱい",
              "romaji": "sanpai"
            },
            {
              "id": "p_1",
              "left": "伝統",
              "right": "Tradition / heritage",
              "furigana": "でんとう",
              "romaji": "dentou"
            },
            {
              "id": "p_2",
              "left": "文化",
              "right": "Culture",
              "furigana": "ぶんか",
              "romaji": "bunka"
            },
            {
              "id": "p_3",
              "left": "茶道",
              "right": "Tea ceremony",
              "furigana": "さどう",
              "romaji": "sadou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l14_8",
          "type": "dialogue",
          "prompt": "神社の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "神社の準備はできていますか？",
          "furigana": "神社の準備はできていますか？",
          "romaji": "jinja no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Shinto shrine ready?",
          "audioText": "神社の準備はできていますか？",
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
      "id": "u17_l15",
      "unitId": "unit_17",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 17 Master Exam",
      "iconType": "test",
      "title": "Unit 17 Master Exam",
      "titleJp": "第17週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "茶道",
        "着物",
        "神輿"
      ],
      "kanjiKeywords": [
        "茶",
        "道",
        "着",
        "物",
        "神",
        "輿"
      ],
      "items": [
        {
          "id": "u17_l15_1",
          "type": "listen",
          "prompt": "茶道",
          "furigana": "さどう",
          "romaji": "sadou",
          "english": "Tea ceremony",
          "audioText": "さどう",
          "options": [
            "Confirming First shrine visit of New Year",
            "Confirming Tea ceremony",
            "Tea ceremony",
            "Confirming Buddhist temple"
          ],
          "correctAnswer": "Tea ceremony"
        },
        {
          "id": "u17_l15_2",
          "type": "spell",
          "prompt": "茶道",
          "furigana": "さどう",
          "romaji": "sadou",
          "english": "Build 'Tea ceremony'",
          "audioText": "さどう",
          "tileBank": [
            "け",
            "ね",
            "ど",
            "う",
            "お",
            "ゆ",
            "そ",
            "さ"
          ],
          "correctAnswer": "さどう"
        },
        {
          "id": "u17_l15_3",
          "type": "cloze",
          "prompt": "私は着物がすきです",
          "furigana": "わたしはきものがすきです",
          "romaji": "Watashi wa kimono ga suki desu.",
          "english": "Fill in the blank with the correct particle for Traditional kimono.",
          "audioText": "着物",
          "clozeSentence": "これは着物 {{BLANK}} す。",
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
          "id": "u17_l15_4",
          "type": "scramble",
          "prompt": "これは着物です",
          "furigana": "これはきものです",
          "romaji": "Kore wa kimono desu.",
          "english": "This is Traditional kimono.",
          "audioText": "これは着物です",
          "scrambleTokens": [
            "着物",
            "です",
            "これは",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "着物",
            "です"
          ],
          "correctAnswer": "これは着物です"
        },
        {
          "id": "u17_l15_5",
          "type": "speak",
          "prompt": "神輿",
          "furigana": "みこし",
          "romaji": "mikoshi",
          "english": "Pronounce: Portable shrine carried in festivals",
          "audioText": "みこし",
          "targetSpeech": "神輿",
          "options": [
            "Portable shrine carried in festivals",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "神輿"
        },
        {
          "id": "u17_l15_6",
          "type": "dictate",
          "prompt": "神輿をお願いします",
          "furigana": "みこしをおねがいします",
          "romaji": "mikoshi o onegaishimasu.",
          "english": "Portable shrine carried in festivals, please.",
          "audioText": "神輿をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "を",
            "神輿",
            "です"
          ],
          "dictateSolution": [
            "神輿",
            "を",
            "お願いします"
          ],
          "correctAnswer": "神輿をお願いします"
        },
        {
          "id": "u17_l15_7",
          "type": "match",
          "prompt": "茶道・着物・神輿・お盆",
          "furigana": "さどう・きもの・みこし・おぼん",
          "romaji": "sadou, kimono, mikoshi, obon",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さどう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "茶道",
              "right": "Tea ceremony",
              "furigana": "さどう",
              "romaji": "sadou"
            },
            {
              "id": "p_1",
              "left": "着物",
              "right": "Traditional kimono",
              "furigana": "きもの",
              "romaji": "kimono"
            },
            {
              "id": "p_2",
              "left": "神輿",
              "right": "Portable shrine carried in festivals",
              "furigana": "みこし",
              "romaji": "mikoshi"
            },
            {
              "id": "p_3",
              "left": "お盆",
              "right": "Obon ancestral holiday",
              "furigana": "おぼん",
              "romaji": "obon"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u17_l15_8",
          "type": "dialogue",
          "prompt": "寺についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "寺についてどう思われますか？",
          "furigana": "寺についてどう思われますか？",
          "romaji": "tera ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Buddhist temple?",
          "audioText": "寺についてどう思われますか？",
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
    "id": "gate_unit_17",
    "unitId": "unit_17",
    "title": "Unit 17 Mastery Checkpoint",
    "titleJp": "第17週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u17_l1_1",
        "type": "listen",
        "prompt": "祭り",
        "furigana": "まつり",
        "romaji": "matsuri",
        "english": "Festival",
        "audioText": "まつり",
        "options": [
          "Confirming Worship / paying respects at shrine",
          "Confirming Obon ancestral holiday",
          "Confirming Festival",
          "Festival"
        ],
        "correctAnswer": "Festival"
      },
      {
        "id": "u17_l1_2",
        "type": "spell",
        "prompt": "祭り",
        "furigana": "まつり",
        "romaji": "matsuri",
        "english": "Build 'Festival'",
        "audioText": "まつり",
        "tileBank": [
          "の",
          "み",
          "な",
          "つ",
          "わ",
          "り",
          "も",
          "ま"
        ],
        "correctAnswer": "まつり"
      },
      {
        "id": "u17_l3_1",
        "type": "listen",
        "prompt": "茶道",
        "furigana": "さどう",
        "romaji": "sadou",
        "english": "Tea ceremony",
        "audioText": "さどう",
        "options": [
          "Shinto shrine",
          "Confirming Worship / paying respects at shrine",
          "Festival",
          "Tea ceremony"
        ],
        "correctAnswer": "Tea ceremony"
      },
      {
        "id": "u17_l3_2",
        "type": "spell",
        "prompt": "茶道",
        "furigana": "さどう",
        "romaji": "sadou",
        "english": "Build 'Tea ceremony'",
        "audioText": "さどう",
        "tileBank": [
          "ど",
          "ひ",
          "に",
          "さ",
          "れ",
          "め",
          "ま",
          "う"
        ],
        "correctAnswer": "さどう"
      },
      {
        "id": "u17_l5_1",
        "type": "listen",
        "prompt": "歴史",
        "furigana": "れきし",
        "romaji": "rekishi",
        "english": "History",
        "audioText": "れきし",
        "options": [
          "Omen / good fortune",
          "Confirming Festival",
          "History",
          "Ceremony / rite"
        ],
        "correctAnswer": "History"
      },
      {
        "id": "u17_l5_2",
        "type": "spell",
        "prompt": "歴史",
        "furigana": "れきし",
        "romaji": "rekishi",
        "english": "Build 'History'",
        "audioText": "れきし",
        "tileBank": [
          "の",
          "き",
          "も",
          "を",
          "れ",
          "こ",
          "ら",
          "し"
        ],
        "correctAnswer": "れきし"
      },
      {
        "id": "u17_l7_1",
        "type": "listen",
        "prompt": "参拝の確認",
        "furigana": "さんぱいのかくにん",
        "romaji": "sanpai no kakunin",
        "english": "Confirming Worship / paying respects at shrine",
        "audioText": "さんぱいのかくにん",
        "options": [
          "To inherit / pass down",
          "Confirming History",
          "Shinto shrine",
          "Confirming Worship / paying respects at shrine"
        ],
        "correctAnswer": "Confirming Worship / paying respects at shrine"
      },
      {
        "id": "u17_l7_2",
        "type": "spell",
        "prompt": "参拝の確認",
        "furigana": "さんぱいのかくにん",
        "romaji": "sanpai no kakunin",
        "english": "Build 'Confirming Worship / paying respects at shrine'",
        "audioText": "さんぱいのかくにん",
        "tileBank": [
          "く",
          "か",
          "い",
          "ん",
          "さ",
          "に",
          "ぱ",
          "の"
        ],
        "correctAnswer": "さんぱいのかくにん"
      },
      {
        "id": "u17_l9_1",
        "type": "listen",
        "prompt": "お盆の確認",
        "furigana": "おぼんのかくにん",
        "romaji": "obon no kakunin",
        "english": "Confirming Obon ancestral holiday",
        "audioText": "おぼんのかくにん",
        "options": [
          "Confirming First shrine visit of New Year",
          "Confirming Obon ancestral holiday",
          "Confirming Tradition / heritage",
          "Omen / good fortune"
        ],
        "correctAnswer": "Confirming Obon ancestral holiday"
      },
      {
        "id": "u17_l9_2",
        "type": "spell",
        "prompt": "お盆の確認",
        "furigana": "おぼんのかくにん",
        "romaji": "obon no kakunin",
        "english": "Build 'Confirming Obon ancestral holiday'",
        "audioText": "おぼんのかくにん",
        "tileBank": [
          "ぼ",
          "く",
          "に",
          "か",
          "ん",
          "の",
          "お",
          "ん"
        ],
        "correctAnswer": "おぼんのかくにん"
      },
      {
        "id": "u17_l11_1",
        "type": "listen",
        "prompt": "祭りの確認",
        "furigana": "まつりのかくにん",
        "romaji": "matsuri no kakunin",
        "english": "Confirming Festival",
        "audioText": "まつりのかくにん",
        "options": [
          "Confirming Tea ceremony",
          "Confirming Portable shrine carried in festivals",
          "First shrine visit of New Year",
          "Confirming Festival"
        ],
        "correctAnswer": "Confirming Festival"
      },
      {
        "id": "u17_l11_2",
        "type": "spell",
        "prompt": "祭りの確認",
        "furigana": "まつりのかくにん",
        "romaji": "matsuri no kakunin",
        "english": "Build 'Confirming Festival'",
        "audioText": "まつりのかくにん",
        "tileBank": [
          "か",
          "に",
          "く",
          "つ",
          "の",
          "り",
          "ま",
          "ん"
        ],
        "correctAnswer": "まつりのかくにん"
      }
    ]
  }
};
