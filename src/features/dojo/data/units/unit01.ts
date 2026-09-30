import type { DojoUnit } from "../../models/dojo.model";

export const unit01: DojoUnit = {
  "id": "unit_1",
  "unitNumber": 1,
  "title": "Greeting a Japanese Friend",
  "titleJp": "日本人の友達に挨拶",
  "description": "Master first impressions, daily greetings, self-introductions, polite responses, and essential courtesies.",
  "icon": "🌸",
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
      "id": "u1_l1",
      "unitId": "unit_1",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Hello / Good afternoon & Good morning (polite)",
      "titleJp": "こんにちは・おはようございます",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "こんにちは",
        "おはようございます",
        "こんばんは"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u1_l1_1",
          "type": "listen",
          "prompt": "こんにちは",
          "furigana": "こんにちは",
          "romaji": "konnichiwa",
          "english": "Hello / Good afternoon",
          "audioText": "こんにちは",
          "options": [
            "Name",
            "Hello / Good afternoon",
            "Who",
            "No"
          ],
          "correctAnswer": "Hello / Good afternoon"
        },
        {
          "id": "u1_l1_2",
          "type": "spell",
          "prompt": "こんにちは",
          "furigana": "こんにちは",
          "romaji": "konnichiwa",
          "english": "Build 'Hello / Good afternoon'",
          "audioText": "こんにちは",
          "tileBank": [
            "ん",
            "さ",
            "ち",
            "こ",
            "ね",
            "た",
            "は",
            "に"
          ],
          "correctAnswer": "こんにちは"
        },
        {
          "id": "u1_l1_3",
          "type": "cloze",
          "prompt": "私はおはようございますがすきです",
          "furigana": "わたしはおはようございますがすきです",
          "romaji": "Watashi wa ohayou gozaimasu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Good morning (polite).",
          "audioText": "おはようございます",
          "clozeSentence": "これはおはようございます {{BLANK}} す。",
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
          "id": "u1_l1_4",
          "type": "scramble",
          "prompt": "これはおはようございますです",
          "furigana": "これはおはようございますです",
          "romaji": "Kore wa ohayou gozaimasu desu.",
          "english": "This is Good morning (polite).",
          "audioText": "これはおはようございますです",
          "scrambleTokens": [
            "です",
            "おはようございます",
            "ではありません",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "おはようございます",
            "です"
          ],
          "correctAnswer": "これはおはようございますです"
        },
        {
          "id": "u1_l1_5",
          "type": "speak",
          "prompt": "こんばんは",
          "furigana": "こんばんは",
          "romaji": "konbanwa",
          "english": "Pronounce: Good evening",
          "audioText": "こんばんは",
          "targetSpeech": "こんばんは",
          "options": [
            "Good evening",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "こんばんは"
        },
        {
          "id": "u1_l1_6",
          "type": "dictate",
          "prompt": "こんばんはをお願いします",
          "furigana": "こんばんはをおねがいします",
          "romaji": "konbanwa o onegaishimasu.",
          "english": "Good evening, please.",
          "audioText": "こんばんはをお願いします",
          "dictateTokens": [
            "こんばんは",
            "です",
            "ありがとう",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "こんばんは",
            "を",
            "お願いします"
          ],
          "correctAnswer": "こんばんはをお願いします"
        },
        {
          "id": "u1_l1_7",
          "type": "match",
          "prompt": "こんにちは・おはようございます・こんばんは・さようなら",
          "furigana": "こんにちは・おはようございます・こんばんは・さようなら",
          "romaji": "konnichiwa, ohayou gozaimasu, konbanwa, sayounara",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "こんにちは",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "こんにちは",
              "right": "Hello / Good afternoon",
              "furigana": "こんにちは",
              "romaji": "konnichiwa"
            },
            {
              "id": "p_1",
              "left": "おはようございます",
              "right": "Good morning (polite)",
              "furigana": "おはようございます",
              "romaji": "ohayou gozaimasu"
            },
            {
              "id": "p_2",
              "left": "こんばんは",
              "right": "Good evening",
              "furigana": "こんばんは",
              "romaji": "konbanwa"
            },
            {
              "id": "p_3",
              "left": "さようなら",
              "right": "Goodbye",
              "furigana": "さようなら",
              "romaji": "sayounara"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l1_8",
          "type": "dialogue",
          "prompt": "こんにちは！お元気ですか？",
          "dialogueSpeaker": "Tanaka",
          "dialoguePrompt": "こんにちは！お元気ですか？",
          "furigana": "こんにちは！お元気ですか？",
          "romaji": "Konnichiwa! Ogenki desu ka?",
          "english": "Tanaka: Hello! How are you?",
          "audioText": "こんにちは！お元気ですか？",
          "dialogueOptions": [
            "はい、元気です！",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "options": [
            "はい、元気です！",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "correctAnswer": "はい、元気です！"
        }
      ]
    },
    {
      "id": "u1_l2",
      "unitId": "unit_1",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Goodbye & Thank you very much",
      "titleJp": "さようなら・ありがとうございます",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "さようなら",
        "ありがとうございます",
        "どういたしまして"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u1_l2_1",
          "type": "listen",
          "prompt": "さようなら",
          "furigana": "さようなら",
          "romaji": "sayounara",
          "english": "Goodbye",
          "audioText": "さようなら",
          "options": [
            "Welcome home",
            "Goodbye",
            "Company employee",
            "Excuse me / I'm sorry"
          ],
          "correctAnswer": "Goodbye"
        },
        {
          "id": "u1_l2_2",
          "type": "spell",
          "prompt": "さようなら",
          "furigana": "さようなら",
          "romaji": "sayounara",
          "english": "Build 'Goodbye'",
          "audioText": "さようなら",
          "tileBank": [
            "さ",
            "ら",
            "よ",
            "う",
            "な",
            "と",
            "を",
            "ね"
          ],
          "correctAnswer": "さようなら"
        },
        {
          "id": "u1_l2_3",
          "type": "cloze",
          "prompt": "私はありがとうございますがすきです",
          "furigana": "わたしはありがとうございますがすきです",
          "romaji": "Watashi wa arigatou gozaimasu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Thank you very much.",
          "audioText": "ありがとうございます",
          "clozeSentence": "これはありがとうございます {{BLANK}} す。",
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
          "id": "u1_l2_4",
          "type": "scramble",
          "prompt": "これはありがとうございますです",
          "furigana": "これはありがとうございますです",
          "romaji": "Kore wa arigatou gozaimasu desu.",
          "english": "This is Thank you very much.",
          "audioText": "これはありがとうございますです",
          "scrambleTokens": [
            "です",
            "ではありません",
            "これは",
            "ありがとうございます",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "ありがとうございます",
            "です"
          ],
          "correctAnswer": "これはありがとうございますです"
        },
        {
          "id": "u1_l2_5",
          "type": "speak",
          "prompt": "どういたしまして",
          "furigana": "どういたしまして",
          "romaji": "douitashimashite",
          "english": "Pronounce: You are welcome",
          "audioText": "どういたしまして",
          "targetSpeech": "どういたしまして",
          "options": [
            "You are welcome",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "どういたしまして"
        },
        {
          "id": "u1_l2_6",
          "type": "dictate",
          "prompt": "どういたしましてをお願いします",
          "furigana": "どういたしましてをおねがいします",
          "romaji": "douitashimashite o onegaishimasu.",
          "english": "You are welcome, please.",
          "audioText": "どういたしましてをお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "お願いします",
            "です",
            "どういたしまして"
          ],
          "dictateSolution": [
            "どういたしまして",
            "を",
            "お願いします"
          ],
          "correctAnswer": "どういたしましてをお願いします"
        },
        {
          "id": "u1_l2_7",
          "type": "match",
          "prompt": "さようなら・ありがとうございます・どういたしまして・はい",
          "furigana": "さようなら・ありがとうございます・どういたしまして・はい",
          "romaji": "sayounara, arigatou gozaimasu, douitashimashite, hai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さようなら",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "さようなら",
              "right": "Goodbye",
              "furigana": "さようなら",
              "romaji": "sayounara"
            },
            {
              "id": "p_1",
              "left": "ありがとうございます",
              "right": "Thank you very much",
              "furigana": "ありがとうございます",
              "romaji": "arigatou gozaimasu"
            },
            {
              "id": "p_2",
              "left": "どういたしまして",
              "right": "You are welcome",
              "furigana": "どういたしまして",
              "romaji": "douitashimashite"
            },
            {
              "id": "p_3",
              "left": "はい",
              "right": "Yes",
              "furigana": "はい",
              "romaji": "hai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l2_8",
          "type": "dialogue",
          "prompt": "はじめまして、山田です。",
          "dialogueSpeaker": "Yamada",
          "dialoguePrompt": "はじめまして、山田です。",
          "furigana": "はじめまして、山田です。",
          "romaji": "Hajimemashite, Yamada desu.",
          "english": "Yamada: Nice to meet you, I'm Yamada.",
          "audioText": "はじめまして、山田です。",
          "dialogueOptions": [
            "はじめまして、スミスです。こちらこそ！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "options": [
            "はじめまして、スミスです。こちらこそ！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "correctAnswer": "はじめまして、スミスです。こちらこそ！"
        }
      ]
    },
    {
      "id": "u1_l3",
      "unitId": "unit_1",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Yes & No",
      "titleJp": "はい・いいえ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "はい",
        "いいえ",
        "はじめまして"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u1_l3_1",
          "type": "listen",
          "prompt": "はい",
          "furigana": "はい",
          "romaji": "hai",
          "english": "Yes",
          "audioText": "はい",
          "options": [
            "You are welcome",
            "Good night",
            "Company employee",
            "Yes"
          ],
          "correctAnswer": "Yes"
        },
        {
          "id": "u1_l3_2",
          "type": "spell",
          "prompt": "はい",
          "furigana": "はい",
          "romaji": "hai",
          "english": "Build 'Yes'",
          "audioText": "はい",
          "tileBank": [
            "め",
            "は",
            "ほ",
            "あ",
            "い",
            "む",
            "う",
            "て"
          ],
          "correctAnswer": "はい"
        },
        {
          "id": "u1_l3_3",
          "type": "cloze",
          "prompt": "私はいいえがすきです",
          "furigana": "わたしはいいえがすきです",
          "romaji": "Watashi wa iie ga suki desu.",
          "english": "Fill in the blank with the correct particle for No.",
          "audioText": "いいえ",
          "clozeSentence": "これはいいえ {{BLANK}} す。",
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
          "id": "u1_l3_4",
          "type": "scramble",
          "prompt": "これはいいえです",
          "furigana": "これはいいえです",
          "romaji": "Kore wa iie desu.",
          "english": "This is No.",
          "audioText": "これはいいえです",
          "scrambleTokens": [
            "です",
            "これは",
            "ではありません",
            "いいえ",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "いいえ",
            "です"
          ],
          "correctAnswer": "これはいいえです"
        },
        {
          "id": "u1_l3_5",
          "type": "speak",
          "prompt": "はじめまして",
          "furigana": "はじめまして",
          "romaji": "hajimemashite",
          "english": "Pronounce: Nice to meet you",
          "audioText": "はじめまして",
          "targetSpeech": "はじめまして",
          "options": [
            "Nice to meet you",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "はじめまして"
        },
        {
          "id": "u1_l3_6",
          "type": "dictate",
          "prompt": "はじめましてをお願いします",
          "furigana": "はじめましてをおねがいします",
          "romaji": "hajimemashite o onegaishimasu.",
          "english": "Nice to meet you, please.",
          "audioText": "はじめましてをお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "を",
            "はじめまして",
            "お願いします"
          ],
          "dictateSolution": [
            "はじめまして",
            "を",
            "お願いします"
          ],
          "correctAnswer": "はじめましてをお願いします"
        },
        {
          "id": "u1_l3_7",
          "type": "match",
          "prompt": "はい・いいえ・はじめまして・よろしくお願いします",
          "furigana": "はい・いいえ・はじめまして・よろしくおねがいします",
          "romaji": "hai, iie, hajimemashite, yoroshiku onegaishimasu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "はい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "はい",
              "right": "Yes",
              "furigana": "はい",
              "romaji": "hai"
            },
            {
              "id": "p_1",
              "left": "いいえ",
              "right": "No",
              "furigana": "いいえ",
              "romaji": "iie"
            },
            {
              "id": "p_2",
              "left": "はじめまして",
              "right": "Nice to meet you",
              "furigana": "はじめまして",
              "romaji": "hajimemashite"
            },
            {
              "id": "p_3",
              "left": "よろしくお願いします",
              "right": "Please treat me well",
              "furigana": "よろしくおねがいします",
              "romaji": "yoroshiku onegaishimasu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l3_8",
          "type": "dialogue",
          "prompt": "ご出身はどちらですか？",
          "dialogueSpeaker": "Host",
          "dialoguePrompt": "ご出身はどちらですか？",
          "furigana": "ご出身はどちらですか？",
          "romaji": "Goshusshin wa dochira desu ka?",
          "english": "Host: Where are you from?",
          "audioText": "ご出身はどちらですか？",
          "dialogueOptions": [
            "アメリカのニューヨークです。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "options": [
            "アメリカのニューヨークです。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "correctAnswer": "アメリカのニューヨークです。"
        }
      ]
    },
    {
      "id": "u1_l4",
      "unitId": "unit_1",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Please treat me well & Tanaka (common name)",
      "titleJp": "よろしくお願いします・田中",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "よろしくお願いします",
        "田中",
        "学生"
      ],
      "kanjiKeywords": [
        "願",
        "田",
        "中",
        "学",
        "生"
      ],
      "items": [
        {
          "id": "u1_l4_1",
          "type": "listen",
          "prompt": "よろしくお願いします",
          "furigana": "よろしくおねがいします",
          "romaji": "yoroshiku onegaishimasu",
          "english": "Please treat me well",
          "audioText": "よろしくおねがいします",
          "options": [
            "See you later (casual)",
            "Who",
            "Please treat me well",
            "Thank you for the meal"
          ],
          "correctAnswer": "Please treat me well"
        },
        {
          "id": "u1_l4_2",
          "type": "spell",
          "prompt": "田中",
          "furigana": "たなか",
          "romaji": "tanaka",
          "english": "Build 'Tanaka (common name)'",
          "audioText": "たなか",
          "tileBank": [
            "せ",
            "く",
            "な",
            "き",
            "か",
            "た",
            "ひ",
            "う"
          ],
          "correctAnswer": "たなか"
        },
        {
          "id": "u1_l4_3",
          "type": "cloze",
          "prompt": "私は田中がすきです",
          "furigana": "わたしはたなかがすきです",
          "romaji": "Watashi wa tanaka ga suki desu.",
          "english": "Fill in the blank with the correct particle for Tanaka (common name).",
          "audioText": "田中",
          "clozeSentence": "これは田中 {{BLANK}} す。",
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
          "id": "u1_l4_4",
          "type": "scramble",
          "prompt": "これは田中です",
          "furigana": "これはたなかです",
          "romaji": "Kore wa tanaka desu.",
          "english": "This is Tanaka (common name).",
          "audioText": "これは田中です",
          "scrambleTokens": [
            "これは",
            "です",
            "それ",
            "田中",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "田中",
            "です"
          ],
          "correctAnswer": "これは田中です"
        },
        {
          "id": "u1_l4_5",
          "type": "speak",
          "prompt": "学生",
          "furigana": "がくせい",
          "romaji": "gakusei",
          "english": "Pronounce: Student",
          "audioText": "がくせい",
          "targetSpeech": "学生",
          "options": [
            "Student",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "学生"
        },
        {
          "id": "u1_l4_6",
          "type": "dictate",
          "prompt": "学生をお願いします",
          "furigana": "がくせいをおねがいします",
          "romaji": "gakusei o onegaishimasu.",
          "english": "Student, please.",
          "audioText": "学生をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "お願いします",
            "学生",
            "です"
          ],
          "dictateSolution": [
            "学生",
            "を",
            "お願いします"
          ],
          "correctAnswer": "学生をお願いします"
        },
        {
          "id": "u1_l4_7",
          "type": "match",
          "prompt": "よろしくお願いします・田中・学生・先生",
          "furigana": "よろしくおねがいします・たなか・がくせい・せんせい",
          "romaji": "yoroshiku onegaishimasu, tanaka, gakusei, sensei",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "よろしくおねがいします",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "よろしくお願いします",
              "right": "Please treat me well",
              "furigana": "よろしくおねがいします",
              "romaji": "yoroshiku onegaishimasu"
            },
            {
              "id": "p_1",
              "left": "田中",
              "right": "Tanaka (common name)",
              "furigana": "たなか",
              "romaji": "tanaka"
            },
            {
              "id": "p_2",
              "left": "学生",
              "right": "Student",
              "furigana": "がくせい",
              "romaji": "gakusei"
            },
            {
              "id": "p_3",
              "left": "先生",
              "right": "Teacher / Professor",
              "furigana": "せんせい",
              "romaji": "sensei"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l4_8",
          "type": "dialogue",
          "prompt": "明日また会いましょう！",
          "dialogueSpeaker": "Friend",
          "dialoguePrompt": "明日また会いましょう！",
          "furigana": "明日また会いましょう！",
          "romaji": "Ashita mata aimashou!",
          "english": "Friend: Let's meet again tomorrow!",
          "audioText": "明日また会いましょう！",
          "dialogueOptions": [
            "はい、じゃあまたね！",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "options": [
            "はい、じゃあまたね！",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "correctAnswer": "はい、じゃあまたね！"
        }
      ]
    },
    {
      "id": "u1_l5",
      "unitId": "unit_1",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Teacher / Professor & Company employee",
      "titleJp": "先生・会社員",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "先生",
        "会社員",
        "日本人"
      ],
      "kanjiKeywords": [
        "先",
        "生",
        "会",
        "社",
        "員",
        "日",
        "本",
        "人"
      ],
      "items": [
        {
          "id": "u1_l5_1",
          "type": "listen",
          "prompt": "先生",
          "furigana": "せんせい",
          "romaji": "sensei",
          "english": "Teacher / Professor",
          "audioText": "せんせい",
          "options": [
            "Hello / Good afternoon",
            "Teacher / Professor",
            "Who",
            "Welcome home"
          ],
          "correctAnswer": "Teacher / Professor"
        },
        {
          "id": "u1_l5_2",
          "type": "spell",
          "prompt": "先生",
          "furigana": "せんせい",
          "romaji": "sensei",
          "english": "Build 'Teacher / Professor'",
          "audioText": "せんせい",
          "tileBank": [
            "お",
            "せ",
            "ね",
            "せ",
            "い",
            "め",
            "つ",
            "ん"
          ],
          "correctAnswer": "せんせい"
        },
        {
          "id": "u1_l5_3",
          "type": "cloze",
          "prompt": "私は会社員がすきです",
          "furigana": "わたしはかいしゃいんがすきです",
          "romaji": "Watashi wa kaishain ga suki desu.",
          "english": "Fill in the blank with the correct particle for Company employee.",
          "audioText": "会社員",
          "clozeSentence": "これは会社員 {{BLANK}} す。",
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
          "id": "u1_l5_4",
          "type": "scramble",
          "prompt": "これは会社員です",
          "furigana": "これはかいしゃいんです",
          "romaji": "Kore wa kaishain desu.",
          "english": "This is Company employee.",
          "audioText": "これは会社員です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "会社員",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "会社員",
            "です"
          ],
          "correctAnswer": "これは会社員です"
        },
        {
          "id": "u1_l5_5",
          "type": "speak",
          "prompt": "日本人",
          "furigana": "にほんじん",
          "romaji": "nihonjin",
          "english": "Pronounce: Japanese person",
          "audioText": "にほんじん",
          "targetSpeech": "日本人",
          "options": [
            "Japanese person",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "日本人"
        },
        {
          "id": "u1_l5_6",
          "type": "dictate",
          "prompt": "日本人をお願いします",
          "furigana": "にほんじんをおねがいします",
          "romaji": "nihonjin o onegaishimasu.",
          "english": "Japanese person, please.",
          "audioText": "日本人をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "日本人",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "日本人",
            "を",
            "お願いします"
          ],
          "correctAnswer": "日本人をお願いします"
        },
        {
          "id": "u1_l5_7",
          "type": "match",
          "prompt": "先生・会社員・日本人・留学生",
          "furigana": "せんせい・かいしゃいん・にほんじん・りゅうがくせい",
          "romaji": "sensei, kaishain, nihonjin, ryuugakusei",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せんせい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "先生",
              "right": "Teacher / Professor",
              "furigana": "せんせい",
              "romaji": "sensei"
            },
            {
              "id": "p_1",
              "left": "会社員",
              "right": "Company employee",
              "furigana": "かいしゃいん",
              "romaji": "kaishain"
            },
            {
              "id": "p_2",
              "left": "日本人",
              "right": "Japanese person",
              "furigana": "にほんじん",
              "romaji": "nihonjin"
            },
            {
              "id": "p_3",
              "left": "留学生",
              "right": "International student",
              "furigana": "りゅうがくせい",
              "romaji": "ryuugakusei"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l5_8",
          "type": "dialogue",
          "prompt": "こんにちは！お元気ですか？",
          "dialogueSpeaker": "Tanaka",
          "dialoguePrompt": "こんにちは！お元気ですか？",
          "furigana": "こんにちは！お元気ですか？",
          "romaji": "Konnichiwa! Ogenki desu ka?",
          "english": "Tanaka: Hello! How are you?",
          "audioText": "こんにちは！お元気ですか？",
          "dialogueOptions": [
            "はい、元気です！",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "options": [
            "はい、元気です！",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "correctAnswer": "はい、元気です！"
        }
      ]
    },
    {
      "id": "u1_l6",
      "unitId": "unit_1",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "International student & How are you?",
      "titleJp": "留学生・お元気ですか",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "留学生",
        "お元気ですか",
        "元気です"
      ],
      "kanjiKeywords": [
        "留",
        "学",
        "生",
        "元",
        "気",
        "元",
        "気"
      ],
      "items": [
        {
          "id": "u1_l6_1",
          "type": "listen",
          "prompt": "留学生",
          "furigana": "りゅうがくせい",
          "romaji": "ryuugakusei",
          "english": "International student",
          "audioText": "りゅうがくせい",
          "options": [
            "Please / go ahead",
            "Nice to meet you",
            "International student",
            "I'm home"
          ],
          "correctAnswer": "International student"
        },
        {
          "id": "u1_l6_2",
          "type": "spell",
          "prompt": "元気です",
          "furigana": "げんきです",
          "romaji": "genki desu",
          "english": "Build 'I am well / healthy'",
          "audioText": "げんきです",
          "tileBank": [
            "す",
            "ん",
            "き",
            "で",
            "れ",
            "げ",
            "の",
            "ち"
          ],
          "correctAnswer": "げんきです"
        },
        {
          "id": "u1_l6_3",
          "type": "cloze",
          "prompt": "私はお元気ですかがすきです",
          "furigana": "わたしはおげんきですかがすきです",
          "romaji": "Watashi wa ogenki desu ka ga suki desu.",
          "english": "Fill in the blank with the correct particle for How are you?.",
          "audioText": "お元気ですか",
          "clozeSentence": "これはお元気ですか {{BLANK}} す。",
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
          "id": "u1_l6_4",
          "type": "scramble",
          "prompt": "これはお元気ですかです",
          "furigana": "これはおげんきですかです",
          "romaji": "Kore wa ogenki desu ka desu.",
          "english": "This is How are you?.",
          "audioText": "これはお元気ですかです",
          "scrambleTokens": [
            "これは",
            "それ",
            "ではありません",
            "です",
            "お元気ですか"
          ],
          "scrambleSolution": [
            "これは",
            "お元気ですか",
            "です"
          ],
          "correctAnswer": "これはお元気ですかです"
        },
        {
          "id": "u1_l6_5",
          "type": "speak",
          "prompt": "元気です",
          "furigana": "げんきです",
          "romaji": "genki desu",
          "english": "Pronounce: I am well / healthy",
          "audioText": "げんきです",
          "targetSpeech": "元気です",
          "options": [
            "I am well / healthy",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "元気です"
        },
        {
          "id": "u1_l6_6",
          "type": "dictate",
          "prompt": "元気ですをお願いします",
          "furigana": "げんきですをおねがいします",
          "romaji": "genki desu o onegaishimasu.",
          "english": "I am well / healthy, please.",
          "audioText": "元気ですをお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "です",
            "を",
            "元気です"
          ],
          "dictateSolution": [
            "元気です",
            "を",
            "お願いします"
          ],
          "correctAnswer": "元気ですをお願いします"
        },
        {
          "id": "u1_l6_7",
          "type": "match",
          "prompt": "留学生・お元気ですか・元気です・出身",
          "furigana": "りゅうがくせい・おげんきですか・げんきです・しゅっしん",
          "romaji": "ryuugakusei, ogenki desu ka, genki desu, shusshin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "りゅうがくせい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "留学生",
              "right": "International student",
              "furigana": "りゅうがくせい",
              "romaji": "ryuugakusei"
            },
            {
              "id": "p_1",
              "left": "お元気ですか",
              "right": "How are you?",
              "furigana": "おげんきですか",
              "romaji": "ogenki desu ka"
            },
            {
              "id": "p_2",
              "left": "元気です",
              "right": "I am well / healthy",
              "furigana": "げんきです",
              "romaji": "genki desu"
            },
            {
              "id": "p_3",
              "left": "出身",
              "right": "Hometown / origin",
              "furigana": "しゅっしん",
              "romaji": "shusshin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l6_8",
          "type": "dialogue",
          "prompt": "はじめまして、山田です。",
          "dialogueSpeaker": "Yamada",
          "dialoguePrompt": "はじめまして、山田です。",
          "furigana": "はじめまして、山田です。",
          "romaji": "Hajimemashite, Yamada desu.",
          "english": "Yamada: Nice to meet you, I'm Yamada.",
          "audioText": "はじめまして、山田です。",
          "dialogueOptions": [
            "はじめまして、スミスです。こちらこそ！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "options": [
            "はじめまして、スミスです。こちらこそ！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "correctAnswer": "はじめまして、スミスです。こちらこそ！"
        }
      ]
    },
    {
      "id": "u1_l7",
      "unitId": "unit_1",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Hometown / origin & Where / which direction (polite)",
      "titleJp": "出身・どちら",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "出身",
        "どちら",
        "アメリカ"
      ],
      "kanjiKeywords": [
        "出",
        "身"
      ],
      "items": [
        {
          "id": "u1_l7_1",
          "type": "listen",
          "prompt": "出身",
          "furigana": "しゅっしん",
          "romaji": "shusshin",
          "english": "Hometown / origin",
          "audioText": "しゅっしん",
          "options": [
            "It's all right / no problem",
            "Good night",
            "Hometown / origin",
            "Let's eat (before meal)"
          ],
          "correctAnswer": "Hometown / origin"
        },
        {
          "id": "u1_l7_2",
          "type": "spell",
          "prompt": "出身",
          "furigana": "しゅっしん",
          "romaji": "shusshin",
          "english": "Build 'Hometown / origin'",
          "audioText": "しゅっしん",
          "tileBank": [
            "は",
            "ゅ",
            "ま",
            "っ",
            "ん",
            "め",
            "し",
            "し"
          ],
          "correctAnswer": "しゅっしん"
        },
        {
          "id": "u1_l7_3",
          "type": "cloze",
          "prompt": "私はどちらがすきです",
          "furigana": "わたしはどちらがすきです",
          "romaji": "Watashi wa dochira ga suki desu.",
          "english": "Fill in the blank with the correct particle for Where / which direction (polite).",
          "audioText": "どちら",
          "clozeSentence": "これはどちら {{BLANK}} す。",
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
          "id": "u1_l7_4",
          "type": "scramble",
          "prompt": "これはどちらです",
          "furigana": "これはどちらです",
          "romaji": "Kore wa dochira desu.",
          "english": "This is Where / which direction (polite).",
          "audioText": "これはどちらです",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "これは",
            "です",
            "どちら"
          ],
          "scrambleSolution": [
            "これは",
            "どちら",
            "です"
          ],
          "correctAnswer": "これはどちらです"
        },
        {
          "id": "u1_l7_5",
          "type": "speak",
          "prompt": "アメリカ",
          "furigana": "アメリカ",
          "romaji": "amerika",
          "english": "Pronounce: America / USA",
          "audioText": "アメリカ",
          "targetSpeech": "アメリカ",
          "options": [
            "America / USA",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "アメリカ"
        },
        {
          "id": "u1_l7_6",
          "type": "dictate",
          "prompt": "アメリカをお願いします",
          "furigana": "アメリカをおねがいします",
          "romaji": "amerika o onegaishimasu.",
          "english": "America / USA, please.",
          "audioText": "アメリカをお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "です",
            "を",
            "アメリカ"
          ],
          "dictateSolution": [
            "アメリカ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "アメリカをお願いします"
        },
        {
          "id": "u1_l7_7",
          "type": "match",
          "prompt": "出身・どちら・アメリカ・名前",
          "furigana": "しゅっしん・どちら・アメリカ・なまえ",
          "romaji": "shusshin, dochira, amerika, namae",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しゅっしん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "出身",
              "right": "Hometown / origin",
              "furigana": "しゅっしん",
              "romaji": "shusshin"
            },
            {
              "id": "p_1",
              "left": "どちら",
              "right": "Where / which direction (polite)",
              "furigana": "どちら",
              "romaji": "dochira"
            },
            {
              "id": "p_2",
              "left": "アメリカ",
              "right": "America / USA",
              "furigana": "アメリカ",
              "romaji": "amerika"
            },
            {
              "id": "p_3",
              "left": "名前",
              "right": "Name",
              "furigana": "なまえ",
              "romaji": "namae"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l7_8",
          "type": "dialogue",
          "prompt": "ご出身はどちらですか？",
          "dialogueSpeaker": "Host",
          "dialoguePrompt": "ご出身はどちらですか？",
          "furigana": "ご出身はどちらですか？",
          "romaji": "Goshusshin wa dochira desu ka?",
          "english": "Host: Where are you from?",
          "audioText": "ご出身はどちらですか？",
          "dialogueOptions": [
            "アメリカのニューヨークです。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "options": [
            "アメリカのニューヨークです。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "correctAnswer": "アメリカのニューヨークです。"
        }
      ]
    },
    {
      "id": "u1_l8",
      "unitId": "unit_1",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Name & Who",
      "titleJp": "名前・誰",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "名前",
        "誰",
        "私"
      ],
      "kanjiKeywords": [
        "名",
        "前",
        "誰",
        "私"
      ],
      "items": [
        {
          "id": "u1_l8_1",
          "type": "listen",
          "prompt": "名前",
          "furigana": "なまえ",
          "romaji": "namae",
          "english": "Name",
          "audioText": "なまえ",
          "options": [
            "Teacher / Professor",
            "Name",
            "See you later (casual)",
            "Good evening"
          ],
          "correctAnswer": "Name"
        },
        {
          "id": "u1_l8_2",
          "type": "spell",
          "prompt": "名前",
          "furigana": "なまえ",
          "romaji": "namae",
          "english": "Build 'Name'",
          "audioText": "なまえ",
          "tileBank": [
            "な",
            "こ",
            "ひ",
            "ま",
            "き",
            "い",
            "え",
            "ね"
          ],
          "correctAnswer": "なまえ"
        },
        {
          "id": "u1_l8_3",
          "type": "cloze",
          "prompt": "私は誰がすきです",
          "furigana": "わたしはだれがすきです",
          "romaji": "Watashi wa dare ga suki desu.",
          "english": "Fill in the blank with the correct particle for Who.",
          "audioText": "誰",
          "clozeSentence": "これは誰 {{BLANK}} す。",
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
          "id": "u1_l8_4",
          "type": "scramble",
          "prompt": "これは誰です",
          "furigana": "これはだれです",
          "romaji": "Kore wa dare desu.",
          "english": "This is Who.",
          "audioText": "これは誰です",
          "scrambleTokens": [
            "これは",
            "です",
            "ではありません",
            "それ",
            "誰"
          ],
          "scrambleSolution": [
            "これは",
            "誰",
            "です"
          ],
          "correctAnswer": "これは誰です"
        },
        {
          "id": "u1_l8_5",
          "type": "speak",
          "prompt": "私",
          "furigana": "わたし",
          "romaji": "watashi",
          "english": "Pronounce: I / me",
          "audioText": "わたし",
          "targetSpeech": "私",
          "options": [
            "I / me",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "私"
        },
        {
          "id": "u1_l8_6",
          "type": "dictate",
          "prompt": "私をお願いします",
          "furigana": "わたしをおねがいします",
          "romaji": "watashi o onegaishimasu.",
          "english": "I / me, please.",
          "audioText": "私をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "を",
            "です",
            "私"
          ],
          "dictateSolution": [
            "私",
            "を",
            "お願いします"
          ],
          "correctAnswer": "私をお願いします"
        },
        {
          "id": "u1_l8_7",
          "type": "match",
          "prompt": "名前・誰・私・すみません",
          "furigana": "なまえ・だれ・わたし・すみません",
          "romaji": "namae, dare, watashi, sumimasen",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "なまえ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "名前",
              "right": "Name",
              "furigana": "なまえ",
              "romaji": "namae"
            },
            {
              "id": "p_1",
              "left": "誰",
              "right": "Who",
              "furigana": "だれ",
              "romaji": "dare"
            },
            {
              "id": "p_2",
              "left": "私",
              "right": "I / me",
              "furigana": "わたし",
              "romaji": "watashi"
            },
            {
              "id": "p_3",
              "left": "すみません",
              "right": "Excuse me / I'm sorry",
              "furigana": "すみません",
              "romaji": "sumimasen"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l8_8",
          "type": "dialogue",
          "prompt": "明日また会いましょう！",
          "dialogueSpeaker": "Friend",
          "dialoguePrompt": "明日また会いましょう！",
          "furigana": "明日また会いましょう！",
          "romaji": "Ashita mata aimashou!",
          "english": "Friend: Let's meet again tomorrow!",
          "audioText": "明日また会いましょう！",
          "dialogueOptions": [
            "はい、じゃあまたね！",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "options": [
            "はい、じゃあまたね！",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "correctAnswer": "はい、じゃあまたね！"
        }
      ]
    },
    {
      "id": "u1_l9",
      "unitId": "unit_1",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Excuse me / I'm sorry & I'm sorry (casual polite)",
      "titleJp": "すみません・ごめんなさい",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "すみません",
        "ごめんなさい",
        "大丈夫です"
      ],
      "kanjiKeywords": [
        "大",
        "丈",
        "夫"
      ],
      "items": [
        {
          "id": "u1_l9_1",
          "type": "listen",
          "prompt": "すみません",
          "furigana": "すみません",
          "romaji": "sumimasen",
          "english": "Excuse me / I'm sorry",
          "audioText": "すみません",
          "options": [
            "Excuse me / I'm sorry",
            "Tanaka (common name)",
            "Thank you very much",
            "Thank you for the meal"
          ],
          "correctAnswer": "Excuse me / I'm sorry"
        },
        {
          "id": "u1_l9_2",
          "type": "spell",
          "prompt": "すみません",
          "furigana": "すみません",
          "romaji": "sumimasen",
          "english": "Build 'Excuse me / I'm sorry'",
          "audioText": "すみません",
          "tileBank": [
            "す",
            "み",
            "ら",
            "ろ",
            "せ",
            "ん",
            "へ",
            "ま"
          ],
          "correctAnswer": "すみません"
        },
        {
          "id": "u1_l9_3",
          "type": "cloze",
          "prompt": "私はごめんなさいがすきです",
          "furigana": "わたしはごめんなさいがすきです",
          "romaji": "Watashi wa gomennasai ga suki desu.",
          "english": "Fill in the blank with the correct particle for I'm sorry (casual polite).",
          "audioText": "ごめんなさい",
          "clozeSentence": "これはごめんなさい {{BLANK}} す。",
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
          "id": "u1_l9_4",
          "type": "scramble",
          "prompt": "これはごめんなさいです",
          "furigana": "これはごめんなさいです",
          "romaji": "Kore wa gomennasai desu.",
          "english": "This is I'm sorry (casual polite).",
          "audioText": "これはごめんなさいです",
          "scrambleTokens": [
            "です",
            "ではありません",
            "これは",
            "それ",
            "ごめんなさい"
          ],
          "scrambleSolution": [
            "これは",
            "ごめんなさい",
            "です"
          ],
          "correctAnswer": "これはごめんなさいです"
        },
        {
          "id": "u1_l9_5",
          "type": "speak",
          "prompt": "大丈夫です",
          "furigana": "だいじょうぶです",
          "romaji": "daijoubu desu",
          "english": "Pronounce: It's all right / no problem",
          "audioText": "だいじょうぶです",
          "targetSpeech": "大丈夫です",
          "options": [
            "It's all right / no problem",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "大丈夫です"
        },
        {
          "id": "u1_l9_6",
          "type": "dictate",
          "prompt": "大丈夫ですをお願いします",
          "furigana": "だいじょうぶですをおねがいします",
          "romaji": "daijoubu desu o onegaishimasu.",
          "english": "It's all right / no problem, please.",
          "audioText": "大丈夫ですをお願いします",
          "dictateTokens": [
            "を",
            "です",
            "お願いします",
            "ありがとう",
            "大丈夫です"
          ],
          "dictateSolution": [
            "大丈夫です",
            "を",
            "お願いします"
          ],
          "correctAnswer": "大丈夫ですをお願いします"
        },
        {
          "id": "u1_l9_7",
          "type": "match",
          "prompt": "すみません・ごめんなさい・大丈夫です・どうぞ",
          "furigana": "すみません・ごめんなさい・だいじょうぶです・どうぞ",
          "romaji": "sumimasen, gomennasai, daijoubu desu, douzo",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "すみません",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "すみません",
              "right": "Excuse me / I'm sorry",
              "furigana": "すみません",
              "romaji": "sumimasen"
            },
            {
              "id": "p_1",
              "left": "ごめんなさい",
              "right": "I'm sorry (casual polite)",
              "furigana": "ごめんなさい",
              "romaji": "gomennasai"
            },
            {
              "id": "p_2",
              "left": "大丈夫です",
              "right": "It's all right / no problem",
              "furigana": "だいじょうぶです",
              "romaji": "daijoubu desu"
            },
            {
              "id": "p_3",
              "left": "どうぞ",
              "right": "Please / go ahead",
              "furigana": "どうぞ",
              "romaji": "douzo"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l9_8",
          "type": "dialogue",
          "prompt": "こんにちは！お元気ですか？",
          "dialogueSpeaker": "Tanaka",
          "dialoguePrompt": "こんにちは！お元気ですか？",
          "furigana": "こんにちは！お元気ですか？",
          "romaji": "Konnichiwa! Ogenki desu ka?",
          "english": "Tanaka: Hello! How are you?",
          "audioText": "こんにちは！お元気ですか？",
          "dialogueOptions": [
            "はい、元気です！",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "options": [
            "はい、元気です！",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "correctAnswer": "はい、元気です！"
        }
      ]
    },
    {
      "id": "u1_l10",
      "unitId": "unit_1",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Please / go ahead & Likewise / the pleasure is mine",
      "titleJp": "どうぞ・こちらこそ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "どうぞ",
        "こちらこそ",
        "失礼します"
      ],
      "kanjiKeywords": [
        "失",
        "礼"
      ],
      "items": [
        {
          "id": "u1_l10_1",
          "type": "listen",
          "prompt": "どうぞ",
          "furigana": "どうぞ",
          "romaji": "douzo",
          "english": "Please / go ahead",
          "audioText": "どうぞ",
          "options": [
            "Please / go ahead",
            "Nice to meet you",
            "I'm leaving (home)",
            "I / me"
          ],
          "correctAnswer": "Please / go ahead"
        },
        {
          "id": "u1_l10_2",
          "type": "spell",
          "prompt": "どうぞ",
          "furigana": "どうぞ",
          "romaji": "douzo",
          "english": "Build 'Please / go ahead'",
          "audioText": "どうぞ",
          "tileBank": [
            "す",
            "う",
            "い",
            "を",
            "ど",
            "ぞ",
            "は",
            "み"
          ],
          "correctAnswer": "どうぞ"
        },
        {
          "id": "u1_l10_3",
          "type": "cloze",
          "prompt": "私はこちらこそがすきです",
          "furigana": "わたしはこちらこそがすきです",
          "romaji": "Watashi wa kochirakoso ga suki desu.",
          "english": "Fill in the blank with the correct particle for Likewise / the pleasure is mine.",
          "audioText": "こちらこそ",
          "clozeSentence": "これはこちらこそ {{BLANK}} す。",
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
          "id": "u1_l10_4",
          "type": "scramble",
          "prompt": "これはこちらこそです",
          "furigana": "これはこちらこそです",
          "romaji": "Kore wa kochirakoso desu.",
          "english": "This is Likewise / the pleasure is mine.",
          "audioText": "これはこちらこそです",
          "scrambleTokens": [
            "です",
            "ではありません",
            "それ",
            "こちらこそ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "こちらこそ",
            "です"
          ],
          "correctAnswer": "これはこちらこそです"
        },
        {
          "id": "u1_l10_5",
          "type": "speak",
          "prompt": "失礼します",
          "furigana": "しつれいします",
          "romaji": "shitsureishimasu",
          "english": "Pronounce: Pardon me / Goodbye (polite)",
          "audioText": "しつれいします",
          "targetSpeech": "失礼します",
          "options": [
            "Pardon me / Goodbye (polite)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "失礼します"
        },
        {
          "id": "u1_l10_6",
          "type": "dictate",
          "prompt": "失礼しますをお願いします",
          "furigana": "しつれいしますをおねがいします",
          "romaji": "shitsureishimasu o onegaishimasu.",
          "english": "Pardon me / Goodbye (polite), please.",
          "audioText": "失礼しますをお願いします",
          "dictateTokens": [
            "を",
            "失礼します",
            "です",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "失礼します",
            "を",
            "お願いします"
          ],
          "correctAnswer": "失礼しますをお願いします"
        },
        {
          "id": "u1_l10_7",
          "type": "match",
          "prompt": "どうぞ・こちらこそ・失礼します・いただきます",
          "furigana": "どうぞ・こちらこそ・しつれいします・いただきます",
          "romaji": "douzo, kochirakoso, shitsureishimasu, itadakimasu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "どうぞ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "どうぞ",
              "right": "Please / go ahead",
              "furigana": "どうぞ",
              "romaji": "douzo"
            },
            {
              "id": "p_1",
              "left": "こちらこそ",
              "right": "Likewise / the pleasure is mine",
              "furigana": "こちらこそ",
              "romaji": "kochirakoso"
            },
            {
              "id": "p_2",
              "left": "失礼します",
              "right": "Pardon me / Goodbye (polite)",
              "furigana": "しつれいします",
              "romaji": "shitsureishimasu"
            },
            {
              "id": "p_3",
              "left": "いただきます",
              "right": "Let's eat (before meal)",
              "furigana": "いただきます",
              "romaji": "itadakimasu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l10_8",
          "type": "dialogue",
          "prompt": "はじめまして、山田です。",
          "dialogueSpeaker": "Yamada",
          "dialoguePrompt": "はじめまして、山田です。",
          "furigana": "はじめまして、山田です。",
          "romaji": "Hajimemashite, Yamada desu.",
          "english": "Yamada: Nice to meet you, I'm Yamada.",
          "audioText": "はじめまして、山田です。",
          "dialogueOptions": [
            "はじめまして、スミスです。こちらこそ！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "options": [
            "はじめまして、スミスです。こちらこそ！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "correctAnswer": "はじめまして、スミスです。こちらこそ！"
        }
      ]
    },
    {
      "id": "u1_l11",
      "unitId": "unit_1",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Let's eat (before meal) & Thank you for the meal",
      "titleJp": "いただきます・ごちそうさまでした",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "いただきます",
        "ごちそうさまでした",
        "行ってきます"
      ],
      "kanjiKeywords": [
        "行"
      ],
      "items": [
        {
          "id": "u1_l11_1",
          "type": "listen",
          "prompt": "いただきます",
          "furigana": "いただきます",
          "romaji": "itadakimasu",
          "english": "Let's eat (before meal)",
          "audioText": "いただきます",
          "options": [
            "How are you?",
            "Let's eat (before meal)",
            "Excuse me / I'm sorry",
            "Good evening"
          ],
          "correctAnswer": "Let's eat (before meal)"
        },
        {
          "id": "u1_l11_2",
          "type": "spell",
          "prompt": "いただきます",
          "furigana": "いただきます",
          "romaji": "itadakimasu",
          "english": "Build 'Let's eat (before meal)'",
          "audioText": "いただきます",
          "tileBank": [
            "す",
            "き",
            "だ",
            "ま",
            "は",
            "た",
            "い",
            "ち"
          ],
          "correctAnswer": "いただきます"
        },
        {
          "id": "u1_l11_3",
          "type": "cloze",
          "prompt": "私はごちそうさまでしたがすきです",
          "furigana": "わたしはごちそうさまでしたがすきです",
          "romaji": "Watashi wa gochisousamadeshita ga suki desu.",
          "english": "Fill in the blank with the correct particle for Thank you for the meal.",
          "audioText": "ごちそうさまでした",
          "clozeSentence": "これはごちそうさまでした {{BLANK}} す。",
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
          "id": "u1_l11_4",
          "type": "scramble",
          "prompt": "これはごちそうさまでしたです",
          "furigana": "これはごちそうさまでしたです",
          "romaji": "Kore wa gochisousamadeshita desu.",
          "english": "This is Thank you for the meal.",
          "audioText": "これはごちそうさまでしたです",
          "scrambleTokens": [
            "それ",
            "これは",
            "ごちそうさまでした",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "ごちそうさまでした",
            "です"
          ],
          "correctAnswer": "これはごちそうさまでしたです"
        },
        {
          "id": "u1_l11_5",
          "type": "speak",
          "prompt": "行ってきます",
          "furigana": "いってきます",
          "romaji": "ittekimasu",
          "english": "Pronounce: I'm leaving (home)",
          "audioText": "いってきます",
          "targetSpeech": "行ってきます",
          "options": [
            "I'm leaving (home)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "行ってきます"
        },
        {
          "id": "u1_l11_6",
          "type": "dictate",
          "prompt": "行ってきますをお願いします",
          "furigana": "いってきますをおねがいします",
          "romaji": "ittekimasu o onegaishimasu.",
          "english": "I'm leaving (home), please.",
          "audioText": "行ってきますをお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "行ってきます",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "行ってきます",
            "を",
            "お願いします"
          ],
          "correctAnswer": "行ってきますをお願いします"
        },
        {
          "id": "u1_l11_7",
          "type": "match",
          "prompt": "いただきます・ごちそうさまでした・行ってきます・いってらっしゃい",
          "furigana": "いただきます・ごちそうさまでした・いってきます・いってらっしゃい",
          "romaji": "itadakimasu, gochisousamadeshita, ittekimasu, itterasshai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いただきます",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "いただきます",
              "right": "Let's eat (before meal)",
              "furigana": "いただきます",
              "romaji": "itadakimasu"
            },
            {
              "id": "p_1",
              "left": "ごちそうさまでした",
              "right": "Thank you for the meal",
              "furigana": "ごちそうさまでした",
              "romaji": "gochisousamadeshita"
            },
            {
              "id": "p_2",
              "left": "行ってきます",
              "right": "I'm leaving (home)",
              "furigana": "いってきます",
              "romaji": "ittekimasu"
            },
            {
              "id": "p_3",
              "left": "いってらっしゃい",
              "right": "Have a good day / take care",
              "furigana": "いってらっしゃい",
              "romaji": "itterasshai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l11_8",
          "type": "dialogue",
          "prompt": "ご出身はどちらですか？",
          "dialogueSpeaker": "Host",
          "dialoguePrompt": "ご出身はどちらですか？",
          "furigana": "ご出身はどちらですか？",
          "romaji": "Goshusshin wa dochira desu ka?",
          "english": "Host: Where are you from?",
          "audioText": "ご出身はどちらですか？",
          "dialogueOptions": [
            "アメリカのニューヨークです。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "options": [
            "アメリカのニューヨークです。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "correctAnswer": "アメリカのニューヨークです。"
        }
      ]
    },
    {
      "id": "u1_l12",
      "unitId": "unit_1",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Have a good day / take care & I'm home",
      "titleJp": "いってらっしゃい・ただいま",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "いってらっしゃい",
        "ただいま",
        "おかえりなさい"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u1_l12_1",
          "type": "listen",
          "prompt": "いってらっしゃい",
          "furigana": "いってらっしゃい",
          "romaji": "itterasshai",
          "english": "Have a good day / take care",
          "audioText": "いってらっしゃい",
          "options": [
            "Good night",
            "Hometown / origin",
            "Goodbye",
            "Have a good day / take care"
          ],
          "correctAnswer": "Have a good day / take care"
        },
        {
          "id": "u1_l12_2",
          "type": "spell",
          "prompt": "ただいま",
          "furigana": "ただいま",
          "romaji": "tadaima",
          "english": "Build 'I'm home'",
          "audioText": "ただいま",
          "tileBank": [
            "ん",
            "き",
            "ま",
            "ろ",
            "た",
            "い",
            "は",
            "だ"
          ],
          "correctAnswer": "ただいま"
        },
        {
          "id": "u1_l12_3",
          "type": "cloze",
          "prompt": "私はただいまがすきです",
          "furigana": "わたしはただいまがすきです",
          "romaji": "Watashi wa tadaima ga suki desu.",
          "english": "Fill in the blank with the correct particle for I'm home.",
          "audioText": "ただいま",
          "clozeSentence": "これはただいま {{BLANK}} す。",
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
          "id": "u1_l12_4",
          "type": "scramble",
          "prompt": "これはただいまです",
          "furigana": "これはただいまです",
          "romaji": "Kore wa tadaima desu.",
          "english": "This is I'm home.",
          "audioText": "これはただいまです",
          "scrambleTokens": [
            "です",
            "それ",
            "これは",
            "ではありません",
            "ただいま"
          ],
          "scrambleSolution": [
            "これは",
            "ただいま",
            "です"
          ],
          "correctAnswer": "これはただいまです"
        },
        {
          "id": "u1_l12_5",
          "type": "speak",
          "prompt": "おかえりなさい",
          "furigana": "おかえりなさい",
          "romaji": "okaerinasai",
          "english": "Pronounce: Welcome home",
          "audioText": "おかえりなさい",
          "targetSpeech": "おかえりなさい",
          "options": [
            "Welcome home",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "おかえりなさい"
        },
        {
          "id": "u1_l12_6",
          "type": "dictate",
          "prompt": "おかえりなさいをお願いします",
          "furigana": "おかえりなさいをおねがいします",
          "romaji": "okaerinasai o onegaishimasu.",
          "english": "Welcome home, please.",
          "audioText": "おかえりなさいをお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "おかえりなさい",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "おかえりなさい",
            "を",
            "お願いします"
          ],
          "correctAnswer": "おかえりなさいをお願いします"
        },
        {
          "id": "u1_l12_7",
          "type": "match",
          "prompt": "いってらっしゃい・ただいま・おかえりなさい・おやすみなさい",
          "furigana": "いってらっしゃい・ただいま・おかえりなさい・おやすみなさい",
          "romaji": "itterasshai, tadaima, okaerinasai, oyasuminasai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いってらっしゃい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "いってらっしゃい",
              "right": "Have a good day / take care",
              "furigana": "いってらっしゃい",
              "romaji": "itterasshai"
            },
            {
              "id": "p_1",
              "left": "ただいま",
              "right": "I'm home",
              "furigana": "ただいま",
              "romaji": "tadaima"
            },
            {
              "id": "p_2",
              "left": "おかえりなさい",
              "right": "Welcome home",
              "furigana": "おかえりなさい",
              "romaji": "okaerinasai"
            },
            {
              "id": "p_3",
              "left": "おやすみなさい",
              "right": "Good night",
              "furigana": "おやすみなさい",
              "romaji": "oyasuminasai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l12_8",
          "type": "dialogue",
          "prompt": "明日また会いましょう！",
          "dialogueSpeaker": "Friend",
          "dialoguePrompt": "明日また会いましょう！",
          "furigana": "明日また会いましょう！",
          "romaji": "Ashita mata aimashou!",
          "english": "Friend: Let's meet again tomorrow!",
          "audioText": "明日また会いましょう！",
          "dialogueOptions": [
            "はい、じゃあまたね！",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "options": [
            "はい、じゃあまたね！",
            "いただきます",
            "ごめんなさい",
            "私は学生です"
          ],
          "correctAnswer": "はい、じゃあまたね！"
        }
      ]
    },
    {
      "id": "u1_l13",
      "unitId": "unit_1",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Good night & See you later (casual)",
      "titleJp": "おやすみなさい・またね",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "おやすみなさい",
        "またね",
        "こんにちは"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u1_l13_1",
          "type": "listen",
          "prompt": "おやすみなさい",
          "furigana": "おやすみなさい",
          "romaji": "oyasuminasai",
          "english": "Good night",
          "audioText": "おやすみなさい",
          "options": [
            "Company employee",
            "Student",
            "Let's eat (before meal)",
            "Good night"
          ],
          "correctAnswer": "Good night"
        },
        {
          "id": "u1_l13_2",
          "type": "spell",
          "prompt": "またね",
          "furigana": "またね",
          "romaji": "matane",
          "english": "Build 'See you later (casual)'",
          "audioText": "またね",
          "tileBank": [
            "ら",
            "み",
            "あ",
            "き",
            "ね",
            "た",
            "る",
            "ま"
          ],
          "correctAnswer": "またね"
        },
        {
          "id": "u1_l13_3",
          "type": "cloze",
          "prompt": "私はまたねがすきです",
          "furigana": "わたしはまたねがすきです",
          "romaji": "Watashi wa matane ga suki desu.",
          "english": "Fill in the blank with the correct particle for See you later (casual).",
          "audioText": "またね",
          "clozeSentence": "これはまたね {{BLANK}} す。",
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
          "id": "u1_l13_4",
          "type": "scramble",
          "prompt": "これはまたねです",
          "furigana": "これはまたねです",
          "romaji": "Kore wa matane desu.",
          "english": "This is See you later (casual).",
          "audioText": "これはまたねです",
          "scrambleTokens": [
            "これは",
            "それ",
            "です",
            "ではありません",
            "またね"
          ],
          "scrambleSolution": [
            "これは",
            "またね",
            "です"
          ],
          "correctAnswer": "これはまたねです"
        },
        {
          "id": "u1_l13_5",
          "type": "speak",
          "prompt": "こんにちは",
          "furigana": "こんにちは",
          "romaji": "konnichiwa",
          "english": "Pronounce: Hello / Good afternoon",
          "audioText": "こんにちは",
          "targetSpeech": "こんにちは",
          "options": [
            "Hello / Good afternoon",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "こんにちは"
        },
        {
          "id": "u1_l13_6",
          "type": "dictate",
          "prompt": "こんにちはをお願いします",
          "furigana": "こんにちはをおねがいします",
          "romaji": "konnichiwa o onegaishimasu.",
          "english": "Hello / Good afternoon, please.",
          "audioText": "こんにちはをお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "ありがとう",
            "こんにちは",
            "を"
          ],
          "dictateSolution": [
            "こんにちは",
            "を",
            "お願いします"
          ],
          "correctAnswer": "こんにちはをお願いします"
        },
        {
          "id": "u1_l13_7",
          "type": "match",
          "prompt": "おやすみなさい・またね・こんにちは・おはようございます",
          "furigana": "おやすみなさい・またね・こんにちは・おはようございます",
          "romaji": "oyasuminasai, matane, konnichiwa, ohayou gozaimasu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おやすみなさい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "おやすみなさい",
              "right": "Good night",
              "furigana": "おやすみなさい",
              "romaji": "oyasuminasai"
            },
            {
              "id": "p_1",
              "left": "またね",
              "right": "See you later (casual)",
              "furigana": "またね",
              "romaji": "matane"
            },
            {
              "id": "p_2",
              "left": "こんにちは",
              "right": "Hello / Good afternoon",
              "furigana": "こんにちは",
              "romaji": "konnichiwa"
            },
            {
              "id": "p_3",
              "left": "おはようございます",
              "right": "Good morning (polite)",
              "furigana": "おはようございます",
              "romaji": "ohayou gozaimasu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l13_8",
          "type": "dialogue",
          "prompt": "こんにちは！お元気ですか？",
          "dialogueSpeaker": "Tanaka",
          "dialoguePrompt": "こんにちは！お元気ですか？",
          "furigana": "こんにちは！お元気ですか？",
          "romaji": "Konnichiwa! Ogenki desu ka?",
          "english": "Tanaka: Hello! How are you?",
          "audioText": "こんにちは！お元気ですか？",
          "dialogueOptions": [
            "はい、元気です！",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "options": [
            "はい、元気です！",
            "さようなら",
            "いいえ、日本人です",
            "はじめまして"
          ],
          "correctAnswer": "はい、元気です！"
        }
      ]
    },
    {
      "id": "u1_l14",
      "unitId": "unit_1",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Good morning (polite) & Good evening",
      "titleJp": "おはようございます・こんばんは",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "おはようございます",
        "こんばんは",
        "さようなら"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u1_l14_1",
          "type": "listen",
          "prompt": "おはようございます",
          "furigana": "おはようございます",
          "romaji": "ohayou gozaimasu",
          "english": "Good morning (polite)",
          "audioText": "おはようございます",
          "options": [
            "Teacher / Professor",
            "Good morning (polite)",
            "I am well / healthy",
            "Please / go ahead"
          ],
          "correctAnswer": "Good morning (polite)"
        },
        {
          "id": "u1_l14_2",
          "type": "spell",
          "prompt": "こんばんは",
          "furigana": "こんばんは",
          "romaji": "konbanwa",
          "english": "Build 'Good evening'",
          "audioText": "こんばんは",
          "tileBank": [
            "て",
            "ん",
            "ば",
            "こ",
            "は",
            "き",
            "へ",
            "ん"
          ],
          "correctAnswer": "こんばんは"
        },
        {
          "id": "u1_l14_3",
          "type": "cloze",
          "prompt": "私はこんばんはがすきです",
          "furigana": "わたしはこんばんはがすきです",
          "romaji": "Watashi wa konbanwa ga suki desu.",
          "english": "Fill in the blank with the correct particle for Good evening.",
          "audioText": "こんばんは",
          "clozeSentence": "これはこんばんは {{BLANK}} す。",
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
          "id": "u1_l14_4",
          "type": "scramble",
          "prompt": "これはこんばんはです",
          "furigana": "これはこんばんはです",
          "romaji": "Kore wa konbanwa desu.",
          "english": "This is Good evening.",
          "audioText": "これはこんばんはです",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "これは",
            "こんばんは"
          ],
          "scrambleSolution": [
            "これは",
            "こんばんは",
            "です"
          ],
          "correctAnswer": "これはこんばんはです"
        },
        {
          "id": "u1_l14_5",
          "type": "speak",
          "prompt": "さようなら",
          "furigana": "さようなら",
          "romaji": "sayounara",
          "english": "Pronounce: Goodbye",
          "audioText": "さようなら",
          "targetSpeech": "さようなら",
          "options": [
            "Goodbye",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "さようなら"
        },
        {
          "id": "u1_l14_6",
          "type": "dictate",
          "prompt": "さようならをお願いします",
          "furigana": "さようならをおねがいします",
          "romaji": "sayounara o onegaishimasu.",
          "english": "Goodbye, please.",
          "audioText": "さようならをお願いします",
          "dictateTokens": [
            "ありがとう",
            "さようなら",
            "お願いします",
            "です",
            "を"
          ],
          "dictateSolution": [
            "さようなら",
            "を",
            "お願いします"
          ],
          "correctAnswer": "さようならをお願いします"
        },
        {
          "id": "u1_l14_7",
          "type": "match",
          "prompt": "おはようございます・こんばんは・さようなら・ありがとうございます",
          "furigana": "おはようございます・こんばんは・さようなら・ありがとうございます",
          "romaji": "ohayou gozaimasu, konbanwa, sayounara, arigatou gozaimasu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おはようございます",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "おはようございます",
              "right": "Good morning (polite)",
              "furigana": "おはようございます",
              "romaji": "ohayou gozaimasu"
            },
            {
              "id": "p_1",
              "left": "こんばんは",
              "right": "Good evening",
              "furigana": "こんばんは",
              "romaji": "konbanwa"
            },
            {
              "id": "p_2",
              "left": "さようなら",
              "right": "Goodbye",
              "furigana": "さようなら",
              "romaji": "sayounara"
            },
            {
              "id": "p_3",
              "left": "ありがとうございます",
              "right": "Thank you very much",
              "furigana": "ありがとうございます",
              "romaji": "arigatou gozaimasu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l14_8",
          "type": "dialogue",
          "prompt": "はじめまして、山田です。",
          "dialogueSpeaker": "Yamada",
          "dialoguePrompt": "はじめまして、山田です。",
          "furigana": "はじめまして、山田です。",
          "romaji": "Hajimemashite, Yamada desu.",
          "english": "Yamada: Nice to meet you, I'm Yamada.",
          "audioText": "はじめまして、山田です。",
          "dialogueOptions": [
            "はじめまして、スミスです。こちらこそ！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "options": [
            "はじめまして、スミスです。こちらこそ！",
            "お水をお願いします",
            "ごちそうさまでした",
            "駅はどこですか"
          ],
          "correctAnswer": "はじめまして、スミスです。こちらこそ！"
        }
      ]
    },
    {
      "id": "u1_l15",
      "unitId": "unit_1",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 1 Master Exam",
      "iconType": "test",
      "title": "Unit 1 Master Exam",
      "titleJp": "第1週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "ありがとうございます",
        "どういたしまして",
        "はい"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u1_l15_1",
          "type": "listen",
          "prompt": "ありがとうございます",
          "furigana": "ありがとうございます",
          "romaji": "arigatou gozaimasu",
          "english": "Thank you very much",
          "audioText": "ありがとうございます",
          "options": [
            "Thank you very much",
            "I'm leaving (home)",
            "Yes",
            "Have a good day / take care"
          ],
          "correctAnswer": "Thank you very much"
        },
        {
          "id": "u1_l15_2",
          "type": "spell",
          "prompt": "はい",
          "furigana": "はい",
          "romaji": "hai",
          "english": "Build 'Yes'",
          "audioText": "はい",
          "tileBank": [
            "き",
            "わ",
            "い",
            "こ",
            "ん",
            "は",
            "と",
            "え"
          ],
          "correctAnswer": "はい"
        },
        {
          "id": "u1_l15_3",
          "type": "cloze",
          "prompt": "私はどういたしましてがすきです",
          "furigana": "わたしはどういたしましてがすきです",
          "romaji": "Watashi wa douitashimashite ga suki desu.",
          "english": "Fill in the blank with the correct particle for You are welcome.",
          "audioText": "どういたしまして",
          "clozeSentence": "これはどういたしまして {{BLANK}} す。",
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
          "id": "u1_l15_4",
          "type": "scramble",
          "prompt": "これはどういたしましてです",
          "furigana": "これはどういたしましてです",
          "romaji": "Kore wa douitashimashite desu.",
          "english": "This is You are welcome.",
          "audioText": "これはどういたしましてです",
          "scrambleTokens": [
            "どういたしまして",
            "それ",
            "です",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "どういたしまして",
            "です"
          ],
          "correctAnswer": "これはどういたしましてです"
        },
        {
          "id": "u1_l15_5",
          "type": "speak",
          "prompt": "はい",
          "furigana": "はい",
          "romaji": "hai",
          "english": "Pronounce: Yes",
          "audioText": "はい",
          "targetSpeech": "はい",
          "options": [
            "Yes",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "はい"
        },
        {
          "id": "u1_l15_6",
          "type": "dictate",
          "prompt": "はいをお願いします",
          "furigana": "はいをおねがいします",
          "romaji": "hai o onegaishimasu.",
          "english": "Yes, please.",
          "audioText": "はいをお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "を",
            "はい",
            "お願いします"
          ],
          "dictateSolution": [
            "はい",
            "を",
            "お願いします"
          ],
          "correctAnswer": "はいをお願いします"
        },
        {
          "id": "u1_l15_7",
          "type": "match",
          "prompt": "ありがとうございます・どういたしまして・はい・いいえ",
          "furigana": "ありがとうございます・どういたしまして・はい・いいえ",
          "romaji": "arigatou gozaimasu, douitashimashite, hai, iie",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ありがとうございます",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "ありがとうございます",
              "right": "Thank you very much",
              "furigana": "ありがとうございます",
              "romaji": "arigatou gozaimasu"
            },
            {
              "id": "p_1",
              "left": "どういたしまして",
              "right": "You are welcome",
              "furigana": "どういたしまして",
              "romaji": "douitashimashite"
            },
            {
              "id": "p_2",
              "left": "はい",
              "right": "Yes",
              "furigana": "はい",
              "romaji": "hai"
            },
            {
              "id": "p_3",
              "left": "いいえ",
              "right": "No",
              "furigana": "いいえ",
              "romaji": "iie"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u1_l15_8",
          "type": "dialogue",
          "prompt": "ご出身はどちらですか？",
          "dialogueSpeaker": "Host",
          "dialoguePrompt": "ご出身はどちらですか？",
          "furigana": "ご出身はどちらですか？",
          "romaji": "Goshusshin wa dochira desu ka?",
          "english": "Host: Where are you from?",
          "audioText": "ご出身はどちらですか？",
          "dialogueOptions": [
            "アメリカのニューヨークです。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "options": [
            "アメリカのニューヨークです。",
            "こんにちは",
            "美味しいです",
            "いいえ、結構です"
          ],
          "correctAnswer": "アメリカのニューヨークです。"
        }
      ]
    }
  ],
  "revisionGate": {
    "id": "gate_unit_1",
    "unitId": "unit_1",
    "title": "Unit 1 Mastery Checkpoint",
    "titleJp": "第1週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u1_l1_1",
        "type": "listen",
        "prompt": "こんにちは",
        "furigana": "こんにちは",
        "romaji": "konnichiwa",
        "english": "Hello / Good afternoon",
        "audioText": "こんにちは",
        "options": [
          "Name",
          "Hello / Good afternoon",
          "Who",
          "No"
        ],
        "correctAnswer": "Hello / Good afternoon"
      },
      {
        "id": "u1_l1_2",
        "type": "spell",
        "prompt": "こんにちは",
        "furigana": "こんにちは",
        "romaji": "konnichiwa",
        "english": "Build 'Hello / Good afternoon'",
        "audioText": "こんにちは",
        "tileBank": [
          "ん",
          "さ",
          "ち",
          "こ",
          "ね",
          "た",
          "は",
          "に"
        ],
        "correctAnswer": "こんにちは"
      },
      {
        "id": "u1_l3_1",
        "type": "listen",
        "prompt": "はい",
        "furigana": "はい",
        "romaji": "hai",
        "english": "Yes",
        "audioText": "はい",
        "options": [
          "You are welcome",
          "Good night",
          "Company employee",
          "Yes"
        ],
        "correctAnswer": "Yes"
      },
      {
        "id": "u1_l3_2",
        "type": "spell",
        "prompt": "はい",
        "furigana": "はい",
        "romaji": "hai",
        "english": "Build 'Yes'",
        "audioText": "はい",
        "tileBank": [
          "め",
          "は",
          "ほ",
          "あ",
          "い",
          "む",
          "う",
          "て"
        ],
        "correctAnswer": "はい"
      },
      {
        "id": "u1_l5_1",
        "type": "listen",
        "prompt": "先生",
        "furigana": "せんせい",
        "romaji": "sensei",
        "english": "Teacher / Professor",
        "audioText": "せんせい",
        "options": [
          "Hello / Good afternoon",
          "Teacher / Professor",
          "Who",
          "Welcome home"
        ],
        "correctAnswer": "Teacher / Professor"
      },
      {
        "id": "u1_l5_2",
        "type": "spell",
        "prompt": "先生",
        "furigana": "せんせい",
        "romaji": "sensei",
        "english": "Build 'Teacher / Professor'",
        "audioText": "せんせい",
        "tileBank": [
          "お",
          "せ",
          "ね",
          "せ",
          "い",
          "め",
          "つ",
          "ん"
        ],
        "correctAnswer": "せんせい"
      },
      {
        "id": "u1_l7_1",
        "type": "listen",
        "prompt": "出身",
        "furigana": "しゅっしん",
        "romaji": "shusshin",
        "english": "Hometown / origin",
        "audioText": "しゅっしん",
        "options": [
          "It's all right / no problem",
          "Good night",
          "Hometown / origin",
          "Let's eat (before meal)"
        ],
        "correctAnswer": "Hometown / origin"
      },
      {
        "id": "u1_l7_2",
        "type": "spell",
        "prompt": "出身",
        "furigana": "しゅっしん",
        "romaji": "shusshin",
        "english": "Build 'Hometown / origin'",
        "audioText": "しゅっしん",
        "tileBank": [
          "は",
          "ゅ",
          "ま",
          "っ",
          "ん",
          "め",
          "し",
          "し"
        ],
        "correctAnswer": "しゅっしん"
      },
      {
        "id": "u1_l9_1",
        "type": "listen",
        "prompt": "すみません",
        "furigana": "すみません",
        "romaji": "sumimasen",
        "english": "Excuse me / I'm sorry",
        "audioText": "すみません",
        "options": [
          "Excuse me / I'm sorry",
          "Tanaka (common name)",
          "Thank you very much",
          "Thank you for the meal"
        ],
        "correctAnswer": "Excuse me / I'm sorry"
      },
      {
        "id": "u1_l9_2",
        "type": "spell",
        "prompt": "すみません",
        "furigana": "すみません",
        "romaji": "sumimasen",
        "english": "Build 'Excuse me / I'm sorry'",
        "audioText": "すみません",
        "tileBank": [
          "す",
          "み",
          "ら",
          "ろ",
          "せ",
          "ん",
          "へ",
          "ま"
        ],
        "correctAnswer": "すみません"
      },
      {
        "id": "u1_l11_1",
        "type": "listen",
        "prompt": "いただきます",
        "furigana": "いただきます",
        "romaji": "itadakimasu",
        "english": "Let's eat (before meal)",
        "audioText": "いただきます",
        "options": [
          "How are you?",
          "Let's eat (before meal)",
          "Excuse me / I'm sorry",
          "Good evening"
        ],
        "correctAnswer": "Let's eat (before meal)"
      },
      {
        "id": "u1_l11_2",
        "type": "spell",
        "prompt": "いただきます",
        "furigana": "いただきます",
        "romaji": "itadakimasu",
        "english": "Build 'Let's eat (before meal)'",
        "audioText": "いただきます",
        "tileBank": [
          "す",
          "き",
          "だ",
          "ま",
          "は",
          "た",
          "い",
          "ち"
        ],
        "correctAnswer": "いただきます"
      }
    ]
  }
};
