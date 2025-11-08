"use client";

import React from "react";
import VolumeSlider from "./VolumeSlider";

export default function PlayerBoxSec() {
  return (
    <div className="player_list_main_bottom">
      <div className="music_track_list">
        {/* Track Info */}
        <div className="music_track">
          <img src="/img/tracklist_img.png" alt="Track Cover" />
          <div className="music_name">
            <h6>Sample Song Title</h6>
            <span>Artist Name</span>
          </div>
        </div>

        {/* Player Controls */}
        <div className="icon_player">
          <img
            src="/img/icon_play01.svg"
            style={{ cursor: "pointer", width: "24px", height: "24px" }}
          />
          <img
            src="/img/icon_play02.svg"
            style={{ width: "24px", height: "24px" }}
          />
          <img
            src="/img/play.svg"
            style={{ cursor: "pointer", width: "34px", height: "34px" }}
          />
          <img
            src="/img/icon_play04.svg"
            style={{ width: "24px", height: "24px" }}
          />
        </div>

        {/* Progress Bar Section */}
        <div
          className="music_song_min"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "50%",
          }}
        >
          <span>0:00</span>

          <div className="img_wave">
            <img src="/img/wave_img.png" alt="Waveform" />
          </div>

          <span>3:45</span>

          <img
            src="/img/icon_play05.svg"
            style={{ width: "24px", height: "24px" }}
            alt="Next"
          />
        </div>

        {/* Icons on the right side */}
        <div className="track-menu-dropdown icon_wave">
          <img src="/img/plus_icon.svg" alt="Add" />
          <img
            src="/img/heart_icon.svg"
            alt="Like"
            className="heart_img"
            style={{ cursor: "pointer" }}
          />
          <img src="/img/download_icon.svg" alt="Download" />
          <img src="/img/menu_icon.svg" alt="Menu" />
        </div>

        {/* Volume Control */}
        <div>
          <VolumeSlider />
        </div>
      </div>
    </div>
  );
}
