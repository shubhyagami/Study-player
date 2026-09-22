# Study-player

A lightweight, browser‑based video player that lets you open a local folder, browse its contents, and stream videos directly from your machine – no uploads or cloud services are involved.

[Live Demo](https://study-player.vercel.app)

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)
![CI](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)

## Features

- **Local file access** – Stream videos with `ObjectURL`; files never leave your computer.  
- **Intuitive navigation** – Folder tree view with breadcrumb trail.  
- **Custom playback controls** – Seek bar, volume, full‑screen, speed, skip forward/backward.  
- **File sorting** – Sort by name, size, or date.  
- **Light/dark mode** – Theme toggle.  
- **Tiny bundle** – ~120 kB gzipped.

## Quick start

```bash
git clone https://github.com/shubhyagami/Study-player.git
cd Study-player
npm ci
npm run dev
```

Open `http://localhost:5173`, click **Open Folder**, select a video directory, and double‑click a file to play.

## Development

| Action | Command | Description |
|--------|--------|-------------|
| Install dependencies | `npm ci` | Install exact versions |
| Start dev server | `npm run dev` | Hot‑reload development server |
| Build production | `npm run build` | Generate static assets |
| Preview build | `npm run preview` | Serve the production build locally |
| Run tests | `npm test` | Execute Jest test suite |
| Lint & format | `npm run lint` | Run ESLint & Prettier |

## Tech stack

- **Framework** – React 18  
- **Bundler** – Vite 5  
- **Icons** – Lucide React  
- **Utilities** – date-fns  
- **Testing** – Jest + React Testing Library  
- **Linting** – ESLint, Prettier

## Deployment

The repo is ready for Vercel.

1. Push changes to GitHub.  
2. In Vercel, create a new project and import the repository.  
3. Use the default build command (`npm run build`) and output directory (`dist`).  
4. Deploy.

## Contributing

1. Fork the repo and create a feature branch.  
2. Keep the code linted (`npm run lint`).  
3. Add tests for any new or changed functionality.  
4. Submit a pull request with a clear description.

## License

MIT – see the [LICENSE](LICENSE) file.

## Changelog

- **2026‑09‑19** – README cleanup and documentation updates.  
- **2026‑09‑04** – Bug fixes and badge updates.  
- **2026‑08‑20** – UI refinements and workflow improvements.
