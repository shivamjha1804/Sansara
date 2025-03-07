import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: "Home", key: "home" },
    { name: "Project", key: "project" },
    { name: "Foundation", key: "foundation" },
    { name: "Career", key: "career" },
    { name: "Blog", key: "blog" },
    { name: "FAQ", key: "faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getHeaderClasses = () => {
    if (activeTab === "home") {
      return isScrolled
        ? "bg-white text-black shadow-md"
        : "bg-transparent text-white";
    }
    return "bg-white text-black shadow-md";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClasses()}`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 pl-28">
        <div className="text-2xl font-bold rounded-b-lg">Sansara</div>
        <nav className="flex items-center space-x-6 rounded-b-lg">
          {menuItems.map((item) => (
            <div
              key={item.key}
              className={`flex items-center cursor-pointer rounded-b-lg ${
                activeTab === item.key
                  ? "text-blue-600"
                  : activeTab === "home" && !isScrolled
                  ? "text-white hover:text-gray-200"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab(item.key)}
            >
              {item.name}
            </div>
          ))}
        </nav>
        <button
          className={`px-4 py-2 rounded-md hover:bg-blue-700 flex items-center rounded-b-lg ${
            activeTab === "home" && !isScrolled
              ? "bg-white/20 text-white hover:bg-white/30"
              : "bg-blue-600 text-white"
          }`}
        >
          Enquiry
        </button>
      </div>
    </header>
  );
};

export default Header;
