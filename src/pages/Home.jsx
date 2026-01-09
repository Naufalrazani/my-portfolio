import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Certificates from "../sections/Certificates";
import Contact from "../sections/Contact";
import Tools from "../sections/Tools";

const Home = () => {
  return (
    <main>
      <Hero />
      <Tools />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
};

export default Home;
