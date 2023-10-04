import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme={props.mode}>
    <div className="container-fluid">
      <a  className="navbar-brand" href="">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-success" aria-current="page" to="/">{props.home}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-success" to="/about">{props.about}</Link>
          </li>
          <li className="nav-item dropdown d-flex text-success">
            <Link className="nav-link dropdown-toggle text-success" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {props.contact}
            </Link>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Contact CTO</a></li>
              <li><a className="dropdown-item" href="/">Contact Developer</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Contact Tester</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true"></a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success me-4" type="submit">Search</button>
        </form>
      </div>
    <div className={`form-check form-switch text-${props.mode=='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggle}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
</div>
    </div>
  </nav>
  )
}

Navbar.prototype={
   title:PropTypes.string.isRequired,
   home: PropTypes.string.isRequired,
   about: PropTypes.string.isRequired,
   contact: PropTypes.string.isRequired
}
Navbar.defaultProps={
    title: "Set Title here",
    home:"Home",
    about:"About Us",
    contact:"Contact Us"
}
export default Navbar
