import React from "react";

const Price = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 md:py-12 lg:py-16">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-blue-700 font-medium mb-6 pb-2 border-b-2 border-blue-700 max-w-full">
        Pricing (Inclusive of GST & Extra Charges)
      </h2>

      {/* Mobile View - Stacked Layout */}
      <div className="w-full max-w-md block md:hidden">
        {[
          { type: "3BHK", price: "Rs. 3.11 Cr - 3.50 Cr" },
          { type: "4BHK", price: "Rs. 3.96 Cr - 4.35 Cr" },
          { type: "5BHK", price: "Rs. 4.08 Cr - 4.49 Cr" },
          { type: "5BHK Duplex", price: "Rs. 6.17 Cr - 6.38 Cr" },
        ].map((item, index) => (
          <div
            key={index}
            className="mb-6 shadow-md rounded-lg overflow-hidden"
          >
            <div className="py-3 font-medium text-lg bg-gray-50 px-4 border-b border-gray-200">
              {item.type}
            </div>
            <div className="py-3 text-lg px-4 bg-white font-bold text-blue-700">
              {item.price}
            </div>
          </div>
        ))}
      </div>

      {/* Tablet and Desktop View - Flex Layout */}
      <div className="hidden md:flex md:flex-col md:space-y-4 w-full max-w-4xl">
        {[
          { type: "3BHK", price: "Rs. 3.11 Cr - 3.50 Cr" },
          { type: "4BHK", price: "Rs. 3.96 Cr - 4.35 Cr" },
          { type: "5BHK", price: "Rs. 4.08 Cr - 4.49 Cr" },
          { type: "5BHK Duplex", price: "Rs. 6.17 Cr - 6.38 Cr" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 border-b border-gray-200"
          >
            <div className="font-medium text-lg md:text-xl lg:text-2xl">
              {item.type}
            </div>
            <div className="text-lg md:text-xl lg:text-2xl text-blue-700 font-semibold">
              {item.price}
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-center mt-8 md:mt-12 lg:mt-16 px-4 md:px-8 lg:px-12 max-w-4xl text-sm md:text-base lg:text-lg text-gray-600">
        At Sansara, life unfolds along the river with a riverside café, a
        shopping mall, and a temple within the community. The heritage-inspired
        ghats offer a peaceful retreat, while the state-of-the-art sports arena
        keeps you active. Every detail is designed for harmony, making Sansara a
        world of its own.
      </p>
    </div>
  );
};

export default Price;
