import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaChevronRight, FaFigma } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [isGuidelinesOpen, setIsGuidelinesOpen] = useState(false);

  const toggleGuidelinesSection = () => {
    setIsGuidelinesOpen(!isGuidelinesOpen);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">Silver Design Framework</div>
      <div className="sidebar-item">
        <Link to="/" className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/about" className={`sidebar-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
      </div>
      <div className="sidebar-section">
        <div className="section-header" onClick={toggleGuidelinesSection}>
          <span>Guidelines</span>
          <span>{isGuidelinesOpen ? <FaChevronDown /> : <FaChevronRight />}</span>
        </div>
        {isGuidelinesOpen && (
          <div className="section-content">
            <Link to="/guidelines/cognitive" className={`sidebar-link ${location.pathname === '/guidelines/cognitive' ? 'active' : ''}`}>Cognitive Guidelines</Link>
            <Link to="/guidelines/design" className={`sidebar-link ${location.pathname === '/guidelines/design' ? 'active' : ''}`}>Design Guidelines</Link>
            <Link to="/guidelines/checklist" className={`sidebar-link ${location.pathname === '/guidelines/checklist' ? 'active' : ''}`}>Design Checklist</Link>
          </div>
        )}
      </div>
      <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="figma-button">
        <FaFigma />
        Open Figma Design
      </a>
    </div>
  );
};

export default Sidebar;
