"use client";
import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

export default function Header() {
  const [activeSection, setActiveSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPromptActive, setIsPromptActive] = useState(false); // shows prompt list on input focus

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Body classes
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle("sidebar-open", isSidebarOpen);
  }, [isSidebarOpen]);

  // Add class when Ask mode is ON
  useEffect(() => {
    document.body.classList.toggle("ask-mode", activeSection === "ask");
  }, [activeSection]);

  // ✅ Close all dropdowns, searches, prompt lists when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Close dropdown if clicked outside
      if (!e.target.closest(".right_navbar")) {
        setIsDropdownOpen(false);
      }

      // Close search/similar/prompt if clicked outside
      if (!e.target.closest(".search_box")) {
        setActiveSection(null);
        setIsPromptActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="header_sec">
        <div className="header_inner">
          <div className="left_navbar">
            <div className="logo_img">
              <a href="/">
                <img src="/img/logo_01.svg" />
              </a>
            </div>

            {/* Main Search Section */}
            <div
              className={`search_box ${activeSection !== null ? "active" : ""}`}
            >
              {/* Normal Search Section */}
              {activeSection !== "ask" && (
                <div className="search_filed">
                  <input
                    type="text"
                    placeholder="Search music by keywords, phrases, add a link, or upload an audio file"
                    onClick={() => toggleSection("search")}
                  />
                  <div
                    className={`search_itm_list ${
                      activeSection === "search" ? "active" : ""
                    }`}
                  >
                    <div className="exmple_sec">
                      <span>For Example</span>
                      <div className="search_exmaple_select">
                        {["Genre", "Mood", "Video Themes", "Instrument"].map(
                          (label, idx) => (
                            <div className="exmaple_select" key={idx}>
                              <Form.Select aria-label={`Select ${label}`}>
                                <option>{label}</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="history_list">
                      <div className="history_list_item">
                        <span>Moods</span>
                        <p>Confident, Moody, Dark, Hopeful, Sexy</p>
                      </div>
                      <div className="history_list_item">
                        <span>Tempo</span>
                        <p>120bpm, Fast, Medium, 80bpm</p>
                      </div>
                      <div className="history_list_item">
                        <span>Genres</span>
                        <p>Score, EDM, Atmospheric, World</p>
                      </div>
                      <div className="history_list_item">
                        <span>Label</span>
                        <p>
                          X-Series, Hype Music, Directors Cuts, Two Steps From
                          Hell
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Ask mode input field */}
              {activeSection === "ask" && (
                <div className="search_filed prompt_field">
                  <input
                    type="text"
                    placeholder="Enter any prompt"
                    onFocus={() => setIsPromptActive(true)}
                    onBlur={() => setIsPromptActive(false)}
                  />
                </div>
              )}

              {/* Upload button hidden in Ask mode */}
              {activeSection !== "ask" && (
                <div className="upload_dropdown_box">
                  <button
                    className="upload_btn"
                    onClick={() => toggleSection("similar")}
                  >
                    <img src="/img/upload_icon.svg" alt="upload" />
                  </button>

                  <div
                    className={`similar_search ${
                      activeSection === "similar" ? "active" : ""
                    }`}
                  >
                    <h3>Similar Search</h3>
                    <div className="upload_field">
                      <input type="file" />
                      <div className="upload_icon_bx">
                        <img src="/img/upload_file.svg" alt="" />
                        <h6>
                          Upload audio or video files for similar search
                        </h6>
                      </div>
                    </div>
                    <div className="option_or">
                      <span></span>
                      <p>Or</p>
                      <span></span>
                    </div>

                    <div className="similar_input_field">
                      <input
                        type="text"
                        placeholder="URL from platforms like YouTube or Spotify or TikTok"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Ask Me Anything Switch */}
              <div className="switch_ask_anything">
                <span>Ask Me Anything</span>
                <div className="d-flex align-items-center gap-2">
                  <div
                    onClick={() =>
                      setActiveSection(
                        activeSection === "ask" ? null : "ask"
                      )
                    }
                    style={{
                      width: "50px",
                      height: "25px",
                      borderRadius: "25px",
                      background:
                        activeSection === "ask" ? "#17DCF5" : "#878787",
                      position: "relative",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                  >
                    <div
                      style={{
                        width: "23px",
                        height: "23px",
                        borderRadius: "50%",
                        background: "#fff",
                        position: "absolute",
                        top: "1px",
                        left: activeSection === "ask" ? "26px" : "1px",
                        transition: "0.3s",
                      }}
                    ></div>
                  </div>
                </div>

                {/* PROMPT LIST (only on input focus, not on switch ON) */}
                <div
                  className={`promp_list ${isPromptActive ? "active" : ""}`}
                >
                  <div className="promp_list_item">
                    <img src="img/ai_promp_icon.svg" />
                    <div className="promp_list_text">
                      <span>You can try prompts like</span>
                      <p>
                        Music for a sixties heist movie, breathtaking underwater
                        exploration, wild west saloon brawl, post-apocalyptic
                        dystopia…
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navbar */}
          <button className="toggle_btn" onClick={toggleMenu}>
            <span className="menu_wrapper">
              <span className={`menu_text ${menuOpen ? "hide" : "show"}`}>
                Menu
              </span>
              <span className={`menu_text ${menuOpen ? "show" : "hide"}`}>
                Close
              </span>
            </span>
          </button>

          <div className="right_navbar">
            <ul>
              <ul>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown();
                    }}
                  >
                    Resources <img src="img/dropdwon.svg" alt="Dropdown" />
                  </a>
                  {isDropdownOpen && (
                    <ul className="dropdown">
                      <li>
                        <a href="#">How It Works</a>
                      </li>
                      <li>
                        <a href="#">Tips & Tricks</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
              <li className="free_trial">
                <a href="/">Start Free Trial</a>
              </li>

 <li >
                <a href="/subscription">Pricing</a>
              </li>
              <li>
                <a href="/login">Sign In</a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}
