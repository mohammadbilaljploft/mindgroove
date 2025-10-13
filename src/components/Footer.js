"use client";

import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";


export default function Footer() {



    return (

        <>


            <footer className="footer_sec">

                <Container>
                    <Row className="g-4">
                        <Col lg={6} md={6}>
                            <div className="footer_logo footer_title">
                                 <a href="/" ><img src="/img/footer_logo.png" alt="Logo" /></a>
                                <p>MindGroove is a streaming service that allows you to listen to millions of 
                                    songs. Its great features include the ability to download your favorite tracks and play them offline, lyrics in real time, listening across all your favorite device.</p>
                               
                            </div>
                        </Col>
                        <Col lg={2} md={6}>
                            <div className=" footer_title">
                                <h3> Page Menus</h3>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Album</a></li>
                                    <li><a href="">Artist</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2} md={6}>
                              <div className=" footer_title">
                                <h3>Community</h3>
                                <ul>
                                    <li><a href="">For Artist</a></li>
                                    <li><a href="">Sound</a></li>
                                    <li><a href="">Audio Edit</a></li>
                                </ul>
                            </div>
                        </Col>
                            <Col lg={2} md={6}>
                              <div className=" footer_title">
                                <h3>Term & Condition</h3>
                                <ul>
                                    <li><a href="">Privacy Policy</a></li>
                                    
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <div className="copy_right">
                        <p>Copyright © 2025. All Rights Reserved.</p>
                    </div>
                </Container>

            </footer>


        </>
    );
}
