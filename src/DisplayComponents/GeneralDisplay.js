import React from 'react';

const GeneralDisplay = (props) => {
  return (
    <div id="contact-container">
      <p id="name-container">
        {props.generalData.firstName} {props.generalData.lastName}
      </p>
      <div id="contact-info">
        <div>
          <span className="material-icons">call</span>
          <p>{props.generalData.phone}</p>
        </div>
        <div>
          <span className="material-icons">email</span>
          <p>{props.generalData.email}</p>
        </div>
        <div id="address">
          <div>
            <span className="material-icons">
              <span className="material-icons-outlined">location_on</span>
            </span>
          </div>
          <div>
            <p>{props.generalData.street}</p>
            <p>
              {props.generalData.city} {props.generalData.province}{' '}
              {props.generalData.postal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDisplay;
