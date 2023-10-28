import React, { useState } from "react";
import "./landing.css";
import background from "../../Assets/back1.jpg";
import min from "../../Assets/enterprise.gif";
import { FiSearch } from "react-icons/fi";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Twoopt from "../twooption/Twoopt";
// import Youtube from "../Article/Article";
// import Article from "../Youtubevideo/Youtube";

export const LandingPage = () => {
  const [val, setVal] = useState("Search...");
  const navigate = useNavigate();
  const handleSearch = async () => {
    const a = val.split(" ").join("-");
    setVal(a);
    // console.log(val);
    // history.push(`/search/${val}`);
    navigate(`/search/${val}`);
    const { data } = await axios.get("/api/youtubeLinks/Einstein");
    console.log(data)
  };
  return (
    <>
      <div
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
            <FiSearch onClick={handleSearch} />
          </div>
          <input
            className="search-input"
            placeholder={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>{" "}
        <div className="min">
          <img src={min} />
        </div>
      </div>
      <Footer />
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
