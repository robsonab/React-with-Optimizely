import React from "react";

function TopBarItem({ header, description, icon }) {
  return (
    <div className="top-bar-item">
      <div className="top-bar-icon">
        <i className={icon}></i>
      </div>
      <div className="top-bar-text">
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TopBarItem;
