import React, { useState } from "react";

const Testimonials = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
      image: "./virat-01.jpg",
      name: "John Doe",
      position: "CEO, Company",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
      image: "./virat-01.jpg",
      name: "Jane Smith",
      position: "Director, Organization",
    },
  ];

  // State to track which testimonial is being hovered
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Testimonial Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif mb-2">Testimonials</h2>
        <p className="text-gray-600">
          Lorem Ipsum Dolor Sit Amet prst Consectetur et toro
        </p>
      </div>

      {/* Testimonial Grid */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-28">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`${
              testimonial.image ? "bg-white" : "bg-gray-50"
            } rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl w-full md:w-auto`}
          >
            {testimonial.image && (
              <div
                className="relative h-64 w-full cursor-pointer"
                onMouseEnter={() => setHoveredId(testimonial.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={testimonial.image}
                  alt="Testimonial"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />

                {/* Overlay that appears on hover */}
                <div
                  className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 transition-opacity duration-300 ${
                    hoveredId === testimonial.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-white text-center mb-4">
                    {testimonial.text}
                  </p>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-white text-sm">{testimonial.position}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
