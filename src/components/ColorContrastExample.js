import React from "react";
import Do from './Dos.js';
import Dont from './Donts.js';
import "./ColorContrastExample.css"; // Import the CSS file

const ColorContrastExample = () => {
  return (
    <div className="color-contrast-example-container">
      <div className="example-item">
        <Do></Do>
        <div className="note">
          <span>
            The color contrast is 21:1 ratio, passing accessibility requirements
            and is easier to read for all users.
          </span>
        </div>
        <div>
          <div className="example-input correct-box">
            <span>Placeholder filled text</span>
          </div>
        </div>
      </div>
      <div className="example-item">
        <Dont></Dont>
        <div className="note">
          <span>
            The grey background and light colored text is difficult to read and
            does not meet web accessibility standards.
          </span>
        </div>
        <div className="example-box incorrect-box">
          <span>Placeholder filled text</span>
        </div>
      </div>
    </div>
  );
};

export default ColorContrastExample;
