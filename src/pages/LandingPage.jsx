import React from "react";
import Hero from "../pages/Hero";
import Navbar from "@/components/Navbar";
import About from "./About";
import Projects from "./Projects";

function LandingPage({ toggleDarkMode, darkMode }) {
  return (
    <div className="flex flex-col">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        {/* <About /> */}
        <Projects/>
      </div>
    </div>
  );
}

export default LandingPage;
