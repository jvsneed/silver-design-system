import React from "react";
import GuidelinesKey from "../components/GuidelinesKey";
import CognitiveIcon from "../components/CognitiveIcon";
import SensoryIcon from "../components/SensoryIcon";
import PhysicalIcon from "../components/PhysicalIcon";
import MenuExample from "../components/MenuExample";
import Do from "../components/Dos.js";
import Dont from "../components/Donts.js";

const ContentGuidelines = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Content Guidelines</h1>
      <GuidelinesKey />
      <div className="section">
        <h2 className="section-title">
          Use Plain Language <CognitiveIcon />
        </h2>

        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              Use common and familiar language that is rooted more in real life
              than digital.
            </li>
            <li>Avoid using industry specific jargon.</li>
            <li>
              For large amounts of text, verify that the reading comprehension
              level does not exceed 9th grade.
            </li>
            <li>
              Use a tool like{" "}
              <a
                href="https://readable.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Readable.com
              </a>{" "}
              to check this.
            </li>
          </ul>
        </p>
        <div className="understand-section">
          <div className="good-section">
            <Do></Do>
            <h1 className="understand-heading">instead of...</h1>
            <span>click</span>
            <span>submit</span>
            <span>authenticate</span>
            <span>sign up</span>
            <span>reset form</span>
          </div>

          <div className="bad-section">
            <Dont></Dont>

            <h1 className="understand-heading">try</h1>
            <span>select</span>
            <span>finish or send</span>
            <span>log in</span>
            <span>create an account</span>
            <span>clear form</span>
          </div>
        </div>
      </div>

      <hr className="horizontal-rule" />

      <div className="section">
        <h2 className="section-title">
          Clearly Label Information <CognitiveIcon />
        </h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              Ensure buttons, links, and call to actions are labeled clearly on
              the interface. Avoid using common terminology and icons in unclear
              ways. For example, use “Search” exclusively for global site search
              functionality but “Find a Flight” for a button to search for
              flight options.
            </li>
            <li>
              Icons, inputs, and other page elements should be clearly labeled.
            </li>
            <li>
              Avoid hiding important text, such as menus, especially on a page’s
              initial state.
            </li>
          </ul>
        </p>
        <MenuExample />
      </div>

      <hr className="horizontal-rule" />

      <div className="section">
        <h2 className="section-title">
          Break Down Content <CognitiveIcon />
          <SensoryIcon />
        </h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              For large amounts of text, organize content into short sections.
            </li>
            <li>
              Avoid long blocks of text and use headings and bullet points to
              improve scannability.
            </li>
          </ul>
        </p>
      </div>

      <hr className="horizontal-rule" />

      <div className="section">
        <h2 className="section-title">
          Provide Text Alternatives for Media <CognitiveIcon />
          <SensoryIcon />
        </h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>
              Include text captions or transcripts for audio and video to ensure
              accessibility for those experiencing hearing loss.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default ContentGuidelines;
