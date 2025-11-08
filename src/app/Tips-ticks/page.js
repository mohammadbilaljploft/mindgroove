"use client";
import React from "react";
import { motion } from "framer-motion";
import HomeSidebar from "@/components/HomeSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Col, Row } from "react-bootstrap";
import { Link } from "lucide-react";
import PlayerBoxSec from "@/components/PlayerBoxSec";



export default function Page() {


    return (
        <>
            <div className="align_hd_sd">
                <HomeSidebar />
                <Header />
            </div>
            <div className="main_dvv">
                <div className="bg_img">
                    <img src="/img/other_page.png" />
                </div>
            </div>
            <div className="bg_others_pages sidespace_page">
                <div className="tips_banner">
                    <h1>TIPS & TRICKS</h1>
                    <p>Over 40 continuously updated, high quality, video user manuals for WordPress. All integrated
                        with the WordPress dashboard, our videos will guide you and your users
                        through everything they need to know. Your training time, costs and effort, just got slashed.</p>
                    <input placeholder="Search Video" />
                </div>

                <div className="video_tricks_sc">
                    <div className="video_tricks_title">
                        <h2>Video</h2>
                    </div>
                    <Row className="g-4">
                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img01.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img02.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img03.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img04.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img02.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img01.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img04.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img03.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img01.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img02.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img03.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img04.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img02.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img01.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>

                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img04.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6}>
                            <div className="video_tricks_box">
                                <div className="video_img_box">
                                    <div className="video_img">
                                        <img src="/img/video_img03.png" />
                                    </div>
                                    <div className="play_icon">
                                        <img src="/img/playandpaus.svg" />
                                    </div>
                                </div>

                                <div className="video_tricks_content">
                                    <h3>Lorem Ipsum is simply do  text of the printing and type</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever Lorem Ipsum is simply dummy text of the printing.</p>
                                    <a href="">View Details</a>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>

            </div>





            <div className="others_pages_ft">
                <PlayerBoxSec />
                <Footer />
            </div>
        </>
    );
}
