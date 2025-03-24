import React from "react";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import NewsletterSubscription from "./components/Newsletter";
import Footer from "./components/Footer";
import { useUTMTracking } from "./hooks/utm";
// import FixedButtonMenu from "./components/FixedButtonMenu";

function App() {
  const { getStoredUTMParams } = useUTMTracking();

  // Optional: Log stored UTM parameters (you can remove this in production)
  React.useEffect(() => {
    const utmParams = getStoredUTMParams();
    if (utmParams) {
      console.log("Stored UTM Parameters:", utmParams);
    }
  }, []);
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
