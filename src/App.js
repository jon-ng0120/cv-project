// App.js

import React, { useState } from 'react';
import './App.css';
import GeneralInput from './InputComponents/GeneralInput';
import SkillsInput from './InputComponents/SkillInputs/SkillsInput';
import EducationInput from './InputComponents/EducationInputs/EducationInput';
import EducationInputDisplay from './InputComponents/EducationInputs/EducationInputDisplay';
import GeneralDisplay from './DisplayComponents/GeneralDisplay';
import EducationDisplay from './DisplayComponents/EducationDisplay';
import ExperienceDisplay from './DisplayComponents/ExperienceDisplay';
import ExperienceInput from './InputComponents/ExperienceInputs/ExperienceInput';
import ExperienceInputDisplay from './InputComponents/ExperienceInputs/ExperienceInputDisplay';
import SkillsInputDisplay from './InputComponents/SkillInputs/SkillsInputDisplay';
import SkillsDisplay from './DisplayComponents/SkillsDisplay';

const App = () => {
  // GENERAL COMPONENTS HANDLERS
  const [generalInputData, setGeneralInputData] = useState('');
  const generalInputHandler = (generalData) => {
    setGeneralInputData(generalData);
  };

  // SKILLS COMPONENTS HANDLER
  const [skillsInputData, setSkillsInputData] = useState([]);

  const skillsInputHandler = (skillsData) => {
    setSkillsInputData((prevSkills) => {
      return [...prevSkills, skillsData];
    });
  };

  const editSkillHandler = (skillId, skillData) => {
    const skillsList = skillsInputData;
    const updatedSkillsList = skillsList.map((skill) =>
      skill.id === skillId ? { ...skill, ...skillData } : skill
    );
    setSkillsInputData(updatedSkillsList);
  };

  const deleteSkillsHandler = (skillsId) => {
    const skillsList = skillsInputData;
    const newSkillsList = skillsList.filter((skill) => skill.id !== skillsId);
    setSkillsInputData(newSkillsList);
  };

  // EDUCATION COMPONENTS HANDLERS
  const [educationInputData, setEducationInputData] = useState([]);

  const educationInputHandler = (educationData) => {
    setEducationInputData((prevEducation) => {
      return [...prevEducation, educationData];
    });
  };

  const editEducationHandler = (educationId, schoolData) => {
    const educationList = educationInputData;
    const updatedEducationList = educationList.map((school) =>
      school.id === educationId ? { ...school, ...schoolData } : school
    );
    setEducationInputData(updatedEducationList);
  };

  const deleteEducationHandler = (educationId) => {
    const educationList = educationInputData;
    const newEducationList = educationList.filter(
      (school) => school.id !== educationId
    );
    setEducationInputData(newEducationList);
  };

  // EXPERIENCE COMPONENT HANDLERS
  const [experienceInputData, setExperienceInputData] = useState([]);

  const experienceInputHandler = (experienceData) => {
    setExperienceInputData((prevExperience) => {
      return [...prevExperience, experienceData];
    });
  };

  const editExperienceHandler = (experienceId, experienceData) => {
    const experienceList = experienceInputData;
    const updatedExperienceList = experienceList.map((experience) =>
      experience.id === experienceId
        ? { ...experience, ...experienceData }
        : experience
    );
    setExperienceInputData(updatedExperienceList);
  };

  const deleteExperienceHandler = (experienceId) => {
    const experienceList = experienceInputData;
    const newExperienceList = experienceList.filter(
      (experience) => experience.id !== experienceId
    );
    setExperienceInputData(newExperienceList);
  };

  return (
    <div id="main-container">
      <div id="inputs-container">
        {/* GENERAL INPUT */}
        <GeneralInput onGeneralInputChange={generalInputHandler} />

        {/* SKILLS INPUT */}
        <SkillsInput onSkillsInputChange={skillsInputHandler} />
        <SkillsInputDisplay
          skillsData={skillsInputData}
          editSkill={editSkillHandler}
          deleteSkill={deleteSkillsHandler}
        />
        {/* EDUCATION INPUT */}
        <EducationInput onEducationInputChange={educationInputHandler} />
        <EducationInputDisplay
          educationData={educationInputData}
          deleteSchool={deleteEducationHandler}
          editSchool={editEducationHandler}
        />

        {/* EXPERIENCE INPUT */}
        <ExperienceInput onExperienceInputChange={experienceInputHandler} />
        <ExperienceInputDisplay
          experienceData={experienceInputData}
          deleteExperience={deleteExperienceHandler}
          editExperience={editExperienceHandler}
        />
      </div>
      <div id="display-container">
        <GeneralDisplay generalData={generalInputData} />
        <p className="header">SKILLS</p>
        <SkillsDisplay skillsData={skillsInputData} />
        <p className="header">PROFESSIONAL EXPERIENCE</p>
        <ExperienceDisplay experienceData={experienceInputData} />
        <p className="header">EDUCATION</p>
        <EducationDisplay educationData={educationInputData} />
      </div>
    </div>
  );
};

export default App;
