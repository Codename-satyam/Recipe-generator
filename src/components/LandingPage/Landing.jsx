import React from "react";
import videobg from "../../Contents/videobg/back5.mp4";
import "./Landing.css";

export default function LandingPage({onStart,fadeOut}) {
    return (
        <div className={`landing-page ${fadeOut ? "fade-out" : ""}`}>
            <div className="main-line">
                <h1 className="fade-text">
                    C<span>o</span><span>o</span><span>k</span> <span>T</span><span>o</span><span>g</span><span>e</span><span>t</span><span>h</span><span>e</span><span>r</span>
                </h1>
                <div className="button" onClick={onStart}>
                    <p>Get Started</p>
                </div>
                <p className="sub-tag">
                    Instantly generate recipes and share your culinary journey with the world.
                </p>
            </div>
            <div className="background-video">
                <video src={videobg} autoPlay loop muted className="background-video">
                    <source src={videobg} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}
