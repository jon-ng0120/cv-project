import React from 'react';
import SkillsInputItem from './SkillsInputItem';

const SkillsInputDisplay = (props) => {
  const skillsList = props.skillsData.map((skill) => {
    return (
      <SkillsInputItem
        key={skill.id}
        id={skill.id}
        skill={skill.skill}
        deleteSkillHandler={props.deleteSkill}
        editSkillHandler={props.editSkill}
      />
    );
  });
  return <div>{skillsList}</div>;
};

export default SkillsInputDisplay;
