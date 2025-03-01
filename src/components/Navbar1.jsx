import { CiAt, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook, FiPhoneCall, FiTwitter } from "react-icons/fi";

const Navbar1 = () => {
  return (
    <nav className="bg-[#191D34] text-white px-4">
      <div className="py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-col sm:flex-row gap-2">
          <span className="flex items-center text-[#FE5C24]">
            <FiPhoneCall />
          </span>
          <span className="text-[.9rem]">+2332078763</span>
          <div className="w-0.5 h-3 bg-slate-400 hidden sm:block"></div>
          <span className="flex items-center text-[#FE5C24]">
            <CiAt size={20} />
          </span>
          <span className="text-[.9rem]">info@example.com</span>
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
