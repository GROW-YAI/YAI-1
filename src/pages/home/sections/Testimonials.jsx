import React from 'react'
import face1 from '../../../../assets/Face1.jpg'
import face2 from '../../../../assets/Face2.jpg'
import face3 from '../../../../assets/Face3.jpg'
import face4 from '../../../../assets/Face4.jpg'

const Testimonials = () => {
  return (
   <section className="bg-[#F7F7F7] py-16 ">
         <div className="container mx-auto text-center">
           <h2 className="text-3xl font-bold mb-8">
              HAPPY CLIENTS
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
             {/* Feature 1: Increased Efficiency */}
             <div className="bg-white p-6 shadow-lg border border-slate-200  rounded-lg text-center hover:scale-105 transition duration-500">
               <div>
               <p className=" mt-2">
               The Noghusam Cocoa Pod Breaking Machine has completely transformed our farm operations! What used to take us hours is now done in minutes. It's efficient, easy to use, and has significantly boosted our productivity.
               </p>
               <div className='flex mt-4 gap-2'>
               <div className=''>
                <img src={face2} alt="" className='h-20 w-22 rounded-full'/>
               </div>
               <p className='flex justify-center items-center'> Kwame Asante, Cocoa Farmer</p>
               </div>
               </div>
             </div>
   
             {/* Feature 2: High Precision */}
             <div className="bg-white p-6 shadow-lg border border-slate-200  rounded-lg text-center hover:scale-105 transition duration-500">
               <div>
               <p className=" mt-2">
               Sustainability and efficiency in one machine! We are now able to process more cocoa in less time while maintaining quality. This is exactly what our industry needed.
               </p>
               <div className='flex mt-16 gap-2'>
               <div className=''>
                <img src={face3} alt="" className='h-20 w-24 rounded-full'/>
               </div>
               <p className='flex justify-center items-center'> Ama Boakye, Cocoa Exporter</p>
               </div>
               </div>
             </div>
   
             {/* Feature 3: Reduced Labor Costs */}
             <div className="bg-white p-6 shadow-lg border border-slate-200  rounded-lg text-center hover:scale-105 transition duration-500">
               <div>
               <p className=" mt-2">
               I was skeptical at first, but this innovation is worth every penny. It reduces waste, protects the beans, and makes the entire process smoother. Highly recommended!
               </p>
               <div className='flex mt-12 gap-2'>
               <div className=''>
                <img src={face1} alt="" className='h-20 w-28 rounded-full'/>
               </div>
               <p className='flex justify-center items-center'> Daniel Opoku, Agribusiness Owner</p>
               </div>
               </div>
             </div>
   
             {/* Feature 4: Durable and Eco-Friendly */}
             <div className="bg-white p-6 shadow-lg border border-slate-200  rounded-lg text-center hover:scale-105 transition duration-500">
               <div>
               <p className=" mt-2">
               This machine has saved us so much time and effort. We no longer have to rely on excessive manual labor, and our workers are safer. A game-changer for the cocoa industry!
               </p>
               <div className='flex mt-12 gap-2'>
               <div className=''>
                <img src={face4} alt="" className='h-20 w-32 rounded-full'/>
               </div>
               <p className='flex justify-center items-center'>  Abena Mensah, Cocoa Processing Manager</p>
               </div>
               </div>
             </div>
           </div>
         </div>
       </section>
  )
}

export default Testimonials