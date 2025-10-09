"use client";

import { usePlayer } from "./player-context";
import { Info, Download, Plus, Heart, MoreHorizontal, Play } from "lucide-react";

export default function Playlist() {
  const { tracks, currentIndex, isPlaying, playTrack } = usePlayer();

  return (
    <section className="tracks_section">
      <div className="tracks_header">
        <h2>
          Tracks <span>(550+ RESULTS)</span>
        </h2>
      </div>

      <div className="tracks_table music_table">
        <table className="table table-borderless align-middle">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Release Date</th>
              <th scope="col">Time</th>
              <th scope="col">Genre</th>
              <th scope="col">Mood</th>
              <th scope="col">BPM</th>
              <th scope="col" className="text-end">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((t, i) => {
              const isActive = i === currentIndex;
              return (
                <tr
                  key={t.id}
                  className={`track_row ${isActive ? "active" : ""}`}
                  onClick={() => playTrack(i)}
                >
                  <td className="text-center idx_col">
                    {isActive ? (
                      <button className="play_btn playing" aria-label="Pause">
                        <Play size={14} />
                      </button>
                    ) : (
                      <span className="track_index">{i + 1}</span>
                    )}
                  </td>

                  <td className="title_col">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={t.coverUrl}
                        alt={t.title}
                        className="track_cover"
                        width="40"
                        height="40"
                      />
                      <div>
                        <div className="track_title">{t.title}</div>
                        <div className="track_artist">{t.artist}</div>
                      </div>
                    </div>
                  </td>

                  <td>{t.releaseDate}</td>
                  <td>{t.time}</td>
                  <td>{t.genre}</td>
                  <td>{t.mood}</td>
                  <td>{t.bpm}</td>

                  <td className="text-end actions_col">
                    <div className="d-flex align-items-center gap-3 justify-content-end">
                      <Info size={16} className="icon_action" />
                      <Download size={16} className="icon_action" />
                      <Plus size={16} className="icon_action" />
                      <Heart size={16} className="icon_action" />
                      <MoreHorizontal size={16} className="icon_action" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .tracks_section {
          margin-top: 40px;
          color: #fff;
        }

        .tracks_header h2 {
          font-size: 22px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .tracks_header span {
          font-size: 14px;
          color: #aaa;
          margin-left: 8px;
        }

        .tracks_table {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          overflow: hidden;
          margin-top: 20px;
        }

        table {
          width: 100%;
          color: #fff;
          font-size: 15px;
        }

        thead th {
          font-weight: 500;
          color: #aaa;
          padding: 12px 10px;
        }

        tbody tr {
          background-color: rgba(255, 255, 255, 0.04);
          border-radius: 8px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        tbody tr:hover {
          background-color: rgba(255, 255, 255, 0.08);
        }

        tbody tr.active {
          background-color: rgba(0, 180, 255, 0.15);
        }

        .track_index {
          font-weight: 500;
          color: #ccc;
        }

        .track_cover {
          border-radius: 6px;
          object-fit: cover;
        }

        .track_title {
          font-weight: 600;
          font-size: 15px;
        }

        .track_artist {
          font-size: 13px;
          color: #aaa;
        }

        .icon_action {
          cursor: pointer;
          color: #8dc7ff;
          transition: 0.2s ease;
        }

        .icon_action:hover {
          color: #fff;
        }

        .play_btn {
    border: none;
    background: #00bfff;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    display: flex;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    color: #000;
    cursor: pointer;
        }

        .play_btn.playing {
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 191, 255, 0.5);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(0, 191, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 191, 255, 0);
          }
        }
      `}</style>
    </section>
  );
}
