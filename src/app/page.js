"use client"
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import HomeSidebar from "@/components/HomeSidebar";
import { Col, Container, Row } from "react-bootstrap";
import Discover from "@/components/Discover";
import Footer from "@/components/Footer";

export default function Home() {
  const paginationRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  
  useEffect(() => {
    if (swiperInstance) {
      // Assign refs after Swiper is initialized
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance]);

  const slides = [1, 2, 3];


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  const albums = [
    { img: "/img/album_img01.png", title: "Sacred Lands", sub: "Ancestral Roots" },
    { img: "/img/album_img02.png", title: "Sunset Meditation", sub: "Calm Flow" },
    { img: "/img/album_img03.png", title: "Healing Waters", sub: "Calm Flow" },
    { img: "/img/album_img04.png", title: "Zen Garden", sub: "Ki Yoga & Okido" },
    { img: "/img/album_img05.png", title: "Spa & Wellness", sub: "Calm Flow" },
  ];

  useEffect(() => {
    const equalizeHeights = () => {
      const carts = document.querySelectorAll(".music_cart");
      if (!carts.length) return;

      carts.forEach(cart => (cart.style.height = "auto"));
      const maxHeight = Math.max(...Array.from(carts).map(cart => cart.offsetHeight));
      carts.forEach(cart => (cart.style.height = `${maxHeight}px`));
    };

    equalizeHeights();
    window.addEventListener("resize", equalizeHeights);
    return () => window.removeEventListener("resize", equalizeHeights);
  }, []);


  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [perfectTrackSwiper, setPerfectTrackSwiper] = useState(null);

  const perfectTrackSlides = [1, 2, 3];


  return (

    <>

      <div className="hero_banner_slider relative">
        <div className="align_hd_sd">
          <HomeSidebar />
          <Header />
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination, Navigation, Autoplay]} // add Autoplay here
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false, // keeps autoplay running after interaction
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="hero_swipper"

        >
          {slides.map((slide) => (
            <SwiperSlide key={slide}>
              <div className="hero_banner_bx relative">
                <img src="/img/hero_banner.png" alt={`Slide ${slide}`} />
                <div className="hero_banner_title absolute bottom-10 left-10 text-white">
                  <h3 className="text-2xl font-bold">Music Without Limits</h3>
                  <p className="max-w-md">
                    Enjoy seamless music streaming with access to millions of songs
                    and uninterrupted playback.
                  </p>
                </div>
                <div className="banner_video">
                      <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="bg_video"
                >
                    <source src="img/banner_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={paginationRef}
          className="features-pagination absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-3"
        ></div>


        <div className="csm_navigation">
          <div ref={prevRef} className="custom-prev absolute top-1/2 left-4 -translate-y-1/2 z-20"></div>
          <div ref={nextRef} className="custom-next absolute top-1/2 right-4 -translate-y-1/2 z-20"></div>
        </div>


      </div>

      <section className="featured_sec sec_pad">
        <Container>
          <div className="main_title align_justify">
            <h2>New Releases</h2>
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

          <div className="album_cart_sec frst_cart">
            {albums.map((album, i) => (
              <motion.div
                key={i}
                className="album_cart"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <div className="album_img">
                  <img src={album.img} alt={album.title} />
                  <button>
                    <img src="/img/play_icon02.svg" className="playicon" />
                  </button>
                </div>
                <div className="album_cart_content">
                  <div className="cart_text">
                    <h4>{album.title}</h4>
                    <span>{album.sub}</span>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="featured_sec sec_pad music_categores_sec">
        <Container>
          <div className="main_title align_justify">
            <h2>Explore Endless Music Categories</h2>
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

          <div className="album_cart_sec">

            <motion.div
              className="album_cart"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="album_img">
                <img src="/img/music_category_img01.png" alt="Album 1" />
                <button>
                  <img src="/img/play_icon02.svg" className="playicon" />
                </button>
              </div>
              <div className="album_cart_content">
                <div className="cart_text">
                  <h4>Spiritual Healing</h4>
                  <span>Spiritual healing music can include genres like meditation, ambient, classical, world fusion, sacred music, and experimental electronic</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="album_cart"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="album_img">
                <img src="/img/music_category_img02.png" alt="Album 2" />
                <button>
                  <img src="/img/play_icon02.svg" className="playicon" />
                </button>
              </div>
              <div className="album_cart_content">
                <div className="cart_text">
                  <h4>Dance Yoga</h4>
                  <span>Dance yoga music fuses energizing genres such as world beats, pop, Bollywood, electronic, and instrumental </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="album_cart"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="album_img">
                <img src="/img/music_category_img03.png" alt="Album 2" />
                <button>
                  <img src="/img/play_icon02.svg" className="playicon" />
                </button>
              </div>
              <div className="album_cart_content">
                <div className="cart_text">
                  <h4>Nature Sounds</h4>
                  <span>Nature sounds music typically includes pure natural recordings or blends of sounds like water flowing, thunder, forest ambience</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="album_cart"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="album_img">
                <img src="/img/music_category_img04.png" alt="Album 2" />
                <button>
                  <img src="/img/play_icon02.svg" className="playicon" />
                </button>
              </div>
              <div className="album_cart_content">
                <div className="cart_text">
                  <h4>Meditation Retreat</h4>
                  <span>Meditation retreat music consists of soothing instrumental, ambient, and nature-inspired tracks crafted to create a peaceful environment</span>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>






      {/* <section className="music_categores_sec ">
        <Container>

          <div className="align_justify">
            <div className="main_title">
              <h2>Explore Endless Music Categories</h2>
              <p>
                Categories include meditative and healing genres designed to induce relaxation,
                inner peace, and spiritual connection.
              </p>
            </div>

            <div className="swiper_nav_btns ctm_btn">
              <button className="swiper-button-prev custom_prev">
                <img src="/img/left_arrow.svg" alt="Previous" />
              </button>
              <button className="swiper-button-next custom_next">
                <img src="/img/right_arrow.svg" alt="Next" />
              </button>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={4}
              loop={false} // loop removed
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".custom_next",
                prevEl: ".custom_prev",
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 1, spaceBetween: 15 },
                650: { slidesPerView: 1.5, spaceBetween: 15 },
                992: { slidesPerView: 2, spaceBetween: 20 },
                1200: { slidesPerView: 3, spaceBetween: 25 },
                1400: { slidesPerView: 4, spaceBetween: 30 },
              }}
            >
              <SwiperSlide>
                <motion.div
                  className="music_cart orange_gradients"
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                >
                  <div className="music_cart_text">
                    <h3>SPIRITUAL HEALING</h3>
                    <p>
                      Spiritual healing music can include genres like meditation, ambient, classical,
                      world fusion, sacred music, and experimental electronic.
                    </p>
                  </div>
                  <div className="music_cart_img">
                    <img src="/img/musci_img01.png" alt="Spiritual Healing" />
                  </div>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide>
                <motion.div
                  className="music_cart skyblue_gradients"
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                >
                  <div className="music_cart_text">
                    <h3>DANCE YOGA</h3>
                    <p>
                      Dance yoga music fuses energizing genres such as world beats, pop, Bollywood,
                      electronic, and instrumental.
                    </p>
                  </div>
                  <div className="music_cart_img">
                    <img src="/img/musci_img02.png" alt="Dance Yoga" />
                  </div>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide>
                <motion.div
                  className="music_cart grey_gradients"
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                >
                  <div className="music_cart_text">
                    <h3>NATURE SOUNDS</h3>
                    <p>
                      Nature sounds music typically includes pure natural recordings or blends of
                      sounds like water flowing, thunder, forest ambience.
                    </p>
                  </div>
                  <div className="music_cart_img">
                    <img src="/img/musci_img03.png" alt="Nature Sounds" />
                  </div>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide>
                <motion.div
                  className="music_cart blue_gradients"
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                >
                  <div className="music_cart_text">
                    <h3>MEDITATION RETREAT</h3>
                    <p>
                      Meditation retreat music consists of soothing instrumental, ambient, and
                      nature-inspired tracks crafted to create a peaceful environment.
                    </p>
                  </div>
                  <div className="music_cart_img">
                    <img src="/img/musci_img04.png" alt="Meditation Retreat" />
                  </div>
                </motion.div>
              </SwiperSlide>

              <SwiperSlide>
                <motion.div
                  className="music_cart grey_gradients"
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                >
                  <div className="music_cart_text">
                    <h3>CHILL VIBES</h3>
                    <p>
                      Chill vibes music includes relaxed beats, lo-fi, and ambient sounds perfect
                      for focus or winding down.
                    </p>
                  </div>
                  <div className="music_cart_img">
                    <img src="/img/musci_img03.png" alt="Chill Vibes" />
                  </div>
                </motion.div>
              </SwiperSlide>
            </Swiper>

          </motion.div>
        </Container>
      </section> */}



      <section className="featured_sec sec_pad ">
        <Container>
          <div className="main_title align_justify">
            <h2>Trending Albums</h2>
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

          <div className="album_cart_sec">

            <motion.div
              className="album_cart"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="album_img">
                <img src="/img/realease_img01.png" alt="Album 1" />
                <button>
                  <img src="/img/play_icon02.svg" className="playicon" />
                </button>
              </div>
              <div className="album_cart_content">
                <div className="cart_text">
                  <h4>Relaxing</h4>
                  <span>Ancestral Roots</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="album_cart"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="album_img">
                <img src="/img/realease_img02.png" alt="Album 2" />
                <button>
                  <img src="/img/play_icon02.svg" className="playicon" />
                </button>
              </div>
              <div className="album_cart_content">
                <div className="cart_text">
                  <h4>Sunset Meditation</h4>
                  <span>Calm Flow</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="album_cart"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="album_img">
                <img src="/img/realease_img03.png" alt="Album 2" />
                <button>
                  <img src="/img/play_icon02.svg" className="playicon" />
                </button>
              </div>
              <div className="album_cart_content">
                <div className="cart_text">
                  <h4>Yoga Music</h4>
                  <span>Calm Flow</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="album_cart"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="album_img">
                <img src="/img/realease_img04.png" alt="Album 2" />
                <button>
                  <img src="/img/play_icon02.svg" className="playicon" />
                </button>
              </div>
              <div className="album_cart_content">
                <div className="cart_text">
                  <h4>Wellness</h4>
                  <span>Ki Yoga & Okido</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="album_cart"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="album_img">
                <img src="/img/realease_img05.png" alt="Album 2" />
                <button>
                  <img src="/img/play_icon02.svg" className="playicon" />
                </button>
              </div>
              <div className="album_cart_content">
                <div className="cart_text">
                  <h4>Spa & Wellness</h4>
                  <span>Calm Flow</span>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 
      <section className="sec_pad">
        <Container>
          <div className="">
            <div className="main_title align_justify">
              <h2>New Release</h2>
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

            <motion.div
              className="release_cart"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={5}
                // navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 10 },
                  480: { slidesPerView: 2, spaceBetween: 15 },
                  650: { slidesPerView: 3, spaceBetween: 15 },
                  992: { slidesPerView: 3.5, spaceBetween: 20 },
                  1200: { slidesPerView: 3.5, spaceBetween: 20 },
                  1400: { slidesPerView: 5, spaceBetween: 30 },
                }}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <SwiperSlide key={num}>
                    <motion.div
                      className="release_cart_box"
                      variants={{
                        hidden: { opacity: 0, y: 30, scale: 0.95 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: { duration: 0.5, ease: "easeOut" },
                        },
                      }}
                    >
                      <div className="release_cart_img">
                        <img
                          src={`/img/realease_img0${num}.png`}
                          alt={`Release ${num}`}
                        />
                      </div>
                      <button className="audio_realease_play">
                        <img src="/img/play_audio.svg" alt="Play Audio" />
                      </button>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>


          </div>
        </Container>
      </section> */}



      <Discover />


      {/* <section className="sec_pad testimonial_sc">
        <Container>
          <div className="align_justify ">
            <div className="main_title aling_title">
              <h2>What are they saying?</h2>
              <p>It has been proven that thousands of users are satisfied with <br /> the features we provide, here are some words from them</p>
            </div>

            <div className="swiper_nav_btns ctm_btn">
              <button className="swiper-button-prev custom_prev">
                <img src="/img/left_arrow.svg" alt="Previous" />
              </button>
              <button className="swiper-button-next custom_next">
                <img src="/img/right_arrow.svg" alt="Next" />
              </button>
            </div>
          </div>

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
              1400: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >

            <SwiperSlide>
              <div className="testimonial_box">
                <div className="testimonial_content">
                  <div className="client_say">
                    <img src="/img/testi_img01.png" />
                    <div className="client_name">
                      <h2>Dianne Russell</h2>
                      <span>Marketing Coordinator</span>
                    </div>
                  </div>
                  <p>The MindGroove website platform really makes it easy for me to find songs that are going viral on tiktok</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial_box">
                <div className="testimonial_content">
                  <div className="client_say">
                    <img src="/img/testi_img01.png" />
                    <div className="client_name">
                      <h2>Dianne Russell</h2>
                      <span>Marketing Coordinator</span>
                    </div>
                  </div>
                  <p>The MindGroove website platform really makes it easy for me to find songs that are going viral on tiktok</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial_box">
                <div className="testimonial_content">
                  <div className="client_say">
                    <img src="/img/testi_img01.png" />
                    <div className="client_name">
                      <h2>Dianne Russell</h2>
                      <span>Marketing Coordinator</span>
                    </div>
                  </div>
                  <p>The MindGroove website platform really makes it easy for me to find songs that are going viral on tiktok</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial_box">
                <div className="testimonial_content">
                  <div className="client_say">
                    <img src="/img/testi_img01.png" />
                    <div className="client_name">
                      <h2>Dianne Russell</h2>
                      <span>Marketing Coordinator</span>
                    </div>
                  </div>
                  <p>The MindGroove website platform really makes it easy for me to find songs that are going viral on tiktok</p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>

        </Container>
      </section> */}

       <section className="feature_sc mt-5 mb-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        onSwiper={(swiper) => {
          setPerfectTrackSwiper(swiper);
          // Fix navigation refs after swiper init
          setTimeout(() => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        className="perfect_swipper"
      >
        {perfectTrackSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="perfect_track_box">
              <div className="perfect_track_text">
                <h3>
                  How to Find the perfect track
                </h3>
                <p>Tips & tricks for searching.</p>
                <a href="#" className="main_btn">
                  Find out more
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="csm_navigation">
        <div
          ref={prevButtonRef}
          className="custom-prev absolute top-1/2 left-4 -translate-y-1/2 z-20 cursor-pointer"
        >
          <img src="/img/arrow_left.svg" alt="" />
        </div>
        <div
          ref={nextButtonRef}
          className="custom-next absolute top-1/2 right-4 -translate-y-1/2 z-20 cursor-pointer"
        >
          <img src="/img/arrow_right.svg" alt="" />
        </div>
      </div>
    </section>

<div className="home_footer">
      <Footer  />
</div>

    </>

  );
}
