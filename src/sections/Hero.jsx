import React from "react";
import profilePic from "../assets/images/profile-pic.jpeg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const socialLinks = [
  {
    label: "GitHub",
    name: "NaufalRazani",
    href: "https://github.com/Naufalrazani",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    name: "Muhammad Naufal Razani",
    href: "https://www.linkedin.com/in/muhammadnaufalrazani",
    icon: <FaLinkedin />,
  },
  {
    label: "Instagram",
    name: "@naufalrzni",
    href: "https://www.instagram.com/naufalrzni/",
    icon: <FaInstagram />,
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden py-24">
      {/* Decorative Gradient Lights */}
      <div className="absolute top-[-15%] right-[-10%] w-125 h-125 bg-red-100 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-15%] left-[-10%] w-100 h-100 bg-gray-100 rounded-full blur-[100px]" />

      <div className="w-full md:px-15 px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        {/* TEXT CONTENT */}
        <div data-aos="fade-right" data-aos-duration="1200">
          <span className="inline-block mb-6 px-5 py-2 rounded-full bg-red-50 text-red-600 text-sm font-bold tracking-wide">
            Available for Collaboration
          </span>

          {/* NAME */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Muhammad Naufal <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-indigo-600">
              Razani
            </span>
          </h1>

          {/* ROLE */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-8">
            Front-End Developer
          </h2>

          {/* DESCRIPTION */}
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-12 border-l-4 border-red-100 pl-6">
            I craft modern, fast, and user-focused digital experiences with
            clean code and thoughtful design, turning ideas into impactful
            products.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-6">
            <a href="#projects">
              <button className="group px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-red-600 transition-all duration-300 shadow-xl cursor-pointer">
                View My Projects
                <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </a>

            {/* Social Media */}
            <ul className="flex gap-6 text-gray-400 text-2xl">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:text-red-600 hover:-translate-y-1 transition-all"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* IMAGE CONTENT */}
        <div
          className="relative flex justify-center lg:justify-end"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="w-full max-w-105">
            <div className="relative animate-float">
              {/* Profile Image */}
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-3xl shadow-2xl object-cover w-full aspect-4/5 border-4 border-white"
              />

              {/* Experience Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 text-xl font-bold">
                    5th
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-none">
                      Semester
                    </p>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                      Teknik Informatika
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
