import React from "react";

{
  /* Pricing Section */
}

const Price = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-center text-blue-700 font-medium mb-4 pb-2 border-b border-blue-700 w-full max-w-lg">
        Pricing (Inclusive of GST & extra charges)
      </h2>

      <div className="grid grid-cols-2 gap-40">
        <div className="-ml-10">
          <div className="py-4 font-medium text-lg decoration-1 border-b border-gray-200 pt-1">
            3BHK
          </div>
          <div className="py-4 font-medium text-lg decoration-1 border-b border-gray-200 pt-1">
            4BHK
          </div>
          <div className="py-4 font-medium text-lg decoration-1">
            5BHK Duplex
          </div>
        </div>
        <div>
          <div className="py-4 text-lg decoration-1 border-b border-gray-200 pt-1">
            3.5 Cr Onwards
          </div>
          <div className="py-4 text-lg decoration-1 border-b border-gray-200 pt-1">
            3.7 Cr Onwards
          </div>
          <div className="py-4 text-lg decoration-1">5.79 Cr Onwards</div>
        </div>
      </div>
    </div>
  );
};
export default Price;
