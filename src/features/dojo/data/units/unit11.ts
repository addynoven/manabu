import type { DojoUnit } from "../../models/dojo.model";

export const unit11: DojoUnit = {
  "id": "unit_11",
  "unitNumber": 11,
  "title": "Hobbies & Expressing Abilities",
  "titleJp": "趣味とできること",
  "description": "Express what you can and cannot do, share personal pastimes, and discuss past experiences.",
  "icon": "🎸",
  "themeColor": "#6366F1",
  "summaryPoints": [
    "重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
    "日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
    "聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
    "JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
    "7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)"
  ],
  "lessons": [
    {
      "id": "u11_l1",
      "unitId": "unit_11",
      "lessonNumber": 1,
      "dayNumber": 1,
      "category": "Expression",
      "sectionTitle": "Core Expressions (Part 1)",
      "iconType": "expression",
      "title": "Hobby & Can speak",
      "titleJp": "趣味・話せる",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "趣味",
        "話せる",
        "泳げる"
      ],
      "kanjiKeywords": [
        "趣",
        "味",
        "話",
        "泳"
      ],
      "items": [
        {
          "id": "u11_l1_1",
          "type": "listen",
          "prompt": "趣味",
          "furigana": "しゅみ",
          "romaji": "shumi",
          "english": "Hobby",
          "audioText": "しゅみ",
          "options": [
            "Reading books",
            "Hobby",
            "Confirming Experience",
            "Cooking"
          ],
          "correctAnswer": "Hobby"
        },
        {
          "id": "u11_l1_2",
          "type": "spell",
          "prompt": "趣味",
          "furigana": "しゅみ",
          "romaji": "shumi",
          "english": "Build 'Hobby'",
          "audioText": "しゅみ",
          "tileBank": [
            "ま",
            "す",
            "ゅ",
            "に",
            "け",
            "み",
            "く",
            "し"
          ],
          "correctAnswer": "しゅみ"
        },
        {
          "id": "u11_l1_3",
          "type": "cloze",
          "prompt": "私は話せるがすきです",
          "furigana": "わたしははなせるがすきです",
          "romaji": "Watashi wa hanaseru ga suki desu.",
          "english": "Fill in the blank with the correct particle for Can speak.",
          "audioText": "話せる",
          "clozeSentence": "これは話せる {{BLANK}} す。",
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
          "id": "u11_l1_4",
          "type": "scramble",
          "prompt": "これは話せるです",
          "furigana": "これははなせるです",
          "romaji": "Kore wa hanaseru desu.",
          "english": "This is Can speak.",
          "audioText": "これは話せるです",
          "scrambleTokens": [
            "これは",
            "それ",
            "です",
            "話せる",
            "ではありません"
          ],
          "scrambleSolution": [
            "これは",
            "話せる",
            "です"
          ],
          "correctAnswer": "これは話せるです"
        },
        {
          "id": "u11_l1_5",
          "type": "speak",
          "prompt": "泳げる",
          "furigana": "およげる",
          "romaji": "oyogeru",
          "english": "Pronounce: Can swim",
          "audioText": "およげる",
          "targetSpeech": "泳げる",
          "options": [
            "Can swim",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "泳げる"
        },
        {
          "id": "u11_l1_6",
          "type": "dictate",
          "prompt": "泳げるをお願いします",
          "furigana": "およげるをおねがいします",
          "romaji": "oyogeru o onegaishimasu.",
          "english": "Can swim, please.",
          "audioText": "泳げるをお願いします",
          "dictateTokens": [
            "です",
            "ありがとう",
            "を",
            "お願いします",
            "泳げる"
          ],
          "dictateSolution": [
            "泳げる",
            "を",
            "お願いします"
          ],
          "correctAnswer": "泳げるをお願いします"
        },
        {
          "id": "u11_l1_7",
          "type": "match",
          "prompt": "趣味・話せる・泳げる・ギター",
          "furigana": "しゅみ・はなせる・およげる・ギター",
          "romaji": "shumi, hanaseru, oyogeru, gitaa",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しゅみ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "趣味",
              "right": "Hobby",
              "furigana": "しゅみ",
              "romaji": "shumi"
            },
            {
              "id": "p_1",
              "left": "話せる",
              "right": "Can speak",
              "furigana": "はなせる",
              "romaji": "hanaseru"
            },
            {
              "id": "p_2",
              "left": "泳げる",
              "right": "Can swim",
              "furigana": "およげる",
              "romaji": "oyogeru"
            },
            {
              "id": "p_3",
              "left": "ギター",
              "right": "Guitar",
              "furigana": "ギター",
              "romaji": "gitaa"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l1_8",
          "type": "dialogue",
          "prompt": "趣味について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "趣味について教えていただけますか？",
          "furigana": "趣味について教えていただけますか？",
          "romaji": "shumi ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hobby?",
          "audioText": "趣味について教えていただけますか？",
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
      "id": "u11_l2",
      "unitId": "unit_11",
      "lessonNumber": 2,
      "dayNumber": 1,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Guitar & Photograph",
      "titleJp": "ギター・写真",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "ギター",
        "写真",
        "登る"
      ],
      "kanjiKeywords": [
        "写",
        "真",
        "登"
      ],
      "items": [
        {
          "id": "u11_l2_1",
          "type": "listen",
          "prompt": "ギター",
          "furigana": "ギター",
          "romaji": "gitaa",
          "english": "Guitar",
          "audioText": "ギター",
          "options": [
            "Confirming Number one / most",
            "Guitar",
            "Strong point / pride in skill",
            "Number one / most"
          ],
          "correctAnswer": "Guitar"
        },
        {
          "id": "u11_l2_2",
          "type": "spell",
          "prompt": "ギター",
          "furigana": "ギター",
          "romaji": "gitaa",
          "english": "Build 'Guitar'",
          "audioText": "ギター",
          "tileBank": [
            "に",
            "ギ",
            "し",
            "ろ",
            "タ",
            "も",
            "ー",
            "ふ"
          ],
          "correctAnswer": "ギター"
        },
        {
          "id": "u11_l2_3",
          "type": "cloze",
          "prompt": "私は写真がすきです",
          "furigana": "わたしはしゃしんがすきです",
          "romaji": "Watashi wa shashin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Photograph.",
          "audioText": "写真",
          "clozeSentence": "これは写真 {{BLANK}} す。",
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
          "id": "u11_l2_4",
          "type": "scramble",
          "prompt": "これは写真です",
          "furigana": "これはしゃしんです",
          "romaji": "Kore wa shashin desu.",
          "english": "This is Photograph.",
          "audioText": "これは写真です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "写真",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "写真",
            "です"
          ],
          "correctAnswer": "これは写真です"
        },
        {
          "id": "u11_l2_5",
          "type": "speak",
          "prompt": "登る",
          "furigana": "のぼる",
          "romaji": "noboru",
          "english": "Pronounce: To climb",
          "audioText": "のぼる",
          "targetSpeech": "登る",
          "options": [
            "To climb",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "登る"
        },
        {
          "id": "u11_l2_6",
          "type": "dictate",
          "prompt": "登るをお願いします",
          "furigana": "のぼるをおねがいします",
          "romaji": "noboru o onegaishimasu.",
          "english": "To climb, please.",
          "audioText": "登るをお願いします",
          "dictateTokens": [
            "登る",
            "です",
            "ありがとう",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "登る",
            "を",
            "お願いします"
          ],
          "correctAnswer": "登るをお願いします"
        },
        {
          "id": "u11_l2_7",
          "type": "match",
          "prompt": "ギター・写真・登る・一番",
          "furigana": "ギター・しゃしん・のぼる・いちばん",
          "romaji": "gitaa, shashin, noboru, ichiban",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ギター",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "ギター",
              "right": "Guitar",
              "furigana": "ギター",
              "romaji": "gitaa"
            },
            {
              "id": "p_1",
              "left": "写真",
              "right": "Photograph",
              "furigana": "しゃしん",
              "romaji": "shashin"
            },
            {
              "id": "p_2",
              "left": "登る",
              "right": "To climb",
              "furigana": "のぼる",
              "romaji": "noboru"
            },
            {
              "id": "p_3",
              "left": "一番",
              "right": "Number one / most",
              "furigana": "いちばん",
              "romaji": "ichiban"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l2_8",
          "type": "dialogue",
          "prompt": "話せるの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "話せるの準備はできていますか？",
          "furigana": "話せるの準備はできていますか？",
          "romaji": "hanaseru no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Can speak ready?",
          "audioText": "話せるの準備はできていますか？",
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
      "id": "u11_l3",
      "unitId": "unit_11",
      "lessonNumber": 3,
      "dayNumber": 1,
      "category": "Practice",
      "sectionTitle": "Sentence Patterns & Fluency",
      "iconType": "practice",
      "title": "Number one / most & Skillful / good at",
      "titleJp": "一番・上手",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "一番",
        "上手",
        "下手"
      ],
      "kanjiKeywords": [
        "一",
        "番",
        "上",
        "手",
        "下",
        "手"
      ],
      "items": [
        {
          "id": "u11_l3_1",
          "type": "listen",
          "prompt": "一番",
          "furigana": "いちばん",
          "romaji": "ichiban",
          "english": "Number one / most",
          "audioText": "いちばん",
          "options": [
            "Number one / most",
            "Confirming Can swim",
            "Experience",
            "Confirming To climb"
          ],
          "correctAnswer": "Number one / most"
        },
        {
          "id": "u11_l3_2",
          "type": "spell",
          "prompt": "一番",
          "furigana": "いちばん",
          "romaji": "ichiban",
          "english": "Build 'Number one / most'",
          "audioText": "いちばん",
          "tileBank": [
            "い",
            "ち",
            "つ",
            "の",
            "ば",
            "く",
            "か",
            "ん"
          ],
          "correctAnswer": "いちばん"
        },
        {
          "id": "u11_l3_3",
          "type": "cloze",
          "prompt": "私は上手がすきです",
          "furigana": "わたしはじょうずがすきです",
          "romaji": "Watashi wa jouzu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Skillful / good at.",
          "audioText": "上手",
          "clozeSentence": "これは上手 {{BLANK}} す。",
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
          "id": "u11_l3_4",
          "type": "scramble",
          "prompt": "これは上手です",
          "furigana": "これはじょうずです",
          "romaji": "Kore wa jouzu desu.",
          "english": "This is Skillful / good at.",
          "audioText": "これは上手です",
          "scrambleTokens": [
            "上手",
            "これは",
            "ではありません",
            "それ",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "上手",
            "です"
          ],
          "correctAnswer": "これは上手です"
        },
        {
          "id": "u11_l3_5",
          "type": "speak",
          "prompt": "下手",
          "furigana": "へた",
          "romaji": "heta",
          "english": "Pronounce: Unskillful / bad at",
          "audioText": "へた",
          "targetSpeech": "下手",
          "options": [
            "Unskillful / bad at",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "下手"
        },
        {
          "id": "u11_l3_6",
          "type": "dictate",
          "prompt": "下手をお願いします",
          "furigana": "へたをおねがいします",
          "romaji": "heta o onegaishimasu.",
          "english": "Unskillful / bad at, please.",
          "audioText": "下手をお願いします",
          "dictateTokens": [
            "ありがとう",
            "です",
            "下手",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "下手",
            "を",
            "お願いします"
          ],
          "correctAnswer": "下手をお願いします"
        },
        {
          "id": "u11_l3_7",
          "type": "match",
          "prompt": "一番・上手・下手・経験",
          "furigana": "いちばん・じょうず・へた・けいけん",
          "romaji": "ichiban, jouzu, heta, keiken",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いちばん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "一番",
              "right": "Number one / most",
              "furigana": "いちばん",
              "romaji": "ichiban"
            },
            {
              "id": "p_1",
              "left": "上手",
              "right": "Skillful / good at",
              "furigana": "じょうず",
              "romaji": "jouzu"
            },
            {
              "id": "p_2",
              "left": "下手",
              "right": "Unskillful / bad at",
              "furigana": "へた",
              "romaji": "heta"
            },
            {
              "id": "p_3",
              "left": "経験",
              "right": "Experience",
              "furigana": "けいけん",
              "romaji": "keiken"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l3_8",
          "type": "dialogue",
          "prompt": "泳げるについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "泳げるについてどう思われますか？",
          "furigana": "泳げるについてどう思われますか？",
          "romaji": "oyogeru ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Can swim?",
          "audioText": "泳げるについてどう思われますか？",
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
      "id": "u11_l4",
      "unitId": "unit_11",
      "lessonNumber": 4,
      "dayNumber": 2,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Experience & Reading books",
      "titleJp": "経験・読書",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "経験",
        "読書",
        "料理"
      ],
      "kanjiKeywords": [
        "経",
        "験",
        "読",
        "書",
        "料",
        "理"
      ],
      "items": [
        {
          "id": "u11_l4_1",
          "type": "listen",
          "prompt": "経験",
          "furigana": "けいけん",
          "romaji": "keiken",
          "english": "Experience",
          "audioText": "けいけん",
          "options": [
            "Reading books",
            "Experience",
            "Confirming Number one / most",
            "Photograph"
          ],
          "correctAnswer": "Experience"
        },
        {
          "id": "u11_l4_2",
          "type": "spell",
          "prompt": "経験",
          "furigana": "けいけん",
          "romaji": "keiken",
          "english": "Build 'Experience'",
          "audioText": "けいけん",
          "tileBank": [
            "き",
            "み",
            "に",
            "ん",
            "ま",
            "け",
            "い",
            "け"
          ],
          "correctAnswer": "けいけん"
        },
        {
          "id": "u11_l4_3",
          "type": "cloze",
          "prompt": "私は読書がすきです",
          "furigana": "わたしはどくしょがすきです",
          "romaji": "Watashi wa dokusho ga suki desu.",
          "english": "Fill in the blank with the correct particle for Reading books.",
          "audioText": "読書",
          "clozeSentence": "これは読書 {{BLANK}} す。",
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
          "id": "u11_l4_4",
          "type": "scramble",
          "prompt": "これは読書です",
          "furigana": "これはどくしょです",
          "romaji": "Kore wa dokusho desu.",
          "english": "This is Reading books.",
          "audioText": "これは読書です",
          "scrambleTokens": [
            "それ",
            "です",
            "これは",
            "ではありません",
            "読書"
          ],
          "scrambleSolution": [
            "これは",
            "読書",
            "です"
          ],
          "correctAnswer": "これは読書です"
        },
        {
          "id": "u11_l4_5",
          "type": "speak",
          "prompt": "料理",
          "furigana": "りょうり",
          "romaji": "ryouri",
          "english": "Pronounce: Cooking",
          "audioText": "りょうり",
          "targetSpeech": "料理",
          "options": [
            "Cooking",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "料理"
        },
        {
          "id": "u11_l4_6",
          "type": "dictate",
          "prompt": "料理をお願いします",
          "furigana": "りょうりをおねがいします",
          "romaji": "ryouri o onegaishimasu.",
          "english": "Cooking, please.",
          "audioText": "料理をお願いします",
          "dictateTokens": [
            "を",
            "ありがとう",
            "お願いします",
            "料理",
            "です"
          ],
          "dictateSolution": [
            "料理",
            "を",
            "お願いします"
          ],
          "correctAnswer": "料理をお願いします"
        },
        {
          "id": "u11_l4_7",
          "type": "match",
          "prompt": "経験・読書・料理・運転",
          "furigana": "けいけん・どくしょ・りょうり・うんてん",
          "romaji": "keiken, dokusho, ryouri, unten",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "けいけん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "経験",
              "right": "Experience",
              "furigana": "けいけん",
              "romaji": "keiken"
            },
            {
              "id": "p_1",
              "left": "読書",
              "right": "Reading books",
              "furigana": "どくしょ",
              "romaji": "dokusho"
            },
            {
              "id": "p_2",
              "left": "料理",
              "right": "Cooking",
              "furigana": "りょうり",
              "romaji": "ryouri"
            },
            {
              "id": "p_3",
              "left": "運転",
              "right": "Driving",
              "furigana": "うんてん",
              "romaji": "unten"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l4_8",
          "type": "dialogue",
          "prompt": "次はギターに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次はギターに進みましょう。",
          "furigana": "次はギターに進みましょう。",
          "romaji": "Tsugi wa gitaa ni susumimashou.",
          "english": "Speaker: Let's proceed to Guitar next.",
          "audioText": "次はギターに進みましょう。",
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
      "id": "u11_l5",
      "unitId": "unit_11",
      "lessonNumber": 5,
      "dayNumber": 2,
      "category": "Expression",
      "sectionTitle": "Situational Dialogues",
      "iconType": "expression",
      "title": "Driving & To play (strings/piano)",
      "titleJp": "運転・弾く",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "運転",
        "弾く",
        "得意"
      ],
      "kanjiKeywords": [
        "運",
        "転",
        "弾",
        "得",
        "意"
      ],
      "items": [
        {
          "id": "u11_l5_1",
          "type": "listen",
          "prompt": "運転",
          "furigana": "うんてん",
          "romaji": "unten",
          "english": "Driving",
          "audioText": "うんてん",
          "options": [
            "Confirming Can swim",
            "Driving",
            "Confirming Photograph",
            "Hobby"
          ],
          "correctAnswer": "Driving"
        },
        {
          "id": "u11_l5_2",
          "type": "spell",
          "prompt": "運転",
          "furigana": "うんてん",
          "romaji": "unten",
          "english": "Build 'Driving'",
          "audioText": "うんてん",
          "tileBank": [
            "つ",
            "て",
            "う",
            "こ",
            "け",
            "れ",
            "ん",
            "ん"
          ],
          "correctAnswer": "うんてん"
        },
        {
          "id": "u11_l5_3",
          "type": "cloze",
          "prompt": "私は弾くがすきです",
          "furigana": "わたしはひくがすきです",
          "romaji": "Watashi wa hiku ga suki desu.",
          "english": "Fill in the blank with the correct particle for To play (strings/piano).",
          "audioText": "弾く",
          "clozeSentence": "これは弾く {{BLANK}} す。",
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
          "id": "u11_l5_4",
          "type": "scramble",
          "prompt": "これは弾くです",
          "furigana": "これはひくです",
          "romaji": "Kore wa hiku desu.",
          "english": "This is To play (strings/piano).",
          "audioText": "これは弾くです",
          "scrambleTokens": [
            "ではありません",
            "弾く",
            "それ",
            "です",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "弾く",
            "です"
          ],
          "correctAnswer": "これは弾くです"
        },
        {
          "id": "u11_l5_5",
          "type": "speak",
          "prompt": "得意",
          "furigana": "とくい",
          "romaji": "tokui",
          "english": "Pronounce: Strong point / pride in skill",
          "audioText": "とくい",
          "targetSpeech": "得意",
          "options": [
            "Strong point / pride in skill",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "得意"
        },
        {
          "id": "u11_l5_6",
          "type": "dictate",
          "prompt": "得意をお願いします",
          "furigana": "とくいをおねがいします",
          "romaji": "tokui o onegaishimasu.",
          "english": "Strong point / pride in skill, please.",
          "audioText": "得意をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "を",
            "得意",
            "ありがとう"
          ],
          "dictateSolution": [
            "得意",
            "を",
            "お願いします"
          ],
          "correctAnswer": "得意をお願いします"
        },
        {
          "id": "u11_l5_7",
          "type": "match",
          "prompt": "運転・弾く・得意・趣味の確認",
          "furigana": "うんてん・ひく・とくい・しゅみのかくにん",
          "romaji": "unten, hiku, tokui, shumi no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "うんてん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "運転",
              "right": "Driving",
              "furigana": "うんてん",
              "romaji": "unten"
            },
            {
              "id": "p_1",
              "left": "弾く",
              "right": "To play (strings/piano)",
              "furigana": "ひく",
              "romaji": "hiku"
            },
            {
              "id": "p_2",
              "left": "得意",
              "right": "Strong point / pride in skill",
              "furigana": "とくい",
              "romaji": "tokui"
            },
            {
              "id": "p_3",
              "left": "趣味の確認",
              "right": "Confirming Hobby",
              "furigana": "しゅみのかくにん",
              "romaji": "shumi no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l5_8",
          "type": "dialogue",
          "prompt": "趣味について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "趣味について教えていただけますか？",
          "furigana": "趣味について教えていただけますか？",
          "romaji": "shumi ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hobby?",
          "audioText": "趣味について教えていただけますか？",
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
      "id": "u11_l6",
      "unitId": "unit_11",
      "lessonNumber": 6,
      "dayNumber": 3,
      "category": "Conversation",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Confirming Hobby & Confirming Can speak",
      "titleJp": "趣味の確認・話せるの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "趣味の確認",
        "話せるの確認",
        "泳げるの確認"
      ],
      "kanjiKeywords": [
        "趣",
        "味",
        "確",
        "認",
        "話",
        "確",
        "認",
        "泳",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u11_l6_1",
          "type": "listen",
          "prompt": "趣味の確認",
          "furigana": "しゅみのかくにん",
          "romaji": "shumi no kakunin",
          "english": "Confirming Hobby",
          "audioText": "しゅみのかくにん",
          "options": [
            "Confirming Unskillful / bad at",
            "Confirming Hobby",
            "Photograph",
            "Confirming Experience"
          ],
          "correctAnswer": "Confirming Hobby"
        },
        {
          "id": "u11_l6_2",
          "type": "spell",
          "prompt": "趣味の確認",
          "furigana": "しゅみのかくにん",
          "romaji": "shumi no kakunin",
          "english": "Build 'Confirming Hobby'",
          "audioText": "しゅみのかくにん",
          "tileBank": [
            "か",
            "く",
            "ん",
            "に",
            "み",
            "し",
            "の",
            "ゅ"
          ],
          "correctAnswer": "しゅみのかくにん"
        },
        {
          "id": "u11_l6_3",
          "type": "cloze",
          "prompt": "私は話せるの確認がすきです",
          "furigana": "わたしははなせるのかくにんがすきです",
          "romaji": "Watashi wa hanaseru no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Can speak.",
          "audioText": "話せるの確認",
          "clozeSentence": "これは話せるの確認 {{BLANK}} す。",
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
          "id": "u11_l6_4",
          "type": "scramble",
          "prompt": "これは話せるの確認です",
          "furigana": "これははなせるのかくにんです",
          "romaji": "Kore wa hanaseru no kakunin desu.",
          "english": "This is Confirming Can speak.",
          "audioText": "これは話せるの確認です",
          "scrambleTokens": [
            "それ",
            "これは",
            "です",
            "ではありません",
            "話せるの確認"
          ],
          "scrambleSolution": [
            "これは",
            "話せるの確認",
            "です"
          ],
          "correctAnswer": "これは話せるの確認です"
        },
        {
          "id": "u11_l6_5",
          "type": "speak",
          "prompt": "泳げるの確認",
          "furigana": "およげるのかくにん",
          "romaji": "oyogeru no kakunin",
          "english": "Pronounce: Confirming Can swim",
          "audioText": "およげるのかくにん",
          "targetSpeech": "泳げるの確認",
          "options": [
            "Confirming Can swim",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "泳げるの確認"
        },
        {
          "id": "u11_l6_6",
          "type": "dictate",
          "prompt": "泳げるの確認をお願いします",
          "furigana": "およげるのかくにんをおねがいします",
          "romaji": "oyogeru no kakunin o onegaishimasu.",
          "english": "Confirming Can swim, please.",
          "audioText": "泳げるの確認をお願いします",
          "dictateTokens": [
            "です",
            "を",
            "泳げるの確認",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "泳げるの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "泳げるの確認をお願いします"
        },
        {
          "id": "u11_l6_7",
          "type": "match",
          "prompt": "趣味の確認・話せるの確認・泳げるの確認・ギターの確認",
          "furigana": "しゅみのかくにん・はなせるのかくにん・およげるのかくにん・ギターのかくにん",
          "romaji": "shumi no kakunin, hanaseru no kakunin, oyogeru no kakunin, gitaa no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しゅみのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "趣味の確認",
              "right": "Confirming Hobby",
              "furigana": "しゅみのかくにん",
              "romaji": "shumi no kakunin"
            },
            {
              "id": "p_1",
              "left": "話せるの確認",
              "right": "Confirming Can speak",
              "furigana": "はなせるのかくにん",
              "romaji": "hanaseru no kakunin"
            },
            {
              "id": "p_2",
              "left": "泳げるの確認",
              "right": "Confirming Can swim",
              "furigana": "およげるのかくにん",
              "romaji": "oyogeru no kakunin"
            },
            {
              "id": "p_3",
              "left": "ギターの確認",
              "right": "Confirming Guitar",
              "furigana": "ギターのかくにん",
              "romaji": "gitaa no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l6_8",
          "type": "dialogue",
          "prompt": "話せるの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "話せるの準備はできていますか？",
          "furigana": "話せるの準備はできていますか？",
          "romaji": "hanaseru no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Can speak ready?",
          "audioText": "話せるの準備はできていますか？",
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
      "id": "u11_l7",
      "unitId": "unit_11",
      "lessonNumber": 7,
      "dayNumber": 3,
      "category": "Practice",
      "sectionTitle": "Grammar & Listening Drill",
      "iconType": "practice",
      "title": "Confirming Guitar & Confirming Photograph",
      "titleJp": "ギターの確認・写真の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "ギターの確認",
        "写真の確認",
        "登るの確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "写",
        "真",
        "確",
        "認",
        "登",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u11_l7_1",
          "type": "listen",
          "prompt": "ギターの確認",
          "furigana": "ギターのかくにん",
          "romaji": "gitaa no kakunin",
          "english": "Confirming Guitar",
          "audioText": "ギターのかくにん",
          "options": [
            "Confirming To climb",
            "Strong point / pride in skill",
            "Confirming Guitar",
            "Cooking"
          ],
          "correctAnswer": "Confirming Guitar"
        },
        {
          "id": "u11_l7_2",
          "type": "spell",
          "prompt": "ギターの確認",
          "furigana": "ギターのかくにん",
          "romaji": "gitaa no kakunin",
          "english": "Build 'Confirming Guitar'",
          "audioText": "ギターのかくにん",
          "tileBank": [
            "か",
            "の",
            "ギ",
            "ー",
            "ん",
            "タ",
            "に",
            "く"
          ],
          "correctAnswer": "ギターのかくにん"
        },
        {
          "id": "u11_l7_3",
          "type": "cloze",
          "prompt": "私は写真の確認がすきです",
          "furigana": "わたしはしゃしんのかくにんがすきです",
          "romaji": "Watashi wa shashin no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Photograph.",
          "audioText": "写真の確認",
          "clozeSentence": "これは写真の確認 {{BLANK}} す。",
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
          "id": "u11_l7_4",
          "type": "scramble",
          "prompt": "これは写真の確認です",
          "furigana": "これはしゃしんのかくにんです",
          "romaji": "Kore wa shashin no kakunin desu.",
          "english": "This is Confirming Photograph.",
          "audioText": "これは写真の確認です",
          "scrambleTokens": [
            "です",
            "ではありません",
            "これは",
            "写真の確認",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "写真の確認",
            "です"
          ],
          "correctAnswer": "これは写真の確認です"
        },
        {
          "id": "u11_l7_5",
          "type": "speak",
          "prompt": "登るの確認",
          "furigana": "のぼるのかくにん",
          "romaji": "noboru no kakunin",
          "english": "Pronounce: Confirming To climb",
          "audioText": "のぼるのかくにん",
          "targetSpeech": "登るの確認",
          "options": [
            "Confirming To climb",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "登るの確認"
        },
        {
          "id": "u11_l7_6",
          "type": "dictate",
          "prompt": "登るの確認をお願いします",
          "furigana": "のぼるのかくにんをおねがいします",
          "romaji": "noboru no kakunin o onegaishimasu.",
          "english": "Confirming To climb, please.",
          "audioText": "登るの確認をお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "登るの確認",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "登るの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "登るの確認をお願いします"
        },
        {
          "id": "u11_l7_7",
          "type": "match",
          "prompt": "ギターの確認・写真の確認・登るの確認・一番の確認",
          "furigana": "ギターのかくにん・しゃしんのかくにん・のぼるのかくにん・いちばんのかくにん",
          "romaji": "gitaa no kakunin, shashin no kakunin, noboru no kakunin, ichiban no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ギターのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "ギターの確認",
              "right": "Confirming Guitar",
              "furigana": "ギターのかくにん",
              "romaji": "gitaa no kakunin"
            },
            {
              "id": "p_1",
              "left": "写真の確認",
              "right": "Confirming Photograph",
              "furigana": "しゃしんのかくにん",
              "romaji": "shashin no kakunin"
            },
            {
              "id": "p_2",
              "left": "登るの確認",
              "right": "Confirming To climb",
              "furigana": "のぼるのかくにん",
              "romaji": "noboru no kakunin"
            },
            {
              "id": "p_3",
              "left": "一番の確認",
              "right": "Confirming Number one / most",
              "furigana": "いちばんのかくにん",
              "romaji": "ichiban no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l7_8",
          "type": "dialogue",
          "prompt": "泳げるについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "泳げるについてどう思われますか？",
          "furigana": "泳げるについてどう思われますか？",
          "romaji": "oyogeru ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Can swim?",
          "audioText": "泳げるについてどう思われますか？",
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
      "id": "u11_l8",
      "unitId": "unit_11",
      "lessonNumber": 8,
      "dayNumber": 4,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Number one / most & Confirming Skillful / good at",
      "titleJp": "一番の確認・上手の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "一番の確認",
        "上手の確認",
        "下手の確認"
      ],
      "kanjiKeywords": [
        "一",
        "番",
        "確",
        "認",
        "上",
        "手",
        "確",
        "認",
        "下",
        "手",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u11_l8_1",
          "type": "listen",
          "prompt": "一番の確認",
          "furigana": "いちばんのかくにん",
          "romaji": "ichiban no kakunin",
          "english": "Confirming Number one / most",
          "audioText": "いちばんのかくにん",
          "options": [
            "Confirming Number one / most",
            "Number one / most",
            "Confirming Cooking",
            "Confirming To climb"
          ],
          "correctAnswer": "Confirming Number one / most"
        },
        {
          "id": "u11_l8_2",
          "type": "spell",
          "prompt": "一番の確認",
          "furigana": "いちばんのかくにん",
          "romaji": "ichiban no kakunin",
          "english": "Build 'Confirming Number one / most'",
          "audioText": "いちばんのかくにん",
          "tileBank": [
            "ん",
            "ち",
            "い",
            "ば",
            "く",
            "に",
            "の",
            "か"
          ],
          "correctAnswer": "いちばんのかくにん"
        },
        {
          "id": "u11_l8_3",
          "type": "cloze",
          "prompt": "私は上手の確認がすきです",
          "furigana": "わたしはじょうずのかくにんがすきです",
          "romaji": "Watashi wa jouzu no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Skillful / good at.",
          "audioText": "上手の確認",
          "clozeSentence": "これは上手の確認 {{BLANK}} す。",
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
          "id": "u11_l8_4",
          "type": "scramble",
          "prompt": "これは上手の確認です",
          "furigana": "これはじょうずのかくにんです",
          "romaji": "Kore wa jouzu no kakunin desu.",
          "english": "This is Confirming Skillful / good at.",
          "audioText": "これは上手の確認です",
          "scrambleTokens": [
            "それ",
            "ではありません",
            "です",
            "これは",
            "上手の確認"
          ],
          "scrambleSolution": [
            "これは",
            "上手の確認",
            "です"
          ],
          "correctAnswer": "これは上手の確認です"
        },
        {
          "id": "u11_l8_5",
          "type": "speak",
          "prompt": "下手の確認",
          "furigana": "へたのかくにん",
          "romaji": "heta no kakunin",
          "english": "Pronounce: Confirming Unskillful / bad at",
          "audioText": "へたのかくにん",
          "targetSpeech": "下手の確認",
          "options": [
            "Confirming Unskillful / bad at",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "下手の確認"
        },
        {
          "id": "u11_l8_6",
          "type": "dictate",
          "prompt": "下手の確認をお願いします",
          "furigana": "へたのかくにんをおねがいします",
          "romaji": "heta no kakunin o onegaishimasu.",
          "english": "Confirming Unskillful / bad at, please.",
          "audioText": "下手の確認をお願いします",
          "dictateTokens": [
            "お願いします",
            "ありがとう",
            "を",
            "です",
            "下手の確認"
          ],
          "dictateSolution": [
            "下手の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "下手の確認をお願いします"
        },
        {
          "id": "u11_l8_7",
          "type": "match",
          "prompt": "一番の確認・上手の確認・下手の確認・経験の確認",
          "furigana": "いちばんのかくにん・じょうずのかくにん・へたのかくにん・けいけんのかくにん",
          "romaji": "ichiban no kakunin, jouzu no kakunin, heta no kakunin, keiken no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いちばんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "一番の確認",
              "right": "Confirming Number one / most",
              "furigana": "いちばんのかくにん",
              "romaji": "ichiban no kakunin"
            },
            {
              "id": "p_1",
              "left": "上手の確認",
              "right": "Confirming Skillful / good at",
              "furigana": "じょうずのかくにん",
              "romaji": "jouzu no kakunin"
            },
            {
              "id": "p_2",
              "left": "下手の確認",
              "right": "Confirming Unskillful / bad at",
              "furigana": "へたのかくにん",
              "romaji": "heta no kakunin"
            },
            {
              "id": "p_3",
              "left": "経験の確認",
              "right": "Confirming Experience",
              "furigana": "けいけんのかくにん",
              "romaji": "keiken no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l8_8",
          "type": "dialogue",
          "prompt": "次はギターに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次はギターに進みましょう。",
          "furigana": "次はギターに進みましょう。",
          "romaji": "Tsugi wa gitaa ni susumimashou.",
          "english": "Speaker: Let's proceed to Guitar next.",
          "audioText": "次はギターに進みましょう。",
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
      "id": "u11_l9",
      "unitId": "unit_11",
      "lessonNumber": 9,
      "dayNumber": 4,
      "category": "Expression",
      "sectionTitle": "Nuance, Pitch & Intonation",
      "iconType": "expression",
      "title": "Confirming Experience & Confirming Reading books",
      "titleJp": "経験の確認・読書の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "経験の確認",
        "読書の確認",
        "料理の確認"
      ],
      "kanjiKeywords": [
        "経",
        "験",
        "確",
        "認",
        "読",
        "書",
        "確",
        "認",
        "料",
        "理",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u11_l9_1",
          "type": "listen",
          "prompt": "経験の確認",
          "furigana": "けいけんのかくにん",
          "romaji": "keiken no kakunin",
          "english": "Confirming Experience",
          "audioText": "けいけんのかくにん",
          "options": [
            "Confirming Can swim",
            "Confirming Unskillful / bad at",
            "Confirming Reading books",
            "Confirming Experience"
          ],
          "correctAnswer": "Confirming Experience"
        },
        {
          "id": "u11_l9_2",
          "type": "spell",
          "prompt": "経験の確認",
          "furigana": "けいけんのかくにん",
          "romaji": "keiken no kakunin",
          "english": "Build 'Confirming Experience'",
          "audioText": "けいけんのかくにん",
          "tileBank": [
            "の",
            "け",
            "く",
            "ん",
            "い",
            "け",
            "に",
            "か"
          ],
          "correctAnswer": "けいけんのかくにん"
        },
        {
          "id": "u11_l9_3",
          "type": "cloze",
          "prompt": "私は読書の確認がすきです",
          "furigana": "わたしはどくしょのかくにんがすきです",
          "romaji": "Watashi wa dokusho no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Reading books.",
          "audioText": "読書の確認",
          "clozeSentence": "これは読書の確認 {{BLANK}} す。",
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
          "id": "u11_l9_4",
          "type": "scramble",
          "prompt": "これは読書の確認です",
          "furigana": "これはどくしょのかくにんです",
          "romaji": "Kore wa dokusho no kakunin desu.",
          "english": "This is Confirming Reading books.",
          "audioText": "これは読書の確認です",
          "scrambleTokens": [
            "です",
            "これは",
            "それ",
            "ではありません",
            "読書の確認"
          ],
          "scrambleSolution": [
            "これは",
            "読書の確認",
            "です"
          ],
          "correctAnswer": "これは読書の確認です"
        },
        {
          "id": "u11_l9_5",
          "type": "speak",
          "prompt": "料理の確認",
          "furigana": "りょうりのかくにん",
          "romaji": "ryouri no kakunin",
          "english": "Pronounce: Confirming Cooking",
          "audioText": "りょうりのかくにん",
          "targetSpeech": "料理の確認",
          "options": [
            "Confirming Cooking",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "料理の確認"
        },
        {
          "id": "u11_l9_6",
          "type": "dictate",
          "prompt": "料理の確認をお願いします",
          "furigana": "りょうりのかくにんをおねがいします",
          "romaji": "ryouri no kakunin o onegaishimasu.",
          "english": "Confirming Cooking, please.",
          "audioText": "料理の確認をお願いします",
          "dictateTokens": [
            "料理の確認",
            "ありがとう",
            "です",
            "お願いします",
            "を"
          ],
          "dictateSolution": [
            "料理の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "料理の確認をお願いします"
        },
        {
          "id": "u11_l9_7",
          "type": "match",
          "prompt": "経験の確認・読書の確認・料理の確認・運転の確認",
          "furigana": "けいけんのかくにん・どくしょのかくにん・りょうりのかくにん・うんてんのかくにん",
          "romaji": "keiken no kakunin, dokusho no kakunin, ryouri no kakunin, unten no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "けいけんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "経験の確認",
              "right": "Confirming Experience",
              "furigana": "けいけんのかくにん",
              "romaji": "keiken no kakunin"
            },
            {
              "id": "p_1",
              "left": "読書の確認",
              "right": "Confirming Reading books",
              "furigana": "どくしょのかくにん",
              "romaji": "dokusho no kakunin"
            },
            {
              "id": "p_2",
              "left": "料理の確認",
              "right": "Confirming Cooking",
              "furigana": "りょうりのかくにん",
              "romaji": "ryouri no kakunin"
            },
            {
              "id": "p_3",
              "left": "運転の確認",
              "right": "Confirming Driving",
              "furigana": "うんてんのかくにん",
              "romaji": "unten no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l9_8",
          "type": "dialogue",
          "prompt": "趣味について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "趣味について教えていただけますか？",
          "furigana": "趣味について教えていただけますか？",
          "romaji": "shumi ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hobby?",
          "audioText": "趣味について教えていただけますか？",
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
      "id": "u11_l10",
      "unitId": "unit_11",
      "lessonNumber": 10,
      "dayNumber": 5,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Confirming Driving & Confirming To play (strings/piano)",
      "titleJp": "運転の確認・弾くの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "運転の確認",
        "弾くの確認",
        "得意の確認"
      ],
      "kanjiKeywords": [
        "運",
        "転",
        "確",
        "認",
        "弾",
        "確",
        "認",
        "得",
        "意",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u11_l10_1",
          "type": "listen",
          "prompt": "運転の確認",
          "furigana": "うんてんのかくにん",
          "romaji": "unten no kakunin",
          "english": "Confirming Driving",
          "audioText": "うんてんのかくにん",
          "options": [
            "Confirming Driving",
            "Experience",
            "Confirming Reading books",
            "Confirming To climb"
          ],
          "correctAnswer": "Confirming Driving"
        },
        {
          "id": "u11_l10_2",
          "type": "spell",
          "prompt": "運転の確認",
          "furigana": "うんてんのかくにん",
          "romaji": "unten no kakunin",
          "english": "Build 'Confirming Driving'",
          "audioText": "うんてんのかくにん",
          "tileBank": [
            "う",
            "て",
            "ん",
            "か",
            "ん",
            "く",
            "に",
            "の"
          ],
          "correctAnswer": "うんてんのかくにん"
        },
        {
          "id": "u11_l10_3",
          "type": "cloze",
          "prompt": "私は弾くの確認がすきです",
          "furigana": "わたしはひくのかくにんがすきです",
          "romaji": "Watashi wa hiku no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming To play (strings/piano).",
          "audioText": "弾くの確認",
          "clozeSentence": "これは弾くの確認 {{BLANK}} す。",
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
          "id": "u11_l10_4",
          "type": "scramble",
          "prompt": "これは弾くの確認です",
          "furigana": "これはひくのかくにんです",
          "romaji": "Kore wa hiku no kakunin desu.",
          "english": "This is Confirming To play (strings/piano).",
          "audioText": "これは弾くの確認です",
          "scrambleTokens": [
            "これは",
            "です",
            "ではありません",
            "弾くの確認",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "弾くの確認",
            "です"
          ],
          "correctAnswer": "これは弾くの確認です"
        },
        {
          "id": "u11_l10_5",
          "type": "speak",
          "prompt": "得意の確認",
          "furigana": "とくいのかくにん",
          "romaji": "tokui no kakunin",
          "english": "Pronounce: Confirming Strong point / pride in skill",
          "audioText": "とくいのかくにん",
          "targetSpeech": "得意の確認",
          "options": [
            "Confirming Strong point / pride in skill",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "得意の確認"
        },
        {
          "id": "u11_l10_6",
          "type": "dictate",
          "prompt": "得意の確認をお願いします",
          "furigana": "とくいのかくにんをおねがいします",
          "romaji": "tokui no kakunin o onegaishimasu.",
          "english": "Confirming Strong point / pride in skill, please.",
          "audioText": "得意の確認をお願いします",
          "dictateTokens": [
            "得意の確認",
            "を",
            "ありがとう",
            "お願いします",
            "です"
          ],
          "dictateSolution": [
            "得意の確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "得意の確認をお願いします"
        },
        {
          "id": "u11_l10_7",
          "type": "match",
          "prompt": "運転の確認・弾くの確認・得意の確認・趣味の確認",
          "furigana": "うんてんのかくにん・ひくのかくにん・とくいのかくにん・しゅみのかくにん",
          "romaji": "unten no kakunin, hiku no kakunin, tokui no kakunin, shumi no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "うんてんのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "運転の確認",
              "right": "Confirming Driving",
              "furigana": "うんてんのかくにん",
              "romaji": "unten no kakunin"
            },
            {
              "id": "p_1",
              "left": "弾くの確認",
              "right": "Confirming To play (strings/piano)",
              "furigana": "ひくのかくにん",
              "romaji": "hiku no kakunin"
            },
            {
              "id": "p_2",
              "left": "得意の確認",
              "right": "Confirming Strong point / pride in skill",
              "furigana": "とくいのかくにん",
              "romaji": "tokui no kakunin"
            },
            {
              "id": "p_3",
              "left": "趣味の確認",
              "right": "Confirming Hobby",
              "furigana": "しゅみのかくにん",
              "romaji": "shumi no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l10_8",
          "type": "dialogue",
          "prompt": "話せるの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "話せるの準備はできていますか？",
          "furigana": "話せるの準備はできていますか？",
          "romaji": "hanaseru no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Can speak ready?",
          "audioText": "話せるの準備はできていますか？",
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
      "id": "u11_l11",
      "unitId": "unit_11",
      "lessonNumber": 11,
      "dayNumber": 5,
      "category": "Practice",
      "sectionTitle": "Speed Assembly & Fluency",
      "iconType": "practice",
      "title": "Confirming Hobby & Confirming Can speak",
      "titleJp": "趣味の確認・話せるの確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "趣味の確認",
        "話せるの確認",
        "泳げるの確認"
      ],
      "kanjiKeywords": [
        "趣",
        "味",
        "確",
        "認",
        "話",
        "確",
        "認",
        "泳",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u11_l11_1",
          "type": "listen",
          "prompt": "趣味の確認",
          "furigana": "しゅみのかくにん",
          "romaji": "shumi no kakunin",
          "english": "Confirming Hobby",
          "audioText": "しゅみのかくにん",
          "options": [
            "Confirming Unskillful / bad at",
            "Confirming Hobby",
            "Confirming To play (strings/piano)",
            "Can swim"
          ],
          "correctAnswer": "Confirming Hobby"
        },
        {
          "id": "u11_l11_2",
          "type": "spell",
          "prompt": "趣味の確認",
          "furigana": "しゅみのかくにん",
          "romaji": "shumi no kakunin",
          "english": "Build 'Confirming Hobby'",
          "audioText": "しゅみのかくにん",
          "tileBank": [
            "ん",
            "く",
            "ゅ",
            "し",
            "の",
            "か",
            "に",
            "み"
          ],
          "correctAnswer": "しゅみのかくにん"
        },
        {
          "id": "u11_l11_3",
          "type": "cloze",
          "prompt": "私は話せるの確認がすきです",
          "furigana": "わたしははなせるのかくにんがすきです",
          "romaji": "Watashi wa hanaseru no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Can speak.",
          "audioText": "話せるの確認",
          "clozeSentence": "これは話せるの確認 {{BLANK}} す。",
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
          "id": "u11_l11_4",
          "type": "scramble",
          "prompt": "これは話せるの確認です",
          "furigana": "これははなせるのかくにんです",
          "romaji": "Kore wa hanaseru no kakunin desu.",
          "english": "This is Confirming Can speak.",
          "audioText": "これは話せるの確認です",
          "scrambleTokens": [
            "話せるの確認",
            "ではありません",
            "それ",
            "これは",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "話せるの確認",
            "です"
          ],
          "correctAnswer": "これは話せるの確認です"
        },
        {
          "id": "u11_l11_5",
          "type": "speak",
          "prompt": "泳げるの確認",
          "furigana": "およげるのかくにん",
          "romaji": "oyogeru no kakunin",
          "english": "Pronounce: Confirming Can swim",
          "audioText": "およげるのかくにん",
          "targetSpeech": "泳げるの確認",
          "options": [
            "Confirming Can swim",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "泳げるの確認"
        },
        {
          "id": "u11_l11_6",
          "type": "dictate",
          "prompt": "泳げるの確認をお願いします",
          "furigana": "およげるのかくにんをおねがいします",
          "romaji": "oyogeru no kakunin o onegaishimasu.",
          "english": "Confirming Can swim, please.",
          "audioText": "泳げるの確認をお願いします",
          "dictateTokens": [
            "です",
            "泳げるの確認",
            "ありがとう",
            "を",
            "お願いします"
          ],
          "dictateSolution": [
            "泳げるの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "泳げるの確認をお願いします"
        },
        {
          "id": "u11_l11_7",
          "type": "match",
          "prompt": "趣味の確認・話せるの確認・泳げるの確認・ギターの確認",
          "furigana": "しゅみのかくにん・はなせるのかくにん・およげるのかくにん・ギターのかくにん",
          "romaji": "shumi no kakunin, hanaseru no kakunin, oyogeru no kakunin, gitaa no kakunin",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しゅみのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "趣味の確認",
              "right": "Confirming Hobby",
              "furigana": "しゅみのかくにん",
              "romaji": "shumi no kakunin"
            },
            {
              "id": "p_1",
              "left": "話せるの確認",
              "right": "Confirming Can speak",
              "furigana": "はなせるのかくにん",
              "romaji": "hanaseru no kakunin"
            },
            {
              "id": "p_2",
              "left": "泳げるの確認",
              "right": "Confirming Can swim",
              "furigana": "およげるのかくにん",
              "romaji": "oyogeru no kakunin"
            },
            {
              "id": "p_3",
              "left": "ギターの確認",
              "right": "Confirming Guitar",
              "furigana": "ギターのかくにん",
              "romaji": "gitaa no kakunin"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l11_8",
          "type": "dialogue",
          "prompt": "泳げるについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "泳げるについてどう思われますか？",
          "furigana": "泳げるについてどう思われますか？",
          "romaji": "oyogeru ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Can swim?",
          "audioText": "泳げるについてどう思われますか？",
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
      "id": "u11_l12",
      "unitId": "unit_11",
      "lessonNumber": 12,
      "dayNumber": 6,
      "category": "Vocabulary",
      "sectionTitle": null,
      "iconType": "vocabulary",
      "title": "Confirming Guitar & Confirming Photograph",
      "titleJp": "ギターの確認・写真の確認",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "ギターの確認",
        "写真の確認",
        "登るの確認"
      ],
      "kanjiKeywords": [
        "確",
        "認",
        "写",
        "真",
        "確",
        "認",
        "登",
        "確",
        "認"
      ],
      "items": [
        {
          "id": "u11_l12_1",
          "type": "listen",
          "prompt": "ギターの確認",
          "furigana": "ギターのかくにん",
          "romaji": "gitaa no kakunin",
          "english": "Confirming Guitar",
          "audioText": "ギターのかくにん",
          "options": [
            "Confirming Guitar",
            "Photograph",
            "Confirming Driving",
            "Skillful / good at"
          ],
          "correctAnswer": "Confirming Guitar"
        },
        {
          "id": "u11_l12_2",
          "type": "spell",
          "prompt": "ギターの確認",
          "furigana": "ギターのかくにん",
          "romaji": "gitaa no kakunin",
          "english": "Build 'Confirming Guitar'",
          "audioText": "ギターのかくにん",
          "tileBank": [
            "タ",
            "ギ",
            "ー",
            "に",
            "ん",
            "く",
            "の",
            "か"
          ],
          "correctAnswer": "ギターのかくにん"
        },
        {
          "id": "u11_l12_3",
          "type": "cloze",
          "prompt": "私は写真の確認がすきです",
          "furigana": "わたしはしゃしんのかくにんがすきです",
          "romaji": "Watashi wa shashin no kakunin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Confirming Photograph.",
          "audioText": "写真の確認",
          "clozeSentence": "これは写真の確認 {{BLANK}} す。",
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
          "id": "u11_l12_4",
          "type": "scramble",
          "prompt": "これは写真の確認です",
          "furigana": "これはしゃしんのかくにんです",
          "romaji": "Kore wa shashin no kakunin desu.",
          "english": "This is Confirming Photograph.",
          "audioText": "これは写真の確認です",
          "scrambleTokens": [
            "写真の確認",
            "これは",
            "それ",
            "ではありません",
            "です"
          ],
          "scrambleSolution": [
            "これは",
            "写真の確認",
            "です"
          ],
          "correctAnswer": "これは写真の確認です"
        },
        {
          "id": "u11_l12_5",
          "type": "speak",
          "prompt": "登るの確認",
          "furigana": "のぼるのかくにん",
          "romaji": "noboru no kakunin",
          "english": "Pronounce: Confirming To climb",
          "audioText": "のぼるのかくにん",
          "targetSpeech": "登るの確認",
          "options": [
            "Confirming To climb",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "登るの確認"
        },
        {
          "id": "u11_l12_6",
          "type": "dictate",
          "prompt": "登るの確認をお願いします",
          "furigana": "のぼるのかくにんをおねがいします",
          "romaji": "noboru no kakunin o onegaishimasu.",
          "english": "Confirming To climb, please.",
          "audioText": "登るの確認をお願いします",
          "dictateTokens": [
            "を",
            "登るの確認",
            "です",
            "ありがとう",
            "お願いします"
          ],
          "dictateSolution": [
            "登るの確認",
            "を",
            "お願いします"
          ],
          "correctAnswer": "登るの確認をお願いします"
        },
        {
          "id": "u11_l12_7",
          "type": "match",
          "prompt": "ギターの確認・写真の確認・登るの確認・趣味",
          "furigana": "ギターのかくにん・しゃしんのかくにん・のぼるのかくにん・しゅみ",
          "romaji": "gitaa no kakunin, shashin no kakunin, noboru no kakunin, shumi",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ギターのかくにん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "ギターの確認",
              "right": "Confirming Guitar",
              "furigana": "ギターのかくにん",
              "romaji": "gitaa no kakunin"
            },
            {
              "id": "p_1",
              "left": "写真の確認",
              "right": "Confirming Photograph",
              "furigana": "しゃしんのかくにん",
              "romaji": "shashin no kakunin"
            },
            {
              "id": "p_2",
              "left": "登るの確認",
              "right": "Confirming To climb",
              "furigana": "のぼるのかくにん",
              "romaji": "noboru no kakunin"
            },
            {
              "id": "p_3",
              "left": "趣味",
              "right": "Hobby",
              "furigana": "しゅみ",
              "romaji": "shumi"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l12_8",
          "type": "dialogue",
          "prompt": "次はギターに進みましょう。",
          "dialogueSpeaker": "話者D",
          "dialoguePrompt": "次はギターに進みましょう。",
          "furigana": "次はギターに進みましょう。",
          "romaji": "Tsugi wa gitaa ni susumimashou.",
          "english": "Speaker: Let's proceed to Guitar next.",
          "audioText": "次はギターに進みましょう。",
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
      "id": "u11_l13",
      "unitId": "unit_11",
      "lessonNumber": 13,
      "dayNumber": 6,
      "category": "Expression",
      "sectionTitle": null,
      "iconType": "expression",
      "title": "Hobby & Can speak",
      "titleJp": "趣味・話せる",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "趣味",
        "話せる",
        "泳げる"
      ],
      "kanjiKeywords": [
        "趣",
        "味",
        "話",
        "泳"
      ],
      "items": [
        {
          "id": "u11_l13_1",
          "type": "listen",
          "prompt": "趣味",
          "furigana": "しゅみ",
          "romaji": "shumi",
          "english": "Hobby",
          "audioText": "しゅみ",
          "options": [
            "To play (strings/piano)",
            "Hobby",
            "Confirming Photograph",
            "Number one / most"
          ],
          "correctAnswer": "Hobby"
        },
        {
          "id": "u11_l13_2",
          "type": "spell",
          "prompt": "趣味",
          "furigana": "しゅみ",
          "romaji": "shumi",
          "english": "Build 'Hobby'",
          "audioText": "しゅみ",
          "tileBank": [
            "て",
            "り",
            "ゅ",
            "し",
            "ひ",
            "よ",
            "は",
            "み"
          ],
          "correctAnswer": "しゅみ"
        },
        {
          "id": "u11_l13_3",
          "type": "cloze",
          "prompt": "私は話せるがすきです",
          "furigana": "わたしははなせるがすきです",
          "romaji": "Watashi wa hanaseru ga suki desu.",
          "english": "Fill in the blank with the correct particle for Can speak.",
          "audioText": "話せる",
          "clozeSentence": "これは話せる {{BLANK}} す。",
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
          "id": "u11_l13_4",
          "type": "scramble",
          "prompt": "これは話せるです",
          "furigana": "これははなせるです",
          "romaji": "Kore wa hanaseru desu.",
          "english": "This is Can speak.",
          "audioText": "これは話せるです",
          "scrambleTokens": [
            "話せる",
            "です",
            "ではありません",
            "それ",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "話せる",
            "です"
          ],
          "correctAnswer": "これは話せるです"
        },
        {
          "id": "u11_l13_5",
          "type": "speak",
          "prompt": "泳げる",
          "furigana": "およげる",
          "romaji": "oyogeru",
          "english": "Pronounce: Can swim",
          "audioText": "およげる",
          "targetSpeech": "泳げる",
          "options": [
            "Can swim",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "泳げる"
        },
        {
          "id": "u11_l13_6",
          "type": "dictate",
          "prompt": "泳げるをお願いします",
          "furigana": "およげるをおねがいします",
          "romaji": "oyogeru o onegaishimasu.",
          "english": "Can swim, please.",
          "audioText": "泳げるをお願いします",
          "dictateTokens": [
            "ありがとう",
            "を",
            "泳げる",
            "です",
            "お願いします"
          ],
          "dictateSolution": [
            "泳げる",
            "を",
            "お願いします"
          ],
          "correctAnswer": "泳げるをお願いします"
        },
        {
          "id": "u11_l13_7",
          "type": "match",
          "prompt": "趣味・話せる・泳げる・ギター",
          "furigana": "しゅみ・はなせる・およげる・ギター",
          "romaji": "shumi, hanaseru, oyogeru, gitaa",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "しゅみ",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "趣味",
              "right": "Hobby",
              "furigana": "しゅみ",
              "romaji": "shumi"
            },
            {
              "id": "p_1",
              "left": "話せる",
              "right": "Can speak",
              "furigana": "はなせる",
              "romaji": "hanaseru"
            },
            {
              "id": "p_2",
              "left": "泳げる",
              "right": "Can swim",
              "furigana": "およげる",
              "romaji": "oyogeru"
            },
            {
              "id": "p_3",
              "left": "ギター",
              "right": "Guitar",
              "furigana": "ギター",
              "romaji": "gitaa"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l13_8",
          "type": "dialogue",
          "prompt": "趣味について教えていただけますか？",
          "dialogueSpeaker": "話者A",
          "dialoguePrompt": "趣味について教えていただけますか？",
          "furigana": "趣味について教えていただけますか？",
          "romaji": "shumi ni tsuite oshiete itadakemasu ka?",
          "english": "Speaker: Could you tell me about Hobby?",
          "audioText": "趣味について教えていただけますか？",
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
      "id": "u11_l14",
      "unitId": "unit_11",
      "lessonNumber": 14,
      "dayNumber": 6,
      "category": "Review Quiz",
      "sectionTitle": null,
      "iconType": "quiz",
      "title": "Guitar & Photograph",
      "titleJp": "ギター・写真",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "ギター",
        "写真",
        "登る"
      ],
      "kanjiKeywords": [
        "写",
        "真",
        "登"
      ],
      "items": [
        {
          "id": "u11_l14_1",
          "type": "listen",
          "prompt": "ギター",
          "furigana": "ギター",
          "romaji": "gitaa",
          "english": "Guitar",
          "audioText": "ギター",
          "options": [
            "Confirming Photograph",
            "Guitar",
            "Confirming Number one / most",
            "Confirming Guitar"
          ],
          "correctAnswer": "Guitar"
        },
        {
          "id": "u11_l14_2",
          "type": "spell",
          "prompt": "ギター",
          "furigana": "ギター",
          "romaji": "gitaa",
          "english": "Build 'Guitar'",
          "audioText": "ギター",
          "tileBank": [
            "ー",
            "て",
            "タ",
            "む",
            "ギ",
            "は",
            "ほ",
            "み"
          ],
          "correctAnswer": "ギター"
        },
        {
          "id": "u11_l14_3",
          "type": "cloze",
          "prompt": "私は写真がすきです",
          "furigana": "わたしはしゃしんがすきです",
          "romaji": "Watashi wa shashin ga suki desu.",
          "english": "Fill in the blank with the correct particle for Photograph.",
          "audioText": "写真",
          "clozeSentence": "これは写真 {{BLANK}} す。",
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
          "id": "u11_l14_4",
          "type": "scramble",
          "prompt": "これは写真です",
          "furigana": "これはしゃしんです",
          "romaji": "Kore wa shashin desu.",
          "english": "This is Photograph.",
          "audioText": "これは写真です",
          "scrambleTokens": [
            "写真",
            "これは",
            "です",
            "ではありません",
            "それ"
          ],
          "scrambleSolution": [
            "これは",
            "写真",
            "です"
          ],
          "correctAnswer": "これは写真です"
        },
        {
          "id": "u11_l14_5",
          "type": "speak",
          "prompt": "登る",
          "furigana": "のぼる",
          "romaji": "noboru",
          "english": "Pronounce: To climb",
          "audioText": "のぼる",
          "targetSpeech": "登る",
          "options": [
            "To climb",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "登る"
        },
        {
          "id": "u11_l14_6",
          "type": "dictate",
          "prompt": "登るをお願いします",
          "furigana": "のぼるをおねがいします",
          "romaji": "noboru o onegaishimasu.",
          "english": "To climb, please.",
          "audioText": "登るをお願いします",
          "dictateTokens": [
            "登る",
            "を",
            "お願いします",
            "ありがとう",
            "です"
          ],
          "dictateSolution": [
            "登る",
            "を",
            "お願いします"
          ],
          "correctAnswer": "登るをお願いします"
        },
        {
          "id": "u11_l14_7",
          "type": "match",
          "prompt": "ギター・写真・登る・一番",
          "furigana": "ギター・しゃしん・のぼる・いちばん",
          "romaji": "gitaa, shashin, noboru, ichiban",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "ギター",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "ギター",
              "right": "Guitar",
              "furigana": "ギター",
              "romaji": "gitaa"
            },
            {
              "id": "p_1",
              "left": "写真",
              "right": "Photograph",
              "furigana": "しゃしん",
              "romaji": "shashin"
            },
            {
              "id": "p_2",
              "left": "登る",
              "right": "To climb",
              "furigana": "のぼる",
              "romaji": "noboru"
            },
            {
              "id": "p_3",
              "left": "一番",
              "right": "Number one / most",
              "furigana": "いちばん",
              "romaji": "ichiban"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l14_8",
          "type": "dialogue",
          "prompt": "話せるの準備はできていますか？",
          "dialogueSpeaker": "話者B",
          "dialoguePrompt": "話せるの準備はできていますか？",
          "furigana": "話せるの準備はできていますか？",
          "romaji": "hanaseru no junbi wa dekite imasu ka?",
          "english": "Speaker: Is the preparation for Can speak ready?",
          "audioText": "話せるの準備はできていますか？",
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
      "id": "u11_l15",
      "unitId": "unit_11",
      "lessonNumber": 15,
      "dayNumber": 7,
      "category": "Unit Test",
      "sectionTitle": "Unit 11 Master Exam",
      "iconType": "test",
      "title": "Unit 11 Master Exam",
      "titleJp": "第11週 総合試験",
      "summary": "Practice 3 essential terms and real dialogue context.",
      "vocabKeywords": [
        "一番",
        "上手",
        "下手"
      ],
      "kanjiKeywords": [
        "一",
        "番",
        "上",
        "手",
        "下",
        "手"
      ],
      "items": [
        {
          "id": "u11_l15_1",
          "type": "listen",
          "prompt": "一番",
          "furigana": "いちばん",
          "romaji": "ichiban",
          "english": "Number one / most",
          "audioText": "いちばん",
          "options": [
            "Confirming Guitar",
            "Strong point / pride in skill",
            "Can speak",
            "Number one / most"
          ],
          "correctAnswer": "Number one / most"
        },
        {
          "id": "u11_l15_2",
          "type": "spell",
          "prompt": "一番",
          "furigana": "いちばん",
          "romaji": "ichiban",
          "english": "Build 'Number one / most'",
          "audioText": "いちばん",
          "tileBank": [
            "い",
            "ば",
            "ん",
            "ひ",
            "め",
            "に",
            "も",
            "ち"
          ],
          "correctAnswer": "いちばん"
        },
        {
          "id": "u11_l15_3",
          "type": "cloze",
          "prompt": "私は上手がすきです",
          "furigana": "わたしはじょうずがすきです",
          "romaji": "Watashi wa jouzu ga suki desu.",
          "english": "Fill in the blank with the correct particle for Skillful / good at.",
          "audioText": "上手",
          "clozeSentence": "これは上手 {{BLANK}} す。",
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
          "id": "u11_l15_4",
          "type": "scramble",
          "prompt": "これは上手です",
          "furigana": "これはじょうずです",
          "romaji": "Kore wa jouzu desu.",
          "english": "This is Skillful / good at.",
          "audioText": "これは上手です",
          "scrambleTokens": [
            "上手",
            "ではありません",
            "それ",
            "です",
            "これは"
          ],
          "scrambleSolution": [
            "これは",
            "上手",
            "です"
          ],
          "correctAnswer": "これは上手です"
        },
        {
          "id": "u11_l15_5",
          "type": "speak",
          "prompt": "下手",
          "furigana": "へた",
          "romaji": "heta",
          "english": "Pronounce: Unskillful / bad at",
          "audioText": "へた",
          "targetSpeech": "下手",
          "options": [
            "Unskillful / bad at",
            "Incorrect pronunciation",
            "Different meaning",
            "Antonym phrase"
          ],
          "correctAnswer": "下手"
        },
        {
          "id": "u11_l15_6",
          "type": "dictate",
          "prompt": "下手をお願いします",
          "furigana": "へたをおねがいします",
          "romaji": "heta o onegaishimasu.",
          "english": "Unskillful / bad at, please.",
          "audioText": "下手をお願いします",
          "dictateTokens": [
            "です",
            "お願いします",
            "下手",
            "ありがとう",
            "を"
          ],
          "dictateSolution": [
            "下手",
            "を",
            "お願いします"
          ],
          "correctAnswer": "下手をお願いします"
        },
        {
          "id": "u11_l15_7",
          "type": "match",
          "prompt": "一番・上手・下手・経験",
          "furigana": "いちばん・じょうず・へた・けいけん",
          "romaji": "ichiban, jouzu, heta, keiken",
          "english": "Match each Japanese word to its English meaning.",
          "audioText": "いちばん",
          "matchPairs": [
            {
              "id": "p_0",
              "left": "一番",
              "right": "Number one / most",
              "furigana": "いちばん",
              "romaji": "ichiban"
            },
            {
              "id": "p_1",
              "left": "上手",
              "right": "Skillful / good at",
              "furigana": "じょうず",
              "romaji": "jouzu"
            },
            {
              "id": "p_2",
              "left": "下手",
              "right": "Unskillful / bad at",
              "furigana": "へた",
              "romaji": "heta"
            },
            {
              "id": "p_3",
              "left": "経験",
              "right": "Experience",
              "furigana": "けいけん",
              "romaji": "keiken"
            }
          ],
          "correctAnswer": "all"
        },
        {
          "id": "u11_l15_8",
          "type": "dialogue",
          "prompt": "泳げるについてどう思われますか？",
          "dialogueSpeaker": "話者C",
          "dialoguePrompt": "泳げるについてどう思われますか？",
          "furigana": "泳げるについてどう思われますか？",
          "romaji": "oyogeru ni tsuite dou omowaremasu ka?",
          "english": "Speaker: What are your thoughts on Can swim?",
          "audioText": "泳げるについてどう思われますか？",
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
    "id": "gate_unit_11",
    "unitId": "unit_11",
    "title": "Unit 11 Mastery Checkpoint",
    "titleJp": "第11週 総復習テスト",
    "requiredScorePercent": 80,
    "items": [
      {
        "id": "u11_l1_1",
        "type": "listen",
        "prompt": "趣味",
        "furigana": "しゅみ",
        "romaji": "shumi",
        "english": "Hobby",
        "audioText": "しゅみ",
        "options": [
          "Reading books",
          "Hobby",
          "Confirming Experience",
          "Cooking"
        ],
        "correctAnswer": "Hobby"
      },
      {
        "id": "u11_l1_2",
        "type": "spell",
        "prompt": "趣味",
        "furigana": "しゅみ",
        "romaji": "shumi",
        "english": "Build 'Hobby'",
        "audioText": "しゅみ",
        "tileBank": [
          "ま",
          "す",
          "ゅ",
          "に",
          "け",
          "み",
          "く",
          "し"
        ],
        "correctAnswer": "しゅみ"
      },
      {
        "id": "u11_l3_1",
        "type": "listen",
        "prompt": "一番",
        "furigana": "いちばん",
        "romaji": "ichiban",
        "english": "Number one / most",
        "audioText": "いちばん",
        "options": [
          "Number one / most",
          "Confirming Can swim",
          "Experience",
          "Confirming To climb"
        ],
        "correctAnswer": "Number one / most"
      },
      {
        "id": "u11_l3_2",
        "type": "spell",
        "prompt": "一番",
        "furigana": "いちばん",
        "romaji": "ichiban",
        "english": "Build 'Number one / most'",
        "audioText": "いちばん",
        "tileBank": [
          "い",
          "ち",
          "つ",
          "の",
          "ば",
          "く",
          "か",
          "ん"
        ],
        "correctAnswer": "いちばん"
      },
      {
        "id": "u11_l5_1",
        "type": "listen",
        "prompt": "運転",
        "furigana": "うんてん",
        "romaji": "unten",
        "english": "Driving",
        "audioText": "うんてん",
        "options": [
          "Confirming Can swim",
          "Driving",
          "Confirming Photograph",
          "Hobby"
        ],
        "correctAnswer": "Driving"
      },
      {
        "id": "u11_l5_2",
        "type": "spell",
        "prompt": "運転",
        "furigana": "うんてん",
        "romaji": "unten",
        "english": "Build 'Driving'",
        "audioText": "うんてん",
        "tileBank": [
          "つ",
          "て",
          "う",
          "こ",
          "け",
          "れ",
          "ん",
          "ん"
        ],
        "correctAnswer": "うんてん"
      },
      {
        "id": "u11_l7_1",
        "type": "listen",
        "prompt": "ギターの確認",
        "furigana": "ギターのかくにん",
        "romaji": "gitaa no kakunin",
        "english": "Confirming Guitar",
        "audioText": "ギターのかくにん",
        "options": [
          "Confirming To climb",
          "Strong point / pride in skill",
          "Confirming Guitar",
          "Cooking"
        ],
        "correctAnswer": "Confirming Guitar"
      },
      {
        "id": "u11_l7_2",
        "type": "spell",
        "prompt": "ギターの確認",
        "furigana": "ギターのかくにん",
        "romaji": "gitaa no kakunin",
        "english": "Build 'Confirming Guitar'",
        "audioText": "ギターのかくにん",
        "tileBank": [
          "か",
          "の",
          "ギ",
          "ー",
          "ん",
          "タ",
          "に",
          "く"
        ],
        "correctAnswer": "ギターのかくにん"
      },
      {
        "id": "u11_l9_1",
        "type": "listen",
        "prompt": "経験の確認",
        "furigana": "けいけんのかくにん",
        "romaji": "keiken no kakunin",
        "english": "Confirming Experience",
        "audioText": "けいけんのかくにん",
        "options": [
          "Confirming Can swim",
          "Confirming Unskillful / bad at",
          "Confirming Reading books",
          "Confirming Experience"
        ],
        "correctAnswer": "Confirming Experience"
      },
      {
        "id": "u11_l9_2",
        "type": "spell",
        "prompt": "経験の確認",
        "furigana": "けいけんのかくにん",
        "romaji": "keiken no kakunin",
        "english": "Build 'Confirming Experience'",
        "audioText": "けいけんのかくにん",
        "tileBank": [
          "の",
          "け",
          "く",
          "ん",
          "い",
          "け",
          "に",
          "か"
        ],
        "correctAnswer": "けいけんのかくにん"
      },
      {
        "id": "u11_l11_1",
        "type": "listen",
        "prompt": "趣味の確認",
        "furigana": "しゅみのかくにん",
        "romaji": "shumi no kakunin",
        "english": "Confirming Hobby",
        "audioText": "しゅみのかくにん",
        "options": [
          "Confirming Unskillful / bad at",
          "Confirming Hobby",
          "Confirming To play (strings/piano)",
          "Can swim"
        ],
        "correctAnswer": "Confirming Hobby"
      },
      {
        "id": "u11_l11_2",
        "type": "spell",
        "prompt": "趣味の確認",
        "furigana": "しゅみのかくにん",
        "romaji": "shumi no kakunin",
        "english": "Build 'Confirming Hobby'",
        "audioText": "しゅみのかくにん",
        "tileBank": [
          "ん",
          "く",
          "ゅ",
          "し",
          "の",
          "か",
          "に",
          "み"
        ],
        "correctAnswer": "しゅみのかくにん"
      }
    ]
  }
};
