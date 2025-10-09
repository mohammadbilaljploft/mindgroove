"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const DUMMY_WAVEFORM_DATA = Array.from({ length: 150 }, () =>
  Math.floor(Math.random() * 80) + 10
);

export default function AudioWaveform({ duration, liked, onToggleLike }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [animatedHeights, setAnimatedHeights] = useState(DUMMY_WAVEFORM_DATA);
  const intervalRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setAnimatedHeights(
          DUMMY_WAVEFORM_DATA.map(() => Math.floor(Math.random() * 80) + 10)
        );
      }, 100);
    } else {
      clearInterval(intervalRef.current);
      setAnimatedHeights(DUMMY_WAVEFORM_DATA);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  return (
    <div className="audio-waveform-container">
      <div className="waveform_align">
        <div className="control-info">
          <div className="play-button-circle" onClick={togglePlay}>
            {isPlaying ? (
              <FaPause size={14} color="#000" />
            ) : (
              <FaPlay size={14} color="#000" />
            )}
          </div>
          <span className="version-text">Full Version</span>
        </div>

        <div className="waveform-viz">
          {animatedHeights.map((height, index) => (
            <div
              key={index}
              className="waveform-bar"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>

        <h6>2:00</h6>
        <img src="/img/download_icon.svg" alt="Download" />
        <img src="/img/plus_icon.svg" alt="Add" />
        <img
          src={liked ? "/img/fill_heart.svg" : "/img/heart_icon.svg"}
          onClick={(e) => {
            e.stopPropagation();
            onToggleLike();
          }}
          style={{ cursor: "pointer" }}
          alt="Like"
        />
      </div>

      <style jsx>{`
        .audio-waveform-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .waveform_align {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .control-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .play-button-circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .waveform-viz {
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 100px;
          background: #f0f0f0;
          padding: 5px;
          overflow-x: auto;
        }

        .waveform-bar {
          width: 2px;
          background: #000;
          display: inline-block;
          transition: height 0.1s ease;
        }

        h6 {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
