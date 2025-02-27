import { FaStopwatch, FaBullseye, FaUsers, FaLeaf } from "react-icons/fa"; // Import icons

const AboutProduct = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
           Noghusam Cocoa Pod Breaking Machine
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          The Noghusam Cocoa Pod Breaking Machine is a revolutionary solution
          designed to enhance the efficiency, productivity, and sustainability
          of cocoa processing. Here are four major benefits that make it an
          essential tool for cocoa farmers and processors:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1: Increased Efficiency */}
          <div className="p-6 shadow-lg border border-slate-200  rounded-lg text-center hover:border-[#FE5C24] transition duration-500">
            <div className="flex justify-center mb-6">
              <FaStopwatch className="text-orange-500 text-5xl" />
            </div>
            <div className="flex justify-center items-center mb-6">
            <hr className="border-1 border-[#FE5C24] w-10 "/>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              INCREASED EFFICIENCY & FASTER PROCESSING
            </h3>
            <p className="text-gray-600 mt-2">
              Automates cocoa pod breaking, drastically reducing processing time
              and allowing farmers to handle larger harvests quickly.
            </p>
          </div>

          {/* Feature 2: High Precision */}
          <div className="p-6 shadow-lg border border-slate-200 rounded-lg text-center hover:border-[#FE5C24] transition duration-500">
            <div className="flex justify-center mb-6">
              <FaBullseye className="text-orange-500 text-5xl" />
            </div>
            <div className="flex justify-center items-center mb-4">
            <hr className="border-1 border-[#FE5C24] w-10 "/>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              HIGH PRECISION & REDUCED BEAN DAMAGE
            </h3>
            <p className="text-gray-600 mt-2 ">
              Precision cutting mechanisms separate beans without crushing them,
              ensuring better quality for fermentation and drying.
            </p>
          </div>

          {/* Feature 3: Reduced Labor Costs */}
          <div className="p-6 shadow-lg border border-slate-200 rounded-lg text-center hover:border-[#FE5C24] transition duration-500">
            <div className="flex justify-center mb-6">
              <FaUsers className="text-orange-500 text-5xl" />
            </div>
            <div className="flex justify-center items-center mb-4">
            <hr className="border-1 border-[#FE5C24] w-10 "/>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              REDUCED LABOR COSTS & PHYSICAL STRAIN
            </h3>
            <p className="text-gray-600 mt-2">
              Minimizes manual labor, reducing fatigue and injuries while
              cutting operational costs for large-scale cocoa farms.
            </p>
          </div>

          {/* Feature 4: Durable and Eco-Friendly */}
          <div className="p-6 shadow-lg border border-slate-200 rounded-lg text-center hover:border-[#FE5C24] transition duration-500">
            <div className="flex justify-center mb-6">
              <FaLeaf className="text-orange-500 text-5xl" />
            </div>
            <div className="flex justify-center items-center mb-4">
            <hr className="border-1 border-[#FE5C24] w-10 "/>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              DURABLE, SAFE & ECO-FRIENDLY DESIGN
            </h3>
            <p className="text-gray-600 mt-2">
              Built with high-quality materials, featuring safety mechanisms and
              an efficient pod-breaking system that minimizes waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
