"use client";
import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

export default function HomeSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isMobile = () => window.innerWidth < 1300;

  const handleClose = () => {
    if (isMobile()) {
      document.body.classList.add("sidebar-open"); // Mobile: reverse behavior
    } else {
      setIsSidebarOpen(false); // Desktop: normal close
    }
  };

  const handleOpen = () => {
    if (isMobile()) {
      document.body.classList.remove("sidebar-open"); // Mobile: reverse behavior
    } else {
      setIsSidebarOpen(!isSidebarOpen); // Desktop: toggle
    }
  };

  // Sync desktop state with body class
  useEffect(() => {
    if (!isMobile()) {
      if (isSidebarOpen) {
        document.body.classList.add("sidebar-open");
      } else {
        document.body.classList.remove("sidebar-open");
      }
    }
  }, [isSidebarOpen]);

  return (
    <>

      <div className="sidebar_box">
        <button className="crose_sidebar" onClick={handleClose}>
          <img src="/img/arrow_sidebar.svg" alt="Close Sidebar" />
        </button>

        <div className="sidebar_inner">
          <div className="sidebar_toggle">
            <button className="sidebar_open" onClick={handleOpen}>
              <img src="/img/sidebar_toggle.svg" alt="Open Sidebar" />
            </button>
          </div>

          <div className="sidebar_menu">
           <div className="shadow_1">
             <a href="/search" ><img src="/img/discover_icon.svg" />Discover</a>
           </div>
           <div className="shadow_2">
            <a href="" ><img src="/img/filter_icon.svg" />Filters</a></div>
            <div className="shadow_3">
            <a href="/albumdetails" ><img src="/img/playlist_icon.svg" />Playlists</a></div>
            <div className="shadow_4">
            <a href="/my-accounts" ><img src="/img/favourites_icon.svg" />Favourites</a></div>
            <div className="shadow_5">
            <a href="" ><img src="/img/mixes_icon.svg" />My Mixes</a></div>
            <div className="shadow_6">
            <a href="/videoEditor" ><img src="/img/video_icon.svg" />Video Editor</a></div>
            <div className="shadow_7">
            <a href="" ><img src="/img/project_icon.svg" />Projects</a>
            </div>
          </div>
        </div>

      </div>


    </>
  );
}
