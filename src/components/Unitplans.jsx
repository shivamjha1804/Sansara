import React, { useState, useEffect } from "react";

const Unitplans = () => {
  // State for UI control
  const [isBlurred, setIsBlurred] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showUnitPlans, setShowUnitPlans] = useState(false);

  // Plan selection states
  const [selectedPlan, setSelectedPlan] = useState("3BHK");
  const [selectedUnit, setSelectedUnit] = useState(null);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Form data and validation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    unitType: "",
    budget: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    unitType: "",
    budget: "",
  });

  // Floor plan images and unit details
  const floorPlanImages = {
    "3BHK": [
      {
        name: "Unit-A-3BHK",
        image: "./unit-A-3BHK-amp.jpg",
      },
      {
        name: "Unit-C-3BHK",
        image: "./unit-C-3bhk-amp.jpg",
      },
    ],
    "4BHK": [
      {
        name: "Unit-B-4BHK",
        image: "./unit-B-4bhk-amp.jpg",
      },
      {
        name: "Unit-D-4BHK-Study",
        image: "./unit-D-4BHK-study-amp.jpg",
      },
    ],
    "5BHK DUPLEX": [
      {
        name: "Unit-C-5BHK-Duplex-Lower",
        image: "./unit-C-5bhk-duplex-lower-amp.jpg",
      },
      {
        name: "Unit-C-5BHK-Duplex-Upper",
        image: "./unit-C-5BHK-Duplex-Upper-amp.jpg",
      },
    ],
  };

  // Get plan types from the floorPlanImages object keys
  const planTypes = Object.keys(floorPlanImages);

  // Handle initial click to remove blur and show form
  const handleInitialClick = () => {
    setIsBlurred(false);
    setShowForm(true);
  };

  // Function to open the modal with the selected image
  const openModal = (image, e) => {
    if (e) e.stopPropagation();
    setModalImage(image);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Automatically set budget based on unit type
  useEffect(() => {
    if (formData.unitType === "3BHK") {
      setFormData((prev) => ({ ...prev, budget: "₹3.11 Cr - ₹3.50 Cr" }));
    } else if (formData.unitType === "4BHK") {
      setFormData((prev) => ({ ...prev, budget: "₹3.96 Cr - ₹4.35 Cr" }));
    } else if (formData.unitType === "5BHK DUPLEX") {
      setFormData((prev) => ({ ...prev, budget: "₹6.17 Cr - ₹6.38 Cr" }));
    } else if (formData.unitType === "Penthouse") {
      setFormData((prev) => ({ ...prev, budget: "₹4.08 Cr - ₹4.49 Cr" }));
    }
  }, [formData.unitType]);

  // Validate the form before submission
  const validateForm = () => {
    const newErrors = {};

    // Validate Name
    if (!formData.name.trim()) newErrors.name = "Name is required.";

    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate Phone Number
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    // Validate Country
    if (!formData.country) newErrors.country = "Country is required.";

    // Validate Unit Type
    if (!formData.unitType) newErrors.unitType = "Unit type is required.";

    // Validate Budget
    if (!formData.budget) newErrors.budget = "Budget is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, transition to showing unit plans
      setShowForm(false);
      setShowUnitPlans(true);

      // Set unit type based on form selection
      if (formData.unitType === "3BHK") {
        setSelectedPlan("3BHK");
      } else if (formData.unitType === "4BHK") {
        setSelectedPlan("4BHK");
      } else if (
        formData.unitType === "5BHK DUPLEX" ||
        formData.unitType === "Penthouse"
      ) {
        setSelectedPlan("5BHK DUPLEX");
      }
    }
  };

  return (
    <div
      className={`min-h-screen w-full max-w-6xl mx-auto overflow-hidden relative py-6 ${
        isBlurred ? "cursor-pointer" : ""
      }`}
      style={{
        backgroundImage: `url("./ImagePlan.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onClick={isBlurred ? handleInitialClick : undefined}
    >
      {/* Blur overlay */}
      {isBlurred && (
        <div className="absolute inset-0 backdrop-blur-md transition-all duration-300 hover:backdrop-blur-sm flex items-center justify-center z-10">
          <div className="text-center p-6 transform transition-transform duration-300 hover:scale-110">
            <h2 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
              Discover Your Dream Home
            </h2>
            <p className="text-xl text-white drop-shadow-lg">
              Click anywhere to explore our luxury units
            </p>
          </div>
        </div>
      )}

      {/* Main container */}
      <div className="w-full h-full mx-auto">
        {/* Centered Heading for both sections */}
        <div className="w-full pt-6 pb-4 rounded-t-lg text-center mb-0">
          <h2 className="text-2xl sm:text-3xl  text-gray-800">Unit Plans</h2>
          <p className="mt-1 text-sm text-gray-600">
            Luxury 3, 4 and 5 BHK Homes
          </p>
        </div>

        {/* Content Container with dynamic display based on state */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Enquiry Form - Only shown after initial click and before submission */}
          {showForm && (
            <div className="w-full p-4 lg:p-6 rounded-lg animate-fadeIn">
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-lg font-medium mb-1 text-gray-800">
                  Real Estate Enquiry Form
                </h3>
                <p className="text-xs text-gray-600 mb-6">
                  Fill in your details to explore our luxury units
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
                        <option>3BHK</option>
                        <option>4BHK</option>
                        <option>5BHK DUPLEX</option>
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
                        <option>₹3.11 Cr - ₹3.50 Cr</option>
                        <option>₹3.96 Cr - ₹4.35 Cr</option>
                        <option>₹4.08 Cr - ₹4.49 Cr</option>
                        <option>₹6.17 Cr - ₹6.38 Cr</option>
                      </select>
                      {errors.budget && (
                        <p className="text-red-500 text-xs">{errors.budget}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white rounded py-2 font-medium hover:bg-blue-700 transition-colors"
                    >
                      View Available Units
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Unit Plans - Only shown after form submission */}
          {showUnitPlans && (
            <div className="flex flex-col w-full h-full justify-center items-center animate-fadeIn">
              {/* Unit Plan Content - Full width and centered */}
              <div className="w-full max-w-6xl mx-auto p-4 lg:p-6 lg:rounded-bl-lg">
                {/* Plan type selection */}
                <div className="mb-6 text-center">
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Select Plan Type
                  </label>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {planTypes.map((plan) => (
                      <button
                        key={plan}
                        type="button"
                        className={`px-4 py-2 text-sm rounded-md ${
                          selectedPlan === plan
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                        onClick={() => {
                          setSelectedPlan(plan);
                          setSelectedUnit(null);
                        }}
                      >
                        {plan}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Display units for the selected plan */}
                <div className="mt-6 w-full flex flex-col  justify-center items-center">
                  <h3 className="text-lg font-medium mb-4 text-gray-700 text-center">
                    Available Units
                  </h3>
                  <div className="grid  sm:grid-cols-2 gap-9 mx-auto max-w-4xl">
                    {floorPlanImages[selectedPlan].map((unit) => (
                      <div
                        key={unit.name}
                        className={`p-4 rounded-lg shadow-md cursor-pointer ${
                          selectedUnit === unit.name
                            ? "border-2 border-blue-600"
                            : "border border-gray-200"
                        } transition-transform duration-300 hover:scale-105`}
                        onClick={() => setSelectedUnit(unit.name)}
                      >
                        <h4 className="text-md font-medium text-gray-800 mb-2 text-center">
                          {unit.name}
                        </h4>
                        <div className="flex justify-center overflow-hidden">
                          <img
                            src={unit.image}
                            alt={`${unit.name} Floor Plan`}
                            className="max-w-full h-auto transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                            onClick={(e) => openModal(unit.image, e)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selected unit details */}

                {selectedUnit && (
                  <div className="mt-6 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-medium mb-3 text-blue-600 text-center">
                      {selectedUnit}
                    </h3>
                    <p className="text-center text-gray-600 mb-3">
                      Click on the image for an enlarged view
                    </p>
                    <div className="flex justify-center overflow-hidden">
                      <img
                        src={
                          floorPlanImages[selectedPlan].find(
                            (unit) => unit.name === selectedUnit
                          )?.image
                        }
                        alt={`${selectedUnit} Floor Plan`}
                        className="max-w-full h-auto transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                        onClick={(e) =>
                          openModal(
                            floorPlanImages[selectedPlan].find(
                              (unit) => unit.name === selectedUnit
                            )?.image,
                            e
                          )
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for displaying the larger image */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 animate-fadeIn">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-4xl max-h-[90vh] overflow-auto">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={closeModal}
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
            <img
              src={modalImage}
              alt="Enlarged Floor Plan"
              className="max-w-full max-h-[80vh]"
            />
          </div>
        </div>
      )}

      {/* Add animations to the global styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Unitplans;
