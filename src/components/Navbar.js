import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../IMG/LogoBren.jpeg';


const Navbar = () => {
  return (
    <nav>
      <ul>
      <div className="logo">
        <img src={logo} alt="Restaurante Logo" className="logo-img" />
      </div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
