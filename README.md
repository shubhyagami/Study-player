# Study‑Player

A lightweight, browser‑based video player that mimics a desktop file explorer.  
Open a folder on your machine, browse its contents, and stream videos directly from the browser—no uploads or cloud services are required.

> **Live demo** – <https://study-player.vercel.app>

---

## Badges

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![React 18](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite 5.2](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)
![CI Status](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg)
![Last Commit](https://img.shields.io/github/last-commit/shubhyagami/Study-player?style=flat)

---

## Overview

- **Local file browsing** – Breadcrumb navigation, collapsible folders, sortable columns (name, size, date).  
- **Video playback** – Standard controls: seek, volume, full‑screen, playback speed, skip buttons.  
- **Zero‑upload** – Files are streamed via the browser‑generated Object URL, so media never leaves the machine.  
- **Small, fast build** – ~120 kB gzipped, built with React 18, Vite, Lucide React, and date‑fns.

---

## Getting Started

### Prerequisites

* Node ≥ 18.x  
* npm ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/shubhyagami/Study-player.git
cd Study-player

# Install dependencies
npm ci

# Start the dev server
npm run dev
```

Open <http://localhost:5173> in a browser. Click **Open Course Folder**, select a folder that contains video files, and double‑click a file to start playing.

---

## Usage

1. **Open Folder** – The file picker accepts directories only.  
2. **Navigate** – Use the breadcrumb at the top to see the current path and to jump to parent directories. Folders can be collapsed / expanded.  
3. **Play** – Double‑click a file or click the play icon next to it.  
4. **Controls** – Use the seek bar, volume slider, full‑screen toggle, speed selector, and skip buttons.  
5. **Sorting** – Click a column header to sort by name, size, or date.

---

## Features

- File explorer UI with breadcrumb navigation, collapsible folders, and sortable tables.  
- Comprehensive media controls (seek, volume, full‑screen, speed, skip).  
- Direct streaming via object URLs (no cloud uploads).  
- Dark / light theme toggle.  
- Responsive layout for desktop and tablet.  
- Small bundle size (~120 kB gzipped).

---

## Development

| Action             | Command           |
|--------------------|-------------------|
| Install           | `npm ci`          |
| Dev server        | `npm run dev`    |
| Build             | `npm run build`   |
| Preview build     | `npm run preview` |
| Test              | `npm test`        |
| Lint              | `npm run lint`    |

> **Tip** – Keep pull requests focused and run the full test suite and linting before submitting.

---

## Deploy to Vercel

1. Push the repo to GitHub.  
2. Sign in to <https://vercel.com> and click **New Project → Import GitHub → Study‑Player**.  
3. Accept the defaults (build command `npm run build`, output folder `dist`).  
4. Click **Deploy**.  
The preview URL will appear in the Vercel dashboard.

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

1. Keep the code style consistent with Prettier + ESLint.  
2. Add unit tests for new features.  
3. Use concise, descriptive commit messages.  
4. Update the changelog when adding features or fixing bugs.

---

## License

MIT © [shubhyagami](https://github.com/shubhyagami)

---

## Changelog

- **2026‑09‑04** – Minor bug fixes, badge updates.  
- **2026‑08‑20** – Documentation overhaul, clarified dev workflow, UI refinements.
