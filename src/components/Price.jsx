import React from "react";

{
  /* Pricing Section */
}

const Price = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl text-center text-blue-700 font-medium mb-4 pb-2 border-b border-blue-700 max-w-full">
        Pricing (Inclusive of GST & extra charges)
      </h2>

      {/* Mobile view - stacked layout */}
      <div className="w-full max-w-md block md:hidden">
        <div className="mb-6">
          <div className="py-3 font-medium text-lg bg-gray-50 px-4 rounded-t-lg border-b border-gray-200">
            3BHK
          </div>
          <div className="py-3 text-lg px-4 bg-white rounded-b-lg font-bold text-blue-700">
            Rs. 3.11 Cr - 3.50 Cr
          </div>
        </div>

        <div className="mb-6">
          <div className="py-3 font-medium text-lg bg-gray-50 px-4 rounded-t-lg border-b border-gray-200">
            4BHK
          </div>
          <div className="py-3 text-lg px-4 bg-white rounded-b-lg font-bold text-blue-700">
            Rs. 3.96 Cr - 4.35 Cr
          </div>
        </div>
        <div className="mb-6">
          <div className="py-3 font-medium text-lg bg-gray-50 px-4 rounded-t-lg border-b border-gray-200">
            5BHK
          </div>
          <div className="py-3 text-lg px-4 bg-white rounded-b-lg font-bold text-blue-700">
            Rs. 4.08 Cr - 4.49 Cr
          </div>
        </div>

        <div className="mb-6">
          <div className="py-3 font-medium text-lg bg-gray-50 px-4 rounded-t-lg border-b border-gray-200">
            5BHK Duplex
          </div>
          <div className="py-3 text-lg px-4 bg-white rounded-b-lg font-bold text-blue-700">
            Rs. 6.17 Cr - 6.38 Cr
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
          <div className="py-4 font-medium text-lg decoration-1 border-b border-gray-200 pt-1">
            5BHK
          </div>
          <div className="py-4 font-medium text-lg decoration-1">
            5BHK Duplex
          </div>
        </div>
        <div>
          <div className="py-4 text-lg decoration-1 border-b border-gray-200 pt-1  ">
            Rs. 3.11 Cr - 3.5 Cr
          </div>
          <div className="py-4 text-lg decoration-1 border-b border-gray-200 pt-1 ">
            Rs. 3.96 Cr - 4.35 Cr
          </div>
          <div className="py-4 text-lg decoration-1 border-b border-gray-200 pt-1">
            Rs. 4.08 Cr - 4.49 Cr
          </div>
          <div className="py-4 text-lg decoration-1">Rs. 6.17 Cr - 6.38 Cr</div>
        </div>
      </div>
      <p className="text-center mt-12 px-60">
        At Sansara, life unfolds along the river with a riverside café, a
        shopping mall, and a temple within the community. The heritage-inspired
        ghats offer a peaceful retreat, while the state-of-the-art sports arena
        keeps you active. Every detail is designed for harmony, making Sansara a
        world of its own.
      </p>
    </div>
  );
};

export default Price;
