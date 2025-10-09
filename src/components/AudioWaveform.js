"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { FaPlay, FaPause } from "react-icons/fa";

// Max waveform bars
const DUMMY_WAVEFORM_DATA = Array.from({ length: 290 }, () =>
  Math.floor(Math.random() * 80) + 10
);

export default function AudioWaveform({ duration = "2:00", liked, onToggleLike }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [animatedHeights, setAnimatedHeights] = useState(DUMMY_WAVEFORM_DATA);
  const [visibleBarCount, setVisibleBarCount] = useState(DUMMY_WAVEFORM_DATA.length);
  const [activeTab, setActiveTab] = useState("profile");

  const intervalRef = useRef(null);
  const profileWaveformRef = useRef(null);
  const playlistWaveformRef = useRef(null);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  const calculateVisibleBars = useCallback(() => {
    const ref = activeTab === "profile" ? profileWaveformRef : playlistWaveformRef;
    if (ref.current) {
      const containerWidth = ref.current.offsetWidth;
      const BAR_WIDTH_AND_GAP = 4; // 2px bar + 2px gap
      const maxBars = Math.floor(containerWidth / BAR_WIDTH_AND_GAP);
      setVisibleBarCount(Math.min(maxBars, DUMMY_WAVEFORM_DATA.length));
    }
  }, [activeTab]);

  // Update visible bars on window resize or tab change
  useEffect(() => {
    calculateVisibleBars();
    window.addEventListener("resize", calculateVisibleBars);
    return () => window.removeEventListener("resize", calculateVisibleBars);
  }, [calculateVisibleBars]);

  // Animate waveform bars
  useEffect(() => {
    const dataSlice = DUMMY_WAVEFORM_DATA.slice(0, visibleBarCount);

    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        const newHeights = dataSlice.map(() => Math.floor(Math.random() * 80) + 10);
        setAnimatedHeights(newHeights);
      }, 100);
    } else {
      clearInterval(intervalRef.current);
      setAnimatedHeights(dataSlice);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, visibleBarCount]);

  return (
    <div className="waveform_tabs_sec">
      <Tab.Container
        id="left-tabs-example"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
      >
        <Row>
          <Col lg={12}>
          <div className="border_bottom">
              <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="profile">My Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="playlist">My Playlist</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          </Col>

          <Col lg={12}>
            <Tab.Content>
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
                    <img src="/img/download_icon.svg" alt="Download" />
                    <img src="/img/plus_icon.svg" alt="Add" />
                    <img
                      src={liked ? "/img/fill_heart.svg" : "/img/heart_icon.svg"}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleLike();
                      }}
                      style={{ cursor: "pointer" }}
                      alt="Like"
                    />
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="playlist">
                <div className="audio-waveform-container">
                  <div className="waveform_align">
                    <div className="control-info">
                      <div className="play-button-circle" onClick={togglePlay}>
                        {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
                      </div>
                      <span className="version-text">Full Version</span>
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

                    <h6>{duration}</h6>
                    <img src="/img/download_icon.svg" alt="Download" />
                    <img src="/img/plus_icon.svg" alt="Add" />
                    <img
                      src={liked ? "/img/fill_heart.svg" : "/img/heart_icon.svg"}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleLike();
                      }}
                      style={{ cursor: "pointer" }}
                      alt="Like"
                    />
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <style jsx>{`
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
          background: #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }

        .waveform-viz {
          flex-grow: 1;
          min-width: 50px;
          display: flex;
          align-items: flex-end;
          gap: 2px;
          height: 100px;
          background: #f0f0f0;
          padding: 5px;
          overflow-x: hidden;
        }

        .waveform-bar {
          width: 2px;
          background: #000;
          display: inline-block;
          transition: height 0.1s ease;
          flex-shrink: 0;
        }

        h6 {
          margin: 0;
          flex-shrink: 0;
        }

        .waveform_align img {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
