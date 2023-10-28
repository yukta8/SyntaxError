import React from "react";
import "./landing.css";
import background from "../../Assets/back1.jpg";
import min from "../../Assets/enterprise.gif";
import { FiSearch } from "react-icons/fi";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Twoopt from "../twooption/Twoopt";
import Youtube from "../Article/Article";
import Article from "../Youtubevideo/Youtube";

export const LandingPage = () => {
  return (
    <>
      {/* <div
        className="main"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="content">
          <h1>GAIN KNOWLEDGE</h1>
          <h3>Learn in a easy way</h3>
        </div>
        <div className="search">
          <div className="search-icon">
            <FiSearch />
          </div>
          <input className="search-input" placeholder="Search" />
        </div>{" "}
        <div className="min">
          <img src={min} />
        </div>
      </div>
      <Footer/>   */}
      {/* <Twoopt
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />   */}
      {/* <Youtube/> */}
    </>
  );
};
