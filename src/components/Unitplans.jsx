import React, { useState } from "react";

const Unitplans = () => {
  const [selectedPlan, setSelectedPlan] = useState("3BHK");
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [enquiryType, setEnquiryType] = useState("Select");

  const planTypes = ["3BHK", "4BHK", "5BHK DUPLEX"];

  // Updated floor plan images and unit names to match requirements
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
        image: "./unit-D-4BHK-study-amp.jpg", // Fixed the missing file extension
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
      className="flex h-screen w-full flex-col md:flex-row max-w-6xl mx-auto overflow-hidden relative"
      style={{
        backgroundImage: `url("./ImagePlan.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main content - on top of the background */}
      <div className="w-full mx-auto relative bg-white/80 backdrop-blur-sm">
        <h2 className="text-center text-3xl mt-3 font-bold text-gray-800">
          Unit Plans
        </h2>
        <p className="mt-1 text-sm text-gray-600 text-center">
          Luxury 3, 4 and 5 BHK Homes
        </p>

        {/* Left section - Unit Plans */}
        <div className="w-full p-4 justify-center items-center text-center">
          {/* Plan type tabs */}
          <div className="flex justify-center mb-4">
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
          {selectedPlan && (
            <div className="mb-4">
              <div className="text-lg font-medium text-gray-700 mb-2">
                Select Unit
              </div>
              <div className="flex justify-center gap-4">
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
          )}

          {/* Floor plan image and details */}
          <div className="pt-3 gap-7 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col items-center">
              {selectedUnit ? (
                <>
                  <div className="bg-white p-4 rounded-lg shadow-md w-full">
                    <h3 className="text-lg font-medium mb-2 text-blue-600">
                      {floorPlanImages[selectedPlan][selectedUnit].name}
                    </h3>
                    <img
                      src={floorPlanImages[selectedPlan][selectedUnit].image}
                      alt={`${floorPlanImages[selectedPlan][selectedUnit].name} Floor Plan`}
                      className="max-w-full h-auto border border-gray-200 rounded"
                    />
                    <div className="mt-3 flex justify-between">
                      <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                        Download Plan
                      </button>
                      <div className="text-sm text-gray-600">
                        {floorPlanImages[selectedPlan][selectedUnit].size}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-white/50 p-8 rounded-lg border border-dashed border-gray-300 w-full flex items-center justify-center">
                  <p className="text-gray-500">
                    Please select a unit to view floor plan
                  </p>
                </div>
              )}
            </div>

            {/* Right section - Enquiry Form */}
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-lg font-medium mb-1 text-gray-800">
                  Real Estate Enquiry Form
                </h3>
                <p className="text-xs text-gray-600 mb-4">
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
                      Information
                    </label>
                    <div className="flex gap-3 mb-2">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="E-Mail Address"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-6 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <button className="w-full bg-blue-600 text-white rounded py-2 font-medium hover:bg-blue-700 transition-colors">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unitplans;
