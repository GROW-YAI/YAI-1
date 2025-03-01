import React, { useState } from "react";
import logo from "../../assets/NoghusamLogo.jpg";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu
import { HashLink } from "react-router-hash-link";

// ✅ Place smoothScrollTo function here, outside the component
const smoothScrollTo = (target) => {
  const start = window.pageYOffset;
  const end = target.getBoundingClientRect().top + window.pageYOffset - 70; // Offset for navbar
  const duration = 1000; // Adjust speed (in milliseconds)
  let startTime = null;

  function animationStep(timestamp) {
    if (!startTime) startTime = timestamp;
    const timeElapsed = timestamp - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Easing function (easeInOutQuad)
    const easeInOutQuad =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(0, start + (end - start) * easeInOutQuad);

    if (timeElapsed < duration) {
      requestAnimationFrame(animationStep);
    }
  }

  requestAnimationFrame(animationStep);
};

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Manage menu state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollWithSmoothEffect = (el) => {
    if (el) smoothScrollTo(el);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value based on your navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav className="bg-white pt-2 px-4 sm:px-8 md:px-16 lg:px-24 sticky top-0 z-50 shadow-md">
      <div className="container py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="h-12 rounded-4xl" />
          <h2 className="text-xl font-bold text-[#191D34]">NOGHUSAM</h2>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute sm:static top-14 left-0 w-full sm:w-auto bg-white sm:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } sm:flex`}
        >
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-14 text-center p-4 sm:p-0">
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <HashLink smooth to="#home" scroll={scrollWithOffset}>
                Home
              </HashLink>
            </li>
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <HashLink smooth to="#about" scroll={scrollWithOffset}>
                About
              </HashLink>
            </li>
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <HashLink smooth to="#innovator" scroll={scrollWithOffset}>
                Innovator
              </HashLink>
            </li>
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <HashLink smooth to="#products" scroll={scrollWithOffset}>
                Products
              </HashLink>
            </li>
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <HashLink smooth to="#testimonials" scroll={scrollWithOffset}>
                Testimonials
              </HashLink>
            </li>
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <HashLink smooth to="#contact" scroll={scrollWithOffset}>
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
