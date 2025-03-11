import React, { useState, useEffect } from "react";
import Form from "./Form"; // Make sure the correct import path is used

const Hero = () => {
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

  // Prevent body scrolling when modal is open
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
    // Clear error when user starts typing
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
        setShowModal(false);
      }, 3000);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Main background image with responsive sizing */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full"
        style={{ backgroundImage: "url('./HeroImg.png')" }}
      />

      {/* Overlay for better text visibility on all screens */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Navigation bar - responsive padding and sizing */}
      <nav className="relative z-10 flex justify-between items-center py-4 px-4 sm:px-6 md:px-8 text-white w-full max-w-7xl mx-auto">
        <div className="font-bold text-xl w-24 sm:w-32 md:w-40">
          <img
            src="./sansaraLogoImg01.png"
            alt="Sansara"
            className="w-full h-auto"
          />
        </div>
        <button
          className="bg-white bg-opacity-20 border border-white px-3 py-1.5 sm:px-4 sm:py-2 rounded text-xs sm:text-sm hover:bg-opacity-30 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setShowModal(true)}
        >
          ENQUIRY
        </button>
      </nav>

      {/* Main content with Sansara title - responsive text sizing */}
      <div className="relative h-screen flex flex-col justify-center items-center px-4">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest font-light md:mt-9 text-center">
          SANSARA
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg max-w-md text-center opacity-90 mt-2">
          Riverfront Luxury Residences
        </p>
      </div>

      {/* Modal - improved for all screen sizes */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden animate-fadeIn">
            {/* Close button */}
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

            {isFormSubmitted ? (
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
    </div>
  );
};

export default Hero;
