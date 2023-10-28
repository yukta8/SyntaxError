import React from "react";
import "./option.css";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const Optioncard = ({ data }) => {
  return (
    <div className="gcard">
      <div className="gcard-top">
        <h2>{data.name}</h2>
      
      </div>
      <div className="gcard-mid">
        <p>{data.desc}</p>
        <a
          href={data.notion}
          target="_blank"
          rel="noreferrer"
          className="gcard-link-flex"
        >
          <span className="gcard-link">Resources</span>
          <span className="gcard-link-icon">
            <FiArrowUpRight />
          </span>
        </a>
      </div>
      <div className="gcard-bottom">
        <a href={data.linkedIn} target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
        <a href={data.instagram} target="_blank" rel="noreferrer">
          <AiOutlineInstagram />
        </a>
        <a href={data.github} target="_blank" rel="noreferrer">
          <FaGithubSquare />
        </a>
        <a href={data.website} target="_blank" rel="noreferrer">
          <BsGlobe />
        </a>
        <a href={data.facebook} target="_blank" rel="noreferrer">
          <AiFillFacebook />
        </a>
      </div>
    </div>
  );
};

export default Optioncard;
