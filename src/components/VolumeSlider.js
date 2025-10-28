import React, { useState } from "react";
import { Volume2 } from "lucide-react";

const VolumeSlider = ({ thumbColor = "#00E0FF !important", trackColor = "#4B4B4B" }) => {
  const [volume, setVolume] = useState(60);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const fillPercentage = `${volume}%`;

  return (
    <div
      className="volume_item max-w-[200px]"
      style={{ minWidth: "100px" }}
    >
      <Volume2 className="text-white h-5 w-5 flex-shrink-0" />

      <div className="relative flex-grow h-[6px]">
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-[6px] cursor-pointer appearance-none bg-transparent"
          style={{
            "--fill-color": thumbColor, 
            "--track-color": trackColor,
            "--thumb-color": thumbColor, 
            "--fill-percentage": fillPercentage,
          }}
        />

        <style jsx>{`
          input[type="range"]::-webkit-slider-runnable-track {
            width: 100%;
            height: 6px;
            cursor: pointer;
            background: linear-gradient(
              to right,
              var(--fill-color) 0%,
              var(--fill-color) var(--fill-percentage),
              var(--track-color) var(--fill-percentage),
              var(--track-color) 100%
            );
            border-radius: 10px;
          }

          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 14px;
            width: 14px;
            border-radius: 50%;
            background: var(--thumb-color);
            cursor: pointer;
            margin-top: -4px;
            border: none;
            transition: transform 0.2s ease, background 0.3s ease;
          }

          input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.1);
          }

          input[type="range"]::-moz-range-track {
            background: linear-gradient(
              to right,
              var(--fill-color) 0%,
              var(--fill-color) var(--fill-percentage),
              var(--track-color) var(--fill-percentage),
              var(--track-color) 100%
            );
            height: 6px;
            border-radius: 10px;
          }

          input[type="range"]::-moz-range-thumb {
            background: var(--thumb-color);
            height: 14px;
            width: 14px;
            border-radius: 50%;
            border: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default VolumeSlider;
