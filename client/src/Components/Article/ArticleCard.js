import React from "react";
import "./arti.css";
import { NavLink } from "react-router-dom";

const ArticleCard = ({ data }) => {
  if (!data || !data.description) {
    return null;
  }
  return (
    
      <div className="ecard">
        <div className="ecard-group-name">{data.group}</div>
        <div className="ecard-title">{data.title}</div>
        <div className="ecard-date">Credits: {data.website ||data.publication}</div>
        <p className="ecard-para">{data.description.substring(0,200 )}</p>
        <p className="ecard-para">{data.link}</p>
        <div className="ecard-btm" id="btmcard">
         
         <NavLink to={data.link} style={{ textDecoration: "none" }}><button id="read">Read</button></NavLink> 
          <div className="ecard-btm-flex">
            <div className="ecard-btm-name">{data.pocName}</div>
            <div className="ecard-btm-contact">{data.pocContact}</div>
          </div>
        </div>
      </div>
   
  );
};

export default ArticleCard;