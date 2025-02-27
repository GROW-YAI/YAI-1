import React from "react";
import machine1 from '../../../../assets/Machine1.avif'
import machine2 from '../../../../assets/Machine2.jpg'
import machine3 from '../../../../assets/Machine3.jpg'

const Showcase = () => {
  return (
   <section className="px-6 py-12 container mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-16 mt-4">Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div  className="p-6 shadow-lg border border-slate-200  rounded-lg text-center hover:border-[#FE5C24] hover:scale-105 transition duration-500"> 
      <img src={machine1} alt="" />
    </div>
    <div  className="p-6 shadow-lg border border-slate-200  rounded-lg text-center hover:border-[#FE5C24] hover:scale-105 transition duration-500 ">
      <img src={machine2} alt="" />
    </div>
    <div  className="p-6 shadow-lg border border-slate-200  rounded-lg text-center hover:border-[#FE5C24] hover:scale-105 transition duration-500 "> 
      <img src={machine3} alt="" />
    </div>
    </div>
   </section>
  );
};

export default Showcase;
