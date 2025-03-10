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
  const itemsToShow = 6; // Number of items visible at once

  const highlights = [
    {
      icon: <img src="./SaftSecurityImg.png" alt="Safety and Security" />,
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
      icon: <img src="./HealthComfortImg.png" alt="Health and Comfort" />,
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
      icon: <img src="SolidWasteImg.png" alt="Solid Waste Management" />,
      title: "SOLID WASTE MANAGEMENT",
      content: [
        "Sewage treatment plant for recycling of waste water for gardening and flushing system",
        "Segregation of organic and inorganic waste at source",
        "Organic waste composter to recycle waste into natural fertilizers for plants",
      ],
    },
    {
      icon: <img src="./ServivesImg.png" alt="Services" />,
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
      icon: <img src="./HealthFitnessImg.png" alt="Health and Fitness" />,
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
      icon: <img src="./KidsImg.png" alt="Kids" />,
      title: "KIDS",
      content: ["Kids Pool", "Water Slide", "Percursion Park"],
    },
    {
      icon: <img src="./GreenTherapyImg.png" alt="Green Therapy" />,
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
      icon: <img src="SolidWasteImg.png" alt="Blue Therapy" />,
      title: "Blue Therapy",
      content: [
        "The River (Infinity Edge Pool)",
        "The Lake (Reflective Pond)",
        "The Cliff (Plunge Pool)",
        "The Lagoon (Quiet Pool)",
      ],
    },
    {
      icon: <img src="./ServivesImg.png" alt="Boulevard" />,
      title: "Boulevard",
      content: ["Ghats", "Observatory Deck/Pier", "Cabanas"],
    },
    {
      icon: <img src="./HealthFitnessImg.png" alt="Podium" />,
      title: "Podium",
      content: [
        "Parents Deck",
        "Floating Deck",
        "Pool Deck",
        "Alfresco Dining",
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
      icon: <img src="./GreenTherapyImg.png" alt="Green Features" />,
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

  // Position the popup tooltip based on hover position
  useEffect(() => {
    if (popupRef.current && activeHighlight !== null) {
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
    }
  }, [activeHighlight, hoverPosition, windowSize]);

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

  const handleHighlightClick = (index) => {
    // For mobile devices, toggle on click
    setActiveHighlight(activeHighlight === index ? null : index);
  };

  const handleMouseEnter = (index, e) => {
    setActiveHighlight(index);
    setHoverPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (activeHighlight !== null) {
      setHoverPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseLeave = () => {
    setActiveHighlight(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 relative">
      <h1 className="text-center text-3xl font-bold mb-12">HIGHLIGHTS</h1>

      <div className="relative">
        {/* Left arrow - fixed position */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/3 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none"
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
          onMouseMove={handleMouseMove}
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-1/6 px-3 mb-4 flex flex-col items-center transition-transform duration-300 cursor-pointer ${
                activeHighlight === index ? "scale-110" : ""
              }`}
              onClick={() => handleHighlightClick(index)}
              onMouseEnter={(e) => handleMouseEnter(index, e)}
              onMouseLeave={handleMouseLeave}
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
          className="absolute right-0 top-1/3 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none"
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

      {/* Hover Tooltip/Popup */}
      {activeHighlight !== null && (
        <div
          ref={popupRef}
          className="fixed z-50 bg-white rounded-lg shadow-xl p-6 max-w-md transition-opacity duration-200 opacity-100 pointer-events-none"
          style={{
            minWidth: "320px",
            maxHeight: "85vh",
            overflow: "auto",
          }}
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 mr-3 flex-shrink-0">
              {highlights[activeHighlight].icon}
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              {highlights[activeHighlight].title}
            </h2>
          </div>
          <ul className="space-y-2">
            {highlights[activeHighlight].content.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HighlightsSection;
