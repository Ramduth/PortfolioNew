import React, { useState, useEffect } from "react";
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
import { ChevronDown, ChevronUp } from "lucide-react"; // Import icons

function LandingPage({ toggleDarkMode, darkMode }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const lenis = useLenis(({ scroll }) => {
    // Make lenis available globally for the menu component to use
    if (typeof window !== "undefined") {
      window.lenis = lenis;
      
      // Show back to top button when scrolled down
      if (scroll > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }
  });
  
  const scrollToTop = () => {
    lenis.scrollTo(0, { duration: 1.2 });
  };
  
  const scrollDown = () => {
    // Scroll to the height of the viewport
    lenis.scrollTo(window.innerHeight, { duration: 1.2 });
  };

  return (
    <>
      <Preloader />
      <ReactLenis root>
        <div className="flex flex-col relative">
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          
          <div id="hero" className="relative">
            <Hero />
            {/* Scroll down indicator */}
            <button 
              onClick={scrollDown}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm gap-2 animate-bounce cursor-pointer"
            >
              <span className={darkMode ? "text-white" : "text-gray-800"}>Scroll down</span>
              <ChevronDown className={darkMode ? "text-white" : "text-gray-800"} size={24} />
            </button>
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
          
          {/* Back to top button */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className={`fixed bottom-6 cursor-pointer right-6 p-3 rounded-full shadow-lg z-50 transition-all duration-300 ${
                darkMode 
                  ? "bg-gray-800 text-white hover:bg-gray-700" 
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
              aria-label="Back to top"
            >
              <ChevronUp size={24} />
            </button>
          )}
        </div>
      </ReactLenis>
    </>
  );
}

export default LandingPage;