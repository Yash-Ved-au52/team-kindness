import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Side */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins">Team Kindness</h3>
              <p className="text-indigo-300">
                Providing compassionate home care services with professionalism and dedication.
              </p>
            </div>
          </div>

          {/* Center (Empty to create spacing if needed in future) */}
          <div></div>

          {/* Right Side */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins">Connect With Us</h3>
              <div className="flex space-x-4 text-2xl mb-4">
                <a href="#" className="text-indigo-300 hover:text-white transition"><FaFacebook /></a>
                <a href="#" className="text-indigo-300 hover:text-white transition"><FaInstagram /></a>
                <a href="#" className="text-indigo-300 hover:text-white transition"><FaWhatsapp /></a>
                <a href="#" className="text-indigo-300 hover:text-white transition"><FaYoutube /></a>
              </div>
              <div>
                <p className="text-indigo-300">Usha Colony, Power House Road</p>
                <p className="text-indigo-300">Bhawani Mandi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-indigo-700 mt-8 pt-6 text-center text-indigo-400">
          &copy; {new Date().getFullYear()} Team Kindness. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
