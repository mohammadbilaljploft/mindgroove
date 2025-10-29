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
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="">Discover</Link></li>
                                </ul>
                            </div>
                              <div className=" footer_title">
                                <h3>Discover</h3>
                                <ul>
                                    <li><Link href="albumdetails">Playlists </Link></li>
                                    <li><Link href="">Favorites</Link></li>
                                    <li><Link href="">Audio Edit</Link></li>
                                </ul>
                            </div>
                              <div className=" footer_title">
                                <h3>Creator</h3>
                                <ul>
                                    <li><Link href="">My Mixes</Link></li>
                                    <li><Link href="">Video Editor</Link></li>
                                    <li><Link href="">Projects</Link></li>
                                    
                                </ul>
                            </div>
                              <div className=" footer_title">
                                <h3>Account</h3>
                                <ul>
                                    <li><Link href="/login">Log In</Link></li>
                                    <li><Link href="/subscription">Pricing</Link></li>
                                    <li><Link href="">Start Free Trial</Link></li>
                                    
                                </ul>
                            </div>
                              <div className=" footer_title">
                                <h3>About</h3>
                                <ul>
                                    <li><Link href="/about-us">About Us</Link></li>
                                    <li><Link href="">Contact</Link></li>
                                    <li><Link href="">FAQ</Link></li>
                                    
                                </ul>
                            </div>
                              <div className=" footer_title">
                                <h3>Resources</h3>
                                <ul>
                                    <li><Link href="">How It Works</Link></li>
                                    <li><Link href="">Tips & Tricks</Link></li>
                                    <li><Link href="">Support</Link></li>
                                    
                                </ul>
                            </div>
                              <div className=" footer_title">
                                <h3>Follow Us</h3>
                                <ul>
                                    <li><Link href=""> <img src="/img/facebook.svg" />Facebook</Link></li>
                                    <li><Link href=""><img src="/img/instagram.svg" />Instagram</Link></li>
                                    <li><Link href=""><img src="/img/tiktok.svg" />Tiktok</Link></li>
                                    <li><Link href=""><img src="/img/youtube.svg" />YouTube</Link></li>
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
