# tam-nguyen.ch

Unabhängige Website für Tam Nguyen (Next.js 14, App Router, TypeScript).

## Technologie-Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Installation

1. Installieren Sie die Abhängigkeiten:

```bash
npm install
```

oder

```bash
yarn install
```

oder

```bash
pnpm install
```

## Entwicklung

Starten Sie den Development Server:

```bash
npm run dev
```

Die Seite ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Build

Erstellen Sie einen Production Build:

```bash
npm run build
```

Starten Sie den Production Server:

```bash
npm start
```

## Struktur

- `/app` - Next.js App Router Seiten und Layouts
- `/components` - React Komponenten
- `/public` - Statische Assets (optional)

## Deployment (separat von tavyro.ch)

Dieses Projekt wird als eigenes Repository und eigenes Vercel-Projekt betrieben.

### 1) GitHub Repository anlegen

```bash
cd /Users/Tam/tam-nguyen
git init
git add .
git commit -m "Initial commit: tam-nguyen.ch"
gh repo create tam-nguyen-ch --private --source . --remote origin --push
```

Falls `gh` nicht vorhanden ist:

```bash
git remote add origin git@github.com:<DEIN-USERNAME>/tam-nguyen-ch.git
git branch -M main
git push -u origin main
```

### 2) Vercel Projekt anlegen

```bash
cd /Users/Tam/tam-nguyen
vercel
```

Empfohlene Antworten im Setup:
- Scope: persönliches Konto oder gewünschtes Team
- Link to existing project: `No`
- Project name: `tam-nguyen-ch`
- Directory: `.`
- Framework: `Next.js` (wird automatisch erkannt)

### 3) Domain verbinden

```bash
vercel domains add tam-nguyen.ch
vercel domains add www.tam-nguyen.ch
```

Danach in Vercel die Domain dem Projekt `tam-nguyen-ch` zuweisen.

### 4) Künftige Deployments

Jeder Push auf `main` deployed automatisch. Alternativ:

```bash
vercel --prod
```
