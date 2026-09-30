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
            "Skillful / good at",
            "Confirming Reading books",
            "Confirming To climb",
            "Hobby"
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
            "し",
            "も",
            "る",
            "な",
            "み",
            "め",
            "ゅ",
            "け"
          ],
          "correctAnswer": "しゅみ"
        },
        {
          "id": "u11_l1_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な話せるです。",
          "furigana": "これはいちばんたいせつなはなせるです。",
          "romaji": "Kore wa ichiban taisetsu na hanaseru desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Can speak.",
          "audioText": "これは話せるです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な話せるです。",
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
          "id": "u11_l1_4",
          "type": "scramble",
          "prompt": "これは話せるです",
          "furigana": "これははなせるです",
          "romaji": "Kore wa hanaseru desu.",
          "english": "This is Can speak.",
          "audioText": "これは話せるです",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "です",
            "話せる",
            "それ"
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
          "prompt": "泳げるです",
          "furigana": "およげるです",
          "romaji": "oyogeru desu.",
          "english": "It is Can swim.",
          "audioText": "泳げるです",
          "dictateTokens": [
            "これ",
            "です",
            "泳げる",
            "ではありません"
          ],
          "dictateSolution": [
            "泳げる",
            "です"
          ],
          "correctAnswer": "泳げるです"
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
            "Confirming Unskillful / bad at",
            "Can speak",
            "Guitar",
            "Confirming Photograph"
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
            "ん",
            "つ",
            "タ",
            "ギ",
            "み",
            "か",
            "そ",
            "ー"
          ],
          "correctAnswer": "ギター"
        },
        {
          "id": "u11_l2_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な写真です。",
          "furigana": "これはいちばんたいせつなしゃしんです。",
          "romaji": "Kore wa ichiban taisetsu na shashin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Photograph.",
          "audioText": "これは写真です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な写真です。",
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
          "id": "u11_l2_4",
          "type": "scramble",
          "prompt": "これは写真です",
          "furigana": "これはしゃしんです",
          "romaji": "Kore wa shashin desu.",
          "english": "This is Photograph.",
          "audioText": "これは写真です",
          "scrambleTokens": [
            "ではありません",
            "写真",
            "それ",
            "です",
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
          "prompt": "登るです",
          "furigana": "のぼるです",
          "romaji": "noboru desu.",
          "english": "It is To climb.",
          "audioText": "登るです",
          "dictateTokens": [
            "ではありません",
            "登る",
            "です",
            "これ"
          ],
          "dictateSolution": [
            "登る",
            "です"
          ],
          "correctAnswer": "登るです"
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
            "Photograph",
            "Confirming Guitar",
            "Number one / most",
            "Can swim"
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
            "の",
            "ち",
            "ば",
            "い",
            "る",
            "れ",
            "ん",
            "み"
          ],
          "correctAnswer": "いちばん"
        },
        {
          "id": "u11_l3_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な上手です。",
          "furigana": "これはいちばんたいせつなじょうずです。",
          "romaji": "Kore wa ichiban taisetsu na jouzu desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Skillful / good at.",
          "audioText": "これは上手です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な上手です。",
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
          "id": "u11_l3_4",
          "type": "scramble",
          "prompt": "これは上手です",
          "furigana": "これはじょうずです",
          "romaji": "Kore wa jouzu desu.",
          "english": "This is Skillful / good at.",
          "audioText": "これは上手です",
          "scrambleTokens": [
            "ではありません",
            "上手",
            "それ",
            "これは",
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
          "prompt": "下手です",
          "furigana": "へたです",
          "romaji": "heta desu.",
          "english": "It is Unskillful / bad at.",
          "audioText": "下手です",
          "dictateTokens": [
            "です",
            "これ",
            "ではありません",
            "下手"
          ],
          "dictateSolution": [
            "下手",
            "です"
          ],
          "correctAnswer": "下手です"
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
            "Experience",
            "Number one / most",
            "Confirming To climb",
            "To play (strings/piano)"
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
            "け",
            "う",
            "い",
            "く",
            "け",
            "ろ",
            "ん",
            "り"
          ],
          "correctAnswer": "けいけん"
        },
        {
          "id": "u11_l4_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な読書です。",
          "furigana": "これはいちばんたいせつなどくしょです。",
          "romaji": "Kore wa ichiban taisetsu na dokusho desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Reading books.",
          "audioText": "これは読書です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な読書です。",
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
          "id": "u11_l4_4",
          "type": "scramble",
          "prompt": "これは読書です",
          "furigana": "これはどくしょです",
          "romaji": "Kore wa dokusho desu.",
          "english": "This is Reading books.",
          "audioText": "これは読書です",
          "scrambleTokens": [
            "これは",
            "読書",
            "それ",
            "です",
            "ではありません"
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
          "prompt": "料理です",
          "furigana": "りょうりです",
          "romaji": "ryouri desu.",
          "english": "It is Cooking.",
          "audioText": "料理です",
          "dictateTokens": [
            "です",
            "ではありません",
            "これ",
            "料理"
          ],
          "dictateSolution": [
            "料理",
            "です"
          ],
          "correctAnswer": "料理です"
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
            "Confirming Experience",
            "Driving",
            "Can swim",
            "Confirming Unskillful / bad at"
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
            "う",
            "の",
            "ん",
            "り",
            "ん",
            "て",
            "ほ",
            "な"
          ],
          "correctAnswer": "うんてん"
        },
        {
          "id": "u11_l5_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な弾くです。",
          "furigana": "これはいちばんたいせつなひくです。",
          "romaji": "Kore wa ichiban taisetsu na hiku desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important To play (strings/piano).",
          "audioText": "これは弾くです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な弾くです。",
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
          "id": "u11_l5_4",
          "type": "scramble",
          "prompt": "これは弾くです",
          "furigana": "これはひくです",
          "romaji": "Kore wa hiku desu.",
          "english": "This is To play (strings/piano).",
          "audioText": "これは弾くです",
          "scrambleTokens": [
            "それ",
            "これは",
            "弾く",
            "です",
            "ではありません"
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
          "prompt": "得意です",
          "furigana": "とくいです",
          "romaji": "tokui desu.",
          "english": "It is Strong point / pride in skill.",
          "audioText": "得意です",
          "dictateTokens": [
            "得意",
            "です",
            "ではありません",
            "これ"
          ],
          "dictateSolution": [
            "得意",
            "です"
          ],
          "correctAnswer": "得意です"
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
            "Confirming To play (strings/piano)",
            "Confirming Hobby",
            "Confirming Skillful / good at",
            "To play (strings/piano)"
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
            "み",
            "の",
            "に",
            "ん",
            "ゅ",
            "し",
            "く"
          ],
          "correctAnswer": "しゅみのかくにん"
        },
        {
          "id": "u11_l6_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な話せるの確認です。",
          "furigana": "これはいちばんたいせつなはなせるのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na hanaseru no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Can speak.",
          "audioText": "これは話せるの確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な話せるの確認です。",
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
          "id": "u11_l6_4",
          "type": "scramble",
          "prompt": "これは話せるの確認です",
          "furigana": "これははなせるのかくにんです",
          "romaji": "Kore wa hanaseru no kakunin desu.",
          "english": "This is Confirming Can speak.",
          "audioText": "これは話せるの確認です",
          "scrambleTokens": [
            "です",
            "話せるの確認",
            "これは",
            "ではありません",
            "それ"
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
          "prompt": "泳げるの確認です",
          "furigana": "およげるのかくにんです",
          "romaji": "oyogeru no kakunin desu.",
          "english": "It is Confirming Can swim.",
          "audioText": "泳げるの確認です",
          "dictateTokens": [
            "これ",
            "です",
            "ではありません",
            "泳げるの確認"
          ],
          "dictateSolution": [
            "泳げるの確認",
            "です"
          ],
          "correctAnswer": "泳げるの確認です"
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
            "Confirming Guitar",
            "Confirming Hobby",
            "Confirming Number one / most",
            "Can swim"
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
            "に",
            "タ",
            "ん",
            "ー",
            "く",
            "の",
            "ギ"
          ],
          "correctAnswer": "ギターのかくにん"
        },
        {
          "id": "u11_l7_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な写真の確認です。",
          "furigana": "これはいちばんたいせつなしゃしんのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na shashin no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Photograph.",
          "audioText": "これは写真の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な写真の確認です。",
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
            "写真の確認",
            "それ",
            "これは"
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
          "prompt": "登るの確認です",
          "furigana": "のぼるのかくにんです",
          "romaji": "noboru no kakunin desu.",
          "english": "It is Confirming To climb.",
          "audioText": "登るの確認です",
          "dictateTokens": [
            "これ",
            "ではありません",
            "登るの確認",
            "です"
          ],
          "dictateSolution": [
            "登るの確認",
            "です"
          ],
          "correctAnswer": "登るの確認です"
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
            "Guitar",
            "Strong point / pride in skill",
            "Confirming Number one / most",
            "Confirming Hobby"
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
            "ば",
            "に",
            "の",
            "く",
            "ち",
            "か",
            "い"
          ],
          "correctAnswer": "いちばんのかくにん"
        },
        {
          "id": "u11_l8_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な上手の確認です。",
          "furigana": "これはいちばんたいせつなじょうずのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na jouzu no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Skillful / good at.",
          "audioText": "これは上手の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な上手の確認です。",
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
          "id": "u11_l8_4",
          "type": "scramble",
          "prompt": "これは上手の確認です",
          "furigana": "これはじょうずのかくにんです",
          "romaji": "Kore wa jouzu no kakunin desu.",
          "english": "This is Confirming Skillful / good at.",
          "audioText": "これは上手の確認です",
          "scrambleTokens": [
            "です",
            "それ",
            "これは",
            "ではありません",
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
          "prompt": "下手の確認です",
          "furigana": "へたのかくにんです",
          "romaji": "heta no kakunin desu.",
          "english": "It is Confirming Unskillful / bad at.",
          "audioText": "下手の確認です",
          "dictateTokens": [
            "です",
            "下手の確認",
            "ではありません",
            "これ"
          ],
          "dictateSolution": [
            "下手の確認",
            "です"
          ],
          "correctAnswer": "下手の確認です"
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
            "Confirming Can speak",
            "Confirming Hobby",
            "Hobby",
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
            "く",
            "か",
            "ん",
            "け",
            "い",
            "に",
            "け"
          ],
          "correctAnswer": "けいけんのかくにん"
        },
        {
          "id": "u11_l9_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な読書の確認です。",
          "furigana": "これはいちばんたいせつなどくしょのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na dokusho no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Reading books.",
          "audioText": "これは読書の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な読書の確認です。",
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
          "id": "u11_l9_4",
          "type": "scramble",
          "prompt": "これは読書の確認です",
          "furigana": "これはどくしょのかくにんです",
          "romaji": "Kore wa dokusho no kakunin desu.",
          "english": "This is Confirming Reading books.",
          "audioText": "これは読書の確認です",
          "scrambleTokens": [
            "読書の確認",
            "ではありません",
            "これは",
            "それ",
            "です"
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
          "prompt": "料理の確認です",
          "furigana": "りょうりのかくにんです",
          "romaji": "ryouri no kakunin desu.",
          "english": "It is Confirming Cooking.",
          "audioText": "料理の確認です",
          "dictateTokens": [
            "ではありません",
            "これ",
            "です",
            "料理の確認"
          ],
          "dictateSolution": [
            "料理の確認",
            "です"
          ],
          "correctAnswer": "料理の確認です"
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
            "Hobby",
            "Confirming Driving",
            "Can swim",
            "Reading books"
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
            "ん",
            "に",
            "か",
            "の",
            "く",
            "て",
            "ん",
            "う"
          ],
          "correctAnswer": "うんてんのかくにん"
        },
        {
          "id": "u11_l10_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な弾くの確認です。",
          "furigana": "これはいちばんたいせつなひくのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na hiku no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming To play (strings/piano).",
          "audioText": "これは弾くの確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な弾くの確認です。",
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
          "id": "u11_l10_4",
          "type": "scramble",
          "prompt": "これは弾くの確認です",
          "furigana": "これはひくのかくにんです",
          "romaji": "Kore wa hiku no kakunin desu.",
          "english": "This is Confirming To play (strings/piano).",
          "audioText": "これは弾くの確認です",
          "scrambleTokens": [
            "これは",
            "ではありません",
            "それ",
            "です",
            "弾くの確認"
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
          "prompt": "得意の確認です",
          "furigana": "とくいのかくにんです",
          "romaji": "tokui no kakunin desu.",
          "english": "It is Confirming Strong point / pride in skill.",
          "audioText": "得意の確認です",
          "dictateTokens": [
            "です",
            "得意の確認",
            "ではありません",
            "これ"
          ],
          "dictateSolution": [
            "得意の確認",
            "です"
          ],
          "correctAnswer": "得意の確認です"
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
            "Confirming Experience",
            "To play (strings/piano)",
            "Confirming To climb",
            "Confirming Hobby"
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
            "か",
            "に",
            "く",
            "し",
            "の",
            "ゅ",
            "み"
          ],
          "correctAnswer": "しゅみのかくにん"
        },
        {
          "id": "u11_l11_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な話せるの確認です。",
          "furigana": "これはいちばんたいせつなはなせるのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na hanaseru no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Can speak.",
          "audioText": "これは話せるの確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な話せるの確認です。",
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
          "id": "u11_l11_4",
          "type": "scramble",
          "prompt": "これは話せるの確認です",
          "furigana": "これははなせるのかくにんです",
          "romaji": "Kore wa hanaseru no kakunin desu.",
          "english": "This is Confirming Can speak.",
          "audioText": "これは話せるの確認です",
          "scrambleTokens": [
            "ではありません",
            "これは",
            "です",
            "話せるの確認",
            "それ"
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
          "prompt": "泳げるの確認です",
          "furigana": "およげるのかくにんです",
          "romaji": "oyogeru no kakunin desu.",
          "english": "It is Confirming Can swim.",
          "audioText": "泳げるの確認です",
          "dictateTokens": [
            "です",
            "泳げるの確認",
            "ではありません",
            "これ"
          ],
          "dictateSolution": [
            "泳げるの確認",
            "です"
          ],
          "correctAnswer": "泳げるの確認です"
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
            "Hobby",
            "Confirming Guitar",
            "Skillful / good at",
            "Confirming Driving"
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
            "に",
            "タ",
            "ー",
            "ん",
            "の",
            "く",
            "ギ",
            "か"
          ],
          "correctAnswer": "ギターのかくにん"
        },
        {
          "id": "u11_l12_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な写真の確認です。",
          "furigana": "これはいちばんたいせつなしゃしんのかくにんです。",
          "romaji": "Kore wa ichiban taisetsu na shashin no kakunin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Confirming Photograph.",
          "audioText": "これは写真の確認です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な写真の確認です。",
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
          "id": "u11_l12_4",
          "type": "scramble",
          "prompt": "これは写真の確認です",
          "furigana": "これはしゃしんのかくにんです",
          "romaji": "Kore wa shashin no kakunin desu.",
          "english": "This is Confirming Photograph.",
          "audioText": "これは写真の確認です",
          "scrambleTokens": [
            "ではありません",
            "それ",
            "写真の確認",
            "です",
            "これは"
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
          "prompt": "登るの確認です",
          "furigana": "のぼるのかくにんです",
          "romaji": "noboru no kakunin desu.",
          "english": "It is Confirming To climb.",
          "audioText": "登るの確認です",
          "dictateTokens": [
            "です",
            "登るの確認",
            "ではありません",
            "これ"
          ],
          "dictateSolution": [
            "登るの確認",
            "です"
          ],
          "correctAnswer": "登るの確認です"
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
            "Confirming Strong point / pride in skill",
            "Hobby",
            "Confirming Can swim",
            "Can speak"
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
            "よ",
            "り",
            "れ",
            "し",
            "ぬ",
            "ゅ",
            "み",
            "ら"
          ],
          "correctAnswer": "しゅみ"
        },
        {
          "id": "u11_l13_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な話せるです。",
          "furigana": "これはいちばんたいせつなはなせるです。",
          "romaji": "Kore wa ichiban taisetsu na hanaseru desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Can speak.",
          "audioText": "これは話せるです。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な話せるです。",
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
          "id": "u11_l13_4",
          "type": "scramble",
          "prompt": "これは話せるです",
          "furigana": "これははなせるです",
          "romaji": "Kore wa hanaseru desu.",
          "english": "This is Can speak.",
          "audioText": "これは話せるです",
          "scrambleTokens": [
            "です",
            "これは",
            "ではありません",
            "話せる",
            "それ"
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
          "prompt": "泳げるです",
          "furigana": "およげるです",
          "romaji": "oyogeru desu.",
          "english": "It is Can swim.",
          "audioText": "泳げるです",
          "dictateTokens": [
            "ではありません",
            "です",
            "これ",
            "泳げる"
          ],
          "dictateSolution": [
            "泳げる",
            "です"
          ],
          "correctAnswer": "泳げるです"
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
            "Driving",
            "Confirming To climb",
            "Guitar",
            "To climb"
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
            "ろ",
            "ー",
            "お",
            "け",
            "せ",
            "ギ",
            "タ",
            "ふ"
          ],
          "correctAnswer": "ギター"
        },
        {
          "id": "u11_l14_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な写真です。",
          "furigana": "これはいちばんたいせつなしゃしんです。",
          "romaji": "Kore wa ichiban taisetsu na shashin desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Photograph.",
          "audioText": "これは写真です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な写真です。",
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
          "id": "u11_l14_4",
          "type": "scramble",
          "prompt": "これは写真です",
          "furigana": "これはしゃしんです",
          "romaji": "Kore wa shashin desu.",
          "english": "This is Photograph.",
          "audioText": "これは写真です",
          "scrambleTokens": [
            "写真",
            "それ",
            "これは",
            "です",
            "ではありません"
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
          "prompt": "登るです",
          "furigana": "のぼるです",
          "romaji": "noboru desu.",
          "english": "It is To climb.",
          "audioText": "登るです",
          "dictateTokens": [
            "これ",
            "登る",
            "ではありません",
            "です"
          ],
          "dictateSolution": [
            "登る",
            "です"
          ],
          "correctAnswer": "登るです"
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
            "Photograph",
            "Hobby",
            "Confirming Hobby",
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
            "う",
            "ん",
            "く",
            "か",
            "ち",
            "い",
            "あ",
            "ば"
          ],
          "correctAnswer": "いちばん"
        },
        {
          "id": "u11_l15_3",
          "type": "cloze",
          "prompt": "これはいちばん大切な上手です。",
          "furigana": "これはいちばんたいせつなじょうずです。",
          "romaji": "Kore wa ichiban taisetsu na jouzu desu.",
          "english": "Fill in topic particle 'は' (wa): This is the most important Skillful / good at.",
          "audioText": "これは上手です。",
          "clozeSentence": "これ {{BLANK}} いちばん大切な上手です。",
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
          "id": "u11_l15_4",
          "type": "scramble",
          "prompt": "これは上手です",
          "furigana": "これはじょうずです",
          "romaji": "Kore wa jouzu desu.",
          "english": "This is Skillful / good at.",
          "audioText": "これは上手です",
          "scrambleTokens": [
            "です",
            "それ",
            "上手",
            "これは",
            "ではありません"
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
          "prompt": "下手です",
          "furigana": "へたです",
          "romaji": "heta desu.",
          "english": "It is Unskillful / bad at.",
          "audioText": "下手です",
          "dictateTokens": [
            "です",
            "ではありません",
            "これ",
            "下手"
          ],
          "dictateSolution": [
            "下手",
            "です"
          ],
          "correctAnswer": "下手です"
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
          "Skillful / good at",
          "Confirming Reading books",
          "Confirming To climb",
          "Hobby"
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
          "し",
          "も",
          "る",
          "な",
          "み",
          "め",
          "ゅ",
          "け"
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
          "Photograph",
          "Confirming Guitar",
          "Number one / most",
          "Can swim"
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
          "の",
          "ち",
          "ば",
          "い",
          "る",
          "れ",
          "ん",
          "み"
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
          "Confirming Experience",
          "Driving",
          "Can swim",
          "Confirming Unskillful / bad at"
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
          "う",
          "の",
          "ん",
          "り",
          "ん",
          "て",
          "ほ",
          "な"
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
          "Confirming Guitar",
          "Confirming Hobby",
          "Confirming Number one / most",
          "Can swim"
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
          "に",
          "タ",
          "ん",
          "ー",
          "く",
          "の",
          "ギ"
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
          "Confirming Can speak",
          "Confirming Hobby",
          "Hobby",
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
          "く",
          "か",
          "ん",
          "け",
          "い",
          "に",
          "け"
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
          "Confirming Experience",
          "To play (strings/piano)",
          "Confirming To climb",
          "Confirming Hobby"
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
          "か",
          "に",
          "く",
          "し",
          "の",
          "ゅ",
          "み"
        ],
        "correctAnswer": "しゅみのかくにん"
      }
    ]
  }
};
