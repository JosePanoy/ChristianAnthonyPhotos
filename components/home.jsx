import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../src/assets/css/home.css';


function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="navbar">
        <nav className="navbar-container">
          <ul className="navbar-menu">
            <li className="navbar-item"><a href="#home">Home</a></li>
            <li className="navbar-item"><a href="#blog">Blog</a></li>
            <li className="navbar-item"><a href="#gallery">Gallery</a></li>
            <li className="navbar-item"><a href="#about">About</a></li>
          </ul>
          <div className="navbar-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>
      </header>
      {isOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item"><a href="#home">Home</a></li>
            <li className="mobile-menu-item"><a href="#blog">Blog</a></li>
            <li className="mobile-menu-item"><a href="#gallery">Gallery</a></li>
            <li className="mobile-menu-item"><a href="#about">About</a></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default HomePage;
