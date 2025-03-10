import React, { useState } from "react";

const Unitplans = () => {
  const [selectedPlan, setSelectedPlan] = useState("4 BHK+STUDY");
  const [enquiryType, setEnquiryType] = useState("Select");

  const planTypes = ["3BHK", "4 BHK", "4 BHK+STUDY", "5BHK DUPLEX"];

  return (
    <div
      className="flex h-screen w-full flex-col md:flex-row w-full max-w-6xl mx-auto overflow-hidden relative"
      style={{
        backgroundImage: `url("./ImagePlan.png")`, // Removed the extra ')'
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents repeating
      }}
    >
      {/* Main content - on top of the background */}
      <div className="w-full  mx-auto  relative">
        <h2 className="text-center text-3xl mt-3">Unit Plans</h2>
        <p className="  mt-1 text-sm text-gray-600 text-center">
          2,3 and 5 BHK Homes
        </p>

        {/* Left section - Unit Plans */}
        <div className="w-full p-4 justify-center items-center text-center">
          {/* Plan type tabs */}
          <div className="flex justify-center md:w-1/2">
            {planTypes.map((plan) => (
              <button
                key={plan}
                className={`px-4 py-2 text-sm focus:outline-none ${
                  selectedPlan === plan
                    ? "border-b-2 border-orange-500 text-orange-500 font-medium"
                    : "text-gray-700"
                }`}
                onClick={() => setSelectedPlan(plan)}
              >
                {plan}
              </button>
            ))}
          </div>

          {/* Floor plan image and details */}
          <div className=" pt-3 gap-7  flex">
            <div className="  flex flex-col items-center">
              <img
                src="./UnitplansImg.png"
                alt="Floor Plan"
                className="max-w-full h-5/6 bg-white"
              />
            </div>
            {/* Right section - Enquiry Form */}
            <div className="w-full md:w-1/2 p-4 ">
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-lg font-medium mb-1">
                  Real Estate Enquiry Form
                </h3>
                <p className="text-xs text-gray-600 mb-4">
                  Fill in your details and we will get in touch with you as soon
                  as possible
                </p>

                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Enquiry Type
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
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
                    <label className="block text-sm font-medium mb-1">
                      Information
                    </label>
                    <div className="flex gap-3 mb-2">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="E-Mail Address"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-6"
                    />

                    <button className="w-full bg-blue-500 text-white rounded py-2 font-medium">
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
