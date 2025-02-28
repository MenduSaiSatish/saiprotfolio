import React from 'react'

function projects() {
  return (
    <div >
      <h1 style={{marginLeft:'630px',color:'aqua',fontFamily:'cursive'}}>Projects</h1>
      <div className='hover1' style={{border:'2px solid aqua',padding:'20px',margin:'22px',borderRadius:'6px'}}>
          <div className='rounded' style={{border:'2px solid aqua',padding:'20px',margin:'22px'}}>
            <h2>Multitasking (MultiToDoList)</h2>
            <h6 style={{color:'aqua'}}>The Multitasking (MultiToDoList) app is designed to help users organize their tasks in a simple, interactive, and efficient way. It uses React for the front-end to manage the state and functionality of tasks, HTML for structure, and CSS for styling. The app will include drag-and-drop functionality to reorder tasks and categorize them as "Done," "Pending," or "In Progress."</h6>
            <h3>Features</h3>
            <ul style={{color:'aqua'}}>
              <li>Users can add new tasks using an input field.</li>
              <li>Tasks can be categorized into different groups such as 
                <ul><li>DO</li><li>PENDING</li><li>DONE</li></ul>
              </li>
              <li>Implement drag-and-drop functionality Tasks can be dragged and dropped within categories or between different categories to reorder or update their status.</li>
              <li>A delete button can be provided to remove tasks from the list.</li>
            </ul>
          </div>
          <div className='rounded' style={{border:'2px solid aqua',padding:'20px',margin:'22px'}}>
            <h2>Loan Management System (LMS)</h2>
            <h6 style={{color:'aqua'}}>Building a Loan Management System where users (clients) can apply for loans, view their application status, and where admins can manage and approve or reject loans. The app uses React for the front-end, Node.js with Express.js for the back-end, and MongoDB for the database.</h6>
            <h3>Features</h3>
            <ul style={{color:'aqua'}}>
              <li>User Registration & Authentication</li>
              <li>Loan Application</li>
              <li>Admin Functionality</li>
              <li>Loan Tracking</li>
            </ul>
            <h3>Technologies used</h3>
            <ul style={{color:'aqua'}}>
              <li>Frontend: React</li>
              <li>Backend: Node.js & Express.js</li>
              <li>Database: MongoDB</li>
            </ul>
          </div>
            <div className='rounded' style={{border:'2px solid aqua',padding:'20px',margin:'22px'}}>
              <h2>Quiz App</h2>
              <h6 style={{color:'aqua'}}>Create a Quiz App where users can answer multiple-choice questions, track their score, and get results at the end. The app will be built using React for the front-end.the questionsshould be taken from the TRIVIA api.</h6>
              <h3>Features</h3>
              <ul style={{color:'aqua'}}>
                <li>Quiz Questions</li>
                <li>Timer</li>
                <li>Score Tracking</li>
              </ul>
            </div>
      </div>
    </div>
  )
}

export default projects
