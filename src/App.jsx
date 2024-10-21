import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import FAQ from "./Components/FAQ";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <div className="Main">
        <Navbar />
        <Hero />
      </div>
      <div className="border border-b-[12px] border-BordedGray w-full"></div>
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
