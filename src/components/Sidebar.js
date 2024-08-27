import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFigma, FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
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

        {/* Design Guidelines Group */}
        <div className="sidebar-item sidebar-group">
          <div className="sidebar-group-header" onClick={toggleExpand}>
            Design Guidelines
            {isExpanded ? <FaChevronUp className="chevron-icon" /> : <FaChevronDown className="chevron-icon" />}
          </div>
          <CSSTransition
            in={isExpanded}
            timeout={300}
            classNames="expand"
            unmountOnExit
          >
            <ul className="sidebar-sublist">
              <li>
                <Link 
                  to="/guidelines/text" 
                  className={`sidebar-link ${location.pathname === '/guidelines/text' ? 'active' : ''}`}
                  aria-current={location.pathname === '/guidelines/text' ? 'page' : undefined}
                >
                  Text and Type
                </Link>
              </li>
              <li>
                <Link 
                  to="/guidelines/color" 
                  className={`sidebar-link ${location.pathname === '/guidelines/color' ? 'active' : ''}`}
                  aria-current={location.pathname === '/guidelines/color' ? 'page' : undefined}
                >
                  Color and Contrast
                </Link>
              </li>
              <li>
                <Link 
                  to="/guidelines/navigation" 
                  className={`sidebar-link ${location.pathname === '/guidelines/navigation' ? 'active' : ''}`}
                  aria-current={location.pathname === '/guidelines/navigation' ? 'page' : undefined}
                >
                  Navigation
                </Link>
              </li>
              <li>
                <Link 
                  to="/guidelines/layout" 
                  className={`sidebar-link ${location.pathname === '/guidelines/layout' ? 'active' : ''}`}
                  aria-current={location.pathname === '/guidelines/layout' ? 'page' : undefined}
                >
                  Layout and Spacing
                </Link>
              </li>
              <li>
                <Link 
                  to="/guidelines/interaction" 
                  className={`sidebar-link ${location.pathname === '/guidelines/interaction' ? 'active' : ''}`}
                  aria-current={location.pathname === '/guidelines/interaction' ? 'page' : undefined}
                >
                  Interactive Elements
                </Link>
              </li>
              <li>
                <Link 
                  to="/guidelines/content" 
                  className={`sidebar-link ${location.pathname === '/guidelines/content' ? 'active' : ''}`}
                  aria-current={location.pathname === '/guidelines/content' ? 'page' : undefined}
                >
                  Content
                </Link>
              </li>
              <li>
                <Link 
                  to="/guidelines/guidance" 
                  className={`sidebar-link ${location.pathname === '/guidelines/guidance' ? 'active' : ''}`}
                  aria-current={location.pathname === '/guidelines/guidance' ? 'page' : undefined}
                >
                  User Guidance
                </Link>
              </li>
              {/* Add more pages here if needed */}
            </ul>
          </CSSTransition>
        </div>
        <div className="sidebar-item">
          <Link 
            to="/guidelines/checklist" 
            className={`sidebar-link ${location.pathname === '/guidelines/checklist' ? 'active' : ''}`}
            aria-current={location.pathname === '/guidelines/checklist' ? 'page' : undefined}
          >
            Design Checklist
          </Link>
          <a 
          href="https://www.figma.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="figma-button"
        >
          <FaFigma />
          Open Figma Design
        </a>
        <div className="version">v1.17</div>
      </div>
        </div>

    </>
  );
};

export default Sidebar;
