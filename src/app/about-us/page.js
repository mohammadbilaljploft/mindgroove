"use client";
import React from "react";
import { motion } from "framer-motion";

import HomeSidebar from "@/components/HomeSidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlayerBoxSec from "@/components/PlayerBoxSec";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Page() {
  const teamMembers = [
    {
      img: "/img/teams_img01.png",
      name: "Eric Vasquez",
      role: "Head of Creative & Licensing",
    },
    {
      img: "/img/teams_img02.png",
      name: "James Fabio",
      role: "Music Coordinator & Label Manager",
    },
    {
      img: "/img/teams_img03.png",
      name: "Angela Saucedo",
      role: "Wellness Development",
    },
  ];

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

      <motion.div
        className="bg_others_pages sidespace_page"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <motion.div
          className="about_us_box"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.span variants={fadeUp}>- About Us</motion.span>
          <motion.h1 variants={fadeUp}>
            A music player built for the now — seamless, social, and made to move
            with you.
          </motion.h1>
          <motion.h6 variants={fadeUp}>
            In 2021, our founders envisioned the evolving landscape of digital sound
            and recognized the transformative power of music technology. They set out
            to build a platform where creativity meets code — a space that empowers
            artists, producers, and labels to amplify their sound through digital
            innovation.
          </motion.h6>
          <motion.p variants={fadeUp}>
            They launched one of France’s first dedicated music-tech platforms,
            redefining how music is shared, marketed, and experienced online.
          </motion.p>
          <motion.p variants={fadeUp}>
            Today, we stand as an award-winning music-driven digital agency, backed by
            a passionate team committed to elevating the way music connects with the
            world.
          </motion.p>
        </motion.div>

        <div className="teams_sec">
          {teamMembers.map((member, i) => (
            <motion.div
              className="teams_box"
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <motion.div className="teams_img" variants={fadeUp}>
                <img src={member.img} alt={member.name} />
              </motion.div>

              <motion.div className="teams_dis" variants={fadeUp}>
                <span>{member.name}</span>
                <h2>{member.role}</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <p>
                  It is a long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The point of
                  using Lorem Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here', making it
                  look like readable English.
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="others_pages_ft">
         <PlayerBoxSec />
        <Footer />
      </div>
    </>
  );
}
