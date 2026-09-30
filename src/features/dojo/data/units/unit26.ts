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
            "Confirming Ceremony / official celebration",
            "Confirming Good health (formal epistolary)",
            "Honor / privilege",
            "Respectfully / humbly"
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
            "つ",
            "で",
            "ん",
            "つ",
            "る",
            "な",
            "し",
            "さ"
          ],
          "correctAnswer": "つつしんで"
        },
        {
          "id": "u26_l1_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なお慶びです。",
          "furigana": "これはいちばんたいせつなおよろこびです。",
          "romaji": "Kore wa ichiban taisetsu na oyorokobi desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Heartfelt congratulations.",
          "audioText": "これはお慶びです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なお慶びです。",
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
          "id": "u26_l1_4",
          "type": "scramble",
          "prompt": "これはお慶びです",
          "furigana": "これはおよろこびです",
          "romaji": "Kore wa oyorokobi desu.",
          "english": "This is Heartfelt congratulations.",
          "audioText": "これはお慶びです",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "お慶び",
            "それ",
            "です"
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
          "prompt": "栄誉です",
          "furigana": "えいよです",
          "romaji": "eiyo desu.",
          "english": "It is Honor / prestige.",
          "audioText": "栄誉です",
          "dictateTokens": [
            "栄誉",
            "ではありません",
            "です",
            "これ"
          ],
          "dictateSolution": [
            "栄誉",
            "です"
          ],
          "correctAnswer": "栄誉です"
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
            "Confirming Closing / conclusion of a speech",
            "Confirming Ceremony / official celebration",
            "Confirming Respectfully / humbly",
            "Honor / privilege"
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
            "う",
            "て",
            "こ",
            "え",
            "め",
            "ん",
            "い",
            "す"
          ],
          "correctAnswer": "こうえい"
        },
        {
          "id": "u26_l2_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な式典です。",
          "furigana": "これはいちばんたいせつなしきてんです。",
          "romaji": "Kore wa ichiban taisetsu na shikiten desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Ceremony / official celebration.",
          "audioText": "これは式典です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な式典です。",
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
          "id": "u26_l2_4",
          "type": "scramble",
          "prompt": "これは式典です",
          "furigana": "これはしきてんです",
          "romaji": "Kore wa shikiten desu.",
          "english": "This is Ceremony / official celebration.",
          "audioText": "これは式典です",
          "scrambleTokens": [
            "ではありません",
            "式典",
            "です",
            "これは",
            "それ"
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
          "prompt": "祝辞です",
          "furigana": "しゅくじです",
          "romaji": "shukuji desu.",
          "english": "It is Congratulatory address.",
          "audioText": "祝辞です",
          "dictateTokens": [
            "です",
            "ではありません",
            "祝辞",
            "これ"
          ],
          "dictateSolution": [
            "祝辞",
            "です"
          ],
          "correctAnswer": "祝辞です"
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
            "Respectfully / humbly",
            "Words of thanks / appreciation",
            "Extremely obliged / apologetic",
            "Proposing the official toast"
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
            "ん",
            "か",
            "う",
            "よ",
            "じ",
            "の",
            "し",
            "ゃ"
          ],
          "correctAnswer": "かんしゃのじ"
        },
        {
          "id": "u26_l3_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な甚だです。",
          "furigana": "これはいちばんたいせつなはなはだです。",
          "romaji": "Kore wa ichiban taisetsu na hanahada desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Extremely / exceedingly (formal).",
          "audioText": "これは甚だです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な甚だです。",
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
          "id": "u26_l3_4",
          "type": "scramble",
          "prompt": "これは甚だです",
          "furigana": "これははなはだです",
          "romaji": "Kore wa hanahada desu.",
          "english": "This is Extremely / exceedingly (formal).",
          "audioText": "これは甚だです",
          "scrambleTokens": [
            "それ",
            "甚だ",
            "です",
            "これは",
            "ではありません"
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
          "prompt": "恐縮です",
          "furigana": "きょうしゅくです",
          "romaji": "kyoushuku desu.",
          "english": "It is Extremely obliged / apologetic.",
          "audioText": "恐縮です",
          "dictateTokens": [
            "です",
            "ではありません",
            "恐縮",
            "これ"
          ],
          "dictateSolution": [
            "恐縮",
            "です"
          ],
          "correctAnswer": "恐縮です"
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
            "Good health (formal epistolary)",
            "Extremely / exceedingly (formal)",
            "Proposing the official toast",
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
            "し",
            "ょ",
            "う",
            "い",
            "ん",
            "そ",
            "き",
            "け"
          ],
          "correctAnswer": "けんしょう"
        },
        {
          "id": "u26_l4_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な発展です。",
          "furigana": "これはいちばんたいせつなはってんです。",
          "romaji": "Kore wa ichiban taisetsu na hatten desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Prosperity / advancement.",
          "audioText": "これは発展です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な発展です。",
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
          "id": "u26_l4_4",
          "type": "scramble",
          "prompt": "これは発展です",
          "furigana": "これははってんです",
          "romaji": "Kore wa hatten desu.",
          "english": "This is Prosperity / advancement.",
          "audioText": "これは発展です",
          "scrambleTokens": [
            "です",
            "それ",
            "これは",
            "発展",
            "ではありません"
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
          "prompt": "祈念です",
          "furigana": "きねんです",
          "romaji": "kinen desu.",
          "english": "It is Praying / wishing for.",
          "audioText": "祈念です",
          "dictateTokens": [
            "祈念",
            "ではありません",
            "です",
            "これ"
          ],
          "dictateSolution": [
            "祈念",
            "です"
          ],
          "correctAnswer": "祈念です"
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
            "Confirming Honor / prestige",
            "Confirming Honor / privilege",
            "Attentive listening (audience)",
            "Prosperity / advancement"
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
            "せ",
            "ご",
            "ょ",
            "ま",
            "け",
            "ち",
            "う"
          ],
          "correctAnswer": "ごせいちょう"
        },
        {
          "id": "u26_l5_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な乾杯の音頭です。",
          "furigana": "これはいちばんたいせつなかんぱいのおんどです。",
          "romaji": "Kore wa ichiban taisetsu na kanpai no ondo desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Proposing the official toast.",
          "audioText": "これは乾杯の音頭です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な乾杯の音頭です。",
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
          "id": "u26_l5_4",
          "type": "scramble",
          "prompt": "これは乾杯の音頭です",
          "furigana": "これはかんぱいのおんどです",
          "romaji": "Kore wa kanpai no ondo desu.",
          "english": "This is Proposing the official toast.",
          "audioText": "これは乾杯の音頭です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "です",
            "それ",
            "乾杯の音頭"
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
          "prompt": "結びです",
          "furigana": "むすびです",
          "romaji": "musubi desu.",
          "english": "It is Closing / conclusion of a speech.",
          "audioText": "結びです",
          "dictateTokens": [
            "ではありません",
            "結び",
            "これ",
            "です"
          ],
          "dictateSolution": [
            "結び",
            "です"
          ],
          "correctAnswer": "結びです"
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
            "Confirming Words of thanks / appreciation",
            "Confirming Respectfully / humbly",
            "Closing / conclusion of a speech",
            "Honor / prestige"
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
            "の",
            "し",
            "つ",
            "か",
            "つ",
            "く",
            "ん",
            "で"
          ],
          "correctAnswer": "つつしんでのかくにん"
        },
        {
          "id": "u26_l6_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なお慶びの確認です。",
          "furigana": "これはいちばんたいせつなおよろこびのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na oyorokobi no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Heartfelt congratulations.",
          "audioText": "これはお慶びの確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なお慶びの確認です。",
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
          "id": "u26_l6_4",
          "type": "scramble",
          "prompt": "これはお慶びの確認です",
          "furigana": "これはおよろこびのかくにんです",
          "romaji": "Kore wa oyorokobi no kakunin desu.",
          "english": "This is Confirming Heartfelt congratulations.",
          "audioText": "これはお慶びの確認です",
          "scrambleTokens": [
            "これは",
            "です",
            "ではありません",
            "お慶びの確認",
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
          "prompt": "栄誉の確認です",
          "furigana": "えいよのかくにんです",
          "romaji": "eiyo no kakunin desu.",
          "english": "It is Confirming Honor / prestige.",
          "audioText": "栄誉の確認です",
          "dictateTokens": [
            "です",
            "これ",
            "栄誉の確認",
            "ではありません"
          ],
          "dictateSolution": [
            "栄誉の確認",
            "です"
          ],
          "correctAnswer": "栄誉の確認です"
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
            "Good health (formal epistolary)",
            "Confirming Heartfelt congratulations",
            "Confirming Closing / conclusion of a speech",
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
            "く",
            "い",
            "の",
            "え",
            "こ",
            "に",
            "か",
            "う"
          ],
          "correctAnswer": "こうえいのかくにん"
        },
        {
          "id": "u26_l7_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な式典の確認です。",
          "furigana": "これはいちばんたいせつなしきてんのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na shikiten no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Ceremony / official celebration.",
          "audioText": "これは式典の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な式典の確認です。",
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
          "id": "u26_l7_4",
          "type": "scramble",
          "prompt": "これは式典の確認です",
          "furigana": "これはしきてんのかくにんです",
          "romaji": "Kore wa shikiten no kakunin desu.",
          "english": "This is Confirming Ceremony / official celebration.",
          "audioText": "これは式典の確認です",
          "scrambleTokens": [
            "式典の確認",
            "それ",
            "です",
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
          "prompt": "祝辞の確認です",
          "furigana": "しゅくじのかくにんです",
          "romaji": "shukuji no kakunin desu.",
          "english": "It is Confirming Congratulatory address.",
          "audioText": "祝辞の確認です",
          "dictateTokens": [
            "これ",
            "です",
            "ではありません",
            "祝辞の確認"
          ],
          "dictateSolution": [
            "祝辞の確認",
            "です"
          ],
          "correctAnswer": "祝辞の確認です"
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
            "Congratulatory address",
            "Confirming Words of thanks / appreciation",
            "Confirming Heartfelt congratulations",
            "Respectfully / humbly"
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
            "の",
            "ん",
            "か",
            "ゃ",
            "じ",
            "し",
            "か",
            "の"
          ],
          "correctAnswer": "かんしゃのじのかくにん"
        },
        {
          "id": "u26_l8_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な甚だの確認です。",
          "furigana": "これはいちばんたいせつなはなはだのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na hanahada no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Extremely / exceedingly (formal).",
          "audioText": "これは甚だの確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な甚だの確認です。",
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
          "id": "u26_l8_4",
          "type": "scramble",
          "prompt": "これは甚だの確認です",
          "furigana": "これははなはだのかくにんです",
          "romaji": "Kore wa hanahada no kakunin desu.",
          "english": "This is Confirming Extremely / exceedingly (formal).",
          "audioText": "これは甚だの確認です",
          "scrambleTokens": [
            "です",
            "甚だの確認",
            "それ",
            "ではありません",
            "これは"
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
          "prompt": "恐縮の確認です",
          "furigana": "きょうしゅくのかくにんです",
          "romaji": "kyoushuku no kakunin desu.",
          "english": "It is Confirming Extremely obliged / apologetic.",
          "audioText": "恐縮の確認です",
          "dictateTokens": [
            "恐縮の確認",
            "これ",
            "です",
            "ではありません"
          ],
          "dictateSolution": [
            "恐縮の確認",
            "です"
          ],
          "correctAnswer": "恐縮の確認です"
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
            "Confirming Honor / privilege",
            "Confirming Ceremony / official celebration",
            "Confirming Good health (formal epistolary)",
            "Confirming Heartfelt congratulations"
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
            "ょ",
            "の",
            "け",
            "か",
            "う",
            "し",
            "ん",
            "く"
          ],
          "correctAnswer": "けんしょうのかくにん"
        },
        {
          "id": "u26_l9_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な発展の確認です。",
          "furigana": "これはいちばんたいせつなはってんのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na hatten no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Prosperity / advancement.",
          "audioText": "これは発展の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な発展の確認です。",
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
          "id": "u26_l9_4",
          "type": "scramble",
          "prompt": "これは発展の確認です",
          "furigana": "これははってんのかくにんです",
          "romaji": "Kore wa hatten no kakunin desu.",
          "english": "This is Confirming Prosperity / advancement.",
          "audioText": "これは発展の確認です",
          "scrambleTokens": [
            "それ",
            "これは",
            "ではありません",
            "です",
            "発展の確認"
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
          "prompt": "祈念の確認です",
          "furigana": "きねんのかくにんです",
          "romaji": "kinen no kakunin desu.",
          "english": "It is Confirming Praying / wishing for.",
          "audioText": "祈念の確認です",
          "dictateTokens": [
            "これ",
            "ではありません",
            "祈念の確認",
            "です"
          ],
          "dictateSolution": [
            "祈念の確認",
            "です"
          ],
          "correctAnswer": "祈念の確認です"
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
            "Confirming Congratulatory address",
            "Confirming Attentive listening (audience)",
            "Confirming Words of thanks / appreciation",
            "Words of thanks / appreciation"
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
            "ち",
            "い",
            "か",
            "ょ",
            "う",
            "ご",
            "の",
            "せ"
          ],
          "correctAnswer": "ごせいちょうのかくにん"
        },
        {
          "id": "u26_l10_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な乾杯の音頭の確認です。",
          "furigana": "これはいちばんたいせつなかんぱいのおんどのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na kanpai no ondo no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Proposing the official toast.",
          "audioText": "これは乾杯の音頭の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な乾杯の音頭の確認です。",
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
          "id": "u26_l10_4",
          "type": "scramble",
          "prompt": "これは乾杯の音頭の確認です",
          "furigana": "これはかんぱいのおんどのかくにんです",
          "romaji": "Kore wa kanpai no ondo no kakunin desu.",
          "english": "This is Confirming Proposing the official toast.",
          "audioText": "これは乾杯の音頭の確認です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "これは",
            "乾杯の音頭の確認"
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
          "prompt": "結びの確認です",
          "furigana": "むすびのかくにんです",
          "romaji": "musubi no kakunin desu.",
          "english": "It is Confirming Closing / conclusion of a speech.",
          "audioText": "結びの確認です",
          "dictateTokens": [
            "これ",
            "ではありません",
            "です",
            "結びの確認"
          ],
          "dictateSolution": [
            "結びの確認",
            "です"
          ],
          "correctAnswer": "結びの確認です"
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
            "Closing / conclusion of a speech",
            "Confirming Congratulatory address",
            "Confirming Respectfully / humbly",
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
            "し",
            "つ",
            "つ",
            "か",
            "く",
            "で",
            "ん"
          ],
          "correctAnswer": "つつしんでのかくにん"
        },
        {
          "id": "u26_l11_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なお慶びの確認です。",
          "furigana": "これはいちばんたいせつなおよろこびのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na oyorokobi no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Heartfelt congratulations.",
          "audioText": "これはお慶びの確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なお慶びの確認です。",
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
          "id": "u26_l11_4",
          "type": "scramble",
          "prompt": "これはお慶びの確認です",
          "furigana": "これはおよろこびのかくにんです",
          "romaji": "Kore wa oyorokobi no kakunin desu.",
          "english": "This is Confirming Heartfelt congratulations.",
          "audioText": "これはお慶びの確認です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "です",
            "それ",
            "お慶びの確認"
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
          "prompt": "栄誉の確認です",
          "furigana": "えいよのかくにんです",
          "romaji": "eiyo no kakunin desu.",
          "english": "It is Confirming Honor / prestige.",
          "audioText": "栄誉の確認です",
          "dictateTokens": [
            "栄誉の確認",
            "ではありません",
            "です",
            "これ"
          ],
          "dictateSolution": [
            "栄誉の確認",
            "です"
          ],
          "correctAnswer": "栄誉の確認です"
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
            "Confirming Ceremony / official celebration",
            "Confirming Honor / privilege",
            "Extremely / exceedingly (formal)",
            "Extremely obliged / apologetic"
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
            "に",
            "う",
            "こ",
            "く",
            "か",
            "の",
            "い",
            "え"
          ],
          "correctAnswer": "こうえいのかくにん"
        },
        {
          "id": "u26_l12_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な式典の確認です。",
          "furigana": "これはいちばんたいせつなしきてんのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na shikiten no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Ceremony / official celebration.",
          "audioText": "これは式典の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な式典の確認です。",
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
          "id": "u26_l12_4",
          "type": "scramble",
          "prompt": "これは式典の確認です",
          "furigana": "これはしきてんのかくにんです",
          "romaji": "Kore wa shikiten no kakunin desu.",
          "english": "This is Confirming Ceremony / official celebration.",
          "audioText": "これは式典の確認です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "これは",
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
          "prompt": "祝辞の確認です",
          "furigana": "しゅくじのかくにんです",
          "romaji": "shukuji no kakunin desu.",
          "english": "It is Confirming Congratulatory address.",
          "audioText": "祝辞の確認です",
          "dictateTokens": [
            "です",
            "ではありません",
            "これ",
            "祝辞の確認"
          ],
          "dictateSolution": [
            "祝辞の確認",
            "です"
          ],
          "correctAnswer": "祝辞の確認です"
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
            "Confirming Prosperity / advancement",
            "Congratulatory address",
            "Respectfully / humbly",
            "Praying / wishing for"
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
            "つ",
            "し",
            "む",
            "み",
            "つ",
            "で",
            "の",
            "ん"
          ],
          "correctAnswer": "つつしんで"
        },
        {
          "id": "u26_l13_3",
          "type": "cloze",
          "prompt": "これはいちばん大切なお慶びです。",
          "furigana": "これはいちばんたいせつなおよろこびです。",
          "romaji": "Kore wa ichiban taisetsu na oyorokobi desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Heartfelt congratulations.",
          "audioText": "これはお慶びです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切なお慶びです。",
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
          "id": "u26_l13_4",
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
            "お慶び",
            "これは"
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
          "prompt": "栄誉です",
          "furigana": "えいよです",
          "romaji": "eiyo desu.",
          "english": "It is Honor / prestige.",
          "audioText": "栄誉です",
          "dictateTokens": [
            "栄誉",
            "ではありません",
            "これ",
            "です"
          ],
          "dictateSolution": [
            "栄誉",
            "です"
          ],
          "correctAnswer": "栄誉です"
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
            "Confirming Heartfelt congratulations",
            "Confirming Honor / privilege",
            "Honor / privilege",
            "Confirming Ceremony / official celebration"
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
            "あ",
            "う",
            "る",
            "け",
            "え",
            "は",
            "い",
            "こ"
          ],
          "correctAnswer": "こうえい"
        },
        {
          "id": "u26_l14_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な式典です。",
          "furigana": "これはいちばんたいせつなしきてんです。",
          "romaji": "Kore wa ichiban taisetsu na shikiten desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Ceremony / official celebration.",
          "audioText": "これは式典です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な式典です。",
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
          "id": "u26_l14_4",
          "type": "scramble",
          "prompt": "これは式典です",
          "furigana": "これはしきてんです",
          "romaji": "Kore wa shikiten desu.",
          "english": "This is Ceremony / official celebration.",
          "audioText": "これは式典です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "です",
            "それ",
            "式典"
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
          "prompt": "祝辞です",
          "furigana": "しゅくじです",
          "romaji": "shukuji desu.",
          "english": "It is Congratulatory address.",
          "audioText": "祝辞です",
          "dictateTokens": [
            "ではありません",
            "です",
            "祝辞",
            "これ"
          ],
          "dictateSolution": [
            "祝辞",
            "です"
          ],
          "correctAnswer": "祝辞です"
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
            "Confirming Honor / prestige",
            "Congratulatory address",
            "Confirming Closing / conclusion of a speech",
            "Words of thanks / appreciation"
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
            "ゃ",
            "ん",
            "ろ",
            "し",
            "か",
            "い",
            "じ",
            "の"
          ],
          "correctAnswer": "かんしゃのじ"
        },
        {
          "id": "u26_l15_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な甚だです。",
          "furigana": "これはいちばんたいせつなはなはだです。",
          "romaji": "Kore wa ichiban taisetsu na hanahada desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Extremely / exceedingly (formal).",
          "audioText": "これは甚だです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な甚だです。",
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
          "id": "u26_l15_4",
          "type": "scramble",
          "prompt": "これは甚だです",
          "furigana": "これははなはだです",
          "romaji": "Kore wa hanahada desu.",
          "english": "This is Extremely / exceedingly (formal).",
          "audioText": "これは甚だです",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "これは",
            "です",
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
          "prompt": "恐縮です",
          "furigana": "きょうしゅくです",
          "romaji": "kyoushuku desu.",
          "english": "It is Extremely obliged / apologetic.",
          "audioText": "恐縮です",
          "dictateTokens": [
            "これ",
            "ではありません",
            "です",
            "恐縮"
          ],
          "dictateSolution": [
            "恐縮",
            "です"
          ],
          "correctAnswer": "恐縮です"
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
          "Confirming Ceremony / official celebration",
          "Confirming Good health (formal epistolary)",
          "Honor / privilege",
          "Respectfully / humbly"
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
          "つ",
          "で",
          "ん",
          "つ",
          "る",
          "な",
          "し",
          "さ"
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
          "Respectfully / humbly",
          "Words of thanks / appreciation",
          "Extremely obliged / apologetic",
          "Proposing the official toast"
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
          "ん",
          "か",
          "う",
          "よ",
          "じ",
          "の",
          "し",
          "ゃ"
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
          "Confirming Honor / prestige",
          "Confirming Honor / privilege",
          "Attentive listening (audience)",
          "Prosperity / advancement"
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
          "せ",
          "ご",
          "ょ",
          "ま",
          "け",
          "ち",
          "う"
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
          "Good health (formal epistolary)",
          "Confirming Heartfelt congratulations",
          "Confirming Closing / conclusion of a speech",
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
          "く",
          "い",
          "の",
          "え",
          "こ",
          "に",
          "か",
          "う"
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
          "Confirming Honor / privilege",
          "Confirming Ceremony / official celebration",
          "Confirming Good health (formal epistolary)",
          "Confirming Heartfelt congratulations"
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
          "ょ",
          "の",
          "け",
          "か",
          "う",
          "し",
          "ん",
          "く"
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
          "Closing / conclusion of a speech",
          "Confirming Congratulatory address",
          "Confirming Respectfully / humbly",
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
          "し",
          "つ",
          "つ",
          "か",
          "く",
          "で",
          "ん"
        ],
        "correctAnswer": "つつしんでのかくにん"
      }
    ]
  }
};
