import React, { useRef } from 'react';
import Info from './Info';
import Image from './Image';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import About from './About';
import Navbar from './Navbar';
import './Home.css'; 

function Home() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Render Navbar only once */}
      <Navbar
        scrollToSection={scrollToSection}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        educationRef={educationRef}
        aboutRef={aboutRef}
      />
      
      <h1 style={{ marginLeft: '620px', color: 'aqua', fontFamily: 'cursive' }}>Portfolio</h1>

      <div style={{ display: 'flex' }} className='container mt-5'>
        <div style={{ width: '50%', }}>
          <Info />
        </div>
        <div style={{ width: '50%' }}>
          <Image />
        </div>
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div  ref={educationRef}>
        <Education />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
    </div>
  );
}

export default Home;
