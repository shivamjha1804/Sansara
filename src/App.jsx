import React from "react";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import NewsletterSubscription from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <Navigation />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
}
export default App;
