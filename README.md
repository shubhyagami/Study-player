# Study‑Player

A lightweight browser‑based video player that behaves like a desktop file explorer.  
Open a folder on your machine, browse its contents, and play video files directly in the
browser—no uploads or cloud services, only local object URLs.

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![React 18](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite 5.2](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)
![CI Status](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg)
![Last Commit](https://img.shields.io/github/last-commit/shubhyagami/Study-player?style=flat)

---

## Quick Start

```bash
git clone https://github.com/shubhyagami/Study-player.git
cd Study-player
npm ci
npm run dev
```

Open `http://localhost:5173` in your browser. Click **Open Course Folder**, select a folder that contains video files, and double‑click a file to start playing.

---

## Features

- **File Explorer** – Breadcrumb navigation, collapsible folders, sortable list (by name, size, date).  
- **Media Controls** – Seek bar, volume slider, fullscreen toggle, playback speed, skip buttons.  
- **Local Playback** – Streams via a browser‑generated object URL; files never leave the machine.  
- **Light Bundle** – Built with React 18, Vite, Lucide React icons, and date‑fns.

---

## Development

| Action      | Command            |
|-------------|--------------------|
| Install     | `npm ci`           |
| Start dev   | `npm run dev`      |
| Build       | `npm run build`    |
| Preview     | `npm run preview`  |
| Test        | `npm test`          |
| Lint        | `npm run lint`     |

Commit messages should follow the repository’s style guidelines. Pull requests are reviewed for quality and consistency.

---

## Deploy to Vercel

1. Push the repo to GitHub.  
2. Sign in to [Vercel](https://vercel.com).  
3. Click **New Project → Import GitHub → choose this repo**.  
4. Keep the defaults (`npm run build`, output folder `dist`).  
5. Click **Deploy**.

The live URL will be provided by Vercel.

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
