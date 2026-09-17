# Study‑player

A lightweight, browser‑based video player that lets you open a folder on your machine, browse its contents, and stream the videos locally—no uploads or cloud services required.

> **Live demo** – https://study-player.vercel.app  

## 📦 Badges

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![React 18](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite 5](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)
![CI](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)
![Last Commit](https://img.shields.io/github/last-commit/shubhyagami/Study-player?style=flat)

## 🚀 Quick start

```bash
git clone https://github.com/shubhyagami/Study-player.git
cd Study-player
npm ci
npm run dev
```

Open http://localhost:5173 in your browser. Click **Open Folder**, select a directory containing video files, then double‑click a file to play it.

## ✨ Features

- **Local browsing** – Breadcrumb navigation, folder tree, sortable tables (name, size, date).  
- **Video playback** – Seek bar, volume, full‑screen, speed control, skip forward/backward.  
- **Zero‑upload** – Files are streamed via ObjectURL; nothing leaves your computer.  
- **Lightweight** – ≈120 kB gzipped bundle (React 18 + Vite + Lucide React).  
- **Theme toggle** – Light / dark mode.  
- **Responsive** – Works on desktop and tablet screens.

## 💡 How it works

1. **Open Folder** – The file picker only accepts directories.  
2. **Navigate** – Use the breadcrumb trail to see the current path and jump to parent folders. Click folder icons to expand/collapse.  
3. **Play** – Double‑click a video or click the play icon next to it.  
4. **Controls** – Interact with the seek bar, volume slider, full‑screen toggle, speed selector, and skip buttons.  
5. **Sorting** – Click a column header to sort by name, size, or date.

## 🛠️ Development

| Action | Command |
|--------|---------|
| Install dependencies | `npm ci` |
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Preview production build | `npm run preview` |
| Run unit tests | `npm test` |
| Lint and format | `npm run lint` |

> Make sure linting and tests pass before submitting a pull request.

## ☁️ Deploy to Vercel

1. Push the repo to GitHub.  
2. In Vercel, click **New Project** > **Import GitHub** > `Study-player`.  
3. Keep the defaults (`npm run build` as the build command, `dist` as the output folder).  
4. Click **Deploy**.  

## 🧰 Tech stack

- **React 18** – UI library  
- **Vite 5** – Bundler & dev server  
- **Lucide React** – Icon set  
- **date‑fns** – Date formatting  
- **Jest** – Unit testing framework  
- **Prettier + ESLint** – Code formatting and linting

## 🤝 Contributing

Pull requests are welcome. Please:

1. Follow Prettier and ESLint rules.  
2. Add tests for new or changed features.  
3. Write clear, descriptive commit messages.  
4. Update the changelog after a release.

## 📜 License

MIT © [shubhyagami](https://github.com/shubhyagami)

## 🗒️ Changelog

- **2026‑09‑04** – Minor bug fixes, badge updates.  
- **2026‑08‑20** – Documentation overhaul, clarified dev workflow, UI refinements.
