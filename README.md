[K[2m  [2mmodel deepseek-ai/deepseek-v4.1-flash failed, trying next...[0m[0m
# Study Player

Browser‑based video player that lets you open a local folder, browse its contents, and stream videos directly from your machine.  
No files leave your computer and no cloud service is required.

[Live Demo](https://study-player.vercel.app)

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)  
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)  
![Vite](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite)  
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)  
![CI](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg)  
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)

## Features

- **Local playback** – Stream videos with `ObjectURL`; files never leave your computer.  
- **Folder navigation** – Browse a folder tree and use a breadcrumb trail.  
- **Custom controls** – Seek bar, volume, fullscreen, playback speed, and skip forward/backward.  
- **Sorting** – Sort files by name, size, or date.  
- **Theme toggle** – Switch between light and dark mode.  
- **Small bundle** – Approximately 120 kB gzipped.

## Quick Start

```bash
git clone https://github.com/shubhyagami/Study-player.git
cd Study-player
npm ci
npm run dev
```

Open `http://localhost:5173`, click **Open Folder**, select a directory containing videos, and double‑click a file to play.

## Development

| Task | Command | Description |
|------|---------|-------------|
| Install dependencies | `npm ci` | Install the exact versions from `package-lock.json`. |
| Start dev server | `npm run dev` | Launch Vite with hot‑reload. |
| Build production | `npm run build` | Generate static assets in `dist/`. |
| Preview build | `npm run preview` | Serve the production build locally. |
| Run tests | `npm test` | Execute the Jest test suite. |
| Lint & format | `npm run lint` | Run ESLint and Prettier checks. |

## Tech Stack

- **Framework** – React 18  
- **Bundler** – Vite 5  
- **Icons** – Lucide React  
- **Utilities** – date-fns  
- **Testing** – Jest + React Testing Library  
- **Linting** – ESLint + Prettier

## Deployment

The project is ready for deployment on Vercel.

1. Push your changes to GitHub.  
2. In Vercel, create a new project and import this repository.  
3. Keep the default build command (`npm run build`) and output directory (`dist`).  
4. Deploy.

## Contributing

1. Fork the repository and create a feature branch.  
2. Keep the code linted with `npm run lint`.  
3. Add tests for any new or changed functionality.  
4. Submit a pull request with a clear description of the changes.

## License

MIT – see the [LICENSE](LICENSE) file.

## Changelog

- **2026‑09‑24** – Documentation cleanup and README refresh.  
- **2026‑09‑19** – README cleanup and documentation updates.  
- **2026‑09‑04** – Bug fixes and badge updates.  
- **2026‑08‑20** – UI refinements and workflow improvements.
