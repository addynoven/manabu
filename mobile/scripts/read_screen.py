#!/usr/bin/env python3
"""
Fast 1-Step Android Screen Reader & UI Inspector
Uses direct stream commands (adb exec-out) for zero-disk roundtrips.

Usage:
  python3 scripts/read_screen.py               # List interactive/text elements with (cx, cy)
  python3 scripts/read_screen.py --text        # Compact list of visible text only
  python3 scripts/read_screen.py --search "あ" # Find nodes matching query with coordinates
  python3 scripts/read_screen.py --shot        # Save screenshot to /tmp/screen.png
  python3 scripts/read_screen.py --shot out.png# Save screenshot to custom path
"""

import argparse
import os
import re
import subprocess
import sys
import xml.etree.ElementTree as ET


def get_ui_hierarchy_xml() -> str:
    """Fetch UI hierarchy directly via adb exec-out without disk I/O."""
    try:
        proc = subprocess.run(
            ['adb', 'exec-out', 'uiautomator', 'dump', '/dev/tty'],
            capture_output=True,
            text=True,
            timeout=10,
        )
        output = proc.stdout or ''
    except Exception:
        output = ''

    # Extract XML substring between <hierarchy and </hierarchy>
    start_tag = '<hierarchy'
    end_tag = '</hierarchy>'
    start_idx = output.find(start_tag)
    end_idx = output.find(end_tag)

    if start_idx != -1 and end_idx != -1:
        return output[start_idx : end_idx + len(end_tag)]

    # Fallback to file-based dump if direct tty pipe is unsupported
    try:
        subprocess.run(
            ['adb', 'shell', 'uiautomator', 'dump', '/sdcard/window_dump.xml'],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            timeout=10,
        )
        raw = subprocess.check_output(
            ['adb', 'shell', 'cat', '/sdcard/window_dump.xml'],
            timeout=5,
        ).decode('utf-8', errors='replace')
        return raw
    except Exception as e:
        sys.stderr.write(f"Error fetching UI hierarchy: {e}\n")
        sys.exit(1)


def parse_nodes(xml_str: str):
    """Parse UI nodes into structured entries with bounds and center coordinates."""
    try:
        root = ET.fromstring(xml_str)
    except Exception as e:
        sys.stderr.write(f"Error parsing XML hierarchy: {e}\n")
        sys.exit(1)

    items = []
    seen = set()

    for node in root.iter('node'):
        text = node.attrib.get('text', '').strip()
        desc = node.attrib.get('content-desc', '').strip()
        bounds = node.attrib.get('bounds', '')
        clickable = node.attrib.get('clickable', 'false') == 'true'
        checkable = node.attrib.get('checkable', 'false') == 'true'
        scrollable = node.attrib.get('scrollable', 'false') == 'true'

        display = text or desc
        if not display:
            continue

        cx, cy = 0, 0
        m = re.match(r'\[(\d+),(\d+)\]\[(\d+),(\d+)\]', bounds)
        if m:
            x1, y1, x2, y2 = map(int, m.groups())
            cx = (x1 + x2) // 2
            cy = (y1 + y2) // 2

        key = (display, cx, cy)
        if key in seen:
            continue
        seen.add(key)

        kind = 'CLICKABLE' if clickable or checkable else 'TEXT'
        if scrollable:
            kind = 'SCROLL'

        items.append({
            'kind': kind,
            'text': text,
            'desc': desc,
            'display': display,
            'bounds': bounds,
            'cx': cx,
            'cy': cy,
            'class': node.attrib.get('class', '').split('.')[-1],
        })

    return items


def take_screenshot(dest_path: str):
    """Capture screen directly using adb exec-out screencap stream."""
    dest_path = os.path.expanduser(dest_path)
    os.makedirs(os.path.dirname(os.path.abspath(dest_path)), exist_ok=True)
    with open(dest_path, 'wb') as f:
        subprocess.run(['adb', 'exec-out', 'screencap', '-p'], stdout=f, check=True)
    print(f"Screenshot saved to: {dest_path}")


def main():
    parser = argparse.ArgumentParser(description="Fast 1-Step Android Screen Reader & UI Inspector")
    parser.add_argument('--text', '-t', action='store_true', help="Print only visible text strings")
    parser.add_argument('--search', '-s', type=str, help="Search for elements matching string")
    parser.add_argument('--shot', nargs='?', const='/tmp/screen.png', type=str, help="Take screenshot stream (default: /tmp/screen.png)")

    args = parser.parse_args()

    if args.shot:
        take_screenshot(args.shot)
        return

    xml_str = get_ui_hierarchy_xml()
    nodes = parse_nodes(xml_str)

    if args.search:
        q = args.search.lower()
        matched = [
            n for n in nodes
            if q in n['display'].lower() or q in n['text'].lower() or q in n['desc'].lower()
        ]
        if not matched:
            print(f"No elements matching '{args.search}'")
            return
        print(f"Found {len(matched)} match(es) for '{args.search}':")
        for n in matched:
            print(f"  [{n['kind']}] \"{n['display']}\" -> center: ({n['cx']}, {n['cy']}) | bounds: {n['bounds']}")
        return

    if args.text:
        unique_texts = []
        seen = set()
        for n in nodes:
            t = n['display']
            if t not in seen:
                seen.add(t)
                unique_texts.append(t)
        for t in unique_texts:
            print(t)
        return

    # Default: Show clean list of UI elements with center coordinates for tapping
    print(f"--- Screen UI Elements ({len(nodes)} visible) ---")
    for n in nodes:
        print(f"[{n['kind']:9}] {n['display'][:40]:<40} -> ({n['cx']:4}, {n['cy']:4}) | {n['bounds']}")


if __name__ == '__main__':
    main()
