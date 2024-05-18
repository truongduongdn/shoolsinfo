import React from 'react';
import  { useState } from 'react';
import '../styles/Menu.css';
import logo from '../asset/img/ShoolsINfo.png'; 

function Header(props) {
    const [showCatalog, setShowCatalog] = useState(false);

    const toggleCatalog = () => {
      setShowCatalog(!showCatalog);
    };
    return (
        <div className="menu-container">
      <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Homepage</a></li>
          <li><a href="/about">About Us</a></li>
          <li>
            <button className="catalog-button" onClick={toggleCatalog}>Catalog</button>
            {showCatalog && (
              <ul className="submenu">
                <li><a href="/catalog/high-school">High School</a></li>
                <li><a href="/catalog/elementary">Elementary</a></li>
              </ul>
            )}
          </li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;