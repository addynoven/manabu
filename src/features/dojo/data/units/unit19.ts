import type { DojoUnit } from "../../models/dojo.model";

export const unit19: DojoUnit = {
  "id": "unit_19",
  "unitNumber": 19,
  "title": "Japanese Job Interviews",
  "titleJp": "就職活動と面接",
  "description": "Formulate eloquent self-introductions, articulate career motivation (Shibou Douki), and demonstrate corporate poise.",
  "icon": "👔",
  "themeColor": "#2563EB",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u19_l1",
      "unitId": "unit_19",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Job interview & Motivation for applying",
      "titleJp": "面接・志望動機",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "面接",
        "志望動機",
        "自己PR"
      ],
      "kanjiKeywords": [
        "面",
        "接",
        "志",
        "望",
        "動",
        "機",
        "自",
        "己"
      ],
      "items": [
        {
          "id": "u19_l1_1",
          "type": "listen",
          "prompt": "面接",
          "furigana": "めんせつ",
          "romaji": "mensetsu",
          "english": "Job interview",
          "audioText": "めんせつ",
          "options": [
            "Aptitude / suitability",
            "Job interview",
            "Confirming Self-promotion",
            "Joining a company"
          ],
          "correctAnswer": "Job interview"
        },
        {
          "id": "u19_l1_2",
          "type": "spell",
          "prompt": "面接",
          "furigana": "めんせつ",
          "romaji": "mensetsu",
          "english": "Build 'Job interview'",
          "audioText": "めんせつ",
          "tileBank": [
            "ね",
            "ほ",
            "つ",
            "せ",
            "ん",
            "む",
            "き",
            "め"
          ],
          "correctAnswer": "めんせつ"
        },
        {
          "id": "u19_l1_3",
          "type": "cloze",
          "prompt": "私は志望動機がすきです",
          "furigana": "わたしはしぼうどうきがすきです",
          "romaji": "Watashi wa shibou douki ga suki desu.",
          "english": "Fill in the blank with the correct particle for Motivation for applying.",
          "audioText": "志望動機",
          "clozeSentence": "これは志望動機 {{BLANK}} す。",
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
          "id": "u19_l1_4",
          "type": "scramble",
          "prompt": "これは志望動機です",
          "furigana": "これはしぼうどうきです",
          "romaji": "Kore wa shibou douki desu.",
          "english": "This is Motivation for applying.",
          "audioText": "これは志望動機です",
          "scrambleTokens": [
            "それ",
            "これは",
            "です",
            "志望動機",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "志望動機",
            "です"
          ],
          "correctAnswer": "これは志望動機です"
        },
        {
          "id": "u19_l1_5",
          "type": "speak",
          "prompt": "自己PR",
          "furigana": "じこピーアール",
          "romaji": "jiko pii aaru",
          "english": "Pronounce: Self-promotion",
          "audioText": "じこピーアール",
          "targetSpeech": "自己PR",
          "options": [
            "Self-promotion",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "自己PR"
        },
        {
          "id": "u19_l1_6",
          "type": "dictate",
          "prompt": "自己PRをお願いします",
          "furigana": "じこピーアールをおねがいします",
          "romaji": "jiko pii aaru o onegaishimasu.",
          "english": "Self-promotion, please.",
          "audioText": "自己PRをお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "ありがとう",
            "自己PR",
            "を"
          ],
          "dictateSolution": [
            "自己PR",
            "を",
            "お願いします"
          ],
          "correctAnswer": "自己PRをお願いします"
        },
        {
          "id": "u19_l1_7",
          "type": "match",
          "prompt": "面接・志望動機・自己PR・長所",
          "furigana": "めんせつ・しぼうどうき・じこピーアール・ちょうしょ",
          "romaji": "mensetsu, shibou douki, jiko pii aaru, chousho",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "めんせつ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "面接",
              "right": "Job interview",
              "furigana": "めんせつ",
              "romaji": "mensetsu"
            },
            {
              "id": "p_1",
              "left": "志望動機",
              "right": "Motivation for applying",
              "furigana": "しぼうどうき",
              "romaji": "shibou douki"
            },
            {
              "id": "p_2",
              "left": "自己PR",
              "right": "Self-promotion",
              "furigana": "じこピーアール",
              "romaji": "jiko pii aaru"
            },
            {
              "id": "p_3",
              "left": "長所",
              "right": "Strength / strong point",
              "furigana": "ちょうしょ",
              "romaji": "chousho"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l1_8",
          "type": "dialogue",
          "prompt": "面接について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "面接について教えていただけますか？",
          "furigana": "面接について教えていただけますか？",
          "romaji": "mensetsu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Job interview?",
          "audioText": "面接について教えていただけますか？",
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
      "id": "u19_l2",
      "unitId": "unit_19",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Strength / strong point & Weakness / shortcoming",
      "titleJp": "長所・短所",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "長所",
        "短所",
        "採用"
      ],
      "kanjiKeywords": [
        "長",
        "所",
        "短",
        "所",
        "採",
        "用"
      ],
      "items": [
        {
          "id": "u19_l2_1",
          "type": "listen",
          "prompt": "長所",
          "furigana": "ちょうしょ",
          "romaji": "chousho",
          "english": "Strength / strong point",
          "audioText": "ちょうしょ",
          "options": [
            "Confirming Self-promotion",
            "Strength / strong point",
            "Confirming Weakness / shortcoming",
            "Confirming Joining a company"
          ],
          "correctAnswer": "Strength / strong point"
        },
        {
          "id": "u19_l2_2",
          "type": "spell",
          "prompt": "長所",
          "furigana": "ちょうしょ",
          "romaji": "chousho",
          "english": "Build 'Strength / strong point'",
          "audioText": "ちょうしょ",
          "tileBank": [
            "ょ",
            "め",
            "し",
            "ち",
            "ょ",
            "り",
            "た",
            "う"
          ],
          "correctAnswer": "ちょうしょ"
        },
        {
          "id": "u19_l2_3",
          "type": "cloze",
          "prompt": "私は短所がすきです",
          "furigana": "わたしはたんしょがすきです",
          "romaji": "Watashi wa tansho ga suki desu.",
          "english": "Fill in the blank with the correct particle for Weakness / shortcoming.",
          "audioText": "短所",
          "clozeSentence": "これは短所 {{BLANK}} す。",
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
          "id": "u19_l2_4",
          "type": "scramble",
          "prompt": "これは短所です",
          "furigana": "これはたんしょです",
          "romaji": "Kore wa tansho desu.",
          "english": "This is Weakness / shortcoming.",
          "audioText": "これは短所です",
          "scrambleTokens": [
            "短所",
            "ではありません",
            "これは",
            "です",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "短所",
            "です"
          ],
          "correctAnswer": "これは短所です"
        },
        {
          "id": "u19_l2_5",
          "type": "speak",
          "prompt": "採用",
          "furigana": "さいよう",
          "romaji": "saiyou",
          "english": "Pronounce: Recruitment / hiring",
          "audioText": "さいよう",
          "targetSpeech": "採用",
          "options": [
            "Recruitment / hiring",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "採用"
        },
        {
          "id": "u19_l2_6",
          "type": "dictate",
          "prompt": "採用をお願いします",
          "furigana": "さいようをおねがいします",
          "romaji": "saiyou o onegaishimasu.",
          "english": "Recruitment / hiring, please.",
          "audioText": "採用をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "採用",
            "です",
            "を"
          ],
          "dictateSolution": [
            "採用",
            "を",
            "お願いします"
          ],
          "correctAnswer": "採用をお願いします"
        },
        {
          "id": "u19_l2_7",
          "type": "match",
          "prompt": "長所・短所・採用・履歴書",
          "furigana": "ちょうしょ・たんしょ・さいよう・りれきしょ",
          "romaji": "chousho, tansho, saiyou, rirekisho",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ちょうしょ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "長所",
              "right": "Strength / strong point",
              "furigana": "ちょうしょ",
              "romaji": "chousho"
            },
            {
              "id": "p_1",
              "left": "短所",
              "right": "Weakness / shortcoming",
              "furigana": "たんしょ",
              "romaji": "tansho"
            },
            {
              "id": "p_2",
              "left": "採用",
              "right": "Recruitment / hiring",
              "furigana": "さいよう",
              "romaji": "saiyou"
            },
            {
              "id": "p_3",
              "left": "履歴書",
              "right": "Resume / curriculum vitae",
              "furigana": "りれきしょ",
              "romaji": "rirekisho"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l2_8",
          "type": "dialogue",
          "prompt": "志望動機の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "志望動機の準備はできていますか？",
          "furigana": "志望動機の準備はできていますか？",
          "romaji": "shibou douki no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Motivation for applying ready?",
          "audioText": "志望動機の準備はできていますか？",
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
      "id": "u19_l3",
      "unitId": "unit_19",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Resume / curriculum vitae & Contribution",
      "titleJp": "履歴書・貢献",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "履歴書",
        "貢献",
        "適性"
      ],
      "kanjiKeywords": [
        "履",
        "歴",
        "書",
        "貢",
        "献",
        "適",
        "性"
      ],
      "items": [
        {
          "id": "u19_l3_1",
          "type": "listen",
          "prompt": "履歴書",
          "furigana": "りれきしょ",
          "romaji": "rirekisho",
          "english": "Resume / curriculum vitae",
          "audioText": "りれきしょ",
          "options": [
            "Confirming Weakness / shortcoming",
            "Resume / curriculum vitae",
            "Confirming Aptitude / suitability",
            "Confirming Weakness / shortcoming"
          ],
          "correctAnswer": "Resume / curriculum vitae"
        },
        {
          "id": "u19_l3_2",
          "type": "spell",
          "prompt": "履歴書",
          "furigana": "りれきしょ",
          "romaji": "rirekisho",
          "english": "Build 'Resume / curriculum vitae'",
          "audioText": "りれきしょ",
          "tileBank": [
            "き",
            "え",
            "ょ",
            "し",
            "た",
            "か",
            "れ",
            "り"
          ],
          "correctAnswer": "りれきしょ"
        },
        {
          "id": "u19_l3_3",
          "type": "cloze",
          "prompt": "私は貢献がすきです",
          "furigana": "わたしはこうけんがすきです",
          "romaji": "Watashi wa kouken ga suki desu.",
          "english": "Fill in the blank with the correct particle for Contribution.",
          "audioText": "貢献",
          "clozeSentence": "これは貢献 {{BLANK}} す。",
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
          "id": "u19_l3_4",
          "type": "scramble",
          "prompt": "これは貢献です",
          "furigana": "これはこうけんです",
          "romaji": "Kore wa kouken desu.",
          "english": "This is Contribution.",
          "audioText": "これは貢献です",
          "scrambleTokens": [
            "です",
            "それ",
            "貢献",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "貢献",
            "です"
          ],
          "correctAnswer": "これは貢献です"
        },
        {
          "id": "u19_l3_5",
          "type": "speak",
          "prompt": "適性",
          "furigana": "てきせい",
          "romaji": "tekisei",
          "english": "Pronounce: Aptitude / suitability",
          "audioText": "てきせい",
          "targetSpeech": "適性",
          "options": [
            "Aptitude / suitability",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "適性"
        },
        {
          "id": "u19_l3_6",
          "type": "dictate",
          "prompt": "適性をお願いします",
          "furigana": "てきせいをおねがいします",
          "romaji": "tekisei o onegaishimasu.",
          "english": "Aptitude / suitability, please.",
          "audioText": "適性をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "です",
            "を",
            "適性"
          ],
          "dictateSolution": [
            "適性",
            "を",
            "お願いします"
          ],
          "correctAnswer": "適性をお願いします"
        },
        {
          "id": "u19_l3_7",
          "type": "match",
          "prompt": "履歴書・貢献・適性・意欲",
          "furigana": "りれきしょ・こうけん・てきせい・いよく",
          "romaji": "rirekisho, kouken, tekisei, iyoku",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "りれきしょ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "履歴書",
              "right": "Resume / curriculum vitae",
              "furigana": "りれきしょ",
              "romaji": "rirekisho"
            },
            {
              "id": "p_1",
              "left": "貢献",
              "right": "Contribution",
              "furigana": "こうけん",
              "romaji": "kouken"
            },
            {
              "id": "p_2",
              "left": "適性",
              "right": "Aptitude / suitability",
              "furigana": "てきせい",
              "romaji": "tekisei"
            },
            {
              "id": "p_3",
              "left": "意欲",
              "right": "Enthusiasm / will to achieve",
              "furigana": "いよく",
              "romaji": "iyoku"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l3_8",
          "type": "dialogue",
          "prompt": "自己PRについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "自己PRについてどう思われますか？",
          "furigana": "自己PRについてどう思われますか？",
          "romaji": "jiko pii aaru ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Self-promotion?",
          "audioText": "自己PRについてどう思われますか？",
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
      "id": "u19_l4",
      "unitId": "unit_19",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Enthusiasm / will to achieve & Track record / achievements",
      "titleJp": "意欲・実績",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "意欲",
        "実績",
        "入社"
      ],
      "kanjiKeywords": [
        "意",
        "欲",
        "実",
        "績",
        "入",
        "社"
      ],
      "items": [
        {
          "id": "u19_l4_1",
          "type": "listen",
          "prompt": "意欲",
          "furigana": "いよく",
          "romaji": "iyoku",
          "english": "Enthusiasm / will to achieve",
          "audioText": "いよく",
          "options": [
            "Confirming Weakness / shortcoming",
            "Motivation for applying",
            "Confirming Strength / strong point",
            "Enthusiasm / will to achieve"
          ],
          "correctAnswer": "Enthusiasm / will to achieve"
        },
        {
          "id": "u19_l4_2",
          "type": "spell",
          "prompt": "意欲",
          "furigana": "いよく",
          "romaji": "iyoku",
          "english": "Build 'Enthusiasm / will to achieve'",
          "audioText": "いよく",
          "tileBank": [
            "い",
            "く",
            "た",
            "よ",
            "き",
            "へ",
            "と",
            "わ"
          ],
          "correctAnswer": "いよく"
        },
        {
          "id": "u19_l4_3",
          "type": "cloze",
          "prompt": "私は実績がすきです",
          "furigana": "わたしはじっせきがすきです",
          "romaji": "Watashi wa jisseki ga suki desu.",
          "english": "Fill in the blank with the correct particle for Track record / achievements.",
          "audioText": "実績",
          "clozeSentence": "これは実績 {{BLANK}} す。",
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
          "id": "u19_l4_4",
          "type": "scramble",
          "prompt": "これは実績です",
          "furigana": "これはじっせきです",
          "romaji": "Kore wa jisseki desu.",
          "english": "This is Track record / achievements.",
          "audioText": "これは実績です",
          "scrambleTokens": [
            "これは",
            "実績",
            "です",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "実績",
            "です"
          ],
          "correctAnswer": "これは実績です"
        },
        {
          "id": "u19_l4_5",
          "type": "speak",
          "prompt": "入社",
          "furigana": "にゅうしゃ",
          "romaji": "nyuusha",
          "english": "Pronounce: Joining a company",
          "audioText": "にゅうしゃ",
          "targetSpeech": "入社",
          "options": [
            "Joining a company",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "入社"
        },
        {
          "id": "u19_l4_6",
          "type": "dictate",
          "prompt": "入社をお願いします",
          "furigana": "にゅうしゃをおねがいします",
          "romaji": "nyuusha o onegaishimasu.",
          "english": "Joining a company, please.",
          "audioText": "入社をお願いします",
          "dictateTokens": [
            "を",
            "入社",
            "です",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "入社",
            "を",
            "お願いします"
          ],
          "correctAnswer": "入社をお願いします"
        },
        {
          "id": "u19_l4_7",
          "type": "match",
          "prompt": "意欲・実績・入社・貴社",
          "furigana": "いよく・じっせき・にゅうしゃ・きしゃ",
          "romaji": "iyoku, jisseki, nyuusha, kisha",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いよく",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "意欲",
              "right": "Enthusiasm / will to achieve",
              "furigana": "いよく",
              "romaji": "iyoku"
            },
            {
              "id": "p_1",
              "left": "実績",
              "right": "Track record / achievements",
              "furigana": "じっせき",
              "romaji": "jisseki"
            },
            {
              "id": "p_2",
              "left": "入社",
              "right": "Joining a company",
              "furigana": "にゅうしゃ",
              "romaji": "nyuusha"
            },
            {
              "id": "p_3",
              "left": "貴社",
              "right": "Your esteemed company (written)",
              "furigana": "きしゃ",
              "romaji": "kisha"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l4_8",
          "type": "dialogue",
          "prompt": "次は長所に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は長所に進みましょう。",
          "furigana": "次は長所に進みましょう。",
          "romaji": "Tsugi wa chousho ni susumimashou.",
          "english": "Speaker: Let's proceed to Strength / strong point next.",
          "audioText": "次は長所に進みましょう。",
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
      "id": "u19_l5",
      "unitId": "unit_19",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Your esteemed company (written) & Your esteemed company (spoken)",
      "titleJp": "貴社・御社",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "貴社",
        "御社",
        "内定"
      ],
      "kanjiKeywords": [
        "貴",
        "社",
        "御",
        "社",
        "内",
        "定"
      ],
      "items": [
        {
          "id": "u19_l5_1",
          "type": "listen",
          "prompt": "貴社",
          "furigana": "きしゃ",
          "romaji": "kisha",
          "english": "Your esteemed company (written)",
          "audioText": "きしゃ",
          "options": [
            "Confirming Track record / achievements",
            "Your esteemed company (written)",
            "Confirming Enthusiasm / will to achieve",
            "Joining a company"
          ],
          "correctAnswer": "Your esteemed company (written)"
        },
        {
          "id": "u19_l5_2",
          "type": "spell",
          "prompt": "貴社",
          "furigana": "きしゃ",
          "romaji": "kisha",
          "english": "Build 'Your esteemed company (written)'",
          "audioText": "きしゃ",
          "tileBank": [
            "ま",
            "を",
            "ゃ",
            "し",
            "と",
            "き",
            "つ",
            "せ"
          ],
          "correctAnswer": "きしゃ"
        },
        {
          "id": "u19_l5_3",
          "type": "cloze",
          "prompt": "私は御社がすきです",
          "furigana": "わたしはおんしゃがすきです",
          "romaji": "Watashi wa onsha ga suki desu.",
          "english": "Fill in the blank with the correct particle for Your esteemed company (spoken).",
          "audioText": "御社",
          "clozeSentence": "これは御社 {{BLANK}} す。",
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
          "id": "u19_l5_4",
          "type": "scramble",
          "prompt": "これは御社です",
          "furigana": "これはおんしゃです",
          "romaji": "Kore wa onsha desu.",
          "english": "This is Your esteemed company (spoken).",
          "audioText": "これは御社です",
          "scrambleTokens": [
            "です",
            "御社",
            "これは",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "御社",
            "です"
          ],
          "correctAnswer": "これは御社です"
        },
        {
          "id": "u19_l5_5",
          "type": "speak",
          "prompt": "内定",
          "furigana": "ないてい",
          "romaji": "naitei",
          "english": "Pronounce: Unofficial job offer",
          "audioText": "ないてい",
          "targetSpeech": "内定",
          "options": [
            "Unofficial job offer",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "内定"
        },
        {
          "id": "u19_l5_6",
          "type": "dictate",
          "prompt": "内定をお願いします",
          "furigana": "ないていをおねがいします",
          "romaji": "naitei o onegaishimasu.",
          "english": "Unofficial job offer, please.",
          "audioText": "内定をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "内定",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "内定",
            "を",
            "お願いします"
          ],
          "correctAnswer": "内定をお願いします"
        },
        {
          "id": "u19_l5_7",
          "type": "match",
          "prompt": "貴社・御社・内定・面接の確認",
          "furigana": "きしゃ・おんしゃ・ないてい・めんせつのかくにん",
          "romaji": "kisha, onsha, naitei, mensetsu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "きしゃ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "貴社",
              "right": "Your esteemed company (written)",
              "furigana": "きしゃ",
              "romaji": "kisha"
            },
            {
              "id": "p_1",
              "left": "御社",
              "right": "Your esteemed company (spoken)",
              "furigana": "おんしゃ",
              "romaji": "onsha"
            },
            {
              "id": "p_2",
              "left": "内定",
              "right": "Unofficial job offer",
              "furigana": "ないてい",
              "romaji": "naitei"
            },
            {
              "id": "p_3",
              "left": "面接の確認",
              "right": "Confirming Job interview",
              "furigana": "めんせつのかくにん",
              "romaji": "mensetsu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l5_8",
          "type": "dialogue",
          "prompt": "面接について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "面接について教えていただけますか？",
          "furigana": "面接について教えていただけますか？",
          "romaji": "mensetsu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Job interview?",
          "audioText": "面接について教えていただけますか？",
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
      "id": "u19_l6",
      "unitId": "unit_19",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Job interview & Confirming Motivation for applying",
      "titleJp": "面接の確認・志望動機の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "面接の確認",
        "志望動機の確認",
        "自己PRの確認"
      ],
      "kanjiKeywords": [
        "面",
        "接",
        "確",
        "認",
        "志",
        "望",
        "動",
        "機",
        "確",
        "認",
        "自",
        "己",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u19_l6_1",
          "type": "listen",
          "prompt": "面接の確認",
          "furigana": "めんせつのかくにん",
          "romaji": "mensetsu no kakunin",
          "english": "Confirming Job interview",
          "audioText": "めんせつのかくにん",
          "options": [
            "Confirming Job interview",
            "Confirming Recruitment / hiring",
            "Motivation for applying",
            "Confirming Strength / strong point"
          ],
          "correctAnswer": "Confirming Job interview"
        },
        {
          "id": "u19_l6_2",
          "type": "spell",
          "prompt": "面接の確認",
          "furigana": "めんせつのかくにん",
          "romaji": "mensetsu no kakunin",
          "english": "Build 'Confirming Job interview'",
          "audioText": "めんせつのかくにん",
          "tileBank": [
            "ん",
            "く",
            "か",
            "に",
            "つ",
            "め",
            "の",
            "せ"
          ],
          "correctAnswer": "めんせつのかくにん"
        },
        {
          "id": "u19_l6_3",
          "type": "cloze",
          "prompt": "私は志望動機の確認がすきです",
          "furigana": "わたしはしぼうどうきのかくにんがすきです",
          "romaji": "Watashi wa shibou douki no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Motivation for applying.",
          "audioText": "志望動機の確認",
          "clozeSentence": "これは志望動機の確認 {{BLANK}} す。",
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
          "id": "u19_l6_4",
          "type": "scramble",
          "prompt": "これは志望動機の確認です",
          "furigana": "これはしぼうどうきのかくにんです",
          "romaji": "Kore wa shibou douki no kakunin desu.",
          "english": "This is Confirming Motivation for applying.",
          "audioText": "これは志望動機の確認です",
          "scrambleTokens": [
            "です",
            "これは",
            "ではありません",
            "それ",
            "志望動機の確認"
          ],
          "scrambleSolution": [
            "これは",
            "志望動機の確認",
            "です"
          ],
          "correctAnswer": "これは志望動機の確認です"
        },
        {
          "id": "u19_l6_5",
          "type": "speak",
          "prompt": "自己PRの確認",
          "furigana": "じこピーアールのかくにん",
          "romaji": "jiko pii aaru no kakunin",
          "english": "Pronounce: Confirming Self-promotion",
          "audioText": "じこピーアールのかくにん",
          "targetSpeech": "自己PRの確認",
          "options": [
            "Confirming Self-promotion",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "自己PRの確認"
        },
        {
          "id": "u19_l6_6",
          "type": "dictate",
          "prompt": "自己PRの確認をお願いします",
          "furigana": "じこピーアールのかくにんをおねがいします",
          "romaji": "jiko pii aaru no kakunin o onegaishimasu.",
          "english": "Confirming Self-promotion, please.",
          "audioText": "自己PRの確認をお願いします",
          "dictateTokens": [
            "を",
            "自己PRの確認",
            "です",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "自己PRの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "自己PRの確認をお願いします"
        },
        {
          "id": "u19_l6_7",
          "type": "match",
          "prompt": "面接の確認・志望動機の確認・自己PRの確認・長所の確認",
          "furigana": "めんせつのかくにん・しぼうどうきのかくにん・じこピーアールのかくにん・ちょうしょのかくにん",
          "romaji": "mensetsu no kakunin, shibou douki no kakunin, jiko pii aaru no kakunin, chousho no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "めんせつのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "面接の確認",
              "right": "Confirming Job interview",
              "furigana": "めんせつのかくにん",
              "romaji": "mensetsu no kakunin"
            },
            {
              "id": "p_1",
              "left": "志望動機の確認",
              "right": "Confirming Motivation for applying",
              "furigana": "しぼうどうきのかくにん",
              "romaji": "shibou douki no kakunin"
            },
            {
              "id": "p_2",
              "left": "自己PRの確認",
              "right": "Confirming Self-promotion",
              "furigana": "じこピーアールのかくにん",
              "romaji": "jiko pii aaru no kakunin"
            },
            {
              "id": "p_3",
              "left": "長所の確認",
              "right": "Confirming Strength / strong point",
              "furigana": "ちょうしょのかくにん",
              "romaji": "chousho no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l6_8",
          "type": "dialogue",
          "prompt": "志望動機の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "志望動機の準備はできていますか？",
          "furigana": "志望動機の準備はできていますか？",
          "romaji": "shibou douki no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Motivation for applying ready?",
          "audioText": "志望動機の準備はできていますか？",
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
      "id": "u19_l7",
      "unitId": "unit_19",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Strength / strong point & Confirming Weakness / shortcoming",
      "titleJp": "長所の確認・短所の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "長所の確認",
        "短所の確認",
        "採用の確認"
      ],
      "kanjiKeywords": [
        "長",
        "所",
        "確",
        "認",
        "短",
        "所",
        "確",
        "認",
        "採",
        "用",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u19_l7_1",
          "type": "listen",
          "prompt": "長所の確認",
          "furigana": "ちょうしょのかくにん",
          "romaji": "chousho no kakunin",
          "english": "Confirming Strength / strong point",
          "audioText": "ちょうしょのかくにん",
          "options": [
            "Confirming Recruitment / hiring",
            "Confirming Strength / strong point",
            "Confirming Track record / achievements",
            "Confirming Weakness / shortcoming"
          ],
          "correctAnswer": "Confirming Strength / strong point"
        },
        {
          "id": "u19_l7_2",
          "type": "spell",
          "prompt": "長所の確認",
          "furigana": "ちょうしょのかくにん",
          "romaji": "chousho no kakunin",
          "english": "Build 'Confirming Strength / strong point'",
          "audioText": "ちょうしょのかくにん",
          "tileBank": [
            "く",
            "の",
            "し",
            "ち",
            "か",
            "ょ",
            "う",
            "ょ"
          ],
          "correctAnswer": "ちょうしょのかくにん"
        },
        {
          "id": "u19_l7_3",
          "type": "cloze",
          "prompt": "私は短所の確認がすきです",
          "furigana": "わたしはたんしょのかくにんがすきです",
          "romaji": "Watashi wa tansho no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Weakness / shortcoming.",
          "audioText": "短所の確認",
          "clozeSentence": "これは短所の確認 {{BLANK}} す。",
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
          "id": "u19_l7_4",
          "type": "scramble",
          "prompt": "これは短所の確認です",
          "furigana": "これはたんしょのかくにんです",
          "romaji": "Kore wa tansho no kakunin desu.",
          "english": "This is Confirming Weakness / shortcoming.",
          "audioText": "これは短所の確認です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "これは",
            "短所の確認",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "短所の確認",
            "です"
          ],
          "correctAnswer": "これは短所の確認です"
        },
        {
          "id": "u19_l7_5",
          "type": "speak",
          "prompt": "採用の確認",
          "furigana": "さいようのかくにん",
          "romaji": "saiyou no kakunin",
          "english": "Pronounce: Confirming Recruitment / hiring",
          "audioText": "さいようのかくにん",
          "targetSpeech": "採用の確認",
          "options": [
            "Confirming Recruitment / hiring",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "採用の確認"
        },
        {
          "id": "u19_l7_6",
          "type": "dictate",
          "prompt": "採用の確認をお願いします",
          "furigana": "さいようのかくにんをおねがいします",
          "romaji": "saiyou no kakunin o onegaishimasu.",
          "english": "Confirming Recruitment / hiring, please.",
          "audioText": "採用の確認をお願いします",
          "dictateTokens": [
            "採用の確認",
            "ありがとう",
            "です",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "採用の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "採用の確認をお願いします"
        },
        {
          "id": "u19_l7_7",
          "type": "match",
          "prompt": "長所の確認・短所の確認・採用の確認・履歴書の確認",
          "furigana": "ちょうしょのかくにん・たんしょのかくにん・さいようのかくにん・りれきしょのかくにん",
          "romaji": "chousho no kakunin, tansho no kakunin, saiyou no kakunin, rirekisho no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ちょうしょのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "長所の確認",
              "right": "Confirming Strength / strong point",
              "furigana": "ちょうしょのかくにん",
              "romaji": "chousho no kakunin"
            },
            {
              "id": "p_1",
              "left": "短所の確認",
              "right": "Confirming Weakness / shortcoming",
              "furigana": "たんしょのかくにん",
              "romaji": "tansho no kakunin"
            },
            {
              "id": "p_2",
              "left": "採用の確認",
              "right": "Confirming Recruitment / hiring",
              "furigana": "さいようのかくにん",
              "romaji": "saiyou no kakunin"
            },
            {
              "id": "p_3",
              "left": "履歴書の確認",
              "right": "Confirming Resume / curriculum vitae",
              "furigana": "りれきしょのかくにん",
              "romaji": "rirekisho no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l7_8",
          "type": "dialogue",
          "prompt": "自己PRについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "自己PRについてどう思われますか？",
          "furigana": "自己PRについてどう思われますか？",
          "romaji": "jiko pii aaru ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Self-promotion?",
          "audioText": "自己PRについてどう思われますか？",
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
      "id": "u19_l8",
      "unitId": "unit_19",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Resume / curriculum vitae & Confirming Contribution",
      "titleJp": "履歴書の確認・貢献の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "履歴書の確認",
        "貢献の確認",
        "適性の確認"
      ],
      "kanjiKeywords": [
        "履",
        "歴",
        "書",
        "確",
        "認",
        "貢",
        "献",
        "確",
        "認",
        "適",
        "性",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u19_l8_1",
          "type": "listen",
          "prompt": "履歴書の確認",
          "furigana": "りれきしょのかくにん",
          "romaji": "rirekisho no kakunin",
          "english": "Confirming Resume / curriculum vitae",
          "audioText": "りれきしょのかくにん",
          "options": [
            "Recruitment / hiring",
            "Confirming Resume / curriculum vitae",
            "Unofficial job offer",
            "Self-promotion"
          ],
          "correctAnswer": "Confirming Resume / curriculum vitae"
        },
        {
          "id": "u19_l8_2",
          "type": "spell",
          "prompt": "履歴書の確認",
          "furigana": "りれきしょのかくにん",
          "romaji": "rirekisho no kakunin",
          "english": "Build 'Confirming Resume / curriculum vitae'",
          "audioText": "りれきしょのかくにん",
          "tileBank": [
            "り",
            "き",
            "く",
            "の",
            "ょ",
            "れ",
            "か",
            "し"
          ],
          "correctAnswer": "りれきしょのかくにん"
        },
        {
          "id": "u19_l8_3",
          "type": "cloze",
          "prompt": "私は貢献の確認がすきです",
          "furigana": "わたしはこうけんのかくにんがすきです",
          "romaji": "Watashi wa kouken no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Contribution.",
          "audioText": "貢献の確認",
          "clozeSentence": "これは貢献の確認 {{BLANK}} す。",
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
          "id": "u19_l8_4",
          "type": "scramble",
          "prompt": "これは貢献の確認です",
          "furigana": "これはこうけんのかくにんです",
          "romaji": "Kore wa kouken no kakunin desu.",
          "english": "This is Confirming Contribution.",
          "audioText": "これは貢献の確認です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "これは",
            "貢献の確認",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "貢献の確認",
            "です"
          ],
          "correctAnswer": "これは貢献の確認です"
        },
        {
          "id": "u19_l8_5",
          "type": "speak",
          "prompt": "適性の確認",
          "furigana": "てきせいのかくにん",
          "romaji": "tekisei no kakunin",
          "english": "Pronounce: Confirming Aptitude / suitability",
          "audioText": "てきせいのかくにん",
          "targetSpeech": "適性の確認",
          "options": [
            "Confirming Aptitude / suitability",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "適性の確認"
        },
        {
          "id": "u19_l8_6",
          "type": "dictate",
          "prompt": "適性の確認をお願いします",
          "furigana": "てきせいのかくにんをおねがいします",
          "romaji": "tekisei no kakunin o onegaishimasu.",
          "english": "Confirming Aptitude / suitability, please.",
          "audioText": "適性の確認をお願いします",
          "dictateTokens": [
            "適性の確認",
            "です",
            "ありがとう",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "適性の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "適性の確認をお願いします"
        },
        {
          "id": "u19_l8_7",
          "type": "match",
          "prompt": "履歴書の確認・貢献の確認・適性の確認・意欲の確認",
          "furigana": "りれきしょのかくにん・こうけんのかくにん・てきせいのかくにん・いよくのかくにん",
          "romaji": "rirekisho no kakunin, kouken no kakunin, tekisei no kakunin, iyoku no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "りれきしょのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "履歴書の確認",
              "right": "Confirming Resume / curriculum vitae",
              "furigana": "りれきしょのかくにん",
              "romaji": "rirekisho no kakunin"
            },
            {
              "id": "p_1",
              "left": "貢献の確認",
              "right": "Confirming Contribution",
              "furigana": "こうけんのかくにん",
              "romaji": "kouken no kakunin"
            },
            {
              "id": "p_2",
              "left": "適性の確認",
              "right": "Confirming Aptitude / suitability",
              "furigana": "てきせいのかくにん",
              "romaji": "tekisei no kakunin"
            },
            {
              "id": "p_3",
              "left": "意欲の確認",
              "right": "Confirming Enthusiasm / will to achieve",
              "furigana": "いよくのかくにん",
              "romaji": "iyoku no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l8_8",
          "type": "dialogue",
          "prompt": "次は長所に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は長所に進みましょう。",
          "furigana": "次は長所に進みましょう。",
          "romaji": "Tsugi wa chousho ni susumimashou.",
          "english": "Speaker: Let's proceed to Strength / strong point next.",
          "audioText": "次は長所に進みましょう。",
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
      "id": "u19_l9",
      "unitId": "unit_19",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Enthusiasm / will to achieve & Confirming Track record / achievements",
      "titleJp": "意欲の確認・実績の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "意欲の確認",
        "実績の確認",
        "入社の確認"
      ],
      "kanjiKeywords": [
        "意",
        "欲",
        "確",
        "認",
        "実",
        "績",
        "確",
        "認",
        "入",
        "社",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u19_l9_1",
          "type": "listen",
          "prompt": "意欲の確認",
          "furigana": "いよくのかくにん",
          "romaji": "iyoku no kakunin",
          "english": "Confirming Enthusiasm / will to achieve",
          "audioText": "いよくのかくにん",
          "options": [
            "Confirming Enthusiasm / will to achieve",
            "Recruitment / hiring",
            "Weakness / shortcoming",
            "Self-promotion"
          ],
          "correctAnswer": "Confirming Enthusiasm / will to achieve"
        },
        {
          "id": "u19_l9_2",
          "type": "spell",
          "prompt": "意欲の確認",
          "furigana": "いよくのかくにん",
          "romaji": "iyoku no kakunin",
          "english": "Build 'Confirming Enthusiasm / will to achieve'",
          "audioText": "いよくのかくにん",
          "tileBank": [
            "く",
            "の",
            "よ",
            "ん",
            "に",
            "く",
            "い",
            "か"
          ],
          "correctAnswer": "いよくのかくにん"
        },
        {
          "id": "u19_l9_3",
          "type": "cloze",
          "prompt": "私は実績の確認がすきです",
          "furigana": "わたしはじっせきのかくにんがすきです",
          "romaji": "Watashi wa jisseki no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Track record / achievements.",
          "audioText": "実績の確認",
          "clozeSentence": "これは実績の確認 {{BLANK}} す。",
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
          "id": "u19_l9_4",
          "type": "scramble",
          "prompt": "これは実績の確認です",
          "furigana": "これはじっせきのかくにんです",
          "romaji": "Kore wa jisseki no kakunin desu.",
          "english": "This is Confirming Track record / achievements.",
          "audioText": "これは実績の確認です",
          "scrambleTokens": [
            "これは",
            "それ",
            "です",
            "ではありません",
            "実績の確認"
          ],
          "scrambleSolution": [
            "これは",
            "実績の確認",
            "です"
          ],
          "correctAnswer": "これは実績の確認です"
        },
        {
          "id": "u19_l9_5",
          "type": "speak",
          "prompt": "入社の確認",
          "furigana": "にゅうしゃのかくにん",
          "romaji": "nyuusha no kakunin",
          "english": "Pronounce: Confirming Joining a company",
          "audioText": "にゅうしゃのかくにん",
          "targetSpeech": "入社の確認",
          "options": [
            "Confirming Joining a company",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "入社の確認"
        },
        {
          "id": "u19_l9_6",
          "type": "dictate",
          "prompt": "入社の確認をお願いします",
          "furigana": "にゅうしゃのかくにんをおねがいします",
          "romaji": "nyuusha no kakunin o onegaishimasu.",
          "english": "Confirming Joining a company, please.",
          "audioText": "入社の確認をお願いします",
          "dictateTokens": [
            "入社の確認",
            "です",
            "お願いします",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "入社の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "入社の確認をお願いします"
        },
        {
          "id": "u19_l9_7",
          "type": "match",
          "prompt": "意欲の確認・実績の確認・入社の確認・貴社の確認",
          "furigana": "いよくのかくにん・じっせきのかくにん・にゅうしゃのかくにん・きしゃのかくにん",
          "romaji": "iyoku no kakunin, jisseki no kakunin, nyuusha no kakunin, kisha no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いよくのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "意欲の確認",
              "right": "Confirming Enthusiasm / will to achieve",
              "furigana": "いよくのかくにん",
              "romaji": "iyoku no kakunin"
            },
            {
              "id": "p_1",
              "left": "実績の確認",
              "right": "Confirming Track record / achievements",
              "furigana": "じっせきのかくにん",
              "romaji": "jisseki no kakunin"
            },
            {
              "id": "p_2",
              "left": "入社の確認",
              "right": "Confirming Joining a company",
              "furigana": "にゅうしゃのかくにん",
              "romaji": "nyuusha no kakunin"
            },
            {
              "id": "p_3",
              "left": "貴社の確認",
              "right": "Confirming Your esteemed company (written)",
              "furigana": "きしゃのかくにん",
              "romaji": "kisha no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l9_8",
          "type": "dialogue",
          "prompt": "面接について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "面接について教えていただけますか？",
          "furigana": "面接について教えていただけますか？",
          "romaji": "mensetsu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Job interview?",
          "audioText": "面接について教えていただけますか？",
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
      "id": "u19_l10",
      "unitId": "unit_19",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Your esteemed company (written) & Confirming Your esteemed company (spoken)",
      "titleJp": "貴社の確認・御社の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "貴社の確認",
        "御社の確認",
        "内定の確認"
      ],
      "kanjiKeywords": [
        "貴",
        "社",
        "確",
        "認",
        "御",
        "社",
        "確",
        "認",
        "内",
        "定",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u19_l10_1",
          "type": "listen",
          "prompt": "貴社の確認",
          "furigana": "きしゃのかくにん",
          "romaji": "kisha no kakunin",
          "english": "Confirming Your esteemed company (written)",
          "audioText": "きしゃのかくにん",
          "options": [
            "Confirming Recruitment / hiring",
            "Self-promotion",
            "Confirming Your esteemed company (written)",
            "Confirming Aptitude / suitability"
          ],
          "correctAnswer": "Confirming Your esteemed company (written)"
        },
        {
          "id": "u19_l10_2",
          "type": "spell",
          "prompt": "貴社の確認",
          "furigana": "きしゃのかくにん",
          "romaji": "kisha no kakunin",
          "english": "Build 'Confirming Your esteemed company (written)'",
          "audioText": "きしゃのかくにん",
          "tileBank": [
            "き",
            "か",
            "の",
            "ゃ",
            "く",
            "し",
            "に",
            "ん"
          ],
          "correctAnswer": "きしゃのかくにん"
        },
        {
          "id": "u19_l10_3",
          "type": "cloze",
          "prompt": "私は御社の確認がすきです",
          "furigana": "わたしはおんしゃのかくにんがすきです",
          "romaji": "Watashi wa onsha no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Your esteemed company (spoken).",
          "audioText": "御社の確認",
          "clozeSentence": "これは御社の確認 {{BLANK}} す。",
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
          "id": "u19_l10_4",
          "type": "scramble",
          "prompt": "これは御社の確認です",
          "furigana": "これはおんしゃのかくにんです",
          "romaji": "Kore wa onsha no kakunin desu.",
          "english": "This is Confirming Your esteemed company (spoken).",
          "audioText": "これは御社の確認です",
          "scrambleTokens": [
            "御社の確認",
            "ではありません",
            "です",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "御社の確認",
            "です"
          ],
          "correctAnswer": "これは御社の確認です"
        },
        {
          "id": "u19_l10_5",
          "type": "speak",
          "prompt": "内定の確認",
          "furigana": "ないていのかくにん",
          "romaji": "naitei no kakunin",
          "english": "Pronounce: Confirming Unofficial job offer",
          "audioText": "ないていのかくにん",
          "targetSpeech": "内定の確認",
          "options": [
            "Confirming Unofficial job offer",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "内定の確認"
        },
        {
          "id": "u19_l10_6",
          "type": "dictate",
          "prompt": "内定の確認をお願いします",
          "furigana": "ないていのかくにんをおねがいします",
          "romaji": "naitei no kakunin o onegaishimasu.",
          "english": "Confirming Unofficial job offer, please.",
          "audioText": "内定の確認をお願いします",
          "dictateTokens": [
            "内定の確認",
            "です",
            "を",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "内定の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "内定の確認をお願いします"
        },
        {
          "id": "u19_l10_7",
          "type": "match",
          "prompt": "貴社の確認・御社の確認・内定の確認・面接の確認",
          "furigana": "きしゃのかくにん・おんしゃのかくにん・ないていのかくにん・めんせつのかくにん",
          "romaji": "kisha no kakunin, onsha no kakunin, naitei no kakunin, mensetsu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "きしゃのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "貴社の確認",
              "right": "Confirming Your esteemed company (written)",
              "furigana": "きしゃのかくにん",
              "romaji": "kisha no kakunin"
            },
            {
              "id": "p_1",
              "left": "御社の確認",
              "right": "Confirming Your esteemed company (spoken)",
              "furigana": "おんしゃのかくにん",
              "romaji": "onsha no kakunin"
            },
            {
              "id": "p_2",
              "left": "内定の確認",
              "right": "Confirming Unofficial job offer",
              "furigana": "ないていのかくにん",
              "romaji": "naitei no kakunin"
            },
            {
              "id": "p_3",
              "left": "面接の確認",
              "right": "Confirming Job interview",
              "furigana": "めんせつのかくにん",
              "romaji": "mensetsu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l10_8",
          "type": "dialogue",
          "prompt": "志望動機の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "志望動機の準備はできていますか？",
          "furigana": "志望動機の準備はできていますか？",
          "romaji": "shibou douki no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Motivation for applying ready?",
          "audioText": "志望動機の準備はできていますか？",
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
      "id": "u19_l11",
      "unitId": "unit_19",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Job interview & Confirming Motivation for applying",
      "titleJp": "面接の確認・志望動機の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "面接の確認",
        "志望動機の確認",
        "自己PRの確認"
      ],
      "kanjiKeywords": [
        "面",
        "接",
        "確",
        "認",
        "志",
        "望",
        "動",
        "機",
        "確",
        "認",
        "自",
        "己",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u19_l11_1",
          "type": "listen",
          "prompt": "面接の確認",
          "furigana": "めんせつのかくにん",
          "romaji": "mensetsu no kakunin",
          "english": "Confirming Job interview",
          "audioText": "めんせつのかくにん",
          "options": [
            "Joining a company",
            "Confirming Strength / strong point",
            "Confirming Contribution",
            "Confirming Job interview"
          ],
          "correctAnswer": "Confirming Job interview"
        },
        {
          "id": "u19_l11_2",
          "type": "spell",
          "prompt": "面接の確認",
          "furigana": "めんせつのかくにん",
          "romaji": "mensetsu no kakunin",
          "english": "Build 'Confirming Job interview'",
          "audioText": "めんせつのかくにん",
          "tileBank": [
            "の",
            "せ",
            "つ",
            "め",
            "か",
            "に",
            "ん",
            "く"
          ],
          "correctAnswer": "めんせつのかくにん"
        },
        {
          "id": "u19_l11_3",
          "type": "cloze",
          "prompt": "私は志望動機の確認がすきです",
          "furigana": "わたしはしぼうどうきのかくにんがすきです",
          "romaji": "Watashi wa shibou douki no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Motivation for applying.",
          "audioText": "志望動機の確認",
          "clozeSentence": "これは志望動機の確認 {{BLANK}} す。",
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
          "id": "u19_l11_4",
          "type": "scramble",
          "prompt": "これは志望動機の確認です",
          "furigana": "これはしぼうどうきのかくにんです",
          "romaji": "Kore wa shibou douki no kakunin desu.",
          "english": "This is Confirming Motivation for applying.",
          "audioText": "これは志望動機の確認です",
          "scrambleTokens": [
            "志望動機の確認",
            "ではありません",
            "です",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "志望動機の確認",
            "です"
          ],
          "correctAnswer": "これは志望動機の確認です"
        },
        {
          "id": "u19_l11_5",
          "type": "speak",
          "prompt": "自己PRの確認",
          "furigana": "じこピーアールのかくにん",
          "romaji": "jiko pii aaru no kakunin",
          "english": "Pronounce: Confirming Self-promotion",
          "audioText": "じこピーアールのかくにん",
          "targetSpeech": "自己PRの確認",
          "options": [
            "Confirming Self-promotion",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "自己PRの確認"
        },
        {
          "id": "u19_l11_6",
          "type": "dictate",
          "prompt": "自己PRの確認をお願いします",
          "furigana": "じこピーアールのかくにんをおねがいします",
          "romaji": "jiko pii aaru no kakunin o onegaishimasu.",
          "english": "Confirming Self-promotion, please.",
          "audioText": "自己PRの確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "お願いします",
            "自己PRの確認",
            "です"
          ],
          "dictateSolution": [
            "自己PRの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "自己PRの確認をお願いします"
        },
        {
          "id": "u19_l11_7",
          "type": "match",
          "prompt": "面接の確認・志望動機の確認・自己PRの確認・長所の確認",
          "furigana": "めんせつのかくにん・しぼうどうきのかくにん・じこピーアールのかくにん・ちょうしょのかくにん",
          "romaji": "mensetsu no kakunin, shibou douki no kakunin, jiko pii aaru no kakunin, chousho no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "めんせつのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "面接の確認",
              "right": "Confirming Job interview",
              "furigana": "めんせつのかくにん",
              "romaji": "mensetsu no kakunin"
            },
            {
              "id": "p_1",
              "left": "志望動機の確認",
              "right": "Confirming Motivation for applying",
              "furigana": "しぼうどうきのかくにん",
              "romaji": "shibou douki no kakunin"
            },
            {
              "id": "p_2",
              "left": "自己PRの確認",
              "right": "Confirming Self-promotion",
              "furigana": "じこピーアールのかくにん",
              "romaji": "jiko pii aaru no kakunin"
            },
            {
              "id": "p_3",
              "left": "長所の確認",
              "right": "Confirming Strength / strong point",
              "furigana": "ちょうしょのかくにん",
              "romaji": "chousho no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l11_8",
          "type": "dialogue",
          "prompt": "自己PRについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "自己PRについてどう思われますか？",
          "furigana": "自己PRについてどう思われますか？",
          "romaji": "jiko pii aaru ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Self-promotion?",
          "audioText": "自己PRについてどう思われますか？",
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
      "id": "u19_l12",
      "unitId": "unit_19",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Strength / strong point & Confirming Weakness / shortcoming",
      "titleJp": "長所の確認・短所の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "長所の確認",
        "短所の確認",
        "採用の確認"
      ],
      "kanjiKeywords": [
        "長",
        "所",
        "確",
        "認",
        "短",
        "所",
        "確",
        "認",
        "採",
        "用",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u19_l12_1",
          "type": "listen",
          "prompt": "長所の確認",
          "furigana": "ちょうしょのかくにん",
          "romaji": "chousho no kakunin",
          "english": "Confirming Strength / strong point",
          "audioText": "ちょうしょのかくにん",
          "options": [
            "Confirming Aptitude / suitability",
            "Confirming Strength / strong point",
            "Unofficial job offer",
            "Confirming Contribution"
          ],
          "correctAnswer": "Confirming Strength / strong point"
        },
        {
          "id": "u19_l12_2",
          "type": "spell",
          "prompt": "長所の確認",
          "furigana": "ちょうしょのかくにん",
          "romaji": "chousho no kakunin",
          "english": "Build 'Confirming Strength / strong point'",
          "audioText": "ちょうしょのかくにん",
          "tileBank": [
            "の",
            "か",
            "く",
            "し",
            "ち",
            "う",
            "ょ",
            "ょ"
          ],
          "correctAnswer": "ちょうしょのかくにん"
        },
        {
          "id": "u19_l12_3",
          "type": "cloze",
          "prompt": "私は短所の確認がすきです",
          "furigana": "わたしはたんしょのかくにんがすきです",
          "romaji": "Watashi wa tansho no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Weakness / shortcoming.",
          "audioText": "短所の確認",
          "clozeSentence": "これは短所の確認 {{BLANK}} す。",
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
          "id": "u19_l12_4",
          "type": "scramble",
          "prompt": "これは短所の確認です",
          "furigana": "これはたんしょのかくにんです",
          "romaji": "Kore wa tansho no kakunin desu.",
          "english": "This is Confirming Weakness / shortcoming.",
          "audioText": "これは短所の確認です",
          "scrambleTokens": [
            "短所の確認",
            "それ",
            "これは",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "短所の確認",
            "です"
          ],
          "correctAnswer": "これは短所の確認です"
        },
        {
          "id": "u19_l12_5",
          "type": "speak",
          "prompt": "採用の確認",
          "furigana": "さいようのかくにん",
          "romaji": "saiyou no kakunin",
          "english": "Pronounce: Confirming Recruitment / hiring",
          "audioText": "さいようのかくにん",
          "targetSpeech": "採用の確認",
          "options": [
            "Confirming Recruitment / hiring",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "採用の確認"
        },
        {
          "id": "u19_l12_6",
          "type": "dictate",
          "prompt": "採用の確認をお願いします",
          "furigana": "さいようのかくにんをおねがいします",
          "romaji": "saiyou no kakunin o onegaishimasu.",
          "english": "Confirming Recruitment / hiring, please.",
          "audioText": "採用の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "採用の確認",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "採用の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "採用の確認をお願いします"
        },
        {
          "id": "u19_l12_7",
          "type": "match",
          "prompt": "長所の確認・短所の確認・採用の確認・面接",
          "furigana": "ちょうしょのかくにん・たんしょのかくにん・さいようのかくにん・めんせつ",
          "romaji": "chousho no kakunin, tansho no kakunin, saiyou no kakunin, mensetsu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ちょうしょのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "長所の確認",
              "right": "Confirming Strength / strong point",
              "furigana": "ちょうしょのかくにん",
              "romaji": "chousho no kakunin"
            },
            {
              "id": "p_1",
              "left": "短所の確認",
              "right": "Confirming Weakness / shortcoming",
              "furigana": "たんしょのかくにん",
              "romaji": "tansho no kakunin"
            },
            {
              "id": "p_2",
              "left": "採用の確認",
              "right": "Confirming Recruitment / hiring",
              "furigana": "さいようのかくにん",
              "romaji": "saiyou no kakunin"
            },
            {
              "id": "p_3",
              "left": "面接",
              "right": "Job interview",
              "furigana": "めんせつ",
              "romaji": "mensetsu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l12_8",
          "type": "dialogue",
          "prompt": "次は長所に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は長所に進みましょう。",
          "furigana": "次は長所に進みましょう。",
          "romaji": "Tsugi wa chousho ni susumimashou.",
          "english": "Speaker: Let's proceed to Strength / strong point next.",
          "audioText": "次は長所に進みましょう。",
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
      "id": "u19_l13",
      "unitId": "unit_19",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Job interview & Motivation for applying",
      "titleJp": "面接・志望動機",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "面接",
        "志望動機",
        "自己PR"
      ],
      "kanjiKeywords": [
        "面",
        "接",
        "志",
        "望",
        "動",
        "機",
        "自",
        "己"
      ],
      "items": [
        {
          "id": "u19_l13_1",
          "type": "listen",
          "prompt": "面接",
          "furigana": "めんせつ",
          "romaji": "mensetsu",
          "english": "Job interview",
          "audioText": "めんせつ",
          "options": [
            "Enthusiasm / will to achieve",
            "Contribution",
            "Confirming Weakness / shortcoming",
            "Job interview"
          ],
          "correctAnswer": "Job interview"
        },
        {
          "id": "u19_l13_2",
          "type": "spell",
          "prompt": "面接",
          "furigana": "めんせつ",
          "romaji": "mensetsu",
          "english": "Build 'Job interview'",
          "audioText": "めんせつ",
          "tileBank": [
            "た",
            "め",
            "せ",
            "ら",
            "ん",
            "ま",
            "つ",
            "ぬ"
          ],
          "correctAnswer": "めんせつ"
        },
        {
          "id": "u19_l13_3",
          "type": "cloze",
          "prompt": "私は志望動機がすきです",
          "furigana": "わたしはしぼうどうきがすきです",
          "romaji": "Watashi wa shibou douki ga suki desu.",
          "english": "Fill in the blank with the correct particle for Motivation for applying.",
          "audioText": "志望動機",
          "clozeSentence": "これは志望動機 {{BLANK}} す。",
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
          "id": "u19_l13_4",
          "type": "scramble",
          "prompt": "これは志望動機です",
          "furigana": "これはしぼうどうきです",
          "romaji": "Kore wa shibou douki desu.",
          "english": "This is Motivation for applying.",
          "audioText": "これは志望動機です",
          "scrambleTokens": [
            "です",
            "志望動機",
            "これは",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "志望動機",
            "です"
          ],
          "correctAnswer": "これは志望動機です"
        },
        {
          "id": "u19_l13_5",
          "type": "speak",
          "prompt": "自己PR",
          "furigana": "じこピーアール",
          "romaji": "jiko pii aaru",
          "english": "Pronounce: Self-promotion",
          "audioText": "じこピーアール",
          "targetSpeech": "自己PR",
          "options": [
            "Self-promotion",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "自己PR"
        },
        {
          "id": "u19_l13_6",
          "type": "dictate",
          "prompt": "自己PRをお願いします",
          "furigana": "じこピーアールをおねがいします",
          "romaji": "jiko pii aaru o onegaishimasu.",
          "english": "Self-promotion, please.",
          "audioText": "自己PRをお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "自己PR",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "自己PR",
            "を",
            "お願いします"
          ],
          "correctAnswer": "自己PRをお願いします"
        },
        {
          "id": "u19_l13_7",
          "type": "match",
          "prompt": "面接・志望動機・自己PR・長所",
          "furigana": "めんせつ・しぼうどうき・じこピーアール・ちょうしょ",
          "romaji": "mensetsu, shibou douki, jiko pii aaru, chousho",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "めんせつ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "面接",
              "right": "Job interview",
              "furigana": "めんせつ",
              "romaji": "mensetsu"
            },
            {
              "id": "p_1",
              "left": "志望動機",
              "right": "Motivation for applying",
              "furigana": "しぼうどうき",
              "romaji": "shibou douki"
            },
            {
              "id": "p_2",
              "left": "自己PR",
              "right": "Self-promotion",
              "furigana": "じこピーアール",
              "romaji": "jiko pii aaru"
            },
            {
              "id": "p_3",
              "left": "長所",
              "right": "Strength / strong point",
              "furigana": "ちょうしょ",
              "romaji": "chousho"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l13_8",
          "type": "dialogue",
          "prompt": "面接について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "面接について教えていただけますか？",
          "furigana": "面接について教えていただけますか？",
          "romaji": "mensetsu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Job interview?",
          "audioText": "面接について教えていただけますか？",
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
      "id": "u19_l14",
      "unitId": "unit_19",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Strength / strong point & Weakness / shortcoming",
      "titleJp": "長所・短所",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "長所",
        "短所",
        "採用"
      ],
      "kanjiKeywords": [
        "長",
        "所",
        "短",
        "所",
        "採",
        "用"
      ],
      "items": [
        {
          "id": "u19_l14_1",
          "type": "listen",
          "prompt": "長所",
          "furigana": "ちょうしょ",
          "romaji": "chousho",
          "english": "Strength / strong point",
          "audioText": "ちょうしょ",
          "options": [
            "Strength / strong point",
            "Track record / achievements",
            "Confirming Unofficial job offer",
            "Resume / curriculum vitae"
          ],
          "correctAnswer": "Strength / strong point"
        },
        {
          "id": "u19_l14_2",
          "type": "spell",
          "prompt": "長所",
          "furigana": "ちょうしょ",
          "romaji": "chousho",
          "english": "Build 'Strength / strong point'",
          "audioText": "ちょうしょ",
          "tileBank": [
            "わ",
            "ち",
            "し",
            "い",
            "う",
            "ょ",
            "む",
            "ょ"
          ],
          "correctAnswer": "ちょうしょ"
        },
        {
          "id": "u19_l14_3",
          "type": "cloze",
          "prompt": "私は短所がすきです",
          "furigana": "わたしはたんしょがすきです",
          "romaji": "Watashi wa tansho ga suki desu.",
          "english": "Fill in the blank with the correct particle for Weakness / shortcoming.",
          "audioText": "短所",
          "clozeSentence": "これは短所 {{BLANK}} す。",
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
          "id": "u19_l14_4",
          "type": "scramble",
          "prompt": "これは短所です",
          "furigana": "これはたんしょです",
          "romaji": "Kore wa tansho desu.",
          "english": "This is Weakness / shortcoming.",
          "audioText": "これは短所です",
          "scrambleTokens": [
            "それ",
            "短所",
            "これは",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "短所",
            "です"
          ],
          "correctAnswer": "これは短所です"
        },
        {
          "id": "u19_l14_5",
          "type": "speak",
          "prompt": "採用",
          "furigana": "さいよう",
          "romaji": "saiyou",
          "english": "Pronounce: Recruitment / hiring",
          "audioText": "さいよう",
          "targetSpeech": "採用",
          "options": [
            "Recruitment / hiring",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "採用"
        },
        {
          "id": "u19_l14_6",
          "type": "dictate",
          "prompt": "採用をお願いします",
          "furigana": "さいようをおねがいします",
          "romaji": "saiyou o onegaishimasu.",
          "english": "Recruitment / hiring, please.",
          "audioText": "採用をお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "採用",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "採用",
            "を",
            "お願いします"
          ],
          "correctAnswer": "採用をお願いします"
        },
        {
          "id": "u19_l14_7",
          "type": "match",
          "prompt": "長所・短所・採用・履歴書",
          "furigana": "ちょうしょ・たんしょ・さいよう・りれきしょ",
          "romaji": "chousho, tansho, saiyou, rirekisho",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ちょうしょ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "長所",
              "right": "Strength / strong point",
              "furigana": "ちょうしょ",
              "romaji": "chousho"
            },
            {
              "id": "p_1",
              "left": "短所",
              "right": "Weakness / shortcoming",
              "furigana": "たんしょ",
              "romaji": "tansho"
            },
            {
              "id": "p_2",
              "left": "採用",
              "right": "Recruitment / hiring",
              "furigana": "さいよう",
              "romaji": "saiyou"
            },
            {
              "id": "p_3",
              "left": "履歴書",
              "right": "Resume / curriculum vitae",
              "furigana": "りれきしょ",
              "romaji": "rirekisho"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l14_8",
          "type": "dialogue",
          "prompt": "志望動機の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "志望動機の準備はできていますか？",
          "furigana": "志望動機の準備はできていますか？",
          "romaji": "shibou douki no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Motivation for applying ready?",
          "audioText": "志望動機の準備はできていますか？",
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
      "id": "u19_l15",
      "unitId": "unit_19",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 19 Master Exam",
      "iconType": "test",
      "title": "Unit 19 Master Exam",
      "titleJp": "第19週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "履歴書",
        "貢献",
        "適性"
      ],
      "kanjiKeywords": [
        "履",
        "歴",
        "書",
        "貢",
        "献",
        "適",
        "性"
      ],
      "items": [
        {
          "id": "u19_l15_1",
          "type": "listen",
          "prompt": "履歴書",
          "furigana": "りれきしょ",
          "romaji": "rirekisho",
          "english": "Resume / curriculum vitae",
          "audioText": "りれきしょ",
          "options": [
            "Contribution",
            "Confirming Strength / strong point",
            "Resume / curriculum vitae",
            "Your esteemed company (spoken)"
          ],
          "correctAnswer": "Resume / curriculum vitae"
        },
        {
          "id": "u19_l15_2",
          "type": "spell",
          "prompt": "履歴書",
          "furigana": "りれきしょ",
          "romaji": "rirekisho",
          "english": "Build 'Resume / curriculum vitae'",
          "audioText": "りれきしょ",
          "tileBank": [
            "き",
            "れ",
            "し",
            "へ",
            "よ",
            "り",
            "て",
            "ょ"
          ],
          "correctAnswer": "りれきしょ"
        },
        {
          "id": "u19_l15_3",
          "type": "cloze",
          "prompt": "私は貢献がすきです",
          "furigana": "わたしはこうけんがすきです",
          "romaji": "Watashi wa kouken ga suki desu.",
          "english": "Fill in the blank with the correct particle for Contribution.",
          "audioText": "貢献",
          "clozeSentence": "これは貢献 {{BLANK}} す。",
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
          "id": "u19_l15_4",
          "type": "scramble",
          "prompt": "これは貢献です",
          "furigana": "これはこうけんです",
          "romaji": "Kore wa kouken desu.",
          "english": "This is Contribution.",
          "audioText": "これは貢献です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "貢献",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "貢献",
            "です"
          ],
          "correctAnswer": "これは貢献です"
        },
        {
          "id": "u19_l15_5",
          "type": "speak",
          "prompt": "適性",
          "furigana": "てきせい",
          "romaji": "tekisei",
          "english": "Pronounce: Aptitude / suitability",
          "audioText": "てきせい",
          "targetSpeech": "適性",
          "options": [
            "Aptitude / suitability",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "適性"
        },
        {
          "id": "u19_l15_6",
          "type": "dictate",
          "prompt": "適性をお願いします",
          "furigana": "てきせいをおねがいします",
          "romaji": "tekisei o onegaishimasu.",
          "english": "Aptitude / suitability, please.",
          "audioText": "適性をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "ありがとう",
            "適性",
            "お願いします"
          ],
          "dictateSolution": [
            "適性",
            "を",
            "お願いします"
          ],
          "correctAnswer": "適性をお願いします"
        },
        {
          "id": "u19_l15_7",
          "type": "match",
          "prompt": "履歴書・貢献・適性・意欲",
          "furigana": "りれきしょ・こうけん・てきせい・いよく",
          "romaji": "rirekisho, kouken, tekisei, iyoku",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "りれきしょ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "履歴書",
              "right": "Resume / curriculum vitae",
              "furigana": "りれきしょ",
              "romaji": "rirekisho"
            },
            {
              "id": "p_1",
              "left": "貢献",
              "right": "Contribution",
              "furigana": "こうけん",
              "romaji": "kouken"
            },
            {
              "id": "p_2",
              "left": "適性",
              "right": "Aptitude / suitability",
              "furigana": "てきせい",
              "romaji": "tekisei"
            },
            {
              "id": "p_3",
              "left": "意欲",
              "right": "Enthusiasm / will to achieve",
              "furigana": "いよく",
              "romaji": "iyoku"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u19_l15_8",
          "type": "dialogue",
          "prompt": "自己PRについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "自己PRについてどう思われますか？",
          "furigana": "自己PRについてどう思われますか？",
          "romaji": "jiko pii aaru ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Self-promotion?",
          "audioText": "自己PRについてどう思われますか？",
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
    "id": "gate_unit_19",
    "unitId": "unit_19",
    "title": "Unit 19 Mastery Checkpoint",
    "titleJp": "第19週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u19_l1_1",
        "type": "listen",
        "prompt": "面接",
        "furigana": "めんせつ",
        "romaji": "mensetsu",
        "english": "Job interview",
        "audioText": "めんせつ",
        "options": [
          "Aptitude / suitability",
          "Job interview",
          "Confirming Self-promotion",
          "Joining a company"
        ],
        "correctAnswer": "Job interview"
      },
      {
        "id": "u19_l1_2",
        "type": "spell",
        "prompt": "面接",
        "furigana": "めんせつ",
        "romaji": "mensetsu",
        "english": "Build 'Job interview'",
        "audioText": "めんせつ",
        "tileBank": [
          "ね",
          "ほ",
          "つ",
          "せ",
          "ん",
          "む",
          "き",
          "め"
        ],
        "correctAnswer": "めんせつ"
      },
      {
        "id": "u19_l3_1",
        "type": "listen",
        "prompt": "履歴書",
        "furigana": "りれきしょ",
        "romaji": "rirekisho",
        "english": "Resume / curriculum vitae",
        "audioText": "りれきしょ",
        "options": [
          "Confirming Weakness / shortcoming",
          "Resume / curriculum vitae",
          "Confirming Aptitude / suitability",
          "Confirming Weakness / shortcoming"
        ],
        "correctAnswer": "Resume / curriculum vitae"
      },
      {
        "id": "u19_l3_2",
        "type": "spell",
        "prompt": "履歴書",
        "furigana": "りれきしょ",
        "romaji": "rirekisho",
        "english": "Build 'Resume / curriculum vitae'",
        "audioText": "りれきしょ",
        "tileBank": [
          "き",
          "え",
          "ょ",
          "し",
          "た",
          "か",
          "れ",
          "り"
        ],
        "correctAnswer": "りれきしょ"
      },
      {
        "id": "u19_l5_1",
        "type": "listen",
        "prompt": "貴社",
        "furigana": "きしゃ",
        "romaji": "kisha",
        "english": "Your esteemed company (written)",
        "audioText": "きしゃ",
        "options": [
          "Confirming Track record / achievements",
          "Your esteemed company (written)",
          "Confirming Enthusiasm / will to achieve",
          "Joining a company"
        ],
        "correctAnswer": "Your esteemed company (written)"
      },
      {
        "id": "u19_l5_2",
        "type": "spell",
        "prompt": "貴社",
        "furigana": "きしゃ",
        "romaji": "kisha",
        "english": "Build 'Your esteemed company (written)'",
        "audioText": "きしゃ",
        "tileBank": [
          "ま",
          "を",
          "ゃ",
          "し",
          "と",
          "き",
          "つ",
          "せ"
        ],
        "correctAnswer": "きしゃ"
      },
      {
        "id": "u19_l7_1",
        "type": "listen",
        "prompt": "長所の確認",
        "furigana": "ちょうしょのかくにん",
        "romaji": "chousho no kakunin",
        "english": "Confirming Strength / strong point",
        "audioText": "ちょうしょのかくにん",
        "options": [
          "Confirming Recruitment / hiring",
          "Confirming Strength / strong point",
          "Confirming Track record / achievements",
          "Confirming Weakness / shortcoming"
        ],
        "correctAnswer": "Confirming Strength / strong point"
      },
      {
        "id": "u19_l7_2",
        "type": "spell",
        "prompt": "長所の確認",
        "furigana": "ちょうしょのかくにん",
        "romaji": "chousho no kakunin",
        "english": "Build 'Confirming Strength / strong point'",
        "audioText": "ちょうしょのかくにん",
        "tileBank": [
          "く",
          "の",
          "し",
          "ち",
          "か",
          "ょ",
          "う",
          "ょ"
        ],
        "correctAnswer": "ちょうしょのかくにん"
      },
      {
        "id": "u19_l9_1",
        "type": "listen",
        "prompt": "意欲の確認",
        "furigana": "いよくのかくにん",
        "romaji": "iyoku no kakunin",
        "english": "Confirming Enthusiasm / will to achieve",
        "audioText": "いよくのかくにん",
        "options": [
          "Confirming Enthusiasm / will to achieve",
          "Recruitment / hiring",
          "Weakness / shortcoming",
          "Self-promotion"
        ],
        "correctAnswer": "Confirming Enthusiasm / will to achieve"
      },
      {
        "id": "u19_l9_2",
        "type": "spell",
        "prompt": "意欲の確認",
        "furigana": "いよくのかくにん",
        "romaji": "iyoku no kakunin",
        "english": "Build 'Confirming Enthusiasm / will to achieve'",
        "audioText": "いよくのかくにん",
        "tileBank": [
          "く",
          "の",
          "よ",
          "ん",
          "に",
          "く",
          "い",
          "か"
        ],
        "correctAnswer": "いよくのかくにん"
      },
      {
        "id": "u19_l11_1",
        "type": "listen",
        "prompt": "面接の確認",
        "furigana": "めんせつのかくにん",
        "romaji": "mensetsu no kakunin",
        "english": "Confirming Job interview",
        "audioText": "めんせつのかくにん",
        "options": [
          "Joining a company",
          "Confirming Strength / strong point",
          "Confirming Contribution",
          "Confirming Job interview"
        ],
        "correctAnswer": "Confirming Job interview"
      },
      {
        "id": "u19_l11_2",
        "type": "spell",
        "prompt": "面接の確認",
        "furigana": "めんせつのかくにん",
        "romaji": "mensetsu no kakunin",
        "english": "Build 'Confirming Job interview'",
        "audioText": "めんせつのかくにん",
        "tileBank": [
          "の",
          "せ",
          "つ",
          "め",
          "か",
          "に",
          "ん",
          "く"
        ],
        "correctAnswer": "めんせつのかくにん"
      }
    ]
  }
};
