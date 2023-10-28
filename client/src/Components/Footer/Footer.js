import React from "react";
import "./footer.css";
import arrow from "../../Assets/arrow.svg";
import bottomGraphic from "../../Assets/back.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src={bottomGraphic}
        alt="Graphic"
        className="bottom-graphic non-draggable"
      />
      <div className="footer-content">
        <h1 className="footer-title">
          Brought to you by
          <br />
          Youths
        </h1>
        <div className="footer-flex">
          <div className="footer-address">
            <span className="footer-sub-text">.Gitignore</span>
            <span className="footer-sub-text">Team Name</span>
            <span className="footer-sub-text">IIT Roorkee</span>
            <span className="footer-sub-text">
              Roorkee, Uttarakhand - 247667
            </span>
          </div>
          <div className="footer-contact">
            <div className="footer-contact-flex">
              <img
                src={arrow}
                className="footer-contact-flex-icon non-draggable"
                alt="#"
              />
              <a
                href="mailto:huda_s@me.iitr.ac.in"
                className="footer-sub-text"
              >
                huda_s@me.iitr.ac.in
              </a>
            </div>
            <div className="footer-contact-flex">
              <img
                src={arrow}
                className="footer-contact-flex-icon non-draggable"
                alt="#"
              />
              <div className="footer-sub-text">
                xyz : 123456789
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
