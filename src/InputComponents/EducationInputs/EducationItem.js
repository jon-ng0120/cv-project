import React from 'react';

const EducationItem = (props) => {
  return (
    <div>
      <div>
        <p className="item-header">{props.name}</p>
      </div>
      <div>
        <p>Degree</p>
        <p>{props.degree}</p>
      </div>
      <div>
        <p>Date</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default EducationItem;
