import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { LoginPage } from "./Pages/AuthPages/LoginPage";
import {SignUpPage} from "./Pages/AuthPages/SignUpPage"
import Article from "./Pages/Article/Article";
import Twoopt from "./Pages/twooption/Twoopt";
import Youtube from "./Pages/Youtubevideo/Youtube";
import Research from "./Pages/Research/Research";
import { DiscussionForumPage } from "./Pages/DiscussionForumPage/DiscussionForumPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element = {<LoginPage/>}/>
      <Route path="/signup" element = {<SignUpPage/>}/>
      <Route path="/search/:q" element={<Twoopt/>}/>
      <Route path="/yt/:q" element={<Youtube/>}/>
      <Route path="/article/:q" element={<Article/>}/>
      <Route path="/research/:q" element={<Research/>}/>
      <Route path="/discussionforum" element={<DiscussionForumPage/>}/>
    </Routes>
  );
}

export default App;
