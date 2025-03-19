import React from "react";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import NewsletterSubscription from "./components/Newsletter";
import Footer from "./components/Footer";
// import FixedButtonMenu from "./components/FixedButtonMenu";

function App() {
  return (
    <div>
      <Hero />
      {/* <FixedButtonMenu /> */}
      <Navigation />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
}
export default App;
