// App.js

import React, { useState } from 'react';
import './App.css';
import GeneralInput from './InputComponents/GeneralInput';
import EducationInput from './InputComponents/EducationInput';
import EducationInputDisplay from './DisplayComponents/EducationInputDisplay';
import GeneralDisplay from './DisplayComponents/GeneralDisplay';
import EducationDisplay from './DisplayComponents/EducationDisplay';

const App = () => {
  const [generalInputData, setGeneralInputData] = useState('');
  const [educationInputData, setEducationInputData] = useState([]);

  const generalInputHandler = (generalData) => {
    setGeneralInputData(generalData);
  };

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

  return (
    <div id="main-container">
      <GeneralInput onGeneralInputChange={generalInputHandler} />
      <EducationInput onEducationInputChange={educationInputHandler} />
      <EducationInputDisplay
        educationData={educationInputData}
        deleteSchool={deleteEducationHandler}
        editSchool={editEducationHandler}
      />
      <GeneralDisplay generalData={generalInputData} />
      <EducationDisplay educationData={educationInputData} />
    </div>
  );
};

export default App;
