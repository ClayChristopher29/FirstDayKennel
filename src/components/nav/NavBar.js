import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Devil's Dog-Park<br />
          <small>Taking care of your HellHound</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/home">Home</Link></li>
            <li><Link className="nav-link" to="/animals">Animals</Link></li>
            <li><Link className="nav-link" to="/locations">Locations</Link></li>
            <li><Link className="nav-link" to="/employees">Employees</Link></li>
            <li><Link className="nav-link" to ="/owners">Owners</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar