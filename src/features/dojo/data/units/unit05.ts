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
            "Right over there",
            "Train station",
            "In front / ahead",
            "Road / path / way"
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
            "い",
            "ふ",
            "き",
            "ち",
            "か",
            "え",
            "と",
            "せ"
          ],
          "correctAnswer": "えき"
        },
        {
          "id": "u5_l1_3",
          "type": "cloze",
          "prompt": "これはいちばん大切などこです。",
          "furigana": "これはいちばんたいせつなどこです。",
          "romaji": "Kore wa ichiban taisetsu na doko desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Where.",
          "audioText": "これはどこです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切などこです。",
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
          "id": "u5_l1_4",
          "type": "scramble",
          "prompt": "これはどこです",
          "furigana": "これはどこです",
          "romaji": "Kore wa doko desu.",
          "english": "This is Where.",
          "audioText": "これはどこです",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "これは",
            "です",
            "どこ"
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
          "prompt": "右です",
          "furigana": "みぎです",
          "romaji": "migi desu.",
          "english": "It is Right side.",
          "audioText": "右です",
          "dictateTokens": [
            "です",
            "ではありません",
            "これ",
            "右"
          ],
          "dictateSolution": [
            "右",
            "です"
          ],
          "correctAnswer": "右です"
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
            "Straight ahead",
            "Left side",
            "Ticket machine area",
            "East exit"
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
            "な",
            "つ",
            "お",
            "だ",
            "ゆ",
            "ひ",
            "て",
            "り"
          ],
          "correctAnswer": "ひだり"
        },
        {
          "id": "u5_l2_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なまっすぐです。",
          "furigana": "これはいちばんたいせつなまっすぐです。",
          "romaji": "Kore wa ichiban taisetsu na massugu desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Straight ahead.",
          "audioText": "これはまっすぐです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なまっすぐです。",
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
          "id": "u5_l2_4",
          "type": "scramble",
          "prompt": "これはまっすぐです",
          "furigana": "これはまっすぐです",
          "romaji": "Kore wa massugu desu.",
          "english": "This is Straight ahead.",
          "audioText": "これはまっすぐです",
          "scrambleTokens": [
            "これは",
            "です",
            "それ",
            "ではありません",
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
          "prompt": "前です",
          "furigana": "まえです",
          "romaji": "mae desu.",
          "english": "It is In front / ahead.",
          "audioText": "前です",
          "dictateTokens": [
            "ではありません",
            "です",
            "これ",
            "前"
          ],
          "dictateSolution": [
            "前",
            "です"
          ],
          "correctAnswer": "前です"
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
            "Road / path / way",
            "Ticket machine area",
            "Behind / back",
            "North exit"
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
            "ろ",
            "こ",
            "も",
            "み",
            "う",
            "け",
            "め",
            "し"
          ],
          "correctAnswer": "うしろ"
        },
        {
          "id": "u5_l3_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な隣です。",
          "furigana": "これはいちばんたいせつなとなりです。",
          "romaji": "Kore wa ichiban taisetsu na tonari desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Next to / beside.",
          "audioText": "これは隣です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な隣です。",
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
            "それ",
            "隣"
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
          "prompt": "向かいです",
          "furigana": "むかいです",
          "romaji": "mukai desu.",
          "english": "It is Across from / opposite.",
          "audioText": "向かいです",
          "dictateTokens": [
            "ではありません",
            "これ",
            "です",
            "向かい"
          ],
          "dictateSolution": [
            "向かい",
            "です"
          ],
          "correctAnswer": "向かいです"
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
            "Nearby",
            "Right side",
            "Left side",
            "Train station"
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
            "た",
            "か",
            "に",
            "ち",
            "ふ",
            "ん",
            "そ",
            "く"
          ],
          "correctAnswer": "ちかく"
        },
        {
          "id": "u5_l4_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な遠いです。",
          "furigana": "これはいちばんたいせつなとおいです。",
          "romaji": "Kore wa ichiban taisetsu na tooi desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Far away.",
          "audioText": "これは遠いです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な遠いです。",
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
          "id": "u5_l4_4",
          "type": "scramble",
          "prompt": "これは遠いです",
          "furigana": "これはとおいです",
          "romaji": "Kore wa tooi desu.",
          "english": "This is Far away.",
          "audioText": "これは遠いです",
          "scrambleTokens": [
            "です",
            "それ",
            "ではありません",
            "遠い",
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
          "prompt": "交差点です",
          "furigana": "こうさてんです",
          "romaji": "kousaten desu.",
          "english": "It is Intersection.",
          "audioText": "交差点です",
          "dictateTokens": [
            "これ",
            "です",
            "交差点",
            "ではありません"
          ],
          "dictateSolution": [
            "交差点",
            "です"
          ],
          "correctAnswer": "交差点です"
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
            "To cross (street/bridge)",
            "Intersection",
            "Traffic light",
            "In front / ahead"
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
            "あ",
            "う",
            "い",
            "き",
            "ん",
            "と",
            "し",
            "ご"
          ],
          "correctAnswer": "しんごう"
        },
        {
          "id": "u5_l5_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な角です。",
          "furigana": "これはいちばんたいせつなかどです。",
          "romaji": "Kore wa ichiban taisetsu na kado desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Street corner.",
          "audioText": "これは角です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な角です。",
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
          "id": "u5_l5_4",
          "type": "scramble",
          "prompt": "これは角です",
          "furigana": "これはかどです",
          "romaji": "Kore wa kado desu.",
          "english": "This is Street corner.",
          "audioText": "これは角です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "角",
            "これは"
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
          "prompt": "横断歩道です",
          "furigana": "おうだんほどうです",
          "romaji": "oudanhodou desu.",
          "english": "It is Pedestrian crosswalk.",
          "audioText": "横断歩道です",
          "dictateTokens": [
            "これ",
            "ではありません",
            "横断歩道",
            "です"
          ],
          "dictateSolution": [
            "横断歩道",
            "です"
          ],
          "correctAnswer": "横断歩道です"
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
            "Ticket gate",
            "Train station",
            "Straight ahead",
            "Next to / beside"
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
            "え",
            "に",
            "る",
            "さ",
            "つ",
            "か",
            "い",
            "こ"
          ],
          "correctAnswer": "かいさつ"
        },
        {
          "id": "u5_l6_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な切符売り場です。",
          "furigana": "これはいちばんたいせつなきっぷうりばです。",
          "romaji": "Kore wa ichiban taisetsu na kippu uriba desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Ticket machine area.",
          "audioText": "これは切符売り場です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な切符売り場です。",
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
          "id": "u5_l6_4",
          "type": "scramble",
          "prompt": "これは切符売り場です",
          "furigana": "これはきっぷうりばです",
          "romaji": "Kore wa kippu uriba desu.",
          "english": "This is Ticket machine area.",
          "audioText": "これは切符売り場です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "です",
            "それ",
            "切符売り場"
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
          "prompt": "出口です",
          "furigana": "でぐちです",
          "romaji": "deguchi desu.",
          "english": "It is Exit.",
          "audioText": "出口です",
          "dictateTokens": [
            "です",
            "出口",
            "ではありません",
            "これ"
          ],
          "dictateSolution": [
            "出口",
            "です"
          ],
          "correctAnswer": "出口です"
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
            "Across from / opposite",
            "In front / ahead",
            "Next to / beside",
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
            "う",
            "た",
            "き",
            "こ",
            "ぐ",
            "つ",
            "ほ",
            "ち"
          ],
          "correctAnswer": "きたぐち"
        },
        {
          "id": "u5_l7_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な南口です。",
          "furigana": "これはいちばんたいせつなみなみぐちです。",
          "romaji": "Kore wa ichiban taisetsu na minamiguchi desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important South exit.",
          "audioText": "これは南口です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な南口です。",
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
            "ではありません",
            "これは",
            "南口"
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
          "prompt": "東口です",
          "furigana": "ひがしぐちです",
          "romaji": "higashiguchi desu.",
          "english": "It is East exit.",
          "audioText": "東口です",
          "dictateTokens": [
            "東口",
            "これ",
            "です",
            "ではありません"
          ],
          "dictateSolution": [
            "東口",
            "です"
          ],
          "correctAnswer": "東口です"
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
            "Intersection",
            "Nearby",
            "West exit",
            "Next to / beside"
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
            "に",
            "し",
            "わ",
            "ち",
            "や",
            "ぐ",
            "ろ",
            "ゆ"
          ],
          "correctAnswer": "にしぐち"
        },
        {
          "id": "u5_l8_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なトイレです。",
          "furigana": "これはいちばんたいせつなトイレです。",
          "romaji": "Kore wa ichiban taisetsu na toire desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Restroom.",
          "audioText": "これはトイレです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なトイレです。",
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
          "id": "u5_l8_4",
          "type": "scramble",
          "prompt": "これはトイレです",
          "furigana": "これはトイレです",
          "romaji": "Kore wa toire desu.",
          "english": "This is Restroom.",
          "audioText": "これはトイレです",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "これは",
            "です",
            "トイレ"
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
          "prompt": "コンビニです",
          "furigana": "コンビニです",
          "romaji": "konbini desu.",
          "english": "It is Convenience store.",
          "audioText": "コンビニです",
          "dictateTokens": [
            "ではありません",
            "コンビニ",
            "これ",
            "です"
          ],
          "dictateSolution": [
            "コンビニ",
            "です"
          ],
          "correctAnswer": "コンビニです"
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
            "East exit",
            "Police box",
            "North exit",
            "Straight ahead"
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
            "ん",
            "ば",
            "こ",
            "え",
            "は",
            "う",
            "な",
            "け"
          ],
          "correctAnswer": "こうばん"
        },
        {
          "id": "u5_l9_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な銀行です。",
          "furigana": "これはいちばんたいせつなぎんこうです。",
          "romaji": "Kore wa ichiban taisetsu na ginkou desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Bank.",
          "audioText": "これは銀行です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な銀行です。",
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
          "id": "u5_l9_4",
          "type": "scramble",
          "prompt": "これは銀行です",
          "furigana": "これはぎんこうです",
          "romaji": "Kore wa ginkou desu.",
          "english": "This is Bank.",
          "audioText": "これは銀行です",
          "scrambleTokens": [
            "これは",
            "それ",
            "です",
            "ではありません",
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
          "prompt": "郵便局です",
          "furigana": "ゆうびんきょくです",
          "romaji": "yuubinkyoku desu.",
          "english": "It is Post office.",
          "audioText": "郵便局です",
          "dictateTokens": [
            "です",
            "これ",
            "ではありません",
            "郵便局"
          ],
          "dictateSolution": [
            "郵便局",
            "です"
          ],
          "correctAnswer": "郵便局です"
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
            "Bank",
            "Behind / back",
            "South exit",
            "On foot / walking"
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
            "ろ",
            "る",
            "お",
            "い",
            "そ",
            "れ",
            "て",
            "あ"
          ],
          "correctAnswer": "あるいて"
        },
        {
          "id": "u5_l10_3",
          "type": "cloze",
          "prompt": "毎日、日本語を曲がる。",
          "furigana": "まいにち、にほんごをまがる。",
          "romaji": "Mainichi, nihongo o magaru.",
          "english": "Fill in direct object particle 'を' (o): To turn Japanese every day.",
          "audioText": "日本語を曲がる。",
          "clozeSentence": "毎日、日本語 {{BLANK}} 曲がる。",
          "clozeTarget": "を",
          "clozeOptions": [
            "を",
            "は",
            "に",
            "で"
          ],
          "correctAnswer": "を",
          "explanation": "助詞「を」 (o) marks the object of the action verb."
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
            "ではありません",
            "それ",
            "曲がる",
            "これは",
            "です"
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
          "prompt": "渡るです",
          "furigana": "わたるです",
          "romaji": "wataru desu.",
          "english": "It is To cross (street/bridge).",
          "audioText": "渡るです",
          "dictateTokens": [
            "ではありません",
            "です",
            "これ",
            "渡る"
          ],
          "dictateSolution": [
            "渡る",
            "です"
          ],
          "correctAnswer": "渡るです"
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
            "To get lost",
            "To cross (street/bridge)",
            "Train station",
            "Road / path / way"
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
            "ち",
            "み",
            "ひ",
            "む",
            "あ",
            "や",
            "け",
            "か"
          ],
          "correctAnswer": "みち"
        },
        {
          "id": "u5_l11_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な案内です。",
          "furigana": "これはいちばんたいせつなあんないです。",
          "romaji": "Kore wa ichiban taisetsu na annai desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Guidance / directions.",
          "audioText": "これは案内です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な案内です。",
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
          "id": "u5_l11_4",
          "type": "scramble",
          "prompt": "これは案内です",
          "furigana": "これはあんないです",
          "romaji": "Kore wa annai desu.",
          "english": "This is Guidance / directions.",
          "audioText": "これは案内です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "それ",
            "案内",
            "これは"
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
          "prompt": "迷うです",
          "furigana": "まようです",
          "romaji": "mayou desu.",
          "english": "It is To get lost.",
          "audioText": "迷うです",
          "dictateTokens": [
            "です",
            "迷う",
            "ではありません",
            "これ"
          ],
          "dictateSolution": [
            "迷う",
            "です"
          ],
          "correctAnswer": "迷うです"
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
            "Right over there",
            "To cross (street/bridge)",
            "Landmark",
            "Far away"
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
            "そ",
            "こ",
            "な",
            "に",
            "す",
            "み",
            "ぐ",
            "や"
          ],
          "correctAnswer": "すぐそこ"
        },
        {
          "id": "u5_l12_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な目印です。",
          "furigana": "これはいちばんたいせつなめじるしです。",
          "romaji": "Kore wa ichiban taisetsu na mejirushi desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Landmark.",
          "audioText": "これは目印です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な目印です。",
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
          "id": "u5_l12_4",
          "type": "scramble",
          "prompt": "これは目印です",
          "furigana": "これはめじるしです",
          "romaji": "Kore wa mejirushi desu.",
          "english": "This is Landmark.",
          "audioText": "これは目印です",
          "scrambleTokens": [
            "ではありません",
            "目印",
            "です",
            "これは",
            "それ"
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
            "です",
            "ありがとう",
            "お願いします",
            "看板",
            "を"
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
            "Intersection",
            "Train station",
            "Bank",
            "Restroom"
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
            "た",
            "す",
            "え",
            "そ",
            "つ",
            "り",
            "う"
          ],
          "correctAnswer": "えき"
        },
        {
          "id": "u5_l13_3",
          "type": "cloze",
          "prompt": "これはいちばん大切などこです。",
          "furigana": "これはいちばんたいせつなどこです。",
          "romaji": "Kore wa ichiban taisetsu na doko desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Where.",
          "audioText": "これはどこです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切などこです。",
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
          "id": "u5_l13_4",
          "type": "scramble",
          "prompt": "これはどこです",
          "furigana": "これはどこです",
          "romaji": "Kore wa doko desu.",
          "english": "This is Where.",
          "audioText": "これはどこです",
          "scrambleTokens": [
            "どこ",
            "です",
            "これは",
            "ではありません",
            "それ"
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
          "prompt": "右です",
          "furigana": "みぎです",
          "romaji": "migi desu.",
          "english": "It is Right side.",
          "audioText": "右です",
          "dictateTokens": [
            "です",
            "右",
            "ではありません",
            "これ"
          ],
          "dictateSolution": [
            "右",
            "です"
          ],
          "correctAnswer": "右です"
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
            "Ticket machine area",
            "Traffic light",
            "Guidance / directions",
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
            "く",
            "も",
            "り",
            "そ",
            "ゆ",
            "ひ",
            "め",
            "だ"
          ],
          "correctAnswer": "ひだり"
        },
        {
          "id": "u5_l14_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なまっすぐです。",
          "furigana": "これはいちばんたいせつなまっすぐです。",
          "romaji": "Kore wa ichiban taisetsu na massugu desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Straight ahead.",
          "audioText": "これはまっすぐです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なまっすぐです。",
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
          "id": "u5_l14_4",
          "type": "scramble",
          "prompt": "これはまっすぐです",
          "furigana": "これはまっすぐです",
          "romaji": "Kore wa massugu desu.",
          "english": "This is Straight ahead.",
          "audioText": "これはまっすぐです",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "まっすぐ",
            "それ",
            "です"
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
          "prompt": "前です",
          "furigana": "まえです",
          "romaji": "mae desu.",
          "english": "It is In front / ahead.",
          "audioText": "前です",
          "dictateTokens": [
            "ではありません",
            "です",
            "これ",
            "前"
          ],
          "dictateSolution": [
            "前",
            "です"
          ],
          "correctAnswer": "前です"
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
            "Behind / back",
            "Ticket gate",
            "East exit",
            "Nearby"
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
            "し",
            "む",
            "う",
            "た",
            "に",
            "ろ",
            "け",
            "よ"
          ],
          "correctAnswer": "うしろ"
        },
        {
          "id": "u5_l15_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な隣です。",
          "furigana": "これはいちばんたいせつなとなりです。",
          "romaji": "Kore wa ichiban taisetsu na tonari desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Next to / beside.",
          "audioText": "これは隣です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な隣です。",
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
          "id": "u5_l15_4",
          "type": "scramble",
          "prompt": "これは隣です",
          "furigana": "これはとなりです",
          "romaji": "Kore wa tonari desu.",
          "english": "This is Next to / beside.",
          "audioText": "これは隣です",
          "scrambleTokens": [
            "隣",
            "これは",
            "です",
            "ではありません",
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
          "prompt": "向かいです",
          "furigana": "むかいです",
          "romaji": "mukai desu.",
          "english": "It is Across from / opposite.",
          "audioText": "向かいです",
          "dictateTokens": [
            "です",
            "向かい",
            "ではありません",
            "これ"
          ],
          "dictateSolution": [
            "向かい",
            "です"
          ],
          "correctAnswer": "向かいです"
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
          "Right over there",
          "Train station",
          "In front / ahead",
          "Road / path / way"
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
          "い",
          "ふ",
          "き",
          "ち",
          "か",
          "え",
          "と",
          "せ"
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
          "Road / path / way",
          "Ticket machine area",
          "Behind / back",
          "North exit"
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
          "ろ",
          "こ",
          "も",
          "み",
          "う",
          "け",
          "め",
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
          "To cross (street/bridge)",
          "Intersection",
          "Traffic light",
          "In front / ahead"
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
          "あ",
          "う",
          "い",
          "き",
          "ん",
          "と",
          "し",
          "ご"
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
          "Across from / opposite",
          "In front / ahead",
          "Next to / beside",
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
          "う",
          "た",
          "き",
          "こ",
          "ぐ",
          "つ",
          "ほ",
          "ち"
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
          "East exit",
          "Police box",
          "North exit",
          "Straight ahead"
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
          "ん",
          "ば",
          "こ",
          "え",
          "は",
          "う",
          "な",
          "け"
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
          "To get lost",
          "To cross (street/bridge)",
          "Train station",
          "Road / path / way"
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
          "ち",
          "み",
          "ひ",
          "む",
          "あ",
          "や",
          "け",
          "か"
        ],
        "correctAnswer": "みち"
      }
    ]
  }
};
