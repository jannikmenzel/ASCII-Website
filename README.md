![cover.png](static/images/cover.png)

# ASCII Dresden

[![Run Lighthouse CI](https://github.com/jannikmenzel/ASCII-Website/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/jannikmenzel/ASCII-Website/actions/workflows/lighthouse.yml)
[![license](https://img.shields.io/badge/license-MIT-orange.svg)](LICENSE)
[![hugo](https://img.shields.io/badge/hugo-0.154%2B-informational)](hugo.toml)
[![tailwindcss](https://img.shields.io/badge/tailwind--css-3.4+-informational)](tailwind.config.js)
[![postcss](https://img.shields.io/badge/postcss-8.5+-informational)](postcss.config.js)

Eine statische Website gebaut mit Hugo und Tailwind CSS.

## Projektübersicht

ASCII Dresden ist eine mehrsprachige (Deutsch/Englisch) statische Website/Blog, erstellt mit Hugo. Sie nutzt Tailwind CSS (PostCSS) für das Styling und ist so konzipiert, dass sie leicht erweitert und angepasst werden kann.

- Content in `content/` (zweisprachig: `de` + `en`).
- Layouts unter `layouts/` und Partial-Templates unter `layouts/_partials/`.
- Tailwind/PostCSS Pipeline konfiguriert in `postcss.config.js` und `tailwind.config.js`.

## Lighthouse Performance

![Performance](https://img.shields.io/badge/Performance-97%25-brightgreen)
![Accessibility](https://img.shields.io/badge/Accessibility-94%25-brightgreen)
![Best Practices](https://img.shields.io/badge/Best%20Practices-100%25-brightgreen)
![SEO](https://img.shields.io/badge/SEO-100%25-brightgreen)

## Voraussetzungen

> [!NOTE]
> Die angegebenen Versionen stellen sicher, dass alle Features (insbesondere Tailwind + PostCSS) korrekt funktionieren.

- Hugo (Version >= 0.112.0) — siehe `hugo.toml`.
- Node.js (empfohlen aktuelle LTS) und npm (oder ein alternativer Paketmanager).

## Schnellstart — lokal entwickeln

> [!TIP]
> Stelle sicher, dass **Hugo** und **Node.js (LTS)** installiert sind, bevor du mit dem Schnellstart beginnst.

### 1) Repository klonen

```bash
git clone https://github.com/jannikmenzel/ASCII-Website
cd ASCII-Website
```

### 2) Node-Abhängigkeiten installieren

```bash
npm install
# yarn install
# pnpm install
```

### 3) Hugo Server starten (lokal preview)

Installiere Hugo falls nötig und starte den dev-Server:

#### Hugo installieren

```bash
# macOS / Linux (mit Homebrew)
brew install hugo
```

```bash
# Windows (mit Chocolatey)
choco install hugo -y
```

Weitere Informationen findest du [hier](https://gohugo.io/getting-started/installing/).

```bash
hugo server
--disableFastRender
--ignoreCache
--noHTTPCache
--cleanDestinationDir
```

> [!IMPORTANT]
> Hugo liest Dateien aus `assets/` und nutzt beim Build automatisch deine **PostCSS- und Tailwind-Konfiguration**, sofern die Toolchain verfügbar ist.

### 4) Production Build

```bash
# Optional: CSS zuerst bauen
HUGO_ENVIRONMENT=production npx postcss assets/css/main.css -o static/css/main.css
# Dann Hugo für die Produktiv-Build:
hugo
# Ergebnisse werden in `public/` geschrieben
```

## Projektstruktur

- `assets/` — Quelldateien für CSS, Icons, Bilder.
  - `assets/css/main.css` — Tailwind-Imports und Basiskonfiguration.
  - `assets/icons/`, `assets/images/` — statische Medien.
- `content/` — Seiten und Posts (`de` / `en`).
- `layouts/` — Hugo-Layouts und Partials.
- `data/menu.json` — strukturierte Daten für Menü.
- `hugo.toml` — Hugo-Konfiguration (Sprache, Module, Build-Optionen).
- `package.json` — Node devDependencies (Tailwind, PostCSS).
- `static/` — statische Dateien (Dokumente, Bilder).
- `public/` — generierte Site.

## Anpassung und Entwicklung

- Neue Seiten: `content/<lang>/...` oder `content/posts` für Blogeinträge.
- Templates: `layouts/_default/` und `layouts/_partials/` anpassen.
- Tailwind: Passe `tailwind.config.js` an (Farben, Font-Families, Content Pfade).
- PostCSS: `postcss.config.js` steuert die Pipeline; `HUGO_ENVIRONMENT` aktiviert `autoprefixer`.

## Features

- Mehrsprachigkeit (DE / EN) mit Hugo i18n.
- Schnelle Ladezeiten durch statische Generierung.
- Modernes Utility-First Styling mit Tailwind CSS.
- Saubere SEO-Basics (Meta-Tags, strukturierte Inhalte).
- Hohe Lighthouse-Scores (Performance, Accessibility, SEO).

## Contribution

Beiträge sind willkommen:

1. Fork erstellen.
2. Feature-Branch anlegen.
3. Änderungen committen.
4. Pull Request öffnen.

## Kontakt

> [!NOTE]
> Bei Fragen oder Vorschlägen zur Website kannst du mich per E-Mail erreichen:
> **[jannik.menzel@ifsr.de](mailto:jannik.menzel@ifsr.de)**

## Lizenz

Der Sourcecode dieses Projektes ist unter der MIT Lizenz lizenziert. Details dazu findest du in der `LICENSE` Datei.
