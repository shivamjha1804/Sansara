import React from "react";

const Overview = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-serif">
      {/* Overview Title */}
      <h1 className="text-3xl text-center font-normal tracking-wide mb-12">
        OVERVIEW
      </h1>

      {/* Key Features */}
      <div className="grid grid-cols-6 text-center mb-12 gap-4">
        <div>
          <div className="text-xl font-medium">17.4</div>
          <div className="text-sm">Acres</div>
        </div>
        <div>
          <div className="text-xl font-medium">5</div>
          <div className="text-sm">Towers</div>
        </div>
        <div>
          <div className="text-xl font-medium">G+40</div>
          <div className="text-sm">Storey</div>
        </div>
        <div>
          <div className="text-xl font-medium">70%</div>
          <div className="text-sm">Open-to-sky</div>
        </div>
        <div>
          <div className="text-xl font-medium">2.5</div>
          <div className="text-sm">Acres of Elevated Landscape</div>
        </div>
        <div>
          <div className="text-xl font-medium">1000</div>
          <div className="text-sm">Ft. Riverfront Boulevard</div>
        </div>
      </div>

      {/* Description Paragraphs */}
      <div className="space-y-12 text-center mb-16">
        <div className="border-t border-gray-200 pt-12">
          <p className="text-sm">
            Discover Sansara, the tallest riverfront luxury residences, first of
            its kind in Howrah, offering breathtaking views of the Ganges. With
            the iconic Howrah bridge as the backdrop, Sansara is a perfect union
            of nature, family-centric spaces and community living. Here, luxury
            with simplicity seamlessly weave a haven for its discerning
            residents.
          </p>
        </div>

        <h2 className="text-xl text-blue-700 font-medium">
          It's not just a place to live – it's a world of its own.
        </h2>

        <p className="text-sm">
          A world where breathtaking residences are perfectly complemented by
          state-of-the-art recreational facilities. A world birthed amidst
          nature, nurtured by the green therapy of lush landscapes and the blue
          therapy of the tranquil Ganges and water features. A world of precious
          familytime.
        </p>

        <p className="text-sm">
          Here, every day begins and ends with the serene beauty of the river.
          Because every home is East- facing, mindfully crafted to offer
          unobstructed views. And this thoughtful design is just one of the
          myriad things at Sansara that fill your moments with warmth and
          brightness, creating an uplifting atmosphere from dawn to dusk.
        </p>

        <p className="text-sm">
          Sansara is a world that's mindfully designed to celebrate life.
          Bringing you a meeting point of fulfillment and desires. Of serenity
          and amenities. Of comfort and extravagance.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="mb-8 flex flex-col items-center">
        <h2 className="text-2xl text-center text-blue-700 font-medium mb-4 pb-2 border-b border-blue-700 w-full max-w-md">
          Pricing (Inclusive of GST & extra charges)
        </h2>

        <div className="mt-2 w-full max-w-md">
          {/* 3BHK Row */}
          <div className="grid grid-cols-2 text-center ">
            <div className="py-4 px-6 font-medium text-lg decoration-1">
              3BHK
            </div>
            <div className="py-4 px-6 text-lg decoration-1">3.5 Cr Onwards</div>
          </div>

          {/* 4BHK Row */}
          <div className="grid grid-cols-2 text-center">
            <div className="py-4 px-6 font-medium text-lg decoration-1">
              4BHK
            </div>
            <div className="py-4 px-6 text-lg decoration-1">3.7 Cr Onwards</div>
          </div>

          {/* 5BHK Row */}
          <div className="grid grid-cols-2 text-center">
            <div className="py-4 px-6 font-medium text-lg decoration-1">
              5BHK Duplex
            </div>
            <div className="py-4 px-6 text-lg decoration-1">
              5.79 Cr Onwards
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
