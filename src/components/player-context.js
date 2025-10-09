"use client"

import { createContext, useContext, useEffect, useMemo, useRef, useState, useCallback } from "react"
import tracksData from "@/components/lib/tracks"

const PlayerContext = createContext(null)

export function PlayerProvider({ children }) {
  const [tracks] = useState(tracksData)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const audioRef = useRef(null)

  const currentTrack = useMemo(() => tracks[currentIndex], [tracks, currentIndex])

  // Attach audio element listeners once available
  const attachAudioHandlers = useCallback((audioEl) => {
    if (!audioEl) return
    audioEl.volume = volume

    const onTime = () => setCurrentTime(audioEl.currentTime || 0)
    const onLoaded = () => setDuration(audioEl.duration || 0)
    const onEnd = () => playNext()

    audioEl.addEventListener("timeupdate", onTime)
    audioEl.addEventListener("loadedmetadata", onLoaded)
    audioEl.addEventListener("ended", onEnd)

    return () => {
      audioEl.removeEventListener("timeupdate", onTime)
      audioEl.removeEventListener("loadedmetadata", onLoaded)
      audioEl.removeEventListener("ended", onEnd)
    }
  }, []) // eslint-disable-line

  // When index changes, load new source and play
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (!currentTrack) return
    audio.src = currentTrack.audioUrl
    audio
      .play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch(() => {
        setIsPlaying(false)
      })
  }, [currentTrack])

  // Keep volume in sync
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  // mount handlers
  useEffect(() => {
    if (!audioRef.current) return
    return attachAudioHandlers(audioRef.current)
  }, [attachAudioHandlers])

  const playTrack = (index) => {
    if (index === currentIndex) {
      // toggle if the same track row is clicked
      togglePlay()
      return
    }
    setCurrentIndex(index)
  }

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true))
    }
  }

  const playNext = () => {
    setCurrentIndex((i) => (i + 1) % tracks.length)
  }

  const playPrev = () => {
    setCurrentIndex((i) => (i - 1 + tracks.length) % tracks.length)
  }

  const seek = (time) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = time
    setCurrentTime(time)
  }

  const ctx = {
    tracks,
    currentIndex,
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    setVolume,
    playTrack,
    togglePlay,
    playNext,
    playPrev,
    seek,
    audioRef, // used by BottomPlayer to render the <audio> element
  }

  return <PlayerContext.Provider value={ctx}>{children}</PlayerContext.Provider>
}

export function usePlayer() {
  const ctx = useContext(PlayerContext)
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider")
  return ctx
}
