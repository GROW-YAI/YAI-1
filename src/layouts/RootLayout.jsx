import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";

const RootLayout = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar1 />
        <Navbar2 />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
