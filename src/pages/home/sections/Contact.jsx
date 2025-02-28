import React from "react";

const Contact = () => {
  return (
    <section className="flex justify-center mt-12 mb-[-5rem] px-4 md:px-0">
      <div className="bg-[#FE5C24] p-6 md:p-12 flex flex-col md:flex-row gap-6 md:gap-[15rem] items-center w-full max-w-[80rem]">
        <div className="text-center md:text-left">
          <p className="text-4xl md:text-5xl text-white font-bold">
            Do you have a question?
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <div className="bg-white text-gray-700 w-full md:w-[15rem] h-[3rem] rounded-3xl p-3 flex items-center">
            <input 
              type="email" 
              placeholder="Enter email" 
              className="w-full outline-none bg-transparent"
            />
          </div>
          <button className="bg-[#191D34] text-white h-[3rem] w-full md:w-[10rem] rounded-3xl cursor-pointer">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
