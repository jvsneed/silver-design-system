import React from 'react';
import './CognitiveGuidelines.css'; // Import the CSS file
import MenuExample from '../components/MenuExample'; // Import the MenuExample component

const CognitiveGuidelines = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Cognitive Guidelines</h1>
      <div className="section">
        <h2 className="section-title">Understandable Language</h2>
        <p className="section-content">
          Use common and familiar language that is rooted more in real life than digital. Avoid using industry specific jargon. For large amounts of text, verify that the reading comprehension level does not exceed 9th grade. Use a tool like <a href="https://readable.com" target="_blank" rel="noopener noreferrer">Readable.com</a> to check this.
        </p>
      </div>
      <hr className="horizontal-rule" />
      <div className="section">
        <h2 className="section-title">Clear Labels</h2>
        <p className="section-content">
          Icons, inputs, and other page elements should be clearly labeled. Avoid hiding important text, such as menus, especially on a page’s initial state.
        </p>
        <MenuExample />
      </div>
      <hr className="horizontal-rule" />
      <div className="section">
        <h2 className="section-title">Orient the User</h2>
        <p className="section-content">
          Match links and menu labels to the page the user will be navigating to. Consider adding breadcrumbs and page titles; ensure URLs and page titles are consistent with what the user expects to see.
        </p>
        <div className="image-placeholder">[image example]</div>
      </div>
      <hr className="horizontal-rule" />
      <div className="section">
        <h2 className="section-title">Navigation</h2>
        <p className="section-content">
          When applicable, allow for back and forward buttons. This allows for options if one forgets something on the previous page or makes a mistake, allowing for reduction of user error. Avoid deep navigation hierarchies. Keeping menus shallow, two labels deep at the most will make navigating the site easier.
        </p>
      </div>
      <hr className="horizontal-rule" />
      <div className="section">
        <h2 className="section-title">Understandability</h2>
        <p className="section-content">
          Use common language that is easy to understand. Avoid technical or industry jargon. Consider using familiar terms that are rooted more in real life than digital.
        </p>
        <div className="image-placeholder">[image example]</div>
      </div>
    </div>
  );
};

export default CognitiveGuidelines;
