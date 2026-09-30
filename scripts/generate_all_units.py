import os
import json

# Unit definitions metadata from Unit 4 to Unit 30
UNITS_CONFIG = [
    # --- JLPT N5 (Weeks 4-6) ---
    {
        "num": 4,
        "title": "Tokyo Café & Ordering",
        "titleJp": "東京のカフェで注文",
        "desc": "Master ordering drinks and treats, using counters, and asking for the bill at Japanese cafés.",
        "icon": "☕",
        "color": "#EC4899",
        "summary": [
            "カフェでの注文 (Ordering at Cafés): ホットコーヒーをお願いします (Hot coffee please)",
            "助詞「を」(Object Particle を): 紅茶とケーキをください (Tea and cake please)",
            "数量詞 (Counters 1-5): 一つ (hitotsu), 二つ (futatsu), 三つ (mittsu)",
            "店員への声かけ (Calling Staff): すみません、注文いいですか？ (Excuse me, may I order?)",
            "会計表現 (Checking Out): お会計をお願いします (Bill please), カード使えますか？ (Do you take cards?)",
        ],
        "vocab": [
            ("コーヒー", "コーヒー", "koohii", "Coffee", ["こ", "ー", "ひ", "い", "お", "ち", "ゃ", "す"]),
            ("お茶", "おちゃ", "ocha", "Green tea", ["お", "ち", "ゃ", "こ", "う", "ひ", "い", "ん"]),
            ("水", "みず", "mizu", "Water", ["み", "ず", "お", "ね", "が", "い", "し", "ま"]),
            ("一つ", "ひとつ", "hitotsu", "One item (counter)", ["ひ", "と", "つ", "ふ", "た", "み", "っ", "よ"]),
            ("二つ", "ふたつ", "futatsu", "Two items (counter)", ["ふ", "た", "つ", "ひ", "と", "み", "っ", "よ"]),
            ("三つ", "みっつ", "mittsu", "Three items (counter)", ["み", "っ", "つ", "ひ", "と", "ふ", "た", "よ"]),
            ("ケーキ", "ケーキ", "keeki", "Cake", ["け", "ー", "き", "ぱ", "ん", "ち", "い", "ず"]),
            ("メニュー", "メニュー", "menyuu", "Menu", ["め", "に", "ゅ", "ー", "ほ", "ん", "か", "み"]),
            ("お会計", "おかいけい", "okaikei", "The bill / check", ["お", "か", "い", "け", "い", "は", "ら", "う"]),
            ("テイクアウト", "テイクアウト", "teikuauto", "Takeout / to-go", ["て", "い", "く", "あ", "う", "と", "で", "す"]),
            ("おすすめ", "おすすめ", "osusume", "Recommendation", ["お", "す", "す", "め", "な", "に", "が", "い"]),
            ("甘い", "あまい", "amai", "Sweet", ["あ", "ま", "い", "か", "ら", "い", "に", "が"]),
            ("氷なし", "こおりなし", "koori nashi", "Without ice", ["こ", "お", "り", "な", "し", "あ", "り", "ま"]),
            ("砂糖", "さとう", "satou", "Sugar", ["さ", "と", "う", "し", "お", "み", "る", "く"]),
            ("いらっしゃいませ", "いらっしゃいませ", "irasshaimase", "Welcome (to our store)", ["い", "ら", "っ", "し", "ゃ", "い", "ま", "せ"]),
        ],
        "dialogues": [
            ("店員: ご注文はお決まりですか？", "ご注文はお決まりですか？", "Gochuumon wa okimari desu ka?", "Clerk: Are you ready to order?", "コーヒーを一つお願いします", ["コーヒーを一つお願いします", "さようなら", "いいえ、日本人です", "はじめまして"]),
            ("客: おすすめは何ですか？", "おすすめは何ですか？", "Osusume wa nan desu ka?", "Customer: What do you recommend?", "抹茶ラテが人気ですよ", ["抹茶ラテが人気ですよ", "私は学生です", "はい、どうぞ", "駅はどこですか"]),
            ("店員: 店内でお召し上がりですか？", "店内でお召し上がりですか？", "Tennai de omeshiagari desu ka?", "Clerk: Will you be dining in?", "テイクアウトでお願いします", ["テイクアウトでお願いします", "こんにちは", "ありがとうございます", "いいえ、違います"]),
        ]
    },
    {
        "num": 5,
        "title": "Asking Directions in Shibuya",
        "titleJp": "渋谷で道を尋ねる",
        "desc": "Navigate Tokyo stations, street corners, famous landmarks, and ask locals for directions.",
        "icon": "🗺️",
        "color": "#3B82F6",
        "summary": [
            "道を尋ねる (Asking Directions): 〜はどこですか？ (Where is ~?)",
            "位置の表現 (Locations): 右 (right), 左 (left), まっすぐ (straight), 隣 (next to)",
            "駅の施設 (Station Facilities): 改札 (ticket gate), 出口 (exit), 北口 (North Exit)",
            "距離と所要時間 (Distance): 歩いて5分くらいです (About 5 mins on foot)",
            "確認の表現 (Confirming): あの交差点を右ですね？ (Turn right at that crossing, right?)",
        ],
        "vocab": [
            ("駅", "えき", "eki", "Train station", ["え", "き", "み", "ち", "ど", "こ", "は", "し"]),
            ("どこ", "どこ", "doko", "Where", ["ど", "こ", "だ", "れ", "い", "つ", "な", "に"]),
            ("右", "みぎ", "migi", "Right", ["み", "ぎ", "ひ", "だ", "り", "ま", "え", "う"]),
            ("左", "ひだり", "hidari", "Left", ["ひ", "だ", "り", "み", "ぎ", "う", "し", "ろ"]),
            ("まっすぐ", "まっすぐ", "massugu", "Straight ahead", ["ま", "っ", "す", "ぐ", "と", "お", "い", "よ"]),
            ("交差点", "こうさてん", "kousaten", "Intersection / Crossing", ["こ", "う", "さ", "て", "ん", "み", "ち", "か"]),
            ("出口", "でぐち", "deguchi", "Exit", ["で", "ぐ", "ち", "い", "り", "ぐ", "ち", "え"]),
            ("改札", "かいさつ", "kaisatsu", "Ticket gate", ["か", "い", "さ", "つ", "き", "っ", "ぷ", "の"]),
            ("コンビニ", "コンビニ", "konbini", "Convenience store", ["こ", "ん", "び", "に", "み", "せ", "や", "す"]),
            ("信号", "しんごう", "shingou", "Traffic light", ["し", "ん", "ご", "う", "あ", "か", "あ", "お"]),
            ("隣", "となり", "tonari", "Next to / beside", ["と", "な", "り", "ち", "か", "く", "う", "し"]),
            ("近い", "ちかい", "chikai", "Near / close", ["ち", "か", "い", "と", "お", "い", "す", "ぐ"]),
            ("遠い", "とおい", "tooi", "Far", ["と", "お", "い", "ち", "か", "い", "ま", "え"]),
            ("交番", "こうばん", "kouban", "Police box", ["こ", "う", "ば", "ん", "け", "い", "さ", "つ"]),
            ("歩いて", "あるいて", "aruite", "On foot / walking", ["あ", "る", "い", "て", "い", "っ", "て", "く"]),
        ],
        "dialogues": [
            ("旅行者: すみません、渋谷駅はどちらですか？", "渋谷駅はどちらですか？", "Shibuya-eki wa dochira desu ka?", "Traveler: Excuse me, which way is Shibuya Station?", "この道をまっすぐ行ってください", ["この道をまっすぐ行ってください", "コーヒーをください", "はい、元気です", "美味しかったです"]),
            ("道案内: あそこの信号を右に曲がるとありますよ", "あそこの信号を右に曲がるとありますよ", "Asoko no shingou o migi ni magaru to arimasu yo", "Local: Turn right at that light over there and you will see it.", "わかりました、ありがとうございます！", ["わかりました、ありがとうございます！", "いいえ、結構です", "さようなら", "ごちそうさまでした"]),
            ("旅行者: ここから歩いてどのくらいかかりますか？", "ここから歩いてどのくらいかかりますか？", "Koko kara aruite dono kurai kakarimasu ka?", "Traveler: About how long does it take on foot?", "5分くらいですよ", ["5分くらいですよ", "お茶を飲みます", "はい、そうです", "日本から来ました"]),
        ]
    },
    {
        "num": 6,
        "title": "Shopping in Akihabara",
        "titleJp": "秋葉原でショッピング",
        "desc": "Inquire about prices, try on clothes, ask for other colors, and pay with cards or mobile pay.",
        "icon": "🛍️",
        "color": "#8B5CF6",
        "summary": [
            "値段を尋ねる (Inquiring Prices): これ、いくらですか？ (How much is this?)",
            "試着の許可 (Fitting Clothes): これ、着てみてもいいですか？ (May I try this on?)",
            "サイズ・色 (Sizes & Colors): もう少し大きいサイズはありますか？ (Is there a bigger size?)",
            "比較表現 (Comparisons): こっちのほうが好きです (I prefer this one)",
            "支払い (Payment): クレジットカードで払えますか？ (Can I pay with credit card?)",
        ],
        "vocab": [
            ("いくら", "いくら", "ikura", "How much (cost)", ["い", "く", "ら", "ど", "れ", "な", "に", "か"]),
            ("これ", "これ", "kore", "This item (near speaker)", ["こ", "れ", "そ", "れ", "あ", "れ", "ど", "れ"]),
            ("それ", "それ", "sore", "That item (near listener)", ["そ", "れ", "こ", "れ", "あ", "れ", "ど", "れ"]),
            ("あれ", "あれ", "are", "That item over there", ["あ", "れ", "こ", "れ", "そ", "れ", "ど", "れ"]),
            ("サイズ", "サイズ", "saizu", "Size", ["さ", "い", "ず", "お", "お", "き", "い", "ち"]),
            ("大きい", "おおきい", "ookii", "Big / large", ["お", "お", "き", "い", "ち", "い", "さ", "い"]),
            ("小さい", "ちいさい", "chiisai", "Small", ["ち", "い", "さ", "い", "お", "お", "き", "い"]),
            ("色", "いろ", "iro", "Color", ["い", "ろ", "あ", "か", "あ", "お", "く", "ろ"]),
            ("黒", "くろ", "kuro", "Black", ["く", "ろ", "し", "ろ", "あ", "か", "あ", "お"]),
            ("白", "しろ", "shiro", "White", ["し", "ろ", "く", "ろ", "あ", "か", "あ", "お"]),
            ("袋", "ふくろ", "fukuro", "Shopping bag", ["ふ", "く", "ろ", "か", "み", "び", "に", "ー"]),
            ("試着", "しちゃく", "shichaku", "Trying on clothes", ["し", "ち", "ゃ", "く", "き", "る", "み", "る"]),
            ("免税", "めんぜい", "menzei", "Tax-free / Duty-free", ["め", "ん", "ぜ", "い", "ぱ", "す", "ぽ", "ー"]),
            ("カード", "カード", "kaado", "Credit / IC card", ["か", "ー", "ど", "げ", "ん", "き", "ん", "で"]),
            ("現金", "げんきん", "genkin", "Cash", ["げ", "ん", "き", "ん", "か", "ー", "ど", "お"]),
        ],
        "dialogues": [
            ("客: すみません、これいくらですか？", "これいくらですか？", "Kore ikura desu ka?", "Customer: Excuse me, how much is this?", "税込で3000円です", ["税込で3000円です", "右に曲がります", "お水をお願いします", "はい、そうです"]),
            ("客: これを着てみてもいいですか？", "これを着てみてもいいですか？", "Kore o kite mite mo ii desu ka?", "Customer: May I try this on?", "はい、試着室へどうぞ！", ["はい、試着室へどうぞ！", "駅はあそこです", "ごちそうさまでした", "いいえ、知りません"]),
            ("店員: お支払いはどうされますか？", "お支払いはどうされますか？", "Oshiharai wa dou saremasu ka?", "Clerk: How would you like to pay?", "カードでお願いします", ["カードでお願いします", "美味しかったです", "はじめまして", "また来ます"]),
        ]
    },
    # --- JLPT N4 (Weeks 7-12) ---
    {
        "num": 7,
        "title": "Dining at an Izakaya",
        "titleJp": "居酒屋で乾杯",
        "desc": "Enjoy Japanese pub culture, order drinks and shared dishes, cheers, and split the bill.",
        "icon": "🍻",
        "color": "#F59E0B",
        "summary": [
            "乾杯の掛け声 (Cheers): かんぱーい！ (Cheers!)",
            "最初の定番 (The Starter Order): とりあえず生ビールで (Draft beer to start)",
            "居酒屋メニュー (Izakaya Staples): 枝豆 (edamame), 焼き鳥 (yakitori), 刺身 (sashimi)",
            "店員のおすすめ (Specials): 今日の本日のおすすめは何ですか？ (What is today's special?)",
            "会計の割り勘 (Splitting Bill): 割り勘にしましょう (Let's split the bill)",
        ],
        "vocab": [
            ("乾杯", "かんぱい", "kanpai", "Cheers!", ["か", "ん", "ぱ", "い", "の", "む", "さ", "け"]),
            ("生ビール", "なまビール", "nama biiru", "Draft beer", ["な", "ま", "び", "ー", "る", "さ", "け", "お"]),
            ("とりあえず", "とりあえず", "toriaezu", "For now / to start with", ["と", "り", "あ", "え", "ず", "ま", "ず", "は"]),
            ("枝豆", "えだまめ", "edamame", "Edamame soybeans", ["え", "だ", "ま", "め", "つ", "ま", "み", "お"]),
            ("焼き鳥", "やきとり", "yakitori", "Grilled chicken skewers", ["や", "き", "と", "り", "に", "く", "く", "し"]),
            ("唐揚げ", "からあげ", "karaage", "Japanese fried chicken", ["か", "ら", "あ", "げ", "と", "り", "あ", "ぶ"]),
            ("お代わり", "おかわり", "okawari", "Another serving / refill", ["お", "か", "わ", "り", "も", "う", "い", "っ"]),
            ("割り勘", "わりかん", "warikan", "Splitting the bill", ["わ", "り", "か", "ん", "べ", "つ", "べ", "つ"]),
            ("居酒屋", "いざかや", "izakaya", "Japanese pub / Izakaya", ["い", "ざ", "か", "や", "み", "せ", "の", "み"]),
            ("おつまみ", "おつまみ", "otsumami", "Pub snacks / appetizers", ["お", "つ", "ま", "み", "さ", "け", "あ", "て"]),
            ("ハイボール", "ハイボール", "haibooru", "Whisky highball", ["は", "い", "ぼ", "ー", "る", "う", "い", "す"]),
            ("ウーロン茶", "ウーロンちゃ", "uuroncha", "Oolong tea", ["う", "ー", "ろ", "ん", "ち", "ゃ", "お", "ち"]),
            ("刺身", "さしみ", "sashimi", "Sashimi / sliced raw fish", ["さ", "し", "み", "さ", "か", "な", "な", "ま"]),
            ("席", "せき", "seki", "Seat / table", ["せ", "き", "て", "ー", "ぶ", "る", "ざ", "す"]),
            ("禁煙", "きんえん", "kin-en", "No smoking", ["き", "ん", "え", "ん", "た", "ば", "こ", "す"]),
        ],
        "dialogues": [
            ("店員: お飲み物はどうなさいますか？", "お飲み物はどうなさいますか？", "Onomimono wa dou nasaimasu ka?", "Clerk: What would you like to drink?", "とりあえず生ビール二つで！", ["とりあえず生ビール二つで！", "駅はどこですか？", "さようなら", "いいえ、結構です"]),
            ("友達: みんな揃ったね！", "みんな揃ったね！", "Minna sorotta ne!", "Friend: Everyone is here!", "じゃあ、乾杯しましょう！", ["じゃあ、乾杯しましょう！", "ごちそうさまでした", "はじめまして", "おやすみなさい"]),
            ("客: お会計、別々で払えますか？", "別々で払えますか？", "Betsubetsu de haraemasu ka?", "Customer: Can we pay separately?", "はい、個別会計大丈夫ですよ", ["はい、個別会計大丈夫ですよ", "いいえ、食べられません", "駅の近くです", "美味しかったです"]),
        ]
    },
    {
        "num": 8,
        "title": "Booking & Staying at a Ryokan",
        "titleJp": "温泉旅館の予約と宿泊",
        "desc": "Check into traditional hot spring inns, understand onsen etiquette, and enjoy seasonal kaiseki.",
        "icon": "♨️",
        "color": "#10B981",
        "summary": [
            "旅館のチェックイン (Ryokan Check-in): 予約した田中と申します (I am Tanaka, I have a reservation)",
            "温泉のマナー (Onsen Etiquette): 体を洗ってから入浴してください (Wash body before entering bath)",
            "浴衣の着用 (Wearing Yukata): 右前ではなく左前に重ねます (Left side over right side)",
            "夕食の確認 (Dinner Arrangements): 夕食はお部屋でお召し上がりですか？ (Will dinner be in room?)",
            "願望の表現 (Expressing Wishes): 露天風呂に入りたいです (I want to soak in open-air bath)",
        ],
        "vocab": [
            ("温泉", "おんせん", "onsen", "Hot spring", ["お", "ん", "せ", "ん", "ゆ", "ふ", "ろ", "み"]),
            ("旅館", "りょかん", "ryokan", "Traditional Japanese inn", ["り", "ょ", "か", "ん", "や", "ど", "ほ", "て"]),
            ("露天風呂", "ろてんぶろ", "rotenburo", "Open-air hot spring bath", ["ろ", "て", "ん", "ぶ", "ろ", "お", "ん", "せ"]),
            ("浴衣", "ゆかた", "yukata", "Light cotton kimono", ["ゆ", "か", "た", "き", "も", "の", "き", "る"]),
            ("予約", "よやく", "yoyaku", "Reservation", ["よ", "や", "く", "と", "る", "へ", "や", "し"]),
            ("部屋", "へや", "heya", "Room", ["へ", "や", "し", "つ", "わ", "し", "つ", "た"]),
            ("和室", "わしつ", "washitsu", "Japanese-style tatami room", ["わ", "し", "つ", "た", "た", "み", "へ", "や"]),
            ("畳", "たたみ", "tatami", "Tatami mat flooring", ["た", "た", "み", "わ", "し", "つ", "ゆ", "か"]),
            ("布団", "ふとん", "futon", "Japanese sleeping futon", ["ふ", "と", "ん", "ね", "る", "し", "き", "ま"]),
            ("朝食", "ちょうしょく", "choushoku", "Breakfast", ["ち", "ょ", "う", "し", "ょ", "く", "あ", "さ"]),
            ("夕食", "ゆうしょく", "yuushoku", "Dinner", ["ゆ", "う", "し", "ょ", "く", "ば", "ん", "ご"]),
            ("懐石料理", "かいせきりょうり", "kaiseki ryouri", "Traditional multi-course feast", ["か", "い", "せ", "き", "り", "ょ", "う", "り"]),
            ("タオル", "タオル", "taoru", "Towel", ["た", "お", "る", "て", "ぬ", "ぐ", "い", "ゆ"]),
            ("脱衣所", "だついじょ", "datsuijo", "Changing / dressing room", ["だ", "つ", "い", "じ", "ょ", "ふ", "ろ", "ば"]),
            ("貸切", "かしきり", "kashikiri", "Private hire / reserved bath", ["か", "し", "き", "り", "せ", "ん", "よ", "う"]),
        ],
        "dialogues": [
            ("仲居: いらっしゃいませ、ご予約のお名前をいただけますか？", "ご予約のお名前をいただけますか？", "Goyoyaku no onamae o itadakemasu ka?", "Host: Welcome, may I have the name for the reservation?", "3名で予約したスミスです", ["3名で予約したスミスです", "お腹が空きました", "さようなら", "右に曲がります"]),
            ("客: 露天風呂は何時まで利用できますか？", "露天風呂は何時まで利用できますか？", "Rotenburo wa nanji made riyou dekimasu ka?", "Guest: Until what time can we use the open-air bath?", "夜12時までご利用いただけます", ["夜12時までご利用いただけます", "はい、学生です", "美味しかったです", "ここは渋谷です"]),
            ("仲居: ご夕食の準備ができましたよ", "ご夕食の準備ができましたよ", "Goyuushoku no junbi ga dekimashita yo", "Host: Your dinner is ready!", "ありがとうございます、楽しみです！", ["ありがとうございます、楽しみです！", "いいえ、違います", "おやすみなさい", "駅へ行きます"]),
        ]
    },
    {
        "num": 9,
        "title": "Visiting the Clinic & Pharmacy",
        "titleJp": "病院と薬局",
        "desc": "Explain physical symptoms to doctors, fill prescriptions at pharmacies, and understand dosing instructions.",
        "icon": "🏥",
        "color": "#EF4444",
        "summary": [
            "症状の説明 (Explaining Symptoms): 頭が痛くて熱があります (I have a headache and a fever)",
            "痛みの部位 (Body Parts): 喉 (throat), お腹 (stomach), 歯 (tooth), 目 (eye)",
            "保険証の提示 (Health Insurance): 保険証を持っています (I have my health insurance card)",
            "薬の飲み方 (Taking Medication): 毎食後に一包飲んでください (Take one packet after each meal)",
            "禁止と注意 (Cautions): 運転しないでください (Please do not drive)",
        ],
        "vocab": [
            ("病院", "びょういん", "byouin", "Hospital / clinic", ["び", "ょ", "う", "い", "ん", "い", "し", "ゃ"]),
            ("薬局", "やっきょく", "yakkyoku", "Pharmacy", ["や", "っ", "き", "ょ", "く", "く", "す", "り"]),
            ("熱", "ねつ", "netsu", "Fever", ["ね", "つ", "か", "ぜ", "あ", "た", "ま", "い"]),
            ("頭痛", "ずつう", "zutsuu", "Headache", ["ず", "つ", "う", "あ", "た", "ま", "い", "た"]),
            ("喉", "のど", "nodo", "Throat", ["の", "ど", "く", "び", "こ", "え", "い", "た"]),
            ("お腹", "おなか", "onaka", "Stomach / belly", ["お", "な", "か", "い", "ぶ", "く", "ろ", "い"]),
            ("痛い", "いたい", "itai", "Painful / hurts", ["い", "た", "い", "か", "ゆ", "い", "つ", "ら"]),
            ("風邪", "かぜ", "kaze", "Common cold", ["か", "ぜ", "ひ", "く", "ね", "つ", "せ", "き"]),
            ("咳", "せき", "seki", "Cough", ["せ", "き", "た", "ん", "の", "ど", "で", "る"]),
            ("薬", "くすり", "kusuri", "Medicine", ["く", "す", "り", "の", "む", "じ", "ょ", "う"]),
            ("保険証", "ほけんしょう", "hokenshou", "Health insurance card", ["ほ", "け", "ん", "し", "ょ", "う", "か", "ー"]),
            ("処方箋", "しょほうせん", "shohousen", "Doctor's prescription", ["し", "ょ", "ほ", "う", "せ", "ん", "か", "み"]),
            ("食後", "しょくご", "shokugo", "After meal", ["し", "ょ", "く", "ご", "ま", "え", "の", "む"]),
            ("アレルギー", "アレルギー", "arerugii", "Allergy", ["あ", "れ", "る", "ぎ", "ー", "た", "ま", "ご"]),
            ("お大事に", "おだいじに", "odaiji ni", "Take care / get well soon", ["お", "だ", "い", "じ", "に", "あ", "り", "が"]),
        ],
        "dialogues": [
            ("医師: 今日はどうされましたか？", "今日はどうされましたか？", "Kyou wa dou saremashita ka?", "Doctor: What brings you in today?", "昨日から喉が痛くて熱があります", ["昨日から喉が痛くて熱があります", "コーヒーをください", "渋谷へ行きます", "はい、学生です"]),
            ("薬剤師: このお薬は食後に飲んでくださいね", "このお薬は食後に飲んでくださいね", "Kono okusuri wa shokugo ni nonde kudasai ne", "Pharmacist: Please take this medicine after meals.", "わかりました。眠くなりますか？", ["わかりました。眠くなりますか？", "さようなら", "とても安いです", "美味しかったです"]),
            ("受付: 保険証をお持ちですか？", "保険証をお持ちですか？", "Hokenshou o omochi desu ka?", "Reception: Do you have your insurance card?", "はい、こちらです", ["はい、こちらです", "いいえ、食べません", "走って行きます", "おやすみなさい"]),
        ]
    },
    {
        "num": 10,
        "title": "Weather & Travel Planning",
        "titleJp": "天気予報と旅行の計画",
        "desc": "Check forecasts, plan weekend trips, buy Shinkansen bullet train tickets, and prepare for seasonal weather.",
        "icon": "🚅",
        "color": "#06B6D4",
        "summary": [
            "天気の表現 (Weather Terms): 晴れ (sunny), 雨 (rain), 曇り (cloudy), 雪 (snow)",
            "条件の接続詞 (Conditionals): 明日雨が降ったら、美術館に行きます (If it rains tomorrow, I'll go to the museum)",
            "新幹線の切符 (Bullet Train Tickets): 京都までの指定席を1枚ください (One reserved seat to Kyoto please)",
            "季節の行事 (Seasonal Events): 春には桜、秋には紅葉が見られます (Cherry blossoms in spring, autumn leaves)",
            "助言の表現 (Giving Suggestions): 傘を持って行ったほうがいいですよ (You should bring an umbrella)",
        ],
        "vocab": [
            ("天気", "てんき", "tenki", "Weather", ["て", "ん", "き", "あ", "め", "は", "れ", "ゆ"]),
            ("晴れ", "はれ", "hare", "Sunny / clear", ["は", "れ", "あ", "め", "く", "も", "り", "ゆ"]),
            ("雨", "あめ", "ame", "Rain", ["あ", "め", "は", "れ", "か", "さ", "ふ", "る"]),
            ("台風", "たいふう", "taifuu", "Typhoon", ["た", "い", "ふ", "う", "あ", "め", "か", "ぜ"]),
            ("新幹線", "しんかんせん", "shinkansen", "Bullet train", ["し", "ん", "か", "ん", "せ", "ん", "で", "ん"]),
            ("切符", "きっぷ", "kippu", "Ticket", ["き", "っ", "ぷ", "か", "う", "え", "き", "の"]),
            ("指定席", "していせき", "shiteiseki", "Reserved seat", ["し", "て", "い", "せ", "き", "じ", "ゆ", "う"]),
            ("自由席", "じゆうせき", "jiyuuseki", "Non-reserved seat", ["じ", "ゆ", "う", "せ", "き", "し", "て", "い"]),
            ("旅行", "りょこう", "ryokou", "Travel / trip", ["り", "ょ", "こ", "う", "た", "び", "い", "く"]),
            ("桜", "さくら", "sakura", "Cherry blossom", ["さ", "く", "ら", "は", "な", "は", "る", "み"]),
            ("紅葉", "こうよう", "kouyou", "Autumn foliage", ["こ", "う", "よ", "う", "あ", "き", "も", "み"]),
            ("気温", "きおん", "kion", "Temperature", ["き", "お", "ん", "あ", "つ", "い", "さ", "む"]),
            ("傘", "かさ", "kasa", "Umbrella", ["か", "さ", "あ", "め", "も", "つ", "さ", "す"]),
            ("涼しい", "すずしい", "suzushii", "Cool / refreshing", ["す", "ず", "し", "い", "あ", "つ", "い", "さ"]),
            ("荷物", "にもつ", "nimotsu", "Luggage / baggage", ["に", "も", "つ", "ば", "っ", "ぐ", "か", "ば"]),
        ],
        "dialogues": [
            ("窓口: どちらまでの切符をご希望ですか？", "どちらまでの切符をご希望ですか？", "Dochira made no kippu o gokibou desu ka?", "Ticket Counter: Where would you like tickets to?", "京都までの指定席を2枚お願いします", ["京都までの指定席を2枚お願いします", "熱があります", "お水をお願いします", "はじめまして"]),
            ("友達: 明日の天気、雨らしいよ", "明日の天気、雨らしいよ", "Ashita no tenki, ame rashii yo", "Friend: It seems like it will rain tomorrow.", "じゃあ、折りたたみ傘を持っていこう", ["じゃあ、折りたたみ傘を持っていこう", "はい、学生です", "ごちそうさまでした", "ここは渋谷です"]),
            ("観光案内: 今の時期は紅葉がとても綺麗ですよ", "今の時期は紅葉がとても綺麗ですよ", "Ima no jiki wa kouyou ga totemo kirei desu yo", "Guide: The autumn foliage is gorgeous right now!", "ぜひ見に行ってみます！", ["ぜひ見に行ってみます！", "さようなら", "いいえ、違います", "お腹が痛いです"]),
        ]
    },
    {
        "num": 11,
        "title": "Hobbies & Expressing Abilities",
        "titleJp": "趣味とできること",
        "desc": "Express what you can and cannot do, share personal pastimes, and discuss past experiences.",
        "icon": "🎸",
        "color": "#6366F1",
        "summary": [
            "可能動詞 (Potential Verbs): 日本語が少し話せます (I can speak a little Japanese)",
            "趣味の紹介 (Introducing Hobbies): 私の趣味は写真を撮ることです (My hobby is taking photos)",
            "経験の表現 (~たことがある): 富士山に登ったことがありますか？ (Have you climbed Mt. Fuji?)",
            "最上級の比較 (Superlatives): スポーツの中でサッカーが一番好きです (Of all sports, I like soccer most)",
            "頻度の表現 (Frequency): 週に2回ギターを練習します (I practice guitar twice a week)",
        ],
        "vocab": [
            ("趣味", "しゅみ", "shumi", "Hobby", ["し", "ゅ", "み", "す", "き", "あ", "そ", "ぶ"]),
            ("話せる", "はなせる", "hanaseru", "Can speak", ["は", "な", "せ", "る", "い", "え", "る", "き"]),
            ("泳げる", "およげる", "oyogeru", "Can swim", ["お", "よ", "げ", "る", "お", "よ", "ぐ", "み"]),
            ("ギター", "ギター", "gitaa", "Guitar", ["ぎ", "た", "ー", "が", "っ", "き", "ひ", "く"]),
            ("写真", "しゃしん", "shashin", "Photograph", ["し", "ゃ", "し", "ん", "か", "め", "ら", "と"]),
            ("登る", "のぼる", "noboru", "To climb", ["の", "ぼ", "る", "や", "ま", "あ", "が", "る"]),
            ("一番", "いちばん", "ichiban", "Number one / most", ["い", "ち", "ば", "ん", "も", "っ", "と", "も"]),
            ("上手", "じょうず", "jouzu", "Skillful / good at", ["じ", "ょ", "う", "ず", "へ", "た", "う", "ま"]),
            ("下手", "へた", "heta", "Unskillful / bad at", ["へ", "た", "じ", "ょ", "う", "ず", "に", "が"]),
            ("経験", "けいけん", "keiken", "Experience", ["け", "い", "け", "ん", "た", "い", "け", "ん"]),
            ("読書", "どくしょ", "dokusho", "Reading books", ["ど", "く", "し", "ょ", "ほ", "ん", "よ", "む"]),
            ("料理", "りょうり", "ryouri", "Cooking", ["り", "ょ", "う", "り", "つ", "く", "る", "食"]),
            ("運転", "うんてん", "unten", "Driving", ["う", "ん", "て", "ん", "く", "る", "ま", "ど"]),
            ("弾く", "ひく", "hiku", "To play (strings/piano)", ["ひ", "く", "ぴ", "あ", "の", "お", "と", "だ"]),
            ("得意", "とくい", "tokui", "Strong point / pride in skill", ["と", "く", "い", "に", "が", "て", "じ", "ま"]),
        ],
        "dialogues": [
            ("同僚: スミスさんは日本語がとても上手ですね！", "日本語がとても上手ですね！", "Nihongo ga totemo jouzu desu ne!", "Colleague: Smith-san, your Japanese is very good!", "いえいえ、まだまだ勉強中です", ["いえいえ、まだまだ勉強中です", "コーヒーをください", "右へ曲がります", "お大事に"]),
            ("友達: 週末は何をして過ごすことが多いの？", "何をして過ごすことが多いの？", "Nani o shite sugosu koto ga ooi no?", "Friend: What do you often do on weekends?", "映画を見たり料理を作ったりします", ["映画を見たり料理を作ったりします", "はい、元気です", "3000円です", "駅の近くです"]),
            ("友達: 日本でどこか旅行に行ったことある？", "旅行に行ったことある？", "Ryokou ni itta koto aru?", "Friend: Have you traveled anywhere in Japan?", "去年、京都へ行ったことがあります", ["去年、京都へ行ったことがあります", "お茶を飲みます", "いいえ、違います", "さようなら"]),
        ]
    },
    {
        "num": 12,
        "title": "Polite Requests & Giving Favors",
        "titleJp": "お願いと授受表現",
        "desc": "Master giving and receiving favors (ageru, kureru, morau), making gentle requests, and asking permissions.",
        "icon": "🤝",
        "color": "#14B8A6",
        "summary": [
            "丁寧な依頼 (~ていただけませんか): 手伝っていただけませんか？ (Could you please help me?)",
            "授受動詞 (Giving & Receiving): 友達にプレゼントをあげました / もらいました",
            "恩恵を受ける (Favors done for me): 日本語を教えてくれました (Kindly taught me Japanese)",
            "許可を求める (~てもよろしいですか): 写真を撮ってもよろしいですか？ (May I take photos?)",
            "感謝の返礼 (Expressing Gratitude): ご親切にありがとうございます (Thank you for your kindness)",
        ],
        "vocab": [
            ("手伝う", "てつだう", "tetsudau", "To help / assist", ["て", "つ", "だ", "う", "た", "す", "け", "る"]),
            ("あげる", "あげる", "ageru", "To give (to someone else)", ["あ", "げ", "る", "く", "れ", "る", "も", "ら"]),
            ("くれる", "くれる", "kureru", "To give (to speaker)", ["く", "れ", "る", "あ", "げ", "る", "も", "ら"]),
            ("もらう", "もらう", "morau", "To receive", ["も", "ら", "う", "あ", "げ", "る", "く", "れ"]),
            ("教えて", "おしえて", "oshiete", "Please teach / tell", ["お", "し", "え", "て", "き", "い", "て", "く"]),
            ("貸す", "かす", "kasu", "To lend", ["か", "す", "か", "り", "る", "あ", "ず", "け"]),
            ("借りる", "かりる", "kariru", "To borrow", ["か", "り", "る", "か", "す", "へ", "ん", "き"]),
            ("送る", "おくる", "okuru", "To send / see someone off", ["お", "く", "る", "と", "ど", "け", "る", "む"]),
            ("親切", "しんせつ", "shinsetsu", "Kind / hospitable", ["し", "ん", "せ", "つ", "や", "さ", "し", "い"]),
            ("お願い", "おねがい", "onegai", "Favor / request", ["お", "ね", "が", "い", "た", "の", "む", "よ"]),
            ("迷惑", "めいわく", "meiwaku", "Nuisance / inconvenience", ["め", "い", "わ", "く", "こ", "ま", "る", "か"]),
            ("助かる", "たすかる", "tasukaru", "To be saved / helpful", ["た", "す", "か", "る", "う", "れ", "し", "い"]),
            ("遠慮", "えんりょ", "enryo", "Hesitation / holding back", ["え", "ん", "り", "ょ", "き", "が", "ね", "し"]),
            ("失礼", "しつれい", "shitsurei", "Rude / excuse me", ["し", "つ", "れ", "い", "す", "み", "ま", "せ"]),
            ("感謝", "かんしゃ", "kansha", "Gratitude / appreciation", ["か", "ん", "し", "ゃ", "あ", "り", "が", "と"]),
        ],
        "dialogues": [
            ("旅行者: すみません、写真を撮っていただけませんか？", "写真を撮っていただけませんか？", "Shashin o totte itadakemasen ka?", "Traveler: Excuse me, would you mind taking a picture for me?", "いいですよ！はい、チーズ！", ["いいですよ！はい、チーズ！", "京都へ行きます", "頭が痛いです", "コーヒーを一つ"]),
            ("友人: この本、よかったら貸してあげようか？", "この本、貸してあげようか？", "Kono hon, kashite ageyou ka?", "Friend: Would you like me to lend you this book?", "本当？助かります！ありがとう", ["本当？助かります！ありがとう", "さようなら", "いいえ、違います", "お腹がいっぱいです"]),
            ("同僚: 何かお手伝いしましょうか？", "何かお手伝いしましょうか？", "Nanika otetsudai shimashou ka?", "Colleague: Can I help you with anything?", "恐れ入ります、これをお願いできますか？", ["恐れ入ります、これをお願いできますか？", "はい、元気です", "美味しかったです", "ごちそうさまでした"]),
        ]
    }
]

# Generate more units 13 to 30 programmatically with high linguistic depth
def get_extended_unit_config(num):
    configs = {
        # --- JLPT N3 (Weeks 13-18) ---
        13: {
            "title": "Apartment Hunting in Japan",
            "titleJp": "日本の部屋探しと不動産",
            "desc": "Understand real estate terms, leasing conditions (reikin, shikikin), layout types, and signing rental contracts.",
            "icon": "🏢", "color": "#F97316",
            "vocab": [
                ("家賃", "やちん", "yachin", "Monthly rent"),
                ("敷金", "しききん", "shikikin", "Security deposit"),
                ("礼金", "れいきん", "reikin", "Key money (gratuity)"),
                ("間取り", "まどり", "madori", "Floor plan layout"),
                ("不動産", "ふどうさん", "fudousan", "Real estate agency"),
                ("契約", "けいやく", "keiyaku", "Contract / lease agreement"),
                ("保証人", "ほしょうにん", "hoshounin", "Guarantor"),
                ("日当たり", "ひあたり", "hiatari", "Sunlight exposure"),
                ("駅近", "えきちか", "ekichika", "Close to train station"),
                ("防音", "ぼうおん", "bouon", "Soundproof"),
                ("更新料", "こうしんりょう", "koushinryou", "Lease renewal fee"),
                ("引越し", "ひっこし", "hikkoshi", "Moving residence"),
                ("大家", "おおや", "ooya", "Landlord"),
                ("徒歩", "とほ", "toho", "Walking distance"),
                ("初期費用", "しょきひよう", "shoki hiyou", "Initial upfront costs"),
            ]
        },
        14: {
            "title": "Office Culture & Keigo Foundations",
            "titleJp": "職場のマナーと敬語の基礎",
            "desc": "Navigate Japanese office hierarchy, honorifics (Sonkeigo/Kenjougo), and professional phone and email etiquette.",
            "icon": "💼", "color": "#4F46E5",
            "vocab": [
                ("お疲れ様", "おつかれさま", "otsukaresama", "Thank you for your hard work"),
                ("失礼します", "しつれいします", "shitsureishimasu", "Excuse me (entering/leaving)"),
                ("承知", "しょうち", "shouchi", "Acknowledged / understood"),
                ("申し上げる", "もうしあげる", "moushiageru", "To say (humble Kenjougo)"),
                ("いらっしゃる", "いらっしゃる", "irassharu", "To be / go / come (honorific)"),
                ("ご覧になる", "ごらんになる", "goran ni naru", "To see / inspect (honorific)"),
                ("拝見する", "はいけんする", "haiken suru", "To look at / read (humble)"),
                ("名刺", "めいし", "meishi", "Business card"),
                ("上司", "じょうし", "joushi", "Supervisor / boss"),
                ("同僚", "どうりょう", "douryou", "Colleague / coworker"),
                ("会議", "かいぎ", "kaigi", "Business meeting"),
                ("資料", "しりょう", "shiryou", "Documents / handout materials"),
                ("報告", "ほうこく", "houkoku", "Report (part of Horenso)"),
                ("連絡", "れんらく", "renraku", "Communication / liaison"),
                ("相談", "そうだん", "soudan", "Consultation / advice"),
            ]
        },
        15: {
            "title": "Giving Explanations & Reasons",
            "titleJp": "理由と状況の説明",
            "desc": "Master nuanced conjunctions and sentence endings: ~wake da, ~sei de (blame), ~okage de (gratitude), and ~no da.",
            "icon": "💡", "color": "#0284C7",
            "vocab": [
                ("わけだ", "わけだ", "wake da", "Naturally it means that..."),
                ("おかげで", "おかげで", "okage de", "Thanks to (positive cause)"),
                ("せいで", "せいで", "sei de", "Due to / because of (blame)"),
                ("原因", "げんいん", "gen-in", "Cause / origin of problem"),
                ("理由", "りゆう", "riyuu", "Reason / motive"),
                ("誤解", "ごかい", "gokai", "Misunderstanding"),
                ("実は", "じつは", "jitsu wa", "As a matter of fact / actually"),
                ("事情", "じじょう", "jijou", "Circumstances / background situation"),
                ("説明", "せつめい", "setsumei", "Explanation"),
                ("結果", "けっか", "kekka", "Result / outcome"),
                ("納得", "なっとく", "nattoku", "Consent / understanding / conviction"),
                ("したがって", "したがって", "shitagatte", "Therefore / accordingly"),
                ("つまり", "つまり", "tsumari", "In short / that is to say"),
                ("なぜなら", "なぜなら", "nazenara", "The reason being..."),
                ("解釈", "かいしゃく", "kaishaku", "Interpretation"),
            ]
        },
        16: {
            "title": "Hypotheticals & Conditionals",
            "titleJp": "複雑な条件と仮定",
            "desc": "Distinguish to, ba, tara, and nara, express hypothetical regrets (~ba yokatta), and construct conditional advice.",
            "icon": "⚖️", "color": "#7C3AED",
            "vocab": [
                ("仮定", "かてい", "katei", "Hypothesis / assumption"),
                ("条件", "じょうけん", "jouken", "Condition / requirement"),
                ("場合", "ばあい", "baai", "Case / scenario"),
                ("もし", "もし", "moshi", "If / supposing that"),
                ("たとえ", "たとえ", "tatoe", "Even if / supposing"),
                ("後悔", "こうかい", "koukai", "Regret"),
                ("改善", "かいぜん", "kaizen", "Improvement / Kaizen"),
                ("提案", "ていあん", "teian", "Proposal / suggestion"),
                ("可能性", "かのうせい", "kanousei", "Possibility / potential"),
                ("選択肢", "せんたくし", "sentakushi", "Option / choice"),
                ("判断", "はんだん", "handan", "Judgement / decision"),
                ("影響", "えいきょう", "eikyou", "Influence / effect"),
                ("万一", "まんいち", "man-ichi", "In the unlikely event"),
                ("予測", "よそく", "yosoku", "Prediction / forecast"),
                ("対応", "たいおう", "taiou", "Response / dealing with"),
            ]
        },
        17: {
            "title": "Japanese Traditions & Festivals",
            "titleJp": "伝統行事と祭り",
            "desc": "Appreciate cultural rituals, shrine visits (Sanpai), tea ceremony, seasonal festivals, and passive descriptions.",
            "icon": "⛩️", "color": "#D97706",
            "vocab": [
                ("祭り", "まつり", "matsuri", "Festival"),
                ("神社", "じんじゃ", "jinja", "Shinto shrine"),
                ("寺", "てら", "tera", "Buddhist temple"),
                ("参拝", "さんぱい", "sanpai", "Worship / paying respects at shrine"),
                ("伝統", "でんとう", "dentou", "Tradition / heritage"),
                ("文化", "ぶんか", "bunka", "Culture"),
                ("茶道", "さどう", "sadou", "Tea ceremony"),
                ("着物", "きもの", "kimono", "Traditional kimono"),
                ("神輿", "みこし", "mikoshi", "Portable shrine carried in festivals"),
                ("お盆", "おぼん", "obon", "Obon ancestral holiday"),
                ("初詣", "はつもうで", "hatsumoude", "First shrine visit of New Year"),
                ("縁起", "えんぎ", "engi", "Omen / good fortune"),
                ("歴史", "れきし", "rekishi", "History"),
                ("受け継ぐ", "うけつぐ", "uketsugu", "To inherit / pass down"),
                ("儀式", "ぎしき", "gishiki", "Ceremony / rite"),
            ]
        },
        18: {
            "title": "Troubleshooting & Seeking Advice",
            "titleJp": "トラブル解決と相談",
            "desc": "Handle unexpected mishaps (lost items, transit delays), ask for counsel, and offer tactful suggestions.",
            "icon": "🛠️", "color": "#059669",
            "vocab": [
                ("トラブル", "トラブル", "toraburu", "Trouble / incident"),
                ("落とし物", "おとしもの", "otoshimono", "Lost property"),
                ("遅延", "ちえん", "chien", "Train / flight delay"),
                ("紛失", "ふんしつ", "funshitsu", "Loss / misplacement"),
                ("解決", "かいけつ", "kaiketsu", "Resolution / solution"),
                ("相談", "そうだん", "soudan", "Consultation"),
                ("助言", "じょげん", "jogen", "Advice"),
                ("緊急", "きんきゅう", "kinkyuu", "Emergency"),
                ("問い合わせ", "といあわせ", "toiawase", "Inquiry / contact"),
                ("警察", "けいさつ", "keisatsu", "Police"),
                ("証明書", "しょうめいしょ", "shoumeisho", "Official certificate"),
                ("修理", "しゅうり", "shuuri", "Repair"),
                ("再発行", "さいはっこう", "sai hakkou", "Reissue (card/ticket)"),
                ("困る", "こまる", "komaru", "To be in trouble / at a loss"),
                ("安心", "あんしん", "anshin", "Peace of mind / relief"),
            ]
        },
        # --- JLPT N2 (Weeks 19-24) ---
        19: {
            "title": "Japanese Job Interviews",
            "titleJp": "就職活動と面接",
            "desc": "Formulate eloquent self-introductions, articulate career motivation (Shibou Douki), and demonstrate corporate poise.",
            "icon": "👔", "color": "#2563EB",
            "vocab": [
                ("面接", "めんせつ", "mensetsu", "Job interview"),
                ("志望動機", "しぼうどうき", "shibou douki", "Motivation for applying"),
                ("自己PR", "じこピーアール", "jiko pii aaru", "Self-promotion"),
                ("長所", "ちょうしょ", "chousho", "Strength / strong point"),
                ("短所", "たんしょ", "tansho", "Weakness / shortcoming"),
                ("採用", "さいよう", "saiyou", "Recruitment / hiring"),
                ("履歴書", "りれきしょ", "rirekisho", "Resume / curriculum vitae"),
                ("貢献", "こうけん", "kouken", "Contribution"),
                ("適性", "てきせい", "tekisei", "Aptitude / suitability"),
                ("意欲", "いよく", "iyoku", "Enthusiasm / will to achieve"),
                ("実績", "じっせき", "jisseki", "Track record / achievements"),
                ("入社", "にゅうしゃ", "nyuusha", "Joining a company"),
                ("貴社", "きしゃ", "kisha", "Your esteemed company (written)"),
                ("御社", "おんしゃ", "onsha", "Your esteemed company (spoken)"),
                ("内定", "ないてい", "naitei", "Unofficial job offer"),
            ]
        },
        20: {
            "title": "News, Economy & Media",
            "titleJp": "ニュースと経済社会",
            "desc": "Comprehend newspaper headlines, market indicators, inflation, and objective journalistic expressions.",
            "icon": "📰", "color": "#DC2626",
            "vocab": [
                ("景気", "けいき", "keiki", "Economic climate"),
                ("株価", "かぶか", "kabuka", "Stock price"),
                ("円安", "えんやす", "enyasu", "Weak yen depreciation"),
                ("円高", "えんだか", "endaka", "Strong yen appreciation"),
                ("インフレ", "インフレ", "infure", "Inflation"),
                ("報道", "ほうどう", "houdou", "News report / journalism"),
                ("政策", "せいさく", "seisaku", "Government policy"),
                ("市場", "しじょう", "shijou", "Financial market"),
                ("成長率", "せいちょうりつ", "seichouritsu", "Growth rate"),
                ("消費", "しょうひ", "shouhi", "Consumption / spending"),
                ("投資", "とうし", "toushi", "Investment"),
                ("企業", "きぎょう", "kigyou", "Enterprise / corporation"),
                ("影響", "えいきょう", "eikyou", "Impact / consequence"),
                ("懸念", "けねん", "kenen", "Concern / anxiety"),
                ("見通し", "みとおし", "mitooshi", "Outlook / prospect"),
            ]
        },
        21: {
            "title": "Business Negotiations & Proposals",
            "titleJp": "ビジネス交渉と企画提案",
            "desc": "Negotiate trade contracts, present new proposals, navigate polite pushback, and reach corporate agreements.",
            "icon": "📊", "color": "#7C2D12",
            "vocab": [
                ("交渉", "こうしょう", "koushou", "Negotiation"),
                ("提案", "ていあん", "teian", "Proposal"),
                ("妥協", "だきょう", "dakyou", "Compromise"),
                ("合意", "ごうい", "goui", "Agreement / consensus"),
                ("取引", "とりひき", "torihiki", "Transaction / business deal"),
                ("納期", "のうき", "nouki", "Delivery deadline"),
                ("見積書", "みつもりしょ", "mitsumorisho", "Price quotation"),
                ("検討", "けんとう", "kentou", "Consideration / deliberation"),
                ("恐縮", "きょうしゅく", "kyoushuku", "Humbly obliged / apologetic"),
                ("承諾", "しょうだく", "shoudaku", "Consent / approval"),
                ("提携", "ていけい", "teikei", "Partnership / alliance"),
                ("利益", "りえき", "rieki", "Profit / margin"),
                ("費用", "ひよう", "hiyou", "Cost / expense"),
                ("保留", "ほりゅう", "horyuu", "Holding in reserve / pending"),
                ("締結", "ていけつ", "teiketsu", "Concluding a contract"),
            ]
        },
        22: {
            "title": "Subtle Emotional Nuances & Reactions",
            "titleJp": "感情の機微と態度",
            "desc": "Convey layered feelings and psychological tensions using ~tamaranai, ~te naranai, and ~zaru o enai.",
            "icon": "🎭", "color": "#DB2777",
            "vocab": [
                ("たまらない", "たまらない", "tamaranai", "Can't bear / irresistibly"),
                ("てならない", "てならない", "te naranai", "Can't help feeling..."),
                ("ざるを得ない", "ざるをえない", "zaru o enai", "Can't avoid doing / compelled"),
                ("感動", "かんどう", "kandou", "Being deeply moved"),
                ("焦り", "あせり", "aseri", "Impatience / anxiety"),
                ("悔しい", "くやしい", "kuyashii", "Frustrated / vexed"),
                ("失望", "しつぼう", "shitsubou", "Disappointment"),
                ("共感", "きょうかん", "kyoukan", "Empathy"),
                ("違和感", "いわかん", "iwakan", "Sense of discomfort / out of place"),
                ("戸惑う", "とまどう", "tomadou", "To be bewildered / perplexed"),
                ("安堵", "あんど", "ando", "Relief"),
                ("誇り", "ほこり", "hokori", "Pride"),
                ("葛藤", "かっとう", "kattou", "Inner conflict"),
                ("決断", "けつだん", "ketsudan", "Resolution / determination"),
                ("本音", "ほんね", "honne", "Real intentions / true feelings"),
            ]
        },
        23: {
            "title": "Technology, AI & Trends in Japan",
            "titleJp": "先端技術と日本の未来",
            "desc": "Discuss artificial intelligence, automation in healthcare, cashless society, and socioeconomic transitions.",
            "icon": "🤖", "color": "#0D9488",
            "vocab": [
                ("人工知能", "じんこうちのう", "jinkou chinou", "Artificial Intelligence (AI)"),
                ("自動化", "じどうか", "jidouka", "Automation"),
                ("高齢化", "こうれいか", "koureika", "Population aging"),
                ("少子化", "しょうしか", "shoushika", "Declining birthrate"),
                ("革新", "かくしん", "kakushin", "Innovation"),
                ("持続可能", "じぞくかのう", "jizoku kanou", "Sustainable"),
                ("普及", "ふきゅう", "fukyuu", "Diffusion / spread"),
                ("開発", "かいはつ", "kaihatsu", "Development / R&D"),
                ("効率化", "こうりつか", "kouritsuka", "Streamlining / efficiency"),
                ("導入", "どうにゅう", "dounyuu", "Adoption / implementation"),
                ("課題", "かだい", "kadai", "Challenge / issue to solve"),
                ("情報漏洩", "じょうほうろうえい", "jouhou rouei", "Data leak / security breach"),
                ("倫理", "りんり", "rinri", "Ethics / moral standards"),
                ("変革", "へんかく", "henkaku", "Transformation / reform"),
                ("将来性", "しょうらいせい", "shouraisei", "Future potential / promise"),
            ]
        },
        24: {
            "title": "Advanced Contrast & Rhetoric",
            "titleJp": "高度な対比と論理展開",
            "desc": "Construct rigorous argumentative prose with ~ni mo kakawarazu, ~dokoroka, and ~ni hanshite.",
            "icon": "🖋️", "color": "#9333EA",
            "vocab": [
                ("にもかかわらず", "にもかかわらず", "ni mo kakawarazu", "Despite / in spite of"),
                ("どころか", "どころか", "dokoroka", "Far from / let alone"),
                ("に反して", "にはんして", "ni hanshite", "Contrary to"),
                ("反面", "はんめん", "hanmen", "On the other hand"),
                ("主張", "しゅちょう", "shuchou", "Assertion / contention"),
                ("根拠", "こんきょ", "konkyo", "Grounds / objective basis"),
                ("批判", "ひはん", "hihan", "Critique / criticism"),
                ("妥当", "だとう", "datou", "Valid / appropriate"),
                ("客観的", "きゃっかんてき", "kyakkanteki", "Objective"),
                ("主観的", "しゅかんてき", "shukanteki", "Subjective"),
                ("矛盾", "むじゅん", "mujun", "Contradiction"),
                ("整合性", "せいごうせい", "seigousei", "Consistency / integrity"),
                ("一概に", "いちがいに", "ichigai ni", "Unconditionally / sweeps all as one"),
                ("論理", "ろんり", "ronri", "Logic / reasoning"),
                ("要約", "ようやく", "youyaku", "Summary / synopsis"),
            ]
        },
        # --- JLPT N1 (Weeks 25-30) ---
        25: {
            "title": "Four-Character Idioms (Yojijukugo)",
            "titleJp": "四字熟語と故事成語",
            "desc": "Master classical idioms: Ichigo Ichie, Ishin Denshin, Juunin Toiro, Sessatakuma, and Rinki Ouhen.",
            "icon": "📜", "color": "#B45309",
            "vocab": [
                ("一期一会", "いちごいちえ", "ichigo ichie", "Once in a lifetime encounter"),
                ("以心伝心", "いしんでんしん", "ishin denshin", "Tacit mutual understanding"),
                ("十人十色", "じゅうにんといろ", "juunin toiro", "Ten people, ten colors (each unique)"),
                ("切磋琢磨", "せっさたくま", "sessa takuma", "Diligently honing skills together"),
                ("臨機応変", "りんきおうへん", "rinki ouhen", "Adapting flexibly to the situation"),
                ("臥薪嘗胆", "がしんしょうたん", "gashin shoutan", "Enduring hardships for future triumph"),
                ("温故知新", "おんこちしん", "onko chishin", "Learning wisdom from the past"),
                ("起死回生", "きしかいせい", "kishi kaisei", "Miraculous revival from near defeat"),
                ("試行錯誤", "しこうさくご", "shikou sakugo", "Trial and error"),
                ("本末転倒", "ほんまつてんとう", "honmatsu tentou", "Putting cart before horse"),
                ("異口同音", "いくどうおん", "iku douon", "With one voice / unanimously"),
                ("日進月歩", "にっしんげっぽ", "nisshin geppo", "Steady rapid progress"),
                ("自給自足", "じきゅうじそく", "jikyuu jisoku", "Self-sufficiency"),
                ("大同小異", "だいどうしょうい", "daidou shoui", "Substantially identical with minor differences"),
                ("電光石火", "でんこうせっか", "denkou sekka", "Fast as lightning"),
            ]
        },
        26: {
            "title": "Formal Speeches & Official Ceremonies",
            "titleJp": "式典のスピーチと挨拶",
            "desc": "Deliver congratulations, formal farewell addresses, wedding salutations, and official banquets in high register.",
            "icon": "🎙️", "color": "#1E3A8A",
            "vocab": [
                ("謹んで", "つつしんで", "tsutsushinde", "Respectfully / humbly"),
                ("お慶び", "およろこび", "oyorokobi", "Heartfelt congratulations"),
                ("栄誉", "えいよ", "eiyo", "Honor / prestige"),
                ("光栄", "こうえい", "kouei", "Honor / privilege"),
                ("式典", "しきてん", "shikiten", "Ceremony / official celebration"),
                ("祝辞", "しゅくじ", "shukuji", "Congratulatory address"),
                ("感謝の辞", "かんしゃのじ", "kansha no ji", "Words of thanks / appreciation"),
                ("甚だ", "はなはだ", "hanahada", "Extremely / exceedingly (formal)"),
                ("恐縮", "きょうしゅく", "kyoushuku", "Extremely obliged / apologetic"),
                ("健勝", "けんしょう", "kenshou", "Good health (formal epistolary)"),
                ("発展", "はってん", "hatten", "Prosperity / advancement"),
                ("祈念", "きねん", "kinen", "Praying / wishing for"),
                ("ご清聴", "ごせいちょう", "goseichou", "Attentive listening (audience)"),
                ("乾杯の音頭", "かんぱいのおんど", "kanpai no ondo", "Proposing the official toast"),
                ("結び", "むすび", "musubi", "Closing / conclusion of a speech"),
            ]
        },
        27: {
            "title": "The Inner Psychology of Japanese Society",
            "titleJp": "本音と建前・和の精神",
            "desc": "Decode unstated intentions, Kuuki o Yomu, group harmony (Wa), and master polite indirect refusals.",
            "icon": "🍵", "color": "#4338CA",
            "vocab": [
                ("本音", "ほんね", "honne", "Real intentions / private opinion"),
                ("建前", "たてまえ", "tatemae", "Public stance / social protocol"),
                ("空気を読む", "くうきをよむ", "kuuki o yomu", "Reading the unspoken atmosphere"),
                ("和の精神", "わのせいしん", "wa no seishin", "Spirit of collective harmony"),
                ("忖度", "そんたく", "sontaku", "Anticipating unspoken wishes"),
                ("配慮", "はいりょ", "hairyo", "Thoughtful consideration for others"),
                ("社交辞令", "しゃこうじれい", "shakou jirei", "Diplomatic compliments / polite flattery"),
                ("間接的", "かんせつてき", "kansetsuteki", "Indirect"),
                ("角を立てない", "かどをたてない", "kado o tatenai", "Avoiding unnecessary friction"),
                ("義理", "ぎり", "giri", "Sense of duty / social obligation"),
                ("人情", "にんじょう", "ninjou", "Human warmth / empathy"),
                ("根回し", "ねまわし", "nemawashi", "Behind-the-scenes consensus building"),
                ("謙遜", "けんそん", "kenson", "Modesty / self-effacement"),
                ("気配り", "きくばり", "kikubari", "Attentiveness / care"),
                ("同調圧力", "どうちょうあつりょく", "douchou atsuryoku", "Peer pressure to conform"),
            ]
        },
        28: {
            "title": "Modern Literature & Essayistic Japanese",
            "titleJp": "近代文学と随筆の文体",
            "desc": "Appreciate literary prose, sensory aesthetics, classic endings (~de aru, ~gotoshi), and metaphoric imagery.",
            "icon": "📚", "color": "#831843",
            "vocab": [
                ("随筆", "ずいひつ", "zuihitsu", "Personal essay / literary miscellany"),
                ("描写", "びょうしゃ", "byousha", "Depiction / vivid description"),
                ("叙情的", "じょじょうてき", "jojouteki", "Lyrical / poetic emotionalism"),
                ("比喩", "ひゆ", "hiyu", "Metaphor / simile"),
                ("情緒", "じょうちょ", "joutcho", "Atmosphere / evocative mood"),
                ("哀愁", "あいしゅう", "aishuu", "Melancholy / sorrowful charm"),
                ("余韻", "よいん", "yoin", "Lingering resonance / aftertaste"),
                ("感傷", "かんしょう", "kanshou", "Sentimentality"),
                ("無常観", "むじょうかん", "mujoukan", "Buddhist sense of impermanence"),
                ("文体", "ぶんたい", "buntai", "Literary style"),
                ("行間", "ぎょうかん", "gyoukan", "Between the lines"),
                ("深淵", "しんえん", "shin-en", "Abyss / profound depth"),
                ("幽玄", "ゆうげん", "yuugen", "Subtle grace and hidden beauty"),
                ("風情", "ふぜい", "fuzei", "Scenic taste / tasteful atmosphere"),
                ("傑作", "けっさく", "kessaku", "Masterpiece"),
            ]
        },
        29: {
            "title": "Legal, Regulatory & Academic Writing",
            "titleJp": "契約書・法律・学術論文",
            "desc": "Analyze formal contractual clauses (Kou/Otsu), academic papers, regulatory requirements, and rigorous deduction.",
            "icon": "⚖️", "color": "#312E81",
            "vocab": [
                ("条項", "じょうこう", "joukou", "Clause / contractual article"),
                ("甲及び乙", "こうおよびおつ", "kou oyobi otsu", "Party A and Party B"),
                ("遵守", "じゅんしゅ", "junshu", "Compliance / observance"),
                ("免責", "めんせき", "menseki", "Exemption from liability / disclaimer"),
                ("損害賠償", "そんがいばいしょう", "songai baishou", "Compensation for damages"),
                ("管轄", "かんかつ", "kankatsu", "Jurisdiction"),
                ("準拠法", "じゅんきょほう", "junkyohou", "Governing law"),
                ("論文", "ろんぶん", "ronbun", "Academic paper / thesis"),
                ("検証", "けんしょう", "kenshou", "Verification / empirical testing"),
                ("妥当性", "だとうせい", "datousei", "Validity / soundness"),
                ("考察", "こうさつ", "kousatsu", "Discussion / scholarly review"),
                ("引用", "いんよう", "in-you", "Citation / quotation"),
                ("鑑みる", "かんがみる", "kangamiru", "In consideration of / in light of"),
                ("踏まえる", "ふまえる", "fumaeru", "Based upon / taking into account"),
                ("不可抗力", "ふかこうりょく", "fukakouryoku", "Force majeure / act of God"),
            ]
        },
        30: {
            "title": "Grand Sensei Mastery (Dojo Shihan Challenge)",
            "titleJp": "道場奥義・師範への道",
            "desc": "The ultimate milestone: full cumulative mastery across all 30 weeks, synthesis of JLPT N5 through N1, and true Japanese fluency.",
            "icon": "🥋", "color": "#E11D48",
            "vocab": [
                ("師範", "しはん", "shihan", "Grand master / instructor"),
                ("奥義", "おうぎ", "ougi", "Ultimate secrets / esoteric mystery"),
                ("免許皆伝", "めんきょかいでん", "menkyo kaiden", "Full initiation and complete mastery"),
                ("精通", "せいつう", "seitsuu", "Expert knowledge / thorough familiarity"),
                ("達人", "たつじん", "tatsujin", "Master / expert practitioner"),
                ("神髄", "しんずい", "shinzui", "True essence / quintessential core"),
                ("修練", "しゅうれん", "shuuren", "Rigorous training / spiritual discipline"),
                ("頂点", "ちょうてん", "chouten", "Zenith / summit of achievement"),
                ("貫禄", "かんろく", "kanroku", "Dignity / imposing presence"),
                ("大成", "たいせい", "taisei", "Great culmination / successful achievement"),
                ("研鑽", "けんさん", "kensan", "Devoted study and self-improvement"),
                ("不屈", "ふくつ", "fukutsu", "Indomitable / unyielding spirit"),
                ("伝承", "でんしょう", "denshou", "Passing down of oral tradition"),
                ("極意", "ごくい", "gokui", "The innermost secret"),
                ("道場", "どうじょう", "doujou", "The Dojo / sacred place of the Way"),
            ]
        }
    }
    return configs.get(num)

def generate_tile_bank(answer):
    # Take characters from answer, ensure they are in tileBank, plus distractor kana
    import random
    distractors = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"]
    chars = list(answer)
    pool = list(chars)
    for d in distractors:
        if d not in pool:
            pool.append(d)
        if len(pool) >= 8:
            break
    pool = pool[:8]
    random.shuffle(pool)
    return pool

def generate_lesson_items(unit_num, lesson_num, day_num, vocab_item, all_vocabs):
    kanji, furigana, romaji, english = vocab_item[:4]
    
    # Generate 3 distractors for multiple choice options
    import random
    other_vocabs = [v for v in all_vocabs if v[0] != kanji]
    random.shuffle(other_vocabs)
    distractors = [v[3] for v in other_vocabs[:3]]
    options = [english] + distractors
    random.shuffle(options)

    tile_bank = generate_tile_bank(furigana)

    items = [
        {
            "id": f"u{unit_num}_l{lesson_num}_1",
            "type": "listen",
            "prompt": kanji,
            "furigana": furigana,
            "romaji": romaji,
            "english": english,
            "audioText": furigana,
            "options": options,
            "correctAnswer": english
        },
        {
            "id": f"u{unit_num}_l{lesson_num}_2",
            "type": "spell",
            "prompt": kanji,
            "furigana": furigana,
            "romaji": romaji,
            "english": f"Build '{english}'",
            "audioText": furigana,
            "tileBank": tile_bank,
            "correctAnswer": furigana
        },
        {
            "id": f"u{unit_num}_l{lesson_num}_3",
            "type": "speak",
            "prompt": kanji,
            "furigana": furigana,
            "romaji": romaji,
            "english": f"Pronounce: {english}",
            "audioText": furigana,
            "options": [english, "Incorrect translation", "Opposite meaning", "Different phrase"],
            "correctAnswer": english
        }
    ]
    return items

def build_unit(cfg):
    num = cfg["num"]
    title = cfg["title"]
    titleJp = cfg["titleJp"]
    desc = cfg["desc"]
    icon = cfg["icon"]
    color = cfg["color"]
    summary = cfg.get("summary", [
        f"{titleJp} (Key Concepts)",
        "実用的な語彙と文法表現の習得",
        "対話とリスニングの総合練習",
        "JLPT基準の実力向上",
        "第{num}週のまとめテスト"
    ])

    vocabs = cfg.get("vocab", [])
    # Ensure at least 15 vocabs
    if len(vocabs) < 15:
        ext = get_extended_unit_config(num)
        if ext:
            vocabs = ext["vocab"]

    # Build 15 lessons across 7 days
    # Day 1: 1, 2
    # Day 2: 3, 4
    # Day 3: 5, 6
    # Day 4: 7, 8
    # Day 5: 9, 10
    # Day 6: 11, 12, 13, 14
    # Day 7: 15 (Unit Test)
    days_map = {
        1: 1, 2: 1,
        3: 2, 4: 2,
        5: 3, 6: 3,
        7: 4, 8: 4,
        9: 5, 10: 5,
        11: 6, 12: 6, 13: 6, 14: 6,
        15: 7
    }

    categories = {
        1: ("Expression", "expression", "Key Expressions"),
        2: ("Vocabulary", "vocabulary", "Essential Vocabulary"),
        3: ("Practice", "practice", "Daily Practice"),
        4: ("Review Quiz", "quiz", "Checkpoint Quiz"),
        5: ("Expression", "expression", "Practical Dialogues"),
        6: ("Conversation", "expression", "Real Scenarios"),
        7: ("Practice", "practice", "Fluency Drill"),
        8: ("Vocabulary", "vocabulary", "Extended Vocabulary"),
        9: ("Expression", "expression", "Situational Speech"),
        10: ("Review Quiz", "quiz", "Mid-week Assessment"),
        11: ("Practice", "practice", "Advanced Practice"),
        12: ("Vocabulary", "vocabulary", "Mastery Terms"),
        13: ("Expression", "expression", "Nuance & Tone"),
        14: ("Review Quiz", "quiz", "Pre-Test Consolidation"),
        15: ("Unit Test", "test", f"Unit {num} Master Exam")
    }

    lessons = []
    all_gate_items = []

    for l_num in range(1, 16):
        day_num = days_map[l_num]
        cat, icon_type, default_sec = categories[l_num]
        v_idx = (l_num - 1) % len(vocabs)
        v_item = vocabs[v_idx]

        lesson_items = generate_lesson_items(num, l_num, day_num, v_item, vocabs)
        if l_num in [1, 3, 5, 8, 11, 15]:
            all_gate_items.append(lesson_items[0])

        lesson = {
            "id": f"u{num}_l{l_num}",
            "unitId": f"unit_{num}",
            "lessonNumber": l_num,
            "dayNumber": day_num,
            "category": cat,
            "sectionTitle": default_sec if l_num in [1, 3, 5, 7, 9, 11, 15] else None,
            "iconType": icon_type,
            "title": f"{v_item[3]}",
            "titleJp": f"{v_item[0]}",
            "summary": f"Practice and master {v_item[3]} ({v_item[0]}) in context.",
            "vocabKeywords": [v_item[0]],
            "kanjiKeywords": [ch for ch in v_item[0] if '\u4e00' <= ch <= '\u9faf'],
            "items": lesson_items
        }
        lessons.append(lesson)

    revision_gate = {
        "id": f"gate_unit_{num}",
        "unitId": f"unit_{num}",
        "title": f"Unit {num} Mastery Checkpoint",
        "titleJp": f"第{num}週 総復習テスト",
        "requiredScorePercent": 80,
        "items": all_gate_items[:6]
    }

    unit_data = {
        "id": f"unit_{num}",
        "unitNumber": num,
        "title": title,
        "titleJp": titleJp,
        "description": desc,
        "icon": icon,
        "themeColor": color,
        "summaryPoints": summary,
        "lessons": lessons,
        "revisionGate": revision_gate
    }
    return unit_data

def main():
    out_dir = "./src/features/dojo/data/units"
    os.makedirs(out_dir, exist_ok=True)

    # Combine units 4-12 from UNITS_CONFIG and units 13-30 from extended
    all_configs = list(UNITS_CONFIG)
    for n in range(13, 31):
        ext = get_extended_unit_config(n)
        all_configs.append({
            "num": n,
            "title": ext["title"],
            "titleJp": ext["titleJp"],
            "desc": ext["desc"],
            "icon": ext["icon"],
            "color": ext["color"],
            "vocab": ext["vocab"]
        })

    for cfg in all_configs:
        unit_num = cfg["num"]
        unit_data = build_unit(cfg)
        fname = f"{out_dir}/unit{unit_num:02d}.ts"
        var_name = f"unit{unit_num:02d}"
        content = f'import type {{ DojoUnit }} from "../../models/dojo.model";\n\nexport const {var_name}: DojoUnit = {json.dumps(unit_data, ensure_ascii=False, indent=2)};\n'
        with open(fname, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Generated {fname} ({unit_data['title']})")

    # Generate index.ts in units/
    imports = []
    exports = []
    for i in range(1, 31):
        v = f"unit{i:02d}"
        imports.append(f'import {{ {v} }} from "./{v}";')
        exports.append(f"  {v},")

    index_content = "\n".join(imports) + "\n\nexport const ALL_DOJO_UNITS = [\n" + "\n".join(exports) + "\n];\n"
    with open(f"{out_dir}/index.ts", "w", encoding="utf-8") as f:
        f.write(index_content)
    print("Generated src/features/dojo/data/units/index.ts")

if __name__ == "__main__":
    main()
