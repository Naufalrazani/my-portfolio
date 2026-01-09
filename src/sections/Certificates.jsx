import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { certificates } from "../utils/portfolioData";

const Certificates = () => {
  return (
    <section id="certificates" className=" py-24 bg-white overflow-hidden">
      <div className="container mx-auto md:px-15 px-6">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-20" data-aos="fade-up">
          <p className="mb-4 text-sm font-bold tracking-widest text-red-600 uppercase">
            Credentials
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Professional <span className="text-red-600">Certificates</span>
          </h2>

          <p className="text-gray-500 leading-relaxed">
            Verified certifications that demonstrate my commitment to continuous
            learning and professional development in technology.
          </p>
        </div>

        {/* CERTIFICATES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-auto border border-gray-100 shadow-sm"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* IMAGE */}
              <div>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-xs font-bold tracking-widest text-red-600 uppercase mb-2">
                  {cert.issuer}
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {cert.title}
                </h3>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors"
                >
                  View Credential
                  <HiExternalLink className="text-base" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
