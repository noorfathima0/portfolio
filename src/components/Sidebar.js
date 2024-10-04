import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons
import '../styles/Sidebar.css'; // Import CSS for styling

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <img src="data:image/jpeg;base64,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" alt="Profile" className="sidebar-profile-img" />
        <h2>Noor Fathima</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="active-link">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active-link">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-social">
        <a href="https://github.com/noorfathima0" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/noorfathima" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/noorfathima" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
