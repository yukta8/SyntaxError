import React from "react";
import "./arti.css";
import { NavLink } from "react-router-dom";

const ArticleCard = ({ data }) => {
  return (
    <NavLink to={data.link} style={{ textDecoration: "none" }}>
      <div className="ecard">
        <div className="ecard-group-name">{data.group}</div>
        <div className="ecard-title">{data.title}</div>
        <div className="ecard-date">Date: {data.date}</div>
        <p className="ecard-para">{data.link}</p>
        <div className="ecard-btm">
          <img src={data.pocImg} alt="" className="ecard-btm-img" />
          <div className="ecard-btm-flex">
            <div className="ecard-btm-name">{data.pocName}</div>
            <div className="ecard-btm-contact">{data.pocContact}</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ArticleCard;