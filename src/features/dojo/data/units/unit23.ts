import type { DojoUnit } from "../../models/dojo.model";

export const unit23: DojoUnit = {
  "id": "unit_23",
  "unitNumber": 23,
  "title": "Technology, AI & Trends in Japan",
  "titleJp": "先端技術と日本の未来",
  "description": "Discuss artificial intelligence, automation in healthcare, cashless society, and socioeconomic transitions.",
  "icon": "🤖",
  "themeColor": "#0D9488",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u23_l1",
      "unitId": "unit_23",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Artificial Intelligence (AI) & Automation",
      "titleJp": "人工知能・自動化",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "人工知能",
        "自動化",
        "高齢化"
      ],
      "kanjiKeywords": [
        "人",
        "工",
        "知",
        "能",
        "自",
        "動",
        "化",
        "高",
        "齢",
        "化"
      ],
      "items": [
        {
          "id": "u23_l1_1",
          "type": "listen",
          "prompt": "人工知能",
          "furigana": "じんこうちのう",
          "romaji": "jinkou chinou",
          "english": "Artificial Intelligence (AI)",
          "audioText": "じんこうちのう",
          "options": [
            "Artificial Intelligence (AI)",
            "Automation",
            "Confirming Automation",
            "Confirming Adoption / implementation"
          ],
          "correctAnswer": "Artificial Intelligence (AI)"
        },
        {
          "id": "u23_l1_2",
          "type": "spell",
          "prompt": "自動化",
          "furigana": "じどうか",
          "romaji": "jidouka",
          "english": "Build 'Automation'",
          "audioText": "じどうか",
          "tileBank": [
            "そ",
            "は",
            "か",
            "じ",
            "ど",
            "ん",
            "う",
            "を"
          ],
          "correctAnswer": "じどうか"
        },
        {
          "id": "u23_l1_3",
          "type": "cloze",
          "prompt": "私は自動化がすきです",
          "furigana": "わたしはじどうかがすきです",
          "romaji": "Watashi wa jidouka ga suki desu.",
          "english": "Fill in the blank with the correct particle for Automation.",
          "audioText": "自動化",
          "clozeSentence": "これは自動化 {{BLANK}} す。",
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
          "id": "u23_l1_4",
          "type": "scramble",
          "prompt": "これは自動化です",
          "furigana": "これはじどうかです",
          "romaji": "Kore wa jidouka desu.",
          "english": "This is Automation.",
          "audioText": "これは自動化です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "自動化",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "自動化",
            "です"
          ],
          "correctAnswer": "これは自動化です"
        },
        {
          "id": "u23_l1_5",
          "type": "speak",
          "prompt": "高齢化",
          "furigana": "こうれいか",
          "romaji": "koureika",
          "english": "Pronounce: Population aging",
          "audioText": "こうれいか",
          "targetSpeech": "高齢化",
          "options": [
            "Population aging",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "高齢化"
        },
        {
          "id": "u23_l1_6",
          "type": "dictate",
          "prompt": "高齢化をお願いします",
          "furigana": "こうれいかをおねがいします",
          "romaji": "koureika o onegaishimasu.",
          "english": "Population aging, please.",
          "audioText": "高齢化をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "高齢化",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "高齢化",
            "を",
            "お願いします"
          ],
          "correctAnswer": "高齢化をお願いします"
        },
        {
          "id": "u23_l1_7",
          "type": "match",
          "prompt": "人工知能・自動化・高齢化・少子化",
          "furigana": "じんこうちのう・じどうか・こうれいか・しょうしか",
          "romaji": "jinkou chinou, jidouka, koureika, shoushika",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じんこうちのう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "人工知能",
              "right": "Artificial Intelligence (AI)",
              "furigana": "じんこうちのう",
              "romaji": "jinkou chinou"
            },
            {
              "id": "p_1",
              "left": "自動化",
              "right": "Automation",
              "furigana": "じどうか",
              "romaji": "jidouka"
            },
            {
              "id": "p_2",
              "left": "高齢化",
              "right": "Population aging",
              "furigana": "こうれいか",
              "romaji": "koureika"
            },
            {
              "id": "p_3",
              "left": "少子化",
              "right": "Declining birthrate",
              "furigana": "しょうしか",
              "romaji": "shoushika"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l1_8",
          "type": "dialogue",
          "prompt": "人工知能について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "人工知能について教えていただけますか？",
          "furigana": "人工知能について教えていただけますか？",
          "romaji": "jinkou chinou ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Artificial Intelligence (AI)?",
          "audioText": "人工知能について教えていただけますか？",
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
      "id": "u23_l2",
      "unitId": "unit_23",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Declining birthrate & Innovation",
      "titleJp": "少子化・革新",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "少子化",
        "革新",
        "持続可能"
      ],
      "kanjiKeywords": [
        "少",
        "子",
        "化",
        "革",
        "新",
        "持",
        "続",
        "可",
        "能"
      ],
      "items": [
        {
          "id": "u23_l2_1",
          "type": "listen",
          "prompt": "少子化",
          "furigana": "しょうしか",
          "romaji": "shoushika",
          "english": "Declining birthrate",
          "audioText": "しょうしか",
          "options": [
            "Adoption / implementation",
            "Confirming Automation",
            "Innovation",
            "Declining birthrate"
          ],
          "correctAnswer": "Declining birthrate"
        },
        {
          "id": "u23_l2_2",
          "type": "spell",
          "prompt": "少子化",
          "furigana": "しょうしか",
          "romaji": "shoushika",
          "english": "Build 'Declining birthrate'",
          "audioText": "しょうしか",
          "tileBank": [
            "ょ",
            "つ",
            "う",
            "し",
            "る",
            "か",
            "き",
            "し"
          ],
          "correctAnswer": "しょうしか"
        },
        {
          "id": "u23_l2_3",
          "type": "cloze",
          "prompt": "私は革新がすきです",
          "furigana": "わたしはかくしんがすきです",
          "romaji": "Watashi wa kakushin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Innovation.",
          "audioText": "革新",
          "clozeSentence": "これは革新 {{BLANK}} す。",
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
          "id": "u23_l2_4",
          "type": "scramble",
          "prompt": "これは革新です",
          "furigana": "これはかくしんです",
          "romaji": "Kore wa kakushin desu.",
          "english": "This is Innovation.",
          "audioText": "これは革新です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "です",
            "革新",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "革新",
            "です"
          ],
          "correctAnswer": "これは革新です"
        },
        {
          "id": "u23_l2_5",
          "type": "speak",
          "prompt": "持続可能",
          "furigana": "じぞくかのう",
          "romaji": "jizoku kanou",
          "english": "Pronounce: Sustainable",
          "audioText": "じぞくかのう",
          "targetSpeech": "持続可能",
          "options": [
            "Sustainable",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "持続可能"
        },
        {
          "id": "u23_l2_6",
          "type": "dictate",
          "prompt": "持続可能をお願いします",
          "furigana": "じぞくかのうをおねがいします",
          "romaji": "jizoku kanou o onegaishimasu.",
          "english": "Sustainable, please.",
          "audioText": "持続可能をお願いします",
          "dictateTokens": [
            "持続可能",
            "です",
            "を",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "持続可能",
            "を",
            "お願いします"
          ],
          "correctAnswer": "持続可能をお願いします"
        },
        {
          "id": "u23_l2_7",
          "type": "match",
          "prompt": "少子化・革新・持続可能・普及",
          "furigana": "しょうしか・かくしん・じぞくかのう・ふきゅう",
          "romaji": "shoushika, kakushin, jizoku kanou, fukyuu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しょうしか",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "少子化",
              "right": "Declining birthrate",
              "furigana": "しょうしか",
              "romaji": "shoushika"
            },
            {
              "id": "p_1",
              "left": "革新",
              "right": "Innovation",
              "furigana": "かくしん",
              "romaji": "kakushin"
            },
            {
              "id": "p_2",
              "left": "持続可能",
              "right": "Sustainable",
              "furigana": "じぞくかのう",
              "romaji": "jizoku kanou"
            },
            {
              "id": "p_3",
              "left": "普及",
              "right": "Diffusion / spread",
              "furigana": "ふきゅう",
              "romaji": "fukyuu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l2_8",
          "type": "dialogue",
          "prompt": "自動化の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "自動化の準備はできていますか？",
          "furigana": "自動化の準備はできていますか？",
          "romaji": "jidouka no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Automation ready?",
          "audioText": "自動化の準備はできていますか？",
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
      "id": "u23_l3",
      "unitId": "unit_23",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Diffusion / spread & Development / R&D",
      "titleJp": "普及・開発",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "普及",
        "開発",
        "効率化"
      ],
      "kanjiKeywords": [
        "普",
        "及",
        "開",
        "発",
        "効",
        "率",
        "化"
      ],
      "items": [
        {
          "id": "u23_l3_1",
          "type": "listen",
          "prompt": "普及",
          "furigana": "ふきゅう",
          "romaji": "fukyuu",
          "english": "Diffusion / spread",
          "audioText": "ふきゅう",
          "options": [
            "Confirming Artificial Intelligence (AI)",
            "Challenge / issue to solve",
            "Diffusion / spread",
            "Confirming Artificial Intelligence (AI)"
          ],
          "correctAnswer": "Diffusion / spread"
        },
        {
          "id": "u23_l3_2",
          "type": "spell",
          "prompt": "普及",
          "furigana": "ふきゅう",
          "romaji": "fukyuu",
          "english": "Build 'Diffusion / spread'",
          "audioText": "ふきゅう",
          "tileBank": [
            "ゅ",
            "し",
            "き",
            "ふ",
            "う",
            "ね",
            "そ",
            "ぬ"
          ],
          "correctAnswer": "ふきゅう"
        },
        {
          "id": "u23_l3_3",
          "type": "cloze",
          "prompt": "私は開発がすきです",
          "furigana": "わたしはかいはつがすきです",
          "romaji": "Watashi wa kaihatsu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Development / R&D.",
          "audioText": "開発",
          "clozeSentence": "これは開発 {{BLANK}} す。",
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
          "id": "u23_l3_4",
          "type": "scramble",
          "prompt": "これは開発です",
          "furigana": "これはかいはつです",
          "romaji": "Kore wa kaihatsu desu.",
          "english": "This is Development / R&D.",
          "audioText": "これは開発です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "これは",
            "開発"
          ],
          "scrambleSolution": [
            "これは",
            "開発",
            "です"
          ],
          "correctAnswer": "これは開発です"
        },
        {
          "id": "u23_l3_5",
          "type": "speak",
          "prompt": "効率化",
          "furigana": "こうりつか",
          "romaji": "kouritsuka",
          "english": "Pronounce: Streamlining / efficiency",
          "audioText": "こうりつか",
          "targetSpeech": "効率化",
          "options": [
            "Streamlining / efficiency",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "効率化"
        },
        {
          "id": "u23_l3_6",
          "type": "dictate",
          "prompt": "効率化をお願いします",
          "furigana": "こうりつかをおねがいします",
          "romaji": "kouritsuka o onegaishimasu.",
          "english": "Streamlining / efficiency, please.",
          "audioText": "効率化をお願いします",
          "dictateTokens": [
            "効率化",
            "です",
            "お願いします",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "効率化",
            "を",
            "お願いします"
          ],
          "correctAnswer": "効率化をお願いします"
        },
        {
          "id": "u23_l3_7",
          "type": "match",
          "prompt": "普及・開発・効率化・導入",
          "furigana": "ふきゅう・かいはつ・こうりつか・どうにゅう",
          "romaji": "fukyuu, kaihatsu, kouritsuka, dounyuu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ふきゅう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "普及",
              "right": "Diffusion / spread",
              "furigana": "ふきゅう",
              "romaji": "fukyuu"
            },
            {
              "id": "p_1",
              "left": "開発",
              "right": "Development / R&D",
              "furigana": "かいはつ",
              "romaji": "kaihatsu"
            },
            {
              "id": "p_2",
              "left": "効率化",
              "right": "Streamlining / efficiency",
              "furigana": "こうりつか",
              "romaji": "kouritsuka"
            },
            {
              "id": "p_3",
              "left": "導入",
              "right": "Adoption / implementation",
              "furigana": "どうにゅう",
              "romaji": "dounyuu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l3_8",
          "type": "dialogue",
          "prompt": "高齢化についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "高齢化についてどう思われますか？",
          "furigana": "高齢化についてどう思われますか？",
          "romaji": "koureika ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Population aging?",
          "audioText": "高齢化についてどう思われますか？",
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
      "id": "u23_l4",
      "unitId": "unit_23",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Adoption / implementation & Challenge / issue to solve",
      "titleJp": "導入・課題",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "導入",
        "課題",
        "情報漏洩"
      ],
      "kanjiKeywords": [
        "導",
        "入",
        "課",
        "題",
        "情",
        "報",
        "漏",
        "洩"
      ],
      "items": [
        {
          "id": "u23_l4_1",
          "type": "listen",
          "prompt": "導入",
          "furigana": "どうにゅう",
          "romaji": "dounyuu",
          "english": "Adoption / implementation",
          "audioText": "どうにゅう",
          "options": [
            "Confirming Streamlining / efficiency",
            "Declining birthrate",
            "Adoption / implementation",
            "Innovation"
          ],
          "correctAnswer": "Adoption / implementation"
        },
        {
          "id": "u23_l4_2",
          "type": "spell",
          "prompt": "導入",
          "furigana": "どうにゅう",
          "romaji": "dounyuu",
          "english": "Build 'Adoption / implementation'",
          "audioText": "どうにゅう",
          "tileBank": [
            "に",
            "ひ",
            "う",
            "へ",
            "を",
            "ど",
            "ゅ",
            "う"
          ],
          "correctAnswer": "どうにゅう"
        },
        {
          "id": "u23_l4_3",
          "type": "cloze",
          "prompt": "私は課題がすきです",
          "furigana": "わたしはかだいがすきです",
          "romaji": "Watashi wa kadai ga suki desu.",
          "english": "Fill in the blank with the correct particle for Challenge / issue to solve.",
          "audioText": "課題",
          "clozeSentence": "これは課題 {{BLANK}} す。",
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
          "id": "u23_l4_4",
          "type": "scramble",
          "prompt": "これは課題です",
          "furigana": "これはかだいです",
          "romaji": "Kore wa kadai desu.",
          "english": "This is Challenge / issue to solve.",
          "audioText": "これは課題です",
          "scrambleTokens": [
            "ではありません",
            "課題",
            "これは",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "課題",
            "です"
          ],
          "correctAnswer": "これは課題です"
        },
        {
          "id": "u23_l4_5",
          "type": "speak",
          "prompt": "情報漏洩",
          "furigana": "じょうほうろうえい",
          "romaji": "jouhou rouei",
          "english": "Pronounce: Data leak / security breach",
          "audioText": "じょうほうろうえい",
          "targetSpeech": "情報漏洩",
          "options": [
            "Data leak / security breach",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "情報漏洩"
        },
        {
          "id": "u23_l4_6",
          "type": "dictate",
          "prompt": "情報漏洩をお願いします",
          "furigana": "じょうほうろうえいをおねがいします",
          "romaji": "jouhou rouei o onegaishimasu.",
          "english": "Data leak / security breach, please.",
          "audioText": "情報漏洩をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "お願いします",
            "ありがとう",
            "情報漏洩"
          ],
          "dictateSolution": [
            "情報漏洩",
            "を",
            "お願いします"
          ],
          "correctAnswer": "情報漏洩をお願いします"
        },
        {
          "id": "u23_l4_7",
          "type": "match",
          "prompt": "導入・課題・情報漏洩・倫理",
          "furigana": "どうにゅう・かだい・じょうほうろうえい・りんり",
          "romaji": "dounyuu, kadai, jouhou rouei, rinri",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "どうにゅう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "導入",
              "right": "Adoption / implementation",
              "furigana": "どうにゅう",
              "romaji": "dounyuu"
            },
            {
              "id": "p_1",
              "left": "課題",
              "right": "Challenge / issue to solve",
              "furigana": "かだい",
              "romaji": "kadai"
            },
            {
              "id": "p_2",
              "left": "情報漏洩",
              "right": "Data leak / security breach",
              "furigana": "じょうほうろうえい",
              "romaji": "jouhou rouei"
            },
            {
              "id": "p_3",
              "left": "倫理",
              "right": "Ethics / moral standards",
              "furigana": "りんり",
              "romaji": "rinri"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l4_8",
          "type": "dialogue",
          "prompt": "次は少子化に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は少子化に進みましょう。",
          "furigana": "次は少子化に進みましょう。",
          "romaji": "Tsugi wa shoushika ni susumimashou.",
          "english": "Speaker: Let's proceed to Declining birthrate next.",
          "audioText": "次は少子化に進みましょう。",
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
      "id": "u23_l5",
      "unitId": "unit_23",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Ethics / moral standards & Transformation / reform",
      "titleJp": "倫理・変革",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "倫理",
        "変革",
        "将来性"
      ],
      "kanjiKeywords": [
        "倫",
        "理",
        "変",
        "革",
        "将",
        "来",
        "性"
      ],
      "items": [
        {
          "id": "u23_l5_1",
          "type": "listen",
          "prompt": "倫理",
          "furigana": "りんり",
          "romaji": "rinri",
          "english": "Ethics / moral standards",
          "audioText": "りんり",
          "options": [
            "Ethics / moral standards",
            "Confirming Sustainable",
            "Confirming Automation",
            "Data leak / security breach"
          ],
          "correctAnswer": "Ethics / moral standards"
        },
        {
          "id": "u23_l5_2",
          "type": "spell",
          "prompt": "倫理",
          "furigana": "りんり",
          "romaji": "rinri",
          "english": "Build 'Ethics / moral standards'",
          "audioText": "りんり",
          "tileBank": [
            "り",
            "か",
            "り",
            "ん",
            "け",
            "あ",
            "ら",
            "ゆ"
          ],
          "correctAnswer": "りんり"
        },
        {
          "id": "u23_l5_3",
          "type": "cloze",
          "prompt": "私は変革がすきです",
          "furigana": "わたしはへんかくがすきです",
          "romaji": "Watashi wa henkaku ga suki desu.",
          "english": "Fill in the blank with the correct particle for Transformation / reform.",
          "audioText": "変革",
          "clozeSentence": "これは変革 {{BLANK}} す。",
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
          "id": "u23_l5_4",
          "type": "scramble",
          "prompt": "これは変革です",
          "furigana": "これはへんかくです",
          "romaji": "Kore wa henkaku desu.",
          "english": "This is Transformation / reform.",
          "audioText": "これは変革です",
          "scrambleTokens": [
            "変革",
            "ではありません",
            "これは",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "変革",
            "です"
          ],
          "correctAnswer": "これは変革です"
        },
        {
          "id": "u23_l5_5",
          "type": "speak",
          "prompt": "将来性",
          "furigana": "しょうらいせい",
          "romaji": "shouraisei",
          "english": "Pronounce: Future potential / promise",
          "audioText": "しょうらいせい",
          "targetSpeech": "将来性",
          "options": [
            "Future potential / promise",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "将来性"
        },
        {
          "id": "u23_l5_6",
          "type": "dictate",
          "prompt": "将来性をお願いします",
          "furigana": "しょうらいせいをおねがいします",
          "romaji": "shouraisei o onegaishimasu.",
          "english": "Future potential / promise, please.",
          "audioText": "将来性をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "ありがとう",
            "将来性",
            "お願いします"
          ],
          "dictateSolution": [
            "将来性",
            "を",
            "お願いします"
          ],
          "correctAnswer": "将来性をお願いします"
        },
        {
          "id": "u23_l5_7",
          "type": "match",
          "prompt": "倫理・変革・将来性・人工知能の確認",
          "furigana": "りんり・へんかく・しょうらいせい・じんこうちのうのかくにん",
          "romaji": "rinri, henkaku, shouraisei, jinkou chinou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "りんり",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "倫理",
              "right": "Ethics / moral standards",
              "furigana": "りんり",
              "romaji": "rinri"
            },
            {
              "id": "p_1",
              "left": "変革",
              "right": "Transformation / reform",
              "furigana": "へんかく",
              "romaji": "henkaku"
            },
            {
              "id": "p_2",
              "left": "将来性",
              "right": "Future potential / promise",
              "furigana": "しょうらいせい",
              "romaji": "shouraisei"
            },
            {
              "id": "p_3",
              "left": "人工知能の確認",
              "right": "Confirming Artificial Intelligence (AI)",
              "furigana": "じんこうちのうのかくにん",
              "romaji": "jinkou chinou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l5_8",
          "type": "dialogue",
          "prompt": "人工知能について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "人工知能について教えていただけますか？",
          "furigana": "人工知能について教えていただけますか？",
          "romaji": "jinkou chinou ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Artificial Intelligence (AI)?",
          "audioText": "人工知能について教えていただけますか？",
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
      "id": "u23_l6",
      "unitId": "unit_23",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Artificial Intelligence (AI) & Confirming Automation",
      "titleJp": "人工知能の確認・自動化の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "人工知能の確認",
        "自動化の確認",
        "高齢化の確認"
      ],
      "kanjiKeywords": [
        "人",
        "工",
        "知",
        "能",
        "確",
        "認",
        "自",
        "動",
        "化",
        "確",
        "認",
        "高",
        "齢",
        "化",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u23_l6_1",
          "type": "listen",
          "prompt": "人工知能の確認",
          "furigana": "じんこうちのうのかくにん",
          "romaji": "jinkou chinou no kakunin",
          "english": "Confirming Artificial Intelligence (AI)",
          "audioText": "じんこうちのうのかくにん",
          "options": [
            "Development / R&D",
            "Confirming Artificial Intelligence (AI)",
            "Streamlining / efficiency",
            "Confirming Sustainable"
          ],
          "correctAnswer": "Confirming Artificial Intelligence (AI)"
        },
        {
          "id": "u23_l6_2",
          "type": "spell",
          "prompt": "人工知能の確認",
          "furigana": "じんこうちのうのかくにん",
          "romaji": "jinkou chinou no kakunin",
          "english": "Build 'Confirming Artificial Intelligence (AI)'",
          "audioText": "じんこうちのうのかくにん",
          "tileBank": [
            "う",
            "ん",
            "じ",
            "の",
            "う",
            "の",
            "こ",
            "ち"
          ],
          "correctAnswer": "じんこうちのうのかくにん"
        },
        {
          "id": "u23_l6_3",
          "type": "cloze",
          "prompt": "私は自動化の確認がすきです",
          "furigana": "わたしはじどうかのかくにんがすきです",
          "romaji": "Watashi wa jidouka no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Automation.",
          "audioText": "自動化の確認",
          "clozeSentence": "これは自動化の確認 {{BLANK}} す。",
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
          "id": "u23_l6_4",
          "type": "scramble",
          "prompt": "これは自動化の確認です",
          "furigana": "これはじどうかのかくにんです",
          "romaji": "Kore wa jidouka no kakunin desu.",
          "english": "This is Confirming Automation.",
          "audioText": "これは自動化の確認です",
          "scrambleTokens": [
            "それ",
            "自動化の確認",
            "です",
            "ではありません",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "自動化の確認",
            "です"
          ],
          "correctAnswer": "これは自動化の確認です"
        },
        {
          "id": "u23_l6_5",
          "type": "speak",
          "prompt": "高齢化の確認",
          "furigana": "こうれいかのかくにん",
          "romaji": "koureika no kakunin",
          "english": "Pronounce: Confirming Population aging",
          "audioText": "こうれいかのかくにん",
          "targetSpeech": "高齢化の確認",
          "options": [
            "Confirming Population aging",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "高齢化の確認"
        },
        {
          "id": "u23_l6_6",
          "type": "dictate",
          "prompt": "高齢化の確認をお願いします",
          "furigana": "こうれいかのかくにんをおねがいします",
          "romaji": "koureika no kakunin o onegaishimasu.",
          "english": "Confirming Population aging, please.",
          "audioText": "高齢化の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "です",
            "高齢化の確認",
            "お願いします"
          ],
          "dictateSolution": [
            "高齢化の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "高齢化の確認をお願いします"
        },
        {
          "id": "u23_l6_7",
          "type": "match",
          "prompt": "人工知能の確認・自動化の確認・高齢化の確認・少子化の確認",
          "furigana": "じんこうちのうのかくにん・じどうかのかくにん・こうれいかのかくにん・しょうしかのかくにん",
          "romaji": "jinkou chinou no kakunin, jidouka no kakunin, koureika no kakunin, shoushika no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じんこうちのうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "人工知能の確認",
              "right": "Confirming Artificial Intelligence (AI)",
              "furigana": "じんこうちのうのかくにん",
              "romaji": "jinkou chinou no kakunin"
            },
            {
              "id": "p_1",
              "left": "自動化の確認",
              "right": "Confirming Automation",
              "furigana": "じどうかのかくにん",
              "romaji": "jidouka no kakunin"
            },
            {
              "id": "p_2",
              "left": "高齢化の確認",
              "right": "Confirming Population aging",
              "furigana": "こうれいかのかくにん",
              "romaji": "koureika no kakunin"
            },
            {
              "id": "p_3",
              "left": "少子化の確認",
              "right": "Confirming Declining birthrate",
              "furigana": "しょうしかのかくにん",
              "romaji": "shoushika no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l6_8",
          "type": "dialogue",
          "prompt": "自動化の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "自動化の準備はできていますか？",
          "furigana": "自動化の準備はできていますか？",
          "romaji": "jidouka no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Automation ready?",
          "audioText": "自動化の準備はできていますか？",
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
      "id": "u23_l7",
      "unitId": "unit_23",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Declining birthrate & Confirming Innovation",
      "titleJp": "少子化の確認・革新の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "少子化の確認",
        "革新の確認",
        "持続可能の確認"
      ],
      "kanjiKeywords": [
        "少",
        "子",
        "化",
        "確",
        "認",
        "革",
        "新",
        "確",
        "認",
        "持",
        "続",
        "可",
        "能",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u23_l7_1",
          "type": "listen",
          "prompt": "少子化の確認",
          "furigana": "しょうしかのかくにん",
          "romaji": "shoushika no kakunin",
          "english": "Confirming Declining birthrate",
          "audioText": "しょうしかのかくにん",
          "options": [
            "Confirming Declining birthrate",
            "Confirming Sustainable",
            "Innovation",
            "Confirming Diffusion / spread"
          ],
          "correctAnswer": "Confirming Declining birthrate"
        },
        {
          "id": "u23_l7_2",
          "type": "spell",
          "prompt": "少子化の確認",
          "furigana": "しょうしかのかくにん",
          "romaji": "shoushika no kakunin",
          "english": "Build 'Confirming Declining birthrate'",
          "audioText": "しょうしかのかくにん",
          "tileBank": [
            "し",
            "の",
            "か",
            "く",
            "し",
            "う",
            "ょ",
            "か"
          ],
          "correctAnswer": "しょうしかのかくにん"
        },
        {
          "id": "u23_l7_3",
          "type": "cloze",
          "prompt": "私は革新の確認がすきです",
          "furigana": "わたしはかくしんのかくにんがすきです",
          "romaji": "Watashi wa kakushin no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Innovation.",
          "audioText": "革新の確認",
          "clozeSentence": "これは革新の確認 {{BLANK}} す。",
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
          "id": "u23_l7_4",
          "type": "scramble",
          "prompt": "これは革新の確認です",
          "furigana": "これはかくしんのかくにんです",
          "romaji": "Kore wa kakushin no kakunin desu.",
          "english": "This is Confirming Innovation.",
          "audioText": "これは革新の確認です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "それ",
            "革新の確認",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "革新の確認",
            "です"
          ],
          "correctAnswer": "これは革新の確認です"
        },
        {
          "id": "u23_l7_5",
          "type": "speak",
          "prompt": "持続可能の確認",
          "furigana": "じぞくかのうのかくにん",
          "romaji": "jizoku kanou no kakunin",
          "english": "Pronounce: Confirming Sustainable",
          "audioText": "じぞくかのうのかくにん",
          "targetSpeech": "持続可能の確認",
          "options": [
            "Confirming Sustainable",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "持続可能の確認"
        },
        {
          "id": "u23_l7_6",
          "type": "dictate",
          "prompt": "持続可能の確認をお願いします",
          "furigana": "じぞくかのうのかくにんをおねがいします",
          "romaji": "jizoku kanou no kakunin o onegaishimasu.",
          "english": "Confirming Sustainable, please.",
          "audioText": "持続可能の確認をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "を",
            "ありがとう",
            "持続可能の確認"
          ],
          "dictateSolution": [
            "持続可能の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "持続可能の確認をお願いします"
        },
        {
          "id": "u23_l7_7",
          "type": "match",
          "prompt": "少子化の確認・革新の確認・持続可能の確認・普及の確認",
          "furigana": "しょうしかのかくにん・かくしんのかくにん・じぞくかのうのかくにん・ふきゅうのかくにん",
          "romaji": "shoushika no kakunin, kakushin no kakunin, jizoku kanou no kakunin, fukyuu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しょうしかのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "少子化の確認",
              "right": "Confirming Declining birthrate",
              "furigana": "しょうしかのかくにん",
              "romaji": "shoushika no kakunin"
            },
            {
              "id": "p_1",
              "left": "革新の確認",
              "right": "Confirming Innovation",
              "furigana": "かくしんのかくにん",
              "romaji": "kakushin no kakunin"
            },
            {
              "id": "p_2",
              "left": "持続可能の確認",
              "right": "Confirming Sustainable",
              "furigana": "じぞくかのうのかくにん",
              "romaji": "jizoku kanou no kakunin"
            },
            {
              "id": "p_3",
              "left": "普及の確認",
              "right": "Confirming Diffusion / spread",
              "furigana": "ふきゅうのかくにん",
              "romaji": "fukyuu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l7_8",
          "type": "dialogue",
          "prompt": "高齢化についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "高齢化についてどう思われますか？",
          "furigana": "高齢化についてどう思われますか？",
          "romaji": "koureika ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Population aging?",
          "audioText": "高齢化についてどう思われますか？",
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
      "id": "u23_l8",
      "unitId": "unit_23",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Diffusion / spread & Confirming Development / R&D",
      "titleJp": "普及の確認・開発の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "普及の確認",
        "開発の確認",
        "効率化の確認"
      ],
      "kanjiKeywords": [
        "普",
        "及",
        "確",
        "認",
        "開",
        "発",
        "確",
        "認",
        "効",
        "率",
        "化",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u23_l8_1",
          "type": "listen",
          "prompt": "普及の確認",
          "furigana": "ふきゅうのかくにん",
          "romaji": "fukyuu no kakunin",
          "english": "Confirming Diffusion / spread",
          "audioText": "ふきゅうのかくにん",
          "options": [
            "Innovation",
            "Confirming Diffusion / spread",
            "Confirming Innovation",
            "Confirming Transformation / reform"
          ],
          "correctAnswer": "Confirming Diffusion / spread"
        },
        {
          "id": "u23_l8_2",
          "type": "spell",
          "prompt": "普及の確認",
          "furigana": "ふきゅうのかくにん",
          "romaji": "fukyuu no kakunin",
          "english": "Build 'Confirming Diffusion / spread'",
          "audioText": "ふきゅうのかくにん",
          "tileBank": [
            "ゅ",
            "か",
            "に",
            "う",
            "ふ",
            "の",
            "き",
            "く"
          ],
          "correctAnswer": "ふきゅうのかくにん"
        },
        {
          "id": "u23_l8_3",
          "type": "cloze",
          "prompt": "私は開発の確認がすきです",
          "furigana": "わたしはかいはつのかくにんがすきです",
          "romaji": "Watashi wa kaihatsu no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Development / R&D.",
          "audioText": "開発の確認",
          "clozeSentence": "これは開発の確認 {{BLANK}} す。",
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
          "id": "u23_l8_4",
          "type": "scramble",
          "prompt": "これは開発の確認です",
          "furigana": "これはかいはつのかくにんです",
          "romaji": "Kore wa kaihatsu no kakunin desu.",
          "english": "This is Confirming Development / R&D.",
          "audioText": "これは開発の確認です",
          "scrambleTokens": [
            "です",
            "それ",
            "これは",
            "開発の確認",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "開発の確認",
            "です"
          ],
          "correctAnswer": "これは開発の確認です"
        },
        {
          "id": "u23_l8_5",
          "type": "speak",
          "prompt": "効率化の確認",
          "furigana": "こうりつかのかくにん",
          "romaji": "kouritsuka no kakunin",
          "english": "Pronounce: Confirming Streamlining / efficiency",
          "audioText": "こうりつかのかくにん",
          "targetSpeech": "効率化の確認",
          "options": [
            "Confirming Streamlining / efficiency",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "効率化の確認"
        },
        {
          "id": "u23_l8_6",
          "type": "dictate",
          "prompt": "効率化の確認をお願いします",
          "furigana": "こうりつかのかくにんをおねがいします",
          "romaji": "kouritsuka no kakunin o onegaishimasu.",
          "english": "Confirming Streamlining / efficiency, please.",
          "audioText": "効率化の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "効率化の確認",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "効率化の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "効率化の確認をお願いします"
        },
        {
          "id": "u23_l8_7",
          "type": "match",
          "prompt": "普及の確認・開発の確認・効率化の確認・導入の確認",
          "furigana": "ふきゅうのかくにん・かいはつのかくにん・こうりつかのかくにん・どうにゅうのかくにん",
          "romaji": "fukyuu no kakunin, kaihatsu no kakunin, kouritsuka no kakunin, dounyuu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ふきゅうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "普及の確認",
              "right": "Confirming Diffusion / spread",
              "furigana": "ふきゅうのかくにん",
              "romaji": "fukyuu no kakunin"
            },
            {
              "id": "p_1",
              "left": "開発の確認",
              "right": "Confirming Development / R&D",
              "furigana": "かいはつのかくにん",
              "romaji": "kaihatsu no kakunin"
            },
            {
              "id": "p_2",
              "left": "効率化の確認",
              "right": "Confirming Streamlining / efficiency",
              "furigana": "こうりつかのかくにん",
              "romaji": "kouritsuka no kakunin"
            },
            {
              "id": "p_3",
              "left": "導入の確認",
              "right": "Confirming Adoption / implementation",
              "furigana": "どうにゅうのかくにん",
              "romaji": "dounyuu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l8_8",
          "type": "dialogue",
          "prompt": "次は少子化に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は少子化に進みましょう。",
          "furigana": "次は少子化に進みましょう。",
          "romaji": "Tsugi wa shoushika ni susumimashou.",
          "english": "Speaker: Let's proceed to Declining birthrate next.",
          "audioText": "次は少子化に進みましょう。",
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
      "id": "u23_l9",
      "unitId": "unit_23",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Adoption / implementation & Confirming Challenge / issue to solve",
      "titleJp": "導入の確認・課題の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "導入の確認",
        "課題の確認",
        "情報漏洩の確認"
      ],
      "kanjiKeywords": [
        "導",
        "入",
        "確",
        "認",
        "課",
        "題",
        "確",
        "認",
        "情",
        "報",
        "漏",
        "洩",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u23_l9_1",
          "type": "listen",
          "prompt": "導入の確認",
          "furigana": "どうにゅうのかくにん",
          "romaji": "dounyuu no kakunin",
          "english": "Confirming Adoption / implementation",
          "audioText": "どうにゅうのかくにん",
          "options": [
            "Future potential / promise",
            "Confirming Adoption / implementation",
            "Streamlining / efficiency",
            "Confirming Ethics / moral standards"
          ],
          "correctAnswer": "Confirming Adoption / implementation"
        },
        {
          "id": "u23_l9_2",
          "type": "spell",
          "prompt": "導入の確認",
          "furigana": "どうにゅうのかくにん",
          "romaji": "dounyuu no kakunin",
          "english": "Build 'Confirming Adoption / implementation'",
          "audioText": "どうにゅうのかくにん",
          "tileBank": [
            "う",
            "く",
            "に",
            "ゅ",
            "う",
            "か",
            "ど",
            "の"
          ],
          "correctAnswer": "どうにゅうのかくにん"
        },
        {
          "id": "u23_l9_3",
          "type": "cloze",
          "prompt": "私は課題の確認がすきです",
          "furigana": "わたしはかだいのかくにんがすきです",
          "romaji": "Watashi wa kadai no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Challenge / issue to solve.",
          "audioText": "課題の確認",
          "clozeSentence": "これは課題の確認 {{BLANK}} す。",
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
          "id": "u23_l9_4",
          "type": "scramble",
          "prompt": "これは課題の確認です",
          "furigana": "これはかだいのかくにんです",
          "romaji": "Kore wa kadai no kakunin desu.",
          "english": "This is Confirming Challenge / issue to solve.",
          "audioText": "これは課題の確認です",
          "scrambleTokens": [
            "これは",
            "です",
            "ではありません",
            "課題の確認",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "課題の確認",
            "です"
          ],
          "correctAnswer": "これは課題の確認です"
        },
        {
          "id": "u23_l9_5",
          "type": "speak",
          "prompt": "情報漏洩の確認",
          "furigana": "じょうほうろうえいのかくにん",
          "romaji": "jouhou rouei no kakunin",
          "english": "Pronounce: Confirming Data leak / security breach",
          "audioText": "じょうほうろうえいのかくにん",
          "targetSpeech": "情報漏洩の確認",
          "options": [
            "Confirming Data leak / security breach",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "情報漏洩の確認"
        },
        {
          "id": "u23_l9_6",
          "type": "dictate",
          "prompt": "情報漏洩の確認をお願いします",
          "furigana": "じょうほうろうえいのかくにんをおねがいします",
          "romaji": "jouhou rouei no kakunin o onegaishimasu.",
          "english": "Confirming Data leak / security breach, please.",
          "audioText": "情報漏洩の確認をお願いします",
          "dictateTokens": [
            "を",
            "です",
            "ありがとう",
            "情報漏洩の確認",
            "お願いします"
          ],
          "dictateSolution": [
            "情報漏洩の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "情報漏洩の確認をお願いします"
        },
        {
          "id": "u23_l9_7",
          "type": "match",
          "prompt": "導入の確認・課題の確認・情報漏洩の確認・倫理の確認",
          "furigana": "どうにゅうのかくにん・かだいのかくにん・じょうほうろうえいのかくにん・りんりのかくにん",
          "romaji": "dounyuu no kakunin, kadai no kakunin, jouhou rouei no kakunin, rinri no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "どうにゅうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "導入の確認",
              "right": "Confirming Adoption / implementation",
              "furigana": "どうにゅうのかくにん",
              "romaji": "dounyuu no kakunin"
            },
            {
              "id": "p_1",
              "left": "課題の確認",
              "right": "Confirming Challenge / issue to solve",
              "furigana": "かだいのかくにん",
              "romaji": "kadai no kakunin"
            },
            {
              "id": "p_2",
              "left": "情報漏洩の確認",
              "right": "Confirming Data leak / security breach",
              "furigana": "じょうほうろうえいのかくにん",
              "romaji": "jouhou rouei no kakunin"
            },
            {
              "id": "p_3",
              "left": "倫理の確認",
              "right": "Confirming Ethics / moral standards",
              "furigana": "りんりのかくにん",
              "romaji": "rinri no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l9_8",
          "type": "dialogue",
          "prompt": "人工知能について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "人工知能について教えていただけますか？",
          "furigana": "人工知能について教えていただけますか？",
          "romaji": "jinkou chinou ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Artificial Intelligence (AI)?",
          "audioText": "人工知能について教えていただけますか？",
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
      "id": "u23_l10",
      "unitId": "unit_23",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Ethics / moral standards & Confirming Transformation / reform",
      "titleJp": "倫理の確認・変革の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "倫理の確認",
        "変革の確認",
        "将来性の確認"
      ],
      "kanjiKeywords": [
        "倫",
        "理",
        "確",
        "認",
        "変",
        "革",
        "確",
        "認",
        "将",
        "来",
        "性",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u23_l10_1",
          "type": "listen",
          "prompt": "倫理の確認",
          "furigana": "りんりのかくにん",
          "romaji": "rinri no kakunin",
          "english": "Confirming Ethics / moral standards",
          "audioText": "りんりのかくにん",
          "options": [
            "Confirming Automation",
            "Transformation / reform",
            "Confirming Ethics / moral standards",
            "Confirming Declining birthrate"
          ],
          "correctAnswer": "Confirming Ethics / moral standards"
        },
        {
          "id": "u23_l10_2",
          "type": "spell",
          "prompt": "倫理の確認",
          "furigana": "りんりのかくにん",
          "romaji": "rinri no kakunin",
          "english": "Build 'Confirming Ethics / moral standards'",
          "audioText": "りんりのかくにん",
          "tileBank": [
            "か",
            "に",
            "ん",
            "ん",
            "り",
            "く",
            "の",
            "り"
          ],
          "correctAnswer": "りんりのかくにん"
        },
        {
          "id": "u23_l10_3",
          "type": "cloze",
          "prompt": "私は変革の確認がすきです",
          "furigana": "わたしはへんかくのかくにんがすきです",
          "romaji": "Watashi wa henkaku no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Transformation / reform.",
          "audioText": "変革の確認",
          "clozeSentence": "これは変革の確認 {{BLANK}} す。",
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
          "id": "u23_l10_4",
          "type": "scramble",
          "prompt": "これは変革の確認です",
          "furigana": "これはへんかくのかくにんです",
          "romaji": "Kore wa henkaku no kakunin desu.",
          "english": "This is Confirming Transformation / reform.",
          "audioText": "これは変革の確認です",
          "scrambleTokens": [
            "です",
            "それ",
            "ではありません",
            "これは",
            "変革の確認"
          ],
          "scrambleSolution": [
            "これは",
            "変革の確認",
            "です"
          ],
          "correctAnswer": "これは変革の確認です"
        },
        {
          "id": "u23_l10_5",
          "type": "speak",
          "prompt": "将来性の確認",
          "furigana": "しょうらいせいのかくにん",
          "romaji": "shouraisei no kakunin",
          "english": "Pronounce: Confirming Future potential / promise",
          "audioText": "しょうらいせいのかくにん",
          "targetSpeech": "将来性の確認",
          "options": [
            "Confirming Future potential / promise",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "将来性の確認"
        },
        {
          "id": "u23_l10_6",
          "type": "dictate",
          "prompt": "将来性の確認をお願いします",
          "furigana": "しょうらいせいのかくにんをおねがいします",
          "romaji": "shouraisei no kakunin o onegaishimasu.",
          "english": "Confirming Future potential / promise, please.",
          "audioText": "将来性の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "将来性の確認",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "将来性の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "将来性の確認をお願いします"
        },
        {
          "id": "u23_l10_7",
          "type": "match",
          "prompt": "倫理の確認・変革の確認・将来性の確認・人工知能の確認",
          "furigana": "りんりのかくにん・へんかくのかくにん・しょうらいせいのかくにん・じんこうちのうのかくにん",
          "romaji": "rinri no kakunin, henkaku no kakunin, shouraisei no kakunin, jinkou chinou no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "りんりのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "倫理の確認",
              "right": "Confirming Ethics / moral standards",
              "furigana": "りんりのかくにん",
              "romaji": "rinri no kakunin"
            },
            {
              "id": "p_1",
              "left": "変革の確認",
              "right": "Confirming Transformation / reform",
              "furigana": "へんかくのかくにん",
              "romaji": "henkaku no kakunin"
            },
            {
              "id": "p_2",
              "left": "将来性の確認",
              "right": "Confirming Future potential / promise",
              "furigana": "しょうらいせいのかくにん",
              "romaji": "shouraisei no kakunin"
            },
            {
              "id": "p_3",
              "left": "人工知能の確認",
              "right": "Confirming Artificial Intelligence (AI)",
              "furigana": "じんこうちのうのかくにん",
              "romaji": "jinkou chinou no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l10_8",
          "type": "dialogue",
          "prompt": "自動化の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "自動化の準備はできていますか？",
          "furigana": "自動化の準備はできていますか？",
          "romaji": "jidouka no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Automation ready?",
          "audioText": "自動化の準備はできていますか？",
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
      "id": "u23_l11",
      "unitId": "unit_23",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Artificial Intelligence (AI) & Confirming Automation",
      "titleJp": "人工知能の確認・自動化の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "人工知能の確認",
        "自動化の確認",
        "高齢化の確認"
      ],
      "kanjiKeywords": [
        "人",
        "工",
        "知",
        "能",
        "確",
        "認",
        "自",
        "動",
        "化",
        "確",
        "認",
        "高",
        "齢",
        "化",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u23_l11_1",
          "type": "listen",
          "prompt": "人工知能の確認",
          "furigana": "じんこうちのうのかくにん",
          "romaji": "jinkou chinou no kakunin",
          "english": "Confirming Artificial Intelligence (AI)",
          "audioText": "じんこうちのうのかくにん",
          "options": [
            "Ethics / moral standards",
            "Confirming Artificial Intelligence (AI)",
            "Population aging",
            "Confirming Future potential / promise"
          ],
          "correctAnswer": "Confirming Artificial Intelligence (AI)"
        },
        {
          "id": "u23_l11_2",
          "type": "spell",
          "prompt": "人工知能の確認",
          "furigana": "じんこうちのうのかくにん",
          "romaji": "jinkou chinou no kakunin",
          "english": "Build 'Confirming Artificial Intelligence (AI)'",
          "audioText": "じんこうちのうのかくにん",
          "tileBank": [
            "う",
            "の",
            "こ",
            "ち",
            "ん",
            "じ",
            "の",
            "う"
          ],
          "correctAnswer": "じんこうちのうのかくにん"
        },
        {
          "id": "u23_l11_3",
          "type": "cloze",
          "prompt": "私は自動化の確認がすきです",
          "furigana": "わたしはじどうかのかくにんがすきです",
          "romaji": "Watashi wa jidouka no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Automation.",
          "audioText": "自動化の確認",
          "clozeSentence": "これは自動化の確認 {{BLANK}} す。",
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
          "id": "u23_l11_4",
          "type": "scramble",
          "prompt": "これは自動化の確認です",
          "furigana": "これはじどうかのかくにんです",
          "romaji": "Kore wa jidouka no kakunin desu.",
          "english": "This is Confirming Automation.",
          "audioText": "これは自動化の確認です",
          "scrambleTokens": [
            "です",
            "これは",
            "それ",
            "ではありません",
            "自動化の確認"
          ],
          "scrambleSolution": [
            "これは",
            "自動化の確認",
            "です"
          ],
          "correctAnswer": "これは自動化の確認です"
        },
        {
          "id": "u23_l11_5",
          "type": "speak",
          "prompt": "高齢化の確認",
          "furigana": "こうれいかのかくにん",
          "romaji": "koureika no kakunin",
          "english": "Pronounce: Confirming Population aging",
          "audioText": "こうれいかのかくにん",
          "targetSpeech": "高齢化の確認",
          "options": [
            "Confirming Population aging",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "高齢化の確認"
        },
        {
          "id": "u23_l11_6",
          "type": "dictate",
          "prompt": "高齢化の確認をお願いします",
          "furigana": "こうれいかのかくにんをおねがいします",
          "romaji": "koureika no kakunin o onegaishimasu.",
          "english": "Confirming Population aging, please.",
          "audioText": "高齢化の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "高齢化の確認",
            "です",
            "を"
          ],
          "dictateSolution": [
            "高齢化の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "高齢化の確認をお願いします"
        },
        {
          "id": "u23_l11_7",
          "type": "match",
          "prompt": "人工知能の確認・自動化の確認・高齢化の確認・少子化の確認",
          "furigana": "じんこうちのうのかくにん・じどうかのかくにん・こうれいかのかくにん・しょうしかのかくにん",
          "romaji": "jinkou chinou no kakunin, jidouka no kakunin, koureika no kakunin, shoushika no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じんこうちのうのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "人工知能の確認",
              "right": "Confirming Artificial Intelligence (AI)",
              "furigana": "じんこうちのうのかくにん",
              "romaji": "jinkou chinou no kakunin"
            },
            {
              "id": "p_1",
              "left": "自動化の確認",
              "right": "Confirming Automation",
              "furigana": "じどうかのかくにん",
              "romaji": "jidouka no kakunin"
            },
            {
              "id": "p_2",
              "left": "高齢化の確認",
              "right": "Confirming Population aging",
              "furigana": "こうれいかのかくにん",
              "romaji": "koureika no kakunin"
            },
            {
              "id": "p_3",
              "left": "少子化の確認",
              "right": "Confirming Declining birthrate",
              "furigana": "しょうしかのかくにん",
              "romaji": "shoushika no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l11_8",
          "type": "dialogue",
          "prompt": "高齢化についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "高齢化についてどう思われますか？",
          "furigana": "高齢化についてどう思われますか？",
          "romaji": "koureika ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Population aging?",
          "audioText": "高齢化についてどう思われますか？",
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
      "id": "u23_l12",
      "unitId": "unit_23",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Declining birthrate & Confirming Innovation",
      "titleJp": "少子化の確認・革新の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "少子化の確認",
        "革新の確認",
        "持続可能の確認"
      ],
      "kanjiKeywords": [
        "少",
        "子",
        "化",
        "確",
        "認",
        "革",
        "新",
        "確",
        "認",
        "持",
        "続",
        "可",
        "能",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u23_l12_1",
          "type": "listen",
          "prompt": "少子化の確認",
          "furigana": "しょうしかのかくにん",
          "romaji": "shoushika no kakunin",
          "english": "Confirming Declining birthrate",
          "audioText": "しょうしかのかくにん",
          "options": [
            "Confirming Declining birthrate",
            "Innovation",
            "Confirming Sustainable",
            "Confirming Development / R&D"
          ],
          "correctAnswer": "Confirming Declining birthrate"
        },
        {
          "id": "u23_l12_2",
          "type": "spell",
          "prompt": "少子化の確認",
          "furigana": "しょうしかのかくにん",
          "romaji": "shoushika no kakunin",
          "english": "Build 'Confirming Declining birthrate'",
          "audioText": "しょうしかのかくにん",
          "tileBank": [
            "の",
            "ょ",
            "し",
            "く",
            "し",
            "う",
            "か",
            "か"
          ],
          "correctAnswer": "しょうしかのかくにん"
        },
        {
          "id": "u23_l12_3",
          "type": "cloze",
          "prompt": "私は革新の確認がすきです",
          "furigana": "わたしはかくしんのかくにんがすきです",
          "romaji": "Watashi wa kakushin no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Innovation.",
          "audioText": "革新の確認",
          "clozeSentence": "これは革新の確認 {{BLANK}} す。",
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
          "id": "u23_l12_4",
          "type": "scramble",
          "prompt": "これは革新の確認です",
          "furigana": "これはかくしんのかくにんです",
          "romaji": "Kore wa kakushin no kakunin desu.",
          "english": "This is Confirming Innovation.",
          "audioText": "これは革新の確認です",
          "scrambleTokens": [
            "ではありません",
            "革新の確認",
            "それ",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "革新の確認",
            "です"
          ],
          "correctAnswer": "これは革新の確認です"
        },
        {
          "id": "u23_l12_5",
          "type": "speak",
          "prompt": "持続可能の確認",
          "furigana": "じぞくかのうのかくにん",
          "romaji": "jizoku kanou no kakunin",
          "english": "Pronounce: Confirming Sustainable",
          "audioText": "じぞくかのうのかくにん",
          "targetSpeech": "持続可能の確認",
          "options": [
            "Confirming Sustainable",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "持続可能の確認"
        },
        {
          "id": "u23_l12_6",
          "type": "dictate",
          "prompt": "持続可能の確認をお願いします",
          "furigana": "じぞくかのうのかくにんをおねがいします",
          "romaji": "jizoku kanou no kakunin o onegaishimasu.",
          "english": "Confirming Sustainable, please.",
          "audioText": "持続可能の確認をお願いします",
          "dictateTokens": [
            "持続可能の確認",
            "お願いします",
            "ありがとう",
            "を",
            "です"
          ],
          "dictateSolution": [
            "持続可能の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "持続可能の確認をお願いします"
        },
        {
          "id": "u23_l12_7",
          "type": "match",
          "prompt": "少子化の確認・革新の確認・持続可能の確認・人工知能",
          "furigana": "しょうしかのかくにん・かくしんのかくにん・じぞくかのうのかくにん・じんこうちのう",
          "romaji": "shoushika no kakunin, kakushin no kakunin, jizoku kanou no kakunin, jinkou chinou",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しょうしかのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "少子化の確認",
              "right": "Confirming Declining birthrate",
              "furigana": "しょうしかのかくにん",
              "romaji": "shoushika no kakunin"
            },
            {
              "id": "p_1",
              "left": "革新の確認",
              "right": "Confirming Innovation",
              "furigana": "かくしんのかくにん",
              "romaji": "kakushin no kakunin"
            },
            {
              "id": "p_2",
              "left": "持続可能の確認",
              "right": "Confirming Sustainable",
              "furigana": "じぞくかのうのかくにん",
              "romaji": "jizoku kanou no kakunin"
            },
            {
              "id": "p_3",
              "left": "人工知能",
              "right": "Artificial Intelligence (AI)",
              "furigana": "じんこうちのう",
              "romaji": "jinkou chinou"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l12_8",
          "type": "dialogue",
          "prompt": "次は少子化に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は少子化に進みましょう。",
          "furigana": "次は少子化に進みましょう。",
          "romaji": "Tsugi wa shoushika ni susumimashou.",
          "english": "Speaker: Let's proceed to Declining birthrate next.",
          "audioText": "次は少子化に進みましょう。",
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
      "id": "u23_l13",
      "unitId": "unit_23",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Artificial Intelligence (AI) & Automation",
      "titleJp": "人工知能・自動化",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "人工知能",
        "自動化",
        "高齢化"
      ],
      "kanjiKeywords": [
        "人",
        "工",
        "知",
        "能",
        "自",
        "動",
        "化",
        "高",
        "齢",
        "化"
      ],
      "items": [
        {
          "id": "u23_l13_1",
          "type": "listen",
          "prompt": "人工知能",
          "furigana": "じんこうちのう",
          "romaji": "jinkou chinou",
          "english": "Artificial Intelligence (AI)",
          "audioText": "じんこうちのう",
          "options": [
            "Artificial Intelligence (AI)",
            "Adoption / implementation",
            "Ethics / moral standards",
            "Confirming Sustainable"
          ],
          "correctAnswer": "Artificial Intelligence (AI)"
        },
        {
          "id": "u23_l13_2",
          "type": "spell",
          "prompt": "自動化",
          "furigana": "じどうか",
          "romaji": "jidouka",
          "english": "Build 'Automation'",
          "audioText": "じどうか",
          "tileBank": [
            "う",
            "ゆ",
            "ど",
            "じ",
            "に",
            "ひ",
            "や",
            "か"
          ],
          "correctAnswer": "じどうか"
        },
        {
          "id": "u23_l13_3",
          "type": "cloze",
          "prompt": "私は自動化がすきです",
          "furigana": "わたしはじどうかがすきです",
          "romaji": "Watashi wa jidouka ga suki desu.",
          "english": "Fill in the blank with the correct particle for Automation.",
          "audioText": "自動化",
          "clozeSentence": "これは自動化 {{BLANK}} す。",
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
          "id": "u23_l13_4",
          "type": "scramble",
          "prompt": "これは自動化です",
          "furigana": "これはじどうかです",
          "romaji": "Kore wa jidouka desu.",
          "english": "This is Automation.",
          "audioText": "これは自動化です",
          "scrambleTokens": [
            "自動化",
            "です",
            "これは",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "自動化",
            "です"
          ],
          "correctAnswer": "これは自動化です"
        },
        {
          "id": "u23_l13_5",
          "type": "speak",
          "prompt": "高齢化",
          "furigana": "こうれいか",
          "romaji": "koureika",
          "english": "Pronounce: Population aging",
          "audioText": "こうれいか",
          "targetSpeech": "高齢化",
          "options": [
            "Population aging",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "高齢化"
        },
        {
          "id": "u23_l13_6",
          "type": "dictate",
          "prompt": "高齢化をお願いします",
          "furigana": "こうれいかをおねがいします",
          "romaji": "koureika o onegaishimasu.",
          "english": "Population aging, please.",
          "audioText": "高齢化をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "高齢化",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "高齢化",
            "を",
            "お願いします"
          ],
          "correctAnswer": "高齢化をお願いします"
        },
        {
          "id": "u23_l13_7",
          "type": "match",
          "prompt": "人工知能・自動化・高齢化・少子化",
          "furigana": "じんこうちのう・じどうか・こうれいか・しょうしか",
          "romaji": "jinkou chinou, jidouka, koureika, shoushika",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "じんこうちのう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "人工知能",
              "right": "Artificial Intelligence (AI)",
              "furigana": "じんこうちのう",
              "romaji": "jinkou chinou"
            },
            {
              "id": "p_1",
              "left": "自動化",
              "right": "Automation",
              "furigana": "じどうか",
              "romaji": "jidouka"
            },
            {
              "id": "p_2",
              "left": "高齢化",
              "right": "Population aging",
              "furigana": "こうれいか",
              "romaji": "koureika"
            },
            {
              "id": "p_3",
              "left": "少子化",
              "right": "Declining birthrate",
              "furigana": "しょうしか",
              "romaji": "shoushika"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l13_8",
          "type": "dialogue",
          "prompt": "人工知能について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "人工知能について教えていただけますか？",
          "furigana": "人工知能について教えていただけますか？",
          "romaji": "jinkou chinou ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Artificial Intelligence (AI)?",
          "audioText": "人工知能について教えていただけますか？",
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
      "id": "u23_l14",
      "unitId": "unit_23",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Declining birthrate & Innovation",
      "titleJp": "少子化・革新",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "少子化",
        "革新",
        "持続可能"
      ],
      "kanjiKeywords": [
        "少",
        "子",
        "化",
        "革",
        "新",
        "持",
        "続",
        "可",
        "能"
      ],
      "items": [
        {
          "id": "u23_l14_1",
          "type": "listen",
          "prompt": "少子化",
          "furigana": "しょうしか",
          "romaji": "shoushika",
          "english": "Declining birthrate",
          "audioText": "しょうしか",
          "options": [
            "Diffusion / spread",
            "Automation",
            "Declining birthrate",
            "Confirming Population aging"
          ],
          "correctAnswer": "Declining birthrate"
        },
        {
          "id": "u23_l14_2",
          "type": "spell",
          "prompt": "少子化",
          "furigana": "しょうしか",
          "romaji": "shoushika",
          "english": "Build 'Declining birthrate'",
          "audioText": "しょうしか",
          "tileBank": [
            "か",
            "ょ",
            "し",
            "い",
            "し",
            "ん",
            "う",
            "も"
          ],
          "correctAnswer": "しょうしか"
        },
        {
          "id": "u23_l14_3",
          "type": "cloze",
          "prompt": "私は革新がすきです",
          "furigana": "わたしはかくしんがすきです",
          "romaji": "Watashi wa kakushin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Innovation.",
          "audioText": "革新",
          "clozeSentence": "これは革新 {{BLANK}} す。",
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
          "id": "u23_l14_4",
          "type": "scramble",
          "prompt": "これは革新です",
          "furigana": "これはかくしんです",
          "romaji": "Kore wa kakushin desu.",
          "english": "This is Innovation.",
          "audioText": "これは革新です",
          "scrambleTokens": [
            "革新",
            "これは",
            "です",
            "それ",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "革新",
            "です"
          ],
          "correctAnswer": "これは革新です"
        },
        {
          "id": "u23_l14_5",
          "type": "speak",
          "prompt": "持続可能",
          "furigana": "じぞくかのう",
          "romaji": "jizoku kanou",
          "english": "Pronounce: Sustainable",
          "audioText": "じぞくかのう",
          "targetSpeech": "持続可能",
          "options": [
            "Sustainable",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "持続可能"
        },
        {
          "id": "u23_l14_6",
          "type": "dictate",
          "prompt": "持続可能をお願いします",
          "furigana": "じぞくかのうをおねがいします",
          "romaji": "jizoku kanou o onegaishimasu.",
          "english": "Sustainable, please.",
          "audioText": "持続可能をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "ありがとう",
            "を",
            "持続可能"
          ],
          "dictateSolution": [
            "持続可能",
            "を",
            "お願いします"
          ],
          "correctAnswer": "持続可能をお願いします"
        },
        {
          "id": "u23_l14_7",
          "type": "match",
          "prompt": "少子化・革新・持続可能・普及",
          "furigana": "しょうしか・かくしん・じぞくかのう・ふきゅう",
          "romaji": "shoushika, kakushin, jizoku kanou, fukyuu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しょうしか",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "少子化",
              "right": "Declining birthrate",
              "furigana": "しょうしか",
              "romaji": "shoushika"
            },
            {
              "id": "p_1",
              "left": "革新",
              "right": "Innovation",
              "furigana": "かくしん",
              "romaji": "kakushin"
            },
            {
              "id": "p_2",
              "left": "持続可能",
              "right": "Sustainable",
              "furigana": "じぞくかのう",
              "romaji": "jizoku kanou"
            },
            {
              "id": "p_3",
              "left": "普及",
              "right": "Diffusion / spread",
              "furigana": "ふきゅう",
              "romaji": "fukyuu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l14_8",
          "type": "dialogue",
          "prompt": "自動化の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "自動化の準備はできていますか？",
          "furigana": "自動化の準備はできていますか？",
          "romaji": "jidouka no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Automation ready?",
          "audioText": "自動化の準備はできていますか？",
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
      "id": "u23_l15",
      "unitId": "unit_23",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 23 Master Exam",
      "iconType": "test",
      "title": "Unit 23 Master Exam",
      "titleJp": "第23週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "普及",
        "開発",
        "効率化"
      ],
      "kanjiKeywords": [
        "普",
        "及",
        "開",
        "発",
        "効",
        "率",
        "化"
      ],
      "items": [
        {
          "id": "u23_l15_1",
          "type": "listen",
          "prompt": "普及",
          "furigana": "ふきゅう",
          "romaji": "fukyuu",
          "english": "Diffusion / spread",
          "audioText": "ふきゅう",
          "options": [
            "Sustainable",
            "Confirming Sustainable",
            "Diffusion / spread",
            "Confirming Innovation"
          ],
          "correctAnswer": "Diffusion / spread"
        },
        {
          "id": "u23_l15_2",
          "type": "spell",
          "prompt": "普及",
          "furigana": "ふきゅう",
          "romaji": "fukyuu",
          "english": "Build 'Diffusion / spread'",
          "audioText": "ふきゅう",
          "tileBank": [
            "と",
            "ゅ",
            "き",
            "い",
            "ら",
            "ろ",
            "ふ",
            "う"
          ],
          "correctAnswer": "ふきゅう"
        },
        {
          "id": "u23_l15_3",
          "type": "cloze",
          "prompt": "私は開発がすきです",
          "furigana": "わたしはかいはつがすきです",
          "romaji": "Watashi wa kaihatsu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Development / R&D.",
          "audioText": "開発",
          "clozeSentence": "これは開発 {{BLANK}} す。",
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
          "id": "u23_l15_4",
          "type": "scramble",
          "prompt": "これは開発です",
          "furigana": "これはかいはつです",
          "romaji": "Kore wa kaihatsu desu.",
          "english": "This is Development / R&D.",
          "audioText": "これは開発です",
          "scrambleTokens": [
            "開発",
            "です",
            "ではありません",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "開発",
            "です"
          ],
          "correctAnswer": "これは開発です"
        },
        {
          "id": "u23_l15_5",
          "type": "speak",
          "prompt": "効率化",
          "furigana": "こうりつか",
          "romaji": "kouritsuka",
          "english": "Pronounce: Streamlining / efficiency",
          "audioText": "こうりつか",
          "targetSpeech": "効率化",
          "options": [
            "Streamlining / efficiency",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "効率化"
        },
        {
          "id": "u23_l15_6",
          "type": "dictate",
          "prompt": "効率化をお願いします",
          "furigana": "こうりつかをおねがいします",
          "romaji": "kouritsuka o onegaishimasu.",
          "english": "Streamlining / efficiency, please.",
          "audioText": "効率化をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "を",
            "効率化",
            "お願いします"
          ],
          "dictateSolution": [
            "効率化",
            "を",
            "お願いします"
          ],
          "correctAnswer": "効率化をお願いします"
        },
        {
          "id": "u23_l15_7",
          "type": "match",
          "prompt": "普及・開発・効率化・導入",
          "furigana": "ふきゅう・かいはつ・こうりつか・どうにゅう",
          "romaji": "fukyuu, kaihatsu, kouritsuka, dounyuu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ふきゅう",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "普及",
              "right": "Diffusion / spread",
              "furigana": "ふきゅう",
              "romaji": "fukyuu"
            },
            {
              "id": "p_1",
              "left": "開発",
              "right": "Development / R&D",
              "furigana": "かいはつ",
              "romaji": "kaihatsu"
            },
            {
              "id": "p_2",
              "left": "効率化",
              "right": "Streamlining / efficiency",
              "furigana": "こうりつか",
              "romaji": "kouritsuka"
            },
            {
              "id": "p_3",
              "left": "導入",
              "right": "Adoption / implementation",
              "furigana": "どうにゅう",
              "romaji": "dounyuu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u23_l15_8",
          "type": "dialogue",
          "prompt": "高齢化についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "高齢化についてどう思われますか？",
          "furigana": "高齢化についてどう思われますか？",
          "romaji": "koureika ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Population aging?",
          "audioText": "高齢化についてどう思われますか？",
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
    "id": "gate_unit_23",
    "unitId": "unit_23",
    "title": "Unit 23 Mastery Checkpoint",
    "titleJp": "第23週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u23_l1_1",
        "type": "listen",
        "prompt": "人工知能",
        "furigana": "じんこうちのう",
        "romaji": "jinkou chinou",
        "english": "Artificial Intelligence (AI)",
        "audioText": "じんこうちのう",
        "options": [
          "Artificial Intelligence (AI)",
          "Automation",
          "Confirming Automation",
          "Confirming Adoption / implementation"
        ],
        "correctAnswer": "Artificial Intelligence (AI)"
      },
      {
        "id": "u23_l1_2",
        "type": "spell",
        "prompt": "自動化",
        "furigana": "じどうか",
        "romaji": "jidouka",
        "english": "Build 'Automation'",
        "audioText": "じどうか",
        "tileBank": [
          "そ",
          "は",
          "か",
          "じ",
          "ど",
          "ん",
          "う",
          "を"
        ],
        "correctAnswer": "じどうか"
      },
      {
        "id": "u23_l3_1",
        "type": "listen",
        "prompt": "普及",
        "furigana": "ふきゅう",
        "romaji": "fukyuu",
        "english": "Diffusion / spread",
        "audioText": "ふきゅう",
        "options": [
          "Confirming Artificial Intelligence (AI)",
          "Challenge / issue to solve",
          "Diffusion / spread",
          "Confirming Artificial Intelligence (AI)"
        ],
        "correctAnswer": "Diffusion / spread"
      },
      {
        "id": "u23_l3_2",
        "type": "spell",
        "prompt": "普及",
        "furigana": "ふきゅう",
        "romaji": "fukyuu",
        "english": "Build 'Diffusion / spread'",
        "audioText": "ふきゅう",
        "tileBank": [
          "ゅ",
          "し",
          "き",
          "ふ",
          "う",
          "ね",
          "そ",
          "ぬ"
        ],
        "correctAnswer": "ふきゅう"
      },
      {
        "id": "u23_l5_1",
        "type": "listen",
        "prompt": "倫理",
        "furigana": "りんり",
        "romaji": "rinri",
        "english": "Ethics / moral standards",
        "audioText": "りんり",
        "options": [
          "Ethics / moral standards",
          "Confirming Sustainable",
          "Confirming Automation",
          "Data leak / security breach"
        ],
        "correctAnswer": "Ethics / moral standards"
      },
      {
        "id": "u23_l5_2",
        "type": "spell",
        "prompt": "倫理",
        "furigana": "りんり",
        "romaji": "rinri",
        "english": "Build 'Ethics / moral standards'",
        "audioText": "りんり",
        "tileBank": [
          "り",
          "か",
          "り",
          "ん",
          "け",
          "あ",
          "ら",
          "ゆ"
        ],
        "correctAnswer": "りんり"
      },
      {
        "id": "u23_l7_1",
        "type": "listen",
        "prompt": "少子化の確認",
        "furigana": "しょうしかのかくにん",
        "romaji": "shoushika no kakunin",
        "english": "Confirming Declining birthrate",
        "audioText": "しょうしかのかくにん",
        "options": [
          "Confirming Declining birthrate",
          "Confirming Sustainable",
          "Innovation",
          "Confirming Diffusion / spread"
        ],
        "correctAnswer": "Confirming Declining birthrate"
      },
      {
        "id": "u23_l7_2",
        "type": "spell",
        "prompt": "少子化の確認",
        "furigana": "しょうしかのかくにん",
        "romaji": "shoushika no kakunin",
        "english": "Build 'Confirming Declining birthrate'",
        "audioText": "しょうしかのかくにん",
        "tileBank": [
          "し",
          "の",
          "か",
          "く",
          "し",
          "う",
          "ょ",
          "か"
        ],
        "correctAnswer": "しょうしかのかくにん"
      },
      {
        "id": "u23_l9_1",
        "type": "listen",
        "prompt": "導入の確認",
        "furigana": "どうにゅうのかくにん",
        "romaji": "dounyuu no kakunin",
        "english": "Confirming Adoption / implementation",
        "audioText": "どうにゅうのかくにん",
        "options": [
          "Future potential / promise",
          "Confirming Adoption / implementation",
          "Streamlining / efficiency",
          "Confirming Ethics / moral standards"
        ],
        "correctAnswer": "Confirming Adoption / implementation"
      },
      {
        "id": "u23_l9_2",
        "type": "spell",
        "prompt": "導入の確認",
        "furigana": "どうにゅうのかくにん",
        "romaji": "dounyuu no kakunin",
        "english": "Build 'Confirming Adoption / implementation'",
        "audioText": "どうにゅうのかくにん",
        "tileBank": [
          "う",
          "く",
          "に",
          "ゅ",
          "う",
          "か",
          "ど",
          "の"
        ],
        "correctAnswer": "どうにゅうのかくにん"
      },
      {
        "id": "u23_l11_1",
        "type": "listen",
        "prompt": "人工知能の確認",
        "furigana": "じんこうちのうのかくにん",
        "romaji": "jinkou chinou no kakunin",
        "english": "Confirming Artificial Intelligence (AI)",
        "audioText": "じんこうちのうのかくにん",
        "options": [
          "Ethics / moral standards",
          "Confirming Artificial Intelligence (AI)",
          "Population aging",
          "Confirming Future potential / promise"
        ],
        "correctAnswer": "Confirming Artificial Intelligence (AI)"
      },
      {
        "id": "u23_l11_2",
        "type": "spell",
        "prompt": "人工知能の確認",
        "furigana": "じんこうちのうのかくにん",
        "romaji": "jinkou chinou no kakunin",
        "english": "Build 'Confirming Artificial Intelligence (AI)'",
        "audioText": "じんこうちのうのかくにん",
        "tileBank": [
          "う",
          "の",
          "こ",
          "ち",
          "ん",
          "じ",
          "の",
          "う"
        ],
        "correctAnswer": "じんこうちのうのかくにん"
      }
    ]
  }
};
