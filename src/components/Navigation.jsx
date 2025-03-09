import React from "react";

const Navigation = () => {
  const navItems = [
    "OVERVIEW",
    "GALLERY",
    "HIGHLIGHTS",
    "SITE PLAN",
    "UNIT PLANS",
    "LOCATION",
    "ENQUIRY",
  ];

  return (
    <div className="relative w-full">
      {/* Water background image */}
      <div
        className="w-full h-32 overflow-hidden"
        style={{
          backgroundImage: "url('./FooterImg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7,
        }}
      >
        {/* Navigation bar */}
        <div className="absolute -top-8 left-0 right-0 mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-4">
            <nav className="flex justify-between items-center">
              {navItems.map((item, index) => (
                <a key={index} href="#">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
