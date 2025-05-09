import React from 'react'
import { Link } from 'react-router-dom'

const Qualityreports = () => {
  return (
    <>
     <div className="tooltip-wrapper">
      <ul className="tooltip-container">
        <li style={{ "--i": "1.1s" }} className="nav-link">
          <div className="tooltip-tab">
          Quality Reports
          <svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="7"
  viewBox="0 0 12 7"
  fill="none"
>
  <path
    d="M1 1L6 6L11 1"
    stroke="#ffffff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
          </div>
          <div className="tooltip">
            <ul className="tooltip-menu-with-icon">
              <li className="tooltip-link">
               <li>
                  <Link to="/ethics">Ethics</Link>
                </li>
                 <li>
                  <Link to="/copywriteform">Copyright Form</Link>
                </li>
              </li>
       
            </ul>
          </div>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Qualityreports
