"use client";

import { FaPlay, FaHeart } from "react-icons/fa";
import { usePlayer } from "./PlayerContext";
import { useState } from "react";

export default function Music() {
  const { playTrack, currentTrack } = usePlayer();
  const [likedRows, setLikedRows] = useState([]);

  const tracks = [
    {
      title: "Sorfcore",
      artist: "The Neighbourhood",
      date: "Nov 4, 2023",
      time: "3:26",
      genre: "Score",
      mood: "Exciting",
      bpm: 108,
      cover: "/img/table_img.png",
      src: "/sample-audio.mp3",
    },
    {
      title: "Track 2",
      artist: "Artist 2",
      date: "Nov 5, 2023",
      time: "4:12",
      genre: "Pop",
      mood: "Chill",
      bpm: 120,
      cover: "/img/table_img.png",
      src: "/sample-audio2.mp3",
    },
    {
      title: "Track 3",
      artist: "Artist 3",
      date: "Nov 6, 2023",
      time: "3:50",
      genre: "Rock",
      mood: "Energetic",
      bpm: 130,
      cover: "/img/table_img.png",
      src: "/sample-audio3.mp3",
    },
  ];

  const toggleHeart = (index, e) => {
    e.stopPropagation();
    setLikedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="music_section sec_pad">
      <div className="main_title" >
        <h2>Music Tracks <span>({tracks.length} RESULTS)</span></h2>
      </div>

      {/* Music List */}
      <div className="music_list_container">
        {/* Header row */}
        <div
          className="music_row_header"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          <span>#</span>
          <span>Title</span>
          <span>Release Date</span>
          <span>Time</span>
          <span>Genre</span>
          <span>Mood</span>
          <span>BPM</span>
          <span></span>
        </div>

        {/* Track rows */}
        {tracks.map((track, index) => {
          const isActive = currentTrack?.title === track.title;
          return (
            <div
              key={index}
              className={`music_row ${isActive ? "active-row" : ""}`}
              onClick={() => playTrack(track)}
             
            >
              <div className="number_icon" >
                {isActive ? <FaPlay color="#fff" /> : index + 1}
              </div>
              <div className="grey_play_listbox">

                <div
                  className="music_info music_list"
                  style={{ display: "flex", alignItems: "center", flex: 2, gap: "10px" }}
                >
                  <img
                    src={track.cover}
                    alt={track.title}

                  />
                  <div className="music_list_title">
                    <h4>{track.title}</h4>
                    <span>{track.artist}</span>
                  </div>
                </div>

                <div className="list_name" ><span>{track.date}</span></div>
                <div className="list_name"><span>{track.time} </span></div>
                <div className="list_name" > <span>{track.genre}</span></div>
                <div className="list_name" > <span>{track.mood}</span></div>
                <div className="list_name" ><span>{track.bpm}</span></div>

                <div
                  className="row_icons"
                  style={{
                    display: "flex",
                    gap: "10px",
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <img src="/img/info_icon.svg" alt="info" />
                  <img src="/img/download_icon.svg" alt="download" />
                  <img src="/img/plus_icon.svg" alt="plus" />
                  <img
                    src={likedRows.includes(index) ? "/img/fill_heart.svg" : "/img/heart_icon.svg"}
                    onClick={(e) => toggleHeart(index, e)}
                    style={{ cursor: "pointer" }}
                  />
                  <img src="/img/menu_icon.svg" alt="menu" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
