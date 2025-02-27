import React from 'react';
import logo from '../../assets/NoghusamLogo.jpg';

const Navbar2 = () => {
  return (
    <nav className="bg-white pt-2 px-4 sm:px-8 md:px-16 lg:px-24 sticky top-0">
      <div className="container py-2 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0">
        
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="h-12 rounded-4xl" />
          <h2 className="text-xl font-bold text-[#191D34]">NOGHUSAM</h2>
        </div>
        
        <div>
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-14 text-center">
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <a href="">Home</a>
            </li>
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <a href="">About</a>
            </li>
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <a href="">Innovator</a>
            </li>
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <a href="">Products</a>
            </li>
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <a href="">Testimonials</a>
            </li>
            <li className="hover:text-[#FE5C24] transition-all duration-500">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar2;
