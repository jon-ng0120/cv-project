import React from 'react';
import EducationInputItem from './EducationInputItem';

const EducationInputDisplay = (props) => {
  const educationList = props.educationData.map((school) => {
    return (
      <EducationInputItem
        key={school.id}
        id={school.id}
        name={school.name}
        city={school.city}
        province={school.province}
        degree={school.degree}
        dateFrom={school.dateFrom}
        dateTo={school.dateTo}
        deleteSchoolHandler={props.deleteSchool}
        editSchoolHandler={props.editSchool}
      />
    );
  });
  return <div>{educationList}</div>;
};

export default EducationInputDisplay;
