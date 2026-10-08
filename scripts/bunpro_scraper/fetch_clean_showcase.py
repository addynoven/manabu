import os
import re
import json
import urllib.request
from io import BytesIO
from PIL import Image

TARGET_DIR = "scripts/bunpro_scraper/screenshots"
DESKTOP_DIR = os.path.join(TARGET_DIR, "desktop")
MOBILE_DIR = os.path.join(TARGET_DIR, "mobile")

os.makedirs(DESKTOP_DIR, exist_ok=True)
os.makedirs(MOBILE_DIR, exist_ok=True)

# Threads dedicated to official feature releases, design showcase, UI refactors & dashboards
SHOWCASE_TOPICS = [
    {"id": 218137, "name": "path_steps"},
    {"id": 212465, "name": "decks_redesign"},
    {"id": 208271, "name": "cram_redesign"},
    {"id": 203913, "name": "grammar_topics"},
    {"id": 68890,  "name": "dashboard_2_0"},
    {"id": 65725,  "name": "reviews_2_0"},
    {"id": 62291,  "name": "mobile_ui_refactor"},
    {"id": 45823,  "name": "official_mobile_apps"},
    {"id": 40052,  "name": "grammar_page_update"},
    {"id": 79997,  "name": "dashboard_landing"},
]

HEADERS = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}

def fetch_json(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return json.loads(resp.read().decode())
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def download_image(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return resp.read()
    except Exception as e:
        return None

def run():
    print("[*] Downloading high-quality, official design showcase screenshots...")
    saved_desktop = 0
    saved_mobile = 0
    seen_urls = set()

    for topic in SHOWCASE_TOPICS:
        tid = topic["id"]
        tname = topic["name"]
        print(f"\nProcessing Feature Thread {tid} ({tname})...")
        data = fetch_json(f"https://community.bunpro.jp/t/{tid}.json")
        if not data:
            continue

        # Look at the OP and Bunpro team showcase posts
        posts = data.get("post_stream", {}).get("posts", [])
        for p in posts[:10]: # Top showcase posts from authors/designers
            cooked = p.get("cooked", "")
            username = p.get("username", "author")

            hrefs = re.findall(r'href=[\"\']([^\"\']+\.(?:png|jpg|jpeg|webp))[\"\']', cooked, re.IGNORECASE)
            srcs = re.findall(r'src=[\"\']([^\"\']+\.(?:png|jpg|jpeg|webp))[\"\']', cooked, re.IGNORECASE)

            # Extract distinct upload URLs
            target_imgs = []
            for img in set(hrefs + srcs):
                if ("upload" in img or "original" in img) and not any(skip in img for skip in ["emoji", "avatar", "badge"]):
                    target_imgs.append(img)

            for img_url in target_imgs:
                if img_url in seen_urls:
                    continue
                seen_urls.add(img_url)

                full_url = img_url if img_url.startswith("http") else f"https://community.bunpro.jp{img_url}"
                raw = download_image(full_url)
                if not raw or len(raw) < 15000: # Filter out icons and tiny graphics
                    continue

                try:
                    im = Image.open(BytesIO(raw))
                    w, h = im.size
                    if w < 300 or h < 300:
                        continue

                    # Filter out memes / square banners: UI screenshots typically have specific dimensions
                    ratio = h / float(w)
                    ext = im.format.lower() if im.format else "png"
                    if ext == "jpeg": ext = "jpg"

                    if ratio >= 1.4: # Mobile Portrait phone UI
                        saved_mobile += 1
                        fname = f"{saved_mobile:02d}_{tname}_{username}_{w}x{h}.{ext}"
                        out_path = os.path.join(MOBILE_DIR, fname)
                        with open(out_path, "wb") as f:
                            f.write(raw)
                        print(f"  [MOBILE UI SHOWCASE] {w}x{h} (ratio {ratio:.2f}) -> {fname}")
                    elif ratio <= 1.1: # Desktop / Web UI showcase
                        saved_desktop += 1
                        fname = f"{saved_desktop:02d}_{tname}_{username}_{w}x{h}.{ext}"
                        out_path = os.path.join(DESKTOP_DIR, fname)
                        with open(out_path, "wb") as f:
                            f.write(raw)
                        print(f"  [DESKTOP UI SHOWCASE] {w}x{h} (ratio {ratio:.2f}) -> {fname}")
                except Exception:
                    pass

    print(f"\n[+] Extraction Finished!")
    print(f"    Clean Mobile UI screenshots: {saved_desktop} desktop, {saved_mobile} mobile.")

if __name__ == "__main__":
    run()
