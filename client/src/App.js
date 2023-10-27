import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element = {<LoginPage/>}/>
    </Routes>
  );
}

export default App;
