---
name: android-screen-inspection
description: Fast 1-step Android device and emulator screen inspection, UI hierarchy extraction, visual verification, and element coordinate discovery using direct adb exec-out streams and scripts/read_screen.py. Use whenever verifying live screens, finding tap/swipe coordinates, or checking on-screen text.
---

# Android Screen Inspection & UI Verification (1-Step Direct Streams)

Use these patterns to inspect Android screens instantly without multi-step temporary file operations (`adb shell uiautomator dump` followed by `adb pull`).

---

## 1. Fast Full UI & Coordinates (`read_screen.py`)

Inspect all visible text, buttons, and clickable targets along with their center `(cx, cy)` coordinates for tapping:

```bash
python3 scripts/read_screen.py
```

### Finding Elements to Tap:
To find a specific button or label:
```bash
python3 scripts/read_screen.py --search "Stroke Tracing"
```
Output:
```
Found 1 match(es) for 'Stroke Tracing':
  [CLICKABLE] "書き順 • Stroke Tracing" -> center: (540, 1838) | bounds: [42,1599][1038,2078]
```
Then tap directly:
```bash
adb shell input tap 540 1838
```

---

## 2. Fast Visual Screenshot Stream

Take a screenshot directly to your host machine without creating or pulling files on device storage:

```bash
adb exec-out screencap -p > /tmp/screen.png
```
Or via script:
```bash
python3 scripts/read_screen.py --shot /tmp/screen.png
```
Then view with `view_file` to visually verify styling, layout, or animations.

---

## 3. Quick Raw Text Grep (One-Liner)

To quickly extract all raw visible text on the screen:

```bash
adb exec-out uiautomator dump /dev/tty | grep -o 'text="[^"]*"'
```
Or structured:
```bash
python3 scripts/read_screen.py --text
```

---

## 4. Full XML View Hierarchy

When debugging complex nested layouts or checking accessibility labels:

```bash
adb exec-out uiautomator dump /dev/tty
```
