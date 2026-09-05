# Study‑Player

*A lightweight, browser‑based video player that mimics a desktop file explorer.*

Open a folder on your local machine, navigate its contents, and play video files directly in the browser—no uploads, no cloud services, just a browser‑generated object URL.

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![React 18](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite 5.2](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)
![CI Status](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg)
![Last Commit](https://img.shields.io/github/last-commit/shubhyagami/Study-player?style=flat)

---

## Quick Start

1. **Clone** the repository  
   `git clone https://github.com/shubhyagami/Study-player.git`  
2. **Change directory**  
   `cd Study-player`  
3. **Install dependencies** (using the exact lockfile)  
   `npm ci`  
4. **Run the development server**  
   `npm run dev`  

Open `http://localhost:5173` in your browser. Click **Open Course Folder**, select a folder that contains video files, then double‑click a file to start playing.

---

## Features

- **File Explorer** – Breadcrumb navigation, collapsible folders, sortable list (by name, size, date).  
- **Media Controls** – Seek bar, volume slider, fullscreen toggle, playback speed, skip buttons.  
- **Local Playback** – Streams via a browser‑generated object URL; files never leave the machine.  
- **Light Bundle** – Built with React 18, Vite, Lucide React icons, and date‑fns.

---

## Development

| Action | Command |
|--------|---------|
| **Install** | `npm ci` |
| **Start** | `npm run dev` |
| **Build** | `npm run build` |
| **Preview** | `npm run preview` |
| **Test** | `npm test` |
| **Lint** | `npm run lint` |

Commit messages should follow the repository’s style guidelines. Pull requests are reviewed for quality and consistency.

---

## Deployment – Vercel

1. Push this repository to GitHub.  
2. Sign in to [Vercel](https://vercel.com).  
3. Click **New Project → Import GitHub → choose this repo**.  
4. Vercel detects Vite automatically. Keep the defaults (`npm run build`, output folder `dist`).  
5. Click **Deploy**.

The site will be live at the URL Vercel provides.

---

## Tech Stack

- **React 18** – UI framework  
- **Vite 5.2** – Build tool & dev server  
- **Lucide React** – Icon set  
- **date‑fns** – Date formatting

---

## Contributing

Pull requests are welcome. Please keep the code clean, follow the existing style conventions, and add tests where appropriate. All contributions will be reviewed for quality and consistency.

---

## License

MIT © [shubhyagami](https://github.com/shubhyagami)

---

## Changelog

- **2026‑09‑04** – Minor bug fixes, badge updates.  
- **2026‑08‑20** – Documentation overhaul, clarified dev workflow, UI refinements.
