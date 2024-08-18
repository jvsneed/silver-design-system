import React from "react";
import GuidelinesKey from "../components/GuidelinesKey";
import CognitiveIcon from "../components/CognitiveIcon";
import SensoryIcon from "../components/SensoryIcon";

const NavigationGuidelines = () => {
  return (
    <div className="page-container">
      <h1 className="page-title"> Navigation Guidelines</h1>
      <GuidelinesKey />
      <div className="section">
        <h2 className="section-title">
          Simplify Navigation <CognitiveIcon />
        </h2>

        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              Design clear navigation with minimal number of clicks or taps to
              reach important content.
            </li>
            <li>User descriptive labels for links and buttons.</li>
            <li>
              Avoid deep navigation hierarchies. Keeping menus shallow, two
              labels deep at the most will make navigating the site easier.
            </li>
            <li>
              Tabbed interfaces or simple lists are preferred to drop-down
              menus.
            </li>
          </ul>
        </p>
      </div>

      <hr className="horizontal-rule" />

      <div className="section">
        <h2 className="section-title">
          Orient the User <CognitiveIcon />
        </h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              Match links and menu labels to the page the user will be
              navigating to.
            </li>
            <li>
              Consider adding breadcrumbs and page titles; ensure URLs and page
              titles are consistent with what the user expects to see.
            </li>
          </ul>
        </p>
      </div>
      <hr className="horizontal-rule" />

      <div className="section">
        <h2 className="section-title">
          Help Users Navigate <CognitiveIcon />
        </h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              When applicable, allow for back and forward buttons.This allows
              for options if one forgets something on the previous page or makes
              a mistake, allowing for reduction of user error.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default NavigationGuidelines;
