import React, { useState } from "react";
import image1 from "../../public/image5.png";
import image2 from "../../public/image1.png";
import image3 from "../../public/image2.png";
import image4 from "../../public/image3.png";
import image5 from "../../public/image4.png";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { title: image2 },
    { title: image1 },
    { title: image3 },
    { title: image4 },
    { title: image5 },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto p-4">
      <h4 className="text-center text-3xl">Gallery</h4>

      {/* Desktop layout (md and up) */}
      <div className="hidden md:flex gap-4 justify-center h-[500px] mt-6">
        {data.map((item, index) => (
          <div
            key={`desktop-${index}`}
            className={`relative shadow-lg rounded-lg overflow-hidden transition-all duration-500 cursor-pointer flex 
              ${activeIndex === index ? "flex-[5]" : "flex-[1]"}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <img
              src={item.title}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Mobile layout (smaller than md) */}
      <div className="flex md:hidden flex-col gap-4 mt-6">
        {data.map((item, index) => (
          <div
            key={`mobile-${index}`}
            className="relative shadow-lg rounded-lg overflow-hidden h-[400px] cursor-pointer"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <img
              src={item.title}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-contain"
            />
            {activeIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{`Image ${
                    index + 1
                  }`}</h3>
                  <p className="text-sm">Click to close</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
