import React from 'react';
import EducationInputItem from './EducationInputItem';

const EducationInputDisplay = (props) => {
  const educationList = props.educationData.map((school) => {
    return (
      <EducationInputItem
        key={school.id}
        id={school.id}
        name={school.name}
        location={school.location}
        degree={school.degree}
        dateFrom={school.dateFrom}
        dateTo={school.dateTo}
        current={school.current}
        deleteSchoolHandler={props.deleteSchool}
        editSchoolHandler={props.editSchool}
      />
    );
  });
  return <div>{educationList}</div>;
};

export default EducationInputDisplay;
