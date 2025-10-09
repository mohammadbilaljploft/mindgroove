"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import HomeSidebar from "@/components/HomeSidebar";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import TrackDetail from "@/components/modal/TrackDetail";
import Music from "@/components/Music";
import PlayerBox from "@/components/PlayerBox";


export default function Page() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

   const songData = {
    title: 'Sunset',
    artist: 'Dua Lipa',
    cover: '/sunset.jpg', // सुनिश्चित करें कि यह इमेज 'public' फोल्डर में मौजूद है
    src: '/sample-audio.mp3', // सुनिश्चित करें कि यह ऑडियो फाइल 'public' फोल्डर में मौजूद है
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="search_bg">
        <div className="inner_pages">
          <div className="inner_pages_sidebar">
            <HomeSidebar />
          </div>

          <div className="main_content">
            <Header />
            <Container>
              <div className="featured_sec">
                <div className="align_justify">
                  <div className="main_title">
                    <h2>Albums <span>(800+ RESULTS)</span></h2>
                  </div>
                </div>

                <div className="album_cart_sec">


                  <motion.div
                    className="album_cart"
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    onClick={() => setModalShow(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="album_img">
                      <img src="/img/album_img01.png" alt="Sacred Lands" />
                    </div>
                    <div className="album_cart_content">
                      <div className="cart_text">
                        <h4>Sacred Lands</h4>
                        <span>Ancestral Roots</span>
                      </div>
                      <button>
                        <img src="/img/play_icon.svg" alt="Play" />
                      </button>
                    </div>

                  </motion.div>


                  <motion.div
                    className="album_cart"
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    onClick={() => setModalShow(true)}
                    style={{ cursor: "pointer" }}

                  >
                    <div className="album_img">
                      <img src="/img/album_img02.png" alt="Sunset Meditation" />
                    </div>
                    <div className="album_cart_content">
                      <div className="cart_text">
                        <h4>Sunset Meditation</h4>
                        <span>Calm Flow</span>
                      </div>
                      <button>
                        <img src="/img/play_icon.svg" alt="Play" />
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    className="album_cart"
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    onClick={() => setModalShow(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="album_img">
                      <img src="/img/album_img03.png" alt="Healing Waters" />
                    </div>
                    <div className="album_cart_content">
                      <div className="cart_text">
                        <h4>Healing Waters</h4>
                        <span>Calm Flow</span>
                      </div>
                      <button>
                        <img src="/img/play_icon.svg" alt="Play" />
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    className="album_cart"
                    custom={3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    onClick={() => setModalShow(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="album_img">
                      <img src="/img/album_img04.png" alt="Zen Garden" />
                    </div>
                    <div className="album_cart_content">
                      <div className="cart_text">
                        <h4>Zen Garden</h4>
                        <span>Ki Yoga & Okido</span>
                      </div>
                      <button>
                        <img src="/img/play_icon.svg" alt="Play" />
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    className="album_cart"
                    custom={4}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    onClick={() => setModalShow(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="album_img">
                      <img src="/img/album_img05.png" alt="Spa & Wellness" />
                    </div>
                    <div className="album_cart_content">
                      <div className="cart_text">
                        <h4>Spa & Wellness</h4>
                        <span>Calm Flow</span>
                      </div>
                      <button>
                        <img src="/img/play_icon.svg" alt="Play" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>


                   {/* <div className="play_main_box">
                    <Playlist />
                    <BottomPlayer />
                   </div> */}

                   <Music />

            <PlayerBox />
            </Container>
          </div>
        </div>

        <TrackDetail show={modalShow} onHide={() => setModalShow(false)} />

        {/* <Footer /> */}
      </div>
    </>
  );
}
