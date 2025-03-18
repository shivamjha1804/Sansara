import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalIndex, setModalIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);
  const [loadingState, setLoadingState] = useState({
    mainImages: true,
    modalImages: false,
  });

  // Sample data - memoized to prevent unnecessary re-renders
  const galleryData = useMemo(
    () => [
      {
        id: "elevation-day",
        main: {
          path: "/image1.jpg",
          title: "Elevation Day View",
        },
        images: Array.from({ length: 12 }, (_, i) => ({
          path: `/image${i + 1}.jpg`,
          title: [
            "Elevation Day View",
            "Elevation Across The Ganges",
            "Ghats",
            "Podium View",
            "The River And Water Cascade",
            "Family Lounge",
            "Floating Deck",
            "Open Lawn & Amphitheatre",
            "Parent Deck",
            "Podium Side Walkway",
            "Senior Citizens Recreation Area",
            "Stepped Garden",
          ][i],
        })),
      },
      {
        id: "parent-deck",
        main: {
          path: "/image9.jpg",
          title: "Parent Deck",
        },
        images: Array.from({ length: 12 }, (_, i) => ({
          path: `/image${i + 1}.jpg`,
          title: [
            "Elevation Day View",
            "Elevation Across The Ganges",
            "Ghats",
            "Podium View",
            "The River And Water Cascade",
            "Family Lounge",
            "Floating Deck",
            "Open Lawn & Amphitheatre",
            "Parent Deck",
            "Podium Side Walkway",
            "Senior Citizens Recreation Area",
            "Stepped Garden",
          ][i],
        })),
      },
      {
        id: "podium-view",
        main: {
          path: "/image4.jpg",
          title: "Podium View",
        },
        images: Array.from({ length: 12 }, (_, i) => ({
          path: `/image${i + 1}.jpg`,
          title: [
            "Elevation Day View",
            "Elevation Across The Ganges",
            "Ghats",
            "Podium View",
            "The River And Water Cascade",
            "Family Lounge",
            "Floating Deck",
            "Open Lawn & Amphitheatre",
            "Parent Deck",
            "Podium Side Walkway",
            "Senior Citizens Recreation Area",
            "Stepped Garden",
          ][i],
        })),
      },
      {
        id: "floating-deck",
        main: {
          path: "/image7.jpg",
          title: "Floating Deck",
        },
        images: Array.from({ length: 12 }, (_, i) => ({
          path: `/image${i + 1}.jpg`,
          title: [
            "Elevation Day View",
            "Elevation Across The Ganges",
            "Ghats",
            "Podium View",
            "The River And Water Cascade",
            "Family Lounge",
            "Floating Deck",
            "Open Lawn & Amphitheatre",
            "Parent Deck",
            "Podium Side Walkway",
            "Senior Citizens Recreation Area",
            "Stepped Garden",
          ][i],
        })),
      },
      {
        id: "podium-walkway",
        main: {
          path: "/image10.jpg",
          title: "Podium Side Walkway",
        },
        images: Array.from({ length: 12 }, (_, i) => ({
          path: `/image${i + 1}.jpg`,
          title: [
            "Elevation Day View",
            "Elevation Across The Ganges",
            "Ghats",
            "Podium View",
            "The River And Water Cascade",
            "Family Lounge",
            "Floating Deck",
            "Open Lawn & Amphitheatre",
            "Parent Deck",
            "Podium Side Walkway",
            "Senior Citizens Recreation Area",
            "Stepped Garden",
          ][i],
        })),
      },
    ],
    []
  );

  // Load main images with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute("data-src");
            if (src) {
              img.src = src;
              img.removeAttribute("data-src");
              observer.unobserve(img);
            }
          }
        });
      },
      { rootMargin: "100px" }
    );

    setTimeout(() => {
      const images = document.querySelectorAll(".main-gallery-img");
      if (images.length) {
        images.forEach((img) => observer.observe(img));
      }

      // Set a shorter timeout to improve perceived performance
      setLoadingState((prev) => ({ ...prev, mainImages: false }));
    }, 500);

    return () => observer.disconnect();
  }, []);

  // Critical fix: Synchronize slider with activeImageIndex
  useEffect(() => {
    if (
      isModalOpen &&
      sliderRef.current &&
      typeof activeImageIndex === "number"
    ) {
      // This ensures the slider moves to the correct slide
      sliderRef.current.slickGoTo(activeImageIndex);
    }
  }, [activeImageIndex, isModalOpen]);

  // Handle body overflow for modal
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  // Modal handlers
  // Modal handlers
  const openModal = useCallback(
    (index) => {
      // Set modal index and initial active image
      setModalIndex(index);
      setActiveImageIndex(0);

      // Show modal with loading state active
      setIsModalOpen(true);
      setLoadingState((prev) => ({ ...prev, modalImages: true }));

      // Preload images before showing content
      const imagesToLoad = galleryData[index].images;
      let loadedCount = 0;
      const totalImages = imagesToLoad.length;

      // Create image elements to trigger loading
      imagesToLoad.forEach((img) => {
        const imageLoader = new Image();
        imageLoader.onload = () => {
          loadedCount++;
          // When most images (or all) are loaded, show the slider
          if (
            loadedCount >= Math.min(3, totalImages) ||
            loadedCount === totalImages
          ) {
            setLoadingState((prev) => ({ ...prev, modalImages: false }));
          }
        };
        imageLoader.onerror = () => {
          loadedCount++;
          // Continue even if some images fail to load
          if (
            loadedCount >= Math.min(3, totalImages) ||
            loadedCount === totalImages
          ) {
            setLoadingState((prev) => ({ ...prev, modalImages: false }));
          }
        };
        imageLoader.src = img.path;
      });

      // Fallback in case images take too long or fail to trigger events
      const timeout = setTimeout(() => {
        setLoadingState((prev) => ({ ...prev, modalImages: false }));
      }, 2000);

      return () => clearTimeout(timeout);
    },
    [galleryData]
  );

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalIndex(null);
      setActiveImageIndex(0);
    }, 300); // Delay reset until after animation
  }, []);

  // Image fallback component
  const ImageWithFallback = ({ src, alt, className, ...props }) => {
    const [error, setError] = useState(false);

    return error ? (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
      >
        <p className="text-gray-500 text-center px-2">{alt}</p>
      </div>
    ) : (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={() => setError(true)}
        {...props}
      />
    );
  };

  // Fixed slider settings with proper event handlers
  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: activeImageIndex, // Set initial slide based on activeImageIndex
      arrows: true,
      lazyLoad: "ondemand",
      swipe: true,
      beforeChange: (current, next) => {
        // Update state before the slide changes
        setActiveImageIndex(next);
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
    }),
    [activeImageIndex]
  ); // Include activeImageIndex in deps

  // Properly handle thumbnail clicks
  const handleThumbnailClick = useCallback((idx) => {
    setActiveImageIndex(idx);
    // Direct slickGoTo call for immediate response
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(idx);
    }
  }, []);

  // Render loading spinner
  if (loadingState.mainImages) {
    return (
      <section className="w-full min-h-screen max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-center text-2xl sm:text-3xl mb-6">Gallery</h2>
        <div className="flex justify-center items-center h-[300px]">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-500">Loading gallery...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-center text-2xl sm:text-3xl mb-6">Gallery</h2>

      {/* Desktop/Tablet layout - Accordion style */}
      <div className="hidden md:flex flex-wrap lg:flex-nowrap gap-2 sm:gap-4 justify-center h-[350px] lg:h-[450px]">
        {galleryData.map((item, index) => (
          <div
            key={`desktop-${item.id}`}
            className={`relative shadow-lg rounded-lg overflow-hidden transition-all duration-500 cursor-pointer
              ${activeIndex === index ? "flex-[5]" : "flex-[1] lg:flex-[0.5]"}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => openModal(index)}
          >
            <ImageWithFallback
              src={item.main.path}
              alt={item.main.title}
              className="w-full h-full object-cover main-gallery-img"
              loading="lazy"
              data-src={item.main.path}
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-40 flex items-end transition-opacity duration-300
              ${activeIndex === index ? "opacity-0" : "opacity-100"}`}
            >
              <p className="text-white font-medium p-3 w-full text-center">
                {item.main.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-4">
        {galleryData.map((item, index) => (
          <div
            key={`mobile-${item.id}`}
            className="relative shadow-lg rounded-lg overflow-hidden h-[200px] cursor-pointer"
            onClick={() => openModal(index)}
          >
            <ImageWithFallback
              src={item.main.path}
              alt={item.main.title}
              className="w-full h-full object-cover main-gallery-img"
              loading="lazy"
              data-src={item.main.path}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
              <p className="text-white font-medium p-3 w-full text-center">
                {item.main.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal - Only render when open */}
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
                Gallery
              </h3>
            </div>

            {/* Slider with loading state */}
            <div className="w-full px-2 sm:px-6 lg:px-8 pb-4">
              {loadingState.modalImages ? (
                <div className="flex justify-center items-center h-56 sm:h-64 md:h-80">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-500">Loading images...</p>
                  </div>
                </div>
              ) : (
                <Slider
                  ref={sliderRef}
                  {...sliderSettings}
                  key={`slider-${modalIndex}-${activeImageIndex}`}
                >
                  {galleryData[modalIndex].images.map((img, idx) => (
                    <div key={`slide-${idx}`} className="outline-none">
                      <div className="w-full h-56 sm:h-64 md:h-80 flex items-center justify-center relative">
                        <img
                          src={img.path}
                          alt={img.title}
                          className="max-h-full max-w-full object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-transparent backdrop-blur-lg">
                          <p className="text-white font-medium text-center">
                            {img.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              )}
            </div>

            {/* Footer with thumbnails - Only show when not loading */}
            {!loadingState.modalImages && (
              <div className="bg-gray-100 p-2 sm:p-4 border-t">
                <p className="text-xs sm:text-sm text-gray-600 text-center mb-2">
                  {`Image ${activeImageIndex + 1} of ${
                    galleryData[modalIndex].images.length
                  }`}
                </p>

                <div className="flex justify-start sm:justify-center space-x-2 overflow-x-auto py-2 px-2 sm:px-0">
                  {galleryData[modalIndex].images.map((img, idx) => (
                    <div
                      key={`thumb-${idx}`}
                      onClick={() => handleThumbnailClick(idx)}
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
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
