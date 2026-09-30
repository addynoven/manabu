import type { DojoUnit } from "../../models/dojo.model";

export const unit07: DojoUnit = {
  "id": "unit_7",
  "unitNumber": 7,
  "title": "Dining at an Izakaya",
  "titleJp": "居酒屋で乾杯",
  "description": "Enjoy Japanese pub culture, order drinks and shared dishes, cheers, and split the bill.",
  "icon": "🍻",
  "themeColor": "#F59E0B",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u7_l1",
      "unitId": "unit_7",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Cheers! & Draft beer",
      "titleJp": "乾杯・生ビール",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "乾杯",
        "生ビール",
        "とりあえず"
      ],
      "kanjiKeywords": [
        "乾",
        "杯",
        "生"
      ],
      "items": [
        {
          "id": "u7_l1_1",
          "type": "listen",
          "prompt": "乾杯",
          "furigana": "かんぱい",
          "romaji": "kanpai",
          "english": "Cheers!",
          "audioText": "かんぱい",
          "options": [
            "Confirming Draft beer",
            "Confirming For now / to start with",
            "Sashimi / sliced raw fish",
            "Cheers!"
          ],
          "correctAnswer": "Cheers!"
        },
        {
          "id": "u7_l1_2",
          "type": "spell",
          "prompt": "乾杯",
          "furigana": "かんぱい",
          "romaji": "kanpai",
          "english": "Build 'Cheers!'",
          "audioText": "かんぱい",
          "tileBank": [
            "か",
            "ぱ",
            "ね",
            "い",
            "ふ",
            "あ",
            "わ",
            "ん"
          ],
          "correctAnswer": "かんぱい"
        },
        {
          "id": "u7_l1_3",
          "type": "cloze",
          "prompt": "私は生ビールがすきです",
          "furigana": "わたしはなまビールがすきです",
          "romaji": "Watashi wa nama biiru ga suki desu.",
          "english": "Fill in the blank with the correct particle for Draft beer.",
          "audioText": "生ビール",
          "clozeSentence": "これは生ビール {{BLANK}} す。",
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
          "id": "u7_l1_4",
          "type": "scramble",
          "prompt": "これは生ビールです",
          "furigana": "これはなまビールです",
          "romaji": "Kore wa nama biiru desu.",
          "english": "This is Draft beer.",
          "audioText": "これは生ビールです",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "生ビール",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "生ビール",
            "です"
          ],
          "correctAnswer": "これは生ビールです"
        },
        {
          "id": "u7_l1_5",
          "type": "speak",
          "prompt": "とりあえず",
          "furigana": "とりあえず",
          "romaji": "toriaezu",
          "english": "Pronounce: For now / to start with",
          "audioText": "とりあえず",
          "targetSpeech": "とりあえず",
          "options": [
            "For now / to start with",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "とりあえず"
        },
        {
          "id": "u7_l1_6",
          "type": "dictate",
          "prompt": "とりあえずをお願いします",
          "furigana": "とりあえずをおねがいします",
          "romaji": "toriaezu o onegaishimasu.",
          "english": "For now / to start with, please.",
          "audioText": "とりあえずをお願いします",
          "dictateTokens": [
            "とりあえず",
            "です",
            "ありがとう",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "とりあえず",
            "を",
            "お願いします"
          ],
          "correctAnswer": "とりあえずをお願いします"
        },
        {
          "id": "u7_l1_7",
          "type": "match",
          "prompt": "乾杯・生ビール・とりあえず・枝豆",
          "furigana": "かんぱい・なまビール・とりあえず・えだまめ",
          "romaji": "kanpai, nama biiru, toriaezu, edamame",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かんぱい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "乾杯",
              "right": "Cheers!",
              "furigana": "かんぱい",
              "romaji": "kanpai"
            },
            {
              "id": "p_1",
              "left": "生ビール",
              "right": "Draft beer",
              "furigana": "なまビール",
              "romaji": "nama biiru"
            },
            {
              "id": "p_2",
              "left": "とりあえず",
              "right": "For now / to start with",
              "furigana": "とりあえず",
              "romaji": "toriaezu"
            },
            {
              "id": "p_3",
              "left": "枝豆",
              "right": "Edamame soybeans",
              "furigana": "えだまめ",
              "romaji": "edamame"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l1_8",
          "type": "dialogue",
          "prompt": "乾杯について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "乾杯について教えていただけますか？",
          "furigana": "乾杯について教えていただけますか？",
          "romaji": "kanpai ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Cheers!?",
          "audioText": "乾杯について教えていただけますか？",
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
      "id": "u7_l2",
      "unitId": "unit_7",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Edamame soybeans & Grilled chicken skewers",
      "titleJp": "枝豆・焼き鳥",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "枝豆",
        "焼き鳥",
        "唐揚げ"
      ],
      "kanjiKeywords": [
        "枝",
        "豆",
        "焼",
        "鳥",
        "唐",
        "揚"
      ],
      "items": [
        {
          "id": "u7_l2_1",
          "type": "listen",
          "prompt": "枝豆",
          "furigana": "えだまめ",
          "romaji": "edamame",
          "english": "Edamame soybeans",
          "audioText": "えだまめ",
          "options": [
            "Confirming Edamame soybeans",
            "Edamame soybeans",
            "Confirming Pub snacks / appetizers",
            "Confirming For now / to start with"
          ],
          "correctAnswer": "Edamame soybeans"
        },
        {
          "id": "u7_l2_2",
          "type": "spell",
          "prompt": "枝豆",
          "furigana": "えだまめ",
          "romaji": "edamame",
          "english": "Build 'Edamame soybeans'",
          "audioText": "えだまめ",
          "tileBank": [
            "ね",
            "ま",
            "け",
            "だ",
            "ろ",
            "め",
            "え",
            "り"
          ],
          "correctAnswer": "えだまめ"
        },
        {
          "id": "u7_l2_3",
          "type": "cloze",
          "prompt": "私は焼き鳥がすきです",
          "furigana": "わたしはやきとりがすきです",
          "romaji": "Watashi wa yakitori ga suki desu.",
          "english": "Fill in the blank with the correct particle for Grilled chicken skewers.",
          "audioText": "焼き鳥",
          "clozeSentence": "これは焼き鳥 {{BLANK}} す。",
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
          "id": "u7_l2_4",
          "type": "scramble",
          "prompt": "これは焼き鳥です",
          "furigana": "これはやきとりです",
          "romaji": "Kore wa yakitori desu.",
          "english": "This is Grilled chicken skewers.",
          "audioText": "これは焼き鳥です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "焼き鳥",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "焼き鳥",
            "です"
          ],
          "correctAnswer": "これは焼き鳥です"
        },
        {
          "id": "u7_l2_5",
          "type": "speak",
          "prompt": "唐揚げ",
          "furigana": "からあげ",
          "romaji": "karaage",
          "english": "Pronounce: Japanese fried chicken",
          "audioText": "からあげ",
          "targetSpeech": "唐揚げ",
          "options": [
            "Japanese fried chicken",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "唐揚げ"
        },
        {
          "id": "u7_l2_6",
          "type": "dictate",
          "prompt": "唐揚げをお願いします",
          "furigana": "からあげをおねがいします",
          "romaji": "karaage o onegaishimasu.",
          "english": "Japanese fried chicken, please.",
          "audioText": "唐揚げをお願いします",
          "dictateTokens": [
            "唐揚げ",
            "ありがとう",
            "お願いします",
            "を",
            "です"
          ],
          "dictateSolution": [
            "唐揚げ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "唐揚げをお願いします"
        },
        {
          "id": "u7_l2_7",
          "type": "match",
          "prompt": "枝豆・焼き鳥・唐揚げ・お代わり",
          "furigana": "えだまめ・やきとり・からあげ・おかわり",
          "romaji": "edamame, yakitori, karaage, okawari",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えだまめ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "枝豆",
              "right": "Edamame soybeans",
              "furigana": "えだまめ",
              "romaji": "edamame"
            },
            {
              "id": "p_1",
              "left": "焼き鳥",
              "right": "Grilled chicken skewers",
              "furigana": "やきとり",
              "romaji": "yakitori"
            },
            {
              "id": "p_2",
              "left": "唐揚げ",
              "right": "Japanese fried chicken",
              "furigana": "からあげ",
              "romaji": "karaage"
            },
            {
              "id": "p_3",
              "left": "お代わり",
              "right": "Another serving / refill",
              "furigana": "おかわり",
              "romaji": "okawari"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l2_8",
          "type": "dialogue",
          "prompt": "生ビールの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "生ビールの準備はできていますか？",
          "furigana": "生ビールの準備はできていますか？",
          "romaji": "nama biiru no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Draft beer ready?",
          "audioText": "生ビールの準備はできていますか？",
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
      "id": "u7_l3",
      "unitId": "unit_7",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Another serving / refill & Splitting the bill",
      "titleJp": "お代わり・割り勘",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "お代わり",
        "割り勘",
        "居酒屋"
      ],
      "kanjiKeywords": [
        "代",
        "割",
        "勘",
        "居",
        "酒",
        "屋"
      ],
      "items": [
        {
          "id": "u7_l3_1",
          "type": "listen",
          "prompt": "お代わり",
          "furigana": "おかわり",
          "romaji": "okawari",
          "english": "Another serving / refill",
          "audioText": "おかわり",
          "options": [
            "Confirming Japanese pub / Izakaya",
            "Another serving / refill",
            "Confirming Draft beer",
            "No smoking"
          ],
          "correctAnswer": "Another serving / refill"
        },
        {
          "id": "u7_l3_2",
          "type": "spell",
          "prompt": "お代わり",
          "furigana": "おかわり",
          "romaji": "okawari",
          "english": "Build 'Another serving / refill'",
          "audioText": "おかわり",
          "tileBank": [
            "う",
            "し",
            "り",
            "か",
            "の",
            "お",
            "く",
            "わ"
          ],
          "correctAnswer": "おかわり"
        },
        {
          "id": "u7_l3_3",
          "type": "cloze",
          "prompt": "私は割り勘がすきです",
          "furigana": "わたしはわりかんがすきです",
          "romaji": "Watashi wa warikan ga suki desu.",
          "english": "Fill in the blank with the correct particle for Splitting the bill.",
          "audioText": "割り勘",
          "clozeSentence": "これは割り勘 {{BLANK}} す。",
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
          "id": "u7_l3_4",
          "type": "scramble",
          "prompt": "これは割り勘です",
          "furigana": "これはわりかんです",
          "romaji": "Kore wa warikan desu.",
          "english": "This is Splitting the bill.",
          "audioText": "これは割り勘です",
          "scrambleTokens": [
            "です",
            "それ",
            "割り勘",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "割り勘",
            "です"
          ],
          "correctAnswer": "これは割り勘です"
        },
        {
          "id": "u7_l3_5",
          "type": "speak",
          "prompt": "居酒屋",
          "furigana": "いざかや",
          "romaji": "izakaya",
          "english": "Pronounce: Japanese pub / Izakaya",
          "audioText": "いざかや",
          "targetSpeech": "居酒屋",
          "options": [
            "Japanese pub / Izakaya",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "居酒屋"
        },
        {
          "id": "u7_l3_6",
          "type": "dictate",
          "prompt": "居酒屋をお願いします",
          "furigana": "いざかやをおねがいします",
          "romaji": "izakaya o onegaishimasu.",
          "english": "Japanese pub / Izakaya, please.",
          "audioText": "居酒屋をお願いします",
          "dictateTokens": [
            "居酒屋",
            "を",
            "ありがとう",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "居酒屋",
            "を",
            "お願いします"
          ],
          "correctAnswer": "居酒屋をお願いします"
        },
        {
          "id": "u7_l3_7",
          "type": "match",
          "prompt": "お代わり・割り勘・居酒屋・おつまみ",
          "furigana": "おかわり・わりかん・いざかや・おつまみ",
          "romaji": "okawari, warikan, izakaya, otsumami",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おかわり",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "お代わり",
              "right": "Another serving / refill",
              "furigana": "おかわり",
              "romaji": "okawari"
            },
            {
              "id": "p_1",
              "left": "割り勘",
              "right": "Splitting the bill",
              "furigana": "わりかん",
              "romaji": "warikan"
            },
            {
              "id": "p_2",
              "left": "居酒屋",
              "right": "Japanese pub / Izakaya",
              "furigana": "いざかや",
              "romaji": "izakaya"
            },
            {
              "id": "p_3",
              "left": "おつまみ",
              "right": "Pub snacks / appetizers",
              "furigana": "おつまみ",
              "romaji": "otsumami"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l3_8",
          "type": "dialogue",
          "prompt": "とりあえずについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "とりあえずについてどう思われますか？",
          "furigana": "とりあえずについてどう思われますか？",
          "romaji": "toriaezu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on For now / to start with?",
          "audioText": "とりあえずについてどう思われますか？",
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
      "id": "u7_l4",
      "unitId": "unit_7",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Pub snacks / appetizers & Whisky highball",
      "titleJp": "おつまみ・ハイボール",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "おつまみ",
        "ハイボール",
        "ウーロン茶"
      ],
      "kanjiKeywords": [
        "茶"
      ],
      "items": [
        {
          "id": "u7_l4_1",
          "type": "listen",
          "prompt": "おつまみ",
          "furigana": "おつまみ",
          "romaji": "otsumami",
          "english": "Pub snacks / appetizers",
          "audioText": "おつまみ",
          "options": [
            "Oolong tea",
            "Pub snacks / appetizers",
            "Cheers!",
            "Confirming Japanese fried chicken"
          ],
          "correctAnswer": "Pub snacks / appetizers"
        },
        {
          "id": "u7_l4_2",
          "type": "spell",
          "prompt": "おつまみ",
          "furigana": "おつまみ",
          "romaji": "otsumami",
          "english": "Build 'Pub snacks / appetizers'",
          "audioText": "おつまみ",
          "tileBank": [
            "み",
            "ま",
            "つ",
            "ね",
            "お",
            "め",
            "う",
            "り"
          ],
          "correctAnswer": "おつまみ"
        },
        {
          "id": "u7_l4_3",
          "type": "cloze",
          "prompt": "私はハイボールがすきです",
          "furigana": "わたしはハイボールがすきです",
          "romaji": "Watashi wa haibooru ga suki desu.",
          "english": "Fill in the blank with the correct particle for Whisky highball.",
          "audioText": "ハイボール",
          "clozeSentence": "これはハイボール {{BLANK}} す。",
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
          "id": "u7_l4_4",
          "type": "scramble",
          "prompt": "これはハイボールです",
          "furigana": "これはハイボールです",
          "romaji": "Kore wa haibooru desu.",
          "english": "This is Whisky highball.",
          "audioText": "これはハイボールです",
          "scrambleTokens": [
            "です",
            "それ",
            "ではありません",
            "ハイボール",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "ハイボール",
            "です"
          ],
          "correctAnswer": "これはハイボールです"
        },
        {
          "id": "u7_l4_5",
          "type": "speak",
          "prompt": "ウーロン茶",
          "furigana": "ウーロンちゃ",
          "romaji": "uuroncha",
          "english": "Pronounce: Oolong tea",
          "audioText": "ウーロンちゃ",
          "targetSpeech": "ウーロン茶",
          "options": [
            "Oolong tea",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ウーロン茶"
        },
        {
          "id": "u7_l4_6",
          "type": "dictate",
          "prompt": "ウーロン茶をお願いします",
          "furigana": "ウーロンちゃをおねがいします",
          "romaji": "uuroncha o onegaishimasu.",
          "english": "Oolong tea, please.",
          "audioText": "ウーロン茶をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "ウーロン茶",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "ウーロン茶",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ウーロン茶をお願いします"
        },
        {
          "id": "u7_l4_7",
          "type": "match",
          "prompt": "おつまみ・ハイボール・ウーロン茶・刺身",
          "furigana": "おつまみ・ハイボール・ウーロンちゃ・さしみ",
          "romaji": "otsumami, haibooru, uuroncha, sashimi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おつまみ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "おつまみ",
              "right": "Pub snacks / appetizers",
              "furigana": "おつまみ",
              "romaji": "otsumami"
            },
            {
              "id": "p_1",
              "left": "ハイボール",
              "right": "Whisky highball",
              "furigana": "ハイボール",
              "romaji": "haibooru"
            },
            {
              "id": "p_2",
              "left": "ウーロン茶",
              "right": "Oolong tea",
              "furigana": "ウーロンちゃ",
              "romaji": "uuroncha"
            },
            {
              "id": "p_3",
              "left": "刺身",
              "right": "Sashimi / sliced raw fish",
              "furigana": "さしみ",
              "romaji": "sashimi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l4_8",
          "type": "dialogue",
          "prompt": "次は枝豆に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は枝豆に進みましょう。",
          "furigana": "次は枝豆に進みましょう。",
          "romaji": "Tsugi wa edamame ni susumimashou.",
          "english": "Speaker: Let's proceed to Edamame soybeans next.",
          "audioText": "次は枝豆に進みましょう。",
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
      "id": "u7_l5",
      "unitId": "unit_7",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Sashimi / sliced raw fish & Seat / table",
      "titleJp": "刺身・席",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "刺身",
        "席",
        "禁煙"
      ],
      "kanjiKeywords": [
        "刺",
        "身",
        "席",
        "禁",
        "煙"
      ],
      "items": [
        {
          "id": "u7_l5_1",
          "type": "listen",
          "prompt": "刺身",
          "furigana": "さしみ",
          "romaji": "sashimi",
          "english": "Sashimi / sliced raw fish",
          "audioText": "さしみ",
          "options": [
            "No smoking",
            "Confirming Another serving / refill",
            "Confirming Seat / table",
            "Sashimi / sliced raw fish"
          ],
          "correctAnswer": "Sashimi / sliced raw fish"
        },
        {
          "id": "u7_l5_2",
          "type": "spell",
          "prompt": "刺身",
          "furigana": "さしみ",
          "romaji": "sashimi",
          "english": "Build 'Sashimi / sliced raw fish'",
          "audioText": "さしみ",
          "tileBank": [
            "し",
            "さ",
            "い",
            "み",
            "れ",
            "せ",
            "ん",
            "ろ"
          ],
          "correctAnswer": "さしみ"
        },
        {
          "id": "u7_l5_3",
          "type": "cloze",
          "prompt": "私は席がすきです",
          "furigana": "わたしはせきがすきです",
          "romaji": "Watashi wa seki ga suki desu.",
          "english": "Fill in the blank with the correct particle for Seat / table.",
          "audioText": "席",
          "clozeSentence": "これは席 {{BLANK}} す。",
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
          "id": "u7_l5_4",
          "type": "scramble",
          "prompt": "これは席です",
          "furigana": "これはせきです",
          "romaji": "Kore wa seki desu.",
          "english": "This is Seat / table.",
          "audioText": "これは席です",
          "scrambleTokens": [
            "それ",
            "これは",
            "です",
            "ではありません",
            "席"
          ],
          "scrambleSolution": [
            "これは",
            "席",
            "です"
          ],
          "correctAnswer": "これは席です"
        },
        {
          "id": "u7_l5_5",
          "type": "speak",
          "prompt": "禁煙",
          "furigana": "きんえん",
          "romaji": "kin-en",
          "english": "Pronounce: No smoking",
          "audioText": "きんえん",
          "targetSpeech": "禁煙",
          "options": [
            "No smoking",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "禁煙"
        },
        {
          "id": "u7_l5_6",
          "type": "dictate",
          "prompt": "禁煙をお願いします",
          "furigana": "きんえんをおねがいします",
          "romaji": "kin-en o onegaishimasu.",
          "english": "No smoking, please.",
          "audioText": "禁煙をお願いします",
          "dictateTokens": [
            "を",
            "禁煙",
            "お願いします",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "禁煙",
            "を",
            "お願いします"
          ],
          "correctAnswer": "禁煙をお願いします"
        },
        {
          "id": "u7_l5_7",
          "type": "match",
          "prompt": "刺身・席・禁煙・乾杯の確認",
          "furigana": "さしみ・せき・きんえん・かんぱいのかくにん",
          "romaji": "sashimi, seki, kin-en, kanpai no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さしみ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "刺身",
              "right": "Sashimi / sliced raw fish",
              "furigana": "さしみ",
              "romaji": "sashimi"
            },
            {
              "id": "p_1",
              "left": "席",
              "right": "Seat / table",
              "furigana": "せき",
              "romaji": "seki"
            },
            {
              "id": "p_2",
              "left": "禁煙",
              "right": "No smoking",
              "furigana": "きんえん",
              "romaji": "kin-en"
            },
            {
              "id": "p_3",
              "left": "乾杯の確認",
              "right": "Confirming Cheers!",
              "furigana": "かんぱいのかくにん",
              "romaji": "kanpai no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l5_8",
          "type": "dialogue",
          "prompt": "乾杯について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "乾杯について教えていただけますか？",
          "furigana": "乾杯について教えていただけますか？",
          "romaji": "kanpai ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Cheers!?",
          "audioText": "乾杯について教えていただけますか？",
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
      "id": "u7_l6",
      "unitId": "unit_7",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Cheers! & Confirming Draft beer",
      "titleJp": "乾杯の確認・生ビールの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "乾杯の確認",
        "生ビールの確認",
        "とりあえずの確認"
      ],
      "kanjiKeywords": [
        "乾",
        "杯",
        "確",
        "認",
        "生",
        "確",
        "認",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u7_l6_1",
          "type": "listen",
          "prompt": "乾杯の確認",
          "furigana": "かんぱいのかくにん",
          "romaji": "kanpai no kakunin",
          "english": "Confirming Cheers!",
          "audioText": "かんぱいのかくにん",
          "options": [
            "Grilled chicken skewers",
            "For now / to start with",
            "Japanese pub / Izakaya",
            "Confirming Cheers!"
          ],
          "correctAnswer": "Confirming Cheers!"
        },
        {
          "id": "u7_l6_2",
          "type": "spell",
          "prompt": "乾杯の確認",
          "furigana": "かんぱいのかくにん",
          "romaji": "kanpai no kakunin",
          "english": "Build 'Confirming Cheers!'",
          "audioText": "かんぱいのかくにん",
          "tileBank": [
            "ぱ",
            "ん",
            "く",
            "か",
            "に",
            "い",
            "の",
            "か"
          ],
          "correctAnswer": "かんぱいのかくにん"
        },
        {
          "id": "u7_l6_3",
          "type": "cloze",
          "prompt": "私は生ビールの確認がすきです",
          "furigana": "わたしはなまビールのかくにんがすきです",
          "romaji": "Watashi wa nama biiru no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Draft beer.",
          "audioText": "生ビールの確認",
          "clozeSentence": "これは生ビールの確認 {{BLANK}} す。",
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
          "id": "u7_l6_4",
          "type": "scramble",
          "prompt": "これは生ビールの確認です",
          "furigana": "これはなまビールのかくにんです",
          "romaji": "Kore wa nama biiru no kakunin desu.",
          "english": "This is Confirming Draft beer.",
          "audioText": "これは生ビールの確認です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "生ビールの確認",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "生ビールの確認",
            "です"
          ],
          "correctAnswer": "これは生ビールの確認です"
        },
        {
          "id": "u7_l6_5",
          "type": "speak",
          "prompt": "とりあえずの確認",
          "furigana": "とりあえずのかくにん",
          "romaji": "toriaezu no kakunin",
          "english": "Pronounce: Confirming For now / to start with",
          "audioText": "とりあえずのかくにん",
          "targetSpeech": "とりあえずの確認",
          "options": [
            "Confirming For now / to start with",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "とりあえずの確認"
        },
        {
          "id": "u7_l6_6",
          "type": "dictate",
          "prompt": "とりあえずの確認をお願いします",
          "furigana": "とりあえずのかくにんをおねがいします",
          "romaji": "toriaezu no kakunin o onegaishimasu.",
          "english": "Confirming For now / to start with, please.",
          "audioText": "とりあえずの確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "を",
            "とりあえずの確認",
            "お願いします"
          ],
          "dictateSolution": [
            "とりあえずの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "とりあえずの確認をお願いします"
        },
        {
          "id": "u7_l6_7",
          "type": "match",
          "prompt": "乾杯の確認・生ビールの確認・とりあえずの確認・枝豆の確認",
          "furigana": "かんぱいのかくにん・なまビールのかくにん・とりあえずのかくにん・えだまめのかくにん",
          "romaji": "kanpai no kakunin, nama biiru no kakunin, toriaezu no kakunin, edamame no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かんぱいのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "乾杯の確認",
              "right": "Confirming Cheers!",
              "furigana": "かんぱいのかくにん",
              "romaji": "kanpai no kakunin"
            },
            {
              "id": "p_1",
              "left": "生ビールの確認",
              "right": "Confirming Draft beer",
              "furigana": "なまビールのかくにん",
              "romaji": "nama biiru no kakunin"
            },
            {
              "id": "p_2",
              "left": "とりあえずの確認",
              "right": "Confirming For now / to start with",
              "furigana": "とりあえずのかくにん",
              "romaji": "toriaezu no kakunin"
            },
            {
              "id": "p_3",
              "left": "枝豆の確認",
              "right": "Confirming Edamame soybeans",
              "furigana": "えだまめのかくにん",
              "romaji": "edamame no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l6_8",
          "type": "dialogue",
          "prompt": "生ビールの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "生ビールの準備はできていますか？",
          "furigana": "生ビールの準備はできていますか？",
          "romaji": "nama biiru no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Draft beer ready?",
          "audioText": "生ビールの準備はできていますか？",
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
      "id": "u7_l7",
      "unitId": "unit_7",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Edamame soybeans & Confirming Grilled chicken skewers",
      "titleJp": "枝豆の確認・焼き鳥の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "枝豆の確認",
        "焼き鳥の確認",
        "唐揚げの確認"
      ],
      "kanjiKeywords": [
        "枝",
        "豆",
        "確",
        "認",
        "焼",
        "鳥",
        "確",
        "認",
        "唐",
        "揚",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u7_l7_1",
          "type": "listen",
          "prompt": "枝豆の確認",
          "furigana": "えだまめのかくにん",
          "romaji": "edamame no kakunin",
          "english": "Confirming Edamame soybeans",
          "audioText": "えだまめのかくにん",
          "options": [
            "Confirming Draft beer",
            "Confirming For now / to start with",
            "Confirming Edamame soybeans",
            "Splitting the bill"
          ],
          "correctAnswer": "Confirming Edamame soybeans"
        },
        {
          "id": "u7_l7_2",
          "type": "spell",
          "prompt": "枝豆の確認",
          "furigana": "えだまめのかくにん",
          "romaji": "edamame no kakunin",
          "english": "Build 'Confirming Edamame soybeans'",
          "audioText": "えだまめのかくにん",
          "tileBank": [
            "の",
            "ま",
            "に",
            "か",
            "だ",
            "え",
            "め",
            "く"
          ],
          "correctAnswer": "えだまめのかくにん"
        },
        {
          "id": "u7_l7_3",
          "type": "cloze",
          "prompt": "私は焼き鳥の確認がすきです",
          "furigana": "わたしはやきとりのかくにんがすきです",
          "romaji": "Watashi wa yakitori no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Grilled chicken skewers.",
          "audioText": "焼き鳥の確認",
          "clozeSentence": "これは焼き鳥の確認 {{BLANK}} す。",
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
          "id": "u7_l7_4",
          "type": "scramble",
          "prompt": "これは焼き鳥の確認です",
          "furigana": "これはやきとりのかくにんです",
          "romaji": "Kore wa yakitori no kakunin desu.",
          "english": "This is Confirming Grilled chicken skewers.",
          "audioText": "これは焼き鳥の確認です",
          "scrambleTokens": [
            "焼き鳥の確認",
            "です",
            "ではありません",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "焼き鳥の確認",
            "です"
          ],
          "correctAnswer": "これは焼き鳥の確認です"
        },
        {
          "id": "u7_l7_5",
          "type": "speak",
          "prompt": "唐揚げの確認",
          "furigana": "からあげのかくにん",
          "romaji": "karaage no kakunin",
          "english": "Pronounce: Confirming Japanese fried chicken",
          "audioText": "からあげのかくにん",
          "targetSpeech": "唐揚げの確認",
          "options": [
            "Confirming Japanese fried chicken",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "唐揚げの確認"
        },
        {
          "id": "u7_l7_6",
          "type": "dictate",
          "prompt": "唐揚げの確認をお願いします",
          "furigana": "からあげのかくにんをおねがいします",
          "romaji": "karaage no kakunin o onegaishimasu.",
          "english": "Confirming Japanese fried chicken, please.",
          "audioText": "唐揚げの確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "を",
            "お願いします",
            "唐揚げの確認"
          ],
          "dictateSolution": [
            "唐揚げの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "唐揚げの確認をお願いします"
        },
        {
          "id": "u7_l7_7",
          "type": "match",
          "prompt": "枝豆の確認・焼き鳥の確認・唐揚げの確認・お代わりの確認",
          "furigana": "えだまめのかくにん・やきとりのかくにん・からあげのかくにん・おかわりのかくにん",
          "romaji": "edamame no kakunin, yakitori no kakunin, karaage no kakunin, okawari no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えだまめのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "枝豆の確認",
              "right": "Confirming Edamame soybeans",
              "furigana": "えだまめのかくにん",
              "romaji": "edamame no kakunin"
            },
            {
              "id": "p_1",
              "left": "焼き鳥の確認",
              "right": "Confirming Grilled chicken skewers",
              "furigana": "やきとりのかくにん",
              "romaji": "yakitori no kakunin"
            },
            {
              "id": "p_2",
              "left": "唐揚げの確認",
              "right": "Confirming Japanese fried chicken",
              "furigana": "からあげのかくにん",
              "romaji": "karaage no kakunin"
            },
            {
              "id": "p_3",
              "left": "お代わりの確認",
              "right": "Confirming Another serving / refill",
              "furigana": "おかわりのかくにん",
              "romaji": "okawari no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l7_8",
          "type": "dialogue",
          "prompt": "とりあえずについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "とりあえずについてどう思われますか？",
          "furigana": "とりあえずについてどう思われますか？",
          "romaji": "toriaezu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on For now / to start with?",
          "audioText": "とりあえずについてどう思われますか？",
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
      "id": "u7_l8",
      "unitId": "unit_7",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Another serving / refill & Confirming Splitting the bill",
      "titleJp": "お代わりの確認・割り勘の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "お代わりの確認",
        "割り勘の確認",
        "居酒屋の確認"
      ],
      "kanjiKeywords": [
        "代",
        "確",
        "認",
        "割",
        "勘",
        "確",
        "認",
        "居",
        "酒",
        "屋",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u7_l8_1",
          "type": "listen",
          "prompt": "お代わりの確認",
          "furigana": "おかわりのかくにん",
          "romaji": "okawari no kakunin",
          "english": "Confirming Another serving / refill",
          "audioText": "おかわりのかくにん",
          "options": [
            "Confirming Another serving / refill",
            "Confirming Cheers!",
            "Confirming Japanese pub / Izakaya",
            "Cheers!"
          ],
          "correctAnswer": "Confirming Another serving / refill"
        },
        {
          "id": "u7_l8_2",
          "type": "spell",
          "prompt": "お代わりの確認",
          "furigana": "おかわりのかくにん",
          "romaji": "okawari no kakunin",
          "english": "Build 'Confirming Another serving / refill'",
          "audioText": "おかわりのかくにん",
          "tileBank": [
            "の",
            "か",
            "お",
            "か",
            "り",
            "に",
            "わ",
            "く"
          ],
          "correctAnswer": "おかわりのかくにん"
        },
        {
          "id": "u7_l8_3",
          "type": "cloze",
          "prompt": "私は割り勘の確認がすきです",
          "furigana": "わたしはわりかんのかくにんがすきです",
          "romaji": "Watashi wa warikan no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Splitting the bill.",
          "audioText": "割り勘の確認",
          "clozeSentence": "これは割り勘の確認 {{BLANK}} す。",
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
          "id": "u7_l8_4",
          "type": "scramble",
          "prompt": "これは割り勘の確認です",
          "furigana": "これはわりかんのかくにんです",
          "romaji": "Kore wa warikan no kakunin desu.",
          "english": "This is Confirming Splitting the bill.",
          "audioText": "これは割り勘の確認です",
          "scrambleTokens": [
            "それ",
            "これは",
            "です",
            "割り勘の確認",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "割り勘の確認",
            "です"
          ],
          "correctAnswer": "これは割り勘の確認です"
        },
        {
          "id": "u7_l8_5",
          "type": "speak",
          "prompt": "居酒屋の確認",
          "furigana": "いざかやのかくにん",
          "romaji": "izakaya no kakunin",
          "english": "Pronounce: Confirming Japanese pub / Izakaya",
          "audioText": "いざかやのかくにん",
          "targetSpeech": "居酒屋の確認",
          "options": [
            "Confirming Japanese pub / Izakaya",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "居酒屋の確認"
        },
        {
          "id": "u7_l8_6",
          "type": "dictate",
          "prompt": "居酒屋の確認をお願いします",
          "furigana": "いざかやのかくにんをおねがいします",
          "romaji": "izakaya no kakunin o onegaishimasu.",
          "english": "Confirming Japanese pub / Izakaya, please.",
          "audioText": "居酒屋の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "居酒屋の確認",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "居酒屋の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "居酒屋の確認をお願いします"
        },
        {
          "id": "u7_l8_7",
          "type": "match",
          "prompt": "お代わりの確認・割り勘の確認・居酒屋の確認・おつまみの確認",
          "furigana": "おかわりのかくにん・わりかんのかくにん・いざかやのかくにん・おつまみのかくにん",
          "romaji": "okawari no kakunin, warikan no kakunin, izakaya no kakunin, otsumami no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おかわりのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "お代わりの確認",
              "right": "Confirming Another serving / refill",
              "furigana": "おかわりのかくにん",
              "romaji": "okawari no kakunin"
            },
            {
              "id": "p_1",
              "left": "割り勘の確認",
              "right": "Confirming Splitting the bill",
              "furigana": "わりかんのかくにん",
              "romaji": "warikan no kakunin"
            },
            {
              "id": "p_2",
              "left": "居酒屋の確認",
              "right": "Confirming Japanese pub / Izakaya",
              "furigana": "いざかやのかくにん",
              "romaji": "izakaya no kakunin"
            },
            {
              "id": "p_3",
              "left": "おつまみの確認",
              "right": "Confirming Pub snacks / appetizers",
              "furigana": "おつまみのかくにん",
              "romaji": "otsumami no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l8_8",
          "type": "dialogue",
          "prompt": "次は枝豆に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は枝豆に進みましょう。",
          "furigana": "次は枝豆に進みましょう。",
          "romaji": "Tsugi wa edamame ni susumimashou.",
          "english": "Speaker: Let's proceed to Edamame soybeans next.",
          "audioText": "次は枝豆に進みましょう。",
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
      "id": "u7_l9",
      "unitId": "unit_7",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Pub snacks / appetizers & Confirming Whisky highball",
      "titleJp": "おつまみの確認・ハイボールの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "おつまみの確認",
        "ハイボールの確認",
        "ウーロン茶の確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "確",
        "認",
        "茶",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u7_l9_1",
          "type": "listen",
          "prompt": "おつまみの確認",
          "furigana": "おつまみのかくにん",
          "romaji": "otsumami no kakunin",
          "english": "Confirming Pub snacks / appetizers",
          "audioText": "おつまみのかくにん",
          "options": [
            "Confirming Edamame soybeans",
            "Japanese fried chicken",
            "Confirming Pub snacks / appetizers",
            "Confirming Draft beer"
          ],
          "correctAnswer": "Confirming Pub snacks / appetizers"
        },
        {
          "id": "u7_l9_2",
          "type": "spell",
          "prompt": "おつまみの確認",
          "furigana": "おつまみのかくにん",
          "romaji": "otsumami no kakunin",
          "english": "Build 'Confirming Pub snacks / appetizers'",
          "audioText": "おつまみのかくにん",
          "tileBank": [
            "に",
            "の",
            "み",
            "お",
            "く",
            "か",
            "つ",
            "ま"
          ],
          "correctAnswer": "おつまみのかくにん"
        },
        {
          "id": "u7_l9_3",
          "type": "cloze",
          "prompt": "私はハイボールの確認がすきです",
          "furigana": "わたしはハイボールのかくにんがすきです",
          "romaji": "Watashi wa haibooru no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Whisky highball.",
          "audioText": "ハイボールの確認",
          "clozeSentence": "これはハイボールの確認 {{BLANK}} す。",
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
          "id": "u7_l9_4",
          "type": "scramble",
          "prompt": "これはハイボールの確認です",
          "furigana": "これはハイボールのかくにんです",
          "romaji": "Kore wa haibooru no kakunin desu.",
          "english": "This is Confirming Whisky highball.",
          "audioText": "これはハイボールの確認です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "ハイボールの確認",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "ハイボールの確認",
            "です"
          ],
          "correctAnswer": "これはハイボールの確認です"
        },
        {
          "id": "u7_l9_5",
          "type": "speak",
          "prompt": "ウーロン茶の確認",
          "furigana": "ウーロンちゃのかくにん",
          "romaji": "uuroncha no kakunin",
          "english": "Pronounce: Confirming Oolong tea",
          "audioText": "ウーロンちゃのかくにん",
          "targetSpeech": "ウーロン茶の確認",
          "options": [
            "Confirming Oolong tea",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ウーロン茶の確認"
        },
        {
          "id": "u7_l9_6",
          "type": "dictate",
          "prompt": "ウーロン茶の確認をお願いします",
          "furigana": "ウーロンちゃのかくにんをおねがいします",
          "romaji": "uuroncha no kakunin o onegaishimasu.",
          "english": "Confirming Oolong tea, please.",
          "audioText": "ウーロン茶の確認をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "ウーロン茶の確認",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "ウーロン茶の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ウーロン茶の確認をお願いします"
        },
        {
          "id": "u7_l9_7",
          "type": "match",
          "prompt": "おつまみの確認・ハイボールの確認・ウーロン茶の確認・刺身の確認",
          "furigana": "おつまみのかくにん・ハイボールのかくにん・ウーロンちゃのかくにん・さしみのかくにん",
          "romaji": "otsumami no kakunin, haibooru no kakunin, uuroncha no kakunin, sashimi no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おつまみのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "おつまみの確認",
              "right": "Confirming Pub snacks / appetizers",
              "furigana": "おつまみのかくにん",
              "romaji": "otsumami no kakunin"
            },
            {
              "id": "p_1",
              "left": "ハイボールの確認",
              "right": "Confirming Whisky highball",
              "furigana": "ハイボールのかくにん",
              "romaji": "haibooru no kakunin"
            },
            {
              "id": "p_2",
              "left": "ウーロン茶の確認",
              "right": "Confirming Oolong tea",
              "furigana": "ウーロンちゃのかくにん",
              "romaji": "uuroncha no kakunin"
            },
            {
              "id": "p_3",
              "left": "刺身の確認",
              "right": "Confirming Sashimi / sliced raw fish",
              "furigana": "さしみのかくにん",
              "romaji": "sashimi no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l9_8",
          "type": "dialogue",
          "prompt": "乾杯について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "乾杯について教えていただけますか？",
          "furigana": "乾杯について教えていただけますか？",
          "romaji": "kanpai ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Cheers!?",
          "audioText": "乾杯について教えていただけますか？",
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
      "id": "u7_l10",
      "unitId": "unit_7",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Sashimi / sliced raw fish & Confirming Seat / table",
      "titleJp": "刺身の確認・席の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "刺身の確認",
        "席の確認",
        "禁煙の確認"
      ],
      "kanjiKeywords": [
        "刺",
        "身",
        "確",
        "認",
        "席",
        "確",
        "認",
        "禁",
        "煙",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u7_l10_1",
          "type": "listen",
          "prompt": "刺身の確認",
          "furigana": "さしみのかくにん",
          "romaji": "sashimi no kakunin",
          "english": "Confirming Sashimi / sliced raw fish",
          "audioText": "さしみのかくにん",
          "options": [
            "Cheers!",
            "Confirming Draft beer",
            "Confirming Japanese pub / Izakaya",
            "Confirming Sashimi / sliced raw fish"
          ],
          "correctAnswer": "Confirming Sashimi / sliced raw fish"
        },
        {
          "id": "u7_l10_2",
          "type": "spell",
          "prompt": "刺身の確認",
          "furigana": "さしみのかくにん",
          "romaji": "sashimi no kakunin",
          "english": "Build 'Confirming Sashimi / sliced raw fish'",
          "audioText": "さしみのかくにん",
          "tileBank": [
            "し",
            "に",
            "ん",
            "の",
            "み",
            "さ",
            "く",
            "か"
          ],
          "correctAnswer": "さしみのかくにん"
        },
        {
          "id": "u7_l10_3",
          "type": "cloze",
          "prompt": "私は席の確認がすきです",
          "furigana": "わたしはせきのかくにんがすきです",
          "romaji": "Watashi wa seki no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Seat / table.",
          "audioText": "席の確認",
          "clozeSentence": "これは席の確認 {{BLANK}} す。",
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
          "id": "u7_l10_4",
          "type": "scramble",
          "prompt": "これは席の確認です",
          "furigana": "これはせきのかくにんです",
          "romaji": "Kore wa seki no kakunin desu.",
          "english": "This is Confirming Seat / table.",
          "audioText": "これは席の確認です",
          "scrambleTokens": [
            "これは",
            "席の確認",
            "ではありません",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "席の確認",
            "です"
          ],
          "correctAnswer": "これは席の確認です"
        },
        {
          "id": "u7_l10_5",
          "type": "speak",
          "prompt": "禁煙の確認",
          "furigana": "きんえんのかくにん",
          "romaji": "kin-en no kakunin",
          "english": "Pronounce: Confirming No smoking",
          "audioText": "きんえんのかくにん",
          "targetSpeech": "禁煙の確認",
          "options": [
            "Confirming No smoking",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "禁煙の確認"
        },
        {
          "id": "u7_l10_6",
          "type": "dictate",
          "prompt": "禁煙の確認をお願いします",
          "furigana": "きんえんのかくにんをおねがいします",
          "romaji": "kin-en no kakunin o onegaishimasu.",
          "english": "Confirming No smoking, please.",
          "audioText": "禁煙の確認をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "禁煙の確認",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "禁煙の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "禁煙の確認をお願いします"
        },
        {
          "id": "u7_l10_7",
          "type": "match",
          "prompt": "刺身の確認・席の確認・禁煙の確認・乾杯の確認",
          "furigana": "さしみのかくにん・せきのかくにん・きんえんのかくにん・かんぱいのかくにん",
          "romaji": "sashimi no kakunin, seki no kakunin, kin-en no kakunin, kanpai no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さしみのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "刺身の確認",
              "right": "Confirming Sashimi / sliced raw fish",
              "furigana": "さしみのかくにん",
              "romaji": "sashimi no kakunin"
            },
            {
              "id": "p_1",
              "left": "席の確認",
              "right": "Confirming Seat / table",
              "furigana": "せきのかくにん",
              "romaji": "seki no kakunin"
            },
            {
              "id": "p_2",
              "left": "禁煙の確認",
              "right": "Confirming No smoking",
              "furigana": "きんえんのかくにん",
              "romaji": "kin-en no kakunin"
            },
            {
              "id": "p_3",
              "left": "乾杯の確認",
              "right": "Confirming Cheers!",
              "furigana": "かんぱいのかくにん",
              "romaji": "kanpai no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l10_8",
          "type": "dialogue",
          "prompt": "生ビールの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "生ビールの準備はできていますか？",
          "furigana": "生ビールの準備はできていますか？",
          "romaji": "nama biiru no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Draft beer ready?",
          "audioText": "生ビールの準備はできていますか？",
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
      "id": "u7_l11",
      "unitId": "unit_7",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Cheers! & Confirming Draft beer",
      "titleJp": "乾杯の確認・生ビールの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "乾杯の確認",
        "生ビールの確認",
        "とりあえずの確認"
      ],
      "kanjiKeywords": [
        "乾",
        "杯",
        "確",
        "認",
        "生",
        "確",
        "認",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u7_l11_1",
          "type": "listen",
          "prompt": "乾杯の確認",
          "furigana": "かんぱいのかくにん",
          "romaji": "kanpai no kakunin",
          "english": "Confirming Cheers!",
          "audioText": "かんぱいのかくにん",
          "options": [
            "Confirming For now / to start with",
            "Confirming Cheers!",
            "Pub snacks / appetizers",
            "For now / to start with"
          ],
          "correctAnswer": "Confirming Cheers!"
        },
        {
          "id": "u7_l11_2",
          "type": "spell",
          "prompt": "乾杯の確認",
          "furigana": "かんぱいのかくにん",
          "romaji": "kanpai no kakunin",
          "english": "Build 'Confirming Cheers!'",
          "audioText": "かんぱいのかくにん",
          "tileBank": [
            "ぱ",
            "く",
            "に",
            "い",
            "か",
            "か",
            "の",
            "ん"
          ],
          "correctAnswer": "かんぱいのかくにん"
        },
        {
          "id": "u7_l11_3",
          "type": "cloze",
          "prompt": "私は生ビールの確認がすきです",
          "furigana": "わたしはなまビールのかくにんがすきです",
          "romaji": "Watashi wa nama biiru no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Draft beer.",
          "audioText": "生ビールの確認",
          "clozeSentence": "これは生ビールの確認 {{BLANK}} す。",
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
          "id": "u7_l11_4",
          "type": "scramble",
          "prompt": "これは生ビールの確認です",
          "furigana": "これはなまビールのかくにんです",
          "romaji": "Kore wa nama biiru no kakunin desu.",
          "english": "This is Confirming Draft beer.",
          "audioText": "これは生ビールの確認です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "生ビールの確認",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "生ビールの確認",
            "です"
          ],
          "correctAnswer": "これは生ビールの確認です"
        },
        {
          "id": "u7_l11_5",
          "type": "speak",
          "prompt": "とりあえずの確認",
          "furigana": "とりあえずのかくにん",
          "romaji": "toriaezu no kakunin",
          "english": "Pronounce: Confirming For now / to start with",
          "audioText": "とりあえずのかくにん",
          "targetSpeech": "とりあえずの確認",
          "options": [
            "Confirming For now / to start with",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "とりあえずの確認"
        },
        {
          "id": "u7_l11_6",
          "type": "dictate",
          "prompt": "とりあえずの確認をお願いします",
          "furigana": "とりあえずのかくにんをおねがいします",
          "romaji": "toriaezu no kakunin o onegaishimasu.",
          "english": "Confirming For now / to start with, please.",
          "audioText": "とりあえずの確認をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "とりあえずの確認",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "とりあえずの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "とりあえずの確認をお願いします"
        },
        {
          "id": "u7_l11_7",
          "type": "match",
          "prompt": "乾杯の確認・生ビールの確認・とりあえずの確認・枝豆の確認",
          "furigana": "かんぱいのかくにん・なまビールのかくにん・とりあえずのかくにん・えだまめのかくにん",
          "romaji": "kanpai no kakunin, nama biiru no kakunin, toriaezu no kakunin, edamame no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かんぱいのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "乾杯の確認",
              "right": "Confirming Cheers!",
              "furigana": "かんぱいのかくにん",
              "romaji": "kanpai no kakunin"
            },
            {
              "id": "p_1",
              "left": "生ビールの確認",
              "right": "Confirming Draft beer",
              "furigana": "なまビールのかくにん",
              "romaji": "nama biiru no kakunin"
            },
            {
              "id": "p_2",
              "left": "とりあえずの確認",
              "right": "Confirming For now / to start with",
              "furigana": "とりあえずのかくにん",
              "romaji": "toriaezu no kakunin"
            },
            {
              "id": "p_3",
              "left": "枝豆の確認",
              "right": "Confirming Edamame soybeans",
              "furigana": "えだまめのかくにん",
              "romaji": "edamame no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l11_8",
          "type": "dialogue",
          "prompt": "とりあえずについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "とりあえずについてどう思われますか？",
          "furigana": "とりあえずについてどう思われますか？",
          "romaji": "toriaezu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on For now / to start with?",
          "audioText": "とりあえずについてどう思われますか？",
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
      "id": "u7_l12",
      "unitId": "unit_7",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Edamame soybeans & Confirming Grilled chicken skewers",
      "titleJp": "枝豆の確認・焼き鳥の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "枝豆の確認",
        "焼き鳥の確認",
        "唐揚げの確認"
      ],
      "kanjiKeywords": [
        "枝",
        "豆",
        "確",
        "認",
        "焼",
        "鳥",
        "確",
        "認",
        "唐",
        "揚",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u7_l12_1",
          "type": "listen",
          "prompt": "枝豆の確認",
          "furigana": "えだまめのかくにん",
          "romaji": "edamame no kakunin",
          "english": "Confirming Edamame soybeans",
          "audioText": "えだまめのかくにん",
          "options": [
            "Confirming Edamame soybeans",
            "For now / to start with",
            "Seat / table",
            "Splitting the bill"
          ],
          "correctAnswer": "Confirming Edamame soybeans"
        },
        {
          "id": "u7_l12_2",
          "type": "spell",
          "prompt": "枝豆の確認",
          "furigana": "えだまめのかくにん",
          "romaji": "edamame no kakunin",
          "english": "Build 'Confirming Edamame soybeans'",
          "audioText": "えだまめのかくにん",
          "tileBank": [
            "く",
            "ま",
            "に",
            "め",
            "え",
            "の",
            "だ",
            "か"
          ],
          "correctAnswer": "えだまめのかくにん"
        },
        {
          "id": "u7_l12_3",
          "type": "cloze",
          "prompt": "私は焼き鳥の確認がすきです",
          "furigana": "わたしはやきとりのかくにんがすきです",
          "romaji": "Watashi wa yakitori no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Grilled chicken skewers.",
          "audioText": "焼き鳥の確認",
          "clozeSentence": "これは焼き鳥の確認 {{BLANK}} す。",
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
          "id": "u7_l12_4",
          "type": "scramble",
          "prompt": "これは焼き鳥の確認です",
          "furigana": "これはやきとりのかくにんです",
          "romaji": "Kore wa yakitori no kakunin desu.",
          "english": "This is Confirming Grilled chicken skewers.",
          "audioText": "これは焼き鳥の確認です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "焼き鳥の確認",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "焼き鳥の確認",
            "です"
          ],
          "correctAnswer": "これは焼き鳥の確認です"
        },
        {
          "id": "u7_l12_5",
          "type": "speak",
          "prompt": "唐揚げの確認",
          "furigana": "からあげのかくにん",
          "romaji": "karaage no kakunin",
          "english": "Pronounce: Confirming Japanese fried chicken",
          "audioText": "からあげのかくにん",
          "targetSpeech": "唐揚げの確認",
          "options": [
            "Confirming Japanese fried chicken",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "唐揚げの確認"
        },
        {
          "id": "u7_l12_6",
          "type": "dictate",
          "prompt": "唐揚げの確認をお願いします",
          "furigana": "からあげのかくにんをおねがいします",
          "romaji": "karaage no kakunin o onegaishimasu.",
          "english": "Confirming Japanese fried chicken, please.",
          "audioText": "唐揚げの確認をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "です",
            "お願いします",
            "唐揚げの確認"
          ],
          "dictateSolution": [
            "唐揚げの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "唐揚げの確認をお願いします"
        },
        {
          "id": "u7_l12_7",
          "type": "match",
          "prompt": "枝豆の確認・焼き鳥の確認・唐揚げの確認・乾杯",
          "furigana": "えだまめのかくにん・やきとりのかくにん・からあげのかくにん・かんぱい",
          "romaji": "edamame no kakunin, yakitori no kakunin, karaage no kakunin, kanpai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えだまめのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "枝豆の確認",
              "right": "Confirming Edamame soybeans",
              "furigana": "えだまめのかくにん",
              "romaji": "edamame no kakunin"
            },
            {
              "id": "p_1",
              "left": "焼き鳥の確認",
              "right": "Confirming Grilled chicken skewers",
              "furigana": "やきとりのかくにん",
              "romaji": "yakitori no kakunin"
            },
            {
              "id": "p_2",
              "left": "唐揚げの確認",
              "right": "Confirming Japanese fried chicken",
              "furigana": "からあげのかくにん",
              "romaji": "karaage no kakunin"
            },
            {
              "id": "p_3",
              "left": "乾杯",
              "right": "Cheers!",
              "furigana": "かんぱい",
              "romaji": "kanpai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l12_8",
          "type": "dialogue",
          "prompt": "次は枝豆に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は枝豆に進みましょう。",
          "furigana": "次は枝豆に進みましょう。",
          "romaji": "Tsugi wa edamame ni susumimashou.",
          "english": "Speaker: Let's proceed to Edamame soybeans next.",
          "audioText": "次は枝豆に進みましょう。",
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
      "id": "u7_l13",
      "unitId": "unit_7",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Cheers! & Draft beer",
      "titleJp": "乾杯・生ビール",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "乾杯",
        "生ビール",
        "とりあえず"
      ],
      "kanjiKeywords": [
        "乾",
        "杯",
        "生"
      ],
      "items": [
        {
          "id": "u7_l13_1",
          "type": "listen",
          "prompt": "乾杯",
          "furigana": "かんぱい",
          "romaji": "kanpai",
          "english": "Cheers!",
          "audioText": "かんぱい",
          "options": [
            "Edamame soybeans",
            "Confirming Seat / table",
            "Another serving / refill",
            "Cheers!"
          ],
          "correctAnswer": "Cheers!"
        },
        {
          "id": "u7_l13_2",
          "type": "spell",
          "prompt": "乾杯",
          "furigana": "かんぱい",
          "romaji": "kanpai",
          "english": "Build 'Cheers!'",
          "audioText": "かんぱい",
          "tileBank": [
            "ん",
            "け",
            "あ",
            "ひ",
            "ぱ",
            "こ",
            "い",
            "か"
          ],
          "correctAnswer": "かんぱい"
        },
        {
          "id": "u7_l13_3",
          "type": "cloze",
          "prompt": "私は生ビールがすきです",
          "furigana": "わたしはなまビールがすきです",
          "romaji": "Watashi wa nama biiru ga suki desu.",
          "english": "Fill in the blank with the correct particle for Draft beer.",
          "audioText": "生ビール",
          "clozeSentence": "これは生ビール {{BLANK}} す。",
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
          "id": "u7_l13_4",
          "type": "scramble",
          "prompt": "これは生ビールです",
          "furigana": "これはなまビールです",
          "romaji": "Kore wa nama biiru desu.",
          "english": "This is Draft beer.",
          "audioText": "これは生ビールです",
          "scrambleTokens": [
            "これは",
            "生ビール",
            "ではありません",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "生ビール",
            "です"
          ],
          "correctAnswer": "これは生ビールです"
        },
        {
          "id": "u7_l13_5",
          "type": "speak",
          "prompt": "とりあえず",
          "furigana": "とりあえず",
          "romaji": "toriaezu",
          "english": "Pronounce: For now / to start with",
          "audioText": "とりあえず",
          "targetSpeech": "とりあえず",
          "options": [
            "For now / to start with",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "とりあえず"
        },
        {
          "id": "u7_l13_6",
          "type": "dictate",
          "prompt": "とりあえずをお願いします",
          "furigana": "とりあえずをおねがいします",
          "romaji": "toriaezu o onegaishimasu.",
          "english": "For now / to start with, please.",
          "audioText": "とりあえずをお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "です",
            "ありがとう",
            "とりあえず"
          ],
          "dictateSolution": [
            "とりあえず",
            "を",
            "お願いします"
          ],
          "correctAnswer": "とりあえずをお願いします"
        },
        {
          "id": "u7_l13_7",
          "type": "match",
          "prompt": "乾杯・生ビール・とりあえず・枝豆",
          "furigana": "かんぱい・なまビール・とりあえず・えだまめ",
          "romaji": "kanpai, nama biiru, toriaezu, edamame",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かんぱい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "乾杯",
              "right": "Cheers!",
              "furigana": "かんぱい",
              "romaji": "kanpai"
            },
            {
              "id": "p_1",
              "left": "生ビール",
              "right": "Draft beer",
              "furigana": "なまビール",
              "romaji": "nama biiru"
            },
            {
              "id": "p_2",
              "left": "とりあえず",
              "right": "For now / to start with",
              "furigana": "とりあえず",
              "romaji": "toriaezu"
            },
            {
              "id": "p_3",
              "left": "枝豆",
              "right": "Edamame soybeans",
              "furigana": "えだまめ",
              "romaji": "edamame"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l13_8",
          "type": "dialogue",
          "prompt": "乾杯について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "乾杯について教えていただけますか？",
          "furigana": "乾杯について教えていただけますか？",
          "romaji": "kanpai ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Cheers!?",
          "audioText": "乾杯について教えていただけますか？",
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
      "id": "u7_l14",
      "unitId": "unit_7",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Edamame soybeans & Grilled chicken skewers",
      "titleJp": "枝豆・焼き鳥",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "枝豆",
        "焼き鳥",
        "唐揚げ"
      ],
      "kanjiKeywords": [
        "枝",
        "豆",
        "焼",
        "鳥",
        "唐",
        "揚"
      ],
      "items": [
        {
          "id": "u7_l14_1",
          "type": "listen",
          "prompt": "枝豆",
          "furigana": "えだまめ",
          "romaji": "edamame",
          "english": "Edamame soybeans",
          "audioText": "えだまめ",
          "options": [
            "Confirming Edamame soybeans",
            "Confirming Edamame soybeans",
            "Edamame soybeans",
            "Confirming Japanese pub / Izakaya"
          ],
          "correctAnswer": "Edamame soybeans"
        },
        {
          "id": "u7_l14_2",
          "type": "spell",
          "prompt": "枝豆",
          "furigana": "えだまめ",
          "romaji": "edamame",
          "english": "Build 'Edamame soybeans'",
          "audioText": "えだまめ",
          "tileBank": [
            "め",
            "ん",
            "け",
            "え",
            "ふ",
            "だ",
            "ま",
            "そ"
          ],
          "correctAnswer": "えだまめ"
        },
        {
          "id": "u7_l14_3",
          "type": "cloze",
          "prompt": "私は焼き鳥がすきです",
          "furigana": "わたしはやきとりがすきです",
          "romaji": "Watashi wa yakitori ga suki desu.",
          "english": "Fill in the blank with the correct particle for Grilled chicken skewers.",
          "audioText": "焼き鳥",
          "clozeSentence": "これは焼き鳥 {{BLANK}} す。",
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
          "id": "u7_l14_4",
          "type": "scramble",
          "prompt": "これは焼き鳥です",
          "furigana": "これはやきとりです",
          "romaji": "Kore wa yakitori desu.",
          "english": "This is Grilled chicken skewers.",
          "audioText": "これは焼き鳥です",
          "scrambleTokens": [
            "です",
            "焼き鳥",
            "これは",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "焼き鳥",
            "です"
          ],
          "correctAnswer": "これは焼き鳥です"
        },
        {
          "id": "u7_l14_5",
          "type": "speak",
          "prompt": "唐揚げ",
          "furigana": "からあげ",
          "romaji": "karaage",
          "english": "Pronounce: Japanese fried chicken",
          "audioText": "からあげ",
          "targetSpeech": "唐揚げ",
          "options": [
            "Japanese fried chicken",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "唐揚げ"
        },
        {
          "id": "u7_l14_6",
          "type": "dictate",
          "prompt": "唐揚げをお願いします",
          "furigana": "からあげをおねがいします",
          "romaji": "karaage o onegaishimasu.",
          "english": "Japanese fried chicken, please.",
          "audioText": "唐揚げをお願いします",
          "dictateTokens": [
            "です",
            "唐揚げ",
            "ありがとう",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "唐揚げ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "唐揚げをお願いします"
        },
        {
          "id": "u7_l14_7",
          "type": "match",
          "prompt": "枝豆・焼き鳥・唐揚げ・お代わり",
          "furigana": "えだまめ・やきとり・からあげ・おかわり",
          "romaji": "edamame, yakitori, karaage, okawari",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えだまめ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "枝豆",
              "right": "Edamame soybeans",
              "furigana": "えだまめ",
              "romaji": "edamame"
            },
            {
              "id": "p_1",
              "left": "焼き鳥",
              "right": "Grilled chicken skewers",
              "furigana": "やきとり",
              "romaji": "yakitori"
            },
            {
              "id": "p_2",
              "left": "唐揚げ",
              "right": "Japanese fried chicken",
              "furigana": "からあげ",
              "romaji": "karaage"
            },
            {
              "id": "p_3",
              "left": "お代わり",
              "right": "Another serving / refill",
              "furigana": "おかわり",
              "romaji": "okawari"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l14_8",
          "type": "dialogue",
          "prompt": "生ビールの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "生ビールの準備はできていますか？",
          "furigana": "生ビールの準備はできていますか？",
          "romaji": "nama biiru no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Draft beer ready?",
          "audioText": "生ビールの準備はできていますか？",
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
      "id": "u7_l15",
      "unitId": "unit_7",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 7 Master Exam",
      "iconType": "test",
      "title": "Unit 7 Master Exam",
      "titleJp": "第7週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "お代わり",
        "割り勘",
        "居酒屋"
      ],
      "kanjiKeywords": [
        "代",
        "割",
        "勘",
        "居",
        "酒",
        "屋"
      ],
      "items": [
        {
          "id": "u7_l15_1",
          "type": "listen",
          "prompt": "お代わり",
          "furigana": "おかわり",
          "romaji": "okawari",
          "english": "Another serving / refill",
          "audioText": "おかわり",
          "options": [
            "Confirming Another serving / refill",
            "Confirming Grilled chicken skewers",
            "Another serving / refill",
            "Edamame soybeans"
          ],
          "correctAnswer": "Another serving / refill"
        },
        {
          "id": "u7_l15_2",
          "type": "spell",
          "prompt": "お代わり",
          "furigana": "おかわり",
          "romaji": "okawari",
          "english": "Build 'Another serving / refill'",
          "audioText": "おかわり",
          "tileBank": [
            "そ",
            "り",
            "さ",
            "わ",
            "ぬ",
            "か",
            "ひ",
            "お"
          ],
          "correctAnswer": "おかわり"
        },
        {
          "id": "u7_l15_3",
          "type": "cloze",
          "prompt": "私は割り勘がすきです",
          "furigana": "わたしはわりかんがすきです",
          "romaji": "Watashi wa warikan ga suki desu.",
          "english": "Fill in the blank with the correct particle for Splitting the bill.",
          "audioText": "割り勘",
          "clozeSentence": "これは割り勘 {{BLANK}} す。",
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
          "id": "u7_l15_4",
          "type": "scramble",
          "prompt": "これは割り勘です",
          "furigana": "これはわりかんです",
          "romaji": "Kore wa warikan desu.",
          "english": "This is Splitting the bill.",
          "audioText": "これは割り勘です",
          "scrambleTokens": [
            "です",
            "これは",
            "割り勘",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "割り勘",
            "です"
          ],
          "correctAnswer": "これは割り勘です"
        },
        {
          "id": "u7_l15_5",
          "type": "speak",
          "prompt": "居酒屋",
          "furigana": "いざかや",
          "romaji": "izakaya",
          "english": "Pronounce: Japanese pub / Izakaya",
          "audioText": "いざかや",
          "targetSpeech": "居酒屋",
          "options": [
            "Japanese pub / Izakaya",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "居酒屋"
        },
        {
          "id": "u7_l15_6",
          "type": "dictate",
          "prompt": "居酒屋をお願いします",
          "furigana": "いざかやをおねがいします",
          "romaji": "izakaya o onegaishimasu.",
          "english": "Japanese pub / Izakaya, please.",
          "audioText": "居酒屋をお願いします",
          "dictateTokens": [
            "ありがとう",
            "居酒屋",
            "です",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "居酒屋",
            "を",
            "お願いします"
          ],
          "correctAnswer": "居酒屋をお願いします"
        },
        {
          "id": "u7_l15_7",
          "type": "match",
          "prompt": "お代わり・割り勘・居酒屋・おつまみ",
          "furigana": "おかわり・わりかん・いざかや・おつまみ",
          "romaji": "okawari, warikan, izakaya, otsumami",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おかわり",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "お代わり",
              "right": "Another serving / refill",
              "furigana": "おかわり",
              "romaji": "okawari"
            },
            {
              "id": "p_1",
              "left": "割り勘",
              "right": "Splitting the bill",
              "furigana": "わりかん",
              "romaji": "warikan"
            },
            {
              "id": "p_2",
              "left": "居酒屋",
              "right": "Japanese pub / Izakaya",
              "furigana": "いざかや",
              "romaji": "izakaya"
            },
            {
              "id": "p_3",
              "left": "おつまみ",
              "right": "Pub snacks / appetizers",
              "furigana": "おつまみ",
              "romaji": "otsumami"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u7_l15_8",
          "type": "dialogue",
          "prompt": "とりあえずについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "とりあえずについてどう思われますか？",
          "furigana": "とりあえずについてどう思われますか？",
          "romaji": "toriaezu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on For now / to start with?",
          "audioText": "とりあえずについてどう思われますか？",
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
    "id": "gate_unit_7",
    "unitId": "unit_7",
    "title": "Unit 7 Mastery Checkpoint",
    "titleJp": "第7週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u7_l1_1",
        "type": "listen",
        "prompt": "乾杯",
        "furigana": "かんぱい",
        "romaji": "kanpai",
        "english": "Cheers!",
        "audioText": "かんぱい",
        "options": [
          "Confirming Draft beer",
          "Confirming For now / to start with",
          "Sashimi / sliced raw fish",
          "Cheers!"
        ],
        "correctAnswer": "Cheers!"
      },
      {
        "id": "u7_l1_2",
        "type": "spell",
        "prompt": "乾杯",
        "furigana": "かんぱい",
        "romaji": "kanpai",
        "english": "Build 'Cheers!'",
        "audioText": "かんぱい",
        "tileBank": [
          "か",
          "ぱ",
          "ね",
          "い",
          "ふ",
          "あ",
          "わ",
          "ん"
        ],
        "correctAnswer": "かんぱい"
      },
      {
        "id": "u7_l3_1",
        "type": "listen",
        "prompt": "お代わり",
        "furigana": "おかわり",
        "romaji": "okawari",
        "english": "Another serving / refill",
        "audioText": "おかわり",
        "options": [
          "Confirming Japanese pub / Izakaya",
          "Another serving / refill",
          "Confirming Draft beer",
          "No smoking"
        ],
        "correctAnswer": "Another serving / refill"
      },
      {
        "id": "u7_l3_2",
        "type": "spell",
        "prompt": "お代わり",
        "furigana": "おかわり",
        "romaji": "okawari",
        "english": "Build 'Another serving / refill'",
        "audioText": "おかわり",
        "tileBank": [
          "う",
          "し",
          "り",
          "か",
          "の",
          "お",
          "く",
          "わ"
        ],
        "correctAnswer": "おかわり"
      },
      {
        "id": "u7_l5_1",
        "type": "listen",
        "prompt": "刺身",
        "furigana": "さしみ",
        "romaji": "sashimi",
        "english": "Sashimi / sliced raw fish",
        "audioText": "さしみ",
        "options": [
          "No smoking",
          "Confirming Another serving / refill",
          "Confirming Seat / table",
          "Sashimi / sliced raw fish"
        ],
        "correctAnswer": "Sashimi / sliced raw fish"
      },
      {
        "id": "u7_l5_2",
        "type": "spell",
        "prompt": "刺身",
        "furigana": "さしみ",
        "romaji": "sashimi",
        "english": "Build 'Sashimi / sliced raw fish'",
        "audioText": "さしみ",
        "tileBank": [
          "し",
          "さ",
          "い",
          "み",
          "れ",
          "せ",
          "ん",
          "ろ"
        ],
        "correctAnswer": "さしみ"
      },
      {
        "id": "u7_l7_1",
        "type": "listen",
        "prompt": "枝豆の確認",
        "furigana": "えだまめのかくにん",
        "romaji": "edamame no kakunin",
        "english": "Confirming Edamame soybeans",
        "audioText": "えだまめのかくにん",
        "options": [
          "Confirming Draft beer",
          "Confirming For now / to start with",
          "Confirming Edamame soybeans",
          "Splitting the bill"
        ],
        "correctAnswer": "Confirming Edamame soybeans"
      },
      {
        "id": "u7_l7_2",
        "type": "spell",
        "prompt": "枝豆の確認",
        "furigana": "えだまめのかくにん",
        "romaji": "edamame no kakunin",
        "english": "Build 'Confirming Edamame soybeans'",
        "audioText": "えだまめのかくにん",
        "tileBank": [
          "の",
          "ま",
          "に",
          "か",
          "だ",
          "え",
          "め",
          "く"
        ],
        "correctAnswer": "えだまめのかくにん"
      },
      {
        "id": "u7_l9_1",
        "type": "listen",
        "prompt": "おつまみの確認",
        "furigana": "おつまみのかくにん",
        "romaji": "otsumami no kakunin",
        "english": "Confirming Pub snacks / appetizers",
        "audioText": "おつまみのかくにん",
        "options": [
          "Confirming Edamame soybeans",
          "Japanese fried chicken",
          "Confirming Pub snacks / appetizers",
          "Confirming Draft beer"
        ],
        "correctAnswer": "Confirming Pub snacks / appetizers"
      },
      {
        "id": "u7_l9_2",
        "type": "spell",
        "prompt": "おつまみの確認",
        "furigana": "おつまみのかくにん",
        "romaji": "otsumami no kakunin",
        "english": "Build 'Confirming Pub snacks / appetizers'",
        "audioText": "おつまみのかくにん",
        "tileBank": [
          "に",
          "の",
          "み",
          "お",
          "く",
          "か",
          "つ",
          "ま"
        ],
        "correctAnswer": "おつまみのかくにん"
      },
      {
        "id": "u7_l11_1",
        "type": "listen",
        "prompt": "乾杯の確認",
        "furigana": "かんぱいのかくにん",
        "romaji": "kanpai no kakunin",
        "english": "Confirming Cheers!",
        "audioText": "かんぱいのかくにん",
        "options": [
          "Confirming For now / to start with",
          "Confirming Cheers!",
          "Pub snacks / appetizers",
          "For now / to start with"
        ],
        "correctAnswer": "Confirming Cheers!"
      },
      {
        "id": "u7_l11_2",
        "type": "spell",
        "prompt": "乾杯の確認",
        "furigana": "かんぱいのかくにん",
        "romaji": "kanpai no kakunin",
        "english": "Build 'Confirming Cheers!'",
        "audioText": "かんぱいのかくにん",
        "tileBank": [
          "ぱ",
          "く",
          "に",
          "い",
          "か",
          "か",
          "の",
          "ん"
        ],
        "correctAnswer": "かんぱいのかくにん"
      }
    ]
  }
};
