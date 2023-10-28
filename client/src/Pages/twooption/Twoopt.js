import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";
import Optioncard from "../../Components/Optioncard/Optioncard";

import { FiSearch } from "react-icons/fi";
import Footer from "../../Components/Footer/Footer";
import { useState, useEffect } from "react";
import "./twoopt.css";

const Twoopt = () => {



  



  const groupData = [
    {
      id: 1,

      name: "On surface level",
      desc: "How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?",
      notion: "",
      linkedIn: "https://www.linkedin.com/in/rishabh-gupta-35224324b/",
      instagram: "",
      github: "",
      website: "",
      facebook: "",
    },
    {
      id: 2,

      name: "Deep Knowldege",
      desc: "How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?How do you create compelling presentations that wow your colleagues and impress your managers?",
      notion: "",
      linkedIn: "",
      instagram: "",
      github: "",
      website: "",
      facebook: "",
    },
  ];


  /*return <ChildComponent isMediaQueryMatched={isMediaQueryMatched} />;*/
  return (
    <>
      {/* <GroupCard isMediaQueryMatched={isMediaQueryMatched} /> */}
      <div className="page">
        <Navbar /> 
        <div className="heading-section">
          <PageHeading
            title="What do you want to learn"
            subTitle="choose between two"
          />
          
        </div>
        <div className="card-grid">
          {groupData.map((group, id) => {
            return (
              <Optioncard
                key={id}
                data={group}
               
              />
            );
          })}
        </div>
      </div>
     
    </>
  );
};

export default Twoopt;
