import React from "react";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
// import Overview from "./components/Overview";
// import Higlights from "./components/Higlights";
// import Siteplans from "./components/Siteplans";
// import Gallery from "./components/Gallery";
// import Unitplans from "./components/Unitplans";
import NewsletterSubscription from "./components/Newsletter";
import Footer from "./components/Footer";
import EnquireForm from "./components/EnquireForm";
import SansaraEnquiryForm from "./components/SansaraEnquiry";

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
