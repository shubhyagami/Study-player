[K[2m  [2mmodel openai/gpt-oss-20b failed, trying next...[0m[0m
[K[2m  [2mmodel openai/gpt-oss-120b failed, trying next...[0m[0m
# Study-player

A lightweight, browser-based video player that allows you to open a local folder, browse its contents, and stream videos directly from your machine—no uploads or cloud services required.

**Live Demo:** [study-player.vercel.app](https://study-player.vercel.app)

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![React 18](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite 5](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)
![CI](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)

## ✨ Features

- **Local File System Access** – Stream videos via `ObjectURL`; your files never leave your computer.
- **Intuitive Navigation** – Folder tree view with breadcrumb navigation for easy traversal.
- **Advanced Playback** – Custom controls including seek bar, volume, full-screen, playback speed, and skip forward/backward.
- **File Management** – Sortable tables by name, size, and date.
- **Modern UI** – Responsive design with a built-in light/dark mode toggle.
- **Performance** – Extremely lightweight bundle (≈120kB gzipped).

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm

### Installation
```bash
git clone https://github.com/shubhyagami/Study-player.git
cd Study-player
npm ci
npm run dev
```

Once the server is running, open `http://localhost:5173` in your browser. Click **Open Folder**, select a directory containing your videos, and double-click any file to start playing.

## 🛠️ Development

| Action | Command |
| :--- | :--- |
| Install dependencies | `npm ci` |
| Start development server | `npm run dev` |
| Build for production | `npm run build` |
| Preview production build | `npm run preview` |
| Run unit tests | `npm test` |
| Lint and format code | `npm run lint` |

## 🧰 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Icons:** Lucide React
- **Utilities:** date-fns
- **Testing:** Jest
- **Linting:** ESLint & Prettier

## ☁️ Deployment

The project is configured for easy deployment to Vercel:
1. Push your changes to GitHub.
2. Import the `Study-player` repository into Vercel.
3. Use the default build settings (`npm run build` / `dist` output folder).
4. Deploy.

## 🤝 Contributing

Contributions are welcome! To maintain code quality, please ensure:
1. Your code adheres to the project's Prettier and ESLint configurations.
2. New features or bug fixes include corresponding unit tests.
3. Commit messages are clear and descriptive.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
© [shubhyagami](https://github.com/shubhyagami)

## 🗒️ Changelog

- **2026-09-19** – Comprehensive README cleanup and documentation polish.
- **2026-09-04** – Minor bug fixes and badge updates.
- **2026-08-20** – UI refinements and developer workflow improvements.
