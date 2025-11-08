"use client";
import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Col, Container, Form, Row } from "react-bootstrap";
import HomeSidebar from "@/components/HomeSidebar";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Header from "@/components/Header";
import Music from "@/components/Music";
import PlayerBoxSec from "@/components/PlayerBoxSec";
import Footer from "@/components/Footer";

export default function Page() {

    const [value, setValue] = useState();

    return (
        <>

            <div className="main_dvv">
                <div className="bg_img">
                    <img src="/img/other_page.png" />
                </div>
            </div>

            <section className=" ">
                <div className="profile_sc">
                    <div className="inner_pages ">
                        <div className="inner_pages_sidebar">
                            <HomeSidebar />
                        </div>

                        <div className="main_content">
                            <Header />
                            <Container fluid>
                                <div className="profile_box">
                                    <div className="profile_img">
                                        <img src="/img/img_profile.png" />
                                        <div className="edit_icon">
                                            <img src="/img/edit_icon02.svg" />
                                        </div>
                                        <input type="file" />
                                    </div>
                                    <div className="profile_text">
                                        <h5>Charlie Franci</h5>
                                        <span>User</span>
                                    </div>
                                </div>





                                <div className="tabs_sec ">
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
                                        <Row className="g-5">
                                            <Col lg={3} xl={3} xxl={2}>
                                                <div className="nav_item_tab_box">
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="profile">My Profile </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Content">Content ID</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="Billing">Billing</Nav.Link>
                                                        </Nav.Item>
                                                         <Nav.Item>
                                                            <Nav.Link eventKey="Subscription">Manage Subscription</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="downloads">Downloads</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>

                                                    <div className="logout_bx mt-3">
                                                        <a href="" className="logout_link">
                                                            Logout
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg={8} xl={9} xxl={10}>

                                                <Tab.Content>
                                                    <Tab.Pane eventKey="profile">
                                                        <Row>
                                                            <Col xl={7} lg={12}>
                                                                <Row className="g-4">
                                                                    <Col lg={6}>
                                                                        <div className="form_field">
                                                                            <Form.Label>First Name * </Form.Label>
                                                                            <div className="gradients_field">
                                                                                <Form.Control
                                                                                    type="email"
                                                                                    placeholder="willie.jennings@example.com"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <div className="form_field">
                                                                            <Form.Label>Last Name *</Form.Label>
                                                                            <div className="gradients_field">
                                                                                <Form.Control
                                                                                    type="email"
                                                                                    placeholder="willie.jennings@example.com"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <div className="form_field">
                                                                            <Form.Label>Title / Position </Form.Label>
                                                                            <div className="gradients_field">
                                                                                <Form.Control
                                                                                    type="email"
                                                                                    placeholder="willie.jennings@example.com"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <div className="form_field">
                                                                            <Form.Label>Phone</Form.Label>
                                                                            <div className="gradients_field">
                                                                                <PhoneInput
                                                                                    className="form-control"
                                                                                    placeholder="Enter phone number"
                                                                                    value={value}
                                                                                    onChange={setValue}
                                                                                    defaultCountry="IN"
                                                                                />
                                                                            </div>
                                                                        </div>

                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <div className="form_field">
                                                                            <Form.Label>Address 1 *</Form.Label>
                                                                            <div className="gradients_field">
                                                                                <Form.Control
                                                                                    type="email"
                                                                                    placeholder="willie.jennings@example.com"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <div className="form_field">
                                                                            <Form.Label>Address 2 *</Form.Label>
                                                                            <div className="gradients_field">
                                                                                <Form.Control
                                                                                    type="email"
                                                                                    placeholder="willie.jennings@example.com"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <div className="form_field">
                                                                            <Form.Label>City *</Form.Label>
                                                                            <div className="gradients_field">
                                                                                <Form.Control
                                                                                    type="email"
                                                                                    placeholder="willie.jennings@example.com"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <div className="form_field">
                                                                            <Form.Label>Zip * </Form.Label>
                                                                            <div className="gradients_field">
                                                                                <Form.Control
                                                                                    type="email"
                                                                                    placeholder="willie.jennings@example.com"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <div className="form_field">
                                                                            <Form.Label>Country *</Form.Label>
                                                                            <div className="gradients_field">
                                                                                <Form.Control
                                                                                    type="email"
                                                                                    placeholder="willie.jennings@example.com"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                    <Col lg={6}>
                                                                        <div className="form_field">
                                                                            <Form.Label>State * </Form.Label>
                                                                            <div className="gradients_field">
                                                                                <Form.Control
                                                                                    type="email"
                                                                                    placeholder="willie.jennings@example.com"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="Content">
                                                    Content
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="Billing">
                                             Billing
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="Subscription">
                                             Subscription
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="downloads">
                                                        <div className="play_tabs">
                                                            <div className="play_title">
                                                                <h2>Downloads</h2>
                                                            </div>
                                                            <div className="music_table">
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            {/* <th scope="col">#</th> */}
                                                                            <th scope="col">Title</th>

                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td><span>1</span></td>
                                                                            <td>
                                                                                <div className="music_list">
                                                                                    <img src="/img/img_151.png" />
                                                                                    <div>
                                                                                        <h2>Water</h2>
                                                                                        <span>Tyla</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                                <div className="table_icon row_rigt">
                                                                                    <img src="/img/menu_icon.svg" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td><span>1</span></td>
                                                                            <td>
                                                                                <div className="music_list">
                                                                                    <img src="/img/img_152.png" />
                                                                                    <div>
                                                                                        <h2>Greedy</h2>
                                                                                        <span>tate mcrae</span>
                                                                                    </div>
                                                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                                <div className="table_icon row_rigt">
                                                                                    <img src="/img/menu_icon.svg" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td><span>1</span></td>
                                                                            <td>
                                                                                <div className="music_list">
                                                                                    <img src="/img/img_153.png" />
                                                                                    <div>
                                                                                        <h2>Lovin On me</h2>
                                                                                        <span> jack harlow</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                                <div className="table_icon row_rigt">
                                                                                    <img src="/img/menu_icon.svg" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td ><span>1</span></td>
                                                                            <td>
                                                                                <div className="music_list">
                                                                                    <img src="/img/img_154.png" />
                                                                                    <div>
                                                                                        <h2>pain the town red</h2>
                                                                                        <span>Doja Cat</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                                <div className="table_icon row_rigt">
                                                                                    <img src="/img/menu_icon.svg" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td><span>1</span></td>
                                                                            <td>
                                                                                <div className="music_list">
                                                                                    <img src="/img/img_155.png" />
                                                                                    <div>
                                                                                        <h2>Lovin On me</h2>
                                                                                        <span> jack harlow</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                                <div className="table_icon row_rigt">
                                                                                    <img src="/img/menu_icon.svg" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td><span>1</span></td>
                                                                            <td>
                                                                                <div className="music_list">
                                                                                    <img src="/img/img_156.png" />
                                                                                    <div>
                                                                                        <h2>Water</h2>
                                                                                        <span>Tyla</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                                <div className="table_icon row_rigt">
                                                                                    <img src="/img/menu_icon.svg" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td><span>1</span></td>
                                                                            <td>
                                                                                <div className="music_list">
                                                                                    <img src="/img/table_img.png" />
                                                                                    <div>
                                                                                        <h2>Sorfcore</h2>
                                                                                        <span>The neighberhood</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                                <div className="table_icon row_rigt">
                                                                                    <img src="/img/menu_icon.svg" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>


                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </div>



                            </Container>
                        </div>
                    </div>
                </div>
            </section>


            <div className="others_pages_ft">
                <PlayerBoxSec />
                <Footer />
            </div>

        </>
    );
}
