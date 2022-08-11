import React from "react";
import whitelogo from "../../../static/images/whitelogo.png";
import WavesAnimation from "../Waves/WavesAnimation";
import "./Hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="content">
          <p>
            <img className="hero-whitelogo" src={whitelogo} alt="logo" />
          </p>
          <p>
            We are on a mission to re-invent the way you order your library
            books.
          </p>
        </div>
        <div className="wave-container">
          <WavesAnimation className="waves" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
