# Study Player

A lightweight desktop‑style video player built with React and Vite that lets you browse and play local video files directly in the browser, without uploading anything to the cloud.

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![React 18.2](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite 5.2](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)
![Build Status](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg)

---

## 📦 Installation

```bash
# Clone
git clone https://github.com/shubhyagami/Study-player.git
cd Study-player

# Install dependencies
npm ci

# Run in development mode
npm run dev
```

Open `http://localhost:5173` in a browser. Click **Open Course Folder**, select a folder that contains video files, and double‑click a file to play.

---

## 🎛️ Features

| Feature | Description |
|---------|-------------|
| Desktop‑style file explorer | Breadcrumbs, collapsible directories, sortable list by name, size or date. |
| VLC‑style media controls | Seek bar, volume, fullscreen, playback speed, and a clean UI. |
| Secure local playback | Streams the file through an in‑browser object URL; data never leaves the machine. |
| Minimal footprint | Built with React 18, Vite, Lucide React icons, and date‑fns only. |

---

## 🛠️ Development

```bash
# Production build
npm run build

# Preview the built app
npm run preview

# Run tests
npm test
```

> All changes should be committed with clear, concise messages. PRs are reviewed against the existing style conventions.

---

## 🚀 Deployment

### Vercel

1. Push the repo to GitHub.  
2. Sign in to [Vercel](https://vercel.com).  
3. Click **Add New Project** → Import GitHub → choose this repo.  
4. Vercel auto‑detects Vite; keep the default build command `npm run build` and output directory `dist`.  
5. Click **Deploy**.

---

## 📚 Tech Stack

- **React 18** – UI library
- **Vite** – Build tool & dev server
- **Lucide React** – Icon set
- **date-fns** – Date formatting

---

## 📄 License

MIT © [shubhyagami](https://github.com/shubhyagami)

---

## 🔄 Changelog

* **2026‑08** – Updated documentation, clarified local dev workflow, refined UI descriptions.  
* **2026‑09** – Minor bug fixes and badge updates.

---

## 🤝 Contributing

Pull requests are welcome! Please keep the code clean, follow the existing style conventions, and add tests where appropriate. The maintainer will review and merge qualified contributions.
