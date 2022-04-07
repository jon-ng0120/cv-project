// App.js

import React, { useState } from 'react';
import './App.css';
import GeneralInput from './InputComponents/GeneralInput';
import EducationInput from './InputComponents/EducationInputs/EducationInput';
import EducationInputDisplay from './InputComponents/EducationInputs/EducationInputDisplay';
import GeneralDisplay from './DisplayComponents/GeneralDisplay';
import EducationDisplay from './DisplayComponents/EducationDisplay';
import ExperienceDisplay from './DisplayComponents/ExperienceDisplay';
import ExperienceInput from './InputComponents/ExperienceInputs/ExperienceInput';
import ExperienceInputDisplay from './InputComponents/ExperienceInputs/ExperienceInputDisplay';

const App = () => {
  // GENERAL COMPONENTS HANDLERS
  const [generalInputData, setGeneralInputData] = useState('');
  const generalInputHandler = (generalData) => {
    setGeneralInputData(generalData);
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
        <GeneralInput onGeneralInputChange={generalInputHandler} />
        <EducationInput onEducationInputChange={educationInputHandler} />
        <EducationInputDisplay
          educationData={educationInputData}
          deleteSchool={deleteEducationHandler}
          editSchool={editEducationHandler}
        />
        <ExperienceInput onExperienceInputChange={experienceInputHandler} />
        <ExperienceInputDisplay
          experienceData={experienceInputData}
          deleteExperience={deleteExperienceHandler}
          editExperience={editExperienceHandler}
        />
      </div>
      <div id="display-container">
        <GeneralDisplay generalData={generalInputData} />
        <p className="header">EDUCATION</p>
        <EducationDisplay educationData={educationInputData} />
        <p className="header">PROFESSIONAL EXPERIENCE</p>
        <ExperienceDisplay experienceData={experienceInputData} />
      </div>
    </div>
  );
};

export default App;
