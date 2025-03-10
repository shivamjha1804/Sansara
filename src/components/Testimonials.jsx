import React from "react";

const Testimonials = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
      image: "./TestimonialsImg.png",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
      image: "./TestimonialsImg.png",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
      image: null,
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
      image: null,
    },
  ];

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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`${
              testimonial.image ? "bg-white" : "bg-gray-50"
            } rounded-lg overflow-hidden`}
          >
            {testimonial.image && (
              <div className="relative h-64 w-full">
                <img
                  src={testimonial.image}
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              {!testimonial.image && (
                <p className="text-gray-600">{testimonial.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
