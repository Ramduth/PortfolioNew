import React from "react";
import Hero from "../pages/Hero";
import Navbar from "@/components/Navbar";
import About from "./About";

function LandingPage({ toggleDarkMode, darkMode }) {
  return (
    <div className="flex flex-col">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
}

export default LandingPage;
