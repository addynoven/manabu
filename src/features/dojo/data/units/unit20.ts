import type { DojoUnit } from "../../models/dojo.model";

export const unit20: DojoUnit = {
  "id": "unit_20",
  "unitNumber": 20,
  "title": "News, Economy & Media",
  "titleJp": "ニュースと経済社会",
  "description": "Comprehend newspaper headlines, market indicators, inflation, and objective journalistic expressions.",
  "icon": "📰",
  "themeColor": "#DC2626",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u20_l1",
      "unitId": "unit_20",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Economic climate & Stock price",
      "titleJp": "景気・株価",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "景気",
        "株価",
        "円安"
      ],
      "kanjiKeywords": [
        "景",
        "気",
        "株",
        "価",
        "円",
        "安"
      ],
      "items": [
        {
          "id": "u20_l1_1",
          "type": "listen",
          "prompt": "景気",
          "furigana": "けいき",
          "romaji": "keiki",
          "english": "Economic climate",
          "audioText": "けいき",
          "options": [
            "Confirming News report / journalism",
            "Confirming Strong yen appreciation",
            "Confirming Growth rate",
            "Economic climate"
          ],
          "correctAnswer": "Economic climate"
        },
        {
          "id": "u20_l1_2",
          "type": "spell",
          "prompt": "景気",
          "furigana": "けいき",
          "romaji": "keiki",
          "english": "Build 'Economic climate'",
          "audioText": "けいき",
          "tileBank": [
            "け",
            "き",
            "も",
            "み",
            "る",
            "わ",
            "い",
            "せ"
          ],
          "correctAnswer": "けいき"
        },
        {
          "id": "u20_l1_3",
          "type": "cloze",
          "prompt": "私は株価がすきです",
          "furigana": "わたしはかぶかがすきです",
          "romaji": "Watashi wa kabuka ga suki desu.",
          "english": "Fill in the blank with the correct particle for Stock price.",
          "audioText": "株価",
          "clozeSentence": "これは株価 {{BLANK}} す。",
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
          "id": "u20_l1_4",
          "type": "scramble",
          "prompt": "これは株価です",
          "furigana": "これはかぶかです",
          "romaji": "Kore wa kabuka desu.",
          "english": "This is Stock price.",
          "audioText": "これは株価です",
          "scrambleTokens": [
            "それ",
            "株価",
            "ではありません",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "株価",
            "です"
          ],
          "correctAnswer": "これは株価です"
        },
        {
          "id": "u20_l1_5",
          "type": "speak",
          "prompt": "円安",
          "furigana": "えんやす",
          "romaji": "enyasu",
          "english": "Pronounce: Weak yen depreciation",
          "audioText": "えんやす",
          "targetSpeech": "円安",
          "options": [
            "Weak yen depreciation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "円安"
        },
        {
          "id": "u20_l1_6",
          "type": "dictate",
          "prompt": "円安をお願いします",
          "furigana": "えんやすをおねがいします",
          "romaji": "enyasu o onegaishimasu.",
          "english": "Weak yen depreciation, please.",
          "audioText": "円安をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "です",
            "を",
            "円安"
          ],
          "dictateSolution": [
            "円安",
            "を",
            "お願いします"
          ],
          "correctAnswer": "円安をお願いします"
        },
        {
          "id": "u20_l1_7",
          "type": "match",
          "prompt": "景気・株価・円安・円高",
          "furigana": "けいき・かぶか・えんやす・えんだか",
          "romaji": "keiki, kabuka, enyasu, endaka",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "けいき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "景気",
              "right": "Economic climate",
              "furigana": "けいき",
              "romaji": "keiki"
            },
            {
              "id": "p_1",
              "left": "株価",
              "right": "Stock price",
              "furigana": "かぶか",
              "romaji": "kabuka"
            },
            {
              "id": "p_2",
              "left": "円安",
              "right": "Weak yen depreciation",
              "furigana": "えんやす",
              "romaji": "enyasu"
            },
            {
              "id": "p_3",
              "left": "円高",
              "right": "Strong yen appreciation",
              "furigana": "えんだか",
              "romaji": "endaka"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l1_8",
          "type": "dialogue",
          "prompt": "景気について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "景気について教えていただけますか？",
          "furigana": "景気について教えていただけますか？",
          "romaji": "keiki ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Economic climate?",
          "audioText": "景気について教えていただけますか？",
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
      "id": "u20_l2",
      "unitId": "unit_20",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Strong yen appreciation & Inflation",
      "titleJp": "円高・インフレ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "円高",
        "インフレ",
        "報道"
      ],
      "kanjiKeywords": [
        "円",
        "高",
        "報",
        "道"
      ],
      "items": [
        {
          "id": "u20_l2_1",
          "type": "listen",
          "prompt": "円高",
          "furigana": "えんだか",
          "romaji": "endaka",
          "english": "Strong yen appreciation",
          "audioText": "えんだか",
          "options": [
            "Enterprise / corporation",
            "Confirming Enterprise / corporation",
            "Strong yen appreciation",
            "Confirming Inflation"
          ],
          "correctAnswer": "Strong yen appreciation"
        },
        {
          "id": "u20_l2_2",
          "type": "spell",
          "prompt": "円高",
          "furigana": "えんだか",
          "romaji": "endaka",
          "english": "Build 'Strong yen appreciation'",
          "audioText": "えんだか",
          "tileBank": [
            "の",
            "き",
            "あ",
            "だ",
            "か",
            "ん",
            "へ",
            "え"
          ],
          "correctAnswer": "えんだか"
        },
        {
          "id": "u20_l2_3",
          "type": "cloze",
          "prompt": "私はインフレがすきです",
          "furigana": "わたしはインフレがすきです",
          "romaji": "Watashi wa infure ga suki desu.",
          "english": "Fill in the blank with the correct particle for Inflation.",
          "audioText": "インフレ",
          "clozeSentence": "これはインフレ {{BLANK}} す。",
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
          "id": "u20_l2_4",
          "type": "scramble",
          "prompt": "これはインフレです",
          "furigana": "これはインフレです",
          "romaji": "Kore wa infure desu.",
          "english": "This is Inflation.",
          "audioText": "これはインフレです",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "です",
            "インフレ",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "インフレ",
            "です"
          ],
          "correctAnswer": "これはインフレです"
        },
        {
          "id": "u20_l2_5",
          "type": "speak",
          "prompt": "報道",
          "furigana": "ほうどう",
          "romaji": "houdou",
          "english": "Pronounce: News report / journalism",
          "audioText": "ほうどう",
          "targetSpeech": "報道",
          "options": [
            "News report / journalism",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "報道"
        },
        {
          "id": "u20_l2_6",
          "type": "dictate",
          "prompt": "報道をお願いします",
          "furigana": "ほうどうをおねがいします",
          "romaji": "houdou o onegaishimasu.",
          "english": "News report / journalism, please.",
          "audioText": "報道をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "報道",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "報道",
            "を",
            "お願いします"
          ],
          "correctAnswer": "報道をお願いします"
        },
        {
          "id": "u20_l2_7",
          "type": "match",
          "prompt": "円高・インフレ・報道・政策",
          "furigana": "えんだか・インフレ・ほうどう・せいさく",
          "romaji": "endaka, infure, houdou, seisaku",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えんだか",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "円高",
              "right": "Strong yen appreciation",
              "furigana": "えんだか",
              "romaji": "endaka"
            },
            {
              "id": "p_1",
              "left": "インフレ",
              "right": "Inflation",
              "furigana": "インフレ",
              "romaji": "infure"
            },
            {
              "id": "p_2",
              "left": "報道",
              "right": "News report / journalism",
              "furigana": "ほうどう",
              "romaji": "houdou"
            },
            {
              "id": "p_3",
              "left": "政策",
              "right": "Government policy",
              "furigana": "せいさく",
              "romaji": "seisaku"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l2_8",
          "type": "dialogue",
          "prompt": "株価の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "株価の準備はできていますか？",
          "furigana": "株価の準備はできていますか？",
          "romaji": "kabuka no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Stock price ready?",
          "audioText": "株価の準備はできていますか？",
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
      "id": "u20_l3",
      "unitId": "unit_20",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Government policy & Financial market",
      "titleJp": "政策・市場",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "政策",
        "市場",
        "成長率"
      ],
      "kanjiKeywords": [
        "政",
        "策",
        "市",
        "場",
        "成",
        "長",
        "率"
      ],
      "items": [
        {
          "id": "u20_l3_1",
          "type": "listen",
          "prompt": "政策",
          "furigana": "せいさく",
          "romaji": "seisaku",
          "english": "Government policy",
          "audioText": "せいさく",
          "options": [
            "Confirming Consumption / spending",
            "Government policy",
            "Confirming Strong yen appreciation",
            "Outlook / prospect"
          ],
          "correctAnswer": "Government policy"
        },
        {
          "id": "u20_l3_2",
          "type": "spell",
          "prompt": "政策",
          "furigana": "せいさく",
          "romaji": "seisaku",
          "english": "Build 'Government policy'",
          "audioText": "せいさく",
          "tileBank": [
            "の",
            "い",
            "わ",
            "せ",
            "し",
            "く",
            "ひ",
            "さ"
          ],
          "correctAnswer": "せいさく"
        },
        {
          "id": "u20_l3_3",
          "type": "cloze",
          "prompt": "私は市場がすきです",
          "furigana": "わたしはしじょうがすきです",
          "romaji": "Watashi wa shijou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Financial market.",
          "audioText": "市場",
          "clozeSentence": "これは市場 {{BLANK}} す。",
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
          "id": "u20_l3_4",
          "type": "scramble",
          "prompt": "これは市場です",
          "furigana": "これはしじょうです",
          "romaji": "Kore wa shijou desu.",
          "english": "This is Financial market.",
          "audioText": "これは市場です",
          "scrambleTokens": [
            "市場",
            "それ",
            "これは",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "市場",
            "です"
          ],
          "correctAnswer": "これは市場です"
        },
        {
          "id": "u20_l3_5",
          "type": "speak",
          "prompt": "成長率",
          "furigana": "せいちょうりつ",
          "romaji": "seichouritsu",
          "english": "Pronounce: Growth rate",
          "audioText": "せいちょうりつ",
          "targetSpeech": "成長率",
          "options": [
            "Growth rate",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "成長率"
        },
        {
          "id": "u20_l3_6",
          "type": "dictate",
          "prompt": "成長率をお願いします",
          "furigana": "せいちょうりつをおねがいします",
          "romaji": "seichouritsu o onegaishimasu.",
          "english": "Growth rate, please.",
          "audioText": "成長率をお願いします",
          "dictateTokens": [
            "を",
            "成長率",
            "ありがとう",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "成長率",
            "を",
            "お願いします"
          ],
          "correctAnswer": "成長率をお願いします"
        },
        {
          "id": "u20_l3_7",
          "type": "match",
          "prompt": "政策・市場・成長率・消費",
          "furigana": "せいさく・しじょう・せいちょうりつ・しょうひ",
          "romaji": "seisaku, shijou, seichouritsu, shouhi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せいさく",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "政策",
              "right": "Government policy",
              "furigana": "せいさく",
              "romaji": "seisaku"
            },
            {
              "id": "p_1",
              "left": "市場",
              "right": "Financial market",
              "furigana": "しじょう",
              "romaji": "shijou"
            },
            {
              "id": "p_2",
              "left": "成長率",
              "right": "Growth rate",
              "furigana": "せいちょうりつ",
              "romaji": "seichouritsu"
            },
            {
              "id": "p_3",
              "left": "消費",
              "right": "Consumption / spending",
              "furigana": "しょうひ",
              "romaji": "shouhi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l3_8",
          "type": "dialogue",
          "prompt": "円安についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "円安についてどう思われますか？",
          "furigana": "円安についてどう思われますか？",
          "romaji": "enyasu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Weak yen depreciation?",
          "audioText": "円安についてどう思われますか？",
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
      "id": "u20_l4",
      "unitId": "unit_20",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Consumption / spending & Investment",
      "titleJp": "消費・投資",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "消費",
        "投資",
        "企業"
      ],
      "kanjiKeywords": [
        "消",
        "費",
        "投",
        "資",
        "企",
        "業"
      ],
      "items": [
        {
          "id": "u20_l4_1",
          "type": "listen",
          "prompt": "消費",
          "furigana": "しょうひ",
          "romaji": "shouhi",
          "english": "Consumption / spending",
          "audioText": "しょうひ",
          "options": [
            "Confirming Investment",
            "Confirming Stock price",
            "Consumption / spending",
            "Confirming Strong yen appreciation"
          ],
          "correctAnswer": "Consumption / spending"
        },
        {
          "id": "u20_l4_2",
          "type": "spell",
          "prompt": "消費",
          "furigana": "しょうひ",
          "romaji": "shouhi",
          "english": "Build 'Consumption / spending'",
          "audioText": "しょうひ",
          "tileBank": [
            "か",
            "ひ",
            "は",
            "る",
            "う",
            "し",
            "ほ",
            "ょ"
          ],
          "correctAnswer": "しょうひ"
        },
        {
          "id": "u20_l4_3",
          "type": "cloze",
          "prompt": "私は投資がすきです",
          "furigana": "わたしはとうしがすきです",
          "romaji": "Watashi wa toushi ga suki desu.",
          "english": "Fill in the blank with the correct particle for Investment.",
          "audioText": "投資",
          "clozeSentence": "これは投資 {{BLANK}} す。",
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
          "id": "u20_l4_4",
          "type": "scramble",
          "prompt": "これは投資です",
          "furigana": "これはとうしです",
          "romaji": "Kore wa toushi desu.",
          "english": "This is Investment.",
          "audioText": "これは投資です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "これは",
            "それ",
            "投資"
          ],
          "scrambleSolution": [
            "これは",
            "投資",
            "です"
          ],
          "correctAnswer": "これは投資です"
        },
        {
          "id": "u20_l4_5",
          "type": "speak",
          "prompt": "企業",
          "furigana": "きぎょう",
          "romaji": "kigyou",
          "english": "Pronounce: Enterprise / corporation",
          "audioText": "きぎょう",
          "targetSpeech": "企業",
          "options": [
            "Enterprise / corporation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "企業"
        },
        {
          "id": "u20_l4_6",
          "type": "dictate",
          "prompt": "企業をお願いします",
          "furigana": "きぎょうをおねがいします",
          "romaji": "kigyou o onegaishimasu.",
          "english": "Enterprise / corporation, please.",
          "audioText": "企業をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "企業",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "企業",
            "を",
            "お願いします"
          ],
          "correctAnswer": "企業をお願いします"
        },
        {
          "id": "u20_l4_7",
          "type": "match",
          "prompt": "消費・投資・企業・影響",
          "furigana": "しょうひ・とうし・きぎょう・えいきょう",
          "romaji": "shouhi, toushi, kigyou, eikyou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しょうひ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "消費",
              "right": "Consumption / spending",
              "furigana": "しょうひ",
              "romaji": "shouhi"
            },
            {
              "id": "p_1",
              "left": "投資",
              "right": "Investment",
              "furigana": "とうし",
              "romaji": "toushi"
            },
            {
              "id": "p_2",
              "left": "企業",
              "right": "Enterprise / corporation",
              "furigana": "きぎょう",
              "romaji": "kigyou"
            },
            {
              "id": "p_3",
              "left": "影響",
              "right": "Impact / consequence",
              "furigana": "えいきょう",
              "romaji": "eikyou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l4_8",
          "type": "dialogue",
          "prompt": "次は円高に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は円高に進みましょう。",
          "furigana": "次は円高に進みましょう。",
          "romaji": "Tsugi wa endaka ni susumimashou.",
          "english": "Speaker: Let's proceed to Strong yen appreciation next.",
          "audioText": "次は円高に進みましょう。",
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
      "id": "u20_l5",
      "unitId": "unit_20",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Impact / consequence & Concern / anxiety",
      "titleJp": "影響・懸念",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "影響",
        "懸念",
        "見通し"
      ],
      "kanjiKeywords": [
        "影",
        "響",
        "懸",
        "念",
        "見",
        "通"
      ],
      "items": [
        {
          "id": "u20_l5_1",
          "type": "listen",
          "prompt": "影響",
          "furigana": "えいきょう",
          "romaji": "eikyou",
          "english": "Impact / consequence",
          "audioText": "えいきょう",
          "options": [
            "Confirming Weak yen depreciation",
            "Impact / consequence",
            "Confirming News report / journalism",
            "Investment"
          ],
          "correctAnswer": "Impact / consequence"
        },
        {
          "id": "u20_l5_2",
          "type": "spell",
          "prompt": "影響",
          "furigana": "えいきょう",
          "romaji": "eikyou",
          "english": "Build 'Impact / consequence'",
          "audioText": "えいきょう",
          "tileBank": [
            "き",
            "ほ",
            "ね",
            "ょ",
            "な",
            "う",
            "い",
            "え"
          ],
          "correctAnswer": "えいきょう"
        },
        {
          "id": "u20_l5_3",
          "type": "cloze",
          "prompt": "私は懸念がすきです",
          "furigana": "わたしはけねんがすきです",
          "romaji": "Watashi wa kenen ga suki desu.",
          "english": "Fill in the blank with the correct particle for Concern / anxiety.",
          "audioText": "懸念",
          "clozeSentence": "これは懸念 {{BLANK}} す。",
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
          "id": "u20_l5_4",
          "type": "scramble",
          "prompt": "これは懸念です",
          "furigana": "これはけねんです",
          "romaji": "Kore wa kenen desu.",
          "english": "This is Concern / anxiety.",
          "audioText": "これは懸念です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "それ",
            "懸念",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "懸念",
            "です"
          ],
          "correctAnswer": "これは懸念です"
        },
        {
          "id": "u20_l5_5",
          "type": "speak",
          "prompt": "見通し",
          "furigana": "みとおし",
          "romaji": "mitooshi",
          "english": "Pronounce: Outlook / prospect",
          "audioText": "みとおし",
          "targetSpeech": "見通し",
          "options": [
            "Outlook / prospect",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "見通し"
        },
        {
          "id": "u20_l5_6",
          "type": "dictate",
          "prompt": "見通しをお願いします",
          "furigana": "みとおしをおねがいします",
          "romaji": "mitooshi o onegaishimasu.",
          "english": "Outlook / prospect, please.",
          "audioText": "見通しをお願いします",
          "dictateTokens": [
            "ありがとう",
            "見通し",
            "お願いします",
            "です",
            "を"
          ],
          "dictateSolution": [
            "見通し",
            "を",
            "お願いします"
          ],
          "correctAnswer": "見通しをお願いします"
        },
        {
          "id": "u20_l5_7",
          "type": "match",
          "prompt": "影響・懸念・見通し・景気の確認",
          "furigana": "えいきょう・けねん・みとおし・けいきのかくにん",
          "romaji": "eikyou, kenen, mitooshi, keiki no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えいきょう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "影響",
              "right": "Impact / consequence",
              "furigana": "えいきょう",
              "romaji": "eikyou"
            },
            {
              "id": "p_1",
              "left": "懸念",
              "right": "Concern / anxiety",
              "furigana": "けねん",
              "romaji": "kenen"
            },
            {
              "id": "p_2",
              "left": "見通し",
              "right": "Outlook / prospect",
              "furigana": "みとおし",
              "romaji": "mitooshi"
            },
            {
              "id": "p_3",
              "left": "景気の確認",
              "right": "Confirming Economic climate",
              "furigana": "けいきのかくにん",
              "romaji": "keiki no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l5_8",
          "type": "dialogue",
          "prompt": "景気について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "景気について教えていただけますか？",
          "furigana": "景気について教えていただけますか？",
          "romaji": "keiki ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Economic climate?",
          "audioText": "景気について教えていただけますか？",
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
      "id": "u20_l6",
      "unitId": "unit_20",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Economic climate & Confirming Stock price",
      "titleJp": "景気の確認・株価の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "景気の確認",
        "株価の確認",
        "円安の確認"
      ],
      "kanjiKeywords": [
        "景",
        "気",
        "確",
        "認",
        "株",
        "価",
        "確",
        "認",
        "円",
        "安",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u20_l6_1",
          "type": "listen",
          "prompt": "景気の確認",
          "furigana": "けいきのかくにん",
          "romaji": "keiki no kakunin",
          "english": "Confirming Economic climate",
          "audioText": "けいきのかくにん",
          "options": [
            "Consumption / spending",
            "Confirming Economic climate",
            "Confirming Enterprise / corporation",
            "Confirming Government policy"
          ],
          "correctAnswer": "Confirming Economic climate"
        },
        {
          "id": "u20_l6_2",
          "type": "spell",
          "prompt": "景気の確認",
          "furigana": "けいきのかくにん",
          "romaji": "keiki no kakunin",
          "english": "Build 'Confirming Economic climate'",
          "audioText": "けいきのかくにん",
          "tileBank": [
            "に",
            "け",
            "く",
            "か",
            "ん",
            "き",
            "の",
            "い"
          ],
          "correctAnswer": "けいきのかくにん"
        },
        {
          "id": "u20_l6_3",
          "type": "cloze",
          "prompt": "私は株価の確認がすきです",
          "furigana": "わたしはかぶかのかくにんがすきです",
          "romaji": "Watashi wa kabuka no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Stock price.",
          "audioText": "株価の確認",
          "clozeSentence": "これは株価の確認 {{BLANK}} す。",
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
          "id": "u20_l6_4",
          "type": "scramble",
          "prompt": "これは株価の確認です",
          "furigana": "これはかぶかのかくにんです",
          "romaji": "Kore wa kabuka no kakunin desu.",
          "english": "This is Confirming Stock price.",
          "audioText": "これは株価の確認です",
          "scrambleTokens": [
            "株価の確認",
            "です",
            "それ",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "株価の確認",
            "です"
          ],
          "correctAnswer": "これは株価の確認です"
        },
        {
          "id": "u20_l6_5",
          "type": "speak",
          "prompt": "円安の確認",
          "furigana": "えんやすのかくにん",
          "romaji": "enyasu no kakunin",
          "english": "Pronounce: Confirming Weak yen depreciation",
          "audioText": "えんやすのかくにん",
          "targetSpeech": "円安の確認",
          "options": [
            "Confirming Weak yen depreciation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "円安の確認"
        },
        {
          "id": "u20_l6_6",
          "type": "dictate",
          "prompt": "円安の確認をお願いします",
          "furigana": "えんやすのかくにんをおねがいします",
          "romaji": "enyasu no kakunin o onegaishimasu.",
          "english": "Confirming Weak yen depreciation, please.",
          "audioText": "円安の確認をお願いします",
          "dictateTokens": [
            "円安の確認",
            "を",
            "ありがとう",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "円安の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "円安の確認をお願いします"
        },
        {
          "id": "u20_l6_7",
          "type": "match",
          "prompt": "景気の確認・株価の確認・円安の確認・円高の確認",
          "furigana": "けいきのかくにん・かぶかのかくにん・えんやすのかくにん・えんだかのかくにん",
          "romaji": "keiki no kakunin, kabuka no kakunin, enyasu no kakunin, endaka no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "けいきのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "景気の確認",
              "right": "Confirming Economic climate",
              "furigana": "けいきのかくにん",
              "romaji": "keiki no kakunin"
            },
            {
              "id": "p_1",
              "left": "株価の確認",
              "right": "Confirming Stock price",
              "furigana": "かぶかのかくにん",
              "romaji": "kabuka no kakunin"
            },
            {
              "id": "p_2",
              "left": "円安の確認",
              "right": "Confirming Weak yen depreciation",
              "furigana": "えんやすのかくにん",
              "romaji": "enyasu no kakunin"
            },
            {
              "id": "p_3",
              "left": "円高の確認",
              "right": "Confirming Strong yen appreciation",
              "furigana": "えんだかのかくにん",
              "romaji": "endaka no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l6_8",
          "type": "dialogue",
          "prompt": "株価の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "株価の準備はできていますか？",
          "furigana": "株価の準備はできていますか？",
          "romaji": "kabuka no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Stock price ready?",
          "audioText": "株価の準備はできていますか？",
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
      "id": "u20_l7",
      "unitId": "unit_20",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Strong yen appreciation & Confirming Inflation",
      "titleJp": "円高の確認・インフレの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "円高の確認",
        "インフレの確認",
        "報道の確認"
      ],
      "kanjiKeywords": [
        "円",
        "高",
        "確",
        "認",
        "確",
        "認",
        "報",
        "道",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u20_l7_1",
          "type": "listen",
          "prompt": "円高の確認",
          "furigana": "えんだかのかくにん",
          "romaji": "endaka no kakunin",
          "english": "Confirming Strong yen appreciation",
          "audioText": "えんだかのかくにん",
          "options": [
            "Confirming Investment",
            "Stock price",
            "Confirming Strong yen appreciation",
            "Confirming Inflation"
          ],
          "correctAnswer": "Confirming Strong yen appreciation"
        },
        {
          "id": "u20_l7_2",
          "type": "spell",
          "prompt": "円高の確認",
          "furigana": "えんだかのかくにん",
          "romaji": "endaka no kakunin",
          "english": "Build 'Confirming Strong yen appreciation'",
          "audioText": "えんだかのかくにん",
          "tileBank": [
            "か",
            "か",
            "だ",
            "く",
            "ん",
            "の",
            "に",
            "え"
          ],
          "correctAnswer": "えんだかのかくにん"
        },
        {
          "id": "u20_l7_3",
          "type": "cloze",
          "prompt": "私はインフレの確認がすきです",
          "furigana": "わたしはインフレのかくにんがすきです",
          "romaji": "Watashi wa infure no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Inflation.",
          "audioText": "インフレの確認",
          "clozeSentence": "これはインフレの確認 {{BLANK}} す。",
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
          "id": "u20_l7_4",
          "type": "scramble",
          "prompt": "これはインフレの確認です",
          "furigana": "これはインフレのかくにんです",
          "romaji": "Kore wa infure no kakunin desu.",
          "english": "This is Confirming Inflation.",
          "audioText": "これはインフレの確認です",
          "scrambleTokens": [
            "です",
            "それ",
            "これは",
            "ではありません",
            "インフレの確認"
          ],
          "scrambleSolution": [
            "これは",
            "インフレの確認",
            "です"
          ],
          "correctAnswer": "これはインフレの確認です"
        },
        {
          "id": "u20_l7_5",
          "type": "speak",
          "prompt": "報道の確認",
          "furigana": "ほうどうのかくにん",
          "romaji": "houdou no kakunin",
          "english": "Pronounce: Confirming News report / journalism",
          "audioText": "ほうどうのかくにん",
          "targetSpeech": "報道の確認",
          "options": [
            "Confirming News report / journalism",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "報道の確認"
        },
        {
          "id": "u20_l7_6",
          "type": "dictate",
          "prompt": "報道の確認をお願いします",
          "furigana": "ほうどうのかくにんをおねがいします",
          "romaji": "houdou no kakunin o onegaishimasu.",
          "english": "Confirming News report / journalism, please.",
          "audioText": "報道の確認をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "ありがとう",
            "報道の確認",
            "を"
          ],
          "dictateSolution": [
            "報道の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "報道の確認をお願いします"
        },
        {
          "id": "u20_l7_7",
          "type": "match",
          "prompt": "円高の確認・インフレの確認・報道の確認・政策の確認",
          "furigana": "えんだかのかくにん・インフレのかくにん・ほうどうのかくにん・せいさくのかくにん",
          "romaji": "endaka no kakunin, infure no kakunin, houdou no kakunin, seisaku no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えんだかのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "円高の確認",
              "right": "Confirming Strong yen appreciation",
              "furigana": "えんだかのかくにん",
              "romaji": "endaka no kakunin"
            },
            {
              "id": "p_1",
              "left": "インフレの確認",
              "right": "Confirming Inflation",
              "furigana": "インフレのかくにん",
              "romaji": "infure no kakunin"
            },
            {
              "id": "p_2",
              "left": "報道の確認",
              "right": "Confirming News report / journalism",
              "furigana": "ほうどうのかくにん",
              "romaji": "houdou no kakunin"
            },
            {
              "id": "p_3",
              "left": "政策の確認",
              "right": "Confirming Government policy",
              "furigana": "せいさくのかくにん",
              "romaji": "seisaku no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l7_8",
          "type": "dialogue",
          "prompt": "円安についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "円安についてどう思われますか？",
          "furigana": "円安についてどう思われますか？",
          "romaji": "enyasu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Weak yen depreciation?",
          "audioText": "円安についてどう思われますか？",
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
      "id": "u20_l8",
      "unitId": "unit_20",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Government policy & Confirming Financial market",
      "titleJp": "政策の確認・市場の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "政策の確認",
        "市場の確認",
        "成長率の確認"
      ],
      "kanjiKeywords": [
        "政",
        "策",
        "確",
        "認",
        "市",
        "場",
        "確",
        "認",
        "成",
        "長",
        "率",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u20_l8_1",
          "type": "listen",
          "prompt": "政策の確認",
          "furigana": "せいさくのかくにん",
          "romaji": "seisaku no kakunin",
          "english": "Confirming Government policy",
          "audioText": "せいさくのかくにん",
          "options": [
            "Growth rate",
            "Confirming Government policy",
            "Confirming Economic climate",
            "Confirming Stock price"
          ],
          "correctAnswer": "Confirming Government policy"
        },
        {
          "id": "u20_l8_2",
          "type": "spell",
          "prompt": "政策の確認",
          "furigana": "せいさくのかくにん",
          "romaji": "seisaku no kakunin",
          "english": "Build 'Confirming Government policy'",
          "audioText": "せいさくのかくにん",
          "tileBank": [
            "い",
            "の",
            "く",
            "せ",
            "く",
            "か",
            "さ",
            "に"
          ],
          "correctAnswer": "せいさくのかくにん"
        },
        {
          "id": "u20_l8_3",
          "type": "cloze",
          "prompt": "私は市場の確認がすきです",
          "furigana": "わたしはしじょうのかくにんがすきです",
          "romaji": "Watashi wa shijou no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Financial market.",
          "audioText": "市場の確認",
          "clozeSentence": "これは市場の確認 {{BLANK}} す。",
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
          "id": "u20_l8_4",
          "type": "scramble",
          "prompt": "これは市場の確認です",
          "furigana": "これはしじょうのかくにんです",
          "romaji": "Kore wa shijou no kakunin desu.",
          "english": "This is Confirming Financial market.",
          "audioText": "これは市場の確認です",
          "scrambleTokens": [
            "それ",
            "です",
            "ではありません",
            "市場の確認",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "市場の確認",
            "です"
          ],
          "correctAnswer": "これは市場の確認です"
        },
        {
          "id": "u20_l8_5",
          "type": "speak",
          "prompt": "成長率の確認",
          "furigana": "せいちょうりつのかくにん",
          "romaji": "seichouritsu no kakunin",
          "english": "Pronounce: Confirming Growth rate",
          "audioText": "せいちょうりつのかくにん",
          "targetSpeech": "成長率の確認",
          "options": [
            "Confirming Growth rate",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "成長率の確認"
        },
        {
          "id": "u20_l8_6",
          "type": "dictate",
          "prompt": "成長率の確認をお願いします",
          "furigana": "せいちょうりつのかくにんをおねがいします",
          "romaji": "seichouritsu no kakunin o onegaishimasu.",
          "english": "Confirming Growth rate, please.",
          "audioText": "成長率の確認をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "お願いします",
            "を",
            "成長率の確認"
          ],
          "dictateSolution": [
            "成長率の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "成長率の確認をお願いします"
        },
        {
          "id": "u20_l8_7",
          "type": "match",
          "prompt": "政策の確認・市場の確認・成長率の確認・消費の確認",
          "furigana": "せいさくのかくにん・しじょうのかくにん・せいちょうりつのかくにん・しょうひのかくにん",
          "romaji": "seisaku no kakunin, shijou no kakunin, seichouritsu no kakunin, shouhi no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せいさくのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "政策の確認",
              "right": "Confirming Government policy",
              "furigana": "せいさくのかくにん",
              "romaji": "seisaku no kakunin"
            },
            {
              "id": "p_1",
              "left": "市場の確認",
              "right": "Confirming Financial market",
              "furigana": "しじょうのかくにん",
              "romaji": "shijou no kakunin"
            },
            {
              "id": "p_2",
              "left": "成長率の確認",
              "right": "Confirming Growth rate",
              "furigana": "せいちょうりつのかくにん",
              "romaji": "seichouritsu no kakunin"
            },
            {
              "id": "p_3",
              "left": "消費の確認",
              "right": "Confirming Consumption / spending",
              "furigana": "しょうひのかくにん",
              "romaji": "shouhi no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l8_8",
          "type": "dialogue",
          "prompt": "次は円高に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は円高に進みましょう。",
          "furigana": "次は円高に進みましょう。",
          "romaji": "Tsugi wa endaka ni susumimashou.",
          "english": "Speaker: Let's proceed to Strong yen appreciation next.",
          "audioText": "次は円高に進みましょう。",
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
      "id": "u20_l9",
      "unitId": "unit_20",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Consumption / spending & Confirming Investment",
      "titleJp": "消費の確認・投資の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "消費の確認",
        "投資の確認",
        "企業の確認"
      ],
      "kanjiKeywords": [
        "消",
        "費",
        "確",
        "認",
        "投",
        "資",
        "確",
        "認",
        "企",
        "業",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u20_l9_1",
          "type": "listen",
          "prompt": "消費の確認",
          "furigana": "しょうひのかくにん",
          "romaji": "shouhi no kakunin",
          "english": "Confirming Consumption / spending",
          "audioText": "しょうひのかくにん",
          "options": [
            "Confirming Strong yen appreciation",
            "Stock price",
            "Impact / consequence",
            "Confirming Consumption / spending"
          ],
          "correctAnswer": "Confirming Consumption / spending"
        },
        {
          "id": "u20_l9_2",
          "type": "spell",
          "prompt": "消費の確認",
          "furigana": "しょうひのかくにん",
          "romaji": "shouhi no kakunin",
          "english": "Build 'Confirming Consumption / spending'",
          "audioText": "しょうひのかくにん",
          "tileBank": [
            "し",
            "く",
            "に",
            "ょ",
            "の",
            "か",
            "ひ",
            "う"
          ],
          "correctAnswer": "しょうひのかくにん"
        },
        {
          "id": "u20_l9_3",
          "type": "cloze",
          "prompt": "私は投資の確認がすきです",
          "furigana": "わたしはとうしのかくにんがすきです",
          "romaji": "Watashi wa toushi no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Investment.",
          "audioText": "投資の確認",
          "clozeSentence": "これは投資の確認 {{BLANK}} す。",
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
          "id": "u20_l9_4",
          "type": "scramble",
          "prompt": "これは投資の確認です",
          "furigana": "これはとうしのかくにんです",
          "romaji": "Kore wa toushi no kakunin desu.",
          "english": "This is Confirming Investment.",
          "audioText": "これは投資の確認です",
          "scrambleTokens": [
            "です",
            "投資の確認",
            "ではありません",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "投資の確認",
            "です"
          ],
          "correctAnswer": "これは投資の確認です"
        },
        {
          "id": "u20_l9_5",
          "type": "speak",
          "prompt": "企業の確認",
          "furigana": "きぎょうのかくにん",
          "romaji": "kigyou no kakunin",
          "english": "Pronounce: Confirming Enterprise / corporation",
          "audioText": "きぎょうのかくにん",
          "targetSpeech": "企業の確認",
          "options": [
            "Confirming Enterprise / corporation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "企業の確認"
        },
        {
          "id": "u20_l9_6",
          "type": "dictate",
          "prompt": "企業の確認をお願いします",
          "furigana": "きぎょうのかくにんをおねがいします",
          "romaji": "kigyou no kakunin o onegaishimasu.",
          "english": "Confirming Enterprise / corporation, please.",
          "audioText": "企業の確認をお願いします",
          "dictateTokens": [
            "企業の確認",
            "ありがとう",
            "お願いします",
            "を",
            "です"
          ],
          "dictateSolution": [
            "企業の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "企業の確認をお願いします"
        },
        {
          "id": "u20_l9_7",
          "type": "match",
          "prompt": "消費の確認・投資の確認・企業の確認・影響の確認",
          "furigana": "しょうひのかくにん・とうしのかくにん・きぎょうのかくにん・えいきょうのかくにん",
          "romaji": "shouhi no kakunin, toushi no kakunin, kigyou no kakunin, eikyou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しょうひのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "消費の確認",
              "right": "Confirming Consumption / spending",
              "furigana": "しょうひのかくにん",
              "romaji": "shouhi no kakunin"
            },
            {
              "id": "p_1",
              "left": "投資の確認",
              "right": "Confirming Investment",
              "furigana": "とうしのかくにん",
              "romaji": "toushi no kakunin"
            },
            {
              "id": "p_2",
              "left": "企業の確認",
              "right": "Confirming Enterprise / corporation",
              "furigana": "きぎょうのかくにん",
              "romaji": "kigyou no kakunin"
            },
            {
              "id": "p_3",
              "left": "影響の確認",
              "right": "Confirming Impact / consequence",
              "furigana": "えいきょうのかくにん",
              "romaji": "eikyou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l9_8",
          "type": "dialogue",
          "prompt": "景気について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "景気について教えていただけますか？",
          "furigana": "景気について教えていただけますか？",
          "romaji": "keiki ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Economic climate?",
          "audioText": "景気について教えていただけますか？",
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
      "id": "u20_l10",
      "unitId": "unit_20",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Impact / consequence & Confirming Concern / anxiety",
      "titleJp": "影響の確認・懸念の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "影響の確認",
        "懸念の確認",
        "見通しの確認"
      ],
      "kanjiKeywords": [
        "影",
        "響",
        "確",
        "認",
        "懸",
        "念",
        "確",
        "認",
        "見",
        "通",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u20_l10_1",
          "type": "listen",
          "prompt": "影響の確認",
          "furigana": "えいきょうのかくにん",
          "romaji": "eikyou no kakunin",
          "english": "Confirming Impact / consequence",
          "audioText": "えいきょうのかくにん",
          "options": [
            "Confirming Inflation",
            "Confirming Growth rate",
            "Government policy",
            "Confirming Impact / consequence"
          ],
          "correctAnswer": "Confirming Impact / consequence"
        },
        {
          "id": "u20_l10_2",
          "type": "spell",
          "prompt": "影響の確認",
          "furigana": "えいきょうのかくにん",
          "romaji": "eikyou no kakunin",
          "english": "Build 'Confirming Impact / consequence'",
          "audioText": "えいきょうのかくにん",
          "tileBank": [
            "う",
            "の",
            "き",
            "ょ",
            "え",
            "く",
            "い",
            "か"
          ],
          "correctAnswer": "えいきょうのかくにん"
        },
        {
          "id": "u20_l10_3",
          "type": "cloze",
          "prompt": "私は懸念の確認がすきです",
          "furigana": "わたしはけねんのかくにんがすきです",
          "romaji": "Watashi wa kenen no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Concern / anxiety.",
          "audioText": "懸念の確認",
          "clozeSentence": "これは懸念の確認 {{BLANK}} す。",
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
          "id": "u20_l10_4",
          "type": "scramble",
          "prompt": "これは懸念の確認です",
          "furigana": "これはけねんのかくにんです",
          "romaji": "Kore wa kenen no kakunin desu.",
          "english": "This is Confirming Concern / anxiety.",
          "audioText": "これは懸念の確認です",
          "scrambleTokens": [
            "懸念の確認",
            "ではありません",
            "これは",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "懸念の確認",
            "です"
          ],
          "correctAnswer": "これは懸念の確認です"
        },
        {
          "id": "u20_l10_5",
          "type": "speak",
          "prompt": "見通しの確認",
          "furigana": "みとおしのかくにん",
          "romaji": "mitooshi no kakunin",
          "english": "Pronounce: Confirming Outlook / prospect",
          "audioText": "みとおしのかくにん",
          "targetSpeech": "見通しの確認",
          "options": [
            "Confirming Outlook / prospect",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "見通しの確認"
        },
        {
          "id": "u20_l10_6",
          "type": "dictate",
          "prompt": "見通しの確認をお願いします",
          "furigana": "みとおしのかくにんをおねがいします",
          "romaji": "mitooshi no kakunin o onegaishimasu.",
          "english": "Confirming Outlook / prospect, please.",
          "audioText": "見通しの確認をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "お願いします",
            "を",
            "見通しの確認"
          ],
          "dictateSolution": [
            "見通しの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "見通しの確認をお願いします"
        },
        {
          "id": "u20_l10_7",
          "type": "match",
          "prompt": "影響の確認・懸念の確認・見通しの確認・景気の確認",
          "furigana": "えいきょうのかくにん・けねんのかくにん・みとおしのかくにん・けいきのかくにん",
          "romaji": "eikyou no kakunin, kenen no kakunin, mitooshi no kakunin, keiki no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えいきょうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "影響の確認",
              "right": "Confirming Impact / consequence",
              "furigana": "えいきょうのかくにん",
              "romaji": "eikyou no kakunin"
            },
            {
              "id": "p_1",
              "left": "懸念の確認",
              "right": "Confirming Concern / anxiety",
              "furigana": "けねんのかくにん",
              "romaji": "kenen no kakunin"
            },
            {
              "id": "p_2",
              "left": "見通しの確認",
              "right": "Confirming Outlook / prospect",
              "furigana": "みとおしのかくにん",
              "romaji": "mitooshi no kakunin"
            },
            {
              "id": "p_3",
              "left": "景気の確認",
              "right": "Confirming Economic climate",
              "furigana": "けいきのかくにん",
              "romaji": "keiki no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l10_8",
          "type": "dialogue",
          "prompt": "株価の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "株価の準備はできていますか？",
          "furigana": "株価の準備はできていますか？",
          "romaji": "kabuka no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Stock price ready?",
          "audioText": "株価の準備はできていますか？",
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
      "id": "u20_l11",
      "unitId": "unit_20",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Economic climate & Confirming Stock price",
      "titleJp": "景気の確認・株価の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "景気の確認",
        "株価の確認",
        "円安の確認"
      ],
      "kanjiKeywords": [
        "景",
        "気",
        "確",
        "認",
        "株",
        "価",
        "確",
        "認",
        "円",
        "安",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u20_l11_1",
          "type": "listen",
          "prompt": "景気の確認",
          "furigana": "けいきのかくにん",
          "romaji": "keiki no kakunin",
          "english": "Confirming Economic climate",
          "audioText": "けいきのかくにん",
          "options": [
            "Confirming Economic climate",
            "Confirming Government policy",
            "News report / journalism",
            "Strong yen appreciation"
          ],
          "correctAnswer": "Confirming Economic climate"
        },
        {
          "id": "u20_l11_2",
          "type": "spell",
          "prompt": "景気の確認",
          "furigana": "けいきのかくにん",
          "romaji": "keiki no kakunin",
          "english": "Build 'Confirming Economic climate'",
          "audioText": "けいきのかくにん",
          "tileBank": [
            "の",
            "ん",
            "に",
            "き",
            "か",
            "く",
            "い",
            "け"
          ],
          "correctAnswer": "けいきのかくにん"
        },
        {
          "id": "u20_l11_3",
          "type": "cloze",
          "prompt": "私は株価の確認がすきです",
          "furigana": "わたしはかぶかのかくにんがすきです",
          "romaji": "Watashi wa kabuka no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Stock price.",
          "audioText": "株価の確認",
          "clozeSentence": "これは株価の確認 {{BLANK}} す。",
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
          "id": "u20_l11_4",
          "type": "scramble",
          "prompt": "これは株価の確認です",
          "furigana": "これはかぶかのかくにんです",
          "romaji": "Kore wa kabuka no kakunin desu.",
          "english": "This is Confirming Stock price.",
          "audioText": "これは株価の確認です",
          "scrambleTokens": [
            "それ",
            "株価の確認",
            "これは",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "株価の確認",
            "です"
          ],
          "correctAnswer": "これは株価の確認です"
        },
        {
          "id": "u20_l11_5",
          "type": "speak",
          "prompt": "円安の確認",
          "furigana": "えんやすのかくにん",
          "romaji": "enyasu no kakunin",
          "english": "Pronounce: Confirming Weak yen depreciation",
          "audioText": "えんやすのかくにん",
          "targetSpeech": "円安の確認",
          "options": [
            "Confirming Weak yen depreciation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "円安の確認"
        },
        {
          "id": "u20_l11_6",
          "type": "dictate",
          "prompt": "円安の確認をお願いします",
          "furigana": "えんやすのかくにんをおねがいします",
          "romaji": "enyasu no kakunin o onegaishimasu.",
          "english": "Confirming Weak yen depreciation, please.",
          "audioText": "円安の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "円安の確認",
            "を",
            "です"
          ],
          "dictateSolution": [
            "円安の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "円安の確認をお願いします"
        },
        {
          "id": "u20_l11_7",
          "type": "match",
          "prompt": "景気の確認・株価の確認・円安の確認・円高の確認",
          "furigana": "けいきのかくにん・かぶかのかくにん・えんやすのかくにん・えんだかのかくにん",
          "romaji": "keiki no kakunin, kabuka no kakunin, enyasu no kakunin, endaka no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "けいきのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "景気の確認",
              "right": "Confirming Economic climate",
              "furigana": "けいきのかくにん",
              "romaji": "keiki no kakunin"
            },
            {
              "id": "p_1",
              "left": "株価の確認",
              "right": "Confirming Stock price",
              "furigana": "かぶかのかくにん",
              "romaji": "kabuka no kakunin"
            },
            {
              "id": "p_2",
              "left": "円安の確認",
              "right": "Confirming Weak yen depreciation",
              "furigana": "えんやすのかくにん",
              "romaji": "enyasu no kakunin"
            },
            {
              "id": "p_3",
              "left": "円高の確認",
              "right": "Confirming Strong yen appreciation",
              "furigana": "えんだかのかくにん",
              "romaji": "endaka no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l11_8",
          "type": "dialogue",
          "prompt": "円安についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "円安についてどう思われますか？",
          "furigana": "円安についてどう思われますか？",
          "romaji": "enyasu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Weak yen depreciation?",
          "audioText": "円安についてどう思われますか？",
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
      "id": "u20_l12",
      "unitId": "unit_20",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Strong yen appreciation & Confirming Inflation",
      "titleJp": "円高の確認・インフレの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "円高の確認",
        "インフレの確認",
        "報道の確認"
      ],
      "kanjiKeywords": [
        "円",
        "高",
        "確",
        "認",
        "確",
        "認",
        "報",
        "道",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u20_l12_1",
          "type": "listen",
          "prompt": "円高の確認",
          "furigana": "えんだかのかくにん",
          "romaji": "endaka no kakunin",
          "english": "Confirming Strong yen appreciation",
          "audioText": "えんだかのかくにん",
          "options": [
            "Investment",
            "Consumption / spending",
            "Confirming Impact / consequence",
            "Confirming Strong yen appreciation"
          ],
          "correctAnswer": "Confirming Strong yen appreciation"
        },
        {
          "id": "u20_l12_2",
          "type": "spell",
          "prompt": "円高の確認",
          "furigana": "えんだかのかくにん",
          "romaji": "endaka no kakunin",
          "english": "Build 'Confirming Strong yen appreciation'",
          "audioText": "えんだかのかくにん",
          "tileBank": [
            "か",
            "か",
            "だ",
            "く",
            "ん",
            "の",
            "え",
            "に"
          ],
          "correctAnswer": "えんだかのかくにん"
        },
        {
          "id": "u20_l12_3",
          "type": "cloze",
          "prompt": "私はインフレの確認がすきです",
          "furigana": "わたしはインフレのかくにんがすきです",
          "romaji": "Watashi wa infure no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Inflation.",
          "audioText": "インフレの確認",
          "clozeSentence": "これはインフレの確認 {{BLANK}} す。",
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
          "id": "u20_l12_4",
          "type": "scramble",
          "prompt": "これはインフレの確認です",
          "furigana": "これはインフレのかくにんです",
          "romaji": "Kore wa infure no kakunin desu.",
          "english": "This is Confirming Inflation.",
          "audioText": "これはインフレの確認です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "これは",
            "インフレの確認",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "インフレの確認",
            "です"
          ],
          "correctAnswer": "これはインフレの確認です"
        },
        {
          "id": "u20_l12_5",
          "type": "speak",
          "prompt": "報道の確認",
          "furigana": "ほうどうのかくにん",
          "romaji": "houdou no kakunin",
          "english": "Pronounce: Confirming News report / journalism",
          "audioText": "ほうどうのかくにん",
          "targetSpeech": "報道の確認",
          "options": [
            "Confirming News report / journalism",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "報道の確認"
        },
        {
          "id": "u20_l12_6",
          "type": "dictate",
          "prompt": "報道の確認をお願いします",
          "furigana": "ほうどうのかくにんをおねがいします",
          "romaji": "houdou no kakunin o onegaishimasu.",
          "english": "Confirming News report / journalism, please.",
          "audioText": "報道の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "報道の確認",
            "です",
            "を"
          ],
          "dictateSolution": [
            "報道の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "報道の確認をお願いします"
        },
        {
          "id": "u20_l12_7",
          "type": "match",
          "prompt": "円高の確認・インフレの確認・報道の確認・景気",
          "furigana": "えんだかのかくにん・インフレのかくにん・ほうどうのかくにん・けいき",
          "romaji": "endaka no kakunin, infure no kakunin, houdou no kakunin, keiki",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えんだかのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "円高の確認",
              "right": "Confirming Strong yen appreciation",
              "furigana": "えんだかのかくにん",
              "romaji": "endaka no kakunin"
            },
            {
              "id": "p_1",
              "left": "インフレの確認",
              "right": "Confirming Inflation",
              "furigana": "インフレのかくにん",
              "romaji": "infure no kakunin"
            },
            {
              "id": "p_2",
              "left": "報道の確認",
              "right": "Confirming News report / journalism",
              "furigana": "ほうどうのかくにん",
              "romaji": "houdou no kakunin"
            },
            {
              "id": "p_3",
              "left": "景気",
              "right": "Economic climate",
              "furigana": "けいき",
              "romaji": "keiki"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l12_8",
          "type": "dialogue",
          "prompt": "次は円高に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は円高に進みましょう。",
          "furigana": "次は円高に進みましょう。",
          "romaji": "Tsugi wa endaka ni susumimashou.",
          "english": "Speaker: Let's proceed to Strong yen appreciation next.",
          "audioText": "次は円高に進みましょう。",
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
      "id": "u20_l13",
      "unitId": "unit_20",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Economic climate & Stock price",
      "titleJp": "景気・株価",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "景気",
        "株価",
        "円安"
      ],
      "kanjiKeywords": [
        "景",
        "気",
        "株",
        "価",
        "円",
        "安"
      ],
      "items": [
        {
          "id": "u20_l13_1",
          "type": "listen",
          "prompt": "景気",
          "furigana": "けいき",
          "romaji": "keiki",
          "english": "Economic climate",
          "audioText": "けいき",
          "options": [
            "Inflation",
            "Economic climate",
            "Confirming Weak yen depreciation",
            "Confirming Investment"
          ],
          "correctAnswer": "Economic climate"
        },
        {
          "id": "u20_l13_2",
          "type": "spell",
          "prompt": "景気",
          "furigana": "けいき",
          "romaji": "keiki",
          "english": "Build 'Economic climate'",
          "audioText": "けいき",
          "tileBank": [
            "よ",
            "な",
            "き",
            "さ",
            "ゆ",
            "け",
            "い",
            "ほ"
          ],
          "correctAnswer": "けいき"
        },
        {
          "id": "u20_l13_3",
          "type": "cloze",
          "prompt": "私は株価がすきです",
          "furigana": "わたしはかぶかがすきです",
          "romaji": "Watashi wa kabuka ga suki desu.",
          "english": "Fill in the blank with the correct particle for Stock price.",
          "audioText": "株価",
          "clozeSentence": "これは株価 {{BLANK}} す。",
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
          "id": "u20_l13_4",
          "type": "scramble",
          "prompt": "これは株価です",
          "furigana": "これはかぶかです",
          "romaji": "Kore wa kabuka desu.",
          "english": "This is Stock price.",
          "audioText": "これは株価です",
          "scrambleTokens": [
            "それ",
            "です",
            "株価",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "株価",
            "です"
          ],
          "correctAnswer": "これは株価です"
        },
        {
          "id": "u20_l13_5",
          "type": "speak",
          "prompt": "円安",
          "furigana": "えんやす",
          "romaji": "enyasu",
          "english": "Pronounce: Weak yen depreciation",
          "audioText": "えんやす",
          "targetSpeech": "円安",
          "options": [
            "Weak yen depreciation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "円安"
        },
        {
          "id": "u20_l13_6",
          "type": "dictate",
          "prompt": "円安をお願いします",
          "furigana": "えんやすをおねがいします",
          "romaji": "enyasu o onegaishimasu.",
          "english": "Weak yen depreciation, please.",
          "audioText": "円安をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "円安",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "円安",
            "を",
            "お願いします"
          ],
          "correctAnswer": "円安をお願いします"
        },
        {
          "id": "u20_l13_7",
          "type": "match",
          "prompt": "景気・株価・円安・円高",
          "furigana": "けいき・かぶか・えんやす・えんだか",
          "romaji": "keiki, kabuka, enyasu, endaka",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "けいき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "景気",
              "right": "Economic climate",
              "furigana": "けいき",
              "romaji": "keiki"
            },
            {
              "id": "p_1",
              "left": "株価",
              "right": "Stock price",
              "furigana": "かぶか",
              "romaji": "kabuka"
            },
            {
              "id": "p_2",
              "left": "円安",
              "right": "Weak yen depreciation",
              "furigana": "えんやす",
              "romaji": "enyasu"
            },
            {
              "id": "p_3",
              "left": "円高",
              "right": "Strong yen appreciation",
              "furigana": "えんだか",
              "romaji": "endaka"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l13_8",
          "type": "dialogue",
          "prompt": "景気について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "景気について教えていただけますか？",
          "furigana": "景気について教えていただけますか？",
          "romaji": "keiki ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Economic climate?",
          "audioText": "景気について教えていただけますか？",
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
      "id": "u20_l14",
      "unitId": "unit_20",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Strong yen appreciation & Inflation",
      "titleJp": "円高・インフレ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "円高",
        "インフレ",
        "報道"
      ],
      "kanjiKeywords": [
        "円",
        "高",
        "報",
        "道"
      ],
      "items": [
        {
          "id": "u20_l14_1",
          "type": "listen",
          "prompt": "円高",
          "furigana": "えんだか",
          "romaji": "endaka",
          "english": "Strong yen appreciation",
          "audioText": "えんだか",
          "options": [
            "Confirming Strong yen appreciation",
            "Confirming Stock price",
            "Strong yen appreciation",
            "Inflation"
          ],
          "correctAnswer": "Strong yen appreciation"
        },
        {
          "id": "u20_l14_2",
          "type": "spell",
          "prompt": "円高",
          "furigana": "えんだか",
          "romaji": "endaka",
          "english": "Build 'Strong yen appreciation'",
          "audioText": "えんだか",
          "tileBank": [
            "み",
            "え",
            "い",
            "か",
            "だ",
            "ん",
            "め",
            "う"
          ],
          "correctAnswer": "えんだか"
        },
        {
          "id": "u20_l14_3",
          "type": "cloze",
          "prompt": "私はインフレがすきです",
          "furigana": "わたしはインフレがすきです",
          "romaji": "Watashi wa infure ga suki desu.",
          "english": "Fill in the blank with the correct particle for Inflation.",
          "audioText": "インフレ",
          "clozeSentence": "これはインフレ {{BLANK}} す。",
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
          "id": "u20_l14_4",
          "type": "scramble",
          "prompt": "これはインフレです",
          "furigana": "これはインフレです",
          "romaji": "Kore wa infure desu.",
          "english": "This is Inflation.",
          "audioText": "これはインフレです",
          "scrambleTokens": [
            "インフレ",
            "です",
            "それ",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "インフレ",
            "です"
          ],
          "correctAnswer": "これはインフレです"
        },
        {
          "id": "u20_l14_5",
          "type": "speak",
          "prompt": "報道",
          "furigana": "ほうどう",
          "romaji": "houdou",
          "english": "Pronounce: News report / journalism",
          "audioText": "ほうどう",
          "targetSpeech": "報道",
          "options": [
            "News report / journalism",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "報道"
        },
        {
          "id": "u20_l14_6",
          "type": "dictate",
          "prompt": "報道をお願いします",
          "furigana": "ほうどうをおねがいします",
          "romaji": "houdou o onegaishimasu.",
          "english": "News report / journalism, please.",
          "audioText": "報道をお願いします",
          "dictateTokens": [
            "お願いします",
            "報道",
            "ありがとう",
            "です",
            "を"
          ],
          "dictateSolution": [
            "報道",
            "を",
            "お願いします"
          ],
          "correctAnswer": "報道をお願いします"
        },
        {
          "id": "u20_l14_7",
          "type": "match",
          "prompt": "円高・インフレ・報道・政策",
          "furigana": "えんだか・インフレ・ほうどう・せいさく",
          "romaji": "endaka, infure, houdou, seisaku",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えんだか",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "円高",
              "right": "Strong yen appreciation",
              "furigana": "えんだか",
              "romaji": "endaka"
            },
            {
              "id": "p_1",
              "left": "インフレ",
              "right": "Inflation",
              "furigana": "インフレ",
              "romaji": "infure"
            },
            {
              "id": "p_2",
              "left": "報道",
              "right": "News report / journalism",
              "furigana": "ほうどう",
              "romaji": "houdou"
            },
            {
              "id": "p_3",
              "left": "政策",
              "right": "Government policy",
              "furigana": "せいさく",
              "romaji": "seisaku"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l14_8",
          "type": "dialogue",
          "prompt": "株価の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "株価の準備はできていますか？",
          "furigana": "株価の準備はできていますか？",
          "romaji": "kabuka no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Stock price ready?",
          "audioText": "株価の準備はできていますか？",
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
      "id": "u20_l15",
      "unitId": "unit_20",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 20 Master Exam",
      "iconType": "test",
      "title": "Unit 20 Master Exam",
      "titleJp": "第20週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "政策",
        "市場",
        "成長率"
      ],
      "kanjiKeywords": [
        "政",
        "策",
        "市",
        "場",
        "成",
        "長",
        "率"
      ],
      "items": [
        {
          "id": "u20_l15_1",
          "type": "listen",
          "prompt": "政策",
          "furigana": "せいさく",
          "romaji": "seisaku",
          "english": "Government policy",
          "audioText": "せいさく",
          "options": [
            "Government policy",
            "Enterprise / corporation",
            "News report / journalism",
            "Outlook / prospect"
          ],
          "correctAnswer": "Government policy"
        },
        {
          "id": "u20_l15_2",
          "type": "spell",
          "prompt": "政策",
          "furigana": "せいさく",
          "romaji": "seisaku",
          "english": "Build 'Government policy'",
          "audioText": "せいさく",
          "tileBank": [
            "こ",
            "ち",
            "く",
            "さ",
            "か",
            "い",
            "も",
            "せ"
          ],
          "correctAnswer": "せいさく"
        },
        {
          "id": "u20_l15_3",
          "type": "cloze",
          "prompt": "私は市場がすきです",
          "furigana": "わたしはしじょうがすきです",
          "romaji": "Watashi wa shijou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Financial market.",
          "audioText": "市場",
          "clozeSentence": "これは市場 {{BLANK}} す。",
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
          "id": "u20_l15_4",
          "type": "scramble",
          "prompt": "これは市場です",
          "furigana": "これはしじょうです",
          "romaji": "Kore wa shijou desu.",
          "english": "This is Financial market.",
          "audioText": "これは市場です",
          "scrambleTokens": [
            "それ",
            "です",
            "ではありません",
            "市場",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "市場",
            "です"
          ],
          "correctAnswer": "これは市場です"
        },
        {
          "id": "u20_l15_5",
          "type": "speak",
          "prompt": "成長率",
          "furigana": "せいちょうりつ",
          "romaji": "seichouritsu",
          "english": "Pronounce: Growth rate",
          "audioText": "せいちょうりつ",
          "targetSpeech": "成長率",
          "options": [
            "Growth rate",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "成長率"
        },
        {
          "id": "u20_l15_6",
          "type": "dictate",
          "prompt": "成長率をお願いします",
          "furigana": "せいちょうりつをおねがいします",
          "romaji": "seichouritsu o onegaishimasu.",
          "english": "Growth rate, please.",
          "audioText": "成長率をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "成長率",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "成長率",
            "を",
            "お願いします"
          ],
          "correctAnswer": "成長率をお願いします"
        },
        {
          "id": "u20_l15_7",
          "type": "match",
          "prompt": "政策・市場・成長率・消費",
          "furigana": "せいさく・しじょう・せいちょうりつ・しょうひ",
          "romaji": "seisaku, shijou, seichouritsu, shouhi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せいさく",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "政策",
              "right": "Government policy",
              "furigana": "せいさく",
              "romaji": "seisaku"
            },
            {
              "id": "p_1",
              "left": "市場",
              "right": "Financial market",
              "furigana": "しじょう",
              "romaji": "shijou"
            },
            {
              "id": "p_2",
              "left": "成長率",
              "right": "Growth rate",
              "furigana": "せいちょうりつ",
              "romaji": "seichouritsu"
            },
            {
              "id": "p_3",
              "left": "消費",
              "right": "Consumption / spending",
              "furigana": "しょうひ",
              "romaji": "shouhi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u20_l15_8",
          "type": "dialogue",
          "prompt": "円安についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "円安についてどう思われますか？",
          "furigana": "円安についてどう思われますか？",
          "romaji": "enyasu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Weak yen depreciation?",
          "audioText": "円安についてどう思われますか？",
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
    "id": "gate_unit_20",
    "unitId": "unit_20",
    "title": "Unit 20 Mastery Checkpoint",
    "titleJp": "第20週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u20_l1_1",
        "type": "listen",
        "prompt": "景気",
        "furigana": "けいき",
        "romaji": "keiki",
        "english": "Economic climate",
        "audioText": "けいき",
        "options": [
          "Confirming News report / journalism",
          "Confirming Strong yen appreciation",
          "Confirming Growth rate",
          "Economic climate"
        ],
        "correctAnswer": "Economic climate"
      },
      {
        "id": "u20_l1_2",
        "type": "spell",
        "prompt": "景気",
        "furigana": "けいき",
        "romaji": "keiki",
        "english": "Build 'Economic climate'",
        "audioText": "けいき",
        "tileBank": [
          "け",
          "き",
          "も",
          "み",
          "る",
          "わ",
          "い",
          "せ"
        ],
        "correctAnswer": "けいき"
      },
      {
        "id": "u20_l3_1",
        "type": "listen",
        "prompt": "政策",
        "furigana": "せいさく",
        "romaji": "seisaku",
        "english": "Government policy",
        "audioText": "せいさく",
        "options": [
          "Confirming Consumption / spending",
          "Government policy",
          "Confirming Strong yen appreciation",
          "Outlook / prospect"
        ],
        "correctAnswer": "Government policy"
      },
      {
        "id": "u20_l3_2",
        "type": "spell",
        "prompt": "政策",
        "furigana": "せいさく",
        "romaji": "seisaku",
        "english": "Build 'Government policy'",
        "audioText": "せいさく",
        "tileBank": [
          "の",
          "い",
          "わ",
          "せ",
          "し",
          "く",
          "ひ",
          "さ"
        ],
        "correctAnswer": "せいさく"
      },
      {
        "id": "u20_l5_1",
        "type": "listen",
        "prompt": "影響",
        "furigana": "えいきょう",
        "romaji": "eikyou",
        "english": "Impact / consequence",
        "audioText": "えいきょう",
        "options": [
          "Confirming Weak yen depreciation",
          "Impact / consequence",
          "Confirming News report / journalism",
          "Investment"
        ],
        "correctAnswer": "Impact / consequence"
      },
      {
        "id": "u20_l5_2",
        "type": "spell",
        "prompt": "影響",
        "furigana": "えいきょう",
        "romaji": "eikyou",
        "english": "Build 'Impact / consequence'",
        "audioText": "えいきょう",
        "tileBank": [
          "き",
          "ほ",
          "ね",
          "ょ",
          "な",
          "う",
          "い",
          "え"
        ],
        "correctAnswer": "えいきょう"
      },
      {
        "id": "u20_l7_1",
        "type": "listen",
        "prompt": "円高の確認",
        "furigana": "えんだかのかくにん",
        "romaji": "endaka no kakunin",
        "english": "Confirming Strong yen appreciation",
        "audioText": "えんだかのかくにん",
        "options": [
          "Confirming Investment",
          "Stock price",
          "Confirming Strong yen appreciation",
          "Confirming Inflation"
        ],
        "correctAnswer": "Confirming Strong yen appreciation"
      },
      {
        "id": "u20_l7_2",
        "type": "spell",
        "prompt": "円高の確認",
        "furigana": "えんだかのかくにん",
        "romaji": "endaka no kakunin",
        "english": "Build 'Confirming Strong yen appreciation'",
        "audioText": "えんだかのかくにん",
        "tileBank": [
          "か",
          "か",
          "だ",
          "く",
          "ん",
          "の",
          "に",
          "え"
        ],
        "correctAnswer": "えんだかのかくにん"
      },
      {
        "id": "u20_l9_1",
        "type": "listen",
        "prompt": "消費の確認",
        "furigana": "しょうひのかくにん",
        "romaji": "shouhi no kakunin",
        "english": "Confirming Consumption / spending",
        "audioText": "しょうひのかくにん",
        "options": [
          "Confirming Strong yen appreciation",
          "Stock price",
          "Impact / consequence",
          "Confirming Consumption / spending"
        ],
        "correctAnswer": "Confirming Consumption / spending"
      },
      {
        "id": "u20_l9_2",
        "type": "spell",
        "prompt": "消費の確認",
        "furigana": "しょうひのかくにん",
        "romaji": "shouhi no kakunin",
        "english": "Build 'Confirming Consumption / spending'",
        "audioText": "しょうひのかくにん",
        "tileBank": [
          "し",
          "く",
          "に",
          "ょ",
          "の",
          "か",
          "ひ",
          "う"
        ],
        "correctAnswer": "しょうひのかくにん"
      },
      {
        "id": "u20_l11_1",
        "type": "listen",
        "prompt": "景気の確認",
        "furigana": "けいきのかくにん",
        "romaji": "keiki no kakunin",
        "english": "Confirming Economic climate",
        "audioText": "けいきのかくにん",
        "options": [
          "Confirming Economic climate",
          "Confirming Government policy",
          "News report / journalism",
          "Strong yen appreciation"
        ],
        "correctAnswer": "Confirming Economic climate"
      },
      {
        "id": "u20_l11_2",
        "type": "spell",
        "prompt": "景気の確認",
        "furigana": "けいきのかくにん",
        "romaji": "keiki no kakunin",
        "english": "Build 'Confirming Economic climate'",
        "audioText": "けいきのかくにん",
        "tileBank": [
          "の",
          "ん",
          "に",
          "き",
          "か",
          "く",
          "い",
          "け"
        ],
        "correctAnswer": "けいきのかくにん"
      }
    ]
  }
};
