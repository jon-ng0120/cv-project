import React, { useState } from 'react';

const EducationInput = (props) => {
  const [isNew, setIsNew] = useState(true);
  const [enteredSchoolName, setEnteredSchoolName] = useState('');
  const [enteredDegree, setEnteredDegree] = useState('');
  const [enteredLocation, setEnteredLocation] = useState('');
  const [enteredDateFrom, setEnteredDateFrom] = useState('');
  const [enteredDateTo, setEnteredDateTo] = useState('');

  const schoolNameHandler = (e) => {
    setEnteredSchoolName(e.target.value);
  };

  const degreeHandler = (e) => {
    setEnteredDegree(e.target.value);
  };
  const locationHandler = (e) => {
    setEnteredLocation(e.target.value);
  };
  // const provinceHandler = (e) => {
  //   setEnteredProvince(e.target.value);
  // };

  const dateFromHandler = (e) => {
    setEnteredDateFrom(e.target.value);
  };
  const dateToHandler = (e) => {
    setEnteredDateTo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const schoolData = {
      id: Date.now(),
      name: enteredSchoolName,
      location: enteredLocation,
      degree: enteredDegree,
      dateFrom: enteredDateFrom,
      dateTo: enteredDateTo,
    };
    props.onEducationInputChange(schoolData);
    setEnteredSchoolName('');
    setEnteredDegree('');
    setEnteredLocation('');
    setEnteredDateFrom('');
    setEnteredDateTo('');
    endInput();
  };

  const cancelInput = () => {
    setEnteredSchoolName('');
    setEnteredDegree('');
    setEnteredLocation('');
    setEnteredDateFrom('');
    setEnteredDateTo('');
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
        <form onSubmit={submitHandler} className="form-input">
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
            <label>Location</label>
            <input
              type="text"
              onChange={locationHandler}
              value={enteredLocation}
            />
          </div>

          <div className="row">
            <label>Date From</label>
            <input
              type="date"
              onChange={dateFromHandler}
              value={enteredDateFrom}
            />
          </div>
          <div className="row">
            <label>Date To</label>
            <input type="date" onChange={dateToHandler} value={enteredDateTo} />
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
