# Study Player

A lightweight, browser‑based video player that mimics a desktop explorer.  
Open a folder on your machine, browse the contents, and play video files locally – no uploads, no cloud calls, just an object URL.

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![React 18.2](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite 5.2](https://img.shields.io/badge/Vite-5.2.0-B73BFE?logo=vite)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)
![CI Status](https://github.com/shubhyagami/Study-player/actions/workflows/ci.yml/badge.svg)

---

## Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/shubhyagami/Study-player.git
   cd Study-player
   ```

2. **Install dependencies**  
   ```bash
   npm ci
   ```

3. **Start the dev server**  
   ```bash
   npm run dev
   ```

   Open `http://localhost:5173`, click **Open Course Folder**, pick a folder containing video files, and double‑click a file to play.

---

## Features

| Feature | Description |
|---------|-------------|
| File Explorer | Breadcrumb navigation, collapsible folders, sortable list (name, size, date). |
| Media Controls | Seek bar, volume, fullscreen, playback speed, skip controls. |
| Secure Local Playback | Streams from a browser‑generated object URL; files never leave the machine. |
| Minimal Footprint | Built with React 18, Vite, Lucide React icons, and date‑fns. |

---

## Development

| Task | Command |
|------|---------|
| Production build | `npm run build` |
| Preview build | `npm run preview` |
| Run tests | `npm test` |
| Lint & format | `npm run lint` |

> Use clear, descriptive commit messages. Pull requests are reviewed against the existing style guidelines.

---

## Deployment

### Vercel

1. Push the repository to GitHub.  
2. Sign in to [Vercel](https://vercel.com).  
3. Click **Add New Project** → **Import GitHub** → choose this repo.  
4. Vercel auto‑detects Vite; keep the default commands (`npm run build`, output: `dist`).  
5. Click **Deploy**.

The app will be available at a Vercel‑hosted URL.

---

## Tech Stack

- **React 18** – UI framework
- **Vite 5.2** – Build tool & dev server
- **Lucide React** – Icon set
- **date-fns** – Date formatting

---

## License

MIT © [shubhyagami](https://github.com/shubhyagami)

---

## Changelog

- **2026‑09** – Minor bug fixes, badge updates.  
- **2026‑08** – Documentation overhaul, clarified dev workflow, UI refinements.

---

## Contributing

Pull requests are welcome! Please keep the code clean, follow existing style conventions, and add tests where appropriate. All contributions will be reviewed by the maintainer for quality and consistency.
