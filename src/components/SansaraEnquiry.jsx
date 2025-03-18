import React, { useState, useEffect } from "react";
import axios from "axios";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import countryDialCodes from "country-telephone-data";

// Register locale data
countries.registerLocale(enLocale);
const countryOptions = countryDialCodes.allCountries.map((country) => ({
  name: country.iso2
    ? countries.getName(country.iso2.toUpperCase(), "en")
    : country.name,
  code: `+${country.dialCode}`,
  iso2: country.iso2,
}));

// Form options
const unitTypeOptions = ["3 BHK", "4 BHK", "5 BHK", "5 BHK Duplex"];
const budgetOptions = [
  "₹3.11 Cr - ₹3.50 Cr",
  "₹3.96 Cr - ₹4.35 Cr",
  "₹4.08 Cr - ₹4.49 Cr",
  "₹6.17 Cr - ₹6.38 Cr",
];

const SansaraEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    countryCode: "+91", // Default country code
    unitType: "",
    budget: "",
  });

  const [showNameOptions, setShowNameOptions] = useState(false);
  const [showCountryOptions, setShowCountryOptions] = useState(false);
  const [showUnitTypeOptions, setShowUnitTypeOptions] = useState(false);
  const [showBudgetOptions, setShowBudgetOptions] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  // Automatically set budget based on unit type
  useEffect(() => {
    switch (formData.unitType) {
      case "3 BHK":
        setFormData((prev) => ({ ...prev, budget: "₹3.11 Cr - ₹3.50 Cr" }));
        break;
      case "4 BHK":
        setFormData((prev) => ({ ...prev, budget: "₹3.96 Cr - ₹4.35 Cr" }));
        break;
      case "5 BHK":
        setFormData((prev) => ({ ...prev, budget: "₹4.08 Cr - ₹4.49 Cr" }));
        break;
      case "5 BHK Duplex":
        setFormData((prev) => ({ ...prev, budget: "₹6.17 Cr - ₹6.38 Cr" }));
        break;
      default:
        setFormData((prev) => ({ ...prev, budget: "" }));
        break;
    }
  }, [formData.unitType]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle dropdown selection
  const selectOption = (field, value, additionalData = null) => {
    if (field === "country" && additionalData) {
      setFormData({
        ...formData,
        [field]: value,
        countryCode: additionalData,
      });
    } else {
      setFormData({
        ...formData,
        [field]: value,
      });
    }

    // Close the dropdown after selection
    switch (field) {
      case "country":
        setShowCountryOptions(false);
        break;
      case "unitType":
        setShowUnitTypeOptions(false);
        break;
      case "budget":
        setShowBudgetOptions(false);
        break;
      default:
        break;
    }
  };

  // Form validation
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

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Prepare API data
        const apiData = {
          fullName: formData.name,
          emailAddress: formData.email,
          country_Code: formData.countryCode,
          mobileNumber: formData.phone,
          unit_type: formData.unitType,
          budget: formData.budget,
          utm_source: "google",
          utm_medium: "search",
          utm_campaign: "Sansara Landing Page",
          utm_adgroup: "",
          utm_adcopy: "",
          campaign_code: "701S200000GkDM7",
          projectName: "Sansara Phase I",
          webbannerSource: "https://pssansara.com/",
        };

        // Make API call
        const response = await axios.post(
          "https://psgroup.in/API/enqForm",
          apiData,
          {
            headers: {
              access_token:
                "g45#$312@#pk$#@!gshs*%$#@jkpg45#$312@#pk$#@!gshs*%$#@jkp",
            },
          }
        );

        console.log("API Response:", response.data);

        // Set form as submitted if API call is successful
        setIsFormSubmitted(true);

        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          country: "",
          phone: "",
          countryCode: "+91",
          unitType: "",
          budget: "",
        });
      } catch (error) {
        console.error("API Error:", error);
        setApiError(
          "There was an error submitting your enquiry. Please try again later."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div
      className="w-full bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: "url('./findYourPerfect.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl mx-auto flex justify-center flex-col items-center p-8 rounded-lg">
        <h2 className="text-3xl text-white text-center mb-2 font-bold">
          Find Your Perfect Home
        </h2>
        <p className="text-white text-center mb-8">
          Enquire Now About Sansara!
        </p>

        {isFormSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center">
            Thank you for your enquiry! We will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full p-2 bg-transparent border-b border-white text-white placeholder-white outline-none"
                />
                {errors.name && (
                  <p className="text-white text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full p-2 bg-transparent border-b border-white text-white placeholder-white outline-none"
                />
                {errors.email && (
                  <p className="text-white text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Country Field */}
              <div className="relative">
                <div
                  className="w-full p-2 bg-transparent border-b border-white text-white flex justify-between items-center cursor-pointer"
                  onClick={() => setShowCountryOptions(!showCountryOptions)}
                >
                  <span
                    className={
                      formData.country ? "text-white" : "text-white opacity-80"
                    }
                  >
                    {formData.country || "Select Country"}
                  </span>
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
                {showCountryOptions && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
                    <ul className="py-1 overflow-auto text-base">
                      {countryOptions.map((country, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                          onClick={() =>
                            selectOption("country", country.name, country.code)
                          }
                        >
                          {country.name} ({country.code})
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {errors.country && (
                  <p className="text-white text-xs mt-1">{errors.country}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="relative">
                <div className="flex">
                  <div className="w-1/4 p-2 bg-transparent border-b border-white text-white">
                    {formData.countryCode || "+91"}
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-3/4 p-2 bg-transparent border-b border-white text-white placeholder-white outline-none"
                  />
                </div>
                {errors.phone && (
                  <p className="text-white text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Unit Type Field */}
              <div className="relative">
                <div
                  className="w-full p-2 bg-transparent border-b border-white text-white flex justify-between items-center cursor-pointer"
                  onClick={() => setShowUnitTypeOptions(!showUnitTypeOptions)}
                >
                  <span
                    className={
                      formData.unitType ? "text-white" : "text-white opacity-80"
                    }
                  >
                    {formData.unitType || "Select Unit Type"}
                  </span>
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
                {showUnitTypeOptions && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
                    <ul className="py-1 overflow-auto text-base">
                      {unitTypeOptions.map((unitType, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                          onClick={() => selectOption("unitType", unitType)}
                        >
                          {unitType}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {errors.unitType && (
                  <p className="text-white text-xs mt-1">{errors.unitType}</p>
                )}
              </div>

              {/* Budget Field */}
              <div className="relative">
                <div
                  className="w-full p-2 bg-transparent border-b border-white text-white flex justify-between items-center cursor-pointer"
                  onClick={() => setShowBudgetOptions(!showBudgetOptions)}
                >
                  <span
                    className={
                      formData.budget ? "text-white" : "text-white opacity-80"
                    }
                  >
                    {formData.budget || "Select Budget"}
                  </span>
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
                {showBudgetOptions && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
                    <ul className="py-1 overflow-auto text-base">
                      {budgetOptions.map((budget, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                          onClick={() => selectOption("budget", budget)}
                        >
                          {budget}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {errors.budget && (
                  <p className="text-white text-xs mt-1">{errors.budget}</p>
                )}
              </div>
            </div>

            {/* API Error Message */}
            {apiError && (
              <div className="text-red-300 text-sm mb-4 text-center">
                {apiError}
              </div>
            )}

            {/* Terms and Conditions */}
            <div className="text-white text-xs mb-6 text-center max-w-2xl mx-auto">
              <p>
                I agree that by clicking on 'Submit,' I am explicitly soliciting
                a call or message from 'PS Group' or its associates on my mobile
                number to assist me. I also agree to the{" "}
                <a href="#" className="underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-white text-blue-500 py-2 px-6 rounded hover:bg-blue-100 transition duration-300 font-medium ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SansaraEnquiryForm;
