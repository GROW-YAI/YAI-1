import React from "react";
import innovator from "../../../../assets/Innovator.webp";

const AboutInnovator = () => {
  return (
    <section className="bg-[#F7F7F7] px-6 md:px-12 py-12">
      <h2 className="text-3xl font-bold text-[#191D34] text-center mb-12">
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
        <div>
          <p className="text-lg text-gray-700">
          Samuel Ebo Ghunney, a visionary innovator from <strong>Winneba, Central Region,</strong> is the mastermind behind the <strong>Noghusam Cocoa Pod Breaking Machine</strong>. As a young innovator, he recognized the challenges faced by cocoa farmers in <strong>labor-intensive and time-consuming cocoa pod breaking and seed separation</strong>.
          </p>
          <p className="mt-4 text-lg text-gray-700">
          Driven by a passion for <strong>efficiency and sustainability</strong>, Samuel designed this groundbreaking machine to <strong>revolutionize cocoa farming</strong> by <strong>streamlining the harvesting process</strong>. His innovation not only <strong>boosts productivity</strong> but also significantly reduces <strong>manual labor</strong>, making cocoa processing faster, safer, and more effective for farmers.
          </p>
          <p className="mt-4 text-lg text-gray-700">Through his <strong>dedication</strong>, Samuel Ebo Ghunney is paving the way for a more <strong>technologically advanced</strong> future in cocoa farming.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;
