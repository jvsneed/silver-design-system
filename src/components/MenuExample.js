import React from 'react';
import './MenuExample.css'; // Import the CSS file

const MenuExample = () => {
  return (
    <div className="menu-container">
      <div className="menu-example-do">
        <div className="do">☑ Do</div>
        <div className="note">
          <span>The color contrast is 21:1 ratio, passing accessibility requirements and is easier to read for all users.</span>
        </div>
        <div className="menu">
          <div className="menu-item">
            <div className="icon">
              <div className="menu-icon"></div>
            </div>
            <span>Menu</span>
          </div>
          <div className="menu-item">
            <div className="icon">
              <img src="https://img.icons8.com/ios/50/000000/airplane-take-off.png" alt="Flights" />
            </div>
            <span>Flights</span>
          </div>
          <div className="menu-item">
            <div className="icon">
              <img src="https://img.icons8.com/ios/50/000000/car--v2.png" alt="Car Rental" />
            </div>
            <span>Car Rental</span>
          </div>
          <div className="menu-item">
            <div className="icon">
              <img src="https://img.icons8.com/ios/50/000000/globe--v2.png" alt="Explore" />
            </div>
            <span>Explore</span>
          </div>
        </div>
      
      </div>
      <div className="menu-example-dont">
        <div className='dont'>☒ Don't</div>
        <div className="note">
          <span>Many sites collapse the navigation menu by default and use icons to help with navigation. Avoid collapsing the menu initially, and give the user the option to close it if they prefer.</span>
        </div>
        <div className="comparison-menu">
          <div className="menu-item">
            <div className="icon">
              <div className="menu-icon"></div>
            </div>
          </div>
          <div className="menu-item">
            <div className="icon">
              <img src="https://img.icons8.com/ios/50/000000/airplane-take-off.png" alt="Flights" />
            </div>
          </div>
          <div className="menu-item">
            <div className="icon">
              <img src="https://img.icons8.com/ios/50/000000/car--v2.png" alt="Car Rental" />
            </div>
          </div>
          <div className="menu-item">
            <div className="icon">
              <img src="https://img.icons8.com/ios/50/000000/globe--v2.png" alt="Explore" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuExample;
