"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import HomeSidebar from "@/components/HomeSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  const [showAll, setShowAll] = useState(false);

  // All gallery images
  const images = [
    "/img/abt_img01.png",
    "/img/abt_img02.png",
    "/img/abt_img03.png",
    "/img/abt_img04.png",
    "/img/abt_img05.png",
    "/img/abt_img06.png",
    "/img/abt_img07.png",
    "/img/abt_img08.png",
    "/img/abt_img05.png",
    "/img/abt_img03.png",
    "/img/abt_img01.png",
    "/img/abt_img05.png",
  ];

  // Initially show 8 images
  const imagesToShow = showAll ? images : images.slice(0, 8);

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="hero_banner_innerpage about_us_banner">
        <div className="align_hd_sd">
          <HomeSidebar />
          <Header />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inner_banner_title"
        >
          <span>-About Us</span>
          <h2>
            Sound unchained. <br /> Music, redefined.
          </h2>
        </motion.div>
      </div>

      {/* About Us Section */}
      <section className="sec_pad">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="about_us_content"
          >
            <motion.span variants={textVariants}>
              A music player built for the now. Seamless, social, and made to move with you.
            </motion.span>
            <Row className="g-5 align-items-center">
              <Col lg={4}>
                <motion.div variants={cardVariants} className="about_img">
                  <img src="/img/about_img.png" />
                </motion.div>
              </Col>
              <Col lg={8}>
                <motion.div variants={cardVariants} className="about_xt">
                  <h5>
                    In 2021, our founders envisioned the evolving landscape of digital sound and recognized the
                    transformative power of music technology. They set out to build a platform where creativity meets
                    code — a space that empowers artists, producers, and labels to amplify their sound through digital
                    innovation.
                  </h5>
                  <p>
                    They launched one of France’s first dedicated music-tech platforms, redefining how music is shared,
                    marketed, and experienced online.
                  </p>
                  <p>
                    Today, we stand as an award-winning music-driven digital agency, backed by a passionate team
                    committed to elevating the way music connects with the world.
                  </p>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Artists Stats */}
      <section className="sec_pad">
        <Container>
          <Row className="g-4">
            <Col lg={8}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                className="main_title abt_title"
              >
                <h2>
                  Some of The Most Famous <br /> <span>Artists</span> Of All Time in the <br /> world
                </h2>
                <p>
                  World music is an easy way for people to describe the melding traditional and nontraditional music{" "}
                  <br /> from foreign countries. Generally, world music refers to sounds from the non-Western part of
                  the world.
                </p>
              </motion.div>
            </Col>
            <Col lg={4}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                className="people_webiste"
              >
                <div className="people_webiste_title">
                  <h1>55,300</h1>
                  <span>People register this website</span>
                </div>
                <div className="people_webiste_title">
                  <h2>50,000</h2>
                  <span>People register this website</span>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="sec_pad">
        <Container fluid>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="gallery_sec"
          >
            <motion.div
              key={showAll ? "all" : "partial"} // triggers re-render on state change
              className="gallery_inner"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {imagesToShow.map((src, index) => (
                <motion.div key={index} className="gallery_img" variants={cardVariants}>
                  <img src={src} alt={`Gallery ${index + 1}`} />
                </motion.div>
              ))}
            </motion.div>

            {!showAll && (
              <div className="center_pos">
                <motion.button
                  className="main_btn explore_btn"
                  onClick={() => setShowAll(true)}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore Artist</span>
                  <img src="/img/fi-rr-arrow-right.svg" alt="Arrow" />
                </motion.button>
              </div>
            )}
          </motion.div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
