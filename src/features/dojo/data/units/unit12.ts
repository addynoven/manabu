import type { DojoUnit } from "../../models/dojo.model";

export const unit12: DojoUnit = {
  "id": "unit_12",
  "unitNumber": 12,
  "title": "Polite Requests & Giving Favors",
  "titleJp": "お願いと授受表現",
  "description": "Master giving and receiving favors (ageru, kureru, morau), making gentle requests, and asking permissions.",
  "icon": "🤝",
  "themeColor": "#14B8A6",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u12_l1",
      "unitId": "unit_12",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "To help / assist & To give (to someone else)",
      "titleJp": "手伝う・あげる",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "手伝う",
        "あげる",
        "くれる"
      ],
      "kanjiKeywords": [
        "手",
        "伝"
      ],
      "items": [
        {
          "id": "u12_l1_1",
          "type": "listen",
          "prompt": "手伝う",
          "furigana": "てつだう",
          "romaji": "tetsudau",
          "english": "To help / assist",
          "audioText": "てつだう",
          "options": [
            "To help / assist",
            "Confirming To be saved / helpful",
            "Hesitation / holding back",
            "Confirming Hesitation / holding back"
          ],
          "correctAnswer": "To help / assist"
        },
        {
          "id": "u12_l1_2",
          "type": "spell",
          "prompt": "手伝う",
          "furigana": "てつだう",
          "romaji": "tetsudau",
          "english": "Build 'To help / assist'",
          "audioText": "てつだう",
          "tileBank": [
            "ら",
            "て",
            "だ",
            "す",
            "う",
            "つ",
            "は",
            "け"
          ],
          "correctAnswer": "てつだう"
        },
        {
          "id": "u12_l1_3",
          "type": "cloze",
          "prompt": "私はあげるがすきです",
          "furigana": "わたしはあげるがすきです",
          "romaji": "Watashi wa ageru ga suki desu.",
          "english": "Fill in the blank with the correct particle for To give (to someone else).",
          "audioText": "あげる",
          "clozeSentence": "これはあげる {{BLANK}} す。",
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
          "id": "u12_l1_4",
          "type": "scramble",
          "prompt": "これはあげるです",
          "furigana": "これはあげるです",
          "romaji": "Kore wa ageru desu.",
          "english": "This is To give (to someone else).",
          "audioText": "これはあげるです",
          "scrambleTokens": [
            "ではありません",
            "です",
            "あげる",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "あげる",
            "です"
          ],
          "correctAnswer": "これはあげるです"
        },
        {
          "id": "u12_l1_5",
          "type": "speak",
          "prompt": "くれる",
          "furigana": "くれる",
          "romaji": "kureru",
          "english": "Pronounce: To give (to speaker)",
          "audioText": "くれる",
          "targetSpeech": "くれる",
          "options": [
            "To give (to speaker)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "くれる"
        },
        {
          "id": "u12_l1_6",
          "type": "dictate",
          "prompt": "くれるをお願いします",
          "furigana": "くれるをおねがいします",
          "romaji": "kureru o onegaishimasu.",
          "english": "To give (to speaker), please.",
          "audioText": "くれるをお願いします",
          "dictateTokens": [
            "お願いします",
            "くれる",
            "です",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "くれる",
            "を",
            "お願いします"
          ],
          "correctAnswer": "くれるをお願いします"
        },
        {
          "id": "u12_l1_7",
          "type": "match",
          "prompt": "手伝う・あげる・くれる・もらう",
          "furigana": "てつだう・あげる・くれる・もらう",
          "romaji": "tetsudau, ageru, kureru, morau",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "てつだう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "手伝う",
              "right": "To help / assist",
              "furigana": "てつだう",
              "romaji": "tetsudau"
            },
            {
              "id": "p_1",
              "left": "あげる",
              "right": "To give (to someone else)",
              "furigana": "あげる",
              "romaji": "ageru"
            },
            {
              "id": "p_2",
              "left": "くれる",
              "right": "To give (to speaker)",
              "furigana": "くれる",
              "romaji": "kureru"
            },
            {
              "id": "p_3",
              "left": "もらう",
              "right": "To receive",
              "furigana": "もらう",
              "romaji": "morau"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l1_8",
          "type": "dialogue",
          "prompt": "手伝うについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "手伝うについて教えていただけますか？",
          "furigana": "手伝うについて教えていただけますか？",
          "romaji": "tetsudau ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about To help / assist?",
          "audioText": "手伝うについて教えていただけますか？",
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
      "id": "u12_l2",
      "unitId": "unit_12",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "To receive & Please teach / tell",
      "titleJp": "もらう・教えて",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "もらう",
        "教えて",
        "貸す"
      ],
      "kanjiKeywords": [
        "教",
        "貸"
      ],
      "items": [
        {
          "id": "u12_l2_1",
          "type": "listen",
          "prompt": "もらう",
          "furigana": "もらう",
          "romaji": "morau",
          "english": "To receive",
          "audioText": "もらう",
          "options": [
            "To receive",
            "To give (to speaker)",
            "Confirming To lend",
            "Confirming To give (to speaker)"
          ],
          "correctAnswer": "To receive"
        },
        {
          "id": "u12_l2_2",
          "type": "spell",
          "prompt": "もらう",
          "furigana": "もらう",
          "romaji": "morau",
          "english": "Build 'To receive'",
          "audioText": "もらう",
          "tileBank": [
            "と",
            "も",
            "ら",
            "う",
            "く",
            "せ",
            "ま",
            "を"
          ],
          "correctAnswer": "もらう"
        },
        {
          "id": "u12_l2_3",
          "type": "cloze",
          "prompt": "私は教えてがすきです",
          "furigana": "わたしはおしえてがすきです",
          "romaji": "Watashi wa oshiete ga suki desu.",
          "english": "Fill in the blank with the correct particle for Please teach / tell.",
          "audioText": "教えて",
          "clozeSentence": "これは教えて {{BLANK}} す。",
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
          "id": "u12_l2_4",
          "type": "scramble",
          "prompt": "これは教えてです",
          "furigana": "これはおしえてです",
          "romaji": "Kore wa oshiete desu.",
          "english": "This is Please teach / tell.",
          "audioText": "これは教えてです",
          "scrambleTokens": [
            "それ",
            "です",
            "教えて",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "教えて",
            "です"
          ],
          "correctAnswer": "これは教えてです"
        },
        {
          "id": "u12_l2_5",
          "type": "speak",
          "prompt": "貸す",
          "furigana": "かす",
          "romaji": "kasu",
          "english": "Pronounce: To lend",
          "audioText": "かす",
          "targetSpeech": "貸す",
          "options": [
            "To lend",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "貸す"
        },
        {
          "id": "u12_l2_6",
          "type": "dictate",
          "prompt": "貸すをお願いします",
          "furigana": "かすをおねがいします",
          "romaji": "kasu o onegaishimasu.",
          "english": "To lend, please.",
          "audioText": "貸すをお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "ありがとう",
            "貸す",
            "を"
          ],
          "dictateSolution": [
            "貸す",
            "を",
            "お願いします"
          ],
          "correctAnswer": "貸すをお願いします"
        },
        {
          "id": "u12_l2_7",
          "type": "match",
          "prompt": "もらう・教えて・貸す・借りる",
          "furigana": "もらう・おしえて・かす・かりる",
          "romaji": "morau, oshiete, kasu, kariru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "もらう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "もらう",
              "right": "To receive",
              "furigana": "もらう",
              "romaji": "morau"
            },
            {
              "id": "p_1",
              "left": "教えて",
              "right": "Please teach / tell",
              "furigana": "おしえて",
              "romaji": "oshiete"
            },
            {
              "id": "p_2",
              "left": "貸す",
              "right": "To lend",
              "furigana": "かす",
              "romaji": "kasu"
            },
            {
              "id": "p_3",
              "left": "借りる",
              "right": "To borrow",
              "furigana": "かりる",
              "romaji": "kariru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l2_8",
          "type": "dialogue",
          "prompt": "あげるの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "あげるの準備はできていますか？",
          "furigana": "あげるの準備はできていますか？",
          "romaji": "ageru no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for To give (to someone else) ready?",
          "audioText": "あげるの準備はできていますか？",
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
      "id": "u12_l3",
      "unitId": "unit_12",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "To borrow & To send / see someone off",
      "titleJp": "借りる・送る",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "借りる",
        "送る",
        "親切"
      ],
      "kanjiKeywords": [
        "借",
        "送",
        "親",
        "切"
      ],
      "items": [
        {
          "id": "u12_l3_1",
          "type": "listen",
          "prompt": "借りる",
          "furigana": "かりる",
          "romaji": "kariru",
          "english": "To borrow",
          "audioText": "かりる",
          "options": [
            "To help / assist",
            "To borrow",
            "To lend",
            "Confirming To lend"
          ],
          "correctAnswer": "To borrow"
        },
        {
          "id": "u12_l3_2",
          "type": "spell",
          "prompt": "借りる",
          "furigana": "かりる",
          "romaji": "kariru",
          "english": "Build 'To borrow'",
          "audioText": "かりる",
          "tileBank": [
            "り",
            "を",
            "る",
            "お",
            "か",
            "ゆ",
            "な",
            "あ"
          ],
          "correctAnswer": "かりる"
        },
        {
          "id": "u12_l3_3",
          "type": "cloze",
          "prompt": "私は送るがすきです",
          "furigana": "わたしはおくるがすきです",
          "romaji": "Watashi wa okuru ga suki desu.",
          "english": "Fill in the blank with the correct particle for To send / see someone off.",
          "audioText": "送る",
          "clozeSentence": "これは送る {{BLANK}} す。",
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
          "id": "u12_l3_4",
          "type": "scramble",
          "prompt": "これは送るです",
          "furigana": "これはおくるです",
          "romaji": "Kore wa okuru desu.",
          "english": "This is To send / see someone off.",
          "audioText": "これは送るです",
          "scrambleTokens": [
            "送る",
            "です",
            "ではありません",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "送る",
            "です"
          ],
          "correctAnswer": "これは送るです"
        },
        {
          "id": "u12_l3_5",
          "type": "speak",
          "prompt": "親切",
          "furigana": "しんせつ",
          "romaji": "shinsetsu",
          "english": "Pronounce: Kind / hospitable",
          "audioText": "しんせつ",
          "targetSpeech": "親切",
          "options": [
            "Kind / hospitable",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "親切"
        },
        {
          "id": "u12_l3_6",
          "type": "dictate",
          "prompt": "親切をお願いします",
          "furigana": "しんせつをおねがいします",
          "romaji": "shinsetsu o onegaishimasu.",
          "english": "Kind / hospitable, please.",
          "audioText": "親切をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "親切",
            "を",
            "です"
          ],
          "dictateSolution": [
            "親切",
            "を",
            "お願いします"
          ],
          "correctAnswer": "親切をお願いします"
        },
        {
          "id": "u12_l3_7",
          "type": "match",
          "prompt": "借りる・送る・親切・お願い",
          "furigana": "かりる・おくる・しんせつ・おねがい",
          "romaji": "kariru, okuru, shinsetsu, onegai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かりる",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "借りる",
              "right": "To borrow",
              "furigana": "かりる",
              "romaji": "kariru"
            },
            {
              "id": "p_1",
              "left": "送る",
              "right": "To send / see someone off",
              "furigana": "おくる",
              "romaji": "okuru"
            },
            {
              "id": "p_2",
              "left": "親切",
              "right": "Kind / hospitable",
              "furigana": "しんせつ",
              "romaji": "shinsetsu"
            },
            {
              "id": "p_3",
              "left": "お願い",
              "right": "Favor / request",
              "furigana": "おねがい",
              "romaji": "onegai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l3_8",
          "type": "dialogue",
          "prompt": "くれるについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "くれるについてどう思われますか？",
          "furigana": "くれるについてどう思われますか？",
          "romaji": "kureru ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on To give (to speaker)?",
          "audioText": "くれるについてどう思われますか？",
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
      "id": "u12_l4",
      "unitId": "unit_12",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Favor / request & Nuisance / inconvenience",
      "titleJp": "お願い・迷惑",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "お願い",
        "迷惑",
        "助かる"
      ],
      "kanjiKeywords": [
        "願",
        "迷",
        "惑",
        "助"
      ],
      "items": [
        {
          "id": "u12_l4_1",
          "type": "listen",
          "prompt": "お願い",
          "furigana": "おねがい",
          "romaji": "onegai",
          "english": "Favor / request",
          "audioText": "おねがい",
          "options": [
            "Confirming Hesitation / holding back",
            "Confirming To lend",
            "To give (to someone else)",
            "Favor / request"
          ],
          "correctAnswer": "Favor / request"
        },
        {
          "id": "u12_l4_2",
          "type": "spell",
          "prompt": "お願い",
          "furigana": "おねがい",
          "romaji": "onegai",
          "english": "Build 'Favor / request'",
          "audioText": "おねがい",
          "tileBank": [
            "え",
            "ね",
            "が",
            "お",
            "い",
            "ひ",
            "と",
            "を"
          ],
          "correctAnswer": "おねがい"
        },
        {
          "id": "u12_l4_3",
          "type": "cloze",
          "prompt": "私は迷惑がすきです",
          "furigana": "わたしはめいわくがすきです",
          "romaji": "Watashi wa meiwaku ga suki desu.",
          "english": "Fill in the blank with the correct particle for Nuisance / inconvenience.",
          "audioText": "迷惑",
          "clozeSentence": "これは迷惑 {{BLANK}} す。",
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
          "id": "u12_l4_4",
          "type": "scramble",
          "prompt": "これは迷惑です",
          "furigana": "これはめいわくです",
          "romaji": "Kore wa meiwaku desu.",
          "english": "This is Nuisance / inconvenience.",
          "audioText": "これは迷惑です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "迷惑",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "迷惑",
            "です"
          ],
          "correctAnswer": "これは迷惑です"
        },
        {
          "id": "u12_l4_5",
          "type": "speak",
          "prompt": "助かる",
          "furigana": "たすかる",
          "romaji": "tasukaru",
          "english": "Pronounce: To be saved / helpful",
          "audioText": "たすかる",
          "targetSpeech": "助かる",
          "options": [
            "To be saved / helpful",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "助かる"
        },
        {
          "id": "u12_l4_6",
          "type": "dictate",
          "prompt": "助かるをお願いします",
          "furigana": "たすかるをおねがいします",
          "romaji": "tasukaru o onegaishimasu.",
          "english": "To be saved / helpful, please.",
          "audioText": "助かるをお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "です",
            "助かる",
            "を"
          ],
          "dictateSolution": [
            "助かる",
            "を",
            "お願いします"
          ],
          "correctAnswer": "助かるをお願いします"
        },
        {
          "id": "u12_l4_7",
          "type": "match",
          "prompt": "お願い・迷惑・助かる・遠慮",
          "furigana": "おねがい・めいわく・たすかる・えんりょ",
          "romaji": "onegai, meiwaku, tasukaru, enryo",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おねがい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "お願い",
              "right": "Favor / request",
              "furigana": "おねがい",
              "romaji": "onegai"
            },
            {
              "id": "p_1",
              "left": "迷惑",
              "right": "Nuisance / inconvenience",
              "furigana": "めいわく",
              "romaji": "meiwaku"
            },
            {
              "id": "p_2",
              "left": "助かる",
              "right": "To be saved / helpful",
              "furigana": "たすかる",
              "romaji": "tasukaru"
            },
            {
              "id": "p_3",
              "left": "遠慮",
              "right": "Hesitation / holding back",
              "furigana": "えんりょ",
              "romaji": "enryo"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l4_8",
          "type": "dialogue",
          "prompt": "次はもらうに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次はもらうに進みましょう。",
          "furigana": "次はもらうに進みましょう。",
          "romaji": "Tsugi wa morau ni susumimashou.",
          "english": "Speaker: Let's proceed to To receive next.",
          "audioText": "次はもらうに進みましょう。",
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
      "id": "u12_l5",
      "unitId": "unit_12",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Hesitation / holding back & Rude / excuse me",
      "titleJp": "遠慮・失礼",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "遠慮",
        "失礼",
        "感謝"
      ],
      "kanjiKeywords": [
        "遠",
        "慮",
        "失",
        "礼",
        "感",
        "謝"
      ],
      "items": [
        {
          "id": "u12_l5_1",
          "type": "listen",
          "prompt": "遠慮",
          "furigana": "えんりょ",
          "romaji": "enryo",
          "english": "Hesitation / holding back",
          "audioText": "えんりょ",
          "options": [
            "Confirming To help / assist",
            "To lend",
            "To help / assist",
            "Hesitation / holding back"
          ],
          "correctAnswer": "Hesitation / holding back"
        },
        {
          "id": "u12_l5_2",
          "type": "spell",
          "prompt": "遠慮",
          "furigana": "えんりょ",
          "romaji": "enryo",
          "english": "Build 'Hesitation / holding back'",
          "audioText": "えんりょ",
          "tileBank": [
            "り",
            "を",
            "む",
            "さ",
            "ょ",
            "ら",
            "え",
            "ん"
          ],
          "correctAnswer": "えんりょ"
        },
        {
          "id": "u12_l5_3",
          "type": "cloze",
          "prompt": "私は失礼がすきです",
          "furigana": "わたしはしつれいがすきです",
          "romaji": "Watashi wa shitsurei ga suki desu.",
          "english": "Fill in the blank with the correct particle for Rude / excuse me.",
          "audioText": "失礼",
          "clozeSentence": "これは失礼 {{BLANK}} す。",
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
          "id": "u12_l5_4",
          "type": "scramble",
          "prompt": "これは失礼です",
          "furigana": "これはしつれいです",
          "romaji": "Kore wa shitsurei desu.",
          "english": "This is Rude / excuse me.",
          "audioText": "これは失礼です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "失礼",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "失礼",
            "です"
          ],
          "correctAnswer": "これは失礼です"
        },
        {
          "id": "u12_l5_5",
          "type": "speak",
          "prompt": "感謝",
          "furigana": "かんしゃ",
          "romaji": "kansha",
          "english": "Pronounce: Gratitude / appreciation",
          "audioText": "かんしゃ",
          "targetSpeech": "感謝",
          "options": [
            "Gratitude / appreciation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "感謝"
        },
        {
          "id": "u12_l5_6",
          "type": "dictate",
          "prompt": "感謝をお願いします",
          "furigana": "かんしゃをおねがいします",
          "romaji": "kansha o onegaishimasu.",
          "english": "Gratitude / appreciation, please.",
          "audioText": "感謝をお願いします",
          "dictateTokens": [
            "感謝",
            "を",
            "ありがとう",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "感謝",
            "を",
            "お願いします"
          ],
          "correctAnswer": "感謝をお願いします"
        },
        {
          "id": "u12_l5_7",
          "type": "match",
          "prompt": "遠慮・失礼・感謝・手伝うの確認",
          "furigana": "えんりょ・しつれい・かんしゃ・てつだうのかくにん",
          "romaji": "enryo, shitsurei, kansha, tetsudau no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えんりょ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "遠慮",
              "right": "Hesitation / holding back",
              "furigana": "えんりょ",
              "romaji": "enryo"
            },
            {
              "id": "p_1",
              "left": "失礼",
              "right": "Rude / excuse me",
              "furigana": "しつれい",
              "romaji": "shitsurei"
            },
            {
              "id": "p_2",
              "left": "感謝",
              "right": "Gratitude / appreciation",
              "furigana": "かんしゃ",
              "romaji": "kansha"
            },
            {
              "id": "p_3",
              "left": "手伝うの確認",
              "right": "Confirming To help / assist",
              "furigana": "てつだうのかくにん",
              "romaji": "tetsudau no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l5_8",
          "type": "dialogue",
          "prompt": "手伝うについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "手伝うについて教えていただけますか？",
          "furigana": "手伝うについて教えていただけますか？",
          "romaji": "tetsudau ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about To help / assist?",
          "audioText": "手伝うについて教えていただけますか？",
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
      "id": "u12_l6",
      "unitId": "unit_12",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming To help / assist & Confirming To give (to someone else)",
      "titleJp": "手伝うの確認・あげるの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "手伝うの確認",
        "あげるの確認",
        "くれるの確認"
      ],
      "kanjiKeywords": [
        "手",
        "伝",
        "確",
        "認",
        "確",
        "認",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u12_l6_1",
          "type": "listen",
          "prompt": "手伝うの確認",
          "furigana": "てつだうのかくにん",
          "romaji": "tetsudau no kakunin",
          "english": "Confirming To help / assist",
          "audioText": "てつだうのかくにん",
          "options": [
            "Kind / hospitable",
            "Confirming To help / assist",
            "Confirming To be saved / helpful",
            "Confirming Hesitation / holding back"
          ],
          "correctAnswer": "Confirming To help / assist"
        },
        {
          "id": "u12_l6_2",
          "type": "spell",
          "prompt": "手伝うの確認",
          "furigana": "てつだうのかくにん",
          "romaji": "tetsudau no kakunin",
          "english": "Build 'Confirming To help / assist'",
          "audioText": "てつだうのかくにん",
          "tileBank": [
            "う",
            "つ",
            "く",
            "か",
            "だ",
            "て",
            "に",
            "の"
          ],
          "correctAnswer": "てつだうのかくにん"
        },
        {
          "id": "u12_l6_3",
          "type": "cloze",
          "prompt": "私はあげるの確認がすきです",
          "furigana": "わたしはあげるのかくにんがすきです",
          "romaji": "Watashi wa ageru no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming To give (to someone else).",
          "audioText": "あげるの確認",
          "clozeSentence": "これはあげるの確認 {{BLANK}} す。",
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
          "id": "u12_l6_4",
          "type": "scramble",
          "prompt": "これはあげるの確認です",
          "furigana": "これはあげるのかくにんです",
          "romaji": "Kore wa ageru no kakunin desu.",
          "english": "This is Confirming To give (to someone else).",
          "audioText": "これはあげるの確認です",
          "scrambleTokens": [
            "それ",
            "です",
            "これは",
            "あげるの確認",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "あげるの確認",
            "です"
          ],
          "correctAnswer": "これはあげるの確認です"
        },
        {
          "id": "u12_l6_5",
          "type": "speak",
          "prompt": "くれるの確認",
          "furigana": "くれるのかくにん",
          "romaji": "kureru no kakunin",
          "english": "Pronounce: Confirming To give (to speaker)",
          "audioText": "くれるのかくにん",
          "targetSpeech": "くれるの確認",
          "options": [
            "Confirming To give (to speaker)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "くれるの確認"
        },
        {
          "id": "u12_l6_6",
          "type": "dictate",
          "prompt": "くれるの確認をお願いします",
          "furigana": "くれるのかくにんをおねがいします",
          "romaji": "kureru no kakunin o onegaishimasu.",
          "english": "Confirming To give (to speaker), please.",
          "audioText": "くれるの確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "を",
            "くれるの確認",
            "お願いします"
          ],
          "dictateSolution": [
            "くれるの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "くれるの確認をお願いします"
        },
        {
          "id": "u12_l6_7",
          "type": "match",
          "prompt": "手伝うの確認・あげるの確認・くれるの確認・もらうの確認",
          "furigana": "てつだうのかくにん・あげるのかくにん・くれるのかくにん・もらうのかくにん",
          "romaji": "tetsudau no kakunin, ageru no kakunin, kureru no kakunin, morau no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "てつだうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "手伝うの確認",
              "right": "Confirming To help / assist",
              "furigana": "てつだうのかくにん",
              "romaji": "tetsudau no kakunin"
            },
            {
              "id": "p_1",
              "left": "あげるの確認",
              "right": "Confirming To give (to someone else)",
              "furigana": "あげるのかくにん",
              "romaji": "ageru no kakunin"
            },
            {
              "id": "p_2",
              "left": "くれるの確認",
              "right": "Confirming To give (to speaker)",
              "furigana": "くれるのかくにん",
              "romaji": "kureru no kakunin"
            },
            {
              "id": "p_3",
              "left": "もらうの確認",
              "right": "Confirming To receive",
              "furigana": "もらうのかくにん",
              "romaji": "morau no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l6_8",
          "type": "dialogue",
          "prompt": "あげるの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "あげるの準備はできていますか？",
          "furigana": "あげるの準備はできていますか？",
          "romaji": "ageru no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for To give (to someone else) ready?",
          "audioText": "あげるの準備はできていますか？",
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
      "id": "u12_l7",
      "unitId": "unit_12",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming To receive & Confirming Please teach / tell",
      "titleJp": "もらうの確認・教えての確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "もらうの確認",
        "教えての確認",
        "貸すの確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "教",
        "確",
        "認",
        "貸",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u12_l7_1",
          "type": "listen",
          "prompt": "もらうの確認",
          "furigana": "もらうのかくにん",
          "romaji": "morau no kakunin",
          "english": "Confirming To receive",
          "audioText": "もらうのかくにん",
          "options": [
            "Kind / hospitable",
            "Confirming To be saved / helpful",
            "Confirming Hesitation / holding back",
            "Confirming To receive"
          ],
          "correctAnswer": "Confirming To receive"
        },
        {
          "id": "u12_l7_2",
          "type": "spell",
          "prompt": "もらうの確認",
          "furigana": "もらうのかくにん",
          "romaji": "morau no kakunin",
          "english": "Build 'Confirming To receive'",
          "audioText": "もらうのかくにん",
          "tileBank": [
            "く",
            "ん",
            "も",
            "の",
            "う",
            "に",
            "か",
            "ら"
          ],
          "correctAnswer": "もらうのかくにん"
        },
        {
          "id": "u12_l7_3",
          "type": "cloze",
          "prompt": "私は教えての確認がすきです",
          "furigana": "わたしはおしえてのかくにんがすきです",
          "romaji": "Watashi wa oshiete no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Please teach / tell.",
          "audioText": "教えての確認",
          "clozeSentence": "これは教えての確認 {{BLANK}} す。",
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
          "id": "u12_l7_4",
          "type": "scramble",
          "prompt": "これは教えての確認です",
          "furigana": "これはおしえてのかくにんです",
          "romaji": "Kore wa oshiete no kakunin desu.",
          "english": "This is Confirming Please teach / tell.",
          "audioText": "これは教えての確認です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "これは",
            "です",
            "教えての確認"
          ],
          "scrambleSolution": [
            "これは",
            "教えての確認",
            "です"
          ],
          "correctAnswer": "これは教えての確認です"
        },
        {
          "id": "u12_l7_5",
          "type": "speak",
          "prompt": "貸すの確認",
          "furigana": "かすのかくにん",
          "romaji": "kasu no kakunin",
          "english": "Pronounce: Confirming To lend",
          "audioText": "かすのかくにん",
          "targetSpeech": "貸すの確認",
          "options": [
            "Confirming To lend",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "貸すの確認"
        },
        {
          "id": "u12_l7_6",
          "type": "dictate",
          "prompt": "貸すの確認をお願いします",
          "furigana": "かすのかくにんをおねがいします",
          "romaji": "kasu no kakunin o onegaishimasu.",
          "english": "Confirming To lend, please.",
          "audioText": "貸すの確認をお願いします",
          "dictateTokens": [
            "貸すの確認",
            "お願いします",
            "です",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "貸すの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "貸すの確認をお願いします"
        },
        {
          "id": "u12_l7_7",
          "type": "match",
          "prompt": "もらうの確認・教えての確認・貸すの確認・借りるの確認",
          "furigana": "もらうのかくにん・おしえてのかくにん・かすのかくにん・かりるのかくにん",
          "romaji": "morau no kakunin, oshiete no kakunin, kasu no kakunin, kariru no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "もらうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "もらうの確認",
              "right": "Confirming To receive",
              "furigana": "もらうのかくにん",
              "romaji": "morau no kakunin"
            },
            {
              "id": "p_1",
              "left": "教えての確認",
              "right": "Confirming Please teach / tell",
              "furigana": "おしえてのかくにん",
              "romaji": "oshiete no kakunin"
            },
            {
              "id": "p_2",
              "left": "貸すの確認",
              "right": "Confirming To lend",
              "furigana": "かすのかくにん",
              "romaji": "kasu no kakunin"
            },
            {
              "id": "p_3",
              "left": "借りるの確認",
              "right": "Confirming To borrow",
              "furigana": "かりるのかくにん",
              "romaji": "kariru no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l7_8",
          "type": "dialogue",
          "prompt": "くれるについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "くれるについてどう思われますか？",
          "furigana": "くれるについてどう思われますか？",
          "romaji": "kureru ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on To give (to speaker)?",
          "audioText": "くれるについてどう思われますか？",
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
      "id": "u12_l8",
      "unitId": "unit_12",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming To borrow & Confirming To send / see someone off",
      "titleJp": "借りるの確認・送るの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "借りるの確認",
        "送るの確認",
        "親切の確認"
      ],
      "kanjiKeywords": [
        "借",
        "確",
        "認",
        "送",
        "確",
        "認",
        "親",
        "切",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u12_l8_1",
          "type": "listen",
          "prompt": "借りるの確認",
          "furigana": "かりるのかくにん",
          "romaji": "kariru no kakunin",
          "english": "Confirming To borrow",
          "audioText": "かりるのかくにん",
          "options": [
            "Confirming To borrow",
            "To send / see someone off",
            "Rude / excuse me",
            "To borrow"
          ],
          "correctAnswer": "Confirming To borrow"
        },
        {
          "id": "u12_l8_2",
          "type": "spell",
          "prompt": "借りるの確認",
          "furigana": "かりるのかくにん",
          "romaji": "kariru no kakunin",
          "english": "Build 'Confirming To borrow'",
          "audioText": "かりるのかくにん",
          "tileBank": [
            "か",
            "に",
            "く",
            "る",
            "ん",
            "か",
            "り",
            "の"
          ],
          "correctAnswer": "かりるのかくにん"
        },
        {
          "id": "u12_l8_3",
          "type": "cloze",
          "prompt": "私は送るの確認がすきです",
          "furigana": "わたしはおくるのかくにんがすきです",
          "romaji": "Watashi wa okuru no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming To send / see someone off.",
          "audioText": "送るの確認",
          "clozeSentence": "これは送るの確認 {{BLANK}} す。",
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
          "id": "u12_l8_4",
          "type": "scramble",
          "prompt": "これは送るの確認です",
          "furigana": "これはおくるのかくにんです",
          "romaji": "Kore wa okuru no kakunin desu.",
          "english": "This is Confirming To send / see someone off.",
          "audioText": "これは送るの確認です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "それ",
            "これは",
            "送るの確認"
          ],
          "scrambleSolution": [
            "これは",
            "送るの確認",
            "です"
          ],
          "correctAnswer": "これは送るの確認です"
        },
        {
          "id": "u12_l8_5",
          "type": "speak",
          "prompt": "親切の確認",
          "furigana": "しんせつのかくにん",
          "romaji": "shinsetsu no kakunin",
          "english": "Pronounce: Confirming Kind / hospitable",
          "audioText": "しんせつのかくにん",
          "targetSpeech": "親切の確認",
          "options": [
            "Confirming Kind / hospitable",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "親切の確認"
        },
        {
          "id": "u12_l8_6",
          "type": "dictate",
          "prompt": "親切の確認をお願いします",
          "furigana": "しんせつのかくにんをおねがいします",
          "romaji": "shinsetsu no kakunin o onegaishimasu.",
          "english": "Confirming Kind / hospitable, please.",
          "audioText": "親切の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "親切の確認",
            "を",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "親切の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "親切の確認をお願いします"
        },
        {
          "id": "u12_l8_7",
          "type": "match",
          "prompt": "借りるの確認・送るの確認・親切の確認・お願いの確認",
          "furigana": "かりるのかくにん・おくるのかくにん・しんせつのかくにん・おねがいのかくにん",
          "romaji": "kariru no kakunin, okuru no kakunin, shinsetsu no kakunin, onegai no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かりるのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "借りるの確認",
              "right": "Confirming To borrow",
              "furigana": "かりるのかくにん",
              "romaji": "kariru no kakunin"
            },
            {
              "id": "p_1",
              "left": "送るの確認",
              "right": "Confirming To send / see someone off",
              "furigana": "おくるのかくにん",
              "romaji": "okuru no kakunin"
            },
            {
              "id": "p_2",
              "left": "親切の確認",
              "right": "Confirming Kind / hospitable",
              "furigana": "しんせつのかくにん",
              "romaji": "shinsetsu no kakunin"
            },
            {
              "id": "p_3",
              "left": "お願いの確認",
              "right": "Confirming Favor / request",
              "furigana": "おねがいのかくにん",
              "romaji": "onegai no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l8_8",
          "type": "dialogue",
          "prompt": "次はもらうに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次はもらうに進みましょう。",
          "furigana": "次はもらうに進みましょう。",
          "romaji": "Tsugi wa morau ni susumimashou.",
          "english": "Speaker: Let's proceed to To receive next.",
          "audioText": "次はもらうに進みましょう。",
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
      "id": "u12_l9",
      "unitId": "unit_12",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Favor / request & Confirming Nuisance / inconvenience",
      "titleJp": "お願いの確認・迷惑の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "お願いの確認",
        "迷惑の確認",
        "助かるの確認"
      ],
      "kanjiKeywords": [
        "願",
        "確",
        "認",
        "迷",
        "惑",
        "確",
        "認",
        "助",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u12_l9_1",
          "type": "listen",
          "prompt": "お願いの確認",
          "furigana": "おねがいのかくにん",
          "romaji": "onegai no kakunin",
          "english": "Confirming Favor / request",
          "audioText": "おねがいのかくにん",
          "options": [
            "Confirming Favor / request",
            "Confirming To send / see someone off",
            "Confirming To give (to someone else)",
            "Confirming Kind / hospitable"
          ],
          "correctAnswer": "Confirming Favor / request"
        },
        {
          "id": "u12_l9_2",
          "type": "spell",
          "prompt": "お願いの確認",
          "furigana": "おねがいのかくにん",
          "romaji": "onegai no kakunin",
          "english": "Build 'Confirming Favor / request'",
          "audioText": "おねがいのかくにん",
          "tileBank": [
            "に",
            "が",
            "の",
            "く",
            "お",
            "い",
            "ね",
            "か"
          ],
          "correctAnswer": "おねがいのかくにん"
        },
        {
          "id": "u12_l9_3",
          "type": "cloze",
          "prompt": "私は迷惑の確認がすきです",
          "furigana": "わたしはめいわくのかくにんがすきです",
          "romaji": "Watashi wa meiwaku no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Nuisance / inconvenience.",
          "audioText": "迷惑の確認",
          "clozeSentence": "これは迷惑の確認 {{BLANK}} す。",
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
          "id": "u12_l9_4",
          "type": "scramble",
          "prompt": "これは迷惑の確認です",
          "furigana": "これはめいわくのかくにんです",
          "romaji": "Kore wa meiwaku no kakunin desu.",
          "english": "This is Confirming Nuisance / inconvenience.",
          "audioText": "これは迷惑の確認です",
          "scrambleTokens": [
            "それ",
            "これは",
            "迷惑の確認",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "迷惑の確認",
            "です"
          ],
          "correctAnswer": "これは迷惑の確認です"
        },
        {
          "id": "u12_l9_5",
          "type": "speak",
          "prompt": "助かるの確認",
          "furigana": "たすかるのかくにん",
          "romaji": "tasukaru no kakunin",
          "english": "Pronounce: Confirming To be saved / helpful",
          "audioText": "たすかるのかくにん",
          "targetSpeech": "助かるの確認",
          "options": [
            "Confirming To be saved / helpful",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "助かるの確認"
        },
        {
          "id": "u12_l9_6",
          "type": "dictate",
          "prompt": "助かるの確認をお願いします",
          "furigana": "たすかるのかくにんをおねがいします",
          "romaji": "tasukaru no kakunin o onegaishimasu.",
          "english": "Confirming To be saved / helpful, please.",
          "audioText": "助かるの確認をお願いします",
          "dictateTokens": [
            "を",
            "助かるの確認",
            "です",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "助かるの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "助かるの確認をお願いします"
        },
        {
          "id": "u12_l9_7",
          "type": "match",
          "prompt": "お願いの確認・迷惑の確認・助かるの確認・遠慮の確認",
          "furigana": "おねがいのかくにん・めいわくのかくにん・たすかるのかくにん・えんりょのかくにん",
          "romaji": "onegai no kakunin, meiwaku no kakunin, tasukaru no kakunin, enryo no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おねがいのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "お願いの確認",
              "right": "Confirming Favor / request",
              "furigana": "おねがいのかくにん",
              "romaji": "onegai no kakunin"
            },
            {
              "id": "p_1",
              "left": "迷惑の確認",
              "right": "Confirming Nuisance / inconvenience",
              "furigana": "めいわくのかくにん",
              "romaji": "meiwaku no kakunin"
            },
            {
              "id": "p_2",
              "left": "助かるの確認",
              "right": "Confirming To be saved / helpful",
              "furigana": "たすかるのかくにん",
              "romaji": "tasukaru no kakunin"
            },
            {
              "id": "p_3",
              "left": "遠慮の確認",
              "right": "Confirming Hesitation / holding back",
              "furigana": "えんりょのかくにん",
              "romaji": "enryo no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l9_8",
          "type": "dialogue",
          "prompt": "手伝うについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "手伝うについて教えていただけますか？",
          "furigana": "手伝うについて教えていただけますか？",
          "romaji": "tetsudau ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about To help / assist?",
          "audioText": "手伝うについて教えていただけますか？",
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
      "id": "u12_l10",
      "unitId": "unit_12",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Hesitation / holding back & Confirming Rude / excuse me",
      "titleJp": "遠慮の確認・失礼の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "遠慮の確認",
        "失礼の確認",
        "感謝の確認"
      ],
      "kanjiKeywords": [
        "遠",
        "慮",
        "確",
        "認",
        "失",
        "礼",
        "確",
        "認",
        "感",
        "謝",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u12_l10_1",
          "type": "listen",
          "prompt": "遠慮の確認",
          "furigana": "えんりょのかくにん",
          "romaji": "enryo no kakunin",
          "english": "Confirming Hesitation / holding back",
          "audioText": "えんりょのかくにん",
          "options": [
            "Confirming Please teach / tell",
            "Confirming Hesitation / holding back",
            "Confirming To lend",
            "To send / see someone off"
          ],
          "correctAnswer": "Confirming Hesitation / holding back"
        },
        {
          "id": "u12_l10_2",
          "type": "spell",
          "prompt": "遠慮の確認",
          "furigana": "えんりょのかくにん",
          "romaji": "enryo no kakunin",
          "english": "Build 'Confirming Hesitation / holding back'",
          "audioText": "えんりょのかくにん",
          "tileBank": [
            "り",
            "え",
            "ょ",
            "く",
            "か",
            "に",
            "の",
            "ん"
          ],
          "correctAnswer": "えんりょのかくにん"
        },
        {
          "id": "u12_l10_3",
          "type": "cloze",
          "prompt": "私は失礼の確認がすきです",
          "furigana": "わたしはしつれいのかくにんがすきです",
          "romaji": "Watashi wa shitsurei no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Rude / excuse me.",
          "audioText": "失礼の確認",
          "clozeSentence": "これは失礼の確認 {{BLANK}} す。",
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
          "id": "u12_l10_4",
          "type": "scramble",
          "prompt": "これは失礼の確認です",
          "furigana": "これはしつれいのかくにんです",
          "romaji": "Kore wa shitsurei no kakunin desu.",
          "english": "This is Confirming Rude / excuse me.",
          "audioText": "これは失礼の確認です",
          "scrambleTokens": [
            "失礼の確認",
            "です",
            "これは",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "失礼の確認",
            "です"
          ],
          "correctAnswer": "これは失礼の確認です"
        },
        {
          "id": "u12_l10_5",
          "type": "speak",
          "prompt": "感謝の確認",
          "furigana": "かんしゃのかくにん",
          "romaji": "kansha no kakunin",
          "english": "Pronounce: Confirming Gratitude / appreciation",
          "audioText": "かんしゃのかくにん",
          "targetSpeech": "感謝の確認",
          "options": [
            "Confirming Gratitude / appreciation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "感謝の確認"
        },
        {
          "id": "u12_l10_6",
          "type": "dictate",
          "prompt": "感謝の確認をお願いします",
          "furigana": "かんしゃのかくにんをおねがいします",
          "romaji": "kansha no kakunin o onegaishimasu.",
          "english": "Confirming Gratitude / appreciation, please.",
          "audioText": "感謝の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "を",
            "感謝の確認",
            "ありがとう"
          ],
          "dictateSolution": [
            "感謝の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "感謝の確認をお願いします"
        },
        {
          "id": "u12_l10_7",
          "type": "match",
          "prompt": "遠慮の確認・失礼の確認・感謝の確認・手伝うの確認",
          "furigana": "えんりょのかくにん・しつれいのかくにん・かんしゃのかくにん・てつだうのかくにん",
          "romaji": "enryo no kakunin, shitsurei no kakunin, kansha no kakunin, tetsudau no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えんりょのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "遠慮の確認",
              "right": "Confirming Hesitation / holding back",
              "furigana": "えんりょのかくにん",
              "romaji": "enryo no kakunin"
            },
            {
              "id": "p_1",
              "left": "失礼の確認",
              "right": "Confirming Rude / excuse me",
              "furigana": "しつれいのかくにん",
              "romaji": "shitsurei no kakunin"
            },
            {
              "id": "p_2",
              "left": "感謝の確認",
              "right": "Confirming Gratitude / appreciation",
              "furigana": "かんしゃのかくにん",
              "romaji": "kansha no kakunin"
            },
            {
              "id": "p_3",
              "left": "手伝うの確認",
              "right": "Confirming To help / assist",
              "furigana": "てつだうのかくにん",
              "romaji": "tetsudau no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l10_8",
          "type": "dialogue",
          "prompt": "あげるの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "あげるの準備はできていますか？",
          "furigana": "あげるの準備はできていますか？",
          "romaji": "ageru no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for To give (to someone else) ready?",
          "audioText": "あげるの準備はできていますか？",
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
      "id": "u12_l11",
      "unitId": "unit_12",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming To help / assist & Confirming To give (to someone else)",
      "titleJp": "手伝うの確認・あげるの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "手伝うの確認",
        "あげるの確認",
        "くれるの確認"
      ],
      "kanjiKeywords": [
        "手",
        "伝",
        "確",
        "認",
        "確",
        "認",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u12_l11_1",
          "type": "listen",
          "prompt": "手伝うの確認",
          "furigana": "てつだうのかくにん",
          "romaji": "tetsudau no kakunin",
          "english": "Confirming To help / assist",
          "audioText": "てつだうのかくにん",
          "options": [
            "To be saved / helpful",
            "Confirming To help / assist",
            "Confirming Please teach / tell",
            "Favor / request"
          ],
          "correctAnswer": "Confirming To help / assist"
        },
        {
          "id": "u12_l11_2",
          "type": "spell",
          "prompt": "手伝うの確認",
          "furigana": "てつだうのかくにん",
          "romaji": "tetsudau no kakunin",
          "english": "Build 'Confirming To help / assist'",
          "audioText": "てつだうのかくにん",
          "tileBank": [
            "く",
            "つ",
            "の",
            "に",
            "だ",
            "う",
            "か",
            "て"
          ],
          "correctAnswer": "てつだうのかくにん"
        },
        {
          "id": "u12_l11_3",
          "type": "cloze",
          "prompt": "私はあげるの確認がすきです",
          "furigana": "わたしはあげるのかくにんがすきです",
          "romaji": "Watashi wa ageru no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming To give (to someone else).",
          "audioText": "あげるの確認",
          "clozeSentence": "これはあげるの確認 {{BLANK}} す。",
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
          "id": "u12_l11_4",
          "type": "scramble",
          "prompt": "これはあげるの確認です",
          "furigana": "これはあげるのかくにんです",
          "romaji": "Kore wa ageru no kakunin desu.",
          "english": "This is Confirming To give (to someone else).",
          "audioText": "これはあげるの確認です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "それ",
            "です",
            "あげるの確認"
          ],
          "scrambleSolution": [
            "これは",
            "あげるの確認",
            "です"
          ],
          "correctAnswer": "これはあげるの確認です"
        },
        {
          "id": "u12_l11_5",
          "type": "speak",
          "prompt": "くれるの確認",
          "furigana": "くれるのかくにん",
          "romaji": "kureru no kakunin",
          "english": "Pronounce: Confirming To give (to speaker)",
          "audioText": "くれるのかくにん",
          "targetSpeech": "くれるの確認",
          "options": [
            "Confirming To give (to speaker)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "くれるの確認"
        },
        {
          "id": "u12_l11_6",
          "type": "dictate",
          "prompt": "くれるの確認をお願いします",
          "furigana": "くれるのかくにんをおねがいします",
          "romaji": "kureru no kakunin o onegaishimasu.",
          "english": "Confirming To give (to speaker), please.",
          "audioText": "くれるの確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "くれるの確認",
            "です",
            "を"
          ],
          "dictateSolution": [
            "くれるの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "くれるの確認をお願いします"
        },
        {
          "id": "u12_l11_7",
          "type": "match",
          "prompt": "手伝うの確認・あげるの確認・くれるの確認・もらうの確認",
          "furigana": "てつだうのかくにん・あげるのかくにん・くれるのかくにん・もらうのかくにん",
          "romaji": "tetsudau no kakunin, ageru no kakunin, kureru no kakunin, morau no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "てつだうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "手伝うの確認",
              "right": "Confirming To help / assist",
              "furigana": "てつだうのかくにん",
              "romaji": "tetsudau no kakunin"
            },
            {
              "id": "p_1",
              "left": "あげるの確認",
              "right": "Confirming To give (to someone else)",
              "furigana": "あげるのかくにん",
              "romaji": "ageru no kakunin"
            },
            {
              "id": "p_2",
              "left": "くれるの確認",
              "right": "Confirming To give (to speaker)",
              "furigana": "くれるのかくにん",
              "romaji": "kureru no kakunin"
            },
            {
              "id": "p_3",
              "left": "もらうの確認",
              "right": "Confirming To receive",
              "furigana": "もらうのかくにん",
              "romaji": "morau no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l11_8",
          "type": "dialogue",
          "prompt": "くれるについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "くれるについてどう思われますか？",
          "furigana": "くれるについてどう思われますか？",
          "romaji": "kureru ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on To give (to speaker)?",
          "audioText": "くれるについてどう思われますか？",
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
      "id": "u12_l12",
      "unitId": "unit_12",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming To receive & Confirming Please teach / tell",
      "titleJp": "もらうの確認・教えての確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "もらうの確認",
        "教えての確認",
        "貸すの確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "教",
        "確",
        "認",
        "貸",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u12_l12_1",
          "type": "listen",
          "prompt": "もらうの確認",
          "furigana": "もらうのかくにん",
          "romaji": "morau no kakunin",
          "english": "Confirming To receive",
          "audioText": "もらうのかくにん",
          "options": [
            "Favor / request",
            "Confirming To be saved / helpful",
            "To give (to someone else)",
            "Confirming To receive"
          ],
          "correctAnswer": "Confirming To receive"
        },
        {
          "id": "u12_l12_2",
          "type": "spell",
          "prompt": "もらうの確認",
          "furigana": "もらうのかくにん",
          "romaji": "morau no kakunin",
          "english": "Build 'Confirming To receive'",
          "audioText": "もらうのかくにん",
          "tileBank": [
            "も",
            "ら",
            "に",
            "か",
            "の",
            "く",
            "ん",
            "う"
          ],
          "correctAnswer": "もらうのかくにん"
        },
        {
          "id": "u12_l12_3",
          "type": "cloze",
          "prompt": "私は教えての確認がすきです",
          "furigana": "わたしはおしえてのかくにんがすきです",
          "romaji": "Watashi wa oshiete no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Please teach / tell.",
          "audioText": "教えての確認",
          "clozeSentence": "これは教えての確認 {{BLANK}} す。",
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
          "id": "u12_l12_4",
          "type": "scramble",
          "prompt": "これは教えての確認です",
          "furigana": "これはおしえてのかくにんです",
          "romaji": "Kore wa oshiete no kakunin desu.",
          "english": "This is Confirming Please teach / tell.",
          "audioText": "これは教えての確認です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "教えての確認",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "教えての確認",
            "です"
          ],
          "correctAnswer": "これは教えての確認です"
        },
        {
          "id": "u12_l12_5",
          "type": "speak",
          "prompt": "貸すの確認",
          "furigana": "かすのかくにん",
          "romaji": "kasu no kakunin",
          "english": "Pronounce: Confirming To lend",
          "audioText": "かすのかくにん",
          "targetSpeech": "貸すの確認",
          "options": [
            "Confirming To lend",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "貸すの確認"
        },
        {
          "id": "u12_l12_6",
          "type": "dictate",
          "prompt": "貸すの確認をお願いします",
          "furigana": "かすのかくにんをおねがいします",
          "romaji": "kasu no kakunin o onegaishimasu.",
          "english": "Confirming To lend, please.",
          "audioText": "貸すの確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "です",
            "貸すの確認",
            "お願いします"
          ],
          "dictateSolution": [
            "貸すの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "貸すの確認をお願いします"
        },
        {
          "id": "u12_l12_7",
          "type": "match",
          "prompt": "もらうの確認・教えての確認・貸すの確認・手伝う",
          "furigana": "もらうのかくにん・おしえてのかくにん・かすのかくにん・てつだう",
          "romaji": "morau no kakunin, oshiete no kakunin, kasu no kakunin, tetsudau",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "もらうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "もらうの確認",
              "right": "Confirming To receive",
              "furigana": "もらうのかくにん",
              "romaji": "morau no kakunin"
            },
            {
              "id": "p_1",
              "left": "教えての確認",
              "right": "Confirming Please teach / tell",
              "furigana": "おしえてのかくにん",
              "romaji": "oshiete no kakunin"
            },
            {
              "id": "p_2",
              "left": "貸すの確認",
              "right": "Confirming To lend",
              "furigana": "かすのかくにん",
              "romaji": "kasu no kakunin"
            },
            {
              "id": "p_3",
              "left": "手伝う",
              "right": "To help / assist",
              "furigana": "てつだう",
              "romaji": "tetsudau"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l12_8",
          "type": "dialogue",
          "prompt": "次はもらうに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次はもらうに進みましょう。",
          "furigana": "次はもらうに進みましょう。",
          "romaji": "Tsugi wa morau ni susumimashou.",
          "english": "Speaker: Let's proceed to To receive next.",
          "audioText": "次はもらうに進みましょう。",
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
      "id": "u12_l13",
      "unitId": "unit_12",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "To help / assist & To give (to someone else)",
      "titleJp": "手伝う・あげる",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "手伝う",
        "あげる",
        "くれる"
      ],
      "kanjiKeywords": [
        "手",
        "伝"
      ],
      "items": [
        {
          "id": "u12_l13_1",
          "type": "listen",
          "prompt": "手伝う",
          "furigana": "てつだう",
          "romaji": "tetsudau",
          "english": "To help / assist",
          "audioText": "てつだう",
          "options": [
            "To help / assist",
            "Kind / hospitable",
            "Confirming To give (to speaker)",
            "Confirming To lend"
          ],
          "correctAnswer": "To help / assist"
        },
        {
          "id": "u12_l13_2",
          "type": "spell",
          "prompt": "手伝う",
          "furigana": "てつだう",
          "romaji": "tetsudau",
          "english": "Build 'To help / assist'",
          "audioText": "てつだう",
          "tileBank": [
            "て",
            "う",
            "つ",
            "だ",
            "た",
            "む",
            "き",
            "さ"
          ],
          "correctAnswer": "てつだう"
        },
        {
          "id": "u12_l13_3",
          "type": "cloze",
          "prompt": "私はあげるがすきです",
          "furigana": "わたしはあげるがすきです",
          "romaji": "Watashi wa ageru ga suki desu.",
          "english": "Fill in the blank with the correct particle for To give (to someone else).",
          "audioText": "あげる",
          "clozeSentence": "これはあげる {{BLANK}} す。",
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
          "id": "u12_l13_4",
          "type": "scramble",
          "prompt": "これはあげるです",
          "furigana": "これはあげるです",
          "romaji": "Kore wa ageru desu.",
          "english": "This is To give (to someone else).",
          "audioText": "これはあげるです",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "これは",
            "です",
            "あげる"
          ],
          "scrambleSolution": [
            "これは",
            "あげる",
            "です"
          ],
          "correctAnswer": "これはあげるです"
        },
        {
          "id": "u12_l13_5",
          "type": "speak",
          "prompt": "くれる",
          "furigana": "くれる",
          "romaji": "kureru",
          "english": "Pronounce: To give (to speaker)",
          "audioText": "くれる",
          "targetSpeech": "くれる",
          "options": [
            "To give (to speaker)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "くれる"
        },
        {
          "id": "u12_l13_6",
          "type": "dictate",
          "prompt": "くれるをお願いします",
          "furigana": "くれるをおねがいします",
          "romaji": "kureru o onegaishimasu.",
          "english": "To give (to speaker), please.",
          "audioText": "くれるをお願いします",
          "dictateTokens": [
            "くれる",
            "です",
            "を",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "くれる",
            "を",
            "お願いします"
          ],
          "correctAnswer": "くれるをお願いします"
        },
        {
          "id": "u12_l13_7",
          "type": "match",
          "prompt": "手伝う・あげる・くれる・もらう",
          "furigana": "てつだう・あげる・くれる・もらう",
          "romaji": "tetsudau, ageru, kureru, morau",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "てつだう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "手伝う",
              "right": "To help / assist",
              "furigana": "てつだう",
              "romaji": "tetsudau"
            },
            {
              "id": "p_1",
              "left": "あげる",
              "right": "To give (to someone else)",
              "furigana": "あげる",
              "romaji": "ageru"
            },
            {
              "id": "p_2",
              "left": "くれる",
              "right": "To give (to speaker)",
              "furigana": "くれる",
              "romaji": "kureru"
            },
            {
              "id": "p_3",
              "left": "もらう",
              "right": "To receive",
              "furigana": "もらう",
              "romaji": "morau"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l13_8",
          "type": "dialogue",
          "prompt": "手伝うについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "手伝うについて教えていただけますか？",
          "furigana": "手伝うについて教えていただけますか？",
          "romaji": "tetsudau ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about To help / assist?",
          "audioText": "手伝うについて教えていただけますか？",
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
      "id": "u12_l14",
      "unitId": "unit_12",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "To receive & Please teach / tell",
      "titleJp": "もらう・教えて",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "もらう",
        "教えて",
        "貸す"
      ],
      "kanjiKeywords": [
        "教",
        "貸"
      ],
      "items": [
        {
          "id": "u12_l14_1",
          "type": "listen",
          "prompt": "もらう",
          "furigana": "もらう",
          "romaji": "morau",
          "english": "To receive",
          "audioText": "もらう",
          "options": [
            "Confirming To lend",
            "To be saved / helpful",
            "To receive",
            "Confirming Nuisance / inconvenience"
          ],
          "correctAnswer": "To receive"
        },
        {
          "id": "u12_l14_2",
          "type": "spell",
          "prompt": "もらう",
          "furigana": "もらう",
          "romaji": "morau",
          "english": "Build 'To receive'",
          "audioText": "もらう",
          "tileBank": [
            "ね",
            "ひ",
            "う",
            "ゆ",
            "も",
            "ら",
            "な",
            "ぬ"
          ],
          "correctAnswer": "もらう"
        },
        {
          "id": "u12_l14_3",
          "type": "cloze",
          "prompt": "私は教えてがすきです",
          "furigana": "わたしはおしえてがすきです",
          "romaji": "Watashi wa oshiete ga suki desu.",
          "english": "Fill in the blank with the correct particle for Please teach / tell.",
          "audioText": "教えて",
          "clozeSentence": "これは教えて {{BLANK}} す。",
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
          "id": "u12_l14_4",
          "type": "scramble",
          "prompt": "これは教えてです",
          "furigana": "これはおしえてです",
          "romaji": "Kore wa oshiete desu.",
          "english": "This is Please teach / tell.",
          "audioText": "これは教えてです",
          "scrambleTokens": [
            "これは",
            "です",
            "それ",
            "教えて",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "教えて",
            "です"
          ],
          "correctAnswer": "これは教えてです"
        },
        {
          "id": "u12_l14_5",
          "type": "speak",
          "prompt": "貸す",
          "furigana": "かす",
          "romaji": "kasu",
          "english": "Pronounce: To lend",
          "audioText": "かす",
          "targetSpeech": "貸す",
          "options": [
            "To lend",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "貸す"
        },
        {
          "id": "u12_l14_6",
          "type": "dictate",
          "prompt": "貸すをお願いします",
          "furigana": "かすをおねがいします",
          "romaji": "kasu o onegaishimasu.",
          "english": "To lend, please.",
          "audioText": "貸すをお願いします",
          "dictateTokens": [
            "です",
            "貸す",
            "ありがとう",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "貸す",
            "を",
            "お願いします"
          ],
          "correctAnswer": "貸すをお願いします"
        },
        {
          "id": "u12_l14_7",
          "type": "match",
          "prompt": "もらう・教えて・貸す・借りる",
          "furigana": "もらう・おしえて・かす・かりる",
          "romaji": "morau, oshiete, kasu, kariru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "もらう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "もらう",
              "right": "To receive",
              "furigana": "もらう",
              "romaji": "morau"
            },
            {
              "id": "p_1",
              "left": "教えて",
              "right": "Please teach / tell",
              "furigana": "おしえて",
              "romaji": "oshiete"
            },
            {
              "id": "p_2",
              "left": "貸す",
              "right": "To lend",
              "furigana": "かす",
              "romaji": "kasu"
            },
            {
              "id": "p_3",
              "left": "借りる",
              "right": "To borrow",
              "furigana": "かりる",
              "romaji": "kariru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l14_8",
          "type": "dialogue",
          "prompt": "あげるの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "あげるの準備はできていますか？",
          "furigana": "あげるの準備はできていますか？",
          "romaji": "ageru no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for To give (to someone else) ready?",
          "audioText": "あげるの準備はできていますか？",
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
      "id": "u12_l15",
      "unitId": "unit_12",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 12 Master Exam",
      "iconType": "test",
      "title": "Unit 12 Master Exam",
      "titleJp": "第12週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "借りる",
        "送る",
        "親切"
      ],
      "kanjiKeywords": [
        "借",
        "送",
        "親",
        "切"
      ],
      "items": [
        {
          "id": "u12_l15_1",
          "type": "listen",
          "prompt": "借りる",
          "furigana": "かりる",
          "romaji": "kariru",
          "english": "To borrow",
          "audioText": "かりる",
          "options": [
            "To borrow",
            "To lend",
            "Confirming Hesitation / holding back",
            "To give (to speaker)"
          ],
          "correctAnswer": "To borrow"
        },
        {
          "id": "u12_l15_2",
          "type": "spell",
          "prompt": "借りる",
          "furigana": "かりる",
          "romaji": "kariru",
          "english": "Build 'To borrow'",
          "audioText": "かりる",
          "tileBank": [
            "ん",
            "し",
            "の",
            "る",
            "ら",
            "か",
            "り",
            "よ"
          ],
          "correctAnswer": "かりる"
        },
        {
          "id": "u12_l15_3",
          "type": "cloze",
          "prompt": "私は送るがすきです",
          "furigana": "わたしはおくるがすきです",
          "romaji": "Watashi wa okuru ga suki desu.",
          "english": "Fill in the blank with the correct particle for To send / see someone off.",
          "audioText": "送る",
          "clozeSentence": "これは送る {{BLANK}} す。",
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
          "id": "u12_l15_4",
          "type": "scramble",
          "prompt": "これは送るです",
          "furigana": "これはおくるです",
          "romaji": "Kore wa okuru desu.",
          "english": "This is To send / see someone off.",
          "audioText": "これは送るです",
          "scrambleTokens": [
            "ではありません",
            "です",
            "それ",
            "これは",
            "送る"
          ],
          "scrambleSolution": [
            "これは",
            "送る",
            "です"
          ],
          "correctAnswer": "これは送るです"
        },
        {
          "id": "u12_l15_5",
          "type": "speak",
          "prompt": "親切",
          "furigana": "しんせつ",
          "romaji": "shinsetsu",
          "english": "Pronounce: Kind / hospitable",
          "audioText": "しんせつ",
          "targetSpeech": "親切",
          "options": [
            "Kind / hospitable",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "親切"
        },
        {
          "id": "u12_l15_6",
          "type": "dictate",
          "prompt": "親切をお願いします",
          "furigana": "しんせつをおねがいします",
          "romaji": "shinsetsu o onegaishimasu.",
          "english": "Kind / hospitable, please.",
          "audioText": "親切をお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "ありがとう",
            "親切",
            "を"
          ],
          "dictateSolution": [
            "親切",
            "を",
            "お願いします"
          ],
          "correctAnswer": "親切をお願いします"
        },
        {
          "id": "u12_l15_7",
          "type": "match",
          "prompt": "借りる・送る・親切・お願い",
          "furigana": "かりる・おくる・しんせつ・おねがい",
          "romaji": "kariru, okuru, shinsetsu, onegai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かりる",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "借りる",
              "right": "To borrow",
              "furigana": "かりる",
              "romaji": "kariru"
            },
            {
              "id": "p_1",
              "left": "送る",
              "right": "To send / see someone off",
              "furigana": "おくる",
              "romaji": "okuru"
            },
            {
              "id": "p_2",
              "left": "親切",
              "right": "Kind / hospitable",
              "furigana": "しんせつ",
              "romaji": "shinsetsu"
            },
            {
              "id": "p_3",
              "left": "お願い",
              "right": "Favor / request",
              "furigana": "おねがい",
              "romaji": "onegai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u12_l15_8",
          "type": "dialogue",
          "prompt": "くれるについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "くれるについてどう思われますか？",
          "furigana": "くれるについてどう思われますか？",
          "romaji": "kureru ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on To give (to speaker)?",
          "audioText": "くれるについてどう思われますか？",
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
    "id": "gate_unit_12",
    "unitId": "unit_12",
    "title": "Unit 12 Mastery Checkpoint",
    "titleJp": "第12週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u12_l1_1",
        "type": "listen",
        "prompt": "手伝う",
        "furigana": "てつだう",
        "romaji": "tetsudau",
        "english": "To help / assist",
        "audioText": "てつだう",
        "options": [
          "To help / assist",
          "Confirming To be saved / helpful",
          "Hesitation / holding back",
          "Confirming Hesitation / holding back"
        ],
        "correctAnswer": "To help / assist"
      },
      {
        "id": "u12_l1_2",
        "type": "spell",
        "prompt": "手伝う",
        "furigana": "てつだう",
        "romaji": "tetsudau",
        "english": "Build 'To help / assist'",
        "audioText": "てつだう",
        "tileBank": [
          "ら",
          "て",
          "だ",
          "す",
          "う",
          "つ",
          "は",
          "け"
        ],
        "correctAnswer": "てつだう"
      },
      {
        "id": "u12_l3_1",
        "type": "listen",
        "prompt": "借りる",
        "furigana": "かりる",
        "romaji": "kariru",
        "english": "To borrow",
        "audioText": "かりる",
        "options": [
          "To help / assist",
          "To borrow",
          "To lend",
          "Confirming To lend"
        ],
        "correctAnswer": "To borrow"
      },
      {
        "id": "u12_l3_2",
        "type": "spell",
        "prompt": "借りる",
        "furigana": "かりる",
        "romaji": "kariru",
        "english": "Build 'To borrow'",
        "audioText": "かりる",
        "tileBank": [
          "り",
          "を",
          "る",
          "お",
          "か",
          "ゆ",
          "な",
          "あ"
        ],
        "correctAnswer": "かりる"
      },
      {
        "id": "u12_l5_1",
        "type": "listen",
        "prompt": "遠慮",
        "furigana": "えんりょ",
        "romaji": "enryo",
        "english": "Hesitation / holding back",
        "audioText": "えんりょ",
        "options": [
          "Confirming To help / assist",
          "To lend",
          "To help / assist",
          "Hesitation / holding back"
        ],
        "correctAnswer": "Hesitation / holding back"
      },
      {
        "id": "u12_l5_2",
        "type": "spell",
        "prompt": "遠慮",
        "furigana": "えんりょ",
        "romaji": "enryo",
        "english": "Build 'Hesitation / holding back'",
        "audioText": "えんりょ",
        "tileBank": [
          "り",
          "を",
          "む",
          "さ",
          "ょ",
          "ら",
          "え",
          "ん"
        ],
        "correctAnswer": "えんりょ"
      },
      {
        "id": "u12_l7_1",
        "type": "listen",
        "prompt": "もらうの確認",
        "furigana": "もらうのかくにん",
        "romaji": "morau no kakunin",
        "english": "Confirming To receive",
        "audioText": "もらうのかくにん",
        "options": [
          "Kind / hospitable",
          "Confirming To be saved / helpful",
          "Confirming Hesitation / holding back",
          "Confirming To receive"
        ],
        "correctAnswer": "Confirming To receive"
      },
      {
        "id": "u12_l7_2",
        "type": "spell",
        "prompt": "もらうの確認",
        "furigana": "もらうのかくにん",
        "romaji": "morau no kakunin",
        "english": "Build 'Confirming To receive'",
        "audioText": "もらうのかくにん",
        "tileBank": [
          "く",
          "ん",
          "も",
          "の",
          "う",
          "に",
          "か",
          "ら"
        ],
        "correctAnswer": "もらうのかくにん"
      },
      {
        "id": "u12_l9_1",
        "type": "listen",
        "prompt": "お願いの確認",
        "furigana": "おねがいのかくにん",
        "romaji": "onegai no kakunin",
        "english": "Confirming Favor / request",
        "audioText": "おねがいのかくにん",
        "options": [
          "Confirming Favor / request",
          "Confirming To send / see someone off",
          "Confirming To give (to someone else)",
          "Confirming Kind / hospitable"
        ],
        "correctAnswer": "Confirming Favor / request"
      },
      {
        "id": "u12_l9_2",
        "type": "spell",
        "prompt": "お願いの確認",
        "furigana": "おねがいのかくにん",
        "romaji": "onegai no kakunin",
        "english": "Build 'Confirming Favor / request'",
        "audioText": "おねがいのかくにん",
        "tileBank": [
          "に",
          "が",
          "の",
          "く",
          "お",
          "い",
          "ね",
          "か"
        ],
        "correctAnswer": "おねがいのかくにん"
      },
      {
        "id": "u12_l11_1",
        "type": "listen",
        "prompt": "手伝うの確認",
        "furigana": "てつだうのかくにん",
        "romaji": "tetsudau no kakunin",
        "english": "Confirming To help / assist",
        "audioText": "てつだうのかくにん",
        "options": [
          "To be saved / helpful",
          "Confirming To help / assist",
          "Confirming Please teach / tell",
          "Favor / request"
        ],
        "correctAnswer": "Confirming To help / assist"
      },
      {
        "id": "u12_l11_2",
        "type": "spell",
        "prompt": "手伝うの確認",
        "furigana": "てつだうのかくにん",
        "romaji": "tetsudau no kakunin",
        "english": "Build 'Confirming To help / assist'",
        "audioText": "てつだうのかくにん",
        "tileBank": [
          "く",
          "つ",
          "の",
          "に",
          "だ",
          "う",
          "か",
          "て"
        ],
        "correctAnswer": "てつだうのかくにん"
      }
    ]
  }
};
