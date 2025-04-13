import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Delicious Eats</h1>
      <p>A taste of excellence since 2010</p>
      <nav className="nav">
        <ul>
          <li><a href="#starters">Starters</a></li>
          <li><a href="#mains">Main Course</a></li>
          <li><a href="#desserts">Desserts</a></li>
          <li><a href="#drinks">Drinks</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;