import React, { useState } from "react";

const Testimonials = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      text: "Sansara by PS group is the best location by the Ganges offering calm atmosphere and beautiful views.",
      image: "./MahavirDugar.png",
      name: "Mahavir Dugar",
    },
    {
      id: 2,
      text: "Sansara is a one-of-a-kind Ganga-facing project, and is a world of its own.",
      image: "./PawanKrBansari.jpg",
      name: "Pawan Kr. Bansari",
    },
    {
      id: 3,
      text: "Sansara is a unique Ganga Facing apartment offering breathtaking views of the sunrise",
      image: "./RakeshGhiya.jpg",
      name: "Rakesh Ghiya",
    },
    {
      id: 4,
      text: "I have booked the project because PS Group is building it.",
      image: "./PawanKrPansari.jpg",
      name: "Pawan Pansari",
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
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-2">
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
                  <p className="text-white text-center mb-1">
                    {testimonial.text}
                  </p>
                  <p className="text-white font-bold">{testimonial.name}</p>
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
