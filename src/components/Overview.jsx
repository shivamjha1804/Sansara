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
    const loadingToast = document.createElement("div");
    loadingToast.className =
      "fixed bottom-4 right-4 bg-blue-700 text-white px-6 py-3 rounded shadow-lg z-50";
    loadingToast.textContent = "Checking brochure...";
    document.body.appendChild(loadingToast);

    const brochurePath = "https://psgroup.in/sansara-Eflyer.pdf";

    fetch(brochurePath, { method: "HEAD" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response;
      })
      .then(() => {
        loadingToast.textContent = "Downloading brochure...";

        const link = document.createElement("a");
        link.href = brochurePath;
        link.setAttribute("download", "sansara-e-flyer.pdf");

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        document.body.removeChild(loadingToast);
        const successToast = document.createElement("div");
        successToast.className =
          "fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50";
        successToast.textContent = "Download started successfully!";
        document.body.appendChild(successToast);

        setTimeout(() => {
          document.body.removeChild(successToast);
        }, 3000);
      })
      .catch((error) => {
        console.error("Download error:", error);
        document.body.removeChild(loadingToast);

        const errorToast = document.createElement("div");
        errorToast.className =
          "fixed bottom-4 right-4 bg-red-600 text-white px-6 py-3 rounded shadow-lg z-50";
        errorToast.textContent =
          "Brochure file not found. Please contact support.";
        document.body.appendChild(errorToast);

        setTimeout(() => {
          document.body.removeChild(errorToast);
        }, 5000);
      });
  };

  // Handler for initiating a phone call
  const handlePhoneCall = () => {
    const phoneNumber = "+9103367676785";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-serif relative">
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
          <button
            className="bg-blue-700 text-white p-3 flex items-center justify-center shadow-lg transition-all hover:bg-blue-800"
            onClick={handlePhoneCall}
          >
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
          <button
            className="bg-blue-700 text-white p-3 flex items-center justify-center shadow-lg transition-all hover:bg-blue-800"
            onClick={handleDownload}
          >
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
                  className="bg-blue-700 text-white px-4 py-2 rounded w-full hover:bg-blue-800 transition-colors flex items-center justify-center"
                  disabled={submitStatus === "submitting"}
                >
                  {submitStatus === "submitting" ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Enquiry"
                  )}
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
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-normal tracking-wide mb-10">
        OVERVIEW
      </h1>

      {/* Key Features */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-8">
        {[
          { value: "17.4", label: "Acres" },
          { value: "5", label: "Towers" },
          { value: "G+40", label: "Storey" },
          { value: "70%", label: "Open-to-sky" },
          { value: "2.5", label: "Acres of Elevated Landscape" },
          { value: "1000", label: "Ft. Riverfront Boulevard" },
          { value: "1300+", label: "Perennial Trees" },
        ].map((item, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="text-3xl sm:text-4xl lg:text-5xl text-blue-700">
              {item.value}
            </div>
            <div className="text-sm sm:text-base lg:text-lg text-gray-600">
              {item.label}
            </div>
          </div>
        ))}
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

        <h2 className="text-2xl text-blue-700 font-medium">
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
    </div>
  );
};

export default Overview;
