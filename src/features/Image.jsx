import React from 'react'
import profile from '../images/profile.jpg'
function Image() {
  return (
    <div className='container'>
        <img src={profile} alt="" style={{width:'500px',borderRadius:'150px 50px 150px 50px',marginLeft:'120px', border:'6px solid aqua'}} />
    </div>
  )
}

export default Image
