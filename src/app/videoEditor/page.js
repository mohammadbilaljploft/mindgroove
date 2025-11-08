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
import PlayerBoxSec from "@/components/PlayerBoxSec";
import Footer from "@/components/Footer";


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
      <div className="">
        <div className="inner_pages">
          <div className="inner_pages_sidebar">
            <HomeSidebar />
          </div>

          <div className="main_content ">
           <Header />      
            <Container fluid>
                 <div className="img_screen pb-5">
                    <img src="/img/video_editor.svg" />
                 </div>
            </Container>
          </div>
        </div>

    

      </div>
        <div className="others_pages_ft">
                      <PlayerBoxSec />
                     <Footer />
                 </div>
    </>
  );
}
