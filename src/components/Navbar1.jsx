import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiPhoneCall } from "react-icons/fi";
import { CiLinkedin, CiAt } from "react-icons/ci";

const Navbar1 = () => {
  return (
    <nav className="bg-[#191D34] text-white px-4 sm:px-8 md:px-16 lg:px-24 relative">
      <div className="container py-2 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-0">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
          <div className="flex gap-2">
            <span className="flex items-center text-[#FE5C24]">
              <FiPhoneCall />
            </span>
            <span className="text-[.9rem]">+2332078763</span>
          </div>

          <div className="w-0.5 h-3 bg-slate-400 hidden sm:flex"></div>

          <div className="flex gap-2">
            <span className="flex items-center text-[#FE5C24]">
              <CiAt size={20} />
            </span>
            <span className="text-[.9rem]">info@example.com</span>
          </div>
        </div>

        <div className="mt-2 sm:mt-0">
          <div className="flex gap-2 cursor-pointer">
            <a
              href="https://www.facebook.com"
              className="hover:text-[#FE5C24] transition-all duration-500"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-[#FE5C24] transition-all duration-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              className="hover:text-[#FE5C24] transition-all duration-500"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-[#FE5C24] transition-all duration-500"
            >
              <CiLinkedin size={25} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
