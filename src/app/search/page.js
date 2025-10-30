"use client";
import React, { useRef, useState, useEffect } from "react";
import Header from "@/components/Header";
import HomeSidebar from "@/components/HomeSidebar";
import { motion } from "framer-motion";
import { Container, Form } from "react-bootstrap";
import { PlayerProvider } from "@/components/PlayerContext";
import PlayerBox from "@/components/PlayerBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SearchMusic from "@/components/SearchMusic";


export default function Page() {

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };


  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

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
    cover: '/sunset.jpg',
    src: '/sample-audio.mp3',
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
            <Container fluid>
              <div className="search_box search_page_bar">
                <div className="search_filed">
                  <input type="text" placeholder="Search music by keywords, phrases, add a link, or upload an audio file" />
                </div>

                <div className="right_search_itm">
                  <div className="upload_dropdown_box">
                    <button
                      className="upload_btn">
                      <img src="/img/upload_icon.svg" alt="upload" />
                    </button>
                  </div>

                  <div className="switch_ask_anything">
                    <span>Ask Me Anything</span>
                    <div className="d-flex align-items-center gap-2">
                      <div
                        onClick={() => toggleSection("ask")}
                        style={{
                          width: "50px",
                          height: "25px",
                          borderRadius: "25px",
                          background: activeSection === "ask" ? "#17DCF5" : "#878787",
                          position: "relative",
                          cursor: "pointer",
                          transition: "0.3s",
                        }}
                      >
                        <div
                          style={{
                            width: "23px",
                            height: "23px",
                            borderRadius: "50%",
                            background: "#fff",
                            position: "absolute",
                            top: "1px",
                            left: activeSection === "ask" ? "26px" : "1px",
                            transition: "0.3s",
                          }}
                        ></div>
                      </div>
                    </div>


                  </div>
                </div>


              </div>

              <div className="exmple_sec serchbar_exmple ">
                <div className="search_exmaple_select">
                  <div className="exmaple_select">
                    <Form.Select >
                      <option>Genre</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div className="exmaple_select">
                    <Form.Select >
                      <option>Mood</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div className="exmaple_select">
                    <Form.Select >
                      <option>Video Themes</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div className="exmaple_select">
                    <Form.Select >
                      <option>Instrument</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </div>
                <button className="advance_filter_btn" onClick={() => setModalShow(true)}>Advance Search<img src="/img/advance_filter.svg" alt="Previous" /></button>
              </div>


              <div className="featured_sec features_inner">
                <div className="swiper_nav_btns ctm_btn circle_btn" >
                  <button className="swiper-button-prev custom_prev">
                    <img src="/img/left_arrow.svg" alt="Previous" />
                  </button>
                  <button className="swiper-button-next custom_next">
                    <img src="/img/right_arrow.svg" alt="Next" />
                  </button>
                </div>
                <div className="album_cart_sec frst_cart">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{
                      nextEl: ".custom_next",
                      prevEl: ".custom_prev",
                    }}
                    breakpoints={{
                      0: { slidesPerView: 1, spaceBetween: 10 },
                      480: { slidesPerView: 1, spaceBetween: 15 },
                      650: { slidesPerView: 1.5, spaceBetween: 15 },
                      992: { slidesPerView: 2, spaceBetween: 20 },
                      1200: { slidesPerView: 3, spaceBetween: 20 },
                      1400: { slidesPerView: 5, spaceBetween: 30 },
                    }}
                  >
                    <SwiperSlide>
                      <motion.div
                        className="album_cart"
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        style={{ cursor: "pointer" }}

                      >
                        <div className="album_img">
                           <img src="/img/album_img01.png" alt="" />
                          <button>
                            <img src="/img/play_icon02.svg" className="playicon" />
                          </button>
                        </div>
                        <div className="album_cart_content">
                          <div className="cart_text">
                            <h4>Sacred Lands</h4>
                            <span>Ancestral Roots</span>
                          </div>
                          {/* <button>
                            <img src="/img/play_icon.svg" alt="Play" />
                          </button> */}
                        </div>
                      </motion.div>
                    </SwiperSlide>

                    {/* === Slide 2 === */}
                    <SwiperSlide>
                      <motion.div
                        className="album_cart"
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="album_img">
                           <img src="/img/album_img02.png" alt="" />
                          <button>
                            <img src="/img/play_icon02.svg" className="playicon" />
                          </button>
                        </div>
                        <div className="album_cart_content">
                          <div className="cart_text">
                            <h4>Sunset Meditation</h4>
                            <span>Calm Flow</span>
                          </div>
                          {/* <button>
                            <img src="/img/play_icon.svg" alt="Play" />
                          </button> */}
                        </div>
                      </motion.div>
                    </SwiperSlide>

                    {/* === Slide 3 === */}
                    <SwiperSlide>
                      <motion.div
                        className="album_cart"
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="album_img">
                           <img src="/img/album_img03.png" alt="" />
                          <button>
                            <img src="/img/play_icon02.svg" className="playicon" />
                          </button>
                        </div>
                        <div className="album_cart_content">
                          <div className="cart_text">
                            <h4>Healing Waters</h4>
                            <span>Calm Flow</span>
                          </div>
                          {/* <button>
                            <img src="/img/play_icon.svg" alt="Play" />
                          </button> */}
                        </div>
                      </motion.div>
                    </SwiperSlide>

                    {/* === Slide 4 === */}
                    <SwiperSlide>
                      <motion.div
                        className="album_cart"
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="album_img">
                           <img src="/img/album_img04.png" alt="" />
                          <button>
                            <img src="/img/play_icon02.svg" className="playicon" />
                          </button>
                        </div>
                        <div className="album_cart_content">
                          <div className="cart_text">
                            <h4>Zen Garden</h4>
                            <span>Ki Yoga & Okido</span>
                          </div>
                          {/* <button>
                            <img src="/img/play_icon.svg" alt="Play" />
                          </button> */}
                        </div>
                      </motion.div>
                    </SwiperSlide>

                    {/* === Slide 5 === */}
                    <SwiperSlide>
                      <motion.div
                        className="album_cart"
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="album_img">
                           <img src="/img/album_img01.png" alt="" />
                          <button>
                            <img src="/img/play_icon02.svg" className="playicon" />
                          </button>
                        </div>
                        <div className="album_cart_content">
                          <div className="cart_text">
                            <h4>Spa & Wellness</h4>
                            <span>Calm Flow</span>
                          </div>
                          {/* <button>
                            <img src="/img/play_icon.svg" alt="Play" />
                          </button> */}
                        </div>
                      </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <motion.div
                        className="album_cart"
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="album_img">
                           <img src="/img/album_img02.png" alt="" />
                          <button>
                            <img src="/img/play_icon02.svg" className="playicon" />
                          </button>
                        </div>
                        <div className="album_cart_content">
                          <div className="cart_text">
                            <h4>Spa & Wellness</h4>
                            <span>Calm Flow</span>
                          </div>
                          {/* <button>
                            <img src="/img/play_icon.svg" alt="Play" />
                          </button> */}
                        </div>
                      </motion.div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <motion.div
                        className="album_cart"
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="album_img">
                           <img src="/img/album_img03.png" alt="" />
                          <button>
                            <img src="/img/play_icon02.svg" className="playicon" />
                          </button>
                        </div>
                        <div className="album_cart_content">
                          <div className="cart_text">
                            <h4>Spa & Wellness</h4>
                            <span>Calm Flow</span>
                          </div>
                          {/* <button>
                            <img src="/img/play_icon.svg" alt="Play" />
                          </button> */}
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  </Swiper>

                  {/* Custom Navigation Buttons */}

                </div>

              </div>




              <PlayerProvider>
                <SearchMusic />
                <PlayerBox />
              </PlayerProvider>
            </Container>
          </div>
        </div>

     

      </div>
    </>
  );
}
