import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { LandingPage } from "./Pages/LandingPage/LandingPage";

import Article from "./Pages/Article/Article";
import Youtube from "./Pages/Youtubevideo/Youtube";
import Research from "./Pages/Research/Research";
import Twoopt from "./Pages/twooption/Twoopt";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<LandingPage />} />   */}
      {/* <Route path="/" element={<Twoopt />} /> */}
    <Route path="/" element={<Article />} /> 
      {/* <Route path="/" element={<Youtube />} />   */}
      {/* <Route path="/" element={<LandingPage />} /> */}
      {/* <Route path="/login" element = {<LoginPage/>}/> */}
      {/* <Route path="/" element={<Research />} />  */}
    </Routes>
  );
}

export default App;
