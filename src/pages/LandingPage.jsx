import React from "react";
import Hero from "../pages/Hero";
import Navbar from "@/components/Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import SkillsCarousel from "./SkillsCarousel";
import ContactMe from "./ContactMe";
import Preloader from "@/components/PreLoader";
import { ReactLenis, useLenis } from "lenis/react";
import Projects2 from "./Projects2";
import Experience from "./Experience";
import Footer from "../components/Footer";

function LandingPage({ toggleDarkMode, darkMode }) {
  const lenis = useLenis(({ scroll }) => {
    // Make lenis available globally for the menu component to use
    if (typeof window !== "undefined") {
      window.lenis = lenis;
    }
  });
  return (
    <>
      <Preloader />
      <ReactLenis root>
        <div className="flex flex-col gap-15">
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <div id="hero">
            <Hero />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="skills">
            <SkillsCarousel />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <ContactMe />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
}

export default LandingPage;
