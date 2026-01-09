import React from "react";
import { projects } from "../utils/projectsData";
import ProjectCard from "../components/common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Gradient Lights */}
      <div className="absolute top-[-15%] right-[-10%] w-125 h-125 bg-indigo-100 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-15%] left-[-10%] w-100 h-100 bg-gray-100 rounded-full blur-[100px]" />

      <div className="mx-auto md:px-24 px-6 relative">
        {/* SECTION HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-20" data-aos="fade-up">
          <p className="mb-4 text-sm font-bold tracking-widest text-indigo-600 uppercase">
            Portfolio
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Selected <span className="text-indigo-600">Projects</span>
          </h2>

          <p className="text-gray-500 leading-relaxed">
            A collection of projects that showcase my skills in building modern,
            scalable, and user-focused web applications.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} delay={index * 120} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
