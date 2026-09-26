# Study Player

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite&style=flat-square)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&style=flat-square)
![CI](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg?style=flat-square)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen?style=flat-square)

A lightweight, browser-based video player for your local video library. Open a folder from your machine, browse its contents, and play videos directly — nothing is uploaded and no cloud service is involved.

**[Live demo](https://study-player.vercel.app)**

## Features

- **Local playback** — Videos are played through object URLs (`URL.createObjectURL`), so files never leave your device.
- **Folder navigation** — Browse the directory tree with a breadcrumb trail.
- **Custom controls** — Seek bar, volume, fullscreen, playback speed, and skip forward/backward.
- **Sorting** — Order files by name, size, or date modified.
- **Theme toggle** — Switch between light and dark mode.
- **Small bundle** — ~120 kB gzipped.

## Getting Started

Requires Node.js 18+ and npm.

```bash
git clone https://github.com/shubhyagami/Study-player.git
cd Study-player
npm ci
npm run dev
```

Then open `http://localhost:5173`, click **Open Folder**, choose a directory that contains video files, and double-click a video to start playback.

## Development

| Task             | Command           | Description                        |
|------------------|-------------------|------------------------------------|
| Install deps     | `npm ci`          | Install exact dependency versions  |
| Dev server       | `npm run dev`     | Start Vite with hot reload         |
| Production build | `npm run build`   | Generate static assets in `dist/`  |
| Preview build    | `npm run preview` | Serve the production build locally |
| Tests            | `npm test`        | Run the Jest test suite            |
| Lint & format    | `npm run lint`    | Run ESLint and Prettier checks     |

## Tech Stack

- **Framework:** React 18
- **Bundler:** Vite 5
- **Icons:** Lucide React
- **Utilities:** date-fns
- **Testing:** Jest + React Testing Library
- **Linting:** ESLint + Prettier

## Deployment

The project deploys to Vercel with no extra configuration:

1. Push your changes to GitHub.
2. In Vercel, create a new project and import this repository.
3. Keep the default build command (`npm run build`) and output directory (`dist`).
4. Click **Deploy**.

## Contributing

Bug reports, feature requests, and pull requests are all welcome.

1. Fork the repository and create a feature branch.
2. Keep the code linted with `npm run lint`.
3. Add or update tests for new or changed functionality.
4. Open a pull request with a clear description.

## License

Released under the [MIT License](LICENSE).

## Changelog

- **2026-09-26** — README cleanup and restructuring.
- **2026-09-24** — Documentation cleanup, updated badges.
- **2026-09-04** — Bug fixes and workflow improvements.
- **2026-08-20** — UI refinements, workflow updates.
