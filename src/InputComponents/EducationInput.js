import React, { useState } from 'react';

const EducationInput = (props) => {
  const [isNew, setIsNew] = useState(true);
  const [enteredSchoolName, setEnteredSchoolName] = useState('');
  const [enteredDegree, setEnteredDegree] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const schoolNameHandler = (e) => {
    setEnteredSchoolName(e.target.value);
  };

  const degreeHandler = (e) => {
    setEnteredDegree(e.target.value);
  };

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const schoolData = {
      id: Date.now(),
      name: enteredSchoolName,
      degree: enteredDegree,
      date: enteredDate,
    };
    props.onEducationInputChange(schoolData);
    setEnteredSchoolName('');
    setEnteredDegree('');
    setEnteredDate('');
    endInput();
  };

  const cancelInput = () => {
    setEnteredSchoolName('');
    setEnteredDegree('');
    setEnteredDate('');
    endInput();
  };

  const startInput = () => setIsNew(false);

  const endInput = () => setIsNew(true);

  return (
    <div>
      <h1>Education</h1>
      {isNew && (
        <div className="long-button" onClick={startInput}>
          <span>+</span>
          <span>Add Education</span>
        </div>
      )}
      {!isNew && (
        <form onSubmit={submitHandler} className="education-input">
          <div className="row">
            <label>School Name</label>
            <input
              type="text"
              onChange={schoolNameHandler}
              value={enteredSchoolName}
            />
          </div>
          <div className="row">
            <label>Degree</label>
            <input type="text" onChange={degreeHandler} value={enteredDegree} />
          </div>
          <div className="row">
            <label>Date</label>
            <input type="date" onChange={dateHandler} value={enteredDate} />
          </div>
          <button className="btn">Save</button>
          <button type="button" onClick={cancelInput} className="btn">
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default EducationInput;
