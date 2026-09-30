import type { DojoUnit } from "../../models/dojo.model";

export const unit30: DojoUnit = {
  "id": "unit_30",
  "unitNumber": 30,
  "title": "Grand Sensei Mastery (Dojo Shihan Challenge)",
  "titleJp": "道場奥義・師範への道",
  "description": "The ultimate milestone: full cumulative mastery across all 30 weeks, synthesis of JLPT N5 through N1, and true Japanese fluency.",
  "icon": "🥋",
  "themeColor": "#E11D48",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u30_l1",
      "unitId": "unit_30",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Grand master / instructor & Ultimate secrets / esoteric mystery",
      "titleJp": "師範・奥義",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "師範",
        "奥義",
        "免許皆伝"
      ],
      "kanjiKeywords": [
        "師",
        "範",
        "奥",
        "義",
        "免",
        "許",
        "皆",
        "伝"
      ],
      "items": [
        {
          "id": "u30_l1_1",
          "type": "listen",
          "prompt": "師範",
          "furigana": "しはん",
          "romaji": "shihan",
          "english": "Grand master / instructor",
          "audioText": "しはん",
          "options": [
            "Indomitable / unyielding spirit",
            "Grand master / instructor",
            "Confirming Grand master / instructor",
            "Confirming Expert knowledge / thorough familiarity"
          ],
          "correctAnswer": "Grand master / instructor"
        },
        {
          "id": "u30_l1_2",
          "type": "spell",
          "prompt": "師範",
          "furigana": "しはん",
          "romaji": "shihan",
          "english": "Build 'Grand master / instructor'",
          "audioText": "しはん",
          "tileBank": [
            "れ",
            "は",
            "な",
            "し",
            "ろ",
            "け",
            "く",
            "ん"
          ],
          "correctAnswer": "しはん"
        },
        {
          "id": "u30_l1_3",
          "type": "cloze",
          "prompt": "私は奥義がすきです",
          "furigana": "わたしはおうぎがすきです",
          "romaji": "Watashi wa ougi ga suki desu.",
          "english": "Fill in the blank with the correct particle for Ultimate secrets / esoteric mystery.",
          "audioText": "奥義",
          "clozeSentence": "これは奥義 {{BLANK}} す。",
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
          "id": "u30_l1_4",
          "type": "scramble",
          "prompt": "これは奥義です",
          "furigana": "これはおうぎです",
          "romaji": "Kore wa ougi desu.",
          "english": "This is Ultimate secrets / esoteric mystery.",
          "audioText": "これは奥義です",
          "scrambleTokens": [
            "奥義",
            "それ",
            "です",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "奥義",
            "です"
          ],
          "correctAnswer": "これは奥義です"
        },
        {
          "id": "u30_l1_5",
          "type": "speak",
          "prompt": "免許皆伝",
          "furigana": "めんきょかいでん",
          "romaji": "menkyo kaiden",
          "english": "Pronounce: Full initiation and complete mastery",
          "audioText": "めんきょかいでん",
          "targetSpeech": "免許皆伝",
          "options": [
            "Full initiation and complete mastery",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "免許皆伝"
        },
        {
          "id": "u30_l1_6",
          "type": "dictate",
          "prompt": "免許皆伝をお願いします",
          "furigana": "めんきょかいでんをおねがいします",
          "romaji": "menkyo kaiden o onegaishimasu.",
          "english": "Full initiation and complete mastery, please.",
          "audioText": "免許皆伝をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "お願いします",
            "ありがとう",
            "免許皆伝"
          ],
          "dictateSolution": [
            "免許皆伝",
            "を",
            "お願いします"
          ],
          "correctAnswer": "免許皆伝をお願いします"
        },
        {
          "id": "u30_l1_7",
          "type": "match",
          "prompt": "師範・奥義・免許皆伝・精通",
          "furigana": "しはん・おうぎ・めんきょかいでん・せいつう",
          "romaji": "shihan, ougi, menkyo kaiden, seitsuu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しはん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "師範",
              "right": "Grand master / instructor",
              "furigana": "しはん",
              "romaji": "shihan"
            },
            {
              "id": "p_1",
              "left": "奥義",
              "right": "Ultimate secrets / esoteric mystery",
              "furigana": "おうぎ",
              "romaji": "ougi"
            },
            {
              "id": "p_2",
              "left": "免許皆伝",
              "right": "Full initiation and complete mastery",
              "furigana": "めんきょかいでん",
              "romaji": "menkyo kaiden"
            },
            {
              "id": "p_3",
              "left": "精通",
              "right": "Expert knowledge / thorough familiarity",
              "furigana": "せいつう",
              "romaji": "seitsuu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l1_8",
          "type": "dialogue",
          "prompt": "師範について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "師範について教えていただけますか？",
          "furigana": "師範について教えていただけますか？",
          "romaji": "shihan ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Grand master / instructor?",
          "audioText": "師範について教えていただけますか？",
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
      "id": "u30_l2",
      "unitId": "unit_30",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Expert knowledge / thorough familiarity & Master / expert practitioner",
      "titleJp": "精通・達人",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "精通",
        "達人",
        "神髄"
      ],
      "kanjiKeywords": [
        "精",
        "通",
        "達",
        "人",
        "神",
        "髄"
      ],
      "items": [
        {
          "id": "u30_l2_1",
          "type": "listen",
          "prompt": "精通",
          "furigana": "せいつう",
          "romaji": "seitsuu",
          "english": "Expert knowledge / thorough familiarity",
          "audioText": "せいつう",
          "options": [
            "Expert knowledge / thorough familiarity",
            "The innermost secret",
            "Confirming The Dojo / sacred place of the Way",
            "Devoted study and self-improvement"
          ],
          "correctAnswer": "Expert knowledge / thorough familiarity"
        },
        {
          "id": "u30_l2_2",
          "type": "spell",
          "prompt": "精通",
          "furigana": "せいつう",
          "romaji": "seitsuu",
          "english": "Build 'Expert knowledge / thorough familiarity'",
          "audioText": "せいつう",
          "tileBank": [
            "せ",
            "い",
            "み",
            "て",
            "ち",
            "ん",
            "う",
            "つ"
          ],
          "correctAnswer": "せいつう"
        },
        {
          "id": "u30_l2_3",
          "type": "cloze",
          "prompt": "私は達人がすきです",
          "furigana": "わたしはたつじんがすきです",
          "romaji": "Watashi wa tatsujin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Master / expert practitioner.",
          "audioText": "達人",
          "clozeSentence": "これは達人 {{BLANK}} す。",
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
          "id": "u30_l2_4",
          "type": "scramble",
          "prompt": "これは達人です",
          "furigana": "これはたつじんです",
          "romaji": "Kore wa tatsujin desu.",
          "english": "This is Master / expert practitioner.",
          "audioText": "これは達人です",
          "scrambleTokens": [
            "達人",
            "です",
            "ではありません",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "達人",
            "です"
          ],
          "correctAnswer": "これは達人です"
        },
        {
          "id": "u30_l2_5",
          "type": "speak",
          "prompt": "神髄",
          "furigana": "しんずい",
          "romaji": "shinzui",
          "english": "Pronounce: True essence / quintessential core",
          "audioText": "しんずい",
          "targetSpeech": "神髄",
          "options": [
            "True essence / quintessential core",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "神髄"
        },
        {
          "id": "u30_l2_6",
          "type": "dictate",
          "prompt": "神髄をお願いします",
          "furigana": "しんずいをおねがいします",
          "romaji": "shinzui o onegaishimasu.",
          "english": "True essence / quintessential core, please.",
          "audioText": "神髄をお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "です",
            "を",
            "神髄"
          ],
          "dictateSolution": [
            "神髄",
            "を",
            "お願いします"
          ],
          "correctAnswer": "神髄をお願いします"
        },
        {
          "id": "u30_l2_7",
          "type": "match",
          "prompt": "精通・達人・神髄・修練",
          "furigana": "せいつう・たつじん・しんずい・しゅうれん",
          "romaji": "seitsuu, tatsujin, shinzui, shuuren",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せいつう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "精通",
              "right": "Expert knowledge / thorough familiarity",
              "furigana": "せいつう",
              "romaji": "seitsuu"
            },
            {
              "id": "p_1",
              "left": "達人",
              "right": "Master / expert practitioner",
              "furigana": "たつじん",
              "romaji": "tatsujin"
            },
            {
              "id": "p_2",
              "left": "神髄",
              "right": "True essence / quintessential core",
              "furigana": "しんずい",
              "romaji": "shinzui"
            },
            {
              "id": "p_3",
              "left": "修練",
              "right": "Rigorous training / spiritual discipline",
              "furigana": "しゅうれん",
              "romaji": "shuuren"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l2_8",
          "type": "dialogue",
          "prompt": "奥義の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "奥義の準備はできていますか？",
          "furigana": "奥義の準備はできていますか？",
          "romaji": "ougi no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Ultimate secrets / esoteric mystery ready?",
          "audioText": "奥義の準備はできていますか？",
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
      "id": "u30_l3",
      "unitId": "unit_30",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Rigorous training / spiritual discipline & Zenith / summit of achievement",
      "titleJp": "修練・頂点",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "修練",
        "頂点",
        "貫禄"
      ],
      "kanjiKeywords": [
        "修",
        "練",
        "頂",
        "点",
        "貫",
        "禄"
      ],
      "items": [
        {
          "id": "u30_l3_1",
          "type": "listen",
          "prompt": "修練",
          "furigana": "しゅうれん",
          "romaji": "shuuren",
          "english": "Rigorous training / spiritual discipline",
          "audioText": "しゅうれん",
          "options": [
            "Confirming Full initiation and complete mastery",
            "Confirming True essence / quintessential core",
            "Rigorous training / spiritual discipline",
            "Confirming Full initiation and complete mastery"
          ],
          "correctAnswer": "Rigorous training / spiritual discipline"
        },
        {
          "id": "u30_l3_2",
          "type": "spell",
          "prompt": "修練",
          "furigana": "しゅうれん",
          "romaji": "shuuren",
          "english": "Build 'Rigorous training / spiritual discipline'",
          "audioText": "しゅうれん",
          "tileBank": [
            "う",
            "く",
            "り",
            "れ",
            "ん",
            "ゅ",
            "ぬ",
            "し"
          ],
          "correctAnswer": "しゅうれん"
        },
        {
          "id": "u30_l3_3",
          "type": "cloze",
          "prompt": "私は頂点がすきです",
          "furigana": "わたしはちょうてんがすきです",
          "romaji": "Watashi wa chouten ga suki desu.",
          "english": "Fill in the blank with the correct particle for Zenith / summit of achievement.",
          "audioText": "頂点",
          "clozeSentence": "これは頂点 {{BLANK}} す。",
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
          "id": "u30_l3_4",
          "type": "scramble",
          "prompt": "これは頂点です",
          "furigana": "これはちょうてんです",
          "romaji": "Kore wa chouten desu.",
          "english": "This is Zenith / summit of achievement.",
          "audioText": "これは頂点です",
          "scrambleTokens": [
            "それ",
            "これは",
            "ではありません",
            "頂点",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "頂点",
            "です"
          ],
          "correctAnswer": "これは頂点です"
        },
        {
          "id": "u30_l3_5",
          "type": "speak",
          "prompt": "貫禄",
          "furigana": "かんろく",
          "romaji": "kanroku",
          "english": "Pronounce: Dignity / imposing presence",
          "audioText": "かんろく",
          "targetSpeech": "貫禄",
          "options": [
            "Dignity / imposing presence",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "貫禄"
        },
        {
          "id": "u30_l3_6",
          "type": "dictate",
          "prompt": "貫禄をお願いします",
          "furigana": "かんろくをおねがいします",
          "romaji": "kanroku o onegaishimasu.",
          "english": "Dignity / imposing presence, please.",
          "audioText": "貫禄をお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "を",
            "ありがとう",
            "貫禄"
          ],
          "dictateSolution": [
            "貫禄",
            "を",
            "お願いします"
          ],
          "correctAnswer": "貫禄をお願いします"
        },
        {
          "id": "u30_l3_7",
          "type": "match",
          "prompt": "修練・頂点・貫禄・大成",
          "furigana": "しゅうれん・ちょうてん・かんろく・たいせい",
          "romaji": "shuuren, chouten, kanroku, taisei",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しゅうれん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "修練",
              "right": "Rigorous training / spiritual discipline",
              "furigana": "しゅうれん",
              "romaji": "shuuren"
            },
            {
              "id": "p_1",
              "left": "頂点",
              "right": "Zenith / summit of achievement",
              "furigana": "ちょうてん",
              "romaji": "chouten"
            },
            {
              "id": "p_2",
              "left": "貫禄",
              "right": "Dignity / imposing presence",
              "furigana": "かんろく",
              "romaji": "kanroku"
            },
            {
              "id": "p_3",
              "left": "大成",
              "right": "Great culmination / successful achievement",
              "furigana": "たいせい",
              "romaji": "taisei"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l3_8",
          "type": "dialogue",
          "prompt": "免許皆伝についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "免許皆伝についてどう思われますか？",
          "furigana": "免許皆伝についてどう思われますか？",
          "romaji": "menkyo kaiden ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Full initiation and complete mastery?",
          "audioText": "免許皆伝についてどう思われますか？",
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
      "id": "u30_l4",
      "unitId": "unit_30",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Great culmination / successful achievement & Devoted study and self-improvement",
      "titleJp": "大成・研鑽",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "大成",
        "研鑽",
        "不屈"
      ],
      "kanjiKeywords": [
        "大",
        "成",
        "研",
        "鑽",
        "不",
        "屈"
      ],
      "items": [
        {
          "id": "u30_l4_1",
          "type": "listen",
          "prompt": "大成",
          "furigana": "たいせい",
          "romaji": "taisei",
          "english": "Great culmination / successful achievement",
          "audioText": "たいせい",
          "options": [
            "Confirming Grand master / instructor",
            "Confirming Zenith / summit of achievement",
            "Confirming Ultimate secrets / esoteric mystery",
            "Great culmination / successful achievement"
          ],
          "correctAnswer": "Great culmination / successful achievement"
        },
        {
          "id": "u30_l4_2",
          "type": "spell",
          "prompt": "大成",
          "furigana": "たいせい",
          "romaji": "taisei",
          "english": "Build 'Great culmination / successful achievement'",
          "audioText": "たいせい",
          "tileBank": [
            "い",
            "ほ",
            "い",
            "た",
            "よ",
            "ん",
            "ろ",
            "せ"
          ],
          "correctAnswer": "たいせい"
        },
        {
          "id": "u30_l4_3",
          "type": "cloze",
          "prompt": "私は研鑽がすきです",
          "furigana": "わたしはけんさんがすきです",
          "romaji": "Watashi wa kensan ga suki desu.",
          "english": "Fill in the blank with the correct particle for Devoted study and self-improvement.",
          "audioText": "研鑽",
          "clozeSentence": "これは研鑽 {{BLANK}} す。",
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
          "id": "u30_l4_4",
          "type": "scramble",
          "prompt": "これは研鑽です",
          "furigana": "これはけんさんです",
          "romaji": "Kore wa kensan desu.",
          "english": "This is Devoted study and self-improvement.",
          "audioText": "これは研鑽です",
          "scrambleTokens": [
            "これは",
            "です",
            "ではありません",
            "研鑽",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "研鑽",
            "です"
          ],
          "correctAnswer": "これは研鑽です"
        },
        {
          "id": "u30_l4_5",
          "type": "speak",
          "prompt": "不屈",
          "furigana": "ふくつ",
          "romaji": "fukutsu",
          "english": "Pronounce: Indomitable / unyielding spirit",
          "audioText": "ふくつ",
          "targetSpeech": "不屈",
          "options": [
            "Indomitable / unyielding spirit",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "不屈"
        },
        {
          "id": "u30_l4_6",
          "type": "dictate",
          "prompt": "不屈をお願いします",
          "furigana": "ふくつをおねがいします",
          "romaji": "fukutsu o onegaishimasu.",
          "english": "Indomitable / unyielding spirit, please.",
          "audioText": "不屈をお願いします",
          "dictateTokens": [
            "不屈",
            "お願いします",
            "を",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "不屈",
            "を",
            "お願いします"
          ],
          "correctAnswer": "不屈をお願いします"
        },
        {
          "id": "u30_l4_7",
          "type": "match",
          "prompt": "大成・研鑽・不屈・伝承",
          "furigana": "たいせい・けんさん・ふくつ・でんしょう",
          "romaji": "taisei, kensan, fukutsu, denshou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "たいせい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "大成",
              "right": "Great culmination / successful achievement",
              "furigana": "たいせい",
              "romaji": "taisei"
            },
            {
              "id": "p_1",
              "left": "研鑽",
              "right": "Devoted study and self-improvement",
              "furigana": "けんさん",
              "romaji": "kensan"
            },
            {
              "id": "p_2",
              "left": "不屈",
              "right": "Indomitable / unyielding spirit",
              "furigana": "ふくつ",
              "romaji": "fukutsu"
            },
            {
              "id": "p_3",
              "left": "伝承",
              "right": "Passing down of oral tradition",
              "furigana": "でんしょう",
              "romaji": "denshou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l4_8",
          "type": "dialogue",
          "prompt": "次は精通に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は精通に進みましょう。",
          "furigana": "次は精通に進みましょう。",
          "romaji": "Tsugi wa seitsuu ni susumimashou.",
          "english": "Speaker: Let's proceed to Expert knowledge / thorough familiarity next.",
          "audioText": "次は精通に進みましょう。",
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
      "id": "u30_l5",
      "unitId": "unit_30",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Passing down of oral tradition & The innermost secret",
      "titleJp": "伝承・極意",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "伝承",
        "極意",
        "道場"
      ],
      "kanjiKeywords": [
        "伝",
        "承",
        "極",
        "意",
        "道",
        "場"
      ],
      "items": [
        {
          "id": "u30_l5_1",
          "type": "listen",
          "prompt": "伝承",
          "furigana": "でんしょう",
          "romaji": "denshou",
          "english": "Passing down of oral tradition",
          "audioText": "でんしょう",
          "options": [
            "Passing down of oral tradition",
            "Confirming Indomitable / unyielding spirit",
            "Confirming Great culmination / successful achievement",
            "Confirming Grand master / instructor"
          ],
          "correctAnswer": "Passing down of oral tradition"
        },
        {
          "id": "u30_l5_2",
          "type": "spell",
          "prompt": "伝承",
          "furigana": "でんしょう",
          "romaji": "denshou",
          "english": "Build 'Passing down of oral tradition'",
          "audioText": "でんしょう",
          "tileBank": [
            "く",
            "し",
            "ん",
            "ょ",
            "に",
            "せ",
            "う",
            "で"
          ],
          "correctAnswer": "でんしょう"
        },
        {
          "id": "u30_l5_3",
          "type": "cloze",
          "prompt": "私は極意がすきです",
          "furigana": "わたしはごくいがすきです",
          "romaji": "Watashi wa gokui ga suki desu.",
          "english": "Fill in the blank with the correct particle for The innermost secret.",
          "audioText": "極意",
          "clozeSentence": "これは極意 {{BLANK}} す。",
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
          "id": "u30_l5_4",
          "type": "scramble",
          "prompt": "これは極意です",
          "furigana": "これはごくいです",
          "romaji": "Kore wa gokui desu.",
          "english": "This is The innermost secret.",
          "audioText": "これは極意です",
          "scrambleTokens": [
            "極意",
            "ではありません",
            "これは",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "極意",
            "です"
          ],
          "correctAnswer": "これは極意です"
        },
        {
          "id": "u30_l5_5",
          "type": "speak",
          "prompt": "道場",
          "furigana": "どうじょう",
          "romaji": "doujou",
          "english": "Pronounce: The Dojo / sacred place of the Way",
          "audioText": "どうじょう",
          "targetSpeech": "道場",
          "options": [
            "The Dojo / sacred place of the Way",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "道場"
        },
        {
          "id": "u30_l5_6",
          "type": "dictate",
          "prompt": "道場をお願いします",
          "furigana": "どうじょうをおねがいします",
          "romaji": "doujou o onegaishimasu.",
          "english": "The Dojo / sacred place of the Way, please.",
          "audioText": "道場をお願いします",
          "dictateTokens": [
            "道場",
            "お願いします",
            "ありがとう",
            "を",
            "です"
          ],
          "dictateSolution": [
            "道場",
            "を",
            "お願いします"
          ],
          "correctAnswer": "道場をお願いします"
        },
        {
          "id": "u30_l5_7",
          "type": "match",
          "prompt": "伝承・極意・道場・師範の確認",
          "furigana": "でんしょう・ごくい・どうじょう・しはんのかくにん",
          "romaji": "denshou, gokui, doujou, shihan no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "でんしょう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "伝承",
              "right": "Passing down of oral tradition",
              "furigana": "でんしょう",
              "romaji": "denshou"
            },
            {
              "id": "p_1",
              "left": "極意",
              "right": "The innermost secret",
              "furigana": "ごくい",
              "romaji": "gokui"
            },
            {
              "id": "p_2",
              "left": "道場",
              "right": "The Dojo / sacred place of the Way",
              "furigana": "どうじょう",
              "romaji": "doujou"
            },
            {
              "id": "p_3",
              "left": "師範の確認",
              "right": "Confirming Grand master / instructor",
              "furigana": "しはんのかくにん",
              "romaji": "shihan no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l5_8",
          "type": "dialogue",
          "prompt": "師範について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "師範について教えていただけますか？",
          "furigana": "師範について教えていただけますか？",
          "romaji": "shihan ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Grand master / instructor?",
          "audioText": "師範について教えていただけますか？",
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
      "id": "u30_l6",
      "unitId": "unit_30",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Grand master / instructor & Confirming Ultimate secrets / esoteric mystery",
      "titleJp": "師範の確認・奥義の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "師範の確認",
        "奥義の確認",
        "免許皆伝の確認"
      ],
      "kanjiKeywords": [
        "師",
        "範",
        "確",
        "認",
        "奥",
        "義",
        "確",
        "認",
        "免",
        "許",
        "皆",
        "伝",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u30_l6_1",
          "type": "listen",
          "prompt": "師範の確認",
          "furigana": "しはんのかくにん",
          "romaji": "shihan no kakunin",
          "english": "Confirming Grand master / instructor",
          "audioText": "しはんのかくにん",
          "options": [
            "Confirming Full initiation and complete mastery",
            "Confirming Grand master / instructor",
            "Passing down of oral tradition",
            "Confirming The Dojo / sacred place of the Way"
          ],
          "correctAnswer": "Confirming Grand master / instructor"
        },
        {
          "id": "u30_l6_2",
          "type": "spell",
          "prompt": "師範の確認",
          "furigana": "しはんのかくにん",
          "romaji": "shihan no kakunin",
          "english": "Build 'Confirming Grand master / instructor'",
          "audioText": "しはんのかくにん",
          "tileBank": [
            "か",
            "ん",
            "く",
            "し",
            "は",
            "の",
            "ん",
            "に"
          ],
          "correctAnswer": "しはんのかくにん"
        },
        {
          "id": "u30_l6_3",
          "type": "cloze",
          "prompt": "私は奥義の確認がすきです",
          "furigana": "わたしはおうぎのかくにんがすきです",
          "romaji": "Watashi wa ougi no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Ultimate secrets / esoteric mystery.",
          "audioText": "奥義の確認",
          "clozeSentence": "これは奥義の確認 {{BLANK}} す。",
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
          "id": "u30_l6_4",
          "type": "scramble",
          "prompt": "これは奥義の確認です",
          "furigana": "これはおうぎのかくにんです",
          "romaji": "Kore wa ougi no kakunin desu.",
          "english": "This is Confirming Ultimate secrets / esoteric mystery.",
          "audioText": "これは奥義の確認です",
          "scrambleTokens": [
            "ではありません",
            "奥義の確認",
            "それ",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "奥義の確認",
            "です"
          ],
          "correctAnswer": "これは奥義の確認です"
        },
        {
          "id": "u30_l6_5",
          "type": "speak",
          "prompt": "免許皆伝の確認",
          "furigana": "めんきょかいでんのかくにん",
          "romaji": "menkyo kaiden no kakunin",
          "english": "Pronounce: Confirming Full initiation and complete mastery",
          "audioText": "めんきょかいでんのかくにん",
          "targetSpeech": "免許皆伝の確認",
          "options": [
            "Confirming Full initiation and complete mastery",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "免許皆伝の確認"
        },
        {
          "id": "u30_l6_6",
          "type": "dictate",
          "prompt": "免許皆伝の確認をお願いします",
          "furigana": "めんきょかいでんのかくにんをおねがいします",
          "romaji": "menkyo kaiden no kakunin o onegaishimasu.",
          "english": "Confirming Full initiation and complete mastery, please.",
          "audioText": "免許皆伝の確認をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "ありがとう",
            "免許皆伝の確認",
            "お願いします"
          ],
          "dictateSolution": [
            "免許皆伝の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "免許皆伝の確認をお願いします"
        },
        {
          "id": "u30_l6_7",
          "type": "match",
          "prompt": "師範の確認・奥義の確認・免許皆伝の確認・精通の確認",
          "furigana": "しはんのかくにん・おうぎのかくにん・めんきょかいでんのかくにん・せいつうのかくにん",
          "romaji": "shihan no kakunin, ougi no kakunin, menkyo kaiden no kakunin, seitsuu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しはんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "師範の確認",
              "right": "Confirming Grand master / instructor",
              "furigana": "しはんのかくにん",
              "romaji": "shihan no kakunin"
            },
            {
              "id": "p_1",
              "left": "奥義の確認",
              "right": "Confirming Ultimate secrets / esoteric mystery",
              "furigana": "おうぎのかくにん",
              "romaji": "ougi no kakunin"
            },
            {
              "id": "p_2",
              "left": "免許皆伝の確認",
              "right": "Confirming Full initiation and complete mastery",
              "furigana": "めんきょかいでんのかくにん",
              "romaji": "menkyo kaiden no kakunin"
            },
            {
              "id": "p_3",
              "left": "精通の確認",
              "right": "Confirming Expert knowledge / thorough familiarity",
              "furigana": "せいつうのかくにん",
              "romaji": "seitsuu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l6_8",
          "type": "dialogue",
          "prompt": "奥義の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "奥義の準備はできていますか？",
          "furigana": "奥義の準備はできていますか？",
          "romaji": "ougi no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Ultimate secrets / esoteric mystery ready?",
          "audioText": "奥義の準備はできていますか？",
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
      "id": "u30_l7",
      "unitId": "unit_30",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Expert knowledge / thorough familiarity & Confirming Master / expert practitioner",
      "titleJp": "精通の確認・達人の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "精通の確認",
        "達人の確認",
        "神髄の確認"
      ],
      "kanjiKeywords": [
        "精",
        "通",
        "確",
        "認",
        "達",
        "人",
        "確",
        "認",
        "神",
        "髄",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u30_l7_1",
          "type": "listen",
          "prompt": "精通の確認",
          "furigana": "せいつうのかくにん",
          "romaji": "seitsuu no kakunin",
          "english": "Confirming Expert knowledge / thorough familiarity",
          "audioText": "せいつうのかくにん",
          "options": [
            "Confirming Master / expert practitioner",
            "Confirming Grand master / instructor",
            "Confirming Expert knowledge / thorough familiarity",
            "Confirming Master / expert practitioner"
          ],
          "correctAnswer": "Confirming Expert knowledge / thorough familiarity"
        },
        {
          "id": "u30_l7_2",
          "type": "spell",
          "prompt": "精通の確認",
          "furigana": "せいつうのかくにん",
          "romaji": "seitsuu no kakunin",
          "english": "Build 'Confirming Expert knowledge / thorough familiarity'",
          "audioText": "せいつうのかくにん",
          "tileBank": [
            "つ",
            "く",
            "う",
            "の",
            "せ",
            "か",
            "い",
            "に"
          ],
          "correctAnswer": "せいつうのかくにん"
        },
        {
          "id": "u30_l7_3",
          "type": "cloze",
          "prompt": "私は達人の確認がすきです",
          "furigana": "わたしはたつじんのかくにんがすきです",
          "romaji": "Watashi wa tatsujin no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Master / expert practitioner.",
          "audioText": "達人の確認",
          "clozeSentence": "これは達人の確認 {{BLANK}} す。",
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
          "id": "u30_l7_4",
          "type": "scramble",
          "prompt": "これは達人の確認です",
          "furigana": "これはたつじんのかくにんです",
          "romaji": "Kore wa tatsujin no kakunin desu.",
          "english": "This is Confirming Master / expert practitioner.",
          "audioText": "これは達人の確認です",
          "scrambleTokens": [
            "ではありません",
            "達人の確認",
            "これは",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "達人の確認",
            "です"
          ],
          "correctAnswer": "これは達人の確認です"
        },
        {
          "id": "u30_l7_5",
          "type": "speak",
          "prompt": "神髄の確認",
          "furigana": "しんずいのかくにん",
          "romaji": "shinzui no kakunin",
          "english": "Pronounce: Confirming True essence / quintessential core",
          "audioText": "しんずいのかくにん",
          "targetSpeech": "神髄の確認",
          "options": [
            "Confirming True essence / quintessential core",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "神髄の確認"
        },
        {
          "id": "u30_l7_6",
          "type": "dictate",
          "prompt": "神髄の確認をお願いします",
          "furigana": "しんずいのかくにんをおねがいします",
          "romaji": "shinzui no kakunin o onegaishimasu.",
          "english": "Confirming True essence / quintessential core, please.",
          "audioText": "神髄の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "を",
            "です",
            "神髄の確認",
            "ありがとう"
          ],
          "dictateSolution": [
            "神髄の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "神髄の確認をお願いします"
        },
        {
          "id": "u30_l7_7",
          "type": "match",
          "prompt": "精通の確認・達人の確認・神髄の確認・修練の確認",
          "furigana": "せいつうのかくにん・たつじんのかくにん・しんずいのかくにん・しゅうれんのかくにん",
          "romaji": "seitsuu no kakunin, tatsujin no kakunin, shinzui no kakunin, shuuren no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せいつうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "精通の確認",
              "right": "Confirming Expert knowledge / thorough familiarity",
              "furigana": "せいつうのかくにん",
              "romaji": "seitsuu no kakunin"
            },
            {
              "id": "p_1",
              "left": "達人の確認",
              "right": "Confirming Master / expert practitioner",
              "furigana": "たつじんのかくにん",
              "romaji": "tatsujin no kakunin"
            },
            {
              "id": "p_2",
              "left": "神髄の確認",
              "right": "Confirming True essence / quintessential core",
              "furigana": "しんずいのかくにん",
              "romaji": "shinzui no kakunin"
            },
            {
              "id": "p_3",
              "left": "修練の確認",
              "right": "Confirming Rigorous training / spiritual discipline",
              "furigana": "しゅうれんのかくにん",
              "romaji": "shuuren no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l7_8",
          "type": "dialogue",
          "prompt": "免許皆伝についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "免許皆伝についてどう思われますか？",
          "furigana": "免許皆伝についてどう思われますか？",
          "romaji": "menkyo kaiden ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Full initiation and complete mastery?",
          "audioText": "免許皆伝についてどう思われますか？",
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
      "id": "u30_l8",
      "unitId": "unit_30",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Rigorous training / spiritual discipline & Confirming Zenith / summit of achievement",
      "titleJp": "修練の確認・頂点の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "修練の確認",
        "頂点の確認",
        "貫禄の確認"
      ],
      "kanjiKeywords": [
        "修",
        "練",
        "確",
        "認",
        "頂",
        "点",
        "確",
        "認",
        "貫",
        "禄",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u30_l8_1",
          "type": "listen",
          "prompt": "修練の確認",
          "furigana": "しゅうれんのかくにん",
          "romaji": "shuuren no kakunin",
          "english": "Confirming Rigorous training / spiritual discipline",
          "audioText": "しゅうれんのかくにん",
          "options": [
            "Confirming Full initiation and complete mastery",
            "Confirming Passing down of oral tradition",
            "Confirming Expert knowledge / thorough familiarity",
            "Confirming Rigorous training / spiritual discipline"
          ],
          "correctAnswer": "Confirming Rigorous training / spiritual discipline"
        },
        {
          "id": "u30_l8_2",
          "type": "spell",
          "prompt": "修練の確認",
          "furigana": "しゅうれんのかくにん",
          "romaji": "shuuren no kakunin",
          "english": "Build 'Confirming Rigorous training / spiritual discipline'",
          "audioText": "しゅうれんのかくにん",
          "tileBank": [
            "の",
            "れ",
            "く",
            "ゅ",
            "ん",
            "う",
            "し",
            "か"
          ],
          "correctAnswer": "しゅうれんのかくにん"
        },
        {
          "id": "u30_l8_3",
          "type": "cloze",
          "prompt": "私は頂点の確認がすきです",
          "furigana": "わたしはちょうてんのかくにんがすきです",
          "romaji": "Watashi wa chouten no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Zenith / summit of achievement.",
          "audioText": "頂点の確認",
          "clozeSentence": "これは頂点の確認 {{BLANK}} す。",
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
          "id": "u30_l8_4",
          "type": "scramble",
          "prompt": "これは頂点の確認です",
          "furigana": "これはちょうてんのかくにんです",
          "romaji": "Kore wa chouten no kakunin desu.",
          "english": "This is Confirming Zenith / summit of achievement.",
          "audioText": "これは頂点の確認です",
          "scrambleTokens": [
            "頂点の確認",
            "です",
            "ではありません",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "頂点の確認",
            "です"
          ],
          "correctAnswer": "これは頂点の確認です"
        },
        {
          "id": "u30_l8_5",
          "type": "speak",
          "prompt": "貫禄の確認",
          "furigana": "かんろくのかくにん",
          "romaji": "kanroku no kakunin",
          "english": "Pronounce: Confirming Dignity / imposing presence",
          "audioText": "かんろくのかくにん",
          "targetSpeech": "貫禄の確認",
          "options": [
            "Confirming Dignity / imposing presence",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "貫禄の確認"
        },
        {
          "id": "u30_l8_6",
          "type": "dictate",
          "prompt": "貫禄の確認をお願いします",
          "furigana": "かんろくのかくにんをおねがいします",
          "romaji": "kanroku no kakunin o onegaishimasu.",
          "english": "Confirming Dignity / imposing presence, please.",
          "audioText": "貫禄の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "貫禄の確認",
            "です",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "貫禄の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "貫禄の確認をお願いします"
        },
        {
          "id": "u30_l8_7",
          "type": "match",
          "prompt": "修練の確認・頂点の確認・貫禄の確認・大成の確認",
          "furigana": "しゅうれんのかくにん・ちょうてんのかくにん・かんろくのかくにん・たいせいのかくにん",
          "romaji": "shuuren no kakunin, chouten no kakunin, kanroku no kakunin, taisei no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しゅうれんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "修練の確認",
              "right": "Confirming Rigorous training / spiritual discipline",
              "furigana": "しゅうれんのかくにん",
              "romaji": "shuuren no kakunin"
            },
            {
              "id": "p_1",
              "left": "頂点の確認",
              "right": "Confirming Zenith / summit of achievement",
              "furigana": "ちょうてんのかくにん",
              "romaji": "chouten no kakunin"
            },
            {
              "id": "p_2",
              "left": "貫禄の確認",
              "right": "Confirming Dignity / imposing presence",
              "furigana": "かんろくのかくにん",
              "romaji": "kanroku no kakunin"
            },
            {
              "id": "p_3",
              "left": "大成の確認",
              "right": "Confirming Great culmination / successful achievement",
              "furigana": "たいせいのかくにん",
              "romaji": "taisei no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l8_8",
          "type": "dialogue",
          "prompt": "次は精通に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は精通に進みましょう。",
          "furigana": "次は精通に進みましょう。",
          "romaji": "Tsugi wa seitsuu ni susumimashou.",
          "english": "Speaker: Let's proceed to Expert knowledge / thorough familiarity next.",
          "audioText": "次は精通に進みましょう。",
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
      "id": "u30_l9",
      "unitId": "unit_30",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Great culmination / successful achievement & Confirming Devoted study and self-improvement",
      "titleJp": "大成の確認・研鑽の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "大成の確認",
        "研鑽の確認",
        "不屈の確認"
      ],
      "kanjiKeywords": [
        "大",
        "成",
        "確",
        "認",
        "研",
        "鑽",
        "確",
        "認",
        "不",
        "屈",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u30_l9_1",
          "type": "listen",
          "prompt": "大成の確認",
          "furigana": "たいせいのかくにん",
          "romaji": "taisei no kakunin",
          "english": "Confirming Great culmination / successful achievement",
          "audioText": "たいせいのかくにん",
          "options": [
            "Full initiation and complete mastery",
            "Ultimate secrets / esoteric mystery",
            "Confirming Great culmination / successful achievement",
            "Confirming True essence / quintessential core"
          ],
          "correctAnswer": "Confirming Great culmination / successful achievement"
        },
        {
          "id": "u30_l9_2",
          "type": "spell",
          "prompt": "大成の確認",
          "furigana": "たいせいのかくにん",
          "romaji": "taisei no kakunin",
          "english": "Build 'Confirming Great culmination / successful achievement'",
          "audioText": "たいせいのかくにん",
          "tileBank": [
            "の",
            "い",
            "た",
            "い",
            "せ",
            "か",
            "に",
            "く"
          ],
          "correctAnswer": "たいせいのかくにん"
        },
        {
          "id": "u30_l9_3",
          "type": "cloze",
          "prompt": "私は研鑽の確認がすきです",
          "furigana": "わたしはけんさんのかくにんがすきです",
          "romaji": "Watashi wa kensan no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Devoted study and self-improvement.",
          "audioText": "研鑽の確認",
          "clozeSentence": "これは研鑽の確認 {{BLANK}} す。",
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
          "id": "u30_l9_4",
          "type": "scramble",
          "prompt": "これは研鑽の確認です",
          "furigana": "これはけんさんのかくにんです",
          "romaji": "Kore wa kensan no kakunin desu.",
          "english": "This is Confirming Devoted study and self-improvement.",
          "audioText": "これは研鑽の確認です",
          "scrambleTokens": [
            "研鑽の確認",
            "です",
            "これは",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "研鑽の確認",
            "です"
          ],
          "correctAnswer": "これは研鑽の確認です"
        },
        {
          "id": "u30_l9_5",
          "type": "speak",
          "prompt": "不屈の確認",
          "furigana": "ふくつのかくにん",
          "romaji": "fukutsu no kakunin",
          "english": "Pronounce: Confirming Indomitable / unyielding spirit",
          "audioText": "ふくつのかくにん",
          "targetSpeech": "不屈の確認",
          "options": [
            "Confirming Indomitable / unyielding spirit",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "不屈の確認"
        },
        {
          "id": "u30_l9_6",
          "type": "dictate",
          "prompt": "不屈の確認をお願いします",
          "furigana": "ふくつのかくにんをおねがいします",
          "romaji": "fukutsu no kakunin o onegaishimasu.",
          "english": "Confirming Indomitable / unyielding spirit, please.",
          "audioText": "不屈の確認をお願いします",
          "dictateTokens": [
            "不屈の確認",
            "です",
            "を",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "不屈の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "不屈の確認をお願いします"
        },
        {
          "id": "u30_l9_7",
          "type": "match",
          "prompt": "大成の確認・研鑽の確認・不屈の確認・伝承の確認",
          "furigana": "たいせいのかくにん・けんさんのかくにん・ふくつのかくにん・でんしょうのかくにん",
          "romaji": "taisei no kakunin, kensan no kakunin, fukutsu no kakunin, denshou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "たいせいのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "大成の確認",
              "right": "Confirming Great culmination / successful achievement",
              "furigana": "たいせいのかくにん",
              "romaji": "taisei no kakunin"
            },
            {
              "id": "p_1",
              "left": "研鑽の確認",
              "right": "Confirming Devoted study and self-improvement",
              "furigana": "けんさんのかくにん",
              "romaji": "kensan no kakunin"
            },
            {
              "id": "p_2",
              "left": "不屈の確認",
              "right": "Confirming Indomitable / unyielding spirit",
              "furigana": "ふくつのかくにん",
              "romaji": "fukutsu no kakunin"
            },
            {
              "id": "p_3",
              "left": "伝承の確認",
              "right": "Confirming Passing down of oral tradition",
              "furigana": "でんしょうのかくにん",
              "romaji": "denshou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l9_8",
          "type": "dialogue",
          "prompt": "師範について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "師範について教えていただけますか？",
          "furigana": "師範について教えていただけますか？",
          "romaji": "shihan ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Grand master / instructor?",
          "audioText": "師範について教えていただけますか？",
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
      "id": "u30_l10",
      "unitId": "unit_30",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Passing down of oral tradition & Confirming The innermost secret",
      "titleJp": "伝承の確認・極意の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "伝承の確認",
        "極意の確認",
        "道場の確認"
      ],
      "kanjiKeywords": [
        "伝",
        "承",
        "確",
        "認",
        "極",
        "意",
        "確",
        "認",
        "道",
        "場",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u30_l10_1",
          "type": "listen",
          "prompt": "伝承の確認",
          "furigana": "でんしょうのかくにん",
          "romaji": "denshou no kakunin",
          "english": "Confirming Passing down of oral tradition",
          "audioText": "でんしょうのかくにん",
          "options": [
            "Confirming Passing down of oral tradition",
            "Devoted study and self-improvement",
            "Ultimate secrets / esoteric mystery",
            "Rigorous training / spiritual discipline"
          ],
          "correctAnswer": "Confirming Passing down of oral tradition"
        },
        {
          "id": "u30_l10_2",
          "type": "spell",
          "prompt": "伝承の確認",
          "furigana": "でんしょうのかくにん",
          "romaji": "denshou no kakunin",
          "english": "Build 'Confirming Passing down of oral tradition'",
          "audioText": "でんしょうのかくにん",
          "tileBank": [
            "く",
            "で",
            "の",
            "う",
            "し",
            "ん",
            "か",
            "ょ"
          ],
          "correctAnswer": "でんしょうのかくにん"
        },
        {
          "id": "u30_l10_3",
          "type": "cloze",
          "prompt": "私は極意の確認がすきです",
          "furigana": "わたしはごくいのかくにんがすきです",
          "romaji": "Watashi wa gokui no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming The innermost secret.",
          "audioText": "極意の確認",
          "clozeSentence": "これは極意の確認 {{BLANK}} す。",
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
          "id": "u30_l10_4",
          "type": "scramble",
          "prompt": "これは極意の確認です",
          "furigana": "これはごくいのかくにんです",
          "romaji": "Kore wa gokui no kakunin desu.",
          "english": "This is Confirming The innermost secret.",
          "audioText": "これは極意の確認です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "極意の確認",
            "です",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "極意の確認",
            "です"
          ],
          "correctAnswer": "これは極意の確認です"
        },
        {
          "id": "u30_l10_5",
          "type": "speak",
          "prompt": "道場の確認",
          "furigana": "どうじょうのかくにん",
          "romaji": "doujou no kakunin",
          "english": "Pronounce: Confirming The Dojo / sacred place of the Way",
          "audioText": "どうじょうのかくにん",
          "targetSpeech": "道場の確認",
          "options": [
            "Confirming The Dojo / sacred place of the Way",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "道場の確認"
        },
        {
          "id": "u30_l10_6",
          "type": "dictate",
          "prompt": "道場の確認をお願いします",
          "furigana": "どうじょうのかくにんをおねがいします",
          "romaji": "doujou no kakunin o onegaishimasu.",
          "english": "Confirming The Dojo / sacred place of the Way, please.",
          "audioText": "道場の確認をお願いします",
          "dictateTokens": [
            "道場の確認",
            "を",
            "です",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "道場の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "道場の確認をお願いします"
        },
        {
          "id": "u30_l10_7",
          "type": "match",
          "prompt": "伝承の確認・極意の確認・道場の確認・師範の確認",
          "furigana": "でんしょうのかくにん・ごくいのかくにん・どうじょうのかくにん・しはんのかくにん",
          "romaji": "denshou no kakunin, gokui no kakunin, doujou no kakunin, shihan no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "でんしょうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "伝承の確認",
              "right": "Confirming Passing down of oral tradition",
              "furigana": "でんしょうのかくにん",
              "romaji": "denshou no kakunin"
            },
            {
              "id": "p_1",
              "left": "極意の確認",
              "right": "Confirming The innermost secret",
              "furigana": "ごくいのかくにん",
              "romaji": "gokui no kakunin"
            },
            {
              "id": "p_2",
              "left": "道場の確認",
              "right": "Confirming The Dojo / sacred place of the Way",
              "furigana": "どうじょうのかくにん",
              "romaji": "doujou no kakunin"
            },
            {
              "id": "p_3",
              "left": "師範の確認",
              "right": "Confirming Grand master / instructor",
              "furigana": "しはんのかくにん",
              "romaji": "shihan no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l10_8",
          "type": "dialogue",
          "prompt": "奥義の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "奥義の準備はできていますか？",
          "furigana": "奥義の準備はできていますか？",
          "romaji": "ougi no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Ultimate secrets / esoteric mystery ready?",
          "audioText": "奥義の準備はできていますか？",
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
      "id": "u30_l11",
      "unitId": "unit_30",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Grand master / instructor & Confirming Ultimate secrets / esoteric mystery",
      "titleJp": "師範の確認・奥義の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "師範の確認",
        "奥義の確認",
        "免許皆伝の確認"
      ],
      "kanjiKeywords": [
        "師",
        "範",
        "確",
        "認",
        "奥",
        "義",
        "確",
        "認",
        "免",
        "許",
        "皆",
        "伝",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u30_l11_1",
          "type": "listen",
          "prompt": "師範の確認",
          "furigana": "しはんのかくにん",
          "romaji": "shihan no kakunin",
          "english": "Confirming Grand master / instructor",
          "audioText": "しはんのかくにん",
          "options": [
            "Passing down of oral tradition",
            "Confirming Ultimate secrets / esoteric mystery",
            "Confirming Expert knowledge / thorough familiarity",
            "Confirming Grand master / instructor"
          ],
          "correctAnswer": "Confirming Grand master / instructor"
        },
        {
          "id": "u30_l11_2",
          "type": "spell",
          "prompt": "師範の確認",
          "furigana": "しはんのかくにん",
          "romaji": "shihan no kakunin",
          "english": "Build 'Confirming Grand master / instructor'",
          "audioText": "しはんのかくにん",
          "tileBank": [
            "ん",
            "に",
            "ん",
            "は",
            "く",
            "し",
            "の",
            "か"
          ],
          "correctAnswer": "しはんのかくにん"
        },
        {
          "id": "u30_l11_3",
          "type": "cloze",
          "prompt": "私は奥義の確認がすきです",
          "furigana": "わたしはおうぎのかくにんがすきです",
          "romaji": "Watashi wa ougi no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Ultimate secrets / esoteric mystery.",
          "audioText": "奥義の確認",
          "clozeSentence": "これは奥義の確認 {{BLANK}} す。",
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
          "id": "u30_l11_4",
          "type": "scramble",
          "prompt": "これは奥義の確認です",
          "furigana": "これはおうぎのかくにんです",
          "romaji": "Kore wa ougi no kakunin desu.",
          "english": "This is Confirming Ultimate secrets / esoteric mystery.",
          "audioText": "これは奥義の確認です",
          "scrambleTokens": [
            "それ",
            "奥義の確認",
            "ではありません",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "奥義の確認",
            "です"
          ],
          "correctAnswer": "これは奥義の確認です"
        },
        {
          "id": "u30_l11_5",
          "type": "speak",
          "prompt": "免許皆伝の確認",
          "furigana": "めんきょかいでんのかくにん",
          "romaji": "menkyo kaiden no kakunin",
          "english": "Pronounce: Confirming Full initiation and complete mastery",
          "audioText": "めんきょかいでんのかくにん",
          "targetSpeech": "免許皆伝の確認",
          "options": [
            "Confirming Full initiation and complete mastery",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "免許皆伝の確認"
        },
        {
          "id": "u30_l11_6",
          "type": "dictate",
          "prompt": "免許皆伝の確認をお願いします",
          "furigana": "めんきょかいでんのかくにんをおねがいします",
          "romaji": "menkyo kaiden no kakunin o onegaishimasu.",
          "english": "Confirming Full initiation and complete mastery, please.",
          "audioText": "免許皆伝の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "免許皆伝の確認",
            "です",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "免許皆伝の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "免許皆伝の確認をお願いします"
        },
        {
          "id": "u30_l11_7",
          "type": "match",
          "prompt": "師範の確認・奥義の確認・免許皆伝の確認・精通の確認",
          "furigana": "しはんのかくにん・おうぎのかくにん・めんきょかいでんのかくにん・せいつうのかくにん",
          "romaji": "shihan no kakunin, ougi no kakunin, menkyo kaiden no kakunin, seitsuu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しはんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "師範の確認",
              "right": "Confirming Grand master / instructor",
              "furigana": "しはんのかくにん",
              "romaji": "shihan no kakunin"
            },
            {
              "id": "p_1",
              "left": "奥義の確認",
              "right": "Confirming Ultimate secrets / esoteric mystery",
              "furigana": "おうぎのかくにん",
              "romaji": "ougi no kakunin"
            },
            {
              "id": "p_2",
              "left": "免許皆伝の確認",
              "right": "Confirming Full initiation and complete mastery",
              "furigana": "めんきょかいでんのかくにん",
              "romaji": "menkyo kaiden no kakunin"
            },
            {
              "id": "p_3",
              "left": "精通の確認",
              "right": "Confirming Expert knowledge / thorough familiarity",
              "furigana": "せいつうのかくにん",
              "romaji": "seitsuu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l11_8",
          "type": "dialogue",
          "prompt": "免許皆伝についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "免許皆伝についてどう思われますか？",
          "furigana": "免許皆伝についてどう思われますか？",
          "romaji": "menkyo kaiden ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Full initiation and complete mastery?",
          "audioText": "免許皆伝についてどう思われますか？",
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
      "id": "u30_l12",
      "unitId": "unit_30",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Expert knowledge / thorough familiarity & Confirming Master / expert practitioner",
      "titleJp": "精通の確認・達人の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "精通の確認",
        "達人の確認",
        "神髄の確認"
      ],
      "kanjiKeywords": [
        "精",
        "通",
        "確",
        "認",
        "達",
        "人",
        "確",
        "認",
        "神",
        "髄",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u30_l12_1",
          "type": "listen",
          "prompt": "精通の確認",
          "furigana": "せいつうのかくにん",
          "romaji": "seitsuu no kakunin",
          "english": "Confirming Expert knowledge / thorough familiarity",
          "audioText": "せいつうのかくにん",
          "options": [
            "Confirming True essence / quintessential core",
            "Confirming Expert knowledge / thorough familiarity",
            "The Dojo / sacred place of the Way",
            "The innermost secret"
          ],
          "correctAnswer": "Confirming Expert knowledge / thorough familiarity"
        },
        {
          "id": "u30_l12_2",
          "type": "spell",
          "prompt": "精通の確認",
          "furigana": "せいつうのかくにん",
          "romaji": "seitsuu no kakunin",
          "english": "Build 'Confirming Expert knowledge / thorough familiarity'",
          "audioText": "せいつうのかくにん",
          "tileBank": [
            "せ",
            "の",
            "く",
            "う",
            "つ",
            "に",
            "か",
            "い"
          ],
          "correctAnswer": "せいつうのかくにん"
        },
        {
          "id": "u30_l12_3",
          "type": "cloze",
          "prompt": "私は達人の確認がすきです",
          "furigana": "わたしはたつじんのかくにんがすきです",
          "romaji": "Watashi wa tatsujin no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Master / expert practitioner.",
          "audioText": "達人の確認",
          "clozeSentence": "これは達人の確認 {{BLANK}} す。",
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
          "id": "u30_l12_4",
          "type": "scramble",
          "prompt": "これは達人の確認です",
          "furigana": "これはたつじんのかくにんです",
          "romaji": "Kore wa tatsujin no kakunin desu.",
          "english": "This is Confirming Master / expert practitioner.",
          "audioText": "これは達人の確認です",
          "scrambleTokens": [
            "それ",
            "です",
            "ではありません",
            "達人の確認",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "達人の確認",
            "です"
          ],
          "correctAnswer": "これは達人の確認です"
        },
        {
          "id": "u30_l12_5",
          "type": "speak",
          "prompt": "神髄の確認",
          "furigana": "しんずいのかくにん",
          "romaji": "shinzui no kakunin",
          "english": "Pronounce: Confirming True essence / quintessential core",
          "audioText": "しんずいのかくにん",
          "targetSpeech": "神髄の確認",
          "options": [
            "Confirming True essence / quintessential core",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "神髄の確認"
        },
        {
          "id": "u30_l12_6",
          "type": "dictate",
          "prompt": "神髄の確認をお願いします",
          "furigana": "しんずいのかくにんをおねがいします",
          "romaji": "shinzui no kakunin o onegaishimasu.",
          "english": "Confirming True essence / quintessential core, please.",
          "audioText": "神髄の確認をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "ありがとう",
            "を",
            "神髄の確認"
          ],
          "dictateSolution": [
            "神髄の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "神髄の確認をお願いします"
        },
        {
          "id": "u30_l12_7",
          "type": "match",
          "prompt": "精通の確認・達人の確認・神髄の確認・師範",
          "furigana": "せいつうのかくにん・たつじんのかくにん・しんずいのかくにん・しはん",
          "romaji": "seitsuu no kakunin, tatsujin no kakunin, shinzui no kakunin, shihan",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せいつうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "精通の確認",
              "right": "Confirming Expert knowledge / thorough familiarity",
              "furigana": "せいつうのかくにん",
              "romaji": "seitsuu no kakunin"
            },
            {
              "id": "p_1",
              "left": "達人の確認",
              "right": "Confirming Master / expert practitioner",
              "furigana": "たつじんのかくにん",
              "romaji": "tatsujin no kakunin"
            },
            {
              "id": "p_2",
              "left": "神髄の確認",
              "right": "Confirming True essence / quintessential core",
              "furigana": "しんずいのかくにん",
              "romaji": "shinzui no kakunin"
            },
            {
              "id": "p_3",
              "left": "師範",
              "right": "Grand master / instructor",
              "furigana": "しはん",
              "romaji": "shihan"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l12_8",
          "type": "dialogue",
          "prompt": "次は精通に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は精通に進みましょう。",
          "furigana": "次は精通に進みましょう。",
          "romaji": "Tsugi wa seitsuu ni susumimashou.",
          "english": "Speaker: Let's proceed to Expert knowledge / thorough familiarity next.",
          "audioText": "次は精通に進みましょう。",
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
      "id": "u30_l13",
      "unitId": "unit_30",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Grand master / instructor & Ultimate secrets / esoteric mystery",
      "titleJp": "師範・奥義",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "師範",
        "奥義",
        "免許皆伝"
      ],
      "kanjiKeywords": [
        "師",
        "範",
        "奥",
        "義",
        "免",
        "許",
        "皆",
        "伝"
      ],
      "items": [
        {
          "id": "u30_l13_1",
          "type": "listen",
          "prompt": "師範",
          "furigana": "しはん",
          "romaji": "shihan",
          "english": "Grand master / instructor",
          "audioText": "しはん",
          "options": [
            "Confirming True essence / quintessential core",
            "Grand master / instructor",
            "Expert knowledge / thorough familiarity",
            "Confirming Expert knowledge / thorough familiarity"
          ],
          "correctAnswer": "Grand master / instructor"
        },
        {
          "id": "u30_l13_2",
          "type": "spell",
          "prompt": "師範",
          "furigana": "しはん",
          "romaji": "shihan",
          "english": "Build 'Grand master / instructor'",
          "audioText": "しはん",
          "tileBank": [
            "へ",
            "お",
            "は",
            "ん",
            "わ",
            "し",
            "ら",
            "の"
          ],
          "correctAnswer": "しはん"
        },
        {
          "id": "u30_l13_3",
          "type": "cloze",
          "prompt": "私は奥義がすきです",
          "furigana": "わたしはおうぎがすきです",
          "romaji": "Watashi wa ougi ga suki desu.",
          "english": "Fill in the blank with the correct particle for Ultimate secrets / esoteric mystery.",
          "audioText": "奥義",
          "clozeSentence": "これは奥義 {{BLANK}} す。",
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
          "id": "u30_l13_4",
          "type": "scramble",
          "prompt": "これは奥義です",
          "furigana": "これはおうぎです",
          "romaji": "Kore wa ougi desu.",
          "english": "This is Ultimate secrets / esoteric mystery.",
          "audioText": "これは奥義です",
          "scrambleTokens": [
            "奥義",
            "です",
            "ではありません",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "奥義",
            "です"
          ],
          "correctAnswer": "これは奥義です"
        },
        {
          "id": "u30_l13_5",
          "type": "speak",
          "prompt": "免許皆伝",
          "furigana": "めんきょかいでん",
          "romaji": "menkyo kaiden",
          "english": "Pronounce: Full initiation and complete mastery",
          "audioText": "めんきょかいでん",
          "targetSpeech": "免許皆伝",
          "options": [
            "Full initiation and complete mastery",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "免許皆伝"
        },
        {
          "id": "u30_l13_6",
          "type": "dictate",
          "prompt": "免許皆伝をお願いします",
          "furigana": "めんきょかいでんをおねがいします",
          "romaji": "menkyo kaiden o onegaishimasu.",
          "english": "Full initiation and complete mastery, please.",
          "audioText": "免許皆伝をお願いします",
          "dictateTokens": [
            "免許皆伝",
            "を",
            "です",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "免許皆伝",
            "を",
            "お願いします"
          ],
          "correctAnswer": "免許皆伝をお願いします"
        },
        {
          "id": "u30_l13_7",
          "type": "match",
          "prompt": "師範・奥義・免許皆伝・精通",
          "furigana": "しはん・おうぎ・めんきょかいでん・せいつう",
          "romaji": "shihan, ougi, menkyo kaiden, seitsuu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しはん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "師範",
              "right": "Grand master / instructor",
              "furigana": "しはん",
              "romaji": "shihan"
            },
            {
              "id": "p_1",
              "left": "奥義",
              "right": "Ultimate secrets / esoteric mystery",
              "furigana": "おうぎ",
              "romaji": "ougi"
            },
            {
              "id": "p_2",
              "left": "免許皆伝",
              "right": "Full initiation and complete mastery",
              "furigana": "めんきょかいでん",
              "romaji": "menkyo kaiden"
            },
            {
              "id": "p_3",
              "left": "精通",
              "right": "Expert knowledge / thorough familiarity",
              "furigana": "せいつう",
              "romaji": "seitsuu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l13_8",
          "type": "dialogue",
          "prompt": "師範について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "師範について教えていただけますか？",
          "furigana": "師範について教えていただけますか？",
          "romaji": "shihan ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Grand master / instructor?",
          "audioText": "師範について教えていただけますか？",
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
      "id": "u30_l14",
      "unitId": "unit_30",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Expert knowledge / thorough familiarity & Master / expert practitioner",
      "titleJp": "精通・達人",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "精通",
        "達人",
        "神髄"
      ],
      "kanjiKeywords": [
        "精",
        "通",
        "達",
        "人",
        "神",
        "髄"
      ],
      "items": [
        {
          "id": "u30_l14_1",
          "type": "listen",
          "prompt": "精通",
          "furigana": "せいつう",
          "romaji": "seitsuu",
          "english": "Expert knowledge / thorough familiarity",
          "audioText": "せいつう",
          "options": [
            "True essence / quintessential core",
            "Grand master / instructor",
            "Confirming Rigorous training / spiritual discipline",
            "Expert knowledge / thorough familiarity"
          ],
          "correctAnswer": "Expert knowledge / thorough familiarity"
        },
        {
          "id": "u30_l14_2",
          "type": "spell",
          "prompt": "精通",
          "furigana": "せいつう",
          "romaji": "seitsuu",
          "english": "Build 'Expert knowledge / thorough familiarity'",
          "audioText": "せいつう",
          "tileBank": [
            "た",
            "う",
            "と",
            "す",
            "り",
            "せ",
            "い",
            "つ"
          ],
          "correctAnswer": "せいつう"
        },
        {
          "id": "u30_l14_3",
          "type": "cloze",
          "prompt": "私は達人がすきです",
          "furigana": "わたしはたつじんがすきです",
          "romaji": "Watashi wa tatsujin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Master / expert practitioner.",
          "audioText": "達人",
          "clozeSentence": "これは達人 {{BLANK}} す。",
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
          "id": "u30_l14_4",
          "type": "scramble",
          "prompt": "これは達人です",
          "furigana": "これはたつじんです",
          "romaji": "Kore wa tatsujin desu.",
          "english": "This is Master / expert practitioner.",
          "audioText": "これは達人です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "達人",
            "です",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "達人",
            "です"
          ],
          "correctAnswer": "これは達人です"
        },
        {
          "id": "u30_l14_5",
          "type": "speak",
          "prompt": "神髄",
          "furigana": "しんずい",
          "romaji": "shinzui",
          "english": "Pronounce: True essence / quintessential core",
          "audioText": "しんずい",
          "targetSpeech": "神髄",
          "options": [
            "True essence / quintessential core",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "神髄"
        },
        {
          "id": "u30_l14_6",
          "type": "dictate",
          "prompt": "神髄をお願いします",
          "furigana": "しんずいをおねがいします",
          "romaji": "shinzui o onegaishimasu.",
          "english": "True essence / quintessential core, please.",
          "audioText": "神髄をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "を",
            "お願いします",
            "神髄"
          ],
          "dictateSolution": [
            "神髄",
            "を",
            "お願いします"
          ],
          "correctAnswer": "神髄をお願いします"
        },
        {
          "id": "u30_l14_7",
          "type": "match",
          "prompt": "精通・達人・神髄・修練",
          "furigana": "せいつう・たつじん・しんずい・しゅうれん",
          "romaji": "seitsuu, tatsujin, shinzui, shuuren",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せいつう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "精通",
              "right": "Expert knowledge / thorough familiarity",
              "furigana": "せいつう",
              "romaji": "seitsuu"
            },
            {
              "id": "p_1",
              "left": "達人",
              "right": "Master / expert practitioner",
              "furigana": "たつじん",
              "romaji": "tatsujin"
            },
            {
              "id": "p_2",
              "left": "神髄",
              "right": "True essence / quintessential core",
              "furigana": "しんずい",
              "romaji": "shinzui"
            },
            {
              "id": "p_3",
              "left": "修練",
              "right": "Rigorous training / spiritual discipline",
              "furigana": "しゅうれん",
              "romaji": "shuuren"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l14_8",
          "type": "dialogue",
          "prompt": "奥義の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "奥義の準備はできていますか？",
          "furigana": "奥義の準備はできていますか？",
          "romaji": "ougi no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Ultimate secrets / esoteric mystery ready?",
          "audioText": "奥義の準備はできていますか？",
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
      "id": "u30_l15",
      "unitId": "unit_30",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 30 Master Exam",
      "iconType": "test",
      "title": "Unit 30 Master Exam",
      "titleJp": "第30週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "修練",
        "頂点",
        "貫禄"
      ],
      "kanjiKeywords": [
        "修",
        "練",
        "頂",
        "点",
        "貫",
        "禄"
      ],
      "items": [
        {
          "id": "u30_l15_1",
          "type": "listen",
          "prompt": "修練",
          "furigana": "しゅうれん",
          "romaji": "shuuren",
          "english": "Rigorous training / spiritual discipline",
          "audioText": "しゅうれん",
          "options": [
            "Confirming The Dojo / sacred place of the Way",
            "Confirming Ultimate secrets / esoteric mystery",
            "Rigorous training / spiritual discipline",
            "Indomitable / unyielding spirit"
          ],
          "correctAnswer": "Rigorous training / spiritual discipline"
        },
        {
          "id": "u30_l15_2",
          "type": "spell",
          "prompt": "修練",
          "furigana": "しゅうれん",
          "romaji": "shuuren",
          "english": "Build 'Rigorous training / spiritual discipline'",
          "audioText": "しゅうれん",
          "tileBank": [
            "こ",
            "れ",
            "は",
            "う",
            "し",
            "ゅ",
            "ぬ",
            "ん"
          ],
          "correctAnswer": "しゅうれん"
        },
        {
          "id": "u30_l15_3",
          "type": "cloze",
          "prompt": "私は頂点がすきです",
          "furigana": "わたしはちょうてんがすきです",
          "romaji": "Watashi wa chouten ga suki desu.",
          "english": "Fill in the blank with the correct particle for Zenith / summit of achievement.",
          "audioText": "頂点",
          "clozeSentence": "これは頂点 {{BLANK}} す。",
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
          "id": "u30_l15_4",
          "type": "scramble",
          "prompt": "これは頂点です",
          "furigana": "これはちょうてんです",
          "romaji": "Kore wa chouten desu.",
          "english": "This is Zenith / summit of achievement.",
          "audioText": "これは頂点です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "頂点",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "頂点",
            "です"
          ],
          "correctAnswer": "これは頂点です"
        },
        {
          "id": "u30_l15_5",
          "type": "speak",
          "prompt": "貫禄",
          "furigana": "かんろく",
          "romaji": "kanroku",
          "english": "Pronounce: Dignity / imposing presence",
          "audioText": "かんろく",
          "targetSpeech": "貫禄",
          "options": [
            "Dignity / imposing presence",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "貫禄"
        },
        {
          "id": "u30_l15_6",
          "type": "dictate",
          "prompt": "貫禄をお願いします",
          "furigana": "かんろくをおねがいします",
          "romaji": "kanroku o onegaishimasu.",
          "english": "Dignity / imposing presence, please.",
          "audioText": "貫禄をお願いします",
          "dictateTokens": [
            "お願いします",
            "貫禄",
            "ありがとう",
            "を",
            "です"
          ],
          "dictateSolution": [
            "貫禄",
            "を",
            "お願いします"
          ],
          "correctAnswer": "貫禄をお願いします"
        },
        {
          "id": "u30_l15_7",
          "type": "match",
          "prompt": "修練・頂点・貫禄・大成",
          "furigana": "しゅうれん・ちょうてん・かんろく・たいせい",
          "romaji": "shuuren, chouten, kanroku, taisei",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しゅうれん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "修練",
              "right": "Rigorous training / spiritual discipline",
              "furigana": "しゅうれん",
              "romaji": "shuuren"
            },
            {
              "id": "p_1",
              "left": "頂点",
              "right": "Zenith / summit of achievement",
              "furigana": "ちょうてん",
              "romaji": "chouten"
            },
            {
              "id": "p_2",
              "left": "貫禄",
              "right": "Dignity / imposing presence",
              "furigana": "かんろく",
              "romaji": "kanroku"
            },
            {
              "id": "p_3",
              "left": "大成",
              "right": "Great culmination / successful achievement",
              "furigana": "たいせい",
              "romaji": "taisei"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u30_l15_8",
          "type": "dialogue",
          "prompt": "免許皆伝についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "免許皆伝についてどう思われますか？",
          "furigana": "免許皆伝についてどう思われますか？",
          "romaji": "menkyo kaiden ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Full initiation and complete mastery?",
          "audioText": "免許皆伝についてどう思われますか？",
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
    "id": "gate_unit_30",
    "unitId": "unit_30",
    "title": "Unit 30 Mastery Checkpoint",
    "titleJp": "第30週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u30_l1_1",
        "type": "listen",
        "prompt": "師範",
        "furigana": "しはん",
        "romaji": "shihan",
        "english": "Grand master / instructor",
        "audioText": "しはん",
        "options": [
          "Indomitable / unyielding spirit",
          "Grand master / instructor",
          "Confirming Grand master / instructor",
          "Confirming Expert knowledge / thorough familiarity"
        ],
        "correctAnswer": "Grand master / instructor"
      },
      {
        "id": "u30_l1_2",
        "type": "spell",
        "prompt": "師範",
        "furigana": "しはん",
        "romaji": "shihan",
        "english": "Build 'Grand master / instructor'",
        "audioText": "しはん",
        "tileBank": [
          "れ",
          "は",
          "な",
          "し",
          "ろ",
          "け",
          "く",
          "ん"
        ],
        "correctAnswer": "しはん"
      },
      {
        "id": "u30_l3_1",
        "type": "listen",
        "prompt": "修練",
        "furigana": "しゅうれん",
        "romaji": "shuuren",
        "english": "Rigorous training / spiritual discipline",
        "audioText": "しゅうれん",
        "options": [
          "Confirming Full initiation and complete mastery",
          "Confirming True essence / quintessential core",
          "Rigorous training / spiritual discipline",
          "Confirming Full initiation and complete mastery"
        ],
        "correctAnswer": "Rigorous training / spiritual discipline"
      },
      {
        "id": "u30_l3_2",
        "type": "spell",
        "prompt": "修練",
        "furigana": "しゅうれん",
        "romaji": "shuuren",
        "english": "Build 'Rigorous training / spiritual discipline'",
        "audioText": "しゅうれん",
        "tileBank": [
          "う",
          "く",
          "り",
          "れ",
          "ん",
          "ゅ",
          "ぬ",
          "し"
        ],
        "correctAnswer": "しゅうれん"
      },
      {
        "id": "u30_l5_1",
        "type": "listen",
        "prompt": "伝承",
        "furigana": "でんしょう",
        "romaji": "denshou",
        "english": "Passing down of oral tradition",
        "audioText": "でんしょう",
        "options": [
          "Passing down of oral tradition",
          "Confirming Indomitable / unyielding spirit",
          "Confirming Great culmination / successful achievement",
          "Confirming Grand master / instructor"
        ],
        "correctAnswer": "Passing down of oral tradition"
      },
      {
        "id": "u30_l5_2",
        "type": "spell",
        "prompt": "伝承",
        "furigana": "でんしょう",
        "romaji": "denshou",
        "english": "Build 'Passing down of oral tradition'",
        "audioText": "でんしょう",
        "tileBank": [
          "く",
          "し",
          "ん",
          "ょ",
          "に",
          "せ",
          "う",
          "で"
        ],
        "correctAnswer": "でんしょう"
      },
      {
        "id": "u30_l7_1",
        "type": "listen",
        "prompt": "精通の確認",
        "furigana": "せいつうのかくにん",
        "romaji": "seitsuu no kakunin",
        "english": "Confirming Expert knowledge / thorough familiarity",
        "audioText": "せいつうのかくにん",
        "options": [
          "Confirming Master / expert practitioner",
          "Confirming Grand master / instructor",
          "Confirming Expert knowledge / thorough familiarity",
          "Confirming Master / expert practitioner"
        ],
        "correctAnswer": "Confirming Expert knowledge / thorough familiarity"
      },
      {
        "id": "u30_l7_2",
        "type": "spell",
        "prompt": "精通の確認",
        "furigana": "せいつうのかくにん",
        "romaji": "seitsuu no kakunin",
        "english": "Build 'Confirming Expert knowledge / thorough familiarity'",
        "audioText": "せいつうのかくにん",
        "tileBank": [
          "つ",
          "く",
          "う",
          "の",
          "せ",
          "か",
          "い",
          "に"
        ],
        "correctAnswer": "せいつうのかくにん"
      },
      {
        "id": "u30_l9_1",
        "type": "listen",
        "prompt": "大成の確認",
        "furigana": "たいせいのかくにん",
        "romaji": "taisei no kakunin",
        "english": "Confirming Great culmination / successful achievement",
        "audioText": "たいせいのかくにん",
        "options": [
          "Full initiation and complete mastery",
          "Ultimate secrets / esoteric mystery",
          "Confirming Great culmination / successful achievement",
          "Confirming True essence / quintessential core"
        ],
        "correctAnswer": "Confirming Great culmination / successful achievement"
      },
      {
        "id": "u30_l9_2",
        "type": "spell",
        "prompt": "大成の確認",
        "furigana": "たいせいのかくにん",
        "romaji": "taisei no kakunin",
        "english": "Build 'Confirming Great culmination / successful achievement'",
        "audioText": "たいせいのかくにん",
        "tileBank": [
          "の",
          "い",
          "た",
          "い",
          "せ",
          "か",
          "に",
          "く"
        ],
        "correctAnswer": "たいせいのかくにん"
      },
      {
        "id": "u30_l11_1",
        "type": "listen",
        "prompt": "師範の確認",
        "furigana": "しはんのかくにん",
        "romaji": "shihan no kakunin",
        "english": "Confirming Grand master / instructor",
        "audioText": "しはんのかくにん",
        "options": [
          "Passing down of oral tradition",
          "Confirming Ultimate secrets / esoteric mystery",
          "Confirming Expert knowledge / thorough familiarity",
          "Confirming Grand master / instructor"
        ],
        "correctAnswer": "Confirming Grand master / instructor"
      },
      {
        "id": "u30_l11_2",
        "type": "spell",
        "prompt": "師範の確認",
        "furigana": "しはんのかくにん",
        "romaji": "shihan no kakunin",
        "english": "Build 'Confirming Grand master / instructor'",
        "audioText": "しはんのかくにん",
        "tileBank": [
          "ん",
          "に",
          "ん",
          "は",
          "く",
          "し",
          "の",
          "か"
        ],
        "correctAnswer": "しはんのかくにん"
      }
    ]
  }
};
