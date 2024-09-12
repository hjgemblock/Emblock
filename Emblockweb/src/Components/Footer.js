import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/emblocklogo.png';  // Ensure the path and filename are correct
import { IoMdCall } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14  px-16 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo and Title Section */}
        <div className="flex flex-col md:flex-col items-start  mb-6 md:mb-0">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Emblock Logo" className="h-12 w-12" />
            <h2 className="text-xl font-bold ml-4">Emblock</h2>
          </div>
          <div>
          <p className="text-center md:text-left">
            Welcome to EMBLOCK – your catalyst for business transformation. We fuse technology,<br />
            innovation, and expertise to drive your success.
          </p>
          </div>
        </div>
        
        {/* Contact and Social Media Section */}
        <div className="flex flex-col ">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-4">
            <a href="tel:+919952311408" className="hover:text-gray-300 flex items-center"> <IoMdCall className="text-green-500 mr-2" />+91 99523 11408</a>
            <a href="mailto:contact@emblock.in" className="hover:text-gray-300">✉ contact@emblock.in</a>
          </div>
          <div className="flex flex-row space-x-4 md:space-x-6 items-center ">
            <p className="text-green-700">Follow us on:</p>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>© Copyright EMBLOCK. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;