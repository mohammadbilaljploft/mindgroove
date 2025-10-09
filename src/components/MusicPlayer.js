"use client"

import * as React from "react"
import Image from "next/image"
import { Shuffle, SkipBack, SkipForward, Repeat, Play, Pause, Volume2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  title: string
  artist: string
  cover: string
  src: string
  // New: when true, try to auto-play when a new src loads (use after a user click)
  autoPlayOnLoad?: boolean
}

function formatTime(secs: number) {
  if (!isFinite(secs)) return "0:00"
  const m = Math.floor(secs / 60)
  const s = Math.floor(secs % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export default function MusicPlayer({ title, artist, cover, src, autoPlayOnLoad = false }: Props) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [volume, setVolume] = React.useState(0.6)
  const [isLoop, setIsLoop] = React.useState(false)
  const [isShuffle, setIsShuffle] = React.useState(false)

  React.useEffect(() => {
    const audio = new Audio(src)
    audioRef.current = audio
    audio.volume = volume
    const onLoaded = () => setDuration(audio.duration || 0)
    const onTime = () => setCurrentTime(audio.currentTime || 0)
    const onEnd = () => setIsPlaying(false)

    audio.addEventListener("loadedmetadata", onLoaded)
    audio.addEventListener("timeupdate", onTime)
    audio.addEventListener("ended", onEnd)

    if (autoPlayOnLoad) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay might be blocked; keep paused state
          setIsPlaying(false)
        })
    }

    return () => {
      audio.pause()
      audio.removeEventListener("loadedmetadata", onLoaded)
      audio.removeEventListener("timeupdate", onTime)
      audio.removeEventListener("ended", onEnd)
      audioRef.current = null
    }
  }, [src, autoPlayOnLoad])

  React.useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  React.useEffect(() => {
    if (audioRef.current) audioRef.current.loop = isLoop
  }, [isLoop])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  const seek = (value: number) => {
    const audio = audioRef.current
    if (!audio || !isFinite(duration)) return
    audio.currentTime = value
    setCurrentTime(value)
  }

  const skipBack = () => {
    const audio = audioRef.current
    if (!audio) return
    // If near start, restart; otherwise skip 10s back
    const next = Math.max(0, audio.currentTime - 10)
    seek(next)
  }

  const skipForward = () => {
    const audio = audioRef.current
    if (!audio) return
    // If near end, go to end; otherwise skip 10s forward
    const next = Math.min(duration, audio.currentTime + 10)
    seek(next)
  }

  const brand = "var(--color-chart-2)" // teal/green from theme tokens

  return (
    <section
      aria-label="Music player"
      className={cn(
        "rounded-2xl border bg-card/95 text-card-foreground shadow-2xl",
        "backdrop-blur supports-[backdrop-filter]:bg-card/80",
      )}
      style={{ borderColor: brand, boxShadow: `0 0 0 1px color-mix(in oklch, ${brand} 35%, transparent)` }}
    >
      <div className="flex items-center gap-6 px-6 py-4">
        {/* Left: artwork and meta */}
        <div className="flex items-center gap-4 min-w-0">
          <Image
            src={cover || "/placeholder.svg"}
            alt={`${title} cover art`}
            width={72}
            height={72}
            className="h-18 w-18 rounded-lg object-cover"
            priority
          />
          <div className="min-w-0">
            <h2 className="text-base font-medium text-pretty truncate">{title}</h2>
            <p className="text-sm text-muted-foreground truncate">{artist}</p>
          </div>
        </div>

        {/* Middle: timeline */}
        <div className="flex-1 flex items-center gap-3 min-w-[240px]">
          <time className="w-10 text-right tabular-nums text-sm text-muted-foreground">{formatTime(currentTime)}</time>

          {/* Progress track */}
          <div className="relative flex-1 h-2 rounded-full bg-muted">
            {/* filled progress */}
            <div
              className="absolute left-0 top-0 h-2 rounded-full"
              style={{
                width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                backgroundColor: brand,
              }}
            />
            {/* knob */}
            <div
              className="absolute -top-[3px] h-3.5 w-3.5 rounded-full"
              style={{
                left: `calc(${duration ? (currentTime / duration) * 100 : 0}% - 7px)`,
                backgroundColor: brand,
                boxShadow: "0 0 0 2px color-mix(in oklch, var(--color-card) 90%, transparent)",
              }}
            />
            {/* invisible range input for accessibility */}
            <input
              aria-label="Seek"
              type="range"
              min={0}
              max={duration || 0}
              step={0.01}
              value={Math.min(currentTime, duration || 0)}
              onChange={(e) => seek(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          <time className="w-10 tabular-nums text-sm text-muted-foreground">{formatTime(duration)}</time>
        </div>

        {/* Right: controls */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-pressed={isShuffle}
            onClick={() => setIsShuffle((s) => !s)}
            className={cn("p-2 rounded-md transition-colors", isShuffle ? "bg-secondary" : "hover:bg-secondary/60")}
            title="Shuffle"
          >
            <Shuffle className="size-5" />
            <span className="sr-only">Toggle shuffle</span>
          </button>

          <button type="button" onClick={skipBack} className="p-2 rounded-md hover:bg-secondary/60" title="Previous">
            <SkipBack className="size-5" />
            <span className="sr-only">Previous</span>
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="p-2 rounded-full"
            aria-label={isPlaying ? "Pause" : "Play"}
            title={isPlaying ? "Pause" : "Play"}
            style={{
              border: `1px solid ${brand}`,
              color: brand,
            }}
          >
            {isPlaying ? <Pause className="size-5" /> : <Play className="size-5" />}
          </button>

          <button type="button" onClick={skipForward} className="p-2 rounded-md hover:bg-secondary/60" title="Next">
            <SkipForward className="size-5" />
            <span className="sr-only">Next</span>
          </button>

          <button
            type="button"
            aria-pressed={isLoop}
            onClick={() => setIsLoop((v) => !v)}
            className={cn("p-2 rounded-md transition-colors", isLoop ? "bg-secondary" : "hover:bg-secondary/60")}
            title="Repeat"
          >
            <Repeat className="size-5" />
            <span className="sr-only">Toggle repeat</span>
          </button>

          {/* Volume */}
          <div className="hidden md:flex items-center gap-2 w-32 ml-2">
            <Volume2 className="size-5" aria-hidden="true" />
            <div className="relative h-1.5 w-full rounded-full bg-muted">
              <div
                className="absolute left-0 top-0 h-1.5 rounded-full"
                style={{
                  width: `${volume * 100}%`,
                  backgroundColor: brand,
                }}
              />
              <div
                className="absolute -top-[4px] h-3 w-3 rounded-full"
                style={{
                  left: `calc(${volume * 100}% - 6px)`,
                  backgroundColor: brand,
                }}
              />
              <input
                aria-label="Volume"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
