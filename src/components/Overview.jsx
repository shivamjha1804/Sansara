import React, { useState } from "react";

const Overview = () => {
  // State to track which button is being hovered
  const [hoveredButton, setHoveredButton] = useState(null);

  // State for form inputs in the enquiry panel
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // State for form submission status
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handler functions for button hover
  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus("submitting");

    // Mock API call delay
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "" });

      // Reset status after showing success message
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  // Handler for brochure download
  const handleDownload = () => {
    // Simulate download start
    alert("Your brochure download is starting...");
    // In a real implementation, this would trigger a file download
  };

  // Handler for contact form submission
  const handleContactSubmit = () => {
    alert("Thank you! A representative will contact you soon.");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 -top-4 font-serif relative">
      {/* Fixed Right Side Buttons */}
      <div className="fixed right-0 top-1/3 z-10 flex flex-col gap-4">
        {/* Contact Us Button */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => handleMouseEnter("contact")}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`absolute right-full mr-2 bg-white shadow-lg p-4 rounded-lg w-64 transition-all duration-300 ${
              hoveredButton === "contact"
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <h3 className="font-bold text-lg mb-2 text-blue-700">Contact Us</h3>
            <p className="mb-2">Call: +91 98765 43210</p>
            <p className="mb-2">Email: info@sansara.com</p>
            <button
              onClick={handleContactSubmit}
              className="bg-blue-700 text-white px-4 py-2 mt-2 rounded w-full hover:bg-blue-800 transition-colors"
            >
              Get in Touch
            </button>
          </div>
          <button className="bg-blue-700 text-white p-3 flex items-center justify-center shadow-lg transition-all hover:bg-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          </button>
        </div>

        {/* Download Brochure Button */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => handleMouseEnter("brochure")}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`absolute right-full mr-2 bg-white shadow-lg p-4 rounded-lg w-64 transition-all duration-300 ${
              hoveredButton === "brochure"
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <h3 className="font-bold text-lg mb-2 text-blue-700">
              Download Brochure
            </h3>
            <p className="mb-4">
              Get detailed information about Sansara Riverfront Residences.
            </p>
            <button
              onClick={handleDownload}
              className="bg-blue-700 text-white px-4 py-2 rounded w-full hover:bg-blue-800 transition-colors"
            >
              Download PDF
            </button>
          </div>
          <button className="bg-blue-700 text-white p-3 flex items-center justify-center shadow-lg transition-all hover:bg-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          </button>
        </div>

        {/* Enquiry Now Button */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => handleMouseEnter("enquiry")}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`absolute right-full mr-2 bg-white shadow-lg p-4 rounded-lg w-64 transition-all duration-300 ${
              hoveredButton === "enquiry"
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            <h3 className="font-bold text-lg mb-2 text-blue-700">
              Enquiry Now
            </h3>
            {submitStatus === "success" ? (
              <div className="text-green-600 py-4 text-center">
                Thank you for your enquiry! We'll get back to you soon.
              </div>
            ) : (
              <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-700"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-700"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-700"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-700 text-white px-4 py-2 rounded w-full hover:bg-blue-800 transition-colors"
                  disabled={submitStatus === "submitting"}
                >
                  {submitStatus === "submitting"
                    ? "Submitting..."
                    : "Submit Enquiry"}
                </button>
              </form>
            )}
          </div>
          <button className="bg-blue-700 text-white p-3 flex items-center justify-center shadow-lg transition-all hover:bg-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          </button>
        </div>
      </div>

      {/* Original Overview Content */}
      <h1 className="text-3xl text-center font-normal tracking-wide mb-10">
        OVERVIEW
      </h1>

      {/* Key Features */}
      <div className="grid grid-cols-6 text-center  mb-2 gap-4">
        <div>
          <div className="text-xl font-medium">17.4</div>
          <div className="text-sm">Acres</div>
        </div>
        <div>
          <div className="text-xl font-medium">5</div>
          <div className="text-sm">Towers</div>
        </div>
        <div>
          <div className="text-xl font-medium">G+40</div>
          <div className="text-sm">Storey</div>
        </div>
        <div>
          <div className="text-xl font-medium">70%</div>
          <div className="text-sm">Open-to-sky</div>
        </div>
        <div>
          <div className="text-xl font-medium">2.5</div>
          <div className=" text-xs">Acres of Elevated Landscape</div>
        </div>
        <div>
          <div className="text-xl font-medium">1000</div>
          <div className="text-sm">Ft. Riverfront Boulevard</div>
        </div>
      </div>

      {/* Description Paragraphs */}
      <div className="space-y-2 text-center mb-16">
        <div className="border-t border-gray-200 pt-5">
          <p className="text-sm">
            Discover Sansara, the tallest riverfront luxury residences, first of
            its kind in Howrah, offering breathtaking views of the Ganges. With
            the iconic Howrah bridge as the backdrop, Sansara is a perfect union
            of nature, family-centric spaces and community living. Here, luxury
            with simplicity seamlessly weave a haven for its discerning
            residents.
          </p>
        </div>

        <h2 className=" text-2xl text-blue-700 font-medium">
          It's not just a place to live – it's a world of its own.
        </h2>

        <p className="text-sm pb-1">
          A world where breathtaking residences are perfectly complemented by
          state-of-the-art recreational facilities. A world birthed amidst
          nature, nurtured by the green therapy of lush landscapes and the blue
          therapy of the tranquil Ganges and water features. A world of precious
          familytime.
        </p>

        <p className="text-sm pb-1">
          Here, every day begins and ends with the serene beauty of the river.
          Because every home is East- facing, mindfully crafted to offer
          unobstructed views. And this thoughtful design is just one of the
          myriad things at Sansara that fill your moments with warmth and
          brightness, creating an uplifting atmosphere from dawn to dusk.
        </p>

        <p className="text-sm pb-1">
          Sansara is a world that's mindfully designed to celebrate life.
          Bringing you a meeting point of fulfillment and desires. Of serenity
          and amenities. Of comfort and extravagance.
        </p>
      </div>

      {/* Pricing Section */}
      <div className=" flex flex-col items-center">
        <h2 className="text-3xl text-center text-blue-700 font-medium mb-4 pb-2 border-b border-blue-700 w-full max-w-lg">
          Pricing (Inclusive of GST & extra charges)
        </h2>

        <div className="grid grid-cols-2 gap-40">
          <div className="-ml-10">
            <div className="py-4 font-medium text-lg decoration-1 border-b border-gray-200 pt-1">
              3BHK
            </div>
            <div className="py-4 font-medium text-lg decoration-1 border-b border-gray-200 pt-1">
              4BHK
            </div>
            <div className="py-4 font-medium text-lg decoration-1">
              5BHK Duplex
            </div>
          </div>
          <div>
            <div className="py-4 text-lg decoration-1 border-b border-gray-200 pt-1">
              3.5 Cr Onwards
            </div>
            <div className="py-4 text-lg decoration-1 border-b border-gray-200 pt-1">
              3.7 Cr Onwards
            </div>
            <div className="py-4 text-lg decoration-1">5.79 Cr Onwards</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
