import React from 'react';
import './DesignGuidelines.css'; // Import the CSS file
import ColorContrastExample from '../components/ColorContrastExample'; // Adjust the path as needed
import TargetSizeExample from '../components/TargetSizeExample'; // Adjust the path as needed
import MinimumSpacingExample from '../components/MinimumSpacingExample';


const DesignGuidelines = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Design Guidelines</h1>
      <div className="section">
        <h2 className="section-title" id="color-contrast">Color Contrast</h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              Use a high color contrast; a 4.5:1 color ratio meets AA
              accessibility standards, and black on white text is always
              preferred.
            </li>
            <li> This includes in labels and form fields.</li>
          </ul>
        </p>
        </div>
        <div>
          <ColorContrastExample />
        </div>
      <hr className="horizontal-rule" />
      <div className="section">
        <h2 className="section-title" id="minimum-target-size">Minimum Target Size</h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              WCAG AAA standards ask for a minimum of 44px by 44px (CSS) for
              clickable area of a target.
            </li>
            <li>
              If fine motor control is an issue, going above the minimum makes
              it easy for the user to activate target.
            </li>
            <li>This includes buttons and inline links.</li>
          </ul>
        </p>
      </div>
      <div>
      <TargetSizeExample />
    </div>
      <hr className="horizontal-rule" />
      <div className="section">
        <h2 className="section-title" id="minimum-spacing">Minimum Spacing</h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              According to research, a minimum of 6.35 mm or 24 px (CSS) between
              selectable areas gives users freedom from being exact in their
              selection.
            </li>
            <li>
              Adhering to a standard of minimum spacing will decrease the
              chances of frustration and mental load to users who may have
              issues with dexterity, low-vision, or other impediments that may
              slow them down.
            </li>
          </ul>
        </p>
      </div>
      <div>
      <MinimumSpacingExample />
     </div>
      <hr className="horizontal-rule" />
      <div className="section">
        <h2 className="section-title" id="minimum-text-size">Minimum Text Size</h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              As per WCAG guidelines, anything less than 12pt size font is
              considered small.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default DesignGuidelines;
