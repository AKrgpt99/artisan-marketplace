import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <Router>
      <div className="bg-slate-800">
        <Navbar />
        <Routes>{children}</Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default Layout;
