import React, { useState } from 'react';

const ExperienceInput = (props) => {
  const [isNew, setIsNew] = useState(true);
  const [enteredtitle, setEnteredtitle] = useState('');
  const [enteredCompany, setEnteredCompany] = useState('');
  const [enteredLocation, setEnteredLocation] = useState('');
  const [enteredDateFrom, setEnteredDateFrom] = useState('');
  const [enteredDateTo, setEnteredDateTo] = useState('');

  const titleHandler = (e) => {
    setEnteredtitle(e.target.value);
  };

  const companyHandler = (e) => {
    setEnteredCompany(e.target.value);
  };
  const locationHandler = (e) => {
    setEnteredLocation(e.target.value);
  };

  const dateFromHandler = (e) => {
    setEnteredDateFrom(e.target.value);
  };
  const dateToHandler = (e) => {
    setEnteredDateTo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const experienceData = {
      id: Date.now(),
      title: enteredtitle,
      location: enteredLocation,
      company: enteredCompany,
      dateFrom: enteredDateFrom,
      dateTo: enteredDateTo,
    };
    props.onExperienceInputChange(experienceData);
    setEnteredtitle('');
    setEnteredCompany('');
    setEnteredLocation('');
    setEnteredDateFrom('');
    setEnteredDateTo('');
    endInput();
  };

  const cancelInput = () => {
    setEnteredtitle('');
    setEnteredCompany('');
    setEnteredLocation('');
    setEnteredDateFrom('');
    setEnteredDateTo('');
    endInput();
  };

  const startInput = () => setIsNew(false);

  const endInput = () => setIsNew(true);

  return (
    <div>
      <h1>Experience</h1>
      {isNew && (
        <div className="long-button" onClick={startInput}>
          <span>+</span>
          <span>Add Experience</span>
        </div>
      )}
      {!isNew && (
        <form onSubmit={submitHandler} className="form-input">
          <div className="row">
            <label>Job Title</label>
            <input type="text" onChange={titleHandler} value={enteredtitle} />
          </div>
          <div className="row">
            <label>Company</label>
            <input
              type="text"
              onChange={companyHandler}
              value={enteredCompany}
            />
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

export default ExperienceInput;
