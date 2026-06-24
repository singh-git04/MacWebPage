import React from 'react'
import "./nav.scss"
import DateandTime from './DateandTime'
const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="nav-icon">
                <img src="./navbar-icons/apple.svg" alt="" />
            </div>

            <div className="nav-items">
                <p>Lizard</p>
            </div>
            <div className="nav-items">
                <p>File</p>
            </div>
            <div className="nav-items">
                <p>Windows</p>
            </div>
            <div className="nav-items">
                <p>Terminal</p>
            </div>
        </div>

        <div className="right">
            <div className="nav-icon">
                <img src="./navbar-icons/wifi.svg" alt="" />
            </div>

            <div className="nav-items">
                 <DateandTime/>
            </div>
        </div>
    </nav>
  )
}

export default Nav
