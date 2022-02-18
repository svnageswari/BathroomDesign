import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Mode from "./Mode";
import ARMode from "./Mode/ARMode";
import VRMode from "./Mode/VRMode";

function Body() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mode" element={<Mode />} exact />
        <Route path="/ar-mode" element={<ARMode />} exact />
        <Route path="/vr-mode" element={<VRMode />} exact />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Body;
