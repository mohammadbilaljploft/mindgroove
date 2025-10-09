"use client"

import { useState } from "react";
import { FaPlay } from "react-icons/fa"; 

export default function Music() {
  const [activeRow, setActiveRow] = useState(0); // Initially first row active
  const [likedRows, setLikedRows] = useState([]); // Heart toggles

  const tracks = [
    { title: "Sorfcore", artist: "The neighberhood", date: "Nov 4, 2023", time: "3:26", genre: "Score", mood: "Exciting", bpm: 108 },
    { title: "Track 2", artist: "Artist 2", date: "Nov 5, 2023", time: "4:12", genre: "Pop", mood: "Chill", bpm: 120 },
    { title: "Track 3", artist: "Artist 3", date: "Nov 6, 2023", time: "3:50", genre: "Rock", mood: "Energetic", bpm: 130 },
    // Add more tracks
  ];

  const handleRowClick = (index) => {
    setActiveRow(index); // Only this row becomes active, previous row becomes inactive
  };

  const toggleHeart = (index, e) => {
    e.stopPropagation(); // Prevent row click
    setLikedRows(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="music_table">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Release Date</th>
            <th>Time</th>
            <th>Genre</th>
            <th>Mood</th>
            <th>BPM</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(index)}
              className={activeRow === index ? "active-row" : ""}
              style={{ cursor: "pointer" }}
            >
              <td>
                {activeRow === index ? <span className="fiil_icon"><FaPlay color="#fff" size={18} /></span> : <span>{index + 1}</span>}
              </td>
              <td>
                <div className="music_list">
                  <img src="/img/table_img.png" />
                  <div>
                    <h2>{track.title}</h2>
                    <span>{track.artist}</span>
                  </div>
                </div>
              </td>
              <td>{track.date}</td>
              <td>{track.time}</td>
              <td>{track.genre}</td>
              <td>{track.mood}</td>
              <td>{track.bpm}</td>
              <td>
                <div className="table_icon">
                  <img src="/img/info_icon.svg" />
                  <img src="/img/download_icon.svg" />
                  <img src="/img/plus_icon.svg" />
                  <img
                    src={likedRows.includes(index) ? "/img/fill_heart.svg" : "/img/heart_icon.svg"}
                    onClick={(e) => toggleHeart(index, e)}
                    style={{ cursor: "pointer" }}
                  />
                  <img src="/img/menu_icon.svg" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
}
