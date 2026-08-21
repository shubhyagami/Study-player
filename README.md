<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Segoe+UI&weight=600&size=30&pause=1000&color=0078D7&center=true&vCenter=true&width=600&lines=Local+Video+Course+Player;Windows+File+Manager+UI;VLC+Media+Player+UI;Securely+Plays+Local+Files" alt="Typing SVG" />
</div>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/File_System_Access_API-0078D7?style=for-the-badge&logo=googlechrome&logoColor=white" alt="File System Access API" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License" />
</p>

# Study Player

A web-based video player tailored for watching locally downloaded courses. Built with **React** and **Vite**, Study Player leverages the modern **File System Access API** to read local directories directly in the browser. Because all file processing is handled entirely client-side, your videos are never uploaded to a server.

## ✨ Features

*   **File Explorer UI:** The left pane mirrors the classic Windows File Manager. Browse course directories using breadcrumbs, sorting, and standard folder navigation.
*   **VLC-inspired Player:** The right pane features custom playback controls styled after VLC Media Player, including a seek bar, volume control, and fullscreen support.
*   **Secure Local Access:** Videos are never uploaded to a backend. The app requests permission to view a local directory, then streams the files securely using Object URLs.
*   **Fast Performance:** Powered by Vite for rapid startup times and instantaneous interactions.

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed. A Chromium-based browser (such as Google Chrome or Microsoft Edge) is required to support the File System Access API.

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shubhyagami/Study-player.git
   cd Study-player
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Usage:**
   Open your browser to the local address provided in your terminal (typically `http://localhost:5173`). Click **Open Course Folder** and select your local video directory (e.g., `D:\Study\Course Name`). Grant the browser permission to view the files. Double-click any folder to navigate, and double-click any video to play it.

### 🌐 Deploying to Vercel

This project is pre-configured for Vercel deployment with a `vercel.json` file to ensure proper Single Page Application (SPA) routing.

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect the Vite framework. Keep the default settings (`npm run build` and `dist` output).
5. Click **Deploy**.

> **Note:** The File System Access API requires a secure context (HTTPS). Vercel automatically provisions HTTPS for your deployments, so the API will work securely in production.

## 🛠️ Tech Stack

*   **[React 18](https://react.dev/):** Core UI Framework
*   **[Vite](https://vitejs.dev/):** Build Tool & Dev Server
*   **[Lucide React](https://lucide.dev/):** High-quality SVG Icons
*   **[Date-Fns](https://date-fns.org/):** Reliable Date Formatting

## 📋 Changelog

*   **August 2026:** Cleaned up project documentation and standardized local development workflows. 
*   **Initial Release:** Implemented core file explorer UI, VLC-inspired playback controls, and secure local file streaming via the File System Access API.

## 📝 License

This project is open-source and available under the MIT License.
