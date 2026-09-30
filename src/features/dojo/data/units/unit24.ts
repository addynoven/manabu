import type { DojoUnit } from "../../models/dojo.model";

export const unit24: DojoUnit = {
  "id": "unit_24",
  "unitNumber": 24,
  "title": "Advanced Contrast & Rhetoric",
  "titleJp": "高度な対比と論理展開",
  "description": "Construct rigorous argumentative prose with ~ni mo kakawarazu, ~dokoroka, and ~ni hanshite.",
  "icon": "🖋️",
  "themeColor": "#9333EA",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u24_l1",
      "unitId": "unit_24",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Despite / in spite of & Far from / let alone",
      "titleJp": "にもかかわらず・どころか",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "にもかかわらず",
        "どころか",
        "に反して"
      ],
      "kanjiKeywords": [
        "反"
      ],
      "items": [
        {
          "id": "u24_l1_1",
          "type": "listen",
          "prompt": "にもかかわらず",
          "furigana": "にもかかわらず",
          "romaji": "ni mo kakawarazu",
          "english": "Despite / in spite of",
          "audioText": "にもかかわらず",
          "options": [
            "Confirming Logic / reasoning",
            "Unconditionally / sweeps all as one",
            "Assertion / contention",
            "Despite / in spite of"
          ],
          "correctAnswer": "Despite / in spite of"
        },
        {
          "id": "u24_l1_2",
          "type": "spell",
          "prompt": "どころか",
          "furigana": "どころか",
          "romaji": "dokoroka",
          "english": "Build 'Far from / let alone'",
          "audioText": "どころか",
          "tileBank": [
            "ひ",
            "ん",
            "ど",
            "き",
            "ろ",
            "か",
            "こ",
            "わ"
          ],
          "correctAnswer": "どころか"
        },
        {
          "id": "u24_l1_3",
          "type": "cloze",
          "prompt": "私はどころかがすきです",
          "furigana": "わたしはどころかがすきです",
          "romaji": "Watashi wa dokoroka ga suki desu.",
          "english": "Fill in the blank with the correct particle for Far from / let alone.",
          "audioText": "どころか",
          "clozeSentence": "これはどころか {{BLANK}} す。",
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
          "id": "u24_l1_4",
          "type": "scramble",
          "prompt": "これはどころかです",
          "furigana": "これはどころかです",
          "romaji": "Kore wa dokoroka desu.",
          "english": "This is Far from / let alone.",
          "audioText": "これはどころかです",
          "scrambleTokens": [
            "それ",
            "これは",
            "です",
            "ではありません",
            "どころか"
          ],
          "scrambleSolution": [
            "これは",
            "どころか",
            "です"
          ],
          "correctAnswer": "これはどころかです"
        },
        {
          "id": "u24_l1_5",
          "type": "speak",
          "prompt": "に反して",
          "furigana": "にはんして",
          "romaji": "ni hanshite",
          "english": "Pronounce: Contrary to",
          "audioText": "にはんして",
          "targetSpeech": "に反して",
          "options": [
            "Contrary to",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "に反して"
        },
        {
          "id": "u24_l1_6",
          "type": "dictate",
          "prompt": "に反してをお願いします",
          "furigana": "にはんしてをおねがいします",
          "romaji": "ni hanshite o onegaishimasu.",
          "english": "Contrary to, please.",
          "audioText": "に反してをお願いします",
          "dictateTokens": [
            "に反して",
            "を",
            "お願いします",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "に反して",
            "を",
            "お願いします"
          ],
          "correctAnswer": "に反してをお願いします"
        },
        {
          "id": "u24_l1_7",
          "type": "match",
          "prompt": "にもかかわらず・どころか・に反して・反面",
          "furigana": "にもかかわらず・どころか・にはんして・はんめん",
          "romaji": "ni mo kakawarazu, dokoroka, ni hanshite, hanmen",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "にもかかわらず",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "にもかかわらず",
              "right": "Despite / in spite of",
              "furigana": "にもかかわらず",
              "romaji": "ni mo kakawarazu"
            },
            {
              "id": "p_1",
              "left": "どころか",
              "right": "Far from / let alone",
              "furigana": "どころか",
              "romaji": "dokoroka"
            },
            {
              "id": "p_2",
              "left": "に反して",
              "right": "Contrary to",
              "furigana": "にはんして",
              "romaji": "ni hanshite"
            },
            {
              "id": "p_3",
              "left": "反面",
              "right": "On the other hand",
              "furigana": "はんめん",
              "romaji": "hanmen"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l1_8",
          "type": "dialogue",
          "prompt": "にもかかわらずについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "にもかかわらずについて教えていただけますか？",
          "furigana": "にもかかわらずについて教えていただけますか？",
          "romaji": "ni mo kakawarazu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Despite / in spite of?",
          "audioText": "にもかかわらずについて教えていただけますか？",
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
      "id": "u24_l2",
      "unitId": "unit_24",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "On the other hand & Assertion / contention",
      "titleJp": "反面・主張",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "反面",
        "主張",
        "根拠"
      ],
      "kanjiKeywords": [
        "反",
        "面",
        "主",
        "張",
        "根",
        "拠"
      ],
      "items": [
        {
          "id": "u24_l2_1",
          "type": "listen",
          "prompt": "反面",
          "furigana": "はんめん",
          "romaji": "hanmen",
          "english": "On the other hand",
          "audioText": "はんめん",
          "options": [
            "Subjective",
            "On the other hand",
            "Confirming Consistency / integrity",
            "Objective"
          ],
          "correctAnswer": "On the other hand"
        },
        {
          "id": "u24_l2_2",
          "type": "spell",
          "prompt": "反面",
          "furigana": "はんめん",
          "romaji": "hanmen",
          "english": "Build 'On the other hand'",
          "audioText": "はんめん",
          "tileBank": [
            "に",
            "か",
            "ん",
            "め",
            "ほ",
            "は",
            "く",
            "ん"
          ],
          "correctAnswer": "はんめん"
        },
        {
          "id": "u24_l2_3",
          "type": "cloze",
          "prompt": "私は主張がすきです",
          "furigana": "わたしはしゅちょうがすきです",
          "romaji": "Watashi wa shuchou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Assertion / contention.",
          "audioText": "主張",
          "clozeSentence": "これは主張 {{BLANK}} す。",
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
          "id": "u24_l2_4",
          "type": "scramble",
          "prompt": "これは主張です",
          "furigana": "これはしゅちょうです",
          "romaji": "Kore wa shuchou desu.",
          "english": "This is Assertion / contention.",
          "audioText": "これは主張です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "それ",
            "主張",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "主張",
            "です"
          ],
          "correctAnswer": "これは主張です"
        },
        {
          "id": "u24_l2_5",
          "type": "speak",
          "prompt": "根拠",
          "furigana": "こんきょ",
          "romaji": "konkyo",
          "english": "Pronounce: Grounds / objective basis",
          "audioText": "こんきょ",
          "targetSpeech": "根拠",
          "options": [
            "Grounds / objective basis",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "根拠"
        },
        {
          "id": "u24_l2_6",
          "type": "dictate",
          "prompt": "根拠をお願いします",
          "furigana": "こんきょをおねがいします",
          "romaji": "konkyo o onegaishimasu.",
          "english": "Grounds / objective basis, please.",
          "audioText": "根拠をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "です",
            "お願いします",
            "根拠"
          ],
          "dictateSolution": [
            "根拠",
            "を",
            "お願いします"
          ],
          "correctAnswer": "根拠をお願いします"
        },
        {
          "id": "u24_l2_7",
          "type": "match",
          "prompt": "反面・主張・根拠・批判",
          "furigana": "はんめん・しゅちょう・こんきょ・ひはん",
          "romaji": "hanmen, shuchou, konkyo, hihan",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "はんめん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "反面",
              "right": "On the other hand",
              "furigana": "はんめん",
              "romaji": "hanmen"
            },
            {
              "id": "p_1",
              "left": "主張",
              "right": "Assertion / contention",
              "furigana": "しゅちょう",
              "romaji": "shuchou"
            },
            {
              "id": "p_2",
              "left": "根拠",
              "right": "Grounds / objective basis",
              "furigana": "こんきょ",
              "romaji": "konkyo"
            },
            {
              "id": "p_3",
              "left": "批判",
              "right": "Critique / criticism",
              "furigana": "ひはん",
              "romaji": "hihan"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l2_8",
          "type": "dialogue",
          "prompt": "どころかの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "どころかの準備はできていますか？",
          "furigana": "どころかの準備はできていますか？",
          "romaji": "dokoroka no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Far from / let alone ready?",
          "audioText": "どころかの準備はできていますか？",
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
      "id": "u24_l3",
      "unitId": "unit_24",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Critique / criticism & Valid / appropriate",
      "titleJp": "批判・妥当",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "批判",
        "妥当",
        "客観的"
      ],
      "kanjiKeywords": [
        "批",
        "判",
        "妥",
        "当",
        "客",
        "観",
        "的"
      ],
      "items": [
        {
          "id": "u24_l3_1",
          "type": "listen",
          "prompt": "批判",
          "furigana": "ひはん",
          "romaji": "hihan",
          "english": "Critique / criticism",
          "audioText": "ひはん",
          "options": [
            "Confirming Summary / synopsis",
            "Valid / appropriate",
            "Confirming Unconditionally / sweeps all as one",
            "Critique / criticism"
          ],
          "correctAnswer": "Critique / criticism"
        },
        {
          "id": "u24_l3_2",
          "type": "spell",
          "prompt": "批判",
          "furigana": "ひはん",
          "romaji": "hihan",
          "english": "Build 'Critique / criticism'",
          "audioText": "ひはん",
          "tileBank": [
            "て",
            "ね",
            "ひ",
            "は",
            "ち",
            "せ",
            "わ",
            "ん"
          ],
          "correctAnswer": "ひはん"
        },
        {
          "id": "u24_l3_3",
          "type": "cloze",
          "prompt": "私は妥当がすきです",
          "furigana": "わたしはだとうがすきです",
          "romaji": "Watashi wa datou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Valid / appropriate.",
          "audioText": "妥当",
          "clozeSentence": "これは妥当 {{BLANK}} す。",
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
          "id": "u24_l3_4",
          "type": "scramble",
          "prompt": "これは妥当です",
          "furigana": "これはだとうです",
          "romaji": "Kore wa datou desu.",
          "english": "This is Valid / appropriate.",
          "audioText": "これは妥当です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "これは",
            "妥当"
          ],
          "scrambleSolution": [
            "これは",
            "妥当",
            "です"
          ],
          "correctAnswer": "これは妥当です"
        },
        {
          "id": "u24_l3_5",
          "type": "speak",
          "prompt": "客観的",
          "furigana": "きゃっかんてき",
          "romaji": "kyakkanteki",
          "english": "Pronounce: Objective",
          "audioText": "きゃっかんてき",
          "targetSpeech": "客観的",
          "options": [
            "Objective",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "客観的"
        },
        {
          "id": "u24_l3_6",
          "type": "dictate",
          "prompt": "客観的をお願いします",
          "furigana": "きゃっかんてきをおねがいします",
          "romaji": "kyakkanteki o onegaishimasu.",
          "english": "Objective, please.",
          "audioText": "客観的をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "お願いします",
            "ありがとう",
            "客観的"
          ],
          "dictateSolution": [
            "客観的",
            "を",
            "お願いします"
          ],
          "correctAnswer": "客観的をお願いします"
        },
        {
          "id": "u24_l3_7",
          "type": "match",
          "prompt": "批判・妥当・客観的・主観的",
          "furigana": "ひはん・だとう・きゃっかんてき・しゅかんてき",
          "romaji": "hihan, datou, kyakkanteki, shukanteki",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ひはん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "批判",
              "right": "Critique / criticism",
              "furigana": "ひはん",
              "romaji": "hihan"
            },
            {
              "id": "p_1",
              "left": "妥当",
              "right": "Valid / appropriate",
              "furigana": "だとう",
              "romaji": "datou"
            },
            {
              "id": "p_2",
              "left": "客観的",
              "right": "Objective",
              "furigana": "きゃっかんてき",
              "romaji": "kyakkanteki"
            },
            {
              "id": "p_3",
              "left": "主観的",
              "right": "Subjective",
              "furigana": "しゅかんてき",
              "romaji": "shukanteki"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l3_8",
          "type": "dialogue",
          "prompt": "に反してについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "に反してについてどう思われますか？",
          "furigana": "に反してについてどう思われますか？",
          "romaji": "ni hanshite ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Contrary to?",
          "audioText": "に反してについてどう思われますか？",
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
      "id": "u24_l4",
      "unitId": "unit_24",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Subjective & Contradiction",
      "titleJp": "主観的・矛盾",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "主観的",
        "矛盾",
        "整合性"
      ],
      "kanjiKeywords": [
        "主",
        "観",
        "的",
        "矛",
        "盾",
        "整",
        "合",
        "性"
      ],
      "items": [
        {
          "id": "u24_l4_1",
          "type": "listen",
          "prompt": "主観的",
          "furigana": "しゅかんてき",
          "romaji": "shukanteki",
          "english": "Subjective",
          "audioText": "しゅかんてき",
          "options": [
            "Valid / appropriate",
            "Confirming Subjective",
            "Subjective",
            "Confirming On the other hand"
          ],
          "correctAnswer": "Subjective"
        },
        {
          "id": "u24_l4_2",
          "type": "spell",
          "prompt": "主観的",
          "furigana": "しゅかんてき",
          "romaji": "shukanteki",
          "english": "Build 'Subjective'",
          "audioText": "しゅかんてき",
          "tileBank": [
            "ゅ",
            "か",
            "く",
            "き",
            "ん",
            "し",
            "て",
            "み"
          ],
          "correctAnswer": "しゅかんてき"
        },
        {
          "id": "u24_l4_3",
          "type": "cloze",
          "prompt": "私は矛盾がすきです",
          "furigana": "わたしはむじゅんがすきです",
          "romaji": "Watashi wa mujun ga suki desu.",
          "english": "Fill in the blank with the correct particle for Contradiction.",
          "audioText": "矛盾",
          "clozeSentence": "これは矛盾 {{BLANK}} す。",
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
          "id": "u24_l4_4",
          "type": "scramble",
          "prompt": "これは矛盾です",
          "furigana": "これはむじゅんです",
          "romaji": "Kore wa mujun desu.",
          "english": "This is Contradiction.",
          "audioText": "これは矛盾です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "これは",
            "です",
            "矛盾"
          ],
          "scrambleSolution": [
            "これは",
            "矛盾",
            "です"
          ],
          "correctAnswer": "これは矛盾です"
        },
        {
          "id": "u24_l4_5",
          "type": "speak",
          "prompt": "整合性",
          "furigana": "せいごうせい",
          "romaji": "seigousei",
          "english": "Pronounce: Consistency / integrity",
          "audioText": "せいごうせい",
          "targetSpeech": "整合性",
          "options": [
            "Consistency / integrity",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "整合性"
        },
        {
          "id": "u24_l4_6",
          "type": "dictate",
          "prompt": "整合性をお願いします",
          "furigana": "せいごうせいをおねがいします",
          "romaji": "seigousei o onegaishimasu.",
          "english": "Consistency / integrity, please.",
          "audioText": "整合性をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "整合性",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "整合性",
            "を",
            "お願いします"
          ],
          "correctAnswer": "整合性をお願いします"
        },
        {
          "id": "u24_l4_7",
          "type": "match",
          "prompt": "主観的・矛盾・整合性・一概に",
          "furigana": "しゅかんてき・むじゅん・せいごうせい・いちがいに",
          "romaji": "shukanteki, mujun, seigousei, ichigai ni",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しゅかんてき",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "主観的",
              "right": "Subjective",
              "furigana": "しゅかんてき",
              "romaji": "shukanteki"
            },
            {
              "id": "p_1",
              "left": "矛盾",
              "right": "Contradiction",
              "furigana": "むじゅん",
              "romaji": "mujun"
            },
            {
              "id": "p_2",
              "left": "整合性",
              "right": "Consistency / integrity",
              "furigana": "せいごうせい",
              "romaji": "seigousei"
            },
            {
              "id": "p_3",
              "left": "一概に",
              "right": "Unconditionally / sweeps all as one",
              "furigana": "いちがいに",
              "romaji": "ichigai ni"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l4_8",
          "type": "dialogue",
          "prompt": "次は反面に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は反面に進みましょう。",
          "furigana": "次は反面に進みましょう。",
          "romaji": "Tsugi wa hanmen ni susumimashou.",
          "english": "Speaker: Let's proceed to On the other hand next.",
          "audioText": "次は反面に進みましょう。",
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
      "id": "u24_l5",
      "unitId": "unit_24",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Unconditionally / sweeps all as one & Logic / reasoning",
      "titleJp": "一概に・論理",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "一概に",
        "論理",
        "要約"
      ],
      "kanjiKeywords": [
        "一",
        "概",
        "論",
        "理",
        "要",
        "約"
      ],
      "items": [
        {
          "id": "u24_l5_1",
          "type": "listen",
          "prompt": "一概に",
          "furigana": "いちがいに",
          "romaji": "ichigai ni",
          "english": "Unconditionally / sweeps all as one",
          "audioText": "いちがいに",
          "options": [
            "Confirming Summary / synopsis",
            "Despite / in spite of",
            "Unconditionally / sweeps all as one",
            "Confirming Contrary to"
          ],
          "correctAnswer": "Unconditionally / sweeps all as one"
        },
        {
          "id": "u24_l5_2",
          "type": "spell",
          "prompt": "一概に",
          "furigana": "いちがいに",
          "romaji": "ichigai ni",
          "english": "Build 'Unconditionally / sweeps all as one'",
          "audioText": "いちがいに",
          "tileBank": [
            "け",
            "ふ",
            "ち",
            "に",
            "い",
            "ほ",
            "が",
            "い"
          ],
          "correctAnswer": "いちがいに"
        },
        {
          "id": "u24_l5_3",
          "type": "cloze",
          "prompt": "私は論理がすきです",
          "furigana": "わたしはろんりがすきです",
          "romaji": "Watashi wa ronri ga suki desu.",
          "english": "Fill in the blank with the correct particle for Logic / reasoning.",
          "audioText": "論理",
          "clozeSentence": "これは論理 {{BLANK}} す。",
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
          "id": "u24_l5_4",
          "type": "scramble",
          "prompt": "これは論理です",
          "furigana": "これはろんりです",
          "romaji": "Kore wa ronri desu.",
          "english": "This is Logic / reasoning.",
          "audioText": "これは論理です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "それ",
            "論理",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "論理",
            "です"
          ],
          "correctAnswer": "これは論理です"
        },
        {
          "id": "u24_l5_5",
          "type": "speak",
          "prompt": "要約",
          "furigana": "ようやく",
          "romaji": "youyaku",
          "english": "Pronounce: Summary / synopsis",
          "audioText": "ようやく",
          "targetSpeech": "要約",
          "options": [
            "Summary / synopsis",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "要約"
        },
        {
          "id": "u24_l5_6",
          "type": "dictate",
          "prompt": "要約をお願いします",
          "furigana": "ようやくをおねがいします",
          "romaji": "youyaku o onegaishimasu.",
          "english": "Summary / synopsis, please.",
          "audioText": "要約をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "を",
            "要約",
            "お願いします"
          ],
          "dictateSolution": [
            "要約",
            "を",
            "お願いします"
          ],
          "correctAnswer": "要約をお願いします"
        },
        {
          "id": "u24_l5_7",
          "type": "match",
          "prompt": "一概に・論理・要約・にもかかわらずの確認",
          "furigana": "いちがいに・ろんり・ようやく・にもかかわらずのかくにん",
          "romaji": "ichigai ni, ronri, youyaku, ni mo kakawarazu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いちがいに",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "一概に",
              "right": "Unconditionally / sweeps all as one",
              "furigana": "いちがいに",
              "romaji": "ichigai ni"
            },
            {
              "id": "p_1",
              "left": "論理",
              "right": "Logic / reasoning",
              "furigana": "ろんり",
              "romaji": "ronri"
            },
            {
              "id": "p_2",
              "left": "要約",
              "right": "Summary / synopsis",
              "furigana": "ようやく",
              "romaji": "youyaku"
            },
            {
              "id": "p_3",
              "left": "にもかかわらずの確認",
              "right": "Confirming Despite / in spite of",
              "furigana": "にもかかわらずのかくにん",
              "romaji": "ni mo kakawarazu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l5_8",
          "type": "dialogue",
          "prompt": "にもかかわらずについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "にもかかわらずについて教えていただけますか？",
          "furigana": "にもかかわらずについて教えていただけますか？",
          "romaji": "ni mo kakawarazu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Despite / in spite of?",
          "audioText": "にもかかわらずについて教えていただけますか？",
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
      "id": "u24_l6",
      "unitId": "unit_24",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Despite / in spite of & Confirming Far from / let alone",
      "titleJp": "にもかかわらずの確認・どころかの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "にもかかわらずの確認",
        "どころかの確認",
        "に反しての確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "確",
        "認",
        "反",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u24_l6_1",
          "type": "listen",
          "prompt": "にもかかわらずの確認",
          "furigana": "にもかかわらずのかくにん",
          "romaji": "ni mo kakawarazu no kakunin",
          "english": "Confirming Despite / in spite of",
          "audioText": "にもかかわらずのかくにん",
          "options": [
            "Contrary to",
            "Confirming Despite / in spite of",
            "Objective",
            "On the other hand"
          ],
          "correctAnswer": "Confirming Despite / in spite of"
        },
        {
          "id": "u24_l6_2",
          "type": "spell",
          "prompt": "にもかかわらずの確認",
          "furigana": "にもかかわらずのかくにん",
          "romaji": "ni mo kakawarazu no kakunin",
          "english": "Build 'Confirming Despite / in spite of'",
          "audioText": "にもかかわらずのかくにん",
          "tileBank": [
            "も",
            "か",
            "の",
            "か",
            "ら",
            "ず",
            "わ",
            "に"
          ],
          "correctAnswer": "にもかかわらずのかくにん"
        },
        {
          "id": "u24_l6_3",
          "type": "cloze",
          "prompt": "私はどころかの確認がすきです",
          "furigana": "わたしはどころかのかくにんがすきです",
          "romaji": "Watashi wa dokoroka no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Far from / let alone.",
          "audioText": "どころかの確認",
          "clozeSentence": "これはどころかの確認 {{BLANK}} す。",
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
          "id": "u24_l6_4",
          "type": "scramble",
          "prompt": "これはどころかの確認です",
          "furigana": "これはどころかのかくにんです",
          "romaji": "Kore wa dokoroka no kakunin desu.",
          "english": "This is Confirming Far from / let alone.",
          "audioText": "これはどころかの確認です",
          "scrambleTokens": [
            "どころかの確認",
            "これは",
            "それ",
            "です",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "どころかの確認",
            "です"
          ],
          "correctAnswer": "これはどころかの確認です"
        },
        {
          "id": "u24_l6_5",
          "type": "speak",
          "prompt": "に反しての確認",
          "furigana": "にはんしてのかくにん",
          "romaji": "ni hanshite no kakunin",
          "english": "Pronounce: Confirming Contrary to",
          "audioText": "にはんしてのかくにん",
          "targetSpeech": "に反しての確認",
          "options": [
            "Confirming Contrary to",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "に反しての確認"
        },
        {
          "id": "u24_l6_6",
          "type": "dictate",
          "prompt": "に反しての確認をお願いします",
          "furigana": "にはんしてのかくにんをおねがいします",
          "romaji": "ni hanshite no kakunin o onegaishimasu.",
          "english": "Confirming Contrary to, please.",
          "audioText": "に反しての確認をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "お願いします",
            "に反しての確認",
            "です"
          ],
          "dictateSolution": [
            "に反しての確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "に反しての確認をお願いします"
        },
        {
          "id": "u24_l6_7",
          "type": "match",
          "prompt": "にもかかわらずの確認・どころかの確認・に反しての確認・反面の確認",
          "furigana": "にもかかわらずのかくにん・どころかのかくにん・にはんしてのかくにん・はんめんのかくにん",
          "romaji": "ni mo kakawarazu no kakunin, dokoroka no kakunin, ni hanshite no kakunin, hanmen no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "にもかかわらずのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "にもかかわらずの確認",
              "right": "Confirming Despite / in spite of",
              "furigana": "にもかかわらずのかくにん",
              "romaji": "ni mo kakawarazu no kakunin"
            },
            {
              "id": "p_1",
              "left": "どころかの確認",
              "right": "Confirming Far from / let alone",
              "furigana": "どころかのかくにん",
              "romaji": "dokoroka no kakunin"
            },
            {
              "id": "p_2",
              "left": "に反しての確認",
              "right": "Confirming Contrary to",
              "furigana": "にはんしてのかくにん",
              "romaji": "ni hanshite no kakunin"
            },
            {
              "id": "p_3",
              "left": "反面の確認",
              "right": "Confirming On the other hand",
              "furigana": "はんめんのかくにん",
              "romaji": "hanmen no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l6_8",
          "type": "dialogue",
          "prompt": "どころかの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "どころかの準備はできていますか？",
          "furigana": "どころかの準備はできていますか？",
          "romaji": "dokoroka no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Far from / let alone ready?",
          "audioText": "どころかの準備はできていますか？",
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
      "id": "u24_l7",
      "unitId": "unit_24",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming On the other hand & Confirming Assertion / contention",
      "titleJp": "反面の確認・主張の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "反面の確認",
        "主張の確認",
        "根拠の確認"
      ],
      "kanjiKeywords": [
        "反",
        "面",
        "確",
        "認",
        "主",
        "張",
        "確",
        "認",
        "根",
        "拠",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u24_l7_1",
          "type": "listen",
          "prompt": "反面の確認",
          "furigana": "はんめんのかくにん",
          "romaji": "hanmen no kakunin",
          "english": "Confirming On the other hand",
          "audioText": "はんめんのかくにん",
          "options": [
            "Confirming On the other hand",
            "Grounds / objective basis",
            "Logic / reasoning",
            "Despite / in spite of"
          ],
          "correctAnswer": "Confirming On the other hand"
        },
        {
          "id": "u24_l7_2",
          "type": "spell",
          "prompt": "反面の確認",
          "furigana": "はんめんのかくにん",
          "romaji": "hanmen no kakunin",
          "english": "Build 'Confirming On the other hand'",
          "audioText": "はんめんのかくにん",
          "tileBank": [
            "く",
            "に",
            "め",
            "ん",
            "の",
            "か",
            "ん",
            "は"
          ],
          "correctAnswer": "はんめんのかくにん"
        },
        {
          "id": "u24_l7_3",
          "type": "cloze",
          "prompt": "私は主張の確認がすきです",
          "furigana": "わたしはしゅちょうのかくにんがすきです",
          "romaji": "Watashi wa shuchou no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Assertion / contention.",
          "audioText": "主張の確認",
          "clozeSentence": "これは主張の確認 {{BLANK}} す。",
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
          "id": "u24_l7_4",
          "type": "scramble",
          "prompt": "これは主張の確認です",
          "furigana": "これはしゅちょうのかくにんです",
          "romaji": "Kore wa shuchou no kakunin desu.",
          "english": "This is Confirming Assertion / contention.",
          "audioText": "これは主張の確認です",
          "scrambleTokens": [
            "これは",
            "それ",
            "主張の確認",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "主張の確認",
            "です"
          ],
          "correctAnswer": "これは主張の確認です"
        },
        {
          "id": "u24_l7_5",
          "type": "speak",
          "prompt": "根拠の確認",
          "furigana": "こんきょのかくにん",
          "romaji": "konkyo no kakunin",
          "english": "Pronounce: Confirming Grounds / objective basis",
          "audioText": "こんきょのかくにん",
          "targetSpeech": "根拠の確認",
          "options": [
            "Confirming Grounds / objective basis",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "根拠の確認"
        },
        {
          "id": "u24_l7_6",
          "type": "dictate",
          "prompt": "根拠の確認をお願いします",
          "furigana": "こんきょのかくにんをおねがいします",
          "romaji": "konkyo no kakunin o onegaishimasu.",
          "english": "Confirming Grounds / objective basis, please.",
          "audioText": "根拠の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "です",
            "根拠の確認",
            "お願いします"
          ],
          "dictateSolution": [
            "根拠の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "根拠の確認をお願いします"
        },
        {
          "id": "u24_l7_7",
          "type": "match",
          "prompt": "反面の確認・主張の確認・根拠の確認・批判の確認",
          "furigana": "はんめんのかくにん・しゅちょうのかくにん・こんきょのかくにん・ひはんのかくにん",
          "romaji": "hanmen no kakunin, shuchou no kakunin, konkyo no kakunin, hihan no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "はんめんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "反面の確認",
              "right": "Confirming On the other hand",
              "furigana": "はんめんのかくにん",
              "romaji": "hanmen no kakunin"
            },
            {
              "id": "p_1",
              "left": "主張の確認",
              "right": "Confirming Assertion / contention",
              "furigana": "しゅちょうのかくにん",
              "romaji": "shuchou no kakunin"
            },
            {
              "id": "p_2",
              "left": "根拠の確認",
              "right": "Confirming Grounds / objective basis",
              "furigana": "こんきょのかくにん",
              "romaji": "konkyo no kakunin"
            },
            {
              "id": "p_3",
              "left": "批判の確認",
              "right": "Confirming Critique / criticism",
              "furigana": "ひはんのかくにん",
              "romaji": "hihan no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l7_8",
          "type": "dialogue",
          "prompt": "に反してについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "に反してについてどう思われますか？",
          "furigana": "に反してについてどう思われますか？",
          "romaji": "ni hanshite ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Contrary to?",
          "audioText": "に反してについてどう思われますか？",
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
      "id": "u24_l8",
      "unitId": "unit_24",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Critique / criticism & Confirming Valid / appropriate",
      "titleJp": "批判の確認・妥当の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "批判の確認",
        "妥当の確認",
        "客観的の確認"
      ],
      "kanjiKeywords": [
        "批",
        "判",
        "確",
        "認",
        "妥",
        "当",
        "確",
        "認",
        "客",
        "観",
        "的",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u24_l8_1",
          "type": "listen",
          "prompt": "批判の確認",
          "furigana": "ひはんのかくにん",
          "romaji": "hihan no kakunin",
          "english": "Confirming Critique / criticism",
          "audioText": "ひはんのかくにん",
          "options": [
            "Confirming Subjective",
            "Confirming Critique / criticism",
            "Confirming Assertion / contention",
            "Confirming Objective"
          ],
          "correctAnswer": "Confirming Critique / criticism"
        },
        {
          "id": "u24_l8_2",
          "type": "spell",
          "prompt": "批判の確認",
          "furigana": "ひはんのかくにん",
          "romaji": "hihan no kakunin",
          "english": "Build 'Confirming Critique / criticism'",
          "audioText": "ひはんのかくにん",
          "tileBank": [
            "か",
            "ひ",
            "に",
            "は",
            "く",
            "ん",
            "の",
            "ん"
          ],
          "correctAnswer": "ひはんのかくにん"
        },
        {
          "id": "u24_l8_3",
          "type": "cloze",
          "prompt": "私は妥当の確認がすきです",
          "furigana": "わたしはだとうのかくにんがすきです",
          "romaji": "Watashi wa datou no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Valid / appropriate.",
          "audioText": "妥当の確認",
          "clozeSentence": "これは妥当の確認 {{BLANK}} す。",
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
          "id": "u24_l8_4",
          "type": "scramble",
          "prompt": "これは妥当の確認です",
          "furigana": "これはだとうのかくにんです",
          "romaji": "Kore wa datou no kakunin desu.",
          "english": "This is Confirming Valid / appropriate.",
          "audioText": "これは妥当の確認です",
          "scrambleTokens": [
            "それ",
            "妥当の確認",
            "です",
            "これは",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "妥当の確認",
            "です"
          ],
          "correctAnswer": "これは妥当の確認です"
        },
        {
          "id": "u24_l8_5",
          "type": "speak",
          "prompt": "客観的の確認",
          "furigana": "きゃっかんてきのかくにん",
          "romaji": "kyakkanteki no kakunin",
          "english": "Pronounce: Confirming Objective",
          "audioText": "きゃっかんてきのかくにん",
          "targetSpeech": "客観的の確認",
          "options": [
            "Confirming Objective",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "客観的の確認"
        },
        {
          "id": "u24_l8_6",
          "type": "dictate",
          "prompt": "客観的の確認をお願いします",
          "furigana": "きゃっかんてきのかくにんをおねがいします",
          "romaji": "kyakkanteki no kakunin o onegaishimasu.",
          "english": "Confirming Objective, please.",
          "audioText": "客観的の確認をお願いします",
          "dictateTokens": [
            "を",
            "客観的の確認",
            "お願いします",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "客観的の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "客観的の確認をお願いします"
        },
        {
          "id": "u24_l8_7",
          "type": "match",
          "prompt": "批判の確認・妥当の確認・客観的の確認・主観的の確認",
          "furigana": "ひはんのかくにん・だとうのかくにん・きゃっかんてきのかくにん・しゅかんてきのかくにん",
          "romaji": "hihan no kakunin, datou no kakunin, kyakkanteki no kakunin, shukanteki no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ひはんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "批判の確認",
              "right": "Confirming Critique / criticism",
              "furigana": "ひはんのかくにん",
              "romaji": "hihan no kakunin"
            },
            {
              "id": "p_1",
              "left": "妥当の確認",
              "right": "Confirming Valid / appropriate",
              "furigana": "だとうのかくにん",
              "romaji": "datou no kakunin"
            },
            {
              "id": "p_2",
              "left": "客観的の確認",
              "right": "Confirming Objective",
              "furigana": "きゃっかんてきのかくにん",
              "romaji": "kyakkanteki no kakunin"
            },
            {
              "id": "p_3",
              "left": "主観的の確認",
              "right": "Confirming Subjective",
              "furigana": "しゅかんてきのかくにん",
              "romaji": "shukanteki no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l8_8",
          "type": "dialogue",
          "prompt": "次は反面に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は反面に進みましょう。",
          "furigana": "次は反面に進みましょう。",
          "romaji": "Tsugi wa hanmen ni susumimashou.",
          "english": "Speaker: Let's proceed to On the other hand next.",
          "audioText": "次は反面に進みましょう。",
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
      "id": "u24_l9",
      "unitId": "unit_24",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Subjective & Confirming Contradiction",
      "titleJp": "主観的の確認・矛盾の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "主観的の確認",
        "矛盾の確認",
        "整合性の確認"
      ],
      "kanjiKeywords": [
        "主",
        "観",
        "的",
        "確",
        "認",
        "矛",
        "盾",
        "確",
        "認",
        "整",
        "合",
        "性",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u24_l9_1",
          "type": "listen",
          "prompt": "主観的の確認",
          "furigana": "しゅかんてきのかくにん",
          "romaji": "shukanteki no kakunin",
          "english": "Confirming Subjective",
          "audioText": "しゅかんてきのかくにん",
          "options": [
            "On the other hand",
            "Confirming Subjective",
            "Confirming Despite / in spite of",
            "Confirming Contradiction"
          ],
          "correctAnswer": "Confirming Subjective"
        },
        {
          "id": "u24_l9_2",
          "type": "spell",
          "prompt": "主観的の確認",
          "furigana": "しゅかんてきのかくにん",
          "romaji": "shukanteki no kakunin",
          "english": "Build 'Confirming Subjective'",
          "audioText": "しゅかんてきのかくにん",
          "tileBank": [
            "ん",
            "し",
            "か",
            "か",
            "の",
            "き",
            "ゅ",
            "て"
          ],
          "correctAnswer": "しゅかんてきのかくにん"
        },
        {
          "id": "u24_l9_3",
          "type": "cloze",
          "prompt": "私は矛盾の確認がすきです",
          "furigana": "わたしはむじゅんのかくにんがすきです",
          "romaji": "Watashi wa mujun no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Contradiction.",
          "audioText": "矛盾の確認",
          "clozeSentence": "これは矛盾の確認 {{BLANK}} す。",
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
          "id": "u24_l9_4",
          "type": "scramble",
          "prompt": "これは矛盾の確認です",
          "furigana": "これはむじゅんのかくにんです",
          "romaji": "Kore wa mujun no kakunin desu.",
          "english": "This is Confirming Contradiction.",
          "audioText": "これは矛盾の確認です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "それ",
            "です",
            "矛盾の確認"
          ],
          "scrambleSolution": [
            "これは",
            "矛盾の確認",
            "です"
          ],
          "correctAnswer": "これは矛盾の確認です"
        },
        {
          "id": "u24_l9_5",
          "type": "speak",
          "prompt": "整合性の確認",
          "furigana": "せいごうせいのかくにん",
          "romaji": "seigousei no kakunin",
          "english": "Pronounce: Confirming Consistency / integrity",
          "audioText": "せいごうせいのかくにん",
          "targetSpeech": "整合性の確認",
          "options": [
            "Confirming Consistency / integrity",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "整合性の確認"
        },
        {
          "id": "u24_l9_6",
          "type": "dictate",
          "prompt": "整合性の確認をお願いします",
          "furigana": "せいごうせいのかくにんをおねがいします",
          "romaji": "seigousei no kakunin o onegaishimasu.",
          "english": "Confirming Consistency / integrity, please.",
          "audioText": "整合性の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "です",
            "整合性の確認",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "整合性の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "整合性の確認をお願いします"
        },
        {
          "id": "u24_l9_7",
          "type": "match",
          "prompt": "主観的の確認・矛盾の確認・整合性の確認・一概にの確認",
          "furigana": "しゅかんてきのかくにん・むじゅんのかくにん・せいごうせいのかくにん・いちがいにのかくにん",
          "romaji": "shukanteki no kakunin, mujun no kakunin, seigousei no kakunin, ichigai ni no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しゅかんてきのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "主観的の確認",
              "right": "Confirming Subjective",
              "furigana": "しゅかんてきのかくにん",
              "romaji": "shukanteki no kakunin"
            },
            {
              "id": "p_1",
              "left": "矛盾の確認",
              "right": "Confirming Contradiction",
              "furigana": "むじゅんのかくにん",
              "romaji": "mujun no kakunin"
            },
            {
              "id": "p_2",
              "left": "整合性の確認",
              "right": "Confirming Consistency / integrity",
              "furigana": "せいごうせいのかくにん",
              "romaji": "seigousei no kakunin"
            },
            {
              "id": "p_3",
              "left": "一概にの確認",
              "right": "Confirming Unconditionally / sweeps all as one",
              "furigana": "いちがいにのかくにん",
              "romaji": "ichigai ni no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l9_8",
          "type": "dialogue",
          "prompt": "にもかかわらずについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "にもかかわらずについて教えていただけますか？",
          "furigana": "にもかかわらずについて教えていただけますか？",
          "romaji": "ni mo kakawarazu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Despite / in spite of?",
          "audioText": "にもかかわらずについて教えていただけますか？",
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
      "id": "u24_l10",
      "unitId": "unit_24",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Unconditionally / sweeps all as one & Confirming Logic / reasoning",
      "titleJp": "一概にの確認・論理の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "一概にの確認",
        "論理の確認",
        "要約の確認"
      ],
      "kanjiKeywords": [
        "一",
        "概",
        "確",
        "認",
        "論",
        "理",
        "確",
        "認",
        "要",
        "約",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u24_l10_1",
          "type": "listen",
          "prompt": "一概にの確認",
          "furigana": "いちがいにのかくにん",
          "romaji": "ichigai ni no kakunin",
          "english": "Confirming Unconditionally / sweeps all as one",
          "audioText": "いちがいにのかくにん",
          "options": [
            "On the other hand",
            "Confirming Unconditionally / sweeps all as one",
            "Logic / reasoning",
            "Confirming Despite / in spite of"
          ],
          "correctAnswer": "Confirming Unconditionally / sweeps all as one"
        },
        {
          "id": "u24_l10_2",
          "type": "spell",
          "prompt": "一概にの確認",
          "furigana": "いちがいにのかくにん",
          "romaji": "ichigai ni no kakunin",
          "english": "Build 'Confirming Unconditionally / sweeps all as one'",
          "audioText": "いちがいにのかくにん",
          "tileBank": [
            "の",
            "ち",
            "に",
            "く",
            "い",
            "か",
            "が",
            "い"
          ],
          "correctAnswer": "いちがいにのかくにん"
        },
        {
          "id": "u24_l10_3",
          "type": "cloze",
          "prompt": "私は論理の確認がすきです",
          "furigana": "わたしはろんりのかくにんがすきです",
          "romaji": "Watashi wa ronri no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Logic / reasoning.",
          "audioText": "論理の確認",
          "clozeSentence": "これは論理の確認 {{BLANK}} す。",
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
          "id": "u24_l10_4",
          "type": "scramble",
          "prompt": "これは論理の確認です",
          "furigana": "これはろんりのかくにんです",
          "romaji": "Kore wa ronri no kakunin desu.",
          "english": "This is Confirming Logic / reasoning.",
          "audioText": "これは論理の確認です",
          "scrambleTokens": [
            "です",
            "これは",
            "論理の確認",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "論理の確認",
            "です"
          ],
          "correctAnswer": "これは論理の確認です"
        },
        {
          "id": "u24_l10_5",
          "type": "speak",
          "prompt": "要約の確認",
          "furigana": "ようやくのかくにん",
          "romaji": "youyaku no kakunin",
          "english": "Pronounce: Confirming Summary / synopsis",
          "audioText": "ようやくのかくにん",
          "targetSpeech": "要約の確認",
          "options": [
            "Confirming Summary / synopsis",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "要約の確認"
        },
        {
          "id": "u24_l10_6",
          "type": "dictate",
          "prompt": "要約の確認をお願いします",
          "furigana": "ようやくのかくにんをおねがいします",
          "romaji": "youyaku no kakunin o onegaishimasu.",
          "english": "Confirming Summary / synopsis, please.",
          "audioText": "要約の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "要約の確認",
            "です",
            "を"
          ],
          "dictateSolution": [
            "要約の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "要約の確認をお願いします"
        },
        {
          "id": "u24_l10_7",
          "type": "match",
          "prompt": "一概にの確認・論理の確認・要約の確認・にもかかわらずの確認",
          "furigana": "いちがいにのかくにん・ろんりのかくにん・ようやくのかくにん・にもかかわらずのかくにん",
          "romaji": "ichigai ni no kakunin, ronri no kakunin, youyaku no kakunin, ni mo kakawarazu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いちがいにのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "一概にの確認",
              "right": "Confirming Unconditionally / sweeps all as one",
              "furigana": "いちがいにのかくにん",
              "romaji": "ichigai ni no kakunin"
            },
            {
              "id": "p_1",
              "left": "論理の確認",
              "right": "Confirming Logic / reasoning",
              "furigana": "ろんりのかくにん",
              "romaji": "ronri no kakunin"
            },
            {
              "id": "p_2",
              "left": "要約の確認",
              "right": "Confirming Summary / synopsis",
              "furigana": "ようやくのかくにん",
              "romaji": "youyaku no kakunin"
            },
            {
              "id": "p_3",
              "left": "にもかかわらずの確認",
              "right": "Confirming Despite / in spite of",
              "furigana": "にもかかわらずのかくにん",
              "romaji": "ni mo kakawarazu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l10_8",
          "type": "dialogue",
          "prompt": "どころかの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "どころかの準備はできていますか？",
          "furigana": "どころかの準備はできていますか？",
          "romaji": "dokoroka no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Far from / let alone ready?",
          "audioText": "どころかの準備はできていますか？",
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
      "id": "u24_l11",
      "unitId": "unit_24",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Despite / in spite of & Confirming Far from / let alone",
      "titleJp": "にもかかわらずの確認・どころかの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "にもかかわらずの確認",
        "どころかの確認",
        "に反しての確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "確",
        "認",
        "反",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u24_l11_1",
          "type": "listen",
          "prompt": "にもかかわらずの確認",
          "furigana": "にもかかわらずのかくにん",
          "romaji": "ni mo kakawarazu no kakunin",
          "english": "Confirming Despite / in spite of",
          "audioText": "にもかかわらずのかくにん",
          "options": [
            "Confirming Logic / reasoning",
            "Confirming Assertion / contention",
            "Assertion / contention",
            "Confirming Despite / in spite of"
          ],
          "correctAnswer": "Confirming Despite / in spite of"
        },
        {
          "id": "u24_l11_2",
          "type": "spell",
          "prompt": "にもかかわらずの確認",
          "furigana": "にもかかわらずのかくにん",
          "romaji": "ni mo kakawarazu no kakunin",
          "english": "Build 'Confirming Despite / in spite of'",
          "audioText": "にもかかわらずのかくにん",
          "tileBank": [
            "に",
            "か",
            "ら",
            "わ",
            "も",
            "の",
            "か",
            "ず"
          ],
          "correctAnswer": "にもかかわらずのかくにん"
        },
        {
          "id": "u24_l11_3",
          "type": "cloze",
          "prompt": "私はどころかの確認がすきです",
          "furigana": "わたしはどころかのかくにんがすきです",
          "romaji": "Watashi wa dokoroka no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Far from / let alone.",
          "audioText": "どころかの確認",
          "clozeSentence": "これはどころかの確認 {{BLANK}} す。",
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
          "id": "u24_l11_4",
          "type": "scramble",
          "prompt": "これはどころかの確認です",
          "furigana": "これはどころかのかくにんです",
          "romaji": "Kore wa dokoroka no kakunin desu.",
          "english": "This is Confirming Far from / let alone.",
          "audioText": "これはどころかの確認です",
          "scrambleTokens": [
            "どころかの確認",
            "です",
            "ではありません",
            "これは",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "どころかの確認",
            "です"
          ],
          "correctAnswer": "これはどころかの確認です"
        },
        {
          "id": "u24_l11_5",
          "type": "speak",
          "prompt": "に反しての確認",
          "furigana": "にはんしてのかくにん",
          "romaji": "ni hanshite no kakunin",
          "english": "Pronounce: Confirming Contrary to",
          "audioText": "にはんしてのかくにん",
          "targetSpeech": "に反しての確認",
          "options": [
            "Confirming Contrary to",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "に反しての確認"
        },
        {
          "id": "u24_l11_6",
          "type": "dictate",
          "prompt": "に反しての確認をお願いします",
          "furigana": "にはんしてのかくにんをおねがいします",
          "romaji": "ni hanshite no kakunin o onegaishimasu.",
          "english": "Confirming Contrary to, please.",
          "audioText": "に反しての確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "に反しての確認",
            "を",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "に反しての確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "に反しての確認をお願いします"
        },
        {
          "id": "u24_l11_7",
          "type": "match",
          "prompt": "にもかかわらずの確認・どころかの確認・に反しての確認・反面の確認",
          "furigana": "にもかかわらずのかくにん・どころかのかくにん・にはんしてのかくにん・はんめんのかくにん",
          "romaji": "ni mo kakawarazu no kakunin, dokoroka no kakunin, ni hanshite no kakunin, hanmen no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "にもかかわらずのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "にもかかわらずの確認",
              "right": "Confirming Despite / in spite of",
              "furigana": "にもかかわらずのかくにん",
              "romaji": "ni mo kakawarazu no kakunin"
            },
            {
              "id": "p_1",
              "left": "どころかの確認",
              "right": "Confirming Far from / let alone",
              "furigana": "どころかのかくにん",
              "romaji": "dokoroka no kakunin"
            },
            {
              "id": "p_2",
              "left": "に反しての確認",
              "right": "Confirming Contrary to",
              "furigana": "にはんしてのかくにん",
              "romaji": "ni hanshite no kakunin"
            },
            {
              "id": "p_3",
              "left": "反面の確認",
              "right": "Confirming On the other hand",
              "furigana": "はんめんのかくにん",
              "romaji": "hanmen no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l11_8",
          "type": "dialogue",
          "prompt": "に反してについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "に反してについてどう思われますか？",
          "furigana": "に反してについてどう思われますか？",
          "romaji": "ni hanshite ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Contrary to?",
          "audioText": "に反してについてどう思われますか？",
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
      "id": "u24_l12",
      "unitId": "unit_24",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming On the other hand & Confirming Assertion / contention",
      "titleJp": "反面の確認・主張の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "反面の確認",
        "主張の確認",
        "根拠の確認"
      ],
      "kanjiKeywords": [
        "反",
        "面",
        "確",
        "認",
        "主",
        "張",
        "確",
        "認",
        "根",
        "拠",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u24_l12_1",
          "type": "listen",
          "prompt": "反面の確認",
          "furigana": "はんめんのかくにん",
          "romaji": "hanmen no kakunin",
          "english": "Confirming On the other hand",
          "audioText": "はんめんのかくにん",
          "options": [
            "Confirming On the other hand",
            "Subjective",
            "Confirming Summary / synopsis",
            "Contrary to"
          ],
          "correctAnswer": "Confirming On the other hand"
        },
        {
          "id": "u24_l12_2",
          "type": "spell",
          "prompt": "反面の確認",
          "furigana": "はんめんのかくにん",
          "romaji": "hanmen no kakunin",
          "english": "Build 'Confirming On the other hand'",
          "audioText": "はんめんのかくにん",
          "tileBank": [
            "に",
            "は",
            "め",
            "ん",
            "か",
            "く",
            "ん",
            "の"
          ],
          "correctAnswer": "はんめんのかくにん"
        },
        {
          "id": "u24_l12_3",
          "type": "cloze",
          "prompt": "私は主張の確認がすきです",
          "furigana": "わたしはしゅちょうのかくにんがすきです",
          "romaji": "Watashi wa shuchou no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Assertion / contention.",
          "audioText": "主張の確認",
          "clozeSentence": "これは主張の確認 {{BLANK}} す。",
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
          "id": "u24_l12_4",
          "type": "scramble",
          "prompt": "これは主張の確認です",
          "furigana": "これはしゅちょうのかくにんです",
          "romaji": "Kore wa shuchou no kakunin desu.",
          "english": "This is Confirming Assertion / contention.",
          "audioText": "これは主張の確認です",
          "scrambleTokens": [
            "それ",
            "これは",
            "主張の確認",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "主張の確認",
            "です"
          ],
          "correctAnswer": "これは主張の確認です"
        },
        {
          "id": "u24_l12_5",
          "type": "speak",
          "prompt": "根拠の確認",
          "furigana": "こんきょのかくにん",
          "romaji": "konkyo no kakunin",
          "english": "Pronounce: Confirming Grounds / objective basis",
          "audioText": "こんきょのかくにん",
          "targetSpeech": "根拠の確認",
          "options": [
            "Confirming Grounds / objective basis",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "根拠の確認"
        },
        {
          "id": "u24_l12_6",
          "type": "dictate",
          "prompt": "根拠の確認をお願いします",
          "furigana": "こんきょのかくにんをおねがいします",
          "romaji": "konkyo no kakunin o onegaishimasu.",
          "english": "Confirming Grounds / objective basis, please.",
          "audioText": "根拠の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "を",
            "です",
            "ありがとう",
            "根拠の確認"
          ],
          "dictateSolution": [
            "根拠の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "根拠の確認をお願いします"
        },
        {
          "id": "u24_l12_7",
          "type": "match",
          "prompt": "反面の確認・主張の確認・根拠の確認・にもかかわらず",
          "furigana": "はんめんのかくにん・しゅちょうのかくにん・こんきょのかくにん・にもかかわらず",
          "romaji": "hanmen no kakunin, shuchou no kakunin, konkyo no kakunin, ni mo kakawarazu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "はんめんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "反面の確認",
              "right": "Confirming On the other hand",
              "furigana": "はんめんのかくにん",
              "romaji": "hanmen no kakunin"
            },
            {
              "id": "p_1",
              "left": "主張の確認",
              "right": "Confirming Assertion / contention",
              "furigana": "しゅちょうのかくにん",
              "romaji": "shuchou no kakunin"
            },
            {
              "id": "p_2",
              "left": "根拠の確認",
              "right": "Confirming Grounds / objective basis",
              "furigana": "こんきょのかくにん",
              "romaji": "konkyo no kakunin"
            },
            {
              "id": "p_3",
              "left": "にもかかわらず",
              "right": "Despite / in spite of",
              "furigana": "にもかかわらず",
              "romaji": "ni mo kakawarazu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l12_8",
          "type": "dialogue",
          "prompt": "次は反面に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は反面に進みましょう。",
          "furigana": "次は反面に進みましょう。",
          "romaji": "Tsugi wa hanmen ni susumimashou.",
          "english": "Speaker: Let's proceed to On the other hand next.",
          "audioText": "次は反面に進みましょう。",
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
      "id": "u24_l13",
      "unitId": "unit_24",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Despite / in spite of & Far from / let alone",
      "titleJp": "にもかかわらず・どころか",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "にもかかわらず",
        "どころか",
        "に反して"
      ],
      "kanjiKeywords": [
        "反"
      ],
      "items": [
        {
          "id": "u24_l13_1",
          "type": "listen",
          "prompt": "にもかかわらず",
          "furigana": "にもかかわらず",
          "romaji": "ni mo kakawarazu",
          "english": "Despite / in spite of",
          "audioText": "にもかかわらず",
          "options": [
            "Confirming Far from / let alone",
            "Confirming Summary / synopsis",
            "Despite / in spite of",
            "Confirming Objective"
          ],
          "correctAnswer": "Despite / in spite of"
        },
        {
          "id": "u24_l13_2",
          "type": "spell",
          "prompt": "どころか",
          "furigana": "どころか",
          "romaji": "dokoroka",
          "english": "Build 'Far from / let alone'",
          "audioText": "どころか",
          "tileBank": [
            "こ",
            "く",
            "に",
            "ど",
            "ろ",
            "か",
            "れ",
            "ち"
          ],
          "correctAnswer": "どころか"
        },
        {
          "id": "u24_l13_3",
          "type": "cloze",
          "prompt": "私はどころかがすきです",
          "furigana": "わたしはどころかがすきです",
          "romaji": "Watashi wa dokoroka ga suki desu.",
          "english": "Fill in the blank with the correct particle for Far from / let alone.",
          "audioText": "どころか",
          "clozeSentence": "これはどころか {{BLANK}} す。",
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
          "id": "u24_l13_4",
          "type": "scramble",
          "prompt": "これはどころかです",
          "furigana": "これはどころかです",
          "romaji": "Kore wa dokoroka desu.",
          "english": "This is Far from / let alone.",
          "audioText": "これはどころかです",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "どころか",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "どころか",
            "です"
          ],
          "correctAnswer": "これはどころかです"
        },
        {
          "id": "u24_l13_5",
          "type": "speak",
          "prompt": "に反して",
          "furigana": "にはんして",
          "romaji": "ni hanshite",
          "english": "Pronounce: Contrary to",
          "audioText": "にはんして",
          "targetSpeech": "に反して",
          "options": [
            "Contrary to",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "に反して"
        },
        {
          "id": "u24_l13_6",
          "type": "dictate",
          "prompt": "に反してをお願いします",
          "furigana": "にはんしてをおねがいします",
          "romaji": "ni hanshite o onegaishimasu.",
          "english": "Contrary to, please.",
          "audioText": "に反してをお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "です",
            "を",
            "に反して"
          ],
          "dictateSolution": [
            "に反して",
            "を",
            "お願いします"
          ],
          "correctAnswer": "に反してをお願いします"
        },
        {
          "id": "u24_l13_7",
          "type": "match",
          "prompt": "にもかかわらず・どころか・に反して・反面",
          "furigana": "にもかかわらず・どころか・にはんして・はんめん",
          "romaji": "ni mo kakawarazu, dokoroka, ni hanshite, hanmen",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "にもかかわらず",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "にもかかわらず",
              "right": "Despite / in spite of",
              "furigana": "にもかかわらず",
              "romaji": "ni mo kakawarazu"
            },
            {
              "id": "p_1",
              "left": "どころか",
              "right": "Far from / let alone",
              "furigana": "どころか",
              "romaji": "dokoroka"
            },
            {
              "id": "p_2",
              "left": "に反して",
              "right": "Contrary to",
              "furigana": "にはんして",
              "romaji": "ni hanshite"
            },
            {
              "id": "p_3",
              "left": "反面",
              "right": "On the other hand",
              "furigana": "はんめん",
              "romaji": "hanmen"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l13_8",
          "type": "dialogue",
          "prompt": "にもかかわらずについて教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "にもかかわらずについて教えていただけますか？",
          "furigana": "にもかかわらずについて教えていただけますか？",
          "romaji": "ni mo kakawarazu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Despite / in spite of?",
          "audioText": "にもかかわらずについて教えていただけますか？",
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
      "id": "u24_l14",
      "unitId": "unit_24",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "On the other hand & Assertion / contention",
      "titleJp": "反面・主張",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "反面",
        "主張",
        "根拠"
      ],
      "kanjiKeywords": [
        "反",
        "面",
        "主",
        "張",
        "根",
        "拠"
      ],
      "items": [
        {
          "id": "u24_l14_1",
          "type": "listen",
          "prompt": "反面",
          "furigana": "はんめん",
          "romaji": "hanmen",
          "english": "On the other hand",
          "audioText": "はんめん",
          "options": [
            "Contrary to",
            "Valid / appropriate",
            "On the other hand",
            "Confirming Unconditionally / sweeps all as one"
          ],
          "correctAnswer": "On the other hand"
        },
        {
          "id": "u24_l14_2",
          "type": "spell",
          "prompt": "反面",
          "furigana": "はんめん",
          "romaji": "hanmen",
          "english": "Build 'On the other hand'",
          "audioText": "はんめん",
          "tileBank": [
            "ん",
            "め",
            "は",
            "へ",
            "ん",
            "ふ",
            "あ",
            "わ"
          ],
          "correctAnswer": "はんめん"
        },
        {
          "id": "u24_l14_3",
          "type": "cloze",
          "prompt": "私は主張がすきです",
          "furigana": "わたしはしゅちょうがすきです",
          "romaji": "Watashi wa shuchou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Assertion / contention.",
          "audioText": "主張",
          "clozeSentence": "これは主張 {{BLANK}} す。",
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
          "id": "u24_l14_4",
          "type": "scramble",
          "prompt": "これは主張です",
          "furigana": "これはしゅちょうです",
          "romaji": "Kore wa shuchou desu.",
          "english": "This is Assertion / contention.",
          "audioText": "これは主張です",
          "scrambleTokens": [
            "主張",
            "これは",
            "それ",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "主張",
            "です"
          ],
          "correctAnswer": "これは主張です"
        },
        {
          "id": "u24_l14_5",
          "type": "speak",
          "prompt": "根拠",
          "furigana": "こんきょ",
          "romaji": "konkyo",
          "english": "Pronounce: Grounds / objective basis",
          "audioText": "こんきょ",
          "targetSpeech": "根拠",
          "options": [
            "Grounds / objective basis",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "根拠"
        },
        {
          "id": "u24_l14_6",
          "type": "dictate",
          "prompt": "根拠をお願いします",
          "furigana": "こんきょをおねがいします",
          "romaji": "konkyo o onegaishimasu.",
          "english": "Grounds / objective basis, please.",
          "audioText": "根拠をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "を",
            "根拠",
            "ありがとう"
          ],
          "dictateSolution": [
            "根拠",
            "を",
            "お願いします"
          ],
          "correctAnswer": "根拠をお願いします"
        },
        {
          "id": "u24_l14_7",
          "type": "match",
          "prompt": "反面・主張・根拠・批判",
          "furigana": "はんめん・しゅちょう・こんきょ・ひはん",
          "romaji": "hanmen, shuchou, konkyo, hihan",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "はんめん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "反面",
              "right": "On the other hand",
              "furigana": "はんめん",
              "romaji": "hanmen"
            },
            {
              "id": "p_1",
              "left": "主張",
              "right": "Assertion / contention",
              "furigana": "しゅちょう",
              "romaji": "shuchou"
            },
            {
              "id": "p_2",
              "left": "根拠",
              "right": "Grounds / objective basis",
              "furigana": "こんきょ",
              "romaji": "konkyo"
            },
            {
              "id": "p_3",
              "left": "批判",
              "right": "Critique / criticism",
              "furigana": "ひはん",
              "romaji": "hihan"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l14_8",
          "type": "dialogue",
          "prompt": "どころかの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "どころかの準備はできていますか？",
          "furigana": "どころかの準備はできていますか？",
          "romaji": "dokoroka no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Far from / let alone ready?",
          "audioText": "どころかの準備はできていますか？",
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
      "id": "u24_l15",
      "unitId": "unit_24",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 24 Master Exam",
      "iconType": "test",
      "title": "Unit 24 Master Exam",
      "titleJp": "第24週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "批判",
        "妥当",
        "客観的"
      ],
      "kanjiKeywords": [
        "批",
        "判",
        "妥",
        "当",
        "客",
        "観",
        "的"
      ],
      "items": [
        {
          "id": "u24_l15_1",
          "type": "listen",
          "prompt": "批判",
          "furigana": "ひはん",
          "romaji": "hihan",
          "english": "Critique / criticism",
          "audioText": "ひはん",
          "options": [
            "Critique / criticism",
            "Confirming Contrary to",
            "Objective",
            "Summary / synopsis"
          ],
          "correctAnswer": "Critique / criticism"
        },
        {
          "id": "u24_l15_2",
          "type": "spell",
          "prompt": "批判",
          "furigana": "ひはん",
          "romaji": "hihan",
          "english": "Build 'Critique / criticism'",
          "audioText": "ひはん",
          "tileBank": [
            "ん",
            "う",
            "ら",
            "ひ",
            "り",
            "は",
            "お",
            "き"
          ],
          "correctAnswer": "ひはん"
        },
        {
          "id": "u24_l15_3",
          "type": "cloze",
          "prompt": "私は妥当がすきです",
          "furigana": "わたしはだとうがすきです",
          "romaji": "Watashi wa datou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Valid / appropriate.",
          "audioText": "妥当",
          "clozeSentence": "これは妥当 {{BLANK}} す。",
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
          "id": "u24_l15_4",
          "type": "scramble",
          "prompt": "これは妥当です",
          "furigana": "これはだとうです",
          "romaji": "Kore wa datou desu.",
          "english": "This is Valid / appropriate.",
          "audioText": "これは妥当です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "これは",
            "です",
            "妥当"
          ],
          "scrambleSolution": [
            "これは",
            "妥当",
            "です"
          ],
          "correctAnswer": "これは妥当です"
        },
        {
          "id": "u24_l15_5",
          "type": "speak",
          "prompt": "客観的",
          "furigana": "きゃっかんてき",
          "romaji": "kyakkanteki",
          "english": "Pronounce: Objective",
          "audioText": "きゃっかんてき",
          "targetSpeech": "客観的",
          "options": [
            "Objective",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "客観的"
        },
        {
          "id": "u24_l15_6",
          "type": "dictate",
          "prompt": "客観的をお願いします",
          "furigana": "きゃっかんてきをおねがいします",
          "romaji": "kyakkanteki o onegaishimasu.",
          "english": "Objective, please.",
          "audioText": "客観的をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "お願いします",
            "ありがとう",
            "客観的"
          ],
          "dictateSolution": [
            "客観的",
            "を",
            "お願いします"
          ],
          "correctAnswer": "客観的をお願いします"
        },
        {
          "id": "u24_l15_7",
          "type": "match",
          "prompt": "批判・妥当・客観的・主観的",
          "furigana": "ひはん・だとう・きゃっかんてき・しゅかんてき",
          "romaji": "hihan, datou, kyakkanteki, shukanteki",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ひはん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "批判",
              "right": "Critique / criticism",
              "furigana": "ひはん",
              "romaji": "hihan"
            },
            {
              "id": "p_1",
              "left": "妥当",
              "right": "Valid / appropriate",
              "furigana": "だとう",
              "romaji": "datou"
            },
            {
              "id": "p_2",
              "left": "客観的",
              "right": "Objective",
              "furigana": "きゃっかんてき",
              "romaji": "kyakkanteki"
            },
            {
              "id": "p_3",
              "left": "主観的",
              "right": "Subjective",
              "furigana": "しゅかんてき",
              "romaji": "shukanteki"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u24_l15_8",
          "type": "dialogue",
          "prompt": "に反してについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "に反してについてどう思われますか？",
          "furigana": "に反してについてどう思われますか？",
          "romaji": "ni hanshite ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Contrary to?",
          "audioText": "に反してについてどう思われますか？",
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
    "id": "gate_unit_24",
    "unitId": "unit_24",
    "title": "Unit 24 Mastery Checkpoint",
    "titleJp": "第24週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u24_l1_1",
        "type": "listen",
        "prompt": "にもかかわらず",
        "furigana": "にもかかわらず",
        "romaji": "ni mo kakawarazu",
        "english": "Despite / in spite of",
        "audioText": "にもかかわらず",
        "options": [
          "Confirming Logic / reasoning",
          "Unconditionally / sweeps all as one",
          "Assertion / contention",
          "Despite / in spite of"
        ],
        "correctAnswer": "Despite / in spite of"
      },
      {
        "id": "u24_l1_2",
        "type": "spell",
        "prompt": "どころか",
        "furigana": "どころか",
        "romaji": "dokoroka",
        "english": "Build 'Far from / let alone'",
        "audioText": "どころか",
        "tileBank": [
          "ひ",
          "ん",
          "ど",
          "き",
          "ろ",
          "か",
          "こ",
          "わ"
        ],
        "correctAnswer": "どころか"
      },
      {
        "id": "u24_l3_1",
        "type": "listen",
        "prompt": "批判",
        "furigana": "ひはん",
        "romaji": "hihan",
        "english": "Critique / criticism",
        "audioText": "ひはん",
        "options": [
          "Confirming Summary / synopsis",
          "Valid / appropriate",
          "Confirming Unconditionally / sweeps all as one",
          "Critique / criticism"
        ],
        "correctAnswer": "Critique / criticism"
      },
      {
        "id": "u24_l3_2",
        "type": "spell",
        "prompt": "批判",
        "furigana": "ひはん",
        "romaji": "hihan",
        "english": "Build 'Critique / criticism'",
        "audioText": "ひはん",
        "tileBank": [
          "て",
          "ね",
          "ひ",
          "は",
          "ち",
          "せ",
          "わ",
          "ん"
        ],
        "correctAnswer": "ひはん"
      },
      {
        "id": "u24_l5_1",
        "type": "listen",
        "prompt": "一概に",
        "furigana": "いちがいに",
        "romaji": "ichigai ni",
        "english": "Unconditionally / sweeps all as one",
        "audioText": "いちがいに",
        "options": [
          "Confirming Summary / synopsis",
          "Despite / in spite of",
          "Unconditionally / sweeps all as one",
          "Confirming Contrary to"
        ],
        "correctAnswer": "Unconditionally / sweeps all as one"
      },
      {
        "id": "u24_l5_2",
        "type": "spell",
        "prompt": "一概に",
        "furigana": "いちがいに",
        "romaji": "ichigai ni",
        "english": "Build 'Unconditionally / sweeps all as one'",
        "audioText": "いちがいに",
        "tileBank": [
          "け",
          "ふ",
          "ち",
          "に",
          "い",
          "ほ",
          "が",
          "い"
        ],
        "correctAnswer": "いちがいに"
      },
      {
        "id": "u24_l7_1",
        "type": "listen",
        "prompt": "反面の確認",
        "furigana": "はんめんのかくにん",
        "romaji": "hanmen no kakunin",
        "english": "Confirming On the other hand",
        "audioText": "はんめんのかくにん",
        "options": [
          "Confirming On the other hand",
          "Grounds / objective basis",
          "Logic / reasoning",
          "Despite / in spite of"
        ],
        "correctAnswer": "Confirming On the other hand"
      },
      {
        "id": "u24_l7_2",
        "type": "spell",
        "prompt": "反面の確認",
        "furigana": "はんめんのかくにん",
        "romaji": "hanmen no kakunin",
        "english": "Build 'Confirming On the other hand'",
        "audioText": "はんめんのかくにん",
        "tileBank": [
          "く",
          "に",
          "め",
          "ん",
          "の",
          "か",
          "ん",
          "は"
        ],
        "correctAnswer": "はんめんのかくにん"
      },
      {
        "id": "u24_l9_1",
        "type": "listen",
        "prompt": "主観的の確認",
        "furigana": "しゅかんてきのかくにん",
        "romaji": "shukanteki no kakunin",
        "english": "Confirming Subjective",
        "audioText": "しゅかんてきのかくにん",
        "options": [
          "On the other hand",
          "Confirming Subjective",
          "Confirming Despite / in spite of",
          "Confirming Contradiction"
        ],
        "correctAnswer": "Confirming Subjective"
      },
      {
        "id": "u24_l9_2",
        "type": "spell",
        "prompt": "主観的の確認",
        "furigana": "しゅかんてきのかくにん",
        "romaji": "shukanteki no kakunin",
        "english": "Build 'Confirming Subjective'",
        "audioText": "しゅかんてきのかくにん",
        "tileBank": [
          "ん",
          "し",
          "か",
          "か",
          "の",
          "き",
          "ゅ",
          "て"
        ],
        "correctAnswer": "しゅかんてきのかくにん"
      },
      {
        "id": "u24_l11_1",
        "type": "listen",
        "prompt": "にもかかわらずの確認",
        "furigana": "にもかかわらずのかくにん",
        "romaji": "ni mo kakawarazu no kakunin",
        "english": "Confirming Despite / in spite of",
        "audioText": "にもかかわらずのかくにん",
        "options": [
          "Confirming Logic / reasoning",
          "Confirming Assertion / contention",
          "Assertion / contention",
          "Confirming Despite / in spite of"
        ],
        "correctAnswer": "Confirming Despite / in spite of"
      },
      {
        "id": "u24_l11_2",
        "type": "spell",
        "prompt": "にもかかわらずの確認",
        "furigana": "にもかかわらずのかくにん",
        "romaji": "ni mo kakawarazu no kakunin",
        "english": "Build 'Confirming Despite / in spite of'",
        "audioText": "にもかかわらずのかくにん",
        "tileBank": [
          "に",
          "か",
          "ら",
          "わ",
          "も",
          "の",
          "か",
          "ず"
        ],
        "correctAnswer": "にもかかわらずのかくにん"
      }
    ]
  }
};
