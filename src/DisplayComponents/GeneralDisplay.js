import React from 'react';

const GeneralDisplay = (props) => {
  return (
    <div>
      <div>{props.generalData.firstName}</div>
      <div>{props.generalData.lastName}</div>
      <div>{props.generalData.city}</div>
      <div>{props.generalData.province}</div>
      <div>{props.generalData.postal}</div>
      <div>{props.generalData.phone}</div>
      <div>{props.generalData.email}</div>
    </div>
  );
};

export default GeneralDisplay;
