"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import HomeSidebar from "@/components/HomeSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
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
      <div className="hero_banner_innerpage">
        <HomeSidebar />
        <Header />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inner_banner_title"
        >
          <span>-Subscription</span>
          <h2>Sound unchained. <br /> Music, redefined.</h2>
        </motion.div>
      </div>

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
          <h2>One year join Premium for only $999</h2>
          <p>Feel the experience of listening to music  and play as much as you like</p>
          <div className="align_btn">
            <button className="main_btn">Get Started</button>
            <button className="outline_btn">See Detail</button>
          </div>

          <div className="option_or">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>
        </motion.div>
   </Container>
      </motion.section>

      <section className="plan_sec sec_pad ">
        <Container>
          <motion.div
            className="main_title text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>CHOOSE YOURS</h2>
          </motion.div>

          <motion.div
            className="subscription_row"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row>
              {/* Alone Card */}
              <Col lg={3}>
                <motion.div className="subscription_box" variants={boxVariants}>
                  <div className="subscription_title">
                    <h3>Alone</h3>
                    <p>Enjoy your free space with <br /> pack alone on 1 platform</p>
                  </div>
                  <ul className="bullet_list">
                    <li>No Ads</li>
                    <li>download 30 songs on 1 platform</li>
                  </ul>
                  <div className="subscription_btn">
                    <button className="main_btn">Get Started</button>
                  </div>
                </motion.div>
              </Col>

              {/* Sharing Card */}
              <Col lg={3}>
                <motion.div className="subscription_box" variants={boxVariants}>
                  <div className="subscription_title">
                    <h3>Sharing</h3>
                    <p>It's cheaper to subscribe <br /> with your friends</p>
                  </div>
                  <ul className="bullet_list">
                    <li>No Ads</li>
                    <li>download 500 songs on 5 platform</li>
                    <li>Friend Activity</li>
                  </ul>
                  <div className="subscription_btn">
                    <button className="main_btn">Get Started</button>
                  </div>
                </motion.div>
              </Col>

              {/* Family Card */}
              <Col lg={3}>
                <motion.div className="subscription_box" variants={boxVariants}>
                  <div className="subscription_title">
                    <h3>Family</h3>
                    <p>Suitable for loved ones to <br />listen to songs</p>
                  </div>
                  <ul className="bullet_list">
                    <li>No Ads</li>
                    <li>download 10K songs on Any Platform</li>
                    <li>Friend Activity</li>
                    <li>Group Session</li>
                  </ul>
                  <div className="subscription_btn">
                    <button className="main_btn">Get Started</button>
                  </div>
                </motion.div>
              </Col>

              {/* Sultan Card */}
              <Col lg={3}>
                <motion.div className="subscription_box" variants={boxVariants}>
                  <div className="subscription_title">
                    <h3>Sultan</h3>
                    <p>Free premium account as <br /> much as you like forever</p>
                  </div>
                  <ul className="bullet_list">
                    <li>No Ads</li>
                    <li>download 10K songs on Any Platform</li>
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
          </motion.div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
