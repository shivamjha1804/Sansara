import React from "react";

const Footer = () => {
  // or use it from your public folder
  const waveBackgroundUrl = "FooterImg.png"; // Replace with actual path

  return (
    <footer className="w-full">
      {/* Contact Information Section */}
      <div className="w-full bg-white">
        <div className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row justify-around">
            {/* Mail Section */}
            <div className="p-4 text-center md:text-left border-r border-gray-200">
              <h3 className="text-gray-600 text-sm font-medium mb-2">MAIL</h3>
              <a
                href="mailto:sales@group.in"
                className="text-blue-600 hover:underline"
              >
                sales@psgroup.in
              </a>
            </div>

            {/* Call Section */}
            <div className="p-4 text-center border-r border-gray-200">
              <h3 className="text-gray-600 text-sm font-medium mb-2">CALL</h3>
              <a
                href="tel:+910336767678"
                className="text-blue-600 hover:underline"
              >
                +91 033 6767 6785
              </a>
            </div>
          </div>
        </div>

        {/* RERA Information */}
        <div className="text-center text-xs text-gray-500 pb-4">
          <p>PHASE I - WBRERA/P/HOW/2024/001857</p>
          <a
            href="http://www.Rera.Wb.Gov.In"
            className="text-blue-500 hover:underline"
          >
            www.Rera.Wb.Gov.In
          </a>
        </div>
      </div>

      {/* Water Wave Background Section */}
      <div
        className="w-full h-20"
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
