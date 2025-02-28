import React from 'react'

function Skills() {
  return (
    <div >
      <h1 style={{marginLeft:'630px',color:'aqua',marginTop:"50px",fontFamily:'cursive'}}>My skills</h1>
      <div className='hover1' style={{display:'flex'}} >
            <div className='w-50 container p-4 m-4 rounded' style={{border:"2px solid aqua,"}}>
            <h3>HTML</h3>
               90%<div className='border border-2 rounded'style={{height:'15px'}}><div className='rounded' style={{width:'90%',height:'12px',backgroundColor:"aqua"}}></div></div>
            <h3>CSS</h3>
               80%<div className='border border-2 rounded'style={{height:'15px'}}><div className='rounded' style={{width:'80%',height:'12px',backgroundColor:"aqua"}}></div></div>
            <h3>JAVASCRIPT</h3>
               75%<div className='border border-2 rounded'style={{height:'15px'}}><div className='rounded' style={{width:'75%',height:'12px',backgroundColor:"aqua"}}></div></div>
            <h3>REACT JS</h3>
               75%<div className='border border-2 rounded'style={{height:'15px'}}><div className='rounded' style={{width:'75%',height:'12px',backgroundColor:"aqua"}}></div></div>
            <h3>ANGULAR </h3>
               60%<div className='border border-2 rounded'style={{height:'15px'}}><div className='rounded' style={{width:'60%',height:'12px',backgroundColor:"aqua"}}></div></div>
            </div>
            <div className='w-50 container p-4 m-4 rounded'style={{border:"2px solid aqua"}}>
                <h3>BOOTSTRAP</h3>
                  80%<div className='border border-2 rounded'style={{height:'15px'}}><div className='rounded' style={{width:'80%',height:'12px',backgroundColor:"aqua"}}></div></div>
                <h3>NODE JS</h3>
                  70%<div className='border border-2 rounded'style={{height:'15px'}}><div className='rounded' style={{width:'70%',height:'12px',backgroundColor:"aqua"}}></div></div>
                <h3>EXPRESS JS</h3>
                  75%<div className='border border-2 rounded'style={{height:'15px'}}><div className='rounded' style={{width:'75%',height:'12px',backgroundColor:"aqua"}}></div></div>
                <h3>MONGODB</h3>
                  75%<div className='border border-2 rounded'style={{height:'15px'}}><div className='rounded' style={{width:'75%',height:'12px',backgroundColor:"aqua"}}></div></div>
                <h3>MYSQL</h3>
                  70%<div className='border border-2 rounded'style={{height:'15px'}}><div className='rounded' style={{width:'70%',height:'12px',backgroundColor:"aqua"}}></div></div>
            </div>
        </div>
      </div>
  )
}

export default Skills
