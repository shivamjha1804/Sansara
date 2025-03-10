import React, { useState } from "react";

const Unitplans = () => {
  const [selectedPlan, setSelectedPlan] = useState("3BHK");
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [enquiryType, setEnquiryType] = useState("Select");

  const planTypes = ["3BHK", "4BHK", "5BHK DUPLEX"];

  // Floor plan images and unit details
  const floorPlanImages = {
    "3BHK": {
      unit1: {
        name: "Unit-A-3BHK",
        image: "./unit-A-3BHK-amp.jpg",
        size: "1450 sq.ft",
      },
      unit2: {
        name: "Unit-C-3BHK",
        image: "./unit-C-3bhk-amp.jpg",
        size: "1450 sq.ft",
      },
    },
    "4BHK": {
      unit1: {
        name: "Unit-B-4BHK",
        image: "./unit-B-4bhk-amp.jpg",
        size: "1850 sq.ft",
      },
      unit2: {
        name: "Unit-D-4BHK-Study",
        image: "./unit-D-4BHK-study-amp.jpg",
        size: "2100 sq.ft",
      },
    },
    "5BHK DUPLEX": {
      unit1: {
        name: "Unit-C-5BHK-Duplex-Lower",
        image: "./unit-C-5bhk-duplex-lower-amp.jpg",
        size: "2800 sq.ft",
      },
      unit2: {
        name: "Unit-C-5BHK-Duplex-Upper",
        image: "./unit-C-5BHK-Duplex-Upper-amp.jpg",
        size: "2800 sq.ft",
      },
    },
  };

  return (
    <div
      className="min-h-screen w-full max-w-6xl mx-auto overflow-hidden relative py-6"
      style={{
        backgroundImage: `url("./ImagePlan.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main container */}
      <div className="w-full h-full mx-auto">
        {/* Centered Heading for both sections */}
        <div className="w-full pt-6 pb-4 rounded-t-lg text-center mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Unit Plans
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Luxury 3, 4 and 5 BHK Homes
          </p>
        </div>

        {/* Content Container with left-right split */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Section - Unit Plan Content */}
          <div className="w-full lg:w-1/2 p-4 lg:p-6 lg:rounded-bl-lg">
            {/* Plan type tabs */}
            <div className="flex justify-center mb-6">
              {planTypes.map((plan) => (
                <button
                  key={plan}
                  className={`px-4 py-2 text-sm focus:outline-none transition-all duration-300 ${
                    selectedPlan === plan
                      ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={() => {
                    setSelectedPlan(plan);
                    setSelectedUnit(null); // Reset unit selection when plan changes
                  }}
                >
                  {plan}
                </button>
              ))}
            </div>

            {/* Unit selection */}
            <div className="mb-6">
              <div className="text-lg font-medium text-gray-700 mb-3 text-center">
                Select Unit
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    selectedUnit === "unit1"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedUnit("unit1")}
                >
                  {floorPlanImages[selectedPlan].unit1.name}
                </button>
                <button
                  className={`px-6 py-2 rounded-md transition-all duration-300 ${
                    selectedUnit === "unit2"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedUnit("unit2")}
                >
                  {floorPlanImages[selectedPlan].unit2.name}
                </button>
              </div>
            </div>

            {/* Floor plan image and details */}
            <div className="mt-4">
              {selectedUnit ? (
                <div className="p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-medium mb-3 text-blue-600 text-center">
                    {floorPlanImages[selectedPlan][selectedUnit].name}
                  </h3>
                  <div className="flex justify-center">
                    <img
                      src={floorPlanImages[selectedPlan][selectedUnit].image}
                      alt={`${floorPlanImages[selectedPlan][selectedUnit].name} Floor Plan`}
                      className="max-w-full h-auto border border-gray-200 rounded"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                      Download Plan
                    </button>
                    <div className="text-sm text-gray-600 font-medium">
                      Size: {floorPlanImages[selectedPlan][selectedUnit].size}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 rounded-lg border border-dashed border-gray-300 flex items-center justify-center min-h-[250px]">
                  <p className="text-gray-500">
                    Please select a unit to view floor plan
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Only Enquiry Form */}
          <div className="w-full lg:w-1/2 p-4 lg:p-6 rounded-b-lg lg:rounded-br-lg lg:rounded-bl-none">
            <div className="bg-blue-50 p-6 shadow-md rounded-lg h-full">
              <h3 className="text-lg font-medium mb-1 text-gray-800">
                Real Estate Enquiry Form
              </h3>
              <p className="text-xs text-gray-600 mb-6">
                Fill in your details and we will get in touch with you as soon
                as possible
              </p>

              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Enquiry Type
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                  >
                    <option>Select</option>
                    <option>Sales</option>
                    <option>Rental</option>
                    <option>Information</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 text-gray-700">
                    Your Information
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3 mb-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full sm:w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="E-Mail Address"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <textarea
                    placeholder="Your Message (Optional)"
                    rows="3"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>

                  <button className="w-full bg-blue-600 text-white rounded py-2 font-medium hover:bg-blue-700 transition-colors">
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unitplans;
