import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { LoginPage } from "./Pages/AuthPages/LoginPage";
import {SignUpPage} from "./Pages/AuthPages/SignUpPage"


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element = {<LoginPage/>}/>
      <Route path="/signup" element = {<SignUpPage/>}/>
    </Routes>
  );
}

export default App;
