import type { DojoUnit } from "../../models/dojo.model";

export const unit06: DojoUnit = {
  "id": "unit_6",
  "unitNumber": 6,
  "title": "Shopping in Akihabara",
  "titleJp": "秋葉原でショッピング",
  "description": "Inquire about prices, try on clothes, ask for other sizes and colors, and handle payments smoothly.",
  "icon": "🛍️",
  "themeColor": "#8B5CF6",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u6_l1",
      "unitId": "unit_6",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "How much (cost) & This (near speaker)",
      "titleJp": "いくら・これ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "いくら",
        "これ",
        "それ"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u6_l1_1",
          "type": "listen",
          "prompt": "いくら",
          "furigana": "いくら",
          "romaji": "ikura",
          "english": "How much (cost)",
          "audioText": "いくら",
          "options": [
            "Tax-free / duty-free",
            "Souvenir / gift",
            "Expensive",
            "How much (cost)"
          ],
          "correctAnswer": "How much (cost)"
        },
        {
          "id": "u6_l1_2",
          "type": "spell",
          "prompt": "いくら",
          "furigana": "いくら",
          "romaji": "ikura",
          "english": "Build 'How much (cost)'",
          "audioText": "いくら",
          "tileBank": [
            "え",
            "ち",
            "め",
            "い",
            "の",
            "ら",
            "く",
            "わ"
          ],
          "correctAnswer": "いくら"
        },
        {
          "id": "u6_l1_3",
          "type": "cloze",
          "prompt": "私はこれがすきです",
          "furigana": "わたしはこれがすきです",
          "romaji": "Watashi wa kore ga suki desu.",
          "english": "Fill in the blank with the correct particle for This (near speaker).",
          "audioText": "これ",
          "clozeSentence": "これはこれ {{BLANK}} す。",
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
          "id": "u6_l1_4",
          "type": "scramble",
          "prompt": "これはこれです",
          "furigana": "これはこれです",
          "romaji": "Kore wa kore desu.",
          "english": "This is This (near speaker).",
          "audioText": "これはこれです",
          "scrambleTokens": [
            "です",
            "これ",
            "ではありません",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "これ",
            "です"
          ],
          "correctAnswer": "これはこれです"
        },
        {
          "id": "u6_l1_5",
          "type": "speak",
          "prompt": "それ",
          "furigana": "それ",
          "romaji": "sore",
          "english": "Pronounce: That (near listener)",
          "audioText": "それ",
          "targetSpeech": "それ",
          "options": [
            "That (near listener)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "それ"
        },
        {
          "id": "u6_l1_6",
          "type": "dictate",
          "prompt": "それをお願いします",
          "furigana": "それをおねがいします",
          "romaji": "sore o onegaishimasu.",
          "english": "That (near listener), please.",
          "audioText": "それをお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "です",
            "お願いします",
            "それ"
          ],
          "dictateSolution": [
            "それ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "それをお願いします"
        },
        {
          "id": "u6_l1_7",
          "type": "match",
          "prompt": "いくら・これ・それ・あれ",
          "furigana": "いくら・これ・それ・あれ",
          "romaji": "ikura, kore, sore, are",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いくら",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "いくら",
              "right": "How much (cost)",
              "furigana": "いくら",
              "romaji": "ikura"
            },
            {
              "id": "p_1",
              "left": "これ",
              "right": "This (near speaker)",
              "furigana": "これ",
              "romaji": "kore"
            },
            {
              "id": "p_2",
              "left": "それ",
              "right": "That (near listener)",
              "furigana": "それ",
              "romaji": "sore"
            },
            {
              "id": "p_3",
              "left": "あれ",
              "right": "That over there",
              "furigana": "あれ",
              "romaji": "are"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l1_8",
          "type": "dialogue",
          "prompt": "これいくらですか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "これいくらですか？",
          "furigana": "これいくらですか？",
          "romaji": "Kore ikura desu ka?",
          "english": "Customer: Excuse me, how much is this?",
          "audioText": "これいくらですか？",
          "dialogueOptions": [
            "税込で3,500円でございます。",
            "右に曲がります",
            "お水をお願いします",
            "はい、そうです"
          ],
          "options": [
            "税込で3,500円でございます。",
            "右に曲がります",
            "お水をお願いします",
            "はい、そうです"
          ],
          "correctAnswer": "税込で3,500円でございます。"
        }
      ]
    },
    {
      "id": "u6_l2",
      "unitId": "unit_6",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "That over there & Which one",
      "titleJp": "あれ・どれ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "あれ",
        "どれ",
        "高い"
      ],
      "kanjiKeywords": [
        "高"
      ],
      "items": [
        {
          "id": "u6_l2_1",
          "type": "listen",
          "prompt": "あれ",
          "furigana": "あれ",
          "romaji": "are",
          "english": "That over there",
          "audioText": "あれ",
          "options": [
            "Discount",
            "That over there",
            "Expensive",
            "This (near speaker)"
          ],
          "correctAnswer": "That over there"
        },
        {
          "id": "u6_l2_2",
          "type": "spell",
          "prompt": "あれ",
          "furigana": "あれ",
          "romaji": "are",
          "english": "Build 'That over there'",
          "audioText": "あれ",
          "tileBank": [
            "ん",
            "ち",
            "さ",
            "ま",
            "あ",
            "た",
            "や",
            "れ"
          ],
          "correctAnswer": "あれ"
        },
        {
          "id": "u6_l2_3",
          "type": "cloze",
          "prompt": "私はどれがすきです",
          "furigana": "わたしはどれがすきです",
          "romaji": "Watashi wa dore ga suki desu.",
          "english": "Fill in the blank with the correct particle for Which one.",
          "audioText": "どれ",
          "clozeSentence": "これはどれ {{BLANK}} す。",
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
          "id": "u6_l2_4",
          "type": "scramble",
          "prompt": "これはどれです",
          "furigana": "これはどれです",
          "romaji": "Kore wa dore desu.",
          "english": "This is Which one.",
          "audioText": "これはどれです",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "どれ",
            "です",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "どれ",
            "です"
          ],
          "correctAnswer": "これはどれです"
        },
        {
          "id": "u6_l2_5",
          "type": "speak",
          "prompt": "高い",
          "furigana": "たかい",
          "romaji": "takai",
          "english": "Pronounce: Expensive",
          "audioText": "たかい",
          "targetSpeech": "高い",
          "options": [
            "Expensive",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "高い"
        },
        {
          "id": "u6_l2_6",
          "type": "dictate",
          "prompt": "高いをお願いします",
          "furigana": "たかいをおねがいします",
          "romaji": "takai o onegaishimasu.",
          "english": "Expensive, please.",
          "audioText": "高いをお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "高い",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "高い",
            "を",
            "お願いします"
          ],
          "correctAnswer": "高いをお願いします"
        },
        {
          "id": "u6_l2_7",
          "type": "match",
          "prompt": "あれ・どれ・高い・安い",
          "furigana": "あれ・どれ・たかい・やすい",
          "romaji": "are, dore, takai, yasui",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "あれ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "あれ",
              "right": "That over there",
              "furigana": "あれ",
              "romaji": "are"
            },
            {
              "id": "p_1",
              "left": "どれ",
              "right": "Which one",
              "furigana": "どれ",
              "romaji": "dore"
            },
            {
              "id": "p_2",
              "left": "高い",
              "right": "Expensive",
              "furigana": "たかい",
              "romaji": "takai"
            },
            {
              "id": "p_3",
              "left": "安い",
              "right": "Cheap / inexpensive",
              "furigana": "やすい",
              "romaji": "yasui"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l2_8",
          "type": "dialogue",
          "prompt": "着てみてもいいですか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "着てみてもいいですか？",
          "furigana": "着てみてもいいですか？",
          "romaji": "Kite mite mo ii desu ka?",
          "english": "Customer: May I try on this shirt?",
          "audioText": "着てみてもいいですか？",
          "dialogueOptions": [
            "はい、試着室はこちらでございます！",
            "駅はあそこです",
            "ごちそうさまでした",
            "いいえ、知りません"
          ],
          "options": [
            "はい、試着室はこちらでございます！",
            "駅はあそこです",
            "ごちそうさまでした",
            "いいえ、知りません"
          ],
          "correctAnswer": "はい、試着室はこちらでございます！"
        }
      ]
    },
    {
      "id": "u6_l3",
      "unitId": "unit_6",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Cheap / inexpensive & Big / large",
      "titleJp": "安い・大きい",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "安い",
        "大きい",
        "小さい"
      ],
      "kanjiKeywords": [
        "安",
        "大",
        "小"
      ],
      "items": [
        {
          "id": "u6_l3_1",
          "type": "listen",
          "prompt": "安い",
          "furigana": "やすい",
          "romaji": "yasui",
          "english": "Cheap / inexpensive",
          "audioText": "やすい",
          "options": [
            "I will take this one",
            "Cheap / inexpensive",
            "To show",
            "This (near speaker)"
          ],
          "correctAnswer": "Cheap / inexpensive"
        },
        {
          "id": "u6_l3_2",
          "type": "spell",
          "prompt": "安い",
          "furigana": "やすい",
          "romaji": "yasui",
          "english": "Build 'Cheap / inexpensive'",
          "audioText": "やすい",
          "tileBank": [
            "し",
            "や",
            "と",
            "い",
            "は",
            "る",
            "す",
            "ぬ"
          ],
          "correctAnswer": "やすい"
        },
        {
          "id": "u6_l3_3",
          "type": "cloze",
          "prompt": "私は大きいがすきです",
          "furigana": "わたしはおおきいがすきです",
          "romaji": "Watashi wa ookii ga suki desu.",
          "english": "Fill in the blank with the correct particle for Big / large.",
          "audioText": "大きい",
          "clozeSentence": "これは大きい {{BLANK}} す。",
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
          "id": "u6_l3_4",
          "type": "scramble",
          "prompt": "これは大きいです",
          "furigana": "これはおおきいです",
          "romaji": "Kore wa ookii desu.",
          "english": "This is Big / large.",
          "audioText": "これは大きいです",
          "scrambleTokens": [
            "です",
            "これは",
            "それ",
            "ではありません",
            "大きい"
          ],
          "scrambleSolution": [
            "これは",
            "大きい",
            "です"
          ],
          "correctAnswer": "これは大きいです"
        },
        {
          "id": "u6_l3_5",
          "type": "speak",
          "prompt": "小さい",
          "furigana": "ちいさい",
          "romaji": "chiisai",
          "english": "Pronounce: Small",
          "audioText": "ちいさい",
          "targetSpeech": "小さい",
          "options": [
            "Small",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "小さい"
        },
        {
          "id": "u6_l3_6",
          "type": "dictate",
          "prompt": "小さいをお願いします",
          "furigana": "ちいさいをおねがいします",
          "romaji": "chiisai o onegaishimasu.",
          "english": "Small, please.",
          "audioText": "小さいをお願いします",
          "dictateTokens": [
            "お願いします",
            "を",
            "です",
            "ありがとう",
            "小さい"
          ],
          "dictateSolution": [
            "小さい",
            "を",
            "お願いします"
          ],
          "correctAnswer": "小さいをお願いします"
        },
        {
          "id": "u6_l3_7",
          "type": "match",
          "prompt": "安い・大きい・小さい・新しい",
          "furigana": "やすい・おおきい・ちいさい・あたらしい",
          "romaji": "yasui, ookii, chiisai, atarashii",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "やすい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "安い",
              "right": "Cheap / inexpensive",
              "furigana": "やすい",
              "romaji": "yasui"
            },
            {
              "id": "p_1",
              "left": "大きい",
              "right": "Big / large",
              "furigana": "おおきい",
              "romaji": "ookii"
            },
            {
              "id": "p_2",
              "left": "小さい",
              "right": "Small",
              "furigana": "ちいさい",
              "romaji": "chiisai"
            },
            {
              "id": "p_3",
              "left": "新しい",
              "right": "New",
              "furigana": "あたらしい",
              "romaji": "atarashii"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l3_8",
          "type": "dialogue",
          "prompt": "大きいサイズはありますか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "大きいサイズはありますか？",
          "furigana": "大きいサイズはありますか？",
          "romaji": "Ookii saizu wa arimasu ka?",
          "english": "Customer: Do you have a slightly larger size?",
          "audioText": "大きいサイズはありますか？",
          "dialogueOptions": [
            "少々お待ちください、在庫をお調べいたします。",
            "美味しかったです",
            "はじめまして",
            "また来ます"
          ],
          "options": [
            "少々お待ちください、在庫をお調べいたします。",
            "美味しかったです",
            "はじめまして",
            "また来ます"
          ],
          "correctAnswer": "少々お待ちください、在庫をお調べいたします。"
        }
      ]
    },
    {
      "id": "u6_l4",
      "unitId": "unit_6",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "New & Old",
      "titleJp": "新しい・古い",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "新しい",
        "古い",
        "赤"
      ],
      "kanjiKeywords": [
        "新",
        "古",
        "赤"
      ],
      "items": [
        {
          "id": "u6_l4_1",
          "type": "listen",
          "prompt": "新しい",
          "furigana": "あたらしい",
          "romaji": "atarashii",
          "english": "New",
          "audioText": "あたらしい",
          "options": [
            "Blue",
            "Shirt",
            "Credit card",
            "New"
          ],
          "correctAnswer": "New"
        },
        {
          "id": "u6_l4_2",
          "type": "spell",
          "prompt": "新しい",
          "furigana": "あたらしい",
          "romaji": "atarashii",
          "english": "Build 'New'",
          "audioText": "あたらしい",
          "tileBank": [
            "ら",
            "せ",
            "た",
            "よ",
            "い",
            "は",
            "し",
            "あ"
          ],
          "correctAnswer": "あたらしい"
        },
        {
          "id": "u6_l4_3",
          "type": "cloze",
          "prompt": "私は古いがすきです",
          "furigana": "わたしはふるいがすきです",
          "romaji": "Watashi wa furui ga suki desu.",
          "english": "Fill in the blank with the correct particle for Old.",
          "audioText": "古い",
          "clozeSentence": "これは古い {{BLANK}} す。",
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
          "id": "u6_l4_4",
          "type": "scramble",
          "prompt": "これは古いです",
          "furigana": "これはふるいです",
          "romaji": "Kore wa furui desu.",
          "english": "This is Old.",
          "audioText": "これは古いです",
          "scrambleTokens": [
            "これは",
            "です",
            "ではありません",
            "古い",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "古い",
            "です"
          ],
          "correctAnswer": "これは古いです"
        },
        {
          "id": "u6_l4_5",
          "type": "speak",
          "prompt": "赤",
          "furigana": "あか",
          "romaji": "aka",
          "english": "Pronounce: Red",
          "audioText": "あか",
          "targetSpeech": "赤",
          "options": [
            "Red",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "赤"
        },
        {
          "id": "u6_l4_6",
          "type": "dictate",
          "prompt": "赤をお願いします",
          "furigana": "あかをおねがいします",
          "romaji": "aka o onegaishimasu.",
          "english": "Red, please.",
          "audioText": "赤をお願いします",
          "dictateTokens": [
            "です",
            "赤",
            "お願いします",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "赤",
            "を",
            "お願いします"
          ],
          "correctAnswer": "赤をお願いします"
        },
        {
          "id": "u6_l4_7",
          "type": "match",
          "prompt": "新しい・古い・赤・青",
          "furigana": "あたらしい・ふるい・あか・あお",
          "romaji": "atarashii, furui, aka, ao",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "あたらしい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "新しい",
              "right": "New",
              "furigana": "あたらしい",
              "romaji": "atarashii"
            },
            {
              "id": "p_1",
              "left": "古い",
              "right": "Old",
              "furigana": "ふるい",
              "romaji": "furui"
            },
            {
              "id": "p_2",
              "left": "赤",
              "right": "Red",
              "furigana": "あか",
              "romaji": "aka"
            },
            {
              "id": "p_3",
              "left": "青",
              "right": "Blue",
              "furigana": "あお",
              "romaji": "ao"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l4_8",
          "type": "dialogue",
          "prompt": "袋はお付けしますか？",
          "dialogueSpeaker": "店員",
          "dialoguePrompt": "袋はお付けしますか？",
          "furigana": "袋はお付けしますか？",
          "romaji": "Fukuro wa otsuke shimasu ka?",
          "english": "Clerk: Would you like a bag?",
          "audioText": "袋はお付けしますか？",
          "dialogueOptions": [
            "はい、1枚お願いします。",
            "さようなら",
            "いいえ、日本人です",
            "お腹が痛いです"
          ],
          "options": [
            "はい、1枚お願いします。",
            "さようなら",
            "いいえ、日本人です",
            "お腹が痛いです"
          ],
          "correctAnswer": "はい、1枚お願いします。"
        }
      ]
    },
    {
      "id": "u6_l5",
      "unitId": "unit_6",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Blue & Black",
      "titleJp": "青・黒",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "青",
        "黒",
        "白"
      ],
      "kanjiKeywords": [
        "青",
        "黒",
        "白"
      ],
      "items": [
        {
          "id": "u6_l5_1",
          "type": "listen",
          "prompt": "青",
          "furigana": "あお",
          "romaji": "ao",
          "english": "Blue",
          "audioText": "あお",
          "options": [
            "Red",
            "Blue",
            "Watch / clock",
            "Cheap / inexpensive"
          ],
          "correctAnswer": "Blue"
        },
        {
          "id": "u6_l5_2",
          "type": "spell",
          "prompt": "青",
          "furigana": "あお",
          "romaji": "ao",
          "english": "Build 'Blue'",
          "audioText": "あお",
          "tileBank": [
            "た",
            "ふ",
            "ね",
            "も",
            "す",
            "あ",
            "は",
            "お"
          ],
          "correctAnswer": "あお"
        },
        {
          "id": "u6_l5_3",
          "type": "cloze",
          "prompt": "私は黒がすきです",
          "furigana": "わたしはくろがすきです",
          "romaji": "Watashi wa kuro ga suki desu.",
          "english": "Fill in the blank with the correct particle for Black.",
          "audioText": "黒",
          "clozeSentence": "これは黒 {{BLANK}} す。",
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
          "id": "u6_l5_4",
          "type": "scramble",
          "prompt": "これは黒です",
          "furigana": "これはくろです",
          "romaji": "Kore wa kuro desu.",
          "english": "This is Black.",
          "audioText": "これは黒です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "です",
            "それ",
            "黒"
          ],
          "scrambleSolution": [
            "これは",
            "黒",
            "です"
          ],
          "correctAnswer": "これは黒です"
        },
        {
          "id": "u6_l5_5",
          "type": "speak",
          "prompt": "白",
          "furigana": "しろ",
          "romaji": "shiro",
          "english": "Pronounce: White",
          "audioText": "しろ",
          "targetSpeech": "白",
          "options": [
            "White",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "白"
        },
        {
          "id": "u6_l5_6",
          "type": "dictate",
          "prompt": "白をお願いします",
          "furigana": "しろをおねがいします",
          "romaji": "shiro o onegaishimasu.",
          "english": "White, please.",
          "audioText": "白をお願いします",
          "dictateTokens": [
            "です",
            "白",
            "を",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "白",
            "を",
            "お願いします"
          ],
          "correctAnswer": "白をお願いします"
        },
        {
          "id": "u6_l5_7",
          "type": "match",
          "prompt": "青・黒・白・服",
          "furigana": "あお・くろ・しろ・ふく",
          "romaji": "ao, kuro, shiro, fuku",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "あお",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "青",
              "right": "Blue",
              "furigana": "あお",
              "romaji": "ao"
            },
            {
              "id": "p_1",
              "left": "黒",
              "right": "Black",
              "furigana": "くろ",
              "romaji": "kuro"
            },
            {
              "id": "p_2",
              "left": "白",
              "right": "White",
              "furigana": "しろ",
              "romaji": "shiro"
            },
            {
              "id": "p_3",
              "left": "服",
              "right": "Clothes / clothing",
              "furigana": "ふく",
              "romaji": "fuku"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l5_8",
          "type": "dialogue",
          "prompt": "これいくらですか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "これいくらですか？",
          "furigana": "これいくらですか？",
          "romaji": "Kore ikura desu ka?",
          "english": "Customer: Excuse me, how much is this?",
          "audioText": "これいくらですか？",
          "dialogueOptions": [
            "税込で3,500円でございます。",
            "右に曲がります",
            "お水をお願いします",
            "はい、そうです"
          ],
          "options": [
            "税込で3,500円でございます。",
            "右に曲がります",
            "お水をお願いします",
            "はい、そうです"
          ],
          "correctAnswer": "税込で3,500円でございます。"
        }
      ]
    },
    {
      "id": "u6_l6",
      "unitId": "unit_6",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Clothes / clothing & Shirt",
      "titleJp": "服・シャツ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "服",
        "シャツ",
        "靴"
      ],
      "kanjiKeywords": [
        "服",
        "靴"
      ],
      "items": [
        {
          "id": "u6_l6_1",
          "type": "listen",
          "prompt": "服",
          "furigana": "ふく",
          "romaji": "fuku",
          "english": "Clothes / clothing",
          "audioText": "ふく",
          "options": [
            "Clothes / clothing",
            "Old",
            "Black",
            "Expensive"
          ],
          "correctAnswer": "Clothes / clothing"
        },
        {
          "id": "u6_l6_2",
          "type": "spell",
          "prompt": "服",
          "furigana": "ふく",
          "romaji": "fuku",
          "english": "Build 'Clothes / clothing'",
          "audioText": "ふく",
          "tileBank": [
            "を",
            "く",
            "め",
            "や",
            "さ",
            "た",
            "ふ",
            "と"
          ],
          "correctAnswer": "ふく"
        },
        {
          "id": "u6_l6_3",
          "type": "cloze",
          "prompt": "私はシャツがすきです",
          "furigana": "わたしはシャツがすきです",
          "romaji": "Watashi wa shatsu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Shirt.",
          "audioText": "シャツ",
          "clozeSentence": "これはシャツ {{BLANK}} す。",
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
          "id": "u6_l6_4",
          "type": "scramble",
          "prompt": "これはシャツです",
          "furigana": "これはシャツです",
          "romaji": "Kore wa shatsu desu.",
          "english": "This is Shirt.",
          "audioText": "これはシャツです",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "これは",
            "シャツ"
          ],
          "scrambleSolution": [
            "これは",
            "シャツ",
            "です"
          ],
          "correctAnswer": "これはシャツです"
        },
        {
          "id": "u6_l6_5",
          "type": "speak",
          "prompt": "靴",
          "furigana": "くつ",
          "romaji": "kutsu",
          "english": "Pronounce: Shoes",
          "audioText": "くつ",
          "targetSpeech": "靴",
          "options": [
            "Shoes",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "靴"
        },
        {
          "id": "u6_l6_6",
          "type": "dictate",
          "prompt": "靴をお願いします",
          "furigana": "くつをおねがいします",
          "romaji": "kutsu o onegaishimasu.",
          "english": "Shoes, please.",
          "audioText": "靴をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "靴",
            "です",
            "を"
          ],
          "dictateSolution": [
            "靴",
            "を",
            "お願いします"
          ],
          "correctAnswer": "靴をお願いします"
        },
        {
          "id": "u6_l6_7",
          "type": "match",
          "prompt": "服・シャツ・靴・鞄",
          "furigana": "ふく・シャツ・くつ・かばん",
          "romaji": "fuku, shatsu, kutsu, kaban",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ふく",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "服",
              "right": "Clothes / clothing",
              "furigana": "ふく",
              "romaji": "fuku"
            },
            {
              "id": "p_1",
              "left": "シャツ",
              "right": "Shirt",
              "furigana": "シャツ",
              "romaji": "shatsu"
            },
            {
              "id": "p_2",
              "left": "靴",
              "right": "Shoes",
              "furigana": "くつ",
              "romaji": "kutsu"
            },
            {
              "id": "p_3",
              "left": "鞄",
              "right": "Bag / backpack",
              "furigana": "かばん",
              "romaji": "kaban"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l6_8",
          "type": "dialogue",
          "prompt": "着てみてもいいですか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "着てみてもいいですか？",
          "furigana": "着てみてもいいですか？",
          "romaji": "Kite mite mo ii desu ka?",
          "english": "Customer: May I try on this shirt?",
          "audioText": "着てみてもいいですか？",
          "dialogueOptions": [
            "はい、試着室はこちらでございます！",
            "駅はあそこです",
            "ごちそうさまでした",
            "いいえ、知りません"
          ],
          "options": [
            "はい、試着室はこちらでございます！",
            "駅はあそこです",
            "ごちそうさまでした",
            "いいえ、知りません"
          ],
          "correctAnswer": "はい、試着室はこちらでございます！"
        }
      ]
    },
    {
      "id": "u6_l7",
      "unitId": "unit_6",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Bag / backpack & Watch / clock",
      "titleJp": "鞄・時計",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "鞄",
        "時計",
        "試着"
      ],
      "kanjiKeywords": [
        "鞄",
        "時",
        "計",
        "試",
        "着"
      ],
      "items": [
        {
          "id": "u6_l7_1",
          "type": "listen",
          "prompt": "鞄",
          "furigana": "かばん",
          "romaji": "kaban",
          "english": "Bag / backpack",
          "audioText": "かばん",
          "options": [
            "Expensive",
            "Small",
            "Bag / backpack",
            "Fitting room"
          ],
          "correctAnswer": "Bag / backpack"
        },
        {
          "id": "u6_l7_2",
          "type": "spell",
          "prompt": "鞄",
          "furigana": "かばん",
          "romaji": "kaban",
          "english": "Build 'Bag / backpack'",
          "audioText": "かばん",
          "tileBank": [
            "ん",
            "さ",
            "ば",
            "も",
            "ち",
            "こ",
            "か",
            "ふ"
          ],
          "correctAnswer": "かばん"
        },
        {
          "id": "u6_l7_3",
          "type": "cloze",
          "prompt": "私は時計がすきです",
          "furigana": "わたしはとけいがすきです",
          "romaji": "Watashi wa tokei ga suki desu.",
          "english": "Fill in the blank with the correct particle for Watch / clock.",
          "audioText": "時計",
          "clozeSentence": "私は時計 {{BLANK}} 好きです。",
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
          "id": "u6_l7_4",
          "type": "scramble",
          "prompt": "これは時計です",
          "furigana": "これはとけいです",
          "romaji": "Kore wa tokei desu.",
          "english": "This is Watch / clock.",
          "audioText": "これは時計です",
          "scrambleTokens": [
            "それ",
            "時計",
            "ではありません",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "時計",
            "です"
          ],
          "correctAnswer": "これは時計です"
        },
        {
          "id": "u6_l7_5",
          "type": "speak",
          "prompt": "試着",
          "furigana": "しちゃく",
          "romaji": "shichaku",
          "english": "Pronounce: Trying on clothes",
          "audioText": "しちゃく",
          "targetSpeech": "試着",
          "options": [
            "Trying on clothes",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "試着"
        },
        {
          "id": "u6_l7_6",
          "type": "dictate",
          "prompt": "試着をお願いします",
          "furigana": "しちゃくをおねがいします",
          "romaji": "shichaku o onegaishimasu.",
          "english": "Trying on clothes, please.",
          "audioText": "試着をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "です",
            "お願いします",
            "試着"
          ],
          "dictateSolution": [
            "試着",
            "を",
            "お願いします"
          ],
          "correctAnswer": "試着をお願いします"
        },
        {
          "id": "u6_l7_7",
          "type": "match",
          "prompt": "鞄・時計・試着・試着室",
          "furigana": "かばん・とけい・しちゃく・しちゃくしつ",
          "romaji": "kaban, tokei, shichaku, shichakushitsu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かばん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "鞄",
              "right": "Bag / backpack",
              "furigana": "かばん",
              "romaji": "kaban"
            },
            {
              "id": "p_1",
              "left": "時計",
              "right": "Watch / clock",
              "furigana": "とけい",
              "romaji": "tokei"
            },
            {
              "id": "p_2",
              "left": "試着",
              "right": "Trying on clothes",
              "furigana": "しちゃく",
              "romaji": "shichaku"
            },
            {
              "id": "p_3",
              "left": "試着室",
              "right": "Fitting room",
              "furigana": "しちゃくしつ",
              "romaji": "shichakushitsu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l7_8",
          "type": "dialogue",
          "prompt": "大きいサイズはありますか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "大きいサイズはありますか？",
          "furigana": "大きいサイズはありますか？",
          "romaji": "Ookii saizu wa arimasu ka?",
          "english": "Customer: Do you have a slightly larger size?",
          "audioText": "大きいサイズはありますか？",
          "dialogueOptions": [
            "少々お待ちください、在庫をお調べいたします。",
            "美味しかったです",
            "はじめまして",
            "また来ます"
          ],
          "options": [
            "少々お待ちください、在庫をお調べいたします。",
            "美味しかったです",
            "はじめまして",
            "また来ます"
          ],
          "correctAnswer": "少々お待ちください、在庫をお調べいたします。"
        }
      ]
    },
    {
      "id": "u6_l8",
      "unitId": "unit_6",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Fitting room & Size",
      "titleJp": "試着室・サイズ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "試着室",
        "サイズ",
        "見せる"
      ],
      "kanjiKeywords": [
        "試",
        "着",
        "室",
        "見"
      ],
      "items": [
        {
          "id": "u6_l8_1",
          "type": "listen",
          "prompt": "試着室",
          "furigana": "しちゃくしつ",
          "romaji": "shichakushitsu",
          "english": "Fitting room",
          "audioText": "しちゃくしつ",
          "options": [
            "New",
            "Discount",
            "Which one",
            "Fitting room"
          ],
          "correctAnswer": "Fitting room"
        },
        {
          "id": "u6_l8_2",
          "type": "spell",
          "prompt": "試着室",
          "furigana": "しちゃくしつ",
          "romaji": "shichakushitsu",
          "english": "Build 'Fitting room'",
          "audioText": "しちゃくしつ",
          "tileBank": [
            "し",
            "ろ",
            "く",
            "ゃ",
            "つ",
            "も",
            "し",
            "ち"
          ],
          "correctAnswer": "しちゃくしつ"
        },
        {
          "id": "u6_l8_3",
          "type": "cloze",
          "prompt": "私はサイズがすきです",
          "furigana": "わたしはサイズがすきです",
          "romaji": "Watashi wa saizu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Size.",
          "audioText": "サイズ",
          "clozeSentence": "私はサイズ {{BLANK}} 好きです。",
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
          "id": "u6_l8_4",
          "type": "scramble",
          "prompt": "これはサイズです",
          "furigana": "これはサイズです",
          "romaji": "Kore wa saizu desu.",
          "english": "This is Size.",
          "audioText": "これはサイズです",
          "scrambleTokens": [
            "サイズ",
            "それ",
            "です",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "サイズ",
            "です"
          ],
          "correctAnswer": "これはサイズです"
        },
        {
          "id": "u6_l8_5",
          "type": "speak",
          "prompt": "見せる",
          "furigana": "みせる",
          "romaji": "miseru",
          "english": "Pronounce: To show",
          "audioText": "みせる",
          "targetSpeech": "見せる",
          "options": [
            "To show",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "見せる"
        },
        {
          "id": "u6_l8_6",
          "type": "dictate",
          "prompt": "見せるをお願いします",
          "furigana": "みせるをおねがいします",
          "romaji": "miseru o onegaishimasu.",
          "english": "To show, please.",
          "audioText": "見せるをお願いします",
          "dictateTokens": [
            "です",
            "見せる",
            "を",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "見せる",
            "を",
            "お願いします"
          ],
          "correctAnswer": "見せるをお願いします"
        },
        {
          "id": "u6_l8_7",
          "type": "match",
          "prompt": "試着室・サイズ・見せる・着る",
          "furigana": "しちゃくしつ・サイズ・みせる・きる",
          "romaji": "shichakushitsu, saizu, miseru, kiru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しちゃくしつ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "試着室",
              "right": "Fitting room",
              "furigana": "しちゃくしつ",
              "romaji": "shichakushitsu"
            },
            {
              "id": "p_1",
              "left": "サイズ",
              "right": "Size",
              "furigana": "サイズ",
              "romaji": "saizu"
            },
            {
              "id": "p_2",
              "left": "見せる",
              "right": "To show",
              "furigana": "みせる",
              "romaji": "miseru"
            },
            {
              "id": "p_3",
              "left": "着る",
              "right": "To wear (upper body)",
              "furigana": "きる",
              "romaji": "kiru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l8_8",
          "type": "dialogue",
          "prompt": "袋はお付けしますか？",
          "dialogueSpeaker": "店員",
          "dialoguePrompt": "袋はお付けしますか？",
          "furigana": "袋はお付けしますか？",
          "romaji": "Fukuro wa otsuke shimasu ka?",
          "english": "Clerk: Would you like a bag?",
          "audioText": "袋はお付けしますか？",
          "dialogueOptions": [
            "はい、1枚お願いします。",
            "さようなら",
            "いいえ、日本人です",
            "お腹が痛いです"
          ],
          "options": [
            "はい、1枚お願いします。",
            "さようなら",
            "いいえ、日本人です",
            "お腹が痛いです"
          ],
          "correctAnswer": "はい、1枚お願いします。"
        }
      ]
    },
    {
      "id": "u6_l9",
      "unitId": "unit_6",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "To wear (upper body) & To wear (feet/legs)",
      "titleJp": "着る・履く",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "着る",
        "履く",
        "レジ"
      ],
      "kanjiKeywords": [
        "着",
        "履"
      ],
      "items": [
        {
          "id": "u6_l9_1",
          "type": "listen",
          "prompt": "着る",
          "furigana": "きる",
          "romaji": "kiru",
          "english": "To wear (upper body)",
          "audioText": "きる",
          "options": [
            "To wear (upper body)",
            "Small",
            "Big / large",
            "Which one"
          ],
          "correctAnswer": "To wear (upper body)"
        },
        {
          "id": "u6_l9_2",
          "type": "spell",
          "prompt": "着る",
          "furigana": "きる",
          "romaji": "kiru",
          "english": "Build 'To wear (upper body)'",
          "audioText": "きる",
          "tileBank": [
            "ま",
            "す",
            "し",
            "き",
            "る",
            "ゆ",
            "つ",
            "わ"
          ],
          "correctAnswer": "きる"
        },
        {
          "id": "u6_l9_3",
          "type": "cloze",
          "prompt": "私は履くがすきです",
          "furigana": "わたしははくがすきです",
          "romaji": "Watashi wa haku ga suki desu.",
          "english": "Fill in the blank with the correct particle for To wear (feet/legs).",
          "audioText": "履く",
          "clozeSentence": "これは履く {{BLANK}} す。",
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
          "id": "u6_l9_4",
          "type": "scramble",
          "prompt": "これは履くです",
          "furigana": "これははくです",
          "romaji": "Kore wa haku desu.",
          "english": "This is To wear (feet/legs).",
          "audioText": "これは履くです",
          "scrambleTokens": [
            "です",
            "ではありません",
            "これは",
            "履く",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "履く",
            "です"
          ],
          "correctAnswer": "これは履くです"
        },
        {
          "id": "u6_l9_5",
          "type": "speak",
          "prompt": "レジ",
          "furigana": "レジ",
          "romaji": "reji",
          "english": "Pronounce: Cash register",
          "audioText": "レジ",
          "targetSpeech": "レジ",
          "options": [
            "Cash register",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "レジ"
        },
        {
          "id": "u6_l9_6",
          "type": "dictate",
          "prompt": "レジをお願いします",
          "furigana": "レジをおねがいします",
          "romaji": "reji o onegaishimasu.",
          "english": "Cash register, please.",
          "audioText": "レジをお願いします",
          "dictateTokens": [
            "です",
            "を",
            "お願いします",
            "レジ",
            "ありがとう"
          ],
          "dictateSolution": [
            "レジ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "レジをお願いします"
        },
        {
          "id": "u6_l9_7",
          "type": "match",
          "prompt": "着る・履く・レジ・袋",
          "furigana": "きる・はく・レジ・ふくろ",
          "romaji": "kiru, haku, reji, fukuro",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "きる",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "着る",
              "right": "To wear (upper body)",
              "furigana": "きる",
              "romaji": "kiru"
            },
            {
              "id": "p_1",
              "left": "履く",
              "right": "To wear (feet/legs)",
              "furigana": "はく",
              "romaji": "haku"
            },
            {
              "id": "p_2",
              "left": "レジ",
              "right": "Cash register",
              "furigana": "レジ",
              "romaji": "reji"
            },
            {
              "id": "p_3",
              "left": "袋",
              "right": "Shopping bag",
              "furigana": "ふくろ",
              "romaji": "fukuro"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l9_8",
          "type": "dialogue",
          "prompt": "これいくらですか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "これいくらですか？",
          "furigana": "これいくらですか？",
          "romaji": "Kore ikura desu ka?",
          "english": "Customer: Excuse me, how much is this?",
          "audioText": "これいくらですか？",
          "dialogueOptions": [
            "税込で3,500円でございます。",
            "右に曲がります",
            "お水をお願いします",
            "はい、そうです"
          ],
          "options": [
            "税込で3,500円でございます。",
            "右に曲がります",
            "お水をお願いします",
            "はい、そうです"
          ],
          "correctAnswer": "税込で3,500円でございます。"
        }
      ]
    },
    {
      "id": "u6_l10",
      "unitId": "unit_6",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Shopping bag & Tax-free / duty-free",
      "titleJp": "袋・免税",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "袋",
        "免税",
        "パスポート"
      ],
      "kanjiKeywords": [
        "袋",
        "免",
        "税"
      ],
      "items": [
        {
          "id": "u6_l10_1",
          "type": "listen",
          "prompt": "袋",
          "furigana": "ふくろ",
          "romaji": "fukuro",
          "english": "Shopping bag",
          "audioText": "ふくろ",
          "options": [
            "Watch / clock",
            "To wear (feet/legs)",
            "Shopping bag",
            "This (near speaker)"
          ],
          "correctAnswer": "Shopping bag"
        },
        {
          "id": "u6_l10_2",
          "type": "spell",
          "prompt": "袋",
          "furigana": "ふくろ",
          "romaji": "fukuro",
          "english": "Build 'Shopping bag'",
          "audioText": "ふくろ",
          "tileBank": [
            "ろ",
            "ぬ",
            "あ",
            "へ",
            "く",
            "は",
            "ふ",
            "そ"
          ],
          "correctAnswer": "ふくろ"
        },
        {
          "id": "u6_l10_3",
          "type": "cloze",
          "prompt": "私は免税がすきです",
          "furigana": "わたしはめんぜいがすきです",
          "romaji": "Watashi wa menzei ga suki desu.",
          "english": "Fill in the blank with the correct particle for Tax-free / duty-free.",
          "audioText": "免税",
          "clozeSentence": "これは免税 {{BLANK}} す。",
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
          "id": "u6_l10_4",
          "type": "scramble",
          "prompt": "これは免税です",
          "furigana": "これはめんぜいです",
          "romaji": "Kore wa menzei desu.",
          "english": "This is Tax-free / duty-free.",
          "audioText": "これは免税です",
          "scrambleTokens": [
            "これは",
            "です",
            "それ",
            "ではありません",
            "免税"
          ],
          "scrambleSolution": [
            "これは",
            "免税",
            "です"
          ],
          "correctAnswer": "これは免税です"
        },
        {
          "id": "u6_l10_5",
          "type": "speak",
          "prompt": "パスポート",
          "furigana": "パスポート",
          "romaji": "pasupooto",
          "english": "Pronounce: Passport",
          "audioText": "パスポート",
          "targetSpeech": "パスポート",
          "options": [
            "Passport",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "パスポート"
        },
        {
          "id": "u6_l10_6",
          "type": "dictate",
          "prompt": "パスポートをお願いします",
          "furigana": "パスポートをおねがいします",
          "romaji": "pasupooto o onegaishimasu.",
          "english": "Passport, please.",
          "audioText": "パスポートをお願いします",
          "dictateTokens": [
            "を",
            "です",
            "ありがとう",
            "お願いします",
            "パスポート"
          ],
          "dictateSolution": [
            "パスポート",
            "を",
            "お願いします"
          ],
          "correctAnswer": "パスポートをお願いします"
        },
        {
          "id": "u6_l10_7",
          "type": "match",
          "prompt": "袋・免税・パスポート・現金",
          "furigana": "ふくろ・めんぜい・パスポート・げんきん",
          "romaji": "fukuro, menzei, pasupooto, genkin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ふくろ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "袋",
              "right": "Shopping bag",
              "furigana": "ふくろ",
              "romaji": "fukuro"
            },
            {
              "id": "p_1",
              "left": "免税",
              "right": "Tax-free / duty-free",
              "furigana": "めんぜい",
              "romaji": "menzei"
            },
            {
              "id": "p_2",
              "left": "パスポート",
              "right": "Passport",
              "furigana": "パスポート",
              "romaji": "pasupooto"
            },
            {
              "id": "p_3",
              "left": "現金",
              "right": "Cash",
              "furigana": "げんきん",
              "romaji": "genkin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l10_8",
          "type": "dialogue",
          "prompt": "着てみてもいいですか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "着てみてもいいですか？",
          "furigana": "着てみてもいいですか？",
          "romaji": "Kite mite mo ii desu ka?",
          "english": "Customer: May I try on this shirt?",
          "audioText": "着てみてもいいですか？",
          "dialogueOptions": [
            "はい、試着室はこちらでございます！",
            "駅はあそこです",
            "ごちそうさまでした",
            "いいえ、知りません"
          ],
          "options": [
            "はい、試着室はこちらでございます！",
            "駅はあそこです",
            "ごちそうさまでした",
            "いいえ、知りません"
          ],
          "correctAnswer": "はい、試着室はこちらでございます！"
        }
      ]
    },
    {
      "id": "u6_l11",
      "unitId": "unit_6",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Cash & Credit card",
      "titleJp": "現金・クレジットカード",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "現金",
        "クレジットカード",
        "割引"
      ],
      "kanjiKeywords": [
        "現",
        "金",
        "割",
        "引"
      ],
      "items": [
        {
          "id": "u6_l11_1",
          "type": "listen",
          "prompt": "現金",
          "furigana": "げんきん",
          "romaji": "genkin",
          "english": "Cash",
          "audioText": "げんきん",
          "options": [
            "To show",
            "Souvenir / gift",
            "Cash",
            "Sale"
          ],
          "correctAnswer": "Cash"
        },
        {
          "id": "u6_l11_2",
          "type": "spell",
          "prompt": "現金",
          "furigana": "げんきん",
          "romaji": "genkin",
          "english": "Build 'Cash'",
          "audioText": "げんきん",
          "tileBank": [
            "も",
            "し",
            "き",
            "う",
            "い",
            "ん",
            "げ",
            "ん"
          ],
          "correctAnswer": "げんきん"
        },
        {
          "id": "u6_l11_3",
          "type": "cloze",
          "prompt": "私はクレジットカードがすきです",
          "furigana": "わたしはクレジットカードがすきです",
          "romaji": "Watashi wa kurejitto kaado ga suki desu.",
          "english": "Fill in the blank with the correct particle for Credit card.",
          "audioText": "クレジットカード",
          "clozeSentence": "これはクレジットカード {{BLANK}} す。",
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
          "id": "u6_l11_4",
          "type": "scramble",
          "prompt": "これはクレジットカードです",
          "furigana": "これはクレジットカードです",
          "romaji": "Kore wa kurejitto kaado desu.",
          "english": "This is Credit card.",
          "audioText": "これはクレジットカードです",
          "scrambleTokens": [
            "それ",
            "です",
            "これは",
            "ではありません",
            "クレジットカード"
          ],
          "scrambleSolution": [
            "これは",
            "クレジットカード",
            "です"
          ],
          "correctAnswer": "これはクレジットカードです"
        },
        {
          "id": "u6_l11_5",
          "type": "speak",
          "prompt": "割引",
          "furigana": "わりびき",
          "romaji": "waribiki",
          "english": "Pronounce: Discount",
          "audioText": "わりびき",
          "targetSpeech": "割引",
          "options": [
            "Discount",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "割引"
        },
        {
          "id": "u6_l11_6",
          "type": "dictate",
          "prompt": "割引をお願いします",
          "furigana": "わりびきをおねがいします",
          "romaji": "waribiki o onegaishimasu.",
          "english": "Discount, please.",
          "audioText": "割引をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "お願いします",
            "ありがとう",
            "割引"
          ],
          "dictateSolution": [
            "割引",
            "を",
            "お願いします"
          ],
          "correctAnswer": "割引をお願いします"
        },
        {
          "id": "u6_l11_7",
          "type": "match",
          "prompt": "現金・クレジットカード・割引・セール",
          "furigana": "げんきん・クレジットカード・わりびき・セール",
          "romaji": "genkin, kurejitto kaado, waribiki, seeru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "げんきん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "現金",
              "right": "Cash",
              "furigana": "げんきん",
              "romaji": "genkin"
            },
            {
              "id": "p_1",
              "left": "クレジットカード",
              "right": "Credit card",
              "furigana": "クレジットカード",
              "romaji": "kurejitto kaado"
            },
            {
              "id": "p_2",
              "left": "割引",
              "right": "Discount",
              "furigana": "わりびき",
              "romaji": "waribiki"
            },
            {
              "id": "p_3",
              "left": "セール",
              "right": "Sale",
              "furigana": "セール",
              "romaji": "seeru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l11_8",
          "type": "dialogue",
          "prompt": "大きいサイズはありますか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "大きいサイズはありますか？",
          "furigana": "大きいサイズはありますか？",
          "romaji": "Ookii saizu wa arimasu ka?",
          "english": "Customer: Do you have a slightly larger size?",
          "audioText": "大きいサイズはありますか？",
          "dialogueOptions": [
            "少々お待ちください、在庫をお調べいたします。",
            "美味しかったです",
            "はじめまして",
            "また来ます"
          ],
          "options": [
            "少々お待ちください、在庫をお調べいたします。",
            "美味しかったです",
            "はじめまして",
            "また来ます"
          ],
          "correctAnswer": "少々お待ちください、在庫をお調べいたします。"
        }
      ]
    },
    {
      "id": "u6_l12",
      "unitId": "unit_6",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Sale & Souvenir / gift",
      "titleJp": "セール・お土産",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "セール",
        "お土産",
        "これにします"
      ],
      "kanjiKeywords": [
        "土",
        "産"
      ],
      "items": [
        {
          "id": "u6_l12_1",
          "type": "listen",
          "prompt": "セール",
          "furigana": "セール",
          "romaji": "seeru",
          "english": "Sale",
          "audioText": "セール",
          "options": [
            "Sale",
            "Shirt",
            "Expensive",
            "Black"
          ],
          "correctAnswer": "Sale"
        },
        {
          "id": "u6_l12_2",
          "type": "spell",
          "prompt": "セール",
          "furigana": "セール",
          "romaji": "seeru",
          "english": "Build 'Sale'",
          "audioText": "セール",
          "tileBank": [
            "ほ",
            "れ",
            "ル",
            "け",
            "セ",
            "み",
            "ー",
            "ゆ"
          ],
          "correctAnswer": "セール"
        },
        {
          "id": "u6_l12_3",
          "type": "cloze",
          "prompt": "私はお土産がすきです",
          "furigana": "わたしはおみやげがすきです",
          "romaji": "Watashi wa omiyage ga suki desu.",
          "english": "Fill in the blank with the correct particle for Souvenir / gift.",
          "audioText": "お土産",
          "clozeSentence": "私はお土産 {{BLANK}} 好きです。",
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
          "id": "u6_l12_4",
          "type": "scramble",
          "prompt": "これはお土産です",
          "furigana": "これはおみやげです",
          "romaji": "Kore wa omiyage desu.",
          "english": "This is Souvenir / gift.",
          "audioText": "これはお土産です",
          "scrambleTokens": [
            "です",
            "それ",
            "ではありません",
            "お土産",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "お土産",
            "です"
          ],
          "correctAnswer": "これはお土産です"
        },
        {
          "id": "u6_l12_5",
          "type": "speak",
          "prompt": "これにします",
          "furigana": "これにします",
          "romaji": "kore ni shimasu",
          "english": "Pronounce: I will take this one",
          "audioText": "これにします",
          "targetSpeech": "これにします",
          "options": [
            "I will take this one",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "これにします"
        },
        {
          "id": "u6_l12_6",
          "type": "dictate",
          "prompt": "これにしますをお願いします",
          "furigana": "これにしますをおねがいします",
          "romaji": "kore ni shimasu o onegaishimasu.",
          "english": "I will take this one, please.",
          "audioText": "これにしますをお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "これにします",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "これにします",
            "を",
            "お願いします"
          ],
          "correctAnswer": "これにしますをお願いします"
        },
        {
          "id": "u6_l12_7",
          "type": "match",
          "prompt": "セール・お土産・これにします・いくら",
          "furigana": "セール・おみやげ・これにします・いくら",
          "romaji": "seeru, omiyage, kore ni shimasu, ikura",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "セール",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "セール",
              "right": "Sale",
              "furigana": "セール",
              "romaji": "seeru"
            },
            {
              "id": "p_1",
              "left": "お土産",
              "right": "Souvenir / gift",
              "furigana": "おみやげ",
              "romaji": "omiyage"
            },
            {
              "id": "p_2",
              "left": "これにします",
              "right": "I will take this one",
              "furigana": "これにします",
              "romaji": "kore ni shimasu"
            },
            {
              "id": "p_3",
              "left": "いくら",
              "right": "How much (cost)",
              "furigana": "いくら",
              "romaji": "ikura"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l12_8",
          "type": "dialogue",
          "prompt": "袋はお付けしますか？",
          "dialogueSpeaker": "店員",
          "dialoguePrompt": "袋はお付けしますか？",
          "furigana": "袋はお付けしますか？",
          "romaji": "Fukuro wa otsuke shimasu ka?",
          "english": "Clerk: Would you like a bag?",
          "audioText": "袋はお付けしますか？",
          "dialogueOptions": [
            "はい、1枚お願いします。",
            "さようなら",
            "いいえ、日本人です",
            "お腹が痛いです"
          ],
          "options": [
            "はい、1枚お願いします。",
            "さようなら",
            "いいえ、日本人です",
            "お腹が痛いです"
          ],
          "correctAnswer": "はい、1枚お願いします。"
        }
      ]
    },
    {
      "id": "u6_l13",
      "unitId": "unit_6",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "How much (cost) & This (near speaker)",
      "titleJp": "いくら・これ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "いくら",
        "これ",
        "それ"
      ],
      "kanjiKeywords": [],
      "items": [
        {
          "id": "u6_l13_1",
          "type": "listen",
          "prompt": "いくら",
          "furigana": "いくら",
          "romaji": "ikura",
          "english": "How much (cost)",
          "audioText": "いくら",
          "options": [
            "How much (cost)",
            "Blue",
            "Shirt",
            "Bag / backpack"
          ],
          "correctAnswer": "How much (cost)"
        },
        {
          "id": "u6_l13_2",
          "type": "spell",
          "prompt": "いくら",
          "furigana": "いくら",
          "romaji": "ikura",
          "english": "Build 'How much (cost)'",
          "audioText": "いくら",
          "tileBank": [
            "い",
            "や",
            "し",
            "ら",
            "ぬ",
            "ち",
            "を",
            "く"
          ],
          "correctAnswer": "いくら"
        },
        {
          "id": "u6_l13_3",
          "type": "cloze",
          "prompt": "私はこれがすきです",
          "furigana": "わたしはこれがすきです",
          "romaji": "Watashi wa kore ga suki desu.",
          "english": "Fill in the blank with the correct particle for This (near speaker).",
          "audioText": "これ",
          "clozeSentence": "これはこれ {{BLANK}} す。",
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
          "id": "u6_l13_4",
          "type": "scramble",
          "prompt": "これはこれです",
          "furigana": "これはこれです",
          "romaji": "Kore wa kore desu.",
          "english": "This is This (near speaker).",
          "audioText": "これはこれです",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "これは",
            "これ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "これ",
            "です"
          ],
          "correctAnswer": "これはこれです"
        },
        {
          "id": "u6_l13_5",
          "type": "speak",
          "prompt": "それ",
          "furigana": "それ",
          "romaji": "sore",
          "english": "Pronounce: That (near listener)",
          "audioText": "それ",
          "targetSpeech": "それ",
          "options": [
            "That (near listener)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "それ"
        },
        {
          "id": "u6_l13_6",
          "type": "dictate",
          "prompt": "それをお願いします",
          "furigana": "それをおねがいします",
          "romaji": "sore o onegaishimasu.",
          "english": "That (near listener), please.",
          "audioText": "それをお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "ありがとう",
            "それ",
            "です"
          ],
          "dictateSolution": [
            "それ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "それをお願いします"
        },
        {
          "id": "u6_l13_7",
          "type": "match",
          "prompt": "いくら・これ・それ・あれ",
          "furigana": "いくら・これ・それ・あれ",
          "romaji": "ikura, kore, sore, are",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いくら",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "いくら",
              "right": "How much (cost)",
              "furigana": "いくら",
              "romaji": "ikura"
            },
            {
              "id": "p_1",
              "left": "これ",
              "right": "This (near speaker)",
              "furigana": "これ",
              "romaji": "kore"
            },
            {
              "id": "p_2",
              "left": "それ",
              "right": "That (near listener)",
              "furigana": "それ",
              "romaji": "sore"
            },
            {
              "id": "p_3",
              "left": "あれ",
              "right": "That over there",
              "furigana": "あれ",
              "romaji": "are"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l13_8",
          "type": "dialogue",
          "prompt": "これいくらですか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "これいくらですか？",
          "furigana": "これいくらですか？",
          "romaji": "Kore ikura desu ka?",
          "english": "Customer: Excuse me, how much is this?",
          "audioText": "これいくらですか？",
          "dialogueOptions": [
            "税込で3,500円でございます。",
            "右に曲がります",
            "お水をお願いします",
            "はい、そうです"
          ],
          "options": [
            "税込で3,500円でございます。",
            "右に曲がります",
            "お水をお願いします",
            "はい、そうです"
          ],
          "correctAnswer": "税込で3,500円でございます。"
        }
      ]
    },
    {
      "id": "u6_l14",
      "unitId": "unit_6",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "That over there & Which one",
      "titleJp": "あれ・どれ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "あれ",
        "どれ",
        "高い"
      ],
      "kanjiKeywords": [
        "高"
      ],
      "items": [
        {
          "id": "u6_l14_1",
          "type": "listen",
          "prompt": "あれ",
          "furigana": "あれ",
          "romaji": "are",
          "english": "That over there",
          "audioText": "あれ",
          "options": [
            "Expensive",
            "To wear (upper body)",
            "Cash register",
            "That over there"
          ],
          "correctAnswer": "That over there"
        },
        {
          "id": "u6_l14_2",
          "type": "spell",
          "prompt": "あれ",
          "furigana": "あれ",
          "romaji": "are",
          "english": "Build 'That over there'",
          "audioText": "あれ",
          "tileBank": [
            "い",
            "ね",
            "か",
            "た",
            "れ",
            "ふ",
            "け",
            "あ"
          ],
          "correctAnswer": "あれ"
        },
        {
          "id": "u6_l14_3",
          "type": "cloze",
          "prompt": "私はどれがすきです",
          "furigana": "わたしはどれがすきです",
          "romaji": "Watashi wa dore ga suki desu.",
          "english": "Fill in the blank with the correct particle for Which one.",
          "audioText": "どれ",
          "clozeSentence": "これはどれ {{BLANK}} す。",
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
          "id": "u6_l14_4",
          "type": "scramble",
          "prompt": "これはどれです",
          "furigana": "これはどれです",
          "romaji": "Kore wa dore desu.",
          "english": "This is Which one.",
          "audioText": "これはどれです",
          "scrambleTokens": [
            "どれ",
            "これは",
            "ではありません",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "どれ",
            "です"
          ],
          "correctAnswer": "これはどれです"
        },
        {
          "id": "u6_l14_5",
          "type": "speak",
          "prompt": "高い",
          "furigana": "たかい",
          "romaji": "takai",
          "english": "Pronounce: Expensive",
          "audioText": "たかい",
          "targetSpeech": "高い",
          "options": [
            "Expensive",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "高い"
        },
        {
          "id": "u6_l14_6",
          "type": "dictate",
          "prompt": "高いをお願いします",
          "furigana": "たかいをおねがいします",
          "romaji": "takai o onegaishimasu.",
          "english": "Expensive, please.",
          "audioText": "高いをお願いします",
          "dictateTokens": [
            "高い",
            "です",
            "ありがとう",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "高い",
            "を",
            "お願いします"
          ],
          "correctAnswer": "高いをお願いします"
        },
        {
          "id": "u6_l14_7",
          "type": "match",
          "prompt": "あれ・どれ・高い・安い",
          "furigana": "あれ・どれ・たかい・やすい",
          "romaji": "are, dore, takai, yasui",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "あれ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "あれ",
              "right": "That over there",
              "furigana": "あれ",
              "romaji": "are"
            },
            {
              "id": "p_1",
              "left": "どれ",
              "right": "Which one",
              "furigana": "どれ",
              "romaji": "dore"
            },
            {
              "id": "p_2",
              "left": "高い",
              "right": "Expensive",
              "furigana": "たかい",
              "romaji": "takai"
            },
            {
              "id": "p_3",
              "left": "安い",
              "right": "Cheap / inexpensive",
              "furigana": "やすい",
              "romaji": "yasui"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l14_8",
          "type": "dialogue",
          "prompt": "着てみてもいいですか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "着てみてもいいですか？",
          "furigana": "着てみてもいいですか？",
          "romaji": "Kite mite mo ii desu ka?",
          "english": "Customer: May I try on this shirt?",
          "audioText": "着てみてもいいですか？",
          "dialogueOptions": [
            "はい、試着室はこちらでございます！",
            "駅はあそこです",
            "ごちそうさまでした",
            "いいえ、知りません"
          ],
          "options": [
            "はい、試着室はこちらでございます！",
            "駅はあそこです",
            "ごちそうさまでした",
            "いいえ、知りません"
          ],
          "correctAnswer": "はい、試着室はこちらでございます！"
        }
      ]
    },
    {
      "id": "u6_l15",
      "unitId": "unit_6",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 6 Master Exam",
      "iconType": "test",
      "title": "Unit 6 Master Exam",
      "titleJp": "第6週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "安い",
        "大きい",
        "小さい"
      ],
      "kanjiKeywords": [
        "安",
        "大",
        "小"
      ],
      "items": [
        {
          "id": "u6_l15_1",
          "type": "listen",
          "prompt": "安い",
          "furigana": "やすい",
          "romaji": "yasui",
          "english": "Cheap / inexpensive",
          "audioText": "やすい",
          "options": [
            "I will take this one",
            "Cheap / inexpensive",
            "Discount",
            "That over there"
          ],
          "correctAnswer": "Cheap / inexpensive"
        },
        {
          "id": "u6_l15_2",
          "type": "spell",
          "prompt": "安い",
          "furigana": "やすい",
          "romaji": "yasui",
          "english": "Build 'Cheap / inexpensive'",
          "audioText": "やすい",
          "tileBank": [
            "よ",
            "ら",
            "ね",
            "ち",
            "う",
            "い",
            "や",
            "す"
          ],
          "correctAnswer": "やすい"
        },
        {
          "id": "u6_l15_3",
          "type": "cloze",
          "prompt": "私は大きいがすきです",
          "furigana": "わたしはおおきいがすきです",
          "romaji": "Watashi wa ookii ga suki desu.",
          "english": "Fill in the blank with the correct particle for Big / large.",
          "audioText": "大きい",
          "clozeSentence": "これは大きい {{BLANK}} す。",
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
          "id": "u6_l15_4",
          "type": "scramble",
          "prompt": "これは大きいです",
          "furigana": "これはおおきいです",
          "romaji": "Kore wa ookii desu.",
          "english": "This is Big / large.",
          "audioText": "これは大きいです",
          "scrambleTokens": [
            "です",
            "大きい",
            "これは",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "大きい",
            "です"
          ],
          "correctAnswer": "これは大きいです"
        },
        {
          "id": "u6_l15_5",
          "type": "speak",
          "prompt": "小さい",
          "furigana": "ちいさい",
          "romaji": "chiisai",
          "english": "Pronounce: Small",
          "audioText": "ちいさい",
          "targetSpeech": "小さい",
          "options": [
            "Small",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "小さい"
        },
        {
          "id": "u6_l15_6",
          "type": "dictate",
          "prompt": "小さいをお願いします",
          "furigana": "ちいさいをおねがいします",
          "romaji": "chiisai o onegaishimasu.",
          "english": "Small, please.",
          "audioText": "小さいをお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "小さい",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "小さい",
            "を",
            "お願いします"
          ],
          "correctAnswer": "小さいをお願いします"
        },
        {
          "id": "u6_l15_7",
          "type": "match",
          "prompt": "安い・大きい・小さい・新しい",
          "furigana": "やすい・おおきい・ちいさい・あたらしい",
          "romaji": "yasui, ookii, chiisai, atarashii",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "やすい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "安い",
              "right": "Cheap / inexpensive",
              "furigana": "やすい",
              "romaji": "yasui"
            },
            {
              "id": "p_1",
              "left": "大きい",
              "right": "Big / large",
              "furigana": "おおきい",
              "romaji": "ookii"
            },
            {
              "id": "p_2",
              "left": "小さい",
              "right": "Small",
              "furigana": "ちいさい",
              "romaji": "chiisai"
            },
            {
              "id": "p_3",
              "left": "新しい",
              "right": "New",
              "furigana": "あたらしい",
              "romaji": "atarashii"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u6_l15_8",
          "type": "dialogue",
          "prompt": "大きいサイズはありますか？",
          "dialogueSpeaker": "客",
          "dialoguePrompt": "大きいサイズはありますか？",
          "furigana": "大きいサイズはありますか？",
          "romaji": "Ookii saizu wa arimasu ka?",
          "english": "Customer: Do you have a slightly larger size?",
          "audioText": "大きいサイズはありますか？",
          "dialogueOptions": [
            "少々お待ちください、在庫をお調べいたします。",
            "美味しかったです",
            "はじめまして",
            "また来ます"
          ],
          "options": [
            "少々お待ちください、在庫をお調べいたします。",
            "美味しかったです",
            "はじめまして",
            "また来ます"
          ],
          "correctAnswer": "少々お待ちください、在庫をお調べいたします。"
        }
      ]
    }
  ],
  "revisionGate": {
    "id": "gate_unit_6",
    "unitId": "unit_6",
    "title": "Unit 6 Mastery Checkpoint",
    "titleJp": "第6週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u6_l1_1",
        "type": "listen",
        "prompt": "いくら",
        "furigana": "いくら",
        "romaji": "ikura",
        "english": "How much (cost)",
        "audioText": "いくら",
        "options": [
          "Tax-free / duty-free",
          "Souvenir / gift",
          "Expensive",
          "How much (cost)"
        ],
        "correctAnswer": "How much (cost)"
      },
      {
        "id": "u6_l1_2",
        "type": "spell",
        "prompt": "いくら",
        "furigana": "いくら",
        "romaji": "ikura",
        "english": "Build 'How much (cost)'",
        "audioText": "いくら",
        "tileBank": [
          "え",
          "ち",
          "め",
          "い",
          "の",
          "ら",
          "く",
          "わ"
        ],
        "correctAnswer": "いくら"
      },
      {
        "id": "u6_l3_1",
        "type": "listen",
        "prompt": "安い",
        "furigana": "やすい",
        "romaji": "yasui",
        "english": "Cheap / inexpensive",
        "audioText": "やすい",
        "options": [
          "I will take this one",
          "Cheap / inexpensive",
          "To show",
          "This (near speaker)"
        ],
        "correctAnswer": "Cheap / inexpensive"
      },
      {
        "id": "u6_l3_2",
        "type": "spell",
        "prompt": "安い",
        "furigana": "やすい",
        "romaji": "yasui",
        "english": "Build 'Cheap / inexpensive'",
        "audioText": "やすい",
        "tileBank": [
          "し",
          "や",
          "と",
          "い",
          "は",
          "る",
          "す",
          "ぬ"
        ],
        "correctAnswer": "やすい"
      },
      {
        "id": "u6_l5_1",
        "type": "listen",
        "prompt": "青",
        "furigana": "あお",
        "romaji": "ao",
        "english": "Blue",
        "audioText": "あお",
        "options": [
          "Red",
          "Blue",
          "Watch / clock",
          "Cheap / inexpensive"
        ],
        "correctAnswer": "Blue"
      },
      {
        "id": "u6_l5_2",
        "type": "spell",
        "prompt": "青",
        "furigana": "あお",
        "romaji": "ao",
        "english": "Build 'Blue'",
        "audioText": "あお",
        "tileBank": [
          "た",
          "ふ",
          "ね",
          "も",
          "す",
          "あ",
          "は",
          "お"
        ],
        "correctAnswer": "あお"
      },
      {
        "id": "u6_l7_1",
        "type": "listen",
        "prompt": "鞄",
        "furigana": "かばん",
        "romaji": "kaban",
        "english": "Bag / backpack",
        "audioText": "かばん",
        "options": [
          "Expensive",
          "Small",
          "Bag / backpack",
          "Fitting room"
        ],
        "correctAnswer": "Bag / backpack"
      },
      {
        "id": "u6_l7_2",
        "type": "spell",
        "prompt": "鞄",
        "furigana": "かばん",
        "romaji": "kaban",
        "english": "Build 'Bag / backpack'",
        "audioText": "かばん",
        "tileBank": [
          "ん",
          "さ",
          "ば",
          "も",
          "ち",
          "こ",
          "か",
          "ふ"
        ],
        "correctAnswer": "かばん"
      },
      {
        "id": "u6_l9_1",
        "type": "listen",
        "prompt": "着る",
        "furigana": "きる",
        "romaji": "kiru",
        "english": "To wear (upper body)",
        "audioText": "きる",
        "options": [
          "To wear (upper body)",
          "Small",
          "Big / large",
          "Which one"
        ],
        "correctAnswer": "To wear (upper body)"
      },
      {
        "id": "u6_l9_2",
        "type": "spell",
        "prompt": "着る",
        "furigana": "きる",
        "romaji": "kiru",
        "english": "Build 'To wear (upper body)'",
        "audioText": "きる",
        "tileBank": [
          "ま",
          "す",
          "し",
          "き",
          "る",
          "ゆ",
          "つ",
          "わ"
        ],
        "correctAnswer": "きる"
      },
      {
        "id": "u6_l11_1",
        "type": "listen",
        "prompt": "現金",
        "furigana": "げんきん",
        "romaji": "genkin",
        "english": "Cash",
        "audioText": "げんきん",
        "options": [
          "To show",
          "Souvenir / gift",
          "Cash",
          "Sale"
        ],
        "correctAnswer": "Cash"
      },
      {
        "id": "u6_l11_2",
        "type": "spell",
        "prompt": "現金",
        "furigana": "げんきん",
        "romaji": "genkin",
        "english": "Build 'Cash'",
        "audioText": "げんきん",
        "tileBank": [
          "も",
          "し",
          "き",
          "う",
          "い",
          "ん",
          "げ",
          "ん"
        ],
        "correctAnswer": "げんきん"
      }
    ]
  }
};
