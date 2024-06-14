import "./Footer.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem " }} />
            <div>
              <p>Francuske revolucije bb </p>
              <p>Ilidža 71210</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem " }}
              />
              033-225-883
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem " }}
              />
              farukcurevac@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>My social medias</h4>
          <p>
            You can find me on social medias. I post my work there, and all the
            informations about future projects.
          </p>
          <div className="social">
            <FaInstagram
              size={30}
              style={{ color: "#fff", marginRight: "1rem " }}
            />
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem " }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem " }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
