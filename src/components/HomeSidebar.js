"use client";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";

export default function HomeSidebar() {


    return (
    <>
    
  <div className="sidebar_box">

      <div className="logo_img">
        <img src="/img/logo_home_sidebar.svg" />
    </div>

    <div className="sidebar_menu">
        <a href="" ><img src="/img/sidebar_icon01.svg" /></a>
        <a href="" ><img src="/img/sidebar_icon02.svg" /></a>
        <a href="" ><img src="/img/sidebar_icon03.svg" /></a>
        <a href="" ><img src="/img/sidebar_icon04.svg" /></a>
        <a href="" ><img src="/img/sidebar_icon05.svg" /></a>
        <a href="" ><img src="/img/sidebar_icon06.svg" /></a>
        <a href="" ><img src="/img/sidebar_icon07.svg" /></a>
    </div>

  </div>

    
    </>
    );
}
