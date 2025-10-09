"use client";

import { FaPlay, FaChevronDown } from "react-icons/fa";
import { usePlayer } from "./PlayerContext";
import { useState, useEffect, Fragment } from "react";
import AudioWaveform from "./AudioWaveform";

const TrackAccordion = ({ track }) => {
  return (
    <tr className="accordion-content-row">
      <td colSpan="12">
        <div className="track-details-accordion">
          <AudioWaveform />
        </div>
      </td>
    </tr>
  );
};

export default function Music() {
  const { playTrack, currentTrack } = usePlayer();
  const [likedRows, setLikedRows] = useState([]);
  const [openMenuRow, setOpenMenuRow] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);
  const [isMobile, setIsMobile] = useState(false); // ✅ add this

  // ✅ Detect window width safely on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
      };

      handleResize(); // run once on mount
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const tracks = [
    {
      title: "Sorfcore",
      artist: "The Neighbourhood",
      date: "Nov 4, 2023",
      time: "3:26",
      genre: "Score",
      mood: "Exciting",
      bpm: 108,
      cover: "/img/album_img01.png",
      trackId: "t1",
    },
    {
      title: "Track 2",
      artist: "Artist 2",
      date: "Nov 5, 2023",
      time: "4:12",
      genre: "Pop",
      mood: "Chill",
      bpm: 120,
      cover: "/img/album_img02.png",
      trackId: "t2",
    },
    {
      title: "Track 3",
      artist: "Artist 3",
      date: "Nov 6, 2023",
      time: "3:50",
      genre: "Rock",
      mood: "Energetic",
      bpm: 130,
      cover: "/img/album_img03.png",
      trackId: "t3",
    },
  ];

  const toggleHeart = (index, e) => {
    e.stopPropagation();
    setLikedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleRowClick = (track) => {
    if (expandedRow !== track.trackId) {
      playTrack(track);
    }
  };

  const handleFirstTdClick = (e) => {
    e.stopPropagation();
    document.body.classList.add("active-row-click");
  };

  const toggleMenu = (index, e) => {
    e.stopPropagation();
    setOpenMenuRow((prev) => (prev === index ? null : index));
  };

  const toggleAccordion = (trackId, e) => {
    e.stopPropagation();
    setExpandedRow((prev) => (prev === trackId ? null : trackId));
  };

  return (
    <section className="sec_pad">
      <div className="main_title">
        <h2>
          Tracks <span>(550+ RESULTS)</span>
        </h2>
      </div>

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
            {tracks.map((track, index) => {
              const isActive = currentTrack?.title === track.title;
              const isMenuOpen = openMenuRow === index;
              const isExpanded = expandedRow === track.trackId;

              return (
                <Fragment key={track.trackId}>
                  <tr
                    onClick={() => handleRowClick(track)}
                    className={isActive ? "active-row" : ""}
                    style={{ cursor: "pointer" }}
                  >
                    <td onClick={handleFirstTdClick}>
                      {isActive ? (
                        <span className="fiil_icon">
                          <FaPlay color="#fff" size={18} />
                        </span>
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </td>

                    <td>
                      <div className="music_list">
                        <img src={track.cover} alt={`${track.title} cover`} />
                        <div>
                          <h2>{track.title}</h2>
                          <span>{track.artist}</span>
                        </div>
                        <span
                          onClick={(e) => toggleAccordion(track.trackId, e)}
                          style={{
                            marginLeft: "10px",
                            cursor: "pointer",
                            transition: "transform 0.3s ease",
                            transform: isExpanded
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        >
                          <FaChevronDown size={14} color="#000" />
                        </span>
                      </div>
                    </td>

                    <td>{track.date}</td>
                    <td>{track.time}</td>
                    <td>{track.genre}</td>
                    <td>{track.mood}</td>
                    <td>{track.bpm}</td>

                    <td>
                      <div
                        className="table_icon_wrapper table_icon"
                        style={{ position: "relative" }}
                      >
                        <img
                          src="/img/menu_icon.svg"
                          onClick={(e) => toggleMenu(index, e)}
                          style={{ cursor: "pointer" }}
                          alt="Menu"
                        />

                        {/* ✅ Use isMobile state instead of window */}
                        <div
                          className={`table_icon_dropdown ${
                            isMenuOpen ? "open" : ""
                          }`}
                          style={{
                            display:
                              isMobile && !isMenuOpen
                                ? "none"
                                : "flex",
                            position: isMobile ? "absolute" : "static",
                            background: "#fff",
                            padding: "5px",
                            borderRadius: "5px",
                            gap: "5px",
                            top: "35px",
                            right: 0,
                            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                            zIndex: 10,
                          }}
                        >
                          <img src="/img/info_icon.svg" alt="Info" />
                          <img src="/img/download_icon.svg" alt="Download" />
                          <img src="/img/plus_icon.svg" alt="Add" />
                          <img
                            src={
                              likedRows.includes(index)
                                ? "/img/fill_heart.svg"
                                : "/img/heart_icon.svg"
                            }
                            onClick={(e) => toggleHeart(index, e)}
                            style={{ cursor: "pointer" }}
                            alt="Like"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  {isExpanded && (
                    <TrackAccordion
                      key={`accordion-${track.trackId}`}
                      track={track}
                    />
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
