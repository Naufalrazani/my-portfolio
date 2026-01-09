import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="px-6 md:px-16 pt-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* BRAND */}
          <div className="md:text-left text-center space-y-3">
            <h3 className="text-2xl font-bold text-white tracking-wide">
              Muhammad Naufal Razani
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Front-End Developer focused on crafting clean, fast, and
              meaningful digital experiences with modern web technologies.
            </p>
          </div>

          {/* CONTACT */}
          <div className="text-center md:text-left space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Contact
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-indigo-400" />
                <span className="text-gray-400">mnaufalrazani@gmail.com</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-indigo-400" />
                <span className="text-gray-400">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="text-center md:text-left space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Social
            </h4>

            <ul className="space-y-3 text-sm">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-indigo-500 transition-all hover:-translate-y-0.5"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-6 h-px bg-gray-800" />

        {/* COPYRIGHT */}
        <div className="text-center text-xs text-gray-500 tracking-wide py-3">
          © {currentYear} Muhammad Naufal Razani. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
