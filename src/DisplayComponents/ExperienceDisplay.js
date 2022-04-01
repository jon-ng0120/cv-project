import React from 'react';
import ExperienceItem from '../InputComponents/ExperienceInputs/ExperienceItem';

const ExperienceDisplay = (props) => {
  const experienceList = props.experienceData.map((experience) => {
    return (
      <ExperienceItem
        key={experience.id}
        title={experience.title}
        company={experience.company}
        dateFrom={experience.dateFrom}
      />
    );
  });
  return <div>{experienceList}</div>;
};

export default ExperienceDisplay;
