import React, { useState } from "react";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Using placeholder images since we can't import external images
  const data = [
    { title: "CORPORATE CLOTH" },
    { title: "OFFICE CLOTH" },
    { title: "HOME CLOTH" },
    { title: "CASUAL CLOTH" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto p-4">
      <div className="flex gap-4 justify-center h-64 mt-6">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative shadow-lg rounded-lg overflow-hidden transition-all duration-500 cursor-pointer
              ${activeIndex === index ? "w-3/5" : "w-1/5"} h-full`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Using placeholder image */}
            <img
              src={`/api/placeholder/800/600?text=${item.title}`}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 transition-opacity duration-300">
              <h3 className="font-bold text-center">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
