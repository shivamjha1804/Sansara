import React, { useState, useRef, useEffect } from "react";
import Overview from "./Overview";
import Gallery from "./Gallery";
import HighlightsSection from "./Higlights";
import EnquireForm from "./EnquireForm";
import Siteplans from "./Siteplans";
import Unitplans from "./Unitplans";
import Testimonials from "./Testimonials";
import Location from "./Location";
import Price from "./Price";
import SansaraEnquiryForm from "./SansaraEnquiry";
import YoutubeVideo from "./YoutubeVideo";
// Import the Location component
// import Location from "./Location";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("OVERVIEW");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for each section
  const overviewRef = useRef(null);
  const priceRef = useRef(null);
  const galleryRef = useRef(null);
  const highlightsRef = useRef(null);
  const siteplansRef = useRef(null);
  const unitplansRef = useRef(null);
  const locationRef = useRef(null);
  const enquiryRef = useRef(null);

  const navItems = [
    { id: "OVERVIEW", ref: overviewRef },
    { id: "PRICE", ref: priceRef },
    { id: "GALLERY", ref: galleryRef },
    { id: "HIGHLIGHTS", ref: highlightsRef },
    { id: "SITE PLAN", ref: siteplansRef },
    { id: "UNIT PLANS", ref: unitplansRef },
    { id: "LOCATION", ref: locationRef },
    { id: "ENQUIRY", ref: enquiryRef },
  ];

  const handleTabClick = (item) => {
    setActiveTab(item.id);
    setIsMobileMenuOpen(false);

    // Scroll to the corresponding section
    if (item.ref.current) {
      item.ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Automatically update activeTab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust offset as needed

      // Find the section currently in view
      for (const item of navItems) {
        if (item.ref.current) {
          const element = item.ref.current;
          const rect = element.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          const offsetHeight = rect.height;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeTab !== item.id) {
              setActiveTab(item.id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  return (
    <div className="relative">
      {/* Fixed navigation at the top */}
      <div className="sticky top-8 z-50 bg-blue-200 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          {/* Mobile menu button */}
          <div className="md:hidden flex justify-between items-center py-4">
            <img src="sansaraLogoImg01.png" alt="logo" />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:-top-8 md:flex  justify-between items-center py-4 absolute bg-white w-4/5 px-10 ml-12">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.id.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium px-2 py-1 transition-colors duration-200 ${
                  activeTab === item.id
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-gray-800 hover:text-blue-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(item);
                }}
              >
                {item.id}
              </a>
            ))}
          </nav>

          {/* Mobile navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-2 pb-4 ">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.id.toLowerCase().replace(" ", "-")}`}
                    className={`text-sm font-medium px-3 py-2 rounded-md ${
                      activeTab === item.id
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabClick(item);
                    }}
                  >
                    {item.id}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* Water background image  */}
      <div
        className="w-full h-32 overflow-hidden"
        style={{
          backgroundImage: "url('./FooterImg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7,
        }}
      ></div>

      {/* Content Sections - All sections are rendered but with appropriate spacing */}
      <div className="content-sections max-w-full mx-auto">
        <div ref={overviewRef} id="overview" className="py-16">
          <Overview />
        </div>
        <div ref={priceRef} id="price" className="-mt-10">
          <Price />
        </div>
        <SansaraEnquiryForm />
        <div ref={galleryRef} id="gallery" className="py-16">
          <Gallery />
        </div>
        <YoutubeVideo />

        <div ref={highlightsRef} id="highlights" className="-mt-24">
          <HighlightsSection />
        </div>

        <div ref={siteplansRef} id="site-plan" className="-mt-12">
          <Siteplans />
        </div>

        <div ref={unitplansRef} id="unit-plans" className="py-4">
          <Unitplans />
        </div>
        <Testimonials />
        <div ref={locationRef} id="location" className="">
          {/* Uncomment when Location component is available */}
          <Location />
          {/* <div className="p-4 bg-gray-100 rounded-md text-center">
            Location component placeholder
          </div> */}
        </div>

        <div ref={enquiryRef} id="enquiry" className="">
          <SansaraEnquiryForm />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
