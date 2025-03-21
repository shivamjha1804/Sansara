import React, { useState } from "react";

const FixedButtonMenu = ({ setShowModal }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+9103367676785";
  };

  return (
    <div className="fixed z-50 bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-0 md:top-1/3 flex flex-row md:flex-col md:justify-start md:gap-4 md:bg-transparent bg-white pt-1 pb-1 md:p-0 shadow-md md:shadow-none ">
      {/* Call Us Button */}
      <div
        className="relative flex items-center justify-center w-full mx-2"
        onMouseEnter={() => handleMouseEnter("contact")}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hoverable Content (Desktop/Tablet only) */}
        <div
          className={`hidden md:block absolute bottom-auto right-full mb-0 mr-2 bg-white shadow-lg p-4 rounded-lg w-64 transition-all duration-300 ${
            hoveredButton === "contact"
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <h3 className="font-bold text-lg mb-2 text-blue-700">Contact Us</h3>
          <p className="mb-2">
            <a
              href="tel:+9103367676785"
              className="hover:text-blue-700 transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block mr-2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +9103367676785
            </a>
          </p>
          <p className="mb-2">
            <a
              href="mailto:sales@psgroup.in"
              className="hover:text-blue-700 transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block mr-2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              sales@psgroup.in
            </a>
          </p>
          <button
            onClick={handlePhoneCall}
            className="bg-blue-700 text-white px-4 py-2 mt-2 rounded w-full hover:bg-blue-800 transition-colors"
          >
            Call Us
          </button>
        </div>

        {/* Call Us Button */}
        <button
          className="bg-blue-600 text-white px-4 py-3 md:p-3 flex flex-col md:flex-row items-center justify-center shadow-lg transition-all hover:bg-blue-700 rounded-lg md:rounded-none w-full md:w-auto"
          onClick={handlePhoneCall}
          aria-label="Contact Us"
        >
          {/* Mobile Icon + Text Layout */}
          <span className="md:hidden flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          {/* Show SVG only on desktop/tablet */}
          <span className="hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          {/* Mobile and Desktop Text */}
          <span className="text-sm font-medium md:hidden">Call Us</span>
        </button>
      </div>

      {/* Download Brochure Button */}
      <div
        className="relative flex items-center justify-center w-full mx-2"
        onMouseEnter={() => handleMouseEnter("brochure")}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hoverable Content (Desktop/Tablet only) */}
        <div
          className={`hidden md:block absolute bottom-auto right-full mb-0 mr-2 bg-white shadow-lg p-4 rounded-lg w-64 transition-all duration-300 ${
            hoveredButton === "brochure"
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <h3 className="font-bold text-lg mb-2 text-blue-700">
            Download Brochure
          </h3>
          <p className="mb-4 text-sm">
            Get detailed information about Sansara Riverfront Residences.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-700 text-white px-4 py-2 rounded w-full hover:bg-blue-800 transition-colors flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </button>
        </div>

        {/* Download Brochure Button */}
        <button
          className="bg-indigo-600 text-white px-4 py-3 md:p-3 flex flex-col md:flex-row items-center justify-center shadow-lg transition-all hover:bg-indigo-700 rounded-lg md:rounded-none w-full md:w-auto"
          onClick={() => setShowModal(true)}
          aria-label="Download Brochure"
        >
          {/* Mobile Icon + Text Layout */}
          <span className="md:hidden flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </span>
          {/* Show SVG only on desktop/tablet */}
          <span className="hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </span>
          {/* Mobile and Desktop Text */}
          <span className="text-sm font-medium md:hidden">Brochure</span>
        </button>
      </div>

      {/* Enquire Now Button */}
      <div
        className="relative flex items-center justify-center w-full mx-2"
        onMouseEnter={() => handleMouseEnter("enquire")}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hoverable Content (Desktop/Tablet only) */}
        <div
          className={`hidden md:block absolute bottom-auto right-full mb-0 mr-2 bg-white shadow-lg p-4 rounded-lg w-64 transition-all duration-300 ${
            hoveredButton === "enquire"
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <h3 className="font-bold text-lg mb-2 text-blue-700">Enquire Now</h3>
          <p className="mb-4 text-sm">
            Schedule a site visit or get more information about the project.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-700 text-white px-4 py-2 rounded w-full hover:bg-blue-800 transition-colors flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Submit Enquiry
          </button>
        </div>

        <button
          className="bg-green-600 text-white px-4 py-3 md:p-3 flex flex-col md:flex-row items-center justify-center shadow-lg transition-all hover:bg-green-700 rounded-lg md:rounded-none w-full md:w-auto"
          onClick={() => setShowModal(true)}
          aria-label="Enquire Now"
        >
          {/* Mobile Icon + Text Layout */}
          <span className="md:hidden flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </span>
          {/* Show SVG only on desktop/tablet */}
          <span className="hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </span>
          {/* Mobile and Desktop Text */}
          <span className="text-sm font-medium md:hidden">Enquire</span>
        </button>
      </div>
    </div>
  );
};

export default FixedButtonMenu;
