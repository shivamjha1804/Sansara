import React from "react";

{
  /* Pricing Section */
}

const Price = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl text-center text-blue-700 font-medium mb-4 pb-2 border-b border-blue-700 w-full max-w-lg">
        Pricing (Inclusive of GST & extra charges)
      </h2>

      {/* Mobile view - stacked layout */}
      <div className="w-full max-w-md block md:hidden">
        <div className="mb-6">
          <div className="py-3 font-medium text-lg bg-gray-50 px-4 rounded-t-lg border-b border-gray-200">
            3BHK
          </div>
          <div className="py-3 text-lg px-4 bg-white rounded-b-lg font-bold text-blue-700">
            3.5 Cr Onwards
          </div>
        </div>

        <div className="mb-6">
          <div className="py-3 font-medium text-lg bg-gray-50 px-4 rounded-t-lg border-b border-gray-200">
            4BHK
          </div>
          <div className="py-3 text-lg px-4 bg-white rounded-b-lg font-bold text-blue-700">
            3.7 Cr Onwards
          </div>
        </div>

        <div className="mb-6">
          <div className="py-3 font-medium text-lg bg-gray-50 px-4 rounded-t-lg border-b border-gray-200">
            5BHK Duplex
          </div>
          <div className="py-3 text-lg px-4 bg-white rounded-b-lg font-bold text-blue-700">
            5.79 Cr Onwards
          </div>
        </div>
      </div>

      {/* Tablet and desktop view - two column layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:gap-20 w-full max-w-xl">
        <div>
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
          <div className="py-4 text-lg decoration-1 border-b border-gray-200 pt-1  ">
            3.5 Cr Onwards
          </div>
          <div className="py-4 text-lg decoration-1 border-b border-gray-200 pt-1 ">
            3.7 Cr Onwards
          </div>
          <div className="py-4 text-lg decoration-1 ">5.79 Cr Onwards</div>
        </div>
      </div>
    </div>
  );
};

export default Price;
