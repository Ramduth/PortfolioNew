import React from "react";
import Pic from "../assets/Ram.jpg";

function Hero() {
  return (
<section id="home" className="min-h-screen flex items-center pt-20 px-4 md:px-16 max-w-screen-2xl mx-auto ">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll fade-in-left">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-500">
                MERN Stack Developer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-Manrope mb-4 text-white">
                Hi, I'm Ramduth <span className="text-blue-600">Rajesh</span>
              </h1>
              <p className="text-xl text-muted-foreground font-Roboto mb-8 max-w-xl text-gray-400">
              Hardworking MERN Stack Developer, self-learner, and passionate about exploring new technologies. Skilled in building scalable web apps, RESTful APIs, and user-centric solutions with React, Node.js, Express, and MongoDB.         </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-blue/30 transition-all duration-300 hover:-translate-y-1"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg text-white bg-ascent text-foreground font-medium hover:bg-secondary/80 transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center animate-on-scroll fade-in-right">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-blue-200 shadow-xl transition-all duration-300 hover:-translate-y-2">
                <img src={Pic} alt=""  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
