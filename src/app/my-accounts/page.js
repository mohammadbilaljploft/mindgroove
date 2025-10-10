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

export default function Page() {

    const [value, setValue] = useState();

    return (
        <>
            <section className=" ">
                <div className="">
                    <div className="inner_pages ">
                        <div className="inner_pages_sidebar">
                            <HomeSidebar />
                        </div>

                        <div className="main_content">
                            <Header />
                            <Container>

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
                                        <Row className="g-4">
                                            <Col lg={3} xl={2}>
                                                <div className="nav_item_tab_box">
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="profile">My Profile </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="playlist">My Playlist</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="favorites">Favorites</Nav.Link>
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

                                            <Col lg={8} xl={9}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="profile">
                                                      <Row>
                                                        <Col xl={10} lg={12}>
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

                                                    <Tab.Pane eventKey="playlist">
                                                        <div className="play_tabs">
                                                            <div className="play_title">
                                                                <h2>My Playlist</h2>
                                                            </div>
                                                            <div className="music_table">
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            {/* <th scope="col">#</th> */}
                                                                            <th scope="col">Title</th>
                                                                            <th scope="col">Time</th>
                                                                            <th scope="col">Genre</th>
                                                                            <th scope="col">Mood</th>
                                                                            <th scope="col">BPM</th>
                                                                            <th scope="col"></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
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
                                                                            <td>3:26</td>
                                                                            <td>Score</td>
                                                                            <td>Exciting</td>
                                                                            <td>108</td>
                                                                            <td>
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
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
                                                                            <td>3:26</td>
                                                                            <td>Score</td>
                                                                            <td>Exciting</td>
                                                                            <td>108</td>
                                                                            <td>
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
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
                                                                            <td>3:26</td>
                                                                            <td>Score</td>
                                                                            <td>Exciting</td>
                                                                            <td>108</td>
                                                                            <td>
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
                                                                                    <img src="/img/menu_icon.svg" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td ><span>1</span></td>
                                                                            <td>
                                                                                <div className="music_list">
                                                                                    <img src="/img/table_img.png" />
                                                                                    <div>
                                                                                        <h2>Sorfcore</h2>
                                                                                        <span>The neighberhood</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>3:26</td>
                                                                            <td>Score</td>
                                                                            <td>Exciting</td>
                                                                            <td>108</td>
                                                                            <td>
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
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
                                                                            <td>3:26</td>
                                                                            <td>Score</td>
                                                                            <td>Exciting</td>
                                                                            <td>108</td>
                                                                            <td>
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
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
                                                                            <td>3:26</td>
                                                                            <td>Score</td>
                                                                            <td>Exciting</td>
                                                                            <td>108</td>
                                                                            <td>
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
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
                                                                            <td>3:26</td>
                                                                            <td>Score</td>
                                                                            <td>Exciting</td>
                                                                            <td>108</td>
                                                                            <td>
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
                                                                                    <img src="/img/menu_icon.svg" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>


                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="favorites">
                                                          <div className="play_tabs">
                                                            <div className="play_title">
                                                                <h2>Favourite</h2>
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
                                                                                    <img src="/img/table_img.png" />
                                                                                    <div>
                                                                                        <h2>Sorfcore</h2>
                                                                                        <span>The neighberhood</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        
                                                                            <td>
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
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
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
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
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
                                                                                    <img src="/img/menu_icon.svg" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td ><span>1</span></td>
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
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
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
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
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
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
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
                                                                                <div className="table_icon">
                                                                                    <img src="/img/info_icon.svg" />
                                                                                    <img src="/img/download_icon.svg" />
                                                                                    <img src="/img/plus_icon.svg" />
                                                                                    <img src="/img/heart_icon.svg" />
                                                                                    <img src="/img/menu_icon.svg" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>


                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="downloads">
                                                             <div className="play_tabs">
                                                            <div className="play_title">
                                                                <h2>Favourite</h2>
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
                                                                                    <img src="/img/table_img.png" />
                                                                                    <div>
                                                                                        <h2>Sorfcore</h2>
                                                                                        <span>The neighberhood</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        
                                                                            <td>
                                                                                <div className="table_icon">
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
                                                                                <div className="table_icon">
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
                                                                                <div className="table_icon">
                                                                                    <img src="/img/menu_icon.svg" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td ><span>1</span></td>
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
                                                                                <div className="table_icon">
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
                                                                                <div className="table_icon">
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
                                                                                <div className="table_icon">
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
                                                                                <div className="table_icon">
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

        </>
    );
}
