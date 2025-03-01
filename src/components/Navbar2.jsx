import React, { useState } from "react";
import logo from "../../assets/NoghusamLogo.jpg";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu
import { HashLink } from "react-router-hash-link";

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Manage menu state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust based on navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="h-12 rounded-4xl" />
          <h2 className="text-xl font-bold text-[#191D34]">NOGHUSAM</h2>
        </div>

        {/* ✅ Hamburger Icon (Hidden on lg and larger screens) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* ✅ Navigation Links */}
        <div
          className={`absolute lg:static top-14 left-0 w-full lg:w-auto bg-white lg:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } lg:flex`}
        >
          <ul className="flex flex-col sm:flex-row gap-4 text-center p-4">
            <li>
              <HashLink smooth to="#home">Home</HashLink>
            </li>
            <li>
              <HashLink smooth to="#about">About</HashLink>
            </li>
            <li>
              <HashLink smooth to="#innovator">Innovator</HashLink>
            </li>
            <li>
              <HashLink smooth to="#products">Products</HashLink>
            </li>
            <li>
              <HashLink smooth to="#testimonials">Testimonials</HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact">Contact</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
