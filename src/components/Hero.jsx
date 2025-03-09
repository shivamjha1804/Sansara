import React, { useState } from "react";
import Overview from "./Overview"; // Import the Overview component

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden boder">
      {/* Main background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('./HeroImg.png')" }}
      />

      {/* Navigation bar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-4 text-white">
        <div className="font-bold text-xl">PS GROUP</div>

        <div className="hidden md:flex space-x-8">
          <a href="#projects" className="hover:text-gray-200">
            PROJECTS
          </a>
          <a href="#foundation" className="hover:text-gray-200">
            FOUNDATION
          </a>
          <a href="#career" className="hover:text-gray-200">
            CAREER
          </a>
          <a href="#blog" className="hover:text-gray-200">
            BLOG
          </a>
          <a href="#faq" className="hover:text-gray-200">
            FAQ
          </a>
        </div>

        <button className="bg-white bg-opacity-20 border border-white px-4 py-2 rounded text-sm hover:bg-opacity-30 transition-colors">
          ENQUIRY
        </button>
      </nav>

      {/* Main content with Sansara title */}
      <div className="relative h-screen flex justify-center items-center">
        <h1 className="text-white text-6xl md:text-7xl lg:text-8xl tracking-widest font-light">
          SANSARA
        </h1>
      </div>
    </div>
  );
};

export default Hero;
