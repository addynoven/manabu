import type { DojoUnit } from "../../models/dojo.model";

export const unit28: DojoUnit = {
  "id": "unit_28",
  "unitNumber": 28,
  "title": "Modern Literature & Essayistic Japanese",
  "titleJp": "近代文学と随筆の文体",
  "description": "Appreciate literary prose, sensory aesthetics, classic endings (~de aru, ~gotoshi), and metaphoric imagery.",
  "icon": "📚",
  "themeColor": "#831843",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u28_l1",
      "unitId": "unit_28",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Personal essay / literary miscellany & Depiction / vivid description",
      "titleJp": "随筆・描写",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "随筆",
        "描写",
        "叙情的"
      ],
      "kanjiKeywords": [
        "随",
        "筆",
        "描",
        "写",
        "叙",
        "情",
        "的"
      ],
      "items": [
        {
          "id": "u28_l1_1",
          "type": "listen",
          "prompt": "随筆",
          "furigana": "ずいひつ",
          "romaji": "zuihitsu",
          "english": "Personal essay / literary miscellany",
          "audioText": "ずいひつ",
          "options": [
            "Confirming Subtle grace and hidden beauty",
            "Personal essay / literary miscellany",
            "Sentimentality",
            "Confirming Sentimentality"
          ],
          "correctAnswer": "Personal essay / literary miscellany"
        },
        {
          "id": "u28_l1_2",
          "type": "spell",
          "prompt": "随筆",
          "furigana": "ずいひつ",
          "romaji": "zuihitsu",
          "english": "Build 'Personal essay / literary miscellany'",
          "audioText": "ずいひつ",
          "tileBank": [
            "ひ",
            "さ",
            "ず",
            "せ",
            "つ",
            "ろ",
            "い",
            "し"
          ],
          "correctAnswer": "ずいひつ"
        },
        {
          "id": "u28_l1_3",
          "type": "cloze",
          "prompt": "私は描写がすきです",
          "furigana": "わたしはびょうしゃがすきです",
          "romaji": "Watashi wa byousha ga suki desu.",
          "english": "Fill in the blank with the correct particle for Depiction / vivid description.",
          "audioText": "描写",
          "clozeSentence": "これは描写 {{BLANK}} す。",
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
          "id": "u28_l1_4",
          "type": "scramble",
          "prompt": "これは描写です",
          "furigana": "これはびょうしゃです",
          "romaji": "Kore wa byousha desu.",
          "english": "This is Depiction / vivid description.",
          "audioText": "これは描写です",
          "scrambleTokens": [
            "です",
            "これは",
            "ではありません",
            "それ",
            "描写"
          ],
          "scrambleSolution": [
            "これは",
            "描写",
            "です"
          ],
          "correctAnswer": "これは描写です"
        },
        {
          "id": "u28_l1_5",
          "type": "speak",
          "prompt": "叙情的",
          "furigana": "じょじょうてき",
          "romaji": "jojouteki",
          "english": "Pronounce: Lyrical / poetic emotionalism",
          "audioText": "じょじょうてき",
          "targetSpeech": "叙情的",
          "options": [
            "Lyrical / poetic emotionalism",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "叙情的"
        },
        {
          "id": "u28_l1_6",
          "type": "dictate",
          "prompt": "叙情的をお願いします",
          "furigana": "じょじょうてきをおねがいします",
          "romaji": "jojouteki o onegaishimasu.",
          "english": "Lyrical / poetic emotionalism, please.",
          "audioText": "叙情的をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "叙情的",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "叙情的",
            "を",
            "お願いします"
          ],
          "correctAnswer": "叙情的をお願いします"
        },
        {
          "id": "u28_l1_7",
          "type": "match",
          "prompt": "随筆・描写・叙情的・比喩",
          "furigana": "ずいひつ・びょうしゃ・じょじょうてき・ひゆ",
          "romaji": "zuihitsu, byousha, jojouteki, hiyu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ずいひつ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "随筆",
              "right": "Personal essay / literary miscellany",
              "furigana": "ずいひつ",
              "romaji": "zuihitsu"
            },
            {
              "id": "p_1",
              "left": "描写",
              "right": "Depiction / vivid description",
              "furigana": "びょうしゃ",
              "romaji": "byousha"
            },
            {
              "id": "p_2",
              "left": "叙情的",
              "right": "Lyrical / poetic emotionalism",
              "furigana": "じょじょうてき",
              "romaji": "jojouteki"
            },
            {
              "id": "p_3",
              "left": "比喩",
              "right": "Metaphor / simile",
              "furigana": "ひゆ",
              "romaji": "hiyu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l1_8",
          "type": "dialogue",
          "prompt": "随筆について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "随筆について教えていただけますか？",
          "furigana": "随筆について教えていただけますか？",
          "romaji": "zuihitsu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Personal essay / literary miscellany?",
          "audioText": "随筆について教えていただけますか？",
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
      "id": "u28_l2",
      "unitId": "unit_28",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Metaphor / simile & Atmosphere / evocative mood",
      "titleJp": "比喩・情緒",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "比喩",
        "情緒",
        "哀愁"
      ],
      "kanjiKeywords": [
        "比",
        "喩",
        "情",
        "緒",
        "哀",
        "愁"
      ],
      "items": [
        {
          "id": "u28_l2_1",
          "type": "listen",
          "prompt": "比喩",
          "furigana": "ひゆ",
          "romaji": "hiyu",
          "english": "Metaphor / simile",
          "audioText": "ひゆ",
          "options": [
            "Literary style",
            "Metaphor / simile",
            "Melancholy / sorrowful charm",
            "Scenic taste / tasteful atmosphere"
          ],
          "correctAnswer": "Metaphor / simile"
        },
        {
          "id": "u28_l2_2",
          "type": "spell",
          "prompt": "比喩",
          "furigana": "ひゆ",
          "romaji": "hiyu",
          "english": "Build 'Metaphor / simile'",
          "audioText": "ひゆ",
          "tileBank": [
            "す",
            "ん",
            "ゆ",
            "は",
            "お",
            "も",
            "ふ",
            "ひ"
          ],
          "correctAnswer": "ひゆ"
        },
        {
          "id": "u28_l2_3",
          "type": "cloze",
          "prompt": "私は情緒がすきです",
          "furigana": "わたしはじょうちょがすきです",
          "romaji": "Watashi wa joutcho ga suki desu.",
          "english": "Fill in the blank with the correct particle for Atmosphere / evocative mood.",
          "audioText": "情緒",
          "clozeSentence": "これは情緒 {{BLANK}} す。",
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
          "id": "u28_l2_4",
          "type": "scramble",
          "prompt": "これは情緒です",
          "furigana": "これはじょうちょです",
          "romaji": "Kore wa joutcho desu.",
          "english": "This is Atmosphere / evocative mood.",
          "audioText": "これは情緒です",
          "scrambleTokens": [
            "情緒",
            "ではありません",
            "それ",
            "です",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "情緒",
            "です"
          ],
          "correctAnswer": "これは情緒です"
        },
        {
          "id": "u28_l2_5",
          "type": "speak",
          "prompt": "哀愁",
          "furigana": "あいしゅう",
          "romaji": "aishuu",
          "english": "Pronounce: Melancholy / sorrowful charm",
          "audioText": "あいしゅう",
          "targetSpeech": "哀愁",
          "options": [
            "Melancholy / sorrowful charm",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "哀愁"
        },
        {
          "id": "u28_l2_6",
          "type": "dictate",
          "prompt": "哀愁をお願いします",
          "furigana": "あいしゅうをおねがいします",
          "romaji": "aishuu o onegaishimasu.",
          "english": "Melancholy / sorrowful charm, please.",
          "audioText": "哀愁をお願いします",
          "dictateTokens": [
            "哀愁",
            "ありがとう",
            "を",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "哀愁",
            "を",
            "お願いします"
          ],
          "correctAnswer": "哀愁をお願いします"
        },
        {
          "id": "u28_l2_7",
          "type": "match",
          "prompt": "比喩・情緒・哀愁・余韻",
          "furigana": "ひゆ・じょうちょ・あいしゅう・よいん",
          "romaji": "hiyu, joutcho, aishuu, yoin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ひゆ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "比喩",
              "right": "Metaphor / simile",
              "furigana": "ひゆ",
              "romaji": "hiyu"
            },
            {
              "id": "p_1",
              "left": "情緒",
              "right": "Atmosphere / evocative mood",
              "furigana": "じょうちょ",
              "romaji": "joutcho"
            },
            {
              "id": "p_2",
              "left": "哀愁",
              "right": "Melancholy / sorrowful charm",
              "furigana": "あいしゅう",
              "romaji": "aishuu"
            },
            {
              "id": "p_3",
              "left": "余韻",
              "right": "Lingering resonance / aftertaste",
              "furigana": "よいん",
              "romaji": "yoin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l2_8",
          "type": "dialogue",
          "prompt": "描写の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "描写の準備はできていますか？",
          "furigana": "描写の準備はできていますか？",
          "romaji": "byousha no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Depiction / vivid description ready?",
          "audioText": "描写の準備はできていますか？",
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
      "id": "u28_l3",
      "unitId": "unit_28",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Lingering resonance / aftertaste & Sentimentality",
      "titleJp": "余韻・感傷",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "余韻",
        "感傷",
        "無常観"
      ],
      "kanjiKeywords": [
        "余",
        "韻",
        "感",
        "傷",
        "無",
        "常",
        "観"
      ],
      "items": [
        {
          "id": "u28_l3_1",
          "type": "listen",
          "prompt": "余韻",
          "furigana": "よいん",
          "romaji": "yoin",
          "english": "Lingering resonance / aftertaste",
          "audioText": "よいん",
          "options": [
            "Abyss / profound depth",
            "Lingering resonance / aftertaste",
            "Lyrical / poetic emotionalism",
            "Confirming Metaphor / simile"
          ],
          "correctAnswer": "Lingering resonance / aftertaste"
        },
        {
          "id": "u28_l3_2",
          "type": "spell",
          "prompt": "余韻",
          "furigana": "よいん",
          "romaji": "yoin",
          "english": "Build 'Lingering resonance / aftertaste'",
          "audioText": "よいん",
          "tileBank": [
            "さ",
            "こ",
            "き",
            "い",
            "ふ",
            "ん",
            "ぬ",
            "よ"
          ],
          "correctAnswer": "よいん"
        },
        {
          "id": "u28_l3_3",
          "type": "cloze",
          "prompt": "私は感傷がすきです",
          "furigana": "わたしはかんしょうがすきです",
          "romaji": "Watashi wa kanshou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Sentimentality.",
          "audioText": "感傷",
          "clozeSentence": "これは感傷 {{BLANK}} す。",
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
          "id": "u28_l3_4",
          "type": "scramble",
          "prompt": "これは感傷です",
          "furigana": "これはかんしょうです",
          "romaji": "Kore wa kanshou desu.",
          "english": "This is Sentimentality.",
          "audioText": "これは感傷です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "感傷",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "感傷",
            "です"
          ],
          "correctAnswer": "これは感傷です"
        },
        {
          "id": "u28_l3_5",
          "type": "speak",
          "prompt": "無常観",
          "furigana": "むじょうかん",
          "romaji": "mujoukan",
          "english": "Pronounce: Buddhist sense of impermanence",
          "audioText": "むじょうかん",
          "targetSpeech": "無常観",
          "options": [
            "Buddhist sense of impermanence",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "無常観"
        },
        {
          "id": "u28_l3_6",
          "type": "dictate",
          "prompt": "無常観をお願いします",
          "furigana": "むじょうかんをおねがいします",
          "romaji": "mujoukan o onegaishimasu.",
          "english": "Buddhist sense of impermanence, please.",
          "audioText": "無常観をお願いします",
          "dictateTokens": [
            "無常観",
            "を",
            "ありがとう",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "無常観",
            "を",
            "お願いします"
          ],
          "correctAnswer": "無常観をお願いします"
        },
        {
          "id": "u28_l3_7",
          "type": "match",
          "prompt": "余韻・感傷・無常観・文体",
          "furigana": "よいん・かんしょう・むじょうかん・ぶんたい",
          "romaji": "yoin, kanshou, mujoukan, buntai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "よいん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "余韻",
              "right": "Lingering resonance / aftertaste",
              "furigana": "よいん",
              "romaji": "yoin"
            },
            {
              "id": "p_1",
              "left": "感傷",
              "right": "Sentimentality",
              "furigana": "かんしょう",
              "romaji": "kanshou"
            },
            {
              "id": "p_2",
              "left": "無常観",
              "right": "Buddhist sense of impermanence",
              "furigana": "むじょうかん",
              "romaji": "mujoukan"
            },
            {
              "id": "p_3",
              "left": "文体",
              "right": "Literary style",
              "furigana": "ぶんたい",
              "romaji": "buntai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l3_8",
          "type": "dialogue",
          "prompt": "叙情的についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "叙情的についてどう思われますか？",
          "furigana": "叙情的についてどう思われますか？",
          "romaji": "jojouteki ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Lyrical / poetic emotionalism?",
          "audioText": "叙情的についてどう思われますか？",
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
      "id": "u28_l4",
      "unitId": "unit_28",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Literary style & Between the lines",
      "titleJp": "文体・行間",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "文体",
        "行間",
        "深淵"
      ],
      "kanjiKeywords": [
        "文",
        "体",
        "行",
        "間",
        "深",
        "淵"
      ],
      "items": [
        {
          "id": "u28_l4_1",
          "type": "listen",
          "prompt": "文体",
          "furigana": "ぶんたい",
          "romaji": "buntai",
          "english": "Literary style",
          "audioText": "ぶんたい",
          "options": [
            "Confirming Atmosphere / evocative mood",
            "Confirming Melancholy / sorrowful charm",
            "Literary style",
            "Confirming Masterpiece"
          ],
          "correctAnswer": "Literary style"
        },
        {
          "id": "u28_l4_2",
          "type": "spell",
          "prompt": "文体",
          "furigana": "ぶんたい",
          "romaji": "buntai",
          "english": "Build 'Literary style'",
          "audioText": "ぶんたい",
          "tileBank": [
            "た",
            "ぶ",
            "い",
            "ら",
            "れ",
            "ん",
            "か",
            "を"
          ],
          "correctAnswer": "ぶんたい"
        },
        {
          "id": "u28_l4_3",
          "type": "cloze",
          "prompt": "私は行間がすきです",
          "furigana": "わたしはぎょうかんがすきです",
          "romaji": "Watashi wa gyoukan ga suki desu.",
          "english": "Fill in the blank with the correct particle for Between the lines.",
          "audioText": "行間",
          "clozeSentence": "これは行間 {{BLANK}} す。",
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
          "id": "u28_l4_4",
          "type": "scramble",
          "prompt": "これは行間です",
          "furigana": "これはぎょうかんです",
          "romaji": "Kore wa gyoukan desu.",
          "english": "This is Between the lines.",
          "audioText": "これは行間です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "行間",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "行間",
            "です"
          ],
          "correctAnswer": "これは行間です"
        },
        {
          "id": "u28_l4_5",
          "type": "speak",
          "prompt": "深淵",
          "furigana": "しんえん",
          "romaji": "shin-en",
          "english": "Pronounce: Abyss / profound depth",
          "audioText": "しんえん",
          "targetSpeech": "深淵",
          "options": [
            "Abyss / profound depth",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "深淵"
        },
        {
          "id": "u28_l4_6",
          "type": "dictate",
          "prompt": "深淵をお願いします",
          "furigana": "しんえんをおねがいします",
          "romaji": "shin-en o onegaishimasu.",
          "english": "Abyss / profound depth, please.",
          "audioText": "深淵をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "お願いします",
            "です",
            "深淵"
          ],
          "dictateSolution": [
            "深淵",
            "を",
            "お願いします"
          ],
          "correctAnswer": "深淵をお願いします"
        },
        {
          "id": "u28_l4_7",
          "type": "match",
          "prompt": "文体・行間・深淵・幽玄",
          "furigana": "ぶんたい・ぎょうかん・しんえん・ゆうげん",
          "romaji": "buntai, gyoukan, shin-en, yuugen",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ぶんたい",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "文体",
              "right": "Literary style",
              "furigana": "ぶんたい",
              "romaji": "buntai"
            },
            {
              "id": "p_1",
              "left": "行間",
              "right": "Between the lines",
              "furigana": "ぎょうかん",
              "romaji": "gyoukan"
            },
            {
              "id": "p_2",
              "left": "深淵",
              "right": "Abyss / profound depth",
              "furigana": "しんえん",
              "romaji": "shin-en"
            },
            {
              "id": "p_3",
              "left": "幽玄",
              "right": "Subtle grace and hidden beauty",
              "furigana": "ゆうげん",
              "romaji": "yuugen"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l4_8",
          "type": "dialogue",
          "prompt": "次は比喩に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は比喩に進みましょう。",
          "furigana": "次は比喩に進みましょう。",
          "romaji": "Tsugi wa hiyu ni susumimashou.",
          "english": "Speaker: Let's proceed to Metaphor / simile next.",
          "audioText": "次は比喩に進みましょう。",
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
      "id": "u28_l5",
      "unitId": "unit_28",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Subtle grace and hidden beauty & Scenic taste / tasteful atmosphere",
      "titleJp": "幽玄・風情",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "幽玄",
        "風情",
        "傑作"
      ],
      "kanjiKeywords": [
        "幽",
        "玄",
        "風",
        "情",
        "傑",
        "作"
      ],
      "items": [
        {
          "id": "u28_l5_1",
          "type": "listen",
          "prompt": "幽玄",
          "furigana": "ゆうげん",
          "romaji": "yuugen",
          "english": "Subtle grace and hidden beauty",
          "audioText": "ゆうげん",
          "options": [
            "Confirming Masterpiece",
            "Confirming Atmosphere / evocative mood",
            "Subtle grace and hidden beauty",
            "Personal essay / literary miscellany"
          ],
          "correctAnswer": "Subtle grace and hidden beauty"
        },
        {
          "id": "u28_l5_2",
          "type": "spell",
          "prompt": "幽玄",
          "furigana": "ゆうげん",
          "romaji": "yuugen",
          "english": "Build 'Subtle grace and hidden beauty'",
          "audioText": "ゆうげん",
          "tileBank": [
            "ゆ",
            "う",
            "げ",
            "あ",
            "そ",
            "の",
            "ひ",
            "ん"
          ],
          "correctAnswer": "ゆうげん"
        },
        {
          "id": "u28_l5_3",
          "type": "cloze",
          "prompt": "私は風情がすきです",
          "furigana": "わたしはふぜいがすきです",
          "romaji": "Watashi wa fuzei ga suki desu.",
          "english": "Fill in the blank with the correct particle for Scenic taste / tasteful atmosphere.",
          "audioText": "風情",
          "clozeSentence": "これは風情 {{BLANK}} す。",
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
          "id": "u28_l5_4",
          "type": "scramble",
          "prompt": "これは風情です",
          "furigana": "これはふぜいです",
          "romaji": "Kore wa fuzei desu.",
          "english": "This is Scenic taste / tasteful atmosphere.",
          "audioText": "これは風情です",
          "scrambleTokens": [
            "です",
            "風情",
            "ではありません",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "風情",
            "です"
          ],
          "correctAnswer": "これは風情です"
        },
        {
          "id": "u28_l5_5",
          "type": "speak",
          "prompt": "傑作",
          "furigana": "けっさく",
          "romaji": "kessaku",
          "english": "Pronounce: Masterpiece",
          "audioText": "けっさく",
          "targetSpeech": "傑作",
          "options": [
            "Masterpiece",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "傑作"
        },
        {
          "id": "u28_l5_6",
          "type": "dictate",
          "prompt": "傑作をお願いします",
          "furigana": "けっさくをおねがいします",
          "romaji": "kessaku o onegaishimasu.",
          "english": "Masterpiece, please.",
          "audioText": "傑作をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "傑作",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "傑作",
            "を",
            "お願いします"
          ],
          "correctAnswer": "傑作をお願いします"
        },
        {
          "id": "u28_l5_7",
          "type": "match",
          "prompt": "幽玄・風情・傑作・随筆の確認",
          "furigana": "ゆうげん・ふぜい・けっさく・ずいひつのかくにん",
          "romaji": "yuugen, fuzei, kessaku, zuihitsu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ゆうげん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "幽玄",
              "right": "Subtle grace and hidden beauty",
              "furigana": "ゆうげん",
              "romaji": "yuugen"
            },
            {
              "id": "p_1",
              "left": "風情",
              "right": "Scenic taste / tasteful atmosphere",
              "furigana": "ふぜい",
              "romaji": "fuzei"
            },
            {
              "id": "p_2",
              "left": "傑作",
              "right": "Masterpiece",
              "furigana": "けっさく",
              "romaji": "kessaku"
            },
            {
              "id": "p_3",
              "left": "随筆の確認",
              "right": "Confirming Personal essay / literary miscellany",
              "furigana": "ずいひつのかくにん",
              "romaji": "zuihitsu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l5_8",
          "type": "dialogue",
          "prompt": "随筆について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "随筆について教えていただけますか？",
          "furigana": "随筆について教えていただけますか？",
          "romaji": "zuihitsu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Personal essay / literary miscellany?",
          "audioText": "随筆について教えていただけますか？",
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
      "id": "u28_l6",
      "unitId": "unit_28",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Personal essay / literary miscellany & Confirming Depiction / vivid description",
      "titleJp": "随筆の確認・描写の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "随筆の確認",
        "描写の確認",
        "叙情的の確認"
      ],
      "kanjiKeywords": [
        "随",
        "筆",
        "確",
        "認",
        "描",
        "写",
        "確",
        "認",
        "叙",
        "情",
        "的",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u28_l6_1",
          "type": "listen",
          "prompt": "随筆の確認",
          "furigana": "ずいひつのかくにん",
          "romaji": "zuihitsu no kakunin",
          "english": "Confirming Personal essay / literary miscellany",
          "audioText": "ずいひつのかくにん",
          "options": [
            "Sentimentality",
            "Metaphor / simile",
            "Confirming Personal essay / literary miscellany",
            "Confirming Metaphor / simile"
          ],
          "correctAnswer": "Confirming Personal essay / literary miscellany"
        },
        {
          "id": "u28_l6_2",
          "type": "spell",
          "prompt": "随筆の確認",
          "furigana": "ずいひつのかくにん",
          "romaji": "zuihitsu no kakunin",
          "english": "Build 'Confirming Personal essay / literary miscellany'",
          "audioText": "ずいひつのかくにん",
          "tileBank": [
            "に",
            "く",
            "ず",
            "つ",
            "の",
            "い",
            "か",
            "ひ"
          ],
          "correctAnswer": "ずいひつのかくにん"
        },
        {
          "id": "u28_l6_3",
          "type": "cloze",
          "prompt": "私は描写の確認がすきです",
          "furigana": "わたしはびょうしゃのかくにんがすきです",
          "romaji": "Watashi wa byousha no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Depiction / vivid description.",
          "audioText": "描写の確認",
          "clozeSentence": "これは描写の確認 {{BLANK}} す。",
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
          "id": "u28_l6_4",
          "type": "scramble",
          "prompt": "これは描写の確認です",
          "furigana": "これはびょうしゃのかくにんです",
          "romaji": "Kore wa byousha no kakunin desu.",
          "english": "This is Confirming Depiction / vivid description.",
          "audioText": "これは描写の確認です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "これは",
            "描写の確認",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "描写の確認",
            "です"
          ],
          "correctAnswer": "これは描写の確認です"
        },
        {
          "id": "u28_l6_5",
          "type": "speak",
          "prompt": "叙情的の確認",
          "furigana": "じょじょうてきのかくにん",
          "romaji": "jojouteki no kakunin",
          "english": "Pronounce: Confirming Lyrical / poetic emotionalism",
          "audioText": "じょじょうてきのかくにん",
          "targetSpeech": "叙情的の確認",
          "options": [
            "Confirming Lyrical / poetic emotionalism",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "叙情的の確認"
        },
        {
          "id": "u28_l6_6",
          "type": "dictate",
          "prompt": "叙情的の確認をお願いします",
          "furigana": "じょじょうてきのかくにんをおねがいします",
          "romaji": "jojouteki no kakunin o onegaishimasu.",
          "english": "Confirming Lyrical / poetic emotionalism, please.",
          "audioText": "叙情的の確認をお願いします",
          "dictateTokens": [
            "叙情的の確認",
            "お願いします",
            "です",
            "を",
            "ありがとう"
          ],
          "dictateSolution": [
            "叙情的の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "叙情的の確認をお願いします"
        },
        {
          "id": "u28_l6_7",
          "type": "match",
          "prompt": "随筆の確認・描写の確認・叙情的の確認・比喩の確認",
          "furigana": "ずいひつのかくにん・びょうしゃのかくにん・じょじょうてきのかくにん・ひゆのかくにん",
          "romaji": "zuihitsu no kakunin, byousha no kakunin, jojouteki no kakunin, hiyu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ずいひつのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "随筆の確認",
              "right": "Confirming Personal essay / literary miscellany",
              "furigana": "ずいひつのかくにん",
              "romaji": "zuihitsu no kakunin"
            },
            {
              "id": "p_1",
              "left": "描写の確認",
              "right": "Confirming Depiction / vivid description",
              "furigana": "びょうしゃのかくにん",
              "romaji": "byousha no kakunin"
            },
            {
              "id": "p_2",
              "left": "叙情的の確認",
              "right": "Confirming Lyrical / poetic emotionalism",
              "furigana": "じょじょうてきのかくにん",
              "romaji": "jojouteki no kakunin"
            },
            {
              "id": "p_3",
              "left": "比喩の確認",
              "right": "Confirming Metaphor / simile",
              "furigana": "ひゆのかくにん",
              "romaji": "hiyu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l6_8",
          "type": "dialogue",
          "prompt": "描写の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "描写の準備はできていますか？",
          "furigana": "描写の準備はできていますか？",
          "romaji": "byousha no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Depiction / vivid description ready?",
          "audioText": "描写の準備はできていますか？",
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
      "id": "u28_l7",
      "unitId": "unit_28",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Metaphor / simile & Confirming Atmosphere / evocative mood",
      "titleJp": "比喩の確認・情緒の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "比喩の確認",
        "情緒の確認",
        "哀愁の確認"
      ],
      "kanjiKeywords": [
        "比",
        "喩",
        "確",
        "認",
        "情",
        "緒",
        "確",
        "認",
        "哀",
        "愁",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u28_l7_1",
          "type": "listen",
          "prompt": "比喩の確認",
          "furigana": "ひゆのかくにん",
          "romaji": "hiyu no kakunin",
          "english": "Confirming Metaphor / simile",
          "audioText": "ひゆのかくにん",
          "options": [
            "Sentimentality",
            "Confirming Atmosphere / evocative mood",
            "Confirming Metaphor / simile",
            "Confirming Lyrical / poetic emotionalism"
          ],
          "correctAnswer": "Confirming Metaphor / simile"
        },
        {
          "id": "u28_l7_2",
          "type": "spell",
          "prompt": "比喩の確認",
          "furigana": "ひゆのかくにん",
          "romaji": "hiyu no kakunin",
          "english": "Build 'Confirming Metaphor / simile'",
          "audioText": "ひゆのかくにん",
          "tileBank": [
            "に",
            "の",
            "ん",
            "ゆ",
            "ひ",
            "く",
            "か",
            "へ"
          ],
          "correctAnswer": "ひゆのかくにん"
        },
        {
          "id": "u28_l7_3",
          "type": "cloze",
          "prompt": "私は情緒の確認がすきです",
          "furigana": "わたしはじょうちょのかくにんがすきです",
          "romaji": "Watashi wa joutcho no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Atmosphere / evocative mood.",
          "audioText": "情緒の確認",
          "clozeSentence": "これは情緒の確認 {{BLANK}} す。",
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
          "id": "u28_l7_4",
          "type": "scramble",
          "prompt": "これは情緒の確認です",
          "furigana": "これはじょうちょのかくにんです",
          "romaji": "Kore wa joutcho no kakunin desu.",
          "english": "This is Confirming Atmosphere / evocative mood.",
          "audioText": "これは情緒の確認です",
          "scrambleTokens": [
            "情緒の確認",
            "ではありません",
            "これは",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "情緒の確認",
            "です"
          ],
          "correctAnswer": "これは情緒の確認です"
        },
        {
          "id": "u28_l7_5",
          "type": "speak",
          "prompt": "哀愁の確認",
          "furigana": "あいしゅうのかくにん",
          "romaji": "aishuu no kakunin",
          "english": "Pronounce: Confirming Melancholy / sorrowful charm",
          "audioText": "あいしゅうのかくにん",
          "targetSpeech": "哀愁の確認",
          "options": [
            "Confirming Melancholy / sorrowful charm",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "哀愁の確認"
        },
        {
          "id": "u28_l7_6",
          "type": "dictate",
          "prompt": "哀愁の確認をお願いします",
          "furigana": "あいしゅうのかくにんをおねがいします",
          "romaji": "aishuu no kakunin o onegaishimasu.",
          "english": "Confirming Melancholy / sorrowful charm, please.",
          "audioText": "哀愁の確認をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "ありがとう",
            "を",
            "哀愁の確認"
          ],
          "dictateSolution": [
            "哀愁の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "哀愁の確認をお願いします"
        },
        {
          "id": "u28_l7_7",
          "type": "match",
          "prompt": "比喩の確認・情緒の確認・哀愁の確認・余韻の確認",
          "furigana": "ひゆのかくにん・じょうちょのかくにん・あいしゅうのかくにん・よいんのかくにん",
          "romaji": "hiyu no kakunin, joutcho no kakunin, aishuu no kakunin, yoin no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ひゆのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "比喩の確認",
              "right": "Confirming Metaphor / simile",
              "furigana": "ひゆのかくにん",
              "romaji": "hiyu no kakunin"
            },
            {
              "id": "p_1",
              "left": "情緒の確認",
              "right": "Confirming Atmosphere / evocative mood",
              "furigana": "じょうちょのかくにん",
              "romaji": "joutcho no kakunin"
            },
            {
              "id": "p_2",
              "left": "哀愁の確認",
              "right": "Confirming Melancholy / sorrowful charm",
              "furigana": "あいしゅうのかくにん",
              "romaji": "aishuu no kakunin"
            },
            {
              "id": "p_3",
              "left": "余韻の確認",
              "right": "Confirming Lingering resonance / aftertaste",
              "furigana": "よいんのかくにん",
              "romaji": "yoin no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l7_8",
          "type": "dialogue",
          "prompt": "叙情的についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "叙情的についてどう思われますか？",
          "furigana": "叙情的についてどう思われますか？",
          "romaji": "jojouteki ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Lyrical / poetic emotionalism?",
          "audioText": "叙情的についてどう思われますか？",
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
      "id": "u28_l8",
      "unitId": "unit_28",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Lingering resonance / aftertaste & Confirming Sentimentality",
      "titleJp": "余韻の確認・感傷の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "余韻の確認",
        "感傷の確認",
        "無常観の確認"
      ],
      "kanjiKeywords": [
        "余",
        "韻",
        "確",
        "認",
        "感",
        "傷",
        "確",
        "認",
        "無",
        "常",
        "観",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u28_l8_1",
          "type": "listen",
          "prompt": "余韻の確認",
          "furigana": "よいんのかくにん",
          "romaji": "yoin no kakunin",
          "english": "Confirming Lingering resonance / aftertaste",
          "audioText": "よいんのかくにん",
          "options": [
            "Confirming Metaphor / simile",
            "Confirming Atmosphere / evocative mood",
            "Confirming Lingering resonance / aftertaste",
            "Masterpiece"
          ],
          "correctAnswer": "Confirming Lingering resonance / aftertaste"
        },
        {
          "id": "u28_l8_2",
          "type": "spell",
          "prompt": "余韻の確認",
          "furigana": "よいんのかくにん",
          "romaji": "yoin no kakunin",
          "english": "Build 'Confirming Lingering resonance / aftertaste'",
          "audioText": "よいんのかくにん",
          "tileBank": [
            "か",
            "く",
            "の",
            "い",
            "よ",
            "ん",
            "ん",
            "に"
          ],
          "correctAnswer": "よいんのかくにん"
        },
        {
          "id": "u28_l8_3",
          "type": "cloze",
          "prompt": "私は感傷の確認がすきです",
          "furigana": "わたしはかんしょうのかくにんがすきです",
          "romaji": "Watashi wa kanshou no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Sentimentality.",
          "audioText": "感傷の確認",
          "clozeSentence": "これは感傷の確認 {{BLANK}} す。",
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
          "id": "u28_l8_4",
          "type": "scramble",
          "prompt": "これは感傷の確認です",
          "furigana": "これはかんしょうのかくにんです",
          "romaji": "Kore wa kanshou no kakunin desu.",
          "english": "This is Confirming Sentimentality.",
          "audioText": "これは感傷の確認です",
          "scrambleTokens": [
            "です",
            "これは",
            "それ",
            "感傷の確認",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "感傷の確認",
            "です"
          ],
          "correctAnswer": "これは感傷の確認です"
        },
        {
          "id": "u28_l8_5",
          "type": "speak",
          "prompt": "無常観の確認",
          "furigana": "むじょうかんのかくにん",
          "romaji": "mujoukan no kakunin",
          "english": "Pronounce: Confirming Buddhist sense of impermanence",
          "audioText": "むじょうかんのかくにん",
          "targetSpeech": "無常観の確認",
          "options": [
            "Confirming Buddhist sense of impermanence",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "無常観の確認"
        },
        {
          "id": "u28_l8_6",
          "type": "dictate",
          "prompt": "無常観の確認をお願いします",
          "furigana": "むじょうかんのかくにんをおねがいします",
          "romaji": "mujoukan no kakunin o onegaishimasu.",
          "english": "Confirming Buddhist sense of impermanence, please.",
          "audioText": "無常観の確認をお願いします",
          "dictateTokens": [
            "無常観の確認",
            "ありがとう",
            "お願いします",
            "を",
            "です"
          ],
          "dictateSolution": [
            "無常観の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "無常観の確認をお願いします"
        },
        {
          "id": "u28_l8_7",
          "type": "match",
          "prompt": "余韻の確認・感傷の確認・無常観の確認・文体の確認",
          "furigana": "よいんのかくにん・かんしょうのかくにん・むじょうかんのかくにん・ぶんたいのかくにん",
          "romaji": "yoin no kakunin, kanshou no kakunin, mujoukan no kakunin, buntai no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "よいんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "余韻の確認",
              "right": "Confirming Lingering resonance / aftertaste",
              "furigana": "よいんのかくにん",
              "romaji": "yoin no kakunin"
            },
            {
              "id": "p_1",
              "left": "感傷の確認",
              "right": "Confirming Sentimentality",
              "furigana": "かんしょうのかくにん",
              "romaji": "kanshou no kakunin"
            },
            {
              "id": "p_2",
              "left": "無常観の確認",
              "right": "Confirming Buddhist sense of impermanence",
              "furigana": "むじょうかんのかくにん",
              "romaji": "mujoukan no kakunin"
            },
            {
              "id": "p_3",
              "left": "文体の確認",
              "right": "Confirming Literary style",
              "furigana": "ぶんたいのかくにん",
              "romaji": "buntai no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l8_8",
          "type": "dialogue",
          "prompt": "次は比喩に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は比喩に進みましょう。",
          "furigana": "次は比喩に進みましょう。",
          "romaji": "Tsugi wa hiyu ni susumimashou.",
          "english": "Speaker: Let's proceed to Metaphor / simile next.",
          "audioText": "次は比喩に進みましょう。",
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
      "id": "u28_l9",
      "unitId": "unit_28",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Literary style & Confirming Between the lines",
      "titleJp": "文体の確認・行間の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "文体の確認",
        "行間の確認",
        "深淵の確認"
      ],
      "kanjiKeywords": [
        "文",
        "体",
        "確",
        "認",
        "行",
        "間",
        "確",
        "認",
        "深",
        "淵",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u28_l9_1",
          "type": "listen",
          "prompt": "文体の確認",
          "furigana": "ぶんたいのかくにん",
          "romaji": "buntai no kakunin",
          "english": "Confirming Literary style",
          "audioText": "ぶんたいのかくにん",
          "options": [
            "Confirming Scenic taste / tasteful atmosphere",
            "Confirming Literary style",
            "Lyrical / poetic emotionalism",
            "Personal essay / literary miscellany"
          ],
          "correctAnswer": "Confirming Literary style"
        },
        {
          "id": "u28_l9_2",
          "type": "spell",
          "prompt": "文体の確認",
          "furigana": "ぶんたいのかくにん",
          "romaji": "buntai no kakunin",
          "english": "Build 'Confirming Literary style'",
          "audioText": "ぶんたいのかくにん",
          "tileBank": [
            "い",
            "ぶ",
            "に",
            "ん",
            "く",
            "の",
            "た",
            "か"
          ],
          "correctAnswer": "ぶんたいのかくにん"
        },
        {
          "id": "u28_l9_3",
          "type": "cloze",
          "prompt": "私は行間の確認がすきです",
          "furigana": "わたしはぎょうかんのかくにんがすきです",
          "romaji": "Watashi wa gyoukan no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Between the lines.",
          "audioText": "行間の確認",
          "clozeSentence": "これは行間の確認 {{BLANK}} す。",
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
          "id": "u28_l9_4",
          "type": "scramble",
          "prompt": "これは行間の確認です",
          "furigana": "これはぎょうかんのかくにんです",
          "romaji": "Kore wa gyoukan no kakunin desu.",
          "english": "This is Confirming Between the lines.",
          "audioText": "これは行間の確認です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "行間の確認",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "行間の確認",
            "です"
          ],
          "correctAnswer": "これは行間の確認です"
        },
        {
          "id": "u28_l9_5",
          "type": "speak",
          "prompt": "深淵の確認",
          "furigana": "しんえんのかくにん",
          "romaji": "shin-en no kakunin",
          "english": "Pronounce: Confirming Abyss / profound depth",
          "audioText": "しんえんのかくにん",
          "targetSpeech": "深淵の確認",
          "options": [
            "Confirming Abyss / profound depth",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "深淵の確認"
        },
        {
          "id": "u28_l9_6",
          "type": "dictate",
          "prompt": "深淵の確認をお願いします",
          "furigana": "しんえんのかくにんをおねがいします",
          "romaji": "shin-en no kakunin o onegaishimasu.",
          "english": "Confirming Abyss / profound depth, please.",
          "audioText": "深淵の確認をお願いします",
          "dictateTokens": [
            "深淵の確認",
            "を",
            "です",
            "お願いします",
            "ありがとう"
          ],
          "dictateSolution": [
            "深淵の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "深淵の確認をお願いします"
        },
        {
          "id": "u28_l9_7",
          "type": "match",
          "prompt": "文体の確認・行間の確認・深淵の確認・幽玄の確認",
          "furigana": "ぶんたいのかくにん・ぎょうかんのかくにん・しんえんのかくにん・ゆうげんのかくにん",
          "romaji": "buntai no kakunin, gyoukan no kakunin, shin-en no kakunin, yuugen no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ぶんたいのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "文体の確認",
              "right": "Confirming Literary style",
              "furigana": "ぶんたいのかくにん",
              "romaji": "buntai no kakunin"
            },
            {
              "id": "p_1",
              "left": "行間の確認",
              "right": "Confirming Between the lines",
              "furigana": "ぎょうかんのかくにん",
              "romaji": "gyoukan no kakunin"
            },
            {
              "id": "p_2",
              "left": "深淵の確認",
              "right": "Confirming Abyss / profound depth",
              "furigana": "しんえんのかくにん",
              "romaji": "shin-en no kakunin"
            },
            {
              "id": "p_3",
              "left": "幽玄の確認",
              "right": "Confirming Subtle grace and hidden beauty",
              "furigana": "ゆうげんのかくにん",
              "romaji": "yuugen no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l9_8",
          "type": "dialogue",
          "prompt": "随筆について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "随筆について教えていただけますか？",
          "furigana": "随筆について教えていただけますか？",
          "romaji": "zuihitsu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Personal essay / literary miscellany?",
          "audioText": "随筆について教えていただけますか？",
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
      "id": "u28_l10",
      "unitId": "unit_28",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Subtle grace and hidden beauty & Confirming Scenic taste / tasteful atmosphere",
      "titleJp": "幽玄の確認・風情の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "幽玄の確認",
        "風情の確認",
        "傑作の確認"
      ],
      "kanjiKeywords": [
        "幽",
        "玄",
        "確",
        "認",
        "風",
        "情",
        "確",
        "認",
        "傑",
        "作",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u28_l10_1",
          "type": "listen",
          "prompt": "幽玄の確認",
          "furigana": "ゆうげんのかくにん",
          "romaji": "yuugen no kakunin",
          "english": "Confirming Subtle grace and hidden beauty",
          "audioText": "ゆうげんのかくにん",
          "options": [
            "Confirming Lingering resonance / aftertaste",
            "Confirming Literary style",
            "Buddhist sense of impermanence",
            "Confirming Subtle grace and hidden beauty"
          ],
          "correctAnswer": "Confirming Subtle grace and hidden beauty"
        },
        {
          "id": "u28_l10_2",
          "type": "spell",
          "prompt": "幽玄の確認",
          "furigana": "ゆうげんのかくにん",
          "romaji": "yuugen no kakunin",
          "english": "Build 'Confirming Subtle grace and hidden beauty'",
          "audioText": "ゆうげんのかくにん",
          "tileBank": [
            "に",
            "か",
            "ん",
            "の",
            "ゆ",
            "げ",
            "う",
            "く"
          ],
          "correctAnswer": "ゆうげんのかくにん"
        },
        {
          "id": "u28_l10_3",
          "type": "cloze",
          "prompt": "私は風情の確認がすきです",
          "furigana": "わたしはふぜいのかくにんがすきです",
          "romaji": "Watashi wa fuzei no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Scenic taste / tasteful atmosphere.",
          "audioText": "風情の確認",
          "clozeSentence": "これは風情の確認 {{BLANK}} す。",
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
          "id": "u28_l10_4",
          "type": "scramble",
          "prompt": "これは風情の確認です",
          "furigana": "これはふぜいのかくにんです",
          "romaji": "Kore wa fuzei no kakunin desu.",
          "english": "This is Confirming Scenic taste / tasteful atmosphere.",
          "audioText": "これは風情の確認です",
          "scrambleTokens": [
            "です",
            "それ",
            "ではありません",
            "風情の確認",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "風情の確認",
            "です"
          ],
          "correctAnswer": "これは風情の確認です"
        },
        {
          "id": "u28_l10_5",
          "type": "speak",
          "prompt": "傑作の確認",
          "furigana": "けっさくのかくにん",
          "romaji": "kessaku no kakunin",
          "english": "Pronounce: Confirming Masterpiece",
          "audioText": "けっさくのかくにん",
          "targetSpeech": "傑作の確認",
          "options": [
            "Confirming Masterpiece",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "傑作の確認"
        },
        {
          "id": "u28_l10_6",
          "type": "dictate",
          "prompt": "傑作の確認をお願いします",
          "furigana": "けっさくのかくにんをおねがいします",
          "romaji": "kessaku no kakunin o onegaishimasu.",
          "english": "Confirming Masterpiece, please.",
          "audioText": "傑作の確認をお願いします",
          "dictateTokens": [
            "傑作の確認",
            "を",
            "お願いします",
            "です",
            "ありがとう"
          ],
          "dictateSolution": [
            "傑作の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "傑作の確認をお願いします"
        },
        {
          "id": "u28_l10_7",
          "type": "match",
          "prompt": "幽玄の確認・風情の確認・傑作の確認・随筆の確認",
          "furigana": "ゆうげんのかくにん・ふぜいのかくにん・けっさくのかくにん・ずいひつのかくにん",
          "romaji": "yuugen no kakunin, fuzei no kakunin, kessaku no kakunin, zuihitsu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ゆうげんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "幽玄の確認",
              "right": "Confirming Subtle grace and hidden beauty",
              "furigana": "ゆうげんのかくにん",
              "romaji": "yuugen no kakunin"
            },
            {
              "id": "p_1",
              "left": "風情の確認",
              "right": "Confirming Scenic taste / tasteful atmosphere",
              "furigana": "ふぜいのかくにん",
              "romaji": "fuzei no kakunin"
            },
            {
              "id": "p_2",
              "left": "傑作の確認",
              "right": "Confirming Masterpiece",
              "furigana": "けっさくのかくにん",
              "romaji": "kessaku no kakunin"
            },
            {
              "id": "p_3",
              "left": "随筆の確認",
              "right": "Confirming Personal essay / literary miscellany",
              "furigana": "ずいひつのかくにん",
              "romaji": "zuihitsu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l10_8",
          "type": "dialogue",
          "prompt": "描写の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "描写の準備はできていますか？",
          "furigana": "描写の準備はできていますか？",
          "romaji": "byousha no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Depiction / vivid description ready?",
          "audioText": "描写の準備はできていますか？",
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
      "id": "u28_l11",
      "unitId": "unit_28",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Personal essay / literary miscellany & Confirming Depiction / vivid description",
      "titleJp": "随筆の確認・描写の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "随筆の確認",
        "描写の確認",
        "叙情的の確認"
      ],
      "kanjiKeywords": [
        "随",
        "筆",
        "確",
        "認",
        "描",
        "写",
        "確",
        "認",
        "叙",
        "情",
        "的",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u28_l11_1",
          "type": "listen",
          "prompt": "随筆の確認",
          "furigana": "ずいひつのかくにん",
          "romaji": "zuihitsu no kakunin",
          "english": "Confirming Personal essay / literary miscellany",
          "audioText": "ずいひつのかくにん",
          "options": [
            "Confirming Melancholy / sorrowful charm",
            "Confirming Metaphor / simile",
            "Confirming Depiction / vivid description",
            "Confirming Personal essay / literary miscellany"
          ],
          "correctAnswer": "Confirming Personal essay / literary miscellany"
        },
        {
          "id": "u28_l11_2",
          "type": "spell",
          "prompt": "随筆の確認",
          "furigana": "ずいひつのかくにん",
          "romaji": "zuihitsu no kakunin",
          "english": "Build 'Confirming Personal essay / literary miscellany'",
          "audioText": "ずいひつのかくにん",
          "tileBank": [
            "の",
            "い",
            "く",
            "に",
            "ず",
            "つ",
            "か",
            "ひ"
          ],
          "correctAnswer": "ずいひつのかくにん"
        },
        {
          "id": "u28_l11_3",
          "type": "cloze",
          "prompt": "私は描写の確認がすきです",
          "furigana": "わたしはびょうしゃのかくにんがすきです",
          "romaji": "Watashi wa byousha no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Depiction / vivid description.",
          "audioText": "描写の確認",
          "clozeSentence": "これは描写の確認 {{BLANK}} す。",
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
          "id": "u28_l11_4",
          "type": "scramble",
          "prompt": "これは描写の確認です",
          "furigana": "これはびょうしゃのかくにんです",
          "romaji": "Kore wa byousha no kakunin desu.",
          "english": "This is Confirming Depiction / vivid description.",
          "audioText": "これは描写の確認です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "それ",
            "これは",
            "描写の確認"
          ],
          "scrambleSolution": [
            "これは",
            "描写の確認",
            "です"
          ],
          "correctAnswer": "これは描写の確認です"
        },
        {
          "id": "u28_l11_5",
          "type": "speak",
          "prompt": "叙情的の確認",
          "furigana": "じょじょうてきのかくにん",
          "romaji": "jojouteki no kakunin",
          "english": "Pronounce: Confirming Lyrical / poetic emotionalism",
          "audioText": "じょじょうてきのかくにん",
          "targetSpeech": "叙情的の確認",
          "options": [
            "Confirming Lyrical / poetic emotionalism",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "叙情的の確認"
        },
        {
          "id": "u28_l11_6",
          "type": "dictate",
          "prompt": "叙情的の確認をお願いします",
          "furigana": "じょじょうてきのかくにんをおねがいします",
          "romaji": "jojouteki no kakunin o onegaishimasu.",
          "english": "Confirming Lyrical / poetic emotionalism, please.",
          "audioText": "叙情的の確認をお願いします",
          "dictateTokens": [
            "叙情的の確認",
            "ありがとう",
            "お願いします",
            "です",
            "を"
          ],
          "dictateSolution": [
            "叙情的の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "叙情的の確認をお願いします"
        },
        {
          "id": "u28_l11_7",
          "type": "match",
          "prompt": "随筆の確認・描写の確認・叙情的の確認・比喩の確認",
          "furigana": "ずいひつのかくにん・びょうしゃのかくにん・じょじょうてきのかくにん・ひゆのかくにん",
          "romaji": "zuihitsu no kakunin, byousha no kakunin, jojouteki no kakunin, hiyu no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ずいひつのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "随筆の確認",
              "right": "Confirming Personal essay / literary miscellany",
              "furigana": "ずいひつのかくにん",
              "romaji": "zuihitsu no kakunin"
            },
            {
              "id": "p_1",
              "left": "描写の確認",
              "right": "Confirming Depiction / vivid description",
              "furigana": "びょうしゃのかくにん",
              "romaji": "byousha no kakunin"
            },
            {
              "id": "p_2",
              "left": "叙情的の確認",
              "right": "Confirming Lyrical / poetic emotionalism",
              "furigana": "じょじょうてきのかくにん",
              "romaji": "jojouteki no kakunin"
            },
            {
              "id": "p_3",
              "left": "比喩の確認",
              "right": "Confirming Metaphor / simile",
              "furigana": "ひゆのかくにん",
              "romaji": "hiyu no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l11_8",
          "type": "dialogue",
          "prompt": "叙情的についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "叙情的についてどう思われますか？",
          "furigana": "叙情的についてどう思われますか？",
          "romaji": "jojouteki ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Lyrical / poetic emotionalism?",
          "audioText": "叙情的についてどう思われますか？",
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
      "id": "u28_l12",
      "unitId": "unit_28",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Metaphor / simile & Confirming Atmosphere / evocative mood",
      "titleJp": "比喩の確認・情緒の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "比喩の確認",
        "情緒の確認",
        "哀愁の確認"
      ],
      "kanjiKeywords": [
        "比",
        "喩",
        "確",
        "認",
        "情",
        "緒",
        "確",
        "認",
        "哀",
        "愁",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u28_l12_1",
          "type": "listen",
          "prompt": "比喩の確認",
          "furigana": "ひゆのかくにん",
          "romaji": "hiyu no kakunin",
          "english": "Confirming Metaphor / simile",
          "audioText": "ひゆのかくにん",
          "options": [
            "Confirming Masterpiece",
            "Confirming Subtle grace and hidden beauty",
            "Confirming Melancholy / sorrowful charm",
            "Confirming Metaphor / simile"
          ],
          "correctAnswer": "Confirming Metaphor / simile"
        },
        {
          "id": "u28_l12_2",
          "type": "spell",
          "prompt": "比喩の確認",
          "furigana": "ひゆのかくにん",
          "romaji": "hiyu no kakunin",
          "english": "Build 'Confirming Metaphor / simile'",
          "audioText": "ひゆのかくにん",
          "tileBank": [
            "ん",
            "か",
            "ひ",
            "り",
            "の",
            "に",
            "く",
            "ゆ"
          ],
          "correctAnswer": "ひゆのかくにん"
        },
        {
          "id": "u28_l12_3",
          "type": "cloze",
          "prompt": "私は情緒の確認がすきです",
          "furigana": "わたしはじょうちょのかくにんがすきです",
          "romaji": "Watashi wa joutcho no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Atmosphere / evocative mood.",
          "audioText": "情緒の確認",
          "clozeSentence": "これは情緒の確認 {{BLANK}} す。",
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
          "id": "u28_l12_4",
          "type": "scramble",
          "prompt": "これは情緒の確認です",
          "furigana": "これはじょうちょのかくにんです",
          "romaji": "Kore wa joutcho no kakunin desu.",
          "english": "This is Confirming Atmosphere / evocative mood.",
          "audioText": "これは情緒の確認です",
          "scrambleTokens": [
            "それ",
            "これは",
            "ではありません",
            "です",
            "情緒の確認"
          ],
          "scrambleSolution": [
            "これは",
            "情緒の確認",
            "です"
          ],
          "correctAnswer": "これは情緒の確認です"
        },
        {
          "id": "u28_l12_5",
          "type": "speak",
          "prompt": "哀愁の確認",
          "furigana": "あいしゅうのかくにん",
          "romaji": "aishuu no kakunin",
          "english": "Pronounce: Confirming Melancholy / sorrowful charm",
          "audioText": "あいしゅうのかくにん",
          "targetSpeech": "哀愁の確認",
          "options": [
            "Confirming Melancholy / sorrowful charm",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "哀愁の確認"
        },
        {
          "id": "u28_l12_6",
          "type": "dictate",
          "prompt": "哀愁の確認をお願いします",
          "furigana": "あいしゅうのかくにんをおねがいします",
          "romaji": "aishuu no kakunin o onegaishimasu.",
          "english": "Confirming Melancholy / sorrowful charm, please.",
          "audioText": "哀愁の確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "お願いします",
            "です",
            "哀愁の確認"
          ],
          "dictateSolution": [
            "哀愁の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "哀愁の確認をお願いします"
        },
        {
          "id": "u28_l12_7",
          "type": "match",
          "prompt": "比喩の確認・情緒の確認・哀愁の確認・随筆",
          "furigana": "ひゆのかくにん・じょうちょのかくにん・あいしゅうのかくにん・ずいひつ",
          "romaji": "hiyu no kakunin, joutcho no kakunin, aishuu no kakunin, zuihitsu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ひゆのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "比喩の確認",
              "right": "Confirming Metaphor / simile",
              "furigana": "ひゆのかくにん",
              "romaji": "hiyu no kakunin"
            },
            {
              "id": "p_1",
              "left": "情緒の確認",
              "right": "Confirming Atmosphere / evocative mood",
              "furigana": "じょうちょのかくにん",
              "romaji": "joutcho no kakunin"
            },
            {
              "id": "p_2",
              "left": "哀愁の確認",
              "right": "Confirming Melancholy / sorrowful charm",
              "furigana": "あいしゅうのかくにん",
              "romaji": "aishuu no kakunin"
            },
            {
              "id": "p_3",
              "left": "随筆",
              "right": "Personal essay / literary miscellany",
              "furigana": "ずいひつ",
              "romaji": "zuihitsu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l12_8",
          "type": "dialogue",
          "prompt": "次は比喩に進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次は比喩に進みましょう。",
          "furigana": "次は比喩に進みましょう。",
          "romaji": "Tsugi wa hiyu ni susumimashou.",
          "english": "Speaker: Let's proceed to Metaphor / simile next.",
          "audioText": "次は比喩に進みましょう。",
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
      "id": "u28_l13",
      "unitId": "unit_28",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Personal essay / literary miscellany & Depiction / vivid description",
      "titleJp": "随筆・描写",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "随筆",
        "描写",
        "叙情的"
      ],
      "kanjiKeywords": [
        "随",
        "筆",
        "描",
        "写",
        "叙",
        "情",
        "的"
      ],
      "items": [
        {
          "id": "u28_l13_1",
          "type": "listen",
          "prompt": "随筆",
          "furigana": "ずいひつ",
          "romaji": "zuihitsu",
          "english": "Personal essay / literary miscellany",
          "audioText": "ずいひつ",
          "options": [
            "Confirming Literary style",
            "Confirming Melancholy / sorrowful charm",
            "Personal essay / literary miscellany",
            "Confirming Personal essay / literary miscellany"
          ],
          "correctAnswer": "Personal essay / literary miscellany"
        },
        {
          "id": "u28_l13_2",
          "type": "spell",
          "prompt": "随筆",
          "furigana": "ずいひつ",
          "romaji": "zuihitsu",
          "english": "Build 'Personal essay / literary miscellany'",
          "audioText": "ずいひつ",
          "tileBank": [
            "か",
            "え",
            "ひ",
            "ず",
            "せ",
            "つ",
            "き",
            "い"
          ],
          "correctAnswer": "ずいひつ"
        },
        {
          "id": "u28_l13_3",
          "type": "cloze",
          "prompt": "私は描写がすきです",
          "furigana": "わたしはびょうしゃがすきです",
          "romaji": "Watashi wa byousha ga suki desu.",
          "english": "Fill in the blank with the correct particle for Depiction / vivid description.",
          "audioText": "描写",
          "clozeSentence": "これは描写 {{BLANK}} す。",
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
          "id": "u28_l13_4",
          "type": "scramble",
          "prompt": "これは描写です",
          "furigana": "これはびょうしゃです",
          "romaji": "Kore wa byousha desu.",
          "english": "This is Depiction / vivid description.",
          "audioText": "これは描写です",
          "scrambleTokens": [
            "ではありません",
            "です",
            "描写",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "描写",
            "です"
          ],
          "correctAnswer": "これは描写です"
        },
        {
          "id": "u28_l13_5",
          "type": "speak",
          "prompt": "叙情的",
          "furigana": "じょじょうてき",
          "romaji": "jojouteki",
          "english": "Pronounce: Lyrical / poetic emotionalism",
          "audioText": "じょじょうてき",
          "targetSpeech": "叙情的",
          "options": [
            "Lyrical / poetic emotionalism",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "叙情的"
        },
        {
          "id": "u28_l13_6",
          "type": "dictate",
          "prompt": "叙情的をお願いします",
          "furigana": "じょじょうてきをおねがいします",
          "romaji": "jojouteki o onegaishimasu.",
          "english": "Lyrical / poetic emotionalism, please.",
          "audioText": "叙情的をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "です",
            "叙情的",
            "ありがとう"
          ],
          "dictateSolution": [
            "叙情的",
            "を",
            "お願いします"
          ],
          "correctAnswer": "叙情的をお願いします"
        },
        {
          "id": "u28_l13_7",
          "type": "match",
          "prompt": "随筆・描写・叙情的・比喩",
          "furigana": "ずいひつ・びょうしゃ・じょじょうてき・ひゆ",
          "romaji": "zuihitsu, byousha, jojouteki, hiyu",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ずいひつ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "随筆",
              "right": "Personal essay / literary miscellany",
              "furigana": "ずいひつ",
              "romaji": "zuihitsu"
            },
            {
              "id": "p_1",
              "left": "描写",
              "right": "Depiction / vivid description",
              "furigana": "びょうしゃ",
              "romaji": "byousha"
            },
            {
              "id": "p_2",
              "left": "叙情的",
              "right": "Lyrical / poetic emotionalism",
              "furigana": "じょじょうてき",
              "romaji": "jojouteki"
            },
            {
              "id": "p_3",
              "left": "比喩",
              "right": "Metaphor / simile",
              "furigana": "ひゆ",
              "romaji": "hiyu"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l13_8",
          "type": "dialogue",
          "prompt": "随筆について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "随筆について教えていただけますか？",
          "furigana": "随筆について教えていただけますか？",
          "romaji": "zuihitsu ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Personal essay / literary miscellany?",
          "audioText": "随筆について教えていただけますか？",
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
      "id": "u28_l14",
      "unitId": "unit_28",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Metaphor / simile & Atmosphere / evocative mood",
      "titleJp": "比喩・情緒",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "比喩",
        "情緒",
        "哀愁"
      ],
      "kanjiKeywords": [
        "比",
        "喩",
        "情",
        "緒",
        "哀",
        "愁"
      ],
      "items": [
        {
          "id": "u28_l14_1",
          "type": "listen",
          "prompt": "比喩",
          "furigana": "ひゆ",
          "romaji": "hiyu",
          "english": "Metaphor / simile",
          "audioText": "ひゆ",
          "options": [
            "Confirming Abyss / profound depth",
            "Metaphor / simile",
            "Scenic taste / tasteful atmosphere",
            "Confirming Masterpiece"
          ],
          "correctAnswer": "Metaphor / simile"
        },
        {
          "id": "u28_l14_2",
          "type": "spell",
          "prompt": "比喩",
          "furigana": "ひゆ",
          "romaji": "hiyu",
          "english": "Build 'Metaphor / simile'",
          "audioText": "ひゆ",
          "tileBank": [
            "ち",
            "く",
            "ひ",
            "ま",
            "た",
            "ゆ",
            "う",
            "け"
          ],
          "correctAnswer": "ひゆ"
        },
        {
          "id": "u28_l14_3",
          "type": "cloze",
          "prompt": "私は情緒がすきです",
          "furigana": "わたしはじょうちょがすきです",
          "romaji": "Watashi wa joutcho ga suki desu.",
          "english": "Fill in the blank with the correct particle for Atmosphere / evocative mood.",
          "audioText": "情緒",
          "clozeSentence": "これは情緒 {{BLANK}} す。",
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
          "id": "u28_l14_4",
          "type": "scramble",
          "prompt": "これは情緒です",
          "furigana": "これはじょうちょです",
          "romaji": "Kore wa joutcho desu.",
          "english": "This is Atmosphere / evocative mood.",
          "audioText": "これは情緒です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "それ",
            "です",
            "情緒"
          ],
          "scrambleSolution": [
            "これは",
            "情緒",
            "です"
          ],
          "correctAnswer": "これは情緒です"
        },
        {
          "id": "u28_l14_5",
          "type": "speak",
          "prompt": "哀愁",
          "furigana": "あいしゅう",
          "romaji": "aishuu",
          "english": "Pronounce: Melancholy / sorrowful charm",
          "audioText": "あいしゅう",
          "targetSpeech": "哀愁",
          "options": [
            "Melancholy / sorrowful charm",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "哀愁"
        },
        {
          "id": "u28_l14_6",
          "type": "dictate",
          "prompt": "哀愁をお願いします",
          "furigana": "あいしゅうをおねがいします",
          "romaji": "aishuu o onegaishimasu.",
          "english": "Melancholy / sorrowful charm, please.",
          "audioText": "哀愁をお願いします",
          "dictateTokens": [
            "を",
            "お願いします",
            "哀愁",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "哀愁",
            "を",
            "お願いします"
          ],
          "correctAnswer": "哀愁をお願いします"
        },
        {
          "id": "u28_l14_7",
          "type": "match",
          "prompt": "比喩・情緒・哀愁・余韻",
          "furigana": "ひゆ・じょうちょ・あいしゅう・よいん",
          "romaji": "hiyu, joutcho, aishuu, yoin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ひゆ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "比喩",
              "right": "Metaphor / simile",
              "furigana": "ひゆ",
              "romaji": "hiyu"
            },
            {
              "id": "p_1",
              "left": "情緒",
              "right": "Atmosphere / evocative mood",
              "furigana": "じょうちょ",
              "romaji": "joutcho"
            },
            {
              "id": "p_2",
              "left": "哀愁",
              "right": "Melancholy / sorrowful charm",
              "furigana": "あいしゅう",
              "romaji": "aishuu"
            },
            {
              "id": "p_3",
              "left": "余韻",
              "right": "Lingering resonance / aftertaste",
              "furigana": "よいん",
              "romaji": "yoin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l14_8",
          "type": "dialogue",
          "prompt": "描写の準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "描写の準備はできていますか？",
          "furigana": "描写の準備はできていますか？",
          "romaji": "byousha no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Depiction / vivid description ready?",
          "audioText": "描写の準備はできていますか？",
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
      "id": "u28_l15",
      "unitId": "unit_28",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 28 Master Exam",
      "iconType": "test",
      "title": "Unit 28 Master Exam",
      "titleJp": "第28週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "余韻",
        "感傷",
        "無常観"
      ],
      "kanjiKeywords": [
        "余",
        "韻",
        "感",
        "傷",
        "無",
        "常",
        "観"
      ],
      "items": [
        {
          "id": "u28_l15_1",
          "type": "listen",
          "prompt": "余韻",
          "furigana": "よいん",
          "romaji": "yoin",
          "english": "Lingering resonance / aftertaste",
          "audioText": "よいん",
          "options": [
            "Metaphor / simile",
            "Lingering resonance / aftertaste",
            "Depiction / vivid description",
            "Subtle grace and hidden beauty"
          ],
          "correctAnswer": "Lingering resonance / aftertaste"
        },
        {
          "id": "u28_l15_2",
          "type": "spell",
          "prompt": "余韻",
          "furigana": "よいん",
          "romaji": "yoin",
          "english": "Build 'Lingering resonance / aftertaste'",
          "audioText": "よいん",
          "tileBank": [
            "に",
            "ん",
            "ら",
            "い",
            "よ",
            "え",
            "な",
            "や"
          ],
          "correctAnswer": "よいん"
        },
        {
          "id": "u28_l15_3",
          "type": "cloze",
          "prompt": "私は感傷がすきです",
          "furigana": "わたしはかんしょうがすきです",
          "romaji": "Watashi wa kanshou ga suki desu.",
          "english": "Fill in the blank with the correct particle for Sentimentality.",
          "audioText": "感傷",
          "clozeSentence": "これは感傷 {{BLANK}} す。",
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
          "id": "u28_l15_4",
          "type": "scramble",
          "prompt": "これは感傷です",
          "furigana": "これはかんしょうです",
          "romaji": "Kore wa kanshou desu.",
          "english": "This is Sentimentality.",
          "audioText": "これは感傷です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "これは",
            "感傷"
          ],
          "scrambleSolution": [
            "これは",
            "感傷",
            "です"
          ],
          "correctAnswer": "これは感傷です"
        },
        {
          "id": "u28_l15_5",
          "type": "speak",
          "prompt": "無常観",
          "furigana": "むじょうかん",
          "romaji": "mujoukan",
          "english": "Pronounce: Buddhist sense of impermanence",
          "audioText": "むじょうかん",
          "targetSpeech": "無常観",
          "options": [
            "Buddhist sense of impermanence",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "無常観"
        },
        {
          "id": "u28_l15_6",
          "type": "dictate",
          "prompt": "無常観をお願いします",
          "furigana": "むじょうかんをおねがいします",
          "romaji": "mujoukan o onegaishimasu.",
          "english": "Buddhist sense of impermanence, please.",
          "audioText": "無常観をお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "お願いします",
            "を",
            "無常観"
          ],
          "dictateSolution": [
            "無常観",
            "を",
            "お願いします"
          ],
          "correctAnswer": "無常観をお願いします"
        },
        {
          "id": "u28_l15_7",
          "type": "match",
          "prompt": "余韻・感傷・無常観・文体",
          "furigana": "よいん・かんしょう・むじょうかん・ぶんたい",
          "romaji": "yoin, kanshou, mujoukan, buntai",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "よいん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "余韻",
              "right": "Lingering resonance / aftertaste",
              "furigana": "よいん",
              "romaji": "yoin"
            },
            {
              "id": "p_1",
              "left": "感傷",
              "right": "Sentimentality",
              "furigana": "かんしょう",
              "romaji": "kanshou"
            },
            {
              "id": "p_2",
              "left": "無常観",
              "right": "Buddhist sense of impermanence",
              "furigana": "むじょうかん",
              "romaji": "mujoukan"
            },
            {
              "id": "p_3",
              "left": "文体",
              "right": "Literary style",
              "furigana": "ぶんたい",
              "romaji": "buntai"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u28_l15_8",
          "type": "dialogue",
          "prompt": "叙情的についてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "叙情的についてどう思われますか？",
          "furigana": "叙情的についてどう思われますか？",
          "romaji": "jojouteki ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Lyrical / poetic emotionalism?",
          "audioText": "叙情的についてどう思われますか？",
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
    "id": "gate_unit_28",
    "unitId": "unit_28",
    "title": "Unit 28 Mastery Checkpoint",
    "titleJp": "第28週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u28_l1_1",
        "type": "listen",
        "prompt": "随筆",
        "furigana": "ずいひつ",
        "romaji": "zuihitsu",
        "english": "Personal essay / literary miscellany",
        "audioText": "ずいひつ",
        "options": [
          "Confirming Subtle grace and hidden beauty",
          "Personal essay / literary miscellany",
          "Sentimentality",
          "Confirming Sentimentality"
        ],
        "correctAnswer": "Personal essay / literary miscellany"
      },
      {
        "id": "u28_l1_2",
        "type": "spell",
        "prompt": "随筆",
        "furigana": "ずいひつ",
        "romaji": "zuihitsu",
        "english": "Build 'Personal essay / literary miscellany'",
        "audioText": "ずいひつ",
        "tileBank": [
          "ひ",
          "さ",
          "ず",
          "せ",
          "つ",
          "ろ",
          "い",
          "し"
        ],
        "correctAnswer": "ずいひつ"
      },
      {
        "id": "u28_l3_1",
        "type": "listen",
        "prompt": "余韻",
        "furigana": "よいん",
        "romaji": "yoin",
        "english": "Lingering resonance / aftertaste",
        "audioText": "よいん",
        "options": [
          "Abyss / profound depth",
          "Lingering resonance / aftertaste",
          "Lyrical / poetic emotionalism",
          "Confirming Metaphor / simile"
        ],
        "correctAnswer": "Lingering resonance / aftertaste"
      },
      {
        "id": "u28_l3_2",
        "type": "spell",
        "prompt": "余韻",
        "furigana": "よいん",
        "romaji": "yoin",
        "english": "Build 'Lingering resonance / aftertaste'",
        "audioText": "よいん",
        "tileBank": [
          "さ",
          "こ",
          "き",
          "い",
          "ふ",
          "ん",
          "ぬ",
          "よ"
        ],
        "correctAnswer": "よいん"
      },
      {
        "id": "u28_l5_1",
        "type": "listen",
        "prompt": "幽玄",
        "furigana": "ゆうげん",
        "romaji": "yuugen",
        "english": "Subtle grace and hidden beauty",
        "audioText": "ゆうげん",
        "options": [
          "Confirming Masterpiece",
          "Confirming Atmosphere / evocative mood",
          "Subtle grace and hidden beauty",
          "Personal essay / literary miscellany"
        ],
        "correctAnswer": "Subtle grace and hidden beauty"
      },
      {
        "id": "u28_l5_2",
        "type": "spell",
        "prompt": "幽玄",
        "furigana": "ゆうげん",
        "romaji": "yuugen",
        "english": "Build 'Subtle grace and hidden beauty'",
        "audioText": "ゆうげん",
        "tileBank": [
          "ゆ",
          "う",
          "げ",
          "あ",
          "そ",
          "の",
          "ひ",
          "ん"
        ],
        "correctAnswer": "ゆうげん"
      },
      {
        "id": "u28_l7_1",
        "type": "listen",
        "prompt": "比喩の確認",
        "furigana": "ひゆのかくにん",
        "romaji": "hiyu no kakunin",
        "english": "Confirming Metaphor / simile",
        "audioText": "ひゆのかくにん",
        "options": [
          "Sentimentality",
          "Confirming Atmosphere / evocative mood",
          "Confirming Metaphor / simile",
          "Confirming Lyrical / poetic emotionalism"
        ],
        "correctAnswer": "Confirming Metaphor / simile"
      },
      {
        "id": "u28_l7_2",
        "type": "spell",
        "prompt": "比喩の確認",
        "furigana": "ひゆのかくにん",
        "romaji": "hiyu no kakunin",
        "english": "Build 'Confirming Metaphor / simile'",
        "audioText": "ひゆのかくにん",
        "tileBank": [
          "に",
          "の",
          "ん",
          "ゆ",
          "ひ",
          "く",
          "か",
          "へ"
        ],
        "correctAnswer": "ひゆのかくにん"
      },
      {
        "id": "u28_l9_1",
        "type": "listen",
        "prompt": "文体の確認",
        "furigana": "ぶんたいのかくにん",
        "romaji": "buntai no kakunin",
        "english": "Confirming Literary style",
        "audioText": "ぶんたいのかくにん",
        "options": [
          "Confirming Scenic taste / tasteful atmosphere",
          "Confirming Literary style",
          "Lyrical / poetic emotionalism",
          "Personal essay / literary miscellany"
        ],
        "correctAnswer": "Confirming Literary style"
      },
      {
        "id": "u28_l9_2",
        "type": "spell",
        "prompt": "文体の確認",
        "furigana": "ぶんたいのかくにん",
        "romaji": "buntai no kakunin",
        "english": "Build 'Confirming Literary style'",
        "audioText": "ぶんたいのかくにん",
        "tileBank": [
          "い",
          "ぶ",
          "に",
          "ん",
          "く",
          "の",
          "た",
          "か"
        ],
        "correctAnswer": "ぶんたいのかくにん"
      },
      {
        "id": "u28_l11_1",
        "type": "listen",
        "prompt": "随筆の確認",
        "furigana": "ずいひつのかくにん",
        "romaji": "zuihitsu no kakunin",
        "english": "Confirming Personal essay / literary miscellany",
        "audioText": "ずいひつのかくにん",
        "options": [
          "Confirming Melancholy / sorrowful charm",
          "Confirming Metaphor / simile",
          "Confirming Depiction / vivid description",
          "Confirming Personal essay / literary miscellany"
        ],
        "correctAnswer": "Confirming Personal essay / literary miscellany"
      },
      {
        "id": "u28_l11_2",
        "type": "spell",
        "prompt": "随筆の確認",
        "furigana": "ずいひつのかくにん",
        "romaji": "zuihitsu no kakunin",
        "english": "Build 'Confirming Personal essay / literary miscellany'",
        "audioText": "ずいひつのかくにん",
        "tileBank": [
          "の",
          "い",
          "く",
          "に",
          "ず",
          "つ",
          "か",
          "ひ"
        ],
        "correctAnswer": "ずいひつのかくにん"
      }
    ]
  }
};
