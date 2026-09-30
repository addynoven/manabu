import type { DojoUnit } from "../../models/dojo.model";

export const unit16: DojoUnit = {
  "id": "unit_16",
  "unitNumber": 16,
  "title": "Hypotheticals & Conditionals",
  "titleJp": "複雑な条件と仮定",
  "description": "Distinguish to, ba, tara, and nara, express hypothetical regrets (~ba yokatta), and construct conditional advice.",
  "icon": "⚖️",
  "themeColor": "#7C3AED",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u16_l1",
      "unitId": "unit_16",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Hypothesis / assumption & Condition / requirement",
      "titleJp": "仮定・条件",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "仮定",
        "条件",
        "場合"
      ],
      "kanjiKeywords": [
        "仮",
        "定",
        "条",
        "件",
        "場",
        "合"
      ],
      "items": [
        {
          "id": "u16_l1_1",
          "type": "listen",
          "prompt": "仮定",
          "furigana": "かてい",
          "romaji": "katei",
          "english": "Hypothesis / assumption",
          "audioText": "かてい",
          "options": [
            "Proposal / suggestion",
            "Hypothesis / assumption",
            "Condition / requirement",
            "Regret"
          ],
          "correctAnswer": "Hypothesis / assumption"
        },
        {
          "id": "u16_l1_2",
          "type": "spell",
          "prompt": "仮定",
          "furigana": "かてい",
          "romaji": "katei",
          "english": "Build 'Hypothesis / assumption'",
          "audioText": "かてい",
          "tileBank": [
            "き",
            "い",
            "せ",
            "む",
            "そ",
            "お",
            "て",
            "か"
          ],
          "correctAnswer": "かてい"
        },
        {
          "id": "u16_l1_3",
          "type": "cloze",
          "prompt": "私は条件がすきです",
          "furigana": "わたしはじょうけんがすきです",
          "romaji": "Watashi wa jouken ga suki desu.",
          "english": "Fill in the blank with the correct particle for Condition / requirement.",
          "audioText": "条件",
          "clozeSentence": "これは条件 {{BLANK}} す。",
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
          "id": "u16_l1_4",
          "type": "scramble",
          "prompt": "これは条件です",
          "furigana": "これはじょうけんです",
          "romaji": "Kore wa jouken desu.",
          "english": "This is Condition / requirement.",
          "audioText": "これは条件です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "条件",
            "です",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "条件",
            "です"
          ],
          "correctAnswer": "これは条件です"
        },
        {
          "id": "u16_l1_5",
          "type": "speak",
          "prompt": "場合",
          "furigana": "ばあい",
          "romaji": "baai",
          "english": "Pronounce: Case / scenario",
          "audioText": "ばあい",
          "targetSpeech": "場合",
          "options": [
            "Case / scenario",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "場合"
        },
        {
          "id": "u16_l1_6",
          "type": "dictate",
          "prompt": "場合をお願いします",
          "furigana": "ばあいをおねがいします",
          "romaji": "baai o onegaishimasu.",
          "english": "Case / scenario, please.",
          "audioText": "場合をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "ありがとう",
            "場合",
            "お願いします"
          ],
          "dictateSolution": [
            "場合",
            "を",
            "お願いします"
          ],
          "correctAnswer": "場合をお願いします"
        },
        {
          "id": "u16_l1_7",
          "type": "match",
          "prompt": "仮定・条件・場合・もし",
          "furigana": "かてい・じょうけん・ばあい・もし",
          "romaji": "katei, jouken, baai, moshi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かてい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "仮定",
              "right": "Hypothesis / assumption",
              "furigana": "かてい",
              "romaji": "katei"
            },
            {
              "id": "p_1",
              "left": "条件",
              "right": "Condition / requirement",
              "furigana": "じょうけん",
              "romaji": "jouken"
            },
            {
              "id": "p_2",
              "left": "場合",
              "right": "Case / scenario",
              "furigana": "ばあい",
              "romaji": "baai"
            },
            {
              "id": "p_3",
              "left": "もし",
              "right": "If / supposing that",
              "furigana": "もし",
              "romaji": "moshi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l1_8",
          "type": "dialogue",
          "prompt": "仮定について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "仮定について教えていただけますか？",
          "furigana": "仮定について教えていただけますか？",
          "romaji": "katei ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hypothesis / assumption?",
          "audioText": "仮定について教えていただけますか？",
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
      "id": "u16_l2",
      "unitId": "unit_16",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "If / supposing that & Even if / supposing",
      "titleJp": "もし・たとえ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "もし",
        "たとえ",
        "後悔"
      ],
      "kanjiKeywords": [
        "後",
        "悔"
      ],
      "items": [
        {
          "id": "u16_l2_1",
          "type": "listen",
          "prompt": "もし",
          "furigana": "もし",
          "romaji": "moshi",
          "english": "If / supposing that",
          "audioText": "もし",
          "options": [
            "Confirming Influence / effect",
            "Confirming Response / dealing with",
            "Regret",
            "If / supposing that"
          ],
          "correctAnswer": "If / supposing that"
        },
        {
          "id": "u16_l2_2",
          "type": "spell",
          "prompt": "もし",
          "furigana": "もし",
          "romaji": "moshi",
          "english": "Build 'If / supposing that'",
          "audioText": "もし",
          "tileBank": [
            "れ",
            "ひ",
            "し",
            "る",
            "こ",
            "て",
            "ら",
            "も"
          ],
          "correctAnswer": "もし"
        },
        {
          "id": "u16_l2_3",
          "type": "cloze",
          "prompt": "私はたとえがすきです",
          "furigana": "わたしはたとえがすきです",
          "romaji": "Watashi wa tatoe ga suki desu.",
          "english": "Fill in the blank with the correct particle for Even if / supposing.",
          "audioText": "たとえ",
          "clozeSentence": "これはたとえ {{BLANK}} す。",
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
          "id": "u16_l2_4",
          "type": "scramble",
          "prompt": "これはたとえです",
          "furigana": "これはたとえです",
          "romaji": "Kore wa tatoe desu.",
          "english": "This is Even if / supposing.",
          "audioText": "これはたとえです",
          "scrambleTokens": [
            "です",
            "たとえ",
            "それ",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "たとえ",
            "です"
          ],
          "correctAnswer": "これはたとえです"
        },
        {
          "id": "u16_l2_5",
          "type": "speak",
          "prompt": "後悔",
          "furigana": "こうかい",
          "romaji": "koukai",
          "english": "Pronounce: Regret",
          "audioText": "こうかい",
          "targetSpeech": "後悔",
          "options": [
            "Regret",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "後悔"
        },
        {
          "id": "u16_l2_6",
          "type": "dictate",
          "prompt": "後悔をお願いします",
          "furigana": "こうかいをおねがいします",
          "romaji": "koukai o onegaishimasu.",
          "english": "Regret, please.",
          "audioText": "後悔をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "を",
            "後悔",
            "ありがとう"
          ],
          "dictateSolution": [
            "後悔",
            "を",
            "お願いします"
          ],
          "correctAnswer": "後悔をお願いします"
        },
        {
          "id": "u16_l2_7",
          "type": "match",
          "prompt": "もし・たとえ・後悔・改善",
          "furigana": "もし・たとえ・こうかい・かいぜん",
          "romaji": "moshi, tatoe, koukai, kaizen",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "もし",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "もし",
              "right": "If / supposing that",
              "furigana": "もし",
              "romaji": "moshi"
            },
            {
              "id": "p_1",
              "left": "たとえ",
              "right": "Even if / supposing",
              "furigana": "たとえ",
              "romaji": "tatoe"
            },
            {
              "id": "p_2",
              "left": "後悔",
              "right": "Regret",
              "furigana": "こうかい",
              "romaji": "koukai"
            },
            {
              "id": "p_3",
              "left": "改善",
              "right": "Improvement / Kaizen",
              "furigana": "かいぜん",
              "romaji": "kaizen"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l2_8",
          "type": "dialogue",
          "prompt": "条件の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "条件の準備はできていますか？",
          "furigana": "条件の準備はできていますか？",
          "romaji": "jouken no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Condition / requirement ready?",
          "audioText": "条件の準備はできていますか？",
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
      "id": "u16_l3",
      "unitId": "unit_16",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Improvement / Kaizen & Proposal / suggestion",
      "titleJp": "改善・提案",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "改善",
        "提案",
        "可能性"
      ],
      "kanjiKeywords": [
        "改",
        "善",
        "提",
        "案",
        "可",
        "能",
        "性"
      ],
      "items": [
        {
          "id": "u16_l3_1",
          "type": "listen",
          "prompt": "改善",
          "furigana": "かいぜん",
          "romaji": "kaizen",
          "english": "Improvement / Kaizen",
          "audioText": "かいぜん",
          "options": [
            "Improvement / Kaizen",
            "Proposal / suggestion",
            "Case / scenario",
            "Confirming Proposal / suggestion"
          ],
          "correctAnswer": "Improvement / Kaizen"
        },
        {
          "id": "u16_l3_2",
          "type": "spell",
          "prompt": "改善",
          "furigana": "かいぜん",
          "romaji": "kaizen",
          "english": "Build 'Improvement / Kaizen'",
          "audioText": "かいぜん",
          "tileBank": [
            "い",
            "け",
            "こ",
            "ぜ",
            "か",
            "ん",
            "う",
            "お"
          ],
          "correctAnswer": "かいぜん"
        },
        {
          "id": "u16_l3_3",
          "type": "cloze",
          "prompt": "私は提案がすきです",
          "furigana": "わたしはていあんがすきです",
          "romaji": "Watashi wa teian ga suki desu.",
          "english": "Fill in the blank with the correct particle for Proposal / suggestion.",
          "audioText": "提案",
          "clozeSentence": "これは提案 {{BLANK}} す。",
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
          "id": "u16_l3_4",
          "type": "scramble",
          "prompt": "これは提案です",
          "furigana": "これはていあんです",
          "romaji": "Kore wa teian desu.",
          "english": "This is Proposal / suggestion.",
          "audioText": "これは提案です",
          "scrambleTokens": [
            "それ",
            "です",
            "これは",
            "ではありません",
            "提案"
          ],
          "scrambleSolution": [
            "これは",
            "提案",
            "です"
          ],
          "correctAnswer": "これは提案です"
        },
        {
          "id": "u16_l3_5",
          "type": "speak",
          "prompt": "可能性",
          "furigana": "かのうせい",
          "romaji": "kanousei",
          "english": "Pronounce: Possibility / potential",
          "audioText": "かのうせい",
          "targetSpeech": "可能性",
          "options": [
            "Possibility / potential",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "可能性"
        },
        {
          "id": "u16_l3_6",
          "type": "dictate",
          "prompt": "可能性をお願いします",
          "furigana": "かのうせいをおねがいします",
          "romaji": "kanousei o onegaishimasu.",
          "english": "Possibility / potential, please.",
          "audioText": "可能性をお願いします",
          "dictateTokens": [
            "ありがとう",
            "可能性",
            "です",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "可能性",
            "を",
            "お願いします"
          ],
          "correctAnswer": "可能性をお願いします"
        },
        {
          "id": "u16_l3_7",
          "type": "match",
          "prompt": "改善・提案・可能性・選択肢",
          "furigana": "かいぜん・ていあん・かのうせい・せんたくし",
          "romaji": "kaizen, teian, kanousei, sentakushi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かいぜん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "改善",
              "right": "Improvement / Kaizen",
              "furigana": "かいぜん",
              "romaji": "kaizen"
            },
            {
              "id": "p_1",
              "left": "提案",
              "right": "Proposal / suggestion",
              "furigana": "ていあん",
              "romaji": "teian"
            },
            {
              "id": "p_2",
              "left": "可能性",
              "right": "Possibility / potential",
              "furigana": "かのうせい",
              "romaji": "kanousei"
            },
            {
              "id": "p_3",
              "left": "選択肢",
              "right": "Option / choice",
              "furigana": "せんたくし",
              "romaji": "sentakushi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l3_8",
          "type": "dialogue",
          "prompt": "場合についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "場合についてどう思われますか？",
          "furigana": "場合についてどう思われますか？",
          "romaji": "baai ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Case / scenario?",
          "audioText": "場合についてどう思われますか？",
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
      "id": "u16_l4",
      "unitId": "unit_16",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Option / choice & Judgement / decision",
      "titleJp": "選択肢・判断",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "選択肢",
        "判断",
        "影響"
      ],
      "kanjiKeywords": [
        "選",
        "択",
        "肢",
        "判",
        "断",
        "影",
        "響"
      ],
      "items": [
        {
          "id": "u16_l4_1",
          "type": "listen",
          "prompt": "選択肢",
          "furigana": "せんたくし",
          "romaji": "sentakushi",
          "english": "Option / choice",
          "audioText": "せんたくし",
          "options": [
            "Option / choice",
            "Influence / effect",
            "Case / scenario",
            "Possibility / potential"
          ],
          "correctAnswer": "Option / choice"
        },
        {
          "id": "u16_l4_2",
          "type": "spell",
          "prompt": "選択肢",
          "furigana": "せんたくし",
          "romaji": "sentakushi",
          "english": "Build 'Option / choice'",
          "audioText": "せんたくし",
          "tileBank": [
            "ん",
            "し",
            "り",
            "あ",
            "せ",
            "た",
            "く",
            "も"
          ],
          "correctAnswer": "せんたくし"
        },
        {
          "id": "u16_l4_3",
          "type": "cloze",
          "prompt": "私は判断がすきです",
          "furigana": "わたしははんだんがすきです",
          "romaji": "Watashi wa handan ga suki desu.",
          "english": "Fill in the blank with the correct particle for Judgement / decision.",
          "audioText": "判断",
          "clozeSentence": "これは判断 {{BLANK}} す。",
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
          "id": "u16_l4_4",
          "type": "scramble",
          "prompt": "これは判断です",
          "furigana": "これははんだんです",
          "romaji": "Kore wa handan desu.",
          "english": "This is Judgement / decision.",
          "audioText": "これは判断です",
          "scrambleTokens": [
            "判断",
            "これは",
            "です",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "判断",
            "です"
          ],
          "correctAnswer": "これは判断です"
        },
        {
          "id": "u16_l4_5",
          "type": "speak",
          "prompt": "影響",
          "furigana": "えいきょう",
          "romaji": "eikyou",
          "english": "Pronounce: Influence / effect",
          "audioText": "えいきょう",
          "targetSpeech": "影響",
          "options": [
            "Influence / effect",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "影響"
        },
        {
          "id": "u16_l4_6",
          "type": "dictate",
          "prompt": "影響をお願いします",
          "furigana": "えいきょうをおねがいします",
          "romaji": "eikyou o onegaishimasu.",
          "english": "Influence / effect, please.",
          "audioText": "影響をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "ありがとう",
            "です",
            "影響"
          ],
          "dictateSolution": [
            "影響",
            "を",
            "お願いします"
          ],
          "correctAnswer": "影響をお願いします"
        },
        {
          "id": "u16_l4_7",
          "type": "match",
          "prompt": "選択肢・判断・影響・万一",
          "furigana": "せんたくし・はんだん・えいきょう・まんいち",
          "romaji": "sentakushi, handan, eikyou, man-ichi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せんたくし",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "選択肢",
              "right": "Option / choice",
              "furigana": "せんたくし",
              "romaji": "sentakushi"
            },
            {
              "id": "p_1",
              "left": "判断",
              "right": "Judgement / decision",
              "furigana": "はんだん",
              "romaji": "handan"
            },
            {
              "id": "p_2",
              "left": "影響",
              "right": "Influence / effect",
              "furigana": "えいきょう",
              "romaji": "eikyou"
            },
            {
              "id": "p_3",
              "left": "万一",
              "right": "In the unlikely event",
              "furigana": "まんいち",
              "romaji": "man-ichi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l4_8",
          "type": "dialogue",
          "prompt": "次はもしに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次はもしに進みましょう。",
          "furigana": "次はもしに進みましょう。",
          "romaji": "Tsugi wa moshi ni susumimashou.",
          "english": "Speaker: Let's proceed to If / supposing that next.",
          "audioText": "次はもしに進みましょう。",
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
      "id": "u16_l5",
      "unitId": "unit_16",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "In the unlikely event & Prediction / forecast",
      "titleJp": "万一・予測",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "万一",
        "予測",
        "対応"
      ],
      "kanjiKeywords": [
        "万",
        "一",
        "予",
        "測",
        "対",
        "応"
      ],
      "items": [
        {
          "id": "u16_l5_1",
          "type": "listen",
          "prompt": "万一",
          "furigana": "まんいち",
          "romaji": "man-ichi",
          "english": "In the unlikely event",
          "audioText": "まんいち",
          "options": [
            "Confirming Hypothesis / assumption",
            "Influence / effect",
            "In the unlikely event",
            "Confirming Case / scenario"
          ],
          "correctAnswer": "In the unlikely event"
        },
        {
          "id": "u16_l5_2",
          "type": "spell",
          "prompt": "万一",
          "furigana": "まんいち",
          "romaji": "man-ichi",
          "english": "Build 'In the unlikely event'",
          "audioText": "まんいち",
          "tileBank": [
            "ぬ",
            "ん",
            "ち",
            "え",
            "い",
            "み",
            "も",
            "ま"
          ],
          "correctAnswer": "まんいち"
        },
        {
          "id": "u16_l5_3",
          "type": "cloze",
          "prompt": "私は予測がすきです",
          "furigana": "わたしはよそくがすきです",
          "romaji": "Watashi wa yosoku ga suki desu.",
          "english": "Fill in the blank with the correct particle for Prediction / forecast.",
          "audioText": "予測",
          "clozeSentence": "これは予測 {{BLANK}} す。",
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
          "id": "u16_l5_4",
          "type": "scramble",
          "prompt": "これは予測です",
          "furigana": "これはよそくです",
          "romaji": "Kore wa yosoku desu.",
          "english": "This is Prediction / forecast.",
          "audioText": "これは予測です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "予測",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "予測",
            "です"
          ],
          "correctAnswer": "これは予測です"
        },
        {
          "id": "u16_l5_5",
          "type": "speak",
          "prompt": "対応",
          "furigana": "たいおう",
          "romaji": "taiou",
          "english": "Pronounce: Response / dealing with",
          "audioText": "たいおう",
          "targetSpeech": "対応",
          "options": [
            "Response / dealing with",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "対応"
        },
        {
          "id": "u16_l5_6",
          "type": "dictate",
          "prompt": "対応をお願いします",
          "furigana": "たいおうをおねがいします",
          "romaji": "taiou o onegaishimasu.",
          "english": "Response / dealing with, please.",
          "audioText": "対応をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "ありがとう",
            "お願いします",
            "対応"
          ],
          "dictateSolution": [
            "対応",
            "を",
            "お願いします"
          ],
          "correctAnswer": "対応をお願いします"
        },
        {
          "id": "u16_l5_7",
          "type": "match",
          "prompt": "万一・予測・対応・仮定の確認",
          "furigana": "まんいち・よそく・たいおう・かていのかくにん",
          "romaji": "man-ichi, yosoku, taiou, katei no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "まんいち",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "万一",
              "right": "In the unlikely event",
              "furigana": "まんいち",
              "romaji": "man-ichi"
            },
            {
              "id": "p_1",
              "left": "予測",
              "right": "Prediction / forecast",
              "furigana": "よそく",
              "romaji": "yosoku"
            },
            {
              "id": "p_2",
              "left": "対応",
              "right": "Response / dealing with",
              "furigana": "たいおう",
              "romaji": "taiou"
            },
            {
              "id": "p_3",
              "left": "仮定の確認",
              "right": "Confirming Hypothesis / assumption",
              "furigana": "かていのかくにん",
              "romaji": "katei no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l5_8",
          "type": "dialogue",
          "prompt": "仮定について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "仮定について教えていただけますか？",
          "furigana": "仮定について教えていただけますか？",
          "romaji": "katei ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hypothesis / assumption?",
          "audioText": "仮定について教えていただけますか？",
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
      "id": "u16_l6",
      "unitId": "unit_16",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Hypothesis / assumption & Confirming Condition / requirement",
      "titleJp": "仮定の確認・条件の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "仮定の確認",
        "条件の確認",
        "場合の確認"
      ],
      "kanjiKeywords": [
        "仮",
        "定",
        "確",
        "認",
        "条",
        "件",
        "確",
        "認",
        "場",
        "合",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u16_l6_1",
          "type": "listen",
          "prompt": "仮定の確認",
          "furigana": "かていのかくにん",
          "romaji": "katei no kakunin",
          "english": "Confirming Hypothesis / assumption",
          "audioText": "かていのかくにん",
          "options": [
            "Confirming If / supposing that",
            "Confirming Hypothesis / assumption",
            "Confirming In the unlikely event",
            "Confirming Judgement / decision"
          ],
          "correctAnswer": "Confirming Hypothesis / assumption"
        },
        {
          "id": "u16_l6_2",
          "type": "spell",
          "prompt": "仮定の確認",
          "furigana": "かていのかくにん",
          "romaji": "katei no kakunin",
          "english": "Build 'Confirming Hypothesis / assumption'",
          "audioText": "かていのかくにん",
          "tileBank": [
            "ん",
            "い",
            "の",
            "く",
            "か",
            "て",
            "か",
            "に"
          ],
          "correctAnswer": "かていのかくにん"
        },
        {
          "id": "u16_l6_3",
          "type": "cloze",
          "prompt": "私は条件の確認がすきです",
          "furigana": "わたしはじょうけんのかくにんがすきです",
          "romaji": "Watashi wa jouken no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Condition / requirement.",
          "audioText": "条件の確認",
          "clozeSentence": "これは条件の確認 {{BLANK}} す。",
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
          "id": "u16_l6_4",
          "type": "scramble",
          "prompt": "これは条件の確認です",
          "furigana": "これはじょうけんのかくにんです",
          "romaji": "Kore wa jouken no kakunin desu.",
          "english": "This is Confirming Condition / requirement.",
          "audioText": "これは条件の確認です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "条件の確認",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "条件の確認",
            "です"
          ],
          "correctAnswer": "これは条件の確認です"
        },
        {
          "id": "u16_l6_5",
          "type": "speak",
          "prompt": "場合の確認",
          "furigana": "ばあいのかくにん",
          "romaji": "baai no kakunin",
          "english": "Pronounce: Confirming Case / scenario",
          "audioText": "ばあいのかくにん",
          "targetSpeech": "場合の確認",
          "options": [
            "Confirming Case / scenario",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "場合の確認"
        },
        {
          "id": "u16_l6_6",
          "type": "dictate",
          "prompt": "場合の確認をお願いします",
          "furigana": "ばあいのかくにんをおねがいします",
          "romaji": "baai no kakunin o onegaishimasu.",
          "english": "Confirming Case / scenario, please.",
          "audioText": "場合の確認をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "場合の確認",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "場合の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "場合の確認をお願いします"
        },
        {
          "id": "u16_l6_7",
          "type": "match",
          "prompt": "仮定の確認・条件の確認・場合の確認・もしの確認",
          "furigana": "かていのかくにん・じょうけんのかくにん・ばあいのかくにん・もしのかくにん",
          "romaji": "katei no kakunin, jouken no kakunin, baai no kakunin, moshi no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かていのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "仮定の確認",
              "right": "Confirming Hypothesis / assumption",
              "furigana": "かていのかくにん",
              "romaji": "katei no kakunin"
            },
            {
              "id": "p_1",
              "left": "条件の確認",
              "right": "Confirming Condition / requirement",
              "furigana": "じょうけんのかくにん",
              "romaji": "jouken no kakunin"
            },
            {
              "id": "p_2",
              "left": "場合の確認",
              "right": "Confirming Case / scenario",
              "furigana": "ばあいのかくにん",
              "romaji": "baai no kakunin"
            },
            {
              "id": "p_3",
              "left": "もしの確認",
              "right": "Confirming If / supposing that",
              "furigana": "もしのかくにん",
              "romaji": "moshi no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l6_8",
          "type": "dialogue",
          "prompt": "条件の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "条件の準備はできていますか？",
          "furigana": "条件の準備はできていますか？",
          "romaji": "jouken no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Condition / requirement ready?",
          "audioText": "条件の準備はできていますか？",
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
      "id": "u16_l7",
      "unitId": "unit_16",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming If / supposing that & Confirming Even if / supposing",
      "titleJp": "もしの確認・たとえの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "もしの確認",
        "たとえの確認",
        "後悔の確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "確",
        "認",
        "後",
        "悔",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u16_l7_1",
          "type": "listen",
          "prompt": "もしの確認",
          "furigana": "もしのかくにん",
          "romaji": "moshi no kakunin",
          "english": "Confirming If / supposing that",
          "audioText": "もしのかくにん",
          "options": [
            "Confirming If / supposing that",
            "Improvement / Kaizen",
            "Influence / effect",
            "Confirming Regret"
          ],
          "correctAnswer": "Confirming If / supposing that"
        },
        {
          "id": "u16_l7_2",
          "type": "spell",
          "prompt": "もしの確認",
          "furigana": "もしのかくにん",
          "romaji": "moshi no kakunin",
          "english": "Build 'Confirming If / supposing that'",
          "audioText": "もしのかくにん",
          "tileBank": [
            "の",
            "か",
            "め",
            "く",
            "ん",
            "に",
            "も",
            "し"
          ],
          "correctAnswer": "もしのかくにん"
        },
        {
          "id": "u16_l7_3",
          "type": "cloze",
          "prompt": "私はたとえの確認がすきです",
          "furigana": "わたしはたとえのかくにんがすきです",
          "romaji": "Watashi wa tatoe no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Even if / supposing.",
          "audioText": "たとえの確認",
          "clozeSentence": "これはたとえの確認 {{BLANK}} す。",
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
          "id": "u16_l7_4",
          "type": "scramble",
          "prompt": "これはたとえの確認です",
          "furigana": "これはたとえのかくにんです",
          "romaji": "Kore wa tatoe no kakunin desu.",
          "english": "This is Confirming Even if / supposing.",
          "audioText": "これはたとえの確認です",
          "scrambleTokens": [
            "ではありません",
            "たとえの確認",
            "これは",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "たとえの確認",
            "です"
          ],
          "correctAnswer": "これはたとえの確認です"
        },
        {
          "id": "u16_l7_5",
          "type": "speak",
          "prompt": "後悔の確認",
          "furigana": "こうかいのかくにん",
          "romaji": "koukai no kakunin",
          "english": "Pronounce: Confirming Regret",
          "audioText": "こうかいのかくにん",
          "targetSpeech": "後悔の確認",
          "options": [
            "Confirming Regret",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "後悔の確認"
        },
        {
          "id": "u16_l7_6",
          "type": "dictate",
          "prompt": "後悔の確認をお願いします",
          "furigana": "こうかいのかくにんをおねがいします",
          "romaji": "koukai no kakunin o onegaishimasu.",
          "english": "Confirming Regret, please.",
          "audioText": "後悔の確認をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "後悔の確認",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "後悔の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "後悔の確認をお願いします"
        },
        {
          "id": "u16_l7_7",
          "type": "match",
          "prompt": "もしの確認・たとえの確認・後悔の確認・改善の確認",
          "furigana": "もしのかくにん・たとえのかくにん・こうかいのかくにん・かいぜんのかくにん",
          "romaji": "moshi no kakunin, tatoe no kakunin, koukai no kakunin, kaizen no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "もしのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "もしの確認",
              "right": "Confirming If / supposing that",
              "furigana": "もしのかくにん",
              "romaji": "moshi no kakunin"
            },
            {
              "id": "p_1",
              "left": "たとえの確認",
              "right": "Confirming Even if / supposing",
              "furigana": "たとえのかくにん",
              "romaji": "tatoe no kakunin"
            },
            {
              "id": "p_2",
              "left": "後悔の確認",
              "right": "Confirming Regret",
              "furigana": "こうかいのかくにん",
              "romaji": "koukai no kakunin"
            },
            {
              "id": "p_3",
              "left": "改善の確認",
              "right": "Confirming Improvement / Kaizen",
              "furigana": "かいぜんのかくにん",
              "romaji": "kaizen no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l7_8",
          "type": "dialogue",
          "prompt": "場合についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "場合についてどう思われますか？",
          "furigana": "場合についてどう思われますか？",
          "romaji": "baai ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Case / scenario?",
          "audioText": "場合についてどう思われますか？",
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
      "id": "u16_l8",
      "unitId": "unit_16",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Improvement / Kaizen & Confirming Proposal / suggestion",
      "titleJp": "改善の確認・提案の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "改善の確認",
        "提案の確認",
        "可能性の確認"
      ],
      "kanjiKeywords": [
        "改",
        "善",
        "確",
        "認",
        "提",
        "案",
        "確",
        "認",
        "可",
        "能",
        "性",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u16_l8_1",
          "type": "listen",
          "prompt": "改善の確認",
          "furigana": "かいぜんのかくにん",
          "romaji": "kaizen no kakunin",
          "english": "Confirming Improvement / Kaizen",
          "audioText": "かいぜんのかくにん",
          "options": [
            "Judgement / decision",
            "Confirming Improvement / Kaizen",
            "Confirming Regret",
            "Confirming Possibility / potential"
          ],
          "correctAnswer": "Confirming Improvement / Kaizen"
        },
        {
          "id": "u16_l8_2",
          "type": "spell",
          "prompt": "改善の確認",
          "furigana": "かいぜんのかくにん",
          "romaji": "kaizen no kakunin",
          "english": "Build 'Confirming Improvement / Kaizen'",
          "audioText": "かいぜんのかくにん",
          "tileBank": [
            "く",
            "の",
            "ん",
            "か",
            "ぜ",
            "い",
            "か",
            "に"
          ],
          "correctAnswer": "かいぜんのかくにん"
        },
        {
          "id": "u16_l8_3",
          "type": "cloze",
          "prompt": "私は提案の確認がすきです",
          "furigana": "わたしはていあんのかくにんがすきです",
          "romaji": "Watashi wa teian no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Proposal / suggestion.",
          "audioText": "提案の確認",
          "clozeSentence": "これは提案の確認 {{BLANK}} す。",
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
          "id": "u16_l8_4",
          "type": "scramble",
          "prompt": "これは提案の確認です",
          "furigana": "これはていあんのかくにんです",
          "romaji": "Kore wa teian no kakunin desu.",
          "english": "This is Confirming Proposal / suggestion.",
          "audioText": "これは提案の確認です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "これは",
            "提案の確認"
          ],
          "scrambleSolution": [
            "これは",
            "提案の確認",
            "です"
          ],
          "correctAnswer": "これは提案の確認です"
        },
        {
          "id": "u16_l8_5",
          "type": "speak",
          "prompt": "可能性の確認",
          "furigana": "かのうせいのかくにん",
          "romaji": "kanousei no kakunin",
          "english": "Pronounce: Confirming Possibility / potential",
          "audioText": "かのうせいのかくにん",
          "targetSpeech": "可能性の確認",
          "options": [
            "Confirming Possibility / potential",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "可能性の確認"
        },
        {
          "id": "u16_l8_6",
          "type": "dictate",
          "prompt": "可能性の確認をお願いします",
          "furigana": "かのうせいのかくにんをおねがいします",
          "romaji": "kanousei no kakunin o onegaishimasu.",
          "english": "Confirming Possibility / potential, please.",
          "audioText": "可能性の確認をお願いします",
          "dictateTokens": [
            "可能性の確認",
            "お願いします",
            "を",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "可能性の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "可能性の確認をお願いします"
        },
        {
          "id": "u16_l8_7",
          "type": "match",
          "prompt": "改善の確認・提案の確認・可能性の確認・選択肢の確認",
          "furigana": "かいぜんのかくにん・ていあんのかくにん・かのうせいのかくにん・せんたくしのかくにん",
          "romaji": "kaizen no kakunin, teian no kakunin, kanousei no kakunin, sentakushi no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かいぜんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "改善の確認",
              "right": "Confirming Improvement / Kaizen",
              "furigana": "かいぜんのかくにん",
              "romaji": "kaizen no kakunin"
            },
            {
              "id": "p_1",
              "left": "提案の確認",
              "right": "Confirming Proposal / suggestion",
              "furigana": "ていあんのかくにん",
              "romaji": "teian no kakunin"
            },
            {
              "id": "p_2",
              "left": "可能性の確認",
              "right": "Confirming Possibility / potential",
              "furigana": "かのうせいのかくにん",
              "romaji": "kanousei no kakunin"
            },
            {
              "id": "p_3",
              "left": "選択肢の確認",
              "right": "Confirming Option / choice",
              "furigana": "せんたくしのかくにん",
              "romaji": "sentakushi no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l8_8",
          "type": "dialogue",
          "prompt": "次はもしに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次はもしに進みましょう。",
          "furigana": "次はもしに進みましょう。",
          "romaji": "Tsugi wa moshi ni susumimashou.",
          "english": "Speaker: Let's proceed to If / supposing that next.",
          "audioText": "次はもしに進みましょう。",
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
      "id": "u16_l9",
      "unitId": "unit_16",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Option / choice & Confirming Judgement / decision",
      "titleJp": "選択肢の確認・判断の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "選択肢の確認",
        "判断の確認",
        "影響の確認"
      ],
      "kanjiKeywords": [
        "選",
        "択",
        "肢",
        "確",
        "認",
        "判",
        "断",
        "確",
        "認",
        "影",
        "響",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u16_l9_1",
          "type": "listen",
          "prompt": "選択肢の確認",
          "furigana": "せんたくしのかくにん",
          "romaji": "sentakushi no kakunin",
          "english": "Confirming Option / choice",
          "audioText": "せんたくしのかくにん",
          "options": [
            "If / supposing that",
            "Confirming In the unlikely event",
            "Option / choice",
            "Confirming Option / choice"
          ],
          "correctAnswer": "Confirming Option / choice"
        },
        {
          "id": "u16_l9_2",
          "type": "spell",
          "prompt": "選択肢の確認",
          "furigana": "せんたくしのかくにん",
          "romaji": "sentakushi no kakunin",
          "english": "Build 'Confirming Option / choice'",
          "audioText": "せんたくしのかくにん",
          "tileBank": [
            "く",
            "た",
            "の",
            "せ",
            "く",
            "ん",
            "し",
            "か"
          ],
          "correctAnswer": "せんたくしのかくにん"
        },
        {
          "id": "u16_l9_3",
          "type": "cloze",
          "prompt": "私は判断の確認がすきです",
          "furigana": "わたしははんだんのかくにんがすきです",
          "romaji": "Watashi wa handan no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Judgement / decision.",
          "audioText": "判断の確認",
          "clozeSentence": "これは判断の確認 {{BLANK}} す。",
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
          "id": "u16_l9_4",
          "type": "scramble",
          "prompt": "これは判断の確認です",
          "furigana": "これははんだんのかくにんです",
          "romaji": "Kore wa handan no kakunin desu.",
          "english": "This is Confirming Judgement / decision.",
          "audioText": "これは判断の確認です",
          "scrambleTokens": [
            "判断の確認",
            "これは",
            "それ",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "判断の確認",
            "です"
          ],
          "correctAnswer": "これは判断の確認です"
        },
        {
          "id": "u16_l9_5",
          "type": "speak",
          "prompt": "影響の確認",
          "furigana": "えいきょうのかくにん",
          "romaji": "eikyou no kakunin",
          "english": "Pronounce: Confirming Influence / effect",
          "audioText": "えいきょうのかくにん",
          "targetSpeech": "影響の確認",
          "options": [
            "Confirming Influence / effect",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "影響の確認"
        },
        {
          "id": "u16_l9_6",
          "type": "dictate",
          "prompt": "影響の確認をお願いします",
          "furigana": "えいきょうのかくにんをおねがいします",
          "romaji": "eikyou no kakunin o onegaishimasu.",
          "english": "Confirming Influence / effect, please.",
          "audioText": "影響の確認をお願いします",
          "dictateTokens": [
            "影響の確認",
            "お願いします",
            "を",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "影響の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "影響の確認をお願いします"
        },
        {
          "id": "u16_l9_7",
          "type": "match",
          "prompt": "選択肢の確認・判断の確認・影響の確認・万一の確認",
          "furigana": "せんたくしのかくにん・はんだんのかくにん・えいきょうのかくにん・まんいちのかくにん",
          "romaji": "sentakushi no kakunin, handan no kakunin, eikyou no kakunin, man-ichi no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せんたくしのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "選択肢の確認",
              "right": "Confirming Option / choice",
              "furigana": "せんたくしのかくにん",
              "romaji": "sentakushi no kakunin"
            },
            {
              "id": "p_1",
              "left": "判断の確認",
              "right": "Confirming Judgement / decision",
              "furigana": "はんだんのかくにん",
              "romaji": "handan no kakunin"
            },
            {
              "id": "p_2",
              "left": "影響の確認",
              "right": "Confirming Influence / effect",
              "furigana": "えいきょうのかくにん",
              "romaji": "eikyou no kakunin"
            },
            {
              "id": "p_3",
              "left": "万一の確認",
              "right": "Confirming In the unlikely event",
              "furigana": "まんいちのかくにん",
              "romaji": "man-ichi no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l9_8",
          "type": "dialogue",
          "prompt": "仮定について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "仮定について教えていただけますか？",
          "furigana": "仮定について教えていただけますか？",
          "romaji": "katei ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hypothesis / assumption?",
          "audioText": "仮定について教えていただけますか？",
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
      "id": "u16_l10",
      "unitId": "unit_16",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming In the unlikely event & Confirming Prediction / forecast",
      "titleJp": "万一の確認・予測の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "万一の確認",
        "予測の確認",
        "対応の確認"
      ],
      "kanjiKeywords": [
        "万",
        "一",
        "確",
        "認",
        "予",
        "測",
        "確",
        "認",
        "対",
        "応",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u16_l10_1",
          "type": "listen",
          "prompt": "万一の確認",
          "furigana": "まんいちのかくにん",
          "romaji": "man-ichi no kakunin",
          "english": "Confirming In the unlikely event",
          "audioText": "まんいちのかくにん",
          "options": [
            "Condition / requirement",
            "Confirming Even if / supposing",
            "Confirming In the unlikely event",
            "Confirming Hypothesis / assumption"
          ],
          "correctAnswer": "Confirming In the unlikely event"
        },
        {
          "id": "u16_l10_2",
          "type": "spell",
          "prompt": "万一の確認",
          "furigana": "まんいちのかくにん",
          "romaji": "man-ichi no kakunin",
          "english": "Build 'Confirming In the unlikely event'",
          "audioText": "まんいちのかくにん",
          "tileBank": [
            "に",
            "ま",
            "く",
            "い",
            "ち",
            "の",
            "か",
            "ん"
          ],
          "correctAnswer": "まんいちのかくにん"
        },
        {
          "id": "u16_l10_3",
          "type": "cloze",
          "prompt": "私は予測の確認がすきです",
          "furigana": "わたしはよそくのかくにんがすきです",
          "romaji": "Watashi wa yosoku no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Prediction / forecast.",
          "audioText": "予測の確認",
          "clozeSentence": "これは予測の確認 {{BLANK}} す。",
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
          "id": "u16_l10_4",
          "type": "scramble",
          "prompt": "これは予測の確認です",
          "furigana": "これはよそくのかくにんです",
          "romaji": "Kore wa yosoku no kakunin desu.",
          "english": "This is Confirming Prediction / forecast.",
          "audioText": "これは予測の確認です",
          "scrambleTokens": [
            "それ",
            "予測の確認",
            "です",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "予測の確認",
            "です"
          ],
          "correctAnswer": "これは予測の確認です"
        },
        {
          "id": "u16_l10_5",
          "type": "speak",
          "prompt": "対応の確認",
          "furigana": "たいおうのかくにん",
          "romaji": "taiou no kakunin",
          "english": "Pronounce: Confirming Response / dealing with",
          "audioText": "たいおうのかくにん",
          "targetSpeech": "対応の確認",
          "options": [
            "Confirming Response / dealing with",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "対応の確認"
        },
        {
          "id": "u16_l10_6",
          "type": "dictate",
          "prompt": "対応の確認をお願いします",
          "furigana": "たいおうのかくにんをおねがいします",
          "romaji": "taiou no kakunin o onegaishimasu.",
          "english": "Confirming Response / dealing with, please.",
          "audioText": "対応の確認をお願いします",
          "dictateTokens": [
            "です",
            "対応の確認",
            "を",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "対応の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "対応の確認をお願いします"
        },
        {
          "id": "u16_l10_7",
          "type": "match",
          "prompt": "万一の確認・予測の確認・対応の確認・仮定の確認",
          "furigana": "まんいちのかくにん・よそくのかくにん・たいおうのかくにん・かていのかくにん",
          "romaji": "man-ichi no kakunin, yosoku no kakunin, taiou no kakunin, katei no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "まんいちのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "万一の確認",
              "right": "Confirming In the unlikely event",
              "furigana": "まんいちのかくにん",
              "romaji": "man-ichi no kakunin"
            },
            {
              "id": "p_1",
              "left": "予測の確認",
              "right": "Confirming Prediction / forecast",
              "furigana": "よそくのかくにん",
              "romaji": "yosoku no kakunin"
            },
            {
              "id": "p_2",
              "left": "対応の確認",
              "right": "Confirming Response / dealing with",
              "furigana": "たいおうのかくにん",
              "romaji": "taiou no kakunin"
            },
            {
              "id": "p_3",
              "left": "仮定の確認",
              "right": "Confirming Hypothesis / assumption",
              "furigana": "かていのかくにん",
              "romaji": "katei no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l10_8",
          "type": "dialogue",
          "prompt": "条件の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "条件の準備はできていますか？",
          "furigana": "条件の準備はできていますか？",
          "romaji": "jouken no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Condition / requirement ready?",
          "audioText": "条件の準備はできていますか？",
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
      "id": "u16_l11",
      "unitId": "unit_16",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Hypothesis / assumption & Confirming Condition / requirement",
      "titleJp": "仮定の確認・条件の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "仮定の確認",
        "条件の確認",
        "場合の確認"
      ],
      "kanjiKeywords": [
        "仮",
        "定",
        "確",
        "認",
        "条",
        "件",
        "確",
        "認",
        "場",
        "合",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u16_l11_1",
          "type": "listen",
          "prompt": "仮定の確認",
          "furigana": "かていのかくにん",
          "romaji": "katei no kakunin",
          "english": "Confirming Hypothesis / assumption",
          "audioText": "かていのかくにん",
          "options": [
            "Confirming If / supposing that",
            "Confirming Response / dealing with",
            "Confirming Hypothesis / assumption",
            "Confirming Improvement / Kaizen"
          ],
          "correctAnswer": "Confirming Hypothesis / assumption"
        },
        {
          "id": "u16_l11_2",
          "type": "spell",
          "prompt": "仮定の確認",
          "furigana": "かていのかくにん",
          "romaji": "katei no kakunin",
          "english": "Build 'Confirming Hypothesis / assumption'",
          "audioText": "かていのかくにん",
          "tileBank": [
            "て",
            "に",
            "の",
            "い",
            "く",
            "ん",
            "か",
            "か"
          ],
          "correctAnswer": "かていのかくにん"
        },
        {
          "id": "u16_l11_3",
          "type": "cloze",
          "prompt": "私は条件の確認がすきです",
          "furigana": "わたしはじょうけんのかくにんがすきです",
          "romaji": "Watashi wa jouken no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Condition / requirement.",
          "audioText": "条件の確認",
          "clozeSentence": "これは条件の確認 {{BLANK}} す。",
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
          "id": "u16_l11_4",
          "type": "scramble",
          "prompt": "これは条件の確認です",
          "furigana": "これはじょうけんのかくにんです",
          "romaji": "Kore wa jouken no kakunin desu.",
          "english": "This is Confirming Condition / requirement.",
          "audioText": "これは条件の確認です",
          "scrambleTokens": [
            "ではありません",
            "条件の確認",
            "それ",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "条件の確認",
            "です"
          ],
          "correctAnswer": "これは条件の確認です"
        },
        {
          "id": "u16_l11_5",
          "type": "speak",
          "prompt": "場合の確認",
          "furigana": "ばあいのかくにん",
          "romaji": "baai no kakunin",
          "english": "Pronounce: Confirming Case / scenario",
          "audioText": "ばあいのかくにん",
          "targetSpeech": "場合の確認",
          "options": [
            "Confirming Case / scenario",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "場合の確認"
        },
        {
          "id": "u16_l11_6",
          "type": "dictate",
          "prompt": "場合の確認をお願いします",
          "furigana": "ばあいのかくにんをおねがいします",
          "romaji": "baai no kakunin o onegaishimasu.",
          "english": "Confirming Case / scenario, please.",
          "audioText": "場合の確認をお願いします",
          "dictateTokens": [
            "を",
            "場合の確認",
            "お願いします",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "場合の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "場合の確認をお願いします"
        },
        {
          "id": "u16_l11_7",
          "type": "match",
          "prompt": "仮定の確認・条件の確認・場合の確認・もしの確認",
          "furigana": "かていのかくにん・じょうけんのかくにん・ばあいのかくにん・もしのかくにん",
          "romaji": "katei no kakunin, jouken no kakunin, baai no kakunin, moshi no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かていのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "仮定の確認",
              "right": "Confirming Hypothesis / assumption",
              "furigana": "かていのかくにん",
              "romaji": "katei no kakunin"
            },
            {
              "id": "p_1",
              "left": "条件の確認",
              "right": "Confirming Condition / requirement",
              "furigana": "じょうけんのかくにん",
              "romaji": "jouken no kakunin"
            },
            {
              "id": "p_2",
              "left": "場合の確認",
              "right": "Confirming Case / scenario",
              "furigana": "ばあいのかくにん",
              "romaji": "baai no kakunin"
            },
            {
              "id": "p_3",
              "left": "もしの確認",
              "right": "Confirming If / supposing that",
              "furigana": "もしのかくにん",
              "romaji": "moshi no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l11_8",
          "type": "dialogue",
          "prompt": "場合についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "場合についてどう思われますか？",
          "furigana": "場合についてどう思われますか？",
          "romaji": "baai ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Case / scenario?",
          "audioText": "場合についてどう思われますか？",
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
      "id": "u16_l12",
      "unitId": "unit_16",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming If / supposing that & Confirming Even if / supposing",
      "titleJp": "もしの確認・たとえの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "もしの確認",
        "たとえの確認",
        "後悔の確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "確",
        "認",
        "後",
        "悔",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u16_l12_1",
          "type": "listen",
          "prompt": "もしの確認",
          "furigana": "もしのかくにん",
          "romaji": "moshi no kakunin",
          "english": "Confirming If / supposing that",
          "audioText": "もしのかくにん",
          "options": [
            "Confirming If / supposing that",
            "Confirming Proposal / suggestion",
            "Even if / supposing",
            "Confirming Condition / requirement"
          ],
          "correctAnswer": "Confirming If / supposing that"
        },
        {
          "id": "u16_l12_2",
          "type": "spell",
          "prompt": "もしの確認",
          "furigana": "もしのかくにん",
          "romaji": "moshi no kakunin",
          "english": "Build 'Confirming If / supposing that'",
          "audioText": "もしのかくにん",
          "tileBank": [
            "か",
            "に",
            "ん",
            "こ",
            "く",
            "の",
            "も",
            "し"
          ],
          "correctAnswer": "もしのかくにん"
        },
        {
          "id": "u16_l12_3",
          "type": "cloze",
          "prompt": "私はたとえの確認がすきです",
          "furigana": "わたしはたとえのかくにんがすきです",
          "romaji": "Watashi wa tatoe no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Even if / supposing.",
          "audioText": "たとえの確認",
          "clozeSentence": "これはたとえの確認 {{BLANK}} す。",
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
          "id": "u16_l12_4",
          "type": "scramble",
          "prompt": "これはたとえの確認です",
          "furigana": "これはたとえのかくにんです",
          "romaji": "Kore wa tatoe no kakunin desu.",
          "english": "This is Confirming Even if / supposing.",
          "audioText": "これはたとえの確認です",
          "scrambleTokens": [
            "これは",
            "それ",
            "です",
            "たとえの確認",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "たとえの確認",
            "です"
          ],
          "correctAnswer": "これはたとえの確認です"
        },
        {
          "id": "u16_l12_5",
          "type": "speak",
          "prompt": "後悔の確認",
          "furigana": "こうかいのかくにん",
          "romaji": "koukai no kakunin",
          "english": "Pronounce: Confirming Regret",
          "audioText": "こうかいのかくにん",
          "targetSpeech": "後悔の確認",
          "options": [
            "Confirming Regret",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "後悔の確認"
        },
        {
          "id": "u16_l12_6",
          "type": "dictate",
          "prompt": "後悔の確認をお願いします",
          "furigana": "こうかいのかくにんをおねがいします",
          "romaji": "koukai no kakunin o onegaishimasu.",
          "english": "Confirming Regret, please.",
          "audioText": "後悔の確認をお願いします",
          "dictateTokens": [
            "後悔の確認",
            "お願いします",
            "ありがとう",
            "です",
            "を"
          ],
          "dictateSolution": [
            "後悔の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "後悔の確認をお願いします"
        },
        {
          "id": "u16_l12_7",
          "type": "match",
          "prompt": "もしの確認・たとえの確認・後悔の確認・仮定",
          "furigana": "もしのかくにん・たとえのかくにん・こうかいのかくにん・かてい",
          "romaji": "moshi no kakunin, tatoe no kakunin, koukai no kakunin, katei",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "もしのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "もしの確認",
              "right": "Confirming If / supposing that",
              "furigana": "もしのかくにん",
              "romaji": "moshi no kakunin"
            },
            {
              "id": "p_1",
              "left": "たとえの確認",
              "right": "Confirming Even if / supposing",
              "furigana": "たとえのかくにん",
              "romaji": "tatoe no kakunin"
            },
            {
              "id": "p_2",
              "left": "後悔の確認",
              "right": "Confirming Regret",
              "furigana": "こうかいのかくにん",
              "romaji": "koukai no kakunin"
            },
            {
              "id": "p_3",
              "left": "仮定",
              "right": "Hypothesis / assumption",
              "furigana": "かてい",
              "romaji": "katei"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l12_8",
          "type": "dialogue",
          "prompt": "次はもしに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次はもしに進みましょう。",
          "furigana": "次はもしに進みましょう。",
          "romaji": "Tsugi wa moshi ni susumimashou.",
          "english": "Speaker: Let's proceed to If / supposing that next.",
          "audioText": "次はもしに進みましょう。",
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
      "id": "u16_l13",
      "unitId": "unit_16",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Hypothesis / assumption & Condition / requirement",
      "titleJp": "仮定・条件",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "仮定",
        "条件",
        "場合"
      ],
      "kanjiKeywords": [
        "仮",
        "定",
        "条",
        "件",
        "場",
        "合"
      ],
      "items": [
        {
          "id": "u16_l13_1",
          "type": "listen",
          "prompt": "仮定",
          "furigana": "かてい",
          "romaji": "katei",
          "english": "Hypothesis / assumption",
          "audioText": "かてい",
          "options": [
            "Confirming Hypothesis / assumption",
            "Case / scenario",
            "Confirming Condition / requirement",
            "Hypothesis / assumption"
          ],
          "correctAnswer": "Hypothesis / assumption"
        },
        {
          "id": "u16_l13_2",
          "type": "spell",
          "prompt": "仮定",
          "furigana": "かてい",
          "romaji": "katei",
          "english": "Build 'Hypothesis / assumption'",
          "audioText": "かてい",
          "tileBank": [
            "ぬ",
            "つ",
            "す",
            "か",
            "い",
            "さ",
            "て",
            "の"
          ],
          "correctAnswer": "かてい"
        },
        {
          "id": "u16_l13_3",
          "type": "cloze",
          "prompt": "私は条件がすきです",
          "furigana": "わたしはじょうけんがすきです",
          "romaji": "Watashi wa jouken ga suki desu.",
          "english": "Fill in the blank with the correct particle for Condition / requirement.",
          "audioText": "条件",
          "clozeSentence": "これは条件 {{BLANK}} す。",
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
          "id": "u16_l13_4",
          "type": "scramble",
          "prompt": "これは条件です",
          "furigana": "これはじょうけんです",
          "romaji": "Kore wa jouken desu.",
          "english": "This is Condition / requirement.",
          "audioText": "これは条件です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "それ",
            "です",
            "条件"
          ],
          "scrambleSolution": [
            "これは",
            "条件",
            "です"
          ],
          "correctAnswer": "これは条件です"
        },
        {
          "id": "u16_l13_5",
          "type": "speak",
          "prompt": "場合",
          "furigana": "ばあい",
          "romaji": "baai",
          "english": "Pronounce: Case / scenario",
          "audioText": "ばあい",
          "targetSpeech": "場合",
          "options": [
            "Case / scenario",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "場合"
        },
        {
          "id": "u16_l13_6",
          "type": "dictate",
          "prompt": "場合をお願いします",
          "furigana": "ばあいをおねがいします",
          "romaji": "baai o onegaishimasu.",
          "english": "Case / scenario, please.",
          "audioText": "場合をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "お願いします",
            "です",
            "場合"
          ],
          "dictateSolution": [
            "場合",
            "を",
            "お願いします"
          ],
          "correctAnswer": "場合をお願いします"
        },
        {
          "id": "u16_l13_7",
          "type": "match",
          "prompt": "仮定・条件・場合・もし",
          "furigana": "かてい・じょうけん・ばあい・もし",
          "romaji": "katei, jouken, baai, moshi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かてい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "仮定",
              "right": "Hypothesis / assumption",
              "furigana": "かてい",
              "romaji": "katei"
            },
            {
              "id": "p_1",
              "left": "条件",
              "right": "Condition / requirement",
              "furigana": "じょうけん",
              "romaji": "jouken"
            },
            {
              "id": "p_2",
              "left": "場合",
              "right": "Case / scenario",
              "furigana": "ばあい",
              "romaji": "baai"
            },
            {
              "id": "p_3",
              "left": "もし",
              "right": "If / supposing that",
              "furigana": "もし",
              "romaji": "moshi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l13_8",
          "type": "dialogue",
          "prompt": "仮定について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "仮定について教えていただけますか？",
          "furigana": "仮定について教えていただけますか？",
          "romaji": "katei ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hypothesis / assumption?",
          "audioText": "仮定について教えていただけますか？",
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
      "id": "u16_l14",
      "unitId": "unit_16",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "If / supposing that & Even if / supposing",
      "titleJp": "もし・たとえ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "もし",
        "たとえ",
        "後悔"
      ],
      "kanjiKeywords": [
        "後",
        "悔"
      ],
      "items": [
        {
          "id": "u16_l14_1",
          "type": "listen",
          "prompt": "もし",
          "furigana": "もし",
          "romaji": "moshi",
          "english": "If / supposing that",
          "audioText": "もし",
          "options": [
            "Improvement / Kaizen",
            "If / supposing that",
            "Confirming Even if / supposing",
            "Influence / effect"
          ],
          "correctAnswer": "If / supposing that"
        },
        {
          "id": "u16_l14_2",
          "type": "spell",
          "prompt": "もし",
          "furigana": "もし",
          "romaji": "moshi",
          "english": "Build 'If / supposing that'",
          "audioText": "もし",
          "tileBank": [
            "お",
            "て",
            "し",
            "さ",
            "も",
            "ひ",
            "つ",
            "わ"
          ],
          "correctAnswer": "もし"
        },
        {
          "id": "u16_l14_3",
          "type": "cloze",
          "prompt": "私はたとえがすきです",
          "furigana": "わたしはたとえがすきです",
          "romaji": "Watashi wa tatoe ga suki desu.",
          "english": "Fill in the blank with the correct particle for Even if / supposing.",
          "audioText": "たとえ",
          "clozeSentence": "これはたとえ {{BLANK}} す。",
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
          "id": "u16_l14_4",
          "type": "scramble",
          "prompt": "これはたとえです",
          "furigana": "これはたとえです",
          "romaji": "Kore wa tatoe desu.",
          "english": "This is Even if / supposing.",
          "audioText": "これはたとえです",
          "scrambleTokens": [
            "です",
            "それ",
            "たとえ",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "たとえ",
            "です"
          ],
          "correctAnswer": "これはたとえです"
        },
        {
          "id": "u16_l14_5",
          "type": "speak",
          "prompt": "後悔",
          "furigana": "こうかい",
          "romaji": "koukai",
          "english": "Pronounce: Regret",
          "audioText": "こうかい",
          "targetSpeech": "後悔",
          "options": [
            "Regret",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "後悔"
        },
        {
          "id": "u16_l14_6",
          "type": "dictate",
          "prompt": "後悔をお願いします",
          "furigana": "こうかいをおねがいします",
          "romaji": "koukai o onegaishimasu.",
          "english": "Regret, please.",
          "audioText": "後悔をお願いします",
          "dictateTokens": [
            "後悔",
            "お願いします",
            "ありがとう",
            "です",
            "を"
          ],
          "dictateSolution": [
            "後悔",
            "を",
            "お願いします"
          ],
          "correctAnswer": "後悔をお願いします"
        },
        {
          "id": "u16_l14_7",
          "type": "match",
          "prompt": "もし・たとえ・後悔・改善",
          "furigana": "もし・たとえ・こうかい・かいぜん",
          "romaji": "moshi, tatoe, koukai, kaizen",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "もし",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "もし",
              "right": "If / supposing that",
              "furigana": "もし",
              "romaji": "moshi"
            },
            {
              "id": "p_1",
              "left": "たとえ",
              "right": "Even if / supposing",
              "furigana": "たとえ",
              "romaji": "tatoe"
            },
            {
              "id": "p_2",
              "left": "後悔",
              "right": "Regret",
              "furigana": "こうかい",
              "romaji": "koukai"
            },
            {
              "id": "p_3",
              "left": "改善",
              "right": "Improvement / Kaizen",
              "furigana": "かいぜん",
              "romaji": "kaizen"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l14_8",
          "type": "dialogue",
          "prompt": "条件の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "条件の準備はできていますか？",
          "furigana": "条件の準備はできていますか？",
          "romaji": "jouken no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Condition / requirement ready?",
          "audioText": "条件の準備はできていますか？",
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
      "id": "u16_l15",
      "unitId": "unit_16",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 16 Master Exam",
      "iconType": "test",
      "title": "Unit 16 Master Exam",
      "titleJp": "第16週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "改善",
        "提案",
        "可能性"
      ],
      "kanjiKeywords": [
        "改",
        "善",
        "提",
        "案",
        "可",
        "能",
        "性"
      ],
      "items": [
        {
          "id": "u16_l15_1",
          "type": "listen",
          "prompt": "改善",
          "furigana": "かいぜん",
          "romaji": "kaizen",
          "english": "Improvement / Kaizen",
          "audioText": "かいぜん",
          "options": [
            "Improvement / Kaizen",
            "Confirming Condition / requirement",
            "Confirming Possibility / potential",
            "Confirming Even if / supposing"
          ],
          "correctAnswer": "Improvement / Kaizen"
        },
        {
          "id": "u16_l15_2",
          "type": "spell",
          "prompt": "改善",
          "furigana": "かいぜん",
          "romaji": "kaizen",
          "english": "Build 'Improvement / Kaizen'",
          "audioText": "かいぜん",
          "tileBank": [
            "や",
            "ぜ",
            "へ",
            "を",
            "ね",
            "ん",
            "か",
            "い"
          ],
          "correctAnswer": "かいぜん"
        },
        {
          "id": "u16_l15_3",
          "type": "cloze",
          "prompt": "私は提案がすきです",
          "furigana": "わたしはていあんがすきです",
          "romaji": "Watashi wa teian ga suki desu.",
          "english": "Fill in the blank with the correct particle for Proposal / suggestion.",
          "audioText": "提案",
          "clozeSentence": "これは提案 {{BLANK}} す。",
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
          "id": "u16_l15_4",
          "type": "scramble",
          "prompt": "これは提案です",
          "furigana": "これはていあんです",
          "romaji": "Kore wa teian desu.",
          "english": "This is Proposal / suggestion.",
          "audioText": "これは提案です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "です",
            "提案",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "提案",
            "です"
          ],
          "correctAnswer": "これは提案です"
        },
        {
          "id": "u16_l15_5",
          "type": "speak",
          "prompt": "可能性",
          "furigana": "かのうせい",
          "romaji": "kanousei",
          "english": "Pronounce: Possibility / potential",
          "audioText": "かのうせい",
          "targetSpeech": "可能性",
          "options": [
            "Possibility / potential",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "可能性"
        },
        {
          "id": "u16_l15_6",
          "type": "dictate",
          "prompt": "可能性をお願いします",
          "furigana": "かのうせいをおねがいします",
          "romaji": "kanousei o onegaishimasu.",
          "english": "Possibility / potential, please.",
          "audioText": "可能性をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "お願いします",
            "可能性",
            "ありがとう"
          ],
          "dictateSolution": [
            "可能性",
            "を",
            "お願いします"
          ],
          "correctAnswer": "可能性をお願いします"
        },
        {
          "id": "u16_l15_7",
          "type": "match",
          "prompt": "改善・提案・可能性・選択肢",
          "furigana": "かいぜん・ていあん・かのうせい・せんたくし",
          "romaji": "kaizen, teian, kanousei, sentakushi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かいぜん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "改善",
              "right": "Improvement / Kaizen",
              "furigana": "かいぜん",
              "romaji": "kaizen"
            },
            {
              "id": "p_1",
              "left": "提案",
              "right": "Proposal / suggestion",
              "furigana": "ていあん",
              "romaji": "teian"
            },
            {
              "id": "p_2",
              "left": "可能性",
              "right": "Possibility / potential",
              "furigana": "かのうせい",
              "romaji": "kanousei"
            },
            {
              "id": "p_3",
              "left": "選択肢",
              "right": "Option / choice",
              "furigana": "せんたくし",
              "romaji": "sentakushi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u16_l15_8",
          "type": "dialogue",
          "prompt": "場合についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "場合についてどう思われますか？",
          "furigana": "場合についてどう思われますか？",
          "romaji": "baai ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Case / scenario?",
          "audioText": "場合についてどう思われますか？",
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
    "id": "gate_unit_16",
    "unitId": "unit_16",
    "title": "Unit 16 Mastery Checkpoint",
    "titleJp": "第16週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u16_l1_1",
        "type": "listen",
        "prompt": "仮定",
        "furigana": "かてい",
        "romaji": "katei",
        "english": "Hypothesis / assumption",
        "audioText": "かてい",
        "options": [
          "Proposal / suggestion",
          "Hypothesis / assumption",
          "Condition / requirement",
          "Regret"
        ],
        "correctAnswer": "Hypothesis / assumption"
      },
      {
        "id": "u16_l1_2",
        "type": "spell",
        "prompt": "仮定",
        "furigana": "かてい",
        "romaji": "katei",
        "english": "Build 'Hypothesis / assumption'",
        "audioText": "かてい",
        "tileBank": [
          "き",
          "い",
          "せ",
          "む",
          "そ",
          "お",
          "て",
          "か"
        ],
        "correctAnswer": "かてい"
      },
      {
        "id": "u16_l3_1",
        "type": "listen",
        "prompt": "改善",
        "furigana": "かいぜん",
        "romaji": "kaizen",
        "english": "Improvement / Kaizen",
        "audioText": "かいぜん",
        "options": [
          "Improvement / Kaizen",
          "Proposal / suggestion",
          "Case / scenario",
          "Confirming Proposal / suggestion"
        ],
        "correctAnswer": "Improvement / Kaizen"
      },
      {
        "id": "u16_l3_2",
        "type": "spell",
        "prompt": "改善",
        "furigana": "かいぜん",
        "romaji": "kaizen",
        "english": "Build 'Improvement / Kaizen'",
        "audioText": "かいぜん",
        "tileBank": [
          "い",
          "け",
          "こ",
          "ぜ",
          "か",
          "ん",
          "う",
          "お"
        ],
        "correctAnswer": "かいぜん"
      },
      {
        "id": "u16_l5_1",
        "type": "listen",
        "prompt": "万一",
        "furigana": "まんいち",
        "romaji": "man-ichi",
        "english": "In the unlikely event",
        "audioText": "まんいち",
        "options": [
          "Confirming Hypothesis / assumption",
          "Influence / effect",
          "In the unlikely event",
          "Confirming Case / scenario"
        ],
        "correctAnswer": "In the unlikely event"
      },
      {
        "id": "u16_l5_2",
        "type": "spell",
        "prompt": "万一",
        "furigana": "まんいち",
        "romaji": "man-ichi",
        "english": "Build 'In the unlikely event'",
        "audioText": "まんいち",
        "tileBank": [
          "ぬ",
          "ん",
          "ち",
          "え",
          "い",
          "み",
          "も",
          "ま"
        ],
        "correctAnswer": "まんいち"
      },
      {
        "id": "u16_l7_1",
        "type": "listen",
        "prompt": "もしの確認",
        "furigana": "もしのかくにん",
        "romaji": "moshi no kakunin",
        "english": "Confirming If / supposing that",
        "audioText": "もしのかくにん",
        "options": [
          "Confirming If / supposing that",
          "Improvement / Kaizen",
          "Influence / effect",
          "Confirming Regret"
        ],
        "correctAnswer": "Confirming If / supposing that"
      },
      {
        "id": "u16_l7_2",
        "type": "spell",
        "prompt": "もしの確認",
        "furigana": "もしのかくにん",
        "romaji": "moshi no kakunin",
        "english": "Build 'Confirming If / supposing that'",
        "audioText": "もしのかくにん",
        "tileBank": [
          "の",
          "か",
          "め",
          "く",
          "ん",
          "に",
          "も",
          "し"
        ],
        "correctAnswer": "もしのかくにん"
      },
      {
        "id": "u16_l9_1",
        "type": "listen",
        "prompt": "選択肢の確認",
        "furigana": "せんたくしのかくにん",
        "romaji": "sentakushi no kakunin",
        "english": "Confirming Option / choice",
        "audioText": "せんたくしのかくにん",
        "options": [
          "If / supposing that",
          "Confirming In the unlikely event",
          "Option / choice",
          "Confirming Option / choice"
        ],
        "correctAnswer": "Confirming Option / choice"
      },
      {
        "id": "u16_l9_2",
        "type": "spell",
        "prompt": "選択肢の確認",
        "furigana": "せんたくしのかくにん",
        "romaji": "sentakushi no kakunin",
        "english": "Build 'Confirming Option / choice'",
        "audioText": "せんたくしのかくにん",
        "tileBank": [
          "く",
          "た",
          "の",
          "せ",
          "く",
          "ん",
          "し",
          "か"
        ],
        "correctAnswer": "せんたくしのかくにん"
      },
      {
        "id": "u16_l11_1",
        "type": "listen",
        "prompt": "仮定の確認",
        "furigana": "かていのかくにん",
        "romaji": "katei no kakunin",
        "english": "Confirming Hypothesis / assumption",
        "audioText": "かていのかくにん",
        "options": [
          "Confirming If / supposing that",
          "Confirming Response / dealing with",
          "Confirming Hypothesis / assumption",
          "Confirming Improvement / Kaizen"
        ],
        "correctAnswer": "Confirming Hypothesis / assumption"
      },
      {
        "id": "u16_l11_2",
        "type": "spell",
        "prompt": "仮定の確認",
        "furigana": "かていのかくにん",
        "romaji": "katei no kakunin",
        "english": "Build 'Confirming Hypothesis / assumption'",
        "audioText": "かていのかくにん",
        "tileBank": [
          "て",
          "に",
          "の",
          "い",
          "く",
          "ん",
          "か",
          "か"
        ],
        "correctAnswer": "かていのかくにん"
      }
    ]
  }
};
