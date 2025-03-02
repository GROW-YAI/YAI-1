import React from "react";
import CocoaHero from "../../../../assets/Cocoa2.jpg"; 
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <section 
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${CocoaHero})` }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#191D34]/50 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Revolutionizing Cocoa Processing
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-3xl font-semibold">
          Say goodbye to manual labor! Our cutting-edge Cocoa Pod Breaking Machine makes processing effortless, saving you time and effort.
        </p>
        <HashLink 
          smooth 
          to="/#products"
          className="mt-6 md:mt-8 bg-[#FE5C24] hover:bg-[#191D34] text-white px-5 md:px-6 py-2 md:py-3 rounded-full text-lg font-semibold transition duration-500"
        >
          Get Yours Today
        </HashLink>
      </div>
    </section>
  );
};

export default Hero;
