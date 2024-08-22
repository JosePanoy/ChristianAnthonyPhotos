import React from 'react';
import { FaHome } from 'react-icons/fa';
import '../src/assets/css/navbar.css'
import LogoPic from '../src/assets/img/cam.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img style={{cursor: 'pointer'}} src={LogoPic} alt="Logo" />
            </div>
            <div className="navbar-links">
                <FaHome className="icon" />
                <a href="#portfolio">Portfolio</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
