"use client";
import React, { useState } from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { motion } from "framer-motion";

import HomeSidebar from "@/components/HomeSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlayerBoxSec from "@/components/PlayerBoxSec";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Monthly");

  // Container variants for stagger effect
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // 0.2s delay between each card
      },
    },
  };

  // Card variants
  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

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

      <div className="bg_others_pages">
        <motion.section
          className="sec_pad"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Container>
            <motion.div
              className="premium_box"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span>-Subscription</span>
              <h2>One year join Premium for only $999</h2>
              <p>Feel the experience of listening to music and play as much as you like</p>
            </motion.div>
          </Container>
        </motion.section>

        <section className="plan_sec pb-5">
          <Container>
            <motion.div
              className="main_title text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            ></motion.div>

            <motion.div
              className="subscription_row"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
           
           <div className="offer_tabs">
                 <Nav variant="pills" className="justify-content-center mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="Monthly" className={activeTab === "Monthly" ? "active" : ""}>
                      Monthly
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Yearly" className={activeTab === "Yearly" ? "active" : ""}>
                      Yearly
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <span>Save 20%</span>
           </div>

                <Tab.Content>
                  {/* Monthly Tab */}
                  <Tab.Pane eventKey="Monthly">
                    <Row className="g-4">
                      {/* Alone Card */}
                      <Col md={6} lg={6} xl={3}>
                        <motion.div className="subscription_box" variants={boxVariants}>
                          <div className="subscription_title">
                            <h2>Free <span>/Lifetime</span></h2>
                            <h3>Alone</h3>
                            <p>
                              Enjoy your free space with <br /> pack alone on 1 platform
                            </p>
                          </div>
                          <ul className="bullet_list">
                            <li>No Ads</li>
                            <li>Download 30 songs on 1 platform</li>
                          </ul>
                          <div className="subscription_btn">
                            <button className="main_btn">Get Started</button>
                          </div>
                        </motion.div>
                      </Col>

                      {/* Sharing Card */}
                      <Col md={6} lg={6} xl={3}>
                        <motion.div className="subscription_box" variants={boxVariants}>
                          <div className="subscription_title">
                             <h2>$25 <span>/Month</span></h2>
                            <h3>Sharing</h3>
                            <p>
                              It's cheaper to subscribe <br /> with your friends
                            </p>
                          </div>
                          <ul className="bullet_list">
                            <li>No Ads</li>
                            <li>Download 500 songs on 5 platforms</li>
                            <li>Friend Activity</li>
                          </ul>
                          <div className="subscription_btn">
                            <button className="main_btn">Get Started</button>
                          </div>
                        </motion.div>
                      </Col>

                      {/* Family Card */}
                      <Col md={6} lg={6} xl={3}>
                        <motion.div className="subscription_box" variants={boxVariants}>
                          <div className="subscription_title">
                             <h2>$30<span>/Month</span></h2>
                            <h3>Family</h3>
                            <p>
                              Suitable for loved ones to <br /> listen to songs
                            </p>
                          </div>
                          <ul className="bullet_list">
                            <li>No Ads</li>
                            <li>Download 10K songs on Any Platform</li>
                            <li>Friend Activity</li>
                            <li>Group Session</li>
                          </ul>
                          <div className="subscription_btn">
                            <button className="main_btn">Get Started</button>
                          </div>
                        </motion.div>
                      </Col>

                      {/* Sultan Card */}
                      <Col md={6} lg={6} xl={3}>
                        <motion.div className="subscription_box" variants={boxVariants}>
                          <div className="subscription_title">
                             <h2>$40<span>/Month</span></h2>  
                            <h3>Sultan</h3>
                            <p>
                              Free premium account as <br /> much as you like forever
                            </p>
                          </div>
                          <ul className="bullet_list">
                            <li>No Ads</li>
                            <li>Download 10K songs on Any Platform</li>
                            <li>Friend Activity</li>
                            <li>Group Session</li>
                            <li>One Time Pay</li>
                          </ul>
                          <div className="subscription_btn">
                            <button className="main_btn">Get Started</button>
                          </div>
                        </motion.div>
                      </Col>
                    </Row>
                  </Tab.Pane>

                  {/* Yearly Tab */}
                  <Tab.Pane eventKey="Yearly">
                    <Row className="g-4">
                      {/* Alone Card */}
                      <Col md={6} lg={6} xl={3}>
                        <motion.div className="subscription_box" variants={boxVariants}>
                          <div className="subscription_title">
                            <h3>Alone</h3>
                            <p>
                              Enjoy your free space with <br /> pack alone on 1 platform
                            </p>
                          </div>
                          <ul className="bullet_list">
                            <li>No Ads</li>
                            <li>Download 30 songs on 1 platform</li>
                          </ul>
                          <div className="subscription_btn">
                            <button className="main_btn">Get Started</button>
                          </div>
                        </motion.div>
                      </Col>

                      {/* Sharing Card */}
                      <Col md={6} lg={6} xl={3}>
                        <motion.div className="subscription_box" variants={boxVariants}>
                          <div className="subscription_title">
                            <h3>Sharing</h3>
                            <p>
                              It's cheaper to subscribe <br /> with your friends
                            </p>
                          </div>
                          <ul className="bullet_list">
                            <li>No Ads</li>
                            <li>Download 500 songs on 5 platforms</li>
                            <li>Friend Activity</li>
                          </ul>
                          <div className="subscription_btn">
                            <button className="main_btn">Get Started</button>
                          </div>
                        </motion.div>
                      </Col>

                      {/* Family Card */}
                      <Col md={6} lg={6} xl={3}>
                        <motion.div className="subscription_box" variants={boxVariants}>
                          <div className="subscription_title">
                            <h3>Family</h3>
                            <p>
                              Suitable for loved ones to <br /> listen to songs
                            </p>
                          </div>
                          <ul className="bullet_list">
                            <li>No Ads</li>
                            <li>Download 10K songs on Any Platform</li>
                            <li>Friend Activity</li>
                            <li>Group Session</li>
                          </ul>
                          <div className="subscription_btn">
                            <button className="main_btn">Get Started</button>
                          </div>
                        </motion.div>
                      </Col>

                      {/* Sultan Card */}
                      <Col md={6} lg={6} xl={3}>
                        <motion.div className="subscription_box" variants={boxVariants}>
                          <div className="subscription_title">
                            <h3>Sultan</h3>
                            <p>
                              Free premium account as <br /> much as you like forever
                            </p>
                          </div>
                          <ul className="bullet_list">
                            <li>No Ads</li>
                            <li>Download 10K songs on Any Platform</li>
                            <li>Friend Activity</li>
                            <li>Group Session</li>
                            <li>One Time Pay</li>
                          </ul>
                          <div className="subscription_btn">
                            <button className="main_btn">Get Started</button>
                          </div>
                        </motion.div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </motion.div>
          </Container>
        </section>
      </div>

      <div className="others_pages_ft">
         <PlayerBoxSec />
        <Footer />
      </div>
    </>
  );
}
