#!/usr/bin/env python3
import xml.etree.ElementTree as ET
import subprocess
import re
import sys

def read_screen():
    # Dump window hierarchy via uiautomator
    subprocess.run(['adb', 'shell', 'uiautomator', 'dump', '/sdcard/window_dump.xml'], 
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    try:
        raw = subprocess.check_output(['adb', 'shell', 'cat', '/sdcard/window_dump.xml']).decode('utf-8')
    except Exception as e:
        print(f"Error reading window dump: {e}")
        sys.exit(1)
        
    try:
        root = ET.fromstring(raw)
    except Exception as e:
        print(f"Error parsing XML: {e}")
        sys.exit(1)

    seen = set()
    items = []
    for node in root.iter('node'):
        text = node.attrib.get('text', '').strip()
        desc = node.attrib.get('content-desc', '').strip()
        bounds = node.attrib.get('bounds', '')
        clickable = node.attrib.get('clickable', 'false') == 'true'
        
        display = text or desc
        if display:
            m = re.match(r'\[(\d+),(\d+)\]\[(\d+),(\d+)\]', bounds)
            if m:
                x1, y1, x2, y2 = map(int, m.groups())
                cx = (x1 + x2) // 2
                cy = (y1 + y2) // 2
                key = (display, cx, cy)
                if key not in seen:
                    seen.add(key)
                    kind = 'CLICKABLE' if clickable else 'TEXT'
                    items.append((kind, display, cx, cy))

    for kind, val, x, y in items:
        print(f"[{kind}] {val:32} -> ({x}, {y})")

if __name__ == '__main__':
    read_screen()
