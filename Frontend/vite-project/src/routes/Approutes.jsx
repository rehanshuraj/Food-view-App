import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserRegister from "../htmls/UserRegister";
import UserLogin from "../htmls/UserLogin";
import PartnerRegister from "../htmls/PartnerRegister";  // ✅ correct name
import PartnerLogin from "../htmls/PartnerLogin";        // ✅ correct name

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/partner/register" element={<PartnerRegister />} />
        <Route path="/partner/login" element={<PartnerLogin />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
