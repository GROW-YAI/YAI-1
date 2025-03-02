import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle
import logo from "../../assets/NoghusamLogo.jpg";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white px-6 sticky top-0 z-50 shadow-md">
      <div className="py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="h-12 rounded-4xl" />
          <h2 className="text-xl font-bold text-[#191D34]">NOGHUSAM</h2>
        </div>

        {/* Hamburger Menu Button (Visible on Small Screens) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-[#191D34] focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`bg-white md:block absolute md:static top-16 left-0 w-full md:w-auto md:bg-transparent transition-all duration-300 ${
            isOpen ? "block shadow-lg" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-center p-4 md:p-0">
            <li>
              <Link
                to="/#home"
                smooth
                className="cursor-pointer hover:text-[#FE5C24] transition-all duration-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#about"
                smooth
                className="cursor-pointer hover:text-[#FE5C24] transition-all duration-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#innovator"
                smooth
                className="cursor-pointer hover:text-[#FE5C24] transition-all duration-500"
                onClick={() => setIsOpen(false)}
              >
                Innovator
              </Link>
            </li>
            <li>
              <Link
                to="/#products"
                smooth
                className="cursor-pointer hover:text-[#FE5C24] transition-all duration-500"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/#testimonials"
                smooth
                className="cursor-pointer hover:text-[#FE5C24] transition-all duration-500"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                smooth
                className="cursor-pointer hover:text-[#FE5C24] transition-all duration-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
