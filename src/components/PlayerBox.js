"use client";

import { useState } from "react";
import VolumeSlider from "./VolumeSlider";
import { usePlayer } from "./PlayerContext";
import WaveformProgressBar from "./WaveformProgressBar";

export default function PlayerBox() {
  const { currentTrack, isPlaying, togglePlayPause } = usePlayer();

  // ✅ Define liked tracks state
  const [likedTracks, setLikedTracks] = useState([]);

  // ✅ Handle like toggle
  const toggleLike = (trackId) => {
    setLikedTracks((prev) =>
      prev.includes(trackId)
        ? prev.filter((id) => id !== trackId)
        : [...prev, trackId]
    );
  };

  // ✅ Check if current track is liked
  const isLiked = currentTrack ? likedTracks.includes(currentTrack.trackId) : false;

  return (
    <div className="player_list_main_bottom">
      <div className="music_track_list">
        <div className="music_track">
          <img
            src={currentTrack?.cover || "/img/tracklist_img.png"}
            alt={currentTrack?.title || "No Song"}
          />
          <div className="music_name">
            <h6>{currentTrack ? currentTrack.title : "No Song Playing"}</h6>
            <span>{currentTrack ? currentTrack.artist : "Select a track"}</span>
          </div>
        </div>

        <div className="icon_player">
          <img
            src=  "/img/icon_play01.svg"
            style={{ cursor: "pointer", width: "24px", height: "24px" }}
          />
          <img src="/img/icon_play02.svg" style={{ width: "24px", height: "24px" }} />
          <img
            src={isPlaying ? "/img/pause.svg" : "/img/play.svg"}
            onClick={togglePlayPause}
            style={{ cursor: "pointer", width: "34px", height: "34px" }}
          />
          <img src="/img/icon_play04.svg" style={{ width: "24px", height: "24px" }} />
         
        </div>

        <div
          className="music_song_min"
          style={{ display: "flex", alignItems: "center", gap: "10px", width: "50%" }}
        >
          <span>0:00</span>
          <div style={{ flex: 1, height: "60px", display: "flex", alignItems: "center" }}>
            <WaveformProgressBar />
          </div>
          <span>{currentTrack ? currentTrack.time : "0:00"}</span>
           <img src="/img/icon_play05.svg" style={{ width: "24px", height: "24px" }} />
        </div>

        <div className="track-menu-dropdown icon_wave">
           <img src="/img/plus_icon.svg" alt="Add" />
             <img
            src={isLiked ? "/img/fill_heart.svg" : "/img/heart_icon.svg"}
            onClick={(e) => {
              e.stopPropagation();
              if (currentTrack) toggleLike(currentTrack.trackId);
            }}
            alt="Like"
            className="heart_img"
            style={{ cursor: "pointer" }}
          />
          <img src="/img/download_icon.svg" alt="Download" />
         
          <img src="/img/menu_icon.svg" alt="Add" />
        </div>

        <div>
          <VolumeSlider />
        </div>
      </div>
    </div>
  );
}
