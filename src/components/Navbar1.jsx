import { CiAt, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook, FiPhoneCall, FiTwitter } from "react-icons/fi";

const Navbar1 = () => {
  return (
    <nav className="bg-[#191D34] text-white px-4">
      <div className="py-2 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side Contact Info */}
        <div className="flex flex-col md:flex-row gap-2 text-center md:text-left items-center">
          <div className="flex gap-2">
            <span className="flex items-center text-[#FE5C24]">
              <FiPhoneCall />
            </span>
            <span className="text-[.9rem]">+233123456789</span>
          </div>
          <div className="hidden md:block w-0.5 h-5 bg-slate-400"></div>
          <div className="flex gap-2">
            <span className="flex items-center text-[#FE5C24]">
              <CiAt size={20} />
            </span>
            <span className="text-[.9rem]">info@example.com</span>
          </div>
        </div>

        {/* Right Side Social Icons */}
        <div className="mt-2">
          <div className="flex gap-2 cursor-pointer justify-center md:justify-end">
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
