import React from 'react';
import Do from './Dos.js';
import Dont from './Donts.js';
import './MinimumSpacingExample.css';

const MinimumSpacingExample = () => {
  return (
    <div className="minimum-spacing-example-container">
      <div className="example-item correct">
      <Do></Do>
      <div className="note">
          <span>The width of this gap is 65px.</span>
        </div>
        <div className="example-header">
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
      </div>

      <div className="example-item incorrect">
      <Dont></Dont>
      <div className="note">
          <span>Short physical proximity may lead to selection mistakes. This gap width is 4px.</span>
        </div>
        <div className="example-header">
          <div className="example-box">
            <div className="spacing-box incorrect">
              <div className="flight-list">
                <div className="flight-item">San Francisco, CA - San Francisco Intl (SFO)</div>
                <div className="flight-item">Chicago, IL - All airports (CHI)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimumSpacingExample;
