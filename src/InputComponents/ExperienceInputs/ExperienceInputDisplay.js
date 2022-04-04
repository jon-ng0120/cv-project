import React from 'react';
import ExperienceInputItem from './ExperienceInputItem';

const ExperienceInputDisplay = (props) => {
  const experienceList = props.experienceData.map((experience) => {
    return (
      <ExperienceInputItem
        key={experience.id}
        id={experience.id}
        title={experience.title}
        location={experience.location}
        company={experience.company}
        dateFrom={experience.dateFrom}
        dateTo={experience.dateTo}
        description={experience.description}
        deleteExperienceHandler={props.deleteExperience}
        editExperienceHandler={props.editExperience}
      />
    );
  });
  return <div>{experienceList}</div>;
};

export default ExperienceInputDisplay;
