import Navbar from './Navbar'
import Home from './Home'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';
import Footer from './Footer';

import { Element } from "react-scroll";

function Main() {
  return (
    <div
      className=" bg-linear-to-b
from-[#000610]
via-[#030A14]
to-[#000103] text-white min-h-screen
w-full"
    >
      <Navbar />

      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="certificates">
        <Certificates />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default Main