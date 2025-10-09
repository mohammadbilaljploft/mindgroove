"use client";
import { createContext, useContext, useState, useEffect } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Play a track
  const playTrack = (track) => {
    setCurrentTrack(track);
    setProgress(0);
    setIsPlaying(true);
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Progress updater
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 1000); // You can adjust speed
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack]);

  return (
    <PlayerContext.Provider
      value={{ currentTrack, isPlaying, progress, playTrack, togglePlayPause }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
