import React, { useState } from 'react';

const Projects = () => {
  // Project data defined directly in the component
  const projects = [
    {
      id: 1,
      title: "Smart Parking Locator",
      year: "2024",
      description: "A web-based platform integrating automotive service locators, spare parts providers, and more",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      longDescription: "A comprehensive solution for finding parking spaces in real-time. Integrated with payment systems and space reservation functionality. Uses computer vision to detect empty parking spaces.",
      githubLink: "https://github.com/yourusername/smart-parking",
      demoLink: "https://smart-parking-demo.yourdomain.com"
    },
    {
      id: 2,
      title: "TODO App",
      year: "2024",
      description: "A MERN stack-based task management app allowing users to create, manage, and track tasks",
      technologies: ["MongoDB", "Express.js", "React", "Redux"],
      longDescription: "Feature-rich task management application with user authentication, task categories, priority levels, due dates, and collaborative features for team tasks.",
      githubLink: "https://github.com/yourusername/todo-app",
      demoLink: "https://todo-app-demo.yourdomain.com"
    },
    {
      id: 3,
      title: "Portfolio Website",
      year: "2023",
      description: "Personal portfolio website with 3D animations and interactive elements",
      technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
      longDescription: "Custom-designed portfolio with 3D models and animations. Features smooth scrolling, interactive project showcases, and responsive design for all devices.",
      githubLink: "https://github.com/yourusername/portfolio",
      demoLink: "https://yourportfolio.com"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      year: "2023",
      description: "Full-featured online store with product management, cart, and payment processing",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      longDescription: "Complete e-commerce solution with inventory management, customer accounts, secure payment processing, order tracking, and admin dashboard with analytics.",
      githubLink: "https://github.com/yourusername/ecommerce",
      demoLink: "https://ecommerce-demo.yourdomain.com"
    },
    {
      id: 5,
      title: "Weather Forecast App",
      year: "2022",
      description: "Real-time weather application with forecasts, maps, and location-based alerts",
      technologies: ["React Native", "OpenWeatherMap API", "Google Maps API", "Firebase"],
      longDescription: "Cross-platform mobile application providing real-time weather data, 7-day forecasts, radar maps, and customizable weather alerts based on user location.",
      githubLink: "https://github.com/yourusername/weather-app",
      demoLink: "https://weather-app-demo.yourdomain.com"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      year: "2022",
      description: "Workout and nutrition tracking app with progress visualization and goal setting",
      technologies: ["Flutter", "Firebase", "GraphQL", "TensorFlow Lite"],
      longDescription: "Health-focused application for tracking workouts, nutritional intake, and fitness goals. Features exercise recognition using machine learning, custom workout plans, and progress charts.",
      githubLink: "https://github.com/yourusername/fitness-tracker",
      demoLink: "https://fitness-tracker-demo.yourdomain.com"
    }
  ];

  return (
    <section id="projects" className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="h-96 relative cursor-pointer rounded-lg shadow-md border border-gray-200 overflow-hidden group"
            >
              {/* Card content */}
              <div className="p-6 bg-white h-full flex flex-col">
                <div className="bg-gray-100 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full self-start inline-block">
                  {project.year}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs py-1 px-2 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="text-center text-gray-400 text-sm">
                  Hover to see details
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-80 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-200 mb-6 overflow-y-auto">
                  {project.longDescription}
                </p>
                
                <div className="flex justify-between mt-auto">
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