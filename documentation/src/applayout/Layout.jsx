import React from "react";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
