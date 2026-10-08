import os
import json
import re
from PIL import Image
import pytesseract

BASE_DIR = "scripts/bunpro_scraper/screenshots"
DESKTOP_DIR = os.path.join(BASE_DIR, "desktop")
MOBILE_DIR = os.path.join(BASE_DIR, "mobile")
REPORT_PATH = "scripts/bunpro_scraper/analysis_report.json"

os.environ["TESSDATA_PREFIX"] = os.path.abspath("scripts/bunpro_scraper/tessdata")

CATEGORIES = {
    "dashboard_home": [
        "dashboard", "streak", "forecast", "daily", "activity", "jlpt progress", "level", "xp", "today"
    ],
    "study_and_reviews": [
        "review", "cram", "ghost", "session", "accuracy", "hint", "cloze", "answer", "submit", "wrap up", "crushed"
    ],
    "grammar_and_vocab_library": [
        "grammar", "vocab", "vocabulary", "lesson", "meaning", "structure", "synonyms", "antonyms", "nuance", "examples"
    ],
    "decks_and_curriculum": [
        "deck", "path", "step", "jlpt n5", "jlpt n4", "jlpt n3", "textbook", "genki", "tobira", "minna", "custom deck"
    ],
    "gamification_and_arcade": [
        "kaijugation", "badge", "cosmetics", "shop", "avatar", "title", "arcade", "game"
    ],
    "settings_and_preferences": [
        "settings", "account", "styling", "theme", "subscription", "notification", "audio", "voice", "dark mode"
    ],
    "community_and_social": [
        "community", "forum", "reply", "post", "topic", "discussion", "poll", "comment"
    ]
}

def analyze_image(filepath, platform):
    try:
        im = Image.open(filepath)
        w, h = im.size
        # Resize if huge to speed up OCR
        if w > 1600 or h > 1600:
            scale = 1600 / max(w, h)
            im = im.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
        
        # OCR
        text = pytesseract.image_to_string(im, timeout=8).strip()
        text_lower = text.lower()

        # Score categories based on OCR text + filename keywords
        fn_lower = os.path.basename(filepath).lower()
        scores = {cat: 0 for cat in CATEGORIES}

        for cat, keywords in CATEGORIES.items():
            for kw in keywords:
                if kw in fn_lower:
                    scores[cat] += 3
                if kw in text_lower:
                    scores[cat] += 1

        best_cat = max(scores, key=scores.get)
        if scores[best_cat] == 0:
            best_cat = "miscellaneous"

        # Extract UI components detected
        detected_elements = []
        if any(w in text_lower for w in ["search", "filter", "find"]):
            detected_elements.append("search_filter_bar")
        if any(w in text_lower for w in ["next", "back", "submit", "select all"]):
            detected_elements.append("action_buttons")
        if any(w in text_lower for w in ["meaning", "examples", "resources", "details"]):
            detected_elements.append("segmented_tab_bar")
        if any(w in text_lower for w in ["lesson", "chapter", "unit"]):
            detected_elements.append("lesson_list_accordion")
        if any(w in text_lower for w in ["accuracy", "%", "streak", "level"]):
            detected_elements.append("stats_metrics_display")

        return {
            "filename": os.path.basename(filepath),
            "platform": platform,
            "dimensions": f"{w}x{h}",
            "category": best_cat,
            "detected_elements": detected_elements,
            "sample_text": [line for line in text.split("\n") if len(line.strip()) > 3][:6]
        }
    except Exception as e:
        return {
            "filename": os.path.basename(filepath),
            "platform": platform,
            "category": "unclassified",
            "error": str(e)
        }

def run():
    print("[*] Starting OCR analysis & categorization across all screenshots...")
    results = {"desktop": [], "mobile": []}

    desktop_files = sorted(os.listdir(DESKTOP_DIR))
    mobile_files = sorted(os.listdir(MOBILE_DIR))

    print(f"Analyzing {len(desktop_files)} Desktop screenshots...")
    for idx, f in enumerate(desktop_files, 1):
        path = os.path.join(DESKTOP_DIR, f)
        res = analyze_image(path, "desktop")
        results["desktop"].append(res)
        if idx % 25 == 0 or idx == len(desktop_files):
            print(f"  Desktop: {idx}/{len(desktop_files)}")

    print(f"\nAnalyzing {len(mobile_files)} Mobile screenshots...")
    for idx, f in enumerate(mobile_files, 1):
        path = os.path.join(MOBILE_DIR, f)
        res = analyze_image(path, "mobile")
        results["mobile"].append(res)
        if idx % 25 == 0 or idx == len(mobile_files):
            print(f"  Mobile: {idx}/{len(mobile_files)}")

    # Summary
    summary = {
        "desktop_categories": {},
        "mobile_categories": {},
    }
    for item in results["desktop"]:
        cat = item.get("category", "other")
        summary["desktop_categories"][cat] = summary["desktop_categories"].get(cat, 0) + 1
    for item in results["mobile"]:
        cat = item.get("category", "other")
        summary["mobile_categories"][cat] = summary["mobile_categories"].get(cat, 0) + 1

    final_payload = {
        "summary": summary,
        "results": results
    }

    with open(REPORT_PATH, "w") as out:
        json.dump(final_payload, out, indent=2)

    print("\n[+] OCR & Categorization complete!")
    print(json.dumps(summary, indent=2))

if __name__ == "__main__":
    run()
