# Study Player

A lightweight desktop‑style video player built with React and Vite. It lets you browse local folders, pick a video, and play it securely in the browser without uploading anything to the cloud.

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![React 18.2](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite 5.2](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/shubhyagami/Study-player.git
cd Study-player

# Install deps
npm ci

# Start dev server
npm run dev
```

Open `http://localhost:5173`, click **Open Course Folder**, pick a directory that contains your videos, then double‑click a file to play.

---

## 📚 Description

Study Player combines a Windows‑style file explorer—breadcrumbs, collapsible directory trees, and sortable entries—with a VLC‑style media controls panel (seek, volume, fullscreen, speed).  
When a video is selected, the browser creates a temporary object URL to stream the file, so the data never leaves your machine.

---

## ✨ Features

| Feature | What it does |
|---------|--------------|
| **Desktop‑like file explorer** | Navigate folders, use breadcrumbs, collapse/expand directories, sort entries by name, size or date. |
| **VLC‑style player controls** | Seek bar, volume slider, fullscreen toggle, playback speed control, and a clean UI. |
| **Secure local playback** | Streams via in‑browser object URLs; no uploads, no persistence. |
| **Minimal footprint** | Only React 18, Vite, Lucide React icons, and date‑fns are required. |

---

## 🛠 Development

```bash
# Production build
npm run build

# Preview the built app
npm run preview

# Run tests (if any)
npm test
```

---

## 🚀 Deploying to Vercel

1. Push the repo to GitHub.  
2. Sign in to [Vercel](https://vercel.com/).  
3. Click **Add New Project** → Import GitHub → choose this repo.  
4. Vercel auto‑detects Vite; keep the default build command `npm run build` and output directory `dist`.  
5. Click **Deploy**.

---

## 🧩 Tech Stack

- **React 18** – UI library
- **Vite** – Build tool & dev server
- **Lucide React** – Icon set
- **date-fns** – Date formatting

---

## 📄 License

MIT © [shubhyagami](https://github.com/shubhyagami)

---

## 🔄 Changelog

- **2026‑08** – Updated documentation, clarified local dev workflow, and refined UI descriptions.  
- **2026‑09** – Minor bug fixes and badge updates.

---

## 🤝 Contributing

Pull requests are welcome. Please keep the code clean, follow the existing style conventions, and add tests where appropriate. The maintainer will review and merge qualified contributions.
