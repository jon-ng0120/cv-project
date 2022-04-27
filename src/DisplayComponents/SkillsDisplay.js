import React from 'react';
import SkillItem from './SkillItem';

const SkillsDisplay = (props) => {
  const skillsList = props.skillsData.map((skill) => {
    return <SkillItem key={skill.id} skill={skill.skill} />;
  });
  return (
    <div id="skills-container">
      <ul>{skillsList}</ul>
    </div>
  );
};

export default SkillsDisplay;
