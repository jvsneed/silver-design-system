import React from "react";
import "./OrientUserExample.css"; // Import the CSS file
import orientUserImage from "../images/orientuser.png"; // Adjust the path to match your project structure

const OrientUserExample = () => {
  return (
    <div className="guideline-example-container">
      <div className="guideline-example-right">
        <img src={orientUserImage} alt="Guideline Example" />
      </div>
      <div className="ou-note">
        <div className="note-icon">
          <img src="https://img.icons8.com/ios/50/4caf50/ok.png" alt="Check mark" />
        </div>
        <span>
          It is clear where the user has navigated to based on the navigation menu styling, and the consistent page title.
        </span>
      </div>
    </div>
  );
};

export default OrientUserExample;
