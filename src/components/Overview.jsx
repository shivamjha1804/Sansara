import React, { useState, useEffect } from "react";
import FixedButtonMenu from "./FixedButtonMenu";
import OverViewMainContent from "./OverviewMainContent";
import Form from "./Form";

const Overview = () => {
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
    e.preventDefault();
    return validateForm();
  };

  const closeEnquiryModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <FixedButtonMenu setShowModal={setShowModal} />
      <OverViewMainContent />

      {/* Modal for Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
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

            <Form
              formData={formData}
              errors={errors}
              setFormData={setFormData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              closeEnquiryModal={closeEnquiryModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;
