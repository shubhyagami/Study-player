import React, { useState } from 'react';
import { useFileSystem } from './hooks/useFileSystem';
import { FileManager } from './components/FileManager';
import { VLCPlayer } from './components/VLCPlayer';
import './App.css';

function App() {
  const fileSystem = useFileSystem();
  const [currentVideo, setCurrentVideo] = useState(null);

  const handlePlayVideo = (file) => {
    setCurrentVideo(file);
  };

  return (
    <div className="app-container">
      <div className="pane file-manager-pane">
        <FileManager fileSystem={fileSystem} onPlayVideo={handlePlayVideo} />
      </div>
      <div className="pane player-pane">
        <VLCPlayer file={currentVideo} />
      </div>
    </div>
  );
}

export default App;
