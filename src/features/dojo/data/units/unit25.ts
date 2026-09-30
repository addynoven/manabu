import type { DojoUnit } from "../../models/dojo.model";

export const unit25: DojoUnit = {
  "id": "unit_25",
  "unitNumber": 25,
  "title": "Four-Character Idioms (Yojijukugo)",
  "titleJp": "四字熟語と故事成語",
  "description": "Master classical idioms: Ichigo Ichie, Ishin Denshin, Juunin Toiro, Sessatakuma, and Rinki Ouhen.",
  "icon": "📜",
  "themeColor": "#B45309",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u25_l1",
      "unitId": "unit_25",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Once in a lifetime encounter & Tacit mutual understanding",
      "titleJp": "一期一会・以心伝心",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "一期一会",
        "以心伝心",
        "十人十色"
      ],
      "kanjiKeywords": [
        "一",
        "期",
        "一",
        "会",
        "以",
        "心",
        "伝",
        "心",
        "十",
        "人",
        "十",
        "色"
      ],
      "items": [
        {
          "id": "u25_l1_1",
          "type": "listen",
          "prompt": "一期一会",
          "furigana": "いちごいちえ",
          "romaji": "ichigo ichie",
          "english": "Once in a lifetime encounter",
          "audioText": "いちごいちえ",
          "options": [
            "Confirming Tacit mutual understanding",
            "Confirming Trial and error",
            "Confirming Learning wisdom from the past",
            "Once in a lifetime encounter"
          ],
          "correctAnswer": "Once in a lifetime encounter"
        },
        {
          "id": "u25_l1_2",
          "type": "spell",
          "prompt": "一期一会",
          "furigana": "いちごいちえ",
          "romaji": "ichigo ichie",
          "english": "Build 'Once in a lifetime encounter'",
          "audioText": "いちごいちえ",
          "tileBank": [
            "い",
            "い",
            "ご",
            "す",
            "え",
            "ぬ",
            "ち",
            "ち"
          ],
          "correctAnswer": "いちごいちえ"
        },
        {
          "id": "u25_l1_3",
          "type": "cloze",
          "prompt": "私は以心伝心がすきです",
          "furigana": "わたしはいしんでんしんがすきです",
          "romaji": "Watashi wa ishin denshin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Tacit mutual understanding.",
          "audioText": "以心伝心",
          "clozeSentence": "これは以心伝心 {{BLANK}} す。",
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
          "id": "u25_l1_4",
          "type": "scramble",
          "prompt": "これは以心伝心です",
          "furigana": "これはいしんでんしんです",
          "romaji": "Kore wa ishin denshin desu.",
          "english": "This is Tacit mutual understanding.",
          "audioText": "これは以心伝心です",
          "scrambleTokens": [
            "それ",
            "です",
            "以心伝心",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "以心伝心",
            "です"
          ],
          "correctAnswer": "これは以心伝心です"
        },
        {
          "id": "u25_l1_5",
          "type": "speak",
          "prompt": "十人十色",
          "furigana": "じゅうにんといろ",
          "romaji": "juunin toiro",
          "english": "Pronounce: Ten people, ten colors (each unique)",
          "audioText": "じゅうにんといろ",
          "targetSpeech": "十人十色",
          "options": [
            "Ten people, ten colors (each unique)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "十人十色"
        },
        {
          "id": "u25_l1_6",
          "type": "dictate",
          "prompt": "十人十色をお願いします",
          "furigana": "じゅうにんといろをおねがいします",
          "romaji": "juunin toiro o onegaishimasu.",
          "english": "Ten people, ten colors (each unique), please.",
          "audioText": "十人十色をお願いします",
          "dictateTokens": [
            "お願いします",
            "十人十色",
            "です",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "十人十色",
            "を",
            "お願いします"
          ],
          "correctAnswer": "十人十色をお願いします"
        },
        {
          "id": "u25_l1_7",
          "type": "match",
          "prompt": "一期一会・以心伝心・十人十色・切磋琢磨",
          "furigana": "いちごいちえ・いしんでんしん・じゅうにんといろ・せっさたくま",
          "romaji": "ichigo ichie, ishin denshin, juunin toiro, sessa takuma",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いちごいちえ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "一期一会",
              "right": "Once in a lifetime encounter",
              "furigana": "いちごいちえ",
              "romaji": "ichigo ichie"
            },
            {
              "id": "p_1",
              "left": "以心伝心",
              "right": "Tacit mutual understanding",
              "furigana": "いしんでんしん",
              "romaji": "ishin denshin"
            },
            {
              "id": "p_2",
              "left": "十人十色",
              "right": "Ten people, ten colors (each unique)",
              "furigana": "じゅうにんといろ",
              "romaji": "juunin toiro"
            },
            {
              "id": "p_3",
              "left": "切磋琢磨",
              "right": "Diligently honing skills together",
              "furigana": "せっさたくま",
              "romaji": "sessa takuma"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l1_8",
          "type": "dialogue",
          "prompt": "一期一会について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "一期一会について教えていただけますか？",
          "furigana": "一期一会について教えていただけますか？",
          "romaji": "ichigo ichie ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Once in a lifetime encounter?",
          "audioText": "一期一会について教えていただけますか？",
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
      "id": "u25_l2",
      "unitId": "unit_25",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Diligently honing skills together & Adapting flexibly to the situation",
      "titleJp": "切磋琢磨・臨機応変",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "切磋琢磨",
        "臨機応変",
        "臥薪嘗胆"
      ],
      "kanjiKeywords": [
        "切",
        "磋",
        "琢",
        "磨",
        "臨",
        "機",
        "応",
        "変",
        "臥",
        "薪",
        "嘗",
        "胆"
      ],
      "items": [
        {
          "id": "u25_l2_1",
          "type": "listen",
          "prompt": "切磋琢磨",
          "furigana": "せっさたくま",
          "romaji": "sessa takuma",
          "english": "Diligently honing skills together",
          "audioText": "せっさたくま",
          "options": [
            "Tacit mutual understanding",
            "Self-sufficiency",
            "Diligently honing skills together",
            "Confirming With one voice / unanimously"
          ],
          "correctAnswer": "Diligently honing skills together"
        },
        {
          "id": "u25_l2_2",
          "type": "spell",
          "prompt": "切磋琢磨",
          "furigana": "せっさたくま",
          "romaji": "sessa takuma",
          "english": "Build 'Diligently honing skills together'",
          "audioText": "せっさたくま",
          "tileBank": [
            "ま",
            "た",
            "さ",
            "な",
            "く",
            "っ",
            "の",
            "せ"
          ],
          "correctAnswer": "せっさたくま"
        },
        {
          "id": "u25_l2_3",
          "type": "cloze",
          "prompt": "私は臨機応変がすきです",
          "furigana": "わたしはりんきおうへんがすきです",
          "romaji": "Watashi wa rinki ouhen ga suki desu.",
          "english": "Fill in the blank with the correct particle for Adapting flexibly to the situation.",
          "audioText": "臨機応変",
          "clozeSentence": "これは臨機応変 {{BLANK}} す。",
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
          "id": "u25_l2_4",
          "type": "scramble",
          "prompt": "これは臨機応変です",
          "furigana": "これはりんきおうへんです",
          "romaji": "Kore wa rinki ouhen desu.",
          "english": "This is Adapting flexibly to the situation.",
          "audioText": "これは臨機応変です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "これは",
            "です",
            "臨機応変"
          ],
          "scrambleSolution": [
            "これは",
            "臨機応変",
            "です"
          ],
          "correctAnswer": "これは臨機応変です"
        },
        {
          "id": "u25_l2_5",
          "type": "speak",
          "prompt": "臥薪嘗胆",
          "furigana": "がしんしょうたん",
          "romaji": "gashin shoutan",
          "english": "Pronounce: Enduring hardships for future triumph",
          "audioText": "がしんしょうたん",
          "targetSpeech": "臥薪嘗胆",
          "options": [
            "Enduring hardships for future triumph",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "臥薪嘗胆"
        },
        {
          "id": "u25_l2_6",
          "type": "dictate",
          "prompt": "臥薪嘗胆をお願いします",
          "furigana": "がしんしょうたんをおねがいします",
          "romaji": "gashin shoutan o onegaishimasu.",
          "english": "Enduring hardships for future triumph, please.",
          "audioText": "臥薪嘗胆をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "です",
            "臥薪嘗胆",
            "ありがとう"
          ],
          "dictateSolution": [
            "臥薪嘗胆",
            "を",
            "お願いします"
          ],
          "correctAnswer": "臥薪嘗胆をお願いします"
        },
        {
          "id": "u25_l2_7",
          "type": "match",
          "prompt": "切磋琢磨・臨機応変・臥薪嘗胆・温故知新",
          "furigana": "せっさたくま・りんきおうへん・がしんしょうたん・おんこちしん",
          "romaji": "sessa takuma, rinki ouhen, gashin shoutan, onko chishin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せっさたくま",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "切磋琢磨",
              "right": "Diligently honing skills together",
              "furigana": "せっさたくま",
              "romaji": "sessa takuma"
            },
            {
              "id": "p_1",
              "left": "臨機応変",
              "right": "Adapting flexibly to the situation",
              "furigana": "りんきおうへん",
              "romaji": "rinki ouhen"
            },
            {
              "id": "p_2",
              "left": "臥薪嘗胆",
              "right": "Enduring hardships for future triumph",
              "furigana": "がしんしょうたん",
              "romaji": "gashin shoutan"
            },
            {
              "id": "p_3",
              "left": "温故知新",
              "right": "Learning wisdom from the past",
              "furigana": "おんこちしん",
              "romaji": "onko chishin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l2_8",
          "type": "dialogue",
          "prompt": "以心伝心の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "以心伝心の準備はできていますか？",
          "furigana": "以心伝心の準備はできていますか？",
          "romaji": "ishin denshin no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Tacit mutual understanding ready?",
          "audioText": "以心伝心の準備はできていますか？",
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
      "id": "u25_l3",
      "unitId": "unit_25",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Learning wisdom from the past & Miraculous revival from near defeat",
      "titleJp": "温故知新・起死回生",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "温故知新",
        "起死回生",
        "試行錯誤"
      ],
      "kanjiKeywords": [
        "温",
        "故",
        "知",
        "新",
        "起",
        "死",
        "回",
        "生",
        "試",
        "行",
        "錯",
        "誤"
      ],
      "items": [
        {
          "id": "u25_l3_1",
          "type": "listen",
          "prompt": "温故知新",
          "furigana": "おんこちしん",
          "romaji": "onko chishin",
          "english": "Learning wisdom from the past",
          "audioText": "おんこちしん",
          "options": [
            "Ten people, ten colors (each unique)",
            "Substantially identical with minor differences",
            "Learning wisdom from the past",
            "Confirming Enduring hardships for future triumph"
          ],
          "correctAnswer": "Learning wisdom from the past"
        },
        {
          "id": "u25_l3_2",
          "type": "spell",
          "prompt": "温故知新",
          "furigana": "おんこちしん",
          "romaji": "onko chishin",
          "english": "Build 'Learning wisdom from the past'",
          "audioText": "おんこちしん",
          "tileBank": [
            "ん",
            "ち",
            "ん",
            "こ",
            "お",
            "を",
            "け",
            "し"
          ],
          "correctAnswer": "おんこちしん"
        },
        {
          "id": "u25_l3_3",
          "type": "cloze",
          "prompt": "私は起死回生がすきです",
          "furigana": "わたしはきしかいせいがすきです",
          "romaji": "Watashi wa kishi kaisei ga suki desu.",
          "english": "Fill in the blank with the correct particle for Miraculous revival from near defeat.",
          "audioText": "起死回生",
          "clozeSentence": "これは起死回生 {{BLANK}} す。",
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
          "id": "u25_l3_4",
          "type": "scramble",
          "prompt": "これは起死回生です",
          "furigana": "これはきしかいせいです",
          "romaji": "Kore wa kishi kaisei desu.",
          "english": "This is Miraculous revival from near defeat.",
          "audioText": "これは起死回生です",
          "scrambleTokens": [
            "これは",
            "起死回生",
            "それ",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "起死回生",
            "です"
          ],
          "correctAnswer": "これは起死回生です"
        },
        {
          "id": "u25_l3_5",
          "type": "speak",
          "prompt": "試行錯誤",
          "furigana": "しこうさくご",
          "romaji": "shikou sakugo",
          "english": "Pronounce: Trial and error",
          "audioText": "しこうさくご",
          "targetSpeech": "試行錯誤",
          "options": [
            "Trial and error",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "試行錯誤"
        },
        {
          "id": "u25_l3_6",
          "type": "dictate",
          "prompt": "試行錯誤をお願いします",
          "furigana": "しこうさくごをおねがいします",
          "romaji": "shikou sakugo o onegaishimasu.",
          "english": "Trial and error, please.",
          "audioText": "試行錯誤をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "試行錯誤",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "試行錯誤",
            "を",
            "お願いします"
          ],
          "correctAnswer": "試行錯誤をお願いします"
        },
        {
          "id": "u25_l3_7",
          "type": "match",
          "prompt": "温故知新・起死回生・試行錯誤・本末転倒",
          "furigana": "おんこちしん・きしかいせい・しこうさくご・ほんまつてんとう",
          "romaji": "onko chishin, kishi kaisei, shikou sakugo, honmatsu tentou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おんこちしん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "温故知新",
              "right": "Learning wisdom from the past",
              "furigana": "おんこちしん",
              "romaji": "onko chishin"
            },
            {
              "id": "p_1",
              "left": "起死回生",
              "right": "Miraculous revival from near defeat",
              "furigana": "きしかいせい",
              "romaji": "kishi kaisei"
            },
            {
              "id": "p_2",
              "left": "試行錯誤",
              "right": "Trial and error",
              "furigana": "しこうさくご",
              "romaji": "shikou sakugo"
            },
            {
              "id": "p_3",
              "left": "本末転倒",
              "right": "Putting cart before horse",
              "furigana": "ほんまつてんとう",
              "romaji": "honmatsu tentou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l3_8",
          "type": "dialogue",
          "prompt": "十人十色についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "十人十色についてどう思われますか？",
          "furigana": "十人十色についてどう思われますか？",
          "romaji": "juunin toiro ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Ten people, ten colors (each unique)?",
          "audioText": "十人十色についてどう思われますか？",
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
      "id": "u25_l4",
      "unitId": "unit_25",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Putting cart before horse & With one voice / unanimously",
      "titleJp": "本末転倒・異口同音",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "本末転倒",
        "異口同音",
        "日進月歩"
      ],
      "kanjiKeywords": [
        "本",
        "末",
        "転",
        "倒",
        "異",
        "口",
        "同",
        "音",
        "日",
        "進",
        "月",
        "歩"
      ],
      "items": [
        {
          "id": "u25_l4_1",
          "type": "listen",
          "prompt": "本末転倒",
          "furigana": "ほんまつてんとう",
          "romaji": "honmatsu tentou",
          "english": "Putting cart before horse",
          "audioText": "ほんまつてんとう",
          "options": [
            "Substantially identical with minor differences",
            "Confirming Substantially identical with minor differences",
            "Confirming Trial and error",
            "Putting cart before horse"
          ],
          "correctAnswer": "Putting cart before horse"
        },
        {
          "id": "u25_l4_2",
          "type": "spell",
          "prompt": "異口同音",
          "furigana": "いくどうおん",
          "romaji": "iku douon",
          "english": "Build 'With one voice / unanimously'",
          "audioText": "いくどうおん",
          "tileBank": [
            "く",
            "い",
            "ど",
            "み",
            "う",
            "ゆ",
            "お",
            "ん"
          ],
          "correctAnswer": "いくどうおん"
        },
        {
          "id": "u25_l4_3",
          "type": "cloze",
          "prompt": "私は異口同音がすきです",
          "furigana": "わたしはいくどうおんがすきです",
          "romaji": "Watashi wa iku douon ga suki desu.",
          "english": "Fill in the blank with the correct particle for With one voice / unanimously.",
          "audioText": "異口同音",
          "clozeSentence": "これは異口同音 {{BLANK}} す。",
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
          "id": "u25_l4_4",
          "type": "scramble",
          "prompt": "これは異口同音です",
          "furigana": "これはいくどうおんです",
          "romaji": "Kore wa iku douon desu.",
          "english": "This is With one voice / unanimously.",
          "audioText": "これは異口同音です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "それ",
            "これは",
            "異口同音"
          ],
          "scrambleSolution": [
            "これは",
            "異口同音",
            "です"
          ],
          "correctAnswer": "これは異口同音です"
        },
        {
          "id": "u25_l4_5",
          "type": "speak",
          "prompt": "日進月歩",
          "furigana": "にっしんげっぽ",
          "romaji": "nisshin geppo",
          "english": "Pronounce: Steady rapid progress",
          "audioText": "にっしんげっぽ",
          "targetSpeech": "日進月歩",
          "options": [
            "Steady rapid progress",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "日進月歩"
        },
        {
          "id": "u25_l4_6",
          "type": "dictate",
          "prompt": "日進月歩をお願いします",
          "furigana": "にっしんげっぽをおねがいします",
          "romaji": "nisshin geppo o onegaishimasu.",
          "english": "Steady rapid progress, please.",
          "audioText": "日進月歩をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "を",
            "日進月歩",
            "お願いします"
          ],
          "dictateSolution": [
            "日進月歩",
            "を",
            "お願いします"
          ],
          "correctAnswer": "日進月歩をお願いします"
        },
        {
          "id": "u25_l4_7",
          "type": "match",
          "prompt": "本末転倒・異口同音・日進月歩・自給自足",
          "furigana": "ほんまつてんとう・いくどうおん・にっしんげっぽ・じきゅうじそく",
          "romaji": "honmatsu tentou, iku douon, nisshin geppo, jikyuu jisoku",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ほんまつてんとう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "本末転倒",
              "right": "Putting cart before horse",
              "furigana": "ほんまつてんとう",
              "romaji": "honmatsu tentou"
            },
            {
              "id": "p_1",
              "left": "異口同音",
              "right": "With one voice / unanimously",
              "furigana": "いくどうおん",
              "romaji": "iku douon"
            },
            {
              "id": "p_2",
              "left": "日進月歩",
              "right": "Steady rapid progress",
              "furigana": "にっしんげっぽ",
              "romaji": "nisshin geppo"
            },
            {
              "id": "p_3",
              "left": "自給自足",
              "right": "Self-sufficiency",
              "furigana": "じきゅうじそく",
              "romaji": "jikyuu jisoku"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l4_8",
          "type": "dialogue",
          "prompt": "次は切磋琢磨に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は切磋琢磨に進みましょう。",
          "furigana": "次は切磋琢磨に進みましょう。",
          "romaji": "Tsugi wa sessa takuma ni susumimashou.",
          "english": "Speaker: Let's proceed to Diligently honing skills together next.",
          "audioText": "次は切磋琢磨に進みましょう。",
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
      "id": "u25_l5",
      "unitId": "unit_25",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Self-sufficiency & Substantially identical with minor differences",
      "titleJp": "自給自足・大同小異",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "自給自足",
        "大同小異",
        "電光石火"
      ],
      "kanjiKeywords": [
        "自",
        "給",
        "自",
        "足",
        "大",
        "同",
        "小",
        "異",
        "電",
        "光",
        "石",
        "火"
      ],
      "items": [
        {
          "id": "u25_l5_1",
          "type": "listen",
          "prompt": "自給自足",
          "furigana": "じきゅうじそく",
          "romaji": "jikyuu jisoku",
          "english": "Self-sufficiency",
          "audioText": "じきゅうじそく",
          "options": [
            "Confirming Once in a lifetime encounter",
            "Confirming Learning wisdom from the past",
            "Confirming Miraculous revival from near defeat",
            "Self-sufficiency"
          ],
          "correctAnswer": "Self-sufficiency"
        },
        {
          "id": "u25_l5_2",
          "type": "spell",
          "prompt": "自給自足",
          "furigana": "じきゅうじそく",
          "romaji": "jikyuu jisoku",
          "english": "Build 'Self-sufficiency'",
          "audioText": "じきゅうじそく",
          "tileBank": [
            "く",
            "じ",
            "う",
            "あ",
            "そ",
            "ゅ",
            "き",
            "じ"
          ],
          "correctAnswer": "じきゅうじそく"
        },
        {
          "id": "u25_l5_3",
          "type": "cloze",
          "prompt": "私は大同小異がすきです",
          "furigana": "わたしはだいどうしょういがすきです",
          "romaji": "Watashi wa daidou shoui ga suki desu.",
          "english": "Fill in the blank with the correct particle for Substantially identical with minor differences.",
          "audioText": "大同小異",
          "clozeSentence": "これは大同小異 {{BLANK}} す。",
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
          "id": "u25_l5_4",
          "type": "scramble",
          "prompt": "これは大同小異です",
          "furigana": "これはだいどうしょういです",
          "romaji": "Kore wa daidou shoui desu.",
          "english": "This is Substantially identical with minor differences.",
          "audioText": "これは大同小異です",
          "scrambleTokens": [
            "これは",
            "それ",
            "大同小異",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "大同小異",
            "です"
          ],
          "correctAnswer": "これは大同小異です"
        },
        {
          "id": "u25_l5_5",
          "type": "speak",
          "prompt": "電光石火",
          "furigana": "でんこうせっか",
          "romaji": "denkou sekka",
          "english": "Pronounce: Fast as lightning",
          "audioText": "でんこうせっか",
          "targetSpeech": "電光石火",
          "options": [
            "Fast as lightning",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "電光石火"
        },
        {
          "id": "u25_l5_6",
          "type": "dictate",
          "prompt": "電光石火をお願いします",
          "furigana": "でんこうせっかをおねがいします",
          "romaji": "denkou sekka o onegaishimasu.",
          "english": "Fast as lightning, please.",
          "audioText": "電光石火をお願いします",
          "dictateTokens": [
            "を",
            "電光石火",
            "お願いします",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "電光石火",
            "を",
            "お願いします"
          ],
          "correctAnswer": "電光石火をお願いします"
        },
        {
          "id": "u25_l5_7",
          "type": "match",
          "prompt": "自給自足・大同小異・電光石火・一期一会の確認",
          "furigana": "じきゅうじそく・だいどうしょうい・でんこうせっか・いちごいちえのかくにん",
          "romaji": "jikyuu jisoku, daidou shoui, denkou sekka, ichigo ichie no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じきゅうじそく",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "自給自足",
              "right": "Self-sufficiency",
              "furigana": "じきゅうじそく",
              "romaji": "jikyuu jisoku"
            },
            {
              "id": "p_1",
              "left": "大同小異",
              "right": "Substantially identical with minor differences",
              "furigana": "だいどうしょうい",
              "romaji": "daidou shoui"
            },
            {
              "id": "p_2",
              "left": "電光石火",
              "right": "Fast as lightning",
              "furigana": "でんこうせっか",
              "romaji": "denkou sekka"
            },
            {
              "id": "p_3",
              "left": "一期一会の確認",
              "right": "Confirming Once in a lifetime encounter",
              "furigana": "いちごいちえのかくにん",
              "romaji": "ichigo ichie no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l5_8",
          "type": "dialogue",
          "prompt": "一期一会について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "一期一会について教えていただけますか？",
          "furigana": "一期一会について教えていただけますか？",
          "romaji": "ichigo ichie ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Once in a lifetime encounter?",
          "audioText": "一期一会について教えていただけますか？",
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
      "id": "u25_l6",
      "unitId": "unit_25",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Once in a lifetime encounter & Confirming Tacit mutual understanding",
      "titleJp": "一期一会の確認・以心伝心の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "一期一会の確認",
        "以心伝心の確認",
        "十人十色の確認"
      ],
      "kanjiKeywords": [
        "一",
        "期",
        "一",
        "会",
        "確",
        "認",
        "以",
        "心",
        "伝",
        "心",
        "確",
        "認",
        "十",
        "人",
        "十",
        "色",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u25_l6_1",
          "type": "listen",
          "prompt": "一期一会の確認",
          "furigana": "いちごいちえのかくにん",
          "romaji": "ichigo ichie no kakunin",
          "english": "Confirming Once in a lifetime encounter",
          "audioText": "いちごいちえのかくにん",
          "options": [
            "Confirming Once in a lifetime encounter",
            "Miraculous revival from near defeat",
            "Substantially identical with minor differences",
            "Ten people, ten colors (each unique)"
          ],
          "correctAnswer": "Confirming Once in a lifetime encounter"
        },
        {
          "id": "u25_l6_2",
          "type": "spell",
          "prompt": "一期一会の確認",
          "furigana": "いちごいちえのかくにん",
          "romaji": "ichigo ichie no kakunin",
          "english": "Build 'Confirming Once in a lifetime encounter'",
          "audioText": "いちごいちえのかくにん",
          "tileBank": [
            "い",
            "ち",
            "か",
            "え",
            "い",
            "ち",
            "ご",
            "の"
          ],
          "correctAnswer": "いちごいちえのかくにん"
        },
        {
          "id": "u25_l6_3",
          "type": "cloze",
          "prompt": "私は以心伝心の確認がすきです",
          "furigana": "わたしはいしんでんしんのかくにんがすきです",
          "romaji": "Watashi wa ishin denshin no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Tacit mutual understanding.",
          "audioText": "以心伝心の確認",
          "clozeSentence": "これは以心伝心の確認 {{BLANK}} す。",
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
          "id": "u25_l6_4",
          "type": "scramble",
          "prompt": "これは以心伝心の確認です",
          "furigana": "これはいしんでんしんのかくにんです",
          "romaji": "Kore wa ishin denshin no kakunin desu.",
          "english": "This is Confirming Tacit mutual understanding.",
          "audioText": "これは以心伝心の確認です",
          "scrambleTokens": [
            "以心伝心の確認",
            "それ",
            "これは",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "以心伝心の確認",
            "です"
          ],
          "correctAnswer": "これは以心伝心の確認です"
        },
        {
          "id": "u25_l6_5",
          "type": "speak",
          "prompt": "十人十色の確認",
          "furigana": "じゅうにんといろのかくにん",
          "romaji": "juunin toiro no kakunin",
          "english": "Pronounce: Confirming Ten people, ten colors (each unique)",
          "audioText": "じゅうにんといろのかくにん",
          "targetSpeech": "十人十色の確認",
          "options": [
            "Confirming Ten people, ten colors (each unique)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "十人十色の確認"
        },
        {
          "id": "u25_l6_6",
          "type": "dictate",
          "prompt": "十人十色の確認をお願いします",
          "furigana": "じゅうにんといろのかくにんをおねがいします",
          "romaji": "juunin toiro no kakunin o onegaishimasu.",
          "english": "Confirming Ten people, ten colors (each unique), please.",
          "audioText": "十人十色の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "お願いします",
            "十人十色の確認",
            "を",
            "です"
          ],
          "dictateSolution": [
            "十人十色の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "十人十色の確認をお願いします"
        },
        {
          "id": "u25_l6_7",
          "type": "match",
          "prompt": "一期一会の確認・以心伝心の確認・十人十色の確認・切磋琢磨の確認",
          "furigana": "いちごいちえのかくにん・いしんでんしんのかくにん・じゅうにんといろのかくにん・せっさたくまのかくにん",
          "romaji": "ichigo ichie no kakunin, ishin denshin no kakunin, juunin toiro no kakunin, sessa takuma no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いちごいちえのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "一期一会の確認",
              "right": "Confirming Once in a lifetime encounter",
              "furigana": "いちごいちえのかくにん",
              "romaji": "ichigo ichie no kakunin"
            },
            {
              "id": "p_1",
              "left": "以心伝心の確認",
              "right": "Confirming Tacit mutual understanding",
              "furigana": "いしんでんしんのかくにん",
              "romaji": "ishin denshin no kakunin"
            },
            {
              "id": "p_2",
              "left": "十人十色の確認",
              "right": "Confirming Ten people, ten colors (each unique)",
              "furigana": "じゅうにんといろのかくにん",
              "romaji": "juunin toiro no kakunin"
            },
            {
              "id": "p_3",
              "left": "切磋琢磨の確認",
              "right": "Confirming Diligently honing skills together",
              "furigana": "せっさたくまのかくにん",
              "romaji": "sessa takuma no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l6_8",
          "type": "dialogue",
          "prompt": "以心伝心の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "以心伝心の準備はできていますか？",
          "furigana": "以心伝心の準備はできていますか？",
          "romaji": "ishin denshin no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Tacit mutual understanding ready?",
          "audioText": "以心伝心の準備はできていますか？",
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
      "id": "u25_l7",
      "unitId": "unit_25",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Diligently honing skills together & Confirming Adapting flexibly to the situation",
      "titleJp": "切磋琢磨の確認・臨機応変の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "切磋琢磨の確認",
        "臨機応変の確認",
        "臥薪嘗胆の確認"
      ],
      "kanjiKeywords": [
        "切",
        "磋",
        "琢",
        "磨",
        "確",
        "認",
        "臨",
        "機",
        "応",
        "変",
        "確",
        "認",
        "臥",
        "薪",
        "嘗",
        "胆",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u25_l7_1",
          "type": "listen",
          "prompt": "切磋琢磨の確認",
          "furigana": "せっさたくまのかくにん",
          "romaji": "sessa takuma no kakunin",
          "english": "Confirming Diligently honing skills together",
          "audioText": "せっさたくまのかくにん",
          "options": [
            "Confirming Enduring hardships for future triumph",
            "Confirming Diligently honing skills together",
            "Miraculous revival from near defeat",
            "Fast as lightning"
          ],
          "correctAnswer": "Confirming Diligently honing skills together"
        },
        {
          "id": "u25_l7_2",
          "type": "spell",
          "prompt": "切磋琢磨の確認",
          "furigana": "せっさたくまのかくにん",
          "romaji": "sessa takuma no kakunin",
          "english": "Build 'Confirming Diligently honing skills together'",
          "audioText": "せっさたくまのかくにん",
          "tileBank": [
            "く",
            "せ",
            "ま",
            "か",
            "の",
            "た",
            "っ",
            "さ"
          ],
          "correctAnswer": "せっさたくまのかくにん"
        },
        {
          "id": "u25_l7_3",
          "type": "cloze",
          "prompt": "私は臨機応変の確認がすきです",
          "furigana": "わたしはりんきおうへんのかくにんがすきです",
          "romaji": "Watashi wa rinki ouhen no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Adapting flexibly to the situation.",
          "audioText": "臨機応変の確認",
          "clozeSentence": "これは臨機応変の確認 {{BLANK}} す。",
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
          "id": "u25_l7_4",
          "type": "scramble",
          "prompt": "これは臨機応変の確認です",
          "furigana": "これはりんきおうへんのかくにんです",
          "romaji": "Kore wa rinki ouhen no kakunin desu.",
          "english": "This is Confirming Adapting flexibly to the situation.",
          "audioText": "これは臨機応変の確認です",
          "scrambleTokens": [
            "ではありません",
            "臨機応変の確認",
            "です",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "臨機応変の確認",
            "です"
          ],
          "correctAnswer": "これは臨機応変の確認です"
        },
        {
          "id": "u25_l7_5",
          "type": "speak",
          "prompt": "臥薪嘗胆の確認",
          "furigana": "がしんしょうたんのかくにん",
          "romaji": "gashin shoutan no kakunin",
          "english": "Pronounce: Confirming Enduring hardships for future triumph",
          "audioText": "がしんしょうたんのかくにん",
          "targetSpeech": "臥薪嘗胆の確認",
          "options": [
            "Confirming Enduring hardships for future triumph",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "臥薪嘗胆の確認"
        },
        {
          "id": "u25_l7_6",
          "type": "dictate",
          "prompt": "臥薪嘗胆の確認をお願いします",
          "furigana": "がしんしょうたんのかくにんをおねがいします",
          "romaji": "gashin shoutan no kakunin o onegaishimasu.",
          "english": "Confirming Enduring hardships for future triumph, please.",
          "audioText": "臥薪嘗胆の確認をお願いします",
          "dictateTokens": [
            "臥薪嘗胆の確認",
            "ありがとう",
            "お願いします",
            "を",
            "です"
          ],
          "dictateSolution": [
            "臥薪嘗胆の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "臥薪嘗胆の確認をお願いします"
        },
        {
          "id": "u25_l7_7",
          "type": "match",
          "prompt": "切磋琢磨の確認・臨機応変の確認・臥薪嘗胆の確認・温故知新の確認",
          "furigana": "せっさたくまのかくにん・りんきおうへんのかくにん・がしんしょうたんのかくにん・おんこちしんのかくにん",
          "romaji": "sessa takuma no kakunin, rinki ouhen no kakunin, gashin shoutan no kakunin, onko chishin no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せっさたくまのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "切磋琢磨の確認",
              "right": "Confirming Diligently honing skills together",
              "furigana": "せっさたくまのかくにん",
              "romaji": "sessa takuma no kakunin"
            },
            {
              "id": "p_1",
              "left": "臨機応変の確認",
              "right": "Confirming Adapting flexibly to the situation",
              "furigana": "りんきおうへんのかくにん",
              "romaji": "rinki ouhen no kakunin"
            },
            {
              "id": "p_2",
              "left": "臥薪嘗胆の確認",
              "right": "Confirming Enduring hardships for future triumph",
              "furigana": "がしんしょうたんのかくにん",
              "romaji": "gashin shoutan no kakunin"
            },
            {
              "id": "p_3",
              "left": "温故知新の確認",
              "right": "Confirming Learning wisdom from the past",
              "furigana": "おんこちしんのかくにん",
              "romaji": "onko chishin no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l7_8",
          "type": "dialogue",
          "prompt": "十人十色についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "十人十色についてどう思われますか？",
          "furigana": "十人十色についてどう思われますか？",
          "romaji": "juunin toiro ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Ten people, ten colors (each unique)?",
          "audioText": "十人十色についてどう思われますか？",
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
      "id": "u25_l8",
      "unitId": "unit_25",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Learning wisdom from the past & Confirming Miraculous revival from near defeat",
      "titleJp": "温故知新の確認・起死回生の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "温故知新の確認",
        "起死回生の確認",
        "試行錯誤の確認"
      ],
      "kanjiKeywords": [
        "温",
        "故",
        "知",
        "新",
        "確",
        "認",
        "起",
        "死",
        "回",
        "生",
        "確",
        "認",
        "試",
        "行",
        "錯",
        "誤",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u25_l8_1",
          "type": "listen",
          "prompt": "温故知新の確認",
          "furigana": "おんこちしんのかくにん",
          "romaji": "onko chishin no kakunin",
          "english": "Confirming Learning wisdom from the past",
          "audioText": "おんこちしんのかくにん",
          "options": [
            "Confirming Trial and error",
            "Confirming Learning wisdom from the past",
            "Steady rapid progress",
            "Trial and error"
          ],
          "correctAnswer": "Confirming Learning wisdom from the past"
        },
        {
          "id": "u25_l8_2",
          "type": "spell",
          "prompt": "温故知新の確認",
          "furigana": "おんこちしんのかくにん",
          "romaji": "onko chishin no kakunin",
          "english": "Build 'Confirming Learning wisdom from the past'",
          "audioText": "おんこちしんのかくにん",
          "tileBank": [
            "ん",
            "の",
            "か",
            "ち",
            "ん",
            "し",
            "お",
            "こ"
          ],
          "correctAnswer": "おんこちしんのかくにん"
        },
        {
          "id": "u25_l8_3",
          "type": "cloze",
          "prompt": "私は起死回生の確認がすきです",
          "furigana": "わたしはきしかいせいのかくにんがすきです",
          "romaji": "Watashi wa kishi kaisei no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Miraculous revival from near defeat.",
          "audioText": "起死回生の確認",
          "clozeSentence": "これは起死回生の確認 {{BLANK}} す。",
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
          "id": "u25_l8_4",
          "type": "scramble",
          "prompt": "これは起死回生の確認です",
          "furigana": "これはきしかいせいのかくにんです",
          "romaji": "Kore wa kishi kaisei no kakunin desu.",
          "english": "This is Confirming Miraculous revival from near defeat.",
          "audioText": "これは起死回生の確認です",
          "scrambleTokens": [
            "です",
            "それ",
            "起死回生の確認",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "起死回生の確認",
            "です"
          ],
          "correctAnswer": "これは起死回生の確認です"
        },
        {
          "id": "u25_l8_5",
          "type": "speak",
          "prompt": "試行錯誤の確認",
          "furigana": "しこうさくごのかくにん",
          "romaji": "shikou sakugo no kakunin",
          "english": "Pronounce: Confirming Trial and error",
          "audioText": "しこうさくごのかくにん",
          "targetSpeech": "試行錯誤の確認",
          "options": [
            "Confirming Trial and error",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "試行錯誤の確認"
        },
        {
          "id": "u25_l8_6",
          "type": "dictate",
          "prompt": "試行錯誤の確認をお願いします",
          "furigana": "しこうさくごのかくにんをおねがいします",
          "romaji": "shikou sakugo no kakunin o onegaishimasu.",
          "english": "Confirming Trial and error, please.",
          "audioText": "試行錯誤の確認をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "試行錯誤の確認",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "試行錯誤の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "試行錯誤の確認をお願いします"
        },
        {
          "id": "u25_l8_7",
          "type": "match",
          "prompt": "温故知新の確認・起死回生の確認・試行錯誤の確認・本末転倒の確認",
          "furigana": "おんこちしんのかくにん・きしかいせいのかくにん・しこうさくごのかくにん・ほんまつてんとうのかくにん",
          "romaji": "onko chishin no kakunin, kishi kaisei no kakunin, shikou sakugo no kakunin, honmatsu tentou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おんこちしんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "温故知新の確認",
              "right": "Confirming Learning wisdom from the past",
              "furigana": "おんこちしんのかくにん",
              "romaji": "onko chishin no kakunin"
            },
            {
              "id": "p_1",
              "left": "起死回生の確認",
              "right": "Confirming Miraculous revival from near defeat",
              "furigana": "きしかいせいのかくにん",
              "romaji": "kishi kaisei no kakunin"
            },
            {
              "id": "p_2",
              "left": "試行錯誤の確認",
              "right": "Confirming Trial and error",
              "furigana": "しこうさくごのかくにん",
              "romaji": "shikou sakugo no kakunin"
            },
            {
              "id": "p_3",
              "left": "本末転倒の確認",
              "right": "Confirming Putting cart before horse",
              "furigana": "ほんまつてんとうのかくにん",
              "romaji": "honmatsu tentou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l8_8",
          "type": "dialogue",
          "prompt": "次は切磋琢磨に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は切磋琢磨に進みましょう。",
          "furigana": "次は切磋琢磨に進みましょう。",
          "romaji": "Tsugi wa sessa takuma ni susumimashou.",
          "english": "Speaker: Let's proceed to Diligently honing skills together next.",
          "audioText": "次は切磋琢磨に進みましょう。",
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
      "id": "u25_l9",
      "unitId": "unit_25",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Putting cart before horse & Confirming With one voice / unanimously",
      "titleJp": "本末転倒の確認・異口同音の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "本末転倒の確認",
        "異口同音の確認",
        "日進月歩の確認"
      ],
      "kanjiKeywords": [
        "本",
        "末",
        "転",
        "倒",
        "確",
        "認",
        "異",
        "口",
        "同",
        "音",
        "確",
        "認",
        "日",
        "進",
        "月",
        "歩",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u25_l9_1",
          "type": "listen",
          "prompt": "本末転倒の確認",
          "furigana": "ほんまつてんとうのかくにん",
          "romaji": "honmatsu tentou no kakunin",
          "english": "Confirming Putting cart before horse",
          "audioText": "ほんまつてんとうのかくにん",
          "options": [
            "Confirming Enduring hardships for future triumph",
            "Trial and error",
            "Confirming Putting cart before horse",
            "Confirming Fast as lightning"
          ],
          "correctAnswer": "Confirming Putting cart before horse"
        },
        {
          "id": "u25_l9_2",
          "type": "spell",
          "prompt": "本末転倒の確認",
          "furigana": "ほんまつてんとうのかくにん",
          "romaji": "honmatsu tentou no kakunin",
          "english": "Build 'Confirming Putting cart before horse'",
          "audioText": "ほんまつてんとうのかくにん",
          "tileBank": [
            "と",
            "て",
            "ん",
            "つ",
            "ほ",
            "ま",
            "ん",
            "う"
          ],
          "correctAnswer": "ほんまつてんとうのかくにん"
        },
        {
          "id": "u25_l9_3",
          "type": "cloze",
          "prompt": "私は異口同音の確認がすきです",
          "furigana": "わたしはいくどうおんのかくにんがすきです",
          "romaji": "Watashi wa iku douon no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming With one voice / unanimously.",
          "audioText": "異口同音の確認",
          "clozeSentence": "これは異口同音の確認 {{BLANK}} す。",
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
          "id": "u25_l9_4",
          "type": "scramble",
          "prompt": "これは異口同音の確認です",
          "furigana": "これはいくどうおんのかくにんです",
          "romaji": "Kore wa iku douon no kakunin desu.",
          "english": "This is Confirming With one voice / unanimously.",
          "audioText": "これは異口同音の確認です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "これは",
            "異口同音の確認",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "異口同音の確認",
            "です"
          ],
          "correctAnswer": "これは異口同音の確認です"
        },
        {
          "id": "u25_l9_5",
          "type": "speak",
          "prompt": "日進月歩の確認",
          "furigana": "にっしんげっぽのかくにん",
          "romaji": "nisshin geppo no kakunin",
          "english": "Pronounce: Confirming Steady rapid progress",
          "audioText": "にっしんげっぽのかくにん",
          "targetSpeech": "日進月歩の確認",
          "options": [
            "Confirming Steady rapid progress",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "日進月歩の確認"
        },
        {
          "id": "u25_l9_6",
          "type": "dictate",
          "prompt": "日進月歩の確認をお願いします",
          "furigana": "にっしんげっぽのかくにんをおねがいします",
          "romaji": "nisshin geppo no kakunin o onegaishimasu.",
          "english": "Confirming Steady rapid progress, please.",
          "audioText": "日進月歩の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "を",
            "日進月歩の確認",
            "ありがとう"
          ],
          "dictateSolution": [
            "日進月歩の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "日進月歩の確認をお願いします"
        },
        {
          "id": "u25_l9_7",
          "type": "match",
          "prompt": "本末転倒の確認・異口同音の確認・日進月歩の確認・自給自足の確認",
          "furigana": "ほんまつてんとうのかくにん・いくどうおんのかくにん・にっしんげっぽのかくにん・じきゅうじそくのかくにん",
          "romaji": "honmatsu tentou no kakunin, iku douon no kakunin, nisshin geppo no kakunin, jikyuu jisoku no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ほんまつてんとうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "本末転倒の確認",
              "right": "Confirming Putting cart before horse",
              "furigana": "ほんまつてんとうのかくにん",
              "romaji": "honmatsu tentou no kakunin"
            },
            {
              "id": "p_1",
              "left": "異口同音の確認",
              "right": "Confirming With one voice / unanimously",
              "furigana": "いくどうおんのかくにん",
              "romaji": "iku douon no kakunin"
            },
            {
              "id": "p_2",
              "left": "日進月歩の確認",
              "right": "Confirming Steady rapid progress",
              "furigana": "にっしんげっぽのかくにん",
              "romaji": "nisshin geppo no kakunin"
            },
            {
              "id": "p_3",
              "left": "自給自足の確認",
              "right": "Confirming Self-sufficiency",
              "furigana": "じきゅうじそくのかくにん",
              "romaji": "jikyuu jisoku no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l9_8",
          "type": "dialogue",
          "prompt": "一期一会について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "一期一会について教えていただけますか？",
          "furigana": "一期一会について教えていただけますか？",
          "romaji": "ichigo ichie ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Once in a lifetime encounter?",
          "audioText": "一期一会について教えていただけますか？",
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
      "id": "u25_l10",
      "unitId": "unit_25",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Self-sufficiency & Confirming Substantially identical with minor differences",
      "titleJp": "自給自足の確認・大同小異の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "自給自足の確認",
        "大同小異の確認",
        "電光石火の確認"
      ],
      "kanjiKeywords": [
        "自",
        "給",
        "自",
        "足",
        "確",
        "認",
        "大",
        "同",
        "小",
        "異",
        "確",
        "認",
        "電",
        "光",
        "石",
        "火",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u25_l10_1",
          "type": "listen",
          "prompt": "自給自足の確認",
          "furigana": "じきゅうじそくのかくにん",
          "romaji": "jikyuu jisoku no kakunin",
          "english": "Confirming Self-sufficiency",
          "audioText": "じきゅうじそくのかくにん",
          "options": [
            "Confirming Self-sufficiency",
            "Trial and error",
            "Confirming Steady rapid progress",
            "Confirming Enduring hardships for future triumph"
          ],
          "correctAnswer": "Confirming Self-sufficiency"
        },
        {
          "id": "u25_l10_2",
          "type": "spell",
          "prompt": "自給自足の確認",
          "furigana": "じきゅうじそくのかくにん",
          "romaji": "jikyuu jisoku no kakunin",
          "english": "Build 'Confirming Self-sufficiency'",
          "audioText": "じきゅうじそくのかくにん",
          "tileBank": [
            "く",
            "じ",
            "の",
            "う",
            "そ",
            "じ",
            "き",
            "ゅ"
          ],
          "correctAnswer": "じきゅうじそくのかくにん"
        },
        {
          "id": "u25_l10_3",
          "type": "cloze",
          "prompt": "私は大同小異の確認がすきです",
          "furigana": "わたしはだいどうしょういのかくにんがすきです",
          "romaji": "Watashi wa daidou shoui no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Substantially identical with minor differences.",
          "audioText": "大同小異の確認",
          "clozeSentence": "これは大同小異の確認 {{BLANK}} す。",
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
          "id": "u25_l10_4",
          "type": "scramble",
          "prompt": "これは大同小異の確認です",
          "furigana": "これはだいどうしょういのかくにんです",
          "romaji": "Kore wa daidou shoui no kakunin desu.",
          "english": "This is Confirming Substantially identical with minor differences.",
          "audioText": "これは大同小異の確認です",
          "scrambleTokens": [
            "それ",
            "これは",
            "大同小異の確認",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "大同小異の確認",
            "です"
          ],
          "correctAnswer": "これは大同小異の確認です"
        },
        {
          "id": "u25_l10_5",
          "type": "speak",
          "prompt": "電光石火の確認",
          "furigana": "でんこうせっかのかくにん",
          "romaji": "denkou sekka no kakunin",
          "english": "Pronounce: Confirming Fast as lightning",
          "audioText": "でんこうせっかのかくにん",
          "targetSpeech": "電光石火の確認",
          "options": [
            "Confirming Fast as lightning",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "電光石火の確認"
        },
        {
          "id": "u25_l10_6",
          "type": "dictate",
          "prompt": "電光石火の確認をお願いします",
          "furigana": "でんこうせっかのかくにんをおねがいします",
          "romaji": "denkou sekka no kakunin o onegaishimasu.",
          "english": "Confirming Fast as lightning, please.",
          "audioText": "電光石火の確認をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "ありがとう",
            "電光石火の確認",
            "を"
          ],
          "dictateSolution": [
            "電光石火の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "電光石火の確認をお願いします"
        },
        {
          "id": "u25_l10_7",
          "type": "match",
          "prompt": "自給自足の確認・大同小異の確認・電光石火の確認・一期一会の確認",
          "furigana": "じきゅうじそくのかくにん・だいどうしょういのかくにん・でんこうせっかのかくにん・いちごいちえのかくにん",
          "romaji": "jikyuu jisoku no kakunin, daidou shoui no kakunin, denkou sekka no kakunin, ichigo ichie no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じきゅうじそくのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "自給自足の確認",
              "right": "Confirming Self-sufficiency",
              "furigana": "じきゅうじそくのかくにん",
              "romaji": "jikyuu jisoku no kakunin"
            },
            {
              "id": "p_1",
              "left": "大同小異の確認",
              "right": "Confirming Substantially identical with minor differences",
              "furigana": "だいどうしょういのかくにん",
              "romaji": "daidou shoui no kakunin"
            },
            {
              "id": "p_2",
              "left": "電光石火の確認",
              "right": "Confirming Fast as lightning",
              "furigana": "でんこうせっかのかくにん",
              "romaji": "denkou sekka no kakunin"
            },
            {
              "id": "p_3",
              "left": "一期一会の確認",
              "right": "Confirming Once in a lifetime encounter",
              "furigana": "いちごいちえのかくにん",
              "romaji": "ichigo ichie no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l10_8",
          "type": "dialogue",
          "prompt": "以心伝心の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "以心伝心の準備はできていますか？",
          "furigana": "以心伝心の準備はできていますか？",
          "romaji": "ishin denshin no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Tacit mutual understanding ready?",
          "audioText": "以心伝心の準備はできていますか？",
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
      "id": "u25_l11",
      "unitId": "unit_25",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Once in a lifetime encounter & Confirming Tacit mutual understanding",
      "titleJp": "一期一会の確認・以心伝心の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "一期一会の確認",
        "以心伝心の確認",
        "十人十色の確認"
      ],
      "kanjiKeywords": [
        "一",
        "期",
        "一",
        "会",
        "確",
        "認",
        "以",
        "心",
        "伝",
        "心",
        "確",
        "認",
        "十",
        "人",
        "十",
        "色",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u25_l11_1",
          "type": "listen",
          "prompt": "一期一会の確認",
          "furigana": "いちごいちえのかくにん",
          "romaji": "ichigo ichie no kakunin",
          "english": "Confirming Once in a lifetime encounter",
          "audioText": "いちごいちえのかくにん",
          "options": [
            "Confirming Once in a lifetime encounter",
            "Confirming Enduring hardships for future triumph",
            "Self-sufficiency",
            "Confirming Tacit mutual understanding"
          ],
          "correctAnswer": "Confirming Once in a lifetime encounter"
        },
        {
          "id": "u25_l11_2",
          "type": "spell",
          "prompt": "一期一会の確認",
          "furigana": "いちごいちえのかくにん",
          "romaji": "ichigo ichie no kakunin",
          "english": "Build 'Confirming Once in a lifetime encounter'",
          "audioText": "いちごいちえのかくにん",
          "tileBank": [
            "い",
            "え",
            "ち",
            "い",
            "か",
            "ち",
            "ご",
            "の"
          ],
          "correctAnswer": "いちごいちえのかくにん"
        },
        {
          "id": "u25_l11_3",
          "type": "cloze",
          "prompt": "私は以心伝心の確認がすきです",
          "furigana": "わたしはいしんでんしんのかくにんがすきです",
          "romaji": "Watashi wa ishin denshin no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Tacit mutual understanding.",
          "audioText": "以心伝心の確認",
          "clozeSentence": "これは以心伝心の確認 {{BLANK}} す。",
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
          "id": "u25_l11_4",
          "type": "scramble",
          "prompt": "これは以心伝心の確認です",
          "furigana": "これはいしんでんしんのかくにんです",
          "romaji": "Kore wa ishin denshin no kakunin desu.",
          "english": "This is Confirming Tacit mutual understanding.",
          "audioText": "これは以心伝心の確認です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "それ",
            "以心伝心の確認",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "以心伝心の確認",
            "です"
          ],
          "correctAnswer": "これは以心伝心の確認です"
        },
        {
          "id": "u25_l11_5",
          "type": "speak",
          "prompt": "十人十色の確認",
          "furigana": "じゅうにんといろのかくにん",
          "romaji": "juunin toiro no kakunin",
          "english": "Pronounce: Confirming Ten people, ten colors (each unique)",
          "audioText": "じゅうにんといろのかくにん",
          "targetSpeech": "十人十色の確認",
          "options": [
            "Confirming Ten people, ten colors (each unique)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "十人十色の確認"
        },
        {
          "id": "u25_l11_6",
          "type": "dictate",
          "prompt": "十人十色の確認をお願いします",
          "furigana": "じゅうにんといろのかくにんをおねがいします",
          "romaji": "juunin toiro no kakunin o onegaishimasu.",
          "english": "Confirming Ten people, ten colors (each unique), please.",
          "audioText": "十人十色の確認をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "お願いします",
            "を",
            "十人十色の確認"
          ],
          "dictateSolution": [
            "十人十色の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "十人十色の確認をお願いします"
        },
        {
          "id": "u25_l11_7",
          "type": "match",
          "prompt": "一期一会の確認・以心伝心の確認・十人十色の確認・切磋琢磨の確認",
          "furigana": "いちごいちえのかくにん・いしんでんしんのかくにん・じゅうにんといろのかくにん・せっさたくまのかくにん",
          "romaji": "ichigo ichie no kakunin, ishin denshin no kakunin, juunin toiro no kakunin, sessa takuma no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いちごいちえのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "一期一会の確認",
              "right": "Confirming Once in a lifetime encounter",
              "furigana": "いちごいちえのかくにん",
              "romaji": "ichigo ichie no kakunin"
            },
            {
              "id": "p_1",
              "left": "以心伝心の確認",
              "right": "Confirming Tacit mutual understanding",
              "furigana": "いしんでんしんのかくにん",
              "romaji": "ishin denshin no kakunin"
            },
            {
              "id": "p_2",
              "left": "十人十色の確認",
              "right": "Confirming Ten people, ten colors (each unique)",
              "furigana": "じゅうにんといろのかくにん",
              "romaji": "juunin toiro no kakunin"
            },
            {
              "id": "p_3",
              "left": "切磋琢磨の確認",
              "right": "Confirming Diligently honing skills together",
              "furigana": "せっさたくまのかくにん",
              "romaji": "sessa takuma no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l11_8",
          "type": "dialogue",
          "prompt": "十人十色についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "十人十色についてどう思われますか？",
          "furigana": "十人十色についてどう思われますか？",
          "romaji": "juunin toiro ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Ten people, ten colors (each unique)?",
          "audioText": "十人十色についてどう思われますか？",
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
      "id": "u25_l12",
      "unitId": "unit_25",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Diligently honing skills together & Confirming Adapting flexibly to the situation",
      "titleJp": "切磋琢磨の確認・臨機応変の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "切磋琢磨の確認",
        "臨機応変の確認",
        "臥薪嘗胆の確認"
      ],
      "kanjiKeywords": [
        "切",
        "磋",
        "琢",
        "磨",
        "確",
        "認",
        "臨",
        "機",
        "応",
        "変",
        "確",
        "認",
        "臥",
        "薪",
        "嘗",
        "胆",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u25_l12_1",
          "type": "listen",
          "prompt": "切磋琢磨の確認",
          "furigana": "せっさたくまのかくにん",
          "romaji": "sessa takuma no kakunin",
          "english": "Confirming Diligently honing skills together",
          "audioText": "せっさたくまのかくにん",
          "options": [
            "Once in a lifetime encounter",
            "Confirming With one voice / unanimously",
            "Confirming Miraculous revival from near defeat",
            "Confirming Diligently honing skills together"
          ],
          "correctAnswer": "Confirming Diligently honing skills together"
        },
        {
          "id": "u25_l12_2",
          "type": "spell",
          "prompt": "切磋琢磨の確認",
          "furigana": "せっさたくまのかくにん",
          "romaji": "sessa takuma no kakunin",
          "english": "Build 'Confirming Diligently honing skills together'",
          "audioText": "せっさたくまのかくにん",
          "tileBank": [
            "か",
            "ま",
            "く",
            "の",
            "た",
            "せ",
            "さ",
            "っ"
          ],
          "correctAnswer": "せっさたくまのかくにん"
        },
        {
          "id": "u25_l12_3",
          "type": "cloze",
          "prompt": "私は臨機応変の確認がすきです",
          "furigana": "わたしはりんきおうへんのかくにんがすきです",
          "romaji": "Watashi wa rinki ouhen no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Adapting flexibly to the situation.",
          "audioText": "臨機応変の確認",
          "clozeSentence": "これは臨機応変の確認 {{BLANK}} す。",
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
          "id": "u25_l12_4",
          "type": "scramble",
          "prompt": "これは臨機応変の確認です",
          "furigana": "これはりんきおうへんのかくにんです",
          "romaji": "Kore wa rinki ouhen no kakunin desu.",
          "english": "This is Confirming Adapting flexibly to the situation.",
          "audioText": "これは臨機応変の確認です",
          "scrambleTokens": [
            "それ",
            "臨機応変の確認",
            "ではありません",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "臨機応変の確認",
            "です"
          ],
          "correctAnswer": "これは臨機応変の確認です"
        },
        {
          "id": "u25_l12_5",
          "type": "speak",
          "prompt": "臥薪嘗胆の確認",
          "furigana": "がしんしょうたんのかくにん",
          "romaji": "gashin shoutan no kakunin",
          "english": "Pronounce: Confirming Enduring hardships for future triumph",
          "audioText": "がしんしょうたんのかくにん",
          "targetSpeech": "臥薪嘗胆の確認",
          "options": [
            "Confirming Enduring hardships for future triumph",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "臥薪嘗胆の確認"
        },
        {
          "id": "u25_l12_6",
          "type": "dictate",
          "prompt": "臥薪嘗胆の確認をお願いします",
          "furigana": "がしんしょうたんのかくにんをおねがいします",
          "romaji": "gashin shoutan no kakunin o onegaishimasu.",
          "english": "Confirming Enduring hardships for future triumph, please.",
          "audioText": "臥薪嘗胆の確認をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "です",
            "ありがとう",
            "臥薪嘗胆の確認"
          ],
          "dictateSolution": [
            "臥薪嘗胆の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "臥薪嘗胆の確認をお願いします"
        },
        {
          "id": "u25_l12_7",
          "type": "match",
          "prompt": "切磋琢磨の確認・臨機応変の確認・臥薪嘗胆の確認・一期一会",
          "furigana": "せっさたくまのかくにん・りんきおうへんのかくにん・がしんしょうたんのかくにん・いちごいちえ",
          "romaji": "sessa takuma no kakunin, rinki ouhen no kakunin, gashin shoutan no kakunin, ichigo ichie",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せっさたくまのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "切磋琢磨の確認",
              "right": "Confirming Diligently honing skills together",
              "furigana": "せっさたくまのかくにん",
              "romaji": "sessa takuma no kakunin"
            },
            {
              "id": "p_1",
              "left": "臨機応変の確認",
              "right": "Confirming Adapting flexibly to the situation",
              "furigana": "りんきおうへんのかくにん",
              "romaji": "rinki ouhen no kakunin"
            },
            {
              "id": "p_2",
              "left": "臥薪嘗胆の確認",
              "right": "Confirming Enduring hardships for future triumph",
              "furigana": "がしんしょうたんのかくにん",
              "romaji": "gashin shoutan no kakunin"
            },
            {
              "id": "p_3",
              "left": "一期一会",
              "right": "Once in a lifetime encounter",
              "furigana": "いちごいちえ",
              "romaji": "ichigo ichie"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l12_8",
          "type": "dialogue",
          "prompt": "次は切磋琢磨に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は切磋琢磨に進みましょう。",
          "furigana": "次は切磋琢磨に進みましょう。",
          "romaji": "Tsugi wa sessa takuma ni susumimashou.",
          "english": "Speaker: Let's proceed to Diligently honing skills together next.",
          "audioText": "次は切磋琢磨に進みましょう。",
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
      "id": "u25_l13",
      "unitId": "unit_25",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Once in a lifetime encounter & Tacit mutual understanding",
      "titleJp": "一期一会・以心伝心",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "一期一会",
        "以心伝心",
        "十人十色"
      ],
      "kanjiKeywords": [
        "一",
        "期",
        "一",
        "会",
        "以",
        "心",
        "伝",
        "心",
        "十",
        "人",
        "十",
        "色"
      ],
      "items": [
        {
          "id": "u25_l13_1",
          "type": "listen",
          "prompt": "一期一会",
          "furigana": "いちごいちえ",
          "romaji": "ichigo ichie",
          "english": "Once in a lifetime encounter",
          "audioText": "いちごいちえ",
          "options": [
            "Enduring hardships for future triumph",
            "Confirming Ten people, ten colors (each unique)",
            "Confirming Adapting flexibly to the situation",
            "Once in a lifetime encounter"
          ],
          "correctAnswer": "Once in a lifetime encounter"
        },
        {
          "id": "u25_l13_2",
          "type": "spell",
          "prompt": "一期一会",
          "furigana": "いちごいちえ",
          "romaji": "ichigo ichie",
          "english": "Build 'Once in a lifetime encounter'",
          "audioText": "いちごいちえ",
          "tileBank": [
            "そ",
            "え",
            "い",
            "と",
            "ち",
            "い",
            "ち",
            "ご"
          ],
          "correctAnswer": "いちごいちえ"
        },
        {
          "id": "u25_l13_3",
          "type": "cloze",
          "prompt": "私は以心伝心がすきです",
          "furigana": "わたしはいしんでんしんがすきです",
          "romaji": "Watashi wa ishin denshin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Tacit mutual understanding.",
          "audioText": "以心伝心",
          "clozeSentence": "これは以心伝心 {{BLANK}} す。",
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
          "id": "u25_l13_4",
          "type": "scramble",
          "prompt": "これは以心伝心です",
          "furigana": "これはいしんでんしんです",
          "romaji": "Kore wa ishin denshin desu.",
          "english": "This is Tacit mutual understanding.",
          "audioText": "これは以心伝心です",
          "scrambleTokens": [
            "以心伝心",
            "これは",
            "それ",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "以心伝心",
            "です"
          ],
          "correctAnswer": "これは以心伝心です"
        },
        {
          "id": "u25_l13_5",
          "type": "speak",
          "prompt": "十人十色",
          "furigana": "じゅうにんといろ",
          "romaji": "juunin toiro",
          "english": "Pronounce: Ten people, ten colors (each unique)",
          "audioText": "じゅうにんといろ",
          "targetSpeech": "十人十色",
          "options": [
            "Ten people, ten colors (each unique)",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "十人十色"
        },
        {
          "id": "u25_l13_6",
          "type": "dictate",
          "prompt": "十人十色をお願いします",
          "furigana": "じゅうにんといろをおねがいします",
          "romaji": "juunin toiro o onegaishimasu.",
          "english": "Ten people, ten colors (each unique), please.",
          "audioText": "十人十色をお願いします",
          "dictateTokens": [
            "お願いします",
            "を",
            "十人十色",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "十人十色",
            "を",
            "お願いします"
          ],
          "correctAnswer": "十人十色をお願いします"
        },
        {
          "id": "u25_l13_7",
          "type": "match",
          "prompt": "一期一会・以心伝心・十人十色・切磋琢磨",
          "furigana": "いちごいちえ・いしんでんしん・じゅうにんといろ・せっさたくま",
          "romaji": "ichigo ichie, ishin denshin, juunin toiro, sessa takuma",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いちごいちえ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "一期一会",
              "right": "Once in a lifetime encounter",
              "furigana": "いちごいちえ",
              "romaji": "ichigo ichie"
            },
            {
              "id": "p_1",
              "left": "以心伝心",
              "right": "Tacit mutual understanding",
              "furigana": "いしんでんしん",
              "romaji": "ishin denshin"
            },
            {
              "id": "p_2",
              "left": "十人十色",
              "right": "Ten people, ten colors (each unique)",
              "furigana": "じゅうにんといろ",
              "romaji": "juunin toiro"
            },
            {
              "id": "p_3",
              "left": "切磋琢磨",
              "right": "Diligently honing skills together",
              "furigana": "せっさたくま",
              "romaji": "sessa takuma"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l13_8",
          "type": "dialogue",
          "prompt": "一期一会について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "一期一会について教えていただけますか？",
          "furigana": "一期一会について教えていただけますか？",
          "romaji": "ichigo ichie ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Once in a lifetime encounter?",
          "audioText": "一期一会について教えていただけますか？",
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
      "id": "u25_l14",
      "unitId": "unit_25",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Diligently honing skills together & Adapting flexibly to the situation",
      "titleJp": "切磋琢磨・臨機応変",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "切磋琢磨",
        "臨機応変",
        "臥薪嘗胆"
      ],
      "kanjiKeywords": [
        "切",
        "磋",
        "琢",
        "磨",
        "臨",
        "機",
        "応",
        "変",
        "臥",
        "薪",
        "嘗",
        "胆"
      ],
      "items": [
        {
          "id": "u25_l14_1",
          "type": "listen",
          "prompt": "切磋琢磨",
          "furigana": "せっさたくま",
          "romaji": "sessa takuma",
          "english": "Diligently honing skills together",
          "audioText": "せっさたくま",
          "options": [
            "Diligently honing skills together",
            "Confirming Ten people, ten colors (each unique)",
            "Miraculous revival from near defeat",
            "Enduring hardships for future triumph"
          ],
          "correctAnswer": "Diligently honing skills together"
        },
        {
          "id": "u25_l14_2",
          "type": "spell",
          "prompt": "切磋琢磨",
          "furigana": "せっさたくま",
          "romaji": "sessa takuma",
          "english": "Build 'Diligently honing skills together'",
          "audioText": "せっさたくま",
          "tileBank": [
            "く",
            "る",
            "さ",
            "か",
            "せ",
            "っ",
            "た",
            "ま"
          ],
          "correctAnswer": "せっさたくま"
        },
        {
          "id": "u25_l14_3",
          "type": "cloze",
          "prompt": "私は臨機応変がすきです",
          "furigana": "わたしはりんきおうへんがすきです",
          "romaji": "Watashi wa rinki ouhen ga suki desu.",
          "english": "Fill in the blank with the correct particle for Adapting flexibly to the situation.",
          "audioText": "臨機応変",
          "clozeSentence": "これは臨機応変 {{BLANK}} す。",
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
          "id": "u25_l14_4",
          "type": "scramble",
          "prompt": "これは臨機応変です",
          "furigana": "これはりんきおうへんです",
          "romaji": "Kore wa rinki ouhen desu.",
          "english": "This is Adapting flexibly to the situation.",
          "audioText": "これは臨機応変です",
          "scrambleTokens": [
            "それ",
            "これは",
            "です",
            "臨機応変",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "臨機応変",
            "です"
          ],
          "correctAnswer": "これは臨機応変です"
        },
        {
          "id": "u25_l14_5",
          "type": "speak",
          "prompt": "臥薪嘗胆",
          "furigana": "がしんしょうたん",
          "romaji": "gashin shoutan",
          "english": "Pronounce: Enduring hardships for future triumph",
          "audioText": "がしんしょうたん",
          "targetSpeech": "臥薪嘗胆",
          "options": [
            "Enduring hardships for future triumph",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "臥薪嘗胆"
        },
        {
          "id": "u25_l14_6",
          "type": "dictate",
          "prompt": "臥薪嘗胆をお願いします",
          "furigana": "がしんしょうたんをおねがいします",
          "romaji": "gashin shoutan o onegaishimasu.",
          "english": "Enduring hardships for future triumph, please.",
          "audioText": "臥薪嘗胆をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "お願いします",
            "です",
            "臥薪嘗胆"
          ],
          "dictateSolution": [
            "臥薪嘗胆",
            "を",
            "お願いします"
          ],
          "correctAnswer": "臥薪嘗胆をお願いします"
        },
        {
          "id": "u25_l14_7",
          "type": "match",
          "prompt": "切磋琢磨・臨機応変・臥薪嘗胆・温故知新",
          "furigana": "せっさたくま・りんきおうへん・がしんしょうたん・おんこちしん",
          "romaji": "sessa takuma, rinki ouhen, gashin shoutan, onko chishin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "せっさたくま",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "切磋琢磨",
              "right": "Diligently honing skills together",
              "furigana": "せっさたくま",
              "romaji": "sessa takuma"
            },
            {
              "id": "p_1",
              "left": "臨機応変",
              "right": "Adapting flexibly to the situation",
              "furigana": "りんきおうへん",
              "romaji": "rinki ouhen"
            },
            {
              "id": "p_2",
              "left": "臥薪嘗胆",
              "right": "Enduring hardships for future triumph",
              "furigana": "がしんしょうたん",
              "romaji": "gashin shoutan"
            },
            {
              "id": "p_3",
              "left": "温故知新",
              "right": "Learning wisdom from the past",
              "furigana": "おんこちしん",
              "romaji": "onko chishin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l14_8",
          "type": "dialogue",
          "prompt": "以心伝心の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "以心伝心の準備はできていますか？",
          "furigana": "以心伝心の準備はできていますか？",
          "romaji": "ishin denshin no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Tacit mutual understanding ready?",
          "audioText": "以心伝心の準備はできていますか？",
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
      "id": "u25_l15",
      "unitId": "unit_25",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 25 Master Exam",
      "iconType": "test",
      "title": "Unit 25 Master Exam",
      "titleJp": "第25週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "温故知新",
        "起死回生",
        "試行錯誤"
      ],
      "kanjiKeywords": [
        "温",
        "故",
        "知",
        "新",
        "起",
        "死",
        "回",
        "生",
        "試",
        "行",
        "錯",
        "誤"
      ],
      "items": [
        {
          "id": "u25_l15_1",
          "type": "listen",
          "prompt": "温故知新",
          "furigana": "おんこちしん",
          "romaji": "onko chishin",
          "english": "Learning wisdom from the past",
          "audioText": "おんこちしん",
          "options": [
            "Confirming Adapting flexibly to the situation",
            "Learning wisdom from the past",
            "Adapting flexibly to the situation",
            "Confirming Enduring hardships for future triumph"
          ],
          "correctAnswer": "Learning wisdom from the past"
        },
        {
          "id": "u25_l15_2",
          "type": "spell",
          "prompt": "温故知新",
          "furigana": "おんこちしん",
          "romaji": "onko chishin",
          "english": "Build 'Learning wisdom from the past'",
          "audioText": "おんこちしん",
          "tileBank": [
            "ろ",
            "ん",
            "ち",
            "へ",
            "お",
            "こ",
            "し",
            "ん"
          ],
          "correctAnswer": "おんこちしん"
        },
        {
          "id": "u25_l15_3",
          "type": "cloze",
          "prompt": "私は起死回生がすきです",
          "furigana": "わたしはきしかいせいがすきです",
          "romaji": "Watashi wa kishi kaisei ga suki desu.",
          "english": "Fill in the blank with the correct particle for Miraculous revival from near defeat.",
          "audioText": "起死回生",
          "clozeSentence": "これは起死回生 {{BLANK}} す。",
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
          "id": "u25_l15_4",
          "type": "scramble",
          "prompt": "これは起死回生です",
          "furigana": "これはきしかいせいです",
          "romaji": "Kore wa kishi kaisei desu.",
          "english": "This is Miraculous revival from near defeat.",
          "audioText": "これは起死回生です",
          "scrambleTokens": [
            "それ",
            "です",
            "これは",
            "ではありません",
            "起死回生"
          ],
          "scrambleSolution": [
            "これは",
            "起死回生",
            "です"
          ],
          "correctAnswer": "これは起死回生です"
        },
        {
          "id": "u25_l15_5",
          "type": "speak",
          "prompt": "試行錯誤",
          "furigana": "しこうさくご",
          "romaji": "shikou sakugo",
          "english": "Pronounce: Trial and error",
          "audioText": "しこうさくご",
          "targetSpeech": "試行錯誤",
          "options": [
            "Trial and error",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "試行錯誤"
        },
        {
          "id": "u25_l15_6",
          "type": "dictate",
          "prompt": "試行錯誤をお願いします",
          "furigana": "しこうさくごをおねがいします",
          "romaji": "shikou sakugo o onegaishimasu.",
          "english": "Trial and error, please.",
          "audioText": "試行錯誤をお願いします",
          "dictateTokens": [
            "お願いします",
            "を",
            "ありがとう",
            "試行錯誤",
            "です"
          ],
          "dictateSolution": [
            "試行錯誤",
            "を",
            "お願いします"
          ],
          "correctAnswer": "試行錯誤をお願いします"
        },
        {
          "id": "u25_l15_7",
          "type": "match",
          "prompt": "温故知新・起死回生・試行錯誤・本末転倒",
          "furigana": "おんこちしん・きしかいせい・しこうさくご・ほんまつてんとう",
          "romaji": "onko chishin, kishi kaisei, shikou sakugo, honmatsu tentou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "おんこちしん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "温故知新",
              "right": "Learning wisdom from the past",
              "furigana": "おんこちしん",
              "romaji": "onko chishin"
            },
            {
              "id": "p_1",
              "left": "起死回生",
              "right": "Miraculous revival from near defeat",
              "furigana": "きしかいせい",
              "romaji": "kishi kaisei"
            },
            {
              "id": "p_2",
              "left": "試行錯誤",
              "right": "Trial and error",
              "furigana": "しこうさくご",
              "romaji": "shikou sakugo"
            },
            {
              "id": "p_3",
              "left": "本末転倒",
              "right": "Putting cart before horse",
              "furigana": "ほんまつてんとう",
              "romaji": "honmatsu tentou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u25_l15_8",
          "type": "dialogue",
          "prompt": "十人十色についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "十人十色についてどう思われますか？",
          "furigana": "十人十色についてどう思われますか？",
          "romaji": "juunin toiro ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Ten people, ten colors (each unique)?",
          "audioText": "十人十色についてどう思われますか？",
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
    "id": "gate_unit_25",
    "unitId": "unit_25",
    "title": "Unit 25 Mastery Checkpoint",
    "titleJp": "第25週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u25_l1_1",
        "type": "listen",
        "prompt": "一期一会",
        "furigana": "いちごいちえ",
        "romaji": "ichigo ichie",
        "english": "Once in a lifetime encounter",
        "audioText": "いちごいちえ",
        "options": [
          "Confirming Tacit mutual understanding",
          "Confirming Trial and error",
          "Confirming Learning wisdom from the past",
          "Once in a lifetime encounter"
        ],
        "correctAnswer": "Once in a lifetime encounter"
      },
      {
        "id": "u25_l1_2",
        "type": "spell",
        "prompt": "一期一会",
        "furigana": "いちごいちえ",
        "romaji": "ichigo ichie",
        "english": "Build 'Once in a lifetime encounter'",
        "audioText": "いちごいちえ",
        "tileBank": [
          "い",
          "い",
          "ご",
          "す",
          "え",
          "ぬ",
          "ち",
          "ち"
        ],
        "correctAnswer": "いちごいちえ"
      },
      {
        "id": "u25_l3_1",
        "type": "listen",
        "prompt": "温故知新",
        "furigana": "おんこちしん",
        "romaji": "onko chishin",
        "english": "Learning wisdom from the past",
        "audioText": "おんこちしん",
        "options": [
          "Ten people, ten colors (each unique)",
          "Substantially identical with minor differences",
          "Learning wisdom from the past",
          "Confirming Enduring hardships for future triumph"
        ],
        "correctAnswer": "Learning wisdom from the past"
      },
      {
        "id": "u25_l3_2",
        "type": "spell",
        "prompt": "温故知新",
        "furigana": "おんこちしん",
        "romaji": "onko chishin",
        "english": "Build 'Learning wisdom from the past'",
        "audioText": "おんこちしん",
        "tileBank": [
          "ん",
          "ち",
          "ん",
          "こ",
          "お",
          "を",
          "け",
          "し"
        ],
        "correctAnswer": "おんこちしん"
      },
      {
        "id": "u25_l5_1",
        "type": "listen",
        "prompt": "自給自足",
        "furigana": "じきゅうじそく",
        "romaji": "jikyuu jisoku",
        "english": "Self-sufficiency",
        "audioText": "じきゅうじそく",
        "options": [
          "Confirming Once in a lifetime encounter",
          "Confirming Learning wisdom from the past",
          "Confirming Miraculous revival from near defeat",
          "Self-sufficiency"
        ],
        "correctAnswer": "Self-sufficiency"
      },
      {
        "id": "u25_l5_2",
        "type": "spell",
        "prompt": "自給自足",
        "furigana": "じきゅうじそく",
        "romaji": "jikyuu jisoku",
        "english": "Build 'Self-sufficiency'",
        "audioText": "じきゅうじそく",
        "tileBank": [
          "く",
          "じ",
          "う",
          "あ",
          "そ",
          "ゅ",
          "き",
          "じ"
        ],
        "correctAnswer": "じきゅうじそく"
      },
      {
        "id": "u25_l7_1",
        "type": "listen",
        "prompt": "切磋琢磨の確認",
        "furigana": "せっさたくまのかくにん",
        "romaji": "sessa takuma no kakunin",
        "english": "Confirming Diligently honing skills together",
        "audioText": "せっさたくまのかくにん",
        "options": [
          "Confirming Enduring hardships for future triumph",
          "Confirming Diligently honing skills together",
          "Miraculous revival from near defeat",
          "Fast as lightning"
        ],
        "correctAnswer": "Confirming Diligently honing skills together"
      },
      {
        "id": "u25_l7_2",
        "type": "spell",
        "prompt": "切磋琢磨の確認",
        "furigana": "せっさたくまのかくにん",
        "romaji": "sessa takuma no kakunin",
        "english": "Build 'Confirming Diligently honing skills together'",
        "audioText": "せっさたくまのかくにん",
        "tileBank": [
          "く",
          "せ",
          "ま",
          "か",
          "の",
          "た",
          "っ",
          "さ"
        ],
        "correctAnswer": "せっさたくまのかくにん"
      },
      {
        "id": "u25_l9_1",
        "type": "listen",
        "prompt": "本末転倒の確認",
        "furigana": "ほんまつてんとうのかくにん",
        "romaji": "honmatsu tentou no kakunin",
        "english": "Confirming Putting cart before horse",
        "audioText": "ほんまつてんとうのかくにん",
        "options": [
          "Confirming Enduring hardships for future triumph",
          "Trial and error",
          "Confirming Putting cart before horse",
          "Confirming Fast as lightning"
        ],
        "correctAnswer": "Confirming Putting cart before horse"
      },
      {
        "id": "u25_l9_2",
        "type": "spell",
        "prompt": "本末転倒の確認",
        "furigana": "ほんまつてんとうのかくにん",
        "romaji": "honmatsu tentou no kakunin",
        "english": "Build 'Confirming Putting cart before horse'",
        "audioText": "ほんまつてんとうのかくにん",
        "tileBank": [
          "と",
          "て",
          "ん",
          "つ",
          "ほ",
          "ま",
          "ん",
          "う"
        ],
        "correctAnswer": "ほんまつてんとうのかくにん"
      },
      {
        "id": "u25_l11_1",
        "type": "listen",
        "prompt": "一期一会の確認",
        "furigana": "いちごいちえのかくにん",
        "romaji": "ichigo ichie no kakunin",
        "english": "Confirming Once in a lifetime encounter",
        "audioText": "いちごいちえのかくにん",
        "options": [
          "Confirming Once in a lifetime encounter",
          "Confirming Enduring hardships for future triumph",
          "Self-sufficiency",
          "Confirming Tacit mutual understanding"
        ],
        "correctAnswer": "Confirming Once in a lifetime encounter"
      },
      {
        "id": "u25_l11_2",
        "type": "spell",
        "prompt": "一期一会の確認",
        "furigana": "いちごいちえのかくにん",
        "romaji": "ichigo ichie no kakunin",
        "english": "Build 'Confirming Once in a lifetime encounter'",
        "audioText": "いちごいちえのかくにん",
        "tileBank": [
          "い",
          "え",
          "ち",
          "い",
          "か",
          "ち",
          "ご",
          "の"
        ],
        "correctAnswer": "いちごいちえのかくにん"
      }
    ]
  }
};
