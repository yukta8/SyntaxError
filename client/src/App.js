import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { LandingPage } from "./Pages/LandingPage/LandingPage";

import Article from "./Pages/Article/Article";
import Twoopt from "./Pages/twooption/Twoopt";
import Youtube from "./Pages/Youtubevideo/Youtube";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/search/:q" element={<Twoopt/>} />
      <Route path="/article/:q" element={<Article />} />
      <Route path="/yt/:q" element={<Youtube />} />
      {/* <Route path="/" element={<LandingPage />} /> */}
      {/* <Route path="/login" element = {<LoginPage/>}/> */}
    </Routes>
  );
}

export default App;
