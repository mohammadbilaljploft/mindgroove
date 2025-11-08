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

            <div className="bg_others_pages sidespace_page howits">
                <div className="tips_banner">
                    <h1>Our Guiding Principles</h1>
                    <p>These guiding principles act as our north star. They enable individuals,
                        teams, orgs. and our company as a whole to have greater impact and achieve
                        our mission because were aligned on whars important to us as a collective.</p>
                </div>

                <Row className="justify-content-center g-5 align-items-center mb-4" >
                    <Col lg={4} xl={3} md={4} >
                        <div className="principles_img">
                            <img src="/img/how_img01.png " />
                        </div>

                    </Col>
                    <Col lg={8} xl={6} md={8}>
                        <div className="principles_title">
                            <h2>We commit to our craft.</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-center g-5 align-items-center mb-4">
                    <Col lg={8} xl={6} md={8} className="order_2">
                        <div className="principles_title">
                            <h2>We minimize waste.</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </Col>
                    <Col lg={4} xl={3} md={4} className="order_1">
                        <div className="principles_img">
                            <img src="/img/how_img02.png " />
                        </div>

                    </Col>
                </Row>

                 <Row className="justify-content-center g-5 align-items-center">
                    <Col lg={4} xl={3} md={4} >
                        <div className="principles_img">
                            <img src="/img/how_img03.png " />
                        </div>

                    </Col>
                    <Col lg={8} xl={6} md={8}>
                        <div className="principles_title">
                            <h2>We embrace differences.</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </Col>
                </Row>

            </div>





            <div className="others_pages_ft">
                 <PlayerBoxSec />
                <Footer />
            </div>
        </>
    );
}
