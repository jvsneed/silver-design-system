import React from 'react';
import './DesignGuidelines.css'; // Import the CSS file

const DesignGuidelines = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Design Guidelines</h1>
      <div className="section">
        <h2 className="section-title">Color Contrast</h2>
        <p className="section-content">
          Use a high color contrast; a 4.5:1 color ratio meets AA accessibility standards, and black on white text is always preferred. This includes in labels and form fields.
        </p>
      </div>
      <hr className="horizontal-rule" />
      <div className="section">
        <h2 className="section-title">Minimum Target Size</h2>
        <p className="section-content">
          WCAG AAA standards ask for a minimum of 44px by 44px (CSS) for clickable area of a target. If fine motor control is an issue, going above the minimum makes it easy for the user to activate target. This includes buttons and inline links.
        </p>
      </div>
      <hr className="horizontal-rule" />
      <div className="section">
        <h2 className="section-title">Minimum Spacing</h2>
        <p className="section-content">
          According to research, a minimum of 6.35 mm or 24 px (CSS) between selectable areas gives users freedom from being exact in their selection. Adhering to a standard of minimum spacing will decrease the chances of frustration and mental load to users who may have issues with dexterity, low-vision, or other impediments that may slow them down.
        </p>
      </div>
      <hr className="horizontal-rule" />
      <div className="section">
        <h2 className="section-title">Minimum Text Size</h2>
        <p className="section-content">
          As per WCAG guidelines, anything less than 12pt size font is considered small.
        </p>
      </div>
    </div>
  );
};

export default DesignGuidelines;
