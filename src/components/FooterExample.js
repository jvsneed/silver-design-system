import React from "react";
import Do from './Dos.js';
import Dont from './Donts.js';
import './FooterExample.css';

const FooterExample = () => {
  return (
    <div className="text-decor-example-container">
      <div className="example-item text-decor-example">
        <Do></Do>
        <div className="note">
          <span>
          </span>
        </div>
    <div className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-list">
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#careers" className="footer-link">Careers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Find Help</h3>
          <ul className="footer-list">
            <li><a href="#customer-service" className="footer-link">Customer Service</a></li>
            <li><a href="#faqs" className="footer-link">FAQs</a></li>
            <li><a href="#sitemap" className="footer-link">Sitemap</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">My Flight</h3>
          <ul className="footer-list">
            <li><a href="#check-in" className="footer-link">Check - In</a></li>
            <li><a href="#flight-status" className="footer-link">Flight Status</a></li>
            <li><a href="#change-flight" className="footer-link">Change/Cancel Flight</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">My Account</h3>
          <ul className="footer-list">
            <li><a href="#sign-in" className="footer-link">Sign - In</a></li>
          </ul>
        </div>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search Indigo" className="search-input" />
        <button className="search-button">Search</button>
      </div>
    </div>
      </div>
      </div>
  );
};

export default FooterExample;
