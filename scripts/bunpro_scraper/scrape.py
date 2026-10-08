import asyncio
import os
import re
from urllib.parse import urljoin, urlparse
from playwright.async_api import async_playwright

OUTPUT_DIR = "scripts/bunpro_scraper/screenshots"
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
]

VIEWPORTS = [
    {"name": "desktop", "width": 1440, "height": 900},
    {"name": "mobile", "width": 390, "height": 844, "is_mobile": True},
]

def sanitize_filename(url: str, prefix: str, suffix: str = "") -> str:
    cleaned = re.sub(r'https?://', '', url)
    cleaned = re.sub(r'[^a-zA-Z0-9_-]', '_', cleaned).strip('_')
    if len(cleaned) > 80:
        cleaned = cleaned[:80]
    return f"{prefix}_{cleaned}{suffix}.png"

async def capture_screens():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"[*] Starting screenshot capture into {OUTPUT_DIR}...")

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

        visited = set()
        queue = list(START_URLS)

        # 1. Desktop Pass
        context_desktop = await browser.new_context(
            viewport={"width": 1440, "height": 900},
            user_agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
        )
        page_desktop = await context_desktop.new_page()

        # Connect directly to Chrome DevTools Protocol session
        cdp_session = await context_desktop.new_cdp_session(page_desktop)
        await cdp_session.send("Network.enable")
        await cdp_session.send("Page.enable")

        count = 0
        limit = 30

        while queue and count < limit:
            url = queue.pop(0)
            if url in visited:
                continue
            visited.add(url)
            count += 1

            print(f"[{count}/{limit}] Navigating: {url}")
            try:
                await page_desktop.goto(url, wait_until="networkidle", timeout=20000)
            except Exception as e:
                try:
                    await page_desktop.goto(url, wait_until="domcontentloaded", timeout=15000)
                except Exception as err:
                    print(f"    Failed to load {url}: {err}")
                    continue

            await page_desktop.wait_for_timeout(1500)

            # Capture Desktop Full Page
            desktop_fn = sanitize_filename(url, prefix=f"{count:02d}_desktop")
            desktop_path = os.path.join(OUTPUT_DIR, desktop_fn)
            try:
                await page_desktop.screenshot(path=desktop_path, full_page=False)
                print(f"    Saved desktop: {desktop_fn}")
            except Exception as e:
                print(f"    Screenshot error: {e}")

            # Capture Mobile Viewport via CDP Device Metrics Emulation
            try:
                await cdp_session.send("Emulation.setDeviceMetricsOverride", {
                    "width": 390,
                    "height": 844,
                    "deviceScaleFactor": 2,
                    "mobile": True
                })
                await page_desktop.wait_for_timeout(800)
                mobile_fn = sanitize_filename(url, prefix=f"{count:02d}_mobile")
                mobile_path = os.path.join(OUTPUT_DIR, mobile_fn)
                await page_desktop.screenshot(path=mobile_path, full_page=False)
                print(f"    Saved mobile (CDP): {mobile_fn}")
                
                # Reset metrics
                await cdp_session.send("Emulation.clearDeviceMetricsOverride")
            except Exception as e:
                print(f"    CDP emulation error: {e}")

            # Collect further community / feature links if on community or bunpro
            try:
                links = await page_desktop.eval_on_selector_all("a[href]", "elements => elements.map(e => e.href)")
                for link in links:
                    parsed = urlparse(link)
                    if parsed.netloc in ["community.bunpro.jp", "bunpro.jp"]:
                        clean_link = link.split("#")[0].split("?")[0]
                        # Prioritize topics and specific product pages
                        if any(k in clean_link for k in ["/t/", "/c/", "/app", "/grammar_points", "/vocabulary", "/roadmap"]):
                            if clean_link not in visited and clean_link not in queue:
                                queue.append(clean_link)
            except Exception as e:
                pass

        await browser.close()
        print(f"\n[+] Scraping complete! Captured {len(os.listdir(OUTPUT_DIR))} screenshots in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(capture_screens())
