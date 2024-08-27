import React from "react";
import GuidelinesKey from "../components/GuidelinesKey";
import CognitiveIcon from "../components/CognitiveIcon";
import SensoryIcon from "../components/SensoryIcon";
import PhysicalIcon from "../components/PhysicalIcon";
import MinimumSpacingExample from "../components/MinimumSpacingExample";

const LayoutGuidelines = () => {
  return (
    <div className="page-container">
      <h1 className="page-title"> Layout and Spacing Guidelines</h1>
      <GuidelinesKey />
      <div className="section">
        <h2 className="section-title">
          Consistent Layout <CognitiveIcon />
        </h2>

        <p className="section-content">
          <ul className="guidelines-list">
            <li>Maintain a consistent layout across all pages.</li>
            <li>
              Place navigation elements, buttons, and icons in a locations that
              are predictable to users to reduce cognitive load.
            </li>
          </ul>
        </p>
      </div>

      <hr className="horizontal-rule" />

      <div className="section">
        <h2 className="section-title">
          Increase Element Spacing <SensoryIcon /> <PhysicalIcon />
        </h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              A minimum of 24 px between selectable areas gives users freedom
              from being exact in their selection. Adhering to a standard of
              minimum spacing will decrease the chances of frustration and
              mental load to users who may have issues with dexterity,
              low-vision, or other impediments that may slow them down.
            </li>
          </ul>
        </p>
        <MinimumSpacingExample />

      </div>
    </div>
  );
};

export default LayoutGuidelines;
