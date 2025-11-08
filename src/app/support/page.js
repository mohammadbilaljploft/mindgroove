"use client";
import React from "react";
import HomeSidebar from "@/components/HomeSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';
import { Col, Form, Row } from "react-bootstrap";
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

                <div className="faq_box">
                    <div className="faq_title">
                        <h1>FAQs</h1>
                    </div>


                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>1. Do you offer a free trial?</Accordion.Header>
                            <Accordion.Body>
                                Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
                                Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus
                                accumsan tortor posuere.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>2. Do you offer a free trial?</Accordion.Header>
                            <Accordion.Body>
                                Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
                                Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus
                                accumsan tortor posuere.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>3. Do you offer a free trial?</Accordion.Header>
                            <Accordion.Body>
                                Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
                                Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus
                                accumsan tortor posuere.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>4. Do you offer a free trial?</Accordion.Header>
                            <Accordion.Body>
                                Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
                                Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus
                                accumsan tortor posuere.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>5. Do you offer a free trial?</Accordion.Header>
                            <Accordion.Body>
                                Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
                                Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus
                                accumsan tortor posuere.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>6. Do you offer a free trial?</Accordion.Header>
                            <Accordion.Body>
                                Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
                                Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus
                                accumsan tortor posuere.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>7. Do you offer a free trial?</Accordion.Header>
                            <Accordion.Body>
                                Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
                                Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus
                                accumsan tortor posuere.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header>8. Do you offer a free trial?</Accordion.Header>
                            <Accordion.Body>
                                Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
                                Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus
                                accumsan tortor posuere.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                            <Accordion.Header>9. Do you offer a free trial?</Accordion.Header>
                            <Accordion.Body>
                                Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
                                Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus
                                accumsan tortor posuere.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="10">
                            <Accordion.Header>10. Do you offer a free trial?</Accordion.Header>
                            <Accordion.Body>
                                Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
                                Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus
                                accumsan tortor posuere.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="11">
                            <Accordion.Header>11. Do you offer a free trial?</Accordion.Header>
                            <Accordion.Body>
                                Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
                                Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus
                                accumsan tortor posuere.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="12">
                            <Accordion.Header>12. Do you offer a free trial?</Accordion.Header>
                            <Accordion.Body>
                                Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices.
                                Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus
                                accumsan tortor posuere.
                            </Accordion.Body>
                        </Accordion.Item>



                    </Accordion>


                </div>

                <div className="contact_details">
                    <div className="contact_details_inner">
                        <div className="title_contact">
                            <span>Contact Us</span>
                            <h2>Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</h2>
                        </div>
                        <div className="social_link">
                            <ul>
                                <li>
                                    <Link href=""><img src="/img/fb.svg" /></Link>
                                </li>
                                <li>
                                    <Link href=""><img src="/img/insta.svg" /></Link>
                                </li>
                                <li>
                                    <Link href=""><img src="/img/twitter.svg" /></Link>
                                </li>
                            </ul>
                        </div>


                    </div>

                    <Form>
                        <Row className="g-5">
                            <Col lg={4} md={6} >
                                <div className="form_field">
                                    <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                            </Col>
                            <Col lg={4} md={6} >
                                <div className="form_field">
                                    <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                            </Col>
                            <Col lg={4} md={6} >
                                <div className="form_field">
                                    <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                            </Col>
                            <Col lg={12} >
                                <div className="form_field">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </div>
                            </Col>
                        </Row>

                        <div className="mt-5">
                            <button className="main_btn explore_btn"> Send Message <img src="/img/fi-rr-arrow-right.svg" alt="Arrow" /></button>
                        </div>
                    </Form>
                </div>

            </div>



            <div className="others_pages_ft">
                 <PlayerBoxSec />
                <Footer />
            </div>
        </>
    );
}
