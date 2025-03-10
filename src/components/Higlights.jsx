import React, { useState, useRef, useEffect } from "react";

const HighlightsSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeHighlight, setActiveHighlight] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const carouselRef = useRef(null);
  const popupRef = useRef(null);

  // Responsive number of items to show based on screen width
  const getItemsToShow = () => {
    if (windowSize.width < 640) return 2; // Mobile (2 items)
    if (windowSize.width < 1024) return 4; // Tablet (4 items)
    return 6; // Desktop (6 items)
  };

  const highlights = [
    {
      icon: (
        <img
          src="./SaftSecurityImg.png"
          alt="Safety and Security"
          className="w-full h-full object-contain"
        />
      ),
      title: "Safety and Security",
      content: [
        "Boom barriers at premises entrances/exits",
        "Security cabin at premises entry",
        "Fire rated door at fire escape staircase",
        "Addressable fire detection system to detect and warm people",
        "Fire hydrant system in common areas for all around access",
        "Smoke detectors & sprinkler system in all floors",
      ],
    },
    {
      icon: (
        <img
          src="./HealthComfortImg.png"
          alt="Health and Comfort"
          className="w-full h-full object-contain"
        />
      ),
      title: "OCCUPATIONAL HEALTH & COMFORT",
      content: [
        "Building orientation planned for ample natural light and ventilation",
        "Low VOC paints prevent health hazards and indoor pollution",
        "CFC free air-conditioners for a safe and cool environment",
        "Use of native plants for landscape as it requires less water, fertilizers and maintenance",
        "Water treatment plant",
        "Wheelchair friendly common-area",
        "Motion/heat sensors for all ground floor toilets",
        "Exterior paints and roof tiles with high solar-reflective-index",
        "Defined pedestrian-walk for joggers and walkers",
      ],
    },
    {
      icon: (
        <img
          src="SolidWasteImg.png"
          alt="Solid Waste Management"
          className="w-full h-full object-contain"
        />
      ),
      title: "SOLID WASTE MANAGEMENT",
      content: [
        "Sewage treatment plant for recycling of waste water for gardening and flushing system",
        "Segregation of organic and inorganic waste at source",
        "Organic waste composter to recycle waste into natural fertilizers for plants",
      ],
    },
    {
      icon: (
        <img
          src="./ServivesImg.png"
          alt="Services"
          className="w-full h-full object-contain"
        />
      ),
      title: "SERVICES",
      content: [
        "Gas Bank Facility",
        "100% DG backup for lighting circuits, lifts and utilities in common areas.",
        "Three passenger elevators & one service elevator per core",
        "DG power back up for apartments at additional cost",
        "Technical support",
        "Accessing multiple internet providers in a residential complex (GPON)",
      ],
    },
    {
      icon: (
        <img
          src="./HealthFitnessImg.png"
          alt="Health and Fitness"
          className="w-full h-full object-contain"
        />
      ),
      title: "HEALTH & FITNESS",
      content: [
        "Yoga Lawn",
        "Jogging Path",
        "Outdoor Fitness Station",
        "Bicycle Lane",
        "Fitness Trail/Obstacle Course",
      ],
    },
    {
      icon: (
        <img
          src="./KidsImg.png"
          alt="Kids"
          className="w-full h-full object-contain"
        />
      ),
      title: "KIDS",
      content: ["Kids Pool", "Water Slide", "Percursion Park"],
    },
    {
      icon: (
        <img
          src="./GreenTherapyImg.png"
          alt="Green Therapy"
          className="w-full h-full object-contain"
        />
      ),
      title: "GREEN THERAPY",
      content: [
        "The Meadow (Reflexology Path)",
        "The Grotto (Butterfly Garden)",
        "The Nest (Feature Pavillion)",
        "The Willow Grove (Herb Garden)",
        "The Forest (Nature Trail)",
        "Stepped Garden",
        "The Orchard (Theme Garden)",
        "Garden Courtyard (Senior Recreation Area)",
        "Open Lawn",
      ],
    },
    {
      icon: (
        <img
          src="SolidWasteImg.png"
          alt="Blue Therapy"
          className="w-full h-full object-contain"
        />
      ),
      title: "Blue Therapy",
      content: [
        "The River (Infinity Edge Pool)",
        "The Lake (Reflective Pond)",
        "The Cliff (Plunge Pool)",
        "The Lagoon (Quiet Pool)",
      ],
    },
    {
      icon: (
        <img
          src="./ServivesImg.png"
          alt="Boulevard"
          className="w-full h-full object-contain"
        />
      ),
      title: "Boulevard",
      content: ["Ghats", "Observatory Deck/Pier", "Cabanas"],
    },
    {
      icon: (
        <img
          src="./HealthFitnessImg.png"
          alt="Podium"
          className="w-full h-full object-contain"
        />
      ),
      title: "Podium",
      content: [
        "Parents Deck",
        "Floating Deck",
        "Pool Deck",
        "Alfresco Dining",
        "1300+ perennial trees after 1000 ft",
        "Private Garden Sitting",
        "Event Lawn and Sculpture Amphitheatre",
        "Observaory with Telescope Corner Café",
        "Family Lounge",
      ],
    },
    {
      icon: (
        <img
          src="./KidsImg.png"
          alt="Other Indoor Amenities (At Podium Level)"
          className="w-full h-full object-contain"
        />
      ),
      title: "Other Indoor Amenities (At Podium Level)",
      content: [
        "Female Wellness Center",
        "Kids Play Room, Mini Library",
        "Indoor Games Room",
        "Multi Purpose Hall",
        "Gymnasium & Yoga",
        "Library, Cards Room, Co-working Space",
        "Male Wellness Center",
      ],
    },
    {
      icon: (
        <img
          src="./GreenTherapyImg.png"
          alt="Green Features"
          className="w-full h-full object-contain"
        />
      ),
      title: "Green Features",
      content: [
        "Central vertical water distribution system",
        "Power supply",
        "Grid-tie Solar Power generation for uninterrupted",
        "Electric vehicle charging points in parking",
        "Consumption for common areas",
        "Use of solar power to reduce the monthly electricity",
        "Driveway lights with timers",
        "Energy Conservation",
        "Energy efficient lighting solutions",
        "Water Conservation",
        "Water-monitoring system",
        "Water efficient Fixture",
        "Ground water recharge system",
        "Fresh water requirement",
        "Rain water storage tank with capacity of one-day",
        "Rain water harvesting",
        "Water recycling system",
        "Dual flushing system",
      ],
    },
  ];

  // Track window resize for responsive positioning
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Position the popup tooltip based on hover/click position
  useEffect(() => {
    if (popupRef.current && activeHighlight !== null) {
      const isMobile = windowSize.width < 768;

      if (isMobile) {
        // For mobile, position the popup fixed at bottom
        popupRef.current.style.left = "0";
        popupRef.current.style.right = "0";
        popupRef.current.style.bottom = "0";
        popupRef.current.style.top = "auto";
        popupRef.current.style.width = "100%";
        popupRef.current.style.maxWidth = "100%";
        popupRef.current.style.maxHeight = "60vh";
        popupRef.current.style.borderRadius = "1rem 1rem 0 0";
      } else {
        // For tablet/desktop, position near cursor
        const popupWidth = popupRef.current.offsetWidth;
        const popupHeight = popupRef.current.offsetHeight;
        const maxX = windowSize.width - popupWidth - 20;
        const maxY = windowSize.height - popupHeight - 20;

        let newX = hoverPosition.x + 20; // Offset by 20px from cursor
        let newY = hoverPosition.y - 10;

        // Keep popup within viewport bounds
        newX = Math.min(maxX, Math.max(20, newX));
        newY = Math.min(maxY, Math.max(20, newY));

        popupRef.current.style.left = `${newX}px`;
        popupRef.current.style.top = `${newY}px`;
        popupRef.current.style.bottom = "auto";
        popupRef.current.style.width = "";
        popupRef.current.style.maxWidth = "320px";
        popupRef.current.style.borderRadius = "0.5rem";
      }
    }
  }, [activeHighlight, hoverPosition, windowSize]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const itemsToShow = getItemsToShow();
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
      const itemsToShow = getItemsToShow();
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

  const handleHighlightClick = (index, e) => {
    setActiveHighlight(activeHighlight === index ? null : index);
    setHoverPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (index, e) => {
    // Only use hover effect on larger screens
    if (windowSize.width >= 1024) {
      setActiveHighlight(index);
      setHoverPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e) => {
    if (activeHighlight !== null && windowSize.width >= 1024) {
      setHoverPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseLeave = () => {
    // Only clear on hover for larger screens
    if (windowSize.width >= 1024) {
      setActiveHighlight(null);
    }
  };

  const closePopup = () => {
    setActiveHighlight(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 relative">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-12">
        HIGHLIGHTS
      </h1>

      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/3 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none"
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
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Carousel container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden scroll-smooth py-4 px-8 sm:px-12"
          style={{ scrollBehavior: "smooth" }}
          onMouseMove={handleMouseMove}
        >
          {highlights.map((highlight, index) => {
            // Dynamically calculate width based on screen size
            const itemWidthClass =
              windowSize.width < 640
                ? "w-1/2" // Mobile: 2 items
                : windowSize.width < 1024
                ? "w-1/4" // Tablet: 4 items
                : "w-1/6"; // Desktop: 6 items

            return (
              <div
                key={index}
                className={`flex-shrink-0 ${itemWidthClass} px-2 sm:px-3 mb-4 flex flex-col items-center transition-transform duration-300 cursor-pointer ${
                  activeHighlight === index ? "scale-105 sm:scale-110" : ""
                }`}
                onClick={(e) => handleHighlightClick(index, e)}
                onMouseEnter={(e) => handleMouseEnter(index, e)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 flex items-center justify-center">
                  {highlight.icon}
                </div>
                <p className="text-center text-xs font-medium line-clamp-2">
                  {highlight.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/3 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none"
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
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Hover/Click Tooltip/Popup */}
      {activeHighlight !== null && (
        <div
          ref={popupRef}
          className={`fixed z-50 bg-white rounded-lg shadow-xl p-4 sm:p-6 transition-opacity duration-200 opacity-100 ${
            windowSize.width < 768
              ? "pointer-events-auto"
              : "pointer-events-none"
          }`}
        >
          {/* Close button for mobile */}
          {windowSize.width < 768 && (
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              aria-label="Close popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}

          <div className="flex items-center mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 flex-shrink-0">
              {highlights[activeHighlight].icon}
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              {highlights[activeHighlight].title}
            </h2>
          </div>
          <ul className="space-y-2 max-h-60 sm:max-h-96 overflow-y-auto">
            {highlights[activeHighlight].content.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-xs sm:text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HighlightsSection;
