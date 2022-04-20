import React from 'react';
import EducationItem from './EducationItem';

const EducationDisplay = (props) => {
  const educationList = props.educationData.map((school) => {
    return (
      <EducationItem
        key={school.id}
        name={school.name}
        degree={school.degree}
        location={school.location}
        dateFrom={school.dateFrom}
        dateTo={school.dateTo}
      />
    );
  });
  return <div>{educationList}</div>;
};

export default EducationDisplay;
