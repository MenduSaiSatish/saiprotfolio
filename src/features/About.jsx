import React from 'react';

function About() {
  return (
    <div>
      <h1 style={{ marginLeft: '640px', color: 'aqua', fontFamily: 'cursive' }}>About</h1>
      <div className="hover1" style={{margin:'20px',padding:'5px',border:'2px solid aqua',borderRadius:'6px'}}>
        <div  style={{ border: '2px solid aqua', padding: '20px', margin: '20px', borderRadius: '6px' }}>
          <h2>Contact:</h2>
          <b>Email:</b><p style={{ color: 'aqua' }}>saisatish957@gmail.com</p>
          <b>Phone:</b><p style={{ color: 'aqua' }}>xxxx xxxx xx</p>
          <p style={{ color: 'aqua' }}>I enjoy taking on new projects, whether it’s for a personal challenge or as part of a team.
            If you have an exciting project or opportunity in mind, feel free to reach out to me!
          </p>
          <p style={{ color: 'aqua' }}>Feel free to reach out for opportunities or collaborations!</p>
          
          {/* Download Resume Button */}
          <a
            href="/SaiSatishMendu.pdf" // Path to the file in the public folder
            download="Resume-SaiSatishMendu.pdf" 
            style={{
              fontSize: '20px', 
              color: 'white', 
              padding: '10px 20px', 
              textDecoration: 'none', 
              backgroundColor: '#333', 
              borderRadius: '5px',
              display: 'inline-block',
              marginTop: '20px'
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
