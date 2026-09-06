# Study‑Player

A lightweight browser‑based video player that mimics a desktop file explorer.  
Open a folder on your machine and browse its contents in the browser—no uploads or cloud services; videos stream from a browser‑generated object URL.

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)  
![React 18](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)  
![Vite 5.2](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite)  
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)  
![CI Status](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg)  
![Last Commit](https://img.shields.io/github/last-commit/shubhyagami/Study-player?style=flat)

> **Live demo**: https://study-player.vercel.app

---

## Overview

* **Local file browsing** – Use breadcrumb navigation, folder collapsing, and sorting (by name, size, date).  
* **Video playback** – Standard controls: seek, volume, full‑screen, playback speed, skip buttons.  
* **Zero‑upload** – All media is streamed directly from the selected folder via an object URL.  
* **Fast, small bundle** – Built with React 18, Vite, Lucide React icons, and date‑fns.

---

## Getting Started

> **Prerequisites**  
> Node ≥ 18.x, npm ≥ 9.x

```bash
# Clone the repo
git clone https://github.com/shubhyagami/Study-player.git
cd Study-player

# Install dependencies
npm ci

# Start the dev server
npm run dev
```

Open <http://localhost:5173> in a browser. Click **Open Course Folder**, choose a folder that contains video files, and double‑click a file to start playing.

---

## Usage

1. **Open Folder** – The dialog filters for directories only.  
2. **Navigate** – Breadcrumbs at the top show the current path; folders can be collapsed/expanded.  
3. **Play** – Double‑click a file or click the play button next to it.  
4. **Controls** – Use the seek bar, volume slider, full‑screen toggle, and speed selector.  
5. **Sorting** – Click the column headers to sort the list.

---

## Features

- File explorer with breadcrumb navigation, collapsible folders, and sortable tables.  
- Full set of media controls: seek, volume, full‑screen, speed, skip.  
- Local object‑URL streaming (files never leave the machine).  
- Responsive layout, dark/light theme switch.  
- Lightweight build (~120 kB gzipped).

---

## Development

| Action        | Command             |
|---------------|---------------------|
| Install       | `npm ci`            |
| Dev server    | `npm run dev`       |
| Build         | `npm run build`     |
| Preview build | `npm run preview`   |
| Test          | `npm test`          |
| Lint          | `npm run lint`      |

Try to keep PRs small and focused. Run the full test suite and linting before submitting.

---

## Deploy to Vercel

1. Push the repo to GitHub.  
2. Sign in to [Vercel](https://vercel.com).  
3. Click **New Project → Import GitHub → choose this repo**.  
4. Use the defaults (`npm run build`, output folder `dist`).  
5. Click **Deploy**.

The preview URL will be available in the Vercel dashboard.

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

Pull requests are welcome.  
Please follow these guidelines:

1. Keep the code style consistent (Prettier + ESLint).  
2. Write unit tests for new functionality.  
3. Use short, descriptive commit messages.  
4. Update the changelog when adding features or fixing bugs.

---

## License

MIT © [shubhyagami](https://github.com/shubhyagami)

---

## Changelog

- **2026‑09‑04** – Minor bug fixes, badge updates.  
- **2026‑08‑20** – Documentation overhaul, clarified dev workflow, UI refinements.
