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
            "Coffee",
            "Cake",
            "Please / I request...",
            "Cheesecake"
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
            "ヒ",
            "け",
            "コ",
            "し",
            "わ",
            "ー",
            "り",
            "ー"
          ],
          "correctAnswer": "コーヒー"
        },
        {
          "id": "u4_l1_3",
          "type": "cloze",
          "prompt": "毎朝、冷たいホットコーヒーを飲みます。",
          "furigana": "まいあさ、つめたいホットコーヒーをのみます。",
          "romaji": "Maiasa, tsumetai hotto koohii o nomimasu.",
          "english": "Fill in object particle 'を' (o): I drink cold Hot coffee every morning.",
          "audioText": "ホットコーヒーを飲みます。",
          "clozeSentence": "毎朝、冷たいホットコーヒー {{BLANK}} 飲みます。",
          "clozeTarget": "を",
          "clozeOptions": [
            "を",
            "は",
            "に",
            "で"
          ],
          "correctAnswer": "を",
          "explanation": "助詞「を」 (o) marks the direct object of action verb 「飲みます」 (drink)."
        },
        {
          "id": "u4_l1_4",
          "type": "scramble",
          "prompt": "冷たいホットコーヒーを飲みます",
          "furigana": "つめたいホットコーヒーをのみます",
          "romaji": "Tsumetai hotto koohii o nomimasu.",
          "english": "Drink cold Hot coffee.",
          "audioText": "冷たいホットコーヒーを飲みます",
          "scrambleTokens": [
            "ホットコーヒーを",
            "飲みます",
            "が",
            "冷たい",
            "食べます"
          ],
          "scrambleSolution": [
            "冷たい",
            "ホットコーヒーを",
            "飲みます"
          ],
          "correctAnswer": "冷たいホットコーヒーを飲みます"
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
            "です",
            "お願いします",
            "アイスティー",
            "ありがとう",
            "を"
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
            "Welcome (store greeting)",
            "Café latte",
            "Black tea",
            "Coffee"
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
            "け",
            "ね",
            "い",
            "こ",
            "ち",
            "う",
            "ゆ",
            "ゃ"
          ],
          "correctAnswer": "こうちゃ"
        },
        {
          "id": "u4_l2_3",
          "type": "cloze",
          "prompt": "毎朝、冷たいカフェラテを飲みます。",
          "furigana": "まいあさ、つめたいカフェラテをのみます。",
          "romaji": "Maiasa, tsumetai kafe rate o nomimasu.",
          "english": "Fill in object particle 'を' (o): I drink cold Café latte every morning.",
          "audioText": "カフェラテを飲みます。",
          "clozeSentence": "毎朝、冷たいカフェラテ {{BLANK}} 飲みます。",
          "clozeTarget": "を",
          "clozeOptions": [
            "を",
            "は",
            "に",
            "で"
          ],
          "correctAnswer": "を",
          "explanation": "助詞「を」 (o) marks the direct object of action verb 「飲みます」 (drink)."
        },
        {
          "id": "u4_l2_4",
          "type": "scramble",
          "prompt": "冷たいカフェラテを飲みます",
          "furigana": "つめたいカフェラテをのみます",
          "romaji": "Tsumetai kafe rate o nomimasu.",
          "english": "Drink cold Café latte.",
          "audioText": "冷たいカフェラテを飲みます",
          "scrambleTokens": [
            "飲みます",
            "食べます",
            "が",
            "カフェラテを",
            "冷たい"
          ],
          "scrambleSolution": [
            "冷たい",
            "カフェラテを",
            "飲みます"
          ],
          "correctAnswer": "冷たいカフェラテを飲みます"
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
            "ありがとう",
            "抹茶ラテ",
            "を",
            "お願いします",
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
            "Without ice",
            "Coffee",
            "Two items (counter)",
            "Please give me..."
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
            "い",
            "え",
            "く",
            "み",
            "さ",
            "や",
            "こ",
            "だ"
          ],
          "correctAnswer": "ください"
        },
        {
          "id": "u4_l3_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なお願いしますです。",
          "furigana": "これはいちばんたいせつなおねがいしますです。",
          "romaji": "Kore wa ichiban taisetsu na onegaishimasu desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Please / I request....",
          "audioText": "これはお願いしますです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なお願いしますです。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
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
            "これは",
            "です",
            "それ",
            "お願いします",
            "ではありません"
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
          "prompt": "一つです",
          "furigana": "ひとつです",
          "romaji": "hitotsu desu.",
          "english": "It is One item (counter).",
          "audioText": "一つです",
          "dictateTokens": [
            "ではありません",
            "これ",
            "です",
            "一つ"
          ],
          "dictateSolution": [
            "一つ",
            "です"
          ],
          "correctAnswer": "一つです"
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
            "The bill / payment",
            "Non-smoking seat",
            "Hot coffee"
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
            "つ",
            "に",
            "か",
            "ぬ",
            "と",
            "ふ",
            "よ",
            "た"
          ],
          "correctAnswer": "ふたつ"
        },
        {
          "id": "u4_l4_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な三つです。",
          "furigana": "これはいちばんたいせつなみっつです。",
          "romaji": "Kore wa ichiban taisetsu na mittsu desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Three items (counter).",
          "audioText": "これは三つです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な三つです。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
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
            "三つ",
            "です",
            "それ",
            "これは",
            "ではありません"
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
          "prompt": "四つです",
          "furigana": "よっつです",
          "romaji": "yottsu desu.",
          "english": "It is Four items (counter).",
          "audioText": "四つです",
          "dictateTokens": [
            "です",
            "ではありません",
            "四つ",
            "これ"
          ],
          "dictateSolution": [
            "四つ",
            "です"
          ],
          "correctAnswer": "四つです"
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
            "Please / I request...",
            "Cup size",
            "Menu",
            "Milk / creamer"
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
            "み",
            "サ",
            "も",
            "の",
            "イ",
            "ズ",
            "ゆ",
            "し"
          ],
          "correctAnswer": "サイズ"
        },
        {
          "id": "u4_l5_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なSサイズです。",
          "furigana": "これはいちばんたいせつなエスサイズです。",
          "romaji": "Kore wa ichiban taisetsu na esu saizu desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Small size.",
          "audioText": "これはSサイズです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なSサイズです。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
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
            "Sサイズ",
            "です",
            "それ",
            "ではありません",
            "これは"
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
            "ありがとう",
            "を",
            "Mサイズ",
            "お願いします",
            "です"
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
            "Seasonal limited edition",
            "Coffee",
            "Large size",
            "Sugar"
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
            "サ",
            "イ",
            "ズ",
            "エ",
            "ら",
            "と",
            "き",
            "ル"
          ],
          "correctAnswer": "エルサイズ"
        },
        {
          "id": "u4_l6_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なケーキです。",
          "furigana": "これはいちばんたいせつなケーキです。",
          "romaji": "Kore wa ichiban taisetsu na keeki desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Cake.",
          "audioText": "これはケーキです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なケーキです。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
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
            "それ",
            "です",
            "ではありません",
            "ケーキ",
            "これは"
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
            "です",
            "ありがとう",
            "を",
            "お願いします",
            "チーズケーキ"
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
            "Croissant",
            "Dine-in / in-store",
            "Drinking straw",
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
            "ふ",
            "チ",
            "イ",
            "ン",
            "サ",
            "ド",
            "ッ",
            "さ"
          ],
          "correctAnswer": "サンドイッチ"
        },
        {
          "id": "u4_l7_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なトーストです。",
          "furigana": "これはいちばんたいせつなトーストです。",
          "romaji": "Kore wa ichiban taisetsu na toosuto desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Toast.",
          "audioText": "これはトーストです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なトーストです。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
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
            "です",
            "ではありません",
            "それ",
            "これは",
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
          "prompt": "クロワッサンです",
          "furigana": "クロワッサンです",
          "romaji": "kurowassan desu.",
          "english": "It is Croissant.",
          "audioText": "クロワッサンです",
          "dictateTokens": [
            "です",
            "クロワッサン",
            "ではありません",
            "これ"
          ],
          "dictateSolution": [
            "クロワッサン",
            "です"
          ],
          "correctAnswer": "クロワッサンです"
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
            "Menu",
            "Medium size",
            "Coffee",
            "Without ice"
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
            "ー",
            "ュ",
            "ニ",
            "メ",
            "し",
            "ま",
            "れ",
            "い"
          ],
          "correctAnswer": "メニュー"
        },
        {
          "id": "u4_l8_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なおすすめです。",
          "furigana": "これはいちばんたいせつなおすすめです。",
          "romaji": "Kore wa ichiban taisetsu na osusume desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Recommendation.",
          "audioText": "これはおすすめです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なおすすめです。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
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
            "これは",
            "それ",
            "ではありません",
            "です",
            "おすすめ"
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
            "です",
            "お願いします",
            "季節限定",
            "を",
            "ありがとう"
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
            "Toast",
            "Hot coffee",
            "Medium size",
            "Dine-in / in-store"
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
            "し",
            "て",
            "く",
            "さ",
            "や",
            "ん",
            "な",
            "い"
          ],
          "correctAnswer": "てんない"
        },
        {
          "id": "u4_l9_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なテイクアウトです。",
          "furigana": "これはいちばんたいせつなテイクアウトです。",
          "romaji": "Kore wa ichiban taisetsu na teikuauto desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Takeout / to-go.",
          "audioText": "これはテイクアウトです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なテイクアウトです。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
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
            "これは",
            "テイクアウト",
            "です",
            "それ",
            "ではありません"
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
            "お願いします",
            "持ち帰り",
            "を",
            "ありがとう",
            "です"
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
            "Without ice",
            "Your order",
            "Seat / table",
            "Syrup"
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
            "ら",
            "り",
            "な",
            "す",
            "こ",
            "お",
            "し",
            "は"
          ],
          "correctAnswer": "こおりなし"
        },
        {
          "id": "u4_l10_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な砂糖です。",
          "furigana": "これはいちばんたいせつなさとうです。",
          "romaji": "Kore wa ichiban taisetsu na satou desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Sugar.",
          "audioText": "これは砂糖です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な砂糖です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
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
            "これは",
            "です",
            "ではありません",
            "砂糖",
            "それ"
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
          "prompt": "ミルクです",
          "furigana": "ミルクです",
          "romaji": "miruku desu.",
          "english": "It is Milk / creamer.",
          "audioText": "ミルクです",
          "dictateTokens": [
            "です",
            "ミルク",
            "ではありません",
            "これ"
          ],
          "dictateSolution": [
            "ミルク",
            "です"
          ],
          "correctAnswer": "ミルクです"
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
            "Hot coffee",
            "Receipt",
            "Syrup",
            "Croissant"
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
            "り",
            "ひ",
            "や",
            "シ",
            "ほ",
            "ロ",
            "ッ",
            "プ"
          ],
          "correctAnswer": "シロップ"
        },
        {
          "id": "u4_l11_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なストローです。",
          "furigana": "これはいちばんたいせつなストローです。",
          "romaji": "Kore wa ichiban taisetsu na sutoroo desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Drinking straw.",
          "audioText": "これはストローです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なストローです。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
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
            "ストロー",
            "ではありません",
            "です",
            "これは",
            "それ"
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
          "prompt": "いらっしゃいませです",
          "furigana": "いらっしゃいませです",
          "romaji": "irasshaimase desu.",
          "english": "It is Welcome (store greeting).",
          "audioText": "いらっしゃいませです",
          "dictateTokens": [
            "これ",
            "ではありません",
            "です",
            "いらっしゃいませ"
          ],
          "dictateSolution": [
            "いらっしゃいませ",
            "です"
          ],
          "correctAnswer": "いらっしゃいませです"
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
            "Dine-in / in-store",
            "Four items (counter)",
            "Milk / creamer",
            "Your order"
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
            "き",
            "ち",
            "ゅ",
            "ほ",
            "ご",
            "う",
            "ん",
            "も"
          ],
          "correctAnswer": "ごちゅうもん"
        },
        {
          "id": "u4_l12_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なお会計です。",
          "furigana": "これはいちばんたいせつなおかいけいです。",
          "romaji": "Kore wa ichiban taisetsu na okaikei desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important The bill / payment.",
          "audioText": "これはお会計です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なお会計です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
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
            "です",
            "それ",
            "これは",
            "お会計",
            "ではありません"
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
          "prompt": "レシートです",
          "furigana": "レシートです",
          "romaji": "reshiito desu.",
          "english": "It is Receipt.",
          "audioText": "レシートです",
          "dictateTokens": [
            "これ",
            "レシート",
            "です",
            "ではありません"
          ],
          "dictateSolution": [
            "レシート",
            "です"
          ],
          "correctAnswer": "レシートです"
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
            "Without ice",
            "Drinking straw",
            "Coffee",
            "Seat / table"
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
            "ほ",
            "か",
            "せ",
            "し",
            "ぬ",
            "え",
            "み",
            "き"
          ],
          "correctAnswer": "せき"
        },
        {
          "id": "u4_l13_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な禁煙席です。",
          "furigana": "これはいちばんたいせつなきんえんせきです。",
          "romaji": "Kore wa ichiban taisetsu na kin-enseki desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Non-smoking seat.",
          "audioText": "これは禁煙席です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な禁煙席です。",
          "clozeTarget": "は",
          "clozeOptions": [
            "は",
            "が",
            "を",
            "に"
          ],
          "correctAnswer": "は",
          "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
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
            "禁煙席",
            "それ",
            "です",
            "これは",
            "ではありません"
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
          "prompt": "カードです",
          "furigana": "カードです",
          "romaji": "kaado desu.",
          "english": "It is Credit / IC card.",
          "audioText": "カードです",
          "dictateTokens": [
            "これ",
            "です",
            "カード",
            "ではありません"
          ],
          "dictateSolution": [
            "カード",
            "です"
          ],
          "correctAnswer": "カードです"
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
            "Credit / IC card",
            "Café latte",
            "Please wait a moment",
            "Non-smoking seat"
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
            "た",
            "ー",
            "む",
            "ヒ",
            "コ",
            "ー",
            "ゆ",
            "る"
          ],
          "correctAnswer": "コーヒー"
        },
        {
          "id": "u4_l14_3",
          "type": "cloze",
          "prompt": "毎朝、冷たいコーヒーを飲みます。",
          "furigana": "まいあさ、つめたいコーヒーをのみます。",
          "romaji": "Maiasa, tsumetai koohii o nomimasu.",
          "english": "Fill in object particle 'を' (o): I drink cold Coffee every morning.",
          "audioText": "コーヒーを飲みます。",
          "clozeSentence": "毎朝、冷たいコーヒー {{BLANK}} 飲みます。",
          "clozeTarget": "を",
          "clozeOptions": [
            "を",
            "は",
            "に",
            "で"
          ],
          "correctAnswer": "を",
          "explanation": "助詞「を」 (o) marks the direct object of action verb 「飲みます」 (drink)."
        },
        {
          "id": "u4_l14_4",
          "type": "scramble",
          "prompt": "冷たいコーヒーを飲みます",
          "furigana": "つめたいコーヒーをのみます",
          "romaji": "Tsumetai koohii o nomimasu.",
          "english": "Drink cold Coffee.",
          "audioText": "冷たいコーヒーを飲みます",
          "scrambleTokens": [
            "飲みます",
            "が",
            "食べます",
            "コーヒーを",
            "冷たい"
          ],
          "scrambleSolution": [
            "冷たい",
            "コーヒーを",
            "飲みます"
          ],
          "correctAnswer": "冷たいコーヒーを飲みます"
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
            "ホットコーヒー",
            "ありがとう",
            "お願いします",
            "です"
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
            "Two items (counter)",
            "Iced tea",
            "Dine-in / in-store",
            "Syrup"
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
            "ゆ",
            "ア",
            "ィ",
            "ス",
            "イ",
            "ー",
            "り",
            "テ"
          ],
          "correctAnswer": "アイスティー"
        },
        {
          "id": "u4_l15_3",
          "type": "cloze",
          "prompt": "毎朝、冷たい紅茶を飲みます。",
          "furigana": "まいあさ、つめたいこうちゃをのみます。",
          "romaji": "Maiasa, tsumetai koucha o nomimasu.",
          "english": "Fill in object particle 'を' (o): I drink cold Black tea every morning.",
          "audioText": "紅茶を飲みます。",
          "clozeSentence": "毎朝、冷たい紅茶 {{BLANK}} 飲みます。",
          "clozeTarget": "を",
          "clozeOptions": [
            "を",
            "は",
            "に",
            "で"
          ],
          "correctAnswer": "を",
          "explanation": "助詞「を」 (o) marks the direct object of action verb 「飲みます」 (drink)."
        },
        {
          "id": "u4_l15_4",
          "type": "scramble",
          "prompt": "冷たい紅茶を飲みます",
          "furigana": "つめたいこうちゃをのみます",
          "romaji": "Tsumetai koucha o nomimasu.",
          "english": "Drink cold Black tea.",
          "audioText": "冷たい紅茶を飲みます",
          "scrambleTokens": [
            "冷たい",
            "紅茶を",
            "が",
            "飲みます",
            "食べます"
          ],
          "scrambleSolution": [
            "冷たい",
            "紅茶を",
            "飲みます"
          ],
          "correctAnswer": "冷たい紅茶を飲みます"
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
            "お願いします",
            "ありがとう",
            "を",
            "です",
            "カフェラテ"
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
          "Coffee",
          "Cake",
          "Please / I request...",
          "Cheesecake"
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
          "ヒ",
          "け",
          "コ",
          "し",
          "わ",
          "ー",
          "り",
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
          "Without ice",
          "Coffee",
          "Two items (counter)",
          "Please give me..."
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
          "い",
          "え",
          "く",
          "み",
          "さ",
          "や",
          "こ",
          "だ"
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
          "Please / I request...",
          "Cup size",
          "Menu",
          "Milk / creamer"
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
          "み",
          "サ",
          "も",
          "の",
          "イ",
          "ズ",
          "ゆ",
          "し"
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
          "Croissant",
          "Dine-in / in-store",
          "Drinking straw",
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
          "ふ",
          "チ",
          "イ",
          "ン",
          "サ",
          "ド",
          "ッ",
          "さ"
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
          "Toast",
          "Hot coffee",
          "Medium size",
          "Dine-in / in-store"
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
          "し",
          "て",
          "く",
          "さ",
          "や",
          "ん",
          "な",
          "い"
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
          "Hot coffee",
          "Receipt",
          "Syrup",
          "Croissant"
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
          "り",
          "ひ",
          "や",
          "シ",
          "ほ",
          "ロ",
          "ッ",
          "プ"
        ],
        "correctAnswer": "シロップ"
      }
    ]
  }
};
