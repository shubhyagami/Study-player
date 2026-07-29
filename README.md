<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Segoe+UI&weight=600&size=30&pause=1000&color=0078D7&center=true&vCenter=true&width=600&lines=Local+Video+Course+Player;Windows+File+Manager+UI;VLC+Media+Player+UI;Securely+Plays+Local+Files" alt="Typing SVG" />
</div>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

# Local Video Course Player 🎬📁

A web-based video player designed specifically for watching locally downloaded courses. Built with **React** and **Vite**, it leverages the modern **File System Access API** to seamlessly read your local folders directly in the browser—without uploading any files to a server.

## ✨ Features

*   **🗂️ Windows File Manager Replica:** The left pane mirrors the classic Windows File Manager UI. Browse through your course directories with breadcrumbs, sorting, and folder structures exactly as you would on your desktop.
*   **🍿 VLC Player UI:** The right pane acts as your video player, styled accurately to resemble VLC Media Player. It includes custom controls for playback, a seek bar, volume control, and fullscreen capabilities.
*   **🔒 Secure Local Access:** Videos are never uploaded to a backend. The app requests permission to view a folder on your PC, then streams the videos directly from your local disk utilizing secure Object URLs.
*   **⚡ Lightning Fast:** Powered by Vite, ensuring rapid startup times and instantaneous interactions.

## 🚀 Getting Started

### Local Development

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <your-repo-url>
    cd "Study Player"
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:** Navigate to `http://localhost:5173`. Click **Open Course Folder**, select your local video directory (e.g., `D:\Study\Mastering Modern Java Programming`), and grant the browser permission to view the files. Double-click any folder to navigate, and double-click any video to play it.

### 🌐 Deploying to Vercel

This project is pre-configured for Vercel deployment with a `vercel.json` file to ensure proper Single Page Application (SPA) routing.

1.  Push your code to a GitHub repository.
2.  Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3.  Import your GitHub repository.
4.  Vercel will automatically detect the Vite framework. Keep the default settings (`npm run build` and `dist` output).
5.  Click **Deploy**.

> **Note:** The File System Access API requires a secure context. Because Vercel automatically provisions HTTPS for your deployments, the API will work securely in production.

## 🛠️ Tech Stack

*   **[React 18](https://react.dev/):** Core UI Framework
*   **[Vite](https://vitejs.dev/):** Build Tool & Dev Server
*   **[Lucide React](https://lucide.dev/):** High-quality SVG Icons
*   **[Date-Fns](https://date-fns.org/):** Reliable Date Formatting

## 📝 License

This project is open-source and available under the MIT License.
