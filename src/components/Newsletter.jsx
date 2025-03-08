import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add actual submission logic here
    setEmail("");
  };

  // In a real implementation, you would import the background image
  // or use it from your public folder
  const backgroundImageUrl = "./HiglightsImage.png"; // Replace with actual path

  return (
    <div className="w-full h-64 relative overflow-hidden">
      {/* Background Image Section */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Semi-transparent overlay to ensure text visibility */}
      <div className="absolute inset-0 bg-blue-500 opacity-30" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-white text-center">
        <h2 className="text-3xl font-bold tracking-wide mb-2">
          SUBSCRIBE TO OUR NEWSLETTER
        </h2>
        <p className="text-sm mb-6">Get latest news and updates form us.</p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="flex w-full max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your E-mail"
            className="px-4 py-2 w-3/4 text-gray-700 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-1/4 bg-blue-900 text-white px-4 py-2 hover:bg-blue-800 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
