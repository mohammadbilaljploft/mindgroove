"use client";

import VolumeSlider from "./VolumeSlider";
import { usePlayer } from "./PlayerContext";

export default function PlayerBox() {
  const { currentTrack, isPlaying, progress, togglePlayPause } = usePlayer();

  return (
    <div className="player_list_main_bottom">
      <div className="music_track_list">
        <div className="music_track">
          {/* Dynamic track image */}
          <img
            src={currentTrack?.cover || "/img/tracklist_img.png"}
            alt={currentTrack?.title || "No Song"}
          />
          <div className="music_name">
            <h6>{currentTrack ? currentTrack.title : "No Song Playing"}</h6>
            <span>{currentTrack ? currentTrack.artist : "Select a track"}</span>
          </div>
        </div>

        <div
          className="music_song_min"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <span>0:00</span>
          <div
            className="progress"
            style={{
              flex: 1,
              height: "6px",
              background: "#ddd",
              borderRadius: "3px",
            }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${progress}%`,
                background: "#17DCF5",
                transition: "width 0.3s",
                borderRadius: "3px",
              }}
            ></div>
          </div>
          <span>{currentTrack ? currentTrack.time : "0:00"}</span>
        </div>

        <div className="icon_player">
          {/* Play/Pause dynamic */}
          {/* <img
            src={isPlaying ? "/img/icon_pause.svg" : "/img/icon_play01.svg"}
            onClick={togglePlayPause}
            style={{ cursor: "pointer" }}
          /> */}
           <img src="/img/icon_play01.svg" />
          {/* Other static icons */}
          <img src="/img/icon_play02.svg" />
         
           <img
            src={isPlaying ? "/img/push_player.svg" : "/img/icon_play03.svg"}
            onClick={togglePlayPause}
            style={{ cursor: "pointer" }}
          />
          <img src="/img/icon_play04.svg" />
          <img src="/img/icon_play05.svg" />
        
        </div>

        <div>
          <VolumeSlider />
        </div>
      </div>
    </div>
  );
}
