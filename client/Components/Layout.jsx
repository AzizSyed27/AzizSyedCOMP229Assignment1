/* Layout.jsx Aziz Syed 301322427 May 18th 2024*/

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../src/AZ-LOGO.png';
import Home from './Home';

export default function Layout() {
  return(
    <>
    
    <div id="top">

      <Link to="/" className="logo">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>

      <nav>
        <Link to="/" id="item">Home</Link>  
        <Link to="/about" id="item">About Me</Link>   
        <Link to="/services" id="item">Services</Link>  
        <Link to="/projects" id="proj">My Projects</Link>   
        <Link to="/contact" id="contact" >Contact Me</Link>
      </nav>

    </div>

    </>
  )
}