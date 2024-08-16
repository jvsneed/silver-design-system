import React from "react";
import "./OrientUserExample.css"; 
import Do from './Dos.js';
import Dont from './Donts.js';
import orientUserImage from "../images/orientuser.png";

const OrientUserExample = () => {
  return (
    <div className="guideline-example-container">
      <Do></Do>
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
