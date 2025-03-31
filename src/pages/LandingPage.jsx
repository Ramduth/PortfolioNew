import React from "react";
import Hero from "../pages/Hero";
import Second from "./Second";
import Third from "../pages/Third";
import Four from "./Four";
import Footer from "../pages/Footer";
import Navbar from "@/components/Navbar";

function LandingPage() {
  return (
    <div className="flex flex-col gap-10 md:gap-18">
      <Navbar />
       <div id="hero">
        <Hero />
      </div> 
      {/* <div id="second">
        <Second />
      </div>
      <div id="third">
        <Third />
      </div>
      <div id="four">
        <Four />
      </div>
      <Footer />  */}
    </div>
  );
}

export default LandingPage;
