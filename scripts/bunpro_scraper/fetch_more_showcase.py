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

HEADERS = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}

def fetch_json(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            return json.loads(resp.read().decode())
    except Exception:
        return None

def download_image(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            return resp.read()
    except Exception:
        return None

def find_target_topics():
    queries = [
        "redesign", "mobile app", "update", "dashboard", "reviews 2.0",
        "cram", "decks", "vocab", "new feature", "beta", "anki", "path steps",
        "reading", "stats", "insights"
    ]
    topic_ids = set()
    for q in queries:
        url = f"https://community.bunpro.jp/search.json?q={urllib.request.quote(q)}"
        data = fetch_json(url)
        if data:
            for t in data.get("topics", []):
                tid = t.get("id")
                # Exclude obvious bug / typo report subjects
                title = t.get("title", "").lower()
                if not any(bad in title for bad in ["[bug]", "typo", "broken", "fail", "not working", "crash"]):
                    topic_ids.add(tid)
    return list(topic_ids)

def run():
    existing_desktop = len(os.listdir(DESKTOP_DIR))
    existing_mobile = len(os.listdir(MOBILE_DIR))
    target_desktop = existing_desktop + 100
    target_mobile = existing_mobile + 100

    print(f"[*] Current count: {existing_desktop} desktop, {existing_mobile} mobile.")
    print(f"[*] Target count:  {target_desktop} desktop, {target_mobile} mobile.")

    topics = find_target_topics()
    print(f"[*] Found {len(topics)} potential feature/update topics.")

    seen_urls = set()
    saved_desktop = existing_desktop
    saved_mobile = existing_mobile

    for tid in topics:
        if saved_desktop >= target_desktop and saved_mobile >= target_mobile:
            print("[+] Target reached on both desktop and mobile!")
            break

        data = fetch_json(f"https://community.bunpro.jp/t/{tid}.json")
        if not data:
            continue

        slug = data.get("slug", f"topic_{tid}")[:30]
        posts = data.get("post_stream", {}).get("posts", [])
        if not posts:
            continue

        # Prioritize OP and staff/team posts
        for p in posts[:6]:
            cooked = p.get("cooked", "")
            username = p.get("username", "user")

            hrefs = re.findall(r'href=[\"\']([^\"\']+\.(?:png|jpg|jpeg|webp))[\"\']', cooked, re.IGNORECASE)
            srcs = re.findall(r'src=[\"\']([^\"\']+\.(?:png|jpg|jpeg|webp))[\"\']', cooked, re.IGNORECASE)

            imgs = []
            for img in set(hrefs + srcs):
                if ("upload" in img or "original" in img) and not any(skip in img for skip in ["emoji", "avatar", "badge", "icon"]):
                    imgs.append(img)

            for img_url in imgs:
                if img_url in seen_urls:
                    continue
                seen_urls.add(img_url)

                full_url = img_url if img_url.startswith("http") else f"https://community.bunpro.jp{img_url}"
                raw = download_image(full_url)
                if not raw or len(raw) < 15000:
                    continue

                try:
                    im = Image.open(BytesIO(raw))
                    w, h = im.size
                    if w < 250 or h < 250:
                        continue

                    ratio = h / float(w)
                    ext = im.format.lower() if im.format else "png"
                    if ext == "jpeg": ext = "jpg"

                    # Mobile portrait UI screenshot
                    if ratio >= 1.35 and saved_mobile < target_mobile:
                        saved_mobile += 1
                        fname = f"{saved_mobile:03d}_{slug}_{username}_{w}x{h}.{ext}"
                        out_path = os.path.join(MOBILE_DIR, fname)
                        with open(out_path, "wb") as f:
                            f.write(raw)
                        print(f"  [+ MOBILE ({saved_mobile}/{target_mobile})] {fname} ({w}x{h})")

                    # Desktop / Web UI screenshot
                    elif ratio <= 1.15 and saved_desktop < target_desktop:
                        saved_desktop += 1
                        fname = f"{saved_desktop:03d}_{slug}_{username}_{w}x{h}.{ext}"
                        out_path = os.path.join(DESKTOP_DIR, fname)
                        with open(out_path, "wb") as f:
                            f.write(raw)
                        print(f"  [+ DESKTOP ({saved_desktop}/{target_desktop})] {fname} ({w}x{h})")

                except Exception:
                    pass

    print(f"\n[+] Expansion Complete!")
    print(f"    Total Desktop UI Screenshots: {len(os.listdir(DESKTOP_DIR))}")
    print(f"    Total Mobile UI Screenshots:  {len(os.listdir(MOBILE_DIR))}")

if __name__ == "__main__":
    run()
