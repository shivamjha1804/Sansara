import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalIndex, setModalIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slider, setSlider] = useState(null);

  // Sample data - in a real app, you would use your actual image paths
  const data = [
    {
      main: {
        path: "/image1.jpg",
        title: "Elevation Day View",
      },
      images: [
        {
          path: "/image1.jpg",
          tile: "Elevation Day View",
        },
        {
          path: "/image2.jpg",
          title: "Elevation Across The Ganges",
        },
        {
          path: "/image3.jpg",
          title: "Ghats",
        },
        {
          path: "/image4.jpg",
          title: "Podium View",
        },
        {
          path: "/image5.jpg",
          title: "The River And Water Cascade",
        },
        {
          path: "/image6.jpg",
          title: "Family Lounge",
        },
        {
          path: "/image7.jpg",
          title: "Floating Deck",
        },
        {
          path: "/image8.jpg",
          title: "Open Lawn & Amphithetare",
        },
        {
          path: "/image9.jpg",
          title: "Parent Deck",
        },
        {
          path: "/image10.jpg",
          title: "Podium Side Walkway",
        },
        {
          path: "/image11.jpg",
          title: "Senior Citizens Recreation Area",
        },
        {
          path: "/image12.jpg",
          title: "Stepped Garden",
        },
      ],
    },
    {
      main: {
        path: "/image9.jpg",
        title: "Parent Deck",
      },
      images: [
        {
          path: "/image1.jpg",
          tile: "Elevation Day View",
        },
        {
          path: "/image2.jpg",
          title: "Elevation Across The Ganges",
        },
        {
          path: "/image3.jpg",
          title: "Ghats",
        },
        {
          path: "/image4.jpg",
          title: "Podium View",
        },
        {
          path: "/image5.jpg",
          title: "The River And Water Cascade",
        },
        {
          path: "/image6.jpg",
          title: "Family Lounge",
        },
        {
          path: "/image7.jpg",
          title: "Floating Deck",
        },
        {
          path: "/image8.jpg",
          title: "Open Lawn & Amphithetare",
        },
        {
          path: "/image9.jpg",
          title: "Parent Deck",
        },
        {
          path: "/image10.jpg",
          title: "Podium Side Walkway",
        },
        {
          path: "/image11.jpg",
          title: "Senior Citizens Recreation Area",
        },
        {
          path: "/image12.jpg",
          title: "Stepped Garden",
        },
      ],
    },
    {
      main: {
        path: "/image4.jpg",
        title: "Podium View",
      },
      images: [
        {
          path: "/image1.jpg",
          tile: "Elevation Day View",
        },
        {
          path: "/image2.jpg",
          title: "Elevation Across The Ganges",
        },
        {
          path: "/image3.jpg",
          title: "Ghats",
        },
        {
          path: "/image4.jpg",
          title: "Podium View",
        },
        {
          path: "/image5.jpg",
          title: "The River And Water Cascade",
        },
        {
          path: "/image6.jpg",
          title: "Family Lounge",
        },
        {
          path: "/image7.jpg",
          title: "Floating Deck",
        },
        {
          path: "/image8.jpg",
          title: "Open Lawn & Amphithetare",
        },
        {
          path: "/image9.jpg",
          title: "Parent Deck",
        },
        {
          path: "/image10.jpg",
          title: "Podium Side Walkway",
        },
        {
          path: "/image11.jpg",
          title: "Senior Citizens Recreation Area",
        },
        {
          path: "/image12.jpg",
          title: "Stepped Garden",
        },
      ],
    },
    {
      main: {
        path: "/image7.jpg",
        title: "Floating Deck",
      },
      images: [
        {
          path: "/image1.jpg",
          tile: "Elevation Day View",
        },
        {
          path: "/image2.jpg",
          title: "Elevation Across The Ganges",
        },
        {
          path: "/image3.jpg",
          title: "Ghats",
        },
        {
          path: "/image4.jpg",
          title: "Podium View",
        },
        {
          path: "/image5.jpg",
          title: "The River And Water Cascade",
        },
        {
          path: "/image6.jpg",
          title: "Family Lounge",
        },
        {
          path: "/image7.jpg",
          title: "Floating Deck",
        },
        {
          path: "/image8.jpg",
          title: "Open Lawn & Amphithetare",
        },
        {
          path: "/image9.jpg",
          title: "Parent Deck",
        },
        {
          path: "/image10.jpg",
          title: "Podium Side Walkway",
        },
        {
          path: "/image11.jpg",
          title: "Senior Citizens Recreation Area",
        },
        {
          path: "/image12.jpg",
          title: "Stepped Garden",
        },
      ],
    },
    {
      main: {
        path: "/image10.jpg",
        title: "Podium Side Walkway",
      },
      images: [
        {
          path: "/image1.jpg",
          tile: "Elevation Day View",
        },
        {
          path: "/image2.jpg",
          title: "Elevation Across The Ganges",
        },
        {
          path: "/image3.jpg",
          title: "Ghats",
        },
        {
          path: "/image4.jpg",
          title: "Podium View",
        },
        {
          path: "/image5.jpg",
          title: "The River And Water Cascade",
        },
        {
          path: "/image6.jpg",
          title: "Family Lounge",
        },
        {
          path: "/image7.jpg",
          title: "Floating Deck",
        },
        {
          path: "/image8.jpg",
          title: "Open Lawn & Amphithetare",
        },
        {
          path: "/image9.jpg",
          title: "Parent Deck",
        },
        {
          path: "/image10.jpg",
          title: "Podium Side Walkway",
        },
        {
          path: "/image11.jpg",
          title: "Senior Citizens Recreation Area",
        },
        {
          path: "/image12.jpg",
          title: "Stepped Garden",
        },
      ],
    },
  ];

  const openModal = (index) => {
    setModalIndex(index);
    setActiveImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalIndex(null);
    setActiveImageIndex(0);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    // When activeImageIndex changes, update the slider
    if (slider && modalIndex !== null) {
      slider.slickGoTo(activeImageIndex);
    }
  }, [activeImageIndex, slider, modalIndex]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    adaptiveHeight: true,
    afterChange: (newIndex) => {
      setActiveImageIndex(newIndex);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="w-full min-h-screen max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-center text-2xl sm:text-3xl  mb-6 sm:mb-8">
        Gallery
      </h2>

      {/* Desktop/Tablet layout (md and up) - Accordion style */}
      <div className="hidden md:flex flex-wrap lg:flex-nowrap gap-2 sm:gap-4 justify-center h-[300px] sm:h-[350px] lg:h-[450px]">
        {data.map((item, index) => (
          <div
            key={`desktop-${index}`}
            className={`relative shadow-lg rounded-lg overflow-hidden transition-all duration-500 cursor-pointer
              ${
                activeIndex === index
                  ? "flex-[5] lg:flex-[4]"
                  : "flex-[1] lg:flex-[0.5]"
              }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => openModal(index)}
          >
            <img
              src={item.main.path}
              alt={item.main.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-40 flex items-end transition-opacity duration-300
              ${activeIndex === index ? "opacity-0" : "opacity-100"}`}
            ></div>
          </div>
        ))}
      </div>

      {/* Mobile layout (smaller than md) */}
      <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div
            key={`mobile-${index}`}
            className="relative shadow-lg rounded-lg overflow-hidden h-[200px] sm:h-[250px] cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={item.main.path}
              alt={item.main.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
              <p className="text-white font-medium p-3">{item.main.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && modalIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative bg-white rounded-lg w-full max-w-lg sm:max-w-2xl lg:max-w-4xl overflow-hidden shadow-2xl">
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

            <div className="p-3 sm:p-4 pb-2">
              <h3 className="text-lg sm:text-xl font-bold mb-1 text-center">
                {`Gallery`}
              </h3>
            </div>

            {/* Slider */}
            <div className="w-full px-2 sm:px-6 lg:px-8 pb-4">
              <Slider ref={(slider) => setSlider(slider)} {...sliderSettings}>
                {data[modalIndex].images.map((img, idx) => (
                  <div key={`slide-${idx}`} className="outline-none">
                    <div className="w-full h-56 sm:h-64 md:h-80 flex items-center justify-center relative">
                      <img
                        src={img.path}
                        alt={img.title}
                        className="max-h-full max-w-full object-contain"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-transparent backdrop-blur-lg">
                        <p className="text-white font-medium  text-center">
                          {img.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Footer with thumbnails */}
            <div className="bg-gray-100 p-2 sm:p-4 border-t">
              <p className="text-xs sm:text-sm text-gray-600 text-center mb-2">
                {`Image ${activeImageIndex + 1} of ${
                  data[modalIndex].images.length
                }`}
              </p>

              {/* Thumbnail navigation - scrollable on smaller screens */}
              <div className="flex justify-start sm:justify-center space-x-2 overflow-x-auto py-2 px-2 sm:px-0">
                {data[modalIndex].images.map((img, idx) => (
                  <div
                    key={`thumb-${idx}`}
                    onClick={() => {
                      setActiveImageIndex(idx);
                      if (slider) {
                        slider.slickGoTo(idx);
                      }
                    }}
                    className={`flex-shrink-0 w-12 sm:w-16 h-9 sm:h-12 rounded cursor-pointer transition-all ${
                      activeImageIndex === idx
                        ? "ring-2 ring-blue-500 opacity-100 scale-105"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.path}
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
