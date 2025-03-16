import React, { useEffect, useState } from "react";
import Form from "./Form";

const Overview = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    unitType: "",
    budget: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.unitType) newErrors.unitType = "Unit type is required";
    if (!formData.budget) newErrors.budget = "Budget is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsFormSubmitted(true);
      setSubmitStatus("success");

      // Download the brochure after form submission
      handleDownload();

      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          unitType: "",
          budget: "",
        });
        setIsFormSubmitted(false);
        setSubmitStatus(null);
        setShowModal(false);
      }, 3000);
    }
  };

  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const handleTouchButton = (buttonId) => {
    setHoveredButton(hoveredButton === buttonId ? null : buttonId);
  };

  const handleDownload = () => {
    try {
      const brochurePath = "https://psgroup.in/sansara-Eflyer.pdf";
      window.open(brochurePath, "_blank");

      const successToast = document.createElement("div");
      successToast.className =
        "fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50";
      successToast.textContent = "Download started in a new tab!";
      document.body.appendChild(successToast);

      setTimeout(() => {
        if (document.body.contains(successToast)) {
          document.body.removeChild(successToast);
        }
      }, 3000);
    } catch (error) {
      console.error("Download error:", error);

      const errorToast = document.createElement("div");
      errorToast.className =
        "fixed bottom-4 right-4 bg-red-600 text-white px-6 py-3 rounded shadow-lg z-50";
      errorToast.textContent =
        "Couldn't open the brochure. Please try again later.";
      document.body.appendChild(errorToast);

      setTimeout(() => {
        if (document.body.contains(errorToast)) {
          document.body.removeChild(errorToast);
        }
      }, 5000);
    }
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+9103367676785";
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 -top-4 font-serif relative">
      <div className="fixed z-50 bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-0 md:top-1/3 flex flex-row md:flex-col justify-around md:justify-start md:gap-4 bg-white md:bg-transparent p-2 md:p-0 shadow-md md:shadow-none">
        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => handleMouseEnter("contact")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleTouchButton("contact")}
        >
          <div
            className={`absolute bottom-full md:bottom-auto md:right-full mb-2 md:mb-0 md:mr-2 bg-white shadow-lg p-4 rounded-lg w-auto ml-12 max-w-max md:w-64 transition-all duration-300 ${
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
          <button
            className="bg-blue-700 text-white p-2 md:p-3 flex items-center justify-center shadow-lg transition-all hover:bg-blue-800 rounded-full md:rounded-none"
            onClick={handlePhoneCall}
            aria-label="Contact Us"
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
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </button>
        </div>

        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => handleMouseEnter("brochure")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleTouchButton("brochure")}
        >
          <div
            className={`absolute bottom-full md:bottom-auto md:right-full mb-2 md:mb-0 md:mr-2 bg-white shadow-lg p-4 rounded-lg w-auto max-w-max md:w-64 transition-all duration-300 ${
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
          <button
            className="bg-blue-700 text-white p-2 md:p-3 flex items-center justify-center shadow-lg transition-all hover:bg-blue-800 rounded-full md:rounded-none"
            onClick={() => setShowModal(true)}
            aria-label="Download Brochure"
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
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
        </div>

        <div className="relative flex items-center justify-center">
          <button
            className="bg-blue-700 text-white p-2 md:p-3 flex items-center justify-center shadow-lg transition-all hover:bg-blue-800 rounded-full md:rounded-none"
            onClick={() => setShowModal(true)}
            aria-label="Enquiry Now"
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
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-10 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full p-1"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {isFormSubmitted && submitStatus === "success" ? (
              <div className="p-8 text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-gray-800">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  We've received your enquiry and will contact you shortly.
                </p>
              </div>
            ) : (
              <Form
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      )}

      <h1 className="text-2xl sm:text-3xl text-center font-normal tracking-wide mb-6 sm:mb-10 pt-4">
        Overview
      </h1>

      <div className="text-center mb-6 text-blue-500">
        <div className="grid grid-cols-3 px-4 sm:px-20 text-center mb-2 gap-2">
          <div>
            <div className="text-xl sm:text-3xl font-medium">17.4</div>
            <div className="text-xs sm:text-sm text-black">Acres</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-medium">5</div>
            <div className="text-xs sm:text-sm text-black">Towers</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-medium">G+40</div>
            <div className="text-xs sm:text-sm text-black">Storey</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 text-center mb-2 gap-2 mt-6 sm:mt-8">
          <div>
            <div className="text-xl sm:text-3xl font-medium">70%</div>
            <div className="text-xs sm:text-sm text-black">Open-to-sky</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-medium">2.5</div>
            <div className="text-xs sm:text-sm text-black">
              Acres of Elevated Landscape
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-medium">1000</div>
            <div className="text-xs sm:text-sm text-black">
              Ft. Riverfront <br className="hidden sm:block" /> Boulevard
            </div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-medium">1300+</div>
            <div className="text-xs sm:text-sm text-black">perennial trees</div>
          </div>
        </div>
      </div>

      {/* Description Paragraphs - Responsive text and spacing */}
      <div className="space-y-2 text-center mb-8 sm:mb-16 px-2 sm:px-2">
        <div className="border-t border-gray-200 pt-4 sm:pt-5">
          <p className="text-xs sm:text-sm">
            Discover Sansara, the tallest riverfront luxury residences, first of
            its kind in Howrah, offering breathtaking views of the Ganges. With
            the iconic Howrah bridge as the backdrop, Sansara is a perfect union
            of nature, family-centric spaces and community living. Here, luxury
            with simplicity seamlessly weave a haven for its discerning
            residents.
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl text-blue-700 font-medium mt-4">
          It's not just a place to live – it's a world of its own.
        </h2>

        <p className="text-xs sm:text-sm pb-1">
          A world where breathtaking residences are perfectly complemented by
          state-of-the-art recreational facilities. A world birthed amidst
          nature, nurtured by the green therapy of lush landscapes and the blue
          therapy of the tranquil Ganges and water features. A world of precious
          familytime.
        </p>

        <p className="text-xs sm:text-sm pb-1">
          Here, every day begins and ends with the serene beauty of the river.
          Because every home is East- facing, mindfully crafted to offer
          unobstructed views. And this thoughtful design is just one of the
          myriad things at Sansara that fill your moments with warmth and
          brightness, creating an uplifting atmosphere from dawn to dusk.
        </p>

        <p className="text-xs sm:text-sm pb-1">
          Sansara is a world that's mindfully designed to celebrate life.
          Bringing you a meeting point of fulfillment and desires. Of serenity
          and amenities. Of comfort and extravagance.
        </p>
      </div>

      {/* Add extra padding at bottom for mobile to account for fixed bottom menu */}
    </div>
  );
};

export default Overview;
