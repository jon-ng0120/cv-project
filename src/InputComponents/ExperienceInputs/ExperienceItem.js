import React from 'react';

const ExperienceItem = (props) => {
  return (
    <div>
      <div>
        <p>Job Title</p>
        <p>{props.title}</p>
      </div>
      <div>
        <p>Company</p>
        <p>{props.company}</p>
      </div>
      <div>
        <p>Date From</p>
        <p>{props.dateFrom}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
