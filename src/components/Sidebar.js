import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFigma, FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className={`sidebar-toggle ${isOpen ? 'open' : ''}`} 
        onClick={toggleSidebar} 
        aria-label="Toggle sidebar"
        aria-expanded={isOpen}
      >
        <FaBars />
      </button>
      <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">Silver Design Framework</div>
        <div className="sidebar-item">
          <Link 
            to="/" 
            className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
        </div>
        <div className="sidebar-item">
          <Link 
            to="/about" 
            className={`sidebar-link ${location.pathname === '/about' ? 'active' : ''}`}
            aria-current={location.pathname === '/about' ? 'page' : undefined}
          >
            About
          </Link>
        </div>
        <div className="sidebar-item">
          <Link 
            to="/guidelines/cognitive" 
            className={`sidebar-link ${location.pathname === '/guidelines/cognitive' ? 'active' : ''}`}
            aria-current={location.pathname === '/guidelines/cognitive' ? 'page' : undefined}
          >
            Cognitive Guidelines
          </Link>
        </div>
        <div className="sidebar-item">
          <Link 
            to="/guidelines/design" 
            className={`sidebar-link ${location.pathname === '/guidelines/design' ? 'active' : ''}`}
            aria-current={location.pathname === '/guidelines/design' ? 'page' : undefined}
          >
            Design Guidelines
          </Link>
        </div>
        <div className="sidebar-item">
          <Link 
            to="/guidelines/checklist" 
            className={`sidebar-link ${location.pathname === '/guidelines/checklist' ? 'active' : ''}`}
            aria-current={location.pathname === '/guidelines/checklist' ? 'page' : undefined}
          >
            Design Checklist
          </Link>
        </div>
        <a 
          href="https://www.figma.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="figma-button"
        >
          <FaFigma />
          Open Figma Design
        </a>
        <div className="version">v1.14</div>
      </div>
    </>
  );
};

export default Sidebar;
