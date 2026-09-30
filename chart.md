# 🥋 Manabu - Evaluation Cards Design & Trilingual Structure Chart

> **Pedagogical Rule**: Since the target users are English speakers learning Japanese, **every evaluation card (Correct & Incorrect)** MUST contain a clear **Trilingual Content Stack**:
> 1. 🇯🇵 **Japanese Text** (Kanji / Kana / Particles)
> 2. 🗣️ **Romaji Reading** (Phonetic Pronunciation)
> 3. 🇬🇧 **English Translation & Meaning**

---

## 📊 Summary Chart of Evaluation Cards Across All Question Modes

| Question Mode / Type | Card State | Header Status | Diff Comparison Bar | Trilingual Content Breakdown | Grammar Hint / Rule |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Dialogue Roleplay** (`dialogue`) | ✅ **Correct** | `✓ Correct!` (Green `#DEF7EC`) | *N/A (Correct)* | • Speaker prompt in **JP + Romaji + EN**<br>• Reply target in **JP** | Optional dialogue context note |
| **Dialogue Roleplay** (`dialogue`) | ❌ **Incorrect** | `✕ Incorrect` (Red `#FDE8E8`) | • **YOUR ANSWER**: Selected Option<br>• **CORRECT ANSWER**: Target Option | • Speaker prompt in **JP + Romaji + EN**<br>• Reply target in **JP** | Explanation / Cultural context |
| **Vocabulary & Kanji** (`vocab`/`kanji`) | ✅ **Correct** | `✓ Correct!` (Green `#DEF7EC`) | *N/A (Correct)* | • Target Term in **JP + Romaji + EN** | Word type / Usage tip |
| **Vocabulary & Kanji** (`vocab`/`kanji`) | ❌ **Incorrect** | `✕ Incorrect` (Red `#FDE8E8`) | • **YOUR ANSWER**: User Choice<br>• **CORRECT ANSWER**: Target Term | • Target Term in **JP + Romaji + EN** | Memory mnemonic / Radial note |
| **Cloze Particle / Sentence** (`cloze`) | ✅ **Correct** | `✓ Correct!` (Green `#DEF7EC`) | *N/A (Correct)* | • Sentence with **Highlighted Particle**<br>• Full Sentence **Romaji**<br>• Full Sentence **EN Translation** | Particle grammar rule (e.g. 助詞「は」 Topic marker) |
| **Cloze Particle / Sentence** (`cloze`) | ❌ **Incorrect** | `✕ Incorrect` (Red `#FDE8E8`) | • **YOUR ANSWER**: Wrong Particle<br>• **CORRECT ANSWER**: Right Particle | • Sentence with **Highlighted Particle**<br>• Full Sentence **Romaji**<br>• Full Sentence **EN Translation** | Particle grammar rule & why user particle was incorrect |
| **Spelling Tile Builder** (`spell`) | ✅ **Correct** | `✓ Correct!` (Green `#DEF7EC`) | *N/A (Correct)* | • Assembled Word in **JP**<br>• Word **Romaji**<br>• English Meaning | Syllable breakdown / Kana stroke tip |
| **Spelling Tile Builder** (`spell`) | ❌ **Incorrect** | `✕ Incorrect` (Red `#FDE8E8`) | • **YOUR ANSWER**: Typed/Assembled Kana<br>• **CORRECT ANSWER**: Target Kana | • Assembled Word in **JP**<br>• Word **Romaji**<br>• English Meaning | Spelling correction hint |
| **Listening Phonetics** (`listen`/`speak`) | ✅ **Correct** | `✓ Correct!` (Green `#DEF7EC`) | *N/A (Correct)* | • Spoken Phrase in **JP**<br>• Pronunciation **Romaji**<br>• English Meaning | Native speed audio tip |
| **Listening Phonetics** (`listen`/`speak`) | ❌ **Incorrect** | `✕ Incorrect` (Red `#FDE8E8`) | • **YOUR ANSWER**: User Selected Choice<br>• **CORRECT ANSWER**: Spoken Kana/Word | • Spoken Phrase in **JP**<br>• Pronunciation **Romaji**<br>• English Meaning | Pitch accent / Similar sound warning |

---

## 🎨 Visual Specifications & Design Rules

### 1. Card Container & Sheet Colors
- **Correct State**:
  - Sheet Background: `#DEF7EC` (Light Mint Green)
  - Top Border Accent: `#31C48D` (Emerald Green)
  - Header Title: `#03543F` (`✓ Correct!`)
  - Continue Button: `#0E9F6E`
- **Incorrect State**:
  - Sheet Background: `#FDE8E8` (Light Coral Red)
  - Top Border Accent: `#F98080` (Crimson Red)
  - Header Title: `#9B1C1C` (`✕ Incorrect`)
  - Continue Button: `#E02424`

### 2. Side-by-Side Diff Comparison Bar (Incorrect State)
When the user answers incorrectly, the top section of the evaluation sheet renders two side-by-side comparison pills:
```
+------------------------------------+------------------------------------+
| ✕ YOUR ANSWER                      | ✓ CORRECT ANSWER                   |
| さようなら                         | はい、元気です！                   |
+------------------------------------+------------------------------------+
```
- **YOUR ANSWER Pill**: Light red background (`#FEE2E2`), red border (`#FCA5A5`), red text (`#991B1B`).
- **CORRECT ANSWER Pill**: Light green background (`#D1FAE5`), green border (`#6EE7B7`), green text (`#065F46`).

### 3. Context Breakdown Box (`evalBreakdown`)
- Background: Translucent White (`rgba(255, 255, 255, 0.6)`)
- Border Radius: `radii.md` (12px)
- Padding: 12px
- Content Layout:
  1. **Japanese Header / Prompt**: `fontSize: 17`, `fontWeight: '800'`, `color: '#1F2937'`
  2. **Romaji Subtitle**: `fontSize: 13`, `fontWeight: '600'`, `color: '#4B5563'`
  3. **English Translation**: `fontSize: 13`, `fontWeight: '400'`, `color: '#374151'`

---

## 🛠️ Verification Commands & Diagnostic Tools

To inspect and verify live evaluation cards on a running Android device/emulator:

```bash
# 1. Dump UI Hierarchy XML
adb exec-out uiautomator dump /dev/tty

# 2. Extract Visible Text
adb exec-out uiautomator dump /dev/tty | grep -o 'text="[^"]*"'

# 3. Custom Python Screen Reader Script
python3 /home/neon/programs/android/react_native/manabu/scripts/read_screen.py
```
