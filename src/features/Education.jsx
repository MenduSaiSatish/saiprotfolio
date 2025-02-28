import React from 'react'

function Education() {
  return (
    <div>
      <h1 style={{marginLeft:'550px',color:'aqua',fontFamily:'cursive'}}>Education Details</h1>
      <div className='hover1' style={{border:'2px solid aqua',padding:'20px',margin:'20px',borderRadius:'6px'}}>
        <h3>Post Graduation</h3>
            <div className='rounded p-3' style={{display:'flex', border:'2px solid aqua'}}>
            <div className='rounded ' style={{height:'100px',width:'15px',border:'2px solid aqua',backgroundColor:'aqua'}}></div>
            <ul style={{color:'aqua'}}>
                <li>MCA(Master Of Computer Applications)</li>
                <li>CGPA:8.7</li>
                <li>College:VSM College(A),Ramachandrapuram.</li>
                <li>Year:2022-2024</li>
            </ul>
            </div>
        <h3>Graduation</h3>
            <div className='rounded p-3' style={{display:'flex',border:'2px solid aqua'}}>
            <div className='rounded ' style={{height:'100px',width:'15px',border:'2px solid aqua',backgroundColor:'aqua'}}></div>
            <ul style={{color:'aqua'}}>
                <li>B.sc(Bachelor of Science)</li>
                <li>CGPA:8.8</li>
                <li>College:VSM College(A),Ramachandrapuram.</li>
                <li>Year:2019-2022</li>
            </ul>
            </div>
        <h3>Intermediate</h3>
            <div className='rounded p-3' style={{display:'flex',border:'2px solid aqua'}}>
            <div className='rounded ' style={{height:'100px',width:'15px',border:'2px solid aqua',backgroundColor:'aqua'}}></div>
            <ul style={{color:'aqua'}}>
                <li>MPC(Maths,Physics,Chemistry)</li>
                <li>CGPA:9.6</li>
                <li>College:Sree Siddartha Junior College,Angara</li>
                <li>Year:2017-2019</li>
            </ul>
            </div>
        <h3>Secondary Education</h3>
            <div className='rounded p-3' style={{display:'flex',border:'2px solid aqua'}}>
            <div className='rounded ' style={{height:'100px',width:'15px',border:'2px solid aqua',backgroundColor:'aqua'}}></div>
            <ul style={{color:'aqua'}}>
                <li>10th</li>
                <li>CGPA:9.0</li>
                <li>School:Z.P.P.high School,Angara</li>
                <li>Year:2016-2017</li>
            </ul>
            </div>
      </div>
    </div>
  )
}

export default Education
