"use client";
import React, { useState } from "react";
import { Modal, Nav, Tab, Col, Row } from "react-bootstrap";

export default function TrackDetail(props) {
    return (
        <>
            <Modal
                show={props.show}
                onHide={props.onHide}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="common_modal track_deatils"
            >
                <Modal.Header closeButton />

                <Modal.Body>
                    {/* Track Info */}
                    <div className="tracklist_deatils">
                        <div className="tracklist_deatils_song">
                            <img src="/img/tracklist_img.png" alt="Track" />
                            <div className="tracklist_deatils_text">
                                <h3>Sunset</h3>
                                <p>Tate McRae, Nightmares, The Neighbourhood, Doja Cat and more...</p>
                                <ul className="bullet_list">
                                    <li>20 songs</li>
                                    <li>1h 36m</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="modal_tabs">
                        <Tab.Container id="track-tabs" defaultActiveKey="first">
                            <Row className="g-4">
                                <Col sm={12}>
                                    <Nav variant="pills" className="mb-3">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Details</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Publishing</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Lyrics</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>

                                <Col sm={12}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row className="g-4">
                                                <Col lg={4}>
                                                    <div className="music_min_bx border_effect">
                                                        <div className="music_min">
                                                            <h6>LABEL</h6>
                                                            <span>HYPE MUSIC</span>
                                                        </div>
                                                        <div className="music_min">
                                                            <h6>GENRE</h6>
                                                            <span>HIP HOP</span>
                                                        </div>
                                                        <div className="music_min">
                                                            <h6>SUBGENRE</h6>
                                                            <div className="align_min">
                                                                <span>HIPALTERNATIVEHOP</span>
                                                                <span>TRAP</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="music_min_bx border_effect">
                                                        <div className="music_min">
                                                            <h6>MOODS</h6>
                                                            <div className="align_min">
                                                                <span>CONFIDENT</span>
                                                                <span>MOODY</span>
                                                            </div>
                                                        </div>

                                                        <div className="music_min">
                                                            <h6>KEYWORDS</h6>
                                                            <div className="align_min">
                                                                <span>PUNCHY</span>
                                                                <span>SPORTS</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="music_min_bx">


                                                        <div className="music_min">
                                                            <h6>Keys</h6>
                                                            <div className="align_min">
                                                                <span>CONFIDENT</span>
                                                                <span>MOODY</span>
                                                            </div>
                                                        </div>
                                                        <div className="music_min">
                                                            <h6>FEAT. INSTRUMENT</h6>
                                                            <div className="align_min">
                                                                <span>PUNCHY</span>
                                                                <span>SPORTS</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">

                                            <Row>
                                                <Col lg={4}>
                                                    <div className="border_effect publishing_box">
                                                        <h6>COMPOSERS</h6>
                                                        <div className="publishing_box_inner">
                                                            <div className="publishing_title">
                                                                <h3>HARLIN JAMES</h3>
                                                                <span>ASCAP: 634632355, 50%</span>
                                                            </div>
                                                            <div className="publishing_title">
                                                                <h3>JEAN-LUC LABASSE</h3>
                                                                <span>ASCAP: 759087693, 50%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                   
                                                      <Col lg={4}>
                                                    <div className=" publishing_box border_effect">
                                                        <h6>ORIGINAL PUBLISHER</h6>
                                                        <div className="publishing_box_inner">
                                                            <div className="publishing_title">
                                                                <h3>KPM MUSIC LTD</h3>
                                                                <span>PRS: 207982747, 100%</span>
                                                            </div>
                                                            <div className="publishing_title">
                                                                <h3>JEAN-LUC LABASSE</h3>
                                                                <span>ASCAP: 759087693, 50%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                   <Col lg={4}>
                                                    <div className=" publishing_box">
                                                        
                                                        <div className="publishing_box_inner">
                                                            <div className="publishing_title">
                                                                <h6>ISWC</h6>
                                                                <h3>T3303919446</h3>
                                                            </div>
                                                           <div className="publishing_title">
                                                                <h6>ISRC</h6>
                                                                <h3>GBBPP2406585</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>


                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                          <div className="lyrics_item"> 
                                              <p>
                                                I know it pays It pays To be dangerous  Sometimes Feel it in my veins Life favours the dangerous Yeah, </p>
                                                <p>  yeah Are you fighting your nature Cant take anymore Are the chemicals greater Than the fear of the fall I can t stay the same Cos </p>
                                               <p> i want everything So i ignite the rain Let it pour down I can t look away Everything has change There s no playing safe Anymore now
                                            </p>
                                          </div>
                                          <div className="download_lyrics">
                                              <button> <img src="/img/download_icon012.svg" alt="" />Download PDF</button>
                                              <button> <img src="/img/copy_icon012.svg" alt="" />Copy Lyrics</button>
                                          </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}
