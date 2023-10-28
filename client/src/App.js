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
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element = {<LoginPage/>}/>
    </Routes>
  );
}

export default App;
