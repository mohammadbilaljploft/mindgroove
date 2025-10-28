"use client"

import { useRef, useEffect, useState } from "react"
import { usePlayer } from "./PlayerContext"

export default function WaveformProgressBar() {
  // Added isPlaying and togglePlayPause from the PlayerContext
  const { progress, setProgress, currentTrack, isPlaying, togglePlayPause } = usePlayer()
  const canvasRef = useRef(null)
  const [waveformData, setWaveformData] = useState([])
  
  // State to hold the current dimensions of the canvas element
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // 1. Generate random waveform data (in real app, this would come from audio analysis)
  useEffect(() => {
    // Only regenerate data when the track changes
    if (currentTrack) {
      const bars = 100
      // Random data: height between 20% and 100%
      const data = Array.from({ length: bars }, () => Math.random() * 0.8 + 0.2)
      setWaveformData(data)
    } else {
      setWaveformData([]) // Clear data if no track
    }
  }, [currentTrack])

  // 2. Set up ResizeObserver to make the Canvas responsive
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return;

    // We use ResizeObserver to detect when the parent element's size changes
    const observer = new ResizeObserver((entries) => {
      // We only expect one entry since we observe one canvas element
      for (let entry of entries) {
        // Use contentRect for the size of the content box
        const { width, height } = entry.contentRect;
        
        // Update the state which triggers the drawing useEffect (dependency)
        setDimensions({ width: Math.round(width), height: Math.round(height) });

        // IMPORTANT: Manually set the canvas width/height attributes for crisp rendering
        // This is what makes the canvas draw correctly at its display size
        canvas.width = Math.round(width);
        canvas.height = Math.round(height);
      }
    });

    observer.observe(canvas);

    // Cleanup function for the observer
    return () => {
      observer.unobserve(canvas);
    };
  }, []); // Run only once on mount

  // 3. Draw waveform on canvas (now depends on dimensions state)
  useEffect(() => {
    const canvas = canvasRef.current
    // Type check for canvas context in JS
    if (!canvas || waveformData.length === 0 || dimensions.width === 0 || dimensions.height === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Define colors to match the image style
    const playedColor = "#8B5CF6" // Purple
    // FIX: Changed unplayed color from very light gray (#e0e0e0) to a darker gray for visibility
    const unplayedColor = "#999999" // Medium gray for clear visibility when paused
    
    // Use canvas properties (which are now updated by the ResizeObserver)
    const width = canvas.width
    const height = canvas.height
    const barWidth = width / waveformData.length
    const centerY = height / 2

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw waveform bars
    waveformData.forEach((value, index) => {
      const x = index * barWidth
      // Use 80% of canvas height for bars
      const barHeight = value * height * 0.8 

      // Determine color based on progress
      const barProgressStart = (index / waveformData.length) * 100
      const isPlayed = barProgressStart < progress
      
      ctx.fillStyle = isPlayed ? playedColor : unplayedColor
      
      // Draw bar: center the bar vertically, ensuring sharp lines
      ctx.fillRect(
        Math.round(x + 1), 
        Math.round(centerY - barHeight / 2), 
        Math.round(barWidth - 2), 
        Math.round(barHeight)
      )
    })
  // Re-draw on data change, progress change, or dimension change
  }, [waveformData, progress, dimensions]) 

  // Handle click to seek
  const handleClick = (e) => {
    const canvas = canvasRef.current
    // Ensure setProgress and togglePlayPause exists
    if (!canvas || !setProgress || !togglePlayPause) return

    const rect = canvas.getBoundingClientRect()
    // Calculate click position relative to canvas
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    
    // 1. Set new progress (Seeking)
    setProgress(Math.max(0, Math.min(100, percentage)))

    // 2. Start playing if currently paused (Play on Seek)
    if (currentTrack && !isPlaying) {
      togglePlayPause();
    }
  }

  return (
    <div className="w-full h-full" style={{minHeight: '60px'}}>
      <canvas
        ref={canvasRef}
        // Removed fixed width/height attributes; they are now set in the ResizeObserver useEffect
        onClick={handleClick}
        // Tailwind classes for styling (adjust as needed for your project)
        className="w-full h-full cursor-pointer rounded-sm"
        style={{ display: "block", background: "transparent" }}
      />
    </div>
  )
}
