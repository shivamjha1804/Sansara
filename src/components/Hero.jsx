import React from "react";
// Hero Component
const Hero = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <img
        src="./hero.png"
        alt="Hero"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white max-w-2xl px-4">
          <h1 className="text-5xl font-bold mb-4 uppercase">Sansara</h1>
          <p className="text-xl mb-6">Riverfront Luxury Residence in Howrah</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
