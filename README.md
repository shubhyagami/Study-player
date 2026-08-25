------------- README.md :: Study Player
=====================================

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Segoe+UI&weight=600&size=30&pause=1000&color=0078D7&center=true&vCenter=true&width=600&lines=Local+Video+Course+Player;Windows+File+Manager+UI;VLC+Media+Player+UI;Securely+Plays+Local+Files)](#study-player)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)]()
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)]()
[![File System Access API](https://img.shields.io/badge/File_System_Access_API-0078D7?style=for-the-badge&logo=googlechrome&logoColor=white)]()
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)]()

## Study Player

A web-based video player for watching locally downloaded courses, built with React and Vite.

### Key Features

*   **File Explorer UI**: A classic Windows File Manager-like UI on the left pane, allowing you to browse course directories with breadcrumbs, sorting, and standard folder navigation.
*   **VLC-inspired Player**: A custom playback control on the right pane, styled after VLC Media Player, including a seek bar, volume control, and fullscreen support.
*   **Secure Local Access**: Videos are never uploaded to a backend. The app requests permission to view a local directory, then streams the files securely using Object URLs.
*   **Fast Performance**: Powered by Vite for rapid startup times and instantaneous interactions.

## Getting Started

To run the Study Player locally, follow these steps:

1.  Install Node.js and a Chromium-based browser (such as Google Chrome or Microsoft Edge) on your system.
2.  Clone the repository: `git clone https://github.com/shubhyagami/Study-player.git` and navigate to the project directory: `cd Study-player`
3.  Install dependencies: `npm install`
4.  Start the development server: `npm run dev`
5.  Open your browser to the local address provided in your terminal (typically `http://localhost:5173`), click **Open Course Folder**, select your local video directory, grant the browser permission to view the files, and double-click any video to play it

## Deploying to Vercel

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

### Changelog

*   **August 2026**: Cleaned up project documentation and standardized local development workflows

## License

This project is open-source and available under the MIT License.

### Contributors

Maintained by shubhyagami.

Also, updated with a shortbddge for File System Access API and remain confidential, for other api badges, you can add the necessary information.

[![File System Access API](https://img.shields.io/badge/File_System_Access_API-0078D7?style=for-the-badge&logo=googlechrome&logoColor=white)]()

And added nothing more about contributors, as no informarion was provided.
