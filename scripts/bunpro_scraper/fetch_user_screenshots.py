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

TOPICS = [
    {"id": 130, "name": "bug_reports"},
    {"id": 131, "name": "improvements"},
    {"id": 189617, "name": "deck_creation"},
    {"id": 118243, "name": "audio_voice"},
    {"id": 138711, "name": "fsrs_reviews"},
    {"id": 120078, "name": "study_discussion"},
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
        print(f"Error downloading image {url}: {e}")
        return None

def run():
    print("[*] Fetching user-shared screenshots from Bunpro Community posts...")
    saved_desktop = 0
    saved_mobile = 0
    seen_urls = set()

    for topic_meta in TOPICS:
        t_id = topic_meta["id"]
        t_name = topic_meta["name"]
        print(f"\nScanning Topic {t_id} ({t_name})...")
        data = fetch_json(f"https://community.bunpro.jp/t/{t_id}.json")
        if not data:
            continue

        stream = data.get("post_stream", {}).get("stream", [])
        print(f"  Total posts in thread: {len(stream)}")
        # Check the latest 120 posts
        recent_ids = stream[-120:] if len(stream) > 120 else stream
        
        # Batch in chunks of 20
        chunk_size = 20
        for i in range(0, len(recent_ids), chunk_size):
            chunk = recent_ids[i:i + chunk_size]
            query_str = "&".join([f"post_ids%5B%5D={pid}" for pid in chunk])
            posts_data = fetch_json(f"https://community.bunpro.jp/t/{t_id}/posts.json?{query_str}")
            if not posts_data:
                continue

            for post in posts_data.get("post_stream", {}).get("posts", []):
                post_num = post.get("post_number")
                username = post.get("username", "user")
                cooked = post.get("cooked", "")

                # Extract image links
                hrefs = re.findall(r'href=[\"\']([^\"\']+\.(?:png|jpg|jpeg|webp))[\"\']', cooked, re.IGNORECASE)
                srcs = re.findall(r'src=[\"\']([^\"\']+\.(?:png|jpg|jpeg|webp))[\"\']', cooked, re.IGNORECASE)
                
                # Combine & prioritize original over optimized/thumbnails
                imgs = []
                for img_url in set(hrefs + srcs):
                    if ("upload" in img_url or "original" in img_url or "discourse" in img_url) and not "emoji" in img_url and not "avatar" in img_url:
                        # Prefer original resolution if available
                        if "optimized" in img_url and hrefs:
                            continue
                        imgs.append(img_url)

                for img_url in imgs:
                    if img_url in seen_urls:
                        continue
                    seen_urls.add(img_url)

                    # Ensure absolute url
                    if img_url.startswith("/"):
                        full_url = f"https://community.bunpro.jp{img_url}"
                    else:
                        full_url = img_url

                    raw_bytes = download_image(full_url)
                    if not raw_bytes or len(raw_bytes) < 5000: # skip tiny icons/emojis
                        continue

                    try:
                        im = Image.open(BytesIO(raw_bytes))
                        w, h = im.size
                        # Skip tiny images
                        if w < 250 or h < 250:
                            continue

                        aspect_ratio = h / float(w)
                        is_mobile = aspect_ratio > 1.35  # Portrait phone screenshot

                        ext = im.format.lower() if im.format else "png"
                        if ext == "jpeg": ext = "jpg"

                        if is_mobile:
                            saved_mobile += 1
                            filename = f"user_{t_name}_p{post_num}_{username}_{w}x{h}_{saved_mobile}.{ext}"
                            filepath = os.path.join(MOBILE_DIR, filename)
                            with open(filepath, "wb") as f:
                                f.write(raw_bytes)
                            print(f"  [MOBILE APP SCREENSHOT] {w}x{h} (ratio {aspect_ratio:.2f}) -> {filename}")
                        else:
                            saved_desktop += 1
                            filename = f"user_{t_name}_p{post_num}_{username}_{w}x{h}_{saved_desktop}.{ext}"
                            filepath = os.path.join(DESKTOP_DIR, filename)
                            with open(filepath, "wb") as f:
                                f.write(raw_bytes)
                            print(f"  [DESKTOP BROWSER SCREENSHOT] {w}x{h} (ratio {aspect_ratio:.2f}) -> {filename}")

                    except Exception as e:
                        # Image parse error
                        pass

    print(f"\n[+] Done! Captured real community-shared screenshots:")
    print(f"    - Mobile App Screenshots: {saved_mobile} in {MOBILE_DIR}")
    print(f"    - Desktop Browser Screenshots: {saved_desktop} in {DESKTOP_DIR}")

if __name__ == "__main__":
    run()
