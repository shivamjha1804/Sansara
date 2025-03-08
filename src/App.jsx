import React from "react";
import Overview from "./components/Overview";
import Higlights from "./components/Higlights";
import Siteplans from "./components/Siteplans";
import Unitplans from "./components/Unitplans";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Overview />
      <Higlights />
      <Siteplans />
      <Unitplans />
      <Testimonials />
    </div>
  );
}
export default App;
