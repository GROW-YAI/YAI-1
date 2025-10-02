import { CiAt, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook, FiPhoneCall } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";

const Navbar1 = () => {
  return (
    <nav className="bg-[#191D34] text-white px-4">
      <div className="py-2 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side Contact Info */}
        <div className="flex flex-col md:flex-row gap-2 text-center md:text-left items-center">
          {/* Phone */}
          <div className="flex items-center gap-2 text-[#FE5C24]">
            <FiPhoneCall className="text-lg" aria-label="Phone" />
            <a
              href="tel:+233546837202"
              className="text-[.9rem] hover:underline hover:text-[#d94a1d] transition-colors text-white"
            >
              +233 54 683 7202
            </a>
          </div>

          {/* Divider (only visible on md+) */}
          <div className="hidden md:block w-0.5 h-5 bg-slate-400"></div>

          {/* Email */}
          <div className="flex items-center gap-2 text-[#FE5C24]">
            <CiAt size={20} aria-label="Email" />
            <a
              href="mailto:creativewarriormetalworks@gmail.com"
              className="text-[.9rem] hover:underline hover:text-[#d94a1d] transition-colors text-white"
            >
              creativewarriormetalworks@gmail.com
            </a>
          </div>
        </div>

        {/* Right Side Social Icons */}
        <div className="mt-2">
          <div className="flex gap-2 cursor-pointer justify-center md:justify-end">
            <a
              href="https://www.facebook.com/cwmcl/"
              className="hover:text-[#FE5C24] transition-all duration-500"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/creativewarriormetalcompany/"
              className="hover:text-[#FE5C24] transition-all duration-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@user5228350683083?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#FE5C24] transition-all duration-500"
            >
              <SiTiktok size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/creative-warrior-metal-company/"
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
