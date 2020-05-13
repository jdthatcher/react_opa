import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return ( 
        <div className = "App" >


<header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link to="/"className="navbar-brand">comsynth</Link> 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active mr-3">
            <Link to="/"> home </Link> 
            </li>
           
            <li className="nav-item mr-3">
            <Link to="/resume"> resume </Link>
            </li>
            <li className="nav-item mr-3">
            <Link to="/faq"> api</Link>
            </li>
          </ul>
          <Link to="/contact">  <button className="btn btn-outline-success my-2 my-sm-0" >contact</button> </Link>
        </div>
      </nav>
    </header>
        </div>
        );
    }
}

export default Header;