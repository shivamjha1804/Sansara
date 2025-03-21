import React from "react";

const OverViewMainContent = () => {
  return (
    <div className="w-full md:w-4/6 mx-auto px-4 sm:px-6 -top-4 font-serif relative">
      <h1 className="text-2xl sm:text-3xl text-center font-normal tracking-wide mb-6 sm:mb-10 pt-4">
        Overview
      </h1>

      {/* Statistics Section */}
      <div className="text-center mb-6 text-blue-500">
        <div className="grid grid-cols-4 gap-4 sm:gap-8 mb-4 px-2 sm:px-10">
          {[
            { value: "17.4", label: "Acres" },
            { value: "5", label: "Towers" },
            { value: "G+40", label: "Storey" },
            { value: "70%", label: "Open-to-sky" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-xl sm:text-3xl font-medium">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-black">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 sm:gap-8 px-2 sm:px-10">
          {[
            { value: "2.5", label: "Acres of Elevated Landscape" },
            { value: "1000", label: "Ft. Riverfront Boulevard" },
            { value: "1300+", label: "Perennial trees" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-xl sm:text-3xl font-medium">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-black">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className="space-y-2 text-center mb-8 sm:mb-16 px-2 sm:px-2">
        <div className="border-t border-gray-200 pt-4 sm:pt-5">
          <p className="text-xs sm:text-sm">
            Discover Sansara, the tallest riverfront luxury residences, first of
            its kind in Howrah, offering breathtaking views of the Ganges. With
            the iconic Howrah bridge as the backdrop, Sansara is a perfect union
            of nature, family-centric spaces and community living. Here, luxury
            with simplicity seamlessly weave a haven for its discerning
            residents.
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl text-blue-700 font-medium mt-4">
          It's not just a place to live – it's a world of its own.
        </h2>

        <p className="text-xs sm:text-sm pb-1">
          A world where breathtaking residences are perfectly complemented by
          state-of-the-art recreational facilities. A world birthed amidst
          nature, nurtured by the green therapy of lush landscapes and the blue
          therapy of the tranquil Ganges and water features. A world of precious
          familytime.
        </p>

        <p className="text-xs sm:text-sm pb-1">
          Here, every day begins and ends with the serene beauty of the river.
          Because every home is East- facing, mindfully crafted to offer
          unobstructed views. And this thoughtful design is just one of the
          myriad things at Sansara that fill your moments with warmth and
          brightness, creating an uplifting atmosphere from dawn to dusk.
        </p>

        <p className="text-xs sm:text-sm pb-1">
          Sansara is a world that's mindfully designed to celebrate life.
          Bringing you a meeting point of fulfillment and desires. Of serenity
          and amenities. Of comfort and extravagance.
        </p>
      </div>
    </div>
  );
};

export default OverViewMainContent;
