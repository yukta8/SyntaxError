import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { LoginPage } from "./Pages/AuthPages/LoginPage";
import {SignUpPage} from "./Pages/AuthPages/SignUpPage"
import Article from "./Pages/Article/Article";
import Twoopt from "./Pages/twooption/Twoopt";
import Youtube from "./Pages/Youtubevideo/Youtube";
import Research from "./Pages/Research/Research";
import Twoopt from "./Pages/twooption/Twoopt";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/search/:q" element={<Twoopt />} />
      <Route path="/yt/:q" element={<Youtube />} />
      <Route path="/article/:q" element={<Article />} />
       <Route path="/" element={<Research />} />
    </Routes>
  );
}

export default App;
