import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/viber_image_2024-06-14_02-08-40-711.jpg";

import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="maturska" />
      </div>
      <div className="content">
        <p>Hello, I'm Faruk.</p>
        <h1>Burch Student</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
