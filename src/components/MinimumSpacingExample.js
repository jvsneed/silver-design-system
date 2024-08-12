import React from 'react';
import './MinimumSpacingExample.css';

const MinimumSpacingExample = () => {
  return (
    <div className="minimum-spacing-example-container">
      <div className="example-item correct">
        <div className="example-header">
          <div className="line green"></div>
          <div className="example-box">
            <div className="spacing-box correct">
              <label className="label">TIME OF DAY (Optional)</label>
              <button className="time-button">All day <span className="clock-icon">🕒</span></button>
            </div>
          </div>
        </div>
        <div className="example-description">
          <img src="https://img.icons8.com/color/48/000000/checkmark.png" alt="Checkmark" className="status-icon" />
          <p>The width of this gap is 85px.</p>
        </div>
      </div>

      <div className="example-item incorrect">
        <div className="example-header">
          <div className="line red"></div>
          <div className="example-box">
            <div className="spacing-box incorrect">
              <ul className="flight-list">
                <li className="flight-item">San Francisco, CA - San Francisco Intl (SFO)</li>
                <li className="flight-item">Chicago, IL - All airports (CHI)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="example-description">
          <img src="https://img.icons8.com/color/48/000000/cancel.png" alt="Error" className="status-icon"/>
          <p>Short physical proximity may lead to selection mistakes. This gap width is 4px.</p>
        </div>
      </div>
    </div>
  );
};

export default MinimumSpacingExample;
