"use client";

import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";


export default function Footer() {



    return (

        <>


            <footer className="footer_sec">

                <Container>
                    <div className="footer_item">
                            <div className="footer_logo footer_title">
                                 <a href="/" ><img src="/img/footer_logo.png" alt="Logo" /></a>
                                <p>MindGroove is a streaming service that allows you to listen to millions of 
                                    songs. Its great features include the ability to download your favorite tracks and play them offline, lyrics in real time, listening across all your favorite device.</p>
                               
                            </div>
                            <div className=" footer_title">
                                <h3> Start</h3>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Discover</a></li>
                                </ul>
                            </div>
                              <div className=" footer_title">
                                <h3>Discover</h3>
                                <ul>
                                    <li><a href="">Playlists </a></li>
                                    <li><a href="">Favorites</a></li>
                                    <li><a href="">Audio Edit</a></li>
                                </ul>
                            </div>
                              <div className=" footer_title">
                                <h3>Creator</h3>
                                <ul>
                                    <li><a href="">My Mixes</a></li>
                                    <li><a href="">Video Editor</a></li>
                                    <li><a href="">Projects</a></li>
                                    
                                </ul>
                            </div>
                              <div className=" footer_title">
                                <h3>Account</h3>
                                <ul>
                                    <li><a href="">Log In</a></li>
                                    <li><a href="">Pricing</a></li>
                                    <li><a href="">Start Free Trial</a></li>
                                    
                                </ul>
                            </div>
                              <div className=" footer_title">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">FAQ</a></li>
                                    
                                </ul>
                            </div>
                              <div className=" footer_title">
                                <h3>Resources</h3>
                                <ul>
                                    <li><a href="">How It Works</a></li>
                                    <li><a href="">Tips & Tricks</a></li>
                                    <li><a href="">Support</a></li>
                                    
                                </ul>
                            </div>
                              <div className=" footer_title">
                                <h3>Follow Us</h3>
                                <ul>
                                    <li><a href=""> <img src="/img/facebook.svg" />Facebook</a></li>
                                    <li><a href=""><img src="/img/instagram.svg" />Instagram</a></li>
                                    <li><a href=""><img src="/img/tiktok.svg" />Tiktok</a></li>
                                    <li><a href=""><img src="/img/youtube.svg" />YouTube</a></li>
                                </ul>
                            </div>
                    </div>

                    <div className="copy_right">
                        <p>Copyright © 2025. All Rights Reserved.</p>
                    </div>
                </Container>

            </footer>


        </>
    );
}
