"use client";

import { FaPlay, FaChevronDown } from "react-icons/fa";
import { usePlayer } from "./PlayerContext";
import { useState, useEffect } from "react";
import AudioWaveform from "./AudioWaveform";

export default function SearchMusic() {
  const { playTrack, currentTrack } = usePlayer();
  const [likedTracks, setLikedTracks] = useState([]);
  const [expandedTrack, setExpandedTrack] = useState(null);
  const [openMenuTrack, setOpenMenuTrack] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [activeTrackId, setActiveTrackId] = useState(null);

  // Detect desktop width
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsDesktop(window.innerWidth >= 992);
      handleResize();
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
    title: "Lost in Echoes",
    artist: "Imagine Dragons",
    date: "Nov 5, 2023",
    time: "4:12",
    genre: "Pop",
    mood: "Chill",
    bpm: 120,
    cover: "/img/album_img02.png",
    trackId: "t2",
  },
  {
    title: "Crimson Sky",
    artist: "Arctic Monkeys",
    date: "Nov 6, 2023",
    time: "3:50",
    genre: "Rock",
    mood: "Energetic",
    bpm: 130,
    cover: "/img/album_img03.png",
    trackId: "t3",
  },
  {
    title: "Dreamline",
    artist: "Billie Eilish",
    date: "Nov 7, 2023",
    time: "3:44",
    genre: "Alternative",
    mood: "Calm",
    bpm: 90,
    cover: "/img/album_img04.png",
    trackId: "t4",
  },
  {
    title: "Echo Chamber",
    artist: "Post Malone",
    date: "Nov 8, 2023",
    time: "4:00",
    genre: "Hip Hop",
    mood: "Groovy",
    bpm: 105,
    cover: "/img/album_img05.png",
    trackId: "t5",
  },
  {
    title: "Starlit Eyes",
    artist: "Coldplay",
    date: "Nov 9, 2023",
    time: "3:33",
    genre: "Pop Rock",
    mood: "Uplifting",
    bpm: 118,
    cover: "/img/album_img06.png",
    trackId: "t6",
  },
  {
    title: "Wildfire",
    artist: "Halsey",
    date: "Nov 10, 2023",
    time: "3:20",
    genre: "Electro",
    mood: "Passionate",
    bpm: 122,
    cover: "/img/album_img07.png",
    trackId: "t7",
  },
  {
    title: "Midnight Ride",
    artist: "The Weeknd",
    date: "Nov 11, 2023",
    time: "4:45",
    genre: "Synthwave",
    mood: "Dark",
    bpm: 110,
    cover: "/img/album_img08.png",
    trackId: "t8",
  },
  {
    title: "Velvet Sky",
    artist: "Lana Del Rey",
    date: "Nov 12, 2023",
    time: "3:58",
    genre: "Indie",
    mood: "Dreamy",
    bpm: 95,
    cover: "/img/album_img09.png",
    trackId: "t9",
  },
  {
    title: "Gravity Falls",
    artist: "Ed Sheeran",
    date: "Nov 13, 2023",
    time: "4:15",
    genre: "Acoustic",
    mood: "Romantic",
    bpm: 102,
    cover: "/img/album_img10.png",
    trackId: "t10",
  },
];


  const toggleLike = (trackId) => {
    setLikedTracks((prev) =>
      prev.includes(trackId)
        ? prev.filter((id) => id !== trackId)
        : [...prev, trackId]
    );
  };

  const toggleAccordion = (trackId) => {
    setExpandedTrack((prev) => (prev === trackId ? null : trackId));
    setActiveTrackId(trackId); // Chevron click also sets active
  };

  const toggleMenu = (trackId) => {
    setOpenMenuTrack((prev) => (prev === trackId ? null : trackId));
  };

  const handleTrackClick = (track) => {
    playTrack(track);
    setActiveTrackId(track.trackId); // Header click sets active
  };

  const handleNumberClick = (track) => {
    playTrack(track);
    setActiveTrackId(track.trackId);
    document.body.classList.add("active-row-click");
  };

const handleArrowClick = () => {
  document.body.classList.toggle("active-row-click");

  if (currentTrack) {
    setActiveTrackId(currentTrack.trackId);
  } else {
    setActiveTrackId(tracks[0]?.trackId || null);
  }
};

  return (
    <section className="sec_pad track_sc search_play_list">
      <button className="down_arrow_player" onClick={handleArrowClick}>
        <img src="/img/down_arrow.svg" />
      </button>

      <div className="main_title">
        <h2>
          Tracks <span>(550+ RESULTS)</span>
        </h2>
      </div>

      <div className="track_header_style">
        <span>#</span>
        <span>Title</span>
        <span>Time</span>
        <span>Genre</span>
        <span>BPM</span>
        <span>Stems</span>

      </div>

      <div className="track-list">
        {tracks.map((track, index) => {
          const isActive = activeTrackId === track.trackId;
          const isExpanded = expandedTrack === track.trackId;
          const isMenuOpen = openMenuTrack === track.trackId;
          const isLiked = likedTracks.includes(track.trackId);

          return (
            <div
              key={track.trackId}
              className={`track-card ${isActive ? "active" : ""}`}
            >
              {/* Track number */}
              <div
                className="track-number"
                onClick={() => handleNumberClick(track)}
              >
                {isActive ? <FaPlay color="#fff" /> : index + 1}
              </div>

              <div className="main_card_track">
                {/* Track header */}
                <div
                  className="track-header"
                  onClick={() => handleTrackClick(track)}
                >
                  <div className="track-left">
                    <img
                      className="track-cover"
                      src={track.cover}
                      alt={track.title}
                    />
                    <div className="track-info">
                      <h3>{track.title}</h3>
                      <span>{track.artist}</span>
                    </div>
                    {/* Chevron */}
                    <span
                      className={`accordion-toggle ${
                        isExpanded ? "expanded" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleAccordion(track.trackId);
                      }}
                    >
                      {/* <FaChevronDown /> */}
                    </span>
                  </div>

                  <span>{track.time}</span>
                  <span>{track.genre}</span>
                  <span>{track.bpm}</span>
                

                  <div className="track-right">
                    <img src="/img/fillter_icon0152.svg" className="icon_fill" alt="musical" />
                    <div className="track-menu-wrapper">
                      <img
                        src="/img/menu_icon.svg"
                        alt="Menu"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMenu(track.trackId);
                        }}
                        className="menu-icon"
                      />
                      {(isDesktop || isMenuOpen) && (
                        <div className="track-menu-dropdown">
                  
                          <img src="/img/info_icon.svg" alt="Info" />
                          <img src="/img/download_icon.svg" alt="Download" />
                          <img src="/img/plus_icon.svg" alt="Add" />
                          <img
                            src={
                              isLiked
                                ? "/img/fill_heart.svg"
                                : "/img/heart_icon.svg"
                            }
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLike(track.trackId);
                            }}
                            alt="Like"
                            className="heart_img"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Accordion content */}
                {isExpanded && (
                  <div className="track-accordion">
                  
                    <div className="player_pitch">
                      <div className="music_min">
                        <h6>GENRE</h6>
                        <div className="align_min">
                          <span>HIP HOP</span>
                        </div>
                      </div>
                      <div className="music_min">
                        <h6>MOODS</h6>
                        <div className="align_min">
                          <span>CONFIDENT</span>
                          <span>MOODY</span>
                        </div>
                      </div>
                      <div className="music_min">
                        <h6>KEYWORDS</h6>
                        <div className="align_min">
                          <span>PUNCHY</span>
                          <span>SPORTS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        body.active-row-click {
          background-color: #f0f0f0;
        }

        .track-list {
          display: flex;
          flex-direction: column;
          gap: 21px;
        }

        .track-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          transition: background 0.2s;
        }

 

        .track-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 15px;
          cursor: pointer;
          background: #f9f9f9;
          transition: background 0.2s;
        }

        .track-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .track-number {
          width: 25px;
          text-align: center;
          cursor: pointer;
        }

        .track-cover {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: 5px;
        }

        .track-info h3 {
          margin: 0;
          font-size: 16px;
        }

        .track-info span {
          font-size: 12px;
          color: #666;
        }

        .track-right {
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
        }

        .accordion-toggle {
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .accordion-toggle.expanded {
          transform: rotate(180deg);
        }

        .track-menu-wrapper {
          position: relative;
        }

        .track-menu-dropdown {
          position: absolute;
          top: 30px;
          right: 0;
          background: #fff;
          padding: 5px;
          border-radius: 5px;
          display: flex;
          gap: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          z-index: 3;
        }

        .track-accordion {
          padding: 10px 15px;
          background: #fff;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        @media (max-width: 767px) {
          .track-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .track-right {
            margin-top: 5px;
          }
        }
      `}</style>
    </section>
  );
}
