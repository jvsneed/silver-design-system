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
              <div className="button-spacing">
                <div>
                  <label className="label">TIME OF DAY (Optional)</label>
                  <div className="time-button">All day <span className="clock-icon">🕒</span></div>
                </div>
                <div>
                  <label className="label">TIME OF DAY (Optional)</label>
                  <div className="time-button">All day <span className="clock-icon">🕒</span></div>
                </div>
                </div>
            
            </div>
          </div>
        </div>
        <div className="example-description">
          <img src="https://img.icons8.com/color/48/000000/checkmark.png" alt="Checkmark" className="status-icon" />
          <p>The width of this gap is 65px.</p>
        </div>
      </div>

      <div className="example-item incorrect">
        <div className="example-header">
          <div className="line red"></div>
          <div className="example-box">
            <div className="spacing-box incorrect">
              <div className="flight-list">
                <div className="flight-item">San Francisco, CA - San Francisco Intl (SFO)</div>
                <div className="flight-item">Chicago, IL - All airports (CHI)</div>
              </div>
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
