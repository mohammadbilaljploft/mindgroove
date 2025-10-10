"use client";
import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function Header() {
    // Track which section is open: 'search', 'similar', 'ask', or null
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection((prev) => (prev === section ? null : section));
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Add or remove class on body when sidebar state changes
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add("sidebar-open");
        } else {
            document.body.classList.remove("sidebar-open");
        }
    }, [isSidebarOpen]);


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Add/remove class on <body> when menuOpen changes
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
    }, [menuOpen]);

    return (
        <div className="header_sec">
            <button className="crose_sidebar" onClick={() => setIsSidebarOpen(false)}>
                X
            </button>
            <Container>
                <div className="header_inner">
                    <div className="left_navbar">
                        <div className="sidebar_toggle">
                            <button className="sidebar_open" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                <img src="/img/sidebar_toggle.svg" alt="Toggle Sidebar" />
                            </button>

                        </div>

                        <div className="search_box">
                            {/* Search Input */}
                            <div className="search_filed">
                                <input
                                    type="text"
                                    placeholder="Search music by keywords, phrases, add a link, or upload an audio file"
                                    onClick={() => toggleSection("search")}
                                />
                                <div
                                    className={`search_itm_list ${activeSection === "search" ? "active" : ""
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
                                            <p>X-Series, Hype Music, Directors Cuts, Two Steps From Hell</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* Similar Search */}
                            <div className="upload_dropdown_box">
                                <button
                                    className="upload_btn"
                                    onClick={() => toggleSection("similar")}
                                >
                                    <img src="/img/upload_icon.svg" alt="upload" />
                                </button>

                                <div
                                    className={`similar_search ${activeSection === "similar" ? "active" : ""
                                        }`}
                                >
                                    <h3>Similar Search</h3>
                                    <div className="upload_field">
                                        <input type="file" />
                                        <div className="upload_icon_bx">
                                            <img src="/img/upload_file.svg" alt="" />
                                            <h6>Upload audio or video files for similar search</h6>
                                        </div>
                                    </div>
                                    <div className="option_or">
                                        <span></span>
                                        <p>Or</p>
                                        <span></span>
                                    </div>

                                    <div className="similar_input_field">
                                        <input type="text" placeholder="URL from platforms like YouTube or Spotify or TikTok" />
                                    </div>

                                </div>
                            </div>



                            {/* Ask Me Anything Switch */}
                            <div className="switch_ask_anything">
                                <span>Ask Me Anything</span>
                                <div className="d-flex align-items-center gap-2">
                                    <div
                                        onClick={() => toggleSection("ask")}
                                        style={{
                                            width: "50px",
                                            height: "25px",
                                            borderRadius: "25px",
                                            background: activeSection === "ask" ? "#17DCF5" : "#ccc",
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

                                <div
                                    className={`promp_list ${activeSection === "ask" ? "active" : ""
                                        }`}
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

                    <button className="toggle_btn" onClick={toggleMenu}>
                        <span className="menu_wrapper">
                            <span className={`menu_text ${menuOpen ? "hide" : "show"}`}>Menu</span>
                            <span className={`menu_text ${menuOpen ? "show" : "hide"}`}>Close</span>
                        </span>
                    </button>

                    <div className="right_navbar">
                        <ul>
                            <li>
                                <a href="">Discover</a>
                            </li>
                            <li>
                                <a href="/search">Playlists</a>
                            </li>
                            <li>
                                <a href="">Favorites</a>
                            </li>
                            <li>
                                <a href="">My Mixes</a>
                            </li>
                            <li>
                                <a href="">Pricing</a>
                            </li>
                            <li>
                                <a href="/login">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
}
