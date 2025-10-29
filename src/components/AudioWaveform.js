"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { FaPlay, FaPause } from "react-icons/fa";
import VolumeSlider from "./VolumeSlider";

export default function AudioWaveform({ duration = "2:00", liked, onToggleLike }) {
  const [waveformData, setWaveformData] = useState([]);
  const [animatedHeights, setAnimatedHeights] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const intervalRef = useRef(null);
  const profileWaveformRef = useRef(null);
  const playlistWaveformRef = useRef(null);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  // Generate random waveform data
  const generateWaveform = (barCount) =>
    Array.from({ length: barCount }, () => Math.floor(Math.random() * 80) + 10);

  // Calculate number of bars dynamically based on container width
  const calculateBars = useCallback(() => {
    const ref = activeTab === "profile" ? profileWaveformRef : playlistWaveformRef;
    if (ref.current) {
      const containerWidth = ref.current.offsetWidth;
      const idealBarWidth = 4; // px
      const barCount = Math.floor(containerWidth / idealBarWidth);
      setWaveformData(generateWaveform(barCount));
    }
  }, [activeTab]);

  useEffect(() => {
    calculateBars();
    window.addEventListener("resize", calculateBars);
    return () => window.removeEventListener("resize", calculateBars);
  }, [calculateBars]);

  // Animate waveform
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
              {/* Versions Tab */}
              <Tab.Pane eventKey="profile">
                <div className="audio-waveform-container">
                  <div className="waveform_align">
                    <div className="control-info">
                      <div className="play-button-circle" onClick={togglePlay}>
                        {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
                      </div>
                      <span className="version-text">Full Version</span>
                    </div>

                    <div className="waveform-viz" ref={profileWaveformRef}>
                      {animatedHeights.map((height, index) => (
                        <div
                          key={index}
                          className="waveform-bar"
                          style={{ height: `${height}px` }}
                        />
                      ))}
                    </div>

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
              </Tab.Pane>

              {/* Stems Tab */}
              <Tab.Pane eventKey="playlist">
                 <div className="player_stoper_box">
              <img src="/img/play_list_icon01.svg" alt="" />
              <img src="/img/play_list_icon02.svg" alt="" />
              <img src="/img/play_list_icon03.svg" alt="" />
              <img src="/img/play_list_icon04.svg" alt="" />
              <img src="/img/play_list_icon05.svg" alt="" />
              <img src="/img/play_list_icon06.svg" alt="" />
          </div>
                <div className="audio-waveform-container">
                  <div className="waveform_align column-layout">
                    <div className="control-info">
                      <div className="play-button-circle" onClick={togglePlay}>
                        {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
                      </div>
                      <span className="version-text">Full Version</span>
                      <VolumeSlider />
                      <span className="version-text">Vocals</span>
                    </div>

                    <div className="waveform-viz" ref={playlistWaveformRef}>
                      {animatedHeights.map((height, index) => (
                        <div
                          key={index}
                          className="waveform-bar"
                          style={{ height: `${height}px` }}
                        />
                      ))}
                    </div>

                   <div className="align_icon">
                     <h6>{duration}</h6>
                    <img src="/img/download_icon.svg" alt="Download" />
                    <img src="/img/plus_icon.svg" alt="Add" />
                    <img src="/img/share.svg" alt="Share" />
                   </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      {/* --- Styles --- */}
      <style jsx>{`
        .border_bottom {
          border-bottom: 1px solid #333;
          margin-bottom: 15px;
        }

        .nav-pills .nav-link {
          border-radius: 25px;
          color: #fff;
          padding: 5px 20px;
        }
        .nav-pills .nav-link.active {
          background: #00e0ff;
          color: #000;
        }

        .audio-waveform-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .waveform_align {
          display: flex;
          align-items: center;
          gap: 10px;
        }

      

        .control-info {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .play-button-circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #00e0ff;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }

        .waveform-viz {
          flex-grow: 1;
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 100px;
          background: #f0f0f0;
          padding: 5px;
          overflow: hidden;
          border-radius: 6px;
        }

        .waveform-bar {
          flex: 1;
          margin: 0 1px;
          background: #000;
          transition: height 0.1s ease;
        }

        h6 {
          margin: 0;
          flex-shrink: 0;
        }

        .waveform_align img {
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .waveform-viz {
            height: 100px;
          }
          .play-button-circle {
            width: 26px;
            height: 26px;
          }
        }

        @media (max-width: 576px) {
          .waveform-viz {
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
}
