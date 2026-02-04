# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Business Context

**Rechtsanwaltskanzlei Markus Vorhauser** – Anwaltskanzlei in Südtirol, Italien.

### Über Markus Vorhauser
- Tätig in der Anwaltschaft seit **1996**
- Eingetragen bei der Rechtsanwaltskammer Bozen seit **2002**
- Ausbildung: Humanistisches Lyzeum „Beda Weber" Meran, Rechtswissenschaften Universität Bologna
- Zusatzqualifikationen: Grundbuchsführer, Mediator

### Leistungsschwerpunkte
- **Erbrecht**: Erbschaften, Testamente, Erbstreitigkeiten
- **Immobilien & Grundbuch**: Verträge, Abwicklungen, Streitsachen
- **Familienrecht**: Personen- und Familienangelegenheiten
- **Zivilrecht**: Schadenersatz, Gewährleistung, Eintreibungen
- **Strafrecht**: Verteidigung in Strafsachen

### Kontaktdaten
- **Kanzleisitz**: Freiheitsstraße 132, 39012 Meran
- **Zweigstelle**: Laubengasse 18, 39020 Glurns
- **Telefon**: +39 0473 49 10 53
- **E-Mail**: info@vorhauser.eu
- **PEC**: markus.vorhauser@legal.email.it

### Rechtliche Daten
- Steuernummer: VRHMKS68E04F132A
- MwSt.-Nr.: 01652250216
- SDI-Code: ZRBGBN7

### Zielgruppe & Sprachen
- Privat- und Geschäftskunden in Südtirol
- Sprachen: Deutsch (Standard), Italienisch

---

## Commands

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 15+ with PPR (Partial Prerendering)
- **Styling**: Tailwind CSS v4 (native CSS configuration in `app/globals.css`)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: shadcn/ui patterns
- **Type Safety**: TypeScript (strict)
- **i18n**: next-intl (DE/IT, default: DE)
- **Validation**: Zod for Server Actions

## Architecture

```
/app
  /[locale]         # Locale-specific routes (de, it)
    layout.tsx      # Root layout with Header/Footer
    page.tsx        # Homepage with sections
  /actions          # Server Actions
  globals.css       # Tailwind v4 theme configuration

/components
  /ui               # Atomic components (Button, Input, etc.)
  /sections         # Page sections (Hero, Services, Contact, Footer)

/i18n
  routing.ts        # next-intl routing config
  request.ts        # Server request config

/messages           # Translation files (de.json, it.json)
/lib                # Utilities (cn, validations)
/hooks              # Custom React hooks
/types              # TypeScript definitions
```

## Key Patterns

- Use `"use client"` only when necessary (animations, interactivity)
- Server Actions in `/app/actions/` with Zod validation
- Translations via `useTranslations()` hook
- Link component from `@/i18n/routing` for locale-aware navigation
- Glass morphism effects via `.glass` utility class
- Motion components from `@/components/ui/motion-wrapper`

## Design System

Theme variables defined in `app/globals.css`:
- Colors: Stone palette + Deep Azure accent (`--color-accent: #1d4ed8`)
- Background: `#fafaf9` (warm white)
- Font: Inter (sans-serif)
- Animations: Premium easing (`--ease-premium`)
- Glassmorphism: `--shadow-glass`, `.glass` class

## How to Extend

### Neue Seite hinzufügen
1. Erstelle `app/[locale]/neue-seite/page.tsx`
2. Füge Übersetzungen in `messages/de.json` und `messages/it.json` hinzu
3. Optional: Link in Navigation (`components/sections/Header.tsx`)

### Neue Section hinzufügen
1. Erstelle `components/sections/NeueSectionName.tsx`
2. Importiere in `app/[locale]/page.tsx`
3. Füge Übersetzungen hinzu

### Übersetzungen
- Dateien: `messages/de.json`, `messages/it.json`
- Zugriff: `const t = useTranslations('namespace')`
- Beispiel: `t('services.title')` → "Unsere Leistungen"

### Neue UI-Komponente
1. Erstelle in `components/ui/`
2. Nutze `cn()` aus `lib/utils` für Tailwind-Klassen
3. Für Animationen: `MotionDiv` aus `components/ui/motion-wrapper`

## Important Files

| Datei | Zweck |
|-------|-------|
| `app/[locale]/page.tsx` | Homepage mit allen Sections |
| `app/[locale]/layout.tsx` | Haupt-Layout mit Header/Footer |
| `app/globals.css` | Theme-Variablen (Farben, Fonts) |
| `messages/*.json` | Übersetzungen DE/IT |
| `components/sections/` | Alle Page-Sections |
| `lib/validations.ts` | Zod-Schemas für Forms |
