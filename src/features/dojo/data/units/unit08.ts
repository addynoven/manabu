import type { DojoUnit } from "../../models/dojo.model";

export const unit08: DojoUnit = {
  "id": "unit_8",
  "unitNumber": 8,
  "title": "Booking & Staying at a Ryokan",
  "titleJp": "温泉旅館の予約と宿泊",
  "description": "Check into traditional hot spring inns, understand onsen etiquette, and enjoy seasonal kaiseki.",
  "icon": "♨️",
  "themeColor": "#10B981",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u8_l1",
      "unitId": "unit_8",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Hot spring & Traditional Japanese inn",
      "titleJp": "温泉・旅館",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "温泉",
        "旅館",
        "露天風呂"
      ],
      "kanjiKeywords": [
        "温",
        "泉",
        "旅",
        "館",
        "露",
        "天",
        "風",
        "呂"
      ],
      "items": [
        {
          "id": "u8_l1_1",
          "type": "listen",
          "prompt": "温泉",
          "furigana": "おんせん",
          "romaji": "onsen",
          "english": "Hot spring",
          "audioText": "おんせん",
          "options": [
            "Confirming Light cotton kimono",
            "Hot spring",
            "Confirming Hot spring",
            "Traditional multi-course feast"
          ],
          "correctAnswer": "Hot spring"
        },
        {
          "id": "u8_l1_2",
          "type": "spell",
          "prompt": "温泉",
          "furigana": "おんせん",
          "romaji": "onsen",
          "english": "Build 'Hot spring'",
          "audioText": "おんせん",
          "tileBank": [
            "ん",
            "と",
            "ん",
            "は",
            "せ",
            "お",
            "す",
            "の"
          ],
          "correctAnswer": "おんせん"
        },
        {
          "id": "u8_l1_3",
          "type": "cloze",
          "prompt": "私は旅館がすきです",
          "furigana": "わたしはりょかんがすきです",
          "romaji": "Watashi wa ryokan ga suki desu.",
          "english": "Fill in the blank with the correct particle for Traditional Japanese inn.",
          "audioText": "旅館",
          "clozeSentence": "これは旅館 {{BLANK}} す。",
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
          "id": "u8_l1_4",
          "type": "scramble",
          "prompt": "これは旅館です",
          "furigana": "これはりょかんです",
          "romaji": "Kore wa ryokan desu.",
          "english": "This is Traditional Japanese inn.",
          "audioText": "これは旅館です",
          "scrambleTokens": [
            "ではありません",
            "旅館",
            "これは",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "旅館",
            "です"
          ],
          "correctAnswer": "これは旅館です"
        },
        {
          "id": "u8_l1_5",
          "type": "speak",
          "prompt": "露天風呂",
          "furigana": "ろてんぶろ",
          "romaji": "rotenburo",
          "english": "Pronounce: Open-air hot spring bath",
          "audioText": "ろてんぶろ",
          "targetSpeech": "露天風呂",
          "options": [
            "Open-air hot spring bath",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "露天風呂"
        },
        {
          "id": "u8_l1_6",
          "type": "dictate",
          "prompt": "露天風呂をお願いします",
          "furigana": "ろてんぶろをおねがいします",
          "romaji": "rotenburo o onegaishimasu.",
          "english": "Open-air hot spring bath, please.",
          "audioText": "露天風呂をお願いします",
          "dictateTokens": [
            "露天風呂",
            "です",
            "を",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "露天風呂",
            "を",
            "お願いします"
          ],
          "correctAnswer": "露天風呂をお願いします"
        },
        {
          "id": "u8_l1_7",
          "type": "match",
          "prompt": "温泉・旅館・露天風呂・浴衣",
          "furigana": "おんせん・りょかん・ろてんぶろ・ゆかた",
          "romaji": "onsen, ryokan, rotenburo, yukata",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おんせん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "温泉",
              "right": "Hot spring",
              "furigana": "おんせん",
              "romaji": "onsen"
            },
            {
              "id": "p_1",
              "left": "旅館",
              "right": "Traditional Japanese inn",
              "furigana": "りょかん",
              "romaji": "ryokan"
            },
            {
              "id": "p_2",
              "left": "露天風呂",
              "right": "Open-air hot spring bath",
              "furigana": "ろてんぶろ",
              "romaji": "rotenburo"
            },
            {
              "id": "p_3",
              "left": "浴衣",
              "right": "Light cotton kimono",
              "furigana": "ゆかた",
              "romaji": "yukata"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l1_8",
          "type": "dialogue",
          "prompt": "温泉について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "温泉について教えていただけますか？",
          "furigana": "温泉について教えていただけますか？",
          "romaji": "onsen ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hot spring?",
          "audioText": "温泉について教えていただけますか？",
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
      "id": "u8_l2",
      "unitId": "unit_8",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Light cotton kimono & Reservation",
      "titleJp": "浴衣・予約",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "浴衣",
        "予約",
        "部屋"
      ],
      "kanjiKeywords": [
        "浴",
        "衣",
        "予",
        "約",
        "部",
        "屋"
      ],
      "items": [
        {
          "id": "u8_l2_1",
          "type": "listen",
          "prompt": "浴衣",
          "furigana": "ゆかた",
          "romaji": "yukata",
          "english": "Light cotton kimono",
          "audioText": "ゆかた",
          "options": [
            "Confirming Reservation",
            "Light cotton kimono",
            "Dinner",
            "Confirming Light cotton kimono"
          ],
          "correctAnswer": "Light cotton kimono"
        },
        {
          "id": "u8_l2_2",
          "type": "spell",
          "prompt": "浴衣",
          "furigana": "ゆかた",
          "romaji": "yukata",
          "english": "Build 'Light cotton kimono'",
          "audioText": "ゆかた",
          "tileBank": [
            "ゆ",
            "か",
            "て",
            "た",
            "あ",
            "ほ",
            "し",
            "み"
          ],
          "correctAnswer": "ゆかた"
        },
        {
          "id": "u8_l2_3",
          "type": "cloze",
          "prompt": "私は予約がすきです",
          "furigana": "わたしはよやくがすきです",
          "romaji": "Watashi wa yoyaku ga suki desu.",
          "english": "Fill in the blank with the correct particle for Reservation.",
          "audioText": "予約",
          "clozeSentence": "これは予約 {{BLANK}} す。",
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
          "id": "u8_l2_4",
          "type": "scramble",
          "prompt": "これは予約です",
          "furigana": "これはよやくです",
          "romaji": "Kore wa yoyaku desu.",
          "english": "This is Reservation.",
          "audioText": "これは予約です",
          "scrambleTokens": [
            "です",
            "予約",
            "ではありません",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "予約",
            "です"
          ],
          "correctAnswer": "これは予約です"
        },
        {
          "id": "u8_l2_5",
          "type": "speak",
          "prompt": "部屋",
          "furigana": "へや",
          "romaji": "heya",
          "english": "Pronounce: Room",
          "audioText": "へや",
          "targetSpeech": "部屋",
          "options": [
            "Room",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "部屋"
        },
        {
          "id": "u8_l2_6",
          "type": "dictate",
          "prompt": "部屋をお願いします",
          "furigana": "へやをおねがいします",
          "romaji": "heya o onegaishimasu.",
          "english": "Room, please.",
          "audioText": "部屋をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "部屋",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "部屋",
            "を",
            "お願いします"
          ],
          "correctAnswer": "部屋をお願いします"
        },
        {
          "id": "u8_l2_7",
          "type": "match",
          "prompt": "浴衣・予約・部屋・和室",
          "furigana": "ゆかた・よやく・へや・わしつ",
          "romaji": "yukata, yoyaku, heya, washitsu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ゆかた",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "浴衣",
              "right": "Light cotton kimono",
              "furigana": "ゆかた",
              "romaji": "yukata"
            },
            {
              "id": "p_1",
              "left": "予約",
              "right": "Reservation",
              "furigana": "よやく",
              "romaji": "yoyaku"
            },
            {
              "id": "p_2",
              "left": "部屋",
              "right": "Room",
              "furigana": "へや",
              "romaji": "heya"
            },
            {
              "id": "p_3",
              "left": "和室",
              "right": "Japanese-style tatami room",
              "furigana": "わしつ",
              "romaji": "washitsu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l2_8",
          "type": "dialogue",
          "prompt": "旅館の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "旅館の準備はできていますか？",
          "furigana": "旅館の準備はできていますか？",
          "romaji": "ryokan no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Traditional Japanese inn ready?",
          "audioText": "旅館の準備はできていますか？",
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
      "id": "u8_l3",
      "unitId": "unit_8",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Japanese-style tatami room & Tatami mat flooring",
      "titleJp": "和室・畳",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "和室",
        "畳",
        "布団"
      ],
      "kanjiKeywords": [
        "和",
        "室",
        "畳",
        "布",
        "団"
      ],
      "items": [
        {
          "id": "u8_l3_1",
          "type": "listen",
          "prompt": "和室",
          "furigana": "わしつ",
          "romaji": "washitsu",
          "english": "Japanese-style tatami room",
          "audioText": "わしつ",
          "options": [
            "Confirming Reservation",
            "Confirming Open-air hot spring bath",
            "Confirming Room",
            "Japanese-style tatami room"
          ],
          "correctAnswer": "Japanese-style tatami room"
        },
        {
          "id": "u8_l3_2",
          "type": "spell",
          "prompt": "和室",
          "furigana": "わしつ",
          "romaji": "washitsu",
          "english": "Build 'Japanese-style tatami room'",
          "audioText": "わしつ",
          "tileBank": [
            "て",
            "は",
            "つ",
            "し",
            "く",
            "る",
            "り",
            "わ"
          ],
          "correctAnswer": "わしつ"
        },
        {
          "id": "u8_l3_3",
          "type": "cloze",
          "prompt": "私は畳がすきです",
          "furigana": "わたしはたたみがすきです",
          "romaji": "Watashi wa tatami ga suki desu.",
          "english": "Fill in the blank with the correct particle for Tatami mat flooring.",
          "audioText": "畳",
          "clozeSentence": "これは畳 {{BLANK}} す。",
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
          "id": "u8_l3_4",
          "type": "scramble",
          "prompt": "これは畳です",
          "furigana": "これはたたみです",
          "romaji": "Kore wa tatami desu.",
          "english": "This is Tatami mat flooring.",
          "audioText": "これは畳です",
          "scrambleTokens": [
            "です",
            "これは",
            "ではありません",
            "畳",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "畳",
            "です"
          ],
          "correctAnswer": "これは畳です"
        },
        {
          "id": "u8_l3_5",
          "type": "speak",
          "prompt": "布団",
          "furigana": "ふとん",
          "romaji": "futon",
          "english": "Pronounce: Japanese sleeping futon",
          "audioText": "ふとん",
          "targetSpeech": "布団",
          "options": [
            "Japanese sleeping futon",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "布団"
        },
        {
          "id": "u8_l3_6",
          "type": "dictate",
          "prompt": "布団をお願いします",
          "furigana": "ふとんをおねがいします",
          "romaji": "futon o onegaishimasu.",
          "english": "Japanese sleeping futon, please.",
          "audioText": "布団をお願いします",
          "dictateTokens": [
            "を",
            "布団",
            "ありがとう",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "布団",
            "を",
            "お願いします"
          ],
          "correctAnswer": "布団をお願いします"
        },
        {
          "id": "u8_l3_7",
          "type": "match",
          "prompt": "和室・畳・布団・朝食",
          "furigana": "わしつ・たたみ・ふとん・ちょうしょく",
          "romaji": "washitsu, tatami, futon, choushoku",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "わしつ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "和室",
              "right": "Japanese-style tatami room",
              "furigana": "わしつ",
              "romaji": "washitsu"
            },
            {
              "id": "p_1",
              "left": "畳",
              "right": "Tatami mat flooring",
              "furigana": "たたみ",
              "romaji": "tatami"
            },
            {
              "id": "p_2",
              "left": "布団",
              "right": "Japanese sleeping futon",
              "furigana": "ふとん",
              "romaji": "futon"
            },
            {
              "id": "p_3",
              "left": "朝食",
              "right": "Breakfast",
              "furigana": "ちょうしょく",
              "romaji": "choushoku"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l3_8",
          "type": "dialogue",
          "prompt": "露天風呂についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "露天風呂についてどう思われますか？",
          "furigana": "露天風呂についてどう思われますか？",
          "romaji": "rotenburo ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Open-air hot spring bath?",
          "audioText": "露天風呂についてどう思われますか？",
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
      "id": "u8_l4",
      "unitId": "unit_8",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Breakfast & Dinner",
      "titleJp": "朝食・夕食",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "朝食",
        "夕食",
        "懐石料理"
      ],
      "kanjiKeywords": [
        "朝",
        "食",
        "夕",
        "食",
        "懐",
        "石",
        "料",
        "理"
      ],
      "items": [
        {
          "id": "u8_l4_1",
          "type": "listen",
          "prompt": "朝食",
          "furigana": "ちょうしょく",
          "romaji": "choushoku",
          "english": "Breakfast",
          "audioText": "ちょうしょく",
          "options": [
            "Confirming Hot spring",
            "Confirming Japanese sleeping futon",
            "Confirming Breakfast",
            "Breakfast"
          ],
          "correctAnswer": "Breakfast"
        },
        {
          "id": "u8_l4_2",
          "type": "spell",
          "prompt": "朝食",
          "furigana": "ちょうしょく",
          "romaji": "choushoku",
          "english": "Build 'Breakfast'",
          "audioText": "ちょうしょく",
          "tileBank": [
            "う",
            "そ",
            "み",
            "く",
            "ょ",
            "し",
            "ち",
            "ょ"
          ],
          "correctAnswer": "ちょうしょく"
        },
        {
          "id": "u8_l4_3",
          "type": "cloze",
          "prompt": "私は夕食がすきです",
          "furigana": "わたしはゆうしょくがすきです",
          "romaji": "Watashi wa yuushoku ga suki desu.",
          "english": "Fill in the blank with the correct particle for Dinner.",
          "audioText": "夕食",
          "clozeSentence": "これは夕食 {{BLANK}} す。",
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
          "id": "u8_l4_4",
          "type": "scramble",
          "prompt": "これは夕食です",
          "furigana": "これはゆうしょくです",
          "romaji": "Kore wa yuushoku desu.",
          "english": "This is Dinner.",
          "audioText": "これは夕食です",
          "scrambleTokens": [
            "それ",
            "これは",
            "夕食",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "夕食",
            "です"
          ],
          "correctAnswer": "これは夕食です"
        },
        {
          "id": "u8_l4_5",
          "type": "speak",
          "prompt": "懐石料理",
          "furigana": "かいせきりょうり",
          "romaji": "kaiseki ryouri",
          "english": "Pronounce: Traditional multi-course feast",
          "audioText": "かいせきりょうり",
          "targetSpeech": "懐石料理",
          "options": [
            "Traditional multi-course feast",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "懐石料理"
        },
        {
          "id": "u8_l4_6",
          "type": "dictate",
          "prompt": "懐石料理をお願いします",
          "furigana": "かいせきりょうりをおねがいします",
          "romaji": "kaiseki ryouri o onegaishimasu.",
          "english": "Traditional multi-course feast, please.",
          "audioText": "懐石料理をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "ありがとう",
            "懐石料理",
            "お願いします"
          ],
          "dictateSolution": [
            "懐石料理",
            "を",
            "お願いします"
          ],
          "correctAnswer": "懐石料理をお願いします"
        },
        {
          "id": "u8_l4_7",
          "type": "match",
          "prompt": "朝食・夕食・懐石料理・タオル",
          "furigana": "ちょうしょく・ゆうしょく・かいせきりょうり・タオル",
          "romaji": "choushoku, yuushoku, kaiseki ryouri, taoru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ちょうしょく",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "朝食",
              "right": "Breakfast",
              "furigana": "ちょうしょく",
              "romaji": "choushoku"
            },
            {
              "id": "p_1",
              "left": "夕食",
              "right": "Dinner",
              "furigana": "ゆうしょく",
              "romaji": "yuushoku"
            },
            {
              "id": "p_2",
              "left": "懐石料理",
              "right": "Traditional multi-course feast",
              "furigana": "かいせきりょうり",
              "romaji": "kaiseki ryouri"
            },
            {
              "id": "p_3",
              "left": "タオル",
              "right": "Towel",
              "furigana": "タオル",
              "romaji": "taoru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l4_8",
          "type": "dialogue",
          "prompt": "次は浴衣に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は浴衣に進みましょう。",
          "furigana": "次は浴衣に進みましょう。",
          "romaji": "Tsugi wa yukata ni susumimashou.",
          "english": "Speaker: Let's proceed to Light cotton kimono next.",
          "audioText": "次は浴衣に進みましょう。",
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
      "id": "u8_l5",
      "unitId": "unit_8",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Towel & Changing / dressing room",
      "titleJp": "タオル・脱衣所",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "タオル",
        "脱衣所",
        "貸切"
      ],
      "kanjiKeywords": [
        "脱",
        "衣",
        "所",
        "貸",
        "切"
      ],
      "items": [
        {
          "id": "u8_l5_1",
          "type": "listen",
          "prompt": "タオル",
          "furigana": "タオル",
          "romaji": "taoru",
          "english": "Towel",
          "audioText": "タオル",
          "options": [
            "Confirming Traditional Japanese inn",
            "Confirming Open-air hot spring bath",
            "Breakfast",
            "Towel"
          ],
          "correctAnswer": "Towel"
        },
        {
          "id": "u8_l5_2",
          "type": "spell",
          "prompt": "タオル",
          "furigana": "タオル",
          "romaji": "taoru",
          "english": "Build 'Towel'",
          "audioText": "タオル",
          "tileBank": [
            "ル",
            "あ",
            "め",
            "タ",
            "オ",
            "ち",
            "す",
            "ね"
          ],
          "correctAnswer": "タオル"
        },
        {
          "id": "u8_l5_3",
          "type": "cloze",
          "prompt": "私は脱衣所がすきです",
          "furigana": "わたしはだついじょがすきです",
          "romaji": "Watashi wa datsuijo ga suki desu.",
          "english": "Fill in the blank with the correct particle for Changing / dressing room.",
          "audioText": "脱衣所",
          "clozeSentence": "これは脱衣所 {{BLANK}} す。",
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
          "id": "u8_l5_4",
          "type": "scramble",
          "prompt": "これは脱衣所です",
          "furigana": "これはだついじょです",
          "romaji": "Kore wa datsuijo desu.",
          "english": "This is Changing / dressing room.",
          "audioText": "これは脱衣所です",
          "scrambleTokens": [
            "それ",
            "です",
            "ではありません",
            "脱衣所",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "脱衣所",
            "です"
          ],
          "correctAnswer": "これは脱衣所です"
        },
        {
          "id": "u8_l5_5",
          "type": "speak",
          "prompt": "貸切",
          "furigana": "かしきり",
          "romaji": "kashikiri",
          "english": "Pronounce: Private hire / reserved bath",
          "audioText": "かしきり",
          "targetSpeech": "貸切",
          "options": [
            "Private hire / reserved bath",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "貸切"
        },
        {
          "id": "u8_l5_6",
          "type": "dictate",
          "prompt": "貸切をお願いします",
          "furigana": "かしきりをおねがいします",
          "romaji": "kashikiri o onegaishimasu.",
          "english": "Private hire / reserved bath, please.",
          "audioText": "貸切をお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "です",
            "を",
            "貸切"
          ],
          "dictateSolution": [
            "貸切",
            "を",
            "お願いします"
          ],
          "correctAnswer": "貸切をお願いします"
        },
        {
          "id": "u8_l5_7",
          "type": "match",
          "prompt": "タオル・脱衣所・貸切・温泉の確認",
          "furigana": "タオル・だついじょ・かしきり・おんせんのかくにん",
          "romaji": "taoru, datsuijo, kashikiri, onsen no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "タオル",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "タオル",
              "right": "Towel",
              "furigana": "タオル",
              "romaji": "taoru"
            },
            {
              "id": "p_1",
              "left": "脱衣所",
              "right": "Changing / dressing room",
              "furigana": "だついじょ",
              "romaji": "datsuijo"
            },
            {
              "id": "p_2",
              "left": "貸切",
              "right": "Private hire / reserved bath",
              "furigana": "かしきり",
              "romaji": "kashikiri"
            },
            {
              "id": "p_3",
              "left": "温泉の確認",
              "right": "Confirming Hot spring",
              "furigana": "おんせんのかくにん",
              "romaji": "onsen no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l5_8",
          "type": "dialogue",
          "prompt": "温泉について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "温泉について教えていただけますか？",
          "furigana": "温泉について教えていただけますか？",
          "romaji": "onsen ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hot spring?",
          "audioText": "温泉について教えていただけますか？",
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
      "id": "u8_l6",
      "unitId": "unit_8",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Hot spring & Confirming Traditional Japanese inn",
      "titleJp": "温泉の確認・旅館の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "温泉の確認",
        "旅館の確認",
        "露天風呂の確認"
      ],
      "kanjiKeywords": [
        "温",
        "泉",
        "確",
        "認",
        "旅",
        "館",
        "確",
        "認",
        "露",
        "天",
        "風",
        "呂",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u8_l6_1",
          "type": "listen",
          "prompt": "温泉の確認",
          "furigana": "おんせんのかくにん",
          "romaji": "onsen no kakunin",
          "english": "Confirming Hot spring",
          "audioText": "おんせんのかくにん",
          "options": [
            "Confirming Hot spring",
            "Traditional multi-course feast",
            "Tatami mat flooring",
            "Confirming Private hire / reserved bath"
          ],
          "correctAnswer": "Confirming Hot spring"
        },
        {
          "id": "u8_l6_2",
          "type": "spell",
          "prompt": "温泉の確認",
          "furigana": "おんせんのかくにん",
          "romaji": "onsen no kakunin",
          "english": "Build 'Confirming Hot spring'",
          "audioText": "おんせんのかくにん",
          "tileBank": [
            "く",
            "ん",
            "に",
            "ん",
            "お",
            "か",
            "の",
            "せ"
          ],
          "correctAnswer": "おんせんのかくにん"
        },
        {
          "id": "u8_l6_3",
          "type": "cloze",
          "prompt": "私は旅館の確認がすきです",
          "furigana": "わたしはりょかんのかくにんがすきです",
          "romaji": "Watashi wa ryokan no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Traditional Japanese inn.",
          "audioText": "旅館の確認",
          "clozeSentence": "これは旅館の確認 {{BLANK}} す。",
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
          "id": "u8_l6_4",
          "type": "scramble",
          "prompt": "これは旅館の確認です",
          "furigana": "これはりょかんのかくにんです",
          "romaji": "Kore wa ryokan no kakunin desu.",
          "english": "This is Confirming Traditional Japanese inn.",
          "audioText": "これは旅館の確認です",
          "scrambleTokens": [
            "旅館の確認",
            "それ",
            "です",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "旅館の確認",
            "です"
          ],
          "correctAnswer": "これは旅館の確認です"
        },
        {
          "id": "u8_l6_5",
          "type": "speak",
          "prompt": "露天風呂の確認",
          "furigana": "ろてんぶろのかくにん",
          "romaji": "rotenburo no kakunin",
          "english": "Pronounce: Confirming Open-air hot spring bath",
          "audioText": "ろてんぶろのかくにん",
          "targetSpeech": "露天風呂の確認",
          "options": [
            "Confirming Open-air hot spring bath",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "露天風呂の確認"
        },
        {
          "id": "u8_l6_6",
          "type": "dictate",
          "prompt": "露天風呂の確認をお願いします",
          "furigana": "ろてんぶろのかくにんをおねがいします",
          "romaji": "rotenburo no kakunin o onegaishimasu.",
          "english": "Confirming Open-air hot spring bath, please.",
          "audioText": "露天風呂の確認をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "お願いします",
            "を",
            "露天風呂の確認"
          ],
          "dictateSolution": [
            "露天風呂の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "露天風呂の確認をお願いします"
        },
        {
          "id": "u8_l6_7",
          "type": "match",
          "prompt": "温泉の確認・旅館の確認・露天風呂の確認・浴衣の確認",
          "furigana": "おんせんのかくにん・りょかんのかくにん・ろてんぶろのかくにん・ゆかたのかくにん",
          "romaji": "onsen no kakunin, ryokan no kakunin, rotenburo no kakunin, yukata no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おんせんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "温泉の確認",
              "right": "Confirming Hot spring",
              "furigana": "おんせんのかくにん",
              "romaji": "onsen no kakunin"
            },
            {
              "id": "p_1",
              "left": "旅館の確認",
              "right": "Confirming Traditional Japanese inn",
              "furigana": "りょかんのかくにん",
              "romaji": "ryokan no kakunin"
            },
            {
              "id": "p_2",
              "left": "露天風呂の確認",
              "right": "Confirming Open-air hot spring bath",
              "furigana": "ろてんぶろのかくにん",
              "romaji": "rotenburo no kakunin"
            },
            {
              "id": "p_3",
              "left": "浴衣の確認",
              "right": "Confirming Light cotton kimono",
              "furigana": "ゆかたのかくにん",
              "romaji": "yukata no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l6_8",
          "type": "dialogue",
          "prompt": "旅館の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "旅館の準備はできていますか？",
          "furigana": "旅館の準備はできていますか？",
          "romaji": "ryokan no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Traditional Japanese inn ready?",
          "audioText": "旅館の準備はできていますか？",
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
      "id": "u8_l7",
      "unitId": "unit_8",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Light cotton kimono & Confirming Reservation",
      "titleJp": "浴衣の確認・予約の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "浴衣の確認",
        "予約の確認",
        "部屋の確認"
      ],
      "kanjiKeywords": [
        "浴",
        "衣",
        "確",
        "認",
        "予",
        "約",
        "確",
        "認",
        "部",
        "屋",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u8_l7_1",
          "type": "listen",
          "prompt": "浴衣の確認",
          "furigana": "ゆかたのかくにん",
          "romaji": "yukata no kakunin",
          "english": "Confirming Light cotton kimono",
          "audioText": "ゆかたのかくにん",
          "options": [
            "Open-air hot spring bath",
            "Room",
            "Japanese-style tatami room",
            "Confirming Light cotton kimono"
          ],
          "correctAnswer": "Confirming Light cotton kimono"
        },
        {
          "id": "u8_l7_2",
          "type": "spell",
          "prompt": "浴衣の確認",
          "furigana": "ゆかたのかくにん",
          "romaji": "yukata no kakunin",
          "english": "Build 'Confirming Light cotton kimono'",
          "audioText": "ゆかたのかくにん",
          "tileBank": [
            "ゆ",
            "の",
            "た",
            "に",
            "く",
            "か",
            "ん",
            "か"
          ],
          "correctAnswer": "ゆかたのかくにん"
        },
        {
          "id": "u8_l7_3",
          "type": "cloze",
          "prompt": "私は予約の確認がすきです",
          "furigana": "わたしはよやくのかくにんがすきです",
          "romaji": "Watashi wa yoyaku no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Reservation.",
          "audioText": "予約の確認",
          "clozeSentence": "これは予約の確認 {{BLANK}} す。",
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
          "id": "u8_l7_4",
          "type": "scramble",
          "prompt": "これは予約の確認です",
          "furigana": "これはよやくのかくにんです",
          "romaji": "Kore wa yoyaku no kakunin desu.",
          "english": "This is Confirming Reservation.",
          "audioText": "これは予約の確認です",
          "scrambleTokens": [
            "です",
            "予約の確認",
            "それ",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "予約の確認",
            "です"
          ],
          "correctAnswer": "これは予約の確認です"
        },
        {
          "id": "u8_l7_5",
          "type": "speak",
          "prompt": "部屋の確認",
          "furigana": "へやのかくにん",
          "romaji": "heya no kakunin",
          "english": "Pronounce: Confirming Room",
          "audioText": "へやのかくにん",
          "targetSpeech": "部屋の確認",
          "options": [
            "Confirming Room",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "部屋の確認"
        },
        {
          "id": "u8_l7_6",
          "type": "dictate",
          "prompt": "部屋の確認をお願いします",
          "furigana": "へやのかくにんをおねがいします",
          "romaji": "heya no kakunin o onegaishimasu.",
          "english": "Confirming Room, please.",
          "audioText": "部屋の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "部屋の確認",
            "ありがとう",
            "です",
            "を"
          ],
          "dictateSolution": [
            "部屋の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "部屋の確認をお願いします"
        },
        {
          "id": "u8_l7_7",
          "type": "match",
          "prompt": "浴衣の確認・予約の確認・部屋の確認・和室の確認",
          "furigana": "ゆかたのかくにん・よやくのかくにん・へやのかくにん・わしつのかくにん",
          "romaji": "yukata no kakunin, yoyaku no kakunin, heya no kakunin, washitsu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ゆかたのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "浴衣の確認",
              "right": "Confirming Light cotton kimono",
              "furigana": "ゆかたのかくにん",
              "romaji": "yukata no kakunin"
            },
            {
              "id": "p_1",
              "left": "予約の確認",
              "right": "Confirming Reservation",
              "furigana": "よやくのかくにん",
              "romaji": "yoyaku no kakunin"
            },
            {
              "id": "p_2",
              "left": "部屋の確認",
              "right": "Confirming Room",
              "furigana": "へやのかくにん",
              "romaji": "heya no kakunin"
            },
            {
              "id": "p_3",
              "left": "和室の確認",
              "right": "Confirming Japanese-style tatami room",
              "furigana": "わしつのかくにん",
              "romaji": "washitsu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l7_8",
          "type": "dialogue",
          "prompt": "露天風呂についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "露天風呂についてどう思われますか？",
          "furigana": "露天風呂についてどう思われますか？",
          "romaji": "rotenburo ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Open-air hot spring bath?",
          "audioText": "露天風呂についてどう思われますか？",
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
      "id": "u8_l8",
      "unitId": "unit_8",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Japanese-style tatami room & Confirming Tatami mat flooring",
      "titleJp": "和室の確認・畳の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "和室の確認",
        "畳の確認",
        "布団の確認"
      ],
      "kanjiKeywords": [
        "和",
        "室",
        "確",
        "認",
        "畳",
        "確",
        "認",
        "布",
        "団",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u8_l8_1",
          "type": "listen",
          "prompt": "和室の確認",
          "furigana": "わしつのかくにん",
          "romaji": "washitsu no kakunin",
          "english": "Confirming Japanese-style tatami room",
          "audioText": "わしつのかくにん",
          "options": [
            "Towel",
            "Confirming Room",
            "Confirming Japanese-style tatami room",
            "Reservation"
          ],
          "correctAnswer": "Confirming Japanese-style tatami room"
        },
        {
          "id": "u8_l8_2",
          "type": "spell",
          "prompt": "和室の確認",
          "furigana": "わしつのかくにん",
          "romaji": "washitsu no kakunin",
          "english": "Build 'Confirming Japanese-style tatami room'",
          "audioText": "わしつのかくにん",
          "tileBank": [
            "わ",
            "し",
            "つ",
            "く",
            "か",
            "ん",
            "に",
            "の"
          ],
          "correctAnswer": "わしつのかくにん"
        },
        {
          "id": "u8_l8_3",
          "type": "cloze",
          "prompt": "私は畳の確認がすきです",
          "furigana": "わたしはたたみのかくにんがすきです",
          "romaji": "Watashi wa tatami no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Tatami mat flooring.",
          "audioText": "畳の確認",
          "clozeSentence": "これは畳の確認 {{BLANK}} す。",
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
          "id": "u8_l8_4",
          "type": "scramble",
          "prompt": "これは畳の確認です",
          "furigana": "これはたたみのかくにんです",
          "romaji": "Kore wa tatami no kakunin desu.",
          "english": "This is Confirming Tatami mat flooring.",
          "audioText": "これは畳の確認です",
          "scrambleTokens": [
            "ではありません",
            "畳の確認",
            "それ",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "畳の確認",
            "です"
          ],
          "correctAnswer": "これは畳の確認です"
        },
        {
          "id": "u8_l8_5",
          "type": "speak",
          "prompt": "布団の確認",
          "furigana": "ふとんのかくにん",
          "romaji": "futon no kakunin",
          "english": "Pronounce: Confirming Japanese sleeping futon",
          "audioText": "ふとんのかくにん",
          "targetSpeech": "布団の確認",
          "options": [
            "Confirming Japanese sleeping futon",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "布団の確認"
        },
        {
          "id": "u8_l8_6",
          "type": "dictate",
          "prompt": "布団の確認をお願いします",
          "furigana": "ふとんのかくにんをおねがいします",
          "romaji": "futon no kakunin o onegaishimasu.",
          "english": "Confirming Japanese sleeping futon, please.",
          "audioText": "布団の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "を",
            "布団の確認",
            "です"
          ],
          "dictateSolution": [
            "布団の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "布団の確認をお願いします"
        },
        {
          "id": "u8_l8_7",
          "type": "match",
          "prompt": "和室の確認・畳の確認・布団の確認・朝食の確認",
          "furigana": "わしつのかくにん・たたみのかくにん・ふとんのかくにん・ちょうしょくのかくにん",
          "romaji": "washitsu no kakunin, tatami no kakunin, futon no kakunin, choushoku no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "わしつのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "和室の確認",
              "right": "Confirming Japanese-style tatami room",
              "furigana": "わしつのかくにん",
              "romaji": "washitsu no kakunin"
            },
            {
              "id": "p_1",
              "left": "畳の確認",
              "right": "Confirming Tatami mat flooring",
              "furigana": "たたみのかくにん",
              "romaji": "tatami no kakunin"
            },
            {
              "id": "p_2",
              "left": "布団の確認",
              "right": "Confirming Japanese sleeping futon",
              "furigana": "ふとんのかくにん",
              "romaji": "futon no kakunin"
            },
            {
              "id": "p_3",
              "left": "朝食の確認",
              "right": "Confirming Breakfast",
              "furigana": "ちょうしょくのかくにん",
              "romaji": "choushoku no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l8_8",
          "type": "dialogue",
          "prompt": "次は浴衣に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は浴衣に進みましょう。",
          "furigana": "次は浴衣に進みましょう。",
          "romaji": "Tsugi wa yukata ni susumimashou.",
          "english": "Speaker: Let's proceed to Light cotton kimono next.",
          "audioText": "次は浴衣に進みましょう。",
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
      "id": "u8_l9",
      "unitId": "unit_8",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Breakfast & Confirming Dinner",
      "titleJp": "朝食の確認・夕食の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "朝食の確認",
        "夕食の確認",
        "懐石料理の確認"
      ],
      "kanjiKeywords": [
        "朝",
        "食",
        "確",
        "認",
        "夕",
        "食",
        "確",
        "認",
        "懐",
        "石",
        "料",
        "理",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u8_l9_1",
          "type": "listen",
          "prompt": "朝食の確認",
          "furigana": "ちょうしょくのかくにん",
          "romaji": "choushoku no kakunin",
          "english": "Confirming Breakfast",
          "audioText": "ちょうしょくのかくにん",
          "options": [
            "Confirming Hot spring",
            "Traditional multi-course feast",
            "Open-air hot spring bath",
            "Confirming Breakfast"
          ],
          "correctAnswer": "Confirming Breakfast"
        },
        {
          "id": "u8_l9_2",
          "type": "spell",
          "prompt": "朝食の確認",
          "furigana": "ちょうしょくのかくにん",
          "romaji": "choushoku no kakunin",
          "english": "Build 'Confirming Breakfast'",
          "audioText": "ちょうしょくのかくにん",
          "tileBank": [
            "し",
            "ょ",
            "ょ",
            "の",
            "く",
            "ち",
            "か",
            "う"
          ],
          "correctAnswer": "ちょうしょくのかくにん"
        },
        {
          "id": "u8_l9_3",
          "type": "cloze",
          "prompt": "私は夕食の確認がすきです",
          "furigana": "わたしはゆうしょくのかくにんがすきです",
          "romaji": "Watashi wa yuushoku no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Dinner.",
          "audioText": "夕食の確認",
          "clozeSentence": "これは夕食の確認 {{BLANK}} す。",
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
          "id": "u8_l9_4",
          "type": "scramble",
          "prompt": "これは夕食の確認です",
          "furigana": "これはゆうしょくのかくにんです",
          "romaji": "Kore wa yuushoku no kakunin desu.",
          "english": "This is Confirming Dinner.",
          "audioText": "これは夕食の確認です",
          "scrambleTokens": [
            "ではありません",
            "夕食の確認",
            "です",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "夕食の確認",
            "です"
          ],
          "correctAnswer": "これは夕食の確認です"
        },
        {
          "id": "u8_l9_5",
          "type": "speak",
          "prompt": "懐石料理の確認",
          "furigana": "かいせきりょうりのかくにん",
          "romaji": "kaiseki ryouri no kakunin",
          "english": "Pronounce: Confirming Traditional multi-course feast",
          "audioText": "かいせきりょうりのかくにん",
          "targetSpeech": "懐石料理の確認",
          "options": [
            "Confirming Traditional multi-course feast",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "懐石料理の確認"
        },
        {
          "id": "u8_l9_6",
          "type": "dictate",
          "prompt": "懐石料理の確認をお願いします",
          "furigana": "かいせきりょうりのかくにんをおねがいします",
          "romaji": "kaiseki ryouri no kakunin o onegaishimasu.",
          "english": "Confirming Traditional multi-course feast, please.",
          "audioText": "懐石料理の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "を",
            "です",
            "懐石料理の確認"
          ],
          "dictateSolution": [
            "懐石料理の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "懐石料理の確認をお願いします"
        },
        {
          "id": "u8_l9_7",
          "type": "match",
          "prompt": "朝食の確認・夕食の確認・懐石料理の確認・タオルの確認",
          "furigana": "ちょうしょくのかくにん・ゆうしょくのかくにん・かいせきりょうりのかくにん・タオルのかくにん",
          "romaji": "choushoku no kakunin, yuushoku no kakunin, kaiseki ryouri no kakunin, taoru no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ちょうしょくのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "朝食の確認",
              "right": "Confirming Breakfast",
              "furigana": "ちょうしょくのかくにん",
              "romaji": "choushoku no kakunin"
            },
            {
              "id": "p_1",
              "left": "夕食の確認",
              "right": "Confirming Dinner",
              "furigana": "ゆうしょくのかくにん",
              "romaji": "yuushoku no kakunin"
            },
            {
              "id": "p_2",
              "left": "懐石料理の確認",
              "right": "Confirming Traditional multi-course feast",
              "furigana": "かいせきりょうりのかくにん",
              "romaji": "kaiseki ryouri no kakunin"
            },
            {
              "id": "p_3",
              "left": "タオルの確認",
              "right": "Confirming Towel",
              "furigana": "タオルのかくにん",
              "romaji": "taoru no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l9_8",
          "type": "dialogue",
          "prompt": "温泉について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "温泉について教えていただけますか？",
          "furigana": "温泉について教えていただけますか？",
          "romaji": "onsen ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hot spring?",
          "audioText": "温泉について教えていただけますか？",
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
      "id": "u8_l10",
      "unitId": "unit_8",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Towel & Confirming Changing / dressing room",
      "titleJp": "タオルの確認・脱衣所の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "タオルの確認",
        "脱衣所の確認",
        "貸切の確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "脱",
        "衣",
        "所",
        "確",
        "認",
        "貸",
        "切",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u8_l10_1",
          "type": "listen",
          "prompt": "タオルの確認",
          "furigana": "タオルのかくにん",
          "romaji": "taoru no kakunin",
          "english": "Confirming Towel",
          "audioText": "タオルのかくにん",
          "options": [
            "Changing / dressing room",
            "Confirming Light cotton kimono",
            "Confirming Towel",
            "Traditional multi-course feast"
          ],
          "correctAnswer": "Confirming Towel"
        },
        {
          "id": "u8_l10_2",
          "type": "spell",
          "prompt": "タオルの確認",
          "furigana": "タオルのかくにん",
          "romaji": "taoru no kakunin",
          "english": "Build 'Confirming Towel'",
          "audioText": "タオルのかくにん",
          "tileBank": [
            "ん",
            "の",
            "か",
            "オ",
            "タ",
            "ル",
            "に",
            "く"
          ],
          "correctAnswer": "タオルのかくにん"
        },
        {
          "id": "u8_l10_3",
          "type": "cloze",
          "prompt": "私は脱衣所の確認がすきです",
          "furigana": "わたしはだついじょのかくにんがすきです",
          "romaji": "Watashi wa datsuijo no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Changing / dressing room.",
          "audioText": "脱衣所の確認",
          "clozeSentence": "これは脱衣所の確認 {{BLANK}} す。",
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
          "id": "u8_l10_4",
          "type": "scramble",
          "prompt": "これは脱衣所の確認です",
          "furigana": "これはだついじょのかくにんです",
          "romaji": "Kore wa datsuijo no kakunin desu.",
          "english": "This is Confirming Changing / dressing room.",
          "audioText": "これは脱衣所の確認です",
          "scrambleTokens": [
            "です",
            "それ",
            "ではありません",
            "これは",
            "脱衣所の確認"
          ],
          "scrambleSolution": [
            "これは",
            "脱衣所の確認",
            "です"
          ],
          "correctAnswer": "これは脱衣所の確認です"
        },
        {
          "id": "u8_l10_5",
          "type": "speak",
          "prompt": "貸切の確認",
          "furigana": "かしきりのかくにん",
          "romaji": "kashikiri no kakunin",
          "english": "Pronounce: Confirming Private hire / reserved bath",
          "audioText": "かしきりのかくにん",
          "targetSpeech": "貸切の確認",
          "options": [
            "Confirming Private hire / reserved bath",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "貸切の確認"
        },
        {
          "id": "u8_l10_6",
          "type": "dictate",
          "prompt": "貸切の確認をお願いします",
          "furigana": "かしきりのかくにんをおねがいします",
          "romaji": "kashikiri no kakunin o onegaishimasu.",
          "english": "Confirming Private hire / reserved bath, please.",
          "audioText": "貸切の確認をお願いします",
          "dictateTokens": [
            "です",
            "貸切の確認",
            "お願いします",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "貸切の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "貸切の確認をお願いします"
        },
        {
          "id": "u8_l10_7",
          "type": "match",
          "prompt": "タオルの確認・脱衣所の確認・貸切の確認・温泉の確認",
          "furigana": "タオルのかくにん・だついじょのかくにん・かしきりのかくにん・おんせんのかくにん",
          "romaji": "taoru no kakunin, datsuijo no kakunin, kashikiri no kakunin, onsen no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "タオルのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "タオルの確認",
              "right": "Confirming Towel",
              "furigana": "タオルのかくにん",
              "romaji": "taoru no kakunin"
            },
            {
              "id": "p_1",
              "left": "脱衣所の確認",
              "right": "Confirming Changing / dressing room",
              "furigana": "だついじょのかくにん",
              "romaji": "datsuijo no kakunin"
            },
            {
              "id": "p_2",
              "left": "貸切の確認",
              "right": "Confirming Private hire / reserved bath",
              "furigana": "かしきりのかくにん",
              "romaji": "kashikiri no kakunin"
            },
            {
              "id": "p_3",
              "left": "温泉の確認",
              "right": "Confirming Hot spring",
              "furigana": "おんせんのかくにん",
              "romaji": "onsen no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l10_8",
          "type": "dialogue",
          "prompt": "旅館の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "旅館の準備はできていますか？",
          "furigana": "旅館の準備はできていますか？",
          "romaji": "ryokan no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Traditional Japanese inn ready?",
          "audioText": "旅館の準備はできていますか？",
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
      "id": "u8_l11",
      "unitId": "unit_8",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Hot spring & Confirming Traditional Japanese inn",
      "titleJp": "温泉の確認・旅館の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "温泉の確認",
        "旅館の確認",
        "露天風呂の確認"
      ],
      "kanjiKeywords": [
        "温",
        "泉",
        "確",
        "認",
        "旅",
        "館",
        "確",
        "認",
        "露",
        "天",
        "風",
        "呂",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u8_l11_1",
          "type": "listen",
          "prompt": "温泉の確認",
          "furigana": "おんせんのかくにん",
          "romaji": "onsen no kakunin",
          "english": "Confirming Hot spring",
          "audioText": "おんせんのかくにん",
          "options": [
            "Light cotton kimono",
            "Hot spring",
            "Confirming Hot spring",
            "Confirming Japanese-style tatami room"
          ],
          "correctAnswer": "Confirming Hot spring"
        },
        {
          "id": "u8_l11_2",
          "type": "spell",
          "prompt": "温泉の確認",
          "furigana": "おんせんのかくにん",
          "romaji": "onsen no kakunin",
          "english": "Build 'Confirming Hot spring'",
          "audioText": "おんせんのかくにん",
          "tileBank": [
            "く",
            "か",
            "に",
            "の",
            "お",
            "せ",
            "ん",
            "ん"
          ],
          "correctAnswer": "おんせんのかくにん"
        },
        {
          "id": "u8_l11_3",
          "type": "cloze",
          "prompt": "私は旅館の確認がすきです",
          "furigana": "わたしはりょかんのかくにんがすきです",
          "romaji": "Watashi wa ryokan no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Traditional Japanese inn.",
          "audioText": "旅館の確認",
          "clozeSentence": "これは旅館の確認 {{BLANK}} す。",
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
          "id": "u8_l11_4",
          "type": "scramble",
          "prompt": "これは旅館の確認です",
          "furigana": "これはりょかんのかくにんです",
          "romaji": "Kore wa ryokan no kakunin desu.",
          "english": "This is Confirming Traditional Japanese inn.",
          "audioText": "これは旅館の確認です",
          "scrambleTokens": [
            "です",
            "旅館の確認",
            "それ",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "旅館の確認",
            "です"
          ],
          "correctAnswer": "これは旅館の確認です"
        },
        {
          "id": "u8_l11_5",
          "type": "speak",
          "prompt": "露天風呂の確認",
          "furigana": "ろてんぶろのかくにん",
          "romaji": "rotenburo no kakunin",
          "english": "Pronounce: Confirming Open-air hot spring bath",
          "audioText": "ろてんぶろのかくにん",
          "targetSpeech": "露天風呂の確認",
          "options": [
            "Confirming Open-air hot spring bath",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "露天風呂の確認"
        },
        {
          "id": "u8_l11_6",
          "type": "dictate",
          "prompt": "露天風呂の確認をお願いします",
          "furigana": "ろてんぶろのかくにんをおねがいします",
          "romaji": "rotenburo no kakunin o onegaishimasu.",
          "english": "Confirming Open-air hot spring bath, please.",
          "audioText": "露天風呂の確認をお願いします",
          "dictateTokens": [
            "です",
            "露天風呂の確認",
            "を",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "露天風呂の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "露天風呂の確認をお願いします"
        },
        {
          "id": "u8_l11_7",
          "type": "match",
          "prompt": "温泉の確認・旅館の確認・露天風呂の確認・浴衣の確認",
          "furigana": "おんせんのかくにん・りょかんのかくにん・ろてんぶろのかくにん・ゆかたのかくにん",
          "romaji": "onsen no kakunin, ryokan no kakunin, rotenburo no kakunin, yukata no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おんせんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "温泉の確認",
              "right": "Confirming Hot spring",
              "furigana": "おんせんのかくにん",
              "romaji": "onsen no kakunin"
            },
            {
              "id": "p_1",
              "left": "旅館の確認",
              "right": "Confirming Traditional Japanese inn",
              "furigana": "りょかんのかくにん",
              "romaji": "ryokan no kakunin"
            },
            {
              "id": "p_2",
              "left": "露天風呂の確認",
              "right": "Confirming Open-air hot spring bath",
              "furigana": "ろてんぶろのかくにん",
              "romaji": "rotenburo no kakunin"
            },
            {
              "id": "p_3",
              "left": "浴衣の確認",
              "right": "Confirming Light cotton kimono",
              "furigana": "ゆかたのかくにん",
              "romaji": "yukata no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l11_8",
          "type": "dialogue",
          "prompt": "露天風呂についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "露天風呂についてどう思われますか？",
          "furigana": "露天風呂についてどう思われますか？",
          "romaji": "rotenburo ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Open-air hot spring bath?",
          "audioText": "露天風呂についてどう思われますか？",
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
      "id": "u8_l12",
      "unitId": "unit_8",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Light cotton kimono & Confirming Reservation",
      "titleJp": "浴衣の確認・予約の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "浴衣の確認",
        "予約の確認",
        "部屋の確認"
      ],
      "kanjiKeywords": [
        "浴",
        "衣",
        "確",
        "認",
        "予",
        "約",
        "確",
        "認",
        "部",
        "屋",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u8_l12_1",
          "type": "listen",
          "prompt": "浴衣の確認",
          "furigana": "ゆかたのかくにん",
          "romaji": "yukata no kakunin",
          "english": "Confirming Light cotton kimono",
          "audioText": "ゆかたのかくにん",
          "options": [
            "Confirming Private hire / reserved bath",
            "Confirming Light cotton kimono",
            "Confirming Room",
            "Confirming Hot spring"
          ],
          "correctAnswer": "Confirming Light cotton kimono"
        },
        {
          "id": "u8_l12_2",
          "type": "spell",
          "prompt": "浴衣の確認",
          "furigana": "ゆかたのかくにん",
          "romaji": "yukata no kakunin",
          "english": "Build 'Confirming Light cotton kimono'",
          "audioText": "ゆかたのかくにん",
          "tileBank": [
            "く",
            "か",
            "か",
            "に",
            "た",
            "ゆ",
            "の",
            "ん"
          ],
          "correctAnswer": "ゆかたのかくにん"
        },
        {
          "id": "u8_l12_3",
          "type": "cloze",
          "prompt": "私は予約の確認がすきです",
          "furigana": "わたしはよやくのかくにんがすきです",
          "romaji": "Watashi wa yoyaku no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Reservation.",
          "audioText": "予約の確認",
          "clozeSentence": "これは予約の確認 {{BLANK}} す。",
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
          "id": "u8_l12_4",
          "type": "scramble",
          "prompt": "これは予約の確認です",
          "furigana": "これはよやくのかくにんです",
          "romaji": "Kore wa yoyaku no kakunin desu.",
          "english": "This is Confirming Reservation.",
          "audioText": "これは予約の確認です",
          "scrambleTokens": [
            "です",
            "これは",
            "ではありません",
            "それ",
            "予約の確認"
          ],
          "scrambleSolution": [
            "これは",
            "予約の確認",
            "です"
          ],
          "correctAnswer": "これは予約の確認です"
        },
        {
          "id": "u8_l12_5",
          "type": "speak",
          "prompt": "部屋の確認",
          "furigana": "へやのかくにん",
          "romaji": "heya no kakunin",
          "english": "Pronounce: Confirming Room",
          "audioText": "へやのかくにん",
          "targetSpeech": "部屋の確認",
          "options": [
            "Confirming Room",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "部屋の確認"
        },
        {
          "id": "u8_l12_6",
          "type": "dictate",
          "prompt": "部屋の確認をお願いします",
          "furigana": "へやのかくにんをおねがいします",
          "romaji": "heya no kakunin o onegaishimasu.",
          "english": "Confirming Room, please.",
          "audioText": "部屋の確認をお願いします",
          "dictateTokens": [
            "部屋の確認",
            "ありがとう",
            "です",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "部屋の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "部屋の確認をお願いします"
        },
        {
          "id": "u8_l12_7",
          "type": "match",
          "prompt": "浴衣の確認・予約の確認・部屋の確認・温泉",
          "furigana": "ゆかたのかくにん・よやくのかくにん・へやのかくにん・おんせん",
          "romaji": "yukata no kakunin, yoyaku no kakunin, heya no kakunin, onsen",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ゆかたのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "浴衣の確認",
              "right": "Confirming Light cotton kimono",
              "furigana": "ゆかたのかくにん",
              "romaji": "yukata no kakunin"
            },
            {
              "id": "p_1",
              "left": "予約の確認",
              "right": "Confirming Reservation",
              "furigana": "よやくのかくにん",
              "romaji": "yoyaku no kakunin"
            },
            {
              "id": "p_2",
              "left": "部屋の確認",
              "right": "Confirming Room",
              "furigana": "へやのかくにん",
              "romaji": "heya no kakunin"
            },
            {
              "id": "p_3",
              "left": "温泉",
              "right": "Hot spring",
              "furigana": "おんせん",
              "romaji": "onsen"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l12_8",
          "type": "dialogue",
          "prompt": "次は浴衣に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は浴衣に進みましょう。",
          "furigana": "次は浴衣に進みましょう。",
          "romaji": "Tsugi wa yukata ni susumimashou.",
          "english": "Speaker: Let's proceed to Light cotton kimono next.",
          "audioText": "次は浴衣に進みましょう。",
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
      "id": "u8_l13",
      "unitId": "unit_8",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Hot spring & Traditional Japanese inn",
      "titleJp": "温泉・旅館",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "温泉",
        "旅館",
        "露天風呂"
      ],
      "kanjiKeywords": [
        "温",
        "泉",
        "旅",
        "館",
        "露",
        "天",
        "風",
        "呂"
      ],
      "items": [
        {
          "id": "u8_l13_1",
          "type": "listen",
          "prompt": "温泉",
          "furigana": "おんせん",
          "romaji": "onsen",
          "english": "Hot spring",
          "audioText": "おんせん",
          "options": [
            "Tatami mat flooring",
            "Hot spring",
            "Traditional multi-course feast",
            "Confirming Reservation"
          ],
          "correctAnswer": "Hot spring"
        },
        {
          "id": "u8_l13_2",
          "type": "spell",
          "prompt": "温泉",
          "furigana": "おんせん",
          "romaji": "onsen",
          "english": "Build 'Hot spring'",
          "audioText": "おんせん",
          "tileBank": [
            "さ",
            "ん",
            "ま",
            "や",
            "お",
            "し",
            "ん",
            "せ"
          ],
          "correctAnswer": "おんせん"
        },
        {
          "id": "u8_l13_3",
          "type": "cloze",
          "prompt": "私は旅館がすきです",
          "furigana": "わたしはりょかんがすきです",
          "romaji": "Watashi wa ryokan ga suki desu.",
          "english": "Fill in the blank with the correct particle for Traditional Japanese inn.",
          "audioText": "旅館",
          "clozeSentence": "これは旅館 {{BLANK}} す。",
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
          "id": "u8_l13_4",
          "type": "scramble",
          "prompt": "これは旅館です",
          "furigana": "これはりょかんです",
          "romaji": "Kore wa ryokan desu.",
          "english": "This is Traditional Japanese inn.",
          "audioText": "これは旅館です",
          "scrambleTokens": [
            "これは",
            "旅館",
            "それ",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "旅館",
            "です"
          ],
          "correctAnswer": "これは旅館です"
        },
        {
          "id": "u8_l13_5",
          "type": "speak",
          "prompt": "露天風呂",
          "furigana": "ろてんぶろ",
          "romaji": "rotenburo",
          "english": "Pronounce: Open-air hot spring bath",
          "audioText": "ろてんぶろ",
          "targetSpeech": "露天風呂",
          "options": [
            "Open-air hot spring bath",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "露天風呂"
        },
        {
          "id": "u8_l13_6",
          "type": "dictate",
          "prompt": "露天風呂をお願いします",
          "furigana": "ろてんぶろをおねがいします",
          "romaji": "rotenburo o onegaishimasu.",
          "english": "Open-air hot spring bath, please.",
          "audioText": "露天風呂をお願いします",
          "dictateTokens": [
            "露天風呂",
            "を",
            "お願いします",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "露天風呂",
            "を",
            "お願いします"
          ],
          "correctAnswer": "露天風呂をお願いします"
        },
        {
          "id": "u8_l13_7",
          "type": "match",
          "prompt": "温泉・旅館・露天風呂・浴衣",
          "furigana": "おんせん・りょかん・ろてんぶろ・ゆかた",
          "romaji": "onsen, ryokan, rotenburo, yukata",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おんせん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "温泉",
              "right": "Hot spring",
              "furigana": "おんせん",
              "romaji": "onsen"
            },
            {
              "id": "p_1",
              "left": "旅館",
              "right": "Traditional Japanese inn",
              "furigana": "りょかん",
              "romaji": "ryokan"
            },
            {
              "id": "p_2",
              "left": "露天風呂",
              "right": "Open-air hot spring bath",
              "furigana": "ろてんぶろ",
              "romaji": "rotenburo"
            },
            {
              "id": "p_3",
              "left": "浴衣",
              "right": "Light cotton kimono",
              "furigana": "ゆかた",
              "romaji": "yukata"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l13_8",
          "type": "dialogue",
          "prompt": "温泉について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "温泉について教えていただけますか？",
          "furigana": "温泉について教えていただけますか？",
          "romaji": "onsen ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hot spring?",
          "audioText": "温泉について教えていただけますか？",
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
      "id": "u8_l14",
      "unitId": "unit_8",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Light cotton kimono & Reservation",
      "titleJp": "浴衣・予約",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "浴衣",
        "予約",
        "部屋"
      ],
      "kanjiKeywords": [
        "浴",
        "衣",
        "予",
        "約",
        "部",
        "屋"
      ],
      "items": [
        {
          "id": "u8_l14_1",
          "type": "listen",
          "prompt": "浴衣",
          "furigana": "ゆかた",
          "romaji": "yukata",
          "english": "Light cotton kimono",
          "audioText": "ゆかた",
          "options": [
            "Confirming Reservation",
            "Hot spring",
            "Confirming Traditional Japanese inn",
            "Light cotton kimono"
          ],
          "correctAnswer": "Light cotton kimono"
        },
        {
          "id": "u8_l14_2",
          "type": "spell",
          "prompt": "浴衣",
          "furigana": "ゆかた",
          "romaji": "yukata",
          "english": "Build 'Light cotton kimono'",
          "audioText": "ゆかた",
          "tileBank": [
            "ふ",
            "ぬ",
            "ら",
            "ゆ",
            "や",
            "か",
            "ま",
            "た"
          ],
          "correctAnswer": "ゆかた"
        },
        {
          "id": "u8_l14_3",
          "type": "cloze",
          "prompt": "私は予約がすきです",
          "furigana": "わたしはよやくがすきです",
          "romaji": "Watashi wa yoyaku ga suki desu.",
          "english": "Fill in the blank with the correct particle for Reservation.",
          "audioText": "予約",
          "clozeSentence": "これは予約 {{BLANK}} す。",
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
          "id": "u8_l14_4",
          "type": "scramble",
          "prompt": "これは予約です",
          "furigana": "これはよやくです",
          "romaji": "Kore wa yoyaku desu.",
          "english": "This is Reservation.",
          "audioText": "これは予約です",
          "scrambleTokens": [
            "これは",
            "です",
            "それ",
            "ではありません",
            "予約"
          ],
          "scrambleSolution": [
            "これは",
            "予約",
            "です"
          ],
          "correctAnswer": "これは予約です"
        },
        {
          "id": "u8_l14_5",
          "type": "speak",
          "prompt": "部屋",
          "furigana": "へや",
          "romaji": "heya",
          "english": "Pronounce: Room",
          "audioText": "へや",
          "targetSpeech": "部屋",
          "options": [
            "Room",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "部屋"
        },
        {
          "id": "u8_l14_6",
          "type": "dictate",
          "prompt": "部屋をお願いします",
          "furigana": "へやをおねがいします",
          "romaji": "heya o onegaishimasu.",
          "english": "Room, please.",
          "audioText": "部屋をお願いします",
          "dictateTokens": [
            "を",
            "部屋",
            "です",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "部屋",
            "を",
            "お願いします"
          ],
          "correctAnswer": "部屋をお願いします"
        },
        {
          "id": "u8_l14_7",
          "type": "match",
          "prompt": "浴衣・予約・部屋・和室",
          "furigana": "ゆかた・よやく・へや・わしつ",
          "romaji": "yukata, yoyaku, heya, washitsu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ゆかた",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "浴衣",
              "right": "Light cotton kimono",
              "furigana": "ゆかた",
              "romaji": "yukata"
            },
            {
              "id": "p_1",
              "left": "予約",
              "right": "Reservation",
              "furigana": "よやく",
              "romaji": "yoyaku"
            },
            {
              "id": "p_2",
              "left": "部屋",
              "right": "Room",
              "furigana": "へや",
              "romaji": "heya"
            },
            {
              "id": "p_3",
              "left": "和室",
              "right": "Japanese-style tatami room",
              "furigana": "わしつ",
              "romaji": "washitsu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l14_8",
          "type": "dialogue",
          "prompt": "旅館の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "旅館の準備はできていますか？",
          "furigana": "旅館の準備はできていますか？",
          "romaji": "ryokan no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Traditional Japanese inn ready?",
          "audioText": "旅館の準備はできていますか？",
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
      "id": "u8_l15",
      "unitId": "unit_8",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 8 Master Exam",
      "iconType": "test",
      "title": "Unit 8 Master Exam",
      "titleJp": "第8週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "和室",
        "畳",
        "布団"
      ],
      "kanjiKeywords": [
        "和",
        "室",
        "畳",
        "布",
        "団"
      ],
      "items": [
        {
          "id": "u8_l15_1",
          "type": "listen",
          "prompt": "和室",
          "furigana": "わしつ",
          "romaji": "washitsu",
          "english": "Japanese-style tatami room",
          "audioText": "わしつ",
          "options": [
            "Confirming Open-air hot spring bath",
            "Japanese-style tatami room",
            "Room",
            "Confirming Room"
          ],
          "correctAnswer": "Japanese-style tatami room"
        },
        {
          "id": "u8_l15_2",
          "type": "spell",
          "prompt": "和室",
          "furigana": "わしつ",
          "romaji": "washitsu",
          "english": "Build 'Japanese-style tatami room'",
          "audioText": "わしつ",
          "tileBank": [
            "つ",
            "か",
            "み",
            "る",
            "し",
            "わ",
            "お",
            "ふ"
          ],
          "correctAnswer": "わしつ"
        },
        {
          "id": "u8_l15_3",
          "type": "cloze",
          "prompt": "私は畳がすきです",
          "furigana": "わたしはたたみがすきです",
          "romaji": "Watashi wa tatami ga suki desu.",
          "english": "Fill in the blank with the correct particle for Tatami mat flooring.",
          "audioText": "畳",
          "clozeSentence": "これは畳 {{BLANK}} す。",
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
          "id": "u8_l15_4",
          "type": "scramble",
          "prompt": "これは畳です",
          "furigana": "これはたたみです",
          "romaji": "Kore wa tatami desu.",
          "english": "This is Tatami mat flooring.",
          "audioText": "これは畳です",
          "scrambleTokens": [
            "です",
            "これは",
            "畳",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "畳",
            "です"
          ],
          "correctAnswer": "これは畳です"
        },
        {
          "id": "u8_l15_5",
          "type": "speak",
          "prompt": "布団",
          "furigana": "ふとん",
          "romaji": "futon",
          "english": "Pronounce: Japanese sleeping futon",
          "audioText": "ふとん",
          "targetSpeech": "布団",
          "options": [
            "Japanese sleeping futon",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "布団"
        },
        {
          "id": "u8_l15_6",
          "type": "dictate",
          "prompt": "布団をお願いします",
          "furigana": "ふとんをおねがいします",
          "romaji": "futon o onegaishimasu.",
          "english": "Japanese sleeping futon, please.",
          "audioText": "布団をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "お願いします",
            "です",
            "布団"
          ],
          "dictateSolution": [
            "布団",
            "を",
            "お願いします"
          ],
          "correctAnswer": "布団をお願いします"
        },
        {
          "id": "u8_l15_7",
          "type": "match",
          "prompt": "和室・畳・布団・朝食",
          "furigana": "わしつ・たたみ・ふとん・ちょうしょく",
          "romaji": "washitsu, tatami, futon, choushoku",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "わしつ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "和室",
              "right": "Japanese-style tatami room",
              "furigana": "わしつ",
              "romaji": "washitsu"
            },
            {
              "id": "p_1",
              "left": "畳",
              "right": "Tatami mat flooring",
              "furigana": "たたみ",
              "romaji": "tatami"
            },
            {
              "id": "p_2",
              "left": "布団",
              "right": "Japanese sleeping futon",
              "furigana": "ふとん",
              "romaji": "futon"
            },
            {
              "id": "p_3",
              "left": "朝食",
              "right": "Breakfast",
              "furigana": "ちょうしょく",
              "romaji": "choushoku"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u8_l15_8",
          "type": "dialogue",
          "prompt": "露天風呂についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "露天風呂についてどう思われますか？",
          "furigana": "露天風呂についてどう思われますか？",
          "romaji": "rotenburo ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Open-air hot spring bath?",
          "audioText": "露天風呂についてどう思われますか？",
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
    "id": "gate_unit_8",
    "unitId": "unit_8",
    "title": "Unit 8 Mastery Checkpoint",
    "titleJp": "第8週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u8_l1_1",
        "type": "listen",
        "prompt": "温泉",
        "furigana": "おんせん",
        "romaji": "onsen",
        "english": "Hot spring",
        "audioText": "おんせん",
        "options": [
          "Confirming Light cotton kimono",
          "Hot spring",
          "Confirming Hot spring",
          "Traditional multi-course feast"
        ],
        "correctAnswer": "Hot spring"
      },
      {
        "id": "u8_l1_2",
        "type": "spell",
        "prompt": "温泉",
        "furigana": "おんせん",
        "romaji": "onsen",
        "english": "Build 'Hot spring'",
        "audioText": "おんせん",
        "tileBank": [
          "ん",
          "と",
          "ん",
          "は",
          "せ",
          "お",
          "す",
          "の"
        ],
        "correctAnswer": "おんせん"
      },
      {
        "id": "u8_l3_1",
        "type": "listen",
        "prompt": "和室",
        "furigana": "わしつ",
        "romaji": "washitsu",
        "english": "Japanese-style tatami room",
        "audioText": "わしつ",
        "options": [
          "Confirming Reservation",
          "Confirming Open-air hot spring bath",
          "Confirming Room",
          "Japanese-style tatami room"
        ],
        "correctAnswer": "Japanese-style tatami room"
      },
      {
        "id": "u8_l3_2",
        "type": "spell",
        "prompt": "和室",
        "furigana": "わしつ",
        "romaji": "washitsu",
        "english": "Build 'Japanese-style tatami room'",
        "audioText": "わしつ",
        "tileBank": [
          "て",
          "は",
          "つ",
          "し",
          "く",
          "る",
          "り",
          "わ"
        ],
        "correctAnswer": "わしつ"
      },
      {
        "id": "u8_l5_1",
        "type": "listen",
        "prompt": "タオル",
        "furigana": "タオル",
        "romaji": "taoru",
        "english": "Towel",
        "audioText": "タオル",
        "options": [
          "Confirming Traditional Japanese inn",
          "Confirming Open-air hot spring bath",
          "Breakfast",
          "Towel"
        ],
        "correctAnswer": "Towel"
      },
      {
        "id": "u8_l5_2",
        "type": "spell",
        "prompt": "タオル",
        "furigana": "タオル",
        "romaji": "taoru",
        "english": "Build 'Towel'",
        "audioText": "タオル",
        "tileBank": [
          "ル",
          "あ",
          "め",
          "タ",
          "オ",
          "ち",
          "す",
          "ね"
        ],
        "correctAnswer": "タオル"
      },
      {
        "id": "u8_l7_1",
        "type": "listen",
        "prompt": "浴衣の確認",
        "furigana": "ゆかたのかくにん",
        "romaji": "yukata no kakunin",
        "english": "Confirming Light cotton kimono",
        "audioText": "ゆかたのかくにん",
        "options": [
          "Open-air hot spring bath",
          "Room",
          "Japanese-style tatami room",
          "Confirming Light cotton kimono"
        ],
        "correctAnswer": "Confirming Light cotton kimono"
      },
      {
        "id": "u8_l7_2",
        "type": "spell",
        "prompt": "浴衣の確認",
        "furigana": "ゆかたのかくにん",
        "romaji": "yukata no kakunin",
        "english": "Build 'Confirming Light cotton kimono'",
        "audioText": "ゆかたのかくにん",
        "tileBank": [
          "ゆ",
          "の",
          "た",
          "に",
          "く",
          "か",
          "ん",
          "か"
        ],
        "correctAnswer": "ゆかたのかくにん"
      },
      {
        "id": "u8_l9_1",
        "type": "listen",
        "prompt": "朝食の確認",
        "furigana": "ちょうしょくのかくにん",
        "romaji": "choushoku no kakunin",
        "english": "Confirming Breakfast",
        "audioText": "ちょうしょくのかくにん",
        "options": [
          "Confirming Hot spring",
          "Traditional multi-course feast",
          "Open-air hot spring bath",
          "Confirming Breakfast"
        ],
        "correctAnswer": "Confirming Breakfast"
      },
      {
        "id": "u8_l9_2",
        "type": "spell",
        "prompt": "朝食の確認",
        "furigana": "ちょうしょくのかくにん",
        "romaji": "choushoku no kakunin",
        "english": "Build 'Confirming Breakfast'",
        "audioText": "ちょうしょくのかくにん",
        "tileBank": [
          "し",
          "ょ",
          "ょ",
          "の",
          "く",
          "ち",
          "か",
          "う"
        ],
        "correctAnswer": "ちょうしょくのかくにん"
      },
      {
        "id": "u8_l11_1",
        "type": "listen",
        "prompt": "温泉の確認",
        "furigana": "おんせんのかくにん",
        "romaji": "onsen no kakunin",
        "english": "Confirming Hot spring",
        "audioText": "おんせんのかくにん",
        "options": [
          "Light cotton kimono",
          "Hot spring",
          "Confirming Hot spring",
          "Confirming Japanese-style tatami room"
        ],
        "correctAnswer": "Confirming Hot spring"
      },
      {
        "id": "u8_l11_2",
        "type": "spell",
        "prompt": "温泉の確認",
        "furigana": "おんせんのかくにん",
        "romaji": "onsen no kakunin",
        "english": "Build 'Confirming Hot spring'",
        "audioText": "おんせんのかくにん",
        "tileBank": [
          "く",
          "か",
          "に",
          "の",
          "お",
          "せ",
          "ん",
          "ん"
        ],
        "correctAnswer": "おんせんのかくにん"
      }
    ]
  }
};
