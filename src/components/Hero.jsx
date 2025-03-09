import React, { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("OVERVIEW");

  const tabs = [
    "OVERVIEW",
    "GALLERY",
    "HIGHLIGHTS",
    "SITE PLAN",
    "UNIT PLANS",
    "LOCATION",
    "ENQUIRY",
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Main background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}
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

      {/* Tab container */}
      <div className="relative mx-auto -mt-16 w-11/12 lg:w-4/5 bg-white rounded-lg shadow-lg z-20">
        {/* Tab navigation */}
        <div className="flex flex-wrap border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-5 text-sm font-medium relative ${
                activeTab === tab
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="p-8 min-h-[300px]">
          {activeTab === "OVERVIEW" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">About Sansara</h2>
              <p className="text-gray-700">
                Luxury waterfront living with stunning views of the river and
                city skyline. Experience the perfect blend of modern
                architecture and natural beauty.
              </p>
            </div>
          )}

          {activeTab === "GALLERY" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
              <p className="text-gray-700">
                Explore our collection of images showcasing this premium
                property.
              </p>
              {/* Gallery grid would go here */}
            </div>
          )}

          {activeTab === "HIGHLIGHTS" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
              <p className="text-gray-700">
                Discover the exceptional features that make Sansara stand out.
              </p>
            </div>
          )}

          {activeTab === "SITE PLAN" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Site Plan</h2>
              <p className="text-gray-700">
                View the layout and orientation of the Sansara development.
              </p>
            </div>
          )}

          {activeTab === "UNIT PLANS" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Unit Plans</h2>
              <p className="text-gray-700">
                Explore the different floor plans and unit configurations
                available.
              </p>
            </div>
          )}

          {activeTab === "LOCATION" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Location</h2>
              <p className="text-gray-700">
                Situated in a prime waterfront location with excellent
                connectivity.
              </p>
            </div>
          )}

          {activeTab === "ENQUIRY" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Enquiry</h2>
              <p className="text-gray-700">
                Interested in learning more? Fill out the form below to get in
                touch with our sales team.
              </p>
              {/* Form would go here */}
            </div>
          )}
        </div>
      </div>

      {/* Wave footer */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 bg-contain bg-repeat-x"
        style={{ backgroundImage: "url('/path/to/your/wave-image.jpg')" }}
      />
    </div>
  );
};

export default Hero;
