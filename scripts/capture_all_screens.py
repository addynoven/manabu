import json
import urllib.request
import os
import time
import subprocess
import base64

PAIRS_BASE = "/home/neon/programs/android/react_native/manabu/google_stitch_pairs"
PROD_BASE_URL = "https://manabu-admin.vercel.app"

# Helper to capture web screen via CDP
def capture_cdp(target_url, dest_path, width=1920, height=1080):
    try:
        # Get target page ws
        with urllib.request.urlopen("http://localhost:9222/json/list") as r:
            pages = json.loads(r.read().decode())
        page = next((p for p in pages if "manabu" in p.get("url", "") or "manabu" in p.get("title", "").lower()), None)
        if not page:
            page = pages[0]
        
        ws_url = page["webSocketDebuggerUrl"]
        
        # Use node websocket client script to navigate, resize and screenshot
        js_code = f"""
        const WebSocket = require('ws');
        const fs = require('fs');
        const ws = new WebSocket('{ws_url}');
        let id = 1;
        function send(method, params = {{}}) {{
            const currentId = id++;
            ws.send(JSON.stringify({{ id: currentId, method, params }}));
            return currentId;
        }}
        ws.on('open', () => {{
            send('Emulation.setDeviceMetricsOverride', {{ width: {width}, height: {height}, deviceScaleFactor: 1, mobile: false }});
            send('Page.navigate', {{ url: '{target_url}' }});
        }});
        ws.on('message', (data) => {{
            const msg = JSON.parse(data);
            if (msg.method === 'Page.loadEventFired' || msg.method === 'Page.frameStoppedLoading') {{
                setTimeout(() => {{
                    const ssId = send('Page.captureScreenshot', {{ format: 'png' }});
                    ws.on('message', (subData) => {{
                        const subMsg = JSON.parse(subData);
                        if (subMsg.id === ssId && subMsg.result && subMsg.result.data) {{
                            fs.writeFileSync('{dest_path}', Buffer.from(subMsg.result.data, 'base64'));
                            ws.close();
                            process.exit(0);
                        }}
                    }});
                }}, 1500);
            }}
        }});
        setTimeout(() => {{
            send('Page.captureScreenshot', {{ format: 'png' }});
            ws.on('message', (subData) => {{
                const subMsg = JSON.parse(subData);
                if (subMsg.result && subMsg.result.data) {{
                    fs.writeFileSync('{dest_path}', Buffer.from(subMsg.result.data, 'base64'));
                    ws.close();
                    process.exit(0);
                }}
            }});
        }}, 6000);
        """
        res = subprocess.run(["node", "-e", js_code], timeout=15, capture_output=True)
        if os.path.exists(dest_path) and os.path.getsize(dest_path) > 1000:
            print(f"  [CDP SUCCESS] Saved {dest_path} ({os.path.getsize(dest_path)/1024:.1f} KB)")
            return True
    except Exception as e:
        print(f"  [CDP ERROR] {e}")
    return False

# Helper to capture emulator screen via adb
def capture_emu(dest_path):
    try:
        subprocess.run(f"adb exec-out screencap -p > '{dest_path}'", shell=True, timeout=10)
        if os.path.exists(dest_path) and os.path.getsize(dest_path) > 1000:
            print(f"  [EMU SUCCESS] Saved {dest_path} ({os.path.getsize(dest_path)/1024:.1f} KB)")
            return True
    except Exception as e:
        print(f"  [EMU ERROR] {e}")
    return False

def emu_tap(x, y):
    subprocess.run(["adb", "shell", "input", "tap", str(x), str(y)], timeout=5)
    time.sleep(1.2)

def emu_nav_deeplink(route):
    subprocess.run(["adb", "shell", "am", "start", "-a", "android.intent.action.VIEW", "-d", f"manabu://{route}", "com.anonymous.manabu"], timeout=5)
    time.sleep(2.0)

# Web targets
WEB_SCREENS = {
    "01_Manabu_Mobile_Onboarding__Welcome_Screen": f"{PROD_BASE_URL}/",
    "02_Kanji_Index__Deep_Explorer": f"{PROD_BASE_URL}/kanji",
    "08_Dojo_Dashboard": f"{PROD_BASE_URL}/",
    "09_Kana_Chart__Stroke_Sandbox": f"{PROD_BASE_URL}/kana",
    "10_Conjugator_Sandbox_Workstation": f"{PROD_BASE_URL}/conjugator",
    "12_Community_Discussions__Peer_Leaderboards": f"{PROD_BASE_URL}/friends",
    "13_Workstation_Settings__System_Preferences": f"{PROD_BASE_URL}/admin",
    "14_Vocabulary_Decks__Audio_Dictionary": f"{PROD_BASE_URL}/vocab",
    "15_bunprojp-designmd": f"{PROD_BASE_URL}/",
    "16_Arcade_Hub__Kaijugation_Battles": f"{PROD_BASE_URL}/arcade",
    "18_Japanese_Cloze_Study__Review_Session": f"{PROD_BASE_URL}/review",
    "23_Profile_Retention_Analytics__Badges": f"{PROD_BASE_URL}/friends",
    "25_Grammar_Library__Topic_Academy": f"{PROD_BASE_URL}/academy",
    "27_Cram_Session__Deck_Builder": f"{PROD_BASE_URL}/cram",
}

print("1. Capturing Web Desktop Screens via CDP...")
for folder, url in WEB_SCREENS.items():
    dest = os.path.join(PAIRS_BASE, folder, "prod_pic.png")
    print(f"Capturing {folder}...")
    capture_cdp(url, dest)

print("\n2. Capturing Mobile Emulator Screens via ADB...")

# Mobile screens configuration
# 03: Celebration modal
# 04: Dictionary sheet
# 05: Blitz modal
# 06: Karuta Arena
# 07: Arcade Lobby
# 11: Revision Gate Modal
# 17: Kanji Duel Arena
# 19: Daily Quests Modal
# 20: Shiritori Arena
# 21: Survival Gauntlet Modal
# 22: Grammar Guide Full Reader
# 24: SRS Item Mastery Modal
# 26: Mobile Theme Sheet Modal
# 28: Lesson Drawer Modal
# 29: Lesson Interactive Exercise Stage

# Go to Arcade Hub first for arcade modes
print("Navigating emulator to Arcade Hub...")
emu_tap(675, 2291) # Arcade tab

# 07_Arcade_Battle_Lobby__Matchmaker_Modal
dest_07 = os.path.join(PAIRS_BASE, "07_Arcade_Battle_Lobby__Matchmaker_Modal", "prod_pic.png")
capture_emu(dest_07)

# 06_Online_PvP_Karuta_Battle_Slap_Arena
dest_06 = os.path.join(PAIRS_BASE, "06_Online_PvP_Karuta_Battle_Slap_Arena", "prod_pic.png")
# Tap Kanji Duel or Karuta
emu_tap(540, 950)
capture_emu(dest_06)

# Back
subprocess.run(["adb", "shell", "input", "keyevent", "4"])
time.sleep(1)

# 17_Online_PvP_Kanji_Duel_Arena
dest_17 = os.path.join(PAIRS_BASE, "17_Online_PvP_Kanji_Duel_Arena", "prod_pic.png")
emu_tap(540, 1150)
capture_emu(dest_17)
subprocess.run(["adb", "shell", "input", "keyevent", "4"])
time.sleep(1)

# 20_Online_PvP_Shiritori_Arena
dest_20 = os.path.join(PAIRS_BASE, "20_Online_PvP_Shiritori_Arena", "prod_pic.png")
emu_tap(540, 1350)
capture_emu(dest_20)
subprocess.run(["adb", "shell", "input", "keyevent", "4"])
time.sleep(1)

# 05_Time-Attack_Blitz_Challenge_Modal
dest_05 = os.path.join(PAIRS_BASE, "05_Time-Attack_Blitz_Challenge_Modal", "prod_pic.png")
emu_tap(540, 1550)
capture_emu(dest_05)
subprocess.run(["adb", "shell", "input", "keyevent", "4"])
time.sleep(1)

# 21_Survival_Gauntlet_Mode_Modal
dest_21 = os.path.join(PAIRS_BASE, "21_Survival_Gauntlet_Mode_Modal", "prod_pic.png")
emu_tap(540, 1750)
capture_emu(dest_21)
subprocess.run(["adb", "shell", "input", "keyevent", "4"])
time.sleep(1)

# Navigate to Dojo Tab
print("Navigating emulator to Dojo tab...")
emu_tap(135, 2291) # Dojo tab

# 28_Lesson_Drawer__Launch_Modes_Modal
dest_28 = os.path.join(PAIRS_BASE, "28_Lesson_Drawer__Launch_Modes_Modal", "prod_pic.png")
# Tap Lesson 1 card
emu_tap(540, 1050)
capture_emu(dest_28)

# 29_Lesson_Interactive_Exercise_Stage
dest_29 = os.path.join(PAIRS_BASE, "29_Lesson_Interactive_Exercise_Stage", "prod_pic.png")
# Tap Start Lesson inside drawer
emu_tap(540, 2050)
capture_emu(dest_29)

# 03_Unit_Completion_Celebration__Rewards_Modal
dest_03 = os.path.join(PAIRS_BASE, "03_Unit_Completion_Celebration__Rewards_Modal", "prod_pic.png")
capture_emu(dest_03)

# Exit lesson back to Dojo
subprocess.run(["adb", "shell", "input", "keyevent", "4"])
time.sleep(1)
subprocess.run(["adb", "shell", "input", "keyevent", "4"])
time.sleep(1)

# 11_Unit_Milestone_Revision_Gate_Exam_Modal
dest_11 = os.path.join(PAIRS_BASE, "11_Unit_Milestone_Revision_Gate_Exam_Modal", "prod_pic.png")
# Tap Revision Gate / Checkpoint item
emu_tap(540, 1850)
capture_emu(dest_11)
subprocess.run(["adb", "shell", "input", "keyevent", "4"])
time.sleep(1)

# 19_Daily_Quests__Streak_Hub_Modal
dest_19 = os.path.join(PAIRS_BASE, "19_Daily_Quests__Streak_Hub_Modal", "prod_pic.png")
# Tap Streak badge at top
emu_tap(900, 120)
capture_emu(dest_19)
subprocess.run(["adb", "shell", "input", "keyevent", "4"])
time.sleep(1)

# 22_Grammar_Guide_Full_Reader_Modal & 04_Curated_Set_Dictionary_Sheet_Modal
dest_22 = os.path.join(PAIRS_BASE, "22_Grammar_Guide_Full_Reader_Modal", "prod_pic.png")
dest_04 = os.path.join(PAIRS_BASE, "04_Curated_Set_Dictionary_Sheet_Modal", "prod_pic.png")
emu_tap(300, 120) # Summary / Guide
capture_emu(dest_22)
capture_emu(dest_04)
subprocess.run(["adb", "shell", "input", "keyevent", "4"])
time.sleep(1)

# Navigate to Review Tab
print("Navigating emulator to Review tab...")
emu_tap(405, 2291) # Review tab

# 24_SRS_Item_Mastery_Intelligence_Drawer_Modal
dest_24 = os.path.join(PAIRS_BASE, "24_SRS_Item_Mastery_Intelligence_Drawer_Modal", "prod_pic.png")
emu_tap(540, 1200) # Tap SRS item
capture_emu(dest_24)

# Navigate to Profile Tab
print("Navigating emulator to Profile tab...")
emu_tap(945, 2291) # Profile tab

# 26_Mobile_Theme__Haptic_Styling_Sheet_Modal
dest_26 = os.path.join(PAIRS_BASE, "26_Mobile_Theme__Haptic_Styling_Sheet_Modal", "prod_pic.png")
emu_tap(540, 1400) # Theme Settings
capture_emu(dest_26)

print("\n--- Screenshot collection completed ---")
