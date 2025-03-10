import React, { useState, useEffect } from "react";
import image1 from "/image1.png";
import image2 from "/image2.png";
import image3 from "/image3.png";
import image4 from "/image4.png";
import image5 from "/image5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slider, setSlider] = useState(null);

  const data = [
    {
      title: image1,
      images: [image1, image2, image3, image4, image5],
    },
    {
      title: image2,
      images: [image1, image2, image3, image4, image5],
    },
    {
      title: image3,
      images: [image1, image2, image3, image4, image5],
    },
    {
      title: image4,
      images: [image1, image2, image3, image4, image5],
    },
    {
      title: image5,
      images: [image1, image2, image3, image4, image5],
    },
  ];

  const openModal = (index) => {
    setActiveIndex(index);
    setActiveImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveIndex(null);
    setActiveImageIndex(0);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    // When activeImageIndex changes, update the slider
    if (slider && activeIndex !== null) {
      slider.slickGoTo(activeImageIndex);
    }
  }, [activeImageIndex, slider, activeIndex]);

  const goToNextImage = () => {
    if (activeIndex !== null) {
      const nextIndex =
        (activeImageIndex + 1) % data[activeIndex].images.length;
      setActiveImageIndex(nextIndex);
    }
  };

  const goToPreviousImage = () => {
    if (activeIndex !== null) {
      const prevIndex =
        (activeImageIndex - 1 + data[activeIndex].images.length) %
        data[activeIndex].images.length;
      setActiveImageIndex(prevIndex);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: activeImageIndex,
    arrows: true,
    adaptiveHeight: true,
    beforeChange: (oldIndex, newIndex) => {
      setActiveImageIndex(newIndex);
    },
  };

  return (
    <section className="w-full h-screen max-w-6xl mx-auto p-4">
      <h4 className="text-center text-3xl font-semibold mb-4">Gallery</h4>

      {/* Desktop layout (md and up) */}
      <div className="hidden md:flex gap-4 justify-center h-[450px] mt-6">
        {data.map((item, index) => (
          <div
            key={`desktop-${index}`}
            className={`relative shadow-lg rounded-lg overflow-hidden transition-all duration-500 cursor-pointer flex 
              ${activeIndex === index ? "flex-[5]" : "flex-[1]"}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => openModal(index)}
          >
            <img
              src={item.title}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
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
            onClick={() => openModal(index)}
          >
            <img
              src={item.title}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Fixed Modal */}
      {isModalOpen && activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative bg-white rounded-lg w-full max-w-4xl overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-20 text-white bg-black bg-opacity-60 p-2 rounded-full hover:bg-opacity-80 transition-all w-8 h-8 flex items-center justify-center"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="p-4 pb-2">
              <h3 className="text-xl font-bold mb-1 text-center">
                {`Gallery ${activeIndex + 1}`}
              </h3>
            </div>

            {/* Using Slider component instead of manual navigation */}
            <div className="w-full px-8 pb-4">
              <Slider ref={(slider) => setSlider(slider)} {...sliderSettings}>
                {data[activeIndex].images.map((img, idx) => (
                  <div key={`slide-${idx}`} className="outline-none">
                    <div className="w-full h-80 flex items-center justify-center">
                      <img
                        src={img}
                        alt={`Image ${idx + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Enhanced footer with thumbnails */}
            <div className="bg-gray-100 p-4 border-t">
              <p className="text-sm text-gray-600 text-center mb-2">
                {`Image ${activeImageIndex + 1} of ${
                  data[activeIndex].images.length
                }`}
              </p>

              {/* Thumbnail navigation */}
              <div className="flex justify-center space-x-2 overflow-x-auto py-2">
                {data[activeIndex].images.map((img, idx) => (
                  <div
                    key={`thumb-${idx}`}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-12 rounded cursor-pointer transition-all ${
                      activeImageIndex === idx
                        ? "ring-2 ring-blue-500 opacity-100 scale-105"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
