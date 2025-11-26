// Layout.jsx

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../src/media-logos/AZ-LOGO.png';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? 'nav-link-active' : ''}`;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img src={Logo} alt="Aziz Syed Logo" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-name">Aziz Syed</span>
            <span className="brand-role">Software Engineer</span>
          </div>
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          <NavLink to="/" end className={navLinkClass} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/services" className={navLinkClass} onClick={() => setIsOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/projects" className={navLinkClass} onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link nav-link-primary ${isActive ? 'nav-link-active' : ''}`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
