import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./Pages/LandingPage/LandingPage";
import Article from "./Pages/Article/Article";
import Youtube from "./Pages/Youtubevideo/Youtube";
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<LandingPage />} />  */}
      <Route path="/" element={<Article />} />
      {/* <Route path="/" element={<Youtube />} /> */}
    </Routes>
  );
}

export default App;
