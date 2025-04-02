import React from "react";
import Bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import git from "../assets/Git.png";
import html from "../assets/html.png";
import jave from "../assets/java.png";
import javascript from "../assets/js.png";
import mongodb from "../assets/Mongodb.png";
import node from "../assets/Node.png";
import React12 from "../assets/React.png";
import tailwind from "../assets/tailwindcss.png";
import vite from "../assets/vite.jpeg";

function Skills() {
  // Skills with their icons
  const skills = [
    { name: "React", icon: React12 },
    { name: "JavaScript", icon: javascript },
    { name: "Node.js", icon: node },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "MongoDB", icon: mongodb },
    { name: "Java", icon: jave },
    { name: "Git", icon: git },
    { name: "Vite", icon: vite },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "Bootstrap", icon: Bootstrap },
  ];

  return (
    <div className="w-full py-8 overflow-hidden bg-gray-50 relative px-4 md:px-16 max-w-screen-2xl mx-auto">
      <div className="text-center mb-16 animate-on-scroll fade-in-bottom">
        <h2 className="text-3xl md:text-4xl text-black font-bold">
          My <span className="text-blue-600">Skills</span>
        </h2>
        <p className="section-subheading mx-auto">
          A showcase of my technical abilities and expertise.
        </p>
      </div>
      
      {/* Fade left edge */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      
      {/* Infinite scrolling skills container */}
      <div className="relative w-full overflow-hidden">
        <div className="infinite-scroll flex whitespace-nowrap">
          {/* First copy of skills */}
          {skills.map((skill, index) => (
            <div
              key={`skill-1-${index}`}
              className="inline-flex flex-col items-center mx-8 group"
            >
              <div className="transition-transform duration-300 cursor-pointer group-hover:scale-110">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="mt-3 text-base font-medium">{skill.name}</p>
            </div>
          ))}
          
          {/* Second copy for seamless loop */}
          {skills.map((skill, index) => (
            <div
              key={`skill-2-${index}`}
              className="inline-flex flex-col items-center mx-8 group"
            >
              <div className="transition-transform duration-300 cursor-pointer group-hover:scale-110">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="mt-3 text-base font-medium">{skill.name}</p>
            </div>
          ))}
          
          {/* Third copy to ensure smoothness */}
          {skills.slice(0, 3).map((skill, index) => (
            <div
              key={`skill-3-${index}`}
              className="inline-flex flex-col items-center mx-8 group "
            >
              <div className="transition-transform duration-300 cursor-pointer group-hover:scale-110">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="mt-3 text-base font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Fade right edge */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
    </div>
  );
}

export default Skills;