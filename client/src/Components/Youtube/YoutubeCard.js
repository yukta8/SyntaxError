import React from "react";
import "./you.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";            

const YoutubeCard = ({ data }) => {
  return (
    <div className="tcard">
      <img src={data.img} alt="STC" className="tcard-img" />
      <div className="tcard-body">
        <div className="tcard-header">
          <h1 className="tcard-header-title">{data.name}</h1>
          <h4 className="tcard-header-por">{data.por}</h4>
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
