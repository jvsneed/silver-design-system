import React from "react";
import GuidelinesKey from "../components/GuidelinesKey";
import CognitiveIcon from "../components/CognitiveIcon";
import SensoryIcon from "../components/SensoryIcon";
import PhysicalIcon from "../components/PhysicalIcon";

const GuidanceGuidelines = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">User Guidance and Help Guidelines</h1>
      <GuidelinesKey />
      <div className="section">
        <h2 className="section-title">
          Provide Help and Tutorials <CognitiveIcon />
        </h2>

        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              Include a tutorial or help section to guide users through features
              of the site or application.
            </li>
            <li>
              Provide a contact option, such as chat or phone number, for those
              needing live assistance.
            </li>
          </ul>
        </p>
      </div>

      <hr className="horizontal-rule" />

      <div className="section">
        <h2 className="section-title">
          Site Map and Search <CognitiveIcon />
        </h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              Incorporate a site map and a simple search function to help users
              find information quickly.
            </li>
          </ul>
        </p>
      </div>

    </div>
  );
};

export default GuidanceGuidelines;
