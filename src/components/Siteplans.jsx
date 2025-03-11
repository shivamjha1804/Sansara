import React from "react";

const Siteplans = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Section Heading */}
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl text-black">
        Site Plans
      </h1>
      <p className="text-center text-sm sm:text-base lg:text-lg text-gray-600 mt-2 mb-8 sm:mb-12">
        Know Your Home
      </p>

      {/* Site Plan Image */}
      <div className="w-full overflow-hidden rounded-lg shadow-lg">
        <img
          src="./SitePlans.png"
          alt="Site Plans"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Siteplans;
