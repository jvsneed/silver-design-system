import React from 'react';
import './About.css'; // Import the CSS file

const contributors = [
  { name: 'Ana Ignatescu', role: 'UX Researcher and Designer' },
  { name: 'Elysa Gaona', role: 'UX Researcher and Designer' },
  { name: 'Johanna Sneed', role: 'UX Researcher and Designer' },
  { name: 'Tracy Beaty', role: 'UX Researcher and Designer' },
];

const About = () => {
  return (
    <main className="about-container">
      {/* Skip to Content Link */}
      <a href="#main-content" className="skip-to-content">Skip to content</a>

      <section>
        <h1 className="page-title">About Silver Design</h1>
        <p>
          SilverDesign is a tool aimed to help designers improve inclusivity of web experiences for seniors. By using a tablet-first approach to UI, you may be improving accessibility for a previously isolated digital user. This kit is made specifically for web experiences and other considerations for native mobile applications components may need to be made.
        </p>
      </section>

      <section className="learn-section">
        <h2 className="section-title">Learn</h2>
        <p>
          This tool helps you incorporate accessibility for senior users before designs are made, but it's most useful for people who already know about things like WCAG, WAI-ARIA, form setup, and focus order. SilverDesign is only a small tool in the process, and you are responsible for ensuring your site meets web accessibility and any other compliance standards.
        </p>
        <ul className="list">
          <li><a className="learn-link" href="https://www.w3.org/WAI/fundamentals/" target="_blank" rel="noopener noreferrer">Accessibility Fundamentals Overview</a></li>
          <li><a className="learn-link" href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG) 2 Overview</a></li>
          <li><a className="learn-link" href="https://www.nngroup.com/articles/accessibility-inclusivity-study-guide/" target="_blank" rel="noopener noreferrer">Accessibility and Inclusivity: Study Guide | Nielsen Norman Group</a></li>
        </ul>
      </section>

      <section className="toolkit-section">
        <h2 className="section-title">In This Toolkit You’ll Find</h2>
        <ul className="list">
          <li>Usage Guidelines</li>
          <li>Design Checklist</li>
          <li>Reusable Components</li>
          <li>Usage Patterns</li>
          <li>Example Design</li>
        </ul>
      </section>

      {/* Contributors Section */}
      <section className="contributors-section">
        <h2 className="section-title">Contributors</h2>
        <div className="contributors-grid">
          {contributors.map((contributor, index) => (
            <article key={index} className="contributor-card">
              <h3 className="contributor-name">{contributor.name}</h3>
              <p className="contributor-role">{contributor.role}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
