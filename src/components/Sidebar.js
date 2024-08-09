import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFigma } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">Silver Design Framework</div>
      <div className="sidebar-item">
        <Link to="/" className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/about" className={`sidebar-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/guidelines/cognitive" className={`sidebar-link ${location.pathname === '/guidelines/cognitive' ? 'active' : ''}`}>Cognitive Guidelines</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/guidelines/design" className={`sidebar-link ${location.pathname === '/guidelines/design' ? 'active' : ''}`}>Design Guidelines</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/guidelines/checklist" className={`sidebar-link ${location.pathname === '/guidelines/checklist' ? 'active' : ''}`}>Design Checklist</Link>
      </div>
      <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="figma-button">
        <FaFigma />
        Open Figma Design
      </a>
      <div className="version">v1.4</div>
    </div>
  );
};

export default Sidebar;
