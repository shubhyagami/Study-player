------------- README.md :: Study Player
=====================================

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Segoe+UI&weight=600&size=30&pause=1000&color=0078D7&center=true&vCenter=true&width=600&lines=Local+Video+Course+Player;Windows+File+Manager+UI;VLC+Media+Player+UI;Securely+Plays+Local+Files)](#study-player)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)]()
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)]()

## Study Player: A Local Video Course Player

A web-based video player for watching locally downloaded courses, built with React and Vite.

### Key Features

*   **File Explorer UI**: A classic Windows File Manager-like UI, allowing you to browse course directories with breadcrumbs, sorting, and standard folder navigation.
*   **VLC-inspired Player**: A custom playback control, styled after VLC Media Player, including a seek bar, volume control, and fullscreen support.
*   **Secure Local Access**: Videos are played securely using Object URLs, without uploading them to a backend.

### Getting Started

To run the Study Player locally, follow these steps:

1.  Install Node.js and a Chromium-based browser (such as Google Chrome or Microsoft Edge) on your system.
2.  Clone the repository: `git clone https://github.com/shubhyagami/Study-player.git` and navigate to the project directory: `cd Study-player`
3.  Install dependencies: `npm install`
4.  Start the development server: `npm run dev`
5.  Open your browser to the local address provided in your terminal (typically `http://localhost:5173`), click **Open Course Folder**, select your local video directory, grant the browser permission to view the files, and double-click any video to play it

### Deploying to Vercel

To deploy the Study Player to Vercel, follow these steps:

1.  Push your code to a GitHub repository
2.  Log in to [Vercel](https://vercel.com/) and click **Add New Project**
3.  Import your GitHub repository
4.  Vercel will automatically detect the Vite framework, keep the default settings (`npm run build` and `dist` output)
5.  Click **Deploy**

### Tech Stack

*   **React 18**: Core UI Framework
*   **Vite**: Build Tool & Dev Server
*   **Lucide React**: High-quality SVG Icons
*   **Date-Fns**: Reliable Date Formatting

### License

This project is open-source and available under the MIT License.

### Changelog

*   **August 2026**: Cleaned up project documentation and standardized local development workflows

### Contributing

If you wish to contribute to the Study Player project, please submit a pull request with your changes. I, [shubhyagami](https://github.com/shubhyagami/Study-player), will review and merge your contributions.

[![Contributors](https://img.shields.io/badge/Contributors-shubhyagami-0078D7)]()

[![GitHub](https://img.shields.io/badge/GitHub-shubhyagami-0078D7)]()
[![MIT License](https://img.shields.iobddge/MIT)]()
