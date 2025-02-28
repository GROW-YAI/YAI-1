import React from "react";
import logo from "../../assets/NoghusamLogo.jpg";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdPhoneAndroid } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <section className="bg-[#191D34] text-gray-400 p-6 md:p-12 pt-[10rem]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[8rem]">
        <div>
          <div className="flex gap-2 items-center text-white mb-10">
            <img src={logo} alt="logo" className="h-16" />
            <h2 className="text-xl font-bold">NOGHUSAM</h2>
          </div>
          <p>
            The Noghusam Cocoa Pod Breaking Machine is a revolutionary solution
            designed to enhance the efficiency, productivity, and sustainability
            of cocoa processing. Here are four major benefits that make it an
            essential tool for cocoa farmers and processors.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-10">SOCIALS</h2>
          <ul className="gap-4 cursor-pointer flex flex-col items-center">
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <FiFacebook size={20} />
            </li>
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <FaInstagram size={20} />
            </li>
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <FiTwitter size={20} />
            </li>
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <CiLinkedin size={25} />
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white mb-10">CONTACT INFO</h2>
          <div className="flex gap-2 hover:text-[#FE5C24] transition-all duration-500">
            <CiLocationOn size={25} className="self-center" />
            <div>
              <p>Winneba, Central Region</p>
              <p>Ghana</p>
            </div>
          </div>
          <div className="flex gap-4 hover:text-[#FE5C24] transition-all duration-500">
            <MdPhoneAndroid size={20} />
            <p>+233242078763</p>
          </div>
          <div className="flex gap-4 hover:text-[#FE5C24] transition-all duration-500">
            <MdMailOutline size={20} />
            <p>info@example.com</p>
          </div>
          <div className="flex gap-4 hover:text-[#FE5C24] transition-all duration-500">
            <CiGlobe size={20} />
            <p>noghusam.netlify.app</p>
          </div>
        </div>
      </div>

      <div>
        <hr className="w-full md:w-[78rem] mt-10 mx-auto" />
      </div>

      <div className="flex justify-center items-center mt-5 text-center">
        <p>Copyright &copy; 2025 All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
