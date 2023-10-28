import React from "react";
import "./you.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai"; 
import video from "../../Assets/aboutus.png";  
import { Link, NavLink } from "react-router-dom";         

const YoutubeCard = ({ data }) => {
  if (!data || !data.title) {
    return null;
  }
  return (
      <div className="tcard">
      <img src={data.photo} alt="STC" className="tcard-img" />
      <div className="tcard-body">
        <div className="tcard-header">
          <h1 className="tcard-header-title">{data.title.substring(0,25)}..</h1>
          <Link to={data.link} className="tcard-header-por">{data.link}</Link>
        </div>
        <div className="tcard-links">
          <a
            href={data.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="tcard-link"
          >
            <AiFillLinkedin />
          </a>
          <a
            href={data.instagram}
            target="_blank"
            rel="noreferrer"
            className="tcard-link"
          >
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCard;
