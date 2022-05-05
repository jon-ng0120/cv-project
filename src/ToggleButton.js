import React from 'react';

const ToggleButton = (props) => {
  return (
    <div className="toggle-container">
      <p>Preview Mode</p>
      <label className="toggle" htmlFor="toggleSwitch">
        <input
          className="toggle__input"
          type="checkbox"
          id="toggleSwitch"
          onClick={props.onPreviewChange}
        />
        <div className="toggle__fill"></div>
      </label>
    </div>
  );
};

export default ToggleButton;
