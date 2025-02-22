import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-black">
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <div className="flex flex-col items-center mb-4 md:flex-row md:space-x-12">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="mb-2 text-2xl font-bold">Komal Kumari</h3>
            <p className="text-gray-400">
              Frontend Developer
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white rounded-r-lg bg-gradient-to-r from-green-400 to-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="flex flex-col items-center justify-center pt-4 border-t border-gray-600 md:flex-row"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Komal Kumari. All rights reserved.
          </p>
            
            <a href="https://www.linkedin.com/in/komal-kumari-86537127b/" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/komalchoudhary18" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
     
    </footer>
  );
};

export default Footer;
