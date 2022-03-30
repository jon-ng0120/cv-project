import React from 'react';

const ExperienceItem = (props) => {
  return (
    <div>
      <div>
        <p>School Name</p>
        <p>{props.name}</p>
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

export default ExperienceItem;
