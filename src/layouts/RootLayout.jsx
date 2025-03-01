import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";

const RootLayout = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar1 />
      <Navbar2 />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default RootLayout;
