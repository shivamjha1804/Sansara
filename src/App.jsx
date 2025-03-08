import React from "react";
import Overview from "./components/Overview";
import Higlights from "./components/Higlights";
import Siteplans from "./components/Siteplans";
import Unitplans from "./components/Unitplans";
import Testimonials from "./components/Testimonials";
import NewsletterSubscription from "./components/Newsletter";
import Footer from "./components/Footer";
import SansaraEnquiryForm from "./components/SansaraEnquiry";
import EnquireForm from "./EnquireForm";

function App() {
  return (
    <div>
      <Overview />
      <EnquireForm />
      <Higlights />
      <Siteplans />
      <Unitplans />
      <Testimonials />
      <SansaraEnquiryForm />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
}
export default App;
