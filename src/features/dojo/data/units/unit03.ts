import type { DojoUnit } from "../../models/dojo.model";

export const unit03: DojoUnit = {
  "id": "unit_3",
  "unitNumber": 3,
  "title": "Talking About Your Actions",
  "titleJp": "日々の行動を話す",
  "description": "Describe your daily routine, morning to night habits, time expressions, commuting, and using action particles.",
  "icon": "🏃",
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
      "id": "u3_l1",
      "unitId": "unit_3",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "To wake up / get up & To sleep / go to bed",
      "titleJp": "起きる・寝る",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "起きる",
        "寝る",
        "食べる"
      ],
      "kanjiKeywords": [
        "起",
        "寝",
        "食"
      ],
      "items": [
        {
          "id": "u3_l1_1",
          "type": "listen",
          "prompt": "起きる",
          "furigana": "おきる",
          "romaji": "okiru",
          "english": "To wake up / get up",
          "audioText": "おきる",
          "options": [
            "To come",
            "To drink",
            "Lunch",
            "To wake up / get up"
          ],
          "correctAnswer": "To wake up / get up"
        },
        {
          "id": "u3_l1_2",
          "type": "spell",
          "prompt": "起きる",
          "furigana": "おきる",
          "romaji": "okiru",
          "english": "Build 'To wake up / get up'",
          "audioText": "おきる",
          "tileBank": [
            "る",
            "つ",
            "ま",
            "お",
            "せ",
            "う",
            "れ",
            "き"
          ],
          "correctAnswer": "おきる"
        },
        {
          "id": "u3_l1_3",
          "type": "cloze",
          "prompt": "私は寝るがすきです",
          "furigana": "わたしはねるがすきです",
          "romaji": "Watashi wa neru ga suki desu.",
          "english": "Fill in the blank with the correct particle for To sleep / go to bed.",
          "audioText": "寝る",
          "clozeSentence": "これは寝る {{BLANK}} す。",
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
          "id": "u3_l1_4",
          "type": "scramble",
          "prompt": "これは寝るです",
          "furigana": "これはねるです",
          "romaji": "Kore wa neru desu.",
          "english": "This is To sleep / go to bed.",
          "audioText": "これは寝るです",
          "scrambleTokens": [
            "寝る",
            "これは",
            "それ",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "寝る",
            "です"
          ],
          "correctAnswer": "これは寝るです"
        },
        {
          "id": "u3_l1_5",
          "type": "speak",
          "prompt": "食べる",
          "furigana": "たべる",
          "romaji": "taberu",
          "english": "Pronounce: To eat",
          "audioText": "たべる",
          "targetSpeech": "食べる",
          "options": [
            "To eat",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "食べる"
        },
        {
          "id": "u3_l1_6",
          "type": "dictate",
          "prompt": "食べるをお願いします",
          "furigana": "たべるをおねがいします",
          "romaji": "taberu o onegaishimasu.",
          "english": "To eat, please.",
          "audioText": "食べるをお願いします",
          "dictateTokens": [
            "食べる",
            "ありがとう",
            "です",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "食べる",
            "を",
            "お願いします"
          ],
          "correctAnswer": "食べるをお願いします"
        },
        {
          "id": "u3_l1_7",
          "type": "match",
          "prompt": "起きる・寝る・食べる・飲む",
          "furigana": "おきる・ねる・たべる・のむ",
          "romaji": "okiru, neru, taberu, nomu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おきる",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "起きる",
              "right": "To wake up / get up",
              "furigana": "おきる",
              "romaji": "okiru"
            },
            {
              "id": "p_1",
              "left": "寝る",
              "right": "To sleep / go to bed",
              "furigana": "ねる",
              "romaji": "neru"
            },
            {
              "id": "p_2",
              "left": "食べる",
              "right": "To eat",
              "furigana": "たべる",
              "romaji": "taberu"
            },
            {
              "id": "p_3",
              "left": "飲む",
              "right": "To drink",
              "furigana": "のむ",
              "romaji": "nomu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l1_8",
          "type": "dialogue",
          "prompt": "毎朝、何時に起きますか？",
          "dialogueSpeaker": "Tanaka",
          "dialoguePrompt": "毎朝、何時に起きますか？",
          "furigana": "毎朝、何時に起きますか？",
          "romaji": "Maiasa, nanji ni okimasu ka?",
          "english": "Tanaka: What time do you wake up every morning?",
          "audioText": "毎朝、何時に起きますか？",
          "dialogueOptions": [
            "7時半に起きます。",
            "ラーメンを食べます",
            "アメリカ出身です",
            "はい、元気です"
          ],
          "options": [
            "7時半に起きます。",
            "ラーメンを食べます",
            "アメリカ出身です",
            "はい、元気です"
          ],
          "correctAnswer": "7時半に起きます。"
        }
      ]
    },
    {
      "id": "u3_l2",
      "unitId": "unit_3",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "To drink & To go",
      "titleJp": "飲む・行く",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "飲む",
        "行く",
        "来る"
      ],
      "kanjiKeywords": [
        "飲",
        "行",
        "来"
      ],
      "items": [
        {
          "id": "u3_l2_1",
          "type": "listen",
          "prompt": "飲む",
          "furigana": "のむ",
          "romaji": "nomu",
          "english": "To drink",
          "audioText": "のむ",
          "options": [
            "To work",
            "House / home",
            "To drink",
            "To read"
          ],
          "correctAnswer": "To drink"
        },
        {
          "id": "u3_l2_2",
          "type": "spell",
          "prompt": "飲む",
          "furigana": "のむ",
          "romaji": "nomu",
          "english": "Build 'To drink'",
          "audioText": "のむ",
          "tileBank": [
            "み",
            "む",
            "の",
            "あ",
            "け",
            "せ",
            "え",
            "ね"
          ],
          "correctAnswer": "のむ"
        },
        {
          "id": "u3_l2_3",
          "type": "cloze",
          "prompt": "私は行くがすきです",
          "furigana": "わたしはいくがすきです",
          "romaji": "Watashi wa iku ga suki desu.",
          "english": "Fill in the blank with the correct particle for To go.",
          "audioText": "行く",
          "clozeSentence": "これは行く {{BLANK}} す。",
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
          "id": "u3_l2_4",
          "type": "scramble",
          "prompt": "これは行くです",
          "furigana": "これはいくです",
          "romaji": "Kore wa iku desu.",
          "english": "This is To go.",
          "audioText": "これは行くです",
          "scrambleTokens": [
            "です",
            "これは",
            "それ",
            "行く",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "行く",
            "です"
          ],
          "correctAnswer": "これは行くです"
        },
        {
          "id": "u3_l2_5",
          "type": "speak",
          "prompt": "来る",
          "furigana": "くる",
          "romaji": "kuru",
          "english": "Pronounce: To come",
          "audioText": "くる",
          "targetSpeech": "来る",
          "options": [
            "To come",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "来る"
        },
        {
          "id": "u3_l2_6",
          "type": "dictate",
          "prompt": "来るをお願いします",
          "furigana": "くるをおねがいします",
          "romaji": "kuru o onegaishimasu.",
          "english": "To come, please.",
          "audioText": "来るをお願いします",
          "dictateTokens": [
            "です",
            "を",
            "ありがとう",
            "来る",
            "お願いします"
          ],
          "dictateSolution": [
            "来る",
            "を",
            "お願いします"
          ],
          "correctAnswer": "来るをお願いします"
        },
        {
          "id": "u3_l2_7",
          "type": "match",
          "prompt": "飲む・行く・来る・帰る",
          "furigana": "のむ・いく・くる・かえる",
          "romaji": "nomu, iku, kuru, kaeru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "のむ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "飲む",
              "right": "To drink",
              "furigana": "のむ",
              "romaji": "nomu"
            },
            {
              "id": "p_1",
              "left": "行く",
              "right": "To go",
              "furigana": "いく",
              "romaji": "iku"
            },
            {
              "id": "p_2",
              "left": "来る",
              "right": "To come",
              "furigana": "くる",
              "romaji": "kuru"
            },
            {
              "id": "p_3",
              "left": "帰る",
              "right": "To return home",
              "furigana": "かえる",
              "romaji": "kaeru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l2_8",
          "type": "dialogue",
          "prompt": "会社へはどうやって行きますか？",
          "dialogueSpeaker": "Ken",
          "dialoguePrompt": "会社へはどうやって行きますか？",
          "furigana": "会社へはどうやって行きますか？",
          "romaji": "Kaisha e wa dou yatte ikimasu ka?",
          "english": "Ken: How do you get to your office?",
          "audioText": "会社へはどうやって行きますか？",
          "dialogueOptions": [
            "電車で30分くらいかけて行きます。",
            "本を読みます",
            "夜寝ます",
            "こんにちは"
          ],
          "options": [
            "電車で30分くらいかけて行きます。",
            "本を読みます",
            "夜寝ます",
            "こんにちは"
          ],
          "correctAnswer": "電車で30分くらいかけて行きます。"
        }
      ]
    },
    {
      "id": "u3_l3",
      "unitId": "unit_3",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "To return home & To buy",
      "titleJp": "帰る・買う",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "帰る",
        "買う",
        "朝"
      ],
      "kanjiKeywords": [
        "帰",
        "買",
        "朝"
      ],
      "items": [
        {
          "id": "u3_l3_1",
          "type": "listen",
          "prompt": "帰る",
          "furigana": "かえる",
          "romaji": "kaeru",
          "english": "To return home",
          "audioText": "かえる",
          "options": [
            "To buy",
            "Yesterday",
            "School",
            "To return home"
          ],
          "correctAnswer": "To return home"
        },
        {
          "id": "u3_l3_2",
          "type": "spell",
          "prompt": "帰る",
          "furigana": "かえる",
          "romaji": "kaeru",
          "english": "Build 'To return home'",
          "audioText": "かえる",
          "tileBank": [
            "え",
            "ほ",
            "お",
            "き",
            "か",
            "る",
            "へ",
            "り"
          ],
          "correctAnswer": "かえる"
        },
        {
          "id": "u3_l3_3",
          "type": "cloze",
          "prompt": "私は買うがすきです",
          "furigana": "わたしはかうがすきです",
          "romaji": "Watashi wa kau ga suki desu.",
          "english": "Fill in the blank with the correct particle for To buy.",
          "audioText": "買う",
          "clozeSentence": "これは買う {{BLANK}} す。",
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
          "id": "u3_l3_4",
          "type": "scramble",
          "prompt": "これは買うです",
          "furigana": "これはかうです",
          "romaji": "Kore wa kau desu.",
          "english": "This is To buy.",
          "audioText": "これは買うです",
          "scrambleTokens": [
            "これは",
            "です",
            "ではありません",
            "それ",
            "買う"
          ],
          "scrambleSolution": [
            "これは",
            "買う",
            "です"
          ],
          "correctAnswer": "これは買うです"
        },
        {
          "id": "u3_l3_5",
          "type": "speak",
          "prompt": "朝",
          "furigana": "あさ",
          "romaji": "asa",
          "english": "Pronounce: Morning",
          "audioText": "あさ",
          "targetSpeech": "朝",
          "options": [
            "Morning",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "朝"
        },
        {
          "id": "u3_l3_6",
          "type": "dictate",
          "prompt": "朝をお願いします",
          "furigana": "あさをおねがいします",
          "romaji": "asa o onegaishimasu.",
          "english": "Morning, please.",
          "audioText": "朝をお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "朝",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "朝",
            "を",
            "お願いします"
          ],
          "correctAnswer": "朝をお願いします"
        },
        {
          "id": "u3_l3_7",
          "type": "match",
          "prompt": "帰る・買う・朝・昼",
          "furigana": "かえる・かう・あさ・ひる",
          "romaji": "kaeru, kau, asa, hiru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かえる",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "帰る",
              "right": "To return home",
              "furigana": "かえる",
              "romaji": "kaeru"
            },
            {
              "id": "p_1",
              "left": "買う",
              "right": "To buy",
              "furigana": "かう",
              "romaji": "kau"
            },
            {
              "id": "p_2",
              "left": "朝",
              "right": "Morning",
              "furigana": "あさ",
              "romaji": "asa"
            },
            {
              "id": "p_3",
              "left": "昼",
              "right": "Noon / daytime",
              "furigana": "ひる",
              "romaji": "hiru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l3_8",
          "type": "dialogue",
          "prompt": "一緒に晩ごはんを食べませんか？",
          "dialogueSpeaker": "Friend",
          "dialoguePrompt": "一緒に晩ごはんを食べませんか？",
          "furigana": "一緒に晩ごはんを食べませんか？",
          "romaji": "Issho ni bangohan o tabemasen ka?",
          "english": "Friend: Would you like to have dinner together tonight?",
          "audioText": "一緒に晩ごはんを食べませんか？",
          "dialogueOptions": [
            "いいですね！行きましょう！",
            "さようなら",
            "私は学生です",
            "朝7時です"
          ],
          "options": [
            "いいですね！行きましょう！",
            "さようなら",
            "私は学生です",
            "朝7時です"
          ],
          "correctAnswer": "いいですね！行きましょう！"
        }
      ]
    },
    {
      "id": "u3_l4",
      "unitId": "unit_3",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Noon / daytime & Night / evening",
      "titleJp": "昼・夜",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "昼",
        "夜",
        "朝ごはん"
      ],
      "kanjiKeywords": [
        "昼",
        "夜",
        "朝"
      ],
      "items": [
        {
          "id": "u3_l4_1",
          "type": "listen",
          "prompt": "昼",
          "furigana": "ひる",
          "romaji": "hiru",
          "english": "Noon / daytime",
          "audioText": "ひる",
          "options": [
            "Every day",
            "Noon / daytime",
            "To read",
            "Today"
          ],
          "correctAnswer": "Noon / daytime"
        },
        {
          "id": "u3_l4_2",
          "type": "spell",
          "prompt": "昼",
          "furigana": "ひる",
          "romaji": "hiru",
          "english": "Build 'Noon / daytime'",
          "audioText": "ひる",
          "tileBank": [
            "ん",
            "ろ",
            "ゆ",
            "て",
            "の",
            "る",
            "ひ",
            "も"
          ],
          "correctAnswer": "ひる"
        },
        {
          "id": "u3_l4_3",
          "type": "cloze",
          "prompt": "私は夜がすきです",
          "furigana": "わたしはよるがすきです",
          "romaji": "Watashi wa yoru ga suki desu.",
          "english": "Fill in the blank with the correct particle for Night / evening.",
          "audioText": "夜",
          "clozeSentence": "これは夜 {{BLANK}} す。",
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
          "id": "u3_l4_4",
          "type": "scramble",
          "prompt": "これは夜です",
          "furigana": "これはよるです",
          "romaji": "Kore wa yoru desu.",
          "english": "This is Night / evening.",
          "audioText": "これは夜です",
          "scrambleTokens": [
            "これは",
            "です",
            "夜",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "夜",
            "です"
          ],
          "correctAnswer": "これは夜です"
        },
        {
          "id": "u3_l4_5",
          "type": "speak",
          "prompt": "朝ごはん",
          "furigana": "あさごはん",
          "romaji": "asagohan",
          "english": "Pronounce: Breakfast",
          "audioText": "あさごはん",
          "targetSpeech": "朝ごはん",
          "options": [
            "Breakfast",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "朝ごはん"
        },
        {
          "id": "u3_l4_6",
          "type": "dictate",
          "prompt": "朝ごはんをお願いします",
          "furigana": "あさごはんをおねがいします",
          "romaji": "asagohan o onegaishimasu.",
          "english": "Breakfast, please.",
          "audioText": "朝ごはんをお願いします",
          "dictateTokens": [
            "お願いします",
            "を",
            "ありがとう",
            "朝ごはん",
            "です"
          ],
          "dictateSolution": [
            "朝ごはん",
            "を",
            "お願いします"
          ],
          "correctAnswer": "朝ごはんをお願いします"
        },
        {
          "id": "u3_l4_7",
          "type": "match",
          "prompt": "昼・夜・朝ごはん・昼ごはん",
          "furigana": "ひる・よる・あさごはん・ひるごはん",
          "romaji": "hiru, yoru, asagohan, hirugohan",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ひる",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "昼",
              "right": "Noon / daytime",
              "furigana": "ひる",
              "romaji": "hiru"
            },
            {
              "id": "p_1",
              "left": "夜",
              "right": "Night / evening",
              "furigana": "よる",
              "romaji": "yoru"
            },
            {
              "id": "p_2",
              "left": "朝ごはん",
              "right": "Breakfast",
              "furigana": "あさごはん",
              "romaji": "asagohan"
            },
            {
              "id": "p_3",
              "left": "昼ごはん",
              "right": "Lunch",
              "furigana": "ひるごはん",
              "romaji": "hirugohan"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l4_8",
          "type": "dialogue",
          "prompt": "今日は学校で何を勉強したの？",
          "dialogueSpeaker": "Mom",
          "dialoguePrompt": "今日は学校で何を勉強したの？",
          "furigana": "今日は学校で何を勉強したの？",
          "romaji": "Kyou wa gakkou de nani o benkyou shita no?",
          "english": "Mom: What did you study at school today?",
          "audioText": "今日は学校で何を勉強したの？",
          "dialogueOptions": [
            "日本語の漢字と文法を勉強しました。",
            "ピザが好きです",
            "お茶を飲みます",
            "初めまして"
          ],
          "options": [
            "日本語の漢字と文法を勉強しました。",
            "ピザが好きです",
            "お茶を飲みます",
            "初めまして"
          ],
          "correctAnswer": "日本語の漢字と文法を勉強しました。"
        }
      ]
    },
    {
      "id": "u3_l5",
      "unitId": "unit_3",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Lunch & Dinner",
      "titleJp": "昼ごはん・晩ごはん",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "昼ごはん",
        "晩ごはん",
        "今"
      ],
      "kanjiKeywords": [
        "昼",
        "晩",
        "今"
      ],
      "items": [
        {
          "id": "u3_l5_1",
          "type": "listen",
          "prompt": "昼ごはん",
          "furigana": "ひるごはん",
          "romaji": "hirugohan",
          "english": "Lunch",
          "audioText": "ひるごはん",
          "options": [
            "Sometimes",
            "To come",
            "Lunch",
            "What time"
          ],
          "correctAnswer": "Lunch"
        },
        {
          "id": "u3_l5_2",
          "type": "spell",
          "prompt": "昼ごはん",
          "furigana": "ひるごはん",
          "romaji": "hirugohan",
          "english": "Build 'Lunch'",
          "audioText": "ひるごはん",
          "tileBank": [
            "ご",
            "わ",
            "ん",
            "ろ",
            "ね",
            "は",
            "る",
            "ひ"
          ],
          "correctAnswer": "ひるごはん"
        },
        {
          "id": "u3_l5_3",
          "type": "cloze",
          "prompt": "私は晩ごはんがすきです",
          "furigana": "わたしはばんごはんがすきです",
          "romaji": "Watashi wa bangohan ga suki desu.",
          "english": "Fill in the blank with the correct particle for Dinner.",
          "audioText": "晩ごはん",
          "clozeSentence": "これは晩ごはん {{BLANK}} す。",
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
          "id": "u3_l5_4",
          "type": "scramble",
          "prompt": "これは晩ごはんです",
          "furigana": "これはばんごはんです",
          "romaji": "Kore wa bangohan desu.",
          "english": "This is Dinner.",
          "audioText": "これは晩ごはんです",
          "scrambleTokens": [
            "晩ごはん",
            "これは",
            "です",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "晩ごはん",
            "です"
          ],
          "correctAnswer": "これは晩ごはんです"
        },
        {
          "id": "u3_l5_5",
          "type": "speak",
          "prompt": "今",
          "furigana": "いま",
          "romaji": "ima",
          "english": "Pronounce: Now",
          "audioText": "いま",
          "targetSpeech": "今",
          "options": [
            "Now",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "今"
        },
        {
          "id": "u3_l5_6",
          "type": "dictate",
          "prompt": "今をお願いします",
          "furigana": "いまをおねがいします",
          "romaji": "ima o onegaishimasu.",
          "english": "Now, please.",
          "audioText": "今をお願いします",
          "dictateTokens": [
            "お願いします",
            "今",
            "ありがとう",
            "です",
            "を"
          ],
          "dictateSolution": [
            "今",
            "を",
            "お願いします"
          ],
          "correctAnswer": "今をお願いします"
        },
        {
          "id": "u3_l5_7",
          "type": "match",
          "prompt": "昼ごはん・晩ごはん・今・何時",
          "furigana": "ひるごはん・ばんごはん・いま・なんじ",
          "romaji": "hirugohan, bangohan, ima, nanji",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ひるごはん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "昼ごはん",
              "right": "Lunch",
              "furigana": "ひるごはん",
              "romaji": "hirugohan"
            },
            {
              "id": "p_1",
              "left": "晩ごはん",
              "right": "Dinner",
              "furigana": "ばんごはん",
              "romaji": "bangohan"
            },
            {
              "id": "p_2",
              "left": "今",
              "right": "Now",
              "furigana": "いま",
              "romaji": "ima"
            },
            {
              "id": "p_3",
              "left": "何時",
              "right": "What time",
              "furigana": "なんじ",
              "romaji": "nanji"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l5_8",
          "type": "dialogue",
          "prompt": "毎朝、何時に起きますか？",
          "dialogueSpeaker": "Tanaka",
          "dialoguePrompt": "毎朝、何時に起きますか？",
          "furigana": "毎朝、何時に起きますか？",
          "romaji": "Maiasa, nanji ni okimasu ka?",
          "english": "Tanaka: What time do you wake up every morning?",
          "audioText": "毎朝、何時に起きますか？",
          "dialogueOptions": [
            "7時半に起きます。",
            "ラーメンを食べます",
            "アメリカ出身です",
            "はい、元気です"
          ],
          "options": [
            "7時半に起きます。",
            "ラーメンを食べます",
            "アメリカ出身です",
            "はい、元気です"
          ],
          "correctAnswer": "7時半に起きます。"
        }
      ]
    },
    {
      "id": "u3_l6",
      "unitId": "unit_3",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "What time & Today",
      "titleJp": "何時・今日",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "何時",
        "今日",
        "明日"
      ],
      "kanjiKeywords": [
        "何",
        "時",
        "今",
        "日",
        "明",
        "日"
      ],
      "items": [
        {
          "id": "u3_l6_1",
          "type": "listen",
          "prompt": "何時",
          "furigana": "なんじ",
          "romaji": "nanji",
          "english": "What time",
          "audioText": "なんじ",
          "options": [
            "Morning",
            "What time",
            "Now",
            "To sleep / go to bed"
          ],
          "correctAnswer": "What time"
        },
        {
          "id": "u3_l6_2",
          "type": "spell",
          "prompt": "何時",
          "furigana": "なんじ",
          "romaji": "nanji",
          "english": "Build 'What time'",
          "audioText": "なんじ",
          "tileBank": [
            "ち",
            "し",
            "め",
            "な",
            "そ",
            "り",
            "ん",
            "じ"
          ],
          "correctAnswer": "なんじ"
        },
        {
          "id": "u3_l6_3",
          "type": "cloze",
          "prompt": "私は今日がすきです",
          "furigana": "わたしはきょうがすきです",
          "romaji": "Watashi wa kyou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Today.",
          "audioText": "今日",
          "clozeSentence": "これは今日 {{BLANK}} す。",
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
          "id": "u3_l6_4",
          "type": "scramble",
          "prompt": "これは今日です",
          "furigana": "これはきょうです",
          "romaji": "Kore wa kyou desu.",
          "english": "This is Today.",
          "audioText": "これは今日です",
          "scrambleTokens": [
            "です",
            "今日",
            "ではありません",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "今日",
            "です"
          ],
          "correctAnswer": "これは今日です"
        },
        {
          "id": "u3_l6_5",
          "type": "speak",
          "prompt": "明日",
          "furigana": "あした",
          "romaji": "ashita",
          "english": "Pronounce: Tomorrow",
          "audioText": "あした",
          "targetSpeech": "明日",
          "options": [
            "Tomorrow",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "明日"
        },
        {
          "id": "u3_l6_6",
          "type": "dictate",
          "prompt": "明日をお願いします",
          "furigana": "あしたをおねがいします",
          "romaji": "ashita o onegaishimasu.",
          "english": "Tomorrow, please.",
          "audioText": "明日をお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "を",
            "明日",
            "ありがとう"
          ],
          "dictateSolution": [
            "明日",
            "を",
            "お願いします"
          ],
          "correctAnswer": "明日をお願いします"
        },
        {
          "id": "u3_l6_7",
          "type": "match",
          "prompt": "何時・今日・明日・昨日",
          "furigana": "なんじ・きょう・あした・きのう",
          "romaji": "nanji, kyou, ashita, kinou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "なんじ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "何時",
              "right": "What time",
              "furigana": "なんじ",
              "romaji": "nanji"
            },
            {
              "id": "p_1",
              "left": "今日",
              "right": "Today",
              "furigana": "きょう",
              "romaji": "kyou"
            },
            {
              "id": "p_2",
              "left": "明日",
              "right": "Tomorrow",
              "furigana": "あした",
              "romaji": "ashita"
            },
            {
              "id": "p_3",
              "left": "昨日",
              "right": "Yesterday",
              "furigana": "きのう",
              "romaji": "kinou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l6_8",
          "type": "dialogue",
          "prompt": "会社へはどうやって行きますか？",
          "dialogueSpeaker": "Ken",
          "dialoguePrompt": "会社へはどうやって行きますか？",
          "furigana": "会社へはどうやって行きますか？",
          "romaji": "Kaisha e wa dou yatte ikimasu ka?",
          "english": "Ken: How do you get to your office?",
          "audioText": "会社へはどうやって行きますか？",
          "dialogueOptions": [
            "電車で30分くらいかけて行きます。",
            "本を読みます",
            "夜寝ます",
            "こんにちは"
          ],
          "options": [
            "電車で30分くらいかけて行きます。",
            "本を読みます",
            "夜寝ます",
            "こんにちは"
          ],
          "correctAnswer": "電車で30分くらいかけて行きます。"
        }
      ]
    },
    {
      "id": "u3_l7",
      "unitId": "unit_3",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Yesterday & Every day",
      "titleJp": "昨日・毎日",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "昨日",
        "毎日",
        "いつも"
      ],
      "kanjiKeywords": [
        "昨",
        "日",
        "毎",
        "日"
      ],
      "items": [
        {
          "id": "u3_l7_1",
          "type": "listen",
          "prompt": "昨日",
          "furigana": "きのう",
          "romaji": "kinou",
          "english": "Yesterday",
          "audioText": "きのう",
          "options": [
            "Bus",
            "Yesterday",
            "Morning",
            "Book"
          ],
          "correctAnswer": "Yesterday"
        },
        {
          "id": "u3_l7_2",
          "type": "spell",
          "prompt": "昨日",
          "furigana": "きのう",
          "romaji": "kinou",
          "english": "Build 'Yesterday'",
          "audioText": "きのう",
          "tileBank": [
            "さ",
            "き",
            "そ",
            "も",
            "の",
            "う",
            "す",
            "れ"
          ],
          "correctAnswer": "きのう"
        },
        {
          "id": "u3_l7_3",
          "type": "cloze",
          "prompt": "私は毎日がすきです",
          "furigana": "わたしはまいにちがすきです",
          "romaji": "Watashi wa mainichi ga suki desu.",
          "english": "Fill in the blank with the correct particle for Every day.",
          "audioText": "毎日",
          "clozeSentence": "これは毎日 {{BLANK}} す。",
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
          "id": "u3_l7_4",
          "type": "scramble",
          "prompt": "これは毎日です",
          "furigana": "これはまいにちです",
          "romaji": "Kore wa mainichi desu.",
          "english": "This is Every day.",
          "audioText": "これは毎日です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "これは",
            "毎日",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "毎日",
            "です"
          ],
          "correctAnswer": "これは毎日です"
        },
        {
          "id": "u3_l7_5",
          "type": "speak",
          "prompt": "いつも",
          "furigana": "いつも",
          "romaji": "itsumo",
          "english": "Pronounce: Always",
          "audioText": "いつも",
          "targetSpeech": "いつも",
          "options": [
            "Always",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "いつも"
        },
        {
          "id": "u3_l7_6",
          "type": "dictate",
          "prompt": "いつもをお願いします",
          "furigana": "いつもをおねがいします",
          "romaji": "itsumo o onegaishimasu.",
          "english": "Always, please.",
          "audioText": "いつもをお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "を",
            "いつも",
            "ありがとう"
          ],
          "dictateSolution": [
            "いつも",
            "を",
            "お願いします"
          ],
          "correctAnswer": "いつもをお願いします"
        },
        {
          "id": "u3_l7_7",
          "type": "match",
          "prompt": "昨日・毎日・いつも・時々",
          "furigana": "きのう・まいにち・いつも・ときどき",
          "romaji": "kinou, mainichi, itsumo, tokidoki",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "きのう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "昨日",
              "right": "Yesterday",
              "furigana": "きのう",
              "romaji": "kinou"
            },
            {
              "id": "p_1",
              "left": "毎日",
              "right": "Every day",
              "furigana": "まいにち",
              "romaji": "mainichi"
            },
            {
              "id": "p_2",
              "left": "いつも",
              "right": "Always",
              "furigana": "いつも",
              "romaji": "itsumo"
            },
            {
              "id": "p_3",
              "left": "時々",
              "right": "Sometimes",
              "furigana": "ときどき",
              "romaji": "tokidoki"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l7_8",
          "type": "dialogue",
          "prompt": "一緒に晩ごはんを食べませんか？",
          "dialogueSpeaker": "Friend",
          "dialoguePrompt": "一緒に晩ごはんを食べませんか？",
          "furigana": "一緒に晩ごはんを食べませんか？",
          "romaji": "Issho ni bangohan o tabemasen ka?",
          "english": "Friend: Would you like to have dinner together tonight?",
          "audioText": "一緒に晩ごはんを食べませんか？",
          "dialogueOptions": [
            "いいですね！行きましょう！",
            "さようなら",
            "私は学生です",
            "朝7時です"
          ],
          "options": [
            "いいですね！行きましょう！",
            "さようなら",
            "私は学生です",
            "朝7時です"
          ],
          "correctAnswer": "いいですね！行きましょう！"
        }
      ]
    },
    {
      "id": "u3_l8",
      "unitId": "unit_3",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Sometimes & Weekend",
      "titleJp": "時々・週末",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "時々",
        "週末",
        "休み"
      ],
      "kanjiKeywords": [
        "時",
        "週",
        "末",
        "休"
      ],
      "items": [
        {
          "id": "u3_l8_1",
          "type": "listen",
          "prompt": "時々",
          "furigana": "ときどき",
          "romaji": "tokidoki",
          "english": "Sometimes",
          "audioText": "ときどき",
          "options": [
            "Train",
            "Sometimes",
            "Every day",
            "Always"
          ],
          "correctAnswer": "Sometimes"
        },
        {
          "id": "u3_l8_2",
          "type": "spell",
          "prompt": "時々",
          "furigana": "ときどき",
          "romaji": "tokidoki",
          "english": "Build 'Sometimes'",
          "audioText": "ときどき",
          "tileBank": [
            "き",
            "ど",
            "け",
            "よ",
            "き",
            "ね",
            "わ",
            "と"
          ],
          "correctAnswer": "ときどき"
        },
        {
          "id": "u3_l8_3",
          "type": "cloze",
          "prompt": "私は週末がすきです",
          "furigana": "わたしはしゅうまつがすきです",
          "romaji": "Watashi wa shuumatsu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Weekend.",
          "audioText": "週末",
          "clozeSentence": "これは週末 {{BLANK}} す。",
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
          "id": "u3_l8_4",
          "type": "scramble",
          "prompt": "これは週末です",
          "furigana": "これはしゅうまつです",
          "romaji": "Kore wa shuumatsu desu.",
          "english": "This is Weekend.",
          "audioText": "これは週末です",
          "scrambleTokens": [
            "です",
            "週末",
            "これは",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "週末",
            "です"
          ],
          "correctAnswer": "これは週末です"
        },
        {
          "id": "u3_l8_5",
          "type": "speak",
          "prompt": "休み",
          "furigana": "やすみ",
          "romaji": "yasumi",
          "english": "Pronounce: Holiday / day off",
          "audioText": "やすみ",
          "targetSpeech": "休み",
          "options": [
            "Holiday / day off",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "休み"
        },
        {
          "id": "u3_l8_6",
          "type": "dictate",
          "prompt": "休みをお願いします",
          "furigana": "やすみをおねがいします",
          "romaji": "yasumi o onegaishimasu.",
          "english": "Holiday / day off, please.",
          "audioText": "休みをお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "休み",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "休み",
            "を",
            "お願いします"
          ],
          "correctAnswer": "休みをお願いします"
        },
        {
          "id": "u3_l8_7",
          "type": "match",
          "prompt": "時々・週末・休み・勉強する",
          "furigana": "ときどき・しゅうまつ・やすみ・べんきょうする",
          "romaji": "tokidoki, shuumatsu, yasumi, benkyou suru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ときどき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "時々",
              "right": "Sometimes",
              "furigana": "ときどき",
              "romaji": "tokidoki"
            },
            {
              "id": "p_1",
              "left": "週末",
              "right": "Weekend",
              "furigana": "しゅうまつ",
              "romaji": "shuumatsu"
            },
            {
              "id": "p_2",
              "left": "休み",
              "right": "Holiday / day off",
              "furigana": "やすみ",
              "romaji": "yasumi"
            },
            {
              "id": "p_3",
              "left": "勉強する",
              "right": "To study",
              "furigana": "べんきょうする",
              "romaji": "benkyou suru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l8_8",
          "type": "dialogue",
          "prompt": "今日は学校で何を勉強したの？",
          "dialogueSpeaker": "Mom",
          "dialoguePrompt": "今日は学校で何を勉強したの？",
          "furigana": "今日は学校で何を勉強したの？",
          "romaji": "Kyou wa gakkou de nani o benkyou shita no?",
          "english": "Mom: What did you study at school today?",
          "audioText": "今日は学校で何を勉強したの？",
          "dialogueOptions": [
            "日本語の漢字と文法を勉強しました。",
            "ピザが好きです",
            "お茶を飲みます",
            "初めまして"
          ],
          "options": [
            "日本語の漢字と文法を勉強しました。",
            "ピザが好きです",
            "お茶を飲みます",
            "初めまして"
          ],
          "correctAnswer": "日本語の漢字と文法を勉強しました。"
        }
      ]
    },
    {
      "id": "u3_l9",
      "unitId": "unit_3",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "To study & To work",
      "titleJp": "勉強する・働く",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "勉強する",
        "働く",
        "仕事"
      ],
      "kanjiKeywords": [
        "勉",
        "強",
        "働",
        "仕",
        "事"
      ],
      "items": [
        {
          "id": "u3_l9_1",
          "type": "listen",
          "prompt": "勉強する",
          "furigana": "べんきょうする",
          "romaji": "benkyou suru",
          "english": "To study",
          "audioText": "べんきょうする",
          "options": [
            "Always",
            "Newspaper",
            "To write",
            "To study"
          ],
          "correctAnswer": "To study"
        },
        {
          "id": "u3_l9_2",
          "type": "spell",
          "prompt": "働く",
          "furigana": "はたらく",
          "romaji": "hataraku",
          "english": "Build 'To work'",
          "audioText": "はたらく",
          "tileBank": [
            "く",
            "み",
            "れ",
            "は",
            "か",
            "た",
            "ら",
            "す"
          ],
          "correctAnswer": "はたらく"
        },
        {
          "id": "u3_l9_3",
          "type": "cloze",
          "prompt": "私は働くがすきです",
          "furigana": "わたしははたらくがすきです",
          "romaji": "Watashi wa hataraku ga suki desu.",
          "english": "Fill in the blank with the correct particle for To work.",
          "audioText": "働く",
          "clozeSentence": "これは働く {{BLANK}} す。",
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
          "id": "u3_l9_4",
          "type": "scramble",
          "prompt": "これは働くです",
          "furigana": "これははたらくです",
          "romaji": "Kore wa hataraku desu.",
          "english": "This is To work.",
          "audioText": "これは働くです",
          "scrambleTokens": [
            "働く",
            "です",
            "それ",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "働く",
            "です"
          ],
          "correctAnswer": "これは働くです"
        },
        {
          "id": "u3_l9_5",
          "type": "speak",
          "prompt": "仕事",
          "furigana": "しごと",
          "romaji": "shigoto",
          "english": "Pronounce: Job / work",
          "audioText": "しごと",
          "targetSpeech": "仕事",
          "options": [
            "Job / work",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "仕事"
        },
        {
          "id": "u3_l9_6",
          "type": "dictate",
          "prompt": "仕事をお願いします",
          "furigana": "しごとをおねがいします",
          "romaji": "shigoto o onegaishimasu.",
          "english": "Job / work, please.",
          "audioText": "仕事をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "仕事",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "仕事",
            "を",
            "お願いします"
          ],
          "correctAnswer": "仕事をお願いします"
        },
        {
          "id": "u3_l9_7",
          "type": "match",
          "prompt": "勉強する・働く・仕事・学校",
          "furigana": "べんきょうする・はたらく・しごと・がっこう",
          "romaji": "benkyou suru, hataraku, shigoto, gakkou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "べんきょうする",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "勉強する",
              "right": "To study",
              "furigana": "べんきょうする",
              "romaji": "benkyou suru"
            },
            {
              "id": "p_1",
              "left": "働く",
              "right": "To work",
              "furigana": "はたらく",
              "romaji": "hataraku"
            },
            {
              "id": "p_2",
              "left": "仕事",
              "right": "Job / work",
              "furigana": "しごと",
              "romaji": "shigoto"
            },
            {
              "id": "p_3",
              "left": "学校",
              "right": "School",
              "furigana": "がっこう",
              "romaji": "gakkou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l9_8",
          "type": "dialogue",
          "prompt": "毎朝、何時に起きますか？",
          "dialogueSpeaker": "Tanaka",
          "dialoguePrompt": "毎朝、何時に起きますか？",
          "furigana": "毎朝、何時に起きますか？",
          "romaji": "Maiasa, nanji ni okimasu ka?",
          "english": "Tanaka: What time do you wake up every morning?",
          "audioText": "毎朝、何時に起きますか？",
          "dialogueOptions": [
            "7時半に起きます。",
            "ラーメンを食べます",
            "アメリカ出身です",
            "はい、元気です"
          ],
          "options": [
            "7時半に起きます。",
            "ラーメンを食べます",
            "アメリカ出身です",
            "はい、元気です"
          ],
          "correctAnswer": "7時半に起きます。"
        }
      ]
    },
    {
      "id": "u3_l10",
      "unitId": "unit_3",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "School & Company / office",
      "titleJp": "学校・会社",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "学校",
        "会社",
        "家"
      ],
      "kanjiKeywords": [
        "学",
        "校",
        "会",
        "社",
        "家"
      ],
      "items": [
        {
          "id": "u3_l10_1",
          "type": "listen",
          "prompt": "学校",
          "furigana": "がっこう",
          "romaji": "gakkou",
          "english": "School",
          "audioText": "がっこう",
          "options": [
            "To drink",
            "Every day",
            "School",
            "Breakfast"
          ],
          "correctAnswer": "School"
        },
        {
          "id": "u3_l10_2",
          "type": "spell",
          "prompt": "学校",
          "furigana": "がっこう",
          "romaji": "gakkou",
          "english": "Build 'School'",
          "audioText": "がっこう",
          "tileBank": [
            "に",
            "っ",
            "き",
            "く",
            "う",
            "が",
            "こ",
            "お"
          ],
          "correctAnswer": "がっこう"
        },
        {
          "id": "u3_l10_3",
          "type": "cloze",
          "prompt": "私は会社がすきです",
          "furigana": "わたしはかいしゃがすきです",
          "romaji": "Watashi wa kaisha ga suki desu.",
          "english": "Fill in the blank with the correct particle for Company / office.",
          "audioText": "会社",
          "clozeSentence": "これは会社 {{BLANK}} す。",
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
          "id": "u3_l10_4",
          "type": "scramble",
          "prompt": "これは会社です",
          "furigana": "これはかいしゃです",
          "romaji": "Kore wa kaisha desu.",
          "english": "This is Company / office.",
          "audioText": "これは会社です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "会社",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "会社",
            "です"
          ],
          "correctAnswer": "これは会社です"
        },
        {
          "id": "u3_l10_5",
          "type": "speak",
          "prompt": "家",
          "furigana": "いえ",
          "romaji": "ie",
          "english": "Pronounce: House / home",
          "audioText": "いえ",
          "targetSpeech": "家",
          "options": [
            "House / home",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "家"
        },
        {
          "id": "u3_l10_6",
          "type": "dictate",
          "prompt": "家をお願いします",
          "furigana": "いえをおねがいします",
          "romaji": "ie o onegaishimasu.",
          "english": "House / home, please.",
          "audioText": "家をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "家",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "家",
            "を",
            "お願いします"
          ],
          "correctAnswer": "家をお願いします"
        },
        {
          "id": "u3_l10_7",
          "type": "match",
          "prompt": "学校・会社・家・電車",
          "furigana": "がっこう・かいしゃ・いえ・でんしゃ",
          "romaji": "gakkou, kaisha, ie, densha",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "がっこう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "学校",
              "right": "School",
              "furigana": "がっこう",
              "romaji": "gakkou"
            },
            {
              "id": "p_1",
              "left": "会社",
              "right": "Company / office",
              "furigana": "かいしゃ",
              "romaji": "kaisha"
            },
            {
              "id": "p_2",
              "left": "家",
              "right": "House / home",
              "furigana": "いえ",
              "romaji": "ie"
            },
            {
              "id": "p_3",
              "left": "電車",
              "right": "Train",
              "furigana": "でんしゃ",
              "romaji": "densha"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l10_8",
          "type": "dialogue",
          "prompt": "会社へはどうやって行きますか？",
          "dialogueSpeaker": "Ken",
          "dialoguePrompt": "会社へはどうやって行きますか？",
          "furigana": "会社へはどうやって行きますか？",
          "romaji": "Kaisha e wa dou yatte ikimasu ka?",
          "english": "Ken: How do you get to your office?",
          "audioText": "会社へはどうやって行きますか？",
          "dialogueOptions": [
            "電車で30分くらいかけて行きます。",
            "本を読みます",
            "夜寝ます",
            "こんにちは"
          ],
          "options": [
            "電車で30分くらいかけて行きます。",
            "本を読みます",
            "夜寝ます",
            "こんにちは"
          ],
          "correctAnswer": "電車で30分くらいかけて行きます。"
        }
      ]
    },
    {
      "id": "u3_l11",
      "unitId": "unit_3",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Train & Bus",
      "titleJp": "電車・バス",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "電車",
        "バス",
        "話す"
      ],
      "kanjiKeywords": [
        "電",
        "車",
        "話"
      ],
      "items": [
        {
          "id": "u3_l11_1",
          "type": "listen",
          "prompt": "電車",
          "furigana": "でんしゃ",
          "romaji": "densha",
          "english": "Train",
          "audioText": "でんしゃ",
          "options": [
            "Today",
            "To eat",
            "School",
            "Train"
          ],
          "correctAnswer": "Train"
        },
        {
          "id": "u3_l11_2",
          "type": "spell",
          "prompt": "電車",
          "furigana": "でんしゃ",
          "romaji": "densha",
          "english": "Build 'Train'",
          "audioText": "でんしゃ",
          "tileBank": [
            "で",
            "る",
            "む",
            "ろ",
            "し",
            "ら",
            "ん",
            "ゃ"
          ],
          "correctAnswer": "でんしゃ"
        },
        {
          "id": "u3_l11_3",
          "type": "cloze",
          "prompt": "私はバスがすきです",
          "furigana": "わたしはバスがすきです",
          "romaji": "Watashi wa basu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Bus.",
          "audioText": "バス",
          "clozeSentence": "これはバス {{BLANK}} す。",
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
          "id": "u3_l11_4",
          "type": "scramble",
          "prompt": "これはバスです",
          "furigana": "これはバスです",
          "romaji": "Kore wa basu desu.",
          "english": "This is Bus.",
          "audioText": "これはバスです",
          "scrambleTokens": [
            "です",
            "それ",
            "これは",
            "ではありません",
            "バス"
          ],
          "scrambleSolution": [
            "これは",
            "バス",
            "です"
          ],
          "correctAnswer": "これはバスです"
        },
        {
          "id": "u3_l11_5",
          "type": "speak",
          "prompt": "話す",
          "furigana": "はなす",
          "romaji": "hanasu",
          "english": "Pronounce: To talk / speak",
          "audioText": "はなす",
          "targetSpeech": "話す",
          "options": [
            "To talk / speak",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "話す"
        },
        {
          "id": "u3_l11_6",
          "type": "dictate",
          "prompt": "話すをお願いします",
          "furigana": "はなすをおねがいします",
          "romaji": "hanasu o onegaishimasu.",
          "english": "To talk / speak, please.",
          "audioText": "話すをお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "話す",
            "を",
            "です"
          ],
          "dictateSolution": [
            "話す",
            "を",
            "お願いします"
          ],
          "correctAnswer": "話すをお願いします"
        },
        {
          "id": "u3_l11_7",
          "type": "match",
          "prompt": "電車・バス・話す・書く",
          "furigana": "でんしゃ・バス・はなす・かく",
          "romaji": "densha, basu, hanasu, kaku",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "でんしゃ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "電車",
              "right": "Train",
              "furigana": "でんしゃ",
              "romaji": "densha"
            },
            {
              "id": "p_1",
              "left": "バス",
              "right": "Bus",
              "furigana": "バス",
              "romaji": "basu"
            },
            {
              "id": "p_2",
              "left": "話す",
              "right": "To talk / speak",
              "furigana": "はなす",
              "romaji": "hanasu"
            },
            {
              "id": "p_3",
              "left": "書く",
              "right": "To write",
              "furigana": "かく",
              "romaji": "kaku"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l11_8",
          "type": "dialogue",
          "prompt": "一緒に晩ごはんを食べませんか？",
          "dialogueSpeaker": "Friend",
          "dialoguePrompt": "一緒に晩ごはんを食べませんか？",
          "furigana": "一緒に晩ごはんを食べませんか？",
          "romaji": "Issho ni bangohan o tabemasen ka?",
          "english": "Friend: Would you like to have dinner together tonight?",
          "audioText": "一緒に晩ごはんを食べませんか？",
          "dialogueOptions": [
            "いいですね！行きましょう！",
            "さようなら",
            "私は学生です",
            "朝7時です"
          ],
          "options": [
            "いいですね！行きましょう！",
            "さようなら",
            "私は学生です",
            "朝7時です"
          ],
          "correctAnswer": "いいですね！行きましょう！"
        }
      ]
    },
    {
      "id": "u3_l12",
      "unitId": "unit_3",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "To write & To read",
      "titleJp": "書く・読む",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "書く",
        "読む",
        "会う"
      ],
      "kanjiKeywords": [
        "書",
        "読",
        "会"
      ],
      "items": [
        {
          "id": "u3_l12_1",
          "type": "listen",
          "prompt": "書く",
          "furigana": "かく",
          "romaji": "kaku",
          "english": "To write",
          "audioText": "かく",
          "options": [
            "To wake up / get up",
            "To write",
            "Noon / daytime",
            "Yesterday"
          ],
          "correctAnswer": "To write"
        },
        {
          "id": "u3_l12_2",
          "type": "spell",
          "prompt": "書く",
          "furigana": "かく",
          "romaji": "kaku",
          "english": "Build 'To write'",
          "audioText": "かく",
          "tileBank": [
            "か",
            "い",
            "へ",
            "や",
            "よ",
            "く",
            "た",
            "に"
          ],
          "correctAnswer": "かく"
        },
        {
          "id": "u3_l12_3",
          "type": "cloze",
          "prompt": "私は読むがすきです",
          "furigana": "わたしはよむがすきです",
          "romaji": "Watashi wa yomu ga suki desu.",
          "english": "Fill in the blank with the correct particle for To read.",
          "audioText": "読む",
          "clozeSentence": "これは読む {{BLANK}} す。",
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
          "id": "u3_l12_4",
          "type": "scramble",
          "prompt": "これは読むです",
          "furigana": "これはよむです",
          "romaji": "Kore wa yomu desu.",
          "english": "This is To read.",
          "audioText": "これは読むです",
          "scrambleTokens": [
            "です",
            "それ",
            "これは",
            "読む",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "読む",
            "です"
          ],
          "correctAnswer": "これは読むです"
        },
        {
          "id": "u3_l12_5",
          "type": "speak",
          "prompt": "会う",
          "furigana": "あう",
          "romaji": "au",
          "english": "Pronounce: To meet",
          "audioText": "あう",
          "targetSpeech": "会う",
          "options": [
            "To meet",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "会う"
        },
        {
          "id": "u3_l12_6",
          "type": "dictate",
          "prompt": "会うをお願いします",
          "furigana": "あうをおねがいします",
          "romaji": "au o onegaishimasu.",
          "english": "To meet, please.",
          "audioText": "会うをお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "お願いします",
            "です",
            "会う"
          ],
          "dictateSolution": [
            "会う",
            "を",
            "お願いします"
          ],
          "correctAnswer": "会うをお願いします"
        },
        {
          "id": "u3_l12_7",
          "type": "match",
          "prompt": "書く・読む・会う・友達",
          "furigana": "かく・よむ・あう・ともだち",
          "romaji": "kaku, yomu, au, tomodachi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かく",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "書く",
              "right": "To write",
              "furigana": "かく",
              "romaji": "kaku"
            },
            {
              "id": "p_1",
              "left": "読む",
              "right": "To read",
              "furigana": "よむ",
              "romaji": "yomu"
            },
            {
              "id": "p_2",
              "left": "会う",
              "right": "To meet",
              "furigana": "あう",
              "romaji": "au"
            },
            {
              "id": "p_3",
              "left": "友達",
              "right": "Friend",
              "furigana": "ともだち",
              "romaji": "tomodachi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l12_8",
          "type": "dialogue",
          "prompt": "今日は学校で何を勉強したの？",
          "dialogueSpeaker": "Mom",
          "dialoguePrompt": "今日は学校で何を勉強したの？",
          "furigana": "今日は学校で何を勉強したの？",
          "romaji": "Kyou wa gakkou de nani o benkyou shita no?",
          "english": "Mom: What did you study at school today?",
          "audioText": "今日は学校で何を勉強したの？",
          "dialogueOptions": [
            "日本語の漢字と文法を勉強しました。",
            "ピザが好きです",
            "お茶を飲みます",
            "初めまして"
          ],
          "options": [
            "日本語の漢字と文法を勉強しました。",
            "ピザが好きです",
            "お茶を飲みます",
            "初めまして"
          ],
          "correctAnswer": "日本語の漢字と文法を勉強しました。"
        }
      ]
    },
    {
      "id": "u3_l13",
      "unitId": "unit_3",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Friend & Book",
      "titleJp": "友達・本",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "友達",
        "本",
        "新聞"
      ],
      "kanjiKeywords": [
        "友",
        "達",
        "本",
        "新",
        "聞"
      ],
      "items": [
        {
          "id": "u3_l13_1",
          "type": "listen",
          "prompt": "友達",
          "furigana": "ともだち",
          "romaji": "tomodachi",
          "english": "Friend",
          "audioText": "ともだち",
          "options": [
            "Friend",
            "To go",
            "Letter",
            "Night / evening"
          ],
          "correctAnswer": "Friend"
        },
        {
          "id": "u3_l13_2",
          "type": "spell",
          "prompt": "友達",
          "furigana": "ともだち",
          "romaji": "tomodachi",
          "english": "Build 'Friend'",
          "audioText": "ともだち",
          "tileBank": [
            "と",
            "か",
            "も",
            "は",
            "ろ",
            "う",
            "だ",
            "ち"
          ],
          "correctAnswer": "ともだち"
        },
        {
          "id": "u3_l13_3",
          "type": "cloze",
          "prompt": "私は本がすきです",
          "furigana": "わたしはほんがすきです",
          "romaji": "Watashi wa hon ga suki desu.",
          "english": "Fill in the blank with the correct particle for Book.",
          "audioText": "本",
          "clozeSentence": "私は本 {{BLANK}} 好きです。",
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
          "id": "u3_l13_4",
          "type": "scramble",
          "prompt": "これは本です",
          "furigana": "これはほんです",
          "romaji": "Kore wa hon desu.",
          "english": "This is Book.",
          "audioText": "これは本です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "それ",
            "本",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "本",
            "です"
          ],
          "correctAnswer": "これは本です"
        },
        {
          "id": "u3_l13_5",
          "type": "speak",
          "prompt": "新聞",
          "furigana": "しんぶん",
          "romaji": "shinbun",
          "english": "Pronounce: Newspaper",
          "audioText": "しんぶん",
          "targetSpeech": "新聞",
          "options": [
            "Newspaper",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "新聞"
        },
        {
          "id": "u3_l13_6",
          "type": "dictate",
          "prompt": "新聞をお願いします",
          "furigana": "しんぶんをおねがいします",
          "romaji": "shinbun o onegaishimasu.",
          "english": "Newspaper, please.",
          "audioText": "新聞をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "新聞",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "新聞",
            "を",
            "お願いします"
          ],
          "correctAnswer": "新聞をお願いします"
        },
        {
          "id": "u3_l13_7",
          "type": "match",
          "prompt": "友達・本・新聞・手紙",
          "furigana": "ともだち・ほん・しんぶん・てがみ",
          "romaji": "tomodachi, hon, shinbun, tegami",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ともだち",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "友達",
              "right": "Friend",
              "furigana": "ともだち",
              "romaji": "tomodachi"
            },
            {
              "id": "p_1",
              "left": "本",
              "right": "Book",
              "furigana": "ほん",
              "romaji": "hon"
            },
            {
              "id": "p_2",
              "left": "新聞",
              "right": "Newspaper",
              "furigana": "しんぶん",
              "romaji": "shinbun"
            },
            {
              "id": "p_3",
              "left": "手紙",
              "right": "Letter",
              "furigana": "てがみ",
              "romaji": "tegami"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l13_8",
          "type": "dialogue",
          "prompt": "毎朝、何時に起きますか？",
          "dialogueSpeaker": "Tanaka",
          "dialoguePrompt": "毎朝、何時に起きますか？",
          "furigana": "毎朝、何時に起きますか？",
          "romaji": "Maiasa, nanji ni okimasu ka?",
          "english": "Tanaka: What time do you wake up every morning?",
          "audioText": "毎朝、何時に起きますか？",
          "dialogueOptions": [
            "7時半に起きます。",
            "ラーメンを食べます",
            "アメリカ出身です",
            "はい、元気です"
          ],
          "options": [
            "7時半に起きます。",
            "ラーメンを食べます",
            "アメリカ出身です",
            "はい、元気です"
          ],
          "correctAnswer": "7時半に起きます。"
        }
      ]
    },
    {
      "id": "u3_l14",
      "unitId": "unit_3",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Letter & To wake up / get up",
      "titleJp": "手紙・起きる",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "手紙",
        "起きる",
        "寝る"
      ],
      "kanjiKeywords": [
        "手",
        "紙",
        "起",
        "寝"
      ],
      "items": [
        {
          "id": "u3_l14_1",
          "type": "listen",
          "prompt": "手紙",
          "furigana": "てがみ",
          "romaji": "tegami",
          "english": "Letter",
          "audioText": "てがみ",
          "options": [
            "Weekend",
            "Letter",
            "Breakfast",
            "Every day"
          ],
          "correctAnswer": "Letter"
        },
        {
          "id": "u3_l14_2",
          "type": "spell",
          "prompt": "手紙",
          "furigana": "てがみ",
          "romaji": "tegami",
          "english": "Build 'Letter'",
          "audioText": "てがみ",
          "tileBank": [
            "て",
            "み",
            "が",
            "ん",
            "さ",
            "た",
            "に",
            "と"
          ],
          "correctAnswer": "てがみ"
        },
        {
          "id": "u3_l14_3",
          "type": "cloze",
          "prompt": "私は起きるがすきです",
          "furigana": "わたしはおきるがすきです",
          "romaji": "Watashi wa okiru ga suki desu.",
          "english": "Fill in the blank with the correct particle for To wake up / get up.",
          "audioText": "起きる",
          "clozeSentence": "これは起きる {{BLANK}} す。",
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
          "id": "u3_l14_4",
          "type": "scramble",
          "prompt": "これは起きるです",
          "furigana": "これはおきるです",
          "romaji": "Kore wa okiru desu.",
          "english": "This is To wake up / get up.",
          "audioText": "これは起きるです",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "です",
            "起きる",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "起きる",
            "です"
          ],
          "correctAnswer": "これは起きるです"
        },
        {
          "id": "u3_l14_5",
          "type": "speak",
          "prompt": "寝る",
          "furigana": "ねる",
          "romaji": "neru",
          "english": "Pronounce: To sleep / go to bed",
          "audioText": "ねる",
          "targetSpeech": "寝る",
          "options": [
            "To sleep / go to bed",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "寝る"
        },
        {
          "id": "u3_l14_6",
          "type": "dictate",
          "prompt": "寝るをお願いします",
          "furigana": "ねるをおねがいします",
          "romaji": "neru o onegaishimasu.",
          "english": "To sleep / go to bed, please.",
          "audioText": "寝るをお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "お願いします",
            "です",
            "寝る"
          ],
          "dictateSolution": [
            "寝る",
            "を",
            "お願いします"
          ],
          "correctAnswer": "寝るをお願いします"
        },
        {
          "id": "u3_l14_7",
          "type": "match",
          "prompt": "手紙・起きる・寝る・食べる",
          "furigana": "てがみ・おきる・ねる・たべる",
          "romaji": "tegami, okiru, neru, taberu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "てがみ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "手紙",
              "right": "Letter",
              "furigana": "てがみ",
              "romaji": "tegami"
            },
            {
              "id": "p_1",
              "left": "起きる",
              "right": "To wake up / get up",
              "furigana": "おきる",
              "romaji": "okiru"
            },
            {
              "id": "p_2",
              "left": "寝る",
              "right": "To sleep / go to bed",
              "furigana": "ねる",
              "romaji": "neru"
            },
            {
              "id": "p_3",
              "left": "食べる",
              "right": "To eat",
              "furigana": "たべる",
              "romaji": "taberu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l14_8",
          "type": "dialogue",
          "prompt": "会社へはどうやって行きますか？",
          "dialogueSpeaker": "Ken",
          "dialoguePrompt": "会社へはどうやって行きますか？",
          "furigana": "会社へはどうやって行きますか？",
          "romaji": "Kaisha e wa dou yatte ikimasu ka?",
          "english": "Ken: How do you get to your office?",
          "audioText": "会社へはどうやって行きますか？",
          "dialogueOptions": [
            "電車で30分くらいかけて行きます。",
            "本を読みます",
            "夜寝ます",
            "こんにちは"
          ],
          "options": [
            "電車で30分くらいかけて行きます。",
            "本を読みます",
            "夜寝ます",
            "こんにちは"
          ],
          "correctAnswer": "電車で30分くらいかけて行きます。"
        }
      ]
    },
    {
      "id": "u3_l15",
      "unitId": "unit_3",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 3 Master Exam",
      "iconType": "test",
      "title": "Unit 3 Master Exam",
      "titleJp": "第3週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "食べる",
        "飲む",
        "行く"
      ],
      "kanjiKeywords": [
        "食",
        "飲",
        "行"
      ],
      "items": [
        {
          "id": "u3_l15_1",
          "type": "listen",
          "prompt": "食べる",
          "furigana": "たべる",
          "romaji": "taberu",
          "english": "To eat",
          "audioText": "たべる",
          "options": [
            "Lunch",
            "Sometimes",
            "Holiday / day off",
            "To eat"
          ],
          "correctAnswer": "To eat"
        },
        {
          "id": "u3_l15_2",
          "type": "spell",
          "prompt": "食べる",
          "furigana": "たべる",
          "romaji": "taberu",
          "english": "Build 'To eat'",
          "audioText": "たべる",
          "tileBank": [
            "も",
            "る",
            "た",
            "わ",
            "べ",
            "を",
            "む",
            "ほ"
          ],
          "correctAnswer": "たべる"
        },
        {
          "id": "u3_l15_3",
          "type": "cloze",
          "prompt": "私は飲むがすきです",
          "furigana": "わたしはのむがすきです",
          "romaji": "Watashi wa nomu ga suki desu.",
          "english": "Fill in the blank with the correct particle for To drink.",
          "audioText": "飲む",
          "clozeSentence": "これは飲む {{BLANK}} す。",
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
          "id": "u3_l15_4",
          "type": "scramble",
          "prompt": "これは飲むです",
          "furigana": "これはのむです",
          "romaji": "Kore wa nomu desu.",
          "english": "This is To drink.",
          "audioText": "これは飲むです",
          "scrambleTokens": [
            "飲む",
            "それ",
            "です",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "飲む",
            "です"
          ],
          "correctAnswer": "これは飲むです"
        },
        {
          "id": "u3_l15_5",
          "type": "speak",
          "prompt": "行く",
          "furigana": "いく",
          "romaji": "iku",
          "english": "Pronounce: To go",
          "audioText": "いく",
          "targetSpeech": "行く",
          "options": [
            "To go",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "行く"
        },
        {
          "id": "u3_l15_6",
          "type": "dictate",
          "prompt": "行くをお願いします",
          "furigana": "いくをおねがいします",
          "romaji": "iku o onegaishimasu.",
          "english": "To go, please.",
          "audioText": "行くをお願いします",
          "dictateTokens": [
            "行く",
            "お願いします",
            "です",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "行く",
            "を",
            "お願いします"
          ],
          "correctAnswer": "行くをお願いします"
        },
        {
          "id": "u3_l15_7",
          "type": "match",
          "prompt": "食べる・飲む・行く・来る",
          "furigana": "たべる・のむ・いく・くる",
          "romaji": "taberu, nomu, iku, kuru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "たべる",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "食べる",
              "right": "To eat",
              "furigana": "たべる",
              "romaji": "taberu"
            },
            {
              "id": "p_1",
              "left": "飲む",
              "right": "To drink",
              "furigana": "のむ",
              "romaji": "nomu"
            },
            {
              "id": "p_2",
              "left": "行く",
              "right": "To go",
              "furigana": "いく",
              "romaji": "iku"
            },
            {
              "id": "p_3",
              "left": "来る",
              "right": "To come",
              "furigana": "くる",
              "romaji": "kuru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u3_l15_8",
          "type": "dialogue",
          "prompt": "一緒に晩ごはんを食べませんか？",
          "dialogueSpeaker": "Friend",
          "dialoguePrompt": "一緒に晩ごはんを食べませんか？",
          "furigana": "一緒に晩ごはんを食べませんか？",
          "romaji": "Issho ni bangohan o tabemasen ka?",
          "english": "Friend: Would you like to have dinner together tonight?",
          "audioText": "一緒に晩ごはんを食べませんか？",
          "dialogueOptions": [
            "いいですね！行きましょう！",
            "さようなら",
            "私は学生です",
            "朝7時です"
          ],
          "options": [
            "いいですね！行きましょう！",
            "さようなら",
            "私は学生です",
            "朝7時です"
          ],
          "correctAnswer": "いいですね！行きましょう！"
        }
      ]
    }
  ],
  "revisionGate": {
    "id": "gate_unit_3",
    "unitId": "unit_3",
    "title": "Unit 3 Mastery Checkpoint",
    "titleJp": "第3週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u3_l1_1",
        "type": "listen",
        "prompt": "起きる",
        "furigana": "おきる",
        "romaji": "okiru",
        "english": "To wake up / get up",
        "audioText": "おきる",
        "options": [
          "To come",
          "To drink",
          "Lunch",
          "To wake up / get up"
        ],
        "correctAnswer": "To wake up / get up"
      },
      {
        "id": "u3_l1_2",
        "type": "spell",
        "prompt": "起きる",
        "furigana": "おきる",
        "romaji": "okiru",
        "english": "Build 'To wake up / get up'",
        "audioText": "おきる",
        "tileBank": [
          "る",
          "つ",
          "ま",
          "お",
          "せ",
          "う",
          "れ",
          "き"
        ],
        "correctAnswer": "おきる"
      },
      {
        "id": "u3_l3_1",
        "type": "listen",
        "prompt": "帰る",
        "furigana": "かえる",
        "romaji": "kaeru",
        "english": "To return home",
        "audioText": "かえる",
        "options": [
          "To buy",
          "Yesterday",
          "School",
          "To return home"
        ],
        "correctAnswer": "To return home"
      },
      {
        "id": "u3_l3_2",
        "type": "spell",
        "prompt": "帰る",
        "furigana": "かえる",
        "romaji": "kaeru",
        "english": "Build 'To return home'",
        "audioText": "かえる",
        "tileBank": [
          "え",
          "ほ",
          "お",
          "き",
          "か",
          "る",
          "へ",
          "り"
        ],
        "correctAnswer": "かえる"
      },
      {
        "id": "u3_l5_1",
        "type": "listen",
        "prompt": "昼ごはん",
        "furigana": "ひるごはん",
        "romaji": "hirugohan",
        "english": "Lunch",
        "audioText": "ひるごはん",
        "options": [
          "Sometimes",
          "To come",
          "Lunch",
          "What time"
        ],
        "correctAnswer": "Lunch"
      },
      {
        "id": "u3_l5_2",
        "type": "spell",
        "prompt": "昼ごはん",
        "furigana": "ひるごはん",
        "romaji": "hirugohan",
        "english": "Build 'Lunch'",
        "audioText": "ひるごはん",
        "tileBank": [
          "ご",
          "わ",
          "ん",
          "ろ",
          "ね",
          "は",
          "る",
          "ひ"
        ],
        "correctAnswer": "ひるごはん"
      },
      {
        "id": "u3_l7_1",
        "type": "listen",
        "prompt": "昨日",
        "furigana": "きのう",
        "romaji": "kinou",
        "english": "Yesterday",
        "audioText": "きのう",
        "options": [
          "Bus",
          "Yesterday",
          "Morning",
          "Book"
        ],
        "correctAnswer": "Yesterday"
      },
      {
        "id": "u3_l7_2",
        "type": "spell",
        "prompt": "昨日",
        "furigana": "きのう",
        "romaji": "kinou",
        "english": "Build 'Yesterday'",
        "audioText": "きのう",
        "tileBank": [
          "さ",
          "き",
          "そ",
          "も",
          "の",
          "う",
          "す",
          "れ"
        ],
        "correctAnswer": "きのう"
      },
      {
        "id": "u3_l9_1",
        "type": "listen",
        "prompt": "勉強する",
        "furigana": "べんきょうする",
        "romaji": "benkyou suru",
        "english": "To study",
        "audioText": "べんきょうする",
        "options": [
          "Always",
          "Newspaper",
          "To write",
          "To study"
        ],
        "correctAnswer": "To study"
      },
      {
        "id": "u3_l9_2",
        "type": "spell",
        "prompt": "働く",
        "furigana": "はたらく",
        "romaji": "hataraku",
        "english": "Build 'To work'",
        "audioText": "はたらく",
        "tileBank": [
          "く",
          "み",
          "れ",
          "は",
          "か",
          "た",
          "ら",
          "す"
        ],
        "correctAnswer": "はたらく"
      },
      {
        "id": "u3_l11_1",
        "type": "listen",
        "prompt": "電車",
        "furigana": "でんしゃ",
        "romaji": "densha",
        "english": "Train",
        "audioText": "でんしゃ",
        "options": [
          "Today",
          "To eat",
          "School",
          "Train"
        ],
        "correctAnswer": "Train"
      },
      {
        "id": "u3_l11_2",
        "type": "spell",
        "prompt": "電車",
        "furigana": "でんしゃ",
        "romaji": "densha",
        "english": "Build 'Train'",
        "audioText": "でんしゃ",
        "tileBank": [
          "で",
          "る",
          "む",
          "ろ",
          "し",
          "ら",
          "ん",
          "ゃ"
        ],
        "correctAnswer": "でんしゃ"
      }
    ]
  }
};
