import React, { useState, useEffect } from "react";

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

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when component unmounts
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
      {/* Main background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('./HeroImg.png')" }}
      />

      {/* Navigation bar */}
      <nav className="relative z-10 flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 text-white">
        <div className="font-bold text-xl">
          <img
            src="./sansaraLogoImg01.png"
            alt="logo"
            className="w-24 sm:w-32 lg:w-40"
          />
        </div>
        <button
          className="bg-white bg-opacity-20 border border-white px-4 py-2 rounded text-sm hover:bg-opacity-30 transition-colors"
          onClick={() => setShowModal(true)}
        >
          ENQUIRY
        </button>
      </nav>

      {/* Main content with Sansara title */}
      <div className="relative h-screen flex justify-center items-center">
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest font-light mt-12">
          SANSARA
        </h1>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 relative overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-10"
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
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Thank you for your enquiry! We will contact you soon.
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 shadow-md rounded-lg h-full">
                <h3 className="text-lg font-medium mb-1 text-gray-800">
                  Real Estate Enquiry Form
                </h3>
                <p className="text-xs text-gray-600 mb-6">
                  Fill in your details and we will get in touch with you as soon
                  as possible
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-700">
                      Your Information
                    </label>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs">{errors.name}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-Mail Address"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs">{errors.phone}</p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1 text-gray-700">
                        Select Country
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>UAE</option>
                        <option>Singapore</option>
                        <option>Australia</option>
                      </select>
                      {errors.country && (
                        <p className="text-red-500 text-xs">{errors.country}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1 text-gray-700">
                        Select Unit Type
                      </label>
                      <select
                        name="unitType"
                        value={formData.unitType}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select</option>
                        <option>1BHK</option>
                        <option>2BHK</option>
                        <option>3BHK</option>
                        <option>4BHK</option>
                        <option>Penthouse</option>
                      </select>
                      {errors.unitType && (
                        <p className="text-red-500 text-xs">
                          {errors.unitType}
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1 text-gray-700">
                        Select Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select</option>
                        <option>₹50L - ₹1Cr</option>
                        <option>₹1Cr - ₹1.5Cr</option>
                        <option>₹1.5Cr - ₹2Cr</option>
                        <option>₹2Cr+</option>
                      </select>
                      {errors.budget && (
                        <p className="text-red-500 text-xs">{errors.budget}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white rounded py-2 font-medium hover:bg-blue-700 transition-colors"
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
