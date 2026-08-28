# Study Player

A lightweight local video course player built with React and Vite.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

## Description

Study Player lets you watch locally downloaded courses through a familiar Windows‑style file explorer with a VLC‑inspired playback interface. Videos are streamed securely via object URLs, so no files are uploaded to any backend.

## Features

- **File Explorer UI** – Windows‑like navigation with breadcrumbs, sorting, and folder expansion.  
- **VLC‑style Player** – Custom controls including a seek bar, volume slider, and fullscreen support.  
- **Secure Local Playback** – Uses object URLs; no uploads or external storage required.  
- **Minimal dependencies** – React 18, Vite, Lucide React icons, and date‑fns for formatting.

## Prerequisites

- Node.js ≥ 18  
- A Chromium‑based browser (e.g., Chrome or Edge)

## Getting Started

1. Clone the repository:  
   ```bash
   git clone https://github.com/shubhyagami/Study-player.git
   cd Study-player
   ```  
2. Install dependencies:  
   ```bash
   npm ci
   ```  
3. Start the development server:  
   ```bash
   npm run dev
   ```  
4. Open the URL shown in the terminal (typically `http://localhost:5173`).  
   - Click **Open Course Folder**, select your video directory, grant permission, and double‑click a video to play it.

## Deploy to Vercel

1. Push your changes to a GitHub repository.  
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.  
3. Import the GitHub repository.  
4. Vercel automatically detects Vite; keep the default build command (`npm run build`) and output directory (`dist`).  
5. Click **Deploy**.

## Tech Stack

- **React 18** – UI framework  
- **Vite** – Build tool and dev server  
- **Lucide React** – Icon library  
- **date‑fns** – Date formatting utilities

## License

MIT © shubhyagami

## Changelog

- **August 2026**: Updated documentation and clarified the local development workflow.

## Contributing

Contributions are welcome! Feel free to open a pull request. I (shubhyagami) will review and merge approved changes.
