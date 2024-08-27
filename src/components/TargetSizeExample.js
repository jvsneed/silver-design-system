import React from 'react';
import Do from './Dos.js';
import Dont from './Donts.js';
import './TargetSizeExample.css';

const TargetSizeExample = () => {
  return (
    <div className="target-size-example-container">
      <div className="example-item correct">
      <Do></Do>
      <div className="note">
          <span>The height of this target size is greater than 44px.</span>
        </div>
        <div className="example-header">
          <div className="example-box">
            <div className="toggle-switch"></div>
          </div>
        </div>

      </div>

      <div className="example-item incorrect">
      <Dont></Dont>
      <div className="note">
          <span>This target size height is less than 44px.</span>
        </div>
        <div className="example-header">
          <div className="example-box">
            <div className="small-checkbox"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetSizeExample;
