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
                sales@group.in
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

            {/* Social Section */}
            <div className="p-4 text-center md:text-right">
              <h3 className="text-gray-600 text-sm font-medium mb-2">SOCIAL</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="text-blue-700">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-blue-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                  </svg>
                </a>
                <a href="#" className="text-red-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
                      fill="red"
                    />
                    <path
                      d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
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
