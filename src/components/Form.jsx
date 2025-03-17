import React, { useEffect } from "react";

const Form = ({ formData, errors, handleChange, handleSubmit }) => {
  // Function to automatically update budget based on unit type
  const handleUnitTypeChange = (e) => {
    const unitType = e.target.value;
    let budget = "";

    // Set budget based on unit type
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

    // Create a synthetic event to update the budget
    const syntheticEvent = {
      target: {
        name: "budget",
        value: budget,
      },
    };

    // Call the original handleChange with the unit type change
    handleChange(e);

    // Call handleChange again with the budget update if a unit type with auto-budget was selected
    if (budget) {
      handleChange(syntheticEvent);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-lg font-medium mb-1 text-gray-800">
        Real Estate Enquiry
      </h3>
      <p className="text-xs text-gray-600 mb-6">
        Fill in your details and we will get in touch with you as soon as
        possible
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Your Information
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-Mail Address"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Select Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none appearance-none bg-white"
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
              <p className="text-red-500 text-xs mt-1">{errors.country}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Select Unit Type
            </label>
            <select
              name="unitType"
              value={formData.unitType}
              onChange={handleUnitTypeChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none appearance-none bg-white"
            >
              <option value="">Select</option>
              <option>1BHK</option>
              <option>2BHK</option>
              <option>3BHK</option>
              <option>4BHK</option>
              <option>5BHK</option>
              <option>5BHK Duplex</option>
              <option>Penthouse</option>
            </select>
            {errors.unitType && (
              <p className="text-red-500 text-xs mt-1">{errors.unitType}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Select Budget
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none appearance-none bg-white"
            >
              <option value="">Select</option>
              <option>₹50L - ₹1Cr</option>
              <option>₹1Cr - ₹1.5Cr</option>
              <option>₹1.5Cr - ₹2Cr</option>
              <option>₹2Cr+</option>
              <option>₹3.11Cr - ₹3.50Cr</option>
              <option>₹3.96Cr - ₹4.35Cr</option>
              <option>₹4.08Cr - ₹4.49Cr</option>
              <option>₹6.17Cr - ₹6.38Cr</option>
            </select>
            {errors.budget && (
              <p className="text-red-500 text-xs mt-1">{errors.budget}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded py-2.5 font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Enquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
