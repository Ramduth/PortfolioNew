import React from "react";
import Passport from "../assets/passport1.png";
import Todo from "../assets/Todo.jpg";
import Ram from "../assets/Ramportfolio.png";

const Projects = () => {
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
    // {
    //   id: 4,
    //   title: "E-commerce Platform",
    //   year: "2023",
    //   image: "/images/projects/ecommerce.jpg",
    //   technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    //   longDescription:
    //     "Complete e-commerce solution with inventory management, customer accounts, secure payment processing, order tracking, and admin dashboard with analytics.",
    //   githubLink: "https://github.com/yourusername/ecommerce",
    //   demoLink: "https://ecommerce-demo.yourdomain.com",
    // },
    // {
    //   id: 5,
    //   title: "Weather Forecast App",
    //   year: "2022",
    //   image: "/images/projects/weather-app.jpg",
    //   technologies: ["React Native", "OpenWeatherMap API", "Firebase"],
    //   longDescription:
    //     "Cross-platform mobile application providing real-time weather data, 7-day forecasts, radar maps, and customizable weather alerts based on user location.",
    //   githubLink: "https://github.com/yourusername/weather-app",
    //   demoLink: "https://weather-app-demo.yourdomain.com",
    // },
    // {
    //   id: 6,
    //   title: "Fitness Tracker",
    //   year: "2022",
    //   image: "/images/projects/fitness-tracker.jpg",
    //   technologies: ["Flutter", "Firebase", "GraphQL", "TensorFlow Lite"],
    //   longDescription:
    //     "Health-focused application for tracking workouts, nutritional intake, and fitness goals. Features exercise recognition using machine learning, custom workout plans, and progress charts.",
    //   githubLink: "https://github.com/yourusername/fitness-tracker",
    //   demoLink: "https://fitness-tracker-demo.yourdomain.com",
    // },
  ];

  return (
    <section className="w-full py-25 px-4 md:px-16 max-w-screen-2xl mx-auto">
      <div className="w-full mx-auto">
        <div className="text-center mb-10 animate-on-scroll fade-in-bottom">
          <h2 className="text-3xl md:text-4xl text-black font-bold">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Showcasing my work and development expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="h-96 relative cursor-pointer rounded-lg shadow-md border border-gray-200 overflow-hidden group"
            >
              <div className="h-full flex flex-col">
                <div className="h-3/4 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${
                        project.image || "/images/projects/placeholder.jpg"
                      })`,
                    }}
                    aria-hidden="true"
                  ></div>
                </div>

                {/* Title and tech tags at bottom */}
                <div className="p-4 h-1/4 bg-white">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900 truncate">
                      {project.title}
                    </h3>
                    <div className="bg-gray-100 text-gray-800 text-xs font-semibold py-1 px-2 rounded">
                      {project.year}
                    </div>
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
                </div>
              </div>

              {/* Hover overlay - only shows on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-85 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-100 text-xs py-0.5 px-1.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-200 overflow-y-auto flex-grow">
                  {project.longDescription}
                </p>

                <div className="flex justify-between mt-4">
                  <a
                    href={project.githubLink}
                    className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                  <a
                    href={project.demoLink}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
