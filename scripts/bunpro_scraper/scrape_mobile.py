import asyncio
import os
import re
from urllib.parse import urlparse
from playwright.async_api import async_playwright

OUTPUT_DIR = "scripts/bunpro_scraper/screenshots"
DESKTOP_DIR = os.path.join(OUTPUT_DIR, "desktop")
MOBILE_DIR = os.path.join(OUTPUT_DIR, "mobile")

START_URLS = [
    "https://bunpro.jp/",
    "https://bunpro.jp/grammar_points",
    "https://bunpro.jp/cram",
    "https://community.bunpro.jp/",
    "https://community.bunpro.jp/c/feedback/3",
    "https://community.bunpro.jp/c/grammar/8",
    "https://community.bunpro.jp/c/japanese/9",
    "https://community.bunpro.jp/latest",
    "https://community.bunpro.jp/top",
    "https://bunpro.jp/apps",
    "https://bunpro.jp/grammar_points/だ",
    "https://bunpro.jp/grammar_points/です",
    "https://bunpro.jp/grammar_points/は",
    "https://bunpro.jp/grammar_points/も",
    "https://bunpro.jp/grammar_points/これ",
    "https://bunpro.jp/grammar_points/それ",
    "https://bunpro.jp/grammar_points/あれ",
    "https://bunpro.jp/grammar_points/の",
    "https://bunpro.jp/grammar_points/いい",
    "https://bunpro.jp/grammar_points/い-adjectives",
    "https://bunpro.jp/grammar_points/な-adjectives",
    "https://bunpro.jp/grammar_points/か",
    "https://bunpro.jp/grammar_points/が",
    "https://bunpro.jp/grammar_points/よ",
    "https://bunpro.jp/grammar_points/ね",
    "https://bunpro.jp/grammar_points/る-Verbs",
    "https://bunpro.jp/grammar_points/う-Verbs",
    "https://bunpro.jp/grammar_points/を",
    "https://bunpro.jp/grammar_points/polite-verb-endings",
    "https://bunpro.jp/grammar_points/るverb-ない",
]

def sanitize_filename(url: str, prefix: str) -> str:
    cleaned = re.sub(r'https?://', '', url)
    cleaned = re.sub(r'[^a-zA-Z0-9_-]', '_', cleaned).strip('_')
    if len(cleaned) > 80:
        cleaned = cleaned[:80]
    return f"{prefix}_{cleaned}.png"

async def capture_mobile_screens():
    os.makedirs(MOBILE_DIR, exist_ok=True)
    os.makedirs(DESKTOP_DIR, exist_ok=True)
    print(f"[*] Starting genuine mobile device emulation capture into {MOBILE_DIR}...")

    async with async_playwright() as p:
        browser = await p.chromium.launch(
            executable_path="/home/neon/.local/bin/google-chrome",
            headless=True,
            args=[
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-gpu",
            ]
        )

        iphone = p.devices["iPhone 14 Pro"]
        mobile_context = await browser.new_context(
            **iphone,
            locale="en-US"
        )
        mobile_page = await mobile_context.new_page()

        # Direct CDP session to verify emulation
        cdp = await mobile_context.new_cdp_session(mobile_page)
        await cdp.send("Network.enable")
        await cdp.send("Page.enable")

        count = 0
        for url in START_URLS:
            count += 1
            print(f"[{count}/{len(START_URLS)}] Mobile loading: {url}")
            try:
                await mobile_page.goto(url, wait_until="networkidle", timeout=20000)
            except Exception:
                try:
                    await mobile_page.goto(url, wait_until="domcontentloaded", timeout=15000)
                except Exception as err:
                    print(f"    Failed: {err}")
                    continue

            await mobile_page.wait_for_timeout(1500)
            mobile_fn = sanitize_filename(url, prefix=f"{count:02d}_mobile")
            mobile_path = os.path.join(MOBILE_DIR, mobile_fn)
            await mobile_page.screenshot(path=mobile_path, full_page=False)
            print(f"    Saved true mobile: {mobile_fn}")

        await browser.close()
        print(f"\n[+] Mobile capture complete!")

if __name__ == "__main__":
    asyncio.run(capture_mobile_screens())
