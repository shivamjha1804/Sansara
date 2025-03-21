import React, { useState } from "react";

const Unitplans = () => {
  // State for UI control
  const [selectedPlan, setSelectedPlan] = useState("3BHK");
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

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

  return (
    <div
      className="min-h-screen w-full max-w-6xl mx-auto overflow-hidden relative py-6"
      style={{
        backgroundImage: `url("./UnitPlanImg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main container */}
      <div className="w-full h-full mx-auto">
        {/* Centered Heading */}
        <div className="w-full pt-6 pb-4 rounded-t-lg text-center mb-0">
          <h2 className="text-2xl sm:text-3xl text-gray-800">Unit Plans</h2>
          <p className="mt-1 text-sm text-gray-600">
            Luxury 3, 4 and 5 BHK Homes
          </p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Unit Plans */}
          <div className="flex flex-col w-full h-full justify-center items-center animate-fadeIn">
            {/* Unit Plan Content - Full width and centered */}
            <div className="w-full max-w-6xl mx-auto p-4 lg:p-6 lg:rounded-bl-lg">
              {/* Plan type selection */}
              <div className="mb-6 text-center -mt-6">
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
              <div className="mt-6 w-full flex flex-col justify-center items-center">
                <h3 className="text-lg font-medium mb-4 text-gray-700 text-center -mt-3">
                  Available Units
                </h3>
                <div className="grid sm:grid-cols-2 gap-9 mx-auto max-w-4xl">
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
        </div>
      </div>

      {/* Modal for displaying the larger image */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 animate-fadeIn px-4">
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
