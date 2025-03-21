import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
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
      text: "I have booked the project because PS Group is building it.",
      image: "./PawanKrPansari.jpg",
      name: "Pawan Pansari",
    },
  ];

  const [hoveredId, setHoveredId] = useState(null); // For desktop hover effect
  const [activeTestimonialId, setActiveTestimonialId] = useState(null); // For mobile click effect

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on mobile
        },
      },
    ],
  };

  const handleTestimonialClick = (id) => {
    // Toggle the active testimonial
    if (activeTestimonialId === id) {
      setActiveTestimonialId(null); // Hide text if the same testimonial is clicked again
    } else {
      setActiveTestimonialId(id); // Show text for the clicked testimonial
    }
  };

  return (
    <div className="container mx-auto px-7 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif mb-2">Testimonials</h2>
        <p className="text-gray-600">
          Building trust, one happy homeowner at a time.
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setHoveredId(testimonial.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={testimonial.image}
              alt="Testimonial"
              className="w-full h-full object-cover" // Removed fixed height
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 transition-opacity duration-300 ${
                hoveredId === testimonial.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-white text-center mb-1">{testimonial.text}</p>
              <p className="text-white font-bold">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden -mx-4">
        {" "}
        {/* Remove padding for mobile */}
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300"
              onClick={() => handleTestimonialClick(testimonial.id)} // Handle click
            >
              <img
                src={testimonial.image}
                alt="Testimonial"
                className="w-full h-full object-cover"
              />
              {/* Conditionally render text based on activeTestimonialId */}
              {activeTestimonialId === testimonial.id && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4">
                  <p className="text-white text-center mb-1">
                    {testimonial.text}
                  </p>
                  <p className="text-white font-bold">{testimonial.name}</p>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
