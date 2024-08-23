import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../src/assets/css/navbar.css';
import LogoPic from '../src/assets/img/cam.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img style={{ cursor: 'pointer' }} src={LogoPic} alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link className="icon" to="/">
          <FaHome /> 
        </Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/booknow">Book Now!</Link>
      </div>
    </nav>
  );
}

export default Navbar;
