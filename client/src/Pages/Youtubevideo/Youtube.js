import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageHeading from "../../Components/PageHeading/PageHeading";

import video from "../../Assets/aboutus.png";

import './youtube.css';
import YoutubeCard from "../../Components/Youtube/YoutubeCard";

const Youtube = () => {
  
  const teamData = [
    {
      id: 1,
      img: video,
      name: "title",
      por: "one hashtag",

      linkedIn: "",
      instagram: "",
    },
    {
      id: 2,
      img: video,
      name: "title",
      por: "one hashtag",

      linkedIn: "",
      instagram: "",
    },
    {
      id: 3,
      img: video,
      name: "title",
      por: "one hashtag",

      linkedIn: "",
      instagram: "",
    },
    {
      id: 4,
      img: video,
      name: "title",
      por: "one hashtag",

      linkedIn: "",
      instagram: "",
    },
    {
      id: 6,
      img: video,
      name: "title",
      por: "one hashtag",

      linkedIn: "",
      instagram: "",
    },
    {
      id: 5,
      img: video,
      name: "title",
      por: "one hashtag",
      
      linkedIn: "",
      instagram: "",
    },
  ];
  return (
    <>
      <div className="page">
        <Navbar />
        <div className="heading-section">
          <PageHeading title="Youtube videos" subTitle="top videos for you" />
         
        </div>
        <div className="card-grid">
          {teamData.map((video, id) => {
            
              return <YoutubeCard key={id} data={video} />;
            
          })}
        </div>
      </div>
     
    </>
  );
};

export default Youtube;
