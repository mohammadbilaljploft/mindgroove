import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';



const VolumeSlider = () => {

  const [volume, setVolume] = useState(60);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const fillPercentage = `${volume}%`;

  return (
    <div className="volume_slider_item">
      <Volume2 className="text-white h-6 w-6" />

      <div className="relative flex-grow h-2">
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-2 cursor-pointer appearance-none bg-transparent"
          style={{
            '--fill-color': '#00BFFF', // Cyan color for the filled track
            '--track-color': '#6B7280', // Gray color for the unfilled track
            '--thumb-color': '#00BFFF', // Cyan color for the thumb
            '--fill-percentage': fillPercentage,
          }}
        />

        {/* This div is for visual effect to mimic the solid filled track */}
        <style jsx>{`
          /* Custom styling for WebKit (Chrome, Safari) browsers */
          input[type='range']::-webkit-slider-runnable-track {
            width: 100%;
            height: 8px;
            cursor: pointer;
            background: linear-gradient(
              to right,
              var(--fill-color) 0%,
              var(--fill-color) var(--fill-percentage),
              var(--track-color) var(--fill-percentage),
              var(--track-color) 100%
            );
            border-radius: 4px;
          }

          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: var(--thumb-color);
            cursor: pointer;
            margin-top: -4px; /* Adjust to vertically center the thumb on the track */
            border: 2px solid #fff; /* White border for the glow effect */
            box-shadow: 0 0 0 4px var(--thumb-color); /* The outer cyan circle */
          }

          /* Custom styling for Firefox browsers (less complex but different properties) */
          input[type='range']::-moz-range-track {
            background: linear-gradient(
              to right,
              var(--fill-color) 0%,
              var(--fill-color) var(--fill-percentage),
              var(--track-color) var(--fill-percentage),
              var(--track-color) 100%
            );
            height: 8px;
            border-radius: 4px;
          }
          
          input[type='range']::-moz-range-thumb {
            background: var(--thumb-color);
            border: 2px solid #fff;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            box-shadow: 0 0 0 4px var(--thumb-color);
          }
        `}</style>
      </div>
    </div>
  );
};

export default VolumeSlider;