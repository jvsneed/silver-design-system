import React from 'react';
import './CognitiveGuidelines.css'; // Import the CSS file
import MenuExample from '../components/MenuExample'; // Import the MenuExample component
import OrientUserExample from '../components/OrientUserExample'; // Import the OrientUserExample component

const CognitiveGuidelines = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Cognitive Guidelines</h1>
      <div className="section">
        <h2 className="section-title">Understandable Language</h2>
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
      </div>
      <hr className="horizontal-rule" />
      <div className="section">
        <h2 className="section-title">Clear Labels</h2>
        <p className="section-content">
          <ul className="guidelines-list">
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
        <h2 className="section-title">Orient the User</h2>
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
        <OrientUserExample /> {/* Add the OrientUserExample component here */}
      </div>
      <hr className="horizontal-rule" />
      <div className="section">
        <h2 className="section-title">Navigation</h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>When applicable, allow for back and forward buttons.</li>
            <li>
              This allows for options if one forgets something on the previous
              page or makes a mistake, allowing for reduction of user error.
            </li>
            <li>
              Avoid deep navigation hierarchies. Keeping menus shallow, two
              labels deep at the most will make navigating the site easier.
            </li>
          </ul>
        </p>
      </div>
      <hr className="horizontal-rule" />
      <div className="section">
        <h2 className="section-title">Understandability</h2>
        <p className="section-content">
          <ul className="guidelines-list">
            <li>Use common language that is easy to understand.</li>
            <li>Avoid technical or industry jargon.</li>
            <li>
              Consider using familiar terms that are rooted more in real life
              than digital.
            </li>
          </ul>
        </p>
        <div className="understand-section">
          <div className="good-section">
            <h1 className="understand-heading">instead of...</h1>
            <span>click</span>
            <span>submit</span>
            <span>authenticate</span>
            <span>sign up</span>
            <span>reset form</span>
          </div>

          <div className="bad-section">
            <h1 className="understand-heading">try</h1>
            <span>select</span>
            <span>finish or send</span>
            <span>log in</span>
            <span>create an account</span>
            <span>clear form</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CognitiveGuidelines;
