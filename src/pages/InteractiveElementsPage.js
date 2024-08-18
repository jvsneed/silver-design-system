import React from "react";
import GuidelinesKey from "../components/GuidelinesKey";
import CognitiveIcon from "../components/CognitiveIcon";
import SensoryIcon from "../components/SensoryIcon";
import PhysicalIcon from "../components/PhysicalIcon";
import TargetSizeExample from "../components/TargetSizeExample";

const InteractiveElementsGuidelines = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Interactive Elements Guidelines</h1>
      <GuidelinesKey />
      <div className="section">
        <h2 className="section-title">
          Use Proper Target Sizing <SensoryIcon /><PhysicalIcon />
        </h2>

        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              WCAG AAA standards ask for a minimum of 44px by 44px (CSS) for
              clickable area of a target. If fine motor control is an issue,
              going above the minimum makes it easy for the user to activate
              target. This includes buttons and inline links.
            </li>
          </ul>
        </p>
        <TargetSizeExample />

      </div>

      <hr className="horizontal-rule" />

      <div className="section">
        <h2 className="section-title">
          Simplify Touch and Gesture Controls <PhysicalIcon />
        </h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              Complex gestures like drag and drop and tap to hold can be
              difficult for senior users. Avoid using them when possible.
            </li>
          </ul>
        </p>
      </div>

      <hr className="horizontal-rule" />

      <div className="section">
        <h2 className="section-title">
          Provide Feedback <SensoryIcon /><PhysicalIcon />
        </h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>Offer immediate and clear feedback for all interactions.</li>
            <li>
              Visual is the most important feedback form, but including a mix of
              auditory and haptic feedback can provide a more intuitive
              experience.
            </li>
          </ul>
        </p>
      </div>

      <hr className="horizontal-rule" />

      <div className="section">
        <h2 className="section-title">
          Let Users Make Mistakes <CognitiveIcon /><PhysicalIcon />
        </h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              Allow easy correction of errors by including features like undo.
            </li>
            <li>
              Ensure error messages are easy to understand, succinct, and
              positioned properly on the screen.
            </li>
            <li>
              Error messages should be prominent on the screen but also clearly
              help the user understand where and how to recover from their
              error.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default InteractiveElementsGuidelines;
