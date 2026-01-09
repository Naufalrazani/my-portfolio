import React from "react";
import { education, organizations } from "../utils/portfolioData";
import ExperienceCard from "../components/common/ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className=" py-24 bg-white overflow-hidden">
      <div className="md:px-15 px-6  z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* EDUCATION */}
          <div>
            <div
              className="flex items-center gap-4 mb-12"
              data-aos="fade-right"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Education
              </h2>
              <div className="h-0.5 grow bg-linear-to-r from-red-600 to-transparent" />
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <ExperienceCard
                  key={index}
                  title={edu.school}
                  subtitle={edu.degree}
                  period={edu.period}
                  description={edu.description}
                  colorClass="bg-red-600"
                  delay={index * 120}
                />
              ))}
            </div>
          </div>

          {/* ORGANIZATIONS */}
          <div>
            <div className="flex items-center gap-4 mb-12" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Organizations
              </h2>
              <div className="h-0.5 grow bg-linear-to-r from-indigo-600 to-transparent" />
            </div>

            <div className="space-y-8">
              {organizations.map((org, index) => (
                <ExperienceCard
                  key={index}
                  title={org.role}
                  subtitle={org.name}
                  period={org.period}
                  description={org.task}
                  colorClass="bg-indigo-600"
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
