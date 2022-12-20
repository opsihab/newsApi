import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import '../App.css';

export class Navbar extends Component {
  render() {
    return (
      <div className=''>
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container">
                <NavLink className="navbar-brand" to="/">
                  <h2 className='pp'>নতুন কিছু</h2>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
                 
                  <ul className="navbar-nav p-3 oi">
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/">হোম</NavLink>
                    </li>
                    <li> <NavLink className="nav-link" to="/about"> আমার সম্পর্কে</NavLink> </li>
                  
                  </ul>
                  </div>
              </div>
            </nav>
            </header>
      </div>
    )
  }
}

export default Navbar
