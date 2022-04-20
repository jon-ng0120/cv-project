import React from 'react';
import formatDate from './formatDate';

const EducationItem = (props) => {
  return (
    <div className="education-container">
      <div className="education-row">
        <div>
          <p className="item-header">{props.name}</p>
          <p>{props.location}</p>
        </div>
        <div>
          <p className="highlight">
            {formatDate(props.dateFrom)} - {formatDate(props.dateTo)}
          </p>
        </div>
      </div>
      <p>{props.degree}</p>
    </div>
  );
};

export default EducationItem;
