import React from "react";
import GuidelinesKey from "../components/GuidelinesKey";
import CognitiveIcon from "../components/CognitiveIcon";
import SensoryIcon from "../components/SensoryIcon";

const TextGuidelines = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Text and Type Guidelines</h1>
      <GuidelinesKey />
      <div className="section">
        <h2 className="section-title">
          Use Large Readable Fonts <CognitiveIcon /> <SensoryIcon />
        </h2>

        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              Use a minimum font size of 14 pt for body text, preferably using
              sans-serif fonts such as Helvetica, Arial, or other similar fonts
              to improve readability.
            </li>
            <li>
              Per WCAG guidelines, anything less than 12 pt size font is
              considered small and is not compliant.
            </li>
            <li>
              Avoid using serif, decorative, or novelty fonts in body text as
              these can be hard to read.
            </li>
          </ul>
        </p>
      </div>

      <hr className="horizontal-rule" />

      <div className="section">
        <h2 className="section-title">
          Use High Color Contrast (Text Guidelines) <SensoryIcon />
        </h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              Text should have a high contrast against the background. Use dark
              text on a light background A 4.5:1 color ratio meets AA
              accessibility standards, and black on white text is always
              preferred.
            </li>
            <li>
              If fine motor control is an issue, going above the minimum makes
              it easy for the user to activate target.
            </li>
            <li>This includes buttons and inline links.</li>
          </ul>
        </p>
      </div>

      <hr className="horizontal-rule" />
      
      <div className="section">
        <h2 className="section-title">
        Limit Text Decoration <CognitiveIcon /> <SensoryIcon />
        </h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
                Limit the usage of all uppercase letters (CAPS); sentence case is always preferred for body text.
            </li>
            <li>
                Uppercase can be used sparingly in headings or other areas where attention needs to be called.
            </li>
            <li>
                Uppercase text can be interpreted as shouting or errors for this user group. Underlined text should be limited to links. 
            </li>
          </ul>
        </p>
      </div>      
    </div>
  );
};

export default TextGuidelines;
