import type { DojoUnit } from "../../models/dojo.model";

export const unit04: DojoUnit = {
  "id": "unit_4",
  "unitNumber": 4,
  "title": "Tokyo Café & Ordering",
  "titleJp": "東京のカフェで注文",
  "description": "Master ordering drinks and treats, using counters, requesting customizations, and paying the bill at Japanese cafés.",
  "icon": "☕",
  "themeColor": "#EC4899",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u4_l1",
      "unitId": "unit_4",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Coffee & Hot coffee",
      "titleJp": "コーヒー・ホットコーヒー",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "コーヒー",
        "ホットコーヒー",
        "アイスティー"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u4_l1_1",
          "type": "listen",
          "prompt": "コーヒー",
          "furigana": "コーヒー",
          "romaji": "koohii",
          "english": "Coffee",
          "audioText": "コーヒー",
          "options": [
            "Small size",
            "Large size",
            "Seat / table",
            "Coffee"
          ],
          "correctAnswer": "Coffee"
        },
        {
          "id": "u4_l1_2",
          "type": "spell",
          "prompt": "コーヒー",
          "furigana": "コーヒー",
          "romaji": "koohii",
          "english": "Build 'Coffee'",
          "audioText": "コーヒー",
          "tileBank": [
            "わ",
            "コ",
            "ヒ",
            "ー",
            "め",
            "け",
            "ぬ",
            "ー"
          ],
          "correctAnswer": "コーヒー"
        },
        {
          "id": "u4_l1_3",
          "type": "cloze",
          "prompt": "私はホットコーヒーがすきです",
          "furigana": "わたしはホットコーヒーがすきです",
          "romaji": "Watashi wa hotto koohii ga suki desu.",
          "english": "Fill in the blank with the correct particle for Hot coffee.",
          "audioText": "ホットコーヒー",
          "clozeSentence": "これはホットコーヒー {{BLANK}} す。",
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
          "id": "u4_l1_4",
          "type": "scramble",
          "prompt": "これはホットコーヒーです",
          "furigana": "これはホットコーヒーです",
          "romaji": "Kore wa hotto koohii desu.",
          "english": "This is Hot coffee.",
          "audioText": "これはホットコーヒーです",
          "scrambleTokens": [
            "これは",
            "それ",
            "ではありません",
            "です",
            "ホットコーヒー"
          ],
          "scrambleSolution": [
            "これは",
            "ホットコーヒー",
            "です"
          ],
          "correctAnswer": "これはホットコーヒーです"
        },
        {
          "id": "u4_l1_5",
          "type": "speak",
          "prompt": "アイスティー",
          "furigana": "アイスティー",
          "romaji": "aisu tii",
          "english": "Pronounce: Iced tea",
          "audioText": "アイスティー",
          "targetSpeech": "アイスティー",
          "options": [
            "Iced tea",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "アイスティー"
        },
        {
          "id": "u4_l1_6",
          "type": "dictate",
          "prompt": "アイスティーをお願いします",
          "furigana": "アイスティーをおねがいします",
          "romaji": "aisu tii o onegaishimasu.",
          "english": "Iced tea, please.",
          "audioText": "アイスティーをお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "アイスティー",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "アイスティー",
            "を",
            "お願いします"
          ],
          "correctAnswer": "アイスティーをお願いします"
        },
        {
          "id": "u4_l1_7",
          "type": "match",
          "prompt": "コーヒー・ホットコーヒー・アイスティー・紅茶",
          "furigana": "コーヒー・ホットコーヒー・アイスティー・こうちゃ",
          "romaji": "koohii, hotto koohii, aisu tii, koucha",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "コーヒー",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "コーヒー",
              "right": "Coffee",
              "furigana": "コーヒー",
              "romaji": "koohii"
            },
            {
              "id": "p_1",
              "left": "ホットコーヒー",
              "right": "Hot coffee",
              "furigana": "ホットコーヒー",
              "romaji": "hotto koohii"
            },
            {
              "id": "p_2",
              "left": "アイスティー",
              "right": "Iced tea",
              "furigana": "アイスティー",
              "romaji": "aisu tii"
            },
            {
              "id": "p_3",
              "left": "紅茶",
              "right": "Black tea",
              "furigana": "こうちゃ",
              "romaji": "koucha"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l1_8",
          "type": "dialogue",
          "prompt": "ご注文はお決まりですか？",
          "dialogueSpeaker": "店員",
          "dialoguePrompt": "ご注文はお決まりですか？",
          "furigana": "ご注文はお決まりですか？",
          "romaji": "Gochuumon wa okimari desu ka?",
          "english": "Clerk: Welcome! Are you ready to order?",
          "audioText": "ご注文はお決まりですか？",
          "dialogueOptions": [
            "ホットコーヒーのMサイズを一つお願いします。",
            "さようなら",
            "私は学生です",
            "駅はあそこです"
          ],
          "options": [
            "ホットコーヒーのMサイズを一つお願いします。",
            "さようなら",
            "私は学生です",
            "駅はあそこです"
          ],
          "correctAnswer": "ホットコーヒーのMサイズを一つお願いします。"
        }
      ]
    },
    {
      "id": "u4_l2",
      "unitId": "unit_4",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Black tea & Café latte",
      "titleJp": "紅茶・カフェラテ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "紅茶",
        "カフェラテ",
        "抹茶ラテ"
      ],
      "kanjiKeywords": [
        "紅",
        "茶",
        "抹",
        "茶"
      ],
      "items": [
        {
          "id": "u4_l2_1",
          "type": "listen",
          "prompt": "紅茶",
          "furigana": "こうちゃ",
          "romaji": "koucha",
          "english": "Black tea",
          "audioText": "こうちゃ",
          "options": [
            "Café latte",
            "Black tea",
            "Hot coffee",
            "Toast"
          ],
          "correctAnswer": "Black tea"
        },
        {
          "id": "u4_l2_2",
          "type": "spell",
          "prompt": "紅茶",
          "furigana": "こうちゃ",
          "romaji": "koucha",
          "english": "Build 'Black tea'",
          "audioText": "こうちゃ",
          "tileBank": [
            "た",
            "よ",
            "こ",
            "う",
            "ゃ",
            "あ",
            "ん",
            "ち"
          ],
          "correctAnswer": "こうちゃ"
        },
        {
          "id": "u4_l2_3",
          "type": "cloze",
          "prompt": "私はカフェラテがすきです",
          "furigana": "わたしはカフェラテがすきです",
          "romaji": "Watashi wa kafe rate ga suki desu.",
          "english": "Fill in the blank with the correct particle for Café latte.",
          "audioText": "カフェラテ",
          "clozeSentence": "これはカフェラテ {{BLANK}} す。",
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
          "id": "u4_l2_4",
          "type": "scramble",
          "prompt": "これはカフェラテです",
          "furigana": "これはカフェラテです",
          "romaji": "Kore wa kafe rate desu.",
          "english": "This is Café latte.",
          "audioText": "これはカフェラテです",
          "scrambleTokens": [
            "それ",
            "これは",
            "ではありません",
            "カフェラテ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "カフェラテ",
            "です"
          ],
          "correctAnswer": "これはカフェラテです"
        },
        {
          "id": "u4_l2_5",
          "type": "speak",
          "prompt": "抹茶ラテ",
          "furigana": "まっちゃラテ",
          "romaji": "matcha rate",
          "english": "Pronounce: Matcha green tea latte",
          "audioText": "まっちゃラテ",
          "targetSpeech": "抹茶ラテ",
          "options": [
            "Matcha green tea latte",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "抹茶ラテ"
        },
        {
          "id": "u4_l2_6",
          "type": "dictate",
          "prompt": "抹茶ラテをお願いします",
          "furigana": "まっちゃラテをおねがいします",
          "romaji": "matcha rate o onegaishimasu.",
          "english": "Matcha green tea latte, please.",
          "audioText": "抹茶ラテをお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "抹茶ラテ",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "抹茶ラテ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "抹茶ラテをお願いします"
        },
        {
          "id": "u4_l2_7",
          "type": "match",
          "prompt": "紅茶・カフェラテ・抹茶ラテ・ください",
          "furigana": "こうちゃ・カフェラテ・まっちゃラテ・ください",
          "romaji": "koucha, kafe rate, matcha rate, kudasai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "こうちゃ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "紅茶",
              "right": "Black tea",
              "furigana": "こうちゃ",
              "romaji": "koucha"
            },
            {
              "id": "p_1",
              "left": "カフェラテ",
              "right": "Café latte",
              "furigana": "カフェラテ",
              "romaji": "kafe rate"
            },
            {
              "id": "p_2",
              "left": "抹茶ラテ",
              "right": "Matcha green tea latte",
              "furigana": "まっちゃラテ",
              "romaji": "matcha rate"
            },
            {
              "id": "p_3",
              "left": "ください",
              "right": "Please give me...",
              "furigana": "ください",
              "romaji": "kudasai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l2_8",
          "type": "dialogue",
          "prompt": "店内でお召し上がりですか？",
          "dialogueSpeaker": "店員",
          "dialoguePrompt": "店内でお召し上がりですか？",
          "furigana": "店内でお召し上がりですか？",
          "romaji": "Tennai de omeshiagari desu ka?",
          "english": "Clerk: Will you be having that in-store?",
          "audioText": "店内でお召し上がりですか？",
          "dialogueOptions": [
            "テイクアウトでお願いします。",
            "はい、元気です",
            "美味しかったです",
            "ごめんなさい"
          ],
          "options": [
            "テイクアウトでお願いします。",
            "はい、元気です",
            "美味しかったです",
            "ごめんなさい"
          ],
          "correctAnswer": "テイクアウトでお願いします。"
        }
      ]
    },
    {
      "id": "u4_l3",
      "unitId": "unit_4",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Please give me... & Please / I request...",
      "titleJp": "ください・お願いします",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "ください",
        "お願いします",
        "一つ"
      ],
      "kanjiKeywords": [
        "願",
        "一"
      ],
      "items": [
        {
          "id": "u4_l3_1",
          "type": "listen",
          "prompt": "ください",
          "furigana": "ください",
          "romaji": "kudasai",
          "english": "Please give me...",
          "audioText": "ください",
          "options": [
            "Please / I request...",
            "Medium size",
            "Please give me...",
            "Iced tea"
          ],
          "correctAnswer": "Please give me..."
        },
        {
          "id": "u4_l3_2",
          "type": "spell",
          "prompt": "ください",
          "furigana": "ください",
          "romaji": "kudasai",
          "english": "Build 'Please give me...'",
          "audioText": "ください",
          "tileBank": [
            "ひ",
            "さ",
            "せ",
            "い",
            "だ",
            "り",
            "く",
            "む"
          ],
          "correctAnswer": "ください"
        },
        {
          "id": "u4_l3_3",
          "type": "cloze",
          "prompt": "私はお願いしますがすきです",
          "furigana": "わたしはおねがいしますがすきです",
          "romaji": "Watashi wa onegaishimasu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Please / I request....",
          "audioText": "お願いします",
          "clozeSentence": "これはお願いします {{BLANK}} す。",
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
          "id": "u4_l3_4",
          "type": "scramble",
          "prompt": "これはお願いしますです",
          "furigana": "これはおねがいしますです",
          "romaji": "Kore wa onegaishimasu desu.",
          "english": "This is Please / I request....",
          "audioText": "これはお願いしますです",
          "scrambleTokens": [
            "お願いします",
            "です",
            "ではありません",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "お願いします",
            "です"
          ],
          "correctAnswer": "これはお願いしますです"
        },
        {
          "id": "u4_l3_5",
          "type": "speak",
          "prompt": "一つ",
          "furigana": "ひとつ",
          "romaji": "hitotsu",
          "english": "Pronounce: One item (counter)",
          "audioText": "ひとつ",
          "targetSpeech": "一つ",
          "options": [
            "One item (counter)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "一つ"
        },
        {
          "id": "u4_l3_6",
          "type": "dictate",
          "prompt": "一つをお願いします",
          "furigana": "ひとつをおねがいします",
          "romaji": "hitotsu o onegaishimasu.",
          "english": "One item (counter), please.",
          "audioText": "一つをお願いします",
          "dictateTokens": [
            "です",
            "一つ",
            "お願いします",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "一つ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "一つをお願いします"
        },
        {
          "id": "u4_l3_7",
          "type": "match",
          "prompt": "ください・お願いします・一つ・二つ",
          "furigana": "ください・おねがいします・ひとつ・ふたつ",
          "romaji": "kudasai, onegaishimasu, hitotsu, futatsu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ください",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "ください",
              "right": "Please give me...",
              "furigana": "ください",
              "romaji": "kudasai"
            },
            {
              "id": "p_1",
              "left": "お願いします",
              "right": "Please / I request...",
              "furigana": "おねがいします",
              "romaji": "onegaishimasu"
            },
            {
              "id": "p_2",
              "left": "一つ",
              "right": "One item (counter)",
              "furigana": "ひとつ",
              "romaji": "hitotsu"
            },
            {
              "id": "p_3",
              "left": "二つ",
              "right": "Two items (counter)",
              "furigana": "ふたつ",
              "romaji": "futatsu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l3_8",
          "type": "dialogue",
          "prompt": "ナッツが入っていますか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "ナッツが入っていますか？",
          "furigana": "ナッツが入っていますか？",
          "romaji": "Nattsu ga haitte imasu ka?",
          "english": "Customer: Excuse me, does this cake contain nuts?",
          "audioText": "ナッツが入っていますか？",
          "dialogueOptions": [
            "いいえ、ナッツは入っておりません。",
            "右に曲がります",
            "お水をお願いします",
            "初めまして"
          ],
          "options": [
            "いいえ、ナッツは入っておりません。",
            "右に曲がります",
            "お水をお願いします",
            "初めまして"
          ],
          "correctAnswer": "いいえ、ナッツは入っておりません。"
        }
      ]
    },
    {
      "id": "u4_l4",
      "unitId": "unit_4",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Two items (counter) & Three items (counter)",
      "titleJp": "二つ・三つ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "二つ",
        "三つ",
        "四つ"
      ],
      "kanjiKeywords": [
        "二",
        "三",
        "四"
      ],
      "items": [
        {
          "id": "u4_l4_1",
          "type": "listen",
          "prompt": "二つ",
          "furigana": "ふたつ",
          "romaji": "futatsu",
          "english": "Two items (counter)",
          "audioText": "ふたつ",
          "options": [
            "Two items (counter)",
            "Dine-in / in-store",
            "Café latte",
            "Takeout (Japanese term)"
          ],
          "correctAnswer": "Two items (counter)"
        },
        {
          "id": "u4_l4_2",
          "type": "spell",
          "prompt": "二つ",
          "furigana": "ふたつ",
          "romaji": "futatsu",
          "english": "Build 'Two items (counter)'",
          "audioText": "ふたつ",
          "tileBank": [
            "ふ",
            "つ",
            "も",
            "う",
            "は",
            "む",
            "ほ",
            "た"
          ],
          "correctAnswer": "ふたつ"
        },
        {
          "id": "u4_l4_3",
          "type": "cloze",
          "prompt": "私は三つがすきです",
          "furigana": "わたしはみっつがすきです",
          "romaji": "Watashi wa mittsu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Three items (counter).",
          "audioText": "三つ",
          "clozeSentence": "これは三つ {{BLANK}} す。",
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
          "id": "u4_l4_4",
          "type": "scramble",
          "prompt": "これは三つです",
          "furigana": "これはみっつです",
          "romaji": "Kore wa mittsu desu.",
          "english": "This is Three items (counter).",
          "audioText": "これは三つです",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "これは",
            "です",
            "三つ"
          ],
          "scrambleSolution": [
            "これは",
            "三つ",
            "です"
          ],
          "correctAnswer": "これは三つです"
        },
        {
          "id": "u4_l4_5",
          "type": "speak",
          "prompt": "四つ",
          "furigana": "よっつ",
          "romaji": "yottsu",
          "english": "Pronounce: Four items (counter)",
          "audioText": "よっつ",
          "targetSpeech": "四つ",
          "options": [
            "Four items (counter)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "四つ"
        },
        {
          "id": "u4_l4_6",
          "type": "dictate",
          "prompt": "四つをお願いします",
          "furigana": "よっつをおねがいします",
          "romaji": "yottsu o onegaishimasu.",
          "english": "Four items (counter), please.",
          "audioText": "四つをお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "四つ",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "四つ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "四つをお願いします"
        },
        {
          "id": "u4_l4_7",
          "type": "match",
          "prompt": "二つ・三つ・四つ・サイズ",
          "furigana": "ふたつ・みっつ・よっつ・サイズ",
          "romaji": "futatsu, mittsu, yottsu, saizu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ふたつ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "二つ",
              "right": "Two items (counter)",
              "furigana": "ふたつ",
              "romaji": "futatsu"
            },
            {
              "id": "p_1",
              "left": "三つ",
              "right": "Three items (counter)",
              "furigana": "みっつ",
              "romaji": "mittsu"
            },
            {
              "id": "p_2",
              "left": "四つ",
              "right": "Four items (counter)",
              "furigana": "よっつ",
              "romaji": "yottsu"
            },
            {
              "id": "p_3",
              "left": "サイズ",
              "right": "Cup size",
              "furigana": "サイズ",
              "romaji": "saizu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l4_8",
          "type": "dialogue",
          "prompt": "カードは使えますか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "カードは使えますか？",
          "furigana": "カードは使えますか？",
          "romaji": "Kaado wa tsukaemasu ka?",
          "english": "Customer: Check please. Do you accept credit cards?",
          "audioText": "カードは使えますか？",
          "dialogueOptions": [
            "はい、各種クレジットカードご利用いただけます！",
            "いいえ、違います",
            "お腹が痛いです",
            "また来ます"
          ],
          "options": [
            "はい、各種クレジットカードご利用いただけます！",
            "いいえ、違います",
            "お腹が痛いです",
            "また来ます"
          ],
          "correctAnswer": "はい、各種クレジットカードご利用いただけます！"
        }
      ]
    },
    {
      "id": "u4_l5",
      "unitId": "unit_4",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Cup size & Small size",
      "titleJp": "サイズ・Sサイズ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "サイズ",
        "Sサイズ",
        "Mサイズ"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u4_l5_1",
          "type": "listen",
          "prompt": "サイズ",
          "furigana": "サイズ",
          "romaji": "saizu",
          "english": "Cup size",
          "audioText": "サイズ",
          "options": [
            "Cup size",
            "One item (counter)",
            "Non-smoking seat",
            "Recommendation"
          ],
          "correctAnswer": "Cup size"
        },
        {
          "id": "u4_l5_2",
          "type": "spell",
          "prompt": "サイズ",
          "furigana": "サイズ",
          "romaji": "saizu",
          "english": "Build 'Cup size'",
          "audioText": "サイズ",
          "tileBank": [
            "す",
            "り",
            "サ",
            "ズ",
            "イ",
            "て",
            "も",
            "た"
          ],
          "correctAnswer": "サイズ"
        },
        {
          "id": "u4_l5_3",
          "type": "cloze",
          "prompt": "私はSサイズがすきです",
          "furigana": "わたしはエスサイズがすきです",
          "romaji": "Watashi wa esu saizu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Small size.",
          "audioText": "Sサイズ",
          "clozeSentence": "私はSサイズ {{BLANK}} 好きです。",
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
          "id": "u4_l5_4",
          "type": "scramble",
          "prompt": "これはSサイズです",
          "furigana": "これはエスサイズです",
          "romaji": "Kore wa esu saizu desu.",
          "english": "This is Small size.",
          "audioText": "これはSサイズです",
          "scrambleTokens": [
            "これは",
            "それ",
            "Sサイズ",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "Sサイズ",
            "です"
          ],
          "correctAnswer": "これはSサイズです"
        },
        {
          "id": "u4_l5_5",
          "type": "speak",
          "prompt": "Mサイズ",
          "furigana": "エムサイズ",
          "romaji": "emu saizu",
          "english": "Pronounce: Medium size",
          "audioText": "エムサイズ",
          "targetSpeech": "Mサイズ",
          "options": [
            "Medium size",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "Mサイズ"
        },
        {
          "id": "u4_l5_6",
          "type": "dictate",
          "prompt": "Mサイズをお願いします",
          "furigana": "エムサイズをおねがいします",
          "romaji": "emu saizu o onegaishimasu.",
          "english": "Medium size, please.",
          "audioText": "Mサイズをお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "Mサイズ",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "Mサイズ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "Mサイズをお願いします"
        },
        {
          "id": "u4_l5_7",
          "type": "match",
          "prompt": "サイズ・Sサイズ・Mサイズ・Lサイズ",
          "furigana": "サイズ・エスサイズ・エムサイズ・エルサイズ",
          "romaji": "saizu, esu saizu, emu saizu, eru saizu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "サイズ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "サイズ",
              "right": "Cup size",
              "furigana": "サイズ",
              "romaji": "saizu"
            },
            {
              "id": "p_1",
              "left": "Sサイズ",
              "right": "Small size",
              "furigana": "エスサイズ",
              "romaji": "esu saizu"
            },
            {
              "id": "p_2",
              "left": "Mサイズ",
              "right": "Medium size",
              "furigana": "エムサイズ",
              "romaji": "emu saizu"
            },
            {
              "id": "p_3",
              "left": "Lサイズ",
              "right": "Large size",
              "furigana": "エルサイズ",
              "romaji": "eru saizu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l5_8",
          "type": "dialogue",
          "prompt": "ご注文はお決まりですか？",
          "dialogueSpeaker": "店員",
          "dialoguePrompt": "ご注文はお決まりですか？",
          "furigana": "ご注文はお決まりですか？",
          "romaji": "Gochuumon wa okimari desu ka?",
          "english": "Clerk: Welcome! Are you ready to order?",
          "audioText": "ご注文はお決まりですか？",
          "dialogueOptions": [
            "ホットコーヒーのMサイズを一つお願いします。",
            "さようなら",
            "私は学生です",
            "駅はあそこです"
          ],
          "options": [
            "ホットコーヒーのMサイズを一つお願いします。",
            "さようなら",
            "私は学生です",
            "駅はあそこです"
          ],
          "correctAnswer": "ホットコーヒーのMサイズを一つお願いします。"
        }
      ]
    },
    {
      "id": "u4_l6",
      "unitId": "unit_4",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Large size & Cake",
      "titleJp": "Lサイズ・ケーキ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "Lサイズ",
        "ケーキ",
        "チーズケーキ"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u4_l6_1",
          "type": "listen",
          "prompt": "Lサイズ",
          "furigana": "エルサイズ",
          "romaji": "eru saizu",
          "english": "Large size",
          "audioText": "エルサイズ",
          "options": [
            "Cup size",
            "Large size",
            "Seat / table",
            "Without ice"
          ],
          "correctAnswer": "Large size"
        },
        {
          "id": "u4_l6_2",
          "type": "spell",
          "prompt": "Lサイズ",
          "furigana": "エルサイズ",
          "romaji": "eru saizu",
          "english": "Build 'Large size'",
          "audioText": "エルサイズ",
          "tileBank": [
            "か",
            "ズ",
            "さ",
            "イ",
            "わ",
            "サ",
            "ル",
            "エ"
          ],
          "correctAnswer": "エルサイズ"
        },
        {
          "id": "u4_l6_3",
          "type": "cloze",
          "prompt": "私はケーキがすきです",
          "furigana": "わたしはケーキがすきです",
          "romaji": "Watashi wa keeki ga suki desu.",
          "english": "Fill in the blank with the correct particle for Cake.",
          "audioText": "ケーキ",
          "clozeSentence": "これはケーキ {{BLANK}} す。",
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
          "id": "u4_l6_4",
          "type": "scramble",
          "prompt": "これはケーキです",
          "furigana": "これはケーキです",
          "romaji": "Kore wa keeki desu.",
          "english": "This is Cake.",
          "audioText": "これはケーキです",
          "scrambleTokens": [
            "ケーキ",
            "です",
            "ではありません",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "ケーキ",
            "です"
          ],
          "correctAnswer": "これはケーキです"
        },
        {
          "id": "u4_l6_5",
          "type": "speak",
          "prompt": "チーズケーキ",
          "furigana": "チーズケーキ",
          "romaji": "chiizu keeki",
          "english": "Pronounce: Cheesecake",
          "audioText": "チーズケーキ",
          "targetSpeech": "チーズケーキ",
          "options": [
            "Cheesecake",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "チーズケーキ"
        },
        {
          "id": "u4_l6_6",
          "type": "dictate",
          "prompt": "チーズケーキをお願いします",
          "furigana": "チーズケーキをおねがいします",
          "romaji": "chiizu keeki o onegaishimasu.",
          "english": "Cheesecake, please.",
          "audioText": "チーズケーキをお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "チーズケーキ",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "チーズケーキ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "チーズケーキをお願いします"
        },
        {
          "id": "u4_l6_7",
          "type": "match",
          "prompt": "Lサイズ・ケーキ・チーズケーキ・サンドイッチ",
          "furigana": "エルサイズ・ケーキ・チーズケーキ・サンドイッチ",
          "romaji": "eru saizu, keeki, chiizu keeki, sandoitchi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "エルサイズ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "Lサイズ",
              "right": "Large size",
              "furigana": "エルサイズ",
              "romaji": "eru saizu"
            },
            {
              "id": "p_1",
              "left": "ケーキ",
              "right": "Cake",
              "furigana": "ケーキ",
              "romaji": "keeki"
            },
            {
              "id": "p_2",
              "left": "チーズケーキ",
              "right": "Cheesecake",
              "furigana": "チーズケーキ",
              "romaji": "chiizu keeki"
            },
            {
              "id": "p_3",
              "left": "サンドイッチ",
              "right": "Sandwich",
              "furigana": "サンドイッチ",
              "romaji": "sandoitchi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l6_8",
          "type": "dialogue",
          "prompt": "店内でお召し上がりですか？",
          "dialogueSpeaker": "店員",
          "dialoguePrompt": "店内でお召し上がりですか？",
          "furigana": "店内でお召し上がりですか？",
          "romaji": "Tennai de omeshiagari desu ka?",
          "english": "Clerk: Will you be having that in-store?",
          "audioText": "店内でお召し上がりですか？",
          "dialogueOptions": [
            "テイクアウトでお願いします。",
            "はい、元気です",
            "美味しかったです",
            "ごめんなさい"
          ],
          "options": [
            "テイクアウトでお願いします。",
            "はい、元気です",
            "美味しかったです",
            "ごめんなさい"
          ],
          "correctAnswer": "テイクアウトでお願いします。"
        }
      ]
    },
    {
      "id": "u4_l7",
      "unitId": "unit_4",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Sandwich & Toast",
      "titleJp": "サンドイッチ・トースト",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "サンドイッチ",
        "トースト",
        "クロワッサン"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u4_l7_1",
          "type": "listen",
          "prompt": "サンドイッチ",
          "furigana": "サンドイッチ",
          "romaji": "sandoitchi",
          "english": "Sandwich",
          "audioText": "サンドイッチ",
          "options": [
            "Receipt",
            "The bill / payment",
            "Seat / table",
            "Sandwich"
          ],
          "correctAnswer": "Sandwich"
        },
        {
          "id": "u4_l7_2",
          "type": "spell",
          "prompt": "サンドイッチ",
          "furigana": "サンドイッチ",
          "romaji": "sandoitchi",
          "english": "Build 'Sandwich'",
          "audioText": "サンドイッチ",
          "tileBank": [
            "ね",
            "イ",
            "ン",
            "ッ",
            "サ",
            "チ",
            "ド",
            "た"
          ],
          "correctAnswer": "サンドイッチ"
        },
        {
          "id": "u4_l7_3",
          "type": "cloze",
          "prompt": "私はトーストがすきです",
          "furigana": "わたしはトーストがすきです",
          "romaji": "Watashi wa toosuto ga suki desu.",
          "english": "Fill in the blank with the correct particle for Toast.",
          "audioText": "トースト",
          "clozeSentence": "これはトースト {{BLANK}} す。",
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
          "id": "u4_l7_4",
          "type": "scramble",
          "prompt": "これはトーストです",
          "furigana": "これはトーストです",
          "romaji": "Kore wa toosuto desu.",
          "english": "This is Toast.",
          "audioText": "これはトーストです",
          "scrambleTokens": [
            "それ",
            "です",
            "これは",
            "ではありません",
            "トースト"
          ],
          "scrambleSolution": [
            "これは",
            "トースト",
            "です"
          ],
          "correctAnswer": "これはトーストです"
        },
        {
          "id": "u4_l7_5",
          "type": "speak",
          "prompt": "クロワッサン",
          "furigana": "クロワッサン",
          "romaji": "kurowassan",
          "english": "Pronounce: Croissant",
          "audioText": "クロワッサン",
          "targetSpeech": "クロワッサン",
          "options": [
            "Croissant",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "クロワッサン"
        },
        {
          "id": "u4_l7_6",
          "type": "dictate",
          "prompt": "クロワッサンをお願いします",
          "furigana": "クロワッサンをおねがいします",
          "romaji": "kurowassan o onegaishimasu.",
          "english": "Croissant, please.",
          "audioText": "クロワッサンをお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "です",
            "クロワッサン",
            "お願いします"
          ],
          "dictateSolution": [
            "クロワッサン",
            "を",
            "お願いします"
          ],
          "correctAnswer": "クロワッサンをお願いします"
        },
        {
          "id": "u4_l7_7",
          "type": "match",
          "prompt": "サンドイッチ・トースト・クロワッサン・メニュー",
          "furigana": "サンドイッチ・トースト・クロワッサン・メニュー",
          "romaji": "sandoitchi, toosuto, kurowassan, menyuu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "サンドイッチ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "サンドイッチ",
              "right": "Sandwich",
              "furigana": "サンドイッチ",
              "romaji": "sandoitchi"
            },
            {
              "id": "p_1",
              "left": "トースト",
              "right": "Toast",
              "furigana": "トースト",
              "romaji": "toosuto"
            },
            {
              "id": "p_2",
              "left": "クロワッサン",
              "right": "Croissant",
              "furigana": "クロワッサン",
              "romaji": "kurowassan"
            },
            {
              "id": "p_3",
              "left": "メニュー",
              "right": "Menu",
              "furigana": "メニュー",
              "romaji": "menyuu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l7_8",
          "type": "dialogue",
          "prompt": "ナッツが入っていますか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "ナッツが入っていますか？",
          "furigana": "ナッツが入っていますか？",
          "romaji": "Nattsu ga haitte imasu ka?",
          "english": "Customer: Excuse me, does this cake contain nuts?",
          "audioText": "ナッツが入っていますか？",
          "dialogueOptions": [
            "いいえ、ナッツは入っておりません。",
            "右に曲がります",
            "お水をお願いします",
            "初めまして"
          ],
          "options": [
            "いいえ、ナッツは入っておりません。",
            "右に曲がります",
            "お水をお願いします",
            "初めまして"
          ],
          "correctAnswer": "いいえ、ナッツは入っておりません。"
        }
      ]
    },
    {
      "id": "u4_l8",
      "unitId": "unit_4",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Menu & Recommendation",
      "titleJp": "メニュー・おすすめ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "メニュー",
        "おすすめ",
        "季節限定"
      ],
      "kanjiKeywords": [
        "季",
        "節",
        "限",
        "定"
      ],
      "items": [
        {
          "id": "u4_l8_1",
          "type": "listen",
          "prompt": "メニュー",
          "furigana": "メニュー",
          "romaji": "menyuu",
          "english": "Menu",
          "audioText": "メニュー",
          "options": [
            "Small size",
            "Takeout / to-go",
            "Menu",
            "Sugar"
          ],
          "correctAnswer": "Menu"
        },
        {
          "id": "u4_l8_2",
          "type": "spell",
          "prompt": "メニュー",
          "furigana": "メニュー",
          "romaji": "menyuu",
          "english": "Build 'Menu'",
          "audioText": "メニュー",
          "tileBank": [
            "メ",
            "け",
            "ュ",
            "な",
            "し",
            "の",
            "ニ",
            "ー"
          ],
          "correctAnswer": "メニュー"
        },
        {
          "id": "u4_l8_3",
          "type": "cloze",
          "prompt": "私はおすすめがすきです",
          "furigana": "わたしはおすすめがすきです",
          "romaji": "Watashi wa osusume ga suki desu.",
          "english": "Fill in the blank with the correct particle for Recommendation.",
          "audioText": "おすすめ",
          "clozeSentence": "私はおすすめ {{BLANK}} 好きです。",
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
          "id": "u4_l8_4",
          "type": "scramble",
          "prompt": "これはおすすめです",
          "furigana": "これはおすすめです",
          "romaji": "Kore wa osusume desu.",
          "english": "This is Recommendation.",
          "audioText": "これはおすすめです",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "おすすめ",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "おすすめ",
            "です"
          ],
          "correctAnswer": "これはおすすめです"
        },
        {
          "id": "u4_l8_5",
          "type": "speak",
          "prompt": "季節限定",
          "furigana": "きせつげんてい",
          "romaji": "kisetsu gentei",
          "english": "Pronounce: Seasonal limited edition",
          "audioText": "きせつげんてい",
          "targetSpeech": "季節限定",
          "options": [
            "Seasonal limited edition",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "季節限定"
        },
        {
          "id": "u4_l8_6",
          "type": "dictate",
          "prompt": "季節限定をお願いします",
          "furigana": "きせつげんていをおねがいします",
          "romaji": "kisetsu gentei o onegaishimasu.",
          "english": "Seasonal limited edition, please.",
          "audioText": "季節限定をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "季節限定",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "季節限定",
            "を",
            "お願いします"
          ],
          "correctAnswer": "季節限定をお願いします"
        },
        {
          "id": "u4_l8_7",
          "type": "match",
          "prompt": "メニュー・おすすめ・季節限定・店内",
          "furigana": "メニュー・おすすめ・きせつげんてい・てんない",
          "romaji": "menyuu, osusume, kisetsu gentei, tennai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "メニュー",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "メニュー",
              "right": "Menu",
              "furigana": "メニュー",
              "romaji": "menyuu"
            },
            {
              "id": "p_1",
              "left": "おすすめ",
              "right": "Recommendation",
              "furigana": "おすすめ",
              "romaji": "osusume"
            },
            {
              "id": "p_2",
              "left": "季節限定",
              "right": "Seasonal limited edition",
              "furigana": "きせつげんてい",
              "romaji": "kisetsu gentei"
            },
            {
              "id": "p_3",
              "left": "店内",
              "right": "Dine-in / in-store",
              "furigana": "てんない",
              "romaji": "tennai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l8_8",
          "type": "dialogue",
          "prompt": "カードは使えますか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "カードは使えますか？",
          "furigana": "カードは使えますか？",
          "romaji": "Kaado wa tsukaemasu ka?",
          "english": "Customer: Check please. Do you accept credit cards?",
          "audioText": "カードは使えますか？",
          "dialogueOptions": [
            "はい、各種クレジットカードご利用いただけます！",
            "いいえ、違います",
            "お腹が痛いです",
            "また来ます"
          ],
          "options": [
            "はい、各種クレジットカードご利用いただけます！",
            "いいえ、違います",
            "お腹が痛いです",
            "また来ます"
          ],
          "correctAnswer": "はい、各種クレジットカードご利用いただけます！"
        }
      ]
    },
    {
      "id": "u4_l9",
      "unitId": "unit_4",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Dine-in / in-store & Takeout / to-go",
      "titleJp": "店内・テイクアウト",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "店内",
        "テイクアウト",
        "持ち帰り"
      ],
      "kanjiKeywords": [
        "店",
        "内",
        "持",
        "帰"
      ],
      "items": [
        {
          "id": "u4_l9_1",
          "type": "listen",
          "prompt": "店内",
          "furigana": "てんない",
          "romaji": "tennai",
          "english": "Dine-in / in-store",
          "audioText": "てんない",
          "options": [
            "Medium size",
            "Dine-in / in-store",
            "Two items (counter)",
            "Croissant"
          ],
          "correctAnswer": "Dine-in / in-store"
        },
        {
          "id": "u4_l9_2",
          "type": "spell",
          "prompt": "店内",
          "furigana": "てんない",
          "romaji": "tennai",
          "english": "Build 'Dine-in / in-store'",
          "audioText": "てんない",
          "tileBank": [
            "て",
            "あ",
            "そ",
            "さ",
            "な",
            "ん",
            "い",
            "ね"
          ],
          "correctAnswer": "てんない"
        },
        {
          "id": "u4_l9_3",
          "type": "cloze",
          "prompt": "私はテイクアウトがすきです",
          "furigana": "わたしはテイクアウトがすきです",
          "romaji": "Watashi wa teikuauto ga suki desu.",
          "english": "Fill in the blank with the correct particle for Takeout / to-go.",
          "audioText": "テイクアウト",
          "clozeSentence": "私はテイクアウト {{BLANK}} 好きです。",
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
          "id": "u4_l9_4",
          "type": "scramble",
          "prompt": "これはテイクアウトです",
          "furigana": "これはテイクアウトです",
          "romaji": "Kore wa teikuauto desu.",
          "english": "This is Takeout / to-go.",
          "audioText": "これはテイクアウトです",
          "scrambleTokens": [
            "テイクアウト",
            "ではありません",
            "です",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "テイクアウト",
            "です"
          ],
          "correctAnswer": "これはテイクアウトです"
        },
        {
          "id": "u4_l9_5",
          "type": "speak",
          "prompt": "持ち帰り",
          "furigana": "もちかえり",
          "romaji": "mochikaeri",
          "english": "Pronounce: Takeout (Japanese term)",
          "audioText": "もちかえり",
          "targetSpeech": "持ち帰り",
          "options": [
            "Takeout (Japanese term)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "持ち帰り"
        },
        {
          "id": "u4_l9_6",
          "type": "dictate",
          "prompt": "持ち帰りをお願いします",
          "furigana": "もちかえりをおねがいします",
          "romaji": "mochikaeri o onegaishimasu.",
          "english": "Takeout (Japanese term), please.",
          "audioText": "持ち帰りをお願いします",
          "dictateTokens": [
            "を",
            "持ち帰り",
            "です",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "持ち帰り",
            "を",
            "お願いします"
          ],
          "correctAnswer": "持ち帰りをお願いします"
        },
        {
          "id": "u4_l9_7",
          "type": "match",
          "prompt": "店内・テイクアウト・持ち帰り・氷なし",
          "furigana": "てんない・テイクアウト・もちかえり・こおりなし",
          "romaji": "tennai, teikuauto, mochikaeri, koori nashi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "てんない",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "店内",
              "right": "Dine-in / in-store",
              "furigana": "てんない",
              "romaji": "tennai"
            },
            {
              "id": "p_1",
              "left": "テイクアウト",
              "right": "Takeout / to-go",
              "furigana": "テイクアウト",
              "romaji": "teikuauto"
            },
            {
              "id": "p_2",
              "left": "持ち帰り",
              "right": "Takeout (Japanese term)",
              "furigana": "もちかえり",
              "romaji": "mochikaeri"
            },
            {
              "id": "p_3",
              "left": "氷なし",
              "right": "Without ice",
              "furigana": "こおりなし",
              "romaji": "koori nashi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l9_8",
          "type": "dialogue",
          "prompt": "ご注文はお決まりですか？",
          "dialogueSpeaker": "店員",
          "dialoguePrompt": "ご注文はお決まりですか？",
          "furigana": "ご注文はお決まりですか？",
          "romaji": "Gochuumon wa okimari desu ka?",
          "english": "Clerk: Welcome! Are you ready to order?",
          "audioText": "ご注文はお決まりですか？",
          "dialogueOptions": [
            "ホットコーヒーのMサイズを一つお願いします。",
            "さようなら",
            "私は学生です",
            "駅はあそこです"
          ],
          "options": [
            "ホットコーヒーのMサイズを一つお願いします。",
            "さようなら",
            "私は学生です",
            "駅はあそこです"
          ],
          "correctAnswer": "ホットコーヒーのMサイズを一つお願いします。"
        }
      ]
    },
    {
      "id": "u4_l10",
      "unitId": "unit_4",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Without ice & Sugar",
      "titleJp": "氷なし・砂糖",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "氷なし",
        "砂糖",
        "ミルク"
      ],
      "kanjiKeywords": [
        "氷",
        "砂",
        "糖"
      ],
      "items": [
        {
          "id": "u4_l10_1",
          "type": "listen",
          "prompt": "氷なし",
          "furigana": "こおりなし",
          "romaji": "koori nashi",
          "english": "Without ice",
          "audioText": "こおりなし",
          "options": [
            "Four items (counter)",
            "Cup size",
            "Without ice",
            "Cheesecake"
          ],
          "correctAnswer": "Without ice"
        },
        {
          "id": "u4_l10_2",
          "type": "spell",
          "prompt": "氷なし",
          "furigana": "こおりなし",
          "romaji": "koori nashi",
          "english": "Build 'Without ice'",
          "audioText": "こおりなし",
          "tileBank": [
            "し",
            "ち",
            "り",
            "な",
            "こ",
            "か",
            "お",
            "も"
          ],
          "correctAnswer": "こおりなし"
        },
        {
          "id": "u4_l10_3",
          "type": "cloze",
          "prompt": "私は砂糖がすきです",
          "furigana": "わたしはさとうがすきです",
          "romaji": "Watashi wa satou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Sugar.",
          "audioText": "砂糖",
          "clozeSentence": "これは砂糖 {{BLANK}} す。",
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
          "id": "u4_l10_4",
          "type": "scramble",
          "prompt": "これは砂糖です",
          "furigana": "これはさとうです",
          "romaji": "Kore wa satou desu.",
          "english": "This is Sugar.",
          "audioText": "これは砂糖です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "これは",
            "です",
            "砂糖"
          ],
          "scrambleSolution": [
            "これは",
            "砂糖",
            "です"
          ],
          "correctAnswer": "これは砂糖です"
        },
        {
          "id": "u4_l10_5",
          "type": "speak",
          "prompt": "ミルク",
          "furigana": "ミルク",
          "romaji": "miruku",
          "english": "Pronounce: Milk / creamer",
          "audioText": "ミルク",
          "targetSpeech": "ミルク",
          "options": [
            "Milk / creamer",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ミルク"
        },
        {
          "id": "u4_l10_6",
          "type": "dictate",
          "prompt": "ミルクをお願いします",
          "furigana": "ミルクをおねがいします",
          "romaji": "miruku o onegaishimasu.",
          "english": "Milk / creamer, please.",
          "audioText": "ミルクをお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "ミルク",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "ミルク",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ミルクをお願いします"
        },
        {
          "id": "u4_l10_7",
          "type": "match",
          "prompt": "氷なし・砂糖・ミルク・シロップ",
          "furigana": "こおりなし・さとう・ミルク・シロップ",
          "romaji": "koori nashi, satou, miruku, shiroppu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "こおりなし",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "氷なし",
              "right": "Without ice",
              "furigana": "こおりなし",
              "romaji": "koori nashi"
            },
            {
              "id": "p_1",
              "left": "砂糖",
              "right": "Sugar",
              "furigana": "さとう",
              "romaji": "satou"
            },
            {
              "id": "p_2",
              "left": "ミルク",
              "right": "Milk / creamer",
              "furigana": "ミルク",
              "romaji": "miruku"
            },
            {
              "id": "p_3",
              "left": "シロップ",
              "right": "Syrup",
              "furigana": "シロップ",
              "romaji": "shiroppu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l10_8",
          "type": "dialogue",
          "prompt": "店内でお召し上がりですか？",
          "dialogueSpeaker": "店員",
          "dialoguePrompt": "店内でお召し上がりですか？",
          "furigana": "店内でお召し上がりですか？",
          "romaji": "Tennai de omeshiagari desu ka?",
          "english": "Clerk: Will you be having that in-store?",
          "audioText": "店内でお召し上がりですか？",
          "dialogueOptions": [
            "テイクアウトでお願いします。",
            "はい、元気です",
            "美味しかったです",
            "ごめんなさい"
          ],
          "options": [
            "テイクアウトでお願いします。",
            "はい、元気です",
            "美味しかったです",
            "ごめんなさい"
          ],
          "correctAnswer": "テイクアウトでお願いします。"
        }
      ]
    },
    {
      "id": "u4_l11",
      "unitId": "unit_4",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Syrup & Drinking straw",
      "titleJp": "シロップ・ストロー",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "シロップ",
        "ストロー",
        "いらっしゃいませ"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u4_l11_1",
          "type": "listen",
          "prompt": "シロップ",
          "furigana": "シロップ",
          "romaji": "shiroppu",
          "english": "Syrup",
          "audioText": "シロップ",
          "options": [
            "Please give me...",
            "Syrup",
            "Menu",
            "Toast"
          ],
          "correctAnswer": "Syrup"
        },
        {
          "id": "u4_l11_2",
          "type": "spell",
          "prompt": "シロップ",
          "furigana": "シロップ",
          "romaji": "shiroppu",
          "english": "Build 'Syrup'",
          "audioText": "シロップ",
          "tileBank": [
            "や",
            "ふ",
            "ロ",
            "プ",
            "シ",
            "の",
            "ッ",
            "を"
          ],
          "correctAnswer": "シロップ"
        },
        {
          "id": "u4_l11_3",
          "type": "cloze",
          "prompt": "私はストローがすきです",
          "furigana": "わたしはストローがすきです",
          "romaji": "Watashi wa sutoroo ga suki desu.",
          "english": "Fill in the blank with the correct particle for Drinking straw.",
          "audioText": "ストロー",
          "clozeSentence": "これはストロー {{BLANK}} す。",
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
          "id": "u4_l11_4",
          "type": "scramble",
          "prompt": "これはストローです",
          "furigana": "これはストローです",
          "romaji": "Kore wa sutoroo desu.",
          "english": "This is Drinking straw.",
          "audioText": "これはストローです",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "ストロー",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "ストロー",
            "です"
          ],
          "correctAnswer": "これはストローです"
        },
        {
          "id": "u4_l11_5",
          "type": "speak",
          "prompt": "いらっしゃいませ",
          "furigana": "いらっしゃいませ",
          "romaji": "irasshaimase",
          "english": "Pronounce: Welcome (store greeting)",
          "audioText": "いらっしゃいませ",
          "targetSpeech": "いらっしゃいませ",
          "options": [
            "Welcome (store greeting)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "いらっしゃいませ"
        },
        {
          "id": "u4_l11_6",
          "type": "dictate",
          "prompt": "いらっしゃいませをお願いします",
          "furigana": "いらっしゃいませをおねがいします",
          "romaji": "irasshaimase o onegaishimasu.",
          "english": "Welcome (store greeting), please.",
          "audioText": "いらっしゃいませをお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "いらっしゃいませ",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "いらっしゃいませ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "いらっしゃいませをお願いします"
        },
        {
          "id": "u4_l11_7",
          "type": "match",
          "prompt": "シロップ・ストロー・いらっしゃいませ・ご注文",
          "furigana": "シロップ・ストロー・いらっしゃいませ・ごちゅうもん",
          "romaji": "shiroppu, sutoroo, irasshaimase, gochuumon",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "シロップ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "シロップ",
              "right": "Syrup",
              "furigana": "シロップ",
              "romaji": "shiroppu"
            },
            {
              "id": "p_1",
              "left": "ストロー",
              "right": "Drinking straw",
              "furigana": "ストロー",
              "romaji": "sutoroo"
            },
            {
              "id": "p_2",
              "left": "いらっしゃいませ",
              "right": "Welcome (store greeting)",
              "furigana": "いらっしゃいませ",
              "romaji": "irasshaimase"
            },
            {
              "id": "p_3",
              "left": "ご注文",
              "right": "Your order",
              "furigana": "ごちゅうもん",
              "romaji": "gochuumon"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l11_8",
          "type": "dialogue",
          "prompt": "ナッツが入っていますか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "ナッツが入っていますか？",
          "furigana": "ナッツが入っていますか？",
          "romaji": "Nattsu ga haitte imasu ka?",
          "english": "Customer: Excuse me, does this cake contain nuts?",
          "audioText": "ナッツが入っていますか？",
          "dialogueOptions": [
            "いいえ、ナッツは入っておりません。",
            "右に曲がります",
            "お水をお願いします",
            "初めまして"
          ],
          "options": [
            "いいえ、ナッツは入っておりません。",
            "右に曲がります",
            "お水をお願いします",
            "初めまして"
          ],
          "correctAnswer": "いいえ、ナッツは入っておりません。"
        }
      ]
    },
    {
      "id": "u4_l12",
      "unitId": "unit_4",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Your order & The bill / payment",
      "titleJp": "ご注文・お会計",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "ご注文",
        "お会計",
        "レシート"
      ],
      "kanjiKeywords": [
        "注",
        "文",
        "会",
        "計"
      ],
      "items": [
        {
          "id": "u4_l12_1",
          "type": "listen",
          "prompt": "ご注文",
          "furigana": "ごちゅうもん",
          "romaji": "gochuumon",
          "english": "Your order",
          "audioText": "ごちゅうもん",
          "options": [
            "Recommendation",
            "Your order",
            "Matcha green tea latte",
            "Cheesecake"
          ],
          "correctAnswer": "Your order"
        },
        {
          "id": "u4_l12_2",
          "type": "spell",
          "prompt": "ご注文",
          "furigana": "ごちゅうもん",
          "romaji": "gochuumon",
          "english": "Build 'Your order'",
          "audioText": "ごちゅうもん",
          "tileBank": [
            "ゅ",
            "ん",
            "ご",
            "そ",
            "る",
            "ち",
            "も",
            "う"
          ],
          "correctAnswer": "ごちゅうもん"
        },
        {
          "id": "u4_l12_3",
          "type": "cloze",
          "prompt": "私はお会計がすきです",
          "furigana": "わたしはおかいけいがすきです",
          "romaji": "Watashi wa okaikei ga suki desu.",
          "english": "Fill in the blank with the correct particle for The bill / payment.",
          "audioText": "お会計",
          "clozeSentence": "これはお会計 {{BLANK}} す。",
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
          "id": "u4_l12_4",
          "type": "scramble",
          "prompt": "これはお会計です",
          "furigana": "これはおかいけいです",
          "romaji": "Kore wa okaikei desu.",
          "english": "This is The bill / payment.",
          "audioText": "これはお会計です",
          "scrambleTokens": [
            "これは",
            "それ",
            "ではありません",
            "です",
            "お会計"
          ],
          "scrambleSolution": [
            "これは",
            "お会計",
            "です"
          ],
          "correctAnswer": "これはお会計です"
        },
        {
          "id": "u4_l12_5",
          "type": "speak",
          "prompt": "レシート",
          "furigana": "レシート",
          "romaji": "reshiito",
          "english": "Pronounce: Receipt",
          "audioText": "レシート",
          "targetSpeech": "レシート",
          "options": [
            "Receipt",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "レシート"
        },
        {
          "id": "u4_l12_6",
          "type": "dictate",
          "prompt": "レシートをお願いします",
          "furigana": "レシートをおねがいします",
          "romaji": "reshiito o onegaishimasu.",
          "english": "Receipt, please.",
          "audioText": "レシートをお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "ありがとう",
            "を",
            "レシート"
          ],
          "dictateSolution": [
            "レシート",
            "を",
            "お願いします"
          ],
          "correctAnswer": "レシートをお願いします"
        },
        {
          "id": "u4_l12_7",
          "type": "match",
          "prompt": "ご注文・お会計・レシート・席",
          "furigana": "ごちゅうもん・おかいけい・レシート・せき",
          "romaji": "gochuumon, okaikei, reshiito, seki",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ごちゅうもん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "ご注文",
              "right": "Your order",
              "furigana": "ごちゅうもん",
              "romaji": "gochuumon"
            },
            {
              "id": "p_1",
              "left": "お会計",
              "right": "The bill / payment",
              "furigana": "おかいけい",
              "romaji": "okaikei"
            },
            {
              "id": "p_2",
              "left": "レシート",
              "right": "Receipt",
              "furigana": "レシート",
              "romaji": "reshiito"
            },
            {
              "id": "p_3",
              "left": "席",
              "right": "Seat / table",
              "furigana": "せき",
              "romaji": "seki"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l12_8",
          "type": "dialogue",
          "prompt": "カードは使えますか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "カードは使えますか？",
          "furigana": "カードは使えますか？",
          "romaji": "Kaado wa tsukaemasu ka?",
          "english": "Customer: Check please. Do you accept credit cards?",
          "audioText": "カードは使えますか？",
          "dialogueOptions": [
            "はい、各種クレジットカードご利用いただけます！",
            "いいえ、違います",
            "お腹が痛いです",
            "また来ます"
          ],
          "options": [
            "はい、各種クレジットカードご利用いただけます！",
            "いいえ、違います",
            "お腹が痛いです",
            "また来ます"
          ],
          "correctAnswer": "はい、各種クレジットカードご利用いただけます！"
        }
      ]
    },
    {
      "id": "u4_l13",
      "unitId": "unit_4",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Seat / table & Non-smoking seat",
      "titleJp": "席・禁煙席",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "席",
        "禁煙席",
        "カード"
      ],
      "kanjiKeywords": [
        "席",
        "禁",
        "煙",
        "席"
      ],
      "items": [
        {
          "id": "u4_l13_1",
          "type": "listen",
          "prompt": "席",
          "furigana": "せき",
          "romaji": "seki",
          "english": "Seat / table",
          "audioText": "せき",
          "options": [
            "Dine-in / in-store",
            "Seat / table",
            "The bill / payment",
            "Milk / creamer"
          ],
          "correctAnswer": "Seat / table"
        },
        {
          "id": "u4_l13_2",
          "type": "spell",
          "prompt": "席",
          "furigana": "せき",
          "romaji": "seki",
          "english": "Build 'Seat / table'",
          "audioText": "せき",
          "tileBank": [
            "あ",
            "せ",
            "て",
            "ゆ",
            "ひ",
            "は",
            "き",
            "く"
          ],
          "correctAnswer": "せき"
        },
        {
          "id": "u4_l13_3",
          "type": "cloze",
          "prompt": "私は禁煙席がすきです",
          "furigana": "わたしはきんえんせきがすきです",
          "romaji": "Watashi wa kin-enseki ga suki desu.",
          "english": "Fill in the blank with the correct particle for Non-smoking seat.",
          "audioText": "禁煙席",
          "clozeSentence": "私は禁煙席 {{BLANK}} 好きです。",
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
          "id": "u4_l13_4",
          "type": "scramble",
          "prompt": "これは禁煙席です",
          "furigana": "これはきんえんせきです",
          "romaji": "Kore wa kin-enseki desu.",
          "english": "This is Non-smoking seat.",
          "audioText": "これは禁煙席です",
          "scrambleTokens": [
            "です",
            "これは",
            "禁煙席",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "禁煙席",
            "です"
          ],
          "correctAnswer": "これは禁煙席です"
        },
        {
          "id": "u4_l13_5",
          "type": "speak",
          "prompt": "カード",
          "furigana": "カード",
          "romaji": "kaado",
          "english": "Pronounce: Credit / IC card",
          "audioText": "カード",
          "targetSpeech": "カード",
          "options": [
            "Credit / IC card",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "カード"
        },
        {
          "id": "u4_l13_6",
          "type": "dictate",
          "prompt": "カードをお願いします",
          "furigana": "カードをおねがいします",
          "romaji": "kaado o onegaishimasu.",
          "english": "Credit / IC card, please.",
          "audioText": "カードをお願いします",
          "dictateTokens": [
            "カード",
            "を",
            "です",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "カード",
            "を",
            "お願いします"
          ],
          "correctAnswer": "カードをお願いします"
        },
        {
          "id": "u4_l13_7",
          "type": "match",
          "prompt": "席・禁煙席・カード・少々お待ちください",
          "furigana": "せき・きんえんせき・カード・しょうしょうおまちください",
          "romaji": "seki, kin-enseki, kaado, shoushou omachi kudasai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "席",
              "right": "Seat / table",
              "furigana": "せき",
              "romaji": "seki"
            },
            {
              "id": "p_1",
              "left": "禁煙席",
              "right": "Non-smoking seat",
              "furigana": "きんえんせき",
              "romaji": "kin-enseki"
            },
            {
              "id": "p_2",
              "left": "カード",
              "right": "Credit / IC card",
              "furigana": "カード",
              "romaji": "kaado"
            },
            {
              "id": "p_3",
              "left": "少々お待ちください",
              "right": "Please wait a moment",
              "furigana": "しょうしょうおまちください",
              "romaji": "shoushou omachi kudasai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l13_8",
          "type": "dialogue",
          "prompt": "ご注文はお決まりですか？",
          "dialogueSpeaker": "店員",
          "dialoguePrompt": "ご注文はお決まりですか？",
          "furigana": "ご注文はお決まりですか？",
          "romaji": "Gochuumon wa okimari desu ka?",
          "english": "Clerk: Welcome! Are you ready to order?",
          "audioText": "ご注文はお決まりですか？",
          "dialogueOptions": [
            "ホットコーヒーのMサイズを一つお願いします。",
            "さようなら",
            "私は学生です",
            "駅はあそこです"
          ],
          "options": [
            "ホットコーヒーのMサイズを一つお願いします。",
            "さようなら",
            "私は学生です",
            "駅はあそこです"
          ],
          "correctAnswer": "ホットコーヒーのMサイズを一つお願いします。"
        }
      ]
    },
    {
      "id": "u4_l14",
      "unitId": "unit_4",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Please wait a moment & Coffee",
      "titleJp": "少々お待ちください・コーヒー",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "少々お待ちください",
        "コーヒー",
        "ホットコーヒー"
      ],
      "kanjiKeywords": [
        "少",
        "待"
      ],
      "items": [
        {
          "id": "u4_l14_1",
          "type": "listen",
          "prompt": "少々お待ちください",
          "furigana": "しょうしょうおまちください",
          "romaji": "shoushou omachi kudasai",
          "english": "Please wait a moment",
          "audioText": "しょうしょうおまちください",
          "options": [
            "Drinking straw",
            "Seat / table",
            "Cup size",
            "Please wait a moment"
          ],
          "correctAnswer": "Please wait a moment"
        },
        {
          "id": "u4_l14_2",
          "type": "spell",
          "prompt": "コーヒー",
          "furigana": "コーヒー",
          "romaji": "koohii",
          "english": "Build 'Coffee'",
          "audioText": "コーヒー",
          "tileBank": [
            "ー",
            "や",
            "に",
            "ヒ",
            "ー",
            "の",
            "ゆ",
            "コ"
          ],
          "correctAnswer": "コーヒー"
        },
        {
          "id": "u4_l14_3",
          "type": "cloze",
          "prompt": "私はコーヒーがすきです",
          "furigana": "わたしはコーヒーがすきです",
          "romaji": "Watashi wa koohii ga suki desu.",
          "english": "Fill in the blank with the correct particle for Coffee.",
          "audioText": "コーヒー",
          "clozeSentence": "これはコーヒー {{BLANK}} す。",
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
          "id": "u4_l14_4",
          "type": "scramble",
          "prompt": "これはコーヒーです",
          "furigana": "これはコーヒーです",
          "romaji": "Kore wa koohii desu.",
          "english": "This is Coffee.",
          "audioText": "これはコーヒーです",
          "scrambleTokens": [
            "です",
            "それ",
            "これは",
            "コーヒー",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "コーヒー",
            "です"
          ],
          "correctAnswer": "これはコーヒーです"
        },
        {
          "id": "u4_l14_5",
          "type": "speak",
          "prompt": "ホットコーヒー",
          "furigana": "ホットコーヒー",
          "romaji": "hotto koohii",
          "english": "Pronounce: Hot coffee",
          "audioText": "ホットコーヒー",
          "targetSpeech": "ホットコーヒー",
          "options": [
            "Hot coffee",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "ホットコーヒー"
        },
        {
          "id": "u4_l14_6",
          "type": "dictate",
          "prompt": "ホットコーヒーをお願いします",
          "furigana": "ホットコーヒーをおねがいします",
          "romaji": "hotto koohii o onegaishimasu.",
          "english": "Hot coffee, please.",
          "audioText": "ホットコーヒーをお願いします",
          "dictateTokens": [
            "を",
            "です",
            "ホットコーヒー",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "ホットコーヒー",
            "を",
            "お願いします"
          ],
          "correctAnswer": "ホットコーヒーをお願いします"
        },
        {
          "id": "u4_l14_7",
          "type": "match",
          "prompt": "少々お待ちください・コーヒー・ホットコーヒー・アイスティー",
          "furigana": "しょうしょうおまちください・コーヒー・ホットコーヒー・アイスティー",
          "romaji": "shoushou omachi kudasai, koohii, hotto koohii, aisu tii",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しょうしょうおまちください",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "少々お待ちください",
              "right": "Please wait a moment",
              "furigana": "しょうしょうおまちください",
              "romaji": "shoushou omachi kudasai"
            },
            {
              "id": "p_1",
              "left": "コーヒー",
              "right": "Coffee",
              "furigana": "コーヒー",
              "romaji": "koohii"
            },
            {
              "id": "p_2",
              "left": "ホットコーヒー",
              "right": "Hot coffee",
              "furigana": "ホットコーヒー",
              "romaji": "hotto koohii"
            },
            {
              "id": "p_3",
              "left": "アイスティー",
              "right": "Iced tea",
              "furigana": "アイスティー",
              "romaji": "aisu tii"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l14_8",
          "type": "dialogue",
          "prompt": "店内でお召し上がりですか？",
          "dialogueSpeaker": "店員",
          "dialoguePrompt": "店内でお召し上がりですか？",
          "furigana": "店内でお召し上がりですか？",
          "romaji": "Tennai de omeshiagari desu ka?",
          "english": "Clerk: Will you be having that in-store?",
          "audioText": "店内でお召し上がりですか？",
          "dialogueOptions": [
            "テイクアウトでお願いします。",
            "はい、元気です",
            "美味しかったです",
            "ごめんなさい"
          ],
          "options": [
            "テイクアウトでお願いします。",
            "はい、元気です",
            "美味しかったです",
            "ごめんなさい"
          ],
          "correctAnswer": "テイクアウトでお願いします。"
        }
      ]
    },
    {
      "id": "u4_l15",
      "unitId": "unit_4",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 4 Master Exam",
      "iconType": "test",
      "title": "Unit 4 Master Exam",
      "titleJp": "第4週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "アイスティー",
        "紅茶",
        "カフェラテ"
      ],
      "kanjiKeywords": [
        "紅",
        "茶"
      ],
      "items": [
        {
          "id": "u4_l15_1",
          "type": "listen",
          "prompt": "アイスティー",
          "furigana": "アイスティー",
          "romaji": "aisu tii",
          "english": "Iced tea",
          "audioText": "アイスティー",
          "options": [
            "Black tea",
            "Without ice",
            "Four items (counter)",
            "Iced tea"
          ],
          "correctAnswer": "Iced tea"
        },
        {
          "id": "u4_l15_2",
          "type": "spell",
          "prompt": "アイスティー",
          "furigana": "アイスティー",
          "romaji": "aisu tii",
          "english": "Build 'Iced tea'",
          "audioText": "アイスティー",
          "tileBank": [
            "ろ",
            "ア",
            "ス",
            "に",
            "ー",
            "テ",
            "ィ",
            "イ"
          ],
          "correctAnswer": "アイスティー"
        },
        {
          "id": "u4_l15_3",
          "type": "cloze",
          "prompt": "私は紅茶がすきです",
          "furigana": "わたしはこうちゃがすきです",
          "romaji": "Watashi wa koucha ga suki desu.",
          "english": "Fill in the blank with the correct particle for Black tea.",
          "audioText": "紅茶",
          "clozeSentence": "これは紅茶 {{BLANK}} す。",
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
          "id": "u4_l15_4",
          "type": "scramble",
          "prompt": "これは紅茶です",
          "furigana": "これはこうちゃです",
          "romaji": "Kore wa koucha desu.",
          "english": "This is Black tea.",
          "audioText": "これは紅茶です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "紅茶",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "紅茶",
            "です"
          ],
          "correctAnswer": "これは紅茶です"
        },
        {
          "id": "u4_l15_5",
          "type": "speak",
          "prompt": "カフェラテ",
          "furigana": "カフェラテ",
          "romaji": "kafe rate",
          "english": "Pronounce: Café latte",
          "audioText": "カフェラテ",
          "targetSpeech": "カフェラテ",
          "options": [
            "Café latte",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "カフェラテ"
        },
        {
          "id": "u4_l15_6",
          "type": "dictate",
          "prompt": "カフェラテをお願いします",
          "furigana": "カフェラテをおねがいします",
          "romaji": "kafe rate o onegaishimasu.",
          "english": "Café latte, please.",
          "audioText": "カフェラテをお願いします",
          "dictateTokens": [
            "を",
            "カフェラテ",
            "お願いします",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "カフェラテ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "カフェラテをお願いします"
        },
        {
          "id": "u4_l15_7",
          "type": "match",
          "prompt": "アイスティー・紅茶・カフェラテ・抹茶ラテ",
          "furigana": "アイスティー・こうちゃ・カフェラテ・まっちゃラテ",
          "romaji": "aisu tii, koucha, kafe rate, matcha rate",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "アイスティー",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "アイスティー",
              "right": "Iced tea",
              "furigana": "アイスティー",
              "romaji": "aisu tii"
            },
            {
              "id": "p_1",
              "left": "紅茶",
              "right": "Black tea",
              "furigana": "こうちゃ",
              "romaji": "koucha"
            },
            {
              "id": "p_2",
              "left": "カフェラテ",
              "right": "Café latte",
              "furigana": "カフェラテ",
              "romaji": "kafe rate"
            },
            {
              "id": "p_3",
              "left": "抹茶ラテ",
              "right": "Matcha green tea latte",
              "furigana": "まっちゃラテ",
              "romaji": "matcha rate"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u4_l15_8",
          "type": "dialogue",
          "prompt": "ナッツが入っていますか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "ナッツが入っていますか？",
          "furigana": "ナッツが入っていますか？",
          "romaji": "Nattsu ga haitte imasu ka?",
          "english": "Customer: Excuse me, does this cake contain nuts?",
          "audioText": "ナッツが入っていますか？",
          "dialogueOptions": [
            "いいえ、ナッツは入っておりません。",
            "右に曲がります",
            "お水をお願いします",
            "初めまして"
          ],
          "options": [
            "いいえ、ナッツは入っておりません。",
            "右に曲がります",
            "お水をお願いします",
            "初めまして"
          ],
          "correctAnswer": "いいえ、ナッツは入っておりません。"
        }
      ]
    }
  ],
  "revisionGate": {
    "id": "gate_unit_4",
    "unitId": "unit_4",
    "title": "Unit 4 Mastery Checkpoint",
    "titleJp": "第4週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u4_l1_1",
        "type": "listen",
        "prompt": "コーヒー",
        "furigana": "コーヒー",
        "romaji": "koohii",
        "english": "Coffee",
        "audioText": "コーヒー",
        "options": [
          "Small size",
          "Large size",
          "Seat / table",
          "Coffee"
        ],
        "correctAnswer": "Coffee"
      },
      {
        "id": "u4_l1_2",
        "type": "spell",
        "prompt": "コーヒー",
        "furigana": "コーヒー",
        "romaji": "koohii",
        "english": "Build 'Coffee'",
        "audioText": "コーヒー",
        "tileBank": [
          "わ",
          "コ",
          "ヒ",
          "ー",
          "め",
          "け",
          "ぬ",
          "ー"
        ],
        "correctAnswer": "コーヒー"
      },
      {
        "id": "u4_l3_1",
        "type": "listen",
        "prompt": "ください",
        "furigana": "ください",
        "romaji": "kudasai",
        "english": "Please give me...",
        "audioText": "ください",
        "options": [
          "Please / I request...",
          "Medium size",
          "Please give me...",
          "Iced tea"
        ],
        "correctAnswer": "Please give me..."
      },
      {
        "id": "u4_l3_2",
        "type": "spell",
        "prompt": "ください",
        "furigana": "ください",
        "romaji": "kudasai",
        "english": "Build 'Please give me...'",
        "audioText": "ください",
        "tileBank": [
          "ひ",
          "さ",
          "せ",
          "い",
          "だ",
          "り",
          "く",
          "む"
        ],
        "correctAnswer": "ください"
      },
      {
        "id": "u4_l5_1",
        "type": "listen",
        "prompt": "サイズ",
        "furigana": "サイズ",
        "romaji": "saizu",
        "english": "Cup size",
        "audioText": "サイズ",
        "options": [
          "Cup size",
          "One item (counter)",
          "Non-smoking seat",
          "Recommendation"
        ],
        "correctAnswer": "Cup size"
      },
      {
        "id": "u4_l5_2",
        "type": "spell",
        "prompt": "サイズ",
        "furigana": "サイズ",
        "romaji": "saizu",
        "english": "Build 'Cup size'",
        "audioText": "サイズ",
        "tileBank": [
          "す",
          "り",
          "サ",
          "ズ",
          "イ",
          "て",
          "も",
          "た"
        ],
        "correctAnswer": "サイズ"
      },
      {
        "id": "u4_l7_1",
        "type": "listen",
        "prompt": "サンドイッチ",
        "furigana": "サンドイッチ",
        "romaji": "sandoitchi",
        "english": "Sandwich",
        "audioText": "サンドイッチ",
        "options": [
          "Receipt",
          "The bill / payment",
          "Seat / table",
          "Sandwich"
        ],
        "correctAnswer": "Sandwich"
      },
      {
        "id": "u4_l7_2",
        "type": "spell",
        "prompt": "サンドイッチ",
        "furigana": "サンドイッチ",
        "romaji": "sandoitchi",
        "english": "Build 'Sandwich'",
        "audioText": "サンドイッチ",
        "tileBank": [
          "ね",
          "イ",
          "ン",
          "ッ",
          "サ",
          "チ",
          "ド",
          "た"
        ],
        "correctAnswer": "サンドイッチ"
      },
      {
        "id": "u4_l9_1",
        "type": "listen",
        "prompt": "店内",
        "furigana": "てんない",
        "romaji": "tennai",
        "english": "Dine-in / in-store",
        "audioText": "てんない",
        "options": [
          "Medium size",
          "Dine-in / in-store",
          "Two items (counter)",
          "Croissant"
        ],
        "correctAnswer": "Dine-in / in-store"
      },
      {
        "id": "u4_l9_2",
        "type": "spell",
        "prompt": "店内",
        "furigana": "てんない",
        "romaji": "tennai",
        "english": "Build 'Dine-in / in-store'",
        "audioText": "てんない",
        "tileBank": [
          "て",
          "あ",
          "そ",
          "さ",
          "な",
          "ん",
          "い",
          "ね"
        ],
        "correctAnswer": "てんない"
      },
      {
        "id": "u4_l11_1",
        "type": "listen",
        "prompt": "シロップ",
        "furigana": "シロップ",
        "romaji": "shiroppu",
        "english": "Syrup",
        "audioText": "シロップ",
        "options": [
          "Please give me...",
          "Syrup",
          "Menu",
          "Toast"
        ],
        "correctAnswer": "Syrup"
      },
      {
        "id": "u4_l11_2",
        "type": "spell",
        "prompt": "シロップ",
        "furigana": "シロップ",
        "romaji": "shiroppu",
        "english": "Build 'Syrup'",
        "audioText": "シロップ",
        "tileBank": [
          "や",
          "ふ",
          "ロ",
          "プ",
          "シ",
          "の",
          "ッ",
          "を"
        ],
        "correctAnswer": "シロップ"
      }
    ]
  }
};
