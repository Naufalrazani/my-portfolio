import React from "react";
import profilePic1 from "../assets/images/profile-pic1.jpeg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto md:px-15 px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div data-aos="fade-right" data-aos-duration="1200">
            <div className="max-w-md mx-auto">
              <img
                src={profilePic1}
                alt="About Muhammad Naufal Razani"
                className="rounded-3xl shadow-2xl object-cover aspect-4/5 border-4 border-white"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div data-aos="fade-left" data-aos-duration="1200">
            <p className="mb-4 text-sm font-bold tracking-widest text-red-600 uppercase">
              About Me
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
              Crafting Digital Experiences with{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-indigo-600">
                Precision & Purpose
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I am a Front-End Developer with a strong focus on building clean,
              scalable, and high-performance user interfaces. I enjoy turning
              complex problems into simple, intuitive, and visually engaging
              digital experiences.
            </p>

            <p className="text-gray-500 leading-relaxed mb-10">
              With a solid foundation in modern JavaScript frameworks and a keen
              eye for design, I strive to create products that not only look
              great but also deliver real value to users.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 max-w-sm">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <h4 className="text-2xl font-black text-red-600">2+</h4>
                <p className="text-sm font-semibold text-gray-500 mt-1">
                  Years of Experience
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <h4 className="text-2xl font-black text-red-600">15+</h4>
                <p className="text-sm font-semibold text-gray-500 mt-1">
                  Completed Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
