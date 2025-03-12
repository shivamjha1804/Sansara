import React from "react";

const Footer = () => {
  // or use it from your public folder
  const waveBackgroundUrl = "FooterImg.png"; // Replace with actual path

  return (
    <footer className="w-full bg-gray-100">
      {/* Contact Information Section */}
      <div className="w-full bg-white py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-12">
            {/* Mail Section */}
            <div className="text-center md:text-left md:border-r md:border-gray-200 pr-6">
              <h3 className="text-gray-600 text-sm font-medium">MAIL</h3>
              <a
                href="mailto:sales@psgroup.in"
                className="text-blue-600 hover:underline"
              >
                sales@psgroup.in
              </a>
            </div>

            {/* RERA Information Section */}
            <div className="text-center md:border-r md:border-gray-200 pr-6">
              <p className="text-gray-600 text-xs">
                PHASE I - WBRERA/P/HOW/2024/001857
              </p>
              <a
                href="http://www.Rera.Wb.Gov.In"
                className="text-blue-500 hover:underline"
              >
                www.Rera.Wb.Gov.In
              </a>
            </div>

            {/* Call Section */}
            <div className="text-center">
              <h3 className="text-gray-600 text-sm font-medium">CALL</h3>
              <a
                href="tel:+910336767678"
                className="text-blue-600 hover:underline"
              >
                +91 033 6767 6785
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Water Wave Background Section */}
      <div
        className="w-full h-20 mt-6"
        style={{
          backgroundImage: `url(${waveBackgroundUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </footer>
  );
};

export default Footer;
