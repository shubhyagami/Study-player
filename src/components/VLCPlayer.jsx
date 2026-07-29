import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, Pause, Square, SkipBack, SkipForward, Volume2, VolumeX, Maximize,
  ListVideo, Settings2
} from 'lucide-react';
import './VLCPlayer.css';

export function VLCPlayer({ file }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (file && videoRef.current) {
      const url = URL.createObjectURL(file);
      videoRef.current.src = url;
      videoRef.current.play();
      setIsPlaying(true);
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration));
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const seekTime = (e.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setProgress(e.target.value);
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      setIsMuted(val === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (isMuted) {
        videoRef.current.volume = volume || 1;
        setVolume(volume || 1);
      } else {
        videoRef.current.volume = 0;
        setVolume(0);
      }
    }
  };

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const formatTime = (time) => {
    if (isNaN(time)) return '00:00';
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  if (!file) {
    return (
      <div className="vlc-container empty">
        <div className="vlc-cone-placeholder">
          VLC Media Player
        </div>
      </div>
    );
  }

  return (
    <div className="vlc-container" ref={containerRef}>
      <div className="vlc-menu-bar">
        <span>Media</span>
        <span>Playback</span>
        <span>Audio</span>
        <span>Video</span>
        <span>Subtitle</span>
        <span>Tools</span>
        <span>View</span>
        <span>Help</span>
      </div>
      
      <div className="vlc-video-wrapper" onDoubleClick={toggleFullscreen}>
        <video 
          ref={videoRef}
          className="vlc-video"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          onClick={togglePlay}
        />
      </div>

      <div className="vlc-controls">
        <div className="vlc-timeline">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={progress || 0} 
            onChange={handleSeek}
            className="vlc-seek-bar"
          />
        </div>
        
        <div className="vlc-controls-bottom">
          <div className="vlc-controls-left">
            <button className="vlc-btn" onClick={togglePlay}>
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button className="vlc-btn" onClick={stopVideo}>
              <Square size={16} />
            </button>
            <button className="vlc-btn">
              <SkipBack size={18} />
            </button>
            <button className="vlc-btn">
              <SkipForward size={18} />
            </button>
            <span className="vlc-time">{currentTime} / {duration}</span>
          </div>
          
          <div className="vlc-controls-right">
            <button className="vlc-btn" onClick={toggleMute}>
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={volume} 
              onChange={handleVolumeChange}
              className="vlc-vol-bar"
            />
            <button className="vlc-btn">
              <Settings2 size={18} />
            </button>
            <button className="vlc-btn">
              <ListVideo size={18} />
            </button>
            <button className="vlc-btn" onClick={toggleFullscreen}>
              <Maximize size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
