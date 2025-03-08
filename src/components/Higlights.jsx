import React, { useState, useRef } from "react";

const HighlightsSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);
  const itemsToShow = 6; // Number of items visible at once

  const highlights = [
    {
      icon: <img src="./SaftSecurityImg.png" alt="Safety and Security" />,
      title: "Safety and Security",
    },
    {
      icon: <img src="./HealthComfortImg.png" alt="Health and Comfort" />,
      title: "OCCUPATIONAL HEALTH & COMFORT",
    },
    {
      icon: <img src="SolidWasteImg.png" alt="Solid Waste Management" />,
      title: "SOLID WASTE MANAGEMENT",
    },
    {
      icon: <img src="./ServivesImg.png" alt="Services" />,
      title: "SERVICES",
    },
    {
      icon: <img src="./HealthFitnessImg.png" alt="Health and Fitness" />,
      title: "HEALTH & FITNESS",
    },
    {
      icon: <img src="./KidsImg.png" alt="Kids" />,
      title: "KIDS",
    },
    {
      icon: <img src="./GreenTherapyImg.png" alt="Green Therapy" />,
      title: "GREEN THERAPY",
    },
    {
      icon: <img src="SolidWasteImg.png" alt="Solid Waste Management" />,
      title: "SOLID WASTE MANAGEMENT",
    },
    {
      icon: <img src="./ServivesImg.png" alt="Services" />,
      title: "SERVICES",
    },
    {
      icon: <img src="./HealthFitnessImg.png" alt="Health and Fitness" />,
      title: "HEALTH & FITNESS",
    },
    {
      icon: <img src="./KidsImg.png" alt="Kids" />,
      title: "KIDS",
    },
    {
      icon: <img src="./GreenTherapyImg.png" alt="Green Therapy" />,
      title: "GREEN THERAPY",
    },
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / itemsToShow;
      const newPosition = Math.max(scrollPosition - scrollAmount, 0);
      setScrollPosition(newPosition);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / itemsToShow;
      const maxScrollPosition =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const newPosition = Math.min(
        scrollPosition + scrollAmount,
        maxScrollPosition
      );
      setScrollPosition(newPosition);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 relative">
      <h1 className="text-center text-3xl font-bold mb-12">HIGHLIGHTS</h1>

      <div className="relative">
        {/* Left arrow - fixed position */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none"
          aria-label="Scroll left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#87CEFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Carousel container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden scroll-smooth py-4 px-12"
          style={{ scrollBehavior: "smooth" }}
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/6 px-3 mb-4 flex flex-col items-center transition-transform duration-300"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                {highlight.icon}
              </div>
              <p className="text-center text-xs font-medium">
                {highlight.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right arrow - fixed position */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none"
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#87CEFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HighlightsSection;
