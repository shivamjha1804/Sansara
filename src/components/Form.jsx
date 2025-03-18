import React, { useState } from "react";
import ThankYouModal from "./ThankYouModal";
import axios from "axios";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import countryDialCodes from "country-telephone-data";

countries.registerLocale(enLocale);
const countryList = countryDialCodes.allCountries.map((country) => ({
  name: country.iso2
    ? countries.getName(country.iso2.toUpperCase(), "en")
    : country.name,
  code: `+${country.dialCode}`,
  iso2: country.iso2,
}));

const Form = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
  setFormData,
  closeEnquiryModal,
}) => {
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);

  const submitToAPI = async (formData) => {
    setIsSubmitting(true);
    setApiError(null);

    try {
      const selectedCountry = countryList.find(
        (country) => country.name === formData.country
      );
      const countryCode = selectedCountry ? selectedCountry.code : "";

      const apiData = {
        fullName: formData.name,
        emailAddress: formData.email,
        country_Code: countryCode,
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

      // Close the enquiry modal and show thank you modal
      if (closeEnquiryModal) {
        closeEnquiryModal();
      }
      setShowThankYouModal(true);
    } catch (error) {
      console.error("API Error:", error);
      setApiError(
        "There was an error submitting your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValid = handleSubmit(e);
    if (isValid !== false) {
      await submitToAPI(formData);
    }
  };

  const closeThankYouModal = () => {
    setShowThankYouModal(false);
    // Reset form after successful submission
    if (setFormData) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        unitType: "",
        budget: "",
      });
    }
  };

  // Function to update budget based on unitType
  const handleUnitTypeChange = (e) => {
    const { value } = e.target;
    let budget = "";

    switch (value) {
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

    setFormData((prev) => ({
      ...prev,
      unitType: value,
      budget: budget,
    }));
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-md mx-auto">
      <h3 className="text-lg font-medium mb-1 text-gray-800">
        Real Estate Enquiry
      </h3>
      <p className="text-xs text-gray-600 mb-4">
        Fill in your details and we will get in touch with you as soon as
        possible.
      </p>

      {apiError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {apiError}
        </div>
      )}

      {/* Scrollable Form Container */}
      <div className="max-h-[400px] overflow-y-auto">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Information
              </label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
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
                value={formData.email || ""}
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
                value={formData.phone || ""}
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
                value={formData.country || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none appearance-none bg-white"
              >
                <option value="">Select</option>
                {countryList
                  .filter((country) => country.name)
                  .map((country) => (
                    <option
                      key={country.code + country.iso2}
                      value={country.name}
                    >
                      {country.name} ({country.code})
                    </option>
                  ))}
              </select>
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">{errors.country}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Unit Type
              </label>
              <select
                name="unitType"
                value={formData.unitType || ""}
                onChange={handleUnitTypeChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none bg-white"
              >
                <option value="">Select</option>
                <option value="3BHK">3BHK</option>
                <option value="4BHK">4BHK</option>
                <option value="5BHK">5BHK</option>
                <option value="5BHK Duplex">5BHK Duplex</option>
              </select>
              {errors.unitType && (
                <p className="text-red-500 text-xs mt-1">{errors.unitType}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Budget Range
              </label>
              <input
                type="text"
                name="budget"
                value={formData.budget || ""}
                readOnly
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-100 cursor-not-allowed"
              />
              {errors.budget && (
                <p className="text-red-500 text-xs mt-1">{errors.budget}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${
                isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white rounded py-2.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>
          </div>
        </form>
      </div>

      {showThankYouModal && (
        <ThankYouModal onClose={closeThankYouModal} name={formData.name} />
      )}
    </div>
  );
};

export default Form;
