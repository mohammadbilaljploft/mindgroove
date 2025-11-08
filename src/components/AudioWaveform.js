"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Col, Form, Nav, Row, Tab } from "react-bootstrap";
import { FaPlay, FaPause } from "react-icons/fa";

export default function AudioWaveform({ duration = "2:00", liked, onToggleLike }) {
  const [waveformData, setWaveformData] = useState([]);
  const [animatedHeights, setAnimatedHeights] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [volumeLevels, setVolumeLevels] = useState({});
  const [mutedTracks, setMutedTracks] = useState({}); // ✅ track mute state

  const intervalRef = useRef(null);
  const profileWaveformRef = useRef(null);
  const playlistWaveformRef = useRef(null);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  const generateWaveform = (barCount) =>
    Array.from({ length: barCount }, () => Math.floor(Math.random() * 80) + 10);

  const calculateBars = useCallback(() => {
    const ref = activeTab === "profile" ? profileWaveformRef : playlistWaveformRef;
    if (ref.current) {
      const containerWidth = ref.current.offsetWidth;
      const idealBarWidth = 4;
      const barCount = Math.floor(containerWidth / idealBarWidth);
      setWaveformData(generateWaveform(barCount));
    }
  }, [activeTab]);

  useEffect(() => {
    calculateBars();
    window.addEventListener("resize", calculateBars);
    return () => window.removeEventListener("resize", calculateBars);
  }, [calculateBars]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setAnimatedHeights(waveformData.map(() => Math.floor(Math.random() * 80) + 10));
      }, 100);
    } else {
      clearInterval(intervalRef.current);
      setAnimatedHeights(waveformData);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, waveformData]);

  const handleVolumeChange = (index, value) => {
    setVolumeLevels((prev) => ({ ...prev, [index]: value }));
  };

  const toggleMute = (index) => {
    setMutedTracks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };



  return (
    <div className="waveform_tabs_sec">
      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Row>
          <Col lg={12}>
            <div className="border_bottom">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="profile">Versions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="playlist">Stems</Nav.Link>
                </Nav.Item>
              </Nav>
   

            </div>
          </Col>

          <Col lg={12}>
            <Tab.Content>
              {/* === Versions Tab === */}
              <Tab.Pane eventKey="profile">
                <div className="audio-waveform-container">
                  {["Full Version", "30 Seconds", "Instrumental", "Instrumental 30"].map(
                    (label, i) => (
                      <div key={i} className="waveform_align">
                        <div className="multi-checkbox waveformcheck" onClick={(e) => e.stopPropagation()}>
                          <Form.Check
                            inline
                            name="track-select"
                            type="checkbox"
                            id="track-checkbox"
                          />
                        </div>
                        <div className="control-info">

                          <div className="play-button-circle" onClick={togglePlay}>
                            {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
                          </div>
                          <span className="version-text">{label}</span>
                        </div>

                        <div className="img_wave w-100">
                          <img src="/img/wave_02.png" alt="" />
                        </div>

                        <div className="icon_playlist">
                          <h6>{duration}</h6>
                          <img
                            src={liked ? "/img/fill_heart.svg" : "/img/heart_icon.svg"}
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleLike?.();
                            }}
                            style={{ cursor: "pointer" }}
                            alt="Like"
                          />
                          <img src="/img/download_icon.svg" alt="Download" />
                          <img src="/img/plus_icon.svg" alt="Add" />
                          <img src="/img/share.svg" alt="Share" />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </Tab.Pane>

              {/* === Stems Tab === */}
              <Tab.Pane eventKey="playlist">
                <div className="audio-waveform-container">
                  {[
                    { name: "Vocals", color: "red", bar: "bar_01.png" },
                    { name: "Synths", color: "blue", bar: "bar_02.png" },
                    { name: "Backing Vocals", color: "green", bar: "bar_03.png" },
                    { name: "Brass", color: "orange", bar: "bar_04.png" },
                    { name: "Drums", color: "purple", bar: "bar_05.png" },
                    { name: "Piano", color: "pink", bar: "bar_05.png" },
                    { name: "Strings", color: "cyan", bar: "bar_06.png" },
                    { name: "Synth Bass", color: "yellow", bar: "bar_07.png" },
                  ].map(({ name, color, bar }, i) => (
                    <div key={i} className={`waveform_align stems column-layout ${color}`}>
                      <div className="control-info color">
                          <div className="multi-checkbox waveformcheck" onClick={(e) => e.stopPropagation()}>
                          <Form.Check
                            inline
                            name="track-select"
                            type="checkbox"
                            id="track-checkbox"
                          />
                        </div>
                        <div className="play-button-circle" onClick={togglePlay}>
                          {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
                        </div>

                        {/* Volume Slider */}
                        <div
                          className={`volume_item ${color}`}
                          style={{
                            "--fill-percent": `${volumeLevels[i] || 50}%`,
                          }}
                        >
                          <div className="relative flex-grow h-[6px]">
                            <input
                              type="range"
                              min="0"
                              max="100"
                              step="1"
                              value={volumeLevels[i] || 50}
                              onChange={(e) => handleVolumeChange(i, e.target.value)}
                            />
                          </div>

                          {/* ✅ Mute Toggle */}
                          <div onClick={() => toggleMute(i)} style={{ cursor: "pointer" }}>
                            {mutedTracks[i] ? (
                              // 🔇 Mute Icon
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                <path d="M17.3169 9.28757C17.8988 9.85213 16.9981 10.7534 16.4331 10.1713L14.6875 8.42575L12.9419 10.1713C12.377 10.7534 11.4763 9.85213 12.0581 9.28757L13.8037 7.54194L12.0581 5.79632C11.4763 5.23169 12.3769 4.33057 12.9419 4.91257L14.6875 6.65813L16.4331 4.91257C16.9981 4.33057 17.8987 5.23169 17.3169 5.79632L15.5713 7.54194L17.3169 9.28757ZM9.28344 0.218317L4.17806 3.79194H1.875C1.37772 3.79194 0.900806 3.98949 0.549175 4.34112C0.197544 4.69275 0 5.16966 0 5.66694V9.41694C0 9.91422 0.197544 10.3911 0.549175 10.7428C0.900806 11.0944 1.37772 11.2919 1.875 11.2919H4.17806L9.28344 14.8656C9.47143 14.9937 9.69064 15.0685 9.91775 15.0819C10.1449 15.0953 10.3714 15.0469 10.5731 14.9418C10.7749 14.8368 10.9444 14.6789 11.0636 14.4851C11.1828 14.2913 11.2472 14.0689 11.25 13.8414V1.2425C11.2471 1.01505 11.1827 0.792623 11.0635 0.598888C10.9443 0.405153 10.7748 0.247355 10.573 0.142283C10.3713 0.0372105 10.1448 -0.0112068 9.91773 0.00218181C9.69065 0.0155704 9.47145 0.0902641 9.28344 0.218317ZM3.75 10.0419H1.875C1.70924 10.0419 1.55027 9.97609 1.43306 9.85888C1.31585 9.74167 1.25 9.5827 1.25 9.41694V5.66694C1.25 5.50118 1.31585 5.34221 1.43306 5.225C1.55027 5.10779 1.70924 5.04194 1.875 5.04194H3.75V10.0419ZM10.0006 13.8419L5 10.3419V4.74257L10 1.24257L10.0037 13.8436L10.0006 13.8419Z" fill="#17DCF5" />
                              </svg>
                            ) : (
                              // 🔊 Volume Icon
                              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.7945 0.0534416C9.02075 0.153525 9.16667 0.377625 9.16667 0.625008V14.375C9.16667 14.6224 9.02075 14.8465 8.7945 14.9466C8.56825 15.0467 8.30433 15.0039 8.12125 14.8375L3.7167 10.8333H1.45833C0.652917 10.8333 0 10.1804 0 9.375V5.62501C0 4.8196 0.652917 4.16667 1.45833 4.16667H3.7167L8.12125 0.16255C8.30433 -0.00385839 8.56825 -0.0466417 8.7945 0.0534416ZM7.91667 2.03786L4.37875 5.25414C4.26371 5.35872 4.11381 5.41667 3.95833 5.41667H1.45833C1.34328 5.41667 1.25 5.50995 1.25 5.62501V9.375C1.25 9.49008 1.34328 9.58333 1.45833 9.58333H3.95833C4.11381 9.58333 4.26371 9.64133 4.37875 9.74592L7.91667 12.9622V2.03786Z" fill="white" />
                                <path d="M14.7651 1.01821C15.0092 0.774123 15.4049 0.774123 15.649 1.01821C19.2288 4.59801 19.2288 10.402 15.649 13.9818C15.4049 14.2259 15.0092 14.2259 14.7651 13.9818C14.521 13.7378 14.521 13.342 14.7651 13.0979C17.8568 10.0063 17.8568 4.99374 14.7651 1.90209C14.521 1.65801 14.521 1.26228 14.7651 1.01821Z" fill="white" />
                                <path d="M12.7017 3.96449C12.4576 3.72041 12.0618 3.72041 11.8178 3.96449C11.5737 4.20856 11.5737 4.6043 11.8178 4.84837C13.2822 6.31284 13.2822 8.68717 11.8178 10.1517C11.5737 10.3958 11.5737 10.7915 11.8178 11.0356C12.0618 11.2797 12.4576 11.2797 12.7017 11.0356C14.6543 9.08292 14.6543 5.91709 12.7017 3.96449Z" fill="white" />
                              </svg>
                            )}
                          </div>
                        </div>

                        <span className="version-text">{name}</span>
                      </div>

                      <div className="color_full_bar">
                        <img src={`/img/${bar}`} alt={name} />
                      </div>

                      <div className="align_icon">
                        <h6>{duration}</h6>
                        <img src="/img/download_icon.svg" alt="Download" />
                        <img src="/img/plus_icon.svg" alt="Add" />
                        <img src="/img/share.svg" alt="Share" />
                        <img src="/img/menu_icon.svg" alt="Menu" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="conroller_play_list">
  <div className="item">
     <span> <img src="/img/reset_icon.svg" alt="Add" /></span>
     <h6>Reset Settings</h6>
  </div>

  <div className="middle_item ">
   <div className="middle_cntrol">
     <span><img src="/img/start_play_icon.svg" alt="Add" /></span>
     <h6>Start</h6>
   </div>
    <div className="middle_cntrol">
     <span><img src="/img/end_play_icon.svg" alt="Add" /></span>
     <h6>Play All</h6>
   </div>
      <div className="middle_cntrol">
     <span><img src="/img/export_play_icon.svg" alt="Add" /></span>
     <h6>Export</h6>
   </div>
  </div>
    <div className="item">
     <span> <img src="/img/save_play_icon.svg" alt="Add" /></span>
     <h6>Save Mix</h6>
  </div>
</div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      {/* === CSS Styling === */}
      <style jsx>{`
        .volume_item {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 120px;
        }

        .volume_item input[type="range"] {
          width: 100px;
          height: 6px;
          cursor: pointer;
          -webkit-appearance: none;
          background: transparent;
        }

        .volume_item input[type="range"]::-webkit-slider-runnable-track {
          height: 6px;
          border-radius: 6px;
          background: linear-gradient(
            to right,
            var(--track-color) 0%,
            var(--track-color) var(--fill-percent, 50%),
            #ffffff var(--fill-percent, 50%),
            #ffffff 100%
          );
        }

        .volume_item input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--thumb-color);
          border: 2px solid #fff;
          margin-top: -4px;
          position: relative;
          z-index: 2;
        }

        /* === Colors === */
        .volume_item.red {
          --track-color: #17dcf5;
          --thumb-color: #17dcf5;
        }
        .volume_item.blue {
          --track-color: #ee4d09;
          --thumb-color: #ee4d09;
        }
        .volume_item.green {
          --track-color: #ef1b54;
          --thumb-color: #ef1b54;
        }
        .volume_item.orange {
          --track-color: #e5037d;
          --thumb-color: #e5037d;
        }
        .volume_item.purple {
          --track-color: #ab11b7;
          --thumb-color: #ab11b7;
        }
        .volume_item.pink {
          --track-color: #0251f7;
          --thumb-color: #0251f7;
        }
        .volume_item.cyan {
          --track-color: #ffd034;
          --thumb-color: #ffd034;
        }
        .volume_item.yellow {
          --track-color: #0dde41;
          --thumb-color: #0dde41;
        }
      `}</style>
    </div>
  );
}
