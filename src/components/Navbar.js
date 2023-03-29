import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="nav">
    <a href="/" className="title">
      Math Magicians
    </a>
    <ul>
      <li>
        <a href="/Home">Home</a>
      </li>
      <li>
        <a href="/Calculator">Calculator</a>
      </li>
      <li>
        <a href="/Qoute">Qoute</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
