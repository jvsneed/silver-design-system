import React from 'react';
import './ColorContrastExample.css'; // Import the CSS file

const ColorContrastExample = () => {
  return (
    <div className="color-contrast-example-container">
      <div className="example-item">
        <div className="example-header correct">
          <div className="line green"></div>
          <div className="example-input correct-box">
            <span>Placeholder filled text</span>
          </div>
        </div>
        <div className="example-description">
          <img src="https://img.icons8.com/color/48/000000/checkmark.png" alt="Checkmark" />
          <p>The color contrast is 21:1 ratio, passing accessibility requirements and is easier to read for all users.</p>
        </div>
      </div>

      <div className="example-item">
        <div className="example-header incorrect">
          <div className="line red"></div>
          <div className="example-box incorrect-box">
            <span>Placeholder filled text</span>
          </div>
        </div>
        <div className="example-description">
          <img src="https://img.icons8.com/color/48/000000/cancel.png" alt="Error" />
          <p>The grey background and light colored text is difficult to read and does not meet web accessibility standards.</p>
        </div>
      </div>
    </div>
  );
};

export default ColorContrastExample;
