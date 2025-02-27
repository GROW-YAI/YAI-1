import React from "react";
import innovator from "../../../../assets/Innovator.webp";

const AboutInnovator = () => {
  return (
    <section className="bg-[#F7F7F7] px-6 md:px-12 py-12">
      <h2 className="text-3xl font-bold text-[#191D34] text-center mb-16">
        About the Innovator
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
        <div className="w-[30rem] border-1 border-[#FE5C24] rounded-3xl">
          <img
            className="h-[30rem] w-[30rem] p-4 rounded-lg"
            src={innovator}
            alt="Innovator"
          />
        </div>
        <div className="mt-[-10rem]">
          <p className="text-lg text-gray-700">
            Samuel Ebo Ghunney, an innovator from Winneba, Central Region, developed the 
            <strong> Noghusam Cocoa Pod Breaking Machine</strong> to tackle the 
            <strong> labor-intensive and time-consuming</strong> process of cocoa pod breaking.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            His innovation <strong>boosts efficiency, reduces manual labor, and enhances productivity</strong> 
            in cocoa farming, while also contributing to <strong>sustainability and economic growth</strong> in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;
