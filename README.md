# ASCII Dresden

Eine statische Website gebaut mit Hugo und Tailwind CSS.

[![license](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![hugo](https://img.shields.io/badge/hugo-0.112%2B-informational)](hugo.toml)
[![CI](https://github.com/jannikmenzel/ASCII-Website/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/jannikmenzel/ASCII-Website/actions/workflows/ci.yml)

## Projektübersicht

ASCII Dresden ist eine mehrsprachige (Deutsch/Englisch) statische Website/Blog, erstellt mit Hugo. Sie nutzt Tailwind CSS (PostCSS) für das Styling und ist so konzipiert, dass sie leicht erweitert und angepasst werden kann.

- Content in `content/` (zweisprachig: `de` + `en`).
- Layouts unter `layouts/` und Partial-Templates unter `layouts/_partials/`.
- Tailwind/PostCSS Pipeline konfiguriert in `postcss.config.js` und `tailwind.config.js`.

## Voraussetzungen

- Hugo (Version >= 0.112.0) — siehe `hugo.toml`.
- Node.js (empfohlen aktuelle LTS) und npm (oder ein alternativer Paketmanager).

## Schnellstart — lokal entwickeln

1) Repository klonen

```bash
git clone <repo-url>
cd ASCII-Website
```

2) Node-Abhängigkeiten installieren

```bash
npm install
# yarn install
# pnpm install
```

3) Hugo Server starten (lokal preview)

Installiere Hugo (https://gohugo.io/) falls nötig und starte den dev-Server:

```bash
hugo server
--disableFastRender
--ignoreCache
--noHTTPCache
--cleanDestinationDir
```

Hinweis: Hugo liest `assets/` und verwendet deine PostCSS-Konfiguration beim Erstellen, wenn die Toolchain entsprechend verfügbar ist.

4) Production Build

```bash
# Optional: CSS zuerst bauen
HUGO_ENVIRONMENT=production npx postcss assets/css/main.css -o static/css/main.css
# Dann Hugo für die Produktiv-Build:
hugo
# Ergebnisse werden in `public/` geschrieben
```

## CI & Linting

Die Repo enthält einen GitHub Actions Workflow (`.github/workflows/ci.yml`), der bei Push/PR automatisch die folgenden Schritte ausführt:

- `npm ci` — saubere Installation der Node-Dev-Dependencies
- `npm run build:css` — baut CSS mit PostCSS/Tailwind
- `hugo` — baut die Seite (un-minified) für Linting
- `npm run lint` — führt Stylelint (CSS) und HTMLHint (HTML) aus
- `hugo --minify` — optionaler Minify-Build für Deployment

Wichtige Hinweise:
- Der Linting-Schritt läuft gegen den un-minifizierten Hugo-Output, damit HTMLHint gegen menschenlesbares HTML prüft (Minifier können Attribute/Quotes verändern).
- Stelle sicher, dass `package-lock.json` committed ist, damit CI `npm ci` deterministisch läuft.

Nützliche npm-Scripts (lokal)

- `npm run build:css` — baut nur die CSS-Datei (PostCSS)
- `npm run build:lint` — baut CSS, führt `hugo` (ohne `--minify`) aus und führt die Linter aus (entspricht CI vor Minify)
- `npm run build` — baut CSS und erzeugt einen minifizierten Hugo-Build (`hugo --minify`)
- `npm run lint` — führt `lint:css` und `lint:html` (Stylelint + HTMLHint)

So reproduzierst du CI lokal

```bash
npm install
npm run build:lint
```

Wenn Linter-Fehler auftreten, behebe zuerst Template-/Partial-Ausgaben (z. B. fehlende doppelte Anführungszeichen bei Attributwerten), committe die Änderungen und wiederhole den Build.

## Projektstruktur

- `assets/` — Quelldateien für CSS, Icons, Bilder.
  - `assets/css/main.css` — Tailwind-Imports und Basiskonfiguration.
  - `assets/icons/`, `assets/images/` — statische Medien.
- `content/` — Seiten und Posts (`de` / `en`).
- `layouts/` — Hugo-Layouts und Partials.
- `data/menu.json` — strukturierte Daten für Menü.
- `hugo.toml` — Hugo-Konfiguration (Sprache, Module, Build-Optionen).
- `package.json` — Node devDependencies (Tailwind, PostCSS).
- `public/` — generierte Site (nicht committen in typischen Workflows).

## Anpassung und Entwicklung

- Neue Seiten: `content/<lang>/...` oder `content/posts` für Blogeinträge.
- Templates: `layouts/_default/` und `layouts/_partials/` anpassen.
- Tailwind: Passe `tailwind.config.js` an (Farben, Font-Families, Content Pfade).
- PostCSS: `postcss.config.js` steuert die Pipeline; `HUGO_ENVIRONMENT` aktiviert `autoprefixer`.

## Kontakt

Bei Fragen oder Vorschlägen zur Website kontaktiere bitte:

- [jannik.menzel@ifsr.de](mailto:jannik.menzel@ifsr.de)

## Lizenz

Dieses Projekt ist unter der MIT Lizenz lizenziert. Details dazu findest du in der `LICENSE` Datei.