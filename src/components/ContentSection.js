import React from 'react';
import './ContentSection.css'; // Import the CSS file

const ContentSection = () => {
  return (
    <div className="content-container">
      <h3 className="heading">SilverDesign Overview</h3>
      <p className="paragraph">
        SilverDesign is a tool aimed to help designers improve inclusivity of web experiences for seniors.
        By using a tablet-first approach to UI, you may be improving accessibility for a previously isolated digital user.
        This kit is made specifically for web experiences and other considerations for native mobile applications components may need to be made.
      </p>
      <h3 className="heading">Learn</h3>
      <p className="paragraph">
        This tool helps you incorporate accessibility for senior users before designs are made, but it's most useful for people who already know about things like WCAG, WAI-ARIA, form setup, and focus order.
        SilverDesign is only a small tool in the process, and you are responsible for ensuring your site meets web accessibility and any other compliance standards.
      </p>
      <ul className="list">
        <li className="list-item"><a className="link" href="#">Accessibility Fundamentals Overview</a></li>
        <li className="list-item"><a className="link" href="#">Web Content Accessibility Guidelines (WCAG) 2 Overview</a></li>
        <li className="list-item"><a className="link" href="#">Accessibility and Inclusivity: Study Guide | Nielsen Norman Group</a></li>
      </ul>
      <h3 className="heading">In This Toolkit You’ll Find</h3>
      <ul className="list">
        <li className="list-item">Usage Guidelines</li>
        <li className="list-item">Design Checklist</li>
        <li className="list-item">Reusable Components</li>
        <li className="list-item">Usage Patterns</li>
        <li className="list-item">Example Design</li>
      </ul>
    </div>
  );
};

export default ContentSection;
