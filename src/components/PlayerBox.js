"use client";

import { useState, useEffect } from "react";
import VolumeSlider from "./VolumeSlider";

export default function PlayerBox() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (

        <>

            <div className="player_list_main_bottom">


                <div className="music_track_list">
                   <div className="music_track">
                     <img src="/img/tracklist_img.png" alt="" />
                    <div className="music_name">
                        <h6>Sunset</h6>
                        <span>Dua Lipa</span>
                    </div>
                   </div>

                    <div className="music_song_min" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span>2:05</span>
                        <div className="progress" style={{ flex: 1, height: "6px", background: "#ddd", borderRadius: "3px" }}>
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                    width: `${progress}%`,
                                    background: "#17DCF5",
                                    transition: "width 0.3s",
                                    borderRadius: "3px"
                                }}
                            ></div>
                        </div>
                        <span>3:50</span>
                    </div>

                    <div className="icon_player">
                           <img src="/img/icon_play01.svg" />
                           <img src="/img/icon_play02.svg" />
                           <img src="/img/icon_play03.svg" />
                           <img src="/img/icon_play04.svg" />
                           <img src="/img/icon_play05.svg" />
                    </div>

                    <div>
                         <VolumeSlider />
                    </div>

                </div>

            </div>


        </>


    );
}
