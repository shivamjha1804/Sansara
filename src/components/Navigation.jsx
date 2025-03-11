import React, { useState, useRef, useEffect } from "react";
import Overview from "./Overview";
import Gallery from "./Gallery";
import HighlightsSection from "./Higlights";
import Siteplans from "./Siteplans";
import Unitplans from "./Unitplans";
import Testimonials from "./Testimonials";
import Location from "./Location";
import Price from "./Price";
import SansaraEnquiryForm from "./SansaraEnquiry";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("OVERVIEW");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

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

      // Toggle fixed navbar
      if (window.scrollY > 100) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  return (
    <div className="relative">
      {/* Fixed navigation at the top */}
      <div
        className={`sticky top-0 z-50 bg-slate-400 shadow-md transition-all duration-300 ${
          isNavbarFixed ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Logo and Mobile Menu Button */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="./sansaraLogoImg01.png" // Replace with your logo path
                alt="Logo"
                className={`h-8 transition-all duration-300 ${
                  isNavbarFixed ? "w-auto" : "w-0 opacity-0"
                }`}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
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

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex justify-between items-center transition-all duration-300 ${
              isNavbarFixed ? "mt-2" : "mt-4"
            }`}
          >
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

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-2 pb-4">
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

      {/* Content Sections */}
      <div className="content-sections max-w-full mx-auto">
        <div ref={overviewRef} id="overview" className="py-16">
          <Overview />
        </div>
        <div ref={priceRef} id="price" className="-mt-10">
          <Price />
        </div>
        <div ref={galleryRef} id="gallery" className="py-16">
          <Gallery />
        </div>
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
          <Location />
        </div>
        <div ref={enquiryRef} id="enquiry" className="">
          <SansaraEnquiryForm />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
