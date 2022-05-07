import React from 'react';

const ToggleButton = (props) => {
  return (
    <div className="toggle-container">
      <div>
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

      {props.canExportPdf && (
        <span
          title="Download as PDF"
          id="pdf"
          className="material-icons"
          onClick={props.onPdfClick}
        >
          picture_as_pdf
        </span>
      )}
    </div>
  );
};

export default ToggleButton;
