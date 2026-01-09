import React from "react";
import { SiJavascript, SiReact, SiTailwindcss, SiVite } from "react-icons/si";

const tools = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    border: "hover:border-yellow-400",
    glow: "hover:shadow-yellow-400/30",
  },
  {
    name: "React",
    icon: <SiReact />,
    color: "text-blue-400",
    border: "hover:border-blue-400",
    glow: "hover:shadow-blue-400/30",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
    border: "hover:border-cyan-400",
    glow: "hover:shadow-cyan-400/30",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    color: "text-purple-400",
    border: "hover:border-purple-400",
    glow: "hover:shadow-purple-400/30",
  },
];

const Tools = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="md:px-15 px-6">
        <div className="grid md:grid-cols-3 gap-16 items-center">
          {/* LEFT TEXT */}
          <div data-aos="fade-up">
            <p className="mb-4 text-sm font-bold tracking-widest text-red-600 uppercase">
              Tech Stack
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Tools & <br />
              Technologies.
            </h2>

            <p className="text-gray-500 leading-relaxed max-w-sm">
              A carefully selected stack that I use to build scalable,
              performant, and visually refined web applications.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 60}
                className={`
                  group
                  p-6 rounded-2xl bg-white border border-gray-200
                  flex flex-col items-center justify-center gap-4 hover:shadow-2xl ${tool.glow} ${tool.border}
                `}
              >
                {/* ICON */}
                <span
                  className={`
                    text-4xl ${tool.color}
                    transition-transform duration-300 ease-out
                    group-hover:scale-125 group-hover:rotate-3
                  `}
                >
                  {tool.icon}
                </span>

                {/* LABEL */}
                <p className="text-sm font-bold text-gray-700 text-center tracking-wide">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
