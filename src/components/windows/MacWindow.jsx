import React, { Children } from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"
const MacWindow = ({children, width ="40vw", height="60vh" ,windoName ,setWindowState}) => {
 
  
  return (
   <Rnd  
    dragHandleClassName="nav"
    cancel="a, button, input, textarea"
 
    default={
    {
      x:100,
      y:100,
      height: height,
      width: width}
   }  >

     <div className="window">
      <div className="nav">
        <div className="dots">
          <div onClick={()=>{setWindowState(state=>({...state, [windoName]: false}))}} 
           className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>

        <div className="nav-item">
          <div className="title">
            <p>Lizard - zsh</p>
          </div>
        </div>
      </div>

      <div className="main-content">
        {children}
      </div>
     </div>
</Rnd>   
  )
}

export default MacWindow
