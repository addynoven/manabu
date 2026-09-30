import type { DojoUnit } from "../../models/dojo.model";

export const unit29: DojoUnit = {
  "id": "unit_29",
  "unitNumber": 29,
  "title": "Legal, Regulatory & Academic Writing",
  "titleJp": "契約書・法律・学術論文",
  "description": "Analyze formal contractual clauses (Kou/Otsu), academic papers, regulatory requirements, and rigorous deduction.",
  "icon": "⚖️",
  "themeColor": "#312E81",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u29_l1",
      "unitId": "unit_29",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Clause / contractual article & Party A and Party B",
      "titleJp": "条項・甲及び乙",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "条項",
        "甲及び乙",
        "遵守"
      ],
      "kanjiKeywords": [
        "条",
        "項",
        "甲",
        "及",
        "乙",
        "遵",
        "守"
      ],
      "items": [
        {
          "id": "u29_l1_1",
          "type": "listen",
          "prompt": "条項",
          "furigana": "じょうこう",
          "romaji": "joukou",
          "english": "Clause / contractual article",
          "audioText": "じょうこう",
          "options": [
            "Clause / contractual article",
            "Confirming Discussion / scholarly review",
            "Confirming Academic paper / thesis",
            "Based upon / taking into account"
          ],
          "correctAnswer": "Clause / contractual article"
        },
        {
          "id": "u29_l1_2",
          "type": "spell",
          "prompt": "条項",
          "furigana": "じょうこう",
          "romaji": "joukou",
          "english": "Build 'Clause / contractual article'",
          "audioText": "じょうこう",
          "tileBank": [
            "う",
            "じ",
            "た",
            "ょ",
            "ひ",
            "こ",
            "う",
            "や"
          ],
          "correctAnswer": "じょうこう"
        },
        {
          "id": "u29_l1_3",
          "type": "cloze",
          "prompt": "私は甲及び乙がすきです",
          "furigana": "わたしはこうおよびおつがすきです",
          "romaji": "Watashi wa kou oyobi otsu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Party A and Party B.",
          "audioText": "甲及び乙",
          "clozeSentence": "これは甲及び乙 {{BLANK}} す。",
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
          "id": "u29_l1_4",
          "type": "scramble",
          "prompt": "これは甲及び乙です",
          "furigana": "これはこうおよびおつです",
          "romaji": "Kore wa kou oyobi otsu desu.",
          "english": "This is Party A and Party B.",
          "audioText": "これは甲及び乙です",
          "scrambleTokens": [
            "ではありません",
            "甲及び乙",
            "それ",
            "です",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "甲及び乙",
            "です"
          ],
          "correctAnswer": "これは甲及び乙です"
        },
        {
          "id": "u29_l1_5",
          "type": "speak",
          "prompt": "遵守",
          "furigana": "じゅんしゅ",
          "romaji": "junshu",
          "english": "Pronounce: Compliance / observance",
          "audioText": "じゅんしゅ",
          "targetSpeech": "遵守",
          "options": [
            "Compliance / observance",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "遵守"
        },
        {
          "id": "u29_l1_6",
          "type": "dictate",
          "prompt": "遵守をお願いします",
          "furigana": "じゅんしゅをおねがいします",
          "romaji": "junshu o onegaishimasu.",
          "english": "Compliance / observance, please.",
          "audioText": "遵守をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "遵守",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "遵守",
            "を",
            "お願いします"
          ],
          "correctAnswer": "遵守をお願いします"
        },
        {
          "id": "u29_l1_7",
          "type": "match",
          "prompt": "条項・甲及び乙・遵守・免責",
          "furigana": "じょうこう・こうおよびおつ・じゅんしゅ・めんせき",
          "romaji": "joukou, kou oyobi otsu, junshu, menseki",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じょうこう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "条項",
              "right": "Clause / contractual article",
              "furigana": "じょうこう",
              "romaji": "joukou"
            },
            {
              "id": "p_1",
              "left": "甲及び乙",
              "right": "Party A and Party B",
              "furigana": "こうおよびおつ",
              "romaji": "kou oyobi otsu"
            },
            {
              "id": "p_2",
              "left": "遵守",
              "right": "Compliance / observance",
              "furigana": "じゅんしゅ",
              "romaji": "junshu"
            },
            {
              "id": "p_3",
              "left": "免責",
              "right": "Exemption from liability / disclaimer",
              "furigana": "めんせき",
              "romaji": "menseki"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l1_8",
          "type": "dialogue",
          "prompt": "条項について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "条項について教えていただけますか？",
          "furigana": "条項について教えていただけますか？",
          "romaji": "joukou ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Clause / contractual article?",
          "audioText": "条項について教えていただけますか？",
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
      "id": "u29_l2",
      "unitId": "unit_29",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Exemption from liability / disclaimer & Compensation for damages",
      "titleJp": "免責・損害賠償",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "免責",
        "損害賠償",
        "管轄"
      ],
      "kanjiKeywords": [
        "免",
        "責",
        "損",
        "害",
        "賠",
        "償",
        "管",
        "轄"
      ],
      "items": [
        {
          "id": "u29_l2_1",
          "type": "listen",
          "prompt": "免責",
          "furigana": "めんせき",
          "romaji": "menseki",
          "english": "Exemption from liability / disclaimer",
          "audioText": "めんせき",
          "options": [
            "Academic paper / thesis",
            "Exemption from liability / disclaimer",
            "Confirming Citation / quotation",
            "Confirming Verification / empirical testing"
          ],
          "correctAnswer": "Exemption from liability / disclaimer"
        },
        {
          "id": "u29_l2_2",
          "type": "spell",
          "prompt": "免責",
          "furigana": "めんせき",
          "romaji": "menseki",
          "english": "Build 'Exemption from liability / disclaimer'",
          "audioText": "めんせき",
          "tileBank": [
            "め",
            "い",
            "せ",
            "ん",
            "な",
            "ね",
            "と",
            "き"
          ],
          "correctAnswer": "めんせき"
        },
        {
          "id": "u29_l2_3",
          "type": "cloze",
          "prompt": "私は損害賠償がすきです",
          "furigana": "わたしはそんがいばいしょうがすきです",
          "romaji": "Watashi wa songai baishou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Compensation for damages.",
          "audioText": "損害賠償",
          "clozeSentence": "これは損害賠償 {{BLANK}} す。",
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
          "id": "u29_l2_4",
          "type": "scramble",
          "prompt": "これは損害賠償です",
          "furigana": "これはそんがいばいしょうです",
          "romaji": "Kore wa songai baishou desu.",
          "english": "This is Compensation for damages.",
          "audioText": "これは損害賠償です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "これは",
            "それ",
            "損害賠償"
          ],
          "scrambleSolution": [
            "これは",
            "損害賠償",
            "です"
          ],
          "correctAnswer": "これは損害賠償です"
        },
        {
          "id": "u29_l2_5",
          "type": "speak",
          "prompt": "管轄",
          "furigana": "かんかつ",
          "romaji": "kankatsu",
          "english": "Pronounce: Jurisdiction",
          "audioText": "かんかつ",
          "targetSpeech": "管轄",
          "options": [
            "Jurisdiction",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "管轄"
        },
        {
          "id": "u29_l2_6",
          "type": "dictate",
          "prompt": "管轄をお願いします",
          "furigana": "かんかつをおねがいします",
          "romaji": "kankatsu o onegaishimasu.",
          "english": "Jurisdiction, please.",
          "audioText": "管轄をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "管轄",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "管轄",
            "を",
            "お願いします"
          ],
          "correctAnswer": "管轄をお願いします"
        },
        {
          "id": "u29_l2_7",
          "type": "match",
          "prompt": "免責・損害賠償・管轄・準拠法",
          "furigana": "めんせき・そんがいばいしょう・かんかつ・じゅんきょほう",
          "romaji": "menseki, songai baishou, kankatsu, junkyohou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "めんせき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "免責",
              "right": "Exemption from liability / disclaimer",
              "furigana": "めんせき",
              "romaji": "menseki"
            },
            {
              "id": "p_1",
              "left": "損害賠償",
              "right": "Compensation for damages",
              "furigana": "そんがいばいしょう",
              "romaji": "songai baishou"
            },
            {
              "id": "p_2",
              "left": "管轄",
              "right": "Jurisdiction",
              "furigana": "かんかつ",
              "romaji": "kankatsu"
            },
            {
              "id": "p_3",
              "left": "準拠法",
              "right": "Governing law",
              "furigana": "じゅんきょほう",
              "romaji": "junkyohou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l2_8",
          "type": "dialogue",
          "prompt": "甲及び乙の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "甲及び乙の準備はできていますか？",
          "furigana": "甲及び乙の準備はできていますか？",
          "romaji": "kou oyobi otsu no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Party A and Party B ready?",
          "audioText": "甲及び乙の準備はできていますか？",
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
      "id": "u29_l3",
      "unitId": "unit_29",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Governing law & Academic paper / thesis",
      "titleJp": "準拠法・論文",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "準拠法",
        "論文",
        "検証"
      ],
      "kanjiKeywords": [
        "準",
        "拠",
        "法",
        "論",
        "文",
        "検",
        "証"
      ],
      "items": [
        {
          "id": "u29_l3_1",
          "type": "listen",
          "prompt": "準拠法",
          "furigana": "じゅんきょほう",
          "romaji": "junkyohou",
          "english": "Governing law",
          "audioText": "じゅんきょほう",
          "options": [
            "Compensation for damages",
            "Governing law",
            "Validity / soundness",
            "Confirming Compensation for damages"
          ],
          "correctAnswer": "Governing law"
        },
        {
          "id": "u29_l3_2",
          "type": "spell",
          "prompt": "論文",
          "furigana": "ろんぶん",
          "romaji": "ronbun",
          "english": "Build 'Academic paper / thesis'",
          "audioText": "ろんぶん",
          "tileBank": [
            "ぶ",
            "こ",
            "ろ",
            "と",
            "ん",
            "さ",
            "よ",
            "ん"
          ],
          "correctAnswer": "ろんぶん"
        },
        {
          "id": "u29_l3_3",
          "type": "cloze",
          "prompt": "私は論文がすきです",
          "furigana": "わたしはろんぶんがすきです",
          "romaji": "Watashi wa ronbun ga suki desu.",
          "english": "Fill in the blank with the correct particle for Academic paper / thesis.",
          "audioText": "論文",
          "clozeSentence": "これは論文 {{BLANK}} す。",
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
          "id": "u29_l3_4",
          "type": "scramble",
          "prompt": "これは論文です",
          "furigana": "これはろんぶんです",
          "romaji": "Kore wa ronbun desu.",
          "english": "This is Academic paper / thesis.",
          "audioText": "これは論文です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "論文",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "論文",
            "です"
          ],
          "correctAnswer": "これは論文です"
        },
        {
          "id": "u29_l3_5",
          "type": "speak",
          "prompt": "検証",
          "furigana": "けんしょう",
          "romaji": "kenshou",
          "english": "Pronounce: Verification / empirical testing",
          "audioText": "けんしょう",
          "targetSpeech": "検証",
          "options": [
            "Verification / empirical testing",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "検証"
        },
        {
          "id": "u29_l3_6",
          "type": "dictate",
          "prompt": "検証をお願いします",
          "furigana": "けんしょうをおねがいします",
          "romaji": "kenshou o onegaishimasu.",
          "english": "Verification / empirical testing, please.",
          "audioText": "検証をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "ありがとう",
            "検証",
            "お願いします"
          ],
          "dictateSolution": [
            "検証",
            "を",
            "お願いします"
          ],
          "correctAnswer": "検証をお願いします"
        },
        {
          "id": "u29_l3_7",
          "type": "match",
          "prompt": "準拠法・論文・検証・妥当性",
          "furigana": "じゅんきょほう・ろんぶん・けんしょう・だとうせい",
          "romaji": "junkyohou, ronbun, kenshou, datousei",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じゅんきょほう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "準拠法",
              "right": "Governing law",
              "furigana": "じゅんきょほう",
              "romaji": "junkyohou"
            },
            {
              "id": "p_1",
              "left": "論文",
              "right": "Academic paper / thesis",
              "furigana": "ろんぶん",
              "romaji": "ronbun"
            },
            {
              "id": "p_2",
              "left": "検証",
              "right": "Verification / empirical testing",
              "furigana": "けんしょう",
              "romaji": "kenshou"
            },
            {
              "id": "p_3",
              "left": "妥当性",
              "right": "Validity / soundness",
              "furigana": "だとうせい",
              "romaji": "datousei"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l3_8",
          "type": "dialogue",
          "prompt": "遵守についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "遵守についてどう思われますか？",
          "furigana": "遵守についてどう思われますか？",
          "romaji": "junshu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Compliance / observance?",
          "audioText": "遵守についてどう思われますか？",
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
      "id": "u29_l4",
      "unitId": "unit_29",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Validity / soundness & Discussion / scholarly review",
      "titleJp": "妥当性・考察",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "妥当性",
        "考察",
        "引用"
      ],
      "kanjiKeywords": [
        "妥",
        "当",
        "性",
        "考",
        "察",
        "引",
        "用"
      ],
      "items": [
        {
          "id": "u29_l4_1",
          "type": "listen",
          "prompt": "妥当性",
          "furigana": "だとうせい",
          "romaji": "datousei",
          "english": "Validity / soundness",
          "audioText": "だとうせい",
          "options": [
            "Confirming Governing law",
            "Confirming Force majeure / act of God",
            "In consideration of / in light of",
            "Validity / soundness"
          ],
          "correctAnswer": "Validity / soundness"
        },
        {
          "id": "u29_l4_2",
          "type": "spell",
          "prompt": "妥当性",
          "furigana": "だとうせい",
          "romaji": "datousei",
          "english": "Build 'Validity / soundness'",
          "audioText": "だとうせい",
          "tileBank": [
            "せ",
            "ま",
            "と",
            "め",
            "ひ",
            "う",
            "だ",
            "い"
          ],
          "correctAnswer": "だとうせい"
        },
        {
          "id": "u29_l4_3",
          "type": "cloze",
          "prompt": "私は考察がすきです",
          "furigana": "わたしはこうさつがすきです",
          "romaji": "Watashi wa kousatsu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Discussion / scholarly review.",
          "audioText": "考察",
          "clozeSentence": "これは考察 {{BLANK}} す。",
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
          "id": "u29_l4_4",
          "type": "scramble",
          "prompt": "これは考察です",
          "furigana": "これはこうさつです",
          "romaji": "Kore wa kousatsu desu.",
          "english": "This is Discussion / scholarly review.",
          "audioText": "これは考察です",
          "scrambleTokens": [
            "それ",
            "これは",
            "ではありません",
            "です",
            "考察"
          ],
          "scrambleSolution": [
            "これは",
            "考察",
            "です"
          ],
          "correctAnswer": "これは考察です"
        },
        {
          "id": "u29_l4_5",
          "type": "speak",
          "prompt": "引用",
          "furigana": "いんよう",
          "romaji": "in-you",
          "english": "Pronounce: Citation / quotation",
          "audioText": "いんよう",
          "targetSpeech": "引用",
          "options": [
            "Citation / quotation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "引用"
        },
        {
          "id": "u29_l4_6",
          "type": "dictate",
          "prompt": "引用をお願いします",
          "furigana": "いんようをおねがいします",
          "romaji": "in-you o onegaishimasu.",
          "english": "Citation / quotation, please.",
          "audioText": "引用をお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "を",
            "ありがとう",
            "引用"
          ],
          "dictateSolution": [
            "引用",
            "を",
            "お願いします"
          ],
          "correctAnswer": "引用をお願いします"
        },
        {
          "id": "u29_l4_7",
          "type": "match",
          "prompt": "妥当性・考察・引用・鑑みる",
          "furigana": "だとうせい・こうさつ・いんよう・かんがみる",
          "romaji": "datousei, kousatsu, in-you, kangamiru",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "だとうせい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "妥当性",
              "right": "Validity / soundness",
              "furigana": "だとうせい",
              "romaji": "datousei"
            },
            {
              "id": "p_1",
              "left": "考察",
              "right": "Discussion / scholarly review",
              "furigana": "こうさつ",
              "romaji": "kousatsu"
            },
            {
              "id": "p_2",
              "left": "引用",
              "right": "Citation / quotation",
              "furigana": "いんよう",
              "romaji": "in-you"
            },
            {
              "id": "p_3",
              "left": "鑑みる",
              "right": "In consideration of / in light of",
              "furigana": "かんがみる",
              "romaji": "kangamiru"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l4_8",
          "type": "dialogue",
          "prompt": "次は免責に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は免責に進みましょう。",
          "furigana": "次は免責に進みましょう。",
          "romaji": "Tsugi wa menseki ni susumimashou.",
          "english": "Speaker: Let's proceed to Exemption from liability / disclaimer next.",
          "audioText": "次は免責に進みましょう。",
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
      "id": "u29_l5",
      "unitId": "unit_29",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "In consideration of / in light of & Based upon / taking into account",
      "titleJp": "鑑みる・踏まえる",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "鑑みる",
        "踏まえる",
        "不可抗力"
      ],
      "kanjiKeywords": [
        "鑑",
        "踏",
        "不",
        "可",
        "抗",
        "力"
      ],
      "items": [
        {
          "id": "u29_l5_1",
          "type": "listen",
          "prompt": "鑑みる",
          "furigana": "かんがみる",
          "romaji": "kangamiru",
          "english": "In consideration of / in light of",
          "audioText": "かんがみる",
          "options": [
            "In consideration of / in light of",
            "Governing law",
            "Confirming Discussion / scholarly review",
            "Confirming Verification / empirical testing"
          ],
          "correctAnswer": "In consideration of / in light of"
        },
        {
          "id": "u29_l5_2",
          "type": "spell",
          "prompt": "鑑みる",
          "furigana": "かんがみる",
          "romaji": "kangamiru",
          "english": "Build 'In consideration of / in light of'",
          "audioText": "かんがみる",
          "tileBank": [
            "み",
            "る",
            "か",
            "ん",
            "が",
            "い",
            "せ",
            "ろ"
          ],
          "correctAnswer": "かんがみる"
        },
        {
          "id": "u29_l5_3",
          "type": "cloze",
          "prompt": "私は踏まえるがすきです",
          "furigana": "わたしはふまえるがすきです",
          "romaji": "Watashi wa fumaeru ga suki desu.",
          "english": "Fill in the blank with the correct particle for Based upon / taking into account.",
          "audioText": "踏まえる",
          "clozeSentence": "これは踏まえる {{BLANK}} す。",
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
          "id": "u29_l5_4",
          "type": "scramble",
          "prompt": "これは踏まえるです",
          "furigana": "これはふまえるです",
          "romaji": "Kore wa fumaeru desu.",
          "english": "This is Based upon / taking into account.",
          "audioText": "これは踏まえるです",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "これは",
            "踏まえる"
          ],
          "scrambleSolution": [
            "これは",
            "踏まえる",
            "です"
          ],
          "correctAnswer": "これは踏まえるです"
        },
        {
          "id": "u29_l5_5",
          "type": "speak",
          "prompt": "不可抗力",
          "furigana": "ふかこうりょく",
          "romaji": "fukakouryoku",
          "english": "Pronounce: Force majeure / act of God",
          "audioText": "ふかこうりょく",
          "targetSpeech": "不可抗力",
          "options": [
            "Force majeure / act of God",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "不可抗力"
        },
        {
          "id": "u29_l5_6",
          "type": "dictate",
          "prompt": "不可抗力をお願いします",
          "furigana": "ふかこうりょくをおねがいします",
          "romaji": "fukakouryoku o onegaishimasu.",
          "english": "Force majeure / act of God, please.",
          "audioText": "不可抗力をお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "です",
            "不可抗力",
            "を"
          ],
          "dictateSolution": [
            "不可抗力",
            "を",
            "お願いします"
          ],
          "correctAnswer": "不可抗力をお願いします"
        },
        {
          "id": "u29_l5_7",
          "type": "match",
          "prompt": "鑑みる・踏まえる・不可抗力・条項の確認",
          "furigana": "かんがみる・ふまえる・ふかこうりょく・じょうこうのかくにん",
          "romaji": "kangamiru, fumaeru, fukakouryoku, joukou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かんがみる",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "鑑みる",
              "right": "In consideration of / in light of",
              "furigana": "かんがみる",
              "romaji": "kangamiru"
            },
            {
              "id": "p_1",
              "left": "踏まえる",
              "right": "Based upon / taking into account",
              "furigana": "ふまえる",
              "romaji": "fumaeru"
            },
            {
              "id": "p_2",
              "left": "不可抗力",
              "right": "Force majeure / act of God",
              "furigana": "ふかこうりょく",
              "romaji": "fukakouryoku"
            },
            {
              "id": "p_3",
              "left": "条項の確認",
              "right": "Confirming Clause / contractual article",
              "furigana": "じょうこうのかくにん",
              "romaji": "joukou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l5_8",
          "type": "dialogue",
          "prompt": "条項について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "条項について教えていただけますか？",
          "furigana": "条項について教えていただけますか？",
          "romaji": "joukou ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Clause / contractual article?",
          "audioText": "条項について教えていただけますか？",
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
      "id": "u29_l6",
      "unitId": "unit_29",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Clause / contractual article & Confirming Party A and Party B",
      "titleJp": "条項の確認・甲及び乙の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "条項の確認",
        "甲及び乙の確認",
        "遵守の確認"
      ],
      "kanjiKeywords": [
        "条",
        "項",
        "確",
        "認",
        "甲",
        "及",
        "乙",
        "確",
        "認",
        "遵",
        "守",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u29_l6_1",
          "type": "listen",
          "prompt": "条項の確認",
          "furigana": "じょうこうのかくにん",
          "romaji": "joukou no kakunin",
          "english": "Confirming Clause / contractual article",
          "audioText": "じょうこうのかくにん",
          "options": [
            "Confirming Clause / contractual article",
            "Clause / contractual article",
            "Discussion / scholarly review",
            "Based upon / taking into account"
          ],
          "correctAnswer": "Confirming Clause / contractual article"
        },
        {
          "id": "u29_l6_2",
          "type": "spell",
          "prompt": "条項の確認",
          "furigana": "じょうこうのかくにん",
          "romaji": "joukou no kakunin",
          "english": "Build 'Confirming Clause / contractual article'",
          "audioText": "じょうこうのかくにん",
          "tileBank": [
            "こ",
            "く",
            "の",
            "う",
            "じ",
            "ょ",
            "う",
            "か"
          ],
          "correctAnswer": "じょうこうのかくにん"
        },
        {
          "id": "u29_l6_3",
          "type": "cloze",
          "prompt": "私は甲及び乙の確認がすきです",
          "furigana": "わたしはこうおよびおつのかくにんがすきです",
          "romaji": "Watashi wa kou oyobi otsu no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Party A and Party B.",
          "audioText": "甲及び乙の確認",
          "clozeSentence": "これは甲及び乙の確認 {{BLANK}} す。",
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
          "id": "u29_l6_4",
          "type": "scramble",
          "prompt": "これは甲及び乙の確認です",
          "furigana": "これはこうおよびおつのかくにんです",
          "romaji": "Kore wa kou oyobi otsu no kakunin desu.",
          "english": "This is Confirming Party A and Party B.",
          "audioText": "これは甲及び乙の確認です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "これは",
            "甲及び乙の確認",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "甲及び乙の確認",
            "です"
          ],
          "correctAnswer": "これは甲及び乙の確認です"
        },
        {
          "id": "u29_l6_5",
          "type": "speak",
          "prompt": "遵守の確認",
          "furigana": "じゅんしゅのかくにん",
          "romaji": "junshu no kakunin",
          "english": "Pronounce: Confirming Compliance / observance",
          "audioText": "じゅんしゅのかくにん",
          "targetSpeech": "遵守の確認",
          "options": [
            "Confirming Compliance / observance",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "遵守の確認"
        },
        {
          "id": "u29_l6_6",
          "type": "dictate",
          "prompt": "遵守の確認をお願いします",
          "furigana": "じゅんしゅのかくにんをおねがいします",
          "romaji": "junshu no kakunin o onegaishimasu.",
          "english": "Confirming Compliance / observance, please.",
          "audioText": "遵守の確認をお願いします",
          "dictateTokens": [
            "遵守の確認",
            "ありがとう",
            "です",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "遵守の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "遵守の確認をお願いします"
        },
        {
          "id": "u29_l6_7",
          "type": "match",
          "prompt": "条項の確認・甲及び乙の確認・遵守の確認・免責の確認",
          "furigana": "じょうこうのかくにん・こうおよびおつのかくにん・じゅんしゅのかくにん・めんせきのかくにん",
          "romaji": "joukou no kakunin, kou oyobi otsu no kakunin, junshu no kakunin, menseki no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じょうこうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "条項の確認",
              "right": "Confirming Clause / contractual article",
              "furigana": "じょうこうのかくにん",
              "romaji": "joukou no kakunin"
            },
            {
              "id": "p_1",
              "left": "甲及び乙の確認",
              "right": "Confirming Party A and Party B",
              "furigana": "こうおよびおつのかくにん",
              "romaji": "kou oyobi otsu no kakunin"
            },
            {
              "id": "p_2",
              "left": "遵守の確認",
              "right": "Confirming Compliance / observance",
              "furigana": "じゅんしゅのかくにん",
              "romaji": "junshu no kakunin"
            },
            {
              "id": "p_3",
              "left": "免責の確認",
              "right": "Confirming Exemption from liability / disclaimer",
              "furigana": "めんせきのかくにん",
              "romaji": "menseki no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l6_8",
          "type": "dialogue",
          "prompt": "甲及び乙の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "甲及び乙の準備はできていますか？",
          "furigana": "甲及び乙の準備はできていますか？",
          "romaji": "kou oyobi otsu no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Party A and Party B ready?",
          "audioText": "甲及び乙の準備はできていますか？",
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
      "id": "u29_l7",
      "unitId": "unit_29",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Exemption from liability / disclaimer & Confirming Compensation for damages",
      "titleJp": "免責の確認・損害賠償の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "免責の確認",
        "損害賠償の確認",
        "管轄の確認"
      ],
      "kanjiKeywords": [
        "免",
        "責",
        "確",
        "認",
        "損",
        "害",
        "賠",
        "償",
        "確",
        "認",
        "管",
        "轄",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u29_l7_1",
          "type": "listen",
          "prompt": "免責の確認",
          "furigana": "めんせきのかくにん",
          "romaji": "menseki no kakunin",
          "english": "Confirming Exemption from liability / disclaimer",
          "audioText": "めんせきのかくにん",
          "options": [
            "Confirming Jurisdiction",
            "Confirming Discussion / scholarly review",
            "Confirming Exemption from liability / disclaimer",
            "Citation / quotation"
          ],
          "correctAnswer": "Confirming Exemption from liability / disclaimer"
        },
        {
          "id": "u29_l7_2",
          "type": "spell",
          "prompt": "免責の確認",
          "furigana": "めんせきのかくにん",
          "romaji": "menseki no kakunin",
          "english": "Build 'Confirming Exemption from liability / disclaimer'",
          "audioText": "めんせきのかくにん",
          "tileBank": [
            "に",
            "ん",
            "せ",
            "き",
            "か",
            "め",
            "く",
            "の"
          ],
          "correctAnswer": "めんせきのかくにん"
        },
        {
          "id": "u29_l7_3",
          "type": "cloze",
          "prompt": "私は損害賠償の確認がすきです",
          "furigana": "わたしはそんがいばいしょうのかくにんがすきです",
          "romaji": "Watashi wa songai baishou no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Compensation for damages.",
          "audioText": "損害賠償の確認",
          "clozeSentence": "これは損害賠償の確認 {{BLANK}} す。",
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
          "id": "u29_l7_4",
          "type": "scramble",
          "prompt": "これは損害賠償の確認です",
          "furigana": "これはそんがいばいしょうのかくにんです",
          "romaji": "Kore wa songai baishou no kakunin desu.",
          "english": "This is Confirming Compensation for damages.",
          "audioText": "これは損害賠償の確認です",
          "scrambleTokens": [
            "損害賠償の確認",
            "それ",
            "です",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "損害賠償の確認",
            "です"
          ],
          "correctAnswer": "これは損害賠償の確認です"
        },
        {
          "id": "u29_l7_5",
          "type": "speak",
          "prompt": "管轄の確認",
          "furigana": "かんかつのかくにん",
          "romaji": "kankatsu no kakunin",
          "english": "Pronounce: Confirming Jurisdiction",
          "audioText": "かんかつのかくにん",
          "targetSpeech": "管轄の確認",
          "options": [
            "Confirming Jurisdiction",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "管轄の確認"
        },
        {
          "id": "u29_l7_6",
          "type": "dictate",
          "prompt": "管轄の確認をお願いします",
          "furigana": "かんかつのかくにんをおねがいします",
          "romaji": "kankatsu no kakunin o onegaishimasu.",
          "english": "Confirming Jurisdiction, please.",
          "audioText": "管轄の確認をお願いします",
          "dictateTokens": [
            "管轄の確認",
            "お願いします",
            "ありがとう",
            "を",
            "です"
          ],
          "dictateSolution": [
            "管轄の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "管轄の確認をお願いします"
        },
        {
          "id": "u29_l7_7",
          "type": "match",
          "prompt": "免責の確認・損害賠償の確認・管轄の確認・準拠法の確認",
          "furigana": "めんせきのかくにん・そんがいばいしょうのかくにん・かんかつのかくにん・じゅんきょほうのかくにん",
          "romaji": "menseki no kakunin, songai baishou no kakunin, kankatsu no kakunin, junkyohou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "めんせきのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "免責の確認",
              "right": "Confirming Exemption from liability / disclaimer",
              "furigana": "めんせきのかくにん",
              "romaji": "menseki no kakunin"
            },
            {
              "id": "p_1",
              "left": "損害賠償の確認",
              "right": "Confirming Compensation for damages",
              "furigana": "そんがいばいしょうのかくにん",
              "romaji": "songai baishou no kakunin"
            },
            {
              "id": "p_2",
              "left": "管轄の確認",
              "right": "Confirming Jurisdiction",
              "furigana": "かんかつのかくにん",
              "romaji": "kankatsu no kakunin"
            },
            {
              "id": "p_3",
              "left": "準拠法の確認",
              "right": "Confirming Governing law",
              "furigana": "じゅんきょほうのかくにん",
              "romaji": "junkyohou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l7_8",
          "type": "dialogue",
          "prompt": "遵守についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "遵守についてどう思われますか？",
          "furigana": "遵守についてどう思われますか？",
          "romaji": "junshu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Compliance / observance?",
          "audioText": "遵守についてどう思われますか？",
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
      "id": "u29_l8",
      "unitId": "unit_29",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Governing law & Confirming Academic paper / thesis",
      "titleJp": "準拠法の確認・論文の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "準拠法の確認",
        "論文の確認",
        "検証の確認"
      ],
      "kanjiKeywords": [
        "準",
        "拠",
        "法",
        "確",
        "認",
        "論",
        "文",
        "確",
        "認",
        "検",
        "証",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u29_l8_1",
          "type": "listen",
          "prompt": "準拠法の確認",
          "furigana": "じゅんきょほうのかくにん",
          "romaji": "junkyohou no kakunin",
          "english": "Confirming Governing law",
          "audioText": "じゅんきょほうのかくにん",
          "options": [
            "Confirming Verification / empirical testing",
            "Confirming Force majeure / act of God",
            "In consideration of / in light of",
            "Confirming Governing law"
          ],
          "correctAnswer": "Confirming Governing law"
        },
        {
          "id": "u29_l8_2",
          "type": "spell",
          "prompt": "準拠法の確認",
          "furigana": "じゅんきょほうのかくにん",
          "romaji": "junkyohou no kakunin",
          "english": "Build 'Confirming Governing law'",
          "audioText": "じゅんきょほうのかくにん",
          "tileBank": [
            "の",
            "ゅ",
            "ほ",
            "じ",
            "ょ",
            "き",
            "う",
            "ん"
          ],
          "correctAnswer": "じゅんきょほうのかくにん"
        },
        {
          "id": "u29_l8_3",
          "type": "cloze",
          "prompt": "私は論文の確認がすきです",
          "furigana": "わたしはろんぶんのかくにんがすきです",
          "romaji": "Watashi wa ronbun no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Academic paper / thesis.",
          "audioText": "論文の確認",
          "clozeSentence": "これは論文の確認 {{BLANK}} す。",
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
          "id": "u29_l8_4",
          "type": "scramble",
          "prompt": "これは論文の確認です",
          "furigana": "これはろんぶんのかくにんです",
          "romaji": "Kore wa ronbun no kakunin desu.",
          "english": "This is Confirming Academic paper / thesis.",
          "audioText": "これは論文の確認です",
          "scrambleTokens": [
            "これは",
            "論文の確認",
            "ではありません",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "論文の確認",
            "です"
          ],
          "correctAnswer": "これは論文の確認です"
        },
        {
          "id": "u29_l8_5",
          "type": "speak",
          "prompt": "検証の確認",
          "furigana": "けんしょうのかくにん",
          "romaji": "kenshou no kakunin",
          "english": "Pronounce: Confirming Verification / empirical testing",
          "audioText": "けんしょうのかくにん",
          "targetSpeech": "検証の確認",
          "options": [
            "Confirming Verification / empirical testing",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "検証の確認"
        },
        {
          "id": "u29_l8_6",
          "type": "dictate",
          "prompt": "検証の確認をお願いします",
          "furigana": "けんしょうのかくにんをおねがいします",
          "romaji": "kenshou no kakunin o onegaishimasu.",
          "english": "Confirming Verification / empirical testing, please.",
          "audioText": "検証の確認をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "検証の確認",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "検証の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "検証の確認をお願いします"
        },
        {
          "id": "u29_l8_7",
          "type": "match",
          "prompt": "準拠法の確認・論文の確認・検証の確認・妥当性の確認",
          "furigana": "じゅんきょほうのかくにん・ろんぶんのかくにん・けんしょうのかくにん・だとうせいのかくにん",
          "romaji": "junkyohou no kakunin, ronbun no kakunin, kenshou no kakunin, datousei no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じゅんきょほうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "準拠法の確認",
              "right": "Confirming Governing law",
              "furigana": "じゅんきょほうのかくにん",
              "romaji": "junkyohou no kakunin"
            },
            {
              "id": "p_1",
              "left": "論文の確認",
              "right": "Confirming Academic paper / thesis",
              "furigana": "ろんぶんのかくにん",
              "romaji": "ronbun no kakunin"
            },
            {
              "id": "p_2",
              "left": "検証の確認",
              "right": "Confirming Verification / empirical testing",
              "furigana": "けんしょうのかくにん",
              "romaji": "kenshou no kakunin"
            },
            {
              "id": "p_3",
              "left": "妥当性の確認",
              "right": "Confirming Validity / soundness",
              "furigana": "だとうせいのかくにん",
              "romaji": "datousei no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l8_8",
          "type": "dialogue",
          "prompt": "次は免責に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は免責に進みましょう。",
          "furigana": "次は免責に進みましょう。",
          "romaji": "Tsugi wa menseki ni susumimashou.",
          "english": "Speaker: Let's proceed to Exemption from liability / disclaimer next.",
          "audioText": "次は免責に進みましょう。",
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
      "id": "u29_l9",
      "unitId": "unit_29",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Validity / soundness & Confirming Discussion / scholarly review",
      "titleJp": "妥当性の確認・考察の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "妥当性の確認",
        "考察の確認",
        "引用の確認"
      ],
      "kanjiKeywords": [
        "妥",
        "当",
        "性",
        "確",
        "認",
        "考",
        "察",
        "確",
        "認",
        "引",
        "用",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u29_l9_1",
          "type": "listen",
          "prompt": "妥当性の確認",
          "furigana": "だとうせいのかくにん",
          "romaji": "datousei no kakunin",
          "english": "Confirming Validity / soundness",
          "audioText": "だとうせいのかくにん",
          "options": [
            "Confirming Validity / soundness",
            "Compliance / observance",
            "Confirming Discussion / scholarly review",
            "Confirming Clause / contractual article"
          ],
          "correctAnswer": "Confirming Validity / soundness"
        },
        {
          "id": "u29_l9_2",
          "type": "spell",
          "prompt": "妥当性の確認",
          "furigana": "だとうせいのかくにん",
          "romaji": "datousei no kakunin",
          "english": "Build 'Confirming Validity / soundness'",
          "audioText": "だとうせいのかくにん",
          "tileBank": [
            "と",
            "い",
            "の",
            "か",
            "う",
            "く",
            "だ",
            "せ"
          ],
          "correctAnswer": "だとうせいのかくにん"
        },
        {
          "id": "u29_l9_3",
          "type": "cloze",
          "prompt": "私は考察の確認がすきです",
          "furigana": "わたしはこうさつのかくにんがすきです",
          "romaji": "Watashi wa kousatsu no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Discussion / scholarly review.",
          "audioText": "考察の確認",
          "clozeSentence": "これは考察の確認 {{BLANK}} す。",
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
          "id": "u29_l9_4",
          "type": "scramble",
          "prompt": "これは考察の確認です",
          "furigana": "これはこうさつのかくにんです",
          "romaji": "Kore wa kousatsu no kakunin desu.",
          "english": "This is Confirming Discussion / scholarly review.",
          "audioText": "これは考察の確認です",
          "scrambleTokens": [
            "これは",
            "です",
            "それ",
            "ではありません",
            "考察の確認"
          ],
          "scrambleSolution": [
            "これは",
            "考察の確認",
            "です"
          ],
          "correctAnswer": "これは考察の確認です"
        },
        {
          "id": "u29_l9_5",
          "type": "speak",
          "prompt": "引用の確認",
          "furigana": "いんようのかくにん",
          "romaji": "in-you no kakunin",
          "english": "Pronounce: Confirming Citation / quotation",
          "audioText": "いんようのかくにん",
          "targetSpeech": "引用の確認",
          "options": [
            "Confirming Citation / quotation",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "引用の確認"
        },
        {
          "id": "u29_l9_6",
          "type": "dictate",
          "prompt": "引用の確認をお願いします",
          "furigana": "いんようのかくにんをおねがいします",
          "romaji": "in-you no kakunin o onegaishimasu.",
          "english": "Confirming Citation / quotation, please.",
          "audioText": "引用の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "を",
            "ありがとう",
            "引用の確認"
          ],
          "dictateSolution": [
            "引用の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "引用の確認をお願いします"
        },
        {
          "id": "u29_l9_7",
          "type": "match",
          "prompt": "妥当性の確認・考察の確認・引用の確認・鑑みるの確認",
          "furigana": "だとうせいのかくにん・こうさつのかくにん・いんようのかくにん・かんがみるのかくにん",
          "romaji": "datousei no kakunin, kousatsu no kakunin, in-you no kakunin, kangamiru no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "だとうせいのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "妥当性の確認",
              "right": "Confirming Validity / soundness",
              "furigana": "だとうせいのかくにん",
              "romaji": "datousei no kakunin"
            },
            {
              "id": "p_1",
              "left": "考察の確認",
              "right": "Confirming Discussion / scholarly review",
              "furigana": "こうさつのかくにん",
              "romaji": "kousatsu no kakunin"
            },
            {
              "id": "p_2",
              "left": "引用の確認",
              "right": "Confirming Citation / quotation",
              "furigana": "いんようのかくにん",
              "romaji": "in-you no kakunin"
            },
            {
              "id": "p_3",
              "left": "鑑みるの確認",
              "right": "Confirming In consideration of / in light of",
              "furigana": "かんがみるのかくにん",
              "romaji": "kangamiru no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l9_8",
          "type": "dialogue",
          "prompt": "条項について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "条項について教えていただけますか？",
          "furigana": "条項について教えていただけますか？",
          "romaji": "joukou ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Clause / contractual article?",
          "audioText": "条項について教えていただけますか？",
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
      "id": "u29_l10",
      "unitId": "unit_29",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming In consideration of / in light of & Confirming Based upon / taking into account",
      "titleJp": "鑑みるの確認・踏まえるの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "鑑みるの確認",
        "踏まえるの確認",
        "不可抗力の確認"
      ],
      "kanjiKeywords": [
        "鑑",
        "確",
        "認",
        "踏",
        "確",
        "認",
        "不",
        "可",
        "抗",
        "力",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u29_l10_1",
          "type": "listen",
          "prompt": "鑑みるの確認",
          "furigana": "かんがみるのかくにん",
          "romaji": "kangamiru no kakunin",
          "english": "Confirming In consideration of / in light of",
          "audioText": "かんがみるのかくにん",
          "options": [
            "Confirming In consideration of / in light of",
            "Confirming Clause / contractual article",
            "Confirming Exemption from liability / disclaimer",
            "Compliance / observance"
          ],
          "correctAnswer": "Confirming In consideration of / in light of"
        },
        {
          "id": "u29_l10_2",
          "type": "spell",
          "prompt": "鑑みるの確認",
          "furigana": "かんがみるのかくにん",
          "romaji": "kangamiru no kakunin",
          "english": "Build 'Confirming In consideration of / in light of'",
          "audioText": "かんがみるのかくにん",
          "tileBank": [
            "る",
            "み",
            "ん",
            "か",
            "が",
            "の",
            "か",
            "く"
          ],
          "correctAnswer": "かんがみるのかくにん"
        },
        {
          "id": "u29_l10_3",
          "type": "cloze",
          "prompt": "私は踏まえるの確認がすきです",
          "furigana": "わたしはふまえるのかくにんがすきです",
          "romaji": "Watashi wa fumaeru no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Based upon / taking into account.",
          "audioText": "踏まえるの確認",
          "clozeSentence": "これは踏まえるの確認 {{BLANK}} す。",
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
          "id": "u29_l10_4",
          "type": "scramble",
          "prompt": "これは踏まえるの確認です",
          "furigana": "これはふまえるのかくにんです",
          "romaji": "Kore wa fumaeru no kakunin desu.",
          "english": "This is Confirming Based upon / taking into account.",
          "audioText": "これは踏まえるの確認です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "これは",
            "踏まえるの確認"
          ],
          "scrambleSolution": [
            "これは",
            "踏まえるの確認",
            "です"
          ],
          "correctAnswer": "これは踏まえるの確認です"
        },
        {
          "id": "u29_l10_5",
          "type": "speak",
          "prompt": "不可抗力の確認",
          "furigana": "ふかこうりょくのかくにん",
          "romaji": "fukakouryoku no kakunin",
          "english": "Pronounce: Confirming Force majeure / act of God",
          "audioText": "ふかこうりょくのかくにん",
          "targetSpeech": "不可抗力の確認",
          "options": [
            "Confirming Force majeure / act of God",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "不可抗力の確認"
        },
        {
          "id": "u29_l10_6",
          "type": "dictate",
          "prompt": "不可抗力の確認をお願いします",
          "furigana": "ふかこうりょくのかくにんをおねがいします",
          "romaji": "fukakouryoku no kakunin o onegaishimasu.",
          "english": "Confirming Force majeure / act of God, please.",
          "audioText": "不可抗力の確認をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "を",
            "お願いします",
            "不可抗力の確認"
          ],
          "dictateSolution": [
            "不可抗力の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "不可抗力の確認をお願いします"
        },
        {
          "id": "u29_l10_7",
          "type": "match",
          "prompt": "鑑みるの確認・踏まえるの確認・不可抗力の確認・条項の確認",
          "furigana": "かんがみるのかくにん・ふまえるのかくにん・ふかこうりょくのかくにん・じょうこうのかくにん",
          "romaji": "kangamiru no kakunin, fumaeru no kakunin, fukakouryoku no kakunin, joukou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かんがみるのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "鑑みるの確認",
              "right": "Confirming In consideration of / in light of",
              "furigana": "かんがみるのかくにん",
              "romaji": "kangamiru no kakunin"
            },
            {
              "id": "p_1",
              "left": "踏まえるの確認",
              "right": "Confirming Based upon / taking into account",
              "furigana": "ふまえるのかくにん",
              "romaji": "fumaeru no kakunin"
            },
            {
              "id": "p_2",
              "left": "不可抗力の確認",
              "right": "Confirming Force majeure / act of God",
              "furigana": "ふかこうりょくのかくにん",
              "romaji": "fukakouryoku no kakunin"
            },
            {
              "id": "p_3",
              "left": "条項の確認",
              "right": "Confirming Clause / contractual article",
              "furigana": "じょうこうのかくにん",
              "romaji": "joukou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l10_8",
          "type": "dialogue",
          "prompt": "甲及び乙の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "甲及び乙の準備はできていますか？",
          "furigana": "甲及び乙の準備はできていますか？",
          "romaji": "kou oyobi otsu no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Party A and Party B ready?",
          "audioText": "甲及び乙の準備はできていますか？",
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
      "id": "u29_l11",
      "unitId": "unit_29",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Clause / contractual article & Confirming Party A and Party B",
      "titleJp": "条項の確認・甲及び乙の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "条項の確認",
        "甲及び乙の確認",
        "遵守の確認"
      ],
      "kanjiKeywords": [
        "条",
        "項",
        "確",
        "認",
        "甲",
        "及",
        "乙",
        "確",
        "認",
        "遵",
        "守",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u29_l11_1",
          "type": "listen",
          "prompt": "条項の確認",
          "furigana": "じょうこうのかくにん",
          "romaji": "joukou no kakunin",
          "english": "Confirming Clause / contractual article",
          "audioText": "じょうこうのかくにん",
          "options": [
            "Discussion / scholarly review",
            "Governing law",
            "Confirming Clause / contractual article",
            "Confirming Exemption from liability / disclaimer"
          ],
          "correctAnswer": "Confirming Clause / contractual article"
        },
        {
          "id": "u29_l11_2",
          "type": "spell",
          "prompt": "条項の確認",
          "furigana": "じょうこうのかくにん",
          "romaji": "joukou no kakunin",
          "english": "Build 'Confirming Clause / contractual article'",
          "audioText": "じょうこうのかくにん",
          "tileBank": [
            "じ",
            "く",
            "の",
            "う",
            "う",
            "ょ",
            "こ",
            "か"
          ],
          "correctAnswer": "じょうこうのかくにん"
        },
        {
          "id": "u29_l11_3",
          "type": "cloze",
          "prompt": "私は甲及び乙の確認がすきです",
          "furigana": "わたしはこうおよびおつのかくにんがすきです",
          "romaji": "Watashi wa kou oyobi otsu no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Party A and Party B.",
          "audioText": "甲及び乙の確認",
          "clozeSentence": "これは甲及び乙の確認 {{BLANK}} す。",
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
          "id": "u29_l11_4",
          "type": "scramble",
          "prompt": "これは甲及び乙の確認です",
          "furigana": "これはこうおよびおつのかくにんです",
          "romaji": "Kore wa kou oyobi otsu no kakunin desu.",
          "english": "This is Confirming Party A and Party B.",
          "audioText": "これは甲及び乙の確認です",
          "scrambleTokens": [
            "これは",
            "です",
            "ではありません",
            "甲及び乙の確認",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "甲及び乙の確認",
            "です"
          ],
          "correctAnswer": "これは甲及び乙の確認です"
        },
        {
          "id": "u29_l11_5",
          "type": "speak",
          "prompt": "遵守の確認",
          "furigana": "じゅんしゅのかくにん",
          "romaji": "junshu no kakunin",
          "english": "Pronounce: Confirming Compliance / observance",
          "audioText": "じゅんしゅのかくにん",
          "targetSpeech": "遵守の確認",
          "options": [
            "Confirming Compliance / observance",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "遵守の確認"
        },
        {
          "id": "u29_l11_6",
          "type": "dictate",
          "prompt": "遵守の確認をお願いします",
          "furigana": "じゅんしゅのかくにんをおねがいします",
          "romaji": "junshu no kakunin o onegaishimasu.",
          "english": "Confirming Compliance / observance, please.",
          "audioText": "遵守の確認をお願いします",
          "dictateTokens": [
            "です",
            "遵守の確認",
            "を",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "遵守の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "遵守の確認をお願いします"
        },
        {
          "id": "u29_l11_7",
          "type": "match",
          "prompt": "条項の確認・甲及び乙の確認・遵守の確認・免責の確認",
          "furigana": "じょうこうのかくにん・こうおよびおつのかくにん・じゅんしゅのかくにん・めんせきのかくにん",
          "romaji": "joukou no kakunin, kou oyobi otsu no kakunin, junshu no kakunin, menseki no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じょうこうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "条項の確認",
              "right": "Confirming Clause / contractual article",
              "furigana": "じょうこうのかくにん",
              "romaji": "joukou no kakunin"
            },
            {
              "id": "p_1",
              "left": "甲及び乙の確認",
              "right": "Confirming Party A and Party B",
              "furigana": "こうおよびおつのかくにん",
              "romaji": "kou oyobi otsu no kakunin"
            },
            {
              "id": "p_2",
              "left": "遵守の確認",
              "right": "Confirming Compliance / observance",
              "furigana": "じゅんしゅのかくにん",
              "romaji": "junshu no kakunin"
            },
            {
              "id": "p_3",
              "left": "免責の確認",
              "right": "Confirming Exemption from liability / disclaimer",
              "furigana": "めんせきのかくにん",
              "romaji": "menseki no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l11_8",
          "type": "dialogue",
          "prompt": "遵守についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "遵守についてどう思われますか？",
          "furigana": "遵守についてどう思われますか？",
          "romaji": "junshu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Compliance / observance?",
          "audioText": "遵守についてどう思われますか？",
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
      "id": "u29_l12",
      "unitId": "unit_29",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Exemption from liability / disclaimer & Confirming Compensation for damages",
      "titleJp": "免責の確認・損害賠償の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "免責の確認",
        "損害賠償の確認",
        "管轄の確認"
      ],
      "kanjiKeywords": [
        "免",
        "責",
        "確",
        "認",
        "損",
        "害",
        "賠",
        "償",
        "確",
        "認",
        "管",
        "轄",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u29_l12_1",
          "type": "listen",
          "prompt": "免責の確認",
          "furigana": "めんせきのかくにん",
          "romaji": "menseki no kakunin",
          "english": "Confirming Exemption from liability / disclaimer",
          "audioText": "めんせきのかくにん",
          "options": [
            "Confirming Verification / empirical testing",
            "Confirming Validity / soundness",
            "Confirming Governing law",
            "Confirming Exemption from liability / disclaimer"
          ],
          "correctAnswer": "Confirming Exemption from liability / disclaimer"
        },
        {
          "id": "u29_l12_2",
          "type": "spell",
          "prompt": "免責の確認",
          "furigana": "めんせきのかくにん",
          "romaji": "menseki no kakunin",
          "english": "Build 'Confirming Exemption from liability / disclaimer'",
          "audioText": "めんせきのかくにん",
          "tileBank": [
            "の",
            "か",
            "ん",
            "に",
            "き",
            "せ",
            "く",
            "め"
          ],
          "correctAnswer": "めんせきのかくにん"
        },
        {
          "id": "u29_l12_3",
          "type": "cloze",
          "prompt": "私は損害賠償の確認がすきです",
          "furigana": "わたしはそんがいばいしょうのかくにんがすきです",
          "romaji": "Watashi wa songai baishou no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Compensation for damages.",
          "audioText": "損害賠償の確認",
          "clozeSentence": "これは損害賠償の確認 {{BLANK}} す。",
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
          "id": "u29_l12_4",
          "type": "scramble",
          "prompt": "これは損害賠償の確認です",
          "furigana": "これはそんがいばいしょうのかくにんです",
          "romaji": "Kore wa songai baishou no kakunin desu.",
          "english": "This is Confirming Compensation for damages.",
          "audioText": "これは損害賠償の確認です",
          "scrambleTokens": [
            "損害賠償の確認",
            "ではありません",
            "これは",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "損害賠償の確認",
            "です"
          ],
          "correctAnswer": "これは損害賠償の確認です"
        },
        {
          "id": "u29_l12_5",
          "type": "speak",
          "prompt": "管轄の確認",
          "furigana": "かんかつのかくにん",
          "romaji": "kankatsu no kakunin",
          "english": "Pronounce: Confirming Jurisdiction",
          "audioText": "かんかつのかくにん",
          "targetSpeech": "管轄の確認",
          "options": [
            "Confirming Jurisdiction",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "管轄の確認"
        },
        {
          "id": "u29_l12_6",
          "type": "dictate",
          "prompt": "管轄の確認をお願いします",
          "furigana": "かんかつのかくにんをおねがいします",
          "romaji": "kankatsu no kakunin o onegaishimasu.",
          "english": "Confirming Jurisdiction, please.",
          "audioText": "管轄の確認をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "ありがとう",
            "を",
            "管轄の確認"
          ],
          "dictateSolution": [
            "管轄の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "管轄の確認をお願いします"
        },
        {
          "id": "u29_l12_7",
          "type": "match",
          "prompt": "免責の確認・損害賠償の確認・管轄の確認・条項",
          "furigana": "めんせきのかくにん・そんがいばいしょうのかくにん・かんかつのかくにん・じょうこう",
          "romaji": "menseki no kakunin, songai baishou no kakunin, kankatsu no kakunin, joukou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "めんせきのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "免責の確認",
              "right": "Confirming Exemption from liability / disclaimer",
              "furigana": "めんせきのかくにん",
              "romaji": "menseki no kakunin"
            },
            {
              "id": "p_1",
              "left": "損害賠償の確認",
              "right": "Confirming Compensation for damages",
              "furigana": "そんがいばいしょうのかくにん",
              "romaji": "songai baishou no kakunin"
            },
            {
              "id": "p_2",
              "left": "管轄の確認",
              "right": "Confirming Jurisdiction",
              "furigana": "かんかつのかくにん",
              "romaji": "kankatsu no kakunin"
            },
            {
              "id": "p_3",
              "left": "条項",
              "right": "Clause / contractual article",
              "furigana": "じょうこう",
              "romaji": "joukou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l12_8",
          "type": "dialogue",
          "prompt": "次は免責に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は免責に進みましょう。",
          "furigana": "次は免責に進みましょう。",
          "romaji": "Tsugi wa menseki ni susumimashou.",
          "english": "Speaker: Let's proceed to Exemption from liability / disclaimer next.",
          "audioText": "次は免責に進みましょう。",
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
      "id": "u29_l13",
      "unitId": "unit_29",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Clause / contractual article & Party A and Party B",
      "titleJp": "条項・甲及び乙",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "条項",
        "甲及び乙",
        "遵守"
      ],
      "kanjiKeywords": [
        "条",
        "項",
        "甲",
        "及",
        "乙",
        "遵",
        "守"
      ],
      "items": [
        {
          "id": "u29_l13_1",
          "type": "listen",
          "prompt": "条項",
          "furigana": "じょうこう",
          "romaji": "joukou",
          "english": "Clause / contractual article",
          "audioText": "じょうこう",
          "options": [
            "Citation / quotation",
            "Clause / contractual article",
            "Academic paper / thesis",
            "Governing law"
          ],
          "correctAnswer": "Clause / contractual article"
        },
        {
          "id": "u29_l13_2",
          "type": "spell",
          "prompt": "条項",
          "furigana": "じょうこう",
          "romaji": "joukou",
          "english": "Build 'Clause / contractual article'",
          "audioText": "じょうこう",
          "tileBank": [
            "お",
            "う",
            "こ",
            "そ",
            "じ",
            "ょ",
            "の",
            "う"
          ],
          "correctAnswer": "じょうこう"
        },
        {
          "id": "u29_l13_3",
          "type": "cloze",
          "prompt": "私は甲及び乙がすきです",
          "furigana": "わたしはこうおよびおつがすきです",
          "romaji": "Watashi wa kou oyobi otsu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Party A and Party B.",
          "audioText": "甲及び乙",
          "clozeSentence": "これは甲及び乙 {{BLANK}} す。",
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
          "id": "u29_l13_4",
          "type": "scramble",
          "prompt": "これは甲及び乙です",
          "furigana": "これはこうおよびおつです",
          "romaji": "Kore wa kou oyobi otsu desu.",
          "english": "This is Party A and Party B.",
          "audioText": "これは甲及び乙です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "それ",
            "甲及び乙",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "甲及び乙",
            "です"
          ],
          "correctAnswer": "これは甲及び乙です"
        },
        {
          "id": "u29_l13_5",
          "type": "speak",
          "prompt": "遵守",
          "furigana": "じゅんしゅ",
          "romaji": "junshu",
          "english": "Pronounce: Compliance / observance",
          "audioText": "じゅんしゅ",
          "targetSpeech": "遵守",
          "options": [
            "Compliance / observance",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "遵守"
        },
        {
          "id": "u29_l13_6",
          "type": "dictate",
          "prompt": "遵守をお願いします",
          "furigana": "じゅんしゅをおねがいします",
          "romaji": "junshu o onegaishimasu.",
          "english": "Compliance / observance, please.",
          "audioText": "遵守をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "お願いします",
            "遵守",
            "ありがとう"
          ],
          "dictateSolution": [
            "遵守",
            "を",
            "お願いします"
          ],
          "correctAnswer": "遵守をお願いします"
        },
        {
          "id": "u29_l13_7",
          "type": "match",
          "prompt": "条項・甲及び乙・遵守・免責",
          "furigana": "じょうこう・こうおよびおつ・じゅんしゅ・めんせき",
          "romaji": "joukou, kou oyobi otsu, junshu, menseki",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じょうこう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "条項",
              "right": "Clause / contractual article",
              "furigana": "じょうこう",
              "romaji": "joukou"
            },
            {
              "id": "p_1",
              "left": "甲及び乙",
              "right": "Party A and Party B",
              "furigana": "こうおよびおつ",
              "romaji": "kou oyobi otsu"
            },
            {
              "id": "p_2",
              "left": "遵守",
              "right": "Compliance / observance",
              "furigana": "じゅんしゅ",
              "romaji": "junshu"
            },
            {
              "id": "p_3",
              "left": "免責",
              "right": "Exemption from liability / disclaimer",
              "furigana": "めんせき",
              "romaji": "menseki"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l13_8",
          "type": "dialogue",
          "prompt": "条項について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "条項について教えていただけますか？",
          "furigana": "条項について教えていただけますか？",
          "romaji": "joukou ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Clause / contractual article?",
          "audioText": "条項について教えていただけますか？",
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
      "id": "u29_l14",
      "unitId": "unit_29",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Exemption from liability / disclaimer & Compensation for damages",
      "titleJp": "免責・損害賠償",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "免責",
        "損害賠償",
        "管轄"
      ],
      "kanjiKeywords": [
        "免",
        "責",
        "損",
        "害",
        "賠",
        "償",
        "管",
        "轄"
      ],
      "items": [
        {
          "id": "u29_l14_1",
          "type": "listen",
          "prompt": "免責",
          "furigana": "めんせき",
          "romaji": "menseki",
          "english": "Exemption from liability / disclaimer",
          "audioText": "めんせき",
          "options": [
            "Force majeure / act of God",
            "Confirming Discussion / scholarly review",
            "Exemption from liability / disclaimer",
            "Citation / quotation"
          ],
          "correctAnswer": "Exemption from liability / disclaimer"
        },
        {
          "id": "u29_l14_2",
          "type": "spell",
          "prompt": "免責",
          "furigana": "めんせき",
          "romaji": "menseki",
          "english": "Build 'Exemption from liability / disclaimer'",
          "audioText": "めんせき",
          "tileBank": [
            "き",
            "せ",
            "に",
            "そ",
            "め",
            "ゆ",
            "を",
            "ん"
          ],
          "correctAnswer": "めんせき"
        },
        {
          "id": "u29_l14_3",
          "type": "cloze",
          "prompt": "私は損害賠償がすきです",
          "furigana": "わたしはそんがいばいしょうがすきです",
          "romaji": "Watashi wa songai baishou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Compensation for damages.",
          "audioText": "損害賠償",
          "clozeSentence": "これは損害賠償 {{BLANK}} す。",
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
          "id": "u29_l14_4",
          "type": "scramble",
          "prompt": "これは損害賠償です",
          "furigana": "これはそんがいばいしょうです",
          "romaji": "Kore wa songai baishou desu.",
          "english": "This is Compensation for damages.",
          "audioText": "これは損害賠償です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "それ",
            "です",
            "損害賠償"
          ],
          "scrambleSolution": [
            "これは",
            "損害賠償",
            "です"
          ],
          "correctAnswer": "これは損害賠償です"
        },
        {
          "id": "u29_l14_5",
          "type": "speak",
          "prompt": "管轄",
          "furigana": "かんかつ",
          "romaji": "kankatsu",
          "english": "Pronounce: Jurisdiction",
          "audioText": "かんかつ",
          "targetSpeech": "管轄",
          "options": [
            "Jurisdiction",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "管轄"
        },
        {
          "id": "u29_l14_6",
          "type": "dictate",
          "prompt": "管轄をお願いします",
          "furigana": "かんかつをおねがいします",
          "romaji": "kankatsu o onegaishimasu.",
          "english": "Jurisdiction, please.",
          "audioText": "管轄をお願いします",
          "dictateTokens": [
            "お願いします",
            "を",
            "管轄",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "管轄",
            "を",
            "お願いします"
          ],
          "correctAnswer": "管轄をお願いします"
        },
        {
          "id": "u29_l14_7",
          "type": "match",
          "prompt": "免責・損害賠償・管轄・準拠法",
          "furigana": "めんせき・そんがいばいしょう・かんかつ・じゅんきょほう",
          "romaji": "menseki, songai baishou, kankatsu, junkyohou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "めんせき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "免責",
              "right": "Exemption from liability / disclaimer",
              "furigana": "めんせき",
              "romaji": "menseki"
            },
            {
              "id": "p_1",
              "left": "損害賠償",
              "right": "Compensation for damages",
              "furigana": "そんがいばいしょう",
              "romaji": "songai baishou"
            },
            {
              "id": "p_2",
              "left": "管轄",
              "right": "Jurisdiction",
              "furigana": "かんかつ",
              "romaji": "kankatsu"
            },
            {
              "id": "p_3",
              "left": "準拠法",
              "right": "Governing law",
              "furigana": "じゅんきょほう",
              "romaji": "junkyohou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l14_8",
          "type": "dialogue",
          "prompt": "甲及び乙の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "甲及び乙の準備はできていますか？",
          "furigana": "甲及び乙の準備はできていますか？",
          "romaji": "kou oyobi otsu no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Party A and Party B ready?",
          "audioText": "甲及び乙の準備はできていますか？",
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
      "id": "u29_l15",
      "unitId": "unit_29",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 29 Master Exam",
      "iconType": "test",
      "title": "Unit 29 Master Exam",
      "titleJp": "第29週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "準拠法",
        "論文",
        "検証"
      ],
      "kanjiKeywords": [
        "準",
        "拠",
        "法",
        "論",
        "文",
        "検",
        "証"
      ],
      "items": [
        {
          "id": "u29_l15_1",
          "type": "listen",
          "prompt": "準拠法",
          "furigana": "じゅんきょほう",
          "romaji": "junkyohou",
          "english": "Governing law",
          "audioText": "じゅんきょほう",
          "options": [
            "Confirming Compliance / observance",
            "Confirming Clause / contractual article",
            "Confirming Jurisdiction",
            "Governing law"
          ],
          "correctAnswer": "Governing law"
        },
        {
          "id": "u29_l15_2",
          "type": "spell",
          "prompt": "論文",
          "furigana": "ろんぶん",
          "romaji": "ronbun",
          "english": "Build 'Academic paper / thesis'",
          "audioText": "ろんぶん",
          "tileBank": [
            "へ",
            "ぶ",
            "ね",
            "ろ",
            "ん",
            "ん",
            "り",
            "つ"
          ],
          "correctAnswer": "ろんぶん"
        },
        {
          "id": "u29_l15_3",
          "type": "cloze",
          "prompt": "私は論文がすきです",
          "furigana": "わたしはろんぶんがすきです",
          "romaji": "Watashi wa ronbun ga suki desu.",
          "english": "Fill in the blank with the correct particle for Academic paper / thesis.",
          "audioText": "論文",
          "clozeSentence": "これは論文 {{BLANK}} す。",
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
          "id": "u29_l15_4",
          "type": "scramble",
          "prompt": "これは論文です",
          "furigana": "これはろんぶんです",
          "romaji": "Kore wa ronbun desu.",
          "english": "This is Academic paper / thesis.",
          "audioText": "これは論文です",
          "scrambleTokens": [
            "これは",
            "それ",
            "論文",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "論文",
            "です"
          ],
          "correctAnswer": "これは論文です"
        },
        {
          "id": "u29_l15_5",
          "type": "speak",
          "prompt": "検証",
          "furigana": "けんしょう",
          "romaji": "kenshou",
          "english": "Pronounce: Verification / empirical testing",
          "audioText": "けんしょう",
          "targetSpeech": "検証",
          "options": [
            "Verification / empirical testing",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "検証"
        },
        {
          "id": "u29_l15_6",
          "type": "dictate",
          "prompt": "検証をお願いします",
          "furigana": "けんしょうをおねがいします",
          "romaji": "kenshou o onegaishimasu.",
          "english": "Verification / empirical testing, please.",
          "audioText": "検証をお願いします",
          "dictateTokens": [
            "検証",
            "お願いします",
            "ありがとう",
            "です",
            "を"
          ],
          "dictateSolution": [
            "検証",
            "を",
            "お願いします"
          ],
          "correctAnswer": "検証をお願いします"
        },
        {
          "id": "u29_l15_7",
          "type": "match",
          "prompt": "準拠法・論文・検証・妥当性",
          "furigana": "じゅんきょほう・ろんぶん・けんしょう・だとうせい",
          "romaji": "junkyohou, ronbun, kenshou, datousei",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じゅんきょほう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "準拠法",
              "right": "Governing law",
              "furigana": "じゅんきょほう",
              "romaji": "junkyohou"
            },
            {
              "id": "p_1",
              "left": "論文",
              "right": "Academic paper / thesis",
              "furigana": "ろんぶん",
              "romaji": "ronbun"
            },
            {
              "id": "p_2",
              "left": "検証",
              "right": "Verification / empirical testing",
              "furigana": "けんしょう",
              "romaji": "kenshou"
            },
            {
              "id": "p_3",
              "left": "妥当性",
              "right": "Validity / soundness",
              "furigana": "だとうせい",
              "romaji": "datousei"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u29_l15_8",
          "type": "dialogue",
          "prompt": "遵守についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "遵守についてどう思われますか？",
          "furigana": "遵守についてどう思われますか？",
          "romaji": "junshu ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Compliance / observance?",
          "audioText": "遵守についてどう思われますか？",
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
    "id": "gate_unit_29",
    "unitId": "unit_29",
    "title": "Unit 29 Mastery Checkpoint",
    "titleJp": "第29週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u29_l1_1",
        "type": "listen",
        "prompt": "条項",
        "furigana": "じょうこう",
        "romaji": "joukou",
        "english": "Clause / contractual article",
        "audioText": "じょうこう",
        "options": [
          "Clause / contractual article",
          "Confirming Discussion / scholarly review",
          "Confirming Academic paper / thesis",
          "Based upon / taking into account"
        ],
        "correctAnswer": "Clause / contractual article"
      },
      {
        "id": "u29_l1_2",
        "type": "spell",
        "prompt": "条項",
        "furigana": "じょうこう",
        "romaji": "joukou",
        "english": "Build 'Clause / contractual article'",
        "audioText": "じょうこう",
        "tileBank": [
          "う",
          "じ",
          "た",
          "ょ",
          "ひ",
          "こ",
          "う",
          "や"
        ],
        "correctAnswer": "じょうこう"
      },
      {
        "id": "u29_l3_1",
        "type": "listen",
        "prompt": "準拠法",
        "furigana": "じゅんきょほう",
        "romaji": "junkyohou",
        "english": "Governing law",
        "audioText": "じゅんきょほう",
        "options": [
          "Compensation for damages",
          "Governing law",
          "Validity / soundness",
          "Confirming Compensation for damages"
        ],
        "correctAnswer": "Governing law"
      },
      {
        "id": "u29_l3_2",
        "type": "spell",
        "prompt": "論文",
        "furigana": "ろんぶん",
        "romaji": "ronbun",
        "english": "Build 'Academic paper / thesis'",
        "audioText": "ろんぶん",
        "tileBank": [
          "ぶ",
          "こ",
          "ろ",
          "と",
          "ん",
          "さ",
          "よ",
          "ん"
        ],
        "correctAnswer": "ろんぶん"
      },
      {
        "id": "u29_l5_1",
        "type": "listen",
        "prompt": "鑑みる",
        "furigana": "かんがみる",
        "romaji": "kangamiru",
        "english": "In consideration of / in light of",
        "audioText": "かんがみる",
        "options": [
          "In consideration of / in light of",
          "Governing law",
          "Confirming Discussion / scholarly review",
          "Confirming Verification / empirical testing"
        ],
        "correctAnswer": "In consideration of / in light of"
      },
      {
        "id": "u29_l5_2",
        "type": "spell",
        "prompt": "鑑みる",
        "furigana": "かんがみる",
        "romaji": "kangamiru",
        "english": "Build 'In consideration of / in light of'",
        "audioText": "かんがみる",
        "tileBank": [
          "み",
          "る",
          "か",
          "ん",
          "が",
          "い",
          "せ",
          "ろ"
        ],
        "correctAnswer": "かんがみる"
      },
      {
        "id": "u29_l7_1",
        "type": "listen",
        "prompt": "免責の確認",
        "furigana": "めんせきのかくにん",
        "romaji": "menseki no kakunin",
        "english": "Confirming Exemption from liability / disclaimer",
        "audioText": "めんせきのかくにん",
        "options": [
          "Confirming Jurisdiction",
          "Confirming Discussion / scholarly review",
          "Confirming Exemption from liability / disclaimer",
          "Citation / quotation"
        ],
        "correctAnswer": "Confirming Exemption from liability / disclaimer"
      },
      {
        "id": "u29_l7_2",
        "type": "spell",
        "prompt": "免責の確認",
        "furigana": "めんせきのかくにん",
        "romaji": "menseki no kakunin",
        "english": "Build 'Confirming Exemption from liability / disclaimer'",
        "audioText": "めんせきのかくにん",
        "tileBank": [
          "に",
          "ん",
          "せ",
          "き",
          "か",
          "め",
          "く",
          "の"
        ],
        "correctAnswer": "めんせきのかくにん"
      },
      {
        "id": "u29_l9_1",
        "type": "listen",
        "prompt": "妥当性の確認",
        "furigana": "だとうせいのかくにん",
        "romaji": "datousei no kakunin",
        "english": "Confirming Validity / soundness",
        "audioText": "だとうせいのかくにん",
        "options": [
          "Confirming Validity / soundness",
          "Compliance / observance",
          "Confirming Discussion / scholarly review",
          "Confirming Clause / contractual article"
        ],
        "correctAnswer": "Confirming Validity / soundness"
      },
      {
        "id": "u29_l9_2",
        "type": "spell",
        "prompt": "妥当性の確認",
        "furigana": "だとうせいのかくにん",
        "romaji": "datousei no kakunin",
        "english": "Build 'Confirming Validity / soundness'",
        "audioText": "だとうせいのかくにん",
        "tileBank": [
          "と",
          "い",
          "の",
          "か",
          "う",
          "く",
          "だ",
          "せ"
        ],
        "correctAnswer": "だとうせいのかくにん"
      },
      {
        "id": "u29_l11_1",
        "type": "listen",
        "prompt": "条項の確認",
        "furigana": "じょうこうのかくにん",
        "romaji": "joukou no kakunin",
        "english": "Confirming Clause / contractual article",
        "audioText": "じょうこうのかくにん",
        "options": [
          "Discussion / scholarly review",
          "Governing law",
          "Confirming Clause / contractual article",
          "Confirming Exemption from liability / disclaimer"
        ],
        "correctAnswer": "Confirming Clause / contractual article"
      },
      {
        "id": "u29_l11_2",
        "type": "spell",
        "prompt": "条項の確認",
        "furigana": "じょうこうのかくにん",
        "romaji": "joukou no kakunin",
        "english": "Build 'Confirming Clause / contractual article'",
        "audioText": "じょうこうのかくにん",
        "tileBank": [
          "じ",
          "く",
          "の",
          "う",
          "う",
          "ょ",
          "こ",
          "か"
        ],
        "correctAnswer": "じょうこうのかくにん"
      }
    ]
  }
};
