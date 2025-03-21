import React, { useState, useEffect } from "react";
import Form from "./Form";
import ThankYouModal from "./ThankYouModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    unitType: "",
    budget: "",
  });
  const [errors, setErrors] = useState({});

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (showModal || showThankYouModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal, showThankYouModal]);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      unitType: "",
      budget: "",
    });
    setErrors({});
  };

  const closeThankYouModal = () => {
    setShowThankYouModal(false);
  };

  const closeEnquiryModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "unitType") {
      const unitType = value;
      let budget = "";

      switch (unitType) {
        case "3BHK":
          budget = "₹3.11Cr - ₹3.50Cr";
          break;
        case "4BHK":
          budget = "₹3.96Cr - ₹4.35Cr";
          break;
        case "5BHK":
          budget = "₹4.08Cr - ₹4.49Cr";
          break;
        case "5BHK Duplex":
          budget = "₹6.17Cr - ₹6.38Cr";
          break;
        default:
          budget = "";
      }
      setFormData({
        ...formData,
        budget: budget,
        unitType: unitType,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
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
    if (e) e.preventDefault();
    return validateForm();
  };

  // Show the enquiry modal after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Desktop/Tablet background image - hidden on small screens */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full hidden sm:block"
        style={{ backgroundImage: "url('./HeroImg.jpg')" }}
      />

      {/* Mobile background image - shown only on small screens */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full sm:hidden"
        style={{ backgroundImage: "url('./MobileHeroImg.png')" }}
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
        <img src="./MainLogo.png" alt="sansaraImg" className=" mt-8" />
      </div>

      {/* Enquiry Modal */}
      {showModal && (
        <div className="fixed pt-3 inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden animate-fadeIn">
            {/* Close button */}
            <button
              onClick={() => {
                closeEnquiryModal();
                resetForm();
              }}
              className="absolute top-5 right-3 text-gray-500 hover:text-gray-700 z-10 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full p-1"
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

            <Form
              formData={formData}
              errors={errors}
              setFormData={setFormData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              closeEnquiryModal={closeEnquiryModal}
              setShowThankYouModal={setShowThankYouModal}
            />
          </div>
        </div>
      )}

      {/* Thank You Modal - Moved outside the Form component */}
      {showThankYouModal && (
        <ThankYouModal
          onClose={() => {
            closeThankYouModal();
            // Reset form data when thank you modal is closed
            resetForm();
          }}
          name={formData.name}
        />
      )}
    </div>
  );
};

export default Hero;
