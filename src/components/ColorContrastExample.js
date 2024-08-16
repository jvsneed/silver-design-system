import React from "react";
import "./ColorContrastExample.css"; // Import the CSS file

const ColorContrastExample = () => {
  return (
    <div className="color-contrast-example-container">
      <div className="example-item">
        <div className="do">☑ Do</div>
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
        <div className="dont">☒ Don't</div>
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
