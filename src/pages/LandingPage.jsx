import React from "react";
import Hero from "../pages/Hero";

import Navbar from "@/components/Navbar";

function LandingPage() {
  return (
    <div className="flex flex-col gap-10 md:gap-18">
      <Navbar />
       <div id="hero">
        <Hero />
      </div> 

    </div>
  );
}

export default LandingPage;
