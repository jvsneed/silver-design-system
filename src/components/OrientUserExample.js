import React from "react";
import "./OrientUserExample.css"; // Import the CSS file
import orientUserImage from "../images/orientuser.png"; // Adjust the path to match your project structure

const OrientUserExample = () => {
  return (
    <div className="guideline-example-container">
      <div className="do">☑ Do</div>
      <div className="note">
        <span>
          It is clear where the user has navigated to based on the navigation menu styling, and the consistent page title.
        </span>
      </div>
      <div className="guideline-example-right">
        <img src={orientUserImage} alt="Guideline Example" />
      </div>

    </div>
  );
};

export default OrientUserExample;
