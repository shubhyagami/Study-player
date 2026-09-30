[K[2m  [2mmodel z-ai/glm-5.3-flash failed, trying next...[0m[0m
[K[2m  [2mmodel deepseek-ai/deepseek-v4.1-flash failed, trying next...[0m[0m
# Study Player

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite&style=flat-square)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&style=flat-square)
![CI](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg?style=flat-square)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen?style=flat-square)

> A lightweight browser‑based video player that runs entirely on your machine. Open a folder, browse its contents, and play local videos – nothing is uploaded or streamed.

[Live demo](https://study-player.vercel.app)

---

## Features

- **Local playback** – no uploads, no network traffic  
- **Directory browsing** with an interactive breadcrumb trail  
- **Full‑featured controls** – seek, volume, playback speed, skip, fullscreen  
- **Sorting** – by name, size or modification date  
- **Light / dark theme toggle**  
- **Tiny footprint** – ~120 kB gzipped bundle

---

## Quick start

```bash
# Clone & install
git clone https://github.com/shubhyagami/Study-player.git
cd Study-player
npm ci

# Run locally
npm run dev
```

Open <http://localhost:5173>, click **Open Folder**, select a directory that contains video files, and double‑click a video to start playing.

---

## Development

| Task            | Command          | Description                                |
|-----------------|------------------|--------------------------------------------|
| Install deps    | `npm ci`         | Install exact dependency versions         |
| Dev server      | `npm run dev`    | Start Vite with hot‑reload                |
| Build           | `npm run build`  | Generate production assets in `dist/`    |
| Preview build   | `npm run preview`| Serve the production build locally          |
| Tests           | `npm test`       | Run Jest test suite                       |
| Lint & format   | `npm run lint`   | Run ESLint and Prettier checks             |

---

## Tech stack

- **Framework** – React 18
- **Bundler** – Vite 5
- **Testing** – Jest + React Testing Library
- **Linting** – ESLint + Prettier
- **Icons** – Lucide React
- **Date handling** – date-fns

---

## Deployment

Deploying to Vercel is straightforward:

1. Push your changes to GitHub.  
2. In Vercel, create a new project and import this repository.  
3. Keep the default build command (`npm run build`) and output directory (`dist`).  
4. Click **Deploy**.

---

## Contributing

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/...`.  
3. Keep the code linted (`npm run lint`).  
4. Write or update tests for new/changed functionality.  
5. Open a pull request with a clear description of the changes.

---

## License

MIT © [shubhyagami](https://github.com/shubhyagami)

---

## Changelog

- **2026‑09‑26** – README cleanup and restructuring.  
- **2026‑09‑24** – Documentation cleanup, updated badges.  
- **2026‑09‑04** – Bug fixes and workflow improvements.  
- **2026‑08‑20** – UI refinements, workflow updates.
