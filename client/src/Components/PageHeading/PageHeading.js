import React from "react";
import "./page.css";

const PageHeading = ({ title, subTitle }) => {
  return (
    <div className="heading-flex">
      <h1 className="title">{title}</h1>
      <h3 className="sub-title">{subTitle}</h3>
    </div>
  );
};

export default PageHeading;