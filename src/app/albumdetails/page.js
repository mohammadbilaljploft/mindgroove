"use client";
import React, { useRef, useState, useEffect } from "react";
import Header from "@/components/Header";
import HomeSidebar from "@/components/HomeSidebar";
import { motion } from "framer-motion";
import { Container, Form } from "react-bootstrap";
import TrackDetail from "@/components/modal/TrackDetail";
import Music from "@/components/Music";
import { PlayerProvider } from "@/components/PlayerContext";
import PlayerBox from "@/components/PlayerBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Page() {
    const [likedTracks, setLikedTracks] = useState([]); // ✅ Added
    const [modalShow, setModalShow] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const toggleLike = (trackId) => {
        setLikedTracks((prev) =>
            prev.includes(trackId)
                ? prev.filter((id) => id !== trackId)
                : [...prev, trackId]
        );
    };

    const toggleSection = (section) => {
        setActiveSection((prev) => (prev === section ? null : section));
    };

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
            transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
        }),
    };

    const songData = {
        trackId: 1, // ✅ Added id for like toggle
        title: "Sunset",
        artist: "Dua Lipa",
        cover: "/sunset.jpg",
        src: "/sample-audio.mp3",
    };

    const isLiked = likedTracks.includes(songData.trackId); // ✅ Fixed reference

    return (
        <>
            <div className="">
                <div className="inner_pages">
                    <div className="inner_pages_sidebar">
                        <HomeSidebar />
                    </div>

                    <div className="main_content">
                        <Header />
                        <Container>
                            <div className="album_details_banner">
                                <div className="album_content_box">
                                    <div className="album_img">
                                        <img src="/img/tracklist_img.png" alt="Play" />
                                    </div>
                                    <div className="album_content_title">
                                        <h3>{songData.title}</h3>
                                        <p>Tate McRae, The Neighbourhood, Doja Cat and more...</p>
                                        <div className="album_list">
                                            <span>20 songs </span>
                                            <ul className="bullet_list">
                                                <li>1h 36m</li>
                                            </ul>
                                        </div>
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
                                                    toggleLike(songData.trackId); // ✅ Fixed reference
                                                }}
                                                alt="Like"
                                                style={{ cursor: "pointer" }}

                                            />
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <PlayerProvider>
                                <Music />
                                <PlayerBox />
                            </PlayerProvider>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
}
