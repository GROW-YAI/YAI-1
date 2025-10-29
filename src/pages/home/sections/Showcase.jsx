import React from "react";


const Showcase = () => {
  return (
   <section className="px-6 py-12 container mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-16 mt-4">Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div  className="p-6 shadow-lg border border-slate-200  rounded-lg text-center hover:border-[#FE5C24] hover:scale-105 transition duration-500"> 
      <img src='https://res.cloudinary.com/dyt6piff4/image/upload/v1761725152/Machine1_wizqbg.jpg' alt="" />
    </div>
    <div  className="p-6 shadow-lg border border-slate-200  rounded-lg text-center hover:border-[#FE5C24] hover:scale-105 transition duration-500 ">
      <img src='https://res.cloudinary.com/dyt6piff4/image/upload/v1761725153/Machine2_cclgxa.jpg' alt="" />
    </div>
    <div  className="p-6 shadow-lg border border-slate-200  rounded-lg text-center hover:border-[#FE5C24] hover:scale-105 transition duration-500 "> 
      <img src='https://res.cloudinary.com/dyt6piff4/image/upload/v1761725152/Machine3_euhu1p.jpg' alt="" />
    </div>
    </div>
   </section>
  );
};

export default Showcase;
