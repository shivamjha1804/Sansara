import React, { useState, useEffect } from "react";

const Siteplans = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Site Plans
        </h1>
        <p className="text-lg text-gray-600 mt-2">Know Your Home</p>
      </div>

      {/* Site Plan Image - Click to Open Modal */}
      <div
        className="relative w-full overflow-hidden rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]"
        onClick={() => setIsOpen(true)}
      >
        <img
          src="./SitePlans.png"
          alt="Site Plans"
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2 rounded-full bg-white/90 hover:bg-white/100 shadow-sm"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
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

            {/* Modal Content */}
            <div className="flex justify-center">
              <img
                src="./SitePlans.png"
                alt="Site Plans"
                className="w-full max-h-[80vh] rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Siteplans;
