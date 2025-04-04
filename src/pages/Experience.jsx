import React from "react";
import { Calendar, CheckCircle } from "lucide-react";

function Experience() {
  const experiences = [
    {
      title: "MERN Stack Trainee",
      company: "Srishti Innovative Pvt Ltd",
      duration: "07/2024 - 12/2024",
      responsibilities: [
        "Learned and applied MERN Stack technologies.",
        "Built and managed RESTful APIs with Node.js and Express.js.",
        "Gained experience in MongoDB schema design and data integrity.",
        "Worked on real-time projects, debugging, testing, and version control with Git.",
      ],
    },
  ];
  return (
    <div
      id="experience"
      className="px-4 pb-6 py-25 md:px-16 max-w-screen-2xl mx-auto text-black "
    >
      <div className="text-center mb-10 animate-on-scroll fade-in-bottom">
        <h2 className="text-3xl md:text-4xl text-black  font-bold mb-2">
          Work <span className="text-blue-600">Experience</span>
        </h2>
        <p className="text-base mb-12 max-w-3xl mx-auto font-roboto">
          My professional journey and career growth.
        </p>
      </div>

      <div className="section-container">
        <div className="w-full mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10  fade-in-left">
              <div className="rounded-xl p-8 border border-gray-300 transition-all duration-300 hover:shadow-md">
                <div className="flex flex-wrap items-start gap-6">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary hidden md:block">
                    <Calendar size={36} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <p className="text-lg text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <div className="px-4 py-2 rounded-full bg-blue-50 text-blue-500 font-medium">
                        {exp.duration}
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <div
                          key={idx}
                          className="flex text-sm md:text-base items-start"
                        >
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1 mr-3" />
                          <p>{resp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
