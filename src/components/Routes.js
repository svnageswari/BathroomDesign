import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Mode from "./Mode";
import ARMode from "./Mode/ARMode";
import VRMode from "./Mode/VRMode";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mode />} />
        <Route path="/ar-mode" element={<ARMode />} exact />
        <Route path="/vr-mode" element={<VRMode />} exact />
        <Route path="/*" element={<Mode />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
