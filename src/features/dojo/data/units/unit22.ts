import type { DojoUnit } from "../../models/dojo.model";

export const unit22: DojoUnit = {
  "id": "unit_22",
  "unitNumber": 22,
  "title": "Subtle Emotional Nuances & Reactions",
  "titleJp": "感情の機微と態度",
  "description": "Convey layered feelings and psychological tensions using ~tamaranai, ~te naranai, and ~zaru o enai.",
  "icon": "🎭",
  "themeColor": "#DB2777",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u22_l1",
      "unitId": "unit_22",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Can't bear / irresistibly & Can't help feeling...",
      "titleJp": "たまらない・てならない",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "たまらない",
        "てならない",
        "ざるを得ない"
      ],
      "kanjiKeywords": [
        "得"
      ],
      "items": [
        {
          "id": "u22_l1_1",
          "type": "listen",
          "prompt": "たまらない",
          "furigana": "たまらない",
          "romaji": "tamaranai",
          "english": "Can't bear / irresistibly",
          "audioText": "たまらない",
          "options": [
            "Confirming Can't help feeling...",
            "Disappointment",
            "Can't bear / irresistibly",
            "Confirming Being deeply moved"
          ],
          "correctAnswer": "Can't bear / irresistibly"
        },
        {
          "id": "u22_l1_2",
          "type": "spell",
          "prompt": "たまらない",
          "furigana": "たまらない",
          "romaji": "tamaranai",
          "english": "Build 'Can't bear / irresistibly'",
          "audioText": "たまらない",
          "tileBank": [
            "て",
            "ね",
            "な",
            "た",
            "せ",
            "ま",
            "い",
            "ら"
          ],
          "correctAnswer": "たまらない"
        },
        {
          "id": "u22_l1_3",
          "type": "cloze",
          "prompt": "私はてならないがすきです",
          "furigana": "わたしはてならないがすきです",
          "romaji": "Watashi wa te naranai ga suki desu.",
          "english": "Fill in the blank with the correct particle for Can't help feeling....",
          "audioText": "てならない",
          "clozeSentence": "これはてならない {{BLANK}} す。",
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
          "id": "u22_l1_4",
          "type": "scramble",
          "prompt": "これはてならないです",
          "furigana": "これはてならないです",
          "romaji": "Kore wa te naranai desu.",
          "english": "This is Can't help feeling....",
          "audioText": "これはてならないです",
          "scrambleTokens": [
            "ではありません",
            "てならない",
            "それ",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "てならない",
            "です"
          ],
          "correctAnswer": "これはてならないです"
        },
        {
          "id": "u22_l1_5",
          "type": "speak",
          "prompt": "ざるを得ない",
          "furigana": "ざるをえない",
          "romaji": "zaru o enai",
          "english": "Pronounce: Can't avoid doing / compelled",
          "audioText": "ざるをえない",
          "targetSpeech": "ざるを得ない",
          "options": [
            "Can't avoid doing / compelled",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ざるを得ない"
        },
        {
          "id": "u22_l1_6",
          "type": "dictate",
          "prompt": "ざるを得ないをお願いします",
          "furigana": "ざるをえないをおねがいします",
          "romaji": "zaru o enai o onegaishimasu.",
          "english": "Can't avoid doing / compelled, please.",
          "audioText": "ざるを得ないをお願いします",
          "dictateTokens": [
            "お願いします",
            "ざるを得ない",
            "を",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "ざるを得ない",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ざるを得ないをお願いします"
        },
        {
          "id": "u22_l1_7",
          "type": "match",
          "prompt": "たまらない・てならない・ざるを得ない・感動",
          "furigana": "たまらない・てならない・ざるをえない・かんどう",
          "romaji": "tamaranai, te naranai, zaru o enai, kandou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "たまらない",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "たまらない",
              "right": "Can't bear / irresistibly",
              "furigana": "たまらない",
              "romaji": "tamaranai"
            },
            {
              "id": "p_1",
              "left": "てならない",
              "right": "Can't help feeling...",
              "furigana": "てならない",
              "romaji": "te naranai"
            },
            {
              "id": "p_2",
              "left": "ざるを得ない",
              "right": "Can't avoid doing / compelled",
              "furigana": "ざるをえない",
              "romaji": "zaru o enai"
            },
            {
              "id": "p_3",
              "left": "感動",
              "right": "Being deeply moved",
              "furigana": "かんどう",
              "romaji": "kandou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l1_8",
          "type": "dialogue",
          "prompt": "たまらないについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "たまらないについて教えていただけますか？",
          "furigana": "たまらないについて教えていただけますか？",
          "romaji": "tamaranai ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Can't bear / irresistibly?",
          "audioText": "たまらないについて教えていただけますか？",
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
      "id": "u22_l2",
      "unitId": "unit_22",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Being deeply moved & Impatience / anxiety",
      "titleJp": "感動・焦り",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "感動",
        "焦り",
        "悔しい"
      ],
      "kanjiKeywords": [
        "感",
        "動",
        "焦",
        "悔"
      ],
      "items": [
        {
          "id": "u22_l2_1",
          "type": "listen",
          "prompt": "感動",
          "furigana": "かんどう",
          "romaji": "kandou",
          "english": "Being deeply moved",
          "audioText": "かんどう",
          "options": [
            "To be bewildered / perplexed",
            "Being deeply moved",
            "Can't bear / irresistibly",
            "Confirming Relief"
          ],
          "correctAnswer": "Being deeply moved"
        },
        {
          "id": "u22_l2_2",
          "type": "spell",
          "prompt": "感動",
          "furigana": "かんどう",
          "romaji": "kandou",
          "english": "Build 'Being deeply moved'",
          "audioText": "かんどう",
          "tileBank": [
            "ん",
            "う",
            "に",
            "の",
            "ど",
            "か",
            "み",
            "も"
          ],
          "correctAnswer": "かんどう"
        },
        {
          "id": "u22_l2_3",
          "type": "cloze",
          "prompt": "私は焦りがすきです",
          "furigana": "わたしはあせりがすきです",
          "romaji": "Watashi wa aseri ga suki desu.",
          "english": "Fill in the blank with the correct particle for Impatience / anxiety.",
          "audioText": "焦り",
          "clozeSentence": "これは焦り {{BLANK}} す。",
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
          "id": "u22_l2_4",
          "type": "scramble",
          "prompt": "これは焦りです",
          "furigana": "これはあせりです",
          "romaji": "Kore wa aseri desu.",
          "english": "This is Impatience / anxiety.",
          "audioText": "これは焦りです",
          "scrambleTokens": [
            "これは",
            "焦り",
            "ではありません",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "焦り",
            "です"
          ],
          "correctAnswer": "これは焦りです"
        },
        {
          "id": "u22_l2_5",
          "type": "speak",
          "prompt": "悔しい",
          "furigana": "くやしい",
          "romaji": "kuyashii",
          "english": "Pronounce: Frustrated / vexed",
          "audioText": "くやしい",
          "targetSpeech": "悔しい",
          "options": [
            "Frustrated / vexed",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "悔しい"
        },
        {
          "id": "u22_l2_6",
          "type": "dictate",
          "prompt": "悔しいをお願いします",
          "furigana": "くやしいをおねがいします",
          "romaji": "kuyashii o onegaishimasu.",
          "english": "Frustrated / vexed, please.",
          "audioText": "悔しいをお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "ありがとう",
            "悔しい",
            "です"
          ],
          "dictateSolution": [
            "悔しい",
            "を",
            "お願いします"
          ],
          "correctAnswer": "悔しいをお願いします"
        },
        {
          "id": "u22_l2_7",
          "type": "match",
          "prompt": "感動・焦り・悔しい・失望",
          "furigana": "かんどう・あせり・くやしい・しつぼう",
          "romaji": "kandou, aseri, kuyashii, shitsubou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かんどう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "感動",
              "right": "Being deeply moved",
              "furigana": "かんどう",
              "romaji": "kandou"
            },
            {
              "id": "p_1",
              "left": "焦り",
              "right": "Impatience / anxiety",
              "furigana": "あせり",
              "romaji": "aseri"
            },
            {
              "id": "p_2",
              "left": "悔しい",
              "right": "Frustrated / vexed",
              "furigana": "くやしい",
              "romaji": "kuyashii"
            },
            {
              "id": "p_3",
              "left": "失望",
              "right": "Disappointment",
              "furigana": "しつぼう",
              "romaji": "shitsubou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l2_8",
          "type": "dialogue",
          "prompt": "てならないの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "てならないの準備はできていますか？",
          "furigana": "てならないの準備はできていますか？",
          "romaji": "te naranai no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Can't help feeling... ready?",
          "audioText": "てならないの準備はできていますか？",
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
      "id": "u22_l3",
      "unitId": "unit_22",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Disappointment & Empathy",
      "titleJp": "失望・共感",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "失望",
        "共感",
        "違和感"
      ],
      "kanjiKeywords": [
        "失",
        "望",
        "共",
        "感",
        "違",
        "和",
        "感"
      ],
      "items": [
        {
          "id": "u22_l3_1",
          "type": "listen",
          "prompt": "失望",
          "furigana": "しつぼう",
          "romaji": "shitsubou",
          "english": "Disappointment",
          "audioText": "しつぼう",
          "options": [
            "Confirming Sense of discomfort / out of place",
            "Confirming Can't avoid doing / compelled",
            "Confirming Relief",
            "Disappointment"
          ],
          "correctAnswer": "Disappointment"
        },
        {
          "id": "u22_l3_2",
          "type": "spell",
          "prompt": "失望",
          "furigana": "しつぼう",
          "romaji": "shitsubou",
          "english": "Build 'Disappointment'",
          "audioText": "しつぼう",
          "tileBank": [
            "さ",
            "つ",
            "う",
            "ひ",
            "も",
            "ぼ",
            "し",
            "ら"
          ],
          "correctAnswer": "しつぼう"
        },
        {
          "id": "u22_l3_3",
          "type": "cloze",
          "prompt": "私は共感がすきです",
          "furigana": "わたしはきょうかんがすきです",
          "romaji": "Watashi wa kyoukan ga suki desu.",
          "english": "Fill in the blank with the correct particle for Empathy.",
          "audioText": "共感",
          "clozeSentence": "これは共感 {{BLANK}} す。",
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
          "id": "u22_l3_4",
          "type": "scramble",
          "prompt": "これは共感です",
          "furigana": "これはきょうかんです",
          "romaji": "Kore wa kyoukan desu.",
          "english": "This is Empathy.",
          "audioText": "これは共感です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "共感",
            "です",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "共感",
            "です"
          ],
          "correctAnswer": "これは共感です"
        },
        {
          "id": "u22_l3_5",
          "type": "speak",
          "prompt": "違和感",
          "furigana": "いわかん",
          "romaji": "iwakan",
          "english": "Pronounce: Sense of discomfort / out of place",
          "audioText": "いわかん",
          "targetSpeech": "違和感",
          "options": [
            "Sense of discomfort / out of place",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "違和感"
        },
        {
          "id": "u22_l3_6",
          "type": "dictate",
          "prompt": "違和感をお願いします",
          "furigana": "いわかんをおねがいします",
          "romaji": "iwakan o onegaishimasu.",
          "english": "Sense of discomfort / out of place, please.",
          "audioText": "違和感をお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "を",
            "です",
            "違和感"
          ],
          "dictateSolution": [
            "違和感",
            "を",
            "お願いします"
          ],
          "correctAnswer": "違和感をお願いします"
        },
        {
          "id": "u22_l3_7",
          "type": "match",
          "prompt": "失望・共感・違和感・戸惑う",
          "furigana": "しつぼう・きょうかん・いわかん・とまどう",
          "romaji": "shitsubou, kyoukan, iwakan, tomadou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しつぼう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "失望",
              "right": "Disappointment",
              "furigana": "しつぼう",
              "romaji": "shitsubou"
            },
            {
              "id": "p_1",
              "left": "共感",
              "right": "Empathy",
              "furigana": "きょうかん",
              "romaji": "kyoukan"
            },
            {
              "id": "p_2",
              "left": "違和感",
              "right": "Sense of discomfort / out of place",
              "furigana": "いわかん",
              "romaji": "iwakan"
            },
            {
              "id": "p_3",
              "left": "戸惑う",
              "right": "To be bewildered / perplexed",
              "furigana": "とまどう",
              "romaji": "tomadou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l3_8",
          "type": "dialogue",
          "prompt": "ざるを得ないについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "ざるを得ないについてどう思われますか？",
          "furigana": "ざるを得ないについてどう思われますか？",
          "romaji": "zaru o enai ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Can't avoid doing / compelled?",
          "audioText": "ざるを得ないについてどう思われますか？",
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
      "id": "u22_l4",
      "unitId": "unit_22",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "To be bewildered / perplexed & Relief",
      "titleJp": "戸惑う・安堵",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "戸惑う",
        "安堵",
        "誇り"
      ],
      "kanjiKeywords": [
        "戸",
        "惑",
        "安",
        "堵",
        "誇"
      ],
      "items": [
        {
          "id": "u22_l4_1",
          "type": "listen",
          "prompt": "戸惑う",
          "furigana": "とまどう",
          "romaji": "tomadou",
          "english": "To be bewildered / perplexed",
          "audioText": "とまどう",
          "options": [
            "Real intentions / true feelings",
            "To be bewildered / perplexed",
            "Confirming Empathy",
            "Confirming Real intentions / true feelings"
          ],
          "correctAnswer": "To be bewildered / perplexed"
        },
        {
          "id": "u22_l4_2",
          "type": "spell",
          "prompt": "戸惑う",
          "furigana": "とまどう",
          "romaji": "tomadou",
          "english": "Build 'To be bewildered / perplexed'",
          "audioText": "とまどう",
          "tileBank": [
            "ひ",
            "う",
            "と",
            "る",
            "ま",
            "ど",
            "わ",
            "す"
          ],
          "correctAnswer": "とまどう"
        },
        {
          "id": "u22_l4_3",
          "type": "cloze",
          "prompt": "私は安堵がすきです",
          "furigana": "わたしはあんどがすきです",
          "romaji": "Watashi wa ando ga suki desu.",
          "english": "Fill in the blank with the correct particle for Relief.",
          "audioText": "安堵",
          "clozeSentence": "これは安堵 {{BLANK}} す。",
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
          "id": "u22_l4_4",
          "type": "scramble",
          "prompt": "これは安堵です",
          "furigana": "これはあんどです",
          "romaji": "Kore wa ando desu.",
          "english": "This is Relief.",
          "audioText": "これは安堵です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "です",
            "安堵",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "安堵",
            "です"
          ],
          "correctAnswer": "これは安堵です"
        },
        {
          "id": "u22_l4_5",
          "type": "speak",
          "prompt": "誇り",
          "furigana": "ほこり",
          "romaji": "hokori",
          "english": "Pronounce: Pride",
          "audioText": "ほこり",
          "targetSpeech": "誇り",
          "options": [
            "Pride",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "誇り"
        },
        {
          "id": "u22_l4_6",
          "type": "dictate",
          "prompt": "誇りをお願いします",
          "furigana": "ほこりをおねがいします",
          "romaji": "hokori o onegaishimasu.",
          "english": "Pride, please.",
          "audioText": "誇りをお願いします",
          "dictateTokens": [
            "誇り",
            "ありがとう",
            "お願いします",
            "です",
            "を"
          ],
          "dictateSolution": [
            "誇り",
            "を",
            "お願いします"
          ],
          "correctAnswer": "誇りをお願いします"
        },
        {
          "id": "u22_l4_7",
          "type": "match",
          "prompt": "戸惑う・安堵・誇り・葛藤",
          "furigana": "とまどう・あんど・ほこり・かっとう",
          "romaji": "tomadou, ando, hokori, kattou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "とまどう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "戸惑う",
              "right": "To be bewildered / perplexed",
              "furigana": "とまどう",
              "romaji": "tomadou"
            },
            {
              "id": "p_1",
              "left": "安堵",
              "right": "Relief",
              "furigana": "あんど",
              "romaji": "ando"
            },
            {
              "id": "p_2",
              "left": "誇り",
              "right": "Pride",
              "furigana": "ほこり",
              "romaji": "hokori"
            },
            {
              "id": "p_3",
              "left": "葛藤",
              "right": "Inner conflict",
              "furigana": "かっとう",
              "romaji": "kattou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l4_8",
          "type": "dialogue",
          "prompt": "次は感動に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は感動に進みましょう。",
          "furigana": "次は感動に進みましょう。",
          "romaji": "Tsugi wa kandou ni susumimashou.",
          "english": "Speaker: Let's proceed to Being deeply moved next.",
          "audioText": "次は感動に進みましょう。",
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
      "id": "u22_l5",
      "unitId": "unit_22",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Inner conflict & Resolution / determination",
      "titleJp": "葛藤・決断",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "葛藤",
        "決断",
        "本音"
      ],
      "kanjiKeywords": [
        "葛",
        "藤",
        "決",
        "断",
        "本",
        "音"
      ],
      "items": [
        {
          "id": "u22_l5_1",
          "type": "listen",
          "prompt": "葛藤",
          "furigana": "かっとう",
          "romaji": "kattou",
          "english": "Inner conflict",
          "audioText": "かっとう",
          "options": [
            "Confirming Real intentions / true feelings",
            "Can't help feeling...",
            "Inner conflict",
            "Confirming To be bewildered / perplexed"
          ],
          "correctAnswer": "Inner conflict"
        },
        {
          "id": "u22_l5_2",
          "type": "spell",
          "prompt": "葛藤",
          "furigana": "かっとう",
          "romaji": "kattou",
          "english": "Build 'Inner conflict'",
          "audioText": "かっとう",
          "tileBank": [
            "う",
            "っ",
            "か",
            "ね",
            "ろ",
            "よ",
            "と",
            "の"
          ],
          "correctAnswer": "かっとう"
        },
        {
          "id": "u22_l5_3",
          "type": "cloze",
          "prompt": "私は決断がすきです",
          "furigana": "わたしはけつだんがすきです",
          "romaji": "Watashi wa ketsudan ga suki desu.",
          "english": "Fill in the blank with the correct particle for Resolution / determination.",
          "audioText": "決断",
          "clozeSentence": "これは決断 {{BLANK}} す。",
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
          "id": "u22_l5_4",
          "type": "scramble",
          "prompt": "これは決断です",
          "furigana": "これはけつだんです",
          "romaji": "Kore wa ketsudan desu.",
          "english": "This is Resolution / determination.",
          "audioText": "これは決断です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "決断",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "決断",
            "です"
          ],
          "correctAnswer": "これは決断です"
        },
        {
          "id": "u22_l5_5",
          "type": "speak",
          "prompt": "本音",
          "furigana": "ほんね",
          "romaji": "honne",
          "english": "Pronounce: Real intentions / true feelings",
          "audioText": "ほんね",
          "targetSpeech": "本音",
          "options": [
            "Real intentions / true feelings",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "本音"
        },
        {
          "id": "u22_l5_6",
          "type": "dictate",
          "prompt": "本音をお願いします",
          "furigana": "ほんねをおねがいします",
          "romaji": "honne o onegaishimasu.",
          "english": "Real intentions / true feelings, please.",
          "audioText": "本音をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "本音",
            "です",
            "を"
          ],
          "dictateSolution": [
            "本音",
            "を",
            "お願いします"
          ],
          "correctAnswer": "本音をお願いします"
        },
        {
          "id": "u22_l5_7",
          "type": "match",
          "prompt": "葛藤・決断・本音・たまらないの確認",
          "furigana": "かっとう・けつだん・ほんね・たまらないのかくにん",
          "romaji": "kattou, ketsudan, honne, tamaranai no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かっとう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "葛藤",
              "right": "Inner conflict",
              "furigana": "かっとう",
              "romaji": "kattou"
            },
            {
              "id": "p_1",
              "left": "決断",
              "right": "Resolution / determination",
              "furigana": "けつだん",
              "romaji": "ketsudan"
            },
            {
              "id": "p_2",
              "left": "本音",
              "right": "Real intentions / true feelings",
              "furigana": "ほんね",
              "romaji": "honne"
            },
            {
              "id": "p_3",
              "left": "たまらないの確認",
              "right": "Confirming Can't bear / irresistibly",
              "furigana": "たまらないのかくにん",
              "romaji": "tamaranai no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l5_8",
          "type": "dialogue",
          "prompt": "たまらないについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "たまらないについて教えていただけますか？",
          "furigana": "たまらないについて教えていただけますか？",
          "romaji": "tamaranai ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Can't bear / irresistibly?",
          "audioText": "たまらないについて教えていただけますか？",
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
      "id": "u22_l6",
      "unitId": "unit_22",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Can't bear / irresistibly & Confirming Can't help feeling...",
      "titleJp": "たまらないの確認・てならないの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "たまらないの確認",
        "てならないの確認",
        "ざるを得ないの確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "確",
        "認",
        "得",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u22_l6_1",
          "type": "listen",
          "prompt": "たまらないの確認",
          "furigana": "たまらないのかくにん",
          "romaji": "tamaranai no kakunin",
          "english": "Confirming Can't bear / irresistibly",
          "audioText": "たまらないのかくにん",
          "options": [
            "Impatience / anxiety",
            "Confirming Inner conflict",
            "Confirming Can't bear / irresistibly",
            "Confirming Empathy"
          ],
          "correctAnswer": "Confirming Can't bear / irresistibly"
        },
        {
          "id": "u22_l6_2",
          "type": "spell",
          "prompt": "たまらないの確認",
          "furigana": "たまらないのかくにん",
          "romaji": "tamaranai no kakunin",
          "english": "Build 'Confirming Can't bear / irresistibly'",
          "audioText": "たまらないのかくにん",
          "tileBank": [
            "の",
            "ま",
            "く",
            "い",
            "ら",
            "な",
            "た",
            "か"
          ],
          "correctAnswer": "たまらないのかくにん"
        },
        {
          "id": "u22_l6_3",
          "type": "cloze",
          "prompt": "私はてならないの確認がすきです",
          "furigana": "わたしはてならないのかくにんがすきです",
          "romaji": "Watashi wa te naranai no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Can't help feeling....",
          "audioText": "てならないの確認",
          "clozeSentence": "これはてならないの確認 {{BLANK}} す。",
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
          "id": "u22_l6_4",
          "type": "scramble",
          "prompt": "これはてならないの確認です",
          "furigana": "これはてならないのかくにんです",
          "romaji": "Kore wa te naranai no kakunin desu.",
          "english": "This is Confirming Can't help feeling....",
          "audioText": "これはてならないの確認です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "てならないの確認",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "てならないの確認",
            "です"
          ],
          "correctAnswer": "これはてならないの確認です"
        },
        {
          "id": "u22_l6_5",
          "type": "speak",
          "prompt": "ざるを得ないの確認",
          "furigana": "ざるをえないのかくにん",
          "romaji": "zaru o enai no kakunin",
          "english": "Pronounce: Confirming Can't avoid doing / compelled",
          "audioText": "ざるをえないのかくにん",
          "targetSpeech": "ざるを得ないの確認",
          "options": [
            "Confirming Can't avoid doing / compelled",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ざるを得ないの確認"
        },
        {
          "id": "u22_l6_6",
          "type": "dictate",
          "prompt": "ざるを得ないの確認をお願いします",
          "furigana": "ざるをえないのかくにんをおねがいします",
          "romaji": "zaru o enai no kakunin o onegaishimasu.",
          "english": "Confirming Can't avoid doing / compelled, please.",
          "audioText": "ざるを得ないの確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "を",
            "ざるを得ないの確認",
            "です"
          ],
          "dictateSolution": [
            "ざるを得ないの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ざるを得ないの確認をお願いします"
        },
        {
          "id": "u22_l6_7",
          "type": "match",
          "prompt": "たまらないの確認・てならないの確認・ざるを得ないの確認・感動の確認",
          "furigana": "たまらないのかくにん・てならないのかくにん・ざるをえないのかくにん・かんどうのかくにん",
          "romaji": "tamaranai no kakunin, te naranai no kakunin, zaru o enai no kakunin, kandou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "たまらないのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "たまらないの確認",
              "right": "Confirming Can't bear / irresistibly",
              "furigana": "たまらないのかくにん",
              "romaji": "tamaranai no kakunin"
            },
            {
              "id": "p_1",
              "left": "てならないの確認",
              "right": "Confirming Can't help feeling...",
              "furigana": "てならないのかくにん",
              "romaji": "te naranai no kakunin"
            },
            {
              "id": "p_2",
              "left": "ざるを得ないの確認",
              "right": "Confirming Can't avoid doing / compelled",
              "furigana": "ざるをえないのかくにん",
              "romaji": "zaru o enai no kakunin"
            },
            {
              "id": "p_3",
              "left": "感動の確認",
              "right": "Confirming Being deeply moved",
              "furigana": "かんどうのかくにん",
              "romaji": "kandou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l6_8",
          "type": "dialogue",
          "prompt": "てならないの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "てならないの準備はできていますか？",
          "furigana": "てならないの準備はできていますか？",
          "romaji": "te naranai no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Can't help feeling... ready?",
          "audioText": "てならないの準備はできていますか？",
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
      "id": "u22_l7",
      "unitId": "unit_22",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Being deeply moved & Confirming Impatience / anxiety",
      "titleJp": "感動の確認・焦りの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "感動の確認",
        "焦りの確認",
        "悔しいの確認"
      ],
      "kanjiKeywords": [
        "感",
        "動",
        "確",
        "認",
        "焦",
        "確",
        "認",
        "悔",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u22_l7_1",
          "type": "listen",
          "prompt": "感動の確認",
          "furigana": "かんどうのかくにん",
          "romaji": "kandou no kakunin",
          "english": "Confirming Being deeply moved",
          "audioText": "かんどうのかくにん",
          "options": [
            "Confirming Frustrated / vexed",
            "Confirming Can't bear / irresistibly",
            "Pride",
            "Confirming Being deeply moved"
          ],
          "correctAnswer": "Confirming Being deeply moved"
        },
        {
          "id": "u22_l7_2",
          "type": "spell",
          "prompt": "感動の確認",
          "furigana": "かんどうのかくにん",
          "romaji": "kandou no kakunin",
          "english": "Build 'Confirming Being deeply moved'",
          "audioText": "かんどうのかくにん",
          "tileBank": [
            "ど",
            "ん",
            "う",
            "に",
            "か",
            "く",
            "の",
            "か"
          ],
          "correctAnswer": "かんどうのかくにん"
        },
        {
          "id": "u22_l7_3",
          "type": "cloze",
          "prompt": "私は焦りの確認がすきです",
          "furigana": "わたしはあせりのかくにんがすきです",
          "romaji": "Watashi wa aseri no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Impatience / anxiety.",
          "audioText": "焦りの確認",
          "clozeSentence": "これは焦りの確認 {{BLANK}} す。",
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
          "id": "u22_l7_4",
          "type": "scramble",
          "prompt": "これは焦りの確認です",
          "furigana": "これはあせりのかくにんです",
          "romaji": "Kore wa aseri no kakunin desu.",
          "english": "This is Confirming Impatience / anxiety.",
          "audioText": "これは焦りの確認です",
          "scrambleTokens": [
            "です",
            "これは",
            "それ",
            "焦りの確認",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "焦りの確認",
            "です"
          ],
          "correctAnswer": "これは焦りの確認です"
        },
        {
          "id": "u22_l7_5",
          "type": "speak",
          "prompt": "悔しいの確認",
          "furigana": "くやしいのかくにん",
          "romaji": "kuyashii no kakunin",
          "english": "Pronounce: Confirming Frustrated / vexed",
          "audioText": "くやしいのかくにん",
          "targetSpeech": "悔しいの確認",
          "options": [
            "Confirming Frustrated / vexed",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "悔しいの確認"
        },
        {
          "id": "u22_l7_6",
          "type": "dictate",
          "prompt": "悔しいの確認をお願いします",
          "furigana": "くやしいのかくにんをおねがいします",
          "romaji": "kuyashii no kakunin o onegaishimasu.",
          "english": "Confirming Frustrated / vexed, please.",
          "audioText": "悔しいの確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "です",
            "悔しいの確認",
            "お願いします"
          ],
          "dictateSolution": [
            "悔しいの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "悔しいの確認をお願いします"
        },
        {
          "id": "u22_l7_7",
          "type": "match",
          "prompt": "感動の確認・焦りの確認・悔しいの確認・失望の確認",
          "furigana": "かんどうのかくにん・あせりのかくにん・くやしいのかくにん・しつぼうのかくにん",
          "romaji": "kandou no kakunin, aseri no kakunin, kuyashii no kakunin, shitsubou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かんどうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "感動の確認",
              "right": "Confirming Being deeply moved",
              "furigana": "かんどうのかくにん",
              "romaji": "kandou no kakunin"
            },
            {
              "id": "p_1",
              "left": "焦りの確認",
              "right": "Confirming Impatience / anxiety",
              "furigana": "あせりのかくにん",
              "romaji": "aseri no kakunin"
            },
            {
              "id": "p_2",
              "left": "悔しいの確認",
              "right": "Confirming Frustrated / vexed",
              "furigana": "くやしいのかくにん",
              "romaji": "kuyashii no kakunin"
            },
            {
              "id": "p_3",
              "left": "失望の確認",
              "right": "Confirming Disappointment",
              "furigana": "しつぼうのかくにん",
              "romaji": "shitsubou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l7_8",
          "type": "dialogue",
          "prompt": "ざるを得ないについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "ざるを得ないについてどう思われますか？",
          "furigana": "ざるを得ないについてどう思われますか？",
          "romaji": "zaru o enai ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Can't avoid doing / compelled?",
          "audioText": "ざるを得ないについてどう思われますか？",
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
      "id": "u22_l8",
      "unitId": "unit_22",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Disappointment & Confirming Empathy",
      "titleJp": "失望の確認・共感の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "失望の確認",
        "共感の確認",
        "違和感の確認"
      ],
      "kanjiKeywords": [
        "失",
        "望",
        "確",
        "認",
        "共",
        "感",
        "確",
        "認",
        "違",
        "和",
        "感",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u22_l8_1",
          "type": "listen",
          "prompt": "失望の確認",
          "furigana": "しつぼうのかくにん",
          "romaji": "shitsubou no kakunin",
          "english": "Confirming Disappointment",
          "audioText": "しつぼうのかくにん",
          "options": [
            "Resolution / determination",
            "To be bewildered / perplexed",
            "Sense of discomfort / out of place",
            "Confirming Disappointment"
          ],
          "correctAnswer": "Confirming Disappointment"
        },
        {
          "id": "u22_l8_2",
          "type": "spell",
          "prompt": "失望の確認",
          "furigana": "しつぼうのかくにん",
          "romaji": "shitsubou no kakunin",
          "english": "Build 'Confirming Disappointment'",
          "audioText": "しつぼうのかくにん",
          "tileBank": [
            "に",
            "か",
            "つ",
            "く",
            "ぼ",
            "う",
            "の",
            "し"
          ],
          "correctAnswer": "しつぼうのかくにん"
        },
        {
          "id": "u22_l8_3",
          "type": "cloze",
          "prompt": "私は共感の確認がすきです",
          "furigana": "わたしはきょうかんのかくにんがすきです",
          "romaji": "Watashi wa kyoukan no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Empathy.",
          "audioText": "共感の確認",
          "clozeSentence": "これは共感の確認 {{BLANK}} す。",
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
          "id": "u22_l8_4",
          "type": "scramble",
          "prompt": "これは共感の確認です",
          "furigana": "これはきょうかんのかくにんです",
          "romaji": "Kore wa kyoukan no kakunin desu.",
          "english": "This is Confirming Empathy.",
          "audioText": "これは共感の確認です",
          "scrambleTokens": [
            "これは",
            "共感の確認",
            "それ",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "共感の確認",
            "です"
          ],
          "correctAnswer": "これは共感の確認です"
        },
        {
          "id": "u22_l8_5",
          "type": "speak",
          "prompt": "違和感の確認",
          "furigana": "いわかんのかくにん",
          "romaji": "iwakan no kakunin",
          "english": "Pronounce: Confirming Sense of discomfort / out of place",
          "audioText": "いわかんのかくにん",
          "targetSpeech": "違和感の確認",
          "options": [
            "Confirming Sense of discomfort / out of place",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "違和感の確認"
        },
        {
          "id": "u22_l8_6",
          "type": "dictate",
          "prompt": "違和感の確認をお願いします",
          "furigana": "いわかんのかくにんをおねがいします",
          "romaji": "iwakan no kakunin o onegaishimasu.",
          "english": "Confirming Sense of discomfort / out of place, please.",
          "audioText": "違和感の確認をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "です",
            "ありがとう",
            "違和感の確認"
          ],
          "dictateSolution": [
            "違和感の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "違和感の確認をお願いします"
        },
        {
          "id": "u22_l8_7",
          "type": "match",
          "prompt": "失望の確認・共感の確認・違和感の確認・戸惑うの確認",
          "furigana": "しつぼうのかくにん・きょうかんのかくにん・いわかんのかくにん・とまどうのかくにん",
          "romaji": "shitsubou no kakunin, kyoukan no kakunin, iwakan no kakunin, tomadou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しつぼうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "失望の確認",
              "right": "Confirming Disappointment",
              "furigana": "しつぼうのかくにん",
              "romaji": "shitsubou no kakunin"
            },
            {
              "id": "p_1",
              "left": "共感の確認",
              "right": "Confirming Empathy",
              "furigana": "きょうかんのかくにん",
              "romaji": "kyoukan no kakunin"
            },
            {
              "id": "p_2",
              "left": "違和感の確認",
              "right": "Confirming Sense of discomfort / out of place",
              "furigana": "いわかんのかくにん",
              "romaji": "iwakan no kakunin"
            },
            {
              "id": "p_3",
              "left": "戸惑うの確認",
              "right": "Confirming To be bewildered / perplexed",
              "furigana": "とまどうのかくにん",
              "romaji": "tomadou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l8_8",
          "type": "dialogue",
          "prompt": "次は感動に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は感動に進みましょう。",
          "furigana": "次は感動に進みましょう。",
          "romaji": "Tsugi wa kandou ni susumimashou.",
          "english": "Speaker: Let's proceed to Being deeply moved next.",
          "audioText": "次は感動に進みましょう。",
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
      "id": "u22_l9",
      "unitId": "unit_22",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming To be bewildered / perplexed & Confirming Relief",
      "titleJp": "戸惑うの確認・安堵の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "戸惑うの確認",
        "安堵の確認",
        "誇りの確認"
      ],
      "kanjiKeywords": [
        "戸",
        "惑",
        "確",
        "認",
        "安",
        "堵",
        "確",
        "認",
        "誇",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u22_l9_1",
          "type": "listen",
          "prompt": "戸惑うの確認",
          "furigana": "とまどうのかくにん",
          "romaji": "tomadou no kakunin",
          "english": "Confirming To be bewildered / perplexed",
          "audioText": "とまどうのかくにん",
          "options": [
            "Confirming To be bewildered / perplexed",
            "Confirming Empathy",
            "Confirming Pride",
            "Disappointment"
          ],
          "correctAnswer": "Confirming To be bewildered / perplexed"
        },
        {
          "id": "u22_l9_2",
          "type": "spell",
          "prompt": "戸惑うの確認",
          "furigana": "とまどうのかくにん",
          "romaji": "tomadou no kakunin",
          "english": "Build 'Confirming To be bewildered / perplexed'",
          "audioText": "とまどうのかくにん",
          "tileBank": [
            "に",
            "か",
            "ど",
            "と",
            "う",
            "の",
            "く",
            "ま"
          ],
          "correctAnswer": "とまどうのかくにん"
        },
        {
          "id": "u22_l9_3",
          "type": "cloze",
          "prompt": "私は安堵の確認がすきです",
          "furigana": "わたしはあんどのかくにんがすきです",
          "romaji": "Watashi wa ando no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Relief.",
          "audioText": "安堵の確認",
          "clozeSentence": "これは安堵の確認 {{BLANK}} す。",
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
          "id": "u22_l9_4",
          "type": "scramble",
          "prompt": "これは安堵の確認です",
          "furigana": "これはあんどのかくにんです",
          "romaji": "Kore wa ando no kakunin desu.",
          "english": "This is Confirming Relief.",
          "audioText": "これは安堵の確認です",
          "scrambleTokens": [
            "これは",
            "安堵の確認",
            "ではありません",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "安堵の確認",
            "です"
          ],
          "correctAnswer": "これは安堵の確認です"
        },
        {
          "id": "u22_l9_5",
          "type": "speak",
          "prompt": "誇りの確認",
          "furigana": "ほこりのかくにん",
          "romaji": "hokori no kakunin",
          "english": "Pronounce: Confirming Pride",
          "audioText": "ほこりのかくにん",
          "targetSpeech": "誇りの確認",
          "options": [
            "Confirming Pride",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "誇りの確認"
        },
        {
          "id": "u22_l9_6",
          "type": "dictate",
          "prompt": "誇りの確認をお願いします",
          "furigana": "ほこりのかくにんをおねがいします",
          "romaji": "hokori no kakunin o onegaishimasu.",
          "english": "Confirming Pride, please.",
          "audioText": "誇りの確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "です",
            "誇りの確認",
            "を"
          ],
          "dictateSolution": [
            "誇りの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "誇りの確認をお願いします"
        },
        {
          "id": "u22_l9_7",
          "type": "match",
          "prompt": "戸惑うの確認・安堵の確認・誇りの確認・葛藤の確認",
          "furigana": "とまどうのかくにん・あんどのかくにん・ほこりのかくにん・かっとうのかくにん",
          "romaji": "tomadou no kakunin, ando no kakunin, hokori no kakunin, kattou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "とまどうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "戸惑うの確認",
              "right": "Confirming To be bewildered / perplexed",
              "furigana": "とまどうのかくにん",
              "romaji": "tomadou no kakunin"
            },
            {
              "id": "p_1",
              "left": "安堵の確認",
              "right": "Confirming Relief",
              "furigana": "あんどのかくにん",
              "romaji": "ando no kakunin"
            },
            {
              "id": "p_2",
              "left": "誇りの確認",
              "right": "Confirming Pride",
              "furigana": "ほこりのかくにん",
              "romaji": "hokori no kakunin"
            },
            {
              "id": "p_3",
              "left": "葛藤の確認",
              "right": "Confirming Inner conflict",
              "furigana": "かっとうのかくにん",
              "romaji": "kattou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l9_8",
          "type": "dialogue",
          "prompt": "たまらないについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "たまらないについて教えていただけますか？",
          "furigana": "たまらないについて教えていただけますか？",
          "romaji": "tamaranai ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Can't bear / irresistibly?",
          "audioText": "たまらないについて教えていただけますか？",
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
      "id": "u22_l10",
      "unitId": "unit_22",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Inner conflict & Confirming Resolution / determination",
      "titleJp": "葛藤の確認・決断の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "葛藤の確認",
        "決断の確認",
        "本音の確認"
      ],
      "kanjiKeywords": [
        "葛",
        "藤",
        "確",
        "認",
        "決",
        "断",
        "確",
        "認",
        "本",
        "音",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u22_l10_1",
          "type": "listen",
          "prompt": "葛藤の確認",
          "furigana": "かっとうのかくにん",
          "romaji": "kattou no kakunin",
          "english": "Confirming Inner conflict",
          "audioText": "かっとうのかくにん",
          "options": [
            "Confirming Empathy",
            "Can't help feeling...",
            "Confirming Inner conflict",
            "Confirming Being deeply moved"
          ],
          "correctAnswer": "Confirming Inner conflict"
        },
        {
          "id": "u22_l10_2",
          "type": "spell",
          "prompt": "葛藤の確認",
          "furigana": "かっとうのかくにん",
          "romaji": "kattou no kakunin",
          "english": "Build 'Confirming Inner conflict'",
          "audioText": "かっとうのかくにん",
          "tileBank": [
            "の",
            "か",
            "に",
            "っ",
            "く",
            "う",
            "と",
            "か"
          ],
          "correctAnswer": "かっとうのかくにん"
        },
        {
          "id": "u22_l10_3",
          "type": "cloze",
          "prompt": "私は決断の確認がすきです",
          "furigana": "わたしはけつだんのかくにんがすきです",
          "romaji": "Watashi wa ketsudan no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Resolution / determination.",
          "audioText": "決断の確認",
          "clozeSentence": "これは決断の確認 {{BLANK}} す。",
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
          "id": "u22_l10_4",
          "type": "scramble",
          "prompt": "これは決断の確認です",
          "furigana": "これはけつだんのかくにんです",
          "romaji": "Kore wa ketsudan no kakunin desu.",
          "english": "This is Confirming Resolution / determination.",
          "audioText": "これは決断の確認です",
          "scrambleTokens": [
            "それ",
            "これは",
            "です",
            "ではありません",
            "決断の確認"
          ],
          "scrambleSolution": [
            "これは",
            "決断の確認",
            "です"
          ],
          "correctAnswer": "これは決断の確認です"
        },
        {
          "id": "u22_l10_5",
          "type": "speak",
          "prompt": "本音の確認",
          "furigana": "ほんねのかくにん",
          "romaji": "honne no kakunin",
          "english": "Pronounce: Confirming Real intentions / true feelings",
          "audioText": "ほんねのかくにん",
          "targetSpeech": "本音の確認",
          "options": [
            "Confirming Real intentions / true feelings",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "本音の確認"
        },
        {
          "id": "u22_l10_6",
          "type": "dictate",
          "prompt": "本音の確認をお願いします",
          "furigana": "ほんねのかくにんをおねがいします",
          "romaji": "honne no kakunin o onegaishimasu.",
          "english": "Confirming Real intentions / true feelings, please.",
          "audioText": "本音の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "です",
            "を",
            "本音の確認"
          ],
          "dictateSolution": [
            "本音の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "本音の確認をお願いします"
        },
        {
          "id": "u22_l10_7",
          "type": "match",
          "prompt": "葛藤の確認・決断の確認・本音の確認・たまらないの確認",
          "furigana": "かっとうのかくにん・けつだんのかくにん・ほんねのかくにん・たまらないのかくにん",
          "romaji": "kattou no kakunin, ketsudan no kakunin, honne no kakunin, tamaranai no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かっとうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "葛藤の確認",
              "right": "Confirming Inner conflict",
              "furigana": "かっとうのかくにん",
              "romaji": "kattou no kakunin"
            },
            {
              "id": "p_1",
              "left": "決断の確認",
              "right": "Confirming Resolution / determination",
              "furigana": "けつだんのかくにん",
              "romaji": "ketsudan no kakunin"
            },
            {
              "id": "p_2",
              "left": "本音の確認",
              "right": "Confirming Real intentions / true feelings",
              "furigana": "ほんねのかくにん",
              "romaji": "honne no kakunin"
            },
            {
              "id": "p_3",
              "left": "たまらないの確認",
              "right": "Confirming Can't bear / irresistibly",
              "furigana": "たまらないのかくにん",
              "romaji": "tamaranai no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l10_8",
          "type": "dialogue",
          "prompt": "てならないの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "てならないの準備はできていますか？",
          "furigana": "てならないの準備はできていますか？",
          "romaji": "te naranai no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Can't help feeling... ready?",
          "audioText": "てならないの準備はできていますか？",
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
      "id": "u22_l11",
      "unitId": "unit_22",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Can't bear / irresistibly & Confirming Can't help feeling...",
      "titleJp": "たまらないの確認・てならないの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "たまらないの確認",
        "てならないの確認",
        "ざるを得ないの確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "確",
        "認",
        "得",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u22_l11_1",
          "type": "listen",
          "prompt": "たまらないの確認",
          "furigana": "たまらないのかくにん",
          "romaji": "tamaranai no kakunin",
          "english": "Confirming Can't bear / irresistibly",
          "audioText": "たまらないのかくにん",
          "options": [
            "Empathy",
            "Confirming Can't bear / irresistibly",
            "Pride",
            "Can't avoid doing / compelled"
          ],
          "correctAnswer": "Confirming Can't bear / irresistibly"
        },
        {
          "id": "u22_l11_2",
          "type": "spell",
          "prompt": "たまらないの確認",
          "furigana": "たまらないのかくにん",
          "romaji": "tamaranai no kakunin",
          "english": "Build 'Confirming Can't bear / irresistibly'",
          "audioText": "たまらないのかくにん",
          "tileBank": [
            "の",
            "ま",
            "か",
            "た",
            "な",
            "い",
            "ら",
            "く"
          ],
          "correctAnswer": "たまらないのかくにん"
        },
        {
          "id": "u22_l11_3",
          "type": "cloze",
          "prompt": "私はてならないの確認がすきです",
          "furigana": "わたしはてならないのかくにんがすきです",
          "romaji": "Watashi wa te naranai no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Can't help feeling....",
          "audioText": "てならないの確認",
          "clozeSentence": "これはてならないの確認 {{BLANK}} す。",
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
          "id": "u22_l11_4",
          "type": "scramble",
          "prompt": "これはてならないの確認です",
          "furigana": "これはてならないのかくにんです",
          "romaji": "Kore wa te naranai no kakunin desu.",
          "english": "This is Confirming Can't help feeling....",
          "audioText": "これはてならないの確認です",
          "scrambleTokens": [
            "ではありません",
            "てならないの確認",
            "それ",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "てならないの確認",
            "です"
          ],
          "correctAnswer": "これはてならないの確認です"
        },
        {
          "id": "u22_l11_5",
          "type": "speak",
          "prompt": "ざるを得ないの確認",
          "furigana": "ざるをえないのかくにん",
          "romaji": "zaru o enai no kakunin",
          "english": "Pronounce: Confirming Can't avoid doing / compelled",
          "audioText": "ざるをえないのかくにん",
          "targetSpeech": "ざるを得ないの確認",
          "options": [
            "Confirming Can't avoid doing / compelled",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ざるを得ないの確認"
        },
        {
          "id": "u22_l11_6",
          "type": "dictate",
          "prompt": "ざるを得ないの確認をお願いします",
          "furigana": "ざるをえないのかくにんをおねがいします",
          "romaji": "zaru o enai no kakunin o onegaishimasu.",
          "english": "Confirming Can't avoid doing / compelled, please.",
          "audioText": "ざるを得ないの確認をお願いします",
          "dictateTokens": [
            "ざるを得ないの確認",
            "を",
            "ありがとう",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "ざるを得ないの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ざるを得ないの確認をお願いします"
        },
        {
          "id": "u22_l11_7",
          "type": "match",
          "prompt": "たまらないの確認・てならないの確認・ざるを得ないの確認・感動の確認",
          "furigana": "たまらないのかくにん・てならないのかくにん・ざるをえないのかくにん・かんどうのかくにん",
          "romaji": "tamaranai no kakunin, te naranai no kakunin, zaru o enai no kakunin, kandou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "たまらないのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "たまらないの確認",
              "right": "Confirming Can't bear / irresistibly",
              "furigana": "たまらないのかくにん",
              "romaji": "tamaranai no kakunin"
            },
            {
              "id": "p_1",
              "left": "てならないの確認",
              "right": "Confirming Can't help feeling...",
              "furigana": "てならないのかくにん",
              "romaji": "te naranai no kakunin"
            },
            {
              "id": "p_2",
              "left": "ざるを得ないの確認",
              "right": "Confirming Can't avoid doing / compelled",
              "furigana": "ざるをえないのかくにん",
              "romaji": "zaru o enai no kakunin"
            },
            {
              "id": "p_3",
              "left": "感動の確認",
              "right": "Confirming Being deeply moved",
              "furigana": "かんどうのかくにん",
              "romaji": "kandou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l11_8",
          "type": "dialogue",
          "prompt": "ざるを得ないについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "ざるを得ないについてどう思われますか？",
          "furigana": "ざるを得ないについてどう思われますか？",
          "romaji": "zaru o enai ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Can't avoid doing / compelled?",
          "audioText": "ざるを得ないについてどう思われますか？",
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
      "id": "u22_l12",
      "unitId": "unit_22",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Being deeply moved & Confirming Impatience / anxiety",
      "titleJp": "感動の確認・焦りの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "感動の確認",
        "焦りの確認",
        "悔しいの確認"
      ],
      "kanjiKeywords": [
        "感",
        "動",
        "確",
        "認",
        "焦",
        "確",
        "認",
        "悔",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u22_l12_1",
          "type": "listen",
          "prompt": "感動の確認",
          "furigana": "かんどうのかくにん",
          "romaji": "kandou no kakunin",
          "english": "Confirming Being deeply moved",
          "audioText": "かんどうのかくにん",
          "options": [
            "Pride",
            "Confirming Can't avoid doing / compelled",
            "Confirming Pride",
            "Confirming Being deeply moved"
          ],
          "correctAnswer": "Confirming Being deeply moved"
        },
        {
          "id": "u22_l12_2",
          "type": "spell",
          "prompt": "感動の確認",
          "furigana": "かんどうのかくにん",
          "romaji": "kandou no kakunin",
          "english": "Build 'Confirming Being deeply moved'",
          "audioText": "かんどうのかくにん",
          "tileBank": [
            "に",
            "の",
            "ど",
            "く",
            "ん",
            "う",
            "か",
            "か"
          ],
          "correctAnswer": "かんどうのかくにん"
        },
        {
          "id": "u22_l12_3",
          "type": "cloze",
          "prompt": "私は焦りの確認がすきです",
          "furigana": "わたしはあせりのかくにんがすきです",
          "romaji": "Watashi wa aseri no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Impatience / anxiety.",
          "audioText": "焦りの確認",
          "clozeSentence": "これは焦りの確認 {{BLANK}} す。",
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
          "id": "u22_l12_4",
          "type": "scramble",
          "prompt": "これは焦りの確認です",
          "furigana": "これはあせりのかくにんです",
          "romaji": "Kore wa aseri no kakunin desu.",
          "english": "This is Confirming Impatience / anxiety.",
          "audioText": "これは焦りの確認です",
          "scrambleTokens": [
            "です",
            "焦りの確認",
            "それ",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "焦りの確認",
            "です"
          ],
          "correctAnswer": "これは焦りの確認です"
        },
        {
          "id": "u22_l12_5",
          "type": "speak",
          "prompt": "悔しいの確認",
          "furigana": "くやしいのかくにん",
          "romaji": "kuyashii no kakunin",
          "english": "Pronounce: Confirming Frustrated / vexed",
          "audioText": "くやしいのかくにん",
          "targetSpeech": "悔しいの確認",
          "options": [
            "Confirming Frustrated / vexed",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "悔しいの確認"
        },
        {
          "id": "u22_l12_6",
          "type": "dictate",
          "prompt": "悔しいの確認をお願いします",
          "furigana": "くやしいのかくにんをおねがいします",
          "romaji": "kuyashii no kakunin o onegaishimasu.",
          "english": "Confirming Frustrated / vexed, please.",
          "audioText": "悔しいの確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "を",
            "です",
            "悔しいの確認",
            "ありがとう"
          ],
          "dictateSolution": [
            "悔しいの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "悔しいの確認をお願いします"
        },
        {
          "id": "u22_l12_7",
          "type": "match",
          "prompt": "感動の確認・焦りの確認・悔しいの確認・たまらない",
          "furigana": "かんどうのかくにん・あせりのかくにん・くやしいのかくにん・たまらない",
          "romaji": "kandou no kakunin, aseri no kakunin, kuyashii no kakunin, tamaranai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かんどうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "感動の確認",
              "right": "Confirming Being deeply moved",
              "furigana": "かんどうのかくにん",
              "romaji": "kandou no kakunin"
            },
            {
              "id": "p_1",
              "left": "焦りの確認",
              "right": "Confirming Impatience / anxiety",
              "furigana": "あせりのかくにん",
              "romaji": "aseri no kakunin"
            },
            {
              "id": "p_2",
              "left": "悔しいの確認",
              "right": "Confirming Frustrated / vexed",
              "furigana": "くやしいのかくにん",
              "romaji": "kuyashii no kakunin"
            },
            {
              "id": "p_3",
              "left": "たまらない",
              "right": "Can't bear / irresistibly",
              "furigana": "たまらない",
              "romaji": "tamaranai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l12_8",
          "type": "dialogue",
          "prompt": "次は感動に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は感動に進みましょう。",
          "furigana": "次は感動に進みましょう。",
          "romaji": "Tsugi wa kandou ni susumimashou.",
          "english": "Speaker: Let's proceed to Being deeply moved next.",
          "audioText": "次は感動に進みましょう。",
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
      "id": "u22_l13",
      "unitId": "unit_22",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Can't bear / irresistibly & Can't help feeling...",
      "titleJp": "たまらない・てならない",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "たまらない",
        "てならない",
        "ざるを得ない"
      ],
      "kanjiKeywords": [
        "得"
      ],
      "items": [
        {
          "id": "u22_l13_1",
          "type": "listen",
          "prompt": "たまらない",
          "furigana": "たまらない",
          "romaji": "tamaranai",
          "english": "Can't bear / irresistibly",
          "audioText": "たまらない",
          "options": [
            "Can't bear / irresistibly",
            "Confirming Relief",
            "Relief",
            "Confirming Can't help feeling..."
          ],
          "correctAnswer": "Can't bear / irresistibly"
        },
        {
          "id": "u22_l13_2",
          "type": "spell",
          "prompt": "たまらない",
          "furigana": "たまらない",
          "romaji": "tamaranai",
          "english": "Build 'Can't bear / irresistibly'",
          "audioText": "たまらない",
          "tileBank": [
            "み",
            "す",
            "い",
            "な",
            "ひ",
            "た",
            "ま",
            "ら"
          ],
          "correctAnswer": "たまらない"
        },
        {
          "id": "u22_l13_3",
          "type": "cloze",
          "prompt": "私はてならないがすきです",
          "furigana": "わたしはてならないがすきです",
          "romaji": "Watashi wa te naranai ga suki desu.",
          "english": "Fill in the blank with the correct particle for Can't help feeling....",
          "audioText": "てならない",
          "clozeSentence": "これはてならない {{BLANK}} す。",
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
          "id": "u22_l13_4",
          "type": "scramble",
          "prompt": "これはてならないです",
          "furigana": "これはてならないです",
          "romaji": "Kore wa te naranai desu.",
          "english": "This is Can't help feeling....",
          "audioText": "これはてならないです",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "それ",
            "です",
            "てならない"
          ],
          "scrambleSolution": [
            "これは",
            "てならない",
            "です"
          ],
          "correctAnswer": "これはてならないです"
        },
        {
          "id": "u22_l13_5",
          "type": "speak",
          "prompt": "ざるを得ない",
          "furigana": "ざるをえない",
          "romaji": "zaru o enai",
          "english": "Pronounce: Can't avoid doing / compelled",
          "audioText": "ざるをえない",
          "targetSpeech": "ざるを得ない",
          "options": [
            "Can't avoid doing / compelled",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ざるを得ない"
        },
        {
          "id": "u22_l13_6",
          "type": "dictate",
          "prompt": "ざるを得ないをお願いします",
          "furigana": "ざるをえないをおねがいします",
          "romaji": "zaru o enai o onegaishimasu.",
          "english": "Can't avoid doing / compelled, please.",
          "audioText": "ざるを得ないをお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "です",
            "ざるを得ない",
            "ありがとう"
          ],
          "dictateSolution": [
            "ざるを得ない",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ざるを得ないをお願いします"
        },
        {
          "id": "u22_l13_7",
          "type": "match",
          "prompt": "たまらない・てならない・ざるを得ない・感動",
          "furigana": "たまらない・てならない・ざるをえない・かんどう",
          "romaji": "tamaranai, te naranai, zaru o enai, kandou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "たまらない",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "たまらない",
              "right": "Can't bear / irresistibly",
              "furigana": "たまらない",
              "romaji": "tamaranai"
            },
            {
              "id": "p_1",
              "left": "てならない",
              "right": "Can't help feeling...",
              "furigana": "てならない",
              "romaji": "te naranai"
            },
            {
              "id": "p_2",
              "left": "ざるを得ない",
              "right": "Can't avoid doing / compelled",
              "furigana": "ざるをえない",
              "romaji": "zaru o enai"
            },
            {
              "id": "p_3",
              "left": "感動",
              "right": "Being deeply moved",
              "furigana": "かんどう",
              "romaji": "kandou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l13_8",
          "type": "dialogue",
          "prompt": "たまらないについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "たまらないについて教えていただけますか？",
          "furigana": "たまらないについて教えていただけますか？",
          "romaji": "tamaranai ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Can't bear / irresistibly?",
          "audioText": "たまらないについて教えていただけますか？",
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
      "id": "u22_l14",
      "unitId": "unit_22",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Being deeply moved & Impatience / anxiety",
      "titleJp": "感動・焦り",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "感動",
        "焦り",
        "悔しい"
      ],
      "kanjiKeywords": [
        "感",
        "動",
        "焦",
        "悔"
      ],
      "items": [
        {
          "id": "u22_l14_1",
          "type": "listen",
          "prompt": "感動",
          "furigana": "かんどう",
          "romaji": "kandou",
          "english": "Being deeply moved",
          "audioText": "かんどう",
          "options": [
            "Confirming Frustrated / vexed",
            "Can't bear / irresistibly",
            "Being deeply moved",
            "Relief"
          ],
          "correctAnswer": "Being deeply moved"
        },
        {
          "id": "u22_l14_2",
          "type": "spell",
          "prompt": "感動",
          "furigana": "かんどう",
          "romaji": "kandou",
          "english": "Build 'Being deeply moved'",
          "audioText": "かんどう",
          "tileBank": [
            "ん",
            "ま",
            "ど",
            "さ",
            "か",
            "へ",
            "う",
            "を"
          ],
          "correctAnswer": "かんどう"
        },
        {
          "id": "u22_l14_3",
          "type": "cloze",
          "prompt": "私は焦りがすきです",
          "furigana": "わたしはあせりがすきです",
          "romaji": "Watashi wa aseri ga suki desu.",
          "english": "Fill in the blank with the correct particle for Impatience / anxiety.",
          "audioText": "焦り",
          "clozeSentence": "これは焦り {{BLANK}} す。",
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
          "id": "u22_l14_4",
          "type": "scramble",
          "prompt": "これは焦りです",
          "furigana": "これはあせりです",
          "romaji": "Kore wa aseri desu.",
          "english": "This is Impatience / anxiety.",
          "audioText": "これは焦りです",
          "scrambleTokens": [
            "それ",
            "これは",
            "です",
            "焦り",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "焦り",
            "です"
          ],
          "correctAnswer": "これは焦りです"
        },
        {
          "id": "u22_l14_5",
          "type": "speak",
          "prompt": "悔しい",
          "furigana": "くやしい",
          "romaji": "kuyashii",
          "english": "Pronounce: Frustrated / vexed",
          "audioText": "くやしい",
          "targetSpeech": "悔しい",
          "options": [
            "Frustrated / vexed",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "悔しい"
        },
        {
          "id": "u22_l14_6",
          "type": "dictate",
          "prompt": "悔しいをお願いします",
          "furigana": "くやしいをおねがいします",
          "romaji": "kuyashii o onegaishimasu.",
          "english": "Frustrated / vexed, please.",
          "audioText": "悔しいをお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "を",
            "お願いします",
            "悔しい"
          ],
          "dictateSolution": [
            "悔しい",
            "を",
            "お願いします"
          ],
          "correctAnswer": "悔しいをお願いします"
        },
        {
          "id": "u22_l14_7",
          "type": "match",
          "prompt": "感動・焦り・悔しい・失望",
          "furigana": "かんどう・あせり・くやしい・しつぼう",
          "romaji": "kandou, aseri, kuyashii, shitsubou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かんどう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "感動",
              "right": "Being deeply moved",
              "furigana": "かんどう",
              "romaji": "kandou"
            },
            {
              "id": "p_1",
              "left": "焦り",
              "right": "Impatience / anxiety",
              "furigana": "あせり",
              "romaji": "aseri"
            },
            {
              "id": "p_2",
              "left": "悔しい",
              "right": "Frustrated / vexed",
              "furigana": "くやしい",
              "romaji": "kuyashii"
            },
            {
              "id": "p_3",
              "left": "失望",
              "right": "Disappointment",
              "furigana": "しつぼう",
              "romaji": "shitsubou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l14_8",
          "type": "dialogue",
          "prompt": "てならないの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "てならないの準備はできていますか？",
          "furigana": "てならないの準備はできていますか？",
          "romaji": "te naranai no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Can't help feeling... ready?",
          "audioText": "てならないの準備はできていますか？",
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
      "id": "u22_l15",
      "unitId": "unit_22",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 22 Master Exam",
      "iconType": "test",
      "title": "Unit 22 Master Exam",
      "titleJp": "第22週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "失望",
        "共感",
        "違和感"
      ],
      "kanjiKeywords": [
        "失",
        "望",
        "共",
        "感",
        "違",
        "和",
        "感"
      ],
      "items": [
        {
          "id": "u22_l15_1",
          "type": "listen",
          "prompt": "失望",
          "furigana": "しつぼう",
          "romaji": "shitsubou",
          "english": "Disappointment",
          "audioText": "しつぼう",
          "options": [
            "Disappointment",
            "Inner conflict",
            "Confirming Pride",
            "Confirming Real intentions / true feelings"
          ],
          "correctAnswer": "Disappointment"
        },
        {
          "id": "u22_l15_2",
          "type": "spell",
          "prompt": "失望",
          "furigana": "しつぼう",
          "romaji": "shitsubou",
          "english": "Build 'Disappointment'",
          "audioText": "しつぼう",
          "tileBank": [
            "つ",
            "ぼ",
            "そ",
            "う",
            "め",
            "も",
            "し",
            "お"
          ],
          "correctAnswer": "しつぼう"
        },
        {
          "id": "u22_l15_3",
          "type": "cloze",
          "prompt": "私は共感がすきです",
          "furigana": "わたしはきょうかんがすきです",
          "romaji": "Watashi wa kyoukan ga suki desu.",
          "english": "Fill in the blank with the correct particle for Empathy.",
          "audioText": "共感",
          "clozeSentence": "これは共感 {{BLANK}} す。",
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
          "id": "u22_l15_4",
          "type": "scramble",
          "prompt": "これは共感です",
          "furigana": "これはきょうかんです",
          "romaji": "Kore wa kyoukan desu.",
          "english": "This is Empathy.",
          "audioText": "これは共感です",
          "scrambleTokens": [
            "です",
            "それ",
            "これは",
            "共感",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "共感",
            "です"
          ],
          "correctAnswer": "これは共感です"
        },
        {
          "id": "u22_l15_5",
          "type": "speak",
          "prompt": "違和感",
          "furigana": "いわかん",
          "romaji": "iwakan",
          "english": "Pronounce: Sense of discomfort / out of place",
          "audioText": "いわかん",
          "targetSpeech": "違和感",
          "options": [
            "Sense of discomfort / out of place",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "違和感"
        },
        {
          "id": "u22_l15_6",
          "type": "dictate",
          "prompt": "違和感をお願いします",
          "furigana": "いわかんをおねがいします",
          "romaji": "iwakan o onegaishimasu.",
          "english": "Sense of discomfort / out of place, please.",
          "audioText": "違和感をお願いします",
          "dictateTokens": [
            "です",
            "違和感",
            "ありがとう",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "違和感",
            "を",
            "お願いします"
          ],
          "correctAnswer": "違和感をお願いします"
        },
        {
          "id": "u22_l15_7",
          "type": "match",
          "prompt": "失望・共感・違和感・戸惑う",
          "furigana": "しつぼう・きょうかん・いわかん・とまどう",
          "romaji": "shitsubou, kyoukan, iwakan, tomadou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しつぼう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "失望",
              "right": "Disappointment",
              "furigana": "しつぼう",
              "romaji": "shitsubou"
            },
            {
              "id": "p_1",
              "left": "共感",
              "right": "Empathy",
              "furigana": "きょうかん",
              "romaji": "kyoukan"
            },
            {
              "id": "p_2",
              "left": "違和感",
              "right": "Sense of discomfort / out of place",
              "furigana": "いわかん",
              "romaji": "iwakan"
            },
            {
              "id": "p_3",
              "left": "戸惑う",
              "right": "To be bewildered / perplexed",
              "furigana": "とまどう",
              "romaji": "tomadou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u22_l15_8",
          "type": "dialogue",
          "prompt": "ざるを得ないについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "ざるを得ないについてどう思われますか？",
          "furigana": "ざるを得ないについてどう思われますか？",
          "romaji": "zaru o enai ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Can't avoid doing / compelled?",
          "audioText": "ざるを得ないについてどう思われますか？",
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
    "id": "gate_unit_22",
    "unitId": "unit_22",
    "title": "Unit 22 Mastery Checkpoint",
    "titleJp": "第22週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u22_l1_1",
        "type": "listen",
        "prompt": "たまらない",
        "furigana": "たまらない",
        "romaji": "tamaranai",
        "english": "Can't bear / irresistibly",
        "audioText": "たまらない",
        "options": [
          "Confirming Can't help feeling...",
          "Disappointment",
          "Can't bear / irresistibly",
          "Confirming Being deeply moved"
        ],
        "correctAnswer": "Can't bear / irresistibly"
      },
      {
        "id": "u22_l1_2",
        "type": "spell",
        "prompt": "たまらない",
        "furigana": "たまらない",
        "romaji": "tamaranai",
        "english": "Build 'Can't bear / irresistibly'",
        "audioText": "たまらない",
        "tileBank": [
          "て",
          "ね",
          "な",
          "た",
          "せ",
          "ま",
          "い",
          "ら"
        ],
        "correctAnswer": "たまらない"
      },
      {
        "id": "u22_l3_1",
        "type": "listen",
        "prompt": "失望",
        "furigana": "しつぼう",
        "romaji": "shitsubou",
        "english": "Disappointment",
        "audioText": "しつぼう",
        "options": [
          "Confirming Sense of discomfort / out of place",
          "Confirming Can't avoid doing / compelled",
          "Confirming Relief",
          "Disappointment"
        ],
        "correctAnswer": "Disappointment"
      },
      {
        "id": "u22_l3_2",
        "type": "spell",
        "prompt": "失望",
        "furigana": "しつぼう",
        "romaji": "shitsubou",
        "english": "Build 'Disappointment'",
        "audioText": "しつぼう",
        "tileBank": [
          "さ",
          "つ",
          "う",
          "ひ",
          "も",
          "ぼ",
          "し",
          "ら"
        ],
        "correctAnswer": "しつぼう"
      },
      {
        "id": "u22_l5_1",
        "type": "listen",
        "prompt": "葛藤",
        "furigana": "かっとう",
        "romaji": "kattou",
        "english": "Inner conflict",
        "audioText": "かっとう",
        "options": [
          "Confirming Real intentions / true feelings",
          "Can't help feeling...",
          "Inner conflict",
          "Confirming To be bewildered / perplexed"
        ],
        "correctAnswer": "Inner conflict"
      },
      {
        "id": "u22_l5_2",
        "type": "spell",
        "prompt": "葛藤",
        "furigana": "かっとう",
        "romaji": "kattou",
        "english": "Build 'Inner conflict'",
        "audioText": "かっとう",
        "tileBank": [
          "う",
          "っ",
          "か",
          "ね",
          "ろ",
          "よ",
          "と",
          "の"
        ],
        "correctAnswer": "かっとう"
      },
      {
        "id": "u22_l7_1",
        "type": "listen",
        "prompt": "感動の確認",
        "furigana": "かんどうのかくにん",
        "romaji": "kandou no kakunin",
        "english": "Confirming Being deeply moved",
        "audioText": "かんどうのかくにん",
        "options": [
          "Confirming Frustrated / vexed",
          "Confirming Can't bear / irresistibly",
          "Pride",
          "Confirming Being deeply moved"
        ],
        "correctAnswer": "Confirming Being deeply moved"
      },
      {
        "id": "u22_l7_2",
        "type": "spell",
        "prompt": "感動の確認",
        "furigana": "かんどうのかくにん",
        "romaji": "kandou no kakunin",
        "english": "Build 'Confirming Being deeply moved'",
        "audioText": "かんどうのかくにん",
        "tileBank": [
          "ど",
          "ん",
          "う",
          "に",
          "か",
          "く",
          "の",
          "か"
        ],
        "correctAnswer": "かんどうのかくにん"
      },
      {
        "id": "u22_l9_1",
        "type": "listen",
        "prompt": "戸惑うの確認",
        "furigana": "とまどうのかくにん",
        "romaji": "tomadou no kakunin",
        "english": "Confirming To be bewildered / perplexed",
        "audioText": "とまどうのかくにん",
        "options": [
          "Confirming To be bewildered / perplexed",
          "Confirming Empathy",
          "Confirming Pride",
          "Disappointment"
        ],
        "correctAnswer": "Confirming To be bewildered / perplexed"
      },
      {
        "id": "u22_l9_2",
        "type": "spell",
        "prompt": "戸惑うの確認",
        "furigana": "とまどうのかくにん",
        "romaji": "tomadou no kakunin",
        "english": "Build 'Confirming To be bewildered / perplexed'",
        "audioText": "とまどうのかくにん",
        "tileBank": [
          "に",
          "か",
          "ど",
          "と",
          "う",
          "の",
          "く",
          "ま"
        ],
        "correctAnswer": "とまどうのかくにん"
      },
      {
        "id": "u22_l11_1",
        "type": "listen",
        "prompt": "たまらないの確認",
        "furigana": "たまらないのかくにん",
        "romaji": "tamaranai no kakunin",
        "english": "Confirming Can't bear / irresistibly",
        "audioText": "たまらないのかくにん",
        "options": [
          "Empathy",
          "Confirming Can't bear / irresistibly",
          "Pride",
          "Can't avoid doing / compelled"
        ],
        "correctAnswer": "Confirming Can't bear / irresistibly"
      },
      {
        "id": "u22_l11_2",
        "type": "spell",
        "prompt": "たまらないの確認",
        "furigana": "たまらないのかくにん",
        "romaji": "tamaranai no kakunin",
        "english": "Build 'Confirming Can't bear / irresistibly'",
        "audioText": "たまらないのかくにん",
        "tileBank": [
          "の",
          "ま",
          "か",
          "た",
          "な",
          "い",
          "ら",
          "く"
        ],
        "correctAnswer": "たまらないのかくにん"
      }
    ]
  }
};
