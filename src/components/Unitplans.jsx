import React, { useState } from "react";

const Unitplans = () => {
  const [selectedPlan, setSelectedPlan] = useState("3BHK"); // Track the selected plan
  const [selectedUnit, setSelectedUnit] = useState(null); // Track the selected unit

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
            {/* Plan type selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Select Plan Type
              </label>
              <div className="flex flex-wrap gap-2">
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
                      setSelectedUnit(null); // Reset unit selection when plan changes
                    }}
                  >
                    {plan}
                  </button>
                ))}
              </div>
            </div>

            {/* Display units for the selected plan */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4 text-gray-700">
                Available Units
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {floorPlanImages[selectedPlan].map((unit) => (
                  <div
                    key={unit.name}
                    className={`p-4 rounded-lg shadow-md cursor-pointer ${
                      selectedUnit === unit.name
                        ? "border-2 border-blue-600"
                        : "border border-gray-200"
                    }`}
                    onClick={() => setSelectedUnit(unit.name)}
                  >
                    <h4 className="text-md font-medium text-gray-800 mb-2">
                      {unit.name}
                    </h4>
                    <div className="flex justify-center">
                      <img
                        src={unit.image}
                        alt={`${unit.name} Floor Plan`}
                        className="max-w-full h-auto rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Display selected unit details */}
            {selectedUnit && (
              <div className="mt-6 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-3 text-blue-600 text-center">
                  {selectedUnit}
                </h3>
                <div className="flex justify-center">
                  <img
                    src={
                      floorPlanImages[selectedPlan].find(
                        (unit) => unit.name === selectedUnit
                      )?.image
                    }
                    alt={`${selectedUnit} Floor Plan`}
                    className="max-w-full h-auto border border-gray-200 rounded"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Section - Only Enquiry Form */}
          <div className="w-full lg:w-1/2 p-4 lg:p-6 rounded-b-lg lg:rounded-br-lg lg:rounded-bl-none">
            <div className="bg-white p-6 shadow-md rounded-lg h-full">
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
                  <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
