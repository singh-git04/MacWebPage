import React from 'react'
import MacWindow from './Macwindow'
import "./resume.scss"
const Resume = ({windoName,setWindowState}) => {
  return (
   <MacWindow windoName={windoName} setWindowState={setWindowState}>
   <div className="resume-window">
     <iframe src= "/resume.pdf"frameBorder="0"></iframe>
   </div>
   </MacWindow>
  )
}

export default Resume
