import type { DojoUnit } from "../../models/dojo.model";

export const unit05: DojoUnit = {
  "id": "unit_5",
  "unitNumber": 5,
  "title": "Asking Directions in Shibuya",
  "titleJp": "渋谷で道を尋ねる",
  "description": "Navigate Tokyo stations, street corners, famous landmarks, and ask locals for directions.",
  "icon": "🗺️",
  "themeColor": "#3B82F6",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u5_l1",
      "unitId": "unit_5",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Train station & Where",
      "titleJp": "駅・どこ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "駅",
        "どこ",
        "右"
      ],
      "kanjiKeywords": [
        "駅",
        "右"
      ],
      "items": [
        {
          "id": "u5_l1_1",
          "type": "listen",
          "prompt": "駅",
          "furigana": "えき",
          "romaji": "eki",
          "english": "Train station",
          "audioText": "えき",
          "options": [
            "Train station",
            "South exit",
            "Ticket machine area",
            "On foot / walking"
          ],
          "correctAnswer": "Train station"
        },
        {
          "id": "u5_l1_2",
          "type": "spell",
          "prompt": "駅",
          "furigana": "えき",
          "romaji": "eki",
          "english": "Build 'Train station'",
          "audioText": "えき",
          "tileBank": [
            "き",
            "そ",
            "れ",
            "え",
            "に",
            "の",
            "け",
            "ひ"
          ],
          "correctAnswer": "えき"
        },
        {
          "id": "u5_l1_3",
          "type": "cloze",
          "prompt": "私はどこがすきです",
          "furigana": "わたしはどこがすきです",
          "romaji": "Watashi wa doko ga suki desu.",
          "english": "Fill in the blank with the correct particle for Where.",
          "audioText": "どこ",
          "clozeSentence": "これはどこ {{BLANK}} す。",
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
          "id": "u5_l1_4",
          "type": "scramble",
          "prompt": "これはどこです",
          "furigana": "これはどこです",
          "romaji": "Kore wa doko desu.",
          "english": "This is Where.",
          "audioText": "これはどこです",
          "scrambleTokens": [
            "です",
            "これは",
            "どこ",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "どこ",
            "です"
          ],
          "correctAnswer": "これはどこです"
        },
        {
          "id": "u5_l1_5",
          "type": "speak",
          "prompt": "右",
          "furigana": "みぎ",
          "romaji": "migi",
          "english": "Pronounce: Right side",
          "audioText": "みぎ",
          "targetSpeech": "右",
          "options": [
            "Right side",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "右"
        },
        {
          "id": "u5_l1_6",
          "type": "dictate",
          "prompt": "右をお願いします",
          "furigana": "みぎをおねがいします",
          "romaji": "migi o onegaishimasu.",
          "english": "Right side, please.",
          "audioText": "右をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "右",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "右",
            "を",
            "お願いします"
          ],
          "correctAnswer": "右をお願いします"
        },
        {
          "id": "u5_l1_7",
          "type": "match",
          "prompt": "駅・どこ・右・左",
          "furigana": "えき・どこ・みぎ・ひだり",
          "romaji": "eki, doko, migi, hidari",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "駅",
              "right": "Train station",
              "furigana": "えき",
              "romaji": "eki"
            },
            {
              "id": "p_1",
              "left": "どこ",
              "right": "Where",
              "furigana": "どこ",
              "romaji": "doko"
            },
            {
              "id": "p_2",
              "left": "右",
              "right": "Right side",
              "furigana": "みぎ",
              "romaji": "migi"
            },
            {
              "id": "p_3",
              "left": "左",
              "right": "Left side",
              "furigana": "ひだり",
              "romaji": "hidari"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l1_8",
          "type": "dialogue",
          "prompt": "渋谷駅はどちらですか？",
          "dialogueSpeaker": "Traveler",
          "dialoguePrompt": "渋谷駅はどちらですか？",
          "furigana": "渋谷駅はどちらですか？",
          "romaji": "Shibuya-eki wa dochira desu ka?",
          "english": "Traveler: Excuse me, which way is Shibuya Station?",
          "audioText": "渋谷駅はどちらですか？",
          "dialogueOptions": [
            "この道をまっすぐ行って、二つ目の信号を右です。",
            "コーヒーをください",
            "はい、元気です",
            "美味しかったです"
          ],
          "options": [
            "この道をまっすぐ行って、二つ目の信号を右です。",
            "コーヒーをください",
            "はい、元気です",
            "美味しかったです"
          ],
          "correctAnswer": "この道をまっすぐ行って、二つ目の信号を右です。"
        }
      ]
    },
    {
      "id": "u5_l2",
      "unitId": "unit_5",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Left side & Straight ahead",
      "titleJp": "左・まっすぐ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "左",
        "まっすぐ",
        "前"
      ],
      "kanjiKeywords": [
        "左",
        "前"
      ],
      "items": [
        {
          "id": "u5_l2_1",
          "type": "listen",
          "prompt": "左",
          "furigana": "ひだり",
          "romaji": "hidari",
          "english": "Left side",
          "audioText": "ひだり",
          "options": [
            "Left side",
            "Ticket gate",
            "Traffic light",
            "To turn"
          ],
          "correctAnswer": "Left side"
        },
        {
          "id": "u5_l2_2",
          "type": "spell",
          "prompt": "左",
          "furigana": "ひだり",
          "romaji": "hidari",
          "english": "Build 'Left side'",
          "audioText": "ひだり",
          "tileBank": [
            "ひ",
            "く",
            "き",
            "ら",
            "ふ",
            "り",
            "だ",
            "や"
          ],
          "correctAnswer": "ひだり"
        },
        {
          "id": "u5_l2_3",
          "type": "cloze",
          "prompt": "私はまっすぐがすきです",
          "furigana": "わたしはまっすぐがすきです",
          "romaji": "Watashi wa massugu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Straight ahead.",
          "audioText": "まっすぐ",
          "clozeSentence": "これはまっすぐ {{BLANK}} す。",
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
          "id": "u5_l2_4",
          "type": "scramble",
          "prompt": "これはまっすぐです",
          "furigana": "これはまっすぐです",
          "romaji": "Kore wa massugu desu.",
          "english": "This is Straight ahead.",
          "audioText": "これはまっすぐです",
          "scrambleTokens": [
            "それ",
            "です",
            "ではありません",
            "まっすぐ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "まっすぐ",
            "です"
          ],
          "correctAnswer": "これはまっすぐです"
        },
        {
          "id": "u5_l2_5",
          "type": "speak",
          "prompt": "前",
          "furigana": "まえ",
          "romaji": "mae",
          "english": "Pronounce: In front / ahead",
          "audioText": "まえ",
          "targetSpeech": "前",
          "options": [
            "In front / ahead",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "前"
        },
        {
          "id": "u5_l2_6",
          "type": "dictate",
          "prompt": "前をお願いします",
          "furigana": "まえをおねがいします",
          "romaji": "mae o onegaishimasu.",
          "english": "In front / ahead, please.",
          "audioText": "前をお願いします",
          "dictateTokens": [
            "前",
            "ありがとう",
            "を",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "前",
            "を",
            "お願いします"
          ],
          "correctAnswer": "前をお願いします"
        },
        {
          "id": "u5_l2_7",
          "type": "match",
          "prompt": "左・まっすぐ・前・後ろ",
          "furigana": "ひだり・まっすぐ・まえ・うしろ",
          "romaji": "hidari, massugu, mae, ushiro",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ひだり",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "左",
              "right": "Left side",
              "furigana": "ひだり",
              "romaji": "hidari"
            },
            {
              "id": "p_1",
              "left": "まっすぐ",
              "right": "Straight ahead",
              "furigana": "まっすぐ",
              "romaji": "massugu"
            },
            {
              "id": "p_2",
              "left": "前",
              "right": "In front / ahead",
              "furigana": "まえ",
              "romaji": "mae"
            },
            {
              "id": "p_3",
              "left": "後ろ",
              "right": "Behind / back",
              "furigana": "うしろ",
              "romaji": "ushiro"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l2_8",
          "type": "dialogue",
          "prompt": "あの交差点を渡ったすぐそこですよ。",
          "dialogueSpeaker": "Local",
          "dialoguePrompt": "あの交差点を渡ったすぐそこですよ。",
          "furigana": "あの交差点を渡ったすぐそこですよ。",
          "romaji": "Ano kousaten o watatta sugu soko desu yo.",
          "english": "Local: For Hachiko Square, it's right after crossing that intersection.",
          "audioText": "あの交差点を渡ったすぐそこですよ。",
          "dialogueOptions": [
            "わかりました、ありがとうございます！",
            "いいえ、結構です",
            "さようなら",
            "ごちそうさまでした"
          ],
          "options": [
            "わかりました、ありがとうございます！",
            "いいえ、結構です",
            "さようなら",
            "ごちそうさまでした"
          ],
          "correctAnswer": "わかりました、ありがとうございます！"
        }
      ]
    },
    {
      "id": "u5_l3",
      "unitId": "unit_5",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Behind / back & Next to / beside",
      "titleJp": "後ろ・隣",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "後ろ",
        "隣",
        "向かい"
      ],
      "kanjiKeywords": [
        "後",
        "隣",
        "向"
      ],
      "items": [
        {
          "id": "u5_l3_1",
          "type": "listen",
          "prompt": "後ろ",
          "furigana": "うしろ",
          "romaji": "ushiro",
          "english": "Behind / back",
          "audioText": "うしろ",
          "options": [
            "Right over there",
            "Right side",
            "Behind / back",
            "Landmark"
          ],
          "correctAnswer": "Behind / back"
        },
        {
          "id": "u5_l3_2",
          "type": "spell",
          "prompt": "後ろ",
          "furigana": "うしろ",
          "romaji": "ushiro",
          "english": "Build 'Behind / back'",
          "audioText": "うしろ",
          "tileBank": [
            "か",
            "ろ",
            "む",
            "こ",
            "る",
            "ふ",
            "う",
            "し"
          ],
          "correctAnswer": "うしろ"
        },
        {
          "id": "u5_l3_3",
          "type": "cloze",
          "prompt": "私は隣がすきです",
          "furigana": "わたしはとなりがすきです",
          "romaji": "Watashi wa tonari ga suki desu.",
          "english": "Fill in the blank with the correct particle for Next to / beside.",
          "audioText": "隣",
          "clozeSentence": "これは隣 {{BLANK}} す。",
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
          "id": "u5_l3_4",
          "type": "scramble",
          "prompt": "これは隣です",
          "furigana": "これはとなりです",
          "romaji": "Kore wa tonari desu.",
          "english": "This is Next to / beside.",
          "audioText": "これは隣です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "です",
            "隣",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "隣",
            "です"
          ],
          "correctAnswer": "これは隣です"
        },
        {
          "id": "u5_l3_5",
          "type": "speak",
          "prompt": "向かい",
          "furigana": "むかい",
          "romaji": "mukai",
          "english": "Pronounce: Across from / opposite",
          "audioText": "むかい",
          "targetSpeech": "向かい",
          "options": [
            "Across from / opposite",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "向かい"
        },
        {
          "id": "u5_l3_6",
          "type": "dictate",
          "prompt": "向かいをお願いします",
          "furigana": "むかいをおねがいします",
          "romaji": "mukai o onegaishimasu.",
          "english": "Across from / opposite, please.",
          "audioText": "向かいをお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "を",
            "向かい",
            "お願いします"
          ],
          "dictateSolution": [
            "向かい",
            "を",
            "お願いします"
          ],
          "correctAnswer": "向かいをお願いします"
        },
        {
          "id": "u5_l3_7",
          "type": "match",
          "prompt": "後ろ・隣・向かい・近く",
          "furigana": "うしろ・となり・むかい・ちかく",
          "romaji": "ushiro, tonari, mukai, chikaku",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "うしろ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "後ろ",
              "right": "Behind / back",
              "furigana": "うしろ",
              "romaji": "ushiro"
            },
            {
              "id": "p_1",
              "left": "隣",
              "right": "Next to / beside",
              "furigana": "となり",
              "romaji": "tonari"
            },
            {
              "id": "p_2",
              "left": "向かい",
              "right": "Across from / opposite",
              "furigana": "むかい",
              "romaji": "mukai"
            },
            {
              "id": "p_3",
              "left": "近く",
              "right": "Nearby",
              "furigana": "ちかく",
              "romaji": "chikaku"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l3_8",
          "type": "dialogue",
          "prompt": "歩いて何分くらいかかりますか？",
          "dialogueSpeaker": "Tourist",
          "dialoguePrompt": "歩いて何分くらいかかりますか？",
          "furigana": "歩いて何分くらいかかりますか？",
          "romaji": "Aruite nanpun kurai kakarimasu ka?",
          "english": "Tourist: How many minutes does it take on foot?",
          "audioText": "歩いて何分くらいかかりますか？",
          "dialogueOptions": [
            "だいたい5分くらいで着きますよ。",
            "お茶を飲みます",
            "はい、そうです",
            "日本から来ました"
          ],
          "options": [
            "だいたい5分くらいで着きますよ。",
            "お茶を飲みます",
            "はい、そうです",
            "日本から来ました"
          ],
          "correctAnswer": "だいたい5分くらいで着きますよ。"
        }
      ]
    },
    {
      "id": "u5_l4",
      "unitId": "unit_5",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Nearby & Far away",
      "titleJp": "近く・遠い",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "近く",
        "遠い",
        "交差点"
      ],
      "kanjiKeywords": [
        "近",
        "遠",
        "交",
        "差",
        "点"
      ],
      "items": [
        {
          "id": "u5_l4_1",
          "type": "listen",
          "prompt": "近く",
          "furigana": "ちかく",
          "romaji": "chikaku",
          "english": "Nearby",
          "audioText": "ちかく",
          "options": [
            "Right side",
            "To get lost",
            "Guidance / directions",
            "Nearby"
          ],
          "correctAnswer": "Nearby"
        },
        {
          "id": "u5_l4_2",
          "type": "spell",
          "prompt": "近く",
          "furigana": "ちかく",
          "romaji": "chikaku",
          "english": "Build 'Nearby'",
          "audioText": "ちかく",
          "tileBank": [
            "ち",
            "く",
            "な",
            "と",
            "か",
            "ろ",
            "て",
            "い"
          ],
          "correctAnswer": "ちかく"
        },
        {
          "id": "u5_l4_3",
          "type": "cloze",
          "prompt": "私は遠いがすきです",
          "furigana": "わたしはとおいがすきです",
          "romaji": "Watashi wa tooi ga suki desu.",
          "english": "Fill in the blank with the correct particle for Far away.",
          "audioText": "遠い",
          "clozeSentence": "これは遠い {{BLANK}} す。",
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
          "id": "u5_l4_4",
          "type": "scramble",
          "prompt": "これは遠いです",
          "furigana": "これはとおいです",
          "romaji": "Kore wa tooi desu.",
          "english": "This is Far away.",
          "audioText": "これは遠いです",
          "scrambleTokens": [
            "です",
            "遠い",
            "ではありません",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "遠い",
            "です"
          ],
          "correctAnswer": "これは遠いです"
        },
        {
          "id": "u5_l4_5",
          "type": "speak",
          "prompt": "交差点",
          "furigana": "こうさてん",
          "romaji": "kousaten",
          "english": "Pronounce: Intersection",
          "audioText": "こうさてん",
          "targetSpeech": "交差点",
          "options": [
            "Intersection",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "交差点"
        },
        {
          "id": "u5_l4_6",
          "type": "dictate",
          "prompt": "交差点をお願いします",
          "furigana": "こうさてんをおねがいします",
          "romaji": "kousaten o onegaishimasu.",
          "english": "Intersection, please.",
          "audioText": "交差点をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "交差点",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "交差点",
            "を",
            "お願いします"
          ],
          "correctAnswer": "交差点をお願いします"
        },
        {
          "id": "u5_l4_7",
          "type": "match",
          "prompt": "近く・遠い・交差点・信号",
          "furigana": "ちかく・とおい・こうさてん・しんごう",
          "romaji": "chikaku, tooi, kousaten, shingou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ちかく",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "近く",
              "right": "Nearby",
              "furigana": "ちかく",
              "romaji": "chikaku"
            },
            {
              "id": "p_1",
              "left": "遠い",
              "right": "Far away",
              "furigana": "とおい",
              "romaji": "tooi"
            },
            {
              "id": "p_2",
              "left": "交差点",
              "right": "Intersection",
              "furigana": "こうさてん",
              "romaji": "kousaten"
            },
            {
              "id": "p_3",
              "left": "信号",
              "right": "Traffic light",
              "furigana": "しんごう",
              "romaji": "shingou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l4_8",
          "type": "dialogue",
          "prompt": "交番はありますか？",
          "dialogueSpeaker": "Lost",
          "dialoguePrompt": "交番はありますか？",
          "furigana": "交番はありますか？",
          "romaji": "Kouban wa arimasu ka?",
          "english": "Lost: Excuse me, I'm lost. Is there a police box?",
          "audioText": "交番はありますか？",
          "dialogueOptions": [
            "あそこのコンビニの隣にありますよ。",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "options": [
            "あそこのコンビニの隣にありますよ。",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "correctAnswer": "あそこのコンビニの隣にありますよ。"
        }
      ]
    },
    {
      "id": "u5_l5",
      "unitId": "unit_5",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Traffic light & Street corner",
      "titleJp": "信号・角",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "信号",
        "角",
        "横断歩道"
      ],
      "kanjiKeywords": [
        "信",
        "号",
        "角",
        "横",
        "断",
        "歩",
        "道"
      ],
      "items": [
        {
          "id": "u5_l5_1",
          "type": "listen",
          "prompt": "信号",
          "furigana": "しんごう",
          "romaji": "shingou",
          "english": "Traffic light",
          "audioText": "しんごう",
          "options": [
            "Behind / back",
            "Traffic light",
            "Where",
            "To turn"
          ],
          "correctAnswer": "Traffic light"
        },
        {
          "id": "u5_l5_2",
          "type": "spell",
          "prompt": "信号",
          "furigana": "しんごう",
          "romaji": "shingou",
          "english": "Build 'Traffic light'",
          "audioText": "しんごう",
          "tileBank": [
            "ん",
            "し",
            "ご",
            "こ",
            "を",
            "へ",
            "う",
            "そ"
          ],
          "correctAnswer": "しんごう"
        },
        {
          "id": "u5_l5_3",
          "type": "cloze",
          "prompt": "私は角がすきです",
          "furigana": "わたしはかどがすきです",
          "romaji": "Watashi wa kado ga suki desu.",
          "english": "Fill in the blank with the correct particle for Street corner.",
          "audioText": "角",
          "clozeSentence": "これは角 {{BLANK}} す。",
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
          "id": "u5_l5_4",
          "type": "scramble",
          "prompt": "これは角です",
          "furigana": "これはかどです",
          "romaji": "Kore wa kado desu.",
          "english": "This is Street corner.",
          "audioText": "これは角です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "です",
            "それ",
            "角"
          ],
          "scrambleSolution": [
            "これは",
            "角",
            "です"
          ],
          "correctAnswer": "これは角です"
        },
        {
          "id": "u5_l5_5",
          "type": "speak",
          "prompt": "横断歩道",
          "furigana": "おうだんほどう",
          "romaji": "oudanhodou",
          "english": "Pronounce: Pedestrian crosswalk",
          "audioText": "おうだんほどう",
          "targetSpeech": "横断歩道",
          "options": [
            "Pedestrian crosswalk",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "横断歩道"
        },
        {
          "id": "u5_l5_6",
          "type": "dictate",
          "prompt": "横断歩道をお願いします",
          "furigana": "おうだんほどうをおねがいします",
          "romaji": "oudanhodou o onegaishimasu.",
          "english": "Pedestrian crosswalk, please.",
          "audioText": "横断歩道をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "横断歩道",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "横断歩道",
            "を",
            "お願いします"
          ],
          "correctAnswer": "横断歩道をお願いします"
        },
        {
          "id": "u5_l5_7",
          "type": "match",
          "prompt": "信号・角・横断歩道・改札",
          "furigana": "しんごう・かど・おうだんほどう・かいさつ",
          "romaji": "shingou, kado, oudanhodou, kaisatsu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しんごう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "信号",
              "right": "Traffic light",
              "furigana": "しんごう",
              "romaji": "shingou"
            },
            {
              "id": "p_1",
              "left": "角",
              "right": "Street corner",
              "furigana": "かど",
              "romaji": "kado"
            },
            {
              "id": "p_2",
              "left": "横断歩道",
              "right": "Pedestrian crosswalk",
              "furigana": "おうだんほどう",
              "romaji": "oudanhodou"
            },
            {
              "id": "p_3",
              "left": "改札",
              "right": "Ticket gate",
              "furigana": "かいさつ",
              "romaji": "kaisatsu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l5_8",
          "type": "dialogue",
          "prompt": "渋谷駅はどちらですか？",
          "dialogueSpeaker": "Traveler",
          "dialoguePrompt": "渋谷駅はどちらですか？",
          "furigana": "渋谷駅はどちらですか？",
          "romaji": "Shibuya-eki wa dochira desu ka?",
          "english": "Traveler: Excuse me, which way is Shibuya Station?",
          "audioText": "渋谷駅はどちらですか？",
          "dialogueOptions": [
            "この道をまっすぐ行って、二つ目の信号を右です。",
            "コーヒーをください",
            "はい、元気です",
            "美味しかったです"
          ],
          "options": [
            "この道をまっすぐ行って、二つ目の信号を右です。",
            "コーヒーをください",
            "はい、元気です",
            "美味しかったです"
          ],
          "correctAnswer": "この道をまっすぐ行って、二つ目の信号を右です。"
        }
      ]
    },
    {
      "id": "u5_l6",
      "unitId": "unit_5",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Ticket gate & Ticket machine area",
      "titleJp": "改札・切符売り場",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "改札",
        "切符売り場",
        "出口"
      ],
      "kanjiKeywords": [
        "改",
        "札",
        "切",
        "符",
        "売",
        "場",
        "出",
        "口"
      ],
      "items": [
        {
          "id": "u5_l6_1",
          "type": "listen",
          "prompt": "改札",
          "furigana": "かいさつ",
          "romaji": "kaisatsu",
          "english": "Ticket gate",
          "audioText": "かいさつ",
          "options": [
            "South exit",
            "Signboard",
            "Ticket gate",
            "Ticket machine area"
          ],
          "correctAnswer": "Ticket gate"
        },
        {
          "id": "u5_l6_2",
          "type": "spell",
          "prompt": "改札",
          "furigana": "かいさつ",
          "romaji": "kaisatsu",
          "english": "Build 'Ticket gate'",
          "audioText": "かいさつ",
          "tileBank": [
            "や",
            "か",
            "さ",
            "あ",
            "い",
            "せ",
            "ち",
            "つ"
          ],
          "correctAnswer": "かいさつ"
        },
        {
          "id": "u5_l6_3",
          "type": "cloze",
          "prompt": "私は切符売り場がすきです",
          "furigana": "わたしはきっぷうりばがすきです",
          "romaji": "Watashi wa kippu uriba ga suki desu.",
          "english": "Fill in the blank with the correct particle for Ticket machine area.",
          "audioText": "切符売り場",
          "clozeSentence": "これは切符売り場 {{BLANK}} す。",
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
          "id": "u5_l6_4",
          "type": "scramble",
          "prompt": "これは切符売り場です",
          "furigana": "これはきっぷうりばです",
          "romaji": "Kore wa kippu uriba desu.",
          "english": "This is Ticket machine area.",
          "audioText": "これは切符売り場です",
          "scrambleTokens": [
            "これは",
            "です",
            "ではありません",
            "切符売り場",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "切符売り場",
            "です"
          ],
          "correctAnswer": "これは切符売り場です"
        },
        {
          "id": "u5_l6_5",
          "type": "speak",
          "prompt": "出口",
          "furigana": "でぐち",
          "romaji": "deguchi",
          "english": "Pronounce: Exit",
          "audioText": "でぐち",
          "targetSpeech": "出口",
          "options": [
            "Exit",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "出口"
        },
        {
          "id": "u5_l6_6",
          "type": "dictate",
          "prompt": "出口をお願いします",
          "furigana": "でぐちをおねがいします",
          "romaji": "deguchi o onegaishimasu.",
          "english": "Exit, please.",
          "audioText": "出口をお願いします",
          "dictateTokens": [
            "ありがとう",
            "出口",
            "を",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "出口",
            "を",
            "お願いします"
          ],
          "correctAnswer": "出口をお願いします"
        },
        {
          "id": "u5_l6_7",
          "type": "match",
          "prompt": "改札・切符売り場・出口・北口",
          "furigana": "かいさつ・きっぷうりば・でぐち・きたぐち",
          "romaji": "kaisatsu, kippu uriba, deguchi, kitaguchi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かいさつ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "改札",
              "right": "Ticket gate",
              "furigana": "かいさつ",
              "romaji": "kaisatsu"
            },
            {
              "id": "p_1",
              "left": "切符売り場",
              "right": "Ticket machine area",
              "furigana": "きっぷうりば",
              "romaji": "kippu uriba"
            },
            {
              "id": "p_2",
              "left": "出口",
              "right": "Exit",
              "furigana": "でぐち",
              "romaji": "deguchi"
            },
            {
              "id": "p_3",
              "left": "北口",
              "right": "North exit",
              "furigana": "きたぐち",
              "romaji": "kitaguchi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l6_8",
          "type": "dialogue",
          "prompt": "あの交差点を渡ったすぐそこですよ。",
          "dialogueSpeaker": "Local",
          "dialoguePrompt": "あの交差点を渡ったすぐそこですよ。",
          "furigana": "あの交差点を渡ったすぐそこですよ。",
          "romaji": "Ano kousaten o watatta sugu soko desu yo.",
          "english": "Local: For Hachiko Square, it's right after crossing that intersection.",
          "audioText": "あの交差点を渡ったすぐそこですよ。",
          "dialogueOptions": [
            "わかりました、ありがとうございます！",
            "いいえ、結構です",
            "さようなら",
            "ごちそうさまでした"
          ],
          "options": [
            "わかりました、ありがとうございます！",
            "いいえ、結構です",
            "さようなら",
            "ごちそうさまでした"
          ],
          "correctAnswer": "わかりました、ありがとうございます！"
        }
      ]
    },
    {
      "id": "u5_l7",
      "unitId": "unit_5",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "North exit & South exit",
      "titleJp": "北口・南口",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "北口",
        "南口",
        "東口"
      ],
      "kanjiKeywords": [
        "北",
        "口",
        "南",
        "口",
        "東",
        "口"
      ],
      "items": [
        {
          "id": "u5_l7_1",
          "type": "listen",
          "prompt": "北口",
          "furigana": "きたぐち",
          "romaji": "kitaguchi",
          "english": "North exit",
          "audioText": "きたぐち",
          "options": [
            "Train station",
            "Pedestrian crosswalk",
            "Ticket machine area",
            "North exit"
          ],
          "correctAnswer": "North exit"
        },
        {
          "id": "u5_l7_2",
          "type": "spell",
          "prompt": "北口",
          "furigana": "きたぐち",
          "romaji": "kitaguchi",
          "english": "Build 'North exit'",
          "audioText": "きたぐち",
          "tileBank": [
            "た",
            "ち",
            "お",
            "し",
            "ぐ",
            "の",
            "つ",
            "き"
          ],
          "correctAnswer": "きたぐち"
        },
        {
          "id": "u5_l7_3",
          "type": "cloze",
          "prompt": "私は南口がすきです",
          "furigana": "わたしはみなみぐちがすきです",
          "romaji": "Watashi wa minamiguchi ga suki desu.",
          "english": "Fill in the blank with the correct particle for South exit.",
          "audioText": "南口",
          "clozeSentence": "これは南口 {{BLANK}} す。",
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
          "id": "u5_l7_4",
          "type": "scramble",
          "prompt": "これは南口です",
          "furigana": "これはみなみぐちです",
          "romaji": "Kore wa minamiguchi desu.",
          "english": "This is South exit.",
          "audioText": "これは南口です",
          "scrambleTokens": [
            "それ",
            "です",
            "南口",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "南口",
            "です"
          ],
          "correctAnswer": "これは南口です"
        },
        {
          "id": "u5_l7_5",
          "type": "speak",
          "prompt": "東口",
          "furigana": "ひがしぐち",
          "romaji": "higashiguchi",
          "english": "Pronounce: East exit",
          "audioText": "ひがしぐち",
          "targetSpeech": "東口",
          "options": [
            "East exit",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "東口"
        },
        {
          "id": "u5_l7_6",
          "type": "dictate",
          "prompt": "東口をお願いします",
          "furigana": "ひがしぐちをおねがいします",
          "romaji": "higashiguchi o onegaishimasu.",
          "english": "East exit, please.",
          "audioText": "東口をお願いします",
          "dictateTokens": [
            "ありがとう",
            "東口",
            "お願いします",
            "です",
            "を"
          ],
          "dictateSolution": [
            "東口",
            "を",
            "お願いします"
          ],
          "correctAnswer": "東口をお願いします"
        },
        {
          "id": "u5_l7_7",
          "type": "match",
          "prompt": "北口・南口・東口・西口",
          "furigana": "きたぐち・みなみぐち・ひがしぐち・にしぐち",
          "romaji": "kitaguchi, minamiguchi, higashiguchi, nishiguchi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "きたぐち",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "北口",
              "right": "North exit",
              "furigana": "きたぐち",
              "romaji": "kitaguchi"
            },
            {
              "id": "p_1",
              "left": "南口",
              "right": "South exit",
              "furigana": "みなみぐち",
              "romaji": "minamiguchi"
            },
            {
              "id": "p_2",
              "left": "東口",
              "right": "East exit",
              "furigana": "ひがしぐち",
              "romaji": "higashiguchi"
            },
            {
              "id": "p_3",
              "left": "西口",
              "right": "West exit",
              "furigana": "にしぐち",
              "romaji": "nishiguchi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l7_8",
          "type": "dialogue",
          "prompt": "歩いて何分くらいかかりますか？",
          "dialogueSpeaker": "Tourist",
          "dialoguePrompt": "歩いて何分くらいかかりますか？",
          "furigana": "歩いて何分くらいかかりますか？",
          "romaji": "Aruite nanpun kurai kakarimasu ka?",
          "english": "Tourist: How many minutes does it take on foot?",
          "audioText": "歩いて何分くらいかかりますか？",
          "dialogueOptions": [
            "だいたい5分くらいで着きますよ。",
            "お茶を飲みます",
            "はい、そうです",
            "日本から来ました"
          ],
          "options": [
            "だいたい5分くらいで着きますよ。",
            "お茶を飲みます",
            "はい、そうです",
            "日本から来ました"
          ],
          "correctAnswer": "だいたい5分くらいで着きますよ。"
        }
      ]
    },
    {
      "id": "u5_l8",
      "unitId": "unit_5",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "West exit & Restroom",
      "titleJp": "西口・トイレ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "西口",
        "トイレ",
        "コンビニ"
      ],
      "kanjiKeywords": [
        "西",
        "口"
      ],
      "items": [
        {
          "id": "u5_l8_1",
          "type": "listen",
          "prompt": "西口",
          "furigana": "にしぐち",
          "romaji": "nishiguchi",
          "english": "West exit",
          "audioText": "にしぐち",
          "options": [
            "To get lost",
            "Guidance / directions",
            "Next to / beside",
            "West exit"
          ],
          "correctAnswer": "West exit"
        },
        {
          "id": "u5_l8_2",
          "type": "spell",
          "prompt": "西口",
          "furigana": "にしぐち",
          "romaji": "nishiguchi",
          "english": "Build 'West exit'",
          "audioText": "にしぐち",
          "tileBank": [
            "あ",
            "ち",
            "し",
            "ぐ",
            "に",
            "ひ",
            "ゆ",
            "き"
          ],
          "correctAnswer": "にしぐち"
        },
        {
          "id": "u5_l8_3",
          "type": "cloze",
          "prompt": "私はトイレがすきです",
          "furigana": "わたしはトイレがすきです",
          "romaji": "Watashi wa toire ga suki desu.",
          "english": "Fill in the blank with the correct particle for Restroom.",
          "audioText": "トイレ",
          "clozeSentence": "これはトイレ {{BLANK}} す。",
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
          "id": "u5_l8_4",
          "type": "scramble",
          "prompt": "これはトイレです",
          "furigana": "これはトイレです",
          "romaji": "Kore wa toire desu.",
          "english": "This is Restroom.",
          "audioText": "これはトイレです",
          "scrambleTokens": [
            "トイレ",
            "それ",
            "これは",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "トイレ",
            "です"
          ],
          "correctAnswer": "これはトイレです"
        },
        {
          "id": "u5_l8_5",
          "type": "speak",
          "prompt": "コンビニ",
          "furigana": "コンビニ",
          "romaji": "konbini",
          "english": "Pronounce: Convenience store",
          "audioText": "コンビニ",
          "targetSpeech": "コンビニ",
          "options": [
            "Convenience store",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "コンビニ"
        },
        {
          "id": "u5_l8_6",
          "type": "dictate",
          "prompt": "コンビニをお願いします",
          "furigana": "コンビニをおねがいします",
          "romaji": "konbini o onegaishimasu.",
          "english": "Convenience store, please.",
          "audioText": "コンビニをお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "お願いします",
            "コンビニ",
            "です"
          ],
          "dictateSolution": [
            "コンビニ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "コンビニをお願いします"
        },
        {
          "id": "u5_l8_7",
          "type": "match",
          "prompt": "西口・トイレ・コンビニ・交番",
          "furigana": "にしぐち・トイレ・コンビニ・こうばん",
          "romaji": "nishiguchi, toire, konbini, kouban",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "にしぐち",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "西口",
              "right": "West exit",
              "furigana": "にしぐち",
              "romaji": "nishiguchi"
            },
            {
              "id": "p_1",
              "left": "トイレ",
              "right": "Restroom",
              "furigana": "トイレ",
              "romaji": "toire"
            },
            {
              "id": "p_2",
              "left": "コンビニ",
              "right": "Convenience store",
              "furigana": "コンビニ",
              "romaji": "konbini"
            },
            {
              "id": "p_3",
              "left": "交番",
              "right": "Police box",
              "furigana": "こうばん",
              "romaji": "kouban"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l8_8",
          "type": "dialogue",
          "prompt": "交番はありますか？",
          "dialogueSpeaker": "Lost",
          "dialoguePrompt": "交番はありますか？",
          "furigana": "交番はありますか？",
          "romaji": "Kouban wa arimasu ka?",
          "english": "Lost: Excuse me, I'm lost. Is there a police box?",
          "audioText": "交番はありますか？",
          "dialogueOptions": [
            "あそこのコンビニの隣にありますよ。",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "options": [
            "あそこのコンビニの隣にありますよ。",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "correctAnswer": "あそこのコンビニの隣にありますよ。"
        }
      ]
    },
    {
      "id": "u5_l9",
      "unitId": "unit_5",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Police box & Bank",
      "titleJp": "交番・銀行",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "交番",
        "銀行",
        "郵便局"
      ],
      "kanjiKeywords": [
        "交",
        "番",
        "銀",
        "行",
        "郵",
        "便",
        "局"
      ],
      "items": [
        {
          "id": "u5_l9_1",
          "type": "listen",
          "prompt": "交番",
          "furigana": "こうばん",
          "romaji": "kouban",
          "english": "Police box",
          "audioText": "こうばん",
          "options": [
            "Police box",
            "Landmark",
            "Restroom",
            "To turn"
          ],
          "correctAnswer": "Police box"
        },
        {
          "id": "u5_l9_2",
          "type": "spell",
          "prompt": "交番",
          "furigana": "こうばん",
          "romaji": "kouban",
          "english": "Build 'Police box'",
          "audioText": "こうばん",
          "tileBank": [
            "ば",
            "き",
            "こ",
            "う",
            "も",
            "は",
            "と",
            "ん"
          ],
          "correctAnswer": "こうばん"
        },
        {
          "id": "u5_l9_3",
          "type": "cloze",
          "prompt": "私は銀行がすきです",
          "furigana": "わたしはぎんこうがすきです",
          "romaji": "Watashi wa ginkou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Bank.",
          "audioText": "銀行",
          "clozeSentence": "これは銀行 {{BLANK}} す。",
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
          "id": "u5_l9_4",
          "type": "scramble",
          "prompt": "これは銀行です",
          "furigana": "これはぎんこうです",
          "romaji": "Kore wa ginkou desu.",
          "english": "This is Bank.",
          "audioText": "これは銀行です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "です",
            "それ",
            "銀行"
          ],
          "scrambleSolution": [
            "これは",
            "銀行",
            "です"
          ],
          "correctAnswer": "これは銀行です"
        },
        {
          "id": "u5_l9_5",
          "type": "speak",
          "prompt": "郵便局",
          "furigana": "ゆうびんきょく",
          "romaji": "yuubinkyoku",
          "english": "Pronounce: Post office",
          "audioText": "ゆうびんきょく",
          "targetSpeech": "郵便局",
          "options": [
            "Post office",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "郵便局"
        },
        {
          "id": "u5_l9_6",
          "type": "dictate",
          "prompt": "郵便局をお願いします",
          "furigana": "ゆうびんきょくをおねがいします",
          "romaji": "yuubinkyoku o onegaishimasu.",
          "english": "Post office, please.",
          "audioText": "郵便局をお願いします",
          "dictateTokens": [
            "郵便局",
            "です",
            "ありがとう",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "郵便局",
            "を",
            "お願いします"
          ],
          "correctAnswer": "郵便局をお願いします"
        },
        {
          "id": "u5_l9_7",
          "type": "match",
          "prompt": "交番・銀行・郵便局・歩いて",
          "furigana": "こうばん・ぎんこう・ゆうびんきょく・あるいて",
          "romaji": "kouban, ginkou, yuubinkyoku, aruite",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "こうばん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "交番",
              "right": "Police box",
              "furigana": "こうばん",
              "romaji": "kouban"
            },
            {
              "id": "p_1",
              "left": "銀行",
              "right": "Bank",
              "furigana": "ぎんこう",
              "romaji": "ginkou"
            },
            {
              "id": "p_2",
              "left": "郵便局",
              "right": "Post office",
              "furigana": "ゆうびんきょく",
              "romaji": "yuubinkyoku"
            },
            {
              "id": "p_3",
              "left": "歩いて",
              "right": "On foot / walking",
              "furigana": "あるいて",
              "romaji": "aruite"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l9_8",
          "type": "dialogue",
          "prompt": "渋谷駅はどちらですか？",
          "dialogueSpeaker": "Traveler",
          "dialoguePrompt": "渋谷駅はどちらですか？",
          "furigana": "渋谷駅はどちらですか？",
          "romaji": "Shibuya-eki wa dochira desu ka?",
          "english": "Traveler: Excuse me, which way is Shibuya Station?",
          "audioText": "渋谷駅はどちらですか？",
          "dialogueOptions": [
            "この道をまっすぐ行って、二つ目の信号を右です。",
            "コーヒーをください",
            "はい、元気です",
            "美味しかったです"
          ],
          "options": [
            "この道をまっすぐ行って、二つ目の信号を右です。",
            "コーヒーをください",
            "はい、元気です",
            "美味しかったです"
          ],
          "correctAnswer": "この道をまっすぐ行って、二つ目の信号を右です。"
        }
      ]
    },
    {
      "id": "u5_l10",
      "unitId": "unit_5",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "On foot / walking & To turn",
      "titleJp": "歩いて・曲がる",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "歩いて",
        "曲がる",
        "渡る"
      ],
      "kanjiKeywords": [
        "歩",
        "曲",
        "渡"
      ],
      "items": [
        {
          "id": "u5_l10_1",
          "type": "listen",
          "prompt": "歩いて",
          "furigana": "あるいて",
          "romaji": "aruite",
          "english": "On foot / walking",
          "audioText": "あるいて",
          "options": [
            "East exit",
            "On foot / walking",
            "Landmark",
            "Signboard"
          ],
          "correctAnswer": "On foot / walking"
        },
        {
          "id": "u5_l10_2",
          "type": "spell",
          "prompt": "歩いて",
          "furigana": "あるいて",
          "romaji": "aruite",
          "english": "Build 'On foot / walking'",
          "audioText": "あるいて",
          "tileBank": [
            "ふ",
            "て",
            "ん",
            "ま",
            "い",
            "あ",
            "る",
            "ほ"
          ],
          "correctAnswer": "あるいて"
        },
        {
          "id": "u5_l10_3",
          "type": "cloze",
          "prompt": "私は曲がるがすきです",
          "furigana": "わたしはまがるがすきです",
          "romaji": "Watashi wa magaru ga suki desu.",
          "english": "Fill in the blank with the correct particle for To turn.",
          "audioText": "曲がる",
          "clozeSentence": "これは曲がる {{BLANK}} す。",
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
          "id": "u5_l10_4",
          "type": "scramble",
          "prompt": "これは曲がるです",
          "furigana": "これはまがるです",
          "romaji": "Kore wa magaru desu.",
          "english": "This is To turn.",
          "audioText": "これは曲がるです",
          "scrambleTokens": [
            "曲がる",
            "これは",
            "です",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "曲がる",
            "です"
          ],
          "correctAnswer": "これは曲がるです"
        },
        {
          "id": "u5_l10_5",
          "type": "speak",
          "prompt": "渡る",
          "furigana": "わたる",
          "romaji": "wataru",
          "english": "Pronounce: To cross (street/bridge)",
          "audioText": "わたる",
          "targetSpeech": "渡る",
          "options": [
            "To cross (street/bridge)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "渡る"
        },
        {
          "id": "u5_l10_6",
          "type": "dictate",
          "prompt": "渡るをお願いします",
          "furigana": "わたるをおねがいします",
          "romaji": "wataru o onegaishimasu.",
          "english": "To cross (street/bridge), please.",
          "audioText": "渡るをお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "渡る",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "渡る",
            "を",
            "お願いします"
          ],
          "correctAnswer": "渡るをお願いします"
        },
        {
          "id": "u5_l10_7",
          "type": "match",
          "prompt": "歩いて・曲がる・渡る・道",
          "furigana": "あるいて・まがる・わたる・みち",
          "romaji": "aruite, magaru, wataru, michi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "あるいて",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "歩いて",
              "right": "On foot / walking",
              "furigana": "あるいて",
              "romaji": "aruite"
            },
            {
              "id": "p_1",
              "left": "曲がる",
              "right": "To turn",
              "furigana": "まがる",
              "romaji": "magaru"
            },
            {
              "id": "p_2",
              "left": "渡る",
              "right": "To cross (street/bridge)",
              "furigana": "わたる",
              "romaji": "wataru"
            },
            {
              "id": "p_3",
              "left": "道",
              "right": "Road / path / way",
              "furigana": "みち",
              "romaji": "michi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l10_8",
          "type": "dialogue",
          "prompt": "あの交差点を渡ったすぐそこですよ。",
          "dialogueSpeaker": "Local",
          "dialoguePrompt": "あの交差点を渡ったすぐそこですよ。",
          "furigana": "あの交差点を渡ったすぐそこですよ。",
          "romaji": "Ano kousaten o watatta sugu soko desu yo.",
          "english": "Local: For Hachiko Square, it's right after crossing that intersection.",
          "audioText": "あの交差点を渡ったすぐそこですよ。",
          "dialogueOptions": [
            "わかりました、ありがとうございます！",
            "いいえ、結構です",
            "さようなら",
            "ごちそうさまでした"
          ],
          "options": [
            "わかりました、ありがとうございます！",
            "いいえ、結構です",
            "さようなら",
            "ごちそうさまでした"
          ],
          "correctAnswer": "わかりました、ありがとうございます！"
        }
      ]
    },
    {
      "id": "u5_l11",
      "unitId": "unit_5",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Road / path / way & Guidance / directions",
      "titleJp": "道・案内",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "道",
        "案内",
        "迷う"
      ],
      "kanjiKeywords": [
        "道",
        "案",
        "内",
        "迷"
      ],
      "items": [
        {
          "id": "u5_l11_1",
          "type": "listen",
          "prompt": "道",
          "furigana": "みち",
          "romaji": "michi",
          "english": "Road / path / way",
          "audioText": "みち",
          "options": [
            "Road / path / way",
            "In front / ahead",
            "Far away",
            "To turn"
          ],
          "correctAnswer": "Road / path / way"
        },
        {
          "id": "u5_l11_2",
          "type": "spell",
          "prompt": "道",
          "furigana": "みち",
          "romaji": "michi",
          "english": "Build 'Road / path / way'",
          "audioText": "みち",
          "tileBank": [
            "ろ",
            "み",
            "い",
            "ち",
            "お",
            "す",
            "よ",
            "て"
          ],
          "correctAnswer": "みち"
        },
        {
          "id": "u5_l11_3",
          "type": "cloze",
          "prompt": "私は案内がすきです",
          "furigana": "わたしはあんないがすきです",
          "romaji": "Watashi wa annai ga suki desu.",
          "english": "Fill in the blank with the correct particle for Guidance / directions.",
          "audioText": "案内",
          "clozeSentence": "私は案内 {{BLANK}} 好きです。",
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
          "id": "u5_l11_4",
          "type": "scramble",
          "prompt": "これは案内です",
          "furigana": "これはあんないです",
          "romaji": "Kore wa annai desu.",
          "english": "This is Guidance / directions.",
          "audioText": "これは案内です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "これは",
            "案内"
          ],
          "scrambleSolution": [
            "これは",
            "案内",
            "です"
          ],
          "correctAnswer": "これは案内です"
        },
        {
          "id": "u5_l11_5",
          "type": "speak",
          "prompt": "迷う",
          "furigana": "まよう",
          "romaji": "mayou",
          "english": "Pronounce: To get lost",
          "audioText": "まよう",
          "targetSpeech": "迷う",
          "options": [
            "To get lost",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "迷う"
        },
        {
          "id": "u5_l11_6",
          "type": "dictate",
          "prompt": "迷うをお願いします",
          "furigana": "まようをおねがいします",
          "romaji": "mayou o onegaishimasu.",
          "english": "To get lost, please.",
          "audioText": "迷うをお願いします",
          "dictateTokens": [
            "迷う",
            "です",
            "お願いします",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "迷う",
            "を",
            "お願いします"
          ],
          "correctAnswer": "迷うをお願いします"
        },
        {
          "id": "u5_l11_7",
          "type": "match",
          "prompt": "道・案内・迷う・すぐそこ",
          "furigana": "みち・あんない・まよう・すぐそこ",
          "romaji": "michi, annai, mayou, sugu soko",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "みち",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "道",
              "right": "Road / path / way",
              "furigana": "みち",
              "romaji": "michi"
            },
            {
              "id": "p_1",
              "left": "案内",
              "right": "Guidance / directions",
              "furigana": "あんない",
              "romaji": "annai"
            },
            {
              "id": "p_2",
              "left": "迷う",
              "right": "To get lost",
              "furigana": "まよう",
              "romaji": "mayou"
            },
            {
              "id": "p_3",
              "left": "すぐそこ",
              "right": "Right over there",
              "furigana": "すぐそこ",
              "romaji": "sugu soko"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l11_8",
          "type": "dialogue",
          "prompt": "歩いて何分くらいかかりますか？",
          "dialogueSpeaker": "Tourist",
          "dialoguePrompt": "歩いて何分くらいかかりますか？",
          "furigana": "歩いて何分くらいかかりますか？",
          "romaji": "Aruite nanpun kurai kakarimasu ka?",
          "english": "Tourist: How many minutes does it take on foot?",
          "audioText": "歩いて何分くらいかかりますか？",
          "dialogueOptions": [
            "だいたい5分くらいで着きますよ。",
            "お茶を飲みます",
            "はい、そうです",
            "日本から来ました"
          ],
          "options": [
            "だいたい5分くらいで着きますよ。",
            "お茶を飲みます",
            "はい、そうです",
            "日本から来ました"
          ],
          "correctAnswer": "だいたい5分くらいで着きますよ。"
        }
      ]
    },
    {
      "id": "u5_l12",
      "unitId": "unit_5",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Right over there & Landmark",
      "titleJp": "すぐそこ・目印",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "すぐそこ",
        "目印",
        "看板"
      ],
      "kanjiKeywords": [
        "目",
        "印",
        "看",
        "板"
      ],
      "items": [
        {
          "id": "u5_l12_1",
          "type": "listen",
          "prompt": "すぐそこ",
          "furigana": "すぐそこ",
          "romaji": "sugu soko",
          "english": "Right over there",
          "audioText": "すぐそこ",
          "options": [
            "Far away",
            "Traffic light",
            "Right over there",
            "Intersection"
          ],
          "correctAnswer": "Right over there"
        },
        {
          "id": "u5_l12_2",
          "type": "spell",
          "prompt": "すぐそこ",
          "furigana": "すぐそこ",
          "romaji": "sugu soko",
          "english": "Build 'Right over there'",
          "audioText": "すぐそこ",
          "tileBank": [
            "め",
            "な",
            "そ",
            "き",
            "い",
            "ぐ",
            "こ",
            "す"
          ],
          "correctAnswer": "すぐそこ"
        },
        {
          "id": "u5_l12_3",
          "type": "cloze",
          "prompt": "私は目印がすきです",
          "furigana": "わたしはめじるしがすきです",
          "romaji": "Watashi wa mejirushi ga suki desu.",
          "english": "Fill in the blank with the correct particle for Landmark.",
          "audioText": "目印",
          "clozeSentence": "私は目印 {{BLANK}} 好きです。",
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
          "id": "u5_l12_4",
          "type": "scramble",
          "prompt": "これは目印です",
          "furigana": "これはめじるしです",
          "romaji": "Kore wa mejirushi desu.",
          "english": "This is Landmark.",
          "audioText": "これは目印です",
          "scrambleTokens": [
            "それ",
            "です",
            "目印",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "目印",
            "です"
          ],
          "correctAnswer": "これは目印です"
        },
        {
          "id": "u5_l12_5",
          "type": "speak",
          "prompt": "看板",
          "furigana": "かんばん",
          "romaji": "kanban",
          "english": "Pronounce: Signboard",
          "audioText": "かんばん",
          "targetSpeech": "看板",
          "options": [
            "Signboard",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "看板"
        },
        {
          "id": "u5_l12_6",
          "type": "dictate",
          "prompt": "看板をお願いします",
          "furigana": "かんばんをおねがいします",
          "romaji": "kanban o onegaishimasu.",
          "english": "Signboard, please.",
          "audioText": "看板をお願いします",
          "dictateTokens": [
            "お願いします",
            "看板",
            "です",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "看板",
            "を",
            "お願いします"
          ],
          "correctAnswer": "看板をお願いします"
        },
        {
          "id": "u5_l12_7",
          "type": "match",
          "prompt": "すぐそこ・目印・看板・駅",
          "furigana": "すぐそこ・めじるし・かんばん・えき",
          "romaji": "sugu soko, mejirushi, kanban, eki",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "すぐそこ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "すぐそこ",
              "right": "Right over there",
              "furigana": "すぐそこ",
              "romaji": "sugu soko"
            },
            {
              "id": "p_1",
              "left": "目印",
              "right": "Landmark",
              "furigana": "めじるし",
              "romaji": "mejirushi"
            },
            {
              "id": "p_2",
              "left": "看板",
              "right": "Signboard",
              "furigana": "かんばん",
              "romaji": "kanban"
            },
            {
              "id": "p_3",
              "left": "駅",
              "right": "Train station",
              "furigana": "えき",
              "romaji": "eki"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l12_8",
          "type": "dialogue",
          "prompt": "交番はありますか？",
          "dialogueSpeaker": "Lost",
          "dialoguePrompt": "交番はありますか？",
          "furigana": "交番はありますか？",
          "romaji": "Kouban wa arimasu ka?",
          "english": "Lost: Excuse me, I'm lost. Is there a police box?",
          "audioText": "交番はありますか？",
          "dialogueOptions": [
            "あそこのコンビニの隣にありますよ。",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "options": [
            "あそこのコンビニの隣にありますよ。",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "correctAnswer": "あそこのコンビニの隣にありますよ。"
        }
      ]
    },
    {
      "id": "u5_l13",
      "unitId": "unit_5",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Train station & Where",
      "titleJp": "駅・どこ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "駅",
        "どこ",
        "右"
      ],
      "kanjiKeywords": [
        "駅",
        "右"
      ],
      "items": [
        {
          "id": "u5_l13_1",
          "type": "listen",
          "prompt": "駅",
          "furigana": "えき",
          "romaji": "eki",
          "english": "Train station",
          "audioText": "えき",
          "options": [
            "Convenience store",
            "On foot / walking",
            "Train station",
            "Post office"
          ],
          "correctAnswer": "Train station"
        },
        {
          "id": "u5_l13_2",
          "type": "spell",
          "prompt": "駅",
          "furigana": "えき",
          "romaji": "eki",
          "english": "Build 'Train station'",
          "audioText": "えき",
          "tileBank": [
            "き",
            "む",
            "こ",
            "え",
            "は",
            "し",
            "ろ",
            "さ"
          ],
          "correctAnswer": "えき"
        },
        {
          "id": "u5_l13_3",
          "type": "cloze",
          "prompt": "私はどこがすきです",
          "furigana": "わたしはどこがすきです",
          "romaji": "Watashi wa doko ga suki desu.",
          "english": "Fill in the blank with the correct particle for Where.",
          "audioText": "どこ",
          "clozeSentence": "これはどこ {{BLANK}} す。",
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
          "id": "u5_l13_4",
          "type": "scramble",
          "prompt": "これはどこです",
          "furigana": "これはどこです",
          "romaji": "Kore wa doko desu.",
          "english": "This is Where.",
          "audioText": "これはどこです",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "どこ",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "どこ",
            "です"
          ],
          "correctAnswer": "これはどこです"
        },
        {
          "id": "u5_l13_5",
          "type": "speak",
          "prompt": "右",
          "furigana": "みぎ",
          "romaji": "migi",
          "english": "Pronounce: Right side",
          "audioText": "みぎ",
          "targetSpeech": "右",
          "options": [
            "Right side",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "右"
        },
        {
          "id": "u5_l13_6",
          "type": "dictate",
          "prompt": "右をお願いします",
          "furigana": "みぎをおねがいします",
          "romaji": "migi o onegaishimasu.",
          "english": "Right side, please.",
          "audioText": "右をお願いします",
          "dictateTokens": [
            "お願いします",
            "右",
            "を",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "右",
            "を",
            "お願いします"
          ],
          "correctAnswer": "右をお願いします"
        },
        {
          "id": "u5_l13_7",
          "type": "match",
          "prompt": "駅・どこ・右・左",
          "furigana": "えき・どこ・みぎ・ひだり",
          "romaji": "eki, doko, migi, hidari",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "えき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "駅",
              "right": "Train station",
              "furigana": "えき",
              "romaji": "eki"
            },
            {
              "id": "p_1",
              "left": "どこ",
              "right": "Where",
              "furigana": "どこ",
              "romaji": "doko"
            },
            {
              "id": "p_2",
              "left": "右",
              "right": "Right side",
              "furigana": "みぎ",
              "romaji": "migi"
            },
            {
              "id": "p_3",
              "left": "左",
              "right": "Left side",
              "furigana": "ひだり",
              "romaji": "hidari"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l13_8",
          "type": "dialogue",
          "prompt": "渋谷駅はどちらですか？",
          "dialogueSpeaker": "Traveler",
          "dialoguePrompt": "渋谷駅はどちらですか？",
          "furigana": "渋谷駅はどちらですか？",
          "romaji": "Shibuya-eki wa dochira desu ka?",
          "english": "Traveler: Excuse me, which way is Shibuya Station?",
          "audioText": "渋谷駅はどちらですか？",
          "dialogueOptions": [
            "この道をまっすぐ行って、二つ目の信号を右です。",
            "コーヒーをください",
            "はい、元気です",
            "美味しかったです"
          ],
          "options": [
            "この道をまっすぐ行って、二つ目の信号を右です。",
            "コーヒーをください",
            "はい、元気です",
            "美味しかったです"
          ],
          "correctAnswer": "この道をまっすぐ行って、二つ目の信号を右です。"
        }
      ]
    },
    {
      "id": "u5_l14",
      "unitId": "unit_5",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Left side & Straight ahead",
      "titleJp": "左・まっすぐ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "左",
        "まっすぐ",
        "前"
      ],
      "kanjiKeywords": [
        "左",
        "前"
      ],
      "items": [
        {
          "id": "u5_l14_1",
          "type": "listen",
          "prompt": "左",
          "furigana": "ひだり",
          "romaji": "hidari",
          "english": "Left side",
          "audioText": "ひだり",
          "options": [
            "Nearby",
            "Right side",
            "Exit",
            "Left side"
          ],
          "correctAnswer": "Left side"
        },
        {
          "id": "u5_l14_2",
          "type": "spell",
          "prompt": "左",
          "furigana": "ひだり",
          "romaji": "hidari",
          "english": "Build 'Left side'",
          "audioText": "ひだり",
          "tileBank": [
            "ひ",
            "り",
            "よ",
            "ん",
            "し",
            "ぬ",
            "だ",
            "せ"
          ],
          "correctAnswer": "ひだり"
        },
        {
          "id": "u5_l14_3",
          "type": "cloze",
          "prompt": "私はまっすぐがすきです",
          "furigana": "わたしはまっすぐがすきです",
          "romaji": "Watashi wa massugu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Straight ahead.",
          "audioText": "まっすぐ",
          "clozeSentence": "これはまっすぐ {{BLANK}} す。",
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
          "id": "u5_l14_4",
          "type": "scramble",
          "prompt": "これはまっすぐです",
          "furigana": "これはまっすぐです",
          "romaji": "Kore wa massugu desu.",
          "english": "This is Straight ahead.",
          "audioText": "これはまっすぐです",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "です",
            "それ",
            "まっすぐ"
          ],
          "scrambleSolution": [
            "これは",
            "まっすぐ",
            "です"
          ],
          "correctAnswer": "これはまっすぐです"
        },
        {
          "id": "u5_l14_5",
          "type": "speak",
          "prompt": "前",
          "furigana": "まえ",
          "romaji": "mae",
          "english": "Pronounce: In front / ahead",
          "audioText": "まえ",
          "targetSpeech": "前",
          "options": [
            "In front / ahead",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "前"
        },
        {
          "id": "u5_l14_6",
          "type": "dictate",
          "prompt": "前をお願いします",
          "furigana": "まえをおねがいします",
          "romaji": "mae o onegaishimasu.",
          "english": "In front / ahead, please.",
          "audioText": "前をお願いします",
          "dictateTokens": [
            "お願いします",
            "を",
            "です",
            "ありがとう",
            "前"
          ],
          "dictateSolution": [
            "前",
            "を",
            "お願いします"
          ],
          "correctAnswer": "前をお願いします"
        },
        {
          "id": "u5_l14_7",
          "type": "match",
          "prompt": "左・まっすぐ・前・後ろ",
          "furigana": "ひだり・まっすぐ・まえ・うしろ",
          "romaji": "hidari, massugu, mae, ushiro",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ひだり",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "左",
              "right": "Left side",
              "furigana": "ひだり",
              "romaji": "hidari"
            },
            {
              "id": "p_1",
              "left": "まっすぐ",
              "right": "Straight ahead",
              "furigana": "まっすぐ",
              "romaji": "massugu"
            },
            {
              "id": "p_2",
              "left": "前",
              "right": "In front / ahead",
              "furigana": "まえ",
              "romaji": "mae"
            },
            {
              "id": "p_3",
              "left": "後ろ",
              "right": "Behind / back",
              "furigana": "うしろ",
              "romaji": "ushiro"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l14_8",
          "type": "dialogue",
          "prompt": "あの交差点を渡ったすぐそこですよ。",
          "dialogueSpeaker": "Local",
          "dialoguePrompt": "あの交差点を渡ったすぐそこですよ。",
          "furigana": "あの交差点を渡ったすぐそこですよ。",
          "romaji": "Ano kousaten o watatta sugu soko desu yo.",
          "english": "Local: For Hachiko Square, it's right after crossing that intersection.",
          "audioText": "あの交差点を渡ったすぐそこですよ。",
          "dialogueOptions": [
            "わかりました、ありがとうございます！",
            "いいえ、結構です",
            "さようなら",
            "ごちそうさまでした"
          ],
          "options": [
            "わかりました、ありがとうございます！",
            "いいえ、結構です",
            "さようなら",
            "ごちそうさまでした"
          ],
          "correctAnswer": "わかりました、ありがとうございます！"
        }
      ]
    },
    {
      "id": "u5_l15",
      "unitId": "unit_5",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 5 Master Exam",
      "iconType": "test",
      "title": "Unit 5 Master Exam",
      "titleJp": "第5週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "後ろ",
        "隣",
        "向かい"
      ],
      "kanjiKeywords": [
        "後",
        "隣",
        "向"
      ],
      "items": [
        {
          "id": "u5_l15_1",
          "type": "listen",
          "prompt": "後ろ",
          "furigana": "うしろ",
          "romaji": "ushiro",
          "english": "Behind / back",
          "audioText": "うしろ",
          "options": [
            "Convenience store",
            "Bank",
            "Next to / beside",
            "Behind / back"
          ],
          "correctAnswer": "Behind / back"
        },
        {
          "id": "u5_l15_2",
          "type": "spell",
          "prompt": "後ろ",
          "furigana": "うしろ",
          "romaji": "ushiro",
          "english": "Build 'Behind / back'",
          "audioText": "うしろ",
          "tileBank": [
            "う",
            "ち",
            "む",
            "り",
            "つ",
            "さ",
            "し",
            "ろ"
          ],
          "correctAnswer": "うしろ"
        },
        {
          "id": "u5_l15_3",
          "type": "cloze",
          "prompt": "私は隣がすきです",
          "furigana": "わたしはとなりがすきです",
          "romaji": "Watashi wa tonari ga suki desu.",
          "english": "Fill in the blank with the correct particle for Next to / beside.",
          "audioText": "隣",
          "clozeSentence": "これは隣 {{BLANK}} す。",
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
          "id": "u5_l15_4",
          "type": "scramble",
          "prompt": "これは隣です",
          "furigana": "これはとなりです",
          "romaji": "Kore wa tonari desu.",
          "english": "This is Next to / beside.",
          "audioText": "これは隣です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "隣",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "隣",
            "です"
          ],
          "correctAnswer": "これは隣です"
        },
        {
          "id": "u5_l15_5",
          "type": "speak",
          "prompt": "向かい",
          "furigana": "むかい",
          "romaji": "mukai",
          "english": "Pronounce: Across from / opposite",
          "audioText": "むかい",
          "targetSpeech": "向かい",
          "options": [
            "Across from / opposite",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "向かい"
        },
        {
          "id": "u5_l15_6",
          "type": "dictate",
          "prompt": "向かいをお願いします",
          "furigana": "むかいをおねがいします",
          "romaji": "mukai o onegaishimasu.",
          "english": "Across from / opposite, please.",
          "audioText": "向かいをお願いします",
          "dictateTokens": [
            "向かい",
            "を",
            "です",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "向かい",
            "を",
            "お願いします"
          ],
          "correctAnswer": "向かいをお願いします"
        },
        {
          "id": "u5_l15_7",
          "type": "match",
          "prompt": "後ろ・隣・向かい・近く",
          "furigana": "うしろ・となり・むかい・ちかく",
          "romaji": "ushiro, tonari, mukai, chikaku",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "うしろ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "後ろ",
              "right": "Behind / back",
              "furigana": "うしろ",
              "romaji": "ushiro"
            },
            {
              "id": "p_1",
              "left": "隣",
              "right": "Next to / beside",
              "furigana": "となり",
              "romaji": "tonari"
            },
            {
              "id": "p_2",
              "left": "向かい",
              "right": "Across from / opposite",
              "furigana": "むかい",
              "romaji": "mukai"
            },
            {
              "id": "p_3",
              "left": "近く",
              "right": "Nearby",
              "furigana": "ちかく",
              "romaji": "chikaku"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u5_l15_8",
          "type": "dialogue",
          "prompt": "歩いて何分くらいかかりますか？",
          "dialogueSpeaker": "Tourist",
          "dialoguePrompt": "歩いて何分くらいかかりますか？",
          "furigana": "歩いて何分くらいかかりますか？",
          "romaji": "Aruite nanpun kurai kakarimasu ka?",
          "english": "Tourist: How many minutes does it take on foot?",
          "audioText": "歩いて何分くらいかかりますか？",
          "dialogueOptions": [
            "だいたい5分くらいで着きますよ。",
            "お茶を飲みます",
            "はい、そうです",
            "日本から来ました"
          ],
          "options": [
            "だいたい5分くらいで着きますよ。",
            "お茶を飲みます",
            "はい、そうです",
            "日本から来ました"
          ],
          "correctAnswer": "だいたい5分くらいで着きますよ。"
        }
      ]
    }
  ],
  "revisionGate": {
    "id": "gate_unit_5",
    "unitId": "unit_5",
    "title": "Unit 5 Mastery Checkpoint",
    "titleJp": "第5週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u5_l1_1",
        "type": "listen",
        "prompt": "駅",
        "furigana": "えき",
        "romaji": "eki",
        "english": "Train station",
        "audioText": "えき",
        "options": [
          "Train station",
          "South exit",
          "Ticket machine area",
          "On foot / walking"
        ],
        "correctAnswer": "Train station"
      },
      {
        "id": "u5_l1_2",
        "type": "spell",
        "prompt": "駅",
        "furigana": "えき",
        "romaji": "eki",
        "english": "Build 'Train station'",
        "audioText": "えき",
        "tileBank": [
          "き",
          "そ",
          "れ",
          "え",
          "に",
          "の",
          "け",
          "ひ"
        ],
        "correctAnswer": "えき"
      },
      {
        "id": "u5_l3_1",
        "type": "listen",
        "prompt": "後ろ",
        "furigana": "うしろ",
        "romaji": "ushiro",
        "english": "Behind / back",
        "audioText": "うしろ",
        "options": [
          "Right over there",
          "Right side",
          "Behind / back",
          "Landmark"
        ],
        "correctAnswer": "Behind / back"
      },
      {
        "id": "u5_l3_2",
        "type": "spell",
        "prompt": "後ろ",
        "furigana": "うしろ",
        "romaji": "ushiro",
        "english": "Build 'Behind / back'",
        "audioText": "うしろ",
        "tileBank": [
          "か",
          "ろ",
          "む",
          "こ",
          "る",
          "ふ",
          "う",
          "し"
        ],
        "correctAnswer": "うしろ"
      },
      {
        "id": "u5_l5_1",
        "type": "listen",
        "prompt": "信号",
        "furigana": "しんごう",
        "romaji": "shingou",
        "english": "Traffic light",
        "audioText": "しんごう",
        "options": [
          "Behind / back",
          "Traffic light",
          "Where",
          "To turn"
        ],
        "correctAnswer": "Traffic light"
      },
      {
        "id": "u5_l5_2",
        "type": "spell",
        "prompt": "信号",
        "furigana": "しんごう",
        "romaji": "shingou",
        "english": "Build 'Traffic light'",
        "audioText": "しんごう",
        "tileBank": [
          "ん",
          "し",
          "ご",
          "こ",
          "を",
          "へ",
          "う",
          "そ"
        ],
        "correctAnswer": "しんごう"
      },
      {
        "id": "u5_l7_1",
        "type": "listen",
        "prompt": "北口",
        "furigana": "きたぐち",
        "romaji": "kitaguchi",
        "english": "North exit",
        "audioText": "きたぐち",
        "options": [
          "Train station",
          "Pedestrian crosswalk",
          "Ticket machine area",
          "North exit"
        ],
        "correctAnswer": "North exit"
      },
      {
        "id": "u5_l7_2",
        "type": "spell",
        "prompt": "北口",
        "furigana": "きたぐち",
        "romaji": "kitaguchi",
        "english": "Build 'North exit'",
        "audioText": "きたぐち",
        "tileBank": [
          "た",
          "ち",
          "お",
          "し",
          "ぐ",
          "の",
          "つ",
          "き"
        ],
        "correctAnswer": "きたぐち"
      },
      {
        "id": "u5_l9_1",
        "type": "listen",
        "prompt": "交番",
        "furigana": "こうばん",
        "romaji": "kouban",
        "english": "Police box",
        "audioText": "こうばん",
        "options": [
          "Police box",
          "Landmark",
          "Restroom",
          "To turn"
        ],
        "correctAnswer": "Police box"
      },
      {
        "id": "u5_l9_2",
        "type": "spell",
        "prompt": "交番",
        "furigana": "こうばん",
        "romaji": "kouban",
        "english": "Build 'Police box'",
        "audioText": "こうばん",
        "tileBank": [
          "ば",
          "き",
          "こ",
          "う",
          "も",
          "は",
          "と",
          "ん"
        ],
        "correctAnswer": "こうばん"
      },
      {
        "id": "u5_l11_1",
        "type": "listen",
        "prompt": "道",
        "furigana": "みち",
        "romaji": "michi",
        "english": "Road / path / way",
        "audioText": "みち",
        "options": [
          "Road / path / way",
          "In front / ahead",
          "Far away",
          "To turn"
        ],
        "correctAnswer": "Road / path / way"
      },
      {
        "id": "u5_l11_2",
        "type": "spell",
        "prompt": "道",
        "furigana": "みち",
        "romaji": "michi",
        "english": "Build 'Road / path / way'",
        "audioText": "みち",
        "tileBank": [
          "ろ",
          "み",
          "い",
          "ち",
          "お",
          "す",
          "よ",
          "て"
        ],
        "correctAnswer": "みち"
      }
    ]
  }
};
