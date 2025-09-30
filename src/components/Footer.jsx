import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/NoghusamLogo.jpg";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiGlobe, CiLocationOn } from "react-icons/ci";
import { MdPhoneAndroid, MdMailOutline } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-gradient-to-br from-[#0b1220] to-[#191D34] text-gray-300"
    >
      <div className="max-w-7xl  mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Noghusam logo"
                className="h-14 w-14 object-contain rounded-md"
                loading="lazy"
              />
              <div>
                <h3 className="text-white text-lg font-semibold">NOGHUSAM</h3>
                <p className="text-sm text-gray-400">
                  Cocoa processing equipment for efficient farms.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              The Noghusam Cocoa Pod Breaking Machine improves efficiency,
              productivity and sustainability — designed for both smallholder
              and commercial processors.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h4 className="text-white font-semibold mb-4">Quick links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/#home"
                  smooth
                  className="hover:text-[#FE5C24] transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  smooth
                  className="hover:text-[#FE5C24] transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/#innovator"
                  smooth
                  className="hover:text-[#FE5C24] transition-all duration-300"
                >
                  Innovator
                </Link>
              </li>
              <li>
                <Link
                  to="/#products"
                  smooth
                  className="hover:text-[#FE5C24] transition-all duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/#testimonials"
                  smooth
                  className="hover:text-[#FE5C24] transition-all duration-300"
                >
                  Testimonials
                </Link>
              </li>
            
            </ul>
          </nav>

          {/* Contact info & socials */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <address className="not-italic text-sm space-y-3">
              <div className="flex items-start gap-3">
                <CiLocationOn aria-hidden size={20} className="mt-1" />
                <div>
                  <span className="block">Winneba, Central Region</span>
                  <span className="block">Ghana</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MdPhoneAndroid aria-hidden size={18} />
                <a
                  href="tel:+233123456789"
                  className="hover:text-[#FE5C24] transition focus:outline-none focus:ring-2 focus:ring-[#FE5C24] rounded"
                >
                  +233 123 456 789
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MdMailOutline aria-hidden size={18} />
                <a
                  href="mailto:info@noghusam.com.gh"
                  className="hover:text-[#FE5C24] transition focus:outline-none focus:ring-2 focus:ring-[#FE5C24] rounded"
                >
                  info@noghusam.com.gh
                </a>
              </div>

              <div className="flex items-center gap-3">
                <CiGlobe aria-hidden size={18} />
                <a
                  href="https://noghusam.com.gh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FE5C24] transition focus:outline-none focus:ring-2 focus:ring-[#FE5C24] rounded"
                >
                  noghusam.com.gh
                </a>
              </div>
            </address>

            <div className="mt-6">
              <h5 className="text-sm text-white font-semibold mb-2">
                Follow us
              </h5>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-full bg-[#0b1220] hover:bg-[#FE5C24] transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FE5C24]"
                >
                  <FiFacebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-full bg-[#0b1220] hover:bg-[#FE5C24] transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FE5C24]"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="p-2 rounded-full bg-[#0b1220] hover:bg-[#FE5C24] transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FE5C24]"
                >
                  <FiTwitter size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full bg-[#0b1220] hover:bg-[#FE5C24] transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FE5C24]"
                >
                  <CiLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {year} Noghusam. All rights reserved.
          </p>
          <div className="text-sm text-gray-400">
            <a
              href="/privacy"
              className="mr-4 hover:text-[#FE5C24] focus:outline-none focus:ring-2 focus:ring-[#FE5C24] rounded"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-[#FE5C24] focus:outline-none focus:ring-2 focus:ring-[#FE5C24] rounded"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;