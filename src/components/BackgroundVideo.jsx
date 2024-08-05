import React from "react";
import "../styles/BackgroundVideo.css";
import logo from "../assets/images/logo-front.png";
import backgroundVideo from "../assets/video/ikaria_drone.mp4";

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img src={logo} alt="Logo" className="center-logo" />
    </div>
  );
};

export default BackgroundVideo;