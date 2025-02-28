import React from 'react';

function Navbar({ scrollToSection, skillsRef, projectsRef, educationRef, aboutRef }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid p-5">
          <h1 className="navbar-brand" style={{ color: 'aqua', fontFamily: 'pacifico', fontSize: '35px' }}>
            SaiSatish
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active text-light"
                style={{ marginLeft: "700px" }}
                onClick={() => scrollToSection(skillsRef)}
              >
                <b className='hover1'  style={{ fontSize: "25px", color: 'aqua', fontFamily: 'pacifico' }}>Skills</b>
              </a>
              <a
                className="nav-link text-light"
                style={{ marginLeft: "30px" }}
                onClick={() => scrollToSection(projectsRef)}
              >
                <b className='hover1' style={{ fontSize: "25px", color: 'aqua', fontFamily: 'pacifico' }}>Projects</b>
              </a>
              <a
                className="nav-link text-light"
                style={{ marginLeft: "30px" }}
                onClick={() => scrollToSection(educationRef)}
              >
                <b className='hover1'  style={{ fontSize: "25px", color: 'aqua', fontFamily: 'pacifico' }}>Education</b>
              </a>
              <a
                className="nav-link text-light"
                style={{ marginLeft: "30px" }}
                onClick={() => scrollToSection(aboutRef)}
              >
                <b className='hover1'  style={{ fontSize: "25px", color: 'aqua', fontFamily: 'pacifico' }}>About</b>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
