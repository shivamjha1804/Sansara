import React from "react";

const Price = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 md:py-12 -mt-24">
      {/* Heading */}
      <h2 className="text-[18px] md:text-3xl text-center text-black font-medium mb-4 pb-2 border-b border-black max-w-full">
        Pricing (Inclusive of GST & extra charges)
      </h2>

      {/* Mobile view - stacked layout */}
      <div className="w-full max-w-md block md:hidden">
        <div className="mb-6 flex justify-between">
          <div className="py-3 font-medium text-lg bg-gray-50 px-4 rounded-t-lg border-b border-gray-200">
            3BHK
          </div>
          <div className="py-3 text-lg px-4 bg-white rounded-b-lg font-bold text-blue-700">
            Rs. 3.11 Cr - 3.50 Cr
          </div>
        </div>

        <div className="mb-6 flex justify-between">
          <div className="py-3 font-medium text-lg bg-gray-50 px-4 rounded-t-lg border-b border-gray-200">
            4BHK
          </div>
          <div className="py-3 text-lg px-4 bg-white rounded-b-lg font-bold text-blue-700">
            Rs. 3.96 Cr - 4.35 Cr
          </div>
        </div>

        <div className="mb-6 flex justify-between">
          <div className="py-3 font-medium text-lg bg-gray-50 px-4 rounded-t-lg border-b border-gray-200">
            5BHK
          </div>
          <div className="py-3 text-lg px-4 bg-white rounded-b-lg font-bold text-blue-700">
            Rs. 4.08 Cr - 4.49 Cr
          </div>
        </div>

        <div className="mb-6 flex justify-between">
          <div className="py-3 font-medium text-lg bg-gray-50 px-4 rounded-t-lg border-b border-gray-200">
            5BHK Duplex
          </div>
          <div className="py-3 text-lg px-4 bg-white rounded-b-lg font-bold text-blue-700">
            Rs. 6.17 Cr - 6.38 Cr
          </div>
        </div>
      </div>

      {/* Tablet and desktop view - two column layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:gap-8 w-full max-w-2xl pl-16">
        <div>
          <div className="py-4 font-medium text-lg border-b border-gray-200">
            3BHK
          </div>
          <div className="py-4 font-medium text-lg border-b border-gray-200">
            4BHK
          </div>
          <div className="py-4 font-medium text-lg border-b border-gray-200">
            5BHK
          </div>
          <div className="py-4 font-medium text-lg">5BHK Duplex</div>
        </div>
        <div className=" pr-16">
          <div className="py-4 text-lg border-b border-gray-200 font-bold text-blue-700">
            Rs. 3.11 Cr - 3.50 Cr
          </div>
          <div className="py-4 text-lg border-b border-gray-200 font-bold text-blue-700">
            Rs. 3.96 Cr - 4.35 Cr
          </div>
          <div className="py-4 text-lg border-b border-gray-200 font-bold text-blue-700">
            Rs. 4.08 Cr - 4.49 Cr
          </div>
          <div className="py-4 text-lg font-bold text-blue-700">
            Rs. 6.17 Cr - 6.38 Cr
          </div>
        </div>
      </div>

      {/* Description */}
    </div>
  );
};

export default Price;
