import React from "react";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="md:px-15 px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* CONTACT INFO */}
          <div data-aos="fade-right">
            <p className="mb-4 text-sm font-bold tracking-widest text-indigo-600 uppercase">
              Contact
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Let’s <span className="text-indigo-600">Connect</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-md">
              I’m always open to discussing new opportunities, collaborations,
              or simply having a meaningful conversation about technology.
            </p>

            <div className="space-y-6">
              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-indigo-50 text-indigo-600">
                  <HiMail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Email
                  </p>
                  <p className="font-semibold text-gray-800">
                    mnaufalrazani@gmail.com
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-indigo-50 text-indigo-600">
                  <HiLocationMarker size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Location
                  </p>
                  <p className="font-semibold text-gray-800">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div data-aos="zoom-in" data-aos-delay="150">
            <form className="bg-gray-50 p-10 rounded-3xl shadow-inner space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your idea or opportunity..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200  cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
