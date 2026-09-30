import type { DojoUnit } from "../../models/dojo.model";

export const unit26: DojoUnit = {
  "id": "unit_26",
  "unitNumber": 26,
  "title": "Formal Speeches & Official Ceremonies",
  "titleJp": "式典のスピーチと挨拶",
  "description": "Deliver congratulations, formal farewell addresses, wedding salutations, and official banquets in high register.",
  "icon": "🎙️",
  "themeColor": "#1E3A8A",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u26_l1",
      "unitId": "unit_26",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Respectfully / humbly & Heartfelt congratulations",
      "titleJp": "謹んで・お慶び",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "謹んで",
        "お慶び",
        "栄誉"
      ],
      "kanjiKeywords": [
        "謹",
        "慶",
        "栄",
        "誉"
      ],
      "items": [
        {
          "id": "u26_l1_1",
          "type": "listen",
          "prompt": "謹んで",
          "furigana": "つつしんで",
          "romaji": "tsutsushinde",
          "english": "Respectfully / humbly",
          "audioText": "つつしんで",
          "options": [
            "Attentive listening (audience)",
            "Confirming Honor / privilege",
            "Respectfully / humbly",
            "Closing / conclusion of a speech"
          ],
          "correctAnswer": "Respectfully / humbly"
        },
        {
          "id": "u26_l1_2",
          "type": "spell",
          "prompt": "謹んで",
          "furigana": "つつしんで",
          "romaji": "tsutsushinde",
          "english": "Build 'Respectfully / humbly'",
          "audioText": "つつしんで",
          "tileBank": [
            "む",
            "つ",
            "つ",
            "し",
            "よ",
            "で",
            "ん",
            "け"
          ],
          "correctAnswer": "つつしんで"
        },
        {
          "id": "u26_l1_3",
          "type": "cloze",
          "prompt": "私はお慶びがすきです",
          "furigana": "わたしはおよろこびがすきです",
          "romaji": "Watashi wa oyorokobi ga suki desu.",
          "english": "Fill in the blank with the correct particle for Heartfelt congratulations.",
          "audioText": "お慶び",
          "clozeSentence": "これはお慶び {{BLANK}} す。",
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
          "id": "u26_l1_4",
          "type": "scramble",
          "prompt": "これはお慶びです",
          "furigana": "これはおよろこびです",
          "romaji": "Kore wa oyorokobi desu.",
          "english": "This is Heartfelt congratulations.",
          "audioText": "これはお慶びです",
          "scrambleTokens": [
            "です",
            "それ",
            "ではありません",
            "これは",
            "お慶び"
          ],
          "scrambleSolution": [
            "これは",
            "お慶び",
            "です"
          ],
          "correctAnswer": "これはお慶びです"
        },
        {
          "id": "u26_l1_5",
          "type": "speak",
          "prompt": "栄誉",
          "furigana": "えいよ",
          "romaji": "eiyo",
          "english": "Pronounce: Honor / prestige",
          "audioText": "えいよ",
          "targetSpeech": "栄誉",
          "options": [
            "Honor / prestige",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "栄誉"
        },
        {
          "id": "u26_l1_6",
          "type": "dictate",
          "prompt": "栄誉をお願いします",
          "furigana": "えいよをおねがいします",
          "romaji": "eiyo o onegaishimasu.",
          "english": "Honor / prestige, please.",
          "audioText": "栄誉をお願いします",
          "dictateTokens": [
            "です",
            "栄誉",
            "ありがとう",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "栄誉",
            "を",
            "お願いします"
          ],
          "correctAnswer": "栄誉をお願いします"
        },
        {
          "id": "u26_l1_7",
          "type": "match",
          "prompt": "謹んで・お慶び・栄誉・光栄",
          "furigana": "つつしんで・およろこび・えいよ・こうえい",
          "romaji": "tsutsushinde, oyorokobi, eiyo, kouei",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "つつしんで",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "謹んで",
              "right": "Respectfully / humbly",
              "furigana": "つつしんで",
              "romaji": "tsutsushinde"
            },
            {
              "id": "p_1",
              "left": "お慶び",
              "right": "Heartfelt congratulations",
              "furigana": "およろこび",
              "romaji": "oyorokobi"
            },
            {
              "id": "p_2",
              "left": "栄誉",
              "right": "Honor / prestige",
              "furigana": "えいよ",
              "romaji": "eiyo"
            },
            {
              "id": "p_3",
              "left": "光栄",
              "right": "Honor / privilege",
              "furigana": "こうえい",
              "romaji": "kouei"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l1_8",
          "type": "dialogue",
          "prompt": "謹んでについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "謹んでについて教えていただけますか？",
          "furigana": "謹んでについて教えていただけますか？",
          "romaji": "tsutsushinde ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Respectfully / humbly?",
          "audioText": "謹んでについて教えていただけますか？",
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
      "id": "u26_l2",
      "unitId": "unit_26",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Honor / privilege & Ceremony / official celebration",
      "titleJp": "光栄・式典",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "光栄",
        "式典",
        "祝辞"
      ],
      "kanjiKeywords": [
        "光",
        "栄",
        "式",
        "典",
        "祝",
        "辞"
      ],
      "items": [
        {
          "id": "u26_l2_1",
          "type": "listen",
          "prompt": "光栄",
          "furigana": "こうえい",
          "romaji": "kouei",
          "english": "Honor / privilege",
          "audioText": "こうえい",
          "options": [
            "Respectfully / humbly",
            "Honor / privilege",
            "Good health (formal epistolary)",
            "Confirming Good health (formal epistolary)"
          ],
          "correctAnswer": "Honor / privilege"
        },
        {
          "id": "u26_l2_2",
          "type": "spell",
          "prompt": "光栄",
          "furigana": "こうえい",
          "romaji": "kouei",
          "english": "Build 'Honor / privilege'",
          "audioText": "こうえい",
          "tileBank": [
            "き",
            "な",
            "し",
            "こ",
            "う",
            "を",
            "え",
            "い"
          ],
          "correctAnswer": "こうえい"
        },
        {
          "id": "u26_l2_3",
          "type": "cloze",
          "prompt": "私は式典がすきです",
          "furigana": "わたしはしきてんがすきです",
          "romaji": "Watashi wa shikiten ga suki desu.",
          "english": "Fill in the blank with the correct particle for Ceremony / official celebration.",
          "audioText": "式典",
          "clozeSentence": "これは式典 {{BLANK}} す。",
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
          "id": "u26_l2_4",
          "type": "scramble",
          "prompt": "これは式典です",
          "furigana": "これはしきてんです",
          "romaji": "Kore wa shikiten desu.",
          "english": "This is Ceremony / official celebration.",
          "audioText": "これは式典です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "それ",
            "式典",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "式典",
            "です"
          ],
          "correctAnswer": "これは式典です"
        },
        {
          "id": "u26_l2_5",
          "type": "speak",
          "prompt": "祝辞",
          "furigana": "しゅくじ",
          "romaji": "shukuji",
          "english": "Pronounce: Congratulatory address",
          "audioText": "しゅくじ",
          "targetSpeech": "祝辞",
          "options": [
            "Congratulatory address",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "祝辞"
        },
        {
          "id": "u26_l2_6",
          "type": "dictate",
          "prompt": "祝辞をお願いします",
          "furigana": "しゅくじをおねがいします",
          "romaji": "shukuji o onegaishimasu.",
          "english": "Congratulatory address, please.",
          "audioText": "祝辞をお願いします",
          "dictateTokens": [
            "お願いします",
            "祝辞",
            "です",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "祝辞",
            "を",
            "お願いします"
          ],
          "correctAnswer": "祝辞をお願いします"
        },
        {
          "id": "u26_l2_7",
          "type": "match",
          "prompt": "光栄・式典・祝辞・感謝の辞",
          "furigana": "こうえい・しきてん・しゅくじ・かんしゃのじ",
          "romaji": "kouei, shikiten, shukuji, kansha no ji",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "こうえい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "光栄",
              "right": "Honor / privilege",
              "furigana": "こうえい",
              "romaji": "kouei"
            },
            {
              "id": "p_1",
              "left": "式典",
              "right": "Ceremony / official celebration",
              "furigana": "しきてん",
              "romaji": "shikiten"
            },
            {
              "id": "p_2",
              "left": "祝辞",
              "right": "Congratulatory address",
              "furigana": "しゅくじ",
              "romaji": "shukuji"
            },
            {
              "id": "p_3",
              "left": "感謝の辞",
              "right": "Words of thanks / appreciation",
              "furigana": "かんしゃのじ",
              "romaji": "kansha no ji"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l2_8",
          "type": "dialogue",
          "prompt": "お慶びの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "お慶びの準備はできていますか？",
          "furigana": "お慶びの準備はできていますか？",
          "romaji": "oyorokobi no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Heartfelt congratulations ready?",
          "audioText": "お慶びの準備はできていますか？",
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
      "id": "u26_l3",
      "unitId": "unit_26",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Words of thanks / appreciation & Extremely / exceedingly (formal)",
      "titleJp": "感謝の辞・甚だ",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "感謝の辞",
        "甚だ",
        "恐縮"
      ],
      "kanjiKeywords": [
        "感",
        "謝",
        "辞",
        "甚",
        "恐",
        "縮"
      ],
      "items": [
        {
          "id": "u26_l3_1",
          "type": "listen",
          "prompt": "感謝の辞",
          "furigana": "かんしゃのじ",
          "romaji": "kansha no ji",
          "english": "Words of thanks / appreciation",
          "audioText": "かんしゃのじ",
          "options": [
            "Confirming Closing / conclusion of a speech",
            "Words of thanks / appreciation",
            "Extremely obliged / apologetic",
            "Closing / conclusion of a speech"
          ],
          "correctAnswer": "Words of thanks / appreciation"
        },
        {
          "id": "u26_l3_2",
          "type": "spell",
          "prompt": "感謝の辞",
          "furigana": "かんしゃのじ",
          "romaji": "kansha no ji",
          "english": "Build 'Words of thanks / appreciation'",
          "audioText": "かんしゃのじ",
          "tileBank": [
            "か",
            "さ",
            "し",
            "じ",
            "な",
            "ん",
            "ゃ",
            "の"
          ],
          "correctAnswer": "かんしゃのじ"
        },
        {
          "id": "u26_l3_3",
          "type": "cloze",
          "prompt": "私は甚だがすきです",
          "furigana": "わたしははなはだがすきです",
          "romaji": "Watashi wa hanahada ga suki desu.",
          "english": "Fill in the blank with the correct particle for Extremely / exceedingly (formal).",
          "audioText": "甚だ",
          "clozeSentence": "これは甚だ {{BLANK}} す。",
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
          "id": "u26_l3_4",
          "type": "scramble",
          "prompt": "これは甚だです",
          "furigana": "これははなはだです",
          "romaji": "Kore wa hanahada desu.",
          "english": "This is Extremely / exceedingly (formal).",
          "audioText": "これは甚だです",
          "scrambleTokens": [
            "それ",
            "これは",
            "です",
            "ではありません",
            "甚だ"
          ],
          "scrambleSolution": [
            "これは",
            "甚だ",
            "です"
          ],
          "correctAnswer": "これは甚だです"
        },
        {
          "id": "u26_l3_5",
          "type": "speak",
          "prompt": "恐縮",
          "furigana": "きょうしゅく",
          "romaji": "kyoushuku",
          "english": "Pronounce: Extremely obliged / apologetic",
          "audioText": "きょうしゅく",
          "targetSpeech": "恐縮",
          "options": [
            "Extremely obliged / apologetic",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "恐縮"
        },
        {
          "id": "u26_l3_6",
          "type": "dictate",
          "prompt": "恐縮をお願いします",
          "furigana": "きょうしゅくをおねがいします",
          "romaji": "kyoushuku o onegaishimasu.",
          "english": "Extremely obliged / apologetic, please.",
          "audioText": "恐縮をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "お願いします",
            "恐縮",
            "ありがとう"
          ],
          "dictateSolution": [
            "恐縮",
            "を",
            "お願いします"
          ],
          "correctAnswer": "恐縮をお願いします"
        },
        {
          "id": "u26_l3_7",
          "type": "match",
          "prompt": "感謝の辞・甚だ・恐縮・健勝",
          "furigana": "かんしゃのじ・はなはだ・きょうしゅく・けんしょう",
          "romaji": "kansha no ji, hanahada, kyoushuku, kenshou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かんしゃのじ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "感謝の辞",
              "right": "Words of thanks / appreciation",
              "furigana": "かんしゃのじ",
              "romaji": "kansha no ji"
            },
            {
              "id": "p_1",
              "left": "甚だ",
              "right": "Extremely / exceedingly (formal)",
              "furigana": "はなはだ",
              "romaji": "hanahada"
            },
            {
              "id": "p_2",
              "left": "恐縮",
              "right": "Extremely obliged / apologetic",
              "furigana": "きょうしゅく",
              "romaji": "kyoushuku"
            },
            {
              "id": "p_3",
              "left": "健勝",
              "right": "Good health (formal epistolary)",
              "furigana": "けんしょう",
              "romaji": "kenshou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l3_8",
          "type": "dialogue",
          "prompt": "栄誉についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "栄誉についてどう思われますか？",
          "furigana": "栄誉についてどう思われますか？",
          "romaji": "eiyo ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Honor / prestige?",
          "audioText": "栄誉についてどう思われますか？",
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
      "id": "u26_l4",
      "unitId": "unit_26",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Good health (formal epistolary) & Prosperity / advancement",
      "titleJp": "健勝・発展",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "健勝",
        "発展",
        "祈念"
      ],
      "kanjiKeywords": [
        "健",
        "勝",
        "発",
        "展",
        "祈",
        "念"
      ],
      "items": [
        {
          "id": "u26_l4_1",
          "type": "listen",
          "prompt": "健勝",
          "furigana": "けんしょう",
          "romaji": "kenshou",
          "english": "Good health (formal epistolary)",
          "audioText": "けんしょう",
          "options": [
            "Confirming Words of thanks / appreciation",
            "Good health (formal epistolary)",
            "Confirming Heartfelt congratulations",
            "Confirming Respectfully / humbly"
          ],
          "correctAnswer": "Good health (formal epistolary)"
        },
        {
          "id": "u26_l4_2",
          "type": "spell",
          "prompt": "健勝",
          "furigana": "けんしょう",
          "romaji": "kenshou",
          "english": "Build 'Good health (formal epistolary)'",
          "audioText": "けんしょう",
          "tileBank": [
            "う",
            "む",
            "ょ",
            "け",
            "し",
            "ふ",
            "ん",
            "す"
          ],
          "correctAnswer": "けんしょう"
        },
        {
          "id": "u26_l4_3",
          "type": "cloze",
          "prompt": "私は発展がすきです",
          "furigana": "わたしははってんがすきです",
          "romaji": "Watashi wa hatten ga suki desu.",
          "english": "Fill in the blank with the correct particle for Prosperity / advancement.",
          "audioText": "発展",
          "clozeSentence": "これは発展 {{BLANK}} す。",
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
          "id": "u26_l4_4",
          "type": "scramble",
          "prompt": "これは発展です",
          "furigana": "これははってんです",
          "romaji": "Kore wa hatten desu.",
          "english": "This is Prosperity / advancement.",
          "audioText": "これは発展です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "これは",
            "発展",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "発展",
            "です"
          ],
          "correctAnswer": "これは発展です"
        },
        {
          "id": "u26_l4_5",
          "type": "speak",
          "prompt": "祈念",
          "furigana": "きねん",
          "romaji": "kinen",
          "english": "Pronounce: Praying / wishing for",
          "audioText": "きねん",
          "targetSpeech": "祈念",
          "options": [
            "Praying / wishing for",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "祈念"
        },
        {
          "id": "u26_l4_6",
          "type": "dictate",
          "prompt": "祈念をお願いします",
          "furigana": "きねんをおねがいします",
          "romaji": "kinen o onegaishimasu.",
          "english": "Praying / wishing for, please.",
          "audioText": "祈念をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "祈念",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "祈念",
            "を",
            "お願いします"
          ],
          "correctAnswer": "祈念をお願いします"
        },
        {
          "id": "u26_l4_7",
          "type": "match",
          "prompt": "健勝・発展・祈念・ご清聴",
          "furigana": "けんしょう・はってん・きねん・ごせいちょう",
          "romaji": "kenshou, hatten, kinen, goseichou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "けんしょう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "健勝",
              "right": "Good health (formal epistolary)",
              "furigana": "けんしょう",
              "romaji": "kenshou"
            },
            {
              "id": "p_1",
              "left": "発展",
              "right": "Prosperity / advancement",
              "furigana": "はってん",
              "romaji": "hatten"
            },
            {
              "id": "p_2",
              "left": "祈念",
              "right": "Praying / wishing for",
              "furigana": "きねん",
              "romaji": "kinen"
            },
            {
              "id": "p_3",
              "left": "ご清聴",
              "right": "Attentive listening (audience)",
              "furigana": "ごせいちょう",
              "romaji": "goseichou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l4_8",
          "type": "dialogue",
          "prompt": "次は光栄に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は光栄に進みましょう。",
          "furigana": "次は光栄に進みましょう。",
          "romaji": "Tsugi wa kouei ni susumimashou.",
          "english": "Speaker: Let's proceed to Honor / privilege next.",
          "audioText": "次は光栄に進みましょう。",
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
      "id": "u26_l5",
      "unitId": "unit_26",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Attentive listening (audience) & Proposing the official toast",
      "titleJp": "ご清聴・乾杯の音頭",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "ご清聴",
        "乾杯の音頭",
        "結び"
      ],
      "kanjiKeywords": [
        "清",
        "聴",
        "乾",
        "杯",
        "音",
        "頭",
        "結"
      ],
      "items": [
        {
          "id": "u26_l5_1",
          "type": "listen",
          "prompt": "ご清聴",
          "furigana": "ごせいちょう",
          "romaji": "goseichou",
          "english": "Attentive listening (audience)",
          "audioText": "ごせいちょう",
          "options": [
            "Praying / wishing for",
            "Extremely / exceedingly (formal)",
            "Confirming Honor / privilege",
            "Attentive listening (audience)"
          ],
          "correctAnswer": "Attentive listening (audience)"
        },
        {
          "id": "u26_l5_2",
          "type": "spell",
          "prompt": "ご清聴",
          "furigana": "ごせいちょう",
          "romaji": "goseichou",
          "english": "Build 'Attentive listening (audience)'",
          "audioText": "ごせいちょう",
          "tileBank": [
            "い",
            "と",
            "ご",
            "せ",
            "ち",
            "う",
            "ょ",
            "ろ"
          ],
          "correctAnswer": "ごせいちょう"
        },
        {
          "id": "u26_l5_3",
          "type": "cloze",
          "prompt": "私は乾杯の音頭がすきです",
          "furigana": "わたしはかんぱいのおんどがすきです",
          "romaji": "Watashi wa kanpai no ondo ga suki desu.",
          "english": "Fill in the blank with the correct particle for Proposing the official toast.",
          "audioText": "乾杯の音頭",
          "clozeSentence": "これは乾杯の音頭 {{BLANK}} す。",
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
          "id": "u26_l5_4",
          "type": "scramble",
          "prompt": "これは乾杯の音頭です",
          "furigana": "これはかんぱいのおんどです",
          "romaji": "Kore wa kanpai no ondo desu.",
          "english": "This is Proposing the official toast.",
          "audioText": "これは乾杯の音頭です",
          "scrambleTokens": [
            "です",
            "乾杯の音頭",
            "これは",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "乾杯の音頭",
            "です"
          ],
          "correctAnswer": "これは乾杯の音頭です"
        },
        {
          "id": "u26_l5_5",
          "type": "speak",
          "prompt": "結び",
          "furigana": "むすび",
          "romaji": "musubi",
          "english": "Pronounce: Closing / conclusion of a speech",
          "audioText": "むすび",
          "targetSpeech": "結び",
          "options": [
            "Closing / conclusion of a speech",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "結び"
        },
        {
          "id": "u26_l5_6",
          "type": "dictate",
          "prompt": "結びをお願いします",
          "furigana": "むすびをおねがいします",
          "romaji": "musubi o onegaishimasu.",
          "english": "Closing / conclusion of a speech, please.",
          "audioText": "結びをお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "結び",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "結び",
            "を",
            "お願いします"
          ],
          "correctAnswer": "結びをお願いします"
        },
        {
          "id": "u26_l5_7",
          "type": "match",
          "prompt": "ご清聴・乾杯の音頭・結び・謹んでの確認",
          "furigana": "ごせいちょう・かんぱいのおんど・むすび・つつしんでのかくにん",
          "romaji": "goseichou, kanpai no ondo, musubi, tsutsushinde no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ごせいちょう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "ご清聴",
              "right": "Attentive listening (audience)",
              "furigana": "ごせいちょう",
              "romaji": "goseichou"
            },
            {
              "id": "p_1",
              "left": "乾杯の音頭",
              "right": "Proposing the official toast",
              "furigana": "かんぱいのおんど",
              "romaji": "kanpai no ondo"
            },
            {
              "id": "p_2",
              "left": "結び",
              "right": "Closing / conclusion of a speech",
              "furigana": "むすび",
              "romaji": "musubi"
            },
            {
              "id": "p_3",
              "left": "謹んでの確認",
              "right": "Confirming Respectfully / humbly",
              "furigana": "つつしんでのかくにん",
              "romaji": "tsutsushinde no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l5_8",
          "type": "dialogue",
          "prompt": "謹んでについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "謹んでについて教えていただけますか？",
          "furigana": "謹んでについて教えていただけますか？",
          "romaji": "tsutsushinde ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Respectfully / humbly?",
          "audioText": "謹んでについて教えていただけますか？",
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
      "id": "u26_l6",
      "unitId": "unit_26",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Respectfully / humbly & Confirming Heartfelt congratulations",
      "titleJp": "謹んでの確認・お慶びの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "謹んでの確認",
        "お慶びの確認",
        "栄誉の確認"
      ],
      "kanjiKeywords": [
        "謹",
        "確",
        "認",
        "慶",
        "確",
        "認",
        "栄",
        "誉",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u26_l6_1",
          "type": "listen",
          "prompt": "謹んでの確認",
          "furigana": "つつしんでのかくにん",
          "romaji": "tsutsushinde no kakunin",
          "english": "Confirming Respectfully / humbly",
          "audioText": "つつしんでのかくにん",
          "options": [
            "Extremely / exceedingly (formal)",
            "Heartfelt congratulations",
            "Confirming Praying / wishing for",
            "Confirming Respectfully / humbly"
          ],
          "correctAnswer": "Confirming Respectfully / humbly"
        },
        {
          "id": "u26_l6_2",
          "type": "spell",
          "prompt": "謹んでの確認",
          "furigana": "つつしんでのかくにん",
          "romaji": "tsutsushinde no kakunin",
          "english": "Build 'Confirming Respectfully / humbly'",
          "audioText": "つつしんでのかくにん",
          "tileBank": [
            "ん",
            "く",
            "か",
            "つ",
            "つ",
            "の",
            "し",
            "で"
          ],
          "correctAnswer": "つつしんでのかくにん"
        },
        {
          "id": "u26_l6_3",
          "type": "cloze",
          "prompt": "私はお慶びの確認がすきです",
          "furigana": "わたしはおよろこびのかくにんがすきです",
          "romaji": "Watashi wa oyorokobi no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Heartfelt congratulations.",
          "audioText": "お慶びの確認",
          "clozeSentence": "これはお慶びの確認 {{BLANK}} す。",
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
          "id": "u26_l6_4",
          "type": "scramble",
          "prompt": "これはお慶びの確認です",
          "furigana": "これはおよろこびのかくにんです",
          "romaji": "Kore wa oyorokobi no kakunin desu.",
          "english": "This is Confirming Heartfelt congratulations.",
          "audioText": "これはお慶びの確認です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "お慶びの確認",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "お慶びの確認",
            "です"
          ],
          "correctAnswer": "これはお慶びの確認です"
        },
        {
          "id": "u26_l6_5",
          "type": "speak",
          "prompt": "栄誉の確認",
          "furigana": "えいよのかくにん",
          "romaji": "eiyo no kakunin",
          "english": "Pronounce: Confirming Honor / prestige",
          "audioText": "えいよのかくにん",
          "targetSpeech": "栄誉の確認",
          "options": [
            "Confirming Honor / prestige",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "栄誉の確認"
        },
        {
          "id": "u26_l6_6",
          "type": "dictate",
          "prompt": "栄誉の確認をお願いします",
          "furigana": "えいよのかくにんをおねがいします",
          "romaji": "eiyo no kakunin o onegaishimasu.",
          "english": "Confirming Honor / prestige, please.",
          "audioText": "栄誉の確認をお願いします",
          "dictateTokens": [
            "栄誉の確認",
            "です",
            "ありがとう",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "栄誉の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "栄誉の確認をお願いします"
        },
        {
          "id": "u26_l6_7",
          "type": "match",
          "prompt": "謹んでの確認・お慶びの確認・栄誉の確認・光栄の確認",
          "furigana": "つつしんでのかくにん・およろこびのかくにん・えいよのかくにん・こうえいのかくにん",
          "romaji": "tsutsushinde no kakunin, oyorokobi no kakunin, eiyo no kakunin, kouei no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "つつしんでのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "謹んでの確認",
              "right": "Confirming Respectfully / humbly",
              "furigana": "つつしんでのかくにん",
              "romaji": "tsutsushinde no kakunin"
            },
            {
              "id": "p_1",
              "left": "お慶びの確認",
              "right": "Confirming Heartfelt congratulations",
              "furigana": "およろこびのかくにん",
              "romaji": "oyorokobi no kakunin"
            },
            {
              "id": "p_2",
              "left": "栄誉の確認",
              "right": "Confirming Honor / prestige",
              "furigana": "えいよのかくにん",
              "romaji": "eiyo no kakunin"
            },
            {
              "id": "p_3",
              "left": "光栄の確認",
              "right": "Confirming Honor / privilege",
              "furigana": "こうえいのかくにん",
              "romaji": "kouei no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l6_8",
          "type": "dialogue",
          "prompt": "お慶びの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "お慶びの準備はできていますか？",
          "furigana": "お慶びの準備はできていますか？",
          "romaji": "oyorokobi no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Heartfelt congratulations ready?",
          "audioText": "お慶びの準備はできていますか？",
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
      "id": "u26_l7",
      "unitId": "unit_26",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Honor / privilege & Confirming Ceremony / official celebration",
      "titleJp": "光栄の確認・式典の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "光栄の確認",
        "式典の確認",
        "祝辞の確認"
      ],
      "kanjiKeywords": [
        "光",
        "栄",
        "確",
        "認",
        "式",
        "典",
        "確",
        "認",
        "祝",
        "辞",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u26_l7_1",
          "type": "listen",
          "prompt": "光栄の確認",
          "furigana": "こうえいのかくにん",
          "romaji": "kouei no kakunin",
          "english": "Confirming Honor / privilege",
          "audioText": "こうえいのかくにん",
          "options": [
            "Confirming Proposing the official toast",
            "Confirming Good health (formal epistolary)",
            "Confirming Ceremony / official celebration",
            "Confirming Honor / privilege"
          ],
          "correctAnswer": "Confirming Honor / privilege"
        },
        {
          "id": "u26_l7_2",
          "type": "spell",
          "prompt": "光栄の確認",
          "furigana": "こうえいのかくにん",
          "romaji": "kouei no kakunin",
          "english": "Build 'Confirming Honor / privilege'",
          "audioText": "こうえいのかくにん",
          "tileBank": [
            "の",
            "に",
            "い",
            "う",
            "こ",
            "く",
            "え",
            "か"
          ],
          "correctAnswer": "こうえいのかくにん"
        },
        {
          "id": "u26_l7_3",
          "type": "cloze",
          "prompt": "私は式典の確認がすきです",
          "furigana": "わたしはしきてんのかくにんがすきです",
          "romaji": "Watashi wa shikiten no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Ceremony / official celebration.",
          "audioText": "式典の確認",
          "clozeSentence": "これは式典の確認 {{BLANK}} す。",
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
          "id": "u26_l7_4",
          "type": "scramble",
          "prompt": "これは式典の確認です",
          "furigana": "これはしきてんのかくにんです",
          "romaji": "Kore wa shikiten no kakunin desu.",
          "english": "This is Confirming Ceremony / official celebration.",
          "audioText": "これは式典の確認です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "これは",
            "それ",
            "式典の確認"
          ],
          "scrambleSolution": [
            "これは",
            "式典の確認",
            "です"
          ],
          "correctAnswer": "これは式典の確認です"
        },
        {
          "id": "u26_l7_5",
          "type": "speak",
          "prompt": "祝辞の確認",
          "furigana": "しゅくじのかくにん",
          "romaji": "shukuji no kakunin",
          "english": "Pronounce: Confirming Congratulatory address",
          "audioText": "しゅくじのかくにん",
          "targetSpeech": "祝辞の確認",
          "options": [
            "Confirming Congratulatory address",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "祝辞の確認"
        },
        {
          "id": "u26_l7_6",
          "type": "dictate",
          "prompt": "祝辞の確認をお願いします",
          "furigana": "しゅくじのかくにんをおねがいします",
          "romaji": "shukuji no kakunin o onegaishimasu.",
          "english": "Confirming Congratulatory address, please.",
          "audioText": "祝辞の確認をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "を",
            "祝辞の確認",
            "ありがとう"
          ],
          "dictateSolution": [
            "祝辞の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "祝辞の確認をお願いします"
        },
        {
          "id": "u26_l7_7",
          "type": "match",
          "prompt": "光栄の確認・式典の確認・祝辞の確認・感謝の辞の確認",
          "furigana": "こうえいのかくにん・しきてんのかくにん・しゅくじのかくにん・かんしゃのじのかくにん",
          "romaji": "kouei no kakunin, shikiten no kakunin, shukuji no kakunin, kansha no ji no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "こうえいのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "光栄の確認",
              "right": "Confirming Honor / privilege",
              "furigana": "こうえいのかくにん",
              "romaji": "kouei no kakunin"
            },
            {
              "id": "p_1",
              "left": "式典の確認",
              "right": "Confirming Ceremony / official celebration",
              "furigana": "しきてんのかくにん",
              "romaji": "shikiten no kakunin"
            },
            {
              "id": "p_2",
              "left": "祝辞の確認",
              "right": "Confirming Congratulatory address",
              "furigana": "しゅくじのかくにん",
              "romaji": "shukuji no kakunin"
            },
            {
              "id": "p_3",
              "left": "感謝の辞の確認",
              "right": "Confirming Words of thanks / appreciation",
              "furigana": "かんしゃのじのかくにん",
              "romaji": "kansha no ji no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l7_8",
          "type": "dialogue",
          "prompt": "栄誉についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "栄誉についてどう思われますか？",
          "furigana": "栄誉についてどう思われますか？",
          "romaji": "eiyo ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Honor / prestige?",
          "audioText": "栄誉についてどう思われますか？",
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
      "id": "u26_l8",
      "unitId": "unit_26",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Words of thanks / appreciation & Confirming Extremely / exceedingly (formal)",
      "titleJp": "感謝の辞の確認・甚だの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "感謝の辞の確認",
        "甚だの確認",
        "恐縮の確認"
      ],
      "kanjiKeywords": [
        "感",
        "謝",
        "辞",
        "確",
        "認",
        "甚",
        "確",
        "認",
        "恐",
        "縮",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u26_l8_1",
          "type": "listen",
          "prompt": "感謝の辞の確認",
          "furigana": "かんしゃのじのかくにん",
          "romaji": "kansha no ji no kakunin",
          "english": "Confirming Words of thanks / appreciation",
          "audioText": "かんしゃのじのかくにん",
          "options": [
            "Confirming Congratulatory address",
            "Confirming Ceremony / official celebration",
            "Confirming Good health (formal epistolary)",
            "Confirming Words of thanks / appreciation"
          ],
          "correctAnswer": "Confirming Words of thanks / appreciation"
        },
        {
          "id": "u26_l8_2",
          "type": "spell",
          "prompt": "感謝の辞の確認",
          "furigana": "かんしゃのじのかくにん",
          "romaji": "kansha no ji no kakunin",
          "english": "Build 'Confirming Words of thanks / appreciation'",
          "audioText": "かんしゃのじのかくにん",
          "tileBank": [
            "し",
            "か",
            "の",
            "の",
            "ゃ",
            "じ",
            "か",
            "ん"
          ],
          "correctAnswer": "かんしゃのじのかくにん"
        },
        {
          "id": "u26_l8_3",
          "type": "cloze",
          "prompt": "私は甚だの確認がすきです",
          "furigana": "わたしははなはだのかくにんがすきです",
          "romaji": "Watashi wa hanahada no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Extremely / exceedingly (formal).",
          "audioText": "甚だの確認",
          "clozeSentence": "これは甚だの確認 {{BLANK}} す。",
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
          "id": "u26_l8_4",
          "type": "scramble",
          "prompt": "これは甚だの確認です",
          "furigana": "これははなはだのかくにんです",
          "romaji": "Kore wa hanahada no kakunin desu.",
          "english": "This is Confirming Extremely / exceedingly (formal).",
          "audioText": "これは甚だの確認です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "甚だの確認",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "甚だの確認",
            "です"
          ],
          "correctAnswer": "これは甚だの確認です"
        },
        {
          "id": "u26_l8_5",
          "type": "speak",
          "prompt": "恐縮の確認",
          "furigana": "きょうしゅくのかくにん",
          "romaji": "kyoushuku no kakunin",
          "english": "Pronounce: Confirming Extremely obliged / apologetic",
          "audioText": "きょうしゅくのかくにん",
          "targetSpeech": "恐縮の確認",
          "options": [
            "Confirming Extremely obliged / apologetic",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "恐縮の確認"
        },
        {
          "id": "u26_l8_6",
          "type": "dictate",
          "prompt": "恐縮の確認をお願いします",
          "furigana": "きょうしゅくのかくにんをおねがいします",
          "romaji": "kyoushuku no kakunin o onegaishimasu.",
          "english": "Confirming Extremely obliged / apologetic, please.",
          "audioText": "恐縮の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "恐縮の確認",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "恐縮の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "恐縮の確認をお願いします"
        },
        {
          "id": "u26_l8_7",
          "type": "match",
          "prompt": "感謝の辞の確認・甚だの確認・恐縮の確認・健勝の確認",
          "furigana": "かんしゃのじのかくにん・はなはだのかくにん・きょうしゅくのかくにん・けんしょうのかくにん",
          "romaji": "kansha no ji no kakunin, hanahada no kakunin, kyoushuku no kakunin, kenshou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かんしゃのじのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "感謝の辞の確認",
              "right": "Confirming Words of thanks / appreciation",
              "furigana": "かんしゃのじのかくにん",
              "romaji": "kansha no ji no kakunin"
            },
            {
              "id": "p_1",
              "left": "甚だの確認",
              "right": "Confirming Extremely / exceedingly (formal)",
              "furigana": "はなはだのかくにん",
              "romaji": "hanahada no kakunin"
            },
            {
              "id": "p_2",
              "left": "恐縮の確認",
              "right": "Confirming Extremely obliged / apologetic",
              "furigana": "きょうしゅくのかくにん",
              "romaji": "kyoushuku no kakunin"
            },
            {
              "id": "p_3",
              "left": "健勝の確認",
              "right": "Confirming Good health (formal epistolary)",
              "furigana": "けんしょうのかくにん",
              "romaji": "kenshou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l8_8",
          "type": "dialogue",
          "prompt": "次は光栄に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は光栄に進みましょう。",
          "furigana": "次は光栄に進みましょう。",
          "romaji": "Tsugi wa kouei ni susumimashou.",
          "english": "Speaker: Let's proceed to Honor / privilege next.",
          "audioText": "次は光栄に進みましょう。",
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
      "id": "u26_l9",
      "unitId": "unit_26",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Good health (formal epistolary) & Confirming Prosperity / advancement",
      "titleJp": "健勝の確認・発展の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "健勝の確認",
        "発展の確認",
        "祈念の確認"
      ],
      "kanjiKeywords": [
        "健",
        "勝",
        "確",
        "認",
        "発",
        "展",
        "確",
        "認",
        "祈",
        "念",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u26_l9_1",
          "type": "listen",
          "prompt": "健勝の確認",
          "furigana": "けんしょうのかくにん",
          "romaji": "kenshou no kakunin",
          "english": "Confirming Good health (formal epistolary)",
          "audioText": "けんしょうのかくにん",
          "options": [
            "Confirming Words of thanks / appreciation",
            "Confirming Heartfelt congratulations",
            "Confirming Good health (formal epistolary)",
            "Good health (formal epistolary)"
          ],
          "correctAnswer": "Confirming Good health (formal epistolary)"
        },
        {
          "id": "u26_l9_2",
          "type": "spell",
          "prompt": "健勝の確認",
          "furigana": "けんしょうのかくにん",
          "romaji": "kenshou no kakunin",
          "english": "Build 'Confirming Good health (formal epistolary)'",
          "audioText": "けんしょうのかくにん",
          "tileBank": [
            "し",
            "く",
            "う",
            "か",
            "ょ",
            "け",
            "の",
            "ん"
          ],
          "correctAnswer": "けんしょうのかくにん"
        },
        {
          "id": "u26_l9_3",
          "type": "cloze",
          "prompt": "私は発展の確認がすきです",
          "furigana": "わたしははってんのかくにんがすきです",
          "romaji": "Watashi wa hatten no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Prosperity / advancement.",
          "audioText": "発展の確認",
          "clozeSentence": "これは発展の確認 {{BLANK}} す。",
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
          "id": "u26_l9_4",
          "type": "scramble",
          "prompt": "これは発展の確認です",
          "furigana": "これははってんのかくにんです",
          "romaji": "Kore wa hatten no kakunin desu.",
          "english": "This is Confirming Prosperity / advancement.",
          "audioText": "これは発展の確認です",
          "scrambleTokens": [
            "発展の確認",
            "ではありません",
            "それ",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "発展の確認",
            "です"
          ],
          "correctAnswer": "これは発展の確認です"
        },
        {
          "id": "u26_l9_5",
          "type": "speak",
          "prompt": "祈念の確認",
          "furigana": "きねんのかくにん",
          "romaji": "kinen no kakunin",
          "english": "Pronounce: Confirming Praying / wishing for",
          "audioText": "きねんのかくにん",
          "targetSpeech": "祈念の確認",
          "options": [
            "Confirming Praying / wishing for",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "祈念の確認"
        },
        {
          "id": "u26_l9_6",
          "type": "dictate",
          "prompt": "祈念の確認をお願いします",
          "furigana": "きねんのかくにんをおねがいします",
          "romaji": "kinen no kakunin o onegaishimasu.",
          "english": "Confirming Praying / wishing for, please.",
          "audioText": "祈念の確認をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "です",
            "お願いします",
            "祈念の確認"
          ],
          "dictateSolution": [
            "祈念の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "祈念の確認をお願いします"
        },
        {
          "id": "u26_l9_7",
          "type": "match",
          "prompt": "健勝の確認・発展の確認・祈念の確認・ご清聴の確認",
          "furigana": "けんしょうのかくにん・はってんのかくにん・きねんのかくにん・ごせいちょうのかくにん",
          "romaji": "kenshou no kakunin, hatten no kakunin, kinen no kakunin, goseichou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "けんしょうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "健勝の確認",
              "right": "Confirming Good health (formal epistolary)",
              "furigana": "けんしょうのかくにん",
              "romaji": "kenshou no kakunin"
            },
            {
              "id": "p_1",
              "left": "発展の確認",
              "right": "Confirming Prosperity / advancement",
              "furigana": "はってんのかくにん",
              "romaji": "hatten no kakunin"
            },
            {
              "id": "p_2",
              "left": "祈念の確認",
              "right": "Confirming Praying / wishing for",
              "furigana": "きねんのかくにん",
              "romaji": "kinen no kakunin"
            },
            {
              "id": "p_3",
              "left": "ご清聴の確認",
              "right": "Confirming Attentive listening (audience)",
              "furigana": "ごせいちょうのかくにん",
              "romaji": "goseichou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l9_8",
          "type": "dialogue",
          "prompt": "謹んでについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "謹んでについて教えていただけますか？",
          "furigana": "謹んでについて教えていただけますか？",
          "romaji": "tsutsushinde ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Respectfully / humbly?",
          "audioText": "謹んでについて教えていただけますか？",
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
      "id": "u26_l10",
      "unitId": "unit_26",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Attentive listening (audience) & Confirming Proposing the official toast",
      "titleJp": "ご清聴の確認・乾杯の音頭の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "ご清聴の確認",
        "乾杯の音頭の確認",
        "結びの確認"
      ],
      "kanjiKeywords": [
        "清",
        "聴",
        "確",
        "認",
        "乾",
        "杯",
        "音",
        "頭",
        "確",
        "認",
        "結",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u26_l10_1",
          "type": "listen",
          "prompt": "ご清聴の確認",
          "furigana": "ごせいちょうのかくにん",
          "romaji": "goseichou no kakunin",
          "english": "Confirming Attentive listening (audience)",
          "audioText": "ごせいちょうのかくにん",
          "options": [
            "Closing / conclusion of a speech",
            "Confirming Attentive listening (audience)",
            "Confirming Respectfully / humbly",
            "Confirming Praying / wishing for"
          ],
          "correctAnswer": "Confirming Attentive listening (audience)"
        },
        {
          "id": "u26_l10_2",
          "type": "spell",
          "prompt": "ご清聴の確認",
          "furigana": "ごせいちょうのかくにん",
          "romaji": "goseichou no kakunin",
          "english": "Build 'Confirming Attentive listening (audience)'",
          "audioText": "ごせいちょうのかくにん",
          "tileBank": [
            "の",
            "か",
            "ょ",
            "ご",
            "い",
            "せ",
            "う",
            "ち"
          ],
          "correctAnswer": "ごせいちょうのかくにん"
        },
        {
          "id": "u26_l10_3",
          "type": "cloze",
          "prompt": "私は乾杯の音頭の確認がすきです",
          "furigana": "わたしはかんぱいのおんどのかくにんがすきです",
          "romaji": "Watashi wa kanpai no ondo no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Proposing the official toast.",
          "audioText": "乾杯の音頭の確認",
          "clozeSentence": "これは乾杯の音頭の確認 {{BLANK}} す。",
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
          "id": "u26_l10_4",
          "type": "scramble",
          "prompt": "これは乾杯の音頭の確認です",
          "furigana": "これはかんぱいのおんどのかくにんです",
          "romaji": "Kore wa kanpai no ondo no kakunin desu.",
          "english": "This is Confirming Proposing the official toast.",
          "audioText": "これは乾杯の音頭の確認です",
          "scrambleTokens": [
            "です",
            "乾杯の音頭の確認",
            "ではありません",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "乾杯の音頭の確認",
            "です"
          ],
          "correctAnswer": "これは乾杯の音頭の確認です"
        },
        {
          "id": "u26_l10_5",
          "type": "speak",
          "prompt": "結びの確認",
          "furigana": "むすびのかくにん",
          "romaji": "musubi no kakunin",
          "english": "Pronounce: Confirming Closing / conclusion of a speech",
          "audioText": "むすびのかくにん",
          "targetSpeech": "結びの確認",
          "options": [
            "Confirming Closing / conclusion of a speech",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "結びの確認"
        },
        {
          "id": "u26_l10_6",
          "type": "dictate",
          "prompt": "結びの確認をお願いします",
          "furigana": "むすびのかくにんをおねがいします",
          "romaji": "musubi no kakunin o onegaishimasu.",
          "english": "Confirming Closing / conclusion of a speech, please.",
          "audioText": "結びの確認をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "お願いします",
            "ありがとう",
            "結びの確認"
          ],
          "dictateSolution": [
            "結びの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "結びの確認をお願いします"
        },
        {
          "id": "u26_l10_7",
          "type": "match",
          "prompt": "ご清聴の確認・乾杯の音頭の確認・結びの確認・謹んでの確認",
          "furigana": "ごせいちょうのかくにん・かんぱいのおんどのかくにん・むすびのかくにん・つつしんでのかくにん",
          "romaji": "goseichou no kakunin, kanpai no ondo no kakunin, musubi no kakunin, tsutsushinde no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ごせいちょうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "ご清聴の確認",
              "right": "Confirming Attentive listening (audience)",
              "furigana": "ごせいちょうのかくにん",
              "romaji": "goseichou no kakunin"
            },
            {
              "id": "p_1",
              "left": "乾杯の音頭の確認",
              "right": "Confirming Proposing the official toast",
              "furigana": "かんぱいのおんどのかくにん",
              "romaji": "kanpai no ondo no kakunin"
            },
            {
              "id": "p_2",
              "left": "結びの確認",
              "right": "Confirming Closing / conclusion of a speech",
              "furigana": "むすびのかくにん",
              "romaji": "musubi no kakunin"
            },
            {
              "id": "p_3",
              "left": "謹んでの確認",
              "right": "Confirming Respectfully / humbly",
              "furigana": "つつしんでのかくにん",
              "romaji": "tsutsushinde no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l10_8",
          "type": "dialogue",
          "prompt": "お慶びの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "お慶びの準備はできていますか？",
          "furigana": "お慶びの準備はできていますか？",
          "romaji": "oyorokobi no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Heartfelt congratulations ready?",
          "audioText": "お慶びの準備はできていますか？",
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
      "id": "u26_l11",
      "unitId": "unit_26",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Respectfully / humbly & Confirming Heartfelt congratulations",
      "titleJp": "謹んでの確認・お慶びの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "謹んでの確認",
        "お慶びの確認",
        "栄誉の確認"
      ],
      "kanjiKeywords": [
        "謹",
        "確",
        "認",
        "慶",
        "確",
        "認",
        "栄",
        "誉",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u26_l11_1",
          "type": "listen",
          "prompt": "謹んでの確認",
          "furigana": "つつしんでのかくにん",
          "romaji": "tsutsushinde no kakunin",
          "english": "Confirming Respectfully / humbly",
          "audioText": "つつしんでのかくにん",
          "options": [
            "Confirming Respectfully / humbly",
            "Confirming Attentive listening (audience)",
            "Closing / conclusion of a speech",
            "Good health (formal epistolary)"
          ],
          "correctAnswer": "Confirming Respectfully / humbly"
        },
        {
          "id": "u26_l11_2",
          "type": "spell",
          "prompt": "謹んでの確認",
          "furigana": "つつしんでのかくにん",
          "romaji": "tsutsushinde no kakunin",
          "english": "Build 'Confirming Respectfully / humbly'",
          "audioText": "つつしんでのかくにん",
          "tileBank": [
            "の",
            "く",
            "し",
            "つ",
            "つ",
            "ん",
            "で",
            "か"
          ],
          "correctAnswer": "つつしんでのかくにん"
        },
        {
          "id": "u26_l11_3",
          "type": "cloze",
          "prompt": "私はお慶びの確認がすきです",
          "furigana": "わたしはおよろこびのかくにんがすきです",
          "romaji": "Watashi wa oyorokobi no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Heartfelt congratulations.",
          "audioText": "お慶びの確認",
          "clozeSentence": "これはお慶びの確認 {{BLANK}} す。",
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
          "id": "u26_l11_4",
          "type": "scramble",
          "prompt": "これはお慶びの確認です",
          "furigana": "これはおよろこびのかくにんです",
          "romaji": "Kore wa oyorokobi no kakunin desu.",
          "english": "This is Confirming Heartfelt congratulations.",
          "audioText": "これはお慶びの確認です",
          "scrambleTokens": [
            "これは",
            "それ",
            "お慶びの確認",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "お慶びの確認",
            "です"
          ],
          "correctAnswer": "これはお慶びの確認です"
        },
        {
          "id": "u26_l11_5",
          "type": "speak",
          "prompt": "栄誉の確認",
          "furigana": "えいよのかくにん",
          "romaji": "eiyo no kakunin",
          "english": "Pronounce: Confirming Honor / prestige",
          "audioText": "えいよのかくにん",
          "targetSpeech": "栄誉の確認",
          "options": [
            "Confirming Honor / prestige",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "栄誉の確認"
        },
        {
          "id": "u26_l11_6",
          "type": "dictate",
          "prompt": "栄誉の確認をお願いします",
          "furigana": "えいよのかくにんをおねがいします",
          "romaji": "eiyo no kakunin o onegaishimasu.",
          "english": "Confirming Honor / prestige, please.",
          "audioText": "栄誉の確認をお願いします",
          "dictateTokens": [
            "栄誉の確認",
            "お願いします",
            "を",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "栄誉の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "栄誉の確認をお願いします"
        },
        {
          "id": "u26_l11_7",
          "type": "match",
          "prompt": "謹んでの確認・お慶びの確認・栄誉の確認・光栄の確認",
          "furigana": "つつしんでのかくにん・およろこびのかくにん・えいよのかくにん・こうえいのかくにん",
          "romaji": "tsutsushinde no kakunin, oyorokobi no kakunin, eiyo no kakunin, kouei no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "つつしんでのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "謹んでの確認",
              "right": "Confirming Respectfully / humbly",
              "furigana": "つつしんでのかくにん",
              "romaji": "tsutsushinde no kakunin"
            },
            {
              "id": "p_1",
              "left": "お慶びの確認",
              "right": "Confirming Heartfelt congratulations",
              "furigana": "およろこびのかくにん",
              "romaji": "oyorokobi no kakunin"
            },
            {
              "id": "p_2",
              "left": "栄誉の確認",
              "right": "Confirming Honor / prestige",
              "furigana": "えいよのかくにん",
              "romaji": "eiyo no kakunin"
            },
            {
              "id": "p_3",
              "left": "光栄の確認",
              "right": "Confirming Honor / privilege",
              "furigana": "こうえいのかくにん",
              "romaji": "kouei no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l11_8",
          "type": "dialogue",
          "prompt": "栄誉についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "栄誉についてどう思われますか？",
          "furigana": "栄誉についてどう思われますか？",
          "romaji": "eiyo ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Honor / prestige?",
          "audioText": "栄誉についてどう思われますか？",
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
      "id": "u26_l12",
      "unitId": "unit_26",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Honor / privilege & Confirming Ceremony / official celebration",
      "titleJp": "光栄の確認・式典の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "光栄の確認",
        "式典の確認",
        "祝辞の確認"
      ],
      "kanjiKeywords": [
        "光",
        "栄",
        "確",
        "認",
        "式",
        "典",
        "確",
        "認",
        "祝",
        "辞",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u26_l12_1",
          "type": "listen",
          "prompt": "光栄の確認",
          "furigana": "こうえいのかくにん",
          "romaji": "kouei no kakunin",
          "english": "Confirming Honor / privilege",
          "audioText": "こうえいのかくにん",
          "options": [
            "Confirming Words of thanks / appreciation",
            "Confirming Honor / privilege",
            "Confirming Respectfully / humbly",
            "Confirming Heartfelt congratulations"
          ],
          "correctAnswer": "Confirming Honor / privilege"
        },
        {
          "id": "u26_l12_2",
          "type": "spell",
          "prompt": "光栄の確認",
          "furigana": "こうえいのかくにん",
          "romaji": "kouei no kakunin",
          "english": "Build 'Confirming Honor / privilege'",
          "audioText": "こうえいのかくにん",
          "tileBank": [
            "い",
            "の",
            "え",
            "う",
            "こ",
            "か",
            "に",
            "く"
          ],
          "correctAnswer": "こうえいのかくにん"
        },
        {
          "id": "u26_l12_3",
          "type": "cloze",
          "prompt": "私は式典の確認がすきです",
          "furigana": "わたしはしきてんのかくにんがすきです",
          "romaji": "Watashi wa shikiten no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Ceremony / official celebration.",
          "audioText": "式典の確認",
          "clozeSentence": "これは式典の確認 {{BLANK}} す。",
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
          "id": "u26_l12_4",
          "type": "scramble",
          "prompt": "これは式典の確認です",
          "furigana": "これはしきてんのかくにんです",
          "romaji": "Kore wa shikiten no kakunin desu.",
          "english": "This is Confirming Ceremony / official celebration.",
          "audioText": "これは式典の確認です",
          "scrambleTokens": [
            "です",
            "それ",
            "式典の確認",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "式典の確認",
            "です"
          ],
          "correctAnswer": "これは式典の確認です"
        },
        {
          "id": "u26_l12_5",
          "type": "speak",
          "prompt": "祝辞の確認",
          "furigana": "しゅくじのかくにん",
          "romaji": "shukuji no kakunin",
          "english": "Pronounce: Confirming Congratulatory address",
          "audioText": "しゅくじのかくにん",
          "targetSpeech": "祝辞の確認",
          "options": [
            "Confirming Congratulatory address",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "祝辞の確認"
        },
        {
          "id": "u26_l12_6",
          "type": "dictate",
          "prompt": "祝辞の確認をお願いします",
          "furigana": "しゅくじのかくにんをおねがいします",
          "romaji": "shukuji no kakunin o onegaishimasu.",
          "english": "Confirming Congratulatory address, please.",
          "audioText": "祝辞の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "祝辞の確認",
            "を",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "祝辞の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "祝辞の確認をお願いします"
        },
        {
          "id": "u26_l12_7",
          "type": "match",
          "prompt": "光栄の確認・式典の確認・祝辞の確認・謹んで",
          "furigana": "こうえいのかくにん・しきてんのかくにん・しゅくじのかくにん・つつしんで",
          "romaji": "kouei no kakunin, shikiten no kakunin, shukuji no kakunin, tsutsushinde",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "こうえいのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "光栄の確認",
              "right": "Confirming Honor / privilege",
              "furigana": "こうえいのかくにん",
              "romaji": "kouei no kakunin"
            },
            {
              "id": "p_1",
              "left": "式典の確認",
              "right": "Confirming Ceremony / official celebration",
              "furigana": "しきてんのかくにん",
              "romaji": "shikiten no kakunin"
            },
            {
              "id": "p_2",
              "left": "祝辞の確認",
              "right": "Confirming Congratulatory address",
              "furigana": "しゅくじのかくにん",
              "romaji": "shukuji no kakunin"
            },
            {
              "id": "p_3",
              "left": "謹んで",
              "right": "Respectfully / humbly",
              "furigana": "つつしんで",
              "romaji": "tsutsushinde"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l12_8",
          "type": "dialogue",
          "prompt": "次は光栄に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は光栄に進みましょう。",
          "furigana": "次は光栄に進みましょう。",
          "romaji": "Tsugi wa kouei ni susumimashou.",
          "english": "Speaker: Let's proceed to Honor / privilege next.",
          "audioText": "次は光栄に進みましょう。",
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
      "id": "u26_l13",
      "unitId": "unit_26",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Respectfully / humbly & Heartfelt congratulations",
      "titleJp": "謹んで・お慶び",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "謹んで",
        "お慶び",
        "栄誉"
      ],
      "kanjiKeywords": [
        "謹",
        "慶",
        "栄",
        "誉"
      ],
      "items": [
        {
          "id": "u26_l13_1",
          "type": "listen",
          "prompt": "謹んで",
          "furigana": "つつしんで",
          "romaji": "tsutsushinde",
          "english": "Respectfully / humbly",
          "audioText": "つつしんで",
          "options": [
            "Congratulatory address",
            "Confirming Closing / conclusion of a speech",
            "Confirming Honor / prestige",
            "Respectfully / humbly"
          ],
          "correctAnswer": "Respectfully / humbly"
        },
        {
          "id": "u26_l13_2",
          "type": "spell",
          "prompt": "謹んで",
          "furigana": "つつしんで",
          "romaji": "tsutsushinde",
          "english": "Build 'Respectfully / humbly'",
          "audioText": "つつしんで",
          "tileBank": [
            "ん",
            "で",
            "や",
            "く",
            "め",
            "つ",
            "し",
            "つ"
          ],
          "correctAnswer": "つつしんで"
        },
        {
          "id": "u26_l13_3",
          "type": "cloze",
          "prompt": "私はお慶びがすきです",
          "furigana": "わたしはおよろこびがすきです",
          "romaji": "Watashi wa oyorokobi ga suki desu.",
          "english": "Fill in the blank with the correct particle for Heartfelt congratulations.",
          "audioText": "お慶び",
          "clozeSentence": "これはお慶び {{BLANK}} す。",
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
          "id": "u26_l13_4",
          "type": "scramble",
          "prompt": "これはお慶びです",
          "furigana": "これはおよろこびです",
          "romaji": "Kore wa oyorokobi desu.",
          "english": "This is Heartfelt congratulations.",
          "audioText": "これはお慶びです",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "これは",
            "です",
            "お慶び"
          ],
          "scrambleSolution": [
            "これは",
            "お慶び",
            "です"
          ],
          "correctAnswer": "これはお慶びです"
        },
        {
          "id": "u26_l13_5",
          "type": "speak",
          "prompt": "栄誉",
          "furigana": "えいよ",
          "romaji": "eiyo",
          "english": "Pronounce: Honor / prestige",
          "audioText": "えいよ",
          "targetSpeech": "栄誉",
          "options": [
            "Honor / prestige",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "栄誉"
        },
        {
          "id": "u26_l13_6",
          "type": "dictate",
          "prompt": "栄誉をお願いします",
          "furigana": "えいよをおねがいします",
          "romaji": "eiyo o onegaishimasu.",
          "english": "Honor / prestige, please.",
          "audioText": "栄誉をお願いします",
          "dictateTokens": [
            "栄誉",
            "お願いします",
            "を",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "栄誉",
            "を",
            "お願いします"
          ],
          "correctAnswer": "栄誉をお願いします"
        },
        {
          "id": "u26_l13_7",
          "type": "match",
          "prompt": "謹んで・お慶び・栄誉・光栄",
          "furigana": "つつしんで・およろこび・えいよ・こうえい",
          "romaji": "tsutsushinde, oyorokobi, eiyo, kouei",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "つつしんで",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "謹んで",
              "right": "Respectfully / humbly",
              "furigana": "つつしんで",
              "romaji": "tsutsushinde"
            },
            {
              "id": "p_1",
              "left": "お慶び",
              "right": "Heartfelt congratulations",
              "furigana": "およろこび",
              "romaji": "oyorokobi"
            },
            {
              "id": "p_2",
              "left": "栄誉",
              "right": "Honor / prestige",
              "furigana": "えいよ",
              "romaji": "eiyo"
            },
            {
              "id": "p_3",
              "left": "光栄",
              "right": "Honor / privilege",
              "furigana": "こうえい",
              "romaji": "kouei"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l13_8",
          "type": "dialogue",
          "prompt": "謹んでについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "謹んでについて教えていただけますか？",
          "furigana": "謹んでについて教えていただけますか？",
          "romaji": "tsutsushinde ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Respectfully / humbly?",
          "audioText": "謹んでについて教えていただけますか？",
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
      "id": "u26_l14",
      "unitId": "unit_26",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Honor / privilege & Ceremony / official celebration",
      "titleJp": "光栄・式典",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "光栄",
        "式典",
        "祝辞"
      ],
      "kanjiKeywords": [
        "光",
        "栄",
        "式",
        "典",
        "祝",
        "辞"
      ],
      "items": [
        {
          "id": "u26_l14_1",
          "type": "listen",
          "prompt": "光栄",
          "furigana": "こうえい",
          "romaji": "kouei",
          "english": "Honor / privilege",
          "audioText": "こうえい",
          "options": [
            "Prosperity / advancement",
            "Honor / privilege",
            "Heartfelt congratulations",
            "Confirming Honor / prestige"
          ],
          "correctAnswer": "Honor / privilege"
        },
        {
          "id": "u26_l14_2",
          "type": "spell",
          "prompt": "光栄",
          "furigana": "こうえい",
          "romaji": "kouei",
          "english": "Build 'Honor / privilege'",
          "audioText": "こうえい",
          "tileBank": [
            "え",
            "あ",
            "こ",
            "き",
            "い",
            "な",
            "う",
            "す"
          ],
          "correctAnswer": "こうえい"
        },
        {
          "id": "u26_l14_3",
          "type": "cloze",
          "prompt": "私は式典がすきです",
          "furigana": "わたしはしきてんがすきです",
          "romaji": "Watashi wa shikiten ga suki desu.",
          "english": "Fill in the blank with the correct particle for Ceremony / official celebration.",
          "audioText": "式典",
          "clozeSentence": "これは式典 {{BLANK}} す。",
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
          "id": "u26_l14_4",
          "type": "scramble",
          "prompt": "これは式典です",
          "furigana": "これはしきてんです",
          "romaji": "Kore wa shikiten desu.",
          "english": "This is Ceremony / official celebration.",
          "audioText": "これは式典です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "式典",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "式典",
            "です"
          ],
          "correctAnswer": "これは式典です"
        },
        {
          "id": "u26_l14_5",
          "type": "speak",
          "prompt": "祝辞",
          "furigana": "しゅくじ",
          "romaji": "shukuji",
          "english": "Pronounce: Congratulatory address",
          "audioText": "しゅくじ",
          "targetSpeech": "祝辞",
          "options": [
            "Congratulatory address",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "祝辞"
        },
        {
          "id": "u26_l14_6",
          "type": "dictate",
          "prompt": "祝辞をお願いします",
          "furigana": "しゅくじをおねがいします",
          "romaji": "shukuji o onegaishimasu.",
          "english": "Congratulatory address, please.",
          "audioText": "祝辞をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "祝辞",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "祝辞",
            "を",
            "お願いします"
          ],
          "correctAnswer": "祝辞をお願いします"
        },
        {
          "id": "u26_l14_7",
          "type": "match",
          "prompt": "光栄・式典・祝辞・感謝の辞",
          "furigana": "こうえい・しきてん・しゅくじ・かんしゃのじ",
          "romaji": "kouei, shikiten, shukuji, kansha no ji",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "こうえい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "光栄",
              "right": "Honor / privilege",
              "furigana": "こうえい",
              "romaji": "kouei"
            },
            {
              "id": "p_1",
              "left": "式典",
              "right": "Ceremony / official celebration",
              "furigana": "しきてん",
              "romaji": "shikiten"
            },
            {
              "id": "p_2",
              "left": "祝辞",
              "right": "Congratulatory address",
              "furigana": "しゅくじ",
              "romaji": "shukuji"
            },
            {
              "id": "p_3",
              "left": "感謝の辞",
              "right": "Words of thanks / appreciation",
              "furigana": "かんしゃのじ",
              "romaji": "kansha no ji"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l14_8",
          "type": "dialogue",
          "prompt": "お慶びの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "お慶びの準備はできていますか？",
          "furigana": "お慶びの準備はできていますか？",
          "romaji": "oyorokobi no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Heartfelt congratulations ready?",
          "audioText": "お慶びの準備はできていますか？",
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
      "id": "u26_l15",
      "unitId": "unit_26",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 26 Master Exam",
      "iconType": "test",
      "title": "Unit 26 Master Exam",
      "titleJp": "第26週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "感謝の辞",
        "甚だ",
        "恐縮"
      ],
      "kanjiKeywords": [
        "感",
        "謝",
        "辞",
        "甚",
        "恐",
        "縮"
      ],
      "items": [
        {
          "id": "u26_l15_1",
          "type": "listen",
          "prompt": "感謝の辞",
          "furigana": "かんしゃのじ",
          "romaji": "kansha no ji",
          "english": "Words of thanks / appreciation",
          "audioText": "かんしゃのじ",
          "options": [
            "Words of thanks / appreciation",
            "Confirming Prosperity / advancement",
            "Closing / conclusion of a speech",
            "Honor / prestige"
          ],
          "correctAnswer": "Words of thanks / appreciation"
        },
        {
          "id": "u26_l15_2",
          "type": "spell",
          "prompt": "感謝の辞",
          "furigana": "かんしゃのじ",
          "romaji": "kansha no ji",
          "english": "Build 'Words of thanks / appreciation'",
          "audioText": "かんしゃのじ",
          "tileBank": [
            "う",
            "ゃ",
            "じ",
            "ん",
            "し",
            "の",
            "こ",
            "か"
          ],
          "correctAnswer": "かんしゃのじ"
        },
        {
          "id": "u26_l15_3",
          "type": "cloze",
          "prompt": "私は甚だがすきです",
          "furigana": "わたしははなはだがすきです",
          "romaji": "Watashi wa hanahada ga suki desu.",
          "english": "Fill in the blank with the correct particle for Extremely / exceedingly (formal).",
          "audioText": "甚だ",
          "clozeSentence": "これは甚だ {{BLANK}} す。",
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
          "id": "u26_l15_4",
          "type": "scramble",
          "prompt": "これは甚だです",
          "furigana": "これははなはだです",
          "romaji": "Kore wa hanahada desu.",
          "english": "This is Extremely / exceedingly (formal).",
          "audioText": "これは甚だです",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "甚だ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "甚だ",
            "です"
          ],
          "correctAnswer": "これは甚だです"
        },
        {
          "id": "u26_l15_5",
          "type": "speak",
          "prompt": "恐縮",
          "furigana": "きょうしゅく",
          "romaji": "kyoushuku",
          "english": "Pronounce: Extremely obliged / apologetic",
          "audioText": "きょうしゅく",
          "targetSpeech": "恐縮",
          "options": [
            "Extremely obliged / apologetic",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "恐縮"
        },
        {
          "id": "u26_l15_6",
          "type": "dictate",
          "prompt": "恐縮をお願いします",
          "furigana": "きょうしゅくをおねがいします",
          "romaji": "kyoushuku o onegaishimasu.",
          "english": "Extremely obliged / apologetic, please.",
          "audioText": "恐縮をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "恐縮",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "恐縮",
            "を",
            "お願いします"
          ],
          "correctAnswer": "恐縮をお願いします"
        },
        {
          "id": "u26_l15_7",
          "type": "match",
          "prompt": "感謝の辞・甚だ・恐縮・健勝",
          "furigana": "かんしゃのじ・はなはだ・きょうしゅく・けんしょう",
          "romaji": "kansha no ji, hanahada, kyoushuku, kenshou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "かんしゃのじ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "感謝の辞",
              "right": "Words of thanks / appreciation",
              "furigana": "かんしゃのじ",
              "romaji": "kansha no ji"
            },
            {
              "id": "p_1",
              "left": "甚だ",
              "right": "Extremely / exceedingly (formal)",
              "furigana": "はなはだ",
              "romaji": "hanahada"
            },
            {
              "id": "p_2",
              "left": "恐縮",
              "right": "Extremely obliged / apologetic",
              "furigana": "きょうしゅく",
              "romaji": "kyoushuku"
            },
            {
              "id": "p_3",
              "left": "健勝",
              "right": "Good health (formal epistolary)",
              "furigana": "けんしょう",
              "romaji": "kenshou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u26_l15_8",
          "type": "dialogue",
          "prompt": "栄誉についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "栄誉についてどう思われますか？",
          "furigana": "栄誉についてどう思われますか？",
          "romaji": "eiyo ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Honor / prestige?",
          "audioText": "栄誉についてどう思われますか？",
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
    "id": "gate_unit_26",
    "unitId": "unit_26",
    "title": "Unit 26 Mastery Checkpoint",
    "titleJp": "第26週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u26_l1_1",
        "type": "listen",
        "prompt": "謹んで",
        "furigana": "つつしんで",
        "romaji": "tsutsushinde",
        "english": "Respectfully / humbly",
        "audioText": "つつしんで",
        "options": [
          "Attentive listening (audience)",
          "Confirming Honor / privilege",
          "Respectfully / humbly",
          "Closing / conclusion of a speech"
        ],
        "correctAnswer": "Respectfully / humbly"
      },
      {
        "id": "u26_l1_2",
        "type": "spell",
        "prompt": "謹んで",
        "furigana": "つつしんで",
        "romaji": "tsutsushinde",
        "english": "Build 'Respectfully / humbly'",
        "audioText": "つつしんで",
        "tileBank": [
          "む",
          "つ",
          "つ",
          "し",
          "よ",
          "で",
          "ん",
          "け"
        ],
        "correctAnswer": "つつしんで"
      },
      {
        "id": "u26_l3_1",
        "type": "listen",
        "prompt": "感謝の辞",
        "furigana": "かんしゃのじ",
        "romaji": "kansha no ji",
        "english": "Words of thanks / appreciation",
        "audioText": "かんしゃのじ",
        "options": [
          "Confirming Closing / conclusion of a speech",
          "Words of thanks / appreciation",
          "Extremely obliged / apologetic",
          "Closing / conclusion of a speech"
        ],
        "correctAnswer": "Words of thanks / appreciation"
      },
      {
        "id": "u26_l3_2",
        "type": "spell",
        "prompt": "感謝の辞",
        "furigana": "かんしゃのじ",
        "romaji": "kansha no ji",
        "english": "Build 'Words of thanks / appreciation'",
        "audioText": "かんしゃのじ",
        "tileBank": [
          "か",
          "さ",
          "し",
          "じ",
          "な",
          "ん",
          "ゃ",
          "の"
        ],
        "correctAnswer": "かんしゃのじ"
      },
      {
        "id": "u26_l5_1",
        "type": "listen",
        "prompt": "ご清聴",
        "furigana": "ごせいちょう",
        "romaji": "goseichou",
        "english": "Attentive listening (audience)",
        "audioText": "ごせいちょう",
        "options": [
          "Praying / wishing for",
          "Extremely / exceedingly (formal)",
          "Confirming Honor / privilege",
          "Attentive listening (audience)"
        ],
        "correctAnswer": "Attentive listening (audience)"
      },
      {
        "id": "u26_l5_2",
        "type": "spell",
        "prompt": "ご清聴",
        "furigana": "ごせいちょう",
        "romaji": "goseichou",
        "english": "Build 'Attentive listening (audience)'",
        "audioText": "ごせいちょう",
        "tileBank": [
          "い",
          "と",
          "ご",
          "せ",
          "ち",
          "う",
          "ょ",
          "ろ"
        ],
        "correctAnswer": "ごせいちょう"
      },
      {
        "id": "u26_l7_1",
        "type": "listen",
        "prompt": "光栄の確認",
        "furigana": "こうえいのかくにん",
        "romaji": "kouei no kakunin",
        "english": "Confirming Honor / privilege",
        "audioText": "こうえいのかくにん",
        "options": [
          "Confirming Proposing the official toast",
          "Confirming Good health (formal epistolary)",
          "Confirming Ceremony / official celebration",
          "Confirming Honor / privilege"
        ],
        "correctAnswer": "Confirming Honor / privilege"
      },
      {
        "id": "u26_l7_2",
        "type": "spell",
        "prompt": "光栄の確認",
        "furigana": "こうえいのかくにん",
        "romaji": "kouei no kakunin",
        "english": "Build 'Confirming Honor / privilege'",
        "audioText": "こうえいのかくにん",
        "tileBank": [
          "の",
          "に",
          "い",
          "う",
          "こ",
          "く",
          "え",
          "か"
        ],
        "correctAnswer": "こうえいのかくにん"
      },
      {
        "id": "u26_l9_1",
        "type": "listen",
        "prompt": "健勝の確認",
        "furigana": "けんしょうのかくにん",
        "romaji": "kenshou no kakunin",
        "english": "Confirming Good health (formal epistolary)",
        "audioText": "けんしょうのかくにん",
        "options": [
          "Confirming Words of thanks / appreciation",
          "Confirming Heartfelt congratulations",
          "Confirming Good health (formal epistolary)",
          "Good health (formal epistolary)"
        ],
        "correctAnswer": "Confirming Good health (formal epistolary)"
      },
      {
        "id": "u26_l9_2",
        "type": "spell",
        "prompt": "健勝の確認",
        "furigana": "けんしょうのかくにん",
        "romaji": "kenshou no kakunin",
        "english": "Build 'Confirming Good health (formal epistolary)'",
        "audioText": "けんしょうのかくにん",
        "tileBank": [
          "し",
          "く",
          "う",
          "か",
          "ょ",
          "け",
          "の",
          "ん"
        ],
        "correctAnswer": "けんしょうのかくにん"
      },
      {
        "id": "u26_l11_1",
        "type": "listen",
        "prompt": "謹んでの確認",
        "furigana": "つつしんでのかくにん",
        "romaji": "tsutsushinde no kakunin",
        "english": "Confirming Respectfully / humbly",
        "audioText": "つつしんでのかくにん",
        "options": [
          "Confirming Respectfully / humbly",
          "Confirming Attentive listening (audience)",
          "Closing / conclusion of a speech",
          "Good health (formal epistolary)"
        ],
        "correctAnswer": "Confirming Respectfully / humbly"
      },
      {
        "id": "u26_l11_2",
        "type": "spell",
        "prompt": "謹んでの確認",
        "furigana": "つつしんでのかくにん",
        "romaji": "tsutsushinde no kakunin",
        "english": "Build 'Confirming Respectfully / humbly'",
        "audioText": "つつしんでのかくにん",
        "tileBank": [
          "の",
          "く",
          "し",
          "つ",
          "つ",
          "ん",
          "で",
          "か"
        ],
        "correctAnswer": "つつしんでのかくにん"
      }
    ]
  }
};
