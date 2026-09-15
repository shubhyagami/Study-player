# Study‑Player

A lightweight, browser‑based video player that lets you open a folder on your machine, browse its contents, and stream the videos locally—no uploads or cloud services needed.

> **Live demo** – https://study-player.vercel.app

## Badges

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)  
![React 18](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)  
![Vite 5](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite)  
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)  
![CI](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg)  
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)  
![Last Commit](https://img.shields.io/github/last-commit/shubhyagami/Study-player?style=flat)

## Quick start

```bash
git clone https://github.com/shubhyagami/Study-player
cd Study-player
npm ci
npm run dev
```

Open <http://localhost:5173> in your browser, click **Open Course Folder**, choose a folder that contains video files, then double‑click a file to start playing.

## Features

| Feature | Description |
|---------|-------------|
| **Local browsing** | Breadcrumb navigation, folder expansion/collapse, sortable tables (name, size, date). |
| **Video playback** | Standard controls: seek bar, volume, full‑screen, playback speed, skip forward/backward. |
| **Zero‑upload** | Files are streamed via `Object URL`s; nothing leaves your machine. |
| **Small footprint** | ~120 kB gzipped bundle (React 18 + Vite + Lucide React). |
| **Theme toggle** | Light / dark mode. |
| **Responsive** | Works on desktop and tablet screens. |

## How to use

1. **Open Folder** – Click **Open Course Folder**; the file picker accepts directories only.  
2. **Navigate** – Use the breadcrumb to view the current path and jump to parent directories. Click a folder icon to collapse or expand.  
3. **Play** – Double‑click a video file, or click the play icon next to it.  
4. **Controls** – Use the seek bar, volume slider, full‑screen toggle, speed selector, and skip buttons.  
5. **Sorting** – Click a column header to sort by name, size, or date.

## Development

| Action | Command |
|--------|---------|
| Install | `npm ci` |
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Preview built app | `npm run preview` |
| Unit tests | `npm test` |
| Lint | `npm run lint` |

> Keep your pull requests focused. Run linting and tests before submitting.

## Deploy to Vercel

1. Push the repo to GitHub.  
2. Go to <https://vercel.com> → **New Project** → **Import GitHub** → `Study-player`.  
3. Accept defaults (`npm run build` as build command, `dist` as output folder).  
4. Click **Deploy**. The preview URL appears in the dashboard.

## Tech Stack

- **React 18** – UI framework  
- **Vite 5** – Build tool & dev server  
- **Lucide React** – Icon set  
- **date‑fns** – Date formatting  
- **Jest** – Testing framework  
- **Prettier + ESLint** – Code formatting & linting

## Contributing

Pull requests are welcome. Please follow these guidelines:

1. Adhere to Prettier and ESLint rules.  
2. Add unit tests for new or changed functionality.  
3. Write clear, concise commit messages.  
4. Update the changelog after adding features or fixing bugs.

## License

MIT © [shubhyagami](https://github.com/shubhyagami)

## Changelog

- **2026‑09‑04** – Minor bug fixes, badge updates.  
- **2026‑08‑20** – Documentation overhaul, clarified dev workflow, UI refinements.
