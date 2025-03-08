import React from "react";
import Overview from "./components/Overview";
import Higlights from "./components/Higlights";
import Siteplans from "./components/Siteplans";
import Unitplans from "./components/Unitplans";
import Testimonials from "./components/Testimonials";
import NewsletterSubscription from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Overview />
      <Higlights />
      <Siteplans />
      <Unitplans />
      <Testimonials />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
}
export default App;
