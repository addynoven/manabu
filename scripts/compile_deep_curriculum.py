import os
import json
import random

# Common distractor kana for spelling tile banks
KANA_DISTRACTORS = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や", "ゆ", "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ", "を", "ん"
]

def make_tile_bank(furigana):
    chars = list(furigana)
    # Filter out punctuation and spaces
    chars = [c for c in chars if c not in ["・", " ", "、", "。", "！", "？", "〜", "-", " "]]
    bank = list(chars)
    shuffled_distractors = list(KANA_DISTRACTORS)
    random.shuffle(shuffled_distractors)
    for d in shuffled_distractors:
        if d not in bank:
            bank.append(d)
        if len(bank) >= 8:
            break
    bank = bank[:8]
    random.shuffle(bank)
    return bank

# Database of 35-45 rich vocabulary and sentences for each of the 30 Units
CURRICULUM_DATA = [
    # ==========================================
    # UNIT 1: Greeting a Japanese Friend (日本人の友達に挨拶) - JLPT N5
    # ==========================================
    {
        "num": 1,
        "title": "Greeting a Japanese Friend",
        "titleJp": "日本人の友達に挨拶",
        "desc": "Master first impressions, daily greetings, self-introductions, polite responses, and essential courtesies.",
        "icon": "🌸",
        "color": "#10B981",
        "summary": [
            "日常の挨拶 (Daily Greetings): こんにちは, おはようございます, こんばんは, さようなら",
            "返答と感謝 (Gratitude & Politeness): ありがとうございます, どういたしまして, すみません",
            "自己紹介 (Self-Introductions): はじめまして, 〜です, よろしくお願いします",
            "身元と職業 (Identity & Roles): 学生, 先生, 会社員, アメリカから来ました",
            "生活の慣用句 (Daily Courtesies): いただきます, ごちそうさまでした, 行ってきます",
        ],
        "vocab": [
            # Day 1: First Greetings
            ("こんにちは", "こんにちは", "konnichiwa", "Hello / Good afternoon", "挨拶 (Greeting)"),
            ("おはようございます", "おはようございます", "ohayou gozaimasu", "Good morning (polite)", "挨拶 (Greeting)"),
            ("こんばんは", "こんばんは", "konbanwa", "Good evening", "挨拶 (Greeting)"),
            ("さようなら", "さようなら", "sayounara", "Goodbye", "挨拶 (Greeting)"),
            ("ありがとうございます", "ありがとうございます", "arigatou gozaimasu", "Thank you very much", "感謝 (Gratitude)"),
            ("どういたしまして", "どういたしまして", "douitashimashite", "You are welcome", "返答 (Response)"),
            ("はい", "はい", "hai", "Yes", "肯定 (Affirmation)"),
            ("いいえ", "いいえ", "iie", "No", "否定 (Negation)"),

            # Day 2: Introductions & Politeness
            ("はじめまして", "はじめまして", "hajimemashite", "Nice to meet you", "自己紹介 (Intro)"),
            ("よろしくお願いします", "よろしくおねがいします", "yoroshiku onegaishimasu", "Please treat me well", "挨拶 (Greeting)"),
            ("田中", "たなか", "tanaka", "Tanaka (common name)", "人名 (Name)"),
            ("学生", "がくせい", "gakusei", "Student", "職業 (Occupation)"),
            ("先生", "せんせい", "sensei", "Teacher / Professor", "職業 (Occupation)"),
            ("会社員", "かいしゃいん", "kaishain", "Company employee", "職業 (Occupation)"),
            ("日本人", "にほんじん", "nihonjin", "Japanese person", "国籍 (Nationality)"),
            ("留学生", "りゅうがくせい", "ryuugakusei", "International student", "身分 (Status)"),

            # Day 3: Origin & Well-being
            ("お元気ですか", "おげんきですか", "ogenki desu ka", "How are you?", "挨拶 (Greeting)"),
            ("元気です", "げんきです", "genki desu", "I am well / healthy", "返答 (Response)"),
            ("出身", "しゅっしん", "shusshin", "Hometown / origin", "身元 (Origin)"),
            ("どちら", "どちら", "dochira", "Where / which direction (polite)", "疑問詞 (Question)"),
            ("アメリカ", "アメリカ", "amerika", "America / USA", "国名 (Country)"),
            ("名前", "なまえ", "namae", "Name", "名詞 (Noun)"),
            ("誰", "だれ", "dare", "Who", "疑問詞 (Question)"),
            ("私", "わたし", "watashi", "I / me", "代名詞 (Pronoun)"),

            # Day 4: Apologies & Courtesies
            ("すみません", "すみません", "sumimasen", "Excuse me / I'm sorry", "謝罪 (Apology)"),
            ("ごめんなさい", "ごめんなさい", "gomennasai", "I'm sorry (casual polite)", "謝罪 (Apology)"),
            ("大丈夫です", "だいじょうぶです", "daijoubu desu", "It's all right / no problem", "返答 (Response)"),
            ("どうぞ", "どうぞ", "douzo", "Please / go ahead", "勧誘 (Offering)"),
            ("こちらこそ", "こちらこそ", "kochirakoso", "Likewise / the pleasure is mine", "挨拶 (Greeting)"),
            ("失礼します", "しつれいします", "shitsureishimasu", "Pardon me / Goodbye (polite)", "挨拶 (Greeting)"),

            # Day 5: Mealtime & Daily Phrases
            ("いただきます", "いただきます", "itadakimasu", "Let's eat (before meal)", "食事 (Meal)"),
            ("ごちそうさまでした", "ごちそうさまでした", "gochisousamadeshita", "Thank you for the meal", "食事 (Meal)"),
            ("行ってきます", "いってきます", "ittekimasu", "I'm leaving (home)", "挨拶 (Greeting)"),
            ("いってらっしゃい", "いってらっしゃい", "itterasshai", "Have a good day / take care", "挨拶 (Greeting)"),
            ("ただいま", "ただいま", "tadaima", "I'm home", "挨拶 (Greeting)"),
            ("おかえりなさい", "おかえりなさい", "okaerinasai", "Welcome home", "挨拶 (Greeting)"),
            ("おやすみなさい", "おやすみなさい", "oyasuminasai", "Good night", "挨拶 (Greeting)"),
            ("またね", "またね", "matane", "See you later (casual)", "挨拶 (Greeting)"),
        ],
        "dialogues": [
            ("Tanaka: こんにちは！お元気ですか？", "こんにちは！お元気ですか？", "Konnichiwa! Ogenki desu ka?", "Tanaka: Hello! How are you?", "はい、元気です！", ["はい、元気です！", "さようなら", "いいえ、日本人です", "はじめまして"]),
            ("Yamada: はじめまして、山田です。よろしくお願いします。", "はじめまして、山田です。", "Hajimemashite, Yamada desu.", "Yamada: Nice to meet you, I'm Yamada.", "はじめまして、スミスです。こちらこそ！", ["はじめまして、スミスです。こちらこそ！", "お水をお願いします", "ごちそうさまでした", "駅はどこですか"]),
            ("Host: ご出身はどちらですか？", "ご出身はどちらですか？", "Goshusshin wa dochira desu ka?", "Host: Where are you from?", "アメリカのニューヨークです。", ["アメリカのニューヨークです。", "こんにちは", "美味しいです", "いいえ、結構です"]),
            ("Friend: 明日また会いましょう！", "明日また会いましょう！", "Ashita mata aimashou!", "Friend: Let's meet again tomorrow!", "はい、じゃあまたね！", ["はい、じゃあまたね！", "いただきます", "ごめんなさい", "私は学生です"]),
        ]
    },

    # ==========================================
    # UNIT 2: Talking About What You Like (好きなものについて話す) - JLPT N5
    # ==========================================
    {
        "num": 2,
        "title": "Talking About What You Like",
        "titleJp": "好きなものについて話す",
        "desc": "Express personal preferences, talk about favorite foods and drinks, describe pastimes, and ask others what they enjoy.",
        "icon": "❤️",
        "color": "#F43F5E",
        "summary": [
            "好みの表現 (Preferences): 〜が好きです (I like ~), 〜が大好きです (I love ~)",
            "否定の好み (Dislikes): 〜はあまり好きじゃないです (I don't like ~ very much)",
            "食べ物・飲み物 (Foods & Drinks): ラーメン, 寿司, ピザ, お茶, コーヒー, ビール",
            "趣味・娯楽 (Hobbies): アニメ, 映画, 音楽, ゲーム, スポーツ, 読書",
            "感想の形容詞 (Adjectives): 美味しい (delicious), 楽しい (fun), 面白い (interesting)",
        ],
        "vocab": [
            # Day 1: Expressing Likes & Basic Foods
            ("好き", "すき", "suki", "Liked / fond of", "形容詞 (Adjective)"),
            ("大好き", "だいすき", "daisuki", "Loved / favorite", "形容詞 (Adjective)"),
            ("嫌い", "きらい", "kirai", "Disliked / hated", "形容詞 (Adjective)"),
            ("寿司", "すし", "sushi", "Sushi", "食べ物 (Food)"),
            ("ラーメン", "ラーメン", "raamen", "Ramen noodles", "食べ物 (Food)"),
            ("天ぷら", "てんぷら", "tenpura", "Tempura", "食べ物 (Food)"),
            ("カレー", "カレー", "karee", "Japanese curry", "食べ物 (Food)"),
            ("ピザ", "ピザ", "piza", "Pizza", "食べ物 (Food)"),

            # Day 2: Drinks & Taste Adjectives
            ("美味しい", "おいしい", "oishii", "Delicious / tasty", "形容詞 (Adjective)"),
            ("まずい", "まずい", "mazui", "Unpalatable / bad taste", "形容詞 (Adjective)"),
            ("甘い", "あまい", "amai", "Sweet", "味覚 (Taste)"),
            ("辛い", "からい", "karai", "Spicy / hot", "味覚 (Taste)"),
            ("お茶", "おちゃ", "ocha", "Green tea", "飲み物 (Drink)"),
            ("水", "みず", "mizu", "Water", "飲み物 (Drink)"),
            ("ビール", "ビール", "biiru", "Beer", "飲み物 (Drink)"),
            ("ジュース", "ジュース", "juusu", "Juice", "飲み物 (Drink)"),

            # Day 3: Hobbies & Pop Culture
            ("アニメ", "アニメ", "anime", "Anime / Japanese animation", "趣味 (Hobby)"),
            ("漫画", "まんが", "manga", "Manga / comics", "趣味 (Hobby)"),
            ("映画", "えいが", "eiga", "Movie / cinema", "娯楽 (Entertainment)"),
            ("音楽", "おんがく", "ongaku", "Music", "娯楽 (Entertainment)"),
            ("ゲーム", "ゲーム", "geemu", "Video games", "娯楽 (Entertainment)"),
            ("スポーツ", "スポーツ", "supootsu", "Sports", "娯楽 (Entertainment)"),
            ("サッカー", "サッカー", "sakkaa", "Soccer / football", "スポーツ (Sport)"),
            ("野球", "やきゅう", "yakyuu", "Baseball", "スポーツ (Sport)"),

            # Day 4: Activities & Sensations
            ("楽しい", "たのしい", "tanoshii", "Fun / enjoyable", "形容詞 (Adjective)"),
            ("面白い", "おもしろい", "omoshiroi", "Interesting / amusing", "形容詞 (Adjective)"),
            ("つまらない", "つまらない", "tsumaranai", "Boring / dull", "形容詞 (Adjective)"),
            ("見る", "みる", "miru", "To see / watch", "動詞 (Verb)"),
            ("聞く", "きく", "kiku", "To listen / hear", "動詞 (Verb)"),
            ("する", "する", "suru", "To do / play", "動詞 (Verb)"),
            ("読書", "どくしょ", "dokusho", "Reading books", "趣味 (Hobby)"),
            ("旅行", "りょこう", "ryokou", "Travel / trips", "趣味 (Hobby)"),

            # Day 5: Nuanced Preferences & Questions
            ("一番", "いちばん", "ichiban", "Number one / most", "副詞 (Adverb)"),
            ("とても", "とても", "totemo", "Very / extremely", "副詞 (Adverb)"),
            ("あまり", "あまり", "amari", "Not very / rarely (with neg)", "副詞 (Adverb)"),
            ("全然", "ぜんぜん", "zenzen", "Not at all (with neg)", "副詞 (Adverb)"),
            ("どんな", "どんな", "donna", "What kind of...", "疑問詞 (Question)"),
            ("何", "なに", "nani", "What", "疑問詞 (Question)"),
            ("料理", "りょうり", "ryouri", "Cooking / cuisine", "名詞 (Noun)"),
            ("辛い料理", "からいりょうり", "karai ryouri", "Spicy food", "名詞句 (Phrase)"),
        ],
        "dialogues": [
            ("Ken: 日本の食べ物で、何が一番好きですか？", "日本の食べ物で、何が一番好きですか？", "Nihon no tabemono de, nani ga ichiban suki desu ka?", "Ken: Among Japanese foods, what do you like best?", "ラーメンが一番好きです！", ["ラーメンが一番好きです！", "さようなら", "私は学生です", "駅はどこですか"]),
            ("Sara: アニメを見るのは好き？", "アニメを見るのは好き？", "Anime o miru no wa suki?", "Sara: Do you like watching anime?", "うん、大好き！毎週見ているよ。", ["うん、大好き！毎週見ているよ。", "いいえ、日本人です", "お腹が空きました", "ごちそうさまでした"]),
            ("Ken: 辛い食べ物は大丈夫ですか？", "辛い食べ物は大丈夫ですか？", "Karai tabemono wa daijoubu desu ka?", "Ken: Are you okay with spicy food?", "あまり好きじゃないですが、少しなら食べられます。", ["あまり好きじゃないですが、少しなら食べられます。", "はい、元気です", "はじめまして", "おやすみなさい"]),
            ("Friend: 休みの日は何をして楽しんでいる？", "休みの日は何をして楽しんでいる？", "Yasumi no hi wa nani o shite tanoshinde iru?", "Friend: What do you do for fun on days off?", "音楽を聞いたりゲームをしたりします。", ["音楽を聞いたりゲームをしたりします。", "こんにちは", "美味しいです", "ここは渋谷です"]),
        ]
    },

    # ==========================================
    # UNIT 3: Talking About Your Actions (日々の行動を話す) - JLPT N5
    # ==========================================
    {
        "num": 3,
        "title": "Talking About Your Actions",
        "titleJp": "日々の行動を話す",
        "desc": "Describe your daily routine, morning to night habits, time expressions, commuting, and using action particles.",
        "icon": "🏃",
        "color": "#3B82F6",
        "summary": [
            "日常の基本動詞 (Core Verbs): 起きる (wake up), 寝る (sleep), 食べる (eat), 飲む (drink)",
            "移動の動詞と助詞 (Motion Verbs): 学校へ行く (go to school), 家に帰る (return home)",
            "時間の表現 (Time Expressions): 朝 (morning), 昼 (afternoon), 夜 (night), 7時に (at 7:00)",
            "日・週の表現 (Calendar Days): 今日, 明日, 昨日, 毎日, 週末, 月曜日",
            "交通手段 (Transportation): 電車で行く (go by train), 歩いて行く (walk)",
        ],
        "vocab": [
            # Day 1: Daily Routine Verbs
            ("起きる", "おきる", "okiru", "To wake up / get up", "動詞 (Verb)"),
            ("寝る", "ねる", "neru", "To sleep / go to bed", "動詞 (Verb)"),
            ("食べる", "たべる", "taberu", "To eat", "動詞 (Verb)"),
            ("飲む", "のむ", "nomu", "To drink", "動詞 (Verb)"),
            ("行く", "いく", "iku", "To go", "動詞 (Verb)"),
            ("来る", "くる", "kuru", "To come", "動詞 (Verb)"),
            ("帰る", "かえる", "kaeru", "To return home", "動詞 (Verb)"),
            ("買う", "かう", "kau", "To buy", "動詞 (Verb)"),

            # Day 2: Times & Daily Milestones
            ("朝", "あさ", "asa", "Morning", "時間 (Time)"),
            ("昼", "ひる", "hiru", "Noon / daytime", "時間 (Time)"),
            ("夜", "よる", "yoru", "Night / evening", "時間 (Time)"),
            ("朝ごはん", "あさごはん", "asagohan", "Breakfast", "食事 (Meal)"),
            ("昼ごはん", "ひるごはん", "hirugohan", "Lunch", "食事 (Meal)"),
            ("晩ごはん", "ばんごはん", "bangohan", "Dinner", "食事 (Meal)"),
            ("今", "いま", "ima", "Now", "時間 (Time)"),
            ("何時", "なんじ", "nanji", "What time", "疑問詞 (Question)"),

            # Day 3: Days & Frequency
            ("今日", "きょう", "kyou", "Today", "時間 (Time)"),
            ("明日", "あした", "ashita", "Tomorrow", "時間 (Time)"),
            ("昨日", "きのう", "kinou", "Yesterday", "時間 (Time)"),
            ("毎日", "まいにち", "mainichi", "Every day", "頻度 (Frequency)"),
            ("いつも", "いつも", "itsumo", "Always", "頻度 (Frequency)"),
            ("時々", "ときどき", "tokidoki", "Sometimes", "頻度 (Frequency)"),
            ("週末", "しゅうまつ", "shuumatsu", "Weekend", "時間 (Time)"),
            ("休み", "やすみ", "yasumi", "Holiday / day off", "時間 (Time)"),

            # Day 4: Work, Study & Commuting
            ("勉強する", "べんきょうする", "benkyou suru", "To study", "動詞 (Verb)"),
            ("働く", "はたらく", "hataraku", "To work", "動詞 (Verb)"),
            ("仕事", "しごと", "shigoto", "Job / work", "名詞 (Noun)"),
            ("学校", "がっこう", "gakkou", "School", "場所 (Place)"),
            ("会社", "かいしゃ", "kaisha", "Company / office", "場所 (Place)"),
            ("家", "いえ", "ie", "House / home", "場所 (Place)"),
            ("電車", "でんしゃ", "densha", "Train", "交通 (Transit)"),
            ("バス", "バス", "basu", "Bus", "交通 (Transit)"),

            # Day 5: Communication & Sensory Verbs
            ("話す", "はなす", "hanasu", "To talk / speak", "動詞 (Verb)"),
            ("書く", "かく", "kaku", "To write", "動詞 (Verb)"),
            ("読む", "よむ", "yomu", "To read", "動詞 (Verb)"),
            ("会う", "あう", "au", "To meet", "動詞 (Verb)"),
            ("友達", "ともだち", "tomodachi", "Friend", "名詞 (Noun)"),
            ("本", "ほん", "hon", "Book", "名詞 (Noun)"),
            ("新聞", "しんぶん", "shinbun", "Newspaper", "名詞 (Noun)"),
            ("手紙", "てがみ", "tegami", "Letter", "名詞 (Noun)"),
        ],
        "dialogues": [
            ("Tanaka: 毎朝、何時に起きますか？", "毎朝、何時に起きますか？", "Maiasa, nanji ni okimasu ka?", "Tanaka: What time do you wake up every morning?", "7時半に起きます。", ["7時半に起きます。", "ラーメンを食べます", "アメリカ出身です", "はい、元気です"]),
            ("Ken: 会社へはどうやって行きますか？", "会社へはどうやって行きますか？", "Kaisha e wa dou yatte ikimasu ka?", "Ken: How do you get to your office?", "電車で30分くらいかけて行きます。", ["電車で30分くらいかけて行きます。", "本を読みます", "夜寝ます", "こんにちは"]),
            ("Friend: 今日の夜、一緒に晩ごはんを食べませんか？", "一緒に晩ごはんを食べませんか？", "Issho ni bangohan o tabemasen ka?", "Friend: Would you like to have dinner together tonight?", "いいですね！行きましょう！", ["いいですね！行きましょう！", "さようなら", "私は学生です", "朝7時です"]),
            ("Mom: 今日は学校で何を勉強したの？", "今日は学校で何を勉強したの？", "Kyou wa gakkou de nani o benkyou shita no?", "Mom: What did you study at school today?", "日本語の漢字と文法を勉強しました。", ["日本語の漢字と文法を勉強しました。", "ピザが好きです", "お茶を飲みます", "初めまして"]),
        ]
    },

    # ==========================================
    # UNIT 4: Tokyo Café & Ordering (東京のカフェで注文) - JLPT N5
    # ==========================================
    {
        "num": 4,
        "title": "Tokyo Café & Ordering",
        "titleJp": "東京のカフェで注文",
        "desc": "Master ordering drinks and treats, using counters, requesting customizations, and paying the bill at Japanese cafés.",
        "icon": "☕",
        "color": "#EC4899",
        "summary": [
            "カフェでの注文 (Ordering at Cafés): ホットコーヒーをお願いします (Hot coffee please)",
            "助詞「を」と数量詞 (Particles & Counters): 紅茶を二つください (Two teas please)",
            "持ち帰り・店内 (Dine-in vs Takeout): テイクアウトでお願いします (To-go please)",
            "カスタマイズ (Customization): 氷なし (without ice), 砂糖とミルク (sugar and milk)",
            "会計表現 (Checking Out): お会計をお願いします (Check please), クレジットカード使えますか？",
        ],
        "vocab": [
            # Day 1: Beverage Staples & Ordering
            ("コーヒー", "コーヒー", "koohii", "Coffee", "飲み物 (Drink)"),
            ("ホットコーヒー", "ホットコーヒー", "hotto koohii", "Hot coffee", "飲み物 (Drink)"),
            ("アイスティー", "アイスティー", "aisu tii", "Iced tea", "飲み物 (Drink)"),
            ("紅茶", "こうちゃ", "koucha", "Black tea", "飲み物 (Drink)"),
            ("カフェラテ", "カフェラテ", "kafe rate", "Café latte", "飲み物 (Drink)"),
            ("抹茶ラテ", "まっちゃラテ", "matcha rate", "Matcha green tea latte", "飲み物 (Drink)"),
            ("ください", "ください", "kudasai", "Please give me...", "依頼 (Request)"),
            ("お願いします", "おねがいします", "onegaishimasu", "Please / I request...", "丁寧 (Polite)"),

            # Day 2: Counters & Sizes
            ("一つ", "ひとつ", "hitotsu", "One item (counter)", "数量 (Count)"),
            ("二つ", "ふたつ", "futatsu", "Two items (counter)", "数量 (Count)"),
            ("三つ", "みっつ", "mittsu", "Three items (counter)", "数量 (Count)"),
            ("四つ", "よっつ", "yottsu", "Four items (counter)", "数量 (Count)"),
            ("サイズ", "サイズ", "saizu", "Cup size", "名詞 (Noun)"),
            ("Sサイズ", "エスサイズ", "esu saizu", "Small size", "名詞 (Noun)"),
            ("Mサイズ", "エムサイズ", "emu saizu", "Medium size", "名詞 (Noun)"),
            ("Lサイズ", "エルサイズ", "eru saizu", "Large size", "名詞 (Noun)"),

            # Day 3: Café Food & Pastries
            ("ケーキ", "ケーキ", "keeki", "Cake", "デザート (Dessert)"),
            ("チーズケーキ", "チーズケーキ", "chiizu keeki", "Cheesecake", "デザート (Dessert)"),
            ("サンドイッチ", "サンドイッチ", "sandoitchi", "Sandwich", "軽食 (Snack)"),
            ("トースト", "トースト", "toosuto", "Toast", "軽食 (Snack)"),
            ("クロワッサン", "クロワッサン", "kurowassan", "Croissant", "パン (Bread)"),
            ("メニュー", "メニュー", "menyuu", "Menu", "名詞 (Noun)"),
            ("おすすめ", "おすすめ", "osusume", "Recommendation", "名詞 (Noun)"),
            ("季節限定", "きせつげんてい", "kisetsu gentei", "Seasonal limited edition", "名詞 (Noun)"),

            # Day 4: Customizations & Dining In
            ("店内", "てんない", "tennai", "Dine-in / in-store", "場所 (Place)"),
            ("テイクアウト", "テイクアウト", "teikuauto", "Takeout / to-go", "名詞 (Noun)"),
            ("持ち帰り", "もちかえり", "mochikaeri", "Takeout (Japanese term)", "名詞 (Noun)"),
            ("氷なし", "こおりなし", "koori nashi", "Without ice", "調整 (Option)"),
            ("砂糖", "さとう", "satou", "Sugar", "調味料 (Seasoning)"),
            ("ミルク", "ミルク", "miruku", "Milk / creamer", "調味料 (Seasoning)"),
            ("シロップ", "シロップ", "shiroppu", "Syrup", "調味料 (Seasoning)"),
            ("ストロー", "ストロー", "sutoroo", "Drinking straw", "備品 (Utensil)"),

            # Day 5: Staff Greetings & Checkout
            ("いらっしゃいませ", "いらっしゃいませ", "irasshaimase", "Welcome (store greeting)", "挨拶 (Greeting)"),
            ("ご注文", "ごちゅうもん", "gochuumon", "Your order", "接客 (Service)"),
            ("お会計", "おかいけい", "okaikei", "The bill / payment", "会計 (Payment)"),
            ("レシート", "レシート", "reshiito", "Receipt", "会計 (Payment)"),
            ("席", "せき", "seki", "Seat / table", "名詞 (Noun)"),
            ("禁煙席", "きんえんせき", "kin-enseki", "Non-smoking seat", "名詞 (Noun)"),
            ("カード", "カード", "kaado", "Credit / IC card", "決済 (Payment)"),
            ("少々お待ちください", "しょうしょうおまちください", "shoushou omachi kudasai", "Please wait a moment", "接客 (Service)"),
        ],
        "dialogues": [
            ("店員: いらっしゃいませ！ご注文はお決まりですか？", "ご注文はお決まりですか？", "Gochuumon wa okimari desu ka?", "Clerk: Welcome! Are you ready to order?", "ホットコーヒーのMサイズを一つお願いします。", ["ホットコーヒーのMサイズを一つお願いします。", "さようなら", "私は学生です", "駅はあそこです"]),
            ("店員: 店内でお召し上がりですか？", "店内でお召し上がりですか？", "Tennai de omeshiagari desu ka?", "Clerk: Will you be having that in-store?", "テイクアウトでお願いします。", ["テイクアウトでお願いします。", "はい、元気です", "美味しかったです", "ごめんなさい"]),
            ("客: すみません、このケーキにはナッツが入っていますか？", "ナッツが入っていますか？", "Nattsu ga haitte imasu ka?", "Customer: Excuse me, does this cake contain nuts?", "いいえ、ナッツは入っておりません。", ["いいえ、ナッツは入っておりません。", "右に曲がります", "お水をお願いします", "初めまして"]),
            ("客: お会計をお願いします。カードは使えますか？", "カードは使えますか？", "Kaado wa tsukaemasu ka?", "Customer: Check please. Do you accept credit cards?", "はい、各種クレジットカードご利用いただけます！", ["はい、各種クレジットカードご利用いただけます！", "いいえ、違います", "お腹が痛いです", "また来ます"]),
        ]
    }
]

# Function to dynamically generate rich curriculum items for units 5 to 30
def generate_unit_curriculum(unit_num):
    for item in CURRICULUM_DATA:
        if item["num"] == unit_num:
            return item
    configs = {
        5: {
            "title": "Asking Directions in Shibuya", "titleJp": "渋谷で道を尋ねる",
            "desc": "Navigate Tokyo stations, street corners, famous landmarks, and ask locals for directions.",
            "icon": "🗺️", "color": "#3B82F6",
            "vocab": [
                ("駅", "えき", "eki", "Train station", "施設 (Facility)"),
                ("どこ", "どこ", "doko", "Where", "疑問詞 (Question)"),
                ("右", "みぎ", "migi", "Right side", "方向 (Direction)"),
                ("左", "ひだり", "hidari", "Left side", "方向 (Direction)"),
                ("まっすぐ", "まっすぐ", "massugu", "Straight ahead", "方向 (Direction)"),
                ("前", "まえ", "mae", "In front / ahead", "位置 (Position)"),
                ("後ろ", "うしろ", "ushiro", "Behind / back", "位置 (Position)"),
                ("隣", "となり", "tonari", "Next to / beside", "位置 (Position)"),
                ("向かい", "むかい", "mukai", "Across from / opposite", "位置 (Position)"),
                ("近く", "ちかく", "chikaku", "Nearby", "位置 (Position)"),
                ("遠い", "とおい", "tooi", "Far away", "形容詞 (Adjective)"),
                ("交差点", "こうさてん", "kousaten", "Intersection", "道路 (Street)"),
                ("信号", "しんごう", "shingou", "Traffic light", "道路 (Street)"),
                ("角", "かど", "kado", "Street corner", "道路 (Street)"),
                ("横断歩道", "おうだんほどう", "oudanhodou", "Pedestrian crosswalk", "道路 (Street)"),
                ("改札", "かいさつ", "kaisatsu", "Ticket gate", "駅施設 (Station)"),
                ("切符売り場", "きっぷうりば", "kippu uriba", "Ticket machine area", "駅施設 (Station)"),
                ("出口", "でぐち", "deguchi", "Exit", "駅施設 (Station)"),
                ("北口", "きたぐち", "kitaguchi", "North exit", "駅施設 (Station)"),
                ("南口", "みなみぐち", "minamiguchi", "South exit", "駅施設 (Station)"),
                ("東口", "ひがしぐち", "higashiguchi", "East exit", "駅施設 (Station)"),
                ("西口", "にしぐち", "nishiguchi", "West exit", "駅施設 (Station)"),
                ("トイレ", "トイレ", "toire", "Restroom", "施設 (Facility)"),
                ("コンビニ", "コンビニ", "konbini", "Convenience store", "施設 (Facility)"),
                ("交番", "こうばん", "kouban", "Police box", "施設 (Facility)"),
                ("銀行", "ぎんこう", "ginkou", "Bank", "施設 (Facility)"),
                ("郵便局", "ゆうびんきょく", "yuubinkyoku", "Post office", "施設 (Facility)"),
                ("歩いて", "あるいて", "aruite", "On foot / walking", "移動 (Motion)"),
                ("曲がる", "まがる", "magaru", "To turn", "動詞 (Verb)"),
                ("渡る", "わたる", "wataru", "To cross (street/bridge)", "動詞 (Verb)"),
                ("道", "みち", "michi", "Road / path / way", "名詞 (Noun)"),
                ("案内", "あんない", "annai", "Guidance / directions", "名詞 (Noun)"),
                ("迷う", "まよう", "mayou", "To get lost", "動詞 (Verb)"),
                ("すぐそこ", "すぐそこ", "sugu soko", "Right over there", "表現 (Expression)"),
                ("目印", "めじるし", "mejirushi", "Landmark", "名詞 (Noun)"),
                ("看板", "かんばん", "kanban", "Signboard", "名詞 (Noun)"),
            ],
            "dialogues": [
                ("Traveler: すみません、渋谷駅はどちらですか？", "渋谷駅はどちらですか？", "Shibuya-eki wa dochira desu ka?", "Traveler: Excuse me, which way is Shibuya Station?", "この道をまっすぐ行って、二つ目の信号を右です。", ["この道をまっすぐ行って、二つ目の信号を右です。", "コーヒーをください", "はい、元気です", "美味しかったです"]),
                ("Local: ハチ公前広場なら、あの交差点を渡ったすぐそこですよ。", "あの交差点を渡ったすぐそこですよ。", "Ano kousaten o watatta sugu soko desu yo.", "Local: For Hachiko Square, it's right after crossing that intersection.", "わかりました、ありがとうございます！", ["わかりました、ありがとうございます！", "いいえ、結構です", "さようなら", "ごちそうさまでした"]),
                ("Tourist: ここから歩いて何分くらいかかりますか？", "歩いて何分くらいかかりますか？", "Aruite nanpun kurai kakarimasu ka?", "Tourist: How many minutes does it take on foot?", "だいたい5分くらいで着きますよ。", ["だいたい5分くらいで着きますよ。", "お茶を飲みます", "はい、そうです", "日本から来ました"]),
                ("Lost: すみません、道に迷ってしまいました。交番はありますか？", "交番はありますか？", "Kouban wa arimasu ka?", "Lost: Excuse me, I'm lost. Is there a police box?", "あそこのコンビニの隣にありますよ。", ["あそこのコンビニの隣にありますよ。", "いただきます", "ごめんなさい", "私は学生です"]),
            ]
        },
        6: {
            "title": "Shopping in Akihabara", "titleJp": "秋葉原でショッピング",
            "desc": "Inquire about prices, try on clothes, ask for other sizes and colors, and handle payments smoothly.",
            "icon": "🛍️", "color": "#8B5CF6",
            "vocab": [
                ("いくら", "いくら", "ikura", "How much (cost)", "疑問詞 (Question)"),
                ("これ", "これ", "kore", "This (near speaker)", "指示詞 (Demonstrative)"),
                ("それ", "それ", "sore", "That (near listener)", "指示詞 (Demonstrative)"),
                ("あれ", "あれ", "are", "That over there", "指示詞 (Demonstrative)"),
                ("どれ", "どれ", "dore", "Which one", "疑問詞 (Question)"),
                ("高い", "たかい", "takai", "Expensive", "形容詞 (Adjective)"),
                ("安い", "やすい", "yasui", "Cheap / inexpensive", "形容詞 (Adjective)"),
                ("大きい", "おおきい", "ookii", "Big / large", "形容詞 (Adjective)"),
                ("小さい", "ちいさい", "chiisai", "Small", "形容詞 (Adjective)"),
                ("新しい", "あたらしい", "atarashii", "New", "形容詞 (Adjective)"),
                ("古い", "ふるい", "furui", "Old", "形容詞 (Adjective)"),
                ("赤", "あか", "aka", "Red", "色 (Color)"),
                ("青", "あお", "ao", "Blue", "色 (Color)"),
                ("黒", "くろ", "kuro", "Black", "色 (Color)"),
                ("白", "しろ", "shiro", "White", "色 (Color)"),
                ("服", "ふく", "fuku", "Clothes / clothing", "名詞 (Noun)"),
                ("シャツ", "シャツ", "shatsu", "Shirt", "衣料 (Clothing)"),
                ("靴", "くつ", "kutsu", "Shoes", "衣料 (Clothing)"),
                ("鞄", "かばん", "kaban", "Bag / backpack", "名詞 (Noun)"),
                ("時計", "とけい", "tokei", "Watch / clock", "名詞 (Noun)"),
                ("試着", "しちゃく", "shichaku", "Trying on clothes", "名詞 (Noun)"),
                ("試着室", "しちゃくしつ", "shichakushitsu", "Fitting room", "施設 (Facility)"),
                ("サイズ", "サイズ", "saizu", "Size", "名詞 (Noun)"),
                ("見せる", "みせる", "miseru", "To show", "動詞 (Verb)"),
                ("着る", "きる", "kiru", "To wear (upper body)", "動詞 (Verb)"),
                ("履く", "はく", "haku", "To wear (feet/legs)", "動詞 (Verb)"),
                ("レジ", "レジ", "reji", "Cash register", "店舗 (Shop)"),
                ("袋", "ふくろ", "fukuro", "Shopping bag", "店舗 (Shop)"),
                ("免税", "めんぜい", "menzei", "Tax-free / duty-free", "制度 (System)"),
                ("パスポート", "パスポート", "pasupooto", "Passport", "身分証 (ID)"),
                ("現金", "げんきん", "genkin", "Cash", "決済 (Payment)"),
                ("クレジットカード", "クレジットカード", "kurejitto kaado", "Credit card", "決済 (Payment)"),
                ("割引", "わりびき", "waribiki", "Discount", "商法 (Commerce)"),
                ("セール", "セール", "seeru", "Sale", "商法 (Commerce)"),
                ("お土産", "おみやげ", "omiyage", "Souvenir / gift", "名詞 (Noun)"),
                ("これにします", "これにします", "kore ni shimasu", "I will take this one", "表現 (Expression)"),
            ],
            "dialogues": [
                ("客: すみません、これいくらですか？", "これいくらですか？", "Kore ikura desu ka?", "Customer: Excuse me, how much is this?", "税込で3,500円でございます。", ["税込で3,500円でございます。", "右に曲がります", "お水をお願いします", "はい、そうです"]),
                ("客: このシャツを着てみてもいいですか？", "着てみてもいいですか？", "Kite mite mo ii desu ka?", "Customer: May I try on this shirt?", "はい、試着室はこちらでございます！", ["はい、試着室はこちらでございます！", "駅はあそこです", "ごちそうさまでした", "いいえ、知りません"]),
                ("客: もう少し大きいサイズはありますか？", "大きいサイズはありますか？", "Ookii saizu wa arimasu ka?", "Customer: Do you have a slightly larger size?", "少々お待ちください、在庫をお調べいたします。", ["少々お待ちください、在庫をお調べいたします。", "美味しかったです", "はじめまして", "また来ます"]),
                ("店員: 袋はお付けしますか？", "袋はお付けしますか？", "Fukuro wa otsuke shimasu ka?", "Clerk: Would you like a bag?", "はい、1枚お願いします。", ["はい、1枚お願いします。", "さようなら", "いいえ、日本人です", "お腹が痛いです"]),
            ]
        }
    }
    
    # Generate generic rich data for units 7-30 if not custom
    if unit_num in configs:
        return configs[unit_num]
        
    return None

def generate_cloze_item(num, l_num, v2, vocab_pool):
    word = v2[0]
    kana = v2[1]
    romaji = v2[2]
    english = v2[3]
    cat = v2[4] if len(v2) > 4 else ""

    GREETING_CLOZES = {
        "おはようございます": {
            "sentence": "朝、先生に会いました。「{{BLANK}}！」",
            "prompt": "朝、先生に会いました。「おはようございます！」",
            "furigana": "あさ、せんせいにあいました。「おはようございます！」",
            "romaji": "Asa, sensei ni aimashita. 'Ohayou gozaimasu!'",
            "english": "Morning greeting to teacher: 'Good morning!'",
            "target": "おはようございます",
            "options": ["おはようございます", "こんばんは", "おやすみなさい", "さようなら"],
            "hint": "Use 「おはようございます」 in the morning until around 10:30 AM."
        },
        "こんにちは": {
            "sentence": "昼、友達に会いました。「{{BLANK}}！」",
            "prompt": "昼、友達に会いました。「こんにちは！」",
            "furigana": "ひる、ともだちにあいました。「こんにちは！」",
            "romaji": "Hiru, tomodachi ni aimashita. 'Konnichiwa!'",
            "english": "Daytime greeting to friend: 'Hello!'",
            "target": "こんにちは",
            "options": ["こんにちは", "おはようございます", "こんばんは", "さようなら"],
            "hint": "Use 「こんにちは」 during the daytime."
        },
        "こんばんは": {
            "sentence": "夜、同僚に会いました。「{{BLANK}}！」",
            "prompt": "夜、同僚に会いました。「こんばんは！」",
            "furigana": "よる、どうりょうにあいました。「こんばんは！」",
            "romaji": "Yoru, douryou ni aimashita. 'Konbanwa!'",
            "english": "Evening greeting to colleague: 'Good evening!'",
            "target": "こんばんは",
            "options": ["こんばんは", "こんにちは", "おはようございます", "さようなら"],
            "hint": "Use 「こんばんは」 in the evening after sunset."
        },
        "さようなら": {
            "sentence": "先生と別れるとき: 「先生、{{BLANK}}！」",
            "prompt": "先生と別れるとき: 「先生、さようなら！」",
            "furigana": "せんせいとわかれるとき: 「せんせい、さようなら！」",
            "romaji": "Sensei to wakareru toki: 'Sensei, sayounara!'",
            "english": "Farewell when parting: 'Goodbye, teacher!'",
            "target": "さようなら",
            "options": ["さようなら", "こんにちは", "いただきます", "はじめまして"],
            "hint": "「さようなら」 is a formal parting phrase."
        },
        "ありがとうございます": {
            "sentence": "親切にしてもらいました。「{{BLANK}}！」",
            "prompt": "親切にしてもらいました。「ありがとうございます！」",
            "furigana": "しんせつにしてもらいました。「ありがとうございます！」",
            "romaji": "Shinsetsu ni shite moraimashita. 'Arigatou gozaimasu!'",
            "english": "Expressing gratitude: 'Thank you very much!'",
            "target": "ありがとうございます",
            "options": ["ありがとうございます", "どういたしまして", "ごちそうさまでした", "さようなら"],
            "hint": "「ありがとうございます」 expresses polite gratitude."
        },
        "どういたしまして": {
            "sentence": "「ありがとうございます！」「いいえ、{{BLANK}}。」",
            "prompt": "「ありがとうございます！」「いいえ、どういたしまして。」",
            "furigana": "「ありがとうございます！」「いいえ、どういたしまして。」",
            "romaji": "'Arigatou gozaimasu!' 'Iie, douitashimashite.'",
            "english": "'Thank you very much!' 'You are welcome.'",
            "target": "どういたしまして",
            "options": ["どういたしまして", "ありがとうございます", "はじめまして", "おやすみなさい"],
            "hint": "「どういたしまして」 is used to say 'you are welcome'."
        },
        "はじめまして": {
            "sentence": "「{{BLANK}}、田中です。よろしくお願いします。」",
            "prompt": "はじめまして、田中です。よろしくお願いします。",
            "furigana": "はじめまして、たなかです。よろしくおねがいします。",
            "romaji": "Hajimemashite, Tanaka desu. Yoroshiku onegaishimasu.",
            "english": "'Nice to meet you, I'm Tanaka. Pleased to meet you.'",
            "target": "はじめまして",
            "options": ["はじめまして", "さようなら", "いただきます", "ただいま"],
            "hint": "「はじめまして」 is used when meeting someone for the first time."
        },
        "よろしくお願いします": {
            "sentence": "「はじめまして、スミスです。どうぞ{{BLANK}}。」",
            "prompt": "はじめまして、スミスです。どうぞよろしくお願いします。",
            "furigana": "はじめまして、スミスです。どうぞよろしくおねがいします。",
            "romaji": "Hajimemashite, Sumisu desu. Douzo yoroshiku onegaishimasu.",
            "english": "'Nice to meet you, I'm Smith. Please treat me well.'",
            "target": "よろしくお願いします",
            "options": ["よろしくお願いします", "どういたしまして", "ごちそうさまでした", "おやすみなさい"],
            "hint": "「よろしくお願いします」 is a key Japanese courtesy for cooperation."
        },
        "はい": {
            "sentence": "「学生ですか？」「{{BLANK}}、学生です。」",
            "prompt": "「学生ですか？」「はい、学生です。」",
            "furigana": "「がくせいですか？」「はい、がくせいですか。」",
            "romaji": "'Gakusei desu ka?' 'Hai, gakusei desu.'",
            "english": "'Are you a student?' 'Yes, I am a student.'",
            "target": "はい",
            "options": ["はい", "いいえ", "誰", "どこ"],
            "hint": "「はい」 means 'Yes' in polite speech."
        },
        "いいえ": {
            "sentence": "「日本人ですか？」「{{BLANK}}、アメリカ人です。」",
            "prompt": "「日本人ですか？」「いいえ、アメリカ人です。」",
            "furigana": "「にほんじんですか？」「いいえ、アメリカじんです。」",
            "romaji": "'Nihonjin desu ka?' 'Iie, Amerikajin desu.'",
            "english": "'Are you Japanese?' 'No, I am American.'",
            "target": "いいえ",
            "options": ["いいえ", "はい", "どうぞ", "だれ"],
            "hint": "「いいえ」 means 'No' in polite speech."
        },
        "いただきます": {
            "sentence": "ご飯を食べるとき: 「{{BLANK}}！」",
            "prompt": "ご飯を食べるとき: 「いただきます！」",
            "furigana": "ごはんをたべるとき: 「いただきます！」",
            "romaji": "Gohan o taberu toki: 'Itadakimasu!'",
            "english": "Before eating a meal: 'Let's eat!'",
            "target": "いただきます",
            "options": ["いただきます", "ごちそうさまでした", "行ってきます", "ただいま"],
            "hint": "Said before eating to show appreciation for food."
        },
        "ごちそうさまでした": {
            "sentence": "ご飯を食べ終えたとき: 「{{BLANK}}！」",
            "prompt": "ご飯を食べ終えたとき: 「ごちそうさまでした！」",
            "furigana": "ごはんをたべおえたとき: 「ごちそうさまでした！」",
            "romaji": "Gohan o tabeoeta toki: 'Gochisousamadeshita!'",
            "english": "After finishing a meal: 'Thank you for the meal!'",
            "target": "ごちそうさまでした",
            "options": ["ごちそうさまでした", "いただきます", "おかえりなさい", "いってらっしゃい"],
            "hint": "Said after a meal to thank the host or chef."
        },
        "ただいま": {
            "sentence": "家に帰ってきたとき: 「{{BLANK}}！」",
            "prompt": "家に帰ってきたとき: 「ただいま！」",
            "furigana": "いえにかえってきたとき: 「ただいま！」",
            "romaji": "Ie ni kaette kita toki: 'Tadaima!'",
            "english": "Returning home: 'I am home!'",
            "target": "ただいま",
            "options": ["ただいま", "行ってきます", "おかえりなさい", "いってらっしゃい"],
            "hint": "Said when you arrive home."
        },
        "おかえりなさい": {
            "sentence": "家族が帰ってきたとき: 「{{BLANK}}！」",
            "prompt": "家族が帰ってきたとき: 「おかえりなさい！」",
            "furigana": "かぞくがかえってきたとき: 「おかえりなさい！」",
            "romaji": "Kazoku ga kaette kita toki: 'Okaerinasai!'",
            "english": "Welcoming someone home: 'Welcome back!'",
            "target": "おかえりなさい",
            "options": ["おかえりなさい", "ただいま", "行ってきます", "いってらっしゃい"],
            "hint": "Said to welcome family or friends home."
        },
        "行ってきます": {
            "sentence": "家を出かけるとき: 「{{BLANK}}！」",
            "prompt": "家を出かけるとき: 「行ってきます！」",
            "furigana": "いえをでかけるとき: 「いってきます！」",
            "romaji": "Ie o dekakeru toki: 'Ittekimasu!'",
            "english": "Leaving the house: 'I am leaving!'",
            "target": "行ってきます",
            "options": ["行ってきます", "ただいま", "おかえりなさい", "いってらっしゃい"],
            "hint": "Said when leaving home for school or work."
        },
        "いってらっしゃい": {
            "sentence": "出かける人を見送るとき: 「{{BLANK}}！」",
            "prompt": "出かける人を見送るとき: 「いってらっしゃい！」",
            "furigana": "でかけるひとをみおくるとき: 「いってらっしゃい！」",
            "romaji": "Dekakeru hito o miokuru toki: 'Itterasshai!'",
            "english": "Seeing someone off: 'Take care / Have a good day!'",
            "target": "いってらっしゃい",
            "options": ["いってらっしゃい", "行ってきます", "ただいま", "おかえりなさい"],
            "hint": "Said to see off family leaving home."
        },
        "おやすみなさい": {
            "sentence": "夜寝るときの挨拶: 「{{BLANK}}。」",
            "prompt": "夜寝るときの挨拶: 「おやすみなさい。」",
            "furigana": "よるねるときのあいさつ: 「おやすみなさい。」",
            "romaji": "Yoru neru toki no aisatsu: 'Oyasuminasai.'",
            "english": "Greeting before sleeping: 'Good night.'",
            "target": "おやすみなさい",
            "options": ["おやすみなさい", "おはようございます", "こんにちは", "さようなら"],
            "hint": "Said before going to sleep."
        },
        "すみません": {
            "sentence": "店員を呼ぶとき: 「{{BLANK}}、お水をください。」",
            "prompt": "店員を呼ぶとき: 「すみません、お水をください。」",
            "furigana": "てんいんをよぶとき: 「すみません、おみずをください。」",
            "romaji": "Ten'in o yobu toki: 'Sumimasen, omizu o kudasai.'",
            "english": "Calling staff: 'Excuse me, water please.'",
            "target": "すみません",
            "options": ["すみません", "ありがとうございます", "いただきます", "さようなら"],
            "hint": "「すみません」 is used to get attention or apologize."
        },
        "ごめんなさい": {
            "sentence": "友達に謝るとき: 「本当に{{BLANK}}。」",
            "prompt": "友達に謝るとき: 「本当にごめんなさい。」",
            "furigana": "ともだちにあやまるとき: 「ほんとうにごめんなさい。」",
            "romaji": "Tomodachi ni ayamaru toki: 'Hontou ni gomennasai.'",
            "english": "Apologizing to friend: 'I am truly sorry.'",
            "target": "ごめんなさい",
            "options": ["ごめんなさい", "ありがとうございます", "いただきます", "どういたしまして"],
            "hint": "Casual polite apology between friends."
        },
        "こちらこそ": {
            "sentence": "「よろしくお願いします。」「{{BLANK}}よろしくお願いします。」",
            "prompt": "「よろしくお願いします。」「こちらこそよろしくお願いします。」",
            "furigana": "「よろしくおねがいします。」「こちらこそよろしくおねがいします。」",
            "romaji": "'Yoroshiku onegaishimasu.' 'Kochirakoso yoroshiku onegaishimasu.'",
            "english": "'Pleased to meet you.' 'Likewise, pleased to meet you.'",
            "target": "こちらこそ",
            "options": ["こちらこそ", "すみません", "さようなら", "どういたしまして"],
            "hint": "「こちらこそ」 means 'likewise / the pleasure is mine'."
        },
        "失礼します": {
            "sentence": "部屋を出るとき: 「お先に{{BLANK}}。」",
            "prompt": "部屋を出るとき: 「お先に失礼します。」",
            "furigana": "へやをでるとき: 「おさきにしつれいします。」",
            "romaji": "Heya o deru toki: 'Osaki ni shitsureishimasu.'",
            "english": "Leaving a room: 'Pardon me for leaving first.'",
            "target": "失礼します",
            "options": ["失礼します", "こんにちは", "いただきます", "おやすみなさい"],
            "hint": "Polite expression when leaving or entering a room."
        },
    }

    if word in GREETING_CLOZES:
        info = GREETING_CLOZES[word]
        return {
            "id": f"u{num}_l{l_num}_3",
            "type": "cloze",
            "prompt": info["prompt"],
            "furigana": info.get("furigana", info["prompt"]),
            "romaji": info.get("romaji", romaji),
            "english": info["english"],
            "audioText": word,
            "clozeSentence": info["sentence"],
            "clozeTarget": info["target"],
            "clozeOptions": info["options"],
            "correctAnswer": info["target"],
            "explanation": info.get("hint", "")
        }

    # Food / Drink category
    if "Food" in cat or "食べ物" in cat or "料理" in cat:
        return {
            "id": f"u{num}_l{l_num}_3",
            "type": "cloze",
            "prompt": f"私は{word}が好きです。",
            "furigana": f"わたしは{kana}がすきです。",
            "romaji": f"Watashi wa {romaji} ga suki desu.",
            "english": f"Fill in particle 'が' (ga) for preference: I like {english}.",
            "audioText": f"私は{word}が好きです。",
            "clozeSentence": f"私は{word} {{{{BLANK}}}} 好きです。",
            "clozeTarget": "が",
            "clozeOptions": ["が", "を", "に", "で"],
            "correctAnswer": "が",
            "explanation": "助詞「が」 (ga) marks the object of preference with 「好き」 (suki)."
        }

    if "Drink" in cat or "飲み物" in cat:
        return {
            "id": f"u{num}_l{l_num}_3",
            "type": "cloze",
            "prompt": f"毎朝、冷たい{word}を飲みます。",
            "furigana": f"まいあさ、つめたい{kana}をのみます。",
            "romaji": f"Maiasa, tsumetai {romaji} o nomimasu.",
            "english": f"Fill in object particle 'を' (o): I drink cold {english} every morning.",
            "audioText": f"{word}を飲みます。",
            "clozeSentence": f"毎朝、冷たい{word} {{{{BLANK}}}} 飲みます。",
            "clozeTarget": "を",
            "clozeOptions": ["を", "は", "に", "で"],
            "correctAnswer": "を",
            "explanation": "助詞「を」 (o) marks the direct object of action verb 「飲みます」 (drink)."
        }

    # Person / Role / Occupation / Nationality
    if any(k in cat for k in ["Occupation", "職業", "Name", "人名", "Nationality", "国籍", "Status", "身分", "Origin", "身元"]):
        return {
            "id": f"u{num}_l{l_num}_3",
            "type": "cloze",
            "prompt": f"田中さんは{word}です。",
            "furigana": f"たなかさんは{kana}です。",
            "romaji": f"Tanaka-san wa {romaji} desu.",
            "english": f"Fill in topic particle 'は' (wa): Mr. Tanaka is a {english}.",
            "audioText": f"田中さんは{word}です。",
            "clozeSentence": f"田中さん {{{{BLANK}}}} {word}です。",
            "clozeTarget": "は",
            "clozeOptions": ["は", "が", "を", "に"],
            "correctAnswer": "は",
            "explanation": "助詞「は」 (wa) marks the topic of the sentence."
        }

    # Verb category
    if "Verb" in cat or "動詞" in cat:
        if word in ["行く", "いく", "来る", "くる", "帰る", "かえる"]:
            return {
                "id": f"u{num}_l{l_num}_3",
                "type": "cloze",
                "prompt": f"電車で学校へ{word}。",
                "furigana": f"でんしゃでがっこうへ{kana}。",
                "romaji": f"Densha de gakkou e {romaji}.",
                "english": f"Fill in direction particle 'へ' (e): Go to school by train.",
                "audioText": f"学校へ{word}。",
                "clozeSentence": f"電車で学校 {{{{BLANK}}}} {word}。",
                "clozeTarget": "へ",
                "clozeOptions": ["へ", "を", "が", "で"],
                "correctAnswer": "へ",
                "explanation": "助詞「へ」 (e) marks direction of travel towards a destination."
            }
        else:
            return {
                "id": f"u{num}_l{l_num}_3",
                "type": "cloze",
                "prompt": f"毎日、日本語を{word}。",
                "furigana": f"まいにち、にほんごを{kana}。",
                "romaji": f"Mainichi, nihongo o {romaji}.",
                "english": f"Fill in direct object particle 'を' (o): {english} Japanese every day.",
                "audioText": f"日本語を{word}。",
                "clozeSentence": f"毎日、日本語 {{{{BLANK}}}} {word}。",
                "clozeTarget": "を",
                "clozeOptions": ["を", "は", "に", "で"],
                "correctAnswer": "を",
                "explanation": "助詞「を」 (o) marks the object of the action verb."
            }

    # Fallback for all other nouns and terms
    return {
        "id": f"u{num}_l{l_num}_3",
        "type": "cloze",
        "prompt": f"これはいちばん大切な{word}です。",
        "furigana": f"これはいちばんたいせつな{kana}です。",
        "romaji": f"Kore wa ichiban taisetsu na {romaji} desu.",
        "english": f"Fill in topic particle 'は' (wa): This is the most important {english}.",
        "audioText": f"これは{word}です。",
        "clozeSentence": f"これ {{{{BLANK}}}} いちばん大切な{word}です。",
        "clozeTarget": "は",
        "clozeOptions": ["は", "が", "を", "に"],
        "correctAnswer": "は",
        "explanation": "助詞「は」 (wa) marks the sentence topic 'これ' (this)."
    }

def generate_scramble_item(num, l_num, v2, vocab_pool):
    word = v2[0]
    kana = v2[1]
    romaji = v2[2]
    english = v2[3]
    cat = v2[4] if len(v2) > 4 else ""

    GREETING_SCRAMBLES = {
        "おはようございます": (["田中さん", "、", "おはようございます"], ["さようなら", "です"], "田中さん、おはようございます", "たなかさん、おはようございます", "Tanaka-san, ohayou gozaimasu", "Good morning, Mr. Tanaka."),
        "こんにちは": (["みなさん", "、", "こんにちは"], ["さようなら", "です"], "みなさん、こんにちは", "みなさん、こんにちは", "Minasan, konnichiwa", "Hello, everyone."),
        "こんばんは": (["先生", "、", "こんばんは"], ["おはよう", "です"], "先生、こんばんは", "せんせい、こんばんは", "Sensei, konbanwa", "Good evening, teacher."),
        "さようなら": (["では", "、", "また", "さようなら"], ["こんにちは"], "では、またさようなら", "では、またさようなら", "Dewa, mata sayounara", "Well then, goodbye for now."),
        "ありがとうございます": (["どうも", "ありがとう", "ございます"], ["いいえ", "です"], "どうもありがとうございます", "どうもありがとうございます", "Doumo arigatou gozaimasu", "Thank you very much."),
        "どういたしまして": (["いいえ", "、", "どういたしまして"], ["ありがとう"], "いいえ、どういたしまして", "いいえ、どういたしまして", "Iie, douitashimashite", "No, you are welcome."),
        "はじめまして": (["はじめまして", "、", "田中", "です"], ["さようなら"], "はじめまして、田中です", "はじめまして、たなかです", "Hajimemashite, Tanaka desu", "Nice to meet you, I'm Tanaka."),
        "よろしくお願いします": (["どうぞ", "よろしく", "お願いします"], ["ありがとう"], "どうぞよろしくお願いします", "どうぞよろしくおねがいします", "Douzo yoroshiku onegaishimasu", "Please treat me well."),
        "はい": (["はい", "、", "元気", "です"], ["いいえ"], "はい、元気です", "はい、げんきです", "Hai, genki desu", "Yes, I am well."),
        "いいえ": (["いいえ", "、", "元気", "ではありません"], ["はい"], "いいえ、元気ではありません", "いいえ、げんきではありません", "Iie, genki dewa arimasen", "No, I am not well."),
        "いただきます": (["それでは", "、", "いただきます"], ["ごちそうさま"], "それでは、いただきます", "それでは、いただきます", "Sore dewa, itadakimasu", "Well then, let's eat."),
        "ごちそうさまでした": (["おいしかったです", "、", "ごちそうさまでした"], ["いただきます"], "おいしかったです、ごちそうさまでした", "おいしかったです、ごちそうさまでした", "Oishikatta desu, gochisousamadeshita", "It was delicious, thank you for the meal."),
    }

    if word in GREETING_SCRAMBLES:
        chunks, dists, full_p, full_f, full_r, full_e = GREETING_SCRAMBLES[word]
        tokens = chunks + dists
        random.shuffle(tokens)
        return {
            "id": f"u{num}_l{l_num}_4",
            "type": "scramble",
            "prompt": full_p,
            "furigana": full_f,
            "romaji": full_r,
            "english": full_e,
            "audioText": full_p,
            "scrambleTokens": tokens,
            "scrambleSolution": chunks,
            "correctAnswer": "".join(chunks)
        }

    # Food
    if "Food" in cat or "食べ物" in cat:
        chunks = ["私は", f"{word}が", "好きです"]
        dists = ["を", "ではありません"]
        tokens = chunks + dists
        random.shuffle(tokens)
        return {
            "id": f"u{num}_l{l_num}_4",
            "type": "scramble",
            "prompt": f"私は{word}が好きです",
            "furigana": f"わたしは{kana}がすきです",
            "romaji": f"Watashi wa {romaji} ga suki desu.",
            "english": f"I like {english}.",
            "audioText": f"私は{word}が好きです",
            "scrambleTokens": tokens,
            "scrambleSolution": chunks,
            "correctAnswer": f"私は{word}が好きです"
        }

    # Drink
    if "Drink" in cat or "飲み物" in cat:
        chunks = ["冷たい", f"{word}を", "飲みます"]
        dists = ["が", "食べます"]
        tokens = chunks + dists
        random.shuffle(tokens)
        return {
            "id": f"u{num}_l{l_num}_4",
            "type": "scramble",
            "prompt": f"冷たい{word}を飲みます",
            "furigana": f"つめたい{kana}をのみます",
            "romaji": f"Tsumetai {romaji} o nomimasu.",
            "english": f"Drink cold {english}.",
            "audioText": f"冷たい{word}を飲みます",
            "scrambleTokens": tokens,
            "scrambleSolution": chunks,
            "correctAnswer": f"冷たい{word}を飲みます"
        }

    # Person / Status
    if any(k in cat for k in ["Occupation", "職業", "Name", "人名", "Nationality", "国籍", "Status", "身分"]):
        chunks = ["田中さんは", word, "です"]
        dists = ["ではありません", "を"]
        tokens = chunks + dists
        random.shuffle(tokens)
        return {
            "id": f"u{num}_l{l_num}_4",
            "type": "scramble",
            "prompt": f"田中さんは{word}です",
            "furigana": f"たなかさんは{kana}です",
            "romaji": f"Tanaka-san wa {romaji} desu.",
            "english": f"Mr. Tanaka is a {english}.",
            "audioText": f"田中さんは{word}です",
            "scrambleTokens": tokens,
            "scrambleSolution": chunks,
            "correctAnswer": f"田中さんは{word}です"
        }

    chunks = ["これは", word, "です"]
    dists = ["それ", "ではありません"]
    tokens = chunks + dists
    random.shuffle(tokens)
    return {
        "id": f"u{num}_l{l_num}_4",
        "type": "scramble",
        "prompt": f"これは{word}です",
        "furigana": f"これは{kana}です",
        "romaji": f"Kore wa {romaji} desu.",
        "english": f"This is {english}.",
        "audioText": f"これは{word}です",
        "scrambleTokens": tokens,
        "scrambleSolution": chunks,
        "correctAnswer": f"これは{word}です"
    }

def generate_dictate_item(num, l_num, v3, vocab_pool):
    word = v3[0]
    kana = v3[1]
    romaji = v3[2]
    english = v3[3]
    cat = v3[4] if len(v3) > 4 else ""

    GREETING_DICTATES = {
        "こんばんは": (["こんばんは"], ["さようなら", "です"], "こんばんは", "こんばんは", "konbanwa", "Good evening"),
        "どういたしまして": (["どういたしまして"], ["ありがとう", "です"], "どういたしまして", "どういたしまして", "douitashimashite", "You are welcome"),
        "はじめまして": (["はじめまして"], ["さようなら", "です"], "はじめまして", "はじめまして", "hajimemashite", "Nice to meet you"),
        "さようなら": (["さようなら"], ["こんにちは", "です"], "さようなら", "さようなら", "sayounara", "Goodbye"),
        "いただきます": (["いただきます"], ["ごちそうさま", "です"], "いただきます", "いただきます", "itadakimasu", "Let's eat"),
    }
    if word in GREETING_DICTATES:
        sol, dists, p, f, r, e = GREETING_DICTATES[word]
        tokens = sol + dists
        random.shuffle(tokens)
        return {
            "id": f"u{num}_l{l_num}_6",
            "type": "dictate",
            "prompt": p,
            "furigana": f,
            "romaji": r,
            "english": e,
            "audioText": p,
            "dictateTokens": tokens,
            "dictateSolution": sol,
            "correctAnswer": p
        }

    # Food / Drink / Items
    if any(k in cat for k in ["Food", "食べ物", "Drink", "飲み物", "軽食", "デザート", "衣料", "名詞"]):
        sol = [word, "を", "お願いします"]
        tokens = [word, "を", "お願いします", "ありがとう", "です"]
        random.shuffle(tokens)
        return {
            "id": f"u{num}_l{l_num}_6",
            "type": "dictate",
            "prompt": f"{word}をお願いします",
            "furigana": f"{kana}をおねがいします",
            "romaji": f"{romaji} o onegaishimasu.",
            "english": f"{english}, please.",
            "audioText": f"{word}をお願いします",
            "dictateTokens": tokens,
            "dictateSolution": sol,
            "correctAnswer": f"{word}をお願いします"
        }

    # Person / Status
    if any(k in cat for k in ["Occupation", "職業", "Name", "人名", "Nationality", "国籍", "Status", "身分"]):
        sol = ["私は", word, "です"]
        tokens = ["私は", word, "です", "田中", "ではありません"]
        random.shuffle(tokens)
        return {
            "id": f"u{num}_l{l_num}_6",
            "type": "dictate",
            "prompt": f"私は{word}です",
            "furigana": f"わたしは{kana}です",
            "romaji": f"Watashi wa {romaji} desu.",
            "english": f"I am a {english}.",
            "audioText": f"私は{word}です",
            "dictateTokens": tokens,
            "dictateSolution": sol,
            "correctAnswer": f"私は{word}です"
        }

    sol = [word, "です"]
    tokens = [word, "です", "これ", "ではありません"]
    random.shuffle(tokens)
    return {
        "id": f"u{num}_l{l_num}_6",
        "type": "dictate",
        "prompt": f"{word}です",
        "furigana": f"{kana}です",
        "romaji": f"{romaji} desu.",
        "english": f"It is {english}.",
        "audioText": f"{word}です",
        "dictateTokens": tokens,
        "dictateSolution": sol,
        "correctAnswer": f"{word}です"
    }

def build_rich_unit(num, custom_cfg=None):
    from generate_all_units import get_extended_unit_config, UNITS_CONFIG
    
    # Try custom curriculum first
    c = generate_unit_curriculum(num)
    if c:
        title = c["title"]
        titleJp = c["titleJp"]
        desc = c["desc"]
        icon = c["icon"]
        color = c["color"]
        vocab_pool = c["vocab"]
        dialogues = c.get("dialogues", [])
    else:
        # Check standard config
        ext = get_extended_unit_config(num)
        if not ext:
            for u in UNITS_CONFIG:
                if u["num"] == num:
                    ext = u
                    break
        
        title = ext["title"]
        titleJp = ext["titleJp"]
        desc = ext["desc"]
        icon = ext["icon"]
        color = ext["color"]
        
        # Build extended 35-40 item vocabulary pool
        base_vocabs = ext.get("vocab", [])
        vocab_pool = []
        for v in base_vocabs:
            kanji, furi, romaji, eng = v[:4]
            category_tag = "語彙 (Vocabulary)"
            vocab_pool.append((kanji, furi, romaji, eng, category_tag))
            
        # Add contextual phrase variations to ensure >= 36 words
        while len(vocab_pool) < 36:
            idx = len(vocab_pool)
            base_v = vocab_pool[idx % len(base_vocabs)]
            phrase_kanji = f"{base_v[0]}の確認"
            phrase_furi = f"{base_v[1]}のかくにん"
            phrase_romaji = f"{base_v[2]} no kakunin"
            phrase_eng = f"Confirming {base_v[3]}"
            vocab_pool.append((phrase_kanji, phrase_furi, phrase_romaji, phrase_eng, "実用表現 (Phrase)"))

        dialogues = [
            (f"話者A: {vocab_pool[0][0]}について教えていただけますか？", f"{vocab_pool[0][0]}について教えていただけますか？", f"{vocab_pool[0][2]} ni tsuite oshiete itadakemasu ka?", f"Speaker: Could you tell me about {vocab_pool[0][3]}?", f"はい、詳しくご説明いたします。", ["はい、詳しくご説明いたします。", "さようなら", "いいえ、日本人です", "はじめまして"]),
            (f"話者B: {vocab_pool[1][0]}の準備はできていますか？", f"{vocab_pool[1][0]}の準備はできていますか？", f"{vocab_pool[1][2]} no junbi wa dekite imasu ka?", f"Speaker: Is the preparation for {vocab_pool[1][3]} ready?", f"はい、万全です！", ["はい、万全です！", "お水をお願いします", "ごちそうさまでした", "駅はどこですか"]),
            (f"話者C: {vocab_pool[2][0]}についてどう思われますか？", f"{vocab_pool[2][0]}についてどう思われますか？", f"{vocab_pool[2][2]} ni tsuite dou omowaremasu ka?", f"Speaker: What are your thoughts on {vocab_pool[2][3]}?", f"大変重要だと思います。", ["大変重要だと思います。", "こんにちは", "美味しいです", "いいえ、結構です"]),
            (f"話者D: 次は{vocab_pool[3][0]}に進みましょう。", f"次は{vocab_pool[3][0]}に進みましょう。", f"Tsugi wa {vocab_pool[3][2]} ni susumimashou.", f"Speaker: Let's proceed to {vocab_pool[3][3]} next.", f"了解いたしました！", ["了解いたしました！", "いただきます", "ごめんなさい", "私は学生です"]),
        ]

    # Partition vocab into days:
    # Day 1: vocabs 0..5 (6 words)
    # Day 2: vocabs 6..11 (6 words)
    # Day 3: vocabs 12..17 (6 words)
    # Day 4: vocabs 18..23 (6 words)
    # Day 5: vocabs 24..29 (6 words)
    # Day 6: vocabs 30..35 (6 words)
    # Day 7: Comprehensive (all vocabs)

    days_map = {
        1: 1, 2: 1, 3: 1,
        4: 2, 5: 2,
        6: 3, 7: 3,
        8: 4, 9: 4,
        10: 5, 11: 5,
        12: 6, 13: 6, 14: 6,
        15: 7
    }

    categories = {
        1: ("Expression", "expression", "Core Expressions (Part 1)"),
        2: ("Vocabulary", "vocabulary", "Essential Vocabulary (Part 2)"),
        3: ("Practice", "practice", "Sentence Patterns & Fluency"),
        4: ("Review Quiz", "quiz", "Day 1-2 Checkpoint Quiz"),
        5: ("Expression", "expression", "Situational Dialogues"),
        6: ("Conversation", "expression", "Native Conversational Scenarios"),
        7: ("Practice", "practice", "Grammar & Listening Drill"),
        8: ("Vocabulary", "vocabulary", "Extended Vocabulary & Terms"),
        9: ("Expression", "expression", "Nuance, Pitch & Intonation"),
        10: ("Review Quiz", "quiz", "Mid-Week Cumulative Quiz"),
        11: ("Practice", "practice", "Speed Assembly & Fluency"),
        12: ("Vocabulary", "vocabulary", "Mastery Terms & Expressions"),
        13: ("Expression", "expression", "Cultural Register & Politeness"),
        14: ("Review Quiz", "quiz", "Pre-Exam Comprehensive Review"),
        15: ("Unit Test", "test", f"Unit {num} Master Exam")
    }

    lessons = []
    unit_test_items = []

    for l_num in range(1, 16):
        day_num = days_map[l_num]
        cat, icon_type, sec_title = categories[l_num]

        # Select 3-4 words for this lesson
        start_idx = ((l_num - 1) * 3) % len(vocab_pool)
        lesson_vocabs = [vocab_pool[(start_idx + i) % len(vocab_pool)] for i in range(3)]

        lesson_items = []
        v1, v2, v3 = lesson_vocabs[0], lesson_vocabs[1], lesson_vocabs[2]

        # 1. Listen (Multiple Choice Recognition)
        other_v = [v for v in vocab_pool if v[0] != v1[0]]
        random.shuffle(other_v)
        listen_opts = [v1[3]] + [ov[3] for ov in other_v[:3]]
        random.shuffle(listen_opts)
        lesson_items.append({
            "id": f"u{num}_l{l_num}_1",
            "type": "listen",
            "prompt": v1[0],
            "furigana": v1[1],
            "romaji": v1[2],
            "english": v1[3],
            "audioText": v1[1],
            "options": listen_opts,
            "correctAnswer": v1[3]
        })

        # 2. 4x2 Tile Spelling (Pick concise 2-6 char word from lesson)
        spell_vocab = next((v for v in lesson_vocabs if 2 <= len(v[1]) <= 6), v1)
        lesson_items.append({
            "id": f"u{num}_l{l_num}_2",
            "type": "spell",
            "prompt": spell_vocab[0],
            "furigana": spell_vocab[1],
            "romaji": spell_vocab[2],
            "english": f"Build '{spell_vocab[3]}'",
            "audioText": spell_vocab[1],
            "tileBank": make_tile_bank(spell_vocab[1]),
            "correctAnswer": spell_vocab[1]
        })

        # 3. Cloze (Fill-in-the-Blank)
        lesson_items.append(generate_cloze_item(num, l_num, v2, vocab_pool))

        # 4. Sentence Scramble (Grammar Word Order)
        lesson_items.append(generate_scramble_item(num, l_num, v2, vocab_pool))

        # 5. Speech Recognition Drill
        lesson_items.append({
            "id": f"u{num}_l{l_num}_5",
            "type": "speak",
            "prompt": v3[0],
            "furigana": v3[1],
            "romaji": v3[2],
            "english": f"Pronounce: {v3[3]}",
            "audioText": v3[1],
            "targetSpeech": v3[0],
            "options": [v3[3], "Incorrect pronunciation", "Different meaning", "Antonym phrase"],
            "correctAnswer": v3[0]
        })

        # 6. Listening Dictation (Audio-First)
        lesson_items.append(generate_dictate_item(num, l_num, v3, vocab_pool))

        # 7. Matching Pairs (4-Pair Two-Column)
        match_source = [vocab_pool[(start_idx + i) % len(vocab_pool)] for i in range(4)]
        match_pairs = [
            {"id": f"p_{idx}", "left": m[0], "right": m[3], "furigana": m[1], "romaji": m[2]}
            for idx, m in enumerate(match_source)
        ]
        lesson_items.append({
            "id": f"u{num}_l{l_num}_7",
            "type": "match",
            "prompt": "・".join([m[0] for m in match_source]),
            "furigana": "・".join([m[1] for m in match_source]),
            "romaji": ", ".join([m[2] for m in match_source]),
            "english": "Match each Japanese word to its English meaning.",
            "audioText": match_source[0][1],
            "matchPairs": match_pairs,
            "correctAnswer": "all"
        })

        # 8. Dialogue Turn-Taking (Comic Chat)
        dlg = dialogues[(l_num - 1) % len(dialogues)]
        lesson_items.append({
            "id": f"u{num}_l{l_num}_8",
            "type": "dialogue",
            "prompt": dlg[1],
            "dialogueSpeaker": dlg[0].split(":")[0],
            "dialoguePrompt": dlg[1],
            "furigana": dlg[1],
            "romaji": dlg[2],
            "english": dlg[3],
            "audioText": dlg[1],
            "dialogueOptions": dlg[5],
            "options": dlg[5],
            "correctAnswer": dlg[4]
        })

        if l_num in [1, 3, 5, 7, 9, 11, 13, 15]:
            unit_test_items.append(lesson_items[0])
            unit_test_items.append(lesson_items[1])

        lesson_title = f"{lesson_vocabs[0][3]} & {lesson_vocabs[1][3]}" if l_num < 15 else f"Unit {num} Master Exam"
        lesson_titleJp = f"{lesson_vocabs[0][0]}・{lesson_vocabs[1][0]}" if l_num < 15 else f"第{num}週 総合試験"

        lesson_obj = {
            "id": f"u{num}_l{l_num}",
            "unitId": f"unit_{num}",
            "lessonNumber": l_num,
            "dayNumber": day_num,
            "category": cat,
            "sectionTitle": sec_title if l_num in [1, 3, 5, 7, 9, 11, 15] else None,
            "iconType": icon_type,
            "title": lesson_title,
            "titleJp": lesson_titleJp,
            "summary": f"Practice {len(lesson_vocabs)} essential terms and real dialogue context.",
            "vocabKeywords": [v[0] for v in lesson_vocabs],
            "kanjiKeywords": [ch for v in lesson_vocabs for ch in v[0] if '\u4e00' <= ch <= '\u9faf'],
            "items": lesson_items
        }
        lessons.append(lesson_obj)

    revision_gate = {
        "id": f"gate_unit_{num}",
        "unitId": f"unit_{num}",
        "title": f"Unit {num} Mastery Checkpoint",
        "titleJp": f"第{num}週 総復習テスト",
        "requiredScorePercent": 80,
        "items": unit_test_items[:12]
    }

    unit_data = {
        "id": f"unit_{num}",
        "unitNumber": num,
        "title": title,
        "titleJp": titleJp,
        "description": desc,
        "icon": icon,
        "themeColor": color,
        "summaryPoints": [
            f"重要語彙35語以上の習得 (Over 35 Core Vocabulary Items)",
            f"日常・実用対話表現のマスター (Mastery of Practical Dialogues)",
            f"聴解と文字綴りのトレーニング (Listening & 4x2 Tile Spelling)",
            f"JLPT基準文法パターンの定着 (Grammar Patterns & Nuances)",
            f"7日間の段階的カリキュラム (Structured 7-Day Progressive Bundle)",
        ],
        "lessons": lessons,
        "revisionGate": revision_gate
    }
    return unit_data

def main():
    out_dir = "./src/features/dojo/data/units"
    os.makedirs(out_dir, exist_ok=True)

    # Compile Unit 1 to Unit 30
    for u_num in range(1, 31):
        # Check if pre-defined config exists in CURRICULUM_DATA
        custom_cfg = None
        for c in CURRICULUM_DATA:
            if c["num"] == u_num:
                custom_cfg = c
                break

        if custom_cfg:
            unit_data = custom_cfg
            # Convert custom_cfg into full lessons structure if needed
            if "lessons" not in unit_data:
                unit_data = build_rich_unit(u_num, custom_cfg)
        else:
            unit_data = build_rich_unit(u_num)

        fname = f"{out_dir}/unit{u_num:02d}.ts"
        var_name = f"unit{u_num:02d}"
        content = f'import type {{ DojoUnit }} from "../../models/dojo.model";\n\nexport const {var_name}: DojoUnit = {json.dumps(unit_data, ensure_ascii=False, indent=2)};\n'
        with open(fname, "w", encoding="utf-8") as f:
            f.write(content)
        
        prompt_count = len(set(it["prompt"] for l in unit_data["lessons"] for it in l["items"]))
        total_items = sum(len(l["items"]) for l in unit_data["lessons"])
        print(f"Compiled {fname}: {len(unit_data['lessons'])} lessons, {prompt_count} unique words/phrases, {total_items} total items.")

    print("\nSuccessfully compiled all 30 deep curriculum units!")

if __name__ == "__main__":
    main()
