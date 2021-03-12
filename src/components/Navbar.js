import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className = "header">
      <ul className="navbar">

        <li className="navbar-item">
          <NavLink
            className="nav-link"
            to="/"
            exact
          >
            Главная
          </NavLink>
        </li>
        
        <li className="navbar-item">
          <NavLink
            className="nav-link"
            to="/checklists"
          >
            Чеклист
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            className="nav-link"
            to="/equipments"
          >
            Перечень оборудования
          </NavLink>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar