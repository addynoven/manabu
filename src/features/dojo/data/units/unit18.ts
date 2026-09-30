import type { DojoUnit } from "../../models/dojo.model";

export const unit18: DojoUnit = {
  "id": "unit_18",
  "unitNumber": 18,
  "title": "Troubleshooting & Seeking Advice",
  "titleJp": "トラブル解決と相談",
  "description": "Handle unexpected mishaps (lost items, transit delays), ask for counsel, and offer tactful suggestions.",
  "icon": "🛠️",
  "themeColor": "#059669",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u18_l1",
      "unitId": "unit_18",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Trouble / incident & Lost property",
      "titleJp": "トラブル・落とし物",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "トラブル",
        "落とし物",
        "遅延"
      ],
      "kanjiKeywords": [
        "落",
        "物",
        "遅",
        "延"
      ],
      "items": [
        {
          "id": "u18_l1_1",
          "type": "listen",
          "prompt": "トラブル",
          "furigana": "トラブル",
          "romaji": "toraburu",
          "english": "Trouble / incident",
          "audioText": "トラブル",
          "options": [
            "Reissue (card/ticket)",
            "Inquiry / contact",
            "Confirming Consultation",
            "Trouble / incident"
          ],
          "correctAnswer": "Trouble / incident"
        },
        {
          "id": "u18_l1_2",
          "type": "spell",
          "prompt": "トラブル",
          "furigana": "トラブル",
          "romaji": "toraburu",
          "english": "Build 'Trouble / incident'",
          "audioText": "トラブル",
          "tileBank": [
            "ル",
            "は",
            "ブ",
            "ぬ",
            "ね",
            "ト",
            "け",
            "ラ"
          ],
          "correctAnswer": "トラブル"
        },
        {
          "id": "u18_l1_3",
          "type": "cloze",
          "prompt": "私は落とし物がすきです",
          "furigana": "わたしはおとしものがすきです",
          "romaji": "Watashi wa otoshimono ga suki desu.",
          "english": "Fill in the blank with the correct particle for Lost property.",
          "audioText": "落とし物",
          "clozeSentence": "これは落とし物 {{BLANK}} す。",
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
          "id": "u18_l1_4",
          "type": "scramble",
          "prompt": "これは落とし物です",
          "furigana": "これはおとしものです",
          "romaji": "Kore wa otoshimono desu.",
          "english": "This is Lost property.",
          "audioText": "これは落とし物です",
          "scrambleTokens": [
            "落とし物",
            "それ",
            "です",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "落とし物",
            "です"
          ],
          "correctAnswer": "これは落とし物です"
        },
        {
          "id": "u18_l1_5",
          "type": "speak",
          "prompt": "遅延",
          "furigana": "ちえん",
          "romaji": "chien",
          "english": "Pronounce: Train / flight delay",
          "audioText": "ちえん",
          "targetSpeech": "遅延",
          "options": [
            "Train / flight delay",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "遅延"
        },
        {
          "id": "u18_l1_6",
          "type": "dictate",
          "prompt": "遅延をお願いします",
          "furigana": "ちえんをおねがいします",
          "romaji": "chien o onegaishimasu.",
          "english": "Train / flight delay, please.",
          "audioText": "遅延をお願いします",
          "dictateTokens": [
            "です",
            "遅延",
            "を",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "遅延",
            "を",
            "お願いします"
          ],
          "correctAnswer": "遅延をお願いします"
        },
        {
          "id": "u18_l1_7",
          "type": "match",
          "prompt": "トラブル・落とし物・遅延・紛失",
          "furigana": "トラブル・おとしもの・ちえん・ふんしつ",
          "romaji": "toraburu, otoshimono, chien, funshitsu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "トラブル",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "トラブル",
              "right": "Trouble / incident",
              "furigana": "トラブル",
              "romaji": "toraburu"
            },
            {
              "id": "p_1",
              "left": "落とし物",
              "right": "Lost property",
              "furigana": "おとしもの",
              "romaji": "otoshimono"
            },
            {
              "id": "p_2",
              "left": "遅延",
              "right": "Train / flight delay",
              "furigana": "ちえん",
              "romaji": "chien"
            },
            {
              "id": "p_3",
              "left": "紛失",
              "right": "Loss / misplacement",
              "furigana": "ふんしつ",
              "romaji": "funshitsu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l1_8",
          "type": "dialogue",
          "prompt": "トラブルについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "トラブルについて教えていただけますか？",
          "furigana": "トラブルについて教えていただけますか？",
          "romaji": "toraburu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Trouble / incident?",
          "audioText": "トラブルについて教えていただけますか？",
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
      "id": "u18_l2",
      "unitId": "unit_18",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Loss / misplacement & Resolution / solution",
      "titleJp": "紛失・解決",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "紛失",
        "解決",
        "相談"
      ],
      "kanjiKeywords": [
        "紛",
        "失",
        "解",
        "決",
        "相",
        "談"
      ],
      "items": [
        {
          "id": "u18_l2_1",
          "type": "listen",
          "prompt": "紛失",
          "furigana": "ふんしつ",
          "romaji": "funshitsu",
          "english": "Loss / misplacement",
          "audioText": "ふんしつ",
          "options": [
            "Inquiry / contact",
            "Lost property",
            "Trouble / incident",
            "Loss / misplacement"
          ],
          "correctAnswer": "Loss / misplacement"
        },
        {
          "id": "u18_l2_2",
          "type": "spell",
          "prompt": "紛失",
          "furigana": "ふんしつ",
          "romaji": "funshitsu",
          "english": "Build 'Loss / misplacement'",
          "audioText": "ふんしつ",
          "tileBank": [
            "ん",
            "さ",
            "つ",
            "か",
            "し",
            "ふ",
            "て",
            "く"
          ],
          "correctAnswer": "ふんしつ"
        },
        {
          "id": "u18_l2_3",
          "type": "cloze",
          "prompt": "私は解決がすきです",
          "furigana": "わたしはかいけつがすきです",
          "romaji": "Watashi wa kaiketsu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Resolution / solution.",
          "audioText": "解決",
          "clozeSentence": "これは解決 {{BLANK}} す。",
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
          "id": "u18_l2_4",
          "type": "scramble",
          "prompt": "これは解決です",
          "furigana": "これはかいけつです",
          "romaji": "Kore wa kaiketsu desu.",
          "english": "This is Resolution / solution.",
          "audioText": "これは解決です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "それ",
            "これは",
            "解決"
          ],
          "scrambleSolution": [
            "これは",
            "解決",
            "です"
          ],
          "correctAnswer": "これは解決です"
        },
        {
          "id": "u18_l2_5",
          "type": "speak",
          "prompt": "相談",
          "furigana": "そうだん",
          "romaji": "soudan",
          "english": "Pronounce: Consultation",
          "audioText": "そうだん",
          "targetSpeech": "相談",
          "options": [
            "Consultation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "相談"
        },
        {
          "id": "u18_l2_6",
          "type": "dictate",
          "prompt": "相談をお願いします",
          "furigana": "そうだんをおねがいします",
          "romaji": "soudan o onegaishimasu.",
          "english": "Consultation, please.",
          "audioText": "相談をお願いします",
          "dictateTokens": [
            "相談",
            "です",
            "お願いします",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "相談",
            "を",
            "お願いします"
          ],
          "correctAnswer": "相談をお願いします"
        },
        {
          "id": "u18_l2_7",
          "type": "match",
          "prompt": "紛失・解決・相談・助言",
          "furigana": "ふんしつ・かいけつ・そうだん・じょげん",
          "romaji": "funshitsu, kaiketsu, soudan, jogen",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ふんしつ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "紛失",
              "right": "Loss / misplacement",
              "furigana": "ふんしつ",
              "romaji": "funshitsu"
            },
            {
              "id": "p_1",
              "left": "解決",
              "right": "Resolution / solution",
              "furigana": "かいけつ",
              "romaji": "kaiketsu"
            },
            {
              "id": "p_2",
              "left": "相談",
              "right": "Consultation",
              "furigana": "そうだん",
              "romaji": "soudan"
            },
            {
              "id": "p_3",
              "left": "助言",
              "right": "Advice",
              "furigana": "じょげん",
              "romaji": "jogen"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l2_8",
          "type": "dialogue",
          "prompt": "落とし物の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "落とし物の準備はできていますか？",
          "furigana": "落とし物の準備はできていますか？",
          "romaji": "otoshimono no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Lost property ready?",
          "audioText": "落とし物の準備はできていますか？",
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
      "id": "u18_l3",
      "unitId": "unit_18",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Advice & Emergency",
      "titleJp": "助言・緊急",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "助言",
        "緊急",
        "問い合わせ"
      ],
      "kanjiKeywords": [
        "助",
        "言",
        "緊",
        "急",
        "問",
        "合"
      ],
      "items": [
        {
          "id": "u18_l3_1",
          "type": "listen",
          "prompt": "助言",
          "furigana": "じょげん",
          "romaji": "jogen",
          "english": "Advice",
          "audioText": "じょげん",
          "options": [
            "Confirming Consultation",
            "Consultation",
            "Advice",
            "Confirming Resolution / solution"
          ],
          "correctAnswer": "Advice"
        },
        {
          "id": "u18_l3_2",
          "type": "spell",
          "prompt": "助言",
          "furigana": "じょげん",
          "romaji": "jogen",
          "english": "Build 'Advice'",
          "audioText": "じょげん",
          "tileBank": [
            "じ",
            "ょ",
            "む",
            "え",
            "あ",
            "ん",
            "げ",
            "は"
          ],
          "correctAnswer": "じょげん"
        },
        {
          "id": "u18_l3_3",
          "type": "cloze",
          "prompt": "私は緊急がすきです",
          "furigana": "わたしはきんきゅうがすきです",
          "romaji": "Watashi wa kinkyuu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Emergency.",
          "audioText": "緊急",
          "clozeSentence": "これは緊急 {{BLANK}} す。",
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
          "id": "u18_l3_4",
          "type": "scramble",
          "prompt": "これは緊急です",
          "furigana": "これはきんきゅうです",
          "romaji": "Kore wa kinkyuu desu.",
          "english": "This is Emergency.",
          "audioText": "これは緊急です",
          "scrambleTokens": [
            "です",
            "それ",
            "緊急",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "緊急",
            "です"
          ],
          "correctAnswer": "これは緊急です"
        },
        {
          "id": "u18_l3_5",
          "type": "speak",
          "prompt": "問い合わせ",
          "furigana": "といあわせ",
          "romaji": "toiawase",
          "english": "Pronounce: Inquiry / contact",
          "audioText": "といあわせ",
          "targetSpeech": "問い合わせ",
          "options": [
            "Inquiry / contact",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "問い合わせ"
        },
        {
          "id": "u18_l3_6",
          "type": "dictate",
          "prompt": "問い合わせをお願いします",
          "furigana": "といあわせをおねがいします",
          "romaji": "toiawase o onegaishimasu.",
          "english": "Inquiry / contact, please.",
          "audioText": "問い合わせをお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "を",
            "ありがとう",
            "問い合わせ"
          ],
          "dictateSolution": [
            "問い合わせ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "問い合わせをお願いします"
        },
        {
          "id": "u18_l3_7",
          "type": "match",
          "prompt": "助言・緊急・問い合わせ・警察",
          "furigana": "じょげん・きんきゅう・といあわせ・けいさつ",
          "romaji": "jogen, kinkyuu, toiawase, keisatsu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じょげん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "助言",
              "right": "Advice",
              "furigana": "じょげん",
              "romaji": "jogen"
            },
            {
              "id": "p_1",
              "left": "緊急",
              "right": "Emergency",
              "furigana": "きんきゅう",
              "romaji": "kinkyuu"
            },
            {
              "id": "p_2",
              "left": "問い合わせ",
              "right": "Inquiry / contact",
              "furigana": "といあわせ",
              "romaji": "toiawase"
            },
            {
              "id": "p_3",
              "left": "警察",
              "right": "Police",
              "furigana": "けいさつ",
              "romaji": "keisatsu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l3_8",
          "type": "dialogue",
          "prompt": "遅延についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "遅延についてどう思われますか？",
          "furigana": "遅延についてどう思われますか？",
          "romaji": "chien ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Train / flight delay?",
          "audioText": "遅延についてどう思われますか？",
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
      "id": "u18_l4",
      "unitId": "unit_18",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Police & Official certificate",
      "titleJp": "警察・証明書",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "警察",
        "証明書",
        "修理"
      ],
      "kanjiKeywords": [
        "警",
        "察",
        "証",
        "明",
        "書",
        "修",
        "理"
      ],
      "items": [
        {
          "id": "u18_l4_1",
          "type": "listen",
          "prompt": "警察",
          "furigana": "けいさつ",
          "romaji": "keisatsu",
          "english": "Police",
          "audioText": "けいさつ",
          "options": [
            "Police",
            "Reissue (card/ticket)",
            "Confirming Advice",
            "Confirming Reissue (card/ticket)"
          ],
          "correctAnswer": "Police"
        },
        {
          "id": "u18_l4_2",
          "type": "spell",
          "prompt": "警察",
          "furigana": "けいさつ",
          "romaji": "keisatsu",
          "english": "Build 'Police'",
          "audioText": "けいさつ",
          "tileBank": [
            "つ",
            "い",
            "ひ",
            "て",
            "め",
            "み",
            "さ",
            "け"
          ],
          "correctAnswer": "けいさつ"
        },
        {
          "id": "u18_l4_3",
          "type": "cloze",
          "prompt": "私は証明書がすきです",
          "furigana": "わたしはしょうめいしょがすきです",
          "romaji": "Watashi wa shoumeisho ga suki desu.",
          "english": "Fill in the blank with the correct particle for Official certificate.",
          "audioText": "証明書",
          "clozeSentence": "これは証明書 {{BLANK}} す。",
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
          "id": "u18_l4_4",
          "type": "scramble",
          "prompt": "これは証明書です",
          "furigana": "これはしょうめいしょです",
          "romaji": "Kore wa shoumeisho desu.",
          "english": "This is Official certificate.",
          "audioText": "これは証明書です",
          "scrambleTokens": [
            "これは",
            "証明書",
            "それ",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "証明書",
            "です"
          ],
          "correctAnswer": "これは証明書です"
        },
        {
          "id": "u18_l4_5",
          "type": "speak",
          "prompt": "修理",
          "furigana": "しゅうり",
          "romaji": "shuuri",
          "english": "Pronounce: Repair",
          "audioText": "しゅうり",
          "targetSpeech": "修理",
          "options": [
            "Repair",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "修理"
        },
        {
          "id": "u18_l4_6",
          "type": "dictate",
          "prompt": "修理をお願いします",
          "furigana": "しゅうりをおねがいします",
          "romaji": "shuuri o onegaishimasu.",
          "english": "Repair, please.",
          "audioText": "修理をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "修理",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "修理",
            "を",
            "お願いします"
          ],
          "correctAnswer": "修理をお願いします"
        },
        {
          "id": "u18_l4_7",
          "type": "match",
          "prompt": "警察・証明書・修理・再発行",
          "furigana": "けいさつ・しょうめいしょ・しゅうり・さいはっこう",
          "romaji": "keisatsu, shoumeisho, shuuri, sai hakkou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "けいさつ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "警察",
              "right": "Police",
              "furigana": "けいさつ",
              "romaji": "keisatsu"
            },
            {
              "id": "p_1",
              "left": "証明書",
              "right": "Official certificate",
              "furigana": "しょうめいしょ",
              "romaji": "shoumeisho"
            },
            {
              "id": "p_2",
              "left": "修理",
              "right": "Repair",
              "furigana": "しゅうり",
              "romaji": "shuuri"
            },
            {
              "id": "p_3",
              "left": "再発行",
              "right": "Reissue (card/ticket)",
              "furigana": "さいはっこう",
              "romaji": "sai hakkou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l4_8",
          "type": "dialogue",
          "prompt": "次は紛失に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は紛失に進みましょう。",
          "furigana": "次は紛失に進みましょう。",
          "romaji": "Tsugi wa funshitsu ni susumimashou.",
          "english": "Speaker: Let's proceed to Loss / misplacement next.",
          "audioText": "次は紛失に進みましょう。",
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
      "id": "u18_l5",
      "unitId": "unit_18",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Reissue (card/ticket) & To be in trouble / at a loss",
      "titleJp": "再発行・困る",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "再発行",
        "困る",
        "安心"
      ],
      "kanjiKeywords": [
        "再",
        "発",
        "行",
        "困",
        "安",
        "心"
      ],
      "items": [
        {
          "id": "u18_l5_1",
          "type": "listen",
          "prompt": "再発行",
          "furigana": "さいはっこう",
          "romaji": "sai hakkou",
          "english": "Reissue (card/ticket)",
          "audioText": "さいはっこう",
          "options": [
            "Confirming Official certificate",
            "Reissue (card/ticket)",
            "Confirming Loss / misplacement",
            "Confirming Train / flight delay"
          ],
          "correctAnswer": "Reissue (card/ticket)"
        },
        {
          "id": "u18_l5_2",
          "type": "spell",
          "prompt": "再発行",
          "furigana": "さいはっこう",
          "romaji": "sai hakkou",
          "english": "Build 'Reissue (card/ticket)'",
          "audioText": "さいはっこう",
          "tileBank": [
            "は",
            "さ",
            "っ",
            "い",
            "ゆ",
            "こ",
            "ろ",
            "う"
          ],
          "correctAnswer": "さいはっこう"
        },
        {
          "id": "u18_l5_3",
          "type": "cloze",
          "prompt": "私は困るがすきです",
          "furigana": "わたしはこまるがすきです",
          "romaji": "Watashi wa komaru ga suki desu.",
          "english": "Fill in the blank with the correct particle for To be in trouble / at a loss.",
          "audioText": "困る",
          "clozeSentence": "これは困る {{BLANK}} す。",
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
          "id": "u18_l5_4",
          "type": "scramble",
          "prompt": "これは困るです",
          "furigana": "これはこまるです",
          "romaji": "Kore wa komaru desu.",
          "english": "This is To be in trouble / at a loss.",
          "audioText": "これは困るです",
          "scrambleTokens": [
            "これは",
            "それ",
            "ではありません",
            "困る",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "困る",
            "です"
          ],
          "correctAnswer": "これは困るです"
        },
        {
          "id": "u18_l5_5",
          "type": "speak",
          "prompt": "安心",
          "furigana": "あんしん",
          "romaji": "anshin",
          "english": "Pronounce: Peace of mind / relief",
          "audioText": "あんしん",
          "targetSpeech": "安心",
          "options": [
            "Peace of mind / relief",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "安心"
        },
        {
          "id": "u18_l5_6",
          "type": "dictate",
          "prompt": "安心をお願いします",
          "furigana": "あんしんをおねがいします",
          "romaji": "anshin o onegaishimasu.",
          "english": "Peace of mind / relief, please.",
          "audioText": "安心をお願いします",
          "dictateTokens": [
            "です",
            "安心",
            "を",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "安心",
            "を",
            "お願いします"
          ],
          "correctAnswer": "安心をお願いします"
        },
        {
          "id": "u18_l5_7",
          "type": "match",
          "prompt": "再発行・困る・安心・トラブルの確認",
          "furigana": "さいはっこう・こまる・あんしん・トラブルのかくにん",
          "romaji": "sai hakkou, komaru, anshin, toraburu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さいはっこう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "再発行",
              "right": "Reissue (card/ticket)",
              "furigana": "さいはっこう",
              "romaji": "sai hakkou"
            },
            {
              "id": "p_1",
              "left": "困る",
              "right": "To be in trouble / at a loss",
              "furigana": "こまる",
              "romaji": "komaru"
            },
            {
              "id": "p_2",
              "left": "安心",
              "right": "Peace of mind / relief",
              "furigana": "あんしん",
              "romaji": "anshin"
            },
            {
              "id": "p_3",
              "left": "トラブルの確認",
              "right": "Confirming Trouble / incident",
              "furigana": "トラブルのかくにん",
              "romaji": "toraburu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l5_8",
          "type": "dialogue",
          "prompt": "トラブルについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "トラブルについて教えていただけますか？",
          "furigana": "トラブルについて教えていただけますか？",
          "romaji": "toraburu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Trouble / incident?",
          "audioText": "トラブルについて教えていただけますか？",
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
      "id": "u18_l6",
      "unitId": "unit_18",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Trouble / incident & Confirming Lost property",
      "titleJp": "トラブルの確認・落とし物の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "トラブルの確認",
        "落とし物の確認",
        "遅延の確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "落",
        "物",
        "確",
        "認",
        "遅",
        "延",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u18_l6_1",
          "type": "listen",
          "prompt": "トラブルの確認",
          "furigana": "トラブルのかくにん",
          "romaji": "toraburu no kakunin",
          "english": "Confirming Trouble / incident",
          "audioText": "トラブルのかくにん",
          "options": [
            "Confirming Peace of mind / relief",
            "Confirming Resolution / solution",
            "Confirming Train / flight delay",
            "Confirming Trouble / incident"
          ],
          "correctAnswer": "Confirming Trouble / incident"
        },
        {
          "id": "u18_l6_2",
          "type": "spell",
          "prompt": "トラブルの確認",
          "furigana": "トラブルのかくにん",
          "romaji": "toraburu no kakunin",
          "english": "Build 'Confirming Trouble / incident'",
          "audioText": "トラブルのかくにん",
          "tileBank": [
            "ル",
            "か",
            "く",
            "ラ",
            "に",
            "の",
            "ブ",
            "ト"
          ],
          "correctAnswer": "トラブルのかくにん"
        },
        {
          "id": "u18_l6_3",
          "type": "cloze",
          "prompt": "私は落とし物の確認がすきです",
          "furigana": "わたしはおとしもののかくにんがすきです",
          "romaji": "Watashi wa otoshimono no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Lost property.",
          "audioText": "落とし物の確認",
          "clozeSentence": "これは落とし物の確認 {{BLANK}} す。",
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
          "id": "u18_l6_4",
          "type": "scramble",
          "prompt": "これは落とし物の確認です",
          "furigana": "これはおとしもののかくにんです",
          "romaji": "Kore wa otoshimono no kakunin desu.",
          "english": "This is Confirming Lost property.",
          "audioText": "これは落とし物の確認です",
          "scrambleTokens": [
            "です",
            "これは",
            "落とし物の確認",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "落とし物の確認",
            "です"
          ],
          "correctAnswer": "これは落とし物の確認です"
        },
        {
          "id": "u18_l6_5",
          "type": "speak",
          "prompt": "遅延の確認",
          "furigana": "ちえんのかくにん",
          "romaji": "chien no kakunin",
          "english": "Pronounce: Confirming Train / flight delay",
          "audioText": "ちえんのかくにん",
          "targetSpeech": "遅延の確認",
          "options": [
            "Confirming Train / flight delay",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "遅延の確認"
        },
        {
          "id": "u18_l6_6",
          "type": "dictate",
          "prompt": "遅延の確認をお願いします",
          "furigana": "ちえんのかくにんをおねがいします",
          "romaji": "chien no kakunin o onegaishimasu.",
          "english": "Confirming Train / flight delay, please.",
          "audioText": "遅延の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "遅延の確認",
            "を",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "遅延の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "遅延の確認をお願いします"
        },
        {
          "id": "u18_l6_7",
          "type": "match",
          "prompt": "トラブルの確認・落とし物の確認・遅延の確認・紛失の確認",
          "furigana": "トラブルのかくにん・おとしもののかくにん・ちえんのかくにん・ふんしつのかくにん",
          "romaji": "toraburu no kakunin, otoshimono no kakunin, chien no kakunin, funshitsu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "トラブルのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "トラブルの確認",
              "right": "Confirming Trouble / incident",
              "furigana": "トラブルのかくにん",
              "romaji": "toraburu no kakunin"
            },
            {
              "id": "p_1",
              "left": "落とし物の確認",
              "right": "Confirming Lost property",
              "furigana": "おとしもののかくにん",
              "romaji": "otoshimono no kakunin"
            },
            {
              "id": "p_2",
              "left": "遅延の確認",
              "right": "Confirming Train / flight delay",
              "furigana": "ちえんのかくにん",
              "romaji": "chien no kakunin"
            },
            {
              "id": "p_3",
              "left": "紛失の確認",
              "right": "Confirming Loss / misplacement",
              "furigana": "ふんしつのかくにん",
              "romaji": "funshitsu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l6_8",
          "type": "dialogue",
          "prompt": "落とし物の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "落とし物の準備はできていますか？",
          "furigana": "落とし物の準備はできていますか？",
          "romaji": "otoshimono no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Lost property ready?",
          "audioText": "落とし物の準備はできていますか？",
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
      "id": "u18_l7",
      "unitId": "unit_18",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Loss / misplacement & Confirming Resolution / solution",
      "titleJp": "紛失の確認・解決の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "紛失の確認",
        "解決の確認",
        "相談の確認"
      ],
      "kanjiKeywords": [
        "紛",
        "失",
        "確",
        "認",
        "解",
        "決",
        "確",
        "認",
        "相",
        "談",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u18_l7_1",
          "type": "listen",
          "prompt": "紛失の確認",
          "furigana": "ふんしつのかくにん",
          "romaji": "funshitsu no kakunin",
          "english": "Confirming Loss / misplacement",
          "audioText": "ふんしつのかくにん",
          "options": [
            "Confirming Repair",
            "Confirming Resolution / solution",
            "Confirming Loss / misplacement",
            "Confirming Train / flight delay"
          ],
          "correctAnswer": "Confirming Loss / misplacement"
        },
        {
          "id": "u18_l7_2",
          "type": "spell",
          "prompt": "紛失の確認",
          "furigana": "ふんしつのかくにん",
          "romaji": "funshitsu no kakunin",
          "english": "Build 'Confirming Loss / misplacement'",
          "audioText": "ふんしつのかくにん",
          "tileBank": [
            "ん",
            "ふ",
            "に",
            "か",
            "く",
            "し",
            "つ",
            "の"
          ],
          "correctAnswer": "ふんしつのかくにん"
        },
        {
          "id": "u18_l7_3",
          "type": "cloze",
          "prompt": "私は解決の確認がすきです",
          "furigana": "わたしはかいけつのかくにんがすきです",
          "romaji": "Watashi wa kaiketsu no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Resolution / solution.",
          "audioText": "解決の確認",
          "clozeSentence": "これは解決の確認 {{BLANK}} す。",
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
          "id": "u18_l7_4",
          "type": "scramble",
          "prompt": "これは解決の確認です",
          "furigana": "これはかいけつのかくにんです",
          "romaji": "Kore wa kaiketsu no kakunin desu.",
          "english": "This is Confirming Resolution / solution.",
          "audioText": "これは解決の確認です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "これは",
            "解決の確認"
          ],
          "scrambleSolution": [
            "これは",
            "解決の確認",
            "です"
          ],
          "correctAnswer": "これは解決の確認です"
        },
        {
          "id": "u18_l7_5",
          "type": "speak",
          "prompt": "相談の確認",
          "furigana": "そうだんのかくにん",
          "romaji": "soudan no kakunin",
          "english": "Pronounce: Confirming Consultation",
          "audioText": "そうだんのかくにん",
          "targetSpeech": "相談の確認",
          "options": [
            "Confirming Consultation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "相談の確認"
        },
        {
          "id": "u18_l7_6",
          "type": "dictate",
          "prompt": "相談の確認をお願いします",
          "furigana": "そうだんのかくにんをおねがいします",
          "romaji": "soudan no kakunin o onegaishimasu.",
          "english": "Confirming Consultation, please.",
          "audioText": "相談の確認をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "です",
            "ありがとう",
            "相談の確認"
          ],
          "dictateSolution": [
            "相談の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "相談の確認をお願いします"
        },
        {
          "id": "u18_l7_7",
          "type": "match",
          "prompt": "紛失の確認・解決の確認・相談の確認・助言の確認",
          "furigana": "ふんしつのかくにん・かいけつのかくにん・そうだんのかくにん・じょげんのかくにん",
          "romaji": "funshitsu no kakunin, kaiketsu no kakunin, soudan no kakunin, jogen no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ふんしつのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "紛失の確認",
              "right": "Confirming Loss / misplacement",
              "furigana": "ふんしつのかくにん",
              "romaji": "funshitsu no kakunin"
            },
            {
              "id": "p_1",
              "left": "解決の確認",
              "right": "Confirming Resolution / solution",
              "furigana": "かいけつのかくにん",
              "romaji": "kaiketsu no kakunin"
            },
            {
              "id": "p_2",
              "left": "相談の確認",
              "right": "Confirming Consultation",
              "furigana": "そうだんのかくにん",
              "romaji": "soudan no kakunin"
            },
            {
              "id": "p_3",
              "left": "助言の確認",
              "right": "Confirming Advice",
              "furigana": "じょげんのかくにん",
              "romaji": "jogen no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l7_8",
          "type": "dialogue",
          "prompt": "遅延についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "遅延についてどう思われますか？",
          "furigana": "遅延についてどう思われますか？",
          "romaji": "chien ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Train / flight delay?",
          "audioText": "遅延についてどう思われますか？",
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
      "id": "u18_l8",
      "unitId": "unit_18",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Advice & Confirming Emergency",
      "titleJp": "助言の確認・緊急の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "助言の確認",
        "緊急の確認",
        "問い合わせの確認"
      ],
      "kanjiKeywords": [
        "助",
        "言",
        "確",
        "認",
        "緊",
        "急",
        "確",
        "認",
        "問",
        "合",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u18_l8_1",
          "type": "listen",
          "prompt": "助言の確認",
          "furigana": "じょげんのかくにん",
          "romaji": "jogen no kakunin",
          "english": "Confirming Advice",
          "audioText": "じょげんのかくにん",
          "options": [
            "Confirming Repair",
            "Consultation",
            "Confirming Reissue (card/ticket)",
            "Confirming Advice"
          ],
          "correctAnswer": "Confirming Advice"
        },
        {
          "id": "u18_l8_2",
          "type": "spell",
          "prompt": "助言の確認",
          "furigana": "じょげんのかくにん",
          "romaji": "jogen no kakunin",
          "english": "Build 'Confirming Advice'",
          "audioText": "じょげんのかくにん",
          "tileBank": [
            "ん",
            "じ",
            "ょ",
            "く",
            "か",
            "げ",
            "の",
            "に"
          ],
          "correctAnswer": "じょげんのかくにん"
        },
        {
          "id": "u18_l8_3",
          "type": "cloze",
          "prompt": "私は緊急の確認がすきです",
          "furigana": "わたしはきんきゅうのかくにんがすきです",
          "romaji": "Watashi wa kinkyuu no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Emergency.",
          "audioText": "緊急の確認",
          "clozeSentence": "これは緊急の確認 {{BLANK}} す。",
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
          "id": "u18_l8_4",
          "type": "scramble",
          "prompt": "これは緊急の確認です",
          "furigana": "これはきんきゅうのかくにんです",
          "romaji": "Kore wa kinkyuu no kakunin desu.",
          "english": "This is Confirming Emergency.",
          "audioText": "これは緊急の確認です",
          "scrambleTokens": [
            "それ",
            "です",
            "これは",
            "ではありません",
            "緊急の確認"
          ],
          "scrambleSolution": [
            "これは",
            "緊急の確認",
            "です"
          ],
          "correctAnswer": "これは緊急の確認です"
        },
        {
          "id": "u18_l8_5",
          "type": "speak",
          "prompt": "問い合わせの確認",
          "furigana": "といあわせのかくにん",
          "romaji": "toiawase no kakunin",
          "english": "Pronounce: Confirming Inquiry / contact",
          "audioText": "といあわせのかくにん",
          "targetSpeech": "問い合わせの確認",
          "options": [
            "Confirming Inquiry / contact",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "問い合わせの確認"
        },
        {
          "id": "u18_l8_6",
          "type": "dictate",
          "prompt": "問い合わせの確認をお願いします",
          "furigana": "といあわせのかくにんをおねがいします",
          "romaji": "toiawase no kakunin o onegaishimasu.",
          "english": "Confirming Inquiry / contact, please.",
          "audioText": "問い合わせの確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "問い合わせの確認",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "問い合わせの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "問い合わせの確認をお願いします"
        },
        {
          "id": "u18_l8_7",
          "type": "match",
          "prompt": "助言の確認・緊急の確認・問い合わせの確認・警察の確認",
          "furigana": "じょげんのかくにん・きんきゅうのかくにん・といあわせのかくにん・けいさつのかくにん",
          "romaji": "jogen no kakunin, kinkyuu no kakunin, toiawase no kakunin, keisatsu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じょげんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "助言の確認",
              "right": "Confirming Advice",
              "furigana": "じょげんのかくにん",
              "romaji": "jogen no kakunin"
            },
            {
              "id": "p_1",
              "left": "緊急の確認",
              "right": "Confirming Emergency",
              "furigana": "きんきゅうのかくにん",
              "romaji": "kinkyuu no kakunin"
            },
            {
              "id": "p_2",
              "left": "問い合わせの確認",
              "right": "Confirming Inquiry / contact",
              "furigana": "といあわせのかくにん",
              "romaji": "toiawase no kakunin"
            },
            {
              "id": "p_3",
              "left": "警察の確認",
              "right": "Confirming Police",
              "furigana": "けいさつのかくにん",
              "romaji": "keisatsu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l8_8",
          "type": "dialogue",
          "prompt": "次は紛失に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は紛失に進みましょう。",
          "furigana": "次は紛失に進みましょう。",
          "romaji": "Tsugi wa funshitsu ni susumimashou.",
          "english": "Speaker: Let's proceed to Loss / misplacement next.",
          "audioText": "次は紛失に進みましょう。",
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
      "id": "u18_l9",
      "unitId": "unit_18",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Police & Confirming Official certificate",
      "titleJp": "警察の確認・証明書の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "警察の確認",
        "証明書の確認",
        "修理の確認"
      ],
      "kanjiKeywords": [
        "警",
        "察",
        "確",
        "認",
        "証",
        "明",
        "書",
        "確",
        "認",
        "修",
        "理",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u18_l9_1",
          "type": "listen",
          "prompt": "警察の確認",
          "furigana": "けいさつのかくにん",
          "romaji": "keisatsu no kakunin",
          "english": "Confirming Police",
          "audioText": "けいさつのかくにん",
          "options": [
            "Trouble / incident",
            "Confirming Consultation",
            "Confirming Peace of mind / relief",
            "Confirming Police"
          ],
          "correctAnswer": "Confirming Police"
        },
        {
          "id": "u18_l9_2",
          "type": "spell",
          "prompt": "警察の確認",
          "furigana": "けいさつのかくにん",
          "romaji": "keisatsu no kakunin",
          "english": "Build 'Confirming Police'",
          "audioText": "けいさつのかくにん",
          "tileBank": [
            "く",
            "か",
            "さ",
            "に",
            "の",
            "け",
            "い",
            "つ"
          ],
          "correctAnswer": "けいさつのかくにん"
        },
        {
          "id": "u18_l9_3",
          "type": "cloze",
          "prompt": "私は証明書の確認がすきです",
          "furigana": "わたしはしょうめいしょのかくにんがすきです",
          "romaji": "Watashi wa shoumeisho no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Official certificate.",
          "audioText": "証明書の確認",
          "clozeSentence": "これは証明書の確認 {{BLANK}} す。",
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
          "id": "u18_l9_4",
          "type": "scramble",
          "prompt": "これは証明書の確認です",
          "furigana": "これはしょうめいしょのかくにんです",
          "romaji": "Kore wa shoumeisho no kakunin desu.",
          "english": "This is Confirming Official certificate.",
          "audioText": "これは証明書の確認です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "証明書の確認",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "証明書の確認",
            "です"
          ],
          "correctAnswer": "これは証明書の確認です"
        },
        {
          "id": "u18_l9_5",
          "type": "speak",
          "prompt": "修理の確認",
          "furigana": "しゅうりのかくにん",
          "romaji": "shuuri no kakunin",
          "english": "Pronounce: Confirming Repair",
          "audioText": "しゅうりのかくにん",
          "targetSpeech": "修理の確認",
          "options": [
            "Confirming Repair",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "修理の確認"
        },
        {
          "id": "u18_l9_6",
          "type": "dictate",
          "prompt": "修理の確認をお願いします",
          "furigana": "しゅうりのかくにんをおねがいします",
          "romaji": "shuuri no kakunin o onegaishimasu.",
          "english": "Confirming Repair, please.",
          "audioText": "修理の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "修理の確認",
            "を",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "修理の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "修理の確認をお願いします"
        },
        {
          "id": "u18_l9_7",
          "type": "match",
          "prompt": "警察の確認・証明書の確認・修理の確認・再発行の確認",
          "furigana": "けいさつのかくにん・しょうめいしょのかくにん・しゅうりのかくにん・さいはっこうのかくにん",
          "romaji": "keisatsu no kakunin, shoumeisho no kakunin, shuuri no kakunin, sai hakkou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "けいさつのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "警察の確認",
              "right": "Confirming Police",
              "furigana": "けいさつのかくにん",
              "romaji": "keisatsu no kakunin"
            },
            {
              "id": "p_1",
              "left": "証明書の確認",
              "right": "Confirming Official certificate",
              "furigana": "しょうめいしょのかくにん",
              "romaji": "shoumeisho no kakunin"
            },
            {
              "id": "p_2",
              "left": "修理の確認",
              "right": "Confirming Repair",
              "furigana": "しゅうりのかくにん",
              "romaji": "shuuri no kakunin"
            },
            {
              "id": "p_3",
              "left": "再発行の確認",
              "right": "Confirming Reissue (card/ticket)",
              "furigana": "さいはっこうのかくにん",
              "romaji": "sai hakkou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l9_8",
          "type": "dialogue",
          "prompt": "トラブルについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "トラブルについて教えていただけますか？",
          "furigana": "トラブルについて教えていただけますか？",
          "romaji": "toraburu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Trouble / incident?",
          "audioText": "トラブルについて教えていただけますか？",
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
      "id": "u18_l10",
      "unitId": "unit_18",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Reissue (card/ticket) & Confirming To be in trouble / at a loss",
      "titleJp": "再発行の確認・困るの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "再発行の確認",
        "困るの確認",
        "安心の確認"
      ],
      "kanjiKeywords": [
        "再",
        "発",
        "行",
        "確",
        "認",
        "困",
        "確",
        "認",
        "安",
        "心",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u18_l10_1",
          "type": "listen",
          "prompt": "再発行の確認",
          "furigana": "さいはっこうのかくにん",
          "romaji": "sai hakkou no kakunin",
          "english": "Confirming Reissue (card/ticket)",
          "audioText": "さいはっこうのかくにん",
          "options": [
            "Police",
            "Confirming Loss / misplacement",
            "Confirming Reissue (card/ticket)",
            "Trouble / incident"
          ],
          "correctAnswer": "Confirming Reissue (card/ticket)"
        },
        {
          "id": "u18_l10_2",
          "type": "spell",
          "prompt": "再発行の確認",
          "furigana": "さいはっこうのかくにん",
          "romaji": "sai hakkou no kakunin",
          "english": "Build 'Confirming Reissue (card/ticket)'",
          "audioText": "さいはっこうのかくにん",
          "tileBank": [
            "は",
            "う",
            "っ",
            "さ",
            "こ",
            "か",
            "い",
            "の"
          ],
          "correctAnswer": "さいはっこうのかくにん"
        },
        {
          "id": "u18_l10_3",
          "type": "cloze",
          "prompt": "私は困るの確認がすきです",
          "furigana": "わたしはこまるのかくにんがすきです",
          "romaji": "Watashi wa komaru no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming To be in trouble / at a loss.",
          "audioText": "困るの確認",
          "clozeSentence": "これは困るの確認 {{BLANK}} す。",
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
          "id": "u18_l10_4",
          "type": "scramble",
          "prompt": "これは困るの確認です",
          "furigana": "これはこまるのかくにんです",
          "romaji": "Kore wa komaru no kakunin desu.",
          "english": "This is Confirming To be in trouble / at a loss.",
          "audioText": "これは困るの確認です",
          "scrambleTokens": [
            "それ",
            "です",
            "これは",
            "困るの確認",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "困るの確認",
            "です"
          ],
          "correctAnswer": "これは困るの確認です"
        },
        {
          "id": "u18_l10_5",
          "type": "speak",
          "prompt": "安心の確認",
          "furigana": "あんしんのかくにん",
          "romaji": "anshin no kakunin",
          "english": "Pronounce: Confirming Peace of mind / relief",
          "audioText": "あんしんのかくにん",
          "targetSpeech": "安心の確認",
          "options": [
            "Confirming Peace of mind / relief",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "安心の確認"
        },
        {
          "id": "u18_l10_6",
          "type": "dictate",
          "prompt": "安心の確認をお願いします",
          "furigana": "あんしんのかくにんをおねがいします",
          "romaji": "anshin no kakunin o onegaishimasu.",
          "english": "Confirming Peace of mind / relief, please.",
          "audioText": "安心の確認をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "お願いします",
            "ありがとう",
            "安心の確認"
          ],
          "dictateSolution": [
            "安心の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "安心の確認をお願いします"
        },
        {
          "id": "u18_l10_7",
          "type": "match",
          "prompt": "再発行の確認・困るの確認・安心の確認・トラブルの確認",
          "furigana": "さいはっこうのかくにん・こまるのかくにん・あんしんのかくにん・トラブルのかくにん",
          "romaji": "sai hakkou no kakunin, komaru no kakunin, anshin no kakunin, toraburu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "さいはっこうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "再発行の確認",
              "right": "Confirming Reissue (card/ticket)",
              "furigana": "さいはっこうのかくにん",
              "romaji": "sai hakkou no kakunin"
            },
            {
              "id": "p_1",
              "left": "困るの確認",
              "right": "Confirming To be in trouble / at a loss",
              "furigana": "こまるのかくにん",
              "romaji": "komaru no kakunin"
            },
            {
              "id": "p_2",
              "left": "安心の確認",
              "right": "Confirming Peace of mind / relief",
              "furigana": "あんしんのかくにん",
              "romaji": "anshin no kakunin"
            },
            {
              "id": "p_3",
              "left": "トラブルの確認",
              "right": "Confirming Trouble / incident",
              "furigana": "トラブルのかくにん",
              "romaji": "toraburu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l10_8",
          "type": "dialogue",
          "prompt": "落とし物の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "落とし物の準備はできていますか？",
          "furigana": "落とし物の準備はできていますか？",
          "romaji": "otoshimono no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Lost property ready?",
          "audioText": "落とし物の準備はできていますか？",
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
      "id": "u18_l11",
      "unitId": "unit_18",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Trouble / incident & Confirming Lost property",
      "titleJp": "トラブルの確認・落とし物の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "トラブルの確認",
        "落とし物の確認",
        "遅延の確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "落",
        "物",
        "確",
        "認",
        "遅",
        "延",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u18_l11_1",
          "type": "listen",
          "prompt": "トラブルの確認",
          "furigana": "トラブルのかくにん",
          "romaji": "toraburu no kakunin",
          "english": "Confirming Trouble / incident",
          "audioText": "トラブルのかくにん",
          "options": [
            "Consultation",
            "Confirming Trouble / incident",
            "Reissue (card/ticket)",
            "Confirming Police"
          ],
          "correctAnswer": "Confirming Trouble / incident"
        },
        {
          "id": "u18_l11_2",
          "type": "spell",
          "prompt": "トラブルの確認",
          "furigana": "トラブルのかくにん",
          "romaji": "toraburu no kakunin",
          "english": "Build 'Confirming Trouble / incident'",
          "audioText": "トラブルのかくにん",
          "tileBank": [
            "か",
            "ブ",
            "ラ",
            "く",
            "ト",
            "に",
            "ル",
            "の"
          ],
          "correctAnswer": "トラブルのかくにん"
        },
        {
          "id": "u18_l11_3",
          "type": "cloze",
          "prompt": "私は落とし物の確認がすきです",
          "furigana": "わたしはおとしもののかくにんがすきです",
          "romaji": "Watashi wa otoshimono no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Lost property.",
          "audioText": "落とし物の確認",
          "clozeSentence": "これは落とし物の確認 {{BLANK}} す。",
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
          "id": "u18_l11_4",
          "type": "scramble",
          "prompt": "これは落とし物の確認です",
          "furigana": "これはおとしもののかくにんです",
          "romaji": "Kore wa otoshimono no kakunin desu.",
          "english": "This is Confirming Lost property.",
          "audioText": "これは落とし物の確認です",
          "scrambleTokens": [
            "それ",
            "これは",
            "落とし物の確認",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "落とし物の確認",
            "です"
          ],
          "correctAnswer": "これは落とし物の確認です"
        },
        {
          "id": "u18_l11_5",
          "type": "speak",
          "prompt": "遅延の確認",
          "furigana": "ちえんのかくにん",
          "romaji": "chien no kakunin",
          "english": "Pronounce: Confirming Train / flight delay",
          "audioText": "ちえんのかくにん",
          "targetSpeech": "遅延の確認",
          "options": [
            "Confirming Train / flight delay",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "遅延の確認"
        },
        {
          "id": "u18_l11_6",
          "type": "dictate",
          "prompt": "遅延の確認をお願いします",
          "furigana": "ちえんのかくにんをおねがいします",
          "romaji": "chien no kakunin o onegaishimasu.",
          "english": "Confirming Train / flight delay, please.",
          "audioText": "遅延の確認をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "遅延の確認",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "遅延の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "遅延の確認をお願いします"
        },
        {
          "id": "u18_l11_7",
          "type": "match",
          "prompt": "トラブルの確認・落とし物の確認・遅延の確認・紛失の確認",
          "furigana": "トラブルのかくにん・おとしもののかくにん・ちえんのかくにん・ふんしつのかくにん",
          "romaji": "toraburu no kakunin, otoshimono no kakunin, chien no kakunin, funshitsu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "トラブルのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "トラブルの確認",
              "right": "Confirming Trouble / incident",
              "furigana": "トラブルのかくにん",
              "romaji": "toraburu no kakunin"
            },
            {
              "id": "p_1",
              "left": "落とし物の確認",
              "right": "Confirming Lost property",
              "furigana": "おとしもののかくにん",
              "romaji": "otoshimono no kakunin"
            },
            {
              "id": "p_2",
              "left": "遅延の確認",
              "right": "Confirming Train / flight delay",
              "furigana": "ちえんのかくにん",
              "romaji": "chien no kakunin"
            },
            {
              "id": "p_3",
              "left": "紛失の確認",
              "right": "Confirming Loss / misplacement",
              "furigana": "ふんしつのかくにん",
              "romaji": "funshitsu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l11_8",
          "type": "dialogue",
          "prompt": "遅延についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "遅延についてどう思われますか？",
          "furigana": "遅延についてどう思われますか？",
          "romaji": "chien ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Train / flight delay?",
          "audioText": "遅延についてどう思われますか？",
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
      "id": "u18_l12",
      "unitId": "unit_18",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Loss / misplacement & Confirming Resolution / solution",
      "titleJp": "紛失の確認・解決の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "紛失の確認",
        "解決の確認",
        "相談の確認"
      ],
      "kanjiKeywords": [
        "紛",
        "失",
        "確",
        "認",
        "解",
        "決",
        "確",
        "認",
        "相",
        "談",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u18_l12_1",
          "type": "listen",
          "prompt": "紛失の確認",
          "furigana": "ふんしつのかくにん",
          "romaji": "funshitsu no kakunin",
          "english": "Confirming Loss / misplacement",
          "audioText": "ふんしつのかくにん",
          "options": [
            "Confirming Peace of mind / relief",
            "Confirming Loss / misplacement",
            "Confirming Train / flight delay",
            "To be in trouble / at a loss"
          ],
          "correctAnswer": "Confirming Loss / misplacement"
        },
        {
          "id": "u18_l12_2",
          "type": "spell",
          "prompt": "紛失の確認",
          "furigana": "ふんしつのかくにん",
          "romaji": "funshitsu no kakunin",
          "english": "Build 'Confirming Loss / misplacement'",
          "audioText": "ふんしつのかくにん",
          "tileBank": [
            "ふ",
            "し",
            "つ",
            "ん",
            "く",
            "か",
            "の",
            "に"
          ],
          "correctAnswer": "ふんしつのかくにん"
        },
        {
          "id": "u18_l12_3",
          "type": "cloze",
          "prompt": "私は解決の確認がすきです",
          "furigana": "わたしはかいけつのかくにんがすきです",
          "romaji": "Watashi wa kaiketsu no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Resolution / solution.",
          "audioText": "解決の確認",
          "clozeSentence": "これは解決の確認 {{BLANK}} す。",
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
          "id": "u18_l12_4",
          "type": "scramble",
          "prompt": "これは解決の確認です",
          "furigana": "これはかいけつのかくにんです",
          "romaji": "Kore wa kaiketsu no kakunin desu.",
          "english": "This is Confirming Resolution / solution.",
          "audioText": "これは解決の確認です",
          "scrambleTokens": [
            "解決の確認",
            "です",
            "ではありません",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "解決の確認",
            "です"
          ],
          "correctAnswer": "これは解決の確認です"
        },
        {
          "id": "u18_l12_5",
          "type": "speak",
          "prompt": "相談の確認",
          "furigana": "そうだんのかくにん",
          "romaji": "soudan no kakunin",
          "english": "Pronounce: Confirming Consultation",
          "audioText": "そうだんのかくにん",
          "targetSpeech": "相談の確認",
          "options": [
            "Confirming Consultation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "相談の確認"
        },
        {
          "id": "u18_l12_6",
          "type": "dictate",
          "prompt": "相談の確認をお願いします",
          "furigana": "そうだんのかくにんをおねがいします",
          "romaji": "soudan no kakunin o onegaishimasu.",
          "english": "Confirming Consultation, please.",
          "audioText": "相談の確認をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "を",
            "相談の確認",
            "お願いします"
          ],
          "dictateSolution": [
            "相談の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "相談の確認をお願いします"
        },
        {
          "id": "u18_l12_7",
          "type": "match",
          "prompt": "紛失の確認・解決の確認・相談の確認・トラブル",
          "furigana": "ふんしつのかくにん・かいけつのかくにん・そうだんのかくにん・トラブル",
          "romaji": "funshitsu no kakunin, kaiketsu no kakunin, soudan no kakunin, toraburu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ふんしつのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "紛失の確認",
              "right": "Confirming Loss / misplacement",
              "furigana": "ふんしつのかくにん",
              "romaji": "funshitsu no kakunin"
            },
            {
              "id": "p_1",
              "left": "解決の確認",
              "right": "Confirming Resolution / solution",
              "furigana": "かいけつのかくにん",
              "romaji": "kaiketsu no kakunin"
            },
            {
              "id": "p_2",
              "left": "相談の確認",
              "right": "Confirming Consultation",
              "furigana": "そうだんのかくにん",
              "romaji": "soudan no kakunin"
            },
            {
              "id": "p_3",
              "left": "トラブル",
              "right": "Trouble / incident",
              "furigana": "トラブル",
              "romaji": "toraburu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l12_8",
          "type": "dialogue",
          "prompt": "次は紛失に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は紛失に進みましょう。",
          "furigana": "次は紛失に進みましょう。",
          "romaji": "Tsugi wa funshitsu ni susumimashou.",
          "english": "Speaker: Let's proceed to Loss / misplacement next.",
          "audioText": "次は紛失に進みましょう。",
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
      "id": "u18_l13",
      "unitId": "unit_18",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Trouble / incident & Lost property",
      "titleJp": "トラブル・落とし物",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "トラブル",
        "落とし物",
        "遅延"
      ],
      "kanjiKeywords": [
        "落",
        "物",
        "遅",
        "延"
      ],
      "items": [
        {
          "id": "u18_l13_1",
          "type": "listen",
          "prompt": "トラブル",
          "furigana": "トラブル",
          "romaji": "toraburu",
          "english": "Trouble / incident",
          "audioText": "トラブル",
          "options": [
            "Trouble / incident",
            "Confirming Official certificate",
            "Inquiry / contact",
            "Resolution / solution"
          ],
          "correctAnswer": "Trouble / incident"
        },
        {
          "id": "u18_l13_2",
          "type": "spell",
          "prompt": "トラブル",
          "furigana": "トラブル",
          "romaji": "toraburu",
          "english": "Build 'Trouble / incident'",
          "audioText": "トラブル",
          "tileBank": [
            "き",
            "ラ",
            "ル",
            "を",
            "ト",
            "ち",
            "ブ",
            "へ"
          ],
          "correctAnswer": "トラブル"
        },
        {
          "id": "u18_l13_3",
          "type": "cloze",
          "prompt": "私は落とし物がすきです",
          "furigana": "わたしはおとしものがすきです",
          "romaji": "Watashi wa otoshimono ga suki desu.",
          "english": "Fill in the blank with the correct particle for Lost property.",
          "audioText": "落とし物",
          "clozeSentence": "これは落とし物 {{BLANK}} す。",
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
          "id": "u18_l13_4",
          "type": "scramble",
          "prompt": "これは落とし物です",
          "furigana": "これはおとしものです",
          "romaji": "Kore wa otoshimono desu.",
          "english": "This is Lost property.",
          "audioText": "これは落とし物です",
          "scrambleTokens": [
            "それ",
            "これは",
            "です",
            "落とし物",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "落とし物",
            "です"
          ],
          "correctAnswer": "これは落とし物です"
        },
        {
          "id": "u18_l13_5",
          "type": "speak",
          "prompt": "遅延",
          "furigana": "ちえん",
          "romaji": "chien",
          "english": "Pronounce: Train / flight delay",
          "audioText": "ちえん",
          "targetSpeech": "遅延",
          "options": [
            "Train / flight delay",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "遅延"
        },
        {
          "id": "u18_l13_6",
          "type": "dictate",
          "prompt": "遅延をお願いします",
          "furigana": "ちえんをおねがいします",
          "romaji": "chien o onegaishimasu.",
          "english": "Train / flight delay, please.",
          "audioText": "遅延をお願いします",
          "dictateTokens": [
            "遅延",
            "お願いします",
            "ありがとう",
            "です",
            "を"
          ],
          "dictateSolution": [
            "遅延",
            "を",
            "お願いします"
          ],
          "correctAnswer": "遅延をお願いします"
        },
        {
          "id": "u18_l13_7",
          "type": "match",
          "prompt": "トラブル・落とし物・遅延・紛失",
          "furigana": "トラブル・おとしもの・ちえん・ふんしつ",
          "romaji": "toraburu, otoshimono, chien, funshitsu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "トラブル",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "トラブル",
              "right": "Trouble / incident",
              "furigana": "トラブル",
              "romaji": "toraburu"
            },
            {
              "id": "p_1",
              "left": "落とし物",
              "right": "Lost property",
              "furigana": "おとしもの",
              "romaji": "otoshimono"
            },
            {
              "id": "p_2",
              "left": "遅延",
              "right": "Train / flight delay",
              "furigana": "ちえん",
              "romaji": "chien"
            },
            {
              "id": "p_3",
              "left": "紛失",
              "right": "Loss / misplacement",
              "furigana": "ふんしつ",
              "romaji": "funshitsu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l13_8",
          "type": "dialogue",
          "prompt": "トラブルについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "トラブルについて教えていただけますか？",
          "furigana": "トラブルについて教えていただけますか？",
          "romaji": "toraburu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Trouble / incident?",
          "audioText": "トラブルについて教えていただけますか？",
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
      "id": "u18_l14",
      "unitId": "unit_18",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Loss / misplacement & Resolution / solution",
      "titleJp": "紛失・解決",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "紛失",
        "解決",
        "相談"
      ],
      "kanjiKeywords": [
        "紛",
        "失",
        "解",
        "決",
        "相",
        "談"
      ],
      "items": [
        {
          "id": "u18_l14_1",
          "type": "listen",
          "prompt": "紛失",
          "furigana": "ふんしつ",
          "romaji": "funshitsu",
          "english": "Loss / misplacement",
          "audioText": "ふんしつ",
          "options": [
            "Confirming Train / flight delay",
            "Resolution / solution",
            "Confirming Advice",
            "Loss / misplacement"
          ],
          "correctAnswer": "Loss / misplacement"
        },
        {
          "id": "u18_l14_2",
          "type": "spell",
          "prompt": "紛失",
          "furigana": "ふんしつ",
          "romaji": "funshitsu",
          "english": "Build 'Loss / misplacement'",
          "audioText": "ふんしつ",
          "tileBank": [
            "を",
            "ほ",
            "つ",
            "し",
            "ん",
            "ふ",
            "ろ",
            "な"
          ],
          "correctAnswer": "ふんしつ"
        },
        {
          "id": "u18_l14_3",
          "type": "cloze",
          "prompt": "私は解決がすきです",
          "furigana": "わたしはかいけつがすきです",
          "romaji": "Watashi wa kaiketsu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Resolution / solution.",
          "audioText": "解決",
          "clozeSentence": "これは解決 {{BLANK}} す。",
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
          "id": "u18_l14_4",
          "type": "scramble",
          "prompt": "これは解決です",
          "furigana": "これはかいけつです",
          "romaji": "Kore wa kaiketsu desu.",
          "english": "This is Resolution / solution.",
          "audioText": "これは解決です",
          "scrambleTokens": [
            "解決",
            "これは",
            "それ",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "解決",
            "です"
          ],
          "correctAnswer": "これは解決です"
        },
        {
          "id": "u18_l14_5",
          "type": "speak",
          "prompt": "相談",
          "furigana": "そうだん",
          "romaji": "soudan",
          "english": "Pronounce: Consultation",
          "audioText": "そうだん",
          "targetSpeech": "相談",
          "options": [
            "Consultation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "相談"
        },
        {
          "id": "u18_l14_6",
          "type": "dictate",
          "prompt": "相談をお願いします",
          "furigana": "そうだんをおねがいします",
          "romaji": "soudan o onegaishimasu.",
          "english": "Consultation, please.",
          "audioText": "相談をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "です",
            "を",
            "相談"
          ],
          "dictateSolution": [
            "相談",
            "を",
            "お願いします"
          ],
          "correctAnswer": "相談をお願いします"
        },
        {
          "id": "u18_l14_7",
          "type": "match",
          "prompt": "紛失・解決・相談・助言",
          "furigana": "ふんしつ・かいけつ・そうだん・じょげん",
          "romaji": "funshitsu, kaiketsu, soudan, jogen",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ふんしつ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "紛失",
              "right": "Loss / misplacement",
              "furigana": "ふんしつ",
              "romaji": "funshitsu"
            },
            {
              "id": "p_1",
              "left": "解決",
              "right": "Resolution / solution",
              "furigana": "かいけつ",
              "romaji": "kaiketsu"
            },
            {
              "id": "p_2",
              "left": "相談",
              "right": "Consultation",
              "furigana": "そうだん",
              "romaji": "soudan"
            },
            {
              "id": "p_3",
              "left": "助言",
              "right": "Advice",
              "furigana": "じょげん",
              "romaji": "jogen"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l14_8",
          "type": "dialogue",
          "prompt": "落とし物の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "落とし物の準備はできていますか？",
          "furigana": "落とし物の準備はできていますか？",
          "romaji": "otoshimono no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Lost property ready?",
          "audioText": "落とし物の準備はできていますか？",
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
      "id": "u18_l15",
      "unitId": "unit_18",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 18 Master Exam",
      "iconType": "test",
      "title": "Unit 18 Master Exam",
      "titleJp": "第18週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "助言",
        "緊急",
        "問い合わせ"
      ],
      "kanjiKeywords": [
        "助",
        "言",
        "緊",
        "急",
        "問",
        "合"
      ],
      "items": [
        {
          "id": "u18_l15_1",
          "type": "listen",
          "prompt": "助言",
          "furigana": "じょげん",
          "romaji": "jogen",
          "english": "Advice",
          "audioText": "じょげん",
          "options": [
            "Confirming Lost property",
            "Confirming Consultation",
            "Advice",
            "Confirming Peace of mind / relief"
          ],
          "correctAnswer": "Advice"
        },
        {
          "id": "u18_l15_2",
          "type": "spell",
          "prompt": "助言",
          "furigana": "じょげん",
          "romaji": "jogen",
          "english": "Build 'Advice'",
          "audioText": "じょげん",
          "tileBank": [
            "ん",
            "や",
            "げ",
            "た",
            "る",
            "く",
            "じ",
            "ょ"
          ],
          "correctAnswer": "じょげん"
        },
        {
          "id": "u18_l15_3",
          "type": "cloze",
          "prompt": "私は緊急がすきです",
          "furigana": "わたしはきんきゅうがすきです",
          "romaji": "Watashi wa kinkyuu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Emergency.",
          "audioText": "緊急",
          "clozeSentence": "これは緊急 {{BLANK}} す。",
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
          "id": "u18_l15_4",
          "type": "scramble",
          "prompt": "これは緊急です",
          "furigana": "これはきんきゅうです",
          "romaji": "Kore wa kinkyuu desu.",
          "english": "This is Emergency.",
          "audioText": "これは緊急です",
          "scrambleTokens": [
            "これは",
            "緊急",
            "それ",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "緊急",
            "です"
          ],
          "correctAnswer": "これは緊急です"
        },
        {
          "id": "u18_l15_5",
          "type": "speak",
          "prompt": "問い合わせ",
          "furigana": "といあわせ",
          "romaji": "toiawase",
          "english": "Pronounce: Inquiry / contact",
          "audioText": "といあわせ",
          "targetSpeech": "問い合わせ",
          "options": [
            "Inquiry / contact",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "問い合わせ"
        },
        {
          "id": "u18_l15_6",
          "type": "dictate",
          "prompt": "問い合わせをお願いします",
          "furigana": "といあわせをおねがいします",
          "romaji": "toiawase o onegaishimasu.",
          "english": "Inquiry / contact, please.",
          "audioText": "問い合わせをお願いします",
          "dictateTokens": [
            "を",
            "問い合わせ",
            "です",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "問い合わせ",
            "を",
            "お願いします"
          ],
          "correctAnswer": "問い合わせをお願いします"
        },
        {
          "id": "u18_l15_7",
          "type": "match",
          "prompt": "助言・緊急・問い合わせ・警察",
          "furigana": "じょげん・きんきゅう・といあわせ・けいさつ",
          "romaji": "jogen, kinkyuu, toiawase, keisatsu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じょげん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "助言",
              "right": "Advice",
              "furigana": "じょげん",
              "romaji": "jogen"
            },
            {
              "id": "p_1",
              "left": "緊急",
              "right": "Emergency",
              "furigana": "きんきゅう",
              "romaji": "kinkyuu"
            },
            {
              "id": "p_2",
              "left": "問い合わせ",
              "right": "Inquiry / contact",
              "furigana": "といあわせ",
              "romaji": "toiawase"
            },
            {
              "id": "p_3",
              "left": "警察",
              "right": "Police",
              "furigana": "けいさつ",
              "romaji": "keisatsu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u18_l15_8",
          "type": "dialogue",
          "prompt": "遅延についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "遅延についてどう思われますか？",
          "furigana": "遅延についてどう思われますか？",
          "romaji": "chien ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Train / flight delay?",
          "audioText": "遅延についてどう思われますか？",
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
    "id": "gate_unit_18",
    "unitId": "unit_18",
    "title": "Unit 18 Mastery Checkpoint",
    "titleJp": "第18週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u18_l1_1",
        "type": "listen",
        "prompt": "トラブル",
        "furigana": "トラブル",
        "romaji": "toraburu",
        "english": "Trouble / incident",
        "audioText": "トラブル",
        "options": [
          "Reissue (card/ticket)",
          "Inquiry / contact",
          "Confirming Consultation",
          "Trouble / incident"
        ],
        "correctAnswer": "Trouble / incident"
      },
      {
        "id": "u18_l1_2",
        "type": "spell",
        "prompt": "トラブル",
        "furigana": "トラブル",
        "romaji": "toraburu",
        "english": "Build 'Trouble / incident'",
        "audioText": "トラブル",
        "tileBank": [
          "ル",
          "は",
          "ブ",
          "ぬ",
          "ね",
          "ト",
          "け",
          "ラ"
        ],
        "correctAnswer": "トラブル"
      },
      {
        "id": "u18_l3_1",
        "type": "listen",
        "prompt": "助言",
        "furigana": "じょげん",
        "romaji": "jogen",
        "english": "Advice",
        "audioText": "じょげん",
        "options": [
          "Confirming Consultation",
          "Consultation",
          "Advice",
          "Confirming Resolution / solution"
        ],
        "correctAnswer": "Advice"
      },
      {
        "id": "u18_l3_2",
        "type": "spell",
        "prompt": "助言",
        "furigana": "じょげん",
        "romaji": "jogen",
        "english": "Build 'Advice'",
        "audioText": "じょげん",
        "tileBank": [
          "じ",
          "ょ",
          "む",
          "え",
          "あ",
          "ん",
          "げ",
          "は"
        ],
        "correctAnswer": "じょげん"
      },
      {
        "id": "u18_l5_1",
        "type": "listen",
        "prompt": "再発行",
        "furigana": "さいはっこう",
        "romaji": "sai hakkou",
        "english": "Reissue (card/ticket)",
        "audioText": "さいはっこう",
        "options": [
          "Confirming Official certificate",
          "Reissue (card/ticket)",
          "Confirming Loss / misplacement",
          "Confirming Train / flight delay"
        ],
        "correctAnswer": "Reissue (card/ticket)"
      },
      {
        "id": "u18_l5_2",
        "type": "spell",
        "prompt": "再発行",
        "furigana": "さいはっこう",
        "romaji": "sai hakkou",
        "english": "Build 'Reissue (card/ticket)'",
        "audioText": "さいはっこう",
        "tileBank": [
          "は",
          "さ",
          "っ",
          "い",
          "ゆ",
          "こ",
          "ろ",
          "う"
        ],
        "correctAnswer": "さいはっこう"
      },
      {
        "id": "u18_l7_1",
        "type": "listen",
        "prompt": "紛失の確認",
        "furigana": "ふんしつのかくにん",
        "romaji": "funshitsu no kakunin",
        "english": "Confirming Loss / misplacement",
        "audioText": "ふんしつのかくにん",
        "options": [
          "Confirming Repair",
          "Confirming Resolution / solution",
          "Confirming Loss / misplacement",
          "Confirming Train / flight delay"
        ],
        "correctAnswer": "Confirming Loss / misplacement"
      },
      {
        "id": "u18_l7_2",
        "type": "spell",
        "prompt": "紛失の確認",
        "furigana": "ふんしつのかくにん",
        "romaji": "funshitsu no kakunin",
        "english": "Build 'Confirming Loss / misplacement'",
        "audioText": "ふんしつのかくにん",
        "tileBank": [
          "ん",
          "ふ",
          "に",
          "か",
          "く",
          "し",
          "つ",
          "の"
        ],
        "correctAnswer": "ふんしつのかくにん"
      },
      {
        "id": "u18_l9_1",
        "type": "listen",
        "prompt": "警察の確認",
        "furigana": "けいさつのかくにん",
        "romaji": "keisatsu no kakunin",
        "english": "Confirming Police",
        "audioText": "けいさつのかくにん",
        "options": [
          "Trouble / incident",
          "Confirming Consultation",
          "Confirming Peace of mind / relief",
          "Confirming Police"
        ],
        "correctAnswer": "Confirming Police"
      },
      {
        "id": "u18_l9_2",
        "type": "spell",
        "prompt": "警察の確認",
        "furigana": "けいさつのかくにん",
        "romaji": "keisatsu no kakunin",
        "english": "Build 'Confirming Police'",
        "audioText": "けいさつのかくにん",
        "tileBank": [
          "く",
          "か",
          "さ",
          "に",
          "の",
          "け",
          "い",
          "つ"
        ],
        "correctAnswer": "けいさつのかくにん"
      },
      {
        "id": "u18_l11_1",
        "type": "listen",
        "prompt": "トラブルの確認",
        "furigana": "トラブルのかくにん",
        "romaji": "toraburu no kakunin",
        "english": "Confirming Trouble / incident",
        "audioText": "トラブルのかくにん",
        "options": [
          "Consultation",
          "Confirming Trouble / incident",
          "Reissue (card/ticket)",
          "Confirming Police"
        ],
        "correctAnswer": "Confirming Trouble / incident"
      },
      {
        "id": "u18_l11_2",
        "type": "spell",
        "prompt": "トラブルの確認",
        "furigana": "トラブルのかくにん",
        "romaji": "toraburu no kakunin",
        "english": "Build 'Confirming Trouble / incident'",
        "audioText": "トラブルのかくにん",
        "tileBank": [
          "か",
          "ブ",
          "ラ",
          "く",
          "ト",
          "に",
          "ル",
          "の"
        ],
        "correctAnswer": "トラブルのかくにん"
      }
    ]
  }
};
