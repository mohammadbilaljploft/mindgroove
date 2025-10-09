import React, { useState } from 'react';
import { Heart, Play } from 'lucide-react';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

const tracksData = [
  { id: 1, title: 'Sorfcore', duration: '3:26', liked: false },
  { id: 2, title: 'Skyfall Beats', duration: '2:45', liked: false },
  { id: 3, title: 'Greedy', duration: '2:11', liked: false },
  { id: 4, title: 'Lovin On me', duration: '2:18', liked: false },
  { id: 5, title: 'Pain the Town Red', duration: '3:51', liked: false },
  { id: 6, title: 'Dancin On Night', duration: '2:56', liked: false },
  { id: 7, title: 'Water', duration: '3:20', liked: false },
];

export default function Discover() {
  const [currentTrack, setCurrentTrack] = useState(3);
  const [tracks, setTracks] = useState(tracksData);

  const toggleLike = (id) => {
    setTracks(tracks.map(track =>
      track.id === id ? { ...track, liked: !track.liked } : track
    ));
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay between items
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className='sec_pad'>
      <Container>
        <div className="main_title align_justify">
          <h2>Discover</h2>
          <button className="view-all-btn">
            <span className="btn-text">View All</span>
            <span className="circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>

        <div className="music-player music_set_section">
          <Row className='item_discover g-4'>
            <Col lg={3}>
              <div className="album-cover">
                <img
                  src="/img/album_cover.png"
                  alt="Album Cover"
                />
              </div>
            </Col>

            <Col lg={9}>
              {/* Motion container for staggered scroll animation */}
              <motion.div
                className="tracks-section"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {tracks.map(track => (
                  <motion.div
                    key={track.id}
                    className={`track-card ${currentTrack === track.id ? 'active' : ''}`}
                    variants={itemVariants}
                  >
                    <div className='track_item'>
                      <div className={`track-number ${currentTrack === track.id ? 'active' : ''}`}>
                        {currentTrack === track.id ? <Play /> : track.id}
                      </div>
                      <div className="track-info">
                        <h3>{track.title}</h3>
                      </div>
                    </div>

                    <div className="track-actions">
                      <button onClick={() => toggleLike(track.id)}>
                        <Heart className={track.liked ? 'liked' : ''} />
                      </button>
                      <span className="track-duration">{track.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>





  );
}
