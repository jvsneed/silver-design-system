import React from "react";
import GuidelinesKey from "../components/GuidelinesKey";
import CognitiveIcon from "../components/CognitiveIcon";
import SensoryIcon from "../components/SensoryIcon";

const ColorGuidelines = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Color and Contrast Guidelines</h1>
      <GuidelinesKey />
      <div className="section">
        <h2 className="section-title">
          Use Accessible Color Palettes <CognitiveIcon /> <SensoryIcon />
        </h2>

        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              Colors like blue and yellow can be difficult for seniors to see.
              Colors like red and green are often interpreted as error and
              successes, and may be confusing to use otherwise.
            </li>
            <li>Avoid light or pastel colors to differentiate elements.</li>
            <li>
              High contrast color schemes in a neutral color palette can provide
              more clarity.
            </li>
          </ul>
        </p>
      </div>

      <hr className="horizontal-rule" />

      <div className="section">
        <h2 className="section-title">
          Properly Convey Information <CognitiveIcon /> <SensoryIcon />
        </h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>Color should not be the only method to convey information.</li>
            <li>
              Add text labels and icons to better support users with color or
              vision loss.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default ColorGuidelines;
