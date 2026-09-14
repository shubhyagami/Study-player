# Study‑Player

A lightweight, browser‑based video player that emulates a desktop file explorer.  
Open a folder on your machine, browse its contents, and stream videos directly from the browser—no uploads or cloud services are required.

> **Live demo** – https://study-player.vercel.app

---

## Badges

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![React 18](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite 5.2](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)
![CI Status](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg)
![Last Commit](https://img.shields.io/github/last-commit/shubhyagami/Study-player?style=flat)

---

## Quick start

```bash
git clone https://github.com/shubhyagami/Study-player
cd Study-player
npm ci
npm run dev
```

Open <http://localhost:5173>. Click **Open Course Folder**, pick a folder that contains video files, then double‑click a file to start playing.

---

## Overview

| Feature | Description |
|--------|-------------|
| **Local browsing** | Breadcrumb navigation, collapsible folders, sortable tables (name, size, date). |
| **Video playback** | Standard controls: seek, volume, full‑screen, playback speed, forward / rewind buttons. |
| **Zero‑upload** | Media streams via browser‑generated Object URLs, so files never leave your machine. |
| **Tiny build** | ~120 kB gzipped (React 18, Vite, Lucide React, date‑fns). |
| **Theme toggle** | Light / dark mode. |
| **Responsive** | Works on desktop and tablet sizes. |

---

## Getting Started

### Prerequisites

- Node ≥ 18.x  
- npm ≥ 9.x

### Installation

```bash
# Clone the repo
git clone https://github.com/shubhyagami/Study-player.git
cd Study-player

# Install dependencies
npm ci
```

### Run

```bash
npm run dev
```

Open <http://localhost:5173> in a browser.  
Click **Open Course Folder**, choose a folder that contains video files, then double‑click a file to start playing.

---

## Usage

1. **Open Folder** – The file picker accepts directories only.  
2. **Navigate** – Use the breadcrumb to see the current path and jump to parent directories. Folders can be collapsed or expanded.  
3. **Play** – Double‑click a file or click the play icon next to it.  
4. **Controls** – Seek bar, volume slider, full‑screen toggle, speed selector, and skip buttons.  
5. **Sorting** – Click a column header to sort by name, size, or date.

---

## Development

| Action | Command |
|--------|---------|
| Install | `npm ci` |
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Preview build | `npm run preview` |
| Unit tests | `npm test` |
| Lint | `npm run lint` |

> Keep pull requests focused. Run linting and tests before submitting.

---

## Deploy to Vercel

1. Push the repo to GitHub.  
2. Sign into <https://vercel.com> → **New Project** → **Import GitHub** → `Study-Player`.  
3. Accept defaults (`npm run build` as build command, `dist` as output folder).  
4. Click **Deploy**. The preview URL appears in the dashboard.

---

## Tech Stack

- **React 18** – UI framework  
- **Vite 5.2** – Build tool & dev server  
- **Lucide React** – Icon set  
- **date‑fns** – Date formatting  
- **Jest** – Testing framework  
- **Prettier + ESLint** – Code formatting & linting

---

## Contributing

Pull requests are welcome. Please follow these guidelines:

1. Follow Prettier and ESLint rules.  
2. Add unit tests for new functionality.  
3. Use clear, concise commit messages.  
4. Update the changelog when you add features or fix bugs.

---

## License

MIT © [shubhyagami](https://github.com/shubhyagami)

---

## Changelog

- **2026‑09‑04** – Minor bug fixes, badge updates.  
- **2026‑08‑20** – Documentation overhaul, clarified dev workflow, UI refinements.
