import React from "react";
import gemini from "../assets/gemini-ai-frontend.png";
import git from "../assets/git.jpg";
import react from "../assets/react.png";

const projects = [
  {
    id: 1,
    name: "Gemini-Chatbot",
    technologies: "HTML, CSS, JS, API",
    image: gemini,
    github: "https://github.com/komalchoudhary18/Google-Gemini-Chatbot",
    deployed: "https://luminous-marigold-2f2313.netlify.app/", // Deployment link added here
  },
  {
    id: 2,
    name: "To-Do-App",
    technologies: "HTML, CSS, JavaScript, Local Storage",
    image: git,
    github: "https://github.com/komalchoudhary18/Focus-On-Today",
  },
  {
    id: 3,
    name: "Project Management System",
    technologies: "HTML, CSS, JavaScript, React",
    image: react,
    github: "https://github.com/komalchoudhary18/Employee-Project-Management",
    deployed: "https://magical-mandazi-3df7de.netlify.app/"
    
  },
];

const Projects = () => {
  return (
    <div className="py-20 text-white bg-black" id="project">
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <h2 className="mb-12 text-4xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="p-6 transition-transform duration-300 transform bg-gray-800 rounded-lg hover:shadow-lg hover:scale-105">
              <img src={project.image} alt={project.name} className="object-cover w-full h-48 mb-4 rounded-lg" />
              <h3 className="mb-2 text-2xl font-bold">{project.name}</h3>
              <p className="mb-4 text-gray-400">{project.technologies}</p>
              <div className="flex justify-between mt-4">
                <a href={project.github} className="inline-block px-4 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500" target="_blank" rel="noopener noreferrer">GitHub</a>
                {project.deployed && (
                  <a href={project.deployed} className="inline-block px-4 py-2 text-white rounded-full bg-gradient-to-r from-purple-400 to-pink-500" target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
