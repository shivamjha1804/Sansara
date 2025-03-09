import React, { useState } from "react";

const EnquireForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    unitType: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        country: "",
        phone: "",
        unitType: "",
        budget: "",
      });

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  // Sample data for dropdowns
  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "India",
    "Singapore",
    "UAE",
  ];
  const unitTypes = ["Apartment", "Villa", "Penthouse", "Townhouse", "Studio"];
  const budgetRanges = [
    "$100K - $300K",
    "$300K - $500K",
    "$500K - $800K",
    "$800K - $1M",
    "Above $1M",
  ];

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('./EnquireImg.png')",
          filter: "brightness(0.7)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Find Your Perfect Home
          </h1>
          <div className="w-64 h-px bg-white mx-auto my-4"></div>
          <p className="text-white text-lg">Enquire Now About Sansara!</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="relative">
            <select
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white border border-white border-opacity-30 rounded px-4 py-3 appearance-none"
              required
            >
              <option value="" disabled>
                Name
              </option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white border border-white border-opacity-30 rounded px-4 py-3"
            required
          />

          <div className="relative">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white border border-white border-opacity-30 rounded px-4 py-3 appearance-none"
              required
            >
              <option value="" disabled>
                Select Country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white border border-white border-opacity-30 rounded px-4 py-3"
            required
          />

          <div className="relative">
            <select
              name="unitType"
              value={formData.unitType}
              onChange={handleChange}
              className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white border border-white border-opacity-30 rounded px-4 py-3 appearance-none"
              required
            >
              <option value="" disabled>
                Select Unit Type
              </option>
              {unitTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <div className="relative">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white border border-white border-opacity-30 rounded px-4 py-3 appearance-none"
              required
            >
              <option value="" disabled>
                Select Budget
              </option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>

            {submitStatus === "success" && (
              <p className="mt-4 text-green-400 font-semibold">
                Thank you for your interest! We will contact you shortly.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquireForm;
