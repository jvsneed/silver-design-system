import React from 'react';
import './TargetSizeExample.css'; // Import the CSS file

const TargetSizeExample = () => {
  return (
    <div className="target-size-example-container">
      <div className="example-item correct">
        <div className="example-header">
          <div className="line green"></div>
          <div className="example-box">
            <div className="toggle-switch"></div>
          </div>
        </div>
        <div className="example-description">
          <img src="https://img.icons8.com/color/48/000000/checkmark.png" alt="Checkmark" className="status-icon" />
          <p>The height of this target size is greater than 44px.</p>
        </div>
      </div>

      <div className="example-item incorrect">
        <div className="example-header">
          <div className="line red"></div>
          <div className="example-box">
            <div className="small-checkbox"></div>
          </div>
        </div>
        <div className="example-description">
          <img src="https://img.icons8.com/color/48/000000/cancel.png" alt="Error" className="status-icon"/>
          <p>This target size height is less than 44px.</p>
        </div>
      </div>
    </div>
  );
};

export default TargetSizeExample;
