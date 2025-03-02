import React from "react";
import logo from "../../assets/NoghusamLogo.jpg";

const Navbar2 = () => {
  return (
    <nav className="bg-white px-6 sticky top-0 z-50 shadow-md">
      <div className="py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="h-12 rounded-4xl" />
          <h2 className="text-xl font-bold text-[#191D34]">NOGHUSAM</h2>
        </div>

        {/* ✅ Navigation Links */}
        <div className="bg-white">
          <ul className="flex gap-10 text-center p-4">
            <li>
              <a
                href="#home"
                className="hover:text-[#FE5C24] transition-all duration-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#FE5C24] transition-all duration-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#innovator"
                className="hover:text-[#FE5C24] transition-all duration-500"
              >
                Innovator
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="hover:text-[#FE5C24] transition-all duration-500"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-[#FE5C24] transition-all duration-500"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#FE5C24] transition-all duration-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
