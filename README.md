<p align="center">
  <img src="mobile/assets/images/icon.png" alt="Manabu" width="120" />
</p>

<h1 align="center">学ぶ Manabu</h1>

<p align="center">
  <strong>Master Japanese — from first Kana to JLPT N1</strong>
  <br />
  Standalone Expo React Native Mobile App & Next.js 16 Web Workstation with stroke tracing, FSRS-6 spaced repetition, live cross-platform PvP, and arcade games.
</p>

<p align="center">
  <a href="https://manabu-admin.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live_Web_App-manabu--admin.vercel.app-7928CA?logo=vercel&logoColor=white" alt="Live Web App" />
  </a>
  <img src="https://img.shields.io/badge/Expo_SDK-57-000020?logo=expo" alt="Expo SDK 57" />
  <img src="https://img.shields.io/badge/React_Native-0.86.3-61DAFB?logo=react" alt="React Native 0.86.3" />
  <img src="https://img.shields.io/badge/Next.js-16.3-black?logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
</p>

---

## 🏗️ Repository Workspace Structure

The repository is organized into two 100% standalone application workspaces:

```text
manabu/
├── mobile/                   # Standalone Expo React Native Mobile App Workspace
│   ├── src/                  # React Native features, screens, components, stores
│   ├── android/              # Native Android build project & Gradle settings
│   ├── assets/               # Mobile fonts, splash screens, icons
│   ├── app.json              # Expo App configuration
│   ├── package.json          # Mobile dependencies & Expo runner scripts
│   └── tsconfig.json         # Mobile TypeScript configuration
│
├── web/                      # Standalone Next.js 16 Web Workstation Workspace
│   ├── app/                  # Route adapters & Next.js App Router endpoints
│   ├── core/                 # Web infrastructure (Aiven PostgreSQL, Valkey Redis)
│   ├── features/             # Self-contained Web domain modules & screens
│   ├── package.json          # Next.js dependencies & web scripts
│   └── scripts/              # Curriculum exporter script (syncs mobile data to web)
│
├── README.md                 # Monorepo architecture & setup guide
├── SCHEMA.md                 # PostgreSQL & Valkey database schema
├── firebase.json             # Firebase configuration
└── LICENSE                   # MIT License
```

---

## 🚀 Running Each Application

Because `web/` and `mobile/` are completely isolated standalone applications with their own dependencies:

### 📱 1. Mobile Application (React Native / Expo)

```bash
cd mobile

# Install dependencies
bun install

# Start Expo development server
bun run start

# Run on Android emulator / device
bun run android
```

### 💻 2. Web Workstation (Next.js 16)

```bash
cd web

# Install dependencies
bun install

# Start local Next.js development server
bun run dev

# Build production bundle
bun run build

# Sync latest 30-Unit curriculum data from mobile/
bun run sync:curriculum
```

---

## 🧪 Testing & Type Checking

- **Mobile App**: `cd mobile && bunx tsc --noEmit`
- **Web App**: `cd web && bun run build`
- **FSRS-6 Integration Tests**: `cd web && bun test`

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
