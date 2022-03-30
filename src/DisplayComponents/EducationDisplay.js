import React from 'react';
import EducationItem from '../InputComponents/EducationInputs/EducationItem';

const EducationDisplay = (props) => {
  const educationList = props.educationData.map((school) => {
    return (
      <EducationItem
        key={school.id}
        name={school.name}
        degree={school.degree}
        date={school.date}
      />
    );
  });
  return <div>{educationList}</div>;
};

export default EducationDisplay;
