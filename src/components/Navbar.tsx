// src/components/Navbar.tsx
import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent absolute top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-black text-2xl font-bold ">
          Travo<span className="text-black"><span className='text-yellow-500'>M</span>ile</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li><a href="#" className="text-black hover:text-yellow-500">Destinations</a></li>
          <li><a href="#" className="text-black hover:text-yellow-500">AI Guide</a></li>
          <li><a href="#" className="text-black hover:text-yellow-500">Contact Us</a></li>
          <li><a href="#" className="text-black hover:text-yellow-500">Blogs</a></li>
        </ul>

        {/* Right-side Icons */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-yellow-500  text-black px-4 py-2 rounded hover:bg-yellow-600">
            Download App
          </button>

          <div className="relative">
            <FaBell className="text-black text-xl cursor-pointer" />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          <FaUserCircle className="text-black text-2xl cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
