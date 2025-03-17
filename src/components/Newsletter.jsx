import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add actual submission logic here
    setIsSubmitted(true);

    // Reset form after showing success message
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* Background Image Section - using responsive heights */}
      <div className="h-80 md:h-64 relative">
        {/* Desktop/Tablet background image */}
        <div
          className="absolute inset-0 w-full h-full hidden sm:block"
          style={{
            backgroundImage: "url('./NewsletterBgImg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Mobile background image */}
        <div
          className="absolute inset-0 w-full h-full sm:hidden"
          style={{
            backgroundImage: "url('./MobileHeroImg.png')", // Replace with your mobile image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Semi-transparent overlay to ensure text visibility */}
        <div className="absolute inset-0 bg-blue-500 opacity-30" />

        {/* Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mb-2">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
          <p className="text-sm mb-4 sm:mb-6">
            Get latest news and updates from us.
          </p>

          {/* Subscription Form with better mobile responsiveness */}
          {isSubmitted ? (
            <div className="bg-green-100 text-green-800 p-3 rounded-md">
              Thank you for subscribing!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row w-full max-w-md gap-2 sm:gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your E-mail"
                className="px-4 py-2 w-full sm:w-3/4 text-gray-700 focus:outline-none rounded-md sm:rounded-none sm:rounded-l-md"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-1/4 bg-blue-900 text-white px-4 py-2 hover:bg-blue-800 transition duration-300 rounded-md sm:rounded-none sm:rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
