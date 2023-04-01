import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <h3 className="d-flex justify-content-center m-3 ">
        React JS Frontend
      </h3>
       <nav className="navbar navbar-expand-sm bg-light navbar-dark justify-content-center abc">
        <ul className="navbar-nav ">
          <li className="nav-item- m-1 navs">
            <Link className="btn btn-light btn-outline-primary navs"  to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item- m-1 navs">
            <Link className="btn btn-light btn-outline-primary navs" to="/department">
              Department
            </Link>
          </li>
          <li className="nav-item- m-1 navs">
            <Link className="btn btn-light btn-outline-primary navs" to="/employee">
              Employee
            </Link>
          </li>
          <li className="nav-item- m-1 navs">
            <Link className="btn btn-light btn-outline-primary navs" to="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
