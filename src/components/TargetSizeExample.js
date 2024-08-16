import React from 'react';
import './TargetSizeExample.css'; // Import the CSS file

const TargetSizeExample = () => {
  return (
    <div className="target-size-example-container">
      <div className="example-item correct">
      <div className="do">☑ Do</div>
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
      <div className='dont'>☒ Don't</div>
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
