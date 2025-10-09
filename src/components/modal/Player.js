"use client"

import { useEffect } from "react"
import { usePlayer } from "./player-context"

function formatTime(s) {
  if (!s || Number.isNaN(s)) return "0:00"
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
    .toString()
    .padStart(2, "0")
  return `${m}:${sec}`
}

export default function BottomPlayer() {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    playNext,
    playPrev,
    currentTime,
    duration,
    seek,
    volume,
    setVolume,
    audioRef,
  } = usePlayer()

  // Ensure src set for first render in case provider hasn't triggered yet
  useEffect(() => {
    if (audioRef.current && currentTrack && !audioRef.current.src) {
      audioRef.current.src = currentTrack.audioUrl
    }
  }, [currentTrack, audioRef])

  return (
    <div className="player">
      {/* Hidden but present audio element controlled by context */}
      <audio ref={audioRef} preload="metadata" />

      <div className="player-left">
        <img
          src={"/placeholder.svg?height=56&width=56&query=album cover"}
          alt={currentTrack ? `${currentTrack.title} cover` : "cover"}
          className="player-cover"
        />
        <div className="player-meta">
          <div className="player-title">{currentTrack?.title || "—"}</div>
          <div className="player-artist">{currentTrack?.artist || ""}</div>
        </div>
      </div>

      <div className="player-center">
        <div className="controls">
          <button className="btn icon" aria-label="Previous" onClick={playPrev}>
            <svg viewBox="0 0 24 24">
              <path d="M6 6h2v12H6V6zm3.5 6 9 6V6l-9 6z" fill="currentColor" />
            </svg>
          </button>

          <button className="btn icon play" aria-label={isPlaying ? "Pause" : "Play"} onClick={togglePlay}>
            {isPlaying ? (
              <svg viewBox="0 0 24 24">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            )}
          </button>

          <button className="btn icon" aria-label="Next" onClick={playNext}>
            <svg viewBox="0 0 24 24">
              <path d="M18 6h-2v12h2V6zM7.5 12l9-6v12l-9-6z" fill="currentColor" />
            </svg>
          </button>
        </div>

        <div className="progress">
          <span className="time">{formatTime(currentTime)}</span>
          <input
            className="seek"
            type="range"
            min={0}
            max={duration || 0}
            value={Math.min(currentTime, duration || 0)}
            step={1}
            onChange={(e) => seek(Number(e.target.value))}
            aria-label="Seek"
          />
          <span className="time">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="player-right">
        <svg className="volume-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 9v6h4l5 5V4L9 9H5z" fill="currentColor"></path>
        </svg>
        <input
          className="volume"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Volume"
        />
      </div>
    </div>
  )
}
