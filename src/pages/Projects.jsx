import React, { useState, useEffect } from "react";
import Passport from "../assets/passport1.png";
import Todo from "../assets/Todo.jpg";
import Ram from "../assets/Ramportfolio.png";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Passport Website",
      year: "2025",
      image: Passport,
      technologies: ["React", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
      longDescription:
        "Custom-designed passport with key features, an informative about section, and a fully responsive design for all devices.",
      githubLink: "https://github.com/Ramduth/Frontend",
      demoLink: "https://frontendbh.vercel.app/",
    },
    {
      id: 2,
      title: "TODO App",
      year: "2024",
      image: Todo,
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      longDescription:
        "Feature-rich task management application with user authentication, task categories, priority levels, due dates, and collaborative features for team tasks.",
      githubLink: "https://github.com/Ramduth/Todo-main",
      demoLink: "https://todo-main-frontend2.onrender.com/",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      year: "2025",
      image: Ram,
      technologies: ["React", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
      longDescription:
        "A custom-designed, fully responsive portfolio website showcasing skills, projects, and experience. It features a modern UI, smooth navigation, downloadable CV, contact options, and integrated social media links. Built for an optimal experience across all devices with a focus on clean design and performance.",
      githubLink: "https://github.com/Ramduth/PortfolioNew",
      demoLink: "https://ramduth.vercel.app",
    },
  ];

  // Close overlay on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".project-card")) {
        setSelectedId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="w-full py-20 px-4 md:px-16 max-w-screen-2xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl text-black font-bold">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-gray-600">Showcasing my work and development expertise.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const isActive = selectedId === project.id;

          return (
            <div
              key={project.id}
              className="project-card relative rounded-lg shadow-md border border-gray-200 overflow-hidden group"
              onClick={(e) => {
                const clickedInsideLink = e.target.closest("a");
                if (!clickedInsideLink) {
                  setSelectedId(isActive ? null : project.id);
                }
              }}
            >
              {/* Project Image */}
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              {/* Basic Info */}
              <div className="bg-white p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900 truncate">{project.title}</h3>
                  <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded">{project.year}</span>
                </div>

                <div className="flex flex-wrap gap-1 mt-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 text-xs py-0.5 px-1.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-800 text-xs py-0.5 px-1.5 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Mobile tap hint */}
                <p className="text-xs text-blue-500 mt-2 md:hidden">Tap to view details</p>
              </div>

              {/* Overlay (details) */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-90 p-6 text-white transition-all duration-300 flex flex-col
                ${
                  isActive
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none md:group-hover:opacity-100 md:pointer-events-auto"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-100 text-xs py-0.5 px-1.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm flex-grow overflow-y-auto">{project.longDescription}</p>

                <div className="flex justify-between gap-2 mt-4">
                  <a
                    href={project.githubLink}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-100 text-sm font-medium w-1/2 text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={project.demoLink}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium w-1/2 text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
