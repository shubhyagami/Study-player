[K[2m  [2mmodel deepseek-ai/deepseek-v4.1-flash failed, trying next...[0m[0m
# Study Player

A browser‑based video player that lets you open a local folder, browse its contents, and stream videos directly from your machine.  
All files stay on your device – no upload, no cloud service.

[Live demo](https://study-player.vercel.app)

---

## Badges

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite&style=flat-square)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&style=flat-square)
![CI](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg?style=flat-square)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen?style=flat-square)

---

## Features

- **Local playback** – Uses `ObjectURL`; the video never leaves your computer.  
- **Folder navigation** – Browse the directory tree and use a breadcrumb trail.  
- **Custom controls** – Seek bar, volume, fullscreen, playback speed, skip forward/backward.  
- **Sorting** – Order files by name, size, or date.  
- **Theme toggle** – Light or dark mode.  
- **Small bundle** – ~120 kB gzipped.

---

## Quick Start

```bash
git clone https://github.com/shubhyagami/Study-player.git
cd Study-player
npm ci
npm run dev
```

Open `http://localhost:5173` in your browser, click **Open Folder**, choose a directory that contains video files, and double‑click a video to play it.

---

## Development

| Task             | Command             | Description                                 |
|------------------|---------------------|---------------------------------------------|
| Install          | `npm ci`            | Install exact dependency versions.           |
| Dev server       | `npm run dev`       | Start Vite with hot‑reload.                 |
| Production build | `npm run build`      | Generate static assets in `dist/`.          |
| Preview build    | `npm run preview`   | Serve the production build locally.           |
| Test             | `npm test`          | Run the Jest test suite.                     |
| Lint & format    | `npm run lint`      | Run ESLint and Prettier checks.              |

---

## Tech Stack

- **Framework** – React 18  
- **Bundler** – Vite 5  
- **Icons** – Lucide React  
- **Utilities** – date‑fns  
- **Testing** – Jest + React Testing Library  
- **Linting** – ESLint + Prettier

---

## Deployment

The project is ready for deployment on Vercel.  
1. Push your changes to GitHub.  
2. In Vercel, create a new project and import this repository.  
3. Keep the default build command `npm run build` and output directory `dist`.  
4. Hit **Deploy**.

---

## Contributing

1. Fork the repo and create a feature branch.  
2. Keep the code linted (`npm run lint`).  
3. Add tests for new or changed functionality.  
4. Submit a pull request with a clear description.

Bug reports, feature requests, and PRs are welcome.

---

## License

MIT – see the [LICENSE](LICENSE) file.

---

## Changelog

- **2026‑09‑24** – Documentation cleanup, updated badges.  
- **2026‑09‑04** – Bug fixes and workflow improvements.  
- **2026‑08‑20** – UI refinements, workflow updates.  

---
