import React from 'react';
import ExperienceItem from './ExperienceItem';

const ExperienceDisplay = (props) => {
  const experienceList = props.experienceData.map((experience) => {
    return (
      <ExperienceItem
        key={experience.id}
        company={experience.company}
        title={experience.title}
        location={experience.location}
        dateFrom={experience.dateFrom}
        dateTo={experience.dateTo}
        description={experience.description}
      />
    );
  });
  return <div>{experienceList}</div>;
};

export default ExperienceDisplay;
